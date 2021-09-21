(ns nw-calculator.components.item.styles
  (:require [spade.core :as spade]))

(spade/defclass placeholder-icon-class []
  [:& {:width     :32px
       :height    :32px
       :min-width :32px}])
