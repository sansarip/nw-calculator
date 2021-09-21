(ns nw-calculator.components.multiplication.component
  (:require
    [react]
    [reagent.core :as r]
    [nw-calculator.components.multiplication.styles :as styles]
    [nw-calculator.utilities :as util]))

(defn multiplication
  [{:keys                              [base container-props]
    {:keys [on-input] :as input-props} :input-props
    :or                                {on-input (util/no-op)}}]
  (let [[multiplier set-multiplier!] (react/useState 1)
        input-ref (react/useRef)]
    (r/with-let [on-input* (fn [event]
                             (-> (.. event -target -value)
                                 util/parse-pos
                                 set-multiplier!)
                             (on-input event))]
      (react/useEffect
        (fn []
          (when-let [input-ele (.-current input-ref)]
            (-> (.-defaultValue input-ele)
                util/parse-pos
                set-multiplier!))
          util/no-op)
        #js [input-ref])
      [:div.relative.w-16.flex.justify-end.items.center
       (r/merge-props
         {:class (styles/multiplication-class)}
         container-props)
       [:input.basic-input.multiplier
        (r/merge-props
          {:placeholder   "1"
           :ref           input-ref
           :type          :number
           :on-input      on-input*
           :default-value multiplier}
          (dissoc input-props :on-input :ref))]
       [:div.w-full.flex.flex-col.absolute
        {:class "-bottom-20 -left-6"}
        [:div.w-full.flex.justify-between.gap-2
         [:i.flex.flex-col.justify-center.text-xl.fal.fa-times]
         base]
        [:div.w-full.flex.justify-between.gap-2
         [:i.flex.flex-col.justify-center.text-xl.fal.fa-equals]
         (* multiplier base)]]])))

