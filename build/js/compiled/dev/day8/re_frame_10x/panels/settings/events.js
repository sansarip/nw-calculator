// Compiled by ClojureScript 1.10.879 {:optimizations :none}
goog.provide('day8.re_frame_10x.panels.settings.events');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core');
goog.require('day8.re_frame_10x.fx.local_storage');
goog.require('day8.re_frame_10x.fx.trace');
goog.require('day8.re_frame_10x.tools.reader.edn');
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","panel-width%","day8.re-frame-10x.panels.settings.events/panel-width%",-569115915),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"panel-width%","panel-width%",-110515341)], null)),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.trim_v,day8.re_frame_10x.fx.local_storage.save.call(null,"panel-width-ratio")], null),(function (_,p__36747){
var vec__36748 = p__36747;
var width_PERCENT_ = cljs.core.nth.call(null,vec__36748,(0),null);
var x__4295__auto__ = width_PERCENT_;
var y__4296__auto__ = 0.05;
return ((x__4295__auto__ > y__4296__auto__) ? x__4295__auto__ : y__4296__auto__);
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","window-width","day8.re-frame-10x.panels.settings.events/window-width",-1771897871),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"window-width","window-width",2057825599)], null)),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.trim_v], null),(function (_,p__36751){
var vec__36752 = p__36751;
var width = cljs.core.nth.call(null,vec__36752,(0),null);
return width;
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","selected-tab","day8.re-frame-10x.panels.settings.events/selected-tab",-17590986),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"selected-tab","selected-tab",-1558510156)], null)),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.trim_v,day8.re_frame_10x.fx.local_storage.save.call(null,"selected-tab")], null),(function (_,p__36755){
var vec__36756 = p__36755;
var selected_tab = cljs.core.nth.call(null,vec__36756,(0),null);
return selected_tab;
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","toggle","day8.re-frame-10x.panels.settings.events/toggle",-388660368),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"showing-settings?","showing-settings?",-140540878)], null))], null),(function (showing_QMARK_,_){
return cljs.core.not.call(null,showing_QMARK_);
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","show-panel?","day8.re-frame-10x.panels.settings.events/show-panel?",1007877818),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"show-panel?","show-panel?",1475128892)], null)),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.trim_v,day8.re_frame_10x.fx.local_storage.save.call(null,"show-panel")], null),(function (_,p__36759){
var vec__36760 = p__36759;
var show_panel_QMARK_ = cljs.core.nth.call(null,vec__36760,(0),null);
return show_panel_QMARK_;
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","factory-reset","day8.re-frame-10x.panels.settings.events/factory-reset",880771998),(function (db,_){
day8.re_frame_10x.fx.local_storage.delete_all_keys_BANG_.call(null);

location.reload();

return db;
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","set-ambiance","day8.re-frame-10x.panels.settings.events/set-ambiance",1852620827),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"ambiance","ambiance",-1936594032)], null)),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.trim_v,day8.re_frame_10x.fx.local_storage.save.call(null,"ambiance")], null),(function (_,p__36763){
var vec__36764 = p__36763;
var ambiance = cljs.core.nth.call(null,vec__36764,(0),null);
return ambiance;
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","set-syntax-color-scheme","day8.re-frame-10x.panels.settings.events/set-syntax-color-scheme",1780603652),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"syntax-color-scheme","syntax-color-scheme",2062388740)], null)),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.trim_v,day8.re_frame_10x.fx.local_storage.save.call(null,"syntax-color-scheme")], null),(function (_,p__36767){
var vec__36768 = p__36767;
var syntax_color_scheme = cljs.core.nth.call(null,vec__36768,(0),null);
return syntax_color_scheme;
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","set-number-of-retained-epochs","day8.re-frame-10x.panels.settings.events/set-number-of-retained-epochs",-813421569),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"number-of-epochs","number-of-epochs",57769252)], null)),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.trim_v,day8.re_frame_10x.fx.local_storage.save.call(null,"retained-epochs")], null),(function (_,p__36771){
var vec__36772 = p__36771;
var num_str = cljs.core.nth.call(null,vec__36772,(0),null);
var num = parseInt(num_str);
var num__$1 = ((((cljs.core.not.call(null,isNaN(num))) && (cljs.core.pos_int_QMARK_.call(null,num))))?num:(5));
return num__$1;
}));
day8.re_frame_10x.panels.settings.events.ignored_event_interceptors = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"ignored-events","ignored-events",1738756589)], null)),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.trim_v,day8.re_frame_10x.fx.local_storage.save.call(null,"ignored-events")], null);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","add-ignored-event","day8.re-frame-10x.panels.settings.events/add-ignored-event",-92168870),day8.re_frame_10x.panels.settings.events.ignored_event_interceptors,(function (ignored_events,_){
var id = cljs.core.random_uuid.call(null);
return cljs.core.assoc.call(null,ignored_events,id,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"event-str","event-str",381347778),"",new cljs.core.Keyword(null,"event-id","event-id",2130210178),null,new cljs.core.Keyword(null,"sort","sort",953465918),Date.now()], null));
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","remove-ignored-event","day8.re-frame-10x.panels.settings.events/remove-ignored-event",252246704),day8.re_frame_10x.panels.settings.events.ignored_event_interceptors,(function (ignored_events,p__36775){
var vec__36776 = p__36775;
var id = cljs.core.nth.call(null,vec__36776,(0),null);
return cljs.core.dissoc.call(null,ignored_events,id);
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","update-ignored-event","day8.re-frame-10x.panels.settings.events/update-ignored-event",789804124),day8.re_frame_10x.panels.settings.events.ignored_event_interceptors,(function (ignored_events,p__36779){
var vec__36780 = p__36779;
var id = cljs.core.nth.call(null,vec__36780,(0),null);
var event_str = cljs.core.nth.call(null,vec__36780,(1),null);
var event = day8.re_frame_10x.tools.reader.edn.read_string_maybe.call(null,event_str);
return cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,ignored_events,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"event-str","event-str",381347778)], null),event_str),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"event-id","event-id",2130210178)], null),(function (old_event){
if(cljs.core.truth_(event)){
return event;
} else {
return old_event;
}
}));
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","set-ignored-events","day8.re-frame-10x.panels.settings.events/set-ignored-events",-970331242),day8.re_frame_10x.panels.settings.events.ignored_event_interceptors,(function (_,p__36783){
var vec__36784 = p__36783;
var ignored_events = cljs.core.nth.call(null,vec__36784,(0),null);
return ignored_events;
}));
day8.re_frame_10x.panels.settings.events.filtered_view_trace_interceptors = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"filtered-view-trace","filtered-view-trace",-901876599)], null)),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.trim_v,day8.re_frame_10x.fx.local_storage.save.call(null,"filtered-view-trace")], null);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","add-filtered-view-trace","day8.re-frame-10x.panels.settings.events/add-filtered-view-trace",937947584),day8.re_frame_10x.panels.settings.events.filtered_view_trace_interceptors,(function (filtered_view_trace,_){
var id = cljs.core.random_uuid.call(null);
return cljs.core.assoc.call(null,filtered_view_trace,id,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499),"",new cljs.core.Keyword(null,"ns","ns",441598760),null,new cljs.core.Keyword(null,"sort","sort",953465918),Date.now()], null));
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","remove-filtered-view-trace","day8.re-frame-10x.panels.settings.events/remove-filtered-view-trace",2058604246),day8.re_frame_10x.panels.settings.events.filtered_view_trace_interceptors,(function (filtered_view_trace,p__36787){
var vec__36788 = p__36787;
var id = cljs.core.nth.call(null,vec__36788,(0),null);
return cljs.core.dissoc.call(null,filtered_view_trace,id);
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","update-filtered-view-trace","day8.re-frame-10x.panels.settings.events/update-filtered-view-trace",598201221),day8.re_frame_10x.panels.settings.events.filtered_view_trace_interceptors,(function (filtered_view_trace,p__36791){
var vec__36792 = p__36791;
var id = cljs.core.nth.call(null,vec__36792,(0),null);
var ns_str = cljs.core.nth.call(null,vec__36792,(1),null);
var event = day8.re_frame_10x.tools.reader.edn.read_string_maybe.call(null,ns_str);
return cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,filtered_view_trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499)], null),ns_str),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"ns","ns",441598760)], null),(function (old_event){
if(cljs.core.truth_(event)){
return event;
} else {
return old_event;
}
}));
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","set-filtered-view-trace","day8.re-frame-10x.panels.settings.events/set-filtered-view-trace",-1786377461),day8.re_frame_10x.panels.settings.events.filtered_view_trace_interceptors,(function (_,p__36795){
var vec__36796 = p__36795;
var ignored_events = cljs.core.nth.call(null,vec__36796,(0),null);
return ignored_events;
}));
day8.re_frame_10x.panels.settings.events.low_level_trace_interceptors = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"low-level-trace","low-level-trace",638447092)], null)),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.trim_v,day8.re_frame_10x.fx.local_storage.save.call(null,"low-level-trace")], null);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","set-low-level-trace","day8.re-frame-10x.panels.settings.events/set-low-level-trace",2138640985),day8.re_frame_10x.panels.settings.events.low_level_trace_interceptors,(function (_,p__36799){
var vec__36800 = p__36799;
var low_level = cljs.core.nth.call(null,vec__36800,(0),null);
return low_level;
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","low-level-trace","day8.re-frame-10x.panels.settings.events/low-level-trace",1236991858),day8.re_frame_10x.panels.settings.events.low_level_trace_interceptors,(function (low_level,p__36803){
var vec__36804 = p__36803;
var trace_type = cljs.core.nth.call(null,vec__36804,(0),null);
var capture_QMARK_ = cljs.core.nth.call(null,vec__36804,(1),null);
return cljs.core.assoc.call(null,low_level,trace_type,capture_QMARK_);
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","debug?","day8.re-frame-10x.panels.settings.events/debug?",790572533),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"debug?","debug?",-1831756173)], null)),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.trim_v], null),(function (_,p__36807){
var vec__36808 = p__36807;
var debug_QMARK_ = cljs.core.nth.call(null,vec__36808,(0),null);
return debug_QMARK_;
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","app-db-follows-events?","day8.re-frame-10x.panels.settings.events/app-db-follows-events?",-1040848496),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"app-db-follows-events?","app-db-follows-events?",-1566738462)], null)),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.trim_v,day8.re_frame_10x.fx.local_storage.save.call(null,"app-db-follows-events?")], null),(function (_,p__36811){
var vec__36812 = p__36811;
var follows_events_QMARK_ = cljs.core.nth.call(null,vec__36812,(0),null);
return follows_events_QMARK_;
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","external-window-dimensions","day8.re-frame-10x.panels.settings.events/external-window-dimensions",-1468897580),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"external-window-dimensions","external-window-dimensions",-1264257454)], null)),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.trim_v,day8.re_frame_10x.fx.local_storage.save.call(null,"external-window-dimensions")], null),(function (_,p__36815){
var vec__36816 = p__36815;
var external_window_dimensions = cljs.core.nth.call(null,vec__36816,(0),null);
return external_window_dimensions;
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","external-window-resize","day8.re-frame-10x.panels.settings.events/external-window-resize",-1765520744),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"external-window-dimensions","external-window-dimensions",-1264257454)], null)),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.unwrap,day8.re_frame_10x.fx.local_storage.save.call(null,"external-window-dimensions")], null),(function (external_window_dimensions,p__36819){
var map__36820 = p__36819;
var map__36820__$1 = cljs.core.__destructure_map.call(null,map__36820);
var width = cljs.core.get.call(null,map__36820__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__36820__$1,new cljs.core.Keyword(null,"height","height",1025178622));
return cljs.core.assoc.call(null,external_window_dimensions,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height);
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","external-window-position","day8.re-frame-10x.panels.settings.events/external-window-position",1498755641),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"external-window-dimensions","external-window-dimensions",-1264257454)], null)),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.unwrap,day8.re_frame_10x.fx.local_storage.save.call(null,"external-window-dimensions")], null),(function (external_window_dimensions,p__36821){
var map__36822 = p__36821;
var map__36822__$1 = cljs.core.__destructure_map.call(null,map__36822);
var left = cljs.core.get.call(null,map__36822__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var top = cljs.core.get.call(null,map__36822__$1,new cljs.core.Keyword(null,"top","top",-1856271961));
return cljs.core.assoc.call(null,external_window_dimensions,new cljs.core.Keyword(null,"left","left",-399115937),left,new cljs.core.Keyword(null,"top","top",-1856271961),top);
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","user-toggle-panel","day8.re-frame-10x.panels.settings.events/user-toggle-panel",719619220),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875)], null)),day8.re_frame_10x.fx.local_storage.save.call(null,"using-trace?",new cljs.core.Keyword(null,"using-trace?","using-trace?",2036904112)),day8.re_frame_10x.fx.local_storage.save.call(null,"show-panel",new cljs.core.Keyword(null,"show-panel?","show-panel?",1475128892))], null),(function (p__36823,_){
var map__36824 = p__36823;
var map__36824__$1 = cljs.core.__destructure_map.call(null,map__36824);
var settings = cljs.core.get.call(null,map__36824__$1,new cljs.core.Keyword(null,"db","db",993250759));
var now_showing_QMARK_ = cljs.core.not.call(null,cljs.core.get.call(null,settings,new cljs.core.Keyword(null,"show-panel?","show-panel?",1475128892)));
var external_panel_QMARK_ = cljs.core.get.call(null,settings,new cljs.core.Keyword(null,"external-window?","external-window?",-1259873803));
var using_trace_QMARK_ = (function (){var or__4212__auto__ = external_panel_QMARK_;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return now_showing_QMARK_;
}
})();
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,cljs.core.assoc.call(null,settings,new cljs.core.Keyword(null,"using-trace?","using-trace?",2036904112),using_trace_QMARK_),new cljs.core.Keyword(null,"show-panel?","show-panel?",1475128892),now_showing_QMARK_)], null),((now_showing_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("day8.re-frame-10x.fx.trace","enable","day8.re-frame-10x.fx.trace/enable",-1468830594),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","cb","day8.re-frame-10x.panels.settings.events/cb",1188066371)], null)], null):(cljs.core.truth_(external_panel_QMARK_)?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("day8.re-frame-10x.fx.trace","disable","day8.re-frame-10x.fx.trace/disable",-463610394),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","cb","day8.re-frame-10x.panels.settings.events/cb",1188066371)], null)], null))));
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","enable-tracing","day8.re-frame-10x.panels.settings.events/enable-tracing",-277800550),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("day8.re-frame-10x.fx.trace","enable","day8.re-frame-10x.fx.trace/enable",-1468830594),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","cb","day8.re-frame-10x.panels.settings.events/cb",1188066371)], null)], null);
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","disable-tracing","day8.re-frame-10x.panels.settings.events/disable-tracing",941542458),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("day8.re-frame-10x.fx.trace","disable","day8.re-frame-10x.fx.trace/disable",-463610394),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","cb","day8.re-frame-10x.panels.settings.events/cb",1188066371)], null)], null);
}));

//# sourceMappingURL=events.js.map
