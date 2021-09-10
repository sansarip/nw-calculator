// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('nw_calculator.utilities');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('clojure.walk');
goog.require('cljs.reader');
goog.require('goog.async.Debouncer');
nw_calculator.utilities.localize_external_img = (function nw_calculator$utilities$localize_external_img(url){
var G__13958 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(url,/\//);
var G__13958__$1 = (((G__13958 == null))?null:cljs.core.last(G__13958));
if((G__13958__$1 == null)){
return null;
} else {
return ["/images/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13958__$1)].join('');
}
});
nw_calculator.utilities.no_op = (function nw_calculator$utilities$no_op(var_args){
var args__4824__auto__ = [];
var len__4818__auto___13960 = arguments.length;
var i__4819__auto___13961 = (0);
while(true){
if((i__4819__auto___13961 < len__4818__auto___13960)){
args__4824__auto__.push((arguments[i__4819__auto___13961]));

var G__13962 = (i__4819__auto___13961 + (1));
i__4819__auto___13961 = G__13962;
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
(nw_calculator.utilities.no_op.cljs$lang$applyTo = (function (seq13959){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13959));
}));

nw_calculator.utilities.debounce = (function nw_calculator$utilities$debounce(f,interval){
var dbnc = (new goog.async.Debouncer(f,interval));
return (function() { 
var G__13963__delegate = function (args){
return dbnc.fire.apply(dbnc,cljs.core.to_array(args));
};
var G__13963 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13964__i = 0, G__13964__a = new Array(arguments.length -  0);
while (G__13964__i < G__13964__a.length) {G__13964__a[G__13964__i] = arguments[G__13964__i + 0]; ++G__13964__i;}
  args = new cljs.core.IndexedSeq(G__13964__a,0,null);
} 
return G__13963__delegate.call(this,args);};
G__13963.cljs$lang$maxFixedArity = 0;
G__13963.cljs$lang$applyTo = (function (arglist__13965){
var args = cljs.core.seq(arglist__13965);
return G__13963__delegate(args);
});
G__13963.cljs$core$IFn$_invoke$arity$variadic = G__13963__delegate;
return G__13963;
})()
;
});
nw_calculator.utilities.fuzzy_search = (function nw_calculator$utilities$fuzzy_search(items,substr){
var fuse = (new Fuse(cljs.core.clj__GT_js(items),({"threshold": 0.15, "useExtendedSearch": true})));
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__13966_SHARP_){
return p1__13966_SHARP_.item;
})),fuse.search(substr));
});
nw_calculator.utilities.short_uuid_str = (function nw_calculator$utilities$short_uuid_str(){
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.take.cljs$core$IFn$_invoke$arity$2((8),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())));
});
nw_calculator.utilities.remove_self_from_ingredients = (function nw_calculator$utilities$remove_self_from_ingredients(p__13968){
var map__13969 = p__13968;
var map__13969__$1 = cljs.core.__destructure_map(map__13969);
var item = map__13969__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13969__$1,cljs.core.cst$kw$id);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(item,cljs.core.cst$kw$ingredients,(function (ingredients){
return cljs.core.set(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__13967_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__13967_SHARP_),id);
}),ingredients));
}));
});
nw_calculator.utilities.get_ingredients = cljs.core.memoize((function (item,items_by_id){
return clojure.walk.prewalk((function (p__13970){
var map__13971 = p__13970;
var map__13971__$1 = cljs.core.__destructure_map(map__13971);
var node = map__13971__$1;
var amount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13971__$1,cljs.core.cst$kw$amount);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13971__$1,cljs.core.cst$kw$id);
var ingredient_QMARK_ = (function (){var and__4210__auto__ = cljs.core.map_QMARK_(node);
if(and__4210__auto__){
return amount;
} else {
return and__4210__auto__;
}
})();
if(cljs.core.truth_(ingredient_QMARK_)){
return nw_calculator.utilities.remove_self_from_ingredients(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([node,cljs.core.get.cljs$core$IFn$_invoke$arity$2(items_by_id,id)], 0)));
} else {
return node;
}
}),nw_calculator.utilities.remove_self_from_ingredients(item));
}));
nw_calculator.utilities.multiply_amounts = cljs.core.memoize((function() {
var G__13977 = null;
var G__13977__1 = (function (item){
return (nw_calculator.utilities.multiply_amounts.cljs$core$IFn$_invoke$arity$2 ? nw_calculator.utilities.multiply_amounts.cljs$core$IFn$_invoke$arity$2(item,(1)) : nw_calculator.utilities.multiply_amounts.call(null,item,(1)));
});
var G__13977__2 = (function (p__13973,multiplier){
var map__13974 = p__13973;
var map__13974__$1 = cljs.core.__destructure_map(map__13974);
var item = map__13974__$1;
var amount = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__13974__$1,cljs.core.cst$kw$amount,(1));
var xp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13974__$1,cljs.core.cst$kw$xp);
var ingredients = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13974__$1,cljs.core.cst$kw$ingredients);
var product = (multiplier * amount);
var G__13975 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__13976 = item;
if(cljs.core.truth_(cljs.core.not_empty(ingredients))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__13976,cljs.core.cst$kw$ingredients,cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__13972_SHARP_){
return (nw_calculator.utilities.multiply_amounts.cljs$core$IFn$_invoke$arity$2 ? nw_calculator.utilities.multiply_amounts.cljs$core$IFn$_invoke$arity$2(p1__13972_SHARP_,product) : nw_calculator.utilities.multiply_amounts.call(null,p1__13972_SHARP_,product));
})),ingredients));
} else {
return G__13976;
}
})(),cljs.core.cst$kw$amount,product);
if(typeof xp === 'number'){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__13975,cljs.core.cst$kw$xp,(product * xp));
} else {
return G__13975;
}
});
G__13977 = function(p__13973,multiplier){
switch(arguments.length){
case 1:
return G__13977__1.call(this,p__13973);
case 2:
return G__13977__2.call(this,p__13973,multiplier);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13977.cljs$core$IFn$_invoke$arity$1 = G__13977__1;
G__13977.cljs$core$IFn$_invoke$arity$2 = G__13977__2;
return G__13977;
})()
);
nw_calculator.utilities.craftable_item = (function nw_calculator$utilities$craftable_item(p__13978){
var map__13979 = p__13978;
var map__13979__$1 = cljs.core.__destructure_map(map__13979);
var item = map__13979__$1;
var ingredients = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13979__$1,cljs.core.cst$kw$ingredients);
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
nw_calculator.utilities.get_local_storage = (function nw_calculator$utilities$get_local_storage(k){
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(window.localStorage.getItem(k));
});
nw_calculator.utilities.set_local_storage_BANG_ = (function nw_calculator$utilities$set_local_storage_BANG_(k,v){
return window.localStorage.setItem(k,v);
});
