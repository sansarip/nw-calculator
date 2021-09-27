// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('nw_calculator.components.copy_link.component');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
nw_calculator.components.copy_link.component.global$module$react = goog.global["React"];
nw_calculator.components.copy_link.component.default_button_text = " Copy link";
nw_calculator.components.copy_link.component.link_copied_text = " Link copied!";
nw_calculator.components.copy_link.component.copy_link = (function nw_calculator$components$copy_link$component$copy_link(){
var vec__30857 = nw_calculator.components.copy_link.component.global$module$react.useState(nw_calculator.components.copy_link.component.default_button_text);
var button_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30857,(0),null);
var set_button_text_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30857,(1),null);
var with_let30860 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let30860);
var temp__5757__auto___30865 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___30865 == null)){
} else {
var c__14347__auto___30866 = temp__5757__auto___30865;
if((with_let30860.generation === c__14347__auto___30866.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let30860.generation = c__14347__auto___30866.ratomGeneration);
}

var init30861 = (with_let30860.length === (0));
var copy_link_BANG_ = ((((init30861) || (cljs.core.not(with_let30860.hasOwnProperty((0))))))?(with_let30860[(0)] = (function (){
navigator.clipboard.writeText(location);

return (set_button_text_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_button_text_BANG_.cljs$core$IFn$_invoke$arity$1(nw_calculator.components.copy_link.component.link_copied_text) : set_button_text_BANG_.call(null,nw_calculator.components.copy_link.component.link_copied_text));
})):(with_let30860[(0)]));
var res30862 = (function (){
var G__30863_30867 = (function (){
var timeout = setTimeout((function (){
return (set_button_text_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_button_text_BANG_.cljs$core$IFn$_invoke$arity$1(nw_calculator.components.copy_link.component.default_button_text) : set_button_text_BANG_.call(null,nw_calculator.components.copy_link.component.default_button_text));
}),(1000));
return (function (){
return clearTimeout(timeout);
});
});
var G__30864_30868 = [button_text];
nw_calculator.components.copy_link.component.global$module$react.useEffect(G__30863_30867,G__30864_30868);

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$button$w_DASH_64,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,copy_link_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fas$fa_DASH_link], null),button_text], null);
})()
;
return res30862;
});
