// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('nw_calculator.defaults');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('compound2.core');
nw_calculator.defaults.items_index = (function (){var pi25965 = (function (){var G__25972 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([compound2.core.primary_defaults,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,cljs.core.cst$kw$by_DASH_id,cljs.core.cst$kw$index_DASH_type,cljs.core.cst$kw$one_DASH_to_DASH_one,cljs.core.cst$kw$kfn,cljs.core.cst$kw$id,cljs.core.cst$kw$on_DASH_conflict,(function (a,_){
return a;
})], null)], 0));
return (compound2.core.indexer.cljs$core$IFn$_invoke$arity$1 ? compound2.core.indexer.cljs$core$IFn$_invoke$arity$1(G__25972) : compound2.core.indexer.call(null,G__25972));
})();
if((((!((pi25965 == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === pi25965.compound2$core$PrimaryIndex$))))?true:(((!pi25965.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(compound2.core.PrimaryIndex,pi25965):false)):cljs.core.native_satisfies_QMARK_(compound2.core.PrimaryIndex,pi25965))){
} else {
throw (new Error(["Assert failed: ","Firsi index musi be a primary index","\n","(clojure.core/satisfies? compound2.core/PrimaryIndex pi25965)"].join('')));
}

return cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$sym$compound2$core_SLASH_add_DASH_items,(function (m25967,xs__25807__auto__){
var px25966 = compound2.core.before(pi25965,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m25967,compound2.core.id(pi25965)));
var G__25977 = xs__25807__auto__;
var vec__25978 = G__25977;
var seq__25979 = cljs.core.seq(vec__25978);
var first__25980 = cljs.core.first(seq__25979);
var seq__25979__$1 = cljs.core.next(seq__25979);
var x25968 = first__25980;
var more__25808__auto__ = seq__25979__$1;
var xs__25807__auto____$1 = vec__25978;
var px25966__$1 = px25966;
var G__25977__$1 = G__25977;
while(true){
var px25966__$2 = px25966__$1;
var vec__25981 = G__25977__$1;
var seq__25982 = cljs.core.seq(vec__25981);
var first__25983 = cljs.core.first(seq__25982);
var seq__25982__$1 = cljs.core.next(seq__25982);
var x25968__$1 = first__25983;
var more__25808__auto____$1 = seq__25982__$1;
var xs__25807__auto____$2 = vec__25981;
if(cljs.core.seq(xs__25807__auto____$2)){
var k__25809__auto__ = compound2.core.extract_key(pi25965,x25968__$1);
var ex25970 = compound2.core.get_by_key(pi25965,px25966__$2,k__25809__auto__);
if(cljs.core.truth_(ex25970)){
var new25971 = compound2.core.on_conflict(pi25965,ex25970,x25968__$1);
var G__25994 = compound2.core.index(pi25965,px25966__$2,k__25809__auto__,new25971);
var G__25995 = more__25808__auto____$1;
px25966__$1 = G__25994;
G__25977__$1 = G__25995;
continue;
} else {
var G__25996 = compound2.core.index(pi25965,px25966__$2,k__25809__auto__,x25968__$1);
var G__25997 = more__25808__auto____$1;
px25966__$1 = G__25996;
G__25977__$1 = G__25997;
continue;
}
} else {
return cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([compound2.core.id(pi25965),compound2.core.after(pi25965,px25966__$2)]),cljs.core.meta(m25967));
}
break;
}
}),cljs.core.cst$sym$compound2$core_SLASH_remove_DASH_keys,(function (m25967,ks__25810__auto__){
var px25966 = compound2.core.before(pi25965,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m25967,compound2.core.id(pi25965)));
var G__25987 = ks__25810__auto__;
var vec__25988 = G__25987;
var seq__25989 = cljs.core.seq(vec__25988);
var first__25990 = cljs.core.first(seq__25989);
var seq__25989__$1 = cljs.core.next(seq__25989);
var k25969 = first__25990;
var more__25808__auto__ = seq__25989__$1;
var ks__25810__auto____$1 = vec__25988;
var px25966__$1 = px25966;
var G__25987__$1 = G__25987;
while(true){
var px25966__$2 = px25966__$1;
var vec__25991 = G__25987__$1;
var seq__25992 = cljs.core.seq(vec__25991);
var first__25993 = cljs.core.first(seq__25992);
var seq__25992__$1 = cljs.core.next(seq__25992);
var k25969__$1 = first__25993;
var more__25808__auto____$1 = seq__25992__$1;
var ks__25810__auto____$2 = vec__25991;
if(cljs.core.seq(ks__25810__auto____$2)){
var temp__5751__auto__ = compound2.core.get_by_key(pi25965,px25966__$2,k25969__$1);
if(cljs.core.truth_(temp__5751__auto__)){
var ex25970 = temp__5751__auto__;
var G__25998 = compound2.core.unindex(pi25965,px25966__$2,k25969__$1,ex25970);
var G__25999 = more__25808__auto____$1;
px25966__$1 = G__25998;
G__25987__$1 = G__25999;
continue;
} else {
var G__26000 = px25966__$2;
var G__26001 = more__25808__auto____$1;
px25966__$1 = G__26000;
G__25987__$1 = G__26001;
continue;
}
} else {
return cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([compound2.core.id(pi25965),compound2.core.after(pi25965,px25966__$2)]),cljs.core.meta(m25967));
}
break;
}
}),cljs.core.cst$sym$compound2$core_SLASH_items,(function (m25967){
return compound2.core.get_all(pi25965,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m25967,compound2.core.id(pi25965)));
})], null));
})();
nw_calculator.defaults.empty_item = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ingredients,cljs.core.PersistentVector.EMPTY], null);
nw_calculator.defaults.empty_selected_item = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$item,nw_calculator.defaults.empty_item,cljs.core.cst$kw$selected_DASH_options,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$quantity_DASH_multiplier,(1)], null);
nw_calculator.defaults.default_db = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$state,cljs.core.cst$kw$loading,cljs.core.cst$kw$items,nw_calculator.defaults.items_index,cljs.core.cst$kw$selected_DASH_items,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.defaults.empty_selected_item], null),cljs.core.cst$kw$search_DASH_results,cljs.core.PersistentVector.EMPTY], null);
