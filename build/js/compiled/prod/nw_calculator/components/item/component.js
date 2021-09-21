// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('nw_calculator.components.item.component');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('nw_calculator.utilities');
goog.require('reagent.core');
goog.require('clojure.string');
goog.require('cljstache.core');
goog.require('nw_calculator.components.item.styles');
nw_calculator.components.item.component.global$module$react = goog.global["React"];
nw_calculator.components.item.component.image_with_popup = (function nw_calculator$components$item$component$image_with_popup(p__29100){
var map__29101 = p__29100;
var map__29101__$1 = cljs.core.__destructure_map(map__29101);
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29101__$1,cljs.core.cst$kw$src);
var disable_popup_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29101__$1,cljs.core.cst$kw$disable_DASH_popup_QMARK_);
var with_let29102 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let29102);
var temp__5757__auto___29117 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___29117 == null)){
} else {
var c__13075__auto___29118 = temp__5757__auto___29117;
if((with_let29102.generation === c__13075__auto___29118.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let29102.generation = c__13075__auto___29118.ratomGeneration);
}

var init29103 = (with_let29102.length === (0));
var popup_ele = ((((init29103) || (cljs.core.not(with_let29102.hasOwnProperty((0))))))?(with_let29102[(0)] = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null)):(with_let29102[(0)]));
var res29104 = (function (){var vec__29105 = nw_calculator.components.item.component.global$module$react.useState(null);
var popup_target_ele = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29105,(0),null);
var set_popup_target_ele_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29105,(1),null);
var G__29108_29119 = (function (){
if(cljs.core.truth_((function (){var and__4210__auto__ = cljs.core.not(cljs.core.deref(popup_ele));
if(and__4210__auto__){
return popup_target_ele;
} else {
return and__4210__auto__;
}
})())){
var new_popup_ele_29121 = nw_calculator.utilities.html__GT_ele(cljstache.core.render.cljs$core$IFn$_invoke$arity$2("<img class=\"hidden max-w-3xl w-48 h-48 object-cover absolute z-10 bg-light-blue rounded-full rounded-tl-none border-purple border-opacity-30 border-2 bg-white\" src=\"{{src}}\" style=\"top: {{top}}px; left: {{left}}px\" />",(function (){var vec__29110 = nw_calculator.utilities.get_ele_offsets(popup_target_ele);
var left = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29110,(0),null);
var top = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29110,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$src,src,cljs.core.cst$kw$left,(left + (20)),cljs.core.cst$kw$top,(top + (20))], null);
})()));
cljs.core.reset_BANG_(popup_ele,new_popup_ele_29121);

document.body.appendChild(new_popup_ele_29121);
} else {
}

var temp__5753__auto___29122 = cljs.core.deref(popup_ele);
if(cljs.core.truth_(temp__5753__auto___29122)){
var popup_ele_STAR__29123 = temp__5753__auto___29122;
if(cljs.core.truth_(popup_target_ele)){
popup_ele_STAR__29123.classList.remove("hidden");
} else {
popup_ele_STAR__29123.classList.add("hidden");
}
} else {
}

return (function (){
var temp__5753__auto__ = cljs.core.deref(popup_ele);
if(cljs.core.truth_(temp__5753__auto__)){
var popup_ele_STAR_ = temp__5753__auto__;
cljs.core.reset_BANG_(popup_ele,null);

return popup_ele_STAR_.remove();
} else {
return null;
}
});
});
var G__29109_29120 = [popup_target_ele];
nw_calculator.components.item.component.global$module$react.useEffect(G__29108_29119,G__29109_29120);

var with_let29113 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let29113);
var temp__5757__auto___29124 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___29124 == null)){
} else {
var c__13075__auto___29125 = temp__5757__auto___29124;
if((with_let29113.generation === c__13075__auto___29125.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let29113.generation = c__13075__auto___29125.ratomGeneration);
}

var init29114 = (with_let29113.length === (0));
var show_popup = ((((init29114) || (cljs.core.not(with_let29113.hasOwnProperty((0))))))?(with_let29113[(0)] = (function (event){
var G__29116 = event.target;
return (set_popup_target_ele_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_popup_target_ele_BANG_.cljs$core$IFn$_invoke$arity$1(G__29116) : set_popup_target_ele_BANG_.call(null,G__29116));
})):(with_let29113[(0)]));
var hide_popup = ((((init29114) || (cljs.core.not(with_let29113.hasOwnProperty((1))))))?(with_let29113[(1)] = (function (_event){
return (set_popup_target_ele_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_popup_target_ele_BANG_.cljs$core$IFn$_invoke$arity$1(null) : set_popup_target_ele_BANG_.call(null,null));
})):(with_let29113[(1)]));
var res29115 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img$bg_DASH_none$w_DASH_8$h_DASH_8,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$src,src,cljs.core.cst$kw$on_DASH_mouse_DASH_over,(cljs.core.truth_(disable_popup_QMARK_)?null:show_popup),cljs.core.cst$kw$on_DASH_mouse_DASH_out,(cljs.core.truth_(disable_popup_QMARK_)?null:hide_popup)], null)], null);
return res29115;
})();
return res29104;
});
nw_calculator.components.item.component.placeholder_icon = (function nw_calculator$components$item$component$placeholder_icon(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$flex$items_DASH_center$justify_DASH_center,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,nw_calculator.components.item.styles.placeholder_icon_class()], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$text_DASH_purple$text_DASH_opacity_DASH_50$fa_DASH_1x$text_DASH_2xl$fas$fa_DASH_question], null)], null);
});
nw_calculator.components.item.component.item = (function nw_calculator$components$item$component$item(p__29126){
var map__29127 = p__29126;
var map__29127__$1 = cljs.core.__destructure_map(map__29127);
var map__29128 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29127__$1,cljs.core.cst$kw$item_DASH_map);
var map__29128__$1 = cljs.core.__destructure_map(map__29128);
var item_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29128__$1,cljs.core.cst$kw$name);
var quantity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29128__$1,cljs.core.cst$kw$quantity);
var png_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29128__$1,cljs.core.cst$kw$png_DASH_url);
var xp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29128__$1,cljs.core.cst$kw$xp);
var category_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29128__$1,cljs.core.cst$kw$category_DASH_name);
var tier = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29128__$1,cljs.core.cst$kw$tier);
var popup_on_hover_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29127__$1,cljs.core.cst$kw$popup_DASH_on_DASH_hover_QMARK_);
var custom_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29127__$1,cljs.core.cst$kw$custom_DASH_name);
var custom_quantity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29127__$1,cljs.core.cst$kw$custom_DASH_quantity);
var container_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29127__$1,cljs.core.cst$kw$container_DASH_props);
var with_let29129 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let29129);
var temp__5757__auto___29132 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___29132 == null)){
} else {
var c__13075__auto___29133 = temp__5757__auto___29132;
if((with_let29129.generation === c__13075__auto___29133.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let29129.generation = c__13075__auto___29133.ratomGeneration);
}

var init29130 = (with_let29129.length === (0));
var labels_key = ((((init29130) || (cljs.core.not(with_let29129.hasOwnProperty((0))))))?(with_let29129[(0)] = ["labels_",nw_calculator.utilities.short_uuid_str()].join('')):(with_let29129[(0)]));
var res29131 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$flex$gap_DASH_4$relative,container_props,(cljs.core.truth_(png_url)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$f_GT_,nw_calculator.components.item.component.image_with_popup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,png_url,cljs.core.cst$kw$disable_DASH_popup_QMARK_,cljs.core.not(popup_on_hover_QMARK_)], null)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.item.component.placeholder_icon], null)),cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$bg_DASH_inherit$labels$w_DASH_full$flex$items_DASH_start$gap_DASH_4,(function (){var or__4212__auto__ = custom_quantity;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return quantity;
}
})()," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$bg_DASH_inherit$w_DASH_full$flex$flex_DASH_col$gap_DASH_2,(function (){var or__4212__auto__ = custom_name;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return item_name;
}
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$basic_DASH_info$text_DASH_sm$align_DASH_text_DASH_bottom$whitespace_DASH_nowrap,(function (){var tier_label = (cljs.core.truth_(tier)?["T",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tier)].join(''):null);
var xp_label = (cljs.core.truth_(xp)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(xp),"XP"].join(''):null);
var basic_info = cljs.core.not_empty(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [category_name,tier_label,xp_label], null))));
if(cljs.core.truth_(basic_info)){
return [" (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(basic_info),")"].join('');
} else {
return null;
}
})()], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,labels_key], null))], null);
return res29131;
});
