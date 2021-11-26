(ns nw-calculator.scraper.crawler.item-data
  (:require [taoensso.timbre :as timbre]
            [clojure.pprint :refer [pprint]]
            [slingshot.slingshot :refer [try+ throw+]]
            [nw-calculator.scraper.utilities :as util]
            [nw-calculator.scraper.http :as http]
            [nw-calculator.scraper.crawler.core :as crawl]
            [cheshire.core :as json]
            [clojure.string :as string]))

(def unknown-item-lookup
  {"azoth_currency" (let [name* "Azoth"]
                      {:name    name*
                       :id      (util/uppercase-hash name*)
                       :png-url "images/icons/currency_azoth.png"})
   "repair_t1"      (let [name* "Repair Parts"]
                      {:name    name*
                       :id      (util/uppercase-hash name*)
                       :png-url "images/icons/currency_repairpartst1.png"})})

(defn write-items-json! [extracted-item-data]
  (let [output-file-path (util/prepend-data-path "items.raw.json")]
    (timbre/info "✍️ Writing item data to" output-file-path)
    (spit output-file-path (json/generate-string extracted-item-data {:pretty true})))
  extracted-item-data)

(declare crawl-ingredients)

(def get-recipe
  (memoize
    (fn [recipe-id]
      (-> (util/prepend-origin "/db/recipe/" recipe-id ".json")
          http/throttled-http-get
          :data))))

(defn default-quantity [quantity]
  (or quantity 1))

(def extract-recipe
  "Extracts recipe relevant information if available"
  (memoize
    (fn [recipe-id]
      (if-let [{:keys                                    [ingredients itemType icon]
                {:keys [quantity]}                       :output
                {progress :CategoricalProgressionReward} :event} (get-recipe recipe-id)]
        (let [craftable? (not-empty ingredients)
              has-xp? (and progress craftable?)
              has-png? (and itemType icon)]
          (cond-> {:external-url (util/prepend-origin "db/recipe/" recipe-id)
                   :quantity     (default-quantity quantity)}
                  has-png? (assoc :png-url (string/lower-case
                                             (str "images/icons/items/" itemType "/" icon ".png")))
                  has-xp? (assoc :xp (->> (map (comp default-quantity :quantity) ingredients)
                                          (reduce +)
                                          (* progress)))
                  craftable? (assoc :ingredients ingredients)))))))

(def get-item
  (memoize
    (fn [item-id]
      (-> (util/prepend-origin "/db/item/" item-id ".json")
          http/throttled-http-get
          :data))))

(def extract-item
  "Extracts relevant item data, including recipe information if available"
  (memoize
    (fn [item-id]
      (if-let [{[{recipe-id :id}] :craftingRecipesOutput
                :keys             [tier itemType icon rarity]
                name*             :name} (get-item item-id)]
        (merge
          {:id           (util/uppercase-hash name*)
           :name         name*
           :tier         tier
           :rarity       rarity
           :png-url      (string/lower-case
                           (str "images/icons/items/" itemType "/" icon ".png"))
           :external-url (util/prepend-origin "db/item/" item-id)}
          (extract-recipe recipe-id))
        (get unknown-item-lookup item-id)))))

(defn make-item-ref [{name* :name :keys [quantity]}]
  {:id       (util/uppercase-hash name*)
   :name     name*
   :quantity (or quantity 1)})

(defn make-item-refs [items]
  (into #{} (map make-item-ref) items))

(defn transform-ingredient
  "Transforms an ingredient into a root level item"
  [{item-type :type
    item-id   :id
    :keys     [subIngredients icon]
    :as       ingredient}]
  (if (#{"category"} item-type)
    (assoc (make-item-ref ingredient)
      :type item-type
      :quantity 1
      :png-url (string/lower-case (str "images/" icon ".png"))
      :options (map #(assoc % :quantity 1) (:ingredient-refs (crawl-ingredients subIngredients))))
    (let [{:keys [ingredients] :as extracted-item} (extract-item item-id)]
      (cond-> extracted-item
              ingredients (update :ingredients make-item-refs)))))

(defn crawl-ingredients [ingredients]
  (loop [result {:ingredient-refs         #{}
                 :transformed-ingredients #{}}
         [{:keys [quantity] :as ingredient} & ingredients] ingredients]
    (let [transformed-ingredient (transform-ingredient ingredient)
          ingredient-ref (make-item-ref                     ; This assoc accounts for unknown entities like Azoth
                           (assoc transformed-ingredient
                             :quantity quantity))]
      (if ingredient
        (recur
          (-> result
              (update :ingredient-refs conj ingredient-ref)
              (update :transformed-ingredients conj transformed-ingredient))
          ingredients)
        result))))

(def get-items-on-page
  (memoize
    (fn [page-id]
      (-> (util/prepend-origin "/db/items/page/" page-id ".json?source=crafting")
          http/throttled-http-get
          :data))))

(defn crawl-item [item-id]
  (let [{:keys [ingredients] :as extracted-item} (extract-item item-id)
        {:keys [ingredient-refs transformed-ingredients]} (crawl-ingredients ingredients)]
    (into
      [(cond-> extracted-item
               (not-empty ingredient-refs) (assoc :ingredients ingredient-refs))]
      transformed-ingredients)))

(defn page->items [page-number]
  (let [items (get-items-on-page page-number)]
    (into #{} (mapcat (comp crawl-item :id)) items)))

(defn download-item-data!
  "Crawls all crafting (paginated) pages, and then writes the data to disk as a single JSON document."
  []
  (timbre/info "\uD83D\uDD77️ Crawling item data...")
  (write-items-json! (crawl/crawl-pages 1 page->items))
  (timbre/info "✨ Done!"))
