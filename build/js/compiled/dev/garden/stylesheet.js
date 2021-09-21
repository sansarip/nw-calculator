// Compiled by ClojureScript 1.10.879 {:optimizations :none}
goog.provide('garden.stylesheet');
goog.require('cljs.core');
goog.require('garden.util');
goog.require('garden.color');
goog.require('garden.types');
/**
 * Create a rule function for the given selector. The `selector`
 *   argument must be valid selector (ie. a keyword, string, or symbol).
 *   Additional arguments may consist of extra selectors or
 *   declarations.
 * 
 *   The returned function accepts any number of arguments which represent
 *   the rule's children.
 * 
 *   Ex.
 *    (let [text-field (rule "[type="text"])]
 *     (text-field {:border ["1px" :solid "black"]}))
 *    ;; => ["[type="text"] {:boder ["1px" :solid "black"]}]
 */
garden.stylesheet.rule = (function garden$stylesheet$rule(var_args){
var args__4824__auto__ = [];
var len__4818__auto___29356 = arguments.length;
var i__4819__auto___29357 = (0);
while(true){
if((i__4819__auto___29357 < len__4818__auto___29356)){
args__4824__auto__.push((arguments[i__4819__auto___29357]));

var G__29358 = (i__4819__auto___29357 + (1));
i__4819__auto___29357 = G__29358;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic = (function (selector,more){
if((!((((selector instanceof cljs.core.Keyword)) || (((typeof selector === 'string') || ((selector instanceof cljs.core.Symbol)))))))){
throw cljs.core.ex_info.call(null,"Selector must be either a keyword, string, or symbol.",cljs.core.PersistentArrayMap.EMPTY);
} else {
return (function() { 
var G__29359__delegate = function (children){
return cljs.core.into.call(null,cljs.core.apply.call(null,cljs.core.vector,selector,more),children);
};
var G__29359 = function (var_args){
var children = null;
if (arguments.length > 0) {
var G__29360__i = 0, G__29360__a = new Array(arguments.length -  0);
while (G__29360__i < G__29360__a.length) {G__29360__a[G__29360__i] = arguments[G__29360__i + 0]; ++G__29360__i;}
  children = new cljs.core.IndexedSeq(G__29360__a,0,null);
} 
return G__29359__delegate.call(this,children);};
G__29359.cljs$lang$maxFixedArity = 0;
G__29359.cljs$lang$applyTo = (function (arglist__29361){
var children = cljs.core.seq(arglist__29361);
return G__29359__delegate(children);
});
G__29359.cljs$core$IFn$_invoke$arity$variadic = G__29359__delegate;
return G__29359;
})()
;
}
}));

(garden.stylesheet.rule.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.stylesheet.rule.cljs$lang$applyTo = (function (seq29354){
var G__29355 = cljs.core.first.call(null,seq29354);
var seq29354__$1 = cljs.core.next.call(null,seq29354);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29355,seq29354__$1);
}));

garden.stylesheet.cssfn = (function garden$stylesheet$cssfn(fn_name){
return (function() { 
var G__29362__delegate = function (args){
return (new garden.types.CSSFunction(fn_name,args,null,null,null));
};
var G__29362 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29363__i = 0, G__29363__a = new Array(arguments.length -  0);
while (G__29363__i < G__29363__a.length) {G__29363__a[G__29363__i] = arguments[G__29363__i + 0]; ++G__29363__i;}
  args = new cljs.core.IndexedSeq(G__29363__a,0,null);
} 
return G__29362__delegate.call(this,args);};
G__29362.cljs$lang$maxFixedArity = 0;
G__29362.cljs$lang$applyTo = (function (arglist__29364){
var args = cljs.core.seq(arglist__29364);
return G__29362__delegate(args);
});
G__29362.cljs$core$IFn$_invoke$arity$variadic = G__29362__delegate;
return G__29362;
})()
;
});
garden.stylesheet.at_rule = (function garden$stylesheet$at_rule(identifier,value){
return (new garden.types.CSSAtRule(identifier,value,null,null,null));
});
/**
 * Create a CSS @font-face rule.
 */
garden.stylesheet.at_font_face = (function garden$stylesheet$at_font_face(var_args){
var args__4824__auto__ = [];
var len__4818__auto___29366 = arguments.length;
var i__4819__auto___29367 = (0);
while(true){
if((i__4819__auto___29367 < len__4818__auto___29366)){
args__4824__auto__.push((arguments[i__4819__auto___29367]));

var G__29368 = (i__4819__auto___29367 + (1));
i__4819__auto___29367 = G__29368;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic = (function (font_properties){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["@font-face",font_properties], null);
}));

(garden.stylesheet.at_font_face.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(garden.stylesheet.at_font_face.cljs$lang$applyTo = (function (seq29365){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29365));
}));

/**
 * Create a CSS @import rule.
 */
garden.stylesheet.at_import = (function garden$stylesheet$at_import(var_args){
var G__29372 = arguments.length;
switch (G__29372) {
case 1:
return garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4839__auto__ = [];
var len__4818__auto___29374 = arguments.length;
var i__4819__auto___29375 = (0);
while(true){
if((i__4819__auto___29375 < len__4818__auto___29374)){
args_arr__4839__auto__.push((arguments[i__4819__auto___29375]));

var G__29376 = (i__4819__auto___29375 + (1));
i__4819__auto___29375 = G__29376;
continue;
} else {
}
break;
}

var argseq__4840__auto__ = (new cljs.core.IndexedSeq(args_arr__4839__auto__.slice((1)),(0),null));
return garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4840__auto__);

}
});

(garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1 = (function (url){
return garden.stylesheet.at_rule.call(null,new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),null], null));
}));

(garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic = (function (url,media_queries){
return garden.stylesheet.at_rule.call(null,new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries], null));
}));

/** @this {Function} */
(garden.stylesheet.at_import.cljs$lang$applyTo = (function (seq29370){
var G__29371 = cljs.core.first.call(null,seq29370);
var seq29370__$1 = cljs.core.next.call(null,seq29370);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29371,seq29370__$1);
}));

(garden.stylesheet.at_import.cljs$lang$maxFixedArity = (1));

/**
 * Create a CSS @media rule.
 */
garden.stylesheet.at_media = (function garden$stylesheet$at_media(var_args){
var args__4824__auto__ = [];
var len__4818__auto___29379 = arguments.length;
var i__4819__auto___29380 = (0);
while(true){
if((i__4819__auto___29380 < len__4818__auto___29379)){
args__4824__auto__.push((arguments[i__4819__auto___29380]));

var G__29381 = (i__4819__auto___29380 + (1));
i__4819__auto___29380 = G__29381;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic = (function (media_queries,rules){
return garden.stylesheet.at_rule.call(null,new cljs.core.Keyword(null,"media","media",-1066138403),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries,new cljs.core.Keyword(null,"rules","rules",1198912366),rules], null));
}));

(garden.stylesheet.at_media.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.stylesheet.at_media.cljs$lang$applyTo = (function (seq29377){
var G__29378 = cljs.core.first.call(null,seq29377);
var seq29377__$1 = cljs.core.next.call(null,seq29377);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29378,seq29377__$1);
}));

garden.stylesheet.at_supports = (function garden$stylesheet$at_supports(var_args){
var args__4824__auto__ = [];
var len__4818__auto___29384 = arguments.length;
var i__4819__auto___29385 = (0);
while(true){
if((i__4819__auto___29385 < len__4818__auto___29384)){
args__4824__auto__.push((arguments[i__4819__auto___29385]));

var G__29386 = (i__4819__auto___29385 + (1));
i__4819__auto___29385 = G__29386;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_supports.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(garden.stylesheet.at_supports.cljs$core$IFn$_invoke$arity$variadic = (function (feature_queries,rules){

return garden.stylesheet.at_rule.call(null,new cljs.core.Keyword(null,"feature","feature",27242652),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"feature-queries","feature-queries",-1340998408),feature_queries,new cljs.core.Keyword(null,"rules","rules",1198912366),rules], null));
}));

(garden.stylesheet.at_supports.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.stylesheet.at_supports.cljs$lang$applyTo = (function (seq29382){
var G__29383 = cljs.core.first.call(null,seq29382);
var seq29382__$1 = cljs.core.next.call(null,seq29382);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29383,seq29382__$1);
}));

/**
 * Create a CSS @keyframes rule.
 */
garden.stylesheet.at_keyframes = (function garden$stylesheet$at_keyframes(var_args){
var args__4824__auto__ = [];
var len__4818__auto___29389 = arguments.length;
var i__4819__auto___29390 = (0);
while(true){
if((i__4819__auto___29390 < len__4818__auto___29389)){
args__4824__auto__.push((arguments[i__4819__auto___29390]));

var G__29391 = (i__4819__auto___29390 + (1));
i__4819__auto___29390 = G__29391;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic = (function (identifier,frames){
return garden.stylesheet.at_rule.call(null,new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"identifier","identifier",-805503498),identifier,new cljs.core.Keyword(null,"frames","frames",1765687497),frames], null));
}));

(garden.stylesheet.at_keyframes.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.stylesheet.at_keyframes.cljs$lang$applyTo = (function (seq29387){
var G__29388 = cljs.core.first.call(null,seq29387);
var seq29387__$1 = cljs.core.next.call(null,seq29387);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29388,seq29387__$1);
}));

/**
 * Create a color from RGB values.
 */
garden.stylesheet.rgb = (function garden$stylesheet$rgb(r,g,b){
return garden.color.rgb.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null));
});
/**
 * Create a color from HSL values.
 */
garden.stylesheet.hsl = (function garden$stylesheet$hsl(h,s,l){
return garden.color.hsl.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,s,l], null));
});

//# sourceMappingURL=stylesheet.js.map
