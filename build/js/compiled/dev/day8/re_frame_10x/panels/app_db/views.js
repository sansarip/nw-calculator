// Compiled by ClojureScript 1.10.879 {:optimizations :none}
goog.provide('day8.re_frame_10x.panels.app_db.views');
goog.require('cljs.core');
goog.require('clojure.data');
goog.require('devtools.prefs');
goog.require('devtools.formatters.core');
goog.require('day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units');
goog.require('day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.core');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core');
goog.require('day8.re_frame_10x.components.buttons');
goog.require('day8.re_frame_10x.components.cljs_devtools');
goog.require('day8.re_frame_10x.components.re_com');
goog.require('day8.re_frame_10x.svgs');
goog.require('day8.re_frame_10x.material');
goog.require('day8.re_frame_10x.styles');
goog.require('day8.re_frame_10x.panels.settings.subs');
goog.require('day8.re_frame_10x.panels.app_db.events');
goog.require('day8.re_frame_10x.panels.app_db.subs');
goog.require('day8.re_frame_10x.tools.coll');
day8.re_frame_10x.panels.app_db.views.pod_gap = "-1px";
day8.re_frame_10x.panels.app_db.views.pod_padding = "0px";
day8.re_frame_10x.panels.app_db.views.path_inspector_button = (function day8$re_frame_10x$panels$app_db$views$path_inspector_button(){
var ambiance = cljs.core.deref.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","ambiance","day8.re-frame-10x.panels.settings.subs/ambiance",-230258012)], null)));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.button,new cljs.core.Keyword(null,"class","class",-2030961996),day8.re_frame_10x.styles.button.call(null,ambiance),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.h_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.material.add,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),day8.re_frame_10x.styles.gs_19s], null)], null),"path inspector"], null)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","create-path","day8.re-frame-10x.panels.app-db.events/create-path",-383624398)], null));
})], null);
});
day8.re_frame_10x.panels.app_db.views.panel_header = (function day8$re_frame_10x$panels$app_db$views$panel_header(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.h_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.panels.app_db.views.path_inspector_button], null)], null)], null);
});
day8.re_frame_10x.panels.app_db.views.pod_border_edge = ["1px solid ",day8.re_frame_10x.styles.nord4].join('');
day8.re_frame_10x.panels.app_db.views.pod_header_section_style_factory$ = (function day8$re_frame_10x$panels$app_db$views$pod_header_section_style_factory$(style_name36673,params36674,_,last_QMARK_){
var base_style36678 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-right","border-right",-668932860),(cljs.core.truth_(last_QMARK_)?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px.call(null,(1)),new cljs.core.Keyword(null,"solid","solid",-2023773691),day8.re_frame_10x.styles.nord4], null)], null))], null)], null);
var key__35976__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,cljs.core.first.call(null,base_style36678)));
var name36677 = new cljs.core.Var(function(){return day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.util.build_style_name;},new cljs.core.Symbol("day8.re-frame-10x.inlined-deps.spade.git-sha-93ef290.util","build-style-name","day8.re-frame-10x.inlined-deps.spade.git-sha-93ef290.util/build-style-name",-749415777,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"day8.re-frame-10x.inlined-deps.spade.git-sha-93ef290.util","day8.re-frame-10x.inlined-deps.spade.git-sha-93ef290.util",-1712623293,null),new cljs.core.Symbol(null,"build-style-name","build-style-name",-1171118707,null),"resources/public/js/compiled/dev/day8/re_frame_10x/inlined_deps/spade/git_sha_93ef290/util.cljc",23,1,37,37,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"base","base",1825810849,null),new cljs.core.Symbol(null,"style-key","style-key",1072873135,null),new cljs.core.Symbol(null,"params","params",-1943919534,null)], null)),null,(cljs.core.truth_(day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.util.build_style_name)?day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.util.build_style_name.cljs$lang$test:null)])).call(null,style_name36673,key__35976__auto__,params36674);
var style36676 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name36677)].join('')], null),base_style36678);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"css","css",1135045163),day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.runtime.compile_css.call(null,style36676),new cljs.core.Keyword(null,"name","name",1843675177),name36677], null);
});

var factory_name36675_36679 = day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.util.factory__GT_name.call(null,day8.re_frame_10x.panels.app_db.views.pod_header_section_style_factory$);
day8.re_frame_10x.panels.app_db.views.pod_header_section_style = (function day8$re_frame_10x$panels$app_db$views$pod_header_section_style(_,last_QMARK_){
return day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.runtime.ensure_style_BANG_.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),factory_name36675_36679,day8.re_frame_10x.panels.app_db.views.pod_header_section_style_factory$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_,last_QMARK_], null));
});
day8.re_frame_10x.panels.app_db.views.pod_header_section = (function day8$re_frame_10x$panels$app_db$views$pod_header_section(var_args){
var args__4824__auto__ = [];
var len__4818__auto___36683 = arguments.length;
var i__4819__auto___36684 = (0);
while(true){
if((i__4819__auto___36684 < len__4818__auto___36683)){
args__4824__auto__.push((arguments[i__4819__auto___36684]));

var G__36685 = (i__4819__auto___36684 + (1));
i__4819__auto___36684 = G__36685;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.panels.app_db.views.pod_header_section.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(day8.re_frame_10x.panels.app_db.views.pod_header_section.cljs$core$IFn$_invoke$arity$variadic = (function (p__36681){
var map__36682 = p__36681;
var map__36682__$1 = cljs.core.__destructure_map.call(null,map__36682);
var attr = cljs.core.get.call(null,map__36682__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var min_width = cljs.core.get.call(null,map__36682__$1,new cljs.core.Keyword(null,"min-width","min-width",1926193728));
var children = cljs.core.get.call(null,map__36682__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var align = cljs.core.get.call(null,map__36682__$1,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368));
var last_QMARK_ = cljs.core.get.call(null,map__36682__$1,new cljs.core.Keyword(null,"last?","last?",-584181626));
var justify = cljs.core.get.call(null,map__36682__$1,new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"start","start",-355208981));
var width = cljs.core.get.call(null,map__36682__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var size = cljs.core.get.call(null,map__36682__$1,new cljs.core.Keyword(null,"size","size",1098693007),"none");
var gap = cljs.core.get.call(null,map__36682__$1,new cljs.core.Keyword(null,"gap","gap",80255254));
var ambiance = cljs.core.deref.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","ambiance","day8.re-frame-10x.panels.settings.subs/ambiance",-230258012)], null)));
return new cljs.core.PersistentVector(null, 21, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.h_box,new cljs.core.Keyword(null,"class","class",-2030961996),day8.re_frame_10x.panels.app_db.views.pod_header_section_style.call(null,ambiance,last_QMARK_),new cljs.core.Keyword(null,"size","size",1098693007),size,new cljs.core.Keyword(null,"justify","justify",-722524056),justify,new cljs.core.Keyword(null,"align","align",1964212802),align,new cljs.core.Keyword(null,"gap","gap",80255254),gap,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"min-width","min-width",1926193728),min_width,new cljs.core.Keyword(null,"height","height",1025178622),day8.re_frame_10x.styles.gs_31s,new cljs.core.Keyword(null,"attr","attr",-604132353),attr,new cljs.core.Keyword(null,"children","children",-940561982),children], null);
}));

(day8.re_frame_10x.panels.app_db.views.pod_header_section.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(day8.re_frame_10x.panels.app_db.views.pod_header_section.cljs$lang$applyTo = (function (seq36680){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36680));
}));

day8.re_frame_10x.panels.app_db.views.pod_header = (function day8$re_frame_10x$panels$app_db$views$pod_header(p__36687){
var map__36688 = p__36687;
var map__36688__$1 = cljs.core.__destructure_map.call(null,map__36688);
var id = cljs.core.get.call(null,map__36688__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var path_str = cljs.core.get.call(null,map__36688__$1,new cljs.core.Keyword(null,"path-str","path-str",259306316));
var open_QMARK_ = cljs.core.get.call(null,map__36688__$1,new cljs.core.Keyword(null,"open?","open?",1238443125));
var diff_QMARK_ = cljs.core.get.call(null,map__36688__$1,new cljs.core.Keyword(null,"diff?","diff?",117225601));
var ambiance = cljs.core.deref.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","ambiance","day8.re-frame-10x.panels.settings.subs/ambiance",-230258012)], null)));
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.h_box,new cljs.core.Keyword(null,"class","class",-2030961996),day8.re_frame_10x.styles.section_header.call(null,ambiance),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"height","height",1025178622),day8.re_frame_10x.styles.gs_31s,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.panels.app_db.views.pod_header_section,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.box,new cljs.core.Keyword(null,"width","width",-384071477),"30px",new cljs.core.Keyword(null,"height","height",1025178622),day8.re_frame_10x.styles.gs_31s,new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"class","class",-2030961996),day8.re_frame_10x.styles.no_select.call(null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),[(cljs.core.truth_(open_QMARK_)?"Close":"Open")," the pod bay doors, HAL"].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","set-path-visibility","day8.re-frame-10x.panels.app-db.events/set-path-visibility",1839643949),id,cljs.core.not.call(null,open_QMARK_)], null));

return null;
})], null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.buttons.expansion,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open?","open?",1238443125),open_QMARK_,new cljs.core.Keyword(null,"size","size",1098693007),day8.re_frame_10x.styles.gs_31s], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.h_box,new cljs.core.Keyword(null,"class","class",-2030961996),day8.re_frame_10x.styles.path_header_style.call(null,ambiance),new cljs.core.Keyword(null,"size","size",1098693007),"auto",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),day8.re_frame_10x.styles.gs_31s,new cljs.core.Keyword(null,"border-right","border-right",-668932860),day8.re_frame_10x.panels.app_db.views.pod_border_edge], null),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.input_text,new cljs.core.Keyword(null,"class","class",-2030961996),day8.re_frame_10x.styles.path_text_input_style.call(null,ambiance),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-blur","on-blur",814300747),(function (){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","update-path-blur","day8.re-frame-10x.panels.app-db.events/update-path-blur",1529838565),id], null));
})], null),new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"model","model",331153215),path_str,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__36686_SHARP_){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","update-path","day8.re-frame-10x.panels.app-db.events/update-path",-928809458),id,p1__36686_SHARP_], null));
}),new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (){
return cljs.core.List.EMPTY;
}),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),false,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"enter an app-db path like [:todos 1]"], null)], null)], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.panels.app_db.views.pod_header_section,new cljs.core.Keyword(null,"width","width",-384071477),"49px",new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","set-diff-visibility","day8.re-frame-10x.panels.app-db.events/set-diff-visibility",-1750368278),id,cljs.core.not.call(null,diff_QMARK_)], null));

return null;
})], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.checkbox,new cljs.core.Keyword(null,"model","model",331153215),diff_QMARK_,new cljs.core.Keyword(null,"label","label",1718410804),"",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","set-diff-visibility","day8.re-frame-10x.panels.app-db.events/set-diff-visibility",-1750368278),id,cljs.core.not.call(null,diff_QMARK_)], null));
})], null)], null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.panels.app_db.views.pod_header_section,new cljs.core.Keyword(null,"width","width",-384071477),day8.re_frame_10x.styles.gs_50s,new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"last?","last?",-584181626),true,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.buttons.icon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.material.close], null),new cljs.core.Keyword(null,"title","title",636505583),"Remove this inspector",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","remove-path","day8.re-frame-10x.panels.app-db.events/remove-path",-333596006),id], null));
})], null)], null)], null)], null)], null)], null);
});
day8.re_frame_10x.panels.app_db.views.diff_url = "https://github.com/day8/re-frame-10x/blob/master/docs/HyperlinkedInformation/Diffs.md";
day8.re_frame_10x.panels.app_db.views.pod = (function day8$re_frame_10x$panels$app_db$views$pod(p__36689){
var map__36690 = p__36689;
var map__36690__$1 = cljs.core.__destructure_map.call(null,map__36690);
var pod_info = map__36690__$1;
var path = cljs.core.get.call(null,map__36690__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var open_QMARK_ = cljs.core.get.call(null,map__36690__$1,new cljs.core.Keyword(null,"open?","open?",1238443125));
var diff_QMARK_ = cljs.core.get.call(null,map__36690__$1,new cljs.core.Keyword(null,"diff?","diff?",117225601));
var ambiance = cljs.core.deref.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","ambiance","day8.re-frame-10x.panels.settings.subs/ambiance",-230258012)], null)));
var render_diff_QMARK_ = (function (){var and__4210__auto__ = open_QMARK_;
if(cljs.core.truth_(and__4210__auto__)){
return diff_QMARK_;
} else {
return and__4210__auto__;
}
})();
var app_db_after = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","current-epoch-app-db-after","day8.re-frame-10x.panels.app-db.subs/current-epoch-app-db-after",718633528)], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.panels.app_db.views.pod_header,pod_info], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(open_QMARK_)?day8.re_frame_10x.styles.pod_border.call(null,ambiance):null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(open_QMARK_)?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),day8.re_frame_10x.styles.pod_data.call(null,ambiance),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin","margin",-995903681),day8.re_frame_10x.components.re_com.css_join.call(null,day8.re_frame_10x.panels.app_db.views.pod_padding,day8.re_frame_10x.panels.app_db.views.pod_padding,"0px",day8.re_frame_10x.panels.app_db.views.pod_padding),new cljs.core.Keyword(null,"overflow-x","overflow-x",-26547754),"auto",new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),"hidden"], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.cljs_devtools.simple_render,day8.re_frame_10x.tools.coll.get_in_with_lists.call(null,cljs.core.deref.call(null,app_db_after),path),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["app-db-path",path], null)], null)], null)], null):null),(cljs.core.truth_(render_diff_QMARK_)?(function (){var app_db_before = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","current-epoch-app-db-before","day8.re-frame-10x.panels.app-db.subs/current-epoch-app-db-before",1079113245)], null));
var vec__36691 = (cljs.core.truth_(render_diff_QMARK_)?clojure.data.diff.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,app_db_before),path),cljs.core.get_in.call(null,cljs.core.deref.call(null,app_db_after),path)):null);
var diff_before = cljs.core.nth.call(null,vec__36691,(0),null);
var diff_after = cljs.core.nth.call(null,vec__36691,(1),null);
var _ = cljs.core.nth.call(null,vec__36691,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),day8.re_frame_10x.styles.app_db_inspector_link.call(null,ambiance),new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.hyperlink_href,new cljs.core.Keyword(null,"label","label",1718410804),"ONLY BEFORE",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),day8.re_frame_10x.styles.gs_7s], null),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rel","rel",1378823488),"noopener noreferrer"], null),new cljs.core.Keyword(null,"target","target",253001721),"_blank",new cljs.core.Keyword(null,"href","href",-793805698),day8.re_frame_10x.panels.app_db.views.diff_url], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.v_box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"overflow-x","overflow-x",-26547754),"auto",new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),"hidden"], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.cljs_devtools.simple_render,diff_before,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["app-db-diff",path], null)], null)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),day8.re_frame_10x.styles.app_db_inspector_link.call(null,ambiance),new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.hyperlink_href,new cljs.core.Keyword(null,"label","label",1718410804),"ONLY AFTER",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),day8.re_frame_10x.styles.gs_7s], null),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rel","rel",1378823488),"noopener noreferrer"], null),new cljs.core.Keyword(null,"target","target",253001721),"_blank",new cljs.core.Keyword(null,"href","href",-793805698),day8.re_frame_10x.panels.app_db.views.diff_url], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.v_box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"overflow-x","overflow-x",-26547754),"auto",new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),"hidden"], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.cljs_devtools.simple_render,diff_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["app-db-diff",path], null)], null)], null)], null)], null)], null);
})():null),(cljs.core.truth_(open_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.gap_f,new cljs.core.Keyword(null,"size","size",1098693007),day8.re_frame_10x.panels.app_db.views.pod_padding], null):null)], null)], null)], null)], null);
});
day8.re_frame_10x.panels.app_db.views.no_pods = (function day8$re_frame_10x$panels$app_db$views$no_pods(){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.h_box,new cljs.core.Keyword(null,"margin","margin",-995903681),day8.re_frame_10x.components.re_com.css_join.call(null,day8.re_frame_10x.styles.gs_19s," 0px 0px 50px"),new cljs.core.Keyword(null,"gap","gap",80255254),day8.re_frame_10x.styles.gs_12s,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.svgs.round_arrow], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.label,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"160px",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"22px"], null),new cljs.core.Keyword(null,"label","label",1718410804),"see the values in app-db by adding one or more inspectors"], null)], null)], null);
});
day8.re_frame_10x.panels.app_db.views.pod_header_column_titles = (function day8$re_frame_10x$panels$app_db$views$pod_header_column_titles(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.h_box,new cljs.core.Keyword(null,"height","height",1025178622),day8.re_frame_10x.styles.gs_19s,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.gap_f,new cljs.core.Keyword(null,"size","size",1098693007),day8.re_frame_10x.styles.gs_31s], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.box,new cljs.core.Keyword(null,"size","size",1098693007),"1",new cljs.core.Keyword(null,"height","height",1025178622),"31px",new cljs.core.Keyword(null,"child","child",623967545),""], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.box,new cljs.core.Keyword(null,"width","width",-384071477),day8.re_frame_10x.styles.gs_50s,new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.label,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"9px"], null),new cljs.core.Keyword(null,"label","label",1718410804),"DIFFS"], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.box,new cljs.core.Keyword(null,"width","width",-384071477),day8.re_frame_10x.styles.gs_50s,new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.label,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"9px"], null),new cljs.core.Keyword(null,"label","label",1718410804),"DELETE"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.gap_f,new cljs.core.Keyword(null,"size","size",1098693007),day8.re_frame_10x.styles.gs_2s], null)], null)], null);
});
day8.re_frame_10x.panels.app_db.views.pod_section = (function day8$re_frame_10x$panels$app_db$views$pod_section(){
var pods = cljs.core.deref.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","paths","day8.re-frame-10x.panels.app-db.subs/paths",564942769)], null)));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.v_box,new cljs.core.Keyword(null,"size","size",1098693007),"1",new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.empty_QMARK_.call(null,pods))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.panels.app_db.views.no_pods], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.panels.app_db.views.pod_header_column_titles], null))], null),(function (){var iter__4611__auto__ = (function day8$re_frame_10x$panels$app_db$views$pod_section_$_iter__36694(s__36695){
return (new cljs.core.LazySeq(null,(function (){
var s__36695__$1 = s__36695;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__36695__$1);
if(temp__5753__auto__){
var s__36695__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36695__$2)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,s__36695__$2);
var size__4610__auto__ = cljs.core.count.call(null,c__4609__auto__);
var b__36697 = cljs.core.chunk_buffer.call(null,size__4610__auto__);
if((function (){var i__36696 = (0);
while(true){
if((i__36696 < size__4610__auto__)){
var p = cljs.core._nth.call(null,c__4609__auto__,i__36696);
cljs.core.chunk_append.call(null,b__36697,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.panels.app_db.views.pod,p], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.gap_f,new cljs.core.Keyword(null,"size","size",1098693007),day8.re_frame_10x.styles.gs_12s], null)], null));

var G__36698 = (i__36696 + (1));
i__36696 = G__36698;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36697),day8$re_frame_10x$panels$app_db$views$pod_section_$_iter__36694.call(null,cljs.core.chunk_rest.call(null,s__36695__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36697),null);
}
} else {
var p = cljs.core.first.call(null,s__36695__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.panels.app_db.views.pod,p], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.gap_f,new cljs.core.Keyword(null,"size","size",1098693007),day8.re_frame_10x.styles.gs_12s], null)], null),day8$re_frame_10x$panels$app_db$views$pod_section_$_iter__36694.call(null,cljs.core.rest.call(null,s__36695__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__.call(null,pods);
})())], null);
});
day8.re_frame_10x.panels.app_db.views.panel_style_factory$ = (function day8$re_frame_10x$panels$app_db$views$panel_style_factory$(style_name36699,params36700){
var style36702 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(style_name36699)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),day8.re_frame_10x.styles.gs_5,new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"auto","auto",-566279492)], null)], null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"css","css",1135045163),day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.runtime.compile_css.call(null,style36702),new cljs.core.Keyword(null,"name","name",1843675177),style_name36699], null);
});

var factory_name36701_36704 = day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.util.factory__GT_name.call(null,day8.re_frame_10x.panels.app_db.views.panel_style_factory$);
day8.re_frame_10x.panels.app_db.views.panel_style = (function day8$re_frame_10x$panels$app_db$views$panel_style(){
return day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.runtime.ensure_style_BANG_.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),factory_name36701_36704,day8.re_frame_10x.panels.app_db.views.panel_style_factory$,cljs.core.PersistentVector.EMPTY);
});
day8.re_frame_10x.panels.app_db.views.panel = (function day8$re_frame_10x$panels$app_db$views$panel(_){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),day8.re_frame_10x.panels.app_db.views.panel_style.call(null),new cljs.core.Keyword(null,"size","size",1098693007),"1",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.panels.app_db.views.panel_header], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.panels.app_db.views.pod_section], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.gap_f,new cljs.core.Keyword(null,"size","size",1098693007),day8.re_frame_10x.styles.gs_19s], null)], null)], null);
});

//# sourceMappingURL=views.js.map
