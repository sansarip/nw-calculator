(ns nw-calculator.devcards.copy-link
  (:require
    [devcards.core :as dc]
    [nw-calculator.components :as nwc]))


(dc/defcard-rg
  copy-link
  (fn []
    [:f> nwc/copy-link-component]))