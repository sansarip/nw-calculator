(ns nw-calculator.components.dropdown.component
  (:require
    [cljstache.core :as fmt]
    [nw-calculator.hooks :as hooks]
    [react]
    [reagent.core :as r]
    [nw-calculator.utilities :as util]
    [nw-calculator.components.dropdown.styles :as styles]))

(defn option
  [{:keys [on-select on-hover option-index option]} & children]
  (r/with-let [select-option (fn [event] (.stopPropagation event) (on-select option))
               hover-option (fn [& _] (on-hover option-index))]
    [:dt.bg-inherit.transition-colors.bg-opacity-20.m-0.p-4.cursor-pointer
     {:data-option-index option-index
      :on-mouse-over     hover-option
      :on-click          select-option}
     (into [:<>] children)]))

(defn options
  "Returns a list of dropdown options, navigated by keyboard and mouse.

  `on-select` is a fn that is given an option when one is selected.
  `make-option` is a fn that, given an option, returns a hiccup representation of that option.
  `options` is a coll of the options to be displayed"
  [{:keys [on-select make-option options]
    :or   {on-select (util/no-op)}}]
  (let [[active-option-index set-active-option-index!] (react/useState -1)
        down-key-pressed? (hooks/use-key-press "ArrowDown")
        up-key-pressed? (hooks/use-key-press "ArrowUp")
        enter-key-pressed? (hooks/use-key-press "Enter")
        num-options (count options)]
    (r/with-let [get-option-ele (fn [option-index]
                                  (.querySelector
                                    js/document
                                    (fmt/render
                                      "dt[data-option-index=\"{{oi}}\"]"
                                      {:oi option-index})))
                 highlight-option! (fn [target-option-index num-options]
                                     (doseq [option-index (range num-options)]
                                       (let [option-ele (get-option-ele option-index)]
                                         (if (= option-index target-option-index)
                                           (.. option-ele -classList (add "bg-purple"))
                                           (.. option-ele -classList (remove "bg-purple"))))))]
      (react/useEffect
        (fn []
          (if-let [active-option (get options active-option-index)]
            (on-select active-option))
          util/no-op)
        #js [enter-key-pressed?])
      (react/useEffect
        (fn []
          (set-active-option-index! -1)
          util/no-op)
        #js [options])
      (react/useEffect
        (fn []
          (let [next-option-index (inc active-option-index)]
            (when (and down-key-pressed? (< next-option-index num-options))
              (set-active-option-index! next-option-index)))
          util/no-op)
        #js [down-key-pressed?])
      (react/useEffect
        (fn []
          (let [prev-option-index (dec active-option-index)]
            (when (and up-key-pressed? (> prev-option-index -1))
              (set-active-option-index! prev-option-index)))
          util/no-op)
        #js [up-key-pressed?])
      (react/useEffect
        (fn []
          (highlight-option! active-option-index num-options))
        #js [active-option-index])
      [:dl.bg-inherit.w-full.max-w-full.absolute.m-0.z-50.bg-inherit.border-2.border-t-0.border-opacity-30.border-purple.rounded-b-md.rounded-t-none
       (map-indexed
         (fn [option-index {:keys [id] :as option*}]
           ^{:key (str "option_" option-index "_" id)}
           [option
            {:on-select    on-select
             :on-hover     set-active-option-index!
             :option-index option-index
             :option       option*}
            [:f> make-option option*]])
         options)])))

(defn dropdown [{:keys    [input-props
                           container-props
                           make-option
                           on-select
                           get-value]
                 :or      {on-select util/no-op
                           get-value (constantly "")}
                 options* :options}]
  (let [input-ref (react/useRef)
        escape-key-pressed? (hooks/use-key-press "Escape")]
    (r/with-let
      [dropdown-focused? (r/atom false)
       focus! (fn []
                (.. input-ref -current focus)
                (reset! dropdown-focused? true))
       blur! (fn []
               (.. input-ref -current blur)
               (js/setTimeout #(reset! dropdown-focused? false) 200))
       set-input-value! (fn [input-value]
                          (set! (.. input-ref -current -value) input-value))
       select-result! (fn [result]
                        (on-select result)
                        (set-input-value! (get-value result))
                        (blur!))
       toggle-dropdown! #(if @dropdown-focused? (blur!) (focus!))
       prevent-key-scrolling (fn [event]
                               (when (#{"ArrowUp" "ArrowDown"} (.-key event))
                                 (.. event -view -event preventDefault)))]
      (react/useEffect
        (fn []
          (blur!)
          util/no-op)
        #js [escape-key-pressed?])
      [:div.flex-grow.relative.cursor-pointer
       (r/merge-props
         {:class    (styles/dropdown-class)
          :on-click toggle-dropdown!}
         container-props)
       [:input.dropdown.basic-input.cursor-pointer
        (r/merge-props {:read-only   true
                        :on-key-down prevent-key-scrolling
                        :spell-check false
                        :on-blur     blur!
                        :ref         input-ref}
                       (dissoc input-props :ref))]
       [:i.fas.fa-caret-down.text-base.md:text-lg.absolute.bottom-2.right-1.transition-transform.pointer-events-none
        {:class (when @dropdown-focused? "text-purple text-opacity-100 flip-y")}]
       (when (and @dropdown-focused? (not-empty options*))
         [:f> options
          {:options     options*
           :make-option make-option
           :on-select   select-result!}])])))

