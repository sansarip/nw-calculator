(ns nw-calculator.components.collapsible-tree.component
  (:require
    [clojure.walk :as w]
    [reagent.core :as r]
    [nw-calculator.components.collapsible-tree.styles :as styles]
    [nw-calculator.components.circular-button.component :as cb]
    [react]
    [nw-calculator.hooks :as hooks]
    [nw-calculator.utilities :as util]
    [oops.core :as oops]))

(defonce collapsible-list-context (react/createContext
                                    #js {"setCollapsedUpdater"   util/no-op
                                         "unsetCollapsedUpdater" util/no-op}))
(def collapsible-list-provider (.-Provider collapsible-list-context))
(def collapsible-list-consumer (.-Consumer collapsible-list-context))

(defn list-item [{:keys [list-item-props child-container-props]} item & children]
  [:dt.bg-inherit.mb-0.mr-0.mt-6.ml-7
   list-item-props
   [:div.bg-inherit.relative.flex-auto.ml-7
    child-container-props
    item]
   (into [:<>] children)])

(defn collapsible-list
  [{:keys [root-node?
           content
           set-collapsed-updater
           unset-collapsed-updater]
    :or   {set-collapsed-updater   util/no-op
           unset-collapsed-updater util/no-op}}
   & children]
  (let [[collapsed?
         toggle-collapsed!
         set-collapsed!] (hooks/use-toggle true)]
    (react/useEffect
      (fn []
        (let [uuid (random-uuid)]
          (when-not root-node? (set-collapsed-updater uuid set-collapsed!))
          #(unset-collapsed-updater uuid)))
      #js [set-collapsed-updater])
    [list-item
     {}
     [:<>
      (when-not root-node?
        [cb/circular-button
         {:on-click toggle-collapsed!
          :class    "toggle bg-inherit absolute -left-14"}
         [:i.fas.fa-chevron-up.text-base.transition-transform
          {:class (when collapsed? "flip-y")}]])
      content]
     [:dl.bg-inherit.mt-0.mb-0.overflow-x-auto
      {:class (when (and (not root-node?) collapsed?) "hidden")}
      (into [:<>] children)]]))

(defn collapsible-tree
  "Returns collapsible tree (description) list.

  `tree-map` is the root node.
  `children` is a fn that, given a branch node, returns a seq of its children.
  `make-node` is a fn that, given an existing node, returns a new node.
  `id` is a dn that, given an existing node, returns a unique identifier for that node."
  [{:keys [children
           make-node
           tree-map
           container-props
           ignore?
           id]
    :or   {make-node identity
           ignore?    util/no-op
           id        :id}}]
  [:dl.bg-inherit.w-full
   (r/merge-props
     {:class (styles/tree-class)}
     container-props)
   (w/postwalk
     (fn [node]
       (if (and (not (ignore? node)) (map? node))
         (let [root-node? (= (id node) (id tree-map))]
           (if-let [node-children (not-empty (children node))]
             [:> collapsible-list-consumer {}
              (fn [context]
                (r/as-element
                  [:f> collapsible-list
                   {:root-node?              root-node?
                    :set-collapsed-updater   (oops/oget context "setCollapsedUpdater")
                    :unset-collapsed-updater (oops/oget context "unsetCollapsedUpdater")
                    :content                 [:f> make-node
                                              {:node       node
                                               :root-node? root-node?}]}
                   (into [:<>] node-children)]))]
             [list-item {}
              [:f> make-node
               {:node       node
                :root-node? root-node?}]]))
         node))
     tree-map)])