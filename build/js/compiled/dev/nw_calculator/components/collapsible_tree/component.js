// Compiled by ClojureScript 1.10.879 {:optimizations :none}
goog.provide('nw_calculator.components.collapsible_tree.component');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('reagent.core');
goog.require('nw_calculator.components.collapsible_tree.styles');
goog.require('nw_calculator.components.circular_button.component');
goog.require('react');
goog.require('nw_calculator.hooks');
goog.require('nw_calculator.utilities');
goog.require('oops.core');
nw_calculator.components.collapsible_tree.component.global$module$react = goog.global["React"];
if((typeof nw_calculator !== 'undefined') && (typeof nw_calculator.components !== 'undefined') && (typeof nw_calculator.components.collapsible_tree !== 'undefined') && (typeof nw_calculator.components.collapsible_tree.component !== 'undefined') && (typeof nw_calculator.components.collapsible_tree.component.collapsible_list_context !== 'undefined')){
} else {
nw_calculator.components.collapsible_tree.component.collapsible_list_context = nw_calculator.components.collapsible_tree.component.global$module$react.createContext(({"setCollapsedUpdater": nw_calculator.utilities.no_op, "unsetCollapsedUpdater": nw_calculator.utilities.no_op}));
}
nw_calculator.components.collapsible_tree.component.collapsible_list_provider = nw_calculator.components.collapsible_tree.component.collapsible_list_context.Provider;
nw_calculator.components.collapsible_tree.component.collapsible_list_consumer = nw_calculator.components.collapsible_tree.component.collapsible_list_context.Consumer;
nw_calculator.components.collapsible_tree.component.list_item = (function nw_calculator$components$collapsible_tree$component$list_item(var_args){
var args__4824__auto__ = [];
var len__4818__auto___28944 = arguments.length;
var i__4819__auto___28945 = (0);
while(true){
if((i__4819__auto___28945 < len__4818__auto___28944)){
args__4824__auto__.push((arguments[i__4819__auto___28945]));

var G__28946 = (i__4819__auto___28945 + (1));
i__4819__auto___28945 = G__28946;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return nw_calculator.components.collapsible_tree.component.list_item.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(nw_calculator.components.collapsible_tree.component.list_item.cljs$core$IFn$_invoke$arity$variadic = (function (p__28942,item,children){
var map__28943 = p__28942;
var map__28943__$1 = cljs.core.__destructure_map.call(null,map__28943);
var list_item_props = cljs.core.get.call(null,map__28943__$1,new cljs.core.Keyword(null,"list-item-props","list-item-props",822220159));
var child_container_props = cljs.core.get.call(null,map__28943__$1,new cljs.core.Keyword(null,"child-container-props","child-container-props",-681787214));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dt.bg-inherit.mb-0.mr-0.mt-6.ml-7","dt.bg-inherit.mb-0.mr-0.mt-6.ml-7",382692767),list_item_props,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-inherit.relative.flex-auto.ml-7","div.bg-inherit.relative.flex-auto.ml-7",-1914989719),child_container_props,item], null),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),children)], null);
}));

(nw_calculator.components.collapsible_tree.component.list_item.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(nw_calculator.components.collapsible_tree.component.list_item.cljs$lang$applyTo = (function (seq28939){
var G__28940 = cljs.core.first.call(null,seq28939);
var seq28939__$1 = cljs.core.next.call(null,seq28939);
var G__28941 = cljs.core.first.call(null,seq28939__$1);
var seq28939__$2 = cljs.core.next.call(null,seq28939__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28940,G__28941,seq28939__$2);
}));

nw_calculator.components.collapsible_tree.component.collapsible_list = (function nw_calculator$components$collapsible_tree$component$collapsible_list(var_args){
var args__4824__auto__ = [];
var len__4818__auto___28954 = arguments.length;
var i__4819__auto___28955 = (0);
while(true){
if((i__4819__auto___28955 < len__4818__auto___28954)){
args__4824__auto__.push((arguments[i__4819__auto___28955]));

var G__28956 = (i__4819__auto___28955 + (1));
i__4819__auto___28955 = G__28956;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return nw_calculator.components.collapsible_tree.component.collapsible_list.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(nw_calculator.components.collapsible_tree.component.collapsible_list.cljs$core$IFn$_invoke$arity$variadic = (function (p__28949,children){
var map__28950 = p__28949;
var map__28950__$1 = cljs.core.__destructure_map.call(null,map__28950);
var root_node_QMARK_ = cljs.core.get.call(null,map__28950__$1,new cljs.core.Keyword(null,"root-node?","root-node?",1770650387));
var content = cljs.core.get.call(null,map__28950__$1,new cljs.core.Keyword(null,"content","content",15833224));
var set_collapsed_updater = cljs.core.get.call(null,map__28950__$1,new cljs.core.Keyword(null,"set-collapsed-updater","set-collapsed-updater",-1291318937),nw_calculator.utilities.no_op);
var unset_collapsed_updater = cljs.core.get.call(null,map__28950__$1,new cljs.core.Keyword(null,"unset-collapsed-updater","unset-collapsed-updater",-986631966),nw_calculator.utilities.no_op);
var vec__28951 = nw_calculator.hooks.use_toggle.call(null,true);
var collapsed_QMARK_ = cljs.core.nth.call(null,vec__28951,(0),null);
var toggle_collapsed_BANG_ = cljs.core.nth.call(null,vec__28951,(1),null);
var set_collapsed_BANG_ = cljs.core.nth.call(null,vec__28951,(2),null);
nw_calculator.components.collapsible_tree.component.global$module$react.useEffect((function (){
var uuid = cljs.core.random_uuid.call(null);
if(cljs.core.truth_(root_node_QMARK_)){
} else {
set_collapsed_updater.call(null,uuid,set_collapsed_BANG_);
}

return (function (){
return unset_collapsed_updater.call(null,uuid);
});
}),[set_collapsed_updater]);

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.collapsible_tree.component.list_item,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"child-container-props","child-container-props",-681787214),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(root_node_QMARK_)?"z-10":null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),(cljs.core.truth_(root_node_QMARK_)?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.circular_button.component.circular_button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),toggle_collapsed_BANG_,new cljs.core.Keyword(null,"class","class",-2030961996),"toggle bg-inherit absolute -left-14"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-chevron-up.text-base.transition-transform","i.fas.fa-chevron-up.text-base.transition-transform",1934722936),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(collapsed_QMARK_)?"flip-y":null)], null)], null)], null)),content], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dl.bg-inherit.mt-0.mb-0.overflow-x-auto","dl.bg-inherit.mt-0.mb-0.overflow-x-auto",1684743732),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_((function (){var and__4210__auto__ = cljs.core.not.call(null,root_node_QMARK_);
if(and__4210__auto__){
return collapsed_QMARK_;
} else {
return and__4210__auto__;
}
})())?"hidden":null)], null),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),children)], null)], null);
}));

(nw_calculator.components.collapsible_tree.component.collapsible_list.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(nw_calculator.components.collapsible_tree.component.collapsible_list.cljs$lang$applyTo = (function (seq28947){
var G__28948 = cljs.core.first.call(null,seq28947);
var seq28947__$1 = cljs.core.next.call(null,seq28947);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28948,seq28947__$1);
}));

/**
 * Returns collapsible tree (description) list.
 * 
 *   `tree-map` is the root node.
 *   `children` is a fn that, given a branch node, returns a seq of its children.
 *   `make-node` is a fn that, given an existing node, returns a new node.
 *   `id` is a dn that, given an existing node, returns a unique identifier for that node.
 */
nw_calculator.components.collapsible_tree.component.collapsible_tree = (function nw_calculator$components$collapsible_tree$component$collapsible_tree(p__28957){
var map__28958 = p__28957;
var map__28958__$1 = cljs.core.__destructure_map.call(null,map__28958);
var children = cljs.core.get.call(null,map__28958__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var make_node = cljs.core.get.call(null,map__28958__$1,new cljs.core.Keyword(null,"make-node","make-node",1103973934),cljs.core.identity);
var tree_map = cljs.core.get.call(null,map__28958__$1,new cljs.core.Keyword(null,"tree-map","tree-map",-267458478));
var container_props = cljs.core.get.call(null,map__28958__$1,new cljs.core.Keyword(null,"container-props","container-props",-1692729191));
var ignore_QMARK_ = cljs.core.get.call(null,map__28958__$1,new cljs.core.Keyword(null,"ignore?","ignore?",1868915892),nw_calculator.utilities.no_op);
var id = cljs.core.get.call(null,map__28958__$1,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dl.bg-inherit.w-full","dl.bg-inherit.w-full",-1765513141),reagent.core.merge_props.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),nw_calculator.components.collapsible_tree.styles.tree_class.call(null)], null),container_props),clojure.walk.postwalk.call(null,(function (node){
if(((cljs.core.not.call(null,ignore_QMARK_.call(null,node))) && (cljs.core.map_QMARK_.call(null,node)))){
var root_node_QMARK_ = cljs.core._EQ_.call(null,id.call(null,node),id.call(null,tree_map));
var temp__5751__auto__ = cljs.core.not_empty.call(null,children.call(null,node));
if(cljs.core.truth_(temp__5751__auto__)){
var node_children = temp__5751__auto__;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),nw_calculator.components.collapsible_tree.component.collapsible_list_consumer,cljs.core.PersistentArrayMap.EMPTY,(function (context){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f>","f>",1484564198),nw_calculator.components.collapsible_tree.component.collapsible_list,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"root-node?","root-node?",1770650387),root_node_QMARK_,new cljs.core.Keyword(null,"set-collapsed-updater","set-collapsed-updater",-1291318937),(function (){var target_obj_28959 = context;
var _STAR_runtime_state_STAR__orig_val__28961 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__28962 = oops.state.prepare_state.call(null,target_obj_28959,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__28962);

try{var next_obj_28960 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_28959,(0),"setCollapsedUpdater",true,true,false))?(target_obj_28959["setCollapsedUpdater"]):null);
return next_obj_28960;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__28961);
}})(),new cljs.core.Keyword(null,"unset-collapsed-updater","unset-collapsed-updater",-986631966),(function (){var target_obj_28963 = context;
var _STAR_runtime_state_STAR__orig_val__28965 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__28966 = oops.state.prepare_state.call(null,target_obj_28963,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__28966);

try{var next_obj_28964 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_28963,(0),"unsetCollapsedUpdater",true,true,false))?(target_obj_28963["unsetCollapsedUpdater"]):null);
return next_obj_28964;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__28965);
}})(),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f>","f>",1484564198),make_node,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"node","node",581201198),node,new cljs.core.Keyword(null,"root-node?","root-node?",1770650387),root_node_QMARK_], null)], null)], null),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),node_children)], null));
})], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.collapsible_tree.component.list_item,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f>","f>",1484564198),make_node,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"node","node",581201198),node,new cljs.core.Keyword(null,"root-node?","root-node?",1770650387),root_node_QMARK_], null)], null)], null);
}
} else {
return node;
}
}),tree_map)], null);
});

//# sourceMappingURL=component.js.map
