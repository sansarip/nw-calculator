(ns nw-calculator.devcards.toggle
  (:require
    [devcards.core :as dc]
    [nw-calculator.components :as nwc]))

(dc/defcard-rg
  toggle
  (fn []
    [nwc/toggle-component]))

(dc/defcard-rg
  toggle
  "Toggle with on and off labels"
  (fn []
    [nwc/toggle-component
     {:on [:i.fas.fa-sun.w-full.h-full.text-yellow-500]
      :off [:i.fas.fa-moon.w-full.h-full.text-gray-600]}]))
