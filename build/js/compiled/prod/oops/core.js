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

var G__27024 = oops.config.get_error_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$throw,G__27024)){
throw oops.state.prepare_error_from_call_site(msg,oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$console,G__27024)){
var G__27026 = (console["error"]);
var G__27027 = msg;
var G__27028 = oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data);
var fexpr__27025 = oops.state.get_console_reporter();
return (fexpr__27025.cljs$core$IFn$_invoke$arity$3 ? fexpr__27025.cljs$core$IFn$_invoke$arity$3(G__27026,G__27027,G__27028) : fexpr__27025.call(null,G__27026,G__27027,G__27028));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__27024)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27024)].join('')));

}
}
}
}
});
oops.core.report_warning_dynamically = (function oops$core$report_warning_dynamically(msg,data){
var G__27029 = oops.config.get_warning_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$throw,G__27029)){
throw oops.state.prepare_error_from_call_site(msg,oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$console,G__27029)){
var G__27031 = (console["warn"]);
var G__27032 = msg;
var G__27033 = oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data);
var fexpr__27030 = oops.state.get_console_reporter();
return (fexpr__27030.cljs$core$IFn$_invoke$arity$3 ? fexpr__27030.cljs$core$IFn$_invoke$arity$3(G__27031,G__27032,G__27033) : fexpr__27030.call(null,G__27031,G__27032,G__27033));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__27029)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27029)].join('')));

}
}
}
});
oops.core.report_if_needed_dynamically = (function oops$core$report_if_needed_dynamically(var_args){
var args__4824__auto__ = [];
var len__4818__auto___27040 = arguments.length;
var i__4819__auto___27041 = (0);
while(true){
if((i__4819__auto___27041 < len__4818__auto___27040)){
args__4824__auto__.push((arguments[i__4819__auto___27041]));

var G__27042 = (i__4819__auto___27041 + (1));
i__4819__auto___27041 = G__27042;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic = (function (msg_id,p__27036){
var vec__27037 = p__27036;
var info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27037,(0),null);
return null;
}));

(oops.core.report_if_needed_dynamically.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(oops.core.report_if_needed_dynamically.cljs$lang$applyTo = (function (seq27034){
var G__27035 = cljs.core.first(seq27034);
var seq27034__$1 = cljs.core.next(seq27034);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27035,seq27034__$1);
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
var descriptor_27043 = temp__5755__auto__;
var temp__5755__auto____$1 = oops.helpers.determine_property_non_writable_reason(descriptor_27043);
if((temp__5755__auto____$1 == null)){
return true;
} else {
var reason_27044 = temp__5755__auto____$1;
return (oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$object_DASH_key_DASH_not_DASH_writable,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$key,key,cljs.core.cst$kw$frozen_QMARK_,oops.helpers.is_object_frozen_QMARK_(obj),cljs.core.cst$kw$reason,reason_27044,cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$object_DASH_key_DASH_not_DASH_writable,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$key,key,cljs.core.cst$kw$frozen_QMARK_,oops.helpers.is_object_frozen_QMARK_(obj),cljs.core.cst$kw$reason,reason_27044,cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));
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
var child_factory_27046 = oops.config.get_child_factory();
var child_factory_27046__$1 = (function (){var G__27047 = child_factory_27046;
var G__27047__$1 = (((G__27047 instanceof cljs.core.Keyword))?G__27047.fqn:null);
switch (G__27047__$1) {
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
return child_factory_27046;

}
})();

var child_obj_27045 = (child_factory_27046__$1.cljs$core$IFn$_invoke$arity$2 ? child_factory_27046__$1.cljs$core$IFn$_invoke$arity$2(obj,key) : child_factory_27046__$1.call(null,obj,key));
(obj[key] = child_obj_27045);

return child_obj_27045;
});
oops.core.build_path_dynamically = (function oops$core$build_path_dynamically(selector){
if(((typeof selector === 'string') || ((selector instanceof cljs.core.Keyword)))){
var selector_path_27051 = [];
oops.schema.prepare_simple_path_BANG_(selector,selector_path_27051);

return selector_path_27051;
} else {
var selector_path_27052 = [];
oops.schema.prepare_path_BANG_(selector,selector_path_27052);

return selector_path_27052;

}
});
oops.core.check_path_dynamically = (function oops$core$check_path_dynamically(path,op){
var temp__5757__auto__ = oops.schema.check_dynamic_path_BANG_(path,op);
if((temp__5757__auto__ == null)){
return null;
} else {
var issue_27053 = temp__5757__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(oops.core.report_if_needed_dynamically,issue_27053);
}
});
oops.core.get_key_dynamically = (function oops$core$get_key_dynamically(obj,key,mode){
return (obj[key]);
});
oops.core.set_key_dynamically = (function oops$core$set_key_dynamically(obj,key,val,mode){
return (obj[key] = val);
});
oops.core.get_selector_dynamically = (function oops$core$get_selector_dynamically(obj,selector){
var path_27055 = (function (){var path_27054 = oops.core.build_path_dynamically(selector);

return path_27054;
})();
var len_27056 = path_27055.length;
var i_27057 = (0);
var obj_27058 = obj;
while(true){
if((i_27057 < len_27056)){
var mode_27059 = (path_27055[i_27057]);
var key_27060 = (path_27055[(i_27057 + (1))]);
var next_obj_27061 = oops.core.get_key_dynamically(obj_27058,key_27060,mode_27059);
var G__27062 = mode_27059;
switch (G__27062) {
case (0):
var G__27064 = (i_27057 + (2));
var G__27065 = next_obj_27061;
i_27057 = G__27064;
obj_27058 = G__27065;
continue;

break;
case (1):
if((!((next_obj_27061 == null)))){
var G__27066 = (i_27057 + (2));
var G__27067 = next_obj_27061;
i_27057 = G__27066;
obj_27058 = G__27067;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_27061 == null)))){
var G__27068 = (i_27057 + (2));
var G__27069 = next_obj_27061;
i_27057 = G__27068;
obj_27058 = G__27069;
continue;
} else {
var G__27070 = (i_27057 + (2));
var G__27071 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_27058,key_27060) : oops.core.punch_key_dynamically_BANG_.call(null,obj_27058,key_27060));
i_27057 = G__27070;
obj_27058 = G__27071;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27062)].join('')));

}
} else {
return obj_27058;
}
break;
}
});
oops.core.get_selector_call_info_dynamically = (function oops$core$get_selector_call_info_dynamically(obj,selector){
var path_27073 = (function (){var path_27072 = oops.core.build_path_dynamically(selector);

return path_27072;
})();
var len_27074 = path_27073.length;
if((len_27074 < (4))){
return [obj,(function (){var path_27076 = path_27073;
var len_27077 = path_27076.length;
var i_27078 = (0);
var obj_27079 = obj;
while(true){
if((i_27078 < len_27077)){
var mode_27080 = (path_27076[i_27078]);
var key_27081 = (path_27076[(i_27078 + (1))]);
var next_obj_27082 = oops.core.get_key_dynamically(obj_27079,key_27081,mode_27080);
var G__27097 = mode_27080;
switch (G__27097) {
case (0):
var G__27101 = (i_27078 + (2));
var G__27102 = next_obj_27082;
i_27078 = G__27101;
obj_27079 = G__27102;
continue;

break;
case (1):
if((!((next_obj_27082 == null)))){
var G__27103 = (i_27078 + (2));
var G__27104 = next_obj_27082;
i_27078 = G__27103;
obj_27079 = G__27104;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_27082 == null)))){
var G__27105 = (i_27078 + (2));
var G__27106 = next_obj_27082;
i_27078 = G__27105;
obj_27079 = G__27106;
continue;
} else {
var G__27107 = (i_27078 + (2));
var G__27108 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_27079,key_27081) : oops.core.punch_key_dynamically_BANG_.call(null,obj_27079,key_27081));
i_27078 = G__27107;
obj_27079 = G__27108;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27097)].join('')));

}
} else {
return obj_27079;
}
break;
}
})()];
} else {
var target_obj_27075 = (function (){var path_27083 = path_27073.slice((0),(len_27074 - (2)));
var len_27084 = path_27083.length;
var i_27085 = (0);
var obj_27086 = obj;
while(true){
if((i_27085 < len_27084)){
var mode_27087 = (path_27083[i_27085]);
var key_27088 = (path_27083[(i_27085 + (1))]);
var next_obj_27089 = oops.core.get_key_dynamically(obj_27086,key_27088,mode_27087);
var G__27098 = mode_27087;
switch (G__27098) {
case (0):
var G__27110 = (i_27085 + (2));
var G__27111 = next_obj_27089;
i_27085 = G__27110;
obj_27086 = G__27111;
continue;

break;
case (1):
if((!((next_obj_27089 == null)))){
var G__27112 = (i_27085 + (2));
var G__27113 = next_obj_27089;
i_27085 = G__27112;
obj_27086 = G__27113;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_27089 == null)))){
var G__27114 = (i_27085 + (2));
var G__27115 = next_obj_27089;
i_27085 = G__27114;
obj_27086 = G__27115;
continue;
} else {
var G__27116 = (i_27085 + (2));
var G__27117 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_27086,key_27088) : oops.core.punch_key_dynamically_BANG_.call(null,obj_27086,key_27088));
i_27085 = G__27116;
obj_27086 = G__27117;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27098)].join('')));

}
} else {
return obj_27086;
}
break;
}
})();
return [target_obj_27075,(function (){var path_27090 = [(path_27073[(len_27074 - (2))]),(path_27073[(len_27074 - (1))])];
var len_27091 = path_27090.length;
var i_27092 = (0);
var obj_27093 = target_obj_27075;
while(true){
if((i_27092 < len_27091)){
var mode_27094 = (path_27090[i_27092]);
var key_27095 = (path_27090[(i_27092 + (1))]);
var next_obj_27096 = oops.core.get_key_dynamically(obj_27093,key_27095,mode_27094);
var G__27099 = mode_27094;
switch (G__27099) {
case (0):
var G__27119 = (i_27092 + (2));
var G__27120 = next_obj_27096;
i_27092 = G__27119;
obj_27093 = G__27120;
continue;

break;
case (1):
if((!((next_obj_27096 == null)))){
var G__27121 = (i_27092 + (2));
var G__27122 = next_obj_27096;
i_27092 = G__27121;
obj_27093 = G__27122;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_27096 == null)))){
var G__27123 = (i_27092 + (2));
var G__27124 = next_obj_27096;
i_27092 = G__27123;
obj_27093 = G__27124;
continue;
} else {
var G__27125 = (i_27092 + (2));
var G__27126 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_27093,key_27095) : oops.core.punch_key_dynamically_BANG_.call(null,obj_27093,key_27095));
i_27092 = G__27125;
obj_27093 = G__27126;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27099)].join('')));

}
} else {
return obj_27093;
}
break;
}
})()];
}
});
oops.core.set_selector_dynamically = (function oops$core$set_selector_dynamically(obj,selector,val){
var path_27128 = (function (){var path_27127 = oops.core.build_path_dynamically(selector);

return path_27127;
})();
var len_27131 = path_27128.length;
var parent_obj_path_27132 = path_27128.slice((0),(len_27131 - (2)));
var key_27129 = (path_27128[(len_27131 - (1))]);
var mode_27130 = (path_27128[(len_27131 - (2))]);
var parent_obj_27133 = (function (){var path_27134 = parent_obj_path_27132;
var len_27135 = path_27134.length;
var i_27136 = (0);
var obj_27137 = obj;
while(true){
if((i_27136 < len_27135)){
var mode_27138 = (path_27134[i_27136]);
var key_27139 = (path_27134[(i_27136 + (1))]);
var next_obj_27140 = oops.core.get_key_dynamically(obj_27137,key_27139,mode_27138);
var G__27141 = mode_27138;
switch (G__27141) {
case (0):
var G__27143 = (i_27136 + (2));
var G__27144 = next_obj_27140;
i_27136 = G__27143;
obj_27137 = G__27144;
continue;

break;
case (1):
if((!((next_obj_27140 == null)))){
var G__27145 = (i_27136 + (2));
var G__27146 = next_obj_27140;
i_27136 = G__27145;
obj_27137 = G__27146;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_27140 == null)))){
var G__27147 = (i_27136 + (2));
var G__27148 = next_obj_27140;
i_27136 = G__27147;
obj_27137 = G__27148;
continue;
} else {
var G__27149 = (i_27136 + (2));
var G__27150 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_27137,key_27139) : oops.core.punch_key_dynamically_BANG_.call(null,obj_27137,key_27139));
i_27136 = G__27149;
obj_27137 = G__27150;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27141)].join('')));

}
} else {
return obj_27137;
}
break;
}
})();
return oops.core.set_key_dynamically(parent_obj_27133,key_27129,val,mode_27130);
});
