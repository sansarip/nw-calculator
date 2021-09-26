// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('nw_calculator.effects');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('taoensso.timbre');
goog.require('nw_calculator.utilities');
goog.require('nw_calculator.business_logic');
goog.require('reitit.frontend.easy');
re_frame.core.reg_fx(cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_log_DASH_info,(function (msgs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(taoensso.timbre.info,msgs);
}));
re_frame.core.reg_fx(cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_navigate_BANG_,(function (route){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reitit.frontend.easy.push_state,route);
}));
re_frame.core.reg_fx(cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_search_BANG_,(function (p__22107){
var map__22108 = p__22107;
var map__22108__$1 = cljs.core.__destructure_map(map__22108);
var items_by_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22108__$1,cljs.core.cst$kw$items_DASH_by_DASH_id);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22108__$1,cljs.core.cst$kw$query);
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22108__$1,cljs.core.cst$kw$on_DASH_success);
var search_results = cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2((10),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.first,(function (p1__22106_SHARP_){
return nw_calculator.utilities.fuzzy_search(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22106_SHARP_], null),query);
}),cljs.core.cst$kw$name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nw_calculator.business_logic.craftable_item], 0)),cljs.core.vals(items_by_id))));
return re_frame.core.dispatch(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,search_results));
}));
