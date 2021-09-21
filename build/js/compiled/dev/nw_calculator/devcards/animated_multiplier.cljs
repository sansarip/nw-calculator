(ns nw-calculator.devcards.animated-multiplier
  (:require
    [devcards.core :as dc]
    [nw-calculator.components :as nwc]
    [reagent.core :as r]))

(dc/defcard-rg
  animated-multiplier
  (fn [state]
    [:div.flex.flex-col.gap-8
     (into [:<>] (map (fn [_] [:f> nwc/animated-multiplier-component])) (range (:count @state)))
     [:div.flex.gap-6
      [:button.button.button-outline {:on-click #(swap! state update :count inc)}
       "Inc"]
      [:button.button.button-outline {:on-click #(swap! state update :count dec)}
       "Dec"]]])
  (r/atom {:count 1}))
