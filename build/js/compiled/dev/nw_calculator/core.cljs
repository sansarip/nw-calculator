(ns ^:figwheel-hooks nw-calculator.core
  (:require
    [taoensso.timbre :as timbre]
    [reagent.dom :as rd]
    [re-frame.core :as rf]
    [nw-calculator.events :as events]
    [nw-calculator.views :as views]
    [nw-calculator.utilities :as util]))

(defn dev-setup []
  (when js/goog.DEBUG
    (enable-console-print!)
    (timbre/info "\uD83D\uDC77 Dev mode!")))

(defn ^:after-load initialize-app! []
  (rf/clear-subscription-cache!)
  (rd/render [views/main-panel]
             (.getElementById js/document "app")))

(defn ^:export main []
  (dev-setup)
  (rf/dispatch-sync [::events/initialize-db])
  (rf/dispatch [::events/fetch-items])
  (initialize-app!))