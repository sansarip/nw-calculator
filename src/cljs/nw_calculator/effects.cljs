(ns nw-calculator.effects
  (:require
    [re-frame.core :as rf]
    [taoensso.timbre :as timbre]
    [nw-calculator.web-workers :as ww]
    [nw-calculator.utilities :as util]))

(rf/reg-fx
  ::log-info
  (fn [msgs]
    (apply timbre/info msgs)))

(rf/reg-fx
  ::read-string
  (fn [[edn-str on-success]]
    (set! (.-onmessage ww/worker)
          (fn [msg]
            (-> (.-data msg)
                (js->clj :keywordize-keys true)
                (->> (conj on-success))
                rf/dispatch)))
    (.postMessage ww/worker edn-str)))

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

