(ns nw-calculator.devcards.search
  (:require
    [devcards.core :as dc]
    [nw-calculator.components :as nwc]
    [reagent.core :as r]
    [clojure.string :as string]
    [nw-calculator.utilities :as util]))

(dc/defcard-rg
  search
  (fn [state]
    (r/with-let [items [{:external-url
                                      "https://newworldfans.com/crafting/Jewelcrafting/3284-brilliant-jasper-earring",
                         :png-url
                                      "https://cdn.newworldfans.com/db_images/db/items_hires/earringjaspert2.png",
                         :name        "Brilliant Jasper Earring",
                         :tier        2,
                         :skill-level 100,
                         :xp          1200,
                         :ingredients
                                      #{{:name "Orichalcum Ingot", :id "-767890146", :amount 1}
                                        {:name "Silver Setting", :id "1191331146", :amount 1}
                                        {:name "Cut Brilliant Jasper", :id "914335640", :amount 1}
                                        {:name "Silver Hook", :id "-233431904", :amount 1}},
                         :id          "-1601650409"}
                        {:external-url
                                      "https://newworldfans.com/crafting/Armoring/4599-marauder-legatus-cuisses",
                         :png-url
                                      "https://cdn.newworldfans.com/db_images/db/items_hires/legs_soldiert5.png",
                         :name        "Marauder Legatus Cuisses",
                         :tier        5,
                         :skill-level 0,
                         :xp          24,
                         :ingredients
                                      #{{:name   "Reinforced Marauder Legatus Cuisses of the Knight",
                                         :id     "1570912474",
                                         :amount 1}
                                        {:name "Marauder Cleric Seal", :id "1027278002", :amount 1}},
                         :id          "936206500"}
                        {:external-url "https://newworldfans.com/db/item/amethyst-a36c45",
                         :png-url
                                       "https://cdn.newworldfans.com/db_images/db/items_hires/amethystt2.png",
                         :name         "Amethyst",
                         :tier         3,
                         :id           "-1006009909"}
                        {:external-url
                               "https://newworldfans.com/db/item/pristine-malachite-9f9daa",
                         :png-url
                               "https://cdn.newworldfans.com/db_images/db/items_hires/malachitet4.png",
                         :name "Pristine Malachite",
                         :tier 5,
                         :id   "596226475"}
                        {:external-url
                                      "https://newworldfans.com/crafting/Engineering/3525-maker-s-mark",
                         :png-url
                                      "https://cdn.newworldfans.com/db_images/db/items_hires/1hthrowingaxe_portofcallt2.png",
                         :name        "Maker's Mark",
                         :tier        5,
                         :skill-level 188,
                         :xp          4960,
                         :ingredients
                                      #{{:name "Runic Leather", :id "-1414638513", :amount 8}
                                        {:name "Asmodeum", :id "701033439", :amount 14}
                                        {:name "Embossed Wrapping", :id "724543115", :amount 1}
                                        {:name "Scarhide", :id "-663404256", :amount 2}
                                        {:name "Glittering Ebony", :id "-1636905786", :amount 3}
                                        {:name "Cinnabar", :id "-1470805246", :amount 4}},
                         :id          "-998185140"}
                        {:external-url
                                      "https://newworldfans.com/crafting/Armoring/4096-syndicate-adept-jacket",
                         :png-url
                                      "https://cdn.newworldfans.com/db_images/db/items_hires/chest_courtier3t2.png",
                         :name        "Syndicate Adept Jacket",
                         :tier        2,
                         :skill-level 0,
                         :xp          24,
                         :ingredients
                                      #{{:name   "Reinforced Syndicate Adept Jacket of the Priest",
                                         :id     "-1262375339",
                                         :amount 1}
                                        {:name "Syndicate Brigand Seal", :id "-2139344783", :amount 1}},
                         :id          "803392997"}
                        {:external-url
                                      "https://newworldfans.com/crafting/Armoring/5409-steel-pocketwatch",
                         :png-url
                                      "https://cdn.newworldfans.com/db_images/db/items_hires/focconbonust2.png",
                         :name        "Steel Pocketwatch",
                         :tier        nil,
                         :skill-level 60,
                         :xp          nil,
                         :ingredients
                                      #{{:name   "Common Transmutation Catalyst",
                                         :id     "1023379420",
                                         :amount 1}
                                        {:name "Iron Pocketwatch", :id "-657150890", :amount 5}},
                         :id          "1317665308"}
                        {:external-url
                                      "https://newworldfans.com/crafting/Armoring/3979-marauder-destroyer-gauntlets",
                         :png-url
                                      "https://cdn.newworldfans.com/db_images/db/items_hires/hands_faction1officert2.png",
                         :name        "Marauder Destroyer Gauntlets",
                         :tier        4,
                         :skill-level 0,
                         :xp          24,
                         :ingredients
                                      #{{:name "Marauder Brigand Seal", :id "2032311681", :amount 1}
                                        {:name   "Reinforced Marauder Destroyer Gauntlets of the Barbarian",
                                         :id     "-1420799103",
                                         :amount 1}},
                         :id          "-2027957220"}]
                 fuzzy-search (fn [s substr]
                                (when (not-empty substr)
                                  (string/includes? (string/lower-case s) (string/lower-case substr))))
                 on-search (util/debounce
                             (fn [search-term]
                               (swap!
                                 state
                                 assoc
                                 :results
                                 (take 10 (filter (comp #(fuzzy-search % search-term) :name) items))))
                             100)
                 clear-results #(swap! state assoc :results '())
                 on-clear clear-results
                 on-select (fn [_item] (clear-results))]
      [nwc/search-component
       {:make-result nwc/item-component
        :on-search   on-search
        :on-select   on-select
        :on-clear    on-clear
        :get-value   :name
        :results     (:results @state)}]))
  (r/atom {:results '()}))
