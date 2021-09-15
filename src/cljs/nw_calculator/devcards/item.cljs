(ns nw-calculator.devcards.item
  (:require
    [devcards.core :as dc]
    [nw-calculator.components :as nwc]
    [reagent.core :as r]
    [nw-calculator.utilities :as util]
    [nw-calculator.devcards.sample-data :as sd]))

(dc/defcard-rg
  item
  (fn []
    [nwc/item-component
     {:item-map {:quantity       2
                 :tier         2
                 :name         "Iron Ingot"
                 :png-url      "https://cdn.newworldfans.com/db_images/db/items_hires/ingott2.png"
                 :skill-level  0
                 :ingredients  [{:name         "Iron Ore"
                                 :id           "-1581714941"
                                 :quantity       4
                                 :external-url "https://newworldfans.com/db/item/iron-ore-cb358b"
                                 :png-url      "https://cdn.newworldfans.com/db_images/db/items_hires/oret1.png"
                                 :tier         1}]
                 :id           "-961420380"
                 :xp           36
                 :external-url "https://newworldfans.com/crafting/Smelting/2970-iron-ingot"}}]))

(dc/defcard-rg
  item
  "Linkable item"
  (fn []
    (r/with-let [item-map {:quantity       2
                           :tier         2
                           :name         "Iron Ingot"
                           :png-url      "https://cdn.newworldfans.com/db_images/db/items_hires/ingott2.png"
                           :skill-level  0
                           :ingredients  [{:name         "Iron Ore"
                                           :id           "-1581714941"
                                           :quantity       4
                                           :external-url "https://newworldfans.com/db/item/iron-ore-cb358b"
                                           :png-url      "https://cdn.newworldfans.com/db_images/db/items_hires/oret1.png"
                                           :tier         1}]
                           :id           "-961420380"
                           :xp           36
                           :external-url "https://newworldfans.com/crafting/Smelting/2970-iron-ingot"}]
      [:div.mt-4
       [nwc/item-component
        {:item-map      item-map
         :custom-name [:a {:href (:external-url item-map) :target "_blank"}
                       (:name item-map)]}]])))

(dc/defcard-rg
  item
  "Searchable item"
  (fn [state]
    (r/with-let [clear-selected-item! #(swap! state assoc :selected-item {:ingredients []})
                 on-search (util/debounce
                             (fn [search-term]
                               (swap!
                                 state
                                 assoc
                                 :results
                                 (->> sd/items
                                      (filter
                                        (comp #(util/fuzzy-search % search-term) :name))
                                      (take 10)
                                      vec)))
                             100)
                 clear-results! #(swap! state assoc :results [])
                 on-clear (fn [] (clear-results!) (clear-selected-item!))
                 on-select (fn [item-map]
                             (clear-results!)
                             (swap! state assoc :selected-item item-map))
                 make-result (fn [item-map] [nwc/item-component {:item-map item-map}])]
      (let [{{:keys [external-url] :as selected-item} :selected-item
             :keys                                    [results]} @state]
        [:div.mt-4
         [nwc/item-component
          {:popup-on-hover? true
           :item-map        selected-item
           :custom-name   [:<>
                           [:f> nwc/search-component
                            {:make-result make-result
                             :input-props {:placeholder "Search for an item \uD83D\uDD0D"}
                             :on-search   on-search
                             :on-clear    on-clear
                             :on-select   on-select
                             :get-value   :name
                             :results     results}]
                           (when (and selected-item external-url)
                             [:a {:href external-url :target "_blank"}
                              [:i.text-base.fas.fa-external-link-alt]])]}]])))
  (r/atom {:results       []
           :selected-item nil}))
