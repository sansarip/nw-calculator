(ns nw-calculator.utilities
  (:require [clojure.string :as string])
  (:import [goog.async Debouncer]))

(defn localize-external-img [url]
  (some->> (string/split url #"/")
           last
           (str "/images/")))

(defn no-op [& _])

(defn debounce [f interval]
  (let [dbnc (Debouncer. f interval)]
    (fn [& args] (.apply (.-fire dbnc) dbnc (to-array args)))))

(defn fuzzy-search [s substr]
  (when (not-empty substr)
    (string/includes? (string/lower-case s) (string/lower-case substr))))

(defn short-uuid-str []
  (string/join (take 8 (str (random-uuid)))))