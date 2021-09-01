(ns nw-calculator.styles
  (:require [cljstache.core :as fmt]
            [spade.core :as spade]))

(def color-palette {:purple {:hex "#9b4dca" :rgb "155,77,202"}})

(defn with-color [s] (fmt/render s color-palette))

(spade/defglobal global-styles
  {:font-family "'Roboto', sans-serif"}                     ;}
  [:.border-purple {:border-color (with-color "rgba({{purple.rgb}}, var(--tw-border-opacity))")}]
  [:.bg-purple {:background-color (with-color "rgba({{purple.rgb}}, var(--tw-bg-opacity))")}]
  [:.text-purple {:color (with-color "rgba({{purple.rgb}}, var(--tw-text-opacity))")}]
  [:.min-w-12 {:min-width :3rem}]
  [:.min-w-96 {:min-width :24rem}]
  [:.w-16-imp {:width "4rem !important"}]
  [:input.basic-input {:padding-bottom :0px
                       :padding-top    :0px
                       :height         :3rem
                       :border-width   :2px
                       :border-top     :0px
                       :border-left    :0px
                       :border-right   :0px
                       :border-radius  :0px}]
  ["input::-webkit-outer-spin-button, input::-webkit-inner-spin-button"
   {:-webkit-appearance :none
    :margin             :0px}]
  ["input[type=number]" {:-moz-appearance :textfield}])

(spade/defclass search-result-item-class []
  [:.labels {:width           :100%
             :justify-content :space-between}]
  [:.basic-info {:margin-left :.75rem}])


