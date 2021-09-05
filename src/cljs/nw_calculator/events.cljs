(ns nw-calculator.events
  (:require
    [re-frame.core :as rf]
    [day8.re-frame.tracing :as tr]
    [nw-calculator.defaults :as df]
    [nw-calculator.fsm :as fsm]
    [nw-calculator.effects :as effects]
    [nw-calculator.event-handlers :as handlers]
    [ajax.core :as ajax]
    [day8.re-frame.http-fx]
    [cljs.reader :as edn]
    [compound2.core :as c]
    [nw-calculator.utilities :as util]))

(rf/reg-event-db
  ::initialize-db
  (tr/fn-traced [_ _]
    df/default-db))

(rf/reg-event-db
  ::set-state
  (tr/fn-traced [db [_ state]]
    (assoc db :state state)))

(rf/reg-event-db
  ::fetch-items-success
  (tr/fn-traced
    [db [_ items-edn]]
    (-> db
        (update
          :items
          c/add-items
          (edn/read-string (str items-edn)))
        (handlers/next-state
          []
          fsm/fsm
          :success))))

(rf/reg-event-db
  ::fetch-items-failure
  (tr/fn-traced
    [db [_ _resp]]
    db))

(rf/reg-event-fx
  ::fetch-items
  (tr/fn-traced
    [{db :db} _]
    (handlers/next-state
      {:db                db
       ::effects/log-info ["⬇️ Fetching item data!"]
       :http-xhrio        {:method          :get
                           :response-format (ajax/raw-response-format)
                           :uri             "/data/items.edn"
                           :on-success      [::fetch-items-success]
                           :on-failure      [::fetch-items-failure]}}
      [:db]
      fsm/fsm
      :fetch-item-data)))

(rf/reg-event-db
  ::search-success
  (tr/fn-traced
    [db [_ item-index search-results]]
    (-> db
        (assoc-in [:search-results item-index] search-results)
        (handlers/next-state
          []
          fsm/fsm
          :success))))

(rf/reg-event-fx
  ::search
  (tr/fn-traced
    [{{{items-by-id :by-id} :items :as db} :db} [_ item-index query]]
    {:db              (handlers/next-state
                        db
                        []
                        fsm/fsm
                        :search)
     ::effects/search {:query       query
                       :items-by-id items-by-id
                       :on-success  [::search-success item-index]}}))

(rf/reg-event-db
  ::clear-search
  (tr/fn-traced
    [db [_ item-index]]
    (-> db
        (assoc-in [:selected-items item-index :item] {})
        (assoc-in [:search-results item-index] []))))

(rf/reg-event-db
  ::select-item
  (tr/fn-traced
    [db [_ item-index item]]
    (-> db
        (assoc-in [:selected-items item-index :item] item)
        (update-in [:selected-items item-index :amount-multiplier] #(or % 1))
        (assoc-in [:search-results item-index] []))))

(rf/reg-event-db
  ::set-amount-multiplier
  (tr/fn-traced
    [db [_ item-index multiplier]]
    (assoc-in db
              [:selected-items item-index :amount-multiplier]
              (if (or (js/isNaN multiplier) (<= multiplier 0))
                1
                multiplier))))

(rf/reg-event-db
  ::add-empty-item
  (tr/fn-traced
    [db _]
    (update db :selected-items conj df/empty-selected-item)))

(rf/reg-event-db
  ::delete-item
  (tr/fn-traced
    [db [_ item-index]]
    (update db :selected-items util/vec-remove-nth item-index)))