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

(defn extract-src [node]
  (some-> node :attrs :src))

(defn select-table-rows
  "Skips the header row"
  [enlive-html-map]
  (rest (enlive/select enlive-html-map [:tr])))

(defn select-item-images [enlive-html-map]
  (enlive/select enlive-html-map [:div.item-bg :img]))

