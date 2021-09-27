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
var len__4818__auto___30886 = arguments.length;
var i__4819__auto___30887 = (0);
while(true){
if((i__4819__auto___30887 < len__4818__auto___30886)){
args__4824__auto__.push((arguments[i__4819__auto___30887]));

var G__30888 = (i__4819__auto___30887 + (1));
i__4819__auto___30887 = G__30888;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return nw_calculator.components.dropdown.component.option.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(nw_calculator.components.dropdown.component.option.cljs$core$IFn$_invoke$arity$variadic = (function (p__30881,children){
var map__30882 = p__30881;
var map__30882__$1 = cljs.core.__destructure_map(map__30882);
var on_select = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30882__$1,cljs.core.cst$kw$on_DASH_select);
var on_hover = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30882__$1,cljs.core.cst$kw$on_DASH_hover);
var option_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30882__$1,cljs.core.cst$kw$option_DASH_index);
var option = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30882__$1,cljs.core.cst$kw$option);
var with_let30883 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let30883);
var temp__5757__auto___30889 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___30889 == null)){
} else {
var c__14347__auto___30890 = temp__5757__auto___30889;
if((with_let30883.generation === c__14347__auto___30890.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let30883.generation = c__14347__auto___30890.ratomGeneration);
}

var init30884 = (with_let30883.length === (0));
var select_option = ((((init30884) || (cljs.core.not(with_let30883.hasOwnProperty((0))))))?(with_let30883[(0)] = (function (event){
event.stopPropagation();

return (on_select.cljs$core$IFn$_invoke$arity$1 ? on_select.cljs$core$IFn$_invoke$arity$1(option) : on_select.call(null,option));
})):(with_let30883[(0)]));
var hover_option = ((((init30884) || (cljs.core.not(with_let30883.hasOwnProperty((1))))))?(with_let30883[(1)] = (function() { 
var G__30891__delegate = function (_){
return (on_hover.cljs$core$IFn$_invoke$arity$1 ? on_hover.cljs$core$IFn$_invoke$arity$1(option_index) : on_hover.call(null,option_index));
};
var G__30891 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__30892__i = 0, G__30892__a = new Array(arguments.length -  0);
while (G__30892__i < G__30892__a.length) {G__30892__a[G__30892__i] = arguments[G__30892__i + 0]; ++G__30892__i;}
  _ = new cljs.core.IndexedSeq(G__30892__a,0,null);
} 
return G__30891__delegate.call(this,_);};
G__30891.cljs$lang$maxFixedArity = 0;
G__30891.cljs$lang$applyTo = (function (arglist__30893){
var _ = cljs.core.seq(arglist__30893);
return G__30891__delegate(_);
});
G__30891.cljs$core$IFn$_invoke$arity$variadic = G__30891__delegate;
return G__30891;
})()
):(with_let30883[(1)]));
var res30885 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dt$bg_DASH_inherit$transition_DASH_colors$bg_DASH_opacity_DASH_20$m_DASH_0$p_DASH_4$cursor_DASH_pointer,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$data_DASH_option_DASH_index,option_index,cljs.core.cst$kw$on_DASH_mouse_DASH_over,hover_option,cljs.core.cst$kw$on_DASH_click,select_option], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_], null),children)], null);
return res30885;
}));

(nw_calculator.components.dropdown.component.option.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(nw_calculator.components.dropdown.component.option.cljs$lang$applyTo = (function (seq30879){
var G__30880 = cljs.core.first(seq30879);
var seq30879__$1 = cljs.core.next(seq30879);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30880,seq30879__$1);
}));

/**
 * Returns a list of dropdown options, navigated by keyboard and mouse.
 * 
 *   `on-select` is a fn that is given an option when one is selected.
 *   `make-option` is a fn that, given an option, returns a hiccup representation of that option.
 *   `options` is a coll of the options to be displayed
 */
nw_calculator.components.dropdown.component.options = (function nw_calculator$components$dropdown$component$options(p__30894){
var map__30895 = p__30894;
var map__30895__$1 = cljs.core.__destructure_map(map__30895);
var on_select = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__30895__$1,cljs.core.cst$kw$on_DASH_select,nw_calculator.utilities.no_op());
var make_option = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30895__$1,cljs.core.cst$kw$make_DASH_option);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30895__$1,cljs.core.cst$kw$options);
var vec__30896 = nw_calculator.components.dropdown.component.global$module$react.useState((-1));
var active_option_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30896,(0),null);
var set_active_option_index_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30896,(1),null);
var down_key_pressed_QMARK_ = nw_calculator.hooks.use_key_press("ArrowDown");
var up_key_pressed_QMARK_ = nw_calculator.hooks.use_key_press("ArrowUp");
var enter_key_pressed_QMARK_ = nw_calculator.hooks.use_key_press("Enter");
var num_options = cljs.core.count(options);
var with_let30899 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let30899);
var temp__5757__auto___30918 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___30918 == null)){
} else {
var c__14347__auto___30919 = temp__5757__auto___30918;
if((with_let30899.generation === c__14347__auto___30919.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let30899.generation = c__14347__auto___30919.ratomGeneration);
}

var init30900 = (with_let30899.length === (0));
var get_option_ele = ((((init30900) || (cljs.core.not(with_let30899.hasOwnProperty((0))))))?(with_let30899[(0)] = (function (option_index){
return document.querySelector(cljstache.core.render.cljs$core$IFn$_invoke$arity$2("dt[data-option-index=\"{{oi}}\"]",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$oi,option_index], null)));
})):(with_let30899[(0)]));
var highlight_option_BANG_ = ((((init30900) || (cljs.core.not(with_let30899.hasOwnProperty((1))))))?(with_let30899[(1)] = (function (target_option_index,num_options__$1){
var seq__30902 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(num_options__$1));
var chunk__30903 = null;
var count__30904 = (0);
var i__30905 = (0);
while(true){
if((i__30905 < count__30904)){
var option_index = chunk__30903.cljs$core$IIndexed$_nth$arity$2(null,i__30905);
var option_ele_30920 = (get_option_ele.cljs$core$IFn$_invoke$arity$1 ? get_option_ele.cljs$core$IFn$_invoke$arity$1(option_index) : get_option_ele.call(null,option_index));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(option_index,target_option_index)){
option_ele_30920.classList.add("bg-purple");
} else {
option_ele_30920.classList.remove("bg-purple");
}


var G__30921 = seq__30902;
var G__30922 = chunk__30903;
var G__30923 = count__30904;
var G__30924 = (i__30905 + (1));
seq__30902 = G__30921;
chunk__30903 = G__30922;
count__30904 = G__30923;
i__30905 = G__30924;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__30902);
if(temp__5753__auto__){
var seq__30902__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30902__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__30902__$1);
var G__30925 = cljs.core.chunk_rest(seq__30902__$1);
var G__30926 = c__4638__auto__;
var G__30927 = cljs.core.count(c__4638__auto__);
var G__30928 = (0);
seq__30902 = G__30925;
chunk__30903 = G__30926;
count__30904 = G__30927;
i__30905 = G__30928;
continue;
} else {
var option_index = cljs.core.first(seq__30902__$1);
var option_ele_30929 = (get_option_ele.cljs$core$IFn$_invoke$arity$1 ? get_option_ele.cljs$core$IFn$_invoke$arity$1(option_index) : get_option_ele.call(null,option_index));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(option_index,target_option_index)){
option_ele_30929.classList.add("bg-purple");
} else {
option_ele_30929.classList.remove("bg-purple");
}


var G__30930 = cljs.core.next(seq__30902__$1);
var G__30931 = null;
var G__30932 = (0);
var G__30933 = (0);
seq__30902 = G__30930;
chunk__30903 = G__30931;
count__30904 = G__30932;
i__30905 = G__30933;
continue;
}
} else {
return null;
}
}
break;
}
})):(with_let30899[(1)]));
var res30901 = (function (){
var G__30906_30934 = (function (){
var temp__5751__auto___30936 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options,active_option_index);
if(cljs.core.truth_(temp__5751__auto___30936)){
var active_option_30937 = temp__5751__auto___30936;
(on_select.cljs$core$IFn$_invoke$arity$1 ? on_select.cljs$core$IFn$_invoke$arity$1(active_option_30937) : on_select.call(null,active_option_30937));
} else {
}

return nw_calculator.utilities.no_op;
});
var G__30907_30935 = [enter_key_pressed_QMARK_];
nw_calculator.components.dropdown.component.global$module$react.useEffect(G__30906_30934,G__30907_30935);

var G__30908_30938 = (function (){
(set_active_option_index_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_active_option_index_BANG_.cljs$core$IFn$_invoke$arity$1((-1)) : set_active_option_index_BANG_.call(null,(-1)));

return nw_calculator.utilities.no_op;
});
var G__30909_30939 = [options];
nw_calculator.components.dropdown.component.global$module$react.useEffect(G__30908_30938,G__30909_30939);

var G__30910_30940 = (function (){
var next_option_index_30942 = (active_option_index + (1));
if(cljs.core.truth_((function (){var and__4210__auto__ = down_key_pressed_QMARK_;
if(cljs.core.truth_(and__4210__auto__)){
return (next_option_index_30942 < num_options);
} else {
return and__4210__auto__;
}
})())){
(set_active_option_index_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_active_option_index_BANG_.cljs$core$IFn$_invoke$arity$1(next_option_index_30942) : set_active_option_index_BANG_.call(null,next_option_index_30942));
} else {
}

return nw_calculator.utilities.no_op;
});
var G__30911_30941 = [down_key_pressed_QMARK_];
nw_calculator.components.dropdown.component.global$module$react.useEffect(G__30910_30940,G__30911_30941);

var G__30912_30943 = (function (){
var prev_option_index_30945 = (active_option_index - (1));
if(cljs.core.truth_((function (){var and__4210__auto__ = up_key_pressed_QMARK_;
if(cljs.core.truth_(and__4210__auto__)){
return (prev_option_index_30945 > (-1));
} else {
return and__4210__auto__;
}
})())){
(set_active_option_index_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_active_option_index_BANG_.cljs$core$IFn$_invoke$arity$1(prev_option_index_30945) : set_active_option_index_BANG_.call(null,prev_option_index_30945));
} else {
}

return nw_calculator.utilities.no_op;
});
var G__30913_30944 = [up_key_pressed_QMARK_];
nw_calculator.components.dropdown.component.global$module$react.useEffect(G__30912_30943,G__30913_30944);

var G__30914_30946 = (function (){
return (highlight_option_BANG_.cljs$core$IFn$_invoke$arity$2 ? highlight_option_BANG_.cljs$core$IFn$_invoke$arity$2(active_option_index,num_options) : highlight_option_BANG_.call(null,active_option_index,num_options));
});
var G__30915_30947 = [active_option_index];
nw_calculator.components.dropdown.component.global$module$react.useEffect(G__30914_30946,G__30915_30947);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dl$bg_DASH_inherit$w_DASH_full$max_DASH_w_DASH_full$absolute$m_DASH_0$z_DASH_50$bg_DASH_inherit$border_DASH_2$border_DASH_t_DASH_0$border_DASH_opacity_DASH_30$border_DASH_purple$rounded_DASH_b_DASH_md$rounded_DASH_t_DASH_none,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (option_index,p__30916){
var map__30917 = p__30916;
var map__30917__$1 = cljs.core.__destructure_map(map__30917);
var option_STAR_ = map__30917__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30917__$1,cljs.core.cst$kw$id);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.dropdown.component.option,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$on_DASH_select,on_select,cljs.core.cst$kw$on_DASH_hover,set_active_option_index_BANG_,cljs.core.cst$kw$option_DASH_index,option_index,cljs.core.cst$kw$option,option_STAR_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$f_GT_,make_option,option_STAR_], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,["option_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(option_index),"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null));
}),options)], null);
})()
;
return res30901;
});
nw_calculator.components.dropdown.component.dropdown = (function nw_calculator$components$dropdown$component$dropdown(p__30948){
var map__30949 = p__30948;
var map__30949__$1 = cljs.core.__destructure_map(map__30949);
var options_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30949__$1,cljs.core.cst$kw$options);
var input_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30949__$1,cljs.core.cst$kw$input_DASH_props);
var container_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30949__$1,cljs.core.cst$kw$container_DASH_props);
var make_option = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30949__$1,cljs.core.cst$kw$make_DASH_option);
var on_select = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__30949__$1,cljs.core.cst$kw$on_DASH_select,nw_calculator.utilities.no_op);
var get_value = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__30949__$1,cljs.core.cst$kw$get_DASH_value,cljs.core.constantly(""));
var input_ref = nw_calculator.components.dropdown.component.global$module$react.useRef();
var escape_key_pressed_QMARK_ = nw_calculator.hooks.use_key_press("Escape");
var with_let30950 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let30950);
var temp__5757__auto___30958 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___30958 == null)){
} else {
var c__14347__auto___30959 = temp__5757__auto___30958;
if((with_let30950.generation === c__14347__auto___30959.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let30950.generation = c__14347__auto___30959.ratomGeneration);
}

var init30951 = (with_let30950.length === (0));
var dropdown_focused_QMARK_ = ((((init30951) || (cljs.core.not(with_let30950.hasOwnProperty((0))))))?(with_let30950[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false)):(with_let30950[(0)]));
var focus_BANG_ = ((((init30951) || (cljs.core.not(with_let30950.hasOwnProperty((1))))))?(with_let30950[(1)] = (function (){
input_ref.current.focus();

return cljs.core.reset_BANG_(dropdown_focused_QMARK_,true);
})):(with_let30950[(1)]));
var blur_BANG_ = ((((init30951) || (cljs.core.not(with_let30950.hasOwnProperty((2))))))?(with_let30950[(2)] = (function (){
input_ref.current.blur();

return setTimeout((function (){
return cljs.core.reset_BANG_(dropdown_focused_QMARK_,false);
}),(200));
})):(with_let30950[(2)]));
var set_input_value_BANG_ = ((((init30951) || (cljs.core.not(with_let30950.hasOwnProperty((3))))))?(with_let30950[(3)] = (function (input_value){
return (input_ref.current.value = input_value);
})):(with_let30950[(3)]));
var select_result_BANG_ = ((((init30951) || (cljs.core.not(with_let30950.hasOwnProperty((4))))))?(with_let30950[(4)] = (function (result){
(on_select.cljs$core$IFn$_invoke$arity$1 ? on_select.cljs$core$IFn$_invoke$arity$1(result) : on_select.call(null,result));

var G__30953_30960 = (get_value.cljs$core$IFn$_invoke$arity$1 ? get_value.cljs$core$IFn$_invoke$arity$1(result) : get_value.call(null,result));
(set_input_value_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_input_value_BANG_.cljs$core$IFn$_invoke$arity$1(G__30953_30960) : set_input_value_BANG_.call(null,G__30953_30960));

return (blur_BANG_.cljs$core$IFn$_invoke$arity$0 ? blur_BANG_.cljs$core$IFn$_invoke$arity$0() : blur_BANG_.call(null));
})):(with_let30950[(4)]));
var toggle_dropdown_BANG_ = ((((init30951) || (cljs.core.not(with_let30950.hasOwnProperty((5))))))?(with_let30950[(5)] = (function (){
if(cljs.core.truth_(cljs.core.deref(dropdown_focused_QMARK_))){
return (blur_BANG_.cljs$core$IFn$_invoke$arity$0 ? blur_BANG_.cljs$core$IFn$_invoke$arity$0() : blur_BANG_.call(null));
} else {
return (focus_BANG_.cljs$core$IFn$_invoke$arity$0 ? focus_BANG_.cljs$core$IFn$_invoke$arity$0() : focus_BANG_.call(null));
}
})):(with_let30950[(5)]));
var prevent_key_scrolling = ((((init30951) || (cljs.core.not(with_let30950.hasOwnProperty((6))))))?(with_let30950[(6)] = (function (event){
if(cljs.core.truth_((function (){var G__30955 = event.key;
var fexpr__30954 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["ArrowUp",null,"ArrowDown",null], null), null);
return (fexpr__30954.cljs$core$IFn$_invoke$arity$1 ? fexpr__30954.cljs$core$IFn$_invoke$arity$1(G__30955) : fexpr__30954.call(null,G__30955));
})())){
return event.view.event.preventDefault();
} else {
return null;
}
})):(with_let30950[(6)]));
var res30952 = (function (){
var G__30956_30961 = (function (){
(blur_BANG_.cljs$core$IFn$_invoke$arity$0 ? blur_BANG_.cljs$core$IFn$_invoke$arity$0() : blur_BANG_.call(null));

return nw_calculator.utilities.no_op;
});
var G__30957_30962 = [escape_key_pressed_QMARK_];
nw_calculator.components.dropdown.component.global$module$react.useEffect(G__30956_30961,G__30957_30962);

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$flex_DASH_grow$relative$cursor_DASH_pointer,reagent.core.merge_props.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,nw_calculator.components.dropdown.styles.dropdown_class(),cljs.core.cst$kw$on_DASH_click,toggle_dropdown_BANG_], null),container_props),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$dropdown$basic_DASH_input$cursor_DASH_pointer,reagent.core.merge_props.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$read_DASH_only,true,cljs.core.cst$kw$on_DASH_key_DASH_down,prevent_key_scrolling,cljs.core.cst$kw$spell_DASH_check,false,cljs.core.cst$kw$on_DASH_blur,blur_BANG_,cljs.core.cst$kw$ref,input_ref], null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(input_props,cljs.core.cst$kw$ref))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fas$fa_DASH_caret_DASH_down$text_DASH_base$md_COLON_text_DASH_lg$absolute$bottom_DASH_2$right_DASH_1$transition_DASH_transform$pointer_DASH_events_DASH_none,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,(cljs.core.truth_(cljs.core.deref(dropdown_focused_QMARK_))?"text-purple text-opacity-100 flip-y":null)], null)], null),(cljs.core.truth_((function (){var and__4210__auto__ = cljs.core.deref(dropdown_focused_QMARK_);
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not_empty(options_STAR_);
} else {
return and__4210__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$f_GT_,nw_calculator.components.dropdown.component.options,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$options,options_STAR_,cljs.core.cst$kw$make_DASH_option,make_option,cljs.core.cst$kw$on_DASH_select,select_result_BANG_], null)], null):null)], null);
})()
;
return res30952;
});
