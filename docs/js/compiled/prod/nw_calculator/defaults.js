// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('nw_calculator.defaults');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('compound2.core');
nw_calculator.defaults.default_items = (function (){var pi25244 = (function (){var G__25251 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([compound2.core.primary_defaults,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,cljs.core.cst$kw$by_DASH_id,cljs.core.cst$kw$index_DASH_type,cljs.core.cst$kw$one_DASH_to_DASH_one,cljs.core.cst$kw$kfn,cljs.core.cst$kw$id,cljs.core.cst$kw$on_DASH_conflict,(function (a,_){
return a;
})], null)], 0));
return (compound2.core.indexer.cljs$core$IFn$_invoke$arity$1 ? compound2.core.indexer.cljs$core$IFn$_invoke$arity$1(G__25251) : compound2.core.indexer.call(null,G__25251));
})();
if((((!((pi25244 == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === pi25244.compound2$core$PrimaryIndex$))))?true:(((!pi25244.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(compound2.core.PrimaryIndex,pi25244):false)):cljs.core.native_satisfies_QMARK_(compound2.core.PrimaryIndex,pi25244))){
} else {
throw (new Error(["Assert failed: ","Firsi index musi be a primary index","\n","(clojure.core/satisfies? compound2.core/PrimaryIndex pi25244)"].join('')));
}

return cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$sym$compound2$core_SLASH_add_DASH_items,(function (m25246,xs__25086__auto__){
var px25245 = compound2.core.before(pi25244,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m25246,compound2.core.id(pi25244)));
var G__25256 = xs__25086__auto__;
var vec__25257 = G__25256;
var seq__25258 = cljs.core.seq(vec__25257);
var first__25259 = cljs.core.first(seq__25258);
var seq__25258__$1 = cljs.core.next(seq__25258);
var x25247 = first__25259;
var more__25087__auto__ = seq__25258__$1;
var xs__25086__auto____$1 = vec__25257;
var px25245__$1 = px25245;
var G__25256__$1 = G__25256;
while(true){
var px25245__$2 = px25245__$1;
var vec__25260 = G__25256__$1;
var seq__25261 = cljs.core.seq(vec__25260);
var first__25262 = cljs.core.first(seq__25261);
var seq__25261__$1 = cljs.core.next(seq__25261);
var x25247__$1 = first__25262;
var more__25087__auto____$1 = seq__25261__$1;
var xs__25086__auto____$2 = vec__25260;
if(cljs.core.seq(xs__25086__auto____$2)){
var k__25088__auto__ = compound2.core.extract_key(pi25244,x25247__$1);
var ex25249 = compound2.core.get_by_key(pi25244,px25245__$2,k__25088__auto__);
if(cljs.core.truth_(ex25249)){
var new25250 = compound2.core.on_conflict(pi25244,ex25249,x25247__$1);
var G__25273 = compound2.core.index(pi25244,px25245__$2,k__25088__auto__,new25250);
var G__25274 = more__25087__auto____$1;
px25245__$1 = G__25273;
G__25256__$1 = G__25274;
continue;
} else {
var G__25275 = compound2.core.index(pi25244,px25245__$2,k__25088__auto__,x25247__$1);
var G__25276 = more__25087__auto____$1;
px25245__$1 = G__25275;
G__25256__$1 = G__25276;
continue;
}
} else {
return cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([compound2.core.id(pi25244),compound2.core.after(pi25244,px25245__$2)]),cljs.core.meta(m25246));
}
break;
}
}),cljs.core.cst$sym$compound2$core_SLASH_remove_DASH_keys,(function (m25246,ks__25089__auto__){
var px25245 = compound2.core.before(pi25244,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m25246,compound2.core.id(pi25244)));
var G__25266 = ks__25089__auto__;
var vec__25267 = G__25266;
var seq__25268 = cljs.core.seq(vec__25267);
var first__25269 = cljs.core.first(seq__25268);
var seq__25268__$1 = cljs.core.next(seq__25268);
var k25248 = first__25269;
var more__25087__auto__ = seq__25268__$1;
var ks__25089__auto____$1 = vec__25267;
var px25245__$1 = px25245;
var G__25266__$1 = G__25266;
while(true){
var px25245__$2 = px25245__$1;
var vec__25270 = G__25266__$1;
var seq__25271 = cljs.core.seq(vec__25270);
var first__25272 = cljs.core.first(seq__25271);
var seq__25271__$1 = cljs.core.next(seq__25271);
var k25248__$1 = first__25272;
var more__25087__auto____$1 = seq__25271__$1;
var ks__25089__auto____$2 = vec__25270;
if(cljs.core.seq(ks__25089__auto____$2)){
var temp__5751__auto__ = compound2.core.get_by_key(pi25244,px25245__$2,k25248__$1);
if(cljs.core.truth_(temp__5751__auto__)){
var ex25249 = temp__5751__auto__;
var G__25277 = compound2.core.unindex(pi25244,px25245__$2,k25248__$1,ex25249);
var G__25278 = more__25087__auto____$1;
px25245__$1 = G__25277;
G__25266__$1 = G__25278;
continue;
} else {
var G__25279 = px25245__$2;
var G__25280 = more__25087__auto____$1;
px25245__$1 = G__25279;
G__25266__$1 = G__25280;
continue;
}
} else {
return cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([compound2.core.id(pi25244),compound2.core.after(pi25244,px25245__$2)]),cljs.core.meta(m25246));
}
break;
}
}),cljs.core.cst$sym$compound2$core_SLASH_items,(function (m25246){
return compound2.core.get_all(pi25244,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m25246,compound2.core.id(pi25244)));
})], null));
})();
nw_calculator.defaults.empty_item = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ingredients,cljs.core.PersistentVector.EMPTY], null);
nw_calculator.defaults.empty_selected_item = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$item,nw_calculator.defaults.empty_item,cljs.core.cst$kw$amount_DASH_multiplier,(1)], null);
nw_calculator.defaults.default_db = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$state,cljs.core.cst$kw$loading,cljs.core.cst$kw$dark_DASH_theme_QMARK_,false,cljs.core.cst$kw$items,nw_calculator.defaults.default_items,cljs.core.cst$kw$selected_DASH_items,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.defaults.empty_selected_item], null),cljs.core.cst$kw$search_DASH_results,cljs.core.PersistentVector.EMPTY], null);
