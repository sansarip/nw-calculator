(ns nw-calculator.components.collapsible-tree.component
  (:require
    [clojure.walk :as w]
    [reagent.core :as r]
    [nw-calculator.components.collapsible-tree.styles :as styles]
    [nw-calculator.utilities :as util]
    [nw-calculator.components.icon-button.component :as icb]))

(defn spacer [border?]
  [:dl.mt-0.mb-0
     [:dt.m-0.pl-4.border-opacity-30.border-purple
      {:class (when border? "border-l-2")}
      [:div.h-6]]])

(defn list-item [props item & children]
  [:dt.m-0.pl-4.border-l-2.border-opacity-30.border-purple
   props
   [spacer children]
   [:div.relative.flex-auto
    {:class "pl-3.5"}
    item]
   (into [:<>] children)])

(defn collapsible-list [root-node? content children & [set-state]]
  (r/with-let [state (r/atom {:collapse? false})
               _ (when-not root-node? ((or set-state util/no-op) state))
               toggle-collapsed (fn [& _] (swap! state update :collapse? not))]
    (let [collapse? (:collapse? @state)]
      [list-item {:class (styles/collapsible-list-class)}
       [:<>
        (when-not root-node?
          [icb/icon-button
           {:on-click toggle-collapsed
            :class    "absolute -left-10 bg-white-imp"}
           [:i.fas.fa-chevron-up.text-base.transition-transform
            {:class (when collapse? "flip-y")}]])
        content]
       (when-not collapse?
         (into [:dl.mt-0.mb-0] children))])))

(defn collapsible-tree
  "Returns collapsible tree (description) list.

  `tree-map` is the root node.
  `children` is a fn that, given a branch node, returns a seq of its children.
  `make-node` is a fn that, given an existing node, returns a new node."
  [{:keys                           [children make-node set-state]
    :or                             {make-node identity
                                     set-state util/no-op}
    {root-node-id :id :as tree-map} :tree-map}]
  [:dl {:class (styles/tree-class)}
   (w/postwalk
     (fn [node]
       (cond (and (map? node) (children node)) (let [node-id (:id node)]
                                                 [collapsible-list
                                                  (= node-id root-node-id)
                                                  [make-node node]
                                                  (children node)
                                                  #(set-state node-id %)])
             (map? node) [list-item {} [make-node node]]
             :else node))
     tree-map)])