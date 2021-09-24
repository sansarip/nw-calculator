// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('nw_calculator.business_logic');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('compound2.core');
goog.require('nw_calculator.defaults');
nw_calculator.business_logic.category_QMARK_ = (function nw_calculator$business_logic$category_QMARK_(p__14608){
var map__14609 = p__14608;
var map__14609__$1 = cljs.core.__destructure_map(map__14609);
var item_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14609__$1,cljs.core.cst$kw$type);
return cljs.core.boolean$((function (){var fexpr__14610 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["category",null], null), null);
return (fexpr__14610.cljs$core$IFn$_invoke$arity$1 ? fexpr__14610.cljs$core$IFn$_invoke$arity$1(item_type) : fexpr__14610.call(null,item_type));
})());
});
nw_calculator.business_logic.options_or_ingredients = (function nw_calculator$business_logic$options_or_ingredients(p__14611){
var map__14612 = p__14611;
var map__14612__$1 = cljs.core.__destructure_map(map__14612);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14612__$1,cljs.core.cst$kw$options);
var ingredients = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14612__$1,cljs.core.cst$kw$ingredients);
var or__4212__auto__ = options;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return ingredients;
}
});
nw_calculator.business_logic.resolve_refs = cljs.core.memoize((function() {
var G__14639 = null;
var G__14639__2 = (function (item,items_by_id){
var G__14617 = item;
var G__14618 = items_by_id;
var G__14619 = cljs.core.PersistentHashSet.EMPTY;
return (nw_calculator.business_logic.resolve_refs.cljs$core$IFn$_invoke$arity$3 ? nw_calculator.business_logic.resolve_refs.cljs$core$IFn$_invoke$arity$3(G__14617,G__14618,G__14619) : nw_calculator.business_logic.resolve_refs.call(null,G__14617,G__14618,G__14619));
});
var G__14639__3 = (function (item,items_by_id,prev_path){
var G__14620 = item;
var G__14621 = items_by_id;
var G__14622 = prev_path;
var G__14623 = cljs.core.PersistentArrayMap.EMPTY;
return (nw_calculator.business_logic.resolve_refs.cljs$core$IFn$_invoke$arity$4 ? nw_calculator.business_logic.resolve_refs.cljs$core$IFn$_invoke$arity$4(G__14620,G__14621,G__14622,G__14623) : nw_calculator.business_logic.resolve_refs.call(null,G__14620,G__14621,G__14622,G__14623));
});
var G__14639__4 = (function (p__14616,items_by_id,prev_walked_ids,selected_options_by_category_path){
var map__14624 = p__14616;
var map__14624__$1 = cljs.core.__destructure_map(map__14624);
var item = map__14624__$1;
var ingredients = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14624__$1,cljs.core.cst$kw$ingredients);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14624__$1,cljs.core.cst$kw$options);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14624__$1,cljs.core.cst$kw$id);
if(cljs.core.truth_((function (){var and__4210__auto__ = items_by_id;
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not((function (){var fexpr__14625 = cljs.core.set(prev_walked_ids);
return (fexpr__14625.cljs$core$IFn$_invoke$arity$1 ? fexpr__14625.cljs$core$IFn$_invoke$arity$1(id) : fexpr__14625.call(null,id));
})());
} else {
return and__4210__auto__;
}
})())){
var path = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prev_walked_ids,id);
var resolve_ref = (function (p__14626){
var map__14627 = p__14626;
var map__14627__$1 = cljs.core.__destructure_map(map__14627);
var ref = map__14627__$1;
var ref_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14627__$1,cljs.core.cst$kw$id);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(items_by_id.cljs$core$IFn$_invoke$arity$1 ? items_by_id.cljs$core$IFn$_invoke$arity$1(ref_id) : items_by_id.call(null,ref_id)),ref], 0));
});
var recur_STAR_ = (function() { 
var G__14640__delegate = function (refs,p__14628){
var vec__14629 = p__14628;
var meta = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14629,(0),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.map.cljs$core$IFn$_invoke$arity$1(resolve_ref),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__14613_SHARP_){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$3(p1__14613_SHARP_,cljs.core.merge,meta);
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__14614_SHARP_){
return (nw_calculator.business_logic.resolve_refs.cljs$core$IFn$_invoke$arity$4 ? nw_calculator.business_logic.resolve_refs.cljs$core$IFn$_invoke$arity$4(p1__14614_SHARP_,items_by_id,path,selected_options_by_category_path) : nw_calculator.business_logic.resolve_refs.call(null,p1__14614_SHARP_,items_by_id,path,selected_options_by_category_path));
})),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.some_QMARK_)], 0)),refs);
};
var G__14640 = function (refs,var_args){
var p__14628 = null;
if (arguments.length > 1) {
var G__14641__i = 0, G__14641__a = new Array(arguments.length -  1);
while (G__14641__i < G__14641__a.length) {G__14641__a[G__14641__i] = arguments[G__14641__i + 1]; ++G__14641__i;}
  p__14628 = new cljs.core.IndexedSeq(G__14641__a,0,null);
} 
return G__14640__delegate.call(this,refs,p__14628);};
G__14640.cljs$lang$maxFixedArity = 1;
G__14640.cljs$lang$applyTo = (function (arglist__14642){
var refs = cljs.core.first(arglist__14642);
var p__14628 = cljs.core.rest(arglist__14642);
return G__14640__delegate(refs,p__14628);
});
G__14640.cljs$core$IFn$_invoke$arity$variadic = G__14640__delegate;
return G__14640;
})()
;
var select_option = (function (p__14632){
var map__14633 = p__14632;
var map__14633__$1 = cljs.core.__destructure_map(map__14633);
var category = map__14633__$1;
var name_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14633__$1,cljs.core.cst$kw$name);
var vec__14634 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14633__$1,cljs.core.cst$kw$options);
var default_option = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14634,(0),null);
var category_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14633__$1,cljs.core.cst$kw$path);
var id__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14633__$1,cljs.core.cst$kw$id);
var category_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14633__$1,cljs.core.cst$kw$category_DASH_name);
var category_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14633__$1,cljs.core.cst$kw$category_DASH_id);
var selected_option = (selected_options_by_category_path.cljs$core$IFn$_invoke$arity$2 ? selected_options_by_category_path.cljs$core$IFn$_invoke$arity$2(category_path,default_option) : selected_options_by_category_path.call(null,category_path,default_option));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__14637 = category;
var G__14637__$1 = ((cljs.core.not(category_name))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14637,cljs.core.cst$kw$category_DASH_name,name_STAR_):G__14637);
if(cljs.core.not(category_id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14637__$1,cljs.core.cst$kw$category_DASH_id,id__$1);
} else {
return G__14637__$1;
}
})(),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(selected_option,cljs.core.cst$kw$path,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$quantity], 0))], 0));
});
var recur_options = (function (options__$1){
return cljs.core.vec(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__14615_SHARP_){
var or__4212__auto__ = p1__14615_SHARP_;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (1000000);
}
}),cljs.core.cst$kw$xp),recur_STAR_.cljs$core$IFn$_invoke$arity$variadic(options__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$as_DASH_is_QMARK_,true], null)], 0))));
});
var G__14638 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(item,cljs.core.cst$kw$path,path);
var G__14638__$1 = (cljs.core.truth_(ingredients)?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__14638,cljs.core.cst$kw$ingredients,recur_STAR_):G__14638);
if(cljs.core.truth_(options)){
return select_option(cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__14638__$1,cljs.core.cst$kw$options,recur_options));
} else {
return G__14638__$1;
}
} else {
return null;
}
});
G__14639 = function(p__14616,items_by_id,prev_walked_ids,selected_options_by_category_path){
switch(arguments.length){
case 2:
return G__14639__2.call(this,p__14616,items_by_id);
case 3:
return G__14639__3.call(this,p__14616,items_by_id,prev_walked_ids);
case 4:
return G__14639__4.call(this,p__14616,items_by_id,prev_walked_ids,selected_options_by_category_path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14639.cljs$core$IFn$_invoke$arity$2 = G__14639__2;
G__14639.cljs$core$IFn$_invoke$arity$3 = G__14639__3;
G__14639.cljs$core$IFn$_invoke$arity$4 = G__14639__4;
return G__14639;
})()
);
nw_calculator.business_logic.craftable_item = (function nw_calculator$business_logic$craftable_item(p__14643){
var map__14644 = p__14643;
var map__14644__$1 = cljs.core.__destructure_map(map__14644);
var item = map__14644__$1;
var ingredients = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14644__$1,cljs.core.cst$kw$ingredients);
if(cljs.core.truth_(cljs.core.not_empty(ingredients))){
return item;
} else {
return null;
}
});
nw_calculator.business_logic.multiply_quantities = cljs.core.memoize((function() {
var G__14652 = null;
var G__14652__2 = (function (item,items_by_id){
return (nw_calculator.business_logic.multiply_quantities.cljs$core$IFn$_invoke$arity$3 ? nw_calculator.business_logic.multiply_quantities.cljs$core$IFn$_invoke$arity$3(item,items_by_id,(1)) : nw_calculator.business_logic.multiply_quantities.call(null,item,items_by_id,(1)));
});
var G__14652__3 = (function (p__14646,items_by_id,prev_multiplier){
var map__14647 = p__14646;
var map__14647__$1 = cljs.core.__destructure_map(map__14647);
var item = map__14647__$1;
var quantity = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__14647__$1,cljs.core.cst$kw$quantity,(1));
var xp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14647__$1,cljs.core.cst$kw$xp);
var ingredients = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14647__$1,cljs.core.cst$kw$ingredients);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14647__$1,cljs.core.cst$kw$id);
var map__14648 = (items_by_id.cljs$core$IFn$_invoke$arity$1 ? items_by_id.cljs$core$IFn$_invoke$arity$1(id) : items_by_id.call(null,id));
var map__14648__$1 = cljs.core.__destructure_map(map__14648);
var base_multiplier = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__14648__$1,cljs.core.cst$kw$quantity,(1));
var product = (quantity * prev_multiplier);
var multiplier = ((function (){var G__14649 = (product / base_multiplier);
return Math.ceil(G__14649);
})() | (0));
var recur_STAR_ = (function (p1__14645_SHARP_){
return (nw_calculator.business_logic.multiply_quantities.cljs$core$IFn$_invoke$arity$3 ? nw_calculator.business_logic.multiply_quantities.cljs$core$IFn$_invoke$arity$3(p1__14645_SHARP_,items_by_id,multiplier) : nw_calculator.business_logic.multiply_quantities.call(null,p1__14645_SHARP_,items_by_id,multiplier));
});
var recur_on_items = (function (items){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(recur_STAR_),items);
});
var G__14650 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__14651 = item;
if(cljs.core.truth_(ingredients)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__14651,cljs.core.cst$kw$ingredients,recur_on_items);
} else {
return G__14651;
}
})(),cljs.core.cst$kw$quantity,product);
if(typeof xp === 'number'){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14650,cljs.core.cst$kw$xp,(multiplier * xp));
} else {
return G__14650;
}
});
G__14652 = function(p__14646,items_by_id,prev_multiplier){
switch(arguments.length){
case 2:
return G__14652__2.call(this,p__14646,items_by_id);
case 3:
return G__14652__3.call(this,p__14646,items_by_id,prev_multiplier);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14652.cljs$core$IFn$_invoke$arity$2 = G__14652__2;
G__14652.cljs$core$IFn$_invoke$arity$3 = G__14652__3;
return G__14652;
})()
);
nw_calculator.business_logic.merge_ingredients = (function nw_calculator$business_logic$merge_ingredients(p__14655){
var map__14656 = p__14655;
var map__14656__$1 = cljs.core.__destructure_map(map__14656);
var item = map__14656__$1;
var item_ingredients = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14656__$1,cljs.core.cst$kw$ingredients);
var G__14657 = item;
if(cljs.core.truth_(cljs.core.not_empty(item_ingredients))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__14657,cljs.core.cst$kw$ingredients,(function (p1__14653_SHARP_){
return cljs.core.group_by(cljs.core.cst$kw$id,p1__14653_SHARP_);
})),cljs.core.cst$kw$ingredients,(function (p1__14654_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__14658){
var vec__14659 = p__14658;
var _id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14659,(0),null);
var ingredients = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14659,(1),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (item_map_1,p__14662){
var map__14663 = p__14662;
var map__14663__$1 = cljs.core.__destructure_map(map__14663);
var ing_2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14663__$1,cljs.core.cst$kw$ingredients);
var q_2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14663__$1,cljs.core.cst$kw$quantity);
var G__14664 = (function (){var G__14665 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(item_map_1,cljs.core.cst$kw$quantity,cljs.core._PLUS_,q_2);
if(cljs.core.truth_(ing_2)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__14665,cljs.core.cst$kw$ingredients,cljs.core.into,ing_2);
} else {
return G__14665;
}
})();
return (nw_calculator.business_logic.merge_ingredients.cljs$core$IFn$_invoke$arity$1 ? nw_calculator.business_logic.merge_ingredients.cljs$core$IFn$_invoke$arity$1(G__14664) : nw_calculator.business_logic.merge_ingredients.call(null,G__14664));
}),ingredients);
}),p1__14654_SHARP_);
}));
} else {
return G__14657;
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
var merged_items = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (coll,p__14666){
var map__14667 = p__14666;
var map__14667__$1 = cljs.core.__destructure_map(map__14667);
var item = map__14667__$1;
var item_ingredients = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14667__$1,cljs.core.cst$kw$ingredients);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(coll,cljs.core.cst$kw$items,cljs.core.conj,cljs.core.with_meta(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(item,cljs.core.cst$kw$ingredients),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$as_DASH_is_QMARK_,true], null))),cljs.core.cst$kw$ingredients,cljs.core.into,item_ingredients);
}),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,cljs.core.cst$kw$items_DASH_summary,cljs.core.cst$kw$items,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$ingredients,cljs.core.PersistentVector.EMPTY], null),items);
return nw_calculator.business_logic.merge_ingredients(merged_items);
});
