// Compiled by ClojureScript 1.10.879 {:optimizations :none}
goog.provide('nw_calculator.effects');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('taoensso.timbre');
goog.require('nw_calculator.utilities');
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("nw-calculator.effects","log-info","nw-calculator.effects/log-info",1892956088),(function (msgs){
return cljs.core.apply.call(null,taoensso.timbre.info,msgs);
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("nw-calculator.effects","search","nw-calculator.effects/search",2007528780),(function (p__28813){
var map__28814 = p__28813;
var map__28814__$1 = cljs.core.__destructure_map.call(null,map__28814);
var items_by_id = cljs.core.get.call(null,map__28814__$1,new cljs.core.Keyword(null,"items-by-id","items-by-id",-344278138));
var query = cljs.core.get.call(null,map__28814__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var on_success = cljs.core.get.call(null,map__28814__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var search_results = cljs.core.vec.call(null,cljs.core.take.call(null,(10),cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.first,(function (p1__28812_SHARP_){
return nw_calculator.utilities.fuzzy_search.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28812_SHARP_], null),query);
}),new cljs.core.Keyword(null,"name","name",1843675177),nw_calculator.utilities.craftable_item),cljs.core.vals.call(null,items_by_id))));
return re_frame.core.dispatch.call(null,cljs.core.conj.call(null,on_success,search_results));
}));

//# sourceMappingURL=effects.js.map
