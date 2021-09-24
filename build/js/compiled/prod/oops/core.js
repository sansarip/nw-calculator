// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('oops.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.spec.alpha');
goog.require('goog.object');
goog.require('oops.sdefs');
goog.require('oops.state');
goog.require('oops.config');
goog.require('oops.messages');
goog.require('oops.helpers');
goog.require('oops.schema');
oops.core.report_error_dynamically = (function oops$core$report_error_dynamically(msg,data){
if(oops.state.was_error_reported_QMARK_()){
return null;
} else {
oops.state.mark_error_reported_BANG_();

var G__27041 = oops.config.get_error_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$throw,G__27041)){
throw oops.state.prepare_error_from_call_site(msg,oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$console,G__27041)){
var G__27043 = (console["error"]);
var G__27044 = msg;
var G__27045 = oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data);
var fexpr__27042 = oops.state.get_console_reporter();
return (fexpr__27042.cljs$core$IFn$_invoke$arity$3 ? fexpr__27042.cljs$core$IFn$_invoke$arity$3(G__27043,G__27044,G__27045) : fexpr__27042.call(null,G__27043,G__27044,G__27045));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__27041)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27041)].join('')));

}
}
}
}
});
oops.core.report_warning_dynamically = (function oops$core$report_warning_dynamically(msg,data){
var G__27046 = oops.config.get_warning_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$throw,G__27046)){
throw oops.state.prepare_error_from_call_site(msg,oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$console,G__27046)){
var G__27048 = (console["warn"]);
var G__27049 = msg;
var G__27050 = oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data);
var fexpr__27047 = oops.state.get_console_reporter();
return (fexpr__27047.cljs$core$IFn$_invoke$arity$3 ? fexpr__27047.cljs$core$IFn$_invoke$arity$3(G__27048,G__27049,G__27050) : fexpr__27047.call(null,G__27048,G__27049,G__27050));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__27046)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27046)].join('')));

}
}
}
});
oops.core.report_if_needed_dynamically = (function oops$core$report_if_needed_dynamically(var_args){
var args__4824__auto__ = [];
var len__4818__auto___27057 = arguments.length;
var i__4819__auto___27058 = (0);
while(true){
if((i__4819__auto___27058 < len__4818__auto___27057)){
args__4824__auto__.push((arguments[i__4819__auto___27058]));

var G__27059 = (i__4819__auto___27058 + (1));
i__4819__auto___27058 = G__27059;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic = (function (msg_id,p__27053){
var vec__27054 = p__27053;
var info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27054,(0),null);
return null;
}));

(oops.core.report_if_needed_dynamically.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(oops.core.report_if_needed_dynamically.cljs$lang$applyTo = (function (seq27051){
var G__27052 = cljs.core.first(seq27051);
var seq27051__$1 = cljs.core.next(seq27051);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27052,seq27051__$1);
}));

oops.core.validate_object_access_dynamically = (function oops$core$validate_object_access_dynamically(obj,mode,key,push_QMARK_,check_key_read_QMARK_,check_key_write_QMARK_){
if(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(0))) && ((void 0 === obj))))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),cljs.core.cst$kw$unexpected_DASH_object_DASH_value))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"undefined",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"undefined",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));

return false;
})()
):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(0))) && ((obj == null))))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),cljs.core.cst$kw$unexpected_DASH_object_DASH_value))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"nil",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"nil",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));

return false;
})()
):((cljs.core.boolean_QMARK_(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),cljs.core.cst$kw$unexpected_DASH_object_DASH_value))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"boolean",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"boolean",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));

return false;
})()
):((typeof obj === 'number')?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),cljs.core.cst$kw$unexpected_DASH_object_DASH_value))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"number",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"number",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));

return false;
})()
):((typeof obj === 'string')?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),cljs.core.cst$kw$unexpected_DASH_object_DASH_value))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"string",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"string",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));

return false;
})()
):((cljs.core.not(goog.isObject(obj)))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),cljs.core.cst$kw$unexpected_DASH_object_DASH_value))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"non-object",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"non-object",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));

return false;
})()
):(cljs.core.truth_(goog.isDateLike(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),cljs.core.cst$kw$unexpected_DASH_object_DASH_value))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"date-like",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"date-like",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));

return true;
})()
):(cljs.core.truth_(oops.helpers.cljs_type_QMARK_(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),cljs.core.cst$kw$unexpected_DASH_object_DASH_value))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"cljs type",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"cljs type",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));

return true;
})()
):(cljs.core.truth_(oops.helpers.cljs_instance_QMARK_(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),cljs.core.cst$kw$unexpected_DASH_object_DASH_value))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"cljs instance",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"cljs instance",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));

return true;
})()
):true
)))))))))){
if(cljs.core.truth_(push_QMARK_)){
oops.state.add_key_to_current_path_BANG_(key);

oops.state.set_last_access_modifier_BANG_(mode);
} else {
}

var and__4210__auto__ = (cljs.core.truth_(check_key_read_QMARK_)?((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(0))) && ((!(goog.object.containsKey(obj,key))))))?(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$missing_DASH_object_DASH_key,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$key,key,cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$missing_DASH_object_DASH_key,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$key,key,cljs.core.cst$kw$obj,oops.state.get_target_object()], null))):true):true);
if(cljs.core.truth_(and__4210__auto__)){
if(cljs.core.truth_(check_key_write_QMARK_)){
var temp__5755__auto__ = oops.helpers.get_property_descriptor(obj,key);
if((temp__5755__auto__ == null)){
if(cljs.core.truth_(oops.helpers.is_object_frozen_QMARK_(obj))){
return (oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$object_DASH_is_DASH_frozen,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$key,key,cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$object_DASH_is_DASH_frozen,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$key,key,cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));
} else {
if(cljs.core.truth_(oops.helpers.is_object_sealed_QMARK_(obj))){
return (oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$object_DASH_is_DASH_sealed,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$key,key,cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$object_DASH_is_DASH_sealed,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$key,key,cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));
} else {
return true;

}
}
} else {
var descriptor_27060 = temp__5755__auto__;
var temp__5755__auto____$1 = oops.helpers.determine_property_non_writable_reason(descriptor_27060);
if((temp__5755__auto____$1 == null)){
return true;
} else {
var reason_27061 = temp__5755__auto____$1;
return (oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$object_DASH_key_DASH_not_DASH_writable,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$key,key,cljs.core.cst$kw$frozen_QMARK_,oops.helpers.is_object_frozen_QMARK_(obj),cljs.core.cst$kw$reason,reason_27061,cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$object_DASH_key_DASH_not_DASH_writable,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$key,key,cljs.core.cst$kw$frozen_QMARK_,oops.helpers.is_object_frozen_QMARK_(obj),cljs.core.cst$kw$reason,reason_27061,cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));
}
}
} else {
return true;
}
} else {
return and__4210__auto__;
}
} else {
return null;
}
});
oops.core.validate_fn_call_dynamically = (function oops$core$validate_fn_call_dynamically(fn,mode){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(1))) && ((fn == null)))){
return true;
} else {
if(typeof fn === 'function'){
return true;
} else {
return (oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expected_DASH_function_DASH_value,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$soft_QMARK_,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(1)),cljs.core.cst$kw$fn,fn,cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$expected_DASH_function_DASH_value,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$soft_QMARK_,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(1)),cljs.core.cst$kw$fn,fn,cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));

}
}
});
oops.core.punch_key_dynamically_BANG_ = (function oops$core$punch_key_dynamically_BANG_(obj,key){
var child_factory_27063 = oops.config.get_child_factory();
var child_factory_27063__$1 = (function (){var G__27064 = child_factory_27063;
var G__27064__$1 = (((G__27064 instanceof cljs.core.Keyword))?G__27064.fqn:null);
switch (G__27064__$1) {
case "js-obj":
return (function (){
return ({});
});

break;
case "js-array":
return (function (){
return [];
});

break;
default:
return child_factory_27063;

}
})();

var child_obj_27062 = (child_factory_27063__$1.cljs$core$IFn$_invoke$arity$2 ? child_factory_27063__$1.cljs$core$IFn$_invoke$arity$2(obj,key) : child_factory_27063__$1.call(null,obj,key));
(obj[key] = child_obj_27062);

return child_obj_27062;
});
oops.core.build_path_dynamically = (function oops$core$build_path_dynamically(selector){
if(((typeof selector === 'string') || ((selector instanceof cljs.core.Keyword)))){
var selector_path_27068 = [];
oops.schema.prepare_simple_path_BANG_(selector,selector_path_27068);

return selector_path_27068;
} else {
var selector_path_27069 = [];
oops.schema.prepare_path_BANG_(selector,selector_path_27069);

return selector_path_27069;

}
});
oops.core.check_path_dynamically = (function oops$core$check_path_dynamically(path,op){
var temp__5757__auto__ = oops.schema.check_dynamic_path_BANG_(path,op);
if((temp__5757__auto__ == null)){
return null;
} else {
var issue_27070 = temp__5757__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(oops.core.report_if_needed_dynamically,issue_27070);
}
});
oops.core.get_key_dynamically = (function oops$core$get_key_dynamically(obj,key,mode){
return (obj[key]);
});
oops.core.set_key_dynamically = (function oops$core$set_key_dynamically(obj,key,val,mode){
return (obj[key] = val);
});
oops.core.get_selector_dynamically = (function oops$core$get_selector_dynamically(obj,selector){
var path_27072 = (function (){var path_27071 = oops.core.build_path_dynamically(selector);

return path_27071;
})();
var len_27073 = path_27072.length;
var i_27074 = (0);
var obj_27075 = obj;
while(true){
if((i_27074 < len_27073)){
var mode_27076 = (path_27072[i_27074]);
var key_27077 = (path_27072[(i_27074 + (1))]);
var next_obj_27078 = oops.core.get_key_dynamically(obj_27075,key_27077,mode_27076);
var G__27079 = mode_27076;
switch (G__27079) {
case (0):
var G__27081 = (i_27074 + (2));
var G__27082 = next_obj_27078;
i_27074 = G__27081;
obj_27075 = G__27082;
continue;

break;
case (1):
if((!((next_obj_27078 == null)))){
var G__27083 = (i_27074 + (2));
var G__27084 = next_obj_27078;
i_27074 = G__27083;
obj_27075 = G__27084;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_27078 == null)))){
var G__27085 = (i_27074 + (2));
var G__27086 = next_obj_27078;
i_27074 = G__27085;
obj_27075 = G__27086;
continue;
} else {
var G__27087 = (i_27074 + (2));
var G__27088 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_27075,key_27077) : oops.core.punch_key_dynamically_BANG_.call(null,obj_27075,key_27077));
i_27074 = G__27087;
obj_27075 = G__27088;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27079)].join('')));

}
} else {
return obj_27075;
}
break;
}
});
oops.core.get_selector_call_info_dynamically = (function oops$core$get_selector_call_info_dynamically(obj,selector){
var path_27090 = (function (){var path_27089 = oops.core.build_path_dynamically(selector);

return path_27089;
})();
var len_27091 = path_27090.length;
if((len_27091 < (4))){
return [obj,(function (){var path_27093 = path_27090;
var len_27094 = path_27093.length;
var i_27095 = (0);
var obj_27096 = obj;
while(true){
if((i_27095 < len_27094)){
var mode_27097 = (path_27093[i_27095]);
var key_27098 = (path_27093[(i_27095 + (1))]);
var next_obj_27099 = oops.core.get_key_dynamically(obj_27096,key_27098,mode_27097);
var G__27114 = mode_27097;
switch (G__27114) {
case (0):
var G__27118 = (i_27095 + (2));
var G__27119 = next_obj_27099;
i_27095 = G__27118;
obj_27096 = G__27119;
continue;

break;
case (1):
if((!((next_obj_27099 == null)))){
var G__27120 = (i_27095 + (2));
var G__27121 = next_obj_27099;
i_27095 = G__27120;
obj_27096 = G__27121;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_27099 == null)))){
var G__27122 = (i_27095 + (2));
var G__27123 = next_obj_27099;
i_27095 = G__27122;
obj_27096 = G__27123;
continue;
} else {
var G__27124 = (i_27095 + (2));
var G__27125 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_27096,key_27098) : oops.core.punch_key_dynamically_BANG_.call(null,obj_27096,key_27098));
i_27095 = G__27124;
obj_27096 = G__27125;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27114)].join('')));

}
} else {
return obj_27096;
}
break;
}
})()];
} else {
var target_obj_27092 = (function (){var path_27100 = path_27090.slice((0),(len_27091 - (2)));
var len_27101 = path_27100.length;
var i_27102 = (0);
var obj_27103 = obj;
while(true){
if((i_27102 < len_27101)){
var mode_27104 = (path_27100[i_27102]);
var key_27105 = (path_27100[(i_27102 + (1))]);
var next_obj_27106 = oops.core.get_key_dynamically(obj_27103,key_27105,mode_27104);
var G__27115 = mode_27104;
switch (G__27115) {
case (0):
var G__27127 = (i_27102 + (2));
var G__27128 = next_obj_27106;
i_27102 = G__27127;
obj_27103 = G__27128;
continue;

break;
case (1):
if((!((next_obj_27106 == null)))){
var G__27129 = (i_27102 + (2));
var G__27130 = next_obj_27106;
i_27102 = G__27129;
obj_27103 = G__27130;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_27106 == null)))){
var G__27131 = (i_27102 + (2));
var G__27132 = next_obj_27106;
i_27102 = G__27131;
obj_27103 = G__27132;
continue;
} else {
var G__27133 = (i_27102 + (2));
var G__27134 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_27103,key_27105) : oops.core.punch_key_dynamically_BANG_.call(null,obj_27103,key_27105));
i_27102 = G__27133;
obj_27103 = G__27134;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27115)].join('')));

}
} else {
return obj_27103;
}
break;
}
})();
return [target_obj_27092,(function (){var path_27107 = [(path_27090[(len_27091 - (2))]),(path_27090[(len_27091 - (1))])];
var len_27108 = path_27107.length;
var i_27109 = (0);
var obj_27110 = target_obj_27092;
while(true){
if((i_27109 < len_27108)){
var mode_27111 = (path_27107[i_27109]);
var key_27112 = (path_27107[(i_27109 + (1))]);
var next_obj_27113 = oops.core.get_key_dynamically(obj_27110,key_27112,mode_27111);
var G__27116 = mode_27111;
switch (G__27116) {
case (0):
var G__27136 = (i_27109 + (2));
var G__27137 = next_obj_27113;
i_27109 = G__27136;
obj_27110 = G__27137;
continue;

break;
case (1):
if((!((next_obj_27113 == null)))){
var G__27138 = (i_27109 + (2));
var G__27139 = next_obj_27113;
i_27109 = G__27138;
obj_27110 = G__27139;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_27113 == null)))){
var G__27140 = (i_27109 + (2));
var G__27141 = next_obj_27113;
i_27109 = G__27140;
obj_27110 = G__27141;
continue;
} else {
var G__27142 = (i_27109 + (2));
var G__27143 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_27110,key_27112) : oops.core.punch_key_dynamically_BANG_.call(null,obj_27110,key_27112));
i_27109 = G__27142;
obj_27110 = G__27143;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27116)].join('')));

}
} else {
return obj_27110;
}
break;
}
})()];
}
});
oops.core.set_selector_dynamically = (function oops$core$set_selector_dynamically(obj,selector,val){
var path_27145 = (function (){var path_27144 = oops.core.build_path_dynamically(selector);

return path_27144;
})();
var len_27148 = path_27145.length;
var parent_obj_path_27149 = path_27145.slice((0),(len_27148 - (2)));
var key_27146 = (path_27145[(len_27148 - (1))]);
var mode_27147 = (path_27145[(len_27148 - (2))]);
var parent_obj_27150 = (function (){var path_27151 = parent_obj_path_27149;
var len_27152 = path_27151.length;
var i_27153 = (0);
var obj_27154 = obj;
while(true){
if((i_27153 < len_27152)){
var mode_27155 = (path_27151[i_27153]);
var key_27156 = (path_27151[(i_27153 + (1))]);
var next_obj_27157 = oops.core.get_key_dynamically(obj_27154,key_27156,mode_27155);
var G__27158 = mode_27155;
switch (G__27158) {
case (0):
var G__27160 = (i_27153 + (2));
var G__27161 = next_obj_27157;
i_27153 = G__27160;
obj_27154 = G__27161;
continue;

break;
case (1):
if((!((next_obj_27157 == null)))){
var G__27162 = (i_27153 + (2));
var G__27163 = next_obj_27157;
i_27153 = G__27162;
obj_27154 = G__27163;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_27157 == null)))){
var G__27164 = (i_27153 + (2));
var G__27165 = next_obj_27157;
i_27153 = G__27164;
obj_27154 = G__27165;
continue;
} else {
var G__27166 = (i_27153 + (2));
var G__27167 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_27154,key_27156) : oops.core.punch_key_dynamically_BANG_.call(null,obj_27154,key_27156));
i_27153 = G__27166;
obj_27154 = G__27167;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27158)].join('')));

}
} else {
return obj_27154;
}
break;
}
})();
return oops.core.set_key_dynamically(parent_obj_27150,key_27146,val,mode_27147);
});
