// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('nw_calculator.components.multiplication.component');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('nw_calculator.components.multiplication.styles');
goog.require('nw_calculator.utilities');
nw_calculator.components.multiplication.component.global$module$react = goog.global["React"];
nw_calculator.components.multiplication.component.multiplication = (function nw_calculator$components$multiplication$component$multiplication(p__29207){
var map__29208 = p__29207;
var map__29208__$1 = cljs.core.__destructure_map(map__29208);
var map__29209 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29208__$1,cljs.core.cst$kw$input_DASH_props);
var map__29209__$1 = cljs.core.__destructure_map(map__29209);
var input_props = map__29209__$1;
var on_input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29209__$1,cljs.core.cst$kw$on_DASH_input);
var base = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29208__$1,cljs.core.cst$kw$base);
var container_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29208__$1,cljs.core.cst$kw$container_DASH_props);
var vec__29210 = nw_calculator.components.multiplication.component.global$module$react.useState((1));
var multiplier = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29210,(0),null);
var set_multiplier_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29210,(1),null);
var input_ref = nw_calculator.components.multiplication.component.global$module$react.useRef();
var with_let29213 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let29213);
var temp__5757__auto___29220 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___29220 == null)){
} else {
var c__13075__auto___29221 = temp__5757__auto___29220;
if((with_let29213.generation === c__13075__auto___29221.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let29213.generation = c__13075__auto___29221.ratomGeneration);
}

var init29214 = (with_let29213.length === (0));
var on_input_STAR_ = ((((init29214) || (cljs.core.not(with_let29213.hasOwnProperty((0))))))?(with_let29213[(0)] = (function (event){
var G__29216_29222 = nw_calculator.utilities.parse_pos.cljs$core$IFn$_invoke$arity$1(event.target.value);
(set_multiplier_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_multiplier_BANG_.cljs$core$IFn$_invoke$arity$1(G__29216_29222) : set_multiplier_BANG_.call(null,G__29216_29222));

return (on_input.cljs$core$IFn$_invoke$arity$1 ? on_input.cljs$core$IFn$_invoke$arity$1(event) : on_input.call(null,event));
})):(with_let29213[(0)]));
var res29215 = (function (){
var G__29217_29223 = (function (){
var temp__5753__auto___29225 = input_ref.current;
if(cljs.core.truth_(temp__5753__auto___29225)){
var input_ele_29226 = temp__5753__auto___29225;
var G__29219_29227 = nw_calculator.utilities.parse_pos.cljs$core$IFn$_invoke$arity$1(input_ele_29226.defaultValue);
(set_multiplier_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_multiplier_BANG_.cljs$core$IFn$_invoke$arity$1(G__29219_29227) : set_multiplier_BANG_.call(null,G__29219_29227));
} else {
}

return nw_calculator.utilities.no_op;
});
var G__29218_29224 = [input_ref];
nw_calculator.components.multiplication.component.global$module$react.useEffect(G__29217_29223,G__29218_29224);

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$relative$w_DASH_16$flex$justify_DASH_end$items$center,reagent.core.merge_props.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,nw_calculator.components.multiplication.styles.multiplication_class()], null),container_props),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$basic_DASH_input$text_DASH_right$multiplier,reagent.core.merge_props.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$placeholder,"1",cljs.core.cst$kw$ref,input_ref,cljs.core.cst$kw$type,cljs.core.cst$kw$number,cljs.core.cst$kw$on_DASH_input,on_input_STAR_,cljs.core.cst$kw$default_DASH_value,multiplier], null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(input_props,cljs.core.cst$kw$on_DASH_input,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$ref], 0)))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$w_DASH_full$flex$flex_DASH_col$absolute,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"-bottom-20"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$w_DASH_full$flex$justify_DASH_between$gap_DASH_2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$flex$flex_DASH_col$justify_DASH_center$text_DASH_xl$fal$fa_DASH_times], null),base], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$w_DASH_full$flex$justify_DASH_between$gap_DASH_2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$flex$flex_DASH_col$justify_DASH_center$text_DASH_xl$fal$fa_DASH_equals], null),(multiplier * base)], null)], null)], null);
})()
;
return res29215;
});
