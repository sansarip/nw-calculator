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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__21465){
var map__21466 = p__21465;
var map__21466__$1 = cljs.core.__destructure_map(map__21466);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21466__$1,cljs.core.cst$kw$operation);
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21466__$1,cljs.core.cst$kw$op_DASH_type);
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21466__$1,cljs.core.cst$kw$tags);
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21466__$1,cljs.core.cst$kw$child_DASH_of);
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
var seq__21467_21491 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__21468_21492 = null;
var count__21469_21493 = (0);
var i__21470_21494 = (0);
while(true){
if((i__21470_21494 < count__21469_21493)){
var vec__21481_21495 = chunk__21468_21492.cljs$core$IIndexed$_nth$arity$2(null,i__21470_21494);
var k_21496 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21481_21495,(0),null);
var cb_21497 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21481_21495,(1),null);
try{var G__21485_21498 = cljs.core.deref(re_frame.trace.traces);
(cb_21497.cljs$core$IFn$_invoke$arity$1 ? cb_21497.cljs$core$IFn$_invoke$arity$1(G__21485_21498) : cb_21497.call(null,G__21485_21498));
}catch (e21484){var e_21499 = e21484;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_21496,"while storing",cljs.core.deref(re_frame.trace.traces),e_21499], 0));
}

var G__21500 = seq__21467_21491;
var G__21501 = chunk__21468_21492;
var G__21502 = count__21469_21493;
var G__21503 = (i__21470_21494 + (1));
seq__21467_21491 = G__21500;
chunk__21468_21492 = G__21501;
count__21469_21493 = G__21502;
i__21470_21494 = G__21503;
continue;
} else {
var temp__5753__auto___21504 = cljs.core.seq(seq__21467_21491);
if(temp__5753__auto___21504){
var seq__21467_21505__$1 = temp__5753__auto___21504;
if(cljs.core.chunked_seq_QMARK_(seq__21467_21505__$1)){
var c__4638__auto___21506 = cljs.core.chunk_first(seq__21467_21505__$1);
var G__21507 = cljs.core.chunk_rest(seq__21467_21505__$1);
var G__21508 = c__4638__auto___21506;
var G__21509 = cljs.core.count(c__4638__auto___21506);
var G__21510 = (0);
seq__21467_21491 = G__21507;
chunk__21468_21492 = G__21508;
count__21469_21493 = G__21509;
i__21470_21494 = G__21510;
continue;
} else {
var vec__21486_21511 = cljs.core.first(seq__21467_21505__$1);
var k_21512 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21486_21511,(0),null);
var cb_21513 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21486_21511,(1),null);
try{var G__21490_21514 = cljs.core.deref(re_frame.trace.traces);
(cb_21513.cljs$core$IFn$_invoke$arity$1 ? cb_21513.cljs$core$IFn$_invoke$arity$1(G__21490_21514) : cb_21513.call(null,G__21490_21514));
}catch (e21489){var e_21515 = e21489;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_21512,"while storing",cljs.core.deref(re_frame.trace.traces),e_21515], 0));
}

var G__21516 = cljs.core.next(seq__21467_21505__$1);
var G__21517 = null;
var G__21518 = (0);
var G__21519 = (0);
seq__21467_21491 = G__21516;
chunk__21468_21492 = G__21517;
count__21469_21493 = G__21518;
i__21470_21494 = G__21519;
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
