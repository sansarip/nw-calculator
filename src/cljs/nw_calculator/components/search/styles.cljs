(ns nw-calculator.components.search.styles
  (:require
    [spade.core :as spade]
    [nw-calculator.styles]))

(spade/defclass search-class []
  [:input.search.basic-input {:padding-right :4rem}])
