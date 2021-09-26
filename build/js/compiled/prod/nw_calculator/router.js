// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('nw_calculator.router');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('nw_calculator.events');
goog.require('re_frame.core');
goog.require('reitit.frontend');
goog.require('reitit.frontend.easy');
goog.require('nw_calculator.routes');
nw_calculator.router.on_navigate = (function nw_calculator$router$on_navigate(new_match){
if(cljs.core.truth_(new_match)){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_navigated,new_match], null));
} else {
return null;
}
});
nw_calculator.router.router = reitit.frontend.router.cljs$core$IFn$_invoke$arity$1(nw_calculator.routes.routes);
nw_calculator.router.init_routes_BANG_ = (function nw_calculator$router$init_routes_BANG_(){
return reitit.frontend.easy.start_BANG_(nw_calculator.router.router,nw_calculator.router.on_navigate,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$use_DASH_fragment,true], null));
});
