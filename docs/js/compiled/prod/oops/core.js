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

var G__26933 = oops.config.get_error_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$throw,G__26933)){
throw oops.state.prepare_error_from_call_site(msg,oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$console,G__26933)){
var G__26935 = (console["error"]);
var G__26936 = msg;
var G__26937 = oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data);
var fexpr__26934 = oops.state.get_console_reporter();
return (fexpr__26934.cljs$core$IFn$_invoke$arity$3 ? fexpr__26934.cljs$core$IFn$_invoke$arity$3(G__26935,G__26936,G__26937) : fexpr__26934.call(null,G__26935,G__26936,G__26937));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__26933)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26933)].join('')));

}
}
}
}
});
oops.core.report_warning_dynamically = (function oops$core$report_warning_dynamically(msg,data){
var G__26938 = oops.config.get_warning_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$throw,G__26938)){
throw oops.state.prepare_error_from_call_site(msg,oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$console,G__26938)){
var G__26940 = (console["warn"]);
var G__26941 = msg;
var G__26942 = oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data);
var fexpr__26939 = oops.state.get_console_reporter();
return (fexpr__26939.cljs$core$IFn$_invoke$arity$3 ? fexpr__26939.cljs$core$IFn$_invoke$arity$3(G__26940,G__26941,G__26942) : fexpr__26939.call(null,G__26940,G__26941,G__26942));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__26938)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26938)].join('')));

}
}
}
});
oops.core.report_if_needed_dynamically = (function oops$core$report_if_needed_dynamically(var_args){
var args__4824__auto__ = [];
var len__4818__auto___26949 = arguments.length;
var i__4819__auto___26950 = (0);
while(true){
if((i__4819__auto___26950 < len__4818__auto___26949)){
args__4824__auto__.push((arguments[i__4819__auto___26950]));

var G__26951 = (i__4819__auto___26950 + (1));
i__4819__auto___26950 = G__26951;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic = (function (msg_id,p__26945){
var vec__26946 = p__26945;
var info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26946,(0),null);
return null;
}));

(oops.core.report_if_needed_dynamically.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(oops.core.report_if_needed_dynamically.cljs$lang$applyTo = (function (seq26943){
var G__26944 = cljs.core.first(seq26943);
var seq26943__$1 = cljs.core.next(seq26943);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26944,seq26943__$1);
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
var descriptor_26952 = temp__5755__auto__;
var temp__5755__auto____$1 = oops.helpers.determine_property_non_writable_reason(descriptor_26952);
if((temp__5755__auto____$1 == null)){
return true;
} else {
var reason_26953 = temp__5755__auto____$1;
return (oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$object_DASH_key_DASH_not_DASH_writable,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$key,key,cljs.core.cst$kw$frozen_QMARK_,oops.helpers.is_object_frozen_QMARK_(obj),cljs.core.cst$kw$reason,reason_26953,cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$object_DASH_key_DASH_not_DASH_writable,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$key,key,cljs.core.cst$kw$frozen_QMARK_,oops.helpers.is_object_frozen_QMARK_(obj),cljs.core.cst$kw$reason,reason_26953,cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));
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
var child_factory_26955 = oops.config.get_child_factory();
var child_factory_26955__$1 = (function (){var G__26956 = child_factory_26955;
var G__26956__$1 = (((G__26956 instanceof cljs.core.Keyword))?G__26956.fqn:null);
switch (G__26956__$1) {
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
return child_factory_26955;

}
})();

var child_obj_26954 = (child_factory_26955__$1.cljs$core$IFn$_invoke$arity$2 ? child_factory_26955__$1.cljs$core$IFn$_invoke$arity$2(obj,key) : child_factory_26955__$1.call(null,obj,key));
(obj[key] = child_obj_26954);

return child_obj_26954;
});
oops.core.build_path_dynamically = (function oops$core$build_path_dynamically(selector){
if(((typeof selector === 'string') || ((selector instanceof cljs.core.Keyword)))){
var selector_path_26960 = [];
oops.schema.prepare_simple_path_BANG_(selector,selector_path_26960);

return selector_path_26960;
} else {
var selector_path_26961 = [];
oops.schema.prepare_path_BANG_(selector,selector_path_26961);

return selector_path_26961;

}
});
oops.core.check_path_dynamically = (function oops$core$check_path_dynamically(path,op){
var temp__5757__auto__ = oops.schema.check_dynamic_path_BANG_(path,op);
if((temp__5757__auto__ == null)){
return null;
} else {
var issue_26962 = temp__5757__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(oops.core.report_if_needed_dynamically,issue_26962);
}
});
oops.core.get_key_dynamically = (function oops$core$get_key_dynamically(obj,key,mode){
return (obj[key]);
});
oops.core.set_key_dynamically = (function oops$core$set_key_dynamically(obj,key,val,mode){
return (obj[key] = val);
});
oops.core.get_selector_dynamically = (function oops$core$get_selector_dynamically(obj,selector){
var path_26964 = (function (){var path_26963 = oops.core.build_path_dynamically(selector);

return path_26963;
})();
var len_26965 = path_26964.length;
var i_26966 = (0);
var obj_26967 = obj;
while(true){
if((i_26966 < len_26965)){
var mode_26968 = (path_26964[i_26966]);
var key_26969 = (path_26964[(i_26966 + (1))]);
var next_obj_26970 = oops.core.get_key_dynamically(obj_26967,key_26969,mode_26968);
var G__26971 = mode_26968;
switch (G__26971) {
case (0):
var G__26973 = (i_26966 + (2));
var G__26974 = next_obj_26970;
i_26966 = G__26973;
obj_26967 = G__26974;
continue;

break;
case (1):
if((!((next_obj_26970 == null)))){
var G__26975 = (i_26966 + (2));
var G__26976 = next_obj_26970;
i_26966 = G__26975;
obj_26967 = G__26976;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_26970 == null)))){
var G__26977 = (i_26966 + (2));
var G__26978 = next_obj_26970;
i_26966 = G__26977;
obj_26967 = G__26978;
continue;
} else {
var G__26979 = (i_26966 + (2));
var G__26980 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_26967,key_26969) : oops.core.punch_key_dynamically_BANG_.call(null,obj_26967,key_26969));
i_26966 = G__26979;
obj_26967 = G__26980;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26971)].join('')));

}
} else {
return obj_26967;
}
break;
}
});
oops.core.get_selector_call_info_dynamically = (function oops$core$get_selector_call_info_dynamically(obj,selector){
var path_26982 = (function (){var path_26981 = oops.core.build_path_dynamically(selector);

return path_26981;
})();
var len_26983 = path_26982.length;
if((len_26983 < (4))){
return [obj,(function (){var path_26985 = path_26982;
var len_26986 = path_26985.length;
var i_26987 = (0);
var obj_26988 = obj;
while(true){
if((i_26987 < len_26986)){
var mode_26989 = (path_26985[i_26987]);
var key_26990 = (path_26985[(i_26987 + (1))]);
var next_obj_26991 = oops.core.get_key_dynamically(obj_26988,key_26990,mode_26989);
var G__27006 = mode_26989;
switch (G__27006) {
case (0):
var G__27010 = (i_26987 + (2));
var G__27011 = next_obj_26991;
i_26987 = G__27010;
obj_26988 = G__27011;
continue;

break;
case (1):
if((!((next_obj_26991 == null)))){
var G__27012 = (i_26987 + (2));
var G__27013 = next_obj_26991;
i_26987 = G__27012;
obj_26988 = G__27013;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_26991 == null)))){
var G__27014 = (i_26987 + (2));
var G__27015 = next_obj_26991;
i_26987 = G__27014;
obj_26988 = G__27015;
continue;
} else {
var G__27016 = (i_26987 + (2));
var G__27017 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_26988,key_26990) : oops.core.punch_key_dynamically_BANG_.call(null,obj_26988,key_26990));
i_26987 = G__27016;
obj_26988 = G__27017;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27006)].join('')));

}
} else {
return obj_26988;
}
break;
}
})()];
} else {
var target_obj_26984 = (function (){var path_26992 = path_26982.slice((0),(len_26983 - (2)));
var len_26993 = path_26992.length;
var i_26994 = (0);
var obj_26995 = obj;
while(true){
if((i_26994 < len_26993)){
var mode_26996 = (path_26992[i_26994]);
var key_26997 = (path_26992[(i_26994 + (1))]);
var next_obj_26998 = oops.core.get_key_dynamically(obj_26995,key_26997,mode_26996);
var G__27007 = mode_26996;
switch (G__27007) {
case (0):
var G__27019 = (i_26994 + (2));
var G__27020 = next_obj_26998;
i_26994 = G__27019;
obj_26995 = G__27020;
continue;

break;
case (1):
if((!((next_obj_26998 == null)))){
var G__27021 = (i_26994 + (2));
var G__27022 = next_obj_26998;
i_26994 = G__27021;
obj_26995 = G__27022;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_26998 == null)))){
var G__27023 = (i_26994 + (2));
var G__27024 = next_obj_26998;
i_26994 = G__27023;
obj_26995 = G__27024;
continue;
} else {
var G__27025 = (i_26994 + (2));
var G__27026 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_26995,key_26997) : oops.core.punch_key_dynamically_BANG_.call(null,obj_26995,key_26997));
i_26994 = G__27025;
obj_26995 = G__27026;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27007)].join('')));

}
} else {
return obj_26995;
}
break;
}
})();
return [target_obj_26984,(function (){var path_26999 = [(path_26982[(len_26983 - (2))]),(path_26982[(len_26983 - (1))])];
var len_27000 = path_26999.length;
var i_27001 = (0);
var obj_27002 = target_obj_26984;
while(true){
if((i_27001 < len_27000)){
var mode_27003 = (path_26999[i_27001]);
var key_27004 = (path_26999[(i_27001 + (1))]);
var next_obj_27005 = oops.core.get_key_dynamically(obj_27002,key_27004,mode_27003);
var G__27008 = mode_27003;
switch (G__27008) {
case (0):
var G__27028 = (i_27001 + (2));
var G__27029 = next_obj_27005;
i_27001 = G__27028;
obj_27002 = G__27029;
continue;

break;
case (1):
if((!((next_obj_27005 == null)))){
var G__27030 = (i_27001 + (2));
var G__27031 = next_obj_27005;
i_27001 = G__27030;
obj_27002 = G__27031;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_27005 == null)))){
var G__27032 = (i_27001 + (2));
var G__27033 = next_obj_27005;
i_27001 = G__27032;
obj_27002 = G__27033;
continue;
} else {
var G__27034 = (i_27001 + (2));
var G__27035 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_27002,key_27004) : oops.core.punch_key_dynamically_BANG_.call(null,obj_27002,key_27004));
i_27001 = G__27034;
obj_27002 = G__27035;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27008)].join('')));

}
} else {
return obj_27002;
}
break;
}
})()];
}
});
oops.core.set_selector_dynamically = (function oops$core$set_selector_dynamically(obj,selector,val){
var path_27037 = (function (){var path_27036 = oops.core.build_path_dynamically(selector);

return path_27036;
})();
var len_27040 = path_27037.length;
var parent_obj_path_27041 = path_27037.slice((0),(len_27040 - (2)));
var key_27038 = (path_27037[(len_27040 - (1))]);
var mode_27039 = (path_27037[(len_27040 - (2))]);
var parent_obj_27042 = (function (){var path_27043 = parent_obj_path_27041;
var len_27044 = path_27043.length;
var i_27045 = (0);
var obj_27046 = obj;
while(true){
if((i_27045 < len_27044)){
var mode_27047 = (path_27043[i_27045]);
var key_27048 = (path_27043[(i_27045 + (1))]);
var next_obj_27049 = oops.core.get_key_dynamically(obj_27046,key_27048,mode_27047);
var G__27050 = mode_27047;
switch (G__27050) {
case (0):
var G__27052 = (i_27045 + (2));
var G__27053 = next_obj_27049;
i_27045 = G__27052;
obj_27046 = G__27053;
continue;

break;
case (1):
if((!((next_obj_27049 == null)))){
var G__27054 = (i_27045 + (2));
var G__27055 = next_obj_27049;
i_27045 = G__27054;
obj_27046 = G__27055;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_27049 == null)))){
var G__27056 = (i_27045 + (2));
var G__27057 = next_obj_27049;
i_27045 = G__27056;
obj_27046 = G__27057;
continue;
} else {
var G__27058 = (i_27045 + (2));
var G__27059 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_27046,key_27048) : oops.core.punch_key_dynamically_BANG_.call(null,obj_27046,key_27048));
i_27045 = G__27058;
obj_27046 = G__27059;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27050)].join('')));

}
} else {
return obj_27046;
}
break;
}
})();
return oops.core.set_key_dynamically(parent_obj_27042,key_27038,val,mode_27039);
});
