// Compiled by ClojureScript 1.10.879 {:optimizations :none}
goog.provide('loom.alg_generic');
goog.require('cljs.core');
/**
 * Using a map of nodes-to-preds, traces a node's family tree back to the
 *   source. Cycles are not accounted for.
 */
loom.alg_generic.trace_path = (function loom$alg_generic$trace_path(preds,node){
return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,preds,node));
});
/**
 * Returns a lazy seq of all non-looping path vectors starting with
 *   [<start-node>]
 */
loom.alg_generic.paths = (function loom$alg_generic$paths(preds,path){
var this_node = cljs.core.peek.call(null,path);
return cljs.core.cons.call(null,path,cljs.core.mapcat.call(null,(function (p1__20224_SHARP_){
return loom.alg_generic.paths.call(null,preds,cljs.core.conj.call(null,path,p1__20224_SHARP_));
}),cljs.core.filter.call(null,(function (p1__20223_SHARP_){
return cljs.core.not_any_QMARK_.call(null,(function (edge){
return cljs.core._EQ_.call(null,edge,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this_node,p1__20223_SHARP_], null));
}),cljs.core.partition.call(null,(2),(1),path));
}),preds.call(null,this_node))));
});
/**
 * Given a function and a starting node, returns all possible paths
 *   back to source. Cycles are not accounted for.
 */
loom.alg_generic.trace_paths = (function loom$alg_generic$trace_paths(preds,start){
return cljs.core.remove.call(null,(function (p1__20225_SHARP_){
return preds.call(null,cljs.core.peek.call(null,p1__20225_SHARP_));
}),loom.alg_generic.paths.call(null,preds,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null)));
});
/**
 * Converts a map of the form {node predecessor} to a spanning tree of the
 *   form {node [successors]}
 */
loom.alg_generic.preds__GT_span = (function loom$alg_generic$preds__GT_span(preds){
return cljs.core.reduce.call(null,(function (span,p__20226){
var vec__20227 = p__20226;
var n = cljs.core.nth.call(null,vec__20227,(0),null);
var p = cljs.core.nth.call(null,vec__20227,(1),null);
if(cljs.core.truth_(p)){
return cljs.core.assoc.call(null,span,p,cljs.core.conj.call(null,span.call(null,p,cljs.core.PersistentVector.EMPTY),n));
} else {
return span;
}
}),cljs.core.PersistentArrayMap.EMPTY,preds);
});
/**
 * Traverses a graph depth-first preorder from start, successors being
 *   a function that returns direct successors for the node. Returns a
 *   lazy seq of nodes.
 */
loom.alg_generic.pre_traverse = (function loom$alg_generic$pre_traverse(var_args){
var args__4824__auto__ = [];
var len__4818__auto___20235 = arguments.length;
var i__4819__auto___20236 = (0);
while(true){
if((i__4819__auto___20236 < len__4818__auto___20235)){
args__4824__auto__.push((arguments[i__4819__auto___20236]));

var G__20237 = (i__4819__auto___20236 + (1));
i__4819__auto___20236 = G__20237;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__20233){
var map__20234 = p__20233;
var map__20234__$1 = cljs.core.__destructure_map.call(null,map__20234);
var seen = cljs.core.get.call(null,map__20234__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var step = (function loom$alg_generic$step(stack,seen__$1){
var temp__5753__auto__ = cljs.core.peek.call(null,stack);
if(cljs.core.truth_(temp__5753__auto__)){
var node = temp__5753__auto__;
if(cljs.core.contains_QMARK_.call(null,seen__$1,node)){
return loom$alg_generic$step.call(null,cljs.core.pop.call(null,stack),seen__$1);
} else {
var seen__$2 = cljs.core.conj.call(null,seen__$1,node);
var nbrs = cljs.core.remove.call(null,seen__$2,successors.call(null,node));
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons.call(null,node,loom$alg_generic$step.call(null,cljs.core.into.call(null,cljs.core.pop.call(null,stack),nbrs),seen__$2));
}),null,null));
}
} else {
return null;
}
});
return step.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null),seen);
}));

(loom.alg_generic.pre_traverse.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(loom.alg_generic.pre_traverse.cljs$lang$applyTo = (function (seq20230){
var G__20231 = cljs.core.first.call(null,seq20230);
var seq20230__$1 = cljs.core.next.call(null,seq20230);
var G__20232 = cljs.core.first.call(null,seq20230__$1);
var seq20230__$2 = cljs.core.next.call(null,seq20230__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20231,G__20232,seq20230__$2);
}));

/**
 * Traverses a graph depth-first preorder from start, successors being
 *   a function that returns direct successors for the node. Returns a
 *   lazy seq of edges, each edge being a vector [source-node dest-node].
 *   Note that for undirected graphs each edge will be returned twice,
 *   once for each direction.
 */
loom.alg_generic.pre_edge_traverse = (function loom$alg_generic$pre_edge_traverse(var_args){
var args__4824__auto__ = [];
var len__4818__auto___20243 = arguments.length;
var i__4819__auto___20244 = (0);
while(true){
if((i__4819__auto___20244 < len__4818__auto___20243)){
args__4824__auto__.push((arguments[i__4819__auto___20244]));

var G__20245 = (i__4819__auto___20244 + (1));
i__4819__auto___20244 = G__20245;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__20241){
var map__20242 = p__20241;
var map__20242__$1 = cljs.core.__destructure_map.call(null,map__20242);
var seen = cljs.core.get.call(null,map__20242__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var step = (function loom$alg_generic$step(successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1){
while(true){
var temp__5751__auto__ = cljs.core.first.call(null,nbrs);
if(cljs.core.truth_(temp__5751__auto__)){
var nbr = temp__5751__auto__;
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null),(new cljs.core.LazySeq(null,((function (successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1,nbr,temp__5751__auto__,map__20242,map__20242__$1,seen){
return (function (){
var seen__$2 = cljs.core.conj.call(null,seen__$1,start__$1);
if(cljs.core.truth_(seen__$2.call(null,nbr))){
return loom$alg_generic$step.call(null,successors__$1,start__$1,cljs.core.next.call(null,nbrs),stack,nbrstack,seen__$2);
} else {
return loom$alg_generic$step.call(null,successors__$1,nbr,successors__$1.call(null,nbr),cljs.core.conj.call(null,stack,start__$1),cljs.core.conj.call(null,nbrstack,cljs.core.next.call(null,nbrs)),seen__$2);
}
});})(successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1,nbr,temp__5751__auto__,map__20242,map__20242__$1,seen))
,null,null)));
} else {
var temp__5753__auto__ = cljs.core.peek.call(null,stack);
if(cljs.core.truth_(temp__5753__auto__)){
var parent = temp__5753__auto__;
var G__20246 = successors__$1;
var G__20247 = parent;
var G__20248 = cljs.core.peek.call(null,nbrstack);
var G__20249 = cljs.core.pop.call(null,stack);
var G__20250 = cljs.core.pop.call(null,nbrstack);
var G__20251 = cljs.core.conj.call(null,seen__$1,start__$1);
successors__$1 = G__20246;
start__$1 = G__20247;
nbrs = G__20248;
stack = G__20249;
nbrstack = G__20250;
seen__$1 = G__20251;
continue;
} else {
return null;
}
}
break;
}
});
if(cljs.core.truth_(seen.call(null,start))){
return null;
} else {
return step.call(null,successors,start,successors.call(null,start),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.conj.call(null,seen,start));
}
}));

(loom.alg_generic.pre_edge_traverse.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(loom.alg_generic.pre_edge_traverse.cljs$lang$applyTo = (function (seq20238){
var G__20239 = cljs.core.first.call(null,seq20238);
var seq20238__$1 = cljs.core.next.call(null,seq20238);
var G__20240 = cljs.core.first.call(null,seq20238__$1);
var seq20238__$2 = cljs.core.next.call(null,seq20238__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20239,G__20240,seq20238__$2);
}));

/**
 * Returns a depth-first spanning tree of the form {node [successors]}
 */
loom.alg_generic.pre_span = (function loom$alg_generic$pre_span(var_args){
var args__4824__auto__ = [];
var len__4818__auto___20257 = arguments.length;
var i__4819__auto___20258 = (0);
while(true){
if((i__4819__auto___20258 < len__4818__auto___20257)){
args__4824__auto__.push((arguments[i__4819__auto___20258]));

var G__20259 = (i__4819__auto___20258 + (1));
i__4819__auto___20258 = G__20259;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__20255){
var map__20256 = p__20255;
var map__20256__$1 = cljs.core.__destructure_map.call(null,map__20256);
var seen = cljs.core.get.call(null,map__20256__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.call(null,map__20256__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
var seen__$1 = seen;
var preds = cljs.core.PersistentArrayMap.createAsIfByAssoc([start,null]);
var stack = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null);
while(true){
if(cljs.core.empty_QMARK_.call(null,stack)){
if(cljs.core.truth_(return_seen)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [loom.alg_generic.preds__GT_span.call(null,preds),seen__$1], null);
} else {
return loom.alg_generic.preds__GT_span.call(null,preds);
}
} else {
var v = cljs.core.peek.call(null,stack);
var seen__$2 = cljs.core.conj.call(null,seen__$1,v);
var temp__5751__auto__ = cljs.core.first.call(null,cljs.core.remove.call(null,seen__$2,successors.call(null,v)));
if(cljs.core.truth_(temp__5751__auto__)){
var u = temp__5751__auto__;
var G__20260 = seen__$2;
var G__20261 = cljs.core.assoc.call(null,preds,u,v);
var G__20262 = cljs.core.conj.call(null,stack,u);
seen__$1 = G__20260;
preds = G__20261;
stack = G__20262;
continue;
} else {
var G__20263 = seen__$2;
var G__20264 = preds;
var G__20265 = cljs.core.pop.call(null,stack);
seen__$1 = G__20263;
preds = G__20264;
stack = G__20265;
continue;
}
}
break;
}
}));

(loom.alg_generic.pre_span.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(loom.alg_generic.pre_span.cljs$lang$applyTo = (function (seq20252){
var G__20253 = cljs.core.first.call(null,seq20252);
var seq20252__$1 = cljs.core.next.call(null,seq20252);
var G__20254 = cljs.core.first.call(null,seq20252__$1);
var seq20252__$2 = cljs.core.next.call(null,seq20252__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20253,G__20254,seq20252__$2);
}));

/**
 * Traverses a graph depth-first postorder from start, successors
 *   being a function that returns adjacent nodes. Returns a vector
 */
loom.alg_generic.post_traverse = (function loom$alg_generic$post_traverse(var_args){
var args__4824__auto__ = [];
var len__4818__auto___20271 = arguments.length;
var i__4819__auto___20272 = (0);
while(true){
if((i__4819__auto___20272 < len__4818__auto___20271)){
args__4824__auto__.push((arguments[i__4819__auto___20272]));

var G__20273 = (i__4819__auto___20272 + (1));
i__4819__auto___20272 = G__20273;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__20269){
var map__20270 = p__20269;
var map__20270__$1 = cljs.core.__destructure_map.call(null,map__20270);
var seen = cljs.core.get.call(null,map__20270__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.call(null,map__20270__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
var seen__$1 = seen;
var result = cljs.core.PersistentVector.EMPTY;
var stack = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null);
while(true){
if(cljs.core.empty_QMARK_.call(null,stack)){
if(cljs.core.truth_(return_seen)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,seen__$1], null);
} else {
return result;
}
} else {
var v = cljs.core.peek.call(null,stack);
var seen__$2 = cljs.core.conj.call(null,seen__$1,v);
var nbrs = cljs.core.remove.call(null,seen__$2,successors.call(null,v));
if(cljs.core.empty_QMARK_.call(null,nbrs)){
var G__20274 = seen__$2;
var G__20275 = cljs.core.conj.call(null,result,v);
var G__20276 = cljs.core.pop.call(null,stack);
seen__$1 = G__20274;
result = G__20275;
stack = G__20276;
continue;
} else {
var G__20277 = seen__$2;
var G__20278 = result;
var G__20279 = cljs.core.conj.call(null,stack,cljs.core.first.call(null,nbrs));
seen__$1 = G__20277;
result = G__20278;
stack = G__20279;
continue;
}
}
break;
}
}));

(loom.alg_generic.post_traverse.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(loom.alg_generic.post_traverse.cljs$lang$applyTo = (function (seq20266){
var G__20267 = cljs.core.first.call(null,seq20266);
var seq20266__$1 = cljs.core.next.call(null,seq20266);
var G__20268 = cljs.core.first.call(null,seq20266__$1);
var seq20266__$2 = cljs.core.next.call(null,seq20266__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20267,G__20268,seq20266__$2);
}));

/**
 * Traverses a graph depth-first postorder from start, successors being
 *   a function that returns direct successors for the node. Returns a
 *   seq of edges, each edge being a vector [source-node dest-node].
 *   Note that for undirected graphs each edge will be returned twice,
 *   once for each direction.
 */
loom.alg_generic.post_edge_traverse = (function loom$alg_generic$post_edge_traverse(var_args){
var args__4824__auto__ = [];
var len__4818__auto___20285 = arguments.length;
var i__4819__auto___20286 = (0);
while(true){
if((i__4819__auto___20286 < len__4818__auto___20285)){
args__4824__auto__.push((arguments[i__4819__auto___20286]));

var G__20287 = (i__4819__auto___20286 + (1));
i__4819__auto___20286 = G__20287;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__20283){
var map__20284 = p__20283;
var map__20284__$1 = cljs.core.__destructure_map.call(null,map__20284);
var seen = cljs.core.get.call(null,map__20284__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.call(null,map__20284__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
if(cljs.core.truth_(seen.call(null,start))){
if(cljs.core.truth_(return_seen)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,seen], null);
} else {
return null;
}
} else {
var start__$1 = start;
var nbrs = successors.call(null,start__$1);
var stack = cljs.core.PersistentVector.EMPTY;
var nbrstack = cljs.core.PersistentVector.EMPTY;
var seen__$1 = seen;
var edges = cljs.core.List.EMPTY;
while(true){
var seen__$2 = cljs.core.conj.call(null,seen__$1,start__$1);
var temp__5751__auto__ = cljs.core.first.call(null,nbrs);
if(cljs.core.truth_(temp__5751__auto__)){
var nbr = temp__5751__auto__;
if(cljs.core.truth_(seen__$2.call(null,nbr))){
var G__20288 = start__$1;
var G__20289 = cljs.core.next.call(null,nbrs);
var G__20290 = stack;
var G__20291 = nbrstack;
var G__20292 = seen__$2;
var G__20293 = cljs.core.conj.call(null,edges,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null));
start__$1 = G__20288;
nbrs = G__20289;
stack = G__20290;
nbrstack = G__20291;
seen__$1 = G__20292;
edges = G__20293;
continue;
} else {
var G__20294 = nbr;
var G__20295 = successors.call(null,nbr);
var G__20296 = cljs.core.conj.call(null,stack,start__$1);
var G__20297 = cljs.core.conj.call(null,nbrstack,cljs.core.next.call(null,nbrs));
var G__20298 = seen__$2;
var G__20299 = cljs.core.conj.call(null,edges,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null));
start__$1 = G__20294;
nbrs = G__20295;
stack = G__20296;
nbrstack = G__20297;
seen__$1 = G__20298;
edges = G__20299;
continue;
}
} else {
var temp__5751__auto____$1 = cljs.core.peek.call(null,stack);
if(cljs.core.truth_(temp__5751__auto____$1)){
var parent = temp__5751__auto____$1;
var G__20300 = parent;
var G__20301 = cljs.core.peek.call(null,nbrstack);
var G__20302 = cljs.core.pop.call(null,stack);
var G__20303 = cljs.core.pop.call(null,nbrstack);
var G__20304 = seen__$2;
var G__20305 = edges;
start__$1 = G__20300;
nbrs = G__20301;
stack = G__20302;
nbrstack = G__20303;
seen__$1 = G__20304;
edges = G__20305;
continue;
} else {
if(cljs.core.truth_(return_seen)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [edges,seen__$2], null);
} else {
return edges;
}
}
}
break;
}
}
}));

(loom.alg_generic.post_edge_traverse.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(loom.alg_generic.post_edge_traverse.cljs$lang$applyTo = (function (seq20280){
var G__20281 = cljs.core.first.call(null,seq20280);
var seq20280__$1 = cljs.core.next.call(null,seq20280);
var G__20282 = cljs.core.first.call(null,seq20280__$1);
var seq20280__$2 = cljs.core.next.call(null,seq20280__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20281,G__20282,seq20280__$2);
}));

/**
 * Topological sort of a component of a (presumably) directed graph.
 *   Returns nil if the graph contains any cycles. See loom.alg/topsort
 *   for a complete topological sort
 */
loom.alg_generic.topsort_component = (function loom$alg_generic$topsort_component(var_args){
var G__20307 = arguments.length;
switch (G__20307) {
case 2:
return loom.alg_generic.topsort_component.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return loom.alg_generic.topsort_component.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(loom.alg_generic.topsort_component.cljs$core$IFn$_invoke$arity$2 = (function (successors,start){
return loom.alg_generic.topsort_component.call(null,successors,start,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentHashSet.EMPTY);
}));

(loom.alg_generic.topsort_component.cljs$core$IFn$_invoke$arity$4 = (function (successors,start,seen,explored){
var seen__$1 = seen;
var explored__$1 = explored;
var result = cljs.core.List.EMPTY;
var stack = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null);
while(true){
if(cljs.core.empty_QMARK_.call(null,stack)){
return result;
} else {
var v = cljs.core.peek.call(null,stack);
var seen__$2 = cljs.core.conj.call(null,seen__$1,v);
var us = cljs.core.remove.call(null,explored__$1,successors.call(null,v));
if(cljs.core.seq.call(null,us)){
if(cljs.core.truth_(cljs.core.some.call(null,seen__$2,us))){
return null;
} else {
var G__20309 = seen__$2;
var G__20310 = explored__$1;
var G__20311 = result;
var G__20312 = cljs.core.conj.call(null,stack,cljs.core.first.call(null,us));
seen__$1 = G__20309;
explored__$1 = G__20310;
result = G__20311;
stack = G__20312;
continue;
}
} else {
var G__20313 = seen__$2;
var G__20314 = cljs.core.conj.call(null,explored__$1,v);
var G__20315 = cljs.core.conj.call(null,result,v);
var G__20316 = cljs.core.pop.call(null,stack);
seen__$1 = G__20313;
explored__$1 = G__20314;
result = G__20315;
stack = G__20316;
continue;
}
}
break;
}
}));

(loom.alg_generic.topsort_component.cljs$lang$maxFixedArity = 4);

/**
 * Traverses a graph breadth-first from start, successors being a
 *   function that returns adjacent nodes. When :f is provided, returns a
 *   lazy seq of (f node predecessor-map depth) for each node traversed.
 *   Otherwise, returns a lazy seq of the nodes. When :when is provided,
 *   filters successors with (f neighbor predecessor depth).
 */
loom.alg_generic.bf_traverse = (function loom$alg_generic$bf_traverse(var_args){
var args__4824__auto__ = [];
var len__4818__auto___20344 = arguments.length;
var i__4819__auto___20345 = (0);
while(true){
if((i__4819__auto___20345 < len__4818__auto___20344)){
args__4824__auto__.push((arguments[i__4819__auto___20345]));

var G__20346 = (i__4819__auto___20345 + (1));
i__4819__auto___20345 = G__20346;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__20324){
var map__20325 = p__20324;
var map__20325__$1 = cljs.core.__destructure_map.call(null,map__20325);
var f = cljs.core.get.call(null,map__20325__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var when = cljs.core.get.call(null,map__20325__$1,new cljs.core.Keyword(null,"when","when",-576417306));
var seen = cljs.core.get.call(null,map__20325__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
var f__$1 = (function (){var or__4212__auto__ = f;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (function (n,p,d){
return n;
});
}
})();
var nbr_pred = (function (){var or__4212__auto__ = when;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.constantly.call(null,true);
}
})();
var step = (function loom$alg_generic$step(queue,preds){
var temp__5753__auto__ = cljs.core.peek.call(null,queue);
if(cljs.core.truth_(temp__5753__auto__)){
var vec__20333 = temp__5753__auto__;
var node = cljs.core.nth.call(null,vec__20333,(0),null);
var depth = cljs.core.nth.call(null,vec__20333,(1),null);
return cljs.core.cons.call(null,f__$1.call(null,node,preds,depth),(new cljs.core.LazySeq(null,(function (){
var nbrs = cljs.core.filter.call(null,(function (p1__20318_SHARP_){
return nbr_pred.call(null,p1__20318_SHARP_,node,(depth + (1)));
}),cljs.core.remove.call(null,(function (p1__20317_SHARP_){
return cljs.core.contains_QMARK_.call(null,preds,p1__20317_SHARP_);
}),successors.call(null,node)));
return loom$alg_generic$step.call(null,cljs.core.into.call(null,cljs.core.pop.call(null,queue),(function (){var iter__4611__auto__ = (function loom$alg_generic$step_$_iter__20336(s__20337){
return (new cljs.core.LazySeq(null,(function (){
var s__20337__$1 = s__20337;
while(true){
var temp__5753__auto____$1 = cljs.core.seq.call(null,s__20337__$1);
if(temp__5753__auto____$1){
var s__20337__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20337__$2)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,s__20337__$2);
var size__4610__auto__ = cljs.core.count.call(null,c__4609__auto__);
var b__20339 = cljs.core.chunk_buffer.call(null,size__4610__auto__);
if((function (){var i__20338 = (0);
while(true){
if((i__20338 < size__4610__auto__)){
var nbr = cljs.core._nth.call(null,c__4609__auto__,i__20338);
cljs.core.chunk_append.call(null,b__20339,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,(depth + (1))], null));

var G__20347 = (i__20338 + (1));
i__20338 = G__20347;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20339),loom$alg_generic$step_$_iter__20336.call(null,cljs.core.chunk_rest.call(null,s__20337__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20339),null);
}
} else {
var nbr = cljs.core.first.call(null,s__20337__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,(depth + (1))], null),loom$alg_generic$step_$_iter__20336.call(null,cljs.core.rest.call(null,s__20337__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__.call(null,nbrs);
})()),cljs.core.reduce.call(null,(function (p1__20319_SHARP_,p2__20320_SHARP_){
return cljs.core.assoc.call(null,p1__20319_SHARP_,p2__20320_SHARP_,node);
}),preds,nbrs));
}),null,null)));
} else {
return null;
}
});
return step.call(null,cljs.core.conj.call(null,cljs.core.PersistentQueue.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,(0)], null)),((cljs.core.map_QMARK_.call(null,seen))?cljs.core.assoc.call(null,seen,start,null):cljs.core.into.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([start,null]),(function (){var iter__4611__auto__ = (function loom$alg_generic$iter__20340(s__20341){
return (new cljs.core.LazySeq(null,(function (){
var s__20341__$1 = s__20341;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__20341__$1);
if(temp__5753__auto__){
var s__20341__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20341__$2)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,s__20341__$2);
var size__4610__auto__ = cljs.core.count.call(null,c__4609__auto__);
var b__20343 = cljs.core.chunk_buffer.call(null,size__4610__auto__);
if((function (){var i__20342 = (0);
while(true){
if((i__20342 < size__4610__auto__)){
var s = cljs.core._nth.call(null,c__4609__auto__,i__20342);
cljs.core.chunk_append.call(null,b__20343,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,null], null));

var G__20348 = (i__20342 + (1));
i__20342 = G__20348;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20343),loom$alg_generic$iter__20340.call(null,cljs.core.chunk_rest.call(null,s__20341__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20343),null);
}
} else {
var s = cljs.core.first.call(null,s__20341__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,null], null),loom$alg_generic$iter__20340.call(null,cljs.core.rest.call(null,s__20341__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__.call(null,seen);
})())));
}));

(loom.alg_generic.bf_traverse.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(loom.alg_generic.bf_traverse.cljs$lang$applyTo = (function (seq20321){
var G__20322 = cljs.core.first.call(null,seq20321);
var seq20321__$1 = cljs.core.next.call(null,seq20321);
var G__20323 = cljs.core.first.call(null,seq20321__$1);
var seq20321__$2 = cljs.core.next.call(null,seq20321__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20322,G__20323,seq20321__$2);
}));

/**
 * Return a breadth-first spanning tree of the form {node
 *   [successors]}
 */
loom.alg_generic.bf_span = (function loom$alg_generic$bf_span(var_args){
var args__4824__auto__ = [];
var len__4818__auto___20354 = arguments.length;
var i__4819__auto___20355 = (0);
while(true){
if((i__4819__auto___20355 < len__4818__auto___20354)){
args__4824__auto__.push((arguments[i__4819__auto___20355]));

var G__20356 = (i__4819__auto___20355 + (1));
i__4819__auto___20355 = G__20356;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__20352){
var map__20353 = p__20352;
var map__20353__$1 = cljs.core.__destructure_map.call(null,map__20353);
var seen = cljs.core.get.call(null,map__20353__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
return loom.alg_generic.preds__GT_span.call(null,cljs.core.last.call(null,loom.alg_generic.bf_traverse.call(null,successors,start,new cljs.core.Keyword(null,"f","f",-1597136552),(function (_,pm,___$1){
return pm;
}),new cljs.core.Keyword(null,"seen","seen",-518999789),seen)));
}));

(loom.alg_generic.bf_span.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(loom.alg_generic.bf_span.cljs$lang$applyTo = (function (seq20349){
var G__20350 = cljs.core.first.call(null,seq20349);
var seq20349__$1 = cljs.core.next.call(null,seq20349);
var G__20351 = cljs.core.first.call(null,seq20349__$1);
var seq20349__$2 = cljs.core.next.call(null,seq20349__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20350,G__20351,seq20349__$2);
}));

/**
 * Returns a path from start to end with the fewest hops (i.e. irrespective
 *   of edge weights), successors being a function that returns adjacent nodes
 */
loom.alg_generic.bf_path = (function loom$alg_generic$bf_path(var_args){
var args__4824__auto__ = [];
var len__4818__auto___20367 = arguments.length;
var i__4819__auto___20368 = (0);
while(true){
if((i__4819__auto___20368 < len__4818__auto___20367)){
args__4824__auto__.push((arguments[i__4819__auto___20368]));

var G__20369 = (i__4819__auto___20368 + (1));
i__4819__auto___20368 = G__20369;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,end,p__20361){
var map__20362 = p__20361;
var map__20362__$1 = cljs.core.__destructure_map.call(null,map__20362);
var opts = map__20362__$1;
var opts__$1 = cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.vector], null));
var temp__5753__auto__ = cljs.core.some.call(null,(function (p__20363){
var vec__20364 = p__20363;
var _ = cljs.core.nth.call(null,vec__20364,(0),null);
var pm = cljs.core.nth.call(null,vec__20364,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__20364,(2),null);
if(cljs.core.truth_(pm.call(null,end))){
return pm;
} else {
return null;
}
}),cljs.core.apply.call(null,loom.alg_generic.bf_traverse,successors,start,cljs.core.apply.call(null,cljs.core.concat,opts__$1)));
if(cljs.core.truth_(temp__5753__auto__)){
var preds = temp__5753__auto__;
return cljs.core.reverse.call(null,loom.alg_generic.trace_path.call(null,preds,end));
} else {
return null;
}
}));

(loom.alg_generic.bf_path.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(loom.alg_generic.bf_path.cljs$lang$applyTo = (function (seq20357){
var G__20358 = cljs.core.first.call(null,seq20357);
var seq20357__$1 = cljs.core.next.call(null,seq20357);
var G__20359 = cljs.core.first.call(null,seq20357__$1);
var seq20357__$2 = cljs.core.next.call(null,seq20357__$1);
var G__20360 = cljs.core.first.call(null,seq20357__$2);
var seq20357__$3 = cljs.core.next.call(null,seq20357__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20358,G__20359,G__20360,seq20357__$3);
}));

/**
 * Returns a lazy-seq of the keys that exist in both m1 and m2
 */
loom.alg_generic.shared_keys = (function loom$alg_generic$shared_keys(m1,m2){
while(true){
if((cljs.core.count.call(null,m2) < cljs.core.count.call(null,m1))){
var G__20370 = m2;
var G__20371 = m1;
m1 = G__20370;
m2 = G__20371;
continue;
} else {
return cljs.core.filter.call(null,cljs.core.partial.call(null,cljs.core.contains_QMARK_,m2),cljs.core.keys.call(null,m1));
}
break;
}
});
loom.alg_generic.bf_path_bi = (function loom$alg_generic$bf_path_bi(outgoing,predecessors,start,end){
throw (new Error("Unsupported operation `bf-path-bi`"));
});
loom.alg_generic.reverse_edges = (function loom$alg_generic$reverse_edges(successor_fn,nodes,coll){
var iter__4611__auto__ = (function loom$alg_generic$reverse_edges_$_iter__20373(s__20374){
return (new cljs.core.LazySeq(null,(function (){
var s__20374__$1 = s__20374;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__20374__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var node = cljs.core.first.call(null,xs__6308__auto__);
var iterys__4607__auto__ = ((function (s__20374__$1,node,xs__6308__auto__,temp__5753__auto__){
return (function loom$alg_generic$reverse_edges_$_iter__20373_$_iter__20375(s__20376){
return (new cljs.core.LazySeq(null,((function (s__20374__$1,node,xs__6308__auto__,temp__5753__auto__){
return (function (){
var s__20376__$1 = s__20376;
while(true){
var temp__5753__auto____$1 = cljs.core.seq.call(null,s__20376__$1);
if(temp__5753__auto____$1){
var s__20376__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20376__$2)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,s__20376__$2);
var size__4610__auto__ = cljs.core.count.call(null,c__4609__auto__);
var b__20378 = cljs.core.chunk_buffer.call(null,size__4610__auto__);
if((function (){var i__20377 = (0);
while(true){
if((i__20377 < size__4610__auto__)){
var nbr = cljs.core._nth.call(null,c__4609__auto__,i__20377);
if((!(cljs.core.contains_QMARK_.call(null,coll,nbr)))){
cljs.core.chunk_append.call(null,b__20378,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,node], null));

var G__20379 = (i__20377 + (1));
i__20377 = G__20379;
continue;
} else {
var G__20380 = (i__20377 + (1));
i__20377 = G__20380;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20378),loom$alg_generic$reverse_edges_$_iter__20373_$_iter__20375.call(null,cljs.core.chunk_rest.call(null,s__20376__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20378),null);
}
} else {
var nbr = cljs.core.first.call(null,s__20376__$2);
if((!(cljs.core.contains_QMARK_.call(null,coll,nbr)))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,node], null),loom$alg_generic$reverse_edges_$_iter__20373_$_iter__20375.call(null,cljs.core.rest.call(null,s__20376__$2)));
} else {
var G__20381 = cljs.core.rest.call(null,s__20376__$2);
s__20376__$1 = G__20381;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__20374__$1,node,xs__6308__auto__,temp__5753__auto__))
,null,null));
});})(s__20374__$1,node,xs__6308__auto__,temp__5753__auto__))
;
var fs__4608__auto__ = cljs.core.seq.call(null,iterys__4607__auto__.call(null,successor_fn.call(null,node)));
if(fs__4608__auto__){
return cljs.core.concat.call(null,fs__4608__auto__,loom$alg_generic$reverse_edges_$_iter__20373.call(null,cljs.core.rest.call(null,s__20374__$1)));
} else {
var G__20382 = cljs.core.rest.call(null,s__20374__$1);
s__20374__$1 = G__20382;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__.call(null,nodes);
});
loom.alg_generic.conj_paths = (function loom$alg_generic$conj_paths(from_map,to_map,matches){
var iter__4611__auto__ = (function loom$alg_generic$conj_paths_$_iter__20383(s__20384){
return (new cljs.core.LazySeq(null,(function (){
var s__20384__$1 = s__20384;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__20384__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var n = cljs.core.first.call(null,xs__6308__auto__);
var iterys__4607__auto__ = ((function (s__20384__$1,n,xs__6308__auto__,temp__5753__auto__){
return (function loom$alg_generic$conj_paths_$_iter__20383_$_iter__20385(s__20386){
return (new cljs.core.LazySeq(null,((function (s__20384__$1,n,xs__6308__auto__,temp__5753__auto__){
return (function (){
var s__20386__$1 = s__20386;
while(true){
var temp__5753__auto____$1 = cljs.core.seq.call(null,s__20386__$1);
if(temp__5753__auto____$1){
var xs__6308__auto____$1 = temp__5753__auto____$1;
var from = cljs.core.first.call(null,xs__6308__auto____$1);
var iterys__4607__auto__ = ((function (s__20386__$1,s__20384__$1,from,xs__6308__auto____$1,temp__5753__auto____$1,n,xs__6308__auto__,temp__5753__auto__){
return (function loom$alg_generic$conj_paths_$_iter__20383_$_iter__20385_$_iter__20387(s__20388){
return (new cljs.core.LazySeq(null,((function (s__20386__$1,s__20384__$1,from,xs__6308__auto____$1,temp__5753__auto____$1,n,xs__6308__auto__,temp__5753__auto__){
return (function (){
var s__20388__$1 = s__20388;
while(true){
var temp__5753__auto____$2 = cljs.core.seq.call(null,s__20388__$1);
if(temp__5753__auto____$2){
var s__20388__$2 = temp__5753__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20388__$2)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,s__20388__$2);
var size__4610__auto__ = cljs.core.count.call(null,c__4609__auto__);
var b__20390 = cljs.core.chunk_buffer.call(null,size__4610__auto__);
if((function (){var i__20389 = (0);
while(true){
if((i__20389 < size__4610__auto__)){
var to = cljs.core._nth.call(null,c__4609__auto__,i__20389);
cljs.core.chunk_append.call(null,b__20390,cljs.core.vec.call(null,cljs.core.concat.call(null,from,to)));

var G__20391 = (i__20389 + (1));
i__20389 = G__20391;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20390),loom$alg_generic$conj_paths_$_iter__20383_$_iter__20385_$_iter__20387.call(null,cljs.core.chunk_rest.call(null,s__20388__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20390),null);
}
} else {
var to = cljs.core.first.call(null,s__20388__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.concat.call(null,from,to)),loom$alg_generic$conj_paths_$_iter__20383_$_iter__20385_$_iter__20387.call(null,cljs.core.rest.call(null,s__20388__$2)));
}
} else {
return null;
}
break;
}
});})(s__20386__$1,s__20384__$1,from,xs__6308__auto____$1,temp__5753__auto____$1,n,xs__6308__auto__,temp__5753__auto__))
,null,null));
});})(s__20386__$1,s__20384__$1,from,xs__6308__auto____$1,temp__5753__auto____$1,n,xs__6308__auto__,temp__5753__auto__))
;
var fs__4608__auto__ = cljs.core.seq.call(null,iterys__4607__auto__.call(null,cljs.core.map.call(null,cljs.core.rest,loom.alg_generic.trace_paths.call(null,to_map,n))));
if(fs__4608__auto__){
return cljs.core.concat.call(null,fs__4608__auto__,loom$alg_generic$conj_paths_$_iter__20383_$_iter__20385.call(null,cljs.core.rest.call(null,s__20386__$1)));
} else {
var G__20392 = cljs.core.rest.call(null,s__20386__$1);
s__20386__$1 = G__20392;
continue;
}
} else {
return null;
}
break;
}
});})(s__20384__$1,n,xs__6308__auto__,temp__5753__auto__))
,null,null));
});})(s__20384__$1,n,xs__6308__auto__,temp__5753__auto__))
;
var fs__4608__auto__ = cljs.core.seq.call(null,iterys__4607__auto__.call(null,cljs.core.map.call(null,cljs.core.reverse,loom.alg_generic.trace_paths.call(null,from_map,n))));
if(fs__4608__auto__){
return cljs.core.concat.call(null,fs__4608__auto__,loom$alg_generic$conj_paths_$_iter__20383.call(null,cljs.core.rest.call(null,s__20384__$1)));
} else {
var G__20393 = cljs.core.rest.call(null,s__20384__$1);
s__20384__$1 = G__20393;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__.call(null,matches);
});
/**
 * Using a bidirectional breadth-first search, returns all shortest
 *   paths from start to end; predecessors is called on end and each
 *   preceding node, successors is called on start, etc.
 */
loom.alg_generic.bf_paths_bi = (function loom$alg_generic$bf_paths_bi(successors,predecessors,start,end){
var find_succs = cljs.core.partial.call(null,loom.alg_generic.reverse_edges,successors);
var find_preds = cljs.core.partial.call(null,loom.alg_generic.reverse_edges,predecessors);
var overlaps = (function (coll,q){
return cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__20394_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__20394_SHARP_);
}),q));
});
var map_set_pairs = (function (map,pairs){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (map__$1,p__20395){
var vec__20396 = p__20395;
var key = cljs.core.nth.call(null,vec__20396,(0),null);
var val = cljs.core.nth.call(null,vec__20396,(1),null);
return cljs.core.assoc_BANG_.call(null,map__$1,key,cljs.core.conj.call(null,cljs.core.get.call(null,map__$1,key,cljs.core.PersistentHashSet.EMPTY),val));
}),cljs.core.transient$.call(null,map),pairs));
});
var outgoing = cljs.core.PersistentArrayMap.createAsIfByAssoc([start,null]);
var incoming = cljs.core.PersistentArrayMap.createAsIfByAssoc([end,null]);
var q1 = (new cljs.core.List(null,start,null,(1),null));
var q2 = (new cljs.core.List(null,end,null,(1),null));
while(true){
if(((cljs.core.seq.call(null,q1)) && (cljs.core.seq.call(null,q2)))){
if((cljs.core.count.call(null,q1) <= cljs.core.count.call(null,q2))){
var pairs = find_succs.call(null,q1,outgoing);
var outgoing__$1 = map_set_pairs.call(null,outgoing,pairs);
var q1__$1 = cljs.core.map.call(null,cljs.core.first,pairs);
var temp__5751__auto__ = overlaps.call(null,incoming,q1__$1);
if(temp__5751__auto__){
var all = temp__5751__auto__;
return loom.alg_generic.conj_paths.call(null,outgoing__$1,incoming,cljs.core.set.call(null,all));
} else {
var G__20399 = outgoing__$1;
var G__20400 = incoming;
var G__20401 = q1__$1;
var G__20402 = q2;
outgoing = G__20399;
incoming = G__20400;
q1 = G__20401;
q2 = G__20402;
continue;
}
} else {
var pairs = find_preds.call(null,q2,incoming);
var incoming__$1 = map_set_pairs.call(null,incoming,pairs);
var q2__$1 = cljs.core.map.call(null,cljs.core.first,pairs);
var temp__5751__auto__ = overlaps.call(null,outgoing,q2__$1);
if(temp__5751__auto__){
var all = temp__5751__auto__;
return loom.alg_generic.conj_paths.call(null,outgoing,incoming__$1,cljs.core.set.call(null,all));
} else {
var G__20403 = outgoing;
var G__20404 = incoming__$1;
var G__20405 = q1;
var G__20406 = q2__$1;
outgoing = G__20403;
incoming = G__20404;
q1 = G__20405;
q2 = G__20406;
continue;
}
}
} else {
return null;
}
break;
}
});
/**
 * Returns a lazy-seq of [current-node state] where state is a map in the
 *   format {node [distance predecessor]}. When f is provided, returns
 *   a lazy-seq of (f node state) for each node
 */
loom.alg_generic.dijkstra_traverse = (function loom$alg_generic$dijkstra_traverse(var_args){
var G__20410 = arguments.length;
switch (G__20410) {
case 3:
return loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$3 = (function (successors,dist,start){
return loom.alg_generic.dijkstra_traverse.call(null,successors,dist,start,cljs.core.vector);
}));

(loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$4 = (function (successors,dist,start,f){
var step = (function loom$alg_generic$step(p__20422){
var vec__20423 = p__20422;
var state = cljs.core.nth.call(null,vec__20423,(0),null);
var pq = cljs.core.nth.call(null,vec__20423,(1),null);
var temp__5753__auto__ = cljs.core.first.call(null,pq);
if(cljs.core.truth_(temp__5753__auto__)){
var vec__20426 = temp__5753__auto__;
var dist_su = cljs.core.nth.call(null,vec__20426,(0),null);
var _ = cljs.core.nth.call(null,vec__20426,(1),null);
var u = cljs.core.nth.call(null,vec__20426,(2),null);
var fpq = vec__20426;
return cljs.core.cons.call(null,f.call(null,u,state),(new cljs.core.LazySeq(null,(function (){
return loom$alg_generic$step.call(null,cljs.core.reduce.call(null,(function (p__20429,v){
var vec__20430 = p__20429;
var state__$1 = cljs.core.nth.call(null,vec__20430,(0),null);
var pq__$1 = cljs.core.nth.call(null,vec__20430,(1),null);
var dist_suv = (dist_su + dist.call(null,u,v));
var dist_sv = cljs.core.first.call(null,state__$1.call(null,v));
if(cljs.core.truth_((function (){var and__4210__auto__ = dist_sv;
if(cljs.core.truth_(and__4210__auto__)){
return (dist_suv >= dist_sv);
} else {
return and__4210__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__$1,pq__$1], null);
} else {
var pq__$2 = (cljs.core.truth_(dist_sv)?cljs.core.disj.call(null,pq__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dist_sv,cljs.core.hash.call(null,v),v], null)):pq__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,state__$1,v,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dist_suv,u], null)),cljs.core.conj.call(null,pq__$2,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dist_suv,cljs.core.hash.call(null,v),v], null))], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,cljs.core.disj.call(null,pq,fpq)], null),successors.call(null,u)));
}),null,null)));
} else {
return null;
}
});
return step.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([start,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),null], null)]),cljs.core.sorted_set.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.hash.call(null,start),start], null))], null));
}));

(loom.alg_generic.dijkstra_traverse.cljs$lang$maxFixedArity = 4);

/**
 * Finds all shortest distances from start, where successors and dist
 *   are functions called as (successors node) and (dist node1 node2).
 *   Returns a map in the format {node {successor distance}}
 */
loom.alg_generic.dijkstra_span = (function loom$alg_generic$dijkstra_span(successors,dist,start){
return cljs.core.reduce.call(null,(function (span,p__20434){
var vec__20435 = p__20434;
var n = cljs.core.nth.call(null,vec__20435,(0),null);
var vec__20438 = cljs.core.nth.call(null,vec__20435,(1),null);
var d = cljs.core.nth.call(null,vec__20438,(0),null);
var p = cljs.core.nth.call(null,vec__20438,(1),null);
if(cljs.core.truth_(p)){
return cljs.core.assoc_in.call(null,span,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,n], null),d);
} else {
return span;
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.second.call(null,cljs.core.last.call(null,loom.alg_generic.dijkstra_traverse.call(null,successors,dist,start))));
});
/**
 * Finds the shortest path from start to end, where successors and dist
 *   are functions called as (successors node) and (dist node1 node2).
 *   Returns a vector: [path distance]
 */
loom.alg_generic.dijkstra_path_dist = (function loom$alg_generic$dijkstra_path_dist(successors,dist,start,end){
var temp__5751__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p__20441){
var vec__20442 = p__20441;
var node = cljs.core.nth.call(null,vec__20442,(0),null);
var _ = cljs.core.nth.call(null,vec__20442,(1),null);
return cljs.core._EQ_.call(null,end,node);
}),loom.alg_generic.dijkstra_traverse.call(null,successors,dist,start)));
if(cljs.core.truth_(temp__5751__auto__)){
var vec__20445 = temp__5751__auto__;
var _ = cljs.core.nth.call(null,vec__20445,(0),null);
var end_state = cljs.core.nth.call(null,vec__20445,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reverse.call(null,loom.alg_generic.trace_path.call(null,cljs.core.comp.call(null,cljs.core.second,end_state),end)),cljs.core.first.call(null,end_state.call(null,end))], null);
} else {
return null;
}
});
/**
 * Finds the shortest path from start to end, where successors and dist
 *   are functions called as (successors node) and (dist node1 node2)
 */
loom.alg_generic.dijkstra_path = (function loom$alg_generic$dijkstra_path(successors,dist,start,end){
return cljs.core.first.call(null,loom.alg_generic.dijkstra_path_dist.call(null,successors,dist,start,end));
});
loom.alg_generic.bits_per_long = cljs.core.long$.call(null,(32));
/**
 * Returns the number of longs required to store bits count bits in a bitmap.
 */
loom.alg_generic.bm_longs = (function loom$alg_generic$bm_longs(bits){
return cljs.core.long$.call(null,Math.ceil((bits / loom.alg_generic.bits_per_long)));
});
/**
 * Create new empty bitmap.
 */
loom.alg_generic.bm_new = (function loom$alg_generic$bm_new(){
return cljs.core.long_array.call(null,(1));
});
loom.alg_generic.bm_copy = (function loom$alg_generic$bm_copy(bm,size){
return bm.slice((0),size);
});
/**
 * Set boolean state of bit in 'bitmap at 'idx to true.
 */
loom.alg_generic.bm_set = (function loom$alg_generic$bm_set(bitmap,idx){
var size = (function (){var x__4295__auto__ = cljs.core.count.call(null,bitmap);
var y__4296__auto__ = loom.alg_generic.bm_longs.call(null,(idx + (1)));
return ((x__4295__auto__ > y__4296__auto__) ? x__4295__auto__ : y__4296__auto__);
})();
var new_bitmap = loom.alg_generic.bm_copy.call(null,bitmap,size);
var chunk = cljs.core.quot.call(null,idx,loom.alg_generic.bits_per_long);
var offset = cljs.core.mod.call(null,idx,loom.alg_generic.bits_per_long);
var mask = ((0) | (1 << offset));
var value = (new_bitmap[chunk]);
var new_value = (value | mask);
(new_bitmap[chunk] = new_value);

return new_bitmap;
});
/**
 * Get boolean state of bit in 'bitmap at 'idx.
 */
loom.alg_generic.bm_get = (function loom$alg_generic$bm_get(bitmap,idx){
if((loom.alg_generic.bm_longs.call(null,(idx + (1))) <= cljs.core.count.call(null,bitmap))){
var chunk = cljs.core.quot.call(null,idx,loom.alg_generic.bits_per_long);
var offset = cljs.core.mod.call(null,idx,loom.alg_generic.bits_per_long);
var mask = ((0) | (1 << offset));
var value = (bitmap[chunk]);
var masked_value = (value & mask);
return (!((masked_value === (0))));
} else {
return null;
}
});
/**
 * Logically OR 'bitmaps together.
 */
loom.alg_generic.bm_or = (function loom$alg_generic$bm_or(var_args){
var args__4824__auto__ = [];
var len__4818__auto___20516 = arguments.length;
var i__4819__auto___20517 = (0);
while(true){
if((i__4819__auto___20517 < len__4818__auto___20516)){
args__4824__auto__.push((arguments[i__4819__auto___20517]));

var G__20518 = (i__4819__auto___20517 + (1));
i__4819__auto___20517 = G__20518;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return loom.alg_generic.bm_or.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(loom.alg_generic.bm_or.cljs$core$IFn$_invoke$arity$variadic = (function (bitmaps){
if(cljs.core.empty_QMARK_.call(null,bitmaps)){
return loom.alg_generic.bm_new.call(null);
} else {
var size = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.count,bitmaps));
var new_bitmap = loom.alg_generic.bm_copy.call(null,cljs.core.first.call(null,bitmaps),size);
var seq__20452_20519 = cljs.core.seq.call(null,cljs.core.rest.call(null,bitmaps));
var chunk__20459_20520 = null;
var count__20460_20521 = (0);
var i__20461_20522 = (0);
while(true){
if((i__20461_20522 < count__20460_20521)){
var bitmap_20523 = cljs.core._nth.call(null,chunk__20459_20520,i__20461_20522);
var seq__20462_20524 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.list,bitmap_20523));
var chunk__20464_20525 = null;
var count__20465_20526 = (0);
var i__20466_20527 = (0);
while(true){
if((i__20466_20527 < count__20465_20526)){
var vec__20498_20528 = cljs.core._nth.call(null,chunk__20464_20525,i__20466_20527);
var idx_20529 = cljs.core.nth.call(null,vec__20498_20528,(0),null);
var value_20530 = cljs.core.nth.call(null,vec__20498_20528,(1),null);
var masked_value_20531 = (value_20530 | (new_bitmap[idx_20529]));
(new_bitmap[idx_20529] = masked_value_20531);


var G__20532 = seq__20462_20524;
var G__20533 = chunk__20464_20525;
var G__20534 = count__20465_20526;
var G__20535 = (i__20466_20527 + (1));
seq__20462_20524 = G__20532;
chunk__20464_20525 = G__20533;
count__20465_20526 = G__20534;
i__20466_20527 = G__20535;
continue;
} else {
var temp__5753__auto___20536 = cljs.core.seq.call(null,seq__20462_20524);
if(temp__5753__auto___20536){
var seq__20462_20537__$1 = temp__5753__auto___20536;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20462_20537__$1)){
var c__4638__auto___20538 = cljs.core.chunk_first.call(null,seq__20462_20537__$1);
var G__20539 = cljs.core.chunk_rest.call(null,seq__20462_20537__$1);
var G__20540 = c__4638__auto___20538;
var G__20541 = cljs.core.count.call(null,c__4638__auto___20538);
var G__20542 = (0);
seq__20462_20524 = G__20539;
chunk__20464_20525 = G__20540;
count__20465_20526 = G__20541;
i__20466_20527 = G__20542;
continue;
} else {
var vec__20501_20543 = cljs.core.first.call(null,seq__20462_20537__$1);
var idx_20544 = cljs.core.nth.call(null,vec__20501_20543,(0),null);
var value_20545 = cljs.core.nth.call(null,vec__20501_20543,(1),null);
var masked_value_20546 = (value_20545 | (new_bitmap[idx_20544]));
(new_bitmap[idx_20544] = masked_value_20546);


var G__20547 = cljs.core.next.call(null,seq__20462_20537__$1);
var G__20548 = null;
var G__20549 = (0);
var G__20550 = (0);
seq__20462_20524 = G__20547;
chunk__20464_20525 = G__20548;
count__20465_20526 = G__20549;
i__20466_20527 = G__20550;
continue;
}
} else {
}
}
break;
}

var G__20551 = seq__20452_20519;
var G__20552 = chunk__20459_20520;
var G__20553 = count__20460_20521;
var G__20554 = (i__20461_20522 + (1));
seq__20452_20519 = G__20551;
chunk__20459_20520 = G__20552;
count__20460_20521 = G__20553;
i__20461_20522 = G__20554;
continue;
} else {
var temp__5753__auto___20555 = cljs.core.seq.call(null,seq__20452_20519);
if(temp__5753__auto___20555){
var seq__20452_20556__$1 = temp__5753__auto___20555;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20452_20556__$1)){
var c__4638__auto___20557 = cljs.core.chunk_first.call(null,seq__20452_20556__$1);
var G__20558 = cljs.core.chunk_rest.call(null,seq__20452_20556__$1);
var G__20559 = c__4638__auto___20557;
var G__20560 = cljs.core.count.call(null,c__4638__auto___20557);
var G__20561 = (0);
seq__20452_20519 = G__20558;
chunk__20459_20520 = G__20559;
count__20460_20521 = G__20560;
i__20461_20522 = G__20561;
continue;
} else {
var bitmap_20562 = cljs.core.first.call(null,seq__20452_20556__$1);
var seq__20453_20563 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.list,bitmap_20562));
var chunk__20455_20564 = null;
var count__20456_20565 = (0);
var i__20457_20566 = (0);
while(true){
if((i__20457_20566 < count__20456_20565)){
var vec__20510_20567 = cljs.core._nth.call(null,chunk__20455_20564,i__20457_20566);
var idx_20568 = cljs.core.nth.call(null,vec__20510_20567,(0),null);
var value_20569 = cljs.core.nth.call(null,vec__20510_20567,(1),null);
var masked_value_20570 = (value_20569 | (new_bitmap[idx_20568]));
(new_bitmap[idx_20568] = masked_value_20570);


var G__20571 = seq__20453_20563;
var G__20572 = chunk__20455_20564;
var G__20573 = count__20456_20565;
var G__20574 = (i__20457_20566 + (1));
seq__20453_20563 = G__20571;
chunk__20455_20564 = G__20572;
count__20456_20565 = G__20573;
i__20457_20566 = G__20574;
continue;
} else {
var temp__5753__auto___20575__$1 = cljs.core.seq.call(null,seq__20453_20563);
if(temp__5753__auto___20575__$1){
var seq__20453_20576__$1 = temp__5753__auto___20575__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20453_20576__$1)){
var c__4638__auto___20577 = cljs.core.chunk_first.call(null,seq__20453_20576__$1);
var G__20578 = cljs.core.chunk_rest.call(null,seq__20453_20576__$1);
var G__20579 = c__4638__auto___20577;
var G__20580 = cljs.core.count.call(null,c__4638__auto___20577);
var G__20581 = (0);
seq__20453_20563 = G__20578;
chunk__20455_20564 = G__20579;
count__20456_20565 = G__20580;
i__20457_20566 = G__20581;
continue;
} else {
var vec__20513_20582 = cljs.core.first.call(null,seq__20453_20576__$1);
var idx_20583 = cljs.core.nth.call(null,vec__20513_20582,(0),null);
var value_20584 = cljs.core.nth.call(null,vec__20513_20582,(1),null);
var masked_value_20585 = (value_20584 | (new_bitmap[idx_20583]));
(new_bitmap[idx_20583] = masked_value_20585);


var G__20586 = cljs.core.next.call(null,seq__20453_20576__$1);
var G__20587 = null;
var G__20588 = (0);
var G__20589 = (0);
seq__20453_20563 = G__20586;
chunk__20455_20564 = G__20587;
count__20456_20565 = G__20588;
i__20457_20566 = G__20589;
continue;
}
} else {
}
}
break;
}

var G__20590 = cljs.core.next.call(null,seq__20452_20556__$1);
var G__20591 = null;
var G__20592 = (0);
var G__20593 = (0);
seq__20452_20519 = G__20590;
chunk__20459_20520 = G__20591;
count__20460_20521 = G__20592;
i__20461_20522 = G__20593;
continue;
}
} else {
}
}
break;
}

return new_bitmap;
}
}));

(loom.alg_generic.bm_or.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(loom.alg_generic.bm_or.cljs$lang$applyTo = (function (seq20451){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20451));
}));

/**
 * Get the indicies of set bits in 'bitmap.
 */
loom.alg_generic.bm_get_indicies = (function loom$alg_generic$bm_get_indicies(bitmap){
var iter__4611__auto__ = (function loom$alg_generic$bm_get_indicies_$_iter__20594(s__20595){
return (new cljs.core.LazySeq(null,(function (){
var s__20595__$1 = s__20595;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__20595__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var chunk = cljs.core.first.call(null,xs__6308__auto__);
var iterys__4607__auto__ = ((function (s__20595__$1,chunk,xs__6308__auto__,temp__5753__auto__){
return (function loom$alg_generic$bm_get_indicies_$_iter__20594_$_iter__20596(s__20597){
return (new cljs.core.LazySeq(null,((function (s__20595__$1,chunk,xs__6308__auto__,temp__5753__auto__){
return (function (){
var s__20597__$1 = s__20597;
while(true){
var temp__5753__auto____$1 = cljs.core.seq.call(null,s__20597__$1);
if(temp__5753__auto____$1){
var s__20597__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20597__$2)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,s__20597__$2);
var size__4610__auto__ = cljs.core.count.call(null,c__4609__auto__);
var b__20599 = cljs.core.chunk_buffer.call(null,size__4610__auto__);
if((function (){var i__20598 = (0);
while(true){
if((i__20598 < size__4610__auto__)){
var offset = cljs.core._nth.call(null,c__4609__auto__,i__20598);
var idx = ((chunk * loom.alg_generic.bits_per_long) + offset);
if(cljs.core.truth_(loom.alg_generic.bm_get.call(null,bitmap,idx))){
cljs.core.chunk_append.call(null,b__20599,idx);

var G__20600 = (i__20598 + (1));
i__20598 = G__20600;
continue;
} else {
var G__20601 = (i__20598 + (1));
i__20598 = G__20601;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20599),loom$alg_generic$bm_get_indicies_$_iter__20594_$_iter__20596.call(null,cljs.core.chunk_rest.call(null,s__20597__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20599),null);
}
} else {
var offset = cljs.core.first.call(null,s__20597__$2);
var idx = ((chunk * loom.alg_generic.bits_per_long) + offset);
if(cljs.core.truth_(loom.alg_generic.bm_get.call(null,bitmap,idx))){
return cljs.core.cons.call(null,idx,loom$alg_generic$bm_get_indicies_$_iter__20594_$_iter__20596.call(null,cljs.core.rest.call(null,s__20597__$2)));
} else {
var G__20602 = cljs.core.rest.call(null,s__20597__$2);
s__20597__$1 = G__20602;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__20595__$1,chunk,xs__6308__auto__,temp__5753__auto__))
,null,null));
});})(s__20595__$1,chunk,xs__6308__auto__,temp__5753__auto__))
;
var fs__4608__auto__ = cljs.core.seq.call(null,iterys__4607__auto__.call(null,cljs.core.range.call(null,loom.alg_generic.bits_per_long)));
if(fs__4608__auto__){
return cljs.core.concat.call(null,fs__4608__auto__,loom$alg_generic$bm_get_indicies_$_iter__20594.call(null,cljs.core.rest.call(null,s__20595__$1)));
} else {
var G__20603 = cljs.core.rest.call(null,s__20595__$1);
s__20595__$1 = G__20603;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,bitmap)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
loom.alg_generic.Ancestry = (function (node__GT_idx,idx__GT_node,bitmaps,__meta,__extmap,__hash){
this.node__GT_idx = node__GT_idx;
this.idx__GT_node = idx__GT_node;
this.bitmaps = bitmaps;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(loom.alg_generic.Ancestry.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(loom.alg_generic.Ancestry.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k20605,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__20609 = k20605;
var G__20609__$1 = (((G__20609 instanceof cljs.core.Keyword))?G__20609.fqn:null);
switch (G__20609__$1) {
case "node->idx":
return self__.node__GT_idx;

break;
case "idx->node":
return self__.idx__GT_node;

break;
case "bitmaps":
return self__.bitmaps;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k20605,else__4464__auto__);

}
}));

(loom.alg_generic.Ancestry.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4484__auto__,p__20610){
var vec__20611 = p__20610;
var k__4485__auto__ = cljs.core.nth.call(null,vec__20611,(0),null);
var v__4486__auto__ = cljs.core.nth.call(null,vec__20611,(1),null);
return f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__);
}),init__4483__auto__,this__4481__auto____$1);
}));

(loom.alg_generic.Ancestry.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4477__auto__,pr_pair__4479__auto__,"#loom.alg-generic.Ancestry{",", ","}",opts__4478__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"node->idx","node->idx",152705227),self__.node__GT_idx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),self__.idx__GT_node],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),self__.bitmaps],null))], null),self__.__extmap));
}));

(loom.alg_generic.Ancestry.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20604){
var self__ = this;
var G__20604__$1 = this;
return (new cljs.core.RecordIter((0),G__20604__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node->idx","node->idx",152705227),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(loom.alg_generic.Ancestry.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(loom.alg_generic.Ancestry.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,self__.__meta,self__.__extmap,self__.__hash));
}));

(loom.alg_generic.Ancestry.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
}));

(loom.alg_generic.Ancestry.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (-1116202445 ^ cljs.core.hash_unordered_coll.call(null,coll__4458__auto__));
}).call(null,this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(loom.alg_generic.Ancestry.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this20606,other20607){
var self__ = this;
var this20606__$1 = this;
return (((!((other20607 == null)))) && ((((this20606__$1.constructor === other20607.constructor)) && (((cljs.core._EQ_.call(null,this20606__$1.node__GT_idx,other20607.node__GT_idx)) && (((cljs.core._EQ_.call(null,this20606__$1.idx__GT_node,other20607.idx__GT_node)) && (((cljs.core._EQ_.call(null,this20606__$1.bitmaps,other20607.bitmaps)) && (cljs.core._EQ_.call(null,this20606__$1.__extmap,other20607.__extmap)))))))))));
}));

(loom.alg_generic.Ancestry.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),null,new cljs.core.Keyword(null,"node->idx","node->idx",152705227),null,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4472__auto__)),null));
}
}));

(loom.alg_generic.Ancestry.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k20605){
var self__ = this;
var this__4468__auto____$1 = this;
var G__20614 = k20605;
var G__20614__$1 = (((G__20614 instanceof cljs.core.Keyword))?G__20614.fqn:null);
switch (G__20614__$1) {
case "node->idx":
case "idx->node":
case "bitmaps":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k20605);

}
}));

(loom.alg_generic.Ancestry.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__20604){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__20615 = cljs.core.keyword_identical_QMARK_;
var expr__20616 = k__4470__auto__;
if(cljs.core.truth_(pred__20615.call(null,new cljs.core.Keyword(null,"node->idx","node->idx",152705227),expr__20616))){
return (new loom.alg_generic.Ancestry(G__20604,self__.idx__GT_node,self__.bitmaps,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20615.call(null,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),expr__20616))){
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,G__20604,self__.bitmaps,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20615.call(null,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),expr__20616))){
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,G__20604,self__.__meta,self__.__extmap,null));
} else {
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4470__auto__,G__20604),null));
}
}
}
}));

(loom.alg_generic.Ancestry.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"node->idx","node->idx",152705227),self__.node__GT_idx,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),self__.idx__GT_node,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),self__.bitmaps,null))], null),self__.__extmap));
}));

(loom.alg_generic.Ancestry.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__20604){
var self__ = this;
var this__4460__auto____$1 = this;
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,G__20604,self__.__extmap,self__.__hash));
}));

(loom.alg_generic.Ancestry.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4467__auto__,(0)),cljs.core._nth.call(null,entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(loom.alg_generic.Ancestry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"node->idx","node->idx",1793236754,null),new cljs.core.Symbol(null,"idx->node","idx->node",-842528594,null),new cljs.core.Symbol(null,"bitmaps","bitmaps",-1506736927,null)], null);
}));

(loom.alg_generic.Ancestry.cljs$lang$type = true);

(loom.alg_generic.Ancestry.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"loom.alg-generic/Ancestry",null,(1),null));
}));

(loom.alg_generic.Ancestry.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write.call(null,writer__4506__auto__,"loom.alg-generic/Ancestry");
}));

/**
 * Positional factory function for loom.alg-generic/Ancestry.
 */
loom.alg_generic.__GT_Ancestry = (function loom$alg_generic$__GT_Ancestry(node__GT_idx,idx__GT_node,bitmaps){
return (new loom.alg_generic.Ancestry(node__GT_idx,idx__GT_node,bitmaps,null,null,null));
});

/**
 * Factory function for loom.alg-generic/Ancestry, taking a map of keywords to field values.
 */
loom.alg_generic.map__GT_Ancestry = (function loom$alg_generic$map__GT_Ancestry(G__20608){
var extmap__4501__auto__ = (function (){var G__20618 = cljs.core.dissoc.call(null,G__20608,new cljs.core.Keyword(null,"node->idx","node->idx",152705227),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
if(cljs.core.record_QMARK_.call(null,G__20608)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__20618);
} else {
return G__20618;
}
})();
return (new loom.alg_generic.Ancestry(new cljs.core.Keyword(null,"node->idx","node->idx",152705227).cljs$core$IFn$_invoke$arity$1(G__20608),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175).cljs$core$IFn$_invoke$arity$1(G__20608),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842).cljs$core$IFn$_invoke$arity$1(G__20608),null,cljs.core.not_empty.call(null,extmap__4501__auto__),null));
});

/**
 * Create a new, empty Ancestry cache.
 */
loom.alg_generic.ancestry_new = (function loom$alg_generic$ancestry_new(){
return loom.alg_generic.__GT_Ancestry.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentVector.EMPTY);
});
/**
 * Finds if a 'node is contained in the 'ancestry cache.
 */
loom.alg_generic.ancestry_contains_QMARK_ = (function loom$alg_generic$ancestry_contains_QMARK_(ancestry,node){
return cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"node->idx","node->idx",152705227).cljs$core$IFn$_invoke$arity$1(ancestry),node);
});
/**
 * Adds a 'node and its 'parents associations to the 'ancestry cache.
 */
loom.alg_generic.ancestry_add = (function loom$alg_generic$ancestry_add(var_args){
var args__4824__auto__ = [];
var len__4818__auto___20625 = arguments.length;
var i__4819__auto___20626 = (0);
while(true){
if((i__4819__auto___20626 < len__4818__auto___20625)){
args__4824__auto__.push((arguments[i__4819__auto___20626]));

var G__20627 = (i__4819__auto___20626 + (1));
i__4819__auto___20626 = G__20627;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.ancestry_add.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(loom.alg_generic.ancestry_add.cljs$core$IFn$_invoke$arity$variadic = (function (ancestry,node,parents){
if(loom.alg_generic.ancestry_contains_QMARK_.call(null,ancestry,node)){
return ancestry;
} else {
var map__20624 = ancestry;
var map__20624__$1 = cljs.core.__destructure_map.call(null,map__20624);
var node__GT_idx = cljs.core.get.call(null,map__20624__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var idx__GT_node = cljs.core.get.call(null,map__20624__$1,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175));
var bitmaps = cljs.core.get.call(null,map__20624__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
var nid = cljs.core.count.call(null,node__GT_idx);
var node__GT_idx__$1 = cljs.core.assoc.call(null,node__GT_idx,node,nid);
var idx__GT_node__$1 = cljs.core.assoc.call(null,idx__GT_node,nid,node);
var pidxs = cljs.core.map.call(null,node__GT_idx__$1,parents);
var new_bitmap = ((cljs.core.empty_QMARK_.call(null,pidxs))?loom.alg_generic.bm_new.call(null):cljs.core.apply.call(null,loom.alg_generic.bm_or,cljs.core.map.call(null,bitmaps,pidxs)));
var new_bitmap__$1 = cljs.core.reduce.call(null,loom.alg_generic.bm_set,new_bitmap,pidxs);
var bitmaps__$1 = cljs.core.conj.call(null,bitmaps,new_bitmap__$1);
return loom.alg_generic.__GT_Ancestry.call(null,node__GT_idx__$1,idx__GT_node__$1,bitmaps__$1);
}
}));

(loom.alg_generic.ancestry_add.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(loom.alg_generic.ancestry_add.cljs$lang$applyTo = (function (seq20621){
var G__20622 = cljs.core.first.call(null,seq20621);
var seq20621__$1 = cljs.core.next.call(null,seq20621);
var G__20623 = cljs.core.first.call(null,seq20621__$1);
var seq20621__$2 = cljs.core.next.call(null,seq20621__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20622,G__20623,seq20621__$2);
}));

/**
 * Finds if the 'parenter node is an ancestor of 'childer node for the given
 *   'ancestry cache.
 */
loom.alg_generic.ancestor_QMARK_ = (function loom$alg_generic$ancestor_QMARK_(ancestry,childer,parenter){
var map__20628 = ancestry;
var map__20628__$1 = cljs.core.__destructure_map.call(null,map__20628);
var node__GT_idx = cljs.core.get.call(null,map__20628__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var bitmaps = cljs.core.get.call(null,map__20628__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
var cidx = node__GT_idx.call(null,childer);
var pidx = node__GT_idx.call(null,parenter);
return cljs.core.boolean$.call(null,(cljs.core.truth_((function (){var and__4210__auto__ = cidx;
if(cljs.core.truth_(and__4210__auto__)){
return pidx;
} else {
return and__4210__auto__;
}
})())?loom.alg_generic.bm_get.call(null,cljs.core.get.call(null,bitmaps,cidx),pidx):null));
});
/**
 * Returns all of the ancestors of 'child node.
 */
loom.alg_generic.ancestors = (function loom$alg_generic$ancestors(ancestry,child){
var map__20629 = ancestry;
var map__20629__$1 = cljs.core.__destructure_map.call(null,map__20629);
var node__GT_idx = cljs.core.get.call(null,map__20629__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var idx__GT_node = cljs.core.get.call(null,map__20629__$1,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175));
var bitmaps = cljs.core.get.call(null,map__20629__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
var cidx = node__GT_idx.call(null,child);
return cljs.core.map.call(null,idx__GT_node,loom.alg_generic.bm_get_indicies.call(null,cljs.core.get.call(null,bitmaps,cidx)));
});
/**
 * Returns all of the nodes in an 'ancestry.
 */
loom.alg_generic.ancestry_nodes = (function loom$alg_generic$ancestry_nodes(ancestry){
return cljs.core.keys.call(null,new cljs.core.Keyword(null,"node->idx","node->idx",152705227).cljs$core$IFn$_invoke$arity$1(ancestry));
});

//# sourceMappingURL=alg_generic.js.map
