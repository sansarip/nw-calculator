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
nw_calculator.views.search = (function nw_calculator$views$search(item_index){
var with_let29088 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let29088);
var temp__5739__auto___29092 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5739__auto___29092 == null)){
} else {
var c__18155__auto___29093 = temp__5739__auto___29092;
if((with_let29088.generation === c__18155__auto___29093.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let29088.generation = c__18155__auto___29093.ratomGeneration);
}

var init29089 = (with_let29088.length === (0));
var search_BANG_ = ((((init29089) || (cljs.core.not(with_let29088.hasOwnProperty((0))))))?(with_let29088[(0)] = nw_calculator.utilities.debounce((function (query){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_search,item_index,query], null));
}),(100))):(with_let29088[(0)]));
var select_item_BANG_ = ((((init29089) || (cljs.core.not(with_let29088.hasOwnProperty((1))))))?(with_let29088[(1)] = (function (item){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_select_DASH_item,item_index,item], null));
})):(with_let29088[(1)]));
var clear_search_BANG_ = ((((init29089) || (cljs.core.not(with_let29088.hasOwnProperty((2))))))?(with_let29088[(2)] = (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_clear_DASH_search,item_index], null));
})):(with_let29088[(2)]));
var res29090 = (function (){var results = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_search_DASH_results,item_index], null)));
var map__29091 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_selected_DASH_item,item_index], null)));
var map__29091__$1 = cljs.core.__destructure_map(map__29091);
var item_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29091__$1,cljs.core.cst$kw$name);
var item_component = (function (item_map){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.item_component,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$item_DASH_map,item_map,cljs.core.cst$kw$container_DASH_props,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,nw_calculator.styles.search_result_item_class()], null)], null)], null);
});
var searching_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_searching_QMARK_], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$f_GT_,nw_calculator.components.search_component,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$results,results,cljs.core.cst$kw$input_DASH_props,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$placeholder,"\uD83D\uDD0D Search for an item",cljs.core.cst$kw$default_DASH_value,item_name], null),cljs.core.cst$kw$get_DASH_value,cljs.core.cst$kw$name,cljs.core.cst$kw$make_DASH_result,item_component,cljs.core.cst$kw$on_DASH_search,search_BANG_,cljs.core.cst$kw$loading_QMARK_,searching_QMARK_,cljs.core.cst$kw$on_DASH_clear,clear_search_BANG_,cljs.core.cst$kw$on_DASH_select,select_item_BANG_], null)], null);
})();
return res29090;
});
nw_calculator.views.custom_item_amount = (function nw_calculator$views$custom_item_amount(p__29094){
var map__29095 = p__29094;
var map__29095__$1 = cljs.core.__destructure_map(map__29095);
var editable_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29095__$1,cljs.core.cst$kw$editable_QMARK_);
var amount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29095__$1,cljs.core.cst$kw$amount);
var item_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29095__$1,cljs.core.cst$kw$item_DASH_index);
var with_let29096 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let29096);
var temp__5739__auto___29099 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5739__auto___29099 == null)){
} else {
var c__18155__auto___29100 = temp__5739__auto___29099;
if((with_let29096.generation === c__18155__auto___29100.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let29096.generation = c__18155__auto___29100.ratomGeneration);
}

var init29097 = (with_let29096.length === (0));
var set_amount_multiplier_BANG_ = ((((init29097) || (cljs.core.not(with_let29096.hasOwnProperty((0))))))?(with_let29096[(0)] = (function (event){
var multiplier = parseInt(event.target.value);
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_set_DASH_amount_DASH_multiplier,item_index,multiplier], null));
})):(with_let29096[(0)]));
var min_amount_multiplier = ((((init29097) || (cljs.core.not(with_let29096.hasOwnProperty((1))))))?(with_let29096[(1)] = (1)):(with_let29096[(1)]));
var res29098 = (function (){var amount_multiplier_STAR_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_amount_DASH_multiplier,item_index], null)));
var amount_multiplier = (cljs.core.truth_(isNaN(amount_multiplier_STAR_))?min_amount_multiplier:amount_multiplier_STAR_);
if(cljs.core.truth_(editable_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$basic_DASH_input$w_DASH_11_DASH_imp,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$number,cljs.core.cst$kw$default_DASH_value,amount_multiplier,cljs.core.cst$kw$placeholder,min_amount_multiplier,cljs.core.cst$kw$on_DASH_input,set_amount_multiplier_BANG_], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$self_DASH_center,amount], null);
}
})();
return res29098;
});
nw_calculator.views.custom_item_name = (function nw_calculator$views$custom_item_name(p__29101){
var map__29102 = p__29101;
var map__29102__$1 = cljs.core.__destructure_map(map__29102);
var searchable_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29102__$1,cljs.core.cst$kw$searchable_QMARK_);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29102__$1,cljs.core.cst$kw$name);
var item_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29102__$1,cljs.core.cst$kw$item_DASH_index);
var external_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29102__$1,cljs.core.cst$kw$external_DASH_url);
if(cljs.core.truth_(searchable_QMARK_)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$w_DASH_full$flex$gap_DASH_2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.search,item_index], null),(cljs.core.truth_(external_url)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$self_DASH_center,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,external_url,cljs.core.cst$kw$target,"_blank"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$text_DASH_sm$md_COLON_text_DASH_base$fas$fa_DASH_external_DASH_link_DASH_alt], null)], null):null)], null);
} else {
if(cljs.core.truth_(external_url)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$whitespace_DASH_nowrap,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,external_url,cljs.core.cst$kw$target,"_blank"], null),name], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$whitespace_DASH_nowrap,name], null);
}
}
});
nw_calculator.views.item = (function nw_calculator$views$item(p__29103,item_index){
var map__29104 = p__29103;
var map__29104__$1 = cljs.core.__destructure_map(map__29104);
var map__29105 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29104__$1,cljs.core.cst$kw$node);
var map__29105__$1 = cljs.core.__destructure_map(map__29105);
var item_map = map__29105__$1;
var external_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29105__$1,cljs.core.cst$kw$external_DASH_url);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29105__$1,cljs.core.cst$kw$name);
var amount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29105__$1,cljs.core.cst$kw$amount);
var root_node_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29104__$1,cljs.core.cst$kw$root_DASH_node_QMARK_);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.item_component,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$popup_DASH_on_DASH_hover_QMARK_,true,cljs.core.cst$kw$container_DASH_props,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"m-0-imp"], null),cljs.core.cst$kw$item_DASH_map,item_map,cljs.core.cst$kw$custom_DASH_amount,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.custom_item_amount,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$editable_QMARK_,root_node_QMARK_,cljs.core.cst$kw$amount,amount,cljs.core.cst$kw$item_DASH_index,item_index], null)], null),cljs.core.cst$kw$custom_DASH_name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.custom_item_name,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$searchable_QMARK_,root_node_QMARK_,cljs.core.cst$kw$external_DASH_url,external_url,cljs.core.cst$kw$name,name,cljs.core.cst$kw$item_DASH_index,item_index], null)], null)], null)], null);
});
nw_calculator.views.searchable_item_tree = (function nw_calculator$views$searchable_item_tree(item_index){
var with_let29106 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let29106);
var temp__5739__auto___29142 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5739__auto___29142 == null)){
} else {
var c__18155__auto___29143 = temp__5739__auto___29142;
if((with_let29106.generation === c__18155__auto___29143.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let29106.generation = c__18155__auto___29143.ratomGeneration);
}

var init29107 = (with_let29106.length === (0));
var collapsed_item_updaters = ((((init29107) || (cljs.core.not(with_let29106.hasOwnProperty((0))))))?(with_let29106[(0)] = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY)):(with_let29106[(0)]));
var set_collapsed_updater_BANG_ = ((((init29107) || (cljs.core.not(with_let29106.hasOwnProperty((1))))))?(with_let29106[(1)] = (function (id,updater){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(collapsed_item_updaters,cljs.core.assoc,id,updater);
})):(with_let29106[(1)]));
var unset_collapsed_updater_BANG_ = ((((init29107) || (cljs.core.not(with_let29106.hasOwnProperty((2))))))?(with_let29106[(2)] = (function (id){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(collapsed_item_updaters,cljs.core.dissoc,id);
})):(with_let29106[(2)]));
var expand_all_BANG_ = ((((init29107) || (cljs.core.not(with_let29106.hasOwnProperty((3))))))?(with_let29106[(3)] = (function (){
var seq__29109 = cljs.core.seq(cljs.core.deref(collapsed_item_updaters));
var chunk__29110 = null;
var count__29111 = (0);
var i__29112 = (0);
while(true){
if((i__29112 < count__29111)){
var vec__29119 = chunk__29110.cljs$core$IIndexed$_nth$arity$2(null,i__29112);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29119,(0),null);
var set_collapsed_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29119,(1),null);
(set_collapsed_item.cljs$core$IFn$_invoke$arity$1 ? set_collapsed_item.cljs$core$IFn$_invoke$arity$1(false) : set_collapsed_item.call(null,false));


var G__29144 = seq__29109;
var G__29145 = chunk__29110;
var G__29146 = count__29111;
var G__29147 = (i__29112 + (1));
seq__29109 = G__29144;
chunk__29110 = G__29145;
count__29111 = G__29146;
i__29112 = G__29147;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__29109);
if(temp__5735__auto__){
var seq__29109__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29109__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__29109__$1);
var G__29148 = cljs.core.chunk_rest(seq__29109__$1);
var G__29149 = c__4638__auto__;
var G__29150 = cljs.core.count(c__4638__auto__);
var G__29151 = (0);
seq__29109 = G__29148;
chunk__29110 = G__29149;
count__29111 = G__29150;
i__29112 = G__29151;
continue;
} else {
var vec__29122 = cljs.core.first(seq__29109__$1);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29122,(0),null);
var set_collapsed_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29122,(1),null);
(set_collapsed_item.cljs$core$IFn$_invoke$arity$1 ? set_collapsed_item.cljs$core$IFn$_invoke$arity$1(false) : set_collapsed_item.call(null,false));


var G__29152 = cljs.core.next(seq__29109__$1);
var G__29153 = null;
var G__29154 = (0);
var G__29155 = (0);
seq__29109 = G__29152;
chunk__29110 = G__29153;
count__29111 = G__29154;
i__29112 = G__29155;
continue;
}
} else {
return null;
}
}
break;
}
})):(with_let29106[(3)]));
var collapse_all_BANG_ = ((((init29107) || (cljs.core.not(with_let29106.hasOwnProperty((4))))))?(with_let29106[(4)] = (function (){
var seq__29125 = cljs.core.seq(cljs.core.deref(collapsed_item_updaters));
var chunk__29126 = null;
var count__29127 = (0);
var i__29128 = (0);
while(true){
if((i__29128 < count__29127)){
var vec__29135 = chunk__29126.cljs$core$IIndexed$_nth$arity$2(null,i__29128);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29135,(0),null);
var set_collapsed_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29135,(1),null);
(set_collapsed_item.cljs$core$IFn$_invoke$arity$1 ? set_collapsed_item.cljs$core$IFn$_invoke$arity$1(true) : set_collapsed_item.call(null,true));


var G__29156 = seq__29125;
var G__29157 = chunk__29126;
var G__29158 = count__29127;
var G__29159 = (i__29128 + (1));
seq__29125 = G__29156;
chunk__29126 = G__29157;
count__29127 = G__29158;
i__29128 = G__29159;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__29125);
if(temp__5735__auto__){
var seq__29125__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29125__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__29125__$1);
var G__29160 = cljs.core.chunk_rest(seq__29125__$1);
var G__29161 = c__4638__auto__;
var G__29162 = cljs.core.count(c__4638__auto__);
var G__29163 = (0);
seq__29125 = G__29160;
chunk__29126 = G__29161;
count__29127 = G__29162;
i__29128 = G__29163;
continue;
} else {
var vec__29138 = cljs.core.first(seq__29125__$1);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29138,(0),null);
var set_collapsed_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29138,(1),null);
(set_collapsed_item.cljs$core$IFn$_invoke$arity$1 ? set_collapsed_item.cljs$core$IFn$_invoke$arity$1(true) : set_collapsed_item.call(null,true));


var G__29164 = cljs.core.next(seq__29125__$1);
var G__29165 = null;
var G__29166 = (0);
var G__29167 = (0);
seq__29125 = G__29164;
chunk__29126 = G__29165;
count__29127 = G__29166;
i__29128 = G__29167;
continue;
}
} else {
return null;
}
}
break;
}
})):(with_let29106[(4)]));
var item_STAR_ = ((((init29107) || (cljs.core.not(with_let29106.hasOwnProperty((5))))))?(with_let29106[(5)] = (function (node){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.item,node,item_index], null);
})):(with_let29106[(5)]));
var button = ((((init29107) || (cljs.core.not(with_let29106.hasOwnProperty((6))))))?(with_let29106[(6)] = cljs.core.cst$kw$button$button$button_DASH_outline$w_DASH_52$md_COLON_w_DASH_60):(with_let29106[(6)]));
var res29108 = (function (){var map__29141 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_selected_DASH_item,item_index], null)));
var map__29141__$1 = cljs.core.__destructure_map(map__29141);
var selected_item = map__29141__$1;
var ingredients = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29141__$1,cljs.core.cst$kw$ingredients);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$flex$flex_DASH_col$gap_DASH_10$items_DASH_center,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,nw_calculator.components.collapsible_tree.component.collapsible_list_provider,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$set_DASH_collapsed_DASH_updater,set_collapsed_updater_BANG_,cljs.core.cst$kw$unset_DASH_collapsed_DASH_updater,unset_collapsed_updater_BANG_], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.collapsible_tree_component,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tree_DASH_map,selected_item,cljs.core.cst$kw$children,cljs.core.cst$kw$ingredients,cljs.core.cst$kw$make_DASH_node,item_STAR_], null)], null)], null),(cljs.core.truth_(cljs.core.not_empty(ingredients))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$flex$gap_DASH_6,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,expand_all_BANG_], null),"expand all"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,collapse_all_BANG_], null),"collapse all"], null)], null):null)], null);
})();
return res29108;
});
nw_calculator.views.delete_item_button = (function nw_calculator$views$delete_item_button(item_index){
var with_let29168 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let29168);
var temp__5739__auto___29171 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5739__auto___29171 == null)){
} else {
var c__18155__auto___29172 = temp__5739__auto___29171;
if((with_let29168.generation === c__18155__auto___29172.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let29168.generation = c__18155__auto___29172.ratomGeneration);
}

var init29169 = (with_let29168.length === (0));
var delete_item_BANG_ = ((((init29169) || (cljs.core.not(with_let29168.hasOwnProperty((0))))))?(with_let29168[(0)] = (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_delete_DASH_item,item_index], null));
})):(with_let29168[(0)]));
var res29170 = (function (){var num_selected_items = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_num_DASH_selected_DASH_items], null)));
var disable_delete_button_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),num_selected_items);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.circular_button_component,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,"absolute text-xl top-2 right-0 border-0 flex-none",cljs.core.cst$kw$disabled,disable_delete_button_QMARK_,cljs.core.cst$kw$on_DASH_click,delete_item_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fas$fa_DASH_trash_DASH_alt], null)], null);
})();
return res29170;
});
nw_calculator.views.item_cards = (function nw_calculator$views$item_cards(){
var num_selected_items = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_num_DASH_selected_DASH_items], null)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_,(function (){var iter__4611__auto__ = (function nw_calculator$views$item_cards_$_iter__29173(s__29174){
return (new cljs.core.LazySeq(null,(function (){
var s__29174__$1 = s__29174;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__29174__$1);
if(temp__5735__auto__){
var s__29174__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29174__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__29174__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__29176 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__29175 = (0);
while(true){
if((i__29175 < size__4610__auto__)){
var item_index = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4609__auto__,i__29175);
cljs.core.chunk_append(b__29176,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.card_component,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.delete_item_button,item_index], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.searchable_item_tree,item_index], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,item_index], null)));

var G__29177 = (i__29175 + (1));
i__29175 = G__29177;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29176),nw_calculator$views$item_cards_$_iter__29173(cljs.core.chunk_rest(s__29174__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29176),null);
}
} else {
var item_index = cljs.core.first(s__29174__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.card_component,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.delete_item_button,item_index], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.searchable_item_tree,item_index], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,item_index], null)),nw_calculator$views$item_cards_$_iter__29173(cljs.core.rest(s__29174__$2)));
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
nw_calculator.views.page_loader = (function nw_calculator$views$page_loader(){
if(cljs.core.truth_(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_loading_QMARK_], null))))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$absolute$bg_DASH_inherit$z_DASH_50$h_DASH_full$w_DASH_full$flex$flex_DASH_col$gap_DASH_4$items_DASH_center,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.loader_component,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"fa-6x"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,"Steering ship"], null)], null);
} else {
return null;
}
});
nw_calculator.views.add_item_card_button = (function nw_calculator$views$add_item_card_button(){
var with_let29178 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let29178);
var temp__5739__auto___29181 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5739__auto___29181 == null)){
} else {
var c__18155__auto___29182 = temp__5739__auto___29181;
if((with_let29178.generation === c__18155__auto___29182.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let29178.generation = c__18155__auto___29182.ratomGeneration);
}

var init29179 = (with_let29178.length === (0));
var add_empty_item_BANG_ = ((((init29179) || (cljs.core.not(with_let29178.hasOwnProperty((0))))))?(with_let29178[(0)] = (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_add_DASH_empty_DASH_item], null));
})):(with_let29178[(0)]));
var res29180 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$button$w_DASH_64,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,add_empty_item_BANG_], null),"Add another item"], null);
return res29180;
});
nw_calculator.views.header = (function nw_calculator$views$header(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$flex$flex_DASH_col$items_DASH_center,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3$text_DASH_center,"New World Crafting Calculator"], null)], null);
});
nw_calculator.views.body = (function nw_calculator$views$body(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$flex_DASH_grow$flex$gap_DASH_14$flex_DASH_col$items_DASH_center$flex_DASH_col,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.item_cards], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.add_item_card_button], null)], null);
});
nw_calculator.views.footer = (function nw_calculator$views$footer(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$py_DASH_4$flex$flex$gap_DASH_4$justify_DASH_center$text_DASH_3xl,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$cursor_DASH_pointer,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"https://github.com/sansarip/nw-calculator",cljs.core.cst$kw$target,"_blank"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fab$fa_DASH_github], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$cursor_DASH_pointer,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"https://discord.gg/FCqzwycR23",cljs.core.cst$kw$target,"_blank"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fab$fa_DASH_discord], null)], null)], null);
});
nw_calculator.views.main_panel = (function nw_calculator$views$main_panel(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$flex$flex_DASH_col$gap_DASH_24$bg_DASH_inherit$h_DASH_screen$pt_DASH_48,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.page_loader], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.header], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.body], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.footer], null)], null);
});
