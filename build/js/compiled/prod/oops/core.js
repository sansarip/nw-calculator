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

var G__28885 = oops.config.get_error_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$throw,G__28885)){
throw oops.state.prepare_error_from_call_site(msg,oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$console,G__28885)){
var G__28887 = (console["error"]);
var G__28888 = msg;
var G__28889 = oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data);
var fexpr__28886 = oops.state.get_console_reporter();
return (fexpr__28886.cljs$core$IFn$_invoke$arity$3 ? fexpr__28886.cljs$core$IFn$_invoke$arity$3(G__28887,G__28888,G__28889) : fexpr__28886.call(null,G__28887,G__28888,G__28889));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__28885)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28885)].join('')));

}
}
}
}
});
oops.core.report_warning_dynamically = (function oops$core$report_warning_dynamically(msg,data){
var G__28890 = oops.config.get_warning_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$throw,G__28890)){
throw oops.state.prepare_error_from_call_site(msg,oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$console,G__28890)){
var G__28892 = (console["warn"]);
var G__28893 = msg;
var G__28894 = oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data);
var fexpr__28891 = oops.state.get_console_reporter();
return (fexpr__28891.cljs$core$IFn$_invoke$arity$3 ? fexpr__28891.cljs$core$IFn$_invoke$arity$3(G__28892,G__28893,G__28894) : fexpr__28891.call(null,G__28892,G__28893,G__28894));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__28890)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28890)].join('')));

}
}
}
});
oops.core.report_if_needed_dynamically = (function oops$core$report_if_needed_dynamically(var_args){
var args__4824__auto__ = [];
var len__4818__auto___28901 = arguments.length;
var i__4819__auto___28902 = (0);
while(true){
if((i__4819__auto___28902 < len__4818__auto___28901)){
args__4824__auto__.push((arguments[i__4819__auto___28902]));

var G__28903 = (i__4819__auto___28902 + (1));
i__4819__auto___28902 = G__28903;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic = (function (msg_id,p__28897){
var vec__28898 = p__28897;
var info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28898,(0),null);
return null;
}));

(oops.core.report_if_needed_dynamically.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(oops.core.report_if_needed_dynamically.cljs$lang$applyTo = (function (seq28895){
var G__28896 = cljs.core.first(seq28895);
var seq28895__$1 = cljs.core.next(seq28895);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28896,seq28895__$1);
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
var descriptor_28904 = temp__5755__auto__;
var temp__5755__auto____$1 = oops.helpers.determine_property_non_writable_reason(descriptor_28904);
if((temp__5755__auto____$1 == null)){
return true;
} else {
var reason_28905 = temp__5755__auto____$1;
return (oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$object_DASH_key_DASH_not_DASH_writable,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$key,key,cljs.core.cst$kw$frozen_QMARK_,oops.helpers.is_object_frozen_QMARK_(obj),cljs.core.cst$kw$reason,reason_28905,cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$object_DASH_key_DASH_not_DASH_writable,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$key,key,cljs.core.cst$kw$frozen_QMARK_,oops.helpers.is_object_frozen_QMARK_(obj),cljs.core.cst$kw$reason,reason_28905,cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));
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
var child_factory_28907 = oops.config.get_child_factory();
var child_factory_28907__$1 = (function (){var G__28908 = child_factory_28907;
var G__28908__$1 = (((G__28908 instanceof cljs.core.Keyword))?G__28908.fqn:null);
switch (G__28908__$1) {
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
return child_factory_28907;

}
})();

var child_obj_28906 = (child_factory_28907__$1.cljs$core$IFn$_invoke$arity$2 ? child_factory_28907__$1.cljs$core$IFn$_invoke$arity$2(obj,key) : child_factory_28907__$1.call(null,obj,key));
(obj[key] = child_obj_28906);

return child_obj_28906;
});
oops.core.build_path_dynamically = (function oops$core$build_path_dynamically(selector){
if(((typeof selector === 'string') || ((selector instanceof cljs.core.Keyword)))){
var selector_path_28912 = [];
oops.schema.prepare_simple_path_BANG_(selector,selector_path_28912);

return selector_path_28912;
} else {
var selector_path_28913 = [];
oops.schema.prepare_path_BANG_(selector,selector_path_28913);

return selector_path_28913;

}
});
oops.core.check_path_dynamically = (function oops$core$check_path_dynamically(path,op){
var temp__5757__auto__ = oops.schema.check_dynamic_path_BANG_(path,op);
if((temp__5757__auto__ == null)){
return null;
} else {
var issue_28914 = temp__5757__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(oops.core.report_if_needed_dynamically,issue_28914);
}
});
oops.core.get_key_dynamically = (function oops$core$get_key_dynamically(obj,key,mode){
return (obj[key]);
});
oops.core.set_key_dynamically = (function oops$core$set_key_dynamically(obj,key,val,mode){
return (obj[key] = val);
});
oops.core.get_selector_dynamically = (function oops$core$get_selector_dynamically(obj,selector){
var path_28916 = (function (){var path_28915 = oops.core.build_path_dynamically(selector);

return path_28915;
})();
var len_28917 = path_28916.length;
var i_28918 = (0);
var obj_28919 = obj;
while(true){
if((i_28918 < len_28917)){
var mode_28920 = (path_28916[i_28918]);
var key_28921 = (path_28916[(i_28918 + (1))]);
var next_obj_28922 = oops.core.get_key_dynamically(obj_28919,key_28921,mode_28920);
var G__28923 = mode_28920;
switch (G__28923) {
case (0):
var G__28925 = (i_28918 + (2));
var G__28926 = next_obj_28922;
i_28918 = G__28925;
obj_28919 = G__28926;
continue;

break;
case (1):
if((!((next_obj_28922 == null)))){
var G__28927 = (i_28918 + (2));
var G__28928 = next_obj_28922;
i_28918 = G__28927;
obj_28919 = G__28928;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_28922 == null)))){
var G__28929 = (i_28918 + (2));
var G__28930 = next_obj_28922;
i_28918 = G__28929;
obj_28919 = G__28930;
continue;
} else {
var G__28931 = (i_28918 + (2));
var G__28932 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_28919,key_28921) : oops.core.punch_key_dynamically_BANG_.call(null,obj_28919,key_28921));
i_28918 = G__28931;
obj_28919 = G__28932;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28923)].join('')));

}
} else {
return obj_28919;
}
break;
}
});
oops.core.get_selector_call_info_dynamically = (function oops$core$get_selector_call_info_dynamically(obj,selector){
var path_28934 = (function (){var path_28933 = oops.core.build_path_dynamically(selector);

return path_28933;
})();
var len_28935 = path_28934.length;
if((len_28935 < (4))){
return [obj,(function (){var path_28937 = path_28934;
var len_28938 = path_28937.length;
var i_28939 = (0);
var obj_28940 = obj;
while(true){
if((i_28939 < len_28938)){
var mode_28941 = (path_28937[i_28939]);
var key_28942 = (path_28937[(i_28939 + (1))]);
var next_obj_28943 = oops.core.get_key_dynamically(obj_28940,key_28942,mode_28941);
var G__28958 = mode_28941;
switch (G__28958) {
case (0):
var G__28962 = (i_28939 + (2));
var G__28963 = next_obj_28943;
i_28939 = G__28962;
obj_28940 = G__28963;
continue;

break;
case (1):
if((!((next_obj_28943 == null)))){
var G__28964 = (i_28939 + (2));
var G__28965 = next_obj_28943;
i_28939 = G__28964;
obj_28940 = G__28965;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_28943 == null)))){
var G__28966 = (i_28939 + (2));
var G__28967 = next_obj_28943;
i_28939 = G__28966;
obj_28940 = G__28967;
continue;
} else {
var G__28968 = (i_28939 + (2));
var G__28969 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_28940,key_28942) : oops.core.punch_key_dynamically_BANG_.call(null,obj_28940,key_28942));
i_28939 = G__28968;
obj_28940 = G__28969;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28958)].join('')));

}
} else {
return obj_28940;
}
break;
}
})()];
} else {
var target_obj_28936 = (function (){var path_28944 = path_28934.slice((0),(len_28935 - (2)));
var len_28945 = path_28944.length;
var i_28946 = (0);
var obj_28947 = obj;
while(true){
if((i_28946 < len_28945)){
var mode_28948 = (path_28944[i_28946]);
var key_28949 = (path_28944[(i_28946 + (1))]);
var next_obj_28950 = oops.core.get_key_dynamically(obj_28947,key_28949,mode_28948);
var G__28959 = mode_28948;
switch (G__28959) {
case (0):
var G__28971 = (i_28946 + (2));
var G__28972 = next_obj_28950;
i_28946 = G__28971;
obj_28947 = G__28972;
continue;

break;
case (1):
if((!((next_obj_28950 == null)))){
var G__28973 = (i_28946 + (2));
var G__28974 = next_obj_28950;
i_28946 = G__28973;
obj_28947 = G__28974;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_28950 == null)))){
var G__28975 = (i_28946 + (2));
var G__28976 = next_obj_28950;
i_28946 = G__28975;
obj_28947 = G__28976;
continue;
} else {
var G__28977 = (i_28946 + (2));
var G__28978 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_28947,key_28949) : oops.core.punch_key_dynamically_BANG_.call(null,obj_28947,key_28949));
i_28946 = G__28977;
obj_28947 = G__28978;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28959)].join('')));

}
} else {
return obj_28947;
}
break;
}
})();
return [target_obj_28936,(function (){var path_28951 = [(path_28934[(len_28935 - (2))]),(path_28934[(len_28935 - (1))])];
var len_28952 = path_28951.length;
var i_28953 = (0);
var obj_28954 = target_obj_28936;
while(true){
if((i_28953 < len_28952)){
var mode_28955 = (path_28951[i_28953]);
var key_28956 = (path_28951[(i_28953 + (1))]);
var next_obj_28957 = oops.core.get_key_dynamically(obj_28954,key_28956,mode_28955);
var G__28960 = mode_28955;
switch (G__28960) {
case (0):
var G__28980 = (i_28953 + (2));
var G__28981 = next_obj_28957;
i_28953 = G__28980;
obj_28954 = G__28981;
continue;

break;
case (1):
if((!((next_obj_28957 == null)))){
var G__28982 = (i_28953 + (2));
var G__28983 = next_obj_28957;
i_28953 = G__28982;
obj_28954 = G__28983;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_28957 == null)))){
var G__28984 = (i_28953 + (2));
var G__28985 = next_obj_28957;
i_28953 = G__28984;
obj_28954 = G__28985;
continue;
} else {
var G__28986 = (i_28953 + (2));
var G__28987 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_28954,key_28956) : oops.core.punch_key_dynamically_BANG_.call(null,obj_28954,key_28956));
i_28953 = G__28986;
obj_28954 = G__28987;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28960)].join('')));

}
} else {
return obj_28954;
}
break;
}
})()];
}
});
oops.core.set_selector_dynamically = (function oops$core$set_selector_dynamically(obj,selector,val){
var path_28989 = (function (){var path_28988 = oops.core.build_path_dynamically(selector);

return path_28988;
})();
var len_28992 = path_28989.length;
var parent_obj_path_28993 = path_28989.slice((0),(len_28992 - (2)));
var key_28990 = (path_28989[(len_28992 - (1))]);
var mode_28991 = (path_28989[(len_28992 - (2))]);
var parent_obj_28994 = (function (){var path_28995 = parent_obj_path_28993;
var len_28996 = path_28995.length;
var i_28997 = (0);
var obj_28998 = obj;
while(true){
if((i_28997 < len_28996)){
var mode_28999 = (path_28995[i_28997]);
var key_29000 = (path_28995[(i_28997 + (1))]);
var next_obj_29001 = oops.core.get_key_dynamically(obj_28998,key_29000,mode_28999);
var G__29002 = mode_28999;
switch (G__29002) {
case (0):
var G__29004 = (i_28997 + (2));
var G__29005 = next_obj_29001;
i_28997 = G__29004;
obj_28998 = G__29005;
continue;

break;
case (1):
if((!((next_obj_29001 == null)))){
var G__29006 = (i_28997 + (2));
var G__29007 = next_obj_29001;
i_28997 = G__29006;
obj_28998 = G__29007;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_29001 == null)))){
var G__29008 = (i_28997 + (2));
var G__29009 = next_obj_29001;
i_28997 = G__29008;
obj_28998 = G__29009;
continue;
} else {
var G__29010 = (i_28997 + (2));
var G__29011 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_28998,key_29000) : oops.core.punch_key_dynamically_BANG_.call(null,obj_28998,key_29000));
i_28997 = G__29010;
obj_28998 = G__29011;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29002)].join('')));

}
} else {
return obj_28998;
}
break;
}
})();
return oops.core.set_key_dynamically(parent_obj_28994,key_28990,val,mode_28991);
});
