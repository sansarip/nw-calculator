(ns nw-calculator.utilities
  (:require [clojure.string :as string]
            [clojure.walk :as w])
  (:import [goog.async Debouncer]))

(defn localize-external-img [url]
  (some->> (string/split url #"/")
           last
           (str "/images/")))

(defn no-op [& _])

(defn debounce [f interval]
  (let [dbnc (Debouncer. f interval)]
    (fn [& args] (.apply (.-fire dbnc) dbnc (to-array args)))))

(defn fuzzy-search [items substr]
  (let [fuse (new js/Fuse (clj->js items) #js {})]
    (into [] (map #(.-item %)) (.search fuse substr))))

(defn short-uuid-str []
  (string/join (take 8 (str (random-uuid)))))

(defn remove-self-from-ingredients [{:keys [id] :as item}]
  (update
    item
    :ingredients
    (fn [ingredients]
      (set (remove #(= (:id %) id) ingredients)))))

(def get-ingredients
  (memoize
    (fn [item items-by-id]
      (w/prewalk
        (fn [{:keys [amount id] :as node}]
          (let [ingredient? (and (map? node) amount)]
            (if ingredient?
              (->> id
                   (get items-by-id)
                   (merge node)
                   remove-self-from-ingredients)
              node)))
        (remove-self-from-ingredients item)))))

(def multiply-amounts
  (memoize
    (fn
      ([item] (multiply-amounts item 1))
      ([{:keys [amount ingredients] :or {amount 1} :as item} multiplier]
       (let [product (* multiplier amount)]
         (-> item
             (cond-> (not-empty ingredients) (assoc :ingredients
                                                    (into #{}
                                                          (map #(multiply-amounts % product))
                                                          ingredients)))
             (assoc :amount product)))))))

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