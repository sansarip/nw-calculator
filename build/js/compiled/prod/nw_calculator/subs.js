// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('nw_calculator.subs');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('nw_calculator.business_logic');
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_search_DASH_results,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p__29277,p__29278){
var map__29279 = p__29277;
var map__29279__$1 = cljs.core.__destructure_map(map__29279);
var search_results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29279__$1,cljs.core.cst$kw$search_DASH_results);
var vec__29280 = p__29278;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29280,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29280,(1),null);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(search_results,item_index);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_selected_DASH_items,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$selected_DASH_items], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_num_DASH_selected_DASH_items,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$_LT__DASH_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_selected_DASH_items], null),(function (selected_items){
return cljs.core.count(selected_items);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_num_DASH_resolved_DASH_selected_DASH_items,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$_LT__DASH_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_selected_DASH_items], null),(function (selected_items){
return cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name,cljs.core.cst$kw$item),selected_items));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_items_DASH_by_DASH_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return cljs.core.cst$kw$by_DASH_id.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$items.cljs$core$IFn$_invoke$arity$1(db));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_selected_DASH_option,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$_LT__DASH_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_selected_DASH_items], null),(function (selected_items,p__29283){
var vec__29284 = p__29283;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29284,(0),null);
var vec__29287 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29284,(1),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29287,(0),null);
var option_path = vec__29287;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(selected_items,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [item_index,cljs.core.cst$kw$selected_DASH_options,option_path], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_resolved_DASH_selected_DASH_item,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$_LT__DASH_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_selected_DASH_items], null),cljs.core.cst$kw$_LT__DASH_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_items_DASH_by_DASH_id], null),(function (p__29290,p__29291){
var vec__29292 = p__29290;
var selected_items = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29292,(0),null);
var items_by_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29292,(1),null);
var vec__29295 = p__29291;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29295,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29295,(1),null);
var map__29298 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(selected_items,item_index);
var map__29298__$1 = cljs.core.__destructure_map(map__29298);
var map__29299 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29298__$1,cljs.core.cst$kw$item);
var map__29299__$1 = cljs.core.__destructure_map(map__29299);
var selected_item_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29299__$1,cljs.core.cst$kw$id);
var quantity_multiplier = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29298__$1,cljs.core.cst$kw$quantity_DASH_multiplier);
var selected_options = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29298__$1,cljs.core.cst$kw$selected_DASH_options,cljs.core.PersistentArrayMap.EMPTY);
var map__29300 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(items_by_id,selected_item_id);
var map__29300__$1 = cljs.core.__destructure_map(map__29300);
var item = map__29300__$1;
var quantity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29300__$1,cljs.core.cst$kw$quantity);
var xp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29300__$1,cljs.core.cst$kw$xp);
var or__4212__auto__ = (function (){var G__29301 = item;
var G__29301__$1 = (((G__29301 == null))?null:cljs.core.not_empty(G__29301));
var G__29301__$2 = (((G__29301__$1 == null))?null:(function (){var G__29302 = G__29301__$1;
var G__29303 = items_by_id;
var G__29304 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item_index], null);
var G__29305 = selected_options;
return (nw_calculator.business_logic.resolve_refs.cljs$core$IFn$_invoke$arity$4 ? nw_calculator.business_logic.resolve_refs.cljs$core$IFn$_invoke$arity$4(G__29302,G__29303,G__29304,G__29305) : nw_calculator.business_logic.resolve_refs.call(null,G__29302,G__29303,G__29304,G__29305));
})());
var G__29301__$3 = (((G__29301__$2 == null))?null:(nw_calculator.business_logic.multiply_quantities.cljs$core$IFn$_invoke$arity$3 ? nw_calculator.business_logic.multiply_quantities.cljs$core$IFn$_invoke$arity$3(G__29301__$2,items_by_id,quantity_multiplier) : nw_calculator.business_logic.multiply_quantities.call(null,G__29301__$2,items_by_id,quantity_multiplier)));
if((G__29301__$3 == null)){
return null;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__29301__$3,cljs.core.cst$kw$quantity,quantity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$xp,(xp * quantity_multiplier)], 0));
}
})();
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ingredients,cljs.core.PersistentVector.EMPTY], null);
}
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_item_DASH_in_DASH_resolved_DASH_selected_DASH_item,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (_db,p__29307){
var vec__29308 = p__29307;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29308,(0),null);
var vec__29311 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29308,(1),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29311,(0),null);
var item_path = vec__29311;
return cljs.core.some((function (p1__29306_SHARP_){
if(cljs.core.truth_((function (){var G__29315 = cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(p1__29306_SHARP_);
var fexpr__29314 = cljs.core.PersistentHashSet.createAsIfByAssoc([item_path]);
return (fexpr__29314.cljs$core$IFn$_invoke$arity$1 ? fexpr__29314.cljs$core$IFn$_invoke$arity$1(G__29315) : fexpr__29314.call(null,G__29315));
})())){
return p1__29306_SHARP_;
} else {
return null;
}
}),cljs.core.tree_seq(nw_calculator.business_logic.options_or_ingredients,nw_calculator.business_logic.options_or_ingredients,cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_resolved_DASH_selected_DASH_item,item_index], null)))));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_loading_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p__29316){
var map__29317 = p__29316;
var map__29317__$1 = cljs.core.__destructure_map(map__29317);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29317__$1,cljs.core.cst$kw$state);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(state,cljs.core.cst$kw$loading);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_ready_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p__29318){
var map__29319 = p__29318;
var map__29319__$1 = cljs.core.__destructure_map(map__29319);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29319__$1,cljs.core.cst$kw$state);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(state,cljs.core.cst$kw$start);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_searching_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p__29320){
var map__29321 = p__29320;
var map__29321__$1 = cljs.core.__destructure_map(map__29321);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29321__$1,cljs.core.cst$kw$state);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(state,cljs.core.cst$kw$searching);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_quantity_DASH_multiplier,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$_LT__DASH_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_selected_DASH_items], null),(function (selected_items,p__29322){
var vec__29323 = p__29322;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29323,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29323,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(selected_items,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item_index,cljs.core.cst$kw$quantity_DASH_multiplier], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_selected_DASH_items_DASH_summary,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$_LT__DASH_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_num_DASH_selected_DASH_items], null),(function (num_selected_items){
if((num_selected_items > (1))){
var resolved_items = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29326_SHARP_){
return cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_resolved_DASH_selected_DASH_item,p1__29326_SHARP_], null)));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(num_selected_items));
return (nw_calculator.business_logic.merge_items.cljs$core$IFn$_invoke$arity$1 ? nw_calculator.business_logic.merge_items.cljs$core$IFn$_invoke$arity$1(resolved_items) : nw_calculator.business_logic.merge_items.call(null,resolved_items));
} else {
return null;
}
})], 0));
