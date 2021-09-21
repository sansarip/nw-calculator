// Compiled by ClojureScript 1.10.879 {:optimizations :none}
goog.provide('nw_calculator.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('nw_calculator.utilities');
goog.require('nw_calculator.defaults');
goog.require('compound2.core');
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("nw-calculator.subs","search-results","nw-calculator.subs/search-results",1878819107),(function (p__29123,p__29124){
var map__29125 = p__29123;
var map__29125__$1 = cljs.core.__destructure_map.call(null,map__29125);
var search_results = cljs.core.get.call(null,map__29125__$1,new cljs.core.Keyword(null,"search-results","search-results",306464634));
var vec__29126 = p__29124;
var _ = cljs.core.nth.call(null,vec__29126,(0),null);
var item_index = cljs.core.nth.call(null,vec__29126,(1),null);
return cljs.core.get.call(null,search_results,item_index);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("nw-calculator.subs","selected-items","nw-calculator.subs/selected-items",1273617897),new cljs.core.Keyword(null,"selected-items","selected-items",-558712488));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("nw-calculator.subs","num-selected-items","nw-calculator.subs/num-selected-items",787193036),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nw-calculator.subs","selected-items","nw-calculator.subs/selected-items",1273617897)], null),(function (selected_items){
return cljs.core.count.call(null,selected_items);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("nw-calculator.subs","items-by-id","nw-calculator.subs/items-by-id",-1002175007),(function (db){
return new cljs.core.Keyword(null,"by-id","by-id",-2129473981).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(db));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("nw-calculator.subs","selected-option","nw-calculator.subs/selected-option",484567812),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nw-calculator.subs","selected-items","nw-calculator.subs/selected-items",1273617897)], null),(function (selected_items,p__29129){
var vec__29130 = p__29129;
var _ = cljs.core.nth.call(null,vec__29130,(0),null);
var vec__29133 = cljs.core.nth.call(null,vec__29130,(1),null);
var item_index = cljs.core.nth.call(null,vec__29133,(0),null);
var option_path = vec__29133;
return cljs.core.get_in.call(null,selected_items,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [item_index,new cljs.core.Keyword(null,"selected-options","selected-options",1306833224),option_path], null));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("nw-calculator.subs","resolved-selected-item","nw-calculator.subs/resolved-selected-item",-930622184),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nw-calculator.subs","selected-items","nw-calculator.subs/selected-items",1273617897)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nw-calculator.subs","items-by-id","nw-calculator.subs/items-by-id",-1002175007)], null),(function (p__29136,p__29137){
var vec__29138 = p__29136;
var selected_items = cljs.core.nth.call(null,vec__29138,(0),null);
var items_by_id = cljs.core.nth.call(null,vec__29138,(1),null);
var vec__29141 = p__29137;
var _ = cljs.core.nth.call(null,vec__29141,(0),null);
var item_index = cljs.core.nth.call(null,vec__29141,(1),null);
var map__29144 = cljs.core.get.call(null,selected_items,item_index);
var map__29144__$1 = cljs.core.__destructure_map.call(null,map__29144);
var map__29145 = cljs.core.get.call(null,map__29144__$1,new cljs.core.Keyword(null,"item","item",249373802));
var map__29145__$1 = cljs.core.__destructure_map.call(null,map__29145);
var selected_item_id = cljs.core.get.call(null,map__29145__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var quantity_multiplier = cljs.core.get.call(null,map__29144__$1,new cljs.core.Keyword(null,"quantity-multiplier","quantity-multiplier",-252611370));
var selected_options = cljs.core.get.call(null,map__29144__$1,new cljs.core.Keyword(null,"selected-options","selected-options",1306833224),cljs.core.PersistentArrayMap.EMPTY);
var map__29146 = cljs.core.get.call(null,items_by_id,selected_item_id);
var map__29146__$1 = cljs.core.__destructure_map.call(null,map__29146);
var item = map__29146__$1;
var quantity = cljs.core.get.call(null,map__29146__$1,new cljs.core.Keyword(null,"quantity","quantity",-1929050694));
var xp = cljs.core.get.call(null,map__29146__$1,new cljs.core.Keyword(null,"xp","xp",550374458));
var or__4212__auto__ = (function (){var G__29147 = item;
var G__29147__$1 = (((G__29147 == null))?null:cljs.core.not_empty.call(null,G__29147));
var G__29147__$2 = (((G__29147__$1 == null))?null:nw_calculator.utilities.resolve_refs.call(null,G__29147__$1,items_by_id,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item_index], null),selected_options));
var G__29147__$3 = (((G__29147__$2 == null))?null:nw_calculator.utilities.multiply_quantities.call(null,G__29147__$2,items_by_id,quantity_multiplier));
if((G__29147__$3 == null)){
return null;
} else {
return cljs.core.assoc.call(null,G__29147__$3,new cljs.core.Keyword(null,"quantity","quantity",-1929050694),quantity,new cljs.core.Keyword(null,"xp","xp",550374458),(xp * quantity_multiplier));
}
})();
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ingredients","ingredients",-1855671917),cljs.core.PersistentVector.EMPTY], null);
}
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("nw-calculator.subs","item-in-resolved-selected-item","nw-calculator.subs/item-in-resolved-selected-item",1936781932),(function (_db,p__29149){
var vec__29150 = p__29149;
var _ = cljs.core.nth.call(null,vec__29150,(0),null);
var vec__29153 = cljs.core.nth.call(null,vec__29150,(1),null);
var item_index = cljs.core.nth.call(null,vec__29153,(0),null);
var item_path = vec__29153;
return cljs.core.some.call(null,(function (p1__29148_SHARP_){
if(cljs.core.truth_(cljs.core.PersistentHashSet.createAsIfByAssoc([item_path]).call(null,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(p1__29148_SHARP_)))){
return p1__29148_SHARP_;
} else {
return null;
}
}),cljs.core.tree_seq.call(null,nw_calculator.utilities.options_or_ingredients,nw_calculator.utilities.options_or_ingredients,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nw-calculator.subs","resolved-selected-item","nw-calculator.subs/resolved-selected-item",-930622184),item_index], null)))));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("nw-calculator.subs","loading?","nw-calculator.subs/loading?",205456784),(function (p__29156){
var map__29157 = p__29156;
var map__29157__$1 = cljs.core.__destructure_map.call(null,map__29157);
var state = cljs.core.get.call(null,map__29157__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return cljs.core._EQ_.call(null,state,new cljs.core.Keyword(null,"loading","loading",-737050189));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("nw-calculator.subs","ready?","nw-calculator.subs/ready?",1516982108),(function (p__29158){
var map__29159 = p__29158;
var map__29159__$1 = cljs.core.__destructure_map.call(null,map__29159);
var state = cljs.core.get.call(null,map__29159__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return cljs.core._EQ_.call(null,state,new cljs.core.Keyword(null,"start","start",-355208981));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("nw-calculator.subs","searching?","nw-calculator.subs/searching?",-689378709),(function (p__29160){
var map__29161 = p__29160;
var map__29161__$1 = cljs.core.__destructure_map.call(null,map__29161);
var state = cljs.core.get.call(null,map__29161__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return cljs.core._EQ_.call(null,state,new cljs.core.Keyword(null,"searching","searching",1101390875));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("nw-calculator.subs","quantity-multiplier","nw-calculator.subs/quantity-multiplier",1311616625),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nw-calculator.subs","selected-items","nw-calculator.subs/selected-items",1273617897)], null),(function (selected_items,p__29162){
var vec__29163 = p__29162;
var _ = cljs.core.nth.call(null,vec__29163,(0),null);
var item_index = cljs.core.nth.call(null,vec__29163,(1),null);
return cljs.core.get_in.call(null,selected_items,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item_index,new cljs.core.Keyword(null,"quantity-multiplier","quantity-multiplier",-252611370)], null));
}));

//# sourceMappingURL=subs.js.map
