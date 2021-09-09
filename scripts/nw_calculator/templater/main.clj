(ns nw-calculator.templater.main
  (:require
    [environ.core :refer [env]]
    [clostache.parser :refer [render]]))

(defn -main []
  (let [project-version (:nw-calculator-version env)
        web-worker-js (->> (slurp "webworker.cljs.edn")
                           read-string
                           :output-to
                           (re-find #"/js/.*$")
                           (str "."))]
    (-> (slurp "templates/config.js")
        (render {:version        project-version
                 :web-worker-js web-worker-js})
        (->> (spit "resources/public/js/config.js")))))