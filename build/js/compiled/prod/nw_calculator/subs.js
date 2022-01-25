// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('nw_calculator.subs');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('nw_calculator.calculations');
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_search_DASH_results,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p__31106,p__31107){
var map__31108 = p__31106;
var map__31108__$1 = cljs.core.__destructure_map(map__31108);
var search_results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31108__$1,cljs.core.cst$kw$search_DASH_results);
var vec__31109 = p__31107;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31109,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31109,(1),null);
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
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_selected_DASH_option,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$_LT__DASH_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_selected_DASH_item_DASH_refs], null),(function (selected_item_refs,p__31112){
var vec__31113 = p__31112;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31113,(0),null);
var vec__31116 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31113,(1),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31116,(0),null);
var option_path = vec__31116;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(selected_item_refs,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [item_index,cljs.core.cst$kw$selected_DASH_options,option_path], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_trade_DASH_skill_DASH_bonuses,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return cljs.core.cst$kw$trade_DASH_skill_DASH_bonuses.cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_trade_DASH_skill_DASH_bonus,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$_LT__DASH_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_trade_DASH_skill_DASH_bonuses], null),(function (tsb,p__31119){
var vec__31120 = p__31119;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31120,(0),null);
var skill = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31120,(1),null);
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(tsb,skill,(0));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_resolved_DASH_selected_DASH_item,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$_LT__DASH_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_selected_DASH_item_DASH_refs], null),cljs.core.cst$kw$_LT__DASH_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_items_DASH_by_DASH_id], null),cljs.core.cst$kw$_LT__DASH_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_trade_DASH_skill_DASH_bonuses], null),cljs.core.cst$kw$_LT__DASH_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_additional_DASH_item_DASH_bonuses_QMARK_], null),(function (p__31123,p__31124){
var vec__31125 = p__31123;
var selected_item_refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31125,(0),null);
var items_by_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31125,(1),null);
var trade_skill_bonuses = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31125,(2),null);
var additional_item_bonuses_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31125,(3),null);
var vec__31128 = p__31124;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31128,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31128,(1),null);
var map__31131 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(selected_item_refs,item_index);
var map__31131__$1 = cljs.core.__destructure_map(map__31131);
var selected_item_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31131__$1,cljs.core.cst$kw$id);
var quantity_multiplier = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31131__$1,cljs.core.cst$kw$quantity_DASH_multiplier);
var selected_options = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31131__$1,cljs.core.cst$kw$selected_DASH_options,cljs.core.PersistentArrayMap.EMPTY);
var map__31132 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(items_by_id,selected_item_id);
var map__31132__$1 = cljs.core.__destructure_map(map__31132);
var item = map__31132__$1;
var quantity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31132__$1,cljs.core.cst$kw$quantity);
var xp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31132__$1,cljs.core.cst$kw$xp);
var or__4212__auto__ = (function (){var G__31133 = item;
var G__31133__$1 = (((G__31133 == null))?null:cljs.core.not_empty(G__31133));
var G__31133__$2 = (((G__31133__$1 == null))?null:(function (){var G__31134 = G__31133__$1;
var G__31135 = items_by_id;
var G__31136 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item_index], null);
var G__31137 = selected_options;
return (nw_calculator.calculations.resolve_refs.cljs$core$IFn$_invoke$arity$4 ? nw_calculator.calculations.resolve_refs.cljs$core$IFn$_invoke$arity$4(G__31134,G__31135,G__31136,G__31137) : nw_calculator.calculations.resolve_refs.call(null,G__31134,G__31135,G__31136,G__31137));
})());
var G__31133__$3 = (((G__31133__$2 == null))?null:(nw_calculator.calculations.multiply_quantities.cljs$core$IFn$_invoke$arity$5 ? nw_calculator.calculations.multiply_quantities.cljs$core$IFn$_invoke$arity$5(G__31133__$2,items_by_id,trade_skill_bonuses,additional_item_bonuses_QMARK_,quantity_multiplier) : nw_calculator.calculations.multiply_quantities.call(null,G__31133__$2,items_by_id,trade_skill_bonuses,additional_item_bonuses_QMARK_,quantity_multiplier)));
if((G__31133__$3 == null)){
return null;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__31133__$3,cljs.core.cst$kw$quantity,quantity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$xp,(xp * quantity_multiplier)], 0));
}
})();
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ingredients,cljs.core.PersistentVector.EMPTY], null);
}
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_loading_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p__31138){
var map__31139 = p__31138;
var map__31139__$1 = cljs.core.__destructure_map(map__31139);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31139__$1,cljs.core.cst$kw$state);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(state,cljs.core.cst$kw$loading);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_ready_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p__31140){
var map__31141 = p__31140;
var map__31141__$1 = cljs.core.__destructure_map(map__31141);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31141__$1,cljs.core.cst$kw$state);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(state,cljs.core.cst$kw$start);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_searching_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p__31142){
var map__31143 = p__31142;
var map__31143__$1 = cljs.core.__destructure_map(map__31143);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31143__$1,cljs.core.cst$kw$state);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(state,cljs.core.cst$kw$searching);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_quantity_DASH_multiplier,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$_LT__DASH_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_selected_DASH_item_DASH_refs], null),(function (selected_items,p__31144){
var vec__31145 = p__31144;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31145,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31145,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(selected_items,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item_index,cljs.core.cst$kw$quantity_DASH_multiplier], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_selected_DASH_items_DASH_summary,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$_LT__DASH_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_num_DASH_selected_DASH_item_DASH_refs], null),(function (num_selected_items){
if((num_selected_items > (1))){
var resolved_items = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__31148_SHARP_){
return cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_resolved_DASH_selected_DASH_item,p1__31148_SHARP_], null)));
})),cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name)),cljs.core.range.cljs$core$IFn$_invoke$arity$1(num_selected_items));
return nw_calculator.calculations.merge_items(resolved_items);
} else {
return null;
}
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_additional_DASH_item_DASH_bonuses_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return cljs.core.cst$kw$additional_DASH_item_DASH_bonuses_QMARK_.cljs$core$IFn$_invoke$arity$1(db);
})], 0));
