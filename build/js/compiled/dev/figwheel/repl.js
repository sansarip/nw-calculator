// Compiled by ClojureScript 1.10.879 {:optimizations :none}
goog.provide('figwheel.repl');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.repl.logging');
goog.require('goog.object');
goog.require('goog.storage.mechanism.mechanismfactory');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('goog.net.XhrIo');
goog.require('goog.array');
goog.require('goog.json');
goog.require('goog.html.legacyconversions');
goog.require('goog.userAgent.product');
goog.require('goog.net.WebSocket');
goog.require('goog.debug.Console');
goog.require('goog.Uri.QueryData');
goog.require('goog.Promise');
goog.require('goog.storage.mechanism.HTML5SessionStorage');
figwheel.repl.default_port = (9500);
figwheel.repl.default_ssl_port = (9533);
if((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.logger !== 'undefined')){
} else {
figwheel.repl.logger = figwheel.repl.logging.get_logger.call(null,"Figwheel REPL");
}

figwheel.repl.console_logging = (function figwheel$repl$console_logging(){
return figwheel.repl.logging.console_logging.call(null);
});
goog.exportSymbol('figwheel.repl.console_logging', figwheel.repl.console_logging);

figwheel.repl.debug = (function figwheel$repl$debug(msg){
return figwheel.repl.logging.debug.call(null,figwheel.repl.logger,msg);
});


figwheel.repl.unprovide_BANG_ = (function figwheel$repl$unprovide_BANG_(ns){
if((!((goog.debugLoader_ == null)))){
var path = goog.debugLoader_.getPathFromDeps_(ns);
goog.object.remove(goog.debugLoader_.written_,path);

return goog.object.remove(goog.debugLoader_.written_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
} else {
var path = goog.object.get(goog.dependencies_.nameToPath,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
}
});

figwheel.repl.figwheel_require = (function figwheel$repl$figwheel_require(src,reload){
(goog.require = figwheel.repl.figwheel_require);

if(cljs.core._EQ_.call(null,reload,"reload-all")){
(goog.cljsReloadAll_ = true);
} else {
}

if(cljs.core.truth_((function (){var or__4212__auto__ = reload;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return goog.cljsReloadAll_;
}
})())){
figwheel.repl.unprovide_BANG_.call(null,src);
} else {
}

var res = goog.require_figwheel_backup_(src);
if(cljs.core._EQ_.call(null,reload,"reload-all")){
(goog.cljsReloadAll_ = false);
} else {
}

return res;
});

/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.repl.bootstrap_goog_base = (function figwheel$repl$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
if(cljs.core.truth_(goog.require_figwheel_backup_)){
} else {
(goog.require_figwheel_backup_ = (function (){var or__4212__auto__ = goog.require__;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return goog.require;
}
})());
}

(goog.isProvided_ = (function (name){
return false;
}));

if((((typeof cljs !== 'undefined')) && ((typeof cljs !== 'undefined') && (typeof cljs.user !== 'undefined')))){
} else {
goog.constructNamespace_("cljs.user");
}

(goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.repl.queued_file_reload);

return (goog.require = figwheel.repl.figwheel_require);
}
});

figwheel.repl.patch_goog_base = (function figwheel$repl$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.repl.bootstrapped_cljs = (function (){
figwheel.repl.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});

figwheel.repl.add_cache_buster = (function figwheel$repl$add_cache_buster(url){
return goog.Uri.parse(url).makeUnique();
});

figwheel.repl.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__39759_SHARP_,p2__39760_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__39759_SHARP_)),p2__39760_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__39761_SHARP_,p2__39762_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__39761_SHARP_),p2__39762_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));

figwheel.repl.reload_file_in_html_env = (function figwheel$repl$reload_file_in_html_env(request_url,callback){
if(typeof request_url === 'string'){
} else {
throw (new Error("Assert failed: (string? request-url)"));
}

if((!((callback == null)))){
} else {
throw (new Error("Assert failed: (not (nil? callback))"));
}

var G__39770 = figwheel.repl.gloader.call(null,figwheel.repl.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__39770.addCallback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
}));

G__39770.addErrback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
}));

return G__39770;
});

figwheel.repl.write_script_tag_import = figwheel.repl.reload_file_in_html_env;
goog.exportSymbol('figwheel.repl.write_script_tag_import', figwheel.repl.write_script_tag_import);

figwheel.repl.worker_import_script = (function figwheel$repl$worker_import_script(request_url,callback){
if(typeof request_url === 'string'){
} else {
throw (new Error("Assert failed: (string? request-url)"));
}

if((!((callback == null)))){
} else {
throw (new Error("Assert failed: (not (nil? callback))"));
}

return callback.call(null,(function (){try{self.importScripts(figwheel.repl.add_cache_buster.call(null,request_url));

return true;
}catch (e39771){if((e39771 instanceof Error)){
var e = e39771;
figwheel.repl.logging.error.call(null,figwheel.repl.logger,["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.repl.logging.error.call(null,figwheel.repl.logger,e);

return false;
} else {
throw e39771;

}
}})());
});
goog.exportSymbol('figwheel.repl.worker_import_script', figwheel.repl.worker_import_script);

figwheel.repl.create_node_script_import_fn = (function figwheel$repl$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,(function (v,k,o){
return goog.string.endsWith(k,util_pattern);
}));
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return (function (request_url,callback){
if(typeof request_url === 'string'){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((!((callback == null)))),"\n","(string? request-url)"].join('')));
}

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e39772){if((e39772 instanceof Error)){
var e = e39772;
figwheel.repl.logging.error.call(null,figwheel.repl.logger,["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.repl.logging.error.call(null,figwheel.repl.logger,e);

return false;
} else {
throw e39772;

}
}})());
});
});
goog.exportSymbol('figwheel.repl.create_node_script_import_fn', figwheel.repl.create_node_script_import_fn);

figwheel.repl.host_env = (((!((goog.nodeGlobalRequire == null))))?new cljs.core.Keyword(null,"node","node",581201198):(((!((goog.global.document == null))))?new cljs.core.Keyword(null,"html","html",-998796897):(((((typeof goog !== 'undefined') && (typeof goog.global !== 'undefined') && (typeof goog.global.navigator !== 'undefined')) && (cljs.core._EQ_.call(null,goog.global.navigator.product,"ReactNative"))))?new cljs.core.Keyword(null,"react-native","react-native",-1543085138):(((((goog.global.document == null)) && ((((typeof self !== 'undefined')) && ((!((self.importScripts == null))))))))?new cljs.core.Keyword(null,"worker","worker",938239996):null))));

figwheel.repl.reload_file_STAR_ = (function (){var pred__39773 = cljs.core._EQ_;
var expr__39774 = figwheel.repl.host_env;
if(cljs.core.truth_(pred__39773.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__39774))){
return figwheel.repl.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__39773.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__39774))){
return figwheel.repl.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__39773.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__39774))){
return figwheel.repl.worker_import_script;
} else {
return (function (a,b){
throw "Reload not defined for this platform";
});
}
}
}
})();

figwheel.repl.reload_file = (function figwheel$repl$reload_file(p__39776,callback){
var map__39777 = p__39776;
var map__39777__$1 = cljs.core.__destructure_map.call(null,map__39777);
var file_msg = map__39777__$1;
var request_url = cljs.core.get.call(null,map__39777__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
if(typeof request_url === 'string'){
} else {
throw (new Error("Assert failed: (string? request-url)"));
}

if((!((callback == null)))){
} else {
throw (new Error("Assert failed: (not (nil? callback))"));
}

figwheel.repl.logging.fine.call(null,figwheel.repl.logger,["Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4212__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return figwheel.repl.reload_file_STAR_;
}
})().call(null,request_url,(function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.repl.logging.fine.call(null,figwheel.repl.logger,["Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.repl.logging.error.call(null,figwheel.repl.logger,["Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
}));
});

if((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.reload_promise_chain !== 'undefined')){
} else {
figwheel.repl.reload_promise_chain = cljs.core.atom.call(null,(new goog.Promise((function (p1__39763_SHARP_){
return p1__39763_SHARP_.call(null,true);
}))));
}

figwheel.repl.queued_file_reload = (function figwheel$repl$queued_file_reload(var_args){
var G__39779 = arguments.length;
switch (G__39779) {
case 1:
return figwheel.repl.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.repl.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.repl.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.repl.queued_file_reload.call(null,url,null);
}));

(figwheel.repl.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
if(clojure.string.ends_with_QMARK_.call(null,url,"goog/base.js")){
return true;
} else {
var temp__5753__auto__ = (cljs.core.truth_(opt_source_text)?(function (p1__39764_SHARP_){
return p1__39764_SHARP_.then((function (_){
return (new goog.Promise((function (r,___$1){
try{eval(opt_source_text);
}catch (e39780){if((e39780 instanceof Error)){
var e_39850 = e39780;
figwheel.repl.logging.error.call(null,figwheel.repl.logger,e_39850);
} else {
throw e39780;

}
}
return r.call(null,true);
})));
}));
}):(cljs.core.truth_(url)?(function (p1__39765_SHARP_){
return p1__39765_SHARP_.then((function (_){
return (new goog.Promise((function (r,___$1){
return figwheel.repl.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),(function (file_msg){
return r.call(null,true);
}));
})));
}));
}):null));
if(cljs.core.truth_(temp__5753__auto__)){
var next_promise_fn = temp__5753__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.repl.reload_promise_chain,next_promise_fn);
} else {
return null;
}
}
}));

(figwheel.repl.queued_file_reload.cljs$lang$maxFixedArity = 2);


figwheel.repl.after_reloads = (function figwheel$repl$after_reloads(f){
return cljs.core.swap_BANG_.call(null,figwheel.repl.reload_promise_chain,(function (p1__39766_SHARP_){
return p1__39766_SHARP_.then(f);
}));
});
goog.exportSymbol('figwheel.repl.after_reloads', figwheel.repl.after_reloads);


/**
 * @define {string}
 */
figwheel.repl.print_output = goog.define("figwheel.repl.print_output","console,repl");

figwheel.repl.print_receivers = (function figwheel$repl$print_receivers(outputs){
return cljs.core.set.call(null,cljs.core.map.call(null,cljs.core.keyword,cljs.core.filter.call(null,cljs.core.complement.call(null,clojure.string.blank_QMARK_),cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,outputs,/,/)))));
});

if((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.out_print !== 'undefined')){
} else {
figwheel.repl.out_print = (function (){var method_table__4701__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4702__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4703__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4704__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4705__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.repl","out-print"),(function (k,args){
return k;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4705__auto__,method_table__4701__auto__,prefer_table__4702__auto__,method_cache__4703__auto__,cached_hierarchy__4704__auto__));
})();
}

cljs.core._add_method.call(null,figwheel.repl.out_print,new cljs.core.Keyword(null,"console","console",1228072057),(function (_,args){
return console.log.apply(console,goog.array.clone(cljs.core.to_array.call(null,args)));
}));

if((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.err_print !== 'undefined')){
} else {
figwheel.repl.err_print = (function (){var method_table__4701__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4702__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4703__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4704__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4705__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.repl","err-print"),(function (k,args){
return k;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4705__auto__,method_table__4701__auto__,prefer_table__4702__auto__,method_cache__4703__auto__,cached_hierarchy__4704__auto__));
})();
}

cljs.core._add_method.call(null,figwheel.repl.err_print,new cljs.core.Keyword(null,"console","console",1228072057),(function (_,args){
return console.error.apply(console,goog.array.clone(cljs.core.to_array.call(null,args)));
}));

figwheel.repl.setup_printing_BANG_ = (function figwheel$repl$setup_printing_BANG_(){
var printers = figwheel.repl.print_receivers.call(null,figwheel.repl.print_output);
cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__39851__delegate = function (args){
var seq__39781 = cljs.core.seq.call(null,printers);
var chunk__39782 = null;
var count__39783 = (0);
var i__39784 = (0);
while(true){
if((i__39784 < count__39783)){
var p = cljs.core._nth.call(null,chunk__39782,i__39784);
figwheel.repl.out_print.call(null,p,args);


var G__39852 = seq__39781;
var G__39853 = chunk__39782;
var G__39854 = count__39783;
var G__39855 = (i__39784 + (1));
seq__39781 = G__39852;
chunk__39782 = G__39853;
count__39783 = G__39854;
i__39784 = G__39855;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__39781);
if(temp__5753__auto__){
var seq__39781__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39781__$1)){
var c__4638__auto__ = cljs.core.chunk_first.call(null,seq__39781__$1);
var G__39856 = cljs.core.chunk_rest.call(null,seq__39781__$1);
var G__39857 = c__4638__auto__;
var G__39858 = cljs.core.count.call(null,c__4638__auto__);
var G__39859 = (0);
seq__39781 = G__39856;
chunk__39782 = G__39857;
count__39783 = G__39858;
i__39784 = G__39859;
continue;
} else {
var p = cljs.core.first.call(null,seq__39781__$1);
figwheel.repl.out_print.call(null,p,args);


var G__39860 = cljs.core.next.call(null,seq__39781__$1);
var G__39861 = null;
var G__39862 = (0);
var G__39863 = (0);
seq__39781 = G__39860;
chunk__39782 = G__39861;
count__39783 = G__39862;
i__39784 = G__39863;
continue;
}
} else {
return null;
}
}
break;
}
};
var G__39851 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39864__i = 0, G__39864__a = new Array(arguments.length -  0);
while (G__39864__i < G__39864__a.length) {G__39864__a[G__39864__i] = arguments[G__39864__i + 0]; ++G__39864__i;}
  args = new cljs.core.IndexedSeq(G__39864__a,0,null);
} 
return G__39851__delegate.call(this,args);};
G__39851.cljs$lang$maxFixedArity = 0;
G__39851.cljs$lang$applyTo = (function (arglist__39865){
var args = cljs.core.seq(arglist__39865);
return G__39851__delegate(args);
});
G__39851.cljs$core$IFn$_invoke$arity$variadic = G__39851__delegate;
return G__39851;
})()
);

return cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__39866__delegate = function (args){
var seq__39785 = cljs.core.seq.call(null,printers);
var chunk__39786 = null;
var count__39787 = (0);
var i__39788 = (0);
while(true){
if((i__39788 < count__39787)){
var p = cljs.core._nth.call(null,chunk__39786,i__39788);
figwheel.repl.err_print.call(null,p,args);


var G__39867 = seq__39785;
var G__39868 = chunk__39786;
var G__39869 = count__39787;
var G__39870 = (i__39788 + (1));
seq__39785 = G__39867;
chunk__39786 = G__39868;
count__39787 = G__39869;
i__39788 = G__39870;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__39785);
if(temp__5753__auto__){
var seq__39785__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39785__$1)){
var c__4638__auto__ = cljs.core.chunk_first.call(null,seq__39785__$1);
var G__39871 = cljs.core.chunk_rest.call(null,seq__39785__$1);
var G__39872 = c__4638__auto__;
var G__39873 = cljs.core.count.call(null,c__4638__auto__);
var G__39874 = (0);
seq__39785 = G__39871;
chunk__39786 = G__39872;
count__39787 = G__39873;
i__39788 = G__39874;
continue;
} else {
var p = cljs.core.first.call(null,seq__39785__$1);
figwheel.repl.err_print.call(null,p,args);


var G__39875 = cljs.core.next.call(null,seq__39785__$1);
var G__39876 = null;
var G__39877 = (0);
var G__39878 = (0);
seq__39785 = G__39875;
chunk__39786 = G__39876;
count__39787 = G__39877;
i__39788 = G__39878;
continue;
}
} else {
return null;
}
}
break;
}
};
var G__39866 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39879__i = 0, G__39879__a = new Array(arguments.length -  0);
while (G__39879__i < G__39879__a.length) {G__39879__a[G__39879__i] = arguments[G__39879__i + 0]; ++G__39879__i;}
  args = new cljs.core.IndexedSeq(G__39879__a,0,null);
} 
return G__39866__delegate.call(this,args);};
G__39866.cljs$lang$maxFixedArity = 0;
G__39866.cljs$lang$applyTo = (function (arglist__39880){
var args = cljs.core.seq(arglist__39880);
return G__39866__delegate(args);
});
G__39866.cljs$core$IFn$_invoke$arity$variadic = G__39866__delegate;
return G__39866;
})()
);
});


/**
 * @define {string}
 */
figwheel.repl.connect_url = goog.define("figwheel.repl.connect_url","ws://[[client-hostname]]:[[client-port]]/figwheel-connect");

figwheel.repl.state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);

figwheel.repl.storage = goog.storage.mechanism.mechanismfactory.createHTML5SessionStorage("figwheel.repl");

figwheel.repl.set_state = (function figwheel$repl$set_state(k,v){
cljs.core.swap_BANG_.call(null,figwheel.repl.state,cljs.core.assoc,k,v);

if(cljs.core.truth_(figwheel.repl.storage)){
return figwheel.repl.storage.set(cljs.core.str.cljs$core$IFn$_invoke$arity$1(k),v);
} else {
return null;
}
});

figwheel.repl.get_state = (function figwheel$repl$get_state(k){
if(cljs.core.truth_(figwheel.repl.storage)){
return figwheel.repl.storage.get(cljs.core.str.cljs$core$IFn$_invoke$arity$1(k));
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.repl.state),k);
}
});

figwheel.repl.session_name = (function figwheel$repl$session_name(){
return figwheel.repl.get_state.call(null,new cljs.core.Keyword("figwheel.repl","session-name","figwheel.repl/session-name",2102143102));
});
goog.exportSymbol('figwheel.repl.session_name', figwheel.repl.session_name);

figwheel.repl.session_id = (function figwheel$repl$session_id(){
return figwheel.repl.get_state.call(null,new cljs.core.Keyword("figwheel.repl","session-id","figwheel.repl/session-id",594324955));
});
goog.exportSymbol('figwheel.repl.session_id', figwheel.repl.session_id);

figwheel.repl.response_for = (function figwheel$repl$response_for(p__39789,response_body){
var map__39790 = p__39789;
var map__39790__$1 = cljs.core.__destructure_map.call(null,map__39790);
var uuid = cljs.core.get.call(null,map__39790__$1,new cljs.core.Keyword(null,"uuid","uuid",-2145095719));
var G__39791 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"session-id","session-id",-1147060351),figwheel.repl.session_id.call(null),new cljs.core.Keyword(null,"session-name","session-name",-167167576),figwheel.repl.session_name.call(null),new cljs.core.Keyword(null,"response","response",-1068424192),response_body], null);
if(cljs.core.truth_(uuid)){
return cljs.core.assoc.call(null,G__39791,new cljs.core.Keyword(null,"uuid","uuid",-2145095719),uuid);
} else {
return G__39791;
}
});

figwheel.repl.http_post = (function (){var pred__39792 = cljs.core._EQ_;
var expr__39793 = figwheel.repl.host_env;
if(cljs.core.truth_(pred__39792.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__39793))){
var http = require("http");
return (function (url,post_data){
var data = cljs.core.volatile_BANG_.call(null,"");
var uri = goog.Uri.parse(cljs.core.str.cljs$core$IFn$_invoke$arity$1(url));
var G__39795 = http.request(({"host": uri.getDomain(), "port": uri.getPort(), "path": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri.getPath()),(function (){var temp__5753__auto__ = uri.getQuery();
if(cljs.core.truth_(temp__5753__auto__)){
var q = temp__5753__auto__;
return ["?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(q)].join('');
} else {
return null;
}
})()].join(''), "method": "POST", "headers": ({"Content-Length": Buffer.byteLength(post_data)})}),(function (x){
return null;
})).on("error",(function (p1__39767_SHARP_){
return console.error(p1__39767_SHARP_);
}));
G__39795.write(post_data);

G__39795.end();

return G__39795;
});
} else {
return (function (url,response){
return goog.net.XhrIo.send(url,(function (e){
return figwheel.repl.debug.call(null,"Response Posted");
}),"POST",response);
});
}
})();

figwheel.repl.respond_to = (function figwheel$repl$respond_to(p__39796,response_body){
var map__39797 = p__39796;
var map__39797__$1 = cljs.core.__destructure_map.call(null,map__39797);
var old_msg = map__39797__$1;
var websocket = cljs.core.get.call(null,map__39797__$1,new cljs.core.Keyword(null,"websocket","websocket",-1714963101));
var http_url = cljs.core.get.call(null,map__39797__$1,new cljs.core.Keyword(null,"http-url","http-url",-2043776269));
var response = figwheel.repl.response_for.call(null,old_msg,response_body);
if(cljs.core.truth_(websocket)){
return websocket.send(cljs.core.pr_str.call(null,response));
} else {
if(cljs.core.truth_(http_url)){
return figwheel.repl.http_post.call(null,http_url,cljs.core.pr_str.call(null,response));
} else {
return null;
}
}
});

figwheel.repl.respond_to_connection = (function figwheel$repl$respond_to_connection(response_body){
return figwheel.repl.respond_to.call(null,new cljs.core.Keyword(null,"connection","connection",-123599300).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,figwheel.repl.state)),response_body);
});

if((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.message !== 'undefined')){
} else {
figwheel.repl.message = (function (){var method_table__4701__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4702__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4703__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4704__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4705__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.repl","message"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4705__auto__,method_table__4701__auto__,prefer_table__4702__auto__,method_cache__4703__auto__,cached_hierarchy__4704__auto__));
})();
}

cljs.core._add_method.call(null,figwheel.repl.message,"naming",(function (msg){
var temp__5753__auto___39881 = new cljs.core.Keyword(null,"session-name","session-name",-167167576).cljs$core$IFn$_invoke$arity$1(msg);
if(cljs.core.truth_(temp__5753__auto___39881)){
var sn_39882 = temp__5753__auto___39881;
figwheel.repl.set_state.call(null,new cljs.core.Keyword("figwheel.repl","session-name","figwheel.repl/session-name",2102143102),sn_39882);
} else {
}

var temp__5753__auto___39883 = new cljs.core.Keyword(null,"session-id","session-id",-1147060351).cljs$core$IFn$_invoke$arity$1(msg);
if(cljs.core.truth_(temp__5753__auto___39883)){
var sid_39884 = temp__5753__auto___39883;
figwheel.repl.set_state.call(null,new cljs.core.Keyword("figwheel.repl","session-id","figwheel.repl/session-id",594324955),sid_39884);
} else {
}

figwheel.repl.logging.info.call(null,figwheel.repl.logger,["Session ID: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.repl.session_id.call(null))].join(''));

return figwheel.repl.logging.info.call(null,figwheel.repl.logger,["Session Name: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.repl.session_name.call(null))].join(''));
}));

cljs.core._add_method.call(null,figwheel.repl.message,"ping",(function (msg){
return figwheel.repl.respond_to.call(null,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pong","pong",-172484958),true], null));
}));

figwheel.repl.get_ua_product = (function figwheel$repl$get_ua_product(){
if((!((goog.nodeGlobalRequire == null)))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(goog.userAgent.product.SAFARI){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(goog.userAgent.product.CHROME){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(goog.userAgent.product.FIREFOX){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(goog.userAgent.product.IE){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});

var print_to_console_QMARK__39885 = figwheel.repl.print_receivers.call(null,figwheel.repl.print_output).call(null,new cljs.core.Keyword(null,"console","console",1228072057));
figwheel.repl.eval_javascript_STAR__STAR_ = (function figwheel$repl$eval_javascript_STAR__STAR_(code){
var ua_product = figwheel.repl.get_ua_product.call(null);
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__39799 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__39800 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__39801 = true;
var _STAR_print_fn_STAR__temp_val__39802 = (function (x){
return sb.append(x);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__39801);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__39802);

try{var result_value = eval(code);
var result_value__$1 = (((!(typeof result_value === 'string')))?(function (){try{return cljs.core.pr_str.call(null,result_value);
}catch (e39803){if((e39803 instanceof Error)){
var e = e39803;
return null;
} else {
throw e39803;

}
}})():result_value);
var output_str = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb);
if(cljs.core.truth_((function (){var and__4210__auto__ = print_to_console_QMARK__39885;
if(cljs.core.truth_(and__4210__auto__)){
return (!((sb.getLength() === (0))));
} else {
return and__4210__auto__;
}
})())){
setTimeout((function (){
return figwheel.repl.out_print.call(null,new cljs.core.Keyword(null,"console","console",1228072057),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [output_str], null));
}),(0));
} else {
}

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),output_str,new cljs.core.Keyword(null,"ua-product","ua-product",938384227),ua_product,new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__39800);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__39799);
}}catch (e39798){if((e39798 instanceof Error)){
var e = e39798;
if((((typeof console !== 'undefined')) && ((typeof console !== 'undefined') && (typeof console.error !== 'undefined')))){
console.error("REPL eval error",e);
} else {
}

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),ua_product,new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),e.stack], null);
} else {
var e = e39798;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),ua_product,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null);

}
}});

cljs.core._add_method.call(null,figwheel.repl.message,"eval",(function (p__39804){
var map__39805 = p__39804;
var map__39805__$1 = cljs.core.__destructure_map.call(null,map__39805);
var msg = map__39805__$1;
var code = cljs.core.get.call(null,map__39805__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var result = figwheel.repl.eval_javascript_STAR__STAR_.call(null,code);
return figwheel.repl.respond_to.call(null,msg,result);
}));

cljs.core._add_method.call(null,figwheel.repl.message,"messages",(function (p__39806){
var map__39807 = p__39806;
var map__39807__$1 = cljs.core.__destructure_map.call(null,map__39807);
var messages = cljs.core.get.call(null,map__39807__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var http_url = cljs.core.get.call(null,map__39807__$1,new cljs.core.Keyword(null,"http-url","http-url",-2043776269));
var seq__39808 = cljs.core.seq.call(null,messages);
var chunk__39809 = null;
var count__39810 = (0);
var i__39811 = (0);
while(true){
if((i__39811 < count__39810)){
var msg = cljs.core._nth.call(null,chunk__39809,i__39811);
figwheel.repl.message.call(null,(function (){var G__39814 = cljs.core.js__GT_clj.call(null,msg,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
if(cljs.core.truth_(http_url)){
return cljs.core.assoc.call(null,G__39814,new cljs.core.Keyword(null,"http-url","http-url",-2043776269),http_url);
} else {
return G__39814;
}
})());


var G__39886 = seq__39808;
var G__39887 = chunk__39809;
var G__39888 = count__39810;
var G__39889 = (i__39811 + (1));
seq__39808 = G__39886;
chunk__39809 = G__39887;
count__39810 = G__39888;
i__39811 = G__39889;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__39808);
if(temp__5753__auto__){
var seq__39808__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39808__$1)){
var c__4638__auto__ = cljs.core.chunk_first.call(null,seq__39808__$1);
var G__39890 = cljs.core.chunk_rest.call(null,seq__39808__$1);
var G__39891 = c__4638__auto__;
var G__39892 = cljs.core.count.call(null,c__4638__auto__);
var G__39893 = (0);
seq__39808 = G__39890;
chunk__39809 = G__39891;
count__39810 = G__39892;
i__39811 = G__39893;
continue;
} else {
var msg = cljs.core.first.call(null,seq__39808__$1);
figwheel.repl.message.call(null,(function (){var G__39815 = cljs.core.js__GT_clj.call(null,msg,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
if(cljs.core.truth_(http_url)){
return cljs.core.assoc.call(null,G__39815,new cljs.core.Keyword(null,"http-url","http-url",-2043776269),http_url);
} else {
return G__39815;
}
})());


var G__39894 = cljs.core.next.call(null,seq__39808__$1);
var G__39895 = null;
var G__39896 = (0);
var G__39897 = (0);
seq__39808 = G__39894;
chunk__39809 = G__39895;
count__39810 = G__39896;
i__39811 = G__39897;
continue;
}
} else {
return null;
}
}
break;
}
}));

figwheel.repl.fill_url_template = (function figwheel$repl$fill_url_template(connect_url_SINGLEQUOTE_){
if(cljs.core._EQ_.call(null,figwheel.repl.host_env,new cljs.core.Keyword(null,"html","html",-998796897))){
return clojure.string.replace.call(null,clojure.string.replace.call(null,connect_url_SINGLEQUOTE_,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
} else {
return connect_url_SINGLEQUOTE_;
}
});

figwheel.repl.make_url = (function figwheel$repl$make_url(connect_url_SINGLEQUOTE_){
var uri = goog.Uri.parse(figwheel.repl.fill_url_template.call(null,(function (){var or__4212__auto__ = connect_url_SINGLEQUOTE_;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return figwheel.repl.connect_url;
}
})()));
var domain = uri.getDomain();
if(clojure.string.ends_with_QMARK_.call(null,domain,":")){
uri.setDomain(cljs.core.subs.call(null,domain,(0),(cljs.core.count.call(null,domain) - (1))));
} else {
}

var G__39816_39898 = uri.getQueryData().add("fwsid",(function (){var or__4212__auto__ = figwheel.repl.session_id.call(null);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.random_uuid.call(null);
}
})());
if(cljs.core.truth_(figwheel.repl.session_name.call(null))){
G__39816_39898.add("fwsname",figwheel.repl.session_name.call(null));
} else {
}

return uri;
});

figwheel.repl.exponential_backoff = (function figwheel$repl$exponential_backoff(attempt){
return ((1000) * (function (){var x__4298__auto__ = Math.pow((2),attempt);
var y__4299__auto__ = (20);
return ((x__4298__auto__ < y__4299__auto__) ? x__4298__auto__ : y__4299__auto__);
})());
});

figwheel.repl.hook_repl_printing_output_BANG_ = (function figwheel$repl$hook_repl_printing_output_BANG_(respond_msg){
cljs.core._add_method.call(null,figwheel.repl.out_print,new cljs.core.Keyword(null,"repl","repl",-35398667),(function (_,args){
return figwheel.repl.respond_to.call(null,respond_msg,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"output","output",-1105869043),true,new cljs.core.Keyword(null,"stream","stream",1534941648),new cljs.core.Keyword(null,"out","out",-910545517),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__39768_SHARP_){
if(typeof p1__39768_SHARP_ === 'string'){
return p1__39768_SHARP_;
} else {
return goog.json.serialize(p1__39768_SHARP_);
}
}),args)], null));
}));

cljs.core._add_method.call(null,figwheel.repl.err_print,new cljs.core.Keyword(null,"repl","repl",-35398667),(function (_,args){
return figwheel.repl.respond_to.call(null,respond_msg,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"output","output",-1105869043),true,new cljs.core.Keyword(null,"stream","stream",1534941648),new cljs.core.Keyword(null,"err","err",-2089457205),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__39769_SHARP_){
if(typeof p1__39769_SHARP_ === 'string'){
return p1__39769_SHARP_;
} else {
return goog.json.serialize(p1__39769_SHARP_);
}
}),args)], null));
}));

return figwheel.repl.setup_printing_BANG_.call(null);
});

figwheel.repl.connection_established_BANG_ = (function figwheel$repl$connection_established_BANG_(url){
if(cljs.core._EQ_.call(null,figwheel.repl.host_env,new cljs.core.Keyword(null,"html","html",-998796897))){
var target = goog.global.document.body;
return target.dispatchEvent((function (){var G__39817 = (new Event("figwheel.repl.connected",target));
goog.object.add(G__39817,"data",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),url], null));

return G__39817;
})());
} else {
return null;
}
});

figwheel.repl.connection_closed_BANG_ = (function figwheel$repl$connection_closed_BANG_(url){
if(cljs.core._EQ_.call(null,figwheel.repl.host_env,new cljs.core.Keyword(null,"html","html",-998796897))){
var target = goog.global.document.body;
return target.dispatchEvent((function (){var G__39818 = (new Event("figwheel.repl.disconnected",target));
goog.object.add(G__39818,"data",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),url], null));

return G__39818;
})());
} else {
return null;
}
});

figwheel.repl.get_websocket_class = (function figwheel$repl$get_websocket_class(){
var or__4212__auto__ = goog.object.get(goog.global,"WebSocket");
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var or__4212__auto____$1 = goog.object.get(goog.global,"FIGWHEEL_WEBSOCKET_CLASS");
if(cljs.core.truth_(or__4212__auto____$1)){
return or__4212__auto____$1;
} else {
var or__4212__auto____$2 = (function (){var and__4210__auto__ = cljs.core._EQ_.call(null,figwheel.repl.host_env,new cljs.core.Keyword(null,"node","node",581201198));
if(and__4210__auto__){
try{return require("ws");
}catch (e39819){if((e39819 instanceof Error)){
var e = e39819;
return null;
} else {
throw e39819;

}
}} else {
return and__4210__auto__;
}
})();
if(cljs.core.truth_(or__4212__auto____$2)){
return or__4212__auto____$2;
} else {
var and__4210__auto__ = cljs.core._EQ_.call(null,figwheel.repl.host_env,new cljs.core.Keyword(null,"worker","worker",938239996));
if(and__4210__auto__){
return goog.object.get(self,"WebSocket");
} else {
return and__4210__auto__;
}
}
}
}
});

figwheel.repl.ensure_websocket = (function figwheel$repl$ensure_websocket(thunk){
if(cljs.core.truth_(goog.object.get(goog.global,"WebSocket"))){
return thunk.call(null);
} else {
var temp__5751__auto__ = figwheel.repl.get_websocket_class.call(null);
if(cljs.core.truth_(temp__5751__auto__)){
var websocket_class = temp__5751__auto__;
goog.object.set(goog.global,"WebSocket",websocket_class);

thunk.call(null);

return goog.object.set(goog.global,"WebSocket",null);
} else {
return figwheel.repl.logging.error.call(null,figwheel.repl.logger,((cljs.core._EQ_.call(null,figwheel.repl.host_env,new cljs.core.Keyword(null,"node","node",581201198)))?"Can't connect!! Please make sure ws is installed\n do -> 'npm install ws'":"Can't connect!! This client doesn't support WebSockets"));
}
}
});

figwheel.repl.ws_connect = (function figwheel$repl$ws_connect(var_args){
var args__4824__auto__ = [];
var len__4818__auto___39899 = arguments.length;
var i__4819__auto___39900 = (0);
while(true){
if((i__4819__auto___39900 < len__4818__auto___39899)){
args__4824__auto__.push((arguments[i__4819__auto___39900]));

var G__39901 = (i__4819__auto___39900 + (1));
i__4819__auto___39900 = G__39901;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return figwheel.repl.ws_connect.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(figwheel.repl.ws_connect.cljs$core$IFn$_invoke$arity$variadic = (function (p__39821){
var vec__39822 = p__39821;
var websocket_url_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__39822,(0),null);
return figwheel.repl.ensure_websocket.call(null,(function (){
var websocket = (new goog.net.WebSocket());
var url = cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.repl.make_url.call(null,websocket_url_SINGLEQUOTE_));
var G__39825 = websocket;
G__39825.addEventListener(goog.net.WebSocket.EventType.MESSAGE,(function (e){
var temp__5753__auto__ = goog.object.get(e,"message");
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
try{figwheel.repl.debug.call(null,msg);

return figwheel.repl.message.call(null,cljs.core.assoc.call(null,cljs.core.js__GT_clj.call(null,JSON.parse(msg),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true),new cljs.core.Keyword(null,"websocket","websocket",-1714963101),websocket));
}catch (e39826){if((e39826 instanceof Error)){
var e__$1 = e39826;
return figwheel.repl.logging.error.call(null,figwheel.repl.logger,e__$1);
} else {
throw e39826;

}
}} else {
return null;
}
}));

G__39825.addEventListener(goog.net.WebSocket.EventType.OPENED,(function (e){
figwheel.repl.connection_established_BANG_.call(null,url);

cljs.core.swap_BANG_.call(null,figwheel.repl.state,cljs.core.assoc,new cljs.core.Keyword(null,"connection","connection",-123599300),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"websocket","websocket",-1714963101),websocket], null));

return figwheel.repl.hook_repl_printing_output_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"websocket","websocket",-1714963101),websocket], null));
}));

G__39825.addEventListener(goog.net.WebSocket.EventType.CLOSED,(function (e){
return figwheel.repl.connection_closed_BANG_.call(null,url);
}));

G__39825.open(url);

return G__39825;
}));
}));

(figwheel.repl.ws_connect.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.repl.ws_connect.cljs$lang$applyTo = (function (seq39820){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39820));
}));


figwheel.repl.http_get = (function (){var pred__39827 = cljs.core._EQ_;
var expr__39828 = figwheel.repl.host_env;
if(cljs.core.truth_(pred__39827.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__39828))){
var http = require("http");
return (function (url){
return (new goog.Promise((function (succ,err){
var data = cljs.core.volatile_BANG_.call(null,"");
return http.get(cljs.core.str.cljs$core$IFn$_invoke$arity$1(url),(function (response){
response.on("data",(function (chunk){
return cljs.core._vreset_BANG_.call(null,data,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core._deref.call(null,data)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chunk)].join(''));
}));

return response.on("end",(function (){
return succ.call(null,(function (){try{return JSON.parse(cljs.core.deref.call(null,data));
}catch (e39830){if((e39830 instanceof Error)){
var e = e39830;
console.error(e);

return err.call(null,e);
} else {
throw e39830;

}
}})());
}));
})).on("error",err);
})));
});
} else {
return (function (url){
return (new goog.Promise((function (succ,err){
return goog.net.XhrIo.send(url,(function (e){
var xhr = goog.object.get(e,"target");
if(cljs.core.truth_(xhr.isSuccess())){
return succ.call(null,xhr.getResponseJson());
} else {
return err.call(null,xhr);
}
}));
})));
});
}
})();



figwheel.repl.poll = (function figwheel$repl$poll(msg_fn,connect_url_SINGLEQUOTE_){
return figwheel.repl.http_get.call(null,figwheel.repl.make_url.call(null,connect_url_SINGLEQUOTE_)).then((function (msg){
msg_fn.call(null,msg);

return setTimeout((function (){
return figwheel.repl.poll.call(null,msg_fn,connect_url_SINGLEQUOTE_);
}),(500));
}),(function (e){
figwheel.repl.connection_closed_BANG_.call(null,connect_url_SINGLEQUOTE_);

return figwheel.repl.http_connect.call(null,connect_url_SINGLEQUOTE_);
}));
});

figwheel.repl.long_poll = (function figwheel$repl$long_poll(msg_fn,connect_url_SINGLEQUOTE_){
return figwheel.repl.http_get.call(null,figwheel.repl.make_url.call(null,connect_url_SINGLEQUOTE_)).then((function (msg){
msg_fn.call(null,msg);

return figwheel.repl.long_poll.call(null,msg_fn,connect_url_SINGLEQUOTE_);
}),(function (e){
figwheel.repl.connection_closed_BANG_.call(null,connect_url_SINGLEQUOTE_);

return figwheel.repl.http_connect.call(null,connect_url_SINGLEQUOTE_);
}));
});

figwheel.repl.http_connect_STAR_ = (function figwheel$repl$http_connect_STAR_(attempt,connect_url_SINGLEQUOTE_){
var url = figwheel.repl.make_url.call(null,connect_url_SINGLEQUOTE_);
var surl = cljs.core.str.cljs$core$IFn$_invoke$arity$1(url);
var msg_fn = (function (msg){
try{figwheel.repl.debug.call(null,cljs.core.pr_str.call(null,msg));

return figwheel.repl.message.call(null,cljs.core.assoc.call(null,cljs.core.js__GT_clj.call(null,msg,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true),new cljs.core.Keyword(null,"http-url","http-url",-2043776269),surl));
}catch (e39831){if((e39831 instanceof Error)){
var e = e39831;
return figwheel.repl.logging.error.call(null,figwheel.repl.logger,e);
} else {
throw e39831;

}
}});
var G__39832_39902 = url.getQueryData();
G__39832_39902.add("fwinit","true");


return figwheel.repl.http_get.call(null,url).then((function (msg){
var typ = goog.object.get(msg,"connection-type");
figwheel.repl.logging.info.call(null,figwheel.repl.logger,["Connected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(typ)].join(''));

msg_fn.call(null,msg);

figwheel.repl.connection_established_BANG_.call(null,url);

cljs.core.swap_BANG_.call(null,figwheel.repl.state,cljs.core.assoc,new cljs.core.Keyword(null,"connection","connection",-123599300),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-url","http-url",-2043776269),surl], null));

figwheel.repl.hook_repl_printing_output_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-url","http-url",-2043776269),surl], null));

if(cljs.core._EQ_.call(null,typ,"http-long-polling")){
return figwheel.repl.long_poll.call(null,msg_fn,connect_url_SINGLEQUOTE_);
} else {
return figwheel.repl.poll.call(null,msg_fn,connect_url_SINGLEQUOTE_);
}
}),(function (e){
if((e instanceof Error)){
figwheel.repl.logging.error.call(null,figwheel.repl.logger,e);
} else {
}

if(cljs.core.truth_((function (){var and__4210__auto__ = (e instanceof goog.net.XhrIo);
if(and__4210__auto__){
return e.getResponseBody();
} else {
return and__4210__auto__;
}
})())){
figwheel.repl.debug.call(null,e.getResponseBody());
} else {
}

var wait_time = figwheel.repl.exponential_backoff.call(null,attempt);
figwheel.repl.logging.info.call(null,figwheel.repl.logger,["HTTP Connection Error: next connection attempt in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((wait_time / (1000)))," seconds"].join(''));

return setTimeout((function (){
return figwheel.repl.http_connect_STAR_.call(null,(attempt + (1)),connect_url_SINGLEQUOTE_);
}),wait_time);
}));
});

figwheel.repl.http_connect = (function figwheel$repl$http_connect(var_args){
var args__4824__auto__ = [];
var len__4818__auto___39903 = arguments.length;
var i__4819__auto___39904 = (0);
while(true){
if((i__4819__auto___39904 < len__4818__auto___39903)){
args__4824__auto__.push((arguments[i__4819__auto___39904]));

var G__39905 = (i__4819__auto___39904 + (1));
i__4819__auto___39904 = G__39905;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return figwheel.repl.http_connect.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(figwheel.repl.http_connect.cljs$core$IFn$_invoke$arity$variadic = (function (p__39834){
var vec__39835 = p__39834;
var connect_url_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__39835,(0),null);
return figwheel.repl.http_connect_STAR_.call(null,(0),connect_url_SINGLEQUOTE_);
}));

(figwheel.repl.http_connect.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.repl.http_connect.cljs$lang$applyTo = (function (seq39833){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39833));
}));


figwheel.repl.switch_to_http_QMARK_ = (function figwheel$repl$switch_to_http_QMARK_(url){
if(cljs.core.truth_((function (){var or__4212__auto__ = goog.string.startsWith(url,"http");
if(or__4212__auto__){
return or__4212__auto__;
} else {
return figwheel.repl.get_websocket_class.call(null);
}
})())){
return url;
} else {
figwheel.repl.logging.warning.call(null,figwheel.repl.logger,["No WebSocket implementation found! Falling back to http-long-polling",((cljs.core._EQ_.call(null,figwheel.repl.host_env,new cljs.core.Keyword(null,"node","node",581201198)))?":\n For a more efficient connection ensure that \"ws\" is installed :: do -> 'npm install ws'":null)].join(''));

return cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.Uri.parse(url).setScheme("http"));
}
});


/**
 * @define {string}
 */
figwheel.repl.client_log_level = goog.define("figwheel.repl.client_log_level","info");

figwheel.repl.init_log_level_BANG_ = (function figwheel$repl$init_log_level_BANG_(){
var seq__39838 = cljs.core.seq.call(null,(function (){var G__39843 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [figwheel.repl.logger], null);
if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined')){
return cljs.core.conj.call(null,G__39843,figwheel.core.logger);
} else {
return G__39843;
}
})());
var chunk__39839 = null;
var count__39840 = (0);
var i__39841 = (0);
while(true){
if((i__39841 < count__39840)){
var logger_SINGLEQUOTE_ = cljs.core._nth.call(null,chunk__39839,i__39841);
figwheel.repl.logging.set_log_level.call(null,logger_SINGLEQUOTE_,figwheel.repl.client_log_level);


var G__39906 = seq__39838;
var G__39907 = chunk__39839;
var G__39908 = count__39840;
var G__39909 = (i__39841 + (1));
seq__39838 = G__39906;
chunk__39839 = G__39907;
count__39840 = G__39908;
i__39841 = G__39909;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__39838);
if(temp__5753__auto__){
var seq__39838__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39838__$1)){
var c__4638__auto__ = cljs.core.chunk_first.call(null,seq__39838__$1);
var G__39910 = cljs.core.chunk_rest.call(null,seq__39838__$1);
var G__39911 = c__4638__auto__;
var G__39912 = cljs.core.count.call(null,c__4638__auto__);
var G__39913 = (0);
seq__39838 = G__39910;
chunk__39839 = G__39911;
count__39840 = G__39912;
i__39841 = G__39913;
continue;
} else {
var logger_SINGLEQUOTE_ = cljs.core.first.call(null,seq__39838__$1);
figwheel.repl.logging.set_log_level.call(null,logger_SINGLEQUOTE_,figwheel.repl.client_log_level);


var G__39914 = cljs.core.next.call(null,seq__39838__$1);
var G__39915 = null;
var G__39916 = (0);
var G__39917 = (0);
seq__39838 = G__39914;
chunk__39839 = G__39915;
count__39840 = G__39916;
i__39841 = G__39917;
continue;
}
} else {
return null;
}
}
break;
}
});

figwheel.repl.connect_STAR_ = (function figwheel$repl$connect_STAR_(connect_url_SINGLEQUOTE_){
figwheel.repl.init_log_level_BANG_.call(null);

figwheel.repl.patch_goog_base.call(null);

var url = figwheel.repl.switch_to_http_QMARK_.call(null,clojure.string.trim.call(null,(function (){var or__4212__auto__ = connect_url_SINGLEQUOTE_;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return figwheel.repl.connect_url;
}
})()));
if(goog.string.startsWith(url,"ws")){
return figwheel.repl.ws_connect.call(null,url);
} else {
if(goog.string.startsWith(url,"http")){
return figwheel.repl.http_connect.call(null,url);
} else {
return null;
}
}
});

figwheel.repl.connect = (function figwheel$repl$connect(var_args){
var args__4824__auto__ = [];
var len__4818__auto___39918 = arguments.length;
var i__4819__auto___39919 = (0);
while(true){
if((i__4819__auto___39919 < len__4818__auto___39918)){
args__4824__auto__.push((arguments[i__4819__auto___39919]));

var G__39920 = (i__4819__auto___39919 + (1));
i__4819__auto___39919 = G__39920;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return figwheel.repl.connect.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(figwheel.repl.connect.cljs$core$IFn$_invoke$arity$variadic = (function (p__39845){
var vec__39846 = p__39845;
var connect_url_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__39846,(0),null);
if((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.connected !== 'undefined')){
return null;
} else {
return (
figwheel.repl.connected = (function (){
figwheel.repl.connect_STAR_.call(null,connect_url_SINGLEQUOTE_);

return true;
})()
)
;
}
}));

(figwheel.repl.connect.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.repl.connect.cljs$lang$applyTo = (function (seq39844){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39844));
}));


//# sourceMappingURL=repl.js.map
