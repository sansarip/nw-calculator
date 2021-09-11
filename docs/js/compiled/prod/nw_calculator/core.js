// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('nw_calculator.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('taoensso.timbre');
goog.require('reagent.dom');
goog.require('re_frame.core');
goog.require('nw_calculator.events');
goog.require('nw_calculator.views');
goog.require('nw_calculator.utilities');
nw_calculator.core.dev_setup = (function nw_calculator$core$dev_setup(){
if(cljs.core.truth_(goog.DEBUG)){
cljs.core.enable_console_print_BANG_();

return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$info,"nw-calculator.core","/private/var/folders/sb/g6t896vs227cr9lgx60z75jc0000gp/T/form-init3262141634217341287.clj",13,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\uD83D\uDC77 Dev mode!"], null);
}),null)),null,1968652584,null);
} else {
return null;
}
});
nw_calculator.core.initialize_app_BANG_ = (function nw_calculator$core$initialize_app_BANG_(){
re_frame.core.clear_subscription_cache_BANG_();

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.main_panel], null),document.getElementById("app"));
});
nw_calculator.core.main = (function nw_calculator$core$main(){
nw_calculator.core.dev_setup();

re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_initialize_DASH_db,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dark_DASH_theme_QMARK_,nw_calculator.utilities.get_local_storage(cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_dark_DASH_theme_QMARK_)], null)], null));

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nw_DASH_calculator$events_SLASH_fetch_DASH_items], null));

return nw_calculator.core.initialize_app_BANG_();
});
goog.exportSymbol('nw_calculator.core.main', nw_calculator.core.main);
