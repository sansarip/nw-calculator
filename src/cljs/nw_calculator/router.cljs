(ns nw-calculator.router
  (:require
    [nw-calculator.events :as events]
    [re-frame.core :as rf]
    [reitit.frontend :as rfr]
    [reitit.frontend.easy :as rfe]
    [nw-calculator.routes :as routes]))

(defn on-navigate [new-match]
  (when new-match
    (rf/dispatch [::events/navigated new-match])))

(def router
  (rfr/router
    routes/routes))

(defn init-routes! []
  (rfe/start!
    router
    on-navigate
    {:use-fragment true}))
