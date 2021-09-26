// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('nw_calculator.defaults');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('compound2.core');
nw_calculator.defaults.items_index = (function (){var pi22654 = (function (){var G__22661 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([compound2.core.primary_defaults,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,cljs.core.cst$kw$by_DASH_id,cljs.core.cst$kw$index_DASH_type,cljs.core.cst$kw$one_DASH_to_DASH_one,cljs.core.cst$kw$kfn,cljs.core.cst$kw$id,cljs.core.cst$kw$on_DASH_conflict,(function (a,_){
return a;
})], null)], 0));
return (compound2.core.indexer.cljs$core$IFn$_invoke$arity$1 ? compound2.core.indexer.cljs$core$IFn$_invoke$arity$1(G__22661) : compound2.core.indexer.call(null,G__22661));
})();
if((((!((pi22654 == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === pi22654.compound2$core$PrimaryIndex$))))?true:(((!pi22654.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(compound2.core.PrimaryIndex,pi22654):false)):cljs.core.native_satisfies_QMARK_(compound2.core.PrimaryIndex,pi22654))){
} else {
throw (new Error(["Assert failed: ","Firsi index musi be a primary index","\n","(clojure.core/satisfies? compound2.core/PrimaryIndex pi22654)"].join('')));
}

return cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$sym$compound2$core_SLASH_add_DASH_items,(function (m22656,xs__22496__auto__){
var px22655 = compound2.core.before(pi22654,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m22656,compound2.core.id(pi22654)));
var G__22666 = xs__22496__auto__;
var vec__22667 = G__22666;
var seq__22668 = cljs.core.seq(vec__22667);
var first__22669 = cljs.core.first(seq__22668);
var seq__22668__$1 = cljs.core.next(seq__22668);
var x22657 = first__22669;
var more__22497__auto__ = seq__22668__$1;
var xs__22496__auto____$1 = vec__22667;
var px22655__$1 = px22655;
var G__22666__$1 = G__22666;
while(true){
var px22655__$2 = px22655__$1;
var vec__22670 = G__22666__$1;
var seq__22671 = cljs.core.seq(vec__22670);
var first__22672 = cljs.core.first(seq__22671);
var seq__22671__$1 = cljs.core.next(seq__22671);
var x22657__$1 = first__22672;
var more__22497__auto____$1 = seq__22671__$1;
var xs__22496__auto____$2 = vec__22670;
if(cljs.core.seq(xs__22496__auto____$2)){
var k__22498__auto__ = compound2.core.extract_key(pi22654,x22657__$1);
var ex22659 = compound2.core.get_by_key(pi22654,px22655__$2,k__22498__auto__);
if(cljs.core.truth_(ex22659)){
var new22660 = compound2.core.on_conflict(pi22654,ex22659,x22657__$1);
var G__22683 = compound2.core.index(pi22654,px22655__$2,k__22498__auto__,new22660);
var G__22684 = more__22497__auto____$1;
px22655__$1 = G__22683;
G__22666__$1 = G__22684;
continue;
} else {
var G__22685 = compound2.core.index(pi22654,px22655__$2,k__22498__auto__,x22657__$1);
var G__22686 = more__22497__auto____$1;
px22655__$1 = G__22685;
G__22666__$1 = G__22686;
continue;
}
} else {
return cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([compound2.core.id(pi22654),compound2.core.after(pi22654,px22655__$2)]),cljs.core.meta(m22656));
}
break;
}
}),cljs.core.cst$sym$compound2$core_SLASH_remove_DASH_keys,(function (m22656,ks__22499__auto__){
var px22655 = compound2.core.before(pi22654,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m22656,compound2.core.id(pi22654)));
var G__22676 = ks__22499__auto__;
var vec__22677 = G__22676;
var seq__22678 = cljs.core.seq(vec__22677);
var first__22679 = cljs.core.first(seq__22678);
var seq__22678__$1 = cljs.core.next(seq__22678);
var k22658 = first__22679;
var more__22497__auto__ = seq__22678__$1;
var ks__22499__auto____$1 = vec__22677;
var px22655__$1 = px22655;
var G__22676__$1 = G__22676;
while(true){
var px22655__$2 = px22655__$1;
var vec__22680 = G__22676__$1;
var seq__22681 = cljs.core.seq(vec__22680);
var first__22682 = cljs.core.first(seq__22681);
var seq__22681__$1 = cljs.core.next(seq__22681);
var k22658__$1 = first__22682;
var more__22497__auto____$1 = seq__22681__$1;
var ks__22499__auto____$2 = vec__22680;
if(cljs.core.seq(ks__22499__auto____$2)){
var temp__5751__auto__ = compound2.core.get_by_key(pi22654,px22655__$2,k22658__$1);
if(cljs.core.truth_(temp__5751__auto__)){
var ex22659 = temp__5751__auto__;
var G__22687 = compound2.core.unindex(pi22654,px22655__$2,k22658__$1,ex22659);
var G__22688 = more__22497__auto____$1;
px22655__$1 = G__22687;
G__22676__$1 = G__22688;
continue;
} else {
var G__22689 = px22655__$2;
var G__22690 = more__22497__auto____$1;
px22655__$1 = G__22689;
G__22676__$1 = G__22690;
continue;
}
} else {
return cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([compound2.core.id(pi22654),compound2.core.after(pi22654,px22655__$2)]),cljs.core.meta(m22656));
}
break;
}
}),cljs.core.cst$sym$compound2$core_SLASH_items,(function (m22656){
return compound2.core.get_all(pi22654,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m22656,compound2.core.id(pi22654)));
})], null));
})();
nw_calculator.defaults.empty_selected_item_ref = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$selected_DASH_options,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$quantity_DASH_multiplier,(1)], null);
nw_calculator.defaults.default_db = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$state,cljs.core.cst$kw$loading,cljs.core.cst$kw$items,nw_calculator.defaults.items_index,cljs.core.cst$kw$selected_DASH_item_DASH_refs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.defaults.empty_selected_item_ref], null),cljs.core.cst$kw$search_DASH_results,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null)], null);
