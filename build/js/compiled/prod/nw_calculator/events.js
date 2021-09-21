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
goog.require('nw_calculator.utilities');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_initialize_DASH_db,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_,p__26032){
var vec__26033 = p__26032;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26033,(0),null);
var default_overrides = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26033,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$default_DASH_overrides], null)], null),cljs.core.list(cljs.core.cst$sym$merge,cljs.core.cst$sym$df_SLASH_default_DASH_db,cljs.core.cst$sym$default_DASH_overrides)));

var result__25255__auto__ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var result__25255__auto__ = nw_calculator.defaults.default_db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(2),cljs.core.cst$kw$result,result__25255__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$df_SLASH_default_DASH_db,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__25255__auto__;
})(),(function (){var result__25255__auto__ = default_overrides;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(3),cljs.core.cst$kw$result,result__25255__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$default_DASH_overrides,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__25255__auto__;
})()], 0));
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__25255__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$merge,cljs.core.cst$sym$df_SLASH_default_DASH_db,cljs.core.cst$sym$default_DASH_overrides),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__25255__auto__;
}catch (e26036){var e = e26036;
throw e;
}}):(function (_,p__26037){
var vec__26038 = p__26037;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26038,(0),null);
var default_overrides = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26038,(1),null);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nw_calculator.defaults.default_db,default_overrides], 0));
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_set_DASH_state,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__26041){
var vec__26042 = p__26041;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26042,(0),null);
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26042,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$state], null)], null),cljs.core.list(cljs.core.cst$sym$assoc,cljs.core.cst$sym$db,cljs.core.cst$kw$state,cljs.core.cst$sym$state)));

var result__25255__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var result__25255__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(2),cljs.core.cst$kw$result,result__25255__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__25255__auto__;
})(),cljs.core.cst$kw$state,(function (){var result__25255__auto__ = state;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(4),cljs.core.cst$kw$result,result__25255__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$state,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__25255__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__25255__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$assoc,cljs.core.cst$sym$db,cljs.core.cst$kw$state,cljs.core.cst$sym$state),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__25255__auto__;
}catch (e26045){var e = e26045;
throw e;
}}):(function (db,p__26046){
var vec__26047 = p__26046;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26047,(0),null);
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26047,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$state,state);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_success,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__26050){
var vec__26051 = p__26050;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26051,(0),null);
var items_edn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26051,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$items_DASH_edn], null)], null),cljs.core.list(cljs.core.cst$sym$_DASH__GT_,cljs.core.cst$sym$db,cljs.core.list(cljs.core.cst$sym$update,cljs.core.cst$kw$items,cljs.core.cst$sym$c_SLASH_add_DASH_items,cljs.core.cst$sym$items_DASH_edn),cljs.core.list(cljs.core.cst$sym$handlers_SLASH_next_DASH_state,cljs.core.PersistentVector.EMPTY,cljs.core.cst$sym$fsm_SLASH_app_DASH_fsm,cljs.core.cst$kw$success))));

var result__25255__auto__ = (function (){var result__25262__auto__ = nw_calculator.event_handlers.next_state((function (){var result__25262__auto__ = cljs.core.update.cljs$core$IFn$_invoke$arity$4((function (){var result__25255__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(2),cljs.core.cst$kw$result,result__25255__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__25255__auto__;
})(),cljs.core.cst$kw$items,(function (){var result__25255__auto__ = compound2.core.add_items;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(6),cljs.core.cst$kw$result,result__25255__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$c_SLASH_add_DASH_items,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__25255__auto__;
})(),(function (){var result__25255__auto__ = items_edn;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(7),cljs.core.cst$kw$result,result__25255__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$items_DASH_edn,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__25255__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(3),cljs.core.cst$kw$result,result__25262__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$update,cljs.core.cst$kw$items,cljs.core.cst$sym$c_SLASH_add_DASH_items,cljs.core.cst$sym$items_DASH_edn),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__25262__auto__;
})(),(function (){var result__25255__auto__ = cljs.core.PersistentVector.EMPTY;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(10),cljs.core.cst$kw$result,result__25255__auto__,cljs.core.cst$kw$form,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__25255__auto__;
})(),(function (){var result__25255__auto__ = nw_calculator.fsm.app_fsm;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(12),cljs.core.cst$kw$result,result__25255__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$fsm_SLASH_app_DASH_fsm,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__25255__auto__;
})(),cljs.core.cst$kw$success);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(8),cljs.core.cst$kw$result,result__25262__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_next_DASH_state,cljs.core.PersistentVector.EMPTY,cljs.core.cst$sym$fsm_SLASH_app_DASH_fsm,cljs.core.cst$kw$success),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__25262__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__25255__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$_DASH__GT_,cljs.core.cst$sym$db,cljs.core.list(cljs.core.cst$sym$update,cljs.core.cst$kw$items,cljs.core.cst$sym$c_SLASH_add_DASH_items,cljs.core.cst$sym$items_DASH_edn),cljs.core.list(cljs.core.cst$sym$handlers_SLASH_next_DASH_state,cljs.core.PersistentVector.EMPTY,cljs.core.cst$sym$fsm_SLASH_app_DASH_fsm,cljs.core.cst$kw$success)),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__25255__auto__;
}catch (e26054){var e = e26054;
throw e;
}}):(function (db,p__26055){
var vec__26056 = p__26055;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26056,(0),null);
var items_edn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26056,(1),null);
return nw_calculator.event_handlers.next_state(cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,cljs.core.cst$kw$items,compound2.core.add_items,items_edn),cljs.core.PersistentVector.EMPTY,nw_calculator.fsm.app_fsm,cljs.core.cst$kw$success);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_failure,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__26059){
var vec__26060 = p__26059;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26060,(0),null);
var _resp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26060,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$_resp], null)], null),cljs.core.cst$sym$db));

var result__25255__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__25255__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db,cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__25255__auto__;
}catch (e26063){var e = e26063;
throw e;
}}):(function (db,p__26064){
var vec__26065 = p__26064;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26065,(0),null);
var _resp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26065,(1),null);
return db;
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__26068,_){
var map__26069 = p__26068;
var map__26069__$1 = cljs.core.__destructure_map(map__26069);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26069__$1,cljs.core.cst$kw$db);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$db,cljs.core.cst$kw$db], null),cljs.core.cst$sym$_], null),cljs.core.list(cljs.core.cst$sym$handlers_SLASH_next_DASH_state,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$db,cljs.core.cst$sym$db,cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_log_DASH_info,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u2B07\uFE0F Fetching item data!"], null),cljs.core.cst$kw$http_DASH_xhrio,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$method,cljs.core.cst$kw$get,cljs.core.cst$kw$response_DASH_format,cljs.core.list(cljs.core.cst$sym$ajax_SLASH_json_DASH_response_DASH_format,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywords_QMARK_,true], null)),cljs.core.cst$kw$uri,"/data/items.json",cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_success], null),cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_failure], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db], null),cljs.core.cst$sym$fsm_SLASH_app_DASH_fsm,cljs.core.cst$kw$fetch_DASH_item_DASH_data)));

var result__25255__auto__ = nw_calculator.event_handlers.next_state((function (){var result__25255__auto__ = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$db,(function (){var result__25255__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(4),cljs.core.cst$kw$result,result__25255__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__25255__auto__;
})(),cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_log_DASH_info,(function (){var result__25255__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u2B07\uFE0F Fetching item data!"], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(6),cljs.core.cst$kw$result,result__25255__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u2B07\uFE0F Fetching item data!"], null),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__25255__auto__;
})(),cljs.core.cst$kw$http_DASH_xhrio,(function (){var result__25255__auto__ = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$method,cljs.core.cst$kw$get,cljs.core.cst$kw$response_DASH_format,(function (){var result__25255__auto__ = (function (){var G__26071 = (function (){var result__25255__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywords_QMARK_,true], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(14),cljs.core.cst$kw$result,result__25255__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywords_QMARK_,true], null),cljs.core.cst$kw$indent_DASH_level,(4)], null));

return result__25255__auto__;
})();
return (ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1 ? ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(G__26071) : ajax.core.json_response_format.call(null,G__26071));
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(13),cljs.core.cst$kw$result,result__25255__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$ajax_SLASH_json_DASH_response_DASH_format,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywords_QMARK_,true], null)),cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__25255__auto__;
})(),cljs.core.cst$kw$uri,"/data/items.json",cljs.core.cst$kw$on_DASH_success,(function (){var result__25255__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_success], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(20),cljs.core.cst$kw$result,result__25255__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_success], null),cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__25255__auto__;
})(),cljs.core.cst$kw$on_DASH_failure,(function (){var result__25255__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_failure], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(23),cljs.core.cst$kw$result,result__25255__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_failure], null),cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__25255__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(9),cljs.core.cst$kw$result,result__25255__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$method,cljs.core.cst$kw$get,cljs.core.cst$kw$response_DASH_format,cljs.core.list(cljs.core.cst$sym$ajax_SLASH_json_DASH_response_DASH_format,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywords_QMARK_,true], null)),cljs.core.cst$kw$uri,"/data/items.json",cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_success], null),cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_failure], null)], null),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__25255__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(2),cljs.core.cst$kw$result,result__25255__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$db,cljs.core.cst$sym$db,cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_log_DASH_info,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u2B07\uFE0F Fetching item data!"], null),cljs.core.cst$kw$http_DASH_xhrio,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$method,cljs.core.cst$kw$get,cljs.core.cst$kw$response_DASH_format,cljs.core.list(cljs.core.cst$sym$ajax_SLASH_json_DASH_response_DASH_format,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywords_QMARK_,true], null)),cljs.core.cst$kw$uri,"/data/items.json",cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_success], null),cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_failure], null)], null)], null),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__25255__auto__;
})(),(function (){var result__25255__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(25),cljs.core.cst$kw$result,result__25255__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db], null),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__25255__auto__;
})(),(function (){var result__25255__auto__ = nw_calculator.fsm.app_fsm;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(27),cljs.core.cst$kw$result,result__25255__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$fsm_SLASH_app_DASH_fsm,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__25255__auto__;
})(),cljs.core.cst$kw$fetch_DASH_item_DASH_data);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__25255__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_next_DASH_state,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$db,cljs.core.cst$sym$db,cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_log_DASH_info,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u2B07\uFE0F Fetching item data!"], null),cljs.core.cst$kw$http_DASH_xhrio,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$method,cljs.core.cst$kw$get,cljs.core.cst$kw$response_DASH_format,cljs.core.list(cljs.core.cst$sym$ajax_SLASH_json_DASH_response_DASH_format,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywords_QMARK_,true], null)),cljs.core.cst$kw$uri,"/data/items.json",cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_success], null),cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_failure], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db], null),cljs.core.cst$sym$fsm_SLASH_app_DASH_fsm,cljs.core.cst$kw$fetch_DASH_item_DASH_data),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__25255__auto__;
}catch (e26070){var e = e26070;
throw e;
}}):(function (p__26072,_){
var map__26073 = p__26072;
var map__26073__$1 = cljs.core.__destructure_map(map__26073);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26073__$1,cljs.core.cst$kw$db);
return nw_calculator.event_handlers.next_state(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$db,db,cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_log_DASH_info,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u2B07\uFE0F Fetching item data!"], null),cljs.core.cst$kw$http_DASH_xhrio,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$method,cljs.core.cst$kw$get,cljs.core.cst$kw$response_DASH_format,(function (){var G__26074 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywords_QMARK_,true], null);
return (ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1 ? ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(G__26074) : ajax.core.json_response_format.call(null,G__26074));
})(),cljs.core.cst$kw$uri,"/data/items.json",cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_success], null),cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_failure], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db], null),nw_calculator.fsm.app_fsm,cljs.core.cst$kw$fetch_DASH_item_DASH_data);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_search_DASH_success,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__26075){
var vec__26076 = p__26075;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26076,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26076,(1),null);
var search_results = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26076,(2),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$sym$search_DASH_results], null)], null),cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search_DASH_results,cljs.core.cst$sym$item_DASH_index], null),cljs.core.cst$sym$search_DASH_results)));

var result__25255__auto__ = cljs.core.assoc_in((function (){var result__25255__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(2),cljs.core.cst$kw$result,result__25255__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__25255__auto__;
})(),(function (){var result__25255__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search_DASH_results,(function (){var result__25255__auto__ = item_index;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(5),cljs.core.cst$kw$result,result__25255__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__25255__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(3),cljs.core.cst$kw$result,result__25255__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search_DASH_results,cljs.core.cst$sym$item_DASH_index], null),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__25255__auto__;
})(),(function (){var result__25255__auto__ = search_results;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(6),cljs.core.cst$kw$result,result__25255__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$search_DASH_results,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__25255__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__25255__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search_DASH_results,cljs.core.cst$sym$item_DASH_index], null),cljs.core.cst$sym$search_DASH_results),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__25255__auto__;
}catch (e26079){var e = e26079;
throw e;
}}):(function (db,p__26080){
var vec__26081 = p__26080;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26081,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26081,(1),null);
var search_results = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26081,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search_DASH_results,item_index], null),search_results);
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_search,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__26084,p__26085){
var map__26086 = p__26084;
var map__26086__$1 = cljs.core.__destructure_map(map__26086);
var map__26087 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26086__$1,cljs.core.cst$kw$db);
var map__26087__$1 = cljs.core.__destructure_map(map__26087);
var db = map__26087__$1;
var map__26088 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26087__$1,cljs.core.cst$kw$items);
var map__26088__$1 = cljs.core.__destructure_map(map__26088);
var items_by_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26088__$1,cljs.core.cst$kw$by_DASH_id);
var vec__26089 = p__26085;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26089,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26089,(1),null);
var query = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26089,(2),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$items_DASH_by_DASH_id,cljs.core.cst$kw$by_DASH_id], null),cljs.core.cst$kw$items,cljs.core.cst$kw$as,cljs.core.cst$sym$db], null),cljs.core.cst$kw$db], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$sym$query], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.cst$sym$db,cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_search,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$query,cljs.core.cst$sym$query,cljs.core.cst$kw$items_DASH_by_DASH_id,cljs.core.cst$sym$items_DASH_by_DASH_id,cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_search_DASH_success,cljs.core.cst$sym$item_DASH_index], null)], null)], null)));

var result__25255__auto__ = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,(function (){var result__25255__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(3),cljs.core.cst$kw$result,result__25255__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__25255__auto__;
})(),cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_search,(function (){var result__25255__auto__ = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$query,(function (){var result__25255__auto__ = query;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(7),cljs.core.cst$kw$result,result__25255__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$query,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__25255__auto__;
})(),cljs.core.cst$kw$items_DASH_by_DASH_id,(function (){var result__25255__auto__ = items_by_id;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(9),cljs.core.cst$kw$result,result__25255__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$items_DASH_by_DASH_id,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__25255__auto__;
})(),cljs.core.cst$kw$on_DASH_success,(function (){var result__25255__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_search_DASH_success,(function (){var result__25255__auto__ = item_index;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(13),cljs.core.cst$kw$result,result__25255__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__25255__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(11),cljs.core.cst$kw$result,result__25255__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_search_DASH_success,cljs.core.cst$sym$item_DASH_index], null),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__25255__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(5),cljs.core.cst$kw$result,result__25255__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$query,cljs.core.cst$sym$query,cljs.core.cst$kw$items_DASH_by_DASH_id,cljs.core.cst$sym$items_DASH_by_DASH_id,cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_search_DASH_success,cljs.core.cst$sym$item_DASH_index], null)], null),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__25255__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__25255__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.cst$sym$db,cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_search,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$query,cljs.core.cst$sym$query,cljs.core.cst$kw$items_DASH_by_DASH_id,cljs.core.cst$sym$items_DASH_by_DASH_id,cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_search_DASH_success,cljs.core.cst$sym$item_DASH_index], null)], null)], null),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__25255__auto__;
}catch (e26092){var e = e26092;
throw e;
}}):(function (p__26093,p__26094){
var map__26095 = p__26093;
var map__26095__$1 = cljs.core.__destructure_map(map__26095);
var map__26096 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26095__$1,cljs.core.cst$kw$db);
var map__26096__$1 = cljs.core.__destructure_map(map__26096);
var db = map__26096__$1;
var map__26097 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26096__$1,cljs.core.cst$kw$items);
var map__26097__$1 = cljs.core.__destructure_map(map__26097);
var items_by_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26097__$1,cljs.core.cst$kw$by_DASH_id);
var vec__26098 = p__26094;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26098,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26098,(1),null);
var query = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26098,(2),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,db,cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_search,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$query,query,cljs.core.cst$kw$items_DASH_by_DASH_id,items_by_id,cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_search_DASH_success,item_index], null)], null)], null);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_clear_DASH_search,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__26101){
var vec__26102 = p__26101;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26102,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26102,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$item_DASH_index], null)], null),cljs.core.list(cljs.core.cst$sym$_DASH__GT_,cljs.core.cst$sym$db,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_items,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$item], null),cljs.core.PersistentArrayMap.EMPTY),cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search_DASH_results,cljs.core.cst$sym$item_DASH_index], null),cljs.core.PersistentVector.EMPTY))));

var result__25255__auto__ = (function (){var result__25262__auto__ = cljs.core.assoc_in((function (){var result__25262__auto__ = cljs.core.assoc_in((function (){var result__25255__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(2),cljs.core.cst$kw$result,result__25255__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__25255__auto__;
})(),(function (){var result__25255__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_items,(function (){var result__25255__auto__ = item_index;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(7),cljs.core.cst$kw$result,result__25255__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__25255__auto__;
})(),cljs.core.cst$kw$item], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(5),cljs.core.cst$kw$result,result__25255__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_items,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$item], null),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__25255__auto__;
})(),(function (){var result__25255__auto__ = cljs.core.PersistentArrayMap.EMPTY;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(9),cljs.core.cst$kw$result,result__25255__auto__,cljs.core.cst$kw$form,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__25255__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(3),cljs.core.cst$kw$result,result__25262__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_items,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$item], null),cljs.core.PersistentArrayMap.EMPTY),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__25262__auto__;
})(),(function (){var result__25255__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search_DASH_results,(function (){var result__25255__auto__ = item_index;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,3,cljs.core.cst$kw$syntax_DASH_order,(15),cljs.core.cst$kw$result,result__25255__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__25255__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(13),cljs.core.cst$kw$result,result__25255__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search_DASH_results,cljs.core.cst$sym$item_DASH_index], null),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__25255__auto__;
})(),(function (){var result__25255__auto__ = cljs.core.PersistentVector.EMPTY;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(16),cljs.core.cst$kw$result,result__25255__auto__,cljs.core.cst$kw$form,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__25255__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(11),cljs.core.cst$kw$result,result__25262__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search_DASH_results,cljs.core.cst$sym$item_DASH_index], null),cljs.core.PersistentVector.EMPTY),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__25262__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__25255__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$_DASH__GT_,cljs.core.cst$sym$db,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_items,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$item], null),cljs.core.PersistentArrayMap.EMPTY),cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search_DASH_results,cljs.core.cst$sym$item_DASH_index], null),cljs.core.PersistentVector.EMPTY)),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__25255__auto__;
}catch (e26105){var e = e26105;
throw e;
}}):(function (db,p__26106){
var vec__26107 = p__26106;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26107,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26107,(1),null);
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_items,item_index,cljs.core.cst$kw$item], null),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search_DASH_results,item_index], null),cljs.core.PersistentVector.EMPTY);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_select_DASH_item,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__26111){
var vec__26112 = p__26111;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26112,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26112,(1),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26112,(2),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$sym$item], null)], null),cljs.core.list(cljs.core.cst$sym$_DASH__GT_,cljs.core.cst$sym$db,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_items,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$item], null),cljs.core.cst$sym$item),cljs.core.list(cljs.core.cst$sym$update_DASH_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_items,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$quantity_DASH_multiplier], null),cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_1], null),cljs.core.list(cljs.core.cst$sym$or,cljs.core.cst$sym$_PERCENT_1,(1)))),cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search_DASH_results,cljs.core.cst$sym$item_DASH_index], null),cljs.core.PersistentVector.EMPTY))));

var result__25255__auto__ = (function (){var result__25262__auto__ = cljs.core.assoc_in((function (){var result__25262__auto__ = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3((function (){var result__25262__auto__ = cljs.core.assoc_in((function (){var result__25255__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(2),cljs.core.cst$kw$result,result__25255__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__25255__auto__;
})(),(function (){var result__25255__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_items,(function (){var result__25255__auto__ = item_index;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(7),cljs.core.cst$kw$result,result__25255__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__25255__auto__;
})(),cljs.core.cst$kw$item], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(5),cljs.core.cst$kw$result,result__25255__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_items,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$item], null),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__25255__auto__;
})(),(function (){var result__25255__auto__ = item;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(9),cljs.core.cst$kw$result,result__25255__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$item,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__25255__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(3),cljs.core.cst$kw$result,result__25262__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_items,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$item], null),cljs.core.cst$sym$item),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__25262__auto__;
})(),(function (){var result__25255__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_items,(function (){var result__25255__auto__ = item_index;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,3,cljs.core.cst$kw$syntax_DASH_order,(14),cljs.core.cst$kw$result,result__25255__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__25255__auto__;
})(),cljs.core.cst$kw$quantity_DASH_multiplier], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(12),cljs.core.cst$kw$result,result__25255__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_items,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$quantity_DASH_multiplier], null),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__25255__auto__;
})(),(function (){var result__25255__auto__ = (function (p1__26110_SHARP_){
var result__25255__auto__ = (function (){var or__4212__auto__ = (function (){var result__25255__auto__ = p1__26110_SHARP_;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(19),cljs.core.cst$kw$result,result__25255__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$p1__26110_SHARP_,cljs.core.cst$kw$indent_DASH_level,(4)], null));

return result__25255__auto__;
})();
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (1);
}
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(18),cljs.core.cst$kw$result,result__25255__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$or,cljs.core.cst$sym$p1__26110_SHARP_,(1)),cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__25255__auto__;
});
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(16),cljs.core.cst$kw$result,result__25255__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__26110_SHARP_], null),cljs.core.list(cljs.core.cst$sym$or,cljs.core.cst$sym$p1__26110_SHARP_,(1))),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__25255__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(10),cljs.core.cst$kw$result,result__25262__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$update_DASH_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_items,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$quantity_DASH_multiplier], null),cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__26110_SHARP_], null),cljs.core.list(cljs.core.cst$sym$or,cljs.core.cst$sym$p1__26110_SHARP_,(1)))),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__25262__auto__;
})(),(function (){var result__25255__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search_DASH_results,(function (){var result__25255__auto__ = item_index;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,4,cljs.core.cst$kw$syntax_DASH_order,(25),cljs.core.cst$kw$result,result__25255__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__25255__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(23),cljs.core.cst$kw$result,result__25255__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search_DASH_results,cljs.core.cst$sym$item_DASH_index], null),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__25255__auto__;
})(),(function (){var result__25255__auto__ = cljs.core.PersistentVector.EMPTY;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(26),cljs.core.cst$kw$result,result__25255__auto__,cljs.core.cst$kw$form,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__25255__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(21),cljs.core.cst$kw$result,result__25262__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search_DASH_results,cljs.core.cst$sym$item_DASH_index], null),cljs.core.PersistentVector.EMPTY),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__25262__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__25255__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$_DASH__GT_,cljs.core.cst$sym$db,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_items,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$item], null),cljs.core.cst$sym$item),cljs.core.list(cljs.core.cst$sym$update_DASH_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_items,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$quantity_DASH_multiplier], null),cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__26110_SHARP_], null),cljs.core.list(cljs.core.cst$sym$or,cljs.core.cst$sym$p1__26110_SHARP_,(1)))),cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search_DASH_results,cljs.core.cst$sym$item_DASH_index], null),cljs.core.PersistentVector.EMPTY)),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__25255__auto__;
}catch (e26115){var e = e26115;
throw e;
}}):(function (db,p__26116){
var vec__26117 = p__26116;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26117,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26117,(1),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26117,(2),null);
return cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_items,item_index,cljs.core.cst$kw$item], null),item),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_items,item_index,cljs.core.cst$kw$quantity_DASH_multiplier], null),(function (p1__26110_SHARP_){
var or__4212__auto__ = p1__26110_SHARP_;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (1);
}
})),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search_DASH_results,item_index], null),cljs.core.PersistentVector.EMPTY);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_select_DASH_option,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__26120){
var vec__26121 = p__26120;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26121,(0),null);
var vec__26124 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26121,(1),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26124,(0),null);
var category_path = vec__26124;
var option = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26121,(2),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$as,cljs.core.cst$sym$category_DASH_path], null),cljs.core.cst$sym$option], null)], null),cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_items,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$selected_DASH_options,cljs.core.cst$sym$category_DASH_path], null),cljs.core.cst$sym$option)));

var result__25255__auto__ = cljs.core.assoc_in((function (){var result__25255__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(2),cljs.core.cst$kw$result,result__25255__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__25255__auto__;
})(),(function (){var result__25255__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_items,(function (){var result__25255__auto__ = item_index;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(5),cljs.core.cst$kw$result,result__25255__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__25255__auto__;
})(),cljs.core.cst$kw$selected_DASH_options,(function (){var result__25255__auto__ = category_path;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(7),cljs.core.cst$kw$result,result__25255__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$category_DASH_path,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__25255__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(3),cljs.core.cst$kw$result,result__25255__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_items,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$selected_DASH_options,cljs.core.cst$sym$category_DASH_path], null),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__25255__auto__;
})(),(function (){var result__25255__auto__ = option;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(8),cljs.core.cst$kw$result,result__25255__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$option,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__25255__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__25255__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_items,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$selected_DASH_options,cljs.core.cst$sym$category_DASH_path], null),cljs.core.cst$sym$option),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__25255__auto__;
}catch (e26127){var e = e26127;
throw e;
}}):(function (db,p__26128){
var vec__26129 = p__26128;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26129,(0),null);
var vec__26132 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26129,(1),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26132,(0),null);
var category_path = vec__26132;
var option = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26129,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_items,item_index,cljs.core.cst$kw$selected_DASH_options,category_path], null),option);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_set_DASH_quantity_DASH_multiplier,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__26135){
var vec__26136 = p__26135;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26136,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26136,(1),null);
var multiplier = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26136,(2),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$sym$multiplier], null)], null),cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_items,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$quantity_DASH_multiplier], null),cljs.core.cst$sym$multiplier)));

var result__25255__auto__ = cljs.core.assoc_in((function (){var result__25255__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(2),cljs.core.cst$kw$result,result__25255__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__25255__auto__;
})(),(function (){var result__25255__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_items,(function (){var result__25255__auto__ = item_index;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(5),cljs.core.cst$kw$result,result__25255__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__25255__auto__;
})(),cljs.core.cst$kw$quantity_DASH_multiplier], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(3),cljs.core.cst$kw$result,result__25255__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_items,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$quantity_DASH_multiplier], null),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__25255__auto__;
})(),(function (){var result__25255__auto__ = multiplier;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(7),cljs.core.cst$kw$result,result__25255__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$multiplier,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__25255__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__25255__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_items,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$quantity_DASH_multiplier], null),cljs.core.cst$sym$multiplier),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__25255__auto__;
}catch (e26139){var e = e26139;
throw e;
}}):(function (db,p__26140){
var vec__26141 = p__26140;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26141,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26141,(1),null);
var multiplier = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26141,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_items,item_index,cljs.core.cst$kw$quantity_DASH_multiplier], null),multiplier);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_add_DASH_empty_DASH_item,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,_){
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$db,cljs.core.cst$sym$_], null),cljs.core.list(cljs.core.cst$sym$update,cljs.core.cst$sym$db,cljs.core.cst$kw$selected_DASH_items,cljs.core.cst$sym$conj,cljs.core.cst$sym$df_SLASH_empty_DASH_selected_DASH_item)));

var result__25255__auto__ = cljs.core.update.cljs$core$IFn$_invoke$arity$4((function (){var result__25255__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(2),cljs.core.cst$kw$result,result__25255__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__25255__auto__;
})(),cljs.core.cst$kw$selected_DASH_items,(function (){var result__25255__auto__ = cljs.core.conj;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(4),cljs.core.cst$kw$result,result__25255__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$conj,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__25255__auto__;
})(),(function (){var result__25255__auto__ = nw_calculator.defaults.empty_selected_item;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(5),cljs.core.cst$kw$result,result__25255__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$df_SLASH_empty_DASH_selected_DASH_item,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__25255__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__25255__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$update,cljs.core.cst$sym$db,cljs.core.cst$kw$selected_DASH_items,cljs.core.cst$sym$conj,cljs.core.cst$sym$df_SLASH_empty_DASH_selected_DASH_item),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__25255__auto__;
}catch (e26144){var e = e26144;
throw e;
}}):(function (db,_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,cljs.core.cst$kw$selected_DASH_items,cljs.core.conj,nw_calculator.defaults.empty_selected_item);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_delete_DASH_item,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__26145){
var vec__26146 = p__26145;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26146,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26146,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$item_DASH_index], null)], null),cljs.core.list(cljs.core.cst$sym$update,cljs.core.cst$sym$db,cljs.core.cst$kw$selected_DASH_items,cljs.core.cst$sym$util_SLASH_vec_DASH_remove_DASH_nth,cljs.core.cst$sym$item_DASH_index)));

var result__25255__auto__ = cljs.core.update.cljs$core$IFn$_invoke$arity$4((function (){var result__25255__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(2),cljs.core.cst$kw$result,result__25255__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__25255__auto__;
})(),cljs.core.cst$kw$selected_DASH_items,(function (){var result__25255__auto__ = nw_calculator.utilities.vec_remove_nth;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(4),cljs.core.cst$kw$result,result__25255__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$util_SLASH_vec_DASH_remove_DASH_nth,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__25255__auto__;
})(),(function (){var result__25255__auto__ = item_index;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(5),cljs.core.cst$kw$result,result__25255__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__25255__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__25255__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$update,cljs.core.cst$sym$db,cljs.core.cst$kw$selected_DASH_items,cljs.core.cst$sym$util_SLASH_vec_DASH_remove_DASH_nth,cljs.core.cst$sym$item_DASH_index),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__25255__auto__;
}catch (e26149){var e = e26149;
throw e;
}}):(function (db,p__26150){
var vec__26151 = p__26150;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26151,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26151,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,cljs.core.cst$kw$selected_DASH_items,nw_calculator.utilities.vec_remove_nth,item_index);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_remove_DASH_all_DASH_items,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,_){
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$db,cljs.core.cst$sym$_], null),cljs.core.list(cljs.core.cst$sym$assoc,cljs.core.cst$sym$db,cljs.core.cst$kw$selected_DASH_items,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$df_SLASH_empty_DASH_selected_DASH_item], null))));

var result__25255__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var result__25255__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(2),cljs.core.cst$kw$result,result__25255__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__25255__auto__;
})(),cljs.core.cst$kw$selected_DASH_items,(function (){var result__25255__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var result__25255__auto__ = nw_calculator.defaults.empty_selected_item;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(5),cljs.core.cst$kw$result,result__25255__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$df_SLASH_empty_DASH_selected_DASH_item,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__25255__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(4),cljs.core.cst$kw$result,result__25255__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$df_SLASH_empty_DASH_selected_DASH_item], null),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__25255__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__25255__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$assoc,cljs.core.cst$sym$db,cljs.core.cst$kw$selected_DASH_items,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$df_SLASH_empty_DASH_selected_DASH_item], null)),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__25255__auto__;
}catch (e26154){var e = e26154;
throw e;
}}):(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$selected_DASH_items,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.defaults.empty_selected_item], null));
})));
