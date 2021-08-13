(ns nw-calculator.core
  (:require [net.cgrand.enlive-html :as enlive]
            [clj-http.client :as client]
            [clojure.zip :as z]
            [clojure.string :as string]
            [taoensso.timbre :as timbre]
            [clojure.pprint :refer [pprint]]
            [slingshot.slingshot :refer [try+ throw+]])
  (:import (java.io ByteArrayInputStream ByteArrayOutputStream BufferedOutputStream FileOutputStream)
           (javax.imageio ImageIO)
           (java.awt Image)
           (java.awt.image BufferedImage)))

(def origin "https://newworldfans.com")
(def image-path "./resources/public/images")
(def item-data-path "./resources/public/data")

(defn http-get [url & [opts]]
  (client/get url (merge {:cookie-policy         :none
                          :throw-entire-message? true}
                         opts)))

(defn throttled-http-get
  [url & [{:keys [retry-attempt
                  throttle?
                  http-opts
                  sleep-time-ms]
           :or   {retry-attempt 0
                  sleep-time-ms 1000}}]]
  (when throttle?
    (timbre/info "\uD83D\uDE34 Sleeping for" (str sleep-time-ms "ms"))
    (Thread/sleep sleep-time-ms))
  (try+ (http-get url http-opts)
        (catch [:status 429] _
          (let [max-attempts 5
                inc-attempt (inc retry-attempt)
                next-sleep-time-ms (* inc-attempt sleep-time-ms)]
            (if (<= retry-attempt max-attempts)
              (do (timbre/warn
                    "⚠️Rate limit exceeded for:"
                    url
                    "retrying!"
                    "Attempt:"
                    (str retry-attempt "/" max-attempts))
                  (throttled-http-get
                    url
                    {:retry-attempt inc-attempt
                     :throttle?     true
                     :sleep-time-ms next-sleep-time-ms}))
              (throw+))))))

(defn throttled-fetch-html [url & [opts]]
  (-> (throttled-http-get url {:http-opts opts})
      :body
      enlive/html-snippet))

(defn download-png! [url]
  (when (not-empty url)
    (let [data (:body (throttled-http-get url {:http-opts {:as :byte-array}}))
          width 50
          height 25
          filename (last (string/split url #"/"))
          filepath (str image-path "/" filename)]
      (with-open [input-stream (ByteArrayInputStream. data)
                  buffer (ByteArrayOutputStream.)
                  output-stream (BufferedOutputStream. (FileOutputStream. filepath))]
        (let [scaled-image (.getScaledInstance
                             (ImageIO/read input-stream)
                             width
                             height
                             Image/SCALE_SMOOTH)
              image-buffer (BufferedImage.
                             width,
                             height,
                             BufferedImage/TYPE_INT_ARGB)
              graphics (.getGraphics image-buffer)]
          (doto graphics
            (.drawImage scaled-image 0 0 nil)
            .dispose)
          (ImageIO/write image-buffer "png" buffer)
          (.write output-stream (.toByteArray buffer))))))
  url)

(defn select-table-rows
  "Skips the header row"
  [enlive-html-map]
  (rest (enlive/select enlive-html-map [:tr])))

(defn make-row-zipper [row-map]
  (z/zipper :content
            (comp seq :content)
            (fn [_ c] c)
            row-map))

(defn repeat* [n f]
  (apply comp (repeat n f)))

(defn str-hash [s]
  (str (hash s)))

(defn parse-int [s]
  (some->> s
           (re-find #"\d+")
           Integer/parseInt))

(defn prepend-origin [path]
  (str origin path))

(defn extract-url [row-map]
  (prepend-origin (-> row-map :attrs :data-href)))

(defn extract-png-url [row-map]
  (some-> (make-row-zipper row-map)
          z/down
          z/right
          z/down
          ((repeat* 2 z/right))
          z/down
          z/right
          z/node
          :attrs
          :src))

(defn extract-name [row-map]
  (some-> (make-row-zipper row-map)
          z/down
          ((repeat* 3 z/right))
          z/down
          z/right
          z/node
          :attrs
          :title))

(defn extract-tier [row-map]
  (some-> (make-row-zipper row-map)
          z/down
          ((repeat* 9 z/right))
          z/down
          ((repeat* 2 z/right))
          z/node
          parse-int))

(defn extract-skill-level [row-map]
  (some-> (make-row-zipper row-map)
          z/down
          ((repeat* 11 z/right))
          z/down
          ((repeat* 2 z/right))
          z/node
          parse-int))

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
  (let [ingredient-nodes (some-> (make-row-zipper row-map)
                                 z/down
                                 ((repeat* 7 z/right))
                                 z/node
                                 :content
                                 rest
                                 (->> (take-nth 2)))]
    (into []
          (map (fn [{[amount {{path :href} :attrs}] :content}]
                 (let [name (-> path prepend-origin throttled-fetch-html select-ingredient-name)]
                   {:name   name
                    :id     (str-hash name)
                    :amount (parse-int amount)})))
          ingredient-nodes)))

(defn extract-xp [row-map]
  (some-> (make-row-zipper row-map)
          z/down
          ((repeat* 13 z/right))
          z/down
          z/node
          string/trim
          parse-int))

(defn extract-first-href [node]
  (some-> node :content first :attrs :href))

(defn download-pngs! [extracted-item-data]
  (timbre/info "⬇️Downloading pngs to" (str image-path "..."))
  (doseq [item extracted-item-data]
    (download-png! (:png-url item)))
  extracted-item-data)

(def extract-crafting-data*
  (comp
    (fn [{:keys [name] :as data}]
      (assoc data :id (str-hash name)))
    (partial zipmap
             [:external-url
              :png-url
              :name
              :tier
              :skill-level
              :xp
              :ingredients])
    (juxt extract-url
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
  (into [] (map extract-crafting-data*) rows))

(defn get-next-page-url [enlive-html-map]
  (some-> enlive-html-map
          (enlive/select [:li.pagination-next])
          first
          extract-first-href
          prepend-origin))

(defn crawl-category
  ([url] (crawl-category url []))
  ([url aggregated-extracted-data] (crawl-category url aggregated-extracted-data extract-crafting-data))
  ([url aggregated-extracted-data extracting-fn]
   (timbre/info "\uD83D\uDD78️ Crawling to page:" url)
   (let [enlive-html-map (throttled-fetch-html url)
         aggregated-extracted-data* (into aggregated-extracted-data
                                          (-> enlive-html-map
                                              select-table-rows
                                              extracting-fn))
         next-page-url (get-next-page-url enlive-html-map)]
     (if next-page-url
       (crawl-category
         next-page-url
         aggregated-extracted-data*
         extracting-fn)
       aggregated-extracted-data*))))

(defn write-data! [extracted-item-data]
  (timbre/info "✍️Writing item data to" (str item-data-path "..."))
  (spit (str item-data-path "/items.edn") extracted-item-data))

(defn get-crafting-category-urls []
  (let [list-item-maps (-> (prepend-origin "/crafting")
                           throttled-fetch-html
                           (enlive/select [:ul.pagination-list])
                           first
                           :content
                           rest
                           (->> (take-nth 2)))]
    (into [] (map (comp prepend-origin extract-first-href) list-item-maps))))

(defn crawl-crafting-categories []
  (let [crafting-category-urls (get-crafting-category-urls)
        crawl-category-fn (fn [url] (crawl-category url [] extract-crafting-data))]
    (mapcat crawl-category-fn crafting-category-urls)))

(def extract-raw-resource-data*
  (comp [:external-url
         :png-url
         :name
         :tier]))


(defn extract-raw-resource-data [rows]
  (into [] (map extract-raw-resource-data*) rows))

(defn crawl-raw-resource-category []
  (crawl-category (prepend-origin "/db/category/Resource/RawResources") [] extract-raw-resource-data))

(defn download-crafting-data! [& [{:keys [download-pngs?]}]]
  (timbre/info "\uD83D\uDD77️ Crawling...")
  (-> (crawl-crafting-categories)
      (into (crawl-raw-resource-category))
      (cond-> download-pngs? download-pngs!)
      vec
      write-data!)
  (timbre/info "✨ Done!"))
