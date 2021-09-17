(ns nw-calculator.devcards.multiplication
  (:require
    [devcards.core :as dc]
    [nw-calculator.components :as nwc]
    [reagent.core :as r]))

(dc/defcard-rg
  multiplication
  (fn []
    [:div.pt-12
     [:f> nwc/multiplication-component {:base 50}]]))



