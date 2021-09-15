// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('clojure.zip');
goog.require('cljs.core');
goog.require('cljs.core.constants');
/**
 * Creates a new zipper structure. 
 * 
 *   branch? is a fn that, given a node, returns true if can have
 *   children, even if it currently doesn't.
 * 
 *   children is a fn that, given a branch node, returns a seq of its
 *   children.
 * 
 *   make-node is a fn that, given an existing node and a seq of
 *   children, returns a new branch node with the supplied children.
 *   root is the root node.
 */
clojure.zip.zipper = (function clojure$zip$zipper(branch_QMARK_,children,make_node,root){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [root,null], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$zip_SLASH_branch_QMARK_,branch_QMARK_,cljs.core.cst$kw$zip_SLASH_children,children,cljs.core.cst$kw$zip_SLASH_make_DASH_node,make_node], null));
});
/**
 * Returns a zipper for nested sequences, given a root sequence
 */
clojure.zip.seq_zip = (function clojure$zip$seq_zip(root){
return clojure.zip.zipper(cljs.core.seq_QMARK_,cljs.core.identity,(function (node,children){
return cljs.core.with_meta(children,cljs.core.meta(node));
}),root);
});
/**
 * Returns a zipper for nested vectors, given a root vector
 */
clojure.zip.vector_zip = (function clojure$zip$vector_zip(root){
return clojure.zip.zipper(cljs.core.vector_QMARK_,cljs.core.seq,(function (node,children){
return cljs.core.with_meta(cljs.core.vec(children),cljs.core.meta(node));
}),root);
});
/**
 * Returns a zipper for xml elements (as from xml/parse),
 *   given a root element
 */
clojure.zip.xml_zip = (function clojure$zip$xml_zip(root){
return clojure.zip.zipper(cljs.core.complement(cljs.core.string_QMARK_),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,cljs.core.cst$kw$content),(function (node,children){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,cljs.core.cst$kw$content,(function (){var and__4210__auto__ = children;
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,children);
} else {
return and__4210__auto__;
}
})());
}),root);
});
/**
 * Returns the node at loc
 */
clojure.zip.node = (function clojure$zip$node(loc){
return (loc.cljs$core$IFn$_invoke$arity$1 ? loc.cljs$core$IFn$_invoke$arity$1((0)) : loc.call(null,(0)));
});
/**
 * Returns true if the node at loc is a branch
 */
clojure.zip.branch_QMARK_ = (function clojure$zip$branch_QMARK_(loc){
var G__20391 = clojure.zip.node(loc);
var fexpr__20390 = cljs.core.cst$kw$zip_SLASH_branch_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(loc));
return (fexpr__20390.cljs$core$IFn$_invoke$arity$1 ? fexpr__20390.cljs$core$IFn$_invoke$arity$1(G__20391) : fexpr__20390.call(null,G__20391));
});
/**
 * Returns a seq of the children of node at loc, which must be a branch
 */
clojure.zip.children = (function clojure$zip$children(loc){
if(cljs.core.truth_(clojure.zip.branch_QMARK_(loc))){
var G__20393 = clojure.zip.node(loc);
var fexpr__20392 = cljs.core.cst$kw$zip_SLASH_children.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(loc));
return (fexpr__20392.cljs$core$IFn$_invoke$arity$1 ? fexpr__20392.cljs$core$IFn$_invoke$arity$1(G__20393) : fexpr__20392.call(null,G__20393));
} else {
throw "called children on a leaf node";
}
});
/**
 * Returns a new branch node, given an existing node and new
 *   children. The loc is only used to supply the constructor.
 */
clojure.zip.make_node = (function clojure$zip$make_node(loc,node,children){
var fexpr__20394 = cljs.core.cst$kw$zip_SLASH_make_DASH_node.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(loc));
return (fexpr__20394.cljs$core$IFn$_invoke$arity$2 ? fexpr__20394.cljs$core$IFn$_invoke$arity$2(node,children) : fexpr__20394.call(null,node,children));
});
/**
 * Returns a seq of nodes leading to this loc
 */
clojure.zip.path = (function clojure$zip$path(loc){
return cljs.core.cst$kw$pnodes.cljs$core$IFn$_invoke$arity$1((loc.cljs$core$IFn$_invoke$arity$1 ? loc.cljs$core$IFn$_invoke$arity$1((1)) : loc.call(null,(1))));
});
/**
 * Returns a seq of the left siblings of this loc
 */
clojure.zip.lefts = (function clojure$zip$lefts(loc){
return cljs.core.seq(cljs.core.cst$kw$l.cljs$core$IFn$_invoke$arity$1((loc.cljs$core$IFn$_invoke$arity$1 ? loc.cljs$core$IFn$_invoke$arity$1((1)) : loc.call(null,(1)))));
});
/**
 * Returns a seq of the right siblings of this loc
 */
clojure.zip.rights = (function clojure$zip$rights(loc){
return cljs.core.cst$kw$r.cljs$core$IFn$_invoke$arity$1((loc.cljs$core$IFn$_invoke$arity$1 ? loc.cljs$core$IFn$_invoke$arity$1((1)) : loc.call(null,(1))));
});
/**
 * Returns the loc of the leftmost child of the node at this loc, or
 *   nil if no children
 */
clojure.zip.down = (function clojure$zip$down(loc){
if(cljs.core.truth_(clojure.zip.branch_QMARK_(loc))){
var vec__20395 = loc;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20395,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20395,(1),null);
var vec__20398 = clojure.zip.children(loc);
var seq__20399 = cljs.core.seq(vec__20398);
var first__20400 = cljs.core.first(seq__20399);
var seq__20399__$1 = cljs.core.next(seq__20399);
var c = first__20400;
var cnext = seq__20399__$1;
var cs = vec__20398;
if(cljs.core.truth_(cs)){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$l,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$pnodes,(cljs.core.truth_(path)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pnodes.cljs$core$IFn$_invoke$arity$1(path),node):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null)),cljs.core.cst$kw$ppath,path,cljs.core.cst$kw$r,cnext], null)], null),cljs.core.meta(loc));
} else {
return null;
}
} else {
return null;
}
});
/**
 * Returns the loc of the parent of the node at this loc, or nil if at
 *   the top
 */
clojure.zip.up = (function clojure$zip$up(loc){
var vec__20401 = loc;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20401,(0),null);
var map__20404 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20401,(1),null);
var map__20404__$1 = cljs.core.__destructure_map(map__20404);
var path = map__20404__$1;
var l = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20404__$1,cljs.core.cst$kw$l);
var ppath = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20404__$1,cljs.core.cst$kw$ppath);
var pnodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20404__$1,cljs.core.cst$kw$pnodes);
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20404__$1,cljs.core.cst$kw$r);
var changed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20404__$1,cljs.core.cst$kw$changed_QMARK_);
if(cljs.core.truth_(pnodes)){
var pnode = cljs.core.peek(pnodes);
return cljs.core.with_meta((cljs.core.truth_(changed_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.zip.make_node(loc,pnode,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(l,cljs.core.cons(node,r))),(function (){var and__4210__auto__ = ppath;
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ppath,cljs.core.cst$kw$changed_QMARK_,true);
} else {
return and__4210__auto__;
}
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pnode,ppath], null)),cljs.core.meta(loc));
} else {
return null;
}
});
/**
 * zips all the way up and returns the root node, reflecting any
 *  changes.
 */
clojure.zip.root = (function clojure$zip$root(loc){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$end,(loc.cljs$core$IFn$_invoke$arity$1 ? loc.cljs$core$IFn$_invoke$arity$1((1)) : loc.call(null,(1))))){
return clojure.zip.node(loc);
} else {
var p = clojure.zip.up(loc);
if(cljs.core.truth_(p)){
var G__20405 = p;
loc = G__20405;
continue;
} else {
return clojure.zip.node(loc);
}
}
break;
}
});
/**
 * Returns the loc of the right sibling of the node at this loc, or nil
 */
clojure.zip.right = (function clojure$zip$right(loc){
var vec__20406 = loc;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20406,(0),null);
var map__20409 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20406,(1),null);
var map__20409__$1 = cljs.core.__destructure_map(map__20409);
var path = map__20409__$1;
var l = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20409__$1,cljs.core.cst$kw$l);
var vec__20410 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20409__$1,cljs.core.cst$kw$r);
var seq__20411 = cljs.core.seq(vec__20410);
var first__20412 = cljs.core.first(seq__20411);
var seq__20411__$1 = cljs.core.next(seq__20411);
var r = first__20412;
var rnext = seq__20411__$1;
var rs = vec__20410;
if(cljs.core.truth_((function (){var and__4210__auto__ = path;
if(cljs.core.truth_(and__4210__auto__)){
return rs;
} else {
return and__4210__auto__;
}
})())){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(path,cljs.core.cst$kw$l,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(l,node),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$r,rnext], 0))], null),cljs.core.meta(loc));
} else {
return null;
}
});
/**
 * Returns the loc of the rightmost sibling of the node at this loc, or self
 */
clojure.zip.rightmost = (function clojure$zip$rightmost(loc){
var vec__20413 = loc;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20413,(0),null);
var map__20416 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20413,(1),null);
var map__20416__$1 = cljs.core.__destructure_map(map__20416);
var path = map__20416__$1;
var l = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20416__$1,cljs.core.cst$kw$l);
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20416__$1,cljs.core.cst$kw$r);
if(cljs.core.truth_((function (){var and__4210__auto__ = path;
if(cljs.core.truth_(and__4210__auto__)){
return r;
} else {
return and__4210__auto__;
}
})())){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.last(r),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(path,cljs.core.cst$kw$l,cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.conj,l,node,cljs.core.butlast(r)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$r,null], 0))], null),cljs.core.meta(loc));
} else {
return loc;
}
});
/**
 * Returns the loc of the left sibling of the node at this loc, or nil
 */
clojure.zip.left = (function clojure$zip$left(loc){
var vec__20417 = loc;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20417,(0),null);
var map__20420 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20417,(1),null);
var map__20420__$1 = cljs.core.__destructure_map(map__20420);
var path = map__20420__$1;
var l = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20420__$1,cljs.core.cst$kw$l);
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20420__$1,cljs.core.cst$kw$r);
if(cljs.core.truth_((function (){var and__4210__auto__ = path;
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.seq(l);
} else {
return and__4210__auto__;
}
})())){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.peek(l),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(path,cljs.core.cst$kw$l,cljs.core.pop(l),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$r,cljs.core.cons(node,r)], 0))], null),cljs.core.meta(loc));
} else {
return null;
}
});
/**
 * Returns the loc of the leftmost sibling of the node at this loc, or self
 */
clojure.zip.leftmost = (function clojure$zip$leftmost(loc){
var vec__20421 = loc;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20421,(0),null);
var map__20424 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20421,(1),null);
var map__20424__$1 = cljs.core.__destructure_map(map__20424);
var path = map__20424__$1;
var l = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20424__$1,cljs.core.cst$kw$l);
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20424__$1,cljs.core.cst$kw$r);
if(cljs.core.truth_((function (){var and__4210__auto__ = path;
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.seq(l);
} else {
return and__4210__auto__;
}
})())){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(l),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(path,cljs.core.cst$kw$l,cljs.core.PersistentVector.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$r,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.rest(l),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r], 0))], 0))], null),cljs.core.meta(loc));
} else {
return loc;
}
});
/**
 * Inserts the item as the left sibling of the node at this loc,
 *  without moving
 */
clojure.zip.insert_left = (function clojure$zip$insert_left(loc,item){
var vec__20425 = loc;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20425,(0),null);
var map__20428 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20425,(1),null);
var map__20428__$1 = cljs.core.__destructure_map(map__20428);
var path = map__20428__$1;
var l = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20428__$1,cljs.core.cst$kw$l);
if((path == null)){
throw "Insert at top";
} else {
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(path,cljs.core.cst$kw$l,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(l,item),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$changed_QMARK_,true], 0))], null),cljs.core.meta(loc));
}
});
/**
 * Inserts the item as the right sibling of the node at this loc,
 *   without moving
 */
clojure.zip.insert_right = (function clojure$zip$insert_right(loc,item){
var vec__20429 = loc;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20429,(0),null);
var map__20432 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20429,(1),null);
var map__20432__$1 = cljs.core.__destructure_map(map__20432);
var path = map__20432__$1;
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20432__$1,cljs.core.cst$kw$r);
if((path == null)){
throw "Insert at top";
} else {
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(path,cljs.core.cst$kw$r,cljs.core.cons(item,r),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$changed_QMARK_,true], 0))], null),cljs.core.meta(loc));
}
});
/**
 * Replaces the node at this loc, without moving
 */
clojure.zip.replace = (function clojure$zip$replace(loc,node){
var vec__20433 = loc;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20433,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20433,(1),null);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(path,cljs.core.cst$kw$changed_QMARK_,true)], null),cljs.core.meta(loc));
});
/**
 * Replaces the node at this loc with the value of (f node args)
 */
clojure.zip.edit = (function clojure$zip$edit(var_args){
var args__4824__auto__ = [];
var len__4818__auto___20439 = arguments.length;
var i__4819__auto___20440 = (0);
while(true){
if((i__4819__auto___20440 < len__4818__auto___20439)){
args__4824__auto__.push((arguments[i__4819__auto___20440]));

var G__20441 = (i__4819__auto___20440 + (1));
i__4819__auto___20440 = G__20441;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return clojure.zip.edit.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(clojure.zip.edit.cljs$core$IFn$_invoke$arity$variadic = (function (loc,f,args){
return clojure.zip.replace(loc,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,clojure.zip.node(loc),args));
}));

(clojure.zip.edit.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(clojure.zip.edit.cljs$lang$applyTo = (function (seq20436){
var G__20437 = cljs.core.first(seq20436);
var seq20436__$1 = cljs.core.next(seq20436);
var G__20438 = cljs.core.first(seq20436__$1);
var seq20436__$2 = cljs.core.next(seq20436__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20437,G__20438,seq20436__$2);
}));

/**
 * Inserts the item as the leftmost child of the node at this loc,
 *   without moving
 */
clojure.zip.insert_child = (function clojure$zip$insert_child(loc,item){
return clojure.zip.replace(loc,clojure.zip.make_node(loc,clojure.zip.node(loc),cljs.core.cons(item,clojure.zip.children(loc))));
});
/**
 * Inserts the item as the rightmost child of the node at this loc,
 *   without moving
 */
clojure.zip.append_child = (function clojure$zip$append_child(loc,item){
return clojure.zip.replace(loc,clojure.zip.make_node(loc,clojure.zip.node(loc),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(clojure.zip.children(loc),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null))));
});
/**
 * Moves to the next loc in the hierarchy, depth-first. When reaching
 *   the end, returns a distinguished loc detectable via end?. If already
 *   at the end, stays there.
 */
clojure.zip.next = (function clojure$zip$next(loc){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$end,(loc.cljs$core$IFn$_invoke$arity$1 ? loc.cljs$core$IFn$_invoke$arity$1((1)) : loc.call(null,(1))))){
return loc;
} else {
var or__4212__auto__ = (function (){var and__4210__auto__ = clojure.zip.branch_QMARK_(loc);
if(cljs.core.truth_(and__4210__auto__)){
return clojure.zip.down(loc);
} else {
return and__4210__auto__;
}
})();
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var or__4212__auto____$1 = clojure.zip.right(loc);
if(cljs.core.truth_(or__4212__auto____$1)){
return or__4212__auto____$1;
} else {
var p = loc;
while(true){
if(cljs.core.truth_(clojure.zip.up(p))){
var or__4212__auto____$2 = clojure.zip.right(clojure.zip.up(p));
if(cljs.core.truth_(or__4212__auto____$2)){
return or__4212__auto____$2;
} else {
var G__20442 = clojure.zip.up(p);
p = G__20442;
continue;
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.zip.node(p),cljs.core.cst$kw$end], null);
}
break;
}
}
}
}
});
/**
 * Moves to the previous loc in the hierarchy, depth-first. If already
 *   at the root, returns nil.
 */
clojure.zip.prev = (function clojure$zip$prev(loc){
var temp__5751__auto__ = clojure.zip.left(loc);
if(cljs.core.truth_(temp__5751__auto__)){
var lloc = temp__5751__auto__;
var loc__$1 = lloc;
while(true){
var temp__5751__auto____$1 = (function (){var and__4210__auto__ = clojure.zip.branch_QMARK_(loc__$1);
if(cljs.core.truth_(and__4210__auto__)){
return clojure.zip.down(loc__$1);
} else {
return and__4210__auto__;
}
})();
if(cljs.core.truth_(temp__5751__auto____$1)){
var child = temp__5751__auto____$1;
var G__20443 = clojure.zip.rightmost(child);
loc__$1 = G__20443;
continue;
} else {
return loc__$1;
}
break;
}
} else {
return clojure.zip.up(loc);
}
});
/**
 * Returns true if loc represents the end of a depth-first walk
 */
clojure.zip.end_QMARK_ = (function clojure$zip$end_QMARK_(loc){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$end,(loc.cljs$core$IFn$_invoke$arity$1 ? loc.cljs$core$IFn$_invoke$arity$1((1)) : loc.call(null,(1))));
});
/**
 * Removes the node at loc, returning the loc that would have preceded
 *   it in a depth-first walk.
 */
clojure.zip.remove = (function clojure$zip$remove(loc){
var vec__20444 = loc;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20444,(0),null);
var map__20447 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20444,(1),null);
var map__20447__$1 = cljs.core.__destructure_map(map__20447);
var path = map__20447__$1;
var l = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20447__$1,cljs.core.cst$kw$l);
var ppath = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20447__$1,cljs.core.cst$kw$ppath);
var pnodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20447__$1,cljs.core.cst$kw$pnodes);
var rs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20447__$1,cljs.core.cst$kw$r);
if((path == null)){
throw "Remove at top";
} else {
if((cljs.core.count(l) > (0))){
var loc__$1 = cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.peek(l),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(path,cljs.core.cst$kw$l,cljs.core.pop(l),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$changed_QMARK_,true], 0))], null),cljs.core.meta(loc));
while(true){
var temp__5751__auto__ = (function (){var and__4210__auto__ = clojure.zip.branch_QMARK_(loc__$1);
if(cljs.core.truth_(and__4210__auto__)){
return clojure.zip.down(loc__$1);
} else {
return and__4210__auto__;
}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
var G__20448 = clojure.zip.rightmost(child);
loc__$1 = G__20448;
continue;
} else {
return loc__$1;
}
break;
}
} else {
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.zip.make_node(loc,cljs.core.peek(pnodes),rs),(function (){var and__4210__auto__ = ppath;
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ppath,cljs.core.cst$kw$changed_QMARK_,true);
} else {
return and__4210__auto__;
}
})()], null),cljs.core.meta(loc));
}
}
});