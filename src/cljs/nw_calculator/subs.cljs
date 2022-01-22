(ns nw-calculator.subs
  (:require
    [re-frame.core :as rf]
    [nw-calculator.calculations :as calc]))

(rf/reg-sub ::search-results
  (fn [{:keys [search-results]} [_ item-index]]
    (get search-results item-index)))

(rf/reg-sub ::selected-item-refs
  :selected-item-refs)

(rf/reg-sub ::num-selected-item-refs
  :<- [::selected-item-refs]
  (fn [selected-item-refs]
    (count selected-item-refs)))

(rf/reg-sub ::num-resolved-selected-items
  :<- [::selected-item-refs]
  (fn [selected-items]
    (count (filter :id selected-items))))

(rf/reg-sub ::items-by-id
  (fn [db]
    (-> db :items :by-id)))

(rf/reg-sub ::selected-option
  :<- [::selected-item-refs]
  (fn [selected-item-refs [_ [item-index :as option-path]]]
    (get-in selected-item-refs [item-index :selected-options option-path])))

(rf/reg-sub ::resolved-selected-item
  :<- [::selected-item-refs]
  :<- [::items-by-id]
  (fn [[selected-item-refs items-by-id] [_ item-index]]
    (let [{:keys            [quantity-multiplier selected-options]
           :or              {selected-options {}}
           selected-item-id :id} (get selected-item-refs item-index)
          {:keys [quantity xp] :as item} (get items-by-id selected-item-id)]
      (or (some-> item
                  not-empty
                  (calc/resolve-refs items-by-id [item-index] selected-options)
                  (calc/multiply-quantities items-by-id quantity-multiplier)
                  ;; This is to prevent erroneous calculation with items
                  ;; that output more than one quantity when crafted
                  (assoc :quantity quantity
                         :xp (* xp quantity-multiplier)))
          {:ingredients []}))))

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
  :<- [::selected-item-refs]
  (fn [selected-items [_ item-index]]
    (get-in selected-items [item-index :quantity-multiplier])))

(rf/reg-sub ::selected-items-summary
  :<- [::num-selected-item-refs]
  (fn [num-selected-items]
    (when (> num-selected-items 1)
      (let [resolved-items (into []
                                 (comp (map #(deref (rf/subscribe [::resolved-selected-item %])))
                                       (filter :name))
                                 (range num-selected-items))]
        (calc/merge-items resolved-items)))))