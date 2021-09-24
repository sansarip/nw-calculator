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
var len__4818__auto___29066 = arguments.length;
var i__4819__auto___29067 = (0);
while(true){
if((i__4819__auto___29067 < len__4818__auto___29066)){
args__4824__auto__.push((arguments[i__4819__auto___29067]));

var G__29068 = (i__4819__auto___29067 + (1));
i__4819__auto___29067 = G__29068;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return nw_calculator.components.dropdown.component.option.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(nw_calculator.components.dropdown.component.option.cljs$core$IFn$_invoke$arity$variadic = (function (p__29061,children){
var map__29062 = p__29061;
var map__29062__$1 = cljs.core.__destructure_map(map__29062);
var on_select = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29062__$1,cljs.core.cst$kw$on_DASH_select);
var on_hover = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29062__$1,cljs.core.cst$kw$on_DASH_hover);
var option_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29062__$1,cljs.core.cst$kw$option_DASH_index);
var option = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29062__$1,cljs.core.cst$kw$option);
var with_let29063 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let29063);
var temp__5757__auto___29069 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___29069 == null)){
} else {
var c__13075__auto___29070 = temp__5757__auto___29069;
if((with_let29063.generation === c__13075__auto___29070.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let29063.generation = c__13075__auto___29070.ratomGeneration);
}

var init29064 = (with_let29063.length === (0));
var select_option = ((((init29064) || (cljs.core.not(with_let29063.hasOwnProperty((0))))))?(with_let29063[(0)] = (function (event){
event.stopPropagation();

return (on_select.cljs$core$IFn$_invoke$arity$1 ? on_select.cljs$core$IFn$_invoke$arity$1(option) : on_select.call(null,option));
})):(with_let29063[(0)]));
var hover_option = ((((init29064) || (cljs.core.not(with_let29063.hasOwnProperty((1))))))?(with_let29063[(1)] = (function() { 
var G__29071__delegate = function (_){
return (on_hover.cljs$core$IFn$_invoke$arity$1 ? on_hover.cljs$core$IFn$_invoke$arity$1(option_index) : on_hover.call(null,option_index));
};
var G__29071 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__29072__i = 0, G__29072__a = new Array(arguments.length -  0);
while (G__29072__i < G__29072__a.length) {G__29072__a[G__29072__i] = arguments[G__29072__i + 0]; ++G__29072__i;}
  _ = new cljs.core.IndexedSeq(G__29072__a,0,null);
} 
return G__29071__delegate.call(this,_);};
G__29071.cljs$lang$maxFixedArity = 0;
G__29071.cljs$lang$applyTo = (function (arglist__29073){
var _ = cljs.core.seq(arglist__29073);
return G__29071__delegate(_);
});
G__29071.cljs$core$IFn$_invoke$arity$variadic = G__29071__delegate;
return G__29071;
})()
):(with_let29063[(1)]));
var res29065 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dt$bg_DASH_inherit$transition_DASH_colors$bg_DASH_opacity_DASH_20$m_DASH_0$p_DASH_4$cursor_DASH_pointer,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$data_DASH_option_DASH_index,option_index,cljs.core.cst$kw$on_DASH_mouse_DASH_over,hover_option,cljs.core.cst$kw$on_DASH_click,select_option], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_], null),children)], null);
return res29065;
}));

(nw_calculator.components.dropdown.component.option.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(nw_calculator.components.dropdown.component.option.cljs$lang$applyTo = (function (seq29059){
var G__29060 = cljs.core.first(seq29059);
var seq29059__$1 = cljs.core.next(seq29059);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29060,seq29059__$1);
}));

/**
 * Returns a list of dropdown options, navigated by keyboard and mouse.
 * 
 *   `on-select` is a fn that is given an option when one is selected.
 *   `make-option` is a fn that, given an option, returns a hiccup representation of that option.
 *   `options` is a coll of the options to be displayed
 */
nw_calculator.components.dropdown.component.options = (function nw_calculator$components$dropdown$component$options(p__29074){
var map__29075 = p__29074;
var map__29075__$1 = cljs.core.__destructure_map(map__29075);
var on_select = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29075__$1,cljs.core.cst$kw$on_DASH_select,nw_calculator.utilities.no_op());
var make_option = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29075__$1,cljs.core.cst$kw$make_DASH_option);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29075__$1,cljs.core.cst$kw$options);
var vec__29076 = nw_calculator.components.dropdown.component.global$module$react.useState((-1));
var active_option_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29076,(0),null);
var set_active_option_index_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29076,(1),null);
var down_key_pressed_QMARK_ = nw_calculator.hooks.use_key_press("ArrowDown");
var up_key_pressed_QMARK_ = nw_calculator.hooks.use_key_press("ArrowUp");
var enter_key_pressed_QMARK_ = nw_calculator.hooks.use_key_press("Enter");
var num_options = cljs.core.count(options);
var with_let29079 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let29079);
var temp__5757__auto___29098 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___29098 == null)){
} else {
var c__13075__auto___29099 = temp__5757__auto___29098;
if((with_let29079.generation === c__13075__auto___29099.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let29079.generation = c__13075__auto___29099.ratomGeneration);
}

var init29080 = (with_let29079.length === (0));
var get_option_ele = ((((init29080) || (cljs.core.not(with_let29079.hasOwnProperty((0))))))?(with_let29079[(0)] = (function (option_index){
return document.querySelector(cljstache.core.render.cljs$core$IFn$_invoke$arity$2("dt[data-option-index=\"{{oi}}\"]",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$oi,option_index], null)));
})):(with_let29079[(0)]));
var highlight_option_BANG_ = ((((init29080) || (cljs.core.not(with_let29079.hasOwnProperty((1))))))?(with_let29079[(1)] = (function (target_option_index,num_options__$1){
var seq__29082 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(num_options__$1));
var chunk__29083 = null;
var count__29084 = (0);
var i__29085 = (0);
while(true){
if((i__29085 < count__29084)){
var option_index = chunk__29083.cljs$core$IIndexed$_nth$arity$2(null,i__29085);
var option_ele_29100 = (get_option_ele.cljs$core$IFn$_invoke$arity$1 ? get_option_ele.cljs$core$IFn$_invoke$arity$1(option_index) : get_option_ele.call(null,option_index));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(option_index,target_option_index)){
option_ele_29100.classList.add("bg-purple");
} else {
option_ele_29100.classList.remove("bg-purple");
}


var G__29101 = seq__29082;
var G__29102 = chunk__29083;
var G__29103 = count__29084;
var G__29104 = (i__29085 + (1));
seq__29082 = G__29101;
chunk__29083 = G__29102;
count__29084 = G__29103;
i__29085 = G__29104;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__29082);
if(temp__5753__auto__){
var seq__29082__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29082__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__29082__$1);
var G__29105 = cljs.core.chunk_rest(seq__29082__$1);
var G__29106 = c__4638__auto__;
var G__29107 = cljs.core.count(c__4638__auto__);
var G__29108 = (0);
seq__29082 = G__29105;
chunk__29083 = G__29106;
count__29084 = G__29107;
i__29085 = G__29108;
continue;
} else {
var option_index = cljs.core.first(seq__29082__$1);
var option_ele_29109 = (get_option_ele.cljs$core$IFn$_invoke$arity$1 ? get_option_ele.cljs$core$IFn$_invoke$arity$1(option_index) : get_option_ele.call(null,option_index));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(option_index,target_option_index)){
option_ele_29109.classList.add("bg-purple");
} else {
option_ele_29109.classList.remove("bg-purple");
}


var G__29110 = cljs.core.next(seq__29082__$1);
var G__29111 = null;
var G__29112 = (0);
var G__29113 = (0);
seq__29082 = G__29110;
chunk__29083 = G__29111;
count__29084 = G__29112;
i__29085 = G__29113;
continue;
}
} else {
return null;
}
}
break;
}
})):(with_let29079[(1)]));
var res29081 = (function (){
var G__29086_29114 = (function (){
var temp__5751__auto___29116 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options,active_option_index);
if(cljs.core.truth_(temp__5751__auto___29116)){
var active_option_29117 = temp__5751__auto___29116;
(on_select.cljs$core$IFn$_invoke$arity$1 ? on_select.cljs$core$IFn$_invoke$arity$1(active_option_29117) : on_select.call(null,active_option_29117));
} else {
}

return nw_calculator.utilities.no_op;
});
var G__29087_29115 = [enter_key_pressed_QMARK_];
nw_calculator.components.dropdown.component.global$module$react.useEffect(G__29086_29114,G__29087_29115);

var G__29088_29118 = (function (){
(set_active_option_index_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_active_option_index_BANG_.cljs$core$IFn$_invoke$arity$1((-1)) : set_active_option_index_BANG_.call(null,(-1)));

return nw_calculator.utilities.no_op;
});
var G__29089_29119 = [options];
nw_calculator.components.dropdown.component.global$module$react.useEffect(G__29088_29118,G__29089_29119);

var G__29090_29120 = (function (){
var next_option_index_29122 = (active_option_index + (1));
if(cljs.core.truth_((function (){var and__4210__auto__ = down_key_pressed_QMARK_;
if(cljs.core.truth_(and__4210__auto__)){
return (next_option_index_29122 < num_options);
} else {
return and__4210__auto__;
}
})())){
(set_active_option_index_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_active_option_index_BANG_.cljs$core$IFn$_invoke$arity$1(next_option_index_29122) : set_active_option_index_BANG_.call(null,next_option_index_29122));
} else {
}

return nw_calculator.utilities.no_op;
});
var G__29091_29121 = [down_key_pressed_QMARK_];
nw_calculator.components.dropdown.component.global$module$react.useEffect(G__29090_29120,G__29091_29121);

var G__29092_29123 = (function (){
var prev_option_index_29125 = (active_option_index - (1));
if(cljs.core.truth_((function (){var and__4210__auto__ = up_key_pressed_QMARK_;
if(cljs.core.truth_(and__4210__auto__)){
return (prev_option_index_29125 > (-1));
} else {
return and__4210__auto__;
}
})())){
(set_active_option_index_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_active_option_index_BANG_.cljs$core$IFn$_invoke$arity$1(prev_option_index_29125) : set_active_option_index_BANG_.call(null,prev_option_index_29125));
} else {
}

return nw_calculator.utilities.no_op;
});
var G__29093_29124 = [up_key_pressed_QMARK_];
nw_calculator.components.dropdown.component.global$module$react.useEffect(G__29092_29123,G__29093_29124);

var G__29094_29126 = (function (){
return (highlight_option_BANG_.cljs$core$IFn$_invoke$arity$2 ? highlight_option_BANG_.cljs$core$IFn$_invoke$arity$2(active_option_index,num_options) : highlight_option_BANG_.call(null,active_option_index,num_options));
});
var G__29095_29127 = [active_option_index];
nw_calculator.components.dropdown.component.global$module$react.useEffect(G__29094_29126,G__29095_29127);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dl$bg_DASH_inherit$w_DASH_full$max_DASH_w_DASH_full$absolute$m_DASH_0$z_DASH_50$bg_DASH_inherit$border_DASH_2$border_DASH_t_DASH_0$border_DASH_opacity_DASH_30$border_DASH_purple$rounded_DASH_b_DASH_md$rounded_DASH_t_DASH_none,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (option_index,p__29096){
var map__29097 = p__29096;
var map__29097__$1 = cljs.core.__destructure_map(map__29097);
var option_STAR_ = map__29097__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29097__$1,cljs.core.cst$kw$id);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.dropdown.component.option,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$on_DASH_select,on_select,cljs.core.cst$kw$on_DASH_hover,set_active_option_index_BANG_,cljs.core.cst$kw$option_DASH_index,option_index,cljs.core.cst$kw$option,option_STAR_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$f_GT_,make_option,option_STAR_], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,["option_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(option_index),"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null));
}),options)], null);
})()
;
return res29081;
});
nw_calculator.components.dropdown.component.dropdown = (function nw_calculator$components$dropdown$component$dropdown(p__29128){
var map__29129 = p__29128;
var map__29129__$1 = cljs.core.__destructure_map(map__29129);
var options_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29129__$1,cljs.core.cst$kw$options);
var input_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29129__$1,cljs.core.cst$kw$input_DASH_props);
var container_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29129__$1,cljs.core.cst$kw$container_DASH_props);
var make_option = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29129__$1,cljs.core.cst$kw$make_DASH_option);
var on_select = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29129__$1,cljs.core.cst$kw$on_DASH_select,nw_calculator.utilities.no_op);
var get_value = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29129__$1,cljs.core.cst$kw$get_DASH_value,cljs.core.constantly(""));
var input_ref = nw_calculator.components.dropdown.component.global$module$react.useRef();
var escape_key_pressed_QMARK_ = nw_calculator.hooks.use_key_press("Escape");
var with_let29130 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let29130);
var temp__5757__auto___29138 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___29138 == null)){
} else {
var c__13075__auto___29139 = temp__5757__auto___29138;
if((with_let29130.generation === c__13075__auto___29139.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let29130.generation = c__13075__auto___29139.ratomGeneration);
}

var init29131 = (with_let29130.length === (0));
var dropdown_focused_QMARK_ = ((((init29131) || (cljs.core.not(with_let29130.hasOwnProperty((0))))))?(with_let29130[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false)):(with_let29130[(0)]));
var focus_BANG_ = ((((init29131) || (cljs.core.not(with_let29130.hasOwnProperty((1))))))?(with_let29130[(1)] = (function (){
input_ref.current.focus();

return cljs.core.reset_BANG_(dropdown_focused_QMARK_,true);
})):(with_let29130[(1)]));
var blur_BANG_ = ((((init29131) || (cljs.core.not(with_let29130.hasOwnProperty((2))))))?(with_let29130[(2)] = (function (){
input_ref.current.blur();

return setTimeout((function (){
return cljs.core.reset_BANG_(dropdown_focused_QMARK_,false);
}),(200));
})):(with_let29130[(2)]));
var set_input_value_BANG_ = ((((init29131) || (cljs.core.not(with_let29130.hasOwnProperty((3))))))?(with_let29130[(3)] = (function (input_value){
return (input_ref.current.value = input_value);
})):(with_let29130[(3)]));
var select_result_BANG_ = ((((init29131) || (cljs.core.not(with_let29130.hasOwnProperty((4))))))?(with_let29130[(4)] = (function (result){
(on_select.cljs$core$IFn$_invoke$arity$1 ? on_select.cljs$core$IFn$_invoke$arity$1(result) : on_select.call(null,result));

var G__29133_29140 = (get_value.cljs$core$IFn$_invoke$arity$1 ? get_value.cljs$core$IFn$_invoke$arity$1(result) : get_value.call(null,result));
(set_input_value_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_input_value_BANG_.cljs$core$IFn$_invoke$arity$1(G__29133_29140) : set_input_value_BANG_.call(null,G__29133_29140));

return (blur_BANG_.cljs$core$IFn$_invoke$arity$0 ? blur_BANG_.cljs$core$IFn$_invoke$arity$0() : blur_BANG_.call(null));
})):(with_let29130[(4)]));
var toggle_dropdown_BANG_ = ((((init29131) || (cljs.core.not(with_let29130.hasOwnProperty((5))))))?(with_let29130[(5)] = (function (){
if(cljs.core.truth_(cljs.core.deref(dropdown_focused_QMARK_))){
return (blur_BANG_.cljs$core$IFn$_invoke$arity$0 ? blur_BANG_.cljs$core$IFn$_invoke$arity$0() : blur_BANG_.call(null));
} else {
return (focus_BANG_.cljs$core$IFn$_invoke$arity$0 ? focus_BANG_.cljs$core$IFn$_invoke$arity$0() : focus_BANG_.call(null));
}
})):(with_let29130[(5)]));
var prevent_key_scrolling = ((((init29131) || (cljs.core.not(with_let29130.hasOwnProperty((6))))))?(with_let29130[(6)] = (function (event){
if(cljs.core.truth_((function (){var G__29135 = event.key;
var fexpr__29134 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["ArrowUp",null,"ArrowDown",null], null), null);
return (fexpr__29134.cljs$core$IFn$_invoke$arity$1 ? fexpr__29134.cljs$core$IFn$_invoke$arity$1(G__29135) : fexpr__29134.call(null,G__29135));
})())){
return event.view.event.preventDefault();
} else {
return null;
}
})):(with_let29130[(6)]));
var res29132 = (function (){
var G__29136_29141 = (function (){
(blur_BANG_.cljs$core$IFn$_invoke$arity$0 ? blur_BANG_.cljs$core$IFn$_invoke$arity$0() : blur_BANG_.call(null));

return nw_calculator.utilities.no_op;
});
var G__29137_29142 = [escape_key_pressed_QMARK_];
nw_calculator.components.dropdown.component.global$module$react.useEffect(G__29136_29141,G__29137_29142);

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$flex_DASH_grow$relative$cursor_DASH_pointer,reagent.core.merge_props.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,nw_calculator.components.dropdown.styles.dropdown_class(),cljs.core.cst$kw$on_DASH_click,toggle_dropdown_BANG_], null),container_props),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$dropdown$basic_DASH_input$cursor_DASH_pointer,reagent.core.merge_props.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$read_DASH_only,true,cljs.core.cst$kw$on_DASH_key_DASH_down,prevent_key_scrolling,cljs.core.cst$kw$spell_DASH_check,false,cljs.core.cst$kw$on_DASH_blur,blur_BANG_,cljs.core.cst$kw$ref,input_ref], null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(input_props,cljs.core.cst$kw$ref))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fas$fa_DASH_caret_DASH_down$text_DASH_base$md_COLON_text_DASH_lg$absolute$bottom_DASH_2$right_DASH_1$transition_DASH_transform$pointer_DASH_events_DASH_none,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,(cljs.core.truth_(cljs.core.deref(dropdown_focused_QMARK_))?"text-purple text-opacity-100 flip-y":null)], null)], null),(cljs.core.truth_((function (){var and__4210__auto__ = cljs.core.deref(dropdown_focused_QMARK_);
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not_empty(options_STAR_);
} else {
return and__4210__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$f_GT_,nw_calculator.components.dropdown.component.options,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$options,options_STAR_,cljs.core.cst$kw$make_DASH_option,make_option,cljs.core.cst$kw$on_DASH_select,select_result_BANG_], null)], null):null)], null);
})()
;
return res29132;
});
