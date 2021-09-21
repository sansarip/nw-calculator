// Compiled by ClojureScript 1.10.879 {:optimizations :none}
goog.provide('day8.re_frame_10x.panels.subs.subs');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core');
goog.require('day8.re_frame_10x.navigation.epochs.subs');
goog.require('day8.re_frame_10x.panels.traces.subs');
goog.require('day8.re_frame_10x.tools.metamorphic');
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.subs.subs","root","day8.re-frame-10x.panels.subs.subs/root",-2074776057),(function (p__39157,_){
var map__39158 = p__39157;
var map__39158__$1 = cljs.core.__destructure_map.call(null,map__39158);
var subs = cljs.core.get.call(null,map__39158__$1,new cljs.core.Keyword(null,"subs","subs",-186681991));
return subs;
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.subs.subs","all-sub-traces","day8.re-frame-10x.panels.subs.subs/all-sub-traces",767916317),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.traces.subs","filtered-by-epoch-always","day8.re-frame-10x.panels.traces.subs/filtered-by-epoch-always",-1807060768)], null),(function (traces){
return cljs.core.filter.call(null,day8.re_frame_10x.tools.metamorphic.subscription_QMARK_,traces);
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.subs.subs","subscription-info","day8.re-frame-10x.panels.subs.subs/subscription-info",-190987016),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.subs","root","day8.re-frame-10x.navigation.epochs.subs/root",-254601515)], null),(function (p__39159,_){
var map__39160 = p__39159;
var map__39160__$1 = cljs.core.__destructure_map.call(null,map__39160);
var subscription_info = cljs.core.get.call(null,map__39160__$1,new cljs.core.Keyword(null,"subscription-info","subscription-info",-1785424092));
return subscription_info;
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.subs.subs","sub-state","day8.re-frame-10x.panels.subs.subs/sub-state",-1612006945),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.subs","root","day8.re-frame-10x.navigation.epochs.subs/root",-254601515)], null),(function (p__39161,_){
var map__39162 = p__39161;
var map__39162__$1 = cljs.core.__destructure_map.call(null,map__39162);
var sub_state = cljs.core.get.call(null,map__39162__$1,new cljs.core.Keyword(null,"sub-state","sub-state",-2129237981));
return sub_state;
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.subs.subs","current-epoch-sub-state","day8.re-frame-10x.panels.subs.subs/current-epoch-sub-state",291840673),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.subs","selected-match-state","day8.re-frame-10x.navigation.epochs.subs/selected-match-state",-726131883)], null),(function (p__39163,_){
var map__39164 = p__39163;
var map__39164__$1 = cljs.core.__destructure_map.call(null,map__39164);
var sub_state = cljs.core.get.call(null,map__39164__$1,new cljs.core.Keyword(null,"sub-state","sub-state",-2129237981));
return sub_state;
}));
day8.re_frame_10x.panels.subs.subs.sub_type__GT_value = (function day8$re_frame_10x$panels$subs$subs$sub_type__GT_value(sub_type){
var G__39165 = sub_type;
var G__39165__$1 = (((G__39165 instanceof cljs.core.Keyword))?G__39165.fqn:null);
switch (G__39165__$1) {
case "sub/create":
return (5);

break;
case "sub/run":
return (4);

break;
case "sub/dispose":
return (3);

break;
case "sub/not-run":
return (2);

break;
default:
return (1);

}
});
/**
 * Calculate a sorting value for a series of subscription trace types.
 */
day8.re_frame_10x.panels.subs.subs.accumulate_sub_value = (function day8$re_frame_10x$panels$subs$subs$accumulate_sub_value(order){
var exp = (3);
var total = (0);
var order__$1 = order;
while(true){
var temp__5751__auto__ = cljs.core.first.call(null,order__$1);
if(cljs.core.truth_(temp__5751__auto__)){
var sub_type = temp__5751__auto__;
var G__39167 = (exp - (1));
var G__39168 = (total + (day8.re_frame_10x.panels.subs.subs.sub_type__GT_value.call(null,sub_type) * Math.pow((10),exp)));
var G__39169 = cljs.core.rest.call(null,order__$1);
exp = G__39167;
total = G__39168;
order__$1 = G__39169;
continue;
} else {
return total;
}
break;
}
});
day8.re_frame_10x.panels.subs.subs.accumulate_sub_value_memoized = cljs.core.memoize.call(null,day8.re_frame_10x.panels.subs.subs.accumulate_sub_value);
day8.re_frame_10x.panels.subs.subs.sub_sort_val = (function day8$re_frame_10x$panels$subs$subs$sub_sort_val(order_x,order_y){
return cljs.core.compare.call(null,day8.re_frame_10x.panels.subs.subs.accumulate_sub_value_memoized.call(null,order_y),day8.re_frame_10x.panels.subs.subs.accumulate_sub_value_memoized.call(null,order_x));
});
/**
 * Returns sub info prepared for rendering in pods
 */
day8.re_frame_10x.panels.subs.subs.prepare_pod_info = (function day8$re_frame_10x$panels$subs$subs$prepare_pod_info(p__39170,p__39171){
var vec__39172 = p__39170;
var sub_info = cljs.core.nth.call(null,vec__39172,(0),null);
var sub_state = cljs.core.nth.call(null,vec__39172,(1),null);
var vec__39175 = p__39171;
var subscription = cljs.core.nth.call(null,vec__39175,(0),null);
var remove_fn = ((cljs.core._EQ_.call(null,subscription,new cljs.core.Keyword("day8.re-frame-10x.panels.subs.subs","intra-epoch-subs","day8.re-frame-10x.panels.subs.subs/intra-epoch-subs",1387786567)))?(function (me){
return (new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,me)) == null);
}):cljs.core.constantly.call(null,false));
var subx = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"order","order",-1254677256),day8.re_frame_10x.panels.subs.subs.sub_sort_val,cljs.core.map.call(null,(function (me){
var state = cljs.core.val.call(null,me);
var subscription__$1 = new cljs.core.Keyword(null,"subscription","subscription",1949009182).cljs$core$IFn$_invoke$arity$1(state);
var sub = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.key.call(null,me),new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415),cljs.core.key.call(null,me),new cljs.core.Keyword(null,"layer","layer",-1601820589),cljs.core.get_in.call(null,sub_info,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,subscription__$1),new cljs.core.Keyword(null,"layer","layer",-1601820589)], null)),new cljs.core.Keyword(null,"path-data","path-data",1441254047),subscription__$1,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.pr_str.call(null,subscription__$1),new cljs.core.Keyword(null,"order","order",-1254677256),(function (){var or__4212__auto__ = new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451)], null);
}
})(),new cljs.core.Keyword("sub","traits","sub/traits",1778340671),new cljs.core.Keyword("sub","traits","sub/traits",1778340671).cljs$core$IFn$_invoke$arity$1(state)], null);
var sub__$1 = ((cljs.core.contains_QMARK_.call(null,state,new cljs.core.Keyword(null,"value","value",305978217)))?cljs.core.assoc.call(null,sub,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(state)):sub);
var sub__$2 = ((cljs.core.contains_QMARK_.call(null,state,new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677)))?cljs.core.assoc.call(null,sub__$1,new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677),new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677).cljs$core$IFn$_invoke$arity$1(state)):sub__$1);
return sub__$2;
}),cljs.core.remove.call(null,remove_fn,sub_state)));
return subx;
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.subs.subs","pre-epoch-state","day8.re-frame-10x.panels.subs.subs/pre-epoch-state",-826107288),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.subs.subs","current-epoch-sub-state","day8.re-frame-10x.panels.subs.subs/current-epoch-sub-state",291840673)], null),(function (p__39178,_){
var map__39179 = p__39178;
var map__39179__$1 = cljs.core.__destructure_map.call(null,map__39179);
var pre_epoch_state = cljs.core.get.call(null,map__39179__$1,new cljs.core.Keyword(null,"pre-epoch-state","pre-epoch-state",834094164));
return pre_epoch_state;
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.subs.subs","reaction-state","day8.re-frame-10x.panels.subs.subs/reaction-state",433400459),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.subs.subs","current-epoch-sub-state","day8.re-frame-10x.panels.subs.subs/current-epoch-sub-state",291840673)], null),(function (p__39180,_){
var map__39181 = p__39180;
var map__39181__$1 = cljs.core.__destructure_map.call(null,map__39181);
var reaction_state = cljs.core.get.call(null,map__39181__$1,new cljs.core.Keyword(null,"reaction-state","reaction-state",958292039));
return reaction_state;
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.subs.subs","intra-epoch-subs","day8.re-frame-10x.panels.subs.subs/intra-epoch-subs",1387786567),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.subs.subs","subscription-info","day8.re-frame-10x.panels.subs.subs/subscription-info",-190987016)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.subs.subs","pre-epoch-state","day8.re-frame-10x.panels.subs.subs/pre-epoch-state",-826107288)], null),day8.re_frame_10x.panels.subs.subs.prepare_pod_info);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.subs.subs","all-subs","day8.re-frame-10x.panels.subs.subs/all-subs",1048145468),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.subs.subs","subscription-info","day8.re-frame-10x.panels.subs.subs/subscription-info",-190987016)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.subs.subs","reaction-state","day8.re-frame-10x.panels.subs.subs/reaction-state",433400459)], null),day8.re_frame_10x.panels.subs.subs.prepare_pod_info);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.subs.subs","filter-str","day8.re-frame-10x.panels.subs.subs/filter-str",-1499732639),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.subs.subs","root","day8.re-frame-10x.panels.subs.subs/root",-2074776057)], null),(function (p__39182,_){
var map__39183 = p__39182;
var map__39183__$1 = cljs.core.__destructure_map.call(null,map__39183);
var filter_str = cljs.core.get.call(null,map__39183__$1,new cljs.core.Keyword(null,"filter-str","filter-str",1974484789));
return filter_str;
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.subs.subs","visible-subs","day8.re-frame-10x.panels.subs.subs/visible-subs",1208483009),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.subs.subs","all-subs","day8.re-frame-10x.panels.subs.subs/all-subs",1048145468)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.subs.subs","ignore-unchanged-l2-subs?","day8.re-frame-10x.panels.subs.subs/ignore-unchanged-l2-subs?",-1956184975)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.subs.subs","filter-str","day8.re-frame-10x.panels.subs.subs/filter-str",-1499732639)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.subs.subs","sub-pins","day8.re-frame-10x.panels.subs.subs/sub-pins",1157625064)], null),(function (p__39184){
var vec__39185 = p__39184;
var all_subs = cljs.core.nth.call(null,vec__39185,(0),null);
var ignore_unchanged_l2_QMARK_ = cljs.core.nth.call(null,vec__39185,(1),null);
var filter_str = cljs.core.nth.call(null,vec__39185,(2),null);
var pins = cljs.core.nth.call(null,vec__39185,(3),null);
var compare_fn = (function (s1,s2){
var p1 = cljs.core.boolean$.call(null,cljs.core.get_in.call(null,pins,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(s1),new cljs.core.Keyword(null,"pin?","pin?",-1347894609)], null)));
var p2 = cljs.core.boolean$.call(null,cljs.core.get_in.call(null,pins,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(s2),new cljs.core.Keyword(null,"pin?","pin?",-1347894609)], null)));
if(cljs.core._EQ_.call(null,p1,p2)){
return cljs.core.compare.call(null,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(s1),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(s2));
} else {
return p1;
}
});
var G__39188 = cljs.core.sort.call(null,compare_fn,all_subs);
var G__39188__$1 = (cljs.core.truth_(ignore_unchanged_l2_QMARK_)?cljs.core.remove.call(null,day8.re_frame_10x.tools.metamorphic.unchanged_l2_subscription_QMARK_,G__39188):G__39188);
if(cljs.core.truth_(cljs.core.not_empty.call(null,filter_str))){
return cljs.core.filter.call(null,(function (p__39189){
var map__39190 = p__39189;
var map__39190__$1 = cljs.core.__destructure_map.call(null,map__39190);
var path = cljs.core.get.call(null,map__39190__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var id = cljs.core.get.call(null,map__39190__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var or__4212__auto__ = clojure.string.includes_QMARK_.call(null,path,filter_str);
if(or__4212__auto__){
return or__4212__auto__;
} else {
return cljs.core.get_in.call(null,pins,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"pin?","pin?",-1347894609)], null));
}
}),G__39188__$1);
} else {
return G__39188__$1;
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.subs.subs","sub-counts","day8.re-frame-10x.panels.subs.subs/sub-counts",714056905),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.subs.subs","visible-subs","day8.re-frame-10x.panels.subs.subs/visible-subs",1208483009)], null),(function (subs,_){
return cljs.core.frequencies.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"order","order",-1254677256),subs));
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.subs.subs","created-count","day8.re-frame-10x.panels.subs.subs/created-count",956171806),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.subs.subs","sub-counts","day8.re-frame-10x.panels.subs.subs/sub-counts",714056905)], null),(function (counts){
return cljs.core.get.call(null,counts,new cljs.core.Keyword("sub","create","sub/create",-1301317560),(0));
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.subs.subs","re-run-count","day8.re-frame-10x.panels.subs.subs/re-run-count",-933290221),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.subs.subs","sub-counts","day8.re-frame-10x.panels.subs.subs/sub-counts",714056905)], null),(function (counts){
return cljs.core.get.call(null,counts,new cljs.core.Keyword("sub","run","sub/run",-1821315581),(0));
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.subs.subs","destroyed-count","day8.re-frame-10x.panels.subs.subs/destroyed-count",-778739881),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.subs.subs","sub-counts","day8.re-frame-10x.panels.subs.subs/sub-counts",714056905)], null),(function (counts){
return cljs.core.get.call(null,counts,new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),(0));
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.subs.subs","not-run-count","day8.re-frame-10x.panels.subs.subs/not-run-count",-689189983),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.subs.subs","sub-counts","day8.re-frame-10x.panels.subs.subs/sub-counts",714056905)], null),(function (counts){
return cljs.core.get.call(null,counts,new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451),(0));
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.subs.subs","unchanged-l2-subs-count","day8.re-frame-10x.panels.subs.subs/unchanged-l2-subs-count",-405694953),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.subs.subs","all-subs","day8.re-frame-10x.panels.subs.subs/all-subs",1048145468)], null),(function (subs){
return cljs.core.count.call(null,cljs.core.filter.call(null,day8.re_frame_10x.tools.metamorphic.unchanged_l2_subscription_QMARK_,subs));
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.subs.subs","ignore-unchanged-l2-subs?","day8.re-frame-10x.panels.subs.subs/ignore-unchanged-l2-subs?",-1956184975),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.subs.subs","root","day8.re-frame-10x.panels.subs.subs/root",-2074776057)], null),(function (subs,_){
return new cljs.core.Keyword(null,"ignore-unchanged-subs?","ignore-unchanged-subs?",125806160).cljs$core$IFn$_invoke$arity$2(subs,true);
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.subs.subs","sub-expansions","day8.re-frame-10x.panels.subs.subs/sub-expansions",-1670810485),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.subs.subs","root","day8.re-frame-10x.panels.subs.subs/root",-2074776057)], null),(function (p__39191,_){
var map__39192 = p__39191;
var map__39192__$1 = cljs.core.__destructure_map.call(null,map__39192);
var expansions = cljs.core.get.call(null,map__39192__$1,new cljs.core.Keyword(null,"expansions","expansions",533713877));
return expansions;
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.subs.subs","sub-pins","day8.re-frame-10x.panels.subs.subs/sub-pins",1157625064),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.subs.subs","root","day8.re-frame-10x.panels.subs.subs/root",-2074776057)], null),(function (p__39193,_){
var map__39194 = p__39193;
var map__39194__$1 = cljs.core.__destructure_map.call(null,map__39194);
var pinned = cljs.core.get.call(null,map__39194__$1,new cljs.core.Keyword(null,"pinned","pinned",-1216085339));
return pinned;
}));

//# sourceMappingURL=subs.js.map
