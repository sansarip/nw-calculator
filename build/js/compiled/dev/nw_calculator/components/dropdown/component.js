// Compiled by ClojureScript 1.10.879 {:optimizations :none}
goog.provide('nw_calculator.components.dropdown.component');
goog.require('cljs.core');
goog.require('cljstache.core');
goog.require('nw_calculator.hooks');
goog.require('react');
goog.require('reagent.core');
goog.require('nw_calculator.utilities');
goog.require('nw_calculator.components.dropdown.styles');
nw_calculator.components.dropdown.component.global$module$react = goog.global["React"];
nw_calculator.components.dropdown.component.option = (function nw_calculator$components$dropdown$component$option(var_args){
var args__4824__auto__ = [];
var len__4818__auto___28975 = arguments.length;
var i__4819__auto___28976 = (0);
while(true){
if((i__4819__auto___28976 < len__4818__auto___28975)){
args__4824__auto__.push((arguments[i__4819__auto___28976]));

var G__28977 = (i__4819__auto___28976 + (1));
i__4819__auto___28976 = G__28977;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return nw_calculator.components.dropdown.component.option.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(nw_calculator.components.dropdown.component.option.cljs$core$IFn$_invoke$arity$variadic = (function (p__28971,_){
var map__28972 = p__28971;
var map__28972__$1 = cljs.core.__destructure_map.call(null,map__28972);
var on_select = cljs.core.get.call(null,map__28972__$1,new cljs.core.Keyword(null,"on-select","on-select",-192407950));
var on_hover = cljs.core.get.call(null,map__28972__$1,new cljs.core.Keyword(null,"on-hover","on-hover",-537403203));
var option_index = cljs.core.get.call(null,map__28972__$1,new cljs.core.Keyword(null,"option-index","option-index",1104087323));
var option = cljs.core.get.call(null,map__28972__$1,new cljs.core.Keyword(null,"option","option",65132272));
var select_option = (function() { 
var nw_calculator$components$dropdown$component$select_option__delegate = function (___$1){
return on_select.call(null,option);
};
var nw_calculator$components$dropdown$component$select_option = function (var_args){
var ___$1 = null;
if (arguments.length > 0) {
var G__28978__i = 0, G__28978__a = new Array(arguments.length -  0);
while (G__28978__i < G__28978__a.length) {G__28978__a[G__28978__i] = arguments[G__28978__i + 0]; ++G__28978__i;}
  ___$1 = new cljs.core.IndexedSeq(G__28978__a,0,null);
} 
return nw_calculator$components$dropdown$component$select_option__delegate.call(this,___$1);};
nw_calculator$components$dropdown$component$select_option.cljs$lang$maxFixedArity = 0;
nw_calculator$components$dropdown$component$select_option.cljs$lang$applyTo = (function (arglist__28979){
var ___$1 = cljs.core.seq(arglist__28979);
return nw_calculator$components$dropdown$component$select_option__delegate(___$1);
});
nw_calculator$components$dropdown$component$select_option.cljs$core$IFn$_invoke$arity$variadic = nw_calculator$components$dropdown$component$select_option__delegate;
return nw_calculator$components$dropdown$component$select_option;
})()
;
var hover_option = (function() { 
var nw_calculator$components$dropdown$component$hover_option__delegate = function (___$1){
return on_hover.call(null,option_index);
};
var nw_calculator$components$dropdown$component$hover_option = function (var_args){
var ___$1 = null;
if (arguments.length > 0) {
var G__28980__i = 0, G__28980__a = new Array(arguments.length -  0);
while (G__28980__i < G__28980__a.length) {G__28980__a[G__28980__i] = arguments[G__28980__i + 0]; ++G__28980__i;}
  ___$1 = new cljs.core.IndexedSeq(G__28980__a,0,null);
} 
return nw_calculator$components$dropdown$component$hover_option__delegate.call(this,___$1);};
nw_calculator$components$dropdown$component$hover_option.cljs$lang$maxFixedArity = 0;
nw_calculator$components$dropdown$component$hover_option.cljs$lang$applyTo = (function (arglist__28981){
var ___$1 = cljs.core.seq(arglist__28981);
return nw_calculator$components$dropdown$component$hover_option__delegate(___$1);
});
nw_calculator$components$dropdown$component$hover_option.cljs$core$IFn$_invoke$arity$variadic = nw_calculator$components$dropdown$component$hover_option__delegate;
return nw_calculator$components$dropdown$component$hover_option;
})()
;
return (function() { 
var G__28982__delegate = function (p__28973,children){
var map__28974 = p__28973;
var map__28974__$1 = cljs.core.__destructure_map.call(null,map__28974);
var option_index__$1 = cljs.core.get.call(null,map__28974__$1,new cljs.core.Keyword(null,"option-index","option-index",1104087323));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dt.bg-inherit.transition-colors.bg-opacity-20.m-0.p-4.cursor-pointer","dt.bg-inherit.transition-colors.bg-opacity-20.m-0.p-4.cursor-pointer",-1538951866),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data-option-index","data-option-index",-1544240582),option_index__$1,new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),hover_option,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),select_option], null),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),children)], null);
};
var G__28982 = function (p__28973,var_args){
var children = null;
if (arguments.length > 1) {
var G__28983__i = 0, G__28983__a = new Array(arguments.length -  1);
while (G__28983__i < G__28983__a.length) {G__28983__a[G__28983__i] = arguments[G__28983__i + 1]; ++G__28983__i;}
  children = new cljs.core.IndexedSeq(G__28983__a,0,null);
} 
return G__28982__delegate.call(this,p__28973,children);};
G__28982.cljs$lang$maxFixedArity = 1;
G__28982.cljs$lang$applyTo = (function (arglist__28984){
var p__28973 = cljs.core.first(arglist__28984);
var children = cljs.core.rest(arglist__28984);
return G__28982__delegate(p__28973,children);
});
G__28982.cljs$core$IFn$_invoke$arity$variadic = G__28982__delegate;
return G__28982;
})()
;
}));

(nw_calculator.components.dropdown.component.option.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(nw_calculator.components.dropdown.component.option.cljs$lang$applyTo = (function (seq28969){
var G__28970 = cljs.core.first.call(null,seq28969);
var seq28969__$1 = cljs.core.next.call(null,seq28969);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28970,seq28969__$1);
}));

/**
 * Returns a list of dropdown options, navigated by keyboard and mouse.
 * 
 *   `on-select` is a fn that is given an option when one is selected.
 *   `make-option` is a fn that, given an option, returns a hiccup representation of that option.
 *   `options` is a coll of the options to be displayed
 */
nw_calculator.components.dropdown.component.options = (function nw_calculator$components$dropdown$component$options(p__28985){
var map__28986 = p__28985;
var map__28986__$1 = cljs.core.__destructure_map.call(null,map__28986);
var on_select = cljs.core.get.call(null,map__28986__$1,new cljs.core.Keyword(null,"on-select","on-select",-192407950),nw_calculator.utilities.no_op.call(null));
var make_option = cljs.core.get.call(null,map__28986__$1,new cljs.core.Keyword(null,"make-option","make-option",-1702447554));
var options = cljs.core.get.call(null,map__28986__$1,new cljs.core.Keyword(null,"options","options",99638489));
var vec__28987 = nw_calculator.components.dropdown.component.global$module$react.useState((-1));
var active_option_index = cljs.core.nth.call(null,vec__28987,(0),null);
var set_active_option_index_BANG_ = cljs.core.nth.call(null,vec__28987,(1),null);
var down_key_pressed_QMARK_ = nw_calculator.hooks.use_key_press.call(null,"ArrowDown");
var up_key_pressed_QMARK_ = nw_calculator.hooks.use_key_press.call(null,"ArrowUp");
var enter_key_pressed_QMARK_ = nw_calculator.hooks.use_key_press.call(null,"Enter");
var num_options = cljs.core.count.call(null,options);
var with_let28990 = reagent.ratom.with_let_values.call(null,new cljs.core.Keyword(null,"with-let28990","with-let28990",-1232978068));
var temp__5757__auto___28999 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___28999 == null)){
} else {
var c__8434__auto___29000 = temp__5757__auto___28999;
if((with_let28990.generation === c__8434__auto___29000.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let28990.generation = c__8434__auto___29000.ratomGeneration);
}

var init28991 = (with_let28990.length === (0));
var get_option_ele = ((((init28991) || (cljs.core.not.call(null,with_let28990.hasOwnProperty((0))))))?(with_let28990[(0)] = (function (option_index){
return document.querySelector(cljstache.core.render.call(null,"dt[data-option-index=\"{{oi}}\"]",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"oi","oi",1398685434),option_index], null)));
})):(with_let28990[(0)]));
var highlight_option_BANG_ = ((((init28991) || (cljs.core.not.call(null,with_let28990.hasOwnProperty((1))))))?(with_let28990[(1)] = (function (target_option_index,num_options__$1){
var seq__28993 = cljs.core.seq.call(null,cljs.core.range.call(null,num_options__$1));
var chunk__28994 = null;
var count__28995 = (0);
var i__28996 = (0);
while(true){
if((i__28996 < count__28995)){
var option_index = cljs.core._nth.call(null,chunk__28994,i__28996);
var option_ele_29001 = get_option_ele.call(null,option_index);
if(cljs.core._EQ_.call(null,option_index,target_option_index)){
option_ele_29001.classList.add("bg-purple");
} else {
option_ele_29001.classList.remove("bg-purple");
}


var G__29002 = seq__28993;
var G__29003 = chunk__28994;
var G__29004 = count__28995;
var G__29005 = (i__28996 + (1));
seq__28993 = G__29002;
chunk__28994 = G__29003;
count__28995 = G__29004;
i__28996 = G__29005;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__28993);
if(temp__5753__auto__){
var seq__28993__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28993__$1)){
var c__4638__auto__ = cljs.core.chunk_first.call(null,seq__28993__$1);
var G__29006 = cljs.core.chunk_rest.call(null,seq__28993__$1);
var G__29007 = c__4638__auto__;
var G__29008 = cljs.core.count.call(null,c__4638__auto__);
var G__29009 = (0);
seq__28993 = G__29006;
chunk__28994 = G__29007;
count__28995 = G__29008;
i__28996 = G__29009;
continue;
} else {
var option_index = cljs.core.first.call(null,seq__28993__$1);
var option_ele_29010 = get_option_ele.call(null,option_index);
if(cljs.core._EQ_.call(null,option_index,target_option_index)){
option_ele_29010.classList.add("bg-purple");
} else {
option_ele_29010.classList.remove("bg-purple");
}


var G__29011 = cljs.core.next.call(null,seq__28993__$1);
var G__29012 = null;
var G__29013 = (0);
var G__29014 = (0);
seq__28993 = G__29011;
chunk__28994 = G__29012;
count__28995 = G__29013;
i__28996 = G__29014;
continue;
}
} else {
return null;
}
}
break;
}
})):(with_let28990[(1)]));
var res28992 = (function (){
nw_calculator.components.dropdown.component.global$module$react.useEffect((function (){
var temp__5751__auto___29015 = cljs.core.get.call(null,options,active_option_index);
if(cljs.core.truth_(temp__5751__auto___29015)){
var active_option_29016 = temp__5751__auto___29015;
on_select.call(null,active_option_29016);
} else {
}

return nw_calculator.utilities.no_op;
}),[enter_key_pressed_QMARK_]);

nw_calculator.components.dropdown.component.global$module$react.useEffect((function (){
set_active_option_index_BANG_.call(null,(-1));

return nw_calculator.utilities.no_op;
}),[options]);

nw_calculator.components.dropdown.component.global$module$react.useEffect((function (){
var next_option_index_29017 = (active_option_index + (1));
if(cljs.core.truth_((function (){var and__4210__auto__ = down_key_pressed_QMARK_;
if(cljs.core.truth_(and__4210__auto__)){
return (next_option_index_29017 < num_options);
} else {
return and__4210__auto__;
}
})())){
set_active_option_index_BANG_.call(null,next_option_index_29017);
} else {
}

return nw_calculator.utilities.no_op;
}),[down_key_pressed_QMARK_]);

nw_calculator.components.dropdown.component.global$module$react.useEffect((function (){
var prev_option_index_29018 = (active_option_index - (1));
if(cljs.core.truth_((function (){var and__4210__auto__ = up_key_pressed_QMARK_;
if(cljs.core.truth_(and__4210__auto__)){
return (prev_option_index_29018 > (-1));
} else {
return and__4210__auto__;
}
})())){
set_active_option_index_BANG_.call(null,prev_option_index_29018);
} else {
}

return nw_calculator.utilities.no_op;
}),[up_key_pressed_QMARK_]);

nw_calculator.components.dropdown.component.global$module$react.useEffect((function (){
return highlight_option_BANG_.call(null,active_option_index,num_options);
}),[active_option_index]);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dl.bg-inherit.w-full.max-w-full.absolute.m-0.z-50.bg-inherit.border-2.border-t-0.border-opacity-30.border-purple.rounded-b-md.rounded-t-none","dl.bg-inherit.w-full.max-w-full.absolute.m-0.z-50.bg-inherit.border-2.border-t-0.border-opacity-30.border-purple.rounded-b-md.rounded-t-none",1023519792),cljs.core.map_indexed.call(null,(function (option_index,p__28997){
var map__28998 = p__28997;
var map__28998__$1 = cljs.core.__destructure_map.call(null,map__28998);
var option_STAR_ = map__28998__$1;
var id = cljs.core.get.call(null,map__28998__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.dropdown.component.option,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-select","on-select",-192407950),on_select,new cljs.core.Keyword(null,"on-hover","on-hover",-537403203),set_active_option_index_BANG_,new cljs.core.Keyword(null,"option-index","option-index",1104087323),option_index,new cljs.core.Keyword(null,"option","option",65132272),option_STAR_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f>","f>",1484564198),make_option,option_STAR_], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["option_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(option_index),"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null));
}),options)], null);
})()
;
return res28992;
});
nw_calculator.components.dropdown.component.dropdown = (function nw_calculator$components$dropdown$component$dropdown(p__29019){
var map__29020 = p__29019;
var map__29020__$1 = cljs.core.__destructure_map.call(null,map__29020);
var options_STAR_ = cljs.core.get.call(null,map__29020__$1,new cljs.core.Keyword(null,"options","options",99638489));
var input_props = cljs.core.get.call(null,map__29020__$1,new cljs.core.Keyword(null,"input-props","input-props",-1504868202));
var container_props = cljs.core.get.call(null,map__29020__$1,new cljs.core.Keyword(null,"container-props","container-props",-1692729191));
var make_option = cljs.core.get.call(null,map__29020__$1,new cljs.core.Keyword(null,"make-option","make-option",-1702447554));
var on_select = cljs.core.get.call(null,map__29020__$1,new cljs.core.Keyword(null,"on-select","on-select",-192407950),nw_calculator.utilities.no_op);
var get_value = cljs.core.get.call(null,map__29020__$1,new cljs.core.Keyword(null,"get-value","get-value",2108514284),cljs.core.constantly.call(null,""));
var input_ref = nw_calculator.components.dropdown.component.global$module$react.useRef();
var escape_key_pressed_QMARK_ = nw_calculator.hooks.use_key_press.call(null,"Escape");
var with_let29021 = reagent.ratom.with_let_values.call(null,new cljs.core.Keyword(null,"with-let29021","with-let29021",1548873227));
var temp__5757__auto___29024 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___29024 == null)){
} else {
var c__8434__auto___29025 = temp__5757__auto___29024;
if((with_let29021.generation === c__8434__auto___29025.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let29021.generation = c__8434__auto___29025.ratomGeneration);
}

var init29022 = (with_let29021.length === (0));
var dropdown_focused_QMARK_ = ((((init29022) || (cljs.core.not.call(null,with_let29021.hasOwnProperty((0))))))?(with_let29021[(0)] = reagent.core.atom.call(null,false)):(with_let29021[(0)]));
var focus_BANG_ = ((((init29022) || (cljs.core.not.call(null,with_let29021.hasOwnProperty((1))))))?(with_let29021[(1)] = (function (){
input_ref.current.focus();

return cljs.core.reset_BANG_.call(null,dropdown_focused_QMARK_,true);
})):(with_let29021[(1)]));
var blur_BANG_ = ((((init29022) || (cljs.core.not.call(null,with_let29021.hasOwnProperty((2))))))?(with_let29021[(2)] = (function (){
input_ref.current.blur();

return cljs.core.reset_BANG_.call(null,dropdown_focused_QMARK_,false);
})):(with_let29021[(2)]));
var set_input_value_BANG_ = ((((init29022) || (cljs.core.not.call(null,with_let29021.hasOwnProperty((3))))))?(with_let29021[(3)] = (function (input_value){
return (input_ref.current.value = input_value);
})):(with_let29021[(3)]));
var select_result_BANG_ = ((((init29022) || (cljs.core.not.call(null,with_let29021.hasOwnProperty((4))))))?(with_let29021[(4)] = (function (result){
on_select.call(null,result);

set_input_value_BANG_.call(null,get_value.call(null,result));

return input_ref.current.focus();
})):(with_let29021[(4)]));
var toggle_dropdown_BANG_ = ((((init29022) || (cljs.core.not.call(null,with_let29021.hasOwnProperty((5))))))?(with_let29021[(5)] = (function (){
if(cljs.core.truth_(cljs.core.deref.call(null,dropdown_focused_QMARK_))){
return blur_BANG_.call(null);
} else {
return focus_BANG_.call(null);
}
})):(with_let29021[(5)]));
var prevent_key_scrolling = ((((init29022) || (cljs.core.not.call(null,with_let29021.hasOwnProperty((6))))))?(with_let29021[(6)] = (function (event){
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["ArrowUp",null,"ArrowDown",null], null), null).call(null,event.key))){
return event.view.event.preventDefault();
} else {
return null;
}
})):(with_let29021[(6)]));
var res29023 = (function (){
nw_calculator.components.dropdown.component.global$module$react.useEffect((function (){
blur_BANG_.call(null);

return nw_calculator.utilities.no_op;
}),[escape_key_pressed_QMARK_]);

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex-grow.relative.cursor-pointer","div.flex-grow.relative.cursor-pointer",-995616238),reagent.core.merge_props.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),nw_calculator.components.dropdown.styles.dropdown_class.call(null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),toggle_dropdown_BANG_], null),container_props),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.dropdown.basic-input.cursor-pointer","input.dropdown.basic-input.cursor-pointer",-665685574),reagent.core.merge_props.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"read-only","read-only",-191706886),true,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),prevent_key_scrolling,new cljs.core.Keyword(null,"spell-check","spell-check",-2060352968),false,new cljs.core.Keyword(null,"on-blur","on-blur",814300747),blur_BANG_,new cljs.core.Keyword(null,"ref","ref",1289896967),input_ref], null),cljs.core.dissoc.call(null,input_props,new cljs.core.Keyword(null,"ref","ref",1289896967)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-caret-down.text-base.md:text-lg.absolute.bottom-2.right-1.transition-transform.pointer-events-none","i.fas.fa-caret-down.text-base.md:text-lg.absolute.bottom-2.right-1.transition-transform.pointer-events-none",-1869469339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(cljs.core.deref.call(null,dropdown_focused_QMARK_))?"text-purple text-opacity-100 flip-y":null)], null)], null),(cljs.core.truth_((function (){var and__4210__auto__ = cljs.core.deref.call(null,dropdown_focused_QMARK_);
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not_empty.call(null,options_STAR_);
} else {
return and__4210__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f>","f>",1484564198),nw_calculator.components.dropdown.component.options,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"options","options",99638489),options_STAR_,new cljs.core.Keyword(null,"make-option","make-option",-1702447554),make_option,new cljs.core.Keyword(null,"on-select","on-select",-192407950),select_result_BANG_], null)], null):null)], null);
})()
;
return res29023;
});

//# sourceMappingURL=component.js.map
