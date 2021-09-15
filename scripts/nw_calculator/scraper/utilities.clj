(ns nw-calculator.scraper.utilities
  (:require [nw-calculator.scraper.config :as config]
            [clojure.string :as string]))

(defn with-separator [s]
  (cond->> s
           (not (string/starts-with? s "/")) (str "/")))

(defn prepend-origin [& path]
  (->> (string/join path)
       with-separator
       (str config/origin)))

(defn prepend-data-path [filename]
  (str config/item-data-path (with-separator filename)))

(defn uppercase-hash
  "Upper-cases and hashes a string"
  [s]
  (some-> s
          string/upper-case
          hash
          str))

(defn repeat* [n f]
  (apply comp (repeat n f)))

(defn parse-int [s]
  (some->> s
           (re-find #"\d+")
           Integer/parseInt))

(defn hash-name [{:keys [name] :as data}]
  (assoc data :id (uppercase-hash name)))
