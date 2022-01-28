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
var _STAR_current_trace_STAR__orig_val__21665 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__21666 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$event_SLASH_do_DASH_fx], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__21666);

try{try{var effects = cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,cljs.core.cst$kw$db);
var temp__5753__auto___21701 = cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___21701)){
var new_db_21702 = temp__5753__auto___21701;
var fexpr__21667_21703 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,cljs.core.cst$kw$db,false);
(fexpr__21667_21703.cljs$core$IFn$_invoke$arity$1 ? fexpr__21667_21703.cljs$core$IFn$_invoke$arity$1(new_db_21702) : fexpr__21667_21703.call(null,new_db_21702));
} else {
}

var seq__21668 = cljs.core.seq(effects_without_db);
var chunk__21669 = null;
var count__21670 = (0);
var i__21671 = (0);
while(true){
if((i__21671 < count__21670)){
var vec__21678 = chunk__21669.cljs$core$IIndexed$_nth$arity$2(null,i__21671);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21678,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21678,(1),null);
var temp__5751__auto___21704 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___21704)){
var effect_fn_21705 = temp__5751__auto___21704;
(effect_fn_21705.cljs$core$IFn$_invoke$arity$1 ? effect_fn_21705.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_21705.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__21706 = seq__21668;
var G__21707 = chunk__21669;
var G__21708 = count__21670;
var G__21709 = (i__21671 + (1));
seq__21668 = G__21706;
chunk__21669 = G__21707;
count__21670 = G__21708;
i__21671 = G__21709;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__21668);
if(temp__5753__auto__){
var seq__21668__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21668__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__21668__$1);
var G__21710 = cljs.core.chunk_rest(seq__21668__$1);
var G__21711 = c__4638__auto__;
var G__21712 = cljs.core.count(c__4638__auto__);
var G__21713 = (0);
seq__21668 = G__21710;
chunk__21669 = G__21711;
count__21670 = G__21712;
i__21671 = G__21713;
continue;
} else {
var vec__21681 = cljs.core.first(seq__21668__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21681,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21681,(1),null);
var temp__5751__auto___21714 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___21714)){
var effect_fn_21715 = temp__5751__auto___21714;
(effect_fn_21715.cljs$core$IFn$_invoke$arity$1 ? effect_fn_21715.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_21715.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__21716 = cljs.core.next(seq__21668__$1);
var G__21717 = null;
var G__21718 = (0);
var G__21719 = (0);
seq__21668 = G__21716;
chunk__21669 = G__21717;
count__21670 = G__21718;
i__21671 = G__21719;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__21454__auto___21720 = re_frame.interop.now();
var duration__21455__auto___21721 = (end__21454__auto___21720 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__21455__auto___21721,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__21454__auto___21720);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__21665);
}} else {
var effects = cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,cljs.core.cst$kw$db);
var temp__5753__auto___21722 = cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___21722)){
var new_db_21723 = temp__5753__auto___21722;
var fexpr__21684_21724 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,cljs.core.cst$kw$db,false);
(fexpr__21684_21724.cljs$core$IFn$_invoke$arity$1 ? fexpr__21684_21724.cljs$core$IFn$_invoke$arity$1(new_db_21723) : fexpr__21684_21724.call(null,new_db_21723));
} else {
}

var seq__21685 = cljs.core.seq(effects_without_db);
var chunk__21686 = null;
var count__21687 = (0);
var i__21688 = (0);
while(true){
if((i__21688 < count__21687)){
var vec__21695 = chunk__21686.cljs$core$IIndexed$_nth$arity$2(null,i__21688);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21695,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21695,(1),null);
var temp__5751__auto___21725 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___21725)){
var effect_fn_21726 = temp__5751__auto___21725;
(effect_fn_21726.cljs$core$IFn$_invoke$arity$1 ? effect_fn_21726.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_21726.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__21727 = seq__21685;
var G__21728 = chunk__21686;
var G__21729 = count__21687;
var G__21730 = (i__21688 + (1));
seq__21685 = G__21727;
chunk__21686 = G__21728;
count__21687 = G__21729;
i__21688 = G__21730;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__21685);
if(temp__5753__auto__){
var seq__21685__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21685__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__21685__$1);
var G__21731 = cljs.core.chunk_rest(seq__21685__$1);
var G__21732 = c__4638__auto__;
var G__21733 = cljs.core.count(c__4638__auto__);
var G__21734 = (0);
seq__21685 = G__21731;
chunk__21686 = G__21732;
count__21687 = G__21733;
i__21688 = G__21734;
continue;
} else {
var vec__21698 = cljs.core.first(seq__21685__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21698,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21698,(1),null);
var temp__5751__auto___21735 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___21735)){
var effect_fn_21736 = temp__5751__auto___21735;
(effect_fn_21736.cljs$core$IFn$_invoke$arity$1 ? effect_fn_21736.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_21736.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__21737 = cljs.core.next(seq__21685__$1);
var G__21738 = null;
var G__21739 = (0);
var G__21740 = (0);
seq__21685 = G__21737;
chunk__21686 = G__21738;
count__21687 = G__21739;
i__21688 = G__21740;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__21741){
var map__21742 = p__21741;
var map__21742__$1 = cljs.core.__destructure_map(map__21742);
var effect = map__21742__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21742__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21742__$1,cljs.core.cst$kw$dispatch);
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
var seq__21743 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__21744 = null;
var count__21745 = (0);
var i__21746 = (0);
while(true){
if((i__21746 < count__21745)){
var effect = chunk__21744.cljs$core$IIndexed$_nth$arity$2(null,i__21746);
re_frame.fx.dispatch_later(effect);


var G__21747 = seq__21743;
var G__21748 = chunk__21744;
var G__21749 = count__21745;
var G__21750 = (i__21746 + (1));
seq__21743 = G__21747;
chunk__21744 = G__21748;
count__21745 = G__21749;
i__21746 = G__21750;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__21743);
if(temp__5753__auto__){
var seq__21743__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21743__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__21743__$1);
var G__21751 = cljs.core.chunk_rest(seq__21743__$1);
var G__21752 = c__4638__auto__;
var G__21753 = cljs.core.count(c__4638__auto__);
var G__21754 = (0);
seq__21743 = G__21751;
chunk__21744 = G__21752;
count__21745 = G__21753;
i__21746 = G__21754;
continue;
} else {
var effect = cljs.core.first(seq__21743__$1);
re_frame.fx.dispatch_later(effect);


var G__21755 = cljs.core.next(seq__21743__$1);
var G__21756 = null;
var G__21757 = (0);
var G__21758 = (0);
seq__21743 = G__21755;
chunk__21744 = G__21756;
count__21745 = G__21757;
i__21746 = G__21758;
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
var seq__21759 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__21760 = null;
var count__21761 = (0);
var i__21762 = (0);
while(true){
if((i__21762 < count__21761)){
var vec__21769 = chunk__21760.cljs$core$IIndexed$_nth$arity$2(null,i__21762);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21769,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21769,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$db,effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___21775 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___21775)){
var effect_fn_21776 = temp__5751__auto___21775;
(effect_fn_21776.cljs$core$IFn$_invoke$arity$1 ? effect_fn_21776.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_21776.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__21777 = seq__21759;
var G__21778 = chunk__21760;
var G__21779 = count__21761;
var G__21780 = (i__21762 + (1));
seq__21759 = G__21777;
chunk__21760 = G__21778;
count__21761 = G__21779;
i__21762 = G__21780;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__21759);
if(temp__5753__auto__){
var seq__21759__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21759__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__21759__$1);
var G__21781 = cljs.core.chunk_rest(seq__21759__$1);
var G__21782 = c__4638__auto__;
var G__21783 = cljs.core.count(c__4638__auto__);
var G__21784 = (0);
seq__21759 = G__21781;
chunk__21760 = G__21782;
count__21761 = G__21783;
i__21762 = G__21784;
continue;
} else {
var vec__21772 = cljs.core.first(seq__21759__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21772,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21772,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$db,effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___21785 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___21785)){
var effect_fn_21786 = temp__5751__auto___21785;
(effect_fn_21786.cljs$core$IFn$_invoke$arity$1 ? effect_fn_21786.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_21786.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__21787 = cljs.core.next(seq__21759__$1);
var G__21788 = null;
var G__21789 = (0);
var G__21790 = (0);
seq__21759 = G__21787;
chunk__21760 = G__21788;
count__21761 = G__21789;
i__21762 = G__21790;
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
var seq__21791 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__21792 = null;
var count__21793 = (0);
var i__21794 = (0);
while(true){
if((i__21794 < count__21793)){
var event = chunk__21792.cljs$core$IIndexed$_nth$arity$2(null,i__21794);
re_frame.router.dispatch(event);


var G__21795 = seq__21791;
var G__21796 = chunk__21792;
var G__21797 = count__21793;
var G__21798 = (i__21794 + (1));
seq__21791 = G__21795;
chunk__21792 = G__21796;
count__21793 = G__21797;
i__21794 = G__21798;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__21791);
if(temp__5753__auto__){
var seq__21791__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21791__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__21791__$1);
var G__21799 = cljs.core.chunk_rest(seq__21791__$1);
var G__21800 = c__4638__auto__;
var G__21801 = cljs.core.count(c__4638__auto__);
var G__21802 = (0);
seq__21791 = G__21799;
chunk__21792 = G__21800;
count__21793 = G__21801;
i__21794 = G__21802;
continue;
} else {
var event = cljs.core.first(seq__21791__$1);
re_frame.router.dispatch(event);


var G__21803 = cljs.core.next(seq__21791__$1);
var G__21804 = null;
var G__21805 = (0);
var G__21806 = (0);
seq__21791 = G__21803;
chunk__21792 = G__21804;
count__21793 = G__21805;
i__21794 = G__21806;
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
var seq__21807 = cljs.core.seq(value);
var chunk__21808 = null;
var count__21809 = (0);
var i__21810 = (0);
while(true){
if((i__21810 < count__21809)){
var event = chunk__21808.cljs$core$IIndexed$_nth$arity$2(null,i__21810);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__21811 = seq__21807;
var G__21812 = chunk__21808;
var G__21813 = count__21809;
var G__21814 = (i__21810 + (1));
seq__21807 = G__21811;
chunk__21808 = G__21812;
count__21809 = G__21813;
i__21810 = G__21814;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__21807);
if(temp__5753__auto__){
var seq__21807__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21807__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__21807__$1);
var G__21815 = cljs.core.chunk_rest(seq__21807__$1);
var G__21816 = c__4638__auto__;
var G__21817 = cljs.core.count(c__4638__auto__);
var G__21818 = (0);
seq__21807 = G__21815;
chunk__21808 = G__21816;
count__21809 = G__21817;
i__21810 = G__21818;
continue;
} else {
var event = cljs.core.first(seq__21807__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__21819 = cljs.core.next(seq__21807__$1);
var G__21820 = null;
var G__21821 = (0);
var G__21822 = (0);
seq__21807 = G__21819;
chunk__21808 = G__21820;
count__21809 = G__21821;
i__21810 = G__21822;
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
