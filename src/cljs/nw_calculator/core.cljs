(ns ^:figwheel-hooks nw-calculator.core
  (:require
    [taoensso.timbre :as timbre]
    [reagent.dom :as rd]
    [re-frame.core :as rf]
    [nw-calculator.events :as events]
    [nw-calculator.views :as views]
    [nw-calculator.router :as router]
    [nw-calculator.defaults :as df]))

(defn dev-mode! []
  (enable-console-print!)
  (timbre/info "\uD83D\uDC77 Dev mode!"))

(defn ^:after-load initialize-app! []
  (rf/clear-subscription-cache!)
  (rd/render [views/main-panel]
             (.getElementById js/document "app")))

(defn ^:export main []
  (when js/goog.DEBUG
    (dev-mode!))
  (rf/dispatch-sync [::events/initialize-db df/default-db])
  (router/init-routes!)
  (initialize-app!))