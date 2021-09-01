(ns nw-calculator.subs
  (:require
    [re-frame.core :as rf]
    [nw-calculator.utilities :as util]))

(rf/reg-sub ::search-results
  :search-results)

(rf/reg-sub ::selected-item
  (fn [{:keys                [amount-multiplier]
        {items-by-id :by-id} :items
        {selected-item-id :id} :selected-item}]
    (or (some-> (get items-by-id selected-item-id)
                not-empty
                (util/get-ingredients items-by-id)
                (util/multiply-amounts amount-multiplier))
        {:ingredients []})))

(rf/reg-sub ::app-loading?
  (fn [{:keys [state]}]
    (= state :loading)))

(rf/reg-sub ::searching?
  (fn [{:keys [state]}]
    (= state :searching)))

(rf/reg-sub ::amount-multiplier
  :amount-multiplier)