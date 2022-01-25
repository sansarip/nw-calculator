(ns nw-calculator.components.drawer.component
  (:require [nw-calculator.utilities :as util]
            [reagent.core :as r]
            [react]))

(defn drawer [{:keys [slide-out-direction on-close container-props]
               :or   {slide-out-direction :right
                      on-close            util/no-op
                      container-props {}}}
              & children]
  (r/with-let [open? (r/atom false)
               toggle-drawer! #(swap! open? not)]
    [:div.absolute.flex.right-0.flex-row-reverse
     container-props
     [:div.z-0.shadow-2xl.relative.grow.h-screen.bg-white.overflow-hidden.transition-all.duration-1000
      {:class (if @open? "md:w-full sm:w-19/20screen" "md:w-10 w-6")}
      (into [:div.overflow-auto.h-full.pl-16.pr-16.pb-16.pt-32] children)]
     [:button.button.focus:border-white.border-2.border-white.p-0-imp.w-12.h-12.md:w-16.md:h-16.rounded-full.top-32.left-6.md:left-8.relative.z-10.flex-none
      {:name     "toggle drawer button"
       :on-click toggle-drawer!}
      [:i.block.fas.fa-chevron-left.text-base.md:text-xl.transition-transform
       {:class (when @open? "flip-x")}]]]))
