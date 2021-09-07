(ns nw-calculator.templater.main
  (:require
    [environ.core :refer [env]]
    [clostache.parser :refer [render]]))

(defn -main []
  (let [project-version (:nw-calculator-version env)]
    (-> (slurp "templates/config.js")
        (render {:version project-version})
        (->> (spit "resources/public/js/config.js")))))