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
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_initialize_DASH_db,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_,p__27817){
var vec__27818 = p__27817;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27818,(0),null);
var default_db = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27818,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$default_DASH_db], null)], null),cljs.core.list(cljs.core.cst$sym$_DASH__GT__GT_,cljs.core.list(cljs.core.cst$sym$js_SLASH_localStorage$getItem,"db"),cljs.core.cst$sym$edn_SLASH_read_DASH_string,cljs.core.list(cljs.core.cst$sym$merge,cljs.core.cst$sym$default_DASH_db))));

var result__27622__auto__ = (function (){var result__27636__auto__ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var result__27622__auto__ = default_db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(6),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$default_DASH_db,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27622__auto__;
})(),(function (){var result__27636__auto__ = clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1((function (){var result__27622__auto__ = localStorage.getItem("db");
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(2),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$js_SLASH_localStorage$getItem,"db"),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27622__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(4),cljs.core.cst$kw$result,result__27636__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$edn_SLASH_read_DASH_string,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27636__auto__;
})()], 0));
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(5),cljs.core.cst$kw$result,result__27636__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$merge,cljs.core.cst$sym$default_DASH_db),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27636__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$_DASH__GT__GT_,cljs.core.list(cljs.core.cst$sym$js_SLASH_localStorage$getItem,"db"),cljs.core.cst$sym$edn_SLASH_read_DASH_string,cljs.core.list(cljs.core.cst$sym$merge,cljs.core.cst$sym$default_DASH_db)),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__27622__auto__;
}catch (e27821){var e = e27821;
throw e;
}}):(function (_,p__27822){
var vec__27823 = p__27822;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27823,(0),null);
var default_db = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27823,(1),null);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default_db,clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(localStorage.getItem("db"))], 0));
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_navigate,(function (_,p__27826){
var vec__27827 = p__27826;
var seq__27828 = cljs.core.seq(vec__27827);
var first__27829 = cljs.core.first(seq__27828);
var seq__27828__$1 = cljs.core.next(seq__27828);
var ___$1 = first__27829;
var route = seq__27828__$1;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_navigate_BANG_,route], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_navigated,(function (p__27830,p__27831){
var map__27832 = p__27830;
var map__27832__$1 = cljs.core.__destructure_map(map__27832);
var db = map__27832__$1;
var map__27833 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27832__$1,cljs.core.cst$kw$current_DASH_route);
var map__27833__$1 = cljs.core.__destructure_map(map__27833);
var controllers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27833__$1,cljs.core.cst$kw$controllers);
var vec__27834 = p__27831;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27834,(0),null);
var new_match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27834,(1),null);
var new_route = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_match,cljs.core.cst$kw$controllers,reitit.frontend.controllers.apply_controllers(controllers,new_match));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$current_DASH_route,new_route);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_set_DASH_state,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__27837){
var vec__27838 = p__27837;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27838,(0),null);
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27838,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$state], null)], null),cljs.core.list(cljs.core.cst$sym$assoc,cljs.core.cst$sym$db,cljs.core.cst$kw$state,cljs.core.cst$sym$state)));

var result__27622__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var result__27622__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(2),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27622__auto__;
})(),cljs.core.cst$kw$state,(function (){var result__27622__auto__ = state;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(4),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$state,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27622__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$assoc,cljs.core.cst$sym$db,cljs.core.cst$kw$state,cljs.core.cst$sym$state),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__27622__auto__;
}catch (e27841){var e = e27841;
throw e;
}}):(function (db,p__27842){
var vec__27843 = p__27842;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27843,(0),null);
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27843,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$state,state);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_success,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__27846){
var vec__27847 = p__27846;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27847,(0),null);
var items_edn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27847,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$items_DASH_edn], null)], null),cljs.core.list(cljs.core.cst$sym$_DASH__GT_,cljs.core.cst$sym$db,cljs.core.list(cljs.core.cst$sym$update,cljs.core.cst$kw$items,cljs.core.cst$sym$c_SLASH_add_DASH_items,cljs.core.cst$sym$items_DASH_edn),cljs.core.list(cljs.core.cst$sym$handlers_SLASH_next_DASH_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state], null),cljs.core.cst$sym$fsm_SLASH_app_DASH_fsm,cljs.core.cst$kw$success))));

var result__27622__auto__ = (function (){var result__27629__auto__ = nw_calculator.event_handlers.next_state((function (){var result__27629__auto__ = cljs.core.update.cljs$core$IFn$_invoke$arity$4((function (){var result__27622__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(2),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27622__auto__;
})(),cljs.core.cst$kw$items,(function (){var result__27622__auto__ = compound2.core.add_items;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(6),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$c_SLASH_add_DASH_items,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27622__auto__;
})(),(function (){var result__27622__auto__ = items_edn;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(7),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$items_DASH_edn,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27622__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(3),cljs.core.cst$kw$result,result__27629__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$update,cljs.core.cst$kw$items,cljs.core.cst$sym$c_SLASH_add_DASH_items,cljs.core.cst$sym$items_DASH_edn),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27629__auto__;
})(),(function (){var result__27622__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(10),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state], null),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27622__auto__;
})(),(function (){var result__27622__auto__ = nw_calculator.fsm.app_fsm;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(12),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$fsm_SLASH_app_DASH_fsm,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27622__auto__;
})(),cljs.core.cst$kw$success);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(8),cljs.core.cst$kw$result,result__27629__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_next_DASH_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state], null),cljs.core.cst$sym$fsm_SLASH_app_DASH_fsm,cljs.core.cst$kw$success),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27629__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$_DASH__GT_,cljs.core.cst$sym$db,cljs.core.list(cljs.core.cst$sym$update,cljs.core.cst$kw$items,cljs.core.cst$sym$c_SLASH_add_DASH_items,cljs.core.cst$sym$items_DASH_edn),cljs.core.list(cljs.core.cst$sym$handlers_SLASH_next_DASH_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state], null),cljs.core.cst$sym$fsm_SLASH_app_DASH_fsm,cljs.core.cst$kw$success)),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__27622__auto__;
}catch (e27850){var e = e27850;
throw e;
}}):(function (db,p__27851){
var vec__27852 = p__27851;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27852,(0),null);
var items_edn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27852,(1),null);
return nw_calculator.event_handlers.next_state(cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,cljs.core.cst$kw$items,compound2.core.add_items,items_edn),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state], null),nw_calculator.fsm.app_fsm,cljs.core.cst$kw$success);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_failure,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__27855){
var vec__27856 = p__27855;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27856,(0),null);
var _resp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27856,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$_resp], null)], null),cljs.core.cst$sym$db));

var result__27622__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db,cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__27622__auto__;
}catch (e27859){var e = e27859;
throw e;
}}):(function (db,p__27860){
var vec__27861 = p__27860;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27861,(0),null);
var _resp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27861,(1),null);
return db;
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__27864,_){
var map__27865 = p__27864;
var map__27865__$1 = cljs.core.__destructure_map(map__27865);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27865__$1,cljs.core.cst$kw$db);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$db,cljs.core.cst$kw$db], null),cljs.core.cst$sym$_], null),cljs.core.list(cljs.core.cst$sym$handlers_SLASH_next_DASH_state,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$db,cljs.core.cst$sym$db,cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_log_DASH_info,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u2B07\uFE0F Fetching item data!"], null),cljs.core.cst$kw$http_DASH_xhrio,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$method,cljs.core.cst$kw$get,cljs.core.cst$kw$response_DASH_format,cljs.core.list(cljs.core.cst$sym$ajax_SLASH_json_DASH_response_DASH_format,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywords_QMARK_,true], null)),cljs.core.cst$kw$uri,"/data/items.json",cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_success], null),cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_failure], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db,cljs.core.cst$kw$state], null),cljs.core.cst$sym$fsm_SLASH_app_DASH_fsm,cljs.core.cst$kw$fetch_DASH_item_DASH_data)));

var result__27622__auto__ = nw_calculator.event_handlers.next_state((function (){var result__27622__auto__ = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$db,(function (){var result__27622__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(4),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27622__auto__;
})(),cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_log_DASH_info,(function (){var result__27622__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u2B07\uFE0F Fetching item data!"], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(6),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u2B07\uFE0F Fetching item data!"], null),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27622__auto__;
})(),cljs.core.cst$kw$http_DASH_xhrio,(function (){var result__27622__auto__ = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$method,cljs.core.cst$kw$get,cljs.core.cst$kw$response_DASH_format,(function (){var result__27622__auto__ = (function (){var G__27867 = (function (){var result__27622__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywords_QMARK_,true], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(14),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywords_QMARK_,true], null),cljs.core.cst$kw$indent_DASH_level,(4)], null));

return result__27622__auto__;
})();
return (ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1 ? ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(G__27867) : ajax.core.json_response_format.call(null,G__27867));
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(13),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$ajax_SLASH_json_DASH_response_DASH_format,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywords_QMARK_,true], null)),cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27622__auto__;
})(),cljs.core.cst$kw$uri,"/data/items.json",cljs.core.cst$kw$on_DASH_success,(function (){var result__27622__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_success], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(20),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_success], null),cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27622__auto__;
})(),cljs.core.cst$kw$on_DASH_failure,(function (){var result__27622__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_failure], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(23),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_failure], null),cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27622__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(9),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$method,cljs.core.cst$kw$get,cljs.core.cst$kw$response_DASH_format,cljs.core.list(cljs.core.cst$sym$ajax_SLASH_json_DASH_response_DASH_format,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywords_QMARK_,true], null)),cljs.core.cst$kw$uri,"/data/items.json",cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_success], null),cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_failure], null)], null),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27622__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(2),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$db,cljs.core.cst$sym$db,cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_log_DASH_info,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u2B07\uFE0F Fetching item data!"], null),cljs.core.cst$kw$http_DASH_xhrio,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$method,cljs.core.cst$kw$get,cljs.core.cst$kw$response_DASH_format,cljs.core.list(cljs.core.cst$sym$ajax_SLASH_json_DASH_response_DASH_format,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywords_QMARK_,true], null)),cljs.core.cst$kw$uri,"/data/items.json",cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_success], null),cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_failure], null)], null)], null),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27622__auto__;
})(),(function (){var result__27622__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db,cljs.core.cst$kw$state], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(25),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db,cljs.core.cst$kw$state], null),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27622__auto__;
})(),(function (){var result__27622__auto__ = nw_calculator.fsm.app_fsm;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(28),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$fsm_SLASH_app_DASH_fsm,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27622__auto__;
})(),cljs.core.cst$kw$fetch_DASH_item_DASH_data);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_next_DASH_state,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$db,cljs.core.cst$sym$db,cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_log_DASH_info,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u2B07\uFE0F Fetching item data!"], null),cljs.core.cst$kw$http_DASH_xhrio,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$method,cljs.core.cst$kw$get,cljs.core.cst$kw$response_DASH_format,cljs.core.list(cljs.core.cst$sym$ajax_SLASH_json_DASH_response_DASH_format,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywords_QMARK_,true], null)),cljs.core.cst$kw$uri,"/data/items.json",cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_success], null),cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_failure], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db,cljs.core.cst$kw$state], null),cljs.core.cst$sym$fsm_SLASH_app_DASH_fsm,cljs.core.cst$kw$fetch_DASH_item_DASH_data),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__27622__auto__;
}catch (e27866){var e = e27866;
throw e;
}}):(function (p__27868,_){
var map__27869 = p__27868;
var map__27869__$1 = cljs.core.__destructure_map(map__27869);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27869__$1,cljs.core.cst$kw$db);
return nw_calculator.event_handlers.next_state(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$db,db,cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_log_DASH_info,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u2B07\uFE0F Fetching item data!"], null),cljs.core.cst$kw$http_DASH_xhrio,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$method,cljs.core.cst$kw$get,cljs.core.cst$kw$response_DASH_format,(function (){var G__27870 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywords_QMARK_,true], null);
return (ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1 ? ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(G__27870) : ajax.core.json_response_format.call(null,G__27870));
})(),cljs.core.cst$kw$uri,"/data/items.json",cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_success], null),cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_failure], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db,cljs.core.cst$kw$state], null),nw_calculator.fsm.app_fsm,cljs.core.cst$kw$fetch_DASH_item_DASH_data);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_search_DASH_success,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__27871){
var vec__27872 = p__27871;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27872,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27872,(1),null);
var search_results = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27872,(2),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$sym$search_DASH_results], null)], null),cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search_DASH_results,cljs.core.cst$sym$item_DASH_index], null),cljs.core.cst$sym$search_DASH_results)));

var result__27622__auto__ = cljs.core.assoc_in((function (){var result__27622__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(2),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27622__auto__;
})(),(function (){var result__27622__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search_DASH_results,(function (){var result__27622__auto__ = item_index;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(5),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27622__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(3),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search_DASH_results,cljs.core.cst$sym$item_DASH_index], null),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27622__auto__;
})(),(function (){var result__27622__auto__ = search_results;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(6),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$search_DASH_results,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27622__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search_DASH_results,cljs.core.cst$sym$item_DASH_index], null),cljs.core.cst$sym$search_DASH_results),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__27622__auto__;
}catch (e27875){var e = e27875;
throw e;
}}):(function (db,p__27876){
var vec__27877 = p__27876;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27877,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27877,(1),null);
var search_results = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27877,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search_DASH_results,item_index], null),search_results);
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_search,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__27880,p__27881){
var map__27882 = p__27880;
var map__27882__$1 = cljs.core.__destructure_map(map__27882);
var map__27883 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27882__$1,cljs.core.cst$kw$db);
var map__27883__$1 = cljs.core.__destructure_map(map__27883);
var db = map__27883__$1;
var map__27884 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27883__$1,cljs.core.cst$kw$items);
var map__27884__$1 = cljs.core.__destructure_map(map__27884);
var items_by_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27884__$1,cljs.core.cst$kw$by_DASH_id);
var vec__27885 = p__27881;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27885,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27885,(1),null);
var query = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27885,(2),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$items_DASH_by_DASH_id,cljs.core.cst$kw$by_DASH_id], null),cljs.core.cst$kw$items,cljs.core.cst$kw$as,cljs.core.cst$sym$db], null),cljs.core.cst$kw$db], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$sym$query], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.cst$sym$db,cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_search_BANG_,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$query,cljs.core.cst$sym$query,cljs.core.cst$kw$items,cljs.core.list(cljs.core.cst$sym$vals,cljs.core.cst$sym$items_DASH_by_DASH_id),cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_search_DASH_success,cljs.core.cst$sym$item_DASH_index], null)], null)], null)));

var result__27622__auto__ = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,(function (){var result__27622__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(3),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27622__auto__;
})(),cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_search_BANG_,(function (){var result__27622__auto__ = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$query,(function (){var result__27622__auto__ = query;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(7),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$query,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27622__auto__;
})(),cljs.core.cst$kw$items,(function (){var result__27622__auto__ = cljs.core.vals((function (){var result__27622__auto__ = items_by_id;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(10),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$items_DASH_by_DASH_id,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27622__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(9),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$vals,cljs.core.cst$sym$items_DASH_by_DASH_id),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27622__auto__;
})(),cljs.core.cst$kw$on_DASH_success,(function (){var result__27622__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_search_DASH_success,(function (){var result__27622__auto__ = item_index;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(14),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27622__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(12),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_search_DASH_success,cljs.core.cst$sym$item_DASH_index], null),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27622__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(5),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$query,cljs.core.cst$sym$query,cljs.core.cst$kw$items,cljs.core.list(cljs.core.cst$sym$vals,cljs.core.cst$sym$items_DASH_by_DASH_id),cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_search_DASH_success,cljs.core.cst$sym$item_DASH_index], null)], null),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27622__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.cst$sym$db,cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_search_BANG_,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$query,cljs.core.cst$sym$query,cljs.core.cst$kw$items,cljs.core.list(cljs.core.cst$sym$vals,cljs.core.cst$sym$items_DASH_by_DASH_id),cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_search_DASH_success,cljs.core.cst$sym$item_DASH_index], null)], null)], null),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__27622__auto__;
}catch (e27888){var e = e27888;
throw e;
}}):(function (p__27889,p__27890){
var map__27891 = p__27889;
var map__27891__$1 = cljs.core.__destructure_map(map__27891);
var map__27892 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27891__$1,cljs.core.cst$kw$db);
var map__27892__$1 = cljs.core.__destructure_map(map__27892);
var db = map__27892__$1;
var map__27893 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27892__$1,cljs.core.cst$kw$items);
var map__27893__$1 = cljs.core.__destructure_map(map__27893);
var items_by_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27893__$1,cljs.core.cst$kw$by_DASH_id);
var vec__27894 = p__27890;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27894,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27894,(1),null);
var query = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27894,(2),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,db,cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_search_BANG_,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$query,query,cljs.core.cst$kw$items,cljs.core.vals(items_by_id),cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_search_DASH_success,item_index], null)], null)], null);
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_clear_DASH_search,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__27897,p__27898){
var map__27899 = p__27897;
var map__27899__$1 = cljs.core.__destructure_map(map__27899);
var map__27900 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27899__$1,cljs.core.cst$kw$db);
var map__27900__$1 = cljs.core.__destructure_map(map__27900);
var db = map__27900__$1;
var selected_item_refs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27900__$1,cljs.core.cst$kw$selected_DASH_item_DASH_refs);
var vec__27901 = p__27898;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27901,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27901,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$selected_DASH_item_DASH_refs], null),cljs.core.cst$kw$as,cljs.core.cst$sym$db], null),cljs.core.cst$kw$db], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$item_DASH_index], null)], null),cljs.core.list(cljs.core.cst$sym$handlers_SLASH_navigate_DASH_with_DASH_selected_DASH_item_DASH_refs,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_clear_DASH_search,cljs.core.cst$sym$db,cljs.core.cst$sym$item_DASH_index)], null),cljs.core.list(cljs.core.cst$sym$update,cljs.core.cst$sym$selected_DASH_item_DASH_refs,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$sym$dissoc,cljs.core.cst$kw$id))));

var result__27622__auto__ = nw_calculator.event_handlers.navigate_with_selected_item_refs((function (){var result__27622__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,(function (){var result__27622__auto__ = nw_calculator.event_handlers.clear_search.cljs$core$IFn$_invoke$arity$2((function (){var result__27622__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(5),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27622__auto__;
})(),(function (){var result__27622__auto__ = item_index;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(6),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27622__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(4),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_clear_DASH_search,cljs.core.cst$sym$db,cljs.core.cst$sym$item_DASH_index),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27622__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(2),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_clear_DASH_search,cljs.core.cst$sym$db,cljs.core.cst$sym$item_DASH_index)], null),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27622__auto__;
})(),(function (){var result__27622__auto__ = cljs.core.update.cljs$core$IFn$_invoke$arity$4((function (){var result__27622__auto__ = selected_item_refs;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(8),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$selected_DASH_item_DASH_refs,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27622__auto__;
})(),(function (){var result__27622__auto__ = item_index;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,3,cljs.core.cst$kw$syntax_DASH_order,(9),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27622__auto__;
})(),(function (){var result__27622__auto__ = cljs.core.dissoc;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(10),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$dissoc,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27622__auto__;
})(),cljs.core.cst$kw$id);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(7),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$update,cljs.core.cst$sym$selected_DASH_item_DASH_refs,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$sym$dissoc,cljs.core.cst$kw$id),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27622__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_navigate_DASH_with_DASH_selected_DASH_item_DASH_refs,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_clear_DASH_search,cljs.core.cst$sym$db,cljs.core.cst$sym$item_DASH_index)], null),cljs.core.list(cljs.core.cst$sym$update,cljs.core.cst$sym$selected_DASH_item_DASH_refs,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$sym$dissoc,cljs.core.cst$kw$id)),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__27622__auto__;
}catch (e27904){var e = e27904;
throw e;
}}):(function (p__27905,p__27906){
var map__27907 = p__27905;
var map__27907__$1 = cljs.core.__destructure_map(map__27907);
var map__27908 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27907__$1,cljs.core.cst$kw$db);
var map__27908__$1 = cljs.core.__destructure_map(map__27908);
var db = map__27908__$1;
var selected_item_refs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27908__$1,cljs.core.cst$kw$selected_DASH_item_DASH_refs);
var vec__27909 = p__27906;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27909,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27909,(1),null);
return nw_calculator.event_handlers.navigate_with_selected_item_refs(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,nw_calculator.event_handlers.clear_search.cljs$core$IFn$_invoke$arity$2(db,item_index)], null),cljs.core.update.cljs$core$IFn$_invoke$arity$4(selected_item_refs,item_index,cljs.core.dissoc,cljs.core.cst$kw$id));
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_select_DASH_item,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__27912,p__27913){
var map__27914 = p__27912;
var map__27914__$1 = cljs.core.__destructure_map(map__27914);
var map__27915 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27914__$1,cljs.core.cst$kw$db);
var map__27915__$1 = cljs.core.__destructure_map(map__27915);
var db = map__27915__$1;
var selected_item_refs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27915__$1,cljs.core.cst$kw$selected_DASH_item_DASH_refs);
var vec__27916 = p__27913;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27916,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27916,(1),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27916,(2),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$selected_DASH_item_DASH_refs], null),cljs.core.cst$kw$as,cljs.core.cst$sym$db], null),cljs.core.cst$kw$db], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$sym$item_DASH_id], null)], null),cljs.core.list(cljs.core.cst$sym$handlers_SLASH_navigate_DASH_with_DASH_selected_DASH_item_DASH_refs,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_clear_DASH_search,cljs.core.cst$sym$db,cljs.core.cst$sym$item_DASH_index)], null),cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$selected_DASH_item_DASH_refs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$id], null),cljs.core.cst$sym$item_DASH_id))));

var result__27622__auto__ = nw_calculator.event_handlers.navigate_with_selected_item_refs((function (){var result__27622__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,(function (){var result__27622__auto__ = nw_calculator.event_handlers.clear_search.cljs$core$IFn$_invoke$arity$2((function (){var result__27622__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(5),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27622__auto__;
})(),(function (){var result__27622__auto__ = item_index;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(6),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27622__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(4),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_clear_DASH_search,cljs.core.cst$sym$db,cljs.core.cst$sym$item_DASH_index),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27622__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(2),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_clear_DASH_search,cljs.core.cst$sym$db,cljs.core.cst$sym$item_DASH_index)], null),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27622__auto__;
})(),(function (){var result__27622__auto__ = cljs.core.assoc_in((function (){var result__27622__auto__ = selected_item_refs;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(8),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$selected_DASH_item_DASH_refs,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27622__auto__;
})(),(function (){var result__27622__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var result__27622__auto__ = item_index;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,3,cljs.core.cst$kw$syntax_DASH_order,(10),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27622__auto__;
})(),cljs.core.cst$kw$id], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(9),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$id], null),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27622__auto__;
})(),(function (){var result__27622__auto__ = item_id;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(12),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$item_DASH_id,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27622__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(7),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$selected_DASH_item_DASH_refs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$id], null),cljs.core.cst$sym$item_DASH_id),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27622__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_navigate_DASH_with_DASH_selected_DASH_item_DASH_refs,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_clear_DASH_search,cljs.core.cst$sym$db,cljs.core.cst$sym$item_DASH_index)], null),cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$selected_DASH_item_DASH_refs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$id], null),cljs.core.cst$sym$item_DASH_id)),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__27622__auto__;
}catch (e27919){var e = e27919;
throw e;
}}):(function (p__27920,p__27921){
var map__27922 = p__27920;
var map__27922__$1 = cljs.core.__destructure_map(map__27922);
var map__27923 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27922__$1,cljs.core.cst$kw$db);
var map__27923__$1 = cljs.core.__destructure_map(map__27923);
var db = map__27923__$1;
var selected_item_refs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27923__$1,cljs.core.cst$kw$selected_DASH_item_DASH_refs);
var vec__27924 = p__27921;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27924,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27924,(1),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27924,(2),null);
return nw_calculator.event_handlers.navigate_with_selected_item_refs(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,nw_calculator.event_handlers.clear_search.cljs$core$IFn$_invoke$arity$2(db,item_index)], null),cljs.core.assoc_in(selected_item_refs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item_index,cljs.core.cst$kw$id], null),item_id));
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_set_DASH_selected_DASH_item_DASH_refs,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__27927){
var vec__27928 = p__27927;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27928,(0),null);
var selected_items = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27928,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$selected_DASH_items], null)], null),cljs.core.list(cljs.core.cst$sym$handlers_SLASH_set_DASH_selected_DASH_item_DASH_refs,cljs.core.cst$sym$db,cljs.core.cst$sym$selected_DASH_items)));

var result__27622__auto__ = nw_calculator.event_handlers.set_selected_item_refs((function (){var result__27622__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(2),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27622__auto__;
})(),(function (){var result__27622__auto__ = selected_items;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(3),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$selected_DASH_items,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27622__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_set_DASH_selected_DASH_item_DASH_refs,cljs.core.cst$sym$db,cljs.core.cst$sym$selected_DASH_items),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__27622__auto__;
}catch (e27931){var e = e27931;
throw e;
}}):(function (db,p__27932){
var vec__27933 = p__27932;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27933,(0),null);
var selected_items = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27933,(1),null);
return nw_calculator.event_handlers.set_selected_item_refs(db,selected_items);
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_select_DASH_option,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__27936,p__27937){
var map__27938 = p__27936;
var map__27938__$1 = cljs.core.__destructure_map(map__27938);
var map__27939 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27938__$1,cljs.core.cst$kw$db);
var map__27939__$1 = cljs.core.__destructure_map(map__27939);
var selected_item_refs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27939__$1,cljs.core.cst$kw$selected_DASH_item_DASH_refs);
var vec__27940 = p__27937;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27940,(0),null);
var vec__27943 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27940,(1),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27943,(0),null);
var category_path = vec__27943;
var option_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27940,(2),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$selected_DASH_item_DASH_refs], null)], null),cljs.core.cst$kw$db], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$as,cljs.core.cst$sym$category_DASH_path], null),cljs.core.cst$sym$option_DASH_id], null)], null),cljs.core.list(cljs.core.cst$sym$handlers_SLASH_navigate_DASH_with_DASH_selected_DASH_item_DASH_refs,cljs.core.PersistentArrayMap.EMPTY,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$selected_DASH_item_DASH_refs,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$selected_DASH_options,cljs.core.cst$sym$category_DASH_path,cljs.core.cst$kw$id], null),cljs.core.cst$sym$option_DASH_id))));

var result__27622__auto__ = nw_calculator.event_handlers.navigate_with_selected_item_refs((function (){var result__27622__auto__ = cljs.core.PersistentArrayMap.EMPTY;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(2),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27622__auto__;
})(),(function (){var result__27622__auto__ = cljs.core.assoc_in((function (){var result__27622__auto__ = selected_item_refs;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(5),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$selected_DASH_item_DASH_refs,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27622__auto__;
})(),(function (){var result__27622__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var result__27622__auto__ = item_index;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(7),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27622__auto__;
})(),cljs.core.cst$kw$selected_DASH_options,(function (){var result__27622__auto__ = category_path;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(9),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$category_DASH_path,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27622__auto__;
})(),cljs.core.cst$kw$id], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(6),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$selected_DASH_options,cljs.core.cst$sym$category_DASH_path,cljs.core.cst$kw$id], null),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27622__auto__;
})(),(function (){var result__27622__auto__ = option_id;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(11),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$option_DASH_id,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27622__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(4),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$selected_DASH_item_DASH_refs,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$selected_DASH_options,cljs.core.cst$sym$category_DASH_path,cljs.core.cst$kw$id], null),cljs.core.cst$sym$option_DASH_id),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27622__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_navigate_DASH_with_DASH_selected_DASH_item_DASH_refs,cljs.core.PersistentArrayMap.EMPTY,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$selected_DASH_item_DASH_refs,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$selected_DASH_options,cljs.core.cst$sym$category_DASH_path,cljs.core.cst$kw$id], null),cljs.core.cst$sym$option_DASH_id)),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__27622__auto__;
}catch (e27946){var e = e27946;
throw e;
}}):(function (p__27947,p__27948){
var map__27949 = p__27947;
var map__27949__$1 = cljs.core.__destructure_map(map__27949);
var map__27950 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27949__$1,cljs.core.cst$kw$db);
var map__27950__$1 = cljs.core.__destructure_map(map__27950);
var selected_item_refs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27950__$1,cljs.core.cst$kw$selected_DASH_item_DASH_refs);
var vec__27951 = p__27948;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27951,(0),null);
var vec__27954 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27951,(1),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27954,(0),null);
var category_path = vec__27954;
var option_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27951,(2),null);
return nw_calculator.event_handlers.navigate_with_selected_item_refs(cljs.core.PersistentArrayMap.EMPTY,cljs.core.assoc_in(selected_item_refs,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [item_index,cljs.core.cst$kw$selected_DASH_options,category_path,cljs.core.cst$kw$id], null),option_id));
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_set_DASH_quantity_DASH_multiplier,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__27957,p__27958){
var map__27959 = p__27957;
var map__27959__$1 = cljs.core.__destructure_map(map__27959);
var map__27960 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27959__$1,cljs.core.cst$kw$db);
var map__27960__$1 = cljs.core.__destructure_map(map__27960);
var selected_item_refs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27960__$1,cljs.core.cst$kw$selected_DASH_item_DASH_refs);
var vec__27961 = p__27958;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27961,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27961,(1),null);
var multiplier = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27961,(2),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$selected_DASH_item_DASH_refs], null)], null),cljs.core.cst$kw$db], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$sym$multiplier], null)], null),cljs.core.list(cljs.core.cst$sym$handlers_SLASH_navigate_DASH_with_DASH_selected_DASH_item_DASH_refs,cljs.core.PersistentArrayMap.EMPTY,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$selected_DASH_item_DASH_refs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$quantity_DASH_multiplier], null),cljs.core.cst$sym$multiplier))));

var result__27622__auto__ = nw_calculator.event_handlers.navigate_with_selected_item_refs((function (){var result__27622__auto__ = cljs.core.PersistentArrayMap.EMPTY;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(2),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27622__auto__;
})(),(function (){var result__27622__auto__ = cljs.core.assoc_in((function (){var result__27622__auto__ = selected_item_refs;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(5),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$selected_DASH_item_DASH_refs,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27622__auto__;
})(),(function (){var result__27622__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var result__27622__auto__ = item_index;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(7),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27622__auto__;
})(),cljs.core.cst$kw$quantity_DASH_multiplier], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(6),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$quantity_DASH_multiplier], null),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27622__auto__;
})(),(function (){var result__27622__auto__ = multiplier;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(9),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$multiplier,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27622__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(4),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$selected_DASH_item_DASH_refs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$quantity_DASH_multiplier], null),cljs.core.cst$sym$multiplier),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27622__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_navigate_DASH_with_DASH_selected_DASH_item_DASH_refs,cljs.core.PersistentArrayMap.EMPTY,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$selected_DASH_item_DASH_refs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$quantity_DASH_multiplier], null),cljs.core.cst$sym$multiplier)),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__27622__auto__;
}catch (e27964){var e = e27964;
throw e;
}}):(function (p__27965,p__27966){
var map__27967 = p__27965;
var map__27967__$1 = cljs.core.__destructure_map(map__27967);
var map__27968 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27967__$1,cljs.core.cst$kw$db);
var map__27968__$1 = cljs.core.__destructure_map(map__27968);
var selected_item_refs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27968__$1,cljs.core.cst$kw$selected_DASH_item_DASH_refs);
var vec__27969 = p__27966;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27969,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27969,(1),null);
var multiplier = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27969,(2),null);
return nw_calculator.event_handlers.navigate_with_selected_item_refs(cljs.core.PersistentArrayMap.EMPTY,cljs.core.assoc_in(selected_item_refs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item_index,cljs.core.cst$kw$quantity_DASH_multiplier], null),multiplier));
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_add_DASH_empty_DASH_item,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__27972,_){
var map__27973 = p__27972;
var map__27973__$1 = cljs.core.__destructure_map(map__27973);
var map__27974 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27973__$1,cljs.core.cst$kw$db);
var map__27974__$1 = cljs.core.__destructure_map(map__27974);
var db = map__27974__$1;
var selected_item_refs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27974__$1,cljs.core.cst$kw$selected_DASH_item_DASH_refs);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$selected_DASH_item_DASH_refs], null),cljs.core.cst$kw$as,cljs.core.cst$sym$db], null),cljs.core.cst$kw$db], null),cljs.core.cst$sym$_], null),cljs.core.list(cljs.core.cst$sym$handlers_SLASH_navigate_DASH_with_DASH_selected_DASH_item_DASH_refs,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.list(cljs.core.cst$sym$update,cljs.core.cst$sym$db,cljs.core.cst$kw$search_DASH_results,cljs.core.cst$sym$conj,cljs.core.PersistentVector.EMPTY)], null),cljs.core.list(cljs.core.cst$sym$conj,cljs.core.cst$sym$selected_DASH_item_DASH_refs,cljs.core.cst$sym$df_SLASH_empty_DASH_selected_DASH_item_DASH_ref))));

var result__27622__auto__ = nw_calculator.event_handlers.navigate_with_selected_item_refs((function (){var result__27622__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,(function (){var result__27622__auto__ = cljs.core.update.cljs$core$IFn$_invoke$arity$4((function (){var result__27622__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(5),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27622__auto__;
})(),cljs.core.cst$kw$search_DASH_results,(function (){var result__27622__auto__ = cljs.core.conj;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(7),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$conj,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27622__auto__;
})(),(function (){var result__27622__auto__ = cljs.core.PersistentVector.EMPTY;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(8),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27622__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(4),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$update,cljs.core.cst$sym$db,cljs.core.cst$kw$search_DASH_results,cljs.core.cst$sym$conj,cljs.core.PersistentVector.EMPTY),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27622__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(2),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.list(cljs.core.cst$sym$update,cljs.core.cst$sym$db,cljs.core.cst$kw$search_DASH_results,cljs.core.cst$sym$conj,cljs.core.PersistentVector.EMPTY)], null),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27622__auto__;
})(),(function (){var result__27622__auto__ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var result__27622__auto__ = selected_item_refs;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(11),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$selected_DASH_item_DASH_refs,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27622__auto__;
})(),(function (){var result__27622__auto__ = nw_calculator.defaults.empty_selected_item_ref;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(12),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$df_SLASH_empty_DASH_selected_DASH_item_DASH_ref,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27622__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(10),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$conj,cljs.core.cst$sym$selected_DASH_item_DASH_refs,cljs.core.cst$sym$df_SLASH_empty_DASH_selected_DASH_item_DASH_ref),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27622__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_navigate_DASH_with_DASH_selected_DASH_item_DASH_refs,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.list(cljs.core.cst$sym$update,cljs.core.cst$sym$db,cljs.core.cst$kw$search_DASH_results,cljs.core.cst$sym$conj,cljs.core.PersistentVector.EMPTY)], null),cljs.core.list(cljs.core.cst$sym$conj,cljs.core.cst$sym$selected_DASH_item_DASH_refs,cljs.core.cst$sym$df_SLASH_empty_DASH_selected_DASH_item_DASH_ref)),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__27622__auto__;
}catch (e27975){var e = e27975;
throw e;
}}):(function (p__27976,_){
var map__27977 = p__27976;
var map__27977__$1 = cljs.core.__destructure_map(map__27977);
var map__27978 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27977__$1,cljs.core.cst$kw$db);
var map__27978__$1 = cljs.core.__destructure_map(map__27978);
var db = map__27978__$1;
var selected_item_refs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27978__$1,cljs.core.cst$kw$selected_DASH_item_DASH_refs);
return nw_calculator.event_handlers.navigate_with_selected_item_refs(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,cljs.core.cst$kw$search_DASH_results,cljs.core.conj,cljs.core.PersistentVector.EMPTY)], null),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(selected_item_refs,nw_calculator.defaults.empty_selected_item_ref));
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_remove_DASH_item,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__27979,p__27980){
var map__27981 = p__27979;
var map__27981__$1 = cljs.core.__destructure_map(map__27981);
var map__27982 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27981__$1,cljs.core.cst$kw$db);
var map__27982__$1 = cljs.core.__destructure_map(map__27982);
var db = map__27982__$1;
var selected_item_refs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27982__$1,cljs.core.cst$kw$selected_DASH_item_DASH_refs);
var vec__27983 = p__27980;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27983,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27983,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$selected_DASH_item_DASH_refs], null),cljs.core.cst$kw$as,cljs.core.cst$sym$db], null),cljs.core.cst$kw$db], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$item_DASH_index], null)], null),cljs.core.list(cljs.core.cst$sym$handlers_SLASH_navigate_DASH_with_DASH_selected_DASH_item_DASH_refs,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.list(cljs.core.cst$sym$update,cljs.core.cst$sym$db,cljs.core.cst$kw$search_DASH_results,cljs.core.cst$sym$util_SLASH_vec_DASH_remove_DASH_nth,cljs.core.cst$sym$item_DASH_index)], null),cljs.core.list(cljs.core.cst$sym$util_SLASH_vec_DASH_remove_DASH_nth,cljs.core.cst$sym$selected_DASH_item_DASH_refs,cljs.core.cst$sym$item_DASH_index))));

var result__27622__auto__ = nw_calculator.event_handlers.navigate_with_selected_item_refs((function (){var result__27622__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,(function (){var result__27622__auto__ = cljs.core.update.cljs$core$IFn$_invoke$arity$4((function (){var result__27622__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(5),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27622__auto__;
})(),cljs.core.cst$kw$search_DASH_results,(function (){var result__27622__auto__ = nw_calculator.utilities.vec_remove_nth;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(7),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$util_SLASH_vec_DASH_remove_DASH_nth,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27622__auto__;
})(),(function (){var result__27622__auto__ = item_index;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(8),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27622__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(4),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$update,cljs.core.cst$sym$db,cljs.core.cst$kw$search_DASH_results,cljs.core.cst$sym$util_SLASH_vec_DASH_remove_DASH_nth,cljs.core.cst$sym$item_DASH_index),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27622__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(2),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.list(cljs.core.cst$sym$update,cljs.core.cst$sym$db,cljs.core.cst$kw$search_DASH_results,cljs.core.cst$sym$util_SLASH_vec_DASH_remove_DASH_nth,cljs.core.cst$sym$item_DASH_index)], null),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27622__auto__;
})(),(function (){var result__27622__auto__ = nw_calculator.utilities.vec_remove_nth((function (){var result__27622__auto__ = selected_item_refs;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(10),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$selected_DASH_item_DASH_refs,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27622__auto__;
})(),(function (){var result__27622__auto__ = item_index;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,3,cljs.core.cst$kw$syntax_DASH_order,(11),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27622__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(9),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$util_SLASH_vec_DASH_remove_DASH_nth,cljs.core.cst$sym$selected_DASH_item_DASH_refs,cljs.core.cst$sym$item_DASH_index),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27622__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_navigate_DASH_with_DASH_selected_DASH_item_DASH_refs,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.list(cljs.core.cst$sym$update,cljs.core.cst$sym$db,cljs.core.cst$kw$search_DASH_results,cljs.core.cst$sym$util_SLASH_vec_DASH_remove_DASH_nth,cljs.core.cst$sym$item_DASH_index)], null),cljs.core.list(cljs.core.cst$sym$util_SLASH_vec_DASH_remove_DASH_nth,cljs.core.cst$sym$selected_DASH_item_DASH_refs,cljs.core.cst$sym$item_DASH_index)),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__27622__auto__;
}catch (e27986){var e = e27986;
throw e;
}}):(function (p__27987,p__27988){
var map__27989 = p__27987;
var map__27989__$1 = cljs.core.__destructure_map(map__27989);
var map__27990 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27989__$1,cljs.core.cst$kw$db);
var map__27990__$1 = cljs.core.__destructure_map(map__27990);
var db = map__27990__$1;
var selected_item_refs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27990__$1,cljs.core.cst$kw$selected_DASH_item_DASH_refs);
var vec__27991 = p__27988;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27991,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27991,(1),null);
return nw_calculator.event_handlers.navigate_with_selected_item_refs(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,cljs.core.cst$kw$search_DASH_results,nw_calculator.utilities.vec_remove_nth,item_index)], null),nw_calculator.utilities.vec_remove_nth(selected_item_refs,item_index));
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_remove_DASH_all_DASH_items,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__27994,_){
var map__27995 = p__27994;
var map__27995__$1 = cljs.core.__destructure_map(map__27995);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27995__$1,cljs.core.cst$kw$db);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$db,cljs.core.cst$kw$db], null),cljs.core.cst$sym$_], null),cljs.core.list(cljs.core.cst$sym$handlers_SLASH_navigate_DASH_with_DASH_selected_DASH_item_DASH_refs,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_clear_DASH_search,cljs.core.cst$sym$db)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$df_SLASH_empty_DASH_selected_DASH_item_DASH_ref], null))));

var result__27622__auto__ = nw_calculator.event_handlers.navigate_with_selected_item_refs((function (){var result__27622__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,(function (){var result__27622__auto__ = nw_calculator.event_handlers.clear_search.cljs$core$IFn$_invoke$arity$1((function (){var result__27622__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(5),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27622__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(4),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_clear_DASH_search,cljs.core.cst$sym$db),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27622__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(2),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_clear_DASH_search,cljs.core.cst$sym$db)], null),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27622__auto__;
})(),(function (){var result__27622__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var result__27622__auto__ = nw_calculator.defaults.empty_selected_item_ref;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(7),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$df_SLASH_empty_DASH_selected_DASH_item_DASH_ref,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27622__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(6),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$df_SLASH_empty_DASH_selected_DASH_item_DASH_ref], null),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27622__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_navigate_DASH_with_DASH_selected_DASH_item_DASH_refs,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_clear_DASH_search,cljs.core.cst$sym$db)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$df_SLASH_empty_DASH_selected_DASH_item_DASH_ref], null)),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__27622__auto__;
}catch (e27996){var e = e27996;
throw e;
}}):(function (p__27997,_){
var map__27998 = p__27997;
var map__27998__$1 = cljs.core.__destructure_map(map__27998);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27998__$1,cljs.core.cst$kw$db);
return nw_calculator.event_handlers.navigate_with_selected_item_refs(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,nw_calculator.event_handlers.clear_search.cljs$core$IFn$_invoke$arity$1(db)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.defaults.empty_selected_item_ref], null));
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_set_DASH_trade_DASH_skill_DASH_bonus,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__27999,p__28000){
var map__28001 = p__27999;
var map__28001__$1 = cljs.core.__destructure_map(map__28001);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28001__$1,cljs.core.cst$kw$db);
var vec__28002 = p__28000;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28002,(0),null);
var skill = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28002,(1),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28002,(2),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$db,cljs.core.cst$kw$db], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$skill,cljs.core.cst$sym$value], null)], null),cljs.core.list(cljs.core.cst$sym$let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$updated_DASH_db,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$trade_DASH_skill_DASH_bonuses,cljs.core.cst$sym$skill], null),cljs.core.cst$sym$value)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.cst$sym$updated_DASH_db,cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_persist_BANG_,cljs.core.cst$sym$updated_DASH_db], null))));

var result__27622__auto__ = (function (){var updated_db = (function (){var result__27622__auto__ = cljs.core.assoc_in((function (){var result__27622__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(5),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27622__auto__;
})(),(function (){var result__27622__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$trade_DASH_skill_DASH_bonuses,(function (){var result__27622__auto__ = skill;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(8),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$skill,cljs.core.cst$kw$indent_DASH_level,(4)], null));

return result__27622__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(6),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$trade_DASH_skill_DASH_bonuses,cljs.core.cst$sym$skill], null),cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27622__auto__;
})(),(function (){var result__27622__auto__ = value;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(9),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$value,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27622__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(4),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$trade_DASH_skill_DASH_bonuses,cljs.core.cst$sym$skill], null),cljs.core.cst$sym$value),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27622__auto__;
})();
var result__27622__auto__ = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,(function (){var result__27622__auto__ = updated_db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(12),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$updated_DASH_db,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27622__auto__;
})(),cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_persist_BANG_,(function (){var result__27622__auto__ = updated_db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,3,cljs.core.cst$kw$syntax_DASH_order,(14),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$updated_DASH_db,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27622__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(10),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.cst$sym$updated_DASH_db,cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_persist_BANG_,cljs.core.cst$sym$updated_DASH_db], null),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27622__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$updated_DASH_db,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$trade_DASH_skill_DASH_bonuses,cljs.core.cst$sym$skill], null),cljs.core.cst$sym$value)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.cst$sym$updated_DASH_db,cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_persist_BANG_,cljs.core.cst$sym$updated_DASH_db], null)),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__27622__auto__;
}catch (e28005){var e = e28005;
throw e;
}}):(function (p__28006,p__28007){
var map__28008 = p__28006;
var map__28008__$1 = cljs.core.__destructure_map(map__28008);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28008__$1,cljs.core.cst$kw$db);
var vec__28009 = p__28007;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28009,(0),null);
var skill = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28009,(1),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28009,(2),null);
var updated_db = cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$trade_DASH_skill_DASH_bonuses,skill], null),value);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,updated_db,cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_persist_BANG_,updated_db], null);
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_toggle_DASH_additional_DASH_item_DASH_bonuses,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__28012,_){
var map__28013 = p__28012;
var map__28013__$1 = cljs.core.__destructure_map(map__28013);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28013__$1,cljs.core.cst$kw$db);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$db,cljs.core.cst$kw$db], null),cljs.core.cst$sym$_], null),cljs.core.list(cljs.core.cst$sym$let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$updated_DASH_db,cljs.core.list(cljs.core.cst$sym$update,cljs.core.cst$sym$db,cljs.core.cst$kw$additional_DASH_item_DASH_bonuses_QMARK_,cljs.core.cst$sym$not)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.cst$sym$updated_DASH_db,cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_persist_BANG_,cljs.core.cst$sym$updated_DASH_db], null))));

var result__27622__auto__ = (function (){var updated_db = (function (){var result__27622__auto__ = cljs.core.update.cljs$core$IFn$_invoke$arity$3((function (){var result__27622__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(5),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27622__auto__;
})(),cljs.core.cst$kw$additional_DASH_item_DASH_bonuses_QMARK_,(function (){var result__27622__auto__ = cljs.core.not;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(7),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$not,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27622__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(4),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$update,cljs.core.cst$sym$db,cljs.core.cst$kw$additional_DASH_item_DASH_bonuses_QMARK_,cljs.core.cst$sym$not),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27622__auto__;
})();
var result__27622__auto__ = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,(function (){var result__27622__auto__ = updated_db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(10),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$updated_DASH_db,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27622__auto__;
})(),cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_persist_BANG_,(function (){var result__27622__auto__ = updated_db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,3,cljs.core.cst$kw$syntax_DASH_order,(12),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$updated_DASH_db,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27622__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(8),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.cst$sym$updated_DASH_db,cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_persist_BANG_,cljs.core.cst$sym$updated_DASH_db], null),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27622__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__27622__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$updated_DASH_db,cljs.core.list(cljs.core.cst$sym$update,cljs.core.cst$sym$db,cljs.core.cst$kw$additional_DASH_item_DASH_bonuses_QMARK_,cljs.core.cst$sym$not)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.cst$sym$updated_DASH_db,cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_persist_BANG_,cljs.core.cst$sym$updated_DASH_db], null)),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__27622__auto__;
}catch (e28014){var e = e28014;
throw e;
}}):(function (p__28015,_){
var map__28016 = p__28015;
var map__28016__$1 = cljs.core.__destructure_map(map__28016);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28016__$1,cljs.core.cst$kw$db);
var updated_db = cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$additional_DASH_item_DASH_bonuses_QMARK_,cljs.core.not);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,updated_db,cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_persist_BANG_,updated_db], null);
})));
