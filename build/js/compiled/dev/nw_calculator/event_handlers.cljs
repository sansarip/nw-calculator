(ns nw-calculator.event-handlers)

(defn next-state [app-state keys fsm transition]
  (let [state-path (conj keys :state)
        current-state (get-in app-state state-path)
        new-state (get-in fsm [current-state transition])]
    (assoc-in app-state state-path new-state)))

