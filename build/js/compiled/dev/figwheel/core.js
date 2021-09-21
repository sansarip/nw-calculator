// Compiled by ClojureScript 1.10.879 {:optimizations :none}
goog.provide('figwheel.core');
goog.require('cljs.core');
goog.require('figwheel.tools.heads_up');
goog.require('goog.object');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('goog.log');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('goog.debug.Console');
goog.require('goog.async.Deferred');
goog.require('goog.Promise');
goog.require('goog.events.EventTarget');
goog.require('goog.events.Event');
figwheel.core.distinct_by = (function figwheel$core$distinct_by(f,coll){
var seen = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);
return cljs.core.filter.call(null,(function (p1__40181_SHARP_){
var k = f.call(null,p1__40181_SHARP_);
var res = cljs.core.not.call(null,cljs.core.deref.call(null,seen).call(null,k));
cljs.core._vreset_BANG_.call(null,seen,cljs.core.conj.call(null,cljs.core._deref.call(null,seen),k));

return res;
}),coll);
});
figwheel.core.map_keys = (function figwheel$core$map_keys(f,coll){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__40182){
var vec__40183 = p__40182;
var k = cljs.core.nth.call(null,vec__40183,(0),null);
var v = cljs.core.nth.call(null,vec__40183,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null,k),v], null);
})),coll);
});
figwheel.core._STAR_inline_code_message_max_column_STAR_ = (80);
figwheel.core.wrap_line = (function figwheel$core$wrap_line(text,size){
return cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,[".{1,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"}\\s|.{1,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"}"].join('')),[clojure.string.replace.call(null,text,/\n/," ")," "].join(''));
});
figwheel.core.cross_format = (function figwheel$core$cross_format(var_args){
var args__4824__auto__ = [];
var len__4818__auto___40187 = arguments.length;
var i__4819__auto___40188 = (0);
while(true){
if((i__4819__auto___40188 < len__4818__auto___40187)){
args__4824__auto__.push((arguments[i__4819__auto___40188]));

var G__40189 = (i__4819__auto___40188 + (1));
i__4819__auto___40188 = G__40189;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return figwheel.core.cross_format.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(figwheel.core.cross_format.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,goog.string.format,args);
}));

(figwheel.core.cross_format.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.core.cross_format.cljs$lang$applyTo = (function (seq40186){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40186));
}));

figwheel.core.pointer_message_lines = (function figwheel$core$pointer_message_lines(p__40192){
var map__40193 = p__40192;
var map__40193__$1 = cljs.core.__destructure_map.call(null,map__40193);
var message = cljs.core.get.call(null,map__40193__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var column = cljs.core.get.call(null,map__40193__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(((column + cljs.core.count.call(null,message)) > figwheel.core._STAR_inline_code_message_max_column_STAR_)){
return cljs.core.mapv.call(null,(function (p1__40191_SHARP_){
return cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-message","error-message",1756021561),null], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__40191_SHARP_], null)));
}),cljs.core.cons.call(null,figwheel.core.cross_format.call(null,(function (){var col = (column - (1));
return ["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((col === (0)))?null:col)),"s%s"].join('');
})(),"","^---"),cljs.core.map.call(null,(function (p1__40190_SHARP_){
return figwheel.core.cross_format.call(null,["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.core._STAR_inline_code_message_max_column_STAR_),"s"].join(''),p1__40190_SHARP_);
}),figwheel.core.wrap_line.call(null,message,(figwheel.core._STAR_inline_code_message_max_column_STAR_ - (10))))));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-message","error-message",1756021561),null,figwheel.core.cross_format.call(null,(function (){var col = (column - (1));
return ["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((col === (0)))?null:col)),"s%s %s"].join('');
})(),"","^---",message)], null)], null);
}
});
figwheel.core.inline_message_display_data = (function figwheel$core$inline_message_display_data(p__40195){
var map__40196 = p__40195;
var map__40196__$1 = cljs.core.__destructure_map.call(null,map__40196);
var message_data = map__40196__$1;
var message = cljs.core.get.call(null,map__40196__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var line = cljs.core.get.call(null,map__40196__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__40196__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var file_excerpt = cljs.core.get.call(null,map__40196__$1,new cljs.core.Keyword(null,"file-excerpt","file-excerpt",-1132330744));
if(cljs.core.truth_(file_excerpt)){
var map__40197 = file_excerpt;
var map__40197__$1 = cljs.core.__destructure_map.call(null,map__40197);
var start_line = cljs.core.get.call(null,map__40197__$1,new cljs.core.Keyword(null,"start-line","start-line",-41746654));
var path = cljs.core.get.call(null,map__40197__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var excerpt = cljs.core.get.call(null,map__40197__$1,new cljs.core.Keyword(null,"excerpt","excerpt",219850763));
var lines = cljs.core.map_indexed.call(null,(function (i,l){
var ln = (i + start_line);
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[((cljs.core._EQ_.call(null,line,ln))?new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357):new cljs.core.Keyword(null,"code-line","code-line",-2138627853)),ln,l],null));
}),clojure.string.split_lines.call(null,excerpt));
var vec__40198 = cljs.core.split_with.call(null,(function (p1__40194_SHARP_){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357),cljs.core.first.call(null,p1__40194_SHARP_));
}),lines);
var begin = cljs.core.nth.call(null,vec__40198,(0),null);
var end = cljs.core.nth.call(null,vec__40198,(1),null);
return cljs.core.concat.call(null,cljs.core.take_last.call(null,(5),begin),cljs.core.take.call(null,(1),end),figwheel.core.pointer_message_lines.call(null,message_data),cljs.core.take.call(null,(5),cljs.core.rest.call(null,end)));
} else {
return null;
}
});
figwheel.core.file_line_column = (function figwheel$core$file_line_column(p__40201){
var map__40202 = p__40201;
var map__40202__$1 = cljs.core.__destructure_map.call(null,map__40202);
var file = cljs.core.get.call(null,map__40202__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__40202__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__40202__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__40203 = "";
var G__40203__$1 = (cljs.core.truth_(file)?[G__40203,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__40203);
var G__40203__$2 = (cljs.core.truth_(line)?[G__40203__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__40203__$1);
if(cljs.core.truth_((function (){var and__4210__auto__ = line;
if(cljs.core.truth_(and__4210__auto__)){
return column;
} else {
return and__4210__auto__;
}
})())){
return [G__40203__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__40203__$2;
}
});
figwheel.core.version_value = (function figwheel$core$version_value(v){
try{return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core._STAR_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100000000000),(10000),(1)], null),cljs.core.map.call(null,(function (p1__40204_SHARP_){
return parseInt(p1__40204_SHARP_);
}),cljs.core.take.call(null,(3),clojure.string.split.call(null,v,/[^\d]/)))));
}catch (e40211){if((e40211 instanceof Error)){
var e = e40211;
return ((100000000000) * (100));
} else {
throw e40211;

}
}});

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.logger !== 'undefined')){
} else {
figwheel.core.logger = (((figwheel.core.version_value.call(null,cljs.core._STAR_clojurescript_version_STAR_) >= figwheel.core.version_value.call(null,"1.10.844")))?(new goog.debug.Logger("Figwheel")):goog.log.getLogger.call(null,"Figwheel"));
}

figwheel.core.glog_info = (function figwheel$core$glog_info(log,msg){
return goog.log.info.call(null,log,msg);
});

figwheel.core.glog_warning = (function figwheel$core$glog_warning(log,msg){
return goog.log.warning.call(null,log,msg);
});

figwheel.core.console_logging = (function figwheel$core$console_logging(){
if(cljs.core.truth_(goog.object.get(goog.debug.Console,"instance"))){
} else {
var c_40259 = (new goog.debug.Console());
var G__40212_40260 = c_40259.getFormatter();
goog.object.set(G__40212_40260,"showAbsoluteTime",false);

goog.object.set(G__40212_40260,"showRelativeTime",false);


goog.object.set(goog.debug.Console,"instance",c_40259);

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
goog.exportSymbol('figwheel.core.console_logging', figwheel.core.console_logging);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.log_console !== 'undefined')){
} else {
figwheel.core.log_console = figwheel.core.console_logging.call(null);
}

figwheel.core.event_target = (((typeof document !== 'undefined'))?document:(new goog.events.EventTarget()));
goog.exportSymbol('figwheel.core.event_target', figwheel.core.event_target);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.listener_key_map !== 'undefined')){
} else {
figwheel.core.listener_key_map = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}

figwheel.core.unlisten = (function figwheel$core$unlisten(ky,event_name){
var temp__5753__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.core.listener_key_map),ky);
if(cljs.core.truth_(temp__5753__auto__)){
var f = temp__5753__auto__;
return figwheel.core.event_target.removeEventListener(cljs.core.name.call(null,event_name),f);
} else {
return null;
}
});

figwheel.core.listen = (function figwheel$core$listen(ky,event_name,f){
figwheel.core.unlisten.call(null,ky,event_name);

figwheel.core.event_target.addEventListener(cljs.core.name.call(null,event_name),f);

return cljs.core.swap_BANG_.call(null,figwheel.core.listener_key_map,cljs.core.assoc,ky,f);
});

figwheel.core.dispatch_event = (function figwheel$core$dispatch_event(event_name,data){
return figwheel.core.event_target.dispatchEvent((function (){var G__40213 = (((figwheel.core.event_target instanceof goog.events.EventTarget))?(new goog.events.Event(cljs.core.name.call(null,event_name),figwheel.core.event_target)):(new Event(cljs.core.name.call(null,event_name),figwheel.core.event_target)));
goog.object.add(G__40213,"data",(function (){var or__4212__auto__ = data;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());

return G__40213;
})());
});

figwheel.core.event_data = (function figwheel$core$event_data(e){
return goog.object.get((function (){var temp__5751__auto__ = e.event_;
if(cljs.core.truth_(temp__5751__auto__)){
var e__$1 = temp__5751__auto__;
return e__$1;
} else {
return e;
}
})(),"data");
});


/**
 * @define {boolean}
 */
figwheel.core.load_warninged_code = goog.define("figwheel.core.load_warninged_code",false);


/**
 * @define {boolean}
 */
figwheel.core.heads_up_display = goog.define("figwheel.core.heads_up_display",true);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.state !== 'undefined')){
} else {
figwheel.core.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),cljs.core.PersistentArrayMap.EMPTY], null));
}

figwheel.core.heads_up_display_QMARK_ = (function figwheel$core$heads_up_display_QMARK_(){
var and__4210__auto__ = figwheel.core.heads_up_display;
if(cljs.core.truth_(and__4210__auto__)){
return (!((goog.global.document == null)));
} else {
return and__4210__auto__;
}
});

var last_reload_timestamp_40261 = cljs.core.atom.call(null,(0));
var promise_chain_40262 = (new goog.Promise((function (r,_){
return r.call(null,true);
})));
figwheel.core.render_watcher = (function figwheel$core$render_watcher(_,___$1,o,n){
if(cljs.core.truth_(figwheel.core.heads_up_display_QMARK_.call(null))){
var temp__5751__auto__ = (function (){var temp__5753__auto__ = cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null));
if(cljs.core.truth_(temp__5753__auto__)){
var ts = temp__5753__auto__;
var and__4210__auto__ = (cljs.core.deref.call(null,last_reload_timestamp_40261) < ts);
if(and__4210__auto__){
return ts;
} else {
return and__4210__auto__;
}
} else {
return null;
}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var ts = temp__5751__auto__;
var warnings = cljs.core.not_empty.call(null,cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null)));
var exception = cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"exception","exception",-335277064)], null));
cljs.core.reset_BANG_.call(null,last_reload_timestamp_40261,ts);

if(cljs.core.truth_(warnings)){
return promise_chain_40262.then((function (){
var warn = cljs.core.first.call(null,warnings);
var _STAR_inline_code_message_max_column_STAR__orig_val__40214 = figwheel.core._STAR_inline_code_message_max_column_STAR_;
var _STAR_inline_code_message_max_column_STAR__temp_val__40215 = (132);
(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__temp_val__40215);

try{return figwheel.tools.heads_up.display_warning.call(null,cljs.core.assoc.call(null,warn,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185),figwheel.core.inline_message_display_data.call(null,warn))).then((function (){
var seq__40216 = cljs.core.seq.call(null,cljs.core.rest.call(null,warnings));
var chunk__40217 = null;
var count__40218 = (0);
var i__40219 = (0);
while(true){
if((i__40219 < count__40218)){
var w = cljs.core._nth.call(null,chunk__40217,i__40219);
figwheel.tools.heads_up.append_warning_message.call(null,w);


var G__40263 = seq__40216;
var G__40264 = chunk__40217;
var G__40265 = count__40218;
var G__40266 = (i__40219 + (1));
seq__40216 = G__40263;
chunk__40217 = G__40264;
count__40218 = G__40265;
i__40219 = G__40266;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__40216);
if(temp__5753__auto__){
var seq__40216__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40216__$1)){
var c__4638__auto__ = cljs.core.chunk_first.call(null,seq__40216__$1);
var G__40267 = cljs.core.chunk_rest.call(null,seq__40216__$1);
var G__40268 = c__4638__auto__;
var G__40269 = cljs.core.count.call(null,c__4638__auto__);
var G__40270 = (0);
seq__40216 = G__40267;
chunk__40217 = G__40268;
count__40218 = G__40269;
i__40219 = G__40270;
continue;
} else {
var w = cljs.core.first.call(null,seq__40216__$1);
figwheel.tools.heads_up.append_warning_message.call(null,w);


var G__40271 = cljs.core.next.call(null,seq__40216__$1);
var G__40272 = null;
var G__40273 = (0);
var G__40274 = (0);
seq__40216 = G__40271;
chunk__40217 = G__40272;
count__40218 = G__40273;
i__40219 = G__40274;
continue;
}
} else {
return null;
}
}
break;
}
}));
}finally {(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__orig_val__40214);
}}));
} else {
if(cljs.core.truth_(exception)){
return promise_chain_40262.then((function (){
var _STAR_inline_code_message_max_column_STAR__orig_val__40220 = figwheel.core._STAR_inline_code_message_max_column_STAR_;
var _STAR_inline_code_message_max_column_STAR__temp_val__40221 = (132);
(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__temp_val__40221);

try{return figwheel.tools.heads_up.display_exception.call(null,cljs.core.assoc.call(null,exception,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185),figwheel.core.inline_message_display_data.call(null,exception)));
}finally {(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__orig_val__40220);
}}));
} else {
return promise_chain_40262.then((function (){
return figwheel.tools.heads_up.flash_loaded.call(null);
}));

}
}
} else {
return null;
}
} else {
return null;
}
});

cljs.core.add_watch.call(null,figwheel.core.state,new cljs.core.Keyword("figwheel.core","render-watcher","figwheel.core/render-watcher",2046135910),figwheel.core.render_watcher);

figwheel.core.immutable_ns_QMARK_ = (function figwheel$core$immutable_ns_QMARK_(ns){
var ns__$1 = cljs.core.name.call(null,ns);
var or__4212__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, ["cljs.nodejs",null,"goog",null,"figwheel.connect",null,"cljs.core",null,"figwheel.preload",null], null), null).call(null,ns__$1);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return ((goog.string.startsWith("clojure.",ns__$1)) || (goog.string.startsWith("goog.",ns__$1)));
}
});

figwheel.core.ns_exists_QMARK_ = (function figwheel$core$ns_exists_QMARK_(ns){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,ns),".")) == null)));
});

figwheel.core.reload_ns_QMARK_ = (function figwheel$core$reload_ns_QMARK_(namespace){
var meta_data = cljs.core.meta.call(null,namespace);
var and__4210__auto__ = cljs.core.not.call(null,figwheel.core.immutable_ns_QMARK_.call(null,namespace));
if(and__4210__auto__){
var and__4210__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data));
if(and__4210__auto____$1){
var or__4212__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var or__4212__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data);
if(cljs.core.truth_(or__4212__auto____$1)){
return or__4212__auto____$1;
} else {
return figwheel.core.ns_exists_QMARK_.call(null,namespace);
}
}
} else {
return and__4210__auto____$1;
}
} else {
return and__4210__auto__;
}
});

figwheel.core.call_hooks = (function figwheel$core$call_hooks(var_args){
var args__4824__auto__ = [];
var len__4818__auto___40275 = arguments.length;
var i__4819__auto___40276 = (0);
while(true){
if((i__4819__auto___40276 < len__4818__auto___40275)){
args__4824__auto__.push((arguments[i__4819__auto___40276]));

var G__40277 = (i__4819__auto___40276 + (1));
i__4819__auto___40276 = G__40277;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return figwheel.core.call_hooks.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(figwheel.core.call_hooks.cljs$core$IFn$_invoke$arity$variadic = (function (hook_key,args){
var hooks = cljs.core.keep.call(null,(function (p__40224){
var vec__40225 = p__40224;
var n = cljs.core.nth.call(null,vec__40225,(0),null);
var mdata = cljs.core.nth.call(null,vec__40225,(1),null);
var temp__5753__auto__ = cljs.core.get_in.call(null,mdata,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),hook_key], null));
if(cljs.core.truth_(temp__5753__auto__)){
var f = temp__5753__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,f], null);
} else {
return null;
}
}),new cljs.core.Keyword("figwheel.core","metadata","figwheel.core/metadata",-720139885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,figwheel.core.state)));
var seq__40228 = cljs.core.seq.call(null,hooks);
var chunk__40229 = null;
var count__40230 = (0);
var i__40231 = (0);
while(true){
if((i__40231 < count__40230)){
var vec__40238 = cljs.core._nth.call(null,chunk__40229,i__40231);
var n = cljs.core.nth.call(null,vec__40238,(0),null);
var f = cljs.core.nth.call(null,vec__40238,(1),null);
var temp__5751__auto___40278 = cljs.core.reduce.call(null,((function (seq__40228,chunk__40229,count__40230,i__40231,vec__40238,n,f,hooks){
return (function (p1__40205_SHARP_,p2__40206_SHARP_){
if(cljs.core.truth_(p1__40205_SHARP_)){
return goog.object.get(p1__40205_SHARP_,p2__40206_SHARP_);
} else {
return null;
}
});})(seq__40228,chunk__40229,count__40230,i__40231,vec__40238,n,f,hooks))
,goog.global,cljs.core.map.call(null,cljs.core.str,cljs.core.concat.call(null,clojure.string.split.call(null,n,/\./),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null))));
if(cljs.core.truth_(temp__5751__auto___40278)){
var hook_40279 = temp__5751__auto___40278;
figwheel.core.glog_info.call(null,figwheel.core.logger,["Calling ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));

cljs.core.apply.call(null,hook_40279,args);
} else {
figwheel.core.glog_warning.call(null,figwheel.core.logger,["Unable to find ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
}


var G__40280 = seq__40228;
var G__40281 = chunk__40229;
var G__40282 = count__40230;
var G__40283 = (i__40231 + (1));
seq__40228 = G__40280;
chunk__40229 = G__40281;
count__40230 = G__40282;
i__40231 = G__40283;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__40228);
if(temp__5753__auto__){
var seq__40228__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40228__$1)){
var c__4638__auto__ = cljs.core.chunk_first.call(null,seq__40228__$1);
var G__40284 = cljs.core.chunk_rest.call(null,seq__40228__$1);
var G__40285 = c__4638__auto__;
var G__40286 = cljs.core.count.call(null,c__4638__auto__);
var G__40287 = (0);
seq__40228 = G__40284;
chunk__40229 = G__40285;
count__40230 = G__40286;
i__40231 = G__40287;
continue;
} else {
var vec__40241 = cljs.core.first.call(null,seq__40228__$1);
var n = cljs.core.nth.call(null,vec__40241,(0),null);
var f = cljs.core.nth.call(null,vec__40241,(1),null);
var temp__5751__auto___40288 = cljs.core.reduce.call(null,((function (seq__40228,chunk__40229,count__40230,i__40231,vec__40241,n,f,seq__40228__$1,temp__5753__auto__,hooks){
return (function (p1__40205_SHARP_,p2__40206_SHARP_){
if(cljs.core.truth_(p1__40205_SHARP_)){
return goog.object.get(p1__40205_SHARP_,p2__40206_SHARP_);
} else {
return null;
}
});})(seq__40228,chunk__40229,count__40230,i__40231,vec__40241,n,f,seq__40228__$1,temp__5753__auto__,hooks))
,goog.global,cljs.core.map.call(null,cljs.core.str,cljs.core.concat.call(null,clojure.string.split.call(null,n,/\./),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null))));
if(cljs.core.truth_(temp__5751__auto___40288)){
var hook_40289 = temp__5751__auto___40288;
figwheel.core.glog_info.call(null,figwheel.core.logger,["Calling ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));

cljs.core.apply.call(null,hook_40289,args);
} else {
figwheel.core.glog_warning.call(null,figwheel.core.logger,["Unable to find ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
}


var G__40290 = cljs.core.next.call(null,seq__40228__$1);
var G__40291 = null;
var G__40292 = (0);
var G__40293 = (0);
seq__40228 = G__40290;
chunk__40229 = G__40291;
count__40230 = G__40292;
i__40231 = G__40293;
continue;
}
} else {
return null;
}
}
break;
}
}));

(figwheel.core.call_hooks.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(figwheel.core.call_hooks.cljs$lang$applyTo = (function (seq40222){
var G__40223 = cljs.core.first.call(null,seq40222);
var seq40222__$1 = cljs.core.next.call(null,seq40222);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40223,seq40222__$1);
}));


figwheel.core.reload_namespaces = (function figwheel$core$reload_namespaces(namespaces,figwheel_meta){
var figwheel_meta__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__40244){
var vec__40245 = p__40244;
var k = cljs.core.nth.call(null,vec__40245,(0),null);
var v = cljs.core.nth.call(null,vec__40245,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,k),v], null);
})),cljs.core.js__GT_clj.call(null,figwheel_meta,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
var namespaces__$1 = cljs.core.map.call(null,(function (p1__40207_SHARP_){
return cljs.core.with_meta.call(null,cljs.core.symbol.call(null,p1__40207_SHARP_),cljs.core.get.call(null,figwheel_meta__$1,p1__40207_SHARP_));
}),namespaces);
cljs.core.swap_BANG_.call(null,figwheel.core.state,(function (p1__40208_SHARP_){
return cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,p1__40208_SHARP_,new cljs.core.Keyword("figwheel.core","metadata","figwheel.core/metadata",-720139885),figwheel_meta__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null),(new Date()).getTime());
}));

var to_reload = (cljs.core.truth_((function (){var and__4210__auto__ = cljs.core.not.call(null,figwheel.core.load_warninged_code);
if(and__4210__auto__){
return cljs.core.not_empty.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.core.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null)));
} else {
return and__4210__auto__;
}
})())?null:cljs.core.filter.call(null,(function (p1__40209_SHARP_){
return figwheel.core.reload_ns_QMARK_.call(null,p1__40209_SHARP_);
}),namespaces__$1));
if(cljs.core.empty_QMARK_.call(null,to_reload)){
} else {
figwheel.core.call_hooks.call(null,new cljs.core.Keyword(null,"before-load","before-load",-2060117064),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespaces__$1], null));

setTimeout((function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.before-load","figwheel.before-load",58978771),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespaces__$1], null));
}),(0));
}

var seq__40248_40294 = cljs.core.seq.call(null,to_reload);
var chunk__40249_40295 = null;
var count__40250_40296 = (0);
var i__40251_40297 = (0);
while(true){
if((i__40251_40297 < count__40250_40296)){
var ns_40298 = cljs.core._nth.call(null,chunk__40249_40295,i__40251_40297);
goog.require(cljs.core.name.call(null,ns_40298),true);


var G__40299 = seq__40248_40294;
var G__40300 = chunk__40249_40295;
var G__40301 = count__40250_40296;
var G__40302 = (i__40251_40297 + (1));
seq__40248_40294 = G__40299;
chunk__40249_40295 = G__40300;
count__40250_40296 = G__40301;
i__40251_40297 = G__40302;
continue;
} else {
var temp__5753__auto___40303 = cljs.core.seq.call(null,seq__40248_40294);
if(temp__5753__auto___40303){
var seq__40248_40304__$1 = temp__5753__auto___40303;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40248_40304__$1)){
var c__4638__auto___40305 = cljs.core.chunk_first.call(null,seq__40248_40304__$1);
var G__40306 = cljs.core.chunk_rest.call(null,seq__40248_40304__$1);
var G__40307 = c__4638__auto___40305;
var G__40308 = cljs.core.count.call(null,c__4638__auto___40305);
var G__40309 = (0);
seq__40248_40294 = G__40306;
chunk__40249_40295 = G__40307;
count__40250_40296 = G__40308;
i__40251_40297 = G__40309;
continue;
} else {
var ns_40310 = cljs.core.first.call(null,seq__40248_40304__$1);
goog.require(cljs.core.name.call(null,ns_40310),true);


var G__40311 = cljs.core.next.call(null,seq__40248_40304__$1);
var G__40312 = null;
var G__40313 = (0);
var G__40314 = (0);
seq__40248_40294 = G__40311;
chunk__40249_40295 = G__40312;
count__40250_40296 = G__40313;
i__40251_40297 = G__40314;
continue;
}
} else {
}
}
break;
}

var after_reload_fn_40315 = (function (){
try{if(cljs.core.truth_(cljs.core.not_empty.call(null,to_reload))){
figwheel.core.glog_info.call(null,figwheel.core.logger,["loaded ",cljs.core.pr_str.call(null,to_reload)].join(''));

figwheel.core.call_hooks.call(null,new cljs.core.Keyword(null,"after-load","after-load",-1278503285),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reloaded-namespaces","reloaded-namespaces",1589557425),to_reload], null));

figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.after-load","figwheel.after-load",-1913099389),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reloaded-namespaces","reloaded-namespaces",1589557425),to_reload], null));
} else {
}

var temp__5753__auto__ = cljs.core.not_empty.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.set.call(null,to_reload)),namespaces__$1));
if(cljs.core.truth_(temp__5753__auto__)){
var not_loaded = temp__5753__auto__;
return figwheel.core.glog_info.call(null,figwheel.core.logger,["did not load ",cljs.core.pr_str.call(null,not_loaded)].join(''));
} else {
return null;
}
}finally {cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.assoc,new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),cljs.core.PersistentArrayMap.EMPTY);
}});
if((((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined')) && ((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.after_reloads !== 'undefined')))){
figwheel.repl.after_reloads(after_reload_fn_40315);
} else {
setTimeout(after_reload_fn_40315,(100));
}

return null;
});
goog.exportSymbol('figwheel.core.reload_namespaces', figwheel.core.reload_namespaces);

figwheel.core.compile_warnings = (function figwheel$core$compile_warnings(warnings){
if(cljs.core.empty_QMARK_.call(null,warnings)){
} else {
setTimeout((function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.compile-warnings","figwheel.compile-warnings",-2015032448),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"warnings","warnings",-735437651),warnings], null));
}),(0));
}

cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null),cljs.core.concat,warnings);

var seq__40252 = cljs.core.seq.call(null,warnings);
var chunk__40253 = null;
var count__40254 = (0);
var i__40255 = (0);
while(true){
if((i__40255 < count__40254)){
var warning = cljs.core._nth.call(null,chunk__40253,i__40255);
figwheel.core.glog_warning.call(null,figwheel.core.logger,["Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(warning))," in ",figwheel.core.file_line_column.call(null,warning)].join(''));


var G__40316 = seq__40252;
var G__40317 = chunk__40253;
var G__40318 = count__40254;
var G__40319 = (i__40255 + (1));
seq__40252 = G__40316;
chunk__40253 = G__40317;
count__40254 = G__40318;
i__40255 = G__40319;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__40252);
if(temp__5753__auto__){
var seq__40252__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40252__$1)){
var c__4638__auto__ = cljs.core.chunk_first.call(null,seq__40252__$1);
var G__40320 = cljs.core.chunk_rest.call(null,seq__40252__$1);
var G__40321 = c__4638__auto__;
var G__40322 = cljs.core.count.call(null,c__4638__auto__);
var G__40323 = (0);
seq__40252 = G__40320;
chunk__40253 = G__40321;
count__40254 = G__40322;
i__40255 = G__40323;
continue;
} else {
var warning = cljs.core.first.call(null,seq__40252__$1);
figwheel.core.glog_warning.call(null,figwheel.core.logger,["Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(warning))," in ",figwheel.core.file_line_column.call(null,warning)].join(''));


var G__40324 = cljs.core.next.call(null,seq__40252__$1);
var G__40325 = null;
var G__40326 = (0);
var G__40327 = (0);
seq__40252 = G__40324;
chunk__40253 = G__40325;
count__40254 = G__40326;
i__40255 = G__40327;
continue;
}
} else {
return null;
}
}
break;
}
});
goog.exportSymbol('figwheel.core.compile_warnings', figwheel.core.compile_warnings);

figwheel.core.compile_warnings_remote = (function figwheel$core$compile_warnings_remote(warnings_json){
return figwheel.core.compile_warnings.call(null,cljs.core.js__GT_clj.call(null,warnings_json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});
goog.exportSymbol('figwheel.core.compile_warnings_remote', figwheel.core.compile_warnings_remote);

figwheel.core.handle_exception = (function figwheel$core$handle_exception(p__40256){
var map__40257 = p__40256;
var map__40257__$1 = cljs.core.__destructure_map.call(null,map__40257);
var exception_data = map__40257__$1;
var file = cljs.core.get.call(null,map__40257__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var type = cljs.core.get.call(null,map__40257__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__40257__$1,new cljs.core.Keyword(null,"message","message",-406056002));
try{setTimeout((function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.compile-exception","figwheel.compile-exception",1092880746),exception_data);
}),(0));

cljs.core.swap_BANG_.call(null,figwheel.core.state,(function (p1__40210_SHARP_){
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,p1__40210_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null),(new Date()).getTime()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"exception","exception",-335277064)], null),exception_data);
}));

return figwheel.core.glog_warning.call(null,figwheel.core.logger,(function (){var G__40258 = "Compile Exception - ";
var G__40258__$1 = (cljs.core.truth_((function (){var or__4212__auto__ = type;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return message;
}
})())?[G__40258,clojure.string.join.call(null," : ",cljs.core.filter.call(null,cljs.core.some_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,message], null)))].join(''):G__40258);
if(cljs.core.truth_(file)){
return [G__40258__$1," in ",figwheel.core.file_line_column.call(null,exception_data)].join('');
} else {
return G__40258__$1;
}
})());
}finally {cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715)], null),cljs.core.PersistentArrayMap.EMPTY);
}});
goog.exportSymbol('figwheel.core.handle_exception', figwheel.core.handle_exception);

figwheel.core.handle_exception_remote = (function figwheel$core$handle_exception_remote(exception_data){
return figwheel.core.handle_exception.call(null,cljs.core.js__GT_clj.call(null,exception_data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});
goog.exportSymbol('figwheel.core.handle_exception_remote', figwheel.core.handle_exception_remote);

//# sourceMappingURL=core.js.map
