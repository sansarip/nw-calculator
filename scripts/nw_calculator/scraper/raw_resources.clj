(ns nw-calculator.scraper.raw-resources
  (:require [nw-calculator.scraper.html :as html]
            [nw-calculator.scraper.utilities :as util]
            [clojure.zip :as z]))

(defn extract-external-url [row-map]
  (-> row-map
      :attrs
      :data-href
      util/prepend-origin))

(defn extract-png-url [row-map]
  (some-> (html/make-row-zipper row-map)
          z/down
          z/right
          z/down
          z/right
          z/right
          z/down
          z/right
          z/node
          :attrs
          :src))

(defn extract-name [row-map]
  (some-> (html/make-row-zipper row-map)
          z/down
          ((util/repeat* 3 z/right))
          z/down
          z/right
          z/down
          z/right
          z/down
          z/node))

(defn extract-tier [row-map]
  (some-> (html/make-row-zipper row-map)
          z/down
          ((util/repeat* 9 z/right))
          z/down
          z/right
          z/right
          z/node
          util/parse-int))

(def extract-raw-resource-data*
  (comp
    util/hash-name
    (partial zipmap
             [:external-url
              :png-url
              :name
              :tier])
    (juxt extract-external-url
          extract-png-url
          extract-name
          extract-tier)))

(defn extract-raw-resource-data [rows]
  (into #{} (map extract-raw-resource-data*) rows))
