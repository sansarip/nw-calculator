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
reitit.frontend.controllers.get_identity = (function reitit$frontend$controllers$get_identity(p__22700,match){
var map__22701 = p__22700;
var map__22701__$1 = cljs.core.__destructure_map(map__22701);
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22701__$1,cljs.core.cst$kw$identity);
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22701__$1,cljs.core.cst$kw$parameters);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22701__$1,cljs.core.cst$kw$params);
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4611__auto__ = (function reitit$frontend$controllers$get_identity_$_iter__22702(s__22703){
return (new cljs.core.LazySeq(null,(function (){
var s__22703__$1 = s__22703;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__22703__$1);
if(temp__5753__auto__){
var s__22703__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22703__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__22703__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__22705 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__22704 = (0);
while(true){
if((i__22704 < size__4610__auto__)){
var vec__22706 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4609__auto__,i__22704);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22706,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22706,(1),null);
cljs.core.chunk_append(b__22705,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$parameters.cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null));

var G__22712 = (i__22704 + (1));
i__22704 = G__22712;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22705),reitit$frontend$controllers$get_identity_$_iter__22702(cljs.core.chunk_rest(s__22703__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22705),null);
}
} else {
var vec__22709 = cljs.core.first(s__22703__$2);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22709,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22709,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$parameters.cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null),reitit$frontend$controllers$get_identity_$_iter__22702(cljs.core.rest(s__22703__$2)));
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
var G__22713 = cljs.core.cst$kw$reitit$frontend$controllers_SLASH_identity.cljs$core$IFn$_invoke$arity$1(controller);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22713) : f.call(null,G__22713));
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
var seq__22714_22722 = cljs.core.seq(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$old,changed_controllers)));
var chunk__22715_22723 = null;
var count__22716_22724 = (0);
var i__22717_22725 = (0);
while(true){
if((i__22717_22725 < count__22716_22724)){
var controller_22726 = chunk__22715_22723.cljs$core$IIndexed$_nth$arity$2(null,i__22717_22725);
reitit.frontend.controllers.apply_controller(controller_22726,cljs.core.cst$kw$stop);


var G__22727 = seq__22714_22722;
var G__22728 = chunk__22715_22723;
var G__22729 = count__22716_22724;
var G__22730 = (i__22717_22725 + (1));
seq__22714_22722 = G__22727;
chunk__22715_22723 = G__22728;
count__22716_22724 = G__22729;
i__22717_22725 = G__22730;
continue;
} else {
var temp__5753__auto___22731 = cljs.core.seq(seq__22714_22722);
if(temp__5753__auto___22731){
var seq__22714_22732__$1 = temp__5753__auto___22731;
if(cljs.core.chunked_seq_QMARK_(seq__22714_22732__$1)){
var c__4638__auto___22733 = cljs.core.chunk_first(seq__22714_22732__$1);
var G__22734 = cljs.core.chunk_rest(seq__22714_22732__$1);
var G__22735 = c__4638__auto___22733;
var G__22736 = cljs.core.count(c__4638__auto___22733);
var G__22737 = (0);
seq__22714_22722 = G__22734;
chunk__22715_22723 = G__22735;
count__22716_22724 = G__22736;
i__22717_22725 = G__22737;
continue;
} else {
var controller_22738 = cljs.core.first(seq__22714_22732__$1);
reitit.frontend.controllers.apply_controller(controller_22738,cljs.core.cst$kw$stop);


var G__22739 = cljs.core.next(seq__22714_22732__$1);
var G__22740 = null;
var G__22741 = (0);
var G__22742 = (0);
seq__22714_22722 = G__22739;
chunk__22715_22723 = G__22740;
count__22716_22724 = G__22741;
i__22717_22725 = G__22742;
continue;
}
} else {
}
}
break;
}

var seq__22718_22743 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$new,changed_controllers));
var chunk__22719_22744 = null;
var count__22720_22745 = (0);
var i__22721_22746 = (0);
while(true){
if((i__22721_22746 < count__22720_22745)){
var controller_22747 = chunk__22719_22744.cljs$core$IIndexed$_nth$arity$2(null,i__22721_22746);
reitit.frontend.controllers.apply_controller(controller_22747,cljs.core.cst$kw$start);


var G__22748 = seq__22718_22743;
var G__22749 = chunk__22719_22744;
var G__22750 = count__22720_22745;
var G__22751 = (i__22721_22746 + (1));
seq__22718_22743 = G__22748;
chunk__22719_22744 = G__22749;
count__22720_22745 = G__22750;
i__22721_22746 = G__22751;
continue;
} else {
var temp__5753__auto___22752 = cljs.core.seq(seq__22718_22743);
if(temp__5753__auto___22752){
var seq__22718_22753__$1 = temp__5753__auto___22752;
if(cljs.core.chunked_seq_QMARK_(seq__22718_22753__$1)){
var c__4638__auto___22754 = cljs.core.chunk_first(seq__22718_22753__$1);
var G__22755 = cljs.core.chunk_rest(seq__22718_22753__$1);
var G__22756 = c__4638__auto___22754;
var G__22757 = cljs.core.count(c__4638__auto___22754);
var G__22758 = (0);
seq__22718_22743 = G__22755;
chunk__22719_22744 = G__22756;
count__22720_22745 = G__22757;
i__22721_22746 = G__22758;
continue;
} else {
var controller_22759 = cljs.core.first(seq__22718_22753__$1);
reitit.frontend.controllers.apply_controller(controller_22759,cljs.core.cst$kw$start);


var G__22760 = cljs.core.next(seq__22718_22753__$1);
var G__22761 = null;
var G__22762 = (0);
var G__22763 = (0);
seq__22718_22743 = G__22760;
chunk__22719_22744 = G__22761;
count__22720_22745 = G__22762;
i__22721_22746 = G__22763;
continue;
}
} else {
}
}
break;
}

return new_controllers;
});
