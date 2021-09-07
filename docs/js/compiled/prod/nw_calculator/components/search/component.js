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
var len__4818__auto___29030 = arguments.length;
var i__4819__auto___29031 = (0);
while(true){
if((i__4819__auto___29031 < len__4818__auto___29030)){
args__4824__auto__.push((arguments[i__4819__auto___29031]));

var G__29032 = (i__4819__auto___29031 + (1));
i__4819__auto___29031 = G__29032;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return nw_calculator.components.search.component.result_list_item.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(nw_calculator.components.search.component.result_list_item.cljs$core$IFn$_invoke$arity$variadic = (function (p__29026,_){
var map__29027 = p__29026;
var map__29027__$1 = cljs.core.__destructure_map(map__29027);
var on_select = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29027__$1,cljs.core.cst$kw$on_DASH_select);
var on_hover = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29027__$1,cljs.core.cst$kw$on_DASH_hover);
var result_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29027__$1,cljs.core.cst$kw$result_DASH_index);
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29027__$1,cljs.core.cst$kw$result);
var select_result = (function() { 
var nw_calculator$components$search$component$select_result__delegate = function (___$1){
return (on_select.cljs$core$IFn$_invoke$arity$1 ? on_select.cljs$core$IFn$_invoke$arity$1(result) : on_select.call(null,result));
};
var nw_calculator$components$search$component$select_result = function (var_args){
var ___$1 = null;
if (arguments.length > 0) {
var G__29033__i = 0, G__29033__a = new Array(arguments.length -  0);
while (G__29033__i < G__29033__a.length) {G__29033__a[G__29033__i] = arguments[G__29033__i + 0]; ++G__29033__i;}
  ___$1 = new cljs.core.IndexedSeq(G__29033__a,0,null);
} 
return nw_calculator$components$search$component$select_result__delegate.call(this,___$1);};
nw_calculator$components$search$component$select_result.cljs$lang$maxFixedArity = 0;
nw_calculator$components$search$component$select_result.cljs$lang$applyTo = (function (arglist__29034){
var ___$1 = cljs.core.seq(arglist__29034);
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
var G__29035__i = 0, G__29035__a = new Array(arguments.length -  0);
while (G__29035__i < G__29035__a.length) {G__29035__a[G__29035__i] = arguments[G__29035__i + 0]; ++G__29035__i;}
  ___$1 = new cljs.core.IndexedSeq(G__29035__a,0,null);
} 
return nw_calculator$components$search$component$hover_result__delegate.call(this,___$1);};
nw_calculator$components$search$component$hover_result.cljs$lang$maxFixedArity = 0;
nw_calculator$components$search$component$hover_result.cljs$lang$applyTo = (function (arglist__29036){
var ___$1 = cljs.core.seq(arglist__29036);
return nw_calculator$components$search$component$hover_result__delegate(___$1);
});
nw_calculator$components$search$component$hover_result.cljs$core$IFn$_invoke$arity$variadic = nw_calculator$components$search$component$hover_result__delegate;
return nw_calculator$components$search$component$hover_result;
})()
;
return (function() { 
var G__29037__delegate = function (p__29028,children){
var map__29029 = p__29028;
var map__29029__$1 = cljs.core.__destructure_map(map__29029);
var result_index__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29029__$1,cljs.core.cst$kw$result_DASH_index);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dt$bg_DASH_inherit$transition_DASH_colors$bg_DASH_opacity_DASH_20$m_DASH_0$p_DASH_4$cursor_DASH_pointer,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$data_DASH_result_DASH_index,result_index__$1,cljs.core.cst$kw$on_DASH_mouse_DASH_over,hover_result,cljs.core.cst$kw$on_DASH_click,select_result], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_], null),children)], null);
};
var G__29037 = function (p__29028,var_args){
var children = null;
if (arguments.length > 1) {
var G__29038__i = 0, G__29038__a = new Array(arguments.length -  1);
while (G__29038__i < G__29038__a.length) {G__29038__a[G__29038__i] = arguments[G__29038__i + 1]; ++G__29038__i;}
  children = new cljs.core.IndexedSeq(G__29038__a,0,null);
} 
return G__29037__delegate.call(this,p__29028,children);};
G__29037.cljs$lang$maxFixedArity = 1;
G__29037.cljs$lang$applyTo = (function (arglist__29039){
var p__29028 = cljs.core.first(arglist__29039);
var children = cljs.core.rest(arglist__29039);
return G__29037__delegate(p__29028,children);
});
G__29037.cljs$core$IFn$_invoke$arity$variadic = G__29037__delegate;
return G__29037;
})()
;
}));

(nw_calculator.components.search.component.result_list_item.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(nw_calculator.components.search.component.result_list_item.cljs$lang$applyTo = (function (seq29024){
var G__29025 = cljs.core.first(seq29024);
var seq29024__$1 = cljs.core.next(seq29024);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29025,seq29024__$1);
}));

nw_calculator.components.search.component.search = (function nw_calculator$components$search$component$search(p__29040){
var map__29041 = p__29040;
var map__29041__$1 = cljs.core.__destructure_map(map__29041);
var make_result = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29041__$1,cljs.core.cst$kw$make_DASH_result,cljs.core.identity);
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29041__$1,cljs.core.cst$kw$props);
var results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29041__$1,cljs.core.cst$kw$results);
var on_clear = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29041__$1,cljs.core.cst$kw$on_DASH_clear,nw_calculator.utilities.no_op);
var loading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29041__$1,cljs.core.cst$kw$loading_QMARK_);
var get_value = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29041__$1,cljs.core.cst$kw$get_DASH_value,cljs.core.constantly(""));
var on_search = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29041__$1,cljs.core.cst$kw$on_DASH_search,nw_calculator.utilities.no_op);
var on_select = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29041__$1,cljs.core.cst$kw$on_DASH_select,nw_calculator.utilities.no_op);
var input_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29041__$1,cljs.core.cst$kw$input_DASH_props);
var vec__29042 = nw_calculator.components.search.component.global$module$react.useState("");
var input_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29042,(0),null);
var set_input_value_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29042,(1),null);
var vec__29045 = nw_calculator.components.search.component.global$module$react.useState((-1));
var active_result_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29045,(0),null);
var set_active_result_index_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29045,(1),null);
var input_ref = nw_calculator.components.search.component.global$module$react.useRef();
var num_results = cljs.core.count(results);
var down_key_pressed_QMARK_ = nw_calculator.hooks.use_key_press("ArrowDown");
var up_key_pressed_QMARK_ = nw_calculator.hooks.use_key_press("ArrowUp");
var enter_key_pressed_QMARK_ = nw_calculator.hooks.use_key_press("Enter");
var with_let29048 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let29048);
var temp__5757__auto___29072 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___29072 == null)){
} else {
var c__18156__auto___29073 = temp__5757__auto___29072;
if((with_let29048.generation === c__18156__auto___29073.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let29048.generation = c__18156__auto___29073.ratomGeneration);
}

var init29049 = (with_let29048.length === (0));
var set_input_value_STAR__BANG_ = ((((init29049) || (cljs.core.not(with_let29048.hasOwnProperty((0))))))?(with_let29048[(0)] = (function (input_value__$1){
(set_input_value_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_input_value_BANG_.cljs$core$IFn$_invoke$arity$1(input_value__$1) : set_input_value_BANG_.call(null,input_value__$1));

return (input_ref.current.value = input_value__$1);
})):(with_let29048[(0)]));
var search_BANG_ = ((((init29049) || (cljs.core.not(with_let29048.hasOwnProperty((1))))))?(with_let29048[(1)] = (function (event){
var input_value__$1 = event.target.value;
(set_input_value_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_input_value_BANG_.cljs$core$IFn$_invoke$arity$1(input_value__$1) : set_input_value_BANG_.call(null,input_value__$1));

var fexpr__29051 = ((cljs.core.empty_QMARK_(input_value__$1))?on_clear:on_search);
return (fexpr__29051.cljs$core$IFn$_invoke$arity$1 ? fexpr__29051.cljs$core$IFn$_invoke$arity$1(input_value__$1) : fexpr__29051.call(null,input_value__$1));
})):(with_let29048[(1)]));
var select_result_BANG_ = ((((init29049) || (cljs.core.not(with_let29048.hasOwnProperty((2))))))?(with_let29048[(2)] = (function (result){
(on_select.cljs$core$IFn$_invoke$arity$1 ? on_select.cljs$core$IFn$_invoke$arity$1(result) : on_select.call(null,result));

var G__29052_29074 = (get_value.cljs$core$IFn$_invoke$arity$1 ? get_value.cljs$core$IFn$_invoke$arity$1(result) : get_value.call(null,result));
(set_input_value_STAR__BANG_.cljs$core$IFn$_invoke$arity$1 ? set_input_value_STAR__BANG_.cljs$core$IFn$_invoke$arity$1(G__29052_29074) : set_input_value_STAR__BANG_.call(null,G__29052_29074));

return input_ref.current.focus();
})):(with_let29048[(2)]));
var clear_input_value_BANG_ = ((((init29049) || (cljs.core.not(with_let29048.hasOwnProperty((3))))))?(with_let29048[(3)] = (function() { 
var G__29075__delegate = function (_){
(on_clear.cljs$core$IFn$_invoke$arity$0 ? on_clear.cljs$core$IFn$_invoke$arity$0() : on_clear.call(null));

(set_input_value_STAR__BANG_.cljs$core$IFn$_invoke$arity$1 ? set_input_value_STAR__BANG_.cljs$core$IFn$_invoke$arity$1("") : set_input_value_STAR__BANG_.call(null,""));

return input_ref.current.focus();
};
var G__29075 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__29076__i = 0, G__29076__a = new Array(arguments.length -  0);
while (G__29076__i < G__29076__a.length) {G__29076__a[G__29076__i] = arguments[G__29076__i + 0]; ++G__29076__i;}
  _ = new cljs.core.IndexedSeq(G__29076__a,0,null);
} 
return G__29075__delegate.call(this,_);};
G__29075.cljs$lang$maxFixedArity = 0;
G__29075.cljs$lang$applyTo = (function (arglist__29077){
var _ = cljs.core.seq(arglist__29077);
return G__29075__delegate(_);
});
G__29075.cljs$core$IFn$_invoke$arity$variadic = G__29075__delegate;
return G__29075;
})()
):(with_let29048[(3)]));
var input_focused_QMARK_ = ((((init29049) || (cljs.core.not(with_let29048.hasOwnProperty((4))))))?(with_let29048[(4)] = (function (){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(document.activeElement,input_ref.current);
})):(with_let29048[(4)]));
var get_result_ele = ((((init29049) || (cljs.core.not(with_let29048.hasOwnProperty((5))))))?(with_let29048[(5)] = (function (result_index){
return document.querySelector(cljstache.core.render.cljs$core$IFn$_invoke$arity$2("dt[data-result-index=\"{{ri}}\"]",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ri,result_index], null)));
})):(with_let29048[(5)]));
var highlight_result_BANG_ = ((((init29049) || (cljs.core.not(with_let29048.hasOwnProperty((6))))))?(with_let29048[(6)] = (function (target_result_index,num_results__$1){
var seq__29053 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(num_results__$1));
var chunk__29054 = null;
var count__29055 = (0);
var i__29056 = (0);
while(true){
if((i__29056 < count__29055)){
var result_index = chunk__29054.cljs$core$IIndexed$_nth$arity$2(null,i__29056);
var result_ele_29078 = (get_result_ele.cljs$core$IFn$_invoke$arity$1 ? get_result_ele.cljs$core$IFn$_invoke$arity$1(result_index) : get_result_ele.call(null,result_index));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(result_index,target_result_index)){
result_ele_29078.classList.add("bg-purple");
} else {
result_ele_29078.classList.remove("bg-purple");
}


var G__29079 = seq__29053;
var G__29080 = chunk__29054;
var G__29081 = count__29055;
var G__29082 = (i__29056 + (1));
seq__29053 = G__29079;
chunk__29054 = G__29080;
count__29055 = G__29081;
i__29056 = G__29082;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__29053);
if(temp__5753__auto__){
var seq__29053__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29053__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__29053__$1);
var G__29083 = cljs.core.chunk_rest(seq__29053__$1);
var G__29084 = c__4638__auto__;
var G__29085 = cljs.core.count(c__4638__auto__);
var G__29086 = (0);
seq__29053 = G__29083;
chunk__29054 = G__29084;
count__29055 = G__29085;
i__29056 = G__29086;
continue;
} else {
var result_index = cljs.core.first(seq__29053__$1);
var result_ele_29087 = (get_result_ele.cljs$core$IFn$_invoke$arity$1 ? get_result_ele.cljs$core$IFn$_invoke$arity$1(result_index) : get_result_ele.call(null,result_index));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(result_index,target_result_index)){
result_ele_29087.classList.add("bg-purple");
} else {
result_ele_29087.classList.remove("bg-purple");
}


var G__29088 = cljs.core.next(seq__29053__$1);
var G__29089 = null;
var G__29090 = (0);
var G__29091 = (0);
seq__29053 = G__29088;
chunk__29054 = G__29089;
count__29055 = G__29090;
i__29056 = G__29091;
continue;
}
} else {
return null;
}
}
break;
}
})):(with_let29048[(6)]));
var res29050 = (function (){
var G__29057_29092 = (function (){
var G__29059_29094 = input_ref.current.value;
(set_input_value_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_input_value_BANG_.cljs$core$IFn$_invoke$arity$1(G__29059_29094) : set_input_value_BANG_.call(null,G__29059_29094));

return nw_calculator.utilities.no_op;
});
var G__29058_29093 = [input_ref];
nw_calculator.components.search.component.global$module$react.useEffect(G__29057_29092,G__29058_29093);

var G__29060_29095 = (function (){
(set_active_result_index_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_active_result_index_BANG_.cljs$core$IFn$_invoke$arity$1((-1)) : set_active_result_index_BANG_.call(null,(-1)));

return nw_calculator.utilities.no_op;
});
var G__29061_29096 = [results];
nw_calculator.components.search.component.global$module$react.useEffect(G__29060_29095,G__29061_29096);

var G__29062_29097 = (function (){
var next_result_index_29099 = (active_result_index + (1));
if(cljs.core.truth_((function (){var and__4210__auto__ = (input_focused_QMARK_.cljs$core$IFn$_invoke$arity$0 ? input_focused_QMARK_.cljs$core$IFn$_invoke$arity$0() : input_focused_QMARK_.call(null));
if(cljs.core.truth_(and__4210__auto__)){
var and__4210__auto____$1 = down_key_pressed_QMARK_;
if(cljs.core.truth_(and__4210__auto____$1)){
return (next_result_index_29099 < num_results);
} else {
return and__4210__auto____$1;
}
} else {
return and__4210__auto__;
}
})())){
(set_active_result_index_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_active_result_index_BANG_.cljs$core$IFn$_invoke$arity$1(next_result_index_29099) : set_active_result_index_BANG_.call(null,next_result_index_29099));
} else {
}

return nw_calculator.utilities.no_op;
});
var G__29063_29098 = [down_key_pressed_QMARK_];
nw_calculator.components.search.component.global$module$react.useEffect(G__29062_29097,G__29063_29098);

var G__29064_29100 = (function (){
var prev_result_index_29102 = (active_result_index - (1));
if(cljs.core.truth_((function (){var and__4210__auto__ = (input_focused_QMARK_.cljs$core$IFn$_invoke$arity$0 ? input_focused_QMARK_.cljs$core$IFn$_invoke$arity$0() : input_focused_QMARK_.call(null));
if(cljs.core.truth_(and__4210__auto__)){
var and__4210__auto____$1 = up_key_pressed_QMARK_;
if(cljs.core.truth_(and__4210__auto____$1)){
return (prev_result_index_29102 > (-1));
} else {
return and__4210__auto____$1;
}
} else {
return and__4210__auto__;
}
})())){
(set_active_result_index_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_active_result_index_BANG_.cljs$core$IFn$_invoke$arity$1(prev_result_index_29102) : set_active_result_index_BANG_.call(null,prev_result_index_29102));
} else {
}

return nw_calculator.utilities.no_op;
});
var G__29065_29101 = [up_key_pressed_QMARK_];
nw_calculator.components.search.component.global$module$react.useEffect(G__29064_29100,G__29065_29101);

var G__29066_29103 = (function (){
var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(results,active_result_index);
if(cljs.core.truth_(temp__5751__auto__)){
var active_result = temp__5751__auto__;
return (select_result_BANG_.cljs$core$IFn$_invoke$arity$1 ? select_result_BANG_.cljs$core$IFn$_invoke$arity$1(active_result) : select_result_BANG_.call(null,active_result));
} else {
return null;
}
});
var G__29067_29104 = [enter_key_pressed_QMARK_];
nw_calculator.components.search.component.global$module$react.useEffect(G__29066_29103,G__29067_29104);

var G__29068_29105 = (function (){
return (highlight_result_BANG_.cljs$core$IFn$_invoke$arity$2 ? highlight_result_BANG_.cljs$core$IFn$_invoke$arity$2(active_result_index,num_results) : highlight_result_BANG_.call(null,active_result_index,num_results));
});
var G__29069_29106 = [active_result_index];
nw_calculator.components.search.component.global$module$react.useEffect(G__29068_29105,G__29069_29106);

return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$bg_DASH_inherit$relative$w_DASH_full,reagent.core.merge_props.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,nw_calculator.components.search.styles.search_class()], null),props),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$basic_DASH_input$search$w_DASH_full$flex_DASH_grow$md_COLON_pr_DASH_12_DASH_imp,reagent.core.merge_props.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$spell_DASH_check,false,cljs.core.cst$kw$ref,input_ref,cljs.core.cst$kw$placeholder,"Search something \uD83D\uDD0D",cljs.core.cst$kw$on_DASH_input,search_BANG_], null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(input_props,cljs.core.cst$kw$on_DASH_input))], null),(cljs.core.truth_((function (){var and__4210__auto__ = cljs.core.not_empty(input_value);
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not(loading_QMARK_);
} else {
return and__4210__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.circular_button.component.circular_button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_click,clear_input_value_BANG_,cljs.core.cst$kw$class,"absolute pb-3 -right-2 md:right-0 top-2 border-0 flex-none"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fas$fa_DASH_times$text_DASH_sm$md_COLON_text_DASH_base], null)], null):null),(cljs.core.truth_(loading_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.loader.component.loader,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"absolute text-lg md:text-2xl right-2 md:right-3 top-3 md:top-2 flex-none"], null)], null):null),(((num_results > (0)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dl$bg_DASH_inherit$w_DASH_full$max_DASH_w_DASH_full$absolute$m_DASH_0$z_DASH_50$bg_DASH_inherit$border_DASH_2$border_DASH_t_DASH_0$border_DASH_opacity_DASH_30$border_DASH_purple$rounded_DASH_b_DASH_md$rounded_DASH_t_DASH_none,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$multiple,true,cljs.core.cst$kw$size,cljs.core.count(results)], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (result_index,p__29070){
var map__29071 = p__29070;
var map__29071__$1 = cljs.core.__destructure_map(map__29071);
var result = map__29071__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29071__$1,cljs.core.cst$kw$id);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.search.component.result_list_item,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$on_DASH_select,select_result_BANG_,cljs.core.cst$kw$on_DASH_hover,set_active_result_index_BANG_,cljs.core.cst$kw$result_DASH_index,result_index,cljs.core.cst$kw$result,result], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [make_result,result], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,["result_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(result_index),"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null));
}),results)], null):null)], null);
})()
;
return res29050;
});
