// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('nw_calculator.components.search.component');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('nw_calculator.utilities');
goog.require('reagent.core');
goog.require('nw_calculator.components.search.styles');
goog.require('nw_calculator.components.circular_button.component');
goog.require('nw_calculator.components.loader.component');
goog.require('cljstache.core');
goog.require('nw_calculator.hooks');
nw_calculator.components.search.component.global$module$react = goog.global["React"];
nw_calculator.components.search.component.result_list_item = (function nw_calculator$components$search$component$result_list_item(var_args){
var args__4824__auto__ = [];
var len__4818__auto___29043 = arguments.length;
var i__4819__auto___29044 = (0);
while(true){
if((i__4819__auto___29044 < len__4818__auto___29043)){
args__4824__auto__.push((arguments[i__4819__auto___29044]));

var G__29045 = (i__4819__auto___29044 + (1));
i__4819__auto___29044 = G__29045;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return nw_calculator.components.search.component.result_list_item.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(nw_calculator.components.search.component.result_list_item.cljs$core$IFn$_invoke$arity$variadic = (function (p__29039,_){
var map__29040 = p__29039;
var map__29040__$1 = cljs.core.__destructure_map(map__29040);
var on_select = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29040__$1,cljs.core.cst$kw$on_DASH_select);
var on_hover = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29040__$1,cljs.core.cst$kw$on_DASH_hover);
var result_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29040__$1,cljs.core.cst$kw$result_DASH_index);
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29040__$1,cljs.core.cst$kw$result);
var select_result = (function() { 
var nw_calculator$components$search$component$select_result__delegate = function (___$1){
return (on_select.cljs$core$IFn$_invoke$arity$1 ? on_select.cljs$core$IFn$_invoke$arity$1(result) : on_select.call(null,result));
};
var nw_calculator$components$search$component$select_result = function (var_args){
var ___$1 = null;
if (arguments.length > 0) {
var G__29046__i = 0, G__29046__a = new Array(arguments.length -  0);
while (G__29046__i < G__29046__a.length) {G__29046__a[G__29046__i] = arguments[G__29046__i + 0]; ++G__29046__i;}
  ___$1 = new cljs.core.IndexedSeq(G__29046__a,0,null);
} 
return nw_calculator$components$search$component$select_result__delegate.call(this,___$1);};
nw_calculator$components$search$component$select_result.cljs$lang$maxFixedArity = 0;
nw_calculator$components$search$component$select_result.cljs$lang$applyTo = (function (arglist__29047){
var ___$1 = cljs.core.seq(arglist__29047);
return nw_calculator$components$search$component$select_result__delegate(___$1);
});
nw_calculator$components$search$component$select_result.cljs$core$IFn$_invoke$arity$variadic = nw_calculator$components$search$component$select_result__delegate;
return nw_calculator$components$search$component$select_result;
})()
;
var hover_result = (function() { 
var nw_calculator$components$search$component$hover_result__delegate = function (___$1){
return (on_hover.cljs$core$IFn$_invoke$arity$1 ? on_hover.cljs$core$IFn$_invoke$arity$1(result_index) : on_hover.call(null,result_index));
};
var nw_calculator$components$search$component$hover_result = function (var_args){
var ___$1 = null;
if (arguments.length > 0) {
var G__29048__i = 0, G__29048__a = new Array(arguments.length -  0);
while (G__29048__i < G__29048__a.length) {G__29048__a[G__29048__i] = arguments[G__29048__i + 0]; ++G__29048__i;}
  ___$1 = new cljs.core.IndexedSeq(G__29048__a,0,null);
} 
return nw_calculator$components$search$component$hover_result__delegate.call(this,___$1);};
nw_calculator$components$search$component$hover_result.cljs$lang$maxFixedArity = 0;
nw_calculator$components$search$component$hover_result.cljs$lang$applyTo = (function (arglist__29049){
var ___$1 = cljs.core.seq(arglist__29049);
return nw_calculator$components$search$component$hover_result__delegate(___$1);
});
nw_calculator$components$search$component$hover_result.cljs$core$IFn$_invoke$arity$variadic = nw_calculator$components$search$component$hover_result__delegate;
return nw_calculator$components$search$component$hover_result;
})()
;
return (function() { 
var G__29050__delegate = function (p__29041,children){
var map__29042 = p__29041;
var map__29042__$1 = cljs.core.__destructure_map(map__29042);
var result_index__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29042__$1,cljs.core.cst$kw$result_DASH_index);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dt$bg_DASH_inherit$transition_DASH_colors$bg_DASH_opacity_DASH_20$m_DASH_0$p_DASH_4$cursor_DASH_pointer,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$data_DASH_result_DASH_index,result_index__$1,cljs.core.cst$kw$on_DASH_mouse_DASH_over,hover_result,cljs.core.cst$kw$on_DASH_click,select_result], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_], null),children)], null);
};
var G__29050 = function (p__29041,var_args){
var children = null;
if (arguments.length > 1) {
var G__29051__i = 0, G__29051__a = new Array(arguments.length -  1);
while (G__29051__i < G__29051__a.length) {G__29051__a[G__29051__i] = arguments[G__29051__i + 1]; ++G__29051__i;}
  children = new cljs.core.IndexedSeq(G__29051__a,0,null);
} 
return G__29050__delegate.call(this,p__29041,children);};
G__29050.cljs$lang$maxFixedArity = 1;
G__29050.cljs$lang$applyTo = (function (arglist__29052){
var p__29041 = cljs.core.first(arglist__29052);
var children = cljs.core.rest(arglist__29052);
return G__29050__delegate(p__29041,children);
});
G__29050.cljs$core$IFn$_invoke$arity$variadic = G__29050__delegate;
return G__29050;
})()
;
}));

(nw_calculator.components.search.component.result_list_item.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(nw_calculator.components.search.component.result_list_item.cljs$lang$applyTo = (function (seq29037){
var G__29038 = cljs.core.first(seq29037);
var seq29037__$1 = cljs.core.next(seq29037);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29038,seq29037__$1);
}));

nw_calculator.components.search.component.search = (function nw_calculator$components$search$component$search(p__29053){
var map__29054 = p__29053;
var map__29054__$1 = cljs.core.__destructure_map(map__29054);
var make_result = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29054__$1,cljs.core.cst$kw$make_DASH_result,cljs.core.identity);
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29054__$1,cljs.core.cst$kw$props);
var results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29054__$1,cljs.core.cst$kw$results);
var on_clear = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29054__$1,cljs.core.cst$kw$on_DASH_clear,nw_calculator.utilities.no_op);
var loading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29054__$1,cljs.core.cst$kw$loading_QMARK_);
var get_value = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29054__$1,cljs.core.cst$kw$get_DASH_value,cljs.core.constantly(""));
var on_search = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29054__$1,cljs.core.cst$kw$on_DASH_search,nw_calculator.utilities.no_op);
var on_select = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29054__$1,cljs.core.cst$kw$on_DASH_select,nw_calculator.utilities.no_op);
var input_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29054__$1,cljs.core.cst$kw$input_DASH_props);
var vec__29055 = nw_calculator.components.search.component.global$module$react.useState("");
var input_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29055,(0),null);
var set_input_value_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29055,(1),null);
var vec__29058 = nw_calculator.components.search.component.global$module$react.useState((-1));
var active_result_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29058,(0),null);
var set_active_result_index_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29058,(1),null);
var input_ref = nw_calculator.components.search.component.global$module$react.useRef();
var num_results = cljs.core.count(results);
var down_key_pressed_QMARK_ = nw_calculator.hooks.use_key_press("ArrowDown");
var up_key_pressed_QMARK_ = nw_calculator.hooks.use_key_press("ArrowUp");
var enter_key_pressed_QMARK_ = nw_calculator.hooks.use_key_press("Enter");
var with_let29061 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let29061);
var temp__5757__auto___29085 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___29085 == null)){
} else {
var c__18159__auto___29086 = temp__5757__auto___29085;
if((with_let29061.generation === c__18159__auto___29086.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let29061.generation = c__18159__auto___29086.ratomGeneration);
}

var init29062 = (with_let29061.length === (0));
var set_input_value_STAR__BANG_ = ((((init29062) || (cljs.core.not(with_let29061.hasOwnProperty((0))))))?(with_let29061[(0)] = (function (input_value__$1){
(set_input_value_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_input_value_BANG_.cljs$core$IFn$_invoke$arity$1(input_value__$1) : set_input_value_BANG_.call(null,input_value__$1));

return (input_ref.current.value = input_value__$1);
})):(with_let29061[(0)]));
var search_BANG_ = ((((init29062) || (cljs.core.not(with_let29061.hasOwnProperty((1))))))?(with_let29061[(1)] = (function (event){
var input_value__$1 = event.target.value;
(set_input_value_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_input_value_BANG_.cljs$core$IFn$_invoke$arity$1(input_value__$1) : set_input_value_BANG_.call(null,input_value__$1));

var fexpr__29064 = ((cljs.core.empty_QMARK_(input_value__$1))?on_clear:on_search);
return (fexpr__29064.cljs$core$IFn$_invoke$arity$1 ? fexpr__29064.cljs$core$IFn$_invoke$arity$1(input_value__$1) : fexpr__29064.call(null,input_value__$1));
})):(with_let29061[(1)]));
var select_result_BANG_ = ((((init29062) || (cljs.core.not(with_let29061.hasOwnProperty((2))))))?(with_let29061[(2)] = (function (result){
(on_select.cljs$core$IFn$_invoke$arity$1 ? on_select.cljs$core$IFn$_invoke$arity$1(result) : on_select.call(null,result));

var G__29065_29087 = (get_value.cljs$core$IFn$_invoke$arity$1 ? get_value.cljs$core$IFn$_invoke$arity$1(result) : get_value.call(null,result));
(set_input_value_STAR__BANG_.cljs$core$IFn$_invoke$arity$1 ? set_input_value_STAR__BANG_.cljs$core$IFn$_invoke$arity$1(G__29065_29087) : set_input_value_STAR__BANG_.call(null,G__29065_29087));

return input_ref.current.focus();
})):(with_let29061[(2)]));
var clear_input_value_BANG_ = ((((init29062) || (cljs.core.not(with_let29061.hasOwnProperty((3))))))?(with_let29061[(3)] = (function() { 
var G__29088__delegate = function (_){
(on_clear.cljs$core$IFn$_invoke$arity$0 ? on_clear.cljs$core$IFn$_invoke$arity$0() : on_clear.call(null));

(set_input_value_STAR__BANG_.cljs$core$IFn$_invoke$arity$1 ? set_input_value_STAR__BANG_.cljs$core$IFn$_invoke$arity$1("") : set_input_value_STAR__BANG_.call(null,""));

return input_ref.current.focus();
};
var G__29088 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__29089__i = 0, G__29089__a = new Array(arguments.length -  0);
while (G__29089__i < G__29089__a.length) {G__29089__a[G__29089__i] = arguments[G__29089__i + 0]; ++G__29089__i;}
  _ = new cljs.core.IndexedSeq(G__29089__a,0,null);
} 
return G__29088__delegate.call(this,_);};
G__29088.cljs$lang$maxFixedArity = 0;
G__29088.cljs$lang$applyTo = (function (arglist__29090){
var _ = cljs.core.seq(arglist__29090);
return G__29088__delegate(_);
});
G__29088.cljs$core$IFn$_invoke$arity$variadic = G__29088__delegate;
return G__29088;
})()
):(with_let29061[(3)]));
var input_focused_QMARK_ = ((((init29062) || (cljs.core.not(with_let29061.hasOwnProperty((4))))))?(with_let29061[(4)] = (function (){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(document.activeElement,input_ref.current);
})):(with_let29061[(4)]));
var get_result_ele = ((((init29062) || (cljs.core.not(with_let29061.hasOwnProperty((5))))))?(with_let29061[(5)] = (function (result_index){
return document.querySelector(cljstache.core.render.cljs$core$IFn$_invoke$arity$2("dt[data-result-index=\"{{ri}}\"]",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ri,result_index], null)));
})):(with_let29061[(5)]));
var highlight_result_BANG_ = ((((init29062) || (cljs.core.not(with_let29061.hasOwnProperty((6))))))?(with_let29061[(6)] = (function (target_result_index,num_results__$1){
var seq__29066 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(num_results__$1));
var chunk__29067 = null;
var count__29068 = (0);
var i__29069 = (0);
while(true){
if((i__29069 < count__29068)){
var result_index = chunk__29067.cljs$core$IIndexed$_nth$arity$2(null,i__29069);
var result_ele_29091 = (get_result_ele.cljs$core$IFn$_invoke$arity$1 ? get_result_ele.cljs$core$IFn$_invoke$arity$1(result_index) : get_result_ele.call(null,result_index));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(result_index,target_result_index)){
result_ele_29091.classList.add("bg-purple");
} else {
result_ele_29091.classList.remove("bg-purple");
}


var G__29092 = seq__29066;
var G__29093 = chunk__29067;
var G__29094 = count__29068;
var G__29095 = (i__29069 + (1));
seq__29066 = G__29092;
chunk__29067 = G__29093;
count__29068 = G__29094;
i__29069 = G__29095;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__29066);
if(temp__5753__auto__){
var seq__29066__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29066__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__29066__$1);
var G__29096 = cljs.core.chunk_rest(seq__29066__$1);
var G__29097 = c__4638__auto__;
var G__29098 = cljs.core.count(c__4638__auto__);
var G__29099 = (0);
seq__29066 = G__29096;
chunk__29067 = G__29097;
count__29068 = G__29098;
i__29069 = G__29099;
continue;
} else {
var result_index = cljs.core.first(seq__29066__$1);
var result_ele_29100 = (get_result_ele.cljs$core$IFn$_invoke$arity$1 ? get_result_ele.cljs$core$IFn$_invoke$arity$1(result_index) : get_result_ele.call(null,result_index));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(result_index,target_result_index)){
result_ele_29100.classList.add("bg-purple");
} else {
result_ele_29100.classList.remove("bg-purple");
}


var G__29101 = cljs.core.next(seq__29066__$1);
var G__29102 = null;
var G__29103 = (0);
var G__29104 = (0);
seq__29066 = G__29101;
chunk__29067 = G__29102;
count__29068 = G__29103;
i__29069 = G__29104;
continue;
}
} else {
return null;
}
}
break;
}
})):(with_let29061[(6)]));
var res29063 = (function (){
var G__29070_29105 = (function (){
var G__29072_29107 = input_ref.current.value;
(set_input_value_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_input_value_BANG_.cljs$core$IFn$_invoke$arity$1(G__29072_29107) : set_input_value_BANG_.call(null,G__29072_29107));

return nw_calculator.utilities.no_op;
});
var G__29071_29106 = [input_ref];
nw_calculator.components.search.component.global$module$react.useEffect(G__29070_29105,G__29071_29106);

var G__29073_29108 = (function (){
(set_active_result_index_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_active_result_index_BANG_.cljs$core$IFn$_invoke$arity$1((-1)) : set_active_result_index_BANG_.call(null,(-1)));

return nw_calculator.utilities.no_op;
});
var G__29074_29109 = [results];
nw_calculator.components.search.component.global$module$react.useEffect(G__29073_29108,G__29074_29109);

var G__29075_29110 = (function (){
var next_result_index_29112 = (active_result_index + (1));
if(cljs.core.truth_((function (){var and__4210__auto__ = (input_focused_QMARK_.cljs$core$IFn$_invoke$arity$0 ? input_focused_QMARK_.cljs$core$IFn$_invoke$arity$0() : input_focused_QMARK_.call(null));
if(cljs.core.truth_(and__4210__auto__)){
var and__4210__auto____$1 = down_key_pressed_QMARK_;
if(cljs.core.truth_(and__4210__auto____$1)){
return (next_result_index_29112 < num_results);
} else {
return and__4210__auto____$1;
}
} else {
return and__4210__auto__;
}
})())){
(set_active_result_index_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_active_result_index_BANG_.cljs$core$IFn$_invoke$arity$1(next_result_index_29112) : set_active_result_index_BANG_.call(null,next_result_index_29112));
} else {
}

return nw_calculator.utilities.no_op;
});
var G__29076_29111 = [down_key_pressed_QMARK_];
nw_calculator.components.search.component.global$module$react.useEffect(G__29075_29110,G__29076_29111);

var G__29077_29113 = (function (){
var prev_result_index_29115 = (active_result_index - (1));
if(cljs.core.truth_((function (){var and__4210__auto__ = (input_focused_QMARK_.cljs$core$IFn$_invoke$arity$0 ? input_focused_QMARK_.cljs$core$IFn$_invoke$arity$0() : input_focused_QMARK_.call(null));
if(cljs.core.truth_(and__4210__auto__)){
var and__4210__auto____$1 = up_key_pressed_QMARK_;
if(cljs.core.truth_(and__4210__auto____$1)){
return (prev_result_index_29115 > (-1));
} else {
return and__4210__auto____$1;
}
} else {
return and__4210__auto__;
}
})())){
(set_active_result_index_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_active_result_index_BANG_.cljs$core$IFn$_invoke$arity$1(prev_result_index_29115) : set_active_result_index_BANG_.call(null,prev_result_index_29115));
} else {
}

return nw_calculator.utilities.no_op;
});
var G__29078_29114 = [up_key_pressed_QMARK_];
nw_calculator.components.search.component.global$module$react.useEffect(G__29077_29113,G__29078_29114);

var G__29079_29116 = (function (){
var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(results,active_result_index);
if(cljs.core.truth_(temp__5751__auto__)){
var active_result = temp__5751__auto__;
return (select_result_BANG_.cljs$core$IFn$_invoke$arity$1 ? select_result_BANG_.cljs$core$IFn$_invoke$arity$1(active_result) : select_result_BANG_.call(null,active_result));
} else {
return null;
}
});
var G__29080_29117 = [enter_key_pressed_QMARK_];
nw_calculator.components.search.component.global$module$react.useEffect(G__29079_29116,G__29080_29117);

var G__29081_29118 = (function (){
return (highlight_result_BANG_.cljs$core$IFn$_invoke$arity$2 ? highlight_result_BANG_.cljs$core$IFn$_invoke$arity$2(active_result_index,num_results) : highlight_result_BANG_.call(null,active_result_index,num_results));
});
var G__29082_29119 = [active_result_index];
nw_calculator.components.search.component.global$module$react.useEffect(G__29081_29118,G__29082_29119);

return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$bg_DASH_inherit$relative$w_DASH_full,reagent.core.merge_props.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,nw_calculator.components.search.styles.search_class()], null),props),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$basic_DASH_input$search$w_DASH_full$flex_DASH_grow$md_COLON_pr_DASH_12_DASH_imp,reagent.core.merge_props.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$spell_DASH_check,false,cljs.core.cst$kw$ref,input_ref,cljs.core.cst$kw$placeholder,"Search something \uD83D\uDD0D",cljs.core.cst$kw$on_DASH_input,search_BANG_], null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(input_props,cljs.core.cst$kw$on_DASH_input))], null),(cljs.core.truth_((function (){var and__4210__auto__ = cljs.core.not_empty(input_value);
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not(loading_QMARK_);
} else {
return and__4210__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.circular_button.component.circular_button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_click,clear_input_value_BANG_,cljs.core.cst$kw$class,"absolute pb-3 -right-2 md:right-0 top-2 border-0 flex-none"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fas$fa_DASH_times$text_DASH_sm$md_COLON_text_DASH_base], null)], null):null),(cljs.core.truth_(loading_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.loader.component.loader,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"absolute text-lg md:text-2xl right-2 md:right-3 top-3 md:top-2 flex-none"], null)], null):null),(((num_results > (0)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dl$bg_DASH_inherit$w_DASH_full$max_DASH_w_DASH_full$absolute$m_DASH_0$z_DASH_50$bg_DASH_inherit$border_DASH_2$border_DASH_t_DASH_0$border_DASH_opacity_DASH_30$border_DASH_purple$rounded_DASH_b_DASH_md$rounded_DASH_t_DASH_none,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$multiple,true,cljs.core.cst$kw$size,cljs.core.count(results)], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (result_index,p__29083){
var map__29084 = p__29083;
var map__29084__$1 = cljs.core.__destructure_map(map__29084);
var result = map__29084__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29084__$1,cljs.core.cst$kw$id);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.search.component.result_list_item,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$on_DASH_select,select_result_BANG_,cljs.core.cst$kw$on_DASH_hover,set_active_result_index_BANG_,cljs.core.cst$kw$result_DASH_index,result_index,cljs.core.cst$kw$result,result], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [make_result,result], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,["result_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(result_index),"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null));
}),results)], null):null)], null);
})()
;
return res29063;
});
