(ns nw-calculator.components
  (:require
    [nw-calculator.components.collapsible-tree.component :as collapsible-tree-component]
    [nw-calculator.components.item.component :as item-component]
    [nw-calculator.components.search.component :as search-component]
    [nw-calculator.components.circular-button.component :as circular-button-component]))

(def collapsible-tree-component collapsible-tree-component/collapsible-tree)
(def item-component item-component/item)
(def search-component search-component/search)
(def circular-button-component circular-button-component/circular-button)
