// Compiled by ClojureScript 1.10.879 {:optimizations :none}
goog.provide('nw_calculator.utilities');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.async.Debouncer');
nw_calculator.utilities.no_op = (function nw_calculator$utilities$no_op(var_args){
var args__4824__auto__ = [];
var len__4818__auto___28765 = arguments.length;
var i__4819__auto___28766 = (0);
while(true){
if((i__4819__auto___28766 < len__4818__auto___28765)){
args__4824__auto__.push((arguments[i__4819__auto___28766]));

var G__28767 = (i__4819__auto___28766 + (1));
i__4819__auto___28766 = G__28767;
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
(nw_calculator.utilities.no_op.cljs$lang$applyTo = (function (seq28764){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28764));
}));

nw_calculator.utilities.parse_pos = (function nw_calculator$utilities$parse_pos(var_args){
var G__28769 = arguments.length;
switch (G__28769) {
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
return nw_calculator.utilities.parse_pos.call(null,s,(1));
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
var G__28771__delegate = function (args){
return dbnc.fire.apply(dbnc,cljs.core.to_array.call(null,args));
};
var G__28771 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28772__i = 0, G__28772__a = new Array(arguments.length -  0);
while (G__28772__i < G__28772__a.length) {G__28772__a[G__28772__i] = arguments[G__28772__i + 0]; ++G__28772__i;}
  args = new cljs.core.IndexedSeq(G__28772__a,0,null);
} 
return G__28771__delegate.call(this,args);};
G__28771.cljs$lang$maxFixedArity = 0;
G__28771.cljs$lang$applyTo = (function (arglist__28773){
var args = cljs.core.seq(arglist__28773);
return G__28771__delegate(args);
});
G__28771.cljs$core$IFn$_invoke$arity$variadic = G__28771__delegate;
return G__28771;
})()
;
});
nw_calculator.utilities.category_QMARK_ = (function nw_calculator$utilities$category_QMARK_(p__28774){
var map__28775 = p__28774;
var map__28775__$1 = cljs.core.__destructure_map.call(null,map__28775);
var item_type = cljs.core.get.call(null,map__28775__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core.boolean$.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["category",null], null), null).call(null,item_type));
});
nw_calculator.utilities.fuzzy_search = (function nw_calculator$utilities$fuzzy_search(items,substr){
var fuse = (new Fuse(cljs.core.clj__GT_js.call(null,items),({"threshold": 0.15, "useExtendedSearch": true})));
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p1__28776_SHARP_){
return p1__28776_SHARP_.item;
})),fuse.search(substr));
});
nw_calculator.utilities.short_uuid_str = (function nw_calculator$utilities$short_uuid_str(){
return clojure.string.join.call(null,cljs.core.take.call(null,(8),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid.call(null))));
});
nw_calculator.utilities.options_or_ingredients = (function nw_calculator$utilities$options_or_ingredients(p__28777){
var map__28778 = p__28777;
var map__28778__$1 = cljs.core.__destructure_map.call(null,map__28778);
var options = cljs.core.get.call(null,map__28778__$1,new cljs.core.Keyword(null,"options","options",99638489));
var ingredients = cljs.core.get.call(null,map__28778__$1,new cljs.core.Keyword(null,"ingredients","ingredients",-1855671917));
var or__4212__auto__ = options;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return ingredients;
}
});
nw_calculator.utilities.resolve_refs = cljs.core.memoize.call(null,(function() {
var G__28797 = null;
var G__28797__2 = (function (item,items_by_id){
return nw_calculator.utilities.resolve_refs.call(null,item,items_by_id,cljs.core.PersistentHashSet.EMPTY);
});
var G__28797__3 = (function (item,items_by_id,prev_path){
return nw_calculator.utilities.resolve_refs.call(null,item,items_by_id,prev_path,cljs.core.PersistentArrayMap.EMPTY);
});
var G__28797__4 = (function (p__28782,items_by_id,prev_walked_ids,selected_options_by_category_path){
var map__28783 = p__28782;
var map__28783__$1 = cljs.core.__destructure_map.call(null,map__28783);
var item = map__28783__$1;
var ingredients = cljs.core.get.call(null,map__28783__$1,new cljs.core.Keyword(null,"ingredients","ingredients",-1855671917));
var options = cljs.core.get.call(null,map__28783__$1,new cljs.core.Keyword(null,"options","options",99638489));
var id = cljs.core.get.call(null,map__28783__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if(cljs.core.truth_((function (){var and__4210__auto__ = items_by_id;
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not.call(null,cljs.core.set.call(null,prev_walked_ids).call(null,id));
} else {
return and__4210__auto__;
}
})())){
var path = cljs.core.conj.call(null,prev_walked_ids,id);
var resolve_ref = (function (p__28784){
var map__28785 = p__28784;
var map__28785__$1 = cljs.core.__destructure_map.call(null,map__28785);
var ref = map__28785__$1;
var ref_id = cljs.core.get.call(null,map__28785__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.merge.call(null,items_by_id.call(null,ref_id),ref);
});
var recur_STAR_ = (function() { 
var G__28798__delegate = function (refs,p__28786){
var vec__28787 = p__28786;
var meta = cljs.core.nth.call(null,vec__28787,(0),null);
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.comp.call(null,cljs.core.map.call(null,resolve_ref),cljs.core.map.call(null,(function (p1__28779_SHARP_){
return cljs.core.vary_meta.call(null,p1__28779_SHARP_,cljs.core.merge,meta);
})),cljs.core.map.call(null,(function (p1__28780_SHARP_){
return nw_calculator.utilities.resolve_refs.call(null,p1__28780_SHARP_,items_by_id,path,selected_options_by_category_path);
})),cljs.core.filter.call(null,cljs.core.some_QMARK_)),refs);
};
var G__28798 = function (refs,var_args){
var p__28786 = null;
if (arguments.length > 1) {
var G__28799__i = 0, G__28799__a = new Array(arguments.length -  1);
while (G__28799__i < G__28799__a.length) {G__28799__a[G__28799__i] = arguments[G__28799__i + 1]; ++G__28799__i;}
  p__28786 = new cljs.core.IndexedSeq(G__28799__a,0,null);
} 
return G__28798__delegate.call(this,refs,p__28786);};
G__28798.cljs$lang$maxFixedArity = 1;
G__28798.cljs$lang$applyTo = (function (arglist__28800){
var refs = cljs.core.first(arglist__28800);
var p__28786 = cljs.core.rest(arglist__28800);
return G__28798__delegate(refs,p__28786);
});
G__28798.cljs$core$IFn$_invoke$arity$variadic = G__28798__delegate;
return G__28798;
})()
;
var select_option = (function (p__28790){
var map__28791 = p__28790;
var map__28791__$1 = cljs.core.__destructure_map.call(null,map__28791);
var category = map__28791__$1;
var name_STAR_ = cljs.core.get.call(null,map__28791__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var vec__28792 = cljs.core.get.call(null,map__28791__$1,new cljs.core.Keyword(null,"options","options",99638489));
var default_option = cljs.core.nth.call(null,vec__28792,(0),null);
var category_path = cljs.core.get.call(null,map__28791__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var id__$1 = cljs.core.get.call(null,map__28791__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var category_name = cljs.core.get.call(null,map__28791__$1,new cljs.core.Keyword(null,"category-name","category-name",-1615496579));
var category_id = cljs.core.get.call(null,map__28791__$1,new cljs.core.Keyword(null,"category-id","category-id",1171211503));
var selected_option = selected_options_by_category_path.call(null,category_path,default_option);
return cljs.core.merge.call(null,(function (){var G__28795 = category;
var G__28795__$1 = ((cljs.core.not.call(null,category_name))?cljs.core.assoc.call(null,G__28795,new cljs.core.Keyword(null,"category-name","category-name",-1615496579),name_STAR_):G__28795);
if(cljs.core.not.call(null,category_id)){
return cljs.core.assoc.call(null,G__28795__$1,new cljs.core.Keyword(null,"category-id","category-id",1171211503),id__$1);
} else {
return G__28795__$1;
}
})(),cljs.core.dissoc.call(null,selected_option,new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"quantity","quantity",-1929050694)));
});
var recur_options = (function (options__$1){
return cljs.core.sort_by.call(null,cljs.core.comp.call(null,(function (p1__28781_SHARP_){
var or__4212__auto__ = p1__28781_SHARP_;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (99);
}
}),new cljs.core.Keyword(null,"tier","tier",-1071893374)),recur_STAR_.call(null,options__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-is?","as-is?",685734352),true], null)));
});
var G__28796 = cljs.core.assoc.call(null,item,new cljs.core.Keyword(null,"path","path",-188191168),path);
var G__28796__$1 = (cljs.core.truth_(ingredients)?cljs.core.update.call(null,G__28796,new cljs.core.Keyword(null,"ingredients","ingredients",-1855671917),recur_STAR_):G__28796);
if(cljs.core.truth_(options)){
return select_option.call(null,cljs.core.update.call(null,G__28796__$1,new cljs.core.Keyword(null,"options","options",99638489),recur_options));
} else {
return G__28796__$1;
}
} else {
return null;
}
});
G__28797 = function(p__28782,items_by_id,prev_walked_ids,selected_options_by_category_path){
switch(arguments.length){
case 2:
return G__28797__2.call(this,p__28782,items_by_id);
case 3:
return G__28797__3.call(this,p__28782,items_by_id,prev_walked_ids);
case 4:
return G__28797__4.call(this,p__28782,items_by_id,prev_walked_ids,selected_options_by_category_path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28797.cljs$core$IFn$_invoke$arity$2 = G__28797__2;
G__28797.cljs$core$IFn$_invoke$arity$3 = G__28797__3;
G__28797.cljs$core$IFn$_invoke$arity$4 = G__28797__4;
return G__28797;
})()
);
nw_calculator.utilities.multiply_quantities = cljs.core.memoize.call(null,(function() {
var G__28807 = null;
var G__28807__2 = (function (item,items_by_id){
return nw_calculator.utilities.multiply_quantities.call(null,item,items_by_id,(1));
});
var G__28807__3 = (function (p__28802,items_by_id,prev_multiplier){
var map__28803 = p__28802;
var map__28803__$1 = cljs.core.__destructure_map.call(null,map__28803);
var item = map__28803__$1;
var quantity = cljs.core.get.call(null,map__28803__$1,new cljs.core.Keyword(null,"quantity","quantity",-1929050694),(1));
var xp = cljs.core.get.call(null,map__28803__$1,new cljs.core.Keyword(null,"xp","xp",550374458));
var ingredients = cljs.core.get.call(null,map__28803__$1,new cljs.core.Keyword(null,"ingredients","ingredients",-1855671917));
var options = cljs.core.get.call(null,map__28803__$1,new cljs.core.Keyword(null,"options","options",99638489));
var selected_option = cljs.core.get.call(null,map__28803__$1,new cljs.core.Keyword(null,"selected-option","selected-option",933901741));
var id = cljs.core.get.call(null,map__28803__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var map__28804 = items_by_id.call(null,id);
var map__28804__$1 = cljs.core.__destructure_map.call(null,map__28804);
var base_multiplier = cljs.core.get.call(null,map__28804__$1,new cljs.core.Keyword(null,"quantity","quantity",-1929050694),(1));
var product = (quantity * prev_multiplier);
var multiplier = (Math.ceil((product / base_multiplier)) | (0));
var recur_STAR_ = (function (p1__28801_SHARP_){
return nw_calculator.utilities.multiply_quantities.call(null,p1__28801_SHARP_,items_by_id,multiplier);
});
var recur_on_items = (function (items){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,recur_STAR_),items);
});
var G__28805 = cljs.core.assoc.call(null,(function (){var G__28806 = item;
if(cljs.core.truth_(ingredients)){
return cljs.core.update.call(null,G__28806,new cljs.core.Keyword(null,"ingredients","ingredients",-1855671917),recur_on_items);
} else {
return G__28806;
}
})(),new cljs.core.Keyword(null,"quantity","quantity",-1929050694),product);
if(typeof xp === 'number'){
return cljs.core.assoc.call(null,G__28805,new cljs.core.Keyword(null,"xp","xp",550374458),(multiplier * xp));
} else {
return G__28805;
}
});
G__28807 = function(p__28802,items_by_id,prev_multiplier){
switch(arguments.length){
case 2:
return G__28807__2.call(this,p__28802,items_by_id);
case 3:
return G__28807__3.call(this,p__28802,items_by_id,prev_multiplier);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28807.cljs$core$IFn$_invoke$arity$2 = G__28807__2;
G__28807.cljs$core$IFn$_invoke$arity$3 = G__28807__3;
return G__28807;
})()
);
nw_calculator.utilities.craftable_item = (function nw_calculator$utilities$craftable_item(p__28808){
var map__28809 = p__28808;
var map__28809__$1 = cljs.core.__destructure_map.call(null,map__28809);
var item = map__28809__$1;
var ingredients = cljs.core.get.call(null,map__28809__$1,new cljs.core.Keyword(null,"ingredients","ingredients",-1855671917));
if(cljs.core.truth_(cljs.core.not_empty.call(null,ingredients))){
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
(template.innerHTML = clojure.string.trim.call(null,html));

return template.content.firstChild;
});
nw_calculator.utilities.vec_remove_nth = (function nw_calculator$utilities$vec_remove_nth(v,n){
var left = cljs.core.subvec.call(null,v,(0),n);
var right = cljs.core.subvec.call(null,v,(n + (1)));
return cljs.core.vec.call(null,cljs.core.concat.call(null,left,right));
});

//# sourceMappingURL=utilities.js.map
