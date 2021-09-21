(ns nw-calculator.devcards.sample-data)

(def items
  #{{:tier 2,
     :name "Ash Stain",
     :png-url "images/icons/items/Resource/WoodStainT2.png",
     :ingredients
     [{:id "403590067", :name "Weak Solvent", :quantity 4, :ref? true}
      {:id "939754176", :name "Charcoal", :quantity 10, :ref? true}],
     :id "-1282961951",
     :xp 14,
     :quantity 10,
     :rarity 0,
     :external-url "https://nwdb.info/db/recipe/woodstaint2"}
    {:tier 4,
     :name "Marauder Destroyer Helm of the Brigand",
     :png-url "images/icons/items/Armor/Head_Faction1OfficerT2.png",
     :ingredients
     [{:id "-665180349", :name "Azoth", :quantity 50, :ref? true}
      {:id "1636750069",
       :name "Marauder Destroyer Helm of the Barbarian",
       :quantity 1,
       :ref? true}
      {:id "2032311681",
       :name "Marauder Brigand Seal",
       :quantity 1,
       :ref? true}],
     :id "-177748575",
     :xp 624,
     :quantity 1,
     :rarity 3,
     :external-url
     "https://nwdb.info/db/recipe/heavyhead_marauderrank4_brigand"}
    {:tier 4,
     :name "Marauder Destroyer Coat of the Cleric",
     :png-url "images/icons/items/Armor/Chest_DemonHunter1T2.png",
     :ingredients
     [{:id "-11898114",
       :name "Marauder Destroyer Coat of the Brigand",
       :quantity 1,
       :ref? true}
      {:id "-665180349", :name "Azoth", :quantity 50, :ref? true}
      {:id "1027278002",
       :name "Marauder Cleric Seal",
       :quantity 1,
       :ref? true}],
     :id "2000072870",
     :xp 624,
     :quantity 1,
     :rarity 3,
     :external-url
     "https://nwdb.info/db/recipe/mediumchest_marauderrank4_cleric"}
    {:tier 5,
     :name "Beasthunter Legwraps",
     :png-url "images/icons/items/Armor/BeastBear_Pants.png",
     :ingredients
     [{:id "-2076591716", :name "Metals", :quantity 1, :ref? true}
      {:id "-380635819",
       :name "Tier 5 Leather",
       :quantity 12,
       :ref? true}
      {:id "1193738874", :name "Cloth", :quantity 4, :ref? true}],
     :id "1336385115",
     :xp 2635,
     :quantity 1,
     :rarity 0,
     :external-url
     "https://nwdb.info/db/recipe/mediumlegs_beasthuntert5"}
    {:tier 5,
     :name "Syndicate Alchemist Leggings of the Barbarian",
     :png-url "images/icons/items/Armor/Legs_Courtier3T2.png",
     :ingredients
     [{:id "-665180349", :name "Azoth", :quantity 50, :ref? true}
      {:id "728301590",
       :name "Syndicate Alchemist Leggings of the Priest",
       :quantity 1,
       :ref? true}
      {:id "-1279058350",
       :name "Syndicate Barbarian Seal",
       :quantity 1,
       :ref? true}],
     :id "425051831",
     :xp 624,
     :quantity 1,
     :rarity 3,
     :external-url
     "https://nwdb.info/db/recipe/lightlegs_syndicaterank5_barbarian"}
    {:id "-2125471470",
     :name "Marauder Ravager Handcovers of the Priest",
     :tier 4,
     :rarity 2,
     :png-url "images/icons/items/armor/Hands_Courtier1T2.png",
     :external-url "https://nwdb.info/db/item/lighthands_marauderrank3"}
    {:tier 2,
     :name "Warm Iron Lantern - Bright",
     :png-url
           "images/icons/items/HousingItem/House_HousingItem_Lighting_Settler_LightTable01_A.png",
     :ingredients
           [{:id "-300855267", :name "Fibers", :quantity 5, :ref? true}
            {:id "1798143903", :name "Oil", :quantity 5, :ref? true}
            {:id "-961420380", :name "Iron Ingot", :quantity 15, :ref? true}],
     :id "1789298393",
     :xp 150,
     :quantity 1,
     :rarity 1,
     :external-url
     "https://nwdb.info/db/recipe/house_housingitem_lighting_settler_lighttable01_a"}
    {:tier 2,
     :name "Covenant Initiate Footwear of the Cleric",
     :png-url "images/icons/items/Armor/Feet_Courtier2T2.png",
     :ingredients
     [{:id "-957180738",
       :name "Covenant Cleric Seal",
       :quantity 1,
       :ref? true}
      {:id "-665180349", :name "Azoth", :quantity 50, :ref? true}
      {:id "-1786607252",
       :name "Covenant Initiate Footwear of the Priest",
       :quantity 1,
       :ref? true}],
     :id "-695666791",
     :xp 624,
     :quantity 1,
     :rarity 1,
     :external-url
     "https://nwdb.info/db/recipe/lightfeet_covenantrank1_cleric"}
    {:id "1636750069",
     :name "Marauder Destroyer Helm of the Barbarian",
     :tier 4,
     :rarity 3,
     :png-url "images/icons/items/armor/Head_Faction1OfficerT2.png",
     :external-url "https://nwdb.info/db/item/heavyhead_marauderrank4"}
    {:tier 5,
     :name "Insulated Pristine Topaz Amulet",
     :png-url "images/icons/items/Armor/AmuletTopazT5.png",
     :ingredients
     [{:id "-312313774",
       :name "Cut Pristine Topaz",
       :quantity 1,
       :ref? true}
      {:id "-1305779742",
       :name "Trinket Chains",
       :quantity 1,
       :ref? true}
      {:id "1750976724",
       :name "Precious Metals",
       :quantity 1,
       :ref? true}
      {:id "-658579432",
       :name "Trinket Gem Settings",
       :quantity 1,
       :ref? true}],
     :id "-973195744",
     :xp 2000,
     :quantity 1,
     :rarity 1,
     :external-url
     "https://nwdb.info/db/recipe/procedural_amulettopazt5"}
    {:id "548333714",
     :name "Orange Pigment",
     :tier 0,
     :rarity 0,
     :png-url "images/icons/items/resource/PigmentOrange.png",
     :external-url "https://nwdb.info/db/item/pigmentorange"}
    {:tier 1,
     :name "Maple Chest of Drawers",
     :png-url
           "images/icons/items/HousingItem/House_HousingItem_Settler_Cabinet01_B.png",
     :ingredients
           [{:id "-1744629493", :name "Lumber", :quantity 35, :ref? true}
            {:id "-1045627383", :name "Maple Stain", :quantity 2, :ref? true}
            {:id "-518677159", :name "Steel Ingot", :quantity 10, :ref? true}],
     :id "1960830375",
     :xp 1128,
     :quantity 1,
     :rarity 0,
     :external-url
     "https://nwdb.info/db/recipe/house_housingitem_settler_cabinet01_b"}
    {:tier 4,
     :name "Marauder Ravager Handcovers of the Brigand",
     :png-url "images/icons/items/Armor/Hands_Courtier1T2.png",
     :ingredients
     [{:id "-665180349", :name "Azoth", :quantity 50, :ref? true}
      {:id "-2125471470",
       :name "Marauder Ravager Handcovers of the Priest",
       :quantity 1,
       :ref? true}
      {:id "2032311681",
       :name "Marauder Brigand Seal",
       :quantity 1,
       :ref? true}],
     :id "-269358725",
     :xp 624,
     :quantity 1,
     :rarity 2,
     :external-url
     "https://nwdb.info/db/recipe/lighthands_marauderrank3_brigand"}
    {:id "641770417",
     :name "Marauder Ravager Boots of the Barbarian",
     :tier 4,
     :rarity 2,
     :png-url "images/icons/items/armor/Feet_Faction1OfficerT2.png",
     :external-url "https://nwdb.info/db/item/heavyfeet_marauderrank3"}
    {:tier 5,
     :name "Covenant Adjudicator Jacket of the Occultist",
     :png-url "images/icons/items/Armor/Chest_Courtier2T2.png",
     :ingredients
     [{:id "2032177364",
       :name "Covenant Adjudicator Jacket of the Priest",
       :quantity 1,
       :ref? true}
      {:id "-665180349", :name "Azoth", :quantity 50, :ref? true}
      {:id "-234111389",
       :name "Covenant Occultist Seal",
       :quantity 1,
       :ref? true}],
     :id "1542492595",
     :xp 624,
     :quantity 1,
     :rarity 3,
     :external-url
     "https://nwdb.info/db/recipe/lightchest_covenantrank5_occultist"}})
