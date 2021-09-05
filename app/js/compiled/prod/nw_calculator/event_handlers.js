// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('nw_calculator.event_handlers');
goog.require('cljs.core');
goog.require('cljs.core.constants');
nw_calculator.event_handlers.next_state = (function nw_calculator$event_handlers$next_state(app_state,keys,fsm,transition){
var state_path = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(keys,cljs.core.cst$kw$state);
var current_state = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app_state,state_path);
var new_state = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fsm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_state,transition], null));
return cljs.core.assoc_in(app_state,state_path,new_state);
});
