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
var _STAR_current_trace_STAR__orig_val__19957 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__19958 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$event_SLASH_do_DASH_fx], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__19958);

try{try{var effects = cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,cljs.core.cst$kw$db);
var temp__5753__auto___19993 = cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___19993)){
var new_db_19994 = temp__5753__auto___19993;
var fexpr__19959_19995 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,cljs.core.cst$kw$db,false);
(fexpr__19959_19995.cljs$core$IFn$_invoke$arity$1 ? fexpr__19959_19995.cljs$core$IFn$_invoke$arity$1(new_db_19994) : fexpr__19959_19995.call(null,new_db_19994));
} else {
}

var seq__19960 = cljs.core.seq(effects_without_db);
var chunk__19961 = null;
var count__19962 = (0);
var i__19963 = (0);
while(true){
if((i__19963 < count__19962)){
var vec__19970 = chunk__19961.cljs$core$IIndexed$_nth$arity$2(null,i__19963);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19970,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19970,(1),null);
var temp__5751__auto___19996 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___19996)){
var effect_fn_19997 = temp__5751__auto___19996;
(effect_fn_19997.cljs$core$IFn$_invoke$arity$1 ? effect_fn_19997.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_19997.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__19998 = seq__19960;
var G__19999 = chunk__19961;
var G__20000 = count__19962;
var G__20001 = (i__19963 + (1));
seq__19960 = G__19998;
chunk__19961 = G__19999;
count__19962 = G__20000;
i__19963 = G__20001;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__19960);
if(temp__5753__auto__){
var seq__19960__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19960__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__19960__$1);
var G__20002 = cljs.core.chunk_rest(seq__19960__$1);
var G__20003 = c__4638__auto__;
var G__20004 = cljs.core.count(c__4638__auto__);
var G__20005 = (0);
seq__19960 = G__20002;
chunk__19961 = G__20003;
count__19962 = G__20004;
i__19963 = G__20005;
continue;
} else {
var vec__19973 = cljs.core.first(seq__19960__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19973,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19973,(1),null);
var temp__5751__auto___20006 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___20006)){
var effect_fn_20007 = temp__5751__auto___20006;
(effect_fn_20007.cljs$core$IFn$_invoke$arity$1 ? effect_fn_20007.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_20007.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__20008 = cljs.core.next(seq__19960__$1);
var G__20009 = null;
var G__20010 = (0);
var G__20011 = (0);
seq__19960 = G__20008;
chunk__19961 = G__20009;
count__19962 = G__20010;
i__19963 = G__20011;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__19746__auto___20012 = re_frame.interop.now();
var duration__19747__auto___20013 = (end__19746__auto___20012 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__19747__auto___20013,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__19746__auto___20012);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__19957);
}} else {
var effects = cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,cljs.core.cst$kw$db);
var temp__5753__auto___20014 = cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___20014)){
var new_db_20015 = temp__5753__auto___20014;
var fexpr__19976_20016 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,cljs.core.cst$kw$db,false);
(fexpr__19976_20016.cljs$core$IFn$_invoke$arity$1 ? fexpr__19976_20016.cljs$core$IFn$_invoke$arity$1(new_db_20015) : fexpr__19976_20016.call(null,new_db_20015));
} else {
}

var seq__19977 = cljs.core.seq(effects_without_db);
var chunk__19978 = null;
var count__19979 = (0);
var i__19980 = (0);
while(true){
if((i__19980 < count__19979)){
var vec__19987 = chunk__19978.cljs$core$IIndexed$_nth$arity$2(null,i__19980);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19987,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19987,(1),null);
var temp__5751__auto___20017 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___20017)){
var effect_fn_20018 = temp__5751__auto___20017;
(effect_fn_20018.cljs$core$IFn$_invoke$arity$1 ? effect_fn_20018.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_20018.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__20019 = seq__19977;
var G__20020 = chunk__19978;
var G__20021 = count__19979;
var G__20022 = (i__19980 + (1));
seq__19977 = G__20019;
chunk__19978 = G__20020;
count__19979 = G__20021;
i__19980 = G__20022;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__19977);
if(temp__5753__auto__){
var seq__19977__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19977__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__19977__$1);
var G__20023 = cljs.core.chunk_rest(seq__19977__$1);
var G__20024 = c__4638__auto__;
var G__20025 = cljs.core.count(c__4638__auto__);
var G__20026 = (0);
seq__19977 = G__20023;
chunk__19978 = G__20024;
count__19979 = G__20025;
i__19980 = G__20026;
continue;
} else {
var vec__19990 = cljs.core.first(seq__19977__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19990,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19990,(1),null);
var temp__5751__auto___20027 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___20027)){
var effect_fn_20028 = temp__5751__auto___20027;
(effect_fn_20028.cljs$core$IFn$_invoke$arity$1 ? effect_fn_20028.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_20028.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__20029 = cljs.core.next(seq__19977__$1);
var G__20030 = null;
var G__20031 = (0);
var G__20032 = (0);
seq__19977 = G__20029;
chunk__19978 = G__20030;
count__19979 = G__20031;
i__19980 = G__20032;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__20033){
var map__20034 = p__20033;
var map__20034__$1 = cljs.core.__destructure_map(map__20034);
var effect = map__20034__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20034__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20034__$1,cljs.core.cst$kw$dispatch);
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
var seq__20035 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__20036 = null;
var count__20037 = (0);
var i__20038 = (0);
while(true){
if((i__20038 < count__20037)){
var effect = chunk__20036.cljs$core$IIndexed$_nth$arity$2(null,i__20038);
re_frame.fx.dispatch_later(effect);


var G__20039 = seq__20035;
var G__20040 = chunk__20036;
var G__20041 = count__20037;
var G__20042 = (i__20038 + (1));
seq__20035 = G__20039;
chunk__20036 = G__20040;
count__20037 = G__20041;
i__20038 = G__20042;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__20035);
if(temp__5753__auto__){
var seq__20035__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20035__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__20035__$1);
var G__20043 = cljs.core.chunk_rest(seq__20035__$1);
var G__20044 = c__4638__auto__;
var G__20045 = cljs.core.count(c__4638__auto__);
var G__20046 = (0);
seq__20035 = G__20043;
chunk__20036 = G__20044;
count__20037 = G__20045;
i__20038 = G__20046;
continue;
} else {
var effect = cljs.core.first(seq__20035__$1);
re_frame.fx.dispatch_later(effect);


var G__20047 = cljs.core.next(seq__20035__$1);
var G__20048 = null;
var G__20049 = (0);
var G__20050 = (0);
seq__20035 = G__20047;
chunk__20036 = G__20048;
count__20037 = G__20049;
i__20038 = G__20050;
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
var seq__20051 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__20052 = null;
var count__20053 = (0);
var i__20054 = (0);
while(true){
if((i__20054 < count__20053)){
var vec__20061 = chunk__20052.cljs$core$IIndexed$_nth$arity$2(null,i__20054);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20061,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20061,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$db,effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___20067 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___20067)){
var effect_fn_20068 = temp__5751__auto___20067;
(effect_fn_20068.cljs$core$IFn$_invoke$arity$1 ? effect_fn_20068.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_20068.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__20069 = seq__20051;
var G__20070 = chunk__20052;
var G__20071 = count__20053;
var G__20072 = (i__20054 + (1));
seq__20051 = G__20069;
chunk__20052 = G__20070;
count__20053 = G__20071;
i__20054 = G__20072;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__20051);
if(temp__5753__auto__){
var seq__20051__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20051__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__20051__$1);
var G__20073 = cljs.core.chunk_rest(seq__20051__$1);
var G__20074 = c__4638__auto__;
var G__20075 = cljs.core.count(c__4638__auto__);
var G__20076 = (0);
seq__20051 = G__20073;
chunk__20052 = G__20074;
count__20053 = G__20075;
i__20054 = G__20076;
continue;
} else {
var vec__20064 = cljs.core.first(seq__20051__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20064,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20064,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$db,effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___20077 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___20077)){
var effect_fn_20078 = temp__5751__auto___20077;
(effect_fn_20078.cljs$core$IFn$_invoke$arity$1 ? effect_fn_20078.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_20078.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__20079 = cljs.core.next(seq__20051__$1);
var G__20080 = null;
var G__20081 = (0);
var G__20082 = (0);
seq__20051 = G__20079;
chunk__20052 = G__20080;
count__20053 = G__20081;
i__20054 = G__20082;
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
var seq__20083 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__20084 = null;
var count__20085 = (0);
var i__20086 = (0);
while(true){
if((i__20086 < count__20085)){
var event = chunk__20084.cljs$core$IIndexed$_nth$arity$2(null,i__20086);
re_frame.router.dispatch(event);


var G__20087 = seq__20083;
var G__20088 = chunk__20084;
var G__20089 = count__20085;
var G__20090 = (i__20086 + (1));
seq__20083 = G__20087;
chunk__20084 = G__20088;
count__20085 = G__20089;
i__20086 = G__20090;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__20083);
if(temp__5753__auto__){
var seq__20083__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20083__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__20083__$1);
var G__20091 = cljs.core.chunk_rest(seq__20083__$1);
var G__20092 = c__4638__auto__;
var G__20093 = cljs.core.count(c__4638__auto__);
var G__20094 = (0);
seq__20083 = G__20091;
chunk__20084 = G__20092;
count__20085 = G__20093;
i__20086 = G__20094;
continue;
} else {
var event = cljs.core.first(seq__20083__$1);
re_frame.router.dispatch(event);


var G__20095 = cljs.core.next(seq__20083__$1);
var G__20096 = null;
var G__20097 = (0);
var G__20098 = (0);
seq__20083 = G__20095;
chunk__20084 = G__20096;
count__20085 = G__20097;
i__20086 = G__20098;
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
var seq__20099 = cljs.core.seq(value);
var chunk__20100 = null;
var count__20101 = (0);
var i__20102 = (0);
while(true){
if((i__20102 < count__20101)){
var event = chunk__20100.cljs$core$IIndexed$_nth$arity$2(null,i__20102);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__20103 = seq__20099;
var G__20104 = chunk__20100;
var G__20105 = count__20101;
var G__20106 = (i__20102 + (1));
seq__20099 = G__20103;
chunk__20100 = G__20104;
count__20101 = G__20105;
i__20102 = G__20106;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__20099);
if(temp__5753__auto__){
var seq__20099__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20099__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__20099__$1);
var G__20107 = cljs.core.chunk_rest(seq__20099__$1);
var G__20108 = c__4638__auto__;
var G__20109 = cljs.core.count(c__4638__auto__);
var G__20110 = (0);
seq__20099 = G__20107;
chunk__20100 = G__20108;
count__20101 = G__20109;
i__20102 = G__20110;
continue;
} else {
var event = cljs.core.first(seq__20099__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__20111 = cljs.core.next(seq__20099__$1);
var G__20112 = null;
var G__20113 = (0);
var G__20114 = (0);
seq__20099 = G__20111;
chunk__20100 = G__20112;
count__20101 = G__20113;
i__20102 = G__20114;
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
