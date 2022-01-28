// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('nw_calculator.components.drawer.component');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('nw_calculator.utilities');
goog.require('reagent.core');
nw_calculator.components.drawer.component.global$module$react = goog.global["React"];
nw_calculator.components.drawer.component.drawer = (function nw_calculator$components$drawer$component$drawer(var_args){
var args__4824__auto__ = [];
var len__4818__auto___31042 = arguments.length;
var i__4819__auto___31043 = (0);
while(true){
if((i__4819__auto___31043 < len__4818__auto___31042)){
args__4824__auto__.push((arguments[i__4819__auto___31043]));

var G__31044 = (i__4819__auto___31043 + (1));
i__4819__auto___31043 = G__31044;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return nw_calculator.components.drawer.component.drawer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(nw_calculator.components.drawer.component.drawer.cljs$core$IFn$_invoke$arity$variadic = (function (p__31037,children){
var map__31038 = p__31037;
var map__31038__$1 = cljs.core.__destructure_map(map__31038);
var slide_out_direction = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31038__$1,cljs.core.cst$kw$slide_DASH_out_DASH_direction,cljs.core.cst$kw$right);
var on_close = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31038__$1,cljs.core.cst$kw$on_DASH_close,nw_calculator.utilities.no_op);
var container_props = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31038__$1,cljs.core.cst$kw$container_DASH_props,cljs.core.PersistentArrayMap.EMPTY);
var with_let31039 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let31039);
var temp__5757__auto___31045 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___31045 == null)){
} else {
var c__14347__auto___31046 = temp__5757__auto___31045;
if((with_let31039.generation === c__14347__auto___31046.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let31039.generation = c__14347__auto___31046.ratomGeneration);
}

var init31040 = (with_let31039.length === (0));
var open_QMARK_ = ((((init31040) || (cljs.core.not(with_let31039.hasOwnProperty((0))))))?(with_let31039[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false)):(with_let31039[(0)]));
var toggle_drawer_BANG_ = ((((init31040) || (cljs.core.not(with_let31039.hasOwnProperty((1))))))?(with_let31039[(1)] = (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(open_QMARK_,cljs.core.not);
})):(with_let31039[(1)]));
var res31041 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$absolute$flex$right_DASH_0$flex_DASH_row_DASH_reverse,container_props,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$z_DASH_0$shadow_DASH_2xl$relative$grow$h_DASH_screen$bg_DASH_white$overflow_DASH_hidden$transition_DASH_all$duration_DASH_1000,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,(cljs.core.truth_(cljs.core.deref(open_QMARK_))?"md:w-full sm:w-19/20screen":"md:w-10 w-6")], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$overflow_DASH_auto$h_DASH_full$pl_DASH_16$pr_DASH_16$pb_DASH_16$pt_DASH_32], null),children)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$button$focus_COLON_border_DASH_white$border_DASH_2$border_DASH_white$p_DASH_0_DASH_imp$w_DASH_12$h_DASH_12$md_COLON_w_DASH_16$md_COLON_h_DASH_16$rounded_DASH_full$top_DASH_32$left_DASH_6$md_COLON_left_DASH_8$relative$z_DASH_10$flex_DASH_none,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"toggle drawer button",cljs.core.cst$kw$on_DASH_click,toggle_drawer_BANG_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$block$fas$fa_DASH_chevron_DASH_left$text_DASH_base$md_COLON_text_DASH_xl$transition_DASH_transform,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,(cljs.core.truth_(cljs.core.deref(open_QMARK_))?"flip-x":null)], null)], null)], null)], null);
return res31041;
}));

(nw_calculator.components.drawer.component.drawer.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(nw_calculator.components.drawer.component.drawer.cljs$lang$applyTo = (function (seq31035){
var G__31036 = cljs.core.first(seq31035);
var seq31035__$1 = cljs.core.next(seq31035);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31036,seq31035__$1);
}));

