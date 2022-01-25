(ns nw-calculator.devcards.drawer
  (:require
    [devcards.core :as dc]
    [reagent.core]
    [nw-calculator.components :as nwc]
    [reagent.core :as r]
    [react]))

(dc/defcard-rg
  drawer
  (fn [state]
    [:div.left-0.absolute.w-full.h-32.bg-gradient-to-r.from-purple-500.to-pink-500
     [nwc/drawer-component
      {:open? (:open? @state)}
      [:h2 "Drawer!"]
      [:input {:placeholder "Type something!"}]
      [nwc/item-component
       {:item-map {:quantity     2
                   :tier         2
                   :name         "Iron Ingot"
                   :png-url      "https://cdn.newworldfans.com/db_images/db/items_hires/ingott2.png"
                   :skill-level  0
                   :ingredients  [{:name         "Iron Ore"
                                   :id           "-1581714941"
                                   :quantity     4
                                   :external-url "https://newworldfans.com/db/item/iron-ore-cb358b"
                                   :png-url      "https://cdn.newworldfans.com/db_images/db/items_hires/oret1.png"
                                   :tier         1}]
                   :id           "-961420380"
                   :xp           36
                   :external-url "https://newworldfans.com/crafting/Smelting/2970-iron-ingot"}}]]])
  (r/atom {:open? false}))