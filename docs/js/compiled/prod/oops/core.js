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

var G__26919 = oops.config.get_error_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$throw,G__26919)){
throw oops.state.prepare_error_from_call_site(msg,oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$console,G__26919)){
var G__26921 = (console["error"]);
var G__26922 = msg;
var G__26923 = oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data);
var fexpr__26920 = oops.state.get_console_reporter();
return (fexpr__26920.cljs$core$IFn$_invoke$arity$3 ? fexpr__26920.cljs$core$IFn$_invoke$arity$3(G__26921,G__26922,G__26923) : fexpr__26920.call(null,G__26921,G__26922,G__26923));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__26919)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26919)].join('')));

}
}
}
}
});
oops.core.report_warning_dynamically = (function oops$core$report_warning_dynamically(msg,data){
var G__26924 = oops.config.get_warning_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$throw,G__26924)){
throw oops.state.prepare_error_from_call_site(msg,oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$console,G__26924)){
var G__26926 = (console["warn"]);
var G__26927 = msg;
var G__26928 = oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data);
var fexpr__26925 = oops.state.get_console_reporter();
return (fexpr__26925.cljs$core$IFn$_invoke$arity$3 ? fexpr__26925.cljs$core$IFn$_invoke$arity$3(G__26926,G__26927,G__26928) : fexpr__26925.call(null,G__26926,G__26927,G__26928));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__26924)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26924)].join('')));

}
}
}
});
oops.core.report_if_needed_dynamically = (function oops$core$report_if_needed_dynamically(var_args){
var args__4824__auto__ = [];
var len__4818__auto___26935 = arguments.length;
var i__4819__auto___26936 = (0);
while(true){
if((i__4819__auto___26936 < len__4818__auto___26935)){
args__4824__auto__.push((arguments[i__4819__auto___26936]));

var G__26937 = (i__4819__auto___26936 + (1));
i__4819__auto___26936 = G__26937;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic = (function (msg_id,p__26931){
var vec__26932 = p__26931;
var info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26932,(0),null);
return null;
}));

(oops.core.report_if_needed_dynamically.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(oops.core.report_if_needed_dynamically.cljs$lang$applyTo = (function (seq26929){
var G__26930 = cljs.core.first(seq26929);
var seq26929__$1 = cljs.core.next(seq26929);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26930,seq26929__$1);
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
var temp__5737__auto__ = oops.helpers.get_property_descriptor(obj,key);
if((temp__5737__auto__ == null)){
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
var descriptor_26938 = temp__5737__auto__;
var temp__5737__auto____$1 = oops.helpers.determine_property_non_writable_reason(descriptor_26938);
if((temp__5737__auto____$1 == null)){
return true;
} else {
var reason_26939 = temp__5737__auto____$1;
return (oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$object_DASH_key_DASH_not_DASH_writable,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$key,key,cljs.core.cst$kw$frozen_QMARK_,oops.helpers.is_object_frozen_QMARK_(obj),cljs.core.cst$kw$reason,reason_26939,cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$object_DASH_key_DASH_not_DASH_writable,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$key,key,cljs.core.cst$kw$frozen_QMARK_,oops.helpers.is_object_frozen_QMARK_(obj),cljs.core.cst$kw$reason,reason_26939,cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));
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
var child_factory_26941 = oops.config.get_child_factory();
var child_factory_26941__$1 = (function (){var G__26942 = child_factory_26941;
var G__26942__$1 = (((G__26942 instanceof cljs.core.Keyword))?G__26942.fqn:null);
switch (G__26942__$1) {
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
return child_factory_26941;

}
})();

var child_obj_26940 = (child_factory_26941__$1.cljs$core$IFn$_invoke$arity$2 ? child_factory_26941__$1.cljs$core$IFn$_invoke$arity$2(obj,key) : child_factory_26941__$1.call(null,obj,key));
(obj[key] = child_obj_26940);

return child_obj_26940;
});
oops.core.build_path_dynamically = (function oops$core$build_path_dynamically(selector){
if(((typeof selector === 'string') || ((selector instanceof cljs.core.Keyword)))){
var selector_path_26946 = [];
oops.schema.prepare_simple_path_BANG_(selector,selector_path_26946);

return selector_path_26946;
} else {
var selector_path_26947 = [];
oops.schema.prepare_path_BANG_(selector,selector_path_26947);

return selector_path_26947;

}
});
oops.core.check_path_dynamically = (function oops$core$check_path_dynamically(path,op){
var temp__5739__auto__ = oops.schema.check_dynamic_path_BANG_(path,op);
if((temp__5739__auto__ == null)){
return null;
} else {
var issue_26948 = temp__5739__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(oops.core.report_if_needed_dynamically,issue_26948);
}
});
oops.core.get_key_dynamically = (function oops$core$get_key_dynamically(obj,key,mode){
return (obj[key]);
});
oops.core.set_key_dynamically = (function oops$core$set_key_dynamically(obj,key,val,mode){
return (obj[key] = val);
});
oops.core.get_selector_dynamically = (function oops$core$get_selector_dynamically(obj,selector){
var path_26950 = (function (){var path_26949 = oops.core.build_path_dynamically(selector);

return path_26949;
})();
var len_26951 = path_26950.length;
var i_26952 = (0);
var obj_26953 = obj;
while(true){
if((i_26952 < len_26951)){
var mode_26954 = (path_26950[i_26952]);
var key_26955 = (path_26950[(i_26952 + (1))]);
var next_obj_26956 = oops.core.get_key_dynamically(obj_26953,key_26955,mode_26954);
var G__26957 = mode_26954;
switch (G__26957) {
case (0):
var G__26959 = (i_26952 + (2));
var G__26960 = next_obj_26956;
i_26952 = G__26959;
obj_26953 = G__26960;
continue;

break;
case (1):
if((!((next_obj_26956 == null)))){
var G__26961 = (i_26952 + (2));
var G__26962 = next_obj_26956;
i_26952 = G__26961;
obj_26953 = G__26962;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_26956 == null)))){
var G__26963 = (i_26952 + (2));
var G__26964 = next_obj_26956;
i_26952 = G__26963;
obj_26953 = G__26964;
continue;
} else {
var G__26965 = (i_26952 + (2));
var G__26966 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_26953,key_26955) : oops.core.punch_key_dynamically_BANG_.call(null,obj_26953,key_26955));
i_26952 = G__26965;
obj_26953 = G__26966;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26957)].join('')));

}
} else {
return obj_26953;
}
break;
}
});
oops.core.get_selector_call_info_dynamically = (function oops$core$get_selector_call_info_dynamically(obj,selector){
var path_26968 = (function (){var path_26967 = oops.core.build_path_dynamically(selector);

return path_26967;
})();
var len_26969 = path_26968.length;
if((len_26969 < (4))){
return [obj,(function (){var path_26971 = path_26968;
var len_26972 = path_26971.length;
var i_26973 = (0);
var obj_26974 = obj;
while(true){
if((i_26973 < len_26972)){
var mode_26975 = (path_26971[i_26973]);
var key_26976 = (path_26971[(i_26973 + (1))]);
var next_obj_26977 = oops.core.get_key_dynamically(obj_26974,key_26976,mode_26975);
var G__26992 = mode_26975;
switch (G__26992) {
case (0):
var G__26996 = (i_26973 + (2));
var G__26997 = next_obj_26977;
i_26973 = G__26996;
obj_26974 = G__26997;
continue;

break;
case (1):
if((!((next_obj_26977 == null)))){
var G__26998 = (i_26973 + (2));
var G__26999 = next_obj_26977;
i_26973 = G__26998;
obj_26974 = G__26999;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_26977 == null)))){
var G__27000 = (i_26973 + (2));
var G__27001 = next_obj_26977;
i_26973 = G__27000;
obj_26974 = G__27001;
continue;
} else {
var G__27002 = (i_26973 + (2));
var G__27003 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_26974,key_26976) : oops.core.punch_key_dynamically_BANG_.call(null,obj_26974,key_26976));
i_26973 = G__27002;
obj_26974 = G__27003;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26992)].join('')));

}
} else {
return obj_26974;
}
break;
}
})()];
} else {
var target_obj_26970 = (function (){var path_26978 = path_26968.slice((0),(len_26969 - (2)));
var len_26979 = path_26978.length;
var i_26980 = (0);
var obj_26981 = obj;
while(true){
if((i_26980 < len_26979)){
var mode_26982 = (path_26978[i_26980]);
var key_26983 = (path_26978[(i_26980 + (1))]);
var next_obj_26984 = oops.core.get_key_dynamically(obj_26981,key_26983,mode_26982);
var G__26993 = mode_26982;
switch (G__26993) {
case (0):
var G__27005 = (i_26980 + (2));
var G__27006 = next_obj_26984;
i_26980 = G__27005;
obj_26981 = G__27006;
continue;

break;
case (1):
if((!((next_obj_26984 == null)))){
var G__27007 = (i_26980 + (2));
var G__27008 = next_obj_26984;
i_26980 = G__27007;
obj_26981 = G__27008;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_26984 == null)))){
var G__27009 = (i_26980 + (2));
var G__27010 = next_obj_26984;
i_26980 = G__27009;
obj_26981 = G__27010;
continue;
} else {
var G__27011 = (i_26980 + (2));
var G__27012 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_26981,key_26983) : oops.core.punch_key_dynamically_BANG_.call(null,obj_26981,key_26983));
i_26980 = G__27011;
obj_26981 = G__27012;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26993)].join('')));

}
} else {
return obj_26981;
}
break;
}
})();
return [target_obj_26970,(function (){var path_26985 = [(path_26968[(len_26969 - (2))]),(path_26968[(len_26969 - (1))])];
var len_26986 = path_26985.length;
var i_26987 = (0);
var obj_26988 = target_obj_26970;
while(true){
if((i_26987 < len_26986)){
var mode_26989 = (path_26985[i_26987]);
var key_26990 = (path_26985[(i_26987 + (1))]);
var next_obj_26991 = oops.core.get_key_dynamically(obj_26988,key_26990,mode_26989);
var G__26994 = mode_26989;
switch (G__26994) {
case (0):
var G__27014 = (i_26987 + (2));
var G__27015 = next_obj_26991;
i_26987 = G__27014;
obj_26988 = G__27015;
continue;

break;
case (1):
if((!((next_obj_26991 == null)))){
var G__27016 = (i_26987 + (2));
var G__27017 = next_obj_26991;
i_26987 = G__27016;
obj_26988 = G__27017;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_26991 == null)))){
var G__27018 = (i_26987 + (2));
var G__27019 = next_obj_26991;
i_26987 = G__27018;
obj_26988 = G__27019;
continue;
} else {
var G__27020 = (i_26987 + (2));
var G__27021 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_26988,key_26990) : oops.core.punch_key_dynamically_BANG_.call(null,obj_26988,key_26990));
i_26987 = G__27020;
obj_26988 = G__27021;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26994)].join('')));

}
} else {
return obj_26988;
}
break;
}
})()];
}
});
oops.core.set_selector_dynamically = (function oops$core$set_selector_dynamically(obj,selector,val){
var path_27023 = (function (){var path_27022 = oops.core.build_path_dynamically(selector);

return path_27022;
})();
var len_27026 = path_27023.length;
var parent_obj_path_27027 = path_27023.slice((0),(len_27026 - (2)));
var key_27024 = (path_27023[(len_27026 - (1))]);
var mode_27025 = (path_27023[(len_27026 - (2))]);
var parent_obj_27028 = (function (){var path_27029 = parent_obj_path_27027;
var len_27030 = path_27029.length;
var i_27031 = (0);
var obj_27032 = obj;
while(true){
if((i_27031 < len_27030)){
var mode_27033 = (path_27029[i_27031]);
var key_27034 = (path_27029[(i_27031 + (1))]);
var next_obj_27035 = oops.core.get_key_dynamically(obj_27032,key_27034,mode_27033);
var G__27036 = mode_27033;
switch (G__27036) {
case (0):
var G__27038 = (i_27031 + (2));
var G__27039 = next_obj_27035;
i_27031 = G__27038;
obj_27032 = G__27039;
continue;

break;
case (1):
if((!((next_obj_27035 == null)))){
var G__27040 = (i_27031 + (2));
var G__27041 = next_obj_27035;
i_27031 = G__27040;
obj_27032 = G__27041;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_27035 == null)))){
var G__27042 = (i_27031 + (2));
var G__27043 = next_obj_27035;
i_27031 = G__27042;
obj_27032 = G__27043;
continue;
} else {
var G__27044 = (i_27031 + (2));
var G__27045 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_27032,key_27034) : oops.core.punch_key_dynamically_BANG_.call(null,obj_27032,key_27034));
i_27031 = G__27044;
obj_27032 = G__27045;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27036)].join('')));

}
} else {
return obj_27032;
}
break;
}
})();
return oops.core.set_key_dynamically(parent_obj_27028,key_27024,val,mode_27025);
});
