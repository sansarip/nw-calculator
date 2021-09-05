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
var _STAR_current_trace_STAR__orig_val__19229 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__19230 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$event_SLASH_do_DASH_fx], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__19230);

try{try{var effects = cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,cljs.core.cst$kw$db);
var temp__5735__auto___19265 = cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___19265)){
var new_db_19266 = temp__5735__auto___19265;
var fexpr__19231_19267 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,cljs.core.cst$kw$db,false);
(fexpr__19231_19267.cljs$core$IFn$_invoke$arity$1 ? fexpr__19231_19267.cljs$core$IFn$_invoke$arity$1(new_db_19266) : fexpr__19231_19267.call(null,new_db_19266));
} else {
}

var seq__19232 = cljs.core.seq(effects_without_db);
var chunk__19233 = null;
var count__19234 = (0);
var i__19235 = (0);
while(true){
if((i__19235 < count__19234)){
var vec__19242 = chunk__19233.cljs$core$IIndexed$_nth$arity$2(null,i__19235);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19242,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19242,(1),null);
var temp__5733__auto___19268 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___19268)){
var effect_fn_19269 = temp__5733__auto___19268;
(effect_fn_19269.cljs$core$IFn$_invoke$arity$1 ? effect_fn_19269.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_19269.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__19270 = seq__19232;
var G__19271 = chunk__19233;
var G__19272 = count__19234;
var G__19273 = (i__19235 + (1));
seq__19232 = G__19270;
chunk__19233 = G__19271;
count__19234 = G__19272;
i__19235 = G__19273;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__19232);
if(temp__5735__auto__){
var seq__19232__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19232__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__19232__$1);
var G__19274 = cljs.core.chunk_rest(seq__19232__$1);
var G__19275 = c__4638__auto__;
var G__19276 = cljs.core.count(c__4638__auto__);
var G__19277 = (0);
seq__19232 = G__19274;
chunk__19233 = G__19275;
count__19234 = G__19276;
i__19235 = G__19277;
continue;
} else {
var vec__19245 = cljs.core.first(seq__19232__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19245,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19245,(1),null);
var temp__5733__auto___19278 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___19278)){
var effect_fn_19279 = temp__5733__auto___19278;
(effect_fn_19279.cljs$core$IFn$_invoke$arity$1 ? effect_fn_19279.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_19279.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__19280 = cljs.core.next(seq__19232__$1);
var G__19281 = null;
var G__19282 = (0);
var G__19283 = (0);
seq__19232 = G__19280;
chunk__19233 = G__19281;
count__19234 = G__19282;
i__19235 = G__19283;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__19018__auto___19284 = re_frame.interop.now();
var duration__19019__auto___19285 = (end__19018__auto___19284 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__19019__auto___19285,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__19018__auto___19284);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__19229);
}} else {
var effects = cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,cljs.core.cst$kw$db);
var temp__5735__auto___19286 = cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___19286)){
var new_db_19287 = temp__5735__auto___19286;
var fexpr__19248_19288 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,cljs.core.cst$kw$db,false);
(fexpr__19248_19288.cljs$core$IFn$_invoke$arity$1 ? fexpr__19248_19288.cljs$core$IFn$_invoke$arity$1(new_db_19287) : fexpr__19248_19288.call(null,new_db_19287));
} else {
}

var seq__19249 = cljs.core.seq(effects_without_db);
var chunk__19250 = null;
var count__19251 = (0);
var i__19252 = (0);
while(true){
if((i__19252 < count__19251)){
var vec__19259 = chunk__19250.cljs$core$IIndexed$_nth$arity$2(null,i__19252);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19259,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19259,(1),null);
var temp__5733__auto___19289 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___19289)){
var effect_fn_19290 = temp__5733__auto___19289;
(effect_fn_19290.cljs$core$IFn$_invoke$arity$1 ? effect_fn_19290.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_19290.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__19291 = seq__19249;
var G__19292 = chunk__19250;
var G__19293 = count__19251;
var G__19294 = (i__19252 + (1));
seq__19249 = G__19291;
chunk__19250 = G__19292;
count__19251 = G__19293;
i__19252 = G__19294;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__19249);
if(temp__5735__auto__){
var seq__19249__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19249__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__19249__$1);
var G__19295 = cljs.core.chunk_rest(seq__19249__$1);
var G__19296 = c__4638__auto__;
var G__19297 = cljs.core.count(c__4638__auto__);
var G__19298 = (0);
seq__19249 = G__19295;
chunk__19250 = G__19296;
count__19251 = G__19297;
i__19252 = G__19298;
continue;
} else {
var vec__19262 = cljs.core.first(seq__19249__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19262,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19262,(1),null);
var temp__5733__auto___19299 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___19299)){
var effect_fn_19300 = temp__5733__auto___19299;
(effect_fn_19300.cljs$core$IFn$_invoke$arity$1 ? effect_fn_19300.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_19300.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__19301 = cljs.core.next(seq__19249__$1);
var G__19302 = null;
var G__19303 = (0);
var G__19304 = (0);
seq__19249 = G__19301;
chunk__19250 = G__19302;
count__19251 = G__19303;
i__19252 = G__19304;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__19305){
var map__19306 = p__19305;
var map__19306__$1 = cljs.core.__destructure_map(map__19306);
var effect = map__19306__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19306__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19306__$1,cljs.core.cst$kw$dispatch);
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
var seq__19307 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__19308 = null;
var count__19309 = (0);
var i__19310 = (0);
while(true){
if((i__19310 < count__19309)){
var effect = chunk__19308.cljs$core$IIndexed$_nth$arity$2(null,i__19310);
re_frame.fx.dispatch_later(effect);


var G__19311 = seq__19307;
var G__19312 = chunk__19308;
var G__19313 = count__19309;
var G__19314 = (i__19310 + (1));
seq__19307 = G__19311;
chunk__19308 = G__19312;
count__19309 = G__19313;
i__19310 = G__19314;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__19307);
if(temp__5735__auto__){
var seq__19307__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19307__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__19307__$1);
var G__19315 = cljs.core.chunk_rest(seq__19307__$1);
var G__19316 = c__4638__auto__;
var G__19317 = cljs.core.count(c__4638__auto__);
var G__19318 = (0);
seq__19307 = G__19315;
chunk__19308 = G__19316;
count__19309 = G__19317;
i__19310 = G__19318;
continue;
} else {
var effect = cljs.core.first(seq__19307__$1);
re_frame.fx.dispatch_later(effect);


var G__19319 = cljs.core.next(seq__19307__$1);
var G__19320 = null;
var G__19321 = (0);
var G__19322 = (0);
seq__19307 = G__19319;
chunk__19308 = G__19320;
count__19309 = G__19321;
i__19310 = G__19322;
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
var seq__19323 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__19324 = null;
var count__19325 = (0);
var i__19326 = (0);
while(true){
if((i__19326 < count__19325)){
var vec__19333 = chunk__19324.cljs$core$IIndexed$_nth$arity$2(null,i__19326);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19333,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19333,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$db,effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___19339 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___19339)){
var effect_fn_19340 = temp__5733__auto___19339;
(effect_fn_19340.cljs$core$IFn$_invoke$arity$1 ? effect_fn_19340.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_19340.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__19341 = seq__19323;
var G__19342 = chunk__19324;
var G__19343 = count__19325;
var G__19344 = (i__19326 + (1));
seq__19323 = G__19341;
chunk__19324 = G__19342;
count__19325 = G__19343;
i__19326 = G__19344;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__19323);
if(temp__5735__auto__){
var seq__19323__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19323__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__19323__$1);
var G__19345 = cljs.core.chunk_rest(seq__19323__$1);
var G__19346 = c__4638__auto__;
var G__19347 = cljs.core.count(c__4638__auto__);
var G__19348 = (0);
seq__19323 = G__19345;
chunk__19324 = G__19346;
count__19325 = G__19347;
i__19326 = G__19348;
continue;
} else {
var vec__19336 = cljs.core.first(seq__19323__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19336,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19336,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$db,effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___19349 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___19349)){
var effect_fn_19350 = temp__5733__auto___19349;
(effect_fn_19350.cljs$core$IFn$_invoke$arity$1 ? effect_fn_19350.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_19350.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__19351 = cljs.core.next(seq__19323__$1);
var G__19352 = null;
var G__19353 = (0);
var G__19354 = (0);
seq__19323 = G__19351;
chunk__19324 = G__19352;
count__19325 = G__19353;
i__19326 = G__19354;
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
var seq__19355 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__19356 = null;
var count__19357 = (0);
var i__19358 = (0);
while(true){
if((i__19358 < count__19357)){
var event = chunk__19356.cljs$core$IIndexed$_nth$arity$2(null,i__19358);
re_frame.router.dispatch(event);


var G__19359 = seq__19355;
var G__19360 = chunk__19356;
var G__19361 = count__19357;
var G__19362 = (i__19358 + (1));
seq__19355 = G__19359;
chunk__19356 = G__19360;
count__19357 = G__19361;
i__19358 = G__19362;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__19355);
if(temp__5735__auto__){
var seq__19355__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19355__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__19355__$1);
var G__19363 = cljs.core.chunk_rest(seq__19355__$1);
var G__19364 = c__4638__auto__;
var G__19365 = cljs.core.count(c__4638__auto__);
var G__19366 = (0);
seq__19355 = G__19363;
chunk__19356 = G__19364;
count__19357 = G__19365;
i__19358 = G__19366;
continue;
} else {
var event = cljs.core.first(seq__19355__$1);
re_frame.router.dispatch(event);


var G__19367 = cljs.core.next(seq__19355__$1);
var G__19368 = null;
var G__19369 = (0);
var G__19370 = (0);
seq__19355 = G__19367;
chunk__19356 = G__19368;
count__19357 = G__19369;
i__19358 = G__19370;
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
var seq__19371 = cljs.core.seq(value);
var chunk__19372 = null;
var count__19373 = (0);
var i__19374 = (0);
while(true){
if((i__19374 < count__19373)){
var event = chunk__19372.cljs$core$IIndexed$_nth$arity$2(null,i__19374);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__19375 = seq__19371;
var G__19376 = chunk__19372;
var G__19377 = count__19373;
var G__19378 = (i__19374 + (1));
seq__19371 = G__19375;
chunk__19372 = G__19376;
count__19373 = G__19377;
i__19374 = G__19378;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__19371);
if(temp__5735__auto__){
var seq__19371__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19371__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__19371__$1);
var G__19379 = cljs.core.chunk_rest(seq__19371__$1);
var G__19380 = c__4638__auto__;
var G__19381 = cljs.core.count(c__4638__auto__);
var G__19382 = (0);
seq__19371 = G__19379;
chunk__19372 = G__19380;
count__19373 = G__19381;
i__19374 = G__19382;
continue;
} else {
var event = cljs.core.first(seq__19371__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__19383 = cljs.core.next(seq__19371__$1);
var G__19384 = null;
var G__19385 = (0);
var G__19386 = (0);
seq__19371 = G__19383;
chunk__19372 = G__19384;
count__19373 = G__19385;
i__19374 = G__19386;
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
