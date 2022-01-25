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
var len__4818__auto___30913 = arguments.length;
var i__4819__auto___30914 = (0);
while(true){
if((i__4819__auto___30914 < len__4818__auto___30913)){
args__4824__auto__.push((arguments[i__4819__auto___30914]));

var G__30915 = (i__4819__auto___30914 + (1));
i__4819__auto___30914 = G__30915;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return nw_calculator.components.dropdown.component.option.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(nw_calculator.components.dropdown.component.option.cljs$core$IFn$_invoke$arity$variadic = (function (p__30908,children){
var map__30909 = p__30908;
var map__30909__$1 = cljs.core.__destructure_map(map__30909);
var on_select = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30909__$1,cljs.core.cst$kw$on_DASH_select);
var on_hover = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30909__$1,cljs.core.cst$kw$on_DASH_hover);
var option_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30909__$1,cljs.core.cst$kw$option_DASH_index);
var option = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30909__$1,cljs.core.cst$kw$option);
var with_let30910 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let30910);
var temp__5757__auto___30916 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___30916 == null)){
} else {
var c__14347__auto___30917 = temp__5757__auto___30916;
if((with_let30910.generation === c__14347__auto___30917.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let30910.generation = c__14347__auto___30917.ratomGeneration);
}

var init30911 = (with_let30910.length === (0));
var select_option = ((((init30911) || (cljs.core.not(with_let30910.hasOwnProperty((0))))))?(with_let30910[(0)] = (function (event){
event.stopPropagation();

return (on_select.cljs$core$IFn$_invoke$arity$1 ? on_select.cljs$core$IFn$_invoke$arity$1(option) : on_select.call(null,option));
})):(with_let30910[(0)]));
var hover_option = ((((init30911) || (cljs.core.not(with_let30910.hasOwnProperty((1))))))?(with_let30910[(1)] = (function() { 
var G__30918__delegate = function (_){
return (on_hover.cljs$core$IFn$_invoke$arity$1 ? on_hover.cljs$core$IFn$_invoke$arity$1(option_index) : on_hover.call(null,option_index));
};
var G__30918 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__30919__i = 0, G__30919__a = new Array(arguments.length -  0);
while (G__30919__i < G__30919__a.length) {G__30919__a[G__30919__i] = arguments[G__30919__i + 0]; ++G__30919__i;}
  _ = new cljs.core.IndexedSeq(G__30919__a,0,null);
} 
return G__30918__delegate.call(this,_);};
G__30918.cljs$lang$maxFixedArity = 0;
G__30918.cljs$lang$applyTo = (function (arglist__30920){
var _ = cljs.core.seq(arglist__30920);
return G__30918__delegate(_);
});
G__30918.cljs$core$IFn$_invoke$arity$variadic = G__30918__delegate;
return G__30918;
})()
):(with_let30910[(1)]));
var res30912 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dt$bg_DASH_inherit$transition_DASH_colors$bg_DASH_opacity_DASH_20$m_DASH_0$p_DASH_4$cursor_DASH_pointer,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$data_DASH_option_DASH_index,option_index,cljs.core.cst$kw$on_DASH_mouse_DASH_over,hover_option,cljs.core.cst$kw$on_DASH_click,select_option], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_], null),children)], null);
return res30912;
}));

(nw_calculator.components.dropdown.component.option.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(nw_calculator.components.dropdown.component.option.cljs$lang$applyTo = (function (seq30906){
var G__30907 = cljs.core.first(seq30906);
var seq30906__$1 = cljs.core.next(seq30906);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30907,seq30906__$1);
}));

/**
 * Returns a list of dropdown options, navigated by keyboard and mouse.
 * 
 *   `on-select` is a fn that is given an option when one is selected.
 *   `make-option` is a fn that, given an option, returns a hiccup representation of that option.
 *   `options` is a coll of the options to be displayed
 */
nw_calculator.components.dropdown.component.options = (function nw_calculator$components$dropdown$component$options(p__30921){
var map__30922 = p__30921;
var map__30922__$1 = cljs.core.__destructure_map(map__30922);
var on_select = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__30922__$1,cljs.core.cst$kw$on_DASH_select,nw_calculator.utilities.no_op());
var make_option = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30922__$1,cljs.core.cst$kw$make_DASH_option);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30922__$1,cljs.core.cst$kw$options);
var vec__30923 = nw_calculator.components.dropdown.component.global$module$react.useState((-1));
var active_option_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30923,(0),null);
var set_active_option_index_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30923,(1),null);
var down_key_pressed_QMARK_ = nw_calculator.hooks.use_key_press("ArrowDown");
var up_key_pressed_QMARK_ = nw_calculator.hooks.use_key_press("ArrowUp");
var enter_key_pressed_QMARK_ = nw_calculator.hooks.use_key_press("Enter");
var num_options = cljs.core.count(options);
var with_let30926 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let30926);
var temp__5757__auto___30945 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___30945 == null)){
} else {
var c__14347__auto___30946 = temp__5757__auto___30945;
if((with_let30926.generation === c__14347__auto___30946.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let30926.generation = c__14347__auto___30946.ratomGeneration);
}

var init30927 = (with_let30926.length === (0));
var get_option_ele = ((((init30927) || (cljs.core.not(with_let30926.hasOwnProperty((0))))))?(with_let30926[(0)] = (function (option_index){
return document.querySelector(cljstache.core.render.cljs$core$IFn$_invoke$arity$2("dt[data-option-index=\"{{oi}}\"]",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$oi,option_index], null)));
})):(with_let30926[(0)]));
var highlight_option_BANG_ = ((((init30927) || (cljs.core.not(with_let30926.hasOwnProperty((1))))))?(with_let30926[(1)] = (function (target_option_index,num_options__$1){
var seq__30929 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(num_options__$1));
var chunk__30930 = null;
var count__30931 = (0);
var i__30932 = (0);
while(true){
if((i__30932 < count__30931)){
var option_index = chunk__30930.cljs$core$IIndexed$_nth$arity$2(null,i__30932);
var option_ele_30947 = (get_option_ele.cljs$core$IFn$_invoke$arity$1 ? get_option_ele.cljs$core$IFn$_invoke$arity$1(option_index) : get_option_ele.call(null,option_index));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(option_index,target_option_index)){
option_ele_30947.classList.add("bg-purple");
} else {
option_ele_30947.classList.remove("bg-purple");
}


var G__30948 = seq__30929;
var G__30949 = chunk__30930;
var G__30950 = count__30931;
var G__30951 = (i__30932 + (1));
seq__30929 = G__30948;
chunk__30930 = G__30949;
count__30931 = G__30950;
i__30932 = G__30951;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__30929);
if(temp__5753__auto__){
var seq__30929__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30929__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__30929__$1);
var G__30952 = cljs.core.chunk_rest(seq__30929__$1);
var G__30953 = c__4638__auto__;
var G__30954 = cljs.core.count(c__4638__auto__);
var G__30955 = (0);
seq__30929 = G__30952;
chunk__30930 = G__30953;
count__30931 = G__30954;
i__30932 = G__30955;
continue;
} else {
var option_index = cljs.core.first(seq__30929__$1);
var option_ele_30956 = (get_option_ele.cljs$core$IFn$_invoke$arity$1 ? get_option_ele.cljs$core$IFn$_invoke$arity$1(option_index) : get_option_ele.call(null,option_index));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(option_index,target_option_index)){
option_ele_30956.classList.add("bg-purple");
} else {
option_ele_30956.classList.remove("bg-purple");
}


var G__30957 = cljs.core.next(seq__30929__$1);
var G__30958 = null;
var G__30959 = (0);
var G__30960 = (0);
seq__30929 = G__30957;
chunk__30930 = G__30958;
count__30931 = G__30959;
i__30932 = G__30960;
continue;
}
} else {
return null;
}
}
break;
}
})):(with_let30926[(1)]));
var res30928 = (function (){
var G__30933_30961 = (function (){
var temp__5751__auto___30963 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options,active_option_index);
if(cljs.core.truth_(temp__5751__auto___30963)){
var active_option_30964 = temp__5751__auto___30963;
(on_select.cljs$core$IFn$_invoke$arity$1 ? on_select.cljs$core$IFn$_invoke$arity$1(active_option_30964) : on_select.call(null,active_option_30964));
} else {
}

return nw_calculator.utilities.no_op;
});
var G__30934_30962 = [enter_key_pressed_QMARK_];
nw_calculator.components.dropdown.component.global$module$react.useEffect(G__30933_30961,G__30934_30962);

var G__30935_30965 = (function (){
(set_active_option_index_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_active_option_index_BANG_.cljs$core$IFn$_invoke$arity$1((-1)) : set_active_option_index_BANG_.call(null,(-1)));

return nw_calculator.utilities.no_op;
});
var G__30936_30966 = [options];
nw_calculator.components.dropdown.component.global$module$react.useEffect(G__30935_30965,G__30936_30966);

var G__30937_30967 = (function (){
var next_option_index_30969 = (active_option_index + (1));
if(cljs.core.truth_((function (){var and__4210__auto__ = down_key_pressed_QMARK_;
if(cljs.core.truth_(and__4210__auto__)){
return (next_option_index_30969 < num_options);
} else {
return and__4210__auto__;
}
})())){
(set_active_option_index_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_active_option_index_BANG_.cljs$core$IFn$_invoke$arity$1(next_option_index_30969) : set_active_option_index_BANG_.call(null,next_option_index_30969));
} else {
}

return nw_calculator.utilities.no_op;
});
var G__30938_30968 = [down_key_pressed_QMARK_];
nw_calculator.components.dropdown.component.global$module$react.useEffect(G__30937_30967,G__30938_30968);

var G__30939_30970 = (function (){
var prev_option_index_30972 = (active_option_index - (1));
if(cljs.core.truth_((function (){var and__4210__auto__ = up_key_pressed_QMARK_;
if(cljs.core.truth_(and__4210__auto__)){
return (prev_option_index_30972 > (-1));
} else {
return and__4210__auto__;
}
})())){
(set_active_option_index_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_active_option_index_BANG_.cljs$core$IFn$_invoke$arity$1(prev_option_index_30972) : set_active_option_index_BANG_.call(null,prev_option_index_30972));
} else {
}

return nw_calculator.utilities.no_op;
});
var G__30940_30971 = [up_key_pressed_QMARK_];
nw_calculator.components.dropdown.component.global$module$react.useEffect(G__30939_30970,G__30940_30971);

var G__30941_30973 = (function (){
return (highlight_option_BANG_.cljs$core$IFn$_invoke$arity$2 ? highlight_option_BANG_.cljs$core$IFn$_invoke$arity$2(active_option_index,num_options) : highlight_option_BANG_.call(null,active_option_index,num_options));
});
var G__30942_30974 = [active_option_index];
nw_calculator.components.dropdown.component.global$module$react.useEffect(G__30941_30973,G__30942_30974);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dl$bg_DASH_inherit$w_DASH_full$max_DASH_w_DASH_full$absolute$m_DASH_0$z_DASH_50$bg_DASH_inherit$border_DASH_2$border_DASH_t_DASH_0$border_DASH_opacity_DASH_30$border_DASH_purple$rounded_DASH_b_DASH_md$rounded_DASH_t_DASH_none,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (option_index,p__30943){
var map__30944 = p__30943;
var map__30944__$1 = cljs.core.__destructure_map(map__30944);
var option_STAR_ = map__30944__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30944__$1,cljs.core.cst$kw$id);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.dropdown.component.option,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$on_DASH_select,on_select,cljs.core.cst$kw$on_DASH_hover,set_active_option_index_BANG_,cljs.core.cst$kw$option_DASH_index,option_index,cljs.core.cst$kw$option,option_STAR_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$f_GT_,make_option,option_STAR_], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,["option_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(option_index),"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null));
}),options)], null);
})()
;
return res30928;
});
nw_calculator.components.dropdown.component.dropdown = (function nw_calculator$components$dropdown$component$dropdown(p__30975){
var map__30976 = p__30975;
var map__30976__$1 = cljs.core.__destructure_map(map__30976);
var options_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30976__$1,cljs.core.cst$kw$options);
var input_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30976__$1,cljs.core.cst$kw$input_DASH_props);
var container_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30976__$1,cljs.core.cst$kw$container_DASH_props);
var make_option = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30976__$1,cljs.core.cst$kw$make_DASH_option);
var on_select = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__30976__$1,cljs.core.cst$kw$on_DASH_select,nw_calculator.utilities.no_op);
var get_value = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__30976__$1,cljs.core.cst$kw$get_DASH_value,cljs.core.constantly(""));
var input_ref = nw_calculator.components.dropdown.component.global$module$react.useRef();
var escape_key_pressed_QMARK_ = nw_calculator.hooks.use_key_press("Escape");
var with_let30977 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let30977);
var temp__5757__auto___30985 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___30985 == null)){
} else {
var c__14347__auto___30986 = temp__5757__auto___30985;
if((with_let30977.generation === c__14347__auto___30986.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let30977.generation = c__14347__auto___30986.ratomGeneration);
}

var init30978 = (with_let30977.length === (0));
var dropdown_focused_QMARK_ = ((((init30978) || (cljs.core.not(with_let30977.hasOwnProperty((0))))))?(with_let30977[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false)):(with_let30977[(0)]));
var focus_BANG_ = ((((init30978) || (cljs.core.not(with_let30977.hasOwnProperty((1))))))?(with_let30977[(1)] = (function (){
input_ref.current.focus();

return cljs.core.reset_BANG_(dropdown_focused_QMARK_,true);
})):(with_let30977[(1)]));
var blur_BANG_ = ((((init30978) || (cljs.core.not(with_let30977.hasOwnProperty((2))))))?(with_let30977[(2)] = (function (){
input_ref.current.blur();

return setTimeout((function (){
return cljs.core.reset_BANG_(dropdown_focused_QMARK_,false);
}),(200));
})):(with_let30977[(2)]));
var set_input_value_BANG_ = ((((init30978) || (cljs.core.not(with_let30977.hasOwnProperty((3))))))?(with_let30977[(3)] = (function (input_value){
return (input_ref.current.value = input_value);
})):(with_let30977[(3)]));
var select_result_BANG_ = ((((init30978) || (cljs.core.not(with_let30977.hasOwnProperty((4))))))?(with_let30977[(4)] = (function (result){
(on_select.cljs$core$IFn$_invoke$arity$1 ? on_select.cljs$core$IFn$_invoke$arity$1(result) : on_select.call(null,result));

var G__30980_30987 = (get_value.cljs$core$IFn$_invoke$arity$1 ? get_value.cljs$core$IFn$_invoke$arity$1(result) : get_value.call(null,result));
(set_input_value_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_input_value_BANG_.cljs$core$IFn$_invoke$arity$1(G__30980_30987) : set_input_value_BANG_.call(null,G__30980_30987));

return (blur_BANG_.cljs$core$IFn$_invoke$arity$0 ? blur_BANG_.cljs$core$IFn$_invoke$arity$0() : blur_BANG_.call(null));
})):(with_let30977[(4)]));
var toggle_dropdown_BANG_ = ((((init30978) || (cljs.core.not(with_let30977.hasOwnProperty((5))))))?(with_let30977[(5)] = (function (){
if(cljs.core.truth_(cljs.core.deref(dropdown_focused_QMARK_))){
return (blur_BANG_.cljs$core$IFn$_invoke$arity$0 ? blur_BANG_.cljs$core$IFn$_invoke$arity$0() : blur_BANG_.call(null));
} else {
return (focus_BANG_.cljs$core$IFn$_invoke$arity$0 ? focus_BANG_.cljs$core$IFn$_invoke$arity$0() : focus_BANG_.call(null));
}
})):(with_let30977[(5)]));
var prevent_key_scrolling = ((((init30978) || (cljs.core.not(with_let30977.hasOwnProperty((6))))))?(with_let30977[(6)] = (function (event){
if(cljs.core.truth_((function (){var G__30982 = event.key;
var fexpr__30981 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["ArrowUp",null,"ArrowDown",null], null), null);
return (fexpr__30981.cljs$core$IFn$_invoke$arity$1 ? fexpr__30981.cljs$core$IFn$_invoke$arity$1(G__30982) : fexpr__30981.call(null,G__30982));
})())){
return event.view.event.preventDefault();
} else {
return null;
}
})):(with_let30977[(6)]));
var res30979 = (function (){
var G__30983_30988 = (function (){
(blur_BANG_.cljs$core$IFn$_invoke$arity$0 ? blur_BANG_.cljs$core$IFn$_invoke$arity$0() : blur_BANG_.call(null));

return nw_calculator.utilities.no_op;
});
var G__30984_30989 = [escape_key_pressed_QMARK_];
nw_calculator.components.dropdown.component.global$module$react.useEffect(G__30983_30988,G__30984_30989);

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$flex_DASH_grow$relative$cursor_DASH_pointer,reagent.core.merge_props.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,nw_calculator.components.dropdown.styles.dropdown_class(),cljs.core.cst$kw$on_DASH_click,toggle_dropdown_BANG_], null),container_props),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$dropdown$basic_DASH_input$cursor_DASH_pointer,reagent.core.merge_props.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$read_DASH_only,true,cljs.core.cst$kw$on_DASH_key_DASH_down,prevent_key_scrolling,cljs.core.cst$kw$spell_DASH_check,false,cljs.core.cst$kw$on_DASH_blur,blur_BANG_,cljs.core.cst$kw$ref,input_ref], null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(input_props,cljs.core.cst$kw$ref))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fas$fa_DASH_caret_DASH_down$text_DASH_base$md_COLON_text_DASH_lg$absolute$bottom_DASH_2$right_DASH_1$transition_DASH_transform$pointer_DASH_events_DASH_none,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,(cljs.core.truth_(cljs.core.deref(dropdown_focused_QMARK_))?"text-purple text-opacity-100 flip-y":null)], null)], null),(cljs.core.truth_((function (){var and__4210__auto__ = cljs.core.deref(dropdown_focused_QMARK_);
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not_empty(options_STAR_);
} else {
return and__4210__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$f_GT_,nw_calculator.components.dropdown.component.options,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$options,options_STAR_,cljs.core.cst$kw$make_DASH_option,make_option,cljs.core.cst$kw$on_DASH_select,select_result_BANG_], null)], null):null)], null);
})()
;
return res30979;
});
