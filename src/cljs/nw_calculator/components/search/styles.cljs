(ns nw-calculator.components.search.styles
  (:require
    [spade.core :as spade]
    [nw-calculator.styles :as styles]))

(spade/defclass search-class []
  [:input {:border-bottom-left-radius  :0px
           :border-bottom-right-radius :0px
           :padding-right              :4rem
           :border-width               :2px}]
  [:.bg-hover:hover {:background-color (styles/with-color "rgba({{purple.rgb}}, var(--tw-bg-opacity))")}])