(ns nw-calculator.devcards.dropdown
  (:require
    [devcards.core :as dc]
    [nw-calculator.components :as nwc]
    [nw-calculator.devcards.sample-data :as sd]
    [reagent.core :as r]))

(dc/defcard-rg
  dropdown
  (fn []
    (r/with-let [item (fn [option] [nwc/item-component {:item-map option}])]
      [:div.flex.flex-col.gap-4.w-56
       [:f> nwc/dropdown-component
        {:input-props     {:placeholder   "Tier 3 Metals"
                           :default-value (:name (first sd/items))}
         :container-props {:class "bg-white"}
         :make-option     item
         :get-value       :name
         :options         sd/items}]])))


