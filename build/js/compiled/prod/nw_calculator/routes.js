// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('nw_calculator.routes');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cognitect.transit');
goog.require('re_frame.core');
goog.require('nw_calculator.events');
nw_calculator.routes.routes = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,cljs.core.cst$kw$root,cljs.core.cst$kw$controllers,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$start,cljs.core.memoize((function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items], null));
}))], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,cljs.core.cst$kw$main,cljs.core.cst$kw$controllers,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$parameters,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$query,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_item_DASH_refs], null)], null),cljs.core.cst$kw$start,(function (p__31274){
var map__31275 = p__31274;
var map__31275__$1 = cljs.core.__destructure_map(map__31275);
var map__31276 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31275__$1,cljs.core.cst$kw$query);
var map__31276__$1 = cljs.core.__destructure_map(map__31276);
var selected_item_refs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31276__$1,cljs.core.cst$kw$selected_DASH_item_DASH_refs);
if(cljs.core.truth_(selected_item_refs)){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_set_DASH_selected_DASH_item_DASH_refs,(function (){var r = cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$json);
return cognitect.transit.read(r,selected_item_refs);
})()], null));
} else {
return null;
}
})], null)], null)], null)], null)], null);
