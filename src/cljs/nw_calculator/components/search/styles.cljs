(ns nw-calculator.components.search.styles
  (:require
    [spade.core :as spade]
    [nw-calculator.styles :as styles]))

(spade/defclass search-class [no-bottom-border-radius?]
  [:input (cond-> {:padding-right :4rem
                   :border-width  :2px}
                  no-bottom-border-radius? (assoc :border-bottom-left-radius :0px
                                                  :border-bottom-right-radius :0px))]
  [:.bg-hover:hover {:background-color (styles/with-color "rgba({{purple.rgb}}, var(--tw-bg-opacity))")}])