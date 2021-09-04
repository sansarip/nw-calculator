(ns nw-calculator.components.collapsible-tree.styles
  (:require
    [nw-calculator.styles]
    [spade.core :as spade]))

(spade/defclass collapsible-list-class []
  [:.bg-white-imp {:background-color "white !important"}]
  [:.flip-y {:transform "scaleY(-1)"}])

(spade/defclass tree-class []
  ["&>dt" "&>dt>dl" "&>dt>div" "&>dl>dt"
   {:margin  "0px !important"
    :padding "0px !important"}])
