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
var _STAR_current_trace_STAR__orig_val__21654 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__21655 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$event_SLASH_do_DASH_fx], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__21655);

try{try{var effects = cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,cljs.core.cst$kw$db);
var temp__5753__auto___21690 = cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___21690)){
var new_db_21691 = temp__5753__auto___21690;
var fexpr__21656_21692 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,cljs.core.cst$kw$db,false);
(fexpr__21656_21692.cljs$core$IFn$_invoke$arity$1 ? fexpr__21656_21692.cljs$core$IFn$_invoke$arity$1(new_db_21691) : fexpr__21656_21692.call(null,new_db_21691));
} else {
}

var seq__21657 = cljs.core.seq(effects_without_db);
var chunk__21658 = null;
var count__21659 = (0);
var i__21660 = (0);
while(true){
if((i__21660 < count__21659)){
var vec__21667 = chunk__21658.cljs$core$IIndexed$_nth$arity$2(null,i__21660);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21667,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21667,(1),null);
var temp__5751__auto___21693 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___21693)){
var effect_fn_21694 = temp__5751__auto___21693;
(effect_fn_21694.cljs$core$IFn$_invoke$arity$1 ? effect_fn_21694.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_21694.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__21695 = seq__21657;
var G__21696 = chunk__21658;
var G__21697 = count__21659;
var G__21698 = (i__21660 + (1));
seq__21657 = G__21695;
chunk__21658 = G__21696;
count__21659 = G__21697;
i__21660 = G__21698;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__21657);
if(temp__5753__auto__){
var seq__21657__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21657__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__21657__$1);
var G__21699 = cljs.core.chunk_rest(seq__21657__$1);
var G__21700 = c__4638__auto__;
var G__21701 = cljs.core.count(c__4638__auto__);
var G__21702 = (0);
seq__21657 = G__21699;
chunk__21658 = G__21700;
count__21659 = G__21701;
i__21660 = G__21702;
continue;
} else {
var vec__21670 = cljs.core.first(seq__21657__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21670,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21670,(1),null);
var temp__5751__auto___21703 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___21703)){
var effect_fn_21704 = temp__5751__auto___21703;
(effect_fn_21704.cljs$core$IFn$_invoke$arity$1 ? effect_fn_21704.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_21704.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__21705 = cljs.core.next(seq__21657__$1);
var G__21706 = null;
var G__21707 = (0);
var G__21708 = (0);
seq__21657 = G__21705;
chunk__21658 = G__21706;
count__21659 = G__21707;
i__21660 = G__21708;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__21443__auto___21709 = re_frame.interop.now();
var duration__21444__auto___21710 = (end__21443__auto___21709 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__21444__auto___21710,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__21443__auto___21709);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__21654);
}} else {
var effects = cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,cljs.core.cst$kw$db);
var temp__5753__auto___21711 = cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___21711)){
var new_db_21712 = temp__5753__auto___21711;
var fexpr__21673_21713 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,cljs.core.cst$kw$db,false);
(fexpr__21673_21713.cljs$core$IFn$_invoke$arity$1 ? fexpr__21673_21713.cljs$core$IFn$_invoke$arity$1(new_db_21712) : fexpr__21673_21713.call(null,new_db_21712));
} else {
}

var seq__21674 = cljs.core.seq(effects_without_db);
var chunk__21675 = null;
var count__21676 = (0);
var i__21677 = (0);
while(true){
if((i__21677 < count__21676)){
var vec__21684 = chunk__21675.cljs$core$IIndexed$_nth$arity$2(null,i__21677);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21684,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21684,(1),null);
var temp__5751__auto___21714 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___21714)){
var effect_fn_21715 = temp__5751__auto___21714;
(effect_fn_21715.cljs$core$IFn$_invoke$arity$1 ? effect_fn_21715.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_21715.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__21716 = seq__21674;
var G__21717 = chunk__21675;
var G__21718 = count__21676;
var G__21719 = (i__21677 + (1));
seq__21674 = G__21716;
chunk__21675 = G__21717;
count__21676 = G__21718;
i__21677 = G__21719;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__21674);
if(temp__5753__auto__){
var seq__21674__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21674__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__21674__$1);
var G__21720 = cljs.core.chunk_rest(seq__21674__$1);
var G__21721 = c__4638__auto__;
var G__21722 = cljs.core.count(c__4638__auto__);
var G__21723 = (0);
seq__21674 = G__21720;
chunk__21675 = G__21721;
count__21676 = G__21722;
i__21677 = G__21723;
continue;
} else {
var vec__21687 = cljs.core.first(seq__21674__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21687,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21687,(1),null);
var temp__5751__auto___21724 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___21724)){
var effect_fn_21725 = temp__5751__auto___21724;
(effect_fn_21725.cljs$core$IFn$_invoke$arity$1 ? effect_fn_21725.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_21725.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__21726 = cljs.core.next(seq__21674__$1);
var G__21727 = null;
var G__21728 = (0);
var G__21729 = (0);
seq__21674 = G__21726;
chunk__21675 = G__21727;
count__21676 = G__21728;
i__21677 = G__21729;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__21730){
var map__21731 = p__21730;
var map__21731__$1 = cljs.core.__destructure_map(map__21731);
var effect = map__21731__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21731__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21731__$1,cljs.core.cst$kw$dispatch);
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
var seq__21732 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__21733 = null;
var count__21734 = (0);
var i__21735 = (0);
while(true){
if((i__21735 < count__21734)){
var effect = chunk__21733.cljs$core$IIndexed$_nth$arity$2(null,i__21735);
re_frame.fx.dispatch_later(effect);


var G__21736 = seq__21732;
var G__21737 = chunk__21733;
var G__21738 = count__21734;
var G__21739 = (i__21735 + (1));
seq__21732 = G__21736;
chunk__21733 = G__21737;
count__21734 = G__21738;
i__21735 = G__21739;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__21732);
if(temp__5753__auto__){
var seq__21732__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21732__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__21732__$1);
var G__21740 = cljs.core.chunk_rest(seq__21732__$1);
var G__21741 = c__4638__auto__;
var G__21742 = cljs.core.count(c__4638__auto__);
var G__21743 = (0);
seq__21732 = G__21740;
chunk__21733 = G__21741;
count__21734 = G__21742;
i__21735 = G__21743;
continue;
} else {
var effect = cljs.core.first(seq__21732__$1);
re_frame.fx.dispatch_later(effect);


var G__21744 = cljs.core.next(seq__21732__$1);
var G__21745 = null;
var G__21746 = (0);
var G__21747 = (0);
seq__21732 = G__21744;
chunk__21733 = G__21745;
count__21734 = G__21746;
i__21735 = G__21747;
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
var seq__21748 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__21749 = null;
var count__21750 = (0);
var i__21751 = (0);
while(true){
if((i__21751 < count__21750)){
var vec__21758 = chunk__21749.cljs$core$IIndexed$_nth$arity$2(null,i__21751);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21758,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21758,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$db,effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___21764 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___21764)){
var effect_fn_21765 = temp__5751__auto___21764;
(effect_fn_21765.cljs$core$IFn$_invoke$arity$1 ? effect_fn_21765.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_21765.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__21766 = seq__21748;
var G__21767 = chunk__21749;
var G__21768 = count__21750;
var G__21769 = (i__21751 + (1));
seq__21748 = G__21766;
chunk__21749 = G__21767;
count__21750 = G__21768;
i__21751 = G__21769;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__21748);
if(temp__5753__auto__){
var seq__21748__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21748__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__21748__$1);
var G__21770 = cljs.core.chunk_rest(seq__21748__$1);
var G__21771 = c__4638__auto__;
var G__21772 = cljs.core.count(c__4638__auto__);
var G__21773 = (0);
seq__21748 = G__21770;
chunk__21749 = G__21771;
count__21750 = G__21772;
i__21751 = G__21773;
continue;
} else {
var vec__21761 = cljs.core.first(seq__21748__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21761,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21761,(1),null);
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


var G__21776 = cljs.core.next(seq__21748__$1);
var G__21777 = null;
var G__21778 = (0);
var G__21779 = (0);
seq__21748 = G__21776;
chunk__21749 = G__21777;
count__21750 = G__21778;
i__21751 = G__21779;
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
var seq__21780 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__21781 = null;
var count__21782 = (0);
var i__21783 = (0);
while(true){
if((i__21783 < count__21782)){
var event = chunk__21781.cljs$core$IIndexed$_nth$arity$2(null,i__21783);
re_frame.router.dispatch(event);


var G__21784 = seq__21780;
var G__21785 = chunk__21781;
var G__21786 = count__21782;
var G__21787 = (i__21783 + (1));
seq__21780 = G__21784;
chunk__21781 = G__21785;
count__21782 = G__21786;
i__21783 = G__21787;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__21780);
if(temp__5753__auto__){
var seq__21780__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21780__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__21780__$1);
var G__21788 = cljs.core.chunk_rest(seq__21780__$1);
var G__21789 = c__4638__auto__;
var G__21790 = cljs.core.count(c__4638__auto__);
var G__21791 = (0);
seq__21780 = G__21788;
chunk__21781 = G__21789;
count__21782 = G__21790;
i__21783 = G__21791;
continue;
} else {
var event = cljs.core.first(seq__21780__$1);
re_frame.router.dispatch(event);


var G__21792 = cljs.core.next(seq__21780__$1);
var G__21793 = null;
var G__21794 = (0);
var G__21795 = (0);
seq__21780 = G__21792;
chunk__21781 = G__21793;
count__21782 = G__21794;
i__21783 = G__21795;
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
var seq__21796 = cljs.core.seq(value);
var chunk__21797 = null;
var count__21798 = (0);
var i__21799 = (0);
while(true){
if((i__21799 < count__21798)){
var event = chunk__21797.cljs$core$IIndexed$_nth$arity$2(null,i__21799);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__21800 = seq__21796;
var G__21801 = chunk__21797;
var G__21802 = count__21798;
var G__21803 = (i__21799 + (1));
seq__21796 = G__21800;
chunk__21797 = G__21801;
count__21798 = G__21802;
i__21799 = G__21803;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__21796);
if(temp__5753__auto__){
var seq__21796__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21796__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__21796__$1);
var G__21804 = cljs.core.chunk_rest(seq__21796__$1);
var G__21805 = c__4638__auto__;
var G__21806 = cljs.core.count(c__4638__auto__);
var G__21807 = (0);
seq__21796 = G__21804;
chunk__21797 = G__21805;
count__21798 = G__21806;
i__21799 = G__21807;
continue;
} else {
var event = cljs.core.first(seq__21796__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__21808 = cljs.core.next(seq__21796__$1);
var G__21809 = null;
var G__21810 = (0);
var G__21811 = (0);
seq__21796 = G__21808;
chunk__21797 = G__21809;
count__21798 = G__21810;
i__21799 = G__21811;
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
