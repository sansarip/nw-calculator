(ns nw-calculator.utilities
  (:require [clojure.string :as string])
  (:import [goog.async Debouncer]))

(defn no-op [& _])

(defn parse-pos
  ([s] (parse-pos s 1))
  ([s default]
   (let [n (js/parseInt s)]
     (if (or (js/isNaN n) (<= n 0))
       default
       n))))

(defn debounce [f interval]
  (let [dbnc (Debouncer. f interval)]
    (fn [& args] (.apply (.-fire dbnc) dbnc (to-array args)))))

(defn category? [{item-type :type}]
  (boolean (#{"category"} item-type)))

(defn fuzzy-search [items substr]
  (let [fuse (new js/Fuse (clj->js items) #js {:threshold 0.15 :useExtendedSearch true})]
    (into [] (map #(.-item %)) (.search fuse substr))))

(defn short-uuid-str []
  (string/join (take 8 (str (random-uuid)))))

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
                               (sort-by (comp #(or % 99) :tier) (recur* options {:as-is? true})))]
           (cond-> (assoc item :path path)
                   ingredients (update :ingredients recur*)
                   options (-> (update :options recur-options)
                               select-option))))))))

(def multiply-quantities
  (memoize
    (fn
      ([item items-by-id] (multiply-quantities item items-by-id 1))
      ;; TODO: To see what the item's base multiplier is, get the quantity from items-by-id, then divide the quantity below by the base-multiplier to get the next multiplier rounded up
      ([{:keys [quantity xp ingredients options selected-option id] :or {quantity 1} :as item} items-by-id prev-multiplier]
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

(defn craftable-item [{:keys [ingredients] :as item}]
  (when (not-empty ingredients)
    item))

(defn get-ele-offsets [ele]
  (let [scroll-left (or js/window.pageXOffset
                        js/document.documentElement.scrollLeft
                        js/document.body.scrollLeft
                        0)
        scroll-top (or js/window.pageYOffset
                       js/document.documentElement.scrollTop
                       js/document.body.scrollTop
                       0)
        box (.getBoundingClientRect ele)
        left (+ (.-left box) scroll-left)
        top (+ (.-top box) scroll-top)]
    [left top]))

(defn html->ele [html]
  (let [template (js/document.createElement "template")]
    (set! (.-innerHTML template) (string/trim html))
    (.. template -content -firstChild)))

(defn vec-remove-nth [v n]
  (let [left (subvec v 0 n)
        right (subvec v (inc n))]
    (vec (concat left right))))