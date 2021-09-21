// Compiled by ClojureScript 1.10.879 {:optimizations :none}
goog.provide('figwheel.repl.logging');
goog.require('cljs.core');
goog.require('goog.log');
goog.require('goog.object');
goog.require('clojure.string');
figwheel.repl.logging.cljs_version__GT_value = (function figwheel$repl$logging$cljs_version__GT_value(v){
try{return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core._STAR_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100000000000),(10000),(1)], null),cljs.core.map.call(null,(function (p1__39751_SHARP_){
return parseInt(p1__39751_SHARP_);
}),cljs.core.take.call(null,(3),clojure.string.split.call(null,v,/[^\d]/)))));
}catch (e39752){if((e39752 instanceof Error)){
var e = e39752;
return ((100000000000) * (100));
} else {
throw e39752;

}
}});
figwheel.repl.logging.get_logger = (function figwheel$repl$logging$get_logger(nm){
if((figwheel.repl.logging.cljs_version__GT_value.call(null,cljs.core._STAR_clojurescript_version_STAR_) >= figwheel.repl.logging.cljs_version__GT_value.call(null,"1.10.844"))){
return (new goog.debug.Logger(nm));
} else {
return goog.log.getLogger.call(null,nm);
}
});
figwheel.repl.logging.error = (function figwheel$repl$logging$error(log,msg_ex){
return goog.log.error.call(null,log,msg_ex);
});
figwheel.repl.logging.fine = (function figwheel$repl$logging$fine(log,msg){
return goog.log.fine.call(null,log,msg);
});
figwheel.repl.logging.info = (function figwheel$repl$logging$info(log,msg){
return goog.log.info.call(null,log,msg);
});
figwheel.repl.logging.warning = (function figwheel$repl$logging$warning(log,msg){
return goog.log.warning.call(null,log,msg);
});
figwheel.repl.logging.debug = (function figwheel$repl$logging$debug(log,msg){
return goog.log.log.call(null,log,goog.debug.Logger.Level.FINEST,msg);
});
figwheel.repl.logging.console_logging = (function figwheel$repl$logging$console_logging(){
if(cljs.core.truth_(goog.object.get(goog.debug.Console,"instance"))){
} else {
var c_39754 = (new goog.debug.Console());
var G__39753_39755 = c_39754.getFormatter();
goog.object.set(G__39753_39755,"showAbsoluteTime",false);

goog.object.set(G__39753_39755,"showRelativeTime",false);


goog.object.set(goog.debug.Console,"instance",c_39754);

}

var temp__5753__auto__ = goog.object.get(goog.debug.Console,"instance");
if(cljs.core.truth_(temp__5753__auto__)){
var console_instance = temp__5753__auto__;
console_instance.setCapturing(true);

return true;
} else {
return null;
}
});
figwheel.repl.logging.log_levels = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,clojure.string.lower_case,(function (p1__39756_SHARP_){
return goog.object.get(goog.debug.Logger.Level,p1__39756_SHARP_);
})),cljs.core.map.call(null,cljs.core.str,cljs.core.list(new cljs.core.Symbol(null,"SEVERE","SEVERE",2038088045,null),new cljs.core.Symbol(null,"WARNING","WARNING",1233939303,null),new cljs.core.Symbol(null,"INFO","INFO",578874437,null),new cljs.core.Symbol(null,"CONFIG","CONFIG",1613043737,null),new cljs.core.Symbol(null,"FINE","FINE",1120074650,null),new cljs.core.Symbol(null,"FINER","FINER",1219697631,null),new cljs.core.Symbol(null,"FINEST","FINEST",-1116440228,null)))));
figwheel.repl.logging.set_log_level = (function figwheel$repl$logging$set_log_level(logger_SINGLEQUOTE_,level){
var temp__5751__auto__ = cljs.core.get.call(null,figwheel.repl.logging.log_levels,level);
if(cljs.core.truth_(temp__5751__auto__)){
var lvl = temp__5751__auto__;
figwheel.repl.logging.debug.call(null,logger_SINGLEQUOTE_,["setting log level to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(level)].join(''));

return logger_SINGLEQUOTE_.setLevel(lvl);
} else {
return figwheel.repl.logging.warning.call(null,logger_SINGLEQUOTE_,["Log level ",cljs.core.pr_str.call(null,level)," doesn't exist must be one of ",cljs.core.pr_str.call(null,cljs.core.list("severe","warning","info","config","fine","finer","finest"))].join(''));
}
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.logging !== 'undefined') && (typeof figwheel.repl.logging.log_console !== 'undefined')){
} else {
figwheel.repl.logging.log_console = figwheel.repl.logging.console_logging.call(null);
}

//# sourceMappingURL=logging.js.map
