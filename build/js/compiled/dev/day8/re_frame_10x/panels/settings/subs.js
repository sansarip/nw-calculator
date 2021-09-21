// Compiled by ClojureScript 1.10.879 {:optimizations :none}
goog.provide('day8.re_frame_10x.panels.settings.subs');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core');
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","root","day8.re-frame-10x.panels.settings.subs/root",-2012357833),(function (p__36576,_){
var map__36577 = p__36576;
var map__36577__$1 = cljs.core.__destructure_map.call(null,map__36577);
var settings = cljs.core.get.call(null,map__36577__$1,new cljs.core.Keyword(null,"settings","settings",1556144875));
return settings;
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","panel-width%","day8.re-frame-10x.panels.settings.subs/panel-width%",1546996863),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","root","day8.re-frame-10x.panels.settings.subs/root",-2012357833)], null),(function (p__36578,_){
var map__36579 = p__36578;
var map__36579__$1 = cljs.core.__destructure_map.call(null,map__36579);
var panel_width_PERCENT_ = cljs.core.get.call(null,map__36579__$1,new cljs.core.Keyword(null,"panel-width%","panel-width%",-110515341));
return panel_width_PERCENT_;
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","panel-width%-rounded","day8.re-frame-10x.panels.settings.subs/panel-width%-rounded",16963626),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","panel-width%","day8.re-frame-10x.panels.settings.subs/panel-width%",1546996863)], null),(function (panel_width_PERCENT_,p__36580){
var vec__36581 = p__36580;
var _ = cljs.core.nth.call(null,vec__36581,(0),null);
var n = cljs.core.nth.call(null,vec__36581,(1),null);
return ((Math.ceil(((panel_width_PERCENT_ * (100)) / n)) * n) / 100.0);
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","window-width","day8.re-frame-10x.panels.settings.subs/window-width",419613467),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","root","day8.re-frame-10x.panels.settings.subs/root",-2012357833)], null),(function (p__36584,_){
var map__36585 = p__36584;
var map__36585__$1 = cljs.core.__destructure_map.call(null,map__36585);
var window_width = cljs.core.get.call(null,map__36585__$1,new cljs.core.Keyword(null,"window-width","window-width",2057825599));
return window_width;
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","window-width-rounded","day8.re-frame-10x.panels.settings.subs/window-width-rounded",193095108),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","window-width","day8.re-frame-10x.panels.settings.subs/window-width",419613467)], null),(function (width,p__36586){
var vec__36587 = p__36586;
var _ = cljs.core.nth.call(null,vec__36587,(0),null);
var n = cljs.core.nth.call(null,vec__36587,(1),null);
return (Math.ceil((width / n)) * n);
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","show-panel?","day8.re-frame-10x.panels.settings.subs/show-panel?",-1305358312),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","root","day8.re-frame-10x.panels.settings.subs/root",-2012357833)], null),(function (p__36590,_){
var map__36591 = p__36590;
var map__36591__$1 = cljs.core.__destructure_map.call(null,map__36591);
var show_panel_QMARK_ = cljs.core.get.call(null,map__36591__$1,new cljs.core.Keyword(null,"show-panel?","show-panel?",1475128892));
return show_panel_QMARK_;
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","showing-settings?","day8.re-frame-10x.panels.settings.subs/showing-settings?",1700568638),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","root","day8.re-frame-10x.panels.settings.subs/root",-2012357833)], null),(function (p__36592,_){
var map__36593 = p__36592;
var map__36593__$1 = cljs.core.__destructure_map.call(null,map__36593);
var showing_settings_QMARK_ = cljs.core.get.call(null,map__36593__$1,new cljs.core.Keyword(null,"showing-settings?","showing-settings?",-140540878));
return showing_settings_QMARK_;
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","selected-tab","day8.re-frame-10x.panels.settings.subs/selected-tab",1020534208),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","root","day8.re-frame-10x.panels.settings.subs/root",-2012357833)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","showing-settings?","day8.re-frame-10x.panels.settings.subs/showing-settings?",1700568638)], null),(function (p__36594,_){
var vec__36595 = p__36594;
var map__36598 = cljs.core.nth.call(null,vec__36595,(0),null);
var map__36598__$1 = cljs.core.__destructure_map.call(null,map__36598);
var selected_tab = cljs.core.get.call(null,map__36598__$1,new cljs.core.Keyword(null,"selected-tab","selected-tab",-1558510156));
var showing_settings_QMARK_ = cljs.core.nth.call(null,vec__36595,(1),null);
if(cljs.core.truth_(showing_settings_QMARK_)){
return new cljs.core.Keyword(null,"settings","settings",1556144875);
} else {
return selected_tab;
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","number-of-retained-epochs","day8.re-frame-10x.panels.settings.subs/number-of-retained-epochs",-789938705),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","root","day8.re-frame-10x.panels.settings.subs/root",-2012357833)], null),(function (p__36599,_){
var map__36600 = p__36599;
var map__36600__$1 = cljs.core.__destructure_map.call(null,map__36600);
var number_of_epochs = cljs.core.get.call(null,map__36600__$1,new cljs.core.Keyword(null,"number-of-epochs","number-of-epochs",57769252));
return number_of_epochs;
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","ignored-events","day8.re-frame-10x.panels.settings.subs/ignored-events",216559761),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","root","day8.re-frame-10x.panels.settings.subs/root",-2012357833)], null),(function (p__36601,_){
var map__36602 = p__36601;
var map__36602__$1 = cljs.core.__destructure_map.call(null,map__36602);
var ignored_events = cljs.core.get.call(null,map__36602__$1,new cljs.core.Keyword(null,"ignored-events","ignored-events",1738756589));
return cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"sort","sort",953465918),cljs.core.vals.call(null,ignored_events));
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","filtered-view-trace","day8.re-frame-10x.panels.settings.subs/filtered-view-trace",-192195211),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","root","day8.re-frame-10x.panels.settings.subs/root",-2012357833)], null),(function (p__36603,_){
var map__36604 = p__36603;
var map__36604__$1 = cljs.core.__destructure_map.call(null,map__36604);
var filtered_view_trace = cljs.core.get.call(null,map__36604__$1,new cljs.core.Keyword(null,"filtered-view-trace","filtered-view-trace",-901876599));
return cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"sort","sort",953465918),cljs.core.vals.call(null,filtered_view_trace));
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","low-level-trace","day8.re-frame-10x.panels.settings.subs/low-level-trace",-929378536),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","root","day8.re-frame-10x.panels.settings.subs/root",-2012357833)], null),(function (p__36605,_){
var map__36606 = p__36605;
var map__36606__$1 = cljs.core.__destructure_map.call(null,map__36606);
var low_level_trace = cljs.core.get.call(null,map__36606__$1,new cljs.core.Keyword(null,"low-level-trace","low-level-trace",638447092));
return low_level_trace;
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","debug?","day8.re-frame-10x.panels.settings.subs/debug?",-1124155521),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","root","day8.re-frame-10x.panels.settings.subs/root",-2012357833)], null),(function (p__36607,_){
var map__36608 = p__36607;
var map__36608__$1 = cljs.core.__destructure_map.call(null,map__36608);
var debug_QMARK_ = cljs.core.get.call(null,map__36608__$1,new cljs.core.Keyword(null,"debug?","debug?",-1831756173));
return debug_QMARK_;
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","app-db-follows-events?","day8.re-frame-10x.panels.settings.subs/app-db-follows-events?",1075206342),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","root","day8.re-frame-10x.panels.settings.subs/root",-2012357833)], null),(function (p__36609,_){
var map__36610 = p__36609;
var map__36610__$1 = cljs.core.__destructure_map.call(null,map__36610);
var app_db_follows_events_QMARK_ = cljs.core.get.call(null,map__36610__$1,new cljs.core.Keyword(null,"app-db-follows-events?","app-db-follows-events?",-1566738462));
return app_db_follows_events_QMARK_;
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","ambiance","day8.re-frame-10x.panels.settings.subs/ambiance",-230258012),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","root","day8.re-frame-10x.panels.settings.subs/root",-2012357833)], null),(function (p__36611,_){
var map__36612 = p__36611;
var map__36612__$1 = cljs.core.__destructure_map.call(null,map__36612);
var ambiance = cljs.core.get.call(null,map__36612__$1,new cljs.core.Keyword(null,"ambiance","ambiance",-1936594032));
return ambiance;
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","syntax-color-scheme","day8.re-frame-10x.panels.settings.subs/syntax-color-scheme",-661033240),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","root","day8.re-frame-10x.panels.settings.subs/root",-2012357833)], null),(function (p__36613,_){
var map__36614 = p__36613;
var map__36614__$1 = cljs.core.__destructure_map.call(null,map__36614);
var syntax_color_scheme = cljs.core.get.call(null,map__36614__$1,new cljs.core.Keyword(null,"syntax-color-scheme","syntax-color-scheme",2062388740));
return syntax_color_scheme;
}));

//# sourceMappingURL=subs.js.map
