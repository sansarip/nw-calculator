(ns nw-calculator.hooks
  (:require [react]))

(defn use-toggle [initial-value]
  (let [[value set-value!] (react/useState initial-value)
        toggle (react/useCallback #(set-value! (not value)))]
    [value toggle set-value!]))

(defn use-key-press [target-key]
  (let [[key-pressed? set-key-pressed] (react/useState false)]
    (letfn [(press-key! [e]
              (when (= (.-key e) target-key) (set-key-pressed true)))
            (unpress-key! [e]
              (when (= (.-key e) target-key) (set-key-pressed false)))]
      (react/useEffect
        (fn []
          (js/window.addEventListener "keydown" press-key!)
          (js/window.addEventListener "keyup" unpress-key!)
          (fn []
            (js/window.removeEventListener "keydown" press-key!)
            (js/window.removeEventListener "keyup" unpress-key!)))
        #js []))
    key-pressed?))

