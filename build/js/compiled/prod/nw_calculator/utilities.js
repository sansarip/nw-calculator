// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('nw_calculator.utilities');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('goog.async.Debouncer');
nw_calculator.utilities.no_op = (function nw_calculator$utilities$no_op(var_args){
var args__4824__auto__ = [];
var len__4818__auto___13459 = arguments.length;
var i__4819__auto___13460 = (0);
while(true){
if((i__4819__auto___13460 < len__4818__auto___13459)){
args__4824__auto__.push((arguments[i__4819__auto___13460]));

var G__13461 = (i__4819__auto___13460 + (1));
i__4819__auto___13460 = G__13461;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return nw_calculator.utilities.no_op.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(nw_calculator.utilities.no_op.cljs$core$IFn$_invoke$arity$variadic = (function (_){
return null;
}));

(nw_calculator.utilities.no_op.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(nw_calculator.utilities.no_op.cljs$lang$applyTo = (function (seq13458){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13458));
}));

nw_calculator.utilities.parse_pos = (function nw_calculator$utilities$parse_pos(var_args){
var G__13463 = arguments.length;
switch (G__13463) {
case 1:
return nw_calculator.utilities.parse_pos.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return nw_calculator.utilities.parse_pos.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nw_calculator.utilities.parse_pos.cljs$core$IFn$_invoke$arity$1 = (function (s){
return nw_calculator.utilities.parse_pos.cljs$core$IFn$_invoke$arity$2(s,(1));
}));

(nw_calculator.utilities.parse_pos.cljs$core$IFn$_invoke$arity$2 = (function (s,default$){
var n = parseInt(s);
if(cljs.core.truth_((function (){var or__4212__auto__ = isNaN(n);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (n <= (0));
}
})())){
return default$;
} else {
return n;
}
}));

(nw_calculator.utilities.parse_pos.cljs$lang$maxFixedArity = 2);

nw_calculator.utilities.debounce = (function nw_calculator$utilities$debounce(f,interval){
var dbnc = (new goog.async.Debouncer(f,interval));
return (function() { 
var G__13465__delegate = function (args){
return dbnc.fire.apply(dbnc,cljs.core.to_array(args));
};
var G__13465 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13466__i = 0, G__13466__a = new Array(arguments.length -  0);
while (G__13466__i < G__13466__a.length) {G__13466__a[G__13466__i] = arguments[G__13466__i + 0]; ++G__13466__i;}
  args = new cljs.core.IndexedSeq(G__13466__a,0,null);
} 
return G__13465__delegate.call(this,args);};
G__13465.cljs$lang$maxFixedArity = 0;
G__13465.cljs$lang$applyTo = (function (arglist__13467){
var args = cljs.core.seq(arglist__13467);
return G__13465__delegate(args);
});
G__13465.cljs$core$IFn$_invoke$arity$variadic = G__13465__delegate;
return G__13465;
})()
;
});
nw_calculator.utilities.category_QMARK_ = (function nw_calculator$utilities$category_QMARK_(p__13468){
var map__13469 = p__13468;
var map__13469__$1 = cljs.core.__destructure_map(map__13469);
var item_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13469__$1,cljs.core.cst$kw$type);
return cljs.core.boolean$((function (){var fexpr__13470 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["category",null], null), null);
return (fexpr__13470.cljs$core$IFn$_invoke$arity$1 ? fexpr__13470.cljs$core$IFn$_invoke$arity$1(item_type) : fexpr__13470.call(null,item_type));
})());
});
nw_calculator.utilities.fuzzy_search = (function nw_calculator$utilities$fuzzy_search(items,substr){
var fuse = (new Fuse(cljs.core.clj__GT_js(items),({"threshold": 0.15, "useExtendedSearch": true})));
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__13471_SHARP_){
return p1__13471_SHARP_.item;
})),fuse.search(substr));
});
nw_calculator.utilities.short_uuid_str = (function nw_calculator$utilities$short_uuid_str(){
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.take.cljs$core$IFn$_invoke$arity$2((8),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())));
});
nw_calculator.utilities.options_or_ingredients = (function nw_calculator$utilities$options_or_ingredients(p__13472){
var map__13473 = p__13472;
var map__13473__$1 = cljs.core.__destructure_map(map__13473);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13473__$1,cljs.core.cst$kw$options);
var ingredients = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13473__$1,cljs.core.cst$kw$ingredients);
var or__4212__auto__ = options;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return ingredients;
}
});
nw_calculator.utilities.resolve_refs = cljs.core.memoize((function() {
var G__13500 = null;
var G__13500__2 = (function (item,items_by_id){
var G__13478 = item;
var G__13479 = items_by_id;
var G__13480 = cljs.core.PersistentHashSet.EMPTY;
return (nw_calculator.utilities.resolve_refs.cljs$core$IFn$_invoke$arity$3 ? nw_calculator.utilities.resolve_refs.cljs$core$IFn$_invoke$arity$3(G__13478,G__13479,G__13480) : nw_calculator.utilities.resolve_refs.call(null,G__13478,G__13479,G__13480));
});
var G__13500__3 = (function (item,items_by_id,prev_path){
var G__13481 = item;
var G__13482 = items_by_id;
var G__13483 = prev_path;
var G__13484 = cljs.core.PersistentArrayMap.EMPTY;
return (nw_calculator.utilities.resolve_refs.cljs$core$IFn$_invoke$arity$4 ? nw_calculator.utilities.resolve_refs.cljs$core$IFn$_invoke$arity$4(G__13481,G__13482,G__13483,G__13484) : nw_calculator.utilities.resolve_refs.call(null,G__13481,G__13482,G__13483,G__13484));
});
var G__13500__4 = (function (p__13477,items_by_id,prev_walked_ids,selected_options_by_category_path){
var map__13485 = p__13477;
var map__13485__$1 = cljs.core.__destructure_map(map__13485);
var item = map__13485__$1;
var ingredients = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13485__$1,cljs.core.cst$kw$ingredients);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13485__$1,cljs.core.cst$kw$options);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13485__$1,cljs.core.cst$kw$id);
if(cljs.core.truth_((function (){var and__4210__auto__ = items_by_id;
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not((function (){var fexpr__13486 = cljs.core.set(prev_walked_ids);
return (fexpr__13486.cljs$core$IFn$_invoke$arity$1 ? fexpr__13486.cljs$core$IFn$_invoke$arity$1(id) : fexpr__13486.call(null,id));
})());
} else {
return and__4210__auto__;
}
})())){
var path = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prev_walked_ids,id);
var resolve_ref = (function (p__13487){
var map__13488 = p__13487;
var map__13488__$1 = cljs.core.__destructure_map(map__13488);
var ref = map__13488__$1;
var ref_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13488__$1,cljs.core.cst$kw$id);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(items_by_id.cljs$core$IFn$_invoke$arity$1 ? items_by_id.cljs$core$IFn$_invoke$arity$1(ref_id) : items_by_id.call(null,ref_id)),ref], 0));
});
var recur_STAR_ = (function() { 
var G__13501__delegate = function (refs,p__13489){
var vec__13490 = p__13489;
var meta = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13490,(0),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.map.cljs$core$IFn$_invoke$arity$1(resolve_ref),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__13474_SHARP_){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$3(p1__13474_SHARP_,cljs.core.merge,meta);
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__13475_SHARP_){
return (nw_calculator.utilities.resolve_refs.cljs$core$IFn$_invoke$arity$4 ? nw_calculator.utilities.resolve_refs.cljs$core$IFn$_invoke$arity$4(p1__13475_SHARP_,items_by_id,path,selected_options_by_category_path) : nw_calculator.utilities.resolve_refs.call(null,p1__13475_SHARP_,items_by_id,path,selected_options_by_category_path));
})),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.some_QMARK_)], 0)),refs);
};
var G__13501 = function (refs,var_args){
var p__13489 = null;
if (arguments.length > 1) {
var G__13502__i = 0, G__13502__a = new Array(arguments.length -  1);
while (G__13502__i < G__13502__a.length) {G__13502__a[G__13502__i] = arguments[G__13502__i + 1]; ++G__13502__i;}
  p__13489 = new cljs.core.IndexedSeq(G__13502__a,0,null);
} 
return G__13501__delegate.call(this,refs,p__13489);};
G__13501.cljs$lang$maxFixedArity = 1;
G__13501.cljs$lang$applyTo = (function (arglist__13503){
var refs = cljs.core.first(arglist__13503);
var p__13489 = cljs.core.rest(arglist__13503);
return G__13501__delegate(refs,p__13489);
});
G__13501.cljs$core$IFn$_invoke$arity$variadic = G__13501__delegate;
return G__13501;
})()
;
var select_option = (function (p__13493){
var map__13494 = p__13493;
var map__13494__$1 = cljs.core.__destructure_map(map__13494);
var category = map__13494__$1;
var name_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13494__$1,cljs.core.cst$kw$name);
var vec__13495 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13494__$1,cljs.core.cst$kw$options);
var default_option = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13495,(0),null);
var category_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13494__$1,cljs.core.cst$kw$path);
var id__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13494__$1,cljs.core.cst$kw$id);
var category_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13494__$1,cljs.core.cst$kw$category_DASH_name);
var category_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13494__$1,cljs.core.cst$kw$category_DASH_id);
var selected_option = (selected_options_by_category_path.cljs$core$IFn$_invoke$arity$2 ? selected_options_by_category_path.cljs$core$IFn$_invoke$arity$2(category_path,default_option) : selected_options_by_category_path.call(null,category_path,default_option));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__13498 = category;
var G__13498__$1 = ((cljs.core.not(category_name))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__13498,cljs.core.cst$kw$category_DASH_name,name_STAR_):G__13498);
if(cljs.core.not(category_id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__13498__$1,cljs.core.cst$kw$category_DASH_id,id__$1);
} else {
return G__13498__$1;
}
})(),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(selected_option,cljs.core.cst$kw$path,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$quantity], 0))], 0));
});
var recur_options = (function (options__$1){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__13476_SHARP_){
var or__4212__auto__ = p1__13476_SHARP_;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (99);
}
}),cljs.core.cst$kw$tier),recur_STAR_.cljs$core$IFn$_invoke$arity$variadic(options__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$as_DASH_is_QMARK_,true], null)], 0)));
});
var G__13499 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(item,cljs.core.cst$kw$path,path);
var G__13499__$1 = (cljs.core.truth_(ingredients)?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__13499,cljs.core.cst$kw$ingredients,recur_STAR_):G__13499);
if(cljs.core.truth_(options)){
return select_option(cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__13499__$1,cljs.core.cst$kw$options,recur_options));
} else {
return G__13499__$1;
}
} else {
return null;
}
});
G__13500 = function(p__13477,items_by_id,prev_walked_ids,selected_options_by_category_path){
switch(arguments.length){
case 2:
return G__13500__2.call(this,p__13477,items_by_id);
case 3:
return G__13500__3.call(this,p__13477,items_by_id,prev_walked_ids);
case 4:
return G__13500__4.call(this,p__13477,items_by_id,prev_walked_ids,selected_options_by_category_path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13500.cljs$core$IFn$_invoke$arity$2 = G__13500__2;
G__13500.cljs$core$IFn$_invoke$arity$3 = G__13500__3;
G__13500.cljs$core$IFn$_invoke$arity$4 = G__13500__4;
return G__13500;
})()
);
nw_calculator.utilities.multiply_quantities = cljs.core.memoize((function() {
var G__13511 = null;
var G__13511__2 = (function (item,items_by_id){
return (nw_calculator.utilities.multiply_quantities.cljs$core$IFn$_invoke$arity$3 ? nw_calculator.utilities.multiply_quantities.cljs$core$IFn$_invoke$arity$3(item,items_by_id,(1)) : nw_calculator.utilities.multiply_quantities.call(null,item,items_by_id,(1)));
});
var G__13511__3 = (function (p__13505,items_by_id,prev_multiplier){
var map__13506 = p__13505;
var map__13506__$1 = cljs.core.__destructure_map(map__13506);
var item = map__13506__$1;
var quantity = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__13506__$1,cljs.core.cst$kw$quantity,(1));
var xp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13506__$1,cljs.core.cst$kw$xp);
var ingredients = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13506__$1,cljs.core.cst$kw$ingredients);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13506__$1,cljs.core.cst$kw$options);
var selected_option = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13506__$1,cljs.core.cst$kw$selected_DASH_option);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13506__$1,cljs.core.cst$kw$id);
var map__13507 = (items_by_id.cljs$core$IFn$_invoke$arity$1 ? items_by_id.cljs$core$IFn$_invoke$arity$1(id) : items_by_id.call(null,id));
var map__13507__$1 = cljs.core.__destructure_map(map__13507);
var base_multiplier = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__13507__$1,cljs.core.cst$kw$quantity,(1));
var product = (quantity * prev_multiplier);
var multiplier = ((function (){var G__13508 = (product / base_multiplier);
return Math.ceil(G__13508);
})() | (0));
var recur_STAR_ = (function (p1__13504_SHARP_){
return (nw_calculator.utilities.multiply_quantities.cljs$core$IFn$_invoke$arity$3 ? nw_calculator.utilities.multiply_quantities.cljs$core$IFn$_invoke$arity$3(p1__13504_SHARP_,items_by_id,multiplier) : nw_calculator.utilities.multiply_quantities.call(null,p1__13504_SHARP_,items_by_id,multiplier));
});
var recur_on_items = (function (items){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(recur_STAR_),items);
});
var G__13509 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__13510 = item;
if(cljs.core.truth_(ingredients)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__13510,cljs.core.cst$kw$ingredients,recur_on_items);
} else {
return G__13510;
}
})(),cljs.core.cst$kw$quantity,product);
if(typeof xp === 'number'){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__13509,cljs.core.cst$kw$xp,(multiplier * xp));
} else {
return G__13509;
}
});
G__13511 = function(p__13505,items_by_id,prev_multiplier){
switch(arguments.length){
case 2:
return G__13511__2.call(this,p__13505,items_by_id);
case 3:
return G__13511__3.call(this,p__13505,items_by_id,prev_multiplier);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13511.cljs$core$IFn$_invoke$arity$2 = G__13511__2;
G__13511.cljs$core$IFn$_invoke$arity$3 = G__13511__3;
return G__13511;
})()
);
nw_calculator.utilities.craftable_item = (function nw_calculator$utilities$craftable_item(p__13512){
var map__13513 = p__13512;
var map__13513__$1 = cljs.core.__destructure_map(map__13513);
var item = map__13513__$1;
var ingredients = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13513__$1,cljs.core.cst$kw$ingredients);
if(cljs.core.truth_(cljs.core.not_empty(ingredients))){
return item;
} else {
return null;
}
});
nw_calculator.utilities.get_ele_offsets = (function nw_calculator$utilities$get_ele_offsets(ele){
var scroll_left = (function (){var or__4212__auto__ = window.pageXOffset;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var or__4212__auto____$1 = document.documentElement.scrollLeft;
if(cljs.core.truth_(or__4212__auto____$1)){
return or__4212__auto____$1;
} else {
var or__4212__auto____$2 = document.body.scrollLeft;
if(cljs.core.truth_(or__4212__auto____$2)){
return or__4212__auto____$2;
} else {
return (0);
}
}
}
})();
var scroll_top = (function (){var or__4212__auto__ = window.pageYOffset;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var or__4212__auto____$1 = document.documentElement.scrollTop;
if(cljs.core.truth_(or__4212__auto____$1)){
return or__4212__auto____$1;
} else {
var or__4212__auto____$2 = document.body.scrollTop;
if(cljs.core.truth_(or__4212__auto____$2)){
return or__4212__auto____$2;
} else {
return (0);
}
}
}
})();
var box = ele.getBoundingClientRect();
var left = (box.left + scroll_left);
var top = (box.top + scroll_top);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null);
});
nw_calculator.utilities.html__GT_ele = (function nw_calculator$utilities$html__GT_ele(html){
var template = document.createElement("template");
(template.innerHTML = clojure.string.trim(html));

return template.content.firstChild;
});
nw_calculator.utilities.vec_remove_nth = (function nw_calculator$utilities$vec_remove_nth(v,n){
var left = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,(0),n);
var right = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,(n + (1)));
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(left,right));
});
