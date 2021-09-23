(ns nw-calculator.components.item.component
  (:require
    [nw-calculator.utilities :as util]
    [reagent.core :as r]
    [clojure.string :as string]
    [cljstache.core :as fmt]
    [nw-calculator.components.item.styles :as styles]
    [react]))

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
                                       :left (+ left 20)
                                       :top  (+ top 20)})))]
              (reset! popup-ele new-popup-ele)
              (js/document.body.appendChild new-popup-ele)))
          (when-let [popup-ele* @popup-ele]
            (if popup-target-ele
              (.. popup-ele* -classList (remove "hidden"))
              (.. popup-ele* -classList (add "hidden"))))
          #(when-let [popup-ele* @popup-ele]
             (reset! popup-ele nil)
             (.remove popup-ele*)))
        #js [popup-target-ele])
      (r/with-let [show-popup (fn [event] (set-popup-target-ele! (.-target event)))
                   hide-popup (fn [_event] (set-popup-target-ele! nil))]
        [:img.bg-none.w-8.h-8
         {:src           src
          :on-mouse-over (when-not disable-popup? show-popup)
          :on-mouse-out  (when-not disable-popup? hide-popup)}]))))


(defn placeholder-icon []
  [:div.flex.items-center.justify-center
   {:class (styles/placeholder-icon-class)}
   [:i.text-purple.text-opacity-50.fa-1x.text-2xl.fas.fa-question]])

(defn item
  [{:keys             [popup-on-hover?
                       custom-name
                       custom-quantity
                       custom-image
                       container-props]
    {:keys     [quantity
                png-url
                xp
                category-name
                tier]
     item-name :name} :item-map}]
  (r/with-let [labels-key (str "labels_" (util/short-uuid-str))]
    [:div.flex.gap-4.relative
     container-props
     (or custom-image
         (if png-url
           [:f> image-with-popup
            {:src            png-url
             :disable-popup? (not popup-on-hover?)}]
           [placeholder-icon]))
     ^{:key labels-key}
     [:div.bg-inherit.labels.w-full.flex.items-start.gap-4
      (or custom-quantity quantity)
      " "
      [:div.bg-inherit.w-full.flex.flex-col.gap-2
       [:span.bg-inherit (or custom-name item-name)]
       [:span.basic-info.text-sm.align-text-bottom.whitespace-nowrap
        (let [tier-label (when tier (str "T" tier))
              xp-label (when xp (str xp "XP"))
              basic-info (->> [category-name tier-label xp-label]
                              (filter identity)
                              (string/join " ")
                              not-empty)]
          (when basic-info
            (str " (" basic-info ")")))]]]]))