// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('nw_calculator.defaults');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('compound2.core');
nw_calculator.defaults.items_index = (function (){var pi22655 = (function (){var G__22662 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([compound2.core.primary_defaults,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,cljs.core.cst$kw$by_DASH_id,cljs.core.cst$kw$index_DASH_type,cljs.core.cst$kw$one_DASH_to_DASH_one,cljs.core.cst$kw$kfn,cljs.core.cst$kw$id,cljs.core.cst$kw$on_DASH_conflict,(function (a,_){
return a;
})], null)], 0));
return (compound2.core.indexer.cljs$core$IFn$_invoke$arity$1 ? compound2.core.indexer.cljs$core$IFn$_invoke$arity$1(G__22662) : compound2.core.indexer.call(null,G__22662));
})();
if((((!((pi22655 == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === pi22655.compound2$core$PrimaryIndex$))))?true:(((!pi22655.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(compound2.core.PrimaryIndex,pi22655):false)):cljs.core.native_satisfies_QMARK_(compound2.core.PrimaryIndex,pi22655))){
} else {
throw (new Error(["Assert failed: ","Firsi index musi be a primary index","\n","(clojure.core/satisfies? compound2.core/PrimaryIndex pi22655)"].join('')));
}

return cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$sym$compound2$core_SLASH_add_DASH_items,(function (m22657,xs__22497__auto__){
var px22656 = compound2.core.before(pi22655,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m22657,compound2.core.id(pi22655)));
var G__22667 = xs__22497__auto__;
var vec__22668 = G__22667;
var seq__22669 = cljs.core.seq(vec__22668);
var first__22670 = cljs.core.first(seq__22669);
var seq__22669__$1 = cljs.core.next(seq__22669);
var x22658 = first__22670;
var more__22498__auto__ = seq__22669__$1;
var xs__22497__auto____$1 = vec__22668;
var px22656__$1 = px22656;
var G__22667__$1 = G__22667;
while(true){
var px22656__$2 = px22656__$1;
var vec__22671 = G__22667__$1;
var seq__22672 = cljs.core.seq(vec__22671);
var first__22673 = cljs.core.first(seq__22672);
var seq__22672__$1 = cljs.core.next(seq__22672);
var x22658__$1 = first__22673;
var more__22498__auto____$1 = seq__22672__$1;
var xs__22497__auto____$2 = vec__22671;
if(cljs.core.seq(xs__22497__auto____$2)){
var k__22499__auto__ = compound2.core.extract_key(pi22655,x22658__$1);
var ex22660 = compound2.core.get_by_key(pi22655,px22656__$2,k__22499__auto__);
if(cljs.core.truth_(ex22660)){
var new22661 = compound2.core.on_conflict(pi22655,ex22660,x22658__$1);
var G__22684 = compound2.core.index(pi22655,px22656__$2,k__22499__auto__,new22661);
var G__22685 = more__22498__auto____$1;
px22656__$1 = G__22684;
G__22667__$1 = G__22685;
continue;
} else {
var G__22686 = compound2.core.index(pi22655,px22656__$2,k__22499__auto__,x22658__$1);
var G__22687 = more__22498__auto____$1;
px22656__$1 = G__22686;
G__22667__$1 = G__22687;
continue;
}
} else {
return cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([compound2.core.id(pi22655),compound2.core.after(pi22655,px22656__$2)]),cljs.core.meta(m22657));
}
break;
}
}),cljs.core.cst$sym$compound2$core_SLASH_remove_DASH_keys,(function (m22657,ks__22500__auto__){
var px22656 = compound2.core.before(pi22655,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m22657,compound2.core.id(pi22655)));
var G__22677 = ks__22500__auto__;
var vec__22678 = G__22677;
var seq__22679 = cljs.core.seq(vec__22678);
var first__22680 = cljs.core.first(seq__22679);
var seq__22679__$1 = cljs.core.next(seq__22679);
var k22659 = first__22680;
var more__22498__auto__ = seq__22679__$1;
var ks__22500__auto____$1 = vec__22678;
var px22656__$1 = px22656;
var G__22677__$1 = G__22677;
while(true){
var px22656__$2 = px22656__$1;
var vec__22681 = G__22677__$1;
var seq__22682 = cljs.core.seq(vec__22681);
var first__22683 = cljs.core.first(seq__22682);
var seq__22682__$1 = cljs.core.next(seq__22682);
var k22659__$1 = first__22683;
var more__22498__auto____$1 = seq__22682__$1;
var ks__22500__auto____$2 = vec__22681;
if(cljs.core.seq(ks__22500__auto____$2)){
var temp__5751__auto__ = compound2.core.get_by_key(pi22655,px22656__$2,k22659__$1);
if(cljs.core.truth_(temp__5751__auto__)){
var ex22660 = temp__5751__auto__;
var G__22688 = compound2.core.unindex(pi22655,px22656__$2,k22659__$1,ex22660);
var G__22689 = more__22498__auto____$1;
px22656__$1 = G__22688;
G__22677__$1 = G__22689;
continue;
} else {
var G__22690 = px22656__$2;
var G__22691 = more__22498__auto____$1;
px22656__$1 = G__22690;
G__22677__$1 = G__22691;
continue;
}
} else {
return cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([compound2.core.id(pi22655),compound2.core.after(pi22655,px22656__$2)]),cljs.core.meta(m22657));
}
break;
}
}),cljs.core.cst$sym$compound2$core_SLASH_items,(function (m22657){
return compound2.core.get_all(pi22655,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m22657,compound2.core.id(pi22655)));
})], null));
})();
nw_calculator.defaults.empty_selected_item_ref = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$selected_DASH_options,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$quantity_DASH_multiplier,(1)], null);
nw_calculator.defaults.default_db = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$state,cljs.core.cst$kw$loading,cljs.core.cst$kw$items,nw_calculator.defaults.items_index,cljs.core.cst$kw$selected_DASH_item_DASH_refs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.defaults.empty_selected_item_ref], null),cljs.core.cst$kw$search_DASH_results,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null),cljs.core.cst$kw$additional_DASH_item_DASH_bonuses_QMARK_,true], null);
