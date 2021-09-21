// Compiled by ClojureScript 1.10.879 {:optimizations :none}
goog.provide('day8.re_frame_10x.panels.traces.subs');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core');
goog.require('day8.re_frame_10x.tools.metamorphic');
goog.require('day8.re_frame_10x.navigation.epochs.subs');
goog.require('day8.re_frame_10x.panels.settings.subs');
goog.require('day8.re_frame_10x.tools.coll');
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.traces.subs","root","day8.re-frame-10x.panels.traces.subs/root",-1822913212),(function (p__36707,_){
var map__36708 = p__36707;
var map__36708__$1 = cljs.core.__destructure_map.call(null,map__36708);
var traces = cljs.core.get.call(null,map__36708__$1,new cljs.core.Keyword(null,"traces","traces",-1301138004));
return traces;
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.traces.subs","categories","day8.re-frame-10x.panels.traces.subs/categories",1887003715),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.traces.subs","root","day8.re-frame-10x.panels.traces.subs/root",-1822913212)], null),(function (p__36709,_){
var map__36710 = p__36709;
var map__36710__$1 = cljs.core.__destructure_map.call(null,map__36710);
var categories = cljs.core.get.call(null,map__36710__$1,new cljs.core.Keyword(null,"categories","categories",178386610));
return categories;
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.traces.subs","queries","day8.re-frame-10x.panels.traces.subs/queries",805260),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.traces.subs","root","day8.re-frame-10x.panels.traces.subs/root",-1822913212)], null),(function (p__36711,_){
var map__36712 = p__36711;
var map__36712__$1 = cljs.core.__destructure_map.call(null,map__36712);
var queries = cljs.core.get.call(null,map__36712__$1,new cljs.core.Keyword(null,"queries","queries",1446291995));
return queries;
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.traces.subs","draft-query","day8.re-frame-10x.panels.traces.subs/draft-query",261481005),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.traces.subs","root","day8.re-frame-10x.panels.traces.subs/root",-1822913212)], null),(function (p__36713,_){
var map__36714 = p__36713;
var map__36714__$1 = cljs.core.__destructure_map.call(null,map__36714);
var draft_query = cljs.core.get.call(null,map__36714__$1,new cljs.core.Keyword(null,"draft-query","draft-query",2104267934));
return draft_query;
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.traces.subs","draft-query-type","day8.re-frame-10x.panels.traces.subs/draft-query-type",-1003360363),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.traces.subs","root","day8.re-frame-10x.panels.traces.subs/root",-1822913212)], null),(function (p__36715,_){
var map__36716 = p__36715;
var map__36716__$1 = cljs.core.__destructure_map.call(null,map__36716);
var draft_query_type = cljs.core.get.call(null,map__36716__$1,new cljs.core.Keyword(null,"draft-query-type","draft-query-type",704274790));
var or__4212__auto__ = draft_query_type;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return new cljs.core.Keyword(null,"contains","contains",676899812);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.traces.subs","draft-query-error","day8.re-frame-10x.panels.traces.subs/draft-query-error",216583307),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.traces.subs","root","day8.re-frame-10x.panels.traces.subs/root",-1822913212)], null),(function (p__36717,_){
var map__36718 = p__36717;
var map__36718__$1 = cljs.core.__destructure_map.call(null,map__36718);
var draft_query_error = cljs.core.get.call(null,map__36718__$1,new cljs.core.Keyword(null,"draft-query-error","draft-query-error",2065783078));
return draft_query_error;
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.traces.subs","expansions","day8.re-frame-10x.panels.traces.subs/expansions",-1778998724),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.traces.subs","root","day8.re-frame-10x.panels.traces.subs/root",-1822913212)], null),(function (p__36719,_){
var map__36720 = p__36719;
var map__36720__$1 = cljs.core.__destructure_map.call(null,map__36720);
var expansions = cljs.core.get.call(null,map__36720__$1,new cljs.core.Keyword(null,"expansions","expansions",533713877));
return expansions;
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.traces.subs","all","day8.re-frame-10x.panels.traces.subs/all",375727167),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.traces.subs","root","day8.re-frame-10x.panels.traces.subs/root",-1822913212)], null),(function (p__36721,_){
var map__36722 = p__36721;
var map__36722__$1 = cljs.core.__destructure_map.call(null,map__36722);
var all = cljs.core.get.call(null,map__36722__$1,new cljs.core.Keyword(null,"all","all",892129742));
return all;
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.traces.subs","count","day8.re-frame-10x.panels.traces.subs/count",900994278),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.traces.subs","all","day8.re-frame-10x.panels.traces.subs/all",375727167)], null),(function (traces,_){
return cljs.core.count.call(null,traces);
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.traces.subs","filter-by-selected-epoch?","day8.re-frame-10x.panels.traces.subs/filter-by-selected-epoch?",-338958608),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.traces.subs","root","day8.re-frame-10x.panels.traces.subs/root",-1822913212)], null),(function (p__36723,_){
var map__36724 = p__36723;
var map__36724__$1 = cljs.core.__destructure_map.call(null,map__36724);
var filter_by_selected_epoch_QMARK_ = cljs.core.get.call(null,map__36724__$1,new cljs.core.Keyword(null,"filter-by-selected-epoch?","filter-by-selected-epoch?",1580686425));
return filter_by_selected_epoch_QMARK_;
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.traces.subs","filtered-by-epoch-always","day8.re-frame-10x.panels.traces.subs/filtered-by-epoch-always",-1807060768),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.traces.subs","all","day8.re-frame-10x.panels.traces.subs/all",375727167)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.subs","beginning-trace-id","day8.re-frame-10x.navigation.epochs.subs/beginning-trace-id",1547666129)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.subs","ending-trace-id","day8.re-frame-10x.navigation.epochs.subs/ending-trace-id",-392642523)], null),(function (p__36725,_){
var vec__36726 = p__36725;
var traces = cljs.core.nth.call(null,vec__36726,(0),null);
var beginning = cljs.core.nth.call(null,vec__36726,(1),null);
var ending = cljs.core.nth.call(null,vec__36726,(2),null);
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,day8.re_frame_10x.tools.coll.id_between_xf.call(null,beginning,ending),traces);
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.traces.subs","filtered-by-epoch","day8.re-frame-10x.panels.traces.subs/filtered-by-epoch",2069606875),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.traces.subs","filter-by-selected-epoch?","day8.re-frame-10x.panels.traces.subs/filter-by-selected-epoch?",-338958608)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.traces.subs","all","day8.re-frame-10x.panels.traces.subs/all",375727167)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.traces.subs","filtered-by-epoch-always","day8.re-frame-10x.panels.traces.subs/filtered-by-epoch-always",-1807060768)], null),(function (p__36729,_){
var vec__36730 = p__36729;
var filter_by_selected_epoch_QMARK_ = cljs.core.nth.call(null,vec__36730,(0),null);
var all = cljs.core.nth.call(null,vec__36730,(1),null);
var filtered = cljs.core.nth.call(null,vec__36730,(2),null);
if(cljs.core.not.call(null,filter_by_selected_epoch_QMARK_)){
return all;
} else {
return filtered;
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.traces.subs","filtered-by-namespace","day8.re-frame-10x.panels.traces.subs/filtered-by-namespace",2055904868),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.traces.subs","filtered-by-epoch","day8.re-frame-10x.panels.traces.subs/filtered-by-epoch",2069606875)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","filtered-view-trace","day8.re-frame-10x.panels.settings.subs/filtered-view-trace",-192195211)], null),(function (p__36733,_){
var vec__36734 = p__36733;
var traces = cljs.core.nth.call(null,vec__36734,(0),null);
var namespaces = cljs.core.nth.call(null,vec__36734,(1),null);
var munged_namespaces = cljs.core.set.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.munge,new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499)),namespaces));
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,(function (trace){
return ((day8.re_frame_10x.tools.metamorphic.render_QMARK_.call(null,trace)) && (cljs.core.contains_QMARK_.call(null,munged_namespaces,cljs.core.subs.call(null,new cljs.core.Keyword(null,"operation","operation",-1267664310).cljs$core$IFn$_invoke$arity$1(trace),(0),clojure.string.last_index_of.call(null,new cljs.core.Keyword(null,"operation","operation",-1267664310).cljs$core$IFn$_invoke$arity$1(trace),".")))));
})),traces);
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.traces.subs","filtered-by-cached-subscriptions","day8.re-frame-10x.panels.traces.subs/filtered-by-cached-subscriptions",-961951310),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.traces.subs","filtered-by-namespace","day8.re-frame-10x.panels.traces.subs/filtered-by-namespace",2055904868)], null),(function (traces,_){
return cljs.core.remove.call(null,(function (trace){
var and__4210__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword("sub","create","sub/create",-1301317560),new cljs.core.Keyword(null,"op-trace","op-trace",934331832).cljs$core$IFn$_invoke$arity$1(trace));
if(and__4210__auto__){
return cljs.core.get_in.call(null,trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"cached?","cached?",86081880)], null));
} else {
return and__4210__auto__;
}
}),traces);
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.traces.subs","filtered-by-categories","day8.re-frame-10x.panels.traces.subs/filtered-by-categories",1349391078),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.traces.subs","filtered-by-cached-subscriptions","day8.re-frame-10x.panels.traces.subs/filtered-by-cached-subscriptions",-961951310)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.traces.subs","categories","day8.re-frame-10x.panels.traces.subs/categories",1887003715)], null),(function (p__36737,_){
var vec__36738 = p__36737;
var traces = cljs.core.nth.call(null,vec__36738,(0),null);
var categories = cljs.core.nth.call(null,vec__36738,(1),null);
return cljs.core.filter.call(null,(function (trace){
if(cljs.core.contains_QMARK_.call(null,categories,new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(trace))){
return trace;
} else {
return null;
}
}),traces);
}));
day8.re_frame_10x.panels.traces.subs.query__GT_fn = (function day8$re_frame_10x$panels$traces$subs$query__GT_fn(query){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"contains","contains",676899812),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(query))){
return (function (trace){
return clojure.string.includes_QMARK_.call(null,clojure.string.lower_case.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"operation","operation",-1267664310).cljs$core$IFn$_invoke$arity$1(trace))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(trace))].join('')),new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(query));
});
} else {
return (function (trace){
return (new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(query) < new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(trace));
});
}
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.traces.subs","filtered-by-queries","day8.re-frame-10x.panels.traces.subs/filtered-by-queries",1901538367),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.traces.subs","filtered-by-categories","day8.re-frame-10x.panels.traces.subs/filtered-by-categories",1349391078)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.traces.subs","queries","day8.re-frame-10x.panels.traces.subs/queries",805260)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.traces.subs","draft-query","day8.re-frame-10x.panels.traces.subs/draft-query",261481005)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.traces.subs","draft-query-type","day8.re-frame-10x.panels.traces.subs/draft-query-type",-1003360363)], null),(function (p__36741,_){
var vec__36742 = p__36741;
var traces = cljs.core.nth.call(null,vec__36742,(0),null);
var queries = cljs.core.nth.call(null,vec__36742,(1),null);
var draft_query = cljs.core.nth.call(null,vec__36742,(2),null);
var draft_query_type = cljs.core.nth.call(null,vec__36742,(3),null);
var queries__$1 = (((!(cljs.core.empty_QMARK_.call(null,draft_query))))?cljs.core.conj.call(null,queries,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),draft_query_type,new cljs.core.Keyword(null,"query","query",-1288509510),draft_query], null)):queries);
if(cljs.core.not.call(null,cljs.core.seq.call(null,queries__$1))){
return traces;
} else {
return cljs.core.filter.call(null,cljs.core.apply.call(null,cljs.core.every_pred,cljs.core.map.call(null,day8.re_frame_10x.panels.traces.subs.query__GT_fn,queries__$1)),traces);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.traces.subs","sorted","day8.re-frame-10x.panels.traces.subs/sorted",2084927558),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.traces.subs","filtered-by-queries","day8.re-frame-10x.panels.traces.subs/filtered-by-queries",1901538367)], null),(function (traces,_){
return cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),traces);
}));

//# sourceMappingURL=subs.js.map
