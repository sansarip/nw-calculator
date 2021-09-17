(ns nw-calculator.components.multiplication.styles
  (:require
    [spade.core :as spade]
    [nw-calculator.styles :as styles]))

(spade/defclass multiplication-class []
  [:input.basic-input.multiplier
   {:width          :100%
    :bottom         :4.5rem}]
  [:input.basic-input.product
   {:border :0px
    :padding (styles/with-config "{{sizes.relative.4}} 0px 0px 0px")}])
