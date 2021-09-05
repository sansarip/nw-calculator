// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('nw_calculator.defaults');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('compound2.core');
nw_calculator.defaults.default_items = (function (){var pi25237 = (function (){var G__25244 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([compound2.core.primary_defaults,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,cljs.core.cst$kw$by_DASH_id,cljs.core.cst$kw$index_DASH_type,cljs.core.cst$kw$one_DASH_to_DASH_one,cljs.core.cst$kw$kfn,cljs.core.cst$kw$id,cljs.core.cst$kw$on_DASH_conflict,(function (a,_){
return a;
})], null)], 0));
return (compound2.core.indexer.cljs$core$IFn$_invoke$arity$1 ? compound2.core.indexer.cljs$core$IFn$_invoke$arity$1(G__25244) : compound2.core.indexer.call(null,G__25244));
})();
if((((!((pi25237 == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === pi25237.compound2$core$PrimaryIndex$))))?true:(((!pi25237.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(compound2.core.PrimaryIndex,pi25237):false)):cljs.core.native_satisfies_QMARK_(compound2.core.PrimaryIndex,pi25237))){
} else {
throw (new Error(["Assert failed: ","Firsi index musi be a primary index","\n","(clojure.core/satisfies? compound2.core/PrimaryIndex pi25237)"].join('')));
}

return cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$sym$compound2$core_SLASH_add_DASH_items,(function (m25239,xs__25079__auto__){
var px25238 = compound2.core.before(pi25237,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m25239,compound2.core.id(pi25237)));
var G__25249 = xs__25079__auto__;
var vec__25250 = G__25249;
var seq__25251 = cljs.core.seq(vec__25250);
var first__25252 = cljs.core.first(seq__25251);
var seq__25251__$1 = cljs.core.next(seq__25251);
var x25240 = first__25252;
var more__25080__auto__ = seq__25251__$1;
var xs__25079__auto____$1 = vec__25250;
var px25238__$1 = px25238;
var G__25249__$1 = G__25249;
while(true){
var px25238__$2 = px25238__$1;
var vec__25253 = G__25249__$1;
var seq__25254 = cljs.core.seq(vec__25253);
var first__25255 = cljs.core.first(seq__25254);
var seq__25254__$1 = cljs.core.next(seq__25254);
var x25240__$1 = first__25255;
var more__25080__auto____$1 = seq__25254__$1;
var xs__25079__auto____$2 = vec__25253;
if(cljs.core.seq(xs__25079__auto____$2)){
var k__25081__auto__ = compound2.core.extract_key(pi25237,x25240__$1);
var ex25242 = compound2.core.get_by_key(pi25237,px25238__$2,k__25081__auto__);
if(cljs.core.truth_(ex25242)){
var new25243 = compound2.core.on_conflict(pi25237,ex25242,x25240__$1);
var G__25266 = compound2.core.index(pi25237,px25238__$2,k__25081__auto__,new25243);
var G__25267 = more__25080__auto____$1;
px25238__$1 = G__25266;
G__25249__$1 = G__25267;
continue;
} else {
var G__25268 = compound2.core.index(pi25237,px25238__$2,k__25081__auto__,x25240__$1);
var G__25269 = more__25080__auto____$1;
px25238__$1 = G__25268;
G__25249__$1 = G__25269;
continue;
}
} else {
return cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([compound2.core.id(pi25237),compound2.core.after(pi25237,px25238__$2)]),cljs.core.meta(m25239));
}
break;
}
}),cljs.core.cst$sym$compound2$core_SLASH_remove_DASH_keys,(function (m25239,ks__25082__auto__){
var px25238 = compound2.core.before(pi25237,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m25239,compound2.core.id(pi25237)));
var G__25259 = ks__25082__auto__;
var vec__25260 = G__25259;
var seq__25261 = cljs.core.seq(vec__25260);
var first__25262 = cljs.core.first(seq__25261);
var seq__25261__$1 = cljs.core.next(seq__25261);
var k25241 = first__25262;
var more__25080__auto__ = seq__25261__$1;
var ks__25082__auto____$1 = vec__25260;
var px25238__$1 = px25238;
var G__25259__$1 = G__25259;
while(true){
var px25238__$2 = px25238__$1;
var vec__25263 = G__25259__$1;
var seq__25264 = cljs.core.seq(vec__25263);
var first__25265 = cljs.core.first(seq__25264);
var seq__25264__$1 = cljs.core.next(seq__25264);
var k25241__$1 = first__25265;
var more__25080__auto____$1 = seq__25264__$1;
var ks__25082__auto____$2 = vec__25263;
if(cljs.core.seq(ks__25082__auto____$2)){
var temp__5733__auto__ = compound2.core.get_by_key(pi25237,px25238__$2,k25241__$1);
if(cljs.core.truth_(temp__5733__auto__)){
var ex25242 = temp__5733__auto__;
var G__25270 = compound2.core.unindex(pi25237,px25238__$2,k25241__$1,ex25242);
var G__25271 = more__25080__auto____$1;
px25238__$1 = G__25270;
G__25259__$1 = G__25271;
continue;
} else {
var G__25272 = px25238__$2;
var G__25273 = more__25080__auto____$1;
px25238__$1 = G__25272;
G__25259__$1 = G__25273;
continue;
}
} else {
return cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([compound2.core.id(pi25237),compound2.core.after(pi25237,px25238__$2)]),cljs.core.meta(m25239));
}
break;
}
}),cljs.core.cst$sym$compound2$core_SLASH_items,(function (m25239){
return compound2.core.get_all(pi25237,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m25239,compound2.core.id(pi25237)));
})], null));
})();
nw_calculator.defaults.empty_item = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ingredients,cljs.core.PersistentVector.EMPTY], null);
nw_calculator.defaults.empty_selected_item = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$item,nw_calculator.defaults.empty_item,cljs.core.cst$kw$amount_DASH_multiplier,(1)], null);
nw_calculator.defaults.default_db = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$state,cljs.core.cst$kw$loading,cljs.core.cst$kw$items,nw_calculator.defaults.default_items,cljs.core.cst$kw$selected_DASH_items,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.defaults.empty_selected_item], null),cljs.core.cst$kw$search_DASH_results,cljs.core.PersistentVector.EMPTY], null);
