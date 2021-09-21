// Compiled by ClojureScript 1.10.879 {:optimizations :none}
goog.provide('day8.re_frame_10x.fx.debounce');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core');
day8.re_frame_10x.fx.debounce.now = (function day8$re_frame_10x$fx$debounce$now(){
return (new Date()).getTime();
});
day8.re_frame_10x.fx.debounce.registered_keys = cljs.core.atom.call(null,null);
day8.re_frame_10x.fx.debounce.dispatch_if_not_superceded = (function day8$re_frame_10x$fx$debounce$dispatch_if_not_superceded(p__33957){
var map__33958 = p__33957;
var map__33958__$1 = cljs.core.__destructure_map.call(null,map__33958);
var key = cljs.core.get.call(null,map__33958__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var event = cljs.core.get.call(null,map__33958__$1,new cljs.core.Keyword(null,"event","event",301435442));
var time_received = cljs.core.get.call(null,map__33958__$1,new cljs.core.Keyword(null,"time-received","time-received",1643766907));
if(cljs.core._EQ_.call(null,time_received,cljs.core.get.call(null,cljs.core.deref.call(null,day8.re_frame_10x.fx.debounce.registered_keys),key))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.dispatch.call(null,event);
} else {
return null;
}
});
day8.re_frame_10x.fx.debounce.dispatch_later = (function day8$re_frame_10x$fx$debounce$dispatch_later(p__33959){
var map__33960 = p__33959;
var map__33960__$1 = cljs.core.__destructure_map.call(null,map__33960);
var debounce = map__33960__$1;
var delay = cljs.core.get.call(null,map__33960__$1,new cljs.core.Keyword(null,"delay","delay",-574225219));
return setTimeout((function (){
return day8.re_frame_10x.fx.debounce.dispatch_if_not_superceded.call(null,debounce);
}),delay);
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_fx.call(null,new cljs.core.Keyword("day8.re-frame-10x.fx.debounce","dispatch","day8.re-frame-10x.fx.debounce/dispatch",-293096343),(function day8$re_frame_10x$fx$debounce$dispatch_debounce(p__33961){
var map__33962 = p__33961;
var map__33962__$1 = cljs.core.__destructure_map.call(null,map__33962);
var debounce = map__33962__$1;
var key = cljs.core.get.call(null,map__33962__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var event = cljs.core.get.call(null,map__33962__$1,new cljs.core.Keyword(null,"event","event",301435442));
var delay = cljs.core.get.call(null,map__33962__$1,new cljs.core.Keyword(null,"delay","delay",-574225219));
if((!((((key instanceof cljs.core.Keyword)) && (((cljs.core.vector_QMARK_.call(null,event)) && (cljs.core.integer_QMARK_.call(null,delay)))))))){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame-10x ::debounce/dispatch invalid argument");
} else {
}

var ts = day8.re_frame_10x.fx.debounce.now.call(null);
cljs.core.swap_BANG_.call(null,day8.re_frame_10x.fx.debounce.registered_keys,cljs.core.assoc,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(debounce),ts);

return day8.re_frame_10x.fx.debounce.dispatch_later.call(null,cljs.core.assoc.call(null,debounce,new cljs.core.Keyword(null,"time-received","time-received",1643766907),ts));
}));

//# sourceMappingURL=debounce.js.map
