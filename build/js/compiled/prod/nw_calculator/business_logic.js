// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('nw_calculator.business_logic');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('compound2.core');
goog.require('nw_calculator.defaults');
nw_calculator.business_logic.category_QMARK_ = (function nw_calculator$business_logic$category_QMARK_(p__14649){
var map__14650 = p__14649;
var map__14650__$1 = cljs.core.__destructure_map(map__14650);
var item_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14650__$1,cljs.core.cst$kw$type);
return cljs.core.boolean$((function (){var fexpr__14651 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["category",null], null), null);
return (fexpr__14651.cljs$core$IFn$_invoke$arity$1 ? fexpr__14651.cljs$core$IFn$_invoke$arity$1(item_type) : fexpr__14651.call(null,item_type));
})());
});
nw_calculator.business_logic.options_or_ingredients = (function nw_calculator$business_logic$options_or_ingredients(p__14652){
var map__14653 = p__14652;
var map__14653__$1 = cljs.core.__destructure_map(map__14653);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14653__$1,cljs.core.cst$kw$options);
var ingredients = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14653__$1,cljs.core.cst$kw$ingredients);
var or__4212__auto__ = options;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return ingredients;
}
});
nw_calculator.business_logic.resolve_refs = cljs.core.memoize((function() {
var G__14680 = null;
var G__14680__2 = (function (item,items_by_id){
var G__14658 = item;
var G__14659 = items_by_id;
var G__14660 = cljs.core.PersistentHashSet.EMPTY;
return (nw_calculator.business_logic.resolve_refs.cljs$core$IFn$_invoke$arity$3 ? nw_calculator.business_logic.resolve_refs.cljs$core$IFn$_invoke$arity$3(G__14658,G__14659,G__14660) : nw_calculator.business_logic.resolve_refs.call(null,G__14658,G__14659,G__14660));
});
var G__14680__3 = (function (item,items_by_id,prev_path){
var G__14661 = item;
var G__14662 = items_by_id;
var G__14663 = prev_path;
var G__14664 = cljs.core.PersistentArrayMap.EMPTY;
return (nw_calculator.business_logic.resolve_refs.cljs$core$IFn$_invoke$arity$4 ? nw_calculator.business_logic.resolve_refs.cljs$core$IFn$_invoke$arity$4(G__14661,G__14662,G__14663,G__14664) : nw_calculator.business_logic.resolve_refs.call(null,G__14661,G__14662,G__14663,G__14664));
});
var G__14680__4 = (function (p__14657,items_by_id,prev_walked_ids,selected_options_by_category_path){
var map__14665 = p__14657;
var map__14665__$1 = cljs.core.__destructure_map(map__14665);
var item = map__14665__$1;
var ingredients = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14665__$1,cljs.core.cst$kw$ingredients);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14665__$1,cljs.core.cst$kw$options);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14665__$1,cljs.core.cst$kw$id);
if(cljs.core.truth_((function (){var and__4210__auto__ = items_by_id;
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not((function (){var fexpr__14666 = cljs.core.set(prev_walked_ids);
return (fexpr__14666.cljs$core$IFn$_invoke$arity$1 ? fexpr__14666.cljs$core$IFn$_invoke$arity$1(id) : fexpr__14666.call(null,id));
})());
} else {
return and__4210__auto__;
}
})())){
var path = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prev_walked_ids,id);
var resolve_ref = (function (p__14667){
var map__14668 = p__14667;
var map__14668__$1 = cljs.core.__destructure_map(map__14668);
var ref = map__14668__$1;
var ref_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14668__$1,cljs.core.cst$kw$id);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(items_by_id.cljs$core$IFn$_invoke$arity$1 ? items_by_id.cljs$core$IFn$_invoke$arity$1(ref_id) : items_by_id.call(null,ref_id)),ref], 0));
});
var recur_STAR_ = (function() { 
var G__14681__delegate = function (refs,p__14669){
var vec__14670 = p__14669;
var meta = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14670,(0),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.map.cljs$core$IFn$_invoke$arity$1(resolve_ref),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__14654_SHARP_){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$3(p1__14654_SHARP_,cljs.core.merge,meta);
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__14655_SHARP_){
return (nw_calculator.business_logic.resolve_refs.cljs$core$IFn$_invoke$arity$4 ? nw_calculator.business_logic.resolve_refs.cljs$core$IFn$_invoke$arity$4(p1__14655_SHARP_,items_by_id,path,selected_options_by_category_path) : nw_calculator.business_logic.resolve_refs.call(null,p1__14655_SHARP_,items_by_id,path,selected_options_by_category_path));
})),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.some_QMARK_)], 0)),refs);
};
var G__14681 = function (refs,var_args){
var p__14669 = null;
if (arguments.length > 1) {
var G__14682__i = 0, G__14682__a = new Array(arguments.length -  1);
while (G__14682__i < G__14682__a.length) {G__14682__a[G__14682__i] = arguments[G__14682__i + 1]; ++G__14682__i;}
  p__14669 = new cljs.core.IndexedSeq(G__14682__a,0,null);
} 
return G__14681__delegate.call(this,refs,p__14669);};
G__14681.cljs$lang$maxFixedArity = 1;
G__14681.cljs$lang$applyTo = (function (arglist__14683){
var refs = cljs.core.first(arglist__14683);
var p__14669 = cljs.core.rest(arglist__14683);
return G__14681__delegate(refs,p__14669);
});
G__14681.cljs$core$IFn$_invoke$arity$variadic = G__14681__delegate;
return G__14681;
})()
;
var select_option = (function (p__14673){
var map__14674 = p__14673;
var map__14674__$1 = cljs.core.__destructure_map(map__14674);
var category = map__14674__$1;
var name_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14674__$1,cljs.core.cst$kw$name);
var vec__14675 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14674__$1,cljs.core.cst$kw$options);
var default_option = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14675,(0),null);
var category_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14674__$1,cljs.core.cst$kw$path);
var id__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14674__$1,cljs.core.cst$kw$id);
var category_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14674__$1,cljs.core.cst$kw$category_DASH_name);
var category_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14674__$1,cljs.core.cst$kw$category_DASH_id);
var selected_option = (selected_options_by_category_path.cljs$core$IFn$_invoke$arity$2 ? selected_options_by_category_path.cljs$core$IFn$_invoke$arity$2(category_path,default_option) : selected_options_by_category_path.call(null,category_path,default_option));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__14678 = category;
var G__14678__$1 = ((cljs.core.not(category_name))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14678,cljs.core.cst$kw$category_DASH_name,name_STAR_):G__14678);
if(cljs.core.not(category_id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14678__$1,cljs.core.cst$kw$category_DASH_id,id__$1);
} else {
return G__14678__$1;
}
})(),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(selected_option,cljs.core.cst$kw$path,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$quantity], 0))], 0));
});
var recur_options = (function (options__$1){
return cljs.core.vec(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__14656_SHARP_){
var or__4212__auto__ = p1__14656_SHARP_;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (1000000);
}
}),cljs.core.cst$kw$xp),recur_STAR_.cljs$core$IFn$_invoke$arity$variadic(options__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$as_DASH_is_QMARK_,true], null)], 0))));
});
var G__14679 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(item,cljs.core.cst$kw$path,path);
var G__14679__$1 = (cljs.core.truth_(ingredients)?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__14679,cljs.core.cst$kw$ingredients,recur_STAR_):G__14679);
if(cljs.core.truth_(options)){
return select_option(cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__14679__$1,cljs.core.cst$kw$options,recur_options));
} else {
return G__14679__$1;
}
} else {
return null;
}
});
G__14680 = function(p__14657,items_by_id,prev_walked_ids,selected_options_by_category_path){
switch(arguments.length){
case 2:
return G__14680__2.call(this,p__14657,items_by_id);
case 3:
return G__14680__3.call(this,p__14657,items_by_id,prev_walked_ids);
case 4:
return G__14680__4.call(this,p__14657,items_by_id,prev_walked_ids,selected_options_by_category_path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14680.cljs$core$IFn$_invoke$arity$2 = G__14680__2;
G__14680.cljs$core$IFn$_invoke$arity$3 = G__14680__3;
G__14680.cljs$core$IFn$_invoke$arity$4 = G__14680__4;
return G__14680;
})()
);
nw_calculator.business_logic.craftable_item = (function nw_calculator$business_logic$craftable_item(p__14684){
var map__14685 = p__14684;
var map__14685__$1 = cljs.core.__destructure_map(map__14685);
var item = map__14685__$1;
var ingredients = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14685__$1,cljs.core.cst$kw$ingredients);
if(cljs.core.truth_(cljs.core.not_empty(ingredients))){
return item;
} else {
return null;
}
});
nw_calculator.business_logic.multiply_quantities = cljs.core.memoize((function() {
var G__14693 = null;
var G__14693__2 = (function (item,items_by_id){
return (nw_calculator.business_logic.multiply_quantities.cljs$core$IFn$_invoke$arity$3 ? nw_calculator.business_logic.multiply_quantities.cljs$core$IFn$_invoke$arity$3(item,items_by_id,(1)) : nw_calculator.business_logic.multiply_quantities.call(null,item,items_by_id,(1)));
});
var G__14693__3 = (function (p__14687,items_by_id,prev_multiplier){
var map__14688 = p__14687;
var map__14688__$1 = cljs.core.__destructure_map(map__14688);
var item = map__14688__$1;
var quantity = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__14688__$1,cljs.core.cst$kw$quantity,(1));
var xp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14688__$1,cljs.core.cst$kw$xp);
var ingredients = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14688__$1,cljs.core.cst$kw$ingredients);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14688__$1,cljs.core.cst$kw$id);
var map__14689 = (items_by_id.cljs$core$IFn$_invoke$arity$1 ? items_by_id.cljs$core$IFn$_invoke$arity$1(id) : items_by_id.call(null,id));
var map__14689__$1 = cljs.core.__destructure_map(map__14689);
var base_multiplier = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__14689__$1,cljs.core.cst$kw$quantity,(1));
var product = (quantity * prev_multiplier);
var multiplier = ((function (){var G__14690 = (product / base_multiplier);
return Math.ceil(G__14690);
})() | (0));
var recur_STAR_ = (function (p1__14686_SHARP_){
return (nw_calculator.business_logic.multiply_quantities.cljs$core$IFn$_invoke$arity$3 ? nw_calculator.business_logic.multiply_quantities.cljs$core$IFn$_invoke$arity$3(p1__14686_SHARP_,items_by_id,multiplier) : nw_calculator.business_logic.multiply_quantities.call(null,p1__14686_SHARP_,items_by_id,multiplier));
});
var recur_on_items = (function (items){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(recur_STAR_),items);
});
var G__14691 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__14692 = item;
if(cljs.core.truth_(ingredients)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__14692,cljs.core.cst$kw$ingredients,recur_on_items);
} else {
return G__14692;
}
})(),cljs.core.cst$kw$quantity,product);
if(typeof xp === 'number'){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14691,cljs.core.cst$kw$xp,(multiplier * xp));
} else {
return G__14691;
}
});
G__14693 = function(p__14687,items_by_id,prev_multiplier){
switch(arguments.length){
case 2:
return G__14693__2.call(this,p__14687,items_by_id);
case 3:
return G__14693__3.call(this,p__14687,items_by_id,prev_multiplier);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14693.cljs$core$IFn$_invoke$arity$2 = G__14693__2;
G__14693.cljs$core$IFn$_invoke$arity$3 = G__14693__3;
return G__14693;
})()
);
nw_calculator.business_logic.merge_items = cljs.core.memoize((function (items){
var merged_items = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (coll,p__14694){
var map__14695 = p__14694;
var map__14695__$1 = cljs.core.__destructure_map(map__14695);
var item = map__14695__$1;
var item_ingredients = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14695__$1,cljs.core.cst$kw$ingredients);
var png_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14695__$1,cljs.core.cst$kw$png_DASH_url);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4((function (){var G__14696 = coll;
if(cljs.core.truth_(png_url)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__14696,cljs.core.cst$kw$png_DASH_urls,cljs.core.conj,png_url);
} else {
return G__14696;
}
})(),cljs.core.cst$kw$items,cljs.core.conj,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(item,cljs.core.cst$kw$ingredients)),cljs.core.cst$kw$ingredients,compound2.core.add_items,item_ingredients);
}),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,cljs.core.cst$kw$items_DASH_summary,cljs.core.cst$kw$png_DASH_urls,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$items,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$ingredients,nw_calculator.defaults.cumulative_items_index], null),items);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(merged_items,cljs.core.cst$kw$ingredients,cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.vec,cljs.core.vals,cljs.core.cst$kw$by_DASH_id));
}));
