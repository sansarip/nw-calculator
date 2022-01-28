(ns nw-calculator.devcards.collapsible-tree
  (:require
    [devcards.core :as dc]
    [reagent.core]
    [nw-calculator.components :as nwc]
    [nw-calculator.components.collapsible-tree.component :as ctc]
    [reagent.core :as r]
    [nw-calculator.utilities :as util]
    [nw-calculator.devcards.sample-data :as sd]
    [react]))

(dc/defcard-rg
  collapsible-tree
  (fn []
    (r/with-let [collapsed-item-updaters (atom {})
                 set-collapsed-updater (fn [id updater]
                                         (swap! collapsed-item-updaters assoc id updater))
                 unset-collapsed-updater (fn [id]
                                           (swap! collapsed-item-updaters dissoc id))
                 expand-all #(doseq [[_ set-collapsed-item] @collapsed-item-updaters]
                               (set-collapsed-item false))
                 collapse-all #(doseq [[_ set-collapsed-item] @collapsed-item-updaters]
                                 (set-collapsed-item true))
                 make-node (fn [{{:keys [name external-url] :as item-map} :node}]
                             [nwc/item-component
                              {:popup-on-hover? true
                               :item-map        item-map
                               :custom-name     [:a {:href external-url :target "_blank"} name]}])]
      [:<>
       [:> ctc/collapsible-list-provider
        {:value {:set-collapsed-updater   set-collapsed-updater
                 :unset-collapsed-updater unset-collapsed-updater}}
        [nwc/collapsible-tree-component
         {:tree-map                (first sd/items)
          :children                :ingredients
          :make-node               make-node
          :set-collapsed-updater   set-collapsed-updater
          :unset-collapsed-updater unset-collapsed-updater}]]
       [:button.button.m-4.w-72 {:on-click collapse-all} "collapse all"]
       [:button.button.m-4.w-72 {:on-click expand-all} "expand all"]])))

(dc/defcard-rg
  collapsible-tree
  "Searchable root items"
  (fn [state]
    (r/with-let [collapsed-item-updaters (atom {})
                 set-collapsed-updater (fn [id updater]
                                         (swap! collapsed-item-updaters assoc id updater))
                 unset-collapsed-updater (fn [id]
                                           (swap! collapsed-item-updaters dissoc id))
                 expand-all #(doseq [[_ set-collapsed-item] @collapsed-item-updaters]
                               (set-collapsed-item false))
                 collapse-all #(doseq [[_ set-collapsed-item] @collapsed-item-updaters]
                                 (set-collapsed-item true))
                 clear-selected-item! #(swap! state assoc :selected-item {:ingredients []})
                 on-search (util/debounce
                             (fn [search-term]
                               (swap!
                                 state
                                 assoc
                                 :results
                                 (util/fuzzy-search sd/items search-term [:name])))
                             100)
                 clear-results! #(swap! state assoc :results [])
                 on-clear (fn [] (clear-results!) (clear-selected-item!))
                 on-select (fn [item-map]
                             (clear-results!)
                             (swap! state assoc :selected-item item-map))
                 make-result (fn [item-map] [nwc/item-component {:item-map item-map}])
                 make-node (fn [{{:keys [external-url name] :as item-map} :node
                                 :keys                                    [root-node?]}]
                             [nwc/item-component
                              {:popup-on-hover? true
                               :item-map        item-map
                               :container-props {:class "bg-white"}
                               :custom-quantity (when root-node?
                                                  [:input.basic-input.w-12-imp
                                                   {:default-value "1"}])
                               :custom-name     (if root-node?
                                                  [:<>
                                                   [:f> nwc/search-component
                                                    {:make-result make-result
                                                     :input-props {:placeholder   "Search for an item \uD83D\uDD0D"
                                                                   :default-value name}
                                                     :on-search   on-search
                                                     :on-clear    on-clear
                                                     :on-select   on-select
                                                     :get-value   :name
                                                     :results     (:results @state)}]
                                                   (when external-url
                                                     [:a {:href external-url :target "_blank"}
                                                      [:i.text-base.fas.fa-external-link-alt]])]
                                                  [:a {:href external-url :target "_blank"} name])}])]
      [nwc/card-component
       [:> ctc/collapsible-list-provider
        {:value {:set-collapsed-updater   set-collapsed-updater
                 :unset-collapsed-updater unset-collapsed-updater}}
        [nwc/collapsible-tree-component
         {:tree-map        (:selected-item @state)
          :container-props {:class :bg-white}
          :children        :ingredients
          :make-node       make-node}]]
       [:button.button.m-4.w-56 {:on-click collapse-all} "collapse all"]
       [:button.button.m-4.w-56 {:on-click expand-all} "expand all"]]))
  (r/atom {:selected-item (first sd/items)
           :results       []}))
