(ns nw-calculator.styles
  (:require [cljstache.core :as fmt]
            [spade.core :as spade]))

(def config
  {:colors {:purple       {:hex "#9b4dca" :rgb "155,77,202"}
            :off-white    {:hex "#f8f8ff" :rgb "248, 248, 255"}
            :raisin-black {:hex "#282a36" :rgb "40, 42, 54"}}
   :sizes  {:screen   {:md "768px"}
            :relative {:0   "0rem"
                       :1   "0.25rem"
                       :2   "0.5rem"
                       :4   "1rem"
                       :8   "2.5rem"
                       :11  "2.75rem"
                       :12  "3rem"
                       :14  "3.5rem"
                       :96  "24rem"
                       :128 "32rem"
                       :160 "40rem"
                       :176 "44rem"}}})

(defn with-cfg [s] (fmt/render s config))

(def relative-0
  (-> config :sizes :relative :0))
(def relative-1
  (-> config :sizes :relative :1))
(def relative-2
  (-> config :sizes :relative :2))
(def relative-8
  (-> config :sizes :relative :8))
(def relative-12
  (-> config :sizes :relative :12))
(def relative-14
  (-> config :sizes :relative :14))
(def relative-96
  (-> config :sizes :relative :96))
(def relative-128
  (-> config :size :relative :128))
(def relative-176
  (-> config :sizes :relative :176))
(def off-white
  (-> config :colors :off-white :hex))

(spade/defglobal global-styles
  (at-media {:min-width (-> config :sizes :screen :md)}
            [".md\\:w-176-imp" {:width (with-cfg "{{sizes.relative.176}} !important")}]
            [".md\\:pr-12-imp" {:padding-right (with-cfg "{{sizes.relative.12}} !important")}]
            [".md\\:text-7xl-imp" {:font-size "4.5rem !important"}]
            [".md\\:text-5xl-imp" {:font-size "3rem !important"}])
  [:body {:font-family "'Roboto', sans-serif"}]
  [:#app {:background :inherit}]
  [:h3 :h2 :h1 {:letter-spacing :0.4rem
                :text-transform :uppercase
                :font-family    "'IM Fell English SC', serif"}]
  [".dark h3, .dark h2, .dark h1, .dark span.version" {:color off-white}]
  [:.text-8 {:font-size relative-8}]
  [:.text-14 {:font-size relative-14}]
  [:.bg-inherit {:background "inherit"}]
  [:.bg-purple {:background-color (with-cfg "rgba({{colors.purple.rgb}}, var(--tw-bg-opacity))")}]
  [:.bg-raisin-black {:background-color (with-cfg "rgba({{colors.raisin-black.rgb}}, var(--tw-bg-opacity))")}]
  [:.bg-off-white {:background-color (with-cfg "rgba({{colors.off-white.rgb}}, var(--tw-bg-opacity))")}]
  [:button.button {:padding (with-cfg "0px {{sizes.relative.4}} 0px {{sizes.relative.4}}")}]
  [:.border-purple {:border-color (with-cfg "rgba({{colors.purple.rgb}}, var(--tw-border-opacity))")}]
  [:.text-purple {:color (with-cfg "rgba({{colors.purple.rgb}}, var(--tw-text-opacity))")}]
  [:.m-0-imp {:margin (with-cfg "{{sizes.relative.0}} !important")}]
  [:.w-11-imp {:width (with-cfg "{{sizes.relative.11}} !important")}]
  [:.min-w-12 {:min-width relative-12}]
  [:.min-w-96 {:min-width relative-96}]
  [:.w-128 {:width relative-128}]
  [:.w-176 {:width relative-176}]
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

(let [initial-blur "blur(12px)"]
  (spade/defkeyframes anim-frames []
    ["0%" {:filter initial-blur}]
    ["100%" {:filter "blur(0px)"}])

  (spade/defclass background-image-class [start-animation?]
    {:filter    initial-blur
     :animation (when start-animation?
                  [[(anim-frames) "3s" :linear "0s" :normal :forwards]])}))