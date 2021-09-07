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
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_set_DASH_dark_DASH_theme,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__25311,p__25312){
var map__25313 = p__25311;
var map__25313__$1 = cljs.core.__destructure_map(map__25313);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25313__$1,cljs.core.cst$kw$db);
var vec__25314 = p__25312;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25314,(0),null);
var dark_theme_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25314,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$db,cljs.core.cst$kw$db], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$dark_DASH_theme_QMARK_], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.list(cljs.core.cst$sym$assoc,cljs.core.cst$sym$db,cljs.core.cst$kw$dark_DASH_theme_QMARK_,cljs.core.cst$sym$dark_DASH_theme_QMARK_),cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_set_DASH_local_DASH_storage,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_dark_DASH_theme_QMARK_,cljs.core.cst$sym$dark_DASH_theme_QMARK_], null)], null)));

var result__24534__auto__ = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,(function (){var result__24534__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var result__24534__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(4),cljs.core.cst$kw$result,result__24534__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__24534__auto__;
})(),cljs.core.cst$kw$dark_DASH_theme_QMARK_,(function (){var result__24534__auto__ = dark_theme_QMARK_;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(6),cljs.core.cst$kw$result,result__24534__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$dark_DASH_theme_QMARK_,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__24534__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(3),cljs.core.cst$kw$result,result__24534__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$assoc,cljs.core.cst$sym$db,cljs.core.cst$kw$dark_DASH_theme_QMARK_,cljs.core.cst$sym$dark_DASH_theme_QMARK_),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__24534__auto__;
})(),cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_set_DASH_local_DASH_storage,(function (){var result__24534__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_dark_DASH_theme_QMARK_,(function (){var result__24534__auto__ = dark_theme_QMARK_;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,3,cljs.core.cst$kw$syntax_DASH_order,(10),cljs.core.cst$kw$result,result__24534__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$dark_DASH_theme_QMARK_,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__24534__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(8),cljs.core.cst$kw$result,result__24534__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_dark_DASH_theme_QMARK_,cljs.core.cst$sym$dark_DASH_theme_QMARK_], null),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__24534__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__24534__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.list(cljs.core.cst$sym$assoc,cljs.core.cst$sym$db,cljs.core.cst$kw$dark_DASH_theme_QMARK_,cljs.core.cst$sym$dark_DASH_theme_QMARK_),cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_set_DASH_local_DASH_storage,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_dark_DASH_theme_QMARK_,cljs.core.cst$sym$dark_DASH_theme_QMARK_], null)], null),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__24534__auto__;
}catch (e25317){var e = e25317;
throw e;
}}):(function (p__25318,p__25319){
var map__25320 = p__25318;
var map__25320__$1 = cljs.core.__destructure_map(map__25320);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25320__$1,cljs.core.cst$kw$db);
var vec__25321 = p__25319;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25321,(0),null);
var dark_theme_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25321,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$dark_DASH_theme_QMARK_,dark_theme_QMARK_),cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_set_DASH_local_DASH_storage,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_dark_DASH_theme_QMARK_,dark_theme_QMARK_], null)], null);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_initialize_DASH_db,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_,p__25324){
var vec__25325 = p__25324;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25325,(0),null);
var default_overrides = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25325,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$default_DASH_overrides], null)], null),cljs.core.list(cljs.core.cst$sym$merge,cljs.core.cst$sym$df_SLASH_default_DASH_db,cljs.core.cst$sym$default_DASH_overrides)));

var result__24534__auto__ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var result__24534__auto__ = nw_calculator.defaults.default_db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(2),cljs.core.cst$kw$result,result__24534__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$df_SLASH_default_DASH_db,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__24534__auto__;
})(),(function (){var result__24534__auto__ = default_overrides;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(3),cljs.core.cst$kw$result,result__24534__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$default_DASH_overrides,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__24534__auto__;
})()], 0));
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__24534__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$merge,cljs.core.cst$sym$df_SLASH_default_DASH_db,cljs.core.cst$sym$default_DASH_overrides),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__24534__auto__;
}catch (e25328){var e = e25328;
throw e;
}}):(function (_,p__25329){
var vec__25330 = p__25329;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25330,(0),null);
var default_overrides = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25330,(1),null);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nw_calculator.defaults.default_db,default_overrides], 0));
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_set_DASH_state,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__25333){
var vec__25334 = p__25333;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25334,(0),null);
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25334,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$state], null)], null),cljs.core.list(cljs.core.cst$sym$assoc,cljs.core.cst$sym$db,cljs.core.cst$kw$state,cljs.core.cst$sym$state)));

var result__24534__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var result__24534__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(2),cljs.core.cst$kw$result,result__24534__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__24534__auto__;
})(),cljs.core.cst$kw$state,(function (){var result__24534__auto__ = state;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(4),cljs.core.cst$kw$result,result__24534__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$state,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__24534__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__24534__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$assoc,cljs.core.cst$sym$db,cljs.core.cst$kw$state,cljs.core.cst$sym$state),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__24534__auto__;
}catch (e25337){var e = e25337;
throw e;
}}):(function (db,p__25338){
var vec__25339 = p__25338;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25339,(0),null);
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25339,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$state,state);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_success,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__25342){
var vec__25343 = p__25342;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25343,(0),null);
var items_edn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25343,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$items_DASH_edn], null)], null),cljs.core.list(cljs.core.cst$sym$_DASH__GT_,cljs.core.cst$sym$db,cljs.core.list(cljs.core.cst$sym$update,cljs.core.cst$kw$items,cljs.core.cst$sym$c_SLASH_add_DASH_items,cljs.core.list(cljs.core.cst$sym$edn_SLASH_read_DASH_string,cljs.core.list(cljs.core.cst$sym$str,cljs.core.cst$sym$items_DASH_edn))),cljs.core.list(cljs.core.cst$sym$handlers_SLASH_next_DASH_state,cljs.core.PersistentVector.EMPTY,cljs.core.cst$sym$fsm_SLASH_fsm,cljs.core.cst$kw$success))));

var result__24534__auto__ = (function (){var result__24541__auto__ = nw_calculator.event_handlers.next_state((function (){var result__24541__auto__ = cljs.core.update.cljs$core$IFn$_invoke$arity$4((function (){var result__24534__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(2),cljs.core.cst$kw$result,result__24534__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__24534__auto__;
})(),cljs.core.cst$kw$items,(function (){var result__24534__auto__ = compound2.core.add_items;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(6),cljs.core.cst$kw$result,result__24534__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$c_SLASH_add_DASH_items,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__24534__auto__;
})(),(function (){var result__24534__auto__ = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1((function (){var result__24534__auto__ = cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var result__24534__auto__ = items_edn;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(9),cljs.core.cst$kw$result,result__24534__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$items_DASH_edn,cljs.core.cst$kw$indent_DASH_level,(4)], null));

return result__24534__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(8),cljs.core.cst$kw$result,result__24534__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$str,cljs.core.cst$sym$items_DASH_edn),cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__24534__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(7),cljs.core.cst$kw$result,result__24534__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$edn_SLASH_read_DASH_string,cljs.core.list(cljs.core.cst$sym$str,cljs.core.cst$sym$items_DASH_edn)),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__24534__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(3),cljs.core.cst$kw$result,result__24541__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$update,cljs.core.cst$kw$items,cljs.core.cst$sym$c_SLASH_add_DASH_items,cljs.core.list(cljs.core.cst$sym$edn_SLASH_read_DASH_string,cljs.core.list(cljs.core.cst$sym$str,cljs.core.cst$sym$items_DASH_edn))),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__24541__auto__;
})(),(function (){var result__24534__auto__ = cljs.core.PersistentVector.EMPTY;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(12),cljs.core.cst$kw$result,result__24534__auto__,cljs.core.cst$kw$form,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__24534__auto__;
})(),(function (){var result__24534__auto__ = nw_calculator.fsm.fsm;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(14),cljs.core.cst$kw$result,result__24534__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$fsm_SLASH_fsm,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__24534__auto__;
})(),cljs.core.cst$kw$success);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(10),cljs.core.cst$kw$result,result__24541__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_next_DASH_state,cljs.core.PersistentVector.EMPTY,cljs.core.cst$sym$fsm_SLASH_fsm,cljs.core.cst$kw$success),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__24541__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__24534__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$_DASH__GT_,cljs.core.cst$sym$db,cljs.core.list(cljs.core.cst$sym$update,cljs.core.cst$kw$items,cljs.core.cst$sym$c_SLASH_add_DASH_items,cljs.core.list(cljs.core.cst$sym$edn_SLASH_read_DASH_string,cljs.core.list(cljs.core.cst$sym$str,cljs.core.cst$sym$items_DASH_edn))),cljs.core.list(cljs.core.cst$sym$handlers_SLASH_next_DASH_state,cljs.core.PersistentVector.EMPTY,cljs.core.cst$sym$fsm_SLASH_fsm,cljs.core.cst$kw$success)),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__24534__auto__;
}catch (e25346){var e = e25346;
throw e;
}}):(function (db,p__25347){
var vec__25348 = p__25347;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25348,(0),null);
var items_edn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25348,(1),null);
return nw_calculator.event_handlers.next_state(cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,cljs.core.cst$kw$items,compound2.core.add_items,cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(items_edn))),cljs.core.PersistentVector.EMPTY,nw_calculator.fsm.fsm,cljs.core.cst$kw$success);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_failure,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__25351){
var vec__25352 = p__25351;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25352,(0),null);
var _resp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25352,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$_resp], null)], null),cljs.core.cst$sym$db));

var result__24534__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__24534__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db,cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__24534__auto__;
}catch (e25355){var e = e25355;
throw e;
}}):(function (db,p__25356){
var vec__25357 = p__25356;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25357,(0),null);
var _resp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25357,(1),null);
return db;
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__25360,_){
var map__25361 = p__25360;
var map__25361__$1 = cljs.core.__destructure_map(map__25361);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25361__$1,cljs.core.cst$kw$db);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$db,cljs.core.cst$kw$db], null),cljs.core.cst$sym$_], null),cljs.core.list(cljs.core.cst$sym$handlers_SLASH_next_DASH_state,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$db,cljs.core.cst$sym$db,cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_log_DASH_info,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u2B07\uFE0F Fetching item data!"], null),cljs.core.cst$kw$http_DASH_xhrio,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$method,cljs.core.cst$kw$get,cljs.core.cst$kw$response_DASH_format,cljs.core.list(cljs.core.cst$sym$ajax_SLASH_raw_DASH_response_DASH_format),cljs.core.cst$kw$uri,"/data/items.edn",cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_success], null),cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_failure], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db], null),cljs.core.cst$sym$fsm_SLASH_fsm,cljs.core.cst$kw$fetch_DASH_item_DASH_data)));

var result__24534__auto__ = nw_calculator.event_handlers.next_state((function (){var result__24534__auto__ = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$db,(function (){var result__24534__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(4),cljs.core.cst$kw$result,result__24534__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__24534__auto__;
})(),cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_log_DASH_info,(function (){var result__24534__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u2B07\uFE0F Fetching item data!"], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(6),cljs.core.cst$kw$result,result__24534__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u2B07\uFE0F Fetching item data!"], null),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__24534__auto__;
})(),cljs.core.cst$kw$http_DASH_xhrio,(function (){var result__24534__auto__ = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$method,cljs.core.cst$kw$get,cljs.core.cst$kw$response_DASH_format,(function (){var result__24534__auto__ = (ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0 ? ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0() : ajax.core.raw_response_format.call(null));
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(13),cljs.core.cst$kw$result,result__24534__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$ajax_SLASH_raw_DASH_response_DASH_format),cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__24534__auto__;
})(),cljs.core.cst$kw$uri,"/data/items.edn",cljs.core.cst$kw$on_DASH_success,(function (){var result__24534__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_success], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(17),cljs.core.cst$kw$result,result__24534__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_success], null),cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__24534__auto__;
})(),cljs.core.cst$kw$on_DASH_failure,(function (){var result__24534__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_failure], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(20),cljs.core.cst$kw$result,result__24534__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_failure], null),cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__24534__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(9),cljs.core.cst$kw$result,result__24534__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$method,cljs.core.cst$kw$get,cljs.core.cst$kw$response_DASH_format,cljs.core.list(cljs.core.cst$sym$ajax_SLASH_raw_DASH_response_DASH_format),cljs.core.cst$kw$uri,"/data/items.edn",cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_success], null),cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_failure], null)], null),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__24534__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(2),cljs.core.cst$kw$result,result__24534__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$db,cljs.core.cst$sym$db,cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_log_DASH_info,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u2B07\uFE0F Fetching item data!"], null),cljs.core.cst$kw$http_DASH_xhrio,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$method,cljs.core.cst$kw$get,cljs.core.cst$kw$response_DASH_format,cljs.core.list(cljs.core.cst$sym$ajax_SLASH_raw_DASH_response_DASH_format),cljs.core.cst$kw$uri,"/data/items.edn",cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_success], null),cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_failure], null)], null)], null),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__24534__auto__;
})(),(function (){var result__24534__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(22),cljs.core.cst$kw$result,result__24534__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db], null),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__24534__auto__;
})(),(function (){var result__24534__auto__ = nw_calculator.fsm.fsm;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(24),cljs.core.cst$kw$result,result__24534__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$fsm_SLASH_fsm,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__24534__auto__;
})(),cljs.core.cst$kw$fetch_DASH_item_DASH_data);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__24534__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_next_DASH_state,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$db,cljs.core.cst$sym$db,cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_log_DASH_info,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u2B07\uFE0F Fetching item data!"], null),cljs.core.cst$kw$http_DASH_xhrio,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$method,cljs.core.cst$kw$get,cljs.core.cst$kw$response_DASH_format,cljs.core.list(cljs.core.cst$sym$ajax_SLASH_raw_DASH_response_DASH_format),cljs.core.cst$kw$uri,"/data/items.edn",cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_success], null),cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_failure], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db], null),cljs.core.cst$sym$fsm_SLASH_fsm,cljs.core.cst$kw$fetch_DASH_item_DASH_data),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__24534__auto__;
}catch (e25362){var e = e25362;
throw e;
}}):(function (p__25363,_){
var map__25364 = p__25363;
var map__25364__$1 = cljs.core.__destructure_map(map__25364);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25364__$1,cljs.core.cst$kw$db);
return nw_calculator.event_handlers.next_state(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$db,db,cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_log_DASH_info,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u2B07\uFE0F Fetching item data!"], null),cljs.core.cst$kw$http_DASH_xhrio,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$method,cljs.core.cst$kw$get,cljs.core.cst$kw$response_DASH_format,(ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0 ? ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0() : ajax.core.raw_response_format.call(null)),cljs.core.cst$kw$uri,"/data/items.edn",cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_success], null),cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items_DASH_failure], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db], null),nw_calculator.fsm.fsm,cljs.core.cst$kw$fetch_DASH_item_DASH_data);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_search_DASH_success,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__25365){
var vec__25366 = p__25365;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25366,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25366,(1),null);
var search_results = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25366,(2),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$sym$search_DASH_results], null)], null),cljs.core.list(cljs.core.cst$sym$_DASH__GT_,cljs.core.cst$sym$db,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search_DASH_results,cljs.core.cst$sym$item_DASH_index], null),cljs.core.cst$sym$search_DASH_results),cljs.core.list(cljs.core.cst$sym$handlers_SLASH_next_DASH_state,cljs.core.PersistentVector.EMPTY,cljs.core.cst$sym$fsm_SLASH_fsm,cljs.core.cst$kw$success))));

var result__24534__auto__ = (function (){var result__24541__auto__ = nw_calculator.event_handlers.next_state((function (){var result__24541__auto__ = cljs.core.assoc_in((function (){var result__24534__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(2),cljs.core.cst$kw$result,result__24534__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__24534__auto__;
})(),(function (){var result__24534__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search_DASH_results,(function (){var result__24534__auto__ = item_index;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(7),cljs.core.cst$kw$result,result__24534__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__24534__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(5),cljs.core.cst$kw$result,result__24534__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search_DASH_results,cljs.core.cst$sym$item_DASH_index], null),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__24534__auto__;
})(),(function (){var result__24534__auto__ = search_results;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(8),cljs.core.cst$kw$result,result__24534__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$search_DASH_results,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__24534__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(3),cljs.core.cst$kw$result,result__24541__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search_DASH_results,cljs.core.cst$sym$item_DASH_index], null),cljs.core.cst$sym$search_DASH_results),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__24541__auto__;
})(),(function (){var result__24534__auto__ = cljs.core.PersistentVector.EMPTY;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(11),cljs.core.cst$kw$result,result__24534__auto__,cljs.core.cst$kw$form,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__24534__auto__;
})(),(function (){var result__24534__auto__ = nw_calculator.fsm.fsm;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(13),cljs.core.cst$kw$result,result__24534__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$fsm_SLASH_fsm,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__24534__auto__;
})(),cljs.core.cst$kw$success);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(9),cljs.core.cst$kw$result,result__24541__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_next_DASH_state,cljs.core.PersistentVector.EMPTY,cljs.core.cst$sym$fsm_SLASH_fsm,cljs.core.cst$kw$success),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__24541__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__24534__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$_DASH__GT_,cljs.core.cst$sym$db,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search_DASH_results,cljs.core.cst$sym$item_DASH_index], null),cljs.core.cst$sym$search_DASH_results),cljs.core.list(cljs.core.cst$sym$handlers_SLASH_next_DASH_state,cljs.core.PersistentVector.EMPTY,cljs.core.cst$sym$fsm_SLASH_fsm,cljs.core.cst$kw$success)),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__24534__auto__;
}catch (e25369){var e = e25369;
throw e;
}}):(function (db,p__25370){
var vec__25371 = p__25370;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25371,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25371,(1),null);
var search_results = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25371,(2),null);
return nw_calculator.event_handlers.next_state(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search_DASH_results,item_index], null),search_results),cljs.core.PersistentVector.EMPTY,nw_calculator.fsm.fsm,cljs.core.cst$kw$success);
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_search,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__25374,p__25375){
var map__25376 = p__25374;
var map__25376__$1 = cljs.core.__destructure_map(map__25376);
var map__25377 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25376__$1,cljs.core.cst$kw$db);
var map__25377__$1 = cljs.core.__destructure_map(map__25377);
var db = map__25377__$1;
var map__25378 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25377__$1,cljs.core.cst$kw$items);
var map__25378__$1 = cljs.core.__destructure_map(map__25378);
var items_by_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25378__$1,cljs.core.cst$kw$by_DASH_id);
var vec__25379 = p__25375;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25379,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25379,(1),null);
var query = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25379,(2),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$items_DASH_by_DASH_id,cljs.core.cst$kw$by_DASH_id], null),cljs.core.cst$kw$items,cljs.core.cst$kw$as,cljs.core.cst$sym$db], null),cljs.core.cst$kw$db], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$sym$query], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_next_DASH_state,cljs.core.cst$sym$db,cljs.core.PersistentVector.EMPTY,cljs.core.cst$sym$fsm_SLASH_fsm,cljs.core.cst$kw$search),cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_search,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$query,cljs.core.cst$sym$query,cljs.core.cst$kw$items_DASH_by_DASH_id,cljs.core.cst$sym$items_DASH_by_DASH_id,cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_search_DASH_success,cljs.core.cst$sym$item_DASH_index], null)], null)], null)));

var result__24534__auto__ = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,(function (){var result__24534__auto__ = nw_calculator.event_handlers.next_state((function (){var result__24534__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(4),cljs.core.cst$kw$result,result__24534__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__24534__auto__;
})(),(function (){var result__24534__auto__ = cljs.core.PersistentVector.EMPTY;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(5),cljs.core.cst$kw$result,result__24534__auto__,cljs.core.cst$kw$form,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__24534__auto__;
})(),(function (){var result__24534__auto__ = nw_calculator.fsm.fsm;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(7),cljs.core.cst$kw$result,result__24534__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$fsm_SLASH_fsm,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__24534__auto__;
})(),cljs.core.cst$kw$search);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(3),cljs.core.cst$kw$result,result__24534__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_next_DASH_state,cljs.core.cst$sym$db,cljs.core.PersistentVector.EMPTY,cljs.core.cst$sym$fsm_SLASH_fsm,cljs.core.cst$kw$search),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__24534__auto__;
})(),cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_search,(function (){var result__24534__auto__ = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$query,(function (){var result__24534__auto__ = query;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(12),cljs.core.cst$kw$result,result__24534__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$query,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__24534__auto__;
})(),cljs.core.cst$kw$items_DASH_by_DASH_id,(function (){var result__24534__auto__ = items_by_id;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(14),cljs.core.cst$kw$result,result__24534__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$items_DASH_by_DASH_id,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__24534__auto__;
})(),cljs.core.cst$kw$on_DASH_success,(function (){var result__24534__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_search_DASH_success,(function (){var result__24534__auto__ = item_index;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(18),cljs.core.cst$kw$result,result__24534__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__24534__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(16),cljs.core.cst$kw$result,result__24534__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_search_DASH_success,cljs.core.cst$sym$item_DASH_index], null),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__24534__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(10),cljs.core.cst$kw$result,result__24534__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$query,cljs.core.cst$sym$query,cljs.core.cst$kw$items_DASH_by_DASH_id,cljs.core.cst$sym$items_DASH_by_DASH_id,cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_search_DASH_success,cljs.core.cst$sym$item_DASH_index], null)], null),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__24534__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__24534__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.list(cljs.core.cst$sym$handlers_SLASH_next_DASH_state,cljs.core.cst$sym$db,cljs.core.PersistentVector.EMPTY,cljs.core.cst$sym$fsm_SLASH_fsm,cljs.core.cst$kw$search),cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_search,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$query,cljs.core.cst$sym$query,cljs.core.cst$kw$items_DASH_by_DASH_id,cljs.core.cst$sym$items_DASH_by_DASH_id,cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_search_DASH_success,cljs.core.cst$sym$item_DASH_index], null)], null)], null),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__24534__auto__;
}catch (e25382){var e = e25382;
throw e;
}}):(function (p__25383,p__25384){
var map__25385 = p__25383;
var map__25385__$1 = cljs.core.__destructure_map(map__25385);
var map__25386 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25385__$1,cljs.core.cst$kw$db);
var map__25386__$1 = cljs.core.__destructure_map(map__25386);
var db = map__25386__$1;
var map__25387 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25386__$1,cljs.core.cst$kw$items);
var map__25387__$1 = cljs.core.__destructure_map(map__25387);
var items_by_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25387__$1,cljs.core.cst$kw$by_DASH_id);
var vec__25388 = p__25384;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25388,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25388,(1),null);
var query = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25388,(2),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,nw_calculator.event_handlers.next_state(db,cljs.core.PersistentVector.EMPTY,nw_calculator.fsm.fsm,cljs.core.cst$kw$search),cljs.core.cst$kw$nw_DASH_calculator$effects_SLASH_search,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$query,query,cljs.core.cst$kw$items_DASH_by_DASH_id,items_by_id,cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_search_DASH_success,item_index], null)], null)], null);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_clear_DASH_search,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__25391){
var vec__25392 = p__25391;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25392,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25392,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$item_DASH_index], null)], null),cljs.core.list(cljs.core.cst$sym$_DASH__GT_,cljs.core.cst$sym$db,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_items,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$item], null),cljs.core.PersistentArrayMap.EMPTY),cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search_DASH_results,cljs.core.cst$sym$item_DASH_index], null),cljs.core.PersistentVector.EMPTY))));

var result__24534__auto__ = (function (){var result__24541__auto__ = cljs.core.assoc_in((function (){var result__24541__auto__ = cljs.core.assoc_in((function (){var result__24534__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(2),cljs.core.cst$kw$result,result__24534__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__24534__auto__;
})(),(function (){var result__24534__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_items,(function (){var result__24534__auto__ = item_index;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(7),cljs.core.cst$kw$result,result__24534__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__24534__auto__;
})(),cljs.core.cst$kw$item], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(5),cljs.core.cst$kw$result,result__24534__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_items,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$item], null),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__24534__auto__;
})(),(function (){var result__24534__auto__ = cljs.core.PersistentArrayMap.EMPTY;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(9),cljs.core.cst$kw$result,result__24534__auto__,cljs.core.cst$kw$form,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__24534__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(3),cljs.core.cst$kw$result,result__24541__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_items,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$item], null),cljs.core.PersistentArrayMap.EMPTY),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__24541__auto__;
})(),(function (){var result__24534__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search_DASH_results,(function (){var result__24534__auto__ = item_index;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,3,cljs.core.cst$kw$syntax_DASH_order,(15),cljs.core.cst$kw$result,result__24534__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__24534__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(13),cljs.core.cst$kw$result,result__24534__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search_DASH_results,cljs.core.cst$sym$item_DASH_index], null),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__24534__auto__;
})(),(function (){var result__24534__auto__ = cljs.core.PersistentVector.EMPTY;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(16),cljs.core.cst$kw$result,result__24534__auto__,cljs.core.cst$kw$form,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__24534__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(11),cljs.core.cst$kw$result,result__24541__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search_DASH_results,cljs.core.cst$sym$item_DASH_index], null),cljs.core.PersistentVector.EMPTY),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__24541__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__24534__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$_DASH__GT_,cljs.core.cst$sym$db,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_items,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$item], null),cljs.core.PersistentArrayMap.EMPTY),cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search_DASH_results,cljs.core.cst$sym$item_DASH_index], null),cljs.core.PersistentVector.EMPTY)),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__24534__auto__;
}catch (e25395){var e = e25395;
throw e;
}}):(function (db,p__25396){
var vec__25397 = p__25396;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25397,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25397,(1),null);
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_items,item_index,cljs.core.cst$kw$item], null),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search_DASH_results,item_index], null),cljs.core.PersistentVector.EMPTY);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_select_DASH_item,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__25401){
var vec__25402 = p__25401;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25402,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25402,(1),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25402,(2),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$sym$item], null)], null),cljs.core.list(cljs.core.cst$sym$_DASH__GT_,cljs.core.cst$sym$db,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_items,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$item], null),cljs.core.cst$sym$item),cljs.core.list(cljs.core.cst$sym$update_DASH_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_items,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$amount_DASH_multiplier], null),cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_1], null),cljs.core.list(cljs.core.cst$sym$or,cljs.core.cst$sym$_PERCENT_1,(1)))),cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search_DASH_results,cljs.core.cst$sym$item_DASH_index], null),cljs.core.PersistentVector.EMPTY))));

var result__24534__auto__ = (function (){var result__24541__auto__ = cljs.core.assoc_in((function (){var result__24541__auto__ = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3((function (){var result__24541__auto__ = cljs.core.assoc_in((function (){var result__24534__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(2),cljs.core.cst$kw$result,result__24534__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__24534__auto__;
})(),(function (){var result__24534__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_items,(function (){var result__24534__auto__ = item_index;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(7),cljs.core.cst$kw$result,result__24534__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__24534__auto__;
})(),cljs.core.cst$kw$item], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(5),cljs.core.cst$kw$result,result__24534__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_items,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$item], null),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__24534__auto__;
})(),(function (){var result__24534__auto__ = item;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(9),cljs.core.cst$kw$result,result__24534__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$item,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__24534__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(3),cljs.core.cst$kw$result,result__24541__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_items,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$item], null),cljs.core.cst$sym$item),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__24541__auto__;
})(),(function (){var result__24534__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_items,(function (){var result__24534__auto__ = item_index;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,3,cljs.core.cst$kw$syntax_DASH_order,(14),cljs.core.cst$kw$result,result__24534__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__24534__auto__;
})(),cljs.core.cst$kw$amount_DASH_multiplier], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(12),cljs.core.cst$kw$result,result__24534__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_items,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$amount_DASH_multiplier], null),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__24534__auto__;
})(),(function (){var result__24534__auto__ = (function (p1__25400_SHARP_){
var result__24534__auto__ = (function (){var or__4212__auto__ = (function (){var result__24534__auto__ = p1__25400_SHARP_;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(19),cljs.core.cst$kw$result,result__24534__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$p1__25400_SHARP_,cljs.core.cst$kw$indent_DASH_level,(4)], null));

return result__24534__auto__;
})();
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (1);
}
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(18),cljs.core.cst$kw$result,result__24534__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$or,cljs.core.cst$sym$p1__25400_SHARP_,(1)),cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__24534__auto__;
});
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(16),cljs.core.cst$kw$result,result__24534__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__25400_SHARP_], null),cljs.core.list(cljs.core.cst$sym$or,cljs.core.cst$sym$p1__25400_SHARP_,(1))),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__24534__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(10),cljs.core.cst$kw$result,result__24541__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$update_DASH_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_items,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$amount_DASH_multiplier], null),cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__25400_SHARP_], null),cljs.core.list(cljs.core.cst$sym$or,cljs.core.cst$sym$p1__25400_SHARP_,(1)))),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__24541__auto__;
})(),(function (){var result__24534__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search_DASH_results,(function (){var result__24534__auto__ = item_index;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,4,cljs.core.cst$kw$syntax_DASH_order,(25),cljs.core.cst$kw$result,result__24534__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__24534__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(23),cljs.core.cst$kw$result,result__24534__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search_DASH_results,cljs.core.cst$sym$item_DASH_index], null),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__24534__auto__;
})(),(function (){var result__24534__auto__ = cljs.core.PersistentVector.EMPTY;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(26),cljs.core.cst$kw$result,result__24534__auto__,cljs.core.cst$kw$form,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__24534__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(21),cljs.core.cst$kw$result,result__24541__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search_DASH_results,cljs.core.cst$sym$item_DASH_index], null),cljs.core.PersistentVector.EMPTY),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__24541__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__24534__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$_DASH__GT_,cljs.core.cst$sym$db,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_items,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$item], null),cljs.core.cst$sym$item),cljs.core.list(cljs.core.cst$sym$update_DASH_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_items,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$amount_DASH_multiplier], null),cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__25400_SHARP_], null),cljs.core.list(cljs.core.cst$sym$or,cljs.core.cst$sym$p1__25400_SHARP_,(1)))),cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search_DASH_results,cljs.core.cst$sym$item_DASH_index], null),cljs.core.PersistentVector.EMPTY)),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__24534__auto__;
}catch (e25405){var e = e25405;
throw e;
}}):(function (db,p__25406){
var vec__25407 = p__25406;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25407,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25407,(1),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25407,(2),null);
return cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_items,item_index,cljs.core.cst$kw$item], null),item),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_items,item_index,cljs.core.cst$kw$amount_DASH_multiplier], null),(function (p1__25400_SHARP_){
var or__4212__auto__ = p1__25400_SHARP_;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (1);
}
})),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search_DASH_results,item_index], null),cljs.core.PersistentVector.EMPTY);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_set_DASH_amount_DASH_multiplier,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__25410){
var vec__25411 = p__25410;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25411,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25411,(1),null);
var multiplier = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25411,(2),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$sym$multiplier], null)], null),cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_items,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$amount_DASH_multiplier], null),cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$or,cljs.core.list(cljs.core.cst$sym$js_SLASH_isNaN,cljs.core.cst$sym$multiplier),cljs.core.list(cljs.core.cst$sym$_LT__EQ_,cljs.core.cst$sym$multiplier,(0))),(1),cljs.core.cst$sym$multiplier))));

var result__24534__auto__ = cljs.core.assoc_in((function (){var result__24534__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(2),cljs.core.cst$kw$result,result__24534__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__24534__auto__;
})(),(function (){var result__24534__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_items,(function (){var result__24534__auto__ = item_index;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(5),cljs.core.cst$kw$result,result__24534__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__24534__auto__;
})(),cljs.core.cst$kw$amount_DASH_multiplier], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(3),cljs.core.cst$kw$result,result__24534__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_items,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$amount_DASH_multiplier], null),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__24534__auto__;
})(),(function (){var result__24534__auto__ = (cljs.core.truth_((function (){var result__24534__auto__ = (function (){var or__4212__auto__ = (function (){var result__24534__auto__ = isNaN((function (){var result__24534__auto__ = multiplier;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(10),cljs.core.cst$kw$result,result__24534__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$multiplier,cljs.core.cst$kw$indent_DASH_level,(4)], null));

return result__24534__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(9),cljs.core.cst$kw$result,result__24534__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$js_SLASH_isNaN,cljs.core.cst$sym$multiplier),cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__24534__auto__;
})();
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var result__24534__auto__ = ((function (){var result__24534__auto__ = multiplier;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,3,cljs.core.cst$kw$syntax_DASH_order,(12),cljs.core.cst$kw$result,result__24534__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$multiplier,cljs.core.cst$kw$indent_DASH_level,(4)], null));

return result__24534__auto__;
})() <= (0));
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(11),cljs.core.cst$kw$result,result__24534__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$_LT__EQ_,cljs.core.cst$sym$multiplier,(0)),cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__24534__auto__;
}
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(8),cljs.core.cst$kw$result,result__24534__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$or,cljs.core.list(cljs.core.cst$sym$js_SLASH_isNaN,cljs.core.cst$sym$multiplier),cljs.core.list(cljs.core.cst$sym$_LT__EQ_,cljs.core.cst$sym$multiplier,(0))),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__24534__auto__;
})())?(1):(function (){var result__24534__auto__ = multiplier;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,4,cljs.core.cst$kw$syntax_DASH_order,(15),cljs.core.cst$kw$result,result__24534__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$multiplier,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__24534__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(7),cljs.core.cst$kw$result,result__24534__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$or,cljs.core.list(cljs.core.cst$sym$js_SLASH_isNaN,cljs.core.cst$sym$multiplier),cljs.core.list(cljs.core.cst$sym$_LT__EQ_,cljs.core.cst$sym$multiplier,(0))),(1),cljs.core.cst$sym$multiplier),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__24534__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__24534__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_items,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$amount_DASH_multiplier], null),cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$or,cljs.core.list(cljs.core.cst$sym$js_SLASH_isNaN,cljs.core.cst$sym$multiplier),cljs.core.list(cljs.core.cst$sym$_LT__EQ_,cljs.core.cst$sym$multiplier,(0))),(1),cljs.core.cst$sym$multiplier)),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__24534__auto__;
}catch (e25414){var e = e25414;
throw e;
}}):(function (db,p__25415){
var vec__25416 = p__25415;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25416,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25416,(1),null);
var multiplier = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25416,(2),null);
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

var result__24534__auto__ = cljs.core.update.cljs$core$IFn$_invoke$arity$4((function (){var result__24534__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(2),cljs.core.cst$kw$result,result__24534__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__24534__auto__;
})(),cljs.core.cst$kw$selected_DASH_items,(function (){var result__24534__auto__ = cljs.core.conj;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(4),cljs.core.cst$kw$result,result__24534__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$conj,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__24534__auto__;
})(),(function (){var result__24534__auto__ = nw_calculator.defaults.empty_selected_item;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(5),cljs.core.cst$kw$result,result__24534__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$df_SLASH_empty_DASH_selected_DASH_item,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__24534__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__24534__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$update,cljs.core.cst$sym$db,cljs.core.cst$kw$selected_DASH_items,cljs.core.cst$sym$conj,cljs.core.cst$sym$df_SLASH_empty_DASH_selected_DASH_item),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__24534__auto__;
}catch (e25419){var e = e25419;
throw e;
}}):(function (db,_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,cljs.core.cst$kw$selected_DASH_items,cljs.core.conj,nw_calculator.defaults.empty_selected_item);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_delete_DASH_item,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__25420){
var vec__25421 = p__25420;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25421,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25421,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$fn_DASH_traced_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$item_DASH_index], null)], null),cljs.core.list(cljs.core.cst$sym$update,cljs.core.cst$sym$db,cljs.core.cst$kw$selected_DASH_items,cljs.core.cst$sym$util_SLASH_vec_DASH_remove_DASH_nth,cljs.core.cst$sym$item_DASH_index)));

var result__24534__auto__ = cljs.core.update.cljs$core$IFn$_invoke$arity$4((function (){var result__24534__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(2),cljs.core.cst$kw$result,result__24534__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__24534__auto__;
})(),cljs.core.cst$kw$selected_DASH_items,(function (){var result__24534__auto__ = nw_calculator.utilities.vec_remove_nth;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(4),cljs.core.cst$kw$result,result__24534__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$util_SLASH_vec_DASH_remove_DASH_nth,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__24534__auto__;
})(),(function (){var result__24534__auto__ = item_index;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,2,cljs.core.cst$kw$syntax_DASH_order,(5),cljs.core.cst$kw$result,result__24534__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$item_DASH_index,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__24534__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$num_DASH_seen,1,cljs.core.cst$kw$syntax_DASH_order,(1),cljs.core.cst$kw$result,result__24534__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$update,cljs.core.cst$sym$db,cljs.core.cst$kw$selected_DASH_items,cljs.core.cst$sym$util_SLASH_vec_DASH_remove_DASH_nth,cljs.core.cst$sym$item_DASH_index),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__24534__auto__;
}catch (e25424){var e = e25424;
throw e;
}}):(function (db,p__25425){
var vec__25426 = p__25425;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25426,(0),null);
var item_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25426,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,cljs.core.cst$kw$selected_DASH_items,nw_calculator.utilities.vec_remove_nth,item_index);
})));
