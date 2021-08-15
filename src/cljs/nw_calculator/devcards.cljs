(ns nw-calculator.devcards
  (:require
    [devcards.core :as dc]
    [nw-calculator.devcards.collapsible-tree]))

(enable-console-print!)

(defn ^:export main []
  (dc/start-devcard-ui!))