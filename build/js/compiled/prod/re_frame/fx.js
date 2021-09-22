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
var _STAR_current_trace_STAR__orig_val__20585 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__20586 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$event_SLASH_do_DASH_fx], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__20586);

try{try{var effects = cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,cljs.core.cst$kw$db);
var temp__5753__auto___20621 = cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___20621)){
var new_db_20622 = temp__5753__auto___20621;
var fexpr__20587_20623 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,cljs.core.cst$kw$db,false);
(fexpr__20587_20623.cljs$core$IFn$_invoke$arity$1 ? fexpr__20587_20623.cljs$core$IFn$_invoke$arity$1(new_db_20622) : fexpr__20587_20623.call(null,new_db_20622));
} else {
}

var seq__20588 = cljs.core.seq(effects_without_db);
var chunk__20589 = null;
var count__20590 = (0);
var i__20591 = (0);
while(true){
if((i__20591 < count__20590)){
var vec__20598 = chunk__20589.cljs$core$IIndexed$_nth$arity$2(null,i__20591);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20598,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20598,(1),null);
var temp__5751__auto___20624 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___20624)){
var effect_fn_20625 = temp__5751__auto___20624;
(effect_fn_20625.cljs$core$IFn$_invoke$arity$1 ? effect_fn_20625.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_20625.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__20626 = seq__20588;
var G__20627 = chunk__20589;
var G__20628 = count__20590;
var G__20629 = (i__20591 + (1));
seq__20588 = G__20626;
chunk__20589 = G__20627;
count__20590 = G__20628;
i__20591 = G__20629;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__20588);
if(temp__5753__auto__){
var seq__20588__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20588__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__20588__$1);
var G__20630 = cljs.core.chunk_rest(seq__20588__$1);
var G__20631 = c__4638__auto__;
var G__20632 = cljs.core.count(c__4638__auto__);
var G__20633 = (0);
seq__20588 = G__20630;
chunk__20589 = G__20631;
count__20590 = G__20632;
i__20591 = G__20633;
continue;
} else {
var vec__20601 = cljs.core.first(seq__20588__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20601,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20601,(1),null);
var temp__5751__auto___20634 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___20634)){
var effect_fn_20635 = temp__5751__auto___20634;
(effect_fn_20635.cljs$core$IFn$_invoke$arity$1 ? effect_fn_20635.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_20635.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__20636 = cljs.core.next(seq__20588__$1);
var G__20637 = null;
var G__20638 = (0);
var G__20639 = (0);
seq__20588 = G__20636;
chunk__20589 = G__20637;
count__20590 = G__20638;
i__20591 = G__20639;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__20374__auto___20640 = re_frame.interop.now();
var duration__20375__auto___20641 = (end__20374__auto___20640 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__20375__auto___20641,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__20374__auto___20640);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__20585);
}} else {
var effects = cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,cljs.core.cst$kw$db);
var temp__5753__auto___20642 = cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___20642)){
var new_db_20643 = temp__5753__auto___20642;
var fexpr__20604_20644 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,cljs.core.cst$kw$db,false);
(fexpr__20604_20644.cljs$core$IFn$_invoke$arity$1 ? fexpr__20604_20644.cljs$core$IFn$_invoke$arity$1(new_db_20643) : fexpr__20604_20644.call(null,new_db_20643));
} else {
}

var seq__20605 = cljs.core.seq(effects_without_db);
var chunk__20606 = null;
var count__20607 = (0);
var i__20608 = (0);
while(true){
if((i__20608 < count__20607)){
var vec__20615 = chunk__20606.cljs$core$IIndexed$_nth$arity$2(null,i__20608);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20615,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20615,(1),null);
var temp__5751__auto___20645 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___20645)){
var effect_fn_20646 = temp__5751__auto___20645;
(effect_fn_20646.cljs$core$IFn$_invoke$arity$1 ? effect_fn_20646.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_20646.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__20647 = seq__20605;
var G__20648 = chunk__20606;
var G__20649 = count__20607;
var G__20650 = (i__20608 + (1));
seq__20605 = G__20647;
chunk__20606 = G__20648;
count__20607 = G__20649;
i__20608 = G__20650;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__20605);
if(temp__5753__auto__){
var seq__20605__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20605__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__20605__$1);
var G__20651 = cljs.core.chunk_rest(seq__20605__$1);
var G__20652 = c__4638__auto__;
var G__20653 = cljs.core.count(c__4638__auto__);
var G__20654 = (0);
seq__20605 = G__20651;
chunk__20606 = G__20652;
count__20607 = G__20653;
i__20608 = G__20654;
continue;
} else {
var vec__20618 = cljs.core.first(seq__20605__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20618,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20618,(1),null);
var temp__5751__auto___20655 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___20655)){
var effect_fn_20656 = temp__5751__auto___20655;
(effect_fn_20656.cljs$core$IFn$_invoke$arity$1 ? effect_fn_20656.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_20656.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__20657 = cljs.core.next(seq__20605__$1);
var G__20658 = null;
var G__20659 = (0);
var G__20660 = (0);
seq__20605 = G__20657;
chunk__20606 = G__20658;
count__20607 = G__20659;
i__20608 = G__20660;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__20661){
var map__20662 = p__20661;
var map__20662__$1 = cljs.core.__destructure_map(map__20662);
var effect = map__20662__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20662__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20662__$1,cljs.core.cst$kw$dispatch);
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
var seq__20663 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__20664 = null;
var count__20665 = (0);
var i__20666 = (0);
while(true){
if((i__20666 < count__20665)){
var effect = chunk__20664.cljs$core$IIndexed$_nth$arity$2(null,i__20666);
re_frame.fx.dispatch_later(effect);


var G__20667 = seq__20663;
var G__20668 = chunk__20664;
var G__20669 = count__20665;
var G__20670 = (i__20666 + (1));
seq__20663 = G__20667;
chunk__20664 = G__20668;
count__20665 = G__20669;
i__20666 = G__20670;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__20663);
if(temp__5753__auto__){
var seq__20663__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20663__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__20663__$1);
var G__20671 = cljs.core.chunk_rest(seq__20663__$1);
var G__20672 = c__4638__auto__;
var G__20673 = cljs.core.count(c__4638__auto__);
var G__20674 = (0);
seq__20663 = G__20671;
chunk__20664 = G__20672;
count__20665 = G__20673;
i__20666 = G__20674;
continue;
} else {
var effect = cljs.core.first(seq__20663__$1);
re_frame.fx.dispatch_later(effect);


var G__20675 = cljs.core.next(seq__20663__$1);
var G__20676 = null;
var G__20677 = (0);
var G__20678 = (0);
seq__20663 = G__20675;
chunk__20664 = G__20676;
count__20665 = G__20677;
i__20666 = G__20678;
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
var seq__20679 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__20680 = null;
var count__20681 = (0);
var i__20682 = (0);
while(true){
if((i__20682 < count__20681)){
var vec__20689 = chunk__20680.cljs$core$IIndexed$_nth$arity$2(null,i__20682);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20689,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20689,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$db,effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___20695 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___20695)){
var effect_fn_20696 = temp__5751__auto___20695;
(effect_fn_20696.cljs$core$IFn$_invoke$arity$1 ? effect_fn_20696.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_20696.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__20697 = seq__20679;
var G__20698 = chunk__20680;
var G__20699 = count__20681;
var G__20700 = (i__20682 + (1));
seq__20679 = G__20697;
chunk__20680 = G__20698;
count__20681 = G__20699;
i__20682 = G__20700;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__20679);
if(temp__5753__auto__){
var seq__20679__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20679__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__20679__$1);
var G__20701 = cljs.core.chunk_rest(seq__20679__$1);
var G__20702 = c__4638__auto__;
var G__20703 = cljs.core.count(c__4638__auto__);
var G__20704 = (0);
seq__20679 = G__20701;
chunk__20680 = G__20702;
count__20681 = G__20703;
i__20682 = G__20704;
continue;
} else {
var vec__20692 = cljs.core.first(seq__20679__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20692,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20692,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$db,effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___20705 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___20705)){
var effect_fn_20706 = temp__5751__auto___20705;
(effect_fn_20706.cljs$core$IFn$_invoke$arity$1 ? effect_fn_20706.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_20706.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__20707 = cljs.core.next(seq__20679__$1);
var G__20708 = null;
var G__20709 = (0);
var G__20710 = (0);
seq__20679 = G__20707;
chunk__20680 = G__20708;
count__20681 = G__20709;
i__20682 = G__20710;
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
var seq__20711 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__20712 = null;
var count__20713 = (0);
var i__20714 = (0);
while(true){
if((i__20714 < count__20713)){
var event = chunk__20712.cljs$core$IIndexed$_nth$arity$2(null,i__20714);
re_frame.router.dispatch(event);


var G__20715 = seq__20711;
var G__20716 = chunk__20712;
var G__20717 = count__20713;
var G__20718 = (i__20714 + (1));
seq__20711 = G__20715;
chunk__20712 = G__20716;
count__20713 = G__20717;
i__20714 = G__20718;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__20711);
if(temp__5753__auto__){
var seq__20711__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20711__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__20711__$1);
var G__20719 = cljs.core.chunk_rest(seq__20711__$1);
var G__20720 = c__4638__auto__;
var G__20721 = cljs.core.count(c__4638__auto__);
var G__20722 = (0);
seq__20711 = G__20719;
chunk__20712 = G__20720;
count__20713 = G__20721;
i__20714 = G__20722;
continue;
} else {
var event = cljs.core.first(seq__20711__$1);
re_frame.router.dispatch(event);


var G__20723 = cljs.core.next(seq__20711__$1);
var G__20724 = null;
var G__20725 = (0);
var G__20726 = (0);
seq__20711 = G__20723;
chunk__20712 = G__20724;
count__20713 = G__20725;
i__20714 = G__20726;
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
var seq__20727 = cljs.core.seq(value);
var chunk__20728 = null;
var count__20729 = (0);
var i__20730 = (0);
while(true){
if((i__20730 < count__20729)){
var event = chunk__20728.cljs$core$IIndexed$_nth$arity$2(null,i__20730);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__20731 = seq__20727;
var G__20732 = chunk__20728;
var G__20733 = count__20729;
var G__20734 = (i__20730 + (1));
seq__20727 = G__20731;
chunk__20728 = G__20732;
count__20729 = G__20733;
i__20730 = G__20734;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__20727);
if(temp__5753__auto__){
var seq__20727__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20727__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__20727__$1);
var G__20735 = cljs.core.chunk_rest(seq__20727__$1);
var G__20736 = c__4638__auto__;
var G__20737 = cljs.core.count(c__4638__auto__);
var G__20738 = (0);
seq__20727 = G__20735;
chunk__20728 = G__20736;
count__20729 = G__20737;
i__20730 = G__20738;
continue;
} else {
var event = cljs.core.first(seq__20727__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__20739 = cljs.core.next(seq__20727__$1);
var G__20740 = null;
var G__20741 = (0);
var G__20742 = (0);
seq__20727 = G__20739;
chunk__20728 = G__20740;
count__20729 = G__20741;
i__20730 = G__20742;
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
