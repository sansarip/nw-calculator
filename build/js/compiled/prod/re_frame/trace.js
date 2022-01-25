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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__21464){
var map__21465 = p__21464;
var map__21465__$1 = cljs.core.__destructure_map(map__21465);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21465__$1,cljs.core.cst$kw$operation);
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21465__$1,cljs.core.cst$kw$op_DASH_type);
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21465__$1,cljs.core.cst$kw$tags);
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21465__$1,cljs.core.cst$kw$child_DASH_of);
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
var seq__21466_21490 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__21467_21491 = null;
var count__21468_21492 = (0);
var i__21469_21493 = (0);
while(true){
if((i__21469_21493 < count__21468_21492)){
var vec__21480_21494 = chunk__21467_21491.cljs$core$IIndexed$_nth$arity$2(null,i__21469_21493);
var k_21495 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21480_21494,(0),null);
var cb_21496 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21480_21494,(1),null);
try{var G__21484_21497 = cljs.core.deref(re_frame.trace.traces);
(cb_21496.cljs$core$IFn$_invoke$arity$1 ? cb_21496.cljs$core$IFn$_invoke$arity$1(G__21484_21497) : cb_21496.call(null,G__21484_21497));
}catch (e21483){var e_21498 = e21483;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_21495,"while storing",cljs.core.deref(re_frame.trace.traces),e_21498], 0));
}

var G__21499 = seq__21466_21490;
var G__21500 = chunk__21467_21491;
var G__21501 = count__21468_21492;
var G__21502 = (i__21469_21493 + (1));
seq__21466_21490 = G__21499;
chunk__21467_21491 = G__21500;
count__21468_21492 = G__21501;
i__21469_21493 = G__21502;
continue;
} else {
var temp__5753__auto___21503 = cljs.core.seq(seq__21466_21490);
if(temp__5753__auto___21503){
var seq__21466_21504__$1 = temp__5753__auto___21503;
if(cljs.core.chunked_seq_QMARK_(seq__21466_21504__$1)){
var c__4638__auto___21505 = cljs.core.chunk_first(seq__21466_21504__$1);
var G__21506 = cljs.core.chunk_rest(seq__21466_21504__$1);
var G__21507 = c__4638__auto___21505;
var G__21508 = cljs.core.count(c__4638__auto___21505);
var G__21509 = (0);
seq__21466_21490 = G__21506;
chunk__21467_21491 = G__21507;
count__21468_21492 = G__21508;
i__21469_21493 = G__21509;
continue;
} else {
var vec__21485_21510 = cljs.core.first(seq__21466_21504__$1);
var k_21511 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21485_21510,(0),null);
var cb_21512 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21485_21510,(1),null);
try{var G__21489_21513 = cljs.core.deref(re_frame.trace.traces);
(cb_21512.cljs$core$IFn$_invoke$arity$1 ? cb_21512.cljs$core$IFn$_invoke$arity$1(G__21489_21513) : cb_21512.call(null,G__21489_21513));
}catch (e21488){var e_21514 = e21488;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_21511,"while storing",cljs.core.deref(re_frame.trace.traces),e_21514], 0));
}

var G__21515 = cljs.core.next(seq__21466_21504__$1);
var G__21516 = null;
var G__21517 = (0);
var G__21518 = (0);
seq__21466_21490 = G__21515;
chunk__21467_21491 = G__21516;
count__21468_21492 = G__21517;
i__21469_21493 = G__21518;
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
