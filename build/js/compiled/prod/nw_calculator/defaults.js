// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('nw_calculator.defaults');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('compound2.core');
nw_calculator.defaults.items_index = (function (){var pi22667 = (function (){var G__22674 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([compound2.core.primary_defaults,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,cljs.core.cst$kw$by_DASH_id,cljs.core.cst$kw$index_DASH_type,cljs.core.cst$kw$one_DASH_to_DASH_one,cljs.core.cst$kw$kfn,cljs.core.cst$kw$id,cljs.core.cst$kw$on_DASH_conflict,(function (a,_){
return a;
})], null)], 0));
return (compound2.core.indexer.cljs$core$IFn$_invoke$arity$1 ? compound2.core.indexer.cljs$core$IFn$_invoke$arity$1(G__22674) : compound2.core.indexer.call(null,G__22674));
})();
if((((!((pi22667 == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === pi22667.compound2$core$PrimaryIndex$))))?true:(((!pi22667.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(compound2.core.PrimaryIndex,pi22667):false)):cljs.core.native_satisfies_QMARK_(compound2.core.PrimaryIndex,pi22667))){
} else {
throw (new Error(["Assert failed: ","Firsi index musi be a primary index","\n","(clojure.core/satisfies? compound2.core/PrimaryIndex pi22667)"].join('')));
}

return cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$sym$compound2$core_SLASH_add_DASH_items,(function (m22669,xs__22509__auto__){
var px22668 = compound2.core.before(pi22667,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m22669,compound2.core.id(pi22667)));
var G__22679 = xs__22509__auto__;
var vec__22680 = G__22679;
var seq__22681 = cljs.core.seq(vec__22680);
var first__22682 = cljs.core.first(seq__22681);
var seq__22681__$1 = cljs.core.next(seq__22681);
var x22670 = first__22682;
var more__22510__auto__ = seq__22681__$1;
var xs__22509__auto____$1 = vec__22680;
var px22668__$1 = px22668;
var G__22679__$1 = G__22679;
while(true){
var px22668__$2 = px22668__$1;
var vec__22683 = G__22679__$1;
var seq__22684 = cljs.core.seq(vec__22683);
var first__22685 = cljs.core.first(seq__22684);
var seq__22684__$1 = cljs.core.next(seq__22684);
var x22670__$1 = first__22685;
var more__22510__auto____$1 = seq__22684__$1;
var xs__22509__auto____$2 = vec__22683;
if(cljs.core.seq(xs__22509__auto____$2)){
var k__22511__auto__ = compound2.core.extract_key(pi22667,x22670__$1);
var ex22672 = compound2.core.get_by_key(pi22667,px22668__$2,k__22511__auto__);
if(cljs.core.truth_(ex22672)){
var new22673 = compound2.core.on_conflict(pi22667,ex22672,x22670__$1);
var G__22696 = compound2.core.index(pi22667,px22668__$2,k__22511__auto__,new22673);
var G__22697 = more__22510__auto____$1;
px22668__$1 = G__22696;
G__22679__$1 = G__22697;
continue;
} else {
var G__22698 = compound2.core.index(pi22667,px22668__$2,k__22511__auto__,x22670__$1);
var G__22699 = more__22510__auto____$1;
px22668__$1 = G__22698;
G__22679__$1 = G__22699;
continue;
}
} else {
return cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([compound2.core.id(pi22667),compound2.core.after(pi22667,px22668__$2)]),cljs.core.meta(m22669));
}
break;
}
}),cljs.core.cst$sym$compound2$core_SLASH_remove_DASH_keys,(function (m22669,ks__22512__auto__){
var px22668 = compound2.core.before(pi22667,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m22669,compound2.core.id(pi22667)));
var G__22689 = ks__22512__auto__;
var vec__22690 = G__22689;
var seq__22691 = cljs.core.seq(vec__22690);
var first__22692 = cljs.core.first(seq__22691);
var seq__22691__$1 = cljs.core.next(seq__22691);
var k22671 = first__22692;
var more__22510__auto__ = seq__22691__$1;
var ks__22512__auto____$1 = vec__22690;
var px22668__$1 = px22668;
var G__22689__$1 = G__22689;
while(true){
var px22668__$2 = px22668__$1;
var vec__22693 = G__22689__$1;
var seq__22694 = cljs.core.seq(vec__22693);
var first__22695 = cljs.core.first(seq__22694);
var seq__22694__$1 = cljs.core.next(seq__22694);
var k22671__$1 = first__22695;
var more__22510__auto____$1 = seq__22694__$1;
var ks__22512__auto____$2 = vec__22693;
if(cljs.core.seq(ks__22512__auto____$2)){
var temp__5751__auto__ = compound2.core.get_by_key(pi22667,px22668__$2,k22671__$1);
if(cljs.core.truth_(temp__5751__auto__)){
var ex22672 = temp__5751__auto__;
var G__22700 = compound2.core.unindex(pi22667,px22668__$2,k22671__$1,ex22672);
var G__22701 = more__22510__auto____$1;
px22668__$1 = G__22700;
G__22689__$1 = G__22701;
continue;
} else {
var G__22702 = px22668__$2;
var G__22703 = more__22510__auto____$1;
px22668__$1 = G__22702;
G__22689__$1 = G__22703;
continue;
}
} else {
return cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([compound2.core.id(pi22667),compound2.core.after(pi22667,px22668__$2)]),cljs.core.meta(m22669));
}
break;
}
}),cljs.core.cst$sym$compound2$core_SLASH_items,(function (m22669){
return compound2.core.get_all(pi22667,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m22669,compound2.core.id(pi22667)));
})], null));
})();
nw_calculator.defaults.empty_selected_item_ref = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$selected_DASH_options,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$quantity_DASH_multiplier,(1)], null);
nw_calculator.defaults.default_db = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$state,cljs.core.cst$kw$loading,cljs.core.cst$kw$items,nw_calculator.defaults.items_index,cljs.core.cst$kw$selected_DASH_item_DASH_refs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.defaults.empty_selected_item_ref], null),cljs.core.cst$kw$search_DASH_results,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null),cljs.core.cst$kw$additional_DASH_item_DASH_bonuses_QMARK_,true], null);
