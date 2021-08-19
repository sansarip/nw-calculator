(ns nw-calculator.components.icon-button.component)

(defn icon-button [props & children]
  [:button.flex.m-0.justify-center.items-center.w-12.h-12.button-outline.rounded-full
   props
   (into [:<>] children)])
