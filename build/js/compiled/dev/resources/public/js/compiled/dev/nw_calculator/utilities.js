// Compiled by ClojureScript 1.10.879 {:optimizations :none}
goog.provide('nw_calculator.utilities');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.async.Debouncer');
nw_calculator.utilities.no_op = (function nw_calculator$utilities$no_op(var_args){
var args__4824__auto__ = [];
var len__4818__auto___93680 = arguments.length;
var i__4819__auto___93681 = (0);
while(true){
if((i__4819__auto___93681 < len__4818__auto___93680)){
args__4824__auto__.push((arguments[i__4819__auto___93681]));

var G__93682 = (i__4819__auto___93681 + (1));
i__4819__auto___93681 = G__93682;
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
(nw_calculator.utilities.no_op.cljs$lang$applyTo = (function (seq93679){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq93679));
}));

nw_calculator.utilities.parse_pos = (function nw_calculator$utilities$parse_pos(var_args){
var G__93684 = arguments.length;
switch (G__93684) {
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
var G__93686__delegate = function (args){
return dbnc.fire.apply(dbnc,cljs.core.to_array.call(null,args));
};
var G__93686 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__93687__i = 0, G__93687__a = new Array(arguments.length -  0);
while (G__93687__i < G__93687__a.length) {G__93687__a[G__93687__i] = arguments[G__93687__i + 0]; ++G__93687__i;}
  args = new cljs.core.IndexedSeq(G__93687__a,0,null);
} 
return G__93686__delegate.call(this,args);};
G__93686.cljs$lang$maxFixedArity = 0;
G__93686.cljs$lang$applyTo = (function (arglist__93688){
var args = cljs.core.seq(arglist__93688);
return G__93686__delegate(args);
});
G__93686.cljs$core$IFn$_invoke$arity$variadic = G__93686__delegate;
return G__93686;
})()
;
});
nw_calculator.utilities.category_QMARK_ = (function nw_calculator$utilities$category_QMARK_(p__93689){
var map__93690 = p__93689;
var map__93690__$1 = cljs.core.__destructure_map.call(null,map__93690);
var item_type = cljs.core.get.call(null,map__93690__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core.boolean$.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["category",null], null), null).call(null,item_type));
});
nw_calculator.utilities.fuzzy_search = (function nw_calculator$utilities$fuzzy_search(items,substr){
var fuse = (new Fuse(cljs.core.clj__GT_js.call(null,items),({"threshold": 0.15, "useExtendedSearch": true})));
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p1__93691_SHARP_){
return p1__93691_SHARP_.item;
})),fuse.search(substr));
});
nw_calculator.utilities.short_uuid_str = (function nw_calculator$utilities$short_uuid_str(){
return clojure.string.join.call(null,cljs.core.take.call(null,(8),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid.call(null))));
});
nw_calculator.utilities.options_or_ingredients = (function nw_calculator$utilities$options_or_ingredients(p__93692){
var map__93693 = p__93692;
var map__93693__$1 = cljs.core.__destructure_map.call(null,map__93693);
var options = cljs.core.get.call(null,map__93693__$1,new cljs.core.Keyword(null,"options","options",99638489));
var ingredients = cljs.core.get.call(null,map__93693__$1,new cljs.core.Keyword(null,"ingredients","ingredients",-1855671917));
var or__4212__auto__ = options;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return ingredients;
}
});
nw_calculator.utilities.resolve_refs = cljs.core.memoize.call(null,(function() {
var G__93709 = null;
var G__93709__2 = (function (item,items_by_id){
return nw_calculator.utilities.resolve_refs.call(null,item,items_by_id,cljs.core.PersistentHashSet.EMPTY);
});
var G__93709__3 = (function (item,items_by_id,prev_path){
return nw_calculator.utilities.resolve_refs.call(null,item,items_by_id,prev_path,cljs.core.PersistentArrayMap.EMPTY);
});
var G__93709__4 = (function (p__93697,items_by_id,prev_walked_ids,selected_options_by_category_path){
var map__93698 = p__93697;
var map__93698__$1 = cljs.core.__destructure_map.call(null,map__93698);
var item = map__93698__$1;
var ingredients = cljs.core.get.call(null,map__93698__$1,new cljs.core.Keyword(null,"ingredients","ingredients",-1855671917));
var options = cljs.core.get.call(null,map__93698__$1,new cljs.core.Keyword(null,"options","options",99638489));
var id = cljs.core.get.call(null,map__93698__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if(cljs.core.truth_((function (){var and__4210__auto__ = items_by_id;
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not.call(null,cljs.core.set.call(null,prev_walked_ids).call(null,id));
} else {
return and__4210__auto__;
}
})())){
var path = cljs.core.conj.call(null,prev_walked_ids,id);
var resolve_ref = (function (p__93699){
var map__93700 = p__93699;
var map__93700__$1 = cljs.core.__destructure_map.call(null,map__93700);
var ref = map__93700__$1;
var ref_id = cljs.core.get.call(null,map__93700__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.merge.call(null,items_by_id.call(null,ref_id),ref);
});
var recur_STAR_ = (function() { 
var G__93710__delegate = function (refs,p__93701){
var vec__93702 = p__93701;
var meta = cljs.core.nth.call(null,vec__93702,(0),null);
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.call(null,cljs.core.map.call(null,resolve_ref),cljs.core.map.call(null,(function (p1__93694_SHARP_){
return cljs.core.with_meta.call(null,p1__93694_SHARP_,meta);
})),cljs.core.map.call(null,(function (p1__93695_SHARP_){
return nw_calculator.utilities.resolve_refs.call(null,p1__93695_SHARP_,items_by_id,path,selected_options_by_category_path);
})),cljs.core.filter.call(null,cljs.core.some_QMARK_)),refs);
};
var G__93710 = function (refs,var_args){
var p__93701 = null;
if (arguments.length > 1) {
var G__93711__i = 0, G__93711__a = new Array(arguments.length -  1);
while (G__93711__i < G__93711__a.length) {G__93711__a[G__93711__i] = arguments[G__93711__i + 1]; ++G__93711__i;}
  p__93701 = new cljs.core.IndexedSeq(G__93711__a,0,null);
} 
return G__93710__delegate.call(this,refs,p__93701);};
G__93710.cljs$lang$maxFixedArity = 1;
G__93710.cljs$lang$applyTo = (function (arglist__93712){
var refs = cljs.core.first(arglist__93712);
var p__93701 = cljs.core.rest(arglist__93712);
return G__93710__delegate(refs,p__93701);
});
G__93710.cljs$core$IFn$_invoke$arity$variadic = G__93710__delegate;
return G__93710;
})()
;
var select_option = (function (p__93705){
var map__93706 = p__93705;
var map__93706__$1 = cljs.core.__destructure_map.call(null,map__93706);
var category = map__93706__$1;
var name_STAR_ = cljs.core.get.call(null,map__93706__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var category_path = cljs.core.get.call(null,map__93706__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var options__$1 = cljs.core.get.call(null,map__93706__$1,new cljs.core.Keyword(null,"options","options",99638489));
var id__$1 = cljs.core.get.call(null,map__93706__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var category_name = cljs.core.get.call(null,map__93706__$1,new cljs.core.Keyword(null,"category-name","category-name",-1615496579));
var category_id = cljs.core.get.call(null,map__93706__$1,new cljs.core.Keyword(null,"category-id","category-id",1171211503));
var default_option = cljs.core.first.call(null,cljs.core.vec.call(null,options__$1));
var selected_option = selected_options_by_category_path.call(null,category_path,default_option);
return cljs.core.merge.call(null,(function (){var G__93707 = category;
var G__93707__$1 = ((cljs.core.not.call(null,category_name))?cljs.core.assoc.call(null,G__93707,new cljs.core.Keyword(null,"category-name","category-name",-1615496579),name_STAR_):G__93707);
if(cljs.core.not.call(null,category_id)){
return cljs.core.assoc.call(null,G__93707__$1,new cljs.core.Keyword(null,"category-id","category-id",1171211503),id__$1);
} else {
return G__93707__$1;
}
})(),cljs.core.dissoc.call(null,selected_option,new cljs.core.Keyword(null,"path","path",-188191168)));
});
var G__93708 = cljs.core.assoc.call(null,item,new cljs.core.Keyword(null,"path","path",-188191168),path);
var G__93708__$1 = (cljs.core.truth_(ingredients)?cljs.core.update.call(null,G__93708,new cljs.core.Keyword(null,"ingredients","ingredients",-1855671917),recur_STAR_):G__93708);
if(cljs.core.truth_(options)){
return select_option.call(null,cljs.core.update.call(null,G__93708__$1,new cljs.core.Keyword(null,"options","options",99638489),(function (p1__93696_SHARP_){
return recur_STAR_.call(null,p1__93696_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-is?","as-is?",685734352),true], null));
})));
} else {
return G__93708__$1;
}
} else {
return null;
}
});
G__93709 = function(p__93697,items_by_id,prev_walked_ids,selected_options_by_category_path){
switch(arguments.length){
case 2:
return G__93709__2.call(this,p__93697,items_by_id);
case 3:
return G__93709__3.call(this,p__93697,items_by_id,prev_walked_ids);
case 4:
return G__93709__4.call(this,p__93697,items_by_id,prev_walked_ids,selected_options_by_category_path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__93709.cljs$core$IFn$_invoke$arity$2 = G__93709__2;
G__93709.cljs$core$IFn$_invoke$arity$3 = G__93709__3;
G__93709.cljs$core$IFn$_invoke$arity$4 = G__93709__4;
return G__93709;
})()
);
nw_calculator.utilities.multiply_quantities = cljs.core.memoize.call(null,(function() {
var G__93720 = null;
var G__93720__2 = (function (item,items_by_id){
return nw_calculator.utilities.multiply_quantities.call(null,item,items_by_id,(1));
});
var G__93720__3 = (function (p__93715,items_by_id,prev_multiplier){
var map__93716 = p__93715;
var map__93716__$1 = cljs.core.__destructure_map.call(null,map__93716);
var item = map__93716__$1;
var quantity = cljs.core.get.call(null,map__93716__$1,new cljs.core.Keyword(null,"quantity","quantity",-1929050694),(1));
var xp = cljs.core.get.call(null,map__93716__$1,new cljs.core.Keyword(null,"xp","xp",550374458));
var ingredients = cljs.core.get.call(null,map__93716__$1,new cljs.core.Keyword(null,"ingredients","ingredients",-1855671917));
var options = cljs.core.get.call(null,map__93716__$1,new cljs.core.Keyword(null,"options","options",99638489));
var selected_option = cljs.core.get.call(null,map__93716__$1,new cljs.core.Keyword(null,"selected-option","selected-option",933901741));
var id = cljs.core.get.call(null,map__93716__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var map__93717 = items_by_id.call(null,id);
var map__93717__$1 = cljs.core.__destructure_map.call(null,map__93717);
var base_multiplier = cljs.core.get.call(null,map__93717__$1,new cljs.core.Keyword(null,"quantity","quantity",-1929050694),(1));
var product = (quantity * prev_multiplier);
var multiplier = (Math.ceil((product / base_multiplier)) | (0));
var recur_STAR_ = (function (p1__93713_SHARP_){
return nw_calculator.utilities.multiply_quantities.call(null,p1__93713_SHARP_,items_by_id,multiplier);
});
var recur_on_items = (function (items){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,recur_STAR_),items);
});
var G__93718 = cljs.core.assoc.call(null,(function (){var G__93719 = item;
if(cljs.core.truth_(ingredients)){
return cljs.core.update.call(null,G__93719,new cljs.core.Keyword(null,"ingredients","ingredients",-1855671917),recur_on_items);
} else {
return G__93719;
}
})(),new cljs.core.Keyword(null,"quantity","quantity",-1929050694),product);
if(typeof xp === 'number'){
return cljs.core.assoc.call(null,G__93718,new cljs.core.Keyword(null,"xp","xp",550374458),(multiplier * xp));
} else {
return G__93718;
}
});
G__93720 = function(p__93715,items_by_id,prev_multiplier){
switch(arguments.length){
case 2:
return G__93720__2.call(this,p__93715,items_by_id);
case 3:
return G__93720__3.call(this,p__93715,items_by_id,prev_multiplier);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__93720.cljs$core$IFn$_invoke$arity$2 = G__93720__2;
G__93720.cljs$core$IFn$_invoke$arity$3 = G__93720__3;
return G__93720;
})()
);
nw_calculator.utilities.craftable_item = (function nw_calculator$utilities$craftable_item(p__93721){
var map__93722 = p__93721;
var map__93722__$1 = cljs.core.__destructure_map.call(null,map__93722);
var item = map__93722__$1;
var ingredients = cljs.core.get.call(null,map__93722__$1,new cljs.core.Keyword(null,"ingredients","ingredients",-1855671917));
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
