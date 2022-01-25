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
reitit.frontend.controllers.get_identity = (function reitit$frontend$controllers$get_identity(p__22710,match){
var map__22711 = p__22710;
var map__22711__$1 = cljs.core.__destructure_map(map__22711);
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22711__$1,cljs.core.cst$kw$identity);
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22711__$1,cljs.core.cst$kw$parameters);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22711__$1,cljs.core.cst$kw$params);
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4611__auto__ = (function reitit$frontend$controllers$get_identity_$_iter__22712(s__22713){
return (new cljs.core.LazySeq(null,(function (){
var s__22713__$1 = s__22713;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__22713__$1);
if(temp__5753__auto__){
var s__22713__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22713__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__22713__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__22715 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__22714 = (0);
while(true){
if((i__22714 < size__4610__auto__)){
var vec__22716 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4609__auto__,i__22714);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22716,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22716,(1),null);
cljs.core.chunk_append(b__22715,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$parameters.cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null));

var G__22722 = (i__22714 + (1));
i__22714 = G__22722;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22715),reitit$frontend$controllers$get_identity_$_iter__22712(cljs.core.chunk_rest(s__22713__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22715),null);
}
} else {
var vec__22719 = cljs.core.first(s__22713__$2);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22719,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22719,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$parameters.cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null),reitit$frontend$controllers$get_identity_$_iter__22712(cljs.core.rest(s__22713__$2)));
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
var G__22723 = cljs.core.cst$kw$reitit$frontend$controllers_SLASH_identity.cljs$core$IFn$_invoke$arity$1(controller);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22723) : f.call(null,G__22723));
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
var seq__22724_22732 = cljs.core.seq(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$old,changed_controllers)));
var chunk__22725_22733 = null;
var count__22726_22734 = (0);
var i__22727_22735 = (0);
while(true){
if((i__22727_22735 < count__22726_22734)){
var controller_22736 = chunk__22725_22733.cljs$core$IIndexed$_nth$arity$2(null,i__22727_22735);
reitit.frontend.controllers.apply_controller(controller_22736,cljs.core.cst$kw$stop);


var G__22737 = seq__22724_22732;
var G__22738 = chunk__22725_22733;
var G__22739 = count__22726_22734;
var G__22740 = (i__22727_22735 + (1));
seq__22724_22732 = G__22737;
chunk__22725_22733 = G__22738;
count__22726_22734 = G__22739;
i__22727_22735 = G__22740;
continue;
} else {
var temp__5753__auto___22741 = cljs.core.seq(seq__22724_22732);
if(temp__5753__auto___22741){
var seq__22724_22742__$1 = temp__5753__auto___22741;
if(cljs.core.chunked_seq_QMARK_(seq__22724_22742__$1)){
var c__4638__auto___22743 = cljs.core.chunk_first(seq__22724_22742__$1);
var G__22744 = cljs.core.chunk_rest(seq__22724_22742__$1);
var G__22745 = c__4638__auto___22743;
var G__22746 = cljs.core.count(c__4638__auto___22743);
var G__22747 = (0);
seq__22724_22732 = G__22744;
chunk__22725_22733 = G__22745;
count__22726_22734 = G__22746;
i__22727_22735 = G__22747;
continue;
} else {
var controller_22748 = cljs.core.first(seq__22724_22742__$1);
reitit.frontend.controllers.apply_controller(controller_22748,cljs.core.cst$kw$stop);


var G__22749 = cljs.core.next(seq__22724_22742__$1);
var G__22750 = null;
var G__22751 = (0);
var G__22752 = (0);
seq__22724_22732 = G__22749;
chunk__22725_22733 = G__22750;
count__22726_22734 = G__22751;
i__22727_22735 = G__22752;
continue;
}
} else {
}
}
break;
}

var seq__22728_22753 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$new,changed_controllers));
var chunk__22729_22754 = null;
var count__22730_22755 = (0);
var i__22731_22756 = (0);
while(true){
if((i__22731_22756 < count__22730_22755)){
var controller_22757 = chunk__22729_22754.cljs$core$IIndexed$_nth$arity$2(null,i__22731_22756);
reitit.frontend.controllers.apply_controller(controller_22757,cljs.core.cst$kw$start);


var G__22758 = seq__22728_22753;
var G__22759 = chunk__22729_22754;
var G__22760 = count__22730_22755;
var G__22761 = (i__22731_22756 + (1));
seq__22728_22753 = G__22758;
chunk__22729_22754 = G__22759;
count__22730_22755 = G__22760;
i__22731_22756 = G__22761;
continue;
} else {
var temp__5753__auto___22762 = cljs.core.seq(seq__22728_22753);
if(temp__5753__auto___22762){
var seq__22728_22763__$1 = temp__5753__auto___22762;
if(cljs.core.chunked_seq_QMARK_(seq__22728_22763__$1)){
var c__4638__auto___22764 = cljs.core.chunk_first(seq__22728_22763__$1);
var G__22765 = cljs.core.chunk_rest(seq__22728_22763__$1);
var G__22766 = c__4638__auto___22764;
var G__22767 = cljs.core.count(c__4638__auto___22764);
var G__22768 = (0);
seq__22728_22753 = G__22765;
chunk__22729_22754 = G__22766;
count__22730_22755 = G__22767;
i__22731_22756 = G__22768;
continue;
} else {
var controller_22769 = cljs.core.first(seq__22728_22763__$1);
reitit.frontend.controllers.apply_controller(controller_22769,cljs.core.cst$kw$start);


var G__22770 = cljs.core.next(seq__22728_22763__$1);
var G__22771 = null;
var G__22772 = (0);
var G__22773 = (0);
seq__22728_22753 = G__22770;
chunk__22729_22754 = G__22771;
count__22730_22755 = G__22772;
i__22731_22756 = G__22773;
continue;
}
} else {
}
}
break;
}

return new_controllers;
});
