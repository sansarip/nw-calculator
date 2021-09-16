(ns nw-calculator.utilities
  (:require [clojure.string :as string]
            [clojure.walk :as w]
            [cljs.reader :as edn])
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

(defn fuzzy-search [items substr]
  (let [fuse (new js/Fuse (clj->js items) #js {:threshold 0.15 :useExtendedSearch true})]
    (into [] (map #(.-item %)) (.search fuse substr))))

(defn short-uuid-str []
  (string/join (take 8 (str (random-uuid)))))

(defn remove-by-ids [coll ids]
  (set (remove (comp (set ids) :id) coll)))

(defn remove-walked-ids-from-refs [walked-ids {:keys [ingredients options] :as item}]
  (cond-> item
          options (update :options remove-by-ids walked-ids)
          ingredients (update :ingredients remove-by-ids walked-ids)))

(def resolve-refs
  (memoize
    (fn
      ([item items-by-id]
       (resolve-refs item items-by-id #{}))
      ([{:keys [ingredients options id] :as item} items-by-id walked-ids]
       (when (and items-by-id (not (walked-ids id)))
         (letfn [(recur* [refs]
                   (into #{}
                         (comp
                           (map (fn [{ref-id :id :as ref}] (merge (items-by-id ref-id) ref)))
                           (map #(resolve-refs % items-by-id (conj walked-ids id)))
                           (filter some?))
                         refs))]
           (cond-> item
                   ingredients (update :ingredients recur*)
                   options (update :options recur*))))))))

(def multiply-quantities
  (memoize
    (fn
      ([item] (multiply-quantities item 1))
      ([{:keys [quantity xp ingredients] :or {quantity 1} :as item} multiplier]
       (let [product (* quantity multiplier)]
         (-> item
             (cond-> (not-empty ingredients) (assoc :ingredients
                                                    (into #{}
                                                          (map #(multiply-quantities % product))
                                                          ingredients)))
             (assoc :quantity product)
             (cond-> (number? xp) (assoc :xp (* product xp)))))))))

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