(ns nw-calculator.scraper.main
  (:require [taoensso.timbre :as timbre]
            [clojure.pprint :refer [pprint]]
            [slingshot.slingshot :refer [try+ throw+]]
            [nw-calculator.scraper.utilities :as util]
            [nw-calculator.scraper.config :as config]
            [nw-calculator.scraper.http :as http]
            [nw-calculator.scraper.html :as html]
            [nw-calculator.scraper.crafting :as crafting]
            [nw-calculator.scraper.raw-resources :as rawr]
            [clojure.string :as string]))

(defn crawl-category
  ([url] (crawl-category url []))
  ([url accumulated-extracted-data]
   (crawl-category url accumulated-extracted-data crafting/extract-crafting-data))
  ([url aggregated-extracted-data extracting-fn]
   (timbre/info "\uD83D\uDD78️ Crawling to" url)
   (let [enlive-html-map (http/throttled-fetch-html url)
         accumulated-extracted-data* (into aggregated-extracted-data
                                           (-> enlive-html-map
                                               html/select-table-rows
                                               extracting-fn))
         next-page-url (html/get-next-page-url enlive-html-map)]
     (if next-page-url
       (crawl-category
         next-page-url
         accumulated-extracted-data*
         extracting-fn)
       accumulated-extracted-data*))))

(defn crawl-raw-resource-category []
  (crawl-category
    (util/prepend-origin "/db/category/Resource/RawResources")
    []
    rawr/extract-raw-resource-data))

(defn write-items-edn! [extracted-item-data]
  (let [output-file-path (util/prepend-data-path "items.edn")]
    (timbre/info "✍️Writing item data to" output-file-path)
    (spit output-file-path
          (-> extracted-item-data
              pprint
              with-out-str
              string/trim)))
  extracted-item-data)

(defn crawl-crafting-categories []
  (let [crafting-category-urls (crafting/get-crafting-category-urls)
        crawl-category-fn (fn [url] (crawl-category url [] crafting/extract-crafting-data))]
    (mapcat crawl-category-fn crafting-category-urls)))

(defn download-item-data!
  "Crawls all crafting category (paginated) pages _and_ the raw resources (paginated) pages,
  and then writes the data to disk and (optionally) downloads a scaled-down version of the
  pngs associated with items."
  [& [{:keys [download-pngs?]}]]
  (timbre/info "\uD83D\uDD77️ Crawling...")
  (-> (crawl-crafting-categories)
      (into (crawl-raw-resource-category))
      vec
      write-items-edn!
      (cond-> download-pngs? (http/download-pngs! config/image-path)))
  (timbre/info "✨ Done!"))
