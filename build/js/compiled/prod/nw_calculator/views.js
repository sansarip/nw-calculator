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
goog.require('nw_calculator.components.item.component');
nw_calculator.views.global$module$react = goog.global["React"];
nw_calculator.views.basic_item = (function nw_calculator$views$basic_item(item_map){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.item_component,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$item_DASH_map,item_map,cljs.core.cst$kw$custom_DASH_quantity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_], null)], null)], null);
});
nw_calculator.views.search = (function nw_calculator$views$search(item_index){
var with_let29329 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let29329);
var temp__5757__auto___29333 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___29333 == null)){
} else {
var c__13075__auto___29334 = temp__5757__auto___29333;
if((with_let29329.generation === c__13075__auto___29334.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let29329.generation = c__13075__auto___29334.ratomGeneration);
}

var init29330 = (with_let29329.length === (0));
var search_BANG_ = ((((init29330) || (cljs.core.not(with_let29329.hasOwnProperty((0))))))?(with_let29329[(0)] = nw_calculator.utilities.debounce((function (query){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_search,item_index,query], null));
}),(100))):(with_let29329[(0)]));
var select_item_BANG_ = ((((init29330) || (cljs.core.not(with_let29329.hasOwnProperty((1))))))?(with_let29329[(1)] = (function (item){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_select_DASH_item,item_index,item], null));
})):(with_let29329[(1)]));
var clear_search_BANG_ = ((((init29330) || (cljs.core.not(with_let29329.hasOwnProperty((2))))))?(with_let29329[(2)] = (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_clear_DASH_search,item_index], null));
})):(with_let29329[(2)]));
var res29331 = (function (){var results = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_search_DASH_results,item_index], null)));
var map__29332 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_resolved_DASH_selected_DASH_item,item_index], null)));
var map__29332__$1 = cljs.core.__destructure_map(map__29332);
var item_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29332__$1,cljs.core.cst$kw$name);
var searching_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_searching_QMARK_], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$f_GT_,nw_calculator.components.search_component,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$results,results,cljs.core.cst$kw$input_DASH_props,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$placeholder,"\uD83D\uDD0D Search for an item",cljs.core.cst$kw$default_DASH_value,item_name], null),cljs.core.cst$kw$get_DASH_value,cljs.core.cst$kw$name,cljs.core.cst$kw$make_DASH_result,nw_calculator.views.basic_item,cljs.core.cst$kw$on_DASH_search,search_BANG_,cljs.core.cst$kw$loading_QMARK_,searching_QMARK_,cljs.core.cst$kw$on_DASH_clear,clear_search_BANG_,cljs.core.cst$kw$on_DASH_select,select_item_BANG_], null)], null);
})();
return res29331;
});
nw_calculator.views.dropdown = (function nw_calculator$views$dropdown(p__29335){
var map__29336 = p__29335;
var map__29336__$1 = cljs.core.__destructure_map(map__29336);
var selected_option_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29336__$1,cljs.core.cst$kw$name);
var category_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29336__$1,cljs.core.cst$kw$path);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29336__$1,cljs.core.cst$kw$options);
var category_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29336__$1,cljs.core.cst$kw$category_DASH_name);
var with_let29337 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let29337);
var temp__5757__auto___29342 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___29342 == null)){
} else {
var c__13075__auto___29343 = temp__5757__auto___29342;
if((with_let29337.generation === c__13075__auto___29343.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let29337.generation = c__13075__auto___29343.ratomGeneration);
}

var init29338 = (with_let29337.length === (0));
var select_option_BANG_ = ((((init29338) || (cljs.core.not(with_let29337.hasOwnProperty((0))))))?(with_let29337[(0)] = (function (p__29340){
var map__29341 = p__29340;
var map__29341__$1 = cljs.core.__destructure_map(map__29341);
var option_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29341__$1,cljs.core.cst$kw$path);
var selected_option = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_item_DASH_in_DASH_resolved_DASH_selected_DASH_item,option_path], null)));
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_select_DASH_option,category_path,selected_option], null));
})):(with_let29337[(0)]));
var res29339 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$f_GT_,nw_calculator.components.dropdown_component,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$input_DASH_props,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$placeholder,category_name,cljs.core.cst$kw$default_DASH_value,selected_option_name], null),cljs.core.cst$kw$on_DASH_select,select_option_BANG_,cljs.core.cst$kw$container_DASH_props,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"bg-white"], null),cljs.core.cst$kw$make_DASH_option,nw_calculator.views.basic_item,cljs.core.cst$kw$get_DASH_value,cljs.core.cst$kw$name,cljs.core.cst$kw$options,options], null)], null);
return res29339;
});
nw_calculator.views.custom_item_quantity = (function nw_calculator$views$custom_item_quantity(p__29344){
var map__29345 = p__29344;
var map__29345__$1 = cljs.core.__destructure_map(map__29345);
var editable_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29345__$1,cljs.core.cst$kw$editable_QMARK_);
var quantity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29345__$1,cljs.core.cst$kw$quantity);
var item_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29345__$1,cljs.core.cst$kw$item_DASH_index);
var with_let29346 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let29346);
var temp__5757__auto___29349 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___29349 == null)){
} else {
var c__13075__auto___29350 = temp__5757__auto___29349;
if((with_let29346.generation === c__13075__auto___29350.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let29346.generation = c__13075__auto___29350.ratomGeneration);
}

var init29347 = (with_let29346.length === (0));
var set_quantity_multiplier_BANG_ = ((((init29347) || (cljs.core.not(with_let29346.hasOwnProperty((0))))))?(with_let29346[(0)] = (function (event){
var multiplier = nw_calculator.utilities.parse_pos.cljs$core$IFn$_invoke$arity$1(event.target.value);
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_set_DASH_quantity_DASH_multiplier,item_index,multiplier], null));
})):(with_let29346[(0)]));
var min_quantity_multiplier = ((((init29347) || (cljs.core.not(with_let29346.hasOwnProperty((1))))))?(with_let29346[(1)] = (1)):(with_let29346[(1)]));
var res29348 = (function (){var quantity_multiplier_STAR_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_quantity_DASH_multiplier,item_index], null)));
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$basic_DASH_input$w_DASH_12_DASH_imp,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$number,cljs.core.cst$kw$default_DASH_value,quantity_multiplier,cljs.core.cst$kw$placeholder,min_quantity_multiplier,cljs.core.cst$kw$on_DASH_input,set_quantity_multiplier_BANG_], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,quantity], null);

}
}
})();
return res29348;
});
nw_calculator.views.custom_item_name = (function nw_calculator$views$custom_item_name(p__29351){
var map__29352 = p__29351;
var map__29352__$1 = cljs.core.__destructure_map(map__29352);
var map__29353 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29352__$1,cljs.core.cst$kw$node_DASH_data);
var map__29353__$1 = cljs.core.__destructure_map(map__29353);
var map__29354 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29353__$1,cljs.core.cst$kw$node);
var map__29354__$1 = cljs.core.__destructure_map(map__29354);
var item_map = map__29354__$1;
var name_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29354__$1,cljs.core.cst$kw$name);
var external_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29354__$1,cljs.core.cst$kw$external_DASH_url);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29354__$1,cljs.core.cst$kw$options);
var root_node_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29353__$1,cljs.core.cst$kw$root_DASH_node_QMARK_);
var item_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29352__$1,cljs.core.cst$kw$item_DASH_index);
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
nw_calculator.views.custom_item_images = (function nw_calculator$views$custom_item_images(image_urls){
var with_let29355 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let29355);
var temp__5757__auto___29358 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___29358 == null)){
} else {
var c__13075__auto___29359 = temp__5757__auto___29358;
if((with_let29355.generation === c__13075__auto___29359.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let29355.generation = c__13075__auto___29359.ratomGeneration);
}

var init29356 = (with_let29355.length === (0));
var image_with_popup = ((((init29356) || (cljs.core.not(with_let29355.hasOwnProperty((0))))))?(with_let29355[(0)] = (function (url){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$f_GT_,nw_calculator.components.item.component.image_with_popup,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,url], null)], null);
})):(with_let29355[(0)]));
var res29357 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$flex$flex_DASH_grow$gap_DASH_4,cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_], null),cljs.core.map.cljs$core$IFn$_invoke$arity$1(image_with_popup),image_urls)], null);
return res29357;
});
nw_calculator.views.item = (function nw_calculator$views$item(p__29360,item_index){
var map__29361 = p__29360;
var map__29361__$1 = cljs.core.__destructure_map(map__29361);
var node_data = map__29361__$1;
var map__29362 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29361__$1,cljs.core.cst$kw$node);
var map__29362__$1 = cljs.core.__destructure_map(map__29362);
var item_map = map__29362__$1;
var quantity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29362__$1,cljs.core.cst$kw$quantity);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29362__$1,cljs.core.cst$kw$path);
var root_node_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29361__$1,cljs.core.cst$kw$root_DASH_node_QMARK_);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.item_component,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$popup_DASH_on_DASH_hover_QMARK_,true,cljs.core.cst$kw$container_DASH_props,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,["m-0-imp",(cljs.core.truth_(root_node_QMARK_)?" bg-inherit":null)].join('')], null),cljs.core.cst$kw$item_DASH_map,item_map,cljs.core.cst$kw$custom_DASH_quantity,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.custom_item_quantity,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$editable_QMARK_,root_node_QMARK_,cljs.core.cst$kw$quantity,quantity,cljs.core.cst$kw$item_DASH_index,item_index], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,"quantity")], null)),cljs.core.cst$kw$custom_DASH_name,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.custom_item_name,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$node_DASH_data,node_data,cljs.core.cst$kw$item_DASH_index,item_index], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,path], null))], null)], null);
});
nw_calculator.views.searchable_item_tree = (function nw_calculator$views$searchable_item_tree(item_index){
var with_let29364 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let29364);
var temp__5757__auto___29400 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___29400 == null)){
} else {
var c__13075__auto___29401 = temp__5757__auto___29400;
if((with_let29364.generation === c__13075__auto___29401.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let29364.generation = c__13075__auto___29401.ratomGeneration);
}

var init29365 = (with_let29364.length === (0));
var collapsed_item_updaters = ((((init29365) || (cljs.core.not(with_let29364.hasOwnProperty((0))))))?(with_let29364[(0)] = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY)):(with_let29364[(0)]));
var set_collapsed_updater_BANG_ = ((((init29365) || (cljs.core.not(with_let29364.hasOwnProperty((1))))))?(with_let29364[(1)] = (function (id,updater){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(collapsed_item_updaters,cljs.core.assoc,id,updater);
})):(with_let29364[(1)]));
var unset_collapsed_updater_BANG_ = ((((init29365) || (cljs.core.not(with_let29364.hasOwnProperty((2))))))?(with_let29364[(2)] = (function (id){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(collapsed_item_updaters,cljs.core.dissoc,id);
})):(with_let29364[(2)]));
var expand_all_BANG_ = ((((init29365) || (cljs.core.not(with_let29364.hasOwnProperty((3))))))?(with_let29364[(3)] = (function (){
var seq__29367 = cljs.core.seq(cljs.core.deref(collapsed_item_updaters));
var chunk__29368 = null;
var count__29369 = (0);
var i__29370 = (0);
while(true){
if((i__29370 < count__29369)){
var vec__29377 = chunk__29368.cljs$core$IIndexed$_nth$arity$2(null,i__29370);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29377,(0),null);
var set_collapsed_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29377,(1),null);
(set_collapsed_item.cljs$core$IFn$_invoke$arity$1 ? set_collapsed_item.cljs$core$IFn$_invoke$arity$1(false) : set_collapsed_item.call(null,false));


var G__29402 = seq__29367;
var G__29403 = chunk__29368;
var G__29404 = count__29369;
var G__29405 = (i__29370 + (1));
seq__29367 = G__29402;
chunk__29368 = G__29403;
count__29369 = G__29404;
i__29370 = G__29405;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__29367);
if(temp__5753__auto__){
var seq__29367__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29367__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__29367__$1);
var G__29406 = cljs.core.chunk_rest(seq__29367__$1);
var G__29407 = c__4638__auto__;
var G__29408 = cljs.core.count(c__4638__auto__);
var G__29409 = (0);
seq__29367 = G__29406;
chunk__29368 = G__29407;
count__29369 = G__29408;
i__29370 = G__29409;
continue;
} else {
var vec__29380 = cljs.core.first(seq__29367__$1);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29380,(0),null);
var set_collapsed_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29380,(1),null);
(set_collapsed_item.cljs$core$IFn$_invoke$arity$1 ? set_collapsed_item.cljs$core$IFn$_invoke$arity$1(false) : set_collapsed_item.call(null,false));


var G__29410 = cljs.core.next(seq__29367__$1);
var G__29411 = null;
var G__29412 = (0);
var G__29413 = (0);
seq__29367 = G__29410;
chunk__29368 = G__29411;
count__29369 = G__29412;
i__29370 = G__29413;
continue;
}
} else {
return null;
}
}
break;
}
})):(with_let29364[(3)]));
var collapse_all_BANG_ = ((((init29365) || (cljs.core.not(with_let29364.hasOwnProperty((4))))))?(with_let29364[(4)] = (function (){
var seq__29383 = cljs.core.seq(cljs.core.deref(collapsed_item_updaters));
var chunk__29384 = null;
var count__29385 = (0);
var i__29386 = (0);
while(true){
if((i__29386 < count__29385)){
var vec__29393 = chunk__29384.cljs$core$IIndexed$_nth$arity$2(null,i__29386);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29393,(0),null);
var set_collapsed_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29393,(1),null);
(set_collapsed_item.cljs$core$IFn$_invoke$arity$1 ? set_collapsed_item.cljs$core$IFn$_invoke$arity$1(true) : set_collapsed_item.call(null,true));


var G__29414 = seq__29383;
var G__29415 = chunk__29384;
var G__29416 = count__29385;
var G__29417 = (i__29386 + (1));
seq__29383 = G__29414;
chunk__29384 = G__29415;
count__29385 = G__29416;
i__29386 = G__29417;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__29383);
if(temp__5753__auto__){
var seq__29383__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29383__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__29383__$1);
var G__29418 = cljs.core.chunk_rest(seq__29383__$1);
var G__29419 = c__4638__auto__;
var G__29420 = cljs.core.count(c__4638__auto__);
var G__29421 = (0);
seq__29383 = G__29418;
chunk__29384 = G__29419;
count__29385 = G__29420;
i__29386 = G__29421;
continue;
} else {
var vec__29396 = cljs.core.first(seq__29383__$1);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29396,(0),null);
var set_collapsed_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29396,(1),null);
(set_collapsed_item.cljs$core$IFn$_invoke$arity$1 ? set_collapsed_item.cljs$core$IFn$_invoke$arity$1(true) : set_collapsed_item.call(null,true));


var G__29422 = cljs.core.next(seq__29383__$1);
var G__29423 = null;
var G__29424 = (0);
var G__29425 = (0);
seq__29383 = G__29422;
chunk__29384 = G__29423;
count__29385 = G__29424;
i__29386 = G__29425;
continue;
}
} else {
return null;
}
}
break;
}
})):(with_let29364[(4)]));
var item_STAR_ = ((((init29365) || (cljs.core.not(with_let29364.hasOwnProperty((5))))))?(with_let29364[(5)] = (function (node){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.item,node,item_index], null);
})):(with_let29364[(5)]));
var unrenderable_QMARK_ = ((((init29365) || (cljs.core.not(with_let29364.hasOwnProperty((6))))))?(with_let29364[(6)] = (function (p1__29363_SHARP_){
return cljs.core.cst$kw$as_DASH_is_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__29363_SHARP_));
})):(with_let29364[(6)]));
var res29366 = (function (){var map__29399 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_resolved_DASH_selected_DASH_item,item_index], null)));
var map__29399__$1 = cljs.core.__destructure_map(map__29399);
var selected_item = map__29399__$1;
var ingredients = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29399__$1,cljs.core.cst$kw$ingredients);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29399__$1,cljs.core.cst$kw$id);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$bg_DASH_inherit$flex$flex_DASH_col$gap_DASH_10$items_DASH_center,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,nw_calculator.components.collapsible_tree.component.collapsible_list_provider,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$set_DASH_collapsed_DASH_updater,set_collapsed_updater_BANG_,cljs.core.cst$kw$unset_DASH_collapsed_DASH_updater,unset_collapsed_updater_BANG_], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.collapsible_tree_component,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$tree_DASH_map,selected_item,cljs.core.cst$kw$children,cljs.core.cst$kw$ingredients,cljs.core.cst$kw$make_DASH_node,item_STAR_,cljs.core.cst$kw$ignore_QMARK_,unrenderable_QMARK_], null)], null)], null),(cljs.core.truth_(cljs.core.not_empty(ingredients))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$flex$gap_DASH_6,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$button$button_DASH_outline$w_DASH_52$md_COLON_w_DASH_60,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,expand_all_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fas$fa_DASH_expand_DASH_arrows], null)," Expand all"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$button$button_DASH_outline$w_DASH_52$md_COLON_w_DASH_60,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,collapse_all_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fas$fa_DASH_compress_DASH_arrows_DASH_alt], null)," Collapse all"], null)], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,id], null));
})();
return res29366;
});
nw_calculator.views.summary_item_tree = (function nw_calculator$views$summary_item_tree(){
var with_let29427 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let29427);
var temp__5757__auto___29466 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___29466 == null)){
} else {
var c__13075__auto___29467 = temp__5757__auto___29466;
if((with_let29427.generation === c__13075__auto___29467.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let29427.generation = c__13075__auto___29467.ratomGeneration);
}

var init29428 = (with_let29427.length === (0));
var collapsed_item_updaters = ((((init29428) || (cljs.core.not(with_let29427.hasOwnProperty((0))))))?(with_let29427[(0)] = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY)):(with_let29427[(0)]));
var set_collapsed_updater_BANG_ = ((((init29428) || (cljs.core.not(with_let29427.hasOwnProperty((1))))))?(with_let29427[(1)] = (function (id,updater){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(collapsed_item_updaters,cljs.core.assoc,id,updater);
})):(with_let29427[(1)]));
var unset_collapsed_updater_BANG_ = ((((init29428) || (cljs.core.not(with_let29427.hasOwnProperty((2))))))?(with_let29427[(2)] = (function (id){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(collapsed_item_updaters,cljs.core.dissoc,id);
})):(with_let29427[(2)]));
var expand_all_BANG_ = ((((init29428) || (cljs.core.not(with_let29427.hasOwnProperty((3))))))?(with_let29427[(3)] = (function (){
var seq__29430 = cljs.core.seq(cljs.core.deref(collapsed_item_updaters));
var chunk__29431 = null;
var count__29432 = (0);
var i__29433 = (0);
while(true){
if((i__29433 < count__29432)){
var vec__29440 = chunk__29431.cljs$core$IIndexed$_nth$arity$2(null,i__29433);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29440,(0),null);
var set_collapsed_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29440,(1),null);
(set_collapsed_item.cljs$core$IFn$_invoke$arity$1 ? set_collapsed_item.cljs$core$IFn$_invoke$arity$1(false) : set_collapsed_item.call(null,false));


var G__29468 = seq__29430;
var G__29469 = chunk__29431;
var G__29470 = count__29432;
var G__29471 = (i__29433 + (1));
seq__29430 = G__29468;
chunk__29431 = G__29469;
count__29432 = G__29470;
i__29433 = G__29471;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__29430);
if(temp__5753__auto__){
var seq__29430__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29430__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__29430__$1);
var G__29472 = cljs.core.chunk_rest(seq__29430__$1);
var G__29473 = c__4638__auto__;
var G__29474 = cljs.core.count(c__4638__auto__);
var G__29475 = (0);
seq__29430 = G__29472;
chunk__29431 = G__29473;
count__29432 = G__29474;
i__29433 = G__29475;
continue;
} else {
var vec__29443 = cljs.core.first(seq__29430__$1);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29443,(0),null);
var set_collapsed_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29443,(1),null);
(set_collapsed_item.cljs$core$IFn$_invoke$arity$1 ? set_collapsed_item.cljs$core$IFn$_invoke$arity$1(false) : set_collapsed_item.call(null,false));


var G__29476 = cljs.core.next(seq__29430__$1);
var G__29477 = null;
var G__29478 = (0);
var G__29479 = (0);
seq__29430 = G__29476;
chunk__29431 = G__29477;
count__29432 = G__29478;
i__29433 = G__29479;
continue;
}
} else {
return null;
}
}
break;
}
})):(with_let29427[(3)]));
var collapse_all_BANG_ = ((((init29428) || (cljs.core.not(with_let29427.hasOwnProperty((4))))))?(with_let29427[(4)] = (function (){
var seq__29446 = cljs.core.seq(cljs.core.deref(collapsed_item_updaters));
var chunk__29447 = null;
var count__29448 = (0);
var i__29449 = (0);
while(true){
if((i__29449 < count__29448)){
var vec__29456 = chunk__29447.cljs$core$IIndexed$_nth$arity$2(null,i__29449);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29456,(0),null);
var set_collapsed_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29456,(1),null);
(set_collapsed_item.cljs$core$IFn$_invoke$arity$1 ? set_collapsed_item.cljs$core$IFn$_invoke$arity$1(true) : set_collapsed_item.call(null,true));


var G__29480 = seq__29446;
var G__29481 = chunk__29447;
var G__29482 = count__29448;
var G__29483 = (i__29449 + (1));
seq__29446 = G__29480;
chunk__29447 = G__29481;
count__29448 = G__29482;
i__29449 = G__29483;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__29446);
if(temp__5753__auto__){
var seq__29446__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29446__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__29446__$1);
var G__29484 = cljs.core.chunk_rest(seq__29446__$1);
var G__29485 = c__4638__auto__;
var G__29486 = cljs.core.count(c__4638__auto__);
var G__29487 = (0);
seq__29446 = G__29484;
chunk__29447 = G__29485;
count__29448 = G__29486;
i__29449 = G__29487;
continue;
} else {
var vec__29459 = cljs.core.first(seq__29446__$1);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29459,(0),null);
var set_collapsed_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29459,(1),null);
(set_collapsed_item.cljs$core$IFn$_invoke$arity$1 ? set_collapsed_item.cljs$core$IFn$_invoke$arity$1(true) : set_collapsed_item.call(null,true));


var G__29488 = cljs.core.next(seq__29446__$1);
var G__29489 = null;
var G__29490 = (0);
var G__29491 = (0);
seq__29446 = G__29488;
chunk__29447 = G__29489;
count__29448 = G__29490;
i__29449 = G__29491;
continue;
}
} else {
return null;
}
}
break;
}
})):(with_let29427[(4)]));
var item_STAR_ = ((((init29428) || (cljs.core.not(with_let29427.hasOwnProperty((5))))))?(with_let29427[(5)] = (function (p__29462){
var map__29463 = p__29462;
var map__29463__$1 = cljs.core.__destructure_map(map__29463);
var map__29464 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29463__$1,cljs.core.cst$kw$node);
var map__29464__$1 = cljs.core.__destructure_map(map__29464);
var item_map = map__29464__$1;
var png_urls = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29464__$1,cljs.core.cst$kw$png_DASH_urls);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.item_component,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$item_DASH_map,item_map,cljs.core.cst$kw$popup_DASH_on_DASH_hover_QMARK_,true,cljs.core.cst$kw$custom_DASH_image,(cljs.core.truth_(png_urls)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.custom_item_images,png_urls], null):null)], null)], null);
})):(with_let29427[(5)]));
var unrenderable_QMARK_ = ((((init29428) || (cljs.core.not(with_let29427.hasOwnProperty((6))))))?(with_let29427[(6)] = (function (p1__29426_SHARP_){
return cljs.core.cst$kw$as_DASH_is_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__29426_SHARP_));
})):(with_let29427[(6)]));
var res29429 = (function (){var temp__5751__auto__ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_selected_DASH_items_DASH_summary], null)));
if(cljs.core.truth_(temp__5751__auto__)){
var map__29465 = temp__5751__auto__;
var map__29465__$1 = cljs.core.__destructure_map(map__29465);
var selected_item = map__29465__$1;
var ingredients = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29465__$1,cljs.core.cst$kw$ingredients);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29465__$1,cljs.core.cst$kw$id);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$bg_DASH_inherit$flex$flex_DASH_col$gap_DASH_10$items_DASH_center,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,nw_calculator.components.collapsible_tree.component.collapsible_list_provider,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$set_DASH_collapsed_DASH_updater,set_collapsed_updater_BANG_,cljs.core.cst$kw$unset_DASH_collapsed_DASH_updater,unset_collapsed_updater_BANG_], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.collapsible_tree_component,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$tree_DASH_map,selected_item,cljs.core.cst$kw$children,cljs.core.cst$kw$ingredients,cljs.core.cst$kw$make_DASH_node,item_STAR_,cljs.core.cst$kw$ignore_QMARK_,unrenderable_QMARK_], null)], null)], null),(cljs.core.truth_(cljs.core.not_empty(ingredients))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$flex$gap_DASH_6,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$button$button_DASH_outline$w_DASH_52$md_COLON_w_DASH_60,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,expand_all_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fas$fa_DASH_expand_DASH_arrows], null)," Expand all"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$button$button_DASH_outline$w_DASH_52$md_COLON_w_DASH_60,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,collapse_all_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fas$fa_DASH_compress_DASH_arrows_DASH_alt], null)," Collapse all"], null)], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,id], null));
} else {
return null;
}
})();
return res29429;
});
nw_calculator.views.delete_item_button = (function nw_calculator$views$delete_item_button(item_index){
var with_let29492 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let29492);
var temp__5757__auto___29495 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___29495 == null)){
} else {
var c__13075__auto___29496 = temp__5757__auto___29495;
if((with_let29492.generation === c__13075__auto___29496.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let29492.generation = c__13075__auto___29496.ratomGeneration);
}

var init29493 = (with_let29492.length === (0));
var delete_item_BANG_ = ((((init29493) || (cljs.core.not(with_let29492.hasOwnProperty((0))))))?(with_let29492[(0)] = (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_remove_DASH_item,item_index], null));
})):(with_let29492[(0)]));
var res29494 = (function (){var num_selected_items = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_num_DASH_selected_DASH_items], null)));
var disable_delete_button_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),num_selected_items);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.circular_button_component,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,"absolute text-xl top-2 right-0 border-0 flex-none",cljs.core.cst$kw$disabled,disable_delete_button_QMARK_,cljs.core.cst$kw$on_DASH_click,delete_item_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fas$fa_DASH_trash], null)], null);
})();
return res29494;
});
nw_calculator.views.item_cards = (function nw_calculator$views$item_cards(){
var num_selected_items = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_num_DASH_selected_DASH_items], null)));
var num_resolved_selected_items = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_num_DASH_resolved_DASH_selected_DASH_items], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_,(function (){var iter__4611__auto__ = (function nw_calculator$views$item_cards_$_iter__29497(s__29498){
return (new cljs.core.LazySeq(null,(function (){
var s__29498__$1 = s__29498;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__29498__$1);
if(temp__5753__auto__){
var s__29498__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29498__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__29498__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__29500 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__29499 = (0);
while(true){
if((i__29499 < size__4610__auto__)){
var item_index = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4609__auto__,i__29499);
cljs.core.chunk_append(b__29500,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.card_component,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.delete_item_button,item_index], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$bg_DASH_inherit$mt_DASH_2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.searchable_item_tree,item_index], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,item_index], null)));

var G__29501 = (i__29499 + (1));
i__29499 = G__29501;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29500),nw_calculator$views$item_cards_$_iter__29497(cljs.core.chunk_rest(s__29498__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29500),null);
}
} else {
var item_index = cljs.core.first(s__29498__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.card_component,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.delete_item_button,item_index], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$bg_DASH_inherit$mt_DASH_2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.searchable_item_tree,item_index], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,item_index], null)),nw_calculator$views$item_cards_$_iter__29497(cljs.core.rest(s__29498__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(num_selected_items));
})(),(((num_resolved_selected_items > (1)))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.card_component,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$absolute$rounded_DASH_t$top_DASH_0$left_DASH_0$bg_DASH_purple$bg_DASH_opacity_DASH_100$w_DASH_full$h_DASH_24$shadow_DASH_md], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h4$w_DASH_full$absolute$left_DASH_0$top_DASH_7$text_DASH_center$text_DASH_white,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$far$fa_DASH_scroll_DASH_old$mr_DASH_2], null),"Ingredients Summary"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$mt_DASH_20,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.summary_item_tree], null)], null)], null):null)], null);
});
nw_calculator.views.actions = (function nw_calculator$views$actions(){
var with_let29502 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let29502);
var temp__5757__auto___29505 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___29505 == null)){
} else {
var c__13075__auto___29506 = temp__5757__auto___29505;
if((with_let29502.generation === c__13075__auto___29506.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let29502.generation = c__13075__auto___29506.ratomGeneration);
}

var init29503 = (with_let29502.length === (0));
var add_empty_item_BANG_ = ((((init29503) || (cljs.core.not(with_let29502.hasOwnProperty((0))))))?(with_let29502[(0)] = (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_add_DASH_empty_DASH_item], null));
})):(with_let29502[(0)]));
var remove_items_BANG_ = ((((init29503) || (cljs.core.not(with_let29502.hasOwnProperty((1))))))?(with_let29502[(1)] = (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_remove_DASH_all_DASH_items], null));
})):(with_let29502[(1)]));
var res29504 = (function (){var num_items = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_num_DASH_selected_DASH_items], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$flex$gap_DASH_6$md_COLON_gap_DASH_8$flex_DASH_wrap$justify_DASH_center,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$button$w_DASH_64,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,add_empty_item_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fas$fa_DASH_plus_DASH_circle], null)," Add another item"], null),(((num_items > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$button$w_DASH_64,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,remove_items_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fas$fa_DASH_trash], null)," Remove all items"], null):null)], null);
})();
return res29504;
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$absolute$z_DASH_50$h_DASH_full$w_DASH_full$flex$flex_DASH_col$gap_DASH_4$items_DASH_center,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$absolute$top_DASH_72,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.loader_component,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"fa-6x"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3$absolute$top_DASH_120,"Steering ship"], null)], null);
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
