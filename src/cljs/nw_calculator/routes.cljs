(ns nw-calculator.routes
  (:require
    [cognitect.transit :as t]
    [re-frame.core :as rf]
    [nw-calculator.events :as events]))

(def routes
  ["/" {:name        :root
        :controllers [{:start
                       ;; Do once
                       (memoize #(rf/dispatch [::events/fetch-items]))}]}
   ["" {:name        :main
        :controllers [{:parameters {:query [:selected-item-refs]}
                       :start      (fn [{{:keys [selected-item-refs]} :query}]
                                     (when selected-item-refs
                                       (rf/dispatch [::events/set-selected-item-refs
                                                     (let [r (t/reader :json)]
                                                       (t/read r selected-item-refs))])))}]}]])