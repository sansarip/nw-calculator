(ns nw-calculator.components.category.component)

(defn category
  "Dropdown for item categories"
  [{:keys [options] :as item}]
  [:select
   (into [:<>]
         (map (fn [option] [:option option]))
         options)])