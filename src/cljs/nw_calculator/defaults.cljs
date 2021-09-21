(ns nw-calculator.defaults
  (:require [compound2.core :as c]))

(def items-index
  (c/compound [{:id          :by-id
                :index-type  :one-to-one
                :kfn         :id
                :on-conflict (fn [a _] a)}]))

(def cumulative-items-index
  (c/compound [{:id          :by-id
                :index-type  :one-to-one
                :kfn         :id
                :on-conflict (fn [{quantity-1 :quantity
                                   :or        {quantity-1 1}
                                   :as        item-1}
                                  {quantity-2 :quantity
                                   :or        {quantity-2 1}}]
                               (assoc item-1 :quantity (+ quantity-1 quantity-2)))}]))

(def empty-item {:ingredients []})

(def empty-selected-item {:item                empty-item
                          :selected-options    {}
                          :quantity-multiplier 1})

(def default-db
  {:state          :loading
   :items          items-index
   :selected-items [empty-selected-item]
   :search-results [[]]})