// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('reitit.frontend.controllers');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reitit.frontend.controllers.pad_same_length = (function reitit$frontend$controllers$pad_same_length(a,b){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(a,cljs.core.take.cljs$core$IFn$_invoke$arity$2((cljs.core.count(b) - cljs.core.count(a)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)));
});
reitit.frontend.controllers.params_warning = (new cljs.core.Delay((function (){
return console.warn("Reitit-frontend controller :params is deprecated. Replace with :identity or :parameters option.");
}),null));
/**
 * Get controller identity given controller and match.
 * 
 *   To select interesting properties from Match :parameters option can be set.
 *   Value should be param-type => [param-key]
 *   Resulting value is map of param-type => param-key => value.
 * 
 *   For other uses, :identity option can be used to provide function from
 *   Match to identity.
 * 
 *   Default value is nil, i.e. controller identity doesn't depend on Match.
 */
reitit.frontend.controllers.get_identity = (function reitit$frontend$controllers$get_identity(p__22699,match){
var map__22700 = p__22699;
var map__22700__$1 = cljs.core.__destructure_map(map__22700);
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22700__$1,cljs.core.cst$kw$identity);
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22700__$1,cljs.core.cst$kw$parameters);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22700__$1,cljs.core.cst$kw$params);
if(cljs.core.not((function (){var and__4210__auto__ = identity;
if(cljs.core.truth_(and__4210__auto__)){
return parameters;
} else {
return and__4210__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","Use either :identity or :parameters for controller, not both.","\n","(not (and identity parameters))"].join('')));
}

if(cljs.core.truth_(params)){
cljs.core.deref(reitit.frontend.controllers.params_warning);
} else {
}

if(cljs.core.truth_(parameters)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4611__auto__ = (function reitit$frontend$controllers$get_identity_$_iter__22701(s__22702){
return (new cljs.core.LazySeq(null,(function (){
var s__22702__$1 = s__22702;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__22702__$1);
if(temp__5753__auto__){
var s__22702__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22702__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__22702__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__22704 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__22703 = (0);
while(true){
if((i__22703 < size__4610__auto__)){
var vec__22705 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4609__auto__,i__22703);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22705,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22705,(1),null);
cljs.core.chunk_append(b__22704,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$parameters.cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null));

var G__22711 = (i__22703 + (1));
i__22703 = G__22711;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22704),reitit$frontend$controllers$get_identity_$_iter__22701(cljs.core.chunk_rest(s__22702__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22704),null);
}
} else {
var vec__22708 = cljs.core.first(s__22702__$2);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22708,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22708,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$parameters.cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null),reitit$frontend$controllers$get_identity_$_iter__22701(cljs.core.rest(s__22702__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(parameters);
})());
} else {
if(cljs.core.truth_(identity)){
return (identity.cljs$core$IFn$_invoke$arity$1 ? identity.cljs$core$IFn$_invoke$arity$1(match) : identity.call(null,match));
} else {
if(cljs.core.truth_(params)){
return (params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(match) : params.call(null,match));
} else {
return null;

}
}
}
});
/**
 * Run side-effects (:start or :stop) for controller.
 *   The side-effect function is called with controller identity value.
 */
reitit.frontend.controllers.apply_controller = (function reitit$frontend$controllers$apply_controller(controller,method){
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(controller,method);
if(cljs.core.truth_(temp__5753__auto__)){
var f = temp__5753__auto__;
var G__22712 = cljs.core.cst$kw$reitit$frontend$controllers_SLASH_identity.cljs$core$IFn$_invoke$arity$1(controller);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22712) : f.call(null,G__22712));
} else {
return null;
}
});
/**
 * Applies changes between current controllers and
 *   those previously enabled. Reinitializes controllers whose
 *   identity has changed.
 */
reitit.frontend.controllers.apply_controllers = (function reitit$frontend$controllers$apply_controllers(old_controllers,new_match){
var new_controllers = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (controller){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(controller,cljs.core.cst$kw$reitit$frontend$controllers_SLASH_identity,reitit.frontend.controllers.get_identity(controller,new_match));
}),cljs.core.cst$kw$controllers.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(new_match)));
var changed_controllers = cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (old,new$){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old,new$)){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$old,old,cljs.core.cst$kw$new,new$], null);
} else {
return null;
}
}),reitit.frontend.controllers.pad_same_length(old_controllers,new_controllers),reitit.frontend.controllers.pad_same_length(new_controllers,old_controllers))));
var seq__22713_22721 = cljs.core.seq(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$old,changed_controllers)));
var chunk__22714_22722 = null;
var count__22715_22723 = (0);
var i__22716_22724 = (0);
while(true){
if((i__22716_22724 < count__22715_22723)){
var controller_22725 = chunk__22714_22722.cljs$core$IIndexed$_nth$arity$2(null,i__22716_22724);
reitit.frontend.controllers.apply_controller(controller_22725,cljs.core.cst$kw$stop);


var G__22726 = seq__22713_22721;
var G__22727 = chunk__22714_22722;
var G__22728 = count__22715_22723;
var G__22729 = (i__22716_22724 + (1));
seq__22713_22721 = G__22726;
chunk__22714_22722 = G__22727;
count__22715_22723 = G__22728;
i__22716_22724 = G__22729;
continue;
} else {
var temp__5753__auto___22730 = cljs.core.seq(seq__22713_22721);
if(temp__5753__auto___22730){
var seq__22713_22731__$1 = temp__5753__auto___22730;
if(cljs.core.chunked_seq_QMARK_(seq__22713_22731__$1)){
var c__4638__auto___22732 = cljs.core.chunk_first(seq__22713_22731__$1);
var G__22733 = cljs.core.chunk_rest(seq__22713_22731__$1);
var G__22734 = c__4638__auto___22732;
var G__22735 = cljs.core.count(c__4638__auto___22732);
var G__22736 = (0);
seq__22713_22721 = G__22733;
chunk__22714_22722 = G__22734;
count__22715_22723 = G__22735;
i__22716_22724 = G__22736;
continue;
} else {
var controller_22737 = cljs.core.first(seq__22713_22731__$1);
reitit.frontend.controllers.apply_controller(controller_22737,cljs.core.cst$kw$stop);


var G__22738 = cljs.core.next(seq__22713_22731__$1);
var G__22739 = null;
var G__22740 = (0);
var G__22741 = (0);
seq__22713_22721 = G__22738;
chunk__22714_22722 = G__22739;
count__22715_22723 = G__22740;
i__22716_22724 = G__22741;
continue;
}
} else {
}
}
break;
}

var seq__22717_22742 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$new,changed_controllers));
var chunk__22718_22743 = null;
var count__22719_22744 = (0);
var i__22720_22745 = (0);
while(true){
if((i__22720_22745 < count__22719_22744)){
var controller_22746 = chunk__22718_22743.cljs$core$IIndexed$_nth$arity$2(null,i__22720_22745);
reitit.frontend.controllers.apply_controller(controller_22746,cljs.core.cst$kw$start);


var G__22747 = seq__22717_22742;
var G__22748 = chunk__22718_22743;
var G__22749 = count__22719_22744;
var G__22750 = (i__22720_22745 + (1));
seq__22717_22742 = G__22747;
chunk__22718_22743 = G__22748;
count__22719_22744 = G__22749;
i__22720_22745 = G__22750;
continue;
} else {
var temp__5753__auto___22751 = cljs.core.seq(seq__22717_22742);
if(temp__5753__auto___22751){
var seq__22717_22752__$1 = temp__5753__auto___22751;
if(cljs.core.chunked_seq_QMARK_(seq__22717_22752__$1)){
var c__4638__auto___22753 = cljs.core.chunk_first(seq__22717_22752__$1);
var G__22754 = cljs.core.chunk_rest(seq__22717_22752__$1);
var G__22755 = c__4638__auto___22753;
var G__22756 = cljs.core.count(c__4638__auto___22753);
var G__22757 = (0);
seq__22717_22742 = G__22754;
chunk__22718_22743 = G__22755;
count__22719_22744 = G__22756;
i__22720_22745 = G__22757;
continue;
} else {
var controller_22758 = cljs.core.first(seq__22717_22752__$1);
reitit.frontend.controllers.apply_controller(controller_22758,cljs.core.cst$kw$start);


var G__22759 = cljs.core.next(seq__22717_22752__$1);
var G__22760 = null;
var G__22761 = (0);
var G__22762 = (0);
seq__22717_22742 = G__22759;
chunk__22718_22743 = G__22760;
count__22719_22744 = G__22761;
i__22720_22745 = G__22762;
continue;
}
} else {
}
}
break;
}

return new_controllers;
});
