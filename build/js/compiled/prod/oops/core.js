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

var G__27070 = oops.config.get_error_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$throw,G__27070)){
throw oops.state.prepare_error_from_call_site(msg,oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$console,G__27070)){
var G__27072 = (console["error"]);
var G__27073 = msg;
var G__27074 = oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data);
var fexpr__27071 = oops.state.get_console_reporter();
return (fexpr__27071.cljs$core$IFn$_invoke$arity$3 ? fexpr__27071.cljs$core$IFn$_invoke$arity$3(G__27072,G__27073,G__27074) : fexpr__27071.call(null,G__27072,G__27073,G__27074));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__27070)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27070)].join('')));

}
}
}
}
});
oops.core.report_warning_dynamically = (function oops$core$report_warning_dynamically(msg,data){
var G__27075 = oops.config.get_warning_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$throw,G__27075)){
throw oops.state.prepare_error_from_call_site(msg,oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$console,G__27075)){
var G__27077 = (console["warn"]);
var G__27078 = msg;
var G__27079 = oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data);
var fexpr__27076 = oops.state.get_console_reporter();
return (fexpr__27076.cljs$core$IFn$_invoke$arity$3 ? fexpr__27076.cljs$core$IFn$_invoke$arity$3(G__27077,G__27078,G__27079) : fexpr__27076.call(null,G__27077,G__27078,G__27079));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__27075)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27075)].join('')));

}
}
}
});
oops.core.report_if_needed_dynamically = (function oops$core$report_if_needed_dynamically(var_args){
var args__4824__auto__ = [];
var len__4818__auto___27086 = arguments.length;
var i__4819__auto___27087 = (0);
while(true){
if((i__4819__auto___27087 < len__4818__auto___27086)){
args__4824__auto__.push((arguments[i__4819__auto___27087]));

var G__27088 = (i__4819__auto___27087 + (1));
i__4819__auto___27087 = G__27088;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic = (function (msg_id,p__27082){
var vec__27083 = p__27082;
var info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27083,(0),null);
return null;
}));

(oops.core.report_if_needed_dynamically.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(oops.core.report_if_needed_dynamically.cljs$lang$applyTo = (function (seq27080){
var G__27081 = cljs.core.first(seq27080);
var seq27080__$1 = cljs.core.next(seq27080);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27081,seq27080__$1);
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
var descriptor_27089 = temp__5755__auto__;
var temp__5755__auto____$1 = oops.helpers.determine_property_non_writable_reason(descriptor_27089);
if((temp__5755__auto____$1 == null)){
return true;
} else {
var reason_27090 = temp__5755__auto____$1;
return (oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$object_DASH_key_DASH_not_DASH_writable,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$key,key,cljs.core.cst$kw$frozen_QMARK_,oops.helpers.is_object_frozen_QMARK_(obj),cljs.core.cst$kw$reason,reason_27090,cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$object_DASH_key_DASH_not_DASH_writable,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$key,key,cljs.core.cst$kw$frozen_QMARK_,oops.helpers.is_object_frozen_QMARK_(obj),cljs.core.cst$kw$reason,reason_27090,cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));
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
var child_factory_27092 = oops.config.get_child_factory();
var child_factory_27092__$1 = (function (){var G__27093 = child_factory_27092;
var G__27093__$1 = (((G__27093 instanceof cljs.core.Keyword))?G__27093.fqn:null);
switch (G__27093__$1) {
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
return child_factory_27092;

}
})();

var child_obj_27091 = (child_factory_27092__$1.cljs$core$IFn$_invoke$arity$2 ? child_factory_27092__$1.cljs$core$IFn$_invoke$arity$2(obj,key) : child_factory_27092__$1.call(null,obj,key));
(obj[key] = child_obj_27091);

return child_obj_27091;
});
oops.core.build_path_dynamically = (function oops$core$build_path_dynamically(selector){
if(((typeof selector === 'string') || ((selector instanceof cljs.core.Keyword)))){
var selector_path_27097 = [];
oops.schema.prepare_simple_path_BANG_(selector,selector_path_27097);

return selector_path_27097;
} else {
var selector_path_27098 = [];
oops.schema.prepare_path_BANG_(selector,selector_path_27098);

return selector_path_27098;

}
});
oops.core.check_path_dynamically = (function oops$core$check_path_dynamically(path,op){
var temp__5757__auto__ = oops.schema.check_dynamic_path_BANG_(path,op);
if((temp__5757__auto__ == null)){
return null;
} else {
var issue_27099 = temp__5757__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(oops.core.report_if_needed_dynamically,issue_27099);
}
});
oops.core.get_key_dynamically = (function oops$core$get_key_dynamically(obj,key,mode){
return (obj[key]);
});
oops.core.set_key_dynamically = (function oops$core$set_key_dynamically(obj,key,val,mode){
return (obj[key] = val);
});
oops.core.get_selector_dynamically = (function oops$core$get_selector_dynamically(obj,selector){
var path_27101 = (function (){var path_27100 = oops.core.build_path_dynamically(selector);

return path_27100;
})();
var len_27102 = path_27101.length;
var i_27103 = (0);
var obj_27104 = obj;
while(true){
if((i_27103 < len_27102)){
var mode_27105 = (path_27101[i_27103]);
var key_27106 = (path_27101[(i_27103 + (1))]);
var next_obj_27107 = oops.core.get_key_dynamically(obj_27104,key_27106,mode_27105);
var G__27108 = mode_27105;
switch (G__27108) {
case (0):
var G__27110 = (i_27103 + (2));
var G__27111 = next_obj_27107;
i_27103 = G__27110;
obj_27104 = G__27111;
continue;

break;
case (1):
if((!((next_obj_27107 == null)))){
var G__27112 = (i_27103 + (2));
var G__27113 = next_obj_27107;
i_27103 = G__27112;
obj_27104 = G__27113;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_27107 == null)))){
var G__27114 = (i_27103 + (2));
var G__27115 = next_obj_27107;
i_27103 = G__27114;
obj_27104 = G__27115;
continue;
} else {
var G__27116 = (i_27103 + (2));
var G__27117 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_27104,key_27106) : oops.core.punch_key_dynamically_BANG_.call(null,obj_27104,key_27106));
i_27103 = G__27116;
obj_27104 = G__27117;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27108)].join('')));

}
} else {
return obj_27104;
}
break;
}
});
oops.core.get_selector_call_info_dynamically = (function oops$core$get_selector_call_info_dynamically(obj,selector){
var path_27119 = (function (){var path_27118 = oops.core.build_path_dynamically(selector);

return path_27118;
})();
var len_27120 = path_27119.length;
if((len_27120 < (4))){
return [obj,(function (){var path_27122 = path_27119;
var len_27123 = path_27122.length;
var i_27124 = (0);
var obj_27125 = obj;
while(true){
if((i_27124 < len_27123)){
var mode_27126 = (path_27122[i_27124]);
var key_27127 = (path_27122[(i_27124 + (1))]);
var next_obj_27128 = oops.core.get_key_dynamically(obj_27125,key_27127,mode_27126);
var G__27143 = mode_27126;
switch (G__27143) {
case (0):
var G__27147 = (i_27124 + (2));
var G__27148 = next_obj_27128;
i_27124 = G__27147;
obj_27125 = G__27148;
continue;

break;
case (1):
if((!((next_obj_27128 == null)))){
var G__27149 = (i_27124 + (2));
var G__27150 = next_obj_27128;
i_27124 = G__27149;
obj_27125 = G__27150;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_27128 == null)))){
var G__27151 = (i_27124 + (2));
var G__27152 = next_obj_27128;
i_27124 = G__27151;
obj_27125 = G__27152;
continue;
} else {
var G__27153 = (i_27124 + (2));
var G__27154 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_27125,key_27127) : oops.core.punch_key_dynamically_BANG_.call(null,obj_27125,key_27127));
i_27124 = G__27153;
obj_27125 = G__27154;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27143)].join('')));

}
} else {
return obj_27125;
}
break;
}
})()];
} else {
var target_obj_27121 = (function (){var path_27129 = path_27119.slice((0),(len_27120 - (2)));
var len_27130 = path_27129.length;
var i_27131 = (0);
var obj_27132 = obj;
while(true){
if((i_27131 < len_27130)){
var mode_27133 = (path_27129[i_27131]);
var key_27134 = (path_27129[(i_27131 + (1))]);
var next_obj_27135 = oops.core.get_key_dynamically(obj_27132,key_27134,mode_27133);
var G__27144 = mode_27133;
switch (G__27144) {
case (0):
var G__27156 = (i_27131 + (2));
var G__27157 = next_obj_27135;
i_27131 = G__27156;
obj_27132 = G__27157;
continue;

break;
case (1):
if((!((next_obj_27135 == null)))){
var G__27158 = (i_27131 + (2));
var G__27159 = next_obj_27135;
i_27131 = G__27158;
obj_27132 = G__27159;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_27135 == null)))){
var G__27160 = (i_27131 + (2));
var G__27161 = next_obj_27135;
i_27131 = G__27160;
obj_27132 = G__27161;
continue;
} else {
var G__27162 = (i_27131 + (2));
var G__27163 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_27132,key_27134) : oops.core.punch_key_dynamically_BANG_.call(null,obj_27132,key_27134));
i_27131 = G__27162;
obj_27132 = G__27163;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27144)].join('')));

}
} else {
return obj_27132;
}
break;
}
})();
return [target_obj_27121,(function (){var path_27136 = [(path_27119[(len_27120 - (2))]),(path_27119[(len_27120 - (1))])];
var len_27137 = path_27136.length;
var i_27138 = (0);
var obj_27139 = target_obj_27121;
while(true){
if((i_27138 < len_27137)){
var mode_27140 = (path_27136[i_27138]);
var key_27141 = (path_27136[(i_27138 + (1))]);
var next_obj_27142 = oops.core.get_key_dynamically(obj_27139,key_27141,mode_27140);
var G__27145 = mode_27140;
switch (G__27145) {
case (0):
var G__27165 = (i_27138 + (2));
var G__27166 = next_obj_27142;
i_27138 = G__27165;
obj_27139 = G__27166;
continue;

break;
case (1):
if((!((next_obj_27142 == null)))){
var G__27167 = (i_27138 + (2));
var G__27168 = next_obj_27142;
i_27138 = G__27167;
obj_27139 = G__27168;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_27142 == null)))){
var G__27169 = (i_27138 + (2));
var G__27170 = next_obj_27142;
i_27138 = G__27169;
obj_27139 = G__27170;
continue;
} else {
var G__27171 = (i_27138 + (2));
var G__27172 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_27139,key_27141) : oops.core.punch_key_dynamically_BANG_.call(null,obj_27139,key_27141));
i_27138 = G__27171;
obj_27139 = G__27172;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27145)].join('')));

}
} else {
return obj_27139;
}
break;
}
})()];
}
});
oops.core.set_selector_dynamically = (function oops$core$set_selector_dynamically(obj,selector,val){
var path_27174 = (function (){var path_27173 = oops.core.build_path_dynamically(selector);

return path_27173;
})();
var len_27177 = path_27174.length;
var parent_obj_path_27178 = path_27174.slice((0),(len_27177 - (2)));
var key_27175 = (path_27174[(len_27177 - (1))]);
var mode_27176 = (path_27174[(len_27177 - (2))]);
var parent_obj_27179 = (function (){var path_27180 = parent_obj_path_27178;
var len_27181 = path_27180.length;
var i_27182 = (0);
var obj_27183 = obj;
while(true){
if((i_27182 < len_27181)){
var mode_27184 = (path_27180[i_27182]);
var key_27185 = (path_27180[(i_27182 + (1))]);
var next_obj_27186 = oops.core.get_key_dynamically(obj_27183,key_27185,mode_27184);
var G__27187 = mode_27184;
switch (G__27187) {
case (0):
var G__27189 = (i_27182 + (2));
var G__27190 = next_obj_27186;
i_27182 = G__27189;
obj_27183 = G__27190;
continue;

break;
case (1):
if((!((next_obj_27186 == null)))){
var G__27191 = (i_27182 + (2));
var G__27192 = next_obj_27186;
i_27182 = G__27191;
obj_27183 = G__27192;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_27186 == null)))){
var G__27193 = (i_27182 + (2));
var G__27194 = next_obj_27186;
i_27182 = G__27193;
obj_27183 = G__27194;
continue;
} else {
var G__27195 = (i_27182 + (2));
var G__27196 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_27183,key_27185) : oops.core.punch_key_dynamically_BANG_.call(null,obj_27183,key_27185));
i_27182 = G__27195;
obj_27183 = G__27196;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27187)].join('')));

}
} else {
return obj_27183;
}
break;
}
})();
return oops.core.set_key_dynamically(parent_obj_27179,key_27175,val,mode_27176);
});
