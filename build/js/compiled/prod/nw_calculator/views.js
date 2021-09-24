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
var with_let29297 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let29297);
var temp__5757__auto___29301 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___29301 == null)){
} else {
var c__13075__auto___29302 = temp__5757__auto___29301;
if((with_let29297.generation === c__13075__auto___29302.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let29297.generation = c__13075__auto___29302.ratomGeneration);
}

var init29298 = (with_let29297.length === (0));
var search_BANG_ = ((((init29298) || (cljs.core.not(with_let29297.hasOwnProperty((0))))))?(with_let29297[(0)] = nw_calculator.utilities.debounce((function (query){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_search,item_index,query], null));
}),(100))):(with_let29297[(0)]));
var select_item_BANG_ = ((((init29298) || (cljs.core.not(with_let29297.hasOwnProperty((1))))))?(with_let29297[(1)] = (function (item){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_select_DASH_item,item_index,item], null));
})):(with_let29297[(1)]));
var clear_search_BANG_ = ((((init29298) || (cljs.core.not(with_let29297.hasOwnProperty((2))))))?(with_let29297[(2)] = (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_clear_DASH_search,item_index], null));
})):(with_let29297[(2)]));
var res29299 = (function (){var results = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_search_DASH_results,item_index], null)));
var map__29300 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_resolved_DASH_selected_DASH_item,item_index], null)));
var map__29300__$1 = cljs.core.__destructure_map(map__29300);
var item_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29300__$1,cljs.core.cst$kw$name);
var searching_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_searching_QMARK_], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$f_GT_,nw_calculator.components.search_component,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$results,results,cljs.core.cst$kw$input_DASH_props,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$placeholder,"\uD83D\uDD0D Search for an item",cljs.core.cst$kw$default_DASH_value,item_name], null),cljs.core.cst$kw$get_DASH_value,cljs.core.cst$kw$name,cljs.core.cst$kw$make_DASH_result,nw_calculator.views.basic_item,cljs.core.cst$kw$on_DASH_search,search_BANG_,cljs.core.cst$kw$loading_QMARK_,searching_QMARK_,cljs.core.cst$kw$on_DASH_clear,clear_search_BANG_,cljs.core.cst$kw$on_DASH_select,select_item_BANG_], null)], null);
})();
return res29299;
});
nw_calculator.views.dropdown = (function nw_calculator$views$dropdown(p__29303){
var map__29304 = p__29303;
var map__29304__$1 = cljs.core.__destructure_map(map__29304);
var selected_option_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29304__$1,cljs.core.cst$kw$name);
var category_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29304__$1,cljs.core.cst$kw$path);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29304__$1,cljs.core.cst$kw$options);
var category_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29304__$1,cljs.core.cst$kw$category_DASH_name);
var with_let29305 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let29305);
var temp__5757__auto___29310 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___29310 == null)){
} else {
var c__13075__auto___29311 = temp__5757__auto___29310;
if((with_let29305.generation === c__13075__auto___29311.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let29305.generation = c__13075__auto___29311.ratomGeneration);
}

var init29306 = (with_let29305.length === (0));
var select_option_BANG_ = ((((init29306) || (cljs.core.not(with_let29305.hasOwnProperty((0))))))?(with_let29305[(0)] = (function (p__29308){
var map__29309 = p__29308;
var map__29309__$1 = cljs.core.__destructure_map(map__29309);
var option_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29309__$1,cljs.core.cst$kw$path);
var selected_option = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_item_DASH_in_DASH_resolved_DASH_selected_DASH_item,option_path], null)));
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_select_DASH_option,category_path,selected_option], null));
})):(with_let29305[(0)]));
var res29307 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$f_GT_,nw_calculator.components.dropdown_component,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$input_DASH_props,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$placeholder,category_name,cljs.core.cst$kw$default_DASH_value,selected_option_name], null),cljs.core.cst$kw$on_DASH_select,select_option_BANG_,cljs.core.cst$kw$container_DASH_props,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"bg-white"], null),cljs.core.cst$kw$make_DASH_option,nw_calculator.views.basic_item,cljs.core.cst$kw$get_DASH_value,cljs.core.cst$kw$name,cljs.core.cst$kw$options,options], null)], null);
return res29307;
});
nw_calculator.views.custom_item_quantity = (function nw_calculator$views$custom_item_quantity(p__29312){
var map__29313 = p__29312;
var map__29313__$1 = cljs.core.__destructure_map(map__29313);
var editable_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29313__$1,cljs.core.cst$kw$editable_QMARK_);
var quantity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29313__$1,cljs.core.cst$kw$quantity);
var item_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29313__$1,cljs.core.cst$kw$item_DASH_index);
var with_let29314 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let29314);
var temp__5757__auto___29317 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___29317 == null)){
} else {
var c__13075__auto___29318 = temp__5757__auto___29317;
if((with_let29314.generation === c__13075__auto___29318.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let29314.generation = c__13075__auto___29318.ratomGeneration);
}

var init29315 = (with_let29314.length === (0));
var set_quantity_multiplier_BANG_ = ((((init29315) || (cljs.core.not(with_let29314.hasOwnProperty((0))))))?(with_let29314[(0)] = (function (event){
var multiplier = nw_calculator.utilities.parse_pos.cljs$core$IFn$_invoke$arity$1(event.target.value);
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_set_DASH_quantity_DASH_multiplier,item_index,multiplier], null));
})):(with_let29314[(0)]));
var min_quantity_multiplier = ((((init29315) || (cljs.core.not(with_let29314.hasOwnProperty((1))))))?(with_let29314[(1)] = (1)):(with_let29314[(1)]));
var res29316 = (function (){var quantity_multiplier_STAR_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_quantity_DASH_multiplier,item_index], null)));
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
return res29316;
});
nw_calculator.views.custom_item_name = (function nw_calculator$views$custom_item_name(p__29319){
var map__29320 = p__29319;
var map__29320__$1 = cljs.core.__destructure_map(map__29320);
var map__29321 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29320__$1,cljs.core.cst$kw$node_DASH_data);
var map__29321__$1 = cljs.core.__destructure_map(map__29321);
var map__29322 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29321__$1,cljs.core.cst$kw$node);
var map__29322__$1 = cljs.core.__destructure_map(map__29322);
var item_map = map__29322__$1;
var name_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29322__$1,cljs.core.cst$kw$name);
var external_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29322__$1,cljs.core.cst$kw$external_DASH_url);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29322__$1,cljs.core.cst$kw$options);
var root_node_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29321__$1,cljs.core.cst$kw$root_DASH_node_QMARK_);
var item_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29320__$1,cljs.core.cst$kw$item_DASH_index);
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
var with_let29323 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let29323);
var temp__5757__auto___29326 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___29326 == null)){
} else {
var c__13075__auto___29327 = temp__5757__auto___29326;
if((with_let29323.generation === c__13075__auto___29327.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let29323.generation = c__13075__auto___29327.ratomGeneration);
}

var init29324 = (with_let29323.length === (0));
var image_with_popup = ((((init29324) || (cljs.core.not(with_let29323.hasOwnProperty((0))))))?(with_let29323[(0)] = (function (url){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$f_GT_,nw_calculator.components.item.component.image_with_popup,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,url], null)], null);
})):(with_let29323[(0)]));
var res29325 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$flex$flex_DASH_grow$gap_DASH_4,cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_], null),cljs.core.map.cljs$core$IFn$_invoke$arity$1(image_with_popup),image_urls)], null);
return res29325;
});
nw_calculator.views.item = (function nw_calculator$views$item(p__29328,item_index){
var map__29329 = p__29328;
var map__29329__$1 = cljs.core.__destructure_map(map__29329);
var node_data = map__29329__$1;
var map__29330 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29329__$1,cljs.core.cst$kw$node);
var map__29330__$1 = cljs.core.__destructure_map(map__29330);
var item_map = map__29330__$1;
var quantity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29330__$1,cljs.core.cst$kw$quantity);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29330__$1,cljs.core.cst$kw$path);
var root_node_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29329__$1,cljs.core.cst$kw$root_DASH_node_QMARK_);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.item_component,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$popup_DASH_on_DASH_hover_QMARK_,true,cljs.core.cst$kw$container_DASH_props,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,["m-0-imp",(cljs.core.truth_(root_node_QMARK_)?" bg-inherit":null)].join('')], null),cljs.core.cst$kw$item_DASH_map,item_map,cljs.core.cst$kw$custom_DASH_quantity,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.custom_item_quantity,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$editable_QMARK_,root_node_QMARK_,cljs.core.cst$kw$quantity,quantity,cljs.core.cst$kw$item_DASH_index,item_index], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,"quantity")], null)),cljs.core.cst$kw$custom_DASH_name,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.custom_item_name,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$node_DASH_data,node_data,cljs.core.cst$kw$item_DASH_index,item_index], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,path], null))], null)], null);
});
nw_calculator.views.searchable_item_tree = (function nw_calculator$views$searchable_item_tree(item_index){
var with_let29332 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let29332);
var temp__5757__auto___29368 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___29368 == null)){
} else {
var c__13075__auto___29369 = temp__5757__auto___29368;
if((with_let29332.generation === c__13075__auto___29369.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let29332.generation = c__13075__auto___29369.ratomGeneration);
}

var init29333 = (with_let29332.length === (0));
var collapsed_item_updaters = ((((init29333) || (cljs.core.not(with_let29332.hasOwnProperty((0))))))?(with_let29332[(0)] = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY)):(with_let29332[(0)]));
var set_collapsed_updater_BANG_ = ((((init29333) || (cljs.core.not(with_let29332.hasOwnProperty((1))))))?(with_let29332[(1)] = (function (id,updater){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(collapsed_item_updaters,cljs.core.assoc,id,updater);
})):(with_let29332[(1)]));
var unset_collapsed_updater_BANG_ = ((((init29333) || (cljs.core.not(with_let29332.hasOwnProperty((2))))))?(with_let29332[(2)] = (function (id){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(collapsed_item_updaters,cljs.core.dissoc,id);
})):(with_let29332[(2)]));
var expand_all_BANG_ = ((((init29333) || (cljs.core.not(with_let29332.hasOwnProperty((3))))))?(with_let29332[(3)] = (function (){
var seq__29335 = cljs.core.seq(cljs.core.deref(collapsed_item_updaters));
var chunk__29336 = null;
var count__29337 = (0);
var i__29338 = (0);
while(true){
if((i__29338 < count__29337)){
var vec__29345 = chunk__29336.cljs$core$IIndexed$_nth$arity$2(null,i__29338);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29345,(0),null);
var set_collapsed_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29345,(1),null);
(set_collapsed_item.cljs$core$IFn$_invoke$arity$1 ? set_collapsed_item.cljs$core$IFn$_invoke$arity$1(false) : set_collapsed_item.call(null,false));


var G__29370 = seq__29335;
var G__29371 = chunk__29336;
var G__29372 = count__29337;
var G__29373 = (i__29338 + (1));
seq__29335 = G__29370;
chunk__29336 = G__29371;
count__29337 = G__29372;
i__29338 = G__29373;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__29335);
if(temp__5753__auto__){
var seq__29335__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29335__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__29335__$1);
var G__29374 = cljs.core.chunk_rest(seq__29335__$1);
var G__29375 = c__4638__auto__;
var G__29376 = cljs.core.count(c__4638__auto__);
var G__29377 = (0);
seq__29335 = G__29374;
chunk__29336 = G__29375;
count__29337 = G__29376;
i__29338 = G__29377;
continue;
} else {
var vec__29348 = cljs.core.first(seq__29335__$1);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29348,(0),null);
var set_collapsed_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29348,(1),null);
(set_collapsed_item.cljs$core$IFn$_invoke$arity$1 ? set_collapsed_item.cljs$core$IFn$_invoke$arity$1(false) : set_collapsed_item.call(null,false));


var G__29378 = cljs.core.next(seq__29335__$1);
var G__29379 = null;
var G__29380 = (0);
var G__29381 = (0);
seq__29335 = G__29378;
chunk__29336 = G__29379;
count__29337 = G__29380;
i__29338 = G__29381;
continue;
}
} else {
return null;
}
}
break;
}
})):(with_let29332[(3)]));
var collapse_all_BANG_ = ((((init29333) || (cljs.core.not(with_let29332.hasOwnProperty((4))))))?(with_let29332[(4)] = (function (){
var seq__29351 = cljs.core.seq(cljs.core.deref(collapsed_item_updaters));
var chunk__29352 = null;
var count__29353 = (0);
var i__29354 = (0);
while(true){
if((i__29354 < count__29353)){
var vec__29361 = chunk__29352.cljs$core$IIndexed$_nth$arity$2(null,i__29354);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29361,(0),null);
var set_collapsed_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29361,(1),null);
(set_collapsed_item.cljs$core$IFn$_invoke$arity$1 ? set_collapsed_item.cljs$core$IFn$_invoke$arity$1(true) : set_collapsed_item.call(null,true));


var G__29382 = seq__29351;
var G__29383 = chunk__29352;
var G__29384 = count__29353;
var G__29385 = (i__29354 + (1));
seq__29351 = G__29382;
chunk__29352 = G__29383;
count__29353 = G__29384;
i__29354 = G__29385;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__29351);
if(temp__5753__auto__){
var seq__29351__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29351__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__29351__$1);
var G__29386 = cljs.core.chunk_rest(seq__29351__$1);
var G__29387 = c__4638__auto__;
var G__29388 = cljs.core.count(c__4638__auto__);
var G__29389 = (0);
seq__29351 = G__29386;
chunk__29352 = G__29387;
count__29353 = G__29388;
i__29354 = G__29389;
continue;
} else {
var vec__29364 = cljs.core.first(seq__29351__$1);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29364,(0),null);
var set_collapsed_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29364,(1),null);
(set_collapsed_item.cljs$core$IFn$_invoke$arity$1 ? set_collapsed_item.cljs$core$IFn$_invoke$arity$1(true) : set_collapsed_item.call(null,true));


var G__29390 = cljs.core.next(seq__29351__$1);
var G__29391 = null;
var G__29392 = (0);
var G__29393 = (0);
seq__29351 = G__29390;
chunk__29352 = G__29391;
count__29353 = G__29392;
i__29354 = G__29393;
continue;
}
} else {
return null;
}
}
break;
}
})):(with_let29332[(4)]));
var item_STAR_ = ((((init29333) || (cljs.core.not(with_let29332.hasOwnProperty((5))))))?(with_let29332[(5)] = (function (node){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.item,node,item_index], null);
})):(with_let29332[(5)]));
var unrenderable_QMARK_ = ((((init29333) || (cljs.core.not(with_let29332.hasOwnProperty((6))))))?(with_let29332[(6)] = (function (p1__29331_SHARP_){
return cljs.core.cst$kw$as_DASH_is_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__29331_SHARP_));
})):(with_let29332[(6)]));
var res29334 = (function (){var map__29367 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_resolved_DASH_selected_DASH_item,item_index], null)));
var map__29367__$1 = cljs.core.__destructure_map(map__29367);
var selected_item = map__29367__$1;
var ingredients = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29367__$1,cljs.core.cst$kw$ingredients);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29367__$1,cljs.core.cst$kw$id);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$bg_DASH_inherit$flex$flex_DASH_col$gap_DASH_10$items_DASH_center,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,nw_calculator.components.collapsible_tree.component.collapsible_list_provider,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$set_DASH_collapsed_DASH_updater,set_collapsed_updater_BANG_,cljs.core.cst$kw$unset_DASH_collapsed_DASH_updater,unset_collapsed_updater_BANG_], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.collapsible_tree_component,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$tree_DASH_map,selected_item,cljs.core.cst$kw$children,cljs.core.cst$kw$ingredients,cljs.core.cst$kw$make_DASH_node,item_STAR_,cljs.core.cst$kw$ignore_QMARK_,unrenderable_QMARK_], null)], null)], null),(cljs.core.truth_(cljs.core.not_empty(ingredients))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$flex$gap_DASH_6,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$button$button_DASH_outline$w_DASH_52$md_COLON_w_DASH_60,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,expand_all_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fas$fa_DASH_expand_DASH_arrows], null)," Expand all"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$button$button_DASH_outline$w_DASH_52$md_COLON_w_DASH_60,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,collapse_all_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fas$fa_DASH_compress_DASH_arrows_DASH_alt], null)," Collapse all"], null)], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,id], null));
})();
return res29334;
});
nw_calculator.views.summary_item_tree = (function nw_calculator$views$summary_item_tree(){
var with_let29395 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let29395);
var temp__5757__auto___29434 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___29434 == null)){
} else {
var c__13075__auto___29435 = temp__5757__auto___29434;
if((with_let29395.generation === c__13075__auto___29435.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let29395.generation = c__13075__auto___29435.ratomGeneration);
}

var init29396 = (with_let29395.length === (0));
var collapsed_item_updaters = ((((init29396) || (cljs.core.not(with_let29395.hasOwnProperty((0))))))?(with_let29395[(0)] = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY)):(with_let29395[(0)]));
var set_collapsed_updater_BANG_ = ((((init29396) || (cljs.core.not(with_let29395.hasOwnProperty((1))))))?(with_let29395[(1)] = (function (id,updater){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(collapsed_item_updaters,cljs.core.assoc,id,updater);
})):(with_let29395[(1)]));
var unset_collapsed_updater_BANG_ = ((((init29396) || (cljs.core.not(with_let29395.hasOwnProperty((2))))))?(with_let29395[(2)] = (function (id){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(collapsed_item_updaters,cljs.core.dissoc,id);
})):(with_let29395[(2)]));
var expand_all_BANG_ = ((((init29396) || (cljs.core.not(with_let29395.hasOwnProperty((3))))))?(with_let29395[(3)] = (function (){
var seq__29398 = cljs.core.seq(cljs.core.deref(collapsed_item_updaters));
var chunk__29399 = null;
var count__29400 = (0);
var i__29401 = (0);
while(true){
if((i__29401 < count__29400)){
var vec__29408 = chunk__29399.cljs$core$IIndexed$_nth$arity$2(null,i__29401);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29408,(0),null);
var set_collapsed_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29408,(1),null);
(set_collapsed_item.cljs$core$IFn$_invoke$arity$1 ? set_collapsed_item.cljs$core$IFn$_invoke$arity$1(false) : set_collapsed_item.call(null,false));


var G__29436 = seq__29398;
var G__29437 = chunk__29399;
var G__29438 = count__29400;
var G__29439 = (i__29401 + (1));
seq__29398 = G__29436;
chunk__29399 = G__29437;
count__29400 = G__29438;
i__29401 = G__29439;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__29398);
if(temp__5753__auto__){
var seq__29398__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29398__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__29398__$1);
var G__29440 = cljs.core.chunk_rest(seq__29398__$1);
var G__29441 = c__4638__auto__;
var G__29442 = cljs.core.count(c__4638__auto__);
var G__29443 = (0);
seq__29398 = G__29440;
chunk__29399 = G__29441;
count__29400 = G__29442;
i__29401 = G__29443;
continue;
} else {
var vec__29411 = cljs.core.first(seq__29398__$1);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29411,(0),null);
var set_collapsed_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29411,(1),null);
(set_collapsed_item.cljs$core$IFn$_invoke$arity$1 ? set_collapsed_item.cljs$core$IFn$_invoke$arity$1(false) : set_collapsed_item.call(null,false));


var G__29444 = cljs.core.next(seq__29398__$1);
var G__29445 = null;
var G__29446 = (0);
var G__29447 = (0);
seq__29398 = G__29444;
chunk__29399 = G__29445;
count__29400 = G__29446;
i__29401 = G__29447;
continue;
}
} else {
return null;
}
}
break;
}
})):(with_let29395[(3)]));
var collapse_all_BANG_ = ((((init29396) || (cljs.core.not(with_let29395.hasOwnProperty((4))))))?(with_let29395[(4)] = (function (){
var seq__29414 = cljs.core.seq(cljs.core.deref(collapsed_item_updaters));
var chunk__29415 = null;
var count__29416 = (0);
var i__29417 = (0);
while(true){
if((i__29417 < count__29416)){
var vec__29424 = chunk__29415.cljs$core$IIndexed$_nth$arity$2(null,i__29417);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29424,(0),null);
var set_collapsed_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29424,(1),null);
(set_collapsed_item.cljs$core$IFn$_invoke$arity$1 ? set_collapsed_item.cljs$core$IFn$_invoke$arity$1(true) : set_collapsed_item.call(null,true));


var G__29448 = seq__29414;
var G__29449 = chunk__29415;
var G__29450 = count__29416;
var G__29451 = (i__29417 + (1));
seq__29414 = G__29448;
chunk__29415 = G__29449;
count__29416 = G__29450;
i__29417 = G__29451;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__29414);
if(temp__5753__auto__){
var seq__29414__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29414__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__29414__$1);
var G__29452 = cljs.core.chunk_rest(seq__29414__$1);
var G__29453 = c__4638__auto__;
var G__29454 = cljs.core.count(c__4638__auto__);
var G__29455 = (0);
seq__29414 = G__29452;
chunk__29415 = G__29453;
count__29416 = G__29454;
i__29417 = G__29455;
continue;
} else {
var vec__29427 = cljs.core.first(seq__29414__$1);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29427,(0),null);
var set_collapsed_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29427,(1),null);
(set_collapsed_item.cljs$core$IFn$_invoke$arity$1 ? set_collapsed_item.cljs$core$IFn$_invoke$arity$1(true) : set_collapsed_item.call(null,true));


var G__29456 = cljs.core.next(seq__29414__$1);
var G__29457 = null;
var G__29458 = (0);
var G__29459 = (0);
seq__29414 = G__29456;
chunk__29415 = G__29457;
count__29416 = G__29458;
i__29417 = G__29459;
continue;
}
} else {
return null;
}
}
break;
}
})):(with_let29395[(4)]));
var item_STAR_ = ((((init29396) || (cljs.core.not(with_let29395.hasOwnProperty((5))))))?(with_let29395[(5)] = (function (p__29430){
var map__29431 = p__29430;
var map__29431__$1 = cljs.core.__destructure_map(map__29431);
var map__29432 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29431__$1,cljs.core.cst$kw$node);
var map__29432__$1 = cljs.core.__destructure_map(map__29432);
var item_map = map__29432__$1;
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29432__$1,cljs.core.cst$kw$items);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.item_component,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$item_DASH_map,item_map,cljs.core.cst$kw$popup_DASH_on_DASH_hover_QMARK_,true,cljs.core.cst$kw$custom_DASH_image,(function (){var temp__5751__auto__ = cljs.core.not_empty(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$png_DASH_url,items));
if(cljs.core.truth_(temp__5751__auto__)){
var png_urls = temp__5751__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.custom_item_images,png_urls], null);
} else {
return null;
}
})()], null)], null);
})):(with_let29395[(5)]));
var unrenderable_QMARK_ = ((((init29396) || (cljs.core.not(with_let29395.hasOwnProperty((6))))))?(with_let29395[(6)] = (function (p1__29394_SHARP_){
return cljs.core.cst$kw$as_DASH_is_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__29394_SHARP_));
})):(with_let29395[(6)]));
var res29397 = (function (){var temp__5751__auto__ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_selected_DASH_items_DASH_summary], null)));
if(cljs.core.truth_(temp__5751__auto__)){
var map__29433 = temp__5751__auto__;
var map__29433__$1 = cljs.core.__destructure_map(map__29433);
var selected_item = map__29433__$1;
var ingredients = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29433__$1,cljs.core.cst$kw$ingredients);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29433__$1,cljs.core.cst$kw$id);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$bg_DASH_inherit$flex$flex_DASH_col$gap_DASH_10$items_DASH_center,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,nw_calculator.components.collapsible_tree.component.collapsible_list_provider,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$set_DASH_collapsed_DASH_updater,set_collapsed_updater_BANG_,cljs.core.cst$kw$unset_DASH_collapsed_DASH_updater,unset_collapsed_updater_BANG_], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.collapsible_tree_component,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$tree_DASH_map,selected_item,cljs.core.cst$kw$children,cljs.core.cst$kw$ingredients,cljs.core.cst$kw$make_DASH_node,item_STAR_,cljs.core.cst$kw$ignore_QMARK_,unrenderable_QMARK_], null)], null)], null),(cljs.core.truth_(cljs.core.not_empty(ingredients))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$flex$gap_DASH_6,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$button$button_DASH_outline$w_DASH_52$md_COLON_w_DASH_60,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,expand_all_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fas$fa_DASH_expand_DASH_arrows], null)," Expand all"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$button$button_DASH_outline$w_DASH_52$md_COLON_w_DASH_60,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,collapse_all_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fas$fa_DASH_compress_DASH_arrows_DASH_alt], null)," Collapse all"], null)], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,id], null));
} else {
return null;
}
})();
return res29397;
});
nw_calculator.views.delete_item_button = (function nw_calculator$views$delete_item_button(item_index){
var with_let29460 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let29460);
var temp__5757__auto___29463 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___29463 == null)){
} else {
var c__13075__auto___29464 = temp__5757__auto___29463;
if((with_let29460.generation === c__13075__auto___29464.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let29460.generation = c__13075__auto___29464.ratomGeneration);
}

var init29461 = (with_let29460.length === (0));
var delete_item_BANG_ = ((((init29461) || (cljs.core.not(with_let29460.hasOwnProperty((0))))))?(with_let29460[(0)] = (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_remove_DASH_item,item_index], null));
})):(with_let29460[(0)]));
var res29462 = (function (){var num_selected_items = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_num_DASH_selected_DASH_items], null)));
var disable_delete_button_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),num_selected_items);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.circular_button_component,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,"absolute text-xl top-2 right-0 border-0 flex-none",cljs.core.cst$kw$disabled,disable_delete_button_QMARK_,cljs.core.cst$kw$on_DASH_click,delete_item_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fas$fa_DASH_trash], null)], null);
})();
return res29462;
});
nw_calculator.views.item_cards = (function nw_calculator$views$item_cards(){
var num_selected_items = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_num_DASH_selected_DASH_items], null)));
var num_resolved_selected_items = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_num_DASH_resolved_DASH_selected_DASH_items], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_,(function (){var iter__4611__auto__ = (function nw_calculator$views$item_cards_$_iter__29465(s__29466){
return (new cljs.core.LazySeq(null,(function (){
var s__29466__$1 = s__29466;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__29466__$1);
if(temp__5753__auto__){
var s__29466__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29466__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__29466__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__29468 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__29467 = (0);
while(true){
if((i__29467 < size__4610__auto__)){
var item_index = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4609__auto__,i__29467);
cljs.core.chunk_append(b__29468,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.card_component,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.delete_item_button,item_index], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$bg_DASH_inherit$mt_DASH_2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.searchable_item_tree,item_index], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,item_index], null)));

var G__29469 = (i__29467 + (1));
i__29467 = G__29469;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29468),nw_calculator$views$item_cards_$_iter__29465(cljs.core.chunk_rest(s__29466__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29468),null);
}
} else {
var item_index = cljs.core.first(s__29466__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.card_component,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.delete_item_button,item_index], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$bg_DASH_inherit$mt_DASH_2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.searchable_item_tree,item_index], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,item_index], null)),nw_calculator$views$item_cards_$_iter__29465(cljs.core.rest(s__29466__$2)));
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
var with_let29470 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let29470);
var temp__5757__auto___29473 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___29473 == null)){
} else {
var c__13075__auto___29474 = temp__5757__auto___29473;
if((with_let29470.generation === c__13075__auto___29474.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let29470.generation = c__13075__auto___29474.ratomGeneration);
}

var init29471 = (with_let29470.length === (0));
var add_empty_item_BANG_ = ((((init29471) || (cljs.core.not(with_let29470.hasOwnProperty((0))))))?(with_let29470[(0)] = (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_add_DASH_empty_DASH_item], null));
})):(with_let29470[(0)]));
var remove_items_BANG_ = ((((init29471) || (cljs.core.not(with_let29470.hasOwnProperty((1))))))?(with_let29470[(1)] = (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_remove_DASH_all_DASH_items], null));
})):(with_let29470[(1)]));
var res29472 = (function (){var num_items = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_num_DASH_selected_DASH_items], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$flex$gap_DASH_6$md_COLON_gap_DASH_8$flex_DASH_wrap$justify_DASH_center,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$button$w_DASH_64,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,add_empty_item_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fas$fa_DASH_plus_DASH_circle], null)," Add another item"], null),(((num_items > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$button$w_DASH_64,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,remove_items_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fas$fa_DASH_trash], null)," Remove all items"], null):null)], null);
})();
return res29472;
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
