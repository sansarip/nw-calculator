(ns nw-calculator.scraper.http
  (:require [clj-http.client :as client]
            [taoensso.timbre :as timbre]
            [slingshot.slingshot :refer [try+ throw+]]
            [net.cgrand.enlive-html :as enlive]
            [clojure.string :as string])
  (:import (java.io ByteArrayInputStream ByteArrayOutputStream BufferedOutputStream FileOutputStream)
           (javax.imageio ImageIO)
           (java.awt Image)
           (java.awt.image BufferedImage)))

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

(defn download-png! [url output-path]
  (when (not-empty url)
    (let [data (:body (throttled-http-get url {:http-opts {:as :byte-array}}))
          width 50
          height 25
          filename (last (string/split url #"/"))
          output-path (str output-path "/" filename)]
      (with-open [input-stream (ByteArrayInputStream. data)
                  buffer (ByteArrayOutputStream.)
                  output-stream (BufferedOutputStream. (FileOutputStream. output-path))]
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

(defn download-pngs! [extracted-item-data output-path]
  (timbre/info "⬇️Downloading pngs to" (str output-path "..."))
  (doseq [item extracted-item-data]
    (download-png! (:png-url item) output-path))
  extracted-item-data)

