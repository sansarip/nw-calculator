(ns nw-calculator.components.copy-link.component
  (:require
    [react]
    [reagent.core :as r]))

(def default-button-text " Copy link")
(def link-copied-text " Link copied!")

(defn copy-link []
  (let [[button-text set-button-text!] (react/useState default-button-text)]
    (r/with-let [copy-link! (fn []
                              (js/navigator.clipboard.writeText js/location)
                              (set-button-text! link-copied-text))]
      (react/useEffect
        (fn []
          (let [timeout (js/setTimeout
                          #(set-button-text! default-button-text)
                          1000)]
            #(js/clearTimeout timeout)))
        #js [button-text])
      [:button.button.w-64
       {:on-click copy-link!}
       [:i.fas.fa-link]
       button-text])))

