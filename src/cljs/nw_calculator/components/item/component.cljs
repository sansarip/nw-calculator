(ns nw-calculator.components.item.component
  (:require
    [nw-calculator.utilities :as util]
    [reagent.core :as r]
    [clojure.string :as string]
    [react]
    [cljstache.core :as fmt]))

(defn image-with-popup [{:keys [src disable-popup?]}]
  (r/with-let [popup-ele (atom nil)]
    (let [[popup-target-ele set-popup-target-ele!] (react/useState nil)]
      (react/useEffect
        (fn []
          (when (and (not @popup-ele) popup-target-ele)
            (let [new-popup-ele (util/html->ele
                                              (fmt/render
                                                "<img class=\"hidden max-w-3xl w-48 h-48 object-cover absolute z-10 bg-light-blue rounded-full rounded-tl-none border-purple border-opacity-30 border-2 bg-white\" src=\"{{src}}\" style=\"top: {{top}}px; left: {{left}}px\" />"
                                                (let [[left top] (util/get-ele-offsets popup-target-ele)]
                                                  {:src  src
                                                   :left (+ left 25)
                                                   :top  (+ top 25)})))]
                 (reset! popup-ele new-popup-ele)
                 (js/document.body.appendChild new-popup-ele)))
          (when-let [popup-ele* @popup-ele]
            (if  popup-target-ele
              (.. popup-ele* -classList (remove "hidden"))
              (.. popup-ele* -classList (add "hidden"))))
          (fn []
            (when-let [popup-ele* @popup-ele]
              (reset! popup-ele nil)
              (.remove popup-ele*))))
        #js [popup-target-ele])
      (r/with-let [show-popup (fn [event] (set-popup-target-ele! (.-target event)))
                   hide-popup (fn [_event] (set-popup-target-ele! nil))]
        [:div.popup.relative.w-12.h-12.min-w-12
         [:img.bg-white.rounded-full.border-purple.border-opacity-30.border-2.w-full.h-full.min-w-full.object-cover
          {:src           (util/localize-external-img src)
           :on-mouse-over (when-not disable-popup? show-popup)
           :on-mouse-out  (when-not disable-popup? hide-popup)}]]))))


(defn placeholder-icon []
  [:div.flex.items-center.justify-center.rounded-full.border-purple.border-opacity-30.border-2.w-12.h-12.min-w-12
   [:i.text-purple.text-opacity-50.text-lg.far.fa-question]])

(defn item
  [{:keys          [popup-on-hover?
                    custom-name
                    custom-amount
                    container-props
                    stacked-labels?]
    {:keys [amount
            png-url
            name
            xp
            tier]} :item-map}]
  (r/with-let [labels-key (str "labels_" (util/short-uuid-str))]
    [:div.flex.items-center.mx-3.gap-4.relative
     container-props
     (if png-url
       [:f> image-with-popup
        {:src            png-url
         :disable-popup? (not popup-on-hover?)}]
       [placeholder-icon])
     ^{:key labels-key}
     [:div.labels.w-full.flex.items-end.gap-2.md:gap-4
      (or custom-amount amount)
      " "
      [(if stacked-labels? :div.flex.flex-col :<>)
       (or custom-name name)
       [:span.basic-info.text-sm.align-text-bottom.whitespace-nowrap
        (let [tier-label (when tier (str "T" tier))
              xp-label (when xp (str xp "XP"))
              basic-info (->> [tier-label xp-label]
                              (filter identity)
                              (string/join " ")
                              not-empty)]
          (when basic-info
            (str " (" basic-info ")")))]]]]))