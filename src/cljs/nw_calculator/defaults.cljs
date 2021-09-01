(ns nw-calculator.defaults
  (:require [compound2.core :as c]))

(def default-items
  (c/compound [{:id          :by-id
                :index-type  :one-to-one
                :kfn         :id
                :on-conflict (fn [a _] a)}]))

(def default-db
   :items default-items})   :items               default-items
