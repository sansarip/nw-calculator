// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('nw_calculator.utilities');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('clojure.walk');
goog.require('cljs.reader');
goog.require('goog.async.Debouncer');
nw_calculator.utilities.localize_external_img = (function nw_calculator$utilities$localize_external_img(url){
var G__12641 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(url,/\//);
var G__12641__$1 = (((G__12641 == null))?null:cljs.core.last(G__12641));
if((G__12641__$1 == null)){
return null;
} else {
return ["/images/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12641__$1)].join('');
}
});
nw_calculator.utilities.no_op = (function nw_calculator$utilities$no_op(var_args){
var args__4824__auto__ = [];
var len__4818__auto___12643 = arguments.length;
var i__4819__auto___12644 = (0);
while(true){
if((i__4819__auto___12644 < len__4818__auto___12643)){
args__4824__auto__.push((arguments[i__4819__auto___12644]));

var G__12645 = (i__4819__auto___12644 + (1));
i__4819__auto___12644 = G__12645;
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
(nw_calculator.utilities.no_op.cljs$lang$applyTo = (function (seq12642){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12642));
}));

nw_calculator.utilities.debounce = (function nw_calculator$utilities$debounce(f,interval){
var dbnc = (new goog.async.Debouncer(f,interval));
return (function() { 
var G__12646__delegate = function (args){
return dbnc.fire.apply(dbnc,cljs.core.to_array(args));
};
var G__12646 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12647__i = 0, G__12647__a = new Array(arguments.length -  0);
while (G__12647__i < G__12647__a.length) {G__12647__a[G__12647__i] = arguments[G__12647__i + 0]; ++G__12647__i;}
  args = new cljs.core.IndexedSeq(G__12647__a,0,null);
} 
return G__12646__delegate.call(this,args);};
G__12646.cljs$lang$maxFixedArity = 0;
G__12646.cljs$lang$applyTo = (function (arglist__12648){
var args = cljs.core.seq(arglist__12648);
return G__12646__delegate(args);
});
G__12646.cljs$core$IFn$_invoke$arity$variadic = G__12646__delegate;
return G__12646;
})()
;
});
nw_calculator.utilities.fuzzy_search = (function nw_calculator$utilities$fuzzy_search(items,substr){
var fuse = (new Fuse(cljs.core.clj__GT_js(items),({"threshold": 0.15, "useExtendedSearch": true})));
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__12649_SHARP_){
return p1__12649_SHARP_.item;
})),fuse.search(substr));
});
nw_calculator.utilities.short_uuid_str = (function nw_calculator$utilities$short_uuid_str(){
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.take.cljs$core$IFn$_invoke$arity$2((8),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())));
});
nw_calculator.utilities.remove_self_from_ingredients = (function nw_calculator$utilities$remove_self_from_ingredients(p__12651){
var map__12652 = p__12651;
var map__12652__$1 = cljs.core.__destructure_map(map__12652);
var item = map__12652__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12652__$1,cljs.core.cst$kw$id);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(item,cljs.core.cst$kw$ingredients,(function (ingredients){
return cljs.core.set(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__12650_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__12650_SHARP_),id);
}),ingredients));
}));
});
nw_calculator.utilities.get_ingredients = cljs.core.memoize((function (item,items_by_id){
return clojure.walk.prewalk((function (p__12653){
var map__12654 = p__12653;
var map__12654__$1 = cljs.core.__destructure_map(map__12654);
var node = map__12654__$1;
var amount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12654__$1,cljs.core.cst$kw$amount);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12654__$1,cljs.core.cst$kw$id);
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
var G__12659 = null;
var G__12659__1 = (function (item){
return (nw_calculator.utilities.multiply_amounts.cljs$core$IFn$_invoke$arity$2 ? nw_calculator.utilities.multiply_amounts.cljs$core$IFn$_invoke$arity$2(item,(1)) : nw_calculator.utilities.multiply_amounts.call(null,item,(1)));
});
var G__12659__2 = (function (p__12656,multiplier){
var map__12657 = p__12656;
var map__12657__$1 = cljs.core.__destructure_map(map__12657);
var item = map__12657__$1;
var amount = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12657__$1,cljs.core.cst$kw$amount,(1));
var ingredients = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12657__$1,cljs.core.cst$kw$ingredients);
var product = (multiplier * amount);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__12658 = item;
if(cljs.core.truth_(cljs.core.not_empty(ingredients))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__12658,cljs.core.cst$kw$ingredients,cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__12655_SHARP_){
return (nw_calculator.utilities.multiply_amounts.cljs$core$IFn$_invoke$arity$2 ? nw_calculator.utilities.multiply_amounts.cljs$core$IFn$_invoke$arity$2(p1__12655_SHARP_,product) : nw_calculator.utilities.multiply_amounts.call(null,p1__12655_SHARP_,product));
})),ingredients));
} else {
return G__12658;
}
})(),cljs.core.cst$kw$amount,product);
});
G__12659 = function(p__12656,multiplier){
switch(arguments.length){
case 1:
return G__12659__1.call(this,p__12656);
case 2:
return G__12659__2.call(this,p__12656,multiplier);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12659.cljs$core$IFn$_invoke$arity$1 = G__12659__1;
G__12659.cljs$core$IFn$_invoke$arity$2 = G__12659__2;
return G__12659;
})()
);
nw_calculator.utilities.craftable_item = (function nw_calculator$utilities$craftable_item(p__12660){
var map__12661 = p__12660;
var map__12661__$1 = cljs.core.__destructure_map(map__12661);
var item = map__12661__$1;
var ingredients = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12661__$1,cljs.core.cst$kw$ingredients);
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
