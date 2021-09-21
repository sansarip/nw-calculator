// Compiled by ClojureScript 1.10.879 {:optimizations :none}
goog.provide('oops.core');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.object');
goog.require('oops.sdefs');
goog.require('oops.state');
goog.require('oops.config');
goog.require('oops.messages');
goog.require('oops.helpers');
goog.require('oops.schema');
oops.core.report_error_dynamically = (function oops$core$report_error_dynamically(msg,data){
if(oops.state.was_error_reported_QMARK_.call(null)){
return null;
} else {
oops.state.mark_error_reported_BANG_.call(null);

var G__28597 = oops.config.get_error_reporting.call(null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),G__28597)){
throw oops.state.prepare_error_from_call_site.call(null,msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"console","console",1228072057),G__28597)){
return oops.state.get_console_reporter.call(null).call(null,(console["error"]),msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,false,G__28597)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28597)].join('')));

}
}
}
}
});
oops.core.report_warning_dynamically = (function oops$core$report_warning_dynamically(msg,data){
var G__28598 = oops.config.get_warning_reporting.call(null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),G__28598)){
throw oops.state.prepare_error_from_call_site.call(null,msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"console","console",1228072057),G__28598)){
return oops.state.get_console_reporter.call(null).call(null,(console["warn"]),msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,false,G__28598)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28598)].join('')));

}
}
}
});
oops.core.report_if_needed_dynamically = (function oops$core$report_if_needed_dynamically(var_args){
var args__4824__auto__ = [];
var len__4818__auto___28606 = arguments.length;
var i__4819__auto___28607 = (0);
while(true){
if((i__4819__auto___28607 < len__4818__auto___28606)){
args__4824__auto__.push((arguments[i__4819__auto___28607]));

var G__28608 = (i__4819__auto___28607 + (1));
i__4819__auto___28607 = G__28608;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic = (function (msg_id,p__28601){
var vec__28602 = p__28601;
var info = cljs.core.nth.call(null,vec__28602,(0),null);

if(cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),msg_id)){
} else {
var G__28605_28609 = oops.config.get_config_key.call(null,msg_id);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),G__28605_28609)){
oops.core.report_warning_dynamically.call(null,oops.messages.runtime_message.call(null,msg_id,info),info);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",-978969032),G__28605_28609)){
oops.core.report_error_dynamically.call(null,oops.messages.runtime_message.call(null,msg_id,info),info);
} else {
if(cljs.core._EQ_.call(null,false,G__28605_28609)){
} else {
if(cljs.core._EQ_.call(null,null,G__28605_28609)){
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28605_28609)].join('')));

}
}
}
}
}

return null;
}));

(oops.core.report_if_needed_dynamically.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(oops.core.report_if_needed_dynamically.cljs$lang$applyTo = (function (seq28599){
var G__28600 = cljs.core.first.call(null,seq28599);
var seq28599__$1 = cljs.core.next.call(null,seq28599);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28600,seq28599__$1);
}));

oops.core.validate_object_access_dynamically = (function oops$core$validate_object_access_dynamically(obj,mode,key,push_QMARK_,check_key_read_QMARK_,check_key_write_QMARK_){
if(((((cljs.core._EQ_.call(null,mode,(0))) && ((void 0 === obj))))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"undefined",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return false;
})()
):((((cljs.core._EQ_.call(null,mode,(0))) && ((obj == null))))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"nil",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return false;
})()
):((cljs.core.boolean_QMARK_.call(null,obj))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"boolean",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return false;
})()
):((typeof obj === 'number')?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"number",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return false;
})()
):((typeof obj === 'string')?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"string",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return false;
})()
):((cljs.core.not.call(null,goog.isObject(obj)))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"non-object",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return false;
})()
):(cljs.core.truth_(goog.isDateLike(obj))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"date-like",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return true;
})()
):(cljs.core.truth_(oops.helpers.cljs_type_QMARK_.call(null,obj))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"cljs type",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return true;
})()
):(cljs.core.truth_(oops.helpers.cljs_instance_QMARK_.call(null,obj))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"cljs instance",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return true;
})()
):true
)))))))))){
if(cljs.core.truth_(push_QMARK_)){
oops.state.add_key_to_current_path_BANG_.call(null,key);

oops.state.set_last_access_modifier_BANG_.call(null,mode);
} else {
}

var and__4210__auto__ = (cljs.core.truth_(check_key_read_QMARK_)?((((cljs.core._EQ_.call(null,mode,(0))) && ((!(goog.object.containsKey(obj,key))))))?oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"missing-object-key","missing-object-key",-1300201731),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null)):true):true);
if(cljs.core.truth_(and__4210__auto__)){
if(cljs.core.truth_(check_key_write_QMARK_)){
var temp__5755__auto__ = oops.helpers.get_property_descriptor.call(null,obj,key);
if((temp__5755__auto__ == null)){
if(cljs.core.truth_(oops.helpers.is_object_frozen_QMARK_.call(null,obj))){
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"object-is-frozen","object-is-frozen",-1391578096),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));
} else {
if(cljs.core.truth_(oops.helpers.is_object_sealed_QMARK_.call(null,obj))){
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"object-is-sealed","object-is-sealed",-1791813926),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));
} else {
return true;

}
}
} else {
var descriptor_28610 = temp__5755__auto__;
var temp__5755__auto____$1 = oops.helpers.determine_property_non_writable_reason.call(null,descriptor_28610);
if((temp__5755__auto____$1 == null)){
return true;
} else {
var reason_28611 = temp__5755__auto____$1;
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"object-key-not-writable","object-key-not-writable",206336031),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"frozen?","frozen?",613726824),oops.helpers.is_object_frozen_QMARK_.call(null,obj),new cljs.core.Keyword(null,"reason","reason",-2070751759),reason_28611,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));
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
if(((cljs.core._EQ_.call(null,mode,(1))) && ((fn == null)))){
return true;
} else {
if(typeof fn === 'function'){
return true;
} else {
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"expected-function-value","expected-function-value",-1399123630),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"soft?","soft?",-1339668477),cljs.core._EQ_.call(null,mode,(1)),new cljs.core.Keyword(null,"fn","fn",-1175266204),fn,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

}
}
});
oops.core.punch_key_dynamically_BANG_ = (function oops$core$punch_key_dynamically_BANG_(obj,key){
var child_factory_28613 = oops.config.get_child_factory.call(null);
var child_factory_28613__$1 = (function (){var G__28614 = child_factory_28613;
var G__28614__$1 = (((G__28614 instanceof cljs.core.Keyword))?G__28614.fqn:null);
switch (G__28614__$1) {
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
return child_factory_28613;

}
})();

var child_obj_28612 = child_factory_28613__$1.call(null,obj,key);
if(oops.core.validate_object_access_dynamically.call(null,obj,(2),key,false,true,true)){
(obj[key] = child_obj_28612);
} else {
}

return child_obj_28612;
});
oops.core.build_path_dynamically = (function oops$core$build_path_dynamically(selector){
if(((typeof selector === 'string') || ((selector instanceof cljs.core.Keyword)))){
var selector_path_28618 = [];
oops.schema.prepare_simple_path_BANG_.call(null,selector,selector_path_28618);

return selector_path_28618;
} else {
var selector_path_28619 = [];
oops.schema.prepare_path_BANG_.call(null,selector,selector_path_28619);

return selector_path_28619;

}
});
oops.core.check_path_dynamically = (function oops$core$check_path_dynamically(path,op){
var temp__5757__auto__ = oops.schema.check_dynamic_path_BANG_.call(null,path,op);
if((temp__5757__auto__ == null)){
return null;
} else {
var issue_28620 = temp__5757__auto__;
return cljs.core.apply.call(null,oops.core.report_if_needed_dynamically,issue_28620);
}
});
oops.core.get_key_dynamically = (function oops$core$get_key_dynamically(obj,key,mode){
if(oops.core.validate_object_access_dynamically.call(null,obj,mode,key,true,true,false)){
return (obj[key]);
} else {
return null;
}
});
oops.core.set_key_dynamically = (function oops$core$set_key_dynamically(obj,key,val,mode){
if(oops.core.validate_object_access_dynamically.call(null,obj,mode,key,true,true,true)){
return (obj[key] = val);
} else {
return null;
}
});
oops.core.get_selector_dynamically = (function oops$core$get_selector_dynamically(obj,selector){
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_28629 = cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_28629,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_28622 = (function (){var path_28621 = oops.core.build_path_dynamically.call(null,selector);
oops.core.check_path_dynamically.call(null,path_28621,(0));

return path_28621;
})();
var len_28623 = path_28622.length;
var i_28624 = (0);
var obj_28625 = obj;
while(true){
if((i_28624 < len_28623)){
var mode_28626 = (path_28622[i_28624]);
var key_28627 = (path_28622[(i_28624 + (1))]);
var next_obj_28628 = oops.core.get_key_dynamically.call(null,obj_28625,key_28627,mode_28626);
var G__28630 = mode_28626;
switch (G__28630) {
case (0):
var G__28632 = (i_28624 + (2));
var G__28633 = next_obj_28628;
i_28624 = G__28632;
obj_28625 = G__28633;
continue;

break;
case (1):
if((!((next_obj_28628 == null)))){
var G__28634 = (i_28624 + (2));
var G__28635 = next_obj_28628;
i_28624 = G__28634;
obj_28625 = G__28635;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_28628 == null)))){
var G__28636 = (i_28624 + (2));
var G__28637 = next_obj_28628;
i_28624 = G__28636;
obj_28625 = G__28637;
continue;
} else {
var G__28638 = (i_28624 + (2));
var G__28639 = oops.core.punch_key_dynamically_BANG_.call(null,obj_28625,key_28627);
i_28624 = G__28638;
obj_28625 = G__28639;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28630)].join('')));

}
} else {
return obj_28625;
}
break;
}
} else {
return null;
}
});
oops.core.get_selector_call_info_dynamically = (function oops$core$get_selector_call_info_dynamically(obj,selector){
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_28665 = cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_28665,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_28641 = (function (){var path_28640 = oops.core.build_path_dynamically.call(null,selector);
oops.core.check_path_dynamically.call(null,path_28640,(0));

return path_28640;
})();
var len_28642 = path_28641.length;
if((len_28642 < (4))){
return [obj,(function (){var path_28644 = path_28641;
var len_28645 = path_28644.length;
var i_28646 = (0);
var obj_28647 = obj;
while(true){
if((i_28646 < len_28645)){
var mode_28648 = (path_28644[i_28646]);
var key_28649 = (path_28644[(i_28646 + (1))]);
var next_obj_28650 = oops.core.get_key_dynamically.call(null,obj_28647,key_28649,mode_28648);
var G__28666 = mode_28648;
switch (G__28666) {
case (0):
var G__28670 = (i_28646 + (2));
var G__28671 = next_obj_28650;
i_28646 = G__28670;
obj_28647 = G__28671;
continue;

break;
case (1):
if((!((next_obj_28650 == null)))){
var G__28672 = (i_28646 + (2));
var G__28673 = next_obj_28650;
i_28646 = G__28672;
obj_28647 = G__28673;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_28650 == null)))){
var G__28674 = (i_28646 + (2));
var G__28675 = next_obj_28650;
i_28646 = G__28674;
obj_28647 = G__28675;
continue;
} else {
var G__28676 = (i_28646 + (2));
var G__28677 = oops.core.punch_key_dynamically_BANG_.call(null,obj_28647,key_28649);
i_28646 = G__28676;
obj_28647 = G__28677;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28666)].join('')));

}
} else {
return obj_28647;
}
break;
}
})()];
} else {
var target_obj_28643 = (function (){var path_28651 = path_28641.slice((0),(len_28642 - (2)));
var len_28652 = path_28651.length;
var i_28653 = (0);
var obj_28654 = obj;
while(true){
if((i_28653 < len_28652)){
var mode_28655 = (path_28651[i_28653]);
var key_28656 = (path_28651[(i_28653 + (1))]);
var next_obj_28657 = oops.core.get_key_dynamically.call(null,obj_28654,key_28656,mode_28655);
var G__28667 = mode_28655;
switch (G__28667) {
case (0):
var G__28679 = (i_28653 + (2));
var G__28680 = next_obj_28657;
i_28653 = G__28679;
obj_28654 = G__28680;
continue;

break;
case (1):
if((!((next_obj_28657 == null)))){
var G__28681 = (i_28653 + (2));
var G__28682 = next_obj_28657;
i_28653 = G__28681;
obj_28654 = G__28682;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_28657 == null)))){
var G__28683 = (i_28653 + (2));
var G__28684 = next_obj_28657;
i_28653 = G__28683;
obj_28654 = G__28684;
continue;
} else {
var G__28685 = (i_28653 + (2));
var G__28686 = oops.core.punch_key_dynamically_BANG_.call(null,obj_28654,key_28656);
i_28653 = G__28685;
obj_28654 = G__28686;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28667)].join('')));

}
} else {
return obj_28654;
}
break;
}
})();
return [target_obj_28643,(function (){var path_28658 = [(path_28641[(len_28642 - (2))]),(path_28641[(len_28642 - (1))])];
var len_28659 = path_28658.length;
var i_28660 = (0);
var obj_28661 = target_obj_28643;
while(true){
if((i_28660 < len_28659)){
var mode_28662 = (path_28658[i_28660]);
var key_28663 = (path_28658[(i_28660 + (1))]);
var next_obj_28664 = oops.core.get_key_dynamically.call(null,obj_28661,key_28663,mode_28662);
var G__28668 = mode_28662;
switch (G__28668) {
case (0):
var G__28688 = (i_28660 + (2));
var G__28689 = next_obj_28664;
i_28660 = G__28688;
obj_28661 = G__28689;
continue;

break;
case (1):
if((!((next_obj_28664 == null)))){
var G__28690 = (i_28660 + (2));
var G__28691 = next_obj_28664;
i_28660 = G__28690;
obj_28661 = G__28691;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_28664 == null)))){
var G__28692 = (i_28660 + (2));
var G__28693 = next_obj_28664;
i_28660 = G__28692;
obj_28661 = G__28693;
continue;
} else {
var G__28694 = (i_28660 + (2));
var G__28695 = oops.core.punch_key_dynamically_BANG_.call(null,obj_28661,key_28663);
i_28660 = G__28694;
obj_28661 = G__28695;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28668)].join('')));

}
} else {
return obj_28661;
}
break;
}
})()];
}
} else {
return null;
}
});
oops.core.set_selector_dynamically = (function oops$core$set_selector_dynamically(obj,selector,val){
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_28710 = cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_28710,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_28697 = (function (){var path_28696 = oops.core.build_path_dynamically.call(null,selector);
oops.core.check_path_dynamically.call(null,path_28696,(1));

return path_28696;
})();
var len_28700 = path_28697.length;
var parent_obj_path_28701 = path_28697.slice((0),(len_28700 - (2)));
var key_28698 = (path_28697[(len_28700 - (1))]);
var mode_28699 = (path_28697[(len_28700 - (2))]);
var parent_obj_28702 = (function (){var path_28703 = parent_obj_path_28701;
var len_28704 = path_28703.length;
var i_28705 = (0);
var obj_28706 = obj;
while(true){
if((i_28705 < len_28704)){
var mode_28707 = (path_28703[i_28705]);
var key_28708 = (path_28703[(i_28705 + (1))]);
var next_obj_28709 = oops.core.get_key_dynamically.call(null,obj_28706,key_28708,mode_28707);
var G__28711 = mode_28707;
switch (G__28711) {
case (0):
var G__28713 = (i_28705 + (2));
var G__28714 = next_obj_28709;
i_28705 = G__28713;
obj_28706 = G__28714;
continue;

break;
case (1):
if((!((next_obj_28709 == null)))){
var G__28715 = (i_28705 + (2));
var G__28716 = next_obj_28709;
i_28705 = G__28715;
obj_28706 = G__28716;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_28709 == null)))){
var G__28717 = (i_28705 + (2));
var G__28718 = next_obj_28709;
i_28705 = G__28717;
obj_28706 = G__28718;
continue;
} else {
var G__28719 = (i_28705 + (2));
var G__28720 = oops.core.punch_key_dynamically_BANG_.call(null,obj_28706,key_28708);
i_28705 = G__28719;
obj_28706 = G__28720;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28711)].join('')));

}
} else {
return obj_28706;
}
break;
}
})();
return oops.core.set_key_dynamically.call(null,parent_obj_28702,key_28698,val,mode_28699);
} else {
return null;
}
});

//# sourceMappingURL=core.js.map
