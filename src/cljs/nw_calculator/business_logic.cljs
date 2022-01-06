(ns nw-calculator.business-logic)

(defn category? [{item-type :type}]
  (boolean (#{"category"} item-type)))

(def resolve-ref
  (memoize
    (fn [items-by-id {id :id :as ref}]
      (merge (items-by-id id) ref))))

(defn compare-and-prioritize-nils [a b]
  (let [c (compare a b)]
    (cond
      (nil? a) 1
      (nil? b) -1
      :else c)))

(defn sort-by-ascending-tier-and-xp
  "Sorts by ascending tier and xp"
  ([items]
   (sort
     sort-by-ascending-tier-and-xp
     items))
  ([{tier-a :tier xp-a :xp}
    {tier-b :tier xp-b :xp}]
   (let [c (compare-and-prioritize-nils tier-a tier-b)]
     (if (zero? c)
       (compare-and-prioritize-nils xp-a xp-b)
       c))))

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
               select-option (fn [{:keys            [id category-name category-id]
                                   name*            :name
                                   [default-option] :options
                                   category-path    :path
                                   :as              category}]
                               (let [selected-option (or (some-> (selected-options-by-category-path category-path)
                                                                 vector
                                                                 recur*
                                                                 first) ; Selected options need to be resolved
                                                         default-option)]
                                 (merge
                                   (cond-> category
                                           (not category-name) (assoc :category-name name*)
                                           (not category-id) (assoc :category-id id))
                                   (dissoc selected-option :path :quantity))))]
           (cond-> (assoc item :path path)
                   ingredients (update :ingredients recur*)
                   options (-> (update :options recur* {:as-is? true}) ; Keeps options from being transformed into hiccup
                               (update :options #(vec (sort-by-ascending-tier-and-xp %)))
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

(def sort-items-by-name
  (memoize
    (fn [items]
      (sort-by :name items))))


