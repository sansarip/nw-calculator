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
    [compound2.core :as c]
    [nw-calculator.utilities :as util]))

(rf/reg-event-db
  ::initialize-db
  (tr/fn-traced [_ [_ default-overrides]]
    (merge df/default-db default-overrides)))

(rf/reg-event-db
  ::set-state
  (tr/fn-traced [db [_ state]]
    (assoc db :state state)))

(rf/reg-event-db
  ::fetch-items-success
  (tr/fn-traced
    [db [_ items-edn]]
    (-> db
        (update :items c/add-items items-edn)
        (handlers/next-state
          []
          fsm/app-fsm
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
                           :response-format (ajax/json-response-format {:keywords? true})
                           :uri             "/data/items.json"
                           :on-success      [::fetch-items-success]
                           :on-failure      [::fetch-items-failure]}}
      [:db]
      fsm/app-fsm
      :fetch-item-data)))

(rf/reg-event-db
  ::search-success
  (tr/fn-traced
    [db [_ item-index search-results]]
    (assoc-in db [:search-results item-index] search-results)))

(rf/reg-event-fx
  ::search
  (tr/fn-traced
    [{{{items-by-id :by-id} :items :as db} :db} [_ item-index query]]
    {:db              db
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
        (update-in [:selected-items item-index :quantity-multiplier] #(or % 1))
        (assoc-in [:search-results item-index] []))))

(rf/reg-event-db
  ::select-option
  (tr/fn-traced
    [{{items-by-id :by-id} :items :as db} [_ [item-index :as category-path] option-id]]
    (assoc-in db
              [:selected-items item-index :selected-options category-path]
              (get items-by-id option-id))))

(rf/reg-event-db
  ::set-quantity-multiplier
  (tr/fn-traced
    [db [_ item-index multiplier]]
    (assoc-in db
              [:selected-items item-index :quantity-multiplier]
              multiplier)))

(rf/reg-event-db
  ::add-empty-item
  (tr/fn-traced
    [db _]
    (-> db
        (update :selected-items conj df/empty-selected-item)
        (update :search-results conj []))))

(rf/reg-event-db
  ::remove-item
  (tr/fn-traced
    [db [_ item-index]]
    (-> db
        (update :selected-items util/vec-remove-nth item-index)
        (update :search-results util/vec-remove-nth item-index))))

(rf/reg-event-db
  ::remove-all-items
  (tr/fn-traced
    [db _]
    (assoc db
      :selected-items [df/empty-selected-item]
      :search-results [])))