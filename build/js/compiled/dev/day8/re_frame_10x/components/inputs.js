// Compiled by ClojureScript 1.10.879 {:optimizations :none}
goog.provide('day8.re_frame_10x.components.inputs');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core');
goog.require('day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.core');
goog.require('day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color');
goog.require('day8.re_frame_10x.panels.settings.subs');
goog.require('day8.re_frame_10x.components.re_com');
goog.require('day8.re_frame_10x.material');
goog.require('day8.re_frame_10x.styles');
day8.re_frame_10x.components.inputs.checkbox_style_factory$ = (function day8$re_frame_10x$components$inputs$checkbox_style_factory$(style_name38946,params38947,ambiance,checked_QMARK_,_){
var base_style38951 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),day8.re_frame_10x.styles.gs_5], null),(cljs.core.truth_(checked_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),day8.re_frame_10x.styles.nord7], null)], null):null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"bright","bright",-1876684577),ambiance))?day8.re_frame_10x.styles.nord1:day8.re_frame_10x.styles.nord5)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),day8.re_frame_10x.styles.nord7], null)], null)], null)], null);
var key__35976__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,cljs.core.first.call(null,base_style38951)));
var name38950 = new cljs.core.Var(function(){return day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.util.build_style_name;},new cljs.core.Symbol("day8.re-frame-10x.inlined-deps.spade.git-sha-93ef290.util","build-style-name","day8.re-frame-10x.inlined-deps.spade.git-sha-93ef290.util/build-style-name",-749415777,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"day8.re-frame-10x.inlined-deps.spade.git-sha-93ef290.util","day8.re-frame-10x.inlined-deps.spade.git-sha-93ef290.util",-1712623293,null),new cljs.core.Symbol(null,"build-style-name","build-style-name",-1171118707,null),"resources/public/js/compiled/dev/day8/re_frame_10x/inlined_deps/spade/git_sha_93ef290/util.cljc",23,1,37,37,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"base","base",1825810849,null),new cljs.core.Symbol(null,"style-key","style-key",1072873135,null),new cljs.core.Symbol(null,"params","params",-1943919534,null)], null)),null,(cljs.core.truth_(day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.util.build_style_name)?day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.util.build_style_name.cljs$lang$test:null)])).call(null,style_name38946,key__35976__auto__,params38947);
var style38949 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name38950)].join('')], null),base_style38951);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"css","css",1135045163),day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.runtime.compile_css.call(null,style38949),new cljs.core.Keyword(null,"name","name",1843675177),name38950], null);
});

var factory_name38948_38952 = day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.util.factory__GT_name.call(null,day8.re_frame_10x.components.inputs.checkbox_style_factory$);
day8.re_frame_10x.components.inputs.checkbox_style = (function day8$re_frame_10x$components$inputs$checkbox_style(ambiance,checked_QMARK_,_){
return day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.runtime.ensure_style_BANG_.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),factory_name38948_38952,day8.re_frame_10x.components.inputs.checkbox_style_factory$,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ambiance,checked_QMARK_,_], null));
});
day8.re_frame_10x.components.inputs.checkbox = (function day8$re_frame_10x$components$inputs$checkbox(p__38953){
var map__38954 = p__38953;
var map__38954__$1 = cljs.core.__destructure_map.call(null,map__38954);
var model = cljs.core.get.call(null,map__38954__$1,new cljs.core.Keyword(null,"model","model",331153215));
var on_change = cljs.core.get.call(null,map__38954__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var label = cljs.core.get.call(null,map__38954__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var disabled_QMARK_ = cljs.core.get.call(null,map__38954__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var class$ = cljs.core.get.call(null,map__38954__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var ambiance = cljs.core.deref.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","ambiance","day8.re-frame-10x.panels.settings.subs/ambiance",-230258012)], null)));
var checked_QMARK_ = day8.re_frame_10x.components.re_com.deref_or_value.call(null,model);
var disabled_QMARK___$1 = day8.re_frame_10x.components.re_com.deref_or_value.call(null,disabled_QMARK_);
var on_click_fn = (function (){
if(cljs.core.truth_((function (){var and__4210__auto__ = on_change;
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not.call(null,disabled_QMARK___$1);
} else {
return and__4210__auto__;
}
})())){
return on_change.call(null,cljs.core.not.call(null,checked_QMARK_));
} else {
return null;
}
});
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.h_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.components.inputs.checkbox_style.call(null,ambiance,checked_QMARK_,disabled_QMARK___$1))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click_fn], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(checked_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.material.check_box], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.material.check_box_outline_blank], null)),(cljs.core.truth_(label)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.label,new cljs.core.Keyword(null,"label","label",1718410804),label], null):null)], null)], null);
});
day8.re_frame_10x.components.inputs.radio_button_style_factory$ = (function day8$re_frame_10x$components$inputs$radio_button_style_factory$(style_name38955,params38956,_,checked_QMARK_,disabled_QMARK_){
var base_style38960 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),(cljs.core.truth_(disabled_QMARK_)?null:new cljs.core.Keyword(null,"pointer","pointer",85071187))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),day8.re_frame_10x.styles.gs_5], null),(cljs.core.truth_(checked_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.lighten.call(null,day8.re_frame_10x.styles.nord3,(20))], null)], null):null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.lighten.call(null,day8.re_frame_10x.styles.nord3,(20))], null)], null)], null)], null);
var key__35976__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,cljs.core.first.call(null,base_style38960)));
var name38959 = new cljs.core.Var(function(){return day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.util.build_style_name;},new cljs.core.Symbol("day8.re-frame-10x.inlined-deps.spade.git-sha-93ef290.util","build-style-name","day8.re-frame-10x.inlined-deps.spade.git-sha-93ef290.util/build-style-name",-749415777,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"day8.re-frame-10x.inlined-deps.spade.git-sha-93ef290.util","day8.re-frame-10x.inlined-deps.spade.git-sha-93ef290.util",-1712623293,null),new cljs.core.Symbol(null,"build-style-name","build-style-name",-1171118707,null),"resources/public/js/compiled/dev/day8/re_frame_10x/inlined_deps/spade/git_sha_93ef290/util.cljc",23,1,37,37,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"base","base",1825810849,null),new cljs.core.Symbol(null,"style-key","style-key",1072873135,null),new cljs.core.Symbol(null,"params","params",-1943919534,null)], null)),null,(cljs.core.truth_(day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.util.build_style_name)?day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.util.build_style_name.cljs$lang$test:null)])).call(null,style_name38955,key__35976__auto__,params38956);
var style38958 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name38959)].join('')], null),base_style38960);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"css","css",1135045163),day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.runtime.compile_css.call(null,style38958),new cljs.core.Keyword(null,"name","name",1843675177),name38959], null);
});

var factory_name38957_38961 = day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.util.factory__GT_name.call(null,day8.re_frame_10x.components.inputs.radio_button_style_factory$);
day8.re_frame_10x.components.inputs.radio_button_style = (function day8$re_frame_10x$components$inputs$radio_button_style(_,checked_QMARK_,disabled_QMARK_){
return day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.runtime.ensure_style_BANG_.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),factory_name38957_38961,day8.re_frame_10x.components.inputs.radio_button_style_factory$,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [_,checked_QMARK_,disabled_QMARK_], null));
});
day8.re_frame_10x.components.inputs.radio_button = (function day8$re_frame_10x$components$inputs$radio_button(p__38962){
var map__38963 = p__38962;
var map__38963__$1 = cljs.core.__destructure_map.call(null,map__38963);
var model = cljs.core.get.call(null,map__38963__$1,new cljs.core.Keyword(null,"model","model",331153215));
var value = cljs.core.get.call(null,map__38963__$1,new cljs.core.Keyword(null,"value","value",305978217));
var on_change = cljs.core.get.call(null,map__38963__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var label = cljs.core.get.call(null,map__38963__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var disabled_QMARK_ = cljs.core.get.call(null,map__38963__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var class$ = cljs.core.get.call(null,map__38963__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var ambiance = cljs.core.deref.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","ambiance","day8.re-frame-10x.panels.settings.subs/ambiance",-230258012)], null)));
var model__$1 = day8.re_frame_10x.components.re_com.deref_or_value.call(null,model);
var checked_QMARK_ = cljs.core._EQ_.call(null,model__$1,value);
var disabled_QMARK___$1 = day8.re_frame_10x.components.re_com.deref_or_value.call(null,disabled_QMARK_);
var on_click_fn = (function (){
if(cljs.core.truth_((function (){var and__4210__auto__ = on_change;
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not.call(null,disabled_QMARK___$1);
} else {
return and__4210__auto__;
}
})())){
return on_change.call(null,value);
} else {
return null;
}
});
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.h_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.components.inputs.radio_button_style.call(null,ambiance,checked_QMARK_,disabled_QMARK___$1))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click_fn], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((checked_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.material.radio_button_checked], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.material.radio_button_unchecked], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.label,new cljs.core.Keyword(null,"label","label",1718410804),label], null)], null)], null);
});
day8.re_frame_10x.components.inputs.search_style_factory$ = (function day8$re_frame_10x$components$inputs$search_style_factory$(style_name38964,params38965,ambiance){
var base_style38969 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),day8.re_frame_10x.styles.border_2.call(null,ambiance)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"background-color","background-color",570434026),day8.re_frame_10x.styles.background_color_1.call(null,ambiance)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:focus-visible","&:focus-visible",-739055946),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outline","outline",793464534),new cljs.core.Keyword(null,"none","none",1333468478)], null)], null)], null)], null);
var key__35976__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,cljs.core.first.call(null,base_style38969)));
var name38968 = new cljs.core.Var(function(){return day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.util.build_style_name;},new cljs.core.Symbol("day8.re-frame-10x.inlined-deps.spade.git-sha-93ef290.util","build-style-name","day8.re-frame-10x.inlined-deps.spade.git-sha-93ef290.util/build-style-name",-749415777,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"day8.re-frame-10x.inlined-deps.spade.git-sha-93ef290.util","day8.re-frame-10x.inlined-deps.spade.git-sha-93ef290.util",-1712623293,null),new cljs.core.Symbol(null,"build-style-name","build-style-name",-1171118707,null),"resources/public/js/compiled/dev/day8/re_frame_10x/inlined_deps/spade/git_sha_93ef290/util.cljc",23,1,37,37,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"base","base",1825810849,null),new cljs.core.Symbol(null,"style-key","style-key",1072873135,null),new cljs.core.Symbol(null,"params","params",-1943919534,null)], null)),null,(cljs.core.truth_(day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.util.build_style_name)?day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.util.build_style_name.cljs$lang$test:null)])).call(null,style_name38964,key__35976__auto__,params38965);
var style38967 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name38968)].join('')], null),base_style38969);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"css","css",1135045163),day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.runtime.compile_css.call(null,style38967),new cljs.core.Keyword(null,"name","name",1843675177),name38968,new cljs.core.Keyword(null,"composes","composes",-378837833),day8.re_frame_10x.styles.colors_1.call(null,ambiance)], null);
});

var factory_name38966_38970 = day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.util.factory__GT_name.call(null,day8.re_frame_10x.components.inputs.search_style_factory$);
day8.re_frame_10x.components.inputs.search_style = (function day8$re_frame_10x$components$inputs$search_style(ambiance){
return day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.runtime.ensure_style_BANG_.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),factory_name38966_38970,day8.re_frame_10x.components.inputs.search_style_factory$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ambiance], null));
});
day8.re_frame_10x.components.inputs.search = (function day8$re_frame_10x$components$inputs$search(p__38973){
var map__38974 = p__38973;
var map__38974__$1 = cljs.core.__destructure_map.call(null,map__38974);
var title = cljs.core.get.call(null,map__38974__$1,new cljs.core.Keyword(null,"title","title",636505583));
var placeholder = cljs.core.get.call(null,map__38974__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var on_save = cljs.core.get.call(null,map__38974__$1,new cljs.core.Keyword(null,"on-save","on-save",1618176266));
var on_change = cljs.core.get.call(null,map__38974__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var ambiance = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","ambiance","day8.re-frame-10x.panels.settings.subs/ambiance",-230258012)], null));
var val = day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.atom.call(null,title);
var save = (function (){
var v = clojure.string.trim.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,val)));
if((((v).length) > (0))){
return on_save.call(null,v);
} else {
return null;
}
});
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.h_box,new cljs.core.Keyword(null,"class","class",-2030961996),day8.re_frame_10x.components.inputs.search_style.call(null,cljs.core.deref.call(null,ambiance)),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.material.search], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,val),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"size","size",1098693007),((((20) > ((cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,val))).length)))?(25):((cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,val))).length)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__38971_SHARP_){
cljs.core.reset_BANG_.call(null,val,p1__38971_SHARP_.target.value);

return on_change.call(null,p1__38971_SHARP_);
}),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (p1__38972_SHARP_){
var G__38975 = p1__38972_SHARP_.which;
switch (G__38975) {
case (13):
save.call(null);

return cljs.core.reset_BANG_.call(null,val,"");

break;
default:
return null;

}
})], null)], null)], null)], null);
});
});

//# sourceMappingURL=inputs.js.map
