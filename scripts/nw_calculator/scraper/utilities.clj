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

(defn prepend-images-path [filename]
 (str config/images-path (with-separator filename)))

(defn uppercase-hash
  "Upper-cases and hashes a string"
  [s]
  (some-> s
          string/upper-case
          hash
          str))

(defn make-id
  ([item-name]
   (make-id "" item-name))
  ([item-type item-name]
   (uppercase-hash (str item-type item-name))))
