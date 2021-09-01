(ns nw-calculator.components.item.component
  (:require
    [nw-calculator.utilities :as util]
    [reagent.core :as r]
    [clojure.string :as string]))

(defn image-with-popup [{:keys [src show? show-popup hide-popup]}]
  [:div.popup.relative.w-12.h-12.min-w-12
   [:img.bg-white.rounded-full.border-purple.border-opacity-30.border-2.w-full.h-full.min-w-full.object-cover
    {:src           (util/localize-external-img src)
     :on-mouse-over show-popup
     :on-mouse-out  hide-popup}]
   [:img.max-w-3xl.w-48.h-48.object-cover.absolute.top-10.z-10.bg-light-blue.rounded-full.rounded-tl-none.border-purple.border-opacity-30.border-2.bg-white
    {:src src :class (str "left-10 " (if show? "visible" "hidden"))}]])

(defn placeholder-icon []
  [:div.flex.items-center.justify-center.rounded-full.border-purple.border-opacity-30.border-2.w-12.h-12.min-w-12
   [:i.text-purple.text-opacity-50.text-lg.far.fa-question]])

(defn item
  [{:keys          [popup-on-hover?
                    custom-name
                    custom-amount
                    container-props]
    {:keys [amount
            png-url
            name
            xp
            tier]} :item-map}]
  (r/with-let [show-popup? (r/atom false)
               hide-popup (if popup-on-hover? (fn [& _] (reset! show-popup? false)) util/no-op)
               show-popup (if popup-on-hover? (fn [& _] (reset! show-popup? true)) util/no-op)
               labels-key (str "labels_" (util/short-uuid-str))]
    [:div.flex.items-center.mx-3.gap-3.relative
     container-props
     (if png-url
       [image-with-popup
        {:src        png-url
         :show?      @show-popup?
         :hide-popup hide-popup
         :show-popup show-popup}]
       [placeholder-icon])
     ^{:key labels-key}
     [:div.labels.w-full.flex.items-end.gap-4
      (or custom-amount amount)
      " "
      (or custom-name name)
      [:span.basic-info.text-base.align-text-bottom.whitespace-nowrap
       (let [tier-label (when tier (str "T" tier))
             xp-label (when xp (str xp "XP"))
             basic-info (->> [tier-label xp-label]
                             (filter identity)
                             (string/join " ")
                             not-empty)]
         (when basic-info
           (str " (" basic-info ")")))]]]))