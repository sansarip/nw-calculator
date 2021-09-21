// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('nw_calculator.views');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('nw_calculator.events');
goog.require('nw_calculator.subs');
goog.require('nw_calculator.components.collapsible_tree.component');
goog.require('nw_calculator.components');
goog.require('reagent.core');
goog.require('nw_calculator.utilities');
goog.require('nw_calculator.styles');
goog.require('nw_calculator.config');
nw_calculator.views.global$module$react = goog.global["React"];
nw_calculator.views.basic_item = (function nw_calculator$views$basic_item(item_map){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.item_component,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$item_DASH_map,item_map,cljs.core.cst$kw$custom_DASH_quantity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_], null)], null)], null);
});
nw_calculator.views.search = (function nw_calculator$views$search(item_index){
var with_let29283 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let29283);
var temp__5757__auto___29287 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___29287 == null)){
} else {
var c__13075__auto___29288 = temp__5757__auto___29287;
if((with_let29283.generation === c__13075__auto___29288.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let29283.generation = c__13075__auto___29288.ratomGeneration);
}

var init29284 = (with_let29283.length === (0));
var search_BANG_ = ((((init29284) || (cljs.core.not(with_let29283.hasOwnProperty((0))))))?(with_let29283[(0)] = nw_calculator.utilities.debounce((function (query){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_search,item_index,query], null));
}),(100))):(with_let29283[(0)]));
var select_item_BANG_ = ((((init29284) || (cljs.core.not(with_let29283.hasOwnProperty((1))))))?(with_let29283[(1)] = (function (item){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_select_DASH_item,item_index,item], null));
})):(with_let29283[(1)]));
var clear_search_BANG_ = ((((init29284) || (cljs.core.not(with_let29283.hasOwnProperty((2))))))?(with_let29283[(2)] = (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_clear_DASH_search,item_index], null));
})):(with_let29283[(2)]));
var res29285 = (function (){var results = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_search_DASH_results,item_index], null)));
var map__29286 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_resolved_DASH_selected_DASH_item,item_index], null)));
var map__29286__$1 = cljs.core.__destructure_map(map__29286);
var item_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29286__$1,cljs.core.cst$kw$name);
var searching_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_searching_QMARK_], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$f_GT_,nw_calculator.components.search_component,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$results,results,cljs.core.cst$kw$input_DASH_props,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$placeholder,"\uD83D\uDD0D Search for an item",cljs.core.cst$kw$default_DASH_value,item_name], null),cljs.core.cst$kw$get_DASH_value,cljs.core.cst$kw$name,cljs.core.cst$kw$make_DASH_result,nw_calculator.views.basic_item,cljs.core.cst$kw$on_DASH_search,search_BANG_,cljs.core.cst$kw$loading_QMARK_,searching_QMARK_,cljs.core.cst$kw$on_DASH_clear,clear_search_BANG_,cljs.core.cst$kw$on_DASH_select,select_item_BANG_], null)], null);
})();
return res29285;
});
nw_calculator.views.dropdown = (function nw_calculator$views$dropdown(p__29289){
var map__29290 = p__29289;
var map__29290__$1 = cljs.core.__destructure_map(map__29290);
var selected_option_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29290__$1,cljs.core.cst$kw$name);
var category_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29290__$1,cljs.core.cst$kw$path);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29290__$1,cljs.core.cst$kw$options);
var category_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29290__$1,cljs.core.cst$kw$category_DASH_name);
var with_let29291 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let29291);
var temp__5757__auto___29296 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___29296 == null)){
} else {
var c__13075__auto___29297 = temp__5757__auto___29296;
if((with_let29291.generation === c__13075__auto___29297.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let29291.generation = c__13075__auto___29297.ratomGeneration);
}

var init29292 = (with_let29291.length === (0));
var select_option_BANG_ = ((((init29292) || (cljs.core.not(with_let29291.hasOwnProperty((0))))))?(with_let29291[(0)] = (function (p__29294){
var map__29295 = p__29294;
var map__29295__$1 = cljs.core.__destructure_map(map__29295);
var option_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29295__$1,cljs.core.cst$kw$path);
var selected_option = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_item_DASH_in_DASH_resolved_DASH_selected_DASH_item,option_path], null)));
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_select_DASH_option,category_path,selected_option], null));
})):(with_let29291[(0)]));
var res29293 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$f_GT_,nw_calculator.components.dropdown_component,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$input_DASH_props,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$placeholder,category_name,cljs.core.cst$kw$default_DASH_value,selected_option_name], null),cljs.core.cst$kw$on_DASH_select,select_option_BANG_,cljs.core.cst$kw$container_DASH_props,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"bg-white"], null),cljs.core.cst$kw$make_DASH_option,nw_calculator.views.basic_item,cljs.core.cst$kw$get_DASH_value,cljs.core.cst$kw$name,cljs.core.cst$kw$options,options], null)], null);
return res29293;
});
nw_calculator.views.custom_item_quantity = (function nw_calculator$views$custom_item_quantity(p__29298){
var map__29299 = p__29298;
var map__29299__$1 = cljs.core.__destructure_map(map__29299);
var editable_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29299__$1,cljs.core.cst$kw$editable_QMARK_);
var quantity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29299__$1,cljs.core.cst$kw$quantity);
var item_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29299__$1,cljs.core.cst$kw$item_DASH_index);
var with_let29300 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let29300);
var temp__5757__auto___29303 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___29303 == null)){
} else {
var c__13075__auto___29304 = temp__5757__auto___29303;
if((with_let29300.generation === c__13075__auto___29304.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let29300.generation = c__13075__auto___29304.ratomGeneration);
}

var init29301 = (with_let29300.length === (0));
var set_quantity_multiplier_BANG_ = ((((init29301) || (cljs.core.not(with_let29300.hasOwnProperty((0))))))?(with_let29300[(0)] = (function (event){
var multiplier = nw_calculator.utilities.parse_pos.cljs$core$IFn$_invoke$arity$1(event.target.value);
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_set_DASH_quantity_DASH_multiplier,item_index,multiplier], null));
})):(with_let29300[(0)]));
var min_quantity_multiplier = ((((init29301) || (cljs.core.not(with_let29300.hasOwnProperty((1))))))?(with_let29300[(1)] = (1)):(with_let29300[(1)]));
var res29302 = (function (){var quantity_multiplier_STAR_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_quantity_DASH_multiplier,item_index], null)));
var quantity_multiplier = (cljs.core.truth_(isNaN(quantity_multiplier_STAR_))?min_quantity_multiplier:quantity_multiplier_STAR_);
var editable_stack_QMARK_ = (function (){var and__4210__auto__ = editable_QMARK_;
if(cljs.core.truth_(and__4210__auto__)){
return (quantity > (1));
} else {
return and__4210__auto__;
}
})();
if(cljs.core.truth_(editable_stack_QMARK_)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$f_GT_,nw_calculator.components.multiplication_component,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$base,quantity,cljs.core.cst$kw$container_DASH_props,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"mb-18"], null),cljs.core.cst$kw$input_DASH_props,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$default_DASH_value,quantity_multiplier,cljs.core.cst$kw$placeholder,min_quantity_multiplier,cljs.core.cst$kw$on_DASH_input,set_quantity_multiplier_BANG_], null)], null)], null);
} else {
if(cljs.core.truth_(editable_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$basic_DASH_input$w_DASH_12_DASH_imp$text_DASH_right,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$number,cljs.core.cst$kw$default_DASH_value,quantity_multiplier,cljs.core.cst$kw$placeholder,min_quantity_multiplier,cljs.core.cst$kw$on_DASH_input,set_quantity_multiplier_BANG_], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,quantity], null);

}
}
})();
return res29302;
});
nw_calculator.views.custom_item_name = (function nw_calculator$views$custom_item_name(p__29305){
var map__29306 = p__29305;
var map__29306__$1 = cljs.core.__destructure_map(map__29306);
var map__29307 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29306__$1,cljs.core.cst$kw$node_DASH_data);
var map__29307__$1 = cljs.core.__destructure_map(map__29307);
var map__29308 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29307__$1,cljs.core.cst$kw$node);
var map__29308__$1 = cljs.core.__destructure_map(map__29308);
var item_map = map__29308__$1;
var name_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29308__$1,cljs.core.cst$kw$name);
var external_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29308__$1,cljs.core.cst$kw$external_DASH_url);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29308__$1,cljs.core.cst$kw$options);
var root_node_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29307__$1,cljs.core.cst$kw$root_DASH_node_QMARK_);
var item_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29306__$1,cljs.core.cst$kw$item_DASH_index);
if(cljs.core.truth_(root_node_QMARK_)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$bg_DASH_inherit$w_DASH_full$flex$gap_DASH_2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.search,item_index], null),(cljs.core.truth_(external_url)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$self_DASH_center,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,external_url,cljs.core.cst$kw$target,"_blank"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$text_DASH_sm$md_COLON_text_DASH_base$fas$fa_DASH_external_DASH_link_DASH_alt], null)], null):null)], null);
} else {
if(cljs.core.truth_(options)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$bg_DASH_inherit$w_DASH_full$flex$gap_DASH_2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.dropdown,item_map], null),(cljs.core.truth_(external_url)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$self_DASH_center,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,external_url,cljs.core.cst$kw$target,"_blank"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$text_DASH_sm$md_COLON_text_DASH_base$fas$fa_DASH_external_DASH_link_DASH_alt], null)], null):null)], null);
} else {
if(cljs.core.truth_(external_url)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$whitespace_DASH_nowrap,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,external_url,cljs.core.cst$kw$target,"_blank"], null),name_STAR_], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$whitespace_DASH_nowrap,name_STAR_], null);
}

}
}
});
nw_calculator.views.item = (function nw_calculator$views$item(p__29309,item_index){
var map__29310 = p__29309;
var map__29310__$1 = cljs.core.__destructure_map(map__29310);
var node_data = map__29310__$1;
var map__29311 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29310__$1,cljs.core.cst$kw$node);
var map__29311__$1 = cljs.core.__destructure_map(map__29311);
var item_map = map__29311__$1;
var quantity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29311__$1,cljs.core.cst$kw$quantity);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29311__$1,cljs.core.cst$kw$path);
var root_node_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29310__$1,cljs.core.cst$kw$root_DASH_node_QMARK_);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.item_component,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$popup_DASH_on_DASH_hover_QMARK_,true,cljs.core.cst$kw$container_DASH_props,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,["m-0-imp",(cljs.core.truth_(root_node_QMARK_)?" bg-inherit":null)].join('')], null),cljs.core.cst$kw$item_DASH_map,item_map,cljs.core.cst$kw$custom_DASH_quantity,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.custom_item_quantity,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$editable_QMARK_,root_node_QMARK_,cljs.core.cst$kw$quantity,quantity,cljs.core.cst$kw$item_DASH_index,item_index], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,"quantity")], null)),cljs.core.cst$kw$custom_DASH_name,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.custom_item_name,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$node_DASH_data,node_data,cljs.core.cst$kw$item_DASH_index,item_index], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,path], null))], null)], null);
});
nw_calculator.views.searchable_item_tree = (function nw_calculator$views$searchable_item_tree(item_index){
var with_let29313 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let29313);
var temp__5757__auto___29349 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___29349 == null)){
} else {
var c__13075__auto___29350 = temp__5757__auto___29349;
if((with_let29313.generation === c__13075__auto___29350.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let29313.generation = c__13075__auto___29350.ratomGeneration);
}

var init29314 = (with_let29313.length === (0));
var collapsed_item_updaters = ((((init29314) || (cljs.core.not(with_let29313.hasOwnProperty((0))))))?(with_let29313[(0)] = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY)):(with_let29313[(0)]));
var set_collapsed_updater_BANG_ = ((((init29314) || (cljs.core.not(with_let29313.hasOwnProperty((1))))))?(with_let29313[(1)] = (function (id,updater){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(collapsed_item_updaters,cljs.core.assoc,id,updater);
})):(with_let29313[(1)]));
var unset_collapsed_updater_BANG_ = ((((init29314) || (cljs.core.not(with_let29313.hasOwnProperty((2))))))?(with_let29313[(2)] = (function (id){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(collapsed_item_updaters,cljs.core.dissoc,id);
})):(with_let29313[(2)]));
var expand_all_BANG_ = ((((init29314) || (cljs.core.not(with_let29313.hasOwnProperty((3))))))?(with_let29313[(3)] = (function (){
var seq__29316 = cljs.core.seq(cljs.core.deref(collapsed_item_updaters));
var chunk__29317 = null;
var count__29318 = (0);
var i__29319 = (0);
while(true){
if((i__29319 < count__29318)){
var vec__29326 = chunk__29317.cljs$core$IIndexed$_nth$arity$2(null,i__29319);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29326,(0),null);
var set_collapsed_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29326,(1),null);
(set_collapsed_item.cljs$core$IFn$_invoke$arity$1 ? set_collapsed_item.cljs$core$IFn$_invoke$arity$1(false) : set_collapsed_item.call(null,false));


var G__29351 = seq__29316;
var G__29352 = chunk__29317;
var G__29353 = count__29318;
var G__29354 = (i__29319 + (1));
seq__29316 = G__29351;
chunk__29317 = G__29352;
count__29318 = G__29353;
i__29319 = G__29354;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__29316);
if(temp__5753__auto__){
var seq__29316__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29316__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__29316__$1);
var G__29355 = cljs.core.chunk_rest(seq__29316__$1);
var G__29356 = c__4638__auto__;
var G__29357 = cljs.core.count(c__4638__auto__);
var G__29358 = (0);
seq__29316 = G__29355;
chunk__29317 = G__29356;
count__29318 = G__29357;
i__29319 = G__29358;
continue;
} else {
var vec__29329 = cljs.core.first(seq__29316__$1);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29329,(0),null);
var set_collapsed_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29329,(1),null);
(set_collapsed_item.cljs$core$IFn$_invoke$arity$1 ? set_collapsed_item.cljs$core$IFn$_invoke$arity$1(false) : set_collapsed_item.call(null,false));


var G__29359 = cljs.core.next(seq__29316__$1);
var G__29360 = null;
var G__29361 = (0);
var G__29362 = (0);
seq__29316 = G__29359;
chunk__29317 = G__29360;
count__29318 = G__29361;
i__29319 = G__29362;
continue;
}
} else {
return null;
}
}
break;
}
})):(with_let29313[(3)]));
var collapse_all_BANG_ = ((((init29314) || (cljs.core.not(with_let29313.hasOwnProperty((4))))))?(with_let29313[(4)] = (function (){
var seq__29332 = cljs.core.seq(cljs.core.deref(collapsed_item_updaters));
var chunk__29333 = null;
var count__29334 = (0);
var i__29335 = (0);
while(true){
if((i__29335 < count__29334)){
var vec__29342 = chunk__29333.cljs$core$IIndexed$_nth$arity$2(null,i__29335);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29342,(0),null);
var set_collapsed_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29342,(1),null);
(set_collapsed_item.cljs$core$IFn$_invoke$arity$1 ? set_collapsed_item.cljs$core$IFn$_invoke$arity$1(true) : set_collapsed_item.call(null,true));


var G__29363 = seq__29332;
var G__29364 = chunk__29333;
var G__29365 = count__29334;
var G__29366 = (i__29335 + (1));
seq__29332 = G__29363;
chunk__29333 = G__29364;
count__29334 = G__29365;
i__29335 = G__29366;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__29332);
if(temp__5753__auto__){
var seq__29332__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29332__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__29332__$1);
var G__29367 = cljs.core.chunk_rest(seq__29332__$1);
var G__29368 = c__4638__auto__;
var G__29369 = cljs.core.count(c__4638__auto__);
var G__29370 = (0);
seq__29332 = G__29367;
chunk__29333 = G__29368;
count__29334 = G__29369;
i__29335 = G__29370;
continue;
} else {
var vec__29345 = cljs.core.first(seq__29332__$1);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29345,(0),null);
var set_collapsed_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29345,(1),null);
(set_collapsed_item.cljs$core$IFn$_invoke$arity$1 ? set_collapsed_item.cljs$core$IFn$_invoke$arity$1(true) : set_collapsed_item.call(null,true));


var G__29371 = cljs.core.next(seq__29332__$1);
var G__29372 = null;
var G__29373 = (0);
var G__29374 = (0);
seq__29332 = G__29371;
chunk__29333 = G__29372;
count__29334 = G__29373;
i__29335 = G__29374;
continue;
}
} else {
return null;
}
}
break;
}
})):(with_let29313[(4)]));
var item_STAR_ = ((((init29314) || (cljs.core.not(with_let29313.hasOwnProperty((5))))))?(with_let29313[(5)] = (function (node){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.item,node,item_index], null);
})):(with_let29313[(5)]));
var unrenderable_QMARK_ = ((((init29314) || (cljs.core.not(with_let29313.hasOwnProperty((6))))))?(with_let29313[(6)] = (function (p1__29312_SHARP_){
return cljs.core.cst$kw$as_DASH_is_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__29312_SHARP_));
})):(with_let29313[(6)]));
var res29315 = (function (){var map__29348 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_resolved_DASH_selected_DASH_item,item_index], null)));
var map__29348__$1 = cljs.core.__destructure_map(map__29348);
var selected_item = map__29348__$1;
var ingredients = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29348__$1,cljs.core.cst$kw$ingredients);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29348__$1,cljs.core.cst$kw$id);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$bg_DASH_inherit$flex$flex_DASH_col$gap_DASH_10$items_DASH_center,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,nw_calculator.components.collapsible_tree.component.collapsible_list_provider,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$set_DASH_collapsed_DASH_updater,set_collapsed_updater_BANG_,cljs.core.cst$kw$unset_DASH_collapsed_DASH_updater,unset_collapsed_updater_BANG_], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.collapsible_tree_component,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$tree_DASH_map,selected_item,cljs.core.cst$kw$children,cljs.core.cst$kw$ingredients,cljs.core.cst$kw$make_DASH_node,item_STAR_,cljs.core.cst$kw$ignore_QMARK_,unrenderable_QMARK_], null)], null)], null),(cljs.core.truth_(cljs.core.not_empty(ingredients))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$flex$gap_DASH_6,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$button$button_DASH_outline$w_DASH_52$md_COLON_w_DASH_60,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,expand_all_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fas$fa_DASH_expand_DASH_arrows], null)," Expand all"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$button$button_DASH_outline$w_DASH_52$md_COLON_w_DASH_60,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,collapse_all_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fas$fa_DASH_compress_DASH_arrows_DASH_alt], null)," Collapse all"], null)], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,id], null));
})();
return res29315;
});
nw_calculator.views.delete_item_button = (function nw_calculator$views$delete_item_button(item_index){
var with_let29375 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let29375);
var temp__5757__auto___29378 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___29378 == null)){
} else {
var c__13075__auto___29379 = temp__5757__auto___29378;
if((with_let29375.generation === c__13075__auto___29379.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let29375.generation = c__13075__auto___29379.ratomGeneration);
}

var init29376 = (with_let29375.length === (0));
var delete_item_BANG_ = ((((init29376) || (cljs.core.not(with_let29375.hasOwnProperty((0))))))?(with_let29375[(0)] = (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_delete_DASH_item,item_index], null));
})):(with_let29375[(0)]));
var res29377 = (function (){var num_selected_items = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_num_DASH_selected_DASH_items], null)));
var disable_delete_button_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),num_selected_items);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.circular_button_component,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,"absolute text-xl top-2 right-0 border-0 flex-none",cljs.core.cst$kw$disabled,disable_delete_button_QMARK_,cljs.core.cst$kw$on_DASH_click,delete_item_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fas$fa_DASH_trash], null)], null);
})();
return res29377;
});
nw_calculator.views.item_cards = (function nw_calculator$views$item_cards(){
var num_selected_items = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_num_DASH_selected_DASH_items], null)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_,(function (){var iter__4611__auto__ = (function nw_calculator$views$item_cards_$_iter__29380(s__29381){
return (new cljs.core.LazySeq(null,(function (){
var s__29381__$1 = s__29381;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__29381__$1);
if(temp__5753__auto__){
var s__29381__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29381__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__29381__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__29383 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__29382 = (0);
while(true){
if((i__29382 < size__4610__auto__)){
var item_index = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4609__auto__,i__29382);
cljs.core.chunk_append(b__29383,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.card_component,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.delete_item_button,item_index], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.searchable_item_tree,item_index], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,item_index], null)));

var G__29384 = (i__29382 + (1));
i__29382 = G__29384;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29383),nw_calculator$views$item_cards_$_iter__29380(cljs.core.chunk_rest(s__29381__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29383),null);
}
} else {
var item_index = cljs.core.first(s__29381__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.card_component,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.delete_item_button,item_index], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.searchable_item_tree,item_index], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,item_index], null)),nw_calculator$views$item_cards_$_iter__29380(cljs.core.rest(s__29381__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(num_selected_items));
})()], null);
});
nw_calculator.views.actions = (function nw_calculator$views$actions(){
var with_let29385 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let29385);
var temp__5757__auto___29388 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___29388 == null)){
} else {
var c__13075__auto___29389 = temp__5757__auto___29388;
if((with_let29385.generation === c__13075__auto___29389.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let29385.generation = c__13075__auto___29389.ratomGeneration);
}

var init29386 = (with_let29385.length === (0));
var add_empty_item_BANG_ = ((((init29386) || (cljs.core.not(with_let29385.hasOwnProperty((0))))))?(with_let29385[(0)] = (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_add_DASH_empty_DASH_item], null));
})):(with_let29385[(0)]));
var remove_items_BANG_ = ((((init29386) || (cljs.core.not(with_let29385.hasOwnProperty((1))))))?(with_let29385[(1)] = (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_remove_DASH_all_DASH_items], null));
})):(with_let29385[(1)]));
var res29387 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$flex$gap_DASH_6$md_COLON_gap_DASH_8$flex_DASH_wrap$justify_DASH_center,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$button$w_DASH_64,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,add_empty_item_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fas$fa_DASH_plus_DASH_circle], null)," Add another item"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$button$w_DASH_64,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,remove_items_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fas$fa_DASH_trash], null)," Remove all items"], null)], null);
return res29387;
});
nw_calculator.views.header = (function nw_calculator$views$header(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$flex$flex_DASH_col$items_DASH_center,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1$text_DASH_14$md_COLON_text_DASH_7xl_DASH_imp$text_DASH_center$animate__animated$animate__fadeIn$animate__slower,"New World"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3$text_DASH_8$md_COLON_text_DASH_5xl_DASH_imp$text_DASH_center$animate__animated$animate__fadeIn$animate__slower$animate__delay_DASH_1s,"Crafting Calculator"], null)], null);
});
nw_calculator.views.body = (function nw_calculator$views$body(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$relative$z_DASH_30$flex_DASH_grow$flex$gap_DASH_14$flex_DASH_col$items_DASH_center$flex_DASH_col$animate__animated$animate__fadeIn$animate__slower$animate__delay_DASH_1s,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.item_cards], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.actions], null)], null);
});
nw_calculator.views.footer = (function nw_calculator$views$footer(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$relative$z_DASH_10$py_DASH_4$flex$flex$gap_DASH_5$justify_DASH_center$text_DASH_4xl,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$color_DASH_off_DASH_white$text_DASH_base$absolute$left_DASH_4$bottom_DASH_4,nw_calculator.config.version], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$cursor_DASH_pointer,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"https://github.com/sansarip/nw-calculator",cljs.core.cst$kw$target,"_blank"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fab$fa_DASH_github], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$cursor_DASH_pointer,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"https://discord.gg/FCqzwycR23",cljs.core.cst$kw$target,"_blank"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fab$fa_DASH_discord], null)], null)], null);
});
nw_calculator.views.loader = (function nw_calculator$views$loader(){
if(cljs.core.truth_(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_loading_QMARK_], null))))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$absolute$z_DASH_50$h_DASH_full$w_DASH_full$flex$flex_DASH_col$gap_DASH_4$items_DASH_center,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.loader_component,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"fa-6x pt-72"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,"Steering ship"], null)], null);
} else {
return null;
}
});
nw_calculator.views.background = (function nw_calculator$views$background(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$absolute$z_DASH_10$bg_DASH_inherit$w_DASH_full$h_DASH_full], null);
});
nw_calculator.views.background_image = (function nw_calculator$views$background_image(){
var start_animation_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_ready_QMARK_], null)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img$absolute$z_DASH_0$w_DASH_full$h_DASH_full$object_DASH_cover,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,"https://i.gyazo.com/599d57716f081f1e4e6a8b61f4155981.jpg",cljs.core.cst$kw$class,nw_calculator.styles.background_image_class(start_animation_QMARK_)], null)], null);
});
nw_calculator.views.content = (function nw_calculator$views$content(){
var show_content_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_ready_QMARK_], null)));
if(cljs.core.truth_(show_content_QMARK_)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$relative$h_DASH_full$z_DASH_30$flex$flex_DASH_col$gap_DASH_20$pt_DASH_40$overflow_DASH_y_DASH_auto,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.header], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.body], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.footer], null)], null);
} else {
return null;
}
});
nw_calculator.views.main_panel = (function nw_calculator$views$main_panel(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$z_DASH_10$absolute$bg_DASH_opacity_DASH_75$relative$h_DASH_screen$dark$bg_DASH_raisin_DASH_black,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.loader], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.background], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.background_image], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.content], null)], null);
});
