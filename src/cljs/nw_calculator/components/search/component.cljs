(ns nw-calculator.components.search.component
  (:require
    [nw-calculator.utilities :as util]
    [reagent.core :as r]
    [nw-calculator.components.search.styles :as styles]
    [nw-calculator.components.circular-button.component :as cb]
    [nw-calculator.components.loader.component :as lc]
    [nw-calculator.components.dropdown.component :as dd]
    [react]
    [nw-calculator.hooks :as hooks]))

(defn search
  [{:keys [results
           on-search
           on-select
           on-clear
           props
           make-result
           get-value
           input-props
           loading?]
    :or   {on-search   util/no-op
           on-select   util/no-op
           on-clear    util/no-op
           get-value   (constantly "")
           make-result identity}}]
  (let [[input-value set-input-value!] (react/useState "")
        input-ref (react/useRef)
        escape-key-pressed? (hooks/use-key-press "Escape")]
    (r/with-let [input-focused? (r/atom false)
                 set-input-value*! (fn [input-value]
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
                 focus! (fn []
                          (.. input-ref -current focus)
                          (reset! input-focused? true))
                 blur! (fn []
                         (.. input-ref -current blur)
                         (js/setTimeout #(reset! input-focused? false) 200))]
      (react/useEffect
        (fn []
          (set-input-value! (.. input-ref -current -value))
          util/no-op)
        #js [input-ref])
      (react/useEffect
        (fn []
          (blur!)
          util/no-op)
        #js [escape-key-pressed?])
      [:div.bg-inherit.relative.w-full (r/merge-props {:class (styles/search-class)} props)
       [:input.basic-input.search.w-full.flex-grow.md:pr-12-imp
        (r/merge-props
          {:spell-check false
           :ref         input-ref
           :placeholder "Search something \uD83D\uDD0D"
           :on-focus    focus!
           :on-blur     blur!
           :on-input    search!}
          (dissoc input-props :ref :on-input :on-focus-out :on-focus))]
       (when (and (not-empty input-value) (not loading?))
         [cb/circular-button
          {:on-click clear-input-value!
           :class    "absolute pb-3 -right-2 md:right-0 top-2 border-0 flex-none"}
          [:i.fas.fa-times.text-sm.md:text-base]])
       (when loading?
         [lc/loader
          {:class "absolute text-lg md:text-2xl right-2 md:right-3 top-3 md:top-2 flex-none"}])
       (when (and @input-focused? (not-empty results))
         [:f> dd/options
          {:on-select   select-result!
           :options     results
           :make-option make-result}])])))

