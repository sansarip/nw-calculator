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

var G__26922 = oops.config.get_error_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$throw,G__26922)){
throw oops.state.prepare_error_from_call_site(msg,oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$console,G__26922)){
var G__26924 = (console["error"]);
var G__26925 = msg;
var G__26926 = oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data);
var fexpr__26923 = oops.state.get_console_reporter();
return (fexpr__26923.cljs$core$IFn$_invoke$arity$3 ? fexpr__26923.cljs$core$IFn$_invoke$arity$3(G__26924,G__26925,G__26926) : fexpr__26923.call(null,G__26924,G__26925,G__26926));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__26922)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26922)].join('')));

}
}
}
}
});
oops.core.report_warning_dynamically = (function oops$core$report_warning_dynamically(msg,data){
var G__26927 = oops.config.get_warning_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$throw,G__26927)){
throw oops.state.prepare_error_from_call_site(msg,oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$console,G__26927)){
var G__26929 = (console["warn"]);
var G__26930 = msg;
var G__26931 = oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data);
var fexpr__26928 = oops.state.get_console_reporter();
return (fexpr__26928.cljs$core$IFn$_invoke$arity$3 ? fexpr__26928.cljs$core$IFn$_invoke$arity$3(G__26929,G__26930,G__26931) : fexpr__26928.call(null,G__26929,G__26930,G__26931));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__26927)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26927)].join('')));

}
}
}
});
oops.core.report_if_needed_dynamically = (function oops$core$report_if_needed_dynamically(var_args){
var args__4824__auto__ = [];
var len__4818__auto___26938 = arguments.length;
var i__4819__auto___26939 = (0);
while(true){
if((i__4819__auto___26939 < len__4818__auto___26938)){
args__4824__auto__.push((arguments[i__4819__auto___26939]));

var G__26940 = (i__4819__auto___26939 + (1));
i__4819__auto___26939 = G__26940;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic = (function (msg_id,p__26934){
var vec__26935 = p__26934;
var info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26935,(0),null);
return null;
}));

(oops.core.report_if_needed_dynamically.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(oops.core.report_if_needed_dynamically.cljs$lang$applyTo = (function (seq26932){
var G__26933 = cljs.core.first(seq26932);
var seq26932__$1 = cljs.core.next(seq26932);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26933,seq26932__$1);
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
var descriptor_26941 = temp__5755__auto__;
var temp__5755__auto____$1 = oops.helpers.determine_property_non_writable_reason(descriptor_26941);
if((temp__5755__auto____$1 == null)){
return true;
} else {
var reason_26942 = temp__5755__auto____$1;
return (oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$object_DASH_key_DASH_not_DASH_writable,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$key,key,cljs.core.cst$kw$frozen_QMARK_,oops.helpers.is_object_frozen_QMARK_(obj),cljs.core.cst$kw$reason,reason_26942,cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$object_DASH_key_DASH_not_DASH_writable,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$key,key,cljs.core.cst$kw$frozen_QMARK_,oops.helpers.is_object_frozen_QMARK_(obj),cljs.core.cst$kw$reason,reason_26942,cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));
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
var child_factory_26944 = oops.config.get_child_factory();
var child_factory_26944__$1 = (function (){var G__26945 = child_factory_26944;
var G__26945__$1 = (((G__26945 instanceof cljs.core.Keyword))?G__26945.fqn:null);
switch (G__26945__$1) {
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
return child_factory_26944;

}
})();

var child_obj_26943 = (child_factory_26944__$1.cljs$core$IFn$_invoke$arity$2 ? child_factory_26944__$1.cljs$core$IFn$_invoke$arity$2(obj,key) : child_factory_26944__$1.call(null,obj,key));
(obj[key] = child_obj_26943);

return child_obj_26943;
});
oops.core.build_path_dynamically = (function oops$core$build_path_dynamically(selector){
if(((typeof selector === 'string') || ((selector instanceof cljs.core.Keyword)))){
var selector_path_26949 = [];
oops.schema.prepare_simple_path_BANG_(selector,selector_path_26949);

return selector_path_26949;
} else {
var selector_path_26950 = [];
oops.schema.prepare_path_BANG_(selector,selector_path_26950);

return selector_path_26950;

}
});
oops.core.check_path_dynamically = (function oops$core$check_path_dynamically(path,op){
var temp__5757__auto__ = oops.schema.check_dynamic_path_BANG_(path,op);
if((temp__5757__auto__ == null)){
return null;
} else {
var issue_26951 = temp__5757__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(oops.core.report_if_needed_dynamically,issue_26951);
}
});
oops.core.get_key_dynamically = (function oops$core$get_key_dynamically(obj,key,mode){
return (obj[key]);
});
oops.core.set_key_dynamically = (function oops$core$set_key_dynamically(obj,key,val,mode){
return (obj[key] = val);
});
oops.core.get_selector_dynamically = (function oops$core$get_selector_dynamically(obj,selector){
var path_26953 = (function (){var path_26952 = oops.core.build_path_dynamically(selector);

return path_26952;
})();
var len_26954 = path_26953.length;
var i_26955 = (0);
var obj_26956 = obj;
while(true){
if((i_26955 < len_26954)){
var mode_26957 = (path_26953[i_26955]);
var key_26958 = (path_26953[(i_26955 + (1))]);
var next_obj_26959 = oops.core.get_key_dynamically(obj_26956,key_26958,mode_26957);
var G__26960 = mode_26957;
switch (G__26960) {
case (0):
var G__26962 = (i_26955 + (2));
var G__26963 = next_obj_26959;
i_26955 = G__26962;
obj_26956 = G__26963;
continue;

break;
case (1):
if((!((next_obj_26959 == null)))){
var G__26964 = (i_26955 + (2));
var G__26965 = next_obj_26959;
i_26955 = G__26964;
obj_26956 = G__26965;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_26959 == null)))){
var G__26966 = (i_26955 + (2));
var G__26967 = next_obj_26959;
i_26955 = G__26966;
obj_26956 = G__26967;
continue;
} else {
var G__26968 = (i_26955 + (2));
var G__26969 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_26956,key_26958) : oops.core.punch_key_dynamically_BANG_.call(null,obj_26956,key_26958));
i_26955 = G__26968;
obj_26956 = G__26969;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26960)].join('')));

}
} else {
return obj_26956;
}
break;
}
});
oops.core.get_selector_call_info_dynamically = (function oops$core$get_selector_call_info_dynamically(obj,selector){
var path_26971 = (function (){var path_26970 = oops.core.build_path_dynamically(selector);

return path_26970;
})();
var len_26972 = path_26971.length;
if((len_26972 < (4))){
return [obj,(function (){var path_26974 = path_26971;
var len_26975 = path_26974.length;
var i_26976 = (0);
var obj_26977 = obj;
while(true){
if((i_26976 < len_26975)){
var mode_26978 = (path_26974[i_26976]);
var key_26979 = (path_26974[(i_26976 + (1))]);
var next_obj_26980 = oops.core.get_key_dynamically(obj_26977,key_26979,mode_26978);
var G__26995 = mode_26978;
switch (G__26995) {
case (0):
var G__26999 = (i_26976 + (2));
var G__27000 = next_obj_26980;
i_26976 = G__26999;
obj_26977 = G__27000;
continue;

break;
case (1):
if((!((next_obj_26980 == null)))){
var G__27001 = (i_26976 + (2));
var G__27002 = next_obj_26980;
i_26976 = G__27001;
obj_26977 = G__27002;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_26980 == null)))){
var G__27003 = (i_26976 + (2));
var G__27004 = next_obj_26980;
i_26976 = G__27003;
obj_26977 = G__27004;
continue;
} else {
var G__27005 = (i_26976 + (2));
var G__27006 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_26977,key_26979) : oops.core.punch_key_dynamically_BANG_.call(null,obj_26977,key_26979));
i_26976 = G__27005;
obj_26977 = G__27006;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26995)].join('')));

}
} else {
return obj_26977;
}
break;
}
})()];
} else {
var target_obj_26973 = (function (){var path_26981 = path_26971.slice((0),(len_26972 - (2)));
var len_26982 = path_26981.length;
var i_26983 = (0);
var obj_26984 = obj;
while(true){
if((i_26983 < len_26982)){
var mode_26985 = (path_26981[i_26983]);
var key_26986 = (path_26981[(i_26983 + (1))]);
var next_obj_26987 = oops.core.get_key_dynamically(obj_26984,key_26986,mode_26985);
var G__26996 = mode_26985;
switch (G__26996) {
case (0):
var G__27008 = (i_26983 + (2));
var G__27009 = next_obj_26987;
i_26983 = G__27008;
obj_26984 = G__27009;
continue;

break;
case (1):
if((!((next_obj_26987 == null)))){
var G__27010 = (i_26983 + (2));
var G__27011 = next_obj_26987;
i_26983 = G__27010;
obj_26984 = G__27011;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_26987 == null)))){
var G__27012 = (i_26983 + (2));
var G__27013 = next_obj_26987;
i_26983 = G__27012;
obj_26984 = G__27013;
continue;
} else {
var G__27014 = (i_26983 + (2));
var G__27015 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_26984,key_26986) : oops.core.punch_key_dynamically_BANG_.call(null,obj_26984,key_26986));
i_26983 = G__27014;
obj_26984 = G__27015;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26996)].join('')));

}
} else {
return obj_26984;
}
break;
}
})();
return [target_obj_26973,(function (){var path_26988 = [(path_26971[(len_26972 - (2))]),(path_26971[(len_26972 - (1))])];
var len_26989 = path_26988.length;
var i_26990 = (0);
var obj_26991 = target_obj_26973;
while(true){
if((i_26990 < len_26989)){
var mode_26992 = (path_26988[i_26990]);
var key_26993 = (path_26988[(i_26990 + (1))]);
var next_obj_26994 = oops.core.get_key_dynamically(obj_26991,key_26993,mode_26992);
var G__26997 = mode_26992;
switch (G__26997) {
case (0):
var G__27017 = (i_26990 + (2));
var G__27018 = next_obj_26994;
i_26990 = G__27017;
obj_26991 = G__27018;
continue;

break;
case (1):
if((!((next_obj_26994 == null)))){
var G__27019 = (i_26990 + (2));
var G__27020 = next_obj_26994;
i_26990 = G__27019;
obj_26991 = G__27020;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_26994 == null)))){
var G__27021 = (i_26990 + (2));
var G__27022 = next_obj_26994;
i_26990 = G__27021;
obj_26991 = G__27022;
continue;
} else {
var G__27023 = (i_26990 + (2));
var G__27024 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_26991,key_26993) : oops.core.punch_key_dynamically_BANG_.call(null,obj_26991,key_26993));
i_26990 = G__27023;
obj_26991 = G__27024;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26997)].join('')));

}
} else {
return obj_26991;
}
break;
}
})()];
}
});
oops.core.set_selector_dynamically = (function oops$core$set_selector_dynamically(obj,selector,val){
var path_27026 = (function (){var path_27025 = oops.core.build_path_dynamically(selector);

return path_27025;
})();
var len_27029 = path_27026.length;
var parent_obj_path_27030 = path_27026.slice((0),(len_27029 - (2)));
var key_27027 = (path_27026[(len_27029 - (1))]);
var mode_27028 = (path_27026[(len_27029 - (2))]);
var parent_obj_27031 = (function (){var path_27032 = parent_obj_path_27030;
var len_27033 = path_27032.length;
var i_27034 = (0);
var obj_27035 = obj;
while(true){
if((i_27034 < len_27033)){
var mode_27036 = (path_27032[i_27034]);
var key_27037 = (path_27032[(i_27034 + (1))]);
var next_obj_27038 = oops.core.get_key_dynamically(obj_27035,key_27037,mode_27036);
var G__27039 = mode_27036;
switch (G__27039) {
case (0):
var G__27041 = (i_27034 + (2));
var G__27042 = next_obj_27038;
i_27034 = G__27041;
obj_27035 = G__27042;
continue;

break;
case (1):
if((!((next_obj_27038 == null)))){
var G__27043 = (i_27034 + (2));
var G__27044 = next_obj_27038;
i_27034 = G__27043;
obj_27035 = G__27044;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_27038 == null)))){
var G__27045 = (i_27034 + (2));
var G__27046 = next_obj_27038;
i_27034 = G__27045;
obj_27035 = G__27046;
continue;
} else {
var G__27047 = (i_27034 + (2));
var G__27048 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_27035,key_27037) : oops.core.punch_key_dynamically_BANG_.call(null,obj_27035,key_27037));
i_27034 = G__27047;
obj_27035 = G__27048;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27039)].join('')));

}
} else {
return obj_27035;
}
break;
}
})();
return oops.core.set_key_dynamically(parent_obj_27031,key_27027,val,mode_27028);
});
