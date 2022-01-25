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
goog.require('clojure.edn');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_initialize_DASH_db,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_,p__27805){
var vec__27806 = p__27805;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27806,(0),null);
var default_db = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27806,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$default_DASH_db], null)], null),cljs.core.list(cljs.core.cst$sym$_DASH__GT__GT_,cljs.core.list(cljs.core.cst$sym$js_SLASH_localStorage$getItem,"db"),cljs.core.cst$sym$edn_SLASH_read_DASH_string,cljs.core.list(cljs.core.cst$sym$merge,cljs.core.cst$sym$default_DASH_db))));

var result__27610__auto__ = (function (){var result__27624__auto__ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var result__27610__auto__ = default_db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(6),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$default_DASH_db,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27610__auto__;
})(),(function (){var result__27624__auto__ = clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1((function (){var result__27610__auto__ = localStorage.getItem("db");
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(2),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$js_SLASH_localStorage$getItem,"db"),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27610__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(4),cljs.core.cst$kw$result,result__27624__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$edn_SLASH_read_DASH_string,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27624__auto__;
})()], 0));
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(5),cljs.core.cst$kw$result,result__27624__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$merge,cljs.core.cst$sym$default_DASH_db),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27624__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$_DASH__GT__GT_,cljs.core.list(cljs.core.cst$sym$js_SLASH_localStorage$getItem,"db"),cljs.core.cst$sym$edn_SLASH_read_DASH_string,cljs.core.list(cljs.core.cst$sym$merge,cljs.core.cst$sym$default_DASH_db)),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__27610__auto__;
}catch (e27809){var e = e27809;
throw e;
}}):(function (_,p__27810){
var vec__27811 = p__27810;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27811,(0),null);
var default_db = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27811,(1),null);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default_db,clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(localStorage.getItem("db"))], 0));
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_navigate,(function (_,p__27814){
var vec__27815 = p__27814;
var seq__27816 = cljs.core.seq(vec__27815);
var first__27817 = cljs.core.first(seq__27816);
var seq__27816__$1 = cljs.core.next(seq__27816);
var ___$1 = first__27817;
var route = seq__27816__$1;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_navigate_BANG_,route], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_navigated,(function (p__27818,p__27819){
var map__27820 = p__27818;
var map__27820__$1 = cljs.core.__destructure_map(map__27820);
var db = map__27820__$1;
var map__27821 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27820__$1,cljs.core.cst$kw$current_DASH_route);
var map__27821__$1 = cljs.core.__destructure_map(map__27821);
var controllers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27821__$1,cljs.core.cst$kw$controllers);
var vec__27822 = p__27819;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27822,(0),null);
var new_match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27822,(1),null);
var new_route = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_match,cljs.core.cst$kw$controllers,reitit.frontend.controllers.apply_controllers(controllers,new_match));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$current_DASH_route,new_route);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_set_DASH_state,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__27825){
var vec__27826 = p__27825;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27826,(0),null);
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27826,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$state], null)], null),cljs.core.list(cljs.core.cst$sym$assoc,cljs.core.cst$sym$db,cljs.core.cst$kw$state,cljs.core.cst$sym$state)));

var result__27610__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var result__27610__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(2),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27610__auto__;
})(),cljs.core.cst$kw$state,(function (){var result__27610__auto__ = state;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(4),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$state,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27610__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$assoc,cljs.core.cst$sym$db,cljs.core.cst$kw$state,cljs.core.cst$sym$state),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__27610__auto__;
}catch (e27829){var e = e27829;
throw e;
}}):(function (db,p__27830){
var vec__27831 = p__27830;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27831,(0),null);
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27831,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$state,state);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_success,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__27834){
var vec__27835 = p__27834;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27835,(0),null);
var items_edn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27835,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$items_DASH_edn], null)], null),cljs.core.list(cljs.core.cst$sym$_DASH__GT_,cljs.core.cst$sym$db,cljs.core.list(cljs.core.cst$sym$update,cljs.core.cst$kw$items,cljs.core.cst$sym$c_SLASH_add_DASH_items,cljs.core.cst$sym$items_DASH_edn),cljs.core.list(cljs.core.cst$sym$handlers_SLASH_next_DASH_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state], null),cljs.core.cst$sym$fsm_SLASH_app_DASH_fsm,cljs.core.cst$kw$success))));

var result__27610__auto__ = (function (){var result__27617__auto__ = nw_calculator.event_handlers.next_state((function (){var result__27617__auto__ = cljs.core.update.cljs$core$IFn$_invoke$arity$4((function (){var result__27610__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(2),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27610__auto__;
})(),cljs.core.cst$kw$items,(function (){var result__27610__auto__ = compound2.core.add_items;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(6),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$c_SLASH_add_DASH_items,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27610__auto__;
})(),(function (){var result__27610__auto__ = items_edn;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(7),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$items_DASH_edn,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27610__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(3),cljs.core.cst$kw$result,result__27617__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$update,cljs.core.cst$kw$items,cljs.core.cst$sym$c_SLASH_add_DASH_items,cljs.core.cst$sym$items_DASH_edn),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27617__auto__;
})(),(function (){var result__27610__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(10),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state], null),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27610__auto__;
})(),(function (){var result__27610__auto__ = nw_calculator.fsm.app_fsm;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(12),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$fsm_SLASH_app_DASH_fsm,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27610__auto__;
})(),cljs.core.cst$kw$success);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(8),cljs.core.cst$kw$result,result__27617__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_next_DASH_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state], null),cljs.core.cst$sym$fsm_SLASH_app_DASH_fsm,cljs.core.cst$kw$success),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27617__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$_DASH__GT_,cljs.core.cst$sym$db,cljs.core.list(cljs.core.cst$sym$update,cljs.core.cst$kw$items,cljs.core.cst$sym$c_SLASH_add_DASH_items,cljs.core.cst$sym$items_DASH_edn),cljs.core.list(cljs.core.cst$sym$handlers_SLASH_next_DASH_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state], null),cljs.core.cst$sym$fsm_SLASH_app_DASH_fsm,cljs.core.cst$kw$success)),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__27610__auto__;
}catch (e27838){var e = e27838;
throw e;
}}):(function (db,p__27839){
var vec__27840 = p__27839;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27840,(0),null);
var items_edn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27840,(1),null);
return nw_calculator.event_handlers.next_state(cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,cljs.core.cst$kw$items,compound2.core.add_items,items_edn),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state], null),nw_calculator.fsm.app_fsm,cljs.core.cst$kw$success);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_failure,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__27843){
var vec__27844 = p__27843;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27844,(0),null);
var _resp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27844,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$_resp], null)], null),cljs.core.cst$sym$db));

var result__27610__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db,cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__27610__auto__;
}catch (e27847){var e = e27847;
throw e;
}}):(function (db,p__27848){
var vec__27849 = p__27848;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27849,(0),null);
var _resp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27849,(1),null);
return db;
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__27852,_){
var map__27853 = p__27852;
var map__27853__$1 = cljs.core.__destructure_map(map__27853);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27853__$1,cljs.core.cst$kw$db);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$db,cljs.core.cst$kw$db], null),cljs.core.cst$sym$_], null),cljs.core.list(cljs.core.cst$sym$handlers_SLASH_next_DASH_state,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$db,cljs.core.cst$sym$db,cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_log_DASH_info,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u2B07\uFE0F Fetching item data!"], null),cljs.core.cst$kw$http_DASH_xhrio,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$method,cljs.core.cst$kw$get,cljs.core.cst$kw$response_DASH_format,cljs.core.list(cljs.core.cst$sym$ajax_SLASH_json_DASH_response_DASH_format,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywords_QMARK_,true], null)),cljs.core.cst$kw$uri,"/data/items.json",cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_success], null),cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_failure], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db,cljs.core.cst$kw$state], null),cljs.core.cst$sym$fsm_SLASH_app_DASH_fsm,cljs.core.cst$kw$fetch_DASH_item_DASH_data)));

var result__27610__auto__ = nw_calculator.event_handlers.next_state((function (){var result__27610__auto__ = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$db,(function (){var result__27610__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(4),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27610__auto__;
})(),cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_log_DASH_info,(function (){var result__27610__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u2B07\uFE0F Fetching item data!"], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(6),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u2B07\uFE0F Fetching item data!"], null),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27610__auto__;
})(),cljs.core.cst$kw$http_DASH_xhrio,(function (){var result__27610__auto__ = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$method,cljs.core.cst$kw$get,cljs.core.cst$kw$response_DASH_format,(function (){var result__27610__auto__ = (function (){var G__27855 = (function (){var result__27610__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywords_QMARK_,true], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(14),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywords_QMARK_,true], null),cljs.core.cst$kw$indent_DASH_level,(4)], null));

return result__27610__auto__;
})();
return (ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1 ? ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(G__27855) : ajax.core.json_response_format.call(null,G__27855));
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(13),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$ajax_SLASH_json_DASH_response_DASH_format,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywords_QMARK_,true], null)),cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27610__auto__;
})(),cljs.core.cst$kw$uri,"/data/items.json",cljs.core.cst$kw$on_DASH_success,(function (){var result__27610__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_success], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(20),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_success], null),cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27610__auto__;
})(),cljs.core.cst$kw$on_DASH_failure,(function (){var result__27610__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_failure], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(23),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_failure], null),cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27610__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(9),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$method,cljs.core.cst$kw$get,cljs.core.cst$kw$response_DASH_format,cljs.core.list(cljs.core.cst$sym$ajax_SLASH_json_DASH_response_DASH_format,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywords_QMARK_,true], null)),cljs.core.cst$kw$uri,"/data/items.json",cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_success], null),cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_failure], null)], null),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27610__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(2),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$db,cljs.core.cst$sym$db,cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_log_DASH_info,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u2B07\uFE0F Fetching item data!"], null),cljs.core.cst$kw$http_DASH_xhrio,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$method,cljs.core.cst$kw$get,cljs.core.cst$kw$response_DASH_format,cljs.core.list(cljs.core.cst$sym$ajax_SLASH_json_DASH_response_DASH_format,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywords_QMARK_,true], null)),cljs.core.cst$kw$uri,"/data/items.json",cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_success], null),cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_failure], null)], null)], null),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27610__auto__;
})(),(function (){var result__27610__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db,cljs.core.cst$kw$state], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(25),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db,cljs.core.cst$kw$state], null),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27610__auto__;
})(),(function (){var result__27610__auto__ = nw_calculator.fsm.app_fsm;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(28),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$fsm_SLASH_app_DASH_fsm,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27610__auto__;
})(),cljs.core.cst$kw$fetch_DASH_item_DASH_data);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_next_DASH_state,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$db,cljs.core.cst$sym$db,cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_log_DASH_info,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u2B07\uFE0F Fetching item data!"], null),cljs.core.cst$kw$http_DASH_xhrio,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$method,cljs.core.cst$kw$get,cljs.core.cst$kw$response_DASH_format,cljs.core.list(cljs.core.cst$sym$ajax_SLASH_json_DASH_response_DASH_format,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywords_QMARK_,true], null)),cljs.core.cst$kw$uri,"/data/items.json",cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_success], null),cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_failure], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db,cljs.core.cst$kw$state], null),cljs.core.cst$sym$fsm_SLASH_app_DASH_fsm,cljs.core.cst$kw$fetch_DASH_item_DASH_data),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__27610__auto__;
}catch (e27854){var e = e27854;
throw e;
}}):(function (p__27856,_){
var map__27857 = p__27856;
var map__27857__$1 = cljs.core.__destructure_map(map__27857);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27857__$1,cljs.core.cst$kw$db);
return nw_calculator.event_handlers.next_state(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$db,db,cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_log_DASH_info,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u2B07\uFE0F Fetching item data!"], null),cljs.core.cst$kw$http_DASH_xhrio,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$method,cljs.core.cst$kw$get,cljs.core.cst$kw$response_DASH_format,(function (){var G__27858 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywords_QMARK_,true], null);
return (ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1 ? ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(G__27858) : ajax.core.json_response_format.call(null,G__27858));
})(),cljs.core.cst$kw$uri,"/data/items.json",cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_success], null),cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_failure], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db,cljs.core.cst$kw$state], null),nw_calculator.fsm.app_fsm,cljs.core.cst$kw$fetch_DASH_item_DASH_data);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_search_DASH_success,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__27859){
var vec__27860 = p__27859;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27860,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27860,(1),null);
var search_results = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27860,(2),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$sym$search_DASH_results], null)], null),cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search_DASH_results,cljs.core.cst$sym$item_DASH_index], null),cljs.core.cst$sym$search_DASH_results)));

var result__27610__auto__ = cljs.core.assoc_in((function (){var result__27610__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(2),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27610__auto__;
})(),(function (){var result__27610__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search_DASH_results,(function (){var result__27610__auto__ = item_index;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(5),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27610__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(3),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search_DASH_results,cljs.core.cst$sym$item_DASH_index], null),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27610__auto__;
})(),(function (){var result__27610__auto__ = search_results;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(6),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$search_DASH_results,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27610__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search_DASH_results,cljs.core.cst$sym$item_DASH_index], null),cljs.core.cst$sym$search_DASH_results),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__27610__auto__;
}catch (e27863){var e = e27863;
throw e;
}}):(function (db,p__27864){
var vec__27865 = p__27864;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27865,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27865,(1),null);
var search_results = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27865,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search_DASH_results,item_index], null),search_results);
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_search,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__27868,p__27869){
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
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$items_DASH_by_DASH_id,cljs.core.cst$kw$by_DASH_id], null),cljs.core.cst$kw$items,cljs.core.cst$kw$as,cljs.core.cst$sym$db], null),cljs.core.cst$kw$db], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$sym$query], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.cst$sym$db,cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_search_BANG_,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$query,cljs.core.cst$sym$query,cljs.core.cst$kw$items,cljs.core.list(cljs.core.cst$sym$vals,cljs.core.cst$sym$items_DASH_by_DASH_id),cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_search_DASH_success,cljs.core.cst$sym$item_DASH_index], null)], null)], null)));

var result__27610__auto__ = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,(function (){var result__27610__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(3),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27610__auto__;
})(),cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_search_BANG_,(function (){var result__27610__auto__ = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$query,(function (){var result__27610__auto__ = query;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(7),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$query,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27610__auto__;
})(),cljs.core.cst$kw$items,(function (){var result__27610__auto__ = cljs.core.vals((function (){var result__27610__auto__ = items_by_id;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(10),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$items_DASH_by_DASH_id,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27610__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(9),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$vals,cljs.core.cst$sym$items_DASH_by_DASH_id),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27610__auto__;
})(),cljs.core.cst$kw$on_DASH_success,(function (){var result__27610__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_search_DASH_success,(function (){var result__27610__auto__ = item_index;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(14),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27610__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(12),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_search_DASH_success,cljs.core.cst$sym$item_DASH_index], null),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27610__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(5),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$query,cljs.core.cst$sym$query,cljs.core.cst$kw$items,cljs.core.list(cljs.core.cst$sym$vals,cljs.core.cst$sym$items_DASH_by_DASH_id),cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_search_DASH_success,cljs.core.cst$sym$item_DASH_index], null)], null),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27610__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.cst$sym$db,cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_search_BANG_,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$query,cljs.core.cst$sym$query,cljs.core.cst$kw$items,cljs.core.list(cljs.core.cst$sym$vals,cljs.core.cst$sym$items_DASH_by_DASH_id),cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_search_DASH_success,cljs.core.cst$sym$item_DASH_index], null)], null)], null),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__27610__auto__;
}catch (e27876){var e = e27876;
throw e;
}}):(function (p__27877,p__27878){
var map__27879 = p__27877;
var map__27879__$1 = cljs.core.__destructure_map(map__27879);
var map__27880 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27879__$1,cljs.core.cst$kw$db);
var map__27880__$1 = cljs.core.__destructure_map(map__27880);
var db = map__27880__$1;
var map__27881 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27880__$1,cljs.core.cst$kw$items);
var map__27881__$1 = cljs.core.__destructure_map(map__27881);
var items_by_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27881__$1,cljs.core.cst$kw$by_DASH_id);
var vec__27882 = p__27878;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27882,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27882,(1),null);
var query = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27882,(2),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,db,cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_search_BANG_,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$query,query,cljs.core.cst$kw$items,cljs.core.vals(items_by_id),cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_search_DASH_success,item_index], null)], null)], null);
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_clear_DASH_search,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__27885,p__27886){
var map__27887 = p__27885;
var map__27887__$1 = cljs.core.__destructure_map(map__27887);
var map__27888 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27887__$1,cljs.core.cst$kw$db);
var map__27888__$1 = cljs.core.__destructure_map(map__27888);
var db = map__27888__$1;
var selected_item_refs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27888__$1,cljs.core.cst$kw$selected_DASH_item_DASH_refs);
var vec__27889 = p__27886;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27889,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27889,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$selected_DASH_item_DASH_refs], null),cljs.core.cst$kw$as,cljs.core.cst$sym$db], null),cljs.core.cst$kw$db], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$item_DASH_index], null)], null),cljs.core.list(cljs.core.cst$sym$handlers_SLASH_navigate_DASH_with_DASH_selected_DASH_item_DASH_refs,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_clear_DASH_search,cljs.core.cst$sym$db,cljs.core.cst$sym$item_DASH_index)], null),cljs.core.list(cljs.core.cst$sym$update,cljs.core.cst$sym$selected_DASH_item_DASH_refs,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$sym$dissoc,cljs.core.cst$kw$id))));

var result__27610__auto__ = nw_calculator.event_handlers.navigate_with_selected_item_refs((function (){var result__27610__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,(function (){var result__27610__auto__ = nw_calculator.event_handlers.clear_search.cljs$core$IFn$_invoke$arity$2((function (){var result__27610__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(5),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27610__auto__;
})(),(function (){var result__27610__auto__ = item_index;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(6),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27610__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(4),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_clear_DASH_search,cljs.core.cst$sym$db,cljs.core.cst$sym$item_DASH_index),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27610__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(2),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_clear_DASH_search,cljs.core.cst$sym$db,cljs.core.cst$sym$item_DASH_index)], null),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27610__auto__;
})(),(function (){var result__27610__auto__ = cljs.core.update.cljs$core$IFn$_invoke$arity$4((function (){var result__27610__auto__ = selected_item_refs;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(8),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$selected_DASH_item_DASH_refs,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27610__auto__;
})(),(function (){var result__27610__auto__ = item_index;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,3,cljs.core.cst$kw$syntax_DASH_order,(9),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27610__auto__;
})(),(function (){var result__27610__auto__ = cljs.core.dissoc;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(10),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$dissoc,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27610__auto__;
})(),cljs.core.cst$kw$id);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(7),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$update,cljs.core.cst$sym$selected_DASH_item_DASH_refs,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$sym$dissoc,cljs.core.cst$kw$id),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27610__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_navigate_DASH_with_DASH_selected_DASH_item_DASH_refs,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_clear_DASH_search,cljs.core.cst$sym$db,cljs.core.cst$sym$item_DASH_index)], null),cljs.core.list(cljs.core.cst$sym$update,cljs.core.cst$sym$selected_DASH_item_DASH_refs,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$sym$dissoc,cljs.core.cst$kw$id)),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__27610__auto__;
}catch (e27892){var e = e27892;
throw e;
}}):(function (p__27893,p__27894){
var map__27895 = p__27893;
var map__27895__$1 = cljs.core.__destructure_map(map__27895);
var map__27896 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27895__$1,cljs.core.cst$kw$db);
var map__27896__$1 = cljs.core.__destructure_map(map__27896);
var db = map__27896__$1;
var selected_item_refs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27896__$1,cljs.core.cst$kw$selected_DASH_item_DASH_refs);
var vec__27897 = p__27894;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27897,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27897,(1),null);
return nw_calculator.event_handlers.navigate_with_selected_item_refs(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,nw_calculator.event_handlers.clear_search.cljs$core$IFn$_invoke$arity$2(db,item_index)], null),cljs.core.update.cljs$core$IFn$_invoke$arity$4(selected_item_refs,item_index,cljs.core.dissoc,cljs.core.cst$kw$id));
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_select_DASH_item,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__27900,p__27901){
var map__27902 = p__27900;
var map__27902__$1 = cljs.core.__destructure_map(map__27902);
var map__27903 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27902__$1,cljs.core.cst$kw$db);
var map__27903__$1 = cljs.core.__destructure_map(map__27903);
var db = map__27903__$1;
var selected_item_refs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27903__$1,cljs.core.cst$kw$selected_DASH_item_DASH_refs);
var vec__27904 = p__27901;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27904,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27904,(1),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27904,(2),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$selected_DASH_item_DASH_refs], null),cljs.core.cst$kw$as,cljs.core.cst$sym$db], null),cljs.core.cst$kw$db], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$sym$item_DASH_id], null)], null),cljs.core.list(cljs.core.cst$sym$handlers_SLASH_navigate_DASH_with_DASH_selected_DASH_item_DASH_refs,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_clear_DASH_search,cljs.core.cst$sym$db,cljs.core.cst$sym$item_DASH_index)], null),cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$selected_DASH_item_DASH_refs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$id], null),cljs.core.cst$sym$item_DASH_id))));

var result__27610__auto__ = nw_calculator.event_handlers.navigate_with_selected_item_refs((function (){var result__27610__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,(function (){var result__27610__auto__ = nw_calculator.event_handlers.clear_search.cljs$core$IFn$_invoke$arity$2((function (){var result__27610__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(5),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27610__auto__;
})(),(function (){var result__27610__auto__ = item_index;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(6),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27610__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(4),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_clear_DASH_search,cljs.core.cst$sym$db,cljs.core.cst$sym$item_DASH_index),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27610__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(2),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_clear_DASH_search,cljs.core.cst$sym$db,cljs.core.cst$sym$item_DASH_index)], null),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27610__auto__;
})(),(function (){var result__27610__auto__ = cljs.core.assoc_in((function (){var result__27610__auto__ = selected_item_refs;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(8),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$selected_DASH_item_DASH_refs,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27610__auto__;
})(),(function (){var result__27610__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var result__27610__auto__ = item_index;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,3,cljs.core.cst$kw$syntax_DASH_order,(10),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27610__auto__;
})(),cljs.core.cst$kw$id], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(9),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$id], null),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27610__auto__;
})(),(function (){var result__27610__auto__ = item_id;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(12),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$item_DASH_id,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27610__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(7),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$selected_DASH_item_DASH_refs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$id], null),cljs.core.cst$sym$item_DASH_id),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27610__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_navigate_DASH_with_DASH_selected_DASH_item_DASH_refs,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_clear_DASH_search,cljs.core.cst$sym$db,cljs.core.cst$sym$item_DASH_index)], null),cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$selected_DASH_item_DASH_refs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$id], null),cljs.core.cst$sym$item_DASH_id)),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__27610__auto__;
}catch (e27907){var e = e27907;
throw e;
}}):(function (p__27908,p__27909){
var map__27910 = p__27908;
var map__27910__$1 = cljs.core.__destructure_map(map__27910);
var map__27911 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27910__$1,cljs.core.cst$kw$db);
var map__27911__$1 = cljs.core.__destructure_map(map__27911);
var db = map__27911__$1;
var selected_item_refs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27911__$1,cljs.core.cst$kw$selected_DASH_item_DASH_refs);
var vec__27912 = p__27909;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27912,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27912,(1),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27912,(2),null);
return nw_calculator.event_handlers.navigate_with_selected_item_refs(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,nw_calculator.event_handlers.clear_search.cljs$core$IFn$_invoke$arity$2(db,item_index)], null),cljs.core.assoc_in(selected_item_refs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item_index,cljs.core.cst$kw$id], null),item_id));
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_set_DASH_selected_DASH_item_DASH_refs,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__27915){
var vec__27916 = p__27915;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27916,(0),null);
var selected_items = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27916,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$selected_DASH_items], null)], null),cljs.core.list(cljs.core.cst$sym$handlers_SLASH_set_DASH_selected_DASH_item_DASH_refs,cljs.core.cst$sym$db,cljs.core.cst$sym$selected_DASH_items)));

var result__27610__auto__ = nw_calculator.event_handlers.set_selected_item_refs((function (){var result__27610__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(2),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27610__auto__;
})(),(function (){var result__27610__auto__ = selected_items;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(3),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$selected_DASH_items,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27610__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_set_DASH_selected_DASH_item_DASH_refs,cljs.core.cst$sym$db,cljs.core.cst$sym$selected_DASH_items),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__27610__auto__;
}catch (e27919){var e = e27919;
throw e;
}}):(function (db,p__27920){
var vec__27921 = p__27920;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27921,(0),null);
var selected_items = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27921,(1),null);
return nw_calculator.event_handlers.set_selected_item_refs(db,selected_items);
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_select_DASH_option,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__27924,p__27925){
var map__27926 = p__27924;
var map__27926__$1 = cljs.core.__destructure_map(map__27926);
var map__27927 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27926__$1,cljs.core.cst$kw$db);
var map__27927__$1 = cljs.core.__destructure_map(map__27927);
var selected_item_refs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27927__$1,cljs.core.cst$kw$selected_DASH_item_DASH_refs);
var vec__27928 = p__27925;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27928,(0),null);
var vec__27931 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27928,(1),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27931,(0),null);
var category_path = vec__27931;
var option_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27928,(2),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$selected_DASH_item_DASH_refs], null)], null),cljs.core.cst$kw$db], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$as,cljs.core.cst$sym$category_DASH_path], null),cljs.core.cst$sym$option_DASH_id], null)], null),cljs.core.list(cljs.core.cst$sym$handlers_SLASH_navigate_DASH_with_DASH_selected_DASH_item_DASH_refs,cljs.core.PersistentArrayMap.EMPTY,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$selected_DASH_item_DASH_refs,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$selected_DASH_options,cljs.core.cst$sym$category_DASH_path,cljs.core.cst$kw$id], null),cljs.core.cst$sym$option_DASH_id))));

var result__27610__auto__ = nw_calculator.event_handlers.navigate_with_selected_item_refs((function (){var result__27610__auto__ = cljs.core.PersistentArrayMap.EMPTY;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(2),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27610__auto__;
})(),(function (){var result__27610__auto__ = cljs.core.assoc_in((function (){var result__27610__auto__ = selected_item_refs;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(5),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$selected_DASH_item_DASH_refs,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27610__auto__;
})(),(function (){var result__27610__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var result__27610__auto__ = item_index;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(7),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27610__auto__;
})(),cljs.core.cst$kw$selected_DASH_options,(function (){var result__27610__auto__ = category_path;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(9),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$category_DASH_path,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27610__auto__;
})(),cljs.core.cst$kw$id], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(6),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$selected_DASH_options,cljs.core.cst$sym$category_DASH_path,cljs.core.cst$kw$id], null),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27610__auto__;
})(),(function (){var result__27610__auto__ = option_id;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(11),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$option_DASH_id,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27610__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(4),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$selected_DASH_item_DASH_refs,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$selected_DASH_options,cljs.core.cst$sym$category_DASH_path,cljs.core.cst$kw$id], null),cljs.core.cst$sym$option_DASH_id),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27610__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_navigate_DASH_with_DASH_selected_DASH_item_DASH_refs,cljs.core.PersistentArrayMap.EMPTY,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$selected_DASH_item_DASH_refs,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$selected_DASH_options,cljs.core.cst$sym$category_DASH_path,cljs.core.cst$kw$id], null),cljs.core.cst$sym$option_DASH_id)),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__27610__auto__;
}catch (e27934){var e = e27934;
throw e;
}}):(function (p__27935,p__27936){
var map__27937 = p__27935;
var map__27937__$1 = cljs.core.__destructure_map(map__27937);
var map__27938 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27937__$1,cljs.core.cst$kw$db);
var map__27938__$1 = cljs.core.__destructure_map(map__27938);
var selected_item_refs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27938__$1,cljs.core.cst$kw$selected_DASH_item_DASH_refs);
var vec__27939 = p__27936;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27939,(0),null);
var vec__27942 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27939,(1),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27942,(0),null);
var category_path = vec__27942;
var option_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27939,(2),null);
return nw_calculator.event_handlers.navigate_with_selected_item_refs(cljs.core.PersistentArrayMap.EMPTY,cljs.core.assoc_in(selected_item_refs,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [item_index,cljs.core.cst$kw$selected_DASH_options,category_path,cljs.core.cst$kw$id], null),option_id));
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_set_DASH_quantity_DASH_multiplier,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__27945,p__27946){
var map__27947 = p__27945;
var map__27947__$1 = cljs.core.__destructure_map(map__27947);
var map__27948 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27947__$1,cljs.core.cst$kw$db);
var map__27948__$1 = cljs.core.__destructure_map(map__27948);
var selected_item_refs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27948__$1,cljs.core.cst$kw$selected_DASH_item_DASH_refs);
var vec__27949 = p__27946;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27949,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27949,(1),null);
var multiplier = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27949,(2),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$selected_DASH_item_DASH_refs], null)], null),cljs.core.cst$kw$db], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$sym$multiplier], null)], null),cljs.core.list(cljs.core.cst$sym$handlers_SLASH_navigate_DASH_with_DASH_selected_DASH_item_DASH_refs,cljs.core.PersistentArrayMap.EMPTY,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$selected_DASH_item_DASH_refs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$quantity_DASH_multiplier], null),cljs.core.cst$sym$multiplier))));

var result__27610__auto__ = nw_calculator.event_handlers.navigate_with_selected_item_refs((function (){var result__27610__auto__ = cljs.core.PersistentArrayMap.EMPTY;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(2),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27610__auto__;
})(),(function (){var result__27610__auto__ = cljs.core.assoc_in((function (){var result__27610__auto__ = selected_item_refs;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(5),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$selected_DASH_item_DASH_refs,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27610__auto__;
})(),(function (){var result__27610__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var result__27610__auto__ = item_index;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(7),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27610__auto__;
})(),cljs.core.cst$kw$quantity_DASH_multiplier], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(6),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$quantity_DASH_multiplier], null),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27610__auto__;
})(),(function (){var result__27610__auto__ = multiplier;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(9),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$multiplier,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27610__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(4),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$selected_DASH_item_DASH_refs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$quantity_DASH_multiplier], null),cljs.core.cst$sym$multiplier),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27610__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_navigate_DASH_with_DASH_selected_DASH_item_DASH_refs,cljs.core.PersistentArrayMap.EMPTY,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$selected_DASH_item_DASH_refs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$quantity_DASH_multiplier], null),cljs.core.cst$sym$multiplier)),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__27610__auto__;
}catch (e27952){var e = e27952;
throw e;
}}):(function (p__27953,p__27954){
var map__27955 = p__27953;
var map__27955__$1 = cljs.core.__destructure_map(map__27955);
var map__27956 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27955__$1,cljs.core.cst$kw$db);
var map__27956__$1 = cljs.core.__destructure_map(map__27956);
var selected_item_refs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27956__$1,cljs.core.cst$kw$selected_DASH_item_DASH_refs);
var vec__27957 = p__27954;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27957,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27957,(1),null);
var multiplier = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27957,(2),null);
return nw_calculator.event_handlers.navigate_with_selected_item_refs(cljs.core.PersistentArrayMap.EMPTY,cljs.core.assoc_in(selected_item_refs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item_index,cljs.core.cst$kw$quantity_DASH_multiplier], null),multiplier));
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_add_DASH_empty_DASH_item,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__27960,_){
var map__27961 = p__27960;
var map__27961__$1 = cljs.core.__destructure_map(map__27961);
var map__27962 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27961__$1,cljs.core.cst$kw$db);
var map__27962__$1 = cljs.core.__destructure_map(map__27962);
var db = map__27962__$1;
var selected_item_refs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27962__$1,cljs.core.cst$kw$selected_DASH_item_DASH_refs);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$selected_DASH_item_DASH_refs], null),cljs.core.cst$kw$as,cljs.core.cst$sym$db], null),cljs.core.cst$kw$db], null),cljs.core.cst$sym$_], null),cljs.core.list(cljs.core.cst$sym$handlers_SLASH_navigate_DASH_with_DASH_selected_DASH_item_DASH_refs,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.list(cljs.core.cst$sym$update,cljs.core.cst$sym$db,cljs.core.cst$kw$search_DASH_results,cljs.core.cst$sym$conj,cljs.core.PersistentVector.EMPTY)], null),cljs.core.list(cljs.core.cst$sym$conj,cljs.core.cst$sym$selected_DASH_item_DASH_refs,cljs.core.cst$sym$df_SLASH_empty_DASH_selected_DASH_item_DASH_ref))));

var result__27610__auto__ = nw_calculator.event_handlers.navigate_with_selected_item_refs((function (){var result__27610__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,(function (){var result__27610__auto__ = cljs.core.update.cljs$core$IFn$_invoke$arity$4((function (){var result__27610__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(5),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27610__auto__;
})(),cljs.core.cst$kw$search_DASH_results,(function (){var result__27610__auto__ = cljs.core.conj;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(7),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$conj,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27610__auto__;
})(),(function (){var result__27610__auto__ = cljs.core.PersistentVector.EMPTY;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(8),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27610__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(4),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$update,cljs.core.cst$sym$db,cljs.core.cst$kw$search_DASH_results,cljs.core.cst$sym$conj,cljs.core.PersistentVector.EMPTY),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27610__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(2),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.list(cljs.core.cst$sym$update,cljs.core.cst$sym$db,cljs.core.cst$kw$search_DASH_results,cljs.core.cst$sym$conj,cljs.core.PersistentVector.EMPTY)], null),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27610__auto__;
})(),(function (){var result__27610__auto__ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var result__27610__auto__ = selected_item_refs;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(11),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$selected_DASH_item_DASH_refs,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27610__auto__;
})(),(function (){var result__27610__auto__ = nw_calculator.defaults.empty_selected_item_ref;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(12),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$df_SLASH_empty_DASH_selected_DASH_item_DASH_ref,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27610__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(10),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$conj,cljs.core.cst$sym$selected_DASH_item_DASH_refs,cljs.core.cst$sym$df_SLASH_empty_DASH_selected_DASH_item_DASH_ref),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27610__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_navigate_DASH_with_DASH_selected_DASH_item_DASH_refs,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.list(cljs.core.cst$sym$update,cljs.core.cst$sym$db,cljs.core.cst$kw$search_DASH_results,cljs.core.cst$sym$conj,cljs.core.PersistentVector.EMPTY)], null),cljs.core.list(cljs.core.cst$sym$conj,cljs.core.cst$sym$selected_DASH_item_DASH_refs,cljs.core.cst$sym$df_SLASH_empty_DASH_selected_DASH_item_DASH_ref)),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__27610__auto__;
}catch (e27963){var e = e27963;
throw e;
}}):(function (p__27964,_){
var map__27965 = p__27964;
var map__27965__$1 = cljs.core.__destructure_map(map__27965);
var map__27966 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27965__$1,cljs.core.cst$kw$db);
var map__27966__$1 = cljs.core.__destructure_map(map__27966);
var db = map__27966__$1;
var selected_item_refs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27966__$1,cljs.core.cst$kw$selected_DASH_item_DASH_refs);
return nw_calculator.event_handlers.navigate_with_selected_item_refs(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,cljs.core.cst$kw$search_DASH_results,cljs.core.conj,cljs.core.PersistentVector.EMPTY)], null),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(selected_item_refs,nw_calculator.defaults.empty_selected_item_ref));
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_remove_DASH_item,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__27967,p__27968){
var map__27969 = p__27967;
var map__27969__$1 = cljs.core.__destructure_map(map__27969);
var map__27970 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27969__$1,cljs.core.cst$kw$db);
var map__27970__$1 = cljs.core.__destructure_map(map__27970);
var db = map__27970__$1;
var selected_item_refs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27970__$1,cljs.core.cst$kw$selected_DASH_item_DASH_refs);
var vec__27971 = p__27968;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27971,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27971,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$selected_DASH_item_DASH_refs], null),cljs.core.cst$kw$as,cljs.core.cst$sym$db], null),cljs.core.cst$kw$db], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$item_DASH_index], null)], null),cljs.core.list(cljs.core.cst$sym$handlers_SLASH_navigate_DASH_with_DASH_selected_DASH_item_DASH_refs,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.list(cljs.core.cst$sym$update,cljs.core.cst$sym$db,cljs.core.cst$kw$search_DASH_results,cljs.core.cst$sym$util_SLASH_vec_DASH_remove_DASH_nth,cljs.core.cst$sym$item_DASH_index)], null),cljs.core.list(cljs.core.cst$sym$util_SLASH_vec_DASH_remove_DASH_nth,cljs.core.cst$sym$selected_DASH_item_DASH_refs,cljs.core.cst$sym$item_DASH_index))));

var result__27610__auto__ = nw_calculator.event_handlers.navigate_with_selected_item_refs((function (){var result__27610__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,(function (){var result__27610__auto__ = cljs.core.update.cljs$core$IFn$_invoke$arity$4((function (){var result__27610__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(5),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27610__auto__;
})(),cljs.core.cst$kw$search_DASH_results,(function (){var result__27610__auto__ = nw_calculator.utilities.vec_remove_nth;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(7),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$util_SLASH_vec_DASH_remove_DASH_nth,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27610__auto__;
})(),(function (){var result__27610__auto__ = item_index;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(8),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27610__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(4),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$update,cljs.core.cst$sym$db,cljs.core.cst$kw$search_DASH_results,cljs.core.cst$sym$util_SLASH_vec_DASH_remove_DASH_nth,cljs.core.cst$sym$item_DASH_index),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27610__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(2),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.list(cljs.core.cst$sym$update,cljs.core.cst$sym$db,cljs.core.cst$kw$search_DASH_results,cljs.core.cst$sym$util_SLASH_vec_DASH_remove_DASH_nth,cljs.core.cst$sym$item_DASH_index)], null),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27610__auto__;
})(),(function (){var result__27610__auto__ = nw_calculator.utilities.vec_remove_nth((function (){var result__27610__auto__ = selected_item_refs;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(10),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$selected_DASH_item_DASH_refs,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27610__auto__;
})(),(function (){var result__27610__auto__ = item_index;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,3,cljs.core.cst$kw$syntax_DASH_order,(11),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27610__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(9),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$util_SLASH_vec_DASH_remove_DASH_nth,cljs.core.cst$sym$selected_DASH_item_DASH_refs,cljs.core.cst$sym$item_DASH_index),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27610__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_navigate_DASH_with_DASH_selected_DASH_item_DASH_refs,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.list(cljs.core.cst$sym$update,cljs.core.cst$sym$db,cljs.core.cst$kw$search_DASH_results,cljs.core.cst$sym$util_SLASH_vec_DASH_remove_DASH_nth,cljs.core.cst$sym$item_DASH_index)], null),cljs.core.list(cljs.core.cst$sym$util_SLASH_vec_DASH_remove_DASH_nth,cljs.core.cst$sym$selected_DASH_item_DASH_refs,cljs.core.cst$sym$item_DASH_index)),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__27610__auto__;
}catch (e27974){var e = e27974;
throw e;
}}):(function (p__27975,p__27976){
var map__27977 = p__27975;
var map__27977__$1 = cljs.core.__destructure_map(map__27977);
var map__27978 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27977__$1,cljs.core.cst$kw$db);
var map__27978__$1 = cljs.core.__destructure_map(map__27978);
var db = map__27978__$1;
var selected_item_refs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27978__$1,cljs.core.cst$kw$selected_DASH_item_DASH_refs);
var vec__27979 = p__27976;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27979,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27979,(1),null);
return nw_calculator.event_handlers.navigate_with_selected_item_refs(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,cljs.core.cst$kw$search_DASH_results,nw_calculator.utilities.vec_remove_nth,item_index)], null),nw_calculator.utilities.vec_remove_nth(selected_item_refs,item_index));
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_remove_DASH_all_DASH_items,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__27982,_){
var map__27983 = p__27982;
var map__27983__$1 = cljs.core.__destructure_map(map__27983);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27983__$1,cljs.core.cst$kw$db);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$db,cljs.core.cst$kw$db], null),cljs.core.cst$sym$_], null),cljs.core.list(cljs.core.cst$sym$handlers_SLASH_navigate_DASH_with_DASH_selected_DASH_item_DASH_refs,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_clear_DASH_search,cljs.core.cst$sym$db)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$df_SLASH_empty_DASH_selected_DASH_item_DASH_ref], null))));

var result__27610__auto__ = nw_calculator.event_handlers.navigate_with_selected_item_refs((function (){var result__27610__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,(function (){var result__27610__auto__ = nw_calculator.event_handlers.clear_search.cljs$core$IFn$_invoke$arity$1((function (){var result__27610__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(5),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27610__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(4),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_clear_DASH_search,cljs.core.cst$sym$db),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27610__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(2),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_clear_DASH_search,cljs.core.cst$sym$db)], null),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27610__auto__;
})(),(function (){var result__27610__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var result__27610__auto__ = nw_calculator.defaults.empty_selected_item_ref;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(7),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$df_SLASH_empty_DASH_selected_DASH_item_DASH_ref,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27610__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(6),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$df_SLASH_empty_DASH_selected_DASH_item_DASH_ref], null),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27610__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_navigate_DASH_with_DASH_selected_DASH_item_DASH_refs,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_clear_DASH_search,cljs.core.cst$sym$db)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$df_SLASH_empty_DASH_selected_DASH_item_DASH_ref], null)),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__27610__auto__;
}catch (e27984){var e = e27984;
throw e;
}}):(function (p__27985,_){
var map__27986 = p__27985;
var map__27986__$1 = cljs.core.__destructure_map(map__27986);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27986__$1,cljs.core.cst$kw$db);
return nw_calculator.event_handlers.navigate_with_selected_item_refs(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,nw_calculator.event_handlers.clear_search.cljs$core$IFn$_invoke$arity$1(db)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.defaults.empty_selected_item_ref], null));
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_set_DASH_trade_DASH_skill_DASH_bonus,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__27987,p__27988){
var map__27989 = p__27987;
var map__27989__$1 = cljs.core.__destructure_map(map__27989);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27989__$1,cljs.core.cst$kw$db);
var vec__27990 = p__27988;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27990,(0),null);
var skill = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27990,(1),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27990,(2),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$db,cljs.core.cst$kw$db], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$skill,cljs.core.cst$sym$value], null)], null),cljs.core.list(cljs.core.cst$sym$let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$updated_DASH_db,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$trade_DASH_skill_DASH_bonuses,cljs.core.cst$sym$skill], null),cljs.core.cst$sym$value)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.cst$sym$updated_DASH_db,cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_persist_BANG_,cljs.core.cst$sym$updated_DASH_db], null))));

var result__27610__auto__ = (function (){var updated_db = (function (){var result__27610__auto__ = cljs.core.assoc_in((function (){var result__27610__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(5),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27610__auto__;
})(),(function (){var result__27610__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$trade_DASH_skill_DASH_bonuses,(function (){var result__27610__auto__ = skill;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(8),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$skill,cljs.core.cst$kw$indent_DASH_level,(4)], null));

return result__27610__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(6),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$trade_DASH_skill_DASH_bonuses,cljs.core.cst$sym$skill], null),cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27610__auto__;
})(),(function (){var result__27610__auto__ = value;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(9),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$value,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27610__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(4),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$trade_DASH_skill_DASH_bonuses,cljs.core.cst$sym$skill], null),cljs.core.cst$sym$value),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27610__auto__;
})();
var result__27610__auto__ = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,(function (){var result__27610__auto__ = updated_db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(12),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$updated_DASH_db,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27610__auto__;
})(),cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_persist_BANG_,(function (){var result__27610__auto__ = updated_db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,3,cljs.core.cst$kw$syntax_DASH_order,(14),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$updated_DASH_db,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27610__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(10),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.cst$sym$updated_DASH_db,cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_persist_BANG_,cljs.core.cst$sym$updated_DASH_db], null),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27610__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$updated_DASH_db,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$trade_DASH_skill_DASH_bonuses,cljs.core.cst$sym$skill], null),cljs.core.cst$sym$value)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.cst$sym$updated_DASH_db,cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_persist_BANG_,cljs.core.cst$sym$updated_DASH_db], null)),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__27610__auto__;
}catch (e27993){var e = e27993;
throw e;
}}):(function (p__27994,p__27995){
var map__27996 = p__27994;
var map__27996__$1 = cljs.core.__destructure_map(map__27996);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27996__$1,cljs.core.cst$kw$db);
var vec__27997 = p__27995;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27997,(0),null);
var skill = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27997,(1),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27997,(2),null);
var updated_db = cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$trade_DASH_skill_DASH_bonuses,skill], null),value);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,updated_db,cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_persist_BANG_,updated_db], null);
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_toggle_DASH_additional_DASH_item_DASH_bonuses,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__28000,_){
var map__28001 = p__28000;
var map__28001__$1 = cljs.core.__destructure_map(map__28001);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28001__$1,cljs.core.cst$kw$db);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$db,cljs.core.cst$kw$db], null),cljs.core.cst$sym$_], null),cljs.core.list(cljs.core.cst$sym$let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$updated_DASH_db,cljs.core.list(cljs.core.cst$sym$update,cljs.core.cst$sym$db,cljs.core.cst$kw$additional_DASH_item_DASH_bonuses_QMARK_,cljs.core.cst$sym$not)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.cst$sym$updated_DASH_db,cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_persist_BANG_,cljs.core.cst$sym$updated_DASH_db], null))));

var result__27610__auto__ = (function (){var updated_db = (function (){var result__27610__auto__ = cljs.core.update.cljs$core$IFn$_invoke$arity$3((function (){var result__27610__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(5),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27610__auto__;
})(),cljs.core.cst$kw$additional_DASH_item_DASH_bonuses_QMARK_,(function (){var result__27610__auto__ = cljs.core.not;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(7),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$not,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27610__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(4),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$update,cljs.core.cst$sym$db,cljs.core.cst$kw$additional_DASH_item_DASH_bonuses_QMARK_,cljs.core.cst$sym$not),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27610__auto__;
})();
var result__27610__auto__ = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,(function (){var result__27610__auto__ = updated_db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(10),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$updated_DASH_db,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27610__auto__;
})(),cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_persist_BANG_,(function (){var result__27610__auto__ = updated_db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,3,cljs.core.cst$kw$syntax_DASH_order,(12),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$updated_DASH_db,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27610__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(8),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.cst$sym$updated_DASH_db,cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_persist_BANG_,cljs.core.cst$sym$updated_DASH_db], null),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27610__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__27610__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$updated_DASH_db,cljs.core.list(cljs.core.cst$sym$update,cljs.core.cst$sym$db,cljs.core.cst$kw$additional_DASH_item_DASH_bonuses_QMARK_,cljs.core.cst$sym$not)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.cst$sym$updated_DASH_db,cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_persist_BANG_,cljs.core.cst$sym$updated_DASH_db], null)),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__27610__auto__;
}catch (e28002){var e = e28002;
throw e;
}}):(function (p__28003,_){
var map__28004 = p__28003;
var map__28004__$1 = cljs.core.__destructure_map(map__28004);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28004__$1,cljs.core.cst$kw$db);
var updated_db = cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$additional_DASH_item_DASH_bonuses_QMARK_,cljs.core.not);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,updated_db,cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_persist_BANG_,updated_db], null);
})));
