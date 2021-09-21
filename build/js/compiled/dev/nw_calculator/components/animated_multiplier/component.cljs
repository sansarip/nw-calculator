(ns nw-calculator.components.animated-multiplier.component
  (:require
    [react]
    [reagent.core :as r]
    [nw-calculator.components.animated-multiplier.styles :as styles]))

(defn get-svg-path [icon-ele]
  (some-> icon-ele
          .-children
          (aget 0)
          .-children
          (aget 0)))

(defn animated-multiplier []
  (r/with-let
    [icon-ref (react/useRef)
     ;; Have to use a mutation observer because Font Awesome adds SVGs asynchronously
     observer (js/MutationObserver.
                #(js/anime #js {:targets          #js [(get-svg-path (.-current icon-ref))]
                                :strokeDashoffset #js [js/anime.setDashoffset, 0]
                                :easing           "linear"
                                :duration         500
                                :delay            0}))]
    (react/useEffect
      (fn []
        (.observe observer (.-current icon-ref) #js {:childList true})
        #(.disconnect observer))
      #js [])
    [:i.far.fa-times
     {:ref   icon-ref
      :class (styles/animated-multiplier)}]))
