// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('nw_calculator.defaults');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('compound2.core');
nw_calculator.defaults.items_index = (function (){var pi22656 = (function (){var G__22663 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([compound2.core.primary_defaults,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,cljs.core.cst$kw$by_DASH_id,cljs.core.cst$kw$index_DASH_type,cljs.core.cst$kw$one_DASH_to_DASH_one,cljs.core.cst$kw$kfn,cljs.core.cst$kw$id,cljs.core.cst$kw$on_DASH_conflict,(function (a,_){
return a;
})], null)], 0));
return (compound2.core.indexer.cljs$core$IFn$_invoke$arity$1 ? compound2.core.indexer.cljs$core$IFn$_invoke$arity$1(G__22663) : compound2.core.indexer.call(null,G__22663));
})();
if((((!((pi22656 == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === pi22656.compound2$core$PrimaryIndex$))))?true:(((!pi22656.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(compound2.core.PrimaryIndex,pi22656):false)):cljs.core.native_satisfies_QMARK_(compound2.core.PrimaryIndex,pi22656))){
} else {
throw (new Error(["Assert failed: ","Firsi index musi be a primary index","\n","(clojure.core/satisfies? compound2.core/PrimaryIndex pi22656)"].join('')));
}

return cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$sym$compound2$core_SLASH_add_DASH_items,(function (m22658,xs__22498__auto__){
var px22657 = compound2.core.before(pi22656,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m22658,compound2.core.id(pi22656)));
var G__22668 = xs__22498__auto__;
var vec__22669 = G__22668;
var seq__22670 = cljs.core.seq(vec__22669);
var first__22671 = cljs.core.first(seq__22670);
var seq__22670__$1 = cljs.core.next(seq__22670);
var x22659 = first__22671;
var more__22499__auto__ = seq__22670__$1;
var xs__22498__auto____$1 = vec__22669;
var px22657__$1 = px22657;
var G__22668__$1 = G__22668;
while(true){
var px22657__$2 = px22657__$1;
var vec__22672 = G__22668__$1;
var seq__22673 = cljs.core.seq(vec__22672);
var first__22674 = cljs.core.first(seq__22673);
var seq__22673__$1 = cljs.core.next(seq__22673);
var x22659__$1 = first__22674;
var more__22499__auto____$1 = seq__22673__$1;
var xs__22498__auto____$2 = vec__22672;
if(cljs.core.seq(xs__22498__auto____$2)){
var k__22500__auto__ = compound2.core.extract_key(pi22656,x22659__$1);
var ex22661 = compound2.core.get_by_key(pi22656,px22657__$2,k__22500__auto__);
if(cljs.core.truth_(ex22661)){
var new22662 = compound2.core.on_conflict(pi22656,ex22661,x22659__$1);
var G__22685 = compound2.core.index(pi22656,px22657__$2,k__22500__auto__,new22662);
var G__22686 = more__22499__auto____$1;
px22657__$1 = G__22685;
G__22668__$1 = G__22686;
continue;
} else {
var G__22687 = compound2.core.index(pi22656,px22657__$2,k__22500__auto__,x22659__$1);
var G__22688 = more__22499__auto____$1;
px22657__$1 = G__22687;
G__22668__$1 = G__22688;
continue;
}
} else {
return cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([compound2.core.id(pi22656),compound2.core.after(pi22656,px22657__$2)]),cljs.core.meta(m22658));
}
break;
}
}),cljs.core.cst$sym$compound2$core_SLASH_remove_DASH_keys,(function (m22658,ks__22501__auto__){
var px22657 = compound2.core.before(pi22656,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m22658,compound2.core.id(pi22656)));
var G__22678 = ks__22501__auto__;
var vec__22679 = G__22678;
var seq__22680 = cljs.core.seq(vec__22679);
var first__22681 = cljs.core.first(seq__22680);
var seq__22680__$1 = cljs.core.next(seq__22680);
var k22660 = first__22681;
var more__22499__auto__ = seq__22680__$1;
var ks__22501__auto____$1 = vec__22679;
var px22657__$1 = px22657;
var G__22678__$1 = G__22678;
while(true){
var px22657__$2 = px22657__$1;
var vec__22682 = G__22678__$1;
var seq__22683 = cljs.core.seq(vec__22682);
var first__22684 = cljs.core.first(seq__22683);
var seq__22683__$1 = cljs.core.next(seq__22683);
var k22660__$1 = first__22684;
var more__22499__auto____$1 = seq__22683__$1;
var ks__22501__auto____$2 = vec__22682;
if(cljs.core.seq(ks__22501__auto____$2)){
var temp__5751__auto__ = compound2.core.get_by_key(pi22656,px22657__$2,k22660__$1);
if(cljs.core.truth_(temp__5751__auto__)){
var ex22661 = temp__5751__auto__;
var G__22689 = compound2.core.unindex(pi22656,px22657__$2,k22660__$1,ex22661);
var G__22690 = more__22499__auto____$1;
px22657__$1 = G__22689;
G__22678__$1 = G__22690;
continue;
} else {
var G__22691 = px22657__$2;
var G__22692 = more__22499__auto____$1;
px22657__$1 = G__22691;
G__22678__$1 = G__22692;
continue;
}
} else {
return cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([compound2.core.id(pi22656),compound2.core.after(pi22656,px22657__$2)]),cljs.core.meta(m22658));
}
break;
}
}),cljs.core.cst$sym$compound2$core_SLASH_items,(function (m22658){
return compound2.core.get_all(pi22656,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m22658,compound2.core.id(pi22656)));
})], null));
})();
nw_calculator.defaults.empty_selected_item_ref = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$selected_DASH_options,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$quantity_DASH_multiplier,(1)], null);
nw_calculator.defaults.default_db = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$state,cljs.core.cst$kw$loading,cljs.core.cst$kw$items,nw_calculator.defaults.items_index,cljs.core.cst$kw$selected_DASH_item_DASH_refs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.defaults.empty_selected_item_ref], null),cljs.core.cst$kw$search_DASH_results,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null)], null);
