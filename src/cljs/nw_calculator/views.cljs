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
    [nw-calculator.components.item.component :as item-component]
    [oops.core :refer [oget]]
    [react]))

(defn basic-item [item-map]
  [nwc/item-component
   {:item-map        item-map
    :custom-quantity [:<>]}])

(defn search [item-index]
  (r/with-let [search! (util/debounce
                         (fn [query] (rf/dispatch [::events/search item-index query]))
                         100)
               select-item! (fn [{:keys [id]}] (rf/dispatch [::events/select-item item-index id]))
               clear-search! #(rf/dispatch [::events/clear-search item-index])]
    (let [results @(rf/subscribe [::subs/search-results item-index])
          {item-name :name} @(rf/subscribe [::subs/resolved-selected-item item-index])
          searching? @(rf/subscribe [::subs/searching?])]
      [:f> nwc/search-component
       {:results     results
        :input-props {:placeholder   "\uD83D\uDD0D Search for an item"
                      :default-value item-name}
        :get-value   :name
        :make-result basic-item
        :on-search   search!
        :loading?    searching?
        :on-clear    clear-search!
        :on-select   select-item!}])))

(defn dropdown
  [{selected-option-name :name
    category-path        :path
    :keys                [options category-name]}]
  (r/with-let [select-option! (fn [{selected-option-id :id}]
                                (rf/dispatch [::events/select-option category-path selected-option-id]))]
    [:f> nwc/dropdown-component
     {:input-props     {:placeholder   category-name
                        :default-value selected-option-name}
      :on-select       select-option!
      :container-props {:class "bg-white"}
      :make-option     basic-item
      :get-value       :name
      :options         options}]))

(defn custom-item-quantity [{:keys [editable? discount quantity item-index]}]
  (r/with-let [set-quantity-multiplier! (fn [event]
                                          (let [multiplier (util/parse-pos (oget event :?target.?value))]
                                            (rf/dispatch [::events/set-quantity-multiplier item-index multiplier])))
               min-quantity-multiplier 1]
    (let [quantity-multiplier* @(rf/subscribe [::subs/quantity-multiplier item-index])
          additional-item-bonuses? @(rf/subscribe [::subs/additional-item-bonuses?])
          quantity-multiplier (if (js/isNaN quantity-multiplier*)
                                min-quantity-multiplier
                                quantity-multiplier*)
          show-discount? (and (> discount 0) additional-item-bonuses?)
          editable-stack? (and editable? (> quantity 1))
          editable-with-discount? (and editable? show-discount?)]
      [:div.relative.overflow-visible
       (cond
         editable-stack? [:<>
                          [:f> nwc/multiplication-component
                           {:base            quantity
                            :container-props {:class "mb-20"}
                            :input-props     {:default-value quantity-multiplier
                                              :placeholder   min-quantity-multiplier
                                              :on-input      set-quantity-multiplier!}}]
                          (when show-discount?
                            [:span.absolute.-top-6.left-0.text-green-500.text-base.whitespace-nowrap
                             (let [quotient (/ discount quantity)]
                               (str quantity-multiplier " - " quotient  " = " (- quantity-multiplier quotient)))])]

         editable? [:<>
                    [:input.basic-input.w-12-imp
                     {:type          :number
                      :default-value quantity-multiplier
                      :placeholder   min-quantity-multiplier
                      :on-input      set-quantity-multiplier!}]
                    (when show-discount?
                      [:span.absolute.-top-6.left-0.text-green-500.text-base.whitespace-nowrap
                       (str quantity-multiplier " - " discount " = " (- quantity-multiplier discount))])]
         :else [:<>
                [:span quantity]
                (when show-discount?
                  [:span.absolute.-top-6.right-0.text-green-500.text-base.whitespace-nowrap
                   (str (+ quantity discount) " - " discount)])])])))

(defn custom-item-name
  [{{{:keys [external-url options]
      name* :name :as item-map} :node
     :keys                      [root-node?]} :node-data
    :keys                                     [item-index]}]
  (cond
    root-node? [:div.bg-inherit.w-full.flex.gap-2
                [search item-index]
                (when external-url
                  [:a.self-center {:href external-url :target "_blank"}
                   [:i.text-sm.md:text-base.fas.fa-external-link-alt]])]
    options [:div.bg-inherit.w-full.flex.gap-2
             [dropdown item-map]
             (when external-url
               [:a.self-center {:href external-url :target "_blank"}
                [:i.text-sm.md:text-base.fas.fa-external-link-alt]])]
    :else (if external-url
            [:a.whitespace-nowrap {:href external-url :target "_blank"} name*]
            [:span.whitespace-nowrap name*])))

(defn custom-item-images
  [image-urls]
  (r/with-let [image-with-popup (fn [url] [:f> item-component/image-with-popup {:src url}])]
    [:div.flex.flex-grow.gap-4
     (into [:<>] (map image-with-popup) image-urls)]))

(defn item
  [{{:keys [quantity path discount] :as item-map} :node
    :keys                                         [root-node?]
    :as                                           node-data}
   item-index]
  [nwc/item-component
   {:popup-on-hover? true
    :container-props {:class (str "m-0-imp" (when root-node? " bg-inherit"))}
    :item-map        item-map
    :custom-quantity ^{:key (conj path "quantity")}
                     [custom-item-quantity
                      {:editable?  root-node?
                       :discount   discount
                       :quantity   quantity
                       :item-index item-index}]
    :custom-name     ^{:key path}
                     [custom-item-name
                      {:node-data  node-data
                       :item-index item-index}]}])

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
               item* (fn [node] [item node item-index])
               unrenderable? #(:as-is? (meta %))]
    (let [{:keys [ingredients id] :as selected-item} @(rf/subscribe [::subs/resolved-selected-item item-index])]
      ^{:key id}
      [:div.bg-inherit.flex.flex-col.gap-10.items-center
       [:> ctc/collapsible-list-provider
        {:value {:set-collapsed-updater   set-collapsed-updater!
                 :unset-collapsed-updater unset-collapsed-updater!}}
        [nwc/collapsible-tree-component
         {:tree-map  selected-item
          :children  :ingredients
          :make-node item*
          :ignore?   unrenderable?}]]
       (when (not-empty ingredients)
         [:div.flex.gap-6
          [:button.button.button-outline.w-52.md:w-60
           {:on-click expand-all!}
           [:i.fas.fa-expand-arrows]
           " Expand all"]
          [:button.button.button-outline.w-52.md:w-60
           {:on-click collapse-all!}
           [:i.fas.fa-compress-arrows-alt]
           " Collapse all"]])])))

(defn summary-item-tree []
  (r/with-let [collapsed-item-updaters (atom {})
               set-collapsed-updater! (fn [id updater]
                                        (swap! collapsed-item-updaters assoc id updater))
               unset-collapsed-updater! (fn [id]
                                          (swap! collapsed-item-updaters dissoc id))
               expand-all! #(doseq [[_ set-collapsed-item] @collapsed-item-updaters]
                              (set-collapsed-item false))
               collapse-all! #(doseq [[_ set-collapsed-item] @collapsed-item-updaters]
                                (set-collapsed-item true))
               item* (fn [{{:keys [items] :as item-map} :node}]
                       [nwc/item-component
                        {:item-map        item-map
                         :popup-on-hover? true
                         :custom-image    (if-let [png-urls (not-empty (map :png-url items))]
                                            [custom-item-images png-urls])}])
               unrenderable? #(:as-is? (meta %))]
    (if-let [{:keys [ingredients id] :as selected-item} @(rf/subscribe [::subs/selected-items-summary])]
      ^{:key id}
      [:div.bg-inherit.flex.flex-col.gap-10.items-center
       [:> ctc/collapsible-list-provider
        {:value {:set-collapsed-updater   set-collapsed-updater!
                 :unset-collapsed-updater unset-collapsed-updater!}}
        [nwc/collapsible-tree-component
         {:tree-map  selected-item
          :children  :ingredients
          :make-node item*
          :ignore?   unrenderable?}]]
       (when (not-empty ingredients)
         [:div.flex.gap-6
          [:button.button.button-outline.w-52.md:w-60
           {:on-click expand-all!}
           [:i.fas.fa-expand-arrows]
           " Expand all"]
          [:button.button.button-outline.w-52.md:w-60
           {:on-click collapse-all!}
           [:i.fas.fa-compress-arrows-alt]
           " Collapse all"]])])))

(defn delete-item-button [item-index]
  (r/with-let [delete-item! #(rf/dispatch [::events/remove-item item-index])]
    (let [num-selected-items @(rf/subscribe [::subs/num-selected-item-refs])
          disable-delete-button? (= 1 num-selected-items)]
      [nwc/circular-button-component
       {:class    "absolute text-xl top-2 right-0 border-0 flex-none"
        :disabled disable-delete-button?
        :on-click delete-item!}
       [:i.fas.fa-trash]])))

(defn item-cards []
  (let [num-selected-items @(rf/subscribe [::subs/num-selected-item-refs])
        num-resolved-selected-items @(rf/subscribe [::subs/num-resolved-selected-items])]
    [:<>
     (for [item-index (range num-selected-items)]
       ^{:key item-index}
       [nwc/card-component {}
        [delete-item-button item-index]
        [:div.bg-inherit.mt-2
         [searchable-item-tree item-index]]])
     (when (> num-resolved-selected-items 1)
       [nwc/card-component {}
        [:div.absolute.rounded-t.top-0.left-0.bg-purple.bg-opacity-100.w-full.h-24.shadow-md]
        [:h4.w-full.absolute.left-0.top-7.text-center.text-white
         [:i.far.fa-scroll-old.mr-2]
         "Ingredients Summary"]
        [:div.mt-20
         [summary-item-tree]]])]))

(defn actions []
  (r/with-let
    [add-empty-item! #(rf/dispatch [::events/add-empty-item])
     remove-items! #(rf/dispatch [::events/remove-all-items])]
    (let [num-items @(rf/subscribe [::subs/num-selected-item-refs])]
      [:div.flex.gap-6.md:gap-8.flex-wrap.justify-center
       [:button.button.w-64
        {:on-click add-empty-item!}
        [:i.fas.fa-plus-circle]
        " Add another item"]
       (when (> num-items 1)
         [:button.button.w-64
          {:on-click remove-items!}
          [:i.fas.fa-trash]
          " Remove all items"])
       [:f> nwc/copy-link-component]])))


(defn header []
  [:div.flex.flex-col.items-center
   [:h1.color-off-white.text-14.md:text-7xl-imp.text-center.animate__animated.animate__fadeIn.animate__slower
    "New World"]
   [:h2.color-off-white.text-8.md:text-5xl-imp.text-center.animate__animated.animate__fadeIn.animate__slower.animate__delay-1s
    "Crafting Calculator"]])

(defn body []
  [:div.relative.z-30.flex-grow.flex.gap-14.flex-col.items-center.flex-col.animate__animated.animate__fadeIn.animate__slower.animate__delay-1s
   [item-cards]
   [actions]])

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

(defn loader []
  (when @(rf/subscribe [::subs/loading?])
    [:div.absolute.z-50.h-full.w-full.flex.flex-col.gap-4.items-center
     [:div.absolute.top-72
      [nwc/loader-component {:class "fa-6x"}]]
     [:h3.color-off-white.absolute.top-120 "Steering ship"]]))

(defn background []
  [:div.absolute.z-10.bg-inherit.w-full.h-full])

(defn background-image []
  (let [start-animation? @(rf/subscribe [::subs/ready?])]
    [:img.absolute.z-0.w-full.h-full.object-cover
     {:src   "https://i.gyazo.com/599d57716f081f1e4e6a8b61f4155981.jpg"
      :class (styles/background-image-class start-animation?)}]))

(def trade-skill-map
  (sorted-map
    :armoring {:icon  "fas fa-shield"
               :label "Armoring"}
    :arcana {:icon  "fas fa-book-spells"
             :label "Arcana"}
    :cooking {:icon  "fas fa-hat-chef"
              :label "Cooking"}
    :engineering {:icon  "fas fa-cog"
                  :label "Engineering"}
    :furnishing {:icon  "fas fa-chair"
                 :label "Furnishing"}
    :jewelcrafting {:icon  "fas fa-gem"
                    :label "Jewelcrafting"}
    :leatherworking {:icon  "fas fa-deer"
                     :label "Leatherworking"}
    :smelting {:icon  "fas fa-fireplace"
               :label "Smelting"}
    :stonecutting {:icon  "fas fa-cube"
                   :label "Stonecutting"}
    :weaponsmithing {:icon  "fas fa-sword"
                     :label "Weaponsmithing"}
    :weaving {:icon  "fas fa-scarf"
              :label "Weaving"}
    :woodworking {:icon  "fas fa-axe"
                  :label "Woodworking"}))

(defn trade-skill
  [{:keys [skill on-change]
    :or   {on-change util/no-op}}]
  (let [{:keys [icon label]} (trade-skill-map skill)
        value (* 100 @(rf/subscribe [::subs/trade-skill-bonus skill]))]
    [:<>
     [:label.m-0.self-center.align-self-end.col-start-1
      {:for skill}
      [:i.mr-4 {:class icon}]
      label]
     [:div.flex.col-start-2.gap-2
      [:span.color-gray.self-center "+"]
      [:input.basic-input
       {:default-value value
        :id            skill
        :on-change     on-change
        :type          :number
        :placeholder   0}]
      [:span.color-gray.self-center "%"]]]))

(defn set-trade-skill-bonus [event]
  (let [skill (keyword (oget event :?target.?id))
        value (oget event :?target.?value)]
    (rf/dispatch [::events/set-trade-skill-bonus skill (/ (util/parse-pos value) 100)])))

(defn toggle-additional-item-bonuses []
  (rf/dispatch [::events/toggle-additional-item-bonuses]))

(defn profile []
  (let [additional-item-bonuses? @(rf/subscribe [::subs/additional-item-bonuses?])]
    [nwc/drawer-component
     {:container-props {:class "z-40 overflow-x-hidden animate__animated animate__slideInRight animate__delay-1s"}}
     [:div.grid.gap-y-12.gap-x-8.md:max-w-3xl
      {:style {:grid-template-columns "auto 7rem 1fr"}}
      [:header.col-span-3
       [:h1.text-8.md:text-5xl-imp
        "Trade Skill Bonuses"]
       [:p.col-span-3.mt-4
        "Enter additional-item-chance bonuses gained from your equipment and trade skill level below.
        See "
        [:a {:href   "https://nwdb.info/guides/additional-item-chance"
             :target "_blank"}
         "here"]
        " for more info."]]
      [:label.col-start-1 {:for :trade-skill-bonus-toggle}
       "Toggle bonuses"]
      [nwc/toggle-component
       {:container-props {:class "col-start-2" :id :trade-skill-bonus-toggle}
        :checkbox-props  {:checked   additional-item-bonuses?
                          :on-change toggle-additional-item-bonuses}
        :off             [:i.fas.fa-times.text-red-400.w-full.h-full]
        :on              [:i.fas.fa-check.text-green-400.w-full.h-full]}]
      (for [skill (keys trade-skill-map)]
        ^{:key skill}
        [trade-skill
         {:skill     skill
          :on-change set-trade-skill-bonus}])]]))

(defn content []
  (let [show-content? @(rf/subscribe [::subs/ready?])]
    (when show-content?
      [:<>
       [profile]
       [:div.relative.h-full.z-30.flex.flex-col.gap-20.pt-40.overflow-y-auto
        [header]
        [body]
        [footer]]])))

(defn main-panel []
  [:div.z-10.absolute.bg-opacity-75.relative.h-screen.dark.bg-raisin-black.overflow-x-hidden
   [loader]
   [background]
   [background-image]
   [content]])
