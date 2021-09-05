(ns nw-calculator.styles
  (:require [cljstache.core :as fmt]
            [spade.core :as spade]))

(def config
  {:colors {:purple {:hex "#9b4dca" :rgb "155,77,202"}}
   :sizes  {:screen   {:md "768px"}
            :relative {:0   "0rem"
                       :1   "0.25rem"
                       :2   "0.5rem"
                       :4   "1rem"
                       :11  "2.75rem"
                       :12  "3rem"
                       :96  "24rem"
                       :152 "40rem"
                       :136 "32rem"}}})

(defn with-cfg [s] (fmt/render s config))

(def relative-0
  (-> config :sizes :relative :0))
(def relative-1
  (-> config :sizes :relative :1))
(def relative-2
  (-> config :sizes :relative :2))
(def relative-12
  (-> config :sizes :relative :12))
(def relative-96
  (-> config :sizes :relative :96))
(def relative-136
  (-> config :sizes :relative :136))
(def relative-152
  (-> config :sizes :relative :152))

(spade/defglobal global-styles
  (at-media {:min-width (-> config :sizes :screen :md)}
            [".md\\:w-152-imp" {:width (with-cfg "{{sizes.relative.152}} !important")}]
            [".md\\:pr-12-imp" {:padding-right (with-cfg "{{sizes.relative.12}} !important")}])
  [:body {:font-family "'Roboto', sans-serif"}]
  [:button.button {:padding (with-cfg "0px {{sizes.relative.4}} 0px {{sizes.relative.4}}")}]
  [:.border-purple {:border-color (with-cfg "rgba({{colors.purple.rgb}}, var(--tw-border-opacity))")}]
  [:.bg-purple {:background-color (with-cfg "rgba({{colors.purple.rgb}}, var(--tw-bg-opacity))")}]
  [:.text-purple {:color (with-cfg "rgba({{colors.purple.rgb}}, var(--tw-text-opacity))")}]
  [:.m-0-imp {:margin (with-cfg "{{sizes.relative.0}} !important")}]
  [:.w-11-imp {:width (with-cfg "{{sizes.relative.11}} !important")}]
  [:.min-w-12 {:min-width relative-12}]
  [:.min-w-96 {:min-width relative-96}]
  [:.w-136 {:width relative-136}]
  [:.w-152 {:width relative-152}]
  [:input.basic-input {:padding-bottom relative-0
                       :padding-top    relative-0
                       :padding-left   relative-1
                       :height         relative-12
                       :border-width   :2px
                       :border-top     relative-0
                       :border-left    relative-0
                       :border-right   relative-0
                       :border-radius  relative-0}]
  ["input::-webkit-outer-spin-button, input::-webkit-inner-spin-button"
   {:-webkit-appearance :none
    :margin             relative-0}]
  ["input[type=number]" {:-moz-appearance :textfield}])

(spade/defclass search-result-item-class []
  [:.labels {:width          :100%
             :flex-direction :column
             :align-items    :start
             :gap            relative-2}])


