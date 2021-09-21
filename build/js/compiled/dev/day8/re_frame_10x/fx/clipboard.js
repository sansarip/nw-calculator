// Compiled by ClojureScript 1.10.879 {:optimizations :none}
goog.provide('day8.re_frame_10x.fx.clipboard');
goog.require('cljs.core');
day8.re_frame_10x.fx.clipboard.copy_BANG_ = (function day8$re_frame_10x$fx$clipboard$copy_BANG_(text){
var el = document.createElement("textarea");
(el.value = text);

(el.style.position = "absolute");

(el.style.left = "-9999px");

document.body.appendChild(el);

el.select();

document.execCommand("copy");

return document.body.removeChild(el);
});

//# sourceMappingURL=clipboard.js.map
