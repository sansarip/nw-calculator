(ns nw-calculator.scraper.crawler.core
  (:require [nw-calculator.scraper.http :as http]
            [nw-calculator.scraper.utilities :as util]
            [taoensso.timbre :as timbre]))

(def get-page-count
  (memoize
    (fn [page-id]
      (-> (util/prepend-origin "/db/items/page/" page-id ".json?source=crafting")
          http/throttled-http-get
          :pageCount))))

(defn crawl-pages [starting-page-number page-fn]
  (let [page-count (get-page-count starting-page-number)]
    (loop [result #{}
           [page-number & page-numbers] (range starting-page-number (inc page-count))]
      (if page-number
        (do
          (timbre/info "\uD83D\uDD77️ Crawling page" (str page-number "/" page-count))
          (recur (into result (page-fn page-number)) page-numbers))
        result))))

