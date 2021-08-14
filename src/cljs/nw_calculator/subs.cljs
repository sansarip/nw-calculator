(ns nw-calculator.subs
  (:require
    [re-frame.core :as rf]
    [clojure.set :as cljset]))

(rf/reg-sub ::items :items)

(rf/reg-sub ::items-by-id
  :<- [::items]
  (fn [items]
    (:by-id items)))