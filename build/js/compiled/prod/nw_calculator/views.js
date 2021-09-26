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
var with_let31092 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let31092);
var temp__5757__auto___31098 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___31098 == null)){
} else {
var c__14347__auto___31099 = temp__5757__auto___31098;
if((with_let31092.generation === c__14347__auto___31099.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let31092.generation = c__14347__auto___31099.ratomGeneration);
}

var init31093 = (with_let31092.length === (0));
var search_BANG_ = ((((init31093) || (cljs.core.not(with_let31092.hasOwnProperty((0))))))?(with_let31092[(0)] = nw_calculator.utilities.debounce((function (query){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_search,item_index,query], null));
}),(100))):(with_let31092[(0)]));
var select_item_BANG_ = ((((init31093) || (cljs.core.not(with_let31092.hasOwnProperty((1))))))?(with_let31092[(1)] = (function (p__31095){
var map__31096 = p__31095;
var map__31096__$1 = cljs.core.__destructure_map(map__31096);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31096__$1,cljs.core.cst$kw$id);
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_select_DASH_item,item_index,id], null));
})):(with_let31092[(1)]));
var clear_search_BANG_ = ((((init31093) || (cljs.core.not(with_let31092.hasOwnProperty((2))))))?(with_let31092[(2)] = (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_clear_DASH_search,item_index], null));
})):(with_let31092[(2)]));
var res31094 = (function (){var results = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_search_DASH_results,item_index], null)));
var map__31097 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_resolved_DASH_selected_DASH_item,item_index], null)));
var map__31097__$1 = cljs.core.__destructure_map(map__31097);
var item_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31097__$1,cljs.core.cst$kw$name);
var searching_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_searching_QMARK_], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$f_GT_,nw_calculator.components.search_component,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$results,results,cljs.core.cst$kw$input_DASH_props,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$placeholder,"\uD83D\uDD0D Search for an item",cljs.core.cst$kw$default_DASH_value,item_name], null),cljs.core.cst$kw$get_DASH_value,cljs.core.cst$kw$name,cljs.core.cst$kw$make_DASH_result,nw_calculator.views.basic_item,cljs.core.cst$kw$on_DASH_search,search_BANG_,cljs.core.cst$kw$loading_QMARK_,searching_QMARK_,cljs.core.cst$kw$on_DASH_clear,clear_search_BANG_,cljs.core.cst$kw$on_DASH_select,select_item_BANG_], null)], null);
})();
return res31094;
});
nw_calculator.views.dropdown = (function nw_calculator$views$dropdown(p__31100){
var map__31101 = p__31100;
var map__31101__$1 = cljs.core.__destructure_map(map__31101);
var selected_option_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31101__$1,cljs.core.cst$kw$name);
var category_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31101__$1,cljs.core.cst$kw$path);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31101__$1,cljs.core.cst$kw$options);
var category_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31101__$1,cljs.core.cst$kw$category_DASH_name);
var with_let31102 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let31102);
var temp__5757__auto___31107 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___31107 == null)){
} else {
var c__14347__auto___31108 = temp__5757__auto___31107;
if((with_let31102.generation === c__14347__auto___31108.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let31102.generation = c__14347__auto___31108.ratomGeneration);
}

var init31103 = (with_let31102.length === (0));
var select_option_BANG_ = ((((init31103) || (cljs.core.not(with_let31102.hasOwnProperty((0))))))?(with_let31102[(0)] = (function (p__31105){
var map__31106 = p__31105;
var map__31106__$1 = cljs.core.__destructure_map(map__31106);
var selected_option_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31106__$1,cljs.core.cst$kw$id);
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_select_DASH_option,category_path,selected_option_id], null));
})):(with_let31102[(0)]));
var res31104 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$f_GT_,nw_calculator.components.dropdown_component,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$input_DASH_props,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$placeholder,category_name,cljs.core.cst$kw$default_DASH_value,selected_option_name], null),cljs.core.cst$kw$on_DASH_select,select_option_BANG_,cljs.core.cst$kw$container_DASH_props,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"bg-white"], null),cljs.core.cst$kw$make_DASH_option,nw_calculator.views.basic_item,cljs.core.cst$kw$get_DASH_value,cljs.core.cst$kw$name,cljs.core.cst$kw$options,options], null)], null);
return res31104;
});
nw_calculator.views.custom_item_quantity = (function nw_calculator$views$custom_item_quantity(p__31109){
var map__31110 = p__31109;
var map__31110__$1 = cljs.core.__destructure_map(map__31110);
var editable_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31110__$1,cljs.core.cst$kw$editable_QMARK_);
var quantity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31110__$1,cljs.core.cst$kw$quantity);
var item_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31110__$1,cljs.core.cst$kw$item_DASH_index);
var with_let31111 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let31111);
var temp__5757__auto___31114 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___31114 == null)){
} else {
var c__14347__auto___31115 = temp__5757__auto___31114;
if((with_let31111.generation === c__14347__auto___31115.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let31111.generation = c__14347__auto___31115.ratomGeneration);
}

var init31112 = (with_let31111.length === (0));
var set_quantity_multiplier_BANG_ = ((((init31112) || (cljs.core.not(with_let31111.hasOwnProperty((0))))))?(with_let31111[(0)] = (function (event){
var multiplier = nw_calculator.utilities.parse_pos.cljs$core$IFn$_invoke$arity$1(event.target.value);
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_set_DASH_quantity_DASH_multiplier,item_index,multiplier], null));
})):(with_let31111[(0)]));
var min_quantity_multiplier = ((((init31112) || (cljs.core.not(with_let31111.hasOwnProperty((1))))))?(with_let31111[(1)] = (1)):(with_let31111[(1)]));
var res31113 = (function (){var quantity_multiplier_STAR_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_quantity_DASH_multiplier,item_index], null)));
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
return res31113;
});
nw_calculator.views.custom_item_name = (function nw_calculator$views$custom_item_name(p__31116){
var map__31117 = p__31116;
var map__31117__$1 = cljs.core.__destructure_map(map__31117);
var map__31118 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31117__$1,cljs.core.cst$kw$node_DASH_data);
var map__31118__$1 = cljs.core.__destructure_map(map__31118);
var map__31119 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31118__$1,cljs.core.cst$kw$node);
var map__31119__$1 = cljs.core.__destructure_map(map__31119);
var item_map = map__31119__$1;
var name_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31119__$1,cljs.core.cst$kw$name);
var external_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31119__$1,cljs.core.cst$kw$external_DASH_url);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31119__$1,cljs.core.cst$kw$options);
var root_node_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31118__$1,cljs.core.cst$kw$root_DASH_node_QMARK_);
var item_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31117__$1,cljs.core.cst$kw$item_DASH_index);
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
var with_let31120 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let31120);
var temp__5757__auto___31123 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___31123 == null)){
} else {
var c__14347__auto___31124 = temp__5757__auto___31123;
if((with_let31120.generation === c__14347__auto___31124.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let31120.generation = c__14347__auto___31124.ratomGeneration);
}

var init31121 = (with_let31120.length === (0));
var image_with_popup = ((((init31121) || (cljs.core.not(with_let31120.hasOwnProperty((0))))))?(with_let31120[(0)] = (function (url){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$f_GT_,nw_calculator.components.item.component.image_with_popup,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,url], null)], null);
})):(with_let31120[(0)]));
var res31122 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$flex$flex_DASH_grow$gap_DASH_4,cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_], null),cljs.core.map.cljs$core$IFn$_invoke$arity$1(image_with_popup),image_urls)], null);
return res31122;
});
nw_calculator.views.item = (function nw_calculator$views$item(p__31125,item_index){
var map__31126 = p__31125;
var map__31126__$1 = cljs.core.__destructure_map(map__31126);
var node_data = map__31126__$1;
var map__31127 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31126__$1,cljs.core.cst$kw$node);
var map__31127__$1 = cljs.core.__destructure_map(map__31127);
var item_map = map__31127__$1;
var quantity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31127__$1,cljs.core.cst$kw$quantity);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31127__$1,cljs.core.cst$kw$path);
var root_node_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31126__$1,cljs.core.cst$kw$root_DASH_node_QMARK_);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.item_component,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$popup_DASH_on_DASH_hover_QMARK_,true,cljs.core.cst$kw$container_DASH_props,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,["m-0-imp",(cljs.core.truth_(root_node_QMARK_)?" bg-inherit":null)].join('')], null),cljs.core.cst$kw$item_DASH_map,item_map,cljs.core.cst$kw$custom_DASH_quantity,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.custom_item_quantity,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$editable_QMARK_,root_node_QMARK_,cljs.core.cst$kw$quantity,quantity,cljs.core.cst$kw$item_DASH_index,item_index], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,"quantity")], null)),cljs.core.cst$kw$custom_DASH_name,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.custom_item_name,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$node_DASH_data,node_data,cljs.core.cst$kw$item_DASH_index,item_index], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,path], null))], null)], null);
});
nw_calculator.views.searchable_item_tree = (function nw_calculator$views$searchable_item_tree(item_index){
var with_let31129 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let31129);
var temp__5757__auto___31165 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___31165 == null)){
} else {
var c__14347__auto___31166 = temp__5757__auto___31165;
if((with_let31129.generation === c__14347__auto___31166.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let31129.generation = c__14347__auto___31166.ratomGeneration);
}

var init31130 = (with_let31129.length === (0));
var collapsed_item_updaters = ((((init31130) || (cljs.core.not(with_let31129.hasOwnProperty((0))))))?(with_let31129[(0)] = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY)):(with_let31129[(0)]));
var set_collapsed_updater_BANG_ = ((((init31130) || (cljs.core.not(with_let31129.hasOwnProperty((1))))))?(with_let31129[(1)] = (function (id,updater){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(collapsed_item_updaters,cljs.core.assoc,id,updater);
})):(with_let31129[(1)]));
var unset_collapsed_updater_BANG_ = ((((init31130) || (cljs.core.not(with_let31129.hasOwnProperty((2))))))?(with_let31129[(2)] = (function (id){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(collapsed_item_updaters,cljs.core.dissoc,id);
})):(with_let31129[(2)]));
var expand_all_BANG_ = ((((init31130) || (cljs.core.not(with_let31129.hasOwnProperty((3))))))?(with_let31129[(3)] = (function (){
var seq__31132 = cljs.core.seq(cljs.core.deref(collapsed_item_updaters));
var chunk__31133 = null;
var count__31134 = (0);
var i__31135 = (0);
while(true){
if((i__31135 < count__31134)){
var vec__31142 = chunk__31133.cljs$core$IIndexed$_nth$arity$2(null,i__31135);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31142,(0),null);
var set_collapsed_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31142,(1),null);
(set_collapsed_item.cljs$core$IFn$_invoke$arity$1 ? set_collapsed_item.cljs$core$IFn$_invoke$arity$1(false) : set_collapsed_item.call(null,false));


var G__31167 = seq__31132;
var G__31168 = chunk__31133;
var G__31169 = count__31134;
var G__31170 = (i__31135 + (1));
seq__31132 = G__31167;
chunk__31133 = G__31168;
count__31134 = G__31169;
i__31135 = G__31170;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__31132);
if(temp__5753__auto__){
var seq__31132__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31132__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__31132__$1);
var G__31171 = cljs.core.chunk_rest(seq__31132__$1);
var G__31172 = c__4638__auto__;
var G__31173 = cljs.core.count(c__4638__auto__);
var G__31174 = (0);
seq__31132 = G__31171;
chunk__31133 = G__31172;
count__31134 = G__31173;
i__31135 = G__31174;
continue;
} else {
var vec__31145 = cljs.core.first(seq__31132__$1);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31145,(0),null);
var set_collapsed_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31145,(1),null);
(set_collapsed_item.cljs$core$IFn$_invoke$arity$1 ? set_collapsed_item.cljs$core$IFn$_invoke$arity$1(false) : set_collapsed_item.call(null,false));


var G__31175 = cljs.core.next(seq__31132__$1);
var G__31176 = null;
var G__31177 = (0);
var G__31178 = (0);
seq__31132 = G__31175;
chunk__31133 = G__31176;
count__31134 = G__31177;
i__31135 = G__31178;
continue;
}
} else {
return null;
}
}
break;
}
})):(with_let31129[(3)]));
var collapse_all_BANG_ = ((((init31130) || (cljs.core.not(with_let31129.hasOwnProperty((4))))))?(with_let31129[(4)] = (function (){
var seq__31148 = cljs.core.seq(cljs.core.deref(collapsed_item_updaters));
var chunk__31149 = null;
var count__31150 = (0);
var i__31151 = (0);
while(true){
if((i__31151 < count__31150)){
var vec__31158 = chunk__31149.cljs$core$IIndexed$_nth$arity$2(null,i__31151);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31158,(0),null);
var set_collapsed_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31158,(1),null);
(set_collapsed_item.cljs$core$IFn$_invoke$arity$1 ? set_collapsed_item.cljs$core$IFn$_invoke$arity$1(true) : set_collapsed_item.call(null,true));


var G__31179 = seq__31148;
var G__31180 = chunk__31149;
var G__31181 = count__31150;
var G__31182 = (i__31151 + (1));
seq__31148 = G__31179;
chunk__31149 = G__31180;
count__31150 = G__31181;
i__31151 = G__31182;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__31148);
if(temp__5753__auto__){
var seq__31148__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31148__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__31148__$1);
var G__31183 = cljs.core.chunk_rest(seq__31148__$1);
var G__31184 = c__4638__auto__;
var G__31185 = cljs.core.count(c__4638__auto__);
var G__31186 = (0);
seq__31148 = G__31183;
chunk__31149 = G__31184;
count__31150 = G__31185;
i__31151 = G__31186;
continue;
} else {
var vec__31161 = cljs.core.first(seq__31148__$1);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31161,(0),null);
var set_collapsed_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31161,(1),null);
(set_collapsed_item.cljs$core$IFn$_invoke$arity$1 ? set_collapsed_item.cljs$core$IFn$_invoke$arity$1(true) : set_collapsed_item.call(null,true));


var G__31187 = cljs.core.next(seq__31148__$1);
var G__31188 = null;
var G__31189 = (0);
var G__31190 = (0);
seq__31148 = G__31187;
chunk__31149 = G__31188;
count__31150 = G__31189;
i__31151 = G__31190;
continue;
}
} else {
return null;
}
}
break;
}
})):(with_let31129[(4)]));
var item_STAR_ = ((((init31130) || (cljs.core.not(with_let31129.hasOwnProperty((5))))))?(with_let31129[(5)] = (function (node){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.item,node,item_index], null);
})):(with_let31129[(5)]));
var unrenderable_QMARK_ = ((((init31130) || (cljs.core.not(with_let31129.hasOwnProperty((6))))))?(with_let31129[(6)] = (function (p1__31128_SHARP_){
return cljs.core.cst$kw$as_DASH_is_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__31128_SHARP_));
})):(with_let31129[(6)]));
var res31131 = (function (){var map__31164 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_resolved_DASH_selected_DASH_item,item_index], null)));
var map__31164__$1 = cljs.core.__destructure_map(map__31164);
var selected_item = map__31164__$1;
var ingredients = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31164__$1,cljs.core.cst$kw$ingredients);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31164__$1,cljs.core.cst$kw$id);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$bg_DASH_inherit$flex$flex_DASH_col$gap_DASH_10$items_DASH_center,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,nw_calculator.components.collapsible_tree.component.collapsible_list_provider,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$set_DASH_collapsed_DASH_updater,set_collapsed_updater_BANG_,cljs.core.cst$kw$unset_DASH_collapsed_DASH_updater,unset_collapsed_updater_BANG_], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.collapsible_tree_component,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$tree_DASH_map,selected_item,cljs.core.cst$kw$children,cljs.core.cst$kw$ingredients,cljs.core.cst$kw$make_DASH_node,item_STAR_,cljs.core.cst$kw$ignore_QMARK_,unrenderable_QMARK_], null)], null)], null),(cljs.core.truth_(cljs.core.not_empty(ingredients))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$flex$gap_DASH_6,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$button$button_DASH_outline$w_DASH_52$md_COLON_w_DASH_60,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,expand_all_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fas$fa_DASH_expand_DASH_arrows], null)," Expand all"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$button$button_DASH_outline$w_DASH_52$md_COLON_w_DASH_60,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,collapse_all_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fas$fa_DASH_compress_DASH_arrows_DASH_alt], null)," Collapse all"], null)], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,id], null));
})();
return res31131;
});
nw_calculator.views.summary_item_tree = (function nw_calculator$views$summary_item_tree(){
var with_let31192 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let31192);
var temp__5757__auto___31231 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___31231 == null)){
} else {
var c__14347__auto___31232 = temp__5757__auto___31231;
if((with_let31192.generation === c__14347__auto___31232.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let31192.generation = c__14347__auto___31232.ratomGeneration);
}

var init31193 = (with_let31192.length === (0));
var collapsed_item_updaters = ((((init31193) || (cljs.core.not(with_let31192.hasOwnProperty((0))))))?(with_let31192[(0)] = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY)):(with_let31192[(0)]));
var set_collapsed_updater_BANG_ = ((((init31193) || (cljs.core.not(with_let31192.hasOwnProperty((1))))))?(with_let31192[(1)] = (function (id,updater){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(collapsed_item_updaters,cljs.core.assoc,id,updater);
})):(with_let31192[(1)]));
var unset_collapsed_updater_BANG_ = ((((init31193) || (cljs.core.not(with_let31192.hasOwnProperty((2))))))?(with_let31192[(2)] = (function (id){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(collapsed_item_updaters,cljs.core.dissoc,id);
})):(with_let31192[(2)]));
var expand_all_BANG_ = ((((init31193) || (cljs.core.not(with_let31192.hasOwnProperty((3))))))?(with_let31192[(3)] = (function (){
var seq__31195 = cljs.core.seq(cljs.core.deref(collapsed_item_updaters));
var chunk__31196 = null;
var count__31197 = (0);
var i__31198 = (0);
while(true){
if((i__31198 < count__31197)){
var vec__31205 = chunk__31196.cljs$core$IIndexed$_nth$arity$2(null,i__31198);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31205,(0),null);
var set_collapsed_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31205,(1),null);
(set_collapsed_item.cljs$core$IFn$_invoke$arity$1 ? set_collapsed_item.cljs$core$IFn$_invoke$arity$1(false) : set_collapsed_item.call(null,false));


var G__31233 = seq__31195;
var G__31234 = chunk__31196;
var G__31235 = count__31197;
var G__31236 = (i__31198 + (1));
seq__31195 = G__31233;
chunk__31196 = G__31234;
count__31197 = G__31235;
i__31198 = G__31236;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__31195);
if(temp__5753__auto__){
var seq__31195__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31195__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__31195__$1);
var G__31237 = cljs.core.chunk_rest(seq__31195__$1);
var G__31238 = c__4638__auto__;
var G__31239 = cljs.core.count(c__4638__auto__);
var G__31240 = (0);
seq__31195 = G__31237;
chunk__31196 = G__31238;
count__31197 = G__31239;
i__31198 = G__31240;
continue;
} else {
var vec__31208 = cljs.core.first(seq__31195__$1);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31208,(0),null);
var set_collapsed_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31208,(1),null);
(set_collapsed_item.cljs$core$IFn$_invoke$arity$1 ? set_collapsed_item.cljs$core$IFn$_invoke$arity$1(false) : set_collapsed_item.call(null,false));


var G__31241 = cljs.core.next(seq__31195__$1);
var G__31242 = null;
var G__31243 = (0);
var G__31244 = (0);
seq__31195 = G__31241;
chunk__31196 = G__31242;
count__31197 = G__31243;
i__31198 = G__31244;
continue;
}
} else {
return null;
}
}
break;
}
})):(with_let31192[(3)]));
var collapse_all_BANG_ = ((((init31193) || (cljs.core.not(with_let31192.hasOwnProperty((4))))))?(with_let31192[(4)] = (function (){
var seq__31211 = cljs.core.seq(cljs.core.deref(collapsed_item_updaters));
var chunk__31212 = null;
var count__31213 = (0);
var i__31214 = (0);
while(true){
if((i__31214 < count__31213)){
var vec__31221 = chunk__31212.cljs$core$IIndexed$_nth$arity$2(null,i__31214);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31221,(0),null);
var set_collapsed_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31221,(1),null);
(set_collapsed_item.cljs$core$IFn$_invoke$arity$1 ? set_collapsed_item.cljs$core$IFn$_invoke$arity$1(true) : set_collapsed_item.call(null,true));


var G__31245 = seq__31211;
var G__31246 = chunk__31212;
var G__31247 = count__31213;
var G__31248 = (i__31214 + (1));
seq__31211 = G__31245;
chunk__31212 = G__31246;
count__31213 = G__31247;
i__31214 = G__31248;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__31211);
if(temp__5753__auto__){
var seq__31211__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31211__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__31211__$1);
var G__31249 = cljs.core.chunk_rest(seq__31211__$1);
var G__31250 = c__4638__auto__;
var G__31251 = cljs.core.count(c__4638__auto__);
var G__31252 = (0);
seq__31211 = G__31249;
chunk__31212 = G__31250;
count__31213 = G__31251;
i__31214 = G__31252;
continue;
} else {
var vec__31224 = cljs.core.first(seq__31211__$1);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31224,(0),null);
var set_collapsed_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31224,(1),null);
(set_collapsed_item.cljs$core$IFn$_invoke$arity$1 ? set_collapsed_item.cljs$core$IFn$_invoke$arity$1(true) : set_collapsed_item.call(null,true));


var G__31253 = cljs.core.next(seq__31211__$1);
var G__31254 = null;
var G__31255 = (0);
var G__31256 = (0);
seq__31211 = G__31253;
chunk__31212 = G__31254;
count__31213 = G__31255;
i__31214 = G__31256;
continue;
}
} else {
return null;
}
}
break;
}
})):(with_let31192[(4)]));
var item_STAR_ = ((((init31193) || (cljs.core.not(with_let31192.hasOwnProperty((5))))))?(with_let31192[(5)] = (function (p__31227){
var map__31228 = p__31227;
var map__31228__$1 = cljs.core.__destructure_map(map__31228);
var map__31229 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31228__$1,cljs.core.cst$kw$node);
var map__31229__$1 = cljs.core.__destructure_map(map__31229);
var item_map = map__31229__$1;
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31229__$1,cljs.core.cst$kw$items);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.item_component,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$item_DASH_map,item_map,cljs.core.cst$kw$popup_DASH_on_DASH_hover_QMARK_,true,cljs.core.cst$kw$custom_DASH_image,(function (){var temp__5751__auto__ = cljs.core.not_empty(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$png_DASH_url,items));
if(cljs.core.truth_(temp__5751__auto__)){
var png_urls = temp__5751__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.custom_item_images,png_urls], null);
} else {
return null;
}
})()], null)], null);
})):(with_let31192[(5)]));
var unrenderable_QMARK_ = ((((init31193) || (cljs.core.not(with_let31192.hasOwnProperty((6))))))?(with_let31192[(6)] = (function (p1__31191_SHARP_){
return cljs.core.cst$kw$as_DASH_is_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__31191_SHARP_));
})):(with_let31192[(6)]));
var res31194 = (function (){var temp__5751__auto__ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_selected_DASH_items_DASH_summary], null)));
if(cljs.core.truth_(temp__5751__auto__)){
var map__31230 = temp__5751__auto__;
var map__31230__$1 = cljs.core.__destructure_map(map__31230);
var selected_item = map__31230__$1;
var ingredients = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31230__$1,cljs.core.cst$kw$ingredients);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31230__$1,cljs.core.cst$kw$id);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$bg_DASH_inherit$flex$flex_DASH_col$gap_DASH_10$items_DASH_center,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,nw_calculator.components.collapsible_tree.component.collapsible_list_provider,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$set_DASH_collapsed_DASH_updater,set_collapsed_updater_BANG_,cljs.core.cst$kw$unset_DASH_collapsed_DASH_updater,unset_collapsed_updater_BANG_], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.collapsible_tree_component,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$tree_DASH_map,selected_item,cljs.core.cst$kw$children,cljs.core.cst$kw$ingredients,cljs.core.cst$kw$make_DASH_node,item_STAR_,cljs.core.cst$kw$ignore_QMARK_,unrenderable_QMARK_], null)], null)], null),(cljs.core.truth_(cljs.core.not_empty(ingredients))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$flex$gap_DASH_6,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$button$button_DASH_outline$w_DASH_52$md_COLON_w_DASH_60,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,expand_all_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fas$fa_DASH_expand_DASH_arrows], null)," Expand all"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$button$button_DASH_outline$w_DASH_52$md_COLON_w_DASH_60,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,collapse_all_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fas$fa_DASH_compress_DASH_arrows_DASH_alt], null)," Collapse all"], null)], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,id], null));
} else {
return null;
}
})();
return res31194;
});
nw_calculator.views.delete_item_button = (function nw_calculator$views$delete_item_button(item_index){
var with_let31257 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let31257);
var temp__5757__auto___31260 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___31260 == null)){
} else {
var c__14347__auto___31261 = temp__5757__auto___31260;
if((with_let31257.generation === c__14347__auto___31261.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let31257.generation = c__14347__auto___31261.ratomGeneration);
}

var init31258 = (with_let31257.length === (0));
var delete_item_BANG_ = ((((init31258) || (cljs.core.not(with_let31257.hasOwnProperty((0))))))?(with_let31257[(0)] = (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_remove_DASH_item,item_index], null));
})):(with_let31257[(0)]));
var res31259 = (function (){var num_selected_items = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_num_DASH_selected_DASH_item_DASH_refs], null)));
var disable_delete_button_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),num_selected_items);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.circular_button_component,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,"absolute text-xl top-2 right-0 border-0 flex-none",cljs.core.cst$kw$disabled,disable_delete_button_QMARK_,cljs.core.cst$kw$on_DASH_click,delete_item_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fas$fa_DASH_trash], null)], null);
})();
return res31259;
});
nw_calculator.views.item_cards = (function nw_calculator$views$item_cards(){
var num_selected_items = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_num_DASH_selected_DASH_item_DASH_refs], null)));
var num_resolved_selected_items = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_num_DASH_resolved_DASH_selected_DASH_items], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_,(function (){var iter__4611__auto__ = (function nw_calculator$views$item_cards_$_iter__31262(s__31263){
return (new cljs.core.LazySeq(null,(function (){
var s__31263__$1 = s__31263;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__31263__$1);
if(temp__5753__auto__){
var s__31263__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31263__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__31263__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__31265 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__31264 = (0);
while(true){
if((i__31264 < size__4610__auto__)){
var item_index = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4609__auto__,i__31264);
cljs.core.chunk_append(b__31265,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.card_component,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.delete_item_button,item_index], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$bg_DASH_inherit$mt_DASH_2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.searchable_item_tree,item_index], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,item_index], null)));

var G__31266 = (i__31264 + (1));
i__31264 = G__31266;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31265),nw_calculator$views$item_cards_$_iter__31262(cljs.core.chunk_rest(s__31263__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31265),null);
}
} else {
var item_index = cljs.core.first(s__31263__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.card_component,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.delete_item_button,item_index], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$bg_DASH_inherit$mt_DASH_2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.searchable_item_tree,item_index], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,item_index], null)),nw_calculator$views$item_cards_$_iter__31262(cljs.core.rest(s__31263__$2)));
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
var with_let31267 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let31267);
var temp__5757__auto___31270 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___31270 == null)){
} else {
var c__14347__auto___31271 = temp__5757__auto___31270;
if((with_let31267.generation === c__14347__auto___31271.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let31267.generation = c__14347__auto___31271.ratomGeneration);
}

var init31268 = (with_let31267.length === (0));
var add_empty_item_BANG_ = ((((init31268) || (cljs.core.not(with_let31267.hasOwnProperty((0))))))?(with_let31267[(0)] = (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_add_DASH_empty_DASH_item], null));
})):(with_let31267[(0)]));
var remove_items_BANG_ = ((((init31268) || (cljs.core.not(with_let31267.hasOwnProperty((1))))))?(with_let31267[(1)] = (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_remove_DASH_all_DASH_items], null));
})):(with_let31267[(1)]));
var res31269 = (function (){var num_items = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_num_DASH_selected_DASH_item_DASH_refs], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$flex$gap_DASH_6$md_COLON_gap_DASH_8$flex_DASH_wrap$justify_DASH_center,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$button$w_DASH_64,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,add_empty_item_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fas$fa_DASH_plus_DASH_circle], null)," Add another item"], null),(((num_items > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$button$w_DASH_64,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,remove_items_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fas$fa_DASH_trash], null)," Remove all items"], null):null)], null);
})();
return res31269;
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
