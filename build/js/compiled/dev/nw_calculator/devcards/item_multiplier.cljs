(ns nw-calculator.devcards.item-multiplier
  (:require
    [devcards.core :as dc]
    [nw-calculator.components :as nwc]))

(dc/defcard-rg
  item-multipler
  (fn []
    [nwc/item-multiplier-component]))
