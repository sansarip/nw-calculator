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
var with_let31151 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let31151);
var temp__5757__auto___31157 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___31157 == null)){
} else {
var c__14347__auto___31158 = temp__5757__auto___31157;
if((with_let31151.generation === c__14347__auto___31158.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let31151.generation = c__14347__auto___31158.ratomGeneration);
}

var init31152 = (with_let31151.length === (0));
var search_BANG_ = ((((init31152) || (cljs.core.not(with_let31151.hasOwnProperty((0))))))?(with_let31151[(0)] = nw_calculator.utilities.debounce((function (query){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_search,item_index,query], null));
}),(100))):(with_let31151[(0)]));
var select_item_BANG_ = ((((init31152) || (cljs.core.not(with_let31151.hasOwnProperty((1))))))?(with_let31151[(1)] = (function (p__31154){
var map__31155 = p__31154;
var map__31155__$1 = cljs.core.__destructure_map(map__31155);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31155__$1,cljs.core.cst$kw$id);
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_select_DASH_item,item_index,id], null));
})):(with_let31151[(1)]));
var clear_search_BANG_ = ((((init31152) || (cljs.core.not(with_let31151.hasOwnProperty((2))))))?(with_let31151[(2)] = (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_clear_DASH_search,item_index], null));
})):(with_let31151[(2)]));
var res31153 = (function (){var results = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_search_DASH_results,item_index], null)));
var map__31156 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_resolved_DASH_selected_DASH_item,item_index], null)));
var map__31156__$1 = cljs.core.__destructure_map(map__31156);
var item_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31156__$1,cljs.core.cst$kw$name);
var searching_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_searching_QMARK_], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$f_GT_,nw_calculator.components.search_component,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$results,results,cljs.core.cst$kw$input_DASH_props,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$placeholder,"\uD83D\uDD0D Search for an item",cljs.core.cst$kw$default_DASH_value,item_name], null),cljs.core.cst$kw$get_DASH_value,cljs.core.cst$kw$name,cljs.core.cst$kw$make_DASH_result,nw_calculator.views.basic_item,cljs.core.cst$kw$on_DASH_search,search_BANG_,cljs.core.cst$kw$loading_QMARK_,searching_QMARK_,cljs.core.cst$kw$on_DASH_clear,clear_search_BANG_,cljs.core.cst$kw$on_DASH_select,select_item_BANG_], null)], null);
})();
return res31153;
});
nw_calculator.views.dropdown = (function nw_calculator$views$dropdown(p__31159){
var map__31160 = p__31159;
var map__31160__$1 = cljs.core.__destructure_map(map__31160);
var selected_option_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31160__$1,cljs.core.cst$kw$name);
var category_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31160__$1,cljs.core.cst$kw$path);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31160__$1,cljs.core.cst$kw$options);
var category_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31160__$1,cljs.core.cst$kw$category_DASH_name);
var with_let31161 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let31161);
var temp__5757__auto___31166 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___31166 == null)){
} else {
var c__14347__auto___31167 = temp__5757__auto___31166;
if((with_let31161.generation === c__14347__auto___31167.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let31161.generation = c__14347__auto___31167.ratomGeneration);
}

var init31162 = (with_let31161.length === (0));
var select_option_BANG_ = ((((init31162) || (cljs.core.not(with_let31161.hasOwnProperty((0))))))?(with_let31161[(0)] = (function (p__31164){
var map__31165 = p__31164;
var map__31165__$1 = cljs.core.__destructure_map(map__31165);
var selected_option_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31165__$1,cljs.core.cst$kw$id);
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_select_DASH_option,category_path,selected_option_id], null));
})):(with_let31161[(0)]));
var res31163 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$f_GT_,nw_calculator.components.dropdown_component,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$input_DASH_props,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$placeholder,category_name,cljs.core.cst$kw$default_DASH_value,selected_option_name], null),cljs.core.cst$kw$on_DASH_select,select_option_BANG_,cljs.core.cst$kw$container_DASH_props,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"bg-white"], null),cljs.core.cst$kw$make_DASH_option,nw_calculator.views.basic_item,cljs.core.cst$kw$get_DASH_value,cljs.core.cst$kw$name,cljs.core.cst$kw$options,options], null)], null);
return res31163;
});
nw_calculator.views.custom_item_quantity = (function nw_calculator$views$custom_item_quantity(p__31168){
var map__31169 = p__31168;
var map__31169__$1 = cljs.core.__destructure_map(map__31169);
var editable_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31169__$1,cljs.core.cst$kw$editable_QMARK_);
var discount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31169__$1,cljs.core.cst$kw$discount);
var quantity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31169__$1,cljs.core.cst$kw$quantity);
var item_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31169__$1,cljs.core.cst$kw$item_DASH_index);
var with_let31170 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let31170);
var temp__5757__auto___31173 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___31173 == null)){
} else {
var c__14347__auto___31174 = temp__5757__auto___31173;
if((with_let31170.generation === c__14347__auto___31174.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let31170.generation = c__14347__auto___31174.ratomGeneration);
}

var init31171 = (with_let31170.length === (0));
var set_quantity_multiplier_BANG_ = ((((init31171) || (cljs.core.not(with_let31170.hasOwnProperty((0))))))?(with_let31170[(0)] = (function (event){
var multiplier = nw_calculator.utilities.parse_pos.cljs$core$IFn$_invoke$arity$1(event.target.value);
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_set_DASH_quantity_DASH_multiplier,item_index,multiplier], null));
})):(with_let31170[(0)]));
var min_quantity_multiplier = ((((init31171) || (cljs.core.not(with_let31170.hasOwnProperty((1))))))?(with_let31170[(1)] = (1)):(with_let31170[(1)]));
var res31172 = (function (){var quantity_multiplier_STAR_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_quantity_DASH_multiplier,item_index], null)));
var additional_item_bonuses_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_additional_DASH_item_DASH_bonuses_QMARK_], null)));
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$relative,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,quantity], null),(cljs.core.truth_((function (){var and__4210__auto__ = (discount > (0));
if(and__4210__auto__){
return additional_item_bonuses_QMARK_;
} else {
return and__4210__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$absolute$_DASH_bottom_DASH_5$right_DASH_0$text_DASH_green_DASH_500$text_DASH_base,"+",discount], null):null)], null);

}
}
})();
return res31172;
});
nw_calculator.views.custom_item_name = (function nw_calculator$views$custom_item_name(p__31175){
var map__31176 = p__31175;
var map__31176__$1 = cljs.core.__destructure_map(map__31176);
var map__31177 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31176__$1,cljs.core.cst$kw$node_DASH_data);
var map__31177__$1 = cljs.core.__destructure_map(map__31177);
var map__31178 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31177__$1,cljs.core.cst$kw$node);
var map__31178__$1 = cljs.core.__destructure_map(map__31178);
var item_map = map__31178__$1;
var name_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31178__$1,cljs.core.cst$kw$name);
var external_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31178__$1,cljs.core.cst$kw$external_DASH_url);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31178__$1,cljs.core.cst$kw$options);
var root_node_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31177__$1,cljs.core.cst$kw$root_DASH_node_QMARK_);
var item_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31176__$1,cljs.core.cst$kw$item_DASH_index);
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
var with_let31179 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let31179);
var temp__5757__auto___31182 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___31182 == null)){
} else {
var c__14347__auto___31183 = temp__5757__auto___31182;
if((with_let31179.generation === c__14347__auto___31183.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let31179.generation = c__14347__auto___31183.ratomGeneration);
}

var init31180 = (with_let31179.length === (0));
var image_with_popup = ((((init31180) || (cljs.core.not(with_let31179.hasOwnProperty((0))))))?(with_let31179[(0)] = (function (url){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$f_GT_,nw_calculator.components.item.component.image_with_popup,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,url], null)], null);
})):(with_let31179[(0)]));
var res31181 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$flex$flex_DASH_grow$gap_DASH_4,cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_], null),cljs.core.map.cljs$core$IFn$_invoke$arity$1(image_with_popup),image_urls)], null);
return res31181;
});
nw_calculator.views.item = (function nw_calculator$views$item(p__31184,item_index){
var map__31185 = p__31184;
var map__31185__$1 = cljs.core.__destructure_map(map__31185);
var node_data = map__31185__$1;
var map__31186 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31185__$1,cljs.core.cst$kw$node);
var map__31186__$1 = cljs.core.__destructure_map(map__31186);
var item_map = map__31186__$1;
var quantity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31186__$1,cljs.core.cst$kw$quantity);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31186__$1,cljs.core.cst$kw$path);
var discount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31186__$1,cljs.core.cst$kw$discount);
var root_node_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31185__$1,cljs.core.cst$kw$root_DASH_node_QMARK_);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.item_component,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$popup_DASH_on_DASH_hover_QMARK_,true,cljs.core.cst$kw$container_DASH_props,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,["m-0-imp",(cljs.core.truth_(root_node_QMARK_)?" bg-inherit":null)].join('')], null),cljs.core.cst$kw$item_DASH_map,item_map,cljs.core.cst$kw$custom_DASH_quantity,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.custom_item_quantity,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$editable_QMARK_,root_node_QMARK_,cljs.core.cst$kw$discount,discount,cljs.core.cst$kw$quantity,quantity,cljs.core.cst$kw$item_DASH_index,item_index], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,"quantity")], null)),cljs.core.cst$kw$custom_DASH_name,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.custom_item_name,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$node_DASH_data,node_data,cljs.core.cst$kw$item_DASH_index,item_index], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,path], null))], null)], null);
});
nw_calculator.views.searchable_item_tree = (function nw_calculator$views$searchable_item_tree(item_index){
var with_let31188 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let31188);
var temp__5757__auto___31224 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___31224 == null)){
} else {
var c__14347__auto___31225 = temp__5757__auto___31224;
if((with_let31188.generation === c__14347__auto___31225.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let31188.generation = c__14347__auto___31225.ratomGeneration);
}

var init31189 = (with_let31188.length === (0));
var collapsed_item_updaters = ((((init31189) || (cljs.core.not(with_let31188.hasOwnProperty((0))))))?(with_let31188[(0)] = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY)):(with_let31188[(0)]));
var set_collapsed_updater_BANG_ = ((((init31189) || (cljs.core.not(with_let31188.hasOwnProperty((1))))))?(with_let31188[(1)] = (function (id,updater){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(collapsed_item_updaters,cljs.core.assoc,id,updater);
})):(with_let31188[(1)]));
var unset_collapsed_updater_BANG_ = ((((init31189) || (cljs.core.not(with_let31188.hasOwnProperty((2))))))?(with_let31188[(2)] = (function (id){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(collapsed_item_updaters,cljs.core.dissoc,id);
})):(with_let31188[(2)]));
var expand_all_BANG_ = ((((init31189) || (cljs.core.not(with_let31188.hasOwnProperty((3))))))?(with_let31188[(3)] = (function (){
var seq__31191 = cljs.core.seq(cljs.core.deref(collapsed_item_updaters));
var chunk__31192 = null;
var count__31193 = (0);
var i__31194 = (0);
while(true){
if((i__31194 < count__31193)){
var vec__31201 = chunk__31192.cljs$core$IIndexed$_nth$arity$2(null,i__31194);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31201,(0),null);
var set_collapsed_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31201,(1),null);
(set_collapsed_item.cljs$core$IFn$_invoke$arity$1 ? set_collapsed_item.cljs$core$IFn$_invoke$arity$1(false) : set_collapsed_item.call(null,false));


var G__31226 = seq__31191;
var G__31227 = chunk__31192;
var G__31228 = count__31193;
var G__31229 = (i__31194 + (1));
seq__31191 = G__31226;
chunk__31192 = G__31227;
count__31193 = G__31228;
i__31194 = G__31229;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__31191);
if(temp__5753__auto__){
var seq__31191__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31191__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__31191__$1);
var G__31230 = cljs.core.chunk_rest(seq__31191__$1);
var G__31231 = c__4638__auto__;
var G__31232 = cljs.core.count(c__4638__auto__);
var G__31233 = (0);
seq__31191 = G__31230;
chunk__31192 = G__31231;
count__31193 = G__31232;
i__31194 = G__31233;
continue;
} else {
var vec__31204 = cljs.core.first(seq__31191__$1);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31204,(0),null);
var set_collapsed_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31204,(1),null);
(set_collapsed_item.cljs$core$IFn$_invoke$arity$1 ? set_collapsed_item.cljs$core$IFn$_invoke$arity$1(false) : set_collapsed_item.call(null,false));


var G__31234 = cljs.core.next(seq__31191__$1);
var G__31235 = null;
var G__31236 = (0);
var G__31237 = (0);
seq__31191 = G__31234;
chunk__31192 = G__31235;
count__31193 = G__31236;
i__31194 = G__31237;
continue;
}
} else {
return null;
}
}
break;
}
})):(with_let31188[(3)]));
var collapse_all_BANG_ = ((((init31189) || (cljs.core.not(with_let31188.hasOwnProperty((4))))))?(with_let31188[(4)] = (function (){
var seq__31207 = cljs.core.seq(cljs.core.deref(collapsed_item_updaters));
var chunk__31208 = null;
var count__31209 = (0);
var i__31210 = (0);
while(true){
if((i__31210 < count__31209)){
var vec__31217 = chunk__31208.cljs$core$IIndexed$_nth$arity$2(null,i__31210);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31217,(0),null);
var set_collapsed_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31217,(1),null);
(set_collapsed_item.cljs$core$IFn$_invoke$arity$1 ? set_collapsed_item.cljs$core$IFn$_invoke$arity$1(true) : set_collapsed_item.call(null,true));


var G__31238 = seq__31207;
var G__31239 = chunk__31208;
var G__31240 = count__31209;
var G__31241 = (i__31210 + (1));
seq__31207 = G__31238;
chunk__31208 = G__31239;
count__31209 = G__31240;
i__31210 = G__31241;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__31207);
if(temp__5753__auto__){
var seq__31207__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31207__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__31207__$1);
var G__31242 = cljs.core.chunk_rest(seq__31207__$1);
var G__31243 = c__4638__auto__;
var G__31244 = cljs.core.count(c__4638__auto__);
var G__31245 = (0);
seq__31207 = G__31242;
chunk__31208 = G__31243;
count__31209 = G__31244;
i__31210 = G__31245;
continue;
} else {
var vec__31220 = cljs.core.first(seq__31207__$1);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31220,(0),null);
var set_collapsed_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31220,(1),null);
(set_collapsed_item.cljs$core$IFn$_invoke$arity$1 ? set_collapsed_item.cljs$core$IFn$_invoke$arity$1(true) : set_collapsed_item.call(null,true));


var G__31246 = cljs.core.next(seq__31207__$1);
var G__31247 = null;
var G__31248 = (0);
var G__31249 = (0);
seq__31207 = G__31246;
chunk__31208 = G__31247;
count__31209 = G__31248;
i__31210 = G__31249;
continue;
}
} else {
return null;
}
}
break;
}
})):(with_let31188[(4)]));
var item_STAR_ = ((((init31189) || (cljs.core.not(with_let31188.hasOwnProperty((5))))))?(with_let31188[(5)] = (function (node){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.item,node,item_index], null);
})):(with_let31188[(5)]));
var unrenderable_QMARK_ = ((((init31189) || (cljs.core.not(with_let31188.hasOwnProperty((6))))))?(with_let31188[(6)] = (function (p1__31187_SHARP_){
return cljs.core.cst$kw$as_DASH_is_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__31187_SHARP_));
})):(with_let31188[(6)]));
var res31190 = (function (){var map__31223 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_resolved_DASH_selected_DASH_item,item_index], null)));
var map__31223__$1 = cljs.core.__destructure_map(map__31223);
var selected_item = map__31223__$1;
var ingredients = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31223__$1,cljs.core.cst$kw$ingredients);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31223__$1,cljs.core.cst$kw$id);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$bg_DASH_inherit$flex$flex_DASH_col$gap_DASH_10$items_DASH_center,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,nw_calculator.components.collapsible_tree.component.collapsible_list_provider,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$set_DASH_collapsed_DASH_updater,set_collapsed_updater_BANG_,cljs.core.cst$kw$unset_DASH_collapsed_DASH_updater,unset_collapsed_updater_BANG_], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.collapsible_tree_component,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$tree_DASH_map,selected_item,cljs.core.cst$kw$children,cljs.core.cst$kw$ingredients,cljs.core.cst$kw$make_DASH_node,item_STAR_,cljs.core.cst$kw$ignore_QMARK_,unrenderable_QMARK_], null)], null)], null),(cljs.core.truth_(cljs.core.not_empty(ingredients))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$flex$gap_DASH_6,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$button$button_DASH_outline$w_DASH_52$md_COLON_w_DASH_60,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,expand_all_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fas$fa_DASH_expand_DASH_arrows], null)," Expand all"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$button$button_DASH_outline$w_DASH_52$md_COLON_w_DASH_60,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,collapse_all_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fas$fa_DASH_compress_DASH_arrows_DASH_alt], null)," Collapse all"], null)], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,id], null));
})();
return res31190;
});
nw_calculator.views.summary_item_tree = (function nw_calculator$views$summary_item_tree(){
var with_let31251 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let31251);
var temp__5757__auto___31290 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___31290 == null)){
} else {
var c__14347__auto___31291 = temp__5757__auto___31290;
if((with_let31251.generation === c__14347__auto___31291.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let31251.generation = c__14347__auto___31291.ratomGeneration);
}

var init31252 = (with_let31251.length === (0));
var collapsed_item_updaters = ((((init31252) || (cljs.core.not(with_let31251.hasOwnProperty((0))))))?(with_let31251[(0)] = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY)):(with_let31251[(0)]));
var set_collapsed_updater_BANG_ = ((((init31252) || (cljs.core.not(with_let31251.hasOwnProperty((1))))))?(with_let31251[(1)] = (function (id,updater){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(collapsed_item_updaters,cljs.core.assoc,id,updater);
})):(with_let31251[(1)]));
var unset_collapsed_updater_BANG_ = ((((init31252) || (cljs.core.not(with_let31251.hasOwnProperty((2))))))?(with_let31251[(2)] = (function (id){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(collapsed_item_updaters,cljs.core.dissoc,id);
})):(with_let31251[(2)]));
var expand_all_BANG_ = ((((init31252) || (cljs.core.not(with_let31251.hasOwnProperty((3))))))?(with_let31251[(3)] = (function (){
var seq__31254 = cljs.core.seq(cljs.core.deref(collapsed_item_updaters));
var chunk__31255 = null;
var count__31256 = (0);
var i__31257 = (0);
while(true){
if((i__31257 < count__31256)){
var vec__31264 = chunk__31255.cljs$core$IIndexed$_nth$arity$2(null,i__31257);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31264,(0),null);
var set_collapsed_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31264,(1),null);
(set_collapsed_item.cljs$core$IFn$_invoke$arity$1 ? set_collapsed_item.cljs$core$IFn$_invoke$arity$1(false) : set_collapsed_item.call(null,false));


var G__31292 = seq__31254;
var G__31293 = chunk__31255;
var G__31294 = count__31256;
var G__31295 = (i__31257 + (1));
seq__31254 = G__31292;
chunk__31255 = G__31293;
count__31256 = G__31294;
i__31257 = G__31295;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__31254);
if(temp__5753__auto__){
var seq__31254__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31254__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__31254__$1);
var G__31296 = cljs.core.chunk_rest(seq__31254__$1);
var G__31297 = c__4638__auto__;
var G__31298 = cljs.core.count(c__4638__auto__);
var G__31299 = (0);
seq__31254 = G__31296;
chunk__31255 = G__31297;
count__31256 = G__31298;
i__31257 = G__31299;
continue;
} else {
var vec__31267 = cljs.core.first(seq__31254__$1);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31267,(0),null);
var set_collapsed_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31267,(1),null);
(set_collapsed_item.cljs$core$IFn$_invoke$arity$1 ? set_collapsed_item.cljs$core$IFn$_invoke$arity$1(false) : set_collapsed_item.call(null,false));


var G__31300 = cljs.core.next(seq__31254__$1);
var G__31301 = null;
var G__31302 = (0);
var G__31303 = (0);
seq__31254 = G__31300;
chunk__31255 = G__31301;
count__31256 = G__31302;
i__31257 = G__31303;
continue;
}
} else {
return null;
}
}
break;
}
})):(with_let31251[(3)]));
var collapse_all_BANG_ = ((((init31252) || (cljs.core.not(with_let31251.hasOwnProperty((4))))))?(with_let31251[(4)] = (function (){
var seq__31270 = cljs.core.seq(cljs.core.deref(collapsed_item_updaters));
var chunk__31271 = null;
var count__31272 = (0);
var i__31273 = (0);
while(true){
if((i__31273 < count__31272)){
var vec__31280 = chunk__31271.cljs$core$IIndexed$_nth$arity$2(null,i__31273);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31280,(0),null);
var set_collapsed_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31280,(1),null);
(set_collapsed_item.cljs$core$IFn$_invoke$arity$1 ? set_collapsed_item.cljs$core$IFn$_invoke$arity$1(true) : set_collapsed_item.call(null,true));


var G__31304 = seq__31270;
var G__31305 = chunk__31271;
var G__31306 = count__31272;
var G__31307 = (i__31273 + (1));
seq__31270 = G__31304;
chunk__31271 = G__31305;
count__31272 = G__31306;
i__31273 = G__31307;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__31270);
if(temp__5753__auto__){
var seq__31270__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31270__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__31270__$1);
var G__31308 = cljs.core.chunk_rest(seq__31270__$1);
var G__31309 = c__4638__auto__;
var G__31310 = cljs.core.count(c__4638__auto__);
var G__31311 = (0);
seq__31270 = G__31308;
chunk__31271 = G__31309;
count__31272 = G__31310;
i__31273 = G__31311;
continue;
} else {
var vec__31283 = cljs.core.first(seq__31270__$1);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31283,(0),null);
var set_collapsed_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31283,(1),null);
(set_collapsed_item.cljs$core$IFn$_invoke$arity$1 ? set_collapsed_item.cljs$core$IFn$_invoke$arity$1(true) : set_collapsed_item.call(null,true));


var G__31312 = cljs.core.next(seq__31270__$1);
var G__31313 = null;
var G__31314 = (0);
var G__31315 = (0);
seq__31270 = G__31312;
chunk__31271 = G__31313;
count__31272 = G__31314;
i__31273 = G__31315;
continue;
}
} else {
return null;
}
}
break;
}
})):(with_let31251[(4)]));
var item_STAR_ = ((((init31252) || (cljs.core.not(with_let31251.hasOwnProperty((5))))))?(with_let31251[(5)] = (function (p__31286){
var map__31287 = p__31286;
var map__31287__$1 = cljs.core.__destructure_map(map__31287);
var map__31288 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31287__$1,cljs.core.cst$kw$node);
var map__31288__$1 = cljs.core.__destructure_map(map__31288);
var item_map = map__31288__$1;
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31288__$1,cljs.core.cst$kw$items);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.item_component,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$item_DASH_map,item_map,cljs.core.cst$kw$popup_DASH_on_DASH_hover_QMARK_,true,cljs.core.cst$kw$custom_DASH_image,(function (){var temp__5751__auto__ = cljs.core.not_empty(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$png_DASH_url,items));
if(cljs.core.truth_(temp__5751__auto__)){
var png_urls = temp__5751__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.custom_item_images,png_urls], null);
} else {
return null;
}
})()], null)], null);
})):(with_let31251[(5)]));
var unrenderable_QMARK_ = ((((init31252) || (cljs.core.not(with_let31251.hasOwnProperty((6))))))?(with_let31251[(6)] = (function (p1__31250_SHARP_){
return cljs.core.cst$kw$as_DASH_is_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__31250_SHARP_));
})):(with_let31251[(6)]));
var res31253 = (function (){var temp__5751__auto__ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_selected_DASH_items_DASH_summary], null)));
if(cljs.core.truth_(temp__5751__auto__)){
var map__31289 = temp__5751__auto__;
var map__31289__$1 = cljs.core.__destructure_map(map__31289);
var selected_item = map__31289__$1;
var ingredients = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31289__$1,cljs.core.cst$kw$ingredients);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31289__$1,cljs.core.cst$kw$id);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$bg_DASH_inherit$flex$flex_DASH_col$gap_DASH_10$items_DASH_center,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,nw_calculator.components.collapsible_tree.component.collapsible_list_provider,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$set_DASH_collapsed_DASH_updater,set_collapsed_updater_BANG_,cljs.core.cst$kw$unset_DASH_collapsed_DASH_updater,unset_collapsed_updater_BANG_], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.collapsible_tree_component,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$tree_DASH_map,selected_item,cljs.core.cst$kw$children,cljs.core.cst$kw$ingredients,cljs.core.cst$kw$make_DASH_node,item_STAR_,cljs.core.cst$kw$ignore_QMARK_,unrenderable_QMARK_], null)], null)], null),(cljs.core.truth_(cljs.core.not_empty(ingredients))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$flex$gap_DASH_6,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$button$button_DASH_outline$w_DASH_52$md_COLON_w_DASH_60,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,expand_all_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fas$fa_DASH_expand_DASH_arrows], null)," Expand all"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$button$button_DASH_outline$w_DASH_52$md_COLON_w_DASH_60,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,collapse_all_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fas$fa_DASH_compress_DASH_arrows_DASH_alt], null)," Collapse all"], null)], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,id], null));
} else {
return null;
}
})();
return res31253;
});
nw_calculator.views.delete_item_button = (function nw_calculator$views$delete_item_button(item_index){
var with_let31316 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let31316);
var temp__5757__auto___31319 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___31319 == null)){
} else {
var c__14347__auto___31320 = temp__5757__auto___31319;
if((with_let31316.generation === c__14347__auto___31320.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let31316.generation = c__14347__auto___31320.ratomGeneration);
}

var init31317 = (with_let31316.length === (0));
var delete_item_BANG_ = ((((init31317) || (cljs.core.not(with_let31316.hasOwnProperty((0))))))?(with_let31316[(0)] = (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_remove_DASH_item,item_index], null));
})):(with_let31316[(0)]));
var res31318 = (function (){var num_selected_items = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_num_DASH_selected_DASH_item_DASH_refs], null)));
var disable_delete_button_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),num_selected_items);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.circular_button_component,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,"absolute text-xl top-2 right-0 border-0 flex-none",cljs.core.cst$kw$disabled,disable_delete_button_QMARK_,cljs.core.cst$kw$on_DASH_click,delete_item_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fas$fa_DASH_trash], null)], null);
})();
return res31318;
});
nw_calculator.views.item_cards = (function nw_calculator$views$item_cards(){
var num_selected_items = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_num_DASH_selected_DASH_item_DASH_refs], null)));
var num_resolved_selected_items = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_num_DASH_resolved_DASH_selected_DASH_items], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_,(function (){var iter__4611__auto__ = (function nw_calculator$views$item_cards_$_iter__31321(s__31322){
return (new cljs.core.LazySeq(null,(function (){
var s__31322__$1 = s__31322;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__31322__$1);
if(temp__5753__auto__){
var s__31322__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31322__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__31322__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__31324 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__31323 = (0);
while(true){
if((i__31323 < size__4610__auto__)){
var item_index = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4609__auto__,i__31323);
cljs.core.chunk_append(b__31324,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.card_component,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.delete_item_button,item_index], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$bg_DASH_inherit$mt_DASH_2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.searchable_item_tree,item_index], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,item_index], null)));

var G__31325 = (i__31323 + (1));
i__31323 = G__31325;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31324),nw_calculator$views$item_cards_$_iter__31321(cljs.core.chunk_rest(s__31322__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31324),null);
}
} else {
var item_index = cljs.core.first(s__31322__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.card_component,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.delete_item_button,item_index], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$bg_DASH_inherit$mt_DASH_2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.searchable_item_tree,item_index], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,item_index], null)),nw_calculator$views$item_cards_$_iter__31321(cljs.core.rest(s__31322__$2)));
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
var with_let31326 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let31326);
var temp__5757__auto___31329 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___31329 == null)){
} else {
var c__14347__auto___31330 = temp__5757__auto___31329;
if((with_let31326.generation === c__14347__auto___31330.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let31326.generation = c__14347__auto___31330.ratomGeneration);
}

var init31327 = (with_let31326.length === (0));
var add_empty_item_BANG_ = ((((init31327) || (cljs.core.not(with_let31326.hasOwnProperty((0))))))?(with_let31326[(0)] = (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_add_DASH_empty_DASH_item], null));
})):(with_let31326[(0)]));
var remove_items_BANG_ = ((((init31327) || (cljs.core.not(with_let31326.hasOwnProperty((1))))))?(with_let31326[(1)] = (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_remove_DASH_all_DASH_items], null));
})):(with_let31326[(1)]));
var res31328 = (function (){var num_items = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_num_DASH_selected_DASH_item_DASH_refs], null)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$flex$gap_DASH_6$md_COLON_gap_DASH_8$flex_DASH_wrap$justify_DASH_center,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$button$w_DASH_64,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,add_empty_item_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fas$fa_DASH_plus_DASH_circle], null)," Add another item"], null),(((num_items > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$button$w_DASH_64,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,remove_items_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fas$fa_DASH_trash], null)," Remove all items"], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$f_GT_,nw_calculator.components.copy_link_component], null)], null);
})();
return res31328;
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
nw_calculator.views.trade_skill_map = cljs.core.sorted_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$armoring,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$icon,"fas fa-shield",cljs.core.cst$kw$label,"Armoring"], null),cljs.core.cst$kw$arcana,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$icon,"fas fa-book-spells",cljs.core.cst$kw$label,"Arcana"], null),cljs.core.cst$kw$cooking,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$icon,"fas fa-hat-chef",cljs.core.cst$kw$label,"Cooking"], null),cljs.core.cst$kw$engineering,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$icon,"fas fa-cog",cljs.core.cst$kw$label,"Engineering"], null),cljs.core.cst$kw$furnishing,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$icon,"fas fa-chair",cljs.core.cst$kw$label,"Furnishing"], null),cljs.core.cst$kw$jewelcrafting,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$icon,"fas fa-gem",cljs.core.cst$kw$label,"Jewelcrafting"], null),cljs.core.cst$kw$leatherworking,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$icon,"fas fa-deer",cljs.core.cst$kw$label,"Leatherworking"], null),cljs.core.cst$kw$smelting,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$icon,"fas fa-fireplace",cljs.core.cst$kw$label,"Smelting"], null),cljs.core.cst$kw$stonecutting,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$icon,"fas fa-cube",cljs.core.cst$kw$label,"Stonecutting"], null),cljs.core.cst$kw$weaponsmithing,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$icon,"fas fa-sword",cljs.core.cst$kw$label,"Weaponsmithing"], null),cljs.core.cst$kw$weaving,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$icon,"fas fa-scarf",cljs.core.cst$kw$label,"Weaving"], null),cljs.core.cst$kw$woodworking,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$icon,"fas fa-axe",cljs.core.cst$kw$label,"Woodworking"], null)], 0));
nw_calculator.views.trade_skill = (function nw_calculator$views$trade_skill(p__31331){
var map__31332 = p__31331;
var map__31332__$1 = cljs.core.__destructure_map(map__31332);
var skill = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31332__$1,cljs.core.cst$kw$skill);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31332__$1,cljs.core.cst$kw$on_DASH_change,nw_calculator.utilities.no_op);
var map__31333 = (nw_calculator.views.trade_skill_map.cljs$core$IFn$_invoke$arity$1 ? nw_calculator.views.trade_skill_map.cljs$core$IFn$_invoke$arity$1(skill) : nw_calculator.views.trade_skill_map.call(null,skill));
var map__31333__$1 = cljs.core.__destructure_map(map__31333);
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31333__$1,cljs.core.cst$kw$icon);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31333__$1,cljs.core.cst$kw$label);
var value = ((100) * cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_trade_DASH_skill_DASH_bonus,skill], null))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label$m_DASH_0$self_DASH_center$align_DASH_self_DASH_end$col_DASH_start_DASH_1,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$for,skill], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$mr_DASH_4,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,icon], null)], null),label], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$flex$col_DASH_start_DASH_2$gap_DASH_2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$color_DASH_gray$self_DASH_center,"+"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$basic_DASH_input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$default_DASH_value,value,cljs.core.cst$kw$id,skill,cljs.core.cst$kw$on_DASH_change,on_change,cljs.core.cst$kw$type,cljs.core.cst$kw$number,cljs.core.cst$kw$placeholder,(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$color_DASH_gray$self_DASH_center,"%"], null)], null)], null);
});
nw_calculator.views.set_trade_skill_bonus = (function nw_calculator$views$set_trade_skill_bonus(event){
var skill = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(event.target.id);
var value = event.target.value;
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_set_DASH_trade_DASH_skill_DASH_bonus,skill,(nw_calculator.utilities.parse_pos.cljs$core$IFn$_invoke$arity$1(value) / (100))], null));
});
nw_calculator.views.toggle_additional_item_bonuses = (function nw_calculator$views$toggle_additional_item_bonuses(){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_toggle_DASH_additional_DASH_item_DASH_bonuses], null));
});
nw_calculator.views.profile = (function nw_calculator$views$profile(){
var additional_item_bonuses_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_additional_DASH_item_DASH_bonuses_QMARK_], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.drawer_component,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$container_DASH_props,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"z-40 overflow-x-hidden"], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$grid$gap_DASH_y_DASH_12$gap_DASH_x_DASH_8$md_COLON_max_DASH_w_DASH_3xl,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$grid_DASH_template_DASH_columns,"auto 7rem 1fr"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$header$col_DASH_span_DASH_3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1$text_DASH_8$md_COLON_text_DASH_5xl_DASH_imp,"Trade Skill Bonuses"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p$col_DASH_span_DASH_3$mt_DASH_4,"Enter additional-item-chance bonuses gained from your equipment and trade skill level below.\n        See ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"https://nwdb.info/guides/additional-item-chance",cljs.core.cst$kw$target,"_blank"], null),"here"], null)," for more info."], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label$col_DASH_start_DASH_1,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$for,cljs.core.cst$kw$trade_DASH_skill_DASH_bonus_DASH_toggle], null),"Toggle bonuses"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.toggle_component,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$container_DASH_props,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"col-start-2",cljs.core.cst$kw$id,cljs.core.cst$kw$trade_DASH_skill_DASH_bonus_DASH_toggle], null),cljs.core.cst$kw$checkbox_DASH_props,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$checked,additional_item_bonuses_QMARK_,cljs.core.cst$kw$on_DASH_change,nw_calculator.views.toggle_additional_item_bonuses], null),cljs.core.cst$kw$off,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fas$fa_DASH_times$text_DASH_red_DASH_400$w_DASH_full$h_DASH_full], null),cljs.core.cst$kw$on,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fas$fa_DASH_check$text_DASH_green_DASH_400$w_DASH_full$h_DASH_full], null)], null)], null),(function (){var iter__4611__auto__ = (function nw_calculator$views$profile_$_iter__31334(s__31335){
return (new cljs.core.LazySeq(null,(function (){
var s__31335__$1 = s__31335;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__31335__$1);
if(temp__5753__auto__){
var s__31335__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31335__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__31335__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__31337 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__31336 = (0);
while(true){
if((i__31336 < size__4610__auto__)){
var skill = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4609__auto__,i__31336);
cljs.core.chunk_append(b__31337,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.trade_skill,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$skill,skill,cljs.core.cst$kw$on_DASH_change,nw_calculator.views.set_trade_skill_bonus], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,skill], null)));

var G__31338 = (i__31336 + (1));
i__31336 = G__31338;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31337),nw_calculator$views$profile_$_iter__31334(cljs.core.chunk_rest(s__31335__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31337),null);
}
} else {
var skill = cljs.core.first(s__31335__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.trade_skill,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$skill,skill,cljs.core.cst$kw$on_DASH_change,nw_calculator.views.set_trade_skill_bonus], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,skill], null)),nw_calculator$views$profile_$_iter__31334(cljs.core.rest(s__31335__$2)));
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
