// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('nw_calculator.subs');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('nw_calculator.utilities');
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_dark_DASH_theme_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dark_DASH_theme_QMARK_], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_search_DASH_results,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p__29128,p__29129){
var map__29130 = p__29128;
var map__29130__$1 = cljs.core.__destructure_map(map__29130);
var search_results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29130__$1,cljs.core.cst$kw$search_DASH_results);
var vec__29131 = p__29129;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29131,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29131,(1),null);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(search_results,item_index);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_selected_DASH_items,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$selected_DASH_items], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_num_DASH_selected_DASH_items,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$_LT__DASH_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_selected_DASH_items], null),(function (selected_items){
return cljs.core.count(selected_items);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_items_DASH_by_DASH_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return cljs.core.cst$kw$by_DASH_id.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$items.cljs$core$IFn$_invoke$arity$1(db));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_selected_DASH_item,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$_LT__DASH_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_selected_DASH_items], null),cljs.core.cst$kw$_LT__DASH_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_items_DASH_by_DASH_id], null),(function (p__29134,p__29135){
var vec__29136 = p__29134;
var selected_items = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29136,(0),null);
var items_by_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29136,(1),null);
var vec__29139 = p__29135;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29139,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29139,(1),null);
var map__29142 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(selected_items,item_index);
var map__29142__$1 = cljs.core.__destructure_map(map__29142);
var map__29143 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29142__$1,cljs.core.cst$kw$item);
var map__29143__$1 = cljs.core.__destructure_map(map__29143);
var selected_item_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29143__$1,cljs.core.cst$kw$id);
var amount_multiplier = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29142__$1,cljs.core.cst$kw$amount_DASH_multiplier);
var or__4212__auto__ = (function (){var G__29144 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(items_by_id,selected_item_id);
var G__29144__$1 = (((G__29144 == null))?null:cljs.core.not_empty(G__29144));
var G__29144__$2 = (((G__29144__$1 == null))?null:(nw_calculator.utilities.get_ingredients.cljs$core$IFn$_invoke$arity$2 ? nw_calculator.utilities.get_ingredients.cljs$core$IFn$_invoke$arity$2(G__29144__$1,items_by_id) : nw_calculator.utilities.get_ingredients.call(null,G__29144__$1,items_by_id)));
if((G__29144__$2 == null)){
return null;
} else {
return (nw_calculator.utilities.multiply_amounts.cljs$core$IFn$_invoke$arity$2 ? nw_calculator.utilities.multiply_amounts.cljs$core$IFn$_invoke$arity$2(G__29144__$2,amount_multiplier) : nw_calculator.utilities.multiply_amounts.call(null,G__29144__$2,amount_multiplier));
}
})();
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ingredients,cljs.core.PersistentVector.EMPTY], null);
}
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_loading_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p__29145){
var map__29146 = p__29145;
var map__29146__$1 = cljs.core.__destructure_map(map__29146);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29146__$1,cljs.core.cst$kw$state);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(state,cljs.core.cst$kw$loading);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_ready_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p__29147){
var map__29148 = p__29147;
var map__29148__$1 = cljs.core.__destructure_map(map__29148);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29148__$1,cljs.core.cst$kw$state);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(state,cljs.core.cst$kw$start);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_searching_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p__29149){
var map__29150 = p__29149;
var map__29150__$1 = cljs.core.__destructure_map(map__29150);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29150__$1,cljs.core.cst$kw$state);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(state,cljs.core.cst$kw$searching);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_amount_DASH_multiplier,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$_LT__DASH_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_selected_DASH_items], null),(function (selected_items,p__29151){
var vec__29152 = p__29151;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29152,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29152,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(selected_items,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item_index,cljs.core.cst$kw$amount_DASH_multiplier], null));
})], 0));
