// Compiled by ClojureScript 1.10.879 {:optimizations :none}
goog.provide('nw_calculator.event_handlers');
goog.require('cljs.core');
nw_calculator.event_handlers.next_state = (function nw_calculator$event_handlers$next_state(app_state,keys,fsm,transition){
var state_path = cljs.core.conj.call(null,keys,new cljs.core.Keyword(null,"state","state",-1988618099));
var current_state = cljs.core.get_in.call(null,app_state,state_path);
var new_state = cljs.core.get_in.call(null,fsm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_state,transition], null));
return cljs.core.assoc_in.call(null,app_state,state_path,new_state);
});

//# sourceMappingURL=event_handlers.js.map
