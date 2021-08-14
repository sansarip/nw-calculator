(ns nw-calculator.effects
  (:require
    [re-frame.core :as rf]
    [taoensso.timbre :as timbre]))

(rf/reg-fx
  ::log-info
  (fn [msgs]
    (apply timbre/info msgs)))
