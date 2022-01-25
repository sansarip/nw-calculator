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
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_initialize_DASH_db,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_,p__27816){
var vec__27817 = p__27816;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27817,(0),null);
var default_db = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27817,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$default_DASH_db], null)], null),cljs.core.list(cljs.core.cst$sym$_DASH__GT__GT_,cljs.core.list(cljs.core.cst$sym$js_SLASH_localStorage$getItem,"db"),cljs.core.cst$sym$edn_SLASH_read_DASH_string,cljs.core.list(cljs.core.cst$sym$merge,cljs.core.cst$sym$default_DASH_db))));

var result__27621__auto__ = (function (){var result__27635__auto__ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var result__27621__auto__ = default_db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(6),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$default_DASH_db,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27621__auto__;
})(),(function (){var result__27635__auto__ = clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1((function (){var result__27621__auto__ = localStorage.getItem("db");
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(2),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$js_SLASH_localStorage$getItem,"db"),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27621__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(4),cljs.core.cst$kw$result,result__27635__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$edn_SLASH_read_DASH_string,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27635__auto__;
})()], 0));
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(5),cljs.core.cst$kw$result,result__27635__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$merge,cljs.core.cst$sym$default_DASH_db),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27635__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$_DASH__GT__GT_,cljs.core.list(cljs.core.cst$sym$js_SLASH_localStorage$getItem,"db"),cljs.core.cst$sym$edn_SLASH_read_DASH_string,cljs.core.list(cljs.core.cst$sym$merge,cljs.core.cst$sym$default_DASH_db)),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__27621__auto__;
}catch (e27820){var e = e27820;
throw e;
}}):(function (_,p__27821){
var vec__27822 = p__27821;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27822,(0),null);
var default_db = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27822,(1),null);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default_db,clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(localStorage.getItem("db"))], 0));
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_navigate,(function (_,p__27825){
var vec__27826 = p__27825;
var seq__27827 = cljs.core.seq(vec__27826);
var first__27828 = cljs.core.first(seq__27827);
var seq__27827__$1 = cljs.core.next(seq__27827);
var ___$1 = first__27828;
var route = seq__27827__$1;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_navigate_BANG_,route], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_navigated,(function (p__27829,p__27830){
var map__27831 = p__27829;
var map__27831__$1 = cljs.core.__destructure_map(map__27831);
var db = map__27831__$1;
var map__27832 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27831__$1,cljs.core.cst$kw$current_DASH_route);
var map__27832__$1 = cljs.core.__destructure_map(map__27832);
var controllers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27832__$1,cljs.core.cst$kw$controllers);
var vec__27833 = p__27830;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27833,(0),null);
var new_match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27833,(1),null);
var new_route = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_match,cljs.core.cst$kw$controllers,reitit.frontend.controllers.apply_controllers(controllers,new_match));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$current_DASH_route,new_route);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_set_DASH_state,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__27836){
var vec__27837 = p__27836;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27837,(0),null);
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27837,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$state], null)], null),cljs.core.list(cljs.core.cst$sym$assoc,cljs.core.cst$sym$db,cljs.core.cst$kw$state,cljs.core.cst$sym$state)));

var result__27621__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var result__27621__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(2),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27621__auto__;
})(),cljs.core.cst$kw$state,(function (){var result__27621__auto__ = state;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(4),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$state,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27621__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$assoc,cljs.core.cst$sym$db,cljs.core.cst$kw$state,cljs.core.cst$sym$state),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__27621__auto__;
}catch (e27840){var e = e27840;
throw e;
}}):(function (db,p__27841){
var vec__27842 = p__27841;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27842,(0),null);
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27842,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$state,state);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_success,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__27845){
var vec__27846 = p__27845;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27846,(0),null);
var items_edn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27846,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$items_DASH_edn], null)], null),cljs.core.list(cljs.core.cst$sym$_DASH__GT_,cljs.core.cst$sym$db,cljs.core.list(cljs.core.cst$sym$update,cljs.core.cst$kw$items,cljs.core.cst$sym$c_SLASH_add_DASH_items,cljs.core.cst$sym$items_DASH_edn),cljs.core.list(cljs.core.cst$sym$handlers_SLASH_next_DASH_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state], null),cljs.core.cst$sym$fsm_SLASH_app_DASH_fsm,cljs.core.cst$kw$success))));

var result__27621__auto__ = (function (){var result__27628__auto__ = nw_calculator.event_handlers.next_state((function (){var result__27628__auto__ = cljs.core.update.cljs$core$IFn$_invoke$arity$4((function (){var result__27621__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(2),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27621__auto__;
})(),cljs.core.cst$kw$items,(function (){var result__27621__auto__ = compound2.core.add_items;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(6),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$c_SLASH_add_DASH_items,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27621__auto__;
})(),(function (){var result__27621__auto__ = items_edn;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(7),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$items_DASH_edn,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27621__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(3),cljs.core.cst$kw$result,result__27628__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$update,cljs.core.cst$kw$items,cljs.core.cst$sym$c_SLASH_add_DASH_items,cljs.core.cst$sym$items_DASH_edn),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27628__auto__;
})(),(function (){var result__27621__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(10),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state], null),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27621__auto__;
})(),(function (){var result__27621__auto__ = nw_calculator.fsm.app_fsm;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(12),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$fsm_SLASH_app_DASH_fsm,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27621__auto__;
})(),cljs.core.cst$kw$success);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(8),cljs.core.cst$kw$result,result__27628__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_next_DASH_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state], null),cljs.core.cst$sym$fsm_SLASH_app_DASH_fsm,cljs.core.cst$kw$success),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27628__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$_DASH__GT_,cljs.core.cst$sym$db,cljs.core.list(cljs.core.cst$sym$update,cljs.core.cst$kw$items,cljs.core.cst$sym$c_SLASH_add_DASH_items,cljs.core.cst$sym$items_DASH_edn),cljs.core.list(cljs.core.cst$sym$handlers_SLASH_next_DASH_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state], null),cljs.core.cst$sym$fsm_SLASH_app_DASH_fsm,cljs.core.cst$kw$success)),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__27621__auto__;
}catch (e27849){var e = e27849;
throw e;
}}):(function (db,p__27850){
var vec__27851 = p__27850;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27851,(0),null);
var items_edn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27851,(1),null);
return nw_calculator.event_handlers.next_state(cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,cljs.core.cst$kw$items,compound2.core.add_items,items_edn),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state], null),nw_calculator.fsm.app_fsm,cljs.core.cst$kw$success);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_failure,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__27854){
var vec__27855 = p__27854;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27855,(0),null);
var _resp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27855,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$_resp], null)], null),cljs.core.cst$sym$db));

var result__27621__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db,cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__27621__auto__;
}catch (e27858){var e = e27858;
throw e;
}}):(function (db,p__27859){
var vec__27860 = p__27859;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27860,(0),null);
var _resp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27860,(1),null);
return db;
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__27863,_){
var map__27864 = p__27863;
var map__27864__$1 = cljs.core.__destructure_map(map__27864);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27864__$1,cljs.core.cst$kw$db);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$db,cljs.core.cst$kw$db], null),cljs.core.cst$sym$_], null),cljs.core.list(cljs.core.cst$sym$handlers_SLASH_next_DASH_state,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$db,cljs.core.cst$sym$db,cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_log_DASH_info,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u2B07\uFE0F Fetching item data!"], null),cljs.core.cst$kw$http_DASH_xhrio,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$method,cljs.core.cst$kw$get,cljs.core.cst$kw$response_DASH_format,cljs.core.list(cljs.core.cst$sym$ajax_SLASH_json_DASH_response_DASH_format,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywords_QMARK_,true], null)),cljs.core.cst$kw$uri,"/data/items.json",cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_success], null),cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_failure], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db,cljs.core.cst$kw$state], null),cljs.core.cst$sym$fsm_SLASH_app_DASH_fsm,cljs.core.cst$kw$fetch_DASH_item_DASH_data)));

var result__27621__auto__ = nw_calculator.event_handlers.next_state((function (){var result__27621__auto__ = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$db,(function (){var result__27621__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(4),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27621__auto__;
})(),cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_log_DASH_info,(function (){var result__27621__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u2B07\uFE0F Fetching item data!"], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(6),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u2B07\uFE0F Fetching item data!"], null),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27621__auto__;
})(),cljs.core.cst$kw$http_DASH_xhrio,(function (){var result__27621__auto__ = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$method,cljs.core.cst$kw$get,cljs.core.cst$kw$response_DASH_format,(function (){var result__27621__auto__ = (function (){var G__27866 = (function (){var result__27621__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywords_QMARK_,true], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(14),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywords_QMARK_,true], null),cljs.core.cst$kw$indent_DASH_level,(4)], null));

return result__27621__auto__;
})();
return (ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1 ? ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(G__27866) : ajax.core.json_response_format.call(null,G__27866));
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(13),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$ajax_SLASH_json_DASH_response_DASH_format,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywords_QMARK_,true], null)),cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27621__auto__;
})(),cljs.core.cst$kw$uri,"/data/items.json",cljs.core.cst$kw$on_DASH_success,(function (){var result__27621__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_success], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(20),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_success], null),cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27621__auto__;
})(),cljs.core.cst$kw$on_DASH_failure,(function (){var result__27621__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_failure], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(23),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_failure], null),cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27621__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(9),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$method,cljs.core.cst$kw$get,cljs.core.cst$kw$response_DASH_format,cljs.core.list(cljs.core.cst$sym$ajax_SLASH_json_DASH_response_DASH_format,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywords_QMARK_,true], null)),cljs.core.cst$kw$uri,"/data/items.json",cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_success], null),cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_failure], null)], null),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27621__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(2),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$db,cljs.core.cst$sym$db,cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_log_DASH_info,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u2B07\uFE0F Fetching item data!"], null),cljs.core.cst$kw$http_DASH_xhrio,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$method,cljs.core.cst$kw$get,cljs.core.cst$kw$response_DASH_format,cljs.core.list(cljs.core.cst$sym$ajax_SLASH_json_DASH_response_DASH_format,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywords_QMARK_,true], null)),cljs.core.cst$kw$uri,"/data/items.json",cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_success], null),cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_failure], null)], null)], null),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27621__auto__;
})(),(function (){var result__27621__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db,cljs.core.cst$kw$state], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(25),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db,cljs.core.cst$kw$state], null),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27621__auto__;
})(),(function (){var result__27621__auto__ = nw_calculator.fsm.app_fsm;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(28),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$fsm_SLASH_app_DASH_fsm,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27621__auto__;
})(),cljs.core.cst$kw$fetch_DASH_item_DASH_data);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_next_DASH_state,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$db,cljs.core.cst$sym$db,cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_log_DASH_info,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u2B07\uFE0F Fetching item data!"], null),cljs.core.cst$kw$http_DASH_xhrio,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$method,cljs.core.cst$kw$get,cljs.core.cst$kw$response_DASH_format,cljs.core.list(cljs.core.cst$sym$ajax_SLASH_json_DASH_response_DASH_format,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywords_QMARK_,true], null)),cljs.core.cst$kw$uri,"/data/items.json",cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_success], null),cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_failure], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db,cljs.core.cst$kw$state], null),cljs.core.cst$sym$fsm_SLASH_app_DASH_fsm,cljs.core.cst$kw$fetch_DASH_item_DASH_data),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__27621__auto__;
}catch (e27865){var e = e27865;
throw e;
}}):(function (p__27867,_){
var map__27868 = p__27867;
var map__27868__$1 = cljs.core.__destructure_map(map__27868);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27868__$1,cljs.core.cst$kw$db);
return nw_calculator.event_handlers.next_state(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$db,db,cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_log_DASH_info,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u2B07\uFE0F Fetching item data!"], null),cljs.core.cst$kw$http_DASH_xhrio,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$method,cljs.core.cst$kw$get,cljs.core.cst$kw$response_DASH_format,(function (){var G__27869 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywords_QMARK_,true], null);
return (ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1 ? ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(G__27869) : ajax.core.json_response_format.call(null,G__27869));
})(),cljs.core.cst$kw$uri,"/data/items.json",cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_success], null),cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_failure], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db,cljs.core.cst$kw$state], null),nw_calculator.fsm.app_fsm,cljs.core.cst$kw$fetch_DASH_item_DASH_data);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_search_DASH_success,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__27870){
var vec__27871 = p__27870;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27871,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27871,(1),null);
var search_results = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27871,(2),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$sym$search_DASH_results], null)], null),cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search_DASH_results,cljs.core.cst$sym$item_DASH_index], null),cljs.core.cst$sym$search_DASH_results)));

var result__27621__auto__ = cljs.core.assoc_in((function (){var result__27621__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(2),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27621__auto__;
})(),(function (){var result__27621__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search_DASH_results,(function (){var result__27621__auto__ = item_index;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(5),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27621__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(3),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search_DASH_results,cljs.core.cst$sym$item_DASH_index], null),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27621__auto__;
})(),(function (){var result__27621__auto__ = search_results;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(6),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$search_DASH_results,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27621__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search_DASH_results,cljs.core.cst$sym$item_DASH_index], null),cljs.core.cst$sym$search_DASH_results),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__27621__auto__;
}catch (e27874){var e = e27874;
throw e;
}}):(function (db,p__27875){
var vec__27876 = p__27875;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27876,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27876,(1),null);
var search_results = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27876,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search_DASH_results,item_index], null),search_results);
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_search,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__27879,p__27880){
var map__27881 = p__27879;
var map__27881__$1 = cljs.core.__destructure_map(map__27881);
var map__27882 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27881__$1,cljs.core.cst$kw$db);
var map__27882__$1 = cljs.core.__destructure_map(map__27882);
var db = map__27882__$1;
var map__27883 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27882__$1,cljs.core.cst$kw$items);
var map__27883__$1 = cljs.core.__destructure_map(map__27883);
var items_by_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27883__$1,cljs.core.cst$kw$by_DASH_id);
var vec__27884 = p__27880;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27884,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27884,(1),null);
var query = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27884,(2),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$items_DASH_by_DASH_id,cljs.core.cst$kw$by_DASH_id], null),cljs.core.cst$kw$items,cljs.core.cst$kw$as,cljs.core.cst$sym$db], null),cljs.core.cst$kw$db], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$sym$query], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.cst$sym$db,cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_search_BANG_,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$query,cljs.core.cst$sym$query,cljs.core.cst$kw$items,cljs.core.list(cljs.core.cst$sym$vals,cljs.core.cst$sym$items_DASH_by_DASH_id),cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_search_DASH_success,cljs.core.cst$sym$item_DASH_index], null)], null)], null)));

var result__27621__auto__ = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,(function (){var result__27621__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(3),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27621__auto__;
})(),cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_search_BANG_,(function (){var result__27621__auto__ = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$query,(function (){var result__27621__auto__ = query;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(7),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$query,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27621__auto__;
})(),cljs.core.cst$kw$items,(function (){var result__27621__auto__ = cljs.core.vals((function (){var result__27621__auto__ = items_by_id;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(10),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$items_DASH_by_DASH_id,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27621__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(9),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$vals,cljs.core.cst$sym$items_DASH_by_DASH_id),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27621__auto__;
})(),cljs.core.cst$kw$on_DASH_success,(function (){var result__27621__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_search_DASH_success,(function (){var result__27621__auto__ = item_index;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(14),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27621__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(12),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_search_DASH_success,cljs.core.cst$sym$item_DASH_index], null),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27621__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(5),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$query,cljs.core.cst$sym$query,cljs.core.cst$kw$items,cljs.core.list(cljs.core.cst$sym$vals,cljs.core.cst$sym$items_DASH_by_DASH_id),cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_search_DASH_success,cljs.core.cst$sym$item_DASH_index], null)], null),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27621__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.cst$sym$db,cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_search_BANG_,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$query,cljs.core.cst$sym$query,cljs.core.cst$kw$items,cljs.core.list(cljs.core.cst$sym$vals,cljs.core.cst$sym$items_DASH_by_DASH_id),cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_search_DASH_success,cljs.core.cst$sym$item_DASH_index], null)], null)], null),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__27621__auto__;
}catch (e27887){var e = e27887;
throw e;
}}):(function (p__27888,p__27889){
var map__27890 = p__27888;
var map__27890__$1 = cljs.core.__destructure_map(map__27890);
var map__27891 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27890__$1,cljs.core.cst$kw$db);
var map__27891__$1 = cljs.core.__destructure_map(map__27891);
var db = map__27891__$1;
var map__27892 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27891__$1,cljs.core.cst$kw$items);
var map__27892__$1 = cljs.core.__destructure_map(map__27892);
var items_by_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27892__$1,cljs.core.cst$kw$by_DASH_id);
var vec__27893 = p__27889;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27893,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27893,(1),null);
var query = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27893,(2),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,db,cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_search_BANG_,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$query,query,cljs.core.cst$kw$items,cljs.core.vals(items_by_id),cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_search_DASH_success,item_index], null)], null)], null);
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_clear_DASH_search,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__27896,p__27897){
var map__27898 = p__27896;
var map__27898__$1 = cljs.core.__destructure_map(map__27898);
var map__27899 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27898__$1,cljs.core.cst$kw$db);
var map__27899__$1 = cljs.core.__destructure_map(map__27899);
var db = map__27899__$1;
var selected_item_refs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27899__$1,cljs.core.cst$kw$selected_DASH_item_DASH_refs);
var vec__27900 = p__27897;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27900,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27900,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$selected_DASH_item_DASH_refs], null),cljs.core.cst$kw$as,cljs.core.cst$sym$db], null),cljs.core.cst$kw$db], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$item_DASH_index], null)], null),cljs.core.list(cljs.core.cst$sym$handlers_SLASH_navigate_DASH_with_DASH_selected_DASH_item_DASH_refs,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_clear_DASH_search,cljs.core.cst$sym$db,cljs.core.cst$sym$item_DASH_index)], null),cljs.core.list(cljs.core.cst$sym$update,cljs.core.cst$sym$selected_DASH_item_DASH_refs,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$sym$dissoc,cljs.core.cst$kw$id))));

var result__27621__auto__ = nw_calculator.event_handlers.navigate_with_selected_item_refs((function (){var result__27621__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,(function (){var result__27621__auto__ = nw_calculator.event_handlers.clear_search.cljs$core$IFn$_invoke$arity$2((function (){var result__27621__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(5),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27621__auto__;
})(),(function (){var result__27621__auto__ = item_index;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(6),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27621__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(4),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_clear_DASH_search,cljs.core.cst$sym$db,cljs.core.cst$sym$item_DASH_index),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27621__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(2),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_clear_DASH_search,cljs.core.cst$sym$db,cljs.core.cst$sym$item_DASH_index)], null),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27621__auto__;
})(),(function (){var result__27621__auto__ = cljs.core.update.cljs$core$IFn$_invoke$arity$4((function (){var result__27621__auto__ = selected_item_refs;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(8),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$selected_DASH_item_DASH_refs,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27621__auto__;
})(),(function (){var result__27621__auto__ = item_index;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,3,cljs.core.cst$kw$syntax_DASH_order,(9),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27621__auto__;
})(),(function (){var result__27621__auto__ = cljs.core.dissoc;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(10),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$dissoc,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27621__auto__;
})(),cljs.core.cst$kw$id);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(7),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$update,cljs.core.cst$sym$selected_DASH_item_DASH_refs,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$sym$dissoc,cljs.core.cst$kw$id),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27621__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_navigate_DASH_with_DASH_selected_DASH_item_DASH_refs,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_clear_DASH_search,cljs.core.cst$sym$db,cljs.core.cst$sym$item_DASH_index)], null),cljs.core.list(cljs.core.cst$sym$update,cljs.core.cst$sym$selected_DASH_item_DASH_refs,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$sym$dissoc,cljs.core.cst$kw$id)),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__27621__auto__;
}catch (e27903){var e = e27903;
throw e;
}}):(function (p__27904,p__27905){
var map__27906 = p__27904;
var map__27906__$1 = cljs.core.__destructure_map(map__27906);
var map__27907 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27906__$1,cljs.core.cst$kw$db);
var map__27907__$1 = cljs.core.__destructure_map(map__27907);
var db = map__27907__$1;
var selected_item_refs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27907__$1,cljs.core.cst$kw$selected_DASH_item_DASH_refs);
var vec__27908 = p__27905;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27908,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27908,(1),null);
return nw_calculator.event_handlers.navigate_with_selected_item_refs(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,nw_calculator.event_handlers.clear_search.cljs$core$IFn$_invoke$arity$2(db,item_index)], null),cljs.core.update.cljs$core$IFn$_invoke$arity$4(selected_item_refs,item_index,cljs.core.dissoc,cljs.core.cst$kw$id));
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_select_DASH_item,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__27911,p__27912){
var map__27913 = p__27911;
var map__27913__$1 = cljs.core.__destructure_map(map__27913);
var map__27914 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27913__$1,cljs.core.cst$kw$db);
var map__27914__$1 = cljs.core.__destructure_map(map__27914);
var db = map__27914__$1;
var selected_item_refs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27914__$1,cljs.core.cst$kw$selected_DASH_item_DASH_refs);
var vec__27915 = p__27912;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27915,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27915,(1),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27915,(2),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$selected_DASH_item_DASH_refs], null),cljs.core.cst$kw$as,cljs.core.cst$sym$db], null),cljs.core.cst$kw$db], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$sym$item_DASH_id], null)], null),cljs.core.list(cljs.core.cst$sym$handlers_SLASH_navigate_DASH_with_DASH_selected_DASH_item_DASH_refs,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_clear_DASH_search,cljs.core.cst$sym$db,cljs.core.cst$sym$item_DASH_index)], null),cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$selected_DASH_item_DASH_refs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$id], null),cljs.core.cst$sym$item_DASH_id))));

var result__27621__auto__ = nw_calculator.event_handlers.navigate_with_selected_item_refs((function (){var result__27621__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,(function (){var result__27621__auto__ = nw_calculator.event_handlers.clear_search.cljs$core$IFn$_invoke$arity$2((function (){var result__27621__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(5),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27621__auto__;
})(),(function (){var result__27621__auto__ = item_index;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(6),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27621__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(4),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_clear_DASH_search,cljs.core.cst$sym$db,cljs.core.cst$sym$item_DASH_index),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27621__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(2),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_clear_DASH_search,cljs.core.cst$sym$db,cljs.core.cst$sym$item_DASH_index)], null),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27621__auto__;
})(),(function (){var result__27621__auto__ = cljs.core.assoc_in((function (){var result__27621__auto__ = selected_item_refs;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(8),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$selected_DASH_item_DASH_refs,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27621__auto__;
})(),(function (){var result__27621__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var result__27621__auto__ = item_index;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,3,cljs.core.cst$kw$syntax_DASH_order,(10),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27621__auto__;
})(),cljs.core.cst$kw$id], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(9),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$id], null),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27621__auto__;
})(),(function (){var result__27621__auto__ = item_id;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(12),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$item_DASH_id,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27621__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(7),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$selected_DASH_item_DASH_refs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$id], null),cljs.core.cst$sym$item_DASH_id),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27621__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_navigate_DASH_with_DASH_selected_DASH_item_DASH_refs,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_clear_DASH_search,cljs.core.cst$sym$db,cljs.core.cst$sym$item_DASH_index)], null),cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$selected_DASH_item_DASH_refs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$id], null),cljs.core.cst$sym$item_DASH_id)),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__27621__auto__;
}catch (e27918){var e = e27918;
throw e;
}}):(function (p__27919,p__27920){
var map__27921 = p__27919;
var map__27921__$1 = cljs.core.__destructure_map(map__27921);
var map__27922 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27921__$1,cljs.core.cst$kw$db);
var map__27922__$1 = cljs.core.__destructure_map(map__27922);
var db = map__27922__$1;
var selected_item_refs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27922__$1,cljs.core.cst$kw$selected_DASH_item_DASH_refs);
var vec__27923 = p__27920;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27923,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27923,(1),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27923,(2),null);
return nw_calculator.event_handlers.navigate_with_selected_item_refs(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,nw_calculator.event_handlers.clear_search.cljs$core$IFn$_invoke$arity$2(db,item_index)], null),cljs.core.assoc_in(selected_item_refs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item_index,cljs.core.cst$kw$id], null),item_id));
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_set_DASH_selected_DASH_item_DASH_refs,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__27926){
var vec__27927 = p__27926;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27927,(0),null);
var selected_items = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27927,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$selected_DASH_items], null)], null),cljs.core.list(cljs.core.cst$sym$handlers_SLASH_set_DASH_selected_DASH_item_DASH_refs,cljs.core.cst$sym$db,cljs.core.cst$sym$selected_DASH_items)));

var result__27621__auto__ = nw_calculator.event_handlers.set_selected_item_refs((function (){var result__27621__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(2),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27621__auto__;
})(),(function (){var result__27621__auto__ = selected_items;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(3),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$selected_DASH_items,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27621__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_set_DASH_selected_DASH_item_DASH_refs,cljs.core.cst$sym$db,cljs.core.cst$sym$selected_DASH_items),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__27621__auto__;
}catch (e27930){var e = e27930;
throw e;
}}):(function (db,p__27931){
var vec__27932 = p__27931;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27932,(0),null);
var selected_items = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27932,(1),null);
return nw_calculator.event_handlers.set_selected_item_refs(db,selected_items);
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_select_DASH_option,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__27935,p__27936){
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
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$selected_DASH_item_DASH_refs], null)], null),cljs.core.cst$kw$db], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$as,cljs.core.cst$sym$category_DASH_path], null),cljs.core.cst$sym$option_DASH_id], null)], null),cljs.core.list(cljs.core.cst$sym$handlers_SLASH_navigate_DASH_with_DASH_selected_DASH_item_DASH_refs,cljs.core.PersistentArrayMap.EMPTY,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$selected_DASH_item_DASH_refs,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$selected_DASH_options,cljs.core.cst$sym$category_DASH_path,cljs.core.cst$kw$id], null),cljs.core.cst$sym$option_DASH_id))));

var result__27621__auto__ = nw_calculator.event_handlers.navigate_with_selected_item_refs((function (){var result__27621__auto__ = cljs.core.PersistentArrayMap.EMPTY;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(2),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27621__auto__;
})(),(function (){var result__27621__auto__ = cljs.core.assoc_in((function (){var result__27621__auto__ = selected_item_refs;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(5),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$selected_DASH_item_DASH_refs,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27621__auto__;
})(),(function (){var result__27621__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var result__27621__auto__ = item_index;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(7),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27621__auto__;
})(),cljs.core.cst$kw$selected_DASH_options,(function (){var result__27621__auto__ = category_path;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(9),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$category_DASH_path,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27621__auto__;
})(),cljs.core.cst$kw$id], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(6),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$selected_DASH_options,cljs.core.cst$sym$category_DASH_path,cljs.core.cst$kw$id], null),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27621__auto__;
})(),(function (){var result__27621__auto__ = option_id;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(11),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$option_DASH_id,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27621__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(4),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$selected_DASH_item_DASH_refs,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$selected_DASH_options,cljs.core.cst$sym$category_DASH_path,cljs.core.cst$kw$id], null),cljs.core.cst$sym$option_DASH_id),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27621__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_navigate_DASH_with_DASH_selected_DASH_item_DASH_refs,cljs.core.PersistentArrayMap.EMPTY,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$selected_DASH_item_DASH_refs,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$selected_DASH_options,cljs.core.cst$sym$category_DASH_path,cljs.core.cst$kw$id], null),cljs.core.cst$sym$option_DASH_id)),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__27621__auto__;
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
var vec__27953 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27950,(1),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27953,(0),null);
var category_path = vec__27953;
var option_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27950,(2),null);
return nw_calculator.event_handlers.navigate_with_selected_item_refs(cljs.core.PersistentArrayMap.EMPTY,cljs.core.assoc_in(selected_item_refs,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [item_index,cljs.core.cst$kw$selected_DASH_options,category_path,cljs.core.cst$kw$id], null),option_id));
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_set_DASH_quantity_DASH_multiplier,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__27956,p__27957){
var map__27958 = p__27956;
var map__27958__$1 = cljs.core.__destructure_map(map__27958);
var map__27959 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27958__$1,cljs.core.cst$kw$db);
var map__27959__$1 = cljs.core.__destructure_map(map__27959);
var selected_item_refs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27959__$1,cljs.core.cst$kw$selected_DASH_item_DASH_refs);
var vec__27960 = p__27957;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27960,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27960,(1),null);
var multiplier = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27960,(2),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$selected_DASH_item_DASH_refs], null)], null),cljs.core.cst$kw$db], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$sym$multiplier], null)], null),cljs.core.list(cljs.core.cst$sym$handlers_SLASH_navigate_DASH_with_DASH_selected_DASH_item_DASH_refs,cljs.core.PersistentArrayMap.EMPTY,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$selected_DASH_item_DASH_refs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$quantity_DASH_multiplier], null),cljs.core.cst$sym$multiplier))));

var result__27621__auto__ = nw_calculator.event_handlers.navigate_with_selected_item_refs((function (){var result__27621__auto__ = cljs.core.PersistentArrayMap.EMPTY;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(2),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27621__auto__;
})(),(function (){var result__27621__auto__ = cljs.core.assoc_in((function (){var result__27621__auto__ = selected_item_refs;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(5),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$selected_DASH_item_DASH_refs,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27621__auto__;
})(),(function (){var result__27621__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var result__27621__auto__ = item_index;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(7),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27621__auto__;
})(),cljs.core.cst$kw$quantity_DASH_multiplier], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(6),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$quantity_DASH_multiplier], null),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27621__auto__;
})(),(function (){var result__27621__auto__ = multiplier;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(9),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$multiplier,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27621__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(4),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$selected_DASH_item_DASH_refs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$quantity_DASH_multiplier], null),cljs.core.cst$sym$multiplier),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27621__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_navigate_DASH_with_DASH_selected_DASH_item_DASH_refs,cljs.core.PersistentArrayMap.EMPTY,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$selected_DASH_item_DASH_refs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$quantity_DASH_multiplier], null),cljs.core.cst$sym$multiplier)),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__27621__auto__;
}catch (e27963){var e = e27963;
throw e;
}}):(function (p__27964,p__27965){
var map__27966 = p__27964;
var map__27966__$1 = cljs.core.__destructure_map(map__27966);
var map__27967 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27966__$1,cljs.core.cst$kw$db);
var map__27967__$1 = cljs.core.__destructure_map(map__27967);
var selected_item_refs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27967__$1,cljs.core.cst$kw$selected_DASH_item_DASH_refs);
var vec__27968 = p__27965;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27968,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27968,(1),null);
var multiplier = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27968,(2),null);
return nw_calculator.event_handlers.navigate_with_selected_item_refs(cljs.core.PersistentArrayMap.EMPTY,cljs.core.assoc_in(selected_item_refs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item_index,cljs.core.cst$kw$quantity_DASH_multiplier], null),multiplier));
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_add_DASH_empty_DASH_item,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__27971,_){
var map__27972 = p__27971;
var map__27972__$1 = cljs.core.__destructure_map(map__27972);
var map__27973 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27972__$1,cljs.core.cst$kw$db);
var map__27973__$1 = cljs.core.__destructure_map(map__27973);
var db = map__27973__$1;
var selected_item_refs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27973__$1,cljs.core.cst$kw$selected_DASH_item_DASH_refs);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$selected_DASH_item_DASH_refs], null),cljs.core.cst$kw$as,cljs.core.cst$sym$db], null),cljs.core.cst$kw$db], null),cljs.core.cst$sym$_], null),cljs.core.list(cljs.core.cst$sym$handlers_SLASH_navigate_DASH_with_DASH_selected_DASH_item_DASH_refs,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.list(cljs.core.cst$sym$update,cljs.core.cst$sym$db,cljs.core.cst$kw$search_DASH_results,cljs.core.cst$sym$conj,cljs.core.PersistentVector.EMPTY)], null),cljs.core.list(cljs.core.cst$sym$conj,cljs.core.cst$sym$selected_DASH_item_DASH_refs,cljs.core.cst$sym$df_SLASH_empty_DASH_selected_DASH_item_DASH_ref))));

var result__27621__auto__ = nw_calculator.event_handlers.navigate_with_selected_item_refs((function (){var result__27621__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,(function (){var result__27621__auto__ = cljs.core.update.cljs$core$IFn$_invoke$arity$4((function (){var result__27621__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(5),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27621__auto__;
})(),cljs.core.cst$kw$search_DASH_results,(function (){var result__27621__auto__ = cljs.core.conj;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(7),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$conj,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27621__auto__;
})(),(function (){var result__27621__auto__ = cljs.core.PersistentVector.EMPTY;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(8),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27621__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(4),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$update,cljs.core.cst$sym$db,cljs.core.cst$kw$search_DASH_results,cljs.core.cst$sym$conj,cljs.core.PersistentVector.EMPTY),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27621__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(2),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.list(cljs.core.cst$sym$update,cljs.core.cst$sym$db,cljs.core.cst$kw$search_DASH_results,cljs.core.cst$sym$conj,cljs.core.PersistentVector.EMPTY)], null),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27621__auto__;
})(),(function (){var result__27621__auto__ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var result__27621__auto__ = selected_item_refs;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(11),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$selected_DASH_item_DASH_refs,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27621__auto__;
})(),(function (){var result__27621__auto__ = nw_calculator.defaults.empty_selected_item_ref;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(12),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$df_SLASH_empty_DASH_selected_DASH_item_DASH_ref,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27621__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(10),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$conj,cljs.core.cst$sym$selected_DASH_item_DASH_refs,cljs.core.cst$sym$df_SLASH_empty_DASH_selected_DASH_item_DASH_ref),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27621__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_navigate_DASH_with_DASH_selected_DASH_item_DASH_refs,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.list(cljs.core.cst$sym$update,cljs.core.cst$sym$db,cljs.core.cst$kw$search_DASH_results,cljs.core.cst$sym$conj,cljs.core.PersistentVector.EMPTY)], null),cljs.core.list(cljs.core.cst$sym$conj,cljs.core.cst$sym$selected_DASH_item_DASH_refs,cljs.core.cst$sym$df_SLASH_empty_DASH_selected_DASH_item_DASH_ref)),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__27621__auto__;
}catch (e27974){var e = e27974;
throw e;
}}):(function (p__27975,_){
var map__27976 = p__27975;
var map__27976__$1 = cljs.core.__destructure_map(map__27976);
var map__27977 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27976__$1,cljs.core.cst$kw$db);
var map__27977__$1 = cljs.core.__destructure_map(map__27977);
var db = map__27977__$1;
var selected_item_refs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27977__$1,cljs.core.cst$kw$selected_DASH_item_DASH_refs);
return nw_calculator.event_handlers.navigate_with_selected_item_refs(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,cljs.core.cst$kw$search_DASH_results,cljs.core.conj,cljs.core.PersistentVector.EMPTY)], null),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(selected_item_refs,nw_calculator.defaults.empty_selected_item_ref));
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_remove_DASH_item,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__27978,p__27979){
var map__27980 = p__27978;
var map__27980__$1 = cljs.core.__destructure_map(map__27980);
var map__27981 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27980__$1,cljs.core.cst$kw$db);
var map__27981__$1 = cljs.core.__destructure_map(map__27981);
var db = map__27981__$1;
var selected_item_refs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27981__$1,cljs.core.cst$kw$selected_DASH_item_DASH_refs);
var vec__27982 = p__27979;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27982,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27982,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$selected_DASH_item_DASH_refs], null),cljs.core.cst$kw$as,cljs.core.cst$sym$db], null),cljs.core.cst$kw$db], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$item_DASH_index], null)], null),cljs.core.list(cljs.core.cst$sym$handlers_SLASH_navigate_DASH_with_DASH_selected_DASH_item_DASH_refs,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.list(cljs.core.cst$sym$update,cljs.core.cst$sym$db,cljs.core.cst$kw$search_DASH_results,cljs.core.cst$sym$util_SLASH_vec_DASH_remove_DASH_nth,cljs.core.cst$sym$item_DASH_index)], null),cljs.core.list(cljs.core.cst$sym$util_SLASH_vec_DASH_remove_DASH_nth,cljs.core.cst$sym$selected_DASH_item_DASH_refs,cljs.core.cst$sym$item_DASH_index))));

var result__27621__auto__ = nw_calculator.event_handlers.navigate_with_selected_item_refs((function (){var result__27621__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,(function (){var result__27621__auto__ = cljs.core.update.cljs$core$IFn$_invoke$arity$4((function (){var result__27621__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(5),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27621__auto__;
})(),cljs.core.cst$kw$search_DASH_results,(function (){var result__27621__auto__ = nw_calculator.utilities.vec_remove_nth;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(7),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$util_SLASH_vec_DASH_remove_DASH_nth,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27621__auto__;
})(),(function (){var result__27621__auto__ = item_index;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(8),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27621__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(4),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$update,cljs.core.cst$sym$db,cljs.core.cst$kw$search_DASH_results,cljs.core.cst$sym$util_SLASH_vec_DASH_remove_DASH_nth,cljs.core.cst$sym$item_DASH_index),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27621__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(2),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.list(cljs.core.cst$sym$update,cljs.core.cst$sym$db,cljs.core.cst$kw$search_DASH_results,cljs.core.cst$sym$util_SLASH_vec_DASH_remove_DASH_nth,cljs.core.cst$sym$item_DASH_index)], null),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27621__auto__;
})(),(function (){var result__27621__auto__ = nw_calculator.utilities.vec_remove_nth((function (){var result__27621__auto__ = selected_item_refs;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(10),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$selected_DASH_item_DASH_refs,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27621__auto__;
})(),(function (){var result__27621__auto__ = item_index;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,3,cljs.core.cst$kw$syntax_DASH_order,(11),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27621__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(9),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$util_SLASH_vec_DASH_remove_DASH_nth,cljs.core.cst$sym$selected_DASH_item_DASH_refs,cljs.core.cst$sym$item_DASH_index),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27621__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_navigate_DASH_with_DASH_selected_DASH_item_DASH_refs,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.list(cljs.core.cst$sym$update,cljs.core.cst$sym$db,cljs.core.cst$kw$search_DASH_results,cljs.core.cst$sym$util_SLASH_vec_DASH_remove_DASH_nth,cljs.core.cst$sym$item_DASH_index)], null),cljs.core.list(cljs.core.cst$sym$util_SLASH_vec_DASH_remove_DASH_nth,cljs.core.cst$sym$selected_DASH_item_DASH_refs,cljs.core.cst$sym$item_DASH_index)),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__27621__auto__;
}catch (e27985){var e = e27985;
throw e;
}}):(function (p__27986,p__27987){
var map__27988 = p__27986;
var map__27988__$1 = cljs.core.__destructure_map(map__27988);
var map__27989 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27988__$1,cljs.core.cst$kw$db);
var map__27989__$1 = cljs.core.__destructure_map(map__27989);
var db = map__27989__$1;
var selected_item_refs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27989__$1,cljs.core.cst$kw$selected_DASH_item_DASH_refs);
var vec__27990 = p__27987;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27990,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27990,(1),null);
return nw_calculator.event_handlers.navigate_with_selected_item_refs(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,cljs.core.cst$kw$search_DASH_results,nw_calculator.utilities.vec_remove_nth,item_index)], null),nw_calculator.utilities.vec_remove_nth(selected_item_refs,item_index));
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_remove_DASH_all_DASH_items,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__27993,_){
var map__27994 = p__27993;
var map__27994__$1 = cljs.core.__destructure_map(map__27994);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27994__$1,cljs.core.cst$kw$db);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$db,cljs.core.cst$kw$db], null),cljs.core.cst$sym$_], null),cljs.core.list(cljs.core.cst$sym$handlers_SLASH_navigate_DASH_with_DASH_selected_DASH_item_DASH_refs,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_clear_DASH_search,cljs.core.cst$sym$db)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$df_SLASH_empty_DASH_selected_DASH_item_DASH_ref], null))));

var result__27621__auto__ = nw_calculator.event_handlers.navigate_with_selected_item_refs((function (){var result__27621__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,(function (){var result__27621__auto__ = nw_calculator.event_handlers.clear_search.cljs$core$IFn$_invoke$arity$1((function (){var result__27621__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(5),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27621__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(4),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_clear_DASH_search,cljs.core.cst$sym$db),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27621__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(2),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_clear_DASH_search,cljs.core.cst$sym$db)], null),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27621__auto__;
})(),(function (){var result__27621__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var result__27621__auto__ = nw_calculator.defaults.empty_selected_item_ref;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(7),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$df_SLASH_empty_DASH_selected_DASH_item_DASH_ref,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27621__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(6),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$df_SLASH_empty_DASH_selected_DASH_item_DASH_ref], null),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27621__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_navigate_DASH_with_DASH_selected_DASH_item_DASH_refs,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_clear_DASH_search,cljs.core.cst$sym$db)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$df_SLASH_empty_DASH_selected_DASH_item_DASH_ref], null)),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__27621__auto__;
}catch (e27995){var e = e27995;
throw e;
}}):(function (p__27996,_){
var map__27997 = p__27996;
var map__27997__$1 = cljs.core.__destructure_map(map__27997);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27997__$1,cljs.core.cst$kw$db);
return nw_calculator.event_handlers.navigate_with_selected_item_refs(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,nw_calculator.event_handlers.clear_search.cljs$core$IFn$_invoke$arity$1(db)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.defaults.empty_selected_item_ref], null));
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_set_DASH_trade_DASH_skill_DASH_bonus,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__27998,p__27999){
var map__28000 = p__27998;
var map__28000__$1 = cljs.core.__destructure_map(map__28000);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28000__$1,cljs.core.cst$kw$db);
var vec__28001 = p__27999;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28001,(0),null);
var skill = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28001,(1),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28001,(2),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$db,cljs.core.cst$kw$db], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$skill,cljs.core.cst$sym$value], null)], null),cljs.core.list(cljs.core.cst$sym$let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$updated_DASH_db,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$trade_DASH_skill_DASH_bonuses,cljs.core.cst$sym$skill], null),cljs.core.cst$sym$value)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.cst$sym$updated_DASH_db,cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_persist_BANG_,cljs.core.cst$sym$updated_DASH_db], null))));

var result__27621__auto__ = (function (){var updated_db = (function (){var result__27621__auto__ = cljs.core.assoc_in((function (){var result__27621__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(5),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27621__auto__;
})(),(function (){var result__27621__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$trade_DASH_skill_DASH_bonuses,(function (){var result__27621__auto__ = skill;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(8),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$skill,cljs.core.cst$kw$indent_DASH_level,(4)], null));

return result__27621__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(6),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$trade_DASH_skill_DASH_bonuses,cljs.core.cst$sym$skill], null),cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27621__auto__;
})(),(function (){var result__27621__auto__ = value;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(9),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$value,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27621__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(4),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$trade_DASH_skill_DASH_bonuses,cljs.core.cst$sym$skill], null),cljs.core.cst$sym$value),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27621__auto__;
})();
var result__27621__auto__ = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,(function (){var result__27621__auto__ = updated_db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(12),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$updated_DASH_db,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27621__auto__;
})(),cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_persist_BANG_,(function (){var result__27621__auto__ = updated_db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,3,cljs.core.cst$kw$syntax_DASH_order,(14),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$updated_DASH_db,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27621__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(10),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.cst$sym$updated_DASH_db,cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_persist_BANG_,cljs.core.cst$sym$updated_DASH_db], null),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27621__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$updated_DASH_db,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$trade_DASH_skill_DASH_bonuses,cljs.core.cst$sym$skill], null),cljs.core.cst$sym$value)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.cst$sym$updated_DASH_db,cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_persist_BANG_,cljs.core.cst$sym$updated_DASH_db], null)),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__27621__auto__;
}catch (e28004){var e = e28004;
throw e;
}}):(function (p__28005,p__28006){
var map__28007 = p__28005;
var map__28007__$1 = cljs.core.__destructure_map(map__28007);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28007__$1,cljs.core.cst$kw$db);
var vec__28008 = p__28006;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28008,(0),null);
var skill = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28008,(1),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28008,(2),null);
var updated_db = cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$trade_DASH_skill_DASH_bonuses,skill], null),value);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,updated_db,cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_persist_BANG_,updated_db], null);
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_toggle_DASH_additional_DASH_item_DASH_bonuses,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__28011,_){
var map__28012 = p__28011;
var map__28012__$1 = cljs.core.__destructure_map(map__28012);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28012__$1,cljs.core.cst$kw$db);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$db,cljs.core.cst$kw$db], null),cljs.core.cst$sym$_], null),cljs.core.list(cljs.core.cst$sym$let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$updated_DASH_db,cljs.core.list(cljs.core.cst$sym$update,cljs.core.cst$sym$db,cljs.core.cst$kw$additional_DASH_item_DASH_bonuses_QMARK_,cljs.core.cst$sym$not)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.cst$sym$updated_DASH_db,cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_persist_BANG_,cljs.core.cst$sym$updated_DASH_db], null))));

var result__27621__auto__ = (function (){var updated_db = (function (){var result__27621__auto__ = cljs.core.update.cljs$core$IFn$_invoke$arity$3((function (){var result__27621__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(5),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27621__auto__;
})(),cljs.core.cst$kw$additional_DASH_item_DASH_bonuses_QMARK_,(function (){var result__27621__auto__ = cljs.core.not;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(7),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$not,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__27621__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(4),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$update,cljs.core.cst$sym$db,cljs.core.cst$kw$additional_DASH_item_DASH_bonuses_QMARK_,cljs.core.cst$sym$not),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27621__auto__;
})();
var result__27621__auto__ = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,(function (){var result__27621__auto__ = updated_db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(10),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$updated_DASH_db,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27621__auto__;
})(),cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_persist_BANG_,(function (){var result__27621__auto__ = updated_db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,3,cljs.core.cst$kw$syntax_DASH_order,(12),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$updated_DASH_db,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__27621__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(8),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.cst$sym$updated_DASH_db,cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_persist_BANG_,cljs.core.cst$sym$updated_DASH_db], null),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__27621__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__27621__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$updated_DASH_db,cljs.core.list(cljs.core.cst$sym$update,cljs.core.cst$sym$db,cljs.core.cst$kw$additional_DASH_item_DASH_bonuses_QMARK_,cljs.core.cst$sym$not)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.cst$sym$updated_DASH_db,cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_persist_BANG_,cljs.core.cst$sym$updated_DASH_db], null)),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__27621__auto__;
}catch (e28013){var e = e28013;
throw e;
}}):(function (p__28014,_){
var map__28015 = p__28014;
var map__28015__$1 = cljs.core.__destructure_map(map__28015);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28015__$1,cljs.core.cst$kw$db);
var updated_db = cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$additional_DASH_item_DASH_bonuses_QMARK_,cljs.core.not);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,updated_db,cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_persist_BANG_,updated_db], null);
})));
