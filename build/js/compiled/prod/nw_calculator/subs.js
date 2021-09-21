// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('nw_calculator.subs');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('nw_calculator.utilities');
goog.require('nw_calculator.defaults');
goog.require('compound2.core');
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_search_DASH_results,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p__29232,p__29233){
var map__29234 = p__29232;
var map__29234__$1 = cljs.core.__destructure_map(map__29234);
var search_results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29234__$1,cljs.core.cst$kw$search_DASH_results);
var vec__29235 = p__29233;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29235,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29235,(1),null);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(search_results,item_index);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_selected_DASH_items,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$selected_DASH_items], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_num_DASH_selected_DASH_items,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$_LT__DASH_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_selected_DASH_items], null),(function (selected_items){
return cljs.core.count(selected_items);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_items_DASH_by_DASH_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return cljs.core.cst$kw$by_DASH_id.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$items.cljs$core$IFn$_invoke$arity$1(db));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_selected_DASH_option,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$_LT__DASH_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_selected_DASH_items], null),(function (selected_items,p__29238){
var vec__29239 = p__29238;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29239,(0),null);
var vec__29242 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29239,(1),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29242,(0),null);
var option_path = vec__29242;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(selected_items,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [item_index,cljs.core.cst$kw$selected_DASH_options,option_path], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_resolved_DASH_selected_DASH_item,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$_LT__DASH_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_selected_DASH_items], null),cljs.core.cst$kw$_LT__DASH_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_items_DASH_by_DASH_id], null),(function (p__29245,p__29246){
var vec__29247 = p__29245;
var selected_items = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29247,(0),null);
var items_by_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29247,(1),null);
var vec__29250 = p__29246;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29250,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29250,(1),null);
var map__29253 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(selected_items,item_index);
var map__29253__$1 = cljs.core.__destructure_map(map__29253);
var map__29254 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29253__$1,cljs.core.cst$kw$item);
var map__29254__$1 = cljs.core.__destructure_map(map__29254);
var selected_item_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29254__$1,cljs.core.cst$kw$id);
var quantity_multiplier = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29253__$1,cljs.core.cst$kw$quantity_DASH_multiplier);
var selected_options = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29253__$1,cljs.core.cst$kw$selected_DASH_options,cljs.core.PersistentArrayMap.EMPTY);
var map__29255 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(items_by_id,selected_item_id);
var map__29255__$1 = cljs.core.__destructure_map(map__29255);
var item = map__29255__$1;
var quantity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29255__$1,cljs.core.cst$kw$quantity);
var xp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29255__$1,cljs.core.cst$kw$xp);
var or__4212__auto__ = (function (){var G__29256 = item;
var G__29256__$1 = (((G__29256 == null))?null:cljs.core.not_empty(G__29256));
var G__29256__$2 = (((G__29256__$1 == null))?null:(function (){var G__29257 = G__29256__$1;
var G__29258 = items_by_id;
var G__29259 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item_index], null);
var G__29260 = selected_options;
return (nw_calculator.utilities.resolve_refs.cljs$core$IFn$_invoke$arity$4 ? nw_calculator.utilities.resolve_refs.cljs$core$IFn$_invoke$arity$4(G__29257,G__29258,G__29259,G__29260) : nw_calculator.utilities.resolve_refs.call(null,G__29257,G__29258,G__29259,G__29260));
})());
var G__29256__$3 = (((G__29256__$2 == null))?null:(nw_calculator.utilities.multiply_quantities.cljs$core$IFn$_invoke$arity$3 ? nw_calculator.utilities.multiply_quantities.cljs$core$IFn$_invoke$arity$3(G__29256__$2,items_by_id,quantity_multiplier) : nw_calculator.utilities.multiply_quantities.call(null,G__29256__$2,items_by_id,quantity_multiplier)));
if((G__29256__$3 == null)){
return null;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__29256__$3,cljs.core.cst$kw$quantity,quantity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$xp,(xp * quantity_multiplier)], 0));
}
})();
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ingredients,cljs.core.PersistentVector.EMPTY], null);
}
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_item_DASH_in_DASH_resolved_DASH_selected_DASH_item,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (_db,p__29262){
var vec__29263 = p__29262;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29263,(0),null);
var vec__29266 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29263,(1),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29266,(0),null);
var item_path = vec__29266;
return cljs.core.some((function (p1__29261_SHARP_){
if(cljs.core.truth_((function (){var G__29270 = cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(p1__29261_SHARP_);
var fexpr__29269 = cljs.core.PersistentHashSet.createAsIfByAssoc([item_path]);
return (fexpr__29269.cljs$core$IFn$_invoke$arity$1 ? fexpr__29269.cljs$core$IFn$_invoke$arity$1(G__29270) : fexpr__29269.call(null,G__29270));
})())){
return p1__29261_SHARP_;
} else {
return null;
}
}),cljs.core.tree_seq(nw_calculator.utilities.options_or_ingredients,nw_calculator.utilities.options_or_ingredients,cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_resolved_DASH_selected_DASH_item,item_index], null)))));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_loading_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p__29271){
var map__29272 = p__29271;
var map__29272__$1 = cljs.core.__destructure_map(map__29272);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29272__$1,cljs.core.cst$kw$state);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(state,cljs.core.cst$kw$loading);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_ready_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p__29273){
var map__29274 = p__29273;
var map__29274__$1 = cljs.core.__destructure_map(map__29274);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29274__$1,cljs.core.cst$kw$state);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(state,cljs.core.cst$kw$start);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_searching_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p__29275){
var map__29276 = p__29275;
var map__29276__$1 = cljs.core.__destructure_map(map__29276);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29276__$1,cljs.core.cst$kw$state);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(state,cljs.core.cst$kw$searching);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_quantity_DASH_multiplier,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$_LT__DASH_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_selected_DASH_items], null),(function (selected_items,p__29277){
var vec__29278 = p__29277;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29278,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29278,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(selected_items,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item_index,cljs.core.cst$kw$quantity_DASH_multiplier], null));
})], 0));
