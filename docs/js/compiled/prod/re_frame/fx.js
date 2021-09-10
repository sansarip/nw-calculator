// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = cljs.core.cst$kw$fx;
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$id,cljs.core.cst$kw$do_DASH_fx,cljs.core.cst$kw$after,(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__19923 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__19924 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$event_SLASH_do_DASH_fx], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__19924);

try{try{var effects = cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,cljs.core.cst$kw$db);
var temp__5753__auto___19959 = cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___19959)){
var new_db_19960 = temp__5753__auto___19959;
var fexpr__19925_19961 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,cljs.core.cst$kw$db,false);
(fexpr__19925_19961.cljs$core$IFn$_invoke$arity$1 ? fexpr__19925_19961.cljs$core$IFn$_invoke$arity$1(new_db_19960) : fexpr__19925_19961.call(null,new_db_19960));
} else {
}

var seq__19926 = cljs.core.seq(effects_without_db);
var chunk__19927 = null;
var count__19928 = (0);
var i__19929 = (0);
while(true){
if((i__19929 < count__19928)){
var vec__19936 = chunk__19927.cljs$core$IIndexed$_nth$arity$2(null,i__19929);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19936,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19936,(1),null);
var temp__5751__auto___19962 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___19962)){
var effect_fn_19963 = temp__5751__auto___19962;
(effect_fn_19963.cljs$core$IFn$_invoke$arity$1 ? effect_fn_19963.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_19963.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__19964 = seq__19926;
var G__19965 = chunk__19927;
var G__19966 = count__19928;
var G__19967 = (i__19929 + (1));
seq__19926 = G__19964;
chunk__19927 = G__19965;
count__19928 = G__19966;
i__19929 = G__19967;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__19926);
if(temp__5753__auto__){
var seq__19926__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19926__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__19926__$1);
var G__19968 = cljs.core.chunk_rest(seq__19926__$1);
var G__19969 = c__4638__auto__;
var G__19970 = cljs.core.count(c__4638__auto__);
var G__19971 = (0);
seq__19926 = G__19968;
chunk__19927 = G__19969;
count__19928 = G__19970;
i__19929 = G__19971;
continue;
} else {
var vec__19939 = cljs.core.first(seq__19926__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19939,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19939,(1),null);
var temp__5751__auto___19972 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___19972)){
var effect_fn_19973 = temp__5751__auto___19972;
(effect_fn_19973.cljs$core$IFn$_invoke$arity$1 ? effect_fn_19973.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_19973.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__19974 = cljs.core.next(seq__19926__$1);
var G__19975 = null;
var G__19976 = (0);
var G__19977 = (0);
seq__19926 = G__19974;
chunk__19927 = G__19975;
count__19928 = G__19976;
i__19929 = G__19977;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__19712__auto___19978 = re_frame.interop.now();
var duration__19713__auto___19979 = (end__19712__auto___19978 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__19713__auto___19979,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__19712__auto___19978);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__19923);
}} else {
var effects = cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,cljs.core.cst$kw$db);
var temp__5753__auto___19980 = cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___19980)){
var new_db_19981 = temp__5753__auto___19980;
var fexpr__19942_19982 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,cljs.core.cst$kw$db,false);
(fexpr__19942_19982.cljs$core$IFn$_invoke$arity$1 ? fexpr__19942_19982.cljs$core$IFn$_invoke$arity$1(new_db_19981) : fexpr__19942_19982.call(null,new_db_19981));
} else {
}

var seq__19943 = cljs.core.seq(effects_without_db);
var chunk__19944 = null;
var count__19945 = (0);
var i__19946 = (0);
while(true){
if((i__19946 < count__19945)){
var vec__19953 = chunk__19944.cljs$core$IIndexed$_nth$arity$2(null,i__19946);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19953,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19953,(1),null);
var temp__5751__auto___19983 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___19983)){
var effect_fn_19984 = temp__5751__auto___19983;
(effect_fn_19984.cljs$core$IFn$_invoke$arity$1 ? effect_fn_19984.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_19984.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__19985 = seq__19943;
var G__19986 = chunk__19944;
var G__19987 = count__19945;
var G__19988 = (i__19946 + (1));
seq__19943 = G__19985;
chunk__19944 = G__19986;
count__19945 = G__19987;
i__19946 = G__19988;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__19943);
if(temp__5753__auto__){
var seq__19943__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19943__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__19943__$1);
var G__19989 = cljs.core.chunk_rest(seq__19943__$1);
var G__19990 = c__4638__auto__;
var G__19991 = cljs.core.count(c__4638__auto__);
var G__19992 = (0);
seq__19943 = G__19989;
chunk__19944 = G__19990;
count__19945 = G__19991;
i__19946 = G__19992;
continue;
} else {
var vec__19956 = cljs.core.first(seq__19943__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19956,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19956,(1),null);
var temp__5751__auto___19993 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___19993)){
var effect_fn_19994 = temp__5751__auto___19993;
(effect_fn_19994.cljs$core$IFn$_invoke$arity$1 ? effect_fn_19994.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_19994.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__19995 = cljs.core.next(seq__19943__$1);
var G__19996 = null;
var G__19997 = (0);
var G__19998 = (0);
seq__19943 = G__19995;
chunk__19944 = G__19996;
count__19945 = G__19997;
i__19946 = G__19998;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__19999){
var map__20000 = p__19999;
var map__20000__$1 = cljs.core.__destructure_map(map__20000);
var effect = map__20000__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20000__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20000__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch_DASH_later,(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__20001 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__20002 = null;
var count__20003 = (0);
var i__20004 = (0);
while(true){
if((i__20004 < count__20003)){
var effect = chunk__20002.cljs$core$IIndexed$_nth$arity$2(null,i__20004);
re_frame.fx.dispatch_later(effect);


var G__20005 = seq__20001;
var G__20006 = chunk__20002;
var G__20007 = count__20003;
var G__20008 = (i__20004 + (1));
seq__20001 = G__20005;
chunk__20002 = G__20006;
count__20003 = G__20007;
i__20004 = G__20008;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__20001);
if(temp__5753__auto__){
var seq__20001__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20001__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__20001__$1);
var G__20009 = cljs.core.chunk_rest(seq__20001__$1);
var G__20010 = c__4638__auto__;
var G__20011 = cljs.core.count(c__4638__auto__);
var G__20012 = (0);
seq__20001 = G__20009;
chunk__20002 = G__20010;
count__20003 = G__20011;
i__20004 = G__20012;
continue;
} else {
var effect = cljs.core.first(seq__20001__$1);
re_frame.fx.dispatch_later(effect);


var G__20013 = cljs.core.next(seq__20001__$1);
var G__20014 = null;
var G__20015 = (0);
var G__20016 = (0);
seq__20001 = G__20013;
chunk__20002 = G__20014;
count__20003 = G__20015;
i__20004 = G__20016;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$fx,(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__20017 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__20018 = null;
var count__20019 = (0);
var i__20020 = (0);
while(true){
if((i__20020 < count__20019)){
var vec__20027 = chunk__20018.cljs$core$IIndexed$_nth$arity$2(null,i__20020);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20027,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20027,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$db,effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___20033 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___20033)){
var effect_fn_20034 = temp__5751__auto___20033;
(effect_fn_20034.cljs$core$IFn$_invoke$arity$1 ? effect_fn_20034.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_20034.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__20035 = seq__20017;
var G__20036 = chunk__20018;
var G__20037 = count__20019;
var G__20038 = (i__20020 + (1));
seq__20017 = G__20035;
chunk__20018 = G__20036;
count__20019 = G__20037;
i__20020 = G__20038;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__20017);
if(temp__5753__auto__){
var seq__20017__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20017__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__20017__$1);
var G__20039 = cljs.core.chunk_rest(seq__20017__$1);
var G__20040 = c__4638__auto__;
var G__20041 = cljs.core.count(c__4638__auto__);
var G__20042 = (0);
seq__20017 = G__20039;
chunk__20018 = G__20040;
count__20019 = G__20041;
i__20020 = G__20042;
continue;
} else {
var vec__20030 = cljs.core.first(seq__20017__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20030,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20030,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$db,effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___20043 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___20043)){
var effect_fn_20044 = temp__5751__auto___20043;
(effect_fn_20044.cljs$core$IFn$_invoke$arity$1 ? effect_fn_20044.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_20044.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__20045 = cljs.core.next(seq__20017__$1);
var G__20046 = null;
var G__20047 = (0);
var G__20048 = (0);
seq__20017 = G__20045;
chunk__20018 = G__20046;
count__20019 = G__20047;
i__20020 = G__20048;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch,(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch_DASH_n,(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__20049 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__20050 = null;
var count__20051 = (0);
var i__20052 = (0);
while(true){
if((i__20052 < count__20051)){
var event = chunk__20050.cljs$core$IIndexed$_nth$arity$2(null,i__20052);
re_frame.router.dispatch(event);


var G__20053 = seq__20049;
var G__20054 = chunk__20050;
var G__20055 = count__20051;
var G__20056 = (i__20052 + (1));
seq__20049 = G__20053;
chunk__20050 = G__20054;
count__20051 = G__20055;
i__20052 = G__20056;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__20049);
if(temp__5753__auto__){
var seq__20049__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20049__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__20049__$1);
var G__20057 = cljs.core.chunk_rest(seq__20049__$1);
var G__20058 = c__4638__auto__;
var G__20059 = cljs.core.count(c__4638__auto__);
var G__20060 = (0);
seq__20049 = G__20057;
chunk__20050 = G__20058;
count__20051 = G__20059;
i__20052 = G__20060;
continue;
} else {
var event = cljs.core.first(seq__20049__$1);
re_frame.router.dispatch(event);


var G__20061 = cljs.core.next(seq__20049__$1);
var G__20062 = null;
var G__20063 = (0);
var G__20064 = (0);
seq__20049 = G__20061;
chunk__20050 = G__20062;
count__20051 = G__20063;
i__20052 = G__20064;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$deregister_DASH_event_DASH_handler,(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__20065 = cljs.core.seq(value);
var chunk__20066 = null;
var count__20067 = (0);
var i__20068 = (0);
while(true){
if((i__20068 < count__20067)){
var event = chunk__20066.cljs$core$IIndexed$_nth$arity$2(null,i__20068);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__20069 = seq__20065;
var G__20070 = chunk__20066;
var G__20071 = count__20067;
var G__20072 = (i__20068 + (1));
seq__20065 = G__20069;
chunk__20066 = G__20070;
count__20067 = G__20071;
i__20068 = G__20072;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__20065);
if(temp__5753__auto__){
var seq__20065__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20065__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__20065__$1);
var G__20073 = cljs.core.chunk_rest(seq__20065__$1);
var G__20074 = c__4638__auto__;
var G__20075 = cljs.core.count(c__4638__auto__);
var G__20076 = (0);
seq__20065 = G__20073;
chunk__20066 = G__20074;
count__20067 = G__20075;
i__20068 = G__20076;
continue;
} else {
var event = cljs.core.first(seq__20065__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__20077 = cljs.core.next(seq__20065__$1);
var G__20078 = null;
var G__20079 = (0);
var G__20080 = (0);
seq__20065 = G__20077;
chunk__20066 = G__20078;
count__20067 = G__20079;
i__20068 = G__20080;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$db,(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));
