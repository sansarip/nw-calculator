(ns nw-calculator.views
  (:require
    [re-frame.core :as rf]
    [nw-calculator.events :as events]
    [nw-calculator.subs :as subs]
    [nw-calculator.components.collapsible-tree.component :as ctc]
    [nw-calculator.components :as nwc]
    [reagent.core :as r]
    [nw-calculator.utilities :as util]
    [nw-calculator.styles :as styles]))

(defn search []
  (r/with-let [search! (util/debounce
                         (fn [query] (rf/dispatch [::events/search query]))
                         100)
               select-item! (fn [item] (rf/dispatch [::events/select-item item]))
               clear-search! #(rf/dispatch [::events/clear-search])]
    (let [results @(rf/subscribe [::subs/search-results])
          {item-name :name} @(rf/subscribe [::subs/selected-item])
          item-component (fn [item-map]
                           [nwc/item-component
                            {:item-map        item-map
                             :container-props {:class (styles/search-result-item-class)}}])
          searching? @(rf/subscribe [::subs/searching?])]
      [:f> nwc/search-component
       {:results     results
        :input-props {:placeholder   "Search for an item \uD83D\uDD0D"
                      :default-value item-name}
        :get-value   :name
        :make-result item-component
        :on-search   search!
        :loading?    searching?
        :on-clear    clear-search!
        :on-select   select-item!}])))

(defn item
  [{{:keys [external-url name] :as item-map} :node
    :keys                                    [root-node?]}]
  (r/with-let [set-amount-multiplier (fn [event]
                                       (let [multiplier (js/parseInt (.. event -target -value))]
                                         (rf/dispatch [::events/set-amount-multiplier multiplier])))
               min-amount-multiplier 1]
    (let [amount-multiplier* @(rf/subscribe [::subs/amount-multiplier])
          amount-multiplier (if (js/isNaN amount-multiplier*)
                              min-amount-multiplier
                              amount-multiplier*)]
      [nwc/item-component
       {:popup-on-hover? true
        :item-map        item-map
        :custom-amount   (when root-node?
                           [:input.basic-input.w-16-imp
                            {:type          :number
                             :default-value amount-multiplier
                             :placeholder   min-amount-multiplier
                             :on-input      set-amount-multiplier}])
        :custom-name     (if root-node?
                           [:<>
                            [search {:amount-multiplier amount-multiplier}]
                            (when external-url
                              [:a {:href external-url :target "_blank"}
                               [:i.text-base.fas.fa-external-link-alt]])]
                           (if external-url
                             [:a {:href external-url :target "_blank"} name]
                             name))}])))

(defn collapsible-tree []
  (let [selected-item @(rf/subscribe [::subs/selected-item])]
    [nwc/collapsible-tree-component
     {:tree-map  selected-item
      :children  :ingredients
      :make-node item}]))

(defn loader []
  (when @(rf/subscribe [::subs/app-loading?])
    [:div.absolute.pt-52.bg-white.z-50.h-screen.w-screen.flex.flex-col.gap-4.items-center
     [nwc/loader-component
      {:class "fa-6x"}]
     [:h3 "Steering ship"]]))

(defn main-panel []
  (r/with-let [collapsed-item-updaters (atom {})
               set-collapsed-updater (fn [id updater]
                                       (swap! collapsed-item-updaters assoc id updater))
               unset-collapsed-updater (fn [id]
                                         (swap! collapsed-item-updaters dissoc id))
               expand-all #(doseq [[_ set-collapsed-item] @collapsed-item-updaters]
                             (set-collapsed-item false))
               collapse-all #(doseq [[_ set-collapsed-item] @collapsed-item-updaters]
                               (set-collapsed-item true))]
    [:<>
     [loader]
     [:div.h-screen.pt-52.flex.gap-6.flex-col.items-center.flex-col
      [:div.flex
       [:button.button.m-4.w-72 {:on-click expand-all} "expand all"]
       [:button.button.m-4.w-72 {:on-click collapse-all} "collapse all"]]
      [:> ctc/collapsible-list-provider
       {:value {:set-collapsed-updater   set-collapsed-updater
                :unset-collapsed-updater unset-collapsed-updater}}
       [collapsible-tree]]]]))