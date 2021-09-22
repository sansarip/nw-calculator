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
nw_calculator.utilities.fuzzy_search = (function nw_calculator$utilities$fuzzy_search(items,substr){
var fuse = (new Fuse(cljs.core.clj__GT_js(items),({"threshold": 0.15, "useExtendedSearch": true})));
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__13468_SHARP_){
return p1__13468_SHARP_.item;
})),fuse.search(substr));
});
nw_calculator.utilities.short_uuid_str = (function nw_calculator$utilities$short_uuid_str(){
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.take.cljs$core$IFn$_invoke$arity$2((8),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())));
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
