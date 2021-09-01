(ns nw-calculator.fsm)

(def fsm
  {:start     {:fetch-item-data :loading
               :search          :searching}
   :searching {:success :start}
   :loading   {:success         :start
               :fetch-item-data :loading}})

