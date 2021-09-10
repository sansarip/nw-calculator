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

var G__26991 = oops.config.get_error_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$throw,G__26991)){
throw oops.state.prepare_error_from_call_site(msg,oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$console,G__26991)){
var G__26993 = (console["error"]);
var G__26994 = msg;
var G__26995 = oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data);
var fexpr__26992 = oops.state.get_console_reporter();
return (fexpr__26992.cljs$core$IFn$_invoke$arity$3 ? fexpr__26992.cljs$core$IFn$_invoke$arity$3(G__26993,G__26994,G__26995) : fexpr__26992.call(null,G__26993,G__26994,G__26995));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__26991)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26991)].join('')));

}
}
}
}
});
oops.core.report_warning_dynamically = (function oops$core$report_warning_dynamically(msg,data){
var G__26996 = oops.config.get_warning_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$throw,G__26996)){
throw oops.state.prepare_error_from_call_site(msg,oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$console,G__26996)){
var G__26998 = (console["warn"]);
var G__26999 = msg;
var G__27000 = oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data);
var fexpr__26997 = oops.state.get_console_reporter();
return (fexpr__26997.cljs$core$IFn$_invoke$arity$3 ? fexpr__26997.cljs$core$IFn$_invoke$arity$3(G__26998,G__26999,G__27000) : fexpr__26997.call(null,G__26998,G__26999,G__27000));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__26996)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26996)].join('')));

}
}
}
});
oops.core.report_if_needed_dynamically = (function oops$core$report_if_needed_dynamically(var_args){
var args__4824__auto__ = [];
var len__4818__auto___27007 = arguments.length;
var i__4819__auto___27008 = (0);
while(true){
if((i__4819__auto___27008 < len__4818__auto___27007)){
args__4824__auto__.push((arguments[i__4819__auto___27008]));

var G__27009 = (i__4819__auto___27008 + (1));
i__4819__auto___27008 = G__27009;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic = (function (msg_id,p__27003){
var vec__27004 = p__27003;
var info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27004,(0),null);
return null;
}));

(oops.core.report_if_needed_dynamically.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(oops.core.report_if_needed_dynamically.cljs$lang$applyTo = (function (seq27001){
var G__27002 = cljs.core.first(seq27001);
var seq27001__$1 = cljs.core.next(seq27001);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27002,seq27001__$1);
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
var descriptor_27010 = temp__5755__auto__;
var temp__5755__auto____$1 = oops.helpers.determine_property_non_writable_reason(descriptor_27010);
if((temp__5755__auto____$1 == null)){
return true;
} else {
var reason_27011 = temp__5755__auto____$1;
return (oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$object_DASH_key_DASH_not_DASH_writable,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$key,key,cljs.core.cst$kw$frozen_QMARK_,oops.helpers.is_object_frozen_QMARK_(obj),cljs.core.cst$kw$reason,reason_27011,cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$object_DASH_key_DASH_not_DASH_writable,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$key,key,cljs.core.cst$kw$frozen_QMARK_,oops.helpers.is_object_frozen_QMARK_(obj),cljs.core.cst$kw$reason,reason_27011,cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));
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
var child_factory_27013 = oops.config.get_child_factory();
var child_factory_27013__$1 = (function (){var G__27014 = child_factory_27013;
var G__27014__$1 = (((G__27014 instanceof cljs.core.Keyword))?G__27014.fqn:null);
switch (G__27014__$1) {
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
return child_factory_27013;

}
})();

var child_obj_27012 = (child_factory_27013__$1.cljs$core$IFn$_invoke$arity$2 ? child_factory_27013__$1.cljs$core$IFn$_invoke$arity$2(obj,key) : child_factory_27013__$1.call(null,obj,key));
(obj[key] = child_obj_27012);

return child_obj_27012;
});
oops.core.build_path_dynamically = (function oops$core$build_path_dynamically(selector){
if(((typeof selector === 'string') || ((selector instanceof cljs.core.Keyword)))){
var selector_path_27018 = [];
oops.schema.prepare_simple_path_BANG_(selector,selector_path_27018);

return selector_path_27018;
} else {
var selector_path_27019 = [];
oops.schema.prepare_path_BANG_(selector,selector_path_27019);

return selector_path_27019;

}
});
oops.core.check_path_dynamically = (function oops$core$check_path_dynamically(path,op){
var temp__5757__auto__ = oops.schema.check_dynamic_path_BANG_(path,op);
if((temp__5757__auto__ == null)){
return null;
} else {
var issue_27020 = temp__5757__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(oops.core.report_if_needed_dynamically,issue_27020);
}
});
oops.core.get_key_dynamically = (function oops$core$get_key_dynamically(obj,key,mode){
return (obj[key]);
});
oops.core.set_key_dynamically = (function oops$core$set_key_dynamically(obj,key,val,mode){
return (obj[key] = val);
});
oops.core.get_selector_dynamically = (function oops$core$get_selector_dynamically(obj,selector){
var path_27022 = (function (){var path_27021 = oops.core.build_path_dynamically(selector);

return path_27021;
})();
var len_27023 = path_27022.length;
var i_27024 = (0);
var obj_27025 = obj;
while(true){
if((i_27024 < len_27023)){
var mode_27026 = (path_27022[i_27024]);
var key_27027 = (path_27022[(i_27024 + (1))]);
var next_obj_27028 = oops.core.get_key_dynamically(obj_27025,key_27027,mode_27026);
var G__27029 = mode_27026;
switch (G__27029) {
case (0):
var G__27031 = (i_27024 + (2));
var G__27032 = next_obj_27028;
i_27024 = G__27031;
obj_27025 = G__27032;
continue;

break;
case (1):
if((!((next_obj_27028 == null)))){
var G__27033 = (i_27024 + (2));
var G__27034 = next_obj_27028;
i_27024 = G__27033;
obj_27025 = G__27034;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_27028 == null)))){
var G__27035 = (i_27024 + (2));
var G__27036 = next_obj_27028;
i_27024 = G__27035;
obj_27025 = G__27036;
continue;
} else {
var G__27037 = (i_27024 + (2));
var G__27038 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_27025,key_27027) : oops.core.punch_key_dynamically_BANG_.call(null,obj_27025,key_27027));
i_27024 = G__27037;
obj_27025 = G__27038;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27029)].join('')));

}
} else {
return obj_27025;
}
break;
}
});
oops.core.get_selector_call_info_dynamically = (function oops$core$get_selector_call_info_dynamically(obj,selector){
var path_27040 = (function (){var path_27039 = oops.core.build_path_dynamically(selector);

return path_27039;
})();
var len_27041 = path_27040.length;
if((len_27041 < (4))){
return [obj,(function (){var path_27043 = path_27040;
var len_27044 = path_27043.length;
var i_27045 = (0);
var obj_27046 = obj;
while(true){
if((i_27045 < len_27044)){
var mode_27047 = (path_27043[i_27045]);
var key_27048 = (path_27043[(i_27045 + (1))]);
var next_obj_27049 = oops.core.get_key_dynamically(obj_27046,key_27048,mode_27047);
var G__27064 = mode_27047;
switch (G__27064) {
case (0):
var G__27068 = (i_27045 + (2));
var G__27069 = next_obj_27049;
i_27045 = G__27068;
obj_27046 = G__27069;
continue;

break;
case (1):
if((!((next_obj_27049 == null)))){
var G__27070 = (i_27045 + (2));
var G__27071 = next_obj_27049;
i_27045 = G__27070;
obj_27046 = G__27071;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_27049 == null)))){
var G__27072 = (i_27045 + (2));
var G__27073 = next_obj_27049;
i_27045 = G__27072;
obj_27046 = G__27073;
continue;
} else {
var G__27074 = (i_27045 + (2));
var G__27075 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_27046,key_27048) : oops.core.punch_key_dynamically_BANG_.call(null,obj_27046,key_27048));
i_27045 = G__27074;
obj_27046 = G__27075;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27064)].join('')));

}
} else {
return obj_27046;
}
break;
}
})()];
} else {
var target_obj_27042 = (function (){var path_27050 = path_27040.slice((0),(len_27041 - (2)));
var len_27051 = path_27050.length;
var i_27052 = (0);
var obj_27053 = obj;
while(true){
if((i_27052 < len_27051)){
var mode_27054 = (path_27050[i_27052]);
var key_27055 = (path_27050[(i_27052 + (1))]);
var next_obj_27056 = oops.core.get_key_dynamically(obj_27053,key_27055,mode_27054);
var G__27065 = mode_27054;
switch (G__27065) {
case (0):
var G__27077 = (i_27052 + (2));
var G__27078 = next_obj_27056;
i_27052 = G__27077;
obj_27053 = G__27078;
continue;

break;
case (1):
if((!((next_obj_27056 == null)))){
var G__27079 = (i_27052 + (2));
var G__27080 = next_obj_27056;
i_27052 = G__27079;
obj_27053 = G__27080;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_27056 == null)))){
var G__27081 = (i_27052 + (2));
var G__27082 = next_obj_27056;
i_27052 = G__27081;
obj_27053 = G__27082;
continue;
} else {
var G__27083 = (i_27052 + (2));
var G__27084 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_27053,key_27055) : oops.core.punch_key_dynamically_BANG_.call(null,obj_27053,key_27055));
i_27052 = G__27083;
obj_27053 = G__27084;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27065)].join('')));

}
} else {
return obj_27053;
}
break;
}
})();
return [target_obj_27042,(function (){var path_27057 = [(path_27040[(len_27041 - (2))]),(path_27040[(len_27041 - (1))])];
var len_27058 = path_27057.length;
var i_27059 = (0);
var obj_27060 = target_obj_27042;
while(true){
if((i_27059 < len_27058)){
var mode_27061 = (path_27057[i_27059]);
var key_27062 = (path_27057[(i_27059 + (1))]);
var next_obj_27063 = oops.core.get_key_dynamically(obj_27060,key_27062,mode_27061);
var G__27066 = mode_27061;
switch (G__27066) {
case (0):
var G__27086 = (i_27059 + (2));
var G__27087 = next_obj_27063;
i_27059 = G__27086;
obj_27060 = G__27087;
continue;

break;
case (1):
if((!((next_obj_27063 == null)))){
var G__27088 = (i_27059 + (2));
var G__27089 = next_obj_27063;
i_27059 = G__27088;
obj_27060 = G__27089;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_27063 == null)))){
var G__27090 = (i_27059 + (2));
var G__27091 = next_obj_27063;
i_27059 = G__27090;
obj_27060 = G__27091;
continue;
} else {
var G__27092 = (i_27059 + (2));
var G__27093 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_27060,key_27062) : oops.core.punch_key_dynamically_BANG_.call(null,obj_27060,key_27062));
i_27059 = G__27092;
obj_27060 = G__27093;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27066)].join('')));

}
} else {
return obj_27060;
}
break;
}
})()];
}
});
oops.core.set_selector_dynamically = (function oops$core$set_selector_dynamically(obj,selector,val){
var path_27095 = (function (){var path_27094 = oops.core.build_path_dynamically(selector);

return path_27094;
})();
var len_27098 = path_27095.length;
var parent_obj_path_27099 = path_27095.slice((0),(len_27098 - (2)));
var key_27096 = (path_27095[(len_27098 - (1))]);
var mode_27097 = (path_27095[(len_27098 - (2))]);
var parent_obj_27100 = (function (){var path_27101 = parent_obj_path_27099;
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
})();
return oops.core.set_key_dynamically(parent_obj_27100,key_27096,val,mode_27097);
});
