// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('nw_calculator.effects');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('taoensso.timbre');
goog.require('nw_calculator.web_workers');
goog.require('nw_calculator.utilities');
re_frame.core.reg_fx(cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_log_DASH_info,(function (msgs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(taoensso.timbre.info,msgs);
}));
re_frame.core.reg_fx(cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_read_DASH_string,(function (p__19689){
var vec__19690 = p__19689;
var edn_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19690,(0),null);
var on_success = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19690,(1),null);
(nw_calculator.web_workers.worker.onmessage = (function (msg){
return re_frame.core.dispatch(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(msg.data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$keywordize_DASH_keys,true], 0))));
}));

return nw_calculator.web_workers.worker.postMessage(edn_str);
}));
re_frame.core.reg_fx(cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_search,(function (p__19694){
var map__19695 = p__19694;
var map__19695__$1 = cljs.core.__destructure_map(map__19695);
var items_by_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19695__$1,cljs.core.cst$kw$items_DASH_by_DASH_id);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19695__$1,cljs.core.cst$kw$query);
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19695__$1,cljs.core.cst$kw$on_DASH_success);
var search_results = cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2((10),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.first,(function (p1__19693_SHARP_){
return nw_calculator.utilities.fuzzy_search(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19693_SHARP_], null),query);
}),cljs.core.cst$kw$name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nw_calculator.utilities.craftable_item], 0)),cljs.core.vals(items_by_id))));
return re_frame.core.dispatch(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,search_results));
}));
re_frame.core.reg_fx(cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_set_DASH_local_DASH_storage,(function (p__19696){
var vec__19697 = p__19696;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19697,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19697,(1),null);
return nw_calculator.utilities.set_local_storage_BANG_(k,v);
}));
