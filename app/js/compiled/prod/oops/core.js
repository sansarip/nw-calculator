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

var G__26894 = oops.config.get_error_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$throw,G__26894)){
throw oops.state.prepare_error_from_call_site(msg,oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$console,G__26894)){
var G__26896 = (console["error"]);
var G__26897 = msg;
var G__26898 = oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data);
var fexpr__26895 = oops.state.get_console_reporter();
return (fexpr__26895.cljs$core$IFn$_invoke$arity$3 ? fexpr__26895.cljs$core$IFn$_invoke$arity$3(G__26896,G__26897,G__26898) : fexpr__26895.call(null,G__26896,G__26897,G__26898));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__26894)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26894)].join('')));

}
}
}
}
});
oops.core.report_warning_dynamically = (function oops$core$report_warning_dynamically(msg,data){
var G__26899 = oops.config.get_warning_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$throw,G__26899)){
throw oops.state.prepare_error_from_call_site(msg,oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$console,G__26899)){
var G__26901 = (console["warn"]);
var G__26902 = msg;
var G__26903 = oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data);
var fexpr__26900 = oops.state.get_console_reporter();
return (fexpr__26900.cljs$core$IFn$_invoke$arity$3 ? fexpr__26900.cljs$core$IFn$_invoke$arity$3(G__26901,G__26902,G__26903) : fexpr__26900.call(null,G__26901,G__26902,G__26903));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__26899)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26899)].join('')));

}
}
}
});
oops.core.report_if_needed_dynamically = (function oops$core$report_if_needed_dynamically(var_args){
var args__4824__auto__ = [];
var len__4818__auto___26910 = arguments.length;
var i__4819__auto___26911 = (0);
while(true){
if((i__4819__auto___26911 < len__4818__auto___26910)){
args__4824__auto__.push((arguments[i__4819__auto___26911]));

var G__26912 = (i__4819__auto___26911 + (1));
i__4819__auto___26911 = G__26912;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic = (function (msg_id,p__26906){
var vec__26907 = p__26906;
var info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26907,(0),null);
return null;
}));

(oops.core.report_if_needed_dynamically.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(oops.core.report_if_needed_dynamically.cljs$lang$applyTo = (function (seq26904){
var G__26905 = cljs.core.first(seq26904);
var seq26904__$1 = cljs.core.next(seq26904);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26905,seq26904__$1);
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
var descriptor_26913 = temp__5737__auto__;
var temp__5737__auto____$1 = oops.helpers.determine_property_non_writable_reason(descriptor_26913);
if((temp__5737__auto____$1 == null)){
return true;
} else {
var reason_26914 = temp__5737__auto____$1;
return (oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$object_DASH_key_DASH_not_DASH_writable,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$key,key,cljs.core.cst$kw$frozen_QMARK_,oops.helpers.is_object_frozen_QMARK_(obj),cljs.core.cst$kw$reason,reason_26914,cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$object_DASH_key_DASH_not_DASH_writable,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$key,key,cljs.core.cst$kw$frozen_QMARK_,oops.helpers.is_object_frozen_QMARK_(obj),cljs.core.cst$kw$reason,reason_26914,cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));
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
var child_factory_26916 = oops.config.get_child_factory();
var child_factory_26916__$1 = (function (){var G__26917 = child_factory_26916;
var G__26917__$1 = (((G__26917 instanceof cljs.core.Keyword))?G__26917.fqn:null);
switch (G__26917__$1) {
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
return child_factory_26916;

}
})();

var child_obj_26915 = (child_factory_26916__$1.cljs$core$IFn$_invoke$arity$2 ? child_factory_26916__$1.cljs$core$IFn$_invoke$arity$2(obj,key) : child_factory_26916__$1.call(null,obj,key));
(obj[key] = child_obj_26915);

return child_obj_26915;
});
oops.core.build_path_dynamically = (function oops$core$build_path_dynamically(selector){
if(((typeof selector === 'string') || ((selector instanceof cljs.core.Keyword)))){
var selector_path_26921 = [];
oops.schema.prepare_simple_path_BANG_(selector,selector_path_26921);

return selector_path_26921;
} else {
var selector_path_26922 = [];
oops.schema.prepare_path_BANG_(selector,selector_path_26922);

return selector_path_26922;

}
});
oops.core.check_path_dynamically = (function oops$core$check_path_dynamically(path,op){
var temp__5739__auto__ = oops.schema.check_dynamic_path_BANG_(path,op);
if((temp__5739__auto__ == null)){
return null;
} else {
var issue_26923 = temp__5739__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(oops.core.report_if_needed_dynamically,issue_26923);
}
});
oops.core.get_key_dynamically = (function oops$core$get_key_dynamically(obj,key,mode){
return (obj[key]);
});
oops.core.set_key_dynamically = (function oops$core$set_key_dynamically(obj,key,val,mode){
return (obj[key] = val);
});
oops.core.get_selector_dynamically = (function oops$core$get_selector_dynamically(obj,selector){
var path_26925 = (function (){var path_26924 = oops.core.build_path_dynamically(selector);

return path_26924;
})();
var len_26926 = path_26925.length;
var i_26927 = (0);
var obj_26928 = obj;
while(true){
if((i_26927 < len_26926)){
var mode_26929 = (path_26925[i_26927]);
var key_26930 = (path_26925[(i_26927 + (1))]);
var next_obj_26931 = oops.core.get_key_dynamically(obj_26928,key_26930,mode_26929);
var G__26932 = mode_26929;
switch (G__26932) {
case (0):
var G__26934 = (i_26927 + (2));
var G__26935 = next_obj_26931;
i_26927 = G__26934;
obj_26928 = G__26935;
continue;

break;
case (1):
if((!((next_obj_26931 == null)))){
var G__26936 = (i_26927 + (2));
var G__26937 = next_obj_26931;
i_26927 = G__26936;
obj_26928 = G__26937;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_26931 == null)))){
var G__26938 = (i_26927 + (2));
var G__26939 = next_obj_26931;
i_26927 = G__26938;
obj_26928 = G__26939;
continue;
} else {
var G__26940 = (i_26927 + (2));
var G__26941 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_26928,key_26930) : oops.core.punch_key_dynamically_BANG_.call(null,obj_26928,key_26930));
i_26927 = G__26940;
obj_26928 = G__26941;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26932)].join('')));

}
} else {
return obj_26928;
}
break;
}
});
oops.core.get_selector_call_info_dynamically = (function oops$core$get_selector_call_info_dynamically(obj,selector){
var path_26943 = (function (){var path_26942 = oops.core.build_path_dynamically(selector);

return path_26942;
})();
var len_26944 = path_26943.length;
if((len_26944 < (4))){
return [obj,(function (){var path_26946 = path_26943;
var len_26947 = path_26946.length;
var i_26948 = (0);
var obj_26949 = obj;
while(true){
if((i_26948 < len_26947)){
var mode_26950 = (path_26946[i_26948]);
var key_26951 = (path_26946[(i_26948 + (1))]);
var next_obj_26952 = oops.core.get_key_dynamically(obj_26949,key_26951,mode_26950);
var G__26967 = mode_26950;
switch (G__26967) {
case (0):
var G__26971 = (i_26948 + (2));
var G__26972 = next_obj_26952;
i_26948 = G__26971;
obj_26949 = G__26972;
continue;

break;
case (1):
if((!((next_obj_26952 == null)))){
var G__26973 = (i_26948 + (2));
var G__26974 = next_obj_26952;
i_26948 = G__26973;
obj_26949 = G__26974;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_26952 == null)))){
var G__26975 = (i_26948 + (2));
var G__26976 = next_obj_26952;
i_26948 = G__26975;
obj_26949 = G__26976;
continue;
} else {
var G__26977 = (i_26948 + (2));
var G__26978 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_26949,key_26951) : oops.core.punch_key_dynamically_BANG_.call(null,obj_26949,key_26951));
i_26948 = G__26977;
obj_26949 = G__26978;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26967)].join('')));

}
} else {
return obj_26949;
}
break;
}
})()];
} else {
var target_obj_26945 = (function (){var path_26953 = path_26943.slice((0),(len_26944 - (2)));
var len_26954 = path_26953.length;
var i_26955 = (0);
var obj_26956 = obj;
while(true){
if((i_26955 < len_26954)){
var mode_26957 = (path_26953[i_26955]);
var key_26958 = (path_26953[(i_26955 + (1))]);
var next_obj_26959 = oops.core.get_key_dynamically(obj_26956,key_26958,mode_26957);
var G__26968 = mode_26957;
switch (G__26968) {
case (0):
var G__26980 = (i_26955 + (2));
var G__26981 = next_obj_26959;
i_26955 = G__26980;
obj_26956 = G__26981;
continue;

break;
case (1):
if((!((next_obj_26959 == null)))){
var G__26982 = (i_26955 + (2));
var G__26983 = next_obj_26959;
i_26955 = G__26982;
obj_26956 = G__26983;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_26959 == null)))){
var G__26984 = (i_26955 + (2));
var G__26985 = next_obj_26959;
i_26955 = G__26984;
obj_26956 = G__26985;
continue;
} else {
var G__26986 = (i_26955 + (2));
var G__26987 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_26956,key_26958) : oops.core.punch_key_dynamically_BANG_.call(null,obj_26956,key_26958));
i_26955 = G__26986;
obj_26956 = G__26987;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26968)].join('')));

}
} else {
return obj_26956;
}
break;
}
})();
return [target_obj_26945,(function (){var path_26960 = [(path_26943[(len_26944 - (2))]),(path_26943[(len_26944 - (1))])];
var len_26961 = path_26960.length;
var i_26962 = (0);
var obj_26963 = target_obj_26945;
while(true){
if((i_26962 < len_26961)){
var mode_26964 = (path_26960[i_26962]);
var key_26965 = (path_26960[(i_26962 + (1))]);
var next_obj_26966 = oops.core.get_key_dynamically(obj_26963,key_26965,mode_26964);
var G__26969 = mode_26964;
switch (G__26969) {
case (0):
var G__26989 = (i_26962 + (2));
var G__26990 = next_obj_26966;
i_26962 = G__26989;
obj_26963 = G__26990;
continue;

break;
case (1):
if((!((next_obj_26966 == null)))){
var G__26991 = (i_26962 + (2));
var G__26992 = next_obj_26966;
i_26962 = G__26991;
obj_26963 = G__26992;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_26966 == null)))){
var G__26993 = (i_26962 + (2));
var G__26994 = next_obj_26966;
i_26962 = G__26993;
obj_26963 = G__26994;
continue;
} else {
var G__26995 = (i_26962 + (2));
var G__26996 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_26963,key_26965) : oops.core.punch_key_dynamically_BANG_.call(null,obj_26963,key_26965));
i_26962 = G__26995;
obj_26963 = G__26996;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26969)].join('')));

}
} else {
return obj_26963;
}
break;
}
})()];
}
});
oops.core.set_selector_dynamically = (function oops$core$set_selector_dynamically(obj,selector,val){
var path_26998 = (function (){var path_26997 = oops.core.build_path_dynamically(selector);

return path_26997;
})();
var len_27001 = path_26998.length;
var parent_obj_path_27002 = path_26998.slice((0),(len_27001 - (2)));
var key_26999 = (path_26998[(len_27001 - (1))]);
var mode_27000 = (path_26998[(len_27001 - (2))]);
var parent_obj_27003 = (function (){var path_27004 = parent_obj_path_27002;
var len_27005 = path_27004.length;
var i_27006 = (0);
var obj_27007 = obj;
while(true){
if((i_27006 < len_27005)){
var mode_27008 = (path_27004[i_27006]);
var key_27009 = (path_27004[(i_27006 + (1))]);
var next_obj_27010 = oops.core.get_key_dynamically(obj_27007,key_27009,mode_27008);
var G__27011 = mode_27008;
switch (G__27011) {
case (0):
var G__27013 = (i_27006 + (2));
var G__27014 = next_obj_27010;
i_27006 = G__27013;
obj_27007 = G__27014;
continue;

break;
case (1):
if((!((next_obj_27010 == null)))){
var G__27015 = (i_27006 + (2));
var G__27016 = next_obj_27010;
i_27006 = G__27015;
obj_27007 = G__27016;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_27010 == null)))){
var G__27017 = (i_27006 + (2));
var G__27018 = next_obj_27010;
i_27006 = G__27017;
obj_27007 = G__27018;
continue;
} else {
var G__27019 = (i_27006 + (2));
var G__27020 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_27007,key_27009) : oops.core.punch_key_dynamically_BANG_.call(null,obj_27007,key_27009));
i_27006 = G__27019;
obj_27007 = G__27020;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27011)].join('')));

}
} else {
return obj_27007;
}
break;
}
})();
return oops.core.set_key_dynamically(parent_obj_27003,key_26999,val,mode_27000);
});
