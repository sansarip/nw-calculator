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

(defn fuzzy-search [items substr]
  (let [fuse (new js/Fuse (clj->js items) #js {:threshold 0.15 :useExtendedSearch true})]
    (into [] (map #(.-item %)) (.search fuse substr))))

(defn short-uuid-str []
  (string/join (take 8 (str (random-uuid)))))

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