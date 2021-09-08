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
goog.require('cljs.reader');
goog.require('compound2.core');
goog.require('nw_calculator.utilities');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_set_DASH_dark_DASH_theme,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__25318,p__25319){
var map__25320 = p__25318;
var map__25320__$1 = cljs.core.__destructure_map(map__25320);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25320__$1,cljs.core.cst$kw$db);
var vec__25321 = p__25319;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25321,(0),null);
var dark_theme_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25321,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$db,cljs.core.cst$kw$db], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$dark_DASH_theme_QMARK_], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.list(cljs.core.cst$sym$assoc,cljs.core.cst$sym$db,cljs.core.cst$kw$dark_DASH_theme_QMARK_,cljs.core.cst$sym$dark_DASH_theme_QMARK_),cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_set_DASH_local_DASH_storage,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_dark_DASH_theme_QMARK_,cljs.core.cst$sym$dark_DASH_theme_QMARK_], null)], null)));

var result__24541__auto__ = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,(function (){var result__24541__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var result__24541__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(4),cljs.core.cst$kw$result,result__24541__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__24541__auto__;
})(),cljs.core.cst$kw$dark_DASH_theme_QMARK_,(function (){var result__24541__auto__ = dark_theme_QMARK_;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(6),cljs.core.cst$kw$result,result__24541__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$dark_DASH_theme_QMARK_,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__24541__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(3),cljs.core.cst$kw$result,result__24541__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$assoc,cljs.core.cst$sym$db,cljs.core.cst$kw$dark_DASH_theme_QMARK_,cljs.core.cst$sym$dark_DASH_theme_QMARK_),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__24541__auto__;
})(),cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_set_DASH_local_DASH_storage,(function (){var result__24541__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_dark_DASH_theme_QMARK_,(function (){var result__24541__auto__ = dark_theme_QMARK_;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,3,cljs.core.cst$kw$syntax_DASH_order,(10),cljs.core.cst$kw$result,result__24541__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$dark_DASH_theme_QMARK_,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__24541__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(8),cljs.core.cst$kw$result,result__24541__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_dark_DASH_theme_QMARK_,cljs.core.cst$sym$dark_DASH_theme_QMARK_], null),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__24541__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__24541__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.list(cljs.core.cst$sym$assoc,cljs.core.cst$sym$db,cljs.core.cst$kw$dark_DASH_theme_QMARK_,cljs.core.cst$sym$dark_DASH_theme_QMARK_),cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_set_DASH_local_DASH_storage,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_dark_DASH_theme_QMARK_,cljs.core.cst$sym$dark_DASH_theme_QMARK_], null)], null),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__24541__auto__;
}catch (e25324){var e = e25324;
throw e;
}}):(function (p__25325,p__25326){
var map__25327 = p__25325;
var map__25327__$1 = cljs.core.__destructure_map(map__25327);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25327__$1,cljs.core.cst$kw$db);
var vec__25328 = p__25326;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25328,(0),null);
var dark_theme_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25328,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$dark_DASH_theme_QMARK_,dark_theme_QMARK_),cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_set_DASH_local_DASH_storage,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_dark_DASH_theme_QMARK_,dark_theme_QMARK_], null)], null);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_initialize_DASH_db,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_,p__25331){
var vec__25332 = p__25331;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25332,(0),null);
var default_overrides = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25332,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$default_DASH_overrides], null)], null),cljs.core.list(cljs.core.cst$sym$merge,cljs.core.cst$sym$df_SLASH_default_DASH_db,cljs.core.cst$sym$default_DASH_overrides)));

var result__24541__auto__ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var result__24541__auto__ = nw_calculator.defaults.default_db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(2),cljs.core.cst$kw$result,result__24541__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$df_SLASH_default_DASH_db,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__24541__auto__;
})(),(function (){var result__24541__auto__ = default_overrides;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(3),cljs.core.cst$kw$result,result__24541__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$default_DASH_overrides,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__24541__auto__;
})()], 0));
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__24541__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$merge,cljs.core.cst$sym$df_SLASH_default_DASH_db,cljs.core.cst$sym$default_DASH_overrides),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__24541__auto__;
}catch (e25335){var e = e25335;
throw e;
}}):(function (_,p__25336){
var vec__25337 = p__25336;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25337,(0),null);
var default_overrides = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25337,(1),null);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nw_calculator.defaults.default_db,default_overrides], 0));
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_set_DASH_state,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__25340){
var vec__25341 = p__25340;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25341,(0),null);
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25341,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$state], null)], null),cljs.core.list(cljs.core.cst$sym$assoc,cljs.core.cst$sym$db,cljs.core.cst$kw$state,cljs.core.cst$sym$state)));

var result__24541__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var result__24541__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(2),cljs.core.cst$kw$result,result__24541__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__24541__auto__;
})(),cljs.core.cst$kw$state,(function (){var result__24541__auto__ = state;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(4),cljs.core.cst$kw$result,result__24541__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$state,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__24541__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__24541__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$assoc,cljs.core.cst$sym$db,cljs.core.cst$kw$state,cljs.core.cst$sym$state),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__24541__auto__;
}catch (e25344){var e = e25344;
throw e;
}}):(function (db,p__25345){
var vec__25346 = p__25345;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25346,(0),null);
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25346,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$state,state);
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_success,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__25349,p__25350){
var map__25351 = p__25349;
var map__25351__$1 = cljs.core.__destructure_map(map__25351);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25351__$1,cljs.core.cst$kw$db);
var vec__25352 = p__25350;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25352,(0),null);
var items_edn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25352,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$db,cljs.core.cst$kw$db], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$items_DASH_edn], null)], null),cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$string_QMARK_,cljs.core.cst$sym$items_DASH_edn),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_read_DASH_string,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$items_DASH_edn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_success], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.list(cljs.core.cst$sym$_DASH__GT_,cljs.core.cst$sym$db,cljs.core.list(cljs.core.cst$sym$update,cljs.core.cst$kw$items,cljs.core.cst$sym$c_SLASH_add_DASH_items,cljs.core.cst$sym$items_DASH_edn),cljs.core.list(cljs.core.cst$sym$handlers_SLASH_next_DASH_state,cljs.core.PersistentVector.EMPTY,cljs.core.cst$sym$fsm_SLASH_fsm,cljs.core.cst$kw$success))], null))));

var result__24541__auto__ = (((function (){var result__24541__auto__ = typeof (function (){var result__24541__auto__ = items_edn;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(3),cljs.core.cst$kw$result,result__24541__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$items_DASH_edn,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__24541__auto__;
})() === 'string';
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(2),cljs.core.cst$kw$result,result__24541__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$string_QMARK_,cljs.core.cst$sym$items_DASH_edn),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__24541__auto__;
})())?(function (){var result__24541__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_read_DASH_string,(function (){var result__24541__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var result__24541__auto__ = items_edn;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,3,cljs.core.cst$kw$syntax_DASH_order,(7),cljs.core.cst$kw$result,result__24541__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$items_DASH_edn,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__24541__auto__;
})(),(function (){var result__24541__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_success], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(8),cljs.core.cst$kw$result,result__24541__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_success], null),cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__24541__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(6),cljs.core.cst$kw$result,result__24541__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$items_DASH_edn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_success], null)], null),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__24541__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(4),cljs.core.cst$kw$result,result__24541__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_read_DASH_string,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$items_DASH_edn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_success], null)], null)], null),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__24541__auto__;
})():(function (){var result__24541__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,(function (){var result__24541__auto__ = (function (){var result__24548__auto__ = nw_calculator.event_handlers.next_state((function (){var result__24548__auto__ = cljs.core.update.cljs$core$IFn$_invoke$arity$4((function (){var result__24541__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(13),cljs.core.cst$kw$result,result__24541__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__24541__auto__;
})(),cljs.core.cst$kw$items,(function (){var result__24541__auto__ = compound2.core.add_items;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(17),cljs.core.cst$kw$result,result__24541__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$c_SLASH_add_DASH_items,cljs.core.cst$kw$indent_DASH_level,(4)], null));

return result__24541__auto__;
})(),(function (){var result__24541__auto__ = items_edn;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,4,cljs.core.cst$kw$syntax_DASH_order,(18),cljs.core.cst$kw$result,result__24541__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$items_DASH_edn,cljs.core.cst$kw$indent_DASH_level,(4)], null));

return result__24541__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(14),cljs.core.cst$kw$result,result__24548__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$update,cljs.core.cst$kw$items,cljs.core.cst$sym$c_SLASH_add_DASH_items,cljs.core.cst$sym$items_DASH_edn),cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__24548__auto__;
})(),(function (){var result__24541__auto__ = cljs.core.PersistentVector.EMPTY;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(21),cljs.core.cst$kw$result,result__24541__auto__,cljs.core.cst$kw$form,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$indent_DASH_level,(4)], null));

return result__24541__auto__;
})(),(function (){var result__24541__auto__ = nw_calculator.fsm.fsm;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(23),cljs.core.cst$kw$result,result__24541__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$fsm_SLASH_fsm,cljs.core.cst$kw$indent_DASH_level,(4)], null));

return result__24541__auto__;
})(),cljs.core.cst$kw$success);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(19),cljs.core.cst$kw$result,result__24548__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_next_DASH_state,cljs.core.PersistentVector.EMPTY,cljs.core.cst$sym$fsm_SLASH_fsm,cljs.core.cst$kw$success),cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__24548__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(12),cljs.core.cst$kw$result,result__24541__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$_DASH__GT_,cljs.core.cst$sym$db,cljs.core.list(cljs.core.cst$sym$update,cljs.core.cst$kw$items,cljs.core.cst$sym$c_SLASH_add_DASH_items,cljs.core.cst$sym$items_DASH_edn),cljs.core.list(cljs.core.cst$sym$handlers_SLASH_next_DASH_state,cljs.core.PersistentVector.EMPTY,cljs.core.cst$sym$fsm_SLASH_fsm,cljs.core.cst$kw$success)),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__24541__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(10),cljs.core.cst$kw$result,result__24541__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.list(cljs.core.cst$sym$_DASH__GT_,cljs.core.cst$sym$db,cljs.core.list(cljs.core.cst$sym$update,cljs.core.cst$kw$items,cljs.core.cst$sym$c_SLASH_add_DASH_items,cljs.core.cst$sym$items_DASH_edn),cljs.core.list(cljs.core.cst$sym$handlers_SLASH_next_DASH_state,cljs.core.PersistentVector.EMPTY,cljs.core.cst$sym$fsm_SLASH_fsm,cljs.core.cst$kw$success))], null),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__24541__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__24541__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$string_QMARK_,cljs.core.cst$sym$items_DASH_edn),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_read_DASH_string,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$items_DASH_edn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_success], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.list(cljs.core.cst$sym$_DASH__GT_,cljs.core.cst$sym$db,cljs.core.list(cljs.core.cst$sym$update,cljs.core.cst$kw$items,cljs.core.cst$sym$c_SLASH_add_DASH_items,cljs.core.cst$sym$items_DASH_edn),cljs.core.list(cljs.core.cst$sym$handlers_SLASH_next_DASH_state,cljs.core.PersistentVector.EMPTY,cljs.core.cst$sym$fsm_SLASH_fsm,cljs.core.cst$kw$success))], null)),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__24541__auto__;
}catch (e25355){var e = e25355;
throw e;
}}):(function (p__25356,p__25357){
var map__25358 = p__25356;
var map__25358__$1 = cljs.core.__destructure_map(map__25358);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25358__$1,cljs.core.cst$kw$db);
var vec__25359 = p__25357;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25359,(0),null);
var items_edn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25359,(1),null);
if(typeof items_edn === 'string'){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_read_DASH_string,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [items_edn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_success], null)], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,nw_calculator.event_handlers.next_state(cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,cljs.core.cst$kw$items,compound2.core.add_items,items_edn),cljs.core.PersistentVector.EMPTY,nw_calculator.fsm.fsm,cljs.core.cst$kw$success)], null);
}
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_failure,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__25362){
var vec__25363 = p__25362;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25363,(0),null);
var _resp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25363,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$_resp], null)], null),cljs.core.cst$sym$db));

var result__24541__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__24541__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db,cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__24541__auto__;
}catch (e25366){var e = e25366;
throw e;
}}):(function (db,p__25367){
var vec__25368 = p__25367;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25368,(0),null);
var _resp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25368,(1),null);
return db;
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__25371,_){
var map__25372 = p__25371;
var map__25372__$1 = cljs.core.__destructure_map(map__25372);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25372__$1,cljs.core.cst$kw$db);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$db,cljs.core.cst$kw$db], null),cljs.core.cst$sym$_], null),cljs.core.list(cljs.core.cst$sym$handlers_SLASH_next_DASH_state,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$db,cljs.core.cst$sym$db,cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_log_DASH_info,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u2B07\uFE0F Fetching item data!"], null),cljs.core.cst$kw$http_DASH_xhrio,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$method,cljs.core.cst$kw$get,cljs.core.cst$kw$response_DASH_format,cljs.core.list(cljs.core.cst$sym$ajax_SLASH_raw_DASH_response_DASH_format),cljs.core.cst$kw$uri,"/data/items.edn",cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_success], null),cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_failure], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db], null),cljs.core.cst$sym$fsm_SLASH_fsm,cljs.core.cst$kw$fetch_DASH_item_DASH_data)));

var result__24541__auto__ = nw_calculator.event_handlers.next_state((function (){var result__24541__auto__ = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$db,(function (){var result__24541__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(4),cljs.core.cst$kw$result,result__24541__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__24541__auto__;
})(),cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_log_DASH_info,(function (){var result__24541__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u2B07\uFE0F Fetching item data!"], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(6),cljs.core.cst$kw$result,result__24541__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u2B07\uFE0F Fetching item data!"], null),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__24541__auto__;
})(),cljs.core.cst$kw$http_DASH_xhrio,(function (){var result__24541__auto__ = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$method,cljs.core.cst$kw$get,cljs.core.cst$kw$response_DASH_format,(function (){var result__24541__auto__ = (ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0 ? ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0() : ajax.core.raw_response_format.call(null));
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(13),cljs.core.cst$kw$result,result__24541__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$ajax_SLASH_raw_DASH_response_DASH_format),cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__24541__auto__;
})(),cljs.core.cst$kw$uri,"/data/items.edn",cljs.core.cst$kw$on_DASH_success,(function (){var result__24541__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_success], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(17),cljs.core.cst$kw$result,result__24541__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_success], null),cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__24541__auto__;
})(),cljs.core.cst$kw$on_DASH_failure,(function (){var result__24541__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_failure], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(20),cljs.core.cst$kw$result,result__24541__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_failure], null),cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__24541__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(9),cljs.core.cst$kw$result,result__24541__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$method,cljs.core.cst$kw$get,cljs.core.cst$kw$response_DASH_format,cljs.core.list(cljs.core.cst$sym$ajax_SLASH_raw_DASH_response_DASH_format),cljs.core.cst$kw$uri,"/data/items.edn",cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_success], null),cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_failure], null)], null),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__24541__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(2),cljs.core.cst$kw$result,result__24541__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$db,cljs.core.cst$sym$db,cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_log_DASH_info,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u2B07\uFE0F Fetching item data!"], null),cljs.core.cst$kw$http_DASH_xhrio,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$method,cljs.core.cst$kw$get,cljs.core.cst$kw$response_DASH_format,cljs.core.list(cljs.core.cst$sym$ajax_SLASH_raw_DASH_response_DASH_format),cljs.core.cst$kw$uri,"/data/items.edn",cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_success], null),cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_failure], null)], null)], null),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__24541__auto__;
})(),(function (){var result__24541__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(22),cljs.core.cst$kw$result,result__24541__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db], null),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__24541__auto__;
})(),(function (){var result__24541__auto__ = nw_calculator.fsm.fsm;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(24),cljs.core.cst$kw$result,result__24541__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$fsm_SLASH_fsm,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__24541__auto__;
})(),cljs.core.cst$kw$fetch_DASH_item_DASH_data);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__24541__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_next_DASH_state,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$db,cljs.core.cst$sym$db,cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_log_DASH_info,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u2B07\uFE0F Fetching item data!"], null),cljs.core.cst$kw$http_DASH_xhrio,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$method,cljs.core.cst$kw$get,cljs.core.cst$kw$response_DASH_format,cljs.core.list(cljs.core.cst$sym$ajax_SLASH_raw_DASH_response_DASH_format),cljs.core.cst$kw$uri,"/data/items.edn",cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_success], null),cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_failure], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db], null),cljs.core.cst$sym$fsm_SLASH_fsm,cljs.core.cst$kw$fetch_DASH_item_DASH_data),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__24541__auto__;
}catch (e25373){var e = e25373;
throw e;
}}):(function (p__25374,_){
var map__25375 = p__25374;
var map__25375__$1 = cljs.core.__destructure_map(map__25375);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25375__$1,cljs.core.cst$kw$db);
return nw_calculator.event_handlers.next_state(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$db,db,cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_log_DASH_info,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u2B07\uFE0F Fetching item data!"], null),cljs.core.cst$kw$http_DASH_xhrio,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$method,cljs.core.cst$kw$get,cljs.core.cst$kw$response_DASH_format,(ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0 ? ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0() : ajax.core.raw_response_format.call(null)),cljs.core.cst$kw$uri,"/data/items.edn",cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_success], null),cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_failure], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db], null),nw_calculator.fsm.fsm,cljs.core.cst$kw$fetch_DASH_item_DASH_data);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_search_DASH_success,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__25376){
var vec__25377 = p__25376;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25377,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25377,(1),null);
var search_results = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25377,(2),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$sym$search_DASH_results], null)], null),cljs.core.list(cljs.core.cst$sym$_DASH__GT_,cljs.core.cst$sym$db,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search_DASH_results,cljs.core.cst$sym$item_DASH_index], null),cljs.core.cst$sym$search_DASH_results),cljs.core.list(cljs.core.cst$sym$handlers_SLASH_next_DASH_state,cljs.core.PersistentVector.EMPTY,cljs.core.cst$sym$fsm_SLASH_fsm,cljs.core.cst$kw$success))));

var result__24541__auto__ = (function (){var result__24548__auto__ = nw_calculator.event_handlers.next_state((function (){var result__24548__auto__ = cljs.core.assoc_in((function (){var result__24541__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(2),cljs.core.cst$kw$result,result__24541__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__24541__auto__;
})(),(function (){var result__24541__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search_DASH_results,(function (){var result__24541__auto__ = item_index;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(7),cljs.core.cst$kw$result,result__24541__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__24541__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(5),cljs.core.cst$kw$result,result__24541__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search_DASH_results,cljs.core.cst$sym$item_DASH_index], null),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__24541__auto__;
})(),(function (){var result__24541__auto__ = search_results;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(8),cljs.core.cst$kw$result,result__24541__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$search_DASH_results,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__24541__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(3),cljs.core.cst$kw$result,result__24548__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search_DASH_results,cljs.core.cst$sym$item_DASH_index], null),cljs.core.cst$sym$search_DASH_results),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__24548__auto__;
})(),(function (){var result__24541__auto__ = cljs.core.PersistentVector.EMPTY;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(11),cljs.core.cst$kw$result,result__24541__auto__,cljs.core.cst$kw$form,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__24541__auto__;
})(),(function (){var result__24541__auto__ = nw_calculator.fsm.fsm;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(13),cljs.core.cst$kw$result,result__24541__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$fsm_SLASH_fsm,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__24541__auto__;
})(),cljs.core.cst$kw$success);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(9),cljs.core.cst$kw$result,result__24548__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_next_DASH_state,cljs.core.PersistentVector.EMPTY,cljs.core.cst$sym$fsm_SLASH_fsm,cljs.core.cst$kw$success),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__24548__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__24541__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$_DASH__GT_,cljs.core.cst$sym$db,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search_DASH_results,cljs.core.cst$sym$item_DASH_index], null),cljs.core.cst$sym$search_DASH_results),cljs.core.list(cljs.core.cst$sym$handlers_SLASH_next_DASH_state,cljs.core.PersistentVector.EMPTY,cljs.core.cst$sym$fsm_SLASH_fsm,cljs.core.cst$kw$success)),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__24541__auto__;
}catch (e25380){var e = e25380;
throw e;
}}):(function (db,p__25381){
var vec__25382 = p__25381;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25382,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25382,(1),null);
var search_results = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25382,(2),null);
return nw_calculator.event_handlers.next_state(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search_DASH_results,item_index], null),search_results),cljs.core.PersistentVector.EMPTY,nw_calculator.fsm.fsm,cljs.core.cst$kw$success);
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_search,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__25385,p__25386){
var map__25387 = p__25385;
var map__25387__$1 = cljs.core.__destructure_map(map__25387);
var map__25388 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25387__$1,cljs.core.cst$kw$db);
var map__25388__$1 = cljs.core.__destructure_map(map__25388);
var db = map__25388__$1;
var map__25389 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25388__$1,cljs.core.cst$kw$items);
var map__25389__$1 = cljs.core.__destructure_map(map__25389);
var items_by_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25389__$1,cljs.core.cst$kw$by_DASH_id);
var vec__25390 = p__25386;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25390,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25390,(1),null);
var query = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25390,(2),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$items_DASH_by_DASH_id,cljs.core.cst$kw$by_DASH_id], null),cljs.core.cst$kw$items,cljs.core.cst$kw$as,cljs.core.cst$sym$db], null),cljs.core.cst$kw$db], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$sym$query], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_next_DASH_state,cljs.core.cst$sym$db,cljs.core.PersistentVector.EMPTY,cljs.core.cst$sym$fsm_SLASH_fsm,cljs.core.cst$kw$search),cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_search,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$query,cljs.core.cst$sym$query,cljs.core.cst$kw$items_DASH_by_DASH_id,cljs.core.cst$sym$items_DASH_by_DASH_id,cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_search_DASH_success,cljs.core.cst$sym$item_DASH_index], null)], null)], null)));

var result__24541__auto__ = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,(function (){var result__24541__auto__ = nw_calculator.event_handlers.next_state((function (){var result__24541__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(4),cljs.core.cst$kw$result,result__24541__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__24541__auto__;
})(),(function (){var result__24541__auto__ = cljs.core.PersistentVector.EMPTY;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(5),cljs.core.cst$kw$result,result__24541__auto__,cljs.core.cst$kw$form,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__24541__auto__;
})(),(function (){var result__24541__auto__ = nw_calculator.fsm.fsm;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(7),cljs.core.cst$kw$result,result__24541__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$fsm_SLASH_fsm,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__24541__auto__;
})(),cljs.core.cst$kw$search);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(3),cljs.core.cst$kw$result,result__24541__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_next_DASH_state,cljs.core.cst$sym$db,cljs.core.PersistentVector.EMPTY,cljs.core.cst$sym$fsm_SLASH_fsm,cljs.core.cst$kw$search),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__24541__auto__;
})(),cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_search,(function (){var result__24541__auto__ = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$query,(function (){var result__24541__auto__ = query;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(12),cljs.core.cst$kw$result,result__24541__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$query,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__24541__auto__;
})(),cljs.core.cst$kw$items_DASH_by_DASH_id,(function (){var result__24541__auto__ = items_by_id;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(14),cljs.core.cst$kw$result,result__24541__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$items_DASH_by_DASH_id,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__24541__auto__;
})(),cljs.core.cst$kw$on_DASH_success,(function (){var result__24541__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_search_DASH_success,(function (){var result__24541__auto__ = item_index;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(18),cljs.core.cst$kw$result,result__24541__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__24541__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(16),cljs.core.cst$kw$result,result__24541__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_search_DASH_success,cljs.core.cst$sym$item_DASH_index], null),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__24541__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(10),cljs.core.cst$kw$result,result__24541__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$query,cljs.core.cst$sym$query,cljs.core.cst$kw$items_DASH_by_DASH_id,cljs.core.cst$sym$items_DASH_by_DASH_id,cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_search_DASH_success,cljs.core.cst$sym$item_DASH_index], null)], null),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__24541__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__24541__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_next_DASH_state,cljs.core.cst$sym$db,cljs.core.PersistentVector.EMPTY,cljs.core.cst$sym$fsm_SLASH_fsm,cljs.core.cst$kw$search),cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_search,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$query,cljs.core.cst$sym$query,cljs.core.cst$kw$items_DASH_by_DASH_id,cljs.core.cst$sym$items_DASH_by_DASH_id,cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_search_DASH_success,cljs.core.cst$sym$item_DASH_index], null)], null)], null),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__24541__auto__;
}catch (e25393){var e = e25393;
throw e;
}}):(function (p__25394,p__25395){
var map__25396 = p__25394;
var map__25396__$1 = cljs.core.__destructure_map(map__25396);
var map__25397 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25396__$1,cljs.core.cst$kw$db);
var map__25397__$1 = cljs.core.__destructure_map(map__25397);
var db = map__25397__$1;
var map__25398 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25397__$1,cljs.core.cst$kw$items);
var map__25398__$1 = cljs.core.__destructure_map(map__25398);
var items_by_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25398__$1,cljs.core.cst$kw$by_DASH_id);
var vec__25399 = p__25395;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25399,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25399,(1),null);
var query = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25399,(2),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,nw_calculator.event_handlers.next_state(db,cljs.core.PersistentVector.EMPTY,nw_calculator.fsm.fsm,cljs.core.cst$kw$search),cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_search,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$query,query,cljs.core.cst$kw$items_DASH_by_DASH_id,items_by_id,cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_search_DASH_success,item_index], null)], null)], null);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_clear_DASH_search,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__25402){
var vec__25403 = p__25402;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25403,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25403,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$item_DASH_index], null)], null),cljs.core.list(cljs.core.cst$sym$_DASH__GT_,cljs.core.cst$sym$db,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_items,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$item], null),cljs.core.PersistentArrayMap.EMPTY),cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search_DASH_results,cljs.core.cst$sym$item_DASH_index], null),cljs.core.PersistentVector.EMPTY))));

var result__24541__auto__ = (function (){var result__24548__auto__ = cljs.core.assoc_in((function (){var result__24548__auto__ = cljs.core.assoc_in((function (){var result__24541__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(2),cljs.core.cst$kw$result,result__24541__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__24541__auto__;
})(),(function (){var result__24541__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_items,(function (){var result__24541__auto__ = item_index;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(7),cljs.core.cst$kw$result,result__24541__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__24541__auto__;
})(),cljs.core.cst$kw$item], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(5),cljs.core.cst$kw$result,result__24541__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_items,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$item], null),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__24541__auto__;
})(),(function (){var result__24541__auto__ = cljs.core.PersistentArrayMap.EMPTY;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(9),cljs.core.cst$kw$result,result__24541__auto__,cljs.core.cst$kw$form,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__24541__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(3),cljs.core.cst$kw$result,result__24548__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_items,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$item], null),cljs.core.PersistentArrayMap.EMPTY),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__24548__auto__;
})(),(function (){var result__24541__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search_DASH_results,(function (){var result__24541__auto__ = item_index;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,3,cljs.core.cst$kw$syntax_DASH_order,(15),cljs.core.cst$kw$result,result__24541__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__24541__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(13),cljs.core.cst$kw$result,result__24541__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search_DASH_results,cljs.core.cst$sym$item_DASH_index], null),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__24541__auto__;
})(),(function (){var result__24541__auto__ = cljs.core.PersistentVector.EMPTY;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(16),cljs.core.cst$kw$result,result__24541__auto__,cljs.core.cst$kw$form,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__24541__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(11),cljs.core.cst$kw$result,result__24548__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search_DASH_results,cljs.core.cst$sym$item_DASH_index], null),cljs.core.PersistentVector.EMPTY),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__24548__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__24541__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$_DASH__GT_,cljs.core.cst$sym$db,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_items,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$item], null),cljs.core.PersistentArrayMap.EMPTY),cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search_DASH_results,cljs.core.cst$sym$item_DASH_index], null),cljs.core.PersistentVector.EMPTY)),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__24541__auto__;
}catch (e25406){var e = e25406;
throw e;
}}):(function (db,p__25407){
var vec__25408 = p__25407;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25408,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25408,(1),null);
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_items,item_index,cljs.core.cst$kw$item], null),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search_DASH_results,item_index], null),cljs.core.PersistentVector.EMPTY);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_select_DASH_item,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__25412){
var vec__25413 = p__25412;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25413,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25413,(1),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25413,(2),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$sym$item], null)], null),cljs.core.list(cljs.core.cst$sym$_DASH__GT_,cljs.core.cst$sym$db,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_items,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$item], null),cljs.core.cst$sym$item),cljs.core.list(cljs.core.cst$sym$update_DASH_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_items,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$amount_DASH_multiplier], null),cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_1], null),cljs.core.list(cljs.core.cst$sym$or,cljs.core.cst$sym$_PERCENT_1,(1)))),cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search_DASH_results,cljs.core.cst$sym$item_DASH_index], null),cljs.core.PersistentVector.EMPTY))));

var result__24541__auto__ = (function (){var result__24548__auto__ = cljs.core.assoc_in((function (){var result__24548__auto__ = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3((function (){var result__24548__auto__ = cljs.core.assoc_in((function (){var result__24541__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(2),cljs.core.cst$kw$result,result__24541__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__24541__auto__;
})(),(function (){var result__24541__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_items,(function (){var result__24541__auto__ = item_index;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(7),cljs.core.cst$kw$result,result__24541__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__24541__auto__;
})(),cljs.core.cst$kw$item], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(5),cljs.core.cst$kw$result,result__24541__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_items,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$item], null),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__24541__auto__;
})(),(function (){var result__24541__auto__ = item;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(9),cljs.core.cst$kw$result,result__24541__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$item,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__24541__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(3),cljs.core.cst$kw$result,result__24548__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_items,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$item], null),cljs.core.cst$sym$item),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__24548__auto__;
})(),(function (){var result__24541__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_items,(function (){var result__24541__auto__ = item_index;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,3,cljs.core.cst$kw$syntax_DASH_order,(14),cljs.core.cst$kw$result,result__24541__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__24541__auto__;
})(),cljs.core.cst$kw$amount_DASH_multiplier], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(12),cljs.core.cst$kw$result,result__24541__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_items,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$amount_DASH_multiplier], null),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__24541__auto__;
})(),(function (){var result__24541__auto__ = (function (p1__25411_SHARP_){
var result__24541__auto__ = (function (){var or__4212__auto__ = (function (){var result__24541__auto__ = p1__25411_SHARP_;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(19),cljs.core.cst$kw$result,result__24541__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$p1__25411_SHARP_,cljs.core.cst$kw$indent_DASH_level,(4)], null));

return result__24541__auto__;
})();
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (1);
}
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(18),cljs.core.cst$kw$result,result__24541__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$or,cljs.core.cst$sym$p1__25411_SHARP_,(1)),cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__24541__auto__;
});
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(16),cljs.core.cst$kw$result,result__24541__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__25411_SHARP_], null),cljs.core.list(cljs.core.cst$sym$or,cljs.core.cst$sym$p1__25411_SHARP_,(1))),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__24541__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(10),cljs.core.cst$kw$result,result__24548__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$update_DASH_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_items,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$amount_DASH_multiplier], null),cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__25411_SHARP_], null),cljs.core.list(cljs.core.cst$sym$or,cljs.core.cst$sym$p1__25411_SHARP_,(1)))),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__24548__auto__;
})(),(function (){var result__24541__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search_DASH_results,(function (){var result__24541__auto__ = item_index;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,4,cljs.core.cst$kw$syntax_DASH_order,(25),cljs.core.cst$kw$result,result__24541__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__24541__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(23),cljs.core.cst$kw$result,result__24541__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search_DASH_results,cljs.core.cst$sym$item_DASH_index], null),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__24541__auto__;
})(),(function (){var result__24541__auto__ = cljs.core.PersistentVector.EMPTY;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(26),cljs.core.cst$kw$result,result__24541__auto__,cljs.core.cst$kw$form,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__24541__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(21),cljs.core.cst$kw$result,result__24548__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search_DASH_results,cljs.core.cst$sym$item_DASH_index], null),cljs.core.PersistentVector.EMPTY),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__24548__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__24541__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$_DASH__GT_,cljs.core.cst$sym$db,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_items,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$item], null),cljs.core.cst$sym$item),cljs.core.list(cljs.core.cst$sym$update_DASH_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_items,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$amount_DASH_multiplier], null),cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__25411_SHARP_], null),cljs.core.list(cljs.core.cst$sym$or,cljs.core.cst$sym$p1__25411_SHARP_,(1)))),cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search_DASH_results,cljs.core.cst$sym$item_DASH_index], null),cljs.core.PersistentVector.EMPTY)),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__24541__auto__;
}catch (e25416){var e = e25416;
throw e;
}}):(function (db,p__25417){
var vec__25418 = p__25417;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25418,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25418,(1),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25418,(2),null);
return cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_items,item_index,cljs.core.cst$kw$item], null),item),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_items,item_index,cljs.core.cst$kw$amount_DASH_multiplier], null),(function (p1__25411_SHARP_){
var or__4212__auto__ = p1__25411_SHARP_;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (1);
}
})),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search_DASH_results,item_index], null),cljs.core.PersistentVector.EMPTY);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_set_DASH_amount_DASH_multiplier,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__25421){
var vec__25422 = p__25421;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25422,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25422,(1),null);
var multiplier = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25422,(2),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$sym$multiplier], null)], null),cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_items,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$amount_DASH_multiplier], null),cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$or,cljs.core.list(cljs.core.cst$sym$js_SLASH_isNaN,cljs.core.cst$sym$multiplier),cljs.core.list(cljs.core.cst$sym$_LT__EQ_,cljs.core.cst$sym$multiplier,(0))),(1),cljs.core.cst$sym$multiplier))));

var result__24541__auto__ = cljs.core.assoc_in((function (){var result__24541__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(2),cljs.core.cst$kw$result,result__24541__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__24541__auto__;
})(),(function (){var result__24541__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_items,(function (){var result__24541__auto__ = item_index;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(5),cljs.core.cst$kw$result,result__24541__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__24541__auto__;
})(),cljs.core.cst$kw$amount_DASH_multiplier], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(3),cljs.core.cst$kw$result,result__24541__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_items,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$amount_DASH_multiplier], null),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__24541__auto__;
})(),(function (){var result__24541__auto__ = (cljs.core.truth_((function (){var result__24541__auto__ = (function (){var or__4212__auto__ = (function (){var result__24541__auto__ = isNaN((function (){var result__24541__auto__ = multiplier;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(10),cljs.core.cst$kw$result,result__24541__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$multiplier,cljs.core.cst$kw$indent_DASH_level,(4)], null));

return result__24541__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(9),cljs.core.cst$kw$result,result__24541__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$js_SLASH_isNaN,cljs.core.cst$sym$multiplier),cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__24541__auto__;
})();
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var result__24541__auto__ = ((function (){var result__24541__auto__ = multiplier;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,3,cljs.core.cst$kw$syntax_DASH_order,(12),cljs.core.cst$kw$result,result__24541__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$multiplier,cljs.core.cst$kw$indent_DASH_level,(4)], null));

return result__24541__auto__;
})() <= (0));
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(11),cljs.core.cst$kw$result,result__24541__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$_LT__EQ_,cljs.core.cst$sym$multiplier,(0)),cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__24541__auto__;
}
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(8),cljs.core.cst$kw$result,result__24541__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$or,cljs.core.list(cljs.core.cst$sym$js_SLASH_isNaN,cljs.core.cst$sym$multiplier),cljs.core.list(cljs.core.cst$sym$_LT__EQ_,cljs.core.cst$sym$multiplier,(0))),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__24541__auto__;
})())?(1):(function (){var result__24541__auto__ = multiplier;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,4,cljs.core.cst$kw$syntax_DASH_order,(15),cljs.core.cst$kw$result,result__24541__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$multiplier,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__24541__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(7),cljs.core.cst$kw$result,result__24541__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$or,cljs.core.list(cljs.core.cst$sym$js_SLASH_isNaN,cljs.core.cst$sym$multiplier),cljs.core.list(cljs.core.cst$sym$_LT__EQ_,cljs.core.cst$sym$multiplier,(0))),(1),cljs.core.cst$sym$multiplier),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__24541__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__24541__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_items,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$amount_DASH_multiplier], null),cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$or,cljs.core.list(cljs.core.cst$sym$js_SLASH_isNaN,cljs.core.cst$sym$multiplier),cljs.core.list(cljs.core.cst$sym$_LT__EQ_,cljs.core.cst$sym$multiplier,(0))),(1),cljs.core.cst$sym$multiplier)),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__24541__auto__;
}catch (e25425){var e = e25425;
throw e;
}}):(function (db,p__25426){
var vec__25427 = p__25426;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25427,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25427,(1),null);
var multiplier = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25427,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_items,item_index,cljs.core.cst$kw$amount_DASH_multiplier], null),(cljs.core.truth_((function (){var or__4212__auto__ = isNaN(multiplier);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (multiplier <= (0));
}
})())?(1):multiplier));
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_add_DASH_empty_DASH_item,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,_){
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$db,cljs.core.cst$sym$_], null),cljs.core.list(cljs.core.cst$sym$update,cljs.core.cst$sym$db,cljs.core.cst$kw$selected_DASH_items,cljs.core.cst$sym$conj,cljs.core.cst$sym$df_SLASH_empty_DASH_selected_DASH_item)));

var result__24541__auto__ = cljs.core.update.cljs$core$IFn$_invoke$arity$4((function (){var result__24541__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(2),cljs.core.cst$kw$result,result__24541__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__24541__auto__;
})(),cljs.core.cst$kw$selected_DASH_items,(function (){var result__24541__auto__ = cljs.core.conj;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(4),cljs.core.cst$kw$result,result__24541__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$conj,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__24541__auto__;
})(),(function (){var result__24541__auto__ = nw_calculator.defaults.empty_selected_item;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(5),cljs.core.cst$kw$result,result__24541__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$df_SLASH_empty_DASH_selected_DASH_item,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__24541__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__24541__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$update,cljs.core.cst$sym$db,cljs.core.cst$kw$selected_DASH_items,cljs.core.cst$sym$conj,cljs.core.cst$sym$df_SLASH_empty_DASH_selected_DASH_item),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__24541__auto__;
}catch (e25430){var e = e25430;
throw e;
}}):(function (db,_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,cljs.core.cst$kw$selected_DASH_items,cljs.core.conj,nw_calculator.defaults.empty_selected_item);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_delete_DASH_item,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__25431){
var vec__25432 = p__25431;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25432,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25432,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$item_DASH_index], null)], null),cljs.core.list(cljs.core.cst$sym$update,cljs.core.cst$sym$db,cljs.core.cst$kw$selected_DASH_items,cljs.core.cst$sym$util_SLASH_vec_DASH_remove_DASH_nth,cljs.core.cst$sym$item_DASH_index)));

var result__24541__auto__ = cljs.core.update.cljs$core$IFn$_invoke$arity$4((function (){var result__24541__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(2),cljs.core.cst$kw$result,result__24541__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__24541__auto__;
})(),cljs.core.cst$kw$selected_DASH_items,(function (){var result__24541__auto__ = nw_calculator.utilities.vec_remove_nth;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(4),cljs.core.cst$kw$result,result__24541__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$util_SLASH_vec_DASH_remove_DASH_nth,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__24541__auto__;
})(),(function (){var result__24541__auto__ = item_index;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(5),cljs.core.cst$kw$result,result__24541__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__24541__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__24541__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$update,cljs.core.cst$sym$db,cljs.core.cst$kw$selected_DASH_items,cljs.core.cst$sym$util_SLASH_vec_DASH_remove_DASH_nth,cljs.core.cst$sym$item_DASH_index),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__24541__auto__;
}catch (e25435){var e = e25435;
throw e;
}}):(function (db,p__25436){
var vec__25437 = p__25436;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25437,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25437,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,cljs.core.cst$kw$selected_DASH_items,nw_calculator.utilities.vec_remove_nth,item_index);
})));
