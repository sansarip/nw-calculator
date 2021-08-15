(ns nw-calculator.views
  (:require
    [re-frame.core :as rf]
    [nw-calculator.subs :as subs]
    [clojure.walk :as w]
    [cljs.pprint :as pprint]))

(def get-ingredients
  (memoize
    (fn [items-by-id item]
      (w/prewalk
        (fn [node]
            (if ingredient?
              (merge node (get items-by-id (:id node)))
              node)))
        item))))

(defn main-panel []
  (let [items-by-id @(rf/subscribe [::subs/items-by-id])]
    [:div "Items:"
     [:ol
      (for [[id item] items-by-id]
        ^{:key id}
        [:li (str item)])]]))
