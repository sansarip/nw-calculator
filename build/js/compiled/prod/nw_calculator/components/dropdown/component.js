// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('nw_calculator.components.dropdown.component');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljstache.core');
goog.require('nw_calculator.hooks');
goog.require('reagent.core');
goog.require('nw_calculator.utilities');
goog.require('nw_calculator.components.dropdown.styles');
nw_calculator.components.dropdown.component.global$module$react = goog.global["React"];
nw_calculator.components.dropdown.component.option = (function nw_calculator$components$dropdown$component$option(var_args){
var args__4824__auto__ = [];
var len__4818__auto___29004 = arguments.length;
var i__4819__auto___29005 = (0);
while(true){
if((i__4819__auto___29005 < len__4818__auto___29004)){
args__4824__auto__.push((arguments[i__4819__auto___29005]));

var G__29006 = (i__4819__auto___29005 + (1));
i__4819__auto___29005 = G__29006;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return nw_calculator.components.dropdown.component.option.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(nw_calculator.components.dropdown.component.option.cljs$core$IFn$_invoke$arity$variadic = (function (p__29000,_){
var map__29001 = p__29000;
var map__29001__$1 = cljs.core.__destructure_map(map__29001);
var on_select = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29001__$1,cljs.core.cst$kw$on_DASH_select);
var on_hover = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29001__$1,cljs.core.cst$kw$on_DASH_hover);
var option_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29001__$1,cljs.core.cst$kw$option_DASH_index);
var option = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29001__$1,cljs.core.cst$kw$option);
var select_option = (function() { 
var nw_calculator$components$dropdown$component$select_option__delegate = function (___$1){
return (on_select.cljs$core$IFn$_invoke$arity$1 ? on_select.cljs$core$IFn$_invoke$arity$1(option) : on_select.call(null,option));
};
var nw_calculator$components$dropdown$component$select_option = function (var_args){
var ___$1 = null;
if (arguments.length > 0) {
var G__29007__i = 0, G__29007__a = new Array(arguments.length -  0);
while (G__29007__i < G__29007__a.length) {G__29007__a[G__29007__i] = arguments[G__29007__i + 0]; ++G__29007__i;}
  ___$1 = new cljs.core.IndexedSeq(G__29007__a,0,null);
} 
return nw_calculator$components$dropdown$component$select_option__delegate.call(this,___$1);};
nw_calculator$components$dropdown$component$select_option.cljs$lang$maxFixedArity = 0;
nw_calculator$components$dropdown$component$select_option.cljs$lang$applyTo = (function (arglist__29008){
var ___$1 = cljs.core.seq(arglist__29008);
return nw_calculator$components$dropdown$component$select_option__delegate(___$1);
});
nw_calculator$components$dropdown$component$select_option.cljs$core$IFn$_invoke$arity$variadic = nw_calculator$components$dropdown$component$select_option__delegate;
return nw_calculator$components$dropdown$component$select_option;
})()
;
var hover_option = (function() { 
var nw_calculator$components$dropdown$component$hover_option__delegate = function (___$1){
return (on_hover.cljs$core$IFn$_invoke$arity$1 ? on_hover.cljs$core$IFn$_invoke$arity$1(option_index) : on_hover.call(null,option_index));
};
var nw_calculator$components$dropdown$component$hover_option = function (var_args){
var ___$1 = null;
if (arguments.length > 0) {
var G__29009__i = 0, G__29009__a = new Array(arguments.length -  0);
while (G__29009__i < G__29009__a.length) {G__29009__a[G__29009__i] = arguments[G__29009__i + 0]; ++G__29009__i;}
  ___$1 = new cljs.core.IndexedSeq(G__29009__a,0,null);
} 
return nw_calculator$components$dropdown$component$hover_option__delegate.call(this,___$1);};
nw_calculator$components$dropdown$component$hover_option.cljs$lang$maxFixedArity = 0;
nw_calculator$components$dropdown$component$hover_option.cljs$lang$applyTo = (function (arglist__29010){
var ___$1 = cljs.core.seq(arglist__29010);
return nw_calculator$components$dropdown$component$hover_option__delegate(___$1);
});
nw_calculator$components$dropdown$component$hover_option.cljs$core$IFn$_invoke$arity$variadic = nw_calculator$components$dropdown$component$hover_option__delegate;
return nw_calculator$components$dropdown$component$hover_option;
})()
;
return (function() { 
var G__29011__delegate = function (p__29002,children){
var map__29003 = p__29002;
var map__29003__$1 = cljs.core.__destructure_map(map__29003);
var option_index__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29003__$1,cljs.core.cst$kw$option_DASH_index);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dt$bg_DASH_inherit$transition_DASH_colors$bg_DASH_opacity_DASH_20$m_DASH_0$p_DASH_4$cursor_DASH_pointer,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$data_DASH_option_DASH_index,option_index__$1,cljs.core.cst$kw$on_DASH_mouse_DASH_over,hover_option,cljs.core.cst$kw$on_DASH_mouse_DASH_down,select_option], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_], null),children)], null);
};
var G__29011 = function (p__29002,var_args){
var children = null;
if (arguments.length > 1) {
var G__29012__i = 0, G__29012__a = new Array(arguments.length -  1);
while (G__29012__i < G__29012__a.length) {G__29012__a[G__29012__i] = arguments[G__29012__i + 1]; ++G__29012__i;}
  children = new cljs.core.IndexedSeq(G__29012__a,0,null);
} 
return G__29011__delegate.call(this,p__29002,children);};
G__29011.cljs$lang$maxFixedArity = 1;
G__29011.cljs$lang$applyTo = (function (arglist__29013){
var p__29002 = cljs.core.first(arglist__29013);
var children = cljs.core.rest(arglist__29013);
return G__29011__delegate(p__29002,children);
});
G__29011.cljs$core$IFn$_invoke$arity$variadic = G__29011__delegate;
return G__29011;
})()
;
}));

(nw_calculator.components.dropdown.component.option.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(nw_calculator.components.dropdown.component.option.cljs$lang$applyTo = (function (seq28998){
var G__28999 = cljs.core.first(seq28998);
var seq28998__$1 = cljs.core.next(seq28998);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28999,seq28998__$1);
}));

/**
 * Returns a list of dropdown options, navigated by keyboard and mouse.
 * 
 *   `on-select` is a fn that is given an option when one is selected.
 *   `make-option` is a fn that, given an option, returns a hiccup representation of that option.
 *   `options` is a coll of the options to be displayed
 */
nw_calculator.components.dropdown.component.options = (function nw_calculator$components$dropdown$component$options(p__29014){
var map__29015 = p__29014;
var map__29015__$1 = cljs.core.__destructure_map(map__29015);
var on_select = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29015__$1,cljs.core.cst$kw$on_DASH_select,nw_calculator.utilities.no_op());
var make_option = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29015__$1,cljs.core.cst$kw$make_DASH_option);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29015__$1,cljs.core.cst$kw$options);
var vec__29016 = nw_calculator.components.dropdown.component.global$module$react.useState((-1));
var active_option_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29016,(0),null);
var set_active_option_index_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29016,(1),null);
var down_key_pressed_QMARK_ = nw_calculator.hooks.use_key_press("ArrowDown");
var up_key_pressed_QMARK_ = nw_calculator.hooks.use_key_press("ArrowUp");
var enter_key_pressed_QMARK_ = nw_calculator.hooks.use_key_press("Enter");
var num_options = cljs.core.count(options);
var with_let29019 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let29019);
var temp__5757__auto___29038 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___29038 == null)){
} else {
var c__13075__auto___29039 = temp__5757__auto___29038;
if((with_let29019.generation === c__13075__auto___29039.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let29019.generation = c__13075__auto___29039.ratomGeneration);
}

var init29020 = (with_let29019.length === (0));
var get_option_ele = ((((init29020) || (cljs.core.not(with_let29019.hasOwnProperty((0))))))?(with_let29019[(0)] = (function (option_index){
return document.querySelector(cljstache.core.render.cljs$core$IFn$_invoke$arity$2("dt[data-option-index=\"{{oi}}\"]",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$oi,option_index], null)));
})):(with_let29019[(0)]));
var highlight_option_BANG_ = ((((init29020) || (cljs.core.not(with_let29019.hasOwnProperty((1))))))?(with_let29019[(1)] = (function (target_option_index,num_options__$1){
var seq__29022 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(num_options__$1));
var chunk__29023 = null;
var count__29024 = (0);
var i__29025 = (0);
while(true){
if((i__29025 < count__29024)){
var option_index = chunk__29023.cljs$core$IIndexed$_nth$arity$2(null,i__29025);
var option_ele_29040 = (get_option_ele.cljs$core$IFn$_invoke$arity$1 ? get_option_ele.cljs$core$IFn$_invoke$arity$1(option_index) : get_option_ele.call(null,option_index));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(option_index,target_option_index)){
option_ele_29040.classList.add("bg-purple");
} else {
option_ele_29040.classList.remove("bg-purple");
}


var G__29041 = seq__29022;
var G__29042 = chunk__29023;
var G__29043 = count__29024;
var G__29044 = (i__29025 + (1));
seq__29022 = G__29041;
chunk__29023 = G__29042;
count__29024 = G__29043;
i__29025 = G__29044;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__29022);
if(temp__5753__auto__){
var seq__29022__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29022__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__29022__$1);
var G__29045 = cljs.core.chunk_rest(seq__29022__$1);
var G__29046 = c__4638__auto__;
var G__29047 = cljs.core.count(c__4638__auto__);
var G__29048 = (0);
seq__29022 = G__29045;
chunk__29023 = G__29046;
count__29024 = G__29047;
i__29025 = G__29048;
continue;
} else {
var option_index = cljs.core.first(seq__29022__$1);
var option_ele_29049 = (get_option_ele.cljs$core$IFn$_invoke$arity$1 ? get_option_ele.cljs$core$IFn$_invoke$arity$1(option_index) : get_option_ele.call(null,option_index));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(option_index,target_option_index)){
option_ele_29049.classList.add("bg-purple");
} else {
option_ele_29049.classList.remove("bg-purple");
}


var G__29050 = cljs.core.next(seq__29022__$1);
var G__29051 = null;
var G__29052 = (0);
var G__29053 = (0);
seq__29022 = G__29050;
chunk__29023 = G__29051;
count__29024 = G__29052;
i__29025 = G__29053;
continue;
}
} else {
return null;
}
}
break;
}
})):(with_let29019[(1)]));
var res29021 = (function (){
var G__29026_29054 = (function (){
var temp__5751__auto___29056 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options,active_option_index);
if(cljs.core.truth_(temp__5751__auto___29056)){
var active_option_29057 = temp__5751__auto___29056;
(on_select.cljs$core$IFn$_invoke$arity$1 ? on_select.cljs$core$IFn$_invoke$arity$1(active_option_29057) : on_select.call(null,active_option_29057));
} else {
}

return nw_calculator.utilities.no_op;
});
var G__29027_29055 = [enter_key_pressed_QMARK_];
nw_calculator.components.dropdown.component.global$module$react.useEffect(G__29026_29054,G__29027_29055);

var G__29028_29058 = (function (){
(set_active_option_index_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_active_option_index_BANG_.cljs$core$IFn$_invoke$arity$1((-1)) : set_active_option_index_BANG_.call(null,(-1)));

return nw_calculator.utilities.no_op;
});
var G__29029_29059 = [options];
nw_calculator.components.dropdown.component.global$module$react.useEffect(G__29028_29058,G__29029_29059);

var G__29030_29060 = (function (){
var next_option_index_29062 = (active_option_index + (1));
if(cljs.core.truth_((function (){var and__4210__auto__ = down_key_pressed_QMARK_;
if(cljs.core.truth_(and__4210__auto__)){
return (next_option_index_29062 < num_options);
} else {
return and__4210__auto__;
}
})())){
(set_active_option_index_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_active_option_index_BANG_.cljs$core$IFn$_invoke$arity$1(next_option_index_29062) : set_active_option_index_BANG_.call(null,next_option_index_29062));
} else {
}

return nw_calculator.utilities.no_op;
});
var G__29031_29061 = [down_key_pressed_QMARK_];
nw_calculator.components.dropdown.component.global$module$react.useEffect(G__29030_29060,G__29031_29061);

var G__29032_29063 = (function (){
var prev_option_index_29065 = (active_option_index - (1));
if(cljs.core.truth_((function (){var and__4210__auto__ = up_key_pressed_QMARK_;
if(cljs.core.truth_(and__4210__auto__)){
return (prev_option_index_29065 > (-1));
} else {
return and__4210__auto__;
}
})())){
(set_active_option_index_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_active_option_index_BANG_.cljs$core$IFn$_invoke$arity$1(prev_option_index_29065) : set_active_option_index_BANG_.call(null,prev_option_index_29065));
} else {
}

return nw_calculator.utilities.no_op;
});
var G__29033_29064 = [up_key_pressed_QMARK_];
nw_calculator.components.dropdown.component.global$module$react.useEffect(G__29032_29063,G__29033_29064);

var G__29034_29066 = (function (){
return (highlight_option_BANG_.cljs$core$IFn$_invoke$arity$2 ? highlight_option_BANG_.cljs$core$IFn$_invoke$arity$2(active_option_index,num_options) : highlight_option_BANG_.call(null,active_option_index,num_options));
});
var G__29035_29067 = [active_option_index];
nw_calculator.components.dropdown.component.global$module$react.useEffect(G__29034_29066,G__29035_29067);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dl$bg_DASH_inherit$w_DASH_full$max_DASH_w_DASH_full$absolute$m_DASH_0$z_DASH_50$bg_DASH_inherit$border_DASH_2$border_DASH_t_DASH_0$border_DASH_opacity_DASH_30$border_DASH_purple$rounded_DASH_b_DASH_md$rounded_DASH_t_DASH_none,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (option_index,p__29036){
var map__29037 = p__29036;
var map__29037__$1 = cljs.core.__destructure_map(map__29037);
var option_STAR_ = map__29037__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29037__$1,cljs.core.cst$kw$id);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.dropdown.component.option,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$on_DASH_select,on_select,cljs.core.cst$kw$on_DASH_hover,set_active_option_index_BANG_,cljs.core.cst$kw$option_DASH_index,option_index,cljs.core.cst$kw$option,option_STAR_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$f_GT_,make_option,option_STAR_], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,["option_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(option_index),"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null));
}),options)], null);
})()
;
return res29021;
});
nw_calculator.components.dropdown.component.dropdown = (function nw_calculator$components$dropdown$component$dropdown(p__29068){
var map__29069 = p__29068;
var map__29069__$1 = cljs.core.__destructure_map(map__29069);
var options_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29069__$1,cljs.core.cst$kw$options);
var input_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29069__$1,cljs.core.cst$kw$input_DASH_props);
var container_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29069__$1,cljs.core.cst$kw$container_DASH_props);
var make_option = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29069__$1,cljs.core.cst$kw$make_DASH_option);
var on_select = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29069__$1,cljs.core.cst$kw$on_DASH_select,nw_calculator.utilities.no_op);
var get_value = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29069__$1,cljs.core.cst$kw$get_DASH_value,cljs.core.constantly(""));
var input_ref = nw_calculator.components.dropdown.component.global$module$react.useRef();
var escape_key_pressed_QMARK_ = nw_calculator.hooks.use_key_press("Escape");
var with_let29070 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let29070);
var temp__5757__auto___29078 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___29078 == null)){
} else {
var c__13075__auto___29079 = temp__5757__auto___29078;
if((with_let29070.generation === c__13075__auto___29079.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let29070.generation = c__13075__auto___29079.ratomGeneration);
}

var init29071 = (with_let29070.length === (0));
var dropdown_focused_QMARK_ = ((((init29071) || (cljs.core.not(with_let29070.hasOwnProperty((0))))))?(with_let29070[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false)):(with_let29070[(0)]));
var focus_BANG_ = ((((init29071) || (cljs.core.not(with_let29070.hasOwnProperty((1))))))?(with_let29070[(1)] = (function (){
input_ref.current.focus();

return cljs.core.reset_BANG_(dropdown_focused_QMARK_,true);
})):(with_let29070[(1)]));
var blur_BANG_ = ((((init29071) || (cljs.core.not(with_let29070.hasOwnProperty((2))))))?(with_let29070[(2)] = (function (){
input_ref.current.blur();

return cljs.core.reset_BANG_(dropdown_focused_QMARK_,false);
})):(with_let29070[(2)]));
var set_input_value_BANG_ = ((((init29071) || (cljs.core.not(with_let29070.hasOwnProperty((3))))))?(with_let29070[(3)] = (function (input_value){
return (input_ref.current.value = input_value);
})):(with_let29070[(3)]));
var select_result_BANG_ = ((((init29071) || (cljs.core.not(with_let29070.hasOwnProperty((4))))))?(with_let29070[(4)] = (function (result){
(on_select.cljs$core$IFn$_invoke$arity$1 ? on_select.cljs$core$IFn$_invoke$arity$1(result) : on_select.call(null,result));

var G__29073_29080 = (get_value.cljs$core$IFn$_invoke$arity$1 ? get_value.cljs$core$IFn$_invoke$arity$1(result) : get_value.call(null,result));
(set_input_value_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_input_value_BANG_.cljs$core$IFn$_invoke$arity$1(G__29073_29080) : set_input_value_BANG_.call(null,G__29073_29080));

return (blur_BANG_.cljs$core$IFn$_invoke$arity$0 ? blur_BANG_.cljs$core$IFn$_invoke$arity$0() : blur_BANG_.call(null));
})):(with_let29070[(4)]));
var toggle_dropdown_BANG_ = ((((init29071) || (cljs.core.not(with_let29070.hasOwnProperty((5))))))?(with_let29070[(5)] = (function (){
if(cljs.core.truth_(cljs.core.deref(dropdown_focused_QMARK_))){
return (blur_BANG_.cljs$core$IFn$_invoke$arity$0 ? blur_BANG_.cljs$core$IFn$_invoke$arity$0() : blur_BANG_.call(null));
} else {
return (focus_BANG_.cljs$core$IFn$_invoke$arity$0 ? focus_BANG_.cljs$core$IFn$_invoke$arity$0() : focus_BANG_.call(null));
}
})):(with_let29070[(5)]));
var prevent_key_scrolling = ((((init29071) || (cljs.core.not(with_let29070.hasOwnProperty((6))))))?(with_let29070[(6)] = (function (event){
if(cljs.core.truth_((function (){var G__29075 = event.key;
var fexpr__29074 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["ArrowUp",null,"ArrowDown",null], null), null);
return (fexpr__29074.cljs$core$IFn$_invoke$arity$1 ? fexpr__29074.cljs$core$IFn$_invoke$arity$1(G__29075) : fexpr__29074.call(null,G__29075));
})())){
return event.view.event.preventDefault();
} else {
return null;
}
})):(with_let29070[(6)]));
var res29072 = (function (){
var G__29076_29081 = (function (){
(blur_BANG_.cljs$core$IFn$_invoke$arity$0 ? blur_BANG_.cljs$core$IFn$_invoke$arity$0() : blur_BANG_.call(null));

return nw_calculator.utilities.no_op;
});
var G__29077_29082 = [escape_key_pressed_QMARK_];
nw_calculator.components.dropdown.component.global$module$react.useEffect(G__29076_29081,G__29077_29082);

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$flex_DASH_grow$relative$cursor_DASH_pointer,reagent.core.merge_props.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,nw_calculator.components.dropdown.styles.dropdown_class(),cljs.core.cst$kw$on_DASH_click,toggle_dropdown_BANG_], null),container_props),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$dropdown$basic_DASH_input$cursor_DASH_pointer,reagent.core.merge_props.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$read_DASH_only,true,cljs.core.cst$kw$on_DASH_key_DASH_down,prevent_key_scrolling,cljs.core.cst$kw$spell_DASH_check,false,cljs.core.cst$kw$on_DASH_blur,blur_BANG_,cljs.core.cst$kw$ref,input_ref], null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(input_props,cljs.core.cst$kw$ref))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fas$fa_DASH_caret_DASH_down$text_DASH_base$md_COLON_text_DASH_lg$absolute$bottom_DASH_2$right_DASH_1$transition_DASH_transform$pointer_DASH_events_DASH_none,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,(cljs.core.truth_(cljs.core.deref(dropdown_focused_QMARK_))?"text-purple text-opacity-100 flip-y":null)], null)], null),(cljs.core.truth_((function (){var and__4210__auto__ = cljs.core.deref(dropdown_focused_QMARK_);
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not_empty(options_STAR_);
} else {
return and__4210__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$f_GT_,nw_calculator.components.dropdown.component.options,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$options,options_STAR_,cljs.core.cst$kw$make_DASH_option,make_option,cljs.core.cst$kw$on_DASH_select,select_result_BANG_], null)], null):null)], null);
})()
;
return res29072;
});
