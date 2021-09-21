// Compiled by ClojureScript 1.10.879 {:optimizations :none}
goog.provide('day8.re_frame_10x.tools.reader.edn');
goog.require('cljs.core');
goog.require('cljs.tools.reader.edn');
day8.re_frame_10x.tools.reader.edn.default_readers = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"uuid","uuid",-504564192,null),(function day8$re_frame_10x$tools$reader$edn$default_uuid_reader(form){
if(typeof form === 'string'){
} else {
throw (new Error("Assert failed: (string? form)"));
}

return cljs.core.uuid.call(null,form);
})], null);
day8.re_frame_10x.tools.reader.edn.read_string_maybe = (function day8$re_frame_10x$tools$reader$edn$read_string_maybe(s){
try{return cljs.tools.reader.edn.read_string.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"readers","readers",-2118263030),day8.re_frame_10x.tools.reader.edn.default_readers], null),s);
}catch (e36534){var _ = e36534;
return null;
}});

//# sourceMappingURL=edn.js.map
