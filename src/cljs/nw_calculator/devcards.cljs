(ns nw-calculator.devcards
  (:require
    [devcards.core :as dc]
    [nw-calculator.devcards.collapsible-tree]
    [nw-calculator.devcards.item]
    [nw-calculator.devcards.loader]
    [nw-calculator.devcards.search]))

(enable-console-print!)

(defn ^:export main []
  (dc/start-devcard-ui!))