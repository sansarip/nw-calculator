(ns nw-calculator.utilities
  (:require [clojure.string :as string]
            [clojure.walk :as w])
  (:import [goog.async Debouncer]))

(defn localize-external-img [url]
  (some->> (string/split url #"/")
           last
           (str "/images/")))

(defn no-op [& _])

(defn debounce [f interval]
  (let [dbnc (Debouncer. f interval)]
    (fn [& args] (.apply (.-fire dbnc) dbnc (to-array args)))))

(defn fuzzy-search [s substr]
  (when (and (not-empty substr) (not-empty s))
    (string/includes?
      (string/lower-case s)
      (string/lower-case substr))))

(defn short-uuid-str []
  (string/join (take 8 (str (random-uuid)))))

(defn remove-self-from-ingredients [{:keys [id] :as item}]
  (update
    item
    :ingredients
    (fn [ingredients]
      (set (remove #(= (:id %) id) ingredients)))))

(def get-ingredients
  (memoize
    (fn [item items-by-id]
      (w/prewalk
        (fn [{:keys [amount id] :as node}]
          (let [ingredient? (and (map? node) amount)]
            (if ingredient?
              (->> id
                   (get items-by-id)
                   (merge node)
                   remove-self-from-ingredients)
              node)))
        (remove-self-from-ingredients item)))))

(def multiply-amounts
  (memoize
    (fn
      ([item] (multiply-amounts item 1))
      ([{:keys [amount ingredients] :or {amount 1} :as item} multiplier]
       (let [product (* multiplier amount)]
         (-> item
             (cond-> (not-empty ingredients) (assoc :ingredients
                                                    (into #{}
                                                          (map #(multiply-amounts % product))
                                                          ingredients)))
             (assoc :amount product)))))))

(defn craftable-item [{:keys [ingredients] :as item}]
  (when (not-empty ingredients)
    item))