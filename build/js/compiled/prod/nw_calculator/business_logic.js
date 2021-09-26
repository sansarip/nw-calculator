// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('nw_calculator.business_logic');
goog.require('cljs.core');
goog.require('cljs.core.constants');
nw_calculator.business_logic.category_QMARK_ = (function nw_calculator$business_logic$category_QMARK_(p__15298){
var map__15299 = p__15298;
var map__15299__$1 = cljs.core.__destructure_map(map__15299);
var item_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15299__$1,cljs.core.cst$kw$type);
return cljs.core.boolean$((function (){var fexpr__15300 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["category",null], null), null);
return (fexpr__15300.cljs$core$IFn$_invoke$arity$1 ? fexpr__15300.cljs$core$IFn$_invoke$arity$1(item_type) : fexpr__15300.call(null,item_type));
})());
});
nw_calculator.business_logic.resolve_ref = cljs.core.memoize((function (items_by_id,p__15301){
var map__15302 = p__15301;
var map__15302__$1 = cljs.core.__destructure_map(map__15302);
var ref = map__15302__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15302__$1,cljs.core.cst$kw$id);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(items_by_id.cljs$core$IFn$_invoke$arity$1 ? items_by_id.cljs$core$IFn$_invoke$arity$1(id) : items_by_id.call(null,id)),ref], 0));
}));
nw_calculator.business_logic.compare_and_prioritize_nils = (function nw_calculator$business_logic$compare_and_prioritize_nils(a,b){
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
nw_calculator.business_logic.sort_by_ascending_tier_and_xp = (function nw_calculator$business_logic$sort_by_ascending_tier_and_xp(var_args){
var G__15304 = arguments.length;
switch (G__15304) {
case 1:
return nw_calculator.business_logic.sort_by_ascending_tier_and_xp.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return nw_calculator.business_logic.sort_by_ascending_tier_and_xp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nw_calculator.business_logic.sort_by_ascending_tier_and_xp.cljs$core$IFn$_invoke$arity$1 = (function (items){
return cljs.core.sort.cljs$core$IFn$_invoke$arity$2(nw_calculator.business_logic.sort_by_ascending_tier_and_xp,items);
}));

(nw_calculator.business_logic.sort_by_ascending_tier_and_xp.cljs$core$IFn$_invoke$arity$2 = (function (p__15305,p__15306){
var map__15307 = p__15305;
var map__15307__$1 = cljs.core.__destructure_map(map__15307);
var tier_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15307__$1,cljs.core.cst$kw$tier);
var xp_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15307__$1,cljs.core.cst$kw$xp);
var map__15308 = p__15306;
var map__15308__$1 = cljs.core.__destructure_map(map__15308);
var tier_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15308__$1,cljs.core.cst$kw$tier);
var xp_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15308__$1,cljs.core.cst$kw$xp);
var c = nw_calculator.business_logic.compare_and_prioritize_nils(tier_a,tier_b);
if((c === (0))){
return nw_calculator.business_logic.compare_and_prioritize_nils(xp_a,xp_b);
} else {
return c;
}
}));

(nw_calculator.business_logic.sort_by_ascending_tier_and_xp.cljs$lang$maxFixedArity = 2);

nw_calculator.business_logic.resolve_refs = cljs.core.memoize((function() {
var G__15336 = null;
var G__15336__2 = (function (item,items_by_id){
var G__15315 = item;
var G__15316 = items_by_id;
var G__15317 = cljs.core.PersistentHashSet.EMPTY;
return (nw_calculator.business_logic.resolve_refs.cljs$core$IFn$_invoke$arity$3 ? nw_calculator.business_logic.resolve_refs.cljs$core$IFn$_invoke$arity$3(G__15315,G__15316,G__15317) : nw_calculator.business_logic.resolve_refs.call(null,G__15315,G__15316,G__15317));
});
var G__15336__3 = (function (item,items_by_id,prev_path){
var G__15318 = item;
var G__15319 = items_by_id;
var G__15320 = prev_path;
var G__15321 = cljs.core.PersistentArrayMap.EMPTY;
return (nw_calculator.business_logic.resolve_refs.cljs$core$IFn$_invoke$arity$4 ? nw_calculator.business_logic.resolve_refs.cljs$core$IFn$_invoke$arity$4(G__15318,G__15319,G__15320,G__15321) : nw_calculator.business_logic.resolve_refs.call(null,G__15318,G__15319,G__15320,G__15321));
});
var G__15336__4 = (function (p__15314,items_by_id,prev_walked_ids,selected_options_by_category_path){
var map__15322 = p__15314;
var map__15322__$1 = cljs.core.__destructure_map(map__15322);
var item = map__15322__$1;
var ingredients = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15322__$1,cljs.core.cst$kw$ingredients);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15322__$1,cljs.core.cst$kw$options);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15322__$1,cljs.core.cst$kw$id);
if(cljs.core.truth_((function (){var and__4210__auto__ = items_by_id;
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not((function (){var fexpr__15323 = cljs.core.set(prev_walked_ids);
return (fexpr__15323.cljs$core$IFn$_invoke$arity$1 ? fexpr__15323.cljs$core$IFn$_invoke$arity$1(id) : fexpr__15323.call(null,id));
})());
} else {
return and__4210__auto__;
}
})())){
var path = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prev_walked_ids,id);
var resolve_ref_STAR_ = (function (p1__15310_SHARP_){
return (nw_calculator.business_logic.resolve_ref.cljs$core$IFn$_invoke$arity$2 ? nw_calculator.business_logic.resolve_ref.cljs$core$IFn$_invoke$arity$2(items_by_id,p1__15310_SHARP_) : nw_calculator.business_logic.resolve_ref.call(null,items_by_id,p1__15310_SHARP_));
});
var recur_STAR_ = (function() { 
var G__15337__delegate = function (refs,p__15324){
var vec__15325 = p__15324;
var meta = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15325,(0),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.map.cljs$core$IFn$_invoke$arity$1(resolve_ref_STAR_),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__15311_SHARP_){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$3(p1__15311_SHARP_,cljs.core.merge,meta);
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__15312_SHARP_){
return (nw_calculator.business_logic.resolve_refs.cljs$core$IFn$_invoke$arity$4 ? nw_calculator.business_logic.resolve_refs.cljs$core$IFn$_invoke$arity$4(p1__15312_SHARP_,items_by_id,path,selected_options_by_category_path) : nw_calculator.business_logic.resolve_refs.call(null,p1__15312_SHARP_,items_by_id,path,selected_options_by_category_path));
})),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.some_QMARK_)], 0)),refs);
};
var G__15337 = function (refs,var_args){
var p__15324 = null;
if (arguments.length > 1) {
var G__15338__i = 0, G__15338__a = new Array(arguments.length -  1);
while (G__15338__i < G__15338__a.length) {G__15338__a[G__15338__i] = arguments[G__15338__i + 1]; ++G__15338__i;}
  p__15324 = new cljs.core.IndexedSeq(G__15338__a,0,null);
} 
return G__15337__delegate.call(this,refs,p__15324);};
G__15337.cljs$lang$maxFixedArity = 1;
G__15337.cljs$lang$applyTo = (function (arglist__15339){
var refs = cljs.core.first(arglist__15339);
var p__15324 = cljs.core.rest(arglist__15339);
return G__15337__delegate(refs,p__15324);
});
G__15337.cljs$core$IFn$_invoke$arity$variadic = G__15337__delegate;
return G__15337;
})()
;
var select_option = (function (p__15328){
var map__15329 = p__15328;
var map__15329__$1 = cljs.core.__destructure_map(map__15329);
var category = map__15329__$1;
var name_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15329__$1,cljs.core.cst$kw$name);
var vec__15330 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15329__$1,cljs.core.cst$kw$options);
var default_option = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15330,(0),null);
var category_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15329__$1,cljs.core.cst$kw$path);
var id__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15329__$1,cljs.core.cst$kw$id);
var category_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15329__$1,cljs.core.cst$kw$category_DASH_name);
var category_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15329__$1,cljs.core.cst$kw$category_DASH_id);
var selected_option = (function (){var or__4212__auto__ = (function (){var G__15333 = (selected_options_by_category_path.cljs$core$IFn$_invoke$arity$1 ? selected_options_by_category_path.cljs$core$IFn$_invoke$arity$1(category_path) : selected_options_by_category_path.call(null,category_path));
var G__15333__$1 = (((G__15333 == null))?null:(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__15333],null)));
var G__15333__$2 = (((G__15333__$1 == null))?null:recur_STAR_(G__15333__$1));
if((G__15333__$2 == null)){
return null;
} else {
return cljs.core.first(G__15333__$2);
}
})();
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return default_option;
}
})();
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__15334 = category;
var G__15334__$1 = ((cljs.core.not(category_name))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15334,cljs.core.cst$kw$category_DASH_name,name_STAR_):G__15334);
if(cljs.core.not(category_id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15334__$1,cljs.core.cst$kw$category_DASH_id,id__$1);
} else {
return G__15334__$1;
}
})(),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(selected_option,cljs.core.cst$kw$path,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$quantity], 0))], 0));
});
var G__15335 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(item,cljs.core.cst$kw$path,path);
var G__15335__$1 = (cljs.core.truth_(ingredients)?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__15335,cljs.core.cst$kw$ingredients,recur_STAR_):G__15335);
if(cljs.core.truth_(options)){
return select_option(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__15335__$1,cljs.core.cst$kw$options,recur_STAR_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$as_DASH_is_QMARK_,true], null)),cljs.core.cst$kw$options,(function (p1__15313_SHARP_){
return cljs.core.vec(nw_calculator.business_logic.sort_by_ascending_tier_and_xp.cljs$core$IFn$_invoke$arity$1(p1__15313_SHARP_));
})));
} else {
return G__15335__$1;
}
} else {
return null;
}
});
G__15336 = function(p__15314,items_by_id,prev_walked_ids,selected_options_by_category_path){
switch(arguments.length){
case 2:
return G__15336__2.call(this,p__15314,items_by_id);
case 3:
return G__15336__3.call(this,p__15314,items_by_id,prev_walked_ids);
case 4:
return G__15336__4.call(this,p__15314,items_by_id,prev_walked_ids,selected_options_by_category_path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15336.cljs$core$IFn$_invoke$arity$2 = G__15336__2;
G__15336.cljs$core$IFn$_invoke$arity$3 = G__15336__3;
G__15336.cljs$core$IFn$_invoke$arity$4 = G__15336__4;
return G__15336;
})()
);
nw_calculator.business_logic.craftable_item = (function nw_calculator$business_logic$craftable_item(p__15340){
var map__15341 = p__15340;
var map__15341__$1 = cljs.core.__destructure_map(map__15341);
var item = map__15341__$1;
var ingredients = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15341__$1,cljs.core.cst$kw$ingredients);
if(cljs.core.truth_(cljs.core.not_empty(ingredients))){
return item;
} else {
return null;
}
});
nw_calculator.business_logic.multiply_quantities = cljs.core.memoize((function() {
var G__15349 = null;
var G__15349__2 = (function (item,items_by_id){
return (nw_calculator.business_logic.multiply_quantities.cljs$core$IFn$_invoke$arity$3 ? nw_calculator.business_logic.multiply_quantities.cljs$core$IFn$_invoke$arity$3(item,items_by_id,(1)) : nw_calculator.business_logic.multiply_quantities.call(null,item,items_by_id,(1)));
});
var G__15349__3 = (function (p__15343,items_by_id,prev_multiplier){
var map__15344 = p__15343;
var map__15344__$1 = cljs.core.__destructure_map(map__15344);
var item = map__15344__$1;
var quantity = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__15344__$1,cljs.core.cst$kw$quantity,(1));
var xp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15344__$1,cljs.core.cst$kw$xp);
var ingredients = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15344__$1,cljs.core.cst$kw$ingredients);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15344__$1,cljs.core.cst$kw$id);
var map__15345 = (items_by_id.cljs$core$IFn$_invoke$arity$1 ? items_by_id.cljs$core$IFn$_invoke$arity$1(id) : items_by_id.call(null,id));
var map__15345__$1 = cljs.core.__destructure_map(map__15345);
var base_multiplier = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__15345__$1,cljs.core.cst$kw$quantity,(1));
var product = (quantity * prev_multiplier);
var multiplier = ((function (){var G__15346 = (product / base_multiplier);
return Math.ceil(G__15346);
})() | (0));
var recur_STAR_ = (function (p1__15342_SHARP_){
return (nw_calculator.business_logic.multiply_quantities.cljs$core$IFn$_invoke$arity$3 ? nw_calculator.business_logic.multiply_quantities.cljs$core$IFn$_invoke$arity$3(p1__15342_SHARP_,items_by_id,multiplier) : nw_calculator.business_logic.multiply_quantities.call(null,p1__15342_SHARP_,items_by_id,multiplier));
});
var recur_on_items = (function (items){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(recur_STAR_),items);
});
var G__15347 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__15348 = item;
if(cljs.core.truth_(ingredients)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__15348,cljs.core.cst$kw$ingredients,recur_on_items);
} else {
return G__15348;
}
})(),cljs.core.cst$kw$quantity,product);
if(typeof xp === 'number'){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15347,cljs.core.cst$kw$xp,(multiplier * xp));
} else {
return G__15347;
}
});
G__15349 = function(p__15343,items_by_id,prev_multiplier){
switch(arguments.length){
case 2:
return G__15349__2.call(this,p__15343,items_by_id);
case 3:
return G__15349__3.call(this,p__15343,items_by_id,prev_multiplier);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15349.cljs$core$IFn$_invoke$arity$2 = G__15349__2;
G__15349.cljs$core$IFn$_invoke$arity$3 = G__15349__3;
return G__15349;
})()
);
nw_calculator.business_logic.merge_ingredients = (function nw_calculator$business_logic$merge_ingredients(p__15352){
var map__15353 = p__15352;
var map__15353__$1 = cljs.core.__destructure_map(map__15353);
var item = map__15353__$1;
var item_ingredients = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15353__$1,cljs.core.cst$kw$ingredients);
var G__15354 = item;
if(cljs.core.truth_(cljs.core.not_empty(item_ingredients))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__15354,cljs.core.cst$kw$ingredients,(function (p1__15350_SHARP_){
return cljs.core.group_by(cljs.core.cst$kw$id,p1__15350_SHARP_);
})),cljs.core.cst$kw$ingredients,(function (p1__15351_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__15355){
var vec__15356 = p__15355;
var _id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15356,(0),null);
var ingredients = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15356,(1),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (item_map_1,p__15359){
var map__15360 = p__15359;
var map__15360__$1 = cljs.core.__destructure_map(map__15360);
var ing_2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15360__$1,cljs.core.cst$kw$ingredients);
var q_2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15360__$1,cljs.core.cst$kw$quantity);
var G__15361 = (function (){var G__15362 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(item_map_1,cljs.core.cst$kw$quantity,cljs.core._PLUS_,q_2);
if(cljs.core.truth_(ing_2)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__15362,cljs.core.cst$kw$ingredients,cljs.core.into,ing_2);
} else {
return G__15362;
}
})();
return (nw_calculator.business_logic.merge_ingredients.cljs$core$IFn$_invoke$arity$1 ? nw_calculator.business_logic.merge_ingredients.cljs$core$IFn$_invoke$arity$1(G__15361) : nw_calculator.business_logic.merge_ingredients.call(null,G__15361));
}),ingredients);
}),p1__15351_SHARP_);
}));
} else {
return G__15354;
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
nw_calculator.business_logic.merge_items = (function nw_calculator$business_logic$merge_items(items){
var merged_items = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (coll,p__15363){
var map__15364 = p__15363;
var map__15364__$1 = cljs.core.__destructure_map(map__15364);
var item = map__15364__$1;
var item_ingredients = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15364__$1,cljs.core.cst$kw$ingredients);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(coll,cljs.core.cst$kw$items,cljs.core.conj,cljs.core.with_meta(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(item,cljs.core.cst$kw$ingredients),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$as_DASH_is_QMARK_,true], null))),cljs.core.cst$kw$ingredients,cljs.core.into,item_ingredients);
}),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,cljs.core.cst$kw$items_DASH_summary,cljs.core.cst$kw$items,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$ingredients,cljs.core.PersistentVector.EMPTY], null),items);
return nw_calculator.business_logic.merge_ingredients(merged_items);
});
