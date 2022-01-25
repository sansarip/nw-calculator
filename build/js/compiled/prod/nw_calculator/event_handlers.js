// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('nw_calculator.event_handlers');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cognitect.transit');
goog.require('nw_calculator.effects');
goog.require('nw_calculator.defaults');
nw_calculator.event_handlers.next_state = (function nw_calculator$event_handlers$next_state(db,path,fsm,transition){
var current_state = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,path);
var new_state = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fsm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_state,transition], null));
return cljs.core.assoc_in(db,path,new_state);
});
nw_calculator.event_handlers.clear_search = (function nw_calculator$event_handlers$clear_search(var_args){
var G__22695 = arguments.length;
switch (G__22695) {
case 1:
return nw_calculator.event_handlers.clear_search.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return nw_calculator.event_handlers.clear_search.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nw_calculator.event_handlers.clear_search.cljs$core$IFn$_invoke$arity$1 = (function (db){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$search_DASH_results,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));
}));

(nw_calculator.event_handlers.clear_search.cljs$core$IFn$_invoke$arity$2 = (function (db,item_index){
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search_DASH_results,item_index], null),cljs.core.PersistentVector.EMPTY);
}));

(nw_calculator.event_handlers.clear_search.cljs$lang$maxFixedArity = 2);

nw_calculator.event_handlers.set_selected_item_refs = (function nw_calculator$event_handlers$set_selected_item_refs(db,selected_item_refs){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$selected_DASH_item_DASH_refs,selected_item_refs);
});
nw_calculator.event_handlers.navigate_with_selected_item_refs = (function nw_calculator$event_handlers$navigate_with_selected_item_refs(cfx,selected_item_refs){
var w = cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$json);
var selected_item_refs__GT_transit = cognitect.transit.write(w,selected_item_refs);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cfx,cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_navigate_BANG_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$main,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$selected_DASH_item_DASH_refs,selected_item_refs__GT_transit], null)], null));
});
