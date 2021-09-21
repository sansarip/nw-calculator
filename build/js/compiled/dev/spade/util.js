// Compiled by ClojureScript 1.10.879 {:optimizations :none}
goog.provide('spade.util');
goog.require('cljs.core');
goog.require('clojure.string');
/**
 * Given a style factory function, return an appropriate name for its
 * style. This function assumes it will be called *once* for any given
 * factory; subsequent calls for the same factory *may not* return the
 * same value (especially under :simple optimizations).
 */
spade.util.factory__GT_name = (function spade$util$factory__GT_name(factory){
var given_name = factory.name;
if(cljs.core.empty_QMARK_.call(null,given_name)){
return cljs.core.name.call(null,cljs.core.gensym.call(null,"SPD"));
} else {
return clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,given_name,"_factory$",""),/[_$]/,"-"),/^-/,"_");
}
});
spade.util.sanitize = (function spade$util$sanitize(s){
return clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),/[^A-Za-z0-9-_]/,"-");
});
spade.util.params__GT_key = (function spade$util$params__GT_key(p){
try{return cljs.core.hash.call(null,p);
}catch (e29394){var _ = e29394;
return null;
}});
spade.util.build_style_name = (function spade$util$build_style_name(base,style_key,params){
if(cljs.core.truth_(style_key)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(base),"_",spade.util.sanitize.call(null,style_key)].join('');
} else {
if(cljs.core.seq.call(null,params)){
var temp__5751__auto__ = spade.util.params__GT_key.call(null,params);
if(cljs.core.truth_(temp__5751__auto__)){
var pkey = temp__5751__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(base),"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pkey)].join('');
} else {
var msg = ["WARNING: no key provided for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(base)].join('');
console.warn(msg);

return base;
}
} else {
return base;

}
}
});

//# sourceMappingURL=util.js.map
