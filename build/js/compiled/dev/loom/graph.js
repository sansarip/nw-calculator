// Compiled by ClojureScript 1.10.879 {:optimizations :none}
goog.provide('loom.graph');
goog.require('cljs.core');
goog.require('loom.alg_generic');

/**
 * @interface
 */
loom.graph.Graph = function(){};

var loom$graph$Graph$nodes$dyn_20632 = (function (g){
var x__4509__auto__ = (((g == null))?null:g);
var m__4510__auto__ = (loom.graph.nodes[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return m__4510__auto__.call(null,g);
} else {
var m__4508__auto__ = (loom.graph.nodes["_"]);
if((!((m__4508__auto__ == null)))){
return m__4508__auto__.call(null,g);
} else {
throw cljs.core.missing_protocol.call(null,"Graph.nodes",g);
}
}
});
/**
 * Returns a collection of the nodes in graph g
 */
loom.graph.nodes = (function loom$graph$nodes(g){
if((((!((g == null)))) && ((!((g.loom$graph$Graph$nodes$arity$1 == null)))))){
return g.loom$graph$Graph$nodes$arity$1(g);
} else {
return loom$graph$Graph$nodes$dyn_20632.call(null,g);
}
});

var loom$graph$Graph$edges$dyn_20633 = (function (g){
var x__4509__auto__ = (((g == null))?null:g);
var m__4510__auto__ = (loom.graph.edges[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return m__4510__auto__.call(null,g);
} else {
var m__4508__auto__ = (loom.graph.edges["_"]);
if((!((m__4508__auto__ == null)))){
return m__4508__auto__.call(null,g);
} else {
throw cljs.core.missing_protocol.call(null,"Graph.edges",g);
}
}
});
/**
 * Edges in g. May return each edge twice in an undirected graph
 */
loom.graph.edges = (function loom$graph$edges(g){
if((((!((g == null)))) && ((!((g.loom$graph$Graph$edges$arity$1 == null)))))){
return g.loom$graph$Graph$edges$arity$1(g);
} else {
return loom$graph$Graph$edges$dyn_20633.call(null,g);
}
});

var loom$graph$Graph$has_node_QMARK_$dyn_20634 = (function (g,node){
var x__4509__auto__ = (((g == null))?null:g);
var m__4510__auto__ = (loom.graph.has_node_QMARK_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return m__4510__auto__.call(null,g,node);
} else {
var m__4508__auto__ = (loom.graph.has_node_QMARK_["_"]);
if((!((m__4508__auto__ == null)))){
return m__4508__auto__.call(null,g,node);
} else {
throw cljs.core.missing_protocol.call(null,"Graph.has-node?",g);
}
}
});
/**
 * Returns true when node is in g
 */
loom.graph.has_node_QMARK_ = (function loom$graph$has_node_QMARK_(g,node){
if((((!((g == null)))) && ((!((g.loom$graph$Graph$has_node_QMARK_$arity$2 == null)))))){
return g.loom$graph$Graph$has_node_QMARK_$arity$2(g,node);
} else {
return loom$graph$Graph$has_node_QMARK_$dyn_20634.call(null,g,node);
}
});

var loom$graph$Graph$has_edge_QMARK_$dyn_20635 = (function (g,n1,n2){
var x__4509__auto__ = (((g == null))?null:g);
var m__4510__auto__ = (loom.graph.has_edge_QMARK_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return m__4510__auto__.call(null,g,n1,n2);
} else {
var m__4508__auto__ = (loom.graph.has_edge_QMARK_["_"]);
if((!((m__4508__auto__ == null)))){
return m__4508__auto__.call(null,g,n1,n2);
} else {
throw cljs.core.missing_protocol.call(null,"Graph.has-edge?",g);
}
}
});
/**
 * Returns true when edge [n1 n2] is in g
 */
loom.graph.has_edge_QMARK_ = (function loom$graph$has_edge_QMARK_(g,n1,n2){
if((((!((g == null)))) && ((!((g.loom$graph$Graph$has_edge_QMARK_$arity$3 == null)))))){
return g.loom$graph$Graph$has_edge_QMARK_$arity$3(g,n1,n2);
} else {
return loom$graph$Graph$has_edge_QMARK_$dyn_20635.call(null,g,n1,n2);
}
});

var loom$graph$Graph$successors_STAR_$dyn_20636 = (function (g,node){
var x__4509__auto__ = (((g == null))?null:g);
var m__4510__auto__ = (loom.graph.successors_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return m__4510__auto__.call(null,g,node);
} else {
var m__4508__auto__ = (loom.graph.successors_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return m__4508__auto__.call(null,g,node);
} else {
throw cljs.core.missing_protocol.call(null,"Graph.successors*",g);
}
}
});
/**
 * Returns direct successors of node
 */
loom.graph.successors_STAR_ = (function loom$graph$successors_STAR_(g,node){
if((((!((g == null)))) && ((!((g.loom$graph$Graph$successors_STAR_$arity$2 == null)))))){
return g.loom$graph$Graph$successors_STAR_$arity$2(g,node);
} else {
return loom$graph$Graph$successors_STAR_$dyn_20636.call(null,g,node);
}
});

var loom$graph$Graph$out_degree$dyn_20637 = (function (g,node){
var x__4509__auto__ = (((g == null))?null:g);
var m__4510__auto__ = (loom.graph.out_degree[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return m__4510__auto__.call(null,g,node);
} else {
var m__4508__auto__ = (loom.graph.out_degree["_"]);
if((!((m__4508__auto__ == null)))){
return m__4508__auto__.call(null,g,node);
} else {
throw cljs.core.missing_protocol.call(null,"Graph.out-degree",g);
}
}
});
/**
 * Returns the number of outgoing edges of node
 */
loom.graph.out_degree = (function loom$graph$out_degree(g,node){
if((((!((g == null)))) && ((!((g.loom$graph$Graph$out_degree$arity$2 == null)))))){
return g.loom$graph$Graph$out_degree$arity$2(g,node);
} else {
return loom$graph$Graph$out_degree$dyn_20637.call(null,g,node);
}
});

var loom$graph$Graph$out_edges$dyn_20638 = (function (g,node){
var x__4509__auto__ = (((g == null))?null:g);
var m__4510__auto__ = (loom.graph.out_edges[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return m__4510__auto__.call(null,g,node);
} else {
var m__4508__auto__ = (loom.graph.out_edges["_"]);
if((!((m__4508__auto__ == null)))){
return m__4508__auto__.call(null,g,node);
} else {
throw cljs.core.missing_protocol.call(null,"Graph.out-edges",g);
}
}
});
/**
 * Returns all the outgoing edges of node
 */
loom.graph.out_edges = (function loom$graph$out_edges(g,node){
if((((!((g == null)))) && ((!((g.loom$graph$Graph$out_edges$arity$2 == null)))))){
return g.loom$graph$Graph$out_edges$arity$2(g,node);
} else {
return loom$graph$Graph$out_edges$dyn_20638.call(null,g,node);
}
});


/**
 * @interface
 */
loom.graph.Digraph = function(){};

var loom$graph$Digraph$predecessors_STAR_$dyn_20639 = (function (g,node){
var x__4509__auto__ = (((g == null))?null:g);
var m__4510__auto__ = (loom.graph.predecessors_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return m__4510__auto__.call(null,g,node);
} else {
var m__4508__auto__ = (loom.graph.predecessors_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return m__4508__auto__.call(null,g,node);
} else {
throw cljs.core.missing_protocol.call(null,"Digraph.predecessors*",g);
}
}
});
/**
 * Returns direct predecessors of node
 */
loom.graph.predecessors_STAR_ = (function loom$graph$predecessors_STAR_(g,node){
if((((!((g == null)))) && ((!((g.loom$graph$Digraph$predecessors_STAR_$arity$2 == null)))))){
return g.loom$graph$Digraph$predecessors_STAR_$arity$2(g,node);
} else {
return loom$graph$Digraph$predecessors_STAR_$dyn_20639.call(null,g,node);
}
});

var loom$graph$Digraph$in_degree$dyn_20640 = (function (g,node){
var x__4509__auto__ = (((g == null))?null:g);
var m__4510__auto__ = (loom.graph.in_degree[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return m__4510__auto__.call(null,g,node);
} else {
var m__4508__auto__ = (loom.graph.in_degree["_"]);
if((!((m__4508__auto__ == null)))){
return m__4508__auto__.call(null,g,node);
} else {
throw cljs.core.missing_protocol.call(null,"Digraph.in-degree",g);
}
}
});
/**
 * Returns the number of direct predecessors to node
 */
loom.graph.in_degree = (function loom$graph$in_degree(g,node){
if((((!((g == null)))) && ((!((g.loom$graph$Digraph$in_degree$arity$2 == null)))))){
return g.loom$graph$Digraph$in_degree$arity$2(g,node);
} else {
return loom$graph$Digraph$in_degree$dyn_20640.call(null,g,node);
}
});

var loom$graph$Digraph$in_edges$dyn_20641 = (function (g,node){
var x__4509__auto__ = (((g == null))?null:g);
var m__4510__auto__ = (loom.graph.in_edges[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return m__4510__auto__.call(null,g,node);
} else {
var m__4508__auto__ = (loom.graph.in_edges["_"]);
if((!((m__4508__auto__ == null)))){
return m__4508__auto__.call(null,g,node);
} else {
throw cljs.core.missing_protocol.call(null,"Digraph.in-edges",g);
}
}
});
/**
 * Returns all the incoming edges of node
 */
loom.graph.in_edges = (function loom$graph$in_edges(g,node){
if((((!((g == null)))) && ((!((g.loom$graph$Digraph$in_edges$arity$2 == null)))))){
return g.loom$graph$Digraph$in_edges$arity$2(g,node);
} else {
return loom$graph$Digraph$in_edges$dyn_20641.call(null,g,node);
}
});

var loom$graph$Digraph$transpose$dyn_20642 = (function (g){
var x__4509__auto__ = (((g == null))?null:g);
var m__4510__auto__ = (loom.graph.transpose[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return m__4510__auto__.call(null,g);
} else {
var m__4508__auto__ = (loom.graph.transpose["_"]);
if((!((m__4508__auto__ == null)))){
return m__4508__auto__.call(null,g);
} else {
throw cljs.core.missing_protocol.call(null,"Digraph.transpose",g);
}
}
});
/**
 * Returns a graph with all edges reversed
 */
loom.graph.transpose = (function loom$graph$transpose(g){
if((((!((g == null)))) && ((!((g.loom$graph$Digraph$transpose$arity$1 == null)))))){
return g.loom$graph$Digraph$transpose$arity$1(g);
} else {
return loom$graph$Digraph$transpose$dyn_20642.call(null,g);
}
});


/**
 * @interface
 */
loom.graph.WeightedGraph = function(){};

var loom$graph$WeightedGraph$weight_STAR_$dyn_20645 = (function() {
var G__20646 = null;
var G__20646__2 = (function (g,e){
var x__4509__auto__ = (((g == null))?null:g);
var m__4510__auto__ = (loom.graph.weight_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return m__4510__auto__.call(null,g,e);
} else {
var m__4508__auto__ = (loom.graph.weight_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return m__4508__auto__.call(null,g,e);
} else {
throw cljs.core.missing_protocol.call(null,"WeightedGraph.weight*",g);
}
}
});
var G__20646__3 = (function (g,n1,n2){
var x__4509__auto__ = (((g == null))?null:g);
var m__4510__auto__ = (loom.graph.weight_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return m__4510__auto__.call(null,g,n1,n2);
} else {
var m__4508__auto__ = (loom.graph.weight_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return m__4508__auto__.call(null,g,n1,n2);
} else {
throw cljs.core.missing_protocol.call(null,"WeightedGraph.weight*",g);
}
}
});
G__20646 = function(g,n1,n2){
switch(arguments.length){
case 2:
return G__20646__2.call(this,g,n1);
case 3:
return G__20646__3.call(this,g,n1,n2);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20646.cljs$core$IFn$_invoke$arity$2 = G__20646__2;
G__20646.cljs$core$IFn$_invoke$arity$3 = G__20646__3;
return G__20646;
})()
;
/**
 * Returns the weight of edge e or edge [n1 n2]
 */
loom.graph.weight_STAR_ = (function loom$graph$weight_STAR_(var_args){
var G__20644 = arguments.length;
switch (G__20644) {
case 2:
return loom.graph.weight_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return loom.graph.weight_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(loom.graph.weight_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (g,e){
if((((!((g == null)))) && ((!((g.loom$graph$WeightedGraph$weight_STAR_$arity$2 == null)))))){
return g.loom$graph$WeightedGraph$weight_STAR_$arity$2(g,e);
} else {
return loom$graph$WeightedGraph$weight_STAR_$dyn_20645.call(null,g,e);
}
}));

(loom.graph.weight_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (g,n1,n2){
if((((!((g == null)))) && ((!((g.loom$graph$WeightedGraph$weight_STAR_$arity$3 == null)))))){
return g.loom$graph$WeightedGraph$weight_STAR_$arity$3(g,n1,n2);
} else {
return loom$graph$WeightedGraph$weight_STAR_$dyn_20645.call(null,g,n1,n2);
}
}));

(loom.graph.weight_STAR_.cljs$lang$maxFixedArity = 3);



/**
 * @interface
 */
loom.graph.EditableGraph = function(){};

var loom$graph$EditableGraph$add_nodes_STAR_$dyn_20648 = (function (g,nodes){
var x__4509__auto__ = (((g == null))?null:g);
var m__4510__auto__ = (loom.graph.add_nodes_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return m__4510__auto__.call(null,g,nodes);
} else {
var m__4508__auto__ = (loom.graph.add_nodes_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return m__4508__auto__.call(null,g,nodes);
} else {
throw cljs.core.missing_protocol.call(null,"EditableGraph.add-nodes*",g);
}
}
});
/**
 * Add nodes to graph g. See add-nodes
 */
loom.graph.add_nodes_STAR_ = (function loom$graph$add_nodes_STAR_(g,nodes){
if((((!((g == null)))) && ((!((g.loom$graph$EditableGraph$add_nodes_STAR_$arity$2 == null)))))){
return g.loom$graph$EditableGraph$add_nodes_STAR_$arity$2(g,nodes);
} else {
return loom$graph$EditableGraph$add_nodes_STAR_$dyn_20648.call(null,g,nodes);
}
});

var loom$graph$EditableGraph$add_edges_STAR_$dyn_20649 = (function (g,edges){
var x__4509__auto__ = (((g == null))?null:g);
var m__4510__auto__ = (loom.graph.add_edges_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return m__4510__auto__.call(null,g,edges);
} else {
var m__4508__auto__ = (loom.graph.add_edges_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return m__4508__auto__.call(null,g,edges);
} else {
throw cljs.core.missing_protocol.call(null,"EditableGraph.add-edges*",g);
}
}
});
/**
 * Add edges to graph g. See add-edges
 */
loom.graph.add_edges_STAR_ = (function loom$graph$add_edges_STAR_(g,edges){
if((((!((g == null)))) && ((!((g.loom$graph$EditableGraph$add_edges_STAR_$arity$2 == null)))))){
return g.loom$graph$EditableGraph$add_edges_STAR_$arity$2(g,edges);
} else {
return loom$graph$EditableGraph$add_edges_STAR_$dyn_20649.call(null,g,edges);
}
});

var loom$graph$EditableGraph$remove_nodes_STAR_$dyn_20650 = (function (g,nodes){
var x__4509__auto__ = (((g == null))?null:g);
var m__4510__auto__ = (loom.graph.remove_nodes_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return m__4510__auto__.call(null,g,nodes);
} else {
var m__4508__auto__ = (loom.graph.remove_nodes_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return m__4508__auto__.call(null,g,nodes);
} else {
throw cljs.core.missing_protocol.call(null,"EditableGraph.remove-nodes*",g);
}
}
});
/**
 * Remove nodes from graph g. See remove-nodes
 */
loom.graph.remove_nodes_STAR_ = (function loom$graph$remove_nodes_STAR_(g,nodes){
if((((!((g == null)))) && ((!((g.loom$graph$EditableGraph$remove_nodes_STAR_$arity$2 == null)))))){
return g.loom$graph$EditableGraph$remove_nodes_STAR_$arity$2(g,nodes);
} else {
return loom$graph$EditableGraph$remove_nodes_STAR_$dyn_20650.call(null,g,nodes);
}
});

var loom$graph$EditableGraph$remove_edges_STAR_$dyn_20651 = (function (g,edges){
var x__4509__auto__ = (((g == null))?null:g);
var m__4510__auto__ = (loom.graph.remove_edges_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return m__4510__auto__.call(null,g,edges);
} else {
var m__4508__auto__ = (loom.graph.remove_edges_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return m__4508__auto__.call(null,g,edges);
} else {
throw cljs.core.missing_protocol.call(null,"EditableGraph.remove-edges*",g);
}
}
});
/**
 * Removes edges from graph g. See remove-edges
 */
loom.graph.remove_edges_STAR_ = (function loom$graph$remove_edges_STAR_(g,edges){
if((((!((g == null)))) && ((!((g.loom$graph$EditableGraph$remove_edges_STAR_$arity$2 == null)))))){
return g.loom$graph$EditableGraph$remove_edges_STAR_$arity$2(g,edges);
} else {
return loom$graph$EditableGraph$remove_edges_STAR_$dyn_20651.call(null,g,edges);
}
});

var loom$graph$EditableGraph$remove_all$dyn_20652 = (function (g){
var x__4509__auto__ = (((g == null))?null:g);
var m__4510__auto__ = (loom.graph.remove_all[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return m__4510__auto__.call(null,g);
} else {
var m__4508__auto__ = (loom.graph.remove_all["_"]);
if((!((m__4508__auto__ == null)))){
return m__4508__auto__.call(null,g);
} else {
throw cljs.core.missing_protocol.call(null,"EditableGraph.remove-all",g);
}
}
});
/**
 * Removes all nodes and edges from graph g
 */
loom.graph.remove_all = (function loom$graph$remove_all(g){
if((((!((g == null)))) && ((!((g.loom$graph$EditableGraph$remove_all$arity$1 == null)))))){
return g.loom$graph$EditableGraph$remove_all$arity$1(g);
} else {
return loom$graph$EditableGraph$remove_all$dyn_20652.call(null,g);
}
});


/**
 * @interface
 */
loom.graph.Edge = function(){};

var loom$graph$Edge$src$dyn_20653 = (function (edge){
var x__4509__auto__ = (((edge == null))?null:edge);
var m__4510__auto__ = (loom.graph.src[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return m__4510__auto__.call(null,edge);
} else {
var m__4508__auto__ = (loom.graph.src["_"]);
if((!((m__4508__auto__ == null)))){
return m__4508__auto__.call(null,edge);
} else {
throw cljs.core.missing_protocol.call(null,"Edge.src",edge);
}
}
});
/**
 * Returns the source node of the edge
 */
loom.graph.src = (function loom$graph$src(edge){
if((((!((edge == null)))) && ((!((edge.loom$graph$Edge$src$arity$1 == null)))))){
return edge.loom$graph$Edge$src$arity$1(edge);
} else {
return loom$graph$Edge$src$dyn_20653.call(null,edge);
}
});

var loom$graph$Edge$dest$dyn_20654 = (function (edge){
var x__4509__auto__ = (((edge == null))?null:edge);
var m__4510__auto__ = (loom.graph.dest[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return m__4510__auto__.call(null,edge);
} else {
var m__4508__auto__ = (loom.graph.dest["_"]);
if((!((m__4508__auto__ == null)))){
return m__4508__auto__.call(null,edge);
} else {
throw cljs.core.missing_protocol.call(null,"Edge.dest",edge);
}
}
});
/**
 * Returns the dest node of the edge
 */
loom.graph.dest = (function loom$graph$dest(edge){
if((((!((edge == null)))) && ((!((edge.loom$graph$Edge$dest$arity$1 == null)))))){
return edge.loom$graph$Edge$dest$arity$1(edge);
} else {
return loom$graph$Edge$dest$dyn_20654.call(null,edge);
}
});

(cljs.core.PersistentVector.prototype.loom$graph$Edge$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.loom$graph$Edge$src$arity$1 = (function (edge){
var edge__$1 = this;
return cljs.core.get.call(null,edge__$1,(0));
}));

(cljs.core.PersistentVector.prototype.loom$graph$Edge$dest$arity$1 = (function (edge){
var edge__$1 = this;
return cljs.core.get.call(null,edge__$1,(1));
}));
(cljs.core.PersistentArrayMap.prototype.loom$graph$Edge$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.loom$graph$Edge$src$arity$1 = (function (edge){
var edge__$1 = this;
return new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(edge__$1);
}));

(cljs.core.PersistentArrayMap.prototype.loom$graph$Edge$dest$arity$1 = (function (edge){
var edge__$1 = this;
return new cljs.core.Keyword(null,"dest","dest",-34569477).cljs$core$IFn$_invoke$arity$1(edge__$1);
}));

(cljs.core.PersistentHashMap.prototype.loom$graph$Edge$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashMap.prototype.loom$graph$Edge$src$arity$1 = (function (edge){
var edge__$1 = this;
return new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(edge__$1);
}));

(cljs.core.PersistentHashMap.prototype.loom$graph$Edge$dest$arity$1 = (function (edge){
var edge__$1 = this;
return new cljs.core.Keyword(null,"dest","dest",-34569477).cljs$core$IFn$_invoke$arity$1(edge__$1);
}));

(cljs.core.PersistentTreeMap.prototype.loom$graph$Edge$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentTreeMap.prototype.loom$graph$Edge$src$arity$1 = (function (edge){
var edge__$1 = this;
return new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(edge__$1);
}));

(cljs.core.PersistentTreeMap.prototype.loom$graph$Edge$dest$arity$1 = (function (edge){
var edge__$1 = this;
return new cljs.core.Keyword(null,"dest","dest",-34569477).cljs$core$IFn$_invoke$arity$1(edge__$1);
}));
/**
 * Returns direct successors of node
 */
loom.graph.successors = (function loom$graph$successors(var_args){
var G__20657 = arguments.length;
switch (G__20657) {
case 1:
return loom.graph.successors.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return loom.graph.successors.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(loom.graph.successors.cljs$core$IFn$_invoke$arity$1 = (function (g){
return (function (p1__20655_SHARP_){
return loom.graph.successors.call(null,g,p1__20655_SHARP_);
});
}));

(loom.graph.successors.cljs$core$IFn$_invoke$arity$2 = (function (g,node){
return loom.graph.successors_STAR_.call(null,g,node);
}));

(loom.graph.successors.cljs$lang$maxFixedArity = 2);

/**
 * Returns direct predecessors of node
 */
loom.graph.predecessors = (function loom$graph$predecessors(var_args){
var G__20661 = arguments.length;
switch (G__20661) {
case 1:
return loom.graph.predecessors.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return loom.graph.predecessors.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(loom.graph.predecessors.cljs$core$IFn$_invoke$arity$1 = (function (g){
return (function (p1__20659_SHARP_){
return loom.graph.predecessors.call(null,g,p1__20659_SHARP_);
});
}));

(loom.graph.predecessors.cljs$core$IFn$_invoke$arity$2 = (function (g,node){
return loom.graph.predecessors_STAR_.call(null,g,node);
}));

(loom.graph.predecessors.cljs$lang$maxFixedArity = 2);

/**
 * Returns the weight of edge e or edge [n1 n2]
 */
loom.graph.weight = (function loom$graph$weight(var_args){
var G__20664 = arguments.length;
switch (G__20664) {
case 1:
return loom.graph.weight.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return loom.graph.weight.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return loom.graph.weight.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(loom.graph.weight.cljs$core$IFn$_invoke$arity$1 = (function (g){
return cljs.core.partial.call(null,loom.graph.weight,g);
}));

(loom.graph.weight.cljs$core$IFn$_invoke$arity$2 = (function (g,e){
return loom.graph.weight_STAR_.call(null,g,loom.graph.src.call(null,e),loom.graph.dest.call(null,e));
}));

(loom.graph.weight.cljs$core$IFn$_invoke$arity$3 = (function (g,n1,n2){
return loom.graph.weight_STAR_.call(null,g,n1,n2);
}));

(loom.graph.weight.cljs$lang$maxFixedArity = 3);

/**
 * Adds nodes to graph g. Nodes can be any type of object
 */
loom.graph.add_nodes = (function loom$graph$add_nodes(var_args){
var args__4824__auto__ = [];
var len__4818__auto___20668 = arguments.length;
var i__4819__auto___20669 = (0);
while(true){
if((i__4819__auto___20669 < len__4818__auto___20668)){
args__4824__auto__.push((arguments[i__4819__auto___20669]));

var G__20670 = (i__4819__auto___20669 + (1));
i__4819__auto___20669 = G__20670;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return loom.graph.add_nodes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(loom.graph.add_nodes.cljs$core$IFn$_invoke$arity$variadic = (function (g,nodes){
return loom.graph.add_nodes_STAR_.call(null,g,nodes);
}));

(loom.graph.add_nodes.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(loom.graph.add_nodes.cljs$lang$applyTo = (function (seq20666){
var G__20667 = cljs.core.first.call(null,seq20666);
var seq20666__$1 = cljs.core.next.call(null,seq20666);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20667,seq20666__$1);
}));

/**
 * Adds edges to graph g. For unweighted graphs, edges take the form [n1 n2].
 *   For weighted graphs, edges take the form [n1 n2 weight] or [n1 n2], the
 *   latter defaulting to a weight of 1
 */
loom.graph.add_edges = (function loom$graph$add_edges(var_args){
var args__4824__auto__ = [];
var len__4818__auto___20673 = arguments.length;
var i__4819__auto___20674 = (0);
while(true){
if((i__4819__auto___20674 < len__4818__auto___20673)){
args__4824__auto__.push((arguments[i__4819__auto___20674]));

var G__20675 = (i__4819__auto___20674 + (1));
i__4819__auto___20674 = G__20675;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return loom.graph.add_edges.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(loom.graph.add_edges.cljs$core$IFn$_invoke$arity$variadic = (function (g,edges){
return loom.graph.add_edges_STAR_.call(null,g,edges);
}));

(loom.graph.add_edges.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(loom.graph.add_edges.cljs$lang$applyTo = (function (seq20671){
var G__20672 = cljs.core.first.call(null,seq20671);
var seq20671__$1 = cljs.core.next.call(null,seq20671);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20672,seq20671__$1);
}));

/**
 * Removes nodes from graph g
 */
loom.graph.remove_nodes = (function loom$graph$remove_nodes(var_args){
var args__4824__auto__ = [];
var len__4818__auto___20678 = arguments.length;
var i__4819__auto___20679 = (0);
while(true){
if((i__4819__auto___20679 < len__4818__auto___20678)){
args__4824__auto__.push((arguments[i__4819__auto___20679]));

var G__20680 = (i__4819__auto___20679 + (1));
i__4819__auto___20679 = G__20680;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return loom.graph.remove_nodes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(loom.graph.remove_nodes.cljs$core$IFn$_invoke$arity$variadic = (function (g,nodes){
return loom.graph.remove_nodes_STAR_.call(null,g,nodes);
}));

(loom.graph.remove_nodes.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(loom.graph.remove_nodes.cljs$lang$applyTo = (function (seq20676){
var G__20677 = cljs.core.first.call(null,seq20676);
var seq20676__$1 = cljs.core.next.call(null,seq20676);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20677,seq20676__$1);
}));

/**
 * Removes edges from graph g. Do not include weights
 */
loom.graph.remove_edges = (function loom$graph$remove_edges(var_args){
var args__4824__auto__ = [];
var len__4818__auto___20683 = arguments.length;
var i__4819__auto___20684 = (0);
while(true){
if((i__4819__auto___20684 < len__4818__auto___20683)){
args__4824__auto__.push((arguments[i__4819__auto___20684]));

var G__20685 = (i__4819__auto___20684 + (1));
i__4819__auto___20684 = G__20685;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return loom.graph.remove_edges.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(loom.graph.remove_edges.cljs$core$IFn$_invoke$arity$variadic = (function (g,edges){
return loom.graph.remove_edges_STAR_.call(null,g,edges);
}));

(loom.graph.remove_edges.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(loom.graph.remove_edges.cljs$lang$applyTo = (function (seq20681){
var G__20682 = cljs.core.first.call(null,seq20681);
var seq20681__$1 = cljs.core.next.call(null,seq20681);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20682,seq20681__$1);
}));


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
loom.graph.BasicEditableGraph = (function (nodeset,adj,__meta,__extmap,__hash){
this.nodeset = nodeset;
this.adj = adj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(loom.graph.BasicEditableGraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(loom.graph.BasicEditableGraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k20687,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__20691 = k20687;
var G__20691__$1 = (((G__20691 instanceof cljs.core.Keyword))?G__20691.fqn:null);
switch (G__20691__$1) {
case "nodeset":
return self__.nodeset;

break;
case "adj":
return self__.adj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k20687,else__4464__auto__);

}
}));

(loom.graph.BasicEditableGraph.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4484__auto__,p__20692){
var vec__20693 = p__20692;
var k__4485__auto__ = cljs.core.nth.call(null,vec__20693,(0),null);
var v__4486__auto__ = cljs.core.nth.call(null,vec__20693,(1),null);
return f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__);
}),init__4483__auto__,this__4481__auto____$1);
}));

(loom.graph.BasicEditableGraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4477__auto__,pr_pair__4479__auto__,"#loom.graph.BasicEditableGraph{",", ","}",opts__4478__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj],null))], null),self__.__extmap));
}));

(loom.graph.BasicEditableGraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20686){
var self__ = this;
var G__20686__$1 = this;
return (new cljs.core.RecordIter((0),G__20686__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(loom.graph.BasicEditableGraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(loom.graph.BasicEditableGraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new loom.graph.BasicEditableGraph(self__.nodeset,self__.adj,self__.__meta,self__.__extmap,self__.__hash));
}));

(loom.graph.BasicEditableGraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
}));

(loom.graph.BasicEditableGraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (446662859 ^ cljs.core.hash_unordered_coll.call(null,coll__4458__auto__));
}).call(null,this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(loom.graph.BasicEditableGraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this20688,other20689){
var self__ = this;
var this20688__$1 = this;
return (((!((other20689 == null)))) && ((((this20688__$1.constructor === other20689.constructor)) && (((cljs.core._EQ_.call(null,this20688__$1.nodeset,other20689.nodeset)) && (((cljs.core._EQ_.call(null,this20688__$1.adj,other20689.adj)) && (cljs.core._EQ_.call(null,this20688__$1.__extmap,other20689.__extmap)))))))));
}));

(loom.graph.BasicEditableGraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),null,new cljs.core.Keyword(null,"adj","adj",-1344630196),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new loom.graph.BasicEditableGraph(self__.nodeset,self__.adj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4472__auto__)),null));
}
}));

(loom.graph.BasicEditableGraph.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k20687){
var self__ = this;
var this__4468__auto____$1 = this;
var G__20696 = k20687;
var G__20696__$1 = (((G__20696 instanceof cljs.core.Keyword))?G__20696.fqn:null);
switch (G__20696__$1) {
case "nodeset":
case "adj":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k20687);

}
}));

(loom.graph.BasicEditableGraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__20686){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__20697 = cljs.core.keyword_identical_QMARK_;
var expr__20698 = k__4470__auto__;
if(cljs.core.truth_(pred__20697.call(null,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),expr__20698))){
return (new loom.graph.BasicEditableGraph(G__20686,self__.adj,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20697.call(null,new cljs.core.Keyword(null,"adj","adj",-1344630196),expr__20698))){
return (new loom.graph.BasicEditableGraph(self__.nodeset,G__20686,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.BasicEditableGraph(self__.nodeset,self__.adj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4470__auto__,G__20686),null));
}
}
}));

(loom.graph.BasicEditableGraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj,null))], null),self__.__extmap));
}));

(loom.graph.BasicEditableGraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__20686){
var self__ = this;
var this__4460__auto____$1 = this;
return (new loom.graph.BasicEditableGraph(self__.nodeset,self__.adj,G__20686,self__.__extmap,self__.__hash));
}));

(loom.graph.BasicEditableGraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4467__auto__,(0)),cljs.core._nth.call(null,entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(loom.graph.BasicEditableGraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nodeset","nodeset",-1958444430,null),new cljs.core.Symbol(null,"adj","adj",295901331,null)], null);
}));

(loom.graph.BasicEditableGraph.cljs$lang$type = true);

(loom.graph.BasicEditableGraph.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"loom.graph/BasicEditableGraph",null,(1),null));
}));

(loom.graph.BasicEditableGraph.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write.call(null,writer__4506__auto__,"loom.graph/BasicEditableGraph");
}));

/**
 * Positional factory function for loom.graph/BasicEditableGraph.
 */
loom.graph.__GT_BasicEditableGraph = (function loom$graph$__GT_BasicEditableGraph(nodeset,adj){
return (new loom.graph.BasicEditableGraph(nodeset,adj,null,null,null));
});

/**
 * Factory function for loom.graph/BasicEditableGraph, taking a map of keywords to field values.
 */
loom.graph.map__GT_BasicEditableGraph = (function loom$graph$map__GT_BasicEditableGraph(G__20690){
var extmap__4501__auto__ = (function (){var G__20700 = cljs.core.dissoc.call(null,G__20690,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196));
if(cljs.core.record_QMARK_.call(null,G__20690)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__20700);
} else {
return G__20700;
}
})();
return (new loom.graph.BasicEditableGraph(new cljs.core.Keyword(null,"nodeset","nodeset",695991339).cljs$core$IFn$_invoke$arity$1(G__20690),new cljs.core.Keyword(null,"adj","adj",-1344630196).cljs$core$IFn$_invoke$arity$1(G__20690),null,cljs.core.not_empty.call(null,extmap__4501__auto__),null));
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
loom.graph.BasicEditableDigraph = (function (nodeset,adj,in$,__meta,__extmap,__hash){
this.nodeset = nodeset;
this.adj = adj;
this.in$ = in$;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(loom.graph.BasicEditableDigraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(loom.graph.BasicEditableDigraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k20704,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__20708 = k20704;
var G__20708__$1 = (((G__20708 instanceof cljs.core.Keyword))?G__20708.fqn:null);
switch (G__20708__$1) {
case "nodeset":
return self__.nodeset;

break;
case "adj":
return self__.adj;

break;
case "in":
return self__.in$;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k20704,else__4464__auto__);

}
}));

(loom.graph.BasicEditableDigraph.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4484__auto__,p__20709){
var vec__20710 = p__20709;
var k__4485__auto__ = cljs.core.nth.call(null,vec__20710,(0),null);
var v__4486__auto__ = cljs.core.nth.call(null,vec__20710,(1),null);
return f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__);
}),init__4483__auto__,this__4481__auto____$1);
}));

(loom.graph.BasicEditableDigraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4477__auto__,pr_pair__4479__auto__,"#loom.graph.BasicEditableDigraph{",", ","}",opts__4478__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$],null))], null),self__.__extmap));
}));

(loom.graph.BasicEditableDigraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20703){
var self__ = this;
var G__20703__$1 = this;
return (new cljs.core.RecordIter((0),G__20703__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196),new cljs.core.Keyword(null,"in","in",-1531184865)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(loom.graph.BasicEditableDigraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(loom.graph.BasicEditableDigraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new loom.graph.BasicEditableDigraph(self__.nodeset,self__.adj,self__.in$,self__.__meta,self__.__extmap,self__.__hash));
}));

(loom.graph.BasicEditableDigraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
}));

(loom.graph.BasicEditableDigraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (324724442 ^ cljs.core.hash_unordered_coll.call(null,coll__4458__auto__));
}).call(null,this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(loom.graph.BasicEditableDigraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this20705,other20706){
var self__ = this;
var this20705__$1 = this;
return (((!((other20706 == null)))) && ((((this20705__$1.constructor === other20706.constructor)) && (((cljs.core._EQ_.call(null,this20705__$1.nodeset,other20706.nodeset)) && (((cljs.core._EQ_.call(null,this20705__$1.adj,other20706.adj)) && (((cljs.core._EQ_.call(null,this20705__$1.in,other20706.in)) && (cljs.core._EQ_.call(null,this20705__$1.__extmap,other20706.__extmap)))))))))));
}));

(loom.graph.BasicEditableDigraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),null,new cljs.core.Keyword(null,"adj","adj",-1344630196),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new loom.graph.BasicEditableDigraph(self__.nodeset,self__.adj,self__.in$,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4472__auto__)),null));
}
}));

(loom.graph.BasicEditableDigraph.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k20704){
var self__ = this;
var this__4468__auto____$1 = this;
var G__20713 = k20704;
var G__20713__$1 = (((G__20713 instanceof cljs.core.Keyword))?G__20713.fqn:null);
switch (G__20713__$1) {
case "nodeset":
case "adj":
case "in":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k20704);

}
}));

(loom.graph.BasicEditableDigraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__20703){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__20714 = cljs.core.keyword_identical_QMARK_;
var expr__20715 = k__4470__auto__;
if(cljs.core.truth_(pred__20714.call(null,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),expr__20715))){
return (new loom.graph.BasicEditableDigraph(G__20703,self__.adj,self__.in$,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20714.call(null,new cljs.core.Keyword(null,"adj","adj",-1344630196),expr__20715))){
return (new loom.graph.BasicEditableDigraph(self__.nodeset,G__20703,self__.in$,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20714.call(null,new cljs.core.Keyword(null,"in","in",-1531184865),expr__20715))){
return (new loom.graph.BasicEditableDigraph(self__.nodeset,self__.adj,G__20703,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.BasicEditableDigraph(self__.nodeset,self__.adj,self__.in$,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4470__auto__,G__20703),null));
}
}
}
}));

(loom.graph.BasicEditableDigraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$,null))], null),self__.__extmap));
}));

(loom.graph.BasicEditableDigraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__20703){
var self__ = this;
var this__4460__auto____$1 = this;
return (new loom.graph.BasicEditableDigraph(self__.nodeset,self__.adj,self__.in$,G__20703,self__.__extmap,self__.__hash));
}));

(loom.graph.BasicEditableDigraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4467__auto__,(0)),cljs.core._nth.call(null,entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(loom.graph.BasicEditableDigraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nodeset","nodeset",-1958444430,null),new cljs.core.Symbol(null,"adj","adj",295901331,null),new cljs.core.Symbol(null,"in","in",109346662,null)], null);
}));

(loom.graph.BasicEditableDigraph.cljs$lang$type = true);

(loom.graph.BasicEditableDigraph.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"loom.graph/BasicEditableDigraph",null,(1),null));
}));

(loom.graph.BasicEditableDigraph.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write.call(null,writer__4506__auto__,"loom.graph/BasicEditableDigraph");
}));

/**
 * Positional factory function for loom.graph/BasicEditableDigraph.
 */
loom.graph.__GT_BasicEditableDigraph = (function loom$graph$__GT_BasicEditableDigraph(nodeset,adj,in$){
return (new loom.graph.BasicEditableDigraph(nodeset,adj,in$,null,null,null));
});

/**
 * Factory function for loom.graph/BasicEditableDigraph, taking a map of keywords to field values.
 */
loom.graph.map__GT_BasicEditableDigraph = (function loom$graph$map__GT_BasicEditableDigraph(G__20707){
var extmap__4501__auto__ = (function (){var G__20717 = cljs.core.dissoc.call(null,G__20707,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196),new cljs.core.Keyword(null,"in","in",-1531184865));
if(cljs.core.record_QMARK_.call(null,G__20707)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__20717);
} else {
return G__20717;
}
})();
return (new loom.graph.BasicEditableDigraph(new cljs.core.Keyword(null,"nodeset","nodeset",695991339).cljs$core$IFn$_invoke$arity$1(G__20707),new cljs.core.Keyword(null,"adj","adj",-1344630196).cljs$core$IFn$_invoke$arity$1(G__20707),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(G__20707),null,cljs.core.not_empty.call(null,extmap__4501__auto__),null));
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
loom.graph.BasicEditableWeightedGraph = (function (nodeset,adj,__meta,__extmap,__hash){
this.nodeset = nodeset;
this.adj = adj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k20721,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__20725 = k20721;
var G__20725__$1 = (((G__20725 instanceof cljs.core.Keyword))?G__20725.fqn:null);
switch (G__20725__$1) {
case "nodeset":
return self__.nodeset;

break;
case "adj":
return self__.adj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k20721,else__4464__auto__);

}
}));

(loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4484__auto__,p__20726){
var vec__20727 = p__20726;
var k__4485__auto__ = cljs.core.nth.call(null,vec__20727,(0),null);
var v__4486__auto__ = cljs.core.nth.call(null,vec__20727,(1),null);
return f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__);
}),init__4483__auto__,this__4481__auto____$1);
}));

(loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4477__auto__,pr_pair__4479__auto__,"#loom.graph.BasicEditableWeightedGraph{",", ","}",opts__4478__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj],null))], null),self__.__extmap));
}));

(loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20720){
var self__ = this;
var G__20720__$1 = this;
return (new cljs.core.RecordIter((0),G__20720__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new loom.graph.BasicEditableWeightedGraph(self__.nodeset,self__.adj,self__.__meta,self__.__extmap,self__.__hash));
}));

(loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
}));

(loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (-212297308 ^ cljs.core.hash_unordered_coll.call(null,coll__4458__auto__));
}).call(null,this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this20722,other20723){
var self__ = this;
var this20722__$1 = this;
return (((!((other20723 == null)))) && ((((this20722__$1.constructor === other20723.constructor)) && (((cljs.core._EQ_.call(null,this20722__$1.nodeset,other20723.nodeset)) && (((cljs.core._EQ_.call(null,this20722__$1.adj,other20723.adj)) && (cljs.core._EQ_.call(null,this20722__$1.__extmap,other20723.__extmap)))))))));
}));

(loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),null,new cljs.core.Keyword(null,"adj","adj",-1344630196),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new loom.graph.BasicEditableWeightedGraph(self__.nodeset,self__.adj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4472__auto__)),null));
}
}));

(loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k20721){
var self__ = this;
var this__4468__auto____$1 = this;
var G__20730 = k20721;
var G__20730__$1 = (((G__20730 instanceof cljs.core.Keyword))?G__20730.fqn:null);
switch (G__20730__$1) {
case "nodeset":
case "adj":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k20721);

}
}));

(loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__20720){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__20731 = cljs.core.keyword_identical_QMARK_;
var expr__20732 = k__4470__auto__;
if(cljs.core.truth_(pred__20731.call(null,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),expr__20732))){
return (new loom.graph.BasicEditableWeightedGraph(G__20720,self__.adj,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20731.call(null,new cljs.core.Keyword(null,"adj","adj",-1344630196),expr__20732))){
return (new loom.graph.BasicEditableWeightedGraph(self__.nodeset,G__20720,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.BasicEditableWeightedGraph(self__.nodeset,self__.adj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4470__auto__,G__20720),null));
}
}
}));

(loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj,null))], null),self__.__extmap));
}));

(loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__20720){
var self__ = this;
var this__4460__auto____$1 = this;
return (new loom.graph.BasicEditableWeightedGraph(self__.nodeset,self__.adj,G__20720,self__.__extmap,self__.__hash));
}));

(loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4467__auto__,(0)),cljs.core._nth.call(null,entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(loom.graph.BasicEditableWeightedGraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nodeset","nodeset",-1958444430,null),new cljs.core.Symbol(null,"adj","adj",295901331,null)], null);
}));

(loom.graph.BasicEditableWeightedGraph.cljs$lang$type = true);

(loom.graph.BasicEditableWeightedGraph.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"loom.graph/BasicEditableWeightedGraph",null,(1),null));
}));

(loom.graph.BasicEditableWeightedGraph.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write.call(null,writer__4506__auto__,"loom.graph/BasicEditableWeightedGraph");
}));

/**
 * Positional factory function for loom.graph/BasicEditableWeightedGraph.
 */
loom.graph.__GT_BasicEditableWeightedGraph = (function loom$graph$__GT_BasicEditableWeightedGraph(nodeset,adj){
return (new loom.graph.BasicEditableWeightedGraph(nodeset,adj,null,null,null));
});

/**
 * Factory function for loom.graph/BasicEditableWeightedGraph, taking a map of keywords to field values.
 */
loom.graph.map__GT_BasicEditableWeightedGraph = (function loom$graph$map__GT_BasicEditableWeightedGraph(G__20724){
var extmap__4501__auto__ = (function (){var G__20734 = cljs.core.dissoc.call(null,G__20724,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196));
if(cljs.core.record_QMARK_.call(null,G__20724)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__20734);
} else {
return G__20734;
}
})();
return (new loom.graph.BasicEditableWeightedGraph(new cljs.core.Keyword(null,"nodeset","nodeset",695991339).cljs$core$IFn$_invoke$arity$1(G__20724),new cljs.core.Keyword(null,"adj","adj",-1344630196).cljs$core$IFn$_invoke$arity$1(G__20724),null,cljs.core.not_empty.call(null,extmap__4501__auto__),null));
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
loom.graph.BasicEditableWeightedDigraph = (function (nodeset,adj,in$,__meta,__extmap,__hash){
this.nodeset = nodeset;
this.adj = adj;
this.in$ = in$;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k20738,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__20742 = k20738;
var G__20742__$1 = (((G__20742 instanceof cljs.core.Keyword))?G__20742.fqn:null);
switch (G__20742__$1) {
case "nodeset":
return self__.nodeset;

break;
case "adj":
return self__.adj;

break;
case "in":
return self__.in$;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k20738,else__4464__auto__);

}
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4484__auto__,p__20743){
var vec__20744 = p__20743;
var k__4485__auto__ = cljs.core.nth.call(null,vec__20744,(0),null);
var v__4486__auto__ = cljs.core.nth.call(null,vec__20744,(1),null);
return f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__);
}),init__4483__auto__,this__4481__auto____$1);
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4477__auto__,pr_pair__4479__auto__,"#loom.graph.BasicEditableWeightedDigraph{",", ","}",opts__4478__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$],null))], null),self__.__extmap));
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20737){
var self__ = this;
var G__20737__$1 = this;
return (new cljs.core.RecordIter((0),G__20737__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196),new cljs.core.Keyword(null,"in","in",-1531184865)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new loom.graph.BasicEditableWeightedDigraph(self__.nodeset,self__.adj,self__.in$,self__.__meta,self__.__extmap,self__.__hash));
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (-1110931322 ^ cljs.core.hash_unordered_coll.call(null,coll__4458__auto__));
}).call(null,this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this20739,other20740){
var self__ = this;
var this20739__$1 = this;
return (((!((other20740 == null)))) && ((((this20739__$1.constructor === other20740.constructor)) && (((cljs.core._EQ_.call(null,this20739__$1.nodeset,other20740.nodeset)) && (((cljs.core._EQ_.call(null,this20739__$1.adj,other20740.adj)) && (((cljs.core._EQ_.call(null,this20739__$1.in,other20740.in)) && (cljs.core._EQ_.call(null,this20739__$1.__extmap,other20740.__extmap)))))))))));
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),null,new cljs.core.Keyword(null,"adj","adj",-1344630196),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new loom.graph.BasicEditableWeightedDigraph(self__.nodeset,self__.adj,self__.in$,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4472__auto__)),null));
}
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k20738){
var self__ = this;
var this__4468__auto____$1 = this;
var G__20747 = k20738;
var G__20747__$1 = (((G__20747 instanceof cljs.core.Keyword))?G__20747.fqn:null);
switch (G__20747__$1) {
case "nodeset":
case "adj":
case "in":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k20738);

}
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__20737){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__20748 = cljs.core.keyword_identical_QMARK_;
var expr__20749 = k__4470__auto__;
if(cljs.core.truth_(pred__20748.call(null,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),expr__20749))){
return (new loom.graph.BasicEditableWeightedDigraph(G__20737,self__.adj,self__.in$,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20748.call(null,new cljs.core.Keyword(null,"adj","adj",-1344630196),expr__20749))){
return (new loom.graph.BasicEditableWeightedDigraph(self__.nodeset,G__20737,self__.in$,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20748.call(null,new cljs.core.Keyword(null,"in","in",-1531184865),expr__20749))){
return (new loom.graph.BasicEditableWeightedDigraph(self__.nodeset,self__.adj,G__20737,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.BasicEditableWeightedDigraph(self__.nodeset,self__.adj,self__.in$,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4470__auto__,G__20737),null));
}
}
}
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$,null))], null),self__.__extmap));
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__20737){
var self__ = this;
var this__4460__auto____$1 = this;
return (new loom.graph.BasicEditableWeightedDigraph(self__.nodeset,self__.adj,self__.in$,G__20737,self__.__extmap,self__.__hash));
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4467__auto__,(0)),cljs.core._nth.call(null,entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(loom.graph.BasicEditableWeightedDigraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nodeset","nodeset",-1958444430,null),new cljs.core.Symbol(null,"adj","adj",295901331,null),new cljs.core.Symbol(null,"in","in",109346662,null)], null);
}));

(loom.graph.BasicEditableWeightedDigraph.cljs$lang$type = true);

(loom.graph.BasicEditableWeightedDigraph.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"loom.graph/BasicEditableWeightedDigraph",null,(1),null));
}));

(loom.graph.BasicEditableWeightedDigraph.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write.call(null,writer__4506__auto__,"loom.graph/BasicEditableWeightedDigraph");
}));

/**
 * Positional factory function for loom.graph/BasicEditableWeightedDigraph.
 */
loom.graph.__GT_BasicEditableWeightedDigraph = (function loom$graph$__GT_BasicEditableWeightedDigraph(nodeset,adj,in$){
return (new loom.graph.BasicEditableWeightedDigraph(nodeset,adj,in$,null,null,null));
});

/**
 * Factory function for loom.graph/BasicEditableWeightedDigraph, taking a map of keywords to field values.
 */
loom.graph.map__GT_BasicEditableWeightedDigraph = (function loom$graph$map__GT_BasicEditableWeightedDigraph(G__20741){
var extmap__4501__auto__ = (function (){var G__20751 = cljs.core.dissoc.call(null,G__20741,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196),new cljs.core.Keyword(null,"in","in",-1531184865));
if(cljs.core.record_QMARK_.call(null,G__20741)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__20751);
} else {
return G__20751;
}
})();
return (new loom.graph.BasicEditableWeightedDigraph(new cljs.core.Keyword(null,"nodeset","nodeset",695991339).cljs$core$IFn$_invoke$arity$1(G__20741),new cljs.core.Keyword(null,"adj","adj",-1344630196).cljs$core$IFn$_invoke$arity$1(G__20741),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(G__20741),null,cljs.core.not_empty.call(null,extmap__4501__auto__),null));
});

/**
 * Weight used when none is given for edges in weighted graphs
 */
loom.graph._STAR_default_weight_STAR_ = (1);
loom.graph.remove_adj_nodes = (function loom$graph$remove_adj_nodes(m,nodes,adjacents,remove_fn){
return cljs.core.reduce.call(null,(function (m__$1,n){
if(cljs.core.truth_(m__$1.call(null,n))){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [n], null),(function (p1__20754_SHARP_){
return cljs.core.apply.call(null,remove_fn,p1__20754_SHARP_,nodes);
}));
} else {
return m__$1;
}
}),cljs.core.apply.call(null,cljs.core.dissoc,m,nodes),adjacents);
});
(loom.graph.BasicEditableGraph.prototype.loom$graph$Graph$ = cljs.core.PROTOCOL_SENTINEL);

(loom.graph.BasicEditableGraph.prototype.loom$graph$Graph$nodes$arity$1 = (function (g){
var g__$1 = this;
return g__$1.nodeset;
}));

(loom.graph.BasicEditableGraph.prototype.loom$graph$Graph$edges$arity$1 = (function (g){
var g__$1 = this;
var iter__4611__auto__ = (function loom$graph$iter__20757(s__20758){
return (new cljs.core.LazySeq(null,(function (){
var s__20758__$1 = s__20758;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__20758__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var n1 = cljs.core.first.call(null,xs__6308__auto__);
var iterys__4607__auto__ = ((function (s__20758__$1,n1,xs__6308__auto__,temp__5753__auto__,g__$1){
return (function loom$graph$iter__20757_$_iter__20759(s__20760){
return (new cljs.core.LazySeq(null,((function (s__20758__$1,n1,xs__6308__auto__,temp__5753__auto__,g__$1){
return (function (){
var s__20760__$1 = s__20760;
while(true){
var temp__5753__auto____$1 = cljs.core.seq.call(null,s__20760__$1);
if(temp__5753__auto____$1){
var s__20760__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20760__$2)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,s__20760__$2);
var size__4610__auto__ = cljs.core.count.call(null,c__4609__auto__);
var b__20762 = cljs.core.chunk_buffer.call(null,size__4610__auto__);
if((function (){var i__20761 = (0);
while(true){
if((i__20761 < size__4610__auto__)){
var e = cljs.core._nth.call(null,c__4609__auto__,i__20761);
cljs.core.chunk_append.call(null,b__20762,e);

var G__20775 = (i__20761 + (1));
i__20761 = G__20775;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20762),loom$graph$iter__20757_$_iter__20759.call(null,cljs.core.chunk_rest.call(null,s__20760__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20762),null);
}
} else {
var e = cljs.core.first.call(null,s__20760__$2);
return cljs.core.cons.call(null,e,loom$graph$iter__20757_$_iter__20759.call(null,cljs.core.rest.call(null,s__20760__$2)));
}
} else {
return null;
}
break;
}
});})(s__20758__$1,n1,xs__6308__auto__,temp__5753__auto__,g__$1))
,null,null));
});})(s__20758__$1,n1,xs__6308__auto__,temp__5753__auto__,g__$1))
;
var fs__4608__auto__ = cljs.core.seq.call(null,iterys__4607__auto__.call(null,loom.graph.out_edges.call(null,g__$1,n1)));
if(fs__4608__auto__){
return cljs.core.concat.call(null,fs__4608__auto__,loom$graph$iter__20757.call(null,cljs.core.rest.call(null,s__20758__$1)));
} else {
var G__20776 = cljs.core.rest.call(null,s__20758__$1);
s__20758__$1 = G__20776;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__.call(null,loom.graph.nodes.call(null,g__$1));
}));

(loom.graph.BasicEditableGraph.prototype.loom$graph$Graph$has_node_QMARK_$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.contains_QMARK_.call(null,g__$1.nodeset,node);
}));

(loom.graph.BasicEditableGraph.prototype.loom$graph$Graph$has_edge_QMARK_$arity$3 = (function (g,n1,n2){
var g__$1 = this;
return cljs.core.contains_QMARK_.call(null,cljs.core.get_in.call(null,g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null)),n2);
}));

(loom.graph.BasicEditableGraph.prototype.loom$graph$Graph$out_degree$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.count.call(null,cljs.core.get_in.call(null,g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),node], null)));
}));

(loom.graph.BasicEditableGraph.prototype.loom$graph$Graph$out_edges$arity$2 = (function (g,node){
var g__$1 = this;
var iter__4611__auto__ = (function loom$graph$iter__20763(s__20764){
return (new cljs.core.LazySeq(null,(function (){
var s__20764__$1 = s__20764;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__20764__$1);
if(temp__5753__auto__){
var s__20764__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20764__$2)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,s__20764__$2);
var size__4610__auto__ = cljs.core.count.call(null,c__4609__auto__);
var b__20766 = cljs.core.chunk_buffer.call(null,size__4610__auto__);
if((function (){var i__20765 = (0);
while(true){
if((i__20765 < size__4610__auto__)){
var n2 = cljs.core._nth.call(null,c__4609__auto__,i__20765);
cljs.core.chunk_append.call(null,b__20766,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__20777 = (i__20765 + (1));
i__20765 = G__20777;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20766),loom$graph$iter__20763.call(null,cljs.core.chunk_rest.call(null,s__20764__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20766),null);
}
} else {
var n2 = cljs.core.first.call(null,s__20764__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__20763.call(null,cljs.core.rest.call(null,s__20764__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__.call(null,loom.graph.successors.call(null,g__$1,node));
}));

(loom.graph.BasicEditableGraph.prototype.loom$graph$Graph$successors_STAR_$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.get_in.call(null,g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),node], null));
}));

(loom.graph.BasicEditableGraph.prototype.loom$graph$EditableGraph$ = cljs.core.PROTOCOL_SENTINEL);

(loom.graph.BasicEditableGraph.prototype.loom$graph$EditableGraph$add_nodes_STAR_$arity$2 = (function (g,nodes){
var g__$1 = this;
return cljs.core.reduce.call(null,(function (g__$2,node){
return cljs.core.update_in.call(null,g__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),cljs.core.conj,node);
}),g__$1,nodes);
}));

(loom.graph.BasicEditableGraph.prototype.loom$graph$EditableGraph$add_edges_STAR_$arity$2 = (function (g,edges){
var g__$1 = this;
return cljs.core.reduce.call(null,(function (g__$2,p__20767){
var vec__20768 = p__20767;
var n1 = cljs.core.nth.call(null,vec__20768,(0),null);
var n2 = cljs.core.nth.call(null,vec__20768,(1),null);
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,g__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),cljs.core.conj,n1,n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n2], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),n1);
}),g__$1,edges);
}));

(loom.graph.BasicEditableGraph.prototype.loom$graph$EditableGraph$remove_nodes_STAR_$arity$2 = (function (g,nodes){
var g__$1 = this;
var nbrs = cljs.core.mapcat.call(null,(function (p1__20755_SHARP_){
return loom.graph.successors.call(null,g__$1,p1__20755_SHARP_);
}),nodes);
return cljs.core.assoc.call(null,cljs.core.update_in.call(null,g__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),(function (p1__20756_SHARP_){
return cljs.core.apply.call(null,cljs.core.disj,p1__20756_SHARP_,nodes);
})),new cljs.core.Keyword(null,"adj","adj",-1344630196),loom.graph.remove_adj_nodes.call(null,g__$1.adj,nodes,nbrs,cljs.core.disj));
}));

(loom.graph.BasicEditableGraph.prototype.loom$graph$EditableGraph$remove_edges_STAR_$arity$2 = (function (g,edges){
var g__$1 = this;
return cljs.core.reduce.call(null,(function (g__$2,p__20771){
var vec__20772 = p__20771;
var n1 = cljs.core.nth.call(null,vec__20772,(0),null);
var n2 = cljs.core.nth.call(null,vec__20772,(1),null);
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,g__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null),cljs.core.disj,n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n2], null),cljs.core.disj,n1);
}),g__$1,edges);
}));

(loom.graph.BasicEditableGraph.prototype.loom$graph$EditableGraph$remove_all$arity$1 = (function (g){
var g__$1 = this;
return cljs.core.assoc.call(null,g__$1,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"adj","adj",-1344630196),cljs.core.PersistentArrayMap.EMPTY);
}));
(loom.graph.BasicEditableDigraph.prototype.loom$graph$Graph$ = cljs.core.PROTOCOL_SENTINEL);

(loom.graph.BasicEditableDigraph.prototype.loom$graph$Graph$nodes$arity$1 = (function (g){
var g__$1 = this;
return g__$1.nodeset;
}));

(loom.graph.BasicEditableDigraph.prototype.loom$graph$Graph$edges$arity$1 = (function (g){
var g__$1 = this;
var iter__4611__auto__ = (function loom$graph$iter__20781(s__20782){
return (new cljs.core.LazySeq(null,(function (){
var s__20782__$1 = s__20782;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__20782__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var n1 = cljs.core.first.call(null,xs__6308__auto__);
var iterys__4607__auto__ = ((function (s__20782__$1,n1,xs__6308__auto__,temp__5753__auto__,g__$1){
return (function loom$graph$iter__20781_$_iter__20783(s__20784){
return (new cljs.core.LazySeq(null,((function (s__20782__$1,n1,xs__6308__auto__,temp__5753__auto__,g__$1){
return (function (){
var s__20784__$1 = s__20784;
while(true){
var temp__5753__auto____$1 = cljs.core.seq.call(null,s__20784__$1);
if(temp__5753__auto____$1){
var s__20784__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20784__$2)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,s__20784__$2);
var size__4610__auto__ = cljs.core.count.call(null,c__4609__auto__);
var b__20786 = cljs.core.chunk_buffer.call(null,size__4610__auto__);
if((function (){var i__20785 = (0);
while(true){
if((i__20785 < size__4610__auto__)){
var e = cljs.core._nth.call(null,c__4609__auto__,i__20785);
cljs.core.chunk_append.call(null,b__20786,e);

var G__20803 = (i__20785 + (1));
i__20785 = G__20803;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20786),loom$graph$iter__20781_$_iter__20783.call(null,cljs.core.chunk_rest.call(null,s__20784__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20786),null);
}
} else {
var e = cljs.core.first.call(null,s__20784__$2);
return cljs.core.cons.call(null,e,loom$graph$iter__20781_$_iter__20783.call(null,cljs.core.rest.call(null,s__20784__$2)));
}
} else {
return null;
}
break;
}
});})(s__20782__$1,n1,xs__6308__auto__,temp__5753__auto__,g__$1))
,null,null));
});})(s__20782__$1,n1,xs__6308__auto__,temp__5753__auto__,g__$1))
;
var fs__4608__auto__ = cljs.core.seq.call(null,iterys__4607__auto__.call(null,loom.graph.out_edges.call(null,g__$1,n1)));
if(fs__4608__auto__){
return cljs.core.concat.call(null,fs__4608__auto__,loom$graph$iter__20781.call(null,cljs.core.rest.call(null,s__20782__$1)));
} else {
var G__20804 = cljs.core.rest.call(null,s__20782__$1);
s__20782__$1 = G__20804;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__.call(null,loom.graph.nodes.call(null,g__$1));
}));

(loom.graph.BasicEditableDigraph.prototype.loom$graph$Graph$has_node_QMARK_$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.contains_QMARK_.call(null,g__$1.nodeset,node);
}));

(loom.graph.BasicEditableDigraph.prototype.loom$graph$Graph$has_edge_QMARK_$arity$3 = (function (g,n1,n2){
var g__$1 = this;
return cljs.core.contains_QMARK_.call(null,cljs.core.get_in.call(null,g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null)),n2);
}));

(loom.graph.BasicEditableDigraph.prototype.loom$graph$Graph$out_degree$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.count.call(null,cljs.core.get_in.call(null,g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),node], null)));
}));

(loom.graph.BasicEditableDigraph.prototype.loom$graph$Graph$out_edges$arity$2 = (function (g,node){
var g__$1 = this;
var iter__4611__auto__ = (function loom$graph$iter__20787(s__20788){
return (new cljs.core.LazySeq(null,(function (){
var s__20788__$1 = s__20788;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__20788__$1);
if(temp__5753__auto__){
var s__20788__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20788__$2)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,s__20788__$2);
var size__4610__auto__ = cljs.core.count.call(null,c__4609__auto__);
var b__20790 = cljs.core.chunk_buffer.call(null,size__4610__auto__);
if((function (){var i__20789 = (0);
while(true){
if((i__20789 < size__4610__auto__)){
var n2 = cljs.core._nth.call(null,c__4609__auto__,i__20789);
cljs.core.chunk_append.call(null,b__20790,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__20805 = (i__20789 + (1));
i__20789 = G__20805;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20790),loom$graph$iter__20787.call(null,cljs.core.chunk_rest.call(null,s__20788__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20790),null);
}
} else {
var n2 = cljs.core.first.call(null,s__20788__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__20787.call(null,cljs.core.rest.call(null,s__20788__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__.call(null,loom.graph.successors.call(null,g__$1,node));
}));

(loom.graph.BasicEditableDigraph.prototype.loom$graph$Graph$successors_STAR_$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.get_in.call(null,g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),node], null));
}));

(loom.graph.BasicEditableDigraph.prototype.loom$graph$EditableGraph$ = cljs.core.PROTOCOL_SENTINEL);

(loom.graph.BasicEditableDigraph.prototype.loom$graph$EditableGraph$add_nodes_STAR_$arity$2 = (function (g,nodes){
var g__$1 = this;
return cljs.core.reduce.call(null,(function (g__$2,node){
return cljs.core.update_in.call(null,g__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),cljs.core.conj,node);
}),g__$1,nodes);
}));

(loom.graph.BasicEditableDigraph.prototype.loom$graph$EditableGraph$add_edges_STAR_$arity$2 = (function (g,edges){
var g__$1 = this;
return cljs.core.reduce.call(null,(function (g__$2,p__20791){
var vec__20792 = p__20791;
var n1 = cljs.core.nth.call(null,vec__20792,(0),null);
var n2 = cljs.core.nth.call(null,vec__20792,(1),null);
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,g__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),cljs.core.conj,n1,n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),n2], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),n1);
}),g__$1,edges);
}));

(loom.graph.BasicEditableDigraph.prototype.loom$graph$EditableGraph$remove_nodes_STAR_$arity$2 = (function (g,nodes){
var g__$1 = this;
var ins = cljs.core.mapcat.call(null,(function (p1__20778_SHARP_){
return loom.graph.predecessors.call(null,g__$1,p1__20778_SHARP_);
}),nodes);
var outs = cljs.core.mapcat.call(null,(function (p1__20779_SHARP_){
return loom.graph.successors.call(null,g__$1,p1__20779_SHARP_);
}),nodes);
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.update_in.call(null,g__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),(function (p1__20780_SHARP_){
return cljs.core.apply.call(null,cljs.core.disj,p1__20780_SHARP_,nodes);
})),new cljs.core.Keyword(null,"adj","adj",-1344630196),loom.graph.remove_adj_nodes.call(null,g__$1.adj,nodes,ins,cljs.core.disj)),new cljs.core.Keyword(null,"in","in",-1531184865),loom.graph.remove_adj_nodes.call(null,g__$1.in,nodes,outs,cljs.core.disj));
}));

(loom.graph.BasicEditableDigraph.prototype.loom$graph$EditableGraph$remove_edges_STAR_$arity$2 = (function (g,edges){
var g__$1 = this;
return cljs.core.reduce.call(null,(function (g__$2,p__20795){
var vec__20796 = p__20795;
var n1 = cljs.core.nth.call(null,vec__20796,(0),null);
var n2 = cljs.core.nth.call(null,vec__20796,(1),null);
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,g__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null),cljs.core.disj,n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),n2], null),cljs.core.disj,n1);
}),g__$1,edges);
}));

(loom.graph.BasicEditableDigraph.prototype.loom$graph$EditableGraph$remove_all$arity$1 = (function (g){
var g__$1 = this;
return cljs.core.assoc.call(null,g__$1,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"adj","adj",-1344630196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.PersistentArrayMap.EMPTY);
}));

(loom.graph.BasicEditableDigraph.prototype.loom$graph$Digraph$ = cljs.core.PROTOCOL_SENTINEL);

(loom.graph.BasicEditableDigraph.prototype.loom$graph$Digraph$predecessors_STAR_$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.get_in.call(null,g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),node], null));
}));

(loom.graph.BasicEditableDigraph.prototype.loom$graph$Digraph$in_degree$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.count.call(null,cljs.core.get_in.call(null,g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),node], null)));
}));

(loom.graph.BasicEditableDigraph.prototype.loom$graph$Digraph$in_edges$arity$2 = (function (g,node){
var g__$1 = this;
var iter__4611__auto__ = (function loom$graph$iter__20799(s__20800){
return (new cljs.core.LazySeq(null,(function (){
var s__20800__$1 = s__20800;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__20800__$1);
if(temp__5753__auto__){
var s__20800__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20800__$2)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,s__20800__$2);
var size__4610__auto__ = cljs.core.count.call(null,c__4609__auto__);
var b__20802 = cljs.core.chunk_buffer.call(null,size__4610__auto__);
if((function (){var i__20801 = (0);
while(true){
if((i__20801 < size__4610__auto__)){
var n2 = cljs.core._nth.call(null,c__4609__auto__,i__20801);
cljs.core.chunk_append.call(null,b__20802,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null));

var G__20806 = (i__20801 + (1));
i__20801 = G__20806;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20802),loom$graph$iter__20799.call(null,cljs.core.chunk_rest.call(null,s__20800__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20802),null);
}
} else {
var n2 = cljs.core.first.call(null,s__20800__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null),loom$graph$iter__20799.call(null,cljs.core.rest.call(null,s__20800__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__.call(null,loom.graph.predecessors.call(null,g__$1,node));
}));

(loom.graph.BasicEditableDigraph.prototype.loom$graph$Digraph$transpose$arity$1 = (function (g){
var g__$1 = this;
return cljs.core.assoc.call(null,g__$1,new cljs.core.Keyword(null,"adj","adj",-1344630196),g__$1.in,new cljs.core.Keyword(null,"in","in",-1531184865),g__$1.adj);
}));
(loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$Graph$ = cljs.core.PROTOCOL_SENTINEL);

(loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$Graph$nodes$arity$1 = (function (g){
var g__$1 = this;
return g__$1.nodeset;
}));

(loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$Graph$edges$arity$1 = (function (g){
var g__$1 = this;
var iter__4611__auto__ = (function loom$graph$iter__20809(s__20810){
return (new cljs.core.LazySeq(null,(function (){
var s__20810__$1 = s__20810;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__20810__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var n1 = cljs.core.first.call(null,xs__6308__auto__);
var iterys__4607__auto__ = ((function (s__20810__$1,n1,xs__6308__auto__,temp__5753__auto__,g__$1){
return (function loom$graph$iter__20809_$_iter__20811(s__20812){
return (new cljs.core.LazySeq(null,((function (s__20810__$1,n1,xs__6308__auto__,temp__5753__auto__,g__$1){
return (function (){
var s__20812__$1 = s__20812;
while(true){
var temp__5753__auto____$1 = cljs.core.seq.call(null,s__20812__$1);
if(temp__5753__auto____$1){
var s__20812__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20812__$2)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,s__20812__$2);
var size__4610__auto__ = cljs.core.count.call(null,c__4609__auto__);
var b__20814 = cljs.core.chunk_buffer.call(null,size__4610__auto__);
if((function (){var i__20813 = (0);
while(true){
if((i__20813 < size__4610__auto__)){
var e = cljs.core._nth.call(null,c__4609__auto__,i__20813);
cljs.core.chunk_append.call(null,b__20814,e);

var G__20830 = (i__20813 + (1));
i__20813 = G__20830;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20814),loom$graph$iter__20809_$_iter__20811.call(null,cljs.core.chunk_rest.call(null,s__20812__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20814),null);
}
} else {
var e = cljs.core.first.call(null,s__20812__$2);
return cljs.core.cons.call(null,e,loom$graph$iter__20809_$_iter__20811.call(null,cljs.core.rest.call(null,s__20812__$2)));
}
} else {
return null;
}
break;
}
});})(s__20810__$1,n1,xs__6308__auto__,temp__5753__auto__,g__$1))
,null,null));
});})(s__20810__$1,n1,xs__6308__auto__,temp__5753__auto__,g__$1))
;
var fs__4608__auto__ = cljs.core.seq.call(null,iterys__4607__auto__.call(null,loom.graph.out_edges.call(null,g__$1,n1)));
if(fs__4608__auto__){
return cljs.core.concat.call(null,fs__4608__auto__,loom$graph$iter__20809.call(null,cljs.core.rest.call(null,s__20810__$1)));
} else {
var G__20831 = cljs.core.rest.call(null,s__20810__$1);
s__20810__$1 = G__20831;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__.call(null,loom.graph.nodes.call(null,g__$1));
}));

(loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$Graph$has_node_QMARK_$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.contains_QMARK_.call(null,g__$1.nodeset,node);
}));

(loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$Graph$has_edge_QMARK_$arity$3 = (function (g,n1,n2){
var g__$1 = this;
return cljs.core.contains_QMARK_.call(null,cljs.core.get_in.call(null,g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null)),n2);
}));

(loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$Graph$out_degree$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.count.call(null,cljs.core.get_in.call(null,g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),node], null)));
}));

(loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$Graph$out_edges$arity$2 = (function (g,node){
var g__$1 = this;
var iter__4611__auto__ = (function loom$graph$iter__20815(s__20816){
return (new cljs.core.LazySeq(null,(function (){
var s__20816__$1 = s__20816;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__20816__$1);
if(temp__5753__auto__){
var s__20816__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20816__$2)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,s__20816__$2);
var size__4610__auto__ = cljs.core.count.call(null,c__4609__auto__);
var b__20818 = cljs.core.chunk_buffer.call(null,size__4610__auto__);
if((function (){var i__20817 = (0);
while(true){
if((i__20817 < size__4610__auto__)){
var n2 = cljs.core._nth.call(null,c__4609__auto__,i__20817);
cljs.core.chunk_append.call(null,b__20818,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__20832 = (i__20817 + (1));
i__20817 = G__20832;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20818),loom$graph$iter__20815.call(null,cljs.core.chunk_rest.call(null,s__20816__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20818),null);
}
} else {
var n2 = cljs.core.first.call(null,s__20816__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__20815.call(null,cljs.core.rest.call(null,s__20816__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__.call(null,loom.graph.successors.call(null,g__$1,node));
}));

(loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$Graph$successors_STAR_$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.keys.call(null,cljs.core.get_in.call(null,g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),node], null)));
}));

(loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$EditableGraph$ = cljs.core.PROTOCOL_SENTINEL);

(loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$EditableGraph$add_nodes_STAR_$arity$2 = (function (g,nodes){
var g__$1 = this;
return cljs.core.reduce.call(null,(function (g__$2,node){
return cljs.core.update_in.call(null,g__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),cljs.core.conj,node);
}),g__$1,nodes);
}));

(loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$EditableGraph$add_edges_STAR_$arity$2 = (function (g,edges){
var g__$1 = this;
return cljs.core.reduce.call(null,(function (g__$2,p__20819){
var vec__20820 = p__20819;
var seq__20821 = cljs.core.seq.call(null,vec__20820);
var first__20822 = cljs.core.first.call(null,seq__20821);
var seq__20821__$1 = cljs.core.next.call(null,seq__20821);
var n1 = first__20822;
var first__20822__$1 = cljs.core.first.call(null,seq__20821__$1);
var seq__20821__$2 = cljs.core.next.call(null,seq__20821__$1);
var n2 = first__20822__$1;
var vec__20823 = seq__20821__$2;
var w = cljs.core.nth.call(null,vec__20823,(0),null);
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,g__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),cljs.core.conj,n1,n2),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1,n2], null),(function (){var or__4212__auto__ = w;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return loom.graph._STAR_default_weight_STAR_;
}
})()),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n2,n1], null),(function (){var or__4212__auto__ = w;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return loom.graph._STAR_default_weight_STAR_;
}
})());
}),g__$1,edges);
}));

(loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$EditableGraph$remove_nodes_STAR_$arity$2 = (function (g,nodes){
var g__$1 = this;
var nbrs = cljs.core.mapcat.call(null,(function (p1__20807_SHARP_){
return loom.graph.successors.call(null,g__$1,p1__20807_SHARP_);
}),nodes);
return cljs.core.assoc.call(null,cljs.core.update_in.call(null,g__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),(function (p1__20808_SHARP_){
return cljs.core.apply.call(null,cljs.core.disj,p1__20808_SHARP_,nodes);
})),new cljs.core.Keyword(null,"adj","adj",-1344630196),loom.graph.remove_adj_nodes.call(null,g__$1.adj,nodes,nbrs,cljs.core.dissoc));
}));

(loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$EditableGraph$remove_edges_STAR_$arity$2 = (function (g,edges){
var g__$1 = this;
return cljs.core.reduce.call(null,(function (g__$2,p__20826){
var vec__20827 = p__20826;
var n1 = cljs.core.nth.call(null,vec__20827,(0),null);
var n2 = cljs.core.nth.call(null,vec__20827,(1),null);
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,g__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null),cljs.core.dissoc,n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n2], null),cljs.core.dissoc,n1);
}),g__$1,edges);
}));

(loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$EditableGraph$remove_all$arity$1 = (function (g){
var g__$1 = this;
return cljs.core.assoc.call(null,g__$1,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"adj","adj",-1344630196),cljs.core.PersistentArrayMap.EMPTY);
}));

(loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$WeightedGraph$ = cljs.core.PROTOCOL_SENTINEL);

(loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$WeightedGraph$weight_STAR_$arity$2 = (function (g,e){
var g__$1 = this;
return loom.graph.weight.call(null,g__$1,loom.graph.src.call(null,e),loom.graph.dest.call(null,e));
}));

(loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$WeightedGraph$weight_STAR_$arity$3 = (function (g,n1,n2){
var g__$1 = this;
return cljs.core.get_in.call(null,g__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1,n2], null));
}));
(loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Graph$ = cljs.core.PROTOCOL_SENTINEL);

(loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Graph$nodes$arity$1 = (function (g){
var g__$1 = this;
return g__$1.nodeset;
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Graph$edges$arity$1 = (function (g){
var g__$1 = this;
var iter__4611__auto__ = (function loom$graph$iter__20836(s__20837){
return (new cljs.core.LazySeq(null,(function (){
var s__20837__$1 = s__20837;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__20837__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var n1 = cljs.core.first.call(null,xs__6308__auto__);
var iterys__4607__auto__ = ((function (s__20837__$1,n1,xs__6308__auto__,temp__5753__auto__,g__$1){
return (function loom$graph$iter__20836_$_iter__20838(s__20839){
return (new cljs.core.LazySeq(null,((function (s__20837__$1,n1,xs__6308__auto__,temp__5753__auto__,g__$1){
return (function (){
var s__20839__$1 = s__20839;
while(true){
var temp__5753__auto____$1 = cljs.core.seq.call(null,s__20839__$1);
if(temp__5753__auto____$1){
var s__20839__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20839__$2)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,s__20839__$2);
var size__4610__auto__ = cljs.core.count.call(null,c__4609__auto__);
var b__20841 = cljs.core.chunk_buffer.call(null,size__4610__auto__);
if((function (){var i__20840 = (0);
while(true){
if((i__20840 < size__4610__auto__)){
var e = cljs.core._nth.call(null,c__4609__auto__,i__20840);
cljs.core.chunk_append.call(null,b__20841,e);

var G__20865 = (i__20840 + (1));
i__20840 = G__20865;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20841),loom$graph$iter__20836_$_iter__20838.call(null,cljs.core.chunk_rest.call(null,s__20839__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20841),null);
}
} else {
var e = cljs.core.first.call(null,s__20839__$2);
return cljs.core.cons.call(null,e,loom$graph$iter__20836_$_iter__20838.call(null,cljs.core.rest.call(null,s__20839__$2)));
}
} else {
return null;
}
break;
}
});})(s__20837__$1,n1,xs__6308__auto__,temp__5753__auto__,g__$1))
,null,null));
});})(s__20837__$1,n1,xs__6308__auto__,temp__5753__auto__,g__$1))
;
var fs__4608__auto__ = cljs.core.seq.call(null,iterys__4607__auto__.call(null,loom.graph.out_edges.call(null,g__$1,n1)));
if(fs__4608__auto__){
return cljs.core.concat.call(null,fs__4608__auto__,loom$graph$iter__20836.call(null,cljs.core.rest.call(null,s__20837__$1)));
} else {
var G__20866 = cljs.core.rest.call(null,s__20837__$1);
s__20837__$1 = G__20866;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__.call(null,loom.graph.nodes.call(null,g__$1));
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Graph$has_node_QMARK_$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.contains_QMARK_.call(null,g__$1.nodeset,node);
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Graph$has_edge_QMARK_$arity$3 = (function (g,n1,n2){
var g__$1 = this;
return cljs.core.contains_QMARK_.call(null,cljs.core.get_in.call(null,g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null)),n2);
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Graph$out_degree$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.count.call(null,cljs.core.get_in.call(null,g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),node], null)));
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Graph$out_edges$arity$2 = (function (g,node){
var g__$1 = this;
var iter__4611__auto__ = (function loom$graph$iter__20842(s__20843){
return (new cljs.core.LazySeq(null,(function (){
var s__20843__$1 = s__20843;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__20843__$1);
if(temp__5753__auto__){
var s__20843__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20843__$2)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,s__20843__$2);
var size__4610__auto__ = cljs.core.count.call(null,c__4609__auto__);
var b__20845 = cljs.core.chunk_buffer.call(null,size__4610__auto__);
if((function (){var i__20844 = (0);
while(true){
if((i__20844 < size__4610__auto__)){
var n2 = cljs.core._nth.call(null,c__4609__auto__,i__20844);
cljs.core.chunk_append.call(null,b__20845,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__20867 = (i__20844 + (1));
i__20844 = G__20867;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20845),loom$graph$iter__20842.call(null,cljs.core.chunk_rest.call(null,s__20843__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20845),null);
}
} else {
var n2 = cljs.core.first.call(null,s__20843__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__20842.call(null,cljs.core.rest.call(null,s__20843__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__.call(null,loom.graph.successors.call(null,g__$1,node));
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Graph$successors_STAR_$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.keys.call(null,cljs.core.get_in.call(null,g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),node], null)));
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$EditableGraph$ = cljs.core.PROTOCOL_SENTINEL);

(loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$EditableGraph$add_nodes_STAR_$arity$2 = (function (g,nodes){
var g__$1 = this;
return cljs.core.reduce.call(null,(function (g__$2,node){
return cljs.core.update_in.call(null,g__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),cljs.core.conj,node);
}),g__$1,nodes);
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$EditableGraph$add_edges_STAR_$arity$2 = (function (g,edges){
var g__$1 = this;
return cljs.core.reduce.call(null,(function (g__$2,p__20846){
var vec__20847 = p__20846;
var seq__20848 = cljs.core.seq.call(null,vec__20847);
var first__20849 = cljs.core.first.call(null,seq__20848);
var seq__20848__$1 = cljs.core.next.call(null,seq__20848);
var n1 = first__20849;
var first__20849__$1 = cljs.core.first.call(null,seq__20848__$1);
var seq__20848__$2 = cljs.core.next.call(null,seq__20848__$1);
var n2 = first__20849__$1;
var vec__20850 = seq__20848__$2;
var w = cljs.core.nth.call(null,vec__20850,(0),null);
return cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,g__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),cljs.core.conj,n1,n2),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1,n2], null),(function (){var or__4212__auto__ = w;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return loom.graph._STAR_default_weight_STAR_;
}
})()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),n2], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),n1);
}),g__$1,edges);
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$EditableGraph$remove_nodes_STAR_$arity$2 = (function (g,nodes){
var g__$1 = this;
var ins = cljs.core.mapcat.call(null,(function (p1__20833_SHARP_){
return loom.graph.predecessors.call(null,g__$1,p1__20833_SHARP_);
}),nodes);
var outs = cljs.core.mapcat.call(null,(function (p1__20834_SHARP_){
return loom.graph.successors.call(null,g__$1,p1__20834_SHARP_);
}),nodes);
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.update_in.call(null,g__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),(function (p1__20835_SHARP_){
return cljs.core.apply.call(null,cljs.core.disj,p1__20835_SHARP_,nodes);
})),new cljs.core.Keyword(null,"adj","adj",-1344630196),loom.graph.remove_adj_nodes.call(null,g__$1.adj,nodes,ins,cljs.core.dissoc)),new cljs.core.Keyword(null,"in","in",-1531184865),loom.graph.remove_adj_nodes.call(null,g__$1.in,nodes,outs,cljs.core.disj));
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$EditableGraph$remove_edges_STAR_$arity$2 = (function (g,edges){
var g__$1 = this;
return cljs.core.reduce.call(null,(function (g__$2,p__20853){
var vec__20854 = p__20853;
var n1 = cljs.core.nth.call(null,vec__20854,(0),null);
var n2 = cljs.core.nth.call(null,vec__20854,(1),null);
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,g__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null),cljs.core.dissoc,n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),n2], null),cljs.core.disj,n1);
}),g__$1,edges);
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$EditableGraph$remove_all$arity$1 = (function (g){
var g__$1 = this;
return cljs.core.assoc.call(null,g__$1,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"adj","adj",-1344630196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.PersistentArrayMap.EMPTY);
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Digraph$ = cljs.core.PROTOCOL_SENTINEL);

(loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Digraph$predecessors_STAR_$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.get_in.call(null,g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),node], null));
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Digraph$in_degree$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.count.call(null,cljs.core.get_in.call(null,g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),node], null)));
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Digraph$in_edges$arity$2 = (function (g,node){
var g__$1 = this;
var iter__4611__auto__ = (function loom$graph$iter__20857(s__20858){
return (new cljs.core.LazySeq(null,(function (){
var s__20858__$1 = s__20858;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__20858__$1);
if(temp__5753__auto__){
var s__20858__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20858__$2)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,s__20858__$2);
var size__4610__auto__ = cljs.core.count.call(null,c__4609__auto__);
var b__20860 = cljs.core.chunk_buffer.call(null,size__4610__auto__);
if((function (){var i__20859 = (0);
while(true){
if((i__20859 < size__4610__auto__)){
var n2 = cljs.core._nth.call(null,c__4609__auto__,i__20859);
cljs.core.chunk_append.call(null,b__20860,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null));

var G__20868 = (i__20859 + (1));
i__20859 = G__20868;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20860),loom$graph$iter__20857.call(null,cljs.core.chunk_rest.call(null,s__20858__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20860),null);
}
} else {
var n2 = cljs.core.first.call(null,s__20858__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null),loom$graph$iter__20857.call(null,cljs.core.rest.call(null,s__20858__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__.call(null,loom.graph.predecessors.call(null,g__$1,node));
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Digraph$transpose$arity$1 = (function (g){
var g__$1 = this;
return cljs.core.reduce.call(null,(function (tg,p__20861){
var vec__20862 = p__20861;
var n1 = cljs.core.nth.call(null,vec__20862,(0),null);
var n2 = cljs.core.nth.call(null,vec__20862,(1),null);
return loom.graph.add_edges_STAR_.call(null,tg,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,n1,loom.graph.weight.call(null,g__$1,n1,n2)], null)], null));
}),cljs.core.assoc.call(null,g__$1,new cljs.core.Keyword(null,"adj","adj",-1344630196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.PersistentArrayMap.EMPTY),loom.graph.edges.call(null,g__$1));
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$WeightedGraph$ = cljs.core.PROTOCOL_SENTINEL);

(loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$WeightedGraph$weight_STAR_$arity$2 = (function (g,e){
var g__$1 = this;
return loom.graph.weight.call(null,g__$1,loom.graph.src.call(null,e),loom.graph.dest.call(null,e));
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$WeightedGraph$weight_STAR_$arity$3 = (function (g,n1,n2){
var g__$1 = this;
return cljs.core.get_in.call(null,g__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1,n2], null));
}));
loom.graph.call_or_return = (function loom$graph$call_or_return(var_args){
var args__4824__auto__ = [];
var len__4818__auto___20871 = arguments.length;
var i__4819__auto___20872 = (0);
while(true){
if((i__4819__auto___20872 < len__4818__auto___20871)){
args__4824__auto__.push((arguments[i__4819__auto___20872]));

var G__20873 = (i__4819__auto___20872 + (1));
i__4819__auto___20872 = G__20873;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return loom.graph.call_or_return.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(loom.graph.call_or_return.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.fn_QMARK_.call(null,f)){
return cljs.core.apply.call(null,f,args);
} else {
return f;
}
}));

(loom.graph.call_or_return.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(loom.graph.call_or_return.cljs$lang$applyTo = (function (seq20869){
var G__20870 = cljs.core.first.call(null,seq20869);
var seq20869__$1 = cljs.core.next.call(null,seq20869);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20870,seq20869__$1);
}));


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
loom.graph.FlyGraph = (function (fnodes,fedges,fsuccessors,start,__meta,__extmap,__hash){
this.fnodes = fnodes;
this.fedges = fedges;
this.fsuccessors = fsuccessors;
this.start = start;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(loom.graph.FlyGraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(loom.graph.FlyGraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k20875,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__20879 = k20875;
var G__20879__$1 = (((G__20879 instanceof cljs.core.Keyword))?G__20879.fqn:null);
switch (G__20879__$1) {
case "fnodes":
return self__.fnodes;

break;
case "fedges":
return self__.fedges;

break;
case "fsuccessors":
return self__.fsuccessors;

break;
case "start":
return self__.start;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k20875,else__4464__auto__);

}
}));

(loom.graph.FlyGraph.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4484__auto__,p__20880){
var vec__20881 = p__20880;
var k__4485__auto__ = cljs.core.nth.call(null,vec__20881,(0),null);
var v__4486__auto__ = cljs.core.nth.call(null,vec__20881,(1),null);
return f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__);
}),init__4483__auto__,this__4481__auto____$1);
}));

(loom.graph.FlyGraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4477__auto__,pr_pair__4479__auto__,"#loom.graph.FlyGraph{",", ","}",opts__4478__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",-355208981),self__.start],null))], null),self__.__extmap));
}));

(loom.graph.FlyGraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20874){
var self__ = this;
var G__20874__$1 = this;
return (new cljs.core.RecordIter((0),G__20874__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"start","start",-355208981)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(loom.graph.FlyGraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(loom.graph.FlyGraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new loom.graph.FlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.start,self__.__meta,self__.__extmap,self__.__hash));
}));

(loom.graph.FlyGraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
}));

(loom.graph.FlyGraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (-1546683162 ^ cljs.core.hash_unordered_coll.call(null,coll__4458__auto__));
}).call(null,this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(loom.graph.FlyGraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this20876,other20877){
var self__ = this;
var this20876__$1 = this;
return (((!((other20877 == null)))) && ((((this20876__$1.constructor === other20877.constructor)) && (((cljs.core._EQ_.call(null,this20876__$1.fnodes,other20877.fnodes)) && (((cljs.core._EQ_.call(null,this20876__$1.fedges,other20877.fedges)) && (((cljs.core._EQ_.call(null,this20876__$1.fsuccessors,other20877.fsuccessors)) && (((cljs.core._EQ_.call(null,this20876__$1.start,other20877.start)) && (cljs.core._EQ_.call(null,this20876__$1.__extmap,other20877.__extmap)))))))))))));
}));

(loom.graph.FlyGraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fedges","fedges",499673923),null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),null,new cljs.core.Keyword(null,"start","start",-355208981),null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new loom.graph.FlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.start,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4472__auto__)),null));
}
}));

(loom.graph.FlyGraph.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k20875){
var self__ = this;
var this__4468__auto____$1 = this;
var G__20884 = k20875;
var G__20884__$1 = (((G__20884 instanceof cljs.core.Keyword))?G__20884.fqn:null);
switch (G__20884__$1) {
case "fnodes":
case "fedges":
case "fsuccessors":
case "start":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k20875);

}
}));

(loom.graph.FlyGraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__20874){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__20885 = cljs.core.keyword_identical_QMARK_;
var expr__20886 = k__4470__auto__;
if(cljs.core.truth_(pred__20885.call(null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),expr__20886))){
return (new loom.graph.FlyGraph(G__20874,self__.fedges,self__.fsuccessors,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20885.call(null,new cljs.core.Keyword(null,"fedges","fedges",499673923),expr__20886))){
return (new loom.graph.FlyGraph(self__.fnodes,G__20874,self__.fsuccessors,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20885.call(null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),expr__20886))){
return (new loom.graph.FlyGraph(self__.fnodes,self__.fedges,G__20874,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20885.call(null,new cljs.core.Keyword(null,"start","start",-355208981),expr__20886))){
return (new loom.graph.FlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,G__20874,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.FlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.start,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4470__auto__,G__20874),null));
}
}
}
}
}));

(loom.graph.FlyGraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start","start",-355208981),self__.start,null))], null),self__.__extmap));
}));

(loom.graph.FlyGraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__20874){
var self__ = this;
var this__4460__auto____$1 = this;
return (new loom.graph.FlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.start,G__20874,self__.__extmap,self__.__hash));
}));

(loom.graph.FlyGraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4467__auto__,(0)),cljs.core._nth.call(null,entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(loom.graph.FlyGraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fnodes","fnodes",1004698034,null),new cljs.core.Symbol(null,"fedges","fedges",2140205450,null),new cljs.core.Symbol(null,"fsuccessors","fsuccessors",-826676562,null),new cljs.core.Symbol(null,"start","start",1285322546,null)], null);
}));

(loom.graph.FlyGraph.cljs$lang$type = true);

(loom.graph.FlyGraph.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"loom.graph/FlyGraph",null,(1),null));
}));

(loom.graph.FlyGraph.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write.call(null,writer__4506__auto__,"loom.graph/FlyGraph");
}));

/**
 * Positional factory function for loom.graph/FlyGraph.
 */
loom.graph.__GT_FlyGraph = (function loom$graph$__GT_FlyGraph(fnodes,fedges,fsuccessors,start){
return (new loom.graph.FlyGraph(fnodes,fedges,fsuccessors,start,null,null,null));
});

/**
 * Factory function for loom.graph/FlyGraph, taking a map of keywords to field values.
 */
loom.graph.map__GT_FlyGraph = (function loom$graph$map__GT_FlyGraph(G__20878){
var extmap__4501__auto__ = (function (){var G__20888 = cljs.core.dissoc.call(null,G__20878,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"start","start",-355208981));
if(cljs.core.record_QMARK_.call(null,G__20878)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__20888);
} else {
return G__20888;
}
})();
return (new loom.graph.FlyGraph(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(G__20878),new cljs.core.Keyword(null,"fedges","fedges",499673923).cljs$core$IFn$_invoke$arity$1(G__20878),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207).cljs$core$IFn$_invoke$arity$1(G__20878),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(G__20878),null,cljs.core.not_empty.call(null,extmap__4501__auto__),null));
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
loom.graph.FlyDigraph = (function (fnodes,fedges,fsuccessors,fpredecessors,start,__meta,__extmap,__hash){
this.fnodes = fnodes;
this.fedges = fedges;
this.fsuccessors = fsuccessors;
this.fpredecessors = fpredecessors;
this.start = start;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(loom.graph.FlyDigraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(loom.graph.FlyDigraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k20892,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__20896 = k20892;
var G__20896__$1 = (((G__20896 instanceof cljs.core.Keyword))?G__20896.fqn:null);
switch (G__20896__$1) {
case "fnodes":
return self__.fnodes;

break;
case "fedges":
return self__.fedges;

break;
case "fsuccessors":
return self__.fsuccessors;

break;
case "fpredecessors":
return self__.fpredecessors;

break;
case "start":
return self__.start;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k20892,else__4464__auto__);

}
}));

(loom.graph.FlyDigraph.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4484__auto__,p__20897){
var vec__20898 = p__20897;
var k__4485__auto__ = cljs.core.nth.call(null,vec__20898,(0),null);
var v__4486__auto__ = cljs.core.nth.call(null,vec__20898,(1),null);
return f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__);
}),init__4483__auto__,this__4481__auto____$1);
}));

(loom.graph.FlyDigraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4477__auto__,pr_pair__4479__auto__,"#loom.graph.FlyDigraph{",", ","}",opts__4478__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),self__.fpredecessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",-355208981),self__.start],null))], null),self__.__extmap));
}));

(loom.graph.FlyDigraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20891){
var self__ = this;
var G__20891__$1 = this;
return (new cljs.core.RecordIter((0),G__20891__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),new cljs.core.Keyword(null,"start","start",-355208981)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(loom.graph.FlyDigraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(loom.graph.FlyDigraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.start,self__.__meta,self__.__extmap,self__.__hash));
}));

(loom.graph.FlyDigraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
}));

(loom.graph.FlyDigraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (1981361804 ^ cljs.core.hash_unordered_coll.call(null,coll__4458__auto__));
}).call(null,this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(loom.graph.FlyDigraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this20893,other20894){
var self__ = this;
var this20893__$1 = this;
return (((!((other20894 == null)))) && ((((this20893__$1.constructor === other20894.constructor)) && (((cljs.core._EQ_.call(null,this20893__$1.fnodes,other20894.fnodes)) && (((cljs.core._EQ_.call(null,this20893__$1.fedges,other20894.fedges)) && (((cljs.core._EQ_.call(null,this20893__$1.fsuccessors,other20894.fsuccessors)) && (((cljs.core._EQ_.call(null,this20893__$1.fpredecessors,other20894.fpredecessors)) && (((cljs.core._EQ_.call(null,this20893__$1.start,other20894.start)) && (cljs.core._EQ_.call(null,this20893__$1.__extmap,other20894.__extmap)))))))))))))));
}));

(loom.graph.FlyDigraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fedges","fedges",499673923),null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),null,new cljs.core.Keyword(null,"start","start",-355208981),null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),null,new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.start,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4472__auto__)),null));
}
}));

(loom.graph.FlyDigraph.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k20892){
var self__ = this;
var this__4468__auto____$1 = this;
var G__20901 = k20892;
var G__20901__$1 = (((G__20901 instanceof cljs.core.Keyword))?G__20901.fqn:null);
switch (G__20901__$1) {
case "fnodes":
case "fedges":
case "fsuccessors":
case "fpredecessors":
case "start":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k20892);

}
}));

(loom.graph.FlyDigraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__20891){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__20902 = cljs.core.keyword_identical_QMARK_;
var expr__20903 = k__4470__auto__;
if(cljs.core.truth_(pred__20902.call(null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),expr__20903))){
return (new loom.graph.FlyDigraph(G__20891,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20902.call(null,new cljs.core.Keyword(null,"fedges","fedges",499673923),expr__20903))){
return (new loom.graph.FlyDigraph(self__.fnodes,G__20891,self__.fsuccessors,self__.fpredecessors,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20902.call(null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),expr__20903))){
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,G__20891,self__.fpredecessors,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20902.call(null,new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),expr__20903))){
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,G__20891,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20902.call(null,new cljs.core.Keyword(null,"start","start",-355208981),expr__20903))){
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,G__20891,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.start,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4470__auto__,G__20891),null));
}
}
}
}
}
}));

(loom.graph.FlyDigraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),self__.fpredecessors,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start","start",-355208981),self__.start,null))], null),self__.__extmap));
}));

(loom.graph.FlyDigraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__20891){
var self__ = this;
var this__4460__auto____$1 = this;
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.start,G__20891,self__.__extmap,self__.__hash));
}));

(loom.graph.FlyDigraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4467__auto__,(0)),cljs.core._nth.call(null,entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(loom.graph.FlyDigraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fnodes","fnodes",1004698034,null),new cljs.core.Symbol(null,"fedges","fedges",2140205450,null),new cljs.core.Symbol(null,"fsuccessors","fsuccessors",-826676562,null),new cljs.core.Symbol(null,"fpredecessors","fpredecessors",227702593,null),new cljs.core.Symbol(null,"start","start",1285322546,null)], null);
}));

(loom.graph.FlyDigraph.cljs$lang$type = true);

(loom.graph.FlyDigraph.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"loom.graph/FlyDigraph",null,(1),null));
}));

(loom.graph.FlyDigraph.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write.call(null,writer__4506__auto__,"loom.graph/FlyDigraph");
}));

/**
 * Positional factory function for loom.graph/FlyDigraph.
 */
loom.graph.__GT_FlyDigraph = (function loom$graph$__GT_FlyDigraph(fnodes,fedges,fsuccessors,fpredecessors,start){
return (new loom.graph.FlyDigraph(fnodes,fedges,fsuccessors,fpredecessors,start,null,null,null));
});

/**
 * Factory function for loom.graph/FlyDigraph, taking a map of keywords to field values.
 */
loom.graph.map__GT_FlyDigraph = (function loom$graph$map__GT_FlyDigraph(G__20895){
var extmap__4501__auto__ = (function (){var G__20905 = cljs.core.dissoc.call(null,G__20895,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),new cljs.core.Keyword(null,"start","start",-355208981));
if(cljs.core.record_QMARK_.call(null,G__20895)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__20905);
} else {
return G__20905;
}
})();
return (new loom.graph.FlyDigraph(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(G__20895),new cljs.core.Keyword(null,"fedges","fedges",499673923).cljs$core$IFn$_invoke$arity$1(G__20895),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207).cljs$core$IFn$_invoke$arity$1(G__20895),new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934).cljs$core$IFn$_invoke$arity$1(G__20895),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(G__20895),null,cljs.core.not_empty.call(null,extmap__4501__auto__),null));
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
loom.graph.WeightedFlyGraph = (function (fnodes,fedges,fsuccessors,fweight,start,__meta,__extmap,__hash){
this.fnodes = fnodes;
this.fedges = fedges;
this.fsuccessors = fsuccessors;
this.fweight = fweight;
this.start = start;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(loom.graph.WeightedFlyGraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(loom.graph.WeightedFlyGraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k20909,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__20913 = k20909;
var G__20913__$1 = (((G__20913 instanceof cljs.core.Keyword))?G__20913.fqn:null);
switch (G__20913__$1) {
case "fnodes":
return self__.fnodes;

break;
case "fedges":
return self__.fedges;

break;
case "fsuccessors":
return self__.fsuccessors;

break;
case "fweight":
return self__.fweight;

break;
case "start":
return self__.start;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k20909,else__4464__auto__);

}
}));

(loom.graph.WeightedFlyGraph.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4484__auto__,p__20914){
var vec__20915 = p__20914;
var k__4485__auto__ = cljs.core.nth.call(null,vec__20915,(0),null);
var v__4486__auto__ = cljs.core.nth.call(null,vec__20915,(1),null);
return f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__);
}),init__4483__auto__,this__4481__auto____$1);
}));

(loom.graph.WeightedFlyGraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4477__auto__,pr_pair__4479__auto__,"#loom.graph.WeightedFlyGraph{",", ","}",opts__4478__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fweight","fweight",1299924141),self__.fweight],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",-355208981),self__.start],null))], null),self__.__extmap));
}));

(loom.graph.WeightedFlyGraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20908){
var self__ = this;
var G__20908__$1 = this;
return (new cljs.core.RecordIter((0),G__20908__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"fweight","fweight",1299924141),new cljs.core.Keyword(null,"start","start",-355208981)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(loom.graph.WeightedFlyGraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(loom.graph.WeightedFlyGraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,self__.__hash));
}));

(loom.graph.WeightedFlyGraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
}));

(loom.graph.WeightedFlyGraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (-1357917791 ^ cljs.core.hash_unordered_coll.call(null,coll__4458__auto__));
}).call(null,this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(loom.graph.WeightedFlyGraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this20910,other20911){
var self__ = this;
var this20910__$1 = this;
return (((!((other20911 == null)))) && ((((this20910__$1.constructor === other20911.constructor)) && (((cljs.core._EQ_.call(null,this20910__$1.fnodes,other20911.fnodes)) && (((cljs.core._EQ_.call(null,this20910__$1.fedges,other20911.fedges)) && (((cljs.core._EQ_.call(null,this20910__$1.fsuccessors,other20911.fsuccessors)) && (((cljs.core._EQ_.call(null,this20910__$1.fweight,other20911.fweight)) && (((cljs.core._EQ_.call(null,this20910__$1.start,other20911.start)) && (cljs.core._EQ_.call(null,this20910__$1.__extmap,other20911.__extmap)))))))))))))));
}));

(loom.graph.WeightedFlyGraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fedges","fedges",499673923),null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),null,new cljs.core.Keyword(null,"start","start",-355208981),null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),null,new cljs.core.Keyword(null,"fweight","fweight",1299924141),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fweight,self__.start,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4472__auto__)),null));
}
}));

(loom.graph.WeightedFlyGraph.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k20909){
var self__ = this;
var this__4468__auto____$1 = this;
var G__20918 = k20909;
var G__20918__$1 = (((G__20918 instanceof cljs.core.Keyword))?G__20918.fqn:null);
switch (G__20918__$1) {
case "fnodes":
case "fedges":
case "fsuccessors":
case "fweight":
case "start":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k20909);

}
}));

(loom.graph.WeightedFlyGraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__20908){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__20919 = cljs.core.keyword_identical_QMARK_;
var expr__20920 = k__4470__auto__;
if(cljs.core.truth_(pred__20919.call(null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),expr__20920))){
return (new loom.graph.WeightedFlyGraph(G__20908,self__.fedges,self__.fsuccessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20919.call(null,new cljs.core.Keyword(null,"fedges","fedges",499673923),expr__20920))){
return (new loom.graph.WeightedFlyGraph(self__.fnodes,G__20908,self__.fsuccessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20919.call(null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),expr__20920))){
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,G__20908,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20919.call(null,new cljs.core.Keyword(null,"fweight","fweight",1299924141),expr__20920))){
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,G__20908,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20919.call(null,new cljs.core.Keyword(null,"start","start",-355208981),expr__20920))){
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fweight,G__20908,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fweight,self__.start,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4470__auto__,G__20908),null));
}
}
}
}
}
}));

(loom.graph.WeightedFlyGraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fweight","fweight",1299924141),self__.fweight,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start","start",-355208981),self__.start,null))], null),self__.__extmap));
}));

(loom.graph.WeightedFlyGraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__20908){
var self__ = this;
var this__4460__auto____$1 = this;
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fweight,self__.start,G__20908,self__.__extmap,self__.__hash));
}));

(loom.graph.WeightedFlyGraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4467__auto__,(0)),cljs.core._nth.call(null,entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(loom.graph.WeightedFlyGraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fnodes","fnodes",1004698034,null),new cljs.core.Symbol(null,"fedges","fedges",2140205450,null),new cljs.core.Symbol(null,"fsuccessors","fsuccessors",-826676562,null),new cljs.core.Symbol(null,"fweight","fweight",-1354511628,null),new cljs.core.Symbol(null,"start","start",1285322546,null)], null);
}));

(loom.graph.WeightedFlyGraph.cljs$lang$type = true);

(loom.graph.WeightedFlyGraph.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"loom.graph/WeightedFlyGraph",null,(1),null));
}));

(loom.graph.WeightedFlyGraph.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write.call(null,writer__4506__auto__,"loom.graph/WeightedFlyGraph");
}));

/**
 * Positional factory function for loom.graph/WeightedFlyGraph.
 */
loom.graph.__GT_WeightedFlyGraph = (function loom$graph$__GT_WeightedFlyGraph(fnodes,fedges,fsuccessors,fweight,start){
return (new loom.graph.WeightedFlyGraph(fnodes,fedges,fsuccessors,fweight,start,null,null,null));
});

/**
 * Factory function for loom.graph/WeightedFlyGraph, taking a map of keywords to field values.
 */
loom.graph.map__GT_WeightedFlyGraph = (function loom$graph$map__GT_WeightedFlyGraph(G__20912){
var extmap__4501__auto__ = (function (){var G__20922 = cljs.core.dissoc.call(null,G__20912,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"fweight","fweight",1299924141),new cljs.core.Keyword(null,"start","start",-355208981));
if(cljs.core.record_QMARK_.call(null,G__20912)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__20922);
} else {
return G__20922;
}
})();
return (new loom.graph.WeightedFlyGraph(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(G__20912),new cljs.core.Keyword(null,"fedges","fedges",499673923).cljs$core$IFn$_invoke$arity$1(G__20912),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207).cljs$core$IFn$_invoke$arity$1(G__20912),new cljs.core.Keyword(null,"fweight","fweight",1299924141).cljs$core$IFn$_invoke$arity$1(G__20912),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(G__20912),null,cljs.core.not_empty.call(null,extmap__4501__auto__),null));
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
loom.graph.WeightedFlyDigraph = (function (fnodes,fedges,fsuccessors,fpredecessors,fweight,start,__meta,__extmap,__hash){
this.fnodes = fnodes;
this.fedges = fedges;
this.fsuccessors = fsuccessors;
this.fpredecessors = fpredecessors;
this.fweight = fweight;
this.start = start;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(loom.graph.WeightedFlyDigraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(loom.graph.WeightedFlyDigraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k20926,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__20930 = k20926;
var G__20930__$1 = (((G__20930 instanceof cljs.core.Keyword))?G__20930.fqn:null);
switch (G__20930__$1) {
case "fnodes":
return self__.fnodes;

break;
case "fedges":
return self__.fedges;

break;
case "fsuccessors":
return self__.fsuccessors;

break;
case "fpredecessors":
return self__.fpredecessors;

break;
case "fweight":
return self__.fweight;

break;
case "start":
return self__.start;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k20926,else__4464__auto__);

}
}));

(loom.graph.WeightedFlyDigraph.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4484__auto__,p__20931){
var vec__20932 = p__20931;
var k__4485__auto__ = cljs.core.nth.call(null,vec__20932,(0),null);
var v__4486__auto__ = cljs.core.nth.call(null,vec__20932,(1),null);
return f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__);
}),init__4483__auto__,this__4481__auto____$1);
}));

(loom.graph.WeightedFlyDigraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4477__auto__,pr_pair__4479__auto__,"#loom.graph.WeightedFlyDigraph{",", ","}",opts__4478__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),self__.fpredecessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fweight","fweight",1299924141),self__.fweight],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",-355208981),self__.start],null))], null),self__.__extmap));
}));

(loom.graph.WeightedFlyDigraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20925){
var self__ = this;
var G__20925__$1 = this;
return (new cljs.core.RecordIter((0),G__20925__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),new cljs.core.Keyword(null,"fweight","fweight",1299924141),new cljs.core.Keyword(null,"start","start",-355208981)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(loom.graph.WeightedFlyDigraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(loom.graph.WeightedFlyDigraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,self__.__hash));
}));

(loom.graph.WeightedFlyDigraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (6 + cljs.core.count.call(null,self__.__extmap));
}));

(loom.graph.WeightedFlyDigraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (788097524 ^ cljs.core.hash_unordered_coll.call(null,coll__4458__auto__));
}).call(null,this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(loom.graph.WeightedFlyDigraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this20927,other20928){
var self__ = this;
var this20927__$1 = this;
return (((!((other20928 == null)))) && ((((this20927__$1.constructor === other20928.constructor)) && (((cljs.core._EQ_.call(null,this20927__$1.fnodes,other20928.fnodes)) && (((cljs.core._EQ_.call(null,this20927__$1.fedges,other20928.fedges)) && (((cljs.core._EQ_.call(null,this20927__$1.fsuccessors,other20928.fsuccessors)) && (((cljs.core._EQ_.call(null,this20927__$1.fpredecessors,other20928.fpredecessors)) && (((cljs.core._EQ_.call(null,this20927__$1.fweight,other20928.fweight)) && (((cljs.core._EQ_.call(null,this20927__$1.start,other20928.start)) && (cljs.core._EQ_.call(null,this20927__$1.__extmap,other20928.__extmap)))))))))))))))));
}));

(loom.graph.WeightedFlyDigraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"fedges","fedges",499673923),null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),null,new cljs.core.Keyword(null,"start","start",-355208981),null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),null,new cljs.core.Keyword(null,"fweight","fweight",1299924141),null,new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.fweight,self__.start,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4472__auto__)),null));
}
}));

(loom.graph.WeightedFlyDigraph.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k20926){
var self__ = this;
var this__4468__auto____$1 = this;
var G__20935 = k20926;
var G__20935__$1 = (((G__20935 instanceof cljs.core.Keyword))?G__20935.fqn:null);
switch (G__20935__$1) {
case "fnodes":
case "fedges":
case "fsuccessors":
case "fpredecessors":
case "fweight":
case "start":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k20926);

}
}));

(loom.graph.WeightedFlyDigraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__20925){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__20936 = cljs.core.keyword_identical_QMARK_;
var expr__20937 = k__4470__auto__;
if(cljs.core.truth_(pred__20936.call(null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),expr__20937))){
return (new loom.graph.WeightedFlyDigraph(G__20925,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20936.call(null,new cljs.core.Keyword(null,"fedges","fedges",499673923),expr__20937))){
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,G__20925,self__.fsuccessors,self__.fpredecessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20936.call(null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),expr__20937))){
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,G__20925,self__.fpredecessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20936.call(null,new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),expr__20937))){
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,G__20925,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20936.call(null,new cljs.core.Keyword(null,"fweight","fweight",1299924141),expr__20937))){
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,G__20925,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20936.call(null,new cljs.core.Keyword(null,"start","start",-355208981),expr__20937))){
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.fweight,G__20925,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.fweight,self__.start,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4470__auto__,G__20925),null));
}
}
}
}
}
}
}));

(loom.graph.WeightedFlyDigraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),self__.fpredecessors,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fweight","fweight",1299924141),self__.fweight,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start","start",-355208981),self__.start,null))], null),self__.__extmap));
}));

(loom.graph.WeightedFlyDigraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__20925){
var self__ = this;
var this__4460__auto____$1 = this;
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.fweight,self__.start,G__20925,self__.__extmap,self__.__hash));
}));

(loom.graph.WeightedFlyDigraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4467__auto__,(0)),cljs.core._nth.call(null,entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(loom.graph.WeightedFlyDigraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fnodes","fnodes",1004698034,null),new cljs.core.Symbol(null,"fedges","fedges",2140205450,null),new cljs.core.Symbol(null,"fsuccessors","fsuccessors",-826676562,null),new cljs.core.Symbol(null,"fpredecessors","fpredecessors",227702593,null),new cljs.core.Symbol(null,"fweight","fweight",-1354511628,null),new cljs.core.Symbol(null,"start","start",1285322546,null)], null);
}));

(loom.graph.WeightedFlyDigraph.cljs$lang$type = true);

(loom.graph.WeightedFlyDigraph.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"loom.graph/WeightedFlyDigraph",null,(1),null));
}));

(loom.graph.WeightedFlyDigraph.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write.call(null,writer__4506__auto__,"loom.graph/WeightedFlyDigraph");
}));

/**
 * Positional factory function for loom.graph/WeightedFlyDigraph.
 */
loom.graph.__GT_WeightedFlyDigraph = (function loom$graph$__GT_WeightedFlyDigraph(fnodes,fedges,fsuccessors,fpredecessors,fweight,start){
return (new loom.graph.WeightedFlyDigraph(fnodes,fedges,fsuccessors,fpredecessors,fweight,start,null,null,null));
});

/**
 * Factory function for loom.graph/WeightedFlyDigraph, taking a map of keywords to field values.
 */
loom.graph.map__GT_WeightedFlyDigraph = (function loom$graph$map__GT_WeightedFlyDigraph(G__20929){
var extmap__4501__auto__ = (function (){var G__20939 = cljs.core.dissoc.call(null,G__20929,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),new cljs.core.Keyword(null,"fweight","fweight",1299924141),new cljs.core.Keyword(null,"start","start",-355208981));
if(cljs.core.record_QMARK_.call(null,G__20929)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__20939);
} else {
return G__20939;
}
})();
return (new loom.graph.WeightedFlyDigraph(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(G__20929),new cljs.core.Keyword(null,"fedges","fedges",499673923).cljs$core$IFn$_invoke$arity$1(G__20929),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207).cljs$core$IFn$_invoke$arity$1(G__20929),new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934).cljs$core$IFn$_invoke$arity$1(G__20929),new cljs.core.Keyword(null,"fweight","fweight",1299924141).cljs$core$IFn$_invoke$arity$1(G__20929),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(G__20929),null,cljs.core.not_empty.call(null,extmap__4501__auto__),null));
});

(loom.graph.FlyGraph.prototype.loom$graph$Graph$ = cljs.core.PROTOCOL_SENTINEL);

(loom.graph.FlyGraph.prototype.loom$graph$Graph$nodes$arity$1 = (function (g){
var g__$1 = this;
if(cljs.core.truth_((function (){var or__4212__auto__ = g__$1.fnodes;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.not.call(null,g__$1.start);
}
})())){
return loom.graph.call_or_return.call(null,g__$1.fnodes);
} else {
return loom.alg_generic.bf_traverse.call(null,loom.graph.successors.call(null,g__$1),g__$1.start);
}
}));

(loom.graph.FlyGraph.prototype.loom$graph$Graph$edges$arity$1 = (function (g){
var g__$1 = this;
if(cljs.core.truth_(g__$1.fedges)){
return loom.graph.call_or_return.call(null,g__$1.fedges);
} else {
var iter__4611__auto__ = (function loom$graph$iter__20942(s__20943){
return (new cljs.core.LazySeq(null,(function (){
var s__20943__$1 = s__20943;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__20943__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var n = cljs.core.first.call(null,xs__6308__auto__);
var iterys__4607__auto__ = ((function (s__20943__$1,n,xs__6308__auto__,temp__5753__auto__,g__$1){
return (function loom$graph$iter__20942_$_iter__20944(s__20945){
return (new cljs.core.LazySeq(null,((function (s__20943__$1,n,xs__6308__auto__,temp__5753__auto__,g__$1){
return (function (){
var s__20945__$1 = s__20945;
while(true){
var temp__5753__auto____$1 = cljs.core.seq.call(null,s__20945__$1);
if(temp__5753__auto____$1){
var s__20945__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20945__$2)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,s__20945__$2);
var size__4610__auto__ = cljs.core.count.call(null,c__4609__auto__);
var b__20947 = cljs.core.chunk_buffer.call(null,size__4610__auto__);
if((function (){var i__20946 = (0);
while(true){
if((i__20946 < size__4610__auto__)){
var nbr = cljs.core._nth.call(null,c__4609__auto__,i__20946);
cljs.core.chunk_append.call(null,b__20947,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null));

var G__20952 = (i__20946 + (1));
i__20946 = G__20952;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20947),loom$graph$iter__20942_$_iter__20944.call(null,cljs.core.chunk_rest.call(null,s__20945__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20947),null);
}
} else {
var nbr = cljs.core.first.call(null,s__20945__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null),loom$graph$iter__20942_$_iter__20944.call(null,cljs.core.rest.call(null,s__20945__$2)));
}
} else {
return null;
}
break;
}
});})(s__20943__$1,n,xs__6308__auto__,temp__5753__auto__,g__$1))
,null,null));
});})(s__20943__$1,n,xs__6308__auto__,temp__5753__auto__,g__$1))
;
var fs__4608__auto__ = cljs.core.seq.call(null,iterys__4607__auto__.call(null,loom.graph.successors.call(null,g__$1,n)));
if(fs__4608__auto__){
return cljs.core.concat.call(null,fs__4608__auto__,loom$graph$iter__20942.call(null,cljs.core.rest.call(null,s__20943__$1)));
} else {
var G__20953 = cljs.core.rest.call(null,s__20943__$1);
s__20943__$1 = G__20953;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__.call(null,loom.graph.nodes.call(null,g__$1));
}
}));

(loom.graph.FlyGraph.prototype.loom$graph$Graph$successors_STAR_$arity$2 = (function (g,node){
var g__$1 = this;
return loom.graph.call_or_return.call(null,g__$1.fsuccessors,node);
}));

(loom.graph.FlyGraph.prototype.loom$graph$Graph$out_degree$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.count.call(null,loom.graph.successors.call(null,g__$1,node));
}));

(loom.graph.FlyGraph.prototype.loom$graph$Graph$out_edges$arity$2 = (function (g,node){
var g__$1 = this;
var iter__4611__auto__ = (function loom$graph$iter__20948(s__20949){
return (new cljs.core.LazySeq(null,(function (){
var s__20949__$1 = s__20949;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__20949__$1);
if(temp__5753__auto__){
var s__20949__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20949__$2)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,s__20949__$2);
var size__4610__auto__ = cljs.core.count.call(null,c__4609__auto__);
var b__20951 = cljs.core.chunk_buffer.call(null,size__4610__auto__);
if((function (){var i__20950 = (0);
while(true){
if((i__20950 < size__4610__auto__)){
var n2 = cljs.core._nth.call(null,c__4609__auto__,i__20950);
cljs.core.chunk_append.call(null,b__20951,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__20954 = (i__20950 + (1));
i__20950 = G__20954;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20951),loom$graph$iter__20948.call(null,cljs.core.chunk_rest.call(null,s__20949__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20951),null);
}
} else {
var n2 = cljs.core.first.call(null,s__20949__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__20948.call(null,cljs.core.rest.call(null,s__20949__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__.call(null,loom.graph.successors.call(null,g__$1,node));
}));

(loom.graph.FlyGraph.prototype.loom$graph$Graph$has_node_QMARK_$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([node]),loom.graph.nodes.call(null,g__$1));
}));

(loom.graph.FlyGraph.prototype.loom$graph$Graph$has_edge_QMARK_$arity$3 = (function (g,n1,n2){
var g__$1 = this;
return cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n1,n2], null)]),loom.graph.edges.call(null,g__$1));
}));
(loom.graph.FlyDigraph.prototype.loom$graph$Graph$ = cljs.core.PROTOCOL_SENTINEL);

(loom.graph.FlyDigraph.prototype.loom$graph$Graph$nodes$arity$1 = (function (g){
var g__$1 = this;
if(cljs.core.truth_((function (){var or__4212__auto__ = g__$1.fnodes;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.not.call(null,g__$1.start);
}
})())){
return loom.graph.call_or_return.call(null,g__$1.fnodes);
} else {
return loom.alg_generic.bf_traverse.call(null,loom.graph.successors.call(null,g__$1),g__$1.start);
}
}));

(loom.graph.FlyDigraph.prototype.loom$graph$Graph$edges$arity$1 = (function (g){
var g__$1 = this;
if(cljs.core.truth_(g__$1.fedges)){
return loom.graph.call_or_return.call(null,g__$1.fedges);
} else {
var iter__4611__auto__ = (function loom$graph$iter__20955(s__20956){
return (new cljs.core.LazySeq(null,(function (){
var s__20956__$1 = s__20956;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__20956__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var n = cljs.core.first.call(null,xs__6308__auto__);
var iterys__4607__auto__ = ((function (s__20956__$1,n,xs__6308__auto__,temp__5753__auto__,g__$1){
return (function loom$graph$iter__20955_$_iter__20957(s__20958){
return (new cljs.core.LazySeq(null,((function (s__20956__$1,n,xs__6308__auto__,temp__5753__auto__,g__$1){
return (function (){
var s__20958__$1 = s__20958;
while(true){
var temp__5753__auto____$1 = cljs.core.seq.call(null,s__20958__$1);
if(temp__5753__auto____$1){
var s__20958__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20958__$2)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,s__20958__$2);
var size__4610__auto__ = cljs.core.count.call(null,c__4609__auto__);
var b__20960 = cljs.core.chunk_buffer.call(null,size__4610__auto__);
if((function (){var i__20959 = (0);
while(true){
if((i__20959 < size__4610__auto__)){
var nbr = cljs.core._nth.call(null,c__4609__auto__,i__20959);
cljs.core.chunk_append.call(null,b__20960,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null));

var G__20969 = (i__20959 + (1));
i__20959 = G__20969;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20960),loom$graph$iter__20955_$_iter__20957.call(null,cljs.core.chunk_rest.call(null,s__20958__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20960),null);
}
} else {
var nbr = cljs.core.first.call(null,s__20958__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null),loom$graph$iter__20955_$_iter__20957.call(null,cljs.core.rest.call(null,s__20958__$2)));
}
} else {
return null;
}
break;
}
});})(s__20956__$1,n,xs__6308__auto__,temp__5753__auto__,g__$1))
,null,null));
});})(s__20956__$1,n,xs__6308__auto__,temp__5753__auto__,g__$1))
;
var fs__4608__auto__ = cljs.core.seq.call(null,iterys__4607__auto__.call(null,loom.graph.successors.call(null,g__$1,n)));
if(fs__4608__auto__){
return cljs.core.concat.call(null,fs__4608__auto__,loom$graph$iter__20955.call(null,cljs.core.rest.call(null,s__20956__$1)));
} else {
var G__20970 = cljs.core.rest.call(null,s__20956__$1);
s__20956__$1 = G__20970;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__.call(null,loom.graph.nodes.call(null,g__$1));
}
}));

(loom.graph.FlyDigraph.prototype.loom$graph$Graph$successors_STAR_$arity$2 = (function (g,node){
var g__$1 = this;
return loom.graph.call_or_return.call(null,g__$1.fsuccessors,node);
}));

(loom.graph.FlyDigraph.prototype.loom$graph$Graph$out_degree$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.count.call(null,loom.graph.successors.call(null,g__$1,node));
}));

(loom.graph.FlyDigraph.prototype.loom$graph$Graph$out_edges$arity$2 = (function (g,node){
var g__$1 = this;
var iter__4611__auto__ = (function loom$graph$iter__20961(s__20962){
return (new cljs.core.LazySeq(null,(function (){
var s__20962__$1 = s__20962;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__20962__$1);
if(temp__5753__auto__){
var s__20962__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20962__$2)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,s__20962__$2);
var size__4610__auto__ = cljs.core.count.call(null,c__4609__auto__);
var b__20964 = cljs.core.chunk_buffer.call(null,size__4610__auto__);
if((function (){var i__20963 = (0);
while(true){
if((i__20963 < size__4610__auto__)){
var n2 = cljs.core._nth.call(null,c__4609__auto__,i__20963);
cljs.core.chunk_append.call(null,b__20964,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__20971 = (i__20963 + (1));
i__20963 = G__20971;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20964),loom$graph$iter__20961.call(null,cljs.core.chunk_rest.call(null,s__20962__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20964),null);
}
} else {
var n2 = cljs.core.first.call(null,s__20962__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__20961.call(null,cljs.core.rest.call(null,s__20962__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__.call(null,loom.graph.successors.call(null,g__$1,node));
}));

(loom.graph.FlyDigraph.prototype.loom$graph$Graph$has_node_QMARK_$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([node]),loom.graph.nodes.call(null,g__$1));
}));

(loom.graph.FlyDigraph.prototype.loom$graph$Graph$has_edge_QMARK_$arity$3 = (function (g,n1,n2){
var g__$1 = this;
return cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n1,n2], null)]),loom.graph.edges.call(null,g__$1));
}));

(loom.graph.FlyDigraph.prototype.loom$graph$Digraph$ = cljs.core.PROTOCOL_SENTINEL);

(loom.graph.FlyDigraph.prototype.loom$graph$Digraph$predecessors_STAR_$arity$2 = (function (g,node){
var g__$1 = this;
return loom.graph.call_or_return.call(null,g__$1.fpredecessors,node);
}));

(loom.graph.FlyDigraph.prototype.loom$graph$Digraph$in_degree$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.count.call(null,loom.graph.predecessors.call(null,g__$1,node));
}));

(loom.graph.FlyDigraph.prototype.loom$graph$Digraph$in_edges$arity$2 = (function (g,node){
var g__$1 = this;
var iter__4611__auto__ = (function loom$graph$iter__20965(s__20966){
return (new cljs.core.LazySeq(null,(function (){
var s__20966__$1 = s__20966;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__20966__$1);
if(temp__5753__auto__){
var s__20966__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20966__$2)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,s__20966__$2);
var size__4610__auto__ = cljs.core.count.call(null,c__4609__auto__);
var b__20968 = cljs.core.chunk_buffer.call(null,size__4610__auto__);
if((function (){var i__20967 = (0);
while(true){
if((i__20967 < size__4610__auto__)){
var n2 = cljs.core._nth.call(null,c__4609__auto__,i__20967);
cljs.core.chunk_append.call(null,b__20968,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null));

var G__20972 = (i__20967 + (1));
i__20967 = G__20972;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20968),loom$graph$iter__20965.call(null,cljs.core.chunk_rest.call(null,s__20966__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20968),null);
}
} else {
var n2 = cljs.core.first.call(null,s__20966__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null),loom$graph$iter__20965.call(null,cljs.core.rest.call(null,s__20966__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__.call(null,loom.graph.predecessors.call(null,g__$1,node));
}));
(loom.graph.WeightedFlyGraph.prototype.loom$graph$Graph$ = cljs.core.PROTOCOL_SENTINEL);

(loom.graph.WeightedFlyGraph.prototype.loom$graph$Graph$nodes$arity$1 = (function (g){
var g__$1 = this;
if(cljs.core.truth_((function (){var or__4212__auto__ = g__$1.fnodes;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.not.call(null,g__$1.start);
}
})())){
return loom.graph.call_or_return.call(null,g__$1.fnodes);
} else {
return loom.alg_generic.bf_traverse.call(null,loom.graph.successors.call(null,g__$1),g__$1.start);
}
}));

(loom.graph.WeightedFlyGraph.prototype.loom$graph$Graph$edges$arity$1 = (function (g){
var g__$1 = this;
if(cljs.core.truth_(g__$1.fedges)){
return loom.graph.call_or_return.call(null,g__$1.fedges);
} else {
var iter__4611__auto__ = (function loom$graph$iter__20973(s__20974){
return (new cljs.core.LazySeq(null,(function (){
var s__20974__$1 = s__20974;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__20974__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var n = cljs.core.first.call(null,xs__6308__auto__);
var iterys__4607__auto__ = ((function (s__20974__$1,n,xs__6308__auto__,temp__5753__auto__,g__$1){
return (function loom$graph$iter__20973_$_iter__20975(s__20976){
return (new cljs.core.LazySeq(null,((function (s__20974__$1,n,xs__6308__auto__,temp__5753__auto__,g__$1){
return (function (){
var s__20976__$1 = s__20976;
while(true){
var temp__5753__auto____$1 = cljs.core.seq.call(null,s__20976__$1);
if(temp__5753__auto____$1){
var s__20976__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20976__$2)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,s__20976__$2);
var size__4610__auto__ = cljs.core.count.call(null,c__4609__auto__);
var b__20978 = cljs.core.chunk_buffer.call(null,size__4610__auto__);
if((function (){var i__20977 = (0);
while(true){
if((i__20977 < size__4610__auto__)){
var nbr = cljs.core._nth.call(null,c__4609__auto__,i__20977);
cljs.core.chunk_append.call(null,b__20978,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null));

var G__20983 = (i__20977 + (1));
i__20977 = G__20983;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20978),loom$graph$iter__20973_$_iter__20975.call(null,cljs.core.chunk_rest.call(null,s__20976__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20978),null);
}
} else {
var nbr = cljs.core.first.call(null,s__20976__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null),loom$graph$iter__20973_$_iter__20975.call(null,cljs.core.rest.call(null,s__20976__$2)));
}
} else {
return null;
}
break;
}
});})(s__20974__$1,n,xs__6308__auto__,temp__5753__auto__,g__$1))
,null,null));
});})(s__20974__$1,n,xs__6308__auto__,temp__5753__auto__,g__$1))
;
var fs__4608__auto__ = cljs.core.seq.call(null,iterys__4607__auto__.call(null,loom.graph.successors.call(null,g__$1,n)));
if(fs__4608__auto__){
return cljs.core.concat.call(null,fs__4608__auto__,loom$graph$iter__20973.call(null,cljs.core.rest.call(null,s__20974__$1)));
} else {
var G__20984 = cljs.core.rest.call(null,s__20974__$1);
s__20974__$1 = G__20984;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__.call(null,loom.graph.nodes.call(null,g__$1));
}
}));

(loom.graph.WeightedFlyGraph.prototype.loom$graph$Graph$successors_STAR_$arity$2 = (function (g,node){
var g__$1 = this;
return loom.graph.call_or_return.call(null,g__$1.fsuccessors,node);
}));

(loom.graph.WeightedFlyGraph.prototype.loom$graph$Graph$out_degree$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.count.call(null,loom.graph.successors.call(null,g__$1,node));
}));

(loom.graph.WeightedFlyGraph.prototype.loom$graph$Graph$out_edges$arity$2 = (function (g,node){
var g__$1 = this;
var iter__4611__auto__ = (function loom$graph$iter__20979(s__20980){
return (new cljs.core.LazySeq(null,(function (){
var s__20980__$1 = s__20980;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__20980__$1);
if(temp__5753__auto__){
var s__20980__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20980__$2)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,s__20980__$2);
var size__4610__auto__ = cljs.core.count.call(null,c__4609__auto__);
var b__20982 = cljs.core.chunk_buffer.call(null,size__4610__auto__);
if((function (){var i__20981 = (0);
while(true){
if((i__20981 < size__4610__auto__)){
var n2 = cljs.core._nth.call(null,c__4609__auto__,i__20981);
cljs.core.chunk_append.call(null,b__20982,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__20985 = (i__20981 + (1));
i__20981 = G__20985;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20982),loom$graph$iter__20979.call(null,cljs.core.chunk_rest.call(null,s__20980__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20982),null);
}
} else {
var n2 = cljs.core.first.call(null,s__20980__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__20979.call(null,cljs.core.rest.call(null,s__20980__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__.call(null,loom.graph.successors.call(null,g__$1,node));
}));

(loom.graph.WeightedFlyGraph.prototype.loom$graph$Graph$has_node_QMARK_$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([node]),loom.graph.nodes.call(null,g__$1));
}));

(loom.graph.WeightedFlyGraph.prototype.loom$graph$Graph$has_edge_QMARK_$arity$3 = (function (g,n1,n2){
var g__$1 = this;
return cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n1,n2], null)]),loom.graph.edges.call(null,g__$1));
}));

(loom.graph.WeightedFlyGraph.prototype.loom$graph$WeightedGraph$ = cljs.core.PROTOCOL_SENTINEL);

(loom.graph.WeightedFlyGraph.prototype.loom$graph$WeightedGraph$weight_STAR_$arity$2 = (function (g,e){
var g__$1 = this;
return loom.graph.weight.call(null,g__$1,loom.graph.src.call(null,e),loom.graph.dest.call(null,e));
}));

(loom.graph.WeightedFlyGraph.prototype.loom$graph$WeightedGraph$weight_STAR_$arity$3 = (function (g,n1,n2){
var g__$1 = this;
return loom.graph.call_or_return.call(null,g__$1.fweight,n1,n2);
}));
(loom.graph.WeightedFlyDigraph.prototype.loom$graph$Graph$ = cljs.core.PROTOCOL_SENTINEL);

(loom.graph.WeightedFlyDigraph.prototype.loom$graph$Graph$nodes$arity$1 = (function (g){
var g__$1 = this;
if(cljs.core.truth_((function (){var or__4212__auto__ = g__$1.fnodes;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.not.call(null,g__$1.start);
}
})())){
return loom.graph.call_or_return.call(null,g__$1.fnodes);
} else {
return loom.alg_generic.bf_traverse.call(null,loom.graph.successors.call(null,g__$1),g__$1.start);
}
}));

(loom.graph.WeightedFlyDigraph.prototype.loom$graph$Graph$edges$arity$1 = (function (g){
var g__$1 = this;
if(cljs.core.truth_(g__$1.fedges)){
return loom.graph.call_or_return.call(null,g__$1.fedges);
} else {
var iter__4611__auto__ = (function loom$graph$iter__20986(s__20987){
return (new cljs.core.LazySeq(null,(function (){
var s__20987__$1 = s__20987;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__20987__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var n = cljs.core.first.call(null,xs__6308__auto__);
var iterys__4607__auto__ = ((function (s__20987__$1,n,xs__6308__auto__,temp__5753__auto__,g__$1){
return (function loom$graph$iter__20986_$_iter__20988(s__20989){
return (new cljs.core.LazySeq(null,((function (s__20987__$1,n,xs__6308__auto__,temp__5753__auto__,g__$1){
return (function (){
var s__20989__$1 = s__20989;
while(true){
var temp__5753__auto____$1 = cljs.core.seq.call(null,s__20989__$1);
if(temp__5753__auto____$1){
var s__20989__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20989__$2)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,s__20989__$2);
var size__4610__auto__ = cljs.core.count.call(null,c__4609__auto__);
var b__20991 = cljs.core.chunk_buffer.call(null,size__4610__auto__);
if((function (){var i__20990 = (0);
while(true){
if((i__20990 < size__4610__auto__)){
var nbr = cljs.core._nth.call(null,c__4609__auto__,i__20990);
cljs.core.chunk_append.call(null,b__20991,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null));

var G__21000 = (i__20990 + (1));
i__20990 = G__21000;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20991),loom$graph$iter__20986_$_iter__20988.call(null,cljs.core.chunk_rest.call(null,s__20989__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20991),null);
}
} else {
var nbr = cljs.core.first.call(null,s__20989__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null),loom$graph$iter__20986_$_iter__20988.call(null,cljs.core.rest.call(null,s__20989__$2)));
}
} else {
return null;
}
break;
}
});})(s__20987__$1,n,xs__6308__auto__,temp__5753__auto__,g__$1))
,null,null));
});})(s__20987__$1,n,xs__6308__auto__,temp__5753__auto__,g__$1))
;
var fs__4608__auto__ = cljs.core.seq.call(null,iterys__4607__auto__.call(null,loom.graph.successors.call(null,g__$1,n)));
if(fs__4608__auto__){
return cljs.core.concat.call(null,fs__4608__auto__,loom$graph$iter__20986.call(null,cljs.core.rest.call(null,s__20987__$1)));
} else {
var G__21001 = cljs.core.rest.call(null,s__20987__$1);
s__20987__$1 = G__21001;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__.call(null,loom.graph.nodes.call(null,g__$1));
}
}));

(loom.graph.WeightedFlyDigraph.prototype.loom$graph$Graph$successors_STAR_$arity$2 = (function (g,node){
var g__$1 = this;
return loom.graph.call_or_return.call(null,g__$1.fsuccessors,node);
}));

(loom.graph.WeightedFlyDigraph.prototype.loom$graph$Graph$out_degree$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.count.call(null,loom.graph.successors.call(null,g__$1,node));
}));

(loom.graph.WeightedFlyDigraph.prototype.loom$graph$Graph$out_edges$arity$2 = (function (g,node){
var g__$1 = this;
var iter__4611__auto__ = (function loom$graph$iter__20992(s__20993){
return (new cljs.core.LazySeq(null,(function (){
var s__20993__$1 = s__20993;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__20993__$1);
if(temp__5753__auto__){
var s__20993__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20993__$2)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,s__20993__$2);
var size__4610__auto__ = cljs.core.count.call(null,c__4609__auto__);
var b__20995 = cljs.core.chunk_buffer.call(null,size__4610__auto__);
if((function (){var i__20994 = (0);
while(true){
if((i__20994 < size__4610__auto__)){
var n2 = cljs.core._nth.call(null,c__4609__auto__,i__20994);
cljs.core.chunk_append.call(null,b__20995,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__21002 = (i__20994 + (1));
i__20994 = G__21002;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20995),loom$graph$iter__20992.call(null,cljs.core.chunk_rest.call(null,s__20993__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20995),null);
}
} else {
var n2 = cljs.core.first.call(null,s__20993__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__20992.call(null,cljs.core.rest.call(null,s__20993__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__.call(null,loom.graph.successors.call(null,g__$1,node));
}));

(loom.graph.WeightedFlyDigraph.prototype.loom$graph$Graph$has_node_QMARK_$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([node]),loom.graph.nodes.call(null,g__$1));
}));

(loom.graph.WeightedFlyDigraph.prototype.loom$graph$Graph$has_edge_QMARK_$arity$3 = (function (g,n1,n2){
var g__$1 = this;
return cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n1,n2], null)]),loom.graph.edges.call(null,g__$1));
}));

(loom.graph.WeightedFlyDigraph.prototype.loom$graph$Digraph$ = cljs.core.PROTOCOL_SENTINEL);

(loom.graph.WeightedFlyDigraph.prototype.loom$graph$Digraph$predecessors_STAR_$arity$2 = (function (g,node){
var g__$1 = this;
return loom.graph.call_or_return.call(null,g__$1.fpredecessors,node);
}));

(loom.graph.WeightedFlyDigraph.prototype.loom$graph$Digraph$in_degree$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.count.call(null,loom.graph.predecessors.call(null,g__$1,node));
}));

(loom.graph.WeightedFlyDigraph.prototype.loom$graph$Digraph$in_edges$arity$2 = (function (g,node){
var g__$1 = this;
var iter__4611__auto__ = (function loom$graph$iter__20996(s__20997){
return (new cljs.core.LazySeq(null,(function (){
var s__20997__$1 = s__20997;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__20997__$1);
if(temp__5753__auto__){
var s__20997__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20997__$2)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,s__20997__$2);
var size__4610__auto__ = cljs.core.count.call(null,c__4609__auto__);
var b__20999 = cljs.core.chunk_buffer.call(null,size__4610__auto__);
if((function (){var i__20998 = (0);
while(true){
if((i__20998 < size__4610__auto__)){
var n2 = cljs.core._nth.call(null,c__4609__auto__,i__20998);
cljs.core.chunk_append.call(null,b__20999,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null));

var G__21003 = (i__20998 + (1));
i__20998 = G__21003;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20999),loom$graph$iter__20996.call(null,cljs.core.chunk_rest.call(null,s__20997__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20999),null);
}
} else {
var n2 = cljs.core.first.call(null,s__20997__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null),loom$graph$iter__20996.call(null,cljs.core.rest.call(null,s__20997__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__.call(null,loom.graph.predecessors.call(null,g__$1,node));
}));

(loom.graph.WeightedFlyDigraph.prototype.loom$graph$WeightedGraph$ = cljs.core.PROTOCOL_SENTINEL);

(loom.graph.WeightedFlyDigraph.prototype.loom$graph$WeightedGraph$weight_STAR_$arity$2 = (function (g,e){
var g__$1 = this;
return loom.graph.weight.call(null,g__$1,loom.graph.src.call(null,e),loom.graph.dest.call(null,e));
}));

(loom.graph.WeightedFlyDigraph.prototype.loom$graph$WeightedGraph$weight_STAR_$arity$3 = (function (g,n1,n2){
var g__$1 = this;
return loom.graph.call_or_return.call(null,g__$1.fweight,n1,n2);
}));
/**
 * Returns a graph with only the given nodes
 */
loom.graph.subgraph = (function loom$graph$subgraph(g,ns){
return loom.graph.remove_nodes_STAR_.call(null,g,cljs.core.remove.call(null,cljs.core.set.call(null,ns),loom.graph.nodes.call(null,g)));
});
/**
 * Adds a path of edges connecting the given nodes in order
 */
loom.graph.add_path = (function loom$graph$add_path(var_args){
var args__4824__auto__ = [];
var len__4818__auto___21006 = arguments.length;
var i__4819__auto___21007 = (0);
while(true){
if((i__4819__auto___21007 < len__4818__auto___21006)){
args__4824__auto__.push((arguments[i__4819__auto___21007]));

var G__21008 = (i__4819__auto___21007 + (1));
i__4819__auto___21007 = G__21008;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return loom.graph.add_path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(loom.graph.add_path.cljs$core$IFn$_invoke$arity$variadic = (function (g,nodes){
return loom.graph.add_edges_STAR_.call(null,g,cljs.core.partition.call(null,(2),(1),nodes));
}));

(loom.graph.add_path.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(loom.graph.add_path.cljs$lang$applyTo = (function (seq21004){
var G__21005 = cljs.core.first.call(null,seq21004);
var seq21004__$1 = cljs.core.next.call(null,seq21004);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21005,seq21004__$1);
}));

/**
 * Adds a cycle of edges connecting the given nodes in order
 */
loom.graph.add_cycle = (function loom$graph$add_cycle(var_args){
var args__4824__auto__ = [];
var len__4818__auto___21011 = arguments.length;
var i__4819__auto___21012 = (0);
while(true){
if((i__4819__auto___21012 < len__4818__auto___21011)){
args__4824__auto__.push((arguments[i__4819__auto___21012]));

var G__21013 = (i__4819__auto___21012 + (1));
i__4819__auto___21012 = G__21013;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return loom.graph.add_cycle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(loom.graph.add_cycle.cljs$core$IFn$_invoke$arity$variadic = (function (g,nodes){
return loom.graph.add_edges_STAR_.call(null,g,cljs.core.partition.call(null,(2),(1),cljs.core.concat.call(null,nodes,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,nodes)], null))));
}));

(loom.graph.add_cycle.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(loom.graph.add_cycle.cljs$lang$applyTo = (function (seq21009){
var G__21010 = cljs.core.first.call(null,seq21009);
var seq21009__$1 = cljs.core.next.call(null,seq21009);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21010,seq21009__$1);
}));

/**
 * Returns true if g satisfies the Graph protocol
 */
loom.graph.graph_QMARK_ = (function loom$graph$graph_QMARK_(g){
if((!((g == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === g.loom$graph$Graph$)))){
return true;
} else {
if((!g.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,loom.graph.Graph,g);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,loom.graph.Graph,g);
}
});
/**
 * Returns true if g satisfies the Digraph protocol
 */
loom.graph.directed_QMARK_ = (function loom$graph$directed_QMARK_(g){
if((!((g == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === g.loom$graph$Digraph$)))){
return true;
} else {
if((!g.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,loom.graph.Digraph,g);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,loom.graph.Digraph,g);
}
});
/**
 * Returns true if g satisfies the WeightedGraph protocol
 */
loom.graph.weighted_QMARK_ = (function loom$graph$weighted_QMARK_(g){
if((!((g == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === g.loom$graph$WeightedGraph$)))){
return true;
} else {
if((!g.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,loom.graph.WeightedGraph,g);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,loom.graph.WeightedGraph,g);
}
});
/**
 * Returns true if g satisfies the EditableGraph protocol
 */
loom.graph.editable_QMARK_ = (function loom$graph$editable_QMARK_(g){
if((!((g == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === g.loom$graph$EditableGraph$)))){
return true;
} else {
if((!g.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,loom.graph.EditableGraph,g);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,loom.graph.EditableGraph,g);
}
});
/**
 * Builds up a graph (i.e. adds edges and nodes) from any combination of
 *   other graphs, adjacency maps, edges, or nodes.
 */
loom.graph.build_graph = (function loom$graph$build_graph(var_args){
var args__4824__auto__ = [];
var len__4818__auto___21088 = arguments.length;
var i__4819__auto___21089 = (0);
while(true){
if((i__4819__auto___21089 < len__4818__auto___21088)){
args__4824__auto__.push((arguments[i__4819__auto___21089]));

var G__21090 = (i__4819__auto___21089 + (1));
i__4819__auto___21089 = G__21090;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return loom.graph.build_graph.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(loom.graph.build_graph.cljs$core$IFn$_invoke$arity$variadic = (function (g,inits){
var build = (function loom$graph$build(g__$1,init){
if(loom.graph.graph_QMARK_.call(null,init)){
if(((loom.graph.weighted_QMARK_.call(null,g__$1)) && (loom.graph.weighted_QMARK_.call(null,init)))){
return cljs.core.assoc.call(null,cljs.core.reduce.call(null,loom.graph.add_edges,loom.graph.add_nodes_STAR_.call(null,g__$1,loom.graph.nodes.call(null,init)),(function (){var iter__4611__auto__ = (function loom$graph$build_$_iter__21054(s__21055){
return (new cljs.core.LazySeq(null,(function (){
var s__21055__$1 = s__21055;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__21055__$1);
if(temp__5753__auto__){
var s__21055__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21055__$2)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,s__21055__$2);
var size__4610__auto__ = cljs.core.count.call(null,c__4609__auto__);
var b__21057 = cljs.core.chunk_buffer.call(null,size__4610__auto__);
if((function (){var i__21056 = (0);
while(true){
if((i__21056 < size__4610__auto__)){
var vec__21058 = cljs.core._nth.call(null,c__4609__auto__,i__21056);
var n1 = cljs.core.nth.call(null,vec__21058,(0),null);
var n2 = cljs.core.nth.call(null,vec__21058,(1),null);
cljs.core.chunk_append.call(null,b__21057,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [n1,n2,loom.graph.weight.call(null,init,n1,n2)], null));

var G__21091 = (i__21056 + (1));
i__21056 = G__21091;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21057),loom$graph$build_$_iter__21054.call(null,cljs.core.chunk_rest.call(null,s__21055__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21057),null);
}
} else {
var vec__21061 = cljs.core.first.call(null,s__21055__$2);
var n1 = cljs.core.nth.call(null,vec__21061,(0),null);
var n2 = cljs.core.nth.call(null,vec__21061,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [n1,n2,loom.graph.weight.call(null,init,n1,n2)], null),loom$graph$build_$_iter__21054.call(null,cljs.core.rest.call(null,s__21055__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__.call(null,loom.graph.edges.call(null,init));
})()),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.merge.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(g__$1),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(init)));
} else {
return cljs.core.assoc.call(null,loom.graph.add_edges_STAR_.call(null,loom.graph.add_nodes_STAR_.call(null,g__$1,loom.graph.nodes.call(null,init)),loom.graph.edges.call(null,init)),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.merge.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(g__$1),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(init)));
}
} else {
if(cljs.core.map_QMARK_.call(null,init)){
var es = ((cljs.core.map_QMARK_.call(null,cljs.core.val.call(null,cljs.core.first.call(null,init))))?(function (){var iter__4611__auto__ = (function loom$graph$build_$_iter__21064(s__21065){
return (new cljs.core.LazySeq(null,(function (){
var s__21065__$1 = s__21065;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__21065__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var vec__21070 = cljs.core.first.call(null,xs__6308__auto__);
var n = cljs.core.nth.call(null,vec__21070,(0),null);
var nbrs = cljs.core.nth.call(null,vec__21070,(1),null);
var iterys__4607__auto__ = ((function (s__21065__$1,vec__21070,n,nbrs,xs__6308__auto__,temp__5753__auto__){
return (function loom$graph$build_$_iter__21064_$_iter__21066(s__21067){
return (new cljs.core.LazySeq(null,((function (s__21065__$1,vec__21070,n,nbrs,xs__6308__auto__,temp__5753__auto__){
return (function (){
var s__21067__$1 = s__21067;
while(true){
var temp__5753__auto____$1 = cljs.core.seq.call(null,s__21067__$1);
if(temp__5753__auto____$1){
var s__21067__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21067__$2)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,s__21067__$2);
var size__4610__auto__ = cljs.core.count.call(null,c__4609__auto__);
var b__21069 = cljs.core.chunk_buffer.call(null,size__4610__auto__);
if((function (){var i__21068 = (0);
while(true){
if((i__21068 < size__4610__auto__)){
var vec__21073 = cljs.core._nth.call(null,c__4609__auto__,i__21068);
var nbr = cljs.core.nth.call(null,vec__21073,(0),null);
var wt = cljs.core.nth.call(null,vec__21073,(1),null);
cljs.core.chunk_append.call(null,b__21069,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr,wt], null));

var G__21092 = (i__21068 + (1));
i__21068 = G__21092;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21069),loom$graph$build_$_iter__21064_$_iter__21066.call(null,cljs.core.chunk_rest.call(null,s__21067__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21069),null);
}
} else {
var vec__21076 = cljs.core.first.call(null,s__21067__$2);
var nbr = cljs.core.nth.call(null,vec__21076,(0),null);
var wt = cljs.core.nth.call(null,vec__21076,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr,wt], null),loom$graph$build_$_iter__21064_$_iter__21066.call(null,cljs.core.rest.call(null,s__21067__$2)));
}
} else {
return null;
}
break;
}
});})(s__21065__$1,vec__21070,n,nbrs,xs__6308__auto__,temp__5753__auto__))
,null,null));
});})(s__21065__$1,vec__21070,n,nbrs,xs__6308__auto__,temp__5753__auto__))
;
var fs__4608__auto__ = cljs.core.seq.call(null,iterys__4607__auto__.call(null,nbrs));
if(fs__4608__auto__){
return cljs.core.concat.call(null,fs__4608__auto__,loom$graph$build_$_iter__21064.call(null,cljs.core.rest.call(null,s__21065__$1)));
} else {
var G__21093 = cljs.core.rest.call(null,s__21065__$1);
s__21065__$1 = G__21093;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__.call(null,init);
})():(function (){var iter__4611__auto__ = (function loom$graph$build_$_iter__21079(s__21080){
return (new cljs.core.LazySeq(null,(function (){
var s__21080__$1 = s__21080;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__21080__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var vec__21085 = cljs.core.first.call(null,xs__6308__auto__);
var n = cljs.core.nth.call(null,vec__21085,(0),null);
var nbrs = cljs.core.nth.call(null,vec__21085,(1),null);
var iterys__4607__auto__ = ((function (s__21080__$1,vec__21085,n,nbrs,xs__6308__auto__,temp__5753__auto__){
return (function loom$graph$build_$_iter__21079_$_iter__21081(s__21082){
return (new cljs.core.LazySeq(null,((function (s__21080__$1,vec__21085,n,nbrs,xs__6308__auto__,temp__5753__auto__){
return (function (){
var s__21082__$1 = s__21082;
while(true){
var temp__5753__auto____$1 = cljs.core.seq.call(null,s__21082__$1);
if(temp__5753__auto____$1){
var s__21082__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21082__$2)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,s__21082__$2);
var size__4610__auto__ = cljs.core.count.call(null,c__4609__auto__);
var b__21084 = cljs.core.chunk_buffer.call(null,size__4610__auto__);
if((function (){var i__21083 = (0);
while(true){
if((i__21083 < size__4610__auto__)){
var nbr = cljs.core._nth.call(null,c__4609__auto__,i__21083);
cljs.core.chunk_append.call(null,b__21084,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null));

var G__21094 = (i__21083 + (1));
i__21083 = G__21094;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21084),loom$graph$build_$_iter__21079_$_iter__21081.call(null,cljs.core.chunk_rest.call(null,s__21082__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21084),null);
}
} else {
var nbr = cljs.core.first.call(null,s__21082__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null),loom$graph$build_$_iter__21079_$_iter__21081.call(null,cljs.core.rest.call(null,s__21082__$2)));
}
} else {
return null;
}
break;
}
});})(s__21080__$1,vec__21085,n,nbrs,xs__6308__auto__,temp__5753__auto__))
,null,null));
});})(s__21080__$1,vec__21085,n,nbrs,xs__6308__auto__,temp__5753__auto__))
;
var fs__4608__auto__ = cljs.core.seq.call(null,iterys__4607__auto__.call(null,nbrs));
if(fs__4608__auto__){
return cljs.core.concat.call(null,fs__4608__auto__,loom$graph$build_$_iter__21079.call(null,cljs.core.rest.call(null,s__21080__$1)));
} else {
var G__21095 = cljs.core.rest.call(null,s__21080__$1);
s__21080__$1 = G__21095;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__.call(null,init);
})());
return loom.graph.add_edges_STAR_.call(null,loom.graph.add_nodes_STAR_.call(null,g__$1,cljs.core.keys.call(null,init)),es);
} else {
if(cljs.core.sequential_QMARK_.call(null,init)){
return loom.graph.add_edges.call(null,g__$1,init);
} else {
return loom.graph.add_nodes.call(null,g__$1,init);

}
}
}
});
return cljs.core.reduce.call(null,build,g,inits);
}));

(loom.graph.build_graph.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(loom.graph.build_graph.cljs$lang$applyTo = (function (seq21018){
var G__21019 = cljs.core.first.call(null,seq21018);
var seq21018__$1 = cljs.core.next.call(null,seq21018);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21019,seq21018__$1);
}));

/**
 * Creates an unweighted, undirected graph. inits can be edges, adjacency maps,
 *   or graphs
 */
loom.graph.graph = (function loom$graph$graph(var_args){
var args__4824__auto__ = [];
var len__4818__auto___21097 = arguments.length;
var i__4819__auto___21098 = (0);
while(true){
if((i__4819__auto___21098 < len__4818__auto___21097)){
args__4824__auto__.push((arguments[i__4819__auto___21098]));

var G__21099 = (i__4819__auto___21098 + (1));
i__4819__auto___21098 = G__21099;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return loom.graph.graph.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(loom.graph.graph.cljs$core$IFn$_invoke$arity$variadic = (function (inits){
return cljs.core.apply.call(null,loom.graph.build_graph,(new loom.graph.BasicEditableGraph(cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null)),inits);
}));

(loom.graph.graph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(loom.graph.graph.cljs$lang$applyTo = (function (seq21096){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21096));
}));

/**
 * Creates an unweighted, directed graph. inits can be edges, adjacency maps,
 *   or graphs
 */
loom.graph.digraph = (function loom$graph$digraph(var_args){
var args__4824__auto__ = [];
var len__4818__auto___21101 = arguments.length;
var i__4819__auto___21102 = (0);
while(true){
if((i__4819__auto___21102 < len__4818__auto___21101)){
args__4824__auto__.push((arguments[i__4819__auto___21102]));

var G__21103 = (i__4819__auto___21102 + (1));
i__4819__auto___21102 = G__21103;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return loom.graph.digraph.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(loom.graph.digraph.cljs$core$IFn$_invoke$arity$variadic = (function (inits){
return cljs.core.apply.call(null,loom.graph.build_graph,(new loom.graph.BasicEditableDigraph(cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null)),inits);
}));

(loom.graph.digraph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(loom.graph.digraph.cljs$lang$applyTo = (function (seq21100){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21100));
}));

/**
 * Creates an weighted, undirected graph. inits can be edges, adjacency maps,
 *   or graphs
 */
loom.graph.weighted_graph = (function loom$graph$weighted_graph(var_args){
var args__4824__auto__ = [];
var len__4818__auto___21105 = arguments.length;
var i__4819__auto___21106 = (0);
while(true){
if((i__4819__auto___21106 < len__4818__auto___21105)){
args__4824__auto__.push((arguments[i__4819__auto___21106]));

var G__21107 = (i__4819__auto___21106 + (1));
i__4819__auto___21106 = G__21107;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return loom.graph.weighted_graph.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(loom.graph.weighted_graph.cljs$core$IFn$_invoke$arity$variadic = (function (inits){
return cljs.core.apply.call(null,loom.graph.build_graph,(new loom.graph.BasicEditableWeightedGraph(cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null)),inits);
}));

(loom.graph.weighted_graph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(loom.graph.weighted_graph.cljs$lang$applyTo = (function (seq21104){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21104));
}));

/**
 * Creates an weighted, directed graph. inits can be edges, adjacency maps,
 *   or graphs
 */
loom.graph.weighted_digraph = (function loom$graph$weighted_digraph(var_args){
var args__4824__auto__ = [];
var len__4818__auto___21109 = arguments.length;
var i__4819__auto___21110 = (0);
while(true){
if((i__4819__auto___21110 < len__4818__auto___21109)){
args__4824__auto__.push((arguments[i__4819__auto___21110]));

var G__21111 = (i__4819__auto___21110 + (1));
i__4819__auto___21110 = G__21111;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return loom.graph.weighted_digraph.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(loom.graph.weighted_digraph.cljs$core$IFn$_invoke$arity$variadic = (function (inits){
return cljs.core.apply.call(null,loom.graph.build_graph,(new loom.graph.BasicEditableWeightedDigraph(cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null)),inits);
}));

(loom.graph.weighted_digraph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(loom.graph.weighted_digraph.cljs$lang$applyTo = (function (seq21108){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21108));
}));

/**
 * Creates a read-only, ad-hoc graph which uses the provided functions
 *   to return values for nodes, edges, etc. If any members are not functions,
 *   they will be returned as-is. Edges can be inferred if nodes and
 *   successors are provided. Nodes and edges can be inferred if successors and
 *   start are provided.
 */
loom.graph.fly_graph = (function loom$graph$fly_graph(var_args){
var args__4824__auto__ = [];
var len__4818__auto___21115 = arguments.length;
var i__4819__auto___21116 = (0);
while(true){
if((i__4819__auto___21116 < len__4818__auto___21115)){
args__4824__auto__.push((arguments[i__4819__auto___21116]));

var G__21117 = (i__4819__auto___21116 + (1));
i__4819__auto___21116 = G__21117;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return loom.graph.fly_graph.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(loom.graph.fly_graph.cljs$core$IFn$_invoke$arity$variadic = (function (p__21113){
var map__21114 = p__21113;
var map__21114__$1 = cljs.core.__destructure_map.call(null,map__21114);
var nodes = cljs.core.get.call(null,map__21114__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var edges = cljs.core.get.call(null,map__21114__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
var successors = cljs.core.get.call(null,map__21114__$1,new cljs.core.Keyword(null,"successors","successors",-1239296414));
var predecessors = cljs.core.get.call(null,map__21114__$1,new cljs.core.Keyword(null,"predecessors","predecessors",229913357));
var weight = cljs.core.get.call(null,map__21114__$1,new cljs.core.Keyword(null,"weight","weight",-1262796205));
var start = cljs.core.get.call(null,map__21114__$1,new cljs.core.Keyword(null,"start","start",-355208981));
if(cljs.core.truth_((function (){var and__4210__auto__ = predecessors;
if(cljs.core.truth_(and__4210__auto__)){
return weight;
} else {
return and__4210__auto__;
}
})())){
return (new loom.graph.WeightedFlyDigraph(nodes,edges,successors,predecessors,weight,start,null,null,null));
} else {
if(cljs.core.truth_(predecessors)){
return (new loom.graph.FlyDigraph(nodes,edges,successors,predecessors,start,null,null,null));
} else {
if(cljs.core.truth_(weight)){
return (new loom.graph.WeightedFlyGraph(nodes,edges,successors,weight,start,null,null,null));
} else {
return (new loom.graph.FlyGraph(nodes,edges,successors,start,null,null,null));

}
}
}
}));

(loom.graph.fly_graph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(loom.graph.fly_graph.cljs$lang$applyTo = (function (seq21112){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21112));
}));


//# sourceMappingURL=graph.js.map
