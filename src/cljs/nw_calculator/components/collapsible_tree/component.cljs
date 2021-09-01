(ns nw-calculator.components.collapsible-tree.component
  (:require
    [clojure.walk :as w]
    [reagent.core :as r]
    [nw-calculator.components.collapsible-tree.styles :as styles]
    [nw-calculator.components.circular-button.component :as cb]
    [react]
    [nw-calculator.hooks :as hooks]
    [nw-calculator.utilities :as util]))

(defonce collapsible-list-context (react/createContext
                                    #js {"setCollapsedUpdater"   util/no-op
                                         "unsetCollapsedUpdater" util/no-op}))
(def collapsible-list-provider (.-Provider collapsible-list-context))
(def collapsible-list-consumer (.-Consumer collapsible-list-context))

(defn spacer []
  [:dl.mt-0.mb-0
   [:dt.m-0.pl-4.border-opacity-30.border-purple
    {:class "border-l-2"}
    [:div.h-6]]])

(defn list-item [{:keys [list-item-props child-container-props]} item & children]
  [:dt.m-0.pl-4.border-l-2.border-opacity-30.border-purple
   list-item-props
   [spacer]
   [:div.relative.flex-auto
    (r/merge-props {:class "pl-3.5"} child-container-props)
    item]
   (into [:<>] children)])

(defn collapsible-list
  [{:keys [root-node?
           node-id
           content
           set-collapsed-updater
           unset-collapsed-updater]
    :or   {set-collapsed-updater   util/no-op
           unset-collapsed-updater util/no-op}}
   & children]
  (let [[collapsed?
         toggle-collapsed!
         set-collapsed!] (hooks/use-toggle false)]
    (react/useEffect
      (fn []
        (when-not root-node? (set-collapsed-updater node-id set-collapsed!))
        #(unset-collapsed-updater node-id))
      #js [set-collapsed-updater])
    [list-item
     {:list-item-props       {:class (styles/collapsible-list-class)}
      :child-container-props {:class (when root-node? "z-10")}}
     [:<>
      (when-not root-node?
        [cb/circular-button
         {:on-click toggle-collapsed!
          :class    "absolute -left-10 bg-white-imp"}
         [:i.fas.fa-chevron-up.text-base.transition-transform
          {:class (when collapsed? "flip-y")}]])
      content]
     (when-not collapsed?
       [:dl.mt-0.mb-0
        (into [:<>] children)])]))

(defn collapsible-tree
  "Returns collapsible tree (description) list.

  `tree-map` is the root node.
  `children` is a fn that, given a branch node, returns a seq of its children.
  `make-node` is a fn that, given an existing node, returns a new node."
  [{:keys                   [children
                             make-node]
    :or                     {make-node identity}
    {root-node-id :id
     :as          tree-map} :tree-map}]
  [:dl {:class (styles/tree-class)}
   (w/postwalk
     (fn [node]
       (if (map? node)
         (let [node-id (:id node)
               root-node? (= node-id root-node-id)]
           (if-let [node-children (not-empty (children node))]
             [:> collapsible-list-consumer {}
              (fn [context]
                (r/as-element
                  [:f> collapsible-list
                   {:root-node?              (= node-id root-node-id)
                    :node-id                 node-id
                    :set-collapsed-updater   (.-setCollapsedUpdater context)
                    :unset-collapsed-updater (.-unsetCollapsedUpdater context)
                    :content                 [:f> make-node
                                              {:node node
                                               :root-node? root-node?}]}
                   (into [:<>] node-children)]))]
             [list-item {}
              [:f> make-node
               {:node node
                :root-node? root-node?}]]))
         node))
     tree-map)])