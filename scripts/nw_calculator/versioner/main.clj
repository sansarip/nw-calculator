(ns nw-calculator.versioner.main
  (:require
    [clojure.string :as string]
    [environ.core :refer [env]]
    [clojure.pprint :refer [pprint]])
  (:import (java.time LocalDate ZoneId)))

(set! *print-meta* true)

(defn pad-zero [s]
  (cond->> s
           (< (count s) 2) (str "0")))

(defn -main []
  (let [project-date-version (-> (:nw-calculator-version env)
                                 (string/split #"\.")
                                 (->> (mapv #(Integer/parseInt %)))
                                 (update 3 inc))
        now (LocalDate/now (ZoneId/of "UTC"))
        current-date-version [(.getYear now)
                              (.getMonthValue now)
                              (.getDayOfMonth now)
                              1]
        [_ _ _ build
         :as bumped-version] (if (= (take 3 project-date-version) (take 3 current-date-version))
                               project-date-version
                               current-date-version)
        version (-> (drop-last 1 bumped-version)
                    (->> (mapv (comp pad-zero str)))
                    (conj build)
                    (->> (string/join ".")))]
    (-> (slurp "project.clj")
        read-string
        vec
        (assoc 2 version)
        seq
        pprint
        with-out-str
        (->> (spit "project.clj")))))
