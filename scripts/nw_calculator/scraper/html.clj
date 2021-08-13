(ns nw-calculator.scraper.html
  (:require [clojure.zip :as z]
            [net.cgrand.enlive-html :as enlive]
            [nw-calculator.scraper.utilities :as util]))

(defn make-row-zipper [row-map]
  (z/zipper :content
            (comp seq :content)
            (fn [_ c] c)
            row-map))

(defn extract-first-href [node]
  (some-> node :content first :attrs :href))

(defn get-next-page-url [enlive-html-map]
  (some-> enlive-html-map
          (enlive/select [:li.pagination-next])
          first
          extract-first-href
          util/prepend-origin))

(defn select-table-rows
  "Skips the header row"
  [enlive-html-map]
  (rest (enlive/select enlive-html-map [:tr])))

