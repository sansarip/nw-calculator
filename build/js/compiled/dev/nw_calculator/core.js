// Compiled by ClojureScript 1.10.879 {:optimizations :none}
goog.provide('nw_calculator.core');
goog.require('cljs.core');
goog.require('taoensso.timbre');
goog.require('reagent.dom');
goog.require('re_frame.core');
goog.require('nw_calculator.events');
goog.require('nw_calculator.views');
goog.require('nw_calculator.utilities');
nw_calculator.core.dev_setup = (function nw_calculator$core$dev_setup(){
if(cljs.core.truth_(goog.DEBUG)){
cljs.core.enable_console_print_BANG_.call(null);

return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"nw-calculator.core","/Users/sansarip/Dev/nw-calculator/dev/user.clj",13,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\uD83D\uDC77 Dev mode!"], null);
}),null)),null,25710273,null);
} else {
return null;
}
});
nw_calculator.core.initialize_app_BANG_ = (function nw_calculator$core$initialize_app_BANG_(){
re_frame.core.clear_subscription_cache_BANG_.call(null);

return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.views.main_panel], null),document.getElementById("app"));
});
nw_calculator.core.main = (function nw_calculator$core$main(){
nw_calculator.core.dev_setup.call(null);

re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nw-calculator.events","initialize-db","nw-calculator.events/initialize-db",1418944031)], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nw-calculator.events","fetch-items","nw-calculator.events/fetch-items",1052431158)], null));

return nw_calculator.core.initialize_app_BANG_.call(null);
});
goog.exportSymbol('nw_calculator.core.main', nw_calculator.core.main);

//# sourceMappingURL=core.js.map
