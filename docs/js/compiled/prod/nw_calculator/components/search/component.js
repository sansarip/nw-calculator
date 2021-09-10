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
var len__4818__auto___29047 = arguments.length;
var i__4819__auto___29048 = (0);
while(true){
if((i__4819__auto___29048 < len__4818__auto___29047)){
args__4824__auto__.push((arguments[i__4819__auto___29048]));

var G__29049 = (i__4819__auto___29048 + (1));
i__4819__auto___29048 = G__29049;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return nw_calculator.components.search.component.result_list_item.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(nw_calculator.components.search.component.result_list_item.cljs$core$IFn$_invoke$arity$variadic = (function (p__29043,_){
var map__29044 = p__29043;
var map__29044__$1 = cljs.core.__destructure_map(map__29044);
var on_select = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29044__$1,cljs.core.cst$kw$on_DASH_select);
var on_hover = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29044__$1,cljs.core.cst$kw$on_DASH_hover);
var result_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29044__$1,cljs.core.cst$kw$result_DASH_index);
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29044__$1,cljs.core.cst$kw$result);
var select_result = (function() { 
var nw_calculator$components$search$component$select_result__delegate = function (___$1){
return (on_select.cljs$core$IFn$_invoke$arity$1 ? on_select.cljs$core$IFn$_invoke$arity$1(result) : on_select.call(null,result));
};
var nw_calculator$components$search$component$select_result = function (var_args){
var ___$1 = null;
if (arguments.length > 0) {
var G__29050__i = 0, G__29050__a = new Array(arguments.length -  0);
while (G__29050__i < G__29050__a.length) {G__29050__a[G__29050__i] = arguments[G__29050__i + 0]; ++G__29050__i;}
  ___$1 = new cljs.core.IndexedSeq(G__29050__a,0,null);
} 
return nw_calculator$components$search$component$select_result__delegate.call(this,___$1);};
nw_calculator$components$search$component$select_result.cljs$lang$maxFixedArity = 0;
nw_calculator$components$search$component$select_result.cljs$lang$applyTo = (function (arglist__29051){
var ___$1 = cljs.core.seq(arglist__29051);
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
var G__29052__i = 0, G__29052__a = new Array(arguments.length -  0);
while (G__29052__i < G__29052__a.length) {G__29052__a[G__29052__i] = arguments[G__29052__i + 0]; ++G__29052__i;}
  ___$1 = new cljs.core.IndexedSeq(G__29052__a,0,null);
} 
return nw_calculator$components$search$component$hover_result__delegate.call(this,___$1);};
nw_calculator$components$search$component$hover_result.cljs$lang$maxFixedArity = 0;
nw_calculator$components$search$component$hover_result.cljs$lang$applyTo = (function (arglist__29053){
var ___$1 = cljs.core.seq(arglist__29053);
return nw_calculator$components$search$component$hover_result__delegate(___$1);
});
nw_calculator$components$search$component$hover_result.cljs$core$IFn$_invoke$arity$variadic = nw_calculator$components$search$component$hover_result__delegate;
return nw_calculator$components$search$component$hover_result;
})()
;
return (function() { 
var G__29054__delegate = function (p__29045,children){
var map__29046 = p__29045;
var map__29046__$1 = cljs.core.__destructure_map(map__29046);
var result_index__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29046__$1,cljs.core.cst$kw$result_DASH_index);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dt$bg_DASH_inherit$transition_DASH_colors$bg_DASH_opacity_DASH_20$m_DASH_0$p_DASH_4$cursor_DASH_pointer,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$data_DASH_result_DASH_index,result_index__$1,cljs.core.cst$kw$on_DASH_mouse_DASH_over,hover_result,cljs.core.cst$kw$on_DASH_click,select_result], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_], null),children)], null);
};
var G__29054 = function (p__29045,var_args){
var children = null;
if (arguments.length > 1) {
var G__29055__i = 0, G__29055__a = new Array(arguments.length -  1);
while (G__29055__i < G__29055__a.length) {G__29055__a[G__29055__i] = arguments[G__29055__i + 1]; ++G__29055__i;}
  children = new cljs.core.IndexedSeq(G__29055__a,0,null);
} 
return G__29054__delegate.call(this,p__29045,children);};
G__29054.cljs$lang$maxFixedArity = 1;
G__29054.cljs$lang$applyTo = (function (arglist__29056){
var p__29045 = cljs.core.first(arglist__29056);
var children = cljs.core.rest(arglist__29056);
return G__29054__delegate(p__29045,children);
});
G__29054.cljs$core$IFn$_invoke$arity$variadic = G__29054__delegate;
return G__29054;
})()
;
}));

(nw_calculator.components.search.component.result_list_item.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(nw_calculator.components.search.component.result_list_item.cljs$lang$applyTo = (function (seq29041){
var G__29042 = cljs.core.first(seq29041);
var seq29041__$1 = cljs.core.next(seq29041);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29042,seq29041__$1);
}));

nw_calculator.components.search.component.search = (function nw_calculator$components$search$component$search(p__29057){
var map__29058 = p__29057;
var map__29058__$1 = cljs.core.__destructure_map(map__29058);
var make_result = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29058__$1,cljs.core.cst$kw$make_DASH_result,cljs.core.identity);
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29058__$1,cljs.core.cst$kw$props);
var results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29058__$1,cljs.core.cst$kw$results);
var on_clear = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29058__$1,cljs.core.cst$kw$on_DASH_clear,nw_calculator.utilities.no_op);
var loading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29058__$1,cljs.core.cst$kw$loading_QMARK_);
var get_value = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29058__$1,cljs.core.cst$kw$get_DASH_value,cljs.core.constantly(""));
var on_search = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29058__$1,cljs.core.cst$kw$on_DASH_search,nw_calculator.utilities.no_op);
var on_select = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29058__$1,cljs.core.cst$kw$on_DASH_select,nw_calculator.utilities.no_op);
var input_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29058__$1,cljs.core.cst$kw$input_DASH_props);
var vec__29059 = nw_calculator.components.search.component.global$module$react.useState("");
var input_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29059,(0),null);
var set_input_value_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29059,(1),null);
var vec__29062 = nw_calculator.components.search.component.global$module$react.useState((-1));
var active_result_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29062,(0),null);
var set_active_result_index_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29062,(1),null);
var input_ref = nw_calculator.components.search.component.global$module$react.useRef();
var num_results = cljs.core.count(results);
var down_key_pressed_QMARK_ = nw_calculator.hooks.use_key_press("ArrowDown");
var up_key_pressed_QMARK_ = nw_calculator.hooks.use_key_press("ArrowUp");
var enter_key_pressed_QMARK_ = nw_calculator.hooks.use_key_press("Enter");
var with_let29065 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let29065);
var temp__5757__auto___29089 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___29089 == null)){
} else {
var c__13075__auto___29090 = temp__5757__auto___29089;
if((with_let29065.generation === c__13075__auto___29090.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let29065.generation = c__13075__auto___29090.ratomGeneration);
}

var init29066 = (with_let29065.length === (0));
var set_input_value_STAR__BANG_ = ((((init29066) || (cljs.core.not(with_let29065.hasOwnProperty((0))))))?(with_let29065[(0)] = (function (input_value__$1){
(set_input_value_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_input_value_BANG_.cljs$core$IFn$_invoke$arity$1(input_value__$1) : set_input_value_BANG_.call(null,input_value__$1));

return (input_ref.current.value = input_value__$1);
})):(with_let29065[(0)]));
var search_BANG_ = ((((init29066) || (cljs.core.not(with_let29065.hasOwnProperty((1))))))?(with_let29065[(1)] = (function (event){
var input_value__$1 = event.target.value;
(set_input_value_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_input_value_BANG_.cljs$core$IFn$_invoke$arity$1(input_value__$1) : set_input_value_BANG_.call(null,input_value__$1));

var fexpr__29068 = ((cljs.core.empty_QMARK_(input_value__$1))?on_clear:on_search);
return (fexpr__29068.cljs$core$IFn$_invoke$arity$1 ? fexpr__29068.cljs$core$IFn$_invoke$arity$1(input_value__$1) : fexpr__29068.call(null,input_value__$1));
})):(with_let29065[(1)]));
var select_result_BANG_ = ((((init29066) || (cljs.core.not(with_let29065.hasOwnProperty((2))))))?(with_let29065[(2)] = (function (result){
(on_select.cljs$core$IFn$_invoke$arity$1 ? on_select.cljs$core$IFn$_invoke$arity$1(result) : on_select.call(null,result));

var G__29069_29091 = (get_value.cljs$core$IFn$_invoke$arity$1 ? get_value.cljs$core$IFn$_invoke$arity$1(result) : get_value.call(null,result));
(set_input_value_STAR__BANG_.cljs$core$IFn$_invoke$arity$1 ? set_input_value_STAR__BANG_.cljs$core$IFn$_invoke$arity$1(G__29069_29091) : set_input_value_STAR__BANG_.call(null,G__29069_29091));

return input_ref.current.focus();
})):(with_let29065[(2)]));
var clear_input_value_BANG_ = ((((init29066) || (cljs.core.not(with_let29065.hasOwnProperty((3))))))?(with_let29065[(3)] = (function() { 
var G__29092__delegate = function (_){
(on_clear.cljs$core$IFn$_invoke$arity$0 ? on_clear.cljs$core$IFn$_invoke$arity$0() : on_clear.call(null));

(set_input_value_STAR__BANG_.cljs$core$IFn$_invoke$arity$1 ? set_input_value_STAR__BANG_.cljs$core$IFn$_invoke$arity$1("") : set_input_value_STAR__BANG_.call(null,""));

return input_ref.current.focus();
};
var G__29092 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__29093__i = 0, G__29093__a = new Array(arguments.length -  0);
while (G__29093__i < G__29093__a.length) {G__29093__a[G__29093__i] = arguments[G__29093__i + 0]; ++G__29093__i;}
  _ = new cljs.core.IndexedSeq(G__29093__a,0,null);
} 
return G__29092__delegate.call(this,_);};
G__29092.cljs$lang$maxFixedArity = 0;
G__29092.cljs$lang$applyTo = (function (arglist__29094){
var _ = cljs.core.seq(arglist__29094);
return G__29092__delegate(_);
});
G__29092.cljs$core$IFn$_invoke$arity$variadic = G__29092__delegate;
return G__29092;
})()
):(with_let29065[(3)]));
var input_focused_QMARK_ = ((((init29066) || (cljs.core.not(with_let29065.hasOwnProperty((4))))))?(with_let29065[(4)] = (function (){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(document.activeElement,input_ref.current);
})):(with_let29065[(4)]));
var get_result_ele = ((((init29066) || (cljs.core.not(with_let29065.hasOwnProperty((5))))))?(with_let29065[(5)] = (function (result_index){
return document.querySelector(cljstache.core.render.cljs$core$IFn$_invoke$arity$2("dt[data-result-index=\"{{ri}}\"]",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ri,result_index], null)));
})):(with_let29065[(5)]));
var highlight_result_BANG_ = ((((init29066) || (cljs.core.not(with_let29065.hasOwnProperty((6))))))?(with_let29065[(6)] = (function (target_result_index,num_results__$1){
var seq__29070 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(num_results__$1));
var chunk__29071 = null;
var count__29072 = (0);
var i__29073 = (0);
while(true){
if((i__29073 < count__29072)){
var result_index = chunk__29071.cljs$core$IIndexed$_nth$arity$2(null,i__29073);
var result_ele_29095 = (get_result_ele.cljs$core$IFn$_invoke$arity$1 ? get_result_ele.cljs$core$IFn$_invoke$arity$1(result_index) : get_result_ele.call(null,result_index));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(result_index,target_result_index)){
result_ele_29095.classList.add("bg-purple");
} else {
result_ele_29095.classList.remove("bg-purple");
}


var G__29096 = seq__29070;
var G__29097 = chunk__29071;
var G__29098 = count__29072;
var G__29099 = (i__29073 + (1));
seq__29070 = G__29096;
chunk__29071 = G__29097;
count__29072 = G__29098;
i__29073 = G__29099;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__29070);
if(temp__5753__auto__){
var seq__29070__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29070__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__29070__$1);
var G__29100 = cljs.core.chunk_rest(seq__29070__$1);
var G__29101 = c__4638__auto__;
var G__29102 = cljs.core.count(c__4638__auto__);
var G__29103 = (0);
seq__29070 = G__29100;
chunk__29071 = G__29101;
count__29072 = G__29102;
i__29073 = G__29103;
continue;
} else {
var result_index = cljs.core.first(seq__29070__$1);
var result_ele_29104 = (get_result_ele.cljs$core$IFn$_invoke$arity$1 ? get_result_ele.cljs$core$IFn$_invoke$arity$1(result_index) : get_result_ele.call(null,result_index));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(result_index,target_result_index)){
result_ele_29104.classList.add("bg-purple");
} else {
result_ele_29104.classList.remove("bg-purple");
}


var G__29105 = cljs.core.next(seq__29070__$1);
var G__29106 = null;
var G__29107 = (0);
var G__29108 = (0);
seq__29070 = G__29105;
chunk__29071 = G__29106;
count__29072 = G__29107;
i__29073 = G__29108;
continue;
}
} else {
return null;
}
}
break;
}
})):(with_let29065[(6)]));
var res29067 = (function (){
var G__29074_29109 = (function (){
var G__29076_29111 = input_ref.current.value;
(set_input_value_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_input_value_BANG_.cljs$core$IFn$_invoke$arity$1(G__29076_29111) : set_input_value_BANG_.call(null,G__29076_29111));

return nw_calculator.utilities.no_op;
});
var G__29075_29110 = [input_ref];
nw_calculator.components.search.component.global$module$react.useEffect(G__29074_29109,G__29075_29110);

var G__29077_29112 = (function (){
(set_active_result_index_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_active_result_index_BANG_.cljs$core$IFn$_invoke$arity$1((-1)) : set_active_result_index_BANG_.call(null,(-1)));

return nw_calculator.utilities.no_op;
});
var G__29078_29113 = [results];
nw_calculator.components.search.component.global$module$react.useEffect(G__29077_29112,G__29078_29113);

var G__29079_29114 = (function (){
var next_result_index_29116 = (active_result_index + (1));
if(cljs.core.truth_((function (){var and__4210__auto__ = (input_focused_QMARK_.cljs$core$IFn$_invoke$arity$0 ? input_focused_QMARK_.cljs$core$IFn$_invoke$arity$0() : input_focused_QMARK_.call(null));
if(cljs.core.truth_(and__4210__auto__)){
var and__4210__auto____$1 = down_key_pressed_QMARK_;
if(cljs.core.truth_(and__4210__auto____$1)){
return (next_result_index_29116 < num_results);
} else {
return and__4210__auto____$1;
}
} else {
return and__4210__auto__;
}
})())){
(set_active_result_index_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_active_result_index_BANG_.cljs$core$IFn$_invoke$arity$1(next_result_index_29116) : set_active_result_index_BANG_.call(null,next_result_index_29116));
} else {
}

return nw_calculator.utilities.no_op;
});
var G__29080_29115 = [down_key_pressed_QMARK_];
nw_calculator.components.search.component.global$module$react.useEffect(G__29079_29114,G__29080_29115);

var G__29081_29117 = (function (){
var prev_result_index_29119 = (active_result_index - (1));
if(cljs.core.truth_((function (){var and__4210__auto__ = (input_focused_QMARK_.cljs$core$IFn$_invoke$arity$0 ? input_focused_QMARK_.cljs$core$IFn$_invoke$arity$0() : input_focused_QMARK_.call(null));
if(cljs.core.truth_(and__4210__auto__)){
var and__4210__auto____$1 = up_key_pressed_QMARK_;
if(cljs.core.truth_(and__4210__auto____$1)){
return (prev_result_index_29119 > (-1));
} else {
return and__4210__auto____$1;
}
} else {
return and__4210__auto__;
}
})())){
(set_active_result_index_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_active_result_index_BANG_.cljs$core$IFn$_invoke$arity$1(prev_result_index_29119) : set_active_result_index_BANG_.call(null,prev_result_index_29119));
} else {
}

return nw_calculator.utilities.no_op;
});
var G__29082_29118 = [up_key_pressed_QMARK_];
nw_calculator.components.search.component.global$module$react.useEffect(G__29081_29117,G__29082_29118);

var G__29083_29120 = (function (){
var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(results,active_result_index);
if(cljs.core.truth_(temp__5751__auto__)){
var active_result = temp__5751__auto__;
return (select_result_BANG_.cljs$core$IFn$_invoke$arity$1 ? select_result_BANG_.cljs$core$IFn$_invoke$arity$1(active_result) : select_result_BANG_.call(null,active_result));
} else {
return null;
}
});
var G__29084_29121 = [enter_key_pressed_QMARK_];
nw_calculator.components.search.component.global$module$react.useEffect(G__29083_29120,G__29084_29121);

var G__29085_29122 = (function (){
return (highlight_result_BANG_.cljs$core$IFn$_invoke$arity$2 ? highlight_result_BANG_.cljs$core$IFn$_invoke$arity$2(active_result_index,num_results) : highlight_result_BANG_.call(null,active_result_index,num_results));
});
var G__29086_29123 = [active_result_index];
nw_calculator.components.search.component.global$module$react.useEffect(G__29085_29122,G__29086_29123);

return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$bg_DASH_inherit$relative$w_DASH_full,reagent.core.merge_props.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,nw_calculator.components.search.styles.search_class()], null),props),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$basic_DASH_input$search$w_DASH_full$flex_DASH_grow$md_COLON_pr_DASH_12_DASH_imp,reagent.core.merge_props.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$spell_DASH_check,false,cljs.core.cst$kw$ref,input_ref,cljs.core.cst$kw$placeholder,"Search something \uD83D\uDD0D",cljs.core.cst$kw$on_DASH_input,search_BANG_], null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(input_props,cljs.core.cst$kw$on_DASH_input))], null),(cljs.core.truth_((function (){var and__4210__auto__ = cljs.core.not_empty(input_value);
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not(loading_QMARK_);
} else {
return and__4210__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.circular_button.component.circular_button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_click,clear_input_value_BANG_,cljs.core.cst$kw$class,"absolute pb-3 -right-2 md:right-0 top-2 border-0 flex-none"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fas$fa_DASH_times$text_DASH_sm$md_COLON_text_DASH_base], null)], null):null),(cljs.core.truth_(loading_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.loader.component.loader,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"absolute text-lg md:text-2xl right-2 md:right-3 top-3 md:top-2 flex-none"], null)], null):null),(((num_results > (0)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dl$bg_DASH_inherit$w_DASH_full$max_DASH_w_DASH_full$absolute$m_DASH_0$z_DASH_50$bg_DASH_inherit$border_DASH_2$border_DASH_t_DASH_0$border_DASH_opacity_DASH_30$border_DASH_purple$rounded_DASH_b_DASH_md$rounded_DASH_t_DASH_none,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$multiple,true,cljs.core.cst$kw$size,cljs.core.count(results)], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (result_index,p__29087){
var map__29088 = p__29087;
var map__29088__$1 = cljs.core.__destructure_map(map__29088);
var result = map__29088__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29088__$1,cljs.core.cst$kw$id);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.search.component.result_list_item,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$on_DASH_select,select_result_BANG_,cljs.core.cst$kw$on_DASH_hover,set_active_result_index_BANG_,cljs.core.cst$kw$result_DASH_index,result_index,cljs.core.cst$kw$result,result], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [make_result,result], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,["result_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(result_index),"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null));
}),results)], null):null)], null);
})()
;
return res29067;
});
