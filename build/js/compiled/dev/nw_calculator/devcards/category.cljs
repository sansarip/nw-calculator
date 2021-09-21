(ns nw-calculator.devcards.category
  (:require
    [devcards.core :as dc]
    [nw-calculator.components :as nwc]))

(dc/defcard-rg
  category
  (fn []
    [nwc/category-component {:options ["a" "b" "c"]}]))
