// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});

/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(cljs.core.truth_(re_frame.trace.trace_enabled_QMARK_)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__19046){
var map__19047 = p__19046;
var map__19047__$1 = cljs.core.__destructure_map(map__19047);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19047__$1,cljs.core.cst$kw$operation);
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19047__$1,cljs.core.cst$kw$op_DASH_type);
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19047__$1,cljs.core.cst$kw$tags);
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19047__$1,cljs.core.cst$kw$child_DASH_of);
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$id,re_frame.trace.next_id(),cljs.core.cst$kw$operation,operation,cljs.core.cst$kw$op_DASH_type,op_type,cljs.core.cst$kw$tags,tags,cljs.core.cst$kw$child_DASH_of,(function (){var or__4212__auto__ = child_of;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),cljs.core.cst$kw$start,re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__19048_19072 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__19049_19073 = null;
var count__19050_19074 = (0);
var i__19051_19075 = (0);
while(true){
if((i__19051_19075 < count__19050_19074)){
var vec__19062_19076 = chunk__19049_19073.cljs$core$IIndexed$_nth$arity$2(null,i__19051_19075);
var k_19077 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19062_19076,(0),null);
var cb_19078 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19062_19076,(1),null);
try{var G__19066_19079 = cljs.core.deref(re_frame.trace.traces);
(cb_19078.cljs$core$IFn$_invoke$arity$1 ? cb_19078.cljs$core$IFn$_invoke$arity$1(G__19066_19079) : cb_19078.call(null,G__19066_19079));
}catch (e19065){var e_19080 = e19065;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_19077,"while storing",cljs.core.deref(re_frame.trace.traces),e_19080], 0));
}

var G__19081 = seq__19048_19072;
var G__19082 = chunk__19049_19073;
var G__19083 = count__19050_19074;
var G__19084 = (i__19051_19075 + (1));
seq__19048_19072 = G__19081;
chunk__19049_19073 = G__19082;
count__19050_19074 = G__19083;
i__19051_19075 = G__19084;
continue;
} else {
var temp__5753__auto___19085 = cljs.core.seq(seq__19048_19072);
if(temp__5753__auto___19085){
var seq__19048_19086__$1 = temp__5753__auto___19085;
if(cljs.core.chunked_seq_QMARK_(seq__19048_19086__$1)){
var c__4638__auto___19087 = cljs.core.chunk_first(seq__19048_19086__$1);
var G__19088 = cljs.core.chunk_rest(seq__19048_19086__$1);
var G__19089 = c__4638__auto___19087;
var G__19090 = cljs.core.count(c__4638__auto___19087);
var G__19091 = (0);
seq__19048_19072 = G__19088;
chunk__19049_19073 = G__19089;
count__19050_19074 = G__19090;
i__19051_19075 = G__19091;
continue;
} else {
var vec__19067_19092 = cljs.core.first(seq__19048_19086__$1);
var k_19093 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19067_19092,(0),null);
var cb_19094 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19067_19092,(1),null);
try{var G__19071_19095 = cljs.core.deref(re_frame.trace.traces);
(cb_19094.cljs$core$IFn$_invoke$arity$1 ? cb_19094.cljs$core$IFn$_invoke$arity$1(G__19071_19095) : cb_19094.call(null,G__19071_19095));
}catch (e19070){var e_19096 = e19070;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_19093,"while storing",cljs.core.deref(re_frame.trace.traces),e_19096], 0));
}

var G__19097 = cljs.core.next(seq__19048_19086__$1);
var G__19098 = null;
var G__19099 = (0);
var G__19100 = (0);
seq__19048_19072 = G__19097;
chunk__19049_19073 = G__19098;
count__19050_19074 = G__19099;
i__19051_19075 = G__19100;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});
