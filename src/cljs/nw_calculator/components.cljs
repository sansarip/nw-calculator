(ns nw-calculator.components
  (:require
    [nw-calculator.components.collapsible-tree.component :as collapsible-tree-component]
    [nw-calculator.components.item.component :as item-component]
    [nw-calculator.components.search.component :as search-component]
    [nw-calculator.components.circular-button.component :as circular-button-component]
    [nw-calculator.components.loader.component :as loader-component]
    [nw-calculator.components.card.component :as card-component]
    [nw-calculator.components.toggle.component :as toggle-component]
    [nw-calculator.components.multiplication.component :as multiplication-component]
    [nw-calculator.components.dropdown.component :as dropdown-component]
    [nw-calculator.components.copy-link.component :as copy-link-component]))

(def collapsible-tree-component collapsible-tree-component/collapsible-tree)
(def item-component item-component/item)
(def search-component search-component/search)
(def circular-button-component circular-button-component/circular-button)
(def loader-component loader-component/loader)
(def card-component card-component/card)
(def toggle-component toggle-component/toggle)
(def multiplication-component multiplication-component/multiplication)
(def options-component dropdown-component/options)
(def dropdown-component dropdown-component/dropdown)
(def copy-link-component copy-link-component/copy-link)
