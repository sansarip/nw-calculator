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
var _STAR_current_trace_STAR__orig_val__21653 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__21654 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$event_SLASH_do_DASH_fx], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__21654);

try{try{var effects = cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,cljs.core.cst$kw$db);
var temp__5753__auto___21689 = cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___21689)){
var new_db_21690 = temp__5753__auto___21689;
var fexpr__21655_21691 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,cljs.core.cst$kw$db,false);
(fexpr__21655_21691.cljs$core$IFn$_invoke$arity$1 ? fexpr__21655_21691.cljs$core$IFn$_invoke$arity$1(new_db_21690) : fexpr__21655_21691.call(null,new_db_21690));
} else {
}

var seq__21656 = cljs.core.seq(effects_without_db);
var chunk__21657 = null;
var count__21658 = (0);
var i__21659 = (0);
while(true){
if((i__21659 < count__21658)){
var vec__21666 = chunk__21657.cljs$core$IIndexed$_nth$arity$2(null,i__21659);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21666,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21666,(1),null);
var temp__5751__auto___21692 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___21692)){
var effect_fn_21693 = temp__5751__auto___21692;
(effect_fn_21693.cljs$core$IFn$_invoke$arity$1 ? effect_fn_21693.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_21693.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__21694 = seq__21656;
var G__21695 = chunk__21657;
var G__21696 = count__21658;
var G__21697 = (i__21659 + (1));
seq__21656 = G__21694;
chunk__21657 = G__21695;
count__21658 = G__21696;
i__21659 = G__21697;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__21656);
if(temp__5753__auto__){
var seq__21656__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21656__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__21656__$1);
var G__21698 = cljs.core.chunk_rest(seq__21656__$1);
var G__21699 = c__4638__auto__;
var G__21700 = cljs.core.count(c__4638__auto__);
var G__21701 = (0);
seq__21656 = G__21698;
chunk__21657 = G__21699;
count__21658 = G__21700;
i__21659 = G__21701;
continue;
} else {
var vec__21669 = cljs.core.first(seq__21656__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21669,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21669,(1),null);
var temp__5751__auto___21702 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___21702)){
var effect_fn_21703 = temp__5751__auto___21702;
(effect_fn_21703.cljs$core$IFn$_invoke$arity$1 ? effect_fn_21703.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_21703.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__21704 = cljs.core.next(seq__21656__$1);
var G__21705 = null;
var G__21706 = (0);
var G__21707 = (0);
seq__21656 = G__21704;
chunk__21657 = G__21705;
count__21658 = G__21706;
i__21659 = G__21707;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__21442__auto___21708 = re_frame.interop.now();
var duration__21443__auto___21709 = (end__21442__auto___21708 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__21443__auto___21709,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__21442__auto___21708);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__21653);
}} else {
var effects = cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,cljs.core.cst$kw$db);
var temp__5753__auto___21710 = cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___21710)){
var new_db_21711 = temp__5753__auto___21710;
var fexpr__21672_21712 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,cljs.core.cst$kw$db,false);
(fexpr__21672_21712.cljs$core$IFn$_invoke$arity$1 ? fexpr__21672_21712.cljs$core$IFn$_invoke$arity$1(new_db_21711) : fexpr__21672_21712.call(null,new_db_21711));
} else {
}

var seq__21673 = cljs.core.seq(effects_without_db);
var chunk__21674 = null;
var count__21675 = (0);
var i__21676 = (0);
while(true){
if((i__21676 < count__21675)){
var vec__21683 = chunk__21674.cljs$core$IIndexed$_nth$arity$2(null,i__21676);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21683,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21683,(1),null);
var temp__5751__auto___21713 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___21713)){
var effect_fn_21714 = temp__5751__auto___21713;
(effect_fn_21714.cljs$core$IFn$_invoke$arity$1 ? effect_fn_21714.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_21714.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__21715 = seq__21673;
var G__21716 = chunk__21674;
var G__21717 = count__21675;
var G__21718 = (i__21676 + (1));
seq__21673 = G__21715;
chunk__21674 = G__21716;
count__21675 = G__21717;
i__21676 = G__21718;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__21673);
if(temp__5753__auto__){
var seq__21673__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21673__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__21673__$1);
var G__21719 = cljs.core.chunk_rest(seq__21673__$1);
var G__21720 = c__4638__auto__;
var G__21721 = cljs.core.count(c__4638__auto__);
var G__21722 = (0);
seq__21673 = G__21719;
chunk__21674 = G__21720;
count__21675 = G__21721;
i__21676 = G__21722;
continue;
} else {
var vec__21686 = cljs.core.first(seq__21673__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21686,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21686,(1),null);
var temp__5751__auto___21723 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___21723)){
var effect_fn_21724 = temp__5751__auto___21723;
(effect_fn_21724.cljs$core$IFn$_invoke$arity$1 ? effect_fn_21724.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_21724.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__21725 = cljs.core.next(seq__21673__$1);
var G__21726 = null;
var G__21727 = (0);
var G__21728 = (0);
seq__21673 = G__21725;
chunk__21674 = G__21726;
count__21675 = G__21727;
i__21676 = G__21728;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__21729){
var map__21730 = p__21729;
var map__21730__$1 = cljs.core.__destructure_map(map__21730);
var effect = map__21730__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21730__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21730__$1,cljs.core.cst$kw$dispatch);
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
var seq__21731 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__21732 = null;
var count__21733 = (0);
var i__21734 = (0);
while(true){
if((i__21734 < count__21733)){
var effect = chunk__21732.cljs$core$IIndexed$_nth$arity$2(null,i__21734);
re_frame.fx.dispatch_later(effect);


var G__21735 = seq__21731;
var G__21736 = chunk__21732;
var G__21737 = count__21733;
var G__21738 = (i__21734 + (1));
seq__21731 = G__21735;
chunk__21732 = G__21736;
count__21733 = G__21737;
i__21734 = G__21738;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__21731);
if(temp__5753__auto__){
var seq__21731__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21731__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__21731__$1);
var G__21739 = cljs.core.chunk_rest(seq__21731__$1);
var G__21740 = c__4638__auto__;
var G__21741 = cljs.core.count(c__4638__auto__);
var G__21742 = (0);
seq__21731 = G__21739;
chunk__21732 = G__21740;
count__21733 = G__21741;
i__21734 = G__21742;
continue;
} else {
var effect = cljs.core.first(seq__21731__$1);
re_frame.fx.dispatch_later(effect);


var G__21743 = cljs.core.next(seq__21731__$1);
var G__21744 = null;
var G__21745 = (0);
var G__21746 = (0);
seq__21731 = G__21743;
chunk__21732 = G__21744;
count__21733 = G__21745;
i__21734 = G__21746;
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
var seq__21747 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__21748 = null;
var count__21749 = (0);
var i__21750 = (0);
while(true){
if((i__21750 < count__21749)){
var vec__21757 = chunk__21748.cljs$core$IIndexed$_nth$arity$2(null,i__21750);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21757,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21757,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$db,effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___21763 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___21763)){
var effect_fn_21764 = temp__5751__auto___21763;
(effect_fn_21764.cljs$core$IFn$_invoke$arity$1 ? effect_fn_21764.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_21764.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__21765 = seq__21747;
var G__21766 = chunk__21748;
var G__21767 = count__21749;
var G__21768 = (i__21750 + (1));
seq__21747 = G__21765;
chunk__21748 = G__21766;
count__21749 = G__21767;
i__21750 = G__21768;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__21747);
if(temp__5753__auto__){
var seq__21747__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21747__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__21747__$1);
var G__21769 = cljs.core.chunk_rest(seq__21747__$1);
var G__21770 = c__4638__auto__;
var G__21771 = cljs.core.count(c__4638__auto__);
var G__21772 = (0);
seq__21747 = G__21769;
chunk__21748 = G__21770;
count__21749 = G__21771;
i__21750 = G__21772;
continue;
} else {
var vec__21760 = cljs.core.first(seq__21747__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21760,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21760,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$db,effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___21773 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___21773)){
var effect_fn_21774 = temp__5751__auto___21773;
(effect_fn_21774.cljs$core$IFn$_invoke$arity$1 ? effect_fn_21774.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_21774.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__21775 = cljs.core.next(seq__21747__$1);
var G__21776 = null;
var G__21777 = (0);
var G__21778 = (0);
seq__21747 = G__21775;
chunk__21748 = G__21776;
count__21749 = G__21777;
i__21750 = G__21778;
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
var seq__21779 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__21780 = null;
var count__21781 = (0);
var i__21782 = (0);
while(true){
if((i__21782 < count__21781)){
var event = chunk__21780.cljs$core$IIndexed$_nth$arity$2(null,i__21782);
re_frame.router.dispatch(event);


var G__21783 = seq__21779;
var G__21784 = chunk__21780;
var G__21785 = count__21781;
var G__21786 = (i__21782 + (1));
seq__21779 = G__21783;
chunk__21780 = G__21784;
count__21781 = G__21785;
i__21782 = G__21786;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__21779);
if(temp__5753__auto__){
var seq__21779__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21779__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__21779__$1);
var G__21787 = cljs.core.chunk_rest(seq__21779__$1);
var G__21788 = c__4638__auto__;
var G__21789 = cljs.core.count(c__4638__auto__);
var G__21790 = (0);
seq__21779 = G__21787;
chunk__21780 = G__21788;
count__21781 = G__21789;
i__21782 = G__21790;
continue;
} else {
var event = cljs.core.first(seq__21779__$1);
re_frame.router.dispatch(event);


var G__21791 = cljs.core.next(seq__21779__$1);
var G__21792 = null;
var G__21793 = (0);
var G__21794 = (0);
seq__21779 = G__21791;
chunk__21780 = G__21792;
count__21781 = G__21793;
i__21782 = G__21794;
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
var seq__21795 = cljs.core.seq(value);
var chunk__21796 = null;
var count__21797 = (0);
var i__21798 = (0);
while(true){
if((i__21798 < count__21797)){
var event = chunk__21796.cljs$core$IIndexed$_nth$arity$2(null,i__21798);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__21799 = seq__21795;
var G__21800 = chunk__21796;
var G__21801 = count__21797;
var G__21802 = (i__21798 + (1));
seq__21795 = G__21799;
chunk__21796 = G__21800;
count__21797 = G__21801;
i__21798 = G__21802;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__21795);
if(temp__5753__auto__){
var seq__21795__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21795__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__21795__$1);
var G__21803 = cljs.core.chunk_rest(seq__21795__$1);
var G__21804 = c__4638__auto__;
var G__21805 = cljs.core.count(c__4638__auto__);
var G__21806 = (0);
seq__21795 = G__21803;
chunk__21796 = G__21804;
count__21797 = G__21805;
i__21798 = G__21806;
continue;
} else {
var event = cljs.core.first(seq__21795__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__21807 = cljs.core.next(seq__21795__$1);
var G__21808 = null;
var G__21809 = (0);
var G__21810 = (0);
seq__21795 = G__21807;
chunk__21796 = G__21808;
count__21797 = G__21809;
i__21798 = G__21810;
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
