(ns nw-calculator.subs
  (:require
    [re-frame.core :as rf]
    [nw-calculator.utilities :as util]))

(rf/reg-sub ::dark-theme?
  :dark-theme?)

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
    (let [{:keys [quantity-multiplier]
           {selected-item-id :id} :item} (get selected-items item-index)]
      (let [{:keys [quantity] :as item} (get items-by-id selected-item-id)]
        (or (some-> item
                    not-empty
                    (util/resolve-refs items-by-id)
                    ;; This is to prevent erroneous calculation with items
                    ;; that output more than one quantity when crafted
                    (assoc :quantity 1)
                    (util/multiply-quantities quantity-multiplier)
                    (assoc :quantity (* quantity quantity-multiplier)))
            {:ingredients []})))))

(rf/reg-sub ::loading?
  (fn [{:keys [state]}]
    (= state :loading)))

(rf/reg-sub ::ready?
  (fn [{:keys [state]}]
    (= state :start)))

(rf/reg-sub ::searching?
  (fn [{:keys [state]}]
    (= state :searching)))

(rf/reg-sub ::quantity-multiplier
  :<- [::selected-items]
  (fn [selected-items [_ item-index]]
    (get-in selected-items [item-index :quantity-multiplier])))