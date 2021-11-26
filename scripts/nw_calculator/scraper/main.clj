(ns nw-calculator.scraper.main
  (:require
    [nw-calculator.scraper.crawler.item-images :as iic]
    [nw-calculator.scraper.crawler.item-data :as idc]
    [clojure.string :as string]))

(defn args-map [args]
  (into {}
        (map (fn [arg]
               (let [[k v] (string/split arg #"=")]
                 [(keyword k) (Boolean/parseBoolean v)])))
        args))

(defn -main [& args]
  (let [{:keys [--download-item-images --download-item-data]
         :or   {--download-item-data true}} (args-map args)]
    (when --download-item-images (iic/download-item-images!))
    (when --download-item-data (idc/download-item-data!))))