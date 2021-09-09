(ns nw-calculator.web-workers
  (:require
    [cljs.reader :as edn]
    [oops.core :as oops]))

(def in-worker? (exists? js/WorkerGlobalScope))
(def in-app? (not in-worker?))

(defonce worker
  (when in-app?
    (js/Worker. (oops/oget js/config "web-worker-js"))))

(when in-worker?
  (set! js/self.onmessage
        (fn [msg]
          (-> (.-data msg)
              edn/read-string
              clj->js
              js/self.postMessage))))
