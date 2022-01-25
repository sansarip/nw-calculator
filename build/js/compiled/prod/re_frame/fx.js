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
var _STAR_current_trace_STAR__orig_val__21664 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__21665 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$event_SLASH_do_DASH_fx], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__21665);

try{try{var effects = cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,cljs.core.cst$kw$db);
var temp__5753__auto___21700 = cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___21700)){
var new_db_21701 = temp__5753__auto___21700;
var fexpr__21666_21702 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,cljs.core.cst$kw$db,false);
(fexpr__21666_21702.cljs$core$IFn$_invoke$arity$1 ? fexpr__21666_21702.cljs$core$IFn$_invoke$arity$1(new_db_21701) : fexpr__21666_21702.call(null,new_db_21701));
} else {
}

var seq__21667 = cljs.core.seq(effects_without_db);
var chunk__21668 = null;
var count__21669 = (0);
var i__21670 = (0);
while(true){
if((i__21670 < count__21669)){
var vec__21677 = chunk__21668.cljs$core$IIndexed$_nth$arity$2(null,i__21670);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21677,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21677,(1),null);
var temp__5751__auto___21703 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___21703)){
var effect_fn_21704 = temp__5751__auto___21703;
(effect_fn_21704.cljs$core$IFn$_invoke$arity$1 ? effect_fn_21704.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_21704.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__21705 = seq__21667;
var G__21706 = chunk__21668;
var G__21707 = count__21669;
var G__21708 = (i__21670 + (1));
seq__21667 = G__21705;
chunk__21668 = G__21706;
count__21669 = G__21707;
i__21670 = G__21708;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__21667);
if(temp__5753__auto__){
var seq__21667__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21667__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__21667__$1);
var G__21709 = cljs.core.chunk_rest(seq__21667__$1);
var G__21710 = c__4638__auto__;
var G__21711 = cljs.core.count(c__4638__auto__);
var G__21712 = (0);
seq__21667 = G__21709;
chunk__21668 = G__21710;
count__21669 = G__21711;
i__21670 = G__21712;
continue;
} else {
var vec__21680 = cljs.core.first(seq__21667__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21680,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21680,(1),null);
var temp__5751__auto___21713 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___21713)){
var effect_fn_21714 = temp__5751__auto___21713;
(effect_fn_21714.cljs$core$IFn$_invoke$arity$1 ? effect_fn_21714.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_21714.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__21715 = cljs.core.next(seq__21667__$1);
var G__21716 = null;
var G__21717 = (0);
var G__21718 = (0);
seq__21667 = G__21715;
chunk__21668 = G__21716;
count__21669 = G__21717;
i__21670 = G__21718;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__21453__auto___21719 = re_frame.interop.now();
var duration__21454__auto___21720 = (end__21453__auto___21719 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__21454__auto___21720,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__21453__auto___21719);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__21664);
}} else {
var effects = cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,cljs.core.cst$kw$db);
var temp__5753__auto___21721 = cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___21721)){
var new_db_21722 = temp__5753__auto___21721;
var fexpr__21683_21723 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,cljs.core.cst$kw$db,false);
(fexpr__21683_21723.cljs$core$IFn$_invoke$arity$1 ? fexpr__21683_21723.cljs$core$IFn$_invoke$arity$1(new_db_21722) : fexpr__21683_21723.call(null,new_db_21722));
} else {
}

var seq__21684 = cljs.core.seq(effects_without_db);
var chunk__21685 = null;
var count__21686 = (0);
var i__21687 = (0);
while(true){
if((i__21687 < count__21686)){
var vec__21694 = chunk__21685.cljs$core$IIndexed$_nth$arity$2(null,i__21687);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21694,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21694,(1),null);
var temp__5751__auto___21724 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___21724)){
var effect_fn_21725 = temp__5751__auto___21724;
(effect_fn_21725.cljs$core$IFn$_invoke$arity$1 ? effect_fn_21725.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_21725.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__21726 = seq__21684;
var G__21727 = chunk__21685;
var G__21728 = count__21686;
var G__21729 = (i__21687 + (1));
seq__21684 = G__21726;
chunk__21685 = G__21727;
count__21686 = G__21728;
i__21687 = G__21729;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__21684);
if(temp__5753__auto__){
var seq__21684__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21684__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__21684__$1);
var G__21730 = cljs.core.chunk_rest(seq__21684__$1);
var G__21731 = c__4638__auto__;
var G__21732 = cljs.core.count(c__4638__auto__);
var G__21733 = (0);
seq__21684 = G__21730;
chunk__21685 = G__21731;
count__21686 = G__21732;
i__21687 = G__21733;
continue;
} else {
var vec__21697 = cljs.core.first(seq__21684__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21697,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21697,(1),null);
var temp__5751__auto___21734 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___21734)){
var effect_fn_21735 = temp__5751__auto___21734;
(effect_fn_21735.cljs$core$IFn$_invoke$arity$1 ? effect_fn_21735.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_21735.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__21736 = cljs.core.next(seq__21684__$1);
var G__21737 = null;
var G__21738 = (0);
var G__21739 = (0);
seq__21684 = G__21736;
chunk__21685 = G__21737;
count__21686 = G__21738;
i__21687 = G__21739;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__21740){
var map__21741 = p__21740;
var map__21741__$1 = cljs.core.__destructure_map(map__21741);
var effect = map__21741__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21741__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21741__$1,cljs.core.cst$kw$dispatch);
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
var seq__21742 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__21743 = null;
var count__21744 = (0);
var i__21745 = (0);
while(true){
if((i__21745 < count__21744)){
var effect = chunk__21743.cljs$core$IIndexed$_nth$arity$2(null,i__21745);
re_frame.fx.dispatch_later(effect);


var G__21746 = seq__21742;
var G__21747 = chunk__21743;
var G__21748 = count__21744;
var G__21749 = (i__21745 + (1));
seq__21742 = G__21746;
chunk__21743 = G__21747;
count__21744 = G__21748;
i__21745 = G__21749;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__21742);
if(temp__5753__auto__){
var seq__21742__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21742__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__21742__$1);
var G__21750 = cljs.core.chunk_rest(seq__21742__$1);
var G__21751 = c__4638__auto__;
var G__21752 = cljs.core.count(c__4638__auto__);
var G__21753 = (0);
seq__21742 = G__21750;
chunk__21743 = G__21751;
count__21744 = G__21752;
i__21745 = G__21753;
continue;
} else {
var effect = cljs.core.first(seq__21742__$1);
re_frame.fx.dispatch_later(effect);


var G__21754 = cljs.core.next(seq__21742__$1);
var G__21755 = null;
var G__21756 = (0);
var G__21757 = (0);
seq__21742 = G__21754;
chunk__21743 = G__21755;
count__21744 = G__21756;
i__21745 = G__21757;
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
var seq__21758 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__21759 = null;
var count__21760 = (0);
var i__21761 = (0);
while(true){
if((i__21761 < count__21760)){
var vec__21768 = chunk__21759.cljs$core$IIndexed$_nth$arity$2(null,i__21761);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21768,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21768,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$db,effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___21774 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___21774)){
var effect_fn_21775 = temp__5751__auto___21774;
(effect_fn_21775.cljs$core$IFn$_invoke$arity$1 ? effect_fn_21775.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_21775.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__21776 = seq__21758;
var G__21777 = chunk__21759;
var G__21778 = count__21760;
var G__21779 = (i__21761 + (1));
seq__21758 = G__21776;
chunk__21759 = G__21777;
count__21760 = G__21778;
i__21761 = G__21779;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__21758);
if(temp__5753__auto__){
var seq__21758__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21758__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__21758__$1);
var G__21780 = cljs.core.chunk_rest(seq__21758__$1);
var G__21781 = c__4638__auto__;
var G__21782 = cljs.core.count(c__4638__auto__);
var G__21783 = (0);
seq__21758 = G__21780;
chunk__21759 = G__21781;
count__21760 = G__21782;
i__21761 = G__21783;
continue;
} else {
var vec__21771 = cljs.core.first(seq__21758__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21771,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21771,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$db,effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___21784 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___21784)){
var effect_fn_21785 = temp__5751__auto___21784;
(effect_fn_21785.cljs$core$IFn$_invoke$arity$1 ? effect_fn_21785.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_21785.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__21786 = cljs.core.next(seq__21758__$1);
var G__21787 = null;
var G__21788 = (0);
var G__21789 = (0);
seq__21758 = G__21786;
chunk__21759 = G__21787;
count__21760 = G__21788;
i__21761 = G__21789;
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
var seq__21790 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__21791 = null;
var count__21792 = (0);
var i__21793 = (0);
while(true){
if((i__21793 < count__21792)){
var event = chunk__21791.cljs$core$IIndexed$_nth$arity$2(null,i__21793);
re_frame.router.dispatch(event);


var G__21794 = seq__21790;
var G__21795 = chunk__21791;
var G__21796 = count__21792;
var G__21797 = (i__21793 + (1));
seq__21790 = G__21794;
chunk__21791 = G__21795;
count__21792 = G__21796;
i__21793 = G__21797;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__21790);
if(temp__5753__auto__){
var seq__21790__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21790__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__21790__$1);
var G__21798 = cljs.core.chunk_rest(seq__21790__$1);
var G__21799 = c__4638__auto__;
var G__21800 = cljs.core.count(c__4638__auto__);
var G__21801 = (0);
seq__21790 = G__21798;
chunk__21791 = G__21799;
count__21792 = G__21800;
i__21793 = G__21801;
continue;
} else {
var event = cljs.core.first(seq__21790__$1);
re_frame.router.dispatch(event);


var G__21802 = cljs.core.next(seq__21790__$1);
var G__21803 = null;
var G__21804 = (0);
var G__21805 = (0);
seq__21790 = G__21802;
chunk__21791 = G__21803;
count__21792 = G__21804;
i__21793 = G__21805;
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
var seq__21806 = cljs.core.seq(value);
var chunk__21807 = null;
var count__21808 = (0);
var i__21809 = (0);
while(true){
if((i__21809 < count__21808)){
var event = chunk__21807.cljs$core$IIndexed$_nth$arity$2(null,i__21809);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__21810 = seq__21806;
var G__21811 = chunk__21807;
var G__21812 = count__21808;
var G__21813 = (i__21809 + (1));
seq__21806 = G__21810;
chunk__21807 = G__21811;
count__21808 = G__21812;
i__21809 = G__21813;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__21806);
if(temp__5753__auto__){
var seq__21806__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21806__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__21806__$1);
var G__21814 = cljs.core.chunk_rest(seq__21806__$1);
var G__21815 = c__4638__auto__;
var G__21816 = cljs.core.count(c__4638__auto__);
var G__21817 = (0);
seq__21806 = G__21814;
chunk__21807 = G__21815;
count__21808 = G__21816;
i__21809 = G__21817;
continue;
} else {
var event = cljs.core.first(seq__21806__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__21818 = cljs.core.next(seq__21806__$1);
var G__21819 = null;
var G__21820 = (0);
var G__21821 = (0);
seq__21806 = G__21818;
chunk__21807 = G__21819;
count__21808 = G__21820;
i__21809 = G__21821;
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
