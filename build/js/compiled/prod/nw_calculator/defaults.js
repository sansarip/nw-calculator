// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('nw_calculator.defaults');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('compound2.core');
nw_calculator.defaults.items_index = (function (){var pi14569 = (function (){var G__14576 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([compound2.core.primary_defaults,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,cljs.core.cst$kw$by_DASH_id,cljs.core.cst$kw$index_DASH_type,cljs.core.cst$kw$one_DASH_to_DASH_one,cljs.core.cst$kw$kfn,cljs.core.cst$kw$id,cljs.core.cst$kw$on_DASH_conflict,(function (a,_){
return a;
})], null)], 0));
return (compound2.core.indexer.cljs$core$IFn$_invoke$arity$1 ? compound2.core.indexer.cljs$core$IFn$_invoke$arity$1(G__14576) : compound2.core.indexer.call(null,G__14576));
})();
if((((!((pi14569 == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === pi14569.compound2$core$PrimaryIndex$))))?true:(((!pi14569.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(compound2.core.PrimaryIndex,pi14569):false)):cljs.core.native_satisfies_QMARK_(compound2.core.PrimaryIndex,pi14569))){
} else {
throw (new Error(["Assert failed: ","Firsi index musi be a primary index","\n","(clojure.core/satisfies? compound2.core/PrimaryIndex pi14569)"].join('')));
}

return cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$sym$compound2$core_SLASH_add_DASH_items,(function (m14571,xs__14411__auto__){
var px14570 = compound2.core.before(pi14569,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m14571,compound2.core.id(pi14569)));
var G__14581 = xs__14411__auto__;
var vec__14582 = G__14581;
var seq__14583 = cljs.core.seq(vec__14582);
var first__14584 = cljs.core.first(seq__14583);
var seq__14583__$1 = cljs.core.next(seq__14583);
var x14572 = first__14584;
var more__14412__auto__ = seq__14583__$1;
var xs__14411__auto____$1 = vec__14582;
var px14570__$1 = px14570;
var G__14581__$1 = G__14581;
while(true){
var px14570__$2 = px14570__$1;
var vec__14585 = G__14581__$1;
var seq__14586 = cljs.core.seq(vec__14585);
var first__14587 = cljs.core.first(seq__14586);
var seq__14586__$1 = cljs.core.next(seq__14586);
var x14572__$1 = first__14587;
var more__14412__auto____$1 = seq__14586__$1;
var xs__14411__auto____$2 = vec__14585;
if(cljs.core.seq(xs__14411__auto____$2)){
var k__14413__auto__ = compound2.core.extract_key(pi14569,x14572__$1);
var ex14574 = compound2.core.get_by_key(pi14569,px14570__$2,k__14413__auto__);
if(cljs.core.truth_(ex14574)){
var new14575 = compound2.core.on_conflict(pi14569,ex14574,x14572__$1);
var G__14598 = compound2.core.index(pi14569,px14570__$2,k__14413__auto__,new14575);
var G__14599 = more__14412__auto____$1;
px14570__$1 = G__14598;
G__14581__$1 = G__14599;
continue;
} else {
var G__14600 = compound2.core.index(pi14569,px14570__$2,k__14413__auto__,x14572__$1);
var G__14601 = more__14412__auto____$1;
px14570__$1 = G__14600;
G__14581__$1 = G__14601;
continue;
}
} else {
return cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([compound2.core.id(pi14569),compound2.core.after(pi14569,px14570__$2)]),cljs.core.meta(m14571));
}
break;
}
}),cljs.core.cst$sym$compound2$core_SLASH_remove_DASH_keys,(function (m14571,ks__14414__auto__){
var px14570 = compound2.core.before(pi14569,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m14571,compound2.core.id(pi14569)));
var G__14591 = ks__14414__auto__;
var vec__14592 = G__14591;
var seq__14593 = cljs.core.seq(vec__14592);
var first__14594 = cljs.core.first(seq__14593);
var seq__14593__$1 = cljs.core.next(seq__14593);
var k14573 = first__14594;
var more__14412__auto__ = seq__14593__$1;
var ks__14414__auto____$1 = vec__14592;
var px14570__$1 = px14570;
var G__14591__$1 = G__14591;
while(true){
var px14570__$2 = px14570__$1;
var vec__14595 = G__14591__$1;
var seq__14596 = cljs.core.seq(vec__14595);
var first__14597 = cljs.core.first(seq__14596);
var seq__14596__$1 = cljs.core.next(seq__14596);
var k14573__$1 = first__14597;
var more__14412__auto____$1 = seq__14596__$1;
var ks__14414__auto____$2 = vec__14595;
if(cljs.core.seq(ks__14414__auto____$2)){
var temp__5751__auto__ = compound2.core.get_by_key(pi14569,px14570__$2,k14573__$1);
if(cljs.core.truth_(temp__5751__auto__)){
var ex14574 = temp__5751__auto__;
var G__14602 = compound2.core.unindex(pi14569,px14570__$2,k14573__$1,ex14574);
var G__14603 = more__14412__auto____$1;
px14570__$1 = G__14602;
G__14591__$1 = G__14603;
continue;
} else {
var G__14604 = px14570__$2;
var G__14605 = more__14412__auto____$1;
px14570__$1 = G__14604;
G__14591__$1 = G__14605;
continue;
}
} else {
return cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([compound2.core.id(pi14569),compound2.core.after(pi14569,px14570__$2)]),cljs.core.meta(m14571));
}
break;
}
}),cljs.core.cst$sym$compound2$core_SLASH_items,(function (m14571){
return compound2.core.get_all(pi14569,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m14571,compound2.core.id(pi14569)));
})], null));
})();
nw_calculator.defaults.empty_item = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ingredients,cljs.core.PersistentVector.EMPTY], null);
nw_calculator.defaults.empty_selected_item = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$item,nw_calculator.defaults.empty_item,cljs.core.cst$kw$selected_DASH_options,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$quantity_DASH_multiplier,(1)], null);
nw_calculator.defaults.default_db = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$state,cljs.core.cst$kw$loading,cljs.core.cst$kw$items,nw_calculator.defaults.items_index,cljs.core.cst$kw$selected_DASH_items,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.defaults.empty_selected_item], null),cljs.core.cst$kw$search_DASH_results,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null)], null);
