// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('nw_calculator.components.multiplication.component');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('nw_calculator.components.multiplication.styles');
goog.require('nw_calculator.utilities');
nw_calculator.components.multiplication.component.global$module$react = goog.global["React"];
nw_calculator.components.multiplication.component.multiplication = (function nw_calculator$components$multiplication$component$multiplication(p__31093){
var map__31094 = p__31093;
var map__31094__$1 = cljs.core.__destructure_map(map__31094);
var map__31095 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31094__$1,cljs.core.cst$kw$input_DASH_props);
var map__31095__$1 = cljs.core.__destructure_map(map__31095);
var input_props = map__31095__$1;
var on_input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31095__$1,cljs.core.cst$kw$on_DASH_input);
var base = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31094__$1,cljs.core.cst$kw$base);
var container_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31094__$1,cljs.core.cst$kw$container_DASH_props);
var vec__31096 = nw_calculator.components.multiplication.component.global$module$react.useState((1));
var multiplier = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31096,(0),null);
var set_multiplier_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31096,(1),null);
var input_ref = nw_calculator.components.multiplication.component.global$module$react.useRef();
var with_let31099 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let31099);
var temp__5757__auto___31106 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___31106 == null)){
} else {
var c__14347__auto___31107 = temp__5757__auto___31106;
if((with_let31099.generation === c__14347__auto___31107.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let31099.generation = c__14347__auto___31107.ratomGeneration);
}

var init31100 = (with_let31099.length === (0));
var on_input_STAR_ = ((((init31100) || (cljs.core.not(with_let31099.hasOwnProperty((0))))))?(with_let31099[(0)] = (function (event){
var G__31102_31108 = nw_calculator.utilities.parse_pos.cljs$core$IFn$_invoke$arity$1(event.target.value);
(set_multiplier_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_multiplier_BANG_.cljs$core$IFn$_invoke$arity$1(G__31102_31108) : set_multiplier_BANG_.call(null,G__31102_31108));

return (on_input.cljs$core$IFn$_invoke$arity$1 ? on_input.cljs$core$IFn$_invoke$arity$1(event) : on_input.call(null,event));
})):(with_let31099[(0)]));
var res31101 = (function (){
var G__31103_31109 = (function (){
var temp__5753__auto___31111 = input_ref.current;
if(cljs.core.truth_(temp__5753__auto___31111)){
var input_ele_31112 = temp__5753__auto___31111;
var G__31105_31113 = nw_calculator.utilities.parse_pos.cljs$core$IFn$_invoke$arity$1(input_ele_31112.defaultValue);
(set_multiplier_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_multiplier_BANG_.cljs$core$IFn$_invoke$arity$1(G__31105_31113) : set_multiplier_BANG_.call(null,G__31105_31113));
} else {
}

return nw_calculator.utilities.no_op;
});
var G__31104_31110 = [input_ref];
nw_calculator.components.multiplication.component.global$module$react.useEffect(G__31103_31109,G__31104_31110);

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$relative$w_DASH_16$flex$justify_DASH_end$items$center,reagent.core.merge_props.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,nw_calculator.components.multiplication.styles.multiplication_class()], null),container_props),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$basic_DASH_input$multiplier,reagent.core.merge_props.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$placeholder,"1",cljs.core.cst$kw$ref,input_ref,cljs.core.cst$kw$type,cljs.core.cst$kw$number,cljs.core.cst$kw$on_DASH_input,on_input_STAR_,cljs.core.cst$kw$default_DASH_value,multiplier], null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(input_props,cljs.core.cst$kw$on_DASH_input,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$ref], 0)))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$w_DASH_full$flex$flex_DASH_col$absolute,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"-bottom-20 -left-6"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$w_DASH_full$flex$justify_DASH_between$gap_DASH_2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$flex$flex_DASH_col$justify_DASH_center$text_DASH_xl$fal$fa_DASH_times], null),base], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$w_DASH_full$flex$justify_DASH_between$gap_DASH_2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$flex$flex_DASH_col$justify_DASH_center$text_DASH_xl$fal$fa_DASH_equals], null),(multiplier * base)], null)], null)], null);
})()
;
return res31101;
});
