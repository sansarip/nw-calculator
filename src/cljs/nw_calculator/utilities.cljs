(ns nw-calculator.utilities
  (:require [clojure.string :as string]))

(defn localize-external-img [url]
  (str "/images/" (last (string/split url #"/"))))