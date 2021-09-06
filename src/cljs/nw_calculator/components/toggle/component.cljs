(ns nw-calculator.components.toggle.component
  (:require
    [nw-calculator.components.toggle.styles :as styles]
    [reagent.core :as r]
    [nw-calculator.utilities :as util]))

(defn toggle
  [{:keys [container-props checkbox-props on off]}
   & children]
  (r/with-let [input-id (str "toggle_" (util/short-uuid-str))]
    [:label.block.relative.cursor-pointer.border-2.border-purple.border-opacity-100.rounded-full
     (r/merge-props
       {:for   input-id
        :class (styles/toggle-class)}
       container-props)
     [:input.sr-only
      (r/merge-props
        {:id   input-id
         :type "checkbox"}
        checkbox-props)]
     [:div.absolute.ball.rounded-full.transition.z-50.bg-purple.bg-opacity-100]
     [:div.on.absolute.w-6.h-6.flex.items-center.z-40
      {:class "transform -translate-y-1/2 top-9/25"}
      on]
     [:div.off.absolute.w-6.h-6.flex.items-center.z-40
      {:class "transform -translate-y-1/2 top-9/25"}
      off]
     (into [:<>] children)]))