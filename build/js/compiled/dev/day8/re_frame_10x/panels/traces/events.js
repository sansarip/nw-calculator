// Compiled by ClojureScript 1.10.879 {:optimizations :none}
goog.provide('day8.re_frame_10x.panels.traces.events');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core');
goog.require('day8.re_frame_10x.fx.local_storage');
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.traces.events","set-draft-query-type","day8.re-frame-10x.panels.traces.events/set-draft-query-type",-996302456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"draft-query-type","draft-query-type",704274790)], null)),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.trim_v], null),(function (_,p__39311){
var vec__39312 = p__39311;
var draft_query_type = cljs.core.nth.call(null,vec__39312,(0),null);
return draft_query_type;
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.traces.events","set-draft-query","day8.re-frame-10x.panels.traces.events/set-draft-query",1714953965),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"draft-query","draft-query",2104267934)], null)),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.trim_v], null),(function (_,p__39315,___$1){
var vec__39316 = p__39315;
var draft_query = cljs.core.nth.call(null,vec__39316,(0),null);
return draft_query;
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.traces.events","save-draft-query","day8.re-frame-10x.panels.traces.events/save-draft-query",1729629791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004)], null))], null),(function (p__39319,_){
var map__39320 = p__39319;
var map__39320__$1 = cljs.core.__destructure_map.call(null,map__39320);
var db = cljs.core.get.call(null,map__39320__$1,new cljs.core.Keyword(null,"db","db",993250759));
var map__39321 = db;
var map__39321__$1 = cljs.core.__destructure_map.call(null,map__39321);
var draft_query_type = cljs.core.get.call(null,map__39321__$1,new cljs.core.Keyword(null,"draft-query-type","draft-query-type",704274790),new cljs.core.Keyword(null,"contains","contains",676899812));
var draft_query = cljs.core.get.call(null,map__39321__$1,new cljs.core.Keyword(null,"draft-query","draft-query",2104267934));
if(cljs.core.truth_((function (){var and__4210__auto__ = cljs.core._EQ_.call(null,draft_query_type,new cljs.core.Keyword(null,"slower-than","slower-than",1137227767));
if(and__4210__auto__){
return isNaN(parseFloat(draft_query));
} else {
return and__4210__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"draft-query-error","draft-query-error",2065783078),true)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"draft-query-error","draft-query-error",2065783078),false),new cljs.core.Keyword(null,"draft-query","draft-query",2104267934),""),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.traces.events","add-query","day8.re-frame-10x.panels.traces.events/add-query",2139116227),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),draft_query_type,new cljs.core.Keyword(null,"query","query",-1288509510),draft_query], null)], null)], null);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.traces.events","set-queries","day8.re-frame-10x.panels.traces.events/set-queries",1424273266),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"queries","queries",1446291995)], null)),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.trim_v,day8.re_frame_10x.fx.local_storage.save.call(null,"filter-items")], null),(function (_,p__39322){
var vec__39323 = p__39322;
var filters = cljs.core.nth.call(null,vec__39323,(0),null);
return filters;
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.traces.events","add-query","day8.re-frame-10x.panels.traces.events/add-query",2139116227),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"queries","queries",1446291995)], null)),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.unwrap,day8.re_frame_10x.fx.local_storage.save.call(null,"filter-items")], null),(function (filters,p__39328){
var map__39329 = p__39328;
var map__39329__$1 = cljs.core.__destructure_map.call(null,map__39329);
var query = cljs.core.get.call(null,map__39329__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var type = cljs.core.get.call(null,map__39329__$1,new cljs.core.Keyword(null,"type","type",1174270348));
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__39326_SHARP_){
return cljs.core._EQ_.call(null,query,new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(p1__39326_SHARP_));
}),filters))){
return filters;
} else {
var filters__$1 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"slower-than","slower-than",1137227767),type))?cljs.core.remove.call(null,(function (p1__39327_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"slower-than","slower-than",1137227767),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__39327_SHARP_));
}),filters):filters);
return cljs.core.conj.call(null,filters__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.random_uuid.call(null),new cljs.core.Keyword(null,"query","query",-1288509510),((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"contains","contains",676899812)))?clojure.string.lower_case.call(null,query):parseFloat(query)),new cljs.core.Keyword(null,"type","type",1174270348),type], null));
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.traces.events","remove-query","day8.re-frame-10x.panels.traces.events/remove-query",1784719956),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"queries","queries",1446291995)], null)),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.unwrap,day8.re_frame_10x.fx.local_storage.save.call(null,"filter-items")], null),(function (filters,p__39331){
var map__39332 = p__39331;
var map__39332__$1 = cljs.core.__destructure_map.call(null,map__39332);
var id = cljs.core.get.call(null,map__39332__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.remove.call(null,(function (p1__39330_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__39330_SHARP_),id);
}),filters);
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.traces.events","reset-queries","day8.re-frame-10x.panels.traces.events/reset-queries",823354457),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"queries","queries",1446291995)], null)),day8.re_frame_10x.fx.local_storage.save.call(null,"filter-items")], null),(function (_,___$1){
return cljs.core.PersistentVector.EMPTY;
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.traces.events","toggle-categories","day8.re-frame-10x.panels.traces.events/toggle-categories",-389788445),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"categories","categories",178386610)], null)),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.trim_v,day8.re_frame_10x.fx.local_storage.save.call(null,"categories")], null),(function (old,p__39333){
var vec__39334 = p__39333;
var new$ = cljs.core.nth.call(null,vec__39334,(0),null);
if(clojure.set.superset_QMARK_.call(null,old,new$)){
return clojure.set.difference.call(null,old,new$);
} else {
return clojure.set.union.call(null,old,new$);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.traces.events","set-categories","day8.re-frame-10x.panels.traces.events/set-categories",-494993249),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"categories","categories",178386610)], null)),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.trim_v,day8.re_frame_10x.fx.local_storage.save.call(null,"categories")], null),(function (_,p__39337){
var vec__39338 = p__39337;
var categories = cljs.core.nth.call(null,vec__39338,(0),null);
return categories;
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.traces.events","set-filter-by-selected-epoch?","day8.re-frame-10x.panels.traces.events/set-filter-by-selected-epoch?",34289483),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"filter-by-selected-epoch?","filter-by-selected-epoch?",1580686425)], null)),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.trim_v,day8.re_frame_10x.fx.local_storage.save.call(null,"show-epoch-traces?")], null),(function (_,p__39341){
var vec__39342 = p__39341;
var filter_by_selected_epoch_QMARK_ = cljs.core.nth.call(null,vec__39342,(0),null);
return filter_by_selected_epoch_QMARK_;
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.traces.events","toggle-expansions","day8.re-frame-10x.panels.traces.events/toggle-expansions",505682376),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"expansions","expansions",533713877)], null))], null),(function (expansions,_){
return cljs.core.update.call(null,cljs.core.assoc.call(null,expansions,new cljs.core.Keyword(null,"overrides","overrides",1738628867),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"show-all?","show-all?",503618702),cljs.core.not);
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.traces.events","toggle-expansion","day8.re-frame-10x.panels.traces.events/toggle-expansion",-1981422943),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"expansions","expansions",533713877)], null)),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.trim_v], null),(function (expansions,p__39346){
var vec__39347 = p__39346;
var id = cljs.core.nth.call(null,vec__39347,(0),null);
var showing_QMARK_ = cljs.core.get_in.call(null,expansions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"overrides","overrides",1738628867),id], null),new cljs.core.Keyword(null,"show-all?","show-all?",503618702).cljs$core$IFn$_invoke$arity$1(expansions));
return cljs.core.update_in.call(null,expansions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"overrides","overrides",1738628867),id], null),(function (p1__39345_SHARP_){
if(cljs.core.truth_(showing_QMARK_)){
return false;
} else {
return cljs.core.not.call(null,p1__39345_SHARP_);
}
}));
}));

//# sourceMappingURL=events.js.map
