// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('cljs.tools.reader');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.tools.reader.reader_types');
goog.require('cljs.tools.reader.impl.utils');
goog.require('cljs.tools.reader.impl.commons');
goog.require('cljs.tools.reader.impl.errors');
goog.require('goog.array');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');






cljs.tools.reader.macro_terminating_QMARK_ = (function cljs$tools$reader$macro_terminating_QMARK_(ch){
var G__12873 = ch;
switch (G__12873) {
case "\"":
case ";":
case "@":
case "^":
case "`":
case "~":
case "(":
case ")":
case "[":
case "]":
case "{":
case "}":
case "\\":
return true;

break;
default:
return false;

}
});
cljs.tools.reader.sb = (new goog.string.StringBuffer());
/**
 * Read in a single logical token from the reader
 */
cljs.tools.reader.read_token = (function cljs$tools$reader$read_token(rdr,kind,initch){
if((initch == null)){
return cljs.tools.reader.impl.errors.throw_eof_at_start(rdr,kind);
} else {
cljs.tools.reader.sb.clear();

var ch = initch;
while(true){
if(((cljs.tools.reader.impl.utils.whitespace_QMARK_(ch)) || (((cljs.tools.reader.macro_terminating_QMARK_(ch)) || ((ch == null)))))){
if((ch == null)){
} else {
rdr.cljs$tools$reader$reader_types$IPushbackReader$unread$arity$2(null,ch);
}

return cljs.tools.reader.sb.toString();
} else {
cljs.tools.reader.sb.append(ch);

var G__12875 = rdr.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
ch = G__12875;
continue;
}
break;
}
}
});
cljs.tools.reader.read_dispatch = (function cljs$tools$reader$read_dispatch(rdr,_,opts,pending_forms){
var temp__5733__auto__ = rdr.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
if(cljs.core.truth_(temp__5733__auto__)){
var ch = temp__5733__auto__;
var temp__5733__auto____$1 = (cljs.tools.reader.dispatch_macros.cljs$core$IFn$_invoke$arity$1 ? cljs.tools.reader.dispatch_macros.cljs$core$IFn$_invoke$arity$1(ch) : cljs.tools.reader.dispatch_macros.call(null,ch));
if(cljs.core.truth_(temp__5733__auto____$1)){
var dm = temp__5733__auto____$1;
return (dm.cljs$core$IFn$_invoke$arity$4 ? dm.cljs$core$IFn$_invoke$arity$4(rdr,ch,opts,pending_forms) : dm.call(null,rdr,ch,opts,pending_forms));
} else {
var G__12876 = (function (){var G__12880 = rdr;
G__12880.cljs$tools$reader$reader_types$IPushbackReader$unread$arity$2(null,ch);

return G__12880;
})();
var G__12877 = ch;
var G__12878 = opts;
var G__12879 = pending_forms;
return (cljs.tools.reader.read_tagged.cljs$core$IFn$_invoke$arity$4 ? cljs.tools.reader.read_tagged.cljs$core$IFn$_invoke$arity$4(G__12876,G__12877,G__12878,G__12879) : cljs.tools.reader.read_tagged.call(null,G__12876,G__12877,G__12878,G__12879));
}
} else {
return cljs.tools.reader.impl.errors.throw_eof_at_dispatch(rdr);
}
});
cljs.tools.reader.read_unmatched_delimiter = (function cljs$tools$reader$read_unmatched_delimiter(rdr,ch,opts,pending_forms){
return cljs.tools.reader.impl.errors.throw_unmatch_delimiter(rdr,ch);
});
cljs.tools.reader.read_regex = (function cljs$tools$reader$read_regex(rdr,ch,opts,pending_forms){
var sb = (new goog.string.StringBuffer());
var ch__$1 = rdr.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
while(true){
if(("\"" === ch__$1)){
return cljs.core.re_pattern(cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb));
} else {
if((ch__$1 == null)){
return cljs.tools.reader.impl.errors.throw_eof_reading.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.cst$kw$regex,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sb], 0));
} else {
sb.append(ch__$1);

if(("\\" === ch__$1)){
var ch_12881__$2 = rdr.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
if((ch_12881__$2 == null)){
cljs.tools.reader.impl.errors.throw_eof_reading.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.cst$kw$regex,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sb], 0));
} else {
}

sb.append(ch_12881__$2);
} else {
}

var G__12882 = rdr.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
ch__$1 = G__12882;
continue;
}
}
break;
}
});
cljs.tools.reader.read_unicode_char = (function cljs$tools$reader$read_unicode_char(var_args){
var G__12884 = arguments.length;
switch (G__12884) {
case 4:
return cljs.tools.reader.read_unicode_char.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.tools.reader.read_unicode_char.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.tools.reader.read_unicode_char.cljs$core$IFn$_invoke$arity$4 = (function (token,offset,length,base){
var l = (offset + length);
if((cljs.core.count(token) === l)){
} else {
cljs.tools.reader.impl.errors.throw_invalid_unicode_literal(null,token);
}

var i = offset;
var uc = (0);
while(true){
if((i === l)){
return String.fromCharCode(uc);
} else {
var d = cljs.tools.reader.impl.utils.char_code(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(token,i),base);
if((d === (-1))){
return cljs.tools.reader.impl.errors.throw_invalid_unicode_digit_in_token(null,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(token,i),token);
} else {
var G__12886 = (i + (1));
var G__12887 = (d + (uc * base));
i = G__12886;
uc = G__12887;
continue;
}
}
break;
}
}));

(cljs.tools.reader.read_unicode_char.cljs$core$IFn$_invoke$arity$5 = (function (rdr,initch,base,length,exact_QMARK_){
var i = (1);
var uc = cljs.tools.reader.impl.utils.char_code(initch,base);
while(true){
if((uc === (-1))){
return cljs.tools.reader.impl.errors.throw_invalid_unicode_digit(rdr,initch);
} else {
if((!((i === length)))){
var ch = rdr.cljs$tools$reader$reader_types$Reader$peek_char$arity$1(null);
if(cljs.core.truth_((function (){var or__4212__auto__ = cljs.tools.reader.impl.utils.whitespace_QMARK_(ch);
if(or__4212__auto__){
return or__4212__auto__;
} else {
var or__4212__auto____$1 = (cljs.tools.reader.macros.cljs$core$IFn$_invoke$arity$1 ? cljs.tools.reader.macros.cljs$core$IFn$_invoke$arity$1(ch) : cljs.tools.reader.macros.call(null,ch));
if(cljs.core.truth_(or__4212__auto____$1)){
return or__4212__auto____$1;
} else {
return (ch == null);
}
}
})())){
if(cljs.core.truth_(exact_QMARK_)){
return cljs.tools.reader.impl.errors.throw_invalid_unicode_len(rdr,i,length);
} else {
return String.fromCharCode(uc);
}
} else {
var d = cljs.tools.reader.impl.utils.char_code(ch,base);
rdr.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

if((d === (-1))){
return cljs.tools.reader.impl.errors.throw_invalid_unicode_digit(rdr,ch);
} else {
var G__12888 = (i + (1));
var G__12889 = (d + (uc * base));
i = G__12888;
uc = G__12889;
continue;
}
}
} else {
return String.fromCharCode(uc);
}
}
break;
}
}));

(cljs.tools.reader.read_unicode_char.cljs$lang$maxFixedArity = 5);

cljs.tools.reader.upper_limit = "\uD7FF".charCodeAt((0));
cljs.tools.reader.lower_limit = "\uE000".charCodeAt((0));
cljs.tools.reader.valid_octal_QMARK_ = (function cljs$tools$reader$valid_octal_QMARK_(token,base){
return (parseInt(token,base) <= (255));
});
/**
 * Read in a character literal
 */
cljs.tools.reader.read_char_STAR_ = (function cljs$tools$reader$read_char_STAR_(rdr,backslash,opts,pending_forms){
var ch = rdr.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
if((!((ch == null)))){
var token = ((((cljs.tools.reader.macro_terminating_QMARK_(ch)) || (cljs.tools.reader.impl.utils.whitespace_QMARK_(ch))))?cljs.core.str.cljs$core$IFn$_invoke$arity$1(ch):cljs.tools.reader.read_token(rdr,cljs.core.cst$kw$character,ch));
var token_len = token.length;
if(((1) === token_len)){
return token.charAt((0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(token,"newline")){
return "\n";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(token,"space")){
return " ";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(token,"tab")){
return "\t";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(token,"backspace")){
return "\b";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(token,"formfeed")){
return "\f";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(token,"return")){
return "\r";
} else {
if(goog.string.startsWith(token,"u")){
var c = cljs.tools.reader.read_unicode_char.cljs$core$IFn$_invoke$arity$4(token,(1),(4),(16));
var ic = c.charCodeAt((0));
if((((ic > cljs.tools.reader.upper_limit)) && ((ic < cljs.tools.reader.lower_limit)))){
return cljs.tools.reader.impl.errors.throw_invalid_character_literal(rdr,ic.toString((16)));
} else {
return c;
}
} else {
if(goog.string.startsWith(token,"o")){
var len = (token_len - (1));
if((len > (3))){
return cljs.tools.reader.impl.errors.throw_invalid_octal_len(rdr,token);
} else {
var offset = (1);
var base = (8);
var uc = cljs.tools.reader.read_unicode_char.cljs$core$IFn$_invoke$arity$4(token,offset,len,base);
if((!(cljs.tools.reader.valid_octal_QMARK_(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(token,offset),base)))){
return cljs.tools.reader.impl.errors.throw_bad_octal_number(rdr);
} else {
return uc;
}
}
} else {
return cljs.tools.reader.impl.errors.throw_unsupported_character(rdr,token);

}
}
}
}
}
}
}
}
}
} else {
return cljs.tools.reader.impl.errors.throw_eof_in_character(rdr);
}
});
cljs.tools.reader.starting_line_col_info = (function cljs$tools$reader$starting_line_col_info(rdr){
if(cljs.tools.reader.reader_types.indexing_reader_QMARK_(rdr)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rdr.cljs$tools$reader$reader_types$IndexingReader$get_line_number$arity$1(null),((rdr.cljs$tools$reader$reader_types$IndexingReader$get_column_number$arity$1(null) - (1)) | (0))], null);
} else {
return null;
}
});
cljs.tools.reader.ending_line_col_info = (function cljs$tools$reader$ending_line_col_info(rdr){
if(cljs.tools.reader.reader_types.indexing_reader_QMARK_(rdr)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rdr.cljs$tools$reader$reader_types$IndexingReader$get_line_number$arity$1(null),rdr.cljs$tools$reader$reader_types$IndexingReader$get_column_number$arity$1(null)], null);
} else {
return null;
}
});
if((typeof cljs !== 'undefined') && (typeof cljs.tools !== 'undefined') && (typeof cljs.tools.reader !== 'undefined') && (typeof cljs.tools.reader.READ_EOF !== 'undefined')){
} else {
cljs.tools.reader.READ_EOF = (new Object());
}
if((typeof cljs !== 'undefined') && (typeof cljs.tools !== 'undefined') && (typeof cljs.tools.reader !== 'undefined') && (typeof cljs.tools.reader.READ_FINISHED !== 'undefined')){
} else {
cljs.tools.reader.READ_FINISHED = (new Object());
}
cljs.tools.reader._STAR_read_delim_STAR_ = false;
cljs.tools.reader.read_delimited_internal = (function cljs$tools$reader$read_delimited_internal(kind,delim,rdr,opts,pending_forms){
var vec__12890 = cljs.tools.reader.starting_line_col_info(rdr);
var start_line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12890,(0),null);
var start_column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12890,(1),null);
var delim__$1 = cljs.tools.reader.impl.utils.char$(delim);
var a = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
while(true){
var form = (cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$6 ? cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$6(rdr,false,cljs.tools.reader.READ_EOF,delim__$1,opts,pending_forms) : cljs.tools.reader.read_STAR_.call(null,rdr,false,cljs.tools.reader.READ_EOF,delim__$1,opts,pending_forms));
if((form === cljs.tools.reader.READ_FINISHED)){
return cljs.core.persistent_BANG_(a);
} else {
if((form === cljs.tools.reader.READ_EOF)){
return cljs.tools.reader.impl.errors.throw_eof_delimited.cljs$core$IFn$_invoke$arity$5(rdr,kind,start_line,start_column,cljs.core.count(a));
} else {
var G__12893 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(a,form);
a = G__12893;
continue;
}
}
break;
}
});
/**
 * Reads and returns a collection ended with delim
 */
cljs.tools.reader.read_delimited = (function cljs$tools$reader$read_delimited(kind,delim,rdr,opts,pending_forms){
var _STAR_read_delim_STAR__orig_val__12894 = cljs.tools.reader._STAR_read_delim_STAR_;
var _STAR_read_delim_STAR__temp_val__12895 = true;
(cljs.tools.reader._STAR_read_delim_STAR_ = _STAR_read_delim_STAR__temp_val__12895);

try{return cljs.tools.reader.read_delimited_internal(kind,delim,rdr,opts,pending_forms);
}finally {(cljs.tools.reader._STAR_read_delim_STAR_ = _STAR_read_delim_STAR__orig_val__12894);
}});
/**
 * Read in a list, including its location if the reader is an indexing reader
 */
cljs.tools.reader.read_list = (function cljs$tools$reader$read_list(rdr,_,opts,pending_forms){
var vec__12896 = cljs.tools.reader.starting_line_col_info(rdr);
var start_line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12896,(0),null);
var start_column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12896,(1),null);
var the_list = cljs.tools.reader.read_delimited(cljs.core.cst$kw$list,")",rdr,opts,pending_forms);
var vec__12899 = cljs.tools.reader.ending_line_col_info(rdr);
var end_line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12899,(0),null);
var end_column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12899,(1),null);
return cljs.core.with_meta(((cljs.core.empty_QMARK_(the_list))?cljs.core.List.EMPTY:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.list,the_list)),(cljs.core.truth_(start_line)?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var temp__5735__auto__ = cljs.tools.reader.reader_types.get_file_name(rdr);
if(cljs.core.truth_(temp__5735__auto__)){
var file = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$file,file], null);
} else {
return null;
}
})(),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$line,start_line,cljs.core.cst$kw$column,start_column,cljs.core.cst$kw$end_DASH_line,end_line,cljs.core.cst$kw$end_DASH_column,end_column], null)], 0)):null));
});
/**
 * Read in a vector, including its location if the reader is an indexing reader
 */
cljs.tools.reader.read_vector = (function cljs$tools$reader$read_vector(rdr,_,opts,pending_forms){
var vec__12902 = cljs.tools.reader.starting_line_col_info(rdr);
var start_line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12902,(0),null);
var start_column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12902,(1),null);
var the_vector = cljs.tools.reader.read_delimited(cljs.core.cst$kw$vector,"]",rdr,opts,pending_forms);
var vec__12905 = cljs.tools.reader.ending_line_col_info(rdr);
var end_line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12905,(0),null);
var end_column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12905,(1),null);
return cljs.core.with_meta(the_vector,(cljs.core.truth_(start_line)?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var temp__5735__auto__ = cljs.tools.reader.reader_types.get_file_name(rdr);
if(cljs.core.truth_(temp__5735__auto__)){
var file = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$file,file], null);
} else {
return null;
}
})(),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$line,start_line,cljs.core.cst$kw$column,start_column,cljs.core.cst$kw$end_DASH_line,end_line,cljs.core.cst$kw$end_DASH_column,end_column], null)], 0)):null));
});
/**
 * Read in a map, including its location if the reader is an indexing reader
 */
cljs.tools.reader.read_map = (function cljs$tools$reader$read_map(rdr,_,opts,pending_forms){
var vec__12908 = cljs.tools.reader.starting_line_col_info(rdr);
var start_line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12908,(0),null);
var start_column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12908,(1),null);
var the_map = cljs.tools.reader.read_delimited(cljs.core.cst$kw$map,"}",rdr,opts,pending_forms);
var map_count = cljs.core.count(the_map);
var ks = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),the_map);
var key_set = cljs.core.set(ks);
var vec__12911 = cljs.tools.reader.ending_line_col_info(rdr);
var end_line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12911,(0),null);
var end_column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12911,(1),null);
if(cljs.core.odd_QMARK_(map_count)){
cljs.tools.reader.impl.errors.throw_odd_map(rdr,start_line,start_column,the_map);
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(key_set),cljs.core.count(ks))){
} else {
cljs.tools.reader.impl.errors.throw_dup_keys(rdr,cljs.core.cst$kw$map,ks);
}

return cljs.core.with_meta((((map_count <= ((2) * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)))?cljs.core.PersistentArrayMap.fromArray(cljs.core.to_array(the_map),true,true):cljs.core.PersistentHashMap.fromArray(cljs.core.to_array(the_map),true)),(cljs.core.truth_(start_line)?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var temp__5735__auto__ = cljs.tools.reader.reader_types.get_file_name(rdr);
if(cljs.core.truth_(temp__5735__auto__)){
var file = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$file,file], null);
} else {
return null;
}
})(),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$line,start_line,cljs.core.cst$kw$column,start_column,cljs.core.cst$kw$end_DASH_line,end_line,cljs.core.cst$kw$end_DASH_column,end_column], null)], 0)):null));
});
cljs.tools.reader.read_number = (function cljs$tools$reader$read_number(rdr,initch){
var sb = (function (){var G__12914 = (new goog.string.StringBuffer());
G__12914.append(initch);

return G__12914;
})();
var ch = rdr.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
while(true){
if(cljs.core.truth_((function (){var or__4212__auto__ = cljs.tools.reader.impl.utils.whitespace_QMARK_(ch);
if(or__4212__auto__){
return or__4212__auto__;
} else {
var or__4212__auto____$1 = (cljs.tools.reader.macros.cljs$core$IFn$_invoke$arity$1 ? cljs.tools.reader.macros.cljs$core$IFn$_invoke$arity$1(ch) : cljs.tools.reader.macros.call(null,ch));
if(cljs.core.truth_(or__4212__auto____$1)){
return or__4212__auto____$1;
} else {
return (ch == null);
}
}
})())){
var s = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb);
rdr.cljs$tools$reader$reader_types$IPushbackReader$unread$arity$2(null,ch);

var or__4212__auto__ = cljs.tools.reader.impl.commons.match_number(s);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.tools.reader.impl.errors.throw_invalid_number(rdr,s);
}
} else {
var G__12916 = (function (){var G__12915 = sb;
G__12915.append(ch);

return G__12915;
})();
var G__12917 = rdr.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
sb = G__12916;
ch = G__12917;
continue;
}
break;
}
});
cljs.tools.reader.escape_char = (function cljs$tools$reader$escape_char(sb,rdr){
var ch = rdr.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
var G__12918 = ch;
switch (G__12918) {
case "t":
return "\t";

break;
case "r":
return "\r";

break;
case "n":
return "\n";

break;
case "\\":
return "\\";

break;
case "\"":
return "\"";

break;
case "b":
return "\b";

break;
case "f":
return "\f";

break;
case "u":
var ch__$1 = rdr.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
if(((-1) === parseInt((ch__$1 | (0)),(16)))){
return cljs.tools.reader.impl.errors.throw_invalid_unicode_escape(rdr,ch__$1);
} else {
return cljs.tools.reader.read_unicode_char.cljs$core$IFn$_invoke$arity$5(rdr,ch__$1,(16),(4),true);
}

break;
default:
if(cljs.tools.reader.impl.utils.numeric_QMARK_(ch)){
var ch__$1 = cljs.tools.reader.read_unicode_char.cljs$core$IFn$_invoke$arity$5(rdr,ch,(8),(3),false);
if(((ch__$1 | (0)) > (255))){
return cljs.tools.reader.impl.errors.throw_bad_octal_number(rdr);
} else {
return ch__$1;
}
} else {
return cljs.tools.reader.impl.errors.throw_bad_escape_char(rdr,ch);
}

}
});
cljs.tools.reader.read_string_STAR_ = (function cljs$tools$reader$read_string_STAR_(reader,_,opts,pending_forms){
var sb = (new goog.string.StringBuffer());
var ch = reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
while(true){
if((ch == null)){
return cljs.tools.reader.impl.errors.throw_eof_reading.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.cst$kw$string,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\"",sb], 0));
} else {
var G__12920 = ch;
switch (G__12920) {
case "\\":
var G__12924 = (function (){var G__12921 = sb;
G__12921.append(cljs.tools.reader.escape_char(sb,reader));

return G__12921;
})();
var G__12925 = reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
sb = G__12924;
ch = G__12925;
continue;

break;
case "\"":
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb);

break;
default:
var G__12926 = (function (){var G__12922 = sb;
G__12922.append(ch);

return G__12922;
})();
var G__12927 = reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
sb = G__12926;
ch = G__12927;
continue;

}
}
break;
}
});
cljs.tools.reader.loc_info = (function cljs$tools$reader$loc_info(rdr,line,column){
if((line == null)){
return null;
} else {
var file = cljs.tools.reader.reader_types.get_file_name(rdr);
var filem = (((file == null))?null:new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$file,file], null));
var vec__12928 = cljs.tools.reader.ending_line_col_info(rdr);
var end_line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12928,(0),null);
var end_column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12928,(1),null);
var lcm = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$line,line,cljs.core.cst$kw$column,column,cljs.core.cst$kw$end_DASH_line,end_line,cljs.core.cst$kw$end_DASH_column,end_column], null);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([filem,lcm], 0));
}
});
cljs.tools.reader.read_symbol = (function cljs$tools$reader$read_symbol(rdr,initch){
var vec__12931 = cljs.tools.reader.starting_line_col_info(rdr);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12931,(0),null);
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12931,(1),null);
var token = cljs.tools.reader.read_token(rdr,cljs.core.cst$kw$symbol,initch);
if((token == null)){
return null;
} else {
var G__12934 = token;
switch (G__12934) {
case "nil":
return null;

break;
case "true":
return true;

break;
case "false":
return false;

break;
case "/":
return cljs.core.cst$sym$_SLASH_;

break;
default:
var p = cljs.tools.reader.impl.commons.parse_symbol(token);
if((!((p == null)))){
var sym = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(p.cljs$core$IIndexed$_nth$arity$2(null,(0)),p.cljs$core$IIndexed$_nth$arity$2(null,(1)));
return sym.cljs$core$IWithMeta$_with_meta$arity$2(null,cljs.tools.reader.loc_info(rdr,line,column));
} else {
return cljs.tools.reader.impl.errors.throw_invalid(rdr,cljs.core.cst$kw$symbol,token);
}

}
}
});
/**
 * Map from ns alias to ns, if non-nil, it will be used to resolve read-time
 * ns aliases.
 * 
 * Defaults to nil
 */
cljs.tools.reader._STAR_alias_map_STAR_ = null;
cljs.tools.reader.resolve_alias = (function cljs$tools$reader$resolve_alias(sym){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.tools.reader._STAR_alias_map_STAR_,sym);
});
cljs.tools.reader.resolve_ns = (function cljs$tools$reader$resolve_ns(sym){
var or__4212__auto__ = cljs.tools.reader.resolve_alias(sym);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var temp__5735__auto__ = cljs.core.find_ns(sym);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(ns));
} else {
return null;
}
}
});
cljs.tools.reader.read_keyword = (function cljs$tools$reader$read_keyword(reader,initch,opts,pending_forms){
var ch = reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
if((!(cljs.tools.reader.impl.utils.whitespace_QMARK_(ch)))){
var token = cljs.tools.reader.read_token(reader,cljs.core.cst$kw$keyword,ch);
var s = cljs.tools.reader.impl.commons.parse_symbol(token);
if((!((s == null)))){
var ns = s.cljs$core$IIndexed$_nth$arity$2(null,(0));
var name = s.cljs$core$IIndexed$_nth$arity$2(null,(1));
if((":" === token.charAt((0)))){
if((!((ns == null)))){
var temp__5733__auto__ = cljs.tools.reader.resolve_alias(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(ns,(1))));
if(cljs.core.truth_(temp__5733__auto__)){
var ns__$1 = temp__5733__auto__;
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns__$1),name);
} else {
return cljs.tools.reader.impl.errors.throw_invalid(reader,cljs.core.cst$kw$keyword,[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(token)].join(''));
}
} else {
var temp__5733__auto__ = cljs.core._STAR_ns_STAR_;
if(cljs.core.truth_(temp__5733__auto__)){
var ns__$1 = temp__5733__auto__;
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns__$1),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(name,(1)));
} else {
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid token: :",token], 0));
}
}
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(ns,name);
}
} else {
return cljs.tools.reader.impl.errors.throw_invalid(reader,cljs.core.cst$kw$keyword,[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(token)].join(''));
}
} else {
return cljs.tools.reader.impl.errors.throw_single_colon(reader);
}
});
/**
 * Returns a function which wraps a reader in a call to sym
 */
cljs.tools.reader.wrapping_reader = (function cljs$tools$reader$wrapping_reader(sym){
return (function (rdr,_,opts,pending_forms){
return (new cljs.core.List(null,sym,(new cljs.core.List(null,(cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$5 ? cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$5(rdr,true,null,opts,pending_forms) : cljs.tools.reader.read_STAR_.call(null,rdr,true,null,opts,pending_forms)),null,(1),null)),(2),null));
});
});
/**
 * Read metadata and return the following object with the metadata applied
 */
cljs.tools.reader.read_meta = (function cljs$tools$reader$read_meta(rdr,_,opts,pending_forms){
if(((cljs.tools.reader.reader_types.source_logging_reader_QMARK_(rdr)) && ((!(cljs.tools.reader.impl.utils.whitespace_QMARK_(cljs.tools.reader.reader_types.peek_char(rdr))))))){
return cljs.tools.reader.reader_types.log_source_STAR_(rdr,(function (){
var vec__12936 = cljs.tools.reader.starting_line_col_info(rdr);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12936,(0),null);
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12936,(1),null);
var m = cljs.tools.reader.impl.utils.desugar_meta((cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$5 ? cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$5(rdr,true,null,opts,pending_forms) : cljs.tools.reader.read_STAR_.call(null,rdr,true,null,opts,pending_forms)));
if(cljs.core.map_QMARK_(m)){
} else {
cljs.tools.reader.impl.errors.throw_bad_metadata(rdr,m);
}

var o = (cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$5 ? cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$5(rdr,true,null,opts,pending_forms) : cljs.tools.reader.read_STAR_.call(null,rdr,true,null,opts,pending_forms));
if((((!((o == null))))?(((((o.cljs$lang$protocol_mask$partition0$ & (131072))) || ((cljs.core.PROTOCOL_SENTINEL === o.cljs$core$IMeta$))))?true:false):false)){
var m__$1 = (cljs.core.truth_((function (){var and__4210__auto__ = line;
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.seq_QMARK_(o);
} else {
return and__4210__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,cljs.core.cst$kw$line,line,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$column,column], 0)):m);
if((((!((o == null))))?(((((o.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === o.cljs$core$IWithMeta$))))?true:false):false)){
return cljs.core.with_meta(o,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.meta(o),m__$1], 0)));
} else {
return cljs.core.reset_meta_BANG_(o,m__$1);
}
} else {
return cljs.tools.reader.impl.errors.throw_bad_metadata_target(rdr,o);
}
}));
} else {
var vec__12941 = cljs.tools.reader.starting_line_col_info(rdr);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12941,(0),null);
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12941,(1),null);
var m = cljs.tools.reader.impl.utils.desugar_meta((cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$5 ? cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$5(rdr,true,null,opts,pending_forms) : cljs.tools.reader.read_STAR_.call(null,rdr,true,null,opts,pending_forms)));
if(cljs.core.map_QMARK_(m)){
} else {
cljs.tools.reader.impl.errors.throw_bad_metadata(rdr,m);
}

var o = (cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$5 ? cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$5(rdr,true,null,opts,pending_forms) : cljs.tools.reader.read_STAR_.call(null,rdr,true,null,opts,pending_forms));
if((((!((o == null))))?(((((o.cljs$lang$protocol_mask$partition0$ & (131072))) || ((cljs.core.PROTOCOL_SENTINEL === o.cljs$core$IMeta$))))?true:false):false)){
var m__$1 = (cljs.core.truth_((function (){var and__4210__auto__ = line;
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.seq_QMARK_(o);
} else {
return and__4210__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,cljs.core.cst$kw$line,line,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$column,column], 0)):m);
if((((!((o == null))))?(((((o.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === o.cljs$core$IWithMeta$))))?true:false):false)){
return cljs.core.with_meta(o,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.meta(o),m__$1], 0)));
} else {
return cljs.core.reset_meta_BANG_(o,m__$1);
}
} else {
return cljs.tools.reader.impl.errors.throw_bad_metadata_target(rdr,o);
}
}
});
cljs.tools.reader.read_set = (function cljs$tools$reader$read_set(rdr,_,opts,pending_forms){
var vec__12946 = cljs.tools.reader.starting_line_col_info(rdr);
var start_line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12946,(0),null);
var start_column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12946,(1),null);
var start_column__$1 = (cljs.core.truth_(start_column)?((start_column - (1)) | (0)):null);
var coll = cljs.tools.reader.read_delimited(cljs.core.cst$kw$set,"}",rdr,opts,pending_forms);
var the_set = cljs.core.set(coll);
var vec__12949 = cljs.tools.reader.ending_line_col_info(rdr);
var end_line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12949,(0),null);
var end_column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12949,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(coll),cljs.core.count(the_set))){
} else {
cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.tools.reader.impl.errors.throw_dup_keys(rdr,cljs.core.cst$kw$set,coll)], 0));
}

return cljs.core.with_meta(the_set,(cljs.core.truth_(start_line)?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var temp__5735__auto__ = cljs.tools.reader.reader_types.get_file_name(rdr);
if(cljs.core.truth_(temp__5735__auto__)){
var file = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$file,file], null);
} else {
return null;
}
})(),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$line,start_line,cljs.core.cst$kw$column,start_column__$1,cljs.core.cst$kw$end_DASH_line,end_line,cljs.core.cst$kw$end_DASH_column,end_column], null)], 0)):null));
});
/**
 * Read and discard the first object from rdr
 */
cljs.tools.reader.read_discard = (function cljs$tools$reader$read_discard(rdr,_,opts,pending_forms){
var G__12952 = rdr;
(cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$5 ? cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$5(G__12952,true,null,opts,pending_forms) : cljs.tools.reader.read_STAR_.call(null,G__12952,true,null,opts,pending_forms));

return G__12952;
});
cljs.tools.reader.read_symbolic_value = (function cljs$tools$reader$read_symbolic_value(rdr,_,opts,pending_forms){
var sym = (cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$5 ? cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$5(rdr,true,null,opts,pending_forms) : cljs.tools.reader.read_STAR_.call(null,rdr,true,null,opts,pending_forms));
var G__12953 = sym;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$NaN,G__12953)){
return Number.NaN;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$_DASH_Inf,G__12953)){
return Number.NEGATIVE_INFINITY;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$Inf,G__12953)){
return Number.POSITIVE_INFINITY;
} else {
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Invalid token: ##",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join('')], 0));

}
}
}
});
cljs.tools.reader.RESERVED_FEATURES = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$else,null,cljs.core.cst$kw$none,null], null), null);
cljs.tools.reader.has_feature_QMARK_ = (function cljs$tools$reader$has_feature_QMARK_(rdr,feature,opts){
if((feature instanceof cljs.core.Keyword)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$default,feature)) || (cljs.core.contains_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.cst$kw$features),feature)));
} else {
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Feature should be a keyword: ",feature], 0));
}
});
cljs.tools.reader.check_eof_error = (function cljs$tools$reader$check_eof_error(form,rdr,first_line){
if((form === cljs.tools.reader.READ_EOF)){
return cljs.tools.reader.impl.errors.throw_eof_error(rdr,(function (){var and__4210__auto__ = (first_line < (0));
if(and__4210__auto__){
return first_line;
} else {
return and__4210__auto__;
}
})());
} else {
return null;
}
});
cljs.tools.reader.check_reserved_features = (function cljs$tools$reader$check_reserved_features(rdr,form){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.tools.reader.RESERVED_FEATURES,form))){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Feature name ",form," is reserved"], 0));
} else {
return null;
}
});
cljs.tools.reader.check_invalid_read_cond = (function cljs$tools$reader$check_invalid_read_cond(form,rdr,first_line){
if((form === cljs.tools.reader.READ_FINISHED)){
if((first_line < (0))){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["read-cond requires an even number of forms"], 0));
} else {
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["read-cond starting on line ",first_line," requires an even number of forms"], 0));
}
} else {
return null;
}
});
/**
 * Read next form and suppress. Return nil or READ_FINISHED.
 */
cljs.tools.reader.read_suppress = (function cljs$tools$reader$read_suppress(first_line,rdr,opts,pending_forms){
var _STAR_suppress_read_STAR__orig_val__12954 = cljs.tools.reader._STAR_suppress_read_STAR_;
var _STAR_suppress_read_STAR__temp_val__12955 = true;
(cljs.tools.reader._STAR_suppress_read_STAR_ = _STAR_suppress_read_STAR__temp_val__12955);

try{var form = (function (){var G__12956 = rdr;
var G__12957 = false;
var G__12958 = cljs.tools.reader.READ_EOF;
var G__12959 = ")";
var G__12960 = opts;
var G__12961 = pending_forms;
return (cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$6 ? cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$6(G__12956,G__12957,G__12958,G__12959,G__12960,G__12961) : cljs.tools.reader.read_STAR_.call(null,G__12956,G__12957,G__12958,G__12959,G__12960,G__12961));
})();
cljs.tools.reader.check_eof_error(form,rdr,first_line);

if((form === cljs.tools.reader.READ_FINISHED)){
return cljs.tools.reader.READ_FINISHED;
} else {
return null;
}
}finally {(cljs.tools.reader._STAR_suppress_read_STAR_ = _STAR_suppress_read_STAR__orig_val__12954);
}});
if((typeof cljs !== 'undefined') && (typeof cljs.tools !== 'undefined') && (typeof cljs.tools.reader !== 'undefined') && (typeof cljs.tools.reader.NO_MATCH !== 'undefined')){
} else {
cljs.tools.reader.NO_MATCH = (new Object());
}
/**
 * Read next feature. If matched, read next form and return.
 * Otherwise, read and skip next form, returning READ_FINISHED or nil.
 */
cljs.tools.reader.match_feature = (function cljs$tools$reader$match_feature(first_line,rdr,opts,pending_forms){
var feature = (function (){var G__12962 = rdr;
var G__12963 = false;
var G__12964 = cljs.tools.reader.READ_EOF;
var G__12965 = ")";
var G__12966 = opts;
var G__12967 = pending_forms;
return (cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$6 ? cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$6(G__12962,G__12963,G__12964,G__12965,G__12966,G__12967) : cljs.tools.reader.read_STAR_.call(null,G__12962,G__12963,G__12964,G__12965,G__12966,G__12967));
})();
cljs.tools.reader.check_eof_error(feature,rdr,first_line);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(feature,cljs.tools.reader.READ_FINISHED)){
return cljs.tools.reader.READ_FINISHED;
} else {
cljs.tools.reader.check_reserved_features(rdr,feature);

if(cljs.tools.reader.has_feature_QMARK_(rdr,feature,opts)){
var G__12968 = (function (){var G__12969 = rdr;
var G__12970 = false;
var G__12971 = cljs.tools.reader.READ_EOF;
var G__12972 = ")";
var G__12973 = opts;
var G__12974 = pending_forms;
return (cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$6 ? cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$6(G__12969,G__12970,G__12971,G__12972,G__12973,G__12974) : cljs.tools.reader.read_STAR_.call(null,G__12969,G__12970,G__12971,G__12972,G__12973,G__12974));
})();
cljs.tools.reader.check_eof_error(G__12968,rdr,first_line);

cljs.tools.reader.check_invalid_read_cond(G__12968,rdr,first_line);

return G__12968;
} else {
var or__4212__auto__ = cljs.tools.reader.read_suppress(first_line,rdr,opts,pending_forms);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.tools.reader.NO_MATCH;
}
}
}
});
cljs.tools.reader.read_cond_delimited = (function cljs$tools$reader$read_cond_delimited(rdr,splicing,opts,pending_forms){
var first_line = ((cljs.tools.reader.reader_types.indexing_reader_QMARK_(rdr))?cljs.tools.reader.reader_types.get_line_number(rdr):(-1));
var result = (function (){var matched = cljs.tools.reader.NO_MATCH;
var finished = null;
while(true){
if((matched === cljs.tools.reader.NO_MATCH)){
var match = cljs.tools.reader.match_feature(first_line,rdr,opts,pending_forms);
if((match === cljs.tools.reader.READ_FINISHED)){
return cljs.tools.reader.READ_FINISHED;
} else {
var G__12979 = match;
var G__12980 = null;
matched = G__12979;
finished = G__12980;
continue;
}
} else {
if((!((finished === cljs.tools.reader.READ_FINISHED)))){
var G__12981 = matched;
var G__12982 = cljs.tools.reader.read_suppress(first_line,rdr,opts,pending_forms);
matched = G__12981;
finished = G__12982;
continue;
} else {
return matched;

}
}
break;
}
})();
if((result === cljs.tools.reader.READ_FINISHED)){
return rdr;
} else {
if(cljs.core.truth_(splicing)){
if((((!((result == null))))?(((((result.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === result.cljs$core$ISequential$))))?true:false):false)){
var G__12976_12983 = pending_forms;
var G__12977_12984 = cljs.core.to_array(result);
var G__12978_12985 = (0);
goog.array.insertArrayAt(G__12976_12983,G__12977_12984,G__12978_12985);

return rdr;
} else {
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spliced form list in read-cond-splicing must implement ISequential"], 0));
}
} else {
return result;
}
}
});
cljs.tools.reader.read_cond = (function cljs$tools$reader$read_cond(rdr,_,opts,pending_forms){
if(cljs.core.not((function (){var and__4210__auto__ = opts;
if(cljs.core.truth_(and__4210__auto__)){
var G__12987 = cljs.core.cst$kw$read_DASH_cond.cljs$core$IFn$_invoke$arity$1(opts);
var fexpr__12986 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$preserve,null,cljs.core.cst$kw$allow,null], null), null);
return (fexpr__12986.cljs$core$IFn$_invoke$arity$1 ? fexpr__12986.cljs$core$IFn$_invoke$arity$1(G__12987) : fexpr__12986.call(null,G__12987));
} else {
return and__4210__auto__;
}
})())){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Conditional read not allowed",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$runtime_DASH_exception], null));
} else {
}

var temp__5733__auto__ = rdr.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
if(cljs.core.truth_(temp__5733__auto__)){
var ch = temp__5733__auto__;
var splicing = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ch,"@");
var ch__$1 = ((splicing)?rdr.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null):ch);
if(splicing){
if(cljs.core.truth_(cljs.tools.reader._STAR_read_delim_STAR_)){
} else {
cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cond-splice not in list"], 0));
}
} else {
}

var temp__5733__auto____$1 = ((cljs.tools.reader.impl.utils.whitespace_QMARK_(ch__$1))?cljs.tools.reader.impl.commons.read_past(cljs.tools.reader.impl.utils.whitespace_QMARK_,rdr):ch__$1);
if(cljs.core.truth_(temp__5733__auto____$1)){
var ch__$2 = temp__5733__auto____$1;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ch__$2,"(")){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("read-cond body must be a list",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$runtime_DASH_exception], null));
} else {
var _STAR_suppress_read_STAR__orig_val__12988 = cljs.tools.reader._STAR_suppress_read_STAR_;
var _STAR_suppress_read_STAR__temp_val__12989 = (function (){var or__4212__auto__ = cljs.tools.reader._STAR_suppress_read_STAR_;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$preserve,cljs.core.cst$kw$read_DASH_cond.cljs$core$IFn$_invoke$arity$1(opts));
}
})();
(cljs.tools.reader._STAR_suppress_read_STAR_ = _STAR_suppress_read_STAR__temp_val__12989);

try{if(cljs.core.truth_(cljs.tools.reader._STAR_suppress_read_STAR_)){
return cljs.tools.reader.impl.utils.reader_conditional(cljs.tools.reader.read_list(rdr,ch__$2,opts,pending_forms),splicing);
} else {
return cljs.tools.reader.read_cond_delimited(rdr,splicing,opts,pending_forms);
}
}finally {(cljs.tools.reader._STAR_suppress_read_STAR_ = _STAR_suppress_read_STAR__orig_val__12988);
}}
} else {
return cljs.tools.reader.impl.errors.throw_eof_in_character(rdr);
}
} else {
return cljs.tools.reader.impl.errors.throw_eof_in_character(rdr);
}
});
cljs.tools.reader.arg_env = null;
/**
 * Get a symbol for an anonymous ?argument?
 */
cljs.tools.reader.garg = (function cljs$tools$reader$garg(n){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([((((-1) === n))?"rest":["p",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('')),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.tools.reader.impl.utils.next_id()),"#"].join(''));
});
cljs.tools.reader.read_fn = (function cljs$tools$reader$read_fn(rdr,_,opts,pending_forms){
if(cljs.core.truth_(cljs.tools.reader.arg_env)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Nested #()s are not allowed",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$illegal_DASH_state], null));
} else {
}

var arg_env_orig_val__12990 = cljs.tools.reader.arg_env;
var arg_env_temp_val__12991 = cljs.core.sorted_map();
(cljs.tools.reader.arg_env = arg_env_temp_val__12991);

try{var form = (function (){var G__12992 = (function (){var G__12997 = rdr;
cljs.tools.reader.reader_types.unread(G__12997,"(");

return G__12997;
})();
var G__12993 = true;
var G__12994 = null;
var G__12995 = opts;
var G__12996 = pending_forms;
return (cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$5 ? cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$5(G__12992,G__12993,G__12994,G__12995,G__12996) : cljs.tools.reader.read_STAR_.call(null,G__12992,G__12993,G__12994,G__12995,G__12996));
})();
var rargs = cljs.core.rseq(cljs.tools.reader.arg_env);
var args = ((rargs)?(function (){var higharg = cljs.core.key(cljs.core.first(rargs));
var args = (function (){var i = (1);
var args = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
while(true){
if((i > higharg)){
return cljs.core.persistent_BANG_(args);
} else {
var G__12998 = (i + (1));
var G__12999 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(args,(function (){var or__4212__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.tools.reader.arg_env,i);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.tools.reader.garg(i);
}
})());
i = G__12998;
args = G__12999;
continue;
}
break;
}
})();
var args__$1 = (cljs.core.truth_((cljs.tools.reader.arg_env.cljs$core$IFn$_invoke$arity$1 ? cljs.tools.reader.arg_env.cljs$core$IFn$_invoke$arity$1((-1)) : cljs.tools.reader.arg_env.call(null,(-1))))?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(args,cljs.core.cst$sym$_AMPERSAND_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.tools.reader.arg_env.cljs$core$IFn$_invoke$arity$1 ? cljs.tools.reader.arg_env.cljs$core$IFn$_invoke$arity$1((-1)) : cljs.tools.reader.arg_env.call(null,(-1)))], 0)):args);
return args__$1;
})():cljs.core.PersistentVector.EMPTY);
return (new cljs.core.List(null,cljs.core.cst$sym$fn_STAR_,(new cljs.core.List(null,args,(new cljs.core.List(null,form,null,(1),null)),(2),null)),(3),null));
}finally {(cljs.tools.reader.arg_env = arg_env_orig_val__12990);
}});
/**
 * Registers an argument to the arg-env
 */
cljs.tools.reader.register_arg = (function cljs$tools$reader$register_arg(n){
if(cljs.core.truth_(cljs.tools.reader.arg_env)){
var temp__5733__auto__ = (cljs.tools.reader.arg_env.cljs$core$IFn$_invoke$arity$1 ? cljs.tools.reader.arg_env.cljs$core$IFn$_invoke$arity$1(n) : cljs.tools.reader.arg_env.call(null,n));
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return ret;
} else {
var g = cljs.tools.reader.garg(n);
(cljs.tools.reader.arg_env = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.tools.reader.arg_env,n,g));

return g;
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Arg literal not in #()",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$illegal_DASH_state], null));
}
});
cljs.tools.reader.read_arg = (function cljs$tools$reader$read_arg(rdr,pct,opts,pending_forms){
if((cljs.tools.reader.arg_env == null)){
return cljs.tools.reader.read_symbol(rdr,pct);
} else {
var ch = rdr.cljs$tools$reader$reader_types$Reader$peek_char$arity$1(null);
if(((cljs.tools.reader.impl.utils.whitespace_QMARK_(ch)) || (((cljs.tools.reader.macro_terminating_QMARK_(ch)) || ((ch == null)))))){
return cljs.tools.reader.register_arg((1));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ch,"&")){
rdr.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

return cljs.tools.reader.register_arg((-1));
} else {
var n = (cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$5 ? cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$5(rdr,true,null,opts,pending_forms) : cljs.tools.reader.read_STAR_.call(null,rdr,true,null,opts,pending_forms));
if((!(cljs.core.integer_QMARK_(n)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Arg literal must be %, %& or %integer",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$illegal_DASH_state], null));
} else {
return cljs.tools.reader.register_arg(n);
}

}
}
}
});
cljs.tools.reader.gensym_env = null;
cljs.tools.reader.read_unquote = (function cljs$tools$reader$read_unquote(rdr,comma,opts,pending_forms){
var temp__5733__auto__ = rdr.cljs$tools$reader$reader_types$Reader$peek_char$arity$1(null);
if(cljs.core.truth_(temp__5733__auto__)){
var ch = temp__5733__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("@",ch)){
var G__13001 = (function (){var G__13005 = rdr;
G__13005.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

return G__13005;
})();
var G__13002 = "@";
var G__13003 = opts;
var G__13004 = pending_forms;
var fexpr__13000 = cljs.tools.reader.wrapping_reader(cljs.core.cst$sym$clojure$core_SLASH_unquote_DASH_splicing);
return (fexpr__13000.cljs$core$IFn$_invoke$arity$4 ? fexpr__13000.cljs$core$IFn$_invoke$arity$4(G__13001,G__13002,G__13003,G__13004) : fexpr__13000.call(null,G__13001,G__13002,G__13003,G__13004));
} else {
var G__13007 = rdr;
var G__13008 = "~";
var G__13009 = opts;
var G__13010 = pending_forms;
var fexpr__13006 = cljs.tools.reader.wrapping_reader(cljs.core.cst$sym$clojure$core_SLASH_unquote);
return (fexpr__13006.cljs$core$IFn$_invoke$arity$4 ? fexpr__13006.cljs$core$IFn$_invoke$arity$4(G__13007,G__13008,G__13009,G__13010) : fexpr__13006.call(null,G__13007,G__13008,G__13009,G__13010));
}
} else {
return null;
}
});
cljs.tools.reader.unquote_splicing_QMARK_ = (function cljs$tools$reader$unquote_splicing_QMARK_(form){
return ((cljs.core.seq_QMARK_(form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(form),cljs.core.cst$sym$clojure$core_SLASH_unquote_DASH_splicing)));
});
cljs.tools.reader.unquote_QMARK_ = (function cljs$tools$reader$unquote_QMARK_(form){
return ((cljs.core.seq_QMARK_(form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(form),cljs.core.cst$sym$clojure$core_SLASH_unquote)));
});
/**
 * Expand a list by resolving its syntax quotes and unquotes
 */
cljs.tools.reader.expand_list = (function cljs$tools$reader$expand_list(s){
var s__$1 = cljs.core.seq(s);
var r = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
while(true){
if(s__$1){
var item = cljs.core.first(s__$1);
var ret = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(r,((cljs.tools.reader.unquote_QMARK_(item))?(new cljs.core.List(null,cljs.core.cst$sym$clojure$core_SLASH_list,(new cljs.core.List(null,cljs.core.second(item),null,(1),null)),(2),null)):((cljs.tools.reader.unquote_splicing_QMARK_(item))?cljs.core.second(item):(new cljs.core.List(null,cljs.core.cst$sym$clojure$core_SLASH_list,(new cljs.core.List(null,(cljs.tools.reader.syntax_quote_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.tools.reader.syntax_quote_STAR_.cljs$core$IFn$_invoke$arity$1(item) : cljs.tools.reader.syntax_quote_STAR_.call(null,item)),null,(1),null)),(2),null))
)));
var G__13011 = cljs.core.next(s__$1);
var G__13012 = ret;
s__$1 = G__13011;
r = G__13012;
continue;
} else {
return cljs.core.seq(cljs.core.persistent_BANG_(r));
}
break;
}
});
/**
 * Flatten a map into a seq of alternate keys and values
 */
cljs.tools.reader.flatten_map = (function cljs$tools$reader$flatten_map(form){
var s = cljs.core.seq(form);
var key_vals = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
while(true){
if(s){
var e = cljs.core.first(s);
var G__13013 = cljs.core.next(s);
var G__13014 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(key_vals,cljs.core.key(e)),cljs.core.val(e));
s = G__13013;
key_vals = G__13014;
continue;
} else {
return cljs.core.seq(cljs.core.persistent_BANG_(key_vals));
}
break;
}
});
cljs.tools.reader.register_gensym = (function cljs$tools$reader$register_gensym(sym){
if(cljs.core.not(cljs.tools.reader.gensym_env)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Gensym literal not in syntax-quote",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$illegal_DASH_state], null));
} else {
}

var or__4212__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.tools.reader.gensym_env,sym);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var gs = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.subs.cljs$core$IFn$_invoke$arity$3(cljs.core.name(sym),(0),(((cljs.core.name(sym)).length) - (1))),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.tools.reader.impl.utils.next_id()),"__auto__"].join(''));
(cljs.tools.reader.gensym_env = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.tools.reader.gensym_env,sym,gs));

return gs;
}
});
cljs.tools.reader.add_meta = (function cljs$tools$reader$add_meta(form,ret){
if((function (){var and__4210__auto__ = (((!((form == null))))?(((((form.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === form.cljs$core$IWithMeta$))))?true:false):false);
if(and__4210__auto__){
return cljs.core.seq(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(form),cljs.core.cst$kw$line,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$column,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$file,cljs.core.cst$kw$source], 0)));
} else {
return and__4210__auto__;
}
})()){
return (new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_with_DASH_meta,(new cljs.core.List(null,ret,(new cljs.core.List(null,(function (){var G__13016 = cljs.core.meta(form);
return (cljs.tools.reader.syntax_quote_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.tools.reader.syntax_quote_STAR_.cljs$core$IFn$_invoke$arity$1(G__13016) : cljs.tools.reader.syntax_quote_STAR_.call(null,G__13016));
})(),null,(1),null)),(2),null)),(3),null));
} else {
return ret;
}
});
cljs.tools.reader.syntax_quote_coll = (function cljs$tools$reader$syntax_quote_coll(type,coll){
var res = (new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_sequence,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$cljs$core_SLASH_concat,cljs.tools.reader.expand_list(coll)),null,(1),null)),(2),null));
if(cljs.core.truth_(type)){
return (new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_apply,(new cljs.core.List(null,type,(new cljs.core.List(null,res,null,(1),null)),(2),null)),(3),null));
} else {
return res;
}
});
/**
 * Decide which map type to use, array-map if less than 16 elements
 */
cljs.tools.reader.map_func = (function cljs$tools$reader$map_func(coll){
if((cljs.core.count(coll) >= (16))){
return cljs.core.cst$sym$cljs$core_SLASH_hash_DASH_map;
} else {
return cljs.core.cst$sym$cljs$core_SLASH_array_DASH_map;
}
});
cljs.tools.reader.bool_QMARK_ = (function cljs$tools$reader$bool_QMARK_(x){
return (((x instanceof Boolean)) || (((x === true) || (x === false))));
});
/**
 * Resolve a symbol s into its fully qualified namespace version
 */
cljs.tools.reader.resolve_symbol = (function cljs$tools$reader$resolve_symbol(s){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("resolve-symbol is not implemented",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$sym,s], null));
});
cljs.tools.reader.syntax_quote_STAR_ = (function cljs$tools$reader$syntax_quote_STAR_(form){
return cljs.tools.reader.add_meta(form,((cljs.core.special_symbol_QMARK_(form))?(new cljs.core.List(null,cljs.core.cst$sym$quote,(new cljs.core.List(null,form,null,(1),null)),(2),null)):(((form instanceof cljs.core.Symbol))?(new cljs.core.List(null,cljs.core.cst$sym$quote,(new cljs.core.List(null,((((cljs.core.not(cljs.core.namespace(form))) && (goog.string.endsWith(cljs.core.name(form),"#"))))?cljs.tools.reader.register_gensym(form):(function (){var sym = cljs.core.str.cljs$core$IFn$_invoke$arity$1(form);
if(goog.string.endsWith(sym,".")){
var csym = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(sym,(0),(((sym).length) - (1))));
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.tools.reader.resolve_symbol.cljs$core$IFn$_invoke$arity$1 ? cljs.tools.reader.resolve_symbol.cljs$core$IFn$_invoke$arity$1(csym) : cljs.tools.reader.resolve_symbol.call(null,csym))),"."].join(''));
} else {
return (cljs.tools.reader.resolve_symbol.cljs$core$IFn$_invoke$arity$1 ? cljs.tools.reader.resolve_symbol.cljs$core$IFn$_invoke$arity$1(form) : cljs.tools.reader.resolve_symbol.call(null,form));
}
})()),null,(1),null)),(2),null)):((cljs.tools.reader.unquote_QMARK_(form))?cljs.core.second(form):((cljs.tools.reader.unquote_splicing_QMARK_(form))?(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("unquote-splice not in list",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$illegal_DASH_state], null))})():((cljs.core.coll_QMARK_(form))?(((((!((form == null))))?(((((form.cljs$lang$protocol_mask$partition0$ & (67108864))) || ((cljs.core.PROTOCOL_SENTINEL === form.cljs$core$IRecord$))))?true:false):false))?form:((cljs.core.map_QMARK_(form))?cljs.tools.reader.syntax_quote_coll(cljs.tools.reader.map_func(form),cljs.tools.reader.flatten_map(form)):((cljs.core.vector_QMARK_(form))?(new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_vec,(new cljs.core.List(null,cljs.tools.reader.syntax_quote_coll(null,form),null,(1),null)),(2),null)):((cljs.core.set_QMARK_(form))?cljs.tools.reader.syntax_quote_coll(cljs.core.cst$sym$cljs$core_SLASH_hash_DASH_set,form):((((cljs.core.seq_QMARK_(form)) || (cljs.core.list_QMARK_(form))))?(function (){var seq = cljs.core.seq(form);
if(seq){
return cljs.tools.reader.syntax_quote_coll(null,seq);
} else {
return cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_list);
}
})():(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unknown Collection type",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$unsupported_DASH_operation], null))})()
))))):(((((form instanceof cljs.core.Keyword)) || (((typeof form === 'number') || (((typeof form === 'string') || ((((form == null)) || (((cljs.tools.reader.bool_QMARK_(form)) || ((form instanceof RegExp))))))))))))?form:(new cljs.core.List(null,cljs.core.cst$sym$quote,(new cljs.core.List(null,form,null,(1),null)),(2),null))
)))))));
});
cljs.tools.reader.read_syntax_quote = (function cljs$tools$reader$read_syntax_quote(rdr,backquote,opts,pending_forms){
var gensym_env_orig_val__13018 = cljs.tools.reader.gensym_env;
var gensym_env_temp_val__13019 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.tools.reader.gensym_env = gensym_env_temp_val__13019);

try{return cljs.tools.reader.syntax_quote_STAR_((cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$5 ? cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$5(rdr,true,null,opts,pending_forms) : cljs.tools.reader.read_STAR_.call(null,rdr,true,null,opts,pending_forms)));
}finally {(cljs.tools.reader.gensym_env = gensym_env_orig_val__13018);
}});
cljs.tools.reader.read_namespaced_map = (function cljs$tools$reader$read_namespaced_map(rdr,_,opts,pending_forms){
var token = cljs.tools.reader.read_token(rdr,cljs.core.cst$kw$namespaced_DASH_map,cljs.tools.reader.reader_types.read_char(rdr));
var temp__5733__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(token,":"))?cljs.core.ns_name(cljs.core._STAR_ns_STAR_):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(":",cljs.core.first(token)))?(function (){var G__13020 = token;
var G__13020__$1 = (((G__13020 == null))?null:cljs.core.subs.cljs$core$IFn$_invoke$arity$2(G__13020,(1)));
var G__13020__$2 = (((G__13020__$1 == null))?null:cljs.tools.reader.impl.commons.parse_symbol(G__13020__$1));
var G__13020__$3 = (((G__13020__$2 == null))?null:cljs.tools.reader.impl.utils.second_SINGLEQUOTE_(G__13020__$2));
var G__13020__$4 = (((G__13020__$3 == null))?null:cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(G__13020__$3));
if((G__13020__$4 == null)){
return null;
} else {
return cljs.tools.reader.resolve_ns(G__13020__$4);
}
})():(function (){var G__13021 = token;
var G__13021__$1 = (((G__13021 == null))?null:cljs.tools.reader.impl.commons.parse_symbol(G__13021));
if((G__13021__$1 == null)){
return null;
} else {
return cljs.tools.reader.impl.utils.second_SINGLEQUOTE_(G__13021__$1);
}
})()
));
if(cljs.core.truth_(temp__5733__auto__)){
var ns = temp__5733__auto__;
var ch = cljs.tools.reader.impl.commons.read_past(cljs.tools.reader.impl.utils.whitespace_QMARK_,rdr);
if((ch === "{")){
var items = cljs.tools.reader.read_delimited(cljs.core.cst$kw$namespaced_DASH_map,"}",rdr,opts,pending_forms);
if(cljs.core.odd_QMARK_(cljs.core.count(items))){
cljs.tools.reader.impl.errors.throw_odd_map(rdr,null,null,items);
} else {
}

var keys = cljs.tools.reader.impl.utils.namespace_keys(cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),items));
var vals = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.rest(items));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.set(keys)),cljs.core.count(keys))){
} else {
cljs.tools.reader.impl.errors.throw_dup_keys(rdr,cljs.core.cst$kw$namespaced_DASH_map,keys);
}

return cljs.core.zipmap(keys,vals);
} else {
return cljs.tools.reader.impl.errors.throw_ns_map_no_map(rdr,token);
}
} else {
return cljs.tools.reader.impl.errors.throw_bad_ns(rdr,token);
}
});
cljs.tools.reader.macros = (function cljs$tools$reader$macros(ch){
var G__13022 = ch;
switch (G__13022) {
case "\"":
return cljs.tools.reader.read_string_STAR_;

break;
case ":":
return cljs.tools.reader.read_keyword;

break;
case ";":
return cljs.tools.reader.impl.commons.read_comment;

break;
case "'":
return cljs.tools.reader.wrapping_reader(cljs.core.cst$sym$quote);

break;
case "@":
return cljs.tools.reader.wrapping_reader(cljs.core.cst$sym$clojure$core_SLASH_deref);

break;
case "^":
return cljs.tools.reader.read_meta;

break;
case "`":
return cljs.tools.reader.read_syntax_quote;

break;
case "~":
return cljs.tools.reader.read_unquote;

break;
case "(":
return cljs.tools.reader.read_list;

break;
case ")":
return cljs.tools.reader.read_unmatched_delimiter;

break;
case "[":
return cljs.tools.reader.read_vector;

break;
case "]":
return cljs.tools.reader.read_unmatched_delimiter;

break;
case "{":
return cljs.tools.reader.read_map;

break;
case "}":
return cljs.tools.reader.read_unmatched_delimiter;

break;
case "\\":
return cljs.tools.reader.read_char_STAR_;

break;
case "%":
return cljs.tools.reader.read_arg;

break;
case "#":
return cljs.tools.reader.read_dispatch;

break;
default:
return null;

}
});
cljs.tools.reader.dispatch_macros = (function cljs$tools$reader$dispatch_macros(ch){
var G__13024 = ch;
switch (G__13024) {
case "^":
return cljs.tools.reader.read_meta;

break;
case "'":
return cljs.tools.reader.wrapping_reader(cljs.core.cst$sym$var);

break;
case "(":
return cljs.tools.reader.read_fn;

break;
case "{":
return cljs.tools.reader.read_set;

break;
case "<":
return cljs.tools.reader.impl.commons.throwing_reader("Unreadable form");

break;
case "=":
return cljs.tools.reader.impl.commons.throwing_reader("read-eval not supported");

break;
case "\"":
return cljs.tools.reader.read_regex;

break;
case "!":
return cljs.tools.reader.impl.commons.read_comment;

break;
case "_":
return cljs.tools.reader.read_discard;

break;
case "?":
return cljs.tools.reader.read_cond;

break;
case ":":
return cljs.tools.reader.read_namespaced_map;

break;
case "#":
return cljs.tools.reader.read_symbolic_value;

break;
default:
return null;

}
});
cljs.tools.reader.read_tagged = (function cljs$tools$reader$read_tagged(rdr,initch,opts,pending_forms){
var tag = (cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$5 ? cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$5(rdr,true,null,opts,pending_forms) : cljs.tools.reader.read_STAR_.call(null,rdr,true,null,opts,pending_forms));
if((!((tag instanceof cljs.core.Symbol)))){
cljs.tools.reader.impl.errors.throw_bad_reader_tag(rdr,tag);
} else {
}

if(cljs.core.truth_(cljs.tools.reader._STAR_suppress_read_STAR_)){
return cljs.core.tagged_literal(tag,(cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$5 ? cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$5(rdr,true,null,opts,pending_forms) : cljs.tools.reader.read_STAR_.call(null,rdr,true,null,opts,pending_forms)));
} else {
var temp__5733__auto__ = (function (){var or__4212__auto__ = (cljs.tools.reader._STAR_data_readers_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.tools.reader._STAR_data_readers_STAR_.cljs$core$IFn$_invoke$arity$1(tag) : cljs.tools.reader._STAR_data_readers_STAR_.call(null,tag));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (cljs.tools.reader.default_data_readers.cljs$core$IFn$_invoke$arity$1 ? cljs.tools.reader.default_data_readers.cljs$core$IFn$_invoke$arity$1(tag) : cljs.tools.reader.default_data_readers.call(null,tag));
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var f = temp__5733__auto__;
var G__13026 = (cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$5 ? cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$5(rdr,true,null,opts,pending_forms) : cljs.tools.reader.read_STAR_.call(null,rdr,true,null,opts,pending_forms));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13026) : f.call(null,G__13026));
} else {
var temp__5733__auto____$1 = cljs.tools.reader._STAR_default_data_reader_fn_STAR_;
if(cljs.core.truth_(temp__5733__auto____$1)){
var f = temp__5733__auto____$1;
var G__13027 = tag;
var G__13028 = (cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$5 ? cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$5(rdr,true,null,opts,pending_forms) : cljs.tools.reader.read_STAR_.call(null,rdr,true,null,opts,pending_forms));
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__13027,G__13028) : f.call(null,G__13027,G__13028));
} else {
return cljs.tools.reader.impl.errors.throw_unknown_reader_tag(rdr,tag);
}
}
}
});
/**
 * Map from reader tag symbols to data reader Vars.
 *   Reader tags without namespace qualifiers are reserved for Clojure.
 *   This light version of tools.reader has no implementation for default
 *   reader tags such as #inst and #uuid.
 */
cljs.tools.reader._STAR_data_readers_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
/**
 * When no data reader is found for a tag and *default-data-reader-fn*
 *   is non-nil, it will be called with two arguments, the tag and the value.
 *   If *default-data-reader-fn* is nil (the default value), an exception
 *   will be thrown for the unknown tag.
 */
cljs.tools.reader._STAR_default_data_reader_fn_STAR_ = null;
cljs.tools.reader._STAR_suppress_read_STAR_ = false;
/**
 * Default map of data reader functions provided by Clojure.
 *   May be overridden by binding *data-readers*
 */
cljs.tools.reader.default_data_readers = cljs.core.PersistentArrayMap.EMPTY;
cljs.tools.reader.read_STAR__internal = (function cljs$tools$reader$read_STAR__internal(reader,eof_error_QMARK_,sentinel,return_on,opts,pending_forms){
while(true){
if(((cljs.tools.reader.reader_types.source_logging_reader_QMARK_(reader)) && ((!(cljs.tools.reader.impl.utils.whitespace_QMARK_(reader.cljs$tools$reader$reader_types$Reader$peek_char$arity$1(null))))))){
return cljs.tools.reader.reader_types.log_source_STAR_(reader,(function (){
while(true){
if((!(goog.array.isEmpty(pending_forms)))){
var form = (pending_forms[(0)]);
goog.array.removeAt(pending_forms,(0));

return form;
} else {
var ch = reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
if(cljs.tools.reader.impl.utils.whitespace_QMARK_(ch)){
continue;
} else {
if((ch == null)){
if(eof_error_QMARK_){
return cljs.tools.reader.impl.errors.throw_eof_error(reader,null);
} else {
return sentinel;
}
} else {
if((ch === return_on)){
return cljs.tools.reader.READ_FINISHED;
} else {
if(cljs.tools.reader.impl.commons.number_literal_QMARK_(reader,ch)){
return cljs.tools.reader.read_number(reader,ch);
} else {
var f = cljs.tools.reader.macros(ch);
if((!((f == null)))){
var res = (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(reader,ch,opts,pending_forms) : f.call(null,reader,ch,opts,pending_forms));
if((res === reader)){
continue;
} else {
return res;
}
} else {
return cljs.tools.reader.read_symbol(reader,ch);
}

}
}
}
}
}
break;
}
}));
} else {
if((!(goog.array.isEmpty(pending_forms)))){
var form = (pending_forms[(0)]);
goog.array.removeAt(pending_forms,(0));

return form;
} else {
var ch = reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
if(cljs.tools.reader.impl.utils.whitespace_QMARK_(ch)){
continue;
} else {
if((ch == null)){
if(eof_error_QMARK_){
return cljs.tools.reader.impl.errors.throw_eof_error(reader,null);
} else {
return sentinel;
}
} else {
if((ch === return_on)){
return cljs.tools.reader.READ_FINISHED;
} else {
if(cljs.tools.reader.impl.commons.number_literal_QMARK_(reader,ch)){
return cljs.tools.reader.read_number(reader,ch);
} else {
var f = cljs.tools.reader.macros(ch);
if((!((f == null)))){
var res = (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(reader,ch,opts,pending_forms) : f.call(null,reader,ch,opts,pending_forms));
if((res === reader)){
continue;
} else {
return res;
}
} else {
return cljs.tools.reader.read_symbol(reader,ch);
}

}
}
}
}
}
}
break;
}
});
cljs.tools.reader.read_STAR_ = (function cljs$tools$reader$read_STAR_(var_args){
var G__13030 = arguments.length;
switch (G__13030) {
case 5:
return cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$5 = (function (reader,eof_error_QMARK_,sentinel,opts,pending_forms){
return cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$6(reader,eof_error_QMARK_,sentinel,null,opts,pending_forms);
}));

(cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$6 = (function (reader,eof_error_QMARK_,sentinel,return_on,opts,pending_forms){
try{return cljs.tools.reader.read_STAR__internal(reader,eof_error_QMARK_,sentinel,return_on,opts,pending_forms);
}catch (e13031){if((e13031 instanceof Error)){
var e = e13031;
if(cljs.tools.reader.impl.utils.ex_info_QMARK_(e)){
var d = cljs.core.ex_data(e);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reader_DASH_exception,cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(d))){
throw e;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(e.message,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$reader_DASH_exception], null),d,((cljs.tools.reader.reader_types.indexing_reader_QMARK_(reader))?new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,reader.cljs$tools$reader$reader_types$IndexingReader$get_line_number$arity$1(null),cljs.core.cst$kw$column,reader.cljs$tools$reader$reader_types$IndexingReader$get_column_number$arity$1(null),cljs.core.cst$kw$file,reader.cljs$tools$reader$reader_types$IndexingReader$get_file_name$arity$1(null)], null):null)], 0)),e);
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(e.message,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$reader_DASH_exception], null),((cljs.tools.reader.reader_types.indexing_reader_QMARK_(reader))?new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,reader.cljs$tools$reader$reader_types$IndexingReader$get_line_number$arity$1(null),cljs.core.cst$kw$column,reader.cljs$tools$reader$reader_types$IndexingReader$get_column_number$arity$1(null),cljs.core.cst$kw$file,reader.cljs$tools$reader$reader_types$IndexingReader$get_file_name$arity$1(null)], null):null)], 0)),e);
}
} else {
throw e13031;

}
}}));

(cljs.tools.reader.read_STAR_.cljs$lang$maxFixedArity = 6);

/**
 * Reads the first object from an IPushbackReader.
 * Returns the object read. If EOF, throws if eof-error? is true.
 * Otherwise returns sentinel. If no stream is provided, *in* will be used.
 * 
 * Opts is a persistent map with valid keys:
 *  :read-cond - :allow to process reader conditionals, or
 *               :preserve to keep all branches
 *  :features - persistent set of feature keywords for reader conditionals
 *  :eof - on eof, return value unless :eofthrow, then throw.
 *         if not specified, will throw
 * 
 * To read data structures only, use cljs.tools.reader.edn/read
 * 
 * Note that the function signature of cljs.tools.reader/read and
 * cljs.tools.reader.edn/read is not the same for eof-handling
 */
cljs.tools.reader.read = (function cljs$tools$reader$read(var_args){
var G__13034 = arguments.length;
switch (G__13034) {
case 1:
return cljs.tools.reader.read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.tools.reader.read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.tools.reader.read.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.tools.reader.read.cljs$core$IFn$_invoke$arity$1 = (function (reader){
return cljs.tools.reader.read.cljs$core$IFn$_invoke$arity$3(reader,true,null);
}));

(cljs.tools.reader.read.cljs$core$IFn$_invoke$arity$2 = (function (p__13035,reader){
var map__13036 = p__13035;
var map__13036__$1 = cljs.core.__destructure_map(map__13036);
var opts = map__13036__$1;
var eof = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__13036__$1,cljs.core.cst$kw$eof,cljs.core.cst$kw$eofthrow);
return cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$6(reader,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(eof,cljs.core.cst$kw$eofthrow),eof,null,opts,cljs.core.to_array(cljs.core.PersistentVector.EMPTY));
}));

(cljs.tools.reader.read.cljs$core$IFn$_invoke$arity$3 = (function (reader,eof_error_QMARK_,sentinel){
return cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$6(reader,eof_error_QMARK_,sentinel,null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.to_array(cljs.core.PersistentVector.EMPTY));
}));

(cljs.tools.reader.read.cljs$lang$maxFixedArity = 3);

/**
 * Reads one object from the string s.
 * Returns nil when s is nil or empty.
 * 
 * To read data structures only, use cljs.tools.reader.edn/read-string
 * 
 * Note that the function signature of cljs.tools.reader/read-string and
 * cljs.tools.reader.edn/read-string is not the same for eof-handling
 */
cljs.tools.reader.read_string = (function cljs$tools$reader$read_string(var_args){
var G__13039 = arguments.length;
switch (G__13039) {
case 1:
return cljs.tools.reader.read_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.tools.reader.read_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.tools.reader.read_string.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.tools.reader.read_string.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,s);
}));

(cljs.tools.reader.read_string.cljs$core$IFn$_invoke$arity$2 = (function (opts,s){
if(cljs.core.truth_((function (){var and__4210__auto__ = s;
if(cljs.core.truth_(and__4210__auto__)){
return (!((s === "")));
} else {
return and__4210__auto__;
}
})())){
return cljs.tools.reader.read.cljs$core$IFn$_invoke$arity$2(opts,cljs.tools.reader.reader_types.string_push_back_reader.cljs$core$IFn$_invoke$arity$1(s));
} else {
return null;
}
}));

(cljs.tools.reader.read_string.cljs$lang$maxFixedArity = 2);

/**
 * Like read, and taking the same args. reader must be a SourceLoggingPushbackReader.
 *   Returns a vector containing the object read and the (whitespace-trimmed) string read.
 */
cljs.tools.reader.read_PLUS_string = (function cljs$tools$reader$read_PLUS_string(var_args){
var G__13042 = arguments.length;
switch (G__13042) {
case 1:
return cljs.tools.reader.read_PLUS_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return cljs.tools.reader.read_PLUS_string.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljs.tools.reader.read_PLUS_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.tools.reader.read_PLUS_string.cljs$core$IFn$_invoke$arity$1 = (function (stream){
return cljs.tools.reader.read_PLUS_string.cljs$core$IFn$_invoke$arity$3(stream,true,null);
}));

(cljs.tools.reader.read_PLUS_string.cljs$core$IFn$_invoke$arity$3 = (function (stream,eof_error_QMARK_,eof_value){
var buf = (function (reader){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(stream.frames)));
});
var offset = ((buf(stream)).length);
var o = ((((cljs.tools.reader.reader_types.source_logging_reader_QMARK_(stream)) && ((!(cljs.tools.reader.impl.utils.whitespace_QMARK_(cljs.tools.reader.reader_types.peek_char(stream)))))))?cljs.tools.reader.reader_types.log_source_STAR_(stream,(function (){
return cljs.tools.reader.read.cljs$core$IFn$_invoke$arity$3(stream,eof_error_QMARK_,eof_value);
})):cljs.tools.reader.read.cljs$core$IFn$_invoke$arity$3(stream,eof_error_QMARK_,eof_value));
var s = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(buf(stream),offset).trim();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,s], null);
}));

(cljs.tools.reader.read_PLUS_string.cljs$core$IFn$_invoke$arity$2 = (function (opts,stream){
var buf = (function (reader){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(stream.frames)));
});
var offset = ((buf(stream)).length);
var o = ((((cljs.tools.reader.reader_types.source_logging_reader_QMARK_(stream)) && ((!(cljs.tools.reader.impl.utils.whitespace_QMARK_(cljs.tools.reader.reader_types.peek_char(stream)))))))?cljs.tools.reader.reader_types.log_source_STAR_(stream,(function (){
return cljs.tools.reader.read.cljs$core$IFn$_invoke$arity$2(opts,stream);
})):cljs.tools.reader.read.cljs$core$IFn$_invoke$arity$2(opts,stream));
var s = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(buf(stream),offset).trim();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,s], null);
}));

(cljs.tools.reader.read_PLUS_string.cljs$lang$maxFixedArity = 3);

