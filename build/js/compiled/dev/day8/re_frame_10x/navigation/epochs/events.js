// Compiled by ClojureScript 1.10.879 {:optimizations :none}
goog.provide('day8.re_frame_10x.navigation.epochs.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('re_frame.db');
goog.require('re_frame.trace');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core');
goog.require('day8.re_frame_10x.fx.debounce');
goog.require('day8.re_frame_10x.fx.scroll');
goog.require('day8.re_frame_10x.tools.metamorphic');
goog.require('day8.re_frame_10x.tools.coll');
day8.re_frame_10x.navigation.epochs.events.first_match_id = (function day8$re_frame_10x$navigation$epochs$events$first_match_id(m){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"match-info","match-info",666319879).cljs$core$IFn$_invoke$arity$1(m)));
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.events","scroll-into-view-debounced","day8.re-frame-10x.navigation.epochs.events/scroll-into-view-debounced",-416908306),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.trim_v], null),(function (_,p__33991){
var vec__33992 = p__33991;
var js_dom = cljs.core.nth.call(null,vec__33992,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.fx.debounce","dispatch","day8.re-frame-10x.fx.debounce/dispatch",-293096343),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.events","scroll-into-view","day8.re-frame-10x.navigation.epochs.events/scroll-into-view",-1183173127),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.events","scroll-into-view","day8.re-frame-10x.navigation.epochs.events/scroll-into-view",-1183173127),js_dom], null),new cljs.core.Keyword(null,"delay","delay",-574225219),(128)], null)], null)], null)], null);
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.events","scroll-into-view","day8.re-frame-10x.navigation.epochs.events/scroll-into-view",-1183173127),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.trim_v], null),(function (_,p__33995){
var vec__33996 = p__33995;
var js_dom = cljs.core.nth.call(null,vec__33996,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.fx.scroll","into-view","day8.re-frame-10x.fx.scroll/into-view",1866001434),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"js-dom","js-dom",-1971531703),js_dom], null)], null)], null)], null);
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.events","receive-new-traces","day8.re-frame-10x.navigation.epochs.events/receive-new-traces",542616228),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.trim_v], null),(function (p__34000,p__34001){
var map__34002 = p__34000;
var map__34002__$1 = cljs.core.__destructure_map.call(null,map__34002);
var db = cljs.core.get.call(null,map__34002__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__34003 = p__34001;
var new_traces = cljs.core.nth.call(null,vec__34003,(0),null);
var temp__5751__auto__ = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new_traces);
if(cljs.core.truth_(temp__5751__auto__)){
var sorted_traces = temp__5751__auto__;
var number_of_epochs_to_retain = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"number-of-epochs","number-of-epochs",57769252)], null));
var events_to_ignore = cljs.core.set.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"event-id","event-id",2130210178),cljs.core.vals.call(null,cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"ignored-events","ignored-events",1738756589)], null)))));
var previous_traces = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"all","all",892129742)], null),cljs.core.PersistentVector.EMPTY);
var parse_state = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"epochs","epochs",1796936425),new cljs.core.Keyword(null,"parse-state","parse-state",-1931312535)], null),day8.re_frame_10x.tools.metamorphic.initial_parse_state);
var map__34006 = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"low-level-trace","low-level-trace",638447092)], null));
var map__34006__$1 = cljs.core.__destructure_map.call(null,map__34006);
var drop_re_frame = cljs.core.get.call(null,map__34006__$1,new cljs.core.Keyword(null,"re-frame","re-frame",-1039473033));
var drop_reagent = cljs.core.get.call(null,map__34006__$1,new cljs.core.Keyword(null,"reagent","reagent",2131627322));
var all_traces = cljs.core.into.call(null,previous_traces,sorted_traces);
var parse_state__$1 = day8.re_frame_10x.tools.metamorphic.parse_traces.call(null,parse_state,sorted_traces);
var new_matches = new cljs.core.Keyword(null,"partitions","partitions",602979514).cljs$core$IFn$_invoke$arity$1(parse_state__$1);
var previous_matches = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"epochs","epochs",1796936425),new cljs.core.Keyword(null,"matches","matches",635497998)], null),cljs.core.PersistentVector.EMPTY);
var parse_state__$2 = cljs.core.assoc.call(null,parse_state__$1,new cljs.core.Keyword(null,"partitions","partitions",602979514),cljs.core.PersistentVector.EMPTY);
var new_matches__$1 = cljs.core.remove.call(null,(function (match){
var event = cljs.core.get_in.call(null,day8.re_frame_10x.tools.metamorphic.matched_event.call(null,match),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"event","event",301435442)], null));
return cljs.core.contains_QMARK_.call(null,events_to_ignore,cljs.core.first.call(null,event));
}),new_matches);
var subscription_info = day8.re_frame_10x.tools.metamorphic.subscription_info.call(null,cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"epochs","epochs",1796936425),new cljs.core.Keyword(null,"subscription-info","subscription-info",-1785424092)], null),cljs.core.PersistentArrayMap.EMPTY),sorted_traces,cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415)], null)));
var sub_state = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"epochs","epochs",1796936425),new cljs.core.Keyword(null,"sub-state","sub-state",-2129237981)], null),day8.re_frame_10x.tools.metamorphic.initial_sub_state);
var subscription_match_state = day8.re_frame_10x.tools.metamorphic.subscription_match_state.call(null,sub_state,all_traces,new_matches__$1);
var subscription_matches = cljs.core.rest.call(null,subscription_match_state);
var new_sub_state = cljs.core.last.call(null,subscription_match_state);
var timing = cljs.core.mapv.call(null,(function (match){
var epoch_traces = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.comp.call(null,day8.re_frame_10x.tools.coll.id_between_xf.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,match)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,match)))),all_traces);
var start_of_epoch = cljs.core.nth.call(null,epoch_traces,(0));
var event_handler_trace = cljs.core.first.call(null,cljs.core.filter.call(null,day8.re_frame_10x.tools.metamorphic.event_handler_QMARK_,epoch_traces));
var dofx_trace = cljs.core.first.call(null,cljs.core.filter.call(null,day8.re_frame_10x.tools.metamorphic.event_dofx_QMARK_,epoch_traces));
var event_trace = cljs.core.first.call(null,cljs.core.filter.call(null,day8.re_frame_10x.tools.metamorphic.event_run_QMARK_,epoch_traces));
var finish_run = (function (){var or__4212__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,day8.re_frame_10x.tools.metamorphic.finish_run_QMARK_,epoch_traces));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return day8.re_frame_10x.tools.coll.last_in_vec.call(null,epoch_traces);
}
})();
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("re-frame","event-run-time","re-frame/event-run-time",1941554897),day8.re_frame_10x.tools.metamorphic.elapsed_time.call(null,start_of_epoch,finish_run),new cljs.core.Keyword("re-frame","event-time","re-frame/event-time",-1349372188),new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(event_trace),new cljs.core.Keyword("re-frame","event-handler-time","re-frame/event-handler-time",1278050644),new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(event_handler_trace),new cljs.core.Keyword("re-frame","event-dofx-time","re-frame/event-dofx-time",650880716),new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(dofx_trace)], null);
}),new_matches__$1);
var new_matches__$2 = cljs.core.map.call(null,(function (match,sub_match,t){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"match-info","match-info",666319879),match,new cljs.core.Keyword(null,"sub-state","sub-state",-2129237981),sub_match,new cljs.core.Keyword(null,"timing","timing",-1849225195),t], null);
}),new_matches__$1,subscription_matches,timing);
var quiescent_QMARK_ = (function (){var or__4212__auto__ = cljs.core.seq.call(null,new_matches__$2);
if(or__4212__auto__){
return or__4212__auto__;
} else {
return cljs.core.filter.call(null,day8.re_frame_10x.tools.metamorphic.quiescent_QMARK_,sorted_traces);
}
})();
var all_matches = cljs.core.into.call(null,previous_matches,new_matches__$2);
var retained_matches = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.take_last.call(null,number_of_epochs_to_retain,all_matches));
var first_id_to_retain = day8.re_frame_10x.navigation.epochs.events.first_match_id.call(null,cljs.core.first.call(null,retained_matches));
var retained_traces = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.comp.call(null,cljs.core.drop_while.call(null,(function (p1__33999_SHARP_){
return (new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__33999_SHARP_) < first_id_to_retain);
})),cljs.core.remove.call(null,(function (trace){
var or__4212__auto__ = (cljs.core.truth_(drop_reagent)?day8.re_frame_10x.tools.metamorphic.low_level_reagent_trace_QMARK_.call(null,trace):null);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
if(cljs.core.truth_(drop_re_frame)){
return day8.re_frame_10x.tools.metamorphic.low_level_re_frame_trace_QMARK_.call(null,trace);
} else {
return null;
}
}
}))),all_traces);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update.call(null,cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"all","all",892129742)], null),retained_traces),new cljs.core.Keyword(null,"epochs","epochs",1796936425),(function (epochs){
var selected_index = new cljs.core.Keyword(null,"selected-epoch-index","selected-epoch-index",1788553164).cljs$core$IFn$_invoke$arity$1(epochs);
var selected_id = new cljs.core.Keyword(null,"selected-epoch-id","selected-epoch-id",70601778).cljs$core$IFn$_invoke$arity$1(epochs);
return cljs.core.assoc.call(null,epochs,new cljs.core.Keyword(null,"matches","matches",635497998),retained_matches,new cljs.core.Keyword(null,"matches-by-id","matches-by-id",1749529562),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,day8.re_frame_10x.navigation.epochs.events.first_match_id,cljs.core.identity)),retained_matches),new cljs.core.Keyword(null,"match-ids","match-ids",752973161),cljs.core.mapv.call(null,day8.re_frame_10x.navigation.epochs.events.first_match_id,retained_matches),new cljs.core.Keyword(null,"parse-state","parse-state",-1931312535),parse_state__$2,new cljs.core.Keyword(null,"sub-state","sub-state",-2129237981),new_sub_state,new cljs.core.Keyword(null,"subscription-info","subscription-info",-1785424092),subscription_info,new cljs.core.Keyword(null,"selected-epoch-id","selected-epoch-id",70601778),((cljs.core.seq.call(null,new_matches__$2))?day8.re_frame_10x.navigation.epochs.events.first_match_id.call(null,cljs.core.last.call(null,retained_matches)):selected_id),new cljs.core.Keyword(null,"selected-epoch-index","selected-epoch-index",1788553164),((cljs.core.seq.call(null,new_matches__$2))?null:selected_index));
})),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(cljs.core.truth_(quiescent_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.events","quiescent","day8.re-frame-10x.navigation.epochs.events/quiescent",-1389328171)], null):null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),db], null);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.events","previous","day8.re-frame-10x.navigation.epochs.events/previous",2061328788),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"epochs","epochs",1796936425)], null))], null),(function (p__34007,_){
var map__34008 = p__34007;
var map__34008__$1 = cljs.core.__destructure_map.call(null,map__34008);
var db = cljs.core.get.call(null,map__34008__$1,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5755__auto__ = new cljs.core.Keyword(null,"selected-epoch-id","selected-epoch-id",70601778).cljs$core$IFn$_invoke$arity$1(db);
if((temp__5755__auto__ == null)){
var new_id = cljs.core.nth.call(null,new cljs.core.Keyword(null,"match-ids","match-ids",752973161).cljs$core$IFn$_invoke$arity$1(db),(cljs.core.count.call(null,new cljs.core.Keyword(null,"match-ids","match-ids",752973161).cljs$core$IFn$_invoke$arity$1(db)) - (2)));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"selected-epoch-id","selected-epoch-id",70601778),new_id),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.events","reset-current-epoch-app-db","day8.re-frame-10x.navigation.epochs.events/reset-current-epoch-app-db",1850636212),new_id], null)], null);
} else {
var selected_id = temp__5755__auto__;
var match_ids = new cljs.core.Keyword(null,"match-ids","match-ids",752973161).cljs$core$IFn$_invoke$arity$1(db);
var match_array_index = day8.re_frame_10x.tools.coll.find_index_in_vec.call(null,(function (x){
return cljs.core._EQ_.call(null,selected_id,x);
}),match_ids);
var new_id = cljs.core.nth.call(null,match_ids,(match_array_index - (1)));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"selected-epoch-id","selected-epoch-id",70601778),new_id),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.events","reset-current-epoch-app-db","day8.re-frame-10x.navigation.epochs.events/reset-current-epoch-app-db",1850636212),new_id], null)], null);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.events","next","day8.re-frame-10x.navigation.epochs.events/next",1388476595),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"epochs","epochs",1796936425)], null))], null),(function (p__34009,_){
var map__34010 = p__34009;
var map__34010__$1 = cljs.core.__destructure_map.call(null,map__34010);
var db = cljs.core.get.call(null,map__34010__$1,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5755__auto__ = new cljs.core.Keyword(null,"selected-epoch-id","selected-epoch-id",70601778).cljs$core$IFn$_invoke$arity$1(db);
if((temp__5755__auto__ == null)){
var new_id = day8.re_frame_10x.tools.coll.last_in_vec.call(null,new cljs.core.Keyword(null,"match-ids","match-ids",752973161).cljs$core$IFn$_invoke$arity$1(db));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"selected-epoch-id","selected-epoch-id",70601778),new_id),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.events","reset-current-epoch-app-db","day8.re-frame-10x.navigation.epochs.events/reset-current-epoch-app-db",1850636212),new_id], null)], null);
} else {
var selected_id = temp__5755__auto__;
var match_ids = new cljs.core.Keyword(null,"match-ids","match-ids",752973161).cljs$core$IFn$_invoke$arity$1(db);
var match_array_index = day8.re_frame_10x.tools.coll.find_index_in_vec.call(null,(function (x){
return cljs.core._EQ_.call(null,selected_id,x);
}),match_ids);
var new_id = cljs.core.nth.call(null,match_ids,(match_array_index + (1)));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"selected-epoch-id","selected-epoch-id",70601778),new_id),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.events","reset-current-epoch-app-db","day8.re-frame-10x.navigation.epochs.events/reset-current-epoch-app-db",1850636212),new_id], null)], null);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.events","most-recent","day8.re-frame-10x.navigation.epochs.events/most-recent",-1146993774),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"epochs","epochs",1796936425)], null))], null),(function (p__34011,_){
var map__34012 = p__34011;
var map__34012__$1 = cljs.core.__destructure_map.call(null,map__34012);
var db = cljs.core.get.call(null,map__34012__$1,new cljs.core.Keyword(null,"db","db",993250759));
var new_id = day8.re_frame_10x.tools.coll.last_in_vec.call(null,new cljs.core.Keyword(null,"match-ids","match-ids",752973161).cljs$core$IFn$_invoke$arity$1(db));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"selected-epoch-index","selected-epoch-index",1788553164),null,new cljs.core.Keyword(null,"selected-epoch-id","selected-epoch-id",70601778),new_id),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.events","reset-current-epoch-app-db","day8.re-frame-10x.navigation.epochs.events/reset-current-epoch-app-db",1850636212),new_id], null)], null);
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.events","load","day8.re-frame-10x.navigation.epochs.events/load",1738587584),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"epochs","epochs",1796936425)], null)),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.trim_v], null),(function (p__34013,p__34014){
var map__34015 = p__34013;
var map__34015__$1 = cljs.core.__destructure_map.call(null,map__34015);
var db = cljs.core.get.call(null,map__34015__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__34016 = p__34014;
var new_id = cljs.core.nth.call(null,vec__34016,(0),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"selected-epoch-id","selected-epoch-id",70601778),new_id),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.events","reset-current-epoch-app-db","day8.re-frame-10x.navigation.epochs.events/reset-current-epoch-app-db",1850636212),new_id], null)], null);
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.events","replay","day8.re-frame-10x.navigation.epochs.events/replay",-1356562037),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"epochs","epochs",1796936425)], null))], null),(function (epochs,_){
var selected_epoch_id = (function (){var or__4212__auto__ = cljs.core.get.call(null,epochs,new cljs.core.Keyword(null,"selected-epoch-id","selected-epoch-id",70601778));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return day8.re_frame_10x.tools.coll.last_in_vec.call(null,cljs.core.get.call(null,epochs,new cljs.core.Keyword(null,"match-ids","match-ids",752973161)));
}
})();
var event_trace = day8.re_frame_10x.tools.metamorphic.matched_event.call(null,cljs.core.get_in.call(null,epochs,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"matches-by-id","matches-by-id",1749529562),selected_epoch_id,new cljs.core.Keyword(null,"match-info","match-info",666319879)], null)));
var app_db_before = day8.re_frame_10x.tools.metamorphic.app_db_before.call(null,event_trace);
var event = cljs.core.get_in.call(null,event_trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"event","event",301435442)], null));
cljs.core.reset_BANG_.call(null,re_frame.db.app_db,app_db_before);

return cljs.core.assoc.call(null,epochs,new cljs.core.Keyword(null,"replay","replay",-681122389),event);
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.events","quiescent","day8.re-frame-10x.navigation.epochs.events/quiescent",-1389328171),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"epochs","epochs",1796936425)], null))], null),(function (db,_){
var temp__5755__auto__ = new cljs.core.Keyword(null,"replay","replay",-681122389).cljs$core$IFn$_invoke$arity$1(db);
if((temp__5755__auto__ == null)){
return db;
} else {
var event_to_replay = temp__5755__auto__;
re_frame.core.dispatch.call(null,event_to_replay);

return cljs.core.dissoc.call(null,db,new cljs.core.Keyword(null,"replay","replay",-681122389));
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.events","reset","day8.re-frame-10x.navigation.epochs.events/reset",-2105765050),(function (db){
re_frame.trace.reset_tracing_BANG_.call(null);

return day8.re_frame_10x.tools.coll.dissoc_in.call(null,cljs.core.dissoc.call(null,db,new cljs.core.Keyword(null,"epochs","epochs",1796936425)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"all","all",892129742)], null));
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.events","reset-current-epoch-app-db","day8.re-frame-10x.navigation.epochs.events/reset-current-epoch-app-db",1850636212),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.trim_v], null),(function (db,p__34019){
var vec__34020 = p__34019;
var new_id = cljs.core.nth.call(null,vec__34020,(0),null);
if(cljs.core.truth_(cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"app-db-follows-events?","app-db-follows-events?",-1566738462)], null)))){
var epochs_34023 = new cljs.core.Keyword(null,"epochs","epochs",1796936425).cljs$core$IFn$_invoke$arity$1(db);
var match_id_34024 = (function (){var or__4212__auto__ = new_id;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return day8.re_frame_10x.tools.coll.last_in_vec.call(null,cljs.core.get.call(null,epochs_34023,new cljs.core.Keyword(null,"match-ids","match-ids",752973161)));
}
})();
var match_34025 = cljs.core.get_in.call(null,epochs_34023,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"matches-by-id","matches-by-id",1749529562),match_id_34024], null));
var event_34026 = day8.re_frame_10x.tools.metamorphic.matched_event.call(null,new cljs.core.Keyword(null,"match-info","match-info",666319879).cljs$core$IFn$_invoke$arity$1(match_34025));
var temp__5757__auto___34027 = day8.re_frame_10x.tools.metamorphic.app_db_after.call(null,event_34026);
if((temp__5757__auto___34027 == null)){
} else {
var new_db_34028 = temp__5757__auto___34027;
cljs.core.reset_BANG_.call(null,re_frame.db.app_db,new_db_34028);
}
} else {
}

return db;
}));

//# sourceMappingURL=events.js.map
