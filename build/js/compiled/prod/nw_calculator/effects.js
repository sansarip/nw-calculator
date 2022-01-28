// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('nw_calculator.effects');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('taoensso.timbre');
goog.require('nw_calculator.utilities');
goog.require('nw_calculator.calculations');
goog.require('reitit.frontend.easy');
re_frame.core.reg_fx(cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_log_DASH_info,(function (msgs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(taoensso.timbre.info,msgs);
}));
re_frame.core.reg_fx(cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_navigate_BANG_,(function (route){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reitit.frontend.easy.push_state,route);
}));
re_frame.core.reg_fx(cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_search_BANG_,(function (p__22119){
var map__22120 = p__22119;
var map__22120__$1 = cljs.core.__destructure_map(map__22120);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22120__$1,cljs.core.cst$kw$items);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22120__$1,cljs.core.cst$kw$query);
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22120__$1,cljs.core.cst$kw$on_DASH_success);
var search_results = nw_calculator.utilities.fuzzy_search((function (){var G__22121 = (nw_calculator.calculations.sort_items_by_name.cljs$core$IFn$_invoke$arity$1 ? nw_calculator.calculations.sort_items_by_name.cljs$core$IFn$_invoke$arity$1(items) : nw_calculator.calculations.sort_items_by_name.call(null,items));
return (nw_calculator.calculations.filter_craftable_items.cljs$core$IFn$_invoke$arity$1 ? nw_calculator.calculations.filter_craftable_items.cljs$core$IFn$_invoke$arity$1(G__22121) : nw_calculator.calculations.filter_craftable_items.call(null,G__22121));
})(),query,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$name], null));
return re_frame.core.dispatch(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,search_results));
}));
re_frame.core.reg_fx(cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_persist_BANG_,(function (db){
return localStorage.setItem("db",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.select_keys(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$additional_DASH_item_DASH_bonuses_QMARK_,cljs.core.cst$kw$trade_DASH_skill_DASH_bonuses], null))], 0)));
}));
