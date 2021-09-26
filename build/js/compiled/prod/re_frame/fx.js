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
var _STAR_current_trace_STAR__orig_val__21652 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__21653 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$event_SLASH_do_DASH_fx], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__21653);

try{try{var effects = cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,cljs.core.cst$kw$db);
var temp__5753__auto___21688 = cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___21688)){
var new_db_21689 = temp__5753__auto___21688;
var fexpr__21654_21690 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,cljs.core.cst$kw$db,false);
(fexpr__21654_21690.cljs$core$IFn$_invoke$arity$1 ? fexpr__21654_21690.cljs$core$IFn$_invoke$arity$1(new_db_21689) : fexpr__21654_21690.call(null,new_db_21689));
} else {
}

var seq__21655 = cljs.core.seq(effects_without_db);
var chunk__21656 = null;
var count__21657 = (0);
var i__21658 = (0);
while(true){
if((i__21658 < count__21657)){
var vec__21665 = chunk__21656.cljs$core$IIndexed$_nth$arity$2(null,i__21658);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21665,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21665,(1),null);
var temp__5751__auto___21691 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___21691)){
var effect_fn_21692 = temp__5751__auto___21691;
(effect_fn_21692.cljs$core$IFn$_invoke$arity$1 ? effect_fn_21692.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_21692.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__21693 = seq__21655;
var G__21694 = chunk__21656;
var G__21695 = count__21657;
var G__21696 = (i__21658 + (1));
seq__21655 = G__21693;
chunk__21656 = G__21694;
count__21657 = G__21695;
i__21658 = G__21696;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__21655);
if(temp__5753__auto__){
var seq__21655__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21655__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__21655__$1);
var G__21697 = cljs.core.chunk_rest(seq__21655__$1);
var G__21698 = c__4638__auto__;
var G__21699 = cljs.core.count(c__4638__auto__);
var G__21700 = (0);
seq__21655 = G__21697;
chunk__21656 = G__21698;
count__21657 = G__21699;
i__21658 = G__21700;
continue;
} else {
var vec__21668 = cljs.core.first(seq__21655__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21668,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21668,(1),null);
var temp__5751__auto___21701 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___21701)){
var effect_fn_21702 = temp__5751__auto___21701;
(effect_fn_21702.cljs$core$IFn$_invoke$arity$1 ? effect_fn_21702.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_21702.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__21703 = cljs.core.next(seq__21655__$1);
var G__21704 = null;
var G__21705 = (0);
var G__21706 = (0);
seq__21655 = G__21703;
chunk__21656 = G__21704;
count__21657 = G__21705;
i__21658 = G__21706;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__21441__auto___21707 = re_frame.interop.now();
var duration__21442__auto___21708 = (end__21441__auto___21707 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__21442__auto___21708,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__21441__auto___21707);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__21652);
}} else {
var effects = cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,cljs.core.cst$kw$db);
var temp__5753__auto___21709 = cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___21709)){
var new_db_21710 = temp__5753__auto___21709;
var fexpr__21671_21711 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,cljs.core.cst$kw$db,false);
(fexpr__21671_21711.cljs$core$IFn$_invoke$arity$1 ? fexpr__21671_21711.cljs$core$IFn$_invoke$arity$1(new_db_21710) : fexpr__21671_21711.call(null,new_db_21710));
} else {
}

var seq__21672 = cljs.core.seq(effects_without_db);
var chunk__21673 = null;
var count__21674 = (0);
var i__21675 = (0);
while(true){
if((i__21675 < count__21674)){
var vec__21682 = chunk__21673.cljs$core$IIndexed$_nth$arity$2(null,i__21675);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21682,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21682,(1),null);
var temp__5751__auto___21712 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___21712)){
var effect_fn_21713 = temp__5751__auto___21712;
(effect_fn_21713.cljs$core$IFn$_invoke$arity$1 ? effect_fn_21713.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_21713.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__21714 = seq__21672;
var G__21715 = chunk__21673;
var G__21716 = count__21674;
var G__21717 = (i__21675 + (1));
seq__21672 = G__21714;
chunk__21673 = G__21715;
count__21674 = G__21716;
i__21675 = G__21717;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__21672);
if(temp__5753__auto__){
var seq__21672__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21672__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__21672__$1);
var G__21718 = cljs.core.chunk_rest(seq__21672__$1);
var G__21719 = c__4638__auto__;
var G__21720 = cljs.core.count(c__4638__auto__);
var G__21721 = (0);
seq__21672 = G__21718;
chunk__21673 = G__21719;
count__21674 = G__21720;
i__21675 = G__21721;
continue;
} else {
var vec__21685 = cljs.core.first(seq__21672__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21685,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21685,(1),null);
var temp__5751__auto___21722 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___21722)){
var effect_fn_21723 = temp__5751__auto___21722;
(effect_fn_21723.cljs$core$IFn$_invoke$arity$1 ? effect_fn_21723.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_21723.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__21724 = cljs.core.next(seq__21672__$1);
var G__21725 = null;
var G__21726 = (0);
var G__21727 = (0);
seq__21672 = G__21724;
chunk__21673 = G__21725;
count__21674 = G__21726;
i__21675 = G__21727;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__21728){
var map__21729 = p__21728;
var map__21729__$1 = cljs.core.__destructure_map(map__21729);
var effect = map__21729__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21729__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21729__$1,cljs.core.cst$kw$dispatch);
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
var seq__21730 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__21731 = null;
var count__21732 = (0);
var i__21733 = (0);
while(true){
if((i__21733 < count__21732)){
var effect = chunk__21731.cljs$core$IIndexed$_nth$arity$2(null,i__21733);
re_frame.fx.dispatch_later(effect);


var G__21734 = seq__21730;
var G__21735 = chunk__21731;
var G__21736 = count__21732;
var G__21737 = (i__21733 + (1));
seq__21730 = G__21734;
chunk__21731 = G__21735;
count__21732 = G__21736;
i__21733 = G__21737;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__21730);
if(temp__5753__auto__){
var seq__21730__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21730__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__21730__$1);
var G__21738 = cljs.core.chunk_rest(seq__21730__$1);
var G__21739 = c__4638__auto__;
var G__21740 = cljs.core.count(c__4638__auto__);
var G__21741 = (0);
seq__21730 = G__21738;
chunk__21731 = G__21739;
count__21732 = G__21740;
i__21733 = G__21741;
continue;
} else {
var effect = cljs.core.first(seq__21730__$1);
re_frame.fx.dispatch_later(effect);


var G__21742 = cljs.core.next(seq__21730__$1);
var G__21743 = null;
var G__21744 = (0);
var G__21745 = (0);
seq__21730 = G__21742;
chunk__21731 = G__21743;
count__21732 = G__21744;
i__21733 = G__21745;
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
var seq__21746 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__21747 = null;
var count__21748 = (0);
var i__21749 = (0);
while(true){
if((i__21749 < count__21748)){
var vec__21756 = chunk__21747.cljs$core$IIndexed$_nth$arity$2(null,i__21749);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21756,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21756,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$db,effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___21762 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___21762)){
var effect_fn_21763 = temp__5751__auto___21762;
(effect_fn_21763.cljs$core$IFn$_invoke$arity$1 ? effect_fn_21763.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_21763.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__21764 = seq__21746;
var G__21765 = chunk__21747;
var G__21766 = count__21748;
var G__21767 = (i__21749 + (1));
seq__21746 = G__21764;
chunk__21747 = G__21765;
count__21748 = G__21766;
i__21749 = G__21767;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__21746);
if(temp__5753__auto__){
var seq__21746__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21746__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__21746__$1);
var G__21768 = cljs.core.chunk_rest(seq__21746__$1);
var G__21769 = c__4638__auto__;
var G__21770 = cljs.core.count(c__4638__auto__);
var G__21771 = (0);
seq__21746 = G__21768;
chunk__21747 = G__21769;
count__21748 = G__21770;
i__21749 = G__21771;
continue;
} else {
var vec__21759 = cljs.core.first(seq__21746__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21759,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21759,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$db,effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___21772 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___21772)){
var effect_fn_21773 = temp__5751__auto___21772;
(effect_fn_21773.cljs$core$IFn$_invoke$arity$1 ? effect_fn_21773.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_21773.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__21774 = cljs.core.next(seq__21746__$1);
var G__21775 = null;
var G__21776 = (0);
var G__21777 = (0);
seq__21746 = G__21774;
chunk__21747 = G__21775;
count__21748 = G__21776;
i__21749 = G__21777;
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
var seq__21778 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__21779 = null;
var count__21780 = (0);
var i__21781 = (0);
while(true){
if((i__21781 < count__21780)){
var event = chunk__21779.cljs$core$IIndexed$_nth$arity$2(null,i__21781);
re_frame.router.dispatch(event);


var G__21782 = seq__21778;
var G__21783 = chunk__21779;
var G__21784 = count__21780;
var G__21785 = (i__21781 + (1));
seq__21778 = G__21782;
chunk__21779 = G__21783;
count__21780 = G__21784;
i__21781 = G__21785;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__21778);
if(temp__5753__auto__){
var seq__21778__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21778__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__21778__$1);
var G__21786 = cljs.core.chunk_rest(seq__21778__$1);
var G__21787 = c__4638__auto__;
var G__21788 = cljs.core.count(c__4638__auto__);
var G__21789 = (0);
seq__21778 = G__21786;
chunk__21779 = G__21787;
count__21780 = G__21788;
i__21781 = G__21789;
continue;
} else {
var event = cljs.core.first(seq__21778__$1);
re_frame.router.dispatch(event);


var G__21790 = cljs.core.next(seq__21778__$1);
var G__21791 = null;
var G__21792 = (0);
var G__21793 = (0);
seq__21778 = G__21790;
chunk__21779 = G__21791;
count__21780 = G__21792;
i__21781 = G__21793;
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
var seq__21794 = cljs.core.seq(value);
var chunk__21795 = null;
var count__21796 = (0);
var i__21797 = (0);
while(true){
if((i__21797 < count__21796)){
var event = chunk__21795.cljs$core$IIndexed$_nth$arity$2(null,i__21797);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__21798 = seq__21794;
var G__21799 = chunk__21795;
var G__21800 = count__21796;
var G__21801 = (i__21797 + (1));
seq__21794 = G__21798;
chunk__21795 = G__21799;
count__21796 = G__21800;
i__21797 = G__21801;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__21794);
if(temp__5753__auto__){
var seq__21794__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21794__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__21794__$1);
var G__21802 = cljs.core.chunk_rest(seq__21794__$1);
var G__21803 = c__4638__auto__;
var G__21804 = cljs.core.count(c__4638__auto__);
var G__21805 = (0);
seq__21794 = G__21802;
chunk__21795 = G__21803;
count__21796 = G__21804;
i__21797 = G__21805;
continue;
} else {
var event = cljs.core.first(seq__21794__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__21806 = cljs.core.next(seq__21794__$1);
var G__21807 = null;
var G__21808 = (0);
var G__21809 = (0);
seq__21794 = G__21806;
chunk__21795 = G__21807;
count__21796 = G__21808;
i__21797 = G__21809;
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
