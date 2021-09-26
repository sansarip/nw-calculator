(ns nw-calculator.event-handlers
  (:require
    [cognitect.transit :as t]
    [nw-calculator.effects :as effects]
    [nw-calculator.defaults :as df]))

(defn next-state [db path fsm transition]
  (let [current-state (get-in db path)
        new-state (get-in fsm [current-state transition])]
    (assoc-in db path new-state)))

(defn clear-search
  ([db]
   (assoc db :search-results [[]]))
  ([db item-index]
   (assoc-in db [:search-results item-index] [])))

(defn set-selected-item-refs [db selected-item-refs]
  (assoc db :selected-item-refs selected-item-refs))

(defn navigate-with-selected-item-refs [cfx selected-item-refs]
  (let [w (t/writer :json)
        selected-item-refs->transit (t/write w selected-item-refs)]
    (assoc cfx
      ::effects/navigate! [:main {} {:selected-item-refs selected-item-refs->transit}])))


