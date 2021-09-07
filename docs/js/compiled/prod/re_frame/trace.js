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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__19043){
var map__19044 = p__19043;
var map__19044__$1 = cljs.core.__destructure_map(map__19044);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19044__$1,cljs.core.cst$kw$operation);
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19044__$1,cljs.core.cst$kw$op_DASH_type);
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19044__$1,cljs.core.cst$kw$tags);
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19044__$1,cljs.core.cst$kw$child_DASH_of);
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
var seq__19045_19069 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__19046_19070 = null;
var count__19047_19071 = (0);
var i__19048_19072 = (0);
while(true){
if((i__19048_19072 < count__19047_19071)){
var vec__19059_19073 = chunk__19046_19070.cljs$core$IIndexed$_nth$arity$2(null,i__19048_19072);
var k_19074 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19059_19073,(0),null);
var cb_19075 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19059_19073,(1),null);
try{var G__19063_19076 = cljs.core.deref(re_frame.trace.traces);
(cb_19075.cljs$core$IFn$_invoke$arity$1 ? cb_19075.cljs$core$IFn$_invoke$arity$1(G__19063_19076) : cb_19075.call(null,G__19063_19076));
}catch (e19062){var e_19077 = e19062;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_19074,"while storing",cljs.core.deref(re_frame.trace.traces),e_19077], 0));
}

var G__19078 = seq__19045_19069;
var G__19079 = chunk__19046_19070;
var G__19080 = count__19047_19071;
var G__19081 = (i__19048_19072 + (1));
seq__19045_19069 = G__19078;
chunk__19046_19070 = G__19079;
count__19047_19071 = G__19080;
i__19048_19072 = G__19081;
continue;
} else {
var temp__5753__auto___19082 = cljs.core.seq(seq__19045_19069);
if(temp__5753__auto___19082){
var seq__19045_19083__$1 = temp__5753__auto___19082;
if(cljs.core.chunked_seq_QMARK_(seq__19045_19083__$1)){
var c__4638__auto___19084 = cljs.core.chunk_first(seq__19045_19083__$1);
var G__19085 = cljs.core.chunk_rest(seq__19045_19083__$1);
var G__19086 = c__4638__auto___19084;
var G__19087 = cljs.core.count(c__4638__auto___19084);
var G__19088 = (0);
seq__19045_19069 = G__19085;
chunk__19046_19070 = G__19086;
count__19047_19071 = G__19087;
i__19048_19072 = G__19088;
continue;
} else {
var vec__19064_19089 = cljs.core.first(seq__19045_19083__$1);
var k_19090 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19064_19089,(0),null);
var cb_19091 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19064_19089,(1),null);
try{var G__19068_19092 = cljs.core.deref(re_frame.trace.traces);
(cb_19091.cljs$core$IFn$_invoke$arity$1 ? cb_19091.cljs$core$IFn$_invoke$arity$1(G__19068_19092) : cb_19091.call(null,G__19068_19092));
}catch (e19067){var e_19093 = e19067;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_19090,"while storing",cljs.core.deref(re_frame.trace.traces),e_19093], 0));
}

var G__19094 = cljs.core.next(seq__19045_19083__$1);
var G__19095 = null;
var G__19096 = (0);
var G__19097 = (0);
seq__19045_19069 = G__19094;
chunk__19046_19070 = G__19095;
count__19047_19071 = G__19096;
i__19048_19072 = G__19097;
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
