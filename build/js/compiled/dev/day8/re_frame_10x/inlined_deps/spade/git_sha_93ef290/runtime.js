// Compiled by ClojureScript 1.10.879 {:optimizations :none}
goog.provide('day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.runtime');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core');
goog.require('day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types');
goog.require('day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.container');
goog.require('day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.runtime.defaults');
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.spade !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.runtime !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.runtime._STAR_css_compile_flags_STAR_ !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.runtime._STAR_css_compile_flags_STAR_ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pretty-print?","pretty-print?",1932217158),goog.DEBUG], null);
}
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.spade !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.runtime !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.runtime._STAR_style_container_STAR_ !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.runtime._STAR_style_container_STAR_ = day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.runtime.defaults.create_container.call(null);
}
day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.runtime.__GT_css_var = (function day8$re_frame_10x$inlined_deps$spade$git_sha_93ef290$runtime$__GT_css_var(n){
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.__GT_CSSFunction.call(null,"var",n);
});
day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.runtime.compile_css = (function day8$re_frame_10x$inlined_deps$spade$git_sha_93ef290$runtime$compile_css(elements){
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.css.call(null,day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.runtime._STAR_css_compile_flags_STAR_,elements);
});
day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.runtime.compose_names = (function day8$re_frame_10x$inlined_deps$spade$git_sha_93ef290$runtime$compose_names(p__35769){
var map__35770 = p__35769;
var map__35770__$1 = cljs.core.__destructure_map.call(null,map__35770);
var style_name = cljs.core.get.call(null,map__35770__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var composed = cljs.core.get.call(null,map__35770__$1,new cljs.core.Keyword(null,"composes","composes",-378837833));
if(cljs.core.not.call(null,composed)){
return style_name;
} else {
return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (item){
if(typeof item === 'string'){
return item;
} else {
if(((cljs.core.map_QMARK_.call(null,item)) && (typeof new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(item) === 'string'))){
return new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(item);
} else {
throw cljs.core.ex_info.call(null,["Invalid argument to :composes key:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(item)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style-name","style-name",977914017),style_name,new cljs.core.Keyword(null,"value","value",305978217),item], null));

}
}
}),((cljs.core.seq_QMARK_.call(null,composed))?cljs.core.into.call(null,composed,style_name):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [composed,style_name], null))));
}
});
day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.runtime.ensure_style_BANG_ = (function day8$re_frame_10x$inlined_deps$spade$git_sha_93ef290$runtime$ensure_style_BANG_(mode,base_style_name,factory,params){
var map__35771 = cljs.core.apply.call(null,factory,base_style_name,params,params);
var map__35771__$1 = cljs.core.__destructure_map.call(null,map__35771);
var info = map__35771__$1;
var css = cljs.core.get.call(null,map__35771__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var style_name = cljs.core.get.call(null,map__35771__$1,new cljs.core.Keyword(null,"name","name",1843675177));
day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.container.mount_style_BANG_.call(null,day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.runtime._STAR_style_container_STAR_,style_name,css);

var G__35772 = mode;
var G__35772__$1 = (((G__35772 instanceof cljs.core.Keyword))?G__35772.fqn:null);
switch (G__35772__$1) {
case "attrs":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.runtime.compose_names.call(null,info)], null);

break;
case "class":
case "keyframes":
return day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.runtime.compose_names.call(null,info);

break;
case "global":
return css;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35772__$1)].join('')));

}
});

//# sourceMappingURL=runtime.js.map
