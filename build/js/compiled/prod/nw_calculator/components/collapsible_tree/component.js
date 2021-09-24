// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('nw_calculator.components.collapsible_tree.component');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.walk');
goog.require('reagent.core');
goog.require('nw_calculator.components.collapsible_tree.styles');
goog.require('nw_calculator.components.circular_button.component');
goog.require('nw_calculator.hooks');
goog.require('nw_calculator.utilities');
goog.require('oops.core');
nw_calculator.components.collapsible_tree.component.global$module$react = goog.global["React"];
if((typeof nw_calculator !== 'undefined') && (typeof nw_calculator.components !== 'undefined') && (typeof nw_calculator.components.collapsible_tree !== 'undefined') && (typeof nw_calculator.components.collapsible_tree.component !== 'undefined') && (typeof nw_calculator.components.collapsible_tree.component.collapsible_list_context !== 'undefined')){
} else {
nw_calculator.components.collapsible_tree.component.collapsible_list_context = (function (){var G__28974 = ({"setCollapsedUpdater": nw_calculator.utilities.no_op, "unsetCollapsedUpdater": nw_calculator.utilities.no_op});
return nw_calculator.components.collapsible_tree.component.global$module$react.createContext(G__28974);
})();
}
nw_calculator.components.collapsible_tree.component.collapsible_list_provider = nw_calculator.components.collapsible_tree.component.collapsible_list_context.Provider;
nw_calculator.components.collapsible_tree.component.collapsible_list_consumer = nw_calculator.components.collapsible_tree.component.collapsible_list_context.Consumer;
nw_calculator.components.collapsible_tree.component.list_item = (function nw_calculator$components$collapsible_tree$component$list_item(var_args){
var args__4824__auto__ = [];
var len__4818__auto___28980 = arguments.length;
var i__4819__auto___28981 = (0);
while(true){
if((i__4819__auto___28981 < len__4818__auto___28980)){
args__4824__auto__.push((arguments[i__4819__auto___28981]));

var G__28982 = (i__4819__auto___28981 + (1));
i__4819__auto___28981 = G__28982;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return nw_calculator.components.collapsible_tree.component.list_item.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(nw_calculator.components.collapsible_tree.component.list_item.cljs$core$IFn$_invoke$arity$variadic = (function (p__28978,item,children){
var map__28979 = p__28978;
var map__28979__$1 = cljs.core.__destructure_map(map__28979);
var list_item_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28979__$1,cljs.core.cst$kw$list_DASH_item_DASH_props);
var child_container_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28979__$1,cljs.core.cst$kw$child_DASH_container_DASH_props);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dt$bg_DASH_inherit$mb_DASH_0$mr_DASH_0$mt_DASH_6$ml_DASH_7,list_item_props,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$bg_DASH_inherit$relative$flex_DASH_auto$ml_DASH_7,child_container_props,item], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_], null),children)], null);
}));

(nw_calculator.components.collapsible_tree.component.list_item.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(nw_calculator.components.collapsible_tree.component.list_item.cljs$lang$applyTo = (function (seq28975){
var G__28976 = cljs.core.first(seq28975);
var seq28975__$1 = cljs.core.next(seq28975);
var G__28977 = cljs.core.first(seq28975__$1);
var seq28975__$2 = cljs.core.next(seq28975__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28976,G__28977,seq28975__$2);
}));

nw_calculator.components.collapsible_tree.component.collapsible_list = (function nw_calculator$components$collapsible_tree$component$collapsible_list(var_args){
var args__4824__auto__ = [];
var len__4818__auto___28992 = arguments.length;
var i__4819__auto___28993 = (0);
while(true){
if((i__4819__auto___28993 < len__4818__auto___28992)){
args__4824__auto__.push((arguments[i__4819__auto___28993]));

var G__28994 = (i__4819__auto___28993 + (1));
i__4819__auto___28993 = G__28994;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return nw_calculator.components.collapsible_tree.component.collapsible_list.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(nw_calculator.components.collapsible_tree.component.collapsible_list.cljs$core$IFn$_invoke$arity$variadic = (function (p__28985,children){
var map__28986 = p__28985;
var map__28986__$1 = cljs.core.__destructure_map(map__28986);
var root_node_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28986__$1,cljs.core.cst$kw$root_DASH_node_QMARK_);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28986__$1,cljs.core.cst$kw$content);
var set_collapsed_updater = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__28986__$1,cljs.core.cst$kw$set_DASH_collapsed_DASH_updater,nw_calculator.utilities.no_op);
var unset_collapsed_updater = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__28986__$1,cljs.core.cst$kw$unset_DASH_collapsed_DASH_updater,nw_calculator.utilities.no_op);
var vec__28987 = nw_calculator.hooks.use_toggle(true);
var collapsed_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28987,(0),null);
var toggle_collapsed_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28987,(1),null);
var set_collapsed_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28987,(2),null);
var G__28990_28995 = (function (){
var uuid = cljs.core.random_uuid();
if(cljs.core.truth_(root_node_QMARK_)){
} else {
(set_collapsed_updater.cljs$core$IFn$_invoke$arity$2 ? set_collapsed_updater.cljs$core$IFn$_invoke$arity$2(uuid,set_collapsed_BANG_) : set_collapsed_updater.call(null,uuid,set_collapsed_BANG_));
}

return (function (){
return (unset_collapsed_updater.cljs$core$IFn$_invoke$arity$1 ? unset_collapsed_updater.cljs$core$IFn$_invoke$arity$1(uuid) : unset_collapsed_updater.call(null,uuid));
});
});
var G__28991_28996 = [set_collapsed_updater];
nw_calculator.components.collapsible_tree.component.global$module$react.useEffect(G__28990_28995,G__28991_28996);

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.collapsible_tree.component.list_item,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_,(cljs.core.truth_(root_node_QMARK_)?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.circular_button.component.circular_button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_click,toggle_collapsed_BANG_,cljs.core.cst$kw$class,"toggle bg-inherit absolute -left-14"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fas$fa_DASH_chevron_DASH_up$text_DASH_base$transition_DASH_transform,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,(cljs.core.truth_(collapsed_QMARK_)?"flip-y":null)], null)], null)], null)),content], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dl$bg_DASH_inherit$mt_DASH_0$mb_DASH_0$overflow_DASH_x_DASH_auto,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,(cljs.core.truth_((function (){var and__4210__auto__ = cljs.core.not(root_node_QMARK_);
if(and__4210__auto__){
return collapsed_QMARK_;
} else {
return and__4210__auto__;
}
})())?"hidden":null)], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_], null),children)], null)], null);
}));

(nw_calculator.components.collapsible_tree.component.collapsible_list.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(nw_calculator.components.collapsible_tree.component.collapsible_list.cljs$lang$applyTo = (function (seq28983){
var G__28984 = cljs.core.first(seq28983);
var seq28983__$1 = cljs.core.next(seq28983);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28984,seq28983__$1);
}));

/**
 * Returns collapsible tree (description) list.
 * 
 *   `tree-map` is the root node.
 *   `children` is a fn that, given a branch node, returns a seq of its children.
 *   `make-node` is a fn that, given an existing node, returns a new node.
 *   `id` is a dn that, given an existing node, returns a unique identifier for that node.
 */
nw_calculator.components.collapsible_tree.component.collapsible_tree = (function nw_calculator$components$collapsible_tree$component$collapsible_tree(p__28997){
var map__28998 = p__28997;
var map__28998__$1 = cljs.core.__destructure_map(map__28998);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28998__$1,cljs.core.cst$kw$children);
var make_node = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__28998__$1,cljs.core.cst$kw$make_DASH_node,cljs.core.identity);
var tree_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28998__$1,cljs.core.cst$kw$tree_DASH_map);
var container_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28998__$1,cljs.core.cst$kw$container_DASH_props);
var ignore_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__28998__$1,cljs.core.cst$kw$ignore_QMARK_,nw_calculator.utilities.no_op);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__28998__$1,cljs.core.cst$kw$id,cljs.core.cst$kw$id);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dl$bg_DASH_inherit$w_DASH_full,reagent.core.merge_props.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,nw_calculator.components.collapsible_tree.styles.tree_class()], null),container_props),clojure.walk.postwalk((function (node){
if(((cljs.core.not((ignore_QMARK_.cljs$core$IFn$_invoke$arity$1 ? ignore_QMARK_.cljs$core$IFn$_invoke$arity$1(node) : ignore_QMARK_.call(null,node)))) && (cljs.core.map_QMARK_(node)))){
var root_node_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(node) : id.call(null,node)),(id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(tree_map) : id.call(null,tree_map)));
var temp__5751__auto__ = cljs.core.not_empty((children.cljs$core$IFn$_invoke$arity$1 ? children.cljs$core$IFn$_invoke$arity$1(node) : children.call(null,node)));
if(cljs.core.truth_(temp__5751__auto__)){
var node_children = temp__5751__auto__;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,nw_calculator.components.collapsible_tree.component.collapsible_list_consumer,cljs.core.PersistentArrayMap.EMPTY,(function (context){
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$f_GT_,nw_calculator.components.collapsible_tree.component.collapsible_list,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$root_DASH_node_QMARK_,root_node_QMARK_,cljs.core.cst$kw$set_DASH_collapsed_DASH_updater,(function (){var target_obj_28999 = context;
var next_obj_29000 = (target_obj_28999["setCollapsedUpdater"]);
return next_obj_29000;
})(),cljs.core.cst$kw$unset_DASH_collapsed_DASH_updater,(function (){var target_obj_29001 = context;
var next_obj_29002 = (target_obj_29001["unsetCollapsedUpdater"]);
return next_obj_29002;
})(),cljs.core.cst$kw$content,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$f_GT_,make_node,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$node,node,cljs.core.cst$kw$root_DASH_node_QMARK_,root_node_QMARK_], null)], null)], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_], null),node_children)], null));
})], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.collapsible_tree.component.list_item,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$f_GT_,make_node,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$node,node,cljs.core.cst$kw$root_DASH_node_QMARK_,root_node_QMARK_], null)], null)], null);
}
} else {
return node;
}
}),tree_map)], null);
});
