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
var _STAR_current_trace_STAR__orig_val__19232 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__19233 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$event_SLASH_do_DASH_fx], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__19233);

try{try{var effects = cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,cljs.core.cst$kw$db);
var temp__5753__auto___19268 = cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___19268)){
var new_db_19269 = temp__5753__auto___19268;
var fexpr__19234_19270 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,cljs.core.cst$kw$db,false);
(fexpr__19234_19270.cljs$core$IFn$_invoke$arity$1 ? fexpr__19234_19270.cljs$core$IFn$_invoke$arity$1(new_db_19269) : fexpr__19234_19270.call(null,new_db_19269));
} else {
}

var seq__19235 = cljs.core.seq(effects_without_db);
var chunk__19236 = null;
var count__19237 = (0);
var i__19238 = (0);
while(true){
if((i__19238 < count__19237)){
var vec__19245 = chunk__19236.cljs$core$IIndexed$_nth$arity$2(null,i__19238);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19245,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19245,(1),null);
var temp__5751__auto___19271 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___19271)){
var effect_fn_19272 = temp__5751__auto___19271;
(effect_fn_19272.cljs$core$IFn$_invoke$arity$1 ? effect_fn_19272.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_19272.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__19273 = seq__19235;
var G__19274 = chunk__19236;
var G__19275 = count__19237;
var G__19276 = (i__19238 + (1));
seq__19235 = G__19273;
chunk__19236 = G__19274;
count__19237 = G__19275;
i__19238 = G__19276;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__19235);
if(temp__5753__auto__){
var seq__19235__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19235__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__19235__$1);
var G__19277 = cljs.core.chunk_rest(seq__19235__$1);
var G__19278 = c__4638__auto__;
var G__19279 = cljs.core.count(c__4638__auto__);
var G__19280 = (0);
seq__19235 = G__19277;
chunk__19236 = G__19278;
count__19237 = G__19279;
i__19238 = G__19280;
continue;
} else {
var vec__19248 = cljs.core.first(seq__19235__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19248,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19248,(1),null);
var temp__5751__auto___19281 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___19281)){
var effect_fn_19282 = temp__5751__auto___19281;
(effect_fn_19282.cljs$core$IFn$_invoke$arity$1 ? effect_fn_19282.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_19282.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__19283 = cljs.core.next(seq__19235__$1);
var G__19284 = null;
var G__19285 = (0);
var G__19286 = (0);
seq__19235 = G__19283;
chunk__19236 = G__19284;
count__19237 = G__19285;
i__19238 = G__19286;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__19021__auto___19287 = re_frame.interop.now();
var duration__19022__auto___19288 = (end__19021__auto___19287 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__19022__auto___19288,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__19021__auto___19287);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__19232);
}} else {
var effects = cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,cljs.core.cst$kw$db);
var temp__5753__auto___19289 = cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___19289)){
var new_db_19290 = temp__5753__auto___19289;
var fexpr__19251_19291 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,cljs.core.cst$kw$db,false);
(fexpr__19251_19291.cljs$core$IFn$_invoke$arity$1 ? fexpr__19251_19291.cljs$core$IFn$_invoke$arity$1(new_db_19290) : fexpr__19251_19291.call(null,new_db_19290));
} else {
}

var seq__19252 = cljs.core.seq(effects_without_db);
var chunk__19253 = null;
var count__19254 = (0);
var i__19255 = (0);
while(true){
if((i__19255 < count__19254)){
var vec__19262 = chunk__19253.cljs$core$IIndexed$_nth$arity$2(null,i__19255);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19262,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19262,(1),null);
var temp__5751__auto___19292 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___19292)){
var effect_fn_19293 = temp__5751__auto___19292;
(effect_fn_19293.cljs$core$IFn$_invoke$arity$1 ? effect_fn_19293.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_19293.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__19294 = seq__19252;
var G__19295 = chunk__19253;
var G__19296 = count__19254;
var G__19297 = (i__19255 + (1));
seq__19252 = G__19294;
chunk__19253 = G__19295;
count__19254 = G__19296;
i__19255 = G__19297;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__19252);
if(temp__5753__auto__){
var seq__19252__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19252__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__19252__$1);
var G__19298 = cljs.core.chunk_rest(seq__19252__$1);
var G__19299 = c__4638__auto__;
var G__19300 = cljs.core.count(c__4638__auto__);
var G__19301 = (0);
seq__19252 = G__19298;
chunk__19253 = G__19299;
count__19254 = G__19300;
i__19255 = G__19301;
continue;
} else {
var vec__19265 = cljs.core.first(seq__19252__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19265,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19265,(1),null);
var temp__5751__auto___19302 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___19302)){
var effect_fn_19303 = temp__5751__auto___19302;
(effect_fn_19303.cljs$core$IFn$_invoke$arity$1 ? effect_fn_19303.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_19303.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__19304 = cljs.core.next(seq__19252__$1);
var G__19305 = null;
var G__19306 = (0);
var G__19307 = (0);
seq__19252 = G__19304;
chunk__19253 = G__19305;
count__19254 = G__19306;
i__19255 = G__19307;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__19308){
var map__19309 = p__19308;
var map__19309__$1 = cljs.core.__destructure_map(map__19309);
var effect = map__19309__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19309__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19309__$1,cljs.core.cst$kw$dispatch);
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
var seq__19310 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__19311 = null;
var count__19312 = (0);
var i__19313 = (0);
while(true){
if((i__19313 < count__19312)){
var effect = chunk__19311.cljs$core$IIndexed$_nth$arity$2(null,i__19313);
re_frame.fx.dispatch_later(effect);


var G__19314 = seq__19310;
var G__19315 = chunk__19311;
var G__19316 = count__19312;
var G__19317 = (i__19313 + (1));
seq__19310 = G__19314;
chunk__19311 = G__19315;
count__19312 = G__19316;
i__19313 = G__19317;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__19310);
if(temp__5753__auto__){
var seq__19310__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19310__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__19310__$1);
var G__19318 = cljs.core.chunk_rest(seq__19310__$1);
var G__19319 = c__4638__auto__;
var G__19320 = cljs.core.count(c__4638__auto__);
var G__19321 = (0);
seq__19310 = G__19318;
chunk__19311 = G__19319;
count__19312 = G__19320;
i__19313 = G__19321;
continue;
} else {
var effect = cljs.core.first(seq__19310__$1);
re_frame.fx.dispatch_later(effect);


var G__19322 = cljs.core.next(seq__19310__$1);
var G__19323 = null;
var G__19324 = (0);
var G__19325 = (0);
seq__19310 = G__19322;
chunk__19311 = G__19323;
count__19312 = G__19324;
i__19313 = G__19325;
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
var seq__19326 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__19327 = null;
var count__19328 = (0);
var i__19329 = (0);
while(true){
if((i__19329 < count__19328)){
var vec__19336 = chunk__19327.cljs$core$IIndexed$_nth$arity$2(null,i__19329);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19336,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19336,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$db,effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___19342 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___19342)){
var effect_fn_19343 = temp__5751__auto___19342;
(effect_fn_19343.cljs$core$IFn$_invoke$arity$1 ? effect_fn_19343.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_19343.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__19344 = seq__19326;
var G__19345 = chunk__19327;
var G__19346 = count__19328;
var G__19347 = (i__19329 + (1));
seq__19326 = G__19344;
chunk__19327 = G__19345;
count__19328 = G__19346;
i__19329 = G__19347;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__19326);
if(temp__5753__auto__){
var seq__19326__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19326__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__19326__$1);
var G__19348 = cljs.core.chunk_rest(seq__19326__$1);
var G__19349 = c__4638__auto__;
var G__19350 = cljs.core.count(c__4638__auto__);
var G__19351 = (0);
seq__19326 = G__19348;
chunk__19327 = G__19349;
count__19328 = G__19350;
i__19329 = G__19351;
continue;
} else {
var vec__19339 = cljs.core.first(seq__19326__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19339,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19339,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$db,effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___19352 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___19352)){
var effect_fn_19353 = temp__5751__auto___19352;
(effect_fn_19353.cljs$core$IFn$_invoke$arity$1 ? effect_fn_19353.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_19353.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__19354 = cljs.core.next(seq__19326__$1);
var G__19355 = null;
var G__19356 = (0);
var G__19357 = (0);
seq__19326 = G__19354;
chunk__19327 = G__19355;
count__19328 = G__19356;
i__19329 = G__19357;
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
var seq__19358 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__19359 = null;
var count__19360 = (0);
var i__19361 = (0);
while(true){
if((i__19361 < count__19360)){
var event = chunk__19359.cljs$core$IIndexed$_nth$arity$2(null,i__19361);
re_frame.router.dispatch(event);


var G__19362 = seq__19358;
var G__19363 = chunk__19359;
var G__19364 = count__19360;
var G__19365 = (i__19361 + (1));
seq__19358 = G__19362;
chunk__19359 = G__19363;
count__19360 = G__19364;
i__19361 = G__19365;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__19358);
if(temp__5753__auto__){
var seq__19358__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19358__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__19358__$1);
var G__19366 = cljs.core.chunk_rest(seq__19358__$1);
var G__19367 = c__4638__auto__;
var G__19368 = cljs.core.count(c__4638__auto__);
var G__19369 = (0);
seq__19358 = G__19366;
chunk__19359 = G__19367;
count__19360 = G__19368;
i__19361 = G__19369;
continue;
} else {
var event = cljs.core.first(seq__19358__$1);
re_frame.router.dispatch(event);


var G__19370 = cljs.core.next(seq__19358__$1);
var G__19371 = null;
var G__19372 = (0);
var G__19373 = (0);
seq__19358 = G__19370;
chunk__19359 = G__19371;
count__19360 = G__19372;
i__19361 = G__19373;
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
var seq__19374 = cljs.core.seq(value);
var chunk__19375 = null;
var count__19376 = (0);
var i__19377 = (0);
while(true){
if((i__19377 < count__19376)){
var event = chunk__19375.cljs$core$IIndexed$_nth$arity$2(null,i__19377);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__19378 = seq__19374;
var G__19379 = chunk__19375;
var G__19380 = count__19376;
var G__19381 = (i__19377 + (1));
seq__19374 = G__19378;
chunk__19375 = G__19379;
count__19376 = G__19380;
i__19377 = G__19381;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__19374);
if(temp__5753__auto__){
var seq__19374__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19374__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__19374__$1);
var G__19382 = cljs.core.chunk_rest(seq__19374__$1);
var G__19383 = c__4638__auto__;
var G__19384 = cljs.core.count(c__4638__auto__);
var G__19385 = (0);
seq__19374 = G__19382;
chunk__19375 = G__19383;
count__19376 = G__19384;
i__19377 = G__19385;
continue;
} else {
var event = cljs.core.first(seq__19374__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__19386 = cljs.core.next(seq__19374__$1);
var G__19387 = null;
var G__19388 = (0);
var G__19389 = (0);
seq__19374 = G__19386;
chunk__19375 = G__19387;
count__19376 = G__19388;
i__19377 = G__19389;
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
