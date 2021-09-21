(ns nw-calculator.subs
  (:require
    [re-frame.core :as rf]
    [nw-calculator.business-logic :as bsns]))

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

(rf/reg-sub ::selected-option
  :<- [::selected-items]
  (fn [selected-items [_ [item-index :as option-path]]]
    (get-in selected-items [item-index :selected-options option-path])))

(rf/reg-sub ::resolved-selected-item
  :<- [::selected-items]
  :<- [::items-by-id]
  (fn [[selected-items items-by-id] [_ item-index]]
    (let [{:keys                  [quantity-multiplier selected-options]
           :or                    {selected-options {}}
           {selected-item-id :id} :item} (get selected-items item-index)
          {:keys [quantity xp] :as item} (get items-by-id selected-item-id)]
      (or (some-> item
                  not-empty
                  (bsns/resolve-refs items-by-id [item-index] selected-options)
                  (bsns/multiply-quantities items-by-id quantity-multiplier)
                  ;; This is to prevent erroneous calculation with items
                  ;; that output more than one quantity when crafted
                  (assoc :quantity quantity
                         :xp (* xp quantity-multiplier)))
          {:ingredients []}))))

(rf/reg-sub ::item-in-resolved-selected-item
  (fn [_db [_ [item-index :as item-path]]]
    (->> @(rf/subscribe [::resolved-selected-item item-index])
         (tree-seq bsns/options-or-ingredients bsns/options-or-ingredients)
         (some #(when (#{item-path} (:path %)) %)))))

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