(ns nw-calculator.scraper.http
  (:require [clj-http.client :as client]
            [taoensso.timbre :as timbre]
            [slingshot.slingshot :refer [try+ throw+]]
            [net.cgrand.enlive-html :as enlive])
  (:import (java.io BufferedOutputStream FileOutputStream)))

(defn http-get [url & [opts]]
  (try+ (->> opts
             (merge {:cookie-policy         :none
                     :throw-entire-message? true
                     :as                    :json
                     :accept                :json})
             (client/get url)
             :body)
        (catch [:status 404] _)
        (catch [:status 403] _)))

(defn throttled-http-get
  [url & [{:keys [retry-attempt
                  throttle?
                  http-opts
                  sleep-time-ms]
           :or   {retry-attempt 0
                  sleep-time-ms 150}}]]
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

(defn throttled-fetch-html [url]
  (some-> (throttled-http-get url {:http-opts {:as :string
                                               :accept "text/html"}})
      enlive/html-snippet))
(def test-file
  (client/get "http://placehold.it/350x150" {:as :byte-array}))

(defn copy-uri-to-file [uri file]
  (with-open [w (BufferedOutputStream. (FileOutputStream. file))]
    (when-let [image (throttled-http-get uri {:http-opts {:as     :byte-array
                                                          :accept nil}})]
      (.write w image)
      true)))

