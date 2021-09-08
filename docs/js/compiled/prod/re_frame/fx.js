// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = cljs.core.cst$kw$fx;
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$id,cljs.core.cst$kw$do_DASH_fx,cljs.core.cst$kw$after,(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__19235 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__19236 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$event_SLASH_do_DASH_fx], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__19236);

try{try{var effects = cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,cljs.core.cst$kw$db);
var temp__5753__auto___19271 = cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___19271)){
var new_db_19272 = temp__5753__auto___19271;
var fexpr__19237_19273 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,cljs.core.cst$kw$db,false);
(fexpr__19237_19273.cljs$core$IFn$_invoke$arity$1 ? fexpr__19237_19273.cljs$core$IFn$_invoke$arity$1(new_db_19272) : fexpr__19237_19273.call(null,new_db_19272));
} else {
}

var seq__19238 = cljs.core.seq(effects_without_db);
var chunk__19239 = null;
var count__19240 = (0);
var i__19241 = (0);
while(true){
if((i__19241 < count__19240)){
var vec__19248 = chunk__19239.cljs$core$IIndexed$_nth$arity$2(null,i__19241);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19248,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19248,(1),null);
var temp__5751__auto___19274 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___19274)){
var effect_fn_19275 = temp__5751__auto___19274;
(effect_fn_19275.cljs$core$IFn$_invoke$arity$1 ? effect_fn_19275.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_19275.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__19276 = seq__19238;
var G__19277 = chunk__19239;
var G__19278 = count__19240;
var G__19279 = (i__19241 + (1));
seq__19238 = G__19276;
chunk__19239 = G__19277;
count__19240 = G__19278;
i__19241 = G__19279;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__19238);
if(temp__5753__auto__){
var seq__19238__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19238__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__19238__$1);
var G__19280 = cljs.core.chunk_rest(seq__19238__$1);
var G__19281 = c__4638__auto__;
var G__19282 = cljs.core.count(c__4638__auto__);
var G__19283 = (0);
seq__19238 = G__19280;
chunk__19239 = G__19281;
count__19240 = G__19282;
i__19241 = G__19283;
continue;
} else {
var vec__19251 = cljs.core.first(seq__19238__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19251,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19251,(1),null);
var temp__5751__auto___19284 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___19284)){
var effect_fn_19285 = temp__5751__auto___19284;
(effect_fn_19285.cljs$core$IFn$_invoke$arity$1 ? effect_fn_19285.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_19285.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__19286 = cljs.core.next(seq__19238__$1);
var G__19287 = null;
var G__19288 = (0);
var G__19289 = (0);
seq__19238 = G__19286;
chunk__19239 = G__19287;
count__19240 = G__19288;
i__19241 = G__19289;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__19024__auto___19290 = re_frame.interop.now();
var duration__19025__auto___19291 = (end__19024__auto___19290 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__19025__auto___19291,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__19024__auto___19290);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__19235);
}} else {
var effects = cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,cljs.core.cst$kw$db);
var temp__5753__auto___19292 = cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___19292)){
var new_db_19293 = temp__5753__auto___19292;
var fexpr__19254_19294 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,cljs.core.cst$kw$db,false);
(fexpr__19254_19294.cljs$core$IFn$_invoke$arity$1 ? fexpr__19254_19294.cljs$core$IFn$_invoke$arity$1(new_db_19293) : fexpr__19254_19294.call(null,new_db_19293));
} else {
}

var seq__19255 = cljs.core.seq(effects_without_db);
var chunk__19256 = null;
var count__19257 = (0);
var i__19258 = (0);
while(true){
if((i__19258 < count__19257)){
var vec__19265 = chunk__19256.cljs$core$IIndexed$_nth$arity$2(null,i__19258);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19265,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19265,(1),null);
var temp__5751__auto___19295 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___19295)){
var effect_fn_19296 = temp__5751__auto___19295;
(effect_fn_19296.cljs$core$IFn$_invoke$arity$1 ? effect_fn_19296.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_19296.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__19297 = seq__19255;
var G__19298 = chunk__19256;
var G__19299 = count__19257;
var G__19300 = (i__19258 + (1));
seq__19255 = G__19297;
chunk__19256 = G__19298;
count__19257 = G__19299;
i__19258 = G__19300;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__19255);
if(temp__5753__auto__){
var seq__19255__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19255__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__19255__$1);
var G__19301 = cljs.core.chunk_rest(seq__19255__$1);
var G__19302 = c__4638__auto__;
var G__19303 = cljs.core.count(c__4638__auto__);
var G__19304 = (0);
seq__19255 = G__19301;
chunk__19256 = G__19302;
count__19257 = G__19303;
i__19258 = G__19304;
continue;
} else {
var vec__19268 = cljs.core.first(seq__19255__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19268,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19268,(1),null);
var temp__5751__auto___19305 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___19305)){
var effect_fn_19306 = temp__5751__auto___19305;
(effect_fn_19306.cljs$core$IFn$_invoke$arity$1 ? effect_fn_19306.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_19306.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__19307 = cljs.core.next(seq__19255__$1);
var G__19308 = null;
var G__19309 = (0);
var G__19310 = (0);
seq__19255 = G__19307;
chunk__19256 = G__19308;
count__19257 = G__19309;
i__19258 = G__19310;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__19311){
var map__19312 = p__19311;
var map__19312__$1 = cljs.core.__destructure_map(map__19312);
var effect = map__19312__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19312__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19312__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch_DASH_later,(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__19313 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__19314 = null;
var count__19315 = (0);
var i__19316 = (0);
while(true){
if((i__19316 < count__19315)){
var effect = chunk__19314.cljs$core$IIndexed$_nth$arity$2(null,i__19316);
re_frame.fx.dispatch_later(effect);


var G__19317 = seq__19313;
var G__19318 = chunk__19314;
var G__19319 = count__19315;
var G__19320 = (i__19316 + (1));
seq__19313 = G__19317;
chunk__19314 = G__19318;
count__19315 = G__19319;
i__19316 = G__19320;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__19313);
if(temp__5753__auto__){
var seq__19313__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19313__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__19313__$1);
var G__19321 = cljs.core.chunk_rest(seq__19313__$1);
var G__19322 = c__4638__auto__;
var G__19323 = cljs.core.count(c__4638__auto__);
var G__19324 = (0);
seq__19313 = G__19321;
chunk__19314 = G__19322;
count__19315 = G__19323;
i__19316 = G__19324;
continue;
} else {
var effect = cljs.core.first(seq__19313__$1);
re_frame.fx.dispatch_later(effect);


var G__19325 = cljs.core.next(seq__19313__$1);
var G__19326 = null;
var G__19327 = (0);
var G__19328 = (0);
seq__19313 = G__19325;
chunk__19314 = G__19326;
count__19315 = G__19327;
i__19316 = G__19328;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$fx,(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__19329 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__19330 = null;
var count__19331 = (0);
var i__19332 = (0);
while(true){
if((i__19332 < count__19331)){
var vec__19339 = chunk__19330.cljs$core$IIndexed$_nth$arity$2(null,i__19332);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19339,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19339,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$db,effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___19345 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___19345)){
var effect_fn_19346 = temp__5751__auto___19345;
(effect_fn_19346.cljs$core$IFn$_invoke$arity$1 ? effect_fn_19346.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_19346.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__19347 = seq__19329;
var G__19348 = chunk__19330;
var G__19349 = count__19331;
var G__19350 = (i__19332 + (1));
seq__19329 = G__19347;
chunk__19330 = G__19348;
count__19331 = G__19349;
i__19332 = G__19350;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__19329);
if(temp__5753__auto__){
var seq__19329__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19329__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__19329__$1);
var G__19351 = cljs.core.chunk_rest(seq__19329__$1);
var G__19352 = c__4638__auto__;
var G__19353 = cljs.core.count(c__4638__auto__);
var G__19354 = (0);
seq__19329 = G__19351;
chunk__19330 = G__19352;
count__19331 = G__19353;
i__19332 = G__19354;
continue;
} else {
var vec__19342 = cljs.core.first(seq__19329__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19342,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19342,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$db,effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___19355 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___19355)){
var effect_fn_19356 = temp__5751__auto___19355;
(effect_fn_19356.cljs$core$IFn$_invoke$arity$1 ? effect_fn_19356.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_19356.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__19357 = cljs.core.next(seq__19329__$1);
var G__19358 = null;
var G__19359 = (0);
var G__19360 = (0);
seq__19329 = G__19357;
chunk__19330 = G__19358;
count__19331 = G__19359;
i__19332 = G__19360;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch,(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch_DASH_n,(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__19361 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__19362 = null;
var count__19363 = (0);
var i__19364 = (0);
while(true){
if((i__19364 < count__19363)){
var event = chunk__19362.cljs$core$IIndexed$_nth$arity$2(null,i__19364);
re_frame.router.dispatch(event);


var G__19365 = seq__19361;
var G__19366 = chunk__19362;
var G__19367 = count__19363;
var G__19368 = (i__19364 + (1));
seq__19361 = G__19365;
chunk__19362 = G__19366;
count__19363 = G__19367;
i__19364 = G__19368;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__19361);
if(temp__5753__auto__){
var seq__19361__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19361__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__19361__$1);
var G__19369 = cljs.core.chunk_rest(seq__19361__$1);
var G__19370 = c__4638__auto__;
var G__19371 = cljs.core.count(c__4638__auto__);
var G__19372 = (0);
seq__19361 = G__19369;
chunk__19362 = G__19370;
count__19363 = G__19371;
i__19364 = G__19372;
continue;
} else {
var event = cljs.core.first(seq__19361__$1);
re_frame.router.dispatch(event);


var G__19373 = cljs.core.next(seq__19361__$1);
var G__19374 = null;
var G__19375 = (0);
var G__19376 = (0);
seq__19361 = G__19373;
chunk__19362 = G__19374;
count__19363 = G__19375;
i__19364 = G__19376;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$deregister_DASH_event_DASH_handler,(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__19377 = cljs.core.seq(value);
var chunk__19378 = null;
var count__19379 = (0);
var i__19380 = (0);
while(true){
if((i__19380 < count__19379)){
var event = chunk__19378.cljs$core$IIndexed$_nth$arity$2(null,i__19380);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__19381 = seq__19377;
var G__19382 = chunk__19378;
var G__19383 = count__19379;
var G__19384 = (i__19380 + (1));
seq__19377 = G__19381;
chunk__19378 = G__19382;
count__19379 = G__19383;
i__19380 = G__19384;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__19377);
if(temp__5753__auto__){
var seq__19377__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19377__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__19377__$1);
var G__19385 = cljs.core.chunk_rest(seq__19377__$1);
var G__19386 = c__4638__auto__;
var G__19387 = cljs.core.count(c__4638__auto__);
var G__19388 = (0);
seq__19377 = G__19385;
chunk__19378 = G__19386;
count__19379 = G__19387;
i__19380 = G__19388;
continue;
} else {
var event = cljs.core.first(seq__19377__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__19389 = cljs.core.next(seq__19377__$1);
var G__19390 = null;
var G__19391 = (0);
var G__19392 = (0);
seq__19377 = G__19389;
chunk__19378 = G__19390;
count__19379 = G__19391;
i__19380 = G__19392;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$db,(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));
