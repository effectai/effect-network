goog.provide("cljs.core.async.impl.timers");
cljs.core.async.impl.timers.MAX_LEVEL = (15);
cljs.core.async.impl.timers.P = ((1) / (2));
cljs.core.async.impl.timers.random_level = (function cljs$core$async$impl$timers$random_level(var_args){
var G__159 = arguments.length;
switch (G__159) {
case (0):
return cljs.core.async.impl.timers.random_level.cljs$core$IFn$_invoke$arity$0();

break;
case (1):
return cljs.core.async.impl.timers.random_level.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.impl.timers.random_level.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.impl.timers.random_level.call(null,(0));
});

cljs.core.async.impl.timers.random_level.cljs$core$IFn$_invoke$arity$1 = (function (level){
while(true){
if((((Math.random() < cljs.core.async.impl.timers.P)) && ((level < cljs.core.async.impl.timers.MAX_LEVEL)))){
var G__161 = (level + (1));
level = G__161;
continue;
} else {
return level;
}
break;
}
});

cljs.core.async.impl.timers.random_level.cljs$lang$maxFixedArity = (1);


/**
* @constructor
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IPrintWithWriter}
*/
cljs.core.async.impl.timers.SkipListNode = (function (key,val,forward){
this.key = key;
this.val = val;
this.forward = forward;
this.cljs$lang$protocol_mask$partition0$ = -2139095040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.impl.timers.SkipListNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.List(null,self__.key,(new cljs.core.List(null,self__.val,null,(1),null)),(2),null));
});

cljs.core.async.impl.timers.SkipListNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var self__ = this;
var coll__$1 = this;
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"["," ","]",opts,coll__$1);
});

cljs.core.async.impl.timers.SkipListNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",(124488940),null),cljs.core.with_meta(new cljs.core.Symbol(null,"val","val",(1769233139),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null)),new cljs.core.Symbol(null,"forward","forward",(1083186224),null)], null);
});

cljs.core.async.impl.timers.SkipListNode.cljs$lang$type = true;

cljs.core.async.impl.timers.SkipListNode.cljs$lang$ctorStr = "cljs.core.async.impl.timers/SkipListNode";

cljs.core.async.impl.timers.SkipListNode.cljs$lang$ctorPrWriter = (function (this__9776__auto__,writer__9777__auto__,opt__9778__auto__){
return cljs.core._write.call(null,writer__9777__auto__,"cljs.core.async.impl.timers/SkipListNode");
});

/**
 * Positional factory function for cljs.core.async.impl.timers/SkipListNode.
 */
cljs.core.async.impl.timers.__GT_SkipListNode = (function cljs$core$async$impl$timers$__GT_SkipListNode(key,val,forward){
return (new cljs.core.async.impl.timers.SkipListNode(key,val,forward));
});

cljs.core.async.impl.timers.skip_list_node = (function cljs$core$async$impl$timers$skip_list_node(var_args){
var G__163 = arguments.length;
switch (G__163) {
case (1):
return cljs.core.async.impl.timers.skip_list_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (3):
return cljs.core.async.impl.timers.skip_list_node.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.impl.timers.skip_list_node.cljs$core$IFn$_invoke$arity$1 = (function (level){
return cljs.core.async.impl.timers.skip_list_node.call(null,null,null,level);
});

cljs.core.async.impl.timers.skip_list_node.cljs$core$IFn$_invoke$arity$3 = (function (k,v,level){
var arr = (new Array((level + (1))));
var i_165 = (0);
while(true){
if((i_165 < arr.length)){
(arr[i_165] = null);

var G__166 = (i_165 + (1));
i_165 = G__166;
continue;
} else {
}
break;
}

return (new cljs.core.async.impl.timers.SkipListNode(k,v,arr));
});

cljs.core.async.impl.timers.skip_list_node.cljs$lang$maxFixedArity = (3);

cljs.core.async.impl.timers.least_greater_node = (function cljs$core$async$impl$timers$least_greater_node(var_args){
var G__168 = arguments.length;
switch (G__168) {
case (3):
return cljs.core.async.impl.timers.least_greater_node.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case (4):
return cljs.core.async.impl.timers.least_greater_node.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.impl.timers.least_greater_node.cljs$core$IFn$_invoke$arity$3 = (function (x,k,level){
return cljs.core.async.impl.timers.least_greater_node.call(null,x,k,level,null);
});

cljs.core.async.impl.timers.least_greater_node.cljs$core$IFn$_invoke$arity$4 = (function (x,k,level,update){
while(true){
if((!((level < (0))))){
var x__$1 = (function (){var x__$1 = x;
while(true){
var temp__8960__auto__ = (((level < x__$1.forward.length))?(x__$1.forward[level]):null);
if(cljs.core.truth_(temp__8960__auto__)){
var x_SINGLEQUOTE_ = temp__8960__auto__;
if((x_SINGLEQUOTE_.key < k)){
var G__170 = x_SINGLEQUOTE_;
x__$1 = G__170;
continue;
} else {
return x__$1;
}
} else {
return x__$1;
}
break;
}
})();
if((update == null)){
} else {
(update[level] = x__$1);
}

var G__171 = x__$1;
var G__172 = k;
var G__173 = (level - (1));
var G__174 = update;
x = G__171;
k = G__172;
level = G__173;
update = G__174;
continue;
} else {
return x;
}
break;
}
});

cljs.core.async.impl.timers.least_greater_node.cljs$lang$maxFixedArity = (4);


/**
* @constructor
 * @implements {cljs.core.async.impl.timers.Object}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IPrintWithWriter}
*/
cljs.core.async.impl.timers.SkipList = (function (header,level){
this.header = header;
this.level = level;
this.cljs$lang$protocol_mask$partition0$ = -2139095040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.impl.timers.SkipList.prototype.put = (function (k,v){
var self__ = this;
var coll = this;
var update = (new Array(cljs.core.async.impl.timers.MAX_LEVEL));
var x = cljs.core.async.impl.timers.least_greater_node.call(null,self__.header,k,self__.level,update);
var x__$1 = (x.forward[(0)]);
if((((!((x__$1 == null)))) && ((x__$1.key === k)))){
return x__$1.val = v;
} else {
var new_level = cljs.core.async.impl.timers.random_level.call(null);
if((new_level > self__.level)){
var i_175 = (self__.level + (1));
while(true){
if((i_175 <= (new_level + (1)))){
(update[i_175] = self__.header);

var G__176 = (i_175 + (1));
i_175 = G__176;
continue;
} else {
}
break;
}

self__.level = new_level;
} else {
}

var x__$2 = cljs.core.async.impl.timers.skip_list_node.call(null,k,v,(new Array(new_level)));
var i = (0);
while(true){
if((i <= self__.level)){
var links_177 = (update[i]).forward;
(x__$2.forward[i] = (links_177[i]));

(links_177[i] = x__$2);

var G__178 = (i + (1));
i = G__178;
continue;
} else {
return null;
}
break;
}
}
});

cljs.core.async.impl.timers.SkipList.prototype.remove = (function (k){
var self__ = this;
var coll = this;
var update = (new Array(cljs.core.async.impl.timers.MAX_LEVEL));
var x = cljs.core.async.impl.timers.least_greater_node.call(null,self__.header,k,self__.level,update);
var x__$1 = (((x.forward.length === (0)))?null:(x.forward[(0)]));
if((((!((x__$1 == null)))) && ((x__$1.key === k)))){
var i_179 = (0);
while(true){
if((i_179 <= self__.level)){
var links_180 = (update[i_179]).forward;
if((x__$1 === (((i_179 < links_180.length))?(links_180[i_179]):null))){
(links_180[i_179] = (x__$1.forward[i_179]));

var G__181 = (i_179 + (1));
i_179 = G__181;
continue;
} else {
var G__182 = (i_179 + (1));
i_179 = G__182;
continue;
}
} else {
}
break;
}

while(true){
if(((((((0) < self__.level)) && ((self__.level < self__.header.forward.length)))) && (((self__.header.forward[self__.level]) == null)))){
self__.level = (self__.level - (1));

continue;
} else {
return null;
}
break;
}
} else {
return null;
}
});

cljs.core.async.impl.timers.SkipList.prototype.ceilingEntry = (function (k){
var self__ = this;
var coll = this;
var x = self__.header;
var level__$1 = self__.level;
while(true){
if((!((level__$1 < (0))))){
var nx = (function (){var x__$1 = x;
while(true){
var x_SINGLEQUOTE_ = (((level__$1 < x__$1.forward.length))?(x__$1.forward[level__$1]):null);
if((!((x_SINGLEQUOTE_ == null)))){
if((x_SINGLEQUOTE_.key > k)){
return x__$1;
} else {
var G__183 = x_SINGLEQUOTE_;
x__$1 = G__183;
continue;
}
} else {
if((level__$1 === (0))){
return x__$1;
} else {
return null;
}
}
break;
}
})();
if(cljs.core.truth_(nx)){
var G__184 = nx;
var G__185 = (level__$1 - (1));
x = G__184;
level__$1 = G__185;
continue;
} else {
var G__186 = x;
var G__187 = (level__$1 - (1));
x = G__186;
level__$1 = G__187;
continue;
}
} else {
if(cljs.core._EQ_.call(null,x.key,k)){
return x;
} else {
return (x.forward[(0)]);
}
}
break;
}
});

cljs.core.async.impl.timers.SkipList.prototype.floorEntry = (function (k){
var self__ = this;
var coll = this;
var x = self__.header;
var level__$1 = self__.level;
while(true){
if((!((level__$1 < (0))))){
var nx = (function (){var x__$1 = x;
while(true){
var x_SINGLEQUOTE_ = (((level__$1 < x__$1.forward.length))?(x__$1.forward[level__$1]):null);
if((!((x_SINGLEQUOTE_ == null)))){
if((x_SINGLEQUOTE_.key > k)){
return x__$1;
} else {
var G__188 = x_SINGLEQUOTE_;
x__$1 = G__188;
continue;
}
} else {
if((level__$1 === (0))){
return x__$1;
} else {
return null;
}
}
break;
}
})();
if(cljs.core.truth_(nx)){
var G__189 = nx;
var G__190 = (level__$1 - (1));
x = G__189;
level__$1 = G__190;
continue;
} else {
var G__191 = x;
var G__192 = (level__$1 - (1));
x = G__191;
level__$1 = G__192;
continue;
}
} else {
if((x === self__.header)){
return null;
} else {
return x;
}
}
break;
}
});

cljs.core.async.impl.timers.SkipList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var iter = ((function (coll__$1){
return (function cljs$core$async$impl$timers$iter(node){
return (new cljs.core.LazySeq(null,((function (coll__$1){
return (function (){
if((node == null)){
return null;
} else {
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node.key,node.val], null),cljs$core$async$impl$timers$iter.call(null,(node.forward[(0)])));
}
});})(coll__$1))
,null,null));
});})(coll__$1))
;
return iter.call(null,(self__.header.forward[(0)]));
});

cljs.core.async.impl.timers.SkipList.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var self__ = this;
var coll__$1 = this;
var pr_pair = ((function (coll__$1){
return (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});})(coll__$1))
;
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair,"{",", ","}",opts,coll__$1);
});

cljs.core.async.impl.timers.SkipList.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"header","header",(1759972661),null),cljs.core.with_meta(new cljs.core.Symbol(null,"level","level",(-1363938217),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null))], null);
});

cljs.core.async.impl.timers.SkipList.cljs$lang$type = true;

cljs.core.async.impl.timers.SkipList.cljs$lang$ctorStr = "cljs.core.async.impl.timers/SkipList";

cljs.core.async.impl.timers.SkipList.cljs$lang$ctorPrWriter = (function (this__9776__auto__,writer__9777__auto__,opt__9778__auto__){
return cljs.core._write.call(null,writer__9777__auto__,"cljs.core.async.impl.timers/SkipList");
});

/**
 * Positional factory function for cljs.core.async.impl.timers/SkipList.
 */
cljs.core.async.impl.timers.__GT_SkipList = (function cljs$core$async$impl$timers$__GT_SkipList(header,level){
return (new cljs.core.async.impl.timers.SkipList(header,level));
});

cljs.core.async.impl.timers.skip_list = (function cljs$core$async$impl$timers$skip_list(){
return (new cljs.core.async.impl.timers.SkipList(cljs.core.async.impl.timers.skip_list_node.call(null,(0)),(0)));
});
cljs.core.async.impl.timers.timeouts_map = cljs.core.async.impl.timers.skip_list.call(null);
cljs.core.async.impl.timers.TIMEOUT_RESOLUTION_MS = (10);
/**
 * returns a channel that will close after msecs
 */
cljs.core.async.impl.timers.timeout = (function cljs$core$async$impl$timers$timeout(msecs){
var timeout = ((new Date()).valueOf() + msecs);
var me = cljs.core.async.impl.timers.timeouts_map.ceilingEntry(timeout);
var or__9218__auto__ = (cljs.core.truth_((function (){var and__9199__auto__ = me;
if(cljs.core.truth_(and__9199__auto__)){
return (me.key < (timeout + cljs.core.async.impl.timers.TIMEOUT_RESOLUTION_MS));
} else {
return and__9199__auto__;
}
})())?me.val:null);
if(cljs.core.truth_(or__9218__auto__)){
return or__9218__auto__;
} else {
var timeout_channel = cljs.core.async.impl.channels.chan.call(null,null);
cljs.core.async.impl.timers.timeouts_map.put(timeout,timeout_channel);

cljs.core.async.impl.dispatch.queue_delay.call(null,((function (timeout_channel,or__9218__auto__,timeout,me){
return (function (){
cljs.core.async.impl.timers.timeouts_map.remove(timeout);

return cljs.core.async.impl.protocols.close_BANG_.call(null,timeout_channel);
});})(timeout_channel,or__9218__auto__,timeout,me))
,msecs);

return timeout_channel;
}
});
