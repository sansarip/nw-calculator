(ns nw-calculator.web-workers
  (:require [cljs.reader :as edn]))

(def in-worker? (not (exists? js/window)))

(defonce worker (when-not in-worker? (js/Worker. "./js/compiled/app-web-workers.js")))

(when in-worker?
  (set! js/self.onmessage
        (fn [msg]
          (-> (.-data msg)
              edn/read-string
              clj->js
              js/self.postMessage))))
