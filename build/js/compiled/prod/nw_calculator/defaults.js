// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('nw_calculator.defaults');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('compound2.core');
nw_calculator.defaults.items_index = (function (){var pi22666 = (function (){var G__22673 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([compound2.core.primary_defaults,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,cljs.core.cst$kw$by_DASH_id,cljs.core.cst$kw$index_DASH_type,cljs.core.cst$kw$one_DASH_to_DASH_one,cljs.core.cst$kw$kfn,cljs.core.cst$kw$id,cljs.core.cst$kw$on_DASH_conflict,(function (a,_){
return a;
})], null)], 0));
return (compound2.core.indexer.cljs$core$IFn$_invoke$arity$1 ? compound2.core.indexer.cljs$core$IFn$_invoke$arity$1(G__22673) : compound2.core.indexer.call(null,G__22673));
})();
if((((!((pi22666 == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === pi22666.compound2$core$PrimaryIndex$))))?true:(((!pi22666.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(compound2.core.PrimaryIndex,pi22666):false)):cljs.core.native_satisfies_QMARK_(compound2.core.PrimaryIndex,pi22666))){
} else {
throw (new Error(["Assert failed: ","Firsi index musi be a primary index","\n","(clojure.core/satisfies? compound2.core/PrimaryIndex pi22666)"].join('')));
}

return cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$sym$compound2$core_SLASH_add_DASH_items,(function (m22668,xs__22508__auto__){
var px22667 = compound2.core.before(pi22666,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m22668,compound2.core.id(pi22666)));
var G__22678 = xs__22508__auto__;
var vec__22679 = G__22678;
var seq__22680 = cljs.core.seq(vec__22679);
var first__22681 = cljs.core.first(seq__22680);
var seq__22680__$1 = cljs.core.next(seq__22680);
var x22669 = first__22681;
var more__22509__auto__ = seq__22680__$1;
var xs__22508__auto____$1 = vec__22679;
var px22667__$1 = px22667;
var G__22678__$1 = G__22678;
while(true){
var px22667__$2 = px22667__$1;
var vec__22682 = G__22678__$1;
var seq__22683 = cljs.core.seq(vec__22682);
var first__22684 = cljs.core.first(seq__22683);
var seq__22683__$1 = cljs.core.next(seq__22683);
var x22669__$1 = first__22684;
var more__22509__auto____$1 = seq__22683__$1;
var xs__22508__auto____$2 = vec__22682;
if(cljs.core.seq(xs__22508__auto____$2)){
var k__22510__auto__ = compound2.core.extract_key(pi22666,x22669__$1);
var ex22671 = compound2.core.get_by_key(pi22666,px22667__$2,k__22510__auto__);
if(cljs.core.truth_(ex22671)){
var new22672 = compound2.core.on_conflict(pi22666,ex22671,x22669__$1);
var G__22695 = compound2.core.index(pi22666,px22667__$2,k__22510__auto__,new22672);
var G__22696 = more__22509__auto____$1;
px22667__$1 = G__22695;
G__22678__$1 = G__22696;
continue;
} else {
var G__22697 = compound2.core.index(pi22666,px22667__$2,k__22510__auto__,x22669__$1);
var G__22698 = more__22509__auto____$1;
px22667__$1 = G__22697;
G__22678__$1 = G__22698;
continue;
}
} else {
return cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([compound2.core.id(pi22666),compound2.core.after(pi22666,px22667__$2)]),cljs.core.meta(m22668));
}
break;
}
}),cljs.core.cst$sym$compound2$core_SLASH_remove_DASH_keys,(function (m22668,ks__22511__auto__){
var px22667 = compound2.core.before(pi22666,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m22668,compound2.core.id(pi22666)));
var G__22688 = ks__22511__auto__;
var vec__22689 = G__22688;
var seq__22690 = cljs.core.seq(vec__22689);
var first__22691 = cljs.core.first(seq__22690);
var seq__22690__$1 = cljs.core.next(seq__22690);
var k22670 = first__22691;
var more__22509__auto__ = seq__22690__$1;
var ks__22511__auto____$1 = vec__22689;
var px22667__$1 = px22667;
var G__22688__$1 = G__22688;
while(true){
var px22667__$2 = px22667__$1;
var vec__22692 = G__22688__$1;
var seq__22693 = cljs.core.seq(vec__22692);
var first__22694 = cljs.core.first(seq__22693);
var seq__22693__$1 = cljs.core.next(seq__22693);
var k22670__$1 = first__22694;
var more__22509__auto____$1 = seq__22693__$1;
var ks__22511__auto____$2 = vec__22692;
if(cljs.core.seq(ks__22511__auto____$2)){
var temp__5751__auto__ = compound2.core.get_by_key(pi22666,px22667__$2,k22670__$1);
if(cljs.core.truth_(temp__5751__auto__)){
var ex22671 = temp__5751__auto__;
var G__22699 = compound2.core.unindex(pi22666,px22667__$2,k22670__$1,ex22671);
var G__22700 = more__22509__auto____$1;
px22667__$1 = G__22699;
G__22688__$1 = G__22700;
continue;
} else {
var G__22701 = px22667__$2;
var G__22702 = more__22509__auto____$1;
px22667__$1 = G__22701;
G__22688__$1 = G__22702;
continue;
}
} else {
return cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([compound2.core.id(pi22666),compound2.core.after(pi22666,px22667__$2)]),cljs.core.meta(m22668));
}
break;
}
}),cljs.core.cst$sym$compound2$core_SLASH_items,(function (m22668){
return compound2.core.get_all(pi22666,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m22668,compound2.core.id(pi22666)));
})], null));
})();
nw_calculator.defaults.empty_selected_item_ref = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$selected_DASH_options,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$quantity_DASH_multiplier,(1)], null);
nw_calculator.defaults.default_db = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$state,cljs.core.cst$kw$loading,cljs.core.cst$kw$items,nw_calculator.defaults.items_index,cljs.core.cst$kw$selected_DASH_item_DASH_refs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.defaults.empty_selected_item_ref], null),cljs.core.cst$kw$search_DASH_results,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null),cljs.core.cst$kw$additional_DASH_item_DASH_bonuses_QMARK_,true], null);
