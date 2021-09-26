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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__21463){
var map__21464 = p__21463;
var map__21464__$1 = cljs.core.__destructure_map(map__21464);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21464__$1,cljs.core.cst$kw$operation);
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21464__$1,cljs.core.cst$kw$op_DASH_type);
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21464__$1,cljs.core.cst$kw$tags);
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21464__$1,cljs.core.cst$kw$child_DASH_of);
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
var seq__21465_21489 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__21466_21490 = null;
var count__21467_21491 = (0);
var i__21468_21492 = (0);
while(true){
if((i__21468_21492 < count__21467_21491)){
var vec__21479_21493 = chunk__21466_21490.cljs$core$IIndexed$_nth$arity$2(null,i__21468_21492);
var k_21494 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21479_21493,(0),null);
var cb_21495 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21479_21493,(1),null);
try{var G__21483_21496 = cljs.core.deref(re_frame.trace.traces);
(cb_21495.cljs$core$IFn$_invoke$arity$1 ? cb_21495.cljs$core$IFn$_invoke$arity$1(G__21483_21496) : cb_21495.call(null,G__21483_21496));
}catch (e21482){var e_21497 = e21482;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_21494,"while storing",cljs.core.deref(re_frame.trace.traces),e_21497], 0));
}

var G__21498 = seq__21465_21489;
var G__21499 = chunk__21466_21490;
var G__21500 = count__21467_21491;
var G__21501 = (i__21468_21492 + (1));
seq__21465_21489 = G__21498;
chunk__21466_21490 = G__21499;
count__21467_21491 = G__21500;
i__21468_21492 = G__21501;
continue;
} else {
var temp__5753__auto___21502 = cljs.core.seq(seq__21465_21489);
if(temp__5753__auto___21502){
var seq__21465_21503__$1 = temp__5753__auto___21502;
if(cljs.core.chunked_seq_QMARK_(seq__21465_21503__$1)){
var c__4638__auto___21504 = cljs.core.chunk_first(seq__21465_21503__$1);
var G__21505 = cljs.core.chunk_rest(seq__21465_21503__$1);
var G__21506 = c__4638__auto___21504;
var G__21507 = cljs.core.count(c__4638__auto___21504);
var G__21508 = (0);
seq__21465_21489 = G__21505;
chunk__21466_21490 = G__21506;
count__21467_21491 = G__21507;
i__21468_21492 = G__21508;
continue;
} else {
var vec__21484_21509 = cljs.core.first(seq__21465_21503__$1);
var k_21510 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21484_21509,(0),null);
var cb_21511 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21484_21509,(1),null);
try{var G__21488_21512 = cljs.core.deref(re_frame.trace.traces);
(cb_21511.cljs$core$IFn$_invoke$arity$1 ? cb_21511.cljs$core$IFn$_invoke$arity$1(G__21488_21512) : cb_21511.call(null,G__21488_21512));
}catch (e21487){var e_21513 = e21487;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_21510,"while storing",cljs.core.deref(re_frame.trace.traces),e_21513], 0));
}

var G__21514 = cljs.core.next(seq__21465_21503__$1);
var G__21515 = null;
var G__21516 = (0);
var G__21517 = (0);
seq__21465_21489 = G__21514;
chunk__21466_21490 = G__21515;
count__21467_21491 = G__21516;
i__21468_21492 = G__21517;
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
