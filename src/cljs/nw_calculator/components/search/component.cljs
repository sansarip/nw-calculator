(ns nw-calculator.components.search.component
  (:require
    [nw-calculator.utilities :as util]
    [reagent.core :as r]
    [nw-calculator.components.search.styles :as styles]
    [nw-calculator.components.circular-button.component :as cb]
    [react]
    [cljstache.core :as fmt]
    [nw-calculator.hooks :as hooks]))

(defn result-list-item
  [{:keys [on-select on-hover result-index result]} & _]
  (letfn [(select-result [& _] (on-select result))
          (hover-result [& _] (on-hover result-index))]
    (fn [{:keys [result-index]} & children]
      [:dt.transition-colors.bg-opacity-10.m-0.p-4.cursor-pointer
       {:data-result-index result-index
        :on-mouse-over     hover-result
        :on-click          select-result}
       (into [:<>] children)])))

(defn search
  [{:keys [results
           on-search
           on-select
           on-clear
           props
           make-result
           get-value
           input-props]
    :or   {on-search   util/no-op
           on-select   util/no-op
           on-clear    util/no-op
           get-value   (constantly "")
           make-result identity}}]
  (let [[input-value set-input-value!] (react/useState "")
        [active-result-index set-active-result-index!] (react/useState -1)
        input-ref (react/useRef)
        num-results (count results)
        down-key-pressed? (hooks/use-key-press "ArrowDown")
        up-key-pressed? (hooks/use-key-press "ArrowUp")
        enter-key-pressed? (hooks/use-key-press "Enter")]
    (r/with-let [set-input-value*! (fn [input-value]
                                     (set-input-value! input-value)
                                     (set! (.. input-ref -current -value) input-value))
                 search! (fn [event]
                           (let [input-value (.. event -target -value)]
                             (set-input-value! input-value)
                             ((if (empty? input-value)
                                on-clear
                                on-search)
                              input-value)))
                 select-result! (fn [result]
                                  (on-select result)
                                  (set-input-value*! (get-value result))
                                  (.. input-ref -current focus))
                 clear-input-value! (fn [& _]
                                      (on-clear)
                                      (set-input-value*! "")
                                      (.. input-ref -current focus))
                 input-focused? #(= js/document.activeElement (.-current input-ref))
                 get-result-ele (fn [result-index]
                                  (.querySelector
                                    js/document
                                    (fmt/render
                                      "dt[data-result-index=\"{{ri}}\"]"
                                      {:ri result-index})))
                 highlight-result! (fn [target-result-index num-results]
                                     (doseq [result-index (range num-results)]
                                       (let [result-ele (get-result-ele result-index)]
                                         (if (= result-index target-result-index)
                                           (.. result-ele -classList (add "bg-purple"))
                                           (.. result-ele -classList (remove "bg-purple"))))))]
      (react/useEffect
        (fn []
          (set-input-value! (.. input-ref -current -value))
          util/no-op)
        #js [input-ref])
      (react/useEffect
        (fn []
          (set-active-result-index! -1)
          util/no-op)
        #js [results])
      (react/useEffect
        (fn []
          (let [next-result-index (inc active-result-index)]
            (when (and (input-focused?) down-key-pressed? (< next-result-index num-results))
              (set-active-result-index! next-result-index)))
          util/no-op)
        #js [down-key-pressed?])
      (react/useEffect
        (fn []
          (let [prev-result-index (dec active-result-index)]
            (when (and (input-focused?) up-key-pressed? (> prev-result-index -1))
              (set-active-result-index! prev-result-index)))
          util/no-op)
        #js [up-key-pressed?])
      (react/useEffect
        (fn []
          (if-let [active-result (get results active-result-index)]
            (select-result! active-result)))
        #js [enter-key-pressed?])
      (react/useEffect
        (fn []
          (highlight-result! active-result-index num-results))
        #js [active-result-index])
      [:div.relative.min-w-96.w-full (r/merge-props {:class (styles/search-class)} props)
       [:input.basic-input.search
        (r/merge-props
          {:spell-check false
           :ref         input-ref
           :placeholder "Search something \uD83D\uDD0D"
           :on-input    search!}
          (dissoc input-props :id :on-input))]
       (when (not-empty input-value)
         [cb/circular-button
          {:on-click clear-input-value!
           :class    "absolute pb-3 right-2 top-2 border-0"}
          [:i.fas.fa-times.text-base]])
       (when (> num-results 0)
         [:dl.absolute.m-0.z-50.bg-white.border-2.border-t-0.border-opacity-30.border-purple.rounded-b-md.rounded-t-none
          {:multiple true
           :size     (count results)}
          (into [:<>]
                (map-indexed
                  (fn [result-index result]
                    [result-list-item
                     {:on-select    select-result!
                      :on-hover     set-active-result-index!
                      :result-index result-index
                      :result       result}
                     [make-result result]]))
                results)])])))
