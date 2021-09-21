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
nw_calculator.components.search.component.search = (function nw_calculator$components$search$component$search(p__29168){
var map__29169 = p__29168;
var map__29169__$1 = cljs.core.__destructure_map(map__29169);
var make_result = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29169__$1,cljs.core.cst$kw$make_DASH_result,cljs.core.identity);
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29169__$1,cljs.core.cst$kw$props);
var results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29169__$1,cljs.core.cst$kw$results);
var on_clear = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29169__$1,cljs.core.cst$kw$on_DASH_clear,nw_calculator.utilities.no_op);
var loading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29169__$1,cljs.core.cst$kw$loading_QMARK_);
var get_value = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29169__$1,cljs.core.cst$kw$get_DASH_value,cljs.core.constantly(""));
var on_search = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29169__$1,cljs.core.cst$kw$on_DASH_search,nw_calculator.utilities.no_op);
var on_select = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29169__$1,cljs.core.cst$kw$on_DASH_select,nw_calculator.utilities.no_op);
var input_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29169__$1,cljs.core.cst$kw$input_DASH_props);
var vec__29170 = nw_calculator.components.search.component.global$module$react.useState("");
var input_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29170,(0),null);
var set_input_value_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29170,(1),null);
var vec__29173 = nw_calculator.components.search.component.global$module$react.useState(false);
var input_focused_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29173,(0),null);
var set_input_focused = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29173,(1),null);
var input_ref = nw_calculator.components.search.component.global$module$react.useRef();
var escape_key_pressed_QMARK_ = nw_calculator.hooks.use_key_press("Escape");
var with_let29176 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let29176);
var temp__5757__auto___29186 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___29186 == null)){
} else {
var c__13075__auto___29187 = temp__5757__auto___29186;
if((with_let29176.generation === c__13075__auto___29187.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let29176.generation = c__13075__auto___29187.ratomGeneration);
}

var init29177 = (with_let29176.length === (0));
var set_input_value_STAR__BANG_ = ((((init29177) || (cljs.core.not(with_let29176.hasOwnProperty((0))))))?(with_let29176[(0)] = (function (input_value__$1){
(set_input_value_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_input_value_BANG_.cljs$core$IFn$_invoke$arity$1(input_value__$1) : set_input_value_BANG_.call(null,input_value__$1));

return (input_ref.current.value = input_value__$1);
})):(with_let29176[(0)]));
var search_BANG_ = ((((init29177) || (cljs.core.not(with_let29176.hasOwnProperty((1))))))?(with_let29176[(1)] = (function (event){
var input_value__$1 = event.target.value;
(set_input_value_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_input_value_BANG_.cljs$core$IFn$_invoke$arity$1(input_value__$1) : set_input_value_BANG_.call(null,input_value__$1));

var fexpr__29179 = ((cljs.core.empty_QMARK_(input_value__$1))?on_clear:on_search);
return (fexpr__29179.cljs$core$IFn$_invoke$arity$1 ? fexpr__29179.cljs$core$IFn$_invoke$arity$1(input_value__$1) : fexpr__29179.call(null,input_value__$1));
})):(with_let29176[(1)]));
var select_result_BANG_ = ((((init29177) || (cljs.core.not(with_let29176.hasOwnProperty((2))))))?(with_let29176[(2)] = (function (result){
(on_select.cljs$core$IFn$_invoke$arity$1 ? on_select.cljs$core$IFn$_invoke$arity$1(result) : on_select.call(null,result));

var G__29180_29188 = (get_value.cljs$core$IFn$_invoke$arity$1 ? get_value.cljs$core$IFn$_invoke$arity$1(result) : get_value.call(null,result));
(set_input_value_STAR__BANG_.cljs$core$IFn$_invoke$arity$1 ? set_input_value_STAR__BANG_.cljs$core$IFn$_invoke$arity$1(G__29180_29188) : set_input_value_STAR__BANG_.call(null,G__29180_29188));

return input_ref.current.focus();
})):(with_let29176[(2)]));
var clear_input_value_BANG_ = ((((init29177) || (cljs.core.not(with_let29176.hasOwnProperty((3))))))?(with_let29176[(3)] = (function() { 
var G__29189__delegate = function (_){
(on_clear.cljs$core$IFn$_invoke$arity$0 ? on_clear.cljs$core$IFn$_invoke$arity$0() : on_clear.call(null));

(set_input_value_STAR__BANG_.cljs$core$IFn$_invoke$arity$1 ? set_input_value_STAR__BANG_.cljs$core$IFn$_invoke$arity$1("") : set_input_value_STAR__BANG_.call(null,""));

return input_ref.current.focus();
};
var G__29189 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__29190__i = 0, G__29190__a = new Array(arguments.length -  0);
while (G__29190__i < G__29190__a.length) {G__29190__a[G__29190__i] = arguments[G__29190__i + 0]; ++G__29190__i;}
  _ = new cljs.core.IndexedSeq(G__29190__a,0,null);
} 
return G__29189__delegate.call(this,_);};
G__29189.cljs$lang$maxFixedArity = 0;
G__29189.cljs$lang$applyTo = (function (arglist__29191){
var _ = cljs.core.seq(arglist__29191);
return G__29189__delegate(_);
});
G__29189.cljs$core$IFn$_invoke$arity$variadic = G__29189__delegate;
return G__29189;
})()
):(with_let29176[(3)]));
var focus_BANG_ = ((((init29177) || (cljs.core.not(with_let29176.hasOwnProperty((4))))))?(with_let29176[(4)] = (function (){
input_ref.current.focus();

return (set_input_focused.cljs$core$IFn$_invoke$arity$1 ? set_input_focused.cljs$core$IFn$_invoke$arity$1(true) : set_input_focused.call(null,true));
})):(with_let29176[(4)]));
var blur_BANG_ = ((((init29177) || (cljs.core.not(with_let29176.hasOwnProperty((5))))))?(with_let29176[(5)] = (function (){
input_ref.current.blur();

return (set_input_focused.cljs$core$IFn$_invoke$arity$1 ? set_input_focused.cljs$core$IFn$_invoke$arity$1(false) : set_input_focused.call(null,false));
})):(with_let29176[(5)]));
var res29178 = (function (){
var G__29181_29192 = (function (){
var G__29183_29194 = input_ref.current.value;
(set_input_value_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_input_value_BANG_.cljs$core$IFn$_invoke$arity$1(G__29183_29194) : set_input_value_BANG_.call(null,G__29183_29194));

return nw_calculator.utilities.no_op;
});
var G__29182_29193 = [input_ref];
nw_calculator.components.search.component.global$module$react.useEffect(G__29181_29192,G__29182_29193);

var G__29184_29195 = (function (){
(blur_BANG_.cljs$core$IFn$_invoke$arity$0 ? blur_BANG_.cljs$core$IFn$_invoke$arity$0() : blur_BANG_.call(null));

return nw_calculator.utilities.no_op;
});
var G__29185_29196 = [escape_key_pressed_QMARK_];
nw_calculator.components.search.component.global$module$react.useEffect(G__29184_29195,G__29185_29196);

return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$bg_DASH_inherit$relative$w_DASH_full,reagent.core.merge_props.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,nw_calculator.components.search.styles.search_class()], null),props),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$basic_DASH_input$search$w_DASH_full$flex_DASH_grow$md_COLON_pr_DASH_12_DASH_imp,reagent.core.merge_props.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$spell_DASH_check,false,cljs.core.cst$kw$ref,input_ref,cljs.core.cst$kw$placeholder,"Search something \uD83D\uDD0D",cljs.core.cst$kw$on_DASH_focus,focus_BANG_,cljs.core.cst$kw$on_DASH_blur,blur_BANG_,cljs.core.cst$kw$on_DASH_input,search_BANG_], null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(input_props,cljs.core.cst$kw$ref,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$on_DASH_input,cljs.core.cst$kw$on_DASH_focus_DASH_out,cljs.core.cst$kw$on_DASH_focus], 0)))], null),(cljs.core.truth_((function (){var and__4210__auto__ = cljs.core.not_empty(input_value);
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not(loading_QMARK_);
} else {
return and__4210__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.circular_button.component.circular_button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_click,clear_input_value_BANG_,cljs.core.cst$kw$class,"absolute pb-3 -right-2 md:right-0 top-2 border-0 flex-none"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fas$fa_DASH_times$text_DASH_sm$md_COLON_text_DASH_base], null)], null):null),(cljs.core.truth_(loading_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.loader.component.loader,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"absolute text-lg md:text-2xl right-2 md:right-3 top-3 md:top-2 flex-none"], null)], null):null),(cljs.core.truth_((function (){var and__4210__auto__ = input_focused_QMARK_;
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not_empty(results);
} else {
return and__4210__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$f_GT_,nw_calculator.components.dropdown.component.options,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$on_DASH_select,select_result_BANG_,cljs.core.cst$kw$options,results,cljs.core.cst$kw$make_DASH_option,make_result], null)], null):null)], null);
})()
;
return res29178;
});
