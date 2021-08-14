(ns nw-calculator.views
  (:require
    [re-frame.core :as rf]
    [nw-calculator.subs :as subs]))

(defn main-panel []
  (let [items-by-id @(rf/subscribe [::subs/items-by-id])]
    [:div "Items:"
     [:ol
      (for [[id item] items-by-id]
        ^{:key id}
        [:li (str item)])]]))
