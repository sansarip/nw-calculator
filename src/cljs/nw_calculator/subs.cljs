(ns nw-calculator.subs
  (:require
    [re-frame.core :as rf]
    [nw-calculator.utilities :as util]))

(rf/reg-sub ::search-results
  (fn [{:keys [search-results]} [_ item-index]]
    (get search-results item-index)))

(rf/reg-sub ::selected-items
  :selected-items)

(rf/reg-sub ::num-selected-items
  :<- [::selected-items]
  (fn [selected-items]
    (count selected-items)))

(rf/reg-sub ::items-by-id
  (fn [db]
    (-> db :items :by-id)))

(rf/reg-sub ::selected-item
  :<- [::selected-items]
  :<- [::items-by-id]
  (fn [[selected-items items-by-id]
       [_ item-index]]
    (let [{:keys [amount-multiplier]
           {selected-item-id :id} :item} (get selected-items item-index)]
      (or (some-> (get items-by-id selected-item-id)
                  not-empty
                  (util/get-ingredients items-by-id)
                  (util/multiply-amounts amount-multiplier))
          {:ingredients []}))))

(rf/reg-sub ::loading?
  (fn [{:keys [state]}]
    (= state :loading)))

(rf/reg-sub ::searching?
  (fn [{:keys [state]}]
    (= state :searching)))

(rf/reg-sub ::amount-multiplier
  :<- [::selected-items]
  (fn [selected-items [_ item-index]]
    (get-in selected-items [item-index :amount-multiplier])))