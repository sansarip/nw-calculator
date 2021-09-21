// Compiled by ClojureScript 1.10.879 {:optimizations :none}
goog.provide('nw_calculator.components.animated_multiplier.component');
goog.require('cljs.core');
goog.require('react');
goog.require('reagent.core');
goog.require('nw_calculator.components.animated_multiplier.styles');
nw_calculator.components.animated_multiplier.component.global$module$react = goog.global["React"];
nw_calculator.components.animated_multiplier.component.get_svg_path = (function nw_calculator$components$animated_multiplier$component$get_svg_path(icon_ele){
var G__74551 = icon_ele;
var G__74551__$1 = (((G__74551 == null))?null:G__74551.children);
var G__74551__$2 = (((G__74551__$1 == null))?null:(G__74551__$1[(0)]));
var G__74551__$3 = (((G__74551__$2 == null))?null:G__74551__$2.children);
if((G__74551__$3 == null)){
return null;
} else {
return (G__74551__$3[(0)]);
}
});
nw_calculator.components.animated_multiplier.component.animated_multiplier = (function nw_calculator$components$animated_multiplier$component$animated_multiplier(){
var with_let74552 = reagent.ratom.with_let_values.call(null,new cljs.core.Keyword(null,"with-let74552","with-let74552",1453160690));
var temp__5757__auto___74555 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___74555 == null)){
} else {
var c__8434__auto___74556 = temp__5757__auto___74555;
if((with_let74552.generation === c__8434__auto___74556.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let74552.generation = c__8434__auto___74556.ratomGeneration);
}

var init74553 = (with_let74552.length === (0));
var icon_ref = ((((init74553) || (cljs.core.not.call(null,with_let74552.hasOwnProperty((0))))))?(with_let74552[(0)] = nw_calculator.components.animated_multiplier.component.global$module$react.useRef()):(with_let74552[(0)]));
var observer = ((((init74553) || (cljs.core.not.call(null,with_let74552.hasOwnProperty((1))))))?(with_let74552[(1)] = (new MutationObserver((function (){
return anime(({"targets": [nw_calculator.components.animated_multiplier.component.get_svg_path.call(null,icon_ref.current)], "strokeDashoffset": [anime.setDashoffset,(0)], "easing": "linear", "duration": (500), "delay": (0)}));
})))):(with_let74552[(1)]));
var res74554 = (function (){
nw_calculator.components.animated_multiplier.component.global$module$react.useEffect((function (){
observer.observe(icon_ref.current,({"childList": true}));

return (function (){
return observer.disconnect();
});
}),[]);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.far.fa-times","i.far.fa-times",-394889239),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),icon_ref,new cljs.core.Keyword(null,"class","class",-2030961996),nw_calculator.components.animated_multiplier.styles.animated_multiplier.call(null)], null)], null);
})()
;
return res74554;
});

//# sourceMappingURL=component.js.map
