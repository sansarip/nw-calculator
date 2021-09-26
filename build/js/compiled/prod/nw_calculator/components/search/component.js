// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('nw_calculator.components.search.component');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('nw_calculator.utilities');
goog.require('reagent.core');
goog.require('nw_calculator.components.search.styles');
goog.require('nw_calculator.components.circular_button.component');
goog.require('nw_calculator.components.loader.component');
goog.require('nw_calculator.components.dropdown.component');
goog.require('nw_calculator.hooks');
nw_calculator.components.search.component.global$module$react = goog.global["React"];
nw_calculator.components.search.component.search = (function nw_calculator$components$search$component$search(p__30990){
var map__30991 = p__30990;
var map__30991__$1 = cljs.core.__destructure_map(map__30991);
var make_result = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__30991__$1,cljs.core.cst$kw$make_DASH_result,cljs.core.identity);
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30991__$1,cljs.core.cst$kw$props);
var results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30991__$1,cljs.core.cst$kw$results);
var on_clear = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__30991__$1,cljs.core.cst$kw$on_DASH_clear,nw_calculator.utilities.no_op);
var loading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30991__$1,cljs.core.cst$kw$loading_QMARK_);
var get_value = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__30991__$1,cljs.core.cst$kw$get_DASH_value,cljs.core.constantly(""));
var on_search = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__30991__$1,cljs.core.cst$kw$on_DASH_search,nw_calculator.utilities.no_op);
var on_select = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__30991__$1,cljs.core.cst$kw$on_DASH_select,nw_calculator.utilities.no_op);
var input_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30991__$1,cljs.core.cst$kw$input_DASH_props);
var vec__30992 = nw_calculator.components.search.component.global$module$react.useState("");
var input_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30992,(0),null);
var set_input_value_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30992,(1),null);
var input_ref = nw_calculator.components.search.component.global$module$react.useRef();
var escape_key_pressed_QMARK_ = nw_calculator.hooks.use_key_press("Escape");
var with_let30995 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let30995);
var temp__5757__auto___31005 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___31005 == null)){
} else {
var c__14347__auto___31006 = temp__5757__auto___31005;
if((with_let30995.generation === c__14347__auto___31006.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let30995.generation = c__14347__auto___31006.ratomGeneration);
}

var init30996 = (with_let30995.length === (0));
var input_focused_QMARK_ = ((((init30996) || (cljs.core.not(with_let30995.hasOwnProperty((0))))))?(with_let30995[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false)):(with_let30995[(0)]));
var set_input_value_STAR__BANG_ = ((((init30996) || (cljs.core.not(with_let30995.hasOwnProperty((1))))))?(with_let30995[(1)] = (function (input_value__$1){
(set_input_value_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_input_value_BANG_.cljs$core$IFn$_invoke$arity$1(input_value__$1) : set_input_value_BANG_.call(null,input_value__$1));

return (input_ref.current.value = input_value__$1);
})):(with_let30995[(1)]));
var search_BANG_ = ((((init30996) || (cljs.core.not(with_let30995.hasOwnProperty((2))))))?(with_let30995[(2)] = (function (event){
var input_value__$1 = event.target.value;
(set_input_value_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_input_value_BANG_.cljs$core$IFn$_invoke$arity$1(input_value__$1) : set_input_value_BANG_.call(null,input_value__$1));

var fexpr__30998 = ((cljs.core.empty_QMARK_(input_value__$1))?on_clear:on_search);
return (fexpr__30998.cljs$core$IFn$_invoke$arity$1 ? fexpr__30998.cljs$core$IFn$_invoke$arity$1(input_value__$1) : fexpr__30998.call(null,input_value__$1));
})):(with_let30995[(2)]));
var select_result_BANG_ = ((((init30996) || (cljs.core.not(with_let30995.hasOwnProperty((3))))))?(with_let30995[(3)] = (function (result){
(on_select.cljs$core$IFn$_invoke$arity$1 ? on_select.cljs$core$IFn$_invoke$arity$1(result) : on_select.call(null,result));

var G__30999_31007 = (get_value.cljs$core$IFn$_invoke$arity$1 ? get_value.cljs$core$IFn$_invoke$arity$1(result) : get_value.call(null,result));
(set_input_value_STAR__BANG_.cljs$core$IFn$_invoke$arity$1 ? set_input_value_STAR__BANG_.cljs$core$IFn$_invoke$arity$1(G__30999_31007) : set_input_value_STAR__BANG_.call(null,G__30999_31007));

return input_ref.current.focus();
})):(with_let30995[(3)]));
var clear_input_value_BANG_ = ((((init30996) || (cljs.core.not(with_let30995.hasOwnProperty((4))))))?(with_let30995[(4)] = (function() { 
var G__31008__delegate = function (_){
(on_clear.cljs$core$IFn$_invoke$arity$0 ? on_clear.cljs$core$IFn$_invoke$arity$0() : on_clear.call(null));

(set_input_value_STAR__BANG_.cljs$core$IFn$_invoke$arity$1 ? set_input_value_STAR__BANG_.cljs$core$IFn$_invoke$arity$1("") : set_input_value_STAR__BANG_.call(null,""));

return input_ref.current.focus();
};
var G__31008 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__31009__i = 0, G__31009__a = new Array(arguments.length -  0);
while (G__31009__i < G__31009__a.length) {G__31009__a[G__31009__i] = arguments[G__31009__i + 0]; ++G__31009__i;}
  _ = new cljs.core.IndexedSeq(G__31009__a,0,null);
} 
return G__31008__delegate.call(this,_);};
G__31008.cljs$lang$maxFixedArity = 0;
G__31008.cljs$lang$applyTo = (function (arglist__31010){
var _ = cljs.core.seq(arglist__31010);
return G__31008__delegate(_);
});
G__31008.cljs$core$IFn$_invoke$arity$variadic = G__31008__delegate;
return G__31008;
})()
):(with_let30995[(4)]));
var focus_BANG_ = ((((init30996) || (cljs.core.not(with_let30995.hasOwnProperty((5))))))?(with_let30995[(5)] = (function (){
input_ref.current.focus();

return cljs.core.reset_BANG_(input_focused_QMARK_,true);
})):(with_let30995[(5)]));
var blur_BANG_ = ((((init30996) || (cljs.core.not(with_let30995.hasOwnProperty((6))))))?(with_let30995[(6)] = (function (){
input_ref.current.blur();

return setTimeout((function (){
return cljs.core.reset_BANG_(input_focused_QMARK_,false);
}),(200));
})):(with_let30995[(6)]));
var res30997 = (function (){
var G__31000_31011 = (function (){
var G__31002_31013 = input_ref.current.value;
(set_input_value_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_input_value_BANG_.cljs$core$IFn$_invoke$arity$1(G__31002_31013) : set_input_value_BANG_.call(null,G__31002_31013));

return nw_calculator.utilities.no_op;
});
var G__31001_31012 = [input_ref];
nw_calculator.components.search.component.global$module$react.useEffect(G__31000_31011,G__31001_31012);

var G__31003_31014 = (function (){
(blur_BANG_.cljs$core$IFn$_invoke$arity$0 ? blur_BANG_.cljs$core$IFn$_invoke$arity$0() : blur_BANG_.call(null));

return nw_calculator.utilities.no_op;
});
var G__31004_31015 = [escape_key_pressed_QMARK_];
nw_calculator.components.search.component.global$module$react.useEffect(G__31003_31014,G__31004_31015);

return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$bg_DASH_inherit$relative$w_DASH_full,reagent.core.merge_props.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,nw_calculator.components.search.styles.search_class()], null),props),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$basic_DASH_input$search$w_DASH_full$flex_DASH_grow$md_COLON_pr_DASH_12_DASH_imp,reagent.core.merge_props.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$spell_DASH_check,false,cljs.core.cst$kw$ref,input_ref,cljs.core.cst$kw$placeholder,"Search something \uD83D\uDD0D",cljs.core.cst$kw$on_DASH_focus,focus_BANG_,cljs.core.cst$kw$on_DASH_blur,blur_BANG_,cljs.core.cst$kw$on_DASH_input,search_BANG_], null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(input_props,cljs.core.cst$kw$ref,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$on_DASH_input,cljs.core.cst$kw$on_DASH_focus_DASH_out,cljs.core.cst$kw$on_DASH_focus], 0)))], null),(cljs.core.truth_((function (){var and__4210__auto__ = cljs.core.not_empty(input_value);
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not(loading_QMARK_);
} else {
return and__4210__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.circular_button.component.circular_button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_click,clear_input_value_BANG_,cljs.core.cst$kw$class,"absolute pb-3 -right-2 md:right-0 top-2 border-0 flex-none"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fas$fa_DASH_times$text_DASH_sm$md_COLON_text_DASH_base], null)], null):null),(cljs.core.truth_(loading_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.loader.component.loader,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"absolute text-lg md:text-2xl right-2 md:right-3 top-3 md:top-2 flex-none"], null)], null):null),(cljs.core.truth_((function (){var and__4210__auto__ = cljs.core.deref(input_focused_QMARK_);
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not_empty(results);
} else {
return and__4210__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$f_GT_,nw_calculator.components.dropdown.component.options,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$on_DASH_select,select_result_BANG_,cljs.core.cst$kw$options,results,cljs.core.cst$kw$make_DASH_option,make_result], null)], null):null)], null);
})()
;
return res30997;
});
