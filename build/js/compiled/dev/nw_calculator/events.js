// Compiled by ClojureScript 1.10.879 {:optimizations :none}
goog.provide('nw_calculator.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('day8.re_frame.tracing');
goog.require('nw_calculator.defaults');
goog.require('nw_calculator.fsm');
goog.require('nw_calculator.effects');
goog.require('nw_calculator.event_handlers');
goog.require('ajax.core');
goog.require('day8.re_frame.http_fx');
goog.require('compound2.core');
goog.require('nw_calculator.utilities');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("nw-calculator.events","initialize-db","nw-calculator.events/initialize-db",1418944031),((day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null))?(function (_,p__30807){
var vec__30808 = p__30807;
var ___$1 = cljs.core.nth.call(null,vec__30808,(0),null);
var default_overrides = cljs.core.nth.call(null,vec__30808,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"default-overrides","default-overrides",1599641341,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"merge","merge",-163787882,null),new cljs.core.Symbol("df","default-db","df/default-db",-1149096556,null),new cljs.core.Symbol(null,"default-overrides","default-overrides",1599641341,null))));

var result__15830__auto__ = cljs.core.merge.call(null,(function (){var result__15830__auto__ = nw_calculator.defaults.default_db;
day8.re_frame.debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(2),new cljs.core.Keyword(null,"result","result",1415092211),result__15830__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("df","default-db","df/default-db",-1149096556,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__15830__auto__;
})(),(function (){var result__15830__auto__ = default_overrides;
day8.re_frame.debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(3),new cljs.core.Keyword(null,"result","result",1415092211),result__15830__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"default-overrides","default-overrides",1599641341,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__15830__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__15830__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"merge","merge",-163787882,null),new cljs.core.Symbol("df","default-db","df/default-db",-1149096556,null),new cljs.core.Symbol(null,"default-overrides","default-overrides",1599641341,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__15830__auto__;
}catch (e30811){var e = e30811;
throw e;
}}):(function (_,p__30812){
var vec__30813 = p__30812;
var ___$1 = cljs.core.nth.call(null,vec__30813,(0),null);
var default_overrides = cljs.core.nth.call(null,vec__30813,(1),null);
return cljs.core.merge.call(null,nw_calculator.defaults.default_db,default_overrides);
})));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("nw-calculator.events","set-state","nw-calculator.events/set-state",-1743440334),((day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null))?(function (db,p__30816){
var vec__30817 = p__30816;
var _ = cljs.core.nth.call(null,vec__30817,(0),null);
var state = cljs.core.nth.call(null,vec__30817,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"state","state",-348086572,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Symbol(null,"state","state",-348086572,null))));

var result__15830__auto__ = cljs.core.assoc.call(null,(function (){var result__15830__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(2),new cljs.core.Keyword(null,"result","result",1415092211),result__15830__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__15830__auto__;
})(),new cljs.core.Keyword(null,"state","state",-1988618099),(function (){var result__15830__auto__ = state;
day8.re_frame.debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(4),new cljs.core.Keyword(null,"result","result",1415092211),result__15830__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__15830__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__15830__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Symbol(null,"state","state",-348086572,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__15830__auto__;
}catch (e30820){var e = e30820;
throw e;
}}):(function (db,p__30821){
var vec__30822 = p__30821;
var _ = cljs.core.nth.call(null,vec__30822,(0),null);
var state = cljs.core.nth.call(null,vec__30822,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"state","state",-1988618099),state);
})));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("nw-calculator.events","fetch-items-success","nw-calculator.events/fetch-items-success",-1857549912),((day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null))?(function (db,p__30825){
var vec__30826 = p__30825;
var _ = cljs.core.nth.call(null,vec__30826,(0),null);
var items_edn = cljs.core.nth.call(null,vec__30826,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"items-edn","items-edn",1928738102,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.Symbol("c","add-items","c/add-items",592206773,null),new cljs.core.Symbol(null,"items-edn","items-edn",1928738102,null)),cljs.core.list(new cljs.core.Symbol("handlers","next-state","handlers/next-state",218051106,null),cljs.core.PersistentVector.EMPTY,new cljs.core.Symbol("fsm","app-fsm","fsm/app-fsm",492941393,null),new cljs.core.Keyword(null,"success","success",1890645906)))));

var result__15830__auto__ = (function (){var result__15837__auto__ = nw_calculator.event_handlers.next_state.call(null,(function (){var result__15837__auto__ = cljs.core.update.call(null,(function (){var result__15830__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(2),new cljs.core.Keyword(null,"result","result",1415092211),result__15830__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__15830__auto__;
})(),new cljs.core.Keyword(null,"items","items",1031954938),(function (){var result__15830__auto__ = compound2.core.add_items;
day8.re_frame.debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(6),new cljs.core.Keyword(null,"result","result",1415092211),result__15830__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("c","add-items","c/add-items",592206773,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__15830__auto__;
})(),(function (){var result__15830__auto__ = items_edn;
day8.re_frame.debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(7),new cljs.core.Keyword(null,"result","result",1415092211),result__15830__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"items-edn","items-edn",1928738102,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__15830__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(3),new cljs.core.Keyword(null,"result","result",1415092211),result__15837__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.Symbol("c","add-items","c/add-items",592206773,null),new cljs.core.Symbol(null,"items-edn","items-edn",1928738102,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__15837__auto__;
})(),(function (){var result__15830__auto__ = cljs.core.PersistentVector.EMPTY;
day8.re_frame.debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(10),new cljs.core.Keyword(null,"result","result",1415092211),result__15830__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__15830__auto__;
})(),(function (){var result__15830__auto__ = nw_calculator.fsm.app_fsm;
day8.re_frame.debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(12),new cljs.core.Keyword(null,"result","result",1415092211),result__15830__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("fsm","app-fsm","fsm/app-fsm",492941393,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__15830__auto__;
})(),new cljs.core.Keyword(null,"success","success",1890645906));
day8.re_frame.debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(8),new cljs.core.Keyword(null,"result","result",1415092211),result__15837__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("handlers","next-state","handlers/next-state",218051106,null),cljs.core.PersistentVector.EMPTY,new cljs.core.Symbol("fsm","app-fsm","fsm/app-fsm",492941393,null),new cljs.core.Keyword(null,"success","success",1890645906)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__15837__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__15830__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.Symbol("c","add-items","c/add-items",592206773,null),new cljs.core.Symbol(null,"items-edn","items-edn",1928738102,null)),cljs.core.list(new cljs.core.Symbol("handlers","next-state","handlers/next-state",218051106,null),cljs.core.PersistentVector.EMPTY,new cljs.core.Symbol("fsm","app-fsm","fsm/app-fsm",492941393,null),new cljs.core.Keyword(null,"success","success",1890645906))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__15830__auto__;
}catch (e30829){var e = e30829;
throw e;
}}):(function (db,p__30830){
var vec__30831 = p__30830;
var _ = cljs.core.nth.call(null,vec__30831,(0),null);
var items_edn = cljs.core.nth.call(null,vec__30831,(1),null);
return nw_calculator.event_handlers.next_state.call(null,cljs.core.update.call(null,db,new cljs.core.Keyword(null,"items","items",1031954938),compound2.core.add_items,items_edn),cljs.core.PersistentVector.EMPTY,nw_calculator.fsm.app_fsm,new cljs.core.Keyword(null,"success","success",1890645906));
})));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("nw-calculator.events","fetch-items-failure","nw-calculator.events/fetch-items-failure",1490740057),((day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null))?(function (db,p__30834){
var vec__30835 = p__30834;
var _ = cljs.core.nth.call(null,vec__30835,(0),null);
var _resp = cljs.core.nth.call(null,vec__30835,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_resp","_resp",927264606,null)], null)], null),new cljs.core.Symbol(null,"db","db",-1661185010,null)));

var result__15830__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__15830__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__15830__auto__;
}catch (e30838){var e = e30838;
throw e;
}}):(function (db,p__30839){
var vec__30840 = p__30839;
var _ = cljs.core.nth.call(null,vec__30840,(0),null);
var _resp = cljs.core.nth.call(null,vec__30840,(1),null);
return db;
})));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("nw-calculator.events","fetch-items","nw-calculator.events/fetch-items",1052431158),((day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null))?(function (p__30843,_){
var map__30844 = p__30843;
var map__30844__$1 = cljs.core.__destructure_map.call(null,map__30844);
var db = cljs.core.get.call(null,map__30844__$1,new cljs.core.Keyword(null,"db","db",993250759));
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"db","db",993250759)], null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),cljs.core.list(new cljs.core.Symbol("handlers","next-state","handlers/next-state",218051106,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("nw-calculator.effects","log-info","nw-calculator.effects/log-info",1892956088),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u2B07\uFE0F Fetching item data!"], null),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"response-format","response-format",1664465322),cljs.core.list(new cljs.core.Symbol("ajax","json-response-format","ajax/json-response-format",689960115,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"uri","uri",-774711847),"/data/items.json",new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nw-calculator.events","fetch-items-success","nw-calculator.events/fetch-items-success",-1857549912)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nw-calculator.events","fetch-items-failure","nw-calculator.events/fetch-items-failure",1490740057)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759)], null),new cljs.core.Symbol("fsm","app-fsm","fsm/app-fsm",492941393,null),new cljs.core.Keyword(null,"fetch-item-data","fetch-item-data",648809550))));

var result__15830__auto__ = nw_calculator.event_handlers.next_state.call(null,(function (){var result__15830__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),(function (){var result__15830__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(4),new cljs.core.Keyword(null,"result","result",1415092211),result__15830__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__15830__auto__;
})(),new cljs.core.Keyword("nw-calculator.effects","log-info","nw-calculator.effects/log-info",1892956088),(function (){var result__15830__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u2B07\uFE0F Fetching item data!"], null);
day8.re_frame.debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(6),new cljs.core.Keyword(null,"result","result",1415092211),result__15830__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u2B07\uFE0F Fetching item data!"], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__15830__auto__;
})(),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),(function (){var result__15830__auto__ = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"response-format","response-format",1664465322),(function (){var result__15830__auto__ = ajax.core.json_response_format.call(null,(function (){var result__15830__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null);
day8.re_frame.debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(14),new cljs.core.Keyword(null,"result","result",1415092211),result__15830__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__15830__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(13),new cljs.core.Keyword(null,"result","result",1415092211),result__15830__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("ajax","json-response-format","ajax/json-response-format",689960115,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__15830__auto__;
})(),new cljs.core.Keyword(null,"uri","uri",-774711847),"/data/items.json",new cljs.core.Keyword(null,"on-success","on-success",1786904109),(function (){var result__15830__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nw-calculator.events","fetch-items-success","nw-calculator.events/fetch-items-success",-1857549912)], null);
day8.re_frame.debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(20),new cljs.core.Keyword(null,"result","result",1415092211),result__15830__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nw-calculator.events","fetch-items-success","nw-calculator.events/fetch-items-success",-1857549912)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__15830__auto__;
})(),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),(function (){var result__15830__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nw-calculator.events","fetch-items-failure","nw-calculator.events/fetch-items-failure",1490740057)], null);
day8.re_frame.debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(23),new cljs.core.Keyword(null,"result","result",1415092211),result__15830__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nw-calculator.events","fetch-items-failure","nw-calculator.events/fetch-items-failure",1490740057)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__15830__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(9),new cljs.core.Keyword(null,"result","result",1415092211),result__15830__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"response-format","response-format",1664465322),cljs.core.list(new cljs.core.Symbol("ajax","json-response-format","ajax/json-response-format",689960115,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"uri","uri",-774711847),"/data/items.json",new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nw-calculator.events","fetch-items-success","nw-calculator.events/fetch-items-success",-1857549912)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nw-calculator.events","fetch-items-failure","nw-calculator.events/fetch-items-failure",1490740057)], null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__15830__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(2),new cljs.core.Keyword(null,"result","result",1415092211),result__15830__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("nw-calculator.effects","log-info","nw-calculator.effects/log-info",1892956088),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u2B07\uFE0F Fetching item data!"], null),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"response-format","response-format",1664465322),cljs.core.list(new cljs.core.Symbol("ajax","json-response-format","ajax/json-response-format",689960115,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"uri","uri",-774711847),"/data/items.json",new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nw-calculator.events","fetch-items-success","nw-calculator.events/fetch-items-success",-1857549912)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nw-calculator.events","fetch-items-failure","nw-calculator.events/fetch-items-failure",1490740057)], null)], null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__15830__auto__;
})(),(function (){var result__15830__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759)], null);
day8.re_frame.debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(25),new cljs.core.Keyword(null,"result","result",1415092211),result__15830__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__15830__auto__;
})(),(function (){var result__15830__auto__ = nw_calculator.fsm.app_fsm;
day8.re_frame.debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(27),new cljs.core.Keyword(null,"result","result",1415092211),result__15830__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("fsm","app-fsm","fsm/app-fsm",492941393,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__15830__auto__;
})(),new cljs.core.Keyword(null,"fetch-item-data","fetch-item-data",648809550));
day8.re_frame.debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__15830__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("handlers","next-state","handlers/next-state",218051106,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("nw-calculator.effects","log-info","nw-calculator.effects/log-info",1892956088),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u2B07\uFE0F Fetching item data!"], null),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"response-format","response-format",1664465322),cljs.core.list(new cljs.core.Symbol("ajax","json-response-format","ajax/json-response-format",689960115,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"uri","uri",-774711847),"/data/items.json",new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nw-calculator.events","fetch-items-success","nw-calculator.events/fetch-items-success",-1857549912)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nw-calculator.events","fetch-items-failure","nw-calculator.events/fetch-items-failure",1490740057)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759)], null),new cljs.core.Symbol("fsm","app-fsm","fsm/app-fsm",492941393,null),new cljs.core.Keyword(null,"fetch-item-data","fetch-item-data",648809550)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__15830__auto__;
}catch (e30845){var e = e30845;
throw e;
}}):(function (p__30846,_){
var map__30847 = p__30846;
var map__30847__$1 = cljs.core.__destructure_map.call(null,map__30847);
var db = cljs.core.get.call(null,map__30847__$1,new cljs.core.Keyword(null,"db","db",993250759));
return nw_calculator.event_handlers.next_state.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),db,new cljs.core.Keyword("nw-calculator.effects","log-info","nw-calculator.effects/log-info",1892956088),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u2B07\uFE0F Fetching item data!"], null),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"uri","uri",-774711847),"/data/items.json",new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nw-calculator.events","fetch-items-success","nw-calculator.events/fetch-items-success",-1857549912)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nw-calculator.events","fetch-items-failure","nw-calculator.events/fetch-items-failure",1490740057)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759)], null),nw_calculator.fsm.app_fsm,new cljs.core.Keyword(null,"fetch-item-data","fetch-item-data",648809550));
})));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("nw-calculator.events","search-success","nw-calculator.events/search-success",-1787177060),((day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null))?(function (db,p__30848){
var vec__30849 = p__30848;
var _ = cljs.core.nth.call(null,vec__30849,(0),null);
var item_index = cljs.core.nth.call(null,vec__30849,(1),null);
var search_results = cljs.core.nth.call(null,vec__30849,(2),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"item-index","item-index",2051641841,null),new cljs.core.Symbol(null,"search-results","search-results",1946996161,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search-results","search-results",306464634),new cljs.core.Symbol(null,"item-index","item-index",2051641841,null)], null),new cljs.core.Symbol(null,"search-results","search-results",1946996161,null))));

var result__15830__auto__ = cljs.core.assoc_in.call(null,(function (){var result__15830__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(2),new cljs.core.Keyword(null,"result","result",1415092211),result__15830__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__15830__auto__;
})(),(function (){var result__15830__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search-results","search-results",306464634),(function (){var result__15830__auto__ = item_index;
day8.re_frame.debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(5),new cljs.core.Keyword(null,"result","result",1415092211),result__15830__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"item-index","item-index",2051641841,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__15830__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(3),new cljs.core.Keyword(null,"result","result",1415092211),result__15830__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search-results","search-results",306464634),new cljs.core.Symbol(null,"item-index","item-index",2051641841,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__15830__auto__;
})(),(function (){var result__15830__auto__ = search_results;
day8.re_frame.debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(6),new cljs.core.Keyword(null,"result","result",1415092211),result__15830__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"search-results","search-results",1946996161,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__15830__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__15830__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search-results","search-results",306464634),new cljs.core.Symbol(null,"item-index","item-index",2051641841,null)], null),new cljs.core.Symbol(null,"search-results","search-results",1946996161,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__15830__auto__;
}catch (e30852){var e = e30852;
throw e;
}}):(function (db,p__30853){
var vec__30854 = p__30853;
var _ = cljs.core.nth.call(null,vec__30854,(0),null);
var item_index = cljs.core.nth.call(null,vec__30854,(1),null);
var search_results = cljs.core.nth.call(null,vec__30854,(2),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search-results","search-results",306464634),item_index], null),search_results);
})));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("nw-calculator.events","search","nw-calculator.events/search",100447139),((day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null))?(function (p__30857,p__30858){
var map__30859 = p__30857;
var map__30859__$1 = cljs.core.__destructure_map.call(null,map__30859);
var map__30860 = cljs.core.get.call(null,map__30859__$1,new cljs.core.Keyword(null,"db","db",993250759));
var map__30860__$1 = cljs.core.__destructure_map.call(null,map__30860);
var db = map__30860__$1;
var map__30861 = cljs.core.get.call(null,map__30860__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var map__30861__$1 = cljs.core.__destructure_map.call(null,map__30861);
var items_by_id = cljs.core.get.call(null,map__30861__$1,new cljs.core.Keyword(null,"by-id","by-id",-2129473981));
var vec__30862 = p__30858;
var _ = cljs.core.nth.call(null,vec__30862,(0),null);
var item_index = cljs.core.nth.call(null,vec__30862,(1),null);
var query = cljs.core.nth.call(null,vec__30862,(2),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"items-by-id","items-by-id",1296253389,null),new cljs.core.Keyword(null,"by-id","by-id",-2129473981)], null),new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"db","db",-1661185010,null)], null),new cljs.core.Keyword(null,"db","db",993250759)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"item-index","item-index",2051641841,null),new cljs.core.Symbol(null,"query","query",352022017,null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("nw-calculator.effects","search","nw-calculator.effects/search",2007528780),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Symbol(null,"query","query",352022017,null),new cljs.core.Keyword(null,"items-by-id","items-by-id",-344278138),new cljs.core.Symbol(null,"items-by-id","items-by-id",1296253389,null),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nw-calculator.events","search-success","nw-calculator.events/search-success",-1787177060),new cljs.core.Symbol(null,"item-index","item-index",2051641841,null)], null)], null)], null)));

var result__15830__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),(function (){var result__15830__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(3),new cljs.core.Keyword(null,"result","result",1415092211),result__15830__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__15830__auto__;
})(),new cljs.core.Keyword("nw-calculator.effects","search","nw-calculator.effects/search",2007528780),(function (){var result__15830__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),(function (){var result__15830__auto__ = query;
day8.re_frame.debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(7),new cljs.core.Keyword(null,"result","result",1415092211),result__15830__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"query","query",352022017,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__15830__auto__;
})(),new cljs.core.Keyword(null,"items-by-id","items-by-id",-344278138),(function (){var result__15830__auto__ = items_by_id;
day8.re_frame.debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(9),new cljs.core.Keyword(null,"result","result",1415092211),result__15830__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"items-by-id","items-by-id",1296253389,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__15830__auto__;
})(),new cljs.core.Keyword(null,"on-success","on-success",1786904109),(function (){var result__15830__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nw-calculator.events","search-success","nw-calculator.events/search-success",-1787177060),(function (){var result__15830__auto__ = item_index;
day8.re_frame.debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(13),new cljs.core.Keyword(null,"result","result",1415092211),result__15830__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"item-index","item-index",2051641841,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__15830__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(11),new cljs.core.Keyword(null,"result","result",1415092211),result__15830__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nw-calculator.events","search-success","nw-calculator.events/search-success",-1787177060),new cljs.core.Symbol(null,"item-index","item-index",2051641841,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__15830__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(5),new cljs.core.Keyword(null,"result","result",1415092211),result__15830__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Symbol(null,"query","query",352022017,null),new cljs.core.Keyword(null,"items-by-id","items-by-id",-344278138),new cljs.core.Symbol(null,"items-by-id","items-by-id",1296253389,null),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nw-calculator.events","search-success","nw-calculator.events/search-success",-1787177060),new cljs.core.Symbol(null,"item-index","item-index",2051641841,null)], null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__15830__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__15830__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("nw-calculator.effects","search","nw-calculator.effects/search",2007528780),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Symbol(null,"query","query",352022017,null),new cljs.core.Keyword(null,"items-by-id","items-by-id",-344278138),new cljs.core.Symbol(null,"items-by-id","items-by-id",1296253389,null),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nw-calculator.events","search-success","nw-calculator.events/search-success",-1787177060),new cljs.core.Symbol(null,"item-index","item-index",2051641841,null)], null)], null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__15830__auto__;
}catch (e30865){var e = e30865;
throw e;
}}):(function (p__30866,p__30867){
var map__30868 = p__30866;
var map__30868__$1 = cljs.core.__destructure_map.call(null,map__30868);
var map__30869 = cljs.core.get.call(null,map__30868__$1,new cljs.core.Keyword(null,"db","db",993250759));
var map__30869__$1 = cljs.core.__destructure_map.call(null,map__30869);
var db = map__30869__$1;
var map__30870 = cljs.core.get.call(null,map__30869__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var map__30870__$1 = cljs.core.__destructure_map.call(null,map__30870);
var items_by_id = cljs.core.get.call(null,map__30870__$1,new cljs.core.Keyword(null,"by-id","by-id",-2129473981));
var vec__30871 = p__30867;
var _ = cljs.core.nth.call(null,vec__30871,(0),null);
var item_index = cljs.core.nth.call(null,vec__30871,(1),null);
var query = cljs.core.nth.call(null,vec__30871,(2),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),db,new cljs.core.Keyword("nw-calculator.effects","search","nw-calculator.effects/search",2007528780),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),query,new cljs.core.Keyword(null,"items-by-id","items-by-id",-344278138),items_by_id,new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nw-calculator.events","search-success","nw-calculator.events/search-success",-1787177060),item_index], null)], null)], null);
})));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("nw-calculator.events","clear-search","nw-calculator.events/clear-search",-1374048315),((day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null))?(function (db,p__30874){
var vec__30875 = p__30874;
var _ = cljs.core.nth.call(null,vec__30875,(0),null);
var item_index = cljs.core.nth.call(null,vec__30875,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"item-index","item-index",2051641841,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-items","selected-items",-558712488),new cljs.core.Symbol(null,"item-index","item-index",2051641841,null),new cljs.core.Keyword(null,"item","item",249373802)], null),cljs.core.PersistentArrayMap.EMPTY),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search-results","search-results",306464634),new cljs.core.Symbol(null,"item-index","item-index",2051641841,null)], null),cljs.core.PersistentVector.EMPTY))));

var result__15830__auto__ = (function (){var result__15837__auto__ = cljs.core.assoc_in.call(null,(function (){var result__15837__auto__ = cljs.core.assoc_in.call(null,(function (){var result__15830__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(2),new cljs.core.Keyword(null,"result","result",1415092211),result__15830__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__15830__auto__;
})(),(function (){var result__15830__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-items","selected-items",-558712488),(function (){var result__15830__auto__ = item_index;
day8.re_frame.debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(7),new cljs.core.Keyword(null,"result","result",1415092211),result__15830__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"item-index","item-index",2051641841,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__15830__auto__;
})(),new cljs.core.Keyword(null,"item","item",249373802)], null);
day8.re_frame.debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(5),new cljs.core.Keyword(null,"result","result",1415092211),result__15830__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-items","selected-items",-558712488),new cljs.core.Symbol(null,"item-index","item-index",2051641841,null),new cljs.core.Keyword(null,"item","item",249373802)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__15830__auto__;
})(),(function (){var result__15830__auto__ = cljs.core.PersistentArrayMap.EMPTY;
day8.re_frame.debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(9),new cljs.core.Keyword(null,"result","result",1415092211),result__15830__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__15830__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(3),new cljs.core.Keyword(null,"result","result",1415092211),result__15837__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-items","selected-items",-558712488),new cljs.core.Symbol(null,"item-index","item-index",2051641841,null),new cljs.core.Keyword(null,"item","item",249373802)], null),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__15837__auto__;
})(),(function (){var result__15830__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search-results","search-results",306464634),(function (){var result__15830__auto__ = item_index;
day8.re_frame.debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),3,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(15),new cljs.core.Keyword(null,"result","result",1415092211),result__15830__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"item-index","item-index",2051641841,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__15830__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(13),new cljs.core.Keyword(null,"result","result",1415092211),result__15830__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search-results","search-results",306464634),new cljs.core.Symbol(null,"item-index","item-index",2051641841,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__15830__auto__;
})(),(function (){var result__15830__auto__ = cljs.core.PersistentVector.EMPTY;
day8.re_frame.debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(16),new cljs.core.Keyword(null,"result","result",1415092211),result__15830__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__15830__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(11),new cljs.core.Keyword(null,"result","result",1415092211),result__15837__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search-results","search-results",306464634),new cljs.core.Symbol(null,"item-index","item-index",2051641841,null)], null),cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__15837__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__15830__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-items","selected-items",-558712488),new cljs.core.Symbol(null,"item-index","item-index",2051641841,null),new cljs.core.Keyword(null,"item","item",249373802)], null),cljs.core.PersistentArrayMap.EMPTY),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search-results","search-results",306464634),new cljs.core.Symbol(null,"item-index","item-index",2051641841,null)], null),cljs.core.PersistentVector.EMPTY)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__15830__auto__;
}catch (e30878){var e = e30878;
throw e;
}}):(function (db,p__30879){
var vec__30880 = p__30879;
var _ = cljs.core.nth.call(null,vec__30880,(0),null);
var item_index = cljs.core.nth.call(null,vec__30880,(1),null);
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-items","selected-items",-558712488),item_index,new cljs.core.Keyword(null,"item","item",249373802)], null),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search-results","search-results",306464634),item_index], null),cljs.core.PersistentVector.EMPTY);
})));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("nw-calculator.events","select-item","nw-calculator.events/select-item",-1874904713),((day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null))?(function (db,p__30884){
var vec__30885 = p__30884;
var _ = cljs.core.nth.call(null,vec__30885,(0),null);
var item_index = cljs.core.nth.call(null,vec__30885,(1),null);
var item = cljs.core.nth.call(null,vec__30885,(2),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"item-index","item-index",2051641841,null),new cljs.core.Symbol(null,"item","item",1889905329,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-items","selected-items",-558712488),new cljs.core.Symbol(null,"item-index","item-index",2051641841,null),new cljs.core.Keyword(null,"item","item",249373802)], null),new cljs.core.Symbol(null,"item","item",1889905329,null)),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-items","selected-items",-558712488),new cljs.core.Symbol(null,"item-index","item-index",2051641841,null),new cljs.core.Keyword(null,"quantity-multiplier","quantity-multiplier",-252611370)], null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%1","%1",1309450150,null)], null),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"%1","%1",1309450150,null),(1)))),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search-results","search-results",306464634),new cljs.core.Symbol(null,"item-index","item-index",2051641841,null)], null),cljs.core.PersistentVector.EMPTY))));

var result__15830__auto__ = (function (){var result__15837__auto__ = cljs.core.assoc_in.call(null,(function (){var result__15837__auto__ = cljs.core.update_in.call(null,(function (){var result__15837__auto__ = cljs.core.assoc_in.call(null,(function (){var result__15830__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(2),new cljs.core.Keyword(null,"result","result",1415092211),result__15830__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__15830__auto__;
})(),(function (){var result__15830__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-items","selected-items",-558712488),(function (){var result__15830__auto__ = item_index;
day8.re_frame.debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(7),new cljs.core.Keyword(null,"result","result",1415092211),result__15830__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"item-index","item-index",2051641841,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__15830__auto__;
})(),new cljs.core.Keyword(null,"item","item",249373802)], null);
day8.re_frame.debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(5),new cljs.core.Keyword(null,"result","result",1415092211),result__15830__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-items","selected-items",-558712488),new cljs.core.Symbol(null,"item-index","item-index",2051641841,null),new cljs.core.Keyword(null,"item","item",249373802)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__15830__auto__;
})(),(function (){var result__15830__auto__ = item;
day8.re_frame.debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(9),new cljs.core.Keyword(null,"result","result",1415092211),result__15830__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"item","item",1889905329,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__15830__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(3),new cljs.core.Keyword(null,"result","result",1415092211),result__15837__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-items","selected-items",-558712488),new cljs.core.Symbol(null,"item-index","item-index",2051641841,null),new cljs.core.Keyword(null,"item","item",249373802)], null),new cljs.core.Symbol(null,"item","item",1889905329,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__15837__auto__;
})(),(function (){var result__15830__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-items","selected-items",-558712488),(function (){var result__15830__auto__ = item_index;
day8.re_frame.debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),3,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(14),new cljs.core.Keyword(null,"result","result",1415092211),result__15830__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"item-index","item-index",2051641841,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__15830__auto__;
})(),new cljs.core.Keyword(null,"quantity-multiplier","quantity-multiplier",-252611370)], null);
day8.re_frame.debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(12),new cljs.core.Keyword(null,"result","result",1415092211),result__15830__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-items","selected-items",-558712488),new cljs.core.Symbol(null,"item-index","item-index",2051641841,null),new cljs.core.Keyword(null,"quantity-multiplier","quantity-multiplier",-252611370)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__15830__auto__;
})(),(function (){var result__15830__auto__ = (function (p1__30883_SHARP_){
var result__15830__auto__ = (function (){var or__4212__auto__ = (function (){var result__15830__auto__ = p1__30883_SHARP_;
day8.re_frame.debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(19),new cljs.core.Keyword(null,"result","result",1415092211),result__15830__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"p1__30883#","p1__30883#",-229813373,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__15830__auto__;
})();
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (1);
}
})();
day8.re_frame.debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(18),new cljs.core.Keyword(null,"result","result",1415092211),result__15830__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"p1__30883#","p1__30883#",-229813373,null),(1)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__15830__auto__;
});
day8.re_frame.debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(16),new cljs.core.Keyword(null,"result","result",1415092211),result__15830__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__30883#","p1__30883#",-229813373,null)], null),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"p1__30883#","p1__30883#",-229813373,null),(1))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__15830__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(10),new cljs.core.Keyword(null,"result","result",1415092211),result__15837__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-items","selected-items",-558712488),new cljs.core.Symbol(null,"item-index","item-index",2051641841,null),new cljs.core.Keyword(null,"quantity-multiplier","quantity-multiplier",-252611370)], null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__30883#","p1__30883#",-229813373,null)], null),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"p1__30883#","p1__30883#",-229813373,null),(1)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__15837__auto__;
})(),(function (){var result__15830__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search-results","search-results",306464634),(function (){var result__15830__auto__ = item_index;
day8.re_frame.debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),4,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(25),new cljs.core.Keyword(null,"result","result",1415092211),result__15830__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"item-index","item-index",2051641841,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__15830__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(23),new cljs.core.Keyword(null,"result","result",1415092211),result__15830__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search-results","search-results",306464634),new cljs.core.Symbol(null,"item-index","item-index",2051641841,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__15830__auto__;
})(),(function (){var result__15830__auto__ = cljs.core.PersistentVector.EMPTY;
day8.re_frame.debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(26),new cljs.core.Keyword(null,"result","result",1415092211),result__15830__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__15830__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(21),new cljs.core.Keyword(null,"result","result",1415092211),result__15837__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search-results","search-results",306464634),new cljs.core.Symbol(null,"item-index","item-index",2051641841,null)], null),cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__15837__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__15830__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-items","selected-items",-558712488),new cljs.core.Symbol(null,"item-index","item-index",2051641841,null),new cljs.core.Keyword(null,"item","item",249373802)], null),new cljs.core.Symbol(null,"item","item",1889905329,null)),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-items","selected-items",-558712488),new cljs.core.Symbol(null,"item-index","item-index",2051641841,null),new cljs.core.Keyword(null,"quantity-multiplier","quantity-multiplier",-252611370)], null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__30883#","p1__30883#",-229813373,null)], null),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"p1__30883#","p1__30883#",-229813373,null),(1)))),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search-results","search-results",306464634),new cljs.core.Symbol(null,"item-index","item-index",2051641841,null)], null),cljs.core.PersistentVector.EMPTY)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__15830__auto__;
}catch (e30888){var e = e30888;
throw e;
}}):(function (db,p__30889){
var vec__30890 = p__30889;
var _ = cljs.core.nth.call(null,vec__30890,(0),null);
var item_index = cljs.core.nth.call(null,vec__30890,(1),null);
var item = cljs.core.nth.call(null,vec__30890,(2),null);
return cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-items","selected-items",-558712488),item_index,new cljs.core.Keyword(null,"item","item",249373802)], null),item),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-items","selected-items",-558712488),item_index,new cljs.core.Keyword(null,"quantity-multiplier","quantity-multiplier",-252611370)], null),(function (p1__30883_SHARP_){
var or__4212__auto__ = p1__30883_SHARP_;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (1);
}
})),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search-results","search-results",306464634),item_index], null),cljs.core.PersistentVector.EMPTY);
})));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("nw-calculator.events","select-option","nw-calculator.events/select-option",542969418),((day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null))?(function (db,p__30893){
var vec__30894 = p__30893;
var _ = cljs.core.nth.call(null,vec__30894,(0),null);
var vec__30897 = cljs.core.nth.call(null,vec__30894,(1),null);
var item_index = cljs.core.nth.call(null,vec__30897,(0),null);
var category_path = vec__30897;
var option = cljs.core.nth.call(null,vec__30894,(2),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"item-index","item-index",2051641841,null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"category-path","category-path",-839479161,null)], null),new cljs.core.Symbol(null,"option","option",1705663799,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-items","selected-items",-558712488),new cljs.core.Symbol(null,"item-index","item-index",2051641841,null),new cljs.core.Keyword(null,"selected-options","selected-options",1306833224),new cljs.core.Symbol(null,"category-path","category-path",-839479161,null)], null),new cljs.core.Symbol(null,"option","option",1705663799,null))));

var result__15830__auto__ = cljs.core.assoc_in.call(null,(function (){var result__15830__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(2),new cljs.core.Keyword(null,"result","result",1415092211),result__15830__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__15830__auto__;
})(),(function (){var result__15830__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-items","selected-items",-558712488),(function (){var result__15830__auto__ = item_index;
day8.re_frame.debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(5),new cljs.core.Keyword(null,"result","result",1415092211),result__15830__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"item-index","item-index",2051641841,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__15830__auto__;
})(),new cljs.core.Keyword(null,"selected-options","selected-options",1306833224),(function (){var result__15830__auto__ = category_path;
day8.re_frame.debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(7),new cljs.core.Keyword(null,"result","result",1415092211),result__15830__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"category-path","category-path",-839479161,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__15830__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(3),new cljs.core.Keyword(null,"result","result",1415092211),result__15830__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-items","selected-items",-558712488),new cljs.core.Symbol(null,"item-index","item-index",2051641841,null),new cljs.core.Keyword(null,"selected-options","selected-options",1306833224),new cljs.core.Symbol(null,"category-path","category-path",-839479161,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__15830__auto__;
})(),(function (){var result__15830__auto__ = option;
day8.re_frame.debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(8),new cljs.core.Keyword(null,"result","result",1415092211),result__15830__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"option","option",1705663799,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__15830__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__15830__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-items","selected-items",-558712488),new cljs.core.Symbol(null,"item-index","item-index",2051641841,null),new cljs.core.Keyword(null,"selected-options","selected-options",1306833224),new cljs.core.Symbol(null,"category-path","category-path",-839479161,null)], null),new cljs.core.Symbol(null,"option","option",1705663799,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__15830__auto__;
}catch (e30900){var e = e30900;
throw e;
}}):(function (db,p__30901){
var vec__30902 = p__30901;
var _ = cljs.core.nth.call(null,vec__30902,(0),null);
var vec__30905 = cljs.core.nth.call(null,vec__30902,(1),null);
var item_index = cljs.core.nth.call(null,vec__30905,(0),null);
var category_path = vec__30905;
var option = cljs.core.nth.call(null,vec__30902,(2),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-items","selected-items",-558712488),item_index,new cljs.core.Keyword(null,"selected-options","selected-options",1306833224),category_path], null),option);
})));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("nw-calculator.events","set-quantity-multiplier","nw-calculator.events/set-quantity-multiplier",206711109),((day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null))?(function (db,p__30908){
var vec__30909 = p__30908;
var _ = cljs.core.nth.call(null,vec__30909,(0),null);
var item_index = cljs.core.nth.call(null,vec__30909,(1),null);
var multiplier = cljs.core.nth.call(null,vec__30909,(2),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"item-index","item-index",2051641841,null),new cljs.core.Symbol(null,"multiplier","multiplier",277847625,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-items","selected-items",-558712488),new cljs.core.Symbol(null,"item-index","item-index",2051641841,null),new cljs.core.Keyword(null,"quantity-multiplier","quantity-multiplier",-252611370)], null),new cljs.core.Symbol(null,"multiplier","multiplier",277847625,null))));

var result__15830__auto__ = cljs.core.assoc_in.call(null,(function (){var result__15830__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(2),new cljs.core.Keyword(null,"result","result",1415092211),result__15830__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__15830__auto__;
})(),(function (){var result__15830__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-items","selected-items",-558712488),(function (){var result__15830__auto__ = item_index;
day8.re_frame.debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(5),new cljs.core.Keyword(null,"result","result",1415092211),result__15830__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"item-index","item-index",2051641841,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__15830__auto__;
})(),new cljs.core.Keyword(null,"quantity-multiplier","quantity-multiplier",-252611370)], null);
day8.re_frame.debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(3),new cljs.core.Keyword(null,"result","result",1415092211),result__15830__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-items","selected-items",-558712488),new cljs.core.Symbol(null,"item-index","item-index",2051641841,null),new cljs.core.Keyword(null,"quantity-multiplier","quantity-multiplier",-252611370)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__15830__auto__;
})(),(function (){var result__15830__auto__ = multiplier;
day8.re_frame.debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(7),new cljs.core.Keyword(null,"result","result",1415092211),result__15830__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"multiplier","multiplier",277847625,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__15830__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__15830__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-items","selected-items",-558712488),new cljs.core.Symbol(null,"item-index","item-index",2051641841,null),new cljs.core.Keyword(null,"quantity-multiplier","quantity-multiplier",-252611370)], null),new cljs.core.Symbol(null,"multiplier","multiplier",277847625,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__15830__auto__;
}catch (e30912){var e = e30912;
throw e;
}}):(function (db,p__30913){
var vec__30914 = p__30913;
var _ = cljs.core.nth.call(null,vec__30914,(0),null);
var item_index = cljs.core.nth.call(null,vec__30914,(1),null);
var multiplier = cljs.core.nth.call(null,vec__30914,(2),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-items","selected-items",-558712488),item_index,new cljs.core.Keyword(null,"quantity-multiplier","quantity-multiplier",-252611370)], null),multiplier);
})));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("nw-calculator.events","add-empty-item","nw-calculator.events/add-empty-item",938385548),((day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null))?(function (db,_){
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"selected-items","selected-items",-558712488),new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol("df","empty-selected-item","df/empty-selected-item",-861378454,null))));

var result__15830__auto__ = cljs.core.update.call(null,(function (){var result__15830__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(2),new cljs.core.Keyword(null,"result","result",1415092211),result__15830__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__15830__auto__;
})(),new cljs.core.Keyword(null,"selected-items","selected-items",-558712488),(function (){var result__15830__auto__ = cljs.core.conj;
day8.re_frame.debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(4),new cljs.core.Keyword(null,"result","result",1415092211),result__15830__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__15830__auto__;
})(),(function (){var result__15830__auto__ = nw_calculator.defaults.empty_selected_item;
day8.re_frame.debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(5),new cljs.core.Keyword(null,"result","result",1415092211),result__15830__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("df","empty-selected-item","df/empty-selected-item",-861378454,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__15830__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__15830__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"selected-items","selected-items",-558712488),new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol("df","empty-selected-item","df/empty-selected-item",-861378454,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__15830__auto__;
}catch (e30917){var e = e30917;
throw e;
}}):(function (db,_){
return cljs.core.update.call(null,db,new cljs.core.Keyword(null,"selected-items","selected-items",-558712488),cljs.core.conj,nw_calculator.defaults.empty_selected_item);
})));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("nw-calculator.events","delete-item","nw-calculator.events/delete-item",1281141929),((day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null))?(function (db,p__30918){
var vec__30919 = p__30918;
var _ = cljs.core.nth.call(null,vec__30919,(0),null);
var item_index = cljs.core.nth.call(null,vec__30919,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"item-index","item-index",2051641841,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"selected-items","selected-items",-558712488),new cljs.core.Symbol("util","vec-remove-nth","util/vec-remove-nth",518941440,null),new cljs.core.Symbol(null,"item-index","item-index",2051641841,null))));

var result__15830__auto__ = cljs.core.update.call(null,(function (){var result__15830__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(2),new cljs.core.Keyword(null,"result","result",1415092211),result__15830__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__15830__auto__;
})(),new cljs.core.Keyword(null,"selected-items","selected-items",-558712488),(function (){var result__15830__auto__ = nw_calculator.utilities.vec_remove_nth;
day8.re_frame.debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(4),new cljs.core.Keyword(null,"result","result",1415092211),result__15830__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("util","vec-remove-nth","util/vec-remove-nth",518941440,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__15830__auto__;
})(),(function (){var result__15830__auto__ = item_index;
day8.re_frame.debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(5),new cljs.core.Keyword(null,"result","result",1415092211),result__15830__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"item-index","item-index",2051641841,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__15830__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__15830__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"selected-items","selected-items",-558712488),new cljs.core.Symbol("util","vec-remove-nth","util/vec-remove-nth",518941440,null),new cljs.core.Symbol(null,"item-index","item-index",2051641841,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__15830__auto__;
}catch (e30922){var e = e30922;
throw e;
}}):(function (db,p__30923){
var vec__30924 = p__30923;
var _ = cljs.core.nth.call(null,vec__30924,(0),null);
var item_index = cljs.core.nth.call(null,vec__30924,(1),null);
return cljs.core.update.call(null,db,new cljs.core.Keyword(null,"selected-items","selected-items",-558712488),nw_calculator.utilities.vec_remove_nth,item_index);
})));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("nw-calculator.events","remove-all-items","nw-calculator.events/remove-all-items",-838768872),((day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null))?(function (db,_){
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"selected-items","selected-items",-558712488),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("df","empty-selected-item","df/empty-selected-item",-861378454,null)], null))));

var result__15830__auto__ = cljs.core.assoc.call(null,(function (){var result__15830__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(2),new cljs.core.Keyword(null,"result","result",1415092211),result__15830__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__15830__auto__;
})(),new cljs.core.Keyword(null,"selected-items","selected-items",-558712488),(function (){var result__15830__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var result__15830__auto__ = nw_calculator.defaults.empty_selected_item;
day8.re_frame.debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(5),new cljs.core.Keyword(null,"result","result",1415092211),result__15830__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("df","empty-selected-item","df/empty-selected-item",-861378454,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__15830__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(4),new cljs.core.Keyword(null,"result","result",1415092211),result__15830__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("df","empty-selected-item","df/empty-selected-item",-861378454,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__15830__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__15830__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"selected-items","selected-items",-558712488),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("df","empty-selected-item","df/empty-selected-item",-861378454,null)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__15830__auto__;
}catch (e30927){var e = e30927;
throw e;
}}):(function (db,_){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"selected-items","selected-items",-558712488),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.defaults.empty_selected_item], null));
})));

//# sourceMappingURL=events.js.map
