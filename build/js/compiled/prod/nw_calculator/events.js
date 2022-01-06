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
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_initialize_DASH_db,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_,p__27796){
var vec__27797 = p__27796;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27797,(0),null);
var default_db = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27797,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$default_DASH_db], null)], null),cljs.core.cst$sym$default_DASH_db));

var result__27601__auto__ = default_db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__27601__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$default_DASH_db,cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__27601__auto__;
}catch (e27800){var e = e27800;
throw e;
}}):(function (_,p__27801){
var vec__27802 = p__27801;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27802,(0),null);
var default_db = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27802,(1),null);
return default_db;
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_navigate,(function (_,p__27805){
var vec__27806 = p__27805;
var seq__27807 = cljs.core.seq(vec__27806);
var first__27808 = cljs.core.first(seq__27807);
var seq__27807__$1 = cljs.core.next(seq__27807);
var ___$1 = first__27808;
var route = seq__27807__$1;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_navigate_BANG_,route], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_navigated,(function (p__27809,p__27810){
var map__27811 = p__27809;
var map__27811__$1 = cljs.core.__destructure_map(map__27811);
var db = map__27811__$1;
var map__27812 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27811__$1,cljs.core.cst$kw$current_DASH_route);
var map__27812__$1 = cljs.core.__destructure_map(map__27812);
var controllers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27812__$1,cljs.core.cst$kw$controllers);
var vec__27813 = p__27810;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27813,(0),null);
var new_match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27813,(1),null);
var new_route = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_match,cljs.core.cst$kw$controllers,reitit.frontend.controllers.apply_controllers(controllers,new_match));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$current_DASH_route,new_route);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_set_DASH_state,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__27816){
var vec__27817 = p__27816;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27817,(0),null);
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27817,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$state], null)], null),cljs.core.list(cljs.core.cst$sym$assoc,cljs.core.cst$sym$db,cljs.core.cst$kw$state,cljs.core.cst$sym$state)));

var result__27601__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var result__27601__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(2),cljs.core.cst$kw$result,result__27601__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27601__auto__;
})(),cljs.core.cst$kw$state,(function (){var result__27601__auto__ = state;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(4),cljs.core.cst$kw$result,result__27601__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$state,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27601__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__27601__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$assoc,cljs.core.cst$sym$db,cljs.core.cst$kw$state,cljs.core.cst$sym$state),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__27601__auto__;
}catch (e27820){var e = e27820;
throw e;
}}):(function (db,p__27821){
var vec__27822 = p__27821;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27822,(0),null);
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27822,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$state,state);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_success,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__27825){
var vec__27826 = p__27825;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27826,(0),null);
var items_edn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27826,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$items_DASH_edn], null)], null),cljs.core.list(cljs.core.cst$sym$_DASH__GT_,cljs.core.cst$sym$db,cljs.core.list(cljs.core.cst$sym$update,cljs.core.cst$kw$items,cljs.core.cst$sym$c_SLASH_add_DASH_items,cljs.core.cst$sym$items_DASH_edn),cljs.core.list(cljs.core.cst$sym$handlers_SLASH_next_DASH_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state], null),cljs.core.cst$sym$fsm_SLASH_app_DASH_fsm,cljs.core.cst$kw$success))));

var result__27601__auto__ = (function (){var result__27608__auto__ = nw_calculator.event_handlers.next_state((function (){var result__27608__auto__ = cljs.core.update.cljs$core$IFn$_invoke$arity$4((function (){var result__27601__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(2),cljs.core.cst$kw$result,result__27601__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27601__auto__;
})(),cljs.core.cst$kw$items,(function (){var result__27601__auto__ = compound2.core.add_items;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(6),cljs.core.cst$kw$result,result__27601__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$c_SLASH_add_DASH_items,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27601__auto__;
})(),(function (){var result__27601__auto__ = items_edn;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(7),cljs.core.cst$kw$result,result__27601__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$items_DASH_edn,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27601__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(3),cljs.core.cst$kw$result,result__27608__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$update,cljs.core.cst$kw$items,cljs.core.cst$sym$c_SLASH_add_DASH_items,cljs.core.cst$sym$items_DASH_edn),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27608__auto__;
})(),(function (){var result__27601__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(10),cljs.core.cst$kw$result,result__27601__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state], null),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27601__auto__;
})(),(function (){var result__27601__auto__ = nw_calculator.fsm.app_fsm;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(12),cljs.core.cst$kw$result,result__27601__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$fsm_SLASH_app_DASH_fsm,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27601__auto__;
})(),cljs.core.cst$kw$success);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(8),cljs.core.cst$kw$result,result__27608__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_next_DASH_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state], null),cljs.core.cst$sym$fsm_SLASH_app_DASH_fsm,cljs.core.cst$kw$success),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27608__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__27601__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$_DASH__GT_,cljs.core.cst$sym$db,cljs.core.list(cljs.core.cst$sym$update,cljs.core.cst$kw$items,cljs.core.cst$sym$c_SLASH_add_DASH_items,cljs.core.cst$sym$items_DASH_edn),cljs.core.list(cljs.core.cst$sym$handlers_SLASH_next_DASH_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state], null),cljs.core.cst$sym$fsm_SLASH_app_DASH_fsm,cljs.core.cst$kw$success)),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__27601__auto__;
}catch (e27829){var e = e27829;
throw e;
}}):(function (db,p__27830){
var vec__27831 = p__27830;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27831,(0),null);
var items_edn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27831,(1),null);
return nw_calculator.event_handlers.next_state(cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,cljs.core.cst$kw$items,compound2.core.add_items,items_edn),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state], null),nw_calculator.fsm.app_fsm,cljs.core.cst$kw$success);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_failure,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__27834){
var vec__27835 = p__27834;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27835,(0),null);
var _resp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27835,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$_resp], null)], null),cljs.core.cst$sym$db));

var result__27601__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__27601__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db,cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__27601__auto__;
}catch (e27838){var e = e27838;
throw e;
}}):(function (db,p__27839){
var vec__27840 = p__27839;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27840,(0),null);
var _resp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27840,(1),null);
return db;
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__27843,_){
var map__27844 = p__27843;
var map__27844__$1 = cljs.core.__destructure_map(map__27844);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27844__$1,cljs.core.cst$kw$db);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$db,cljs.core.cst$kw$db], null),cljs.core.cst$sym$_], null),cljs.core.list(cljs.core.cst$sym$handlers_SLASH_next_DASH_state,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$db,cljs.core.cst$sym$db,cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_log_DASH_info,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u2B07\uFE0F Fetching item data!"], null),cljs.core.cst$kw$http_DASH_xhrio,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$method,cljs.core.cst$kw$get,cljs.core.cst$kw$response_DASH_format,cljs.core.list(cljs.core.cst$sym$ajax_SLASH_json_DASH_response_DASH_format,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywords_QMARK_,true], null)),cljs.core.cst$kw$uri,"/data/items.json",cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_success], null),cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_failure], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db,cljs.core.cst$kw$state], null),cljs.core.cst$sym$fsm_SLASH_app_DASH_fsm,cljs.core.cst$kw$fetch_DASH_item_DASH_data)));

var result__27601__auto__ = nw_calculator.event_handlers.next_state((function (){var result__27601__auto__ = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$db,(function (){var result__27601__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(4),cljs.core.cst$kw$result,result__27601__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27601__auto__;
})(),cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_log_DASH_info,(function (){var result__27601__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u2B07\uFE0F Fetching item data!"], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(6),cljs.core.cst$kw$result,result__27601__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u2B07\uFE0F Fetching item data!"], null),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27601__auto__;
})(),cljs.core.cst$kw$http_DASH_xhrio,(function (){var result__27601__auto__ = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$method,cljs.core.cst$kw$get,cljs.core.cst$kw$response_DASH_format,(function (){var result__27601__auto__ = (function (){var G__27846 = (function (){var result__27601__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywords_QMARK_,true], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(14),cljs.core.cst$kw$result,result__27601__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywords_QMARK_,true], null),cljs.core.cst$kw$indent_DASH_level,(4)], null));

return result__27601__auto__;
})();
return (ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1 ? ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(G__27846) : ajax.core.json_response_format.call(null,G__27846));
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(13),cljs.core.cst$kw$result,result__27601__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$ajax_SLASH_json_DASH_response_DASH_format,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywords_QMARK_,true], null)),cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27601__auto__;
})(),cljs.core.cst$kw$uri,"/data/items.json",cljs.core.cst$kw$on_DASH_success,(function (){var result__27601__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_success], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(20),cljs.core.cst$kw$result,result__27601__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_success], null),cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27601__auto__;
})(),cljs.core.cst$kw$on_DASH_failure,(function (){var result__27601__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_failure], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(23),cljs.core.cst$kw$result,result__27601__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_failure], null),cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27601__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(9),cljs.core.cst$kw$result,result__27601__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$method,cljs.core.cst$kw$get,cljs.core.cst$kw$response_DASH_format,cljs.core.list(cljs.core.cst$sym$ajax_SLASH_json_DASH_response_DASH_format,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywords_QMARK_,true], null)),cljs.core.cst$kw$uri,"/data/items.json",cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_success], null),cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_failure], null)], null),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27601__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(2),cljs.core.cst$kw$result,result__27601__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$db,cljs.core.cst$sym$db,cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_log_DASH_info,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u2B07\uFE0F Fetching item data!"], null),cljs.core.cst$kw$http_DASH_xhrio,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$method,cljs.core.cst$kw$get,cljs.core.cst$kw$response_DASH_format,cljs.core.list(cljs.core.cst$sym$ajax_SLASH_json_DASH_response_DASH_format,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywords_QMARK_,true], null)),cljs.core.cst$kw$uri,"/data/items.json",cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_success], null),cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_failure], null)], null)], null),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27601__auto__;
})(),(function (){var result__27601__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db,cljs.core.cst$kw$state], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(25),cljs.core.cst$kw$result,result__27601__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db,cljs.core.cst$kw$state], null),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27601__auto__;
})(),(function (){var result__27601__auto__ = nw_calculator.fsm.app_fsm;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(28),cljs.core.cst$kw$result,result__27601__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$fsm_SLASH_app_DASH_fsm,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27601__auto__;
})(),cljs.core.cst$kw$fetch_DASH_item_DASH_data);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__27601__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_next_DASH_state,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$db,cljs.core.cst$sym$db,cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_log_DASH_info,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u2B07\uFE0F Fetching item data!"], null),cljs.core.cst$kw$http_DASH_xhrio,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$method,cljs.core.cst$kw$get,cljs.core.cst$kw$response_DASH_format,cljs.core.list(cljs.core.cst$sym$ajax_SLASH_json_DASH_response_DASH_format,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywords_QMARK_,true], null)),cljs.core.cst$kw$uri,"/data/items.json",cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_success], null),cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_failure], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db,cljs.core.cst$kw$state], null),cljs.core.cst$sym$fsm_SLASH_app_DASH_fsm,cljs.core.cst$kw$fetch_DASH_item_DASH_data),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__27601__auto__;
}catch (e27845){var e = e27845;
throw e;
}}):(function (p__27847,_){
var map__27848 = p__27847;
var map__27848__$1 = cljs.core.__destructure_map(map__27848);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27848__$1,cljs.core.cst$kw$db);
return nw_calculator.event_handlers.next_state(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$db,db,cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_log_DASH_info,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u2B07\uFE0F Fetching item data!"], null),cljs.core.cst$kw$http_DASH_xhrio,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$method,cljs.core.cst$kw$get,cljs.core.cst$kw$response_DASH_format,(function (){var G__27849 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywords_QMARK_,true], null);
return (ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1 ? ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(G__27849) : ajax.core.json_response_format.call(null,G__27849));
})(),cljs.core.cst$kw$uri,"/data/items.json",cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_success], null),cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_failure], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db,cljs.core.cst$kw$state], null),nw_calculator.fsm.app_fsm,cljs.core.cst$kw$fetch_DASH_item_DASH_data);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_search_DASH_success,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__27850){
var vec__27851 = p__27850;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27851,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27851,(1),null);
var search_results = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27851,(2),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$sym$search_DASH_results], null)], null),cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search_DASH_results,cljs.core.cst$sym$item_DASH_index], null),cljs.core.cst$sym$search_DASH_results)));

var result__27601__auto__ = cljs.core.assoc_in((function (){var result__27601__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(2),cljs.core.cst$kw$result,result__27601__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27601__auto__;
})(),(function (){var result__27601__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search_DASH_results,(function (){var result__27601__auto__ = item_index;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(5),cljs.core.cst$kw$result,result__27601__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27601__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(3),cljs.core.cst$kw$result,result__27601__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search_DASH_results,cljs.core.cst$sym$item_DASH_index], null),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27601__auto__;
})(),(function (){var result__27601__auto__ = search_results;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(6),cljs.core.cst$kw$result,result__27601__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$search_DASH_results,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27601__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__27601__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search_DASH_results,cljs.core.cst$sym$item_DASH_index], null),cljs.core.cst$sym$search_DASH_results),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__27601__auto__;
}catch (e27854){var e = e27854;
throw e;
}}):(function (db,p__27855){
var vec__27856 = p__27855;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27856,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27856,(1),null);
var search_results = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27856,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search_DASH_results,item_index], null),search_results);
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_search,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__27859,p__27860){
var map__27861 = p__27859;
var map__27861__$1 = cljs.core.__destructure_map(map__27861);
var map__27862 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27861__$1,cljs.core.cst$kw$db);
var map__27862__$1 = cljs.core.__destructure_map(map__27862);
var db = map__27862__$1;
var map__27863 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27862__$1,cljs.core.cst$kw$items);
var map__27863__$1 = cljs.core.__destructure_map(map__27863);
var items_by_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27863__$1,cljs.core.cst$kw$by_DASH_id);
var vec__27864 = p__27860;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27864,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27864,(1),null);
var query = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27864,(2),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$items_DASH_by_DASH_id,cljs.core.cst$kw$by_DASH_id], null),cljs.core.cst$kw$items,cljs.core.cst$kw$as,cljs.core.cst$sym$db], null),cljs.core.cst$kw$db], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$sym$query], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.cst$sym$db,cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_search_BANG_,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$query,cljs.core.cst$sym$query,cljs.core.cst$kw$items,cljs.core.list(cljs.core.cst$sym$vals,cljs.core.cst$sym$items_DASH_by_DASH_id),cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_search_DASH_success,cljs.core.cst$sym$item_DASH_index], null)], null)], null)));

var result__27601__auto__ = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,(function (){var result__27601__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(3),cljs.core.cst$kw$result,result__27601__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27601__auto__;
})(),cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_search_BANG_,(function (){var result__27601__auto__ = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$query,(function (){var result__27601__auto__ = query;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(7),cljs.core.cst$kw$result,result__27601__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$query,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27601__auto__;
})(),cljs.core.cst$kw$items,(function (){var result__27601__auto__ = cljs.core.vals((function (){var result__27601__auto__ = items_by_id;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(10),cljs.core.cst$kw$result,result__27601__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$items_DASH_by_DASH_id,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27601__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(9),cljs.core.cst$kw$result,result__27601__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$vals,cljs.core.cst$sym$items_DASH_by_DASH_id),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27601__auto__;
})(),cljs.core.cst$kw$on_DASH_success,(function (){var result__27601__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_search_DASH_success,(function (){var result__27601__auto__ = item_index;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(14),cljs.core.cst$kw$result,result__27601__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27601__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(12),cljs.core.cst$kw$result,result__27601__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_search_DASH_success,cljs.core.cst$sym$item_DASH_index], null),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27601__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(5),cljs.core.cst$kw$result,result__27601__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$query,cljs.core.cst$sym$query,cljs.core.cst$kw$items,cljs.core.list(cljs.core.cst$sym$vals,cljs.core.cst$sym$items_DASH_by_DASH_id),cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_search_DASH_success,cljs.core.cst$sym$item_DASH_index], null)], null),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27601__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__27601__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.cst$sym$db,cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_search_BANG_,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$query,cljs.core.cst$sym$query,cljs.core.cst$kw$items,cljs.core.list(cljs.core.cst$sym$vals,cljs.core.cst$sym$items_DASH_by_DASH_id),cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_search_DASH_success,cljs.core.cst$sym$item_DASH_index], null)], null)], null),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__27601__auto__;
}catch (e27867){var e = e27867;
throw e;
}}):(function (p__27868,p__27869){
var map__27870 = p__27868;
var map__27870__$1 = cljs.core.__destructure_map(map__27870);
var map__27871 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27870__$1,cljs.core.cst$kw$db);
var map__27871__$1 = cljs.core.__destructure_map(map__27871);
var db = map__27871__$1;
var map__27872 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27871__$1,cljs.core.cst$kw$items);
var map__27872__$1 = cljs.core.__destructure_map(map__27872);
var items_by_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27872__$1,cljs.core.cst$kw$by_DASH_id);
var vec__27873 = p__27869;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27873,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27873,(1),null);
var query = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27873,(2),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,db,cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_search_BANG_,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$query,query,cljs.core.cst$kw$items,cljs.core.vals(items_by_id),cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_search_DASH_success,item_index], null)], null)], null);
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_clear_DASH_search,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__27876,p__27877){
var map__27878 = p__27876;
var map__27878__$1 = cljs.core.__destructure_map(map__27878);
var map__27879 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27878__$1,cljs.core.cst$kw$db);
var map__27879__$1 = cljs.core.__destructure_map(map__27879);
var db = map__27879__$1;
var selected_item_refs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27879__$1,cljs.core.cst$kw$selected_DASH_item_DASH_refs);
var vec__27880 = p__27877;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27880,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27880,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$selected_DASH_item_DASH_refs], null),cljs.core.cst$kw$as,cljs.core.cst$sym$db], null),cljs.core.cst$kw$db], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$item_DASH_index], null)], null),cljs.core.list(cljs.core.cst$sym$handlers_SLASH_navigate_DASH_with_DASH_selected_DASH_item_DASH_refs,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_clear_DASH_search,cljs.core.cst$sym$db,cljs.core.cst$sym$item_DASH_index)], null),cljs.core.list(cljs.core.cst$sym$update,cljs.core.cst$sym$selected_DASH_item_DASH_refs,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$sym$dissoc,cljs.core.cst$kw$id))));

var result__27601__auto__ = nw_calculator.event_handlers.navigate_with_selected_item_refs((function (){var result__27601__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,(function (){var result__27601__auto__ = nw_calculator.event_handlers.clear_search.cljs$core$IFn$_invoke$arity$2((function (){var result__27601__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(5),cljs.core.cst$kw$result,result__27601__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27601__auto__;
})(),(function (){var result__27601__auto__ = item_index;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(6),cljs.core.cst$kw$result,result__27601__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27601__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(4),cljs.core.cst$kw$result,result__27601__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_clear_DASH_search,cljs.core.cst$sym$db,cljs.core.cst$sym$item_DASH_index),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27601__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(2),cljs.core.cst$kw$result,result__27601__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_clear_DASH_search,cljs.core.cst$sym$db,cljs.core.cst$sym$item_DASH_index)], null),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27601__auto__;
})(),(function (){var result__27601__auto__ = cljs.core.update.cljs$core$IFn$_invoke$arity$4((function (){var result__27601__auto__ = selected_item_refs;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(8),cljs.core.cst$kw$result,result__27601__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$selected_DASH_item_DASH_refs,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27601__auto__;
})(),(function (){var result__27601__auto__ = item_index;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,3,cljs.core.cst$kw$syntax_DASH_order,(9),cljs.core.cst$kw$result,result__27601__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27601__auto__;
})(),(function (){var result__27601__auto__ = cljs.core.dissoc;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(10),cljs.core.cst$kw$result,result__27601__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$dissoc,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27601__auto__;
})(),cljs.core.cst$kw$id);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(7),cljs.core.cst$kw$result,result__27601__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$update,cljs.core.cst$sym$selected_DASH_item_DASH_refs,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$sym$dissoc,cljs.core.cst$kw$id),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27601__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__27601__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_navigate_DASH_with_DASH_selected_DASH_item_DASH_refs,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_clear_DASH_search,cljs.core.cst$sym$db,cljs.core.cst$sym$item_DASH_index)], null),cljs.core.list(cljs.core.cst$sym$update,cljs.core.cst$sym$selected_DASH_item_DASH_refs,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$sym$dissoc,cljs.core.cst$kw$id)),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__27601__auto__;
}catch (e27883){var e = e27883;
throw e;
}}):(function (p__27884,p__27885){
var map__27886 = p__27884;
var map__27886__$1 = cljs.core.__destructure_map(map__27886);
var map__27887 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27886__$1,cljs.core.cst$kw$db);
var map__27887__$1 = cljs.core.__destructure_map(map__27887);
var db = map__27887__$1;
var selected_item_refs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27887__$1,cljs.core.cst$kw$selected_DASH_item_DASH_refs);
var vec__27888 = p__27885;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27888,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27888,(1),null);
return nw_calculator.event_handlers.navigate_with_selected_item_refs(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,nw_calculator.event_handlers.clear_search.cljs$core$IFn$_invoke$arity$2(db,item_index)], null),cljs.core.update.cljs$core$IFn$_invoke$arity$4(selected_item_refs,item_index,cljs.core.dissoc,cljs.core.cst$kw$id));
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_select_DASH_item,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__27891,p__27892){
var map__27893 = p__27891;
var map__27893__$1 = cljs.core.__destructure_map(map__27893);
var map__27894 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27893__$1,cljs.core.cst$kw$db);
var map__27894__$1 = cljs.core.__destructure_map(map__27894);
var db = map__27894__$1;
var selected_item_refs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27894__$1,cljs.core.cst$kw$selected_DASH_item_DASH_refs);
var vec__27895 = p__27892;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27895,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27895,(1),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27895,(2),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$selected_DASH_item_DASH_refs], null),cljs.core.cst$kw$as,cljs.core.cst$sym$db], null),cljs.core.cst$kw$db], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$sym$item_DASH_id], null)], null),cljs.core.list(cljs.core.cst$sym$handlers_SLASH_navigate_DASH_with_DASH_selected_DASH_item_DASH_refs,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_clear_DASH_search,cljs.core.cst$sym$db,cljs.core.cst$sym$item_DASH_index)], null),cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$selected_DASH_item_DASH_refs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$id], null),cljs.core.cst$sym$item_DASH_id))));

var result__27601__auto__ = nw_calculator.event_handlers.navigate_with_selected_item_refs((function (){var result__27601__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,(function (){var result__27601__auto__ = nw_calculator.event_handlers.clear_search.cljs$core$IFn$_invoke$arity$2((function (){var result__27601__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(5),cljs.core.cst$kw$result,result__27601__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27601__auto__;
})(),(function (){var result__27601__auto__ = item_index;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(6),cljs.core.cst$kw$result,result__27601__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27601__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(4),cljs.core.cst$kw$result,result__27601__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_clear_DASH_search,cljs.core.cst$sym$db,cljs.core.cst$sym$item_DASH_index),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27601__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(2),cljs.core.cst$kw$result,result__27601__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_clear_DASH_search,cljs.core.cst$sym$db,cljs.core.cst$sym$item_DASH_index)], null),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27601__auto__;
})(),(function (){var result__27601__auto__ = cljs.core.assoc_in((function (){var result__27601__auto__ = selected_item_refs;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(8),cljs.core.cst$kw$result,result__27601__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$selected_DASH_item_DASH_refs,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27601__auto__;
})(),(function (){var result__27601__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var result__27601__auto__ = item_index;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,3,cljs.core.cst$kw$syntax_DASH_order,(10),cljs.core.cst$kw$result,result__27601__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27601__auto__;
})(),cljs.core.cst$kw$id], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(9),cljs.core.cst$kw$result,result__27601__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$id], null),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27601__auto__;
})(),(function (){var result__27601__auto__ = item_id;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(12),cljs.core.cst$kw$result,result__27601__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$item_DASH_id,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27601__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(7),cljs.core.cst$kw$result,result__27601__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$selected_DASH_item_DASH_refs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$id], null),cljs.core.cst$sym$item_DASH_id),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27601__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__27601__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_navigate_DASH_with_DASH_selected_DASH_item_DASH_refs,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_clear_DASH_search,cljs.core.cst$sym$db,cljs.core.cst$sym$item_DASH_index)], null),cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$selected_DASH_item_DASH_refs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$id], null),cljs.core.cst$sym$item_DASH_id)),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__27601__auto__;
}catch (e27898){var e = e27898;
throw e;
}}):(function (p__27899,p__27900){
var map__27901 = p__27899;
var map__27901__$1 = cljs.core.__destructure_map(map__27901);
var map__27902 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27901__$1,cljs.core.cst$kw$db);
var map__27902__$1 = cljs.core.__destructure_map(map__27902);
var db = map__27902__$1;
var selected_item_refs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27902__$1,cljs.core.cst$kw$selected_DASH_item_DASH_refs);
var vec__27903 = p__27900;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27903,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27903,(1),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27903,(2),null);
return nw_calculator.event_handlers.navigate_with_selected_item_refs(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,nw_calculator.event_handlers.clear_search.cljs$core$IFn$_invoke$arity$2(db,item_index)], null),cljs.core.assoc_in(selected_item_refs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item_index,cljs.core.cst$kw$id], null),item_id));
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_set_DASH_selected_DASH_item_DASH_refs,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__27906){
var vec__27907 = p__27906;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27907,(0),null);
var selected_items = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27907,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$selected_DASH_items], null)], null),cljs.core.list(cljs.core.cst$sym$handlers_SLASH_set_DASH_selected_DASH_item_DASH_refs,cljs.core.cst$sym$db,cljs.core.cst$sym$selected_DASH_items)));

var result__27601__auto__ = nw_calculator.event_handlers.set_selected_item_refs((function (){var result__27601__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(2),cljs.core.cst$kw$result,result__27601__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27601__auto__;
})(),(function (){var result__27601__auto__ = selected_items;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(3),cljs.core.cst$kw$result,result__27601__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$selected_DASH_items,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27601__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__27601__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_set_DASH_selected_DASH_item_DASH_refs,cljs.core.cst$sym$db,cljs.core.cst$sym$selected_DASH_items),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__27601__auto__;
}catch (e27910){var e = e27910;
throw e;
}}):(function (db,p__27911){
var vec__27912 = p__27911;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27912,(0),null);
var selected_items = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27912,(1),null);
return nw_calculator.event_handlers.set_selected_item_refs(db,selected_items);
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_select_DASH_option,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__27915,p__27916){
var map__27917 = p__27915;
var map__27917__$1 = cljs.core.__destructure_map(map__27917);
var map__27918 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27917__$1,cljs.core.cst$kw$db);
var map__27918__$1 = cljs.core.__destructure_map(map__27918);
var selected_item_refs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27918__$1,cljs.core.cst$kw$selected_DASH_item_DASH_refs);
var vec__27919 = p__27916;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27919,(0),null);
var vec__27922 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27919,(1),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27922,(0),null);
var category_path = vec__27922;
var option_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27919,(2),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$selected_DASH_item_DASH_refs], null)], null),cljs.core.cst$kw$db], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$as,cljs.core.cst$sym$category_DASH_path], null),cljs.core.cst$sym$option_DASH_id], null)], null),cljs.core.list(cljs.core.cst$sym$handlers_SLASH_navigate_DASH_with_DASH_selected_DASH_item_DASH_refs,cljs.core.PersistentArrayMap.EMPTY,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$selected_DASH_item_DASH_refs,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$selected_DASH_options,cljs.core.cst$sym$category_DASH_path,cljs.core.cst$kw$id], null),cljs.core.cst$sym$option_DASH_id))));

var result__27601__auto__ = nw_calculator.event_handlers.navigate_with_selected_item_refs((function (){var result__27601__auto__ = cljs.core.PersistentArrayMap.EMPTY;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(2),cljs.core.cst$kw$result,result__27601__auto__,cljs.core.cst$kw$form,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27601__auto__;
})(),(function (){var result__27601__auto__ = cljs.core.assoc_in((function (){var result__27601__auto__ = selected_item_refs;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(5),cljs.core.cst$kw$result,result__27601__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$selected_DASH_item_DASH_refs,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27601__auto__;
})(),(function (){var result__27601__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var result__27601__auto__ = item_index;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(7),cljs.core.cst$kw$result,result__27601__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27601__auto__;
})(),cljs.core.cst$kw$selected_DASH_options,(function (){var result__27601__auto__ = category_path;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(9),cljs.core.cst$kw$result,result__27601__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$category_DASH_path,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27601__auto__;
})(),cljs.core.cst$kw$id], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(6),cljs.core.cst$kw$result,result__27601__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$selected_DASH_options,cljs.core.cst$sym$category_DASH_path,cljs.core.cst$kw$id], null),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27601__auto__;
})(),(function (){var result__27601__auto__ = option_id;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(11),cljs.core.cst$kw$result,result__27601__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$option_DASH_id,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27601__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(4),cljs.core.cst$kw$result,result__27601__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$selected_DASH_item_DASH_refs,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$selected_DASH_options,cljs.core.cst$sym$category_DASH_path,cljs.core.cst$kw$id], null),cljs.core.cst$sym$option_DASH_id),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27601__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__27601__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_navigate_DASH_with_DASH_selected_DASH_item_DASH_refs,cljs.core.PersistentArrayMap.EMPTY,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$selected_DASH_item_DASH_refs,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$selected_DASH_options,cljs.core.cst$sym$category_DASH_path,cljs.core.cst$kw$id], null),cljs.core.cst$sym$option_DASH_id)),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__27601__auto__;
}catch (e27925){var e = e27925;
throw e;
}}):(function (p__27926,p__27927){
var map__27928 = p__27926;
var map__27928__$1 = cljs.core.__destructure_map(map__27928);
var map__27929 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27928__$1,cljs.core.cst$kw$db);
var map__27929__$1 = cljs.core.__destructure_map(map__27929);
var selected_item_refs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27929__$1,cljs.core.cst$kw$selected_DASH_item_DASH_refs);
var vec__27930 = p__27927;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27930,(0),null);
var vec__27933 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27930,(1),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27933,(0),null);
var category_path = vec__27933;
var option_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27930,(2),null);
return nw_calculator.event_handlers.navigate_with_selected_item_refs(cljs.core.PersistentArrayMap.EMPTY,cljs.core.assoc_in(selected_item_refs,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [item_index,cljs.core.cst$kw$selected_DASH_options,category_path,cljs.core.cst$kw$id], null),option_id));
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_set_DASH_quantity_DASH_multiplier,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__27936,p__27937){
var map__27938 = p__27936;
var map__27938__$1 = cljs.core.__destructure_map(map__27938);
var map__27939 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27938__$1,cljs.core.cst$kw$db);
var map__27939__$1 = cljs.core.__destructure_map(map__27939);
var selected_item_refs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27939__$1,cljs.core.cst$kw$selected_DASH_item_DASH_refs);
var vec__27940 = p__27937;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27940,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27940,(1),null);
var multiplier = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27940,(2),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$selected_DASH_item_DASH_refs], null)], null),cljs.core.cst$kw$db], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$sym$multiplier], null)], null),cljs.core.list(cljs.core.cst$sym$handlers_SLASH_navigate_DASH_with_DASH_selected_DASH_item_DASH_refs,cljs.core.PersistentArrayMap.EMPTY,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$selected_DASH_item_DASH_refs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$quantity_DASH_multiplier], null),cljs.core.cst$sym$multiplier))));

var result__27601__auto__ = nw_calculator.event_handlers.navigate_with_selected_item_refs((function (){var result__27601__auto__ = cljs.core.PersistentArrayMap.EMPTY;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(2),cljs.core.cst$kw$result,result__27601__auto__,cljs.core.cst$kw$form,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27601__auto__;
})(),(function (){var result__27601__auto__ = cljs.core.assoc_in((function (){var result__27601__auto__ = selected_item_refs;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(5),cljs.core.cst$kw$result,result__27601__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$selected_DASH_item_DASH_refs,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27601__auto__;
})(),(function (){var result__27601__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var result__27601__auto__ = item_index;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(7),cljs.core.cst$kw$result,result__27601__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27601__auto__;
})(),cljs.core.cst$kw$quantity_DASH_multiplier], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(6),cljs.core.cst$kw$result,result__27601__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$quantity_DASH_multiplier], null),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27601__auto__;
})(),(function (){var result__27601__auto__ = multiplier;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(9),cljs.core.cst$kw$result,result__27601__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$multiplier,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27601__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(4),cljs.core.cst$kw$result,result__27601__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$selected_DASH_item_DASH_refs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$quantity_DASH_multiplier], null),cljs.core.cst$sym$multiplier),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27601__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__27601__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_navigate_DASH_with_DASH_selected_DASH_item_DASH_refs,cljs.core.PersistentArrayMap.EMPTY,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$selected_DASH_item_DASH_refs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$quantity_DASH_multiplier], null),cljs.core.cst$sym$multiplier)),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__27601__auto__;
}catch (e27943){var e = e27943;
throw e;
}}):(function (p__27944,p__27945){
var map__27946 = p__27944;
var map__27946__$1 = cljs.core.__destructure_map(map__27946);
var map__27947 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27946__$1,cljs.core.cst$kw$db);
var map__27947__$1 = cljs.core.__destructure_map(map__27947);
var selected_item_refs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27947__$1,cljs.core.cst$kw$selected_DASH_item_DASH_refs);
var vec__27948 = p__27945;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27948,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27948,(1),null);
var multiplier = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27948,(2),null);
return nw_calculator.event_handlers.navigate_with_selected_item_refs(cljs.core.PersistentArrayMap.EMPTY,cljs.core.assoc_in(selected_item_refs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item_index,cljs.core.cst$kw$quantity_DASH_multiplier], null),multiplier));
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_add_DASH_empty_DASH_item,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__27951,_){
var map__27952 = p__27951;
var map__27952__$1 = cljs.core.__destructure_map(map__27952);
var map__27953 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27952__$1,cljs.core.cst$kw$db);
var map__27953__$1 = cljs.core.__destructure_map(map__27953);
var db = map__27953__$1;
var selected_item_refs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27953__$1,cljs.core.cst$kw$selected_DASH_item_DASH_refs);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$selected_DASH_item_DASH_refs], null),cljs.core.cst$kw$as,cljs.core.cst$sym$db], null),cljs.core.cst$kw$db], null),cljs.core.cst$sym$_], null),cljs.core.list(cljs.core.cst$sym$handlers_SLASH_navigate_DASH_with_DASH_selected_DASH_item_DASH_refs,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.list(cljs.core.cst$sym$update,cljs.core.cst$sym$db,cljs.core.cst$kw$search_DASH_results,cljs.core.cst$sym$conj,cljs.core.PersistentVector.EMPTY)], null),cljs.core.list(cljs.core.cst$sym$conj,cljs.core.cst$sym$selected_DASH_item_DASH_refs,cljs.core.cst$sym$df_SLASH_empty_DASH_selected_DASH_item_DASH_ref))));

var result__27601__auto__ = nw_calculator.event_handlers.navigate_with_selected_item_refs((function (){var result__27601__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,(function (){var result__27601__auto__ = cljs.core.update.cljs$core$IFn$_invoke$arity$4((function (){var result__27601__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(5),cljs.core.cst$kw$result,result__27601__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27601__auto__;
})(),cljs.core.cst$kw$search_DASH_results,(function (){var result__27601__auto__ = cljs.core.conj;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(7),cljs.core.cst$kw$result,result__27601__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$conj,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27601__auto__;
})(),(function (){var result__27601__auto__ = cljs.core.PersistentVector.EMPTY;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(8),cljs.core.cst$kw$result,result__27601__auto__,cljs.core.cst$kw$form,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27601__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(4),cljs.core.cst$kw$result,result__27601__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$update,cljs.core.cst$sym$db,cljs.core.cst$kw$search_DASH_results,cljs.core.cst$sym$conj,cljs.core.PersistentVector.EMPTY),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27601__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(2),cljs.core.cst$kw$result,result__27601__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.list(cljs.core.cst$sym$update,cljs.core.cst$sym$db,cljs.core.cst$kw$search_DASH_results,cljs.core.cst$sym$conj,cljs.core.PersistentVector.EMPTY)], null),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27601__auto__;
})(),(function (){var result__27601__auto__ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var result__27601__auto__ = selected_item_refs;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(11),cljs.core.cst$kw$result,result__27601__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$selected_DASH_item_DASH_refs,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27601__auto__;
})(),(function (){var result__27601__auto__ = nw_calculator.defaults.empty_selected_item_ref;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(12),cljs.core.cst$kw$result,result__27601__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$df_SLASH_empty_DASH_selected_DASH_item_DASH_ref,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27601__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(10),cljs.core.cst$kw$result,result__27601__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$conj,cljs.core.cst$sym$selected_DASH_item_DASH_refs,cljs.core.cst$sym$df_SLASH_empty_DASH_selected_DASH_item_DASH_ref),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27601__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__27601__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_navigate_DASH_with_DASH_selected_DASH_item_DASH_refs,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.list(cljs.core.cst$sym$update,cljs.core.cst$sym$db,cljs.core.cst$kw$search_DASH_results,cljs.core.cst$sym$conj,cljs.core.PersistentVector.EMPTY)], null),cljs.core.list(cljs.core.cst$sym$conj,cljs.core.cst$sym$selected_DASH_item_DASH_refs,cljs.core.cst$sym$df_SLASH_empty_DASH_selected_DASH_item_DASH_ref)),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__27601__auto__;
}catch (e27954){var e = e27954;
throw e;
}}):(function (p__27955,_){
var map__27956 = p__27955;
var map__27956__$1 = cljs.core.__destructure_map(map__27956);
var map__27957 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27956__$1,cljs.core.cst$kw$db);
var map__27957__$1 = cljs.core.__destructure_map(map__27957);
var db = map__27957__$1;
var selected_item_refs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27957__$1,cljs.core.cst$kw$selected_DASH_item_DASH_refs);
return nw_calculator.event_handlers.navigate_with_selected_item_refs(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,cljs.core.cst$kw$search_DASH_results,cljs.core.conj,cljs.core.PersistentVector.EMPTY)], null),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(selected_item_refs,nw_calculator.defaults.empty_selected_item_ref));
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_remove_DASH_item,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__27958,p__27959){
var map__27960 = p__27958;
var map__27960__$1 = cljs.core.__destructure_map(map__27960);
var map__27961 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27960__$1,cljs.core.cst$kw$db);
var map__27961__$1 = cljs.core.__destructure_map(map__27961);
var db = map__27961__$1;
var selected_item_refs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27961__$1,cljs.core.cst$kw$selected_DASH_item_DASH_refs);
var vec__27962 = p__27959;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27962,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27962,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$selected_DASH_item_DASH_refs], null),cljs.core.cst$kw$as,cljs.core.cst$sym$db], null),cljs.core.cst$kw$db], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$item_DASH_index], null)], null),cljs.core.list(cljs.core.cst$sym$handlers_SLASH_navigate_DASH_with_DASH_selected_DASH_item_DASH_refs,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.list(cljs.core.cst$sym$update,cljs.core.cst$sym$db,cljs.core.cst$kw$search_DASH_results,cljs.core.cst$sym$util_SLASH_vec_DASH_remove_DASH_nth,cljs.core.cst$sym$item_DASH_index)], null),cljs.core.list(cljs.core.cst$sym$util_SLASH_vec_DASH_remove_DASH_nth,cljs.core.cst$sym$selected_DASH_item_DASH_refs,cljs.core.cst$sym$item_DASH_index))));

var result__27601__auto__ = nw_calculator.event_handlers.navigate_with_selected_item_refs((function (){var result__27601__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,(function (){var result__27601__auto__ = cljs.core.update.cljs$core$IFn$_invoke$arity$4((function (){var result__27601__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(5),cljs.core.cst$kw$result,result__27601__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27601__auto__;
})(),cljs.core.cst$kw$search_DASH_results,(function (){var result__27601__auto__ = nw_calculator.utilities.vec_remove_nth;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(7),cljs.core.cst$kw$result,result__27601__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$util_SLASH_vec_DASH_remove_DASH_nth,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27601__auto__;
})(),(function (){var result__27601__auto__ = item_index;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(8),cljs.core.cst$kw$result,result__27601__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27601__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(4),cljs.core.cst$kw$result,result__27601__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$update,cljs.core.cst$sym$db,cljs.core.cst$kw$search_DASH_results,cljs.core.cst$sym$util_SLASH_vec_DASH_remove_DASH_nth,cljs.core.cst$sym$item_DASH_index),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27601__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(2),cljs.core.cst$kw$result,result__27601__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.list(cljs.core.cst$sym$update,cljs.core.cst$sym$db,cljs.core.cst$kw$search_DASH_results,cljs.core.cst$sym$util_SLASH_vec_DASH_remove_DASH_nth,cljs.core.cst$sym$item_DASH_index)], null),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27601__auto__;
})(),(function (){var result__27601__auto__ = nw_calculator.utilities.vec_remove_nth((function (){var result__27601__auto__ = selected_item_refs;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(10),cljs.core.cst$kw$result,result__27601__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$selected_DASH_item_DASH_refs,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27601__auto__;
})(),(function (){var result__27601__auto__ = item_index;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,3,cljs.core.cst$kw$syntax_DASH_order,(11),cljs.core.cst$kw$result,result__27601__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27601__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(9),cljs.core.cst$kw$result,result__27601__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$util_SLASH_vec_DASH_remove_DASH_nth,cljs.core.cst$sym$selected_DASH_item_DASH_refs,cljs.core.cst$sym$item_DASH_index),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27601__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__27601__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_navigate_DASH_with_DASH_selected_DASH_item_DASH_refs,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.list(cljs.core.cst$sym$update,cljs.core.cst$sym$db,cljs.core.cst$kw$search_DASH_results,cljs.core.cst$sym$util_SLASH_vec_DASH_remove_DASH_nth,cljs.core.cst$sym$item_DASH_index)], null),cljs.core.list(cljs.core.cst$sym$util_SLASH_vec_DASH_remove_DASH_nth,cljs.core.cst$sym$selected_DASH_item_DASH_refs,cljs.core.cst$sym$item_DASH_index)),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__27601__auto__;
}catch (e27965){var e = e27965;
throw e;
}}):(function (p__27966,p__27967){
var map__27968 = p__27966;
var map__27968__$1 = cljs.core.__destructure_map(map__27968);
var map__27969 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27968__$1,cljs.core.cst$kw$db);
var map__27969__$1 = cljs.core.__destructure_map(map__27969);
var db = map__27969__$1;
var selected_item_refs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27969__$1,cljs.core.cst$kw$selected_DASH_item_DASH_refs);
var vec__27970 = p__27967;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27970,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27970,(1),null);
return nw_calculator.event_handlers.navigate_with_selected_item_refs(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,cljs.core.cst$kw$search_DASH_results,nw_calculator.utilities.vec_remove_nth,item_index)], null),nw_calculator.utilities.vec_remove_nth(selected_item_refs,item_index));
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_remove_DASH_all_DASH_items,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__27973,_){
var map__27974 = p__27973;
var map__27974__$1 = cljs.core.__destructure_map(map__27974);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27974__$1,cljs.core.cst$kw$db);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$db,cljs.core.cst$kw$db], null),cljs.core.cst$sym$_], null),cljs.core.list(cljs.core.cst$sym$handlers_SLASH_navigate_DASH_with_DASH_selected_DASH_item_DASH_refs,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_clear_DASH_search,cljs.core.cst$sym$db)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$df_SLASH_empty_DASH_selected_DASH_item_DASH_ref], null))));

var result__27601__auto__ = nw_calculator.event_handlers.navigate_with_selected_item_refs((function (){var result__27601__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,(function (){var result__27601__auto__ = nw_calculator.event_handlers.clear_search.cljs$core$IFn$_invoke$arity$1((function (){var result__27601__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(5),cljs.core.cst$kw$result,result__27601__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27601__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(4),cljs.core.cst$kw$result,result__27601__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_clear_DASH_search,cljs.core.cst$sym$db),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27601__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(2),cljs.core.cst$kw$result,result__27601__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_clear_DASH_search,cljs.core.cst$sym$db)], null),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27601__auto__;
})(),(function (){var result__27601__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var result__27601__auto__ = nw_calculator.defaults.empty_selected_item_ref;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(7),cljs.core.cst$kw$result,result__27601__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$df_SLASH_empty_DASH_selected_DASH_item_DASH_ref,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27601__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(6),cljs.core.cst$kw$result,result__27601__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$df_SLASH_empty_DASH_selected_DASH_item_DASH_ref], null),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27601__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__27601__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_navigate_DASH_with_DASH_selected_DASH_item_DASH_refs,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_clear_DASH_search,cljs.core.cst$sym$db)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$df_SLASH_empty_DASH_selected_DASH_item_DASH_ref], null)),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__27601__auto__;
}catch (e27975){var e = e27975;
throw e;
}}):(function (p__27976,_){
var map__27977 = p__27976;
var map__27977__$1 = cljs.core.__destructure_map(map__27977);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27977__$1,cljs.core.cst$kw$db);
return nw_calculator.event_handlers.navigate_with_selected_item_refs(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,nw_calculator.event_handlers.clear_search.cljs$core$IFn$_invoke$arity$1(db)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.defaults.empty_selected_item_ref], null));
})));
