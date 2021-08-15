(ns nw-calculator.scraper.crafting
  (:require [nw-calculator.scraper.utilities :as util]
            [clojure.zip :as z]
            [clojure.string :as string]
            [net.cgrand.enlive-html :as enlive]
            [nw-calculator.scraper.http :as http]
            [nw-calculator.scraper.html :as html]))

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

(defn extract-skill-level [row-map]
  (some-> (html/make-row-zipper row-map)
          z/down
          ((util/repeat* 11 z/right))
          z/down
          z/right
          z/right
          z/node
          util/parse-int))

(defn select-ingredient-name [enlive-data]
  (some-> (enlive/select enlive-data [:h1])
          first
          :content
          first
          (string/split #" \(T")
          first))

(defn extract-ingredients
  "Produces a vector of maps - each map representing a crafting ingredient i.e.
  ```clojure
    [{:name str :id str :amount int} ...]
  ```"
  [row-map]
  (let [ingredient-nodes (some-> (html/make-row-zipper row-map)
                                 z/down
                                 ((util/repeat* 7 z/right))
                                 z/node
                                 :content
                                 rest
                                 (->> (take-nth 2)))]
    (into #{}
          (map (fn [{[amount {{path :href} :attrs}] :content}]
                 (let [name (-> path
                                util/prepend-origin
                                http/throttled-fetch-html
                                select-ingredient-name)]
                   {:name   name
                    :id     (util/uppercase-hash name)
                    :amount (util/parse-int amount)})))
          ingredient-nodes)))

(defn extract-xp [row-map]
  (some-> (html/make-row-zipper row-map)
          z/down
          ((util/repeat* 13 z/right))
          z/down
          z/node
          string/trim
          util/parse-int))

(def extract-crafting-data*
  (comp
    util/hash-name
    (partial zipmap
             [:external-url
              :png-url
              :name
              :tier
              :skill-level
              :xp
              :ingredients])
    (juxt extract-external-url
          extract-png-url
          extract-name
          extract-tier
          extract-skill-level
          extract-xp
          extract-ingredients)))

(defn extract-crafting-data
  "Produces a vector of maps - each map representing a craftable item i.e.
  ```clojure
    [{:external-url str :image str :name str :tier int :skill-level int :ingredients seq} ...]
  ```"
  [rows]
  (into #{} (map extract-crafting-data*) rows))

(defn get-crafting-category-urls []
  (let [list-item-maps (-> (util/prepend-origin "/crafting")
                           http/throttled-fetch-html
                           (enlive/select [:ul.pagination-list])
                           first
                           :content
                           rest
                           (->> (take-nth 2)))]
    (into #{} (map (comp util/prepend-origin html/extract-first-href) list-item-maps))))