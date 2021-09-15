// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('nw_calculator.components.toggle.component');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('nw_calculator.components.toggle.styles');
goog.require('reagent.core');
goog.require('nw_calculator.utilities');
nw_calculator.components.toggle.component.toggle = (function nw_calculator$components$toggle$component$toggle(var_args){
var args__4824__auto__ = [];
var len__4818__auto___29024 = arguments.length;
var i__4819__auto___29025 = (0);
while(true){
if((i__4819__auto___29025 < len__4818__auto___29024)){
args__4824__auto__.push((arguments[i__4819__auto___29025]));

var G__29026 = (i__4819__auto___29025 + (1));
i__4819__auto___29025 = G__29026;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return nw_calculator.components.toggle.component.toggle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(nw_calculator.components.toggle.component.toggle.cljs$core$IFn$_invoke$arity$variadic = (function (p__29019,children){
var map__29020 = p__29019;
var map__29020__$1 = cljs.core.__destructure_map(map__29020);
var container_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29020__$1,cljs.core.cst$kw$container_DASH_props);
var checkbox_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29020__$1,cljs.core.cst$kw$checkbox_DASH_props);
var on = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29020__$1,cljs.core.cst$kw$on);
var off = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29020__$1,cljs.core.cst$kw$off);
var with_let29021 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let29021);
var temp__5757__auto___29027 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___29027 == null)){
} else {
var c__13075__auto___29028 = temp__5757__auto___29027;
if((with_let29021.generation === c__13075__auto___29028.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let29021.generation = c__13075__auto___29028.ratomGeneration);
}

var init29022 = (with_let29021.length === (0));
var input_id = ((((init29022) || (cljs.core.not(with_let29021.hasOwnProperty((0))))))?(with_let29021[(0)] = ["toggle_",nw_calculator.utilities.short_uuid_str()].join('')):(with_let29021[(0)]));
var res29023 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label$block$relative$cursor_DASH_pointer$border_DASH_2$border_DASH_purple$border_DASH_opacity_DASH_100$rounded_DASH_full,reagent.core.merge_props.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$for,input_id,cljs.core.cst$kw$class,nw_calculator.components.toggle.styles.toggle_class()], null),container_props),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$sr_DASH_only,reagent.core.merge_props.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,input_id,cljs.core.cst$kw$type,"checkbox"], null),checkbox_props)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$absolute$ball$rounded_DASH_full$transition$z_DASH_50$bg_DASH_purple$bg_DASH_opacity_DASH_100], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$on$absolute$w_DASH_6$h_DASH_6$flex$items_DASH_center$z_DASH_40,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"transform -translate-y-1/2 top-9/25"], null),on], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$off$absolute$w_DASH_6$h_DASH_6$flex$items_DASH_center$z_DASH_40,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"transform -translate-y-1/2 top-9/25"], null),off], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_], null),children)], null);
return res29023;
}));

(nw_calculator.components.toggle.component.toggle.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(nw_calculator.components.toggle.component.toggle.cljs$lang$applyTo = (function (seq29017){
var G__29018 = cljs.core.first(seq29017);
var seq29017__$1 = cljs.core.next(seq29017);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29018,seq29017__$1);
}));

