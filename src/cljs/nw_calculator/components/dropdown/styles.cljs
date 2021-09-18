(ns nw-calculator.components.dropdown.styles
  (:require
    [spade.core :as spade]
    [nw-calculator.styles :as styles]))

(spade/defclass dropdown-class []
  [:input.dropdown.basic-input {:padding-right styles/relative-6}])
