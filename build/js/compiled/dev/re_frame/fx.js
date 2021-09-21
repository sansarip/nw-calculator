// Compiled by ClojureScript 1.10.879 {:optimizations :none}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
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
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR__orig_val__16501 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__16502 = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__16502);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.call(null,effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___16535 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___16535)){
var new_db_16536 = temp__5753__auto___16535;
re_frame.registrar.get_handler.call(null,re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false).call(null,new_db_16536);
} else {
}

var seq__16503 = cljs.core.seq.call(null,effects_without_db);
var chunk__16504 = null;
var count__16505 = (0);
var i__16506 = (0);
while(true){
if((i__16506 < count__16505)){
var vec__16513 = cljs.core._nth.call(null,chunk__16504,i__16506);
var effect_key = cljs.core.nth.call(null,vec__16513,(0),null);
var effect_value = cljs.core.nth.call(null,vec__16513,(1),null);
var temp__5751__auto___16537 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___16537)){
var effect_fn_16538 = temp__5751__auto___16537;
effect_fn_16538.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__16539 = seq__16503;
var G__16540 = chunk__16504;
var G__16541 = count__16505;
var G__16542 = (i__16506 + (1));
seq__16503 = G__16539;
chunk__16504 = G__16540;
count__16505 = G__16541;
i__16506 = G__16542;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__16503);
if(temp__5753__auto__){
var seq__16503__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16503__$1)){
var c__4638__auto__ = cljs.core.chunk_first.call(null,seq__16503__$1);
var G__16543 = cljs.core.chunk_rest.call(null,seq__16503__$1);
var G__16544 = c__4638__auto__;
var G__16545 = cljs.core.count.call(null,c__4638__auto__);
var G__16546 = (0);
seq__16503 = G__16543;
chunk__16504 = G__16544;
count__16505 = G__16545;
i__16506 = G__16546;
continue;
} else {
var vec__16516 = cljs.core.first.call(null,seq__16503__$1);
var effect_key = cljs.core.nth.call(null,vec__16516,(0),null);
var effect_value = cljs.core.nth.call(null,vec__16516,(1),null);
var temp__5751__auto___16547 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___16547)){
var effect_fn_16548 = temp__5751__auto___16547;
effect_fn_16548.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__16549 = cljs.core.next.call(null,seq__16503__$1);
var G__16550 = null;
var G__16551 = (0);
var G__16552 = (0);
seq__16503 = G__16549;
chunk__16504 = G__16550;
count__16505 = G__16551;
i__16506 = G__16552;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__16299__auto___16553 = re_frame.interop.now.call(null);
var duration__16300__auto___16554 = (end__16299__auto___16553 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__16300__auto___16554,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__16299__auto___16553);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__16501);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.call(null,effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___16555 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___16555)){
var new_db_16556 = temp__5753__auto___16555;
re_frame.registrar.get_handler.call(null,re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false).call(null,new_db_16556);
} else {
}

var seq__16519 = cljs.core.seq.call(null,effects_without_db);
var chunk__16520 = null;
var count__16521 = (0);
var i__16522 = (0);
while(true){
if((i__16522 < count__16521)){
var vec__16529 = cljs.core._nth.call(null,chunk__16520,i__16522);
var effect_key = cljs.core.nth.call(null,vec__16529,(0),null);
var effect_value = cljs.core.nth.call(null,vec__16529,(1),null);
var temp__5751__auto___16557 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___16557)){
var effect_fn_16558 = temp__5751__auto___16557;
effect_fn_16558.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__16559 = seq__16519;
var G__16560 = chunk__16520;
var G__16561 = count__16521;
var G__16562 = (i__16522 + (1));
seq__16519 = G__16559;
chunk__16520 = G__16560;
count__16521 = G__16561;
i__16522 = G__16562;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__16519);
if(temp__5753__auto__){
var seq__16519__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16519__$1)){
var c__4638__auto__ = cljs.core.chunk_first.call(null,seq__16519__$1);
var G__16563 = cljs.core.chunk_rest.call(null,seq__16519__$1);
var G__16564 = c__4638__auto__;
var G__16565 = cljs.core.count.call(null,c__4638__auto__);
var G__16566 = (0);
seq__16519 = G__16563;
chunk__16520 = G__16564;
count__16521 = G__16565;
i__16522 = G__16566;
continue;
} else {
var vec__16532 = cljs.core.first.call(null,seq__16519__$1);
var effect_key = cljs.core.nth.call(null,vec__16532,(0),null);
var effect_value = cljs.core.nth.call(null,vec__16532,(1),null);
var temp__5751__auto___16567 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___16567)){
var effect_fn_16568 = temp__5751__auto___16567;
effect_fn_16568.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__16569 = cljs.core.next.call(null,seq__16519__$1);
var G__16570 = null;
var G__16571 = (0);
var G__16572 = (0);
seq__16519 = G__16569;
chunk__16520 = G__16570;
count__16521 = G__16571;
i__16522 = G__16572;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__16573){
var map__16574 = p__16573;
var map__16574__$1 = cljs.core.__destructure_map.call(null,map__16574);
var effect = map__16574__$1;
var ms = cljs.core.get.call(null,map__16574__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__16574__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
return re_frame.interop.set_timeout_BANG_.call(null,(function (){
return re_frame.router.dispatch.call(null,dispatch);
}),ms);
}
});
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_.call(null,value)){
return re_frame.fx.dispatch_later.call(null,value);
} else {
var seq__16575 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__16576 = null;
var count__16577 = (0);
var i__16578 = (0);
while(true){
if((i__16578 < count__16577)){
var effect = cljs.core._nth.call(null,chunk__16576,i__16578);
re_frame.fx.dispatch_later.call(null,effect);


var G__16579 = seq__16575;
var G__16580 = chunk__16576;
var G__16581 = count__16577;
var G__16582 = (i__16578 + (1));
seq__16575 = G__16579;
chunk__16576 = G__16580;
count__16577 = G__16581;
i__16578 = G__16582;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__16575);
if(temp__5753__auto__){
var seq__16575__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16575__$1)){
var c__4638__auto__ = cljs.core.chunk_first.call(null,seq__16575__$1);
var G__16583 = cljs.core.chunk_rest.call(null,seq__16575__$1);
var G__16584 = c__4638__auto__;
var G__16585 = cljs.core.count.call(null,c__4638__auto__);
var G__16586 = (0);
seq__16575 = G__16583;
chunk__16576 = G__16584;
count__16577 = G__16585;
i__16578 = G__16586;
continue;
} else {
var effect = cljs.core.first.call(null,seq__16575__$1);
re_frame.fx.dispatch_later.call(null,effect);


var G__16587 = cljs.core.next.call(null,seq__16575__$1);
var G__16588 = null;
var G__16589 = (0);
var G__16590 = (0);
seq__16575 = G__16587;
chunk__16576 = G__16588;
count__16577 = G__16589;
i__16578 = G__16590;
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
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_.call(null,seq_of_effects)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type.call(null,seq_of_effects));
} else {
var seq__16591 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,seq_of_effects));
var chunk__16592 = null;
var count__16593 = (0);
var i__16594 = (0);
while(true){
if((i__16594 < count__16593)){
var vec__16601 = cljs.core._nth.call(null,chunk__16592,i__16594);
var effect_key = cljs.core.nth.call(null,vec__16601,(0),null);
var effect_value = cljs.core.nth.call(null,vec__16601,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: \":fx\" effect should not contain a :db effect");
} else {
}

var temp__5751__auto___16607 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___16607)){
var effect_fn_16608 = temp__5751__auto___16607;
effect_fn_16608.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring.");
}


var G__16609 = seq__16591;
var G__16610 = chunk__16592;
var G__16611 = count__16593;
var G__16612 = (i__16594 + (1));
seq__16591 = G__16609;
chunk__16592 = G__16610;
count__16593 = G__16611;
i__16594 = G__16612;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__16591);
if(temp__5753__auto__){
var seq__16591__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16591__$1)){
var c__4638__auto__ = cljs.core.chunk_first.call(null,seq__16591__$1);
var G__16613 = cljs.core.chunk_rest.call(null,seq__16591__$1);
var G__16614 = c__4638__auto__;
var G__16615 = cljs.core.count.call(null,c__4638__auto__);
var G__16616 = (0);
seq__16591 = G__16613;
chunk__16592 = G__16614;
count__16593 = G__16615;
i__16594 = G__16616;
continue;
} else {
var vec__16604 = cljs.core.first.call(null,seq__16591__$1);
var effect_key = cljs.core.nth.call(null,vec__16604,(0),null);
var effect_value = cljs.core.nth.call(null,vec__16604,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: \":fx\" effect should not contain a :db effect");
} else {
}

var temp__5751__auto___16617 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___16617)){
var effect_fn_16618 = temp__5751__auto___16617;
effect_fn_16618.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring.");
}


var G__16619 = cljs.core.next.call(null,seq__16591__$1);
var G__16620 = null;
var G__16621 = (0);
var G__16622 = (0);
seq__16591 = G__16619;
chunk__16592 = G__16620;
count__16593 = G__16621;
i__16594 = G__16622;
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
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value);
} else {
var seq__16623 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__16624 = null;
var count__16625 = (0);
var i__16626 = (0);
while(true){
if((i__16626 < count__16625)){
var event = cljs.core._nth.call(null,chunk__16624,i__16626);
re_frame.router.dispatch.call(null,event);


var G__16627 = seq__16623;
var G__16628 = chunk__16624;
var G__16629 = count__16625;
var G__16630 = (i__16626 + (1));
seq__16623 = G__16627;
chunk__16624 = G__16628;
count__16625 = G__16629;
i__16626 = G__16630;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__16623);
if(temp__5753__auto__){
var seq__16623__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16623__$1)){
var c__4638__auto__ = cljs.core.chunk_first.call(null,seq__16623__$1);
var G__16631 = cljs.core.chunk_rest.call(null,seq__16623__$1);
var G__16632 = c__4638__auto__;
var G__16633 = cljs.core.count.call(null,c__4638__auto__);
var G__16634 = (0);
seq__16623 = G__16631;
chunk__16624 = G__16632;
count__16625 = G__16633;
i__16626 = G__16634;
continue;
} else {
var event = cljs.core.first.call(null,seq__16623__$1);
re_frame.router.dispatch.call(null,event);


var G__16635 = cljs.core.next.call(null,seq__16623__$1);
var G__16636 = null;
var G__16637 = (0);
var G__16638 = (0);
seq__16623 = G__16635;
chunk__16624 = G__16636;
count__16625 = G__16637;
i__16626 = G__16638;
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
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__16639 = cljs.core.seq.call(null,value);
var chunk__16640 = null;
var count__16641 = (0);
var i__16642 = (0);
while(true){
if((i__16642 < count__16641)){
var event = cljs.core._nth.call(null,chunk__16640,i__16642);
clear_event.call(null,event);


var G__16643 = seq__16639;
var G__16644 = chunk__16640;
var G__16645 = count__16641;
var G__16646 = (i__16642 + (1));
seq__16639 = G__16643;
chunk__16640 = G__16644;
count__16641 = G__16645;
i__16642 = G__16646;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__16639);
if(temp__5753__auto__){
var seq__16639__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16639__$1)){
var c__4638__auto__ = cljs.core.chunk_first.call(null,seq__16639__$1);
var G__16647 = cljs.core.chunk_rest.call(null,seq__16639__$1);
var G__16648 = c__4638__auto__;
var G__16649 = cljs.core.count.call(null,c__4638__auto__);
var G__16650 = (0);
seq__16639 = G__16647;
chunk__16640 = G__16648;
count__16641 = G__16649;
i__16642 = G__16650;
continue;
} else {
var event = cljs.core.first.call(null,seq__16639__$1);
clear_event.call(null,event);


var G__16651 = cljs.core.next.call(null,seq__16639__$1);
var G__16652 = null;
var G__16653 = (0);
var G__16654 = (0);
seq__16639 = G__16651;
chunk__16640 = G__16652;
count__16641 = G__16653;
i__16642 = G__16654;
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
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref.call(null,re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map
