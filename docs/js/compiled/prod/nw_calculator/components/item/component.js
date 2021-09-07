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
nw_calculator.components.item.component.image_with_popup = (function nw_calculator$components$item$component$image_with_popup(p__28958){
var map__28959 = p__28958;
var map__28959__$1 = cljs.core.__destructure_map(map__28959);
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28959__$1,cljs.core.cst$kw$src);
var disable_popup_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28959__$1,cljs.core.cst$kw$disable_DASH_popup_QMARK_);
var with_let28960 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let28960);
var temp__5757__auto___28975 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___28975 == null)){
} else {
var c__18156__auto___28976 = temp__5757__auto___28975;
if((with_let28960.generation === c__18156__auto___28976.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let28960.generation = c__18156__auto___28976.ratomGeneration);
}

var init28961 = (with_let28960.length === (0));
var popup_ele = ((((init28961) || (cljs.core.not(with_let28960.hasOwnProperty((0))))))?(with_let28960[(0)] = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null)):(with_let28960[(0)]));
var res28962 = (function (){var vec__28963 = nw_calculator.components.item.component.global$module$react.useState(null);
var popup_target_ele = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28963,(0),null);
var set_popup_target_ele_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28963,(1),null);
var G__28966_28977 = (function (){
if(cljs.core.truth_((function (){var and__4210__auto__ = cljs.core.not(cljs.core.deref(popup_ele));
if(and__4210__auto__){
return popup_target_ele;
} else {
return and__4210__auto__;
}
})())){
var new_popup_ele_28979 = nw_calculator.utilities.html__GT_ele(cljstache.core.render.cljs$core$IFn$_invoke$arity$2("<img class=\"hidden max-w-3xl w-48 h-48 object-cover absolute z-10 bg-light-blue rounded-full rounded-tl-none border-purple border-opacity-30 border-2 bg-white\" src=\"{{src}}\" style=\"top: {{top}}px; left: {{left}}px\" />",(function (){var vec__28968 = nw_calculator.utilities.get_ele_offsets(popup_target_ele);
var left = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28968,(0),null);
var top = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28968,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$src,src,cljs.core.cst$kw$left,(left + (25)),cljs.core.cst$kw$top,(top + (25))], null);
})()));
cljs.core.reset_BANG_(popup_ele,new_popup_ele_28979);

document.body.appendChild(new_popup_ele_28979);
} else {
}

var temp__5753__auto___28980 = cljs.core.deref(popup_ele);
if(cljs.core.truth_(temp__5753__auto___28980)){
var popup_ele_STAR__28981 = temp__5753__auto___28980;
if(cljs.core.truth_(popup_target_ele)){
popup_ele_STAR__28981.classList.remove("hidden");
} else {
popup_ele_STAR__28981.classList.add("hidden");
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
var G__28967_28978 = [popup_target_ele];
nw_calculator.components.item.component.global$module$react.useEffect(G__28966_28977,G__28967_28978);

var with_let28971 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let28971);
var temp__5757__auto___28982 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___28982 == null)){
} else {
var c__18156__auto___28983 = temp__5757__auto___28982;
if((with_let28971.generation === c__18156__auto___28983.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let28971.generation = c__18156__auto___28983.ratomGeneration);
}

var init28972 = (with_let28971.length === (0));
var show_popup = ((((init28972) || (cljs.core.not(with_let28971.hasOwnProperty((0))))))?(with_let28971[(0)] = (function (event){
var G__28974 = event.target;
return (set_popup_target_ele_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_popup_target_ele_BANG_.cljs$core$IFn$_invoke$arity$1(G__28974) : set_popup_target_ele_BANG_.call(null,G__28974));
})):(with_let28971[(0)]));
var hide_popup = ((((init28972) || (cljs.core.not(with_let28971.hasOwnProperty((1))))))?(with_let28971[(1)] = (function (_event){
return (set_popup_target_ele_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_popup_target_ele_BANG_.cljs$core$IFn$_invoke$arity$1(null) : set_popup_target_ele_BANG_.call(null,null));
})):(with_let28971[(1)]));
var res28973 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img$bg_DASH_none,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$src,nw_calculator.utilities.localize_external_img(src),cljs.core.cst$kw$on_DASH_mouse_DASH_over,(cljs.core.truth_(disable_popup_QMARK_)?null:show_popup),cljs.core.cst$kw$on_DASH_mouse_DASH_out,(cljs.core.truth_(disable_popup_QMARK_)?null:hide_popup)], null)], null);
return res28973;
})();
return res28962;
});
nw_calculator.components.item.component.placeholder_icon = (function nw_calculator$components$item$component$placeholder_icon(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$flex$items_DASH_center$justify_DASH_center,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,nw_calculator.components.item.styles.placeholder_icon_class()], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$text_DASH_purple$text_DASH_opacity_DASH_50$fa_DASH_1x$text_DASH_2xl$fas$fa_DASH_question], null)], null);
});
nw_calculator.components.item.component.item = (function nw_calculator$components$item$component$item(p__28984){
var map__28985 = p__28984;
var map__28985__$1 = cljs.core.__destructure_map(map__28985);
var map__28986 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28985__$1,cljs.core.cst$kw$item_DASH_map);
var map__28986__$1 = cljs.core.__destructure_map(map__28986);
var amount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28986__$1,cljs.core.cst$kw$amount);
var png_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28986__$1,cljs.core.cst$kw$png_DASH_url);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28986__$1,cljs.core.cst$kw$name);
var xp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28986__$1,cljs.core.cst$kw$xp);
var tier = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28986__$1,cljs.core.cst$kw$tier);
var popup_on_hover_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28985__$1,cljs.core.cst$kw$popup_DASH_on_DASH_hover_QMARK_);
var custom_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28985__$1,cljs.core.cst$kw$custom_DASH_name);
var custom_amount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28985__$1,cljs.core.cst$kw$custom_DASH_amount);
var container_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28985__$1,cljs.core.cst$kw$container_DASH_props);
var with_let28987 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let28987);
var temp__5757__auto___28990 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___28990 == null)){
} else {
var c__18156__auto___28991 = temp__5757__auto___28990;
if((with_let28987.generation === c__18156__auto___28991.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let28987.generation = c__18156__auto___28991.ratomGeneration);
}

var init28988 = (with_let28987.length === (0));
var labels_key = ((((init28988) || (cljs.core.not(with_let28987.hasOwnProperty((0))))))?(with_let28987[(0)] = ["labels_",nw_calculator.utilities.short_uuid_str()].join('')):(with_let28987[(0)]));
var res28989 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$flex$items_DASH_center$gap_DASH_4$relative,container_props,(cljs.core.truth_(png_url)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$f_GT_,nw_calculator.components.item.component.image_with_popup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,png_url,cljs.core.cst$kw$disable_DASH_popup_QMARK_,cljs.core.not(popup_on_hover_QMARK_)], null)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.item.component.placeholder_icon], null)),cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$bg_DASH_inherit$labels$w_DASH_full$flex$items_DASH_start$gap_DASH_4,(function (){var or__4212__auto__ = custom_amount;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return amount;
}
})()," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$bg_DASH_inherit$w_DASH_full$flex$flex_DASH_col$gap_DASH_2,(function (){var or__4212__auto__ = custom_name;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return name;
}
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$basic_DASH_info$text_DASH_sm$align_DASH_text_DASH_bottom$whitespace_DASH_nowrap,(function (){var tier_label = (cljs.core.truth_(tier)?["T",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tier)].join(''):null);
var xp_label = (cljs.core.truth_(xp)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(xp),"XP"].join(''):null);
var basic_info = cljs.core.not_empty(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tier_label,xp_label], null))));
if(cljs.core.truth_(basic_info)){
return [" (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(basic_info),")"].join('');
} else {
return null;
}
})()], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,labels_key], null))], null);
return res28989;
});
