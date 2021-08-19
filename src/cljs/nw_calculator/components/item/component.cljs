(ns nw-calculator.components.item.component
  (:require
    [nw-calculator.utilities :as util]
    [reagent.core :as r]
    [clojure.string :as string]))

(defn image-popup [{:keys [src show?]} & children]
  [:div.popup.relative.flex.flex-auto
   (into [:<>] children)
   [:img.w-48.h-48.object-cover.absolute.top-10.z-10.bg-light-blue.rounded-full.rounded-tl-none.border-purple.border-opacity-30.border-2.bg-white
    {:src src :class (str "left-12 " (if show? "visible" "hidden"))}]])

(defn item
  ([item-map] [item {} item-map])
  ([{:keys [popup-on-hover? linkable?]} {:keys [amount external-url png-url name xp tier]}]
   (r/with-let [show-popup? (r/atom false)
                hide-popup (if popup-on-hover? (fn [& _] (reset! show-popup? false)) util/no-op)
                show-popup (if popup-on-hover? (fn [& _] (reset! show-popup? true)) util/no-op)]
     [image-popup
      {:src   png-url
       :show? @show-popup?}
      [:div.flex.items-center.mx-3.gap-3.z-0.relative
       [:img.bg-white.rounded-full.border-purple.border-opacity-30.border-2.w-12.h-12.object-cover
        {:src           (util/localize-external-img png-url)
         :on-mouse-over show-popup
         :on-mouse-out  hide-popup}]
       [:span
        amount
        " "
        (if linkable?
          [:a {:href external-url :target "_blank"} name]
          name)
        [:span.text-sm
         (let [tier-label (when tier (str "T" tier))
               xp-label (when xp (str xp "XP"))
               basic-info (->> [tier-label xp-label]
                               (filter identity)
                               (string/join " ")
                               not-empty)]
           (when basic-info
             (str " (" basic-info ")")))]]]])))