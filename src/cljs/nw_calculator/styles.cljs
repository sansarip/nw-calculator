(ns nw-calculator.styles
  (:require [cljstache.core :as fmt]
            [spade.core :as spade]))

(def config
  {:colors {:purple       {:hex "#9b4dca" :rgb "155,77,202"}
            :off-white    {:hex "#f8f8ff" :rgb "248, 248, 255"}
            :gray         {:hex "#d1d1d1" :rgb "209, 209, 209"}
            :light-gray   {:hex "#e5e7eb" :rgb "229, 231, 235"}
            :raisin-black {:hex "#282a36" :rgb "40, 42, 54"}}
   :sizes  {:screen   {:md "768px"}
            :relative {:0   "0rem"
                       :1   "0.25rem"
                       :2   "0.5rem"
                       :4   "1rem"
                       :6   "1.5rem"
                       :7   "1.75rem"
                       :8   "2rem"
                       :10  "2.5rem"
                       :11  "2.75rem"
                       :12  "3rem"
                       :14  "3.5rem"
                       :16  "4rem"
                       :18  "4.5rem"
                       :96  "24rem"
                       :112 "28rem"
                       :120 "30rem"
                       :128 "32rem"
                       :160 "40rem"
                       :176 "44rem"
                       :192 "48rem"}}})

(defn with-config [s] (fmt/render s config))

(def relative-0
  (-> config :sizes :relative :0))
(def relative-1
  (-> config :sizes :relative :1))
(def relative-2
  (-> config :sizes :relative :2))
(def relative-4
  (-> config :sizes :relative :4))
(def relative-6
  (-> config :sizes :relative :6))
(def relative-8
  (-> config :sizes :relative :8))
(def relative-10
  (-> config :sizes :relative :10))
(def relative-12
  (-> config :sizes :relative :12))
(def relative-14
  (-> config :sizes :relative :14))
(def relative-18
  (-> config :sizes :relative :18))
(def relative-96
  (-> config :sizes :relative :96))
(def relative-112
  (-> config :sizes :relative :112))
(def relative-120
  (-> config :sizes :relative :120))
(def relative-128
  (-> config :sizes :relative :128))
(def relative-176
  (-> config :sizes :relative :176))
(def relative-192
  (-> config :sizes :relative :192))
(def off-white
  (-> config :colors :off-white :hex))
(def light-gray
  (-> config :colors :light-gray :hex))
(def gray
  (-> config :colors :gray :hex))

(spade/defglobal global-styles
  (at-media {:min-width (-> config :sizes :screen :md)}
            [".md\\:min-w-176-imp" {:min-width (with-config "{{sizes.relative.176}} !important")}]
            [".md\\:pr-12-imp" {:padding-right (with-config "{{sizes.relative.12}} !important")}]
            [".md\\:text-7xl-imp" {:font-size "4.5rem !important"}]
            [".md\\:text-5xl-imp" {:font-size "3rem !important"}]
            [".md\\:w-1\\/3screen" {:width :33.33vw}])
  (at-media {:max-width (-> config :sizes :screen :md)}
            [".sm\\:w-19\\/20screen" {:width :95vw}])
  [:body {:font-family "'Roboto', sans-serif"}]
  [:#app {:background :inherit}]
  [:h3 :h2 :h1 {:letter-spacing :0.4rem
                :text-transform :uppercase
                :font-family    "'IM Fell English SC', serif"}]
  [:.color-off-white {:color off-white}]
  [:.color-light-gray {:color light-gray}]
  [:.color-gray {:color gray}]
  [:.text-8 {:font-size relative-10}]
  [:.text-14 {:font-size relative-14}]
  [:.bg-inherit {:background "inherit"}]
  [:.bg-purple {:background-color (with-config "rgba({{colors.purple.rgb}}, var(--tw-bg-opacity))")}]
  [:.bg-purple-imp {:background-color (with-config "rgba({{colors.purple.rgb}}, var(--tw-bg-opacity)) !important")}]
  [:.bg-raisin-black {:background-color (with-config "rgba({{colors.raisin-black.rgb}}, var(--tw-bg-opacity))")}]
  [:.bg-off-white {:background-color (with-config "rgba({{colors.off-white.rgb}}, var(--tw-bg-opacity))")}]
  [:.bg-off-white-imp {:background-color (with-config "rgba({{colors.off-white.rgb}}, var(--tw-bg-opacity)) !important")}]
  [:button.button {:padding (with-config "0px {{sizes.relative.4}} 0px {{sizes.relative.4}}")}]
  [:.border-purple {:border-color (with-config "rgba({{colors.purple.rgb}}, var(--tw-border-opacity))")}]
  [:.text-purple {:color (with-config "rgba({{colors.purple.rgb}}, var(--tw-text-opacity))")}]
  [:.m-0-imp {:margin (with-config "{{sizes.relative.0}} !important")}]
  [:.p-0-imp {:padding (with-config "{{sizes.relative.0}} !important")}]
  [:.w-11-imp {:width (with-config "{{sizes.relative.11}} !important")}]
  [:.w-12-imp {:width (with-config "{{sizes.relative.12}} !important")}]
  [:.min-w-12 {:min-width relative-12}]
  [:.min-w-96 {:min-width relative-96}]
  [:.min-w-128 {:min-width relative-128}]
  [:.max-w-half {:max-width :50%}]
  [:.max-h-192 {:max-height relative-192}]
  [:.w-176 {:width relative-176}]
  [:.mb-18 {:margin-bottom relative-18}]
  [:.top-120 {:top relative-120}]
  [:input.basic-input {:padding-bottom relative-0
                       :padding-top    relative-0
                       :padding-right  relative-0
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
  ["input[type=number]" {:-moz-appearance :textfield}]
  [:select {:padding (with-config "0px 0px 0px {{sizes.relative.1}}")
            :height  relative-12}]
  [:.bg-white-imp {:background-color "white !important"}]
  [:.flip-y {:transform "scaleY(-1)"}]
  [:.flip-x {:transform "scaleX(-1)"}])

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
                  [[(anim-frames) "2.5s" :linear "0s" :normal :forwards]])}))