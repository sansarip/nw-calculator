// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = cljs.core.cst$kw$fx;
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$id,cljs.core.cst$kw$do_DASH_fx,cljs.core.cst$kw$after,(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__20556 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__20557 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$event_SLASH_do_DASH_fx], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__20557);

try{try{var effects = cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,cljs.core.cst$kw$db);
var temp__5753__auto___20592 = cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___20592)){
var new_db_20593 = temp__5753__auto___20592;
var fexpr__20558_20594 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,cljs.core.cst$kw$db,false);
(fexpr__20558_20594.cljs$core$IFn$_invoke$arity$1 ? fexpr__20558_20594.cljs$core$IFn$_invoke$arity$1(new_db_20593) : fexpr__20558_20594.call(null,new_db_20593));
} else {
}

var seq__20559 = cljs.core.seq(effects_without_db);
var chunk__20560 = null;
var count__20561 = (0);
var i__20562 = (0);
while(true){
if((i__20562 < count__20561)){
var vec__20569 = chunk__20560.cljs$core$IIndexed$_nth$arity$2(null,i__20562);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20569,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20569,(1),null);
var temp__5751__auto___20595 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___20595)){
var effect_fn_20596 = temp__5751__auto___20595;
(effect_fn_20596.cljs$core$IFn$_invoke$arity$1 ? effect_fn_20596.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_20596.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__20597 = seq__20559;
var G__20598 = chunk__20560;
var G__20599 = count__20561;
var G__20600 = (i__20562 + (1));
seq__20559 = G__20597;
chunk__20560 = G__20598;
count__20561 = G__20599;
i__20562 = G__20600;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__20559);
if(temp__5753__auto__){
var seq__20559__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20559__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__20559__$1);
var G__20601 = cljs.core.chunk_rest(seq__20559__$1);
var G__20602 = c__4638__auto__;
var G__20603 = cljs.core.count(c__4638__auto__);
var G__20604 = (0);
seq__20559 = G__20601;
chunk__20560 = G__20602;
count__20561 = G__20603;
i__20562 = G__20604;
continue;
} else {
var vec__20572 = cljs.core.first(seq__20559__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20572,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20572,(1),null);
var temp__5751__auto___20605 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___20605)){
var effect_fn_20606 = temp__5751__auto___20605;
(effect_fn_20606.cljs$core$IFn$_invoke$arity$1 ? effect_fn_20606.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_20606.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__20607 = cljs.core.next(seq__20559__$1);
var G__20608 = null;
var G__20609 = (0);
var G__20610 = (0);
seq__20559 = G__20607;
chunk__20560 = G__20608;
count__20561 = G__20609;
i__20562 = G__20610;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__20345__auto___20611 = re_frame.interop.now();
var duration__20346__auto___20612 = (end__20345__auto___20611 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__20346__auto___20612,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__20345__auto___20611);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__20556);
}} else {
var effects = cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,cljs.core.cst$kw$db);
var temp__5753__auto___20613 = cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___20613)){
var new_db_20614 = temp__5753__auto___20613;
var fexpr__20575_20615 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,cljs.core.cst$kw$db,false);
(fexpr__20575_20615.cljs$core$IFn$_invoke$arity$1 ? fexpr__20575_20615.cljs$core$IFn$_invoke$arity$1(new_db_20614) : fexpr__20575_20615.call(null,new_db_20614));
} else {
}

var seq__20576 = cljs.core.seq(effects_without_db);
var chunk__20577 = null;
var count__20578 = (0);
var i__20579 = (0);
while(true){
if((i__20579 < count__20578)){
var vec__20586 = chunk__20577.cljs$core$IIndexed$_nth$arity$2(null,i__20579);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20586,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20586,(1),null);
var temp__5751__auto___20616 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___20616)){
var effect_fn_20617 = temp__5751__auto___20616;
(effect_fn_20617.cljs$core$IFn$_invoke$arity$1 ? effect_fn_20617.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_20617.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__20618 = seq__20576;
var G__20619 = chunk__20577;
var G__20620 = count__20578;
var G__20621 = (i__20579 + (1));
seq__20576 = G__20618;
chunk__20577 = G__20619;
count__20578 = G__20620;
i__20579 = G__20621;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__20576);
if(temp__5753__auto__){
var seq__20576__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20576__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__20576__$1);
var G__20622 = cljs.core.chunk_rest(seq__20576__$1);
var G__20623 = c__4638__auto__;
var G__20624 = cljs.core.count(c__4638__auto__);
var G__20625 = (0);
seq__20576 = G__20622;
chunk__20577 = G__20623;
count__20578 = G__20624;
i__20579 = G__20625;
continue;
} else {
var vec__20589 = cljs.core.first(seq__20576__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20589,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20589,(1),null);
var temp__5751__auto___20626 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___20626)){
var effect_fn_20627 = temp__5751__auto___20626;
(effect_fn_20627.cljs$core$IFn$_invoke$arity$1 ? effect_fn_20627.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_20627.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__20628 = cljs.core.next(seq__20576__$1);
var G__20629 = null;
var G__20630 = (0);
var G__20631 = (0);
seq__20576 = G__20628;
chunk__20577 = G__20629;
count__20578 = G__20630;
i__20579 = G__20631;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__20632){
var map__20633 = p__20632;
var map__20633__$1 = cljs.core.__destructure_map(map__20633);
var effect = map__20633__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20633__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20633__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch_DASH_later,(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__20634 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__20635 = null;
var count__20636 = (0);
var i__20637 = (0);
while(true){
if((i__20637 < count__20636)){
var effect = chunk__20635.cljs$core$IIndexed$_nth$arity$2(null,i__20637);
re_frame.fx.dispatch_later(effect);


var G__20638 = seq__20634;
var G__20639 = chunk__20635;
var G__20640 = count__20636;
var G__20641 = (i__20637 + (1));
seq__20634 = G__20638;
chunk__20635 = G__20639;
count__20636 = G__20640;
i__20637 = G__20641;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__20634);
if(temp__5753__auto__){
var seq__20634__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20634__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__20634__$1);
var G__20642 = cljs.core.chunk_rest(seq__20634__$1);
var G__20643 = c__4638__auto__;
var G__20644 = cljs.core.count(c__4638__auto__);
var G__20645 = (0);
seq__20634 = G__20642;
chunk__20635 = G__20643;
count__20636 = G__20644;
i__20637 = G__20645;
continue;
} else {
var effect = cljs.core.first(seq__20634__$1);
re_frame.fx.dispatch_later(effect);


var G__20646 = cljs.core.next(seq__20634__$1);
var G__20647 = null;
var G__20648 = (0);
var G__20649 = (0);
seq__20634 = G__20646;
chunk__20635 = G__20647;
count__20636 = G__20648;
i__20637 = G__20649;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$fx,(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__20650 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__20651 = null;
var count__20652 = (0);
var i__20653 = (0);
while(true){
if((i__20653 < count__20652)){
var vec__20660 = chunk__20651.cljs$core$IIndexed$_nth$arity$2(null,i__20653);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20660,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20660,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$db,effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___20666 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___20666)){
var effect_fn_20667 = temp__5751__auto___20666;
(effect_fn_20667.cljs$core$IFn$_invoke$arity$1 ? effect_fn_20667.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_20667.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__20668 = seq__20650;
var G__20669 = chunk__20651;
var G__20670 = count__20652;
var G__20671 = (i__20653 + (1));
seq__20650 = G__20668;
chunk__20651 = G__20669;
count__20652 = G__20670;
i__20653 = G__20671;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__20650);
if(temp__5753__auto__){
var seq__20650__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20650__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__20650__$1);
var G__20672 = cljs.core.chunk_rest(seq__20650__$1);
var G__20673 = c__4638__auto__;
var G__20674 = cljs.core.count(c__4638__auto__);
var G__20675 = (0);
seq__20650 = G__20672;
chunk__20651 = G__20673;
count__20652 = G__20674;
i__20653 = G__20675;
continue;
} else {
var vec__20663 = cljs.core.first(seq__20650__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20663,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20663,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$db,effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___20676 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___20676)){
var effect_fn_20677 = temp__5751__auto___20676;
(effect_fn_20677.cljs$core$IFn$_invoke$arity$1 ? effect_fn_20677.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_20677.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__20678 = cljs.core.next(seq__20650__$1);
var G__20679 = null;
var G__20680 = (0);
var G__20681 = (0);
seq__20650 = G__20678;
chunk__20651 = G__20679;
count__20652 = G__20680;
i__20653 = G__20681;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch,(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch_DASH_n,(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__20682 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__20683 = null;
var count__20684 = (0);
var i__20685 = (0);
while(true){
if((i__20685 < count__20684)){
var event = chunk__20683.cljs$core$IIndexed$_nth$arity$2(null,i__20685);
re_frame.router.dispatch(event);


var G__20686 = seq__20682;
var G__20687 = chunk__20683;
var G__20688 = count__20684;
var G__20689 = (i__20685 + (1));
seq__20682 = G__20686;
chunk__20683 = G__20687;
count__20684 = G__20688;
i__20685 = G__20689;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__20682);
if(temp__5753__auto__){
var seq__20682__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20682__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__20682__$1);
var G__20690 = cljs.core.chunk_rest(seq__20682__$1);
var G__20691 = c__4638__auto__;
var G__20692 = cljs.core.count(c__4638__auto__);
var G__20693 = (0);
seq__20682 = G__20690;
chunk__20683 = G__20691;
count__20684 = G__20692;
i__20685 = G__20693;
continue;
} else {
var event = cljs.core.first(seq__20682__$1);
re_frame.router.dispatch(event);


var G__20694 = cljs.core.next(seq__20682__$1);
var G__20695 = null;
var G__20696 = (0);
var G__20697 = (0);
seq__20682 = G__20694;
chunk__20683 = G__20695;
count__20684 = G__20696;
i__20685 = G__20697;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$deregister_DASH_event_DASH_handler,(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__20698 = cljs.core.seq(value);
var chunk__20699 = null;
var count__20700 = (0);
var i__20701 = (0);
while(true){
if((i__20701 < count__20700)){
var event = chunk__20699.cljs$core$IIndexed$_nth$arity$2(null,i__20701);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__20702 = seq__20698;
var G__20703 = chunk__20699;
var G__20704 = count__20700;
var G__20705 = (i__20701 + (1));
seq__20698 = G__20702;
chunk__20699 = G__20703;
count__20700 = G__20704;
i__20701 = G__20705;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__20698);
if(temp__5753__auto__){
var seq__20698__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20698__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__20698__$1);
var G__20706 = cljs.core.chunk_rest(seq__20698__$1);
var G__20707 = c__4638__auto__;
var G__20708 = cljs.core.count(c__4638__auto__);
var G__20709 = (0);
seq__20698 = G__20706;
chunk__20699 = G__20707;
count__20700 = G__20708;
i__20701 = G__20709;
continue;
} else {
var event = cljs.core.first(seq__20698__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__20710 = cljs.core.next(seq__20698__$1);
var G__20711 = null;
var G__20712 = (0);
var G__20713 = (0);
seq__20698 = G__20710;
chunk__20699 = G__20711;
count__20700 = G__20712;
i__20701 = G__20713;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$db,(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));
