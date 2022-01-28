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
var len__4818__auto___30925 = arguments.length;
var i__4819__auto___30926 = (0);
while(true){
if((i__4819__auto___30926 < len__4818__auto___30925)){
args__4824__auto__.push((arguments[i__4819__auto___30926]));

var G__30927 = (i__4819__auto___30926 + (1));
i__4819__auto___30926 = G__30927;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return nw_calculator.components.dropdown.component.option.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(nw_calculator.components.dropdown.component.option.cljs$core$IFn$_invoke$arity$variadic = (function (p__30920,children){
var map__30921 = p__30920;
var map__30921__$1 = cljs.core.__destructure_map(map__30921);
var on_select = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30921__$1,cljs.core.cst$kw$on_DASH_select);
var on_hover = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30921__$1,cljs.core.cst$kw$on_DASH_hover);
var option_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30921__$1,cljs.core.cst$kw$option_DASH_index);
var option = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30921__$1,cljs.core.cst$kw$option);
var with_let30922 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let30922);
var temp__5757__auto___30928 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___30928 == null)){
} else {
var c__14347__auto___30929 = temp__5757__auto___30928;
if((with_let30922.generation === c__14347__auto___30929.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let30922.generation = c__14347__auto___30929.ratomGeneration);
}

var init30923 = (with_let30922.length === (0));
var select_option = ((((init30923) || (cljs.core.not(with_let30922.hasOwnProperty((0))))))?(with_let30922[(0)] = (function (event){
event.stopPropagation();

return (on_select.cljs$core$IFn$_invoke$arity$1 ? on_select.cljs$core$IFn$_invoke$arity$1(option) : on_select.call(null,option));
})):(with_let30922[(0)]));
var hover_option = ((((init30923) || (cljs.core.not(with_let30922.hasOwnProperty((1))))))?(with_let30922[(1)] = (function() { 
var G__30930__delegate = function (_){
return (on_hover.cljs$core$IFn$_invoke$arity$1 ? on_hover.cljs$core$IFn$_invoke$arity$1(option_index) : on_hover.call(null,option_index));
};
var G__30930 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__30931__i = 0, G__30931__a = new Array(arguments.length -  0);
while (G__30931__i < G__30931__a.length) {G__30931__a[G__30931__i] = arguments[G__30931__i + 0]; ++G__30931__i;}
  _ = new cljs.core.IndexedSeq(G__30931__a,0,null);
} 
return G__30930__delegate.call(this,_);};
G__30930.cljs$lang$maxFixedArity = 0;
G__30930.cljs$lang$applyTo = (function (arglist__30932){
var _ = cljs.core.seq(arglist__30932);
return G__30930__delegate(_);
});
G__30930.cljs$core$IFn$_invoke$arity$variadic = G__30930__delegate;
return G__30930;
})()
):(with_let30922[(1)]));
var res30924 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dt$bg_DASH_inherit$transition_DASH_colors$bg_DASH_opacity_DASH_20$m_DASH_0$p_DASH_4$cursor_DASH_pointer,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$data_DASH_option_DASH_index,option_index,cljs.core.cst$kw$on_DASH_mouse_DASH_over,hover_option,cljs.core.cst$kw$on_DASH_click,select_option], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_], null),children)], null);
return res30924;
}));

(nw_calculator.components.dropdown.component.option.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(nw_calculator.components.dropdown.component.option.cljs$lang$applyTo = (function (seq30918){
var G__30919 = cljs.core.first(seq30918);
var seq30918__$1 = cljs.core.next(seq30918);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30919,seq30918__$1);
}));

/**
 * Returns a list of dropdown options, navigated by keyboard and mouse.
 * 
 *   `on-select` is a fn that is given an option when one is selected.
 *   `make-option` is a fn that, given an option, returns a hiccup representation of that option.
 *   `options` is a coll of the options to be displayed
 */
nw_calculator.components.dropdown.component.options = (function nw_calculator$components$dropdown$component$options(p__30933){
var map__30934 = p__30933;
var map__30934__$1 = cljs.core.__destructure_map(map__30934);
var on_select = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__30934__$1,cljs.core.cst$kw$on_DASH_select,nw_calculator.utilities.no_op());
var make_option = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30934__$1,cljs.core.cst$kw$make_DASH_option);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30934__$1,cljs.core.cst$kw$options);
var vec__30935 = nw_calculator.components.dropdown.component.global$module$react.useState((-1));
var active_option_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30935,(0),null);
var set_active_option_index_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30935,(1),null);
var down_key_pressed_QMARK_ = nw_calculator.hooks.use_key_press("ArrowDown");
var up_key_pressed_QMARK_ = nw_calculator.hooks.use_key_press("ArrowUp");
var enter_key_pressed_QMARK_ = nw_calculator.hooks.use_key_press("Enter");
var num_options = cljs.core.count(options);
var with_let30938 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let30938);
var temp__5757__auto___30957 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___30957 == null)){
} else {
var c__14347__auto___30958 = temp__5757__auto___30957;
if((with_let30938.generation === c__14347__auto___30958.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let30938.generation = c__14347__auto___30958.ratomGeneration);
}

var init30939 = (with_let30938.length === (0));
var get_option_ele = ((((init30939) || (cljs.core.not(with_let30938.hasOwnProperty((0))))))?(with_let30938[(0)] = (function (option_index){
return document.querySelector(cljstache.core.render.cljs$core$IFn$_invoke$arity$2("dt[data-option-index=\"{{oi}}\"]",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$oi,option_index], null)));
})):(with_let30938[(0)]));
var highlight_option_BANG_ = ((((init30939) || (cljs.core.not(with_let30938.hasOwnProperty((1))))))?(with_let30938[(1)] = (function (target_option_index,num_options__$1){
var seq__30941 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(num_options__$1));
var chunk__30942 = null;
var count__30943 = (0);
var i__30944 = (0);
while(true){
if((i__30944 < count__30943)){
var option_index = chunk__30942.cljs$core$IIndexed$_nth$arity$2(null,i__30944);
var option_ele_30959 = (get_option_ele.cljs$core$IFn$_invoke$arity$1 ? get_option_ele.cljs$core$IFn$_invoke$arity$1(option_index) : get_option_ele.call(null,option_index));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(option_index,target_option_index)){
option_ele_30959.classList.add("bg-purple");
} else {
option_ele_30959.classList.remove("bg-purple");
}


var G__30960 = seq__30941;
var G__30961 = chunk__30942;
var G__30962 = count__30943;
var G__30963 = (i__30944 + (1));
seq__30941 = G__30960;
chunk__30942 = G__30961;
count__30943 = G__30962;
i__30944 = G__30963;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__30941);
if(temp__5753__auto__){
var seq__30941__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30941__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__30941__$1);
var G__30964 = cljs.core.chunk_rest(seq__30941__$1);
var G__30965 = c__4638__auto__;
var G__30966 = cljs.core.count(c__4638__auto__);
var G__30967 = (0);
seq__30941 = G__30964;
chunk__30942 = G__30965;
count__30943 = G__30966;
i__30944 = G__30967;
continue;
} else {
var option_index = cljs.core.first(seq__30941__$1);
var option_ele_30968 = (get_option_ele.cljs$core$IFn$_invoke$arity$1 ? get_option_ele.cljs$core$IFn$_invoke$arity$1(option_index) : get_option_ele.call(null,option_index));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(option_index,target_option_index)){
option_ele_30968.classList.add("bg-purple");
} else {
option_ele_30968.classList.remove("bg-purple");
}


var G__30969 = cljs.core.next(seq__30941__$1);
var G__30970 = null;
var G__30971 = (0);
var G__30972 = (0);
seq__30941 = G__30969;
chunk__30942 = G__30970;
count__30943 = G__30971;
i__30944 = G__30972;
continue;
}
} else {
return null;
}
}
break;
}
})):(with_let30938[(1)]));
var res30940 = (function (){
var G__30945_30973 = (function (){
var temp__5751__auto___30975 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options,active_option_index);
if(cljs.core.truth_(temp__5751__auto___30975)){
var active_option_30976 = temp__5751__auto___30975;
(on_select.cljs$core$IFn$_invoke$arity$1 ? on_select.cljs$core$IFn$_invoke$arity$1(active_option_30976) : on_select.call(null,active_option_30976));
} else {
}

return nw_calculator.utilities.no_op;
});
var G__30946_30974 = [enter_key_pressed_QMARK_];
nw_calculator.components.dropdown.component.global$module$react.useEffect(G__30945_30973,G__30946_30974);

var G__30947_30977 = (function (){
(set_active_option_index_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_active_option_index_BANG_.cljs$core$IFn$_invoke$arity$1((-1)) : set_active_option_index_BANG_.call(null,(-1)));

return nw_calculator.utilities.no_op;
});
var G__30948_30978 = [options];
nw_calculator.components.dropdown.component.global$module$react.useEffect(G__30947_30977,G__30948_30978);

var G__30949_30979 = (function (){
var next_option_index_30981 = (active_option_index + (1));
if(cljs.core.truth_((function (){var and__4210__auto__ = down_key_pressed_QMARK_;
if(cljs.core.truth_(and__4210__auto__)){
return (next_option_index_30981 < num_options);
} else {
return and__4210__auto__;
}
})())){
(set_active_option_index_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_active_option_index_BANG_.cljs$core$IFn$_invoke$arity$1(next_option_index_30981) : set_active_option_index_BANG_.call(null,next_option_index_30981));
} else {
}

return nw_calculator.utilities.no_op;
});
var G__30950_30980 = [down_key_pressed_QMARK_];
nw_calculator.components.dropdown.component.global$module$react.useEffect(G__30949_30979,G__30950_30980);

var G__30951_30982 = (function (){
var prev_option_index_30984 = (active_option_index - (1));
if(cljs.core.truth_((function (){var and__4210__auto__ = up_key_pressed_QMARK_;
if(cljs.core.truth_(and__4210__auto__)){
return (prev_option_index_30984 > (-1));
} else {
return and__4210__auto__;
}
})())){
(set_active_option_index_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_active_option_index_BANG_.cljs$core$IFn$_invoke$arity$1(prev_option_index_30984) : set_active_option_index_BANG_.call(null,prev_option_index_30984));
} else {
}

return nw_calculator.utilities.no_op;
});
var G__30952_30983 = [up_key_pressed_QMARK_];
nw_calculator.components.dropdown.component.global$module$react.useEffect(G__30951_30982,G__30952_30983);

var G__30953_30985 = (function (){
return (highlight_option_BANG_.cljs$core$IFn$_invoke$arity$2 ? highlight_option_BANG_.cljs$core$IFn$_invoke$arity$2(active_option_index,num_options) : highlight_option_BANG_.call(null,active_option_index,num_options));
});
var G__30954_30986 = [active_option_index];
nw_calculator.components.dropdown.component.global$module$react.useEffect(G__30953_30985,G__30954_30986);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dl$bg_DASH_inherit$w_DASH_full$max_DASH_h_DASH_192$overflow_DASH_y_DASH_auto$absolute$m_DASH_0$z_DASH_50$bg_DASH_inherit$border_DASH_2$border_DASH_t_DASH_0$border_DASH_opacity_DASH_30$border_DASH_purple$rounded_DASH_b_DASH_md$rounded_DASH_t_DASH_none,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (option_index,p__30955){
var map__30956 = p__30955;
var map__30956__$1 = cljs.core.__destructure_map(map__30956);
var option_STAR_ = map__30956__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30956__$1,cljs.core.cst$kw$id);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.dropdown.component.option,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$on_DASH_select,on_select,cljs.core.cst$kw$on_DASH_hover,set_active_option_index_BANG_,cljs.core.cst$kw$option_DASH_index,option_index,cljs.core.cst$kw$option,option_STAR_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$f_GT_,make_option,option_STAR_], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,["option_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(option_index),"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null));
}),options)], null);
})()
;
return res30940;
});
nw_calculator.components.dropdown.component.dropdown = (function nw_calculator$components$dropdown$component$dropdown(p__30987){
var map__30988 = p__30987;
var map__30988__$1 = cljs.core.__destructure_map(map__30988);
var options_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30988__$1,cljs.core.cst$kw$options);
var input_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30988__$1,cljs.core.cst$kw$input_DASH_props);
var container_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30988__$1,cljs.core.cst$kw$container_DASH_props);
var make_option = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30988__$1,cljs.core.cst$kw$make_DASH_option);
var on_select = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__30988__$1,cljs.core.cst$kw$on_DASH_select,nw_calculator.utilities.no_op);
var get_value = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__30988__$1,cljs.core.cst$kw$get_DASH_value,cljs.core.constantly(""));
var input_ref = nw_calculator.components.dropdown.component.global$module$react.useRef();
var escape_key_pressed_QMARK_ = nw_calculator.hooks.use_key_press("Escape");
var with_let30989 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let30989);
var temp__5757__auto___30997 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___30997 == null)){
} else {
var c__14347__auto___30998 = temp__5757__auto___30997;
if((with_let30989.generation === c__14347__auto___30998.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let30989.generation = c__14347__auto___30998.ratomGeneration);
}

var init30990 = (with_let30989.length === (0));
var dropdown_focused_QMARK_ = ((((init30990) || (cljs.core.not(with_let30989.hasOwnProperty((0))))))?(with_let30989[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false)):(with_let30989[(0)]));
var focus_BANG_ = ((((init30990) || (cljs.core.not(with_let30989.hasOwnProperty((1))))))?(with_let30989[(1)] = (function (){
input_ref.current.focus();

return cljs.core.reset_BANG_(dropdown_focused_QMARK_,true);
})):(with_let30989[(1)]));
var blur_BANG_ = ((((init30990) || (cljs.core.not(with_let30989.hasOwnProperty((2))))))?(with_let30989[(2)] = (function (){
input_ref.current.blur();

return setTimeout((function (){
return cljs.core.reset_BANG_(dropdown_focused_QMARK_,false);
}),(200));
})):(with_let30989[(2)]));
var set_input_value_BANG_ = ((((init30990) || (cljs.core.not(with_let30989.hasOwnProperty((3))))))?(with_let30989[(3)] = (function (input_value){
return (input_ref.current.value = input_value);
})):(with_let30989[(3)]));
var select_result_BANG_ = ((((init30990) || (cljs.core.not(with_let30989.hasOwnProperty((4))))))?(with_let30989[(4)] = (function (result){
(on_select.cljs$core$IFn$_invoke$arity$1 ? on_select.cljs$core$IFn$_invoke$arity$1(result) : on_select.call(null,result));

var G__30992_30999 = (get_value.cljs$core$IFn$_invoke$arity$1 ? get_value.cljs$core$IFn$_invoke$arity$1(result) : get_value.call(null,result));
(set_input_value_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_input_value_BANG_.cljs$core$IFn$_invoke$arity$1(G__30992_30999) : set_input_value_BANG_.call(null,G__30992_30999));

return (blur_BANG_.cljs$core$IFn$_invoke$arity$0 ? blur_BANG_.cljs$core$IFn$_invoke$arity$0() : blur_BANG_.call(null));
})):(with_let30989[(4)]));
var toggle_dropdown_BANG_ = ((((init30990) || (cljs.core.not(with_let30989.hasOwnProperty((5))))))?(with_let30989[(5)] = (function (){
if(cljs.core.truth_(cljs.core.deref(dropdown_focused_QMARK_))){
return (blur_BANG_.cljs$core$IFn$_invoke$arity$0 ? blur_BANG_.cljs$core$IFn$_invoke$arity$0() : blur_BANG_.call(null));
} else {
return (focus_BANG_.cljs$core$IFn$_invoke$arity$0 ? focus_BANG_.cljs$core$IFn$_invoke$arity$0() : focus_BANG_.call(null));
}
})):(with_let30989[(5)]));
var prevent_key_scrolling = ((((init30990) || (cljs.core.not(with_let30989.hasOwnProperty((6))))))?(with_let30989[(6)] = (function (event){
if(cljs.core.truth_((function (){var G__30994 = event.key;
var fexpr__30993 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["ArrowUp",null,"ArrowDown",null], null), null);
return (fexpr__30993.cljs$core$IFn$_invoke$arity$1 ? fexpr__30993.cljs$core$IFn$_invoke$arity$1(G__30994) : fexpr__30993.call(null,G__30994));
})())){
return event.view.event.preventDefault();
} else {
return null;
}
})):(with_let30989[(6)]));
var res30991 = (function (){
var G__30995_31000 = (function (){
(blur_BANG_.cljs$core$IFn$_invoke$arity$0 ? blur_BANG_.cljs$core$IFn$_invoke$arity$0() : blur_BANG_.call(null));

return nw_calculator.utilities.no_op;
});
var G__30996_31001 = [escape_key_pressed_QMARK_];
nw_calculator.components.dropdown.component.global$module$react.useEffect(G__30995_31000,G__30996_31001);

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$flex_DASH_grow$relative$cursor_DASH_pointer,reagent.core.merge_props.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,nw_calculator.components.dropdown.styles.dropdown_class(),cljs.core.cst$kw$on_DASH_click,toggle_dropdown_BANG_], null),container_props),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$dropdown$basic_DASH_input$cursor_DASH_pointer,reagent.core.merge_props.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$read_DASH_only,true,cljs.core.cst$kw$on_DASH_key_DASH_down,prevent_key_scrolling,cljs.core.cst$kw$spell_DASH_check,false,cljs.core.cst$kw$on_DASH_blur,blur_BANG_,cljs.core.cst$kw$ref,input_ref], null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(input_props,cljs.core.cst$kw$ref))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fas$fa_DASH_caret_DASH_down$text_DASH_base$md_COLON_text_DASH_lg$absolute$bottom_DASH_2$right_DASH_1$transition_DASH_transform$pointer_DASH_events_DASH_none,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,(cljs.core.truth_(cljs.core.deref(dropdown_focused_QMARK_))?"text-purple text-opacity-100 flip-y":null)], null)], null),(cljs.core.truth_((function (){var and__4210__auto__ = cljs.core.deref(dropdown_focused_QMARK_);
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not_empty(options_STAR_);
} else {
return and__4210__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$f_GT_,nw_calculator.components.dropdown.component.options,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$options,options_STAR_,cljs.core.cst$kw$make_DASH_option,make_option,cljs.core.cst$kw$on_DASH_select,select_result_BANG_], null)], null):null)], null);
})()
;
return res30991;
});
