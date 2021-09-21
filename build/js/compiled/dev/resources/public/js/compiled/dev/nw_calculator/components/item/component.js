// Compiled by ClojureScript 1.10.879 {:optimizations :none}
goog.provide('nw_calculator.components.item.component');
goog.require('cljs.core');
goog.require('nw_calculator.utilities');
goog.require('reagent.core');
goog.require('clojure.string');
goog.require('cljstache.core');
goog.require('nw_calculator.components.item.styles');
goog.require('react');
nw_calculator.components.item.component.global$module$react = goog.global["React"];
nw_calculator.components.item.component.image_with_popup = (function nw_calculator$components$item$component$image_with_popup(p__93725){
var map__93726 = p__93725;
var map__93726__$1 = cljs.core.__destructure_map.call(null,map__93726);
var src = cljs.core.get.call(null,map__93726__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var disable_popup_QMARK_ = cljs.core.get.call(null,map__93726__$1,new cljs.core.Keyword(null,"disable-popup?","disable-popup?",-311006878));
var with_let93727 = reagent.ratom.with_let_values.call(null,new cljs.core.Keyword(null,"with-let93727","with-let93727",-417994392));
var temp__5757__auto___93739 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___93739 == null)){
} else {
var c__8384__auto___93740 = temp__5757__auto___93739;
if((with_let93727.generation === c__8384__auto___93740.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let93727.generation = c__8384__auto___93740.ratomGeneration);
}

var init93728 = (with_let93727.length === (0));
var popup_ele = ((((init93728) || (cljs.core.not.call(null,with_let93727.hasOwnProperty((0))))))?(with_let93727[(0)] = cljs.core.atom.call(null,null)):(with_let93727[(0)]));
var res93729 = (function (){var vec__93730 = nw_calculator.components.item.component.global$module$react.useState(null);
var popup_target_ele = cljs.core.nth.call(null,vec__93730,(0),null);
var set_popup_target_ele_BANG_ = cljs.core.nth.call(null,vec__93730,(1),null);
nw_calculator.components.item.component.global$module$react.useEffect((function (){
if(cljs.core.truth_((function (){var and__4210__auto__ = cljs.core.not.call(null,cljs.core.deref.call(null,popup_ele));
if(and__4210__auto__){
return popup_target_ele;
} else {
return and__4210__auto__;
}
})())){
var new_popup_ele_93741 = nw_calculator.utilities.html__GT_ele.call(null,cljstache.core.render.call(null,"<img class=\"hidden max-w-3xl w-48 h-48 object-cover absolute z-10 bg-light-blue rounded-full rounded-tl-none border-purple border-opacity-30 border-2 bg-white\" src=\"{{src}}\" style=\"top: {{top}}px; left: {{left}}px\" />",(function (){var vec__93733 = nw_calculator.utilities.get_ele_offsets.call(null,popup_target_ele);
var left = cljs.core.nth.call(null,vec__93733,(0),null);
var top = cljs.core.nth.call(null,vec__93733,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),src,new cljs.core.Keyword(null,"left","left",-399115937),(left + (20)),new cljs.core.Keyword(null,"top","top",-1856271961),(top + (20))], null);
})()));
cljs.core.reset_BANG_.call(null,popup_ele,new_popup_ele_93741);

document.body.appendChild(new_popup_ele_93741);
} else {
}

var temp__5753__auto___93742 = cljs.core.deref.call(null,popup_ele);
if(cljs.core.truth_(temp__5753__auto___93742)){
var popup_ele_STAR__93743 = temp__5753__auto___93742;
if(cljs.core.truth_(popup_target_ele)){
popup_ele_STAR__93743.classList.remove("hidden");
} else {
popup_ele_STAR__93743.classList.add("hidden");
}
} else {
}

return (function (){
var temp__5753__auto__ = cljs.core.deref.call(null,popup_ele);
if(cljs.core.truth_(temp__5753__auto__)){
var popup_ele_STAR_ = temp__5753__auto__;
cljs.core.reset_BANG_.call(null,popup_ele,null);

return popup_ele_STAR_.remove();
} else {
return null;
}
});
}),[popup_target_ele]);

var with_let93736 = reagent.ratom.with_let_values.call(null,new cljs.core.Keyword(null,"with-let93736","with-let93736",730041264));
var temp__5757__auto___93744 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___93744 == null)){
} else {
var c__8384__auto___93745 = temp__5757__auto___93744;
if((with_let93736.generation === c__8384__auto___93745.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let93736.generation = c__8384__auto___93745.ratomGeneration);
}

var init93737 = (with_let93736.length === (0));
var show_popup = ((((init93737) || (cljs.core.not.call(null,with_let93736.hasOwnProperty((0))))))?(with_let93736[(0)] = (function (event){
return set_popup_target_ele_BANG_.call(null,event.target);
})):(with_let93736[(0)]));
var hide_popup = ((((init93737) || (cljs.core.not.call(null,with_let93736.hasOwnProperty((1))))))?(with_let93736[(1)] = (function (_event){
return set_popup_target_ele_BANG_.call(null,null);
})):(with_let93736[(1)]));
var res93738 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.bg-none.w-8.h-8","img.bg-none.w-8.h-8",-543620430),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),src,new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),(cljs.core.truth_(disable_popup_QMARK_)?null:show_popup),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),(cljs.core.truth_(disable_popup_QMARK_)?null:hide_popup)], null)], null);
return res93738;
})();
return res93729;
});
nw_calculator.components.item.component.placeholder_icon = (function nw_calculator$components$item$component$placeholder_icon(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center.justify-center","div.flex.items-center.justify-center",-1114622942),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),nw_calculator.components.item.styles.placeholder_icon_class.call(null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.text-purple.text-opacity-50.fa-1x.text-2xl.fas.fa-question","i.text-purple.text-opacity-50.fa-1x.text-2xl.fas.fa-question",-1780967066)], null)], null);
});
nw_calculator.components.item.component.item = (function nw_calculator$components$item$component$item(p__93746){
var map__93747 = p__93746;
var map__93747__$1 = cljs.core.__destructure_map.call(null,map__93747);
var map__93748 = cljs.core.get.call(null,map__93747__$1,new cljs.core.Keyword(null,"item-map","item-map",677069923));
var map__93748__$1 = cljs.core.__destructure_map.call(null,map__93748);
var item_name = cljs.core.get.call(null,map__93748__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var quantity = cljs.core.get.call(null,map__93748__$1,new cljs.core.Keyword(null,"quantity","quantity",-1929050694));
var png_url = cljs.core.get.call(null,map__93748__$1,new cljs.core.Keyword(null,"png-url","png-url",1496264747));
var xp = cljs.core.get.call(null,map__93748__$1,new cljs.core.Keyword(null,"xp","xp",550374458));
var category_name = cljs.core.get.call(null,map__93748__$1,new cljs.core.Keyword(null,"category-name","category-name",-1615496579));
var tier = cljs.core.get.call(null,map__93748__$1,new cljs.core.Keyword(null,"tier","tier",-1071893374));
var popup_on_hover_QMARK_ = cljs.core.get.call(null,map__93747__$1,new cljs.core.Keyword(null,"popup-on-hover?","popup-on-hover?",-2068184278));
var custom_name = cljs.core.get.call(null,map__93747__$1,new cljs.core.Keyword(null,"custom-name","custom-name",1003503291));
var custom_quantity = cljs.core.get.call(null,map__93747__$1,new cljs.core.Keyword(null,"custom-quantity","custom-quantity",-1300704698));
var container_props = cljs.core.get.call(null,map__93747__$1,new cljs.core.Keyword(null,"container-props","container-props",-1692729191));
var with_let93749 = reagent.ratom.with_let_values.call(null,new cljs.core.Keyword(null,"with-let93749","with-let93749",1734342974));
var temp__5757__auto___93752 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___93752 == null)){
} else {
var c__8384__auto___93753 = temp__5757__auto___93752;
if((with_let93749.generation === c__8384__auto___93753.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let93749.generation = c__8384__auto___93753.ratomGeneration);
}

var init93750 = (with_let93749.length === (0));
var labels_key = ((((init93750) || (cljs.core.not.call(null,with_let93749.hasOwnProperty((0))))))?(with_let93749[(0)] = ["labels_",nw_calculator.utilities.short_uuid_str.call(null)].join('')):(with_let93749[(0)]));
var res93751 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.gap-4.relative","div.flex.gap-4.relative",2019279950),container_props,(cljs.core.truth_(png_url)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f>","f>",1484564198),nw_calculator.components.item.component.image_with_popup,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),png_url,new cljs.core.Keyword(null,"disable-popup?","disable-popup?",-311006878),cljs.core.not.call(null,popup_on_hover_QMARK_)], null)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.item.component.placeholder_icon], null)),cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-inherit.labels.w-full.flex.items-start.gap-4","div.bg-inherit.labels.w-full.flex.items-start.gap-4",1843689974),(function (){var or__4212__auto__ = custom_quantity;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return quantity;
}
})()," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-inherit.w-full.flex.flex-col.gap-2","div.bg-inherit.w-full.flex.flex-col.gap-2",698005499),(function (){var or__4212__auto__ = custom_name;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return item_name;
}
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.basic-info.text-sm.align-text-bottom.whitespace-nowrap","span.basic-info.text-sm.align-text-bottom.whitespace-nowrap",-2044917444),(function (){var tier_label = (cljs.core.truth_(tier)?["T",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tier)].join(''):null);
var xp_label = (cljs.core.truth_(xp)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(xp),"XP"].join(''):null);
var basic_info = cljs.core.not_empty.call(null,clojure.string.join.call(null," ",cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [category_name,tier_label,xp_label], null))));
if(cljs.core.truth_(basic_info)){
return [" (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(basic_info),")"].join('');
} else {
return null;
}
})()], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),labels_key], null))], null);
return res93751;
});

//# sourceMappingURL=component.js.map
