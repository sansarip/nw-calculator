(ns nw-calculator.components.animated-multiplier.styles
  (:require
    [spade.core :as spade]
    [nw-calculator.styles :as styles]))

(spade/defclass animated-multiplier []
  [:path {:stroke       (styles/with-config "rgba({{colors.purple.rgb}}, .6)")
          :fill         :none
          :stroke-width :4rem}])
