// Compiled by ClojureScript 1.10.879 {:optimizations :none}
goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers');
goog.require('goog.functions');
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.id = cljs.core.atom.call(null,(0));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = null;
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.reset_tracing_BANG_ = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.id,(0));
});

/**
 * @define {boolean}
 */
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.trace_enabled_QMARK_ = goog.define("day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_ = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$trace$is_trace_enabled_QMARK_(){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.trace_enabled_QMARK_;
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.trace_cbs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v1v1v2 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v1v1v2 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.next_delivery !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.next_delivery = cljs.core.atom.call(null,(0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.register_trace_cb = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$trace$register_trace_cb(key,f){
if(cljs.core.truth_(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.trace_enabled_QMARK_)){
return cljs.core.swap_BANG_.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation.");
}
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.remove_trace_cb = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.next_id = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$trace$next_id(){
return cljs.core.swap_BANG_.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.id,cljs.core.inc);
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.start_trace = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$trace$start_trace(p__33373){
var map__33374 = p__33373;
var map__33374__$1 = cljs.core.__destructure_map.call(null,map__33374);
var operation = cljs.core.get.call(null,map__33374__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.call(null,map__33374__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.call(null,map__33374__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.call(null,map__33374__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.next_id.call(null),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4212__auto__ = child_of;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now.call(null)], null);
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.debounce_time = (50);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.debounce = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.schedule_debounce = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.debounce.call(null,(function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$trace$tracing_cb_debounced(){
var seq__33375_33395 = cljs.core.seq.call(null,cljs.core.deref.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.trace_cbs));
var chunk__33376_33396 = null;
var count__33377_33397 = (0);
var i__33378_33398 = (0);
while(true){
if((i__33378_33398 < count__33377_33397)){
var vec__33387_33399 = cljs.core._nth.call(null,chunk__33376_33396,i__33378_33398);
var k_33400 = cljs.core.nth.call(null,vec__33387_33399,(0),null);
var cb_33401 = cljs.core.nth.call(null,vec__33387_33399,(1),null);
try{cb_33401.call(null,cljs.core.deref.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces));
}catch (e33390){var e_33402 = e33390;
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_33400,"while storing",cljs.core.deref.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces),e_33402);
}

var G__33403 = seq__33375_33395;
var G__33404 = chunk__33376_33396;
var G__33405 = count__33377_33397;
var G__33406 = (i__33378_33398 + (1));
seq__33375_33395 = G__33403;
chunk__33376_33396 = G__33404;
count__33377_33397 = G__33405;
i__33378_33398 = G__33406;
continue;
} else {
var temp__5753__auto___33407 = cljs.core.seq.call(null,seq__33375_33395);
if(temp__5753__auto___33407){
var seq__33375_33408__$1 = temp__5753__auto___33407;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33375_33408__$1)){
var c__4638__auto___33409 = cljs.core.chunk_first.call(null,seq__33375_33408__$1);
var G__33410 = cljs.core.chunk_rest.call(null,seq__33375_33408__$1);
var G__33411 = c__4638__auto___33409;
var G__33412 = cljs.core.count.call(null,c__4638__auto___33409);
var G__33413 = (0);
seq__33375_33395 = G__33410;
chunk__33376_33396 = G__33411;
count__33377_33397 = G__33412;
i__33378_33398 = G__33413;
continue;
} else {
var vec__33391_33414 = cljs.core.first.call(null,seq__33375_33408__$1);
var k_33415 = cljs.core.nth.call(null,vec__33391_33414,(0),null);
var cb_33416 = cljs.core.nth.call(null,vec__33391_33414,(1),null);
try{cb_33416.call(null,cljs.core.deref.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces));
}catch (e33394){var e_33417 = e33394;
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_33415,"while storing",cljs.core.deref.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces),e_33417);
}

var G__33418 = cljs.core.next.call(null,seq__33375_33408__$1);
var G__33419 = null;
var G__33420 = (0);
var G__33421 = (0);
seq__33375_33395 = G__33418;
chunk__33376_33396 = G__33419;
count__33377_33397 = G__33420;
i__33378_33398 = G__33421;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.debounce_time);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.run_tracing_callbacks_BANG_ = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.next_delivery) - (25)) < now)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.schedule_debounce.call(null);

return cljs.core.reset_BANG_.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.next_delivery,(now + day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=trace.js.map
