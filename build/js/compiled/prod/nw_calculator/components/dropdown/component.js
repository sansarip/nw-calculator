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
var len__4818__auto___30872 = arguments.length;
var i__4819__auto___30873 = (0);
while(true){
if((i__4819__auto___30873 < len__4818__auto___30872)){
args__4824__auto__.push((arguments[i__4819__auto___30873]));

var G__30874 = (i__4819__auto___30873 + (1));
i__4819__auto___30873 = G__30874;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return nw_calculator.components.dropdown.component.option.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(nw_calculator.components.dropdown.component.option.cljs$core$IFn$_invoke$arity$variadic = (function (p__30867,children){
var map__30868 = p__30867;
var map__30868__$1 = cljs.core.__destructure_map(map__30868);
var on_select = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30868__$1,cljs.core.cst$kw$on_DASH_select);
var on_hover = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30868__$1,cljs.core.cst$kw$on_DASH_hover);
var option_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30868__$1,cljs.core.cst$kw$option_DASH_index);
var option = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30868__$1,cljs.core.cst$kw$option);
var with_let30869 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let30869);
var temp__5757__auto___30875 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___30875 == null)){
} else {
var c__14347__auto___30876 = temp__5757__auto___30875;
if((with_let30869.generation === c__14347__auto___30876.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let30869.generation = c__14347__auto___30876.ratomGeneration);
}

var init30870 = (with_let30869.length === (0));
var select_option = ((((init30870) || (cljs.core.not(with_let30869.hasOwnProperty((0))))))?(with_let30869[(0)] = (function (event){
event.stopPropagation();

return (on_select.cljs$core$IFn$_invoke$arity$1 ? on_select.cljs$core$IFn$_invoke$arity$1(option) : on_select.call(null,option));
})):(with_let30869[(0)]));
var hover_option = ((((init30870) || (cljs.core.not(with_let30869.hasOwnProperty((1))))))?(with_let30869[(1)] = (function() { 
var G__30877__delegate = function (_){
return (on_hover.cljs$core$IFn$_invoke$arity$1 ? on_hover.cljs$core$IFn$_invoke$arity$1(option_index) : on_hover.call(null,option_index));
};
var G__30877 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__30878__i = 0, G__30878__a = new Array(arguments.length -  0);
while (G__30878__i < G__30878__a.length) {G__30878__a[G__30878__i] = arguments[G__30878__i + 0]; ++G__30878__i;}
  _ = new cljs.core.IndexedSeq(G__30878__a,0,null);
} 
return G__30877__delegate.call(this,_);};
G__30877.cljs$lang$maxFixedArity = 0;
G__30877.cljs$lang$applyTo = (function (arglist__30879){
var _ = cljs.core.seq(arglist__30879);
return G__30877__delegate(_);
});
G__30877.cljs$core$IFn$_invoke$arity$variadic = G__30877__delegate;
return G__30877;
})()
):(with_let30869[(1)]));
var res30871 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dt$bg_DASH_inherit$transition_DASH_colors$bg_DASH_opacity_DASH_20$m_DASH_0$p_DASH_4$cursor_DASH_pointer,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$data_DASH_option_DASH_index,option_index,cljs.core.cst$kw$on_DASH_mouse_DASH_over,hover_option,cljs.core.cst$kw$on_DASH_click,select_option], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_], null),children)], null);
return res30871;
}));

(nw_calculator.components.dropdown.component.option.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(nw_calculator.components.dropdown.component.option.cljs$lang$applyTo = (function (seq30865){
var G__30866 = cljs.core.first(seq30865);
var seq30865__$1 = cljs.core.next(seq30865);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30866,seq30865__$1);
}));

/**
 * Returns a list of dropdown options, navigated by keyboard and mouse.
 * 
 *   `on-select` is a fn that is given an option when one is selected.
 *   `make-option` is a fn that, given an option, returns a hiccup representation of that option.
 *   `options` is a coll of the options to be displayed
 */
nw_calculator.components.dropdown.component.options = (function nw_calculator$components$dropdown$component$options(p__30880){
var map__30881 = p__30880;
var map__30881__$1 = cljs.core.__destructure_map(map__30881);
var on_select = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__30881__$1,cljs.core.cst$kw$on_DASH_select,nw_calculator.utilities.no_op());
var make_option = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30881__$1,cljs.core.cst$kw$make_DASH_option);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30881__$1,cljs.core.cst$kw$options);
var vec__30882 = nw_calculator.components.dropdown.component.global$module$react.useState((-1));
var active_option_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30882,(0),null);
var set_active_option_index_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30882,(1),null);
var down_key_pressed_QMARK_ = nw_calculator.hooks.use_key_press("ArrowDown");
var up_key_pressed_QMARK_ = nw_calculator.hooks.use_key_press("ArrowUp");
var enter_key_pressed_QMARK_ = nw_calculator.hooks.use_key_press("Enter");
var num_options = cljs.core.count(options);
var with_let30885 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let30885);
var temp__5757__auto___30904 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___30904 == null)){
} else {
var c__14347__auto___30905 = temp__5757__auto___30904;
if((with_let30885.generation === c__14347__auto___30905.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let30885.generation = c__14347__auto___30905.ratomGeneration);
}

var init30886 = (with_let30885.length === (0));
var get_option_ele = ((((init30886) || (cljs.core.not(with_let30885.hasOwnProperty((0))))))?(with_let30885[(0)] = (function (option_index){
return document.querySelector(cljstache.core.render.cljs$core$IFn$_invoke$arity$2("dt[data-option-index=\"{{oi}}\"]",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$oi,option_index], null)));
})):(with_let30885[(0)]));
var highlight_option_BANG_ = ((((init30886) || (cljs.core.not(with_let30885.hasOwnProperty((1))))))?(with_let30885[(1)] = (function (target_option_index,num_options__$1){
var seq__30888 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(num_options__$1));
var chunk__30889 = null;
var count__30890 = (0);
var i__30891 = (0);
while(true){
if((i__30891 < count__30890)){
var option_index = chunk__30889.cljs$core$IIndexed$_nth$arity$2(null,i__30891);
var option_ele_30906 = (get_option_ele.cljs$core$IFn$_invoke$arity$1 ? get_option_ele.cljs$core$IFn$_invoke$arity$1(option_index) : get_option_ele.call(null,option_index));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(option_index,target_option_index)){
option_ele_30906.classList.add("bg-purple");
} else {
option_ele_30906.classList.remove("bg-purple");
}


var G__30907 = seq__30888;
var G__30908 = chunk__30889;
var G__30909 = count__30890;
var G__30910 = (i__30891 + (1));
seq__30888 = G__30907;
chunk__30889 = G__30908;
count__30890 = G__30909;
i__30891 = G__30910;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__30888);
if(temp__5753__auto__){
var seq__30888__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30888__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__30888__$1);
var G__30911 = cljs.core.chunk_rest(seq__30888__$1);
var G__30912 = c__4638__auto__;
var G__30913 = cljs.core.count(c__4638__auto__);
var G__30914 = (0);
seq__30888 = G__30911;
chunk__30889 = G__30912;
count__30890 = G__30913;
i__30891 = G__30914;
continue;
} else {
var option_index = cljs.core.first(seq__30888__$1);
var option_ele_30915 = (get_option_ele.cljs$core$IFn$_invoke$arity$1 ? get_option_ele.cljs$core$IFn$_invoke$arity$1(option_index) : get_option_ele.call(null,option_index));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(option_index,target_option_index)){
option_ele_30915.classList.add("bg-purple");
} else {
option_ele_30915.classList.remove("bg-purple");
}


var G__30916 = cljs.core.next(seq__30888__$1);
var G__30917 = null;
var G__30918 = (0);
var G__30919 = (0);
seq__30888 = G__30916;
chunk__30889 = G__30917;
count__30890 = G__30918;
i__30891 = G__30919;
continue;
}
} else {
return null;
}
}
break;
}
})):(with_let30885[(1)]));
var res30887 = (function (){
var G__30892_30920 = (function (){
var temp__5751__auto___30922 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options,active_option_index);
if(cljs.core.truth_(temp__5751__auto___30922)){
var active_option_30923 = temp__5751__auto___30922;
(on_select.cljs$core$IFn$_invoke$arity$1 ? on_select.cljs$core$IFn$_invoke$arity$1(active_option_30923) : on_select.call(null,active_option_30923));
} else {
}

return nw_calculator.utilities.no_op;
});
var G__30893_30921 = [enter_key_pressed_QMARK_];
nw_calculator.components.dropdown.component.global$module$react.useEffect(G__30892_30920,G__30893_30921);

var G__30894_30924 = (function (){
(set_active_option_index_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_active_option_index_BANG_.cljs$core$IFn$_invoke$arity$1((-1)) : set_active_option_index_BANG_.call(null,(-1)));

return nw_calculator.utilities.no_op;
});
var G__30895_30925 = [options];
nw_calculator.components.dropdown.component.global$module$react.useEffect(G__30894_30924,G__30895_30925);

var G__30896_30926 = (function (){
var next_option_index_30928 = (active_option_index + (1));
if(cljs.core.truth_((function (){var and__4210__auto__ = down_key_pressed_QMARK_;
if(cljs.core.truth_(and__4210__auto__)){
return (next_option_index_30928 < num_options);
} else {
return and__4210__auto__;
}
})())){
(set_active_option_index_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_active_option_index_BANG_.cljs$core$IFn$_invoke$arity$1(next_option_index_30928) : set_active_option_index_BANG_.call(null,next_option_index_30928));
} else {
}

return nw_calculator.utilities.no_op;
});
var G__30897_30927 = [down_key_pressed_QMARK_];
nw_calculator.components.dropdown.component.global$module$react.useEffect(G__30896_30926,G__30897_30927);

var G__30898_30929 = (function (){
var prev_option_index_30931 = (active_option_index - (1));
if(cljs.core.truth_((function (){var and__4210__auto__ = up_key_pressed_QMARK_;
if(cljs.core.truth_(and__4210__auto__)){
return (prev_option_index_30931 > (-1));
} else {
return and__4210__auto__;
}
})())){
(set_active_option_index_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_active_option_index_BANG_.cljs$core$IFn$_invoke$arity$1(prev_option_index_30931) : set_active_option_index_BANG_.call(null,prev_option_index_30931));
} else {
}

return nw_calculator.utilities.no_op;
});
var G__30899_30930 = [up_key_pressed_QMARK_];
nw_calculator.components.dropdown.component.global$module$react.useEffect(G__30898_30929,G__30899_30930);

var G__30900_30932 = (function (){
return (highlight_option_BANG_.cljs$core$IFn$_invoke$arity$2 ? highlight_option_BANG_.cljs$core$IFn$_invoke$arity$2(active_option_index,num_options) : highlight_option_BANG_.call(null,active_option_index,num_options));
});
var G__30901_30933 = [active_option_index];
nw_calculator.components.dropdown.component.global$module$react.useEffect(G__30900_30932,G__30901_30933);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dl$bg_DASH_inherit$w_DASH_full$max_DASH_w_DASH_full$absolute$m_DASH_0$z_DASH_50$bg_DASH_inherit$border_DASH_2$border_DASH_t_DASH_0$border_DASH_opacity_DASH_30$border_DASH_purple$rounded_DASH_b_DASH_md$rounded_DASH_t_DASH_none,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (option_index,p__30902){
var map__30903 = p__30902;
var map__30903__$1 = cljs.core.__destructure_map(map__30903);
var option_STAR_ = map__30903__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30903__$1,cljs.core.cst$kw$id);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.dropdown.component.option,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$on_DASH_select,on_select,cljs.core.cst$kw$on_DASH_hover,set_active_option_index_BANG_,cljs.core.cst$kw$option_DASH_index,option_index,cljs.core.cst$kw$option,option_STAR_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$f_GT_,make_option,option_STAR_], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,["option_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(option_index),"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null));
}),options)], null);
})()
;
return res30887;
});
nw_calculator.components.dropdown.component.dropdown = (function nw_calculator$components$dropdown$component$dropdown(p__30934){
var map__30935 = p__30934;
var map__30935__$1 = cljs.core.__destructure_map(map__30935);
var options_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30935__$1,cljs.core.cst$kw$options);
var input_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30935__$1,cljs.core.cst$kw$input_DASH_props);
var container_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30935__$1,cljs.core.cst$kw$container_DASH_props);
var make_option = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30935__$1,cljs.core.cst$kw$make_DASH_option);
var on_select = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__30935__$1,cljs.core.cst$kw$on_DASH_select,nw_calculator.utilities.no_op);
var get_value = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__30935__$1,cljs.core.cst$kw$get_DASH_value,cljs.core.constantly(""));
var input_ref = nw_calculator.components.dropdown.component.global$module$react.useRef();
var escape_key_pressed_QMARK_ = nw_calculator.hooks.use_key_press("Escape");
var with_let30936 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let30936);
var temp__5757__auto___30944 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___30944 == null)){
} else {
var c__14347__auto___30945 = temp__5757__auto___30944;
if((with_let30936.generation === c__14347__auto___30945.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let30936.generation = c__14347__auto___30945.ratomGeneration);
}

var init30937 = (with_let30936.length === (0));
var dropdown_focused_QMARK_ = ((((init30937) || (cljs.core.not(with_let30936.hasOwnProperty((0))))))?(with_let30936[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false)):(with_let30936[(0)]));
var focus_BANG_ = ((((init30937) || (cljs.core.not(with_let30936.hasOwnProperty((1))))))?(with_let30936[(1)] = (function (){
input_ref.current.focus();

return cljs.core.reset_BANG_(dropdown_focused_QMARK_,true);
})):(with_let30936[(1)]));
var blur_BANG_ = ((((init30937) || (cljs.core.not(with_let30936.hasOwnProperty((2))))))?(with_let30936[(2)] = (function (){
input_ref.current.blur();

return setTimeout((function (){
return cljs.core.reset_BANG_(dropdown_focused_QMARK_,false);
}),(200));
})):(with_let30936[(2)]));
var set_input_value_BANG_ = ((((init30937) || (cljs.core.not(with_let30936.hasOwnProperty((3))))))?(with_let30936[(3)] = (function (input_value){
return (input_ref.current.value = input_value);
})):(with_let30936[(3)]));
var select_result_BANG_ = ((((init30937) || (cljs.core.not(with_let30936.hasOwnProperty((4))))))?(with_let30936[(4)] = (function (result){
(on_select.cljs$core$IFn$_invoke$arity$1 ? on_select.cljs$core$IFn$_invoke$arity$1(result) : on_select.call(null,result));

var G__30939_30946 = (get_value.cljs$core$IFn$_invoke$arity$1 ? get_value.cljs$core$IFn$_invoke$arity$1(result) : get_value.call(null,result));
(set_input_value_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_input_value_BANG_.cljs$core$IFn$_invoke$arity$1(G__30939_30946) : set_input_value_BANG_.call(null,G__30939_30946));

return (blur_BANG_.cljs$core$IFn$_invoke$arity$0 ? blur_BANG_.cljs$core$IFn$_invoke$arity$0() : blur_BANG_.call(null));
})):(with_let30936[(4)]));
var toggle_dropdown_BANG_ = ((((init30937) || (cljs.core.not(with_let30936.hasOwnProperty((5))))))?(with_let30936[(5)] = (function (){
if(cljs.core.truth_(cljs.core.deref(dropdown_focused_QMARK_))){
return (blur_BANG_.cljs$core$IFn$_invoke$arity$0 ? blur_BANG_.cljs$core$IFn$_invoke$arity$0() : blur_BANG_.call(null));
} else {
return (focus_BANG_.cljs$core$IFn$_invoke$arity$0 ? focus_BANG_.cljs$core$IFn$_invoke$arity$0() : focus_BANG_.call(null));
}
})):(with_let30936[(5)]));
var prevent_key_scrolling = ((((init30937) || (cljs.core.not(with_let30936.hasOwnProperty((6))))))?(with_let30936[(6)] = (function (event){
if(cljs.core.truth_((function (){var G__30941 = event.key;
var fexpr__30940 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["ArrowUp",null,"ArrowDown",null], null), null);
return (fexpr__30940.cljs$core$IFn$_invoke$arity$1 ? fexpr__30940.cljs$core$IFn$_invoke$arity$1(G__30941) : fexpr__30940.call(null,G__30941));
})())){
return event.view.event.preventDefault();
} else {
return null;
}
})):(with_let30936[(6)]));
var res30938 = (function (){
var G__30942_30947 = (function (){
(blur_BANG_.cljs$core$IFn$_invoke$arity$0 ? blur_BANG_.cljs$core$IFn$_invoke$arity$0() : blur_BANG_.call(null));

return nw_calculator.utilities.no_op;
});
var G__30943_30948 = [escape_key_pressed_QMARK_];
nw_calculator.components.dropdown.component.global$module$react.useEffect(G__30942_30947,G__30943_30948);

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$flex_DASH_grow$relative$cursor_DASH_pointer,reagent.core.merge_props.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,nw_calculator.components.dropdown.styles.dropdown_class(),cljs.core.cst$kw$on_DASH_click,toggle_dropdown_BANG_], null),container_props),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$dropdown$basic_DASH_input$cursor_DASH_pointer,reagent.core.merge_props.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$read_DASH_only,true,cljs.core.cst$kw$on_DASH_key_DASH_down,prevent_key_scrolling,cljs.core.cst$kw$spell_DASH_check,false,cljs.core.cst$kw$on_DASH_blur,blur_BANG_,cljs.core.cst$kw$ref,input_ref], null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(input_props,cljs.core.cst$kw$ref))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fas$fa_DASH_caret_DASH_down$text_DASH_base$md_COLON_text_DASH_lg$absolute$bottom_DASH_2$right_DASH_1$transition_DASH_transform$pointer_DASH_events_DASH_none,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,(cljs.core.truth_(cljs.core.deref(dropdown_focused_QMARK_))?"text-purple text-opacity-100 flip-y":null)], null)], null),(cljs.core.truth_((function (){var and__4210__auto__ = cljs.core.deref(dropdown_focused_QMARK_);
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not_empty(options_STAR_);
} else {
return and__4210__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$f_GT_,nw_calculator.components.dropdown.component.options,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$options,options_STAR_,cljs.core.cst$kw$make_DASH_option,make_option,cljs.core.cst$kw$on_DASH_select,select_result_BANG_], null)], null):null)], null);
})()
;
return res30938;
});
