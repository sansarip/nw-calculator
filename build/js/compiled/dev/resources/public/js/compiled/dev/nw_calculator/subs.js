// Compiled by ClojureScript 1.10.879 {:optimizations :none}
goog.provide('nw_calculator.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('nw_calculator.utilities');
goog.require('nw_calculator.defaults');
goog.require('compound2.core');
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("nw-calculator.subs","search-results","nw-calculator.subs/search-results",1878819107),(function (p__93931,p__93932){
var map__93933 = p__93931;
var map__93933__$1 = cljs.core.__destructure_map.call(null,map__93933);
var search_results = cljs.core.get.call(null,map__93933__$1,new cljs.core.Keyword(null,"search-results","search-results",306464634));
var vec__93934 = p__93932;
var _ = cljs.core.nth.call(null,vec__93934,(0),null);
var item_index = cljs.core.nth.call(null,vec__93934,(1),null);
return cljs.core.get.call(null,search_results,item_index);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("nw-calculator.subs","selected-items","nw-calculator.subs/selected-items",1273617897),new cljs.core.Keyword(null,"selected-items","selected-items",-558712488));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("nw-calculator.subs","num-selected-items","nw-calculator.subs/num-selected-items",787193036),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nw-calculator.subs","selected-items","nw-calculator.subs/selected-items",1273617897)], null),(function (selected_items){
return cljs.core.count.call(null,selected_items);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("nw-calculator.subs","items-by-id","nw-calculator.subs/items-by-id",-1002175007),(function (db){
return new cljs.core.Keyword(null,"by-id","by-id",-2129473981).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(db));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("nw-calculator.subs","selected-option","nw-calculator.subs/selected-option",484567812),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nw-calculator.subs","selected-items","nw-calculator.subs/selected-items",1273617897)], null),(function (selected_items,p__93937){
var vec__93938 = p__93937;
var _ = cljs.core.nth.call(null,vec__93938,(0),null);
var vec__93941 = cljs.core.nth.call(null,vec__93938,(1),null);
var item_index = cljs.core.nth.call(null,vec__93941,(0),null);
var option_path = vec__93941;
return cljs.core.get_in.call(null,selected_items,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [item_index,new cljs.core.Keyword(null,"selected-options","selected-options",1306833224),option_path], null));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("nw-calculator.subs","resolved-selected-item","nw-calculator.subs/resolved-selected-item",-930622184),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nw-calculator.subs","selected-items","nw-calculator.subs/selected-items",1273617897)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nw-calculator.subs","items-by-id","nw-calculator.subs/items-by-id",-1002175007)], null),(function (p__93944,p__93945){
var vec__93946 = p__93944;
var selected_items = cljs.core.nth.call(null,vec__93946,(0),null);
var items_by_id = cljs.core.nth.call(null,vec__93946,(1),null);
var vec__93949 = p__93945;
var _ = cljs.core.nth.call(null,vec__93949,(0),null);
var item_index = cljs.core.nth.call(null,vec__93949,(1),null);
var map__93952 = cljs.core.get.call(null,selected_items,item_index);
var map__93952__$1 = cljs.core.__destructure_map.call(null,map__93952);
var map__93953 = cljs.core.get.call(null,map__93952__$1,new cljs.core.Keyword(null,"item","item",249373802));
var map__93953__$1 = cljs.core.__destructure_map.call(null,map__93953);
var selected_item_id = cljs.core.get.call(null,map__93953__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var quantity_multiplier = cljs.core.get.call(null,map__93952__$1,new cljs.core.Keyword(null,"quantity-multiplier","quantity-multiplier",-252611370));
var selected_options = cljs.core.get.call(null,map__93952__$1,new cljs.core.Keyword(null,"selected-options","selected-options",1306833224),cljs.core.PersistentArrayMap.EMPTY);
var map__93954 = cljs.core.get.call(null,items_by_id,selected_item_id);
var map__93954__$1 = cljs.core.__destructure_map.call(null,map__93954);
var item = map__93954__$1;
var quantity = cljs.core.get.call(null,map__93954__$1,new cljs.core.Keyword(null,"quantity","quantity",-1929050694));
var xp = cljs.core.get.call(null,map__93954__$1,new cljs.core.Keyword(null,"xp","xp",550374458));
var or__4212__auto__ = (function (){var G__93955 = item;
var G__93955__$1 = (((G__93955 == null))?null:cljs.core.not_empty.call(null,G__93955));
var G__93955__$2 = (((G__93955__$1 == null))?null:nw_calculator.utilities.resolve_refs.call(null,G__93955__$1,items_by_id,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item_index], null),selected_options));
var G__93955__$3 = (((G__93955__$2 == null))?null:nw_calculator.utilities.multiply_quantities.call(null,G__93955__$2,items_by_id,quantity_multiplier));
if((G__93955__$3 == null)){
return null;
} else {
return cljs.core.assoc.call(null,G__93955__$3,new cljs.core.Keyword(null,"quantity","quantity",-1929050694),quantity,new cljs.core.Keyword(null,"xp","xp",550374458),(xp * quantity_multiplier));
}
})();
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ingredients","ingredients",-1855671917),cljs.core.PersistentVector.EMPTY], null);
}
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("nw-calculator.subs","item-in-resolved-selected-item","nw-calculator.subs/item-in-resolved-selected-item",1936781932),(function (_db,p__93957){
var vec__93958 = p__93957;
var _ = cljs.core.nth.call(null,vec__93958,(0),null);
var vec__93961 = cljs.core.nth.call(null,vec__93958,(1),null);
var item_index = cljs.core.nth.call(null,vec__93961,(0),null);
var item_path = vec__93961;
return cljs.core.some.call(null,(function (p1__93956_SHARP_){
if(cljs.core.truth_(cljs.core.PersistentHashSet.createAsIfByAssoc([item_path]).call(null,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(p1__93956_SHARP_)))){
return p1__93956_SHARP_;
} else {
return null;
}
}),cljs.core.tree_seq.call(null,nw_calculator.utilities.options_or_ingredients,nw_calculator.utilities.options_or_ingredients,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nw-calculator.subs","resolved-selected-item","nw-calculator.subs/resolved-selected-item",-930622184),item_index], null)))));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("nw-calculator.subs","loading?","nw-calculator.subs/loading?",205456784),(function (p__93964){
var map__93965 = p__93964;
var map__93965__$1 = cljs.core.__destructure_map.call(null,map__93965);
var state = cljs.core.get.call(null,map__93965__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return cljs.core._EQ_.call(null,state,new cljs.core.Keyword(null,"loading","loading",-737050189));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("nw-calculator.subs","ready?","nw-calculator.subs/ready?",1516982108),(function (p__93966){
var map__93967 = p__93966;
var map__93967__$1 = cljs.core.__destructure_map.call(null,map__93967);
var state = cljs.core.get.call(null,map__93967__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return cljs.core._EQ_.call(null,state,new cljs.core.Keyword(null,"start","start",-355208981));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("nw-calculator.subs","searching?","nw-calculator.subs/searching?",-689378709),(function (p__93968){
var map__93969 = p__93968;
var map__93969__$1 = cljs.core.__destructure_map.call(null,map__93969);
var state = cljs.core.get.call(null,map__93969__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return cljs.core._EQ_.call(null,state,new cljs.core.Keyword(null,"searching","searching",1101390875));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("nw-calculator.subs","quantity-multiplier","nw-calculator.subs/quantity-multiplier",1311616625),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nw-calculator.subs","selected-items","nw-calculator.subs/selected-items",1273617897)], null),(function (selected_items,p__93970){
var vec__93971 = p__93970;
var _ = cljs.core.nth.call(null,vec__93971,(0),null);
var item_index = cljs.core.nth.call(null,vec__93971,(1),null);
return cljs.core.get_in.call(null,selected_items,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item_index,new cljs.core.Keyword(null,"quantity-multiplier","quantity-multiplier",-252611370)], null));
}));

//# sourceMappingURL=subs.js.map
