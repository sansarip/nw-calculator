(ns nw-calculator.components.multiplication.component
  (:require
    [react]
    [reagent.core :as r]
    [nw-calculator.components.multiplication.styles :as styles]
    [nw-calculator.utilities :as util]))

(defn multiplication
  "Box method representation"
  [{:keys                              [base container-props]
    {:keys [on-input] :as input-props} :input-props
    :or                                {on-input (util/no-op)}}]
  (let [[multiplier set-multiplier!] (react/useState 1)]
    (r/with-let [on-input* (fn [event]
                             (-> (.. event -target -value)
                                 util/parse-pos
                                 set-multiplier!)
                             (on-input event))]
      [:div.relative.w-16.flex.justify-end.items.center
       (r/merge-props
         {:class (styles/multiplication-class)}
         container-props)
       [:div.absolute.w-full.flex.justify-between.bottom-10
        [:i.flex.flex-col.justify-center.text-xl.fal.fa-times]
        base]
       [:input.absolute.basic-input.text-right.multiplier
        (r/merge-props
          {:placeholder   "1"
           :type          :number
           :on-input      on-input*
           :default-value multiplier}
          (dissoc input-props :on-input))]
       [:input.basic-input.text-right.product.pt-4
        {:read-only true
         :value     (* multiplier base)}]])))

