// Compiled by ClojureScript 1.10.879 {:optimizations :none}
goog.provide('day8.re_frame_10x.panels.settings.views');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core');
goog.require('day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units');
goog.require('day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.compiler');
goog.require('day8.re_frame_10x.components.buttons');
goog.require('day8.re_frame_10x.components.re_com');
goog.require('day8.re_frame_10x.navigation.epochs.events');
goog.require('day8.re_frame_10x.navigation.epochs.subs');
goog.require('day8.re_frame_10x.panels.settings.events');
goog.require('day8.re_frame_10x.panels.settings.subs');
goog.require('day8.re_frame_10x.panels.traces.subs');
goog.require('day8.re_frame_10x.material');
goog.require('day8.re_frame_10x.styles');
day8.re_frame_10x.panels.settings.views.comp_section_width = "400px";
day8.re_frame_10x.panels.settings.views.instruction__section_width = "190px";
day8.re_frame_10x.panels.settings.views.horizontal_gap = day8.re_frame_10x.styles.gs_7s;
day8.re_frame_10x.panels.settings.views.vertical_gap = day8.re_frame_10x.styles.gs_12s;
day8.re_frame_10x.panels.settings.views.settings_box_vertical_padding = day8.re_frame_10x.styles.gs_7;
day8.re_frame_10x.panels.settings.views.settings_box_padding = day8.re_frame_10x.components.re_com.css_join.call(null,"7px","0");
day8.re_frame_10x.panels.settings.views.settings_box_81 = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.compiler.render_css.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px_.call(null,day8.re_frame_10x.styles.gs_81,day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px_STAR_.call(null,(2),day8.re_frame_10x.panels.settings.views.settings_box_vertical_padding)));
day8.re_frame_10x.panels.settings.views.settings_box_131 = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.compiler.render_css.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px_.call(null,day8.re_frame_10x.styles.gs_131,day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px_STAR_.call(null,(2),day8.re_frame_10x.panels.settings.views.settings_box_vertical_padding)));
day8.re_frame_10x.panels.settings.views.done_button = (function day8$re_frame_10x$panels$settings$views$done_button(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.buttons.icon,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),day8.re_frame_10x.styles.done_button.call(null),new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.material.check_circle_outline], null),new cljs.core.Keyword(null,"label","label",1718410804),"Done",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","toggle","day8.re-frame-10x.panels.settings.events/toggle",-388660368)], null));
})], null)], null);
});
day8.re_frame_10x.panels.settings.views.closeable_text_box = (function day8$re_frame_10x$panels$settings$views$closeable_text_box(var_args){
var args__4824__auto__ = [];
var len__4818__auto___36830 = arguments.length;
var i__4819__auto___36831 = (0);
while(true){
if((i__4819__auto___36831 < len__4818__auto___36830)){
args__4824__auto__.push((arguments[i__4819__auto___36831]));

var G__36832 = (i__4819__auto___36831 + (1));
i__4819__auto___36831 = G__36832;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.panels.settings.views.closeable_text_box.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(day8.re_frame_10x.panels.settings.views.closeable_text_box.cljs$core$IFn$_invoke$arity$variadic = (function (p__36828){
var map__36829 = p__36828;
var map__36829__$1 = cljs.core.__destructure_map.call(null,map__36829);
var model = cljs.core.get.call(null,map__36829__$1,new cljs.core.Keyword(null,"model","model",331153215));
var width = cljs.core.get.call(null,map__36829__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var on_close = cljs.core.get.call(null,map__36829__$1,new cljs.core.Keyword(null,"on-close","on-close",-761178394));
var on_change = cljs.core.get.call(null,map__36829__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.input_text,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),"25px",new cljs.core.Keyword(null,"padding","padding",1660304693),day8.re_frame_10x.components.re_com.css_join.call(null,"0px",day8.re_frame_10x.styles.gs_5s)], null),new cljs.core.Keyword(null,"model","model",331153215),model,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),false,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.close_button,new cljs.core.Keyword(null,"div-size","div-size",1661625995),(25),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(25),new cljs.core.Keyword(null,"top-offset","top-offset",1235816245),(-4),new cljs.core.Keyword(null,"left-offset","left-offset",-331155643),(10),new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_close], null)], null)], null);
}));

(day8.re_frame_10x.panels.settings.views.closeable_text_box.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(day8.re_frame_10x.panels.settings.views.closeable_text_box.cljs$lang$applyTo = (function (seq36827){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36827));
}));

day8.re_frame_10x.panels.settings.views.explanation_text = (function day8$re_frame_10x$panels$settings$views$explanation_text(children){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.v_box,new cljs.core.Keyword(null,"width","width",-384071477),day8.re_frame_10x.panels.settings.views.instruction__section_width,new cljs.core.Keyword(null,"gap","gap",80255254),day8.re_frame_10x.styles.gs_19s,new cljs.core.Keyword(null,"children","children",-940561982),children], null);
});
/**
 * settings and explanation are both children of re-com boxes
 */
day8.re_frame_10x.panels.settings.views.settings_box = (function day8$re_frame_10x$panels$settings$views$settings_box(settings,explanation,min_height){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),day8.re_frame_10x.styles.gs_19s,new cljs.core.Keyword(null,"min-height","min-height",398480837),min_height,new cljs.core.Keyword(null,"padding","padding",1660304693),day8.re_frame_10x.panels.settings.views.settings_box_padding,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.v_box,new cljs.core.Keyword(null,"width","width",-384071477),day8.re_frame_10x.panels.settings.views.comp_section_width,new cljs.core.Keyword(null,"gap","gap",80255254),day8.re_frame_10x.panels.settings.views.vertical_gap,new cljs.core.Keyword(null,"children","children",-940561982),settings], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.panels.settings.views.explanation_text,explanation], null)], null)], null);
});
day8.re_frame_10x.panels.settings.views.render = (function day8$re_frame_10x$panels$settings$views$render(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.v_box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),day8.re_frame_10x.styles.gs_12s,new cljs.core.Keyword(null,"margin-right","margin-right",809689658),day8.re_frame_10x.styles.gs_19s], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var ambiance = cljs.core.deref.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","ambiance","day8.re-frame-10x.panels.settings.subs/ambiance",-230258012)], null)));
var num_epochs = cljs.core.deref.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.subs","number-of-matches","day8.re-frame-10x.navigation.epochs.subs/number-of-matches",-1857513637)], null)));
var num_traces = cljs.core.deref.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.traces.subs","count","day8.re-frame-10x.panels.traces.subs/count",900994278)], null)));
var epochs_to_retain = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","number-of-retained-epochs","day8.re-frame-10x.panels.settings.subs/number-of-retained-epochs",-789938705)], null));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.panels.settings.views.settings_box,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.h_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"gap","gap",80255254),day8.re_frame_10x.panels.settings.views.horizontal_gap,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.label,new cljs.core.Keyword(null,"label","label",1718410804),"Retain last"], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.input_text,new cljs.core.Keyword(null,"width","width",-384071477),day8.re_frame_10x.styles.gs_31s,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"35px",new cljs.core.Keyword(null,"height","height",1025178622),"25px",new cljs.core.Keyword(null,"padding","padding",1660304693),day8.re_frame_10x.components.re_com.css_join.call(null,"0px",day8.re_frame_10x.styles.gs_5s)], null),new cljs.core.Keyword(null,"model","model",331153215),epochs_to_retain,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__36833_SHARP_){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","set-number-of-retained-epochs","day8.re-frame-10x.panels.settings.events/set-number-of-retained-epochs",-813421569),p1__36833_SHARP_], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.label,new cljs.core.Keyword(null,"label","label",1718410804),"epochs"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.gap_f,new cljs.core.Keyword(null,"size","size",1098693007),day8.re_frame_10x.styles.gs_31s], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.button,new cljs.core.Keyword(null,"class","class",-2030961996),day8.re_frame_10x.styles.button.call(null,ambiance),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.v_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["clear all epochs"], null)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.events","reset","day8.re-frame-10x.navigation.epochs.events/reset",-2105765050)], null));
})], null)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),num_epochs," epochs currently retained, involving ",num_traces," traces."], null)], null),day8.re_frame_10x.panels.settings.views.settings_box_81], null);
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.line], null),(function (){var follows_events_QMARK_ = cljs.core.deref.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","app-db-follows-events?","day8.re-frame-10x.panels.settings.subs/app-db-follows-events?",1075206342)], null)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.panels.settings.views.settings_box,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.checkbox,new cljs.core.Keyword(null,"model","model",331153215),follows_events_QMARK_,new cljs.core.Keyword(null,"label","label",1718410804),"sync app-db with epoch navigation",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__36834_SHARP_){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","app-db-follows-events?","day8.re-frame-10x.panels.settings.events/app-db-follows-events?",-1040848496),p1__36834_SHARP_], null));
})], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"When you navigate to an epoch, update app-db to match. Causes UI to \"time travel\"."], null)], null),day8.re_frame_10x.panels.settings.views.settings_box_81], null);
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.line], null),(function (){var ambiance = cljs.core.deref.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","ambiance","day8.re-frame-10x.panels.settings.subs/ambiance",-230258012)], null)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.panels.settings.views.settings_box,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.h_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"gap","gap",80255254),day8.re_frame_10x.panels.settings.views.horizontal_gap,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.label,new cljs.core.Keyword(null,"label","label",1718410804),"Ignore epochs for:"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.button,new cljs.core.Keyword(null,"class","class",-2030961996),day8.re_frame_10x.styles.button.call(null,ambiance),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),day8.re_frame_10x.styles.gs_81s], null),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.v_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["+ event-id"], null)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","add-ignored-event","day8.re-frame-10x.panels.settings.events/add-ignored-event",-92168870)], null));
})], null)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.v_box,new cljs.core.Keyword(null,"width","width",-384071477),day8.re_frame_10x.panels.settings.views.comp_section_width,new cljs.core.Keyword(null,"gap","gap",80255254),day8.re_frame_10x.panels.settings.views.vertical_gap,new cljs.core.Keyword(null,"children","children",-940561982),(function (){var iter__4611__auto__ = (function day8$re_frame_10x$panels$settings$views$render_$_iter__36843(s__36844){
return (new cljs.core.LazySeq(null,(function (){
var s__36844__$1 = s__36844;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__36844__$1);
if(temp__5753__auto__){
var s__36844__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36844__$2)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,s__36844__$2);
var size__4610__auto__ = cljs.core.count.call(null,c__4609__auto__);
var b__36846 = cljs.core.chunk_buffer.call(null,size__4610__auto__);
if((function (){var i__36845 = (0);
while(true){
if((i__36845 < size__4610__auto__)){
var item = cljs.core._nth.call(null,c__4609__auto__,i__36845);
var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item);
cljs.core.chunk_append.call(null,b__36846,cljs.core.with_meta(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.panels.settings.views.closeable_text_box,new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"event-str","event-str",381347778).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"width","width",-384071477),"212px",new cljs.core.Keyword(null,"on-close","on-close",-761178394),((function (i__36845,id,item,c__4609__auto__,size__4610__auto__,b__36846,s__36844__$2,temp__5753__auto__,ambiance){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","remove-ignored-event","day8.re-frame-10x.panels.settings.events/remove-ignored-event",252246704),id], null));
});})(i__36845,id,item,c__4609__auto__,size__4610__auto__,b__36846,s__36844__$2,temp__5753__auto__,ambiance))
,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__36845,id,item,c__4609__auto__,size__4610__auto__,b__36846,s__36844__$2,temp__5753__auto__,ambiance){
return (function (p1__36835_SHARP_){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","update-ignored-event","day8.re-frame-10x.panels.settings.events/update-ignored-event",789804124),id,p1__36835_SHARP_], null));
});})(i__36845,id,item,c__4609__auto__,size__4610__auto__,b__36846,s__36844__$2,temp__5753__auto__,ambiance))
], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__36851 = (i__36845 + (1));
i__36845 = G__36851;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36846),day8$re_frame_10x$panels$settings$views$render_$_iter__36843.call(null,cljs.core.chunk_rest.call(null,s__36844__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36846),null);
}
} else {
var item = cljs.core.first.call(null,s__36844__$2);
var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.panels.settings.views.closeable_text_box,new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"event-str","event-str",381347778).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"width","width",-384071477),"212px",new cljs.core.Keyword(null,"on-close","on-close",-761178394),((function (id,item,s__36844__$2,temp__5753__auto__,ambiance){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","remove-ignored-event","day8.re-frame-10x.panels.settings.events/remove-ignored-event",252246704),id], null));
});})(id,item,s__36844__$2,temp__5753__auto__,ambiance))
,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (id,item,s__36844__$2,temp__5753__auto__,ambiance){
return (function (p1__36835_SHARP_){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","update-ignored-event","day8.re-frame-10x.panels.settings.events/update-ignored-event",789804124),id,p1__36835_SHARP_], null));
});})(id,item,s__36844__$2,temp__5753__auto__,ambiance))
], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),day8$re_frame_10x$panels$settings$views$render_$_iter__36843.call(null,cljs.core.rest.call(null,s__36844__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__.call(null,cljs.core.deref.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","ignored-events","day8.re-frame-10x.panels.settings.subs/ignored-events",216559761)], null))));
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"All trace associated with these events will be ignored."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Useful if you want to ignore a periodic background polling event."], null)], null),day8.re_frame_10x.panels.settings.views.settings_box_131], null);
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.line], null),(function (){var ambiance = cljs.core.deref.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","ambiance","day8.re-frame-10x.panels.settings.subs/ambiance",-230258012)], null)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.panels.settings.views.settings_box,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.h_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"gap","gap",80255254),day8.re_frame_10x.panels.settings.views.horizontal_gap,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.label,new cljs.core.Keyword(null,"label","label",1718410804),"Filter out trace for views in:"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.button,new cljs.core.Keyword(null,"class","class",-2030961996),day8.re_frame_10x.styles.button.call(null,ambiance),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100px"], null),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.v_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["+ namespace"], null)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","add-filtered-view-trace","day8.re-frame-10x.panels.settings.events/add-filtered-view-trace",937947584)], null));
})], null)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.v_box,new cljs.core.Keyword(null,"width","width",-384071477),day8.re_frame_10x.panels.settings.views.comp_section_width,new cljs.core.Keyword(null,"gap","gap",80255254),day8.re_frame_10x.panels.settings.views.vertical_gap,new cljs.core.Keyword(null,"children","children",-940561982),(function (){var iter__4611__auto__ = (function day8$re_frame_10x$panels$settings$views$render_$_iter__36847(s__36848){
return (new cljs.core.LazySeq(null,(function (){
var s__36848__$1 = s__36848;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__36848__$1);
if(temp__5753__auto__){
var s__36848__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36848__$2)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,s__36848__$2);
var size__4610__auto__ = cljs.core.count.call(null,c__4609__auto__);
var b__36850 = cljs.core.chunk_buffer.call(null,size__4610__auto__);
if((function (){var i__36849 = (0);
while(true){
if((i__36849 < size__4610__auto__)){
var item = cljs.core._nth.call(null,c__4609__auto__,i__36849);
var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item);
cljs.core.chunk_append.call(null,b__36850,cljs.core.with_meta(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.panels.settings.views.closeable_text_box,new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"width","width",-384071477),"343px",new cljs.core.Keyword(null,"on-close","on-close",-761178394),((function (i__36849,id,item,c__4609__auto__,size__4610__auto__,b__36850,s__36848__$2,temp__5753__auto__,ambiance){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","remove-filtered-view-trace","day8.re-frame-10x.panels.settings.events/remove-filtered-view-trace",2058604246),id], null));
});})(i__36849,id,item,c__4609__auto__,size__4610__auto__,b__36850,s__36848__$2,temp__5753__auto__,ambiance))
,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__36849,id,item,c__4609__auto__,size__4610__auto__,b__36850,s__36848__$2,temp__5753__auto__,ambiance){
return (function (p1__36836_SHARP_){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","update-filtered-view-trace","day8.re-frame-10x.panels.settings.events/update-filtered-view-trace",598201221),id,p1__36836_SHARP_], null));
});})(i__36849,id,item,c__4609__auto__,size__4610__auto__,b__36850,s__36848__$2,temp__5753__auto__,ambiance))
], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__36852 = (i__36849 + (1));
i__36849 = G__36852;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36850),day8$re_frame_10x$panels$settings$views$render_$_iter__36847.call(null,cljs.core.chunk_rest.call(null,s__36848__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36850),null);
}
} else {
var item = cljs.core.first.call(null,s__36848__$2);
var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.panels.settings.views.closeable_text_box,new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"width","width",-384071477),"343px",new cljs.core.Keyword(null,"on-close","on-close",-761178394),((function (id,item,s__36848__$2,temp__5753__auto__,ambiance){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","remove-filtered-view-trace","day8.re-frame-10x.panels.settings.events/remove-filtered-view-trace",2058604246),id], null));
});})(id,item,s__36848__$2,temp__5753__auto__,ambiance))
,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (id,item,s__36848__$2,temp__5753__auto__,ambiance){
return (function (p1__36836_SHARP_){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","update-filtered-view-trace","day8.re-frame-10x.panels.settings.events/update-filtered-view-trace",598201221),id,p1__36836_SHARP_], null));
});})(id,item,s__36848__$2,temp__5753__auto__,ambiance))
], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),day8$re_frame_10x$panels$settings$views$render_$_iter__36847.call(null,cljs.core.rest.call(null,s__36848__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__.call(null,cljs.core.deref.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","filtered-view-trace","day8.re-frame-10x.panels.settings.subs/filtered-view-trace",-192195211)], null))));
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Sometimes you want to focus on your own views, and the trace associated with library views is just noise."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Nominate one or more namespaces."], null)], null),day8.re_frame_10x.panels.settings.views.settings_box_131], null);
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.line], null),(function (){var low_level_trace = cljs.core.deref.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","low-level-trace","day8.re-frame-10x.panels.settings.subs/low-level-trace",-929378536)], null)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.panels.settings.views.settings_box,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.label,new cljs.core.Keyword(null,"label","label",1718410804),"Remove low level trace"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.checkbox,new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"reagent","reagent",2131627322).cljs$core$IFn$_invoke$arity$1(low_level_trace),new cljs.core.Keyword(null,"label","label",1718410804),"reagent internals",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__36837_SHARP_){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","low-level-trace","day8.re-frame-10x.panels.settings.subs/low-level-trace",-929378536),new cljs.core.Keyword(null,"reagent","reagent",2131627322),p1__36837_SHARP_], null));
})], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.checkbox,new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"re-frame","re-frame",-1039473033).cljs$core$IFn$_invoke$arity$1(low_level_trace),new cljs.core.Keyword(null,"label","label",1718410804),"re-frame internals",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__36838_SHARP_){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","low-level-trace","day8.re-frame-10x.panels.settings.subs/low-level-trace",-929378536),new cljs.core.Keyword(null,"re-frame","re-frame",-1039473033),p1__36838_SHARP_], null));
})], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Most of the time, low level trace is noisy and you want it filtered out."], null)], null),day8.re_frame_10x.panels.settings.views.settings_box_131], null);
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.line], null),(function (){var ambiance = cljs.core.deref.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","ambiance","day8.re-frame-10x.panels.settings.subs/ambiance",-230258012)], null)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.panels.settings.views.settings_box,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.button,new cljs.core.Keyword(null,"class","class",-2030961996),day8.re_frame_10x.styles.button.call(null,ambiance),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100px"], null),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.v_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Factory Reset"], null)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","factory-reset","day8.re-frame-10x.panels.settings.events/factory-reset",880771998)], null));
})], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null),day8.re_frame_10x.panels.settings.views.settings_box_81], null);
})()], null)], null);
});

//# sourceMappingURL=views.js.map
