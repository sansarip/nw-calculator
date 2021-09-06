// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('nw_calculator.defaults');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('compound2.core');
nw_calculator.defaults.default_items = (function (){var pi25241 = (function (){var G__25248 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([compound2.core.primary_defaults,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,cljs.core.cst$kw$by_DASH_id,cljs.core.cst$kw$index_DASH_type,cljs.core.cst$kw$one_DASH_to_DASH_one,cljs.core.cst$kw$kfn,cljs.core.cst$kw$id,cljs.core.cst$kw$on_DASH_conflict,(function (a,_){
return a;
})], null)], 0));
return (compound2.core.indexer.cljs$core$IFn$_invoke$arity$1 ? compound2.core.indexer.cljs$core$IFn$_invoke$arity$1(G__25248) : compound2.core.indexer.call(null,G__25248));
})();
if((((!((pi25241 == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === pi25241.compound2$core$PrimaryIndex$))))?true:(((!pi25241.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(compound2.core.PrimaryIndex,pi25241):false)):cljs.core.native_satisfies_QMARK_(compound2.core.PrimaryIndex,pi25241))){
} else {
throw (new Error(["Assert failed: ","Firsi index musi be a primary index","\n","(clojure.core/satisfies? compound2.core/PrimaryIndex pi25241)"].join('')));
}

return cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$sym$compound2$core_SLASH_add_DASH_items,(function (m25243,xs__25083__auto__){
var px25242 = compound2.core.before(pi25241,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m25243,compound2.core.id(pi25241)));
var G__25253 = xs__25083__auto__;
var vec__25254 = G__25253;
var seq__25255 = cljs.core.seq(vec__25254);
var first__25256 = cljs.core.first(seq__25255);
var seq__25255__$1 = cljs.core.next(seq__25255);
var x25244 = first__25256;
var more__25084__auto__ = seq__25255__$1;
var xs__25083__auto____$1 = vec__25254;
var px25242__$1 = px25242;
var G__25253__$1 = G__25253;
while(true){
var px25242__$2 = px25242__$1;
var vec__25257 = G__25253__$1;
var seq__25258 = cljs.core.seq(vec__25257);
var first__25259 = cljs.core.first(seq__25258);
var seq__25258__$1 = cljs.core.next(seq__25258);
var x25244__$1 = first__25259;
var more__25084__auto____$1 = seq__25258__$1;
var xs__25083__auto____$2 = vec__25257;
if(cljs.core.seq(xs__25083__auto____$2)){
var k__25085__auto__ = compound2.core.extract_key(pi25241,x25244__$1);
var ex25246 = compound2.core.get_by_key(pi25241,px25242__$2,k__25085__auto__);
if(cljs.core.truth_(ex25246)){
var new25247 = compound2.core.on_conflict(pi25241,ex25246,x25244__$1);
var G__25270 = compound2.core.index(pi25241,px25242__$2,k__25085__auto__,new25247);
var G__25271 = more__25084__auto____$1;
px25242__$1 = G__25270;
G__25253__$1 = G__25271;
continue;
} else {
var G__25272 = compound2.core.index(pi25241,px25242__$2,k__25085__auto__,x25244__$1);
var G__25273 = more__25084__auto____$1;
px25242__$1 = G__25272;
G__25253__$1 = G__25273;
continue;
}
} else {
return cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([compound2.core.id(pi25241),compound2.core.after(pi25241,px25242__$2)]),cljs.core.meta(m25243));
}
break;
}
}),cljs.core.cst$sym$compound2$core_SLASH_remove_DASH_keys,(function (m25243,ks__25086__auto__){
var px25242 = compound2.core.before(pi25241,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m25243,compound2.core.id(pi25241)));
var G__25263 = ks__25086__auto__;
var vec__25264 = G__25263;
var seq__25265 = cljs.core.seq(vec__25264);
var first__25266 = cljs.core.first(seq__25265);
var seq__25265__$1 = cljs.core.next(seq__25265);
var k25245 = first__25266;
var more__25084__auto__ = seq__25265__$1;
var ks__25086__auto____$1 = vec__25264;
var px25242__$1 = px25242;
var G__25263__$1 = G__25263;
while(true){
var px25242__$2 = px25242__$1;
var vec__25267 = G__25263__$1;
var seq__25268 = cljs.core.seq(vec__25267);
var first__25269 = cljs.core.first(seq__25268);
var seq__25268__$1 = cljs.core.next(seq__25268);
var k25245__$1 = first__25269;
var more__25084__auto____$1 = seq__25268__$1;
var ks__25086__auto____$2 = vec__25267;
if(cljs.core.seq(ks__25086__auto____$2)){
var temp__5733__auto__ = compound2.core.get_by_key(pi25241,px25242__$2,k25245__$1);
if(cljs.core.truth_(temp__5733__auto__)){
var ex25246 = temp__5733__auto__;
var G__25274 = compound2.core.unindex(pi25241,px25242__$2,k25245__$1,ex25246);
var G__25275 = more__25084__auto____$1;
px25242__$1 = G__25274;
G__25263__$1 = G__25275;
continue;
} else {
var G__25276 = px25242__$2;
var G__25277 = more__25084__auto____$1;
px25242__$1 = G__25276;
G__25263__$1 = G__25277;
continue;
}
} else {
return cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([compound2.core.id(pi25241),compound2.core.after(pi25241,px25242__$2)]),cljs.core.meta(m25243));
}
break;
}
}),cljs.core.cst$sym$compound2$core_SLASH_items,(function (m25243){
return compound2.core.get_all(pi25241,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m25243,compound2.core.id(pi25241)));
})], null));
})();
nw_calculator.defaults.empty_item = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ingredients,cljs.core.PersistentVector.EMPTY], null);
nw_calculator.defaults.empty_selected_item = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$item,nw_calculator.defaults.empty_item,cljs.core.cst$kw$amount_DASH_multiplier,(1)], null);
nw_calculator.defaults.default_db = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$state,cljs.core.cst$kw$loading,cljs.core.cst$kw$dark_DASH_theme_QMARK_,false,cljs.core.cst$kw$items,nw_calculator.defaults.default_items,cljs.core.cst$kw$selected_DASH_items,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.defaults.empty_selected_item], null),cljs.core.cst$kw$search_DASH_results,cljs.core.PersistentVector.EMPTY], null);
