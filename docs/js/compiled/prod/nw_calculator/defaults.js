// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('nw_calculator.defaults');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('compound2.core');
nw_calculator.defaults.default_items = (function (){var pi25251 = (function (){var G__25258 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([compound2.core.primary_defaults,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,cljs.core.cst$kw$by_DASH_id,cljs.core.cst$kw$index_DASH_type,cljs.core.cst$kw$one_DASH_to_DASH_one,cljs.core.cst$kw$kfn,cljs.core.cst$kw$id,cljs.core.cst$kw$on_DASH_conflict,(function (a,_){
return a;
})], null)], 0));
return (compound2.core.indexer.cljs$core$IFn$_invoke$arity$1 ? compound2.core.indexer.cljs$core$IFn$_invoke$arity$1(G__25258) : compound2.core.indexer.call(null,G__25258));
})();
if((((!((pi25251 == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === pi25251.compound2$core$PrimaryIndex$))))?true:(((!pi25251.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(compound2.core.PrimaryIndex,pi25251):false)):cljs.core.native_satisfies_QMARK_(compound2.core.PrimaryIndex,pi25251))){
} else {
throw (new Error(["Assert failed: ","Firsi index musi be a primary index","\n","(clojure.core/satisfies? compound2.core/PrimaryIndex pi25251)"].join('')));
}

return cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$sym$compound2$core_SLASH_add_DASH_items,(function (m25253,xs__25093__auto__){
var px25252 = compound2.core.before(pi25251,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m25253,compound2.core.id(pi25251)));
var G__25263 = xs__25093__auto__;
var vec__25264 = G__25263;
var seq__25265 = cljs.core.seq(vec__25264);
var first__25266 = cljs.core.first(seq__25265);
var seq__25265__$1 = cljs.core.next(seq__25265);
var x25254 = first__25266;
var more__25094__auto__ = seq__25265__$1;
var xs__25093__auto____$1 = vec__25264;
var px25252__$1 = px25252;
var G__25263__$1 = G__25263;
while(true){
var px25252__$2 = px25252__$1;
var vec__25267 = G__25263__$1;
var seq__25268 = cljs.core.seq(vec__25267);
var first__25269 = cljs.core.first(seq__25268);
var seq__25268__$1 = cljs.core.next(seq__25268);
var x25254__$1 = first__25269;
var more__25094__auto____$1 = seq__25268__$1;
var xs__25093__auto____$2 = vec__25267;
if(cljs.core.seq(xs__25093__auto____$2)){
var k__25095__auto__ = compound2.core.extract_key(pi25251,x25254__$1);
var ex25256 = compound2.core.get_by_key(pi25251,px25252__$2,k__25095__auto__);
if(cljs.core.truth_(ex25256)){
var new25257 = compound2.core.on_conflict(pi25251,ex25256,x25254__$1);
var G__25280 = compound2.core.index(pi25251,px25252__$2,k__25095__auto__,new25257);
var G__25281 = more__25094__auto____$1;
px25252__$1 = G__25280;
G__25263__$1 = G__25281;
continue;
} else {
var G__25282 = compound2.core.index(pi25251,px25252__$2,k__25095__auto__,x25254__$1);
var G__25283 = more__25094__auto____$1;
px25252__$1 = G__25282;
G__25263__$1 = G__25283;
continue;
}
} else {
return cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([compound2.core.id(pi25251),compound2.core.after(pi25251,px25252__$2)]),cljs.core.meta(m25253));
}
break;
}
}),cljs.core.cst$sym$compound2$core_SLASH_remove_DASH_keys,(function (m25253,ks__25096__auto__){
var px25252 = compound2.core.before(pi25251,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m25253,compound2.core.id(pi25251)));
var G__25273 = ks__25096__auto__;
var vec__25274 = G__25273;
var seq__25275 = cljs.core.seq(vec__25274);
var first__25276 = cljs.core.first(seq__25275);
var seq__25275__$1 = cljs.core.next(seq__25275);
var k25255 = first__25276;
var more__25094__auto__ = seq__25275__$1;
var ks__25096__auto____$1 = vec__25274;
var px25252__$1 = px25252;
var G__25273__$1 = G__25273;
while(true){
var px25252__$2 = px25252__$1;
var vec__25277 = G__25273__$1;
var seq__25278 = cljs.core.seq(vec__25277);
var first__25279 = cljs.core.first(seq__25278);
var seq__25278__$1 = cljs.core.next(seq__25278);
var k25255__$1 = first__25279;
var more__25094__auto____$1 = seq__25278__$1;
var ks__25096__auto____$2 = vec__25277;
if(cljs.core.seq(ks__25096__auto____$2)){
var temp__5751__auto__ = compound2.core.get_by_key(pi25251,px25252__$2,k25255__$1);
if(cljs.core.truth_(temp__5751__auto__)){
var ex25256 = temp__5751__auto__;
var G__25284 = compound2.core.unindex(pi25251,px25252__$2,k25255__$1,ex25256);
var G__25285 = more__25094__auto____$1;
px25252__$1 = G__25284;
G__25273__$1 = G__25285;
continue;
} else {
var G__25286 = px25252__$2;
var G__25287 = more__25094__auto____$1;
px25252__$1 = G__25286;
G__25273__$1 = G__25287;
continue;
}
} else {
return cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([compound2.core.id(pi25251),compound2.core.after(pi25251,px25252__$2)]),cljs.core.meta(m25253));
}
break;
}
}),cljs.core.cst$sym$compound2$core_SLASH_items,(function (m25253){
return compound2.core.get_all(pi25251,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m25253,compound2.core.id(pi25251)));
})], null));
})();
nw_calculator.defaults.empty_item = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ingredients,cljs.core.PersistentVector.EMPTY], null);
nw_calculator.defaults.empty_selected_item = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$item,nw_calculator.defaults.empty_item,cljs.core.cst$kw$amount_DASH_multiplier,(1)], null);
nw_calculator.defaults.default_db = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$state,cljs.core.cst$kw$loading,cljs.core.cst$kw$dark_DASH_theme_QMARK_,false,cljs.core.cst$kw$items,nw_calculator.defaults.default_items,cljs.core.cst$kw$selected_DASH_items,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.defaults.empty_selected_item], null),cljs.core.cst$kw$search_DASH_results,cljs.core.PersistentVector.EMPTY], null);
