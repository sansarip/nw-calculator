(ns nw-calculator.defaults
  (:require [compound2.core :as c]))

(def default-items
  (c/compound [{:id          :by-id
                :index-type  :one-to-one
                :kfn         :id
                :on-conflict (fn [a _] a)}]))

(def empty-item {:ingredients []})

(def empty-selected-item {:item                empty-item
                          :amount-multiplier 1})

(def default-db
  {:state              :loading
   :items              default-items
   :selected-items     [empty-selected-item]
   :search-results     []})