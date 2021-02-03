goog.provide("cljs.core.async");
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__1092 = arguments.length;
switch (G__1092) {
case (1):
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async1093 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.impl.protocols.Handler}
*/
cljs.core.async.t_cljs$core$async1093 = (function (f,blockable,meta1094){
this.f = f;
this.blockable = blockable;
this.meta1094 = meta1094;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async1093.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1095,meta1094__$1){
var self__ = this;
var _1095__$1 = this;
return (new cljs.core.async.t_cljs$core$async1093(self__.f,self__.blockable,meta1094__$1));
});

cljs.core.async.t_cljs$core$async1093.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1095){
var self__ = this;
var _1095__$1 = this;
return self__.meta1094;
});

cljs.core.async.t_cljs$core$async1093.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async1093.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async1093.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async1093.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async1093.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"blockable","blockable",(-28395259),null),new cljs.core.Symbol(null,"meta1094","meta1094",(2031150911),null)], null);
});

cljs.core.async.t_cljs$core$async1093.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async1093.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async1093";

cljs.core.async.t_cljs$core$async1093.cljs$lang$ctorPrWriter = (function (this__9776__auto__,writer__9777__auto__,opt__9778__auto__){
return cljs.core._write.call(null,writer__9777__auto__,"cljs.core.async/t_cljs$core$async1093");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async1093.
 */
cljs.core.async.__GT_t_cljs$core$async1093 = (function cljs$core$async$__GT_t_cljs$core$async1093(f__$1,blockable__$1,meta1094){
return (new cljs.core.async.t_cljs$core$async1093(f__$1,blockable__$1,meta1094));
});

}

return (new cljs.core.async.t_cljs$core$async1093(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = (2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__1099 = arguments.length;
switch (G__1099) {
case (0):
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case (1):
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = (3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__1102 = arguments.length;
switch (G__1102) {
case (0):
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case (1):
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = (2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__1105 = arguments.length;
switch (G__1105) {
case (2):
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_1107 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_1107);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_1107,ret){
return (function (){
return fn1.call(null,val_1107);
});})(val_1107,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__1109 = arguments.length;
switch (G__1109) {
case (2):
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case (4):
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__8960__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__8960__auto__)){
var ret = temp__8960__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__8960__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__8960__auto__)){
var retb = temp__8960__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__8960__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__8960__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = (4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__10151__auto___1111 = n;
var x_1112 = (0);
while(true){
if((x_1112 < n__10151__auto___1111)){
(a[x_1112] = x_1112);

var G__1113 = (x_1112 + (1));
x_1112 = G__1113;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async1114 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.impl.protocols.Handler}
*/
cljs.core.async.t_cljs$core$async1114 = (function (flag,meta1115){
this.flag = flag;
this.meta1115 = meta1115;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async1114.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_1116,meta1115__$1){
var self__ = this;
var _1116__$1 = this;
return (new cljs.core.async.t_cljs$core$async1114(self__.flag,meta1115__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async1114.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_1116){
var self__ = this;
var _1116__$1 = this;
return self__.meta1115;
});})(flag))
;

cljs.core.async.t_cljs$core$async1114.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async1114.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async1114.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async1114.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async1114.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",(-1565787888),null),new cljs.core.Symbol(null,"meta1115","meta1115",(1327899719),null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async1114.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async1114.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async1114";

cljs.core.async.t_cljs$core$async1114.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__9776__auto__,writer__9777__auto__,opt__9778__auto__){
return cljs.core._write.call(null,writer__9777__auto__,"cljs.core.async/t_cljs$core$async1114");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async1114.
 */
cljs.core.async.__GT_t_cljs$core$async1114 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async1114(flag__$1,meta1115){
return (new cljs.core.async.t_cljs$core$async1114(flag__$1,meta1115));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async1114(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async1117 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.impl.protocols.Handler}
*/
cljs.core.async.t_cljs$core$async1117 = (function (flag,cb,meta1118){
this.flag = flag;
this.cb = cb;
this.meta1118 = meta1118;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async1117.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1119,meta1118__$1){
var self__ = this;
var _1119__$1 = this;
return (new cljs.core.async.t_cljs$core$async1117(self__.flag,self__.cb,meta1118__$1));
});

cljs.core.async.t_cljs$core$async1117.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1119){
var self__ = this;
var _1119__$1 = this;
return self__.meta1118;
});

cljs.core.async.t_cljs$core$async1117.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async1117.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async1117.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async1117.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async1117.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",(-1565787888),null),new cljs.core.Symbol(null,"cb","cb",(-2064487928),null),new cljs.core.Symbol(null,"meta1118","meta1118",(521839008),null)], null);
});

cljs.core.async.t_cljs$core$async1117.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async1117.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async1117";

cljs.core.async.t_cljs$core$async1117.cljs$lang$ctorPrWriter = (function (this__9776__auto__,writer__9777__auto__,opt__9778__auto__){
return cljs.core._write.call(null,writer__9777__auto__,"cljs.core.async/t_cljs$core$async1117");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async1117.
 */
cljs.core.async.__GT_t_cljs$core$async1117 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async1117(flag__$1,cb__$1,meta1118){
return (new cljs.core.async.t_cljs$core$async1117(flag__$1,cb__$1,meta1118));
});

}

return (new cljs.core.async.t_cljs$core$async1117(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count.call(null,ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",(1431093715)).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__9218__auto__ = wport;
if(cljs.core.truth_(or__9218__auto__)){
return or__9218__auto__;
} else {
return port;
}
})()], null));
} else {
var G__1120 = (i + (1));
i = G__1120;
continue;
}
} else {
return null;
}
break;
}
})();
var or__9218__auto__ = ret;
if(cljs.core.truth_(or__9218__auto__)){
return or__9218__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",(-1987822328)))){
var temp__9015__auto__ = (function (){var and__9199__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__9199__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__9199__auto__;
}
})();
if(cljs.core.truth_(temp__9015__auto__)){
var got = temp__9015__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",(-1987822328)).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",(-1987822328))], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__10338__auto__ = [];
var len__10335__auto___1126 = arguments.length;
var i__10336__auto___1127 = (0);
while(true){
if((i__10336__auto___1127 < len__10335__auto___1126)){
args__10338__auto__.push((arguments[i__10336__auto___1127]));

var G__1128 = (i__10336__auto___1127 + (1));
i__10336__auto___1127 = G__1128;
continue;
} else {
}
break;
}

var argseq__10339__auto__ = ((((1) < args__10338__auto__.length))?(new cljs.core.IndexedSeq(args__10338__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10339__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__1123){
var map__1124 = p__1123;
var map__1124__$1 = (((((!((map__1124 == null))))?(((((map__1124.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1124.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1124):map__1124);
var opts = map__1124__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq1121){
var G__1122 = cljs.core.first.call(null,seq1121);
var seq1121__$1 = cljs.core.next.call(null,seq1121);
var self__10326__auto__ = this;
return self__10326__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1122,seq1121__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__1130 = arguments.length;
switch (G__1130) {
case (2):
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__19__auto___1177 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19__auto___1177){
return (function (){
var f__20__auto__ = (function (){var switch__14__auto__ = ((function (c__19__auto___1177){
return (function (state_1154){
var state_val_1155 = (state_1154[(1)]);
if((state_val_1155 === (1))){
var state_1154__$1 = state_1154;
var statearr_1156_1178 = state_1154__$1;
(statearr_1156_1178[(2)] = null);

(statearr_1156_1178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1155 === (2))){
var state_1154__$1 = state_1154;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1154__$1,(4),from);
} else {
if((state_val_1155 === (3))){
var inst_1152 = (state_1154[(2)]);
var state_1154__$1 = state_1154;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1154__$1,inst_1152);
} else {
if((state_val_1155 === (4))){
var inst_1133 = (state_1154[(7)]);
var inst_1133__$1 = (state_1154[(2)]);
var inst_1134 = (inst_1133__$1 == null);
var state_1154__$1 = (function (){var statearr_1157 = state_1154;
(statearr_1157[(7)] = inst_1133__$1);

return statearr_1157;
})();
if(cljs.core.truth_(inst_1134)){
var statearr_1158_1179 = state_1154__$1;
(statearr_1158_1179[(1)] = (5));

} else {
var statearr_1159_1180 = state_1154__$1;
(statearr_1159_1180[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1155 === (5))){
var state_1154__$1 = state_1154;
if(cljs.core.truth_(close_QMARK_)){
var statearr_1160_1181 = state_1154__$1;
(statearr_1160_1181[(1)] = (8));

} else {
var statearr_1161_1182 = state_1154__$1;
(statearr_1161_1182[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1155 === (6))){
var inst_1133 = (state_1154[(7)]);
var state_1154__$1 = state_1154;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1154__$1,(11),to,inst_1133);
} else {
if((state_val_1155 === (7))){
var inst_1150 = (state_1154[(2)]);
var state_1154__$1 = state_1154;
var statearr_1162_1183 = state_1154__$1;
(statearr_1162_1183[(2)] = inst_1150);

(statearr_1162_1183[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1155 === (8))){
var inst_1137 = cljs.core.async.close_BANG_.call(null,to);
var state_1154__$1 = state_1154;
var statearr_1163_1184 = state_1154__$1;
(statearr_1163_1184[(2)] = inst_1137);

(statearr_1163_1184[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1155 === (9))){
var state_1154__$1 = state_1154;
var statearr_1164_1185 = state_1154__$1;
(statearr_1164_1185[(2)] = null);

(statearr_1164_1185[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1155 === (10))){
var inst_1140 = (state_1154[(2)]);
var state_1154__$1 = state_1154;
var statearr_1165_1186 = state_1154__$1;
(statearr_1165_1186[(2)] = inst_1140);

(statearr_1165_1186[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1155 === (11))){
var inst_1143 = (state_1154[(2)]);
var state_1154__$1 = state_1154;
if(cljs.core.truth_(inst_1143)){
var statearr_1166_1187 = state_1154__$1;
(statearr_1166_1187[(1)] = (12));

} else {
var statearr_1167_1188 = state_1154__$1;
(statearr_1167_1188[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1155 === (12))){
var state_1154__$1 = state_1154;
var statearr_1168_1189 = state_1154__$1;
(statearr_1168_1189[(2)] = null);

(statearr_1168_1189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1155 === (13))){
var state_1154__$1 = state_1154;
var statearr_1169_1190 = state_1154__$1;
(statearr_1169_1190[(2)] = null);

(statearr_1169_1190[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1155 === (14))){
var inst_1148 = (state_1154[(2)]);
var state_1154__$1 = state_1154;
var statearr_1170_1191 = state_1154__$1;
(statearr_1170_1191[(2)] = inst_1148);

(statearr_1170_1191[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
return null;
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
});})(c__19__auto___1177))
;
return ((function (switch__14__auto__,c__19__auto___1177){
return (function() {
var cljs$core$async$state_machine__15__auto__ = null;
var cljs$core$async$state_machine__15__auto____0 = (function (){
var statearr_1171 = [null,null,null,null,null,null,null,null];
(statearr_1171[(0)] = cljs$core$async$state_machine__15__auto__);

(statearr_1171[(1)] = (1));

return statearr_1171;
});
var cljs$core$async$state_machine__15__auto____1 = (function (state_1154){
while(true){
var ret_value__16__auto__ = (function (){try{while(true){
var result__17__auto__ = switch__14__auto__.call(null,state_1154);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__17__auto__;
}
break;
}
}catch (e1172){var ex__18__auto__ = e1172;
var statearr_1173_1192 = state_1154;
(statearr_1173_1192[(2)] = ex__18__auto__);


if(cljs.core.seq.call(null,(state_1154[(4)]))){
var statearr_1174_1193 = state_1154;
(statearr_1174_1193[(1)] = cljs.core.first.call(null,(state_1154[(4)])));

} else {
throw ex__18__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__1194 = state_1154;
state_1154 = G__1194;
continue;
} else {
return ret_value__16__auto__;
}
break;
}
});
cljs$core$async$state_machine__15__auto__ = function(state_1154){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15__auto____1.call(this,state_1154);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15__auto____0;
cljs$core$async$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15__auto____1;
return cljs$core$async$state_machine__15__auto__;
})()
;})(switch__14__auto__,c__19__auto___1177))
})();
var state__21__auto__ = (function (){var statearr_1175 = f__20__auto__.call(null);
(statearr_1175[(6)] = c__19__auto___1177);

return statearr_1175;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21__auto__);
});})(c__19__auto___1177))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = (3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__1195){
var vec__1196 = p__1195;
var v = cljs.core.nth.call(null,vec__1196,(0),null);
var p = cljs.core.nth.call(null,vec__1196,(1),null);
var job = vec__1196;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19__auto___1372 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19__auto___1372,res,vec__1196,v,p,job,jobs,results){
return (function (){
var f__20__auto__ = (function (){var switch__14__auto__ = ((function (c__19__auto___1372,res,vec__1196,v,p,job,jobs,results){
return (function (state_1203){
var state_val_1204 = (state_1203[(1)]);
if((state_val_1204 === (1))){
var state_1203__$1 = state_1203;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1203__$1,(2),res,v);
} else {
if((state_val_1204 === (2))){
var inst_1200 = (state_1203[(2)]);
var inst_1201 = cljs.core.async.close_BANG_.call(null,res);
var state_1203__$1 = (function (){var statearr_1205 = state_1203;
(statearr_1205[(7)] = inst_1200);

return statearr_1205;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1203__$1,inst_1201);
} else {
return null;
}
}
});})(c__19__auto___1372,res,vec__1196,v,p,job,jobs,results))
;
return ((function (switch__14__auto__,c__19__auto___1372,res,vec__1196,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15__auto____0 = (function (){
var statearr_1206 = [null,null,null,null,null,null,null,null];
(statearr_1206[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15__auto__);

(statearr_1206[(1)] = (1));

return statearr_1206;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15__auto____1 = (function (state_1203){
while(true){
var ret_value__16__auto__ = (function (){try{while(true){
var result__17__auto__ = switch__14__auto__.call(null,state_1203);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__17__auto__;
}
break;
}
}catch (e1207){var ex__18__auto__ = e1207;
var statearr_1208_1373 = state_1203;
(statearr_1208_1373[(2)] = ex__18__auto__);


if(cljs.core.seq.call(null,(state_1203[(4)]))){
var statearr_1209_1374 = state_1203;
(statearr_1209_1374[(1)] = cljs.core.first.call(null,(state_1203[(4)])));

} else {
throw ex__18__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__1375 = state_1203;
state_1203 = G__1375;
continue;
} else {
return ret_value__16__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15__auto__ = function(state_1203){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15__auto____1.call(this,state_1203);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15__auto__;
})()
;})(switch__14__auto__,c__19__auto___1372,res,vec__1196,v,p,job,jobs,results))
})();
var state__21__auto__ = (function (){var statearr_1210 = f__20__auto__.call(null);
(statearr_1210[(6)] = c__19__auto___1372);

return statearr_1210;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21__auto__);
});})(c__19__auto___1372,res,vec__1196,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__1211){
var vec__1212 = p__1211;
var v = cljs.core.nth.call(null,vec__1212,(0),null);
var p = cljs.core.nth.call(null,vec__1212,(1),null);
var job = vec__1212;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__10151__auto___1376 = n;
var __1377 = (0);
while(true){
if((__1377 < n__10151__auto___1376)){
var G__1215_1378 = type;
var G__1215_1379__$1 = (((G__1215_1378 instanceof cljs.core.Keyword))?G__1215_1378.fqn:null);
switch (G__1215_1379__$1) {
case "compute":
var c__19__auto___1381 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__1377,c__19__auto___1381,G__1215_1378,G__1215_1379__$1,n__10151__auto___1376,jobs,results,process,async){
return (function (){
var f__20__auto__ = (function (){var switch__14__auto__ = ((function (__1377,c__19__auto___1381,G__1215_1378,G__1215_1379__$1,n__10151__auto___1376,jobs,results,process,async){
return (function (state_1228){
var state_val_1229 = (state_1228[(1)]);
if((state_val_1229 === (1))){
var state_1228__$1 = state_1228;
var statearr_1230_1382 = state_1228__$1;
(statearr_1230_1382[(2)] = null);

(statearr_1230_1382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1229 === (2))){
var state_1228__$1 = state_1228;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1228__$1,(4),jobs);
} else {
if((state_val_1229 === (3))){
var inst_1226 = (state_1228[(2)]);
var state_1228__$1 = state_1228;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1228__$1,inst_1226);
} else {
if((state_val_1229 === (4))){
var inst_1218 = (state_1228[(2)]);
var inst_1219 = process.call(null,inst_1218);
var state_1228__$1 = state_1228;
if(cljs.core.truth_(inst_1219)){
var statearr_1231_1383 = state_1228__$1;
(statearr_1231_1383[(1)] = (5));

} else {
var statearr_1232_1384 = state_1228__$1;
(statearr_1232_1384[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1229 === (5))){
var state_1228__$1 = state_1228;
var statearr_1233_1385 = state_1228__$1;
(statearr_1233_1385[(2)] = null);

(statearr_1233_1385[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1229 === (6))){
var state_1228__$1 = state_1228;
var statearr_1234_1386 = state_1228__$1;
(statearr_1234_1386[(2)] = null);

(statearr_1234_1386[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1229 === (7))){
var inst_1224 = (state_1228[(2)]);
var state_1228__$1 = state_1228;
var statearr_1235_1387 = state_1228__$1;
(statearr_1235_1387[(2)] = inst_1224);

(statearr_1235_1387[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
return null;
}
}
}
}
}
}
}
});})(__1377,c__19__auto___1381,G__1215_1378,G__1215_1379__$1,n__10151__auto___1376,jobs,results,process,async))
;
return ((function (__1377,switch__14__auto__,c__19__auto___1381,G__1215_1378,G__1215_1379__$1,n__10151__auto___1376,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15__auto____0 = (function (){
var statearr_1236 = [null,null,null,null,null,null,null];
(statearr_1236[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15__auto__);

(statearr_1236[(1)] = (1));

return statearr_1236;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15__auto____1 = (function (state_1228){
while(true){
var ret_value__16__auto__ = (function (){try{while(true){
var result__17__auto__ = switch__14__auto__.call(null,state_1228);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__17__auto__;
}
break;
}
}catch (e1237){var ex__18__auto__ = e1237;
var statearr_1238_1388 = state_1228;
(statearr_1238_1388[(2)] = ex__18__auto__);


if(cljs.core.seq.call(null,(state_1228[(4)]))){
var statearr_1239_1389 = state_1228;
(statearr_1239_1389[(1)] = cljs.core.first.call(null,(state_1228[(4)])));

} else {
throw ex__18__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__1390 = state_1228;
state_1228 = G__1390;
continue;
} else {
return ret_value__16__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15__auto__ = function(state_1228){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15__auto____1.call(this,state_1228);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15__auto__;
})()
;})(__1377,switch__14__auto__,c__19__auto___1381,G__1215_1378,G__1215_1379__$1,n__10151__auto___1376,jobs,results,process,async))
})();
var state__21__auto__ = (function (){var statearr_1240 = f__20__auto__.call(null);
(statearr_1240[(6)] = c__19__auto___1381);

return statearr_1240;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21__auto__);
});})(__1377,c__19__auto___1381,G__1215_1378,G__1215_1379__$1,n__10151__auto___1376,jobs,results,process,async))
);


break;
case "async":
var c__19__auto___1391 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__1377,c__19__auto___1391,G__1215_1378,G__1215_1379__$1,n__10151__auto___1376,jobs,results,process,async){
return (function (){
var f__20__auto__ = (function (){var switch__14__auto__ = ((function (__1377,c__19__auto___1391,G__1215_1378,G__1215_1379__$1,n__10151__auto___1376,jobs,results,process,async){
return (function (state_1253){
var state_val_1254 = (state_1253[(1)]);
if((state_val_1254 === (1))){
var state_1253__$1 = state_1253;
var statearr_1255_1392 = state_1253__$1;
(statearr_1255_1392[(2)] = null);

(statearr_1255_1392[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1254 === (2))){
var state_1253__$1 = state_1253;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1253__$1,(4),jobs);
} else {
if((state_val_1254 === (3))){
var inst_1251 = (state_1253[(2)]);
var state_1253__$1 = state_1253;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1253__$1,inst_1251);
} else {
if((state_val_1254 === (4))){
var inst_1243 = (state_1253[(2)]);
var inst_1244 = async.call(null,inst_1243);
var state_1253__$1 = state_1253;
if(cljs.core.truth_(inst_1244)){
var statearr_1256_1393 = state_1253__$1;
(statearr_1256_1393[(1)] = (5));

} else {
var statearr_1257_1394 = state_1253__$1;
(statearr_1257_1394[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1254 === (5))){
var state_1253__$1 = state_1253;
var statearr_1258_1395 = state_1253__$1;
(statearr_1258_1395[(2)] = null);

(statearr_1258_1395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1254 === (6))){
var state_1253__$1 = state_1253;
var statearr_1259_1396 = state_1253__$1;
(statearr_1259_1396[(2)] = null);

(statearr_1259_1396[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1254 === (7))){
var inst_1249 = (state_1253[(2)]);
var state_1253__$1 = state_1253;
var statearr_1260_1397 = state_1253__$1;
(statearr_1260_1397[(2)] = inst_1249);

(statearr_1260_1397[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
return null;
}
}
}
}
}
}
}
});})(__1377,c__19__auto___1391,G__1215_1378,G__1215_1379__$1,n__10151__auto___1376,jobs,results,process,async))
;
return ((function (__1377,switch__14__auto__,c__19__auto___1391,G__1215_1378,G__1215_1379__$1,n__10151__auto___1376,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15__auto____0 = (function (){
var statearr_1261 = [null,null,null,null,null,null,null];
(statearr_1261[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15__auto__);

(statearr_1261[(1)] = (1));

return statearr_1261;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15__auto____1 = (function (state_1253){
while(true){
var ret_value__16__auto__ = (function (){try{while(true){
var result__17__auto__ = switch__14__auto__.call(null,state_1253);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__17__auto__;
}
break;
}
}catch (e1262){var ex__18__auto__ = e1262;
var statearr_1263_1398 = state_1253;
(statearr_1263_1398[(2)] = ex__18__auto__);


if(cljs.core.seq.call(null,(state_1253[(4)]))){
var statearr_1264_1399 = state_1253;
(statearr_1264_1399[(1)] = cljs.core.first.call(null,(state_1253[(4)])));

} else {
throw ex__18__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__1400 = state_1253;
state_1253 = G__1400;
continue;
} else {
return ret_value__16__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15__auto__ = function(state_1253){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15__auto____1.call(this,state_1253);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15__auto__;
})()
;})(__1377,switch__14__auto__,c__19__auto___1391,G__1215_1378,G__1215_1379__$1,n__10151__auto___1376,jobs,results,process,async))
})();
var state__21__auto__ = (function (){var statearr_1265 = f__20__auto__.call(null);
(statearr_1265[(6)] = c__19__auto___1391);

return statearr_1265;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21__auto__);
});})(__1377,c__19__auto___1391,G__1215_1378,G__1215_1379__$1,n__10151__auto___1376,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__1215_1379__$1)].join('')));

}

var G__1401 = (__1377 + (1));
__1377 = G__1401;
continue;
} else {
}
break;
}

var c__19__auto___1402 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19__auto___1402,jobs,results,process,async){
return (function (){
var f__20__auto__ = (function (){var switch__14__auto__ = ((function (c__19__auto___1402,jobs,results,process,async){
return (function (state_1287){
var state_val_1288 = (state_1287[(1)]);
if((state_val_1288 === (1))){
var state_1287__$1 = state_1287;
var statearr_1289_1403 = state_1287__$1;
(statearr_1289_1403[(2)] = null);

(statearr_1289_1403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1288 === (2))){
var state_1287__$1 = state_1287;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1287__$1,(4),from);
} else {
if((state_val_1288 === (3))){
var inst_1285 = (state_1287[(2)]);
var state_1287__$1 = state_1287;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1287__$1,inst_1285);
} else {
if((state_val_1288 === (4))){
var inst_1268 = (state_1287[(7)]);
var inst_1268__$1 = (state_1287[(2)]);
var inst_1269 = (inst_1268__$1 == null);
var state_1287__$1 = (function (){var statearr_1290 = state_1287;
(statearr_1290[(7)] = inst_1268__$1);

return statearr_1290;
})();
if(cljs.core.truth_(inst_1269)){
var statearr_1291_1404 = state_1287__$1;
(statearr_1291_1404[(1)] = (5));

} else {
var statearr_1292_1405 = state_1287__$1;
(statearr_1292_1405[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1288 === (5))){
var inst_1271 = cljs.core.async.close_BANG_.call(null,jobs);
var state_1287__$1 = state_1287;
var statearr_1293_1406 = state_1287__$1;
(statearr_1293_1406[(2)] = inst_1271);

(statearr_1293_1406[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1288 === (6))){
var inst_1268 = (state_1287[(7)]);
var inst_1273 = (state_1287[(8)]);
var inst_1273__$1 = cljs.core.async.chan.call(null,(1));
var inst_1274 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_1275 = [inst_1268,inst_1273__$1];
var inst_1276 = (new cljs.core.PersistentVector(null,(2),(5),inst_1274,inst_1275,null));
var state_1287__$1 = (function (){var statearr_1294 = state_1287;
(statearr_1294[(8)] = inst_1273__$1);

return statearr_1294;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1287__$1,(8),jobs,inst_1276);
} else {
if((state_val_1288 === (7))){
var inst_1283 = (state_1287[(2)]);
var state_1287__$1 = state_1287;
var statearr_1295_1407 = state_1287__$1;
(statearr_1295_1407[(2)] = inst_1283);

(statearr_1295_1407[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1288 === (8))){
var inst_1273 = (state_1287[(8)]);
var inst_1278 = (state_1287[(2)]);
var state_1287__$1 = (function (){var statearr_1296 = state_1287;
(statearr_1296[(9)] = inst_1278);

return statearr_1296;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1287__$1,(9),results,inst_1273);
} else {
if((state_val_1288 === (9))){
var inst_1280 = (state_1287[(2)]);
var state_1287__$1 = (function (){var statearr_1297 = state_1287;
(statearr_1297[(10)] = inst_1280);

return statearr_1297;
})();
var statearr_1298_1408 = state_1287__$1;
(statearr_1298_1408[(2)] = null);

(statearr_1298_1408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__19__auto___1402,jobs,results,process,async))
;
return ((function (switch__14__auto__,c__19__auto___1402,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15__auto____0 = (function (){
var statearr_1299 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_1299[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15__auto__);

(statearr_1299[(1)] = (1));

return statearr_1299;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15__auto____1 = (function (state_1287){
while(true){
var ret_value__16__auto__ = (function (){try{while(true){
var result__17__auto__ = switch__14__auto__.call(null,state_1287);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__17__auto__;
}
break;
}
}catch (e1300){var ex__18__auto__ = e1300;
var statearr_1301_1409 = state_1287;
(statearr_1301_1409[(2)] = ex__18__auto__);


if(cljs.core.seq.call(null,(state_1287[(4)]))){
var statearr_1302_1410 = state_1287;
(statearr_1302_1410[(1)] = cljs.core.first.call(null,(state_1287[(4)])));

} else {
throw ex__18__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__1411 = state_1287;
state_1287 = G__1411;
continue;
} else {
return ret_value__16__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15__auto__ = function(state_1287){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15__auto____1.call(this,state_1287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15__auto__;
})()
;})(switch__14__auto__,c__19__auto___1402,jobs,results,process,async))
})();
var state__21__auto__ = (function (){var statearr_1303 = f__20__auto__.call(null);
(statearr_1303[(6)] = c__19__auto___1402);

return statearr_1303;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21__auto__);
});})(c__19__auto___1402,jobs,results,process,async))
);


var c__19__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19__auto__,jobs,results,process,async){
return (function (){
var f__20__auto__ = (function (){var switch__14__auto__ = ((function (c__19__auto__,jobs,results,process,async){
return (function (state_1341){
var state_val_1342 = (state_1341[(1)]);
if((state_val_1342 === (1))){
var state_1341__$1 = state_1341;
var statearr_1343_1412 = state_1341__$1;
(statearr_1343_1412[(2)] = null);

(statearr_1343_1412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1342 === (2))){
var state_1341__$1 = state_1341;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1341__$1,(4),results);
} else {
if((state_val_1342 === (3))){
var inst_1339 = (state_1341[(2)]);
var state_1341__$1 = state_1341;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1341__$1,inst_1339);
} else {
if((state_val_1342 === (4))){
var inst_1306 = (state_1341[(7)]);
var inst_1306__$1 = (state_1341[(2)]);
var inst_1307 = (inst_1306__$1 == null);
var state_1341__$1 = (function (){var statearr_1344 = state_1341;
(statearr_1344[(7)] = inst_1306__$1);

return statearr_1344;
})();
if(cljs.core.truth_(inst_1307)){
var statearr_1345_1413 = state_1341__$1;
(statearr_1345_1413[(1)] = (5));

} else {
var statearr_1346_1414 = state_1341__$1;
(statearr_1346_1414[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1342 === (5))){
var state_1341__$1 = state_1341;
if(cljs.core.truth_(close_QMARK_)){
var statearr_1347_1415 = state_1341__$1;
(statearr_1347_1415[(1)] = (8));

} else {
var statearr_1348_1416 = state_1341__$1;
(statearr_1348_1416[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1342 === (6))){
var inst_1306 = (state_1341[(7)]);
var state_1341__$1 = state_1341;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1341__$1,(11),inst_1306);
} else {
if((state_val_1342 === (7))){
var inst_1337 = (state_1341[(2)]);
var state_1341__$1 = state_1341;
var statearr_1349_1417 = state_1341__$1;
(statearr_1349_1417[(2)] = inst_1337);

(statearr_1349_1417[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1342 === (8))){
var inst_1310 = cljs.core.async.close_BANG_.call(null,to);
var state_1341__$1 = state_1341;
var statearr_1350_1418 = state_1341__$1;
(statearr_1350_1418[(2)] = inst_1310);

(statearr_1350_1418[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1342 === (9))){
var state_1341__$1 = state_1341;
var statearr_1351_1419 = state_1341__$1;
(statearr_1351_1419[(2)] = null);

(statearr_1351_1419[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1342 === (10))){
var inst_1313 = (state_1341[(2)]);
var state_1341__$1 = state_1341;
var statearr_1352_1420 = state_1341__$1;
(statearr_1352_1420[(2)] = inst_1313);

(statearr_1352_1420[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1342 === (11))){
var inst_1316 = (state_1341[(2)]);
var state_1341__$1 = (function (){var statearr_1353 = state_1341;
(statearr_1353[(8)] = inst_1316);

return statearr_1353;
})();
var statearr_1354_1421 = state_1341__$1;
(statearr_1354_1421[(2)] = null);

(statearr_1354_1421[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1342 === (12))){
var inst_1316 = (state_1341[(8)]);
var state_1341__$1 = state_1341;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1341__$1,(14),inst_1316);
} else {
if((state_val_1342 === (13))){
var inst_1334 = (state_1341[(2)]);
var state_1341__$1 = (function (){var statearr_1355 = state_1341;
(statearr_1355[(9)] = inst_1334);

return statearr_1355;
})();
var statearr_1356_1422 = state_1341__$1;
(statearr_1356_1422[(2)] = null);

(statearr_1356_1422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1342 === (14))){
var inst_1319 = (state_1341[(10)]);
var inst_1321 = (state_1341[(11)]);
var inst_1319__$1 = (state_1341[(2)]);
var inst_1320 = (inst_1319__$1 == null);
var inst_1321__$1 = cljs.core.not.call(null,inst_1320);
var state_1341__$1 = (function (){var statearr_1357 = state_1341;
(statearr_1357[(10)] = inst_1319__$1);

(statearr_1357[(11)] = inst_1321__$1);

return statearr_1357;
})();
if(inst_1321__$1){
var statearr_1358_1423 = state_1341__$1;
(statearr_1358_1423[(1)] = (15));

} else {
var statearr_1359_1424 = state_1341__$1;
(statearr_1359_1424[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1342 === (15))){
var inst_1319 = (state_1341[(10)]);
var state_1341__$1 = state_1341;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1341__$1,(18),to,inst_1319);
} else {
if((state_val_1342 === (16))){
var inst_1321 = (state_1341[(11)]);
var state_1341__$1 = state_1341;
var statearr_1360_1425 = state_1341__$1;
(statearr_1360_1425[(2)] = inst_1321);

(statearr_1360_1425[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1342 === (17))){
var inst_1327 = (state_1341[(2)]);
var state_1341__$1 = state_1341;
if(cljs.core.truth_(inst_1327)){
var statearr_1361_1426 = state_1341__$1;
(statearr_1361_1426[(1)] = (19));

} else {
var statearr_1362_1427 = state_1341__$1;
(statearr_1362_1427[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1342 === (18))){
var inst_1324 = (state_1341[(2)]);
var state_1341__$1 = state_1341;
var statearr_1363_1428 = state_1341__$1;
(statearr_1363_1428[(2)] = inst_1324);

(statearr_1363_1428[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1342 === (19))){
var state_1341__$1 = state_1341;
var statearr_1364_1429 = state_1341__$1;
(statearr_1364_1429[(2)] = null);

(statearr_1364_1429[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1342 === (20))){
var state_1341__$1 = state_1341;
var statearr_1365_1430 = state_1341__$1;
(statearr_1365_1430[(2)] = null);

(statearr_1365_1430[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1342 === (21))){
var inst_1332 = (state_1341[(2)]);
var state_1341__$1 = state_1341;
var statearr_1366_1431 = state_1341__$1;
(statearr_1366_1431[(2)] = inst_1332);

(statearr_1366_1431[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
return null;
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
}
}
}
}
}
}
});})(c__19__auto__,jobs,results,process,async))
;
return ((function (switch__14__auto__,c__19__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15__auto____0 = (function (){
var statearr_1367 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_1367[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15__auto__);

(statearr_1367[(1)] = (1));

return statearr_1367;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15__auto____1 = (function (state_1341){
while(true){
var ret_value__16__auto__ = (function (){try{while(true){
var result__17__auto__ = switch__14__auto__.call(null,state_1341);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__17__auto__;
}
break;
}
}catch (e1368){var ex__18__auto__ = e1368;
var statearr_1369_1432 = state_1341;
(statearr_1369_1432[(2)] = ex__18__auto__);


if(cljs.core.seq.call(null,(state_1341[(4)]))){
var statearr_1370_1433 = state_1341;
(statearr_1370_1433[(1)] = cljs.core.first.call(null,(state_1341[(4)])));

} else {
throw ex__18__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__1434 = state_1341;
state_1341 = G__1434;
continue;
} else {
return ret_value__16__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15__auto__ = function(state_1341){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15__auto____1.call(this,state_1341);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15__auto__;
})()
;})(switch__14__auto__,c__19__auto__,jobs,results,process,async))
})();
var state__21__auto__ = (function (){var statearr_1371 = f__20__auto__.call(null);
(statearr_1371[(6)] = c__19__auto__);

return statearr_1371;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21__auto__);
});})(c__19__auto__,jobs,results,process,async))
);

return c__19__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__1436 = arguments.length;
switch (G__1436) {
case (4):
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case (5):
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",(1050769601)));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = (5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__1439 = arguments.length;
switch (G__1439) {
case (4):
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case (5):
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case (6):
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",(1555393130)));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = (6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__1442 = arguments.length;
switch (G__1442) {
case (2):
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (4):
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__19__auto___1492 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19__auto___1492,tc,fc){
return (function (){
var f__20__auto__ = (function (){var switch__14__auto__ = ((function (c__19__auto___1492,tc,fc){
return (function (state_1468){
var state_val_1469 = (state_1468[(1)]);
if((state_val_1469 === (1))){
var state_1468__$1 = state_1468;
var statearr_1470_1493 = state_1468__$1;
(statearr_1470_1493[(2)] = null);

(statearr_1470_1493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1469 === (2))){
var state_1468__$1 = state_1468;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1468__$1,(4),ch);
} else {
if((state_val_1469 === (3))){
var inst_1466 = (state_1468[(2)]);
var state_1468__$1 = state_1468;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1468__$1,inst_1466);
} else {
if((state_val_1469 === (4))){
var inst_1445 = (state_1468[(7)]);
var inst_1445__$1 = (state_1468[(2)]);
var inst_1446 = (inst_1445__$1 == null);
var state_1468__$1 = (function (){var statearr_1471 = state_1468;
(statearr_1471[(7)] = inst_1445__$1);

return statearr_1471;
})();
if(cljs.core.truth_(inst_1446)){
var statearr_1472_1494 = state_1468__$1;
(statearr_1472_1494[(1)] = (5));

} else {
var statearr_1473_1495 = state_1468__$1;
(statearr_1473_1495[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1469 === (5))){
var inst_1448 = cljs.core.async.close_BANG_.call(null,tc);
var inst_1449 = cljs.core.async.close_BANG_.call(null,fc);
var state_1468__$1 = (function (){var statearr_1474 = state_1468;
(statearr_1474[(8)] = inst_1448);

return statearr_1474;
})();
var statearr_1475_1496 = state_1468__$1;
(statearr_1475_1496[(2)] = inst_1449);

(statearr_1475_1496[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1469 === (6))){
var inst_1445 = (state_1468[(7)]);
var inst_1451 = p.call(null,inst_1445);
var state_1468__$1 = state_1468;
if(cljs.core.truth_(inst_1451)){
var statearr_1476_1497 = state_1468__$1;
(statearr_1476_1497[(1)] = (9));

} else {
var statearr_1477_1498 = state_1468__$1;
(statearr_1477_1498[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1469 === (7))){
var inst_1464 = (state_1468[(2)]);
var state_1468__$1 = state_1468;
var statearr_1478_1499 = state_1468__$1;
(statearr_1478_1499[(2)] = inst_1464);

(statearr_1478_1499[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1469 === (8))){
var inst_1457 = (state_1468[(2)]);
var state_1468__$1 = state_1468;
if(cljs.core.truth_(inst_1457)){
var statearr_1479_1500 = state_1468__$1;
(statearr_1479_1500[(1)] = (12));

} else {
var statearr_1480_1501 = state_1468__$1;
(statearr_1480_1501[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1469 === (9))){
var state_1468__$1 = state_1468;
var statearr_1481_1502 = state_1468__$1;
(statearr_1481_1502[(2)] = tc);

(statearr_1481_1502[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1469 === (10))){
var state_1468__$1 = state_1468;
var statearr_1482_1503 = state_1468__$1;
(statearr_1482_1503[(2)] = fc);

(statearr_1482_1503[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1469 === (11))){
var inst_1445 = (state_1468[(7)]);
var inst_1455 = (state_1468[(2)]);
var state_1468__$1 = state_1468;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1468__$1,(8),inst_1455,inst_1445);
} else {
if((state_val_1469 === (12))){
var state_1468__$1 = state_1468;
var statearr_1483_1504 = state_1468__$1;
(statearr_1483_1504[(2)] = null);

(statearr_1483_1504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1469 === (13))){
var state_1468__$1 = state_1468;
var statearr_1484_1505 = state_1468__$1;
(statearr_1484_1505[(2)] = null);

(statearr_1484_1505[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1469 === (14))){
var inst_1462 = (state_1468[(2)]);
var state_1468__$1 = state_1468;
var statearr_1485_1506 = state_1468__$1;
(statearr_1485_1506[(2)] = inst_1462);

(statearr_1485_1506[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
return null;
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
});})(c__19__auto___1492,tc,fc))
;
return ((function (switch__14__auto__,c__19__auto___1492,tc,fc){
return (function() {
var cljs$core$async$state_machine__15__auto__ = null;
var cljs$core$async$state_machine__15__auto____0 = (function (){
var statearr_1486 = [null,null,null,null,null,null,null,null,null];
(statearr_1486[(0)] = cljs$core$async$state_machine__15__auto__);

(statearr_1486[(1)] = (1));

return statearr_1486;
});
var cljs$core$async$state_machine__15__auto____1 = (function (state_1468){
while(true){
var ret_value__16__auto__ = (function (){try{while(true){
var result__17__auto__ = switch__14__auto__.call(null,state_1468);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__17__auto__;
}
break;
}
}catch (e1487){var ex__18__auto__ = e1487;
var statearr_1488_1507 = state_1468;
(statearr_1488_1507[(2)] = ex__18__auto__);


if(cljs.core.seq.call(null,(state_1468[(4)]))){
var statearr_1489_1508 = state_1468;
(statearr_1489_1508[(1)] = cljs.core.first.call(null,(state_1468[(4)])));

} else {
throw ex__18__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__1509 = state_1468;
state_1468 = G__1509;
continue;
} else {
return ret_value__16__auto__;
}
break;
}
});
cljs$core$async$state_machine__15__auto__ = function(state_1468){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15__auto____1.call(this,state_1468);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15__auto____0;
cljs$core$async$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15__auto____1;
return cljs$core$async$state_machine__15__auto__;
})()
;})(switch__14__auto__,c__19__auto___1492,tc,fc))
})();
var state__21__auto__ = (function (){var statearr_1490 = f__20__auto__.call(null);
(statearr_1490[(6)] = c__19__auto___1492);

return statearr_1490;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21__auto__);
});})(c__19__auto___1492,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = (4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__19__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19__auto__){
return (function (){
var f__20__auto__ = (function (){var switch__14__auto__ = ((function (c__19__auto__){
return (function (state_1530){
var state_val_1531 = (state_1530[(1)]);
if((state_val_1531 === (1))){
var inst_1510 = init;
var state_1530__$1 = (function (){var statearr_1532 = state_1530;
(statearr_1532[(7)] = inst_1510);

return statearr_1532;
})();
var statearr_1533_1551 = state_1530__$1;
(statearr_1533_1551[(2)] = null);

(statearr_1533_1551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1531 === (2))){
var state_1530__$1 = state_1530;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1530__$1,(4),ch);
} else {
if((state_val_1531 === (3))){
var inst_1528 = (state_1530[(2)]);
var state_1530__$1 = state_1530;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1530__$1,inst_1528);
} else {
if((state_val_1531 === (4))){
var inst_1513 = (state_1530[(8)]);
var inst_1513__$1 = (state_1530[(2)]);
var inst_1514 = (inst_1513__$1 == null);
var state_1530__$1 = (function (){var statearr_1534 = state_1530;
(statearr_1534[(8)] = inst_1513__$1);

return statearr_1534;
})();
if(cljs.core.truth_(inst_1514)){
var statearr_1535_1552 = state_1530__$1;
(statearr_1535_1552[(1)] = (5));

} else {
var statearr_1536_1553 = state_1530__$1;
(statearr_1536_1553[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1531 === (5))){
var inst_1510 = (state_1530[(7)]);
var state_1530__$1 = state_1530;
var statearr_1537_1554 = state_1530__$1;
(statearr_1537_1554[(2)] = inst_1510);

(statearr_1537_1554[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1531 === (6))){
var inst_1510 = (state_1530[(7)]);
var inst_1513 = (state_1530[(8)]);
var inst_1517 = (state_1530[(9)]);
var inst_1517__$1 = f.call(null,inst_1510,inst_1513);
var inst_1518 = cljs.core.reduced_QMARK_.call(null,inst_1517__$1);
var state_1530__$1 = (function (){var statearr_1538 = state_1530;
(statearr_1538[(9)] = inst_1517__$1);

return statearr_1538;
})();
if(inst_1518){
var statearr_1539_1555 = state_1530__$1;
(statearr_1539_1555[(1)] = (8));

} else {
var statearr_1540_1556 = state_1530__$1;
(statearr_1540_1556[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1531 === (7))){
var inst_1526 = (state_1530[(2)]);
var state_1530__$1 = state_1530;
var statearr_1541_1557 = state_1530__$1;
(statearr_1541_1557[(2)] = inst_1526);

(statearr_1541_1557[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1531 === (8))){
var inst_1517 = (state_1530[(9)]);
var inst_1520 = cljs.core.deref.call(null,inst_1517);
var state_1530__$1 = state_1530;
var statearr_1542_1558 = state_1530__$1;
(statearr_1542_1558[(2)] = inst_1520);

(statearr_1542_1558[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1531 === (9))){
var inst_1517 = (state_1530[(9)]);
var inst_1510 = inst_1517;
var state_1530__$1 = (function (){var statearr_1543 = state_1530;
(statearr_1543[(7)] = inst_1510);

return statearr_1543;
})();
var statearr_1544_1559 = state_1530__$1;
(statearr_1544_1559[(2)] = null);

(statearr_1544_1559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1531 === (10))){
var inst_1524 = (state_1530[(2)]);
var state_1530__$1 = state_1530;
var statearr_1545_1560 = state_1530__$1;
(statearr_1545_1560[(2)] = inst_1524);

(statearr_1545_1560[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
return null;
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
});})(c__19__auto__))
;
return ((function (switch__14__auto__,c__19__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__15__auto__ = null;
var cljs$core$async$reduce_$_state_machine__15__auto____0 = (function (){
var statearr_1546 = [null,null,null,null,null,null,null,null,null,null];
(statearr_1546[(0)] = cljs$core$async$reduce_$_state_machine__15__auto__);

(statearr_1546[(1)] = (1));

return statearr_1546;
});
var cljs$core$async$reduce_$_state_machine__15__auto____1 = (function (state_1530){
while(true){
var ret_value__16__auto__ = (function (){try{while(true){
var result__17__auto__ = switch__14__auto__.call(null,state_1530);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__17__auto__;
}
break;
}
}catch (e1547){var ex__18__auto__ = e1547;
var statearr_1548_1561 = state_1530;
(statearr_1548_1561[(2)] = ex__18__auto__);


if(cljs.core.seq.call(null,(state_1530[(4)]))){
var statearr_1549_1562 = state_1530;
(statearr_1549_1562[(1)] = cljs.core.first.call(null,(state_1530[(4)])));

} else {
throw ex__18__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__1563 = state_1530;
state_1530 = G__1563;
continue;
} else {
return ret_value__16__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__15__auto__ = function(state_1530){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__15__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__15__auto____1.call(this,state_1530);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__15__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__15__auto____0;
cljs$core$async$reduce_$_state_machine__15__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__15__auto____1;
return cljs$core$async$reduce_$_state_machine__15__auto__;
})()
;})(switch__14__auto__,c__19__auto__))
})();
var state__21__auto__ = (function (){var statearr_1550 = f__20__auto__.call(null);
(statearr_1550[(6)] = c__19__auto__);

return statearr_1550;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21__auto__);
});})(c__19__auto__))
);

return c__19__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__19__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19__auto__,f__$1){
return (function (){
var f__20__auto__ = (function (){var switch__14__auto__ = ((function (c__19__auto__,f__$1){
return (function (state_1569){
var state_val_1570 = (state_1569[(1)]);
if((state_val_1570 === (1))){
var inst_1564 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_1569__$1 = state_1569;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1569__$1,(2),inst_1564);
} else {
if((state_val_1570 === (2))){
var inst_1566 = (state_1569[(2)]);
var inst_1567 = f__$1.call(null,inst_1566);
var state_1569__$1 = state_1569;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1569__$1,inst_1567);
} else {
return null;
}
}
});})(c__19__auto__,f__$1))
;
return ((function (switch__14__auto__,c__19__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__15__auto__ = null;
var cljs$core$async$transduce_$_state_machine__15__auto____0 = (function (){
var statearr_1571 = [null,null,null,null,null,null,null];
(statearr_1571[(0)] = cljs$core$async$transduce_$_state_machine__15__auto__);

(statearr_1571[(1)] = (1));

return statearr_1571;
});
var cljs$core$async$transduce_$_state_machine__15__auto____1 = (function (state_1569){
while(true){
var ret_value__16__auto__ = (function (){try{while(true){
var result__17__auto__ = switch__14__auto__.call(null,state_1569);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__17__auto__;
}
break;
}
}catch (e1572){var ex__18__auto__ = e1572;
var statearr_1573_1576 = state_1569;
(statearr_1573_1576[(2)] = ex__18__auto__);


if(cljs.core.seq.call(null,(state_1569[(4)]))){
var statearr_1574_1577 = state_1569;
(statearr_1574_1577[(1)] = cljs.core.first.call(null,(state_1569[(4)])));

} else {
throw ex__18__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__1578 = state_1569;
state_1569 = G__1578;
continue;
} else {
return ret_value__16__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__15__auto__ = function(state_1569){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__15__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__15__auto____1.call(this,state_1569);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__15__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__15__auto____0;
cljs$core$async$transduce_$_state_machine__15__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__15__auto____1;
return cljs$core$async$transduce_$_state_machine__15__auto__;
})()
;})(switch__14__auto__,c__19__auto__,f__$1))
})();
var state__21__auto__ = (function (){var statearr_1575 = f__20__auto__.call(null);
(statearr_1575[(6)] = c__19__auto__);

return statearr_1575;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21__auto__);
});})(c__19__auto__,f__$1))
);

return c__19__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__1580 = arguments.length;
switch (G__1580) {
case (2):
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__19__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19__auto__){
return (function (){
var f__20__auto__ = (function (){var switch__14__auto__ = ((function (c__19__auto__){
return (function (state_1605){
var state_val_1606 = (state_1605[(1)]);
if((state_val_1606 === (1))){
var inst_1581 = cljs.core.seq.call(null,coll);
var inst_1582 = inst_1581;
var state_1605__$1 = (function (){var statearr_1607 = state_1605;
(statearr_1607[(7)] = inst_1582);

return statearr_1607;
})();
var statearr_1608_1629 = state_1605__$1;
(statearr_1608_1629[(2)] = null);

(statearr_1608_1629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1606 === (2))){
var inst_1582 = (state_1605[(7)]);
var state_1605__$1 = state_1605;
if(cljs.core.truth_(inst_1582)){
var statearr_1609_1630 = state_1605__$1;
(statearr_1609_1630[(1)] = (4));

} else {
var statearr_1610_1631 = state_1605__$1;
(statearr_1610_1631[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1606 === (3))){
var inst_1603 = (state_1605[(2)]);
var state_1605__$1 = state_1605;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1605__$1,inst_1603);
} else {
if((state_val_1606 === (4))){
var inst_1582 = (state_1605[(7)]);
var inst_1585 = cljs.core.first.call(null,inst_1582);
var state_1605__$1 = state_1605;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1605__$1,(7),ch,inst_1585);
} else {
if((state_val_1606 === (5))){
var inst_1582 = (state_1605[(7)]);
var state_1605__$1 = state_1605;
var statearr_1611_1632 = state_1605__$1;
(statearr_1611_1632[(2)] = inst_1582);

(statearr_1611_1632[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1606 === (6))){
var inst_1590 = (state_1605[(2)]);
var state_1605__$1 = state_1605;
if(cljs.core.truth_(inst_1590)){
var statearr_1612_1633 = state_1605__$1;
(statearr_1612_1633[(1)] = (8));

} else {
var statearr_1613_1634 = state_1605__$1;
(statearr_1613_1634[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1606 === (7))){
var inst_1587 = (state_1605[(2)]);
var state_1605__$1 = state_1605;
var statearr_1614_1635 = state_1605__$1;
(statearr_1614_1635[(2)] = inst_1587);

(statearr_1614_1635[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1606 === (8))){
var inst_1582 = (state_1605[(7)]);
var inst_1592 = cljs.core.next.call(null,inst_1582);
var inst_1582__$1 = inst_1592;
var state_1605__$1 = (function (){var statearr_1615 = state_1605;
(statearr_1615[(7)] = inst_1582__$1);

return statearr_1615;
})();
var statearr_1616_1636 = state_1605__$1;
(statearr_1616_1636[(2)] = null);

(statearr_1616_1636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1606 === (9))){
var state_1605__$1 = state_1605;
if(cljs.core.truth_(close_QMARK_)){
var statearr_1617_1637 = state_1605__$1;
(statearr_1617_1637[(1)] = (11));

} else {
var statearr_1618_1638 = state_1605__$1;
(statearr_1618_1638[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1606 === (10))){
var inst_1601 = (state_1605[(2)]);
var state_1605__$1 = state_1605;
var statearr_1619_1639 = state_1605__$1;
(statearr_1619_1639[(2)] = inst_1601);

(statearr_1619_1639[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1606 === (11))){
var inst_1596 = cljs.core.async.close_BANG_.call(null,ch);
var state_1605__$1 = state_1605;
var statearr_1620_1640 = state_1605__$1;
(statearr_1620_1640[(2)] = inst_1596);

(statearr_1620_1640[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1606 === (12))){
var state_1605__$1 = state_1605;
var statearr_1621_1641 = state_1605__$1;
(statearr_1621_1641[(2)] = null);

(statearr_1621_1641[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1606 === (13))){
var inst_1599 = (state_1605[(2)]);
var state_1605__$1 = state_1605;
var statearr_1622_1642 = state_1605__$1;
(statearr_1622_1642[(2)] = inst_1599);

(statearr_1622_1642[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
return null;
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
});})(c__19__auto__))
;
return ((function (switch__14__auto__,c__19__auto__){
return (function() {
var cljs$core$async$state_machine__15__auto__ = null;
var cljs$core$async$state_machine__15__auto____0 = (function (){
var statearr_1623 = [null,null,null,null,null,null,null,null];
(statearr_1623[(0)] = cljs$core$async$state_machine__15__auto__);

(statearr_1623[(1)] = (1));

return statearr_1623;
});
var cljs$core$async$state_machine__15__auto____1 = (function (state_1605){
while(true){
var ret_value__16__auto__ = (function (){try{while(true){
var result__17__auto__ = switch__14__auto__.call(null,state_1605);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__17__auto__;
}
break;
}
}catch (e1624){var ex__18__auto__ = e1624;
var statearr_1625_1643 = state_1605;
(statearr_1625_1643[(2)] = ex__18__auto__);


if(cljs.core.seq.call(null,(state_1605[(4)]))){
var statearr_1626_1644 = state_1605;
(statearr_1626_1644[(1)] = cljs.core.first.call(null,(state_1605[(4)])));

} else {
throw ex__18__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__1645 = state_1605;
state_1605 = G__1645;
continue;
} else {
return ret_value__16__auto__;
}
break;
}
});
cljs$core$async$state_machine__15__auto__ = function(state_1605){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15__auto____1.call(this,state_1605);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15__auto____0;
cljs$core$async$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15__auto____1;
return cljs$core$async$state_machine__15__auto__;
})()
;})(switch__14__auto__,c__19__auto__))
})();
var state__21__auto__ = (function (){var statearr_1627 = f__20__auto__.call(null);
(statearr_1627[(6)] = c__19__auto__);

return statearr_1627;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21__auto__);
});})(c__19__auto__))
);

return c__19__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = (3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__9839__auto__ = (((_ == null))?null:_);
var m__9840__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__9839__auto__)]);
if((!((m__9840__auto__ == null)))){
return m__9840__auto__.call(null,_);
} else {
var m__9837__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__9837__auto__ == null)))){
return m__9837__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__9839__auto__ = (((m == null))?null:m);
var m__9840__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__9839__auto__)]);
if((!((m__9840__auto__ == null)))){
return m__9840__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__9837__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__9837__auto__ == null)))){
return m__9837__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__9839__auto__ = (((m == null))?null:m);
var m__9840__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__9839__auto__)]);
if((!((m__9840__auto__ == null)))){
return m__9840__auto__.call(null,m,ch);
} else {
var m__9837__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__9837__auto__ == null)))){
return m__9837__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__9839__auto__ = (((m == null))?null:m);
var m__9840__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__9839__auto__)]);
if((!((m__9840__auto__ == null)))){
return m__9840__auto__.call(null,m);
} else {
var m__9837__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__9837__auto__ == null)))){
return m__9837__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async1646 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.async.Mult}
*/
cljs.core.async.t_cljs$core$async1646 = (function (ch,cs,meta1647){
this.ch = ch;
this.cs = cs;
this.meta1647 = meta1647;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async1646.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_1648,meta1647__$1){
var self__ = this;
var _1648__$1 = this;
return (new cljs.core.async.t_cljs$core$async1646(self__.ch,self__.cs,meta1647__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async1646.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_1648){
var self__ = this;
var _1648__$1 = this;
return self__.meta1647;
});})(cs))
;

cljs.core.async.t_cljs$core$async1646.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async1646.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async1646.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async1646.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async1646.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async1646.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async1646.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",(1085813622),null),new cljs.core.Symbol(null,"cs","cs",(-117024463),null),new cljs.core.Symbol(null,"meta1647","meta1647",(-963194111),null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async1646.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async1646.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async1646";

cljs.core.async.t_cljs$core$async1646.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__9776__auto__,writer__9777__auto__,opt__9778__auto__){
return cljs.core._write.call(null,writer__9777__auto__,"cljs.core.async/t_cljs$core$async1646");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async1646.
 */
cljs.core.async.__GT_t_cljs$core$async1646 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async1646(ch__$1,cs__$1,meta1647){
return (new cljs.core.async.t_cljs$core$async1646(ch__$1,cs__$1,meta1647));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async1646(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__19__auto___1865 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19__auto___1865,cs,m,dchan,dctr,done){
return (function (){
var f__20__auto__ = (function (){var switch__14__auto__ = ((function (c__19__auto___1865,cs,m,dchan,dctr,done){
return (function (state_1781){
var state_val_1782 = (state_1781[(1)]);
if((state_val_1782 === (32))){
var inst_1726 = (state_1781[(7)]);
var inst_1723 = (state_1781[(8)]);
var inst_1724 = (state_1781[(9)]);
var inst_1725 = (state_1781[(10)]);
var inst_1737 = (state_1781[(2)]);
var inst_1738 = (inst_1726 + (1));
var tmp1783 = inst_1723;
var tmp1784 = inst_1724;
var tmp1785 = inst_1725;
var inst_1723__$1 = tmp1783;
var inst_1724__$1 = tmp1784;
var inst_1725__$1 = tmp1785;
var inst_1726__$1 = inst_1738;
var state_1781__$1 = (function (){var statearr_1786 = state_1781;
(statearr_1786[(11)] = inst_1737);

(statearr_1786[(8)] = inst_1723__$1);

(statearr_1786[(9)] = inst_1724__$1);

(statearr_1786[(10)] = inst_1725__$1);

(statearr_1786[(7)] = inst_1726__$1);

return statearr_1786;
})();
var statearr_1787_1866 = state_1781__$1;
(statearr_1787_1866[(2)] = null);

(statearr_1787_1866[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1782 === (1))){
var state_1781__$1 = state_1781;
var statearr_1788_1867 = state_1781__$1;
(statearr_1788_1867[(2)] = null);

(statearr_1788_1867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1782 === (33))){
var inst_1741 = (state_1781[(12)]);
var inst_1743 = cljs.core.chunked_seq_QMARK_.call(null,inst_1741);
var state_1781__$1 = state_1781;
if(inst_1743){
var statearr_1789_1868 = state_1781__$1;
(statearr_1789_1868[(1)] = (36));

} else {
var statearr_1790_1869 = state_1781__$1;
(statearr_1790_1869[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1782 === (2))){
var state_1781__$1 = state_1781;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1781__$1,(4),ch);
} else {
if((state_val_1782 === (34))){
var state_1781__$1 = state_1781;
var statearr_1791_1870 = state_1781__$1;
(statearr_1791_1870[(2)] = null);

(statearr_1791_1870[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1782 === (3))){
var inst_1779 = (state_1781[(2)]);
var state_1781__$1 = state_1781;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1781__$1,inst_1779);
} else {
if((state_val_1782 === (35))){
var inst_1763 = (state_1781[(2)]);
var state_1781__$1 = state_1781;
var statearr_1792_1871 = state_1781__$1;
(statearr_1792_1871[(2)] = inst_1763);

(statearr_1792_1871[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1782 === (4))){
var inst_1651 = (state_1781[(13)]);
var inst_1651__$1 = (state_1781[(2)]);
var inst_1652 = (inst_1651__$1 == null);
var state_1781__$1 = (function (){var statearr_1793 = state_1781;
(statearr_1793[(13)] = inst_1651__$1);

return statearr_1793;
})();
if(cljs.core.truth_(inst_1652)){
var statearr_1794_1872 = state_1781__$1;
(statearr_1794_1872[(1)] = (5));

} else {
var statearr_1795_1873 = state_1781__$1;
(statearr_1795_1873[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1782 === (36))){
var inst_1741 = (state_1781[(12)]);
var inst_1745 = cljs.core.chunk_first.call(null,inst_1741);
var inst_1746 = cljs.core.chunk_rest.call(null,inst_1741);
var inst_1747 = cljs.core.count.call(null,inst_1745);
var inst_1723 = inst_1746;
var inst_1724 = inst_1745;
var inst_1725 = inst_1747;
var inst_1726 = (0);
var state_1781__$1 = (function (){var statearr_1796 = state_1781;
(statearr_1796[(8)] = inst_1723);

(statearr_1796[(9)] = inst_1724);

(statearr_1796[(10)] = inst_1725);

(statearr_1796[(7)] = inst_1726);

return statearr_1796;
})();
var statearr_1797_1874 = state_1781__$1;
(statearr_1797_1874[(2)] = null);

(statearr_1797_1874[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1782 === (5))){
var inst_1658 = cljs.core.deref.call(null,cs);
var inst_1659 = cljs.core.seq.call(null,inst_1658);
var inst_1660 = inst_1659;
var inst_1661 = null;
var inst_1662 = (0);
var inst_1663 = (0);
var state_1781__$1 = (function (){var statearr_1798 = state_1781;
(statearr_1798[(14)] = inst_1660);

(statearr_1798[(17)] = inst_1661);

(statearr_1798[(18)] = inst_1662);

(statearr_1798[(19)] = inst_1663);

return statearr_1798;
})();
var statearr_1799_1875 = state_1781__$1;
(statearr_1799_1875[(2)] = null);

(statearr_1799_1875[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1782 === (37))){
var inst_1741 = (state_1781[(12)]);
var inst_1750 = (state_1781[(15)]);
var inst_1651 = (state_1781[(13)]);
var inst_1750__$1 = cljs.core.first.call(null,inst_1741);
var inst_1751 = cljs.core.async.put_BANG_.call(null,inst_1750__$1,inst_1651,done);
var state_1781__$1 = (function (){var statearr_1800 = state_1781;
(statearr_1800[(15)] = inst_1750__$1);

return statearr_1800;
})();
if(cljs.core.truth_(inst_1751)){
var statearr_1801_1876 = state_1781__$1;
(statearr_1801_1876[(1)] = (39));

} else {
var statearr_1802_1877 = state_1781__$1;
(statearr_1802_1877[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1782 === (6))){
var inst_1715 = (state_1781[(16)]);
var inst_1714 = cljs.core.deref.call(null,cs);
var inst_1715__$1 = cljs.core.keys.call(null,inst_1714);
var inst_1716 = cljs.core.count.call(null,inst_1715__$1);
var inst_1717 = cljs.core.reset_BANG_.call(null,dctr,inst_1716);
var inst_1722 = cljs.core.seq.call(null,inst_1715__$1);
var inst_1723 = inst_1722;
var inst_1724 = null;
var inst_1725 = (0);
var inst_1726 = (0);
var state_1781__$1 = (function (){var statearr_1803 = state_1781;
(statearr_1803[(16)] = inst_1715__$1);

(statearr_1803[(20)] = inst_1717);

(statearr_1803[(8)] = inst_1723);

(statearr_1803[(9)] = inst_1724);

(statearr_1803[(10)] = inst_1725);

(statearr_1803[(7)] = inst_1726);

return statearr_1803;
})();
var statearr_1804_1878 = state_1781__$1;
(statearr_1804_1878[(2)] = null);

(statearr_1804_1878[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1782 === (38))){
var inst_1760 = (state_1781[(2)]);
var state_1781__$1 = state_1781;
var statearr_1805_1879 = state_1781__$1;
(statearr_1805_1879[(2)] = inst_1760);

(statearr_1805_1879[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1782 === (7))){
var inst_1777 = (state_1781[(2)]);
var state_1781__$1 = state_1781;
var statearr_1806_1880 = state_1781__$1;
(statearr_1806_1880[(2)] = inst_1777);

(statearr_1806_1880[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1782 === (39))){
var state_1781__$1 = state_1781;
var statearr_1807_1881 = state_1781__$1;
(statearr_1807_1881[(2)] = null);

(statearr_1807_1881[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1782 === (8))){
var inst_1663 = (state_1781[(19)]);
var inst_1662 = (state_1781[(18)]);
var inst_1665 = (inst_1663 < inst_1662);
var inst_1666 = inst_1665;
var state_1781__$1 = state_1781;
if(cljs.core.truth_(inst_1666)){
var statearr_1808_1882 = state_1781__$1;
(statearr_1808_1882[(1)] = (10));

} else {
var statearr_1809_1883 = state_1781__$1;
(statearr_1809_1883[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1782 === (40))){
var inst_1750 = (state_1781[(15)]);
var inst_1754 = cljs.core.async.untap_STAR_.call(null,m,inst_1750);
var state_1781__$1 = state_1781;
var statearr_1810_1884 = state_1781__$1;
(statearr_1810_1884[(2)] = inst_1754);

(statearr_1810_1884[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1782 === (9))){
var inst_1712 = (state_1781[(2)]);
var state_1781__$1 = state_1781;
var statearr_1811_1885 = state_1781__$1;
(statearr_1811_1885[(2)] = inst_1712);

(statearr_1811_1885[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1782 === (41))){
var inst_1741 = (state_1781[(12)]);
var inst_1756 = (state_1781[(2)]);
var inst_1757 = cljs.core.next.call(null,inst_1741);
var inst_1723 = inst_1757;
var inst_1724 = null;
var inst_1725 = (0);
var inst_1726 = (0);
var state_1781__$1 = (function (){var statearr_1812 = state_1781;
(statearr_1812[(21)] = inst_1756);

(statearr_1812[(8)] = inst_1723);

(statearr_1812[(9)] = inst_1724);

(statearr_1812[(10)] = inst_1725);

(statearr_1812[(7)] = inst_1726);

return statearr_1812;
})();
var statearr_1813_1886 = state_1781__$1;
(statearr_1813_1886[(2)] = null);

(statearr_1813_1886[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1782 === (10))){
var inst_1661 = (state_1781[(17)]);
var inst_1663 = (state_1781[(19)]);
var inst_1671 = cljs.core._nth.call(null,inst_1661,inst_1663);
var inst_1672 = cljs.core.nth.call(null,inst_1671,(0),null);
var inst_1673 = cljs.core.nth.call(null,inst_1671,(1),null);
var state_1781__$1 = (function (){var statearr_1814 = state_1781;
(statearr_1814[(22)] = inst_1672);

return statearr_1814;
})();
if(cljs.core.truth_(inst_1673)){
var statearr_1815_1887 = state_1781__$1;
(statearr_1815_1887[(1)] = (13));

} else {
var statearr_1816_1888 = state_1781__$1;
(statearr_1816_1888[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1782 === (42))){
var state_1781__$1 = state_1781;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1781__$1,(45),dchan);
} else {
if((state_val_1782 === (11))){
var inst_1660 = (state_1781[(14)]);
var inst_1682 = (state_1781[(23)]);
var inst_1682__$1 = cljs.core.seq.call(null,inst_1660);
var state_1781__$1 = (function (){var statearr_1817 = state_1781;
(statearr_1817[(23)] = inst_1682__$1);

return statearr_1817;
})();
if(inst_1682__$1){
var statearr_1818_1889 = state_1781__$1;
(statearr_1818_1889[(1)] = (16));

} else {
var statearr_1819_1890 = state_1781__$1;
(statearr_1819_1890[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1782 === (43))){
var state_1781__$1 = state_1781;
var statearr_1820_1891 = state_1781__$1;
(statearr_1820_1891[(2)] = null);

(statearr_1820_1891[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1782 === (12))){
var inst_1710 = (state_1781[(2)]);
var state_1781__$1 = state_1781;
var statearr_1821_1892 = state_1781__$1;
(statearr_1821_1892[(2)] = inst_1710);

(statearr_1821_1892[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1782 === (44))){
var inst_1774 = (state_1781[(2)]);
var state_1781__$1 = (function (){var statearr_1822 = state_1781;
(statearr_1822[(24)] = inst_1774);

return statearr_1822;
})();
var statearr_1823_1893 = state_1781__$1;
(statearr_1823_1893[(2)] = null);

(statearr_1823_1893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1782 === (13))){
var inst_1672 = (state_1781[(22)]);
var inst_1675 = cljs.core.async.close_BANG_.call(null,inst_1672);
var state_1781__$1 = state_1781;
var statearr_1824_1894 = state_1781__$1;
(statearr_1824_1894[(2)] = inst_1675);

(statearr_1824_1894[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1782 === (45))){
var inst_1771 = (state_1781[(2)]);
var state_1781__$1 = state_1781;
var statearr_1828_1895 = state_1781__$1;
(statearr_1828_1895[(2)] = inst_1771);

(statearr_1828_1895[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1782 === (14))){
var state_1781__$1 = state_1781;
var statearr_1829_1896 = state_1781__$1;
(statearr_1829_1896[(2)] = null);

(statearr_1829_1896[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1782 === (15))){
var inst_1663 = (state_1781[(19)]);
var inst_1660 = (state_1781[(14)]);
var inst_1661 = (state_1781[(17)]);
var inst_1662 = (state_1781[(18)]);
var inst_1678 = (state_1781[(2)]);
var inst_1679 = (inst_1663 + (1));
var tmp1825 = inst_1660;
var tmp1826 = inst_1661;
var tmp1827 = inst_1662;
var inst_1660__$1 = tmp1825;
var inst_1661__$1 = tmp1826;
var inst_1662__$1 = tmp1827;
var inst_1663__$1 = inst_1679;
var state_1781__$1 = (function (){var statearr_1830 = state_1781;
(statearr_1830[(25)] = inst_1678);

(statearr_1830[(14)] = inst_1660__$1);

(statearr_1830[(17)] = inst_1661__$1);

(statearr_1830[(18)] = inst_1662__$1);

(statearr_1830[(19)] = inst_1663__$1);

return statearr_1830;
})();
var statearr_1831_1897 = state_1781__$1;
(statearr_1831_1897[(2)] = null);

(statearr_1831_1897[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1782 === (16))){
var inst_1682 = (state_1781[(23)]);
var inst_1684 = cljs.core.chunked_seq_QMARK_.call(null,inst_1682);
var state_1781__$1 = state_1781;
if(inst_1684){
var statearr_1832_1898 = state_1781__$1;
(statearr_1832_1898[(1)] = (19));

} else {
var statearr_1833_1899 = state_1781__$1;
(statearr_1833_1899[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1782 === (17))){
var state_1781__$1 = state_1781;
var statearr_1834_1900 = state_1781__$1;
(statearr_1834_1900[(2)] = null);

(statearr_1834_1900[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1782 === (18))){
var inst_1708 = (state_1781[(2)]);
var state_1781__$1 = state_1781;
var statearr_1835_1901 = state_1781__$1;
(statearr_1835_1901[(2)] = inst_1708);

(statearr_1835_1901[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1782 === (19))){
var inst_1682 = (state_1781[(23)]);
var inst_1686 = cljs.core.chunk_first.call(null,inst_1682);
var inst_1687 = cljs.core.chunk_rest.call(null,inst_1682);
var inst_1688 = cljs.core.count.call(null,inst_1686);
var inst_1660 = inst_1687;
var inst_1661 = inst_1686;
var inst_1662 = inst_1688;
var inst_1663 = (0);
var state_1781__$1 = (function (){var statearr_1836 = state_1781;
(statearr_1836[(14)] = inst_1660);

(statearr_1836[(17)] = inst_1661);

(statearr_1836[(18)] = inst_1662);

(statearr_1836[(19)] = inst_1663);

return statearr_1836;
})();
var statearr_1837_1902 = state_1781__$1;
(statearr_1837_1902[(2)] = null);

(statearr_1837_1902[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1782 === (20))){
var inst_1682 = (state_1781[(23)]);
var inst_1694 = cljs.core.first.call(null,inst_1682);
var inst_1695 = cljs.core.nth.call(null,inst_1694,(0),null);
var inst_1696 = cljs.core.nth.call(null,inst_1694,(1),null);
var state_1781__$1 = (function (){var statearr_1838 = state_1781;
(statearr_1838[(26)] = inst_1695);

return statearr_1838;
})();
if(cljs.core.truth_(inst_1696)){
var statearr_1839_1903 = state_1781__$1;
(statearr_1839_1903[(1)] = (22));

} else {
var statearr_1840_1904 = state_1781__$1;
(statearr_1840_1904[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1782 === (21))){
var inst_1705 = (state_1781[(2)]);
var state_1781__$1 = state_1781;
var statearr_1841_1905 = state_1781__$1;
(statearr_1841_1905[(2)] = inst_1705);

(statearr_1841_1905[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1782 === (22))){
var inst_1695 = (state_1781[(26)]);
var inst_1698 = cljs.core.async.close_BANG_.call(null,inst_1695);
var state_1781__$1 = state_1781;
var statearr_1842_1906 = state_1781__$1;
(statearr_1842_1906[(2)] = inst_1698);

(statearr_1842_1906[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1782 === (23))){
var state_1781__$1 = state_1781;
var statearr_1843_1907 = state_1781__$1;
(statearr_1843_1907[(2)] = null);

(statearr_1843_1907[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1782 === (24))){
var inst_1682 = (state_1781[(23)]);
var inst_1701 = (state_1781[(2)]);
var inst_1702 = cljs.core.next.call(null,inst_1682);
var inst_1660 = inst_1702;
var inst_1661 = null;
var inst_1662 = (0);
var inst_1663 = (0);
var state_1781__$1 = (function (){var statearr_1844 = state_1781;
(statearr_1844[(27)] = inst_1701);

(statearr_1844[(14)] = inst_1660);

(statearr_1844[(17)] = inst_1661);

(statearr_1844[(18)] = inst_1662);

(statearr_1844[(19)] = inst_1663);

return statearr_1844;
})();
var statearr_1845_1908 = state_1781__$1;
(statearr_1845_1908[(2)] = null);

(statearr_1845_1908[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1782 === (25))){
var inst_1726 = (state_1781[(7)]);
var inst_1725 = (state_1781[(10)]);
var inst_1728 = (inst_1726 < inst_1725);
var inst_1729 = inst_1728;
var state_1781__$1 = state_1781;
if(cljs.core.truth_(inst_1729)){
var statearr_1846_1909 = state_1781__$1;
(statearr_1846_1909[(1)] = (27));

} else {
var statearr_1847_1910 = state_1781__$1;
(statearr_1847_1910[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1782 === (26))){
var inst_1715 = (state_1781[(16)]);
var inst_1767 = (state_1781[(2)]);
var inst_1768 = cljs.core.seq.call(null,inst_1715);
var state_1781__$1 = (function (){var statearr_1848 = state_1781;
(statearr_1848[(28)] = inst_1767);

return statearr_1848;
})();
if(inst_1768){
var statearr_1849_1911 = state_1781__$1;
(statearr_1849_1911[(1)] = (42));

} else {
var statearr_1850_1912 = state_1781__$1;
(statearr_1850_1912[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1782 === (27))){
var inst_1724 = (state_1781[(9)]);
var inst_1726 = (state_1781[(7)]);
var inst_1731 = (state_1781[(29)]);
var inst_1651 = (state_1781[(13)]);
var inst_1731__$1 = cljs.core._nth.call(null,inst_1724,inst_1726);
var inst_1732 = cljs.core.async.put_BANG_.call(null,inst_1731__$1,inst_1651,done);
var state_1781__$1 = (function (){var statearr_1851 = state_1781;
(statearr_1851[(29)] = inst_1731__$1);

return statearr_1851;
})();
if(cljs.core.truth_(inst_1732)){
var statearr_1852_1913 = state_1781__$1;
(statearr_1852_1913[(1)] = (30));

} else {
var statearr_1853_1914 = state_1781__$1;
(statearr_1853_1914[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1782 === (28))){
var inst_1723 = (state_1781[(8)]);
var inst_1741 = (state_1781[(12)]);
var inst_1741__$1 = cljs.core.seq.call(null,inst_1723);
var state_1781__$1 = (function (){var statearr_1854 = state_1781;
(statearr_1854[(12)] = inst_1741__$1);

return statearr_1854;
})();
if(inst_1741__$1){
var statearr_1855_1915 = state_1781__$1;
(statearr_1855_1915[(1)] = (33));

} else {
var statearr_1856_1916 = state_1781__$1;
(statearr_1856_1916[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1782 === (29))){
var inst_1765 = (state_1781[(2)]);
var state_1781__$1 = state_1781;
var statearr_1857_1917 = state_1781__$1;
(statearr_1857_1917[(2)] = inst_1765);

(statearr_1857_1917[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1782 === (30))){
var state_1781__$1 = state_1781;
var statearr_1858_1918 = state_1781__$1;
(statearr_1858_1918[(2)] = null);

(statearr_1858_1918[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1782 === (31))){
var inst_1731 = (state_1781[(29)]);
var inst_1735 = cljs.core.async.untap_STAR_.call(null,m,inst_1731);
var state_1781__$1 = state_1781;
var statearr_1859_1919 = state_1781__$1;
(statearr_1859_1919[(2)] = inst_1735);

(statearr_1859_1919[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
return null;
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
});})(c__19__auto___1865,cs,m,dchan,dctr,done))
;
return ((function (switch__14__auto__,c__19__auto___1865,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__15__auto__ = null;
var cljs$core$async$mult_$_state_machine__15__auto____0 = (function (){
var statearr_1860 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_1860[(0)] = cljs$core$async$mult_$_state_machine__15__auto__);

(statearr_1860[(1)] = (1));

return statearr_1860;
});
var cljs$core$async$mult_$_state_machine__15__auto____1 = (function (state_1781){
while(true){
var ret_value__16__auto__ = (function (){try{while(true){
var result__17__auto__ = switch__14__auto__.call(null,state_1781);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__17__auto__;
}
break;
}
}catch (e1861){var ex__18__auto__ = e1861;
var statearr_1862_1920 = state_1781;
(statearr_1862_1920[(2)] = ex__18__auto__);


if(cljs.core.seq.call(null,(state_1781[(4)]))){
var statearr_1863_1921 = state_1781;
(statearr_1863_1921[(1)] = cljs.core.first.call(null,(state_1781[(4)])));

} else {
throw ex__18__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__1922 = state_1781;
state_1781 = G__1922;
continue;
} else {
return ret_value__16__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__15__auto__ = function(state_1781){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__15__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__15__auto____1.call(this,state_1781);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__15__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__15__auto____0;
cljs$core$async$mult_$_state_machine__15__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__15__auto____1;
return cljs$core$async$mult_$_state_machine__15__auto__;
})()
;})(switch__14__auto__,c__19__auto___1865,cs,m,dchan,dctr,done))
})();
var state__21__auto__ = (function (){var statearr_1864 = f__20__auto__.call(null);
(statearr_1864[(6)] = c__19__auto___1865);

return statearr_1864;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21__auto__);
});})(c__19__auto___1865,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__1924 = arguments.length;
switch (G__1924) {
case (2):
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = (3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__9839__auto__ = (((m == null))?null:m);
var m__9840__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__9839__auto__)]);
if((!((m__9840__auto__ == null)))){
return m__9840__auto__.call(null,m,ch);
} else {
var m__9837__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__9837__auto__ == null)))){
return m__9837__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__9839__auto__ = (((m == null))?null:m);
var m__9840__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__9839__auto__)]);
if((!((m__9840__auto__ == null)))){
return m__9840__auto__.call(null,m,ch);
} else {
var m__9837__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__9837__auto__ == null)))){
return m__9837__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__9839__auto__ = (((m == null))?null:m);
var m__9840__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__9839__auto__)]);
if((!((m__9840__auto__ == null)))){
return m__9840__auto__.call(null,m);
} else {
var m__9837__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__9837__auto__ == null)))){
return m__9837__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__9839__auto__ = (((m == null))?null:m);
var m__9840__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__9839__auto__)]);
if((!((m__9840__auto__ == null)))){
return m__9840__auto__.call(null,m,state_map);
} else {
var m__9837__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__9837__auto__ == null)))){
return m__9837__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__9839__auto__ = (((m == null))?null:m);
var m__9840__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__9839__auto__)]);
if((!((m__9840__auto__ == null)))){
return m__9840__auto__.call(null,m,mode);
} else {
var m__9837__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__9837__auto__ == null)))){
return m__9837__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__10338__auto__ = [];
var len__10335__auto___1936 = arguments.length;
var i__10336__auto___1937 = (0);
while(true){
if((i__10336__auto___1937 < len__10335__auto___1936)){
args__10338__auto__.push((arguments[i__10336__auto___1937]));

var G__1938 = (i__10336__auto___1937 + (1));
i__10336__auto___1937 = G__1938;
continue;
} else {
}
break;
}

var argseq__10339__auto__ = ((((3) < args__10338__auto__.length))?(new cljs.core.IndexedSeq(args__10338__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10339__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__1930){
var map__1931 = p__1930;
var map__1931__$1 = (((((!((map__1931 == null))))?(((((map__1931.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1931.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1931):map__1931);
var opts = map__1931__$1;
var statearr_1933_1939 = state;
(statearr_1933_1939[(1)] = cont_block);


var temp__9015__auto__ = cljs.core.async.do_alts.call(null,((function (map__1931,map__1931__$1,opts){
return (function (val){
var statearr_1934_1940 = state;
(statearr_1934_1940[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__1931,map__1931__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__9015__auto__)){
var cb = temp__9015__auto__;
var statearr_1935_1941 = state;
(statearr_1935_1941[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq1926){
var G__1927 = cljs.core.first.call(null,seq1926);
var seq1926__$1 = cljs.core.next.call(null,seq1926);
var G__1928 = cljs.core.first.call(null,seq1926__$1);
var seq1926__$2 = cljs.core.next.call(null,seq1926__$1);
var G__1929 = cljs.core.first.call(null,seq1926__$2);
var seq1926__$3 = cljs.core.next.call(null,seq1926__$2);
var self__10326__auto__ = this;
return self__10326__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1927,G__1928,G__1929,seq1926__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mute","mute",(1151223646)),null,new cljs.core.Keyword(null,"pause","pause",(-2095325672)),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",(-316350075)));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",(1151223646)));
var change = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(1)));
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",(-316350075)),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",(-2095325672)),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",(1441458643)),solos,new cljs.core.Keyword(null,"mutes","mutes",(1068806309)),pick.call(null,new cljs.core.Keyword(null,"mute","mute",(1151223646)),chs),new cljs.core.Keyword(null,"reads","reads",(-1215067361)),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",(-2095325672)))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async1942 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.async.Mix}
*/
cljs.core.async.t_cljs$core$async1942 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta1943){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta1943 = meta1943;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async1942.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_1944,meta1943__$1){
var self__ = this;
var _1944__$1 = this;
return (new cljs.core.async.t_cljs$core$async1942(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta1943__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async1942.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_1944){
var self__ = this;
var _1944__$1 = this;
return self__.meta1943;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async1942.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async1942.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async1942.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async1942.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async1942.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async1942.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async1942.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async1942.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async1942.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",(477485025),null),new cljs.core.Symbol(null,"solo-mode","solo-mode",(2031788074),null),new cljs.core.Symbol(null,"pick","pick",(1300068175),null),new cljs.core.Symbol(null,"cs","cs",(-117024463),null),new cljs.core.Symbol(null,"calc-state","calc-state",(-349968968),null),new cljs.core.Symbol(null,"out","out",(729986010),null),new cljs.core.Symbol(null,"changed","changed",(-2083710852),null),new cljs.core.Symbol(null,"solo-modes","solo-modes",(882180540),null),new cljs.core.Symbol(null,"attrs","attrs",(-450137186),null),new cljs.core.Symbol(null,"meta1943","meta1943",(411793017),null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async1942.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async1942.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async1942";

cljs.core.async.t_cljs$core$async1942.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__9776__auto__,writer__9777__auto__,opt__9778__auto__){
return cljs.core._write.call(null,writer__9777__auto__,"cljs.core.async/t_cljs$core$async1942");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async1942.
 */
cljs.core.async.__GT_t_cljs$core$async1942 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async1942(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta1943){
return (new cljs.core.async.t_cljs$core$async1942(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta1943));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async1942(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19__auto___2107 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19__auto___2107,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__20__auto__ = (function (){var switch__14__auto__ = ((function (c__19__auto___2107,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_2046){
var state_val_2047 = (state_2046[(1)]);
if((state_val_2047 === (32))){
var inst_2005 = (state_2046[(7)]);
var state_2046__$1 = state_2046;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_2046__$1,(35),out,inst_2005);
} else {
if((state_val_2047 === (1))){
var inst_1948 = (state_2046[(8)]);
var inst_1948__$1 = calc_state.call(null);
var inst_1950 = (inst_1948__$1 == null);
var inst_1951 = cljs.core.not.call(null,inst_1950);
var state_2046__$1 = (function (){var statearr_2048 = state_2046;
(statearr_2048[(8)] = inst_1948__$1);

return statearr_2048;
})();
if(inst_1951){
var statearr_2049_2108 = state_2046__$1;
(statearr_2049_2108[(1)] = (2));

} else {
var statearr_2050_2109 = state_2046__$1;
(statearr_2050_2109[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2047 === (33))){
var inst_1996 = (state_2046[(9)]);
var inst_1973 = inst_1996;
var state_2046__$1 = (function (){var statearr_2051 = state_2046;
(statearr_2051[(10)] = inst_1973);

return statearr_2051;
})();
var statearr_2052_2110 = state_2046__$1;
(statearr_2052_2110[(2)] = null);

(statearr_2052_2110[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2047 === (2))){
var inst_1948 = (state_2046[(8)]);
var inst_1953 = inst_1948.cljs$lang$protocol_mask$partition0$;
var inst_1954 = (inst_1953 & (64));
var inst_1955 = inst_1948.cljs$core$ISeq$;
var inst_1956 = (cljs.core.PROTOCOL_SENTINEL === inst_1955);
var inst_1957 = ((inst_1954) || (inst_1956));
var state_2046__$1 = state_2046;
if(cljs.core.truth_(inst_1957)){
var statearr_2053_2111 = state_2046__$1;
(statearr_2053_2111[(1)] = (5));

} else {
var statearr_2054_2112 = state_2046__$1;
(statearr_2054_2112[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2047 === (34))){
var inst_2040 = (state_2046[(2)]);
var state_2046__$1 = state_2046;
var statearr_2055_2113 = state_2046__$1;
(statearr_2055_2113[(2)] = inst_2040);

(statearr_2055_2113[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2047 === (3))){
var state_2046__$1 = state_2046;
var statearr_2056_2114 = state_2046__$1;
(statearr_2056_2114[(2)] = false);

(statearr_2056_2114[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2047 === (35))){
var inst_2031 = (state_2046[(2)]);
var state_2046__$1 = state_2046;
if(cljs.core.truth_(inst_2031)){
var statearr_2057_2115 = state_2046__$1;
(statearr_2057_2115[(1)] = (36));

} else {
var statearr_2058_2116 = state_2046__$1;
(statearr_2058_2116[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2047 === (4))){
var inst_1964 = (state_2046[(2)]);
var state_2046__$1 = state_2046;
if(cljs.core.truth_(inst_1964)){
var statearr_2059_2117 = state_2046__$1;
(statearr_2059_2117[(1)] = (8));

} else {
var statearr_2060_2118 = state_2046__$1;
(statearr_2060_2118[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2047 === (36))){
var inst_1996 = (state_2046[(9)]);
var inst_1973 = inst_1996;
var state_2046__$1 = (function (){var statearr_2061 = state_2046;
(statearr_2061[(10)] = inst_1973);

return statearr_2061;
})();
var statearr_2062_2119 = state_2046__$1;
(statearr_2062_2119[(2)] = null);

(statearr_2062_2119[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2047 === (5))){
var state_2046__$1 = state_2046;
var statearr_2063_2120 = state_2046__$1;
(statearr_2063_2120[(2)] = true);

(statearr_2063_2120[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2047 === (37))){
var state_2046__$1 = state_2046;
var statearr_2064_2121 = state_2046__$1;
(statearr_2064_2121[(2)] = null);

(statearr_2064_2121[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2047 === (6))){
var state_2046__$1 = state_2046;
var statearr_2065_2122 = state_2046__$1;
(statearr_2065_2122[(2)] = false);

(statearr_2065_2122[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2047 === (38))){
var inst_2036 = (state_2046[(2)]);
var state_2046__$1 = state_2046;
var statearr_2066_2123 = state_2046__$1;
(statearr_2066_2123[(2)] = inst_2036);

(statearr_2066_2123[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2047 === (7))){
var inst_1961 = (state_2046[(2)]);
var state_2046__$1 = state_2046;
var statearr_2067_2124 = state_2046__$1;
(statearr_2067_2124[(2)] = inst_1961);

(statearr_2067_2124[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2047 === (8))){
var inst_1948 = (state_2046[(8)]);
var inst_1966 = cljs.core.apply.call(null,cljs.core.hash_map,inst_1948);
var state_2046__$1 = state_2046;
var statearr_2068_2125 = state_2046__$1;
(statearr_2068_2125[(2)] = inst_1966);

(statearr_2068_2125[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2047 === (9))){
var inst_1948 = (state_2046[(8)]);
var state_2046__$1 = state_2046;
var statearr_2069_2126 = state_2046__$1;
(statearr_2069_2126[(2)] = inst_1948);

(statearr_2069_2126[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2047 === (10))){
var inst_1948 = (state_2046[(8)]);
var inst_1969 = (state_2046[(2)]);
var inst_1970 = cljs.core.get.call(null,inst_1969,new cljs.core.Keyword(null,"solos","solos",(1441458643)));
var inst_1971 = cljs.core.get.call(null,inst_1969,new cljs.core.Keyword(null,"mutes","mutes",(1068806309)));
var inst_1972 = cljs.core.get.call(null,inst_1969,new cljs.core.Keyword(null,"reads","reads",(-1215067361)));
var inst_1973 = inst_1948;
var state_2046__$1 = (function (){var statearr_2070 = state_2046;
(statearr_2070[(11)] = inst_1970);

(statearr_2070[(12)] = inst_1971);

(statearr_2070[(13)] = inst_1972);

(statearr_2070[(10)] = inst_1973);

return statearr_2070;
})();
var statearr_2071_2127 = state_2046__$1;
(statearr_2071_2127[(2)] = null);

(statearr_2071_2127[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2047 === (11))){
var inst_1973 = (state_2046[(10)]);
var inst_1977 = (inst_1973 == null);
var inst_1978 = cljs.core.not.call(null,inst_1977);
var state_2046__$1 = state_2046;
if(inst_1978){
var statearr_2072_2128 = state_2046__$1;
(statearr_2072_2128[(1)] = (13));

} else {
var statearr_2073_2129 = state_2046__$1;
(statearr_2073_2129[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2047 === (12))){
var inst_2044 = (state_2046[(2)]);
var state_2046__$1 = state_2046;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2046__$1,inst_2044);
} else {
if((state_val_2047 === (13))){
var inst_1973 = (state_2046[(10)]);
var inst_1980 = inst_1973.cljs$lang$protocol_mask$partition0$;
var inst_1981 = (inst_1980 & (64));
var inst_1982 = inst_1973.cljs$core$ISeq$;
var inst_1983 = (cljs.core.PROTOCOL_SENTINEL === inst_1982);
var inst_1984 = ((inst_1981) || (inst_1983));
var state_2046__$1 = state_2046;
if(cljs.core.truth_(inst_1984)){
var statearr_2074_2130 = state_2046__$1;
(statearr_2074_2130[(1)] = (16));

} else {
var statearr_2075_2131 = state_2046__$1;
(statearr_2075_2131[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2047 === (14))){
var state_2046__$1 = state_2046;
var statearr_2076_2132 = state_2046__$1;
(statearr_2076_2132[(2)] = false);

(statearr_2076_2132[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2047 === (15))){
var inst_1991 = (state_2046[(2)]);
var state_2046__$1 = state_2046;
if(cljs.core.truth_(inst_1991)){
var statearr_2077_2133 = state_2046__$1;
(statearr_2077_2133[(1)] = (19));

} else {
var statearr_2078_2134 = state_2046__$1;
(statearr_2078_2134[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2047 === (16))){
var state_2046__$1 = state_2046;
var statearr_2079_2135 = state_2046__$1;
(statearr_2079_2135[(2)] = true);

(statearr_2079_2135[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2047 === (17))){
var state_2046__$1 = state_2046;
var statearr_2080_2136 = state_2046__$1;
(statearr_2080_2136[(2)] = false);

(statearr_2080_2136[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2047 === (18))){
var inst_1988 = (state_2046[(2)]);
var state_2046__$1 = state_2046;
var statearr_2081_2137 = state_2046__$1;
(statearr_2081_2137[(2)] = inst_1988);

(statearr_2081_2137[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2047 === (19))){
var inst_1973 = (state_2046[(10)]);
var inst_1993 = cljs.core.apply.call(null,cljs.core.hash_map,inst_1973);
var state_2046__$1 = state_2046;
var statearr_2082_2138 = state_2046__$1;
(statearr_2082_2138[(2)] = inst_1993);

(statearr_2082_2138[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2047 === (20))){
var inst_1973 = (state_2046[(10)]);
var state_2046__$1 = state_2046;
var statearr_2083_2139 = state_2046__$1;
(statearr_2083_2139[(2)] = inst_1973);

(statearr_2083_2139[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2047 === (21))){
var inst_1996 = (state_2046[(9)]);
var inst_1996__$1 = (state_2046[(2)]);
var inst_1997 = cljs.core.get.call(null,inst_1996__$1,new cljs.core.Keyword(null,"solos","solos",(1441458643)));
var inst_1998 = cljs.core.get.call(null,inst_1996__$1,new cljs.core.Keyword(null,"mutes","mutes",(1068806309)));
var inst_1999 = cljs.core.get.call(null,inst_1996__$1,new cljs.core.Keyword(null,"reads","reads",(-1215067361)));
var state_2046__$1 = (function (){var statearr_2084 = state_2046;
(statearr_2084[(9)] = inst_1996__$1);

(statearr_2084[(15)] = inst_1997);

(statearr_2084[(16)] = inst_1998);

return statearr_2084;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_2046__$1,(22),inst_1999);
} else {
if((state_val_2047 === (22))){
var inst_2005 = (state_2046[(7)]);
var inst_2006 = (state_2046[(14)]);
var inst_2004 = (state_2046[(2)]);
var inst_2005__$1 = cljs.core.nth.call(null,inst_2004,(0),null);
var inst_2006__$1 = cljs.core.nth.call(null,inst_2004,(1),null);
var inst_2007 = (inst_2005__$1 == null);
var inst_2008 = cljs.core._EQ_.call(null,inst_2006__$1,change);
var inst_2009 = ((inst_2007) || (inst_2008));
var state_2046__$1 = (function (){var statearr_2085 = state_2046;
(statearr_2085[(7)] = inst_2005__$1);

(statearr_2085[(14)] = inst_2006__$1);

return statearr_2085;
})();
if(cljs.core.truth_(inst_2009)){
var statearr_2086_2140 = state_2046__$1;
(statearr_2086_2140[(1)] = (23));

} else {
var statearr_2087_2141 = state_2046__$1;
(statearr_2087_2141[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2047 === (23))){
var inst_2005 = (state_2046[(7)]);
var inst_2011 = (inst_2005 == null);
var state_2046__$1 = state_2046;
if(cljs.core.truth_(inst_2011)){
var statearr_2088_2142 = state_2046__$1;
(statearr_2088_2142[(1)] = (26));

} else {
var statearr_2089_2143 = state_2046__$1;
(statearr_2089_2143[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2047 === (24))){
var inst_1997 = (state_2046[(15)]);
var inst_2006 = (state_2046[(14)]);
var inst_2020 = (state_2046[(17)]);
var inst_2020__$1 = inst_1997.call(null,inst_2006);
var state_2046__$1 = (function (){var statearr_2090 = state_2046;
(statearr_2090[(17)] = inst_2020__$1);

return statearr_2090;
})();
if(cljs.core.truth_(inst_2020__$1)){
var statearr_2091_2144 = state_2046__$1;
(statearr_2091_2144[(1)] = (29));

} else {
var statearr_2092_2145 = state_2046__$1;
(statearr_2092_2145[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2047 === (25))){
var inst_2042 = (state_2046[(2)]);
var state_2046__$1 = state_2046;
var statearr_2093_2146 = state_2046__$1;
(statearr_2093_2146[(2)] = inst_2042);

(statearr_2093_2146[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2047 === (26))){
var inst_2006 = (state_2046[(14)]);
var inst_2013 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_2006);
var state_2046__$1 = state_2046;
var statearr_2094_2147 = state_2046__$1;
(statearr_2094_2147[(2)] = inst_2013);

(statearr_2094_2147[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2047 === (27))){
var state_2046__$1 = state_2046;
var statearr_2095_2148 = state_2046__$1;
(statearr_2095_2148[(2)] = null);

(statearr_2095_2148[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2047 === (28))){
var inst_2016 = (state_2046[(2)]);
var inst_2017 = calc_state.call(null);
var inst_1973 = inst_2017;
var state_2046__$1 = (function (){var statearr_2096 = state_2046;
(statearr_2096[(18)] = inst_2016);

(statearr_2096[(10)] = inst_1973);

return statearr_2096;
})();
var statearr_2097_2149 = state_2046__$1;
(statearr_2097_2149[(2)] = null);

(statearr_2097_2149[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2047 === (29))){
var inst_2020 = (state_2046[(17)]);
var state_2046__$1 = state_2046;
var statearr_2098_2150 = state_2046__$1;
(statearr_2098_2150[(2)] = inst_2020);

(statearr_2098_2150[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2047 === (30))){
var inst_1997 = (state_2046[(15)]);
var inst_1998 = (state_2046[(16)]);
var inst_2006 = (state_2046[(14)]);
var inst_2023 = cljs.core.empty_QMARK_.call(null,inst_1997);
var inst_2024 = inst_1998.call(null,inst_2006);
var inst_2025 = cljs.core.not.call(null,inst_2024);
var inst_2026 = ((inst_2023) && (inst_2025));
var state_2046__$1 = state_2046;
var statearr_2099_2151 = state_2046__$1;
(statearr_2099_2151[(2)] = inst_2026);

(statearr_2099_2151[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2047 === (31))){
var inst_2028 = (state_2046[(2)]);
var state_2046__$1 = state_2046;
if(cljs.core.truth_(inst_2028)){
var statearr_2100_2152 = state_2046__$1;
(statearr_2100_2152[(1)] = (32));

} else {
var statearr_2101_2153 = state_2046__$1;
(statearr_2101_2153[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
return null;
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
}
}
}
}
}
}
}
}
});})(c__19__auto___2107,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__14__auto__,c__19__auto___2107,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__15__auto__ = null;
var cljs$core$async$mix_$_state_machine__15__auto____0 = (function (){
var statearr_2102 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_2102[(0)] = cljs$core$async$mix_$_state_machine__15__auto__);

(statearr_2102[(1)] = (1));

return statearr_2102;
});
var cljs$core$async$mix_$_state_machine__15__auto____1 = (function (state_2046){
while(true){
var ret_value__16__auto__ = (function (){try{while(true){
var result__17__auto__ = switch__14__auto__.call(null,state_2046);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__17__auto__;
}
break;
}
}catch (e2103){var ex__18__auto__ = e2103;
var statearr_2104_2154 = state_2046;
(statearr_2104_2154[(2)] = ex__18__auto__);


if(cljs.core.seq.call(null,(state_2046[(4)]))){
var statearr_2105_2155 = state_2046;
(statearr_2105_2155[(1)] = cljs.core.first.call(null,(state_2046[(4)])));

} else {
throw ex__18__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__2156 = state_2046;
state_2046 = G__2156;
continue;
} else {
return ret_value__16__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__15__auto__ = function(state_2046){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__15__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__15__auto____1.call(this,state_2046);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__15__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__15__auto____0;
cljs$core$async$mix_$_state_machine__15__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__15__auto____1;
return cljs$core$async$mix_$_state_machine__15__auto__;
})()
;})(switch__14__auto__,c__19__auto___2107,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__21__auto__ = (function (){var statearr_2106 = f__20__auto__.call(null);
(statearr_2106[(6)] = c__19__auto___2107);

return statearr_2106;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21__auto__);
});})(c__19__auto___2107,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__9839__auto__ = (((p == null))?null:p);
var m__9840__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__9839__auto__)]);
if((!((m__9840__auto__ == null)))){
return m__9840__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__9837__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__9837__auto__ == null)))){
return m__9837__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__9839__auto__ = (((p == null))?null:p);
var m__9840__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__9839__auto__)]);
if((!((m__9840__auto__ == null)))){
return m__9840__auto__.call(null,p,v,ch);
} else {
var m__9837__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__9837__auto__ == null)))){
return m__9837__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__2158 = arguments.length;
switch (G__2158) {
case (1):
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__9839__auto__ = (((p == null))?null:p);
var m__9840__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__9839__auto__)]);
if((!((m__9840__auto__ == null)))){
return m__9840__auto__.call(null,p);
} else {
var m__9837__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__9837__auto__ == null)))){
return m__9837__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__9839__auto__ = (((p == null))?null:p);
var m__9840__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__9839__auto__)]);
if((!((m__9840__auto__ == null)))){
return m__9840__auto__.call(null,p,v);
} else {
var m__9837__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__9837__auto__ == null)))){
return m__9837__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = (2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__2161 = arguments.length;
switch (G__2161) {
case (2):
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__9218__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__9218__auto__)){
return or__9218__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__9218__auto__,mults){
return (function (p1__26_SHARP_){
if(cljs.core.truth_(p1__26_SHARP_.call(null,topic))){
return p1__26_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__26_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__9218__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async2162 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.async.Pub}
*/
cljs.core.async.t_cljs$core$async2162 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta2163){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta2163 = meta2163;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async2162.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_2164,meta2163__$1){
var self__ = this;
var _2164__$1 = this;
return (new cljs.core.async.t_cljs$core$async2162(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta2163__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async2162.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_2164){
var self__ = this;
var _2164__$1 = this;
return self__.meta2163;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async2162.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async2162.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async2162.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async2162.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async2162.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__9015__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__9015__auto__)){
var m = temp__9015__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async2162.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async2162.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async2162.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",(1085813622),null),new cljs.core.Symbol(null,"topic-fn","topic-fn",(-862449736),null),new cljs.core.Symbol(null,"buf-fn","buf-fn",(-1200281591),null),new cljs.core.Symbol(null,"mults","mults",(-461114485),null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",(1796584816),null),new cljs.core.Symbol(null,"meta2163","meta2163",(-753429260),null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async2162.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async2162.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async2162";

cljs.core.async.t_cljs$core$async2162.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__9776__auto__,writer__9777__auto__,opt__9778__auto__){
return cljs.core._write.call(null,writer__9777__auto__,"cljs.core.async/t_cljs$core$async2162");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async2162.
 */
cljs.core.async.__GT_t_cljs$core$async2162 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async2162(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta2163){
return (new cljs.core.async.t_cljs$core$async2162(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta2163));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async2162(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19__auto___2283 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19__auto___2283,mults,ensure_mult,p){
return (function (){
var f__20__auto__ = (function (){var switch__14__auto__ = ((function (c__19__auto___2283,mults,ensure_mult,p){
return (function (state_2236){
var state_val_2237 = (state_2236[(1)]);
if((state_val_2237 === (1))){
var state_2236__$1 = state_2236;
var statearr_2238_2284 = state_2236__$1;
(statearr_2238_2284[(2)] = null);

(statearr_2238_2284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2237 === (2))){
var state_2236__$1 = state_2236;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2236__$1,(4),ch);
} else {
if((state_val_2237 === (3))){
var inst_2234 = (state_2236[(2)]);
var state_2236__$1 = state_2236;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2236__$1,inst_2234);
} else {
if((state_val_2237 === (4))){
var inst_2167 = (state_2236[(7)]);
var inst_2167__$1 = (state_2236[(2)]);
var inst_2168 = (inst_2167__$1 == null);
var state_2236__$1 = (function (){var statearr_2239 = state_2236;
(statearr_2239[(7)] = inst_2167__$1);

return statearr_2239;
})();
if(cljs.core.truth_(inst_2168)){
var statearr_2240_2285 = state_2236__$1;
(statearr_2240_2285[(1)] = (5));

} else {
var statearr_2241_2286 = state_2236__$1;
(statearr_2241_2286[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2237 === (5))){
var inst_2174 = cljs.core.deref.call(null,mults);
var inst_2175 = cljs.core.vals.call(null,inst_2174);
var inst_2176 = cljs.core.seq.call(null,inst_2175);
var inst_2177 = inst_2176;
var inst_2178 = null;
var inst_2179 = (0);
var inst_2180 = (0);
var state_2236__$1 = (function (){var statearr_2242 = state_2236;
(statearr_2242[(8)] = inst_2177);

(statearr_2242[(11)] = inst_2178);

(statearr_2242[(12)] = inst_2179);

(statearr_2242[(13)] = inst_2180);

return statearr_2242;
})();
var statearr_2243_2287 = state_2236__$1;
(statearr_2243_2287[(2)] = null);

(statearr_2243_2287[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2237 === (6))){
var inst_2167 = (state_2236[(7)]);
var inst_2215 = (state_2236[(9)]);
var inst_2217 = (state_2236[(10)]);
var inst_2215__$1 = topic_fn.call(null,inst_2167);
var inst_2216 = cljs.core.deref.call(null,mults);
var inst_2217__$1 = cljs.core.get.call(null,inst_2216,inst_2215__$1);
var state_2236__$1 = (function (){var statearr_2244 = state_2236;
(statearr_2244[(9)] = inst_2215__$1);

(statearr_2244[(10)] = inst_2217__$1);

return statearr_2244;
})();
if(cljs.core.truth_(inst_2217__$1)){
var statearr_2245_2288 = state_2236__$1;
(statearr_2245_2288[(1)] = (19));

} else {
var statearr_2246_2289 = state_2236__$1;
(statearr_2246_2289[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2237 === (7))){
var inst_2232 = (state_2236[(2)]);
var state_2236__$1 = state_2236;
var statearr_2247_2290 = state_2236__$1;
(statearr_2247_2290[(2)] = inst_2232);

(statearr_2247_2290[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2237 === (8))){
var inst_2180 = (state_2236[(13)]);
var inst_2179 = (state_2236[(12)]);
var inst_2182 = (inst_2180 < inst_2179);
var inst_2183 = inst_2182;
var state_2236__$1 = state_2236;
if(cljs.core.truth_(inst_2183)){
var statearr_2251_2291 = state_2236__$1;
(statearr_2251_2291[(1)] = (10));

} else {
var statearr_2252_2292 = state_2236__$1;
(statearr_2252_2292[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2237 === (9))){
var inst_2213 = (state_2236[(2)]);
var state_2236__$1 = state_2236;
var statearr_2253_2293 = state_2236__$1;
(statearr_2253_2293[(2)] = inst_2213);

(statearr_2253_2293[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2237 === (10))){
var inst_2178 = (state_2236[(11)]);
var inst_2180 = (state_2236[(13)]);
var inst_2177 = (state_2236[(8)]);
var inst_2179 = (state_2236[(12)]);
var inst_2185 = cljs.core._nth.call(null,inst_2178,inst_2180);
var inst_2186 = cljs.core.async.muxch_STAR_.call(null,inst_2185);
var inst_2187 = cljs.core.async.close_BANG_.call(null,inst_2186);
var inst_2188 = (inst_2180 + (1));
var tmp2248 = inst_2177;
var tmp2249 = inst_2178;
var tmp2250 = inst_2179;
var inst_2177__$1 = tmp2248;
var inst_2178__$1 = tmp2249;
var inst_2179__$1 = tmp2250;
var inst_2180__$1 = inst_2188;
var state_2236__$1 = (function (){var statearr_2254 = state_2236;
(statearr_2254[(14)] = inst_2187);

(statearr_2254[(8)] = inst_2177__$1);

(statearr_2254[(11)] = inst_2178__$1);

(statearr_2254[(12)] = inst_2179__$1);

(statearr_2254[(13)] = inst_2180__$1);

return statearr_2254;
})();
var statearr_2255_2294 = state_2236__$1;
(statearr_2255_2294[(2)] = null);

(statearr_2255_2294[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2237 === (11))){
var inst_2177 = (state_2236[(8)]);
var inst_2191 = (state_2236[(15)]);
var inst_2191__$1 = cljs.core.seq.call(null,inst_2177);
var state_2236__$1 = (function (){var statearr_2256 = state_2236;
(statearr_2256[(15)] = inst_2191__$1);

return statearr_2256;
})();
if(inst_2191__$1){
var statearr_2257_2295 = state_2236__$1;
(statearr_2257_2295[(1)] = (13));

} else {
var statearr_2258_2296 = state_2236__$1;
(statearr_2258_2296[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2237 === (12))){
var inst_2211 = (state_2236[(2)]);
var state_2236__$1 = state_2236;
var statearr_2259_2297 = state_2236__$1;
(statearr_2259_2297[(2)] = inst_2211);

(statearr_2259_2297[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2237 === (13))){
var inst_2191 = (state_2236[(15)]);
var inst_2193 = cljs.core.chunked_seq_QMARK_.call(null,inst_2191);
var state_2236__$1 = state_2236;
if(inst_2193){
var statearr_2260_2298 = state_2236__$1;
(statearr_2260_2298[(1)] = (16));

} else {
var statearr_2261_2299 = state_2236__$1;
(statearr_2261_2299[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2237 === (14))){
var state_2236__$1 = state_2236;
var statearr_2262_2300 = state_2236__$1;
(statearr_2262_2300[(2)] = null);

(statearr_2262_2300[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2237 === (15))){
var inst_2209 = (state_2236[(2)]);
var state_2236__$1 = state_2236;
var statearr_2263_2301 = state_2236__$1;
(statearr_2263_2301[(2)] = inst_2209);

(statearr_2263_2301[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2237 === (16))){
var inst_2191 = (state_2236[(15)]);
var inst_2195 = cljs.core.chunk_first.call(null,inst_2191);
var inst_2196 = cljs.core.chunk_rest.call(null,inst_2191);
var inst_2197 = cljs.core.count.call(null,inst_2195);
var inst_2177 = inst_2196;
var inst_2178 = inst_2195;
var inst_2179 = inst_2197;
var inst_2180 = (0);
var state_2236__$1 = (function (){var statearr_2264 = state_2236;
(statearr_2264[(8)] = inst_2177);

(statearr_2264[(11)] = inst_2178);

(statearr_2264[(12)] = inst_2179);

(statearr_2264[(13)] = inst_2180);

return statearr_2264;
})();
var statearr_2265_2302 = state_2236__$1;
(statearr_2265_2302[(2)] = null);

(statearr_2265_2302[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2237 === (17))){
var inst_2191 = (state_2236[(15)]);
var inst_2200 = cljs.core.first.call(null,inst_2191);
var inst_2201 = cljs.core.async.muxch_STAR_.call(null,inst_2200);
var inst_2202 = cljs.core.async.close_BANG_.call(null,inst_2201);
var inst_2203 = cljs.core.next.call(null,inst_2191);
var inst_2177 = inst_2203;
var inst_2178 = null;
var inst_2179 = (0);
var inst_2180 = (0);
var state_2236__$1 = (function (){var statearr_2266 = state_2236;
(statearr_2266[(16)] = inst_2202);

(statearr_2266[(8)] = inst_2177);

(statearr_2266[(11)] = inst_2178);

(statearr_2266[(12)] = inst_2179);

(statearr_2266[(13)] = inst_2180);

return statearr_2266;
})();
var statearr_2267_2303 = state_2236__$1;
(statearr_2267_2303[(2)] = null);

(statearr_2267_2303[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2237 === (18))){
var inst_2206 = (state_2236[(2)]);
var state_2236__$1 = state_2236;
var statearr_2268_2304 = state_2236__$1;
(statearr_2268_2304[(2)] = inst_2206);

(statearr_2268_2304[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2237 === (19))){
var inst_2217 = (state_2236[(10)]);
var inst_2167 = (state_2236[(7)]);
var inst_2219 = cljs.core.async.muxch_STAR_.call(null,inst_2217);
var state_2236__$1 = state_2236;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_2236__$1,(22),inst_2219,inst_2167);
} else {
if((state_val_2237 === (20))){
var state_2236__$1 = state_2236;
var statearr_2269_2305 = state_2236__$1;
(statearr_2269_2305[(2)] = null);

(statearr_2269_2305[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2237 === (21))){
var inst_2229 = (state_2236[(2)]);
var state_2236__$1 = (function (){var statearr_2270 = state_2236;
(statearr_2270[(17)] = inst_2229);

return statearr_2270;
})();
var statearr_2271_2306 = state_2236__$1;
(statearr_2271_2306[(2)] = null);

(statearr_2271_2306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2237 === (22))){
var inst_2221 = (state_2236[(2)]);
var state_2236__$1 = state_2236;
if(cljs.core.truth_(inst_2221)){
var statearr_2272_2307 = state_2236__$1;
(statearr_2272_2307[(1)] = (23));

} else {
var statearr_2273_2308 = state_2236__$1;
(statearr_2273_2308[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2237 === (23))){
var state_2236__$1 = state_2236;
var statearr_2274_2309 = state_2236__$1;
(statearr_2274_2309[(2)] = null);

(statearr_2274_2309[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2237 === (24))){
var inst_2215 = (state_2236[(9)]);
var inst_2224 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_2215);
var state_2236__$1 = state_2236;
var statearr_2275_2310 = state_2236__$1;
(statearr_2275_2310[(2)] = inst_2224);

(statearr_2275_2310[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2237 === (25))){
var inst_2226 = (state_2236[(2)]);
var state_2236__$1 = state_2236;
var statearr_2276_2311 = state_2236__$1;
(statearr_2276_2311[(2)] = inst_2226);

(statearr_2276_2311[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
return null;
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
});})(c__19__auto___2283,mults,ensure_mult,p))
;
return ((function (switch__14__auto__,c__19__auto___2283,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__15__auto__ = null;
var cljs$core$async$state_machine__15__auto____0 = (function (){
var statearr_2277 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_2277[(0)] = cljs$core$async$state_machine__15__auto__);

(statearr_2277[(1)] = (1));

return statearr_2277;
});
var cljs$core$async$state_machine__15__auto____1 = (function (state_2236){
while(true){
var ret_value__16__auto__ = (function (){try{while(true){
var result__17__auto__ = switch__14__auto__.call(null,state_2236);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__17__auto__;
}
break;
}
}catch (e2278){var ex__18__auto__ = e2278;
var statearr_2279_2312 = state_2236;
(statearr_2279_2312[(2)] = ex__18__auto__);


if(cljs.core.seq.call(null,(state_2236[(4)]))){
var statearr_2280_2313 = state_2236;
(statearr_2280_2313[(1)] = cljs.core.first.call(null,(state_2236[(4)])));

} else {
throw ex__18__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__2314 = state_2236;
state_2236 = G__2314;
continue;
} else {
return ret_value__16__auto__;
}
break;
}
});
cljs$core$async$state_machine__15__auto__ = function(state_2236){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15__auto____1.call(this,state_2236);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15__auto____0;
cljs$core$async$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15__auto____1;
return cljs$core$async$state_machine__15__auto__;
})()
;})(switch__14__auto__,c__19__auto___2283,mults,ensure_mult,p))
})();
var state__21__auto__ = (function (){var statearr_2281 = f__20__auto__.call(null);
(statearr_2281[(6)] = c__19__auto___2283);

return statearr_2281;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21__auto__);
});})(c__19__auto___2283,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = (3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__2316 = arguments.length;
switch (G__2316) {
case (3):
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case (4):
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = (4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__2319 = arguments.length;
switch (G__2319) {
case (1):
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = (2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__2322 = arguments.length;
switch (G__2322) {
case (2):
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__19__auto___2400 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19__auto___2400,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__20__auto__ = (function (){var switch__14__auto__ = ((function (c__19__auto___2400,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_2365){
var state_val_2366 = (state_2365[(1)]);
if((state_val_2366 === (1))){
var state_2365__$1 = state_2365;
var statearr_2367_2401 = state_2365__$1;
(statearr_2367_2401[(2)] = null);

(statearr_2367_2401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2366 === (2))){
var inst_2324 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_2325 = cnt;
var inst_2326 = (0);
var state_2365__$1 = (function (){var statearr_2368 = state_2365;
(statearr_2368[(7)] = inst_2324);

(statearr_2368[(9)] = inst_2325);

(statearr_2368[(8)] = inst_2326);

return statearr_2368;
})();
var statearr_2369_2402 = state_2365__$1;
(statearr_2369_2402[(2)] = null);

(statearr_2369_2402[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2366 === (3))){
var inst_2363 = (state_2365[(2)]);
var state_2365__$1 = state_2365;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2365__$1,inst_2363);
} else {
if((state_val_2366 === (4))){
var inst_2326 = (state_2365[(8)]);
var inst_2325 = (state_2365[(9)]);
var inst_2328 = (inst_2326 < inst_2325);
var state_2365__$1 = state_2365;
if(cljs.core.truth_(inst_2328)){
var statearr_2370_2403 = state_2365__$1;
(statearr_2370_2403[(1)] = (6));

} else {
var statearr_2371_2404 = state_2365__$1;
(statearr_2371_2404[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2366 === (5))){
var inst_2349 = (state_2365[(2)]);
var state_2365__$1 = (function (){var statearr_2372 = state_2365;
(statearr_2372[(10)] = inst_2349);

return statearr_2372;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2365__$1,(13),dchan);
} else {
if((state_val_2366 === (6))){
var state_2365__$1 = state_2365;
var statearr_2373_2405 = state_2365__$1;
(statearr_2373_2405[(2)] = null);

(statearr_2373_2405[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2366 === (7))){
var state_2365__$1 = state_2365;
var statearr_2374_2406 = state_2365__$1;
(statearr_2374_2406[(2)] = null);

(statearr_2374_2406[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2366 === (8))){
var inst_2347 = (state_2365[(2)]);
var state_2365__$1 = state_2365;
var statearr_2375_2407 = state_2365__$1;
(statearr_2375_2407[(2)] = inst_2347);

(statearr_2375_2407[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2366 === (9))){
var inst_2326 = (state_2365[(8)]);
var _ = (function (){var statearr_2376 = state_2365;
(statearr_2376[(4)] = cljs.core.cons.call(null,(12),(state_2365[(4)])));

return statearr_2376;
})();
var inst_2337 = chs__$1.call(null,inst_2326);
var inst_2338 = done.call(null,inst_2326);
var inst_2339 = cljs.core.async.take_BANG_.call(null,inst_2337,inst_2338);
var ___$1 = (function (){var statearr_2377 = state_2365;
(statearr_2377[(4)] = cljs.core.rest.call(null,(state_2365[(4)])));

return statearr_2377;
})();
var state_2365__$1 = state_2365;
var statearr_2378_2408 = state_2365__$1;
(statearr_2378_2408[(2)] = inst_2339);

(statearr_2378_2408[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2366 === (10))){
var inst_2326 = (state_2365[(8)]);
var inst_2342 = (state_2365[(2)]);
var inst_2343 = (inst_2326 + (1));
var inst_2326__$1 = inst_2343;
var state_2365__$1 = (function (){var statearr_2380 = state_2365;
(statearr_2380[(11)] = inst_2342);

(statearr_2380[(8)] = inst_2326__$1);

return statearr_2380;
})();
var statearr_2381_2409 = state_2365__$1;
(statearr_2381_2409[(2)] = null);

(statearr_2381_2409[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2366 === (11))){
var inst_2330 = (state_2365[(2)]);
var inst_2331 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_2365__$1 = (function (){var statearr_2382 = state_2365;
(statearr_2382[(12)] = inst_2330);

return statearr_2382;
})();
var statearr_2383_2410 = state_2365__$1;
(statearr_2383_2410[(2)] = inst_2331);

(statearr_2383_2410[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2366 === (12))){
var _ = (function (){var statearr_2384 = state_2365;
(statearr_2384[(4)] = cljs.core.rest.call(null,(state_2365[(4)])));

return statearr_2384;
})();
var state_2365__$1 = state_2365;
var ex2379 = (state_2365__$1[(2)]);
var statearr_2385_2411 = state_2365__$1;
(statearr_2385_2411[(5)] = ex2379);


if((ex2379 instanceof Object)){
var statearr_2386_2412 = state_2365__$1;
(statearr_2386_2412[(1)] = (11));

(statearr_2386_2412[(5)] = null);

} else {
throw ex2379;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2366 === (13))){
var inst_2351 = (state_2365[(13)]);
var inst_2351__$1 = (state_2365[(2)]);
var inst_2352 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_2351__$1);
var state_2365__$1 = (function (){var statearr_2387 = state_2365;
(statearr_2387[(13)] = inst_2351__$1);

return statearr_2387;
})();
if(cljs.core.truth_(inst_2352)){
var statearr_2388_2413 = state_2365__$1;
(statearr_2388_2413[(1)] = (14));

} else {
var statearr_2389_2414 = state_2365__$1;
(statearr_2389_2414[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2366 === (14))){
var inst_2354 = cljs.core.async.close_BANG_.call(null,out);
var state_2365__$1 = state_2365;
var statearr_2390_2415 = state_2365__$1;
(statearr_2390_2415[(2)] = inst_2354);

(statearr_2390_2415[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2366 === (15))){
var inst_2351 = (state_2365[(13)]);
var inst_2356 = cljs.core.apply.call(null,f,inst_2351);
var state_2365__$1 = state_2365;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_2365__$1,(17),out,inst_2356);
} else {
if((state_val_2366 === (16))){
var inst_2361 = (state_2365[(2)]);
var state_2365__$1 = state_2365;
var statearr_2391_2416 = state_2365__$1;
(statearr_2391_2416[(2)] = inst_2361);

(statearr_2391_2416[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2366 === (17))){
var inst_2358 = (state_2365[(2)]);
var state_2365__$1 = (function (){var statearr_2392 = state_2365;
(statearr_2392[(14)] = inst_2358);

return statearr_2392;
})();
var statearr_2393_2417 = state_2365__$1;
(statearr_2393_2417[(2)] = null);

(statearr_2393_2417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
return null;
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
}
}
});})(c__19__auto___2400,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__14__auto__,c__19__auto___2400,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__15__auto__ = null;
var cljs$core$async$state_machine__15__auto____0 = (function (){
var statearr_2394 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_2394[(0)] = cljs$core$async$state_machine__15__auto__);

(statearr_2394[(1)] = (1));

return statearr_2394;
});
var cljs$core$async$state_machine__15__auto____1 = (function (state_2365){
while(true){
var ret_value__16__auto__ = (function (){try{while(true){
var result__17__auto__ = switch__14__auto__.call(null,state_2365);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__17__auto__;
}
break;
}
}catch (e2395){var ex__18__auto__ = e2395;
var statearr_2396_2418 = state_2365;
(statearr_2396_2418[(2)] = ex__18__auto__);


if(cljs.core.seq.call(null,(state_2365[(4)]))){
var statearr_2397_2419 = state_2365;
(statearr_2397_2419[(1)] = cljs.core.first.call(null,(state_2365[(4)])));

} else {
throw ex__18__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__2420 = state_2365;
state_2365 = G__2420;
continue;
} else {
return ret_value__16__auto__;
}
break;
}
});
cljs$core$async$state_machine__15__auto__ = function(state_2365){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15__auto____1.call(this,state_2365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15__auto____0;
cljs$core$async$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15__auto____1;
return cljs$core$async$state_machine__15__auto__;
})()
;})(switch__14__auto__,c__19__auto___2400,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__21__auto__ = (function (){var statearr_2398 = f__20__auto__.call(null);
(statearr_2398[(6)] = c__19__auto___2400);

return statearr_2398;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21__auto__);
});})(c__19__auto___2400,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = (3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__2422 = arguments.length;
switch (G__2422) {
case (1):
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19__auto___2477 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19__auto___2477,out){
return (function (){
var f__20__auto__ = (function (){var switch__14__auto__ = ((function (c__19__auto___2477,out){
return (function (state_2454){
var state_val_2455 = (state_2454[(1)]);
if((state_val_2455 === (1))){
var inst_2423 = cljs.core.vec.call(null,chs);
var inst_2424 = inst_2423;
var state_2454__$1 = (function (){var statearr_2456 = state_2454;
(statearr_2456[(7)] = inst_2424);

return statearr_2456;
})();
var statearr_2457_2478 = state_2454__$1;
(statearr_2457_2478[(2)] = null);

(statearr_2457_2478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2455 === (2))){
var inst_2424 = (state_2454[(7)]);
var inst_2426 = cljs.core.count.call(null,inst_2424);
var inst_2427 = (inst_2426 > (0));
var state_2454__$1 = state_2454;
if(cljs.core.truth_(inst_2427)){
var statearr_2458_2479 = state_2454__$1;
(statearr_2458_2479[(1)] = (4));

} else {
var statearr_2459_2480 = state_2454__$1;
(statearr_2459_2480[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2455 === (3))){
var inst_2452 = (state_2454[(2)]);
var state_2454__$1 = state_2454;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2454__$1,inst_2452);
} else {
if((state_val_2455 === (4))){
var inst_2424 = (state_2454[(7)]);
var state_2454__$1 = state_2454;
return cljs.core.async.ioc_alts_BANG_.call(null,state_2454__$1,(7),inst_2424);
} else {
if((state_val_2455 === (5))){
var inst_2448 = cljs.core.async.close_BANG_.call(null,out);
var state_2454__$1 = state_2454;
var statearr_2460_2481 = state_2454__$1;
(statearr_2460_2481[(2)] = inst_2448);

(statearr_2460_2481[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2455 === (6))){
var inst_2450 = (state_2454[(2)]);
var state_2454__$1 = state_2454;
var statearr_2461_2482 = state_2454__$1;
(statearr_2461_2482[(2)] = inst_2450);

(statearr_2461_2482[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2455 === (7))){
var inst_2433 = (state_2454[(8)]);
var inst_2434 = (state_2454[(9)]);
var inst_2433__$1 = (state_2454[(2)]);
var inst_2434__$1 = cljs.core.nth.call(null,inst_2433__$1,(0),null);
var inst_2435 = cljs.core.nth.call(null,inst_2433__$1,(1),null);
var inst_2436 = (inst_2434__$1 == null);
var state_2454__$1 = (function (){var statearr_2462 = state_2454;
(statearr_2462[(8)] = inst_2433__$1);

(statearr_2462[(9)] = inst_2434__$1);

(statearr_2462[(10)] = inst_2435);

return statearr_2462;
})();
if(cljs.core.truth_(inst_2436)){
var statearr_2463_2483 = state_2454__$1;
(statearr_2463_2483[(1)] = (8));

} else {
var statearr_2464_2484 = state_2454__$1;
(statearr_2464_2484[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2455 === (8))){
var inst_2424 = (state_2454[(7)]);
var inst_2433 = (state_2454[(8)]);
var inst_2434 = (state_2454[(9)]);
var inst_2435 = (state_2454[(10)]);
var inst_2438 = (function (){var cs = inst_2424;
var vec__2429 = inst_2433;
var v = inst_2434;
var c = inst_2435;
return ((function (cs,vec__2429,v,c,inst_2424,inst_2433,inst_2434,inst_2435,state_val_2455,c__19__auto___2477,out){
return (function (p1__27_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__27_SHARP_);
});
;})(cs,vec__2429,v,c,inst_2424,inst_2433,inst_2434,inst_2435,state_val_2455,c__19__auto___2477,out))
})();
var inst_2439 = cljs.core.filterv.call(null,inst_2438,inst_2424);
var inst_2424__$1 = inst_2439;
var state_2454__$1 = (function (){var statearr_2465 = state_2454;
(statearr_2465[(7)] = inst_2424__$1);

return statearr_2465;
})();
var statearr_2466_2485 = state_2454__$1;
(statearr_2466_2485[(2)] = null);

(statearr_2466_2485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2455 === (9))){
var inst_2434 = (state_2454[(9)]);
var state_2454__$1 = state_2454;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_2454__$1,(11),out,inst_2434);
} else {
if((state_val_2455 === (10))){
var inst_2446 = (state_2454[(2)]);
var state_2454__$1 = state_2454;
var statearr_2468_2486 = state_2454__$1;
(statearr_2468_2486[(2)] = inst_2446);

(statearr_2468_2486[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2455 === (11))){
var inst_2424 = (state_2454[(7)]);
var inst_2443 = (state_2454[(2)]);
var tmp2467 = inst_2424;
var inst_2424__$1 = tmp2467;
var state_2454__$1 = (function (){var statearr_2469 = state_2454;
(statearr_2469[(11)] = inst_2443);

(statearr_2469[(7)] = inst_2424__$1);

return statearr_2469;
})();
var statearr_2470_2487 = state_2454__$1;
(statearr_2470_2487[(2)] = null);

(statearr_2470_2487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
return null;
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
});})(c__19__auto___2477,out))
;
return ((function (switch__14__auto__,c__19__auto___2477,out){
return (function() {
var cljs$core$async$state_machine__15__auto__ = null;
var cljs$core$async$state_machine__15__auto____0 = (function (){
var statearr_2471 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_2471[(0)] = cljs$core$async$state_machine__15__auto__);

(statearr_2471[(1)] = (1));

return statearr_2471;
});
var cljs$core$async$state_machine__15__auto____1 = (function (state_2454){
while(true){
var ret_value__16__auto__ = (function (){try{while(true){
var result__17__auto__ = switch__14__auto__.call(null,state_2454);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__17__auto__;
}
break;
}
}catch (e2472){var ex__18__auto__ = e2472;
var statearr_2473_2488 = state_2454;
(statearr_2473_2488[(2)] = ex__18__auto__);


if(cljs.core.seq.call(null,(state_2454[(4)]))){
var statearr_2474_2489 = state_2454;
(statearr_2474_2489[(1)] = cljs.core.first.call(null,(state_2454[(4)])));

} else {
throw ex__18__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__2490 = state_2454;
state_2454 = G__2490;
continue;
} else {
return ret_value__16__auto__;
}
break;
}
});
cljs$core$async$state_machine__15__auto__ = function(state_2454){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15__auto____1.call(this,state_2454);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15__auto____0;
cljs$core$async$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15__auto____1;
return cljs$core$async$state_machine__15__auto__;
})()
;})(switch__14__auto__,c__19__auto___2477,out))
})();
var state__21__auto__ = (function (){var statearr_2475 = f__20__auto__.call(null);
(statearr_2475[(6)] = c__19__auto___2477);

return statearr_2475;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21__auto__);
});})(c__19__auto___2477,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = (2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__2492 = arguments.length;
switch (G__2492) {
case (2):
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19__auto___2538 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19__auto___2538,out){
return (function (){
var f__20__auto__ = (function (){var switch__14__auto__ = ((function (c__19__auto___2538,out){
return (function (state_2516){
var state_val_2517 = (state_2516[(1)]);
if((state_val_2517 === (1))){
var inst_2493 = (0);
var state_2516__$1 = (function (){var statearr_2518 = state_2516;
(statearr_2518[(7)] = inst_2493);

return statearr_2518;
})();
var statearr_2519_2539 = state_2516__$1;
(statearr_2519_2539[(2)] = null);

(statearr_2519_2539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2517 === (2))){
var inst_2493 = (state_2516[(7)]);
var inst_2495 = (inst_2493 < n);
var state_2516__$1 = state_2516;
if(cljs.core.truth_(inst_2495)){
var statearr_2520_2540 = state_2516__$1;
(statearr_2520_2540[(1)] = (4));

} else {
var statearr_2521_2541 = state_2516__$1;
(statearr_2521_2541[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2517 === (3))){
var inst_2513 = (state_2516[(2)]);
var inst_2514 = cljs.core.async.close_BANG_.call(null,out);
var state_2516__$1 = (function (){var statearr_2522 = state_2516;
(statearr_2522[(8)] = inst_2513);

return statearr_2522;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2516__$1,inst_2514);
} else {
if((state_val_2517 === (4))){
var state_2516__$1 = state_2516;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2516__$1,(7),ch);
} else {
if((state_val_2517 === (5))){
var state_2516__$1 = state_2516;
var statearr_2523_2542 = state_2516__$1;
(statearr_2523_2542[(2)] = null);

(statearr_2523_2542[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2517 === (6))){
var inst_2511 = (state_2516[(2)]);
var state_2516__$1 = state_2516;
var statearr_2524_2543 = state_2516__$1;
(statearr_2524_2543[(2)] = inst_2511);

(statearr_2524_2543[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2517 === (7))){
var inst_2498 = (state_2516[(9)]);
var inst_2498__$1 = (state_2516[(2)]);
var inst_2499 = (inst_2498__$1 == null);
var inst_2500 = cljs.core.not.call(null,inst_2499);
var state_2516__$1 = (function (){var statearr_2525 = state_2516;
(statearr_2525[(9)] = inst_2498__$1);

return statearr_2525;
})();
if(inst_2500){
var statearr_2526_2544 = state_2516__$1;
(statearr_2526_2544[(1)] = (8));

} else {
var statearr_2527_2545 = state_2516__$1;
(statearr_2527_2545[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2517 === (8))){
var inst_2498 = (state_2516[(9)]);
var state_2516__$1 = state_2516;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_2516__$1,(11),out,inst_2498);
} else {
if((state_val_2517 === (9))){
var state_2516__$1 = state_2516;
var statearr_2528_2546 = state_2516__$1;
(statearr_2528_2546[(2)] = null);

(statearr_2528_2546[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2517 === (10))){
var inst_2508 = (state_2516[(2)]);
var state_2516__$1 = state_2516;
var statearr_2529_2547 = state_2516__$1;
(statearr_2529_2547[(2)] = inst_2508);

(statearr_2529_2547[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2517 === (11))){
var inst_2493 = (state_2516[(7)]);
var inst_2503 = (state_2516[(2)]);
var inst_2504 = (inst_2493 + (1));
var inst_2493__$1 = inst_2504;
var state_2516__$1 = (function (){var statearr_2530 = state_2516;
(statearr_2530[(10)] = inst_2503);

(statearr_2530[(7)] = inst_2493__$1);

return statearr_2530;
})();
var statearr_2531_2548 = state_2516__$1;
(statearr_2531_2548[(2)] = null);

(statearr_2531_2548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
return null;
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
});})(c__19__auto___2538,out))
;
return ((function (switch__14__auto__,c__19__auto___2538,out){
return (function() {
var cljs$core$async$state_machine__15__auto__ = null;
var cljs$core$async$state_machine__15__auto____0 = (function (){
var statearr_2532 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_2532[(0)] = cljs$core$async$state_machine__15__auto__);

(statearr_2532[(1)] = (1));

return statearr_2532;
});
var cljs$core$async$state_machine__15__auto____1 = (function (state_2516){
while(true){
var ret_value__16__auto__ = (function (){try{while(true){
var result__17__auto__ = switch__14__auto__.call(null,state_2516);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__17__auto__;
}
break;
}
}catch (e2533){var ex__18__auto__ = e2533;
var statearr_2534_2549 = state_2516;
(statearr_2534_2549[(2)] = ex__18__auto__);


if(cljs.core.seq.call(null,(state_2516[(4)]))){
var statearr_2535_2550 = state_2516;
(statearr_2535_2550[(1)] = cljs.core.first.call(null,(state_2516[(4)])));

} else {
throw ex__18__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__2551 = state_2516;
state_2516 = G__2551;
continue;
} else {
return ret_value__16__auto__;
}
break;
}
});
cljs$core$async$state_machine__15__auto__ = function(state_2516){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15__auto____1.call(this,state_2516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15__auto____0;
cljs$core$async$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15__auto____1;
return cljs$core$async$state_machine__15__auto__;
})()
;})(switch__14__auto__,c__19__auto___2538,out))
})();
var state__21__auto__ = (function (){var statearr_2536 = f__20__auto__.call(null);
(statearr_2536[(6)] = c__19__auto___2538);

return statearr_2536;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21__auto__);
});})(c__19__auto___2538,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = (3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async2552 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.async.impl.protocols.WritePort}
*/
cljs.core.async.t_cljs$core$async2552 = (function (f,ch,meta2553){
this.f = f;
this.ch = ch;
this.meta2553 = meta2553;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async2552.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_2554,meta2553__$1){
var self__ = this;
var _2554__$1 = this;
return (new cljs.core.async.t_cljs$core$async2552(self__.f,self__.ch,meta2553__$1));
});

cljs.core.async.t_cljs$core$async2552.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_2554){
var self__ = this;
var _2554__$1 = this;
return self__.meta2553;
});

cljs.core.async.t_cljs$core$async2552.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async2552.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async2552.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async2552.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async2552.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async2555 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.impl.protocols.Handler}
*/
cljs.core.async.t_cljs$core$async2555 = (function (f,ch,meta2553,_,fn1,meta2556){
this.f = f;
this.ch = ch;
this.meta2553 = meta2553;
this._ = _;
this.fn1 = fn1;
this.meta2556 = meta2556;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async2555.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_2557,meta2556__$1){
var self__ = this;
var _2557__$1 = this;
return (new cljs.core.async.t_cljs$core$async2555(self__.f,self__.ch,self__.meta2553,self__._,self__.fn1,meta2556__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async2555.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_2557){
var self__ = this;
var _2557__$1 = this;
return self__.meta2556;
});})(___$1))
;

cljs.core.async.t_cljs$core$async2555.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async2555.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async2555.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async2555.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__28_SHARP_){
return f1.call(null,(((p1__28_SHARP_ == null))?null:self__.f.call(null,p1__28_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async2555.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null),new cljs.core.Symbol(null,"meta2553","meta2553",(178967798),null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",(-1201019570),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async2552","cljs.core.async/t_cljs$core$async2552",(-2139367558),null)], null)),new cljs.core.Symbol(null,"fn1","fn1",(895834444),null),new cljs.core.Symbol(null,"meta2556","meta2556",(1518021139),null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async2555.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async2555.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async2555";

cljs.core.async.t_cljs$core$async2555.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__9776__auto__,writer__9777__auto__,opt__9778__auto__){
return cljs.core._write.call(null,writer__9777__auto__,"cljs.core.async/t_cljs$core$async2555");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async2555.
 */
cljs.core.async.__GT_t_cljs$core$async2555 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async2555(f__$1,ch__$1,meta2553__$1,___$2,fn1__$1,meta2556){
return (new cljs.core.async.t_cljs$core$async2555(f__$1,ch__$1,meta2553__$1,___$2,fn1__$1,meta2556));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async2555(self__.f,self__.ch,self__.meta2553,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__9199__auto__ = ret;
if(cljs.core.truth_(and__9199__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__9199__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async2552.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async2552.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async2552.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null),new cljs.core.Symbol(null,"meta2553","meta2553",(178967798),null)], null);
});

cljs.core.async.t_cljs$core$async2552.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async2552.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async2552";

cljs.core.async.t_cljs$core$async2552.cljs$lang$ctorPrWriter = (function (this__9776__auto__,writer__9777__auto__,opt__9778__auto__){
return cljs.core._write.call(null,writer__9777__auto__,"cljs.core.async/t_cljs$core$async2552");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async2552.
 */
cljs.core.async.__GT_t_cljs$core$async2552 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async2552(f__$1,ch__$1,meta2553){
return (new cljs.core.async.t_cljs$core$async2552(f__$1,ch__$1,meta2553));
});

}

return (new cljs.core.async.t_cljs$core$async2552(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async2558 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.async.impl.protocols.WritePort}
*/
cljs.core.async.t_cljs$core$async2558 = (function (f,ch,meta2559){
this.f = f;
this.ch = ch;
this.meta2559 = meta2559;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async2558.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_2560,meta2559__$1){
var self__ = this;
var _2560__$1 = this;
return (new cljs.core.async.t_cljs$core$async2558(self__.f,self__.ch,meta2559__$1));
});

cljs.core.async.t_cljs$core$async2558.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_2560){
var self__ = this;
var _2560__$1 = this;
return self__.meta2559;
});

cljs.core.async.t_cljs$core$async2558.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async2558.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async2558.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async2558.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async2558.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async2558.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async2558.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null),new cljs.core.Symbol(null,"meta2559","meta2559",(76701167),null)], null);
});

cljs.core.async.t_cljs$core$async2558.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async2558.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async2558";

cljs.core.async.t_cljs$core$async2558.cljs$lang$ctorPrWriter = (function (this__9776__auto__,writer__9777__auto__,opt__9778__auto__){
return cljs.core._write.call(null,writer__9777__auto__,"cljs.core.async/t_cljs$core$async2558");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async2558.
 */
cljs.core.async.__GT_t_cljs$core$async2558 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async2558(f__$1,ch__$1,meta2559){
return (new cljs.core.async.t_cljs$core$async2558(f__$1,ch__$1,meta2559));
});

}

return (new cljs.core.async.t_cljs$core$async2558(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async2561 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.async.impl.protocols.WritePort}
*/
cljs.core.async.t_cljs$core$async2561 = (function (p,ch,meta2562){
this.p = p;
this.ch = ch;
this.meta2562 = meta2562;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async2561.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_2563,meta2562__$1){
var self__ = this;
var _2563__$1 = this;
return (new cljs.core.async.t_cljs$core$async2561(self__.p,self__.ch,meta2562__$1));
});

cljs.core.async.t_cljs$core$async2561.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_2563){
var self__ = this;
var _2563__$1 = this;
return self__.meta2562;
});

cljs.core.async.t_cljs$core$async2561.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async2561.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async2561.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async2561.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async2561.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async2561.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async2561.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async2561.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null),new cljs.core.Symbol(null,"meta2562","meta2562",(-506820976),null)], null);
});

cljs.core.async.t_cljs$core$async2561.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async2561.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async2561";

cljs.core.async.t_cljs$core$async2561.cljs$lang$ctorPrWriter = (function (this__9776__auto__,writer__9777__auto__,opt__9778__auto__){
return cljs.core._write.call(null,writer__9777__auto__,"cljs.core.async/t_cljs$core$async2561");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async2561.
 */
cljs.core.async.__GT_t_cljs$core$async2561 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async2561(p__$1,ch__$1,meta2562){
return (new cljs.core.async.t_cljs$core$async2561(p__$1,ch__$1,meta2562));
});

}

return (new cljs.core.async.t_cljs$core$async2561(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__2565 = arguments.length;
switch (G__2565) {
case (2):
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19__auto___2606 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19__auto___2606,out){
return (function (){
var f__20__auto__ = (function (){var switch__14__auto__ = ((function (c__19__auto___2606,out){
return (function (state_2586){
var state_val_2587 = (state_2586[(1)]);
if((state_val_2587 === (1))){
var state_2586__$1 = state_2586;
var statearr_2588_2607 = state_2586__$1;
(statearr_2588_2607[(2)] = null);

(statearr_2588_2607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2587 === (2))){
var state_2586__$1 = state_2586;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2586__$1,(4),ch);
} else {
if((state_val_2587 === (3))){
var inst_2584 = (state_2586[(2)]);
var state_2586__$1 = state_2586;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2586__$1,inst_2584);
} else {
if((state_val_2587 === (4))){
var inst_2568 = (state_2586[(7)]);
var inst_2568__$1 = (state_2586[(2)]);
var inst_2569 = (inst_2568__$1 == null);
var state_2586__$1 = (function (){var statearr_2589 = state_2586;
(statearr_2589[(7)] = inst_2568__$1);

return statearr_2589;
})();
if(cljs.core.truth_(inst_2569)){
var statearr_2590_2608 = state_2586__$1;
(statearr_2590_2608[(1)] = (5));

} else {
var statearr_2591_2609 = state_2586__$1;
(statearr_2591_2609[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2587 === (5))){
var inst_2571 = cljs.core.async.close_BANG_.call(null,out);
var state_2586__$1 = state_2586;
var statearr_2592_2610 = state_2586__$1;
(statearr_2592_2610[(2)] = inst_2571);

(statearr_2592_2610[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2587 === (6))){
var inst_2568 = (state_2586[(7)]);
var inst_2573 = p.call(null,inst_2568);
var state_2586__$1 = state_2586;
if(cljs.core.truth_(inst_2573)){
var statearr_2593_2611 = state_2586__$1;
(statearr_2593_2611[(1)] = (8));

} else {
var statearr_2594_2612 = state_2586__$1;
(statearr_2594_2612[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2587 === (7))){
var inst_2582 = (state_2586[(2)]);
var state_2586__$1 = state_2586;
var statearr_2595_2613 = state_2586__$1;
(statearr_2595_2613[(2)] = inst_2582);

(statearr_2595_2613[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2587 === (8))){
var inst_2568 = (state_2586[(7)]);
var state_2586__$1 = state_2586;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_2586__$1,(11),out,inst_2568);
} else {
if((state_val_2587 === (9))){
var state_2586__$1 = state_2586;
var statearr_2596_2614 = state_2586__$1;
(statearr_2596_2614[(2)] = null);

(statearr_2596_2614[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2587 === (10))){
var inst_2579 = (state_2586[(2)]);
var state_2586__$1 = (function (){var statearr_2597 = state_2586;
(statearr_2597[(8)] = inst_2579);

return statearr_2597;
})();
var statearr_2598_2615 = state_2586__$1;
(statearr_2598_2615[(2)] = null);

(statearr_2598_2615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2587 === (11))){
var inst_2576 = (state_2586[(2)]);
var state_2586__$1 = state_2586;
var statearr_2599_2616 = state_2586__$1;
(statearr_2599_2616[(2)] = inst_2576);

(statearr_2599_2616[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
return null;
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
});})(c__19__auto___2606,out))
;
return ((function (switch__14__auto__,c__19__auto___2606,out){
return (function() {
var cljs$core$async$state_machine__15__auto__ = null;
var cljs$core$async$state_machine__15__auto____0 = (function (){
var statearr_2600 = [null,null,null,null,null,null,null,null,null];
(statearr_2600[(0)] = cljs$core$async$state_machine__15__auto__);

(statearr_2600[(1)] = (1));

return statearr_2600;
});
var cljs$core$async$state_machine__15__auto____1 = (function (state_2586){
while(true){
var ret_value__16__auto__ = (function (){try{while(true){
var result__17__auto__ = switch__14__auto__.call(null,state_2586);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__17__auto__;
}
break;
}
}catch (e2601){var ex__18__auto__ = e2601;
var statearr_2602_2617 = state_2586;
(statearr_2602_2617[(2)] = ex__18__auto__);


if(cljs.core.seq.call(null,(state_2586[(4)]))){
var statearr_2603_2618 = state_2586;
(statearr_2603_2618[(1)] = cljs.core.first.call(null,(state_2586[(4)])));

} else {
throw ex__18__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__2619 = state_2586;
state_2586 = G__2619;
continue;
} else {
return ret_value__16__auto__;
}
break;
}
});
cljs$core$async$state_machine__15__auto__ = function(state_2586){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15__auto____1.call(this,state_2586);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15__auto____0;
cljs$core$async$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15__auto____1;
return cljs$core$async$state_machine__15__auto__;
})()
;})(switch__14__auto__,c__19__auto___2606,out))
})();
var state__21__auto__ = (function (){var statearr_2604 = f__20__auto__.call(null);
(statearr_2604[(6)] = c__19__auto___2606);

return statearr_2604;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21__auto__);
});})(c__19__auto___2606,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = (3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__2621 = arguments.length;
switch (G__2621) {
case (2):
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = (3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__19__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19__auto__){
return (function (){
var f__20__auto__ = (function (){var switch__14__auto__ = ((function (c__19__auto__){
return (function (state_2684){
var state_val_2685 = (state_2684[(1)]);
if((state_val_2685 === (1))){
var state_2684__$1 = state_2684;
var statearr_2686_2725 = state_2684__$1;
(statearr_2686_2725[(2)] = null);

(statearr_2686_2725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2685 === (2))){
var state_2684__$1 = state_2684;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2684__$1,(4),in$);
} else {
if((state_val_2685 === (3))){
var inst_2682 = (state_2684[(2)]);
var state_2684__$1 = state_2684;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2684__$1,inst_2682);
} else {
if((state_val_2685 === (4))){
var inst_2625 = (state_2684[(7)]);
var inst_2625__$1 = (state_2684[(2)]);
var inst_2626 = (inst_2625__$1 == null);
var state_2684__$1 = (function (){var statearr_2687 = state_2684;
(statearr_2687[(7)] = inst_2625__$1);

return statearr_2687;
})();
if(cljs.core.truth_(inst_2626)){
var statearr_2688_2726 = state_2684__$1;
(statearr_2688_2726[(1)] = (5));

} else {
var statearr_2689_2727 = state_2684__$1;
(statearr_2689_2727[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2685 === (5))){
var inst_2628 = cljs.core.async.close_BANG_.call(null,out);
var state_2684__$1 = state_2684;
var statearr_2690_2728 = state_2684__$1;
(statearr_2690_2728[(2)] = inst_2628);

(statearr_2690_2728[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2685 === (6))){
var inst_2625 = (state_2684[(7)]);
var inst_2634 = f.call(null,inst_2625);
var inst_2635 = cljs.core.seq.call(null,inst_2634);
var inst_2636 = inst_2635;
var inst_2637 = null;
var inst_2638 = (0);
var inst_2639 = (0);
var state_2684__$1 = (function (){var statearr_2691 = state_2684;
(statearr_2691[(8)] = inst_2636);

(statearr_2691[(11)] = inst_2637);

(statearr_2691[(10)] = inst_2638);

(statearr_2691[(9)] = inst_2639);

return statearr_2691;
})();
var statearr_2692_2729 = state_2684__$1;
(statearr_2692_2729[(2)] = null);

(statearr_2692_2729[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2685 === (7))){
var inst_2680 = (state_2684[(2)]);
var state_2684__$1 = state_2684;
var statearr_2693_2730 = state_2684__$1;
(statearr_2693_2730[(2)] = inst_2680);

(statearr_2693_2730[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2685 === (8))){
var inst_2639 = (state_2684[(9)]);
var inst_2638 = (state_2684[(10)]);
var inst_2641 = (inst_2639 < inst_2638);
var inst_2642 = inst_2641;
var state_2684__$1 = state_2684;
if(cljs.core.truth_(inst_2642)){
var statearr_2694_2731 = state_2684__$1;
(statearr_2694_2731[(1)] = (10));

} else {
var statearr_2695_2732 = state_2684__$1;
(statearr_2695_2732[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2685 === (9))){
var inst_2672 = (state_2684[(2)]);
var inst_2673 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_2684__$1 = (function (){var statearr_2696 = state_2684;
(statearr_2696[(12)] = inst_2672);

return statearr_2696;
})();
if(cljs.core.truth_(inst_2673)){
var statearr_2697_2733 = state_2684__$1;
(statearr_2697_2733[(1)] = (21));

} else {
var statearr_2698_2734 = state_2684__$1;
(statearr_2698_2734[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2685 === (10))){
var inst_2637 = (state_2684[(11)]);
var inst_2639 = (state_2684[(9)]);
var inst_2644 = cljs.core._nth.call(null,inst_2637,inst_2639);
var state_2684__$1 = state_2684;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_2684__$1,(13),out,inst_2644);
} else {
if((state_val_2685 === (11))){
var inst_2636 = (state_2684[(8)]);
var inst_2650 = (state_2684[(13)]);
var inst_2650__$1 = cljs.core.seq.call(null,inst_2636);
var state_2684__$1 = (function (){var statearr_2702 = state_2684;
(statearr_2702[(13)] = inst_2650__$1);

return statearr_2702;
})();
if(inst_2650__$1){
var statearr_2703_2735 = state_2684__$1;
(statearr_2703_2735[(1)] = (14));

} else {
var statearr_2704_2736 = state_2684__$1;
(statearr_2704_2736[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2685 === (12))){
var inst_2670 = (state_2684[(2)]);
var state_2684__$1 = state_2684;
var statearr_2705_2737 = state_2684__$1;
(statearr_2705_2737[(2)] = inst_2670);

(statearr_2705_2737[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2685 === (13))){
var inst_2639 = (state_2684[(9)]);
var inst_2636 = (state_2684[(8)]);
var inst_2637 = (state_2684[(11)]);
var inst_2638 = (state_2684[(10)]);
var inst_2646 = (state_2684[(2)]);
var inst_2647 = (inst_2639 + (1));
var tmp2699 = inst_2636;
var tmp2700 = inst_2637;
var tmp2701 = inst_2638;
var inst_2636__$1 = tmp2699;
var inst_2637__$1 = tmp2700;
var inst_2638__$1 = tmp2701;
var inst_2639__$1 = inst_2647;
var state_2684__$1 = (function (){var statearr_2706 = state_2684;
(statearr_2706[(14)] = inst_2646);

(statearr_2706[(8)] = inst_2636__$1);

(statearr_2706[(11)] = inst_2637__$1);

(statearr_2706[(10)] = inst_2638__$1);

(statearr_2706[(9)] = inst_2639__$1);

return statearr_2706;
})();
var statearr_2707_2738 = state_2684__$1;
(statearr_2707_2738[(2)] = null);

(statearr_2707_2738[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2685 === (14))){
var inst_2650 = (state_2684[(13)]);
var inst_2652 = cljs.core.chunked_seq_QMARK_.call(null,inst_2650);
var state_2684__$1 = state_2684;
if(inst_2652){
var statearr_2708_2739 = state_2684__$1;
(statearr_2708_2739[(1)] = (17));

} else {
var statearr_2709_2740 = state_2684__$1;
(statearr_2709_2740[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2685 === (15))){
var state_2684__$1 = state_2684;
var statearr_2710_2741 = state_2684__$1;
(statearr_2710_2741[(2)] = null);

(statearr_2710_2741[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2685 === (16))){
var inst_2668 = (state_2684[(2)]);
var state_2684__$1 = state_2684;
var statearr_2711_2742 = state_2684__$1;
(statearr_2711_2742[(2)] = inst_2668);

(statearr_2711_2742[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2685 === (17))){
var inst_2650 = (state_2684[(13)]);
var inst_2654 = cljs.core.chunk_first.call(null,inst_2650);
var inst_2655 = cljs.core.chunk_rest.call(null,inst_2650);
var inst_2656 = cljs.core.count.call(null,inst_2654);
var inst_2636 = inst_2655;
var inst_2637 = inst_2654;
var inst_2638 = inst_2656;
var inst_2639 = (0);
var state_2684__$1 = (function (){var statearr_2712 = state_2684;
(statearr_2712[(8)] = inst_2636);

(statearr_2712[(11)] = inst_2637);

(statearr_2712[(10)] = inst_2638);

(statearr_2712[(9)] = inst_2639);

return statearr_2712;
})();
var statearr_2713_2743 = state_2684__$1;
(statearr_2713_2743[(2)] = null);

(statearr_2713_2743[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2685 === (18))){
var inst_2650 = (state_2684[(13)]);
var inst_2659 = cljs.core.first.call(null,inst_2650);
var state_2684__$1 = state_2684;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_2684__$1,(20),out,inst_2659);
} else {
if((state_val_2685 === (19))){
var inst_2665 = (state_2684[(2)]);
var state_2684__$1 = state_2684;
var statearr_2714_2744 = state_2684__$1;
(statearr_2714_2744[(2)] = inst_2665);

(statearr_2714_2744[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2685 === (20))){
var inst_2650 = (state_2684[(13)]);
var inst_2661 = (state_2684[(2)]);
var inst_2662 = cljs.core.next.call(null,inst_2650);
var inst_2636 = inst_2662;
var inst_2637 = null;
var inst_2638 = (0);
var inst_2639 = (0);
var state_2684__$1 = (function (){var statearr_2715 = state_2684;
(statearr_2715[(15)] = inst_2661);

(statearr_2715[(8)] = inst_2636);

(statearr_2715[(11)] = inst_2637);

(statearr_2715[(10)] = inst_2638);

(statearr_2715[(9)] = inst_2639);

return statearr_2715;
})();
var statearr_2716_2745 = state_2684__$1;
(statearr_2716_2745[(2)] = null);

(statearr_2716_2745[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2685 === (21))){
var state_2684__$1 = state_2684;
var statearr_2717_2746 = state_2684__$1;
(statearr_2717_2746[(2)] = null);

(statearr_2717_2746[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2685 === (22))){
var state_2684__$1 = state_2684;
var statearr_2718_2747 = state_2684__$1;
(statearr_2718_2747[(2)] = null);

(statearr_2718_2747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2685 === (23))){
var inst_2678 = (state_2684[(2)]);
var state_2684__$1 = state_2684;
var statearr_2719_2748 = state_2684__$1;
(statearr_2719_2748[(2)] = inst_2678);

(statearr_2719_2748[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
return null;
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
}
}
}
}
}
}
}
}
});})(c__19__auto__))
;
return ((function (switch__14__auto__,c__19__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__15__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__15__auto____0 = (function (){
var statearr_2720 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_2720[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__15__auto__);

(statearr_2720[(1)] = (1));

return statearr_2720;
});
var cljs$core$async$mapcat_STAR__$_state_machine__15__auto____1 = (function (state_2684){
while(true){
var ret_value__16__auto__ = (function (){try{while(true){
var result__17__auto__ = switch__14__auto__.call(null,state_2684);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__17__auto__;
}
break;
}
}catch (e2721){var ex__18__auto__ = e2721;
var statearr_2722_2749 = state_2684;
(statearr_2722_2749[(2)] = ex__18__auto__);


if(cljs.core.seq.call(null,(state_2684[(4)]))){
var statearr_2723_2750 = state_2684;
(statearr_2723_2750[(1)] = cljs.core.first.call(null,(state_2684[(4)])));

} else {
throw ex__18__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__2751 = state_2684;
state_2684 = G__2751;
continue;
} else {
return ret_value__16__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__15__auto__ = function(state_2684){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__15__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__15__auto____1.call(this,state_2684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__15__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__15__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__15__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__15__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__15__auto__;
})()
;})(switch__14__auto__,c__19__auto__))
})();
var state__21__auto__ = (function (){var statearr_2724 = f__20__auto__.call(null);
(statearr_2724[(6)] = c__19__auto__);

return statearr_2724;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21__auto__);
});})(c__19__auto__))
);

return c__19__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__2753 = arguments.length;
switch (G__2753) {
case (2):
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = (3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__2756 = arguments.length;
switch (G__2756) {
case (2):
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = (3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__2759 = arguments.length;
switch (G__2759) {
case (1):
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19__auto___2807 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19__auto___2807,out){
return (function (){
var f__20__auto__ = (function (){var switch__14__auto__ = ((function (c__19__auto___2807,out){
return (function (state_2783){
var state_val_2784 = (state_2783[(1)]);
if((state_val_2784 === (1))){
var inst_2760 = null;
var state_2783__$1 = (function (){var statearr_2785 = state_2783;
(statearr_2785[(7)] = inst_2760);

return statearr_2785;
})();
var statearr_2786_2808 = state_2783__$1;
(statearr_2786_2808[(2)] = null);

(statearr_2786_2808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2784 === (2))){
var state_2783__$1 = state_2783;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2783__$1,(4),ch);
} else {
if((state_val_2784 === (3))){
var inst_2780 = (state_2783[(2)]);
var inst_2781 = cljs.core.async.close_BANG_.call(null,out);
var state_2783__$1 = (function (){var statearr_2787 = state_2783;
(statearr_2787[(8)] = inst_2780);

return statearr_2787;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2783__$1,inst_2781);
} else {
if((state_val_2784 === (4))){
var inst_2763 = (state_2783[(9)]);
var inst_2763__$1 = (state_2783[(2)]);
var inst_2764 = (inst_2763__$1 == null);
var inst_2765 = cljs.core.not.call(null,inst_2764);
var state_2783__$1 = (function (){var statearr_2788 = state_2783;
(statearr_2788[(9)] = inst_2763__$1);

return statearr_2788;
})();
if(inst_2765){
var statearr_2789_2809 = state_2783__$1;
(statearr_2789_2809[(1)] = (5));

} else {
var statearr_2790_2810 = state_2783__$1;
(statearr_2790_2810[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2784 === (5))){
var inst_2763 = (state_2783[(9)]);
var inst_2760 = (state_2783[(7)]);
var inst_2767 = cljs.core._EQ_.call(null,inst_2763,inst_2760);
var state_2783__$1 = state_2783;
if(inst_2767){
var statearr_2791_2811 = state_2783__$1;
(statearr_2791_2811[(1)] = (8));

} else {
var statearr_2792_2812 = state_2783__$1;
(statearr_2792_2812[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2784 === (6))){
var state_2783__$1 = state_2783;
var statearr_2794_2813 = state_2783__$1;
(statearr_2794_2813[(2)] = null);

(statearr_2794_2813[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2784 === (7))){
var inst_2778 = (state_2783[(2)]);
var state_2783__$1 = state_2783;
var statearr_2795_2814 = state_2783__$1;
(statearr_2795_2814[(2)] = inst_2778);

(statearr_2795_2814[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2784 === (8))){
var inst_2760 = (state_2783[(7)]);
var tmp2793 = inst_2760;
var inst_2760__$1 = tmp2793;
var state_2783__$1 = (function (){var statearr_2796 = state_2783;
(statearr_2796[(7)] = inst_2760__$1);

return statearr_2796;
})();
var statearr_2797_2815 = state_2783__$1;
(statearr_2797_2815[(2)] = null);

(statearr_2797_2815[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2784 === (9))){
var inst_2763 = (state_2783[(9)]);
var state_2783__$1 = state_2783;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_2783__$1,(11),out,inst_2763);
} else {
if((state_val_2784 === (10))){
var inst_2775 = (state_2783[(2)]);
var state_2783__$1 = state_2783;
var statearr_2798_2816 = state_2783__$1;
(statearr_2798_2816[(2)] = inst_2775);

(statearr_2798_2816[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2784 === (11))){
var inst_2763 = (state_2783[(9)]);
var inst_2772 = (state_2783[(2)]);
var inst_2760 = inst_2763;
var state_2783__$1 = (function (){var statearr_2799 = state_2783;
(statearr_2799[(10)] = inst_2772);

(statearr_2799[(7)] = inst_2760);

return statearr_2799;
})();
var statearr_2800_2817 = state_2783__$1;
(statearr_2800_2817[(2)] = null);

(statearr_2800_2817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
return null;
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
});})(c__19__auto___2807,out))
;
return ((function (switch__14__auto__,c__19__auto___2807,out){
return (function() {
var cljs$core$async$state_machine__15__auto__ = null;
var cljs$core$async$state_machine__15__auto____0 = (function (){
var statearr_2801 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_2801[(0)] = cljs$core$async$state_machine__15__auto__);

(statearr_2801[(1)] = (1));

return statearr_2801;
});
var cljs$core$async$state_machine__15__auto____1 = (function (state_2783){
while(true){
var ret_value__16__auto__ = (function (){try{while(true){
var result__17__auto__ = switch__14__auto__.call(null,state_2783);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__17__auto__;
}
break;
}
}catch (e2802){var ex__18__auto__ = e2802;
var statearr_2803_2818 = state_2783;
(statearr_2803_2818[(2)] = ex__18__auto__);


if(cljs.core.seq.call(null,(state_2783[(4)]))){
var statearr_2804_2819 = state_2783;
(statearr_2804_2819[(1)] = cljs.core.first.call(null,(state_2783[(4)])));

} else {
throw ex__18__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__2820 = state_2783;
state_2783 = G__2820;
continue;
} else {
return ret_value__16__auto__;
}
break;
}
});
cljs$core$async$state_machine__15__auto__ = function(state_2783){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15__auto____1.call(this,state_2783);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15__auto____0;
cljs$core$async$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15__auto____1;
return cljs$core$async$state_machine__15__auto__;
})()
;})(switch__14__auto__,c__19__auto___2807,out))
})();
var state__21__auto__ = (function (){var statearr_2805 = f__20__auto__.call(null);
(statearr_2805[(6)] = c__19__auto___2807);

return statearr_2805;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21__auto__);
});})(c__19__auto___2807,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = (2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__2822 = arguments.length;
switch (G__2822) {
case (2):
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19__auto___2889 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19__auto___2889,out){
return (function (){
var f__20__auto__ = (function (){var switch__14__auto__ = ((function (c__19__auto___2889,out){
return (function (state_2860){
var state_val_2861 = (state_2860[(1)]);
if((state_val_2861 === (1))){
var inst_2823 = (new Array(n));
var inst_2824 = inst_2823;
var inst_2825 = (0);
var state_2860__$1 = (function (){var statearr_2862 = state_2860;
(statearr_2862[(7)] = inst_2824);

(statearr_2862[(9)] = inst_2825);

return statearr_2862;
})();
var statearr_2863_2890 = state_2860__$1;
(statearr_2863_2890[(2)] = null);

(statearr_2863_2890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2861 === (2))){
var state_2860__$1 = state_2860;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2860__$1,(4),ch);
} else {
if((state_val_2861 === (3))){
var inst_2858 = (state_2860[(2)]);
var state_2860__$1 = state_2860;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2860__$1,inst_2858);
} else {
if((state_val_2861 === (4))){
var inst_2828 = (state_2860[(8)]);
var inst_2828__$1 = (state_2860[(2)]);
var inst_2829 = (inst_2828__$1 == null);
var inst_2830 = cljs.core.not.call(null,inst_2829);
var state_2860__$1 = (function (){var statearr_2864 = state_2860;
(statearr_2864[(8)] = inst_2828__$1);

return statearr_2864;
})();
if(inst_2830){
var statearr_2865_2891 = state_2860__$1;
(statearr_2865_2891[(1)] = (5));

} else {
var statearr_2866_2892 = state_2860__$1;
(statearr_2866_2892[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2861 === (5))){
var inst_2824 = (state_2860[(7)]);
var inst_2825 = (state_2860[(9)]);
var inst_2828 = (state_2860[(8)]);
var inst_2833 = (state_2860[(10)]);
var inst_2832 = (inst_2824[inst_2825] = inst_2828);
var inst_2833__$1 = (inst_2825 + (1));
var inst_2834 = (inst_2833__$1 < n);
var state_2860__$1 = (function (){var statearr_2867 = state_2860;
(statearr_2867[(11)] = inst_2832);

(statearr_2867[(10)] = inst_2833__$1);

return statearr_2867;
})();
if(cljs.core.truth_(inst_2834)){
var statearr_2868_2893 = state_2860__$1;
(statearr_2868_2893[(1)] = (8));

} else {
var statearr_2869_2894 = state_2860__$1;
(statearr_2869_2894[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2861 === (6))){
var inst_2825 = (state_2860[(9)]);
var inst_2846 = (inst_2825 > (0));
var state_2860__$1 = state_2860;
if(cljs.core.truth_(inst_2846)){
var statearr_2871_2895 = state_2860__$1;
(statearr_2871_2895[(1)] = (12));

} else {
var statearr_2872_2896 = state_2860__$1;
(statearr_2872_2896[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2861 === (7))){
var inst_2856 = (state_2860[(2)]);
var state_2860__$1 = state_2860;
var statearr_2873_2897 = state_2860__$1;
(statearr_2873_2897[(2)] = inst_2856);

(statearr_2873_2897[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2861 === (8))){
var inst_2824 = (state_2860[(7)]);
var inst_2833 = (state_2860[(10)]);
var tmp2870 = inst_2824;
var inst_2824__$1 = tmp2870;
var inst_2825 = inst_2833;
var state_2860__$1 = (function (){var statearr_2874 = state_2860;
(statearr_2874[(7)] = inst_2824__$1);

(statearr_2874[(9)] = inst_2825);

return statearr_2874;
})();
var statearr_2875_2898 = state_2860__$1;
(statearr_2875_2898[(2)] = null);

(statearr_2875_2898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2861 === (9))){
var inst_2824 = (state_2860[(7)]);
var inst_2838 = cljs.core.vec.call(null,inst_2824);
var state_2860__$1 = state_2860;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_2860__$1,(11),out,inst_2838);
} else {
if((state_val_2861 === (10))){
var inst_2844 = (state_2860[(2)]);
var state_2860__$1 = state_2860;
var statearr_2876_2899 = state_2860__$1;
(statearr_2876_2899[(2)] = inst_2844);

(statearr_2876_2899[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2861 === (11))){
var inst_2840 = (state_2860[(2)]);
var inst_2841 = (new Array(n));
var inst_2824 = inst_2841;
var inst_2825 = (0);
var state_2860__$1 = (function (){var statearr_2877 = state_2860;
(statearr_2877[(12)] = inst_2840);

(statearr_2877[(7)] = inst_2824);

(statearr_2877[(9)] = inst_2825);

return statearr_2877;
})();
var statearr_2878_2900 = state_2860__$1;
(statearr_2878_2900[(2)] = null);

(statearr_2878_2900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2861 === (12))){
var inst_2824 = (state_2860[(7)]);
var inst_2848 = cljs.core.vec.call(null,inst_2824);
var state_2860__$1 = state_2860;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_2860__$1,(15),out,inst_2848);
} else {
if((state_val_2861 === (13))){
var state_2860__$1 = state_2860;
var statearr_2879_2901 = state_2860__$1;
(statearr_2879_2901[(2)] = null);

(statearr_2879_2901[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2861 === (14))){
var inst_2853 = (state_2860[(2)]);
var inst_2854 = cljs.core.async.close_BANG_.call(null,out);
var state_2860__$1 = (function (){var statearr_2880 = state_2860;
(statearr_2880[(13)] = inst_2853);

return statearr_2880;
})();
var statearr_2881_2902 = state_2860__$1;
(statearr_2881_2902[(2)] = inst_2854);

(statearr_2881_2902[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2861 === (15))){
var inst_2850 = (state_2860[(2)]);
var state_2860__$1 = state_2860;
var statearr_2882_2903 = state_2860__$1;
(statearr_2882_2903[(2)] = inst_2850);

(statearr_2882_2903[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
return null;
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
});})(c__19__auto___2889,out))
;
return ((function (switch__14__auto__,c__19__auto___2889,out){
return (function() {
var cljs$core$async$state_machine__15__auto__ = null;
var cljs$core$async$state_machine__15__auto____0 = (function (){
var statearr_2883 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_2883[(0)] = cljs$core$async$state_machine__15__auto__);

(statearr_2883[(1)] = (1));

return statearr_2883;
});
var cljs$core$async$state_machine__15__auto____1 = (function (state_2860){
while(true){
var ret_value__16__auto__ = (function (){try{while(true){
var result__17__auto__ = switch__14__auto__.call(null,state_2860);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__17__auto__;
}
break;
}
}catch (e2884){var ex__18__auto__ = e2884;
var statearr_2885_2904 = state_2860;
(statearr_2885_2904[(2)] = ex__18__auto__);


if(cljs.core.seq.call(null,(state_2860[(4)]))){
var statearr_2886_2905 = state_2860;
(statearr_2886_2905[(1)] = cljs.core.first.call(null,(state_2860[(4)])));

} else {
throw ex__18__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__2906 = state_2860;
state_2860 = G__2906;
continue;
} else {
return ret_value__16__auto__;
}
break;
}
});
cljs$core$async$state_machine__15__auto__ = function(state_2860){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15__auto____1.call(this,state_2860);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15__auto____0;
cljs$core$async$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15__auto____1;
return cljs$core$async$state_machine__15__auto__;
})()
;})(switch__14__auto__,c__19__auto___2889,out))
})();
var state__21__auto__ = (function (){var statearr_2887 = f__20__auto__.call(null);
(statearr_2887[(6)] = c__19__auto___2889);

return statearr_2887;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21__auto__);
});})(c__19__auto___2889,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = (3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__2908 = arguments.length;
switch (G__2908) {
case (2):
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19__auto___2979 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19__auto___2979,out){
return (function (){
var f__20__auto__ = (function (){var switch__14__auto__ = ((function (c__19__auto___2979,out){
return (function (state_2950){
var state_val_2951 = (state_2950[(1)]);
if((state_val_2951 === (1))){
var inst_2909 = [];
var inst_2910 = inst_2909;
var inst_2911 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",(-69252123));
var state_2950__$1 = (function (){var statearr_2952 = state_2950;
(statearr_2952[(7)] = inst_2910);

(statearr_2952[(9)] = inst_2911);

return statearr_2952;
})();
var statearr_2953_2980 = state_2950__$1;
(statearr_2953_2980[(2)] = null);

(statearr_2953_2980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2951 === (2))){
var state_2950__$1 = state_2950;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2950__$1,(4),ch);
} else {
if((state_val_2951 === (3))){
var inst_2948 = (state_2950[(2)]);
var state_2950__$1 = state_2950;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2950__$1,inst_2948);
} else {
if((state_val_2951 === (4))){
var inst_2914 = (state_2950[(8)]);
var inst_2914__$1 = (state_2950[(2)]);
var inst_2915 = (inst_2914__$1 == null);
var inst_2916 = cljs.core.not.call(null,inst_2915);
var state_2950__$1 = (function (){var statearr_2954 = state_2950;
(statearr_2954[(8)] = inst_2914__$1);

return statearr_2954;
})();
if(inst_2916){
var statearr_2955_2981 = state_2950__$1;
(statearr_2955_2981[(1)] = (5));

} else {
var statearr_2956_2982 = state_2950__$1;
(statearr_2956_2982[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2951 === (5))){
var inst_2914 = (state_2950[(8)]);
var inst_2918 = (state_2950[(10)]);
var inst_2911 = (state_2950[(9)]);
var inst_2918__$1 = f.call(null,inst_2914);
var inst_2919 = cljs.core._EQ_.call(null,inst_2918__$1,inst_2911);
var inst_2920 = cljs.core.keyword_identical_QMARK_.call(null,inst_2911,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",(-69252123)));
var inst_2921 = ((inst_2919) || (inst_2920));
var state_2950__$1 = (function (){var statearr_2957 = state_2950;
(statearr_2957[(10)] = inst_2918__$1);

return statearr_2957;
})();
if(cljs.core.truth_(inst_2921)){
var statearr_2958_2983 = state_2950__$1;
(statearr_2958_2983[(1)] = (8));

} else {
var statearr_2959_2984 = state_2950__$1;
(statearr_2959_2984[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2951 === (6))){
var inst_2910 = (state_2950[(7)]);
var inst_2935 = inst_2910.length;
var inst_2936 = (inst_2935 > (0));
var state_2950__$1 = state_2950;
if(cljs.core.truth_(inst_2936)){
var statearr_2961_2985 = state_2950__$1;
(statearr_2961_2985[(1)] = (12));

} else {
var statearr_2962_2986 = state_2950__$1;
(statearr_2962_2986[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2951 === (7))){
var inst_2946 = (state_2950[(2)]);
var state_2950__$1 = state_2950;
var statearr_2963_2987 = state_2950__$1;
(statearr_2963_2987[(2)] = inst_2946);

(statearr_2963_2987[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2951 === (8))){
var inst_2910 = (state_2950[(7)]);
var inst_2914 = (state_2950[(8)]);
var inst_2918 = (state_2950[(10)]);
var inst_2923 = inst_2910.push(inst_2914);
var tmp2960 = inst_2910;
var inst_2910__$1 = tmp2960;
var inst_2911 = inst_2918;
var state_2950__$1 = (function (){var statearr_2964 = state_2950;
(statearr_2964[(11)] = inst_2923);

(statearr_2964[(7)] = inst_2910__$1);

(statearr_2964[(9)] = inst_2911);

return statearr_2964;
})();
var statearr_2965_2988 = state_2950__$1;
(statearr_2965_2988[(2)] = null);

(statearr_2965_2988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2951 === (9))){
var inst_2910 = (state_2950[(7)]);
var inst_2926 = cljs.core.vec.call(null,inst_2910);
var state_2950__$1 = state_2950;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_2950__$1,(11),out,inst_2926);
} else {
if((state_val_2951 === (10))){
var inst_2933 = (state_2950[(2)]);
var state_2950__$1 = state_2950;
var statearr_2966_2989 = state_2950__$1;
(statearr_2966_2989[(2)] = inst_2933);

(statearr_2966_2989[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2951 === (11))){
var inst_2914 = (state_2950[(8)]);
var inst_2918 = (state_2950[(10)]);
var inst_2928 = (state_2950[(2)]);
var inst_2929 = [];
var inst_2930 = inst_2929.push(inst_2914);
var inst_2910 = inst_2929;
var inst_2911 = inst_2918;
var state_2950__$1 = (function (){var statearr_2967 = state_2950;
(statearr_2967[(12)] = inst_2928);

(statearr_2967[(13)] = inst_2930);

(statearr_2967[(7)] = inst_2910);

(statearr_2967[(9)] = inst_2911);

return statearr_2967;
})();
var statearr_2968_2990 = state_2950__$1;
(statearr_2968_2990[(2)] = null);

(statearr_2968_2990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2951 === (12))){
var inst_2910 = (state_2950[(7)]);
var inst_2938 = cljs.core.vec.call(null,inst_2910);
var state_2950__$1 = state_2950;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_2950__$1,(15),out,inst_2938);
} else {
if((state_val_2951 === (13))){
var state_2950__$1 = state_2950;
var statearr_2969_2991 = state_2950__$1;
(statearr_2969_2991[(2)] = null);

(statearr_2969_2991[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2951 === (14))){
var inst_2943 = (state_2950[(2)]);
var inst_2944 = cljs.core.async.close_BANG_.call(null,out);
var state_2950__$1 = (function (){var statearr_2970 = state_2950;
(statearr_2970[(14)] = inst_2943);

return statearr_2970;
})();
var statearr_2971_2992 = state_2950__$1;
(statearr_2971_2992[(2)] = inst_2944);

(statearr_2971_2992[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2951 === (15))){
var inst_2940 = (state_2950[(2)]);
var state_2950__$1 = state_2950;
var statearr_2972_2993 = state_2950__$1;
(statearr_2972_2993[(2)] = inst_2940);

(statearr_2972_2993[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
return null;
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
});})(c__19__auto___2979,out))
;
return ((function (switch__14__auto__,c__19__auto___2979,out){
return (function() {
var cljs$core$async$state_machine__15__auto__ = null;
var cljs$core$async$state_machine__15__auto____0 = (function (){
var statearr_2973 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_2973[(0)] = cljs$core$async$state_machine__15__auto__);

(statearr_2973[(1)] = (1));

return statearr_2973;
});
var cljs$core$async$state_machine__15__auto____1 = (function (state_2950){
while(true){
var ret_value__16__auto__ = (function (){try{while(true){
var result__17__auto__ = switch__14__auto__.call(null,state_2950);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__17__auto__;
}
break;
}
}catch (e2974){var ex__18__auto__ = e2974;
var statearr_2975_2994 = state_2950;
(statearr_2975_2994[(2)] = ex__18__auto__);


if(cljs.core.seq.call(null,(state_2950[(4)]))){
var statearr_2976_2995 = state_2950;
(statearr_2976_2995[(1)] = cljs.core.first.call(null,(state_2950[(4)])));

} else {
throw ex__18__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__2996 = state_2950;
state_2950 = G__2996;
continue;
} else {
return ret_value__16__auto__;
}
break;
}
});
cljs$core$async$state_machine__15__auto__ = function(state_2950){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15__auto____1.call(this,state_2950);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15__auto____0;
cljs$core$async$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15__auto____1;
return cljs$core$async$state_machine__15__auto__;
})()
;})(switch__14__auto__,c__19__auto___2979,out))
})();
var state__21__auto__ = (function (){var statearr_2977 = f__20__auto__.call(null);
(statearr_2977[(6)] = c__19__auto___2979);

return statearr_2977;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21__auto__);
});})(c__19__auto___2979,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = (3);

