// Compiled by ClojureScript 1.10.879 {:optimizations :none}
goog.provide('nw_calculator.components.toggle.component');
goog.require('cljs.core');
goog.require('nw_calculator.components.toggle.styles');
goog.require('reagent.core');
goog.require('nw_calculator.utilities');
nw_calculator.components.toggle.component.toggle = (function nw_calculator$components$toggle$component$toggle(var_args){
var args__4824__auto__ = [];
var len__4818__auto___29066 = arguments.length;
var i__4819__auto___29067 = (0);
while(true){
if((i__4819__auto___29067 < len__4818__auto___29066)){
args__4824__auto__.push((arguments[i__4819__auto___29067]));

var G__29068 = (i__4819__auto___29067 + (1));
i__4819__auto___29067 = G__29068;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return nw_calculator.components.toggle.component.toggle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(nw_calculator.components.toggle.component.toggle.cljs$core$IFn$_invoke$arity$variadic = (function (p__29061,children){
var map__29062 = p__29061;
var map__29062__$1 = cljs.core.__destructure_map.call(null,map__29062);
var container_props = cljs.core.get.call(null,map__29062__$1,new cljs.core.Keyword(null,"container-props","container-props",-1692729191));
var checkbox_props = cljs.core.get.call(null,map__29062__$1,new cljs.core.Keyword(null,"checkbox-props","checkbox-props",-1135429357));
var on = cljs.core.get.call(null,map__29062__$1,new cljs.core.Keyword(null,"on","on",173873944));
var off = cljs.core.get.call(null,map__29062__$1,new cljs.core.Keyword(null,"off","off",606440789));
var with_let29063 = reagent.ratom.with_let_values.call(null,new cljs.core.Keyword(null,"with-let29063","with-let29063",-2124736));
var temp__5757__auto___29069 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___29069 == null)){
} else {
var c__8434__auto___29070 = temp__5757__auto___29069;
if((with_let29063.generation === c__8434__auto___29070.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let29063.generation = c__8434__auto___29070.ratomGeneration);
}

var init29064 = (with_let29063.length === (0));
var input_id = ((((init29064) || (cljs.core.not.call(null,with_let29063.hasOwnProperty((0))))))?(with_let29063[(0)] = ["toggle_",nw_calculator.utilities.short_uuid_str.call(null)].join('')):(with_let29063[(0)]));
var res29065 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.block.relative.cursor-pointer.border-2.border-purple.border-opacity-100.rounded-full","label.block.relative.cursor-pointer.border-2.border-purple.border-opacity-100.rounded-full",1930443386),reagent.core.merge_props.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"for","for",-1323786319),input_id,new cljs.core.Keyword(null,"class","class",-2030961996),nw_calculator.components.toggle.styles.toggle_class.call(null)], null),container_props),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.sr-only","input.sr-only",1360892207),reagent.core.merge_props.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),input_id,new cljs.core.Keyword(null,"type","type",1174270348),"checkbox"], null),checkbox_props)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.absolute.ball.rounded-full.transition.z-50.bg-purple.bg-opacity-100","div.absolute.ball.rounded-full.transition.z-50.bg-purple.bg-opacity-100",813201567)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.on.absolute.w-6.h-6.flex.items-center.z-40","div.on.absolute.w-6.h-6.flex.items-center.z-40",-933820541),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"transform -translate-y-1/2 top-9/25"], null),on], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.off.absolute.w-6.h-6.flex.items-center.z-40","div.off.absolute.w-6.h-6.flex.items-center.z-40",-898246745),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"transform -translate-y-1/2 top-9/25"], null),off], null),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),children)], null);
return res29065;
}));

(nw_calculator.components.toggle.component.toggle.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(nw_calculator.components.toggle.component.toggle.cljs$lang$applyTo = (function (seq29059){
var G__29060 = cljs.core.first.call(null,seq29059);
var seq29059__$1 = cljs.core.next.call(null,seq29059);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29060,seq29059__$1);
}));


//# sourceMappingURL=component.js.map
