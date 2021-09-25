(ns nw-calculator.business-logic
  (:require [nw-calculator.utilities :as util]))

(defn big-default-xp [{:keys [xp]}]
  (or xp 1000000))

(defn category? [{item-type :type}]
  (boolean (#{"category"} item-type)))

(defn options-or-ingredients [{:keys [options ingredients]}]
  (or options ingredients))

(def resolve-ref
  (memoize
    (fn [items-by-id {id :id :as ref}]
      (merge (items-by-id id) ref))))

(def resolve-refs
  (memoize
    (fn
      ([item items-by-id]
       (resolve-refs item items-by-id #{}))
      ([item items-by-id prev-path]
       (resolve-refs item items-by-id prev-path {}))
      ([{:keys [ingredients options id] :as item} items-by-id prev-walked-ids selected-options-by-category-path]
       (when (and items-by-id (not ((set prev-walked-ids) id)))
         (let [path (conj prev-walked-ids id)
               resolve-ref* #(resolve-ref items-by-id %)
               recur* (fn [refs & [meta]]
                        (into []
                              (comp
                                (map resolve-ref*)
                                (map #(vary-meta % merge meta))
                                (map #(resolve-refs % items-by-id path selected-options-by-category-path))
                                (filter some?))
                              refs))
               select-option (fn [{:keys                [id category-name category-id]
                                   name*                :name
                                   [default-option-ref] :options
                                   category-path        :path
                                   :as                  category}]
                               (let [[selected-option] (recur* [(selected-options-by-category-path
                                                                   category-path
                                                                   default-option-ref)])]
                                 (merge
                                   (cond-> category
                                           (not category-name) (assoc :category-name name*)
                                           (not category-id) (assoc :category-id id))
                                   (dissoc selected-option :path :quantity))))]
           (cond-> (assoc item :path path)
                   ingredients (update :ingredients recur*)
                   options (-> (update :options recur* {:as-is? true}) ; Keeps options from being transformed into hiccup
                               (update :options #(vec (sort-by big-default-xp %)))
                               select-option))))))))

(defn craftable-item [{:keys [ingredients] :as item}]
  (when (not-empty ingredients)
    item))

(def multiply-quantities
  (memoize
    (fn
      ([item items-by-id] (multiply-quantities item items-by-id 1))
      ([{:keys [quantity xp ingredients id] :or {quantity 1} :as item} items-by-id prev-multiplier]
       (let [{base-multiplier :quantity
              :or             {base-multiplier 1}} (items-by-id id)
             product (* quantity prev-multiplier)
             multiplier (-> (/ product base-multiplier) Math/ceil int)
             recur* #(multiply-quantities % items-by-id multiplier)
             recur-on-items (fn [items]
                              (into #{} (map recur*) items))]
         (-> item
             (cond-> ingredients (update :ingredients recur-on-items))
             (assoc :quantity product)
             (cond-> (number? xp) (assoc :xp (* multiplier xp)))))))))

(defn merge-ingredients
  [{item-ingredients :ingredients :as item}]
  (cond-> item
          (not-empty item-ingredients)
          (-> (update :ingredients #(group-by :id %))
              (update :ingredients #(mapv (fn [[_id ingredients]]
                                            (reduce (fn [item-map-1
                                                         {ing-2 :ingredients
                                                          q-2   :quantity}]
                                                      (merge-ingredients
                                                        (-> item-map-1
                                                            (update :quantity + q-2)
                                                            (cond->
                                                              ing-2 (update :ingredients into ing-2)))))
                                                    ingredients))
                                          %)))))

(defn merge-items
  "Merges the given items into one item map

  ```clojure
    {:id          :items-summary
     :items       #{'...} ; Set of items
     :ingredients ['...] ; Merged ingredients of given items}
  ```"
  [items]
  (let [merged-items (reduce
                       (fn [coll {item-ingredients :ingredients :as item}]
                         (-> coll
                             (update :items conj (with-meta (dissoc item :ingredients) {:as-is? true}))
                             (update :ingredients into item-ingredients)))
                       {:id          :items-summary
                        :items       #{}
                        :ingredients []}
                       items)]
    (merge-ingredients merged-items)))

