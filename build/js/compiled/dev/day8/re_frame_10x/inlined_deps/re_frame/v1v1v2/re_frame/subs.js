// Compiled by ClojureScript 1.10.879 {:optimizations :none}
goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.db');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.utils');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace');
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.kind = new cljs.core.Keyword(null,"sub","sub",-2093760025);
if(cljs.core.truth_(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.kind))){
} else {
throw (new Error("Assert failed: (day8.re-frame-10x.inlined-deps.re-frame.v1v1v2.re-frame.registrar/kinds kind)"));
}
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.query__GT_reaction = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * calls `on-dispose` for each cached item, 
 * which will cause the value to be removed from the cache
 */
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.clear_subscription_cache_BANG_ = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$subs$clear_subscription_cache_BANG_(){
var seq__33589_33605 = cljs.core.seq.call(null,cljs.core.deref.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.query__GT_reaction));
var chunk__33590_33606 = null;
var count__33591_33607 = (0);
var i__33592_33608 = (0);
while(true){
if((i__33592_33608 < count__33591_33607)){
var vec__33599_33609 = cljs.core._nth.call(null,chunk__33590_33606,i__33592_33608);
var k_33610 = cljs.core.nth.call(null,vec__33599_33609,(0),null);
var rxn_33611 = cljs.core.nth.call(null,vec__33599_33609,(1),null);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.dispose_BANG_.call(null,rxn_33611);


var G__33612 = seq__33589_33605;
var G__33613 = chunk__33590_33606;
var G__33614 = count__33591_33607;
var G__33615 = (i__33592_33608 + (1));
seq__33589_33605 = G__33612;
chunk__33590_33606 = G__33613;
count__33591_33607 = G__33614;
i__33592_33608 = G__33615;
continue;
} else {
var temp__5753__auto___33616 = cljs.core.seq.call(null,seq__33589_33605);
if(temp__5753__auto___33616){
var seq__33589_33617__$1 = temp__5753__auto___33616;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33589_33617__$1)){
var c__4638__auto___33618 = cljs.core.chunk_first.call(null,seq__33589_33617__$1);
var G__33619 = cljs.core.chunk_rest.call(null,seq__33589_33617__$1);
var G__33620 = c__4638__auto___33618;
var G__33621 = cljs.core.count.call(null,c__4638__auto___33618);
var G__33622 = (0);
seq__33589_33605 = G__33619;
chunk__33590_33606 = G__33620;
count__33591_33607 = G__33621;
i__33592_33608 = G__33622;
continue;
} else {
var vec__33602_33623 = cljs.core.first.call(null,seq__33589_33617__$1);
var k_33624 = cljs.core.nth.call(null,vec__33602_33623,(0),null);
var rxn_33625 = cljs.core.nth.call(null,vec__33602_33623,(1),null);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.dispose_BANG_.call(null,rxn_33625);


var G__33626 = cljs.core.next.call(null,seq__33589_33617__$1);
var G__33627 = null;
var G__33628 = (0);
var G__33629 = (0);
seq__33589_33605 = G__33626;
chunk__33590_33606 = G__33627;
count__33591_33607 = G__33628;
i__33592_33608 = G__33629;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.deref.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.query__GT_reaction)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: The subscription cache isn't empty after being cleared");
} else {
return null;
}
});
/**
 * Unregisters all existing subscription handlers
 */
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.clear_all_handlers_BANG_ = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$subs$clear_all_handlers_BANG_(){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.clear_handlers.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.kind);

return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.clear_subscription_cache_BANG_.call(null);
});
/**
 * cache the reaction r
 */
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.cache_and_return = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$subs$cache_and_return(query_v,dynv,r){
var cache_key = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_v,dynv], null);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.add_on_dispose_BANG_.call(null,r,(function (){
if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR__orig_val__33630 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__33631 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.utils.first_in_vector.call(null,query_v),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_v,new cljs.core.Keyword(null,"reaction","reaction",490869788),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.reagent_id.call(null,r)], null)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__33631);

try{try{return cljs.core.swap_BANG_.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.query__GT_reaction,(function (query_cache){
if(((cljs.core.contains_QMARK_.call(null,query_cache,cache_key)) && ((r === cljs.core.get.call(null,query_cache,cache_key))))){
return cljs.core.dissoc.call(null,query_cache,cache_key);
} else {
return query_cache;
}
}));
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__33351__auto___33632 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now.call(null);
var duration__33352__auto___33633 = (end__33351__auto___33632 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__33352__auto___33633,new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now.call(null)));

day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__33351__auto___33632);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__33630);
}} else {
return cljs.core.swap_BANG_.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.query__GT_reaction,(function (query_cache){
if(((cljs.core.contains_QMARK_.call(null,query_cache,cache_key)) && ((r === cljs.core.get.call(null,query_cache,cache_key))))){
return cljs.core.dissoc.call(null,query_cache,cache_key);
} else {
return query_cache;
}
}));
}
}));

cljs.core.swap_BANG_.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.query__GT_reaction,(function (query_cache){
if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.debug_enabled_QMARK_){
if(cljs.core.contains_QMARK_.call(null,query_cache,cache_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: Adding a new subscription to the cache while there is an existing subscription in the cache",cache_key);
} else {
}
} else {
}

return cljs.core.assoc.call(null,query_cache,cache_key,r);
}));

if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__33353__auto___33634 = cljs.core.merge.call(null,cljs.core.update.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reaction","reaction",490869788),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.reagent_id.call(null,r)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reaction","reaction",490869788),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.reagent_id.call(null,r)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__33353__auto___33634);

} else {
}

return r;
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.cache_lookup = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$subs$cache_lookup(var_args){
var G__33636 = arguments.length;
switch (G__33636) {
case 1:
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1 = (function (query_v){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.cache_lookup.call(null,query_v,cljs.core.PersistentVector.EMPTY);
}));

(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2 = (function (query_v,dyn_v){
return cljs.core.get.call(null,cljs.core.deref.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.query__GT_reaction),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_v,dyn_v], null));
}));

(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.cache_lookup.cljs$lang$maxFixedArity = 2);

day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.subscribe = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$subs$subscribe(var_args){
var G__33639 = arguments.length;
switch (G__33639) {
case 1:
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1 = (function (query){
if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR__orig_val__33640 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__33641 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.utils.first_in_vector.call(null,query),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","create","sub/create",-1301317560),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query], null)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__33641);

try{try{var temp__5751__auto__ = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.cache_lookup.call(null,query);
if(cljs.core.truth_(temp__5751__auto__)){
var cached = temp__5751__auto__;
if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__33353__auto___33645 = cljs.core.merge.call(null,cljs.core.update.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__33353__auto___33645);

} else {
}

return cached;
} else {
var query_id = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.utils.first_in_vector.call(null,query);
var handler_fn = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.kind,query_id);
if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__33353__auto___33646 = cljs.core.merge.call(null,cljs.core.update.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__33353__auto___33646);

} else {
}

if((handler_fn == null)){
if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__33353__auto___33647 = cljs.core.merge.call(null,cljs.core.update.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__33353__auto___33647);

} else {
}

return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["re-frame: no subscription handler registered for: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),". Returning a nil subscription."].join(''));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.cache_and_return.call(null,query,cljs.core.PersistentVector.EMPTY,handler_fn.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.db.app_db,query));
}
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__33351__auto___33648 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now.call(null);
var duration__33352__auto___33649 = (end__33351__auto___33648 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__33352__auto___33649,new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now.call(null)));

day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__33351__auto___33648);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__33640);
}} else {
var temp__5751__auto__ = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.cache_lookup.call(null,query);
if(cljs.core.truth_(temp__5751__auto__)){
var cached = temp__5751__auto__;
if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__33353__auto___33650 = cljs.core.merge.call(null,cljs.core.update.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__33353__auto___33650);

} else {
}

return cached;
} else {
var query_id = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.utils.first_in_vector.call(null,query);
var handler_fn = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.kind,query_id);
if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__33353__auto___33651 = cljs.core.merge.call(null,cljs.core.update.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__33353__auto___33651);

} else {
}

if((handler_fn == null)){
if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__33353__auto___33652 = cljs.core.merge.call(null,cljs.core.update.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__33353__auto___33652);

} else {
}

return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["re-frame: no subscription handler registered for: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),". Returning a nil subscription."].join(''));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.cache_and_return.call(null,query,cljs.core.PersistentVector.EMPTY,handler_fn.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.db.app_db,query));
}
}
}
}));

(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$2 = (function (query,dynv){
if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR__orig_val__33642 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__33643 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.utils.first_in_vector.call(null,query),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","create","sub/create",-1301317560),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query,new cljs.core.Keyword(null,"dyn-v","dyn-v",949994592),dynv], null)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__33643);

try{try{var temp__5751__auto__ = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.cache_lookup.call(null,query,dynv);
if(cljs.core.truth_(temp__5751__auto__)){
var cached = temp__5751__auto__;
if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__33353__auto___33653 = cljs.core.merge.call(null,cljs.core.update.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__33353__auto___33653);

} else {
}

return cached;
} else {
var query_id = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.utils.first_in_vector.call(null,query);
var handler_fn = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.kind,query_id);
if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__33353__auto___33654 = cljs.core.merge.call(null,cljs.core.update.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__33353__auto___33654);

} else {
}

if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.debug_enabled_QMARK_){
var temp__5753__auto___33655 = cljs.core.not_empty.call(null,cljs.core.remove.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.ratom_QMARK_,dynv));
if(cljs.core.truth_(temp__5753__auto___33655)){
var not_reactive_33656 = temp__5753__auto___33655;
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: your subscription's dynamic parameters that don't implement IReactiveAtom:",not_reactive_33656);
} else {
}
} else {
}

if((handler_fn == null)){
if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__33353__auto___33657 = cljs.core.merge.call(null,cljs.core.update.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__33353__auto___33657);

} else {
}

return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["re-frame: no subscription handler registered for: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),". Returning a nil subscription."].join(''));
} else {
var dyn_vals = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.make_reaction.call(null,(function (){
return cljs.core.mapv.call(null,cljs.core.deref,dynv);
}));
var sub = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.make_reaction.call(null,(function (){
return handler_fn.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.db.app_db,query,cljs.core.deref.call(null,dyn_vals));
}));
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.cache_and_return.call(null,query,dynv,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.make_reaction.call(null,(function (){
return cljs.core.deref.call(null,cljs.core.deref.call(null,sub));
})));
}
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__33351__auto___33658 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now.call(null);
var duration__33352__auto___33659 = (end__33351__auto___33658 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__33352__auto___33659,new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now.call(null)));

day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__33351__auto___33658);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__33642);
}} else {
var temp__5751__auto__ = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.cache_lookup.call(null,query,dynv);
if(cljs.core.truth_(temp__5751__auto__)){
var cached = temp__5751__auto__;
if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__33353__auto___33660 = cljs.core.merge.call(null,cljs.core.update.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__33353__auto___33660);

} else {
}

return cached;
} else {
var query_id = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.utils.first_in_vector.call(null,query);
var handler_fn = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.kind,query_id);
if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__33353__auto___33661 = cljs.core.merge.call(null,cljs.core.update.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__33353__auto___33661);

} else {
}

if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.debug_enabled_QMARK_){
var temp__5753__auto___33662 = cljs.core.not_empty.call(null,cljs.core.remove.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.ratom_QMARK_,dynv));
if(cljs.core.truth_(temp__5753__auto___33662)){
var not_reactive_33663 = temp__5753__auto___33662;
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: your subscription's dynamic parameters that don't implement IReactiveAtom:",not_reactive_33663);
} else {
}
} else {
}

if((handler_fn == null)){
if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__33353__auto___33664 = cljs.core.merge.call(null,cljs.core.update.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__33353__auto___33664);

} else {
}

return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["re-frame: no subscription handler registered for: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),". Returning a nil subscription."].join(''));
} else {
var dyn_vals = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.make_reaction.call(null,(function (){
return cljs.core.mapv.call(null,cljs.core.deref,dynv);
}));
var sub = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.make_reaction.call(null,(function (){
return handler_fn.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.db.app_db,query,cljs.core.deref.call(null,dyn_vals));
}));
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.cache_and_return.call(null,query,dynv,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.make_reaction.call(null,(function (){
return cljs.core.deref.call(null,cljs.core.deref.call(null,sub));
})));
}
}
}
}));

(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.subscribe.cljs$lang$maxFixedArity = 2);

/**
 * Returns a new version of 'm' in which 'f' has been applied to each value.
 *   (map-vals inc {:a 4, :b 2}) => {:a 5, :b 3}
 */
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.map_vals = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$subs$map_vals(f,m){
return cljs.core.into.call(null,cljs.core.empty.call(null,m),cljs.core.map.call(null,(function (p__33665){
var vec__33666 = p__33665;
var k = cljs.core.nth.call(null,vec__33666,(0),null);
var v = cljs.core.nth.call(null,vec__33666,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,v)], null);
})),m);
});
/**
 * Runs f over signals. Signals may take several
 *   forms, this function handles all of them.
 */
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.map_signals = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$subs$map_signals(f,signals){
if(cljs.core.sequential_QMARK_.call(null,signals)){
return cljs.core.map.call(null,f,signals);
} else {
if(cljs.core.map_QMARK_.call(null,signals)){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.map_vals.call(null,f,signals);
} else {
if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.deref_QMARK_.call(null,signals)){
return f.call(null,signals);
} else {
return cljs.core.List.EMPTY;

}
}
}
});
/**
 * Coerces x to a seq if it isn't one already
 */
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.to_seq = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$subs$to_seq(x){
if(cljs.core.sequential_QMARK_.call(null,x)){
return x;
} else {
return (new cljs.core.List(null,x,null,(1),null));
}
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.deref_input_signals = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$subs$deref_input_signals(signals,query_id){
var dereffed_signals = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.map_signals.call(null,cljs.core.deref,signals);
if(cljs.core.sequential_QMARK_.call(null,signals)){
cljs.core.map.call(null,cljs.core.deref,signals);
} else {
if(cljs.core.map_QMARK_.call(null,signals)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.map_vals.call(null,cljs.core.deref,signals);
} else {
if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.deref_QMARK_.call(null,signals)){
cljs.core.deref.call(null,signals);
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: in the reg-sub for",query_id,", the input-signals function returns:",signals);

}
}
}

if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__33353__auto___33669 = cljs.core.merge.call(null,cljs.core.update.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input-signals","input-signals",563633497),cljs.core.doall.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.to_seq.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.map_signals.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.reagent_id,signals)))], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input-signals","input-signals",563633497),cljs.core.doall.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.to_seq.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.map_signals.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.reagent_id,signals)))], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__33353__auto___33669);

} else {
}

return dereffed_signals;
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.reg_sub = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$subs$reg_sub(var_args){
var args__4824__auto__ = [];
var len__4818__auto___33680 = arguments.length;
var i__4819__auto___33681 = (0);
while(true){
if((i__4819__auto___33681 < len__4818__auto___33680)){
args__4824__auto__.push((arguments[i__4819__auto___33681]));

var G__33682 = (i__4819__auto___33681 + (1));
i__4819__auto___33681 = G__33682;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic = (function (query_id,args){
var computation_fn = cljs.core.last.call(null,args);
var input_args = cljs.core.butlast.call(null,args);
var err_header = ["re-frame: reg-sub for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),", "].join('');
var inputs_fn = (function (){var G__33672 = cljs.core.count.call(null,input_args);
switch (G__33672) {
case (0):
return (function() {
var G__33684 = null;
var G__33684__1 = (function (_){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.db.app_db;
});
var G__33684__2 = (function (_,___$1){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.db.app_db;
});
G__33684 = function(_,___$1){
switch(arguments.length){
case 1:
return G__33684__1.call(this,_);
case 2:
return G__33684__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33684.cljs$core$IFn$_invoke$arity$1 = G__33684__1;
G__33684.cljs$core$IFn$_invoke$arity$2 = G__33684__2;
return G__33684;
})()

break;
case (1):
var f = cljs.core.first.call(null,input_args);
if(cljs.core.fn_QMARK_.call(null,f)){
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),err_header,"2nd argument expected to be an inputs function, got:",f);
}

return f;

break;
case (2):
var vec__33673 = input_args;
var marker = cljs.core.nth.call(null,vec__33673,(0),null);
var vec = cljs.core.nth.call(null,vec__33673,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"<-","<-",760412998),marker)){
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),err_header,"expected :<-, got:",marker);
}

return (function() {
var day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$subs$inp_fn = null;
var day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$subs$inp_fn__1 = (function (_){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.subscribe.call(null,vec);
});
var day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$subs$inp_fn__2 = (function (_,___$1){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.subscribe.call(null,vec);
});
day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$subs$inp_fn = function(_,___$1){
switch(arguments.length){
case 1:
return day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$subs$inp_fn__1.call(this,_);
case 2:
return day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$subs$inp_fn__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$1 = day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$subs$inp_fn__1;
day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$2 = day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$subs$inp_fn__2;
return day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$subs$inp_fn;
})()

break;
default:
var pairs = cljs.core.partition.call(null,(2),input_args);
var markers = cljs.core.map.call(null,cljs.core.first,pairs);
var vecs = cljs.core.map.call(null,cljs.core.last,pairs);
if(((cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"<-","<-",760412998),null], null), null),markers)) && (cljs.core.every_QMARK_.call(null,cljs.core.vector_QMARK_,vecs)))){
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),err_header,"expected pairs of :<- and vectors, got:",pairs);
}

return (function() {
var day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$subs$inp_fn = null;
var day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$subs$inp_fn__1 = (function (_){
return cljs.core.map.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.subscribe,vecs);
});
var day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$subs$inp_fn__2 = (function (_,___$1){
return cljs.core.map.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.subscribe,vecs);
});
day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$subs$inp_fn = function(_,___$1){
switch(arguments.length){
case 1:
return day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$subs$inp_fn__1.call(this,_);
case 2:
return day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$subs$inp_fn__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$1 = day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$subs$inp_fn__1;
day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$2 = day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$subs$inp_fn__2;
return day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$subs$inp_fn;
})()

}
})();
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.register_handler.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.kind,query_id,(function() {
var day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$subs$subs_handler_fn = null;
var day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$subs$subs_handler_fn__2 = (function (db,query_vec){
var subscriptions = inputs_fn.call(null,query_vec,null);
var reaction_id = cljs.core.atom.call(null,null);
var reaction = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.make_reaction.call(null,(function (){
if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR__orig_val__33676 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__33677 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.utils.first_in_vector.call(null,query_vec),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","run","sub/run",-1821315581),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_vec,new cljs.core.Keyword(null,"reaction","reaction",490869788),cljs.core.deref.call(null,reaction_id)], null)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__33677);

try{try{var subscription = computation_fn.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec);
if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__33353__auto___33685 = cljs.core.merge.call(null,cljs.core.update.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__33353__auto___33685);

} else {
}

return subscription;
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__33351__auto___33686 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now.call(null);
var duration__33352__auto___33687 = (end__33351__auto___33686 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__33352__auto___33687,new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now.call(null)));

day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__33351__auto___33686);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__33676);
}} else {
var subscription = computation_fn.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec);
if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__33353__auto___33688 = cljs.core.merge.call(null,cljs.core.update.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__33353__auto___33688);

} else {
}

return subscription;
}
}));
cljs.core.reset_BANG_.call(null,reaction_id,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.reagent_id.call(null,reaction));

return reaction;
});
var day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$subs$subs_handler_fn__3 = (function (db,query_vec,dyn_vec){
var subscriptions = inputs_fn.call(null,query_vec,dyn_vec);
var reaction_id = cljs.core.atom.call(null,null);
var reaction = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.make_reaction.call(null,(function (){
if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR__orig_val__33678 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__33679 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.utils.first_in_vector.call(null,query_vec),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","run","sub/run",-1821315581),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_vec,new cljs.core.Keyword(null,"dyn-v","dyn-v",949994592),dyn_vec,new cljs.core.Keyword(null,"reaction","reaction",490869788),cljs.core.deref.call(null,reaction_id)], null)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__33679);

try{try{var subscription = computation_fn.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec,dyn_vec);
if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__33353__auto___33689 = cljs.core.merge.call(null,cljs.core.update.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__33353__auto___33689);

} else {
}

return subscription;
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__33351__auto___33690 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now.call(null);
var duration__33352__auto___33691 = (end__33351__auto___33690 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__33352__auto___33691,new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now.call(null)));

day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__33351__auto___33690);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__33678);
}} else {
var subscription = computation_fn.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec,dyn_vec);
if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__33353__auto___33692 = cljs.core.merge.call(null,cljs.core.update.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__33353__auto___33692);

} else {
}

return subscription;
}
}));
cljs.core.reset_BANG_.call(null,reaction_id,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.reagent_id.call(null,reaction));

return reaction;
});
day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$subs$subs_handler_fn = function(db,query_vec,dyn_vec){
switch(arguments.length){
case 2:
return day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$subs$subs_handler_fn__2.call(this,db,query_vec);
case 3:
return day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$subs$subs_handler_fn__3.call(this,db,query_vec,dyn_vec);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$subs$subs_handler_fn.cljs$core$IFn$_invoke$arity$2 = day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$subs$subs_handler_fn__2;
day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$subs$subs_handler_fn.cljs$core$IFn$_invoke$arity$3 = day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$subs$subs_handler_fn__3;
return day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$subs$subs_handler_fn;
})()
);
}));

(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.reg_sub.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.reg_sub.cljs$lang$applyTo = (function (seq33670){
var G__33671 = cljs.core.first.call(null,seq33670);
var seq33670__$1 = cljs.core.next.call(null,seq33670);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33671,seq33670__$1);
}));


//# sourceMappingURL=subs.js.map
