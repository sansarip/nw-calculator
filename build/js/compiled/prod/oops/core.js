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

var G__28886 = oops.config.get_error_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$throw,G__28886)){
throw oops.state.prepare_error_from_call_site(msg,oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$console,G__28886)){
var G__28888 = (console["error"]);
var G__28889 = msg;
var G__28890 = oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data);
var fexpr__28887 = oops.state.get_console_reporter();
return (fexpr__28887.cljs$core$IFn$_invoke$arity$3 ? fexpr__28887.cljs$core$IFn$_invoke$arity$3(G__28888,G__28889,G__28890) : fexpr__28887.call(null,G__28888,G__28889,G__28890));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__28886)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28886)].join('')));

}
}
}
}
});
oops.core.report_warning_dynamically = (function oops$core$report_warning_dynamically(msg,data){
var G__28891 = oops.config.get_warning_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$throw,G__28891)){
throw oops.state.prepare_error_from_call_site(msg,oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$console,G__28891)){
var G__28893 = (console["warn"]);
var G__28894 = msg;
var G__28895 = oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data);
var fexpr__28892 = oops.state.get_console_reporter();
return (fexpr__28892.cljs$core$IFn$_invoke$arity$3 ? fexpr__28892.cljs$core$IFn$_invoke$arity$3(G__28893,G__28894,G__28895) : fexpr__28892.call(null,G__28893,G__28894,G__28895));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__28891)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28891)].join('')));

}
}
}
});
oops.core.report_if_needed_dynamically = (function oops$core$report_if_needed_dynamically(var_args){
var args__4824__auto__ = [];
var len__4818__auto___28902 = arguments.length;
var i__4819__auto___28903 = (0);
while(true){
if((i__4819__auto___28903 < len__4818__auto___28902)){
args__4824__auto__.push((arguments[i__4819__auto___28903]));

var G__28904 = (i__4819__auto___28903 + (1));
i__4819__auto___28903 = G__28904;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic = (function (msg_id,p__28898){
var vec__28899 = p__28898;
var info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28899,(0),null);
return null;
}));

(oops.core.report_if_needed_dynamically.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(oops.core.report_if_needed_dynamically.cljs$lang$applyTo = (function (seq28896){
var G__28897 = cljs.core.first(seq28896);
var seq28896__$1 = cljs.core.next(seq28896);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28897,seq28896__$1);
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
var descriptor_28905 = temp__5755__auto__;
var temp__5755__auto____$1 = oops.helpers.determine_property_non_writable_reason(descriptor_28905);
if((temp__5755__auto____$1 == null)){
return true;
} else {
var reason_28906 = temp__5755__auto____$1;
return (oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$object_DASH_key_DASH_not_DASH_writable,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$key,key,cljs.core.cst$kw$frozen_QMARK_,oops.helpers.is_object_frozen_QMARK_(obj),cljs.core.cst$kw$reason,reason_28906,cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$object_DASH_key_DASH_not_DASH_writable,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$key,key,cljs.core.cst$kw$frozen_QMARK_,oops.helpers.is_object_frozen_QMARK_(obj),cljs.core.cst$kw$reason,reason_28906,cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));
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
var child_factory_28908 = oops.config.get_child_factory();
var child_factory_28908__$1 = (function (){var G__28909 = child_factory_28908;
var G__28909__$1 = (((G__28909 instanceof cljs.core.Keyword))?G__28909.fqn:null);
switch (G__28909__$1) {
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
return child_factory_28908;

}
})();

var child_obj_28907 = (child_factory_28908__$1.cljs$core$IFn$_invoke$arity$2 ? child_factory_28908__$1.cljs$core$IFn$_invoke$arity$2(obj,key) : child_factory_28908__$1.call(null,obj,key));
(obj[key] = child_obj_28907);

return child_obj_28907;
});
oops.core.build_path_dynamically = (function oops$core$build_path_dynamically(selector){
if(((typeof selector === 'string') || ((selector instanceof cljs.core.Keyword)))){
var selector_path_28913 = [];
oops.schema.prepare_simple_path_BANG_(selector,selector_path_28913);

return selector_path_28913;
} else {
var selector_path_28914 = [];
oops.schema.prepare_path_BANG_(selector,selector_path_28914);

return selector_path_28914;

}
});
oops.core.check_path_dynamically = (function oops$core$check_path_dynamically(path,op){
var temp__5757__auto__ = oops.schema.check_dynamic_path_BANG_(path,op);
if((temp__5757__auto__ == null)){
return null;
} else {
var issue_28915 = temp__5757__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(oops.core.report_if_needed_dynamically,issue_28915);
}
});
oops.core.get_key_dynamically = (function oops$core$get_key_dynamically(obj,key,mode){
return (obj[key]);
});
oops.core.set_key_dynamically = (function oops$core$set_key_dynamically(obj,key,val,mode){
return (obj[key] = val);
});
oops.core.get_selector_dynamically = (function oops$core$get_selector_dynamically(obj,selector){
var path_28917 = (function (){var path_28916 = oops.core.build_path_dynamically(selector);

return path_28916;
})();
var len_28918 = path_28917.length;
var i_28919 = (0);
var obj_28920 = obj;
while(true){
if((i_28919 < len_28918)){
var mode_28921 = (path_28917[i_28919]);
var key_28922 = (path_28917[(i_28919 + (1))]);
var next_obj_28923 = oops.core.get_key_dynamically(obj_28920,key_28922,mode_28921);
var G__28924 = mode_28921;
switch (G__28924) {
case (0):
var G__28926 = (i_28919 + (2));
var G__28927 = next_obj_28923;
i_28919 = G__28926;
obj_28920 = G__28927;
continue;

break;
case (1):
if((!((next_obj_28923 == null)))){
var G__28928 = (i_28919 + (2));
var G__28929 = next_obj_28923;
i_28919 = G__28928;
obj_28920 = G__28929;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_28923 == null)))){
var G__28930 = (i_28919 + (2));
var G__28931 = next_obj_28923;
i_28919 = G__28930;
obj_28920 = G__28931;
continue;
} else {
var G__28932 = (i_28919 + (2));
var G__28933 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_28920,key_28922) : oops.core.punch_key_dynamically_BANG_.call(null,obj_28920,key_28922));
i_28919 = G__28932;
obj_28920 = G__28933;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28924)].join('')));

}
} else {
return obj_28920;
}
break;
}
});
oops.core.get_selector_call_info_dynamically = (function oops$core$get_selector_call_info_dynamically(obj,selector){
var path_28935 = (function (){var path_28934 = oops.core.build_path_dynamically(selector);

return path_28934;
})();
var len_28936 = path_28935.length;
if((len_28936 < (4))){
return [obj,(function (){var path_28938 = path_28935;
var len_28939 = path_28938.length;
var i_28940 = (0);
var obj_28941 = obj;
while(true){
if((i_28940 < len_28939)){
var mode_28942 = (path_28938[i_28940]);
var key_28943 = (path_28938[(i_28940 + (1))]);
var next_obj_28944 = oops.core.get_key_dynamically(obj_28941,key_28943,mode_28942);
var G__28959 = mode_28942;
switch (G__28959) {
case (0):
var G__28963 = (i_28940 + (2));
var G__28964 = next_obj_28944;
i_28940 = G__28963;
obj_28941 = G__28964;
continue;

break;
case (1):
if((!((next_obj_28944 == null)))){
var G__28965 = (i_28940 + (2));
var G__28966 = next_obj_28944;
i_28940 = G__28965;
obj_28941 = G__28966;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_28944 == null)))){
var G__28967 = (i_28940 + (2));
var G__28968 = next_obj_28944;
i_28940 = G__28967;
obj_28941 = G__28968;
continue;
} else {
var G__28969 = (i_28940 + (2));
var G__28970 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_28941,key_28943) : oops.core.punch_key_dynamically_BANG_.call(null,obj_28941,key_28943));
i_28940 = G__28969;
obj_28941 = G__28970;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28959)].join('')));

}
} else {
return obj_28941;
}
break;
}
})()];
} else {
var target_obj_28937 = (function (){var path_28945 = path_28935.slice((0),(len_28936 - (2)));
var len_28946 = path_28945.length;
var i_28947 = (0);
var obj_28948 = obj;
while(true){
if((i_28947 < len_28946)){
var mode_28949 = (path_28945[i_28947]);
var key_28950 = (path_28945[(i_28947 + (1))]);
var next_obj_28951 = oops.core.get_key_dynamically(obj_28948,key_28950,mode_28949);
var G__28960 = mode_28949;
switch (G__28960) {
case (0):
var G__28972 = (i_28947 + (2));
var G__28973 = next_obj_28951;
i_28947 = G__28972;
obj_28948 = G__28973;
continue;

break;
case (1):
if((!((next_obj_28951 == null)))){
var G__28974 = (i_28947 + (2));
var G__28975 = next_obj_28951;
i_28947 = G__28974;
obj_28948 = G__28975;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_28951 == null)))){
var G__28976 = (i_28947 + (2));
var G__28977 = next_obj_28951;
i_28947 = G__28976;
obj_28948 = G__28977;
continue;
} else {
var G__28978 = (i_28947 + (2));
var G__28979 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_28948,key_28950) : oops.core.punch_key_dynamically_BANG_.call(null,obj_28948,key_28950));
i_28947 = G__28978;
obj_28948 = G__28979;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28960)].join('')));

}
} else {
return obj_28948;
}
break;
}
})();
return [target_obj_28937,(function (){var path_28952 = [(path_28935[(len_28936 - (2))]),(path_28935[(len_28936 - (1))])];
var len_28953 = path_28952.length;
var i_28954 = (0);
var obj_28955 = target_obj_28937;
while(true){
if((i_28954 < len_28953)){
var mode_28956 = (path_28952[i_28954]);
var key_28957 = (path_28952[(i_28954 + (1))]);
var next_obj_28958 = oops.core.get_key_dynamically(obj_28955,key_28957,mode_28956);
var G__28961 = mode_28956;
switch (G__28961) {
case (0):
var G__28981 = (i_28954 + (2));
var G__28982 = next_obj_28958;
i_28954 = G__28981;
obj_28955 = G__28982;
continue;

break;
case (1):
if((!((next_obj_28958 == null)))){
var G__28983 = (i_28954 + (2));
var G__28984 = next_obj_28958;
i_28954 = G__28983;
obj_28955 = G__28984;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_28958 == null)))){
var G__28985 = (i_28954 + (2));
var G__28986 = next_obj_28958;
i_28954 = G__28985;
obj_28955 = G__28986;
continue;
} else {
var G__28987 = (i_28954 + (2));
var G__28988 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_28955,key_28957) : oops.core.punch_key_dynamically_BANG_.call(null,obj_28955,key_28957));
i_28954 = G__28987;
obj_28955 = G__28988;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28961)].join('')));

}
} else {
return obj_28955;
}
break;
}
})()];
}
});
oops.core.set_selector_dynamically = (function oops$core$set_selector_dynamically(obj,selector,val){
var path_28990 = (function (){var path_28989 = oops.core.build_path_dynamically(selector);

return path_28989;
})();
var len_28993 = path_28990.length;
var parent_obj_path_28994 = path_28990.slice((0),(len_28993 - (2)));
var key_28991 = (path_28990[(len_28993 - (1))]);
var mode_28992 = (path_28990[(len_28993 - (2))]);
var parent_obj_28995 = (function (){var path_28996 = parent_obj_path_28994;
var len_28997 = path_28996.length;
var i_28998 = (0);
var obj_28999 = obj;
while(true){
if((i_28998 < len_28997)){
var mode_29000 = (path_28996[i_28998]);
var key_29001 = (path_28996[(i_28998 + (1))]);
var next_obj_29002 = oops.core.get_key_dynamically(obj_28999,key_29001,mode_29000);
var G__29003 = mode_29000;
switch (G__29003) {
case (0):
var G__29005 = (i_28998 + (2));
var G__29006 = next_obj_29002;
i_28998 = G__29005;
obj_28999 = G__29006;
continue;

break;
case (1):
if((!((next_obj_29002 == null)))){
var G__29007 = (i_28998 + (2));
var G__29008 = next_obj_29002;
i_28998 = G__29007;
obj_28999 = G__29008;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_29002 == null)))){
var G__29009 = (i_28998 + (2));
var G__29010 = next_obj_29002;
i_28998 = G__29009;
obj_28999 = G__29010;
continue;
} else {
var G__29011 = (i_28998 + (2));
var G__29012 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_28999,key_29001) : oops.core.punch_key_dynamically_BANG_.call(null,obj_28999,key_29001));
i_28998 = G__29011;
obj_28999 = G__29012;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29003)].join('')));

}
} else {
return obj_28999;
}
break;
}
})();
return oops.core.set_key_dynamically(parent_obj_28995,key_28991,val,mode_28992);
});
