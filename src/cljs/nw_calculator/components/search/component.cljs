(ns nw-calculator.components.search.component
  (:require
    [nw-calculator.utilities :as util]
    [reagent.core :as r]
    [nw-calculator.components.search.styles :as styles]
    [clojure.string :as string]
    [nw-calculator.components.icon-button.component :as icb]))

(defn search
  [{:keys [results on-search on-select on-clear make-result get-value input-props]
    :or   {on-search   util/no-op
           on-select   util/no-op
           on-clear    util/no-op
           get-value   (constantly "")
           make-result identity}}]
  (r/with-let [state (r/atom {:input-value ""})
               input-id (str "input_id_" (string/join (take 8 (str (random-uuid)))))
               get-input #(.getElementById js/document input-id)
               set-input-value! (fn [input-value]
                                  (swap! state assoc :input-value input-value)
                                  (set! (.-value (get-input)) input-value))
               on-search* (fn [event]
                            (let [input-value (.. event -target -value)]
                              (swap! state assoc :input-value input-value)
                              (on-search input-value)))
               on-select* (fn [result]
                            (set-input-value! (get-value result))
                            (on-select result))
               on-clear* (fn [& _]
                           (set-input-value! "")
                           (on-clear))]
    (let [input-value (:input-value @state)
          has-results? (not-empty results)]
      [:div.relative {:class (styles/search-class has-results?)}
       [:input
        (r/merge-props
          {:id          input-id
           :placeholder "Search for an item \uD83D\uDD0D"
           :on-input    on-search*}
          (dissoc input-props :id :on-input))]
       (when (not-empty input-value)
         [icb/icon-button
          {:on-click on-clear*
           :class    "absolute right-2 top-2 border-0"}
          [:i.fas.fa-times.text-base]])
       [:dl.border-t-0.border-opacity-30.border-purple.rounded-b-md
        {:class (when has-results? "border-2")}
        (into [:<>]
              (map (fn [result]
                     [:dt.transition-colors.bg-opacity-10.m-0.p-4.cursor-pointer.bg-hover
                      {:on-click (fn [& _] (on-select* result))}
                      [make-result result]]))
              results)]])))