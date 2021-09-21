// Compiled by ClojureScript 1.10.879 {:optimizations :none}
goog.provide('edamame.impl.parser');
goog.require('cljs.core');
goog.require('cljs.tools.reader.edn');
goog.require('cljs.tools.reader.reader_types');
goog.require('cljs.tools.reader.impl.inspect');
goog.require('cljs.tools.reader.impl.utils');
goog.require('cljs.tools.reader.impl.commons');
goog.require('clojure.string');
goog.require('edamame.impl.read_fn');
goog.require('edamame.impl.syntax_quote');
goog.require('goog.string.StringBuffer');
edamame.impl.parser.edn_read = (function edamame$impl$parser$edn_read(ctx,reader){
var tools_reader_opts = new cljs.core.Keyword("tools.reader","opts","tools.reader/opts",-2121810901).cljs$core$IFn$_invoke$arity$1(ctx);
return cljs.tools.reader.edn.read.call(null,tools_reader_opts,reader);
});
edamame.impl.parser.dispatch_macro_QMARK_ = (function edamame$impl$parser$dispatch_macro_QMARK_(ch){
return cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, ["!",null,"\"",null,"#",null,"'",null,"(",null,":",null,"{",null,"^",null,"?",null,"_",null], null), null),ch);
});
edamame.impl.parser.read_token = new cljs.core.Var(function(){return cljs.tools.reader.edn.read_token;},new cljs.core.Symbol("cljs.tools.reader.edn","read-token","cljs.tools.reader.edn/read-token",-1809266548,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.tools.reader.edn","cljs.tools.reader.edn",-1275821532,null),new cljs.core.Symbol(null,"read-token","read-token",392624627,null),"resources/public/js/compiled/dev/cljs/tools/reader/edn.cljs",18,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),false,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),4,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),4,new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rdr","rdr",190007785,null),new cljs.core.Symbol(null,"kind","kind",923265724,null),new cljs.core.Symbol(null,"initch","initch",946908919,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rdr","rdr",190007785,null),new cljs.core.Symbol(null,"kind","kind",923265724,null),new cljs.core.Symbol(null,"initch","initch",946908919,null),new cljs.core.Symbol(null,"validate-leading?","validate-leading?",1185429770,null)], null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rdr","rdr",190007785,null),new cljs.core.Symbol(null,"kind","kind",923265724,null),new cljs.core.Symbol(null,"initch","initch",946908919,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rdr","rdr",190007785,null),new cljs.core.Symbol(null,"kind","kind",923265724,null),new cljs.core.Symbol(null,"initch","initch",946908919,null),new cljs.core.Symbol(null,"validate-leading?","validate-leading?",1185429770,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null)], null),1,42,42,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rdr","rdr",190007785,null),new cljs.core.Symbol(null,"kind","kind",923265724,null),new cljs.core.Symbol(null,"initch","initch",946908919,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rdr","rdr",190007785,null),new cljs.core.Symbol(null,"kind","kind",923265724,null),new cljs.core.Symbol(null,"initch","initch",946908919,null),new cljs.core.Symbol(null,"validate-leading?","validate-leading?",1185429770,null)], null)),null,(cljs.core.truth_(cljs.tools.reader.edn.read_token)?cljs.tools.reader.edn.read_token.cljs$lang$test:null)]));
edamame.impl.parser.parse_symbol = new cljs.core.Var(function(){return cljs.tools.reader.impl.commons.parse_symbol;},new cljs.core.Symbol("cljs.tools.reader.impl.commons","parse-symbol","cljs.tools.reader.impl.commons/parse-symbol",-903976395,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.tools.reader.impl.commons","cljs.tools.reader.impl.commons",1569241026,null),new cljs.core.Symbol(null,"parse-symbol","parse-symbol",1608073451,null),"resources/public/js/compiled/dev/cljs/tools/reader/impl/commons.cljs",19,1,97,97,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"token","token",429068312,null)], null)),"Parses a string into a vector of the namespace and symbol",(cljs.core.truth_(cljs.tools.reader.impl.commons.parse_symbol)?cljs.tools.reader.impl.commons.parse_symbol.cljs$lang$test:null)]));
edamame.impl.parser.location = (function edamame$impl$parser$location(reader){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"row","row",-570139521),cljs.tools.reader.reader_types.get_line_number.call(null,reader),new cljs.core.Keyword(null,"col","col",-1959363084),cljs.tools.reader.reader_types.get_column_number.call(null,reader)], null);
});
edamame.impl.parser.kw_identical_QMARK_ = (function edamame$impl$parser$kw_identical_QMARK_(kw,v){
return cljs.core.keyword_identical_QMARK_.call(null,kw,v);
});
edamame.impl.parser.parse_comment = (function edamame$impl$parser$parse_comment(reader){
cljs.tools.reader.reader_types.read_line.call(null,reader);

return reader;
});
edamame.impl.parser.whitespace_QMARK_ = (function edamame$impl$parser$whitespace_QMARK_(c){
var and__4210__auto__ = c;
if(cljs.core.truth_(and__4210__auto__)){
return ((-1) < ["\r","\n","\t"," ",","].indexOf(c));
} else {
return and__4210__auto__;
}
});
/**
 * Skips whitespace. Returns reader. If end of stream is reached, returns nil.
 */
edamame.impl.parser.skip_whitespace = (function edamame$impl$parser$skip_whitespace(_ctx,reader){
while(true){
var temp__5753__auto__ = cljs.tools.reader.reader_types.read_char.call(null,reader);
if(cljs.core.truth_(temp__5753__auto__)){
var c = temp__5753__auto__;
if(cljs.core.truth_(edamame.impl.parser.whitespace_QMARK_.call(null,c))){
continue;
} else {
cljs.tools.reader.reader_types.unread.call(null,reader,c);

return reader;
}
} else {
return null;
}
break;
}
});
/**
 * Throw reader exception, including line line/column. line/column is
 *   read from the reader but it can be overriden by passing loc
 *   optional parameter.
 */
edamame.impl.parser.throw_reader = (function edamame$impl$parser$throw_reader(var_args){
var G__38378 = arguments.length;
switch (G__38378) {
case 2:
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$2 = (function (reader,msg){
return edamame.impl.parser.throw_reader.call(null,reader,msg,null);
}));

(edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$3 = (function (reader,msg,data){
return edamame.impl.parser.throw_reader.call(null,reader,msg,data,null);
}));

(edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$4 = (function (reader,msg,data,loc){
var c = new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$2(loc,cljs.tools.reader.reader_types.get_column_number.call(null,reader));
var l = new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$2(loc,cljs.tools.reader.reader_types.get_line_number.call(null,reader));
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)," [at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(l),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c),"]"].join(''),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("edamame","error","edamame/error",882529634),new cljs.core.Keyword(null,"row","row",-570139521),l,new cljs.core.Keyword(null,"col","col",-1959363084),c], null),data));
}));

(edamame.impl.parser.throw_reader.cljs$lang$maxFixedArity = 4);

edamame.impl.parser.non_match = new cljs.core.Keyword("edamame.impl.parser","nil","edamame.impl.parser/nil",-841451036);
edamame.impl.parser.non_match_QMARK_ = (function edamame$impl$parser$non_match_QMARK_(v){
return edamame.impl.parser.kw_identical_QMARK_.call(null,v,edamame.impl.parser.non_match);
});
edamame.impl.parser.parse_to_delimiter = (function edamame$impl$parser$parse_to_delimiter(var_args){
var G__38381 = arguments.length;
switch (G__38381) {
case 3:
return edamame.impl.parser.parse_to_delimiter.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return edamame.impl.parser.parse_to_delimiter.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(edamame.impl.parser.parse_to_delimiter.cljs$core$IFn$_invoke$arity$3 = (function (ctx,reader,delimiter){
return edamame.impl.parser.parse_to_delimiter.call(null,ctx,reader,delimiter,cljs.core.PersistentVector.EMPTY);
}));

(edamame.impl.parser.parse_to_delimiter.cljs$core$IFn$_invoke$arity$4 = (function (ctx,reader,delimiter,into){
var row = cljs.tools.reader.reader_types.get_line_number.call(null,reader);
var col = cljs.tools.reader.reader_types.get_column_number.call(null,reader);
var opened = cljs.tools.reader.reader_types.read_char.call(null,reader);
var ctx__$1 = cljs.core.assoc.call(null,ctx,new cljs.core.Keyword("edamame.impl.parser","expected-delimiter","edamame.impl.parser/expected-delimiter",2057965803),delimiter,new cljs.core.Keyword("edamame.impl.parser","opened-delimiter","edamame.impl.parser/opened-delimiter",1199661648),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"char","char",-641587586),opened,new cljs.core.Keyword(null,"row","row",-570139521),row,new cljs.core.Keyword(null,"col","col",-1959363084),col], null));
var vals = cljs.core.transient$.call(null,into);
while(true){
var next_val = edamame.impl.parser.parse_next.call(null,ctx__$1,reader);
var cond_splice_QMARK_ = (function (){var G__38387 = next_val;
var G__38387__$1 = (((G__38387 == null))?null:cljs.core.meta.call(null,G__38387));
if((G__38387__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("edamame.impl.parser","cond-splice","edamame.impl.parser/cond-splice",1534599765).cljs$core$IFn$_invoke$arity$1(G__38387__$1);
}
})();
if(edamame.impl.parser.kw_identical_QMARK_.call(null,new cljs.core.Keyword("edamame.impl.parser","eof","edamame.impl.parser/eof",720552006),next_val)){
return edamame.impl.parser.throw_reader.call(null,reader,["EOF while reading, expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(delimiter)," to match ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(opened)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(row),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(col),"]"].join(''));
} else {
if(edamame.impl.parser.kw_identical_QMARK_.call(null,new cljs.core.Keyword("edamame.impl.parser","expected-delimiter","edamame.impl.parser/expected-delimiter",2057965803),next_val)){
return cljs.core.persistent_BANG_.call(null,vals);
} else {
if(cljs.core.truth_(cond_splice_QMARK_)){
var seq__38388_38393 = cljs.core.seq.call(null,next_val);
var chunk__38389_38394 = null;
var count__38390_38395 = (0);
var i__38391_38396 = (0);
while(true){
if((i__38391_38396 < count__38390_38395)){
var v_38397 = cljs.core._nth.call(null,chunk__38389_38394,i__38391_38396);
cljs.core.conj_BANG_.call(null,vals,v_38397);


var G__38398 = seq__38388_38393;
var G__38399 = chunk__38389_38394;
var G__38400 = count__38390_38395;
var G__38401 = (i__38391_38396 + (1));
seq__38388_38393 = G__38398;
chunk__38389_38394 = G__38399;
count__38390_38395 = G__38400;
i__38391_38396 = G__38401;
continue;
} else {
var temp__5753__auto___38402 = cljs.core.seq.call(null,seq__38388_38393);
if(temp__5753__auto___38402){
var seq__38388_38403__$1 = temp__5753__auto___38402;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38388_38403__$1)){
var c__4638__auto___38404 = cljs.core.chunk_first.call(null,seq__38388_38403__$1);
var G__38405 = cljs.core.chunk_rest.call(null,seq__38388_38403__$1);
var G__38406 = c__4638__auto___38404;
var G__38407 = cljs.core.count.call(null,c__4638__auto___38404);
var G__38408 = (0);
seq__38388_38393 = G__38405;
chunk__38389_38394 = G__38406;
count__38390_38395 = G__38407;
i__38391_38396 = G__38408;
continue;
} else {
var v_38409 = cljs.core.first.call(null,seq__38388_38403__$1);
cljs.core.conj_BANG_.call(null,vals,v_38409);


var G__38410 = cljs.core.next.call(null,seq__38388_38403__$1);
var G__38411 = null;
var G__38412 = (0);
var G__38413 = (0);
seq__38388_38393 = G__38410;
chunk__38389_38394 = G__38411;
count__38390_38395 = G__38412;
i__38391_38396 = G__38413;
continue;
}
} else {
}
}
break;
}

var G__38414 = vals;
vals = G__38414;
continue;
} else {
if(edamame.impl.parser.non_match_QMARK_.call(null,next_val)){
var G__38415 = vals;
vals = G__38415;
continue;
} else {
var G__38416 = cljs.core.conj_BANG_.call(null,vals,next_val);
vals = G__38416;
continue;

}
}
}
}
break;
}
}));

(edamame.impl.parser.parse_to_delimiter.cljs$lang$maxFixedArity = 4);

edamame.impl.parser.parse_list = (function edamame$impl$parser$parse_list(ctx,reader){
return cljs.core.apply.call(null,cljs.core.list,edamame.impl.parser.parse_to_delimiter.call(null,ctx,reader,")"));
});
/**
 * Modeled after tools.reader/read-regex.
 */
edamame.impl.parser.read_regex_pattern = (function edamame$impl$parser$read_regex_pattern(_ctx,reader){
cljs.tools.reader.reader_types.read_char.call(null,reader);

var sb = (new goog.string.StringBuffer());
var ch = cljs.tools.reader.reader_types.read_char.call(null,reader);
while(true){
if(("\"" === ch)){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb);
} else {
if((ch == null)){
return edamame.impl.parser.throw_reader.call(null,reader,"Error while parsing regex");
} else {
sb.append(ch);

if(("\\" === ch)){
var ch_38417__$1 = cljs.tools.reader.reader_types.read_char.call(null,reader);
if((ch_38417__$1 == null)){
edamame.impl.parser.throw_reader.call(null,reader,"Error while parsing regex");
} else {
}

sb.append(ch_38417__$1);
} else {
}

var G__38418 = cljs.tools.reader.reader_types.read_char.call(null,reader);
ch = G__38418;
continue;
}
}
break;
}
});
edamame.impl.parser.duplicate_keys_error = (function edamame$impl$parser$duplicate_keys_error(msg,coll){
var duplicates = (function edamame$impl$parser$duplicate_keys_error_$_duplicates(seq){
var iter__4611__auto__ = (function edamame$impl$parser$duplicate_keys_error_$_duplicates_$_iter__38429(s__38430){
return (new cljs.core.LazySeq(null,(function (){
var s__38430__$1 = s__38430;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__38430__$1);
if(temp__5753__auto__){
var s__38430__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38430__$2)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,s__38430__$2);
var size__4610__auto__ = cljs.core.count.call(null,c__4609__auto__);
var b__38432 = cljs.core.chunk_buffer.call(null,size__4610__auto__);
if((function (){var i__38431 = (0);
while(true){
if((i__38431 < size__4610__auto__)){
var vec__38433 = cljs.core._nth.call(null,c__4609__auto__,i__38431);
var id = cljs.core.nth.call(null,vec__38433,(0),null);
var freq = cljs.core.nth.call(null,vec__38433,(1),null);
if((freq > (1))){
cljs.core.chunk_append.call(null,b__38432,id);

var G__38439 = (i__38431 + (1));
i__38431 = G__38439;
continue;
} else {
var G__38440 = (i__38431 + (1));
i__38431 = G__38440;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38432),edamame$impl$parser$duplicate_keys_error_$_duplicates_$_iter__38429.call(null,cljs.core.chunk_rest.call(null,s__38430__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38432),null);
}
} else {
var vec__38436 = cljs.core.first.call(null,s__38430__$2);
var id = cljs.core.nth.call(null,vec__38436,(0),null);
var freq = cljs.core.nth.call(null,vec__38436,(1),null);
if((freq > (1))){
return cljs.core.cons.call(null,id,edamame$impl$parser$duplicate_keys_error_$_duplicates_$_iter__38429.call(null,cljs.core.rest.call(null,s__38430__$2)));
} else {
var G__38441 = cljs.core.rest.call(null,s__38430__$2);
s__38430__$1 = G__38441;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__.call(null,cljs.core.frequencies.call(null,seq));
});
var dups = duplicates.call(null,coll);
return cljs.core.apply.call(null,cljs.core.str,msg,(((cljs.core.count.call(null,dups) > (1)))?"s":null),": ",cljs.core.interpose.call(null,", ",dups));
});
edamame.impl.parser.throw_dup_keys = (function edamame$impl$parser$throw_dup_keys(reader,loc,kind,ks){
return edamame.impl.parser.throw_reader.call(null,reader,edamame.impl.parser.duplicate_keys_error.call(null,[clojure.string.capitalize.call(null,cljs.core.name.call(null,kind))," literal contains duplicate key"].join(''),ks),null,loc);
});
edamame.impl.parser.parse_set = (function edamame$impl$parser$parse_set(ctx,reader){
var start_loc = edamame.impl.parser.location.call(null,reader);
var coll = edamame.impl.parser.parse_to_delimiter.call(null,ctx,reader,"}");
var the_set = cljs.core.set.call(null,coll);
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,the_set))){
} else {
edamame.impl.parser.throw_dup_keys.call(null,reader,start_loc,new cljs.core.Keyword(null,"set","set",304602554),coll);
}

return the_set;
});
edamame.impl.parser.parse_first_matching_condition = (function edamame$impl$parser$parse_first_matching_condition(ctx,reader){
var features = new cljs.core.Keyword(null,"features","features",-1146962336).cljs$core$IFn$_invoke$arity$1(ctx);
var match = edamame.impl.parser.non_match;
while(true){
edamame.impl.parser.skip_whitespace.call(null,ctx,reader);

var end_QMARK_ = cljs.core._EQ_.call(null,")",cljs.tools.reader.reader_types.peek_char.call(null,reader));
if(end_QMARK_){
cljs.tools.reader.reader_types.read_char.call(null,reader);

return match;
} else {
var k = edamame.impl.parser.parse_next.call(null,ctx,reader);
var match_QMARK_ = ((edamame.impl.parser.non_match_QMARK_.call(null,match)) && (((cljs.core.contains_QMARK_.call(null,features,k)) || (edamame.impl.parser.kw_identical_QMARK_.call(null,k,new cljs.core.Keyword(null,"default","default",-1987822328))))));
if(match_QMARK_){
var G__38442 = edamame.impl.parser.parse_next.call(null,ctx,reader);
match = G__38442;
continue;
} else {
edamame.impl.parser.parse_next.call(null,cljs.core.assoc.call(null,ctx,new cljs.core.Keyword("edamame.impl.parser","suppress","edamame.impl.parser/suppress",1718484755),true),reader);

var G__38443 = match;
match = G__38443;
continue;
}
}
break;
}
});
edamame.impl.parser.parse_reader_conditional = (function edamame$impl$parser$parse_reader_conditional(ctx,reader){
edamame.impl.parser.skip_whitespace.call(null,ctx,reader);

var opt = new cljs.core.Keyword(null,"read-cond","read-cond",1056899244).cljs$core$IFn$_invoke$arity$1(ctx);
var splice_QMARK_ = cljs.core._EQ_.call(null,"@",cljs.tools.reader.reader_types.peek_char.call(null,reader));
if(splice_QMARK_){
cljs.tools.reader.reader_types.read_char.call(null,reader);
} else {
}

if(edamame.impl.parser.kw_identical_QMARK_.call(null,new cljs.core.Keyword(null,"preserve","preserve",1276846509),opt)){
return cljs.tools.reader.impl.utils.reader_conditional.call(null,edamame.impl.parser.parse_next.call(null,ctx,reader),splice_QMARK_);
} else {
if(cljs.core.fn_QMARK_.call(null,opt)){
return opt.call(null,cljs.core.vary_meta.call(null,edamame.impl.parser.parse_next.call(null,ctx,reader),cljs.core.assoc,new cljs.core.Keyword("edamame","read-cond-splicing","edamame/read-cond-splicing",-1992728777),splice_QMARK_));
} else {
cljs.tools.reader.reader_types.read_char.call(null,reader);

var match = edamame.impl.parser.parse_first_matching_condition.call(null,ctx,reader);
if(edamame.impl.parser.non_match_QMARK_.call(null,match)){
return reader;
} else {
if(splice_QMARK_){
return cljs.core.vary_meta.call(null,match,(function (p1__38444_SHARP_){
return cljs.core.assoc.call(null,p1__38444_SHARP_,new cljs.core.Keyword("edamame.impl.parser","cond-splice","edamame.impl.parser/cond-splice",1534599765),true);
}));
} else {
return match;

}
}

}
}
});
edamame.impl.parser.get_auto_resolve = (function edamame$impl$parser$get_auto_resolve(var_args){
var G__38446 = arguments.length;
switch (G__38446) {
case 3:
return edamame.impl.parser.get_auto_resolve.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return edamame.impl.parser.get_auto_resolve.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(edamame.impl.parser.get_auto_resolve.cljs$core$IFn$_invoke$arity$3 = (function (ctx,reader,next_val){
return edamame.impl.parser.get_auto_resolve.call(null,ctx,reader,next_val,null);
}));

(edamame.impl.parser.get_auto_resolve.cljs$core$IFn$_invoke$arity$4 = (function (ctx,reader,next_val,msg){
var temp__5751__auto__ = new cljs.core.Keyword(null,"auto-resolve","auto-resolve",1851201983).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5751__auto__)){
var v = temp__5751__auto__;
return v;
} else {
return edamame.impl.parser.throw_reader.call(null,reader,(function (){var or__4212__auto__ = msg;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return "Use `:auto-resolve` to resolve aliases.";
}
})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"expr","expr",745722291),[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_val)].join('')], null));
}
}));

(edamame.impl.parser.get_auto_resolve.cljs$lang$maxFixedArity = 4);

/**
 * Returns namespace for given alias.
 */
edamame.impl.parser.auto_resolve = (function edamame$impl$parser$auto_resolve(var_args){
var G__38449 = arguments.length;
switch (G__38449) {
case 4:
return edamame.impl.parser.auto_resolve.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return edamame.impl.parser.auto_resolve.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(edamame.impl.parser.auto_resolve.cljs$core$IFn$_invoke$arity$4 = (function (m,kns,reader,next_val){
return edamame.impl.parser.auto_resolve.call(null,m,kns,reader,next_val,null);
}));

(edamame.impl.parser.auto_resolve.cljs$core$IFn$_invoke$arity$5 = (function (m,kns,reader,next_val,msg){
var temp__5751__auto__ = m.call(null,kns);
if(cljs.core.truth_(temp__5751__auto__)){
var kns__$1 = temp__5751__auto__;
return kns__$1;
} else {
return edamame.impl.parser.throw_reader.call(null,reader,(function (){var or__4212__auto__ = msg;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return ["Alias `",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.call(null,kns)),"` not found in `:auto-resolve`"].join('');
}
})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"expr","expr",745722291),[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_val)].join('')], null));
}
}));

(edamame.impl.parser.auto_resolve.cljs$lang$maxFixedArity = 5);

edamame.impl.parser.parse_namespaced_map = (function edamame$impl$parser$parse_namespaced_map(ctx,reader){
var prefix = edamame.impl.parser.edn_read.call(null,ctx,reader);
var the_map = edamame.impl.parser.parse_next.call(null,ctx,reader);
if((prefix instanceof cljs.core.Keyword)){
var ns = cljs.core.symbol.call(null,cljs.core.name.call(null,prefix));
var f = edamame.impl.parser.get_auto_resolve.call(null,ctx,reader,ns);
var resolved_ns = edamame.impl.parser.auto_resolve.call(null,f,ns,reader,prefix);
return cljs.core.zipmap.call(null,cljs.tools.reader.impl.utils.namespace_keys.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(resolved_ns),cljs.core.keys.call(null,the_map)),cljs.core.vals.call(null,the_map));
} else {
var resolved_ns = cljs.core.name.call(null,prefix);
return cljs.core.zipmap.call(null,cljs.tools.reader.impl.utils.namespace_keys.call(null,resolved_ns,cljs.core.keys.call(null,the_map)),cljs.core.vals.call(null,the_map));
}
});
edamame.impl.parser.parse_sharp = (function edamame$impl$parser$parse_sharp(ctx,reader){
var c = cljs.tools.reader.reader_types.peek_char.call(null,reader);
var G__38451 = c;
if(cljs.core._EQ_.call(null,null,G__38451)){
return edamame.impl.parser.throw_reader.call(null,reader,"Unexpected EOF.");
} else {
if(cljs.core._EQ_.call(null,"!",G__38451)){
edamame.impl.parser.parse_comment.call(null,reader);

return reader;
} else {
if(cljs.core._EQ_.call(null,"\"",G__38451)){
var temp__5751__auto__ = new cljs.core.Keyword(null,"regex","regex",939488856).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5751__auto__)){
var v = temp__5751__auto__;
var pat = edamame.impl.parser.read_regex_pattern.call(null,ctx,reader);
if(cljs.core.ifn_QMARK_.call(null,v)){
return v.call(null,pat);
} else {
return cljs.core.re_pattern.call(null,pat);
}
} else {
return edamame.impl.parser.throw_reader.call(null,reader,"Regex not allowed. Use the `:regex` option");
}
} else {
if(cljs.core._EQ_.call(null,"'",G__38451)){
var temp__5751__auto__ = new cljs.core.Keyword(null,"var","var",-769682797).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5751__auto__)){
var v = temp__5751__auto__;
cljs.tools.reader.reader_types.read_char.call(null,reader);

var next_val = edamame.impl.parser.parse_next.call(null,ctx,reader);
if(cljs.core.ifn_QMARK_.call(null,v)){
return v.call(null,next_val);
} else {
return (new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),(new cljs.core.List(null,next_val,null,(1),null)),(2),null));
}
} else {
return edamame.impl.parser.throw_reader.call(null,reader,"Var literal not allowed. Use the `:var` option");
}
} else {
if(cljs.core._EQ_.call(null,"(",G__38451)){
var temp__5751__auto__ = new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5751__auto__)){
var v = temp__5751__auto__;
var fn_expr = edamame.impl.parser.parse_next.call(null,ctx,reader);
if(cljs.core.ifn_QMARK_.call(null,v)){
return v.call(null,fn_expr);
} else {
return edamame.impl.read_fn.read_fn.call(null,fn_expr);
}
} else {
return edamame.impl.parser.throw_reader.call(null,reader,"Function literal not allowed. Use the `:fn` option");
}
} else {
if(cljs.core._EQ_.call(null,":",G__38451)){
cljs.tools.reader.reader_types.read_char.call(null,reader);

return edamame.impl.parser.parse_namespaced_map.call(null,ctx,reader);
} else {
if(cljs.core._EQ_.call(null,"{",G__38451)){
return edamame.impl.parser.parse_set.call(null,ctx,reader);
} else {
if(cljs.core._EQ_.call(null,"=",G__38451)){
var temp__5751__auto__ = new cljs.core.Keyword(null,"read-eval","read-eval",1788733932).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5751__auto__)){
var v = temp__5751__auto__;
cljs.tools.reader.reader_types.read_char.call(null,reader);

var next_val = edamame.impl.parser.parse_next.call(null,ctx,reader);
if(cljs.core.ifn_QMARK_.call(null,v)){
return v.call(null,next_val);
} else {
return (new cljs.core.List(null,new cljs.core.Symbol(null,"read-eval","read-eval",-865701837,null),(new cljs.core.List(null,next_val,null,(1),null)),(2),null));
}
} else {
return edamame.impl.parser.throw_reader.call(null,reader,"Read-eval not allowed. Use the `:read-eval` option");
}
} else {
if(cljs.core._EQ_.call(null,"?",G__38451)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"read-cond","read-cond",1056899244).cljs$core$IFn$_invoke$arity$1(ctx))){
} else {
edamame.impl.parser.throw_reader.call(null,reader,"Conditional read not allowed.");
}

cljs.tools.reader.reader_types.read_char.call(null,reader);

return edamame.impl.parser.parse_reader_conditional.call(null,ctx,reader);
} else {
if(cljs.core._EQ_.call(null,"_",G__38451)){
cljs.tools.reader.reader_types.read_char.call(null,reader);

edamame.impl.parser.parse_next.call(null,ctx,reader);

return reader;
} else {
if(edamame.impl.parser.dispatch_macro_QMARK_.call(null,c)){
cljs.tools.reader.reader_types.unread.call(null,reader,"#");

return edamame.impl.parser.edn_read.call(null,ctx,reader);
} else {
var suppress_QMARK_ = new cljs.core.Keyword("edamame.impl.parser","suppress","edamame.impl.parser/suppress",1718484755).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(suppress_QMARK_)){
edamame.impl.parser.parse_next.call(null,ctx,reader);

return edamame.impl.parser.parse_next.call(null,ctx,reader);
} else {
cljs.tools.reader.reader_types.unread.call(null,reader,"#");

return edamame.impl.parser.edn_read.call(null,ctx,reader);
}
}

}
}
}
}
}
}
}
}
}
}
});
edamame.impl.parser.throw_odd_map = (function edamame$impl$parser$throw_odd_map(reader,loc,elements){
return edamame.impl.parser.throw_reader.call(null,reader,["The map literal starting with ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.tools.reader.impl.inspect.inspect.call(null,cljs.core.first.call(null,elements)))," contains ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,elements))," form(s). Map literals must contain an even number of forms."].join(''),null,loc);
});
edamame.impl.parser.parse_map = (function edamame$impl$parser$parse_map(ctx,reader){
var start_loc = edamame.impl.parser.location.call(null,reader);
var elements = edamame.impl.parser.parse_to_delimiter.call(null,ctx,reader,"}");
var c = cljs.core.count.call(null,elements);
if((c > (0))){
if(cljs.core.odd_QMARK_.call(null,c)){
edamame.impl.parser.throw_odd_map.call(null,reader,start_loc,elements);
} else {
}

var ks_38452 = cljs.core.take_nth.call(null,(2),elements);
if(cljs.core.truth_(cljs.core.apply.call(null,cljs.core.distinct_QMARK_,ks_38452))){
} else {
edamame.impl.parser.throw_dup_keys.call(null,reader,start_loc,new cljs.core.Keyword(null,"map","map",1371690461),ks_38452);
}
} else {
}

return cljs.core.apply.call(null,cljs.core.hash_map,elements);
});
edamame.impl.parser.parse_keyword = (function edamame$impl$parser$parse_keyword(ctx,reader){
cljs.tools.reader.reader_types.read_char.call(null,reader);

var init_c = cljs.tools.reader.reader_types.read_char.call(null,reader);
if(cljs.core.truth_(edamame.impl.parser.whitespace_QMARK_.call(null,init_c))){
edamame.impl.parser.throw_reader.call(null,reader,"Invalid token: :");
} else {
}

var token = edamame.impl.parser.read_token.call(null,reader,new cljs.core.Keyword(null,"keyword","keyword",811389747),init_c);
var auto_resolve_QMARK_ = (":" === token.charAt((0)));
if(auto_resolve_QMARK_){
var token__$1 = ((auto_resolve_QMARK_)?cljs.core.subs.call(null,token,(1)):token);
var vec__38453 = edamame.impl.parser.parse_symbol.call(null,token__$1);
var token_ns = cljs.core.nth.call(null,vec__38453,(0),null);
var token_name = cljs.core.nth.call(null,vec__38453,(1),null);
if(cljs.core.truth_(token_ns)){
var f = edamame.impl.parser.get_auto_resolve.call(null,ctx,reader,token__$1);
var kns = edamame.impl.parser.auto_resolve.call(null,f,cljs.core.symbol.call(null,token_ns),reader,token_ns);
return cljs.core.keyword.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(kns),token_name);
} else {
var f = edamame.impl.parser.get_auto_resolve.call(null,ctx,reader,token__$1,"Use `:auto-resolve` + `:current` to resolve current namespace.");
var kns = edamame.impl.parser.auto_resolve.call(null,f,new cljs.core.Keyword(null,"current","current",-1088038603),reader,token__$1,"Use `:auto-resolve` + `:current` to resolve current namespace.");
return cljs.core.keyword.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(kns),token_name);
}
} else {
return cljs.core.keyword.call(null,token);
}
});
edamame.impl.parser.dispatch = (function edamame$impl$parser$dispatch(ctx,reader,c){
var sharp_QMARK_ = cljs.core._EQ_.call(null,"#",c);
if(sharp_QMARK_){
cljs.tools.reader.reader_types.read_char.call(null,reader);

return edamame.impl.parser.parse_sharp.call(null,ctx,reader);
} else {
var G__38456 = c;
if(cljs.core._EQ_.call(null,null,G__38456)){
return new cljs.core.Keyword("edamame.impl.parser","eof","edamame.impl.parser/eof",720552006);
} else {
if(cljs.core._EQ_.call(null,"@",G__38456)){
var temp__5751__auto__ = new cljs.core.Keyword(null,"deref","deref",-145586795).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5751__auto__)){
var v = temp__5751__auto__;
cljs.tools.reader.reader_types.read_char.call(null,reader);

var next_val = edamame.impl.parser.parse_next.call(null,ctx,reader);
if(cljs.core.ifn_QMARK_.call(null,v)){
return v.call(null,next_val);
} else {
return (new cljs.core.List(null,new cljs.core.Symbol(null,"deref","deref",1494944732,null),(new cljs.core.List(null,next_val,null,(1),null)),(2),null));
}
} else {
return edamame.impl.parser.throw_reader.call(null,reader,"Deref not allowed. Use the `:deref` option");
}
} else {
if(cljs.core._EQ_.call(null,"`",G__38456)){
var temp__5751__auto__ = new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5751__auto__)){
var v = temp__5751__auto__;
cljs.tools.reader.reader_types.read_char.call(null,reader);

var next_val = edamame.impl.parser.parse_next.call(null,ctx,reader);
if(cljs.core.fn_QMARK_.call(null,v)){
return v.call(null,next_val);
} else {
var gensyms = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ctx__$1 = cljs.core.assoc.call(null,ctx,new cljs.core.Keyword(null,"gensyms","gensyms",248713782),gensyms);
var ret = edamame.impl.syntax_quote.syntax_quote.call(null,ctx__$1,reader,next_val);
return ret;
}
} else {
return edamame.impl.parser.throw_reader.call(null,reader,"Syntax quote not allowed. Use the `:syntax-quote` option");
}
} else {
if(cljs.core._EQ_.call(null,"'",G__38456)){
var temp__5751__auto__ = new cljs.core.Keyword(null,"quote","quote",-262615245).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5751__auto__)){
var v = temp__5751__auto__;
cljs.tools.reader.reader_types.read_char.call(null,reader);

var next_val = edamame.impl.parser.parse_next.call(null,ctx,reader);
if(cljs.core.ifn_QMARK_.call(null,v)){
return v.call(null,next_val);
} else {
return (new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),(new cljs.core.List(null,next_val,null,(1),null)),(2),null));
}
} else {
return edamame.impl.parser.edn_read.call(null,ctx,reader);
}
} else {
if(cljs.core._EQ_.call(null,"(",G__38456)){
return edamame.impl.parser.parse_list.call(null,ctx,reader);
} else {
if(cljs.core._EQ_.call(null,")",G__38456)){
var expected = new cljs.core.Keyword("edamame.impl.parser","expected-delimiter","edamame.impl.parser/expected-delimiter",2057965803).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.not_EQ_.call(null,expected,c)){
var loc = edamame.impl.parser.location.call(null,reader);
cljs.tools.reader.reader_types.read_char.call(null,reader);

return edamame.impl.parser.throw_reader.call(null,reader,["Unmatched delimiter: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c),(cljs.core.truth_(expected)?[", expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected),(function (){var temp__5753__auto__ = new cljs.core.Keyword("edamame.impl.parser","opened-delimiter","edamame.impl.parser/opened-delimiter",1199661648).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5753__auto__)){
var map__38460 = temp__5753__auto__;
var map__38460__$1 = cljs.core.__destructure_map.call(null,map__38460);
var row = cljs.core.get.call(null,map__38460__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var col = cljs.core.get.call(null,map__38460__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var char$ = cljs.core.get.call(null,map__38460__$1,new cljs.core.Keyword(null,"char","char",-641587586));
return [" to match ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(char$)," at ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null))].join('');
} else {
return null;
}
})()].join(''):null)].join(''),ctx,loc);
} else {
cljs.tools.reader.reader_types.read_char.call(null,reader);

return new cljs.core.Keyword("edamame.impl.parser","expected-delimiter","edamame.impl.parser/expected-delimiter",2057965803);
}
} else {
if(cljs.core._EQ_.call(null,":",G__38456)){
return edamame.impl.parser.parse_keyword.call(null,ctx,reader);
} else {
if(cljs.core._EQ_.call(null,";",G__38456)){
return edamame.impl.parser.parse_comment.call(null,reader);
} else {
if(cljs.core._EQ_.call(null,"[",G__38456)){
return edamame.impl.parser.parse_to_delimiter.call(null,ctx,reader,"]");
} else {
if(cljs.core._EQ_.call(null,"{",G__38456)){
return edamame.impl.parser.parse_map.call(null,ctx,reader);
} else {
if(cljs.core._EQ_.call(null,"]",G__38456)){
var expected = new cljs.core.Keyword("edamame.impl.parser","expected-delimiter","edamame.impl.parser/expected-delimiter",2057965803).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.not_EQ_.call(null,expected,c)){
var loc = edamame.impl.parser.location.call(null,reader);
cljs.tools.reader.reader_types.read_char.call(null,reader);

return edamame.impl.parser.throw_reader.call(null,reader,["Unmatched delimiter: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c),(cljs.core.truth_(expected)?[", expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected),(function (){var temp__5753__auto__ = new cljs.core.Keyword("edamame.impl.parser","opened-delimiter","edamame.impl.parser/opened-delimiter",1199661648).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5753__auto__)){
var map__38464 = temp__5753__auto__;
var map__38464__$1 = cljs.core.__destructure_map.call(null,map__38464);
var row = cljs.core.get.call(null,map__38464__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var col = cljs.core.get.call(null,map__38464__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var char$ = cljs.core.get.call(null,map__38464__$1,new cljs.core.Keyword(null,"char","char",-641587586));
return [" to match ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(char$)," at ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null))].join('');
} else {
return null;
}
})()].join(''):null)].join(''),ctx,loc);
} else {
cljs.tools.reader.reader_types.read_char.call(null,reader);

return new cljs.core.Keyword("edamame.impl.parser","expected-delimiter","edamame.impl.parser/expected-delimiter",2057965803);
}
} else {
if(cljs.core._EQ_.call(null,"}",G__38456)){
var expected = new cljs.core.Keyword("edamame.impl.parser","expected-delimiter","edamame.impl.parser/expected-delimiter",2057965803).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.not_EQ_.call(null,expected,c)){
var loc = edamame.impl.parser.location.call(null,reader);
cljs.tools.reader.reader_types.read_char.call(null,reader);

return edamame.impl.parser.throw_reader.call(null,reader,["Unmatched delimiter: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c),(cljs.core.truth_(expected)?[", expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected),(function (){var temp__5753__auto__ = new cljs.core.Keyword("edamame.impl.parser","opened-delimiter","edamame.impl.parser/opened-delimiter",1199661648).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5753__auto__)){
var map__38468 = temp__5753__auto__;
var map__38468__$1 = cljs.core.__destructure_map.call(null,map__38468);
var row = cljs.core.get.call(null,map__38468__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var col = cljs.core.get.call(null,map__38468__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var char$ = cljs.core.get.call(null,map__38468__$1,new cljs.core.Keyword(null,"char","char",-641587586));
return [" to match ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(char$)," at ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null))].join('');
} else {
return null;
}
})()].join(''):null)].join(''),ctx,loc);
} else {
cljs.tools.reader.reader_types.read_char.call(null,reader);

return new cljs.core.Keyword("edamame.impl.parser","expected-delimiter","edamame.impl.parser/expected-delimiter",2057965803);
}
} else {
if(cljs.core._EQ_.call(null,"^",G__38456)){
cljs.tools.reader.reader_types.read_char.call(null,reader);

var meta_val = edamame.impl.parser.parse_next.call(null,ctx,reader);
var meta_val__$1 = cljs.tools.reader.impl.utils.desugar_meta.call(null,meta_val);
var val_val = cljs.core.vary_meta.call(null,edamame.impl.parser.parse_next.call(null,ctx,reader),cljs.core.merge,meta_val__$1);
return val_val;
} else {
if(cljs.core._EQ_.call(null,"~",G__38456)){
var temp__5751__auto__ = (function (){var and__4210__auto__ = new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(and__4210__auto__)){
var or__4212__auto__ = new cljs.core.Keyword(null,"unquote","unquote",1649741032).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return true;
}
} else {
return and__4210__auto__;
}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var v = temp__5751__auto__;
cljs.tools.reader.reader_types.read_char.call(null,reader);

var nc = cljs.tools.reader.reader_types.peek_char.call(null,reader);
if((nc === "@")){
var temp__5751__auto____$1 = (function (){var and__4210__auto__ = new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(and__4210__auto__)){
var or__4212__auto__ = new cljs.core.Keyword(null,"unquote-splicing","unquote-splicing",1295267556).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return true;
}
} else {
return and__4210__auto__;
}
})();
if(cljs.core.truth_(temp__5751__auto____$1)){
var v__$1 = temp__5751__auto____$1;
cljs.tools.reader.reader_types.read_char.call(null,reader);

var next_val = edamame.impl.parser.parse_next.call(null,ctx,reader);
if(cljs.core.ifn_QMARK_.call(null,v__$1)){
return v__$1.call(null,next_val);
} else {
return (new cljs.core.List(null,new cljs.core.Symbol("clojure.core","unquote-splicing","clojure.core/unquote-splicing",-552003150,null),(new cljs.core.List(null,next_val,null,(1),null)),(2),null));
}
} else {
return edamame.impl.parser.throw_reader.call(null,reader,"Syntax unquote splice not allowed. Use the `:syntax-quote` option");
}
} else {
var next_val = edamame.impl.parser.parse_next.call(null,ctx,reader);
if(cljs.core.ifn_QMARK_.call(null,v)){
return v.call(null,next_val);
} else {
return (new cljs.core.List(null,new cljs.core.Symbol("clojure.core","unquote","clojure.core/unquote",843087510,null),(new cljs.core.List(null,next_val,null,(1),null)),(2),null));
}
}
} else {
return edamame.impl.parser.throw_reader.call(null,reader,"Syntax unquote not allowed. Use the `:syntax-unquote` option");
}
} else {
return edamame.impl.parser.edn_read.call(null,ctx,reader);

}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
edamame.impl.parser.parse_next = (function edamame$impl$parser$parse_next(ctx,reader){
var temp__5751__auto__ = (function (){var and__4210__auto__ = edamame.impl.parser.skip_whitespace.call(null,ctx,reader);
if(cljs.core.truth_(and__4210__auto__)){
return cljs.tools.reader.reader_types.peek_char.call(null,reader);
} else {
return and__4210__auto__;
}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var c = temp__5751__auto__;
var loc = edamame.impl.parser.location.call(null,reader);
var obj = edamame.impl.parser.dispatch.call(null,ctx,reader,c);
if((reader === obj)){
return edamame.impl.parser.parse_next.call(null,ctx,reader);
} else {
if((((!((obj == null))))?(((((obj.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$IWithMeta$))))?true:(((!obj.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWithMeta,obj):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWithMeta,obj))){
var end_loc = edamame.impl.parser.location.call(null,reader);
return cljs.core.vary_meta.call(null,obj,(function (p1__38469_SHARP_){
return cljs.core.assoc.call(null,p1__38469_SHARP_,new cljs.core.Keyword(null,"row-key","row-key",-1189010712).cljs$core$IFn$_invoke$arity$1(ctx),new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(loc),new cljs.core.Keyword(null,"col-key","col-key",-2009675766).cljs$core$IFn$_invoke$arity$1(ctx),new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(loc),new cljs.core.Keyword(null,"end-row-key","end-row-key",-1126662680).cljs$core$IFn$_invoke$arity$1(ctx),new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(end_loc),new cljs.core.Keyword(null,"end-col-key","end-col-key",81813304).cljs$core$IFn$_invoke$arity$1(ctx),new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(end_loc));
}));
} else {
return obj;
}
}
} else {
return new cljs.core.Keyword("edamame.impl.parser","eof","edamame.impl.parser/eof",720552006);
}
});
/**
 * Create reader for strings.
 */
edamame.impl.parser.string_reader = (function edamame$impl$parser$string_reader(s){
return cljs.tools.reader.reader_types.indexing_push_back_reader.call(null,cljs.tools.reader.reader_types.string_push_back_reader.call(null,s));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
edamame.impl.parser.Options = (function (dispatch,deref,syntax_quote,unquote,unquote_splicing,quote,fn,var$,read_eval,regex,row_key,col_key,end_row_key,end_col_key,__meta,__extmap,__hash){
this.dispatch = dispatch;
this.deref = deref;
this.syntax_quote = syntax_quote;
this.unquote = unquote;
this.unquote_splicing = unquote_splicing;
this.quote = quote;
this.fn = fn;
this.var$ = var$;
this.read_eval = read_eval;
this.regex = regex;
this.row_key = row_key;
this.col_key = col_key;
this.end_row_key = end_row_key;
this.end_col_key = end_col_key;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(edamame.impl.parser.Options.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(edamame.impl.parser.Options.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k38472,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__38476 = k38472;
var G__38476__$1 = (((G__38476 instanceof cljs.core.Keyword))?G__38476.fqn:null);
switch (G__38476__$1) {
case "dispatch":
return self__.dispatch;

break;
case "deref":
return self__.deref;

break;
case "syntax-quote":
return self__.syntax_quote;

break;
case "unquote":
return self__.unquote;

break;
case "unquote-splicing":
return self__.unquote_splicing;

break;
case "quote":
return self__.quote;

break;
case "fn":
return self__.fn;

break;
case "var":
return self__.var$;

break;
case "read-eval":
return self__.read_eval;

break;
case "regex":
return self__.regex;

break;
case "row-key":
return self__.row_key;

break;
case "col-key":
return self__.col_key;

break;
case "end-row-key":
return self__.end_row_key;

break;
case "end-col-key":
return self__.end_col_key;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k38472,else__4464__auto__);

}
}));

(edamame.impl.parser.Options.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4484__auto__,p__38477){
var vec__38478 = p__38477;
var k__4485__auto__ = cljs.core.nth.call(null,vec__38478,(0),null);
var v__4486__auto__ = cljs.core.nth.call(null,vec__38478,(1),null);
return f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__);
}),init__4483__auto__,this__4481__auto____$1);
}));

(edamame.impl.parser.Options.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4477__auto__,pr_pair__4479__auto__,"#edamame.impl.parser.Options{",", ","}",opts__4478__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),self__.dispatch],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"deref","deref",-145586795),self__.deref],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847),self__.syntax_quote],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"unquote","unquote",1649741032),self__.unquote],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"unquote-splicing","unquote-splicing",1295267556),self__.unquote_splicing],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"quote","quote",-262615245),self__.quote],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"var","var",-769682797),self__.var$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"read-eval","read-eval",1788733932),self__.read_eval],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"regex","regex",939488856),self__.regex],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"row-key","row-key",-1189010712),self__.row_key],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"col-key","col-key",-2009675766),self__.col_key],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-row-key","end-row-key",-1126662680),self__.end_row_key],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-col-key","end-col-key",81813304),self__.end_col_key],null))], null),self__.__extmap));
}));

(edamame.impl.parser.Options.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__38471){
var self__ = this;
var G__38471__$1 = this;
return (new cljs.core.RecordIter((0),G__38471__$1,14,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.Keyword(null,"deref","deref",-145586795),new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847),new cljs.core.Keyword(null,"unquote","unquote",1649741032),new cljs.core.Keyword(null,"unquote-splicing","unquote-splicing",1295267556),new cljs.core.Keyword(null,"quote","quote",-262615245),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"var","var",-769682797),new cljs.core.Keyword(null,"read-eval","read-eval",1788733932),new cljs.core.Keyword(null,"regex","regex",939488856),new cljs.core.Keyword(null,"row-key","row-key",-1189010712),new cljs.core.Keyword(null,"col-key","col-key",-2009675766),new cljs.core.Keyword(null,"end-row-key","end-row-key",-1126662680),new cljs.core.Keyword(null,"end-col-key","end-col-key",81813304)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(edamame.impl.parser.Options.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(edamame.impl.parser.Options.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,self__.unquote,self__.unquote_splicing,self__.quote,self__.fn,self__.var$,self__.read_eval,self__.regex,self__.row_key,self__.col_key,self__.end_row_key,self__.end_col_key,self__.__meta,self__.__extmap,self__.__hash));
}));

(edamame.impl.parser.Options.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (14 + cljs.core.count.call(null,self__.__extmap));
}));

(edamame.impl.parser.Options.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (-1037796634 ^ cljs.core.hash_unordered_coll.call(null,coll__4458__auto__));
}).call(null,this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(edamame.impl.parser.Options.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this38473,other38474){
var self__ = this;
var this38473__$1 = this;
return (((!((other38474 == null)))) && ((((this38473__$1.constructor === other38474.constructor)) && (((cljs.core._EQ_.call(null,this38473__$1.dispatch,other38474.dispatch)) && (((cljs.core._EQ_.call(null,this38473__$1.deref,other38474.deref)) && (((cljs.core._EQ_.call(null,this38473__$1.syntax_quote,other38474.syntax_quote)) && (((cljs.core._EQ_.call(null,this38473__$1.unquote,other38474.unquote)) && (((cljs.core._EQ_.call(null,this38473__$1.unquote_splicing,other38474.unquote_splicing)) && (((cljs.core._EQ_.call(null,this38473__$1.quote,other38474.quote)) && (((cljs.core._EQ_.call(null,this38473__$1.fn,other38474.fn)) && (((cljs.core._EQ_.call(null,this38473__$1.var,other38474.var)) && (((cljs.core._EQ_.call(null,this38473__$1.read_eval,other38474.read_eval)) && (((cljs.core._EQ_.call(null,this38473__$1.regex,other38474.regex)) && (((cljs.core._EQ_.call(null,this38473__$1.row_key,other38474.row_key)) && (((cljs.core._EQ_.call(null,this38473__$1.col_key,other38474.col_key)) && (((cljs.core._EQ_.call(null,this38473__$1.end_row_key,other38474.end_row_key)) && (((cljs.core._EQ_.call(null,this38473__$1.end_col_key,other38474.end_col_key)) && (cljs.core._EQ_.call(null,this38473__$1.__extmap,other38474.__extmap)))))))))))))))))))))))))))))))));
}));

(edamame.impl.parser.Options.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 14, [new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"unquote-splicing","unquote-splicing",1295267556),null,new cljs.core.Keyword(null,"unquote","unquote",1649741032),null,new cljs.core.Keyword(null,"end-row-key","end-row-key",-1126662680),null,new cljs.core.Keyword(null,"row-key","row-key",-1189010712),null,new cljs.core.Keyword(null,"col-key","col-key",-2009675766),null,new cljs.core.Keyword(null,"read-eval","read-eval",1788733932),null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),null,new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"quote","quote",-262615245),null,new cljs.core.Keyword(null,"deref","deref",-145586795),null,new cljs.core.Keyword(null,"regex","regex",939488856),null,new cljs.core.Keyword(null,"end-col-key","end-col-key",81813304),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,self__.unquote,self__.unquote_splicing,self__.quote,self__.fn,self__.var$,self__.read_eval,self__.regex,self__.row_key,self__.col_key,self__.end_row_key,self__.end_col_key,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4472__auto__)),null));
}
}));

(edamame.impl.parser.Options.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k38472){
var self__ = this;
var this__4468__auto____$1 = this;
var G__38481 = k38472;
var G__38481__$1 = (((G__38481 instanceof cljs.core.Keyword))?G__38481.fqn:null);
switch (G__38481__$1) {
case "dispatch":
case "deref":
case "syntax-quote":
case "unquote":
case "unquote-splicing":
case "quote":
case "fn":
case "var":
case "read-eval":
case "regex":
case "row-key":
case "col-key":
case "end-row-key":
case "end-col-key":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k38472);

}
}));

(edamame.impl.parser.Options.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__38471){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__38482 = cljs.core.keyword_identical_QMARK_;
var expr__38483 = k__4470__auto__;
if(cljs.core.truth_(pred__38482.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),expr__38483))){
return (new edamame.impl.parser.Options(G__38471,self__.deref,self__.syntax_quote,self__.unquote,self__.unquote_splicing,self__.quote,self__.fn,self__.var$,self__.read_eval,self__.regex,self__.row_key,self__.col_key,self__.end_row_key,self__.end_col_key,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__38482.call(null,new cljs.core.Keyword(null,"deref","deref",-145586795),expr__38483))){
return (new edamame.impl.parser.Options(self__.dispatch,G__38471,self__.syntax_quote,self__.unquote,self__.unquote_splicing,self__.quote,self__.fn,self__.var$,self__.read_eval,self__.regex,self__.row_key,self__.col_key,self__.end_row_key,self__.end_col_key,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__38482.call(null,new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847),expr__38483))){
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,G__38471,self__.unquote,self__.unquote_splicing,self__.quote,self__.fn,self__.var$,self__.read_eval,self__.regex,self__.row_key,self__.col_key,self__.end_row_key,self__.end_col_key,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__38482.call(null,new cljs.core.Keyword(null,"unquote","unquote",1649741032),expr__38483))){
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,G__38471,self__.unquote_splicing,self__.quote,self__.fn,self__.var$,self__.read_eval,self__.regex,self__.row_key,self__.col_key,self__.end_row_key,self__.end_col_key,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__38482.call(null,new cljs.core.Keyword(null,"unquote-splicing","unquote-splicing",1295267556),expr__38483))){
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,self__.unquote,G__38471,self__.quote,self__.fn,self__.var$,self__.read_eval,self__.regex,self__.row_key,self__.col_key,self__.end_row_key,self__.end_col_key,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__38482.call(null,new cljs.core.Keyword(null,"quote","quote",-262615245),expr__38483))){
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,self__.unquote,self__.unquote_splicing,G__38471,self__.fn,self__.var$,self__.read_eval,self__.regex,self__.row_key,self__.col_key,self__.end_row_key,self__.end_col_key,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__38482.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__38483))){
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,self__.unquote,self__.unquote_splicing,self__.quote,G__38471,self__.var$,self__.read_eval,self__.regex,self__.row_key,self__.col_key,self__.end_row_key,self__.end_col_key,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__38482.call(null,new cljs.core.Keyword(null,"var","var",-769682797),expr__38483))){
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,self__.unquote,self__.unquote_splicing,self__.quote,self__.fn,G__38471,self__.read_eval,self__.regex,self__.row_key,self__.col_key,self__.end_row_key,self__.end_col_key,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__38482.call(null,new cljs.core.Keyword(null,"read-eval","read-eval",1788733932),expr__38483))){
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,self__.unquote,self__.unquote_splicing,self__.quote,self__.fn,self__.var$,G__38471,self__.regex,self__.row_key,self__.col_key,self__.end_row_key,self__.end_col_key,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__38482.call(null,new cljs.core.Keyword(null,"regex","regex",939488856),expr__38483))){
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,self__.unquote,self__.unquote_splicing,self__.quote,self__.fn,self__.var$,self__.read_eval,G__38471,self__.row_key,self__.col_key,self__.end_row_key,self__.end_col_key,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__38482.call(null,new cljs.core.Keyword(null,"row-key","row-key",-1189010712),expr__38483))){
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,self__.unquote,self__.unquote_splicing,self__.quote,self__.fn,self__.var$,self__.read_eval,self__.regex,G__38471,self__.col_key,self__.end_row_key,self__.end_col_key,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__38482.call(null,new cljs.core.Keyword(null,"col-key","col-key",-2009675766),expr__38483))){
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,self__.unquote,self__.unquote_splicing,self__.quote,self__.fn,self__.var$,self__.read_eval,self__.regex,self__.row_key,G__38471,self__.end_row_key,self__.end_col_key,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__38482.call(null,new cljs.core.Keyword(null,"end-row-key","end-row-key",-1126662680),expr__38483))){
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,self__.unquote,self__.unquote_splicing,self__.quote,self__.fn,self__.var$,self__.read_eval,self__.regex,self__.row_key,self__.col_key,G__38471,self__.end_col_key,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__38482.call(null,new cljs.core.Keyword(null,"end-col-key","end-col-key",81813304),expr__38483))){
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,self__.unquote,self__.unquote_splicing,self__.quote,self__.fn,self__.var$,self__.read_eval,self__.regex,self__.row_key,self__.col_key,self__.end_row_key,G__38471,self__.__meta,self__.__extmap,null));
} else {
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,self__.unquote,self__.unquote_splicing,self__.quote,self__.fn,self__.var$,self__.read_eval,self__.regex,self__.row_key,self__.col_key,self__.end_row_key,self__.end_col_key,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4470__auto__,G__38471),null));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}));

(edamame.impl.parser.Options.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),self__.dispatch,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"deref","deref",-145586795),self__.deref,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847),self__.syntax_quote,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"unquote","unquote",1649741032),self__.unquote,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"unquote-splicing","unquote-splicing",1295267556),self__.unquote_splicing,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"quote","quote",-262615245),self__.quote,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"var","var",-769682797),self__.var$,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"read-eval","read-eval",1788733932),self__.read_eval,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"regex","regex",939488856),self__.regex,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"row-key","row-key",-1189010712),self__.row_key,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"col-key","col-key",-2009675766),self__.col_key,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"end-row-key","end-row-key",-1126662680),self__.end_row_key,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"end-col-key","end-col-key",81813304),self__.end_col_key,null))], null),self__.__extmap));
}));

(edamame.impl.parser.Options.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__38471){
var self__ = this;
var this__4460__auto____$1 = this;
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,self__.unquote,self__.unquote_splicing,self__.quote,self__.fn,self__.var$,self__.read_eval,self__.regex,self__.row_key,self__.col_key,self__.end_row_key,self__.end_col_key,G__38471,self__.__extmap,self__.__hash));
}));

(edamame.impl.parser.Options.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4467__auto__,(0)),cljs.core._nth.call(null,entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(edamame.impl.parser.Options.getBasis = (function (){
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dispatch","dispatch",-1335098760,null),new cljs.core.Symbol(null,"deref","deref",1494944732,null),new cljs.core.Symbol(null,"syntax-quote","syntax-quote",407366680,null),new cljs.core.Symbol(null,"unquote","unquote",-1004694737,null),new cljs.core.Symbol(null,"unquote-splicing","unquote-splicing",-1359168213,null),new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"var","var",870848730,null),new cljs.core.Symbol(null,"read-eval","read-eval",-865701837,null),new cljs.core.Symbol(null,"regex","regex",-1714946913,null),new cljs.core.Symbol(null,"row-key","row-key",451520815,null),new cljs.core.Symbol(null,"col-key","col-key",-369144239,null),new cljs.core.Symbol(null,"end-row-key","end-row-key",513868847,null),new cljs.core.Symbol(null,"end-col-key","end-col-key",1722344831,null)], null);
}));

(edamame.impl.parser.Options.cljs$lang$type = true);

(edamame.impl.parser.Options.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"edamame.impl.parser/Options",null,(1),null));
}));

(edamame.impl.parser.Options.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write.call(null,writer__4506__auto__,"edamame.impl.parser/Options");
}));

/**
 * Positional factory function for edamame.impl.parser/Options.
 */
edamame.impl.parser.__GT_Options = (function edamame$impl$parser$__GT_Options(dispatch,deref,syntax_quote,unquote,unquote_splicing,quote,fn,var$,read_eval,regex,row_key,col_key,end_row_key,end_col_key){
return (new edamame.impl.parser.Options(dispatch,deref,syntax_quote,unquote,unquote_splicing,quote,fn,var$,read_eval,regex,row_key,col_key,end_row_key,end_col_key,null,null,null));
});

/**
 * Factory function for edamame.impl.parser/Options, taking a map of keywords to field values.
 */
edamame.impl.parser.map__GT_Options = (function edamame$impl$parser$map__GT_Options(G__38475){
var extmap__4501__auto__ = (function (){var G__38485 = cljs.core.dissoc.call(null,G__38475,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.Keyword(null,"deref","deref",-145586795),new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847),new cljs.core.Keyword(null,"unquote","unquote",1649741032),new cljs.core.Keyword(null,"unquote-splicing","unquote-splicing",1295267556),new cljs.core.Keyword(null,"quote","quote",-262615245),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"var","var",-769682797),new cljs.core.Keyword(null,"read-eval","read-eval",1788733932),new cljs.core.Keyword(null,"regex","regex",939488856),new cljs.core.Keyword(null,"row-key","row-key",-1189010712),new cljs.core.Keyword(null,"col-key","col-key",-2009675766),new cljs.core.Keyword(null,"end-row-key","end-row-key",-1126662680),new cljs.core.Keyword(null,"end-col-key","end-col-key",81813304));
if(cljs.core.record_QMARK_.call(null,G__38475)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__38485);
} else {
return G__38485;
}
})();
return (new edamame.impl.parser.Options(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009).cljs$core$IFn$_invoke$arity$1(G__38475),new cljs.core.Keyword(null,"deref","deref",-145586795).cljs$core$IFn$_invoke$arity$1(G__38475),new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847).cljs$core$IFn$_invoke$arity$1(G__38475),new cljs.core.Keyword(null,"unquote","unquote",1649741032).cljs$core$IFn$_invoke$arity$1(G__38475),new cljs.core.Keyword(null,"unquote-splicing","unquote-splicing",1295267556).cljs$core$IFn$_invoke$arity$1(G__38475),new cljs.core.Keyword(null,"quote","quote",-262615245).cljs$core$IFn$_invoke$arity$1(G__38475),new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__38475),new cljs.core.Keyword(null,"var","var",-769682797).cljs$core$IFn$_invoke$arity$1(G__38475),new cljs.core.Keyword(null,"read-eval","read-eval",1788733932).cljs$core$IFn$_invoke$arity$1(G__38475),new cljs.core.Keyword(null,"regex","regex",939488856).cljs$core$IFn$_invoke$arity$1(G__38475),new cljs.core.Keyword(null,"row-key","row-key",-1189010712).cljs$core$IFn$_invoke$arity$1(G__38475),new cljs.core.Keyword(null,"col-key","col-key",-2009675766).cljs$core$IFn$_invoke$arity$1(G__38475),new cljs.core.Keyword(null,"end-row-key","end-row-key",-1126662680).cljs$core$IFn$_invoke$arity$1(G__38475),new cljs.core.Keyword(null,"end-col-key","end-col-key",81813304).cljs$core$IFn$_invoke$arity$1(G__38475),null,cljs.core.not_empty.call(null,extmap__4501__auto__),null));
});

edamame.impl.parser.normalize_opts = (function edamame$impl$parser$normalize_opts(opts){
var opts__$1 = (function (){var temp__5751__auto__ = new cljs.core.Keyword(null,"dispatch","dispatch",1319337009).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5751__auto__)){
var dispatch = temp__5751__auto__;
return cljs.core.into.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009)),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var temp__5753__auto__ = cljs.core.get_in.call(null,dispatch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["@"], null));
if(cljs.core.truth_(temp__5753__auto__)){
var v = temp__5753__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"deref","deref",-145586795),v], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get_in.call(null,dispatch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`"], null));
if(cljs.core.truth_(temp__5753__auto__)){
var v = temp__5753__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847),v], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get_in.call(null,dispatch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["~"], null));
if(cljs.core.truth_(temp__5753__auto__)){
var v = temp__5753__auto__;
if(cljs.core.fn_QMARK_.call(null,v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unquote","unquote",1649741032),v], null);
} else {
var temp__5753__auto____$1 = new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(v);
if(cljs.core.truth_(temp__5753__auto____$1)){
var v__$1 = temp__5753__auto____$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unquote","unquote",1649741032),v__$1], null);
} else {
return null;
}
}
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get_in.call(null,dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["~","@"], null));
if(cljs.core.truth_(temp__5753__auto__)){
var v = temp__5753__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unquote-splicing","unquote-splicing",1295267556),v], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get_in.call(null,dispatch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["'"], null));
if(cljs.core.truth_(temp__5753__auto__)){
var v = temp__5753__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"quote","quote",-262615245),v], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get_in.call(null,dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#","("], null));
if(cljs.core.truth_(temp__5753__auto__)){
var v = temp__5753__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),v], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get_in.call(null,dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#","'"], null));
if(cljs.core.truth_(temp__5753__auto__)){
var v = temp__5753__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"var","var",-769682797),v], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get_in.call(null,dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#","="], null));
if(cljs.core.truth_(temp__5753__auto__)){
var v = temp__5753__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"read-eval","read-eval",1788733932),v], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get_in.call(null,dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#","\""], null));
if(cljs.core.truth_(temp__5753__auto__)){
var v = temp__5753__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"regex","regex",939488856),v], null);
} else {
return null;
}
})()], null));
} else {
return opts;
}
})();
var opts__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"all","all",892129742).cljs$core$IFn$_invoke$arity$1(opts__$1))?cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"deref","deref",-145586795),true,new cljs.core.Keyword(null,"fn","fn",-1175266204),true,new cljs.core.Keyword(null,"quote","quote",-262615245),true,new cljs.core.Keyword(null,"read-eval","read-eval",1788733932),true,new cljs.core.Keyword(null,"regex","regex",939488856),true,new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847),true,new cljs.core.Keyword(null,"var","var",-769682797),true], null),opts__$1):opts__$1);
var opts__$3 = (function (){var G__38488 = opts__$2;
var G__38488__$1 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"row-key","row-key",-1189010712).cljs$core$IFn$_invoke$arity$1(opts__$2)))?cljs.core.assoc.call(null,G__38488,new cljs.core.Keyword(null,"row-key","row-key",-1189010712),new cljs.core.Keyword(null,"row","row",-570139521)):G__38488);
var G__38488__$2 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"end-row-key","end-row-key",-1126662680).cljs$core$IFn$_invoke$arity$1(opts__$2)))?cljs.core.assoc.call(null,G__38488__$1,new cljs.core.Keyword(null,"end-row-key","end-row-key",-1126662680),new cljs.core.Keyword(null,"end-row","end-row",-545103581)):G__38488__$1);
var G__38488__$3 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"col-key","col-key",-2009675766).cljs$core$IFn$_invoke$arity$1(opts__$2)))?cljs.core.assoc.call(null,G__38488__$2,new cljs.core.Keyword(null,"col-key","col-key",-2009675766),new cljs.core.Keyword(null,"col","col",-1959363084)):G__38488__$2);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"end-col-key","end-col-key",81813304).cljs$core$IFn$_invoke$arity$1(opts__$2))){
return cljs.core.assoc.call(null,G__38488__$3,new cljs.core.Keyword(null,"end-col-key","end-col-key",81813304),new cljs.core.Keyword(null,"end-col","end-col",-724155879));
} else {
return G__38488__$3;
}
})();
var opts__$4 = (function (){var temp__5751__auto__ = new cljs.core.Keyword(null,"readers","readers",-2118263030).cljs$core$IFn$_invoke$arity$1(opts__$3);
if(cljs.core.truth_(temp__5751__auto__)){
var readers = temp__5751__auto__;
return cljs.core.update_in.call(null,opts__$3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tools.reader","opts","tools.reader/opts",-2121810901),new cljs.core.Keyword(null,"readers","readers",-2118263030)], null),cljs.core.merge,readers);
} else {
return opts__$3;
}
})();
return edamame.impl.parser.map__GT_Options.call(null,opts__$4);
});
edamame.impl.parser.parse_string = (function edamame$impl$parser$parse_string(s,opts){
var opts__$1 = edamame.impl.parser.normalize_opts.call(null,opts);
var r = edamame.impl.parser.string_reader.call(null,s);
var ctx = cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword("edamame.impl.parser","expected-delimiter","edamame.impl.parser/expected-delimiter",2057965803),null);
var v = edamame.impl.parser.parse_next.call(null,ctx,r);
if(edamame.impl.parser.kw_identical_QMARK_.call(null,new cljs.core.Keyword("edamame.impl.parser","eof","edamame.impl.parser/eof",720552006),v)){
return null;
} else {
return v;
}
});
edamame.impl.parser.parse_string_all = (function edamame$impl$parser$parse_string_all(s,opts){
var opts__$1 = edamame.impl.parser.normalize_opts.call(null,opts);
var r = edamame.impl.parser.string_reader.call(null,s);
var ctx = cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword("edamame.impl.parser","expected-delimiter","edamame.impl.parser/expected-delimiter",2057965803),null);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
var next_val = edamame.impl.parser.parse_next.call(null,ctx,r);
if(edamame.impl.parser.kw_identical_QMARK_.call(null,new cljs.core.Keyword("edamame.impl.parser","eof","edamame.impl.parser/eof",720552006),next_val)){
return cljs.core.persistent_BANG_.call(null,ret);
} else {
var G__38489 = cljs.core.conj_BANG_.call(null,ret,next_val);
ret = G__38489;
continue;
}
break;
}
});

//# sourceMappingURL=parser.js.map
