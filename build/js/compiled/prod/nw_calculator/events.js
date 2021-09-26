// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('nw_calculator.events');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('day8.re_frame.tracing');
goog.require('nw_calculator.defaults');
goog.require('nw_calculator.fsm');
goog.require('nw_calculator.effects');
goog.require('nw_calculator.event_handlers');
goog.require('ajax.core');
goog.require('day8.re_frame.http_fx');
goog.require('compound2.core');
goog.require('reitit.frontend.controllers');
goog.require('nw_calculator.utilities');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_initialize_DASH_db,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_,p__27798){
var vec__27799 = p__27798;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27799,(0),null);
var default_db = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27799,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$default_DASH_db], null)], null),cljs.core.cst$sym$default_DASH_db));

var result__27603__auto__ = default_db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__27603__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$default_DASH_db,cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__27603__auto__;
}catch (e27802){var e = e27802;
throw e;
}}):(function (_,p__27803){
var vec__27804 = p__27803;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27804,(0),null);
var default_db = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27804,(1),null);
return default_db;
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_navigate,(function (_,p__27807){
var vec__27808 = p__27807;
var seq__27809 = cljs.core.seq(vec__27808);
var first__27810 = cljs.core.first(seq__27809);
var seq__27809__$1 = cljs.core.next(seq__27809);
var ___$1 = first__27810;
var route = seq__27809__$1;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_navigate_BANG_,route], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_navigated,(function (p__27811,p__27812){
var map__27813 = p__27811;
var map__27813__$1 = cljs.core.__destructure_map(map__27813);
var db = map__27813__$1;
var map__27814 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27813__$1,cljs.core.cst$kw$current_DASH_route);
var map__27814__$1 = cljs.core.__destructure_map(map__27814);
var controllers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27814__$1,cljs.core.cst$kw$controllers);
var vec__27815 = p__27812;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27815,(0),null);
var new_match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27815,(1),null);
var new_route = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_match,cljs.core.cst$kw$controllers,reitit.frontend.controllers.apply_controllers(controllers,new_match));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$current_DASH_route,new_route);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_set_DASH_state,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__27818){
var vec__27819 = p__27818;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27819,(0),null);
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27819,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$state], null)], null),cljs.core.list(cljs.core.cst$sym$assoc,cljs.core.cst$sym$db,cljs.core.cst$kw$state,cljs.core.cst$sym$state)));

var result__27603__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var result__27603__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(2),cljs.core.cst$kw$result,result__27603__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27603__auto__;
})(),cljs.core.cst$kw$state,(function (){var result__27603__auto__ = state;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(4),cljs.core.cst$kw$result,result__27603__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$state,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27603__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__27603__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$assoc,cljs.core.cst$sym$db,cljs.core.cst$kw$state,cljs.core.cst$sym$state),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__27603__auto__;
}catch (e27822){var e = e27822;
throw e;
}}):(function (db,p__27823){
var vec__27824 = p__27823;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27824,(0),null);
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27824,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$state,state);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_success,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__27827){
var vec__27828 = p__27827;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27828,(0),null);
var items_edn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27828,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$items_DASH_edn], null)], null),cljs.core.list(cljs.core.cst$sym$_DASH__GT_,cljs.core.cst$sym$db,cljs.core.list(cljs.core.cst$sym$update,cljs.core.cst$kw$items,cljs.core.cst$sym$c_SLASH_add_DASH_items,cljs.core.cst$sym$items_DASH_edn),cljs.core.list(cljs.core.cst$sym$handlers_SLASH_next_DASH_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state], null),cljs.core.cst$sym$fsm_SLASH_app_DASH_fsm,cljs.core.cst$kw$success))));

var result__27603__auto__ = (function (){var result__27610__auto__ = nw_calculator.event_handlers.next_state((function (){var result__27610__auto__ = cljs.core.update.cljs$core$IFn$_invoke$arity$4((function (){var result__27603__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(2),cljs.core.cst$kw$result,result__27603__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27603__auto__;
})(),cljs.core.cst$kw$items,(function (){var result__27603__auto__ = compound2.core.add_items;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(6),cljs.core.cst$kw$result,result__27603__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$c_SLASH_add_DASH_items,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27603__auto__;
})(),(function (){var result__27603__auto__ = items_edn;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(7),cljs.core.cst$kw$result,result__27603__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$items_DASH_edn,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27603__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(3),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$update,cljs.core.cst$kw$items,cljs.core.cst$sym$c_SLASH_add_DASH_items,cljs.core.cst$sym$items_DASH_edn),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27610__auto__;
})(),(function (){var result__27603__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(10),cljs.core.cst$kw$result,result__27603__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state], null),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27603__auto__;
})(),(function (){var result__27603__auto__ = nw_calculator.fsm.app_fsm;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(12),cljs.core.cst$kw$result,result__27603__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$fsm_SLASH_app_DASH_fsm,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27603__auto__;
})(),cljs.core.cst$kw$success);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(8),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_next_DASH_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state], null),cljs.core.cst$sym$fsm_SLASH_app_DASH_fsm,cljs.core.cst$kw$success),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27610__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__27603__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$_DASH__GT_,cljs.core.cst$sym$db,cljs.core.list(cljs.core.cst$sym$update,cljs.core.cst$kw$items,cljs.core.cst$sym$c_SLASH_add_DASH_items,cljs.core.cst$sym$items_DASH_edn),cljs.core.list(cljs.core.cst$sym$handlers_SLASH_next_DASH_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state], null),cljs.core.cst$sym$fsm_SLASH_app_DASH_fsm,cljs.core.cst$kw$success)),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__27603__auto__;
}catch (e27831){var e = e27831;
throw e;
}}):(function (db,p__27832){
var vec__27833 = p__27832;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27833,(0),null);
var items_edn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27833,(1),null);
return nw_calculator.event_handlers.next_state(cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,cljs.core.cst$kw$items,compound2.core.add_items,items_edn),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state], null),nw_calculator.fsm.app_fsm,cljs.core.cst$kw$success);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_failure,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__27836){
var vec__27837 = p__27836;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27837,(0),null);
var _resp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27837,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$_resp], null)], null),cljs.core.cst$sym$db));

var result__27603__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__27603__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db,cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__27603__auto__;
}catch (e27840){var e = e27840;
throw e;
}}):(function (db,p__27841){
var vec__27842 = p__27841;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27842,(0),null);
var _resp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27842,(1),null);
return db;
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__27845,_){
var map__27846 = p__27845;
var map__27846__$1 = cljs.core.__destructure_map(map__27846);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27846__$1,cljs.core.cst$kw$db);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$db,cljs.core.cst$kw$db], null),cljs.core.cst$sym$_], null),cljs.core.list(cljs.core.cst$sym$handlers_SLASH_next_DASH_state,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$db,cljs.core.cst$sym$db,cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_log_DASH_info,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u2B07\uFE0F Fetching item data!"], null),cljs.core.cst$kw$http_DASH_xhrio,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$method,cljs.core.cst$kw$get,cljs.core.cst$kw$response_DASH_format,cljs.core.list(cljs.core.cst$sym$ajax_SLASH_json_DASH_response_DASH_format,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywords_QMARK_,true], null)),cljs.core.cst$kw$uri,"/data/items.json",cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_success], null),cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_failure], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db,cljs.core.cst$kw$state], null),cljs.core.cst$sym$fsm_SLASH_app_DASH_fsm,cljs.core.cst$kw$fetch_DASH_item_DASH_data)));

var result__27603__auto__ = nw_calculator.event_handlers.next_state((function (){var result__27603__auto__ = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$db,(function (){var result__27603__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(4),cljs.core.cst$kw$result,result__27603__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27603__auto__;
})(),cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_log_DASH_info,(function (){var result__27603__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u2B07\uFE0F Fetching item data!"], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(6),cljs.core.cst$kw$result,result__27603__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u2B07\uFE0F Fetching item data!"], null),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27603__auto__;
})(),cljs.core.cst$kw$http_DASH_xhrio,(function (){var result__27603__auto__ = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$method,cljs.core.cst$kw$get,cljs.core.cst$kw$response_DASH_format,(function (){var result__27603__auto__ = (function (){var G__27848 = (function (){var result__27603__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywords_QMARK_,true], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(14),cljs.core.cst$kw$result,result__27603__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywords_QMARK_,true], null),cljs.core.cst$kw$indent_DASH_level,(4)], null));

return result__27603__auto__;
})();
return (ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1 ? ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(G__27848) : ajax.core.json_response_format.call(null,G__27848));
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(13),cljs.core.cst$kw$result,result__27603__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$ajax_SLASH_json_DASH_response_DASH_format,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywords_QMARK_,true], null)),cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27603__auto__;
})(),cljs.core.cst$kw$uri,"/data/items.json",cljs.core.cst$kw$on_DASH_success,(function (){var result__27603__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_success], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(20),cljs.core.cst$kw$result,result__27603__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_success], null),cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27603__auto__;
})(),cljs.core.cst$kw$on_DASH_failure,(function (){var result__27603__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_failure], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(23),cljs.core.cst$kw$result,result__27603__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_failure], null),cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27603__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(9),cljs.core.cst$kw$result,result__27603__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$method,cljs.core.cst$kw$get,cljs.core.cst$kw$response_DASH_format,cljs.core.list(cljs.core.cst$sym$ajax_SLASH_json_DASH_response_DASH_format,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywords_QMARK_,true], null)),cljs.core.cst$kw$uri,"/data/items.json",cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_success], null),cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_failure], null)], null),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27603__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(2),cljs.core.cst$kw$result,result__27603__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$db,cljs.core.cst$sym$db,cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_log_DASH_info,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u2B07\uFE0F Fetching item data!"], null),cljs.core.cst$kw$http_DASH_xhrio,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$method,cljs.core.cst$kw$get,cljs.core.cst$kw$response_DASH_format,cljs.core.list(cljs.core.cst$sym$ajax_SLASH_json_DASH_response_DASH_format,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywords_QMARK_,true], null)),cljs.core.cst$kw$uri,"/data/items.json",cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_success], null),cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_failure], null)], null)], null),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27603__auto__;
})(),(function (){var result__27603__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db,cljs.core.cst$kw$state], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(25),cljs.core.cst$kw$result,result__27603__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db,cljs.core.cst$kw$state], null),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27603__auto__;
})(),(function (){var result__27603__auto__ = nw_calculator.fsm.app_fsm;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(28),cljs.core.cst$kw$result,result__27603__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$fsm_SLASH_app_DASH_fsm,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27603__auto__;
})(),cljs.core.cst$kw$fetch_DASH_item_DASH_data);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__27603__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_next_DASH_state,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$db,cljs.core.cst$sym$db,cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_log_DASH_info,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u2B07\uFE0F Fetching item data!"], null),cljs.core.cst$kw$http_DASH_xhrio,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$method,cljs.core.cst$kw$get,cljs.core.cst$kw$response_DASH_format,cljs.core.list(cljs.core.cst$sym$ajax_SLASH_json_DASH_response_DASH_format,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywords_QMARK_,true], null)),cljs.core.cst$kw$uri,"/data/items.json",cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_success], null),cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_failure], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db,cljs.core.cst$kw$state], null),cljs.core.cst$sym$fsm_SLASH_app_DASH_fsm,cljs.core.cst$kw$fetch_DASH_item_DASH_data),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__27603__auto__;
}catch (e27847){var e = e27847;
throw e;
}}):(function (p__27849,_){
var map__27850 = p__27849;
var map__27850__$1 = cljs.core.__destructure_map(map__27850);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27850__$1,cljs.core.cst$kw$db);
return nw_calculator.event_handlers.next_state(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$db,db,cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_log_DASH_info,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u2B07\uFE0F Fetching item data!"], null),cljs.core.cst$kw$http_DASH_xhrio,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$method,cljs.core.cst$kw$get,cljs.core.cst$kw$response_DASH_format,(function (){var G__27851 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywords_QMARK_,true], null);
return (ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1 ? ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(G__27851) : ajax.core.json_response_format.call(null,G__27851));
})(),cljs.core.cst$kw$uri,"/data/items.json",cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_success], null),cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_failure], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db,cljs.core.cst$kw$state], null),nw_calculator.fsm.app_fsm,cljs.core.cst$kw$fetch_DASH_item_DASH_data);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_search_DASH_success,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__27852){
var vec__27853 = p__27852;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27853,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27853,(1),null);
var search_results = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27853,(2),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$sym$search_DASH_results], null)], null),cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search_DASH_results,cljs.core.cst$sym$item_DASH_index], null),cljs.core.cst$sym$search_DASH_results)));

var result__27603__auto__ = cljs.core.assoc_in((function (){var result__27603__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(2),cljs.core.cst$kw$result,result__27603__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27603__auto__;
})(),(function (){var result__27603__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search_DASH_results,(function (){var result__27603__auto__ = item_index;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(5),cljs.core.cst$kw$result,result__27603__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27603__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(3),cljs.core.cst$kw$result,result__27603__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search_DASH_results,cljs.core.cst$sym$item_DASH_index], null),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27603__auto__;
})(),(function (){var result__27603__auto__ = search_results;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(6),cljs.core.cst$kw$result,result__27603__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$search_DASH_results,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27603__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__27603__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search_DASH_results,cljs.core.cst$sym$item_DASH_index], null),cljs.core.cst$sym$search_DASH_results),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__27603__auto__;
}catch (e27856){var e = e27856;
throw e;
}}):(function (db,p__27857){
var vec__27858 = p__27857;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27858,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27858,(1),null);
var search_results = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27858,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search_DASH_results,item_index], null),search_results);
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_search,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__27861,p__27862){
var map__27863 = p__27861;
var map__27863__$1 = cljs.core.__destructure_map(map__27863);
var map__27864 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27863__$1,cljs.core.cst$kw$db);
var map__27864__$1 = cljs.core.__destructure_map(map__27864);
var db = map__27864__$1;
var map__27865 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27864__$1,cljs.core.cst$kw$items);
var map__27865__$1 = cljs.core.__destructure_map(map__27865);
var items_by_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27865__$1,cljs.core.cst$kw$by_DASH_id);
var vec__27866 = p__27862;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27866,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27866,(1),null);
var query = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27866,(2),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$items_DASH_by_DASH_id,cljs.core.cst$kw$by_DASH_id], null),cljs.core.cst$kw$items,cljs.core.cst$kw$as,cljs.core.cst$sym$db], null),cljs.core.cst$kw$db], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$sym$query], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.cst$sym$db,cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_search_BANG_,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$query,cljs.core.cst$sym$query,cljs.core.cst$kw$items_DASH_by_DASH_id,cljs.core.cst$sym$items_DASH_by_DASH_id,cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_search_DASH_success,cljs.core.cst$sym$item_DASH_index], null)], null)], null)));

var result__27603__auto__ = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,(function (){var result__27603__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(3),cljs.core.cst$kw$result,result__27603__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27603__auto__;
})(),cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_search_BANG_,(function (){var result__27603__auto__ = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$query,(function (){var result__27603__auto__ = query;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(7),cljs.core.cst$kw$result,result__27603__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$query,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27603__auto__;
})(),cljs.core.cst$kw$items_DASH_by_DASH_id,(function (){var result__27603__auto__ = items_by_id;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(9),cljs.core.cst$kw$result,result__27603__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$items_DASH_by_DASH_id,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27603__auto__;
})(),cljs.core.cst$kw$on_DASH_success,(function (){var result__27603__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_search_DASH_success,(function (){var result__27603__auto__ = item_index;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(13),cljs.core.cst$kw$result,result__27603__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27603__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(11),cljs.core.cst$kw$result,result__27603__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_search_DASH_success,cljs.core.cst$sym$item_DASH_index], null),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27603__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(5),cljs.core.cst$kw$result,result__27603__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$query,cljs.core.cst$sym$query,cljs.core.cst$kw$items_DASH_by_DASH_id,cljs.core.cst$sym$items_DASH_by_DASH_id,cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_search_DASH_success,cljs.core.cst$sym$item_DASH_index], null)], null),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27603__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__27603__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.cst$sym$db,cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_search_BANG_,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$query,cljs.core.cst$sym$query,cljs.core.cst$kw$items_DASH_by_DASH_id,cljs.core.cst$sym$items_DASH_by_DASH_id,cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_search_DASH_success,cljs.core.cst$sym$item_DASH_index], null)], null)], null),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__27603__auto__;
}catch (e27869){var e = e27869;
throw e;
}}):(function (p__27870,p__27871){
var map__27872 = p__27870;
var map__27872__$1 = cljs.core.__destructure_map(map__27872);
var map__27873 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27872__$1,cljs.core.cst$kw$db);
var map__27873__$1 = cljs.core.__destructure_map(map__27873);
var db = map__27873__$1;
var map__27874 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27873__$1,cljs.core.cst$kw$items);
var map__27874__$1 = cljs.core.__destructure_map(map__27874);
var items_by_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27874__$1,cljs.core.cst$kw$by_DASH_id);
var vec__27875 = p__27871;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27875,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27875,(1),null);
var query = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27875,(2),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,db,cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_search_BANG_,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$query,query,cljs.core.cst$kw$items_DASH_by_DASH_id,items_by_id,cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_search_DASH_success,item_index], null)], null)], null);
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_clear_DASH_search,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__27878,p__27879){
var map__27880 = p__27878;
var map__27880__$1 = cljs.core.__destructure_map(map__27880);
var map__27881 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27880__$1,cljs.core.cst$kw$db);
var map__27881__$1 = cljs.core.__destructure_map(map__27881);
var db = map__27881__$1;
var selected_item_refs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27881__$1,cljs.core.cst$kw$selected_DASH_item_DASH_refs);
var vec__27882 = p__27879;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27882,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27882,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$selected_DASH_item_DASH_refs], null),cljs.core.cst$kw$as,cljs.core.cst$sym$db], null),cljs.core.cst$kw$db], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$item_DASH_index], null)], null),cljs.core.list(cljs.core.cst$sym$handlers_SLASH_navigate_DASH_with_DASH_selected_DASH_item_DASH_refs,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_clear_DASH_search,cljs.core.cst$sym$db,cljs.core.cst$sym$item_DASH_index)], null),cljs.core.list(cljs.core.cst$sym$update,cljs.core.cst$sym$selected_DASH_item_DASH_refs,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$sym$dissoc,cljs.core.cst$kw$id))));

var result__27603__auto__ = nw_calculator.event_handlers.navigate_with_selected_item_refs((function (){var result__27603__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,(function (){var result__27603__auto__ = nw_calculator.event_handlers.clear_search.cljs$core$IFn$_invoke$arity$2((function (){var result__27603__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(5),cljs.core.cst$kw$result,result__27603__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27603__auto__;
})(),(function (){var result__27603__auto__ = item_index;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(6),cljs.core.cst$kw$result,result__27603__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27603__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(4),cljs.core.cst$kw$result,result__27603__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_clear_DASH_search,cljs.core.cst$sym$db,cljs.core.cst$sym$item_DASH_index),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27603__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(2),cljs.core.cst$kw$result,result__27603__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_clear_DASH_search,cljs.core.cst$sym$db,cljs.core.cst$sym$item_DASH_index)], null),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27603__auto__;
})(),(function (){var result__27603__auto__ = cljs.core.update.cljs$core$IFn$_invoke$arity$4((function (){var result__27603__auto__ = selected_item_refs;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(8),cljs.core.cst$kw$result,result__27603__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$selected_DASH_item_DASH_refs,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27603__auto__;
})(),(function (){var result__27603__auto__ = item_index;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,3,cljs.core.cst$kw$syntax_DASH_order,(9),cljs.core.cst$kw$result,result__27603__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27603__auto__;
})(),(function (){var result__27603__auto__ = cljs.core.dissoc;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(10),cljs.core.cst$kw$result,result__27603__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$dissoc,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27603__auto__;
})(),cljs.core.cst$kw$id);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(7),cljs.core.cst$kw$result,result__27603__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$update,cljs.core.cst$sym$selected_DASH_item_DASH_refs,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$sym$dissoc,cljs.core.cst$kw$id),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27603__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__27603__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_navigate_DASH_with_DASH_selected_DASH_item_DASH_refs,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_clear_DASH_search,cljs.core.cst$sym$db,cljs.core.cst$sym$item_DASH_index)], null),cljs.core.list(cljs.core.cst$sym$update,cljs.core.cst$sym$selected_DASH_item_DASH_refs,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$sym$dissoc,cljs.core.cst$kw$id)),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__27603__auto__;
}catch (e27885){var e = e27885;
throw e;
}}):(function (p__27886,p__27887){
var map__27888 = p__27886;
var map__27888__$1 = cljs.core.__destructure_map(map__27888);
var map__27889 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27888__$1,cljs.core.cst$kw$db);
var map__27889__$1 = cljs.core.__destructure_map(map__27889);
var db = map__27889__$1;
var selected_item_refs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27889__$1,cljs.core.cst$kw$selected_DASH_item_DASH_refs);
var vec__27890 = p__27887;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27890,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27890,(1),null);
return nw_calculator.event_handlers.navigate_with_selected_item_refs(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,nw_calculator.event_handlers.clear_search.cljs$core$IFn$_invoke$arity$2(db,item_index)], null),cljs.core.update.cljs$core$IFn$_invoke$arity$4(selected_item_refs,item_index,cljs.core.dissoc,cljs.core.cst$kw$id));
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_select_DASH_item,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__27893,p__27894){
var map__27895 = p__27893;
var map__27895__$1 = cljs.core.__destructure_map(map__27895);
var map__27896 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27895__$1,cljs.core.cst$kw$db);
var map__27896__$1 = cljs.core.__destructure_map(map__27896);
var db = map__27896__$1;
var selected_item_refs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27896__$1,cljs.core.cst$kw$selected_DASH_item_DASH_refs);
var vec__27897 = p__27894;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27897,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27897,(1),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27897,(2),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$selected_DASH_item_DASH_refs], null),cljs.core.cst$kw$as,cljs.core.cst$sym$db], null),cljs.core.cst$kw$db], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$sym$item_DASH_id], null)], null),cljs.core.list(cljs.core.cst$sym$handlers_SLASH_navigate_DASH_with_DASH_selected_DASH_item_DASH_refs,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_clear_DASH_search,cljs.core.cst$sym$db,cljs.core.cst$sym$item_DASH_index)], null),cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$selected_DASH_item_DASH_refs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$id], null),cljs.core.cst$sym$item_DASH_id))));

var result__27603__auto__ = nw_calculator.event_handlers.navigate_with_selected_item_refs((function (){var result__27603__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,(function (){var result__27603__auto__ = nw_calculator.event_handlers.clear_search.cljs$core$IFn$_invoke$arity$2((function (){var result__27603__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(5),cljs.core.cst$kw$result,result__27603__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27603__auto__;
})(),(function (){var result__27603__auto__ = item_index;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(6),cljs.core.cst$kw$result,result__27603__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27603__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(4),cljs.core.cst$kw$result,result__27603__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_clear_DASH_search,cljs.core.cst$sym$db,cljs.core.cst$sym$item_DASH_index),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27603__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(2),cljs.core.cst$kw$result,result__27603__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_clear_DASH_search,cljs.core.cst$sym$db,cljs.core.cst$sym$item_DASH_index)], null),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27603__auto__;
})(),(function (){var result__27603__auto__ = cljs.core.assoc_in((function (){var result__27603__auto__ = selected_item_refs;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(8),cljs.core.cst$kw$result,result__27603__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$selected_DASH_item_DASH_refs,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27603__auto__;
})(),(function (){var result__27603__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var result__27603__auto__ = item_index;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,3,cljs.core.cst$kw$syntax_DASH_order,(10),cljs.core.cst$kw$result,result__27603__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27603__auto__;
})(),cljs.core.cst$kw$id], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(9),cljs.core.cst$kw$result,result__27603__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$id], null),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27603__auto__;
})(),(function (){var result__27603__auto__ = item_id;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(12),cljs.core.cst$kw$result,result__27603__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$item_DASH_id,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27603__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(7),cljs.core.cst$kw$result,result__27603__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$selected_DASH_item_DASH_refs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$id], null),cljs.core.cst$sym$item_DASH_id),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27603__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__27603__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_navigate_DASH_with_DASH_selected_DASH_item_DASH_refs,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_clear_DASH_search,cljs.core.cst$sym$db,cljs.core.cst$sym$item_DASH_index)], null),cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$selected_DASH_item_DASH_refs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$id], null),cljs.core.cst$sym$item_DASH_id)),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__27603__auto__;
}catch (e27900){var e = e27900;
throw e;
}}):(function (p__27901,p__27902){
var map__27903 = p__27901;
var map__27903__$1 = cljs.core.__destructure_map(map__27903);
var map__27904 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27903__$1,cljs.core.cst$kw$db);
var map__27904__$1 = cljs.core.__destructure_map(map__27904);
var db = map__27904__$1;
var selected_item_refs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27904__$1,cljs.core.cst$kw$selected_DASH_item_DASH_refs);
var vec__27905 = p__27902;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27905,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27905,(1),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27905,(2),null);
return nw_calculator.event_handlers.navigate_with_selected_item_refs(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,nw_calculator.event_handlers.clear_search.cljs$core$IFn$_invoke$arity$2(db,item_index)], null),cljs.core.assoc_in(selected_item_refs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item_index,cljs.core.cst$kw$id], null),item_id));
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_set_DASH_selected_DASH_item_DASH_refs,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__27908){
var vec__27909 = p__27908;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27909,(0),null);
var selected_items = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27909,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$selected_DASH_items], null)], null),cljs.core.list(cljs.core.cst$sym$handlers_SLASH_set_DASH_selected_DASH_item_DASH_refs,cljs.core.cst$sym$db,cljs.core.cst$sym$selected_DASH_items)));

var result__27603__auto__ = nw_calculator.event_handlers.set_selected_item_refs((function (){var result__27603__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(2),cljs.core.cst$kw$result,result__27603__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27603__auto__;
})(),(function (){var result__27603__auto__ = selected_items;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(3),cljs.core.cst$kw$result,result__27603__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$selected_DASH_items,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27603__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__27603__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_set_DASH_selected_DASH_item_DASH_refs,cljs.core.cst$sym$db,cljs.core.cst$sym$selected_DASH_items),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__27603__auto__;
}catch (e27912){var e = e27912;
throw e;
}}):(function (db,p__27913){
var vec__27914 = p__27913;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27914,(0),null);
var selected_items = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27914,(1),null);
return nw_calculator.event_handlers.set_selected_item_refs(db,selected_items);
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_select_DASH_option,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__27917,p__27918){
var map__27919 = p__27917;
var map__27919__$1 = cljs.core.__destructure_map(map__27919);
var map__27920 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27919__$1,cljs.core.cst$kw$db);
var map__27920__$1 = cljs.core.__destructure_map(map__27920);
var selected_item_refs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27920__$1,cljs.core.cst$kw$selected_DASH_item_DASH_refs);
var vec__27921 = p__27918;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27921,(0),null);
var vec__27924 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27921,(1),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27924,(0),null);
var category_path = vec__27924;
var option_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27921,(2),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$selected_DASH_item_DASH_refs], null)], null),cljs.core.cst$kw$db], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$as,cljs.core.cst$sym$category_DASH_path], null),cljs.core.cst$sym$option_DASH_id], null)], null),cljs.core.list(cljs.core.cst$sym$handlers_SLASH_navigate_DASH_with_DASH_selected_DASH_item_DASH_refs,cljs.core.PersistentArrayMap.EMPTY,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$selected_DASH_item_DASH_refs,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$selected_DASH_options,cljs.core.cst$sym$category_DASH_path,cljs.core.cst$kw$id], null),cljs.core.cst$sym$option_DASH_id))));

var result__27603__auto__ = nw_calculator.event_handlers.navigate_with_selected_item_refs((function (){var result__27603__auto__ = cljs.core.PersistentArrayMap.EMPTY;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(2),cljs.core.cst$kw$result,result__27603__auto__,cljs.core.cst$kw$form,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27603__auto__;
})(),(function (){var result__27603__auto__ = cljs.core.assoc_in((function (){var result__27603__auto__ = selected_item_refs;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(5),cljs.core.cst$kw$result,result__27603__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$selected_DASH_item_DASH_refs,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27603__auto__;
})(),(function (){var result__27603__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var result__27603__auto__ = item_index;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(7),cljs.core.cst$kw$result,result__27603__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27603__auto__;
})(),cljs.core.cst$kw$selected_DASH_options,(function (){var result__27603__auto__ = category_path;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(9),cljs.core.cst$kw$result,result__27603__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$category_DASH_path,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27603__auto__;
})(),cljs.core.cst$kw$id], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(6),cljs.core.cst$kw$result,result__27603__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$selected_DASH_options,cljs.core.cst$sym$category_DASH_path,cljs.core.cst$kw$id], null),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27603__auto__;
})(),(function (){var result__27603__auto__ = option_id;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(11),cljs.core.cst$kw$result,result__27603__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$option_DASH_id,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27603__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(4),cljs.core.cst$kw$result,result__27603__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$selected_DASH_item_DASH_refs,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$selected_DASH_options,cljs.core.cst$sym$category_DASH_path,cljs.core.cst$kw$id], null),cljs.core.cst$sym$option_DASH_id),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27603__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__27603__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_navigate_DASH_with_DASH_selected_DASH_item_DASH_refs,cljs.core.PersistentArrayMap.EMPTY,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$selected_DASH_item_DASH_refs,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$selected_DASH_options,cljs.core.cst$sym$category_DASH_path,cljs.core.cst$kw$id], null),cljs.core.cst$sym$option_DASH_id)),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__27603__auto__;
}catch (e27927){var e = e27927;
throw e;
}}):(function (p__27928,p__27929){
var map__27930 = p__27928;
var map__27930__$1 = cljs.core.__destructure_map(map__27930);
var map__27931 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27930__$1,cljs.core.cst$kw$db);
var map__27931__$1 = cljs.core.__destructure_map(map__27931);
var selected_item_refs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27931__$1,cljs.core.cst$kw$selected_DASH_item_DASH_refs);
var vec__27932 = p__27929;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27932,(0),null);
var vec__27935 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27932,(1),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27935,(0),null);
var category_path = vec__27935;
var option_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27932,(2),null);
return nw_calculator.event_handlers.navigate_with_selected_item_refs(cljs.core.PersistentArrayMap.EMPTY,cljs.core.assoc_in(selected_item_refs,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [item_index,cljs.core.cst$kw$selected_DASH_options,category_path,cljs.core.cst$kw$id], null),option_id));
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_set_DASH_quantity_DASH_multiplier,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__27938,p__27939){
var map__27940 = p__27938;
var map__27940__$1 = cljs.core.__destructure_map(map__27940);
var map__27941 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27940__$1,cljs.core.cst$kw$db);
var map__27941__$1 = cljs.core.__destructure_map(map__27941);
var selected_item_refs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27941__$1,cljs.core.cst$kw$selected_DASH_item_DASH_refs);
var vec__27942 = p__27939;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27942,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27942,(1),null);
var multiplier = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27942,(2),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$selected_DASH_item_DASH_refs], null)], null),cljs.core.cst$kw$db], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$sym$multiplier], null)], null),cljs.core.list(cljs.core.cst$sym$handlers_SLASH_navigate_DASH_with_DASH_selected_DASH_item_DASH_refs,cljs.core.PersistentArrayMap.EMPTY,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$selected_DASH_item_DASH_refs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$quantity_DASH_multiplier], null),cljs.core.cst$sym$multiplier))));

var result__27603__auto__ = nw_calculator.event_handlers.navigate_with_selected_item_refs((function (){var result__27603__auto__ = cljs.core.PersistentArrayMap.EMPTY;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(2),cljs.core.cst$kw$result,result__27603__auto__,cljs.core.cst$kw$form,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27603__auto__;
})(),(function (){var result__27603__auto__ = cljs.core.assoc_in((function (){var result__27603__auto__ = selected_item_refs;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(5),cljs.core.cst$kw$result,result__27603__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$selected_DASH_item_DASH_refs,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27603__auto__;
})(),(function (){var result__27603__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var result__27603__auto__ = item_index;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(7),cljs.core.cst$kw$result,result__27603__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27603__auto__;
})(),cljs.core.cst$kw$quantity_DASH_multiplier], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(6),cljs.core.cst$kw$result,result__27603__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$quantity_DASH_multiplier], null),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27603__auto__;
})(),(function (){var result__27603__auto__ = multiplier;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(9),cljs.core.cst$kw$result,result__27603__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$multiplier,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27603__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(4),cljs.core.cst$kw$result,result__27603__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$selected_DASH_item_DASH_refs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$quantity_DASH_multiplier], null),cljs.core.cst$sym$multiplier),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27603__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__27603__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_navigate_DASH_with_DASH_selected_DASH_item_DASH_refs,cljs.core.PersistentArrayMap.EMPTY,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$selected_DASH_item_DASH_refs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$quantity_DASH_multiplier], null),cljs.core.cst$sym$multiplier)),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__27603__auto__;
}catch (e27945){var e = e27945;
throw e;
}}):(function (p__27946,p__27947){
var map__27948 = p__27946;
var map__27948__$1 = cljs.core.__destructure_map(map__27948);
var map__27949 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27948__$1,cljs.core.cst$kw$db);
var map__27949__$1 = cljs.core.__destructure_map(map__27949);
var selected_item_refs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27949__$1,cljs.core.cst$kw$selected_DASH_item_DASH_refs);
var vec__27950 = p__27947;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27950,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27950,(1),null);
var multiplier = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27950,(2),null);
return nw_calculator.event_handlers.navigate_with_selected_item_refs(cljs.core.PersistentArrayMap.EMPTY,cljs.core.assoc_in(selected_item_refs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item_index,cljs.core.cst$kw$quantity_DASH_multiplier], null),multiplier));
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_add_DASH_empty_DASH_item,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__27953,_){
var map__27954 = p__27953;
var map__27954__$1 = cljs.core.__destructure_map(map__27954);
var map__27955 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27954__$1,cljs.core.cst$kw$db);
var map__27955__$1 = cljs.core.__destructure_map(map__27955);
var db = map__27955__$1;
var selected_item_refs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27955__$1,cljs.core.cst$kw$selected_DASH_item_DASH_refs);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$selected_DASH_item_DASH_refs], null),cljs.core.cst$kw$as,cljs.core.cst$sym$db], null),cljs.core.cst$kw$db], null),cljs.core.cst$sym$_], null),cljs.core.list(cljs.core.cst$sym$handlers_SLASH_navigate_DASH_with_DASH_selected_DASH_item_DASH_refs,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.list(cljs.core.cst$sym$update,cljs.core.cst$sym$db,cljs.core.cst$kw$search_DASH_results,cljs.core.cst$sym$conj,cljs.core.PersistentVector.EMPTY)], null),cljs.core.list(cljs.core.cst$sym$conj,cljs.core.cst$sym$selected_DASH_item_DASH_refs,cljs.core.cst$sym$df_SLASH_empty_DASH_selected_DASH_item_DASH_ref))));

var result__27603__auto__ = nw_calculator.event_handlers.navigate_with_selected_item_refs((function (){var result__27603__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,(function (){var result__27603__auto__ = cljs.core.update.cljs$core$IFn$_invoke$arity$4((function (){var result__27603__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(5),cljs.core.cst$kw$result,result__27603__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27603__auto__;
})(),cljs.core.cst$kw$search_DASH_results,(function (){var result__27603__auto__ = cljs.core.conj;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(7),cljs.core.cst$kw$result,result__27603__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$conj,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27603__auto__;
})(),(function (){var result__27603__auto__ = cljs.core.PersistentVector.EMPTY;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(8),cljs.core.cst$kw$result,result__27603__auto__,cljs.core.cst$kw$form,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27603__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(4),cljs.core.cst$kw$result,result__27603__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$update,cljs.core.cst$sym$db,cljs.core.cst$kw$search_DASH_results,cljs.core.cst$sym$conj,cljs.core.PersistentVector.EMPTY),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27603__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(2),cljs.core.cst$kw$result,result__27603__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.list(cljs.core.cst$sym$update,cljs.core.cst$sym$db,cljs.core.cst$kw$search_DASH_results,cljs.core.cst$sym$conj,cljs.core.PersistentVector.EMPTY)], null),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27603__auto__;
})(),(function (){var result__27603__auto__ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var result__27603__auto__ = selected_item_refs;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(11),cljs.core.cst$kw$result,result__27603__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$selected_DASH_item_DASH_refs,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27603__auto__;
})(),(function (){var result__27603__auto__ = nw_calculator.defaults.empty_selected_item_ref;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(12),cljs.core.cst$kw$result,result__27603__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$df_SLASH_empty_DASH_selected_DASH_item_DASH_ref,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27603__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(10),cljs.core.cst$kw$result,result__27603__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$conj,cljs.core.cst$sym$selected_DASH_item_DASH_refs,cljs.core.cst$sym$df_SLASH_empty_DASH_selected_DASH_item_DASH_ref),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27603__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__27603__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_navigate_DASH_with_DASH_selected_DASH_item_DASH_refs,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.list(cljs.core.cst$sym$update,cljs.core.cst$sym$db,cljs.core.cst$kw$search_DASH_results,cljs.core.cst$sym$conj,cljs.core.PersistentVector.EMPTY)], null),cljs.core.list(cljs.core.cst$sym$conj,cljs.core.cst$sym$selected_DASH_item_DASH_refs,cljs.core.cst$sym$df_SLASH_empty_DASH_selected_DASH_item_DASH_ref)),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__27603__auto__;
}catch (e27956){var e = e27956;
throw e;
}}):(function (p__27957,_){
var map__27958 = p__27957;
var map__27958__$1 = cljs.core.__destructure_map(map__27958);
var map__27959 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27958__$1,cljs.core.cst$kw$db);
var map__27959__$1 = cljs.core.__destructure_map(map__27959);
var db = map__27959__$1;
var selected_item_refs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27959__$1,cljs.core.cst$kw$selected_DASH_item_DASH_refs);
return nw_calculator.event_handlers.navigate_with_selected_item_refs(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,cljs.core.cst$kw$search_DASH_results,cljs.core.conj,cljs.core.PersistentVector.EMPTY)], null),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(selected_item_refs,nw_calculator.defaults.empty_selected_item_ref));
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_remove_DASH_item,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__27960,p__27961){
var map__27962 = p__27960;
var map__27962__$1 = cljs.core.__destructure_map(map__27962);
var map__27963 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27962__$1,cljs.core.cst$kw$db);
var map__27963__$1 = cljs.core.__destructure_map(map__27963);
var db = map__27963__$1;
var selected_item_refs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27963__$1,cljs.core.cst$kw$selected_DASH_item_DASH_refs);
var vec__27964 = p__27961;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27964,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27964,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$selected_DASH_item_DASH_refs], null),cljs.core.cst$kw$as,cljs.core.cst$sym$db], null),cljs.core.cst$kw$db], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$item_DASH_index], null)], null),cljs.core.list(cljs.core.cst$sym$handlers_SLASH_navigate_DASH_with_DASH_selected_DASH_item_DASH_refs,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.list(cljs.core.cst$sym$update,cljs.core.cst$sym$db,cljs.core.cst$kw$search_DASH_results,cljs.core.cst$sym$util_SLASH_vec_DASH_remove_DASH_nth,cljs.core.cst$sym$item_DASH_index)], null),cljs.core.list(cljs.core.cst$sym$util_SLASH_vec_DASH_remove_DASH_nth,cljs.core.cst$sym$selected_DASH_item_DASH_refs,cljs.core.cst$sym$item_DASH_index))));

var result__27603__auto__ = nw_calculator.event_handlers.navigate_with_selected_item_refs((function (){var result__27603__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,(function (){var result__27603__auto__ = cljs.core.update.cljs$core$IFn$_invoke$arity$4((function (){var result__27603__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(5),cljs.core.cst$kw$result,result__27603__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27603__auto__;
})(),cljs.core.cst$kw$search_DASH_results,(function (){var result__27603__auto__ = nw_calculator.utilities.vec_remove_nth;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(7),cljs.core.cst$kw$result,result__27603__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$util_SLASH_vec_DASH_remove_DASH_nth,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27603__auto__;
})(),(function (){var result__27603__auto__ = item_index;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(8),cljs.core.cst$kw$result,result__27603__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27603__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(4),cljs.core.cst$kw$result,result__27603__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$update,cljs.core.cst$sym$db,cljs.core.cst$kw$search_DASH_results,cljs.core.cst$sym$util_SLASH_vec_DASH_remove_DASH_nth,cljs.core.cst$sym$item_DASH_index),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27603__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(2),cljs.core.cst$kw$result,result__27603__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.list(cljs.core.cst$sym$update,cljs.core.cst$sym$db,cljs.core.cst$kw$search_DASH_results,cljs.core.cst$sym$util_SLASH_vec_DASH_remove_DASH_nth,cljs.core.cst$sym$item_DASH_index)], null),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27603__auto__;
})(),(function (){var result__27603__auto__ = nw_calculator.utilities.vec_remove_nth((function (){var result__27603__auto__ = selected_item_refs;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(10),cljs.core.cst$kw$result,result__27603__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$selected_DASH_item_DASH_refs,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27603__auto__;
})(),(function (){var result__27603__auto__ = item_index;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,3,cljs.core.cst$kw$syntax_DASH_order,(11),cljs.core.cst$kw$result,result__27603__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27603__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(9),cljs.core.cst$kw$result,result__27603__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$util_SLASH_vec_DASH_remove_DASH_nth,cljs.core.cst$sym$selected_DASH_item_DASH_refs,cljs.core.cst$sym$item_DASH_index),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27603__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__27603__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_navigate_DASH_with_DASH_selected_DASH_item_DASH_refs,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.list(cljs.core.cst$sym$update,cljs.core.cst$sym$db,cljs.core.cst$kw$search_DASH_results,cljs.core.cst$sym$util_SLASH_vec_DASH_remove_DASH_nth,cljs.core.cst$sym$item_DASH_index)], null),cljs.core.list(cljs.core.cst$sym$util_SLASH_vec_DASH_remove_DASH_nth,cljs.core.cst$sym$selected_DASH_item_DASH_refs,cljs.core.cst$sym$item_DASH_index)),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__27603__auto__;
}catch (e27967){var e = e27967;
throw e;
}}):(function (p__27968,p__27969){
var map__27970 = p__27968;
var map__27970__$1 = cljs.core.__destructure_map(map__27970);
var map__27971 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27970__$1,cljs.core.cst$kw$db);
var map__27971__$1 = cljs.core.__destructure_map(map__27971);
var db = map__27971__$1;
var selected_item_refs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27971__$1,cljs.core.cst$kw$selected_DASH_item_DASH_refs);
var vec__27972 = p__27969;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27972,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27972,(1),null);
return nw_calculator.event_handlers.navigate_with_selected_item_refs(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,cljs.core.cst$kw$search_DASH_results,nw_calculator.utilities.vec_remove_nth,item_index)], null),nw_calculator.utilities.vec_remove_nth(selected_item_refs,item_index));
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_remove_DASH_all_DASH_items,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__27975,_){
var map__27976 = p__27975;
var map__27976__$1 = cljs.core.__destructure_map(map__27976);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27976__$1,cljs.core.cst$kw$db);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$db,cljs.core.cst$kw$db], null),cljs.core.cst$sym$_], null),cljs.core.list(cljs.core.cst$sym$handlers_SLASH_navigate_DASH_with_DASH_selected_DASH_item_DASH_refs,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_clear_DASH_search,cljs.core.cst$sym$db)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$df_SLASH_empty_DASH_selected_DASH_item_DASH_ref], null))));

var result__27603__auto__ = nw_calculator.event_handlers.navigate_with_selected_item_refs((function (){var result__27603__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,(function (){var result__27603__auto__ = nw_calculator.event_handlers.clear_search.cljs$core$IFn$_invoke$arity$1((function (){var result__27603__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(5),cljs.core.cst$kw$result,result__27603__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27603__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(4),cljs.core.cst$kw$result,result__27603__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_clear_DASH_search,cljs.core.cst$sym$db),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27603__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(2),cljs.core.cst$kw$result,result__27603__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_clear_DASH_search,cljs.core.cst$sym$db)], null),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27603__auto__;
})(),(function (){var result__27603__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var result__27603__auto__ = nw_calculator.defaults.empty_selected_item_ref;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(7),cljs.core.cst$kw$result,result__27603__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$df_SLASH_empty_DASH_selected_DASH_item_DASH_ref,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27603__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(6),cljs.core.cst$kw$result,result__27603__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$df_SLASH_empty_DASH_selected_DASH_item_DASH_ref], null),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27603__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__27603__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_navigate_DASH_with_DASH_selected_DASH_item_DASH_refs,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_clear_DASH_search,cljs.core.cst$sym$db)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$df_SLASH_empty_DASH_selected_DASH_item_DASH_ref], null)),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__27603__auto__;
}catch (e27977){var e = e27977;
throw e;
}}):(function (p__27978,_){
var map__27979 = p__27978;
var map__27979__$1 = cljs.core.__destructure_map(map__27979);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27979__$1,cljs.core.cst$kw$db);
return nw_calculator.event_handlers.navigate_with_selected_item_refs(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,nw_calculator.event_handlers.clear_search.cljs$core$IFn$_invoke$arity$1(db)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.defaults.empty_selected_item_ref], null));
})));
