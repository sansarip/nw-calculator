(ns nw-calculator.views
  (:require
    [re-frame.core :as rf]
    [nw-calculator.events :as events]
    [nw-calculator.subs :as subs]
    [nw-calculator.components.collapsible-tree.component :as ctc]
    [nw-calculator.components :as nwc]
    [reagent.core :as r]
    [nw-calculator.utilities :as util]
    [nw-calculator.styles :as styles]
    [nw-calculator.config :as cfg]
    [react]))

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
        :input-props {:placeholder   "\uD83D\uDD0D Search for an item"
                      :default-value item-name}
        :get-value   :name
        :make-result item-component
        :on-search   search!
        :loading?    searching?
        :on-clear    clear-search!
        :on-select   select-item!}])))

(defn custom-item-quantity [{:keys [editable? quantity item-index]}]
  (r/with-let [set-quantity-multiplier! (fn [event]
                                          (let [multiplier (js/parseInt (.. event -target -value))]
                                            (rf/dispatch [::events/set-quantity-multiplier item-index multiplier])))
               min-quantity-multiplier 1]
    (let [quantity-multiplier* @(rf/subscribe [::subs/quantity-multiplier item-index])
          quantity-multiplier (if (js/isNaN quantity-multiplier*)
                                min-quantity-multiplier
                                quantity-multiplier*)]
      (if editable?
        [:input.basic-input.w-12-imp
         {:type          :number
          :default-value quantity-multiplier
          :placeholder   min-quantity-multiplier
          :on-input      set-quantity-multiplier!}]
        [:span.self-center quantity]))))

(defn custom-item-name [{:keys [searchable? name item-index external-url]}]
  (if searchable?
    [:div.bg-inherit.w-full.flex.gap-2
     [search item-index]
     (when external-url
       [:a.self-center {:href external-url :target "_blank"}
        [:i.text-sm.md:text-base.fas.fa-external-link-alt]])]
    (if external-url
      [:a.whitespace-nowrap {:href external-url :target "_blank"} name]
      [:span.whitespace-nowrap name])))

(defn item
  [{{:keys [external-url name quantity] :as item-map} :node
    :keys                                           [root-node?]}
   item-index]
  [nwc/item-component
   {:popup-on-hover? true
    :container-props {:class (str "m-0-imp" (when root-node? " bg-inherit"))}
    :item-map        item-map
    :custom-quantity   [custom-item-quantity
                        {:editable?  root-node?
                         :quantity     quantity
                         :item-index item-index}]
    :custom-name     [custom-item-name
                      {:searchable?  root-node?
                       :external-url external-url
                       :name         name
                       :item-index   item-index}]}])

(defn searchable-item-tree [item-index]
  (r/with-let [collapsed-item-updaters (atom {})
               set-collapsed-updater! (fn [id updater]
                                        (swap! collapsed-item-updaters assoc id updater))
               unset-collapsed-updater! (fn [id]
                                          (swap! collapsed-item-updaters dissoc id))
               expand-all! #(doseq [[_ set-collapsed-item] @collapsed-item-updaters]
                              (set-collapsed-item false))
               collapse-all! #(doseq [[_ set-collapsed-item] @collapsed-item-updaters]
                                (set-collapsed-item true))
               item* (fn [node] [item node item-index])]
    (let [{:keys [ingredients id] :as selected-item} @(rf/subscribe [::subs/selected-item item-index])]
      ^{:key id}
      [:div.bg-inherit.flex.flex-col.gap-10.items-center
       [:> ctc/collapsible-list-provider
        {:value {:set-collapsed-updater   set-collapsed-updater!
                 :unset-collapsed-updater unset-collapsed-updater!}}
        [nwc/collapsible-tree-component
         {:tree-map  selected-item
          :children  :ingredients
          :make-node item*}]]
       (when (not-empty ingredients)
         [:div.flex.gap-6
          [:button.button.button-outline.w-52.md:w-60
           {:on-click expand-all!}
           "expand all"]
          [:button.button.button-outline.w-52.md:w-60
           {:on-click collapse-all!}
           "collapse all"]])])))

(defn delete-item-button [item-index]
  (r/with-let [delete-item! #(rf/dispatch [::events/delete-item item-index])]
    (let [num-selected-items @(rf/subscribe [::subs/num-selected-items])
          disable-delete-button? (= 1 num-selected-items)]
      [nwc/circular-button-component
       {:class    "absolute text-xl top-2 right-0 border-0 flex-none"
        :disabled disable-delete-button?
        :on-click delete-item!}
       [:i.fas.fa-trash]])))

(defn card [& children]
  [nwc/card-component
   (into [:<>] children)])

(defn item-cards []
  (let [num-selected-items @(rf/subscribe [::subs/num-selected-items])]
    [:<>
     (for [item-index (range num-selected-items)]
       ^{:key item-index}
       [card
        [delete-item-button item-index]
        [searchable-item-tree item-index]])]))

(defn add-item-card-button []
  (r/with-let [add-empty-item! #(rf/dispatch [::events/add-empty-item])]
    [:button.button.w-64
     {:on-click add-empty-item!}
     "Add another item"]))

(defn header []
  [:div.flex.flex-col.items-center
   [:h1.text-14.md:text-7xl-imp.text-center.animate__animated.animate__fadeIn.animate__slower
    "New World"]
   [:h3.text-8.md:text-5xl-imp.text-center.animate__animated.animate__fadeIn.animate__slower.animate__delay-1s
    "Crafting Calculator"]])

(defn body []
  [:div.relative.z-30.flex-grow.flex.gap-14.flex-col.items-center.flex-col.animate__animated.animate__fadeIn.animate__slower.animate__delay-1s
   [item-cards]
   [add-item-card-button]])

(defn footer []
  [:div.relative.z-10.py-4.flex.flex.gap-5.justify-center.text-4xl
   [:span.color-off-white.text-base.absolute.left-4.bottom-4 cfg/version]
   [:a.cursor-pointer
    {:href   "https://github.com/sansarip/nw-calculator"
     :target "_blank"}
    [:i.fab.fa-github]]
   [:a.cursor-pointer
    {:href   "https://discord.gg/FCqzwycR23"
     :target "_blank"}
    [:i.fab.fa-discord]]])

(defn theme-toggle []
  (r/with-let [set-theme! (fn [event]
                            (rf/dispatch [::events/set-dark-theme (.. event -target -checked)]))]
    [:div.absolute.top-10.right-10
     [nwc/toggle-component
      {:checkbox-props {:on-change set-theme!
                        :checked   @(rf/subscribe [::subs/dark-theme?])}
       :on             [:i.fas.fa-sun.w-full.h-full.text-yellow-500]
       :off            [:i.fas.fa-moon.w-full.h-full.text-gray-600]}]]))

(defn loader []
  (when @(rf/subscribe [::subs/loading?])
    [:div.absolute.z-50.h-full.w-full.flex.flex-col.gap-4.items-center
     [nwc/loader-component {:class "fa-6x pt-72"}]
     [:h3 "Steering ship"]]))

(defn background []
  [:div.absolute.z-10.bg-inherit.w-full.h-full])

(defn background-image []
  (let [start-animation? @(rf/subscribe [::subs/ready?])]
    [:img.absolute.z-0.w-full.h-full.object-cover
     {:src   "https://i.gyazo.com/599d57716f081f1e4e6a8b61f4155981.jpg"
      :class (styles/background-image-class start-animation?)}]))

(defn content []
  (let [show-content? @(rf/subscribe [::subs/ready?])]
    (when show-content?
      [:div.relative.h-full.z-30.flex.flex-col.gap-20.pt-40.overflow-y-auto
       [header]
       [body]
       [footer]])))

(defn main-panel []
  [:div.z-10.absolute.bg-opacity-75.relative.h-screen.dark.bg-raisin-black
   [loader]
   [background]
   [background-image]
   [content]])