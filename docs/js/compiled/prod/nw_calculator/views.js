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
var with_let29138 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let29138);
var temp__5757__auto___29142 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___29142 == null)){
} else {
var c__18156__auto___29143 = temp__5757__auto___29142;
if((with_let29138.generation === c__18156__auto___29143.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let29138.generation = c__18156__auto___29143.ratomGeneration);
}

var init29139 = (with_let29138.length === (0));
var search_BANG_ = ((((init29139) || (cljs.core.not(with_let29138.hasOwnProperty((0))))))?(with_let29138[(0)] = nw_calculator.utilities.debounce((function (query){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_search,item_index,query], null));
}),(100))):(with_let29138[(0)]));
var select_item_BANG_ = ((((init29139) || (cljs.core.not(with_let29138.hasOwnProperty((1))))))?(with_let29138[(1)] = (function (item){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_select_DASH_item,item_index,item], null));
})):(with_let29138[(1)]));
var clear_search_BANG_ = ((((init29139) || (cljs.core.not(with_let29138.hasOwnProperty((2))))))?(with_let29138[(2)] = (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_clear_DASH_search,item_index], null));
})):(with_let29138[(2)]));
var res29140 = (function (){var results = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_search_DASH_results,item_index], null)));
var map__29141 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_selected_DASH_item,item_index], null)));
var map__29141__$1 = cljs.core.__destructure_map(map__29141);
var item_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29141__$1,cljs.core.cst$kw$name);
var item_component = (function (item_map){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.item_component,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$item_DASH_map,item_map,cljs.core.cst$kw$container_DASH_props,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,nw_calculator.styles.search_result_item_class()], null)], null)], null);
});
var searching_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_searching_QMARK_], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$f_GT_,nw_calculator.components.search_component,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$results,results,cljs.core.cst$kw$input_DASH_props,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$placeholder,"\uD83D\uDD0D Search for an item",cljs.core.cst$kw$default_DASH_value,item_name], null),cljs.core.cst$kw$get_DASH_value,cljs.core.cst$kw$name,cljs.core.cst$kw$make_DASH_result,item_component,cljs.core.cst$kw$on_DASH_search,search_BANG_,cljs.core.cst$kw$loading_QMARK_,searching_QMARK_,cljs.core.cst$kw$on_DASH_clear,clear_search_BANG_,cljs.core.cst$kw$on_DASH_select,select_item_BANG_], null)], null);
})();
return res29140;
});
nw_calculator.views.custom_item_amount = (function nw_calculator$views$custom_item_amount(p__29144){
var map__29145 = p__29144;
var map__29145__$1 = cljs.core.__destructure_map(map__29145);
var editable_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29145__$1,cljs.core.cst$kw$editable_QMARK_);
var amount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29145__$1,cljs.core.cst$kw$amount);
var item_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29145__$1,cljs.core.cst$kw$item_DASH_index);
var with_let29146 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let29146);
var temp__5757__auto___29149 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___29149 == null)){
} else {
var c__18156__auto___29150 = temp__5757__auto___29149;
if((with_let29146.generation === c__18156__auto___29150.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let29146.generation = c__18156__auto___29150.ratomGeneration);
}

var init29147 = (with_let29146.length === (0));
var set_amount_multiplier_BANG_ = ((((init29147) || (cljs.core.not(with_let29146.hasOwnProperty((0))))))?(with_let29146[(0)] = (function (event){
var multiplier = parseInt(event.target.value);
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_set_DASH_amount_DASH_multiplier,item_index,multiplier], null));
})):(with_let29146[(0)]));
var min_amount_multiplier = ((((init29147) || (cljs.core.not(with_let29146.hasOwnProperty((1))))))?(with_let29146[(1)] = (1)):(with_let29146[(1)]));
var res29148 = (function (){var amount_multiplier_STAR_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_amount_DASH_multiplier,item_index], null)));
var amount_multiplier = (cljs.core.truth_(isNaN(amount_multiplier_STAR_))?min_amount_multiplier:amount_multiplier_STAR_);
if(cljs.core.truth_(editable_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$basic_DASH_input$w_DASH_11_DASH_imp,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$number,cljs.core.cst$kw$default_DASH_value,amount_multiplier,cljs.core.cst$kw$placeholder,min_amount_multiplier,cljs.core.cst$kw$on_DASH_input,set_amount_multiplier_BANG_], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$self_DASH_center,amount], null);
}
})();
return res29148;
});
nw_calculator.views.custom_item_name = (function nw_calculator$views$custom_item_name(p__29151){
var map__29152 = p__29151;
var map__29152__$1 = cljs.core.__destructure_map(map__29152);
var searchable_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29152__$1,cljs.core.cst$kw$searchable_QMARK_);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29152__$1,cljs.core.cst$kw$name);
var item_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29152__$1,cljs.core.cst$kw$item_DASH_index);
var external_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29152__$1,cljs.core.cst$kw$external_DASH_url);
if(cljs.core.truth_(searchable_QMARK_)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$bg_DASH_inherit$w_DASH_full$flex$gap_DASH_2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.search,item_index], null),(cljs.core.truth_(external_url)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$self_DASH_center,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,external_url,cljs.core.cst$kw$target,"_blank"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$text_DASH_sm$md_COLON_text_DASH_base$fas$fa_DASH_external_DASH_link_DASH_alt], null)], null):null)], null);
} else {
if(cljs.core.truth_(external_url)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$whitespace_DASH_nowrap,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,external_url,cljs.core.cst$kw$target,"_blank"], null),name], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$whitespace_DASH_nowrap,name], null);
}
}
});
nw_calculator.views.item = (function nw_calculator$views$item(p__29153,item_index){
var map__29154 = p__29153;
var map__29154__$1 = cljs.core.__destructure_map(map__29154);
var map__29155 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29154__$1,cljs.core.cst$kw$node);
var map__29155__$1 = cljs.core.__destructure_map(map__29155);
var item_map = map__29155__$1;
var external_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29155__$1,cljs.core.cst$kw$external_DASH_url);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29155__$1,cljs.core.cst$kw$name);
var amount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29155__$1,cljs.core.cst$kw$amount);
var root_node_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29154__$1,cljs.core.cst$kw$root_DASH_node_QMARK_);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.item_component,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$popup_DASH_on_DASH_hover_QMARK_,true,cljs.core.cst$kw$container_DASH_props,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,["m-0-imp",(cljs.core.truth_(root_node_QMARK_)?" bg-inherit":null)].join('')], null),cljs.core.cst$kw$item_DASH_map,item_map,cljs.core.cst$kw$custom_DASH_amount,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.custom_item_amount,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$editable_QMARK_,root_node_QMARK_,cljs.core.cst$kw$amount,amount,cljs.core.cst$kw$item_DASH_index,item_index], null)], null),cljs.core.cst$kw$custom_DASH_name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.custom_item_name,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$searchable_QMARK_,root_node_QMARK_,cljs.core.cst$kw$external_DASH_url,external_url,cljs.core.cst$kw$name,name,cljs.core.cst$kw$item_DASH_index,item_index], null)], null)], null)], null);
});
nw_calculator.views.searchable_item_tree = (function nw_calculator$views$searchable_item_tree(item_index){
var with_let29156 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let29156);
var temp__5757__auto___29192 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___29192 == null)){
} else {
var c__18156__auto___29193 = temp__5757__auto___29192;
if((with_let29156.generation === c__18156__auto___29193.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let29156.generation = c__18156__auto___29193.ratomGeneration);
}

var init29157 = (with_let29156.length === (0));
var collapsed_item_updaters = ((((init29157) || (cljs.core.not(with_let29156.hasOwnProperty((0))))))?(with_let29156[(0)] = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY)):(with_let29156[(0)]));
var set_collapsed_updater_BANG_ = ((((init29157) || (cljs.core.not(with_let29156.hasOwnProperty((1))))))?(with_let29156[(1)] = (function (id,updater){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(collapsed_item_updaters,cljs.core.assoc,id,updater);
})):(with_let29156[(1)]));
var unset_collapsed_updater_BANG_ = ((((init29157) || (cljs.core.not(with_let29156.hasOwnProperty((2))))))?(with_let29156[(2)] = (function (id){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(collapsed_item_updaters,cljs.core.dissoc,id);
})):(with_let29156[(2)]));
var expand_all_BANG_ = ((((init29157) || (cljs.core.not(with_let29156.hasOwnProperty((3))))))?(with_let29156[(3)] = (function (){
var seq__29159 = cljs.core.seq(cljs.core.deref(collapsed_item_updaters));
var chunk__29160 = null;
var count__29161 = (0);
var i__29162 = (0);
while(true){
if((i__29162 < count__29161)){
var vec__29169 = chunk__29160.cljs$core$IIndexed$_nth$arity$2(null,i__29162);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29169,(0),null);
var set_collapsed_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29169,(1),null);
(set_collapsed_item.cljs$core$IFn$_invoke$arity$1 ? set_collapsed_item.cljs$core$IFn$_invoke$arity$1(false) : set_collapsed_item.call(null,false));


var G__29194 = seq__29159;
var G__29195 = chunk__29160;
var G__29196 = count__29161;
var G__29197 = (i__29162 + (1));
seq__29159 = G__29194;
chunk__29160 = G__29195;
count__29161 = G__29196;
i__29162 = G__29197;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__29159);
if(temp__5753__auto__){
var seq__29159__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29159__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__29159__$1);
var G__29198 = cljs.core.chunk_rest(seq__29159__$1);
var G__29199 = c__4638__auto__;
var G__29200 = cljs.core.count(c__4638__auto__);
var G__29201 = (0);
seq__29159 = G__29198;
chunk__29160 = G__29199;
count__29161 = G__29200;
i__29162 = G__29201;
continue;
} else {
var vec__29172 = cljs.core.first(seq__29159__$1);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29172,(0),null);
var set_collapsed_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29172,(1),null);
(set_collapsed_item.cljs$core$IFn$_invoke$arity$1 ? set_collapsed_item.cljs$core$IFn$_invoke$arity$1(false) : set_collapsed_item.call(null,false));


var G__29202 = cljs.core.next(seq__29159__$1);
var G__29203 = null;
var G__29204 = (0);
var G__29205 = (0);
seq__29159 = G__29202;
chunk__29160 = G__29203;
count__29161 = G__29204;
i__29162 = G__29205;
continue;
}
} else {
return null;
}
}
break;
}
})):(with_let29156[(3)]));
var collapse_all_BANG_ = ((((init29157) || (cljs.core.not(with_let29156.hasOwnProperty((4))))))?(with_let29156[(4)] = (function (){
var seq__29175 = cljs.core.seq(cljs.core.deref(collapsed_item_updaters));
var chunk__29176 = null;
var count__29177 = (0);
var i__29178 = (0);
while(true){
if((i__29178 < count__29177)){
var vec__29185 = chunk__29176.cljs$core$IIndexed$_nth$arity$2(null,i__29178);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29185,(0),null);
var set_collapsed_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29185,(1),null);
(set_collapsed_item.cljs$core$IFn$_invoke$arity$1 ? set_collapsed_item.cljs$core$IFn$_invoke$arity$1(true) : set_collapsed_item.call(null,true));


var G__29206 = seq__29175;
var G__29207 = chunk__29176;
var G__29208 = count__29177;
var G__29209 = (i__29178 + (1));
seq__29175 = G__29206;
chunk__29176 = G__29207;
count__29177 = G__29208;
i__29178 = G__29209;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__29175);
if(temp__5753__auto__){
var seq__29175__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29175__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__29175__$1);
var G__29210 = cljs.core.chunk_rest(seq__29175__$1);
var G__29211 = c__4638__auto__;
var G__29212 = cljs.core.count(c__4638__auto__);
var G__29213 = (0);
seq__29175 = G__29210;
chunk__29176 = G__29211;
count__29177 = G__29212;
i__29178 = G__29213;
continue;
} else {
var vec__29188 = cljs.core.first(seq__29175__$1);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29188,(0),null);
var set_collapsed_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29188,(1),null);
(set_collapsed_item.cljs$core$IFn$_invoke$arity$1 ? set_collapsed_item.cljs$core$IFn$_invoke$arity$1(true) : set_collapsed_item.call(null,true));


var G__29214 = cljs.core.next(seq__29175__$1);
var G__29215 = null;
var G__29216 = (0);
var G__29217 = (0);
seq__29175 = G__29214;
chunk__29176 = G__29215;
count__29177 = G__29216;
i__29178 = G__29217;
continue;
}
} else {
return null;
}
}
break;
}
})):(with_let29156[(4)]));
var item_STAR_ = ((((init29157) || (cljs.core.not(with_let29156.hasOwnProperty((5))))))?(with_let29156[(5)] = (function (node){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.item,node,item_index], null);
})):(with_let29156[(5)]));
var res29158 = (function (){var map__29191 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_selected_DASH_item,item_index], null)));
var map__29191__$1 = cljs.core.__destructure_map(map__29191);
var selected_item = map__29191__$1;
var ingredients = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29191__$1,cljs.core.cst$kw$ingredients);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$bg_DASH_inherit$flex$flex_DASH_col$gap_DASH_10$items_DASH_center,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,nw_calculator.components.collapsible_tree.component.collapsible_list_provider,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$set_DASH_collapsed_DASH_updater,set_collapsed_updater_BANG_,cljs.core.cst$kw$unset_DASH_collapsed_DASH_updater,unset_collapsed_updater_BANG_], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.collapsible_tree_component,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tree_DASH_map,selected_item,cljs.core.cst$kw$children,cljs.core.cst$kw$ingredients,cljs.core.cst$kw$make_DASH_node,item_STAR_], null)], null)], null),(cljs.core.truth_(cljs.core.not_empty(ingredients))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$flex$gap_DASH_6,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$button$button_DASH_outline$w_DASH_52$md_COLON_w_DASH_60,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,expand_all_BANG_], null),"expand all"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$button$button_DASH_outline$w_DASH_52$md_COLON_w_DASH_60,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,collapse_all_BANG_], null),"collapse all"], null)], null):null)], null);
})();
return res29158;
});
nw_calculator.views.delete_item_button = (function nw_calculator$views$delete_item_button(item_index){
var with_let29218 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let29218);
var temp__5757__auto___29221 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___29221 == null)){
} else {
var c__18156__auto___29222 = temp__5757__auto___29221;
if((with_let29218.generation === c__18156__auto___29222.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let29218.generation = c__18156__auto___29222.ratomGeneration);
}

var init29219 = (with_let29218.length === (0));
var delete_item_BANG_ = ((((init29219) || (cljs.core.not(with_let29218.hasOwnProperty((0))))))?(with_let29218[(0)] = (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_delete_DASH_item,item_index], null));
})):(with_let29218[(0)]));
var res29220 = (function (){var num_selected_items = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_num_DASH_selected_DASH_items], null)));
var disable_delete_button_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),num_selected_items);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.circular_button_component,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,"absolute text-xl top-2 right-0 border-0 flex-none",cljs.core.cst$kw$disabled,disable_delete_button_QMARK_,cljs.core.cst$kw$on_DASH_click,delete_item_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fas$fa_DASH_trash], null)], null);
})();
return res29220;
});
nw_calculator.views.card = (function nw_calculator$views$card(var_args){
var args__4824__auto__ = [];
var len__4818__auto___29224 = arguments.length;
var i__4819__auto___29225 = (0);
while(true){
if((i__4819__auto___29225 < len__4818__auto___29224)){
args__4824__auto__.push((arguments[i__4819__auto___29225]));

var G__29226 = (i__4819__auto___29225 + (1));
i__4819__auto___29225 = G__29226;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return nw_calculator.views.card.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(nw_calculator.views.card.cljs$core$IFn$_invoke$arity$variadic = (function (children){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.card_component,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_], null),children)], null);
}));

(nw_calculator.views.card.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(nw_calculator.views.card.cljs$lang$applyTo = (function (seq29223){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29223));
}));

nw_calculator.views.item_cards = (function nw_calculator$views$item_cards(){
var num_selected_items = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_num_DASH_selected_DASH_items], null)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_,(function (){var iter__4611__auto__ = (function nw_calculator$views$item_cards_$_iter__29227(s__29228){
return (new cljs.core.LazySeq(null,(function (){
var s__29228__$1 = s__29228;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__29228__$1);
if(temp__5753__auto__){
var s__29228__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29228__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__29228__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__29230 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__29229 = (0);
while(true){
if((i__29229 < size__4610__auto__)){
var item_index = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4609__auto__,i__29229);
cljs.core.chunk_append(b__29230,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.delete_item_button,item_index], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.searchable_item_tree,item_index], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,item_index], null)));

var G__29231 = (i__29229 + (1));
i__29229 = G__29231;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29230),nw_calculator$views$item_cards_$_iter__29227(cljs.core.chunk_rest(s__29228__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29230),null);
}
} else {
var item_index = cljs.core.first(s__29228__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.delete_item_button,item_index], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.searchable_item_tree,item_index], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,item_index], null)),nw_calculator$views$item_cards_$_iter__29227(cljs.core.rest(s__29228__$2)));
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
var with_let29232 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let29232);
var temp__5757__auto___29235 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___29235 == null)){
} else {
var c__18156__auto___29236 = temp__5757__auto___29235;
if((with_let29232.generation === c__18156__auto___29236.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let29232.generation = c__18156__auto___29236.ratomGeneration);
}

var init29233 = (with_let29232.length === (0));
var add_empty_item_BANG_ = ((((init29233) || (cljs.core.not(with_let29232.hasOwnProperty((0))))))?(with_let29232[(0)] = (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_add_DASH_empty_DASH_item], null));
})):(with_let29232[(0)]));
var res29234 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$button$w_DASH_64,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,add_empty_item_BANG_], null),"Add another item"], null);
return res29234;
});
nw_calculator.views.header = (function nw_calculator$views$header(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$flex$flex_DASH_col$items_DASH_center,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3$text_DASH_center,"New World Crafting Calculator"], null)], null);
});
nw_calculator.views.body = (function nw_calculator$views$body(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$flex_DASH_grow$flex$gap_DASH_14$flex_DASH_col$items_DASH_center$flex_DASH_col,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.item_cards], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.add_item_card_button], null)], null);
});
nw_calculator.views.footer = (function nw_calculator$views$footer(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$py_DASH_4$flex$flex$gap_DASH_5$justify_DASH_center$text_DASH_4xl,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$cursor_DASH_pointer,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"https://github.com/sansarip/nw-calculator",cljs.core.cst$kw$target,"_blank"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fab$fa_DASH_github], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$cursor_DASH_pointer,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"https://discord.gg/FCqzwycR23",cljs.core.cst$kw$target,"_blank"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fab$fa_DASH_discord], null)], null)], null);
});
nw_calculator.views.theme_toggle = (function nw_calculator$views$theme_toggle(){
var with_let29237 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let29237);
var temp__5757__auto___29240 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___29240 == null)){
} else {
var c__18156__auto___29241 = temp__5757__auto___29240;
if((with_let29237.generation === c__18156__auto___29241.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let29237.generation = c__18156__auto___29241.ratomGeneration);
}

var init29238 = (with_let29237.length === (0));
var set_theme_BANG_ = ((((init29238) || (cljs.core.not(with_let29237.hasOwnProperty((0))))))?(with_let29237[(0)] = (function (event){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_set_DASH_dark_DASH_theme,event.target.checked], null));
})):(with_let29237[(0)]));
var res29239 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$absolute$top_DASH_10$right_DASH_10,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.toggle_component,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$checkbox_DASH_props,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_change,set_theme_BANG_,cljs.core.cst$kw$checked,cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_dark_DASH_theme_QMARK_], null)))], null),cljs.core.cst$kw$on,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fas$fa_DASH_sun$w_DASH_full$h_DASH_full$text_DASH_yellow_DASH_500], null),cljs.core.cst$kw$off,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fas$fa_DASH_moon$w_DASH_full$h_DASH_full$text_DASH_gray_DASH_600], null)], null)], null)], null);
return res29239;
});
nw_calculator.views.main_panel = (function nw_calculator$views$main_panel(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$bg_DASH_inherit$relative$overflow_DASH_y_DASH_auto$flex$flex_DASH_col$gap_DASH_20$h_DASH_screen$pt_DASH_40,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,(cljs.core.truth_(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$subs_SLASH_dark_DASH_theme_QMARK_], null))))?"dark":null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.page_loader], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.theme_toggle], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.header], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.body], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.footer], null)], null);
});
