// Compiled by ClojureScript 1.10.879 {:optimizations :none}
goog.provide('day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.util');
goog.require('cljs.core');
goog.require('clojure.string');
/**
 * Given a style factory function, return an appropriate name for its
 * style. This function assumes it will be called *once* for any given
 * factory; subsequent calls for the same factory *may not* return the
 * same value (especially under :simple optimizations).
 */
day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.util.factory__GT_name = (function day8$re_frame_10x$inlined_deps$spade$git_sha_93ef290$util$factory__GT_name(factory){
var given_name = factory.name;
if(cljs.core.empty_QMARK_.call(null,given_name)){
return cljs.core.name.call(null,cljs.core.gensym.call(null,"SPD"));
} else {
return clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,given_name,/[_-]factory\$/,""),/[_$]/,"-"),/^-/,"_");
}
});
day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.util.sanitize = (function day8$re_frame_10x$inlined_deps$spade$git_sha_93ef290$util$sanitize(s){
return clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),/[^A-Za-z0-9-_]/,"-");
});
day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.util.params__GT_key = (function day8$re_frame_10x$inlined_deps$spade$git_sha_93ef290$util$params__GT_key(p){
try{return cljs.core.hash.call(null,p);
}catch (e35758){var _ = e35758;
return null;
}});
day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.util.build_style_name = (function day8$re_frame_10x$inlined_deps$spade$git_sha_93ef290$util$build_style_name(base,style_key,params){
if(cljs.core.truth_(style_key)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(base),"_",day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.util.sanitize.call(null,style_key)].join('');
} else {
if(cljs.core.seq.call(null,params)){
var temp__5751__auto__ = day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.util.params__GT_key.call(null,params);
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
