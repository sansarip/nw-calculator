(ns nw-calculator.components.toggle.styles
  (:require [spade.core :as spade]))

(spade/defclass toggle-class []
  [:& {:height :31px
       :width  :60px}]
  ["input:checked ~ .ball" {:transform "translateX(29px)"}]
  [:.ball {:width  :25px
           :height :25px
           :top    :1px
           :left   :1px}]
  [".top-9\\/25" {:top "36%"}]
  [:.on {:left :5px}]
  [:.off {:right :5px}])