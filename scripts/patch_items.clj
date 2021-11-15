#!/usr/bin/env bb

(require '[clojure.set :as cljset])
(require '[cheshire.core :as json])

(def items-raw (json/parse-stream (clojure.java.io/reader "resources/data/items.raw.json") true))

(def items-patch
  (->> (clojure.java.io/file "resources/data")
       file-seq
       (filter #(re-matches #"^.*patch\.json$" (str %)))
       (keep #(json/parse-stream (clojure.java.io/reader %) true))
       (apply merge-with into)))

(def stats (atom {:deletions 0
                  :updates   0
                  :creations 0}))

(defn subcoll? [c1 c2]
  (and (coll? c1)
       (coll? c2)
       (cljset/subset? (set c1) (set c2))))

(defn delete-items!
  ([items deletions]
   (delete-items! items deletions :match))
  ([items deletions match-key]
   (let [keep-item? (complement (fn [item]
                                  (some #(when (subcoll? (get % match-key) item)
                                           (swap! stats update :deletions inc))
                                        deletions)))]
     (filter (fn [{:keys [ingredients] :as item}]
               (when (keep-item? item)
                 (cond-> item
                         (not-empty ingredients) (update :ingredients #(delete-items! % deletions :match-ingredients)))))
             items))))

(defn update-items!
  ([items updates]
   (update-items! items updates :match))
  ([items updates match-key]
   (let [changeset (fn [item]
                     (some #(when (subcoll? (get % match-key) item)
                              (swap! stats update :updates inc)
                              (:changeset %))
                           updates))]
     (map (fn [{:keys [ingredients] :as item}]
            (cond-> (merge item (changeset item))
                    (not-empty ingredients) (update :ingredients #(update-items! % updates :match-ingredients))))
          items))))

(defn create-items! [items creations]
  (let [[item-creations ingredient-creations] (partition-by #(contains? % :item) creations)
        ingredients-for-item (fn [item]
                               (some (fn [{:keys [ingredients match]}]
                                       (when (subcoll? match item)
                                         (swap! stats update :creations + (count ingredients))
                                         ingredients))
                                     ingredient-creations))]
    (swap! stats update :creations + (count item-creations))
    (into (map (fn [item]
                 (if-let [ingredients-for-item* (ingredients-for-item item)]
                   (update item :ingredients into ingredients-for-item*)
                   item))
               items)
          (map :item)
          item-creations)))

(defn write-items! [items]
  (spit "resources/public/data/items.json" (json/generate-string items {:pretty true}))

  ;; Will not report accurately when duplicate items are present i.e. deleting and creating the same item
  (let [{:keys [deletions updates creations]} @stats]
    (println "Patch results \uD83D\uDC47")
    (println (str deletions " item(s) deleted"))
    (println (str updates " item(s) updated"))
    (println (str creations " item(s) created"))))

(-> items-raw
    (delete-items! (:delete items-patch))
    (update-items! (:update items-patch))
    (create-items! (:create items-patch))
    (write-items!))