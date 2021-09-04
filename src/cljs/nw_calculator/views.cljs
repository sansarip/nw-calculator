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

(defn search [item-index]
  (r/with-let [search! (util/debounce
                         (fn [query] (rf/dispatch [::events/search item-index query]))
                         100)
               select-item! (fn [item] (rf/dispatch [::events/select-item item-index item]))
               clear-search! #(rf/dispatch [::events/clear-search item-index])]
    (let [results @(rf/subscribe [::subs/search-results item-index])
          {item-name :name} @(rf/subscribe [::subs/selected-item item-index])
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

(defn custom-item-amount [{:keys [editable? amount item-index]}]
  (r/with-let [set-amount-multiplier (fn [event]
                                       (let [multiplier (js/parseInt (.. event -target -value))]
                                         (rf/dispatch [::events/set-amount-multiplier item-index multiplier])))
               min-amount-multiplier 1]
    (let [amount-multiplier* @(rf/subscribe [::subs/amount-multiplier item-index])
          amount-multiplier (if (js/isNaN amount-multiplier*)
                              min-amount-multiplier
                              amount-multiplier*)]
      (if editable?
        [:input.basic-input.w-11-imp
         {:type          :number
          :default-value amount-multiplier
          :placeholder   min-amount-multiplier
          :on-input      set-amount-multiplier}]
        [:span.self-center amount]))))

(defn custom-item-name [{:keys [searchable? name item-index external-url]}]
  (if searchable?
    [:<>
     [search item-index]
     (when external-url
       [:a {:href external-url :target "_blank"}
        [:i.text-sm.md:text-base.fas.fa-external-link-alt]])]
    (if external-url
      [:a.whitespace-nowrap {:href external-url :target "_blank"} name]
      [:span.whitespace-nowrap name])))

(defn item
  [{{:keys [external-url name amount] :as item-map} :node
    :keys                                           [root-node?]}
   item-index]
  [nwc/item-component
   {:popup-on-hover? true
    :container-props {:class "m-0-imp"}
    :item-map        item-map
    :stacked-labels? (not root-node?)
    :custom-amount   [custom-item-amount
                      {:editable?  root-node?
                       :amount     amount
                       :item-index item-index}]
    :custom-name     [custom-item-name
                      {:searchable?  root-node?
                       :external-url external-url
                       :name         name
                       :item-index   item-index}]}])

(defn collapsible-tree [item-index]
  (r/with-let [collapsed-item-updaters (atom {})
               set-collapsed-updater (fn [id updater]
                                       (swap! collapsed-item-updaters assoc id updater))
               unset-collapsed-updater (fn [id]
                                         (swap! collapsed-item-updaters dissoc id))
               expand-all #(doseq [[_ set-collapsed-item] @collapsed-item-updaters]
                             (set-collapsed-item false))
               collapse-all #(doseq [[_ set-collapsed-item] @collapsed-item-updaters]
                               (set-collapsed-item true))
               item* (fn [node] [item node item-index])]
    (let [{:keys [ingredients] :as selected-item} @(rf/subscribe [::subs/selected-item item-index])]
      [:div.flex.flex-col.gap-6.items-center
       [:> ctc/collapsible-list-provider
        {:value {:set-collapsed-updater   set-collapsed-updater
                 :unset-collapsed-updater unset-collapsed-updater}}
        [nwc/collapsible-tree-component
         {:tree-map  selected-item
          :children  :ingredients
          :make-node item*}]]
       (when (not-empty ingredients)
         [:div.flex
          [:button.button.button-outline.m-4.w-52.md:w-60
           {:on-click expand-all}
           "expand all"]
          [:button.button.button-outline.m-4.w-52.md:w-60
           {:on-click collapse-all}
           "collapse all"]])])))

(defn collapsible-trees []
  (let [num-selected-items @(rf/subscribe [::subs/num-selected-items])]
    [:div.flex.gap-28.flex-col.items-center.flex-col
     (for [item-index (range num-selected-items)]
       ^{:key item-index}
       [nwc/card-component
        [collapsible-tree item-index]])]))

(defn page-loader []
  (when @(rf/subscribe [::subs/loading?])
    [:div.absolute.bg-white.z-50.h-full.w-full.flex.flex-col.gap-4.items-center
     [nwc/loader-component {:class "fa-6x"}]
     [:h3 "Steering ship"]]))

(defn main-panel []
  [:div.h-screen.pt-52.text-2xl
   [page-loader]
   [collapsible-trees]])