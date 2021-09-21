// Compiled by ClojureScript 1.10.879 {:optimizations :none}
goog.provide('nw_calculator.components.multiplication.component');
goog.require('cljs.core');
goog.require('react');
goog.require('reagent.core');
goog.require('nw_calculator.components.multiplication.styles');
goog.require('nw_calculator.utilities');
nw_calculator.components.multiplication.component.global$module$react = goog.global["React"];
nw_calculator.components.multiplication.component.multiplication = (function nw_calculator$components$multiplication$component$multiplication(p__93916){
var map__93917 = p__93916;
var map__93917__$1 = cljs.core.__destructure_map.call(null,map__93917);
var map__93918 = cljs.core.get.call(null,map__93917__$1,new cljs.core.Keyword(null,"input-props","input-props",-1504868202));
var map__93918__$1 = cljs.core.__destructure_map.call(null,map__93918);
var input_props = map__93918__$1;
var on_input = cljs.core.get.call(null,map__93918__$1,new cljs.core.Keyword(null,"on-input","on-input",-267523366));
var base = cljs.core.get.call(null,map__93917__$1,new cljs.core.Keyword(null,"base","base",185279322));
var container_props = cljs.core.get.call(null,map__93917__$1,new cljs.core.Keyword(null,"container-props","container-props",-1692729191));
var vec__93919 = nw_calculator.components.multiplication.component.global$module$react.useState((1));
var multiplier = cljs.core.nth.call(null,vec__93919,(0),null);
var set_multiplier_BANG_ = cljs.core.nth.call(null,vec__93919,(1),null);
var input_ref = nw_calculator.components.multiplication.component.global$module$react.useRef();
var with_let93922 = reagent.ratom.with_let_values.call(null,new cljs.core.Keyword(null,"with-let93922","with-let93922",-1601431529));
var temp__5757__auto___93925 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___93925 == null)){
} else {
var c__8384__auto___93926 = temp__5757__auto___93925;
if((with_let93922.generation === c__8384__auto___93926.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let93922.generation = c__8384__auto___93926.ratomGeneration);
}

var init93923 = (with_let93922.length === (0));
var on_input_STAR_ = ((((init93923) || (cljs.core.not.call(null,with_let93922.hasOwnProperty((0))))))?(with_let93922[(0)] = (function (event){
set_multiplier_BANG_.call(null,nw_calculator.utilities.parse_pos.call(null,event.target.value));

return on_input.call(null,event);
})):(with_let93922[(0)]));
var res93924 = (function (){
nw_calculator.components.multiplication.component.global$module$react.useEffect((function (){
var temp__5753__auto___93927 = input_ref.current;
if(cljs.core.truth_(temp__5753__auto___93927)){
var input_ele_93928 = temp__5753__auto___93927;
set_multiplier_BANG_.call(null,nw_calculator.utilities.parse_pos.call(null,input_ele_93928.defaultValue));
} else {
}

return nw_calculator.utilities.no_op;
}),[input_ref]);

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.relative.w-16.flex.justify-end.items.center","div.relative.w-16.flex.justify-end.items.center",848405334),reagent.core.merge_props.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),nw_calculator.components.multiplication.styles.multiplication_class.call(null)], null),container_props),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.basic-input.text-right.multiplier","input.basic-input.text-right.multiplier",-1546557438),reagent.core.merge_props.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"1",new cljs.core.Keyword(null,"ref","ref",1289896967),input_ref,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Keyword(null,"on-input","on-input",-267523366),on_input_STAR_,new cljs.core.Keyword(null,"default-value","default-value",232220170),multiplier], null),cljs.core.dissoc.call(null,input_props,new cljs.core.Keyword(null,"on-input","on-input",-267523366),new cljs.core.Keyword(null,"ref","ref",1289896967)))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w-full.flex.flex-col.absolute","div.w-full.flex.flex-col.absolute",-168489670),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"-bottom-20"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w-full.flex.justify-between.gap-2","div.w-full.flex.justify-between.gap-2",-2085040933),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.flex.flex-col.justify-center.text-xl.fal.fa-times","i.flex.flex-col.justify-center.text-xl.fal.fa-times",1510452159)], null),base], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w-full.flex.justify-between.gap-2","div.w-full.flex.justify-between.gap-2",-2085040933),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.flex.flex-col.justify-center.text-xl.fal.fa-equals","i.flex.flex-col.justify-center.text-xl.fal.fa-equals",16309627)], null),(multiplier * base)], null)], null)], null);
})()
;
return res93924;
});

//# sourceMappingURL=component.js.map
