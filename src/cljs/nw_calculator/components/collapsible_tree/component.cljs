(ns nw-calculator.components.collapsible-tree.component
  (:require
    [clojure.walk :as w]
    [reagent.core :as r]
    [nw-calculator.components.collapsible-tree.styles :as styles]))

(defn list-item [props item & children]
  [:dt.m-0.border-l-2.border-opacity-30.border-purple
   props
   [:div.relative.flex-auto
    {:class "pl-3.5"}
    item]
   (into [:<>] children)])

(defn collapsible-list [content children]
  (r/with-let [collapsed? (r/atom false)
               toggle-collapsed (fn [& _] (swap! collapsed? not))]
    [list-item {:class (styles/collapsible-list-class)}
     [:<>
      [:button.bg-white-imp.absolute.flex.padding-0.m-0.justify-center.items-center.w-7.h-7.button-outline.rounded-full
       {:on-click toggle-collapsed
        :class    "-left-3.5 top-1.5"}
       [:i.fas.fa-chevron-up.text-base.translate-4%.transition-transform
        {:class (if @collapsed? "flip-y")}]]
      content]
     (when-not @collapsed?
       (into [:dl.mt-0.mb-0] children))]))

(defn collapsible-tree
  "Returns collapsible tree (description) list.

  `tree-map` is the root node.
  `children` is a fn that, given a branch node, returns a seq of its children.
  `make-node` is a fn that, given an existing node, returns a new node."
  [tree-map {:keys [children make-node]}]
  [:dl {:class (styles/tree-class)}
   (w/postwalk
     (fn [node]
       (cond (and (map? node) (children node)) [collapsible-list (make-node node) (children node)]
             (map? node) [list-item {} (make-node node)]
             :else node))
     tree-map)])