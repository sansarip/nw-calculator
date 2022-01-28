// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('nw_calculator.subs');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('nw_calculator.calculations');
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_search_DASH_results,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p__31118,p__31119){
var map__31120 = p__31118;
var map__31120__$1 = cljs.core.__destructure_map(map__31120);
var search_results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31120__$1,cljs.core.cst$kw$search_DASH_results);
var vec__31121 = p__31119;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31121,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31121,(1),null);
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
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_selected_DASH_option,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$_LT__DASH_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_selected_DASH_item_DASH_refs], null),(function (selected_item_refs,p__31124){
var vec__31125 = p__31124;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31125,(0),null);
var vec__31128 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31125,(1),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31128,(0),null);
var option_path = vec__31128;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(selected_item_refs,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [item_index,cljs.core.cst$kw$selected_DASH_options,option_path], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_trade_DASH_skill_DASH_bonuses,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return cljs.core.cst$kw$trade_DASH_skill_DASH_bonuses.cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_trade_DASH_skill_DASH_bonus,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$_LT__DASH_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_trade_DASH_skill_DASH_bonuses], null),(function (tsb,p__31131){
var vec__31132 = p__31131;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31132,(0),null);
var skill = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31132,(1),null);
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(tsb,skill,(0));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_resolved_DASH_selected_DASH_item,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$_LT__DASH_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_selected_DASH_item_DASH_refs], null),cljs.core.cst$kw$_LT__DASH_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_items_DASH_by_DASH_id], null),cljs.core.cst$kw$_LT__DASH_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_trade_DASH_skill_DASH_bonuses], null),cljs.core.cst$kw$_LT__DASH_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_additional_DASH_item_DASH_bonuses_QMARK_], null),(function (p__31135,p__31136){
var vec__31137 = p__31135;
var selected_item_refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31137,(0),null);
var items_by_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31137,(1),null);
var trade_skill_bonuses = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31137,(2),null);
var additional_item_bonuses_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31137,(3),null);
var vec__31140 = p__31136;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31140,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31140,(1),null);
var map__31143 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(selected_item_refs,item_index);
var map__31143__$1 = cljs.core.__destructure_map(map__31143);
var selected_item_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31143__$1,cljs.core.cst$kw$id);
var quantity_multiplier = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31143__$1,cljs.core.cst$kw$quantity_DASH_multiplier);
var selected_options = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31143__$1,cljs.core.cst$kw$selected_DASH_options,cljs.core.PersistentArrayMap.EMPTY);
var map__31144 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(items_by_id,selected_item_id);
var map__31144__$1 = cljs.core.__destructure_map(map__31144);
var item = map__31144__$1;
var quantity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31144__$1,cljs.core.cst$kw$quantity);
var xp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31144__$1,cljs.core.cst$kw$xp);
var or__4212__auto__ = (function (){var G__31145 = item;
var G__31145__$1 = (((G__31145 == null))?null:cljs.core.not_empty(G__31145));
var G__31145__$2 = (((G__31145__$1 == null))?null:(function (){var G__31146 = G__31145__$1;
var G__31147 = items_by_id;
var G__31148 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item_index], null);
var G__31149 = selected_options;
return (nw_calculator.calculations.resolve_refs.cljs$core$IFn$_invoke$arity$4 ? nw_calculator.calculations.resolve_refs.cljs$core$IFn$_invoke$arity$4(G__31146,G__31147,G__31148,G__31149) : nw_calculator.calculations.resolve_refs.call(null,G__31146,G__31147,G__31148,G__31149));
})());
var G__31145__$3 = (((G__31145__$2 == null))?null:(function (){var G__31150 = G__31145__$2;
var G__31151 = items_by_id;
var G__31152 = trade_skill_bonuses;
var G__31153 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$additional_DASH_item_DASH_bonuses_QMARK_,additional_item_bonuses_QMARK_,cljs.core.cst$kw$multiplier,quantity_multiplier], null);
return (nw_calculator.calculations.multiply_quantities.cljs$core$IFn$_invoke$arity$4 ? nw_calculator.calculations.multiply_quantities.cljs$core$IFn$_invoke$arity$4(G__31150,G__31151,G__31152,G__31153) : nw_calculator.calculations.multiply_quantities.call(null,G__31150,G__31151,G__31152,G__31153));
})());
if((G__31145__$3 == null)){
return null;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__31145__$3,cljs.core.cst$kw$quantity,quantity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$xp,(xp * quantity_multiplier)], 0));
}
})();
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ingredients,cljs.core.PersistentVector.EMPTY], null);
}
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_loading_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p__31154){
var map__31155 = p__31154;
var map__31155__$1 = cljs.core.__destructure_map(map__31155);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31155__$1,cljs.core.cst$kw$state);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(state,cljs.core.cst$kw$loading);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_ready_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p__31156){
var map__31157 = p__31156;
var map__31157__$1 = cljs.core.__destructure_map(map__31157);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31157__$1,cljs.core.cst$kw$state);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(state,cljs.core.cst$kw$start);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_searching_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p__31158){
var map__31159 = p__31158;
var map__31159__$1 = cljs.core.__destructure_map(map__31159);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31159__$1,cljs.core.cst$kw$state);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(state,cljs.core.cst$kw$searching);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_quantity_DASH_multiplier,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$_LT__DASH_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_selected_DASH_item_DASH_refs], null),(function (selected_items,p__31160){
var vec__31161 = p__31160;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31161,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31161,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(selected_items,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item_index,cljs.core.cst$kw$quantity_DASH_multiplier], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_selected_DASH_items_DASH_summary,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$_LT__DASH_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_num_DASH_selected_DASH_item_DASH_refs], null),(function (num_selected_items){
if((num_selected_items > (1))){
var resolved_items = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__31164_SHARP_){
return cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_resolved_DASH_selected_DASH_item,p1__31164_SHARP_], null)));
})),cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name)),cljs.core.range.cljs$core$IFn$_invoke$arity$1(num_selected_items));
return nw_calculator.calculations.merge_items(resolved_items);
} else {
return null;
}
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_additional_DASH_item_DASH_bonuses_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return cljs.core.cst$kw$additional_DASH_item_DASH_bonuses_QMARK_.cljs$core$IFn$_invoke$arity$1(db);
})], 0));
