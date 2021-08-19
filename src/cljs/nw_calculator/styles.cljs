(ns nw-calculator.styles
  (:require [cljstache.core :as fmt]
            [spade.core :as spade]))

(def color-palette {:purple {:hex "#9b4dca" :rgb "155,77,202"}})

(defn with-color [s] (fmt/render s color-palette))

(spade/defglobal global-styles
  [:.border-purple {:border-color (with-color "rgba({{purple.rgb}}, var(--tw-border-opacity))")}])

