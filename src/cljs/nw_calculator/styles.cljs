(ns nw-calculator.styles
  (:require [cljstache.core :as fmt]
            [spade.core :as spade]))

(def color-palette {:purple {:hex "#9b4dca" :rgb "155,77,202"}})

(defn with-color [s] (fmt/render s color-palette))

(def md "768px")

(spade/defglobal global-styles
  (at-media {:min-width md}
            [".md\\:w-152-imp" {:width "40rem !important"}]
            [".md\\:pr-12-imp" {:padding-right "3rem !important"}])
  [:body {:font-family "'Roboto', sans-serif"}]
  [:button.button {:padding-left :1rem :padding-right :1rem}]
  [:.border-purple {:border-color (with-color "rgba({{purple.rgb}}, var(--tw-border-opacity))")}]
  [:.bg-purple {:background-color (with-color "rgba({{purple.rgb}}, var(--tw-bg-opacity))")}]
  [:.text-purple {:color (with-color "rgba({{purple.rgb}}, var(--tw-text-opacity))")}]
  [:.m-0-imp {:margin "0px !important"}]
  [:.min-w-12 {:min-width :3rem}]
  [:.min-w-96 {:min-width :24rem}]
  [:.w-152 {:width :40rem}]
  [:.w-136 {:width :32rem}]
  [:.w-11-imp {:width "2.75rem !important"}]
  [:input.basic-input {:padding-bottom :0px
                       :padding-top    :0px
                       :padding-left   :.25rem
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
  [:.labels {:width          :100%
             :flex-direction :column
             :align-items    :start
             :gap            :.5rem}])


