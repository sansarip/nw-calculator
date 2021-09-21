// Compiled by ClojureScript 1.10.879 {:optimizations :none}
goog.provide('nw_calculator.views');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('nw_calculator.events');
goog.require('nw_calculator.subs');
goog.require('nw_calculator.components.collapsible_tree.component');
goog.require('nw_calculator.components');
goog.require('reagent.core');
goog.require('nw_calculator.utilities');
goog.require('nw_calculator.styles');
goog.require('nw_calculator.config');
goog.require('react');
nw_calculator.views.global$module$react = goog.global["React"];
nw_calculator.views.basic_item = (function nw_calculator$views$basic_item(item_map){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.item_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"item-map","item-map",677069923),item_map,new cljs.core.Keyword(null,"custom-quantity","custom-quantity",-1300704698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null)], null)], null);
});
nw_calculator.views.search = (function nw_calculator$views$search(item_index){
var with_let30930 = reagent.ratom.with_let_values.call(null,new cljs.core.Keyword(null,"with-let30930","with-let30930",-1389929777));
var temp__5757__auto___30934 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___30934 == null)){
} else {
var c__8434__auto___30935 = temp__5757__auto___30934;
if((with_let30930.generation === c__8434__auto___30935.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let30930.generation = c__8434__auto___30935.ratomGeneration);
}

var init30931 = (with_let30930.length === (0));
var search_BANG_ = ((((init30931) || (cljs.core.not.call(null,with_let30930.hasOwnProperty((0))))))?(with_let30930[(0)] = nw_calculator.utilities.debounce.call(null,(function (query){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nw-calculator.events","search","nw-calculator.events/search",100447139),item_index,query], null));
}),(100))):(with_let30930[(0)]));
var select_item_BANG_ = ((((init30931) || (cljs.core.not.call(null,with_let30930.hasOwnProperty((1))))))?(with_let30930[(1)] = (function (item){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nw-calculator.events","select-item","nw-calculator.events/select-item",-1874904713),item_index,item], null));
})):(with_let30930[(1)]));
var clear_search_BANG_ = ((((init30931) || (cljs.core.not.call(null,with_let30930.hasOwnProperty((2))))))?(with_let30930[(2)] = (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nw-calculator.events","clear-search","nw-calculator.events/clear-search",-1374048315),item_index], null));
})):(with_let30930[(2)]));
var res30932 = (function (){var results = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nw-calculator.subs","search-results","nw-calculator.subs/search-results",1878819107),item_index], null)));
var map__30933 = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nw-calculator.subs","resolved-selected-item","nw-calculator.subs/resolved-selected-item",-930622184),item_index], null)));
var map__30933__$1 = cljs.core.__destructure_map.call(null,map__30933);
var item_name = cljs.core.get.call(null,map__30933__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var searching_QMARK_ = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nw-calculator.subs","searching?","nw-calculator.subs/searching?",-689378709)], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f>","f>",1484564198),nw_calculator.components.search_component,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"results","results",-1134170113),results,new cljs.core.Keyword(null,"input-props","input-props",-1504868202),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"\uD83D\uDD0D Search for an item",new cljs.core.Keyword(null,"default-value","default-value",232220170),item_name], null),new cljs.core.Keyword(null,"get-value","get-value",2108514284),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"make-result","make-result",1014199613),nw_calculator.views.basic_item,new cljs.core.Keyword(null,"on-search","on-search",-1282068148),search_BANG_,new cljs.core.Keyword(null,"loading?","loading?",1905707049),searching_QMARK_,new cljs.core.Keyword(null,"on-clear","on-clear",2009781891),clear_search_BANG_,new cljs.core.Keyword(null,"on-select","on-select",-192407950),select_item_BANG_], null)], null);
})();
return res30932;
});
nw_calculator.views.dropdown = (function nw_calculator$views$dropdown(p__30936){
var map__30937 = p__30936;
var map__30937__$1 = cljs.core.__destructure_map.call(null,map__30937);
var selected_option_name = cljs.core.get.call(null,map__30937__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var category_path = cljs.core.get.call(null,map__30937__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var options = cljs.core.get.call(null,map__30937__$1,new cljs.core.Keyword(null,"options","options",99638489));
var category_name = cljs.core.get.call(null,map__30937__$1,new cljs.core.Keyword(null,"category-name","category-name",-1615496579));
var with_let30938 = reagent.ratom.with_let_values.call(null,new cljs.core.Keyword(null,"with-let30938","with-let30938",-1299282095));
var temp__5757__auto___30943 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___30943 == null)){
} else {
var c__8434__auto___30944 = temp__5757__auto___30943;
if((with_let30938.generation === c__8434__auto___30944.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let30938.generation = c__8434__auto___30944.ratomGeneration);
}

var init30939 = (with_let30938.length === (0));
var select_option_BANG_ = ((((init30939) || (cljs.core.not.call(null,with_let30938.hasOwnProperty((0))))))?(with_let30938[(0)] = (function (p__30941){
var map__30942 = p__30941;
var map__30942__$1 = cljs.core.__destructure_map.call(null,map__30942);
var option_path = cljs.core.get.call(null,map__30942__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var selected_option = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nw-calculator.subs","item-in-resolved-selected-item","nw-calculator.subs/item-in-resolved-selected-item",1936781932),option_path], null)));
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nw-calculator.events","select-option","nw-calculator.events/select-option",542969418),category_path,selected_option], null));
})):(with_let30938[(0)]));
var res30940 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f>","f>",1484564198),nw_calculator.components.dropdown_component,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"input-props","input-props",-1504868202),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),category_name,new cljs.core.Keyword(null,"default-value","default-value",232220170),selected_option_name], null),new cljs.core.Keyword(null,"on-select","on-select",-192407950),select_option_BANG_,new cljs.core.Keyword(null,"container-props","container-props",-1692729191),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"bg-white"], null),new cljs.core.Keyword(null,"make-option","make-option",-1702447554),nw_calculator.views.basic_item,new cljs.core.Keyword(null,"get-value","get-value",2108514284),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"options","options",99638489),options], null)], null);
return res30940;
});
nw_calculator.views.custom_item_quantity = (function nw_calculator$views$custom_item_quantity(p__30945){
var map__30946 = p__30945;
var map__30946__$1 = cljs.core.__destructure_map.call(null,map__30946);
var editable_QMARK_ = cljs.core.get.call(null,map__30946__$1,new cljs.core.Keyword(null,"editable?","editable?",-1805477333));
var quantity = cljs.core.get.call(null,map__30946__$1,new cljs.core.Keyword(null,"quantity","quantity",-1929050694));
var item_index = cljs.core.get.call(null,map__30946__$1,new cljs.core.Keyword(null,"item-index","item-index",411110314));
var with_let30947 = reagent.ratom.with_let_values.call(null,new cljs.core.Keyword(null,"with-let30947","with-let30947",-17543991));
var temp__5757__auto___30950 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___30950 == null)){
} else {
var c__8434__auto___30951 = temp__5757__auto___30950;
if((with_let30947.generation === c__8434__auto___30951.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let30947.generation = c__8434__auto___30951.ratomGeneration);
}

var init30948 = (with_let30947.length === (0));
var set_quantity_multiplier_BANG_ = ((((init30948) || (cljs.core.not.call(null,with_let30947.hasOwnProperty((0))))))?(with_let30947[(0)] = (function (event){
var multiplier = nw_calculator.utilities.parse_pos.call(null,event.target.value);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nw-calculator.events","set-quantity-multiplier","nw-calculator.events/set-quantity-multiplier",206711109),item_index,multiplier], null));
})):(with_let30947[(0)]));
var min_quantity_multiplier = ((((init30948) || (cljs.core.not.call(null,with_let30947.hasOwnProperty((1))))))?(with_let30947[(1)] = (1)):(with_let30947[(1)]));
var res30949 = (function (){var quantity_multiplier_STAR_ = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nw-calculator.subs","quantity-multiplier","nw-calculator.subs/quantity-multiplier",1311616625),item_index], null)));
var quantity_multiplier = (cljs.core.truth_(isNaN(quantity_multiplier_STAR_))?min_quantity_multiplier:quantity_multiplier_STAR_);
var editable_stack_QMARK_ = (function (){var and__4210__auto__ = editable_QMARK_;
if(cljs.core.truth_(and__4210__auto__)){
return (quantity > (1));
} else {
return and__4210__auto__;
}
})();
if(cljs.core.truth_(editable_stack_QMARK_)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f>","f>",1484564198),nw_calculator.components.multiplication_component,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"base","base",185279322),quantity,new cljs.core.Keyword(null,"container-props","container-props",-1692729191),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mb-18"], null),new cljs.core.Keyword(null,"input-props","input-props",-1504868202),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"default-value","default-value",232220170),quantity_multiplier,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),min_quantity_multiplier,new cljs.core.Keyword(null,"on-input","on-input",-267523366),set_quantity_multiplier_BANG_], null)], null)], null);
} else {
if(cljs.core.truth_(editable_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.basic-input.w-12-imp.text-right","input.basic-input.w-12-imp.text-right",465247864),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Keyword(null,"default-value","default-value",232220170),quantity_multiplier,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),min_quantity_multiplier,new cljs.core.Keyword(null,"on-input","on-input",-267523366),set_quantity_multiplier_BANG_], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),quantity], null);

}
}
})();
return res30949;
});
nw_calculator.views.custom_item_name = (function nw_calculator$views$custom_item_name(p__30952){
var map__30953 = p__30952;
var map__30953__$1 = cljs.core.__destructure_map.call(null,map__30953);
var map__30954 = cljs.core.get.call(null,map__30953__$1,new cljs.core.Keyword(null,"node-data","node-data",589093989));
var map__30954__$1 = cljs.core.__destructure_map.call(null,map__30954);
var map__30955 = cljs.core.get.call(null,map__30954__$1,new cljs.core.Keyword(null,"node","node",581201198));
var map__30955__$1 = cljs.core.__destructure_map.call(null,map__30955);
var item_map = map__30955__$1;
var name_STAR_ = cljs.core.get.call(null,map__30955__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var external_url = cljs.core.get.call(null,map__30955__$1,new cljs.core.Keyword(null,"external-url","external-url",-1665502145));
var options = cljs.core.get.call(null,map__30955__$1,new cljs.core.Keyword(null,"options","options",99638489));
var root_node_QMARK_ = cljs.core.get.call(null,map__30954__$1,new cljs.core.Keyword(null,"root-node?","root-node?",1770650387));
var item_index = cljs.core.get.call(null,map__30953__$1,new cljs.core.Keyword(null,"item-index","item-index",411110314));
if(cljs.core.truth_(root_node_QMARK_)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-inherit.w-full.flex.gap-2","div.bg-inherit.w-full.flex.gap-2",-2026799553),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.search,item_index], null),(cljs.core.truth_(external_url)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.self-center","a.self-center",1899370743),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),external_url,new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.text-sm.md:text-base.fas.fa-external-link-alt","i.text-sm.md:text-base.fas.fa-external-link-alt",-1054729167)], null)], null):null)], null);
} else {
if(cljs.core.truth_(options)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-inherit.w-full.flex.gap-2","div.bg-inherit.w-full.flex.gap-2",-2026799553),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.dropdown,item_map], null),(cljs.core.truth_(external_url)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.self-center","a.self-center",1899370743),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),external_url,new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.text-sm.md:text-base.fas.fa-external-link-alt","i.text-sm.md:text-base.fas.fa-external-link-alt",-1054729167)], null)], null):null)], null);
} else {
if(cljs.core.truth_(external_url)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.whitespace-nowrap","a.whitespace-nowrap",1924606794),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),external_url,new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),name_STAR_], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.whitespace-nowrap","span.whitespace-nowrap",-830765158),name_STAR_], null);
}

}
}
});
nw_calculator.views.item = (function nw_calculator$views$item(p__30956,item_index){
var map__30957 = p__30956;
var map__30957__$1 = cljs.core.__destructure_map.call(null,map__30957);
var node_data = map__30957__$1;
var map__30958 = cljs.core.get.call(null,map__30957__$1,new cljs.core.Keyword(null,"node","node",581201198));
var map__30958__$1 = cljs.core.__destructure_map.call(null,map__30958);
var item_map = map__30958__$1;
var quantity = cljs.core.get.call(null,map__30958__$1,new cljs.core.Keyword(null,"quantity","quantity",-1929050694));
var path = cljs.core.get.call(null,map__30958__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var root_node_QMARK_ = cljs.core.get.call(null,map__30957__$1,new cljs.core.Keyword(null,"root-node?","root-node?",1770650387));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.item_component,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"popup-on-hover?","popup-on-hover?",-2068184278),true,new cljs.core.Keyword(null,"container-props","container-props",-1692729191),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["m-0-imp",(cljs.core.truth_(root_node_QMARK_)?" bg-inherit":null)].join('')], null),new cljs.core.Keyword(null,"item-map","item-map",677069923),item_map,new cljs.core.Keyword(null,"custom-quantity","custom-quantity",-1300704698),cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.custom_item_quantity,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"editable?","editable?",-1805477333),root_node_QMARK_,new cljs.core.Keyword(null,"quantity","quantity",-1929050694),quantity,new cljs.core.Keyword(null,"item-index","item-index",411110314),item_index], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.conj.call(null,path,"quantity")], null)),new cljs.core.Keyword(null,"custom-name","custom-name",1003503291),cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.custom_item_name,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"node-data","node-data",589093989),node_data,new cljs.core.Keyword(null,"item-index","item-index",411110314),item_index], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),path], null))], null)], null);
});
nw_calculator.views.searchable_item_tree = (function nw_calculator$views$searchable_item_tree(item_index){
var with_let30960 = reagent.ratom.with_let_values.call(null,new cljs.core.Keyword(null,"with-let30960","with-let30960",-162387750));
var temp__5757__auto___30996 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___30996 == null)){
} else {
var c__8434__auto___30997 = temp__5757__auto___30996;
if((with_let30960.generation === c__8434__auto___30997.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let30960.generation = c__8434__auto___30997.ratomGeneration);
}

var init30961 = (with_let30960.length === (0));
var collapsed_item_updaters = ((((init30961) || (cljs.core.not.call(null,with_let30960.hasOwnProperty((0))))))?(with_let30960[(0)] = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY)):(with_let30960[(0)]));
var set_collapsed_updater_BANG_ = ((((init30961) || (cljs.core.not.call(null,with_let30960.hasOwnProperty((1))))))?(with_let30960[(1)] = (function (id,updater){
return cljs.core.swap_BANG_.call(null,collapsed_item_updaters,cljs.core.assoc,id,updater);
})):(with_let30960[(1)]));
var unset_collapsed_updater_BANG_ = ((((init30961) || (cljs.core.not.call(null,with_let30960.hasOwnProperty((2))))))?(with_let30960[(2)] = (function (id){
return cljs.core.swap_BANG_.call(null,collapsed_item_updaters,cljs.core.dissoc,id);
})):(with_let30960[(2)]));
var expand_all_BANG_ = ((((init30961) || (cljs.core.not.call(null,with_let30960.hasOwnProperty((3))))))?(with_let30960[(3)] = (function (){
var seq__30963 = cljs.core.seq.call(null,cljs.core.deref.call(null,collapsed_item_updaters));
var chunk__30964 = null;
var count__30965 = (0);
var i__30966 = (0);
while(true){
if((i__30966 < count__30965)){
var vec__30973 = cljs.core._nth.call(null,chunk__30964,i__30966);
var _ = cljs.core.nth.call(null,vec__30973,(0),null);
var set_collapsed_item = cljs.core.nth.call(null,vec__30973,(1),null);
set_collapsed_item.call(null,false);


var G__30998 = seq__30963;
var G__30999 = chunk__30964;
var G__31000 = count__30965;
var G__31001 = (i__30966 + (1));
seq__30963 = G__30998;
chunk__30964 = G__30999;
count__30965 = G__31000;
i__30966 = G__31001;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__30963);
if(temp__5753__auto__){
var seq__30963__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30963__$1)){
var c__4638__auto__ = cljs.core.chunk_first.call(null,seq__30963__$1);
var G__31002 = cljs.core.chunk_rest.call(null,seq__30963__$1);
var G__31003 = c__4638__auto__;
var G__31004 = cljs.core.count.call(null,c__4638__auto__);
var G__31005 = (0);
seq__30963 = G__31002;
chunk__30964 = G__31003;
count__30965 = G__31004;
i__30966 = G__31005;
continue;
} else {
var vec__30976 = cljs.core.first.call(null,seq__30963__$1);
var _ = cljs.core.nth.call(null,vec__30976,(0),null);
var set_collapsed_item = cljs.core.nth.call(null,vec__30976,(1),null);
set_collapsed_item.call(null,false);


var G__31006 = cljs.core.next.call(null,seq__30963__$1);
var G__31007 = null;
var G__31008 = (0);
var G__31009 = (0);
seq__30963 = G__31006;
chunk__30964 = G__31007;
count__30965 = G__31008;
i__30966 = G__31009;
continue;
}
} else {
return null;
}
}
break;
}
})):(with_let30960[(3)]));
var collapse_all_BANG_ = ((((init30961) || (cljs.core.not.call(null,with_let30960.hasOwnProperty((4))))))?(with_let30960[(4)] = (function (){
var seq__30979 = cljs.core.seq.call(null,cljs.core.deref.call(null,collapsed_item_updaters));
var chunk__30980 = null;
var count__30981 = (0);
var i__30982 = (0);
while(true){
if((i__30982 < count__30981)){
var vec__30989 = cljs.core._nth.call(null,chunk__30980,i__30982);
var _ = cljs.core.nth.call(null,vec__30989,(0),null);
var set_collapsed_item = cljs.core.nth.call(null,vec__30989,(1),null);
set_collapsed_item.call(null,true);


var G__31010 = seq__30979;
var G__31011 = chunk__30980;
var G__31012 = count__30981;
var G__31013 = (i__30982 + (1));
seq__30979 = G__31010;
chunk__30980 = G__31011;
count__30981 = G__31012;
i__30982 = G__31013;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__30979);
if(temp__5753__auto__){
var seq__30979__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30979__$1)){
var c__4638__auto__ = cljs.core.chunk_first.call(null,seq__30979__$1);
var G__31014 = cljs.core.chunk_rest.call(null,seq__30979__$1);
var G__31015 = c__4638__auto__;
var G__31016 = cljs.core.count.call(null,c__4638__auto__);
var G__31017 = (0);
seq__30979 = G__31014;
chunk__30980 = G__31015;
count__30981 = G__31016;
i__30982 = G__31017;
continue;
} else {
var vec__30992 = cljs.core.first.call(null,seq__30979__$1);
var _ = cljs.core.nth.call(null,vec__30992,(0),null);
var set_collapsed_item = cljs.core.nth.call(null,vec__30992,(1),null);
set_collapsed_item.call(null,true);


var G__31018 = cljs.core.next.call(null,seq__30979__$1);
var G__31019 = null;
var G__31020 = (0);
var G__31021 = (0);
seq__30979 = G__31018;
chunk__30980 = G__31019;
count__30981 = G__31020;
i__30982 = G__31021;
continue;
}
} else {
return null;
}
}
break;
}
})):(with_let30960[(4)]));
var item_STAR_ = ((((init30961) || (cljs.core.not.call(null,with_let30960.hasOwnProperty((5))))))?(with_let30960[(5)] = (function (node){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.item,node,item_index], null);
})):(with_let30960[(5)]));
var unrenderable_QMARK_ = ((((init30961) || (cljs.core.not.call(null,with_let30960.hasOwnProperty((6))))))?(with_let30960[(6)] = (function (p1__30959_SHARP_){
return new cljs.core.Keyword(null,"as-is?","as-is?",685734352).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p1__30959_SHARP_));
})):(with_let30960[(6)]));
var res30962 = (function (){var map__30995 = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nw-calculator.subs","resolved-selected-item","nw-calculator.subs/resolved-selected-item",-930622184),item_index], null)));
var map__30995__$1 = cljs.core.__destructure_map.call(null,map__30995);
var selected_item = map__30995__$1;
var ingredients = cljs.core.get.call(null,map__30995__$1,new cljs.core.Keyword(null,"ingredients","ingredients",-1855671917));
var id = cljs.core.get.call(null,map__30995__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-inherit.flex.flex-col.gap-10.items-center","div.bg-inherit.flex.flex-col.gap-10.items-center",1884725076),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),nw_calculator.components.collapsible_tree.component.collapsible_list_provider,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"set-collapsed-updater","set-collapsed-updater",-1291318937),set_collapsed_updater_BANG_,new cljs.core.Keyword(null,"unset-collapsed-updater","unset-collapsed-updater",-986631966),unset_collapsed_updater_BANG_], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.collapsible_tree_component,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tree-map","tree-map",-267458478),selected_item,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"ingredients","ingredients",-1855671917),new cljs.core.Keyword(null,"make-node","make-node",1103973934),item_STAR_,new cljs.core.Keyword(null,"ignore?","ignore?",1868915892),unrenderable_QMARK_], null)], null)], null),(cljs.core.truth_(cljs.core.not_empty.call(null,ingredients))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.gap-6","div.flex.gap-6",-1261228584),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button.button-outline.w-52.md:w-60","button.button.button-outline.w-52.md:w-60",189785749),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),expand_all_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-expand-arrows","i.fas.fa-expand-arrows",-1453555274)], null)," Expand all"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button.button-outline.w-52.md:w-60","button.button.button-outline.w-52.md:w-60",189785749),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),collapse_all_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-compress-arrows-alt","i.fas.fa-compress-arrows-alt",883505961)], null)," Collapse all"], null)], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null));
})();
return res30962;
});
nw_calculator.views.delete_item_button = (function nw_calculator$views$delete_item_button(item_index){
var with_let31022 = reagent.ratom.with_let_values.call(null,new cljs.core.Keyword(null,"with-let31022","with-let31022",-408469642));
var temp__5757__auto___31025 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___31025 == null)){
} else {
var c__8434__auto___31026 = temp__5757__auto___31025;
if((with_let31022.generation === c__8434__auto___31026.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let31022.generation = c__8434__auto___31026.ratomGeneration);
}

var init31023 = (with_let31022.length === (0));
var delete_item_BANG_ = ((((init31023) || (cljs.core.not.call(null,with_let31022.hasOwnProperty((0))))))?(with_let31022[(0)] = (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nw-calculator.events","delete-item","nw-calculator.events/delete-item",1281141929),item_index], null));
})):(with_let31022[(0)]));
var res31024 = (function (){var num_selected_items = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nw-calculator.subs","num-selected-items","nw-calculator.subs/num-selected-items",787193036)], null)));
var disable_delete_button_QMARK_ = cljs.core._EQ_.call(null,(1),num_selected_items);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.circular_button_component,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"absolute text-xl top-2 right-0 border-0 flex-none",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disable_delete_button_QMARK_,new cljs.core.Keyword(null,"on-click","on-click",1632826543),delete_item_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-trash","i.fas.fa-trash",25003308)], null)], null);
})();
return res31024;
});
nw_calculator.views.item_cards = (function nw_calculator$views$item_cards(){
var num_selected_items = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nw-calculator.subs","num-selected-items","nw-calculator.subs/num-selected-items",787193036)], null)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),(function (){var iter__4611__auto__ = (function nw_calculator$views$item_cards_$_iter__31027(s__31028){
return (new cljs.core.LazySeq(null,(function (){
var s__31028__$1 = s__31028;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__31028__$1);
if(temp__5753__auto__){
var s__31028__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31028__$2)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,s__31028__$2);
var size__4610__auto__ = cljs.core.count.call(null,c__4609__auto__);
var b__31030 = cljs.core.chunk_buffer.call(null,size__4610__auto__);
if((function (){var i__31029 = (0);
while(true){
if((i__31029 < size__4610__auto__)){
var item_index = cljs.core._nth.call(null,c__4609__auto__,i__31029);
cljs.core.chunk_append.call(null,b__31030,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.card_component,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.delete_item_button,item_index], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.searchable_item_tree,item_index], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item_index], null)));

var G__31031 = (i__31029 + (1));
i__31029 = G__31031;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31030),nw_calculator$views$item_cards_$_iter__31027.call(null,cljs.core.chunk_rest.call(null,s__31028__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31030),null);
}
} else {
var item_index = cljs.core.first.call(null,s__31028__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.card_component,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.delete_item_button,item_index], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.searchable_item_tree,item_index], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item_index], null)),nw_calculator$views$item_cards_$_iter__31027.call(null,cljs.core.rest.call(null,s__31028__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__.call(null,cljs.core.range.call(null,num_selected_items));
})()], null);
});
nw_calculator.views.actions = (function nw_calculator$views$actions(){
var with_let31032 = reagent.ratom.with_let_values.call(null,new cljs.core.Keyword(null,"with-let31032","with-let31032",-1280319805));
var temp__5757__auto___31035 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___31035 == null)){
} else {
var c__8434__auto___31036 = temp__5757__auto___31035;
if((with_let31032.generation === c__8434__auto___31036.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let31032.generation = c__8434__auto___31036.ratomGeneration);
}

var init31033 = (with_let31032.length === (0));
var add_empty_item_BANG_ = ((((init31033) || (cljs.core.not.call(null,with_let31032.hasOwnProperty((0))))))?(with_let31032[(0)] = (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nw-calculator.events","add-empty-item","nw-calculator.events/add-empty-item",938385548)], null));
})):(with_let31032[(0)]));
var remove_items_BANG_ = ((((init31033) || (cljs.core.not.call(null,with_let31032.hasOwnProperty((1))))))?(with_let31032[(1)] = (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nw-calculator.events","remove-all-items","nw-calculator.events/remove-all-items",-838768872)], null));
})):(with_let31032[(1)]));
var res31034 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.gap-6.md:gap-8.flex-wrap.justify-center","div.flex.gap-6.md:gap-8.flex-wrap.justify-center",-1048628004),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button.w-64","button.button.w-64",-1575548377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),add_empty_item_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-plus-circle","i.fas.fa-plus-circle",-274048195)], null)," Add another item"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button.w-64","button.button.w-64",-1575548377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),remove_items_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-trash","i.fas.fa-trash",25003308)], null)," Remove all items"], null)], null);
return res31034;
});
nw_calculator.views.header = (function nw_calculator$views$header(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.items-center","div.flex.flex-col.items-center",740436618),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.text-14.md:text-7xl-imp.text-center.animate__animated.animate__fadeIn.animate__slower","h1.text-14.md:text-7xl-imp.text-center.animate__animated.animate__fadeIn.animate__slower",1307967628),"New World"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.text-8.md:text-5xl-imp.text-center.animate__animated.animate__fadeIn.animate__slower.animate__delay-1s","h3.text-8.md:text-5xl-imp.text-center.animate__animated.animate__fadeIn.animate__slower.animate__delay-1s",1900596342),"Crafting Calculator"], null)], null);
});
nw_calculator.views.body = (function nw_calculator$views$body(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.relative.z-30.flex-grow.flex.gap-14.flex-col.items-center.flex-col.animate__animated.animate__fadeIn.animate__slower.animate__delay-1s","div.relative.z-30.flex-grow.flex.gap-14.flex-col.items-center.flex-col.animate__animated.animate__fadeIn.animate__slower.animate__delay-1s",-1976743234),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.item_cards], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.actions], null)], null);
});
nw_calculator.views.footer = (function nw_calculator$views$footer(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.relative.z-10.py-4.flex.flex.gap-5.justify-center.text-4xl","div.relative.z-10.py-4.flex.flex.gap-5.justify-center.text-4xl",-122485044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.color-off-white.text-base.absolute.left-4.bottom-4","span.color-off-white.text-base.absolute.left-4.bottom-4",-402927485),nw_calculator.config.version], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.cursor-pointer","a.cursor-pointer",1165592273),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/sansarip/nw-calculator",new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fab.fa-github","i.fab.fa-github",-107064877)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.cursor-pointer","a.cursor-pointer",1165592273),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"https://discord.gg/FCqzwycR23",new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fab.fa-discord","i.fab.fa-discord",-587434139)], null)], null)], null);
});
nw_calculator.views.loader = (function nw_calculator$views$loader(){
if(cljs.core.truth_(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nw-calculator.subs","loading?","nw-calculator.subs/loading?",205456784)], null))))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.absolute.z-50.h-full.w-full.flex.flex-col.gap-4.items-center","div.absolute.z-50.h-full.w-full.flex.flex-col.gap-4.items-center",-310016135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.loader_component,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"fa-6x pt-72"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Steering ship"], null)], null);
} else {
return null;
}
});
nw_calculator.views.background = (function nw_calculator$views$background(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.absolute.z-10.bg-inherit.w-full.h-full","div.absolute.z-10.bg-inherit.w-full.h-full",-1326596313)], null);
});
nw_calculator.views.background_image = (function nw_calculator$views$background_image(){
var start_animation_QMARK_ = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nw-calculator.subs","ready?","nw-calculator.subs/ready?",1516982108)], null)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.absolute.z-0.w-full.h-full.object-cover","img.absolute.z-0.w-full.h-full.object-cover",901001857),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"https://i.gyazo.com/599d57716f081f1e4e6a8b61f4155981.jpg",new cljs.core.Keyword(null,"class","class",-2030961996),nw_calculator.styles.background_image_class.call(null,start_animation_QMARK_)], null)], null);
});
nw_calculator.views.content = (function nw_calculator$views$content(){
var show_content_QMARK_ = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nw-calculator.subs","ready?","nw-calculator.subs/ready?",1516982108)], null)));
if(cljs.core.truth_(show_content_QMARK_)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.relative.h-full.z-30.flex.flex-col.gap-20.pt-40.overflow-y-auto","div.relative.h-full.z-30.flex.flex-col.gap-20.pt-40.overflow-y-auto",1002607549),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.header], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.body], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.footer], null)], null);
} else {
return null;
}
});
nw_calculator.views.main_panel = (function nw_calculator$views$main_panel(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.z-10.absolute.bg-opacity-75.relative.h-screen.dark.bg-raisin-black","div.z-10.absolute.bg-opacity-75.relative.h-screen.dark.bg-raisin-black",-1794079056),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.loader], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.background], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.background_image], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.content], null)], null);
});

//# sourceMappingURL=views.js.map
