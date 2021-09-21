// Compiled by ClojureScript 1.10.879 {:optimizations :none}
goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.events');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.db');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.utils');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace');
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.events.kind = new cljs.core.Keyword(null,"event","event",301435442);
if(cljs.core.truth_(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.events.kind))){
} else {
throw (new Error("Assert failed: (day8.re-frame-10x.inlined-deps.re-frame.v1v1v2.re-frame.registrar/kinds kind)"));
}
/**
 * `interceptors` might have nested collections, and contain nil elements.
 *   return a flat collection, with all nils removed.
 *   This function is 9/10 about giving good error messages.
 */
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.events.flatten_and_remove_nils = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$events$flatten_and_remove_nils(id,interceptors){
var make_chain = (function (p1__33478_SHARP_){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,p1__33478_SHARP_));
});
if((!(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.debug_enabled_QMARK_))){
return make_chain.call(null,interceptors);
} else {
if(cljs.core.coll_QMARK_.call(null,interceptors)){
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering",id,", expected a collection of interceptors, got:",interceptors);
}

var chain = make_chain.call(null,interceptors);
if(cljs.core.empty_QMARK_.call(null,chain)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering",id,", given an empty interceptor chain");
} else {
}

var temp__5753__auto___33479 = cljs.core.first.call(null,cljs.core.remove.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__5753__auto___33479)){
var not_i_33480 = temp__5753__auto___33479;
if(cljs.core.fn_QMARK_.call(null,not_i_33480)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering",id,", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got:",not_i_33480);
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering",id,", expected interceptors, but got:",not_i_33480);
}
} else {
}

return chain;
}
});
/**
 * Associate the given event `id` with the given collection of `interceptors`.
 * 
 * `interceptors` may contain nested collections and there may be nils
 * at any level,so process this structure into a simple, nil-less vector
 * before registration.
 * 
 * Typically, an `event handler` will be at the end of the chain (wrapped
 * in an interceptor).
 */
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.events.register = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$events$register(id,interceptors){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.register_handler.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.events.kind,id,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.events.flatten_and_remove_nils.call(null,id,interceptors));
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.events._STAR_handling_STAR_ = null;
/**
 * Given an event vector `event-v`, look up the associated interceptor chain, and execute it.
 */
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.events.handle = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$events$handle(event_v){
var event_id = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.utils.first_in_vector.call(null,event_v);
var temp__5751__auto__ = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.events.kind,event_id,true);
if(cljs.core.truth_(temp__5751__auto__)){
var interceptors = temp__5751__auto__;
if(cljs.core.truth_(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.events._STAR_handling_STAR_)){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: while handling",day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.events._STAR_handling_STAR_,", dispatch-sync was called for",event_v,". You can't call dispatch-sync within an event handler.");
} else {
var _STAR_handling_STAR__orig_val__33481 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.events._STAR_handling_STAR_;
var _STAR_handling_STAR__temp_val__33482 = event_v;
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR__temp_val__33482);

try{if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR__orig_val__33483 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__33484 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),event_id,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.events.kind,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),event_v], null)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__33484);

try{try{if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__33353__auto___33485 = cljs.core.merge.call(null,cljs.core.update.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"app-db-before","app-db-before",-1442902645),cljs.core.deref.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.db.app_db)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"app-db-before","app-db-before",-1442902645),cljs.core.deref.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.db.app_db)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__33353__auto___33485);

} else {
}

day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor.execute.call(null,event_v,interceptors);

if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__33353__auto___33486 = cljs.core.merge.call(null,cljs.core.update.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"app-db-after","app-db-after",1477492964),cljs.core.deref.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.db.app_db)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"app-db-after","app-db-after",1477492964),cljs.core.deref.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.db.app_db)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__33353__auto___33486);

return null;
} else {
return null;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__33351__auto___33487 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now.call(null);
var duration__33352__auto___33488 = (end__33351__auto___33487 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__33352__auto___33488,new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now.call(null)));

day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__33351__auto___33487);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__33483);
}} else {
if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__33353__auto___33489 = cljs.core.merge.call(null,cljs.core.update.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"app-db-before","app-db-before",-1442902645),cljs.core.deref.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.db.app_db)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"app-db-before","app-db-before",-1442902645),cljs.core.deref.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.db.app_db)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__33353__auto___33489);

} else {
}

day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor.execute.call(null,event_v,interceptors);

if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__33353__auto___33490 = cljs.core.merge.call(null,cljs.core.update.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"app-db-after","app-db-after",1477492964),cljs.core.deref.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.db.app_db)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"app-db-after","app-db-after",1477492964),cljs.core.deref.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.db.app_db)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__33353__auto___33490);

return null;
} else {
return null;
}
}
}finally {(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR__orig_val__33481);
}}
} else {
return null;
}
});

//# sourceMappingURL=events.js.map
