(ns nw-calculator.devcards.loader
 (:require
  [devcards.core :as dc]
  [nw-calculator.components :as nwc]))

(dc/defcard-rg
 loader
 (fn []
  [nwc/loader-component {:class "text-3xl"}]))
