(ns nw-calculator.defaults
  (:require [compound2.core :as c]))

(def items-index
  (c/compound [{:id          :by-id
                :index-type  :one-to-one
                :kfn         :id
                :on-conflict (fn [a _] a)}]))

(def empty-selected-item-ref {:selected-options    {}
                              :quantity-multiplier 1})

(def default-db
  {:state                    :loading
   :items                    items-index
   :selected-item-refs       [empty-selected-item-ref]
   :search-results           [[]]
   :additional-item-bonuses? true})