(ns nw-calculator.devcards.item
  (:require
    [devcards.core :as dc]
    [nw-calculator.components :as nwc]))

(dc/defcard-rg
  item
  (fn []
    [nwc/item-component
     {:amount       2
      :tier         2
      :name         "Iron Ingot"
      :png-url      "https://cdn.newworldfans.com/db_images/db/items_hires/ingott2.png"
      :skill-level  0
      :ingredients  [{:name         "Iron Ore"
                      :id           "-1581714941"
                      :amount       4
                      :external-url "https://newworldfans.com/db/item/iron-ore-cb358b"
                      :png-url      "https://cdn.newworldfans.com/db_images/db/items_hires/oret1.png"
                      :tier         1}]
      :id           "-961420380"
      :xp           36
      :external-url "https://newworldfans.com/crafting/Smelting/2970-iron-ingot"}]))