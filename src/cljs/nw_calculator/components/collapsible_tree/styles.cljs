(ns nw-calculator.components.collapsible-tree.styles
  (:require
    [spade.core :as spade]
    [nw-calculator.styles :as styles]))

(spade/defclass collapsible-list-class []
  [:.bg-white-imp {:background-color "white !important"}]
  [:.translate-4% {:transform "translate(4%, 4%)"}]
  [:.flip-y {:transform "scaleY(-1)"}])

(spade/defclass tree-class []
  [:&>dt {:border-left :none}]
  [:&>dt>div>button {:display :none}])
