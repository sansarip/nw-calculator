(ns nw-calculator.calculations
  "Calculator utilities related to item resolution and quantities"
  (:require [clojure.string :as string]))

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
  "Given an item and a map of items by id,
  returns recursively resolved ingredient refs"
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

(defn craftable-item
  "Given an item,
  returns the given item if the item has ingredients"
  [{:keys [ingredients] :as item}]
  (when (not-empty ingredients)
    item))

(defn refining-agent
  "Given a resolved item,
  returns the given item if it is a refining agent"
  [{cname :category-name :as item}]
  (when (some->> cname
                 string/lower-case
                 (re-find #"flux|reagent|refining"))
    item))

(def refining-agent-bonuses
  "{current-item-tier {refining-agent-tier bonus}}"
  {3 {3 0
      4 0.5
      5 0.75}
   4 {3 -0.05
      4 0
      5 0.25}
   5 {3 -0.1
      4 -0.05
      5 0}})

(def multiply-quantities
  "Given an item and a map of items by id,
  returns the given item with its ingredients multiplied by its quantity

  Trade Skill Bonus + (Base Chance x 100) + (Refining Agent Tier Difference x 100) = Additional Item Chance"
  (memoize
    (fn
      ([item items-by-id trade-skill-bonuses]
       (multiply-quantities
         item
         items-by-id
         trade-skill-bonuses
         {:multiplier               1
          :additional-item-bonuses? true}))
      ([{:keys [quantity xp qty-bonus ingredients id tier trade-skill]
         :or   {quantity  1
                qty-bonus 0}
         :as   item}
        items-by-id
        trade-skill-bonuses
        {:keys [multiplier
                parent-item
                additional-item-bonuses?]}]
       (let [{parent-tier        :tier
              parent-trade-skill :trade-skill
              parent-qty-bonus   :qty-bonus
              parent-ingredients :ingredients
              :or                {parent-tier        tier
                                  parent-trade-skill trade-skill
                                  parent-qty-bonus   qty-bonus
                                  parent-ingredients ingredients}} parent-item
             {base-multiplier :quantity
              :or             {base-multiplier 1}} (items-by-id id)
             refining-agent-bonus (some-> (some refining-agent parent-ingredients)
                                          :tier
                                          (as-> $ (get-in refining-agent-bonuses [parent-tier $])))
             trade-skill-bonus (get trade-skill-bonuses (keyword parent-trade-skill))
             additional-item-chance (if additional-item-bonuses?
                                      (min (max (+ trade-skill-bonus parent-qty-bonus refining-agent-bonus) 0) 1)
                                      0)
             multiplier*quantity (* multiplier quantity)
             discount (* (int (/ (* multiplier additional-item-chance) 2)) quantity)
             multiplier*quantity-surplus (- multiplier*quantity (when parent-item discount))
             next-multiplier (-> (/ multiplier*quantity-surplus base-multiplier) Math/ceil int)
             recur* #(multiply-quantities
                       %
                       items-by-id
                       trade-skill-bonuses
                       {:multiplier               next-multiplier
                        :additional-item-bonuses? additional-item-bonuses?
                        :parent-item              item})
             recur-on-items (fn [items] (into #{} (map recur*) items))]
         (-> item
             (cond-> ingredients (update :ingredients recur-on-items))
             (assoc :quantity multiplier*quantity-surplus :discount discount)
             (cond-> (number? xp) (assoc :xp (* next-multiplier xp)))))))))

(defn merge-ingredients
  "Given an item,
  merges the item's ingredients of the same kind"
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


