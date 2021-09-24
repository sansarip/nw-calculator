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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__20367){
var map__20368 = p__20367;
var map__20368__$1 = cljs.core.__destructure_map(map__20368);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20368__$1,cljs.core.cst$kw$operation);
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20368__$1,cljs.core.cst$kw$op_DASH_type);
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20368__$1,cljs.core.cst$kw$tags);
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20368__$1,cljs.core.cst$kw$child_DASH_of);
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
var seq__20369_20393 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__20370_20394 = null;
var count__20371_20395 = (0);
var i__20372_20396 = (0);
while(true){
if((i__20372_20396 < count__20371_20395)){
var vec__20383_20397 = chunk__20370_20394.cljs$core$IIndexed$_nth$arity$2(null,i__20372_20396);
var k_20398 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20383_20397,(0),null);
var cb_20399 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20383_20397,(1),null);
try{var G__20387_20400 = cljs.core.deref(re_frame.trace.traces);
(cb_20399.cljs$core$IFn$_invoke$arity$1 ? cb_20399.cljs$core$IFn$_invoke$arity$1(G__20387_20400) : cb_20399.call(null,G__20387_20400));
}catch (e20386){var e_20401 = e20386;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_20398,"while storing",cljs.core.deref(re_frame.trace.traces),e_20401], 0));
}

var G__20402 = seq__20369_20393;
var G__20403 = chunk__20370_20394;
var G__20404 = count__20371_20395;
var G__20405 = (i__20372_20396 + (1));
seq__20369_20393 = G__20402;
chunk__20370_20394 = G__20403;
count__20371_20395 = G__20404;
i__20372_20396 = G__20405;
continue;
} else {
var temp__5753__auto___20406 = cljs.core.seq(seq__20369_20393);
if(temp__5753__auto___20406){
var seq__20369_20407__$1 = temp__5753__auto___20406;
if(cljs.core.chunked_seq_QMARK_(seq__20369_20407__$1)){
var c__4638__auto___20408 = cljs.core.chunk_first(seq__20369_20407__$1);
var G__20409 = cljs.core.chunk_rest(seq__20369_20407__$1);
var G__20410 = c__4638__auto___20408;
var G__20411 = cljs.core.count(c__4638__auto___20408);
var G__20412 = (0);
seq__20369_20393 = G__20409;
chunk__20370_20394 = G__20410;
count__20371_20395 = G__20411;
i__20372_20396 = G__20412;
continue;
} else {
var vec__20388_20413 = cljs.core.first(seq__20369_20407__$1);
var k_20414 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20388_20413,(0),null);
var cb_20415 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20388_20413,(1),null);
try{var G__20392_20416 = cljs.core.deref(re_frame.trace.traces);
(cb_20415.cljs$core$IFn$_invoke$arity$1 ? cb_20415.cljs$core$IFn$_invoke$arity$1(G__20392_20416) : cb_20415.call(null,G__20392_20416));
}catch (e20391){var e_20417 = e20391;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_20414,"while storing",cljs.core.deref(re_frame.trace.traces),e_20417], 0));
}

var G__20418 = cljs.core.next(seq__20369_20407__$1);
var G__20419 = null;
var G__20420 = (0);
var G__20421 = (0);
seq__20369_20393 = G__20418;
chunk__20370_20394 = G__20419;
count__20371_20395 = G__20420;
i__20372_20396 = G__20421;
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
