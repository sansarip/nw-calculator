// Compiled by ClojureScript 1.10.879 {:optimizations :none}
goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.settings');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers');
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.settings.defaults = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"loaded?","loaded?",-1108015206),false,new cljs.core.Keyword(null,"global-interceptors","global-interceptors",-1995759472),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.empty_queue], null);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.settings.store = cljs.core.atom.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.settings.defaults);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.on_load.call(null,(function (){
return cljs.core.swap_BANG_.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.settings.store,(function (m){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"loaded?","loaded?",-1108015206),true);
}));
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.settings.loaded_QMARK_ = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$settings$loaded_QMARK_(){
return new cljs.core.Keyword(null,"loaded?","loaded?",-1108015206).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.settings.store));
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.settings._replace_global_interceptor = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$settings$_replace_global_interceptor(global_interceptors,interceptor){
return cljs.core.reduce.call(null,(function (ret,existing_interceptor){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(interceptor),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(existing_interceptor))){
if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.debug_enabled_QMARK_){
if(cljs.core.not.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.settings.loaded_QMARK_.call(null))){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: replacing duplicate global interceptor id: ",new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(interceptor));
} else {
}
} else {
}

return cljs.core.conj.call(null,ret,interceptor);
} else {
return cljs.core.conj.call(null,ret,existing_interceptor);
}
}),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.empty_queue,global_interceptors);
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.settings.reg_global_interceptor = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$settings$reg_global_interceptor(p__33427){
var map__33428 = p__33427;
var map__33428__$1 = cljs.core.__destructure_map.call(null,map__33428);
var interceptor = map__33428__$1;
var id = cljs.core.get.call(null,map__33428__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.swap_BANG_.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.settings.store,cljs.core.update,new cljs.core.Keyword(null,"global-interceptors","global-interceptors",-1995759472),(function (global_interceptors){
var ids = cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),global_interceptors);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([id]),ids))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.settings._replace_global_interceptor.call(null,global_interceptors,interceptor);
} else {
return cljs.core.conj.call(null,global_interceptors,interceptor);
}
}));
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.settings.get_global_interceptors = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$settings$get_global_interceptors(){
return new cljs.core.Keyword(null,"global-interceptors","global-interceptors",-1995759472).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.settings.store));
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.settings.clear_global_interceptors = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$settings$clear_global_interceptors(var_args){
var G__33431 = arguments.length;
switch (G__33431) {
case 0:
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.settings.clear_global_interceptors.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.settings.clear_global_interceptors.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.settings.clear_global_interceptors.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.swap_BANG_.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.settings.store,cljs.core.assoc,new cljs.core.Keyword(null,"global-interceptors","global-interceptors",-1995759472),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.empty_queue);
}));

(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.settings.clear_global_interceptors.cljs$core$IFn$_invoke$arity$1 = (function (id){
return cljs.core.swap_BANG_.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.settings.store,cljs.core.update,new cljs.core.Keyword(null,"global-interceptors","global-interceptors",-1995759472),(function (global_interceptors){
return cljs.core.into.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.empty_queue,cljs.core.remove.call(null,(function (p1__33429_SHARP_){
return cljs.core._EQ_.call(null,id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__33429_SHARP_));
}),global_interceptors));
}));
}));

(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.settings.clear_global_interceptors.cljs$lang$maxFixedArity = 1);


//# sourceMappingURL=settings.js.map
