(ns nw-calculator.components.collapsible-tree.styles
  (:require
    [nw-calculator.styles]
    [spade.core :as spade]))

(spade/defclass collapsible-list-class []
  [:.bg-white-imp {:background-color "white !important"}]
  [:.flip-y {:transform "scaleY(-1)"}])

(spade/defclass tree-class []
  ["&>dt"
   "&>dt:first-child>dl:first-child>dt:first-child"
   "&>dt>dl:last-child>dt:first-child>dl:first-child>dt" {:border-left :none
                                                          :padding     :0px}]
  ["&>dt:first-child>dl:first-child>dt:first-child>div" {:display :none}])
