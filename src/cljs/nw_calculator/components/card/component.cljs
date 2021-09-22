(ns nw-calculator.components.card.component)

(defn card [props & children]
  [:div.relative.bg-white.h-auto.px-5.pb-8.pt-14.md:px-10.md:pb-10.w-128.md:w-176-imp.rounded.shadow-lg
   props
   (into [:<>] children)])
