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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__21476){
var map__21477 = p__21476;
var map__21477__$1 = cljs.core.__destructure_map(map__21477);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21477__$1,cljs.core.cst$kw$operation);
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21477__$1,cljs.core.cst$kw$op_DASH_type);
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21477__$1,cljs.core.cst$kw$tags);
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21477__$1,cljs.core.cst$kw$child_DASH_of);
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
var seq__21478_21502 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__21479_21503 = null;
var count__21480_21504 = (0);
var i__21481_21505 = (0);
while(true){
if((i__21481_21505 < count__21480_21504)){
var vec__21492_21506 = chunk__21479_21503.cljs$core$IIndexed$_nth$arity$2(null,i__21481_21505);
var k_21507 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21492_21506,(0),null);
var cb_21508 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21492_21506,(1),null);
try{var G__21496_21509 = cljs.core.deref(re_frame.trace.traces);
(cb_21508.cljs$core$IFn$_invoke$arity$1 ? cb_21508.cljs$core$IFn$_invoke$arity$1(G__21496_21509) : cb_21508.call(null,G__21496_21509));
}catch (e21495){var e_21510 = e21495;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_21507,"while storing",cljs.core.deref(re_frame.trace.traces),e_21510], 0));
}

var G__21511 = seq__21478_21502;
var G__21512 = chunk__21479_21503;
var G__21513 = count__21480_21504;
var G__21514 = (i__21481_21505 + (1));
seq__21478_21502 = G__21511;
chunk__21479_21503 = G__21512;
count__21480_21504 = G__21513;
i__21481_21505 = G__21514;
continue;
} else {
var temp__5753__auto___21515 = cljs.core.seq(seq__21478_21502);
if(temp__5753__auto___21515){
var seq__21478_21516__$1 = temp__5753__auto___21515;
if(cljs.core.chunked_seq_QMARK_(seq__21478_21516__$1)){
var c__4638__auto___21517 = cljs.core.chunk_first(seq__21478_21516__$1);
var G__21518 = cljs.core.chunk_rest(seq__21478_21516__$1);
var G__21519 = c__4638__auto___21517;
var G__21520 = cljs.core.count(c__4638__auto___21517);
var G__21521 = (0);
seq__21478_21502 = G__21518;
chunk__21479_21503 = G__21519;
count__21480_21504 = G__21520;
i__21481_21505 = G__21521;
continue;
} else {
var vec__21497_21522 = cljs.core.first(seq__21478_21516__$1);
var k_21523 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21497_21522,(0),null);
var cb_21524 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21497_21522,(1),null);
try{var G__21501_21525 = cljs.core.deref(re_frame.trace.traces);
(cb_21524.cljs$core$IFn$_invoke$arity$1 ? cb_21524.cljs$core$IFn$_invoke$arity$1(G__21501_21525) : cb_21524.call(null,G__21501_21525));
}catch (e21500){var e_21526 = e21500;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_21523,"while storing",cljs.core.deref(re_frame.trace.traces),e_21526], 0));
}

var G__21527 = cljs.core.next(seq__21478_21516__$1);
var G__21528 = null;
var G__21529 = (0);
var G__21530 = (0);
seq__21478_21502 = G__21527;
chunk__21479_21503 = G__21528;
count__21480_21504 = G__21529;
i__21481_21505 = G__21530;
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
