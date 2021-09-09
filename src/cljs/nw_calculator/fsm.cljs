(ns nw-calculator.fsm)

(def app-fsm
  {:start     {:fetch-item-data :loading}
   :loading   {:success         :start
               :fetch-item-data :loading}})

(def tree-fsm
  {:start {:search :searching}
   :searching {:success :start}})

