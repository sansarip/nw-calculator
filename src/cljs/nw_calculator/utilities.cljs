(ns nw-calculator.utilities
  (:require [clojure.string :as string]
            [clojure.walk :as w]
            [cljs.reader :as edn])
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
  (let [fuse (new js/Fuse (clj->js items) #js {:threshold 0.15 :useExtendedSearch true})]
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
      ([{:keys [amount xp ingredients] :or {amount 1} :as item} multiplier]
       (let [product (* multiplier amount)]
         (-> item
             (cond-> (not-empty ingredients) (assoc :ingredients
                                                    (into #{}
                                                          (map #(multiply-amounts % product))
                                                          ingredients)))
             (assoc :amount product)
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

(defn get-local-storage [k]
  (edn/read-string (js/window.localStorage.getItem k)))

(defn set-local-storage! [k v]
  (js/window.localStorage.setItem k v))