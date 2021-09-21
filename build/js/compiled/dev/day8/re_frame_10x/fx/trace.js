// Compiled by ClojureScript 1.10.879 {:optimizations :none}
goog.provide('day8.re_frame_10x.fx.trace');
goog.require('cljs.core');
goog.require('re_frame.trace');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core');
goog.require('day8.re_frame_10x.navigation.epochs.events');
day8.re_frame_10x.fx.trace.enable_BANG_ = (function day8$re_frame_10x$fx$trace$enable_BANG_(p__34032){
var map__34033 = p__34032;
var map__34033__$1 = cljs.core.__destructure_map.call(null,map__34033);
var key = cljs.core.get.call(null,map__34033__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
return re_frame.trace.register_trace_cb.call(null,key,(function (p1__34031_SHARP_){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.events","receive-new-traces","day8.re-frame-10x.navigation.epochs.events/receive-new-traces",542616228),p1__34031_SHARP_], null));
}));
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_fx.call(null,new cljs.core.Keyword("day8.re-frame-10x.fx.trace","enable","day8.re-frame-10x.fx.trace/enable",-1468830594),day8.re_frame_10x.fx.trace.enable_BANG_);
day8.re_frame_10x.fx.trace.disable_BANG_ = (function day8$re_frame_10x$fx$trace$disable_BANG_(p__34034){
var map__34035 = p__34034;
var map__34035__$1 = cljs.core.__destructure_map.call(null,map__34035);
var key = cljs.core.get.call(null,map__34035__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
return re_frame.trace.remove_trace_cb.call(null,key);
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_fx.call(null,new cljs.core.Keyword("day8.re-frame-10x.fx.trace","disable","day8.re-frame-10x.fx.trace/disable",-463610394),day8.re_frame_10x.fx.trace.disable_BANG_);

//# sourceMappingURL=trace.js.map
