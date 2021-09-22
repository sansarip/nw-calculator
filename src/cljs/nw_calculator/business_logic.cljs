(ns nw-calculator.business-logic)

(defn category? [{item-type :type}]
  (boolean (#{"category"} item-type)))

(defn options-or-ingredients [{:keys [options ingredients]}]
  (or options ingredients))

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
               resolve-ref (fn [{ref-id :id :as ref}] (merge (items-by-id ref-id) ref))
               recur* (fn [refs & [meta]]
                        (into []
                              (comp
                                (map resolve-ref)
                                (map #(vary-meta % merge meta))
                                (map #(resolve-refs % items-by-id path selected-options-by-category-path))
                                (filter some?))
                              refs))
               select-option (fn [{:keys            [id category-name category-id]
                                   name*            :name
                                   [default-option] :options
                                   category-path    :path
                                   :as              category}]
                               (let [selected-option (selected-options-by-category-path category-path default-option)]
                                 (merge (cond-> category
                                                (not category-name) (assoc :category-name name*)
                                                (not category-id) (assoc :category-id id))
                                        (dissoc selected-option :path :quantity))))
               recur-options (fn [options]
                               ;; Keeps options from being transformed into hiccup
                               (vec (sort-by (comp #(or % 1000000) :xp) (recur* options {:as-is? true}))))]
           (cond-> (assoc item :path path)
                   ingredients (update :ingredients recur*)
                   options (-> (update :options recur-options)
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

