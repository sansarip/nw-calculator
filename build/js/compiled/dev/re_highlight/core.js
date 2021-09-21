// Compiled by ClojureScript 1.10.879 {:optimizations :none}
goog.provide('re_highlight.core');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('highlight.js');
re_highlight.core.global$module$highlight$js = goog.global["hljs"];
re_highlight.core.highlight_element = goog.object.get(re_highlight.core.global$module$highlight$js,"highlightElement");
re_highlight.core.did_mount = (function re_highlight$core$did_mount(this$){
var temp__5753__auto__ = goog.object.get(reagent.dom.dom_node.call(null,this$),"firstChild");
if(cljs.core.truth_(temp__5753__auto__)){
var el = temp__5753__auto__;
return re_highlight.core.highlight_element.call(null,el);
} else {
return null;
}
});
re_highlight.core.did_update = (function re_highlight$core$did_update(this$,old_argv,old_state,snapshot){
var temp__5753__auto__ = goog.object.get(reagent.dom.dom_node.call(null,this$),"firstChild");
if(cljs.core.truth_(temp__5753__auto__)){
var el = temp__5753__auto__;
goog.object.set(goog.object.get(re_highlight.core.global$module$highlight$js,"initHighlighting"),"called",false);

return re_highlight.core.highlight_element.call(null,el);
} else {
return null;
}
});
re_highlight.core.render = (function re_highlight$core$render(var_args){
var args__4824__auto__ = [];
var len__4818__auto___38853 = arguments.length;
var i__4819__auto___38854 = (0);
while(true){
if((i__4819__auto___38854 < len__4818__auto___38853)){
args__4824__auto__.push((arguments[i__4819__auto___38854]));

var G__38855 = (i__4819__auto___38854 + (1));
i__4819__auto___38854 = G__38855;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return re_highlight.core.render.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(re_highlight.core.render.cljs$core$IFn$_invoke$arity$variadic = (function (p__38851,children){
var map__38852 = p__38851;
var map__38852__$1 = cljs.core.__destructure_map.call(null,map__38852);
var class$ = cljs.core.get.call(null,map__38852__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var style = cljs.core.get.call(null,map__38852__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var language = cljs.core.get.call(null,map__38852__$1,new cljs.core.Keyword(null,"language","language",-1591107564));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"style","style",-496642736),style], null),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),language], null)], null),children)], null);
}));

(re_highlight.core.render.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(re_highlight.core.render.cljs$lang$applyTo = (function (seq38849){
var G__38850 = cljs.core.first.call(null,seq38849);
var seq38849__$1 = cljs.core.next.call(null,seq38849);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38850,seq38849__$1);
}));

re_highlight.core.highlight = (function re_highlight$core$highlight(){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),re_highlight.core.did_mount,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),re_highlight.core.did_update,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),re_highlight.core.render], null));
});

//# sourceMappingURL=core.js.map
