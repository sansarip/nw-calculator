(ns nw-calculator.effects
  (:require
    [re-frame.core :as rf]
    [taoensso.timbre :as timbre]
    [nw-calculator.utilities :as util]))

(rf/reg-fx
  ::log-info
  (fn [msgs]
    (apply timbre/info msgs)))

(rf/reg-fx
  ::search
  (fn [{:keys [items-by-id
               query
               on-success]}]
    (let [search-results (->> items-by-id
                              vals
                              (filter
                                (comp
                                  first
                                  #(util/fuzzy-search [%] query)
                                  :name
                                  util/craftable-item))
                              (take 10)
                              vec)]
      (rf/dispatch (conj on-success search-results)))))

(rf/reg-fx
  ::set-local-storage
  (fn [[k v]]
    (util/set-local-storage! k v)))

