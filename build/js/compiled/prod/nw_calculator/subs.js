// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('nw_calculator.subs');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('nw_calculator.business_logic');
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_search_DASH_results,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p__31051,p__31052){
var map__31053 = p__31051;
var map__31053__$1 = cljs.core.__destructure_map(map__31053);
var search_results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31053__$1,cljs.core.cst$kw$search_DASH_results);
var vec__31054 = p__31052;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31054,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31054,(1),null);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(search_results,item_index);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_selected_DASH_item_DASH_refs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$selected_DASH_item_DASH_refs], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_num_DASH_selected_DASH_item_DASH_refs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$_LT__DASH_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_selected_DASH_item_DASH_refs], null),(function (selected_item_refs){
return cljs.core.count(selected_item_refs);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_num_DASH_resolved_DASH_selected_DASH_items,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$_LT__DASH_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_selected_DASH_item_DASH_refs], null),(function (selected_items){
return cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id,selected_items));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_items_DASH_by_DASH_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return cljs.core.cst$kw$by_DASH_id.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$items.cljs$core$IFn$_invoke$arity$1(db));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_selected_DASH_option,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$_LT__DASH_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_selected_DASH_item_DASH_refs], null),(function (selected_item_refs,p__31057){
var vec__31058 = p__31057;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31058,(0),null);
var vec__31061 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31058,(1),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31061,(0),null);
var option_path = vec__31061;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(selected_item_refs,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [item_index,cljs.core.cst$kw$selected_DASH_options,option_path], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_resolved_DASH_selected_DASH_item,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$_LT__DASH_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_selected_DASH_item_DASH_refs], null),cljs.core.cst$kw$_LT__DASH_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_items_DASH_by_DASH_id], null),(function (p__31064,p__31065){
var vec__31066 = p__31064;
var selected_item_refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31066,(0),null);
var items_by_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31066,(1),null);
var vec__31069 = p__31065;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31069,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31069,(1),null);
var map__31072 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(selected_item_refs,item_index);
var map__31072__$1 = cljs.core.__destructure_map(map__31072);
var selected_item_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31072__$1,cljs.core.cst$kw$id);
var quantity_multiplier = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31072__$1,cljs.core.cst$kw$quantity_DASH_multiplier);
var selected_options = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31072__$1,cljs.core.cst$kw$selected_DASH_options,cljs.core.PersistentArrayMap.EMPTY);
var map__31073 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(items_by_id,selected_item_id);
var map__31073__$1 = cljs.core.__destructure_map(map__31073);
var item = map__31073__$1;
var quantity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31073__$1,cljs.core.cst$kw$quantity);
var xp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31073__$1,cljs.core.cst$kw$xp);
var or__4212__auto__ = (function (){var G__31074 = item;
var G__31074__$1 = (((G__31074 == null))?null:cljs.core.not_empty(G__31074));
var G__31074__$2 = (((G__31074__$1 == null))?null:(function (){var G__31075 = G__31074__$1;
var G__31076 = items_by_id;
var G__31077 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item_index], null);
var G__31078 = selected_options;
return (nw_calculator.business_logic.resolve_refs.cljs$core$IFn$_invoke$arity$4 ? nw_calculator.business_logic.resolve_refs.cljs$core$IFn$_invoke$arity$4(G__31075,G__31076,G__31077,G__31078) : nw_calculator.business_logic.resolve_refs.call(null,G__31075,G__31076,G__31077,G__31078));
})());
var G__31074__$3 = (((G__31074__$2 == null))?null:(nw_calculator.business_logic.multiply_quantities.cljs$core$IFn$_invoke$arity$3 ? nw_calculator.business_logic.multiply_quantities.cljs$core$IFn$_invoke$arity$3(G__31074__$2,items_by_id,quantity_multiplier) : nw_calculator.business_logic.multiply_quantities.call(null,G__31074__$2,items_by_id,quantity_multiplier)));
if((G__31074__$3 == null)){
return null;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__31074__$3,cljs.core.cst$kw$quantity,quantity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$xp,(xp * quantity_multiplier)], 0));
}
})();
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ingredients,cljs.core.PersistentVector.EMPTY], null);
}
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_loading_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p__31079){
var map__31080 = p__31079;
var map__31080__$1 = cljs.core.__destructure_map(map__31080);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31080__$1,cljs.core.cst$kw$state);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(state,cljs.core.cst$kw$loading);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_ready_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p__31081){
var map__31082 = p__31081;
var map__31082__$1 = cljs.core.__destructure_map(map__31082);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31082__$1,cljs.core.cst$kw$state);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(state,cljs.core.cst$kw$start);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_searching_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p__31083){
var map__31084 = p__31083;
var map__31084__$1 = cljs.core.__destructure_map(map__31084);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31084__$1,cljs.core.cst$kw$state);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(state,cljs.core.cst$kw$searching);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_quantity_DASH_multiplier,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$_LT__DASH_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_selected_DASH_item_DASH_refs], null),(function (selected_items,p__31085){
var vec__31086 = p__31085;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31086,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31086,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(selected_items,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item_index,cljs.core.cst$kw$quantity_DASH_multiplier], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_selected_DASH_items_DASH_summary,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$_LT__DASH_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_num_DASH_selected_DASH_item_DASH_refs], null),(function (num_selected_items){
if((num_selected_items > (1))){
var resolved_items = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__31089_SHARP_){
return cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_resolved_DASH_selected_DASH_item,p1__31089_SHARP_], null)));
})),cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name)),cljs.core.range.cljs$core$IFn$_invoke$arity$1(num_selected_items));
return nw_calculator.business_logic.merge_items(resolved_items);
} else {
return null;
}
})], 0));
