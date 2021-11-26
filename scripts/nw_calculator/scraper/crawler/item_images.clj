(ns nw-calculator.scraper.crawler.item-images
  (:require [taoensso.timbre :as timbre]
            [nw-calculator.scraper.http :as http]
            [nw-calculator.scraper.html :as html]
            [nw-calculator.scraper.utilities :as util]
            [nw-calculator.scraper.crawler.core :as crawl]))

(def page->image-urls
  (memoize
    (fn [page-id]
      (some-> (util/prepend-origin "/db/items/page/" page-id)
              http/throttled-fetch-html
              html/select-table-rows
              html/select-item-images
              (->> (map html/extract-src))))))

(defn download-images-from-urls! [urls]
  (timbre/info "⬇️️ Downloading item images...")
  (let [image-count (count urls)]
    (doseq [[url image-number] (map list urls (range 1 (inc image-count)))]
      (when-let [file (re-find #"/icons/.*$" url)]
        (timbre/info "⬇️️ Downloading image" (str image-number "/" image-count))
        (http/copy-uri-to-file url (util/prepend-images-path file))))))

(defn download-item-images!
  "Crawls all crafting (paginated) pages, and then downloads the item icon images"
  []
  (timbre/info "\uD83D\uDD77️ Crawling item images...")
  (->> (crawl/crawl-pages 1 page->image-urls)
       (filter some?)
       download-images-from-urls!)
  (timbre/info "✨ Done!"))
