// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('nw_calculator.defaults');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('compound2.core');
nw_calculator.defaults.default_items = (function (){var pi25935 = (function (){var G__25942 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([compound2.core.primary_defaults,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,cljs.core.cst$kw$by_DASH_id,cljs.core.cst$kw$index_DASH_type,cljs.core.cst$kw$one_DASH_to_DASH_one,cljs.core.cst$kw$kfn,cljs.core.cst$kw$id,cljs.core.cst$kw$on_DASH_conflict,(function (a,_){
return a;
})], null)], 0));
return (compound2.core.indexer.cljs$core$IFn$_invoke$arity$1 ? compound2.core.indexer.cljs$core$IFn$_invoke$arity$1(G__25942) : compound2.core.indexer.call(null,G__25942));
})();
if((((!((pi25935 == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === pi25935.compound2$core$PrimaryIndex$))))?true:(((!pi25935.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(compound2.core.PrimaryIndex,pi25935):false)):cljs.core.native_satisfies_QMARK_(compound2.core.PrimaryIndex,pi25935))){
} else {
throw (new Error(["Assert failed: ","Firsi index musi be a primary index","\n","(clojure.core/satisfies? compound2.core/PrimaryIndex pi25935)"].join('')));
}

return cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$sym$compound2$core_SLASH_add_DASH_items,(function (m25937,xs__25777__auto__){
var px25936 = compound2.core.before(pi25935,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m25937,compound2.core.id(pi25935)));
var G__25947 = xs__25777__auto__;
var vec__25948 = G__25947;
var seq__25949 = cljs.core.seq(vec__25948);
var first__25950 = cljs.core.first(seq__25949);
var seq__25949__$1 = cljs.core.next(seq__25949);
var x25938 = first__25950;
var more__25778__auto__ = seq__25949__$1;
var xs__25777__auto____$1 = vec__25948;
var px25936__$1 = px25936;
var G__25947__$1 = G__25947;
while(true){
var px25936__$2 = px25936__$1;
var vec__25951 = G__25947__$1;
var seq__25952 = cljs.core.seq(vec__25951);
var first__25953 = cljs.core.first(seq__25952);
var seq__25952__$1 = cljs.core.next(seq__25952);
var x25938__$1 = first__25953;
var more__25778__auto____$1 = seq__25952__$1;
var xs__25777__auto____$2 = vec__25951;
if(cljs.core.seq(xs__25777__auto____$2)){
var k__25779__auto__ = compound2.core.extract_key(pi25935,x25938__$1);
var ex25940 = compound2.core.get_by_key(pi25935,px25936__$2,k__25779__auto__);
if(cljs.core.truth_(ex25940)){
var new25941 = compound2.core.on_conflict(pi25935,ex25940,x25938__$1);
var G__25964 = compound2.core.index(pi25935,px25936__$2,k__25779__auto__,new25941);
var G__25965 = more__25778__auto____$1;
px25936__$1 = G__25964;
G__25947__$1 = G__25965;
continue;
} else {
var G__25966 = compound2.core.index(pi25935,px25936__$2,k__25779__auto__,x25938__$1);
var G__25967 = more__25778__auto____$1;
px25936__$1 = G__25966;
G__25947__$1 = G__25967;
continue;
}
} else {
return cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([compound2.core.id(pi25935),compound2.core.after(pi25935,px25936__$2)]),cljs.core.meta(m25937));
}
break;
}
}),cljs.core.cst$sym$compound2$core_SLASH_remove_DASH_keys,(function (m25937,ks__25780__auto__){
var px25936 = compound2.core.before(pi25935,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m25937,compound2.core.id(pi25935)));
var G__25957 = ks__25780__auto__;
var vec__25958 = G__25957;
var seq__25959 = cljs.core.seq(vec__25958);
var first__25960 = cljs.core.first(seq__25959);
var seq__25959__$1 = cljs.core.next(seq__25959);
var k25939 = first__25960;
var more__25778__auto__ = seq__25959__$1;
var ks__25780__auto____$1 = vec__25958;
var px25936__$1 = px25936;
var G__25957__$1 = G__25957;
while(true){
var px25936__$2 = px25936__$1;
var vec__25961 = G__25957__$1;
var seq__25962 = cljs.core.seq(vec__25961);
var first__25963 = cljs.core.first(seq__25962);
var seq__25962__$1 = cljs.core.next(seq__25962);
var k25939__$1 = first__25963;
var more__25778__auto____$1 = seq__25962__$1;
var ks__25780__auto____$2 = vec__25961;
if(cljs.core.seq(ks__25780__auto____$2)){
var temp__5751__auto__ = compound2.core.get_by_key(pi25935,px25936__$2,k25939__$1);
if(cljs.core.truth_(temp__5751__auto__)){
var ex25940 = temp__5751__auto__;
var G__25968 = compound2.core.unindex(pi25935,px25936__$2,k25939__$1,ex25940);
var G__25969 = more__25778__auto____$1;
px25936__$1 = G__25968;
G__25957__$1 = G__25969;
continue;
} else {
var G__25970 = px25936__$2;
var G__25971 = more__25778__auto____$1;
px25936__$1 = G__25970;
G__25957__$1 = G__25971;
continue;
}
} else {
return cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([compound2.core.id(pi25935),compound2.core.after(pi25935,px25936__$2)]),cljs.core.meta(m25937));
}
break;
}
}),cljs.core.cst$sym$compound2$core_SLASH_items,(function (m25937){
return compound2.core.get_all(pi25935,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m25937,compound2.core.id(pi25935)));
})], null));
})();
nw_calculator.defaults.empty_item = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ingredients,cljs.core.PersistentVector.EMPTY], null);
nw_calculator.defaults.empty_selected_item = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$item,nw_calculator.defaults.empty_item,cljs.core.cst$kw$amount_DASH_multiplier,(1)], null);
nw_calculator.defaults.default_db = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$state,cljs.core.cst$kw$loading,cljs.core.cst$kw$dark_DASH_theme_QMARK_,false,cljs.core.cst$kw$items,nw_calculator.defaults.default_items,cljs.core.cst$kw$selected_DASH_items,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.defaults.empty_selected_item], null),cljs.core.cst$kw$search_DASH_results,cljs.core.PersistentVector.EMPTY], null);
