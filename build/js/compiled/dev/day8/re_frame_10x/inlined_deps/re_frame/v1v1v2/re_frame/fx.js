// Compiled by ClojureScript 1.10.879 {:optimizations :none}
goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.db');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.events');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace');
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (day8.re-frame-10x.inlined-deps.re-frame.v1v1v2.re-frame.registrar/kinds kind)"));
}
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$reg_fx(id,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.register_handler.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,id,handler);
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
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.do_fx = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$do_fx_after(context){
if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR__orig_val__33695 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__33696 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__33696);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.call(null,effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___33729 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___33729)){
var new_db_33730 = temp__5753__auto___33729;
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false).call(null,new_db_33730);
} else {
}

var seq__33697 = cljs.core.seq.call(null,effects_without_db);
var chunk__33698 = null;
var count__33699 = (0);
var i__33700 = (0);
while(true){
if((i__33700 < count__33699)){
var vec__33707 = cljs.core._nth.call(null,chunk__33698,i__33700);
var effect_key = cljs.core.nth.call(null,vec__33707,(0),null);
var effect_value = cljs.core.nth.call(null,vec__33707,(1),null);
var temp__5751__auto___33731 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___33731)){
var effect_fn_33732 = temp__5751__auto___33731;
effect_fn_33732.call(null,effect_value);
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__33733 = seq__33697;
var G__33734 = chunk__33698;
var G__33735 = count__33699;
var G__33736 = (i__33700 + (1));
seq__33697 = G__33733;
chunk__33698 = G__33734;
count__33699 = G__33735;
i__33700 = G__33736;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__33697);
if(temp__5753__auto__){
var seq__33697__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33697__$1)){
var c__4638__auto__ = cljs.core.chunk_first.call(null,seq__33697__$1);
var G__33737 = cljs.core.chunk_rest.call(null,seq__33697__$1);
var G__33738 = c__4638__auto__;
var G__33739 = cljs.core.count.call(null,c__4638__auto__);
var G__33740 = (0);
seq__33697 = G__33737;
chunk__33698 = G__33738;
count__33699 = G__33739;
i__33700 = G__33740;
continue;
} else {
var vec__33710 = cljs.core.first.call(null,seq__33697__$1);
var effect_key = cljs.core.nth.call(null,vec__33710,(0),null);
var effect_value = cljs.core.nth.call(null,vec__33710,(1),null);
var temp__5751__auto___33741 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___33741)){
var effect_fn_33742 = temp__5751__auto___33741;
effect_fn_33742.call(null,effect_value);
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__33743 = cljs.core.next.call(null,seq__33697__$1);
var G__33744 = null;
var G__33745 = (0);
var G__33746 = (0);
seq__33697 = G__33743;
chunk__33698 = G__33744;
count__33699 = G__33745;
i__33700 = G__33746;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__33351__auto___33747 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now.call(null);
var duration__33352__auto___33748 = (end__33351__auto___33747 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__33352__auto___33748,new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now.call(null)));

day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__33351__auto___33747);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__33695);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.call(null,effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___33749 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___33749)){
var new_db_33750 = temp__5753__auto___33749;
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false).call(null,new_db_33750);
} else {
}

var seq__33713 = cljs.core.seq.call(null,effects_without_db);
var chunk__33714 = null;
var count__33715 = (0);
var i__33716 = (0);
while(true){
if((i__33716 < count__33715)){
var vec__33723 = cljs.core._nth.call(null,chunk__33714,i__33716);
var effect_key = cljs.core.nth.call(null,vec__33723,(0),null);
var effect_value = cljs.core.nth.call(null,vec__33723,(1),null);
var temp__5751__auto___33751 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___33751)){
var effect_fn_33752 = temp__5751__auto___33751;
effect_fn_33752.call(null,effect_value);
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__33753 = seq__33713;
var G__33754 = chunk__33714;
var G__33755 = count__33715;
var G__33756 = (i__33716 + (1));
seq__33713 = G__33753;
chunk__33714 = G__33754;
count__33715 = G__33755;
i__33716 = G__33756;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__33713);
if(temp__5753__auto__){
var seq__33713__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33713__$1)){
var c__4638__auto__ = cljs.core.chunk_first.call(null,seq__33713__$1);
var G__33757 = cljs.core.chunk_rest.call(null,seq__33713__$1);
var G__33758 = c__4638__auto__;
var G__33759 = cljs.core.count.call(null,c__4638__auto__);
var G__33760 = (0);
seq__33713 = G__33757;
chunk__33714 = G__33758;
count__33715 = G__33759;
i__33716 = G__33760;
continue;
} else {
var vec__33726 = cljs.core.first.call(null,seq__33713__$1);
var effect_key = cljs.core.nth.call(null,vec__33726,(0),null);
var effect_value = cljs.core.nth.call(null,vec__33726,(1),null);
var temp__5751__auto___33761 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___33761)){
var effect_fn_33762 = temp__5751__auto___33761;
effect_fn_33762.call(null,effect_value);
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__33763 = cljs.core.next.call(null,seq__33713__$1);
var G__33764 = null;
var G__33765 = (0);
var G__33766 = (0);
seq__33713 = G__33763;
chunk__33714 = G__33764;
count__33715 = G__33765;
i__33716 = G__33766;
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
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$dispatch_later(p__33767){
var map__33768 = p__33767;
var map__33768__$1 = cljs.core.__destructure_map.call(null,map__33768);
var effect = map__33768__$1;
var ms = cljs.core.get.call(null,map__33768__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__33768__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.set_timeout_BANG_.call(null,(function (){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch.call(null,dispatch);
}),ms);
}
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_.call(null,value)){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later.call(null,value);
} else {
var seq__33769 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__33770 = null;
var count__33771 = (0);
var i__33772 = (0);
while(true){
if((i__33772 < count__33771)){
var effect = cljs.core._nth.call(null,chunk__33770,i__33772);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later.call(null,effect);


var G__33773 = seq__33769;
var G__33774 = chunk__33770;
var G__33775 = count__33771;
var G__33776 = (i__33772 + (1));
seq__33769 = G__33773;
chunk__33770 = G__33774;
count__33771 = G__33775;
i__33772 = G__33776;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__33769);
if(temp__5753__auto__){
var seq__33769__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33769__$1)){
var c__4638__auto__ = cljs.core.chunk_first.call(null,seq__33769__$1);
var G__33777 = cljs.core.chunk_rest.call(null,seq__33769__$1);
var G__33778 = c__4638__auto__;
var G__33779 = cljs.core.count.call(null,c__4638__auto__);
var G__33780 = (0);
seq__33769 = G__33777;
chunk__33770 = G__33778;
count__33771 = G__33779;
i__33772 = G__33780;
continue;
} else {
var effect = cljs.core.first.call(null,seq__33769__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later.call(null,effect);


var G__33781 = cljs.core.next.call(null,seq__33769__$1);
var G__33782 = null;
var G__33783 = (0);
var G__33784 = (0);
seq__33769 = G__33781;
chunk__33770 = G__33782;
count__33771 = G__33783;
i__33772 = G__33784;
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
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_.call(null,seq_of_effects)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type.call(null,seq_of_effects));
} else {
var seq__33785 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,seq_of_effects));
var chunk__33786 = null;
var count__33787 = (0);
var i__33788 = (0);
while(true){
if((i__33788 < count__33787)){
var vec__33795 = cljs.core._nth.call(null,chunk__33786,i__33788);
var effect_key = cljs.core.nth.call(null,vec__33795,(0),null);
var effect_value = cljs.core.nth.call(null,vec__33795,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: \":fx\" effect should not contain a :db effect");
} else {
}

var temp__5751__auto___33801 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___33801)){
var effect_fn_33802 = temp__5751__auto___33801;
effect_fn_33802.call(null,effect_value);
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring.");
}


var G__33803 = seq__33785;
var G__33804 = chunk__33786;
var G__33805 = count__33787;
var G__33806 = (i__33788 + (1));
seq__33785 = G__33803;
chunk__33786 = G__33804;
count__33787 = G__33805;
i__33788 = G__33806;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__33785);
if(temp__5753__auto__){
var seq__33785__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33785__$1)){
var c__4638__auto__ = cljs.core.chunk_first.call(null,seq__33785__$1);
var G__33807 = cljs.core.chunk_rest.call(null,seq__33785__$1);
var G__33808 = c__4638__auto__;
var G__33809 = cljs.core.count.call(null,c__4638__auto__);
var G__33810 = (0);
seq__33785 = G__33807;
chunk__33786 = G__33808;
count__33787 = G__33809;
i__33788 = G__33810;
continue;
} else {
var vec__33798 = cljs.core.first.call(null,seq__33785__$1);
var effect_key = cljs.core.nth.call(null,vec__33798,(0),null);
var effect_value = cljs.core.nth.call(null,vec__33798,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: \":fx\" effect should not contain a :db effect");
} else {
}

var temp__5751__auto___33811 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___33811)){
var effect_fn_33812 = temp__5751__auto___33811;
effect_fn_33812.call(null,effect_value);
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring.");
}


var G__33813 = cljs.core.next.call(null,seq__33785__$1);
var G__33814 = null;
var G__33815 = (0);
var G__33816 = (0);
seq__33785 = G__33813;
chunk__33786 = G__33814;
count__33787 = G__33815;
i__33788 = G__33816;
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
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_.call(null,value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch.call(null,value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_.call(null,value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value);
} else {
var seq__33817 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__33818 = null;
var count__33819 = (0);
var i__33820 = (0);
while(true){
if((i__33820 < count__33819)){
var event = cljs.core._nth.call(null,chunk__33818,i__33820);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch.call(null,event);


var G__33821 = seq__33817;
var G__33822 = chunk__33818;
var G__33823 = count__33819;
var G__33824 = (i__33820 + (1));
seq__33817 = G__33821;
chunk__33818 = G__33822;
count__33819 = G__33823;
i__33820 = G__33824;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__33817);
if(temp__5753__auto__){
var seq__33817__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33817__$1)){
var c__4638__auto__ = cljs.core.chunk_first.call(null,seq__33817__$1);
var G__33825 = cljs.core.chunk_rest.call(null,seq__33817__$1);
var G__33826 = c__4638__auto__;
var G__33827 = cljs.core.count.call(null,c__4638__auto__);
var G__33828 = (0);
seq__33817 = G__33825;
chunk__33818 = G__33826;
count__33819 = G__33827;
i__33820 = G__33828;
continue;
} else {
var event = cljs.core.first.call(null,seq__33817__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch.call(null,event);


var G__33829 = cljs.core.next.call(null,seq__33817__$1);
var G__33830 = null;
var G__33831 = (0);
var G__33832 = (0);
seq__33817 = G__33829;
chunk__33818 = G__33830;
count__33819 = G__33831;
i__33820 = G__33832;
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
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__33833 = cljs.core.seq.call(null,value);
var chunk__33834 = null;
var count__33835 = (0);
var i__33836 = (0);
while(true){
if((i__33836 < count__33835)){
var event = cljs.core._nth.call(null,chunk__33834,i__33836);
clear_event.call(null,event);


var G__33837 = seq__33833;
var G__33838 = chunk__33834;
var G__33839 = count__33835;
var G__33840 = (i__33836 + (1));
seq__33833 = G__33837;
chunk__33834 = G__33838;
count__33835 = G__33839;
i__33836 = G__33840;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__33833);
if(temp__5753__auto__){
var seq__33833__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33833__$1)){
var c__4638__auto__ = cljs.core.chunk_first.call(null,seq__33833__$1);
var G__33841 = cljs.core.chunk_rest.call(null,seq__33833__$1);
var G__33842 = c__4638__auto__;
var G__33843 = cljs.core.count.call(null,c__4638__auto__);
var G__33844 = (0);
seq__33833 = G__33841;
chunk__33834 = G__33842;
count__33835 = G__33843;
i__33836 = G__33844;
continue;
} else {
var event = cljs.core.first.call(null,seq__33833__$1);
clear_event.call(null,event);


var G__33845 = cljs.core.next.call(null,seq__33833__$1);
var G__33846 = null;
var G__33847 = (0);
var G__33848 = (0);
seq__33833 = G__33845;
chunk__33834 = G__33846;
count__33835 = G__33847;
i__33836 = G__33848;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map
