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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__20396){
var map__20397 = p__20396;
var map__20397__$1 = cljs.core.__destructure_map(map__20397);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20397__$1,cljs.core.cst$kw$operation);
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20397__$1,cljs.core.cst$kw$op_DASH_type);
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20397__$1,cljs.core.cst$kw$tags);
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20397__$1,cljs.core.cst$kw$child_DASH_of);
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
var seq__20398_20422 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__20399_20423 = null;
var count__20400_20424 = (0);
var i__20401_20425 = (0);
while(true){
if((i__20401_20425 < count__20400_20424)){
var vec__20412_20426 = chunk__20399_20423.cljs$core$IIndexed$_nth$arity$2(null,i__20401_20425);
var k_20427 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20412_20426,(0),null);
var cb_20428 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20412_20426,(1),null);
try{var G__20416_20429 = cljs.core.deref(re_frame.trace.traces);
(cb_20428.cljs$core$IFn$_invoke$arity$1 ? cb_20428.cljs$core$IFn$_invoke$arity$1(G__20416_20429) : cb_20428.call(null,G__20416_20429));
}catch (e20415){var e_20430 = e20415;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_20427,"while storing",cljs.core.deref(re_frame.trace.traces),e_20430], 0));
}

var G__20431 = seq__20398_20422;
var G__20432 = chunk__20399_20423;
var G__20433 = count__20400_20424;
var G__20434 = (i__20401_20425 + (1));
seq__20398_20422 = G__20431;
chunk__20399_20423 = G__20432;
count__20400_20424 = G__20433;
i__20401_20425 = G__20434;
continue;
} else {
var temp__5753__auto___20435 = cljs.core.seq(seq__20398_20422);
if(temp__5753__auto___20435){
var seq__20398_20436__$1 = temp__5753__auto___20435;
if(cljs.core.chunked_seq_QMARK_(seq__20398_20436__$1)){
var c__4638__auto___20437 = cljs.core.chunk_first(seq__20398_20436__$1);
var G__20438 = cljs.core.chunk_rest(seq__20398_20436__$1);
var G__20439 = c__4638__auto___20437;
var G__20440 = cljs.core.count(c__4638__auto___20437);
var G__20441 = (0);
seq__20398_20422 = G__20438;
chunk__20399_20423 = G__20439;
count__20400_20424 = G__20440;
i__20401_20425 = G__20441;
continue;
} else {
var vec__20417_20442 = cljs.core.first(seq__20398_20436__$1);
var k_20443 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20417_20442,(0),null);
var cb_20444 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20417_20442,(1),null);
try{var G__20421_20445 = cljs.core.deref(re_frame.trace.traces);
(cb_20444.cljs$core$IFn$_invoke$arity$1 ? cb_20444.cljs$core$IFn$_invoke$arity$1(G__20421_20445) : cb_20444.call(null,G__20421_20445));
}catch (e20420){var e_20446 = e20420;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_20443,"while storing",cljs.core.deref(re_frame.trace.traces),e_20446], 0));
}

var G__20447 = cljs.core.next(seq__20398_20436__$1);
var G__20448 = null;
var G__20449 = (0);
var G__20450 = (0);
seq__20398_20422 = G__20447;
chunk__20399_20423 = G__20448;
count__20400_20424 = G__20449;
i__20401_20425 = G__20450;
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
