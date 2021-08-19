(ns nw-calculator.devcards.collapsible-tree
  (:require
    [devcards.core :as dc]
    [reagent.core]
    [nw-calculator.components :as nwc]
    [reagent.core :as r]))

(dc/defcard-rg
  collapsible-tree
  (fn [state]
    (r/with-let [set-state (fn [id given-state] (swap! state assoc id given-state))
                 expand-all #(doseq [[_ given-state] @state]
                               (swap! given-state assoc :collapse? false))
                 collapse-all #(doseq [[_ given-state] @state]
                                 (swap! given-state assoc :collapse? true))
                 make-node (fn [node]
                             [nwc/item-component
                              {:popup-on-hover? true
                               :linkable?       true}
                              node])]
      [:<>
       [nwc/collapsible-tree-component
        {:tree-map  {:external-url "https://newworldfans.com/crafting/Armoring/3605-linen-pants"
                     :png-url      "https://cdn.newworldfans.com/db_images/db/items_hires/lightlegsat2.png"
                     :name         "Linen Pants"
                     :amount       1
                     :tier         2
                     :skill-level  0
                     :xp           216
                     :ingredients  [{:amount       2
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
                                     :external-url "https://newworldfans.com/crafting/Smelting/2970-iron-ingot"}
                                    {:amount       6
                                     :tier         2
                                     :name         "Coarse Leather"
                                     :png-url      "https://cdn.newworldfans.com/db_images/db/items_hires/leathert2.png"
                                     :skill-level  0
                                     :id           "379562519"
                                     :ingredients  [{:external-url "https://newworldfans.com/db/item/rawhide-c6cf2e"
                                                     :png-url      "https://cdn.newworldfans.com/db_images/db/items_hires/rawhidet1.png",
                                                     :name         "Rawhide"
                                                     :tier         1
                                                     :id           "1092522207"}]

                                     :xp           3
                                     :external-url "https://newworldfans.com/crafting/Leatherworking/2979-coarse-leather"}
                                    {:amount       10
                                     :tier         2
                                     :name         "Linen"
                                     :png-url      "https://cdn.newworldfans.com/db_images/db/items_hires/clotht2.png"
                                     :skill-level  0
                                     :ingredients  [{:name         "Fibers"
                                                     :id           "-300855267"
                                                     :amount       4
                                                     :external-url "https://newworldfans.com/db/item/fibers-4eafb5"
                                                     :png-url      "https://cdn.newworldfans.com/db_images/db/items_hires/fibert1.png"
                                                     :tier         1}]
                                     :id           "823120547"
                                     :xp           36
                                     :external-url "https://newworldfans.com/crafting/Weaving/2985-linen"}]
                     :id           "-2046453121"}
         :children  :ingredients
         :make-node make-node
         :set-state set-state}]
       [:button.button.m-4.w-72 {:on-click collapse-all} "collapse all"]
       [:button.button.m-4.w-72 {:on-click expand-all} "expand all"]]))
  (r/atom {}))

