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
goog.require('oops.core');
nw_calculator.views.global$module$react = goog.global["React"];
nw_calculator.views.basic_item = (function nw_calculator$views$basic_item(item_map){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.item_component,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$item_DASH_map,item_map,cljs.core.cst$kw$custom_DASH_quantity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_], null)], null)], null);
});
nw_calculator.views.search = (function nw_calculator$views$search(item_index){
var with_let31166 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let31166);
var temp__5757__auto___31172 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___31172 == null)){
} else {
var c__14347__auto___31173 = temp__5757__auto___31172;
if((with_let31166.generation === c__14347__auto___31173.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let31166.generation = c__14347__auto___31173.ratomGeneration);
}

var init31167 = (with_let31166.length === (0));
var search_BANG_ = ((((init31167) || (cljs.core.not(with_let31166.hasOwnProperty((0))))))?(with_let31166[(0)] = nw_calculator.utilities.debounce((function (query){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_search,item_index,query], null));
}),(100))):(with_let31166[(0)]));
var select_item_BANG_ = ((((init31167) || (cljs.core.not(with_let31166.hasOwnProperty((1))))))?(with_let31166[(1)] = (function (p__31169){
var map__31170 = p__31169;
var map__31170__$1 = cljs.core.__destructure_map(map__31170);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31170__$1,cljs.core.cst$kw$id);
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_select_DASH_item,item_index,id], null));
})):(with_let31166[(1)]));
var clear_search_BANG_ = ((((init31167) || (cljs.core.not(with_let31166.hasOwnProperty((2))))))?(with_let31166[(2)] = (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_clear_DASH_search,item_index], null));
})):(with_let31166[(2)]));
var res31168 = (function (){var results = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_search_DASH_results,item_index], null)));
var map__31171 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_resolved_DASH_selected_DASH_item,item_index], null)));
var map__31171__$1 = cljs.core.__destructure_map(map__31171);
var item_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31171__$1,cljs.core.cst$kw$name);
var searching_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_searching_QMARK_], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$f_GT_,nw_calculator.components.search_component,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$results,results,cljs.core.cst$kw$input_DASH_props,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$placeholder,"\uD83D\uDD0D Search for an item",cljs.core.cst$kw$default_DASH_value,item_name], null),cljs.core.cst$kw$get_DASH_value,cljs.core.cst$kw$name,cljs.core.cst$kw$make_DASH_result,nw_calculator.views.basic_item,cljs.core.cst$kw$on_DASH_search,search_BANG_,cljs.core.cst$kw$loading_QMARK_,searching_QMARK_,cljs.core.cst$kw$on_DASH_clear,clear_search_BANG_,cljs.core.cst$kw$on_DASH_select,select_item_BANG_], null)], null);
})();
return res31168;
});
nw_calculator.views.dropdown = (function nw_calculator$views$dropdown(p__31174){
var map__31175 = p__31174;
var map__31175__$1 = cljs.core.__destructure_map(map__31175);
var selected_option_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31175__$1,cljs.core.cst$kw$name);
var category_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31175__$1,cljs.core.cst$kw$path);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31175__$1,cljs.core.cst$kw$options);
var category_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31175__$1,cljs.core.cst$kw$category_DASH_name);
var with_let31176 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let31176);
var temp__5757__auto___31181 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___31181 == null)){
} else {
var c__14347__auto___31182 = temp__5757__auto___31181;
if((with_let31176.generation === c__14347__auto___31182.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let31176.generation = c__14347__auto___31182.ratomGeneration);
}

var init31177 = (with_let31176.length === (0));
var select_option_BANG_ = ((((init31177) || (cljs.core.not(with_let31176.hasOwnProperty((0))))))?(with_let31176[(0)] = (function (p__31179){
var map__31180 = p__31179;
var map__31180__$1 = cljs.core.__destructure_map(map__31180);
var selected_option_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31180__$1,cljs.core.cst$kw$id);
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_select_DASH_option,category_path,selected_option_id], null));
})):(with_let31176[(0)]));
var res31178 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$f_GT_,nw_calculator.components.dropdown_component,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$input_DASH_props,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$placeholder,category_name,cljs.core.cst$kw$default_DASH_value,selected_option_name], null),cljs.core.cst$kw$on_DASH_select,select_option_BANG_,cljs.core.cst$kw$container_DASH_props,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"bg-white"], null),cljs.core.cst$kw$make_DASH_option,nw_calculator.views.basic_item,cljs.core.cst$kw$get_DASH_value,cljs.core.cst$kw$name,cljs.core.cst$kw$options,options], null)], null);
return res31178;
});
nw_calculator.views.custom_item_quantity = (function nw_calculator$views$custom_item_quantity(p__31183){
var map__31184 = p__31183;
var map__31184__$1 = cljs.core.__destructure_map(map__31184);
var editable_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31184__$1,cljs.core.cst$kw$editable_QMARK_);
var discount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31184__$1,cljs.core.cst$kw$discount);
var quantity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31184__$1,cljs.core.cst$kw$quantity);
var item_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31184__$1,cljs.core.cst$kw$item_DASH_index);
var with_let31185 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let31185);
var temp__5757__auto___31191 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___31191 == null)){
} else {
var c__14347__auto___31192 = temp__5757__auto___31191;
if((with_let31185.generation === c__14347__auto___31192.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let31185.generation = c__14347__auto___31192.ratomGeneration);
}

var init31186 = (with_let31185.length === (0));
var set_quantity_multiplier_BANG_ = ((((init31186) || (cljs.core.not(with_let31185.hasOwnProperty((0))))))?(with_let31185[(0)] = (function (event){
var multiplier = nw_calculator.utilities.parse_pos.cljs$core$IFn$_invoke$arity$1((function (){var target_obj_31188 = event;
var next_obj_31189 = (target_obj_31188["target"]);
if((!((next_obj_31189 == null)))){
var next_obj_31190 = (next_obj_31189["value"]);
if((!((next_obj_31190 == null)))){
return next_obj_31190;
} else {
return null;
}
} else {
return null;
}
})());
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_set_DASH_quantity_DASH_multiplier,item_index,multiplier], null));
})):(with_let31185[(0)]));
var min_quantity_multiplier = ((((init31186) || (cljs.core.not(with_let31185.hasOwnProperty((1))))))?(with_let31185[(1)] = (1)):(with_let31185[(1)]));
var res31187 = (function (){var quantity_multiplier_STAR_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_quantity_DASH_multiplier,item_index], null)));
var additional_item_bonuses_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_additional_DASH_item_DASH_bonuses_QMARK_], null)));
var quantity_multiplier = (cljs.core.truth_(isNaN(quantity_multiplier_STAR_))?min_quantity_multiplier:quantity_multiplier_STAR_);
var show_discount_QMARK_ = (function (){var and__4210__auto__ = (discount > (0));
if(and__4210__auto__){
return additional_item_bonuses_QMARK_;
} else {
return and__4210__auto__;
}
})();
var editable_stack_QMARK_ = (function (){var and__4210__auto__ = editable_QMARK_;
if(cljs.core.truth_(and__4210__auto__)){
return (quantity > (1));
} else {
return and__4210__auto__;
}
})();
var editable_with_discount_QMARK_ = (function (){var and__4210__auto__ = editable_QMARK_;
if(cljs.core.truth_(and__4210__auto__)){
return show_discount_QMARK_;
} else {
return and__4210__auto__;
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$relative$overflow_DASH_visible,(cljs.core.truth_(editable_stack_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$f_GT_,nw_calculator.components.multiplication_component,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$base,quantity,cljs.core.cst$kw$container_DASH_props,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"mb-20"], null),cljs.core.cst$kw$input_DASH_props,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$default_DASH_value,quantity_multiplier,cljs.core.cst$kw$placeholder,min_quantity_multiplier,cljs.core.cst$kw$on_DASH_input,set_quantity_multiplier_BANG_], null)], null)], null),(cljs.core.truth_(show_discount_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$absolute$_DASH_top_DASH_6$left_DASH_0$text_DASH_green_DASH_500$text_DASH_base$whitespace_DASH_nowrap,(function (){var quotient = (discount / quantity);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(quantity_multiplier)," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(quotient)," = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((quantity_multiplier - quotient))].join('');
})()], null):null)], null):(cljs.core.truth_(editable_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$basic_DASH_input$w_DASH_12_DASH_imp,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$number,cljs.core.cst$kw$default_DASH_value,quantity_multiplier,cljs.core.cst$kw$placeholder,min_quantity_multiplier,cljs.core.cst$kw$on_DASH_input,set_quantity_multiplier_BANG_], null)], null),(cljs.core.truth_(show_discount_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$absolute$_DASH_top_DASH_6$left_DASH_0$text_DASH_green_DASH_500$text_DASH_base$whitespace_DASH_nowrap,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(quantity_multiplier)," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(discount)," = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((quantity_multiplier - discount))].join('')], null):null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,quantity], null),(cljs.core.truth_(show_discount_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$absolute$_DASH_top_DASH_6$right_DASH_0$text_DASH_green_DASH_500$text_DASH_base$whitespace_DASH_nowrap,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((quantity + discount))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(discount)].join('')], null):null)], null)
))], null);
})();
return res31187;
});
nw_calculator.views.custom_item_name = (function nw_calculator$views$custom_item_name(p__31193){
var map__31194 = p__31193;
var map__31194__$1 = cljs.core.__destructure_map(map__31194);
var map__31195 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31194__$1,cljs.core.cst$kw$node_DASH_data);
var map__31195__$1 = cljs.core.__destructure_map(map__31195);
var map__31196 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31195__$1,cljs.core.cst$kw$node);
var map__31196__$1 = cljs.core.__destructure_map(map__31196);
var item_map = map__31196__$1;
var name_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31196__$1,cljs.core.cst$kw$name);
var external_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31196__$1,cljs.core.cst$kw$external_DASH_url);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31196__$1,cljs.core.cst$kw$options);
var root_node_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31195__$1,cljs.core.cst$kw$root_DASH_node_QMARK_);
var item_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31194__$1,cljs.core.cst$kw$item_DASH_index);
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
var with_let31197 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let31197);
var temp__5757__auto___31200 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___31200 == null)){
} else {
var c__14347__auto___31201 = temp__5757__auto___31200;
if((with_let31197.generation === c__14347__auto___31201.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let31197.generation = c__14347__auto___31201.ratomGeneration);
}

var init31198 = (with_let31197.length === (0));
var image_with_popup = ((((init31198) || (cljs.core.not(with_let31197.hasOwnProperty((0))))))?(with_let31197[(0)] = (function (url){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$f_GT_,nw_calculator.components.item.component.image_with_popup,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,url], null)], null);
})):(with_let31197[(0)]));
var res31199 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$flex$flex_DASH_grow$gap_DASH_4,cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_], null),cljs.core.map.cljs$core$IFn$_invoke$arity$1(image_with_popup),image_urls)], null);
return res31199;
});
nw_calculator.views.item = (function nw_calculator$views$item(p__31202,item_index){
var map__31203 = p__31202;
var map__31203__$1 = cljs.core.__destructure_map(map__31203);
var node_data = map__31203__$1;
var map__31204 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31203__$1,cljs.core.cst$kw$node);
var map__31204__$1 = cljs.core.__destructure_map(map__31204);
var item_map = map__31204__$1;
var quantity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31204__$1,cljs.core.cst$kw$quantity);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31204__$1,cljs.core.cst$kw$path);
var discount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31204__$1,cljs.core.cst$kw$discount);
var root_node_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31203__$1,cljs.core.cst$kw$root_DASH_node_QMARK_);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.item_component,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$popup_DASH_on_DASH_hover_QMARK_,true,cljs.core.cst$kw$container_DASH_props,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,["m-0-imp",(cljs.core.truth_(root_node_QMARK_)?" bg-inherit":null)].join('')], null),cljs.core.cst$kw$item_DASH_map,item_map,cljs.core.cst$kw$custom_DASH_quantity,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.custom_item_quantity,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$editable_QMARK_,root_node_QMARK_,cljs.core.cst$kw$discount,discount,cljs.core.cst$kw$quantity,quantity,cljs.core.cst$kw$item_DASH_index,item_index], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,"quantity")], null)),cljs.core.cst$kw$custom_DASH_name,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.custom_item_name,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$node_DASH_data,node_data,cljs.core.cst$kw$item_DASH_index,item_index], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,path], null))], null)], null);
});
nw_calculator.views.searchable_item_tree = (function nw_calculator$views$searchable_item_tree(item_index){
var with_let31206 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let31206);
var temp__5757__auto___31242 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___31242 == null)){
} else {
var c__14347__auto___31243 = temp__5757__auto___31242;
if((with_let31206.generation === c__14347__auto___31243.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let31206.generation = c__14347__auto___31243.ratomGeneration);
}

var init31207 = (with_let31206.length === (0));
var collapsed_item_updaters = ((((init31207) || (cljs.core.not(with_let31206.hasOwnProperty((0))))))?(with_let31206[(0)] = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY)):(with_let31206[(0)]));
var set_collapsed_updater_BANG_ = ((((init31207) || (cljs.core.not(with_let31206.hasOwnProperty((1))))))?(with_let31206[(1)] = (function (id,updater){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(collapsed_item_updaters,cljs.core.assoc,id,updater);
})):(with_let31206[(1)]));
var unset_collapsed_updater_BANG_ = ((((init31207) || (cljs.core.not(with_let31206.hasOwnProperty((2))))))?(with_let31206[(2)] = (function (id){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(collapsed_item_updaters,cljs.core.dissoc,id);
})):(with_let31206[(2)]));
var expand_all_BANG_ = ((((init31207) || (cljs.core.not(with_let31206.hasOwnProperty((3))))))?(with_let31206[(3)] = (function (){
var seq__31209 = cljs.core.seq(cljs.core.deref(collapsed_item_updaters));
var chunk__31210 = null;
var count__31211 = (0);
var i__31212 = (0);
while(true){
if((i__31212 < count__31211)){
var vec__31219 = chunk__31210.cljs$core$IIndexed$_nth$arity$2(null,i__31212);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31219,(0),null);
var set_collapsed_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31219,(1),null);
(set_collapsed_item.cljs$core$IFn$_invoke$arity$1 ? set_collapsed_item.cljs$core$IFn$_invoke$arity$1(false) : set_collapsed_item.call(null,false));


var G__31244 = seq__31209;
var G__31245 = chunk__31210;
var G__31246 = count__31211;
var G__31247 = (i__31212 + (1));
seq__31209 = G__31244;
chunk__31210 = G__31245;
count__31211 = G__31246;
i__31212 = G__31247;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__31209);
if(temp__5753__auto__){
var seq__31209__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31209__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__31209__$1);
var G__31248 = cljs.core.chunk_rest(seq__31209__$1);
var G__31249 = c__4638__auto__;
var G__31250 = cljs.core.count(c__4638__auto__);
var G__31251 = (0);
seq__31209 = G__31248;
chunk__31210 = G__31249;
count__31211 = G__31250;
i__31212 = G__31251;
continue;
} else {
var vec__31222 = cljs.core.first(seq__31209__$1);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31222,(0),null);
var set_collapsed_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31222,(1),null);
(set_collapsed_item.cljs$core$IFn$_invoke$arity$1 ? set_collapsed_item.cljs$core$IFn$_invoke$arity$1(false) : set_collapsed_item.call(null,false));


var G__31252 = cljs.core.next(seq__31209__$1);
var G__31253 = null;
var G__31254 = (0);
var G__31255 = (0);
seq__31209 = G__31252;
chunk__31210 = G__31253;
count__31211 = G__31254;
i__31212 = G__31255;
continue;
}
} else {
return null;
}
}
break;
}
})):(with_let31206[(3)]));
var collapse_all_BANG_ = ((((init31207) || (cljs.core.not(with_let31206.hasOwnProperty((4))))))?(with_let31206[(4)] = (function (){
var seq__31225 = cljs.core.seq(cljs.core.deref(collapsed_item_updaters));
var chunk__31226 = null;
var count__31227 = (0);
var i__31228 = (0);
while(true){
if((i__31228 < count__31227)){
var vec__31235 = chunk__31226.cljs$core$IIndexed$_nth$arity$2(null,i__31228);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31235,(0),null);
var set_collapsed_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31235,(1),null);
(set_collapsed_item.cljs$core$IFn$_invoke$arity$1 ? set_collapsed_item.cljs$core$IFn$_invoke$arity$1(true) : set_collapsed_item.call(null,true));


var G__31256 = seq__31225;
var G__31257 = chunk__31226;
var G__31258 = count__31227;
var G__31259 = (i__31228 + (1));
seq__31225 = G__31256;
chunk__31226 = G__31257;
count__31227 = G__31258;
i__31228 = G__31259;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__31225);
if(temp__5753__auto__){
var seq__31225__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31225__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__31225__$1);
var G__31260 = cljs.core.chunk_rest(seq__31225__$1);
var G__31261 = c__4638__auto__;
var G__31262 = cljs.core.count(c__4638__auto__);
var G__31263 = (0);
seq__31225 = G__31260;
chunk__31226 = G__31261;
count__31227 = G__31262;
i__31228 = G__31263;
continue;
} else {
var vec__31238 = cljs.core.first(seq__31225__$1);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31238,(0),null);
var set_collapsed_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31238,(1),null);
(set_collapsed_item.cljs$core$IFn$_invoke$arity$1 ? set_collapsed_item.cljs$core$IFn$_invoke$arity$1(true) : set_collapsed_item.call(null,true));


var G__31264 = cljs.core.next(seq__31225__$1);
var G__31265 = null;
var G__31266 = (0);
var G__31267 = (0);
seq__31225 = G__31264;
chunk__31226 = G__31265;
count__31227 = G__31266;
i__31228 = G__31267;
continue;
}
} else {
return null;
}
}
break;
}
})):(with_let31206[(4)]));
var item_STAR_ = ((((init31207) || (cljs.core.not(with_let31206.hasOwnProperty((5))))))?(with_let31206[(5)] = (function (node){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.item,node,item_index], null);
})):(with_let31206[(5)]));
var unrenderable_QMARK_ = ((((init31207) || (cljs.core.not(with_let31206.hasOwnProperty((6))))))?(with_let31206[(6)] = (function (p1__31205_SHARP_){
return cljs.core.cst$kw$as_DASH_is_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__31205_SHARP_));
})):(with_let31206[(6)]));
var res31208 = (function (){var map__31241 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_resolved_DASH_selected_DASH_item,item_index], null)));
var map__31241__$1 = cljs.core.__destructure_map(map__31241);
var selected_item = map__31241__$1;
var ingredients = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31241__$1,cljs.core.cst$kw$ingredients);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31241__$1,cljs.core.cst$kw$id);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$bg_DASH_inherit$flex$flex_DASH_col$gap_DASH_10$items_DASH_center,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,nw_calculator.components.collapsible_tree.component.collapsible_list_provider,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$set_DASH_collapsed_DASH_updater,set_collapsed_updater_BANG_,cljs.core.cst$kw$unset_DASH_collapsed_DASH_updater,unset_collapsed_updater_BANG_], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.collapsible_tree_component,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$tree_DASH_map,selected_item,cljs.core.cst$kw$children,cljs.core.cst$kw$ingredients,cljs.core.cst$kw$make_DASH_node,item_STAR_,cljs.core.cst$kw$ignore_QMARK_,unrenderable_QMARK_], null)], null)], null),(cljs.core.truth_(cljs.core.not_empty(ingredients))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$flex$gap_DASH_6,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$button$button_DASH_outline$w_DASH_52$md_COLON_w_DASH_60,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,expand_all_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fas$fa_DASH_expand_DASH_arrows], null)," Expand all"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$button$button_DASH_outline$w_DASH_52$md_COLON_w_DASH_60,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,collapse_all_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fas$fa_DASH_compress_DASH_arrows_DASH_alt], null)," Collapse all"], null)], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,id], null));
})();
return res31208;
});
nw_calculator.views.summary_item_tree = (function nw_calculator$views$summary_item_tree(){
var with_let31269 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let31269);
var temp__5757__auto___31308 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___31308 == null)){
} else {
var c__14347__auto___31309 = temp__5757__auto___31308;
if((with_let31269.generation === c__14347__auto___31309.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let31269.generation = c__14347__auto___31309.ratomGeneration);
}

var init31270 = (with_let31269.length === (0));
var collapsed_item_updaters = ((((init31270) || (cljs.core.not(with_let31269.hasOwnProperty((0))))))?(with_let31269[(0)] = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY)):(with_let31269[(0)]));
var set_collapsed_updater_BANG_ = ((((init31270) || (cljs.core.not(with_let31269.hasOwnProperty((1))))))?(with_let31269[(1)] = (function (id,updater){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(collapsed_item_updaters,cljs.core.assoc,id,updater);
})):(with_let31269[(1)]));
var unset_collapsed_updater_BANG_ = ((((init31270) || (cljs.core.not(with_let31269.hasOwnProperty((2))))))?(with_let31269[(2)] = (function (id){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(collapsed_item_updaters,cljs.core.dissoc,id);
})):(with_let31269[(2)]));
var expand_all_BANG_ = ((((init31270) || (cljs.core.not(with_let31269.hasOwnProperty((3))))))?(with_let31269[(3)] = (function (){
var seq__31272 = cljs.core.seq(cljs.core.deref(collapsed_item_updaters));
var chunk__31273 = null;
var count__31274 = (0);
var i__31275 = (0);
while(true){
if((i__31275 < count__31274)){
var vec__31282 = chunk__31273.cljs$core$IIndexed$_nth$arity$2(null,i__31275);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31282,(0),null);
var set_collapsed_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31282,(1),null);
(set_collapsed_item.cljs$core$IFn$_invoke$arity$1 ? set_collapsed_item.cljs$core$IFn$_invoke$arity$1(false) : set_collapsed_item.call(null,false));


var G__31310 = seq__31272;
var G__31311 = chunk__31273;
var G__31312 = count__31274;
var G__31313 = (i__31275 + (1));
seq__31272 = G__31310;
chunk__31273 = G__31311;
count__31274 = G__31312;
i__31275 = G__31313;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__31272);
if(temp__5753__auto__){
var seq__31272__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31272__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__31272__$1);
var G__31314 = cljs.core.chunk_rest(seq__31272__$1);
var G__31315 = c__4638__auto__;
var G__31316 = cljs.core.count(c__4638__auto__);
var G__31317 = (0);
seq__31272 = G__31314;
chunk__31273 = G__31315;
count__31274 = G__31316;
i__31275 = G__31317;
continue;
} else {
var vec__31285 = cljs.core.first(seq__31272__$1);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31285,(0),null);
var set_collapsed_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31285,(1),null);
(set_collapsed_item.cljs$core$IFn$_invoke$arity$1 ? set_collapsed_item.cljs$core$IFn$_invoke$arity$1(false) : set_collapsed_item.call(null,false));


var G__31318 = cljs.core.next(seq__31272__$1);
var G__31319 = null;
var G__31320 = (0);
var G__31321 = (0);
seq__31272 = G__31318;
chunk__31273 = G__31319;
count__31274 = G__31320;
i__31275 = G__31321;
continue;
}
} else {
return null;
}
}
break;
}
})):(with_let31269[(3)]));
var collapse_all_BANG_ = ((((init31270) || (cljs.core.not(with_let31269.hasOwnProperty((4))))))?(with_let31269[(4)] = (function (){
var seq__31288 = cljs.core.seq(cljs.core.deref(collapsed_item_updaters));
var chunk__31289 = null;
var count__31290 = (0);
var i__31291 = (0);
while(true){
if((i__31291 < count__31290)){
var vec__31298 = chunk__31289.cljs$core$IIndexed$_nth$arity$2(null,i__31291);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31298,(0),null);
var set_collapsed_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31298,(1),null);
(set_collapsed_item.cljs$core$IFn$_invoke$arity$1 ? set_collapsed_item.cljs$core$IFn$_invoke$arity$1(true) : set_collapsed_item.call(null,true));


var G__31322 = seq__31288;
var G__31323 = chunk__31289;
var G__31324 = count__31290;
var G__31325 = (i__31291 + (1));
seq__31288 = G__31322;
chunk__31289 = G__31323;
count__31290 = G__31324;
i__31291 = G__31325;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__31288);
if(temp__5753__auto__){
var seq__31288__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31288__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__31288__$1);
var G__31326 = cljs.core.chunk_rest(seq__31288__$1);
var G__31327 = c__4638__auto__;
var G__31328 = cljs.core.count(c__4638__auto__);
var G__31329 = (0);
seq__31288 = G__31326;
chunk__31289 = G__31327;
count__31290 = G__31328;
i__31291 = G__31329;
continue;
} else {
var vec__31301 = cljs.core.first(seq__31288__$1);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31301,(0),null);
var set_collapsed_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31301,(1),null);
(set_collapsed_item.cljs$core$IFn$_invoke$arity$1 ? set_collapsed_item.cljs$core$IFn$_invoke$arity$1(true) : set_collapsed_item.call(null,true));


var G__31330 = cljs.core.next(seq__31288__$1);
var G__31331 = null;
var G__31332 = (0);
var G__31333 = (0);
seq__31288 = G__31330;
chunk__31289 = G__31331;
count__31290 = G__31332;
i__31291 = G__31333;
continue;
}
} else {
return null;
}
}
break;
}
})):(with_let31269[(4)]));
var item_STAR_ = ((((init31270) || (cljs.core.not(with_let31269.hasOwnProperty((5))))))?(with_let31269[(5)] = (function (p__31304){
var map__31305 = p__31304;
var map__31305__$1 = cljs.core.__destructure_map(map__31305);
var map__31306 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31305__$1,cljs.core.cst$kw$node);
var map__31306__$1 = cljs.core.__destructure_map(map__31306);
var item_map = map__31306__$1;
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31306__$1,cljs.core.cst$kw$items);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.item_component,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$item_DASH_map,item_map,cljs.core.cst$kw$popup_DASH_on_DASH_hover_QMARK_,true,cljs.core.cst$kw$custom_DASH_image,(function (){var temp__5751__auto__ = cljs.core.not_empty(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$png_DASH_url,items));
if(cljs.core.truth_(temp__5751__auto__)){
var png_urls = temp__5751__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.custom_item_images,png_urls], null);
} else {
return null;
}
})()], null)], null);
})):(with_let31269[(5)]));
var unrenderable_QMARK_ = ((((init31270) || (cljs.core.not(with_let31269.hasOwnProperty((6))))))?(with_let31269[(6)] = (function (p1__31268_SHARP_){
return cljs.core.cst$kw$as_DASH_is_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__31268_SHARP_));
})):(with_let31269[(6)]));
var res31271 = (function (){var temp__5751__auto__ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_selected_DASH_items_DASH_summary], null)));
if(cljs.core.truth_(temp__5751__auto__)){
var map__31307 = temp__5751__auto__;
var map__31307__$1 = cljs.core.__destructure_map(map__31307);
var selected_item = map__31307__$1;
var ingredients = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31307__$1,cljs.core.cst$kw$ingredients);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31307__$1,cljs.core.cst$kw$id);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$bg_DASH_inherit$flex$flex_DASH_col$gap_DASH_10$items_DASH_center,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,nw_calculator.components.collapsible_tree.component.collapsible_list_provider,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$set_DASH_collapsed_DASH_updater,set_collapsed_updater_BANG_,cljs.core.cst$kw$unset_DASH_collapsed_DASH_updater,unset_collapsed_updater_BANG_], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.collapsible_tree_component,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$tree_DASH_map,selected_item,cljs.core.cst$kw$children,cljs.core.cst$kw$ingredients,cljs.core.cst$kw$make_DASH_node,item_STAR_,cljs.core.cst$kw$ignore_QMARK_,unrenderable_QMARK_], null)], null)], null),(cljs.core.truth_(cljs.core.not_empty(ingredients))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$flex$gap_DASH_6,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$button$button_DASH_outline$w_DASH_52$md_COLON_w_DASH_60,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,expand_all_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fas$fa_DASH_expand_DASH_arrows], null)," Expand all"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$button$button_DASH_outline$w_DASH_52$md_COLON_w_DASH_60,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,collapse_all_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fas$fa_DASH_compress_DASH_arrows_DASH_alt], null)," Collapse all"], null)], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,id], null));
} else {
return null;
}
})();
return res31271;
});
nw_calculator.views.delete_item_button = (function nw_calculator$views$delete_item_button(item_index){
var with_let31334 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let31334);
var temp__5757__auto___31337 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___31337 == null)){
} else {
var c__14347__auto___31338 = temp__5757__auto___31337;
if((with_let31334.generation === c__14347__auto___31338.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let31334.generation = c__14347__auto___31338.ratomGeneration);
}

var init31335 = (with_let31334.length === (0));
var delete_item_BANG_ = ((((init31335) || (cljs.core.not(with_let31334.hasOwnProperty((0))))))?(with_let31334[(0)] = (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_remove_DASH_item,item_index], null));
})):(with_let31334[(0)]));
var res31336 = (function (){var num_selected_items = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_num_DASH_selected_DASH_item_DASH_refs], null)));
var disable_delete_button_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),num_selected_items);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.circular_button_component,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,"absolute text-xl top-2 right-0 border-0 flex-none",cljs.core.cst$kw$disabled,disable_delete_button_QMARK_,cljs.core.cst$kw$on_DASH_click,delete_item_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fas$fa_DASH_trash], null)], null);
})();
return res31336;
});
nw_calculator.views.item_cards = (function nw_calculator$views$item_cards(){
var num_selected_items = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_num_DASH_selected_DASH_item_DASH_refs], null)));
var num_resolved_selected_items = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_num_DASH_resolved_DASH_selected_DASH_items], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_,(function (){var iter__4611__auto__ = (function nw_calculator$views$item_cards_$_iter__31339(s__31340){
return (new cljs.core.LazySeq(null,(function (){
var s__31340__$1 = s__31340;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__31340__$1);
if(temp__5753__auto__){
var s__31340__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31340__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__31340__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__31342 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__31341 = (0);
while(true){
if((i__31341 < size__4610__auto__)){
var item_index = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4609__auto__,i__31341);
cljs.core.chunk_append(b__31342,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.card_component,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.delete_item_button,item_index], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$bg_DASH_inherit$mt_DASH_2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.searchable_item_tree,item_index], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,item_index], null)));

var G__31343 = (i__31341 + (1));
i__31341 = G__31343;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31342),nw_calculator$views$item_cards_$_iter__31339(cljs.core.chunk_rest(s__31340__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31342),null);
}
} else {
var item_index = cljs.core.first(s__31340__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.card_component,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.delete_item_button,item_index], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$bg_DASH_inherit$mt_DASH_2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.searchable_item_tree,item_index], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,item_index], null)),nw_calculator$views$item_cards_$_iter__31339(cljs.core.rest(s__31340__$2)));
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
var with_let31344 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let31344);
var temp__5757__auto___31347 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___31347 == null)){
} else {
var c__14347__auto___31348 = temp__5757__auto___31347;
if((with_let31344.generation === c__14347__auto___31348.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let31344.generation = c__14347__auto___31348.ratomGeneration);
}

var init31345 = (with_let31344.length === (0));
var add_empty_item_BANG_ = ((((init31345) || (cljs.core.not(with_let31344.hasOwnProperty((0))))))?(with_let31344[(0)] = (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_add_DASH_empty_DASH_item], null));
})):(with_let31344[(0)]));
var remove_items_BANG_ = ((((init31345) || (cljs.core.not(with_let31344.hasOwnProperty((1))))))?(with_let31344[(1)] = (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_remove_DASH_all_DASH_items], null));
})):(with_let31344[(1)]));
var res31346 = (function (){var num_items = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_num_DASH_selected_DASH_item_DASH_refs], null)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$flex$gap_DASH_6$md_COLON_gap_DASH_8$flex_DASH_wrap$justify_DASH_center,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$button$w_DASH_64,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,add_empty_item_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fas$fa_DASH_plus_DASH_circle], null)," Add another item"], null),(((num_items > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$button$w_DASH_64,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,remove_items_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fas$fa_DASH_trash], null)," Remove all items"], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$f_GT_,nw_calculator.components.copy_link_component], null)], null);
})();
return res31346;
});
nw_calculator.views.header = (function nw_calculator$views$header(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$flex$flex_DASH_col$items_DASH_center,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1$color_DASH_off_DASH_white$text_DASH_14$md_COLON_text_DASH_7xl_DASH_imp$text_DASH_center$animate__animated$animate__fadeIn$animate__slower,"New World"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2$color_DASH_off_DASH_white$text_DASH_8$md_COLON_text_DASH_5xl_DASH_imp$text_DASH_center$animate__animated$animate__fadeIn$animate__slower$animate__delay_DASH_1s,"Crafting Calculator"], null)], null);
});
nw_calculator.views.body = (function nw_calculator$views$body(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$relative$z_DASH_30$flex_DASH_grow$flex$gap_DASH_14$flex_DASH_col$items_DASH_center$flex_DASH_col$animate__animated$animate__fadeIn$animate__slower$animate__delay_DASH_1s,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.item_cards], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.actions], null)], null);
});
nw_calculator.views.footer = (function nw_calculator$views$footer(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$relative$z_DASH_10$py_DASH_4$flex$flex$gap_DASH_5$justify_DASH_center$text_DASH_4xl,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$color_DASH_off_DASH_white$text_DASH_base$absolute$left_DASH_4$bottom_DASH_4,nw_calculator.config.version], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$cursor_DASH_pointer,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"https://github.com/sansarip/nw-calculator",cljs.core.cst$kw$target,"_blank"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fab$fa_DASH_github], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$cursor_DASH_pointer,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"https://discord.gg/FCqzwycR23",cljs.core.cst$kw$target,"_blank"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fab$fa_DASH_discord], null)], null)], null);
});
nw_calculator.views.loader = (function nw_calculator$views$loader(){
if(cljs.core.truth_(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_loading_QMARK_], null))))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$absolute$z_DASH_50$h_DASH_full$w_DASH_full$flex$flex_DASH_col$gap_DASH_4$items_DASH_center,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$absolute$top_DASH_72,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.loader_component,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"fa-6x"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3$color_DASH_off_DASH_white$absolute$top_DASH_120,"Steering ship"], null)], null);
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
nw_calculator.views.trade_skill_map = cljs.core.sorted_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$armoring,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$icon,"fas fa-shield",cljs.core.cst$kw$label,"Armoring"], null),cljs.core.cst$kw$arcana,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$icon,"fas fa-book-spells",cljs.core.cst$kw$label,"Arcana"], null),cljs.core.cst$kw$cooking,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$icon,"fas fa-hat-chef",cljs.core.cst$kw$label,"Cooking"], null),cljs.core.cst$kw$engineering,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$icon,"fas fa-cog",cljs.core.cst$kw$label,"Engineering"], null),cljs.core.cst$kw$furnishing,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$icon,"fas fa-chair",cljs.core.cst$kw$label,"Furnishing"], null),cljs.core.cst$kw$jewelcrafting,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$icon,"fas fa-gem",cljs.core.cst$kw$label,"Jewelcrafting"], null),cljs.core.cst$kw$leatherworking,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$icon,"fas fa-deer",cljs.core.cst$kw$label,"Leatherworking"], null),cljs.core.cst$kw$smelting,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$icon,"fas fa-fireplace",cljs.core.cst$kw$label,"Smelting"], null),cljs.core.cst$kw$stonecutting,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$icon,"fas fa-cube",cljs.core.cst$kw$label,"Stonecutting"], null),cljs.core.cst$kw$weaponsmithing,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$icon,"fas fa-sword",cljs.core.cst$kw$label,"Weaponsmithing"], null),cljs.core.cst$kw$weaving,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$icon,"fas fa-scarf",cljs.core.cst$kw$label,"Weaving"], null),cljs.core.cst$kw$woodworking,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$icon,"fas fa-axe",cljs.core.cst$kw$label,"Woodworking"], null)], 0));
nw_calculator.views.trade_skill = (function nw_calculator$views$trade_skill(p__31349){
var map__31350 = p__31349;
var map__31350__$1 = cljs.core.__destructure_map(map__31350);
var skill = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31350__$1,cljs.core.cst$kw$skill);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31350__$1,cljs.core.cst$kw$on_DASH_change,nw_calculator.utilities.no_op);
var map__31351 = (nw_calculator.views.trade_skill_map.cljs$core$IFn$_invoke$arity$1 ? nw_calculator.views.trade_skill_map.cljs$core$IFn$_invoke$arity$1(skill) : nw_calculator.views.trade_skill_map.call(null,skill));
var map__31351__$1 = cljs.core.__destructure_map(map__31351);
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31351__$1,cljs.core.cst$kw$icon);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31351__$1,cljs.core.cst$kw$label);
var value = ((100) * cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_trade_DASH_skill_DASH_bonus,skill], null))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label$m_DASH_0$self_DASH_center$align_DASH_self_DASH_end$col_DASH_start_DASH_1,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$for,skill], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$mr_DASH_4,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,icon], null)], null),label], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$flex$col_DASH_start_DASH_2$gap_DASH_2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$color_DASH_gray$self_DASH_center,"+"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$basic_DASH_input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$default_DASH_value,value,cljs.core.cst$kw$id,skill,cljs.core.cst$kw$on_DASH_change,on_change,cljs.core.cst$kw$type,cljs.core.cst$kw$number,cljs.core.cst$kw$placeholder,(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$color_DASH_gray$self_DASH_center,"%"], null)], null)], null);
});
nw_calculator.views.set_trade_skill_bonus = (function nw_calculator$views$set_trade_skill_bonus(event){
var skill = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((function (){var target_obj_31352 = event;
var next_obj_31353 = (target_obj_31352["target"]);
if((!((next_obj_31353 == null)))){
var next_obj_31354 = (next_obj_31353["id"]);
if((!((next_obj_31354 == null)))){
return next_obj_31354;
} else {
return null;
}
} else {
return null;
}
})());
var value = (function (){var target_obj_31355 = event;
var next_obj_31356 = (target_obj_31355["target"]);
if((!((next_obj_31356 == null)))){
var next_obj_31357 = (next_obj_31356["value"]);
if((!((next_obj_31357 == null)))){
return next_obj_31357;
} else {
return null;
}
} else {
return null;
}
})();
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_set_DASH_trade_DASH_skill_DASH_bonus,skill,(nw_calculator.utilities.parse_pos.cljs$core$IFn$_invoke$arity$1(value) / (100))], null));
});
nw_calculator.views.toggle_additional_item_bonuses = (function nw_calculator$views$toggle_additional_item_bonuses(){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_toggle_DASH_additional_DASH_item_DASH_bonuses], null));
});
nw_calculator.views.profile = (function nw_calculator$views$profile(){
var additional_item_bonuses_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_additional_DASH_item_DASH_bonuses_QMARK_], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.drawer_component,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$container_DASH_props,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"z-40 overflow-x-hidden animate__animated animate__slideInRight animate__delay-1s"], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$grid$gap_DASH_y_DASH_12$gap_DASH_x_DASH_8$md_COLON_max_DASH_w_DASH_3xl,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$grid_DASH_template_DASH_columns,"auto 7rem 1fr"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$header$col_DASH_span_DASH_3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1$text_DASH_8$md_COLON_text_DASH_5xl_DASH_imp,"Trade Skill Bonuses"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p$col_DASH_span_DASH_3$mt_DASH_4,"Enter additional-item-chance bonuses gained from your equipment and trade skill level below.\n        See ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"https://nwdb.info/guides/additional-item-chance",cljs.core.cst$kw$target,"_blank"], null),"here"], null)," for more info."], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label$col_DASH_start_DASH_1,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$for,cljs.core.cst$kw$trade_DASH_skill_DASH_bonus_DASH_toggle], null),"Toggle bonuses"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.toggle_component,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$container_DASH_props,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"col-start-2",cljs.core.cst$kw$id,cljs.core.cst$kw$trade_DASH_skill_DASH_bonus_DASH_toggle], null),cljs.core.cst$kw$checkbox_DASH_props,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$checked,additional_item_bonuses_QMARK_,cljs.core.cst$kw$on_DASH_change,nw_calculator.views.toggle_additional_item_bonuses], null),cljs.core.cst$kw$off,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fas$fa_DASH_times$text_DASH_red_DASH_400$w_DASH_full$h_DASH_full], null),cljs.core.cst$kw$on,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fas$fa_DASH_check$text_DASH_green_DASH_400$w_DASH_full$h_DASH_full], null)], null)], null),(function (){var iter__4611__auto__ = (function nw_calculator$views$profile_$_iter__31358(s__31359){
return (new cljs.core.LazySeq(null,(function (){
var s__31359__$1 = s__31359;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__31359__$1);
if(temp__5753__auto__){
var s__31359__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31359__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__31359__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__31361 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__31360 = (0);
while(true){
if((i__31360 < size__4610__auto__)){
var skill = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4609__auto__,i__31360);
cljs.core.chunk_append(b__31361,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.trade_skill,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$skill,skill,cljs.core.cst$kw$on_DASH_change,nw_calculator.views.set_trade_skill_bonus], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,skill], null)));

var G__31362 = (i__31360 + (1));
i__31360 = G__31362;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31361),nw_calculator$views$profile_$_iter__31358(cljs.core.chunk_rest(s__31359__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31361),null);
}
} else {
var skill = cljs.core.first(s__31359__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.trade_skill,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$skill,skill,cljs.core.cst$kw$on_DASH_change,nw_calculator.views.set_trade_skill_bonus], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,skill], null)),nw_calculator$views$profile_$_iter__31358(cljs.core.rest(s__31359__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(cljs.core.keys(nw_calculator.views.trade_skill_map));
})()], null)], null);
});
nw_calculator.views.content = (function nw_calculator$views$content(){
var show_content_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_ready_QMARK_], null)));
if(cljs.core.truth_(show_content_QMARK_)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.profile], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$relative$h_DASH_full$z_DASH_30$flex$flex_DASH_col$gap_DASH_20$pt_DASH_40$overflow_DASH_y_DASH_auto,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.header], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.body], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.footer], null)], null)], null);
} else {
return null;
}
});
nw_calculator.views.main_panel = (function nw_calculator$views$main_panel(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$z_DASH_10$absolute$bg_DASH_opacity_DASH_75$relative$h_DASH_screen$dark$bg_DASH_raisin_DASH_black$overflow_DASH_x_DASH_hidden,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.loader], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.background], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.background_image], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.content], null)], null);
});
