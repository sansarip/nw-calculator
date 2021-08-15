(ns nw-calculator.components.item.component
  (:require [nw-calculator.utilities :as util]))

(defn item [{:keys [amount external-url png-url name]}]
  [:div.flex.items-center.mx-3.gap-2
   [:img.rounded-full.border-purple.border-opacity-30.border-2.w-12.h-12.object-cover
    {:src (util/localize-external-img png-url)}]
   [:span
    amount
    " "
    [:a {:href external-url :target "_blank"} name]]])