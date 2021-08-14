(ns nw-calculator.events
  (:require
    [re-frame.core :as rf]
    [day8.re-frame.tracing :as tr]
    [nw-calculator.defaults :as df]
    [nw-calculator.fsm :as fsm]
    [nw-calculator.effects :as effects]
    [ajax.core :as ajax]
    [day8.re-frame.http-fx]
    [cljs.reader :as edn]
    [compound2.core :as c]))

(rf/reg-event-db
  ::initialize-db
  (tr/fn-traced [_ _]
    df/default-db))

(rf/reg-event-db
  ::set-state
  (tr/fn-traced [db [_ state]]
    (assoc db :state state)))

(rf/reg-event-db
  ::transition-state
  (tr/fn-traced
    [db [_ path fsm transition]]
    (fsm/next-state db path fsm transition)))

(rf/reg-event-db
  ::fetch-items-success
  (tr/fn-traced
    [db [_ items-edn]]
    (update
      db
      :items
      (fn [items]
        (c/add-items items (edn/read-string (str items-edn)))))))

(rf/reg-event-db
  ::fetch-items-failure
  (tr/fn-traced
    [db [_ _resp]]
    db))

(rf/reg-event-fx
  ::fetch-items
  (tr/fn-traced
    [_ _]
    {::effects/log-info ["⬇️Fetching item data!"]
     :http-xhrio        {:method          :get
                         :response-format (ajax/raw-response-format)
                         :uri             "/data/items.edn"
                         :on-success      [::fetch-items-success]
                         :on-failure      [::fetch-items-failure]}}))

