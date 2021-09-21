// Compiled by ClojureScript 1.10.879 {:optimizations :none}
goog.provide('nw_calculator.components.search.component');
goog.require('cljs.core');
goog.require('nw_calculator.utilities');
goog.require('reagent.core');
goog.require('nw_calculator.components.search.styles');
goog.require('nw_calculator.components.circular_button.component');
goog.require('nw_calculator.components.loader.component');
goog.require('nw_calculator.components.dropdown.component');
goog.require('react');
goog.require('nw_calculator.hooks');
nw_calculator.components.search.component.global$module$react = goog.global["React"];
nw_calculator.components.search.component.search = (function nw_calculator$components$search$component$search(p__29073){
var map__29074 = p__29073;
var map__29074__$1 = cljs.core.__destructure_map.call(null,map__29074);
var make_result = cljs.core.get.call(null,map__29074__$1,new cljs.core.Keyword(null,"make-result","make-result",1014199613),cljs.core.identity);
var props = cljs.core.get.call(null,map__29074__$1,new cljs.core.Keyword(null,"props","props",453281727));
var results = cljs.core.get.call(null,map__29074__$1,new cljs.core.Keyword(null,"results","results",-1134170113));
var on_clear = cljs.core.get.call(null,map__29074__$1,new cljs.core.Keyword(null,"on-clear","on-clear",2009781891),nw_calculator.utilities.no_op);
var loading_QMARK_ = cljs.core.get.call(null,map__29074__$1,new cljs.core.Keyword(null,"loading?","loading?",1905707049));
var get_value = cljs.core.get.call(null,map__29074__$1,new cljs.core.Keyword(null,"get-value","get-value",2108514284),cljs.core.constantly.call(null,""));
var on_search = cljs.core.get.call(null,map__29074__$1,new cljs.core.Keyword(null,"on-search","on-search",-1282068148),nw_calculator.utilities.no_op);
var on_select = cljs.core.get.call(null,map__29074__$1,new cljs.core.Keyword(null,"on-select","on-select",-192407950),nw_calculator.utilities.no_op);
var input_props = cljs.core.get.call(null,map__29074__$1,new cljs.core.Keyword(null,"input-props","input-props",-1504868202));
var vec__29075 = nw_calculator.components.search.component.global$module$react.useState("");
var input_value = cljs.core.nth.call(null,vec__29075,(0),null);
var set_input_value_BANG_ = cljs.core.nth.call(null,vec__29075,(1),null);
var vec__29078 = nw_calculator.components.search.component.global$module$react.useState(false);
var input_focused_QMARK_ = cljs.core.nth.call(null,vec__29078,(0),null);
var set_input_focused = cljs.core.nth.call(null,vec__29078,(1),null);
var input_ref = nw_calculator.components.search.component.global$module$react.useRef();
var escape_key_pressed_QMARK_ = nw_calculator.hooks.use_key_press.call(null,"Escape");
var with_let29081 = reagent.ratom.with_let_values.call(null,new cljs.core.Keyword(null,"with-let29081","with-let29081",1997781241));
var temp__5757__auto___29084 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___29084 == null)){
} else {
var c__8434__auto___29085 = temp__5757__auto___29084;
if((with_let29081.generation === c__8434__auto___29085.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let29081.generation = c__8434__auto___29085.ratomGeneration);
}

var init29082 = (with_let29081.length === (0));
var set_input_value_STAR__BANG_ = ((((init29082) || (cljs.core.not.call(null,with_let29081.hasOwnProperty((0))))))?(with_let29081[(0)] = (function (input_value__$1){
set_input_value_BANG_.call(null,input_value__$1);

return (input_ref.current.value = input_value__$1);
})):(with_let29081[(0)]));
var search_BANG_ = ((((init29082) || (cljs.core.not.call(null,with_let29081.hasOwnProperty((1))))))?(with_let29081[(1)] = (function (event){
var input_value__$1 = event.target.value;
set_input_value_BANG_.call(null,input_value__$1);

return ((cljs.core.empty_QMARK_.call(null,input_value__$1))?on_clear:on_search).call(null,input_value__$1);
})):(with_let29081[(1)]));
var select_result_BANG_ = ((((init29082) || (cljs.core.not.call(null,with_let29081.hasOwnProperty((2))))))?(with_let29081[(2)] = (function (result){
on_select.call(null,result);

set_input_value_STAR__BANG_.call(null,get_value.call(null,result));

return input_ref.current.focus();
})):(with_let29081[(2)]));
var clear_input_value_BANG_ = ((((init29082) || (cljs.core.not.call(null,with_let29081.hasOwnProperty((3))))))?(with_let29081[(3)] = (function() { 
var G__29086__delegate = function (_){
on_clear.call(null);

set_input_value_STAR__BANG_.call(null,"");

return input_ref.current.focus();
};
var G__29086 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__29087__i = 0, G__29087__a = new Array(arguments.length -  0);
while (G__29087__i < G__29087__a.length) {G__29087__a[G__29087__i] = arguments[G__29087__i + 0]; ++G__29087__i;}
  _ = new cljs.core.IndexedSeq(G__29087__a,0,null);
} 
return G__29086__delegate.call(this,_);};
G__29086.cljs$lang$maxFixedArity = 0;
G__29086.cljs$lang$applyTo = (function (arglist__29088){
var _ = cljs.core.seq(arglist__29088);
return G__29086__delegate(_);
});
G__29086.cljs$core$IFn$_invoke$arity$variadic = G__29086__delegate;
return G__29086;
})()
):(with_let29081[(3)]));
var focus_BANG_ = ((((init29082) || (cljs.core.not.call(null,with_let29081.hasOwnProperty((4))))))?(with_let29081[(4)] = (function (){
input_ref.current.focus();

return set_input_focused.call(null,true);
})):(with_let29081[(4)]));
var blur_BANG_ = ((((init29082) || (cljs.core.not.call(null,with_let29081.hasOwnProperty((5))))))?(with_let29081[(5)] = (function (){
input_ref.current.blur();

return set_input_focused.call(null,false);
})):(with_let29081[(5)]));
var res29083 = (function (){
nw_calculator.components.search.component.global$module$react.useEffect((function (){
set_input_value_BANG_.call(null,input_ref.current.value);

return nw_calculator.utilities.no_op;
}),[input_ref]);

nw_calculator.components.search.component.global$module$react.useEffect((function (){
blur_BANG_.call(null);

return nw_calculator.utilities.no_op;
}),[escape_key_pressed_QMARK_]);

return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-inherit.relative.w-full","div.bg-inherit.relative.w-full",382628339),reagent.core.merge_props.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),nw_calculator.components.search.styles.search_class.call(null)], null),props),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.basic-input.search.w-full.flex-grow.md:pr-12-imp","input.basic-input.search.w-full.flex-grow.md:pr-12-imp",1257947151),reagent.core.merge_props.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"spell-check","spell-check",-2060352968),false,new cljs.core.Keyword(null,"ref","ref",1289896967),input_ref,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Search something \uD83D\uDD0D",new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),focus_BANG_,new cljs.core.Keyword(null,"on-blur","on-blur",814300747),blur_BANG_,new cljs.core.Keyword(null,"on-input","on-input",-267523366),search_BANG_], null),cljs.core.dissoc.call(null,input_props,new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"on-input","on-input",-267523366),new cljs.core.Keyword(null,"on-focus-out","on-focus-out",1923946189),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624)))], null),(cljs.core.truth_((function (){var and__4210__auto__ = cljs.core.not_empty.call(null,input_value);
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not.call(null,loading_QMARK_);
} else {
return and__4210__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.circular_button.component.circular_button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),clear_input_value_BANG_,new cljs.core.Keyword(null,"class","class",-2030961996),"absolute pb-3 -right-2 md:right-0 top-2 border-0 flex-none"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-times.text-sm.md:text-base","i.fas.fa-times.text-sm.md:text-base",135164001)], null)], null):null),(cljs.core.truth_(loading_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.loader.component.loader,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"absolute text-lg md:text-2xl right-2 md:right-3 top-3 md:top-2 flex-none"], null)], null):null),(cljs.core.truth_((function (){var and__4210__auto__ = input_focused_QMARK_;
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not_empty.call(null,results);
} else {
return and__4210__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f>","f>",1484564198),nw_calculator.components.dropdown.component.options,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-select","on-select",-192407950),select_result_BANG_,new cljs.core.Keyword(null,"options","options",99638489),results,new cljs.core.Keyword(null,"make-option","make-option",-1702447554),make_result], null)], null):null)], null);
})()
;
return res29083;
});

//# sourceMappingURL=component.js.map
