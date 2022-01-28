// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('nw_calculator.calculations');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
nw_calculator.calculations.resolve_ref = cljs.core.memoize((function (items_by_id,p__20492){
var map__20493 = p__20492;
var map__20493__$1 = cljs.core.__destructure_map(map__20493);
var ref = map__20493__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20493__$1,cljs.core.cst$kw$id);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(items_by_id.cljs$core$IFn$_invoke$arity$1 ? items_by_id.cljs$core$IFn$_invoke$arity$1(id) : items_by_id.call(null,id)),ref], 0));
}));
nw_calculator.calculations.compare_and_prioritize_nils = (function nw_calculator$calculations$compare_and_prioritize_nils(a,b){
var c = cljs.core.compare(a,b);
if((a == null)){
return (1);
} else {
if((b == null)){
return (-1);
} else {
return c;

}
}
});
/**
 * Sorts by ascending tier and xp
 */
nw_calculator.calculations.sort_by_ascending_tier_and_xp = (function nw_calculator$calculations$sort_by_ascending_tier_and_xp(var_args){
var G__20495 = arguments.length;
switch (G__20495) {
case 1:
return nw_calculator.calculations.sort_by_ascending_tier_and_xp.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return nw_calculator.calculations.sort_by_ascending_tier_and_xp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nw_calculator.calculations.sort_by_ascending_tier_and_xp.cljs$core$IFn$_invoke$arity$1 = (function (items){
return cljs.core.sort.cljs$core$IFn$_invoke$arity$2(nw_calculator.calculations.sort_by_ascending_tier_and_xp,items);
}));

(nw_calculator.calculations.sort_by_ascending_tier_and_xp.cljs$core$IFn$_invoke$arity$2 = (function (p__20496,p__20497){
var map__20498 = p__20496;
var map__20498__$1 = cljs.core.__destructure_map(map__20498);
var tier_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20498__$1,cljs.core.cst$kw$tier);
var xp_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20498__$1,cljs.core.cst$kw$xp);
var map__20499 = p__20497;
var map__20499__$1 = cljs.core.__destructure_map(map__20499);
var tier_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20499__$1,cljs.core.cst$kw$tier);
var xp_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20499__$1,cljs.core.cst$kw$xp);
var c = nw_calculator.calculations.compare_and_prioritize_nils(tier_a,tier_b);
if((c === (0))){
return nw_calculator.calculations.compare_and_prioritize_nils(xp_a,xp_b);
} else {
return c;
}
}));

(nw_calculator.calculations.sort_by_ascending_tier_and_xp.cljs$lang$maxFixedArity = 2);

/**
 * Given an item and a map of items by id,
 *   returns recursively resolved ingredient refs
 */
nw_calculator.calculations.resolve_refs = cljs.core.memoize((function() {
var G__20527 = null;
var G__20527__2 = (function (item,items_by_id){
var G__20506 = item;
var G__20507 = items_by_id;
var G__20508 = cljs.core.PersistentHashSet.EMPTY;
return (nw_calculator.calculations.resolve_refs.cljs$core$IFn$_invoke$arity$3 ? nw_calculator.calculations.resolve_refs.cljs$core$IFn$_invoke$arity$3(G__20506,G__20507,G__20508) : nw_calculator.calculations.resolve_refs.call(null,G__20506,G__20507,G__20508));
});
var G__20527__3 = (function (item,items_by_id,prev_path){
var G__20509 = item;
var G__20510 = items_by_id;
var G__20511 = prev_path;
var G__20512 = cljs.core.PersistentArrayMap.EMPTY;
return (nw_calculator.calculations.resolve_refs.cljs$core$IFn$_invoke$arity$4 ? nw_calculator.calculations.resolve_refs.cljs$core$IFn$_invoke$arity$4(G__20509,G__20510,G__20511,G__20512) : nw_calculator.calculations.resolve_refs.call(null,G__20509,G__20510,G__20511,G__20512));
});
var G__20527__4 = (function (p__20505,items_by_id,prev_walked_ids,selected_options_by_category_path){
var map__20513 = p__20505;
var map__20513__$1 = cljs.core.__destructure_map(map__20513);
var item = map__20513__$1;
var ingredients = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20513__$1,cljs.core.cst$kw$ingredients);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20513__$1,cljs.core.cst$kw$options);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20513__$1,cljs.core.cst$kw$id);
if(cljs.core.truth_((function (){var and__4210__auto__ = items_by_id;
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not((function (){var fexpr__20514 = cljs.core.set(prev_walked_ids);
return (fexpr__20514.cljs$core$IFn$_invoke$arity$1 ? fexpr__20514.cljs$core$IFn$_invoke$arity$1(id) : fexpr__20514.call(null,id));
})());
} else {
return and__4210__auto__;
}
})())){
var path = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prev_walked_ids,id);
var resolve_ref_STAR_ = (function (p1__20501_SHARP_){
return (nw_calculator.calculations.resolve_ref.cljs$core$IFn$_invoke$arity$2 ? nw_calculator.calculations.resolve_ref.cljs$core$IFn$_invoke$arity$2(items_by_id,p1__20501_SHARP_) : nw_calculator.calculations.resolve_ref.call(null,items_by_id,p1__20501_SHARP_));
});
var recur_STAR_ = (function() { 
var G__20528__delegate = function (refs,p__20515){
var vec__20516 = p__20515;
var meta = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20516,(0),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.map.cljs$core$IFn$_invoke$arity$1(resolve_ref_STAR_),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__20502_SHARP_){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$3(p1__20502_SHARP_,cljs.core.merge,meta);
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__20503_SHARP_){
return (nw_calculator.calculations.resolve_refs.cljs$core$IFn$_invoke$arity$4 ? nw_calculator.calculations.resolve_refs.cljs$core$IFn$_invoke$arity$4(p1__20503_SHARP_,items_by_id,path,selected_options_by_category_path) : nw_calculator.calculations.resolve_refs.call(null,p1__20503_SHARP_,items_by_id,path,selected_options_by_category_path));
})),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.some_QMARK_)], 0)),refs);
};
var G__20528 = function (refs,var_args){
var p__20515 = null;
if (arguments.length > 1) {
var G__20529__i = 0, G__20529__a = new Array(arguments.length -  1);
while (G__20529__i < G__20529__a.length) {G__20529__a[G__20529__i] = arguments[G__20529__i + 1]; ++G__20529__i;}
  p__20515 = new cljs.core.IndexedSeq(G__20529__a,0,null);
} 
return G__20528__delegate.call(this,refs,p__20515);};
G__20528.cljs$lang$maxFixedArity = 1;
G__20528.cljs$lang$applyTo = (function (arglist__20530){
var refs = cljs.core.first(arglist__20530);
var p__20515 = cljs.core.rest(arglist__20530);
return G__20528__delegate(refs,p__20515);
});
G__20528.cljs$core$IFn$_invoke$arity$variadic = G__20528__delegate;
return G__20528;
})()
;
var select_option = (function (p__20519){
var map__20520 = p__20519;
var map__20520__$1 = cljs.core.__destructure_map(map__20520);
var category = map__20520__$1;
var name_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20520__$1,cljs.core.cst$kw$name);
var vec__20521 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20520__$1,cljs.core.cst$kw$options);
var default_option = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20521,(0),null);
var category_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20520__$1,cljs.core.cst$kw$path);
var id__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20520__$1,cljs.core.cst$kw$id);
var category_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20520__$1,cljs.core.cst$kw$category_DASH_name);
var category_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20520__$1,cljs.core.cst$kw$category_DASH_id);
var selected_option = (function (){var or__4212__auto__ = (function (){var G__20524 = (selected_options_by_category_path.cljs$core$IFn$_invoke$arity$1 ? selected_options_by_category_path.cljs$core$IFn$_invoke$arity$1(category_path) : selected_options_by_category_path.call(null,category_path));
var G__20524__$1 = (((G__20524 == null))?null:(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__20524],null)));
var G__20524__$2 = (((G__20524__$1 == null))?null:recur_STAR_(G__20524__$1));
if((G__20524__$2 == null)){
return null;
} else {
return cljs.core.first(G__20524__$2);
}
})();
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return default_option;
}
})();
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__20525 = category;
var G__20525__$1 = ((cljs.core.not(category_name))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20525,cljs.core.cst$kw$category_DASH_name,name_STAR_):G__20525);
if(cljs.core.not(category_id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20525__$1,cljs.core.cst$kw$category_DASH_id,id__$1);
} else {
return G__20525__$1;
}
})(),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(selected_option,cljs.core.cst$kw$path,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$quantity], 0))], 0));
});
var G__20526 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(item,cljs.core.cst$kw$path,path);
var G__20526__$1 = (cljs.core.truth_(ingredients)?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__20526,cljs.core.cst$kw$ingredients,recur_STAR_):G__20526);
if(cljs.core.truth_(options)){
return select_option(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__20526__$1,cljs.core.cst$kw$options,recur_STAR_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$as_DASH_is_QMARK_,true], null)),cljs.core.cst$kw$options,(function (p1__20504_SHARP_){
return cljs.core.vec(nw_calculator.calculations.sort_by_ascending_tier_and_xp.cljs$core$IFn$_invoke$arity$1(p1__20504_SHARP_));
})));
} else {
return G__20526__$1;
}
} else {
return null;
}
});
G__20527 = function(p__20505,items_by_id,prev_walked_ids,selected_options_by_category_path){
switch(arguments.length){
case 2:
return G__20527__2.call(this,p__20505,items_by_id);
case 3:
return G__20527__3.call(this,p__20505,items_by_id,prev_walked_ids);
case 4:
return G__20527__4.call(this,p__20505,items_by_id,prev_walked_ids,selected_options_by_category_path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20527.cljs$core$IFn$_invoke$arity$2 = G__20527__2;
G__20527.cljs$core$IFn$_invoke$arity$3 = G__20527__3;
G__20527.cljs$core$IFn$_invoke$arity$4 = G__20527__4;
return G__20527;
})()
);
/**
 * Given an item,
 *   returns the given item if the item has ingredients
 */
nw_calculator.calculations.craftable_item = (function nw_calculator$calculations$craftable_item(p__20531){
var map__20532 = p__20531;
var map__20532__$1 = cljs.core.__destructure_map(map__20532);
var item = map__20532__$1;
var ingredients = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20532__$1,cljs.core.cst$kw$ingredients);
if(cljs.core.truth_(cljs.core.not_empty(ingredients))){
return item;
} else {
return null;
}
});
/**
 * Given a resolved item,
 *   returns the given item if it is a refining agent
 */
nw_calculator.calculations.refining_agent = (function nw_calculator$calculations$refining_agent(p__20533){
var map__20534 = p__20533;
var map__20534__$1 = cljs.core.__destructure_map(map__20534);
var item = map__20534__$1;
var cname = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20534__$1,cljs.core.cst$kw$category_DASH_name);
if(cljs.core.truth_((function (){var G__20535 = cname;
var G__20535__$1 = (((G__20535 == null))?null:clojure.string.lower_case(G__20535));
if((G__20535__$1 == null)){
return null;
} else {
return cljs.core.re_find(/flux|reagent|refining/,G__20535__$1);
}
})())){
return item;
} else {
return null;
}
});
/**
 * {current-item-tier {refining-agent-tier bonus}}
 */
nw_calculator.calculations.refining_agent_bonuses = new cljs.core.PersistentArrayMap(null, 3, [(3),new cljs.core.PersistentArrayMap(null, 3, [(3),(0),(4),0.5,(5),0.75], null),(4),new cljs.core.PersistentArrayMap(null, 3, [(3),-0.05,(4),(0),(5),0.25], null),(5),new cljs.core.PersistentArrayMap(null, 3, [(3),-0.1,(4),-0.05,(5),(0)], null)], null);
/**
 * Given an item and a map of items by id,
 *   returns the given item with its ingredients multiplied by its quantity
 * 
 *   Trade Skill Bonus + (Base Chance x 100) + (Refining Agent Tier Difference x 100) = Additional Item Chance
 */
nw_calculator.calculations.multiply_quantities = cljs.core.memoize((function() {
var G__20555 = null;
var G__20555__3 = (function (item,items_by_id,trade_skill_bonuses){
var G__20539 = item;
var G__20540 = items_by_id;
var G__20541 = trade_skill_bonuses;
var G__20542 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$multiplier,(1),cljs.core.cst$kw$additional_DASH_item_DASH_bonuses_QMARK_,true], null);
return (nw_calculator.calculations.multiply_quantities.cljs$core$IFn$_invoke$arity$4 ? nw_calculator.calculations.multiply_quantities.cljs$core$IFn$_invoke$arity$4(G__20539,G__20540,G__20541,G__20542) : nw_calculator.calculations.multiply_quantities.call(null,G__20539,G__20540,G__20541,G__20542));
});
var G__20555__4 = (function (p__20537,items_by_id,trade_skill_bonuses,p__20538){
var map__20543 = p__20537;
var map__20543__$1 = cljs.core.__destructure_map(map__20543);
var item = map__20543__$1;
var quantity = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20543__$1,cljs.core.cst$kw$quantity,(1));
var xp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20543__$1,cljs.core.cst$kw$xp);
var qty_bonus = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20543__$1,cljs.core.cst$kw$qty_DASH_bonus,(0));
var ingredients = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20543__$1,cljs.core.cst$kw$ingredients);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20543__$1,cljs.core.cst$kw$id);
var tier = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20543__$1,cljs.core.cst$kw$tier);
var trade_skill = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20543__$1,cljs.core.cst$kw$trade_DASH_skill);
var map__20544 = p__20538;
var map__20544__$1 = cljs.core.__destructure_map(map__20544);
var multiplier = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20544__$1,cljs.core.cst$kw$multiplier);
var parent_item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20544__$1,cljs.core.cst$kw$parent_DASH_item);
var additional_item_bonuses_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20544__$1,cljs.core.cst$kw$additional_DASH_item_DASH_bonuses_QMARK_);
var map__20545 = parent_item;
var map__20545__$1 = cljs.core.__destructure_map(map__20545);
var parent_tier = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20545__$1,cljs.core.cst$kw$tier,tier);
var parent_trade_skill = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20545__$1,cljs.core.cst$kw$trade_DASH_skill,trade_skill);
var parent_qty_bonus = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20545__$1,cljs.core.cst$kw$qty_DASH_bonus,qty_bonus);
var parent_ingredients = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20545__$1,cljs.core.cst$kw$ingredients,ingredients);
var map__20546 = (items_by_id.cljs$core$IFn$_invoke$arity$1 ? items_by_id.cljs$core$IFn$_invoke$arity$1(id) : items_by_id.call(null,id));
var map__20546__$1 = cljs.core.__destructure_map(map__20546);
var base_multiplier = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20546__$1,cljs.core.cst$kw$quantity,(1));
var refining_agent_bonus = (function (){var G__20547 = cljs.core.some(nw_calculator.calculations.refining_agent,parent_ingredients);
var G__20547__$1 = (((G__20547 == null))?null:cljs.core.cst$kw$tier.cljs$core$IFn$_invoke$arity$1(G__20547));
if((G__20547__$1 == null)){
return null;
} else {
var $ = G__20547__$1;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(nw_calculator.calculations.refining_agent_bonuses,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [parent_tier,$], null));
}
})();
var trade_skill_bonus = cljs.core.get.cljs$core$IFn$_invoke$arity$2(trade_skill_bonuses,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(parent_trade_skill));
var additional_item_chance = (cljs.core.truth_(additional_item_bonuses_QMARK_)?(function (){var x__4298__auto__ = (function (){var x__4295__auto__ = ((trade_skill_bonus + parent_qty_bonus) + refining_agent_bonus);
var y__4296__auto__ = (0);
return ((x__4295__auto__ > y__4296__auto__) ? x__4295__auto__ : y__4296__auto__);
})();
var y__4299__auto__ = (1);
return ((x__4298__auto__ < y__4299__auto__) ? x__4298__auto__ : y__4299__auto__);
})():(0));
var multiplier_STAR_quantity = (multiplier * quantity);
var discount = ((((multiplier * additional_item_chance) / (2)) | (0)) * quantity);
var multiplier_STAR_quantity_surplus = (multiplier_STAR_quantity - (cljs.core.truth_(parent_item)?discount:null));
var next_multiplier = ((function (){var G__20548 = (multiplier_STAR_quantity_surplus / base_multiplier);
return Math.ceil(G__20548);
})() | (0));
var recur_STAR_ = (function (p1__20536_SHARP_){
var G__20549 = p1__20536_SHARP_;
var G__20550 = items_by_id;
var G__20551 = trade_skill_bonuses;
var G__20552 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$multiplier,next_multiplier,cljs.core.cst$kw$additional_DASH_item_DASH_bonuses_QMARK_,additional_item_bonuses_QMARK_,cljs.core.cst$kw$parent_DASH_item,item], null);
return (nw_calculator.calculations.multiply_quantities.cljs$core$IFn$_invoke$arity$4 ? nw_calculator.calculations.multiply_quantities.cljs$core$IFn$_invoke$arity$4(G__20549,G__20550,G__20551,G__20552) : nw_calculator.calculations.multiply_quantities.call(null,G__20549,G__20550,G__20551,G__20552));
});
var recur_on_items = (function (items){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(recur_STAR_),items);
});
var G__20553 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic((function (){var G__20554 = item;
if(cljs.core.truth_(ingredients)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__20554,cljs.core.cst$kw$ingredients,recur_on_items);
} else {
return G__20554;
}
})(),cljs.core.cst$kw$quantity,multiplier_STAR_quantity_surplus,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$discount,discount], 0));
if(typeof xp === 'number'){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20553,cljs.core.cst$kw$xp,(next_multiplier * xp));
} else {
return G__20553;
}
});
G__20555 = function(p__20537,items_by_id,trade_skill_bonuses,p__20538){
switch(arguments.length){
case 3:
return G__20555__3.call(this,p__20537,items_by_id,trade_skill_bonuses);
case 4:
return G__20555__4.call(this,p__20537,items_by_id,trade_skill_bonuses,p__20538);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20555.cljs$core$IFn$_invoke$arity$3 = G__20555__3;
G__20555.cljs$core$IFn$_invoke$arity$4 = G__20555__4;
return G__20555;
})()
);
/**
 * Given an item,
 *   merges the item's ingredients of the same kind
 */
nw_calculator.calculations.merge_ingredients = (function nw_calculator$calculations$merge_ingredients(p__20558){
var map__20559 = p__20558;
var map__20559__$1 = cljs.core.__destructure_map(map__20559);
var item = map__20559__$1;
var item_ingredients = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20559__$1,cljs.core.cst$kw$ingredients);
var G__20560 = item;
if(cljs.core.truth_(cljs.core.not_empty(item_ingredients))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__20560,cljs.core.cst$kw$ingredients,(function (p1__20556_SHARP_){
return cljs.core.group_by(cljs.core.cst$kw$id,p1__20556_SHARP_);
})),cljs.core.cst$kw$ingredients,(function (p1__20557_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__20561){
var vec__20562 = p__20561;
var _id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20562,(0),null);
var ingredients = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20562,(1),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (item_map_1,p__20565){
var map__20566 = p__20565;
var map__20566__$1 = cljs.core.__destructure_map(map__20566);
var ing_2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20566__$1,cljs.core.cst$kw$ingredients);
var q_2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20566__$1,cljs.core.cst$kw$quantity);
var G__20567 = (function (){var G__20568 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(item_map_1,cljs.core.cst$kw$quantity,cljs.core._PLUS_,q_2);
if(cljs.core.truth_(ing_2)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__20568,cljs.core.cst$kw$ingredients,cljs.core.into,ing_2);
} else {
return G__20568;
}
})();
return (nw_calculator.calculations.merge_ingredients.cljs$core$IFn$_invoke$arity$1 ? nw_calculator.calculations.merge_ingredients.cljs$core$IFn$_invoke$arity$1(G__20567) : nw_calculator.calculations.merge_ingredients.call(null,G__20567));
}),ingredients);
}),p1__20557_SHARP_);
}));
} else {
return G__20560;
}
});
/**
 * Merges the given items into one item map
 * 
 *   ```clojure
 *  {:id          :items-summary
 *   :items       #{'...} ; Set of items
 *   :ingredients ['...] ; Merged ingredients of given items}
 *   ```
 */
nw_calculator.calculations.merge_items = (function nw_calculator$calculations$merge_items(items){
var merged_items = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (coll,p__20569){
var map__20570 = p__20569;
var map__20570__$1 = cljs.core.__destructure_map(map__20570);
var item = map__20570__$1;
var item_ingredients = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20570__$1,cljs.core.cst$kw$ingredients);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(coll,cljs.core.cst$kw$items,cljs.core.conj,cljs.core.with_meta(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(item,cljs.core.cst$kw$ingredients),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$as_DASH_is_QMARK_,true], null))),cljs.core.cst$kw$ingredients,cljs.core.into,item_ingredients);
}),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,cljs.core.cst$kw$items_DASH_summary,cljs.core.cst$kw$items,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$ingredients,cljs.core.PersistentVector.EMPTY], null),items);
return nw_calculator.calculations.merge_ingredients(merged_items);
});
nw_calculator.calculations.sort_items_by_name = cljs.core.memoize((function (items){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name,items);
}));
nw_calculator.calculations.filter_craftable_items = cljs.core.memoize((function (items){
return cljs.core.filterv(nw_calculator.calculations.craftable_item,items);
}));
