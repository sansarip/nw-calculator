// Compiled by ClojureScript 1.10.879 {:optimizations :none}
goog.provide('day8.re_frame_10x.panels.timing.subs');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core');
goog.require('day8.re_frame_10x.tools.metamorphic');
goog.require('day8.re_frame_10x.navigation.epochs.subs');
goog.require('day8.re_frame_10x.panels.traces.subs');
goog.require('day8.re_frame_10x.tools.coll');
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.timing.subs","total-epoch-time","day8.re-frame-10x.panels.timing.subs/total-epoch-time",1007866137),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.traces.subs","filtered-by-epoch-always","day8.re-frame-10x.panels.traces.subs/filtered-by-epoch-always",-1807060768)], null),(function (traces){
var start_of_epoch = cljs.core.nth.call(null,traces,(0));
var end_of_epoch = day8.re_frame_10x.tools.coll.last_in_vec.call(null,traces);
return day8.re_frame_10x.tools.metamorphic.elapsed_time.call(null,start_of_epoch,end_of_epoch);
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.timing.subs","animation-frame-traces","day8.re-frame-10x.panels.timing.subs/animation-frame-traces",-1778771106),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.traces.subs","filtered-by-epoch-always","day8.re-frame-10x.panels.traces.subs/filtered-by-epoch-always",-1807060768)], null),(function (traces){
return cljs.core.filter.call(null,(function (p1__39514_SHARP_){
return ((day8.re_frame_10x.tools.metamorphic.request_animation_frame_QMARK_.call(null,p1__39514_SHARP_)) || (day8.re_frame_10x.tools.metamorphic.request_animation_frame_end_QMARK_.call(null,p1__39514_SHARP_)));
}),traces);
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.timing.subs","animation-frame-count","day8.re-frame-10x.panels.timing.subs/animation-frame-count",-1915979787),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.timing.subs","animation-frame-traces","day8.re-frame-10x.panels.timing.subs/animation-frame-traces",-1778771106)], null),(function (frame_traces){
return cljs.core.count.call(null,cljs.core.filter.call(null,day8.re_frame_10x.tools.metamorphic.request_animation_frame_QMARK_,frame_traces));
}));
/**
 * Returns the sum of nums. (+) returns nil (not 0 like in cljs.core).
 */
day8.re_frame_10x.panels.timing.subs._PLUS_nil = (function day8$re_frame_10x$panels$timing$subs$_PLUS_nil(var_args){
var G__39519 = arguments.length;
switch (G__39519) {
case 0:
return day8.re_frame_10x.panels.timing.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return day8.re_frame_10x.panels.timing.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.panels.timing.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4839__auto__ = [];
var len__4818__auto___39521 = arguments.length;
var i__4819__auto___39522 = (0);
while(true){
if((i__4819__auto___39522 < len__4818__auto___39521)){
args_arr__4839__auto__.push((arguments[i__4819__auto___39522]));

var G__39523 = (i__4819__auto___39522 + (1));
i__4819__auto___39522 = G__39523;
continue;
} else {
}
break;
}

var argseq__4840__auto__ = (new cljs.core.IndexedSeq(args_arr__4839__auto__.slice((2)),(0),null));
return day8.re_frame_10x.panels.timing.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4840__auto__);

}
});

(day8.re_frame_10x.panels.timing.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(day8.re_frame_10x.panels.timing.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$1 = (function (x){
return x;
}));

(day8.re_frame_10x.panels.timing.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return (x + y);
}));

(day8.re_frame_10x.panels.timing.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
return cljs.core.reduce.call(null,cljs.core._PLUS_,(x + y),more);
}));

/** @this {Function} */
(day8.re_frame_10x.panels.timing.subs._PLUS_nil.cljs$lang$applyTo = (function (seq39516){
var G__39517 = cljs.core.first.call(null,seq39516);
var seq39516__$1 = cljs.core.next.call(null,seq39516);
var G__39518 = cljs.core.first.call(null,seq39516__$1);
var seq39516__$2 = cljs.core.next.call(null,seq39516__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39517,G__39518,seq39516__$2);
}));

(day8.re_frame_10x.panels.timing.subs._PLUS_nil.cljs$lang$maxFixedArity = (2));

day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.timing.subs","animation-frame-time","day8.re-frame-10x.panels.timing.subs/animation-frame-time",1191520772),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.timing.subs","animation-frame-traces","day8.re-frame-10x.panels.timing.subs/animation-frame-traces",-1778771106)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.traces.subs","filtered-by-epoch-always","day8.re-frame-10x.panels.traces.subs/filtered-by-epoch-always",-1807060768)], null),(function (p__39524,p__39525){
var vec__39526 = p__39524;
var af_start_end = cljs.core.nth.call(null,vec__39526,(0),null);
var epoch_traces = cljs.core.nth.call(null,vec__39526,(1),null);
var vec__39529 = p__39525;
var _ = cljs.core.nth.call(null,vec__39529,(0),null);
var frame_number = cljs.core.nth.call(null,vec__39529,(1),null);
var frame_pairs = cljs.core.partition.call(null,(2),af_start_end);
if((cljs.core.count.call(null,frame_pairs) > frame_number)){
var vec__39532 = cljs.core.nth.call(null,frame_pairs,(frame_number - (1)));
var start = cljs.core.nth.call(null,vec__39532,(0),null);
var end = cljs.core.nth.call(null,vec__39532,(1),null);
var af_traces = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,day8.re_frame_10x.tools.metamorphic.id_between_xf.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(start),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(end)),epoch_traces);
var total_time = day8.re_frame_10x.tools.metamorphic.elapsed_time.call(null,start,end);
var subs_time = cljs.core.transduce.call(null,cljs.core.comp.call(null,cljs.core.filter.call(null,day8.re_frame_10x.tools.metamorphic.subscription_QMARK_),cljs.core.map.call(null,new cljs.core.Keyword(null,"duration","duration",1444101068))),day8.re_frame_10x.panels.timing.subs._PLUS_nil,af_traces);
var render_time = cljs.core.transduce.call(null,cljs.core.comp.call(null,cljs.core.filter.call(null,day8.re_frame_10x.tools.metamorphic.render_QMARK_),cljs.core.map.call(null,new cljs.core.Keyword(null,"duration","duration",1444101068))),day8.re_frame_10x.panels.timing.subs._PLUS_nil,af_traces);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("timing","animation-frame-total","timing/animation-frame-total",-1923627693),total_time,new cljs.core.Keyword("timing","animation-frame-subs","timing/animation-frame-subs",128098226),subs_time,new cljs.core.Keyword("timing","animation-frame-render","timing/animation-frame-render",1587090151),render_time,new cljs.core.Keyword("timing","animation-frame-misc","timing/animation-frame-misc",1250948573),((total_time - subs_time) - render_time)], null);
} else {
return null;
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.timing.subs","event-processing-time","day8.re-frame-10x.panels.timing.subs/event-processing-time",2055795860),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.subs","selected-match-state","day8.re-frame-10x.navigation.epochs.subs/selected-match-state",-726131883)], null),(function (match){
var map__39535 = cljs.core.get.call(null,match,new cljs.core.Keyword(null,"timing","timing",-1849225195));
var map__39535__$1 = cljs.core.__destructure_map.call(null,map__39535);
var event_time = cljs.core.get.call(null,map__39535__$1,new cljs.core.Keyword("re-frame","event-time","re-frame/event-time",-1349372188));
var event_handler_time = cljs.core.get.call(null,map__39535__$1,new cljs.core.Keyword("re-frame","event-handler-time","re-frame/event-handler-time",1278050644));
var event_dofx_time = cljs.core.get.call(null,map__39535__$1,new cljs.core.Keyword("re-frame","event-dofx-time","re-frame/event-dofx-time",650880716));
var event_run_time = cljs.core.get.call(null,map__39535__$1,new cljs.core.Keyword("re-frame","event-run-time","re-frame/event-run-time",1941554897));
var remaining_interceptors = ((event_time - event_handler_time) - event_dofx_time);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("timing","event-total","timing/event-total",127009054),event_run_time,new cljs.core.Keyword("timing","event-handler","timing/event-handler",383979787),event_handler_time,new cljs.core.Keyword("timing","event-effects","timing/event-effects",-1312815404),event_dofx_time,new cljs.core.Keyword("timing","event-interceptors","timing/event-interceptors",-113832767),remaining_interceptors,new cljs.core.Keyword("timing","event-misc","timing/event-misc",1534165210),((event_run_time - event_handler_time) - event_dofx_time)], null);
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.timing.subs","render-time","day8.re-frame-10x.panels.timing.subs/render-time",-1110199694),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.traces.subs","filtered-by-epoch-always","day8.re-frame-10x.panels.traces.subs/filtered-by-epoch-always",-1807060768)], null),(function (traces){
var start_of_render = cljs.core.first.call(null,cljs.core.filter.call(null,day8.re_frame_10x.tools.metamorphic.request_animation_frame_QMARK_,traces));
var end_of_epoch = day8.re_frame_10x.tools.coll.last_in_vec.call(null,traces);
return day8.re_frame_10x.tools.metamorphic.elapsed_time.call(null,start_of_render,end_of_epoch);
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.timing.subs","data-available?","day8.re-frame-10x.panels.timing.subs/data-available?",-1497038959),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.traces.subs","filtered-by-epoch-always","day8.re-frame-10x.panels.traces.subs/filtered-by-epoch-always",-1807060768)], null),(function (traces){
return cljs.core.seq.call(null,traces);
}));

//# sourceMappingURL=subs.js.map
