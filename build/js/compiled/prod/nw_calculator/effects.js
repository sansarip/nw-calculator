// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('nw_calculator.effects');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('taoensso.timbre');
goog.require('nw_calculator.utilities');
re_frame.core.reg_fx(cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_log_DASH_info,(function (msgs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(taoensso.timbre.info,msgs);
}));
re_frame.core.reg_fx(cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_search,(function (p__20378){
var map__20379 = p__20378;
var map__20379__$1 = cljs.core.__destructure_map(map__20379);
var items_by_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20379__$1,cljs.core.cst$kw$items_DASH_by_DASH_id);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20379__$1,cljs.core.cst$kw$query);
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20379__$1,cljs.core.cst$kw$on_DASH_success);
var search_results = cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2((10),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.first,(function (p1__20377_SHARP_){
return nw_calculator.utilities.fuzzy_search(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20377_SHARP_], null),query);
}),cljs.core.cst$kw$name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nw_calculator.utilities.craftable_item], 0)),cljs.core.vals(items_by_id))));
return re_frame.core.dispatch(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,search_results));
}));
re_frame.core.reg_fx(cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_set_DASH_local_DASH_storage,(function (p__20380){
var vec__20381 = p__20380;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20381,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20381,(1),null);
return nw_calculator.utilities.set_local_storage_BANG_(k,v);
}));