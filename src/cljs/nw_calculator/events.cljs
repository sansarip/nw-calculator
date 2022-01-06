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
    [reitit.frontend.controllers :as rfc]
    [nw-calculator.utilities :as util]))

(rf/reg-event-db
  ::initialize-db
  (tr/fn-traced [_ [_ default-db]]
    default-db))

(rf/reg-event-fx
  ::navigate
  (fn [_ [_ & route]]
    {::effects/navigate! route}))

(rf/reg-event-db
  ::navigated
  (fn [{{:keys [controllers]} :current-route :as db} [_ new-match]]
    (let [new-route (assoc new-match
                      :controllers (rfc/apply-controllers controllers new-match))]
      (assoc db :current-route new-route))))

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
          [:state]
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
      [:db :state]
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
    {:db               db
     ::effects/search! {:query      query
                        :items      (vals items-by-id)
                        :on-success [::search-success item-index]}}))

(rf/reg-event-fx
  ::clear-search
  (tr/fn-traced
    [{{:keys [selected-item-refs] :as db} :db} [_ item-index]]
    (handlers/navigate-with-selected-item-refs
      {:db (handlers/clear-search db item-index)}
      (update selected-item-refs item-index dissoc :id))))

(rf/reg-event-fx
  ::select-item
  (tr/fn-traced
    [{{:keys [selected-item-refs] :as db} :db} [_ item-index item-id]]
    (handlers/navigate-with-selected-item-refs
      {:db (handlers/clear-search db item-index)}
      (assoc-in selected-item-refs [item-index :id] item-id))))

(rf/reg-event-db
  ::set-selected-item-refs
  (tr/fn-traced
    [db [_ selected-items]]
    (handlers/set-selected-item-refs db selected-items)))

(rf/reg-event-fx
  ::select-option
  (tr/fn-traced
    [{{:keys [selected-item-refs]} :db} [_ [item-index :as category-path] option-id]]
    (handlers/navigate-with-selected-item-refs
      {}
      (assoc-in selected-item-refs
                [item-index :selected-options category-path :id]
                option-id))))

(rf/reg-event-fx
  ::set-quantity-multiplier
  (tr/fn-traced
    [{{:keys [selected-item-refs]} :db} [_ item-index multiplier]]
    (handlers/navigate-with-selected-item-refs
      {}
      (assoc-in selected-item-refs [item-index :quantity-multiplier] multiplier))))

(rf/reg-event-fx
  ::add-empty-item
  (tr/fn-traced
    [{{:keys [selected-item-refs] :as db} :db} _]
    (handlers/navigate-with-selected-item-refs
      {:db (update db :search-results conj [])}
      (conj selected-item-refs df/empty-selected-item-ref))))

(rf/reg-event-fx
  ::remove-item
  (tr/fn-traced
    [{{:keys [selected-item-refs] :as db} :db} [_ item-index]]
    (handlers/navigate-with-selected-item-refs
      {:db (update db :search-results util/vec-remove-nth item-index)}
      (util/vec-remove-nth selected-item-refs item-index))))

(rf/reg-event-fx
  ::remove-all-items
  (tr/fn-traced
    [{db :db} _]
    (handlers/navigate-with-selected-item-refs
      {:db (handlers/clear-search db)}
      [df/empty-selected-item-ref])))