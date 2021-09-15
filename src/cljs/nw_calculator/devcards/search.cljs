(ns nw-calculator.devcards.search
  (:require
    [devcards.core :as dc]
    [nw-calculator.components :as nwc]
    [reagent.core :as r]
    [clojure.string :as string]
    [nw-calculator.utilities :as util]
    [nw-calculator.devcards.sample-data :as sd]))

(dc/defcard-rg
  search
  (fn [state]
    (r/with-let [set-loading! #(swap! state assoc :loading? %)
                 on-search (util/debounce
                             (fn [search-term]
                               (set-loading! true)
                               (js/setTimeout
                                 (fn [& _]
                                   (swap!
                                     state
                                     assoc
                                     :results
                                     (->> sd/items
                                          (filter
                                            (comp #(util/fuzzy-search % search-term) vector :name))
                                          (take 10)
                                          vec))
                                   (set-loading! false))
                                 100))
                             100)
                 clear-results #(swap! state assoc :results [])
                 on-clear clear-results
                 on-select (fn [_item] (clear-results))
                 make-result (fn [item-map] [nwc/item-component
                                             {:container-props {:class "bg-white"}
                                              :item-map        item-map}])]
      [:f> nwc/search-component
       {:make-result make-result
        :input-props {:placeholder "Search for an item \uD83D\uDD0D"}
        :loading?    (:loading? @state)
        :on-search   on-search
        :on-select   on-select
        :on-clear    on-clear
        :get-value   :name
        :results     (:results @state)}]))
  (r/atom {:results []}))