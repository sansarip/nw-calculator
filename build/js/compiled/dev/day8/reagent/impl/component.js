// Compiled by ClojureScript 1.10.879 {:optimizations :none}
goog.provide('day8.reagent.impl.component');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.string');
goog.require('re_frame.trace');
goog.require('re_frame.interop');
goog.require('reagent.impl.component');
goog.require('reagent.impl.batching');
goog.require('reagent.impl.util');
goog.require('reagent.ratom');
goog.require('reagent.debug');
day8.reagent.impl.component.operation_name = cljs.core.memoize.call(null,(function (c){
return cljs.core.last.call(null,clojure.string.split.call(null,reagent.impl.component.component_name.call(null,c),/ > /));
}));
day8.reagent.impl.component.wrap_funs = (function day8$reagent$impl$component$wrap_funs(fmap,compiler){
var renders_39734 = cljs.core.select_keys.call(null,fmap,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"reagentRender","reagentRender",-358306383)], null));
var render_fun_39735 = cljs.core.first.call(null,cljs.core.vals.call(null,renders_39734));
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"componentFunction","componentFunction",825866104).cljs$core$IFn$_invoke$arity$1(fmap))){
} else {
throw (new Error(["Assert failed: ",":component-function is no longer supported, use :reagent-render instead.","\n","(not (:componentFunction fmap))"].join('')));
}

if((cljs.core.count.call(null,renders_39734) > (0))){
} else {
throw (new Error(["Assert failed: ","Missing reagent-render","\n","(pos? (count renders))"].join('')));
}

if(((1) === cljs.core.count.call(null,renders_39734))){
} else {
throw (new Error(["Assert failed: ","Too many render functions supplied","\n","(== 1 (count renders))"].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,render_fun_39735)){
} else {
throw (new Error(["Assert failed: ",["Expected something callable, not ",cljs.core.pr_str.call(null,render_fun_39735)].join(''),"\n","(clojure.core/ifn? render-fun)"].join('')));
}


var render_fun = (function (){var or__4212__auto__ = new cljs.core.Keyword(null,"reagentRender","reagentRender",-358306383).cljs$core$IFn$_invoke$arity$1(fmap);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(fmap);
}
})();
var legacy_render = (new cljs.core.Keyword(null,"reagentRender","reagentRender",-358306383).cljs$core$IFn$_invoke$arity$1(fmap) == null);
var name = (function (){var or__4212__auto__ = new cljs.core.Keyword(null,"displayName","displayName",-809144601).cljs$core$IFn$_invoke$arity$1(fmap);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var or__4212__auto____$1 = reagent.impl.util.fun_name.call(null,render_fun);
if(cljs.core.truth_(or__4212__auto____$1)){
return or__4212__auto____$1;
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.call(null,"reagent"));
}
}
})();
var fmap__$1 = cljs.core.reduce_kv.call(null,(function (m,k,v){
return cljs.core.assoc.call(null,m,k,reagent.impl.component.get_wrapper.call(null,k,v));
}),cljs.core.PersistentArrayMap.EMPTY,fmap);
return cljs.core.assoc.call(null,fmap__$1,new cljs.core.Keyword(null,"displayName","displayName",-809144601),name,new cljs.core.Keyword(null,"cljsLegacyRender","cljsLegacyRender",-1527295613),legacy_render,new cljs.core.Keyword(null,"reagentRender","reagentRender",-358306383),render_fun,new cljs.core.Keyword(null,"render","render",-1408033454),(function day8$reagent$impl$component$wrap_funs_$_render(){
var c = this;
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR__orig_val__39732_39736 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__39733_39737 = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"tags","tags",1771418977),(function (){var temp__5751__auto__ = reagent.impl.component.component_name.call(null,c);
if(cljs.core.truth_(temp__5751__auto__)){
var component_name = temp__5751__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-name","component-name",-1318676056),component_name], null);
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),new cljs.core.Keyword(null,"operation","operation",-1267664310),day8.reagent.impl.component.operation_name.call(null,c)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__39733_39737);

try{try{}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__16299__auto___39738 = re_frame.interop.now.call(null);
var duration__16300__auto___39739 = (end__16299__auto___39738 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__16300__auto___39739,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__16299__auto___39738);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__39732_39736);
}} else {
}

if(reagent.impl.util._STAR_non_reactive_STAR_){
return reagent.impl.component.do_render.call(null,c,compiler);
} else {
var rat = goog.object.get(c,"cljsRatom");
var _ = reagent.impl.batching.mark_rendered.call(null,c);
var res = (((rat == null))?reagent.ratom.run_in_reaction.call(null,(function (){
return reagent.impl.component.do_render.call(null,c,compiler);
}),c,"cljsRatom",reagent.impl.batching.queue_render,reagent.impl.component.rat_opts):rat._run(false));
var cljs_ratom = goog.object.get(c,"cljsRatom");
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__16301__auto___39740 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cljs_ratom),new cljs.core.Keyword(null,"input-signals","input-signals",563633497),(cljs.core.truth_(cljs_ratom)?cljs.core.map.call(null,re_frame.interop.reagent_id,goog.object.get(cljs_ratom,"watching",new cljs.core.Keyword(null,"none","none",1333468478))):null)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cljs_ratom),new cljs.core.Keyword(null,"input-signals","input-signals",563633497),(cljs.core.truth_(cljs_ratom)?cljs.core.map.call(null,re_frame.interop.reagent_id,goog.object.get(cljs_ratom,"watching",new cljs.core.Keyword(null,"none","none",1333468478))):null)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
(re_frame.trace._STAR_current_trace_STAR_ = new_trace__16301__auto___39740);

} else {
}

return res;
}
}));
});
day8.reagent.impl.component.patch_wrap_funs = (function day8$reagent$impl$component$patch_wrap_funs(){
return (reagent.impl.component.wrap_funs = day8.reagent.impl.component.wrap_funs);
});
if((typeof day8 !== 'undefined') && (typeof day8.reagent !== 'undefined') && (typeof day8.reagent.impl !== 'undefined') && (typeof day8.reagent.impl.component !== 'undefined') && (typeof day8.reagent.impl.component.original_custom_wrapper !== 'undefined')){
} else {
day8.reagent.impl.component.original_custom_wrapper = reagent.impl.component.custom_wrapper;
}
day8.reagent.impl.component.custom_wrapper = (function day8$reagent$impl$component$custom_wrapper(key,f){
var G__39741 = key;
var G__39741__$1 = (((G__39741 instanceof cljs.core.Keyword))?G__39741.fqn:null);
switch (G__39741__$1) {
case "componentWillUnmount":
return (function day8$reagent$impl$component$custom_wrapper_$_componentWillUnmount(){
var c = this;
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR__orig_val__39742_39745 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__39743_39746 = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),key,new cljs.core.Keyword(null,"operation","operation",-1267664310),cljs.core.last.call(null,clojure.string.split.call(null,reagent.impl.component.component_name.call(null,c),/ > /)),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-name","component-name",-1318676056),reagent.impl.component.component_name.call(null,c),new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,goog.object.get(c,"cljsRatom"))], null)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__39743_39746);

try{try{}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__16299__auto___39747 = re_frame.interop.now.call(null);
var duration__16300__auto___39748 = (end__16299__auto___39747 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__16300__auto___39748,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__16299__auto___39747);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__39742_39745);
}} else {
}

return day8.reagent.impl.component.original_custom_wrapper.call(null,key,f).call(c,c);
});

break;
default:
return day8.reagent.impl.component.original_custom_wrapper.call(null,key,f);

}
});
day8.reagent.impl.component.patch_custom_wrapper = (function day8$reagent$impl$component$patch_custom_wrapper(){
return (reagent.impl.component.custom_wrapper = day8.reagent.impl.component.custom_wrapper);
});

//# sourceMappingURL=component.js.map
