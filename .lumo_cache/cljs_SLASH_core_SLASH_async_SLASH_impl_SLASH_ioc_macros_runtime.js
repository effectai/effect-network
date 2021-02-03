goog.provide("cljs.core.async.impl.ioc_macros_runtime");
cljs.core.async.impl.ioc_macros_runtime.FN_IDX = (0);
cljs.core.async.impl.ioc_macros_runtime.STATE_IDX = (1);
cljs.core.async.impl.ioc_macros_runtime.VALUE_IDX = (2);
cljs.core.async.impl.ioc_macros_runtime.BINDINGS_IDX = (3);
cljs.core.async.impl.ioc_macros_runtime.EXCEPTION_FRAMES = (4);
cljs.core.async.impl.ioc_macros_runtime.CURRENT_EXCEPTION = (5);
cljs.core.async.impl.ioc_macros_runtime.USER_START_IDX = (6);
/**
 * Returns the final [id state] from a plan. 
 */
cljs.core.async.impl.ioc_macros_runtime.get_plan = (function cljs$core$async$impl$ioc_macros_runtime$get_plan(f){
return f.call(null,cljs.core.PersistentArrayMap.EMPTY);
});
/**
 * Sets the binding 'key' to value. This operation can be undone via pop-bindings.
 * Bindings are stored in the state hashmap.
 */
cljs.core.async.impl.ioc_macros_runtime.push_binding = (function cljs$core$async$impl$ioc_macros_runtime$push_binding(key,value){
return (function (plan){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.update_in.call(null,plan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",(1271397192)),key], null),cljs.core.conj,value)], null);
});
});
/**
 * Pushes the result of (apply f old-value args) as current value of binding key
 */
cljs.core.async.impl.ioc_macros_runtime.push_alter_binding = (function cljs$core$async$impl$ioc_macros_runtime$push_alter_binding(var_args){
var args__10338__auto__ = [];
var len__10335__auto___225 = arguments.length;
var i__10336__auto___226 = (0);
while(true){
if((i__10336__auto___226 < len__10335__auto___225)){
args__10338__auto__.push((arguments[i__10336__auto___226]));

var G__227 = (i__10336__auto___226 + (1));
i__10336__auto___226 = G__227;
continue;
} else {
}
break;
}

var argseq__10339__auto__ = ((((2) < args__10338__auto__.length))?(new cljs.core.IndexedSeq(args__10338__auto__.slice((2)),(0),null)):null);
return cljs.core.async.impl.ioc_macros_runtime.push_alter_binding.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10339__auto__);
});

cljs.core.async.impl.ioc_macros_runtime.push_alter_binding.cljs$core$IFn$_invoke$arity$variadic = (function (key,f,args){
return (function (plan){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.update_in.call(null,plan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",(1271397192)),key], null),(function (p1__11_SHARP_){
return cljs.core.conj.call(null,p1__11_SHARP_,cljs.core.apply.call(null,f,cljs.core.first.call(null,p1__11_SHARP_),args));
}))], null);
});
});

cljs.core.async.impl.ioc_macros_runtime.push_alter_binding.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cljs.core.async.impl.ioc_macros_runtime.push_alter_binding.cljs$lang$applyTo = (function (seq222){
var G__223 = cljs.core.first.call(null,seq222);
var seq222__$1 = cljs.core.next.call(null,seq222);
var G__224 = cljs.core.first.call(null,seq222__$1);
var seq222__$2 = cljs.core.next.call(null,seq222__$1);
var self__10326__auto__ = this;
return self__10326__auto__.cljs$core$IFn$_invoke$arity$variadic(G__223,G__224,seq222__$2);
});

/**
 * Gets the value of the current binding for key
 */
cljs.core.async.impl.ioc_macros_runtime.get_binding = (function cljs$core$async$impl$ioc_macros_runtime$get_binding(key){
return (function (plan){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,cljs.core.get_in.call(null,plan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",(1271397192)),key], null))),plan], null);
});
});
/**
 * Removes the most recent binding for key
 */
cljs.core.async.impl.ioc_macros_runtime.pop_binding = (function cljs$core$async$impl$ioc_macros_runtime$pop_binding(key){
return (function (plan){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,cljs.core.get_in.call(null,plan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",(1271397192)),key], null))),cljs.core.update_in.call(null,plan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",(1271397192)),key], null),cljs.core.pop)], null);
});
});
/**
 * This function can be used inside a gen-plan when no operation is to be performed
 */
cljs.core.async.impl.ioc_macros_runtime.no_op = (function cljs$core$async$impl$ioc_macros_runtime$no_op(){
return (function (plan){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,plan], null);
});
});
/**
 * Assumes that itms is a list of state monad function results, threads the state map
 *   through all of them. Returns a vector of all the results.
 */
cljs.core.async.impl.ioc_macros_runtime.all = (function cljs$core$async$impl$ioc_macros_runtime$all(itms){
return (function (plan){
return cljs.core.reduce.call(null,(function (p__228,f){
var vec__229 = p__228;
var ids = cljs.core.nth.call(null,vec__229,(0),null);
var plan__$1 = cljs.core.nth.call(null,vec__229,(1),null);
var vec__232 = f.call(null,plan__$1);
var id = cljs.core.nth.call(null,vec__232,(0),null);
var plan__$2 = cljs.core.nth.call(null,vec__232,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,ids,id),plan__$2], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,plan], null),itms);
});
});
/**
 * Same as assoc-in, but for state hash map
 */
cljs.core.async.impl.ioc_macros_runtime.assoc_in_plan = (function cljs$core$async$impl$ioc_macros_runtime$assoc_in_plan(path,val){
return (function (plan){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [val,cljs.core.assoc_in.call(null,plan,path,val)], null);
});
});
/**
 * Same as update-in, but for a state hash map
 */
cljs.core.async.impl.ioc_macros_runtime.update_in_plan = (function cljs$core$async$impl$ioc_macros_runtime$update_in_plan(var_args){
var args__10338__auto__ = [];
var len__10335__auto___238 = arguments.length;
var i__10336__auto___239 = (0);
while(true){
if((i__10336__auto___239 < len__10335__auto___238)){
args__10338__auto__.push((arguments[i__10336__auto___239]));

var G__240 = (i__10336__auto___239 + (1));
i__10336__auto___239 = G__240;
continue;
} else {
}
break;
}

var argseq__10339__auto__ = ((((2) < args__10338__auto__.length))?(new cljs.core.IndexedSeq(args__10338__auto__.slice((2)),(0),null)):null);
return cljs.core.async.impl.ioc_macros_runtime.update_in_plan.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10339__auto__);
});

cljs.core.async.impl.ioc_macros_runtime.update_in_plan.cljs$core$IFn$_invoke$arity$variadic = (function (path,f,args){
return (function (plan){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.apply.call(null,cljs.core.update_in,plan,path,f,args)], null);
});
});

cljs.core.async.impl.ioc_macros_runtime.update_in_plan.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cljs.core.async.impl.ioc_macros_runtime.update_in_plan.cljs$lang$applyTo = (function (seq235){
var G__236 = cljs.core.first.call(null,seq235);
var seq235__$1 = cljs.core.next.call(null,seq235);
var G__237 = cljs.core.first.call(null,seq235__$1);
var seq235__$2 = cljs.core.next.call(null,seq235__$1);
var self__10326__auto__ = this;
return self__10326__auto__.cljs$core$IFn$_invoke$arity$variadic(G__236,G__237,seq235__$2);
});

/**
 * Same as get-in, but for a state hash map
 */
cljs.core.async.impl.ioc_macros_runtime.get_in_plan = (function cljs$core$async$impl$ioc_macros_runtime$get_in_plan(path){
return (function (plan){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get_in.call(null,plan,path),plan], null);
});
});
/**
 * Sets the current block being written to by the functions. The next add-instruction call will append to this block
 */
cljs.core.async.impl.ioc_macros_runtime.set_block = (function cljs$core$async$impl$ioc_macros_runtime$set_block(block_id){
return (function (plan){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [block_id,cljs.core.assoc.call(null,plan,new cljs.core.Keyword(null,"current-block","current-block",(1027687970)),block_id)], null);
});
});
/**
 * Gets the current block
 */
cljs.core.async.impl.ioc_macros_runtime.get_block = (function cljs$core$async$impl$ioc_macros_runtime$get_block(){
return (function (plan){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-block","current-block",(1027687970)).cljs$core$IFn$_invoke$arity$1(plan),plan], null);
});
});
/**
 * Adds a new block, returns its id, but does not change the current block (does not call set-block).
 */
cljs.core.async.impl.ioc_macros_runtime.add_block = (function cljs$core$async$impl$ioc_macros_runtime$add_block(){
return (function (plan_241){
var vec__242 = cljs.core.async.impl.ioc_macros_runtime.update_in_plan.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block-id","block-id",(-70582834))], null),cljs.core.fnil.call(null,cljs.core.inc,(0))).call(null,plan_241);
var _ = cljs.core.nth.call(null,vec__242,(0),null);
var plan_241__$1 = cljs.core.nth.call(null,vec__242,(1),null);
var vec__245 = cljs.core.async.impl.ioc_macros_runtime.get_in_plan.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block-id","block-id",(-70582834))], null)).call(null,plan_241__$1);
var blk_id = cljs.core.nth.call(null,vec__245,(0),null);
var plan_241__$2 = cljs.core.nth.call(null,vec__245,(1),null);
var vec__248 = cljs.core.async.impl.ioc_macros_runtime.get_block.call(null).call(null,plan_241__$2);
var cur_blk = cljs.core.nth.call(null,vec__248,(0),null);
var plan_241__$3 = cljs.core.nth.call(null,vec__248,(1),null);
var vec__251 = cljs.core.async.impl.ioc_macros_runtime.assoc_in_plan.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",(-610462153)),blk_id], null),cljs.core.PersistentVector.EMPTY).call(null,plan_241__$3);
var ___$1 = cljs.core.nth.call(null,vec__251,(0),null);
var plan_241__$4 = cljs.core.nth.call(null,vec__251,(1),null);
var vec__254 = cljs.core.async.impl.ioc_macros_runtime.get_binding.call(null,new cljs.core.Keyword(null,"catch","catch",(1038065524))).call(null,plan_241__$4);
var catches = cljs.core.nth.call(null,vec__254,(0),null);
var plan_241__$5 = cljs.core.nth.call(null,vec__254,(1),null);
var vec__257 = cljs.core.async.impl.ioc_macros_runtime.assoc_in_plan.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block-catches","block-catches",(-193801771)),blk_id], null),catches).call(null,plan_241__$5);
var ___$2 = cljs.core.nth.call(null,vec__257,(0),null);
var plan_241__$6 = cljs.core.nth.call(null,vec__257,(1),null);
var vec__260 = ((cljs.core.not.call(null,cur_blk))?cljs.core.async.impl.ioc_macros_runtime.assoc_in_plan.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start-block","start-block",(885980136))], null),blk_id):cljs.core.async.impl.ioc_macros_runtime.no_op.call(null)).call(null,plan_241__$6);
var ___$3 = cljs.core.nth.call(null,vec__260,(0),null);
var plan_241__$7 = cljs.core.nth.call(null,vec__260,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blk_id,plan_241__$7], null);
});
});
cljs.core.async.impl.ioc_macros_runtime.instruction_QMARK_ = (function cljs$core$async$impl$ioc_macros_runtime$instruction_QMARK_(x){
return new cljs.core.Keyword("cljs.core.async.impl.ioc-macros-runtime","instruction","cljs.core.async.impl.ioc-macros-runtime/instruction",(-2068204214)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,x));
});
/**
 * Appends an instruction to the current block. 
 */
cljs.core.async.impl.ioc_macros_runtime.add_instruction = (function cljs$core$async$impl$ioc_macros_runtime$add_instruction(inst){
var inst_id = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"inst_"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.core.async.impl.ioc-macros-runtime","instruction","cljs.core.async.impl.ioc-macros-runtime/instruction",(-2068204214)),true], null));
var inst__$1 = cljs.core.assoc.call(null,inst,new cljs.core.Keyword(null,"id","id",(-1388402092)),inst_id);
return ((function (inst_id,inst__$1){
return (function (plan_263){
var vec__264 = cljs.core.async.impl.ioc_macros_runtime.get_block.call(null).call(null,plan_263);
var blk_id = cljs.core.nth.call(null,vec__264,(0),null);
var plan_263__$1 = cljs.core.nth.call(null,vec__264,(1),null);
var vec__267 = cljs.core.async.impl.ioc_macros_runtime.update_in_plan.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",(-610462153)),blk_id], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),inst__$1).call(null,plan_263__$1);
var _ = cljs.core.nth.call(null,vec__267,(0),null);
var plan_263__$2 = cljs.core.nth.call(null,vec__267,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [inst_id,plan_263__$2], null);
});
;})(inst_id,inst__$1))
});

/**
 * @interface
 */
cljs.core.async.impl.ioc_macros_runtime.IInstruction = function(){};

/**
 * Returns a list of instructions this instruction reads from
 */
cljs.core.async.impl.ioc_macros_runtime.reads_from = (function cljs$core$async$impl$ioc_macros_runtime$reads_from(this$){
if((((!((this$ == null)))) && ((!((this$.cljs$core$async$impl$ioc_macros_runtime$IInstruction$reads_from$arity$1 == null)))))){
return this$.cljs$core$async$impl$ioc_macros_runtime$IInstruction$reads_from$arity$1(this$);
} else {
var x__9839__auto__ = (((this$ == null))?null:this$);
var m__9840__auto__ = (cljs.core.async.impl.ioc_macros_runtime.reads_from[goog.typeOf(x__9839__auto__)]);
if((!((m__9840__auto__ == null)))){
return m__9840__auto__.call(null,this$);
} else {
var m__9837__auto__ = (cljs.core.async.impl.ioc_macros_runtime.reads_from["_"]);
if((!((m__9837__auto__ == null)))){
return m__9837__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IInstruction.reads-from",this$);
}
}
}
});

/**
 * Returns a list of instructions this instruction writes to
 */
cljs.core.async.impl.ioc_macros_runtime.writes_to = (function cljs$core$async$impl$ioc_macros_runtime$writes_to(this$){
if((((!((this$ == null)))) && ((!((this$.cljs$core$async$impl$ioc_macros_runtime$IInstruction$writes_to$arity$1 == null)))))){
return this$.cljs$core$async$impl$ioc_macros_runtime$IInstruction$writes_to$arity$1(this$);
} else {
var x__9839__auto__ = (((this$ == null))?null:this$);
var m__9840__auto__ = (cljs.core.async.impl.ioc_macros_runtime.writes_to[goog.typeOf(x__9839__auto__)]);
if((!((m__9840__auto__ == null)))){
return m__9840__auto__.call(null,this$);
} else {
var m__9837__auto__ = (cljs.core.async.impl.ioc_macros_runtime.writes_to["_"]);
if((!((m__9837__auto__ == null)))){
return m__9837__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IInstruction.writes-to",this$);
}
}
}
});

/**
 * Returns all the blocks this instruction references
 */
cljs.core.async.impl.ioc_macros_runtime.block_references = (function cljs$core$async$impl$ioc_macros_runtime$block_references(this$){
if((((!((this$ == null)))) && ((!((this$.cljs$core$async$impl$ioc_macros_runtime$IInstruction$block_references$arity$1 == null)))))){
return this$.cljs$core$async$impl$ioc_macros_runtime$IInstruction$block_references$arity$1(this$);
} else {
var x__9839__auto__ = (((this$ == null))?null:this$);
var m__9840__auto__ = (cljs.core.async.impl.ioc_macros_runtime.block_references[goog.typeOf(x__9839__auto__)]);
if((!((m__9840__auto__ == null)))){
return m__9840__auto__.call(null,this$);
} else {
var m__9837__auto__ = (cljs.core.async.impl.ioc_macros_runtime.block_references["_"]);
if((!((m__9837__auto__ == null)))){
return m__9837__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IInstruction.block-references",this$);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.impl.ioc_macros_runtime.IEmittableInstruction = function(){};

/**
 * Returns the clojure code that this instruction represents
 */
cljs.core.async.impl.ioc_macros_runtime.emit_instruction = (function cljs$core$async$impl$ioc_macros_runtime$emit_instruction(this$,state_sym){
if((((!((this$ == null)))) && ((!((this$.cljs$core$async$impl$ioc_macros_runtime$IEmittableInstruction$emit_instruction$arity$2 == null)))))){
return this$.cljs$core$async$impl$ioc_macros_runtime$IEmittableInstruction$emit_instruction$arity$2(this$,state_sym);
} else {
var x__9839__auto__ = (((this$ == null))?null:this$);
var m__9840__auto__ = (cljs.core.async.impl.ioc_macros_runtime.emit_instruction[goog.typeOf(x__9839__auto__)]);
if((!((m__9840__auto__ == null)))){
return m__9840__auto__.call(null,this$,state_sym);
} else {
var m__9837__auto__ = (cljs.core.async.impl.ioc_macros_runtime.emit_instruction["_"]);
if((!((m__9837__auto__ == null)))){
return m__9837__auto__.call(null,this$,state_sym);
} else {
throw cljs.core.missing_protocol.call(null,"IEmittableInstruction.emit-instruction",this$);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.impl.ioc_macros_runtime.ITerminator = function(){};

/**
 * Returns a unique symbol for this instruction
 */
cljs.core.async.impl.ioc_macros_runtime.terminator_code = (function cljs$core$async$impl$ioc_macros_runtime$terminator_code(this$){
if((((!((this$ == null)))) && ((!((this$.cljs$core$async$impl$ioc_macros_runtime$ITerminator$terminator_code$arity$1 == null)))))){
return this$.cljs$core$async$impl$ioc_macros_runtime$ITerminator$terminator_code$arity$1(this$);
} else {
var x__9839__auto__ = (((this$ == null))?null:this$);
var m__9840__auto__ = (cljs.core.async.impl.ioc_macros_runtime.terminator_code[goog.typeOf(x__9839__auto__)]);
if((!((m__9840__auto__ == null)))){
return m__9840__auto__.call(null,this$);
} else {
var m__9837__auto__ = (cljs.core.async.impl.ioc_macros_runtime.terminator_code["_"]);
if((!((m__9837__auto__ == null)))){
return m__9837__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"ITerminator.terminator-code",this$);
}
}
}
});

/**
 * Emites the code to terminate a given block
 */
cljs.core.async.impl.ioc_macros_runtime.terminate_block = (function cljs$core$async$impl$ioc_macros_runtime$terminate_block(this$,state_sym,custom_terminators){
if((((!((this$ == null)))) && ((!((this$.cljs$core$async$impl$ioc_macros_runtime$ITerminator$terminate_block$arity$3 == null)))))){
return this$.cljs$core$async$impl$ioc_macros_runtime$ITerminator$terminate_block$arity$3(this$,state_sym,custom_terminators);
} else {
var x__9839__auto__ = (((this$ == null))?null:this$);
var m__9840__auto__ = (cljs.core.async.impl.ioc_macros_runtime.terminate_block[goog.typeOf(x__9839__auto__)]);
if((!((m__9840__auto__ == null)))){
return m__9840__auto__.call(null,this$,state_sym,custom_terminators);
} else {
var m__9837__auto__ = (cljs.core.async.impl.ioc_macros_runtime.terminate_block["_"]);
if((!((m__9837__auto__ == null)))){
return m__9837__auto__.call(null,this$,state_sym,custom_terminators);
} else {
throw cljs.core.missing_protocol.call(null,"ITerminator.terminate-block",this$);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.async.impl.ioc_macros_runtime.IEmittableInstruction}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.async.impl.ioc_macros_runtime.IInstruction}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.core.async.impl.ioc_macros_runtime.Const = (function (value,__meta,__extmap,__hash){
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = -2064251126;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.core.async.impl.ioc_macros_runtime.Const.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9797__auto__,k__9798__auto__){
var self__ = this;
var this__9797__auto____$1 = this;
return this__9797__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9798__auto__,null);
});

cljs.core.async.impl.ioc_macros_runtime.Const.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9799__auto__,k271,else__9800__auto__){
var self__ = this;
var this__9799__auto____$1 = this;
var G__275 = k271;
var G__275__$1 = (((G__275 instanceof cljs.core.Keyword))?G__275.fqn:null);
switch (G__275__$1) {
case "value":
return self__.value;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k271,else__9800__auto__);

}
});

cljs.core.async.impl.ioc_macros_runtime.Const.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__9816__auto__,f__9817__auto__,init__9818__auto__){
var self__ = this;
var this__9816__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__9816__auto____$1){
return (function (ret__9819__auto__,p__276){
var vec__277 = p__276;
var k__9820__auto__ = cljs.core.nth.call(null,vec__277,(0),null);
var v__9821__auto__ = cljs.core.nth.call(null,vec__277,(1),null);
return f__9817__auto__.call(null,ret__9819__auto__,k__9820__auto__,v__9821__auto__);
});})(this__9816__auto____$1))
,init__9818__auto__,this__9816__auto____$1);
});

cljs.core.async.impl.ioc_macros_runtime.Const.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9811__auto__,writer__9812__auto__,opts__9813__auto__){
var self__ = this;
var this__9811__auto____$1 = this;
var pr_pair__9814__auto__ = ((function (this__9811__auto____$1){
return (function (keyval__9815__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__9812__auto__,cljs.core.pr_writer,""," ","",opts__9813__auto__,keyval__9815__auto__);
});})(this__9811__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__9812__auto__,pr_pair__9814__auto__,"#cljs.core.async.impl.ioc-macros-runtime.Const{",", ","}",opts__9813__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",(305978217)),self__.value],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_macros_runtime.Const.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__270){
var self__ = this;
var G__270__$1 = this;
return (new cljs.core.RecordIter((0),G__270__$1,(1),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",(305978217))], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.core.async.impl.ioc_macros_runtime.Const.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9795__auto__){
var self__ = this;
var this__9795__auto____$1 = this;
return self__.__meta;
});

cljs.core.async.impl.ioc_macros_runtime.Const.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9792__auto__){
var self__ = this;
var this__9792__auto____$1 = this;
return (new cljs.core.async.impl.ioc_macros_runtime.Const(self__.value,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_macros_runtime.Const.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9801__auto__){
var self__ = this;
var this__9801__auto____$1 = this;
return ((1) + cljs.core.count.call(null,self__.__extmap));
});

cljs.core.async.impl.ioc_macros_runtime.Const.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9793__auto__){
var self__ = this;
var this__9793__auto____$1 = this;
var h__9592__auto__ = self__.__hash;
if((!((h__9592__auto__ == null)))){
return h__9592__auto__;
} else {
var h__9592__auto____$1 = ((function (h__9592__auto__,this__9793__auto____$1){
return (function (coll__9794__auto__){
return ((601104274) ^ cljs.core.hash_unordered_coll.call(null,coll__9794__auto__));
});})(h__9592__auto__,this__9793__auto____$1))
.call(null,this__9793__auto____$1);
self__.__hash = h__9592__auto____$1;

return h__9592__auto____$1;
}
});

cljs.core.async.impl.ioc_macros_runtime.Const.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this272,other273){
var self__ = this;
var this272__$1 = this;
return (((!((other273 == null)))) && ((this272__$1.constructor === other273.constructor)) && (cljs.core._EQ_.call(null,this272__$1.value,other273.value)) && (cljs.core._EQ_.call(null,this272__$1.__extmap,other273.__extmap)));
});

cljs.core.async.impl.ioc_macros_runtime.Const.prototype.cljs$core$async$impl$ioc_macros_runtime$IEmittableInstruction$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.ioc_macros_runtime.Const.prototype.cljs$core$async$impl$ioc_macros_runtime$IEmittableInstruction$emit_instruction$arity$2 = (function (this$,state_sym){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.call(null,self__.value,new cljs.core.Keyword("cljs.core.async.impl.ioc-macros-runtime","value","cljs.core.async.impl.ioc-macros-runtime/value",(1763202694)))){
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"id","id",(-1388402092)).cljs$core$IFn$_invoke$arity$1(this$__$1),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","aget","cljs.core/aget",(6345791),null),null,(1),null)),(new cljs.core.List(null,state_sym,null,(1),null)),(new cljs.core.List(null,(2),null,(1),null)))),null,(1),null)))));
} else {
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"id","id",(-1388402092)).cljs$core$IFn$_invoke$arity$1(this$__$1),null,(1),null)),(new cljs.core.List(null,self__.value,null,(1),null)))));
}
});

cljs.core.async.impl.ioc_macros_runtime.Const.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.ioc_macros_runtime.Const.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$reads_from$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.value], null);
});

cljs.core.async.impl.ioc_macros_runtime.Const.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$writes_to$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",(-1388402092)).cljs$core$IFn$_invoke$arity$1(this$__$1)], null);
});

cljs.core.async.impl.ioc_macros_runtime.Const.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$block_references$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.PersistentVector.EMPTY;
});

cljs.core.async.impl.ioc_macros_runtime.Const.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9806__auto__,k__9807__auto__){
var self__ = this;
var this__9806__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",(305978217)),null], null), null),k__9807__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__9806__auto____$1),self__.__meta),k__9807__auto__);
} else {
return (new cljs.core.async.impl.ioc_macros_runtime.Const(self__.value,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__9807__auto__)),null));
}
});

cljs.core.async.impl.ioc_macros_runtime.Const.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9804__auto__,k__9805__auto__,G__270){
var self__ = this;
var this__9804__auto____$1 = this;
var pred__280 = cljs.core.keyword_identical_QMARK_;
var expr__281 = k__9805__auto__;
if(cljs.core.truth_(pred__280.call(null,new cljs.core.Keyword(null,"value","value",(305978217)),expr__281))){
return (new cljs.core.async.impl.ioc_macros_runtime.Const(G__270,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.async.impl.ioc_macros_runtime.Const(self__.value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__9805__auto__,G__270),null));
}
});

cljs.core.async.impl.ioc_macros_runtime.Const.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9809__auto__){
var self__ = this;
var this__9809__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"value","value",(305978217)),self__.value,null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_macros_runtime.Const.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9796__auto__,G__270){
var self__ = this;
var this__9796__auto____$1 = this;
return (new cljs.core.async.impl.ioc_macros_runtime.Const(self__.value,G__270,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_macros_runtime.Const.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9802__auto__,entry__9803__auto__){
var self__ = this;
var this__9802__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__9803__auto__)){
return this__9802__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__9803__auto__,(0)),cljs.core._nth.call(null,entry__9803__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__9802__auto____$1,entry__9803__auto__);
}
});

cljs.core.async.impl.ioc_macros_runtime.Const.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",(1946509744),null)], null);
});

cljs.core.async.impl.ioc_macros_runtime.Const.cljs$lang$type = true;

cljs.core.async.impl.ioc_macros_runtime.Const.cljs$lang$ctorPrSeq = (function (this__9826__auto__){
return (new cljs.core.List(null,"cljs.core.async.impl.ioc-macros-runtime/Const",null,(1),null));
});

cljs.core.async.impl.ioc_macros_runtime.Const.cljs$lang$ctorPrWriter = (function (this__9826__auto__,writer__9827__auto__){
return cljs.core._write.call(null,writer__9827__auto__,"cljs.core.async.impl.ioc-macros-runtime/Const");
});

/**
 * Positional factory function for cljs.core.async.impl.ioc-macros-runtime/Const.
 */
cljs.core.async.impl.ioc_macros_runtime.__GT_Const = (function cljs$core$async$impl$ioc_macros_runtime$__GT_Const(value){
return (new cljs.core.async.impl.ioc_macros_runtime.Const(value,null,null,null));
});

/**
 * Factory function for cljs.core.async.impl.ioc-macros-runtime/Const, taking a map of keywords to field values.
 */
cljs.core.async.impl.ioc_macros_runtime.map__GT_Const = (function cljs$core$async$impl$ioc_macros_runtime$map__GT_Const(G__274){
var extmap__9825__auto__ = (function (){var G__283 = cljs.core.dissoc.call(null,G__274,new cljs.core.Keyword(null,"value","value",(305978217)));
if(cljs.core.record_QMARK_.call(null,G__274)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__283);
} else {
return G__283;
}
})();
return (new cljs.core.async.impl.ioc_macros_runtime.Const(new cljs.core.Keyword(null,"value","value",(305978217)).cljs$core$IFn$_invoke$arity$1(G__274),null,cljs.core.not_empty.call(null,extmap__9825__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.async.impl.ioc_macros_runtime.ITerminator}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.async.impl.ioc_macros_runtime.IInstruction}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.core.async.impl.ioc_macros_runtime.CustomTerminator = (function (f,blk,values,__meta,__extmap,__hash){
this.f = f;
this.blk = blk;
this.values = values;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = -2064251126;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.core.async.impl.ioc_macros_runtime.CustomTerminator.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9797__auto__,k__9798__auto__){
var self__ = this;
var this__9797__auto____$1 = this;
return this__9797__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9798__auto__,null);
});

cljs.core.async.impl.ioc_macros_runtime.CustomTerminator.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9799__auto__,k286,else__9800__auto__){
var self__ = this;
var this__9799__auto____$1 = this;
var G__290 = k286;
var G__290__$1 = (((G__290 instanceof cljs.core.Keyword))?G__290.fqn:null);
switch (G__290__$1) {
case "f":
return self__.f;

break;
case "blk":
return self__.blk;

break;
case "values":
return self__.values;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k286,else__9800__auto__);

}
});

cljs.core.async.impl.ioc_macros_runtime.CustomTerminator.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__9816__auto__,f__9817__auto__,init__9818__auto__){
var self__ = this;
var this__9816__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__9816__auto____$1){
return (function (ret__9819__auto__,p__291){
var vec__292 = p__291;
var k__9820__auto__ = cljs.core.nth.call(null,vec__292,(0),null);
var v__9821__auto__ = cljs.core.nth.call(null,vec__292,(1),null);
return f__9817__auto__.call(null,ret__9819__auto__,k__9820__auto__,v__9821__auto__);
});})(this__9816__auto____$1))
,init__9818__auto__,this__9816__auto____$1);
});

cljs.core.async.impl.ioc_macros_runtime.CustomTerminator.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9811__auto__,writer__9812__auto__,opts__9813__auto__){
var self__ = this;
var this__9811__auto____$1 = this;
var pr_pair__9814__auto__ = ((function (this__9811__auto____$1){
return (function (keyval__9815__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__9812__auto__,cljs.core.pr_writer,""," ","",opts__9813__auto__,keyval__9815__auto__);
});})(this__9811__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__9812__auto__,pr_pair__9814__auto__,"#cljs.core.async.impl.ioc-macros-runtime.CustomTerminator{",", ","}",opts__9813__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"f","f",(-1597136552)),self__.f],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"blk","blk",(307667994)),self__.blk],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"values","values",(372645556)),self__.values],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_macros_runtime.CustomTerminator.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__285){
var self__ = this;
var G__285__$1 = this;
return (new cljs.core.RecordIter((0),G__285__$1,(3),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f","f",(-1597136552)),new cljs.core.Keyword(null,"blk","blk",(307667994)),new cljs.core.Keyword(null,"values","values",(372645556))], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.core.async.impl.ioc_macros_runtime.CustomTerminator.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9795__auto__){
var self__ = this;
var this__9795__auto____$1 = this;
return self__.__meta;
});

cljs.core.async.impl.ioc_macros_runtime.CustomTerminator.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9792__auto__){
var self__ = this;
var this__9792__auto____$1 = this;
return (new cljs.core.async.impl.ioc_macros_runtime.CustomTerminator(self__.f,self__.blk,self__.values,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_macros_runtime.CustomTerminator.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9801__auto__){
var self__ = this;
var this__9801__auto____$1 = this;
return ((3) + cljs.core.count.call(null,self__.__extmap));
});

cljs.core.async.impl.ioc_macros_runtime.CustomTerminator.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9793__auto__){
var self__ = this;
var this__9793__auto____$1 = this;
var h__9592__auto__ = self__.__hash;
if((!((h__9592__auto__ == null)))){
return h__9592__auto__;
} else {
var h__9592__auto____$1 = ((function (h__9592__auto__,this__9793__auto____$1){
return (function (coll__9794__auto__){
return ((-32571799) ^ cljs.core.hash_unordered_coll.call(null,coll__9794__auto__));
});})(h__9592__auto__,this__9793__auto____$1))
.call(null,this__9793__auto____$1);
self__.__hash = h__9592__auto____$1;

return h__9592__auto____$1;
}
});

cljs.core.async.impl.ioc_macros_runtime.CustomTerminator.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this287,other288){
var self__ = this;
var this287__$1 = this;
return (((!((other288 == null)))) && ((this287__$1.constructor === other288.constructor)) && (cljs.core._EQ_.call(null,this287__$1.f,other288.f)) && (cljs.core._EQ_.call(null,this287__$1.blk,other288.blk)) && (cljs.core._EQ_.call(null,this287__$1.values,other288.values)) && (cljs.core._EQ_.call(null,this287__$1.__extmap,other288.__extmap)));
});

cljs.core.async.impl.ioc_macros_runtime.CustomTerminator.prototype.cljs$core$async$impl$ioc_macros_runtime$ITerminator$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.ioc_macros_runtime.CustomTerminator.prototype.cljs$core$async$impl$ioc_macros_runtime$ITerminator$terminate_block$arity$3 = (function (this$,state_sym,_){
var self__ = this;
var this$__$1 = this;
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,self__.f,null,(1),null)),(new cljs.core.List(null,state_sym,null,(1),null)),(new cljs.core.List(null,self__.blk,null,(1),null)),self__.values));
});

cljs.core.async.impl.ioc_macros_runtime.CustomTerminator.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.ioc_macros_runtime.CustomTerminator.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$reads_from$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.values;
});

cljs.core.async.impl.ioc_macros_runtime.CustomTerminator.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$writes_to$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.PersistentVector.EMPTY;
});

cljs.core.async.impl.ioc_macros_runtime.CustomTerminator.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$block_references$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.PersistentVector.EMPTY;
});

cljs.core.async.impl.ioc_macros_runtime.CustomTerminator.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9806__auto__,k__9807__auto__){
var self__ = this;
var this__9806__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"f","f",(-1597136552)),null,new cljs.core.Keyword(null,"blk","blk",(307667994)),null,new cljs.core.Keyword(null,"values","values",(372645556)),null], null), null),k__9807__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__9806__auto____$1),self__.__meta),k__9807__auto__);
} else {
return (new cljs.core.async.impl.ioc_macros_runtime.CustomTerminator(self__.f,self__.blk,self__.values,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__9807__auto__)),null));
}
});

cljs.core.async.impl.ioc_macros_runtime.CustomTerminator.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9804__auto__,k__9805__auto__,G__285){
var self__ = this;
var this__9804__auto____$1 = this;
var pred__295 = cljs.core.keyword_identical_QMARK_;
var expr__296 = k__9805__auto__;
if(cljs.core.truth_(pred__295.call(null,new cljs.core.Keyword(null,"f","f",(-1597136552)),expr__296))){
return (new cljs.core.async.impl.ioc_macros_runtime.CustomTerminator(G__285,self__.blk,self__.values,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__295.call(null,new cljs.core.Keyword(null,"blk","blk",(307667994)),expr__296))){
return (new cljs.core.async.impl.ioc_macros_runtime.CustomTerminator(self__.f,G__285,self__.values,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__295.call(null,new cljs.core.Keyword(null,"values","values",(372645556)),expr__296))){
return (new cljs.core.async.impl.ioc_macros_runtime.CustomTerminator(self__.f,self__.blk,G__285,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.async.impl.ioc_macros_runtime.CustomTerminator(self__.f,self__.blk,self__.values,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__9805__auto__,G__285),null));
}
}
}
});

cljs.core.async.impl.ioc_macros_runtime.CustomTerminator.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9809__auto__){
var self__ = this;
var this__9809__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"f","f",(-1597136552)),self__.f,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"blk","blk",(307667994)),self__.blk,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"values","values",(372645556)),self__.values,null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_macros_runtime.CustomTerminator.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9796__auto__,G__285){
var self__ = this;
var this__9796__auto____$1 = this;
return (new cljs.core.async.impl.ioc_macros_runtime.CustomTerminator(self__.f,self__.blk,self__.values,G__285,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_macros_runtime.CustomTerminator.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9802__auto__,entry__9803__auto__){
var self__ = this;
var this__9802__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__9803__auto__)){
return this__9802__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__9803__auto__,(0)),cljs.core._nth.call(null,entry__9803__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__9802__auto____$1,entry__9803__auto__);
}
});

cljs.core.async.impl.ioc_macros_runtime.CustomTerminator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"blk","blk",(1948199521),null),new cljs.core.Symbol(null,"values","values",(2013177083),null)], null);
});

cljs.core.async.impl.ioc_macros_runtime.CustomTerminator.cljs$lang$type = true;

cljs.core.async.impl.ioc_macros_runtime.CustomTerminator.cljs$lang$ctorPrSeq = (function (this__9826__auto__){
return (new cljs.core.List(null,"cljs.core.async.impl.ioc-macros-runtime/CustomTerminator",null,(1),null));
});

cljs.core.async.impl.ioc_macros_runtime.CustomTerminator.cljs$lang$ctorPrWriter = (function (this__9826__auto__,writer__9827__auto__){
return cljs.core._write.call(null,writer__9827__auto__,"cljs.core.async.impl.ioc-macros-runtime/CustomTerminator");
});

/**
 * Positional factory function for cljs.core.async.impl.ioc-macros-runtime/CustomTerminator.
 */
cljs.core.async.impl.ioc_macros_runtime.__GT_CustomTerminator = (function cljs$core$async$impl$ioc_macros_runtime$__GT_CustomTerminator(f,blk,values){
return (new cljs.core.async.impl.ioc_macros_runtime.CustomTerminator(f,blk,values,null,null,null));
});

/**
 * Factory function for cljs.core.async.impl.ioc-macros-runtime/CustomTerminator, taking a map of keywords to field values.
 */
cljs.core.async.impl.ioc_macros_runtime.map__GT_CustomTerminator = (function cljs$core$async$impl$ioc_macros_runtime$map__GT_CustomTerminator(G__289){
var extmap__9825__auto__ = (function (){var G__298 = cljs.core.dissoc.call(null,G__289,new cljs.core.Keyword(null,"f","f",(-1597136552)),new cljs.core.Keyword(null,"blk","blk",(307667994)),new cljs.core.Keyword(null,"values","values",(372645556)));
if(cljs.core.record_QMARK_.call(null,G__289)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__298);
} else {
return G__298;
}
})();
return (new cljs.core.async.impl.ioc_macros_runtime.CustomTerminator(new cljs.core.Keyword(null,"f","f",(-1597136552)).cljs$core$IFn$_invoke$arity$1(G__289),new cljs.core.Keyword(null,"blk","blk",(307667994)).cljs$core$IFn$_invoke$arity$1(G__289),new cljs.core.Keyword(null,"values","values",(372645556)).cljs$core$IFn$_invoke$arity$1(G__289),null,cljs.core.not_empty.call(null,extmap__9825__auto__),null));
});

cljs.core.async.impl.ioc_macros_runtime.emit_clashing_binds = (function cljs$core$async$impl$ioc_macros_runtime$emit_clashing_binds(recur_nodes,ids,clashes){
var temp_binds = cljs.core.reduce.call(null,(function (acc,i){
return cljs.core.assoc.call(null,acc,i,cljs.core.gensym.call(null,"tmp"));
}),cljs.core.PersistentArrayMap.EMPTY,clashes);
return cljs.core.concat.call(null,cljs.core.mapcat.call(null,((function (temp_binds){
return (function (i){
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,temp_binds.call(null,i),null,(1),null)),(new cljs.core.List(null,i,null,(1),null)))));
});})(temp_binds))
,clashes),cljs.core.mapcat.call(null,((function (temp_binds){
return (function (node,id){
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,node,null,(1),null)),(new cljs.core.List(null,cljs.core.get.call(null,temp_binds,id,id),null,(1),null)))));
});})(temp_binds))
,recur_nodes,ids));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.async.impl.ioc_macros_runtime.IEmittableInstruction}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.async.impl.ioc_macros_runtime.IInstruction}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.core.async.impl.ioc_macros_runtime.Recur = (function (recur_nodes,ids,__meta,__extmap,__hash){
this.recur_nodes = recur_nodes;
this.ids = ids;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = -2064251126;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.core.async.impl.ioc_macros_runtime.Recur.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9797__auto__,k__9798__auto__){
var self__ = this;
var this__9797__auto____$1 = this;
return this__9797__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9798__auto__,null);
});

cljs.core.async.impl.ioc_macros_runtime.Recur.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9799__auto__,k301,else__9800__auto__){
var self__ = this;
var this__9799__auto____$1 = this;
var G__305 = k301;
var G__305__$1 = (((G__305 instanceof cljs.core.Keyword))?G__305.fqn:null);
switch (G__305__$1) {
case "recur-nodes":
return self__.recur_nodes;

break;
case "ids":
return self__.ids;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k301,else__9800__auto__);

}
});

cljs.core.async.impl.ioc_macros_runtime.Recur.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__9816__auto__,f__9817__auto__,init__9818__auto__){
var self__ = this;
var this__9816__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__9816__auto____$1){
return (function (ret__9819__auto__,p__306){
var vec__307 = p__306;
var k__9820__auto__ = cljs.core.nth.call(null,vec__307,(0),null);
var v__9821__auto__ = cljs.core.nth.call(null,vec__307,(1),null);
return f__9817__auto__.call(null,ret__9819__auto__,k__9820__auto__,v__9821__auto__);
});})(this__9816__auto____$1))
,init__9818__auto__,this__9816__auto____$1);
});

cljs.core.async.impl.ioc_macros_runtime.Recur.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9811__auto__,writer__9812__auto__,opts__9813__auto__){
var self__ = this;
var this__9811__auto____$1 = this;
var pr_pair__9814__auto__ = ((function (this__9811__auto____$1){
return (function (keyval__9815__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__9812__auto__,cljs.core.pr_writer,""," ","",opts__9813__auto__,keyval__9815__auto__);
});})(this__9811__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__9812__auto__,pr_pair__9814__auto__,"#cljs.core.async.impl.ioc-macros-runtime.Recur{",", ","}",opts__9813__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"recur-nodes","recur-nodes",(2077600963)),self__.recur_nodes],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ids","ids",(-998535796)),self__.ids],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_macros_runtime.Recur.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__300){
var self__ = this;
var G__300__$1 = this;
return (new cljs.core.RecordIter((0),G__300__$1,(2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"recur-nodes","recur-nodes",(2077600963)),new cljs.core.Keyword(null,"ids","ids",(-998535796))], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.core.async.impl.ioc_macros_runtime.Recur.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9795__auto__){
var self__ = this;
var this__9795__auto____$1 = this;
return self__.__meta;
});

cljs.core.async.impl.ioc_macros_runtime.Recur.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9792__auto__){
var self__ = this;
var this__9792__auto____$1 = this;
return (new cljs.core.async.impl.ioc_macros_runtime.Recur(self__.recur_nodes,self__.ids,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_macros_runtime.Recur.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9801__auto__){
var self__ = this;
var this__9801__auto____$1 = this;
return ((2) + cljs.core.count.call(null,self__.__extmap));
});

cljs.core.async.impl.ioc_macros_runtime.Recur.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9793__auto__){
var self__ = this;
var this__9793__auto____$1 = this;
var h__9592__auto__ = self__.__hash;
if((!((h__9592__auto__ == null)))){
return h__9592__auto__;
} else {
var h__9592__auto____$1 = ((function (h__9592__auto__,this__9793__auto____$1){
return (function (coll__9794__auto__){
return ((-212427540) ^ cljs.core.hash_unordered_coll.call(null,coll__9794__auto__));
});})(h__9592__auto__,this__9793__auto____$1))
.call(null,this__9793__auto____$1);
self__.__hash = h__9592__auto____$1;

return h__9592__auto____$1;
}
});

cljs.core.async.impl.ioc_macros_runtime.Recur.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this302,other303){
var self__ = this;
var this302__$1 = this;
return (((!((other303 == null)))) && ((this302__$1.constructor === other303.constructor)) && (cljs.core._EQ_.call(null,this302__$1.recur_nodes,other303.recur_nodes)) && (cljs.core._EQ_.call(null,this302__$1.ids,other303.ids)) && (cljs.core._EQ_.call(null,this302__$1.__extmap,other303.__extmap)));
});

cljs.core.async.impl.ioc_macros_runtime.Recur.prototype.cljs$core$async$impl$ioc_macros_runtime$IEmittableInstruction$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.ioc_macros_runtime.Recur.prototype.cljs$core$async$impl$ioc_macros_runtime$IEmittableInstruction$emit_instruction$arity$2 = (function (this$,state_sym){
var self__ = this;
var this$__$1 = this;
var temp__8960__auto__ = cljs.core.seq.call(null,clojure.set.intersection.call(null,cljs.core.set.call(null,self__.recur_nodes),cljs.core.set.call(null,self__.ids)));
if(temp__8960__auto__){
var overlap = temp__8960__auto__;
return cljs.core.async.impl.ioc_macros_runtime.emit_clashing_binds.call(null,self__.recur_nodes,self__.ids,overlap);
} else {
return cljs.core.mapcat.call(null,((function (temp__8960__auto__,this$__$1){
return (function (r,i){
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,r,null,(1),null)),(new cljs.core.List(null,i,null,(1),null)))));
});})(temp__8960__auto__,this$__$1))
,self__.recur_nodes,self__.ids);
}
});

cljs.core.async.impl.ioc_macros_runtime.Recur.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.ioc_macros_runtime.Recur.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$reads_from$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.ids;
});

cljs.core.async.impl.ioc_macros_runtime.Recur.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$writes_to$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.recur_nodes;
});

cljs.core.async.impl.ioc_macros_runtime.Recur.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$block_references$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.PersistentVector.EMPTY;
});

cljs.core.async.impl.ioc_macros_runtime.Recur.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9806__auto__,k__9807__auto__){
var self__ = this;
var this__9806__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"recur-nodes","recur-nodes",(2077600963)),null,new cljs.core.Keyword(null,"ids","ids",(-998535796)),null], null), null),k__9807__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__9806__auto____$1),self__.__meta),k__9807__auto__);
} else {
return (new cljs.core.async.impl.ioc_macros_runtime.Recur(self__.recur_nodes,self__.ids,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__9807__auto__)),null));
}
});

cljs.core.async.impl.ioc_macros_runtime.Recur.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9804__auto__,k__9805__auto__,G__300){
var self__ = this;
var this__9804__auto____$1 = this;
var pred__310 = cljs.core.keyword_identical_QMARK_;
var expr__311 = k__9805__auto__;
if(cljs.core.truth_(pred__310.call(null,new cljs.core.Keyword(null,"recur-nodes","recur-nodes",(2077600963)),expr__311))){
return (new cljs.core.async.impl.ioc_macros_runtime.Recur(G__300,self__.ids,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__310.call(null,new cljs.core.Keyword(null,"ids","ids",(-998535796)),expr__311))){
return (new cljs.core.async.impl.ioc_macros_runtime.Recur(self__.recur_nodes,G__300,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.async.impl.ioc_macros_runtime.Recur(self__.recur_nodes,self__.ids,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__9805__auto__,G__300),null));
}
}
});

cljs.core.async.impl.ioc_macros_runtime.Recur.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9809__auto__){
var self__ = this;
var this__9809__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"recur-nodes","recur-nodes",(2077600963)),self__.recur_nodes,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ids","ids",(-998535796)),self__.ids,null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_macros_runtime.Recur.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9796__auto__,G__300){
var self__ = this;
var this__9796__auto____$1 = this;
return (new cljs.core.async.impl.ioc_macros_runtime.Recur(self__.recur_nodes,self__.ids,G__300,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_macros_runtime.Recur.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9802__auto__,entry__9803__auto__){
var self__ = this;
var this__9802__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__9803__auto__)){
return this__9802__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__9803__auto__,(0)),cljs.core._nth.call(null,entry__9803__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__9802__auto____$1,entry__9803__auto__);
}
});

cljs.core.async.impl.ioc_macros_runtime.Recur.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"recur-nodes","recur-nodes",(-576834806),null),new cljs.core.Symbol(null,"ids","ids",(641995731),null)], null);
});

cljs.core.async.impl.ioc_macros_runtime.Recur.cljs$lang$type = true;

cljs.core.async.impl.ioc_macros_runtime.Recur.cljs$lang$ctorPrSeq = (function (this__9826__auto__){
return (new cljs.core.List(null,"cljs.core.async.impl.ioc-macros-runtime/Recur",null,(1),null));
});

cljs.core.async.impl.ioc_macros_runtime.Recur.cljs$lang$ctorPrWriter = (function (this__9826__auto__,writer__9827__auto__){
return cljs.core._write.call(null,writer__9827__auto__,"cljs.core.async.impl.ioc-macros-runtime/Recur");
});

/**
 * Positional factory function for cljs.core.async.impl.ioc-macros-runtime/Recur.
 */
cljs.core.async.impl.ioc_macros_runtime.__GT_Recur = (function cljs$core$async$impl$ioc_macros_runtime$__GT_Recur(recur_nodes,ids){
return (new cljs.core.async.impl.ioc_macros_runtime.Recur(recur_nodes,ids,null,null,null));
});

/**
 * Factory function for cljs.core.async.impl.ioc-macros-runtime/Recur, taking a map of keywords to field values.
 */
cljs.core.async.impl.ioc_macros_runtime.map__GT_Recur = (function cljs$core$async$impl$ioc_macros_runtime$map__GT_Recur(G__304){
var extmap__9825__auto__ = (function (){var G__313 = cljs.core.dissoc.call(null,G__304,new cljs.core.Keyword(null,"recur-nodes","recur-nodes",(2077600963)),new cljs.core.Keyword(null,"ids","ids",(-998535796)));
if(cljs.core.record_QMARK_.call(null,G__304)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__313);
} else {
return G__313;
}
})();
return (new cljs.core.async.impl.ioc_macros_runtime.Recur(new cljs.core.Keyword(null,"recur-nodes","recur-nodes",(2077600963)).cljs$core$IFn$_invoke$arity$1(G__304),new cljs.core.Keyword(null,"ids","ids",(-998535796)).cljs$core$IFn$_invoke$arity$1(G__304),null,cljs.core.not_empty.call(null,extmap__9825__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.async.impl.ioc_macros_runtime.IEmittableInstruction}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.async.impl.ioc_macros_runtime.IInstruction}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.core.async.impl.ioc_macros_runtime.Call = (function (refs,__meta,__extmap,__hash){
this.refs = refs;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = -2064251126;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.core.async.impl.ioc_macros_runtime.Call.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9797__auto__,k__9798__auto__){
var self__ = this;
var this__9797__auto____$1 = this;
return this__9797__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9798__auto__,null);
});

cljs.core.async.impl.ioc_macros_runtime.Call.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9799__auto__,k316,else__9800__auto__){
var self__ = this;
var this__9799__auto____$1 = this;
var G__320 = k316;
var G__320__$1 = (((G__320 instanceof cljs.core.Keyword))?G__320.fqn:null);
switch (G__320__$1) {
case "refs":
return self__.refs;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k316,else__9800__auto__);

}
});

cljs.core.async.impl.ioc_macros_runtime.Call.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__9816__auto__,f__9817__auto__,init__9818__auto__){
var self__ = this;
var this__9816__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__9816__auto____$1){
return (function (ret__9819__auto__,p__321){
var vec__322 = p__321;
var k__9820__auto__ = cljs.core.nth.call(null,vec__322,(0),null);
var v__9821__auto__ = cljs.core.nth.call(null,vec__322,(1),null);
return f__9817__auto__.call(null,ret__9819__auto__,k__9820__auto__,v__9821__auto__);
});})(this__9816__auto____$1))
,init__9818__auto__,this__9816__auto____$1);
});

cljs.core.async.impl.ioc_macros_runtime.Call.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9811__auto__,writer__9812__auto__,opts__9813__auto__){
var self__ = this;
var this__9811__auto____$1 = this;
var pr_pair__9814__auto__ = ((function (this__9811__auto____$1){
return (function (keyval__9815__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__9812__auto__,cljs.core.pr_writer,""," ","",opts__9813__auto__,keyval__9815__auto__);
});})(this__9811__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__9812__auto__,pr_pair__9814__auto__,"#cljs.core.async.impl.ioc-macros-runtime.Call{",", ","}",opts__9813__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"refs","refs",(-1560051448)),self__.refs],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_macros_runtime.Call.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__315){
var self__ = this;
var G__315__$1 = this;
return (new cljs.core.RecordIter((0),G__315__$1,(1),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"refs","refs",(-1560051448))], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.core.async.impl.ioc_macros_runtime.Call.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9795__auto__){
var self__ = this;
var this__9795__auto____$1 = this;
return self__.__meta;
});

cljs.core.async.impl.ioc_macros_runtime.Call.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9792__auto__){
var self__ = this;
var this__9792__auto____$1 = this;
return (new cljs.core.async.impl.ioc_macros_runtime.Call(self__.refs,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_macros_runtime.Call.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9801__auto__){
var self__ = this;
var this__9801__auto____$1 = this;
return ((1) + cljs.core.count.call(null,self__.__extmap));
});

cljs.core.async.impl.ioc_macros_runtime.Call.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9793__auto__){
var self__ = this;
var this__9793__auto____$1 = this;
var h__9592__auto__ = self__.__hash;
if((!((h__9592__auto__ == null)))){
return h__9592__auto__;
} else {
var h__9592__auto____$1 = ((function (h__9592__auto__,this__9793__auto____$1){
return (function (coll__9794__auto__){
return ((-230859129) ^ cljs.core.hash_unordered_coll.call(null,coll__9794__auto__));
});})(h__9592__auto__,this__9793__auto____$1))
.call(null,this__9793__auto____$1);
self__.__hash = h__9592__auto____$1;

return h__9592__auto____$1;
}
});

cljs.core.async.impl.ioc_macros_runtime.Call.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this317,other318){
var self__ = this;
var this317__$1 = this;
return (((!((other318 == null)))) && ((this317__$1.constructor === other318.constructor)) && (cljs.core._EQ_.call(null,this317__$1.refs,other318.refs)) && (cljs.core._EQ_.call(null,this317__$1.__extmap,other318.__extmap)));
});

cljs.core.async.impl.ioc_macros_runtime.Call.prototype.cljs$core$async$impl$ioc_macros_runtime$IEmittableInstruction$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.ioc_macros_runtime.Call.prototype.cljs$core$async$impl$ioc_macros_runtime$IEmittableInstruction$emit_instruction$arity$2 = (function (this$,state_sym){
var self__ = this;
var this$__$1 = this;
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"id","id",(-1388402092)).cljs$core$IFn$_invoke$arity$1(this$__$1),null,(1),null)),(new cljs.core.List(null,cljs.core.seq.call(null,self__.refs),null,(1),null)))));
});

cljs.core.async.impl.ioc_macros_runtime.Call.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.ioc_macros_runtime.Call.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$reads_from$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.refs;
});

cljs.core.async.impl.ioc_macros_runtime.Call.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$writes_to$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",(-1388402092)).cljs$core$IFn$_invoke$arity$1(this$__$1)], null);
});

cljs.core.async.impl.ioc_macros_runtime.Call.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$block_references$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.PersistentVector.EMPTY;
});

cljs.core.async.impl.ioc_macros_runtime.Call.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9806__auto__,k__9807__auto__){
var self__ = this;
var this__9806__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"refs","refs",(-1560051448)),null], null), null),k__9807__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__9806__auto____$1),self__.__meta),k__9807__auto__);
} else {
return (new cljs.core.async.impl.ioc_macros_runtime.Call(self__.refs,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__9807__auto__)),null));
}
});

cljs.core.async.impl.ioc_macros_runtime.Call.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9804__auto__,k__9805__auto__,G__315){
var self__ = this;
var this__9804__auto____$1 = this;
var pred__325 = cljs.core.keyword_identical_QMARK_;
var expr__326 = k__9805__auto__;
if(cljs.core.truth_(pred__325.call(null,new cljs.core.Keyword(null,"refs","refs",(-1560051448)),expr__326))){
return (new cljs.core.async.impl.ioc_macros_runtime.Call(G__315,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.async.impl.ioc_macros_runtime.Call(self__.refs,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__9805__auto__,G__315),null));
}
});

cljs.core.async.impl.ioc_macros_runtime.Call.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9809__auto__){
var self__ = this;
var this__9809__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"refs","refs",(-1560051448)),self__.refs,null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_macros_runtime.Call.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9796__auto__,G__315){
var self__ = this;
var this__9796__auto____$1 = this;
return (new cljs.core.async.impl.ioc_macros_runtime.Call(self__.refs,G__315,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_macros_runtime.Call.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9802__auto__,entry__9803__auto__){
var self__ = this;
var this__9802__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__9803__auto__)){
return this__9802__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__9803__auto__,(0)),cljs.core._nth.call(null,entry__9803__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__9802__auto____$1,entry__9803__auto__);
}
});

cljs.core.async.impl.ioc_macros_runtime.Call.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"refs","refs",(80480079),null)], null);
});

cljs.core.async.impl.ioc_macros_runtime.Call.cljs$lang$type = true;

cljs.core.async.impl.ioc_macros_runtime.Call.cljs$lang$ctorPrSeq = (function (this__9826__auto__){
return (new cljs.core.List(null,"cljs.core.async.impl.ioc-macros-runtime/Call",null,(1),null));
});

cljs.core.async.impl.ioc_macros_runtime.Call.cljs$lang$ctorPrWriter = (function (this__9826__auto__,writer__9827__auto__){
return cljs.core._write.call(null,writer__9827__auto__,"cljs.core.async.impl.ioc-macros-runtime/Call");
});

/**
 * Positional factory function for cljs.core.async.impl.ioc-macros-runtime/Call.
 */
cljs.core.async.impl.ioc_macros_runtime.__GT_Call = (function cljs$core$async$impl$ioc_macros_runtime$__GT_Call(refs){
return (new cljs.core.async.impl.ioc_macros_runtime.Call(refs,null,null,null));
});

/**
 * Factory function for cljs.core.async.impl.ioc-macros-runtime/Call, taking a map of keywords to field values.
 */
cljs.core.async.impl.ioc_macros_runtime.map__GT_Call = (function cljs$core$async$impl$ioc_macros_runtime$map__GT_Call(G__319){
var extmap__9825__auto__ = (function (){var G__328 = cljs.core.dissoc.call(null,G__319,new cljs.core.Keyword(null,"refs","refs",(-1560051448)));
if(cljs.core.record_QMARK_.call(null,G__319)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__328);
} else {
return G__328;
}
})();
return (new cljs.core.async.impl.ioc_macros_runtime.Call(new cljs.core.Keyword(null,"refs","refs",(-1560051448)).cljs$core$IFn$_invoke$arity$1(G__319),null,cljs.core.not_empty.call(null,extmap__9825__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.async.impl.ioc_macros_runtime.ITerminator}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.async.impl.ioc_macros_runtime.IInstruction}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.core.async.impl.ioc_macros_runtime.Case = (function (val_id,test_vals,jmp_blocks,default_block,__meta,__extmap,__hash){
this.val_id = val_id;
this.test_vals = test_vals;
this.jmp_blocks = jmp_blocks;
this.default_block = default_block;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = -2064251126;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.core.async.impl.ioc_macros_runtime.Case.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9797__auto__,k__9798__auto__){
var self__ = this;
var this__9797__auto____$1 = this;
return this__9797__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9798__auto__,null);
});

cljs.core.async.impl.ioc_macros_runtime.Case.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9799__auto__,k331,else__9800__auto__){
var self__ = this;
var this__9799__auto____$1 = this;
var G__335 = k331;
var G__335__$1 = (((G__335 instanceof cljs.core.Keyword))?G__335.fqn:null);
switch (G__335__$1) {
case "val-id":
return self__.val_id;

break;
case "test-vals":
return self__.test_vals;

break;
case "jmp-blocks":
return self__.jmp_blocks;

break;
case "default-block":
return self__.default_block;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k331,else__9800__auto__);

}
});

cljs.core.async.impl.ioc_macros_runtime.Case.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__9816__auto__,f__9817__auto__,init__9818__auto__){
var self__ = this;
var this__9816__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__9816__auto____$1){
return (function (ret__9819__auto__,p__336){
var vec__337 = p__336;
var k__9820__auto__ = cljs.core.nth.call(null,vec__337,(0),null);
var v__9821__auto__ = cljs.core.nth.call(null,vec__337,(1),null);
return f__9817__auto__.call(null,ret__9819__auto__,k__9820__auto__,v__9821__auto__);
});})(this__9816__auto____$1))
,init__9818__auto__,this__9816__auto____$1);
});

cljs.core.async.impl.ioc_macros_runtime.Case.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9811__auto__,writer__9812__auto__,opts__9813__auto__){
var self__ = this;
var this__9811__auto____$1 = this;
var pr_pair__9814__auto__ = ((function (this__9811__auto____$1){
return (function (keyval__9815__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__9812__auto__,cljs.core.pr_writer,""," ","",opts__9813__auto__,keyval__9815__auto__);
});})(this__9811__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__9812__auto__,pr_pair__9814__auto__,"#cljs.core.async.impl.ioc-macros-runtime.Case{",", ","}",opts__9813__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val-id","val-id",(-1846677573)),self__.val_id],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"test-vals","test-vals",(563777481)),self__.test_vals],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"jmp-blocks","jmp-blocks",(339606241)),self__.jmp_blocks],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"default-block","default-block",(841911023)),self__.default_block],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_macros_runtime.Case.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__330){
var self__ = this;
var G__330__$1 = this;
return (new cljs.core.RecordIter((0),G__330__$1,(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"val-id","val-id",(-1846677573)),new cljs.core.Keyword(null,"test-vals","test-vals",(563777481)),new cljs.core.Keyword(null,"jmp-blocks","jmp-blocks",(339606241)),new cljs.core.Keyword(null,"default-block","default-block",(841911023))], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.core.async.impl.ioc_macros_runtime.Case.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9795__auto__){
var self__ = this;
var this__9795__auto____$1 = this;
return self__.__meta;
});

cljs.core.async.impl.ioc_macros_runtime.Case.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9792__auto__){
var self__ = this;
var this__9792__auto____$1 = this;
return (new cljs.core.async.impl.ioc_macros_runtime.Case(self__.val_id,self__.test_vals,self__.jmp_blocks,self__.default_block,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_macros_runtime.Case.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9801__auto__){
var self__ = this;
var this__9801__auto____$1 = this;
return ((4) + cljs.core.count.call(null,self__.__extmap));
});

cljs.core.async.impl.ioc_macros_runtime.Case.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9793__auto__){
var self__ = this;
var this__9793__auto____$1 = this;
var h__9592__auto__ = self__.__hash;
if((!((h__9592__auto__ == null)))){
return h__9592__auto__;
} else {
var h__9592__auto____$1 = ((function (h__9592__auto__,this__9793__auto____$1){
return (function (coll__9794__auto__){
return ((831588367) ^ cljs.core.hash_unordered_coll.call(null,coll__9794__auto__));
});})(h__9592__auto__,this__9793__auto____$1))
.call(null,this__9793__auto____$1);
self__.__hash = h__9592__auto____$1;

return h__9592__auto____$1;
}
});

cljs.core.async.impl.ioc_macros_runtime.Case.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this332,other333){
var self__ = this;
var this332__$1 = this;
return (((!((other333 == null)))) && ((this332__$1.constructor === other333.constructor)) && (cljs.core._EQ_.call(null,this332__$1.val_id,other333.val_id)) && (cljs.core._EQ_.call(null,this332__$1.test_vals,other333.test_vals)) && (cljs.core._EQ_.call(null,this332__$1.jmp_blocks,other333.jmp_blocks)) && (cljs.core._EQ_.call(null,this332__$1.default_block,other333.default_block)) && (cljs.core._EQ_.call(null,this332__$1.__extmap,other333.__extmap)));
});

cljs.core.async.impl.ioc_macros_runtime.Case.prototype.cljs$core$async$impl$ioc_macros_runtime$ITerminator$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.ioc_macros_runtime.Case.prototype.cljs$core$async$impl$ioc_macros_runtime$ITerminator$terminate_block$arity$3 = (function (this$,state_sym,_){
var self__ = this;
var this$__$1 = this;
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",(1686842252),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","case","cljs.core/case",(-1674122212),null),null,(1),null)),(new cljs.core.List(null,self__.val_id,null,(1),null)),cljs.core.concat.call(null,cljs.core.mapcat.call(null,((function (this$__$1){
return (function (test,blk){
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,test,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core.async.impl.ioc-macros","aset-all!","cljs.core.async.impl.ioc-macros/aset-all!",(2072147987),null),null,(1),null)),(new cljs.core.List(null,state_sym,null,(1),null)),(new cljs.core.List(null,(1),null,(1),null)),(new cljs.core.List(null,blk,null,(1),null)))),null,(1),null)))));
});})(this$__$1))
,self__.test_vals,self__.jmp_blocks),(cljs.core.truth_(self__.default_block)?cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",(1686842252),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core.async.impl.ioc-macros","aset-all!","cljs.core.async.impl.ioc-macros/aset-all!",(2072147987),null),null,(1),null)),(new cljs.core.List(null,state_sym,null,(1),null)),(new cljs.core.List(null,(1),null,(1),null)),(new cljs.core.List(null,self__.default_block,null,(1),null)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"recur","recur",(-437573268)),null,(1),null)))),null,(1),null))))):null)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"recur","recur",(-437573268)),null,(1),null))));
});

cljs.core.async.impl.ioc_macros_runtime.Case.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.ioc_macros_runtime.Case.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$reads_from$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.val_id], null);
});

cljs.core.async.impl.ioc_macros_runtime.Case.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$writes_to$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.PersistentVector.EMPTY;
});

cljs.core.async.impl.ioc_macros_runtime.Case.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$block_references$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.PersistentVector.EMPTY;
});

cljs.core.async.impl.ioc_macros_runtime.Case.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9806__auto__,k__9807__auto__){
var self__ = this;
var this__9806__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"val-id","val-id",(-1846677573)),null,new cljs.core.Keyword(null,"test-vals","test-vals",(563777481)),null,new cljs.core.Keyword(null,"jmp-blocks","jmp-blocks",(339606241)),null,new cljs.core.Keyword(null,"default-block","default-block",(841911023)),null], null), null),k__9807__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__9806__auto____$1),self__.__meta),k__9807__auto__);
} else {
return (new cljs.core.async.impl.ioc_macros_runtime.Case(self__.val_id,self__.test_vals,self__.jmp_blocks,self__.default_block,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__9807__auto__)),null));
}
});

cljs.core.async.impl.ioc_macros_runtime.Case.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9804__auto__,k__9805__auto__,G__330){
var self__ = this;
var this__9804__auto____$1 = this;
var pred__340 = cljs.core.keyword_identical_QMARK_;
var expr__341 = k__9805__auto__;
if(cljs.core.truth_(pred__340.call(null,new cljs.core.Keyword(null,"val-id","val-id",(-1846677573)),expr__341))){
return (new cljs.core.async.impl.ioc_macros_runtime.Case(G__330,self__.test_vals,self__.jmp_blocks,self__.default_block,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__340.call(null,new cljs.core.Keyword(null,"test-vals","test-vals",(563777481)),expr__341))){
return (new cljs.core.async.impl.ioc_macros_runtime.Case(self__.val_id,G__330,self__.jmp_blocks,self__.default_block,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__340.call(null,new cljs.core.Keyword(null,"jmp-blocks","jmp-blocks",(339606241)),expr__341))){
return (new cljs.core.async.impl.ioc_macros_runtime.Case(self__.val_id,self__.test_vals,G__330,self__.default_block,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__340.call(null,new cljs.core.Keyword(null,"default-block","default-block",(841911023)),expr__341))){
return (new cljs.core.async.impl.ioc_macros_runtime.Case(self__.val_id,self__.test_vals,self__.jmp_blocks,G__330,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.async.impl.ioc_macros_runtime.Case(self__.val_id,self__.test_vals,self__.jmp_blocks,self__.default_block,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__9805__auto__,G__330),null));
}
}
}
}
});

cljs.core.async.impl.ioc_macros_runtime.Case.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9809__auto__){
var self__ = this;
var this__9809__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"val-id","val-id",(-1846677573)),self__.val_id,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"test-vals","test-vals",(563777481)),self__.test_vals,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"jmp-blocks","jmp-blocks",(339606241)),self__.jmp_blocks,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"default-block","default-block",(841911023)),self__.default_block,null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_macros_runtime.Case.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9796__auto__,G__330){
var self__ = this;
var this__9796__auto____$1 = this;
return (new cljs.core.async.impl.ioc_macros_runtime.Case(self__.val_id,self__.test_vals,self__.jmp_blocks,self__.default_block,G__330,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_macros_runtime.Case.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9802__auto__,entry__9803__auto__){
var self__ = this;
var this__9802__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__9803__auto__)){
return this__9802__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__9803__auto__,(0)),cljs.core._nth.call(null,entry__9803__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__9802__auto____$1,entry__9803__auto__);
}
});

cljs.core.async.impl.ioc_macros_runtime.Case.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val-id","val-id",(-206146046),null),new cljs.core.Symbol(null,"test-vals","test-vals",(-2090658288),null),new cljs.core.Symbol(null,"jmp-blocks","jmp-blocks",(1980137768),null),new cljs.core.Symbol(null,"default-block","default-block",(-1812524746),null)], null);
});

cljs.core.async.impl.ioc_macros_runtime.Case.cljs$lang$type = true;

cljs.core.async.impl.ioc_macros_runtime.Case.cljs$lang$ctorPrSeq = (function (this__9826__auto__){
return (new cljs.core.List(null,"cljs.core.async.impl.ioc-macros-runtime/Case",null,(1),null));
});

cljs.core.async.impl.ioc_macros_runtime.Case.cljs$lang$ctorPrWriter = (function (this__9826__auto__,writer__9827__auto__){
return cljs.core._write.call(null,writer__9827__auto__,"cljs.core.async.impl.ioc-macros-runtime/Case");
});

/**
 * Positional factory function for cljs.core.async.impl.ioc-macros-runtime/Case.
 */
cljs.core.async.impl.ioc_macros_runtime.__GT_Case = (function cljs$core$async$impl$ioc_macros_runtime$__GT_Case(val_id,test_vals,jmp_blocks,default_block){
return (new cljs.core.async.impl.ioc_macros_runtime.Case(val_id,test_vals,jmp_blocks,default_block,null,null,null));
});

/**
 * Factory function for cljs.core.async.impl.ioc-macros-runtime/Case, taking a map of keywords to field values.
 */
cljs.core.async.impl.ioc_macros_runtime.map__GT_Case = (function cljs$core$async$impl$ioc_macros_runtime$map__GT_Case(G__334){
var extmap__9825__auto__ = (function (){var G__343 = cljs.core.dissoc.call(null,G__334,new cljs.core.Keyword(null,"val-id","val-id",(-1846677573)),new cljs.core.Keyword(null,"test-vals","test-vals",(563777481)),new cljs.core.Keyword(null,"jmp-blocks","jmp-blocks",(339606241)),new cljs.core.Keyword(null,"default-block","default-block",(841911023)));
if(cljs.core.record_QMARK_.call(null,G__334)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__343);
} else {
return G__343;
}
})();
return (new cljs.core.async.impl.ioc_macros_runtime.Case(new cljs.core.Keyword(null,"val-id","val-id",(-1846677573)).cljs$core$IFn$_invoke$arity$1(G__334),new cljs.core.Keyword(null,"test-vals","test-vals",(563777481)).cljs$core$IFn$_invoke$arity$1(G__334),new cljs.core.Keyword(null,"jmp-blocks","jmp-blocks",(339606241)).cljs$core$IFn$_invoke$arity$1(G__334),new cljs.core.Keyword(null,"default-block","default-block",(841911023)).cljs$core$IFn$_invoke$arity$1(G__334),null,cljs.core.not_empty.call(null,extmap__9825__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.async.impl.ioc_macros_runtime.IEmittableInstruction}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.async.impl.ioc_macros_runtime.IInstruction}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.core.async.impl.ioc_macros_runtime.XFn = (function (fn_expr,local_names,local_refs,__meta,__extmap,__hash){
this.fn_expr = fn_expr;
this.local_names = local_names;
this.local_refs = local_refs;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = -2064251126;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.core.async.impl.ioc_macros_runtime.XFn.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9797__auto__,k__9798__auto__){
var self__ = this;
var this__9797__auto____$1 = this;
return this__9797__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9798__auto__,null);
});

cljs.core.async.impl.ioc_macros_runtime.XFn.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9799__auto__,k346,else__9800__auto__){
var self__ = this;
var this__9799__auto____$1 = this;
var G__350 = k346;
var G__350__$1 = (((G__350 instanceof cljs.core.Keyword))?G__350.fqn:null);
switch (G__350__$1) {
case "fn-expr":
return self__.fn_expr;

break;
case "local-names":
return self__.local_names;

break;
case "local-refs":
return self__.local_refs;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k346,else__9800__auto__);

}
});

cljs.core.async.impl.ioc_macros_runtime.XFn.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__9816__auto__,f__9817__auto__,init__9818__auto__){
var self__ = this;
var this__9816__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__9816__auto____$1){
return (function (ret__9819__auto__,p__351){
var vec__352 = p__351;
var k__9820__auto__ = cljs.core.nth.call(null,vec__352,(0),null);
var v__9821__auto__ = cljs.core.nth.call(null,vec__352,(1),null);
return f__9817__auto__.call(null,ret__9819__auto__,k__9820__auto__,v__9821__auto__);
});})(this__9816__auto____$1))
,init__9818__auto__,this__9816__auto____$1);
});

cljs.core.async.impl.ioc_macros_runtime.XFn.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9811__auto__,writer__9812__auto__,opts__9813__auto__){
var self__ = this;
var this__9811__auto____$1 = this;
var pr_pair__9814__auto__ = ((function (this__9811__auto____$1){
return (function (keyval__9815__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__9812__auto__,cljs.core.pr_writer,""," ","",opts__9813__auto__,keyval__9815__auto__);
});})(this__9811__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__9812__auto__,pr_pair__9814__auto__,"#cljs.core.async.impl.ioc-macros-runtime.XFn{",", ","}",opts__9813__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn-expr","fn-expr",(-933027985)),self__.fn_expr],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"local-names","local-names",(-1002214200)),self__.local_names],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"local-refs","local-refs",(1693858072)),self__.local_refs],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_macros_runtime.XFn.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__345){
var self__ = this;
var G__345__$1 = this;
return (new cljs.core.RecordIter((0),G__345__$1,(3),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn-expr","fn-expr",(-933027985)),new cljs.core.Keyword(null,"local-names","local-names",(-1002214200)),new cljs.core.Keyword(null,"local-refs","local-refs",(1693858072))], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.core.async.impl.ioc_macros_runtime.XFn.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9795__auto__){
var self__ = this;
var this__9795__auto____$1 = this;
return self__.__meta;
});

cljs.core.async.impl.ioc_macros_runtime.XFn.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9792__auto__){
var self__ = this;
var this__9792__auto____$1 = this;
return (new cljs.core.async.impl.ioc_macros_runtime.XFn(self__.fn_expr,self__.local_names,self__.local_refs,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_macros_runtime.XFn.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9801__auto__){
var self__ = this;
var this__9801__auto____$1 = this;
return ((3) + cljs.core.count.call(null,self__.__extmap));
});

cljs.core.async.impl.ioc_macros_runtime.XFn.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9793__auto__){
var self__ = this;
var this__9793__auto____$1 = this;
var h__9592__auto__ = self__.__hash;
if((!((h__9592__auto__ == null)))){
return h__9592__auto__;
} else {
var h__9592__auto____$1 = ((function (h__9592__auto__,this__9793__auto____$1){
return (function (coll__9794__auto__){
return ((742459717) ^ cljs.core.hash_unordered_coll.call(null,coll__9794__auto__));
});})(h__9592__auto__,this__9793__auto____$1))
.call(null,this__9793__auto____$1);
self__.__hash = h__9592__auto____$1;

return h__9592__auto____$1;
}
});

cljs.core.async.impl.ioc_macros_runtime.XFn.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this347,other348){
var self__ = this;
var this347__$1 = this;
return (((!((other348 == null)))) && ((this347__$1.constructor === other348.constructor)) && (cljs.core._EQ_.call(null,this347__$1.fn_expr,other348.fn_expr)) && (cljs.core._EQ_.call(null,this347__$1.local_names,other348.local_names)) && (cljs.core._EQ_.call(null,this347__$1.local_refs,other348.local_refs)) && (cljs.core._EQ_.call(null,this347__$1.__extmap,other348.__extmap)));
});

cljs.core.async.impl.ioc_macros_runtime.XFn.prototype.cljs$core$async$impl$ioc_macros_runtime$IEmittableInstruction$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.ioc_macros_runtime.XFn.prototype.cljs$core$async$impl$ioc_macros_runtime$IEmittableInstruction$emit_instruction$arity$2 = (function (this$,state_sym){
var self__ = this;
var this$__$1 = this;
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"id","id",(-1388402092)).cljs$core$IFn$_invoke$arity$1(this$__$1),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core.interleave.call(null,self__.local_names,self__.local_refs)))),null,(1),null)),self__.fn_expr)),null,(1),null)))));
});

cljs.core.async.impl.ioc_macros_runtime.XFn.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.ioc_macros_runtime.XFn.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$reads_from$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.local_refs;
});

cljs.core.async.impl.ioc_macros_runtime.XFn.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$writes_to$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",(-1388402092)).cljs$core$IFn$_invoke$arity$1(this$__$1)], null);
});

cljs.core.async.impl.ioc_macros_runtime.XFn.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$block_references$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.PersistentVector.EMPTY;
});

cljs.core.async.impl.ioc_macros_runtime.XFn.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9806__auto__,k__9807__auto__){
var self__ = this;
var this__9806__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fn-expr","fn-expr",(-933027985)),null,new cljs.core.Keyword(null,"local-names","local-names",(-1002214200)),null,new cljs.core.Keyword(null,"local-refs","local-refs",(1693858072)),null], null), null),k__9807__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__9806__auto____$1),self__.__meta),k__9807__auto__);
} else {
return (new cljs.core.async.impl.ioc_macros_runtime.XFn(self__.fn_expr,self__.local_names,self__.local_refs,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__9807__auto__)),null));
}
});

cljs.core.async.impl.ioc_macros_runtime.XFn.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9804__auto__,k__9805__auto__,G__345){
var self__ = this;
var this__9804__auto____$1 = this;
var pred__355 = cljs.core.keyword_identical_QMARK_;
var expr__356 = k__9805__auto__;
if(cljs.core.truth_(pred__355.call(null,new cljs.core.Keyword(null,"fn-expr","fn-expr",(-933027985)),expr__356))){
return (new cljs.core.async.impl.ioc_macros_runtime.XFn(G__345,self__.local_names,self__.local_refs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__355.call(null,new cljs.core.Keyword(null,"local-names","local-names",(-1002214200)),expr__356))){
return (new cljs.core.async.impl.ioc_macros_runtime.XFn(self__.fn_expr,G__345,self__.local_refs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__355.call(null,new cljs.core.Keyword(null,"local-refs","local-refs",(1693858072)),expr__356))){
return (new cljs.core.async.impl.ioc_macros_runtime.XFn(self__.fn_expr,self__.local_names,G__345,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.async.impl.ioc_macros_runtime.XFn(self__.fn_expr,self__.local_names,self__.local_refs,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__9805__auto__,G__345),null));
}
}
}
});

cljs.core.async.impl.ioc_macros_runtime.XFn.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9809__auto__){
var self__ = this;
var this__9809__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn-expr","fn-expr",(-933027985)),self__.fn_expr,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"local-names","local-names",(-1002214200)),self__.local_names,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"local-refs","local-refs",(1693858072)),self__.local_refs,null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_macros_runtime.XFn.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9796__auto__,G__345){
var self__ = this;
var this__9796__auto____$1 = this;
return (new cljs.core.async.impl.ioc_macros_runtime.XFn(self__.fn_expr,self__.local_names,self__.local_refs,G__345,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_macros_runtime.XFn.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9802__auto__,entry__9803__auto__){
var self__ = this;
var this__9802__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__9803__auto__)){
return this__9802__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__9803__auto__,(0)),cljs.core._nth.call(null,entry__9803__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__9802__auto____$1,entry__9803__auto__);
}
});

cljs.core.async.impl.ioc_macros_runtime.XFn.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn-expr","fn-expr",(707503542),null),new cljs.core.Symbol(null,"local-names","local-names",(638317327),null),new cljs.core.Symbol(null,"local-refs","local-refs",(-960577697),null)], null);
});

cljs.core.async.impl.ioc_macros_runtime.XFn.cljs$lang$type = true;

cljs.core.async.impl.ioc_macros_runtime.XFn.cljs$lang$ctorPrSeq = (function (this__9826__auto__){
return (new cljs.core.List(null,"cljs.core.async.impl.ioc-macros-runtime/XFn",null,(1),null));
});

cljs.core.async.impl.ioc_macros_runtime.XFn.cljs$lang$ctorPrWriter = (function (this__9826__auto__,writer__9827__auto__){
return cljs.core._write.call(null,writer__9827__auto__,"cljs.core.async.impl.ioc-macros-runtime/XFn");
});

/**
 * Positional factory function for cljs.core.async.impl.ioc-macros-runtime/XFn.
 */
cljs.core.async.impl.ioc_macros_runtime.__GT_XFn = (function cljs$core$async$impl$ioc_macros_runtime$__GT_XFn(fn_expr,local_names,local_refs){
return (new cljs.core.async.impl.ioc_macros_runtime.XFn(fn_expr,local_names,local_refs,null,null,null));
});

/**
 * Factory function for cljs.core.async.impl.ioc-macros-runtime/XFn, taking a map of keywords to field values.
 */
cljs.core.async.impl.ioc_macros_runtime.map__GT_XFn = (function cljs$core$async$impl$ioc_macros_runtime$map__GT_XFn(G__349){
var extmap__9825__auto__ = (function (){var G__358 = cljs.core.dissoc.call(null,G__349,new cljs.core.Keyword(null,"fn-expr","fn-expr",(-933027985)),new cljs.core.Keyword(null,"local-names","local-names",(-1002214200)),new cljs.core.Keyword(null,"local-refs","local-refs",(1693858072)));
if(cljs.core.record_QMARK_.call(null,G__349)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__358);
} else {
return G__358;
}
})();
return (new cljs.core.async.impl.ioc_macros_runtime.XFn(new cljs.core.Keyword(null,"fn-expr","fn-expr",(-933027985)).cljs$core$IFn$_invoke$arity$1(G__349),new cljs.core.Keyword(null,"local-names","local-names",(-1002214200)).cljs$core$IFn$_invoke$arity$1(G__349),new cljs.core.Keyword(null,"local-refs","local-refs",(1693858072)).cljs$core$IFn$_invoke$arity$1(G__349),null,cljs.core.not_empty.call(null,extmap__9825__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.async.impl.ioc_macros_runtime.IEmittableInstruction}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.async.impl.ioc_macros_runtime.IInstruction}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.core.async.impl.ioc_macros_runtime.Dot = (function (target,method,args,__meta,__extmap,__hash){
this.target = target;
this.method = method;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = -2064251126;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.core.async.impl.ioc_macros_runtime.Dot.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9797__auto__,k__9798__auto__){
var self__ = this;
var this__9797__auto____$1 = this;
return this__9797__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9798__auto__,null);
});

cljs.core.async.impl.ioc_macros_runtime.Dot.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9799__auto__,k361,else__9800__auto__){
var self__ = this;
var this__9799__auto____$1 = this;
var G__365 = k361;
var G__365__$1 = (((G__365 instanceof cljs.core.Keyword))?G__365.fqn:null);
switch (G__365__$1) {
case "target":
return self__.target;

break;
case "method":
return self__.method;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k361,else__9800__auto__);

}
});

cljs.core.async.impl.ioc_macros_runtime.Dot.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__9816__auto__,f__9817__auto__,init__9818__auto__){
var self__ = this;
var this__9816__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__9816__auto____$1){
return (function (ret__9819__auto__,p__366){
var vec__367 = p__366;
var k__9820__auto__ = cljs.core.nth.call(null,vec__367,(0),null);
var v__9821__auto__ = cljs.core.nth.call(null,vec__367,(1),null);
return f__9817__auto__.call(null,ret__9819__auto__,k__9820__auto__,v__9821__auto__);
});})(this__9816__auto____$1))
,init__9818__auto__,this__9816__auto____$1);
});

cljs.core.async.impl.ioc_macros_runtime.Dot.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9811__auto__,writer__9812__auto__,opts__9813__auto__){
var self__ = this;
var this__9811__auto____$1 = this;
var pr_pair__9814__auto__ = ((function (this__9811__auto____$1){
return (function (keyval__9815__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__9812__auto__,cljs.core.pr_writer,""," ","",opts__9813__auto__,keyval__9815__auto__);
});})(this__9811__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__9812__auto__,pr_pair__9814__auto__,"#cljs.core.async.impl.ioc-macros-runtime.Dot{",", ","}",opts__9813__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"target","target",(253001721)),self__.target],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"method","method",(55703592)),self__.method],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",(1315556576)),self__.args],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_macros_runtime.Dot.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__360){
var self__ = this;
var G__360__$1 = this;
return (new cljs.core.RecordIter((0),G__360__$1,(3),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"target","target",(253001721)),new cljs.core.Keyword(null,"method","method",(55703592)),new cljs.core.Keyword(null,"args","args",(1315556576))], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.core.async.impl.ioc_macros_runtime.Dot.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9795__auto__){
var self__ = this;
var this__9795__auto____$1 = this;
return self__.__meta;
});

cljs.core.async.impl.ioc_macros_runtime.Dot.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9792__auto__){
var self__ = this;
var this__9792__auto____$1 = this;
return (new cljs.core.async.impl.ioc_macros_runtime.Dot(self__.target,self__.method,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_macros_runtime.Dot.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9801__auto__){
var self__ = this;
var this__9801__auto____$1 = this;
return ((3) + cljs.core.count.call(null,self__.__extmap));
});

cljs.core.async.impl.ioc_macros_runtime.Dot.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9793__auto__){
var self__ = this;
var this__9793__auto____$1 = this;
var h__9592__auto__ = self__.__hash;
if((!((h__9592__auto__ == null)))){
return h__9592__auto__;
} else {
var h__9592__auto____$1 = ((function (h__9592__auto__,this__9793__auto____$1){
return (function (coll__9794__auto__){
return ((506871501) ^ cljs.core.hash_unordered_coll.call(null,coll__9794__auto__));
});})(h__9592__auto__,this__9793__auto____$1))
.call(null,this__9793__auto____$1);
self__.__hash = h__9592__auto____$1;

return h__9592__auto____$1;
}
});

cljs.core.async.impl.ioc_macros_runtime.Dot.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this362,other363){
var self__ = this;
var this362__$1 = this;
return (((!((other363 == null)))) && ((this362__$1.constructor === other363.constructor)) && (cljs.core._EQ_.call(null,this362__$1.target,other363.target)) && (cljs.core._EQ_.call(null,this362__$1.method,other363.method)) && (cljs.core._EQ_.call(null,this362__$1.args,other363.args)) && (cljs.core._EQ_.call(null,this362__$1.__extmap,other363.__extmap)));
});

cljs.core.async.impl.ioc_macros_runtime.Dot.prototype.cljs$core$async$impl$ioc_macros_runtime$IEmittableInstruction$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.ioc_macros_runtime.Dot.prototype.cljs$core$async$impl$ioc_macros_runtime$IEmittableInstruction$emit_instruction$arity$2 = (function (this$,state_sym){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(goog.string.startsWith(cljs.core.name.call(null,self__.method),"-"))){
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"id","id",(-1388402092)).cljs$core$IFn$_invoke$arity$1(this$__$1),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".",".",(1975675962),null),null,(1),null)),(new cljs.core.List(null,self__.target,null,(1),null)),(new cljs.core.List(null,self__.method,null,(1),null)))),null,(1),null)))));
} else {
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"id","id",(-1388402092)).cljs$core$IFn$_invoke$arity$1(this$__$1),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".",".",(1975675962),null),null,(1),null)),(new cljs.core.List(null,self__.target,null,(1),null)),(new cljs.core.List(null,cljs.core.cons.call(null,self__.method,self__.args),null,(1),null)))),null,(1),null)))));
}
});

cljs.core.async.impl.ioc_macros_runtime.Dot.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.ioc_macros_runtime.Dot.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$reads_from$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,self__.target,null,(1),null)),(new cljs.core.List(null,self__.method,null,(1),null)),self__.args)));
});

cljs.core.async.impl.ioc_macros_runtime.Dot.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$writes_to$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",(-1388402092)).cljs$core$IFn$_invoke$arity$1(this$__$1)], null);
});

cljs.core.async.impl.ioc_macros_runtime.Dot.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$block_references$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.PersistentVector.EMPTY;
});

cljs.core.async.impl.ioc_macros_runtime.Dot.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9806__auto__,k__9807__auto__){
var self__ = this;
var this__9806__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",(253001721)),null,new cljs.core.Keyword(null,"method","method",(55703592)),null,new cljs.core.Keyword(null,"args","args",(1315556576)),null], null), null),k__9807__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__9806__auto____$1),self__.__meta),k__9807__auto__);
} else {
return (new cljs.core.async.impl.ioc_macros_runtime.Dot(self__.target,self__.method,self__.args,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__9807__auto__)),null));
}
});

cljs.core.async.impl.ioc_macros_runtime.Dot.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9804__auto__,k__9805__auto__,G__360){
var self__ = this;
var this__9804__auto____$1 = this;
var pred__370 = cljs.core.keyword_identical_QMARK_;
var expr__371 = k__9805__auto__;
if(cljs.core.truth_(pred__370.call(null,new cljs.core.Keyword(null,"target","target",(253001721)),expr__371))){
return (new cljs.core.async.impl.ioc_macros_runtime.Dot(G__360,self__.method,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__370.call(null,new cljs.core.Keyword(null,"method","method",(55703592)),expr__371))){
return (new cljs.core.async.impl.ioc_macros_runtime.Dot(self__.target,G__360,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__370.call(null,new cljs.core.Keyword(null,"args","args",(1315556576)),expr__371))){
return (new cljs.core.async.impl.ioc_macros_runtime.Dot(self__.target,self__.method,G__360,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.async.impl.ioc_macros_runtime.Dot(self__.target,self__.method,self__.args,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__9805__auto__,G__360),null));
}
}
}
});

cljs.core.async.impl.ioc_macros_runtime.Dot.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9809__auto__){
var self__ = this;
var this__9809__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"target","target",(253001721)),self__.target,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"method","method",(55703592)),self__.method,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"args","args",(1315556576)),self__.args,null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_macros_runtime.Dot.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9796__auto__,G__360){
var self__ = this;
var this__9796__auto____$1 = this;
return (new cljs.core.async.impl.ioc_macros_runtime.Dot(self__.target,self__.method,self__.args,G__360,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_macros_runtime.Dot.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9802__auto__,entry__9803__auto__){
var self__ = this;
var this__9802__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__9803__auto__)){
return this__9802__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__9803__auto__,(0)),cljs.core._nth.call(null,entry__9803__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__9802__auto____$1,entry__9803__auto__);
}
});

cljs.core.async.impl.ioc_macros_runtime.Dot.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"target","target",(1893533248),null),new cljs.core.Symbol(null,"method","method",(1696235119),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null);
});

cljs.core.async.impl.ioc_macros_runtime.Dot.cljs$lang$type = true;

cljs.core.async.impl.ioc_macros_runtime.Dot.cljs$lang$ctorPrSeq = (function (this__9826__auto__){
return (new cljs.core.List(null,"cljs.core.async.impl.ioc-macros-runtime/Dot",null,(1),null));
});

cljs.core.async.impl.ioc_macros_runtime.Dot.cljs$lang$ctorPrWriter = (function (this__9826__auto__,writer__9827__auto__){
return cljs.core._write.call(null,writer__9827__auto__,"cljs.core.async.impl.ioc-macros-runtime/Dot");
});

/**
 * Positional factory function for cljs.core.async.impl.ioc-macros-runtime/Dot.
 */
cljs.core.async.impl.ioc_macros_runtime.__GT_Dot = (function cljs$core$async$impl$ioc_macros_runtime$__GT_Dot(target,method,args){
return (new cljs.core.async.impl.ioc_macros_runtime.Dot(target,method,args,null,null,null));
});

/**
 * Factory function for cljs.core.async.impl.ioc-macros-runtime/Dot, taking a map of keywords to field values.
 */
cljs.core.async.impl.ioc_macros_runtime.map__GT_Dot = (function cljs$core$async$impl$ioc_macros_runtime$map__GT_Dot(G__364){
var extmap__9825__auto__ = (function (){var G__373 = cljs.core.dissoc.call(null,G__364,new cljs.core.Keyword(null,"target","target",(253001721)),new cljs.core.Keyword(null,"method","method",(55703592)),new cljs.core.Keyword(null,"args","args",(1315556576)));
if(cljs.core.record_QMARK_.call(null,G__364)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__373);
} else {
return G__373;
}
})();
return (new cljs.core.async.impl.ioc_macros_runtime.Dot(new cljs.core.Keyword(null,"target","target",(253001721)).cljs$core$IFn$_invoke$arity$1(G__364),new cljs.core.Keyword(null,"method","method",(55703592)).cljs$core$IFn$_invoke$arity$1(G__364),new cljs.core.Keyword(null,"args","args",(1315556576)).cljs$core$IFn$_invoke$arity$1(G__364),null,cljs.core.not_empty.call(null,extmap__9825__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.async.impl.ioc_macros_runtime.ITerminator}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.async.impl.ioc_macros_runtime.IInstruction}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.core.async.impl.ioc_macros_runtime.Jmp = (function (value,block,__meta,__extmap,__hash){
this.value = value;
this.block = block;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = -2064251126;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.core.async.impl.ioc_macros_runtime.Jmp.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9797__auto__,k__9798__auto__){
var self__ = this;
var this__9797__auto____$1 = this;
return this__9797__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9798__auto__,null);
});

cljs.core.async.impl.ioc_macros_runtime.Jmp.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9799__auto__,k376,else__9800__auto__){
var self__ = this;
var this__9799__auto____$1 = this;
var G__380 = k376;
var G__380__$1 = (((G__380 instanceof cljs.core.Keyword))?G__380.fqn:null);
switch (G__380__$1) {
case "value":
return self__.value;

break;
case "block":
return self__.block;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k376,else__9800__auto__);

}
});

cljs.core.async.impl.ioc_macros_runtime.Jmp.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__9816__auto__,f__9817__auto__,init__9818__auto__){
var self__ = this;
var this__9816__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__9816__auto____$1){
return (function (ret__9819__auto__,p__381){
var vec__382 = p__381;
var k__9820__auto__ = cljs.core.nth.call(null,vec__382,(0),null);
var v__9821__auto__ = cljs.core.nth.call(null,vec__382,(1),null);
return f__9817__auto__.call(null,ret__9819__auto__,k__9820__auto__,v__9821__auto__);
});})(this__9816__auto____$1))
,init__9818__auto__,this__9816__auto____$1);
});

cljs.core.async.impl.ioc_macros_runtime.Jmp.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9811__auto__,writer__9812__auto__,opts__9813__auto__){
var self__ = this;
var this__9811__auto____$1 = this;
var pr_pair__9814__auto__ = ((function (this__9811__auto____$1){
return (function (keyval__9815__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__9812__auto__,cljs.core.pr_writer,""," ","",opts__9813__auto__,keyval__9815__auto__);
});})(this__9811__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__9812__auto__,pr_pair__9814__auto__,"#cljs.core.async.impl.ioc-macros-runtime.Jmp{",", ","}",opts__9813__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",(305978217)),self__.value],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"block","block",(664686210)),self__.block],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_macros_runtime.Jmp.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__375){
var self__ = this;
var G__375__$1 = this;
return (new cljs.core.RecordIter((0),G__375__$1,(2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",(305978217)),new cljs.core.Keyword(null,"block","block",(664686210))], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.core.async.impl.ioc_macros_runtime.Jmp.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9795__auto__){
var self__ = this;
var this__9795__auto____$1 = this;
return self__.__meta;
});

cljs.core.async.impl.ioc_macros_runtime.Jmp.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9792__auto__){
var self__ = this;
var this__9792__auto____$1 = this;
return (new cljs.core.async.impl.ioc_macros_runtime.Jmp(self__.value,self__.block,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_macros_runtime.Jmp.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9801__auto__){
var self__ = this;
var this__9801__auto____$1 = this;
return ((2) + cljs.core.count.call(null,self__.__extmap));
});

cljs.core.async.impl.ioc_macros_runtime.Jmp.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9793__auto__){
var self__ = this;
var this__9793__auto____$1 = this;
var h__9592__auto__ = self__.__hash;
if((!((h__9592__auto__ == null)))){
return h__9592__auto__;
} else {
var h__9592__auto____$1 = ((function (h__9592__auto__,this__9793__auto____$1){
return (function (coll__9794__auto__){
return ((-552576434) ^ cljs.core.hash_unordered_coll.call(null,coll__9794__auto__));
});})(h__9592__auto__,this__9793__auto____$1))
.call(null,this__9793__auto____$1);
self__.__hash = h__9592__auto____$1;

return h__9592__auto____$1;
}
});

cljs.core.async.impl.ioc_macros_runtime.Jmp.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this377,other378){
var self__ = this;
var this377__$1 = this;
return (((!((other378 == null)))) && ((this377__$1.constructor === other378.constructor)) && (cljs.core._EQ_.call(null,this377__$1.value,other378.value)) && (cljs.core._EQ_.call(null,this377__$1.block,other378.block)) && (cljs.core._EQ_.call(null,this377__$1.__extmap,other378.__extmap)));
});

cljs.core.async.impl.ioc_macros_runtime.Jmp.prototype.cljs$core$async$impl$ioc_macros_runtime$ITerminator$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.ioc_macros_runtime.Jmp.prototype.cljs$core$async$impl$ioc_macros_runtime$ITerminator$terminate_block$arity$3 = (function (this$,state_sym,_){
var self__ = this;
var this$__$1 = this;
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",(1686842252),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core.async.impl.ioc-macros","aset-all!","cljs.core.async.impl.ioc-macros/aset-all!",(2072147987),null),null,(1),null)),(new cljs.core.List(null,state_sym,null,(1),null)),(new cljs.core.List(null,(2),null,(1),null)),(new cljs.core.List(null,self__.value,null,(1),null)),(new cljs.core.List(null,(1),null,(1),null)),(new cljs.core.List(null,self__.block,null,(1),null)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"recur","recur",(-437573268)),null,(1),null))));
});

cljs.core.async.impl.ioc_macros_runtime.Jmp.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.ioc_macros_runtime.Jmp.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$reads_from$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.value], null);
});

cljs.core.async.impl.ioc_macros_runtime.Jmp.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$writes_to$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.PersistentVector.EMPTY;
});

cljs.core.async.impl.ioc_macros_runtime.Jmp.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$block_references$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.block], null);
});

cljs.core.async.impl.ioc_macros_runtime.Jmp.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9806__auto__,k__9807__auto__){
var self__ = this;
var this__9806__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",(305978217)),null,new cljs.core.Keyword(null,"block","block",(664686210)),null], null), null),k__9807__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__9806__auto____$1),self__.__meta),k__9807__auto__);
} else {
return (new cljs.core.async.impl.ioc_macros_runtime.Jmp(self__.value,self__.block,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__9807__auto__)),null));
}
});

cljs.core.async.impl.ioc_macros_runtime.Jmp.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9804__auto__,k__9805__auto__,G__375){
var self__ = this;
var this__9804__auto____$1 = this;
var pred__385 = cljs.core.keyword_identical_QMARK_;
var expr__386 = k__9805__auto__;
if(cljs.core.truth_(pred__385.call(null,new cljs.core.Keyword(null,"value","value",(305978217)),expr__386))){
return (new cljs.core.async.impl.ioc_macros_runtime.Jmp(G__375,self__.block,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__385.call(null,new cljs.core.Keyword(null,"block","block",(664686210)),expr__386))){
return (new cljs.core.async.impl.ioc_macros_runtime.Jmp(self__.value,G__375,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.async.impl.ioc_macros_runtime.Jmp(self__.value,self__.block,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__9805__auto__,G__375),null));
}
}
});

cljs.core.async.impl.ioc_macros_runtime.Jmp.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9809__auto__){
var self__ = this;
var this__9809__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"value","value",(305978217)),self__.value,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"block","block",(664686210)),self__.block,null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_macros_runtime.Jmp.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9796__auto__,G__375){
var self__ = this;
var this__9796__auto____$1 = this;
return (new cljs.core.async.impl.ioc_macros_runtime.Jmp(self__.value,self__.block,G__375,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_macros_runtime.Jmp.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9802__auto__,entry__9803__auto__){
var self__ = this;
var this__9802__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__9803__auto__)){
return this__9802__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__9803__auto__,(0)),cljs.core._nth.call(null,entry__9803__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__9802__auto____$1,entry__9803__auto__);
}
});

cljs.core.async.impl.ioc_macros_runtime.Jmp.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",(1946509744),null),new cljs.core.Symbol(null,"block","block",(-1989749559),null)], null);
});

cljs.core.async.impl.ioc_macros_runtime.Jmp.cljs$lang$type = true;

cljs.core.async.impl.ioc_macros_runtime.Jmp.cljs$lang$ctorPrSeq = (function (this__9826__auto__){
return (new cljs.core.List(null,"cljs.core.async.impl.ioc-macros-runtime/Jmp",null,(1),null));
});

cljs.core.async.impl.ioc_macros_runtime.Jmp.cljs$lang$ctorPrWriter = (function (this__9826__auto__,writer__9827__auto__){
return cljs.core._write.call(null,writer__9827__auto__,"cljs.core.async.impl.ioc-macros-runtime/Jmp");
});

/**
 * Positional factory function for cljs.core.async.impl.ioc-macros-runtime/Jmp.
 */
cljs.core.async.impl.ioc_macros_runtime.__GT_Jmp = (function cljs$core$async$impl$ioc_macros_runtime$__GT_Jmp(value,block){
return (new cljs.core.async.impl.ioc_macros_runtime.Jmp(value,block,null,null,null));
});

/**
 * Factory function for cljs.core.async.impl.ioc-macros-runtime/Jmp, taking a map of keywords to field values.
 */
cljs.core.async.impl.ioc_macros_runtime.map__GT_Jmp = (function cljs$core$async$impl$ioc_macros_runtime$map__GT_Jmp(G__379){
var extmap__9825__auto__ = (function (){var G__388 = cljs.core.dissoc.call(null,G__379,new cljs.core.Keyword(null,"value","value",(305978217)),new cljs.core.Keyword(null,"block","block",(664686210)));
if(cljs.core.record_QMARK_.call(null,G__379)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__388);
} else {
return G__388;
}
})();
return (new cljs.core.async.impl.ioc_macros_runtime.Jmp(new cljs.core.Keyword(null,"value","value",(305978217)).cljs$core$IFn$_invoke$arity$1(G__379),new cljs.core.Keyword(null,"block","block",(664686210)).cljs$core$IFn$_invoke$arity$1(G__379),null,cljs.core.not_empty.call(null,extmap__9825__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.async.impl.ioc_macros_runtime.ITerminator}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.async.impl.ioc_macros_runtime.IInstruction}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.core.async.impl.ioc_macros_runtime.Return = (function (value,__meta,__extmap,__hash){
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = -2064251126;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.core.async.impl.ioc_macros_runtime.Return.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9797__auto__,k__9798__auto__){
var self__ = this;
var this__9797__auto____$1 = this;
return this__9797__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9798__auto__,null);
});

cljs.core.async.impl.ioc_macros_runtime.Return.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9799__auto__,k391,else__9800__auto__){
var self__ = this;
var this__9799__auto____$1 = this;
var G__395 = k391;
var G__395__$1 = (((G__395 instanceof cljs.core.Keyword))?G__395.fqn:null);
switch (G__395__$1) {
case "value":
return self__.value;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k391,else__9800__auto__);

}
});

cljs.core.async.impl.ioc_macros_runtime.Return.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__9816__auto__,f__9817__auto__,init__9818__auto__){
var self__ = this;
var this__9816__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__9816__auto____$1){
return (function (ret__9819__auto__,p__396){
var vec__397 = p__396;
var k__9820__auto__ = cljs.core.nth.call(null,vec__397,(0),null);
var v__9821__auto__ = cljs.core.nth.call(null,vec__397,(1),null);
return f__9817__auto__.call(null,ret__9819__auto__,k__9820__auto__,v__9821__auto__);
});})(this__9816__auto____$1))
,init__9818__auto__,this__9816__auto____$1);
});

cljs.core.async.impl.ioc_macros_runtime.Return.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9811__auto__,writer__9812__auto__,opts__9813__auto__){
var self__ = this;
var this__9811__auto____$1 = this;
var pr_pair__9814__auto__ = ((function (this__9811__auto____$1){
return (function (keyval__9815__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__9812__auto__,cljs.core.pr_writer,""," ","",opts__9813__auto__,keyval__9815__auto__);
});})(this__9811__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__9812__auto__,pr_pair__9814__auto__,"#cljs.core.async.impl.ioc-macros-runtime.Return{",", ","}",opts__9813__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",(305978217)),self__.value],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_macros_runtime.Return.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__390){
var self__ = this;
var G__390__$1 = this;
return (new cljs.core.RecordIter((0),G__390__$1,(1),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",(305978217))], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.core.async.impl.ioc_macros_runtime.Return.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9795__auto__){
var self__ = this;
var this__9795__auto____$1 = this;
return self__.__meta;
});

cljs.core.async.impl.ioc_macros_runtime.Return.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9792__auto__){
var self__ = this;
var this__9792__auto____$1 = this;
return (new cljs.core.async.impl.ioc_macros_runtime.Return(self__.value,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_macros_runtime.Return.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9801__auto__){
var self__ = this;
var this__9801__auto____$1 = this;
return ((1) + cljs.core.count.call(null,self__.__extmap));
});

cljs.core.async.impl.ioc_macros_runtime.Return.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9793__auto__){
var self__ = this;
var this__9793__auto____$1 = this;
var h__9592__auto__ = self__.__hash;
if((!((h__9592__auto__ == null)))){
return h__9592__auto__;
} else {
var h__9592__auto____$1 = ((function (h__9592__auto__,this__9793__auto____$1){
return (function (coll__9794__auto__){
return ((1160128874) ^ cljs.core.hash_unordered_coll.call(null,coll__9794__auto__));
});})(h__9592__auto__,this__9793__auto____$1))
.call(null,this__9793__auto____$1);
self__.__hash = h__9592__auto____$1;

return h__9592__auto____$1;
}
});

cljs.core.async.impl.ioc_macros_runtime.Return.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this392,other393){
var self__ = this;
var this392__$1 = this;
return (((!((other393 == null)))) && ((this392__$1.constructor === other393.constructor)) && (cljs.core._EQ_.call(null,this392__$1.value,other393.value)) && (cljs.core._EQ_.call(null,this392__$1.__extmap,other393.__extmap)));
});

cljs.core.async.impl.ioc_macros_runtime.Return.prototype.cljs$core$async$impl$ioc_macros_runtime$ITerminator$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.ioc_macros_runtime.Return.prototype.cljs$core$async$impl$ioc_macros_runtime$ITerminator$terminator_code$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"Return","Return",(-1300089037));
});

cljs.core.async.impl.ioc_macros_runtime.Return.prototype.cljs$core$async$impl$ioc_macros_runtime$ITerminator$terminate_block$arity$3 = (function (this$,state_sym,custom_terminators){
var self__ = this;
var this$__$1 = this;
var temp__8960__auto__ = cljs.core.get.call(null,custom_terminators,this$__$1.cljs$core$async$impl$ioc_macros_runtime$ITerminator$terminator_code$arity$1(null));
if(cljs.core.truth_(temp__8960__auto__)){
var f = temp__8960__auto__;
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,f,null,(1),null)),(new cljs.core.List(null,state_sym,null,(1),null)),(new cljs.core.List(null,self__.value,null,(1),null))));
} else {
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",(1686842252),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core.async.impl.ioc-macros","aset-all!","cljs.core.async.impl.ioc-macros/aset-all!",(2072147987),null),null,(1),null)),(new cljs.core.List(null,state_sym,null,(1),null)),(new cljs.core.List(null,(2),null,(1),null)),(new cljs.core.List(null,self__.value,null,(1),null)),(new cljs.core.List(null,(1),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"finished","finished",(-1018867731)),null,(1),null)))),null,(1),null)),(new cljs.core.List(null,null,null,(1),null))));
}
});

cljs.core.async.impl.ioc_macros_runtime.Return.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.ioc_macros_runtime.Return.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$reads_from$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.value], null);
});

cljs.core.async.impl.ioc_macros_runtime.Return.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$writes_to$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.PersistentVector.EMPTY;
});

cljs.core.async.impl.ioc_macros_runtime.Return.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$block_references$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.PersistentVector.EMPTY;
});

cljs.core.async.impl.ioc_macros_runtime.Return.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9806__auto__,k__9807__auto__){
var self__ = this;
var this__9806__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",(305978217)),null], null), null),k__9807__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__9806__auto____$1),self__.__meta),k__9807__auto__);
} else {
return (new cljs.core.async.impl.ioc_macros_runtime.Return(self__.value,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__9807__auto__)),null));
}
});

cljs.core.async.impl.ioc_macros_runtime.Return.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9804__auto__,k__9805__auto__,G__390){
var self__ = this;
var this__9804__auto____$1 = this;
var pred__400 = cljs.core.keyword_identical_QMARK_;
var expr__401 = k__9805__auto__;
if(cljs.core.truth_(pred__400.call(null,new cljs.core.Keyword(null,"value","value",(305978217)),expr__401))){
return (new cljs.core.async.impl.ioc_macros_runtime.Return(G__390,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.async.impl.ioc_macros_runtime.Return(self__.value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__9805__auto__,G__390),null));
}
});

cljs.core.async.impl.ioc_macros_runtime.Return.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9809__auto__){
var self__ = this;
var this__9809__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"value","value",(305978217)),self__.value,null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_macros_runtime.Return.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9796__auto__,G__390){
var self__ = this;
var this__9796__auto____$1 = this;
return (new cljs.core.async.impl.ioc_macros_runtime.Return(self__.value,G__390,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_macros_runtime.Return.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9802__auto__,entry__9803__auto__){
var self__ = this;
var this__9802__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__9803__auto__)){
return this__9802__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__9803__auto__,(0)),cljs.core._nth.call(null,entry__9803__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__9802__auto____$1,entry__9803__auto__);
}
});

cljs.core.async.impl.ioc_macros_runtime.Return.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",(1946509744),null)], null);
});

cljs.core.async.impl.ioc_macros_runtime.Return.cljs$lang$type = true;

cljs.core.async.impl.ioc_macros_runtime.Return.cljs$lang$ctorPrSeq = (function (this__9826__auto__){
return (new cljs.core.List(null,"cljs.core.async.impl.ioc-macros-runtime/Return",null,(1),null));
});

cljs.core.async.impl.ioc_macros_runtime.Return.cljs$lang$ctorPrWriter = (function (this__9826__auto__,writer__9827__auto__){
return cljs.core._write.call(null,writer__9827__auto__,"cljs.core.async.impl.ioc-macros-runtime/Return");
});

/**
 * Positional factory function for cljs.core.async.impl.ioc-macros-runtime/Return.
 */
cljs.core.async.impl.ioc_macros_runtime.__GT_Return = (function cljs$core$async$impl$ioc_macros_runtime$__GT_Return(value){
return (new cljs.core.async.impl.ioc_macros_runtime.Return(value,null,null,null));
});

/**
 * Factory function for cljs.core.async.impl.ioc-macros-runtime/Return, taking a map of keywords to field values.
 */
cljs.core.async.impl.ioc_macros_runtime.map__GT_Return = (function cljs$core$async$impl$ioc_macros_runtime$map__GT_Return(G__394){
var extmap__9825__auto__ = (function (){var G__403 = cljs.core.dissoc.call(null,G__394,new cljs.core.Keyword(null,"value","value",(305978217)));
if(cljs.core.record_QMARK_.call(null,G__394)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__403);
} else {
return G__403;
}
})();
return (new cljs.core.async.impl.ioc_macros_runtime.Return(new cljs.core.Keyword(null,"value","value",(305978217)).cljs$core$IFn$_invoke$arity$1(G__394),null,cljs.core.not_empty.call(null,extmap__9825__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.async.impl.ioc_macros_runtime.IEmittableInstruction}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.async.impl.ioc_macros_runtime.IInstruction}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.core.async.impl.ioc_macros_runtime.Set_BANG_ = (function (field,object,val,__meta,__extmap,__hash){
this.field = field;
this.object = object;
this.val = val;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = -2064251126;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.core.async.impl.ioc_macros_runtime.Set_BANG_.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9797__auto__,k__9798__auto__){
var self__ = this;
var this__9797__auto____$1 = this;
return this__9797__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9798__auto__,null);
});

cljs.core.async.impl.ioc_macros_runtime.Set_BANG_.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9799__auto__,k406,else__9800__auto__){
var self__ = this;
var this__9799__auto____$1 = this;
var G__410 = k406;
var G__410__$1 = (((G__410 instanceof cljs.core.Keyword))?G__410.fqn:null);
switch (G__410__$1) {
case "field":
return self__.field;

break;
case "object":
return self__.object;

break;
case "val":
return self__.val;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k406,else__9800__auto__);

}
});

cljs.core.async.impl.ioc_macros_runtime.Set_BANG_.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__9816__auto__,f__9817__auto__,init__9818__auto__){
var self__ = this;
var this__9816__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__9816__auto____$1){
return (function (ret__9819__auto__,p__411){
var vec__412 = p__411;
var k__9820__auto__ = cljs.core.nth.call(null,vec__412,(0),null);
var v__9821__auto__ = cljs.core.nth.call(null,vec__412,(1),null);
return f__9817__auto__.call(null,ret__9819__auto__,k__9820__auto__,v__9821__auto__);
});})(this__9816__auto____$1))
,init__9818__auto__,this__9816__auto____$1);
});

cljs.core.async.impl.ioc_macros_runtime.Set_BANG_.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9811__auto__,writer__9812__auto__,opts__9813__auto__){
var self__ = this;
var this__9811__auto____$1 = this;
var pr_pair__9814__auto__ = ((function (this__9811__auto____$1){
return (function (keyval__9815__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__9812__auto__,cljs.core.pr_writer,""," ","",opts__9813__auto__,keyval__9815__auto__);
});})(this__9811__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__9812__auto__,pr_pair__9814__auto__,"#cljs.core.async.impl.ioc-macros-runtime.Set!{",", ","}",opts__9813__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"field","field",(-1302436500)),self__.field],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"object","object",(1474613949)),self__.object],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val","val",(128701612)),self__.val],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_macros_runtime.Set_BANG_.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__405){
var self__ = this;
var G__405__$1 = this;
return (new cljs.core.RecordIter((0),G__405__$1,(3),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"field","field",(-1302436500)),new cljs.core.Keyword(null,"object","object",(1474613949)),new cljs.core.Keyword(null,"val","val",(128701612))], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.core.async.impl.ioc_macros_runtime.Set_BANG_.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9795__auto__){
var self__ = this;
var this__9795__auto____$1 = this;
return self__.__meta;
});

cljs.core.async.impl.ioc_macros_runtime.Set_BANG_.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9792__auto__){
var self__ = this;
var this__9792__auto____$1 = this;
return (new cljs.core.async.impl.ioc_macros_runtime.Set_BANG_(self__.field,self__.object,self__.val,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_macros_runtime.Set_BANG_.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9801__auto__){
var self__ = this;
var this__9801__auto____$1 = this;
return ((3) + cljs.core.count.call(null,self__.__extmap));
});

cljs.core.async.impl.ioc_macros_runtime.Set_BANG_.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9793__auto__){
var self__ = this;
var this__9793__auto____$1 = this;
var h__9592__auto__ = self__.__hash;
if((!((h__9592__auto__ == null)))){
return h__9592__auto__;
} else {
var h__9592__auto____$1 = ((function (h__9592__auto__,this__9793__auto____$1){
return (function (coll__9794__auto__){
return ((262631953) ^ cljs.core.hash_unordered_coll.call(null,coll__9794__auto__));
});})(h__9592__auto__,this__9793__auto____$1))
.call(null,this__9793__auto____$1);
self__.__hash = h__9592__auto____$1;

return h__9592__auto____$1;
}
});

cljs.core.async.impl.ioc_macros_runtime.Set_BANG_.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this407,other408){
var self__ = this;
var this407__$1 = this;
return (((!((other408 == null)))) && ((this407__$1.constructor === other408.constructor)) && (cljs.core._EQ_.call(null,this407__$1.field,other408.field)) && (cljs.core._EQ_.call(null,this407__$1.object,other408.object)) && (cljs.core._EQ_.call(null,this407__$1.val,other408.val)) && (cljs.core._EQ_.call(null,this407__$1.__extmap,other408.__extmap)));
});

cljs.core.async.impl.ioc_macros_runtime.Set_BANG_.prototype.cljs$core$async$impl$ioc_macros_runtime$IEmittableInstruction$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.ioc_macros_runtime.Set_BANG_.prototype.cljs$core$async$impl$ioc_macros_runtime$IEmittableInstruction$emit_instruction$arity$2 = (function (this$,state_sym){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.field)){
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"id","id",(-1388402092)).cljs$core$IFn$_invoke$arity$1(this$__$1),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",(250714521),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,self__.field,null,(1),null)),(new cljs.core.List(null,self__.object,null,(1),null)))),null,(1),null)),(new cljs.core.List(null,self__.val,null,(1),null)))),null,(1),null)))));
} else {
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"id","id",(-1388402092)).cljs$core$IFn$_invoke$arity$1(this$__$1),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",(250714521),null),null,(1),null)),(new cljs.core.List(null,self__.object,null,(1),null)),(new cljs.core.List(null,self__.val,null,(1),null)))),null,(1),null)))));
}
});

cljs.core.async.impl.ioc_macros_runtime.Set_BANG_.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.ioc_macros_runtime.Set_BANG_.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$reads_from$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.object,self__.val], null);
});

cljs.core.async.impl.ioc_macros_runtime.Set_BANG_.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$writes_to$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",(-1388402092)).cljs$core$IFn$_invoke$arity$1(this$__$1)], null);
});

cljs.core.async.impl.ioc_macros_runtime.Set_BANG_.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$block_references$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.PersistentVector.EMPTY;
});

cljs.core.async.impl.ioc_macros_runtime.Set_BANG_.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9806__auto__,k__9807__auto__){
var self__ = this;
var this__9806__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",(-1302436500)),null,new cljs.core.Keyword(null,"object","object",(1474613949)),null,new cljs.core.Keyword(null,"val","val",(128701612)),null], null), null),k__9807__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__9806__auto____$1),self__.__meta),k__9807__auto__);
} else {
return (new cljs.core.async.impl.ioc_macros_runtime.Set_BANG_(self__.field,self__.object,self__.val,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__9807__auto__)),null));
}
});

cljs.core.async.impl.ioc_macros_runtime.Set_BANG_.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9804__auto__,k__9805__auto__,G__405){
var self__ = this;
var this__9804__auto____$1 = this;
var pred__415 = cljs.core.keyword_identical_QMARK_;
var expr__416 = k__9805__auto__;
if(cljs.core.truth_(pred__415.call(null,new cljs.core.Keyword(null,"field","field",(-1302436500)),expr__416))){
return (new cljs.core.async.impl.ioc_macros_runtime.Set_BANG_(G__405,self__.object,self__.val,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__415.call(null,new cljs.core.Keyword(null,"object","object",(1474613949)),expr__416))){
return (new cljs.core.async.impl.ioc_macros_runtime.Set_BANG_(self__.field,G__405,self__.val,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__415.call(null,new cljs.core.Keyword(null,"val","val",(128701612)),expr__416))){
return (new cljs.core.async.impl.ioc_macros_runtime.Set_BANG_(self__.field,self__.object,G__405,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.async.impl.ioc_macros_runtime.Set_BANG_(self__.field,self__.object,self__.val,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__9805__auto__,G__405),null));
}
}
}
});

cljs.core.async.impl.ioc_macros_runtime.Set_BANG_.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9809__auto__){
var self__ = this;
var this__9809__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"field","field",(-1302436500)),self__.field,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"object","object",(1474613949)),self__.object,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"val","val",(128701612)),self__.val,null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_macros_runtime.Set_BANG_.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9796__auto__,G__405){
var self__ = this;
var this__9796__auto____$1 = this;
return (new cljs.core.async.impl.ioc_macros_runtime.Set_BANG_(self__.field,self__.object,self__.val,G__405,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_macros_runtime.Set_BANG_.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9802__auto__,entry__9803__auto__){
var self__ = this;
var this__9802__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__9803__auto__)){
return this__9802__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__9803__auto__,(0)),cljs.core._nth.call(null,entry__9803__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__9802__auto____$1,entry__9803__auto__);
}
});

cljs.core.async.impl.ioc_macros_runtime.Set_BANG_.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"field","field",(338095027),null),new cljs.core.Symbol(null,"object","object",(-1179821820),null),new cljs.core.Symbol(null,"val","val",(1769233139),null)], null);
});

cljs.core.async.impl.ioc_macros_runtime.Set_BANG_.cljs$lang$type = true;

cljs.core.async.impl.ioc_macros_runtime.Set_BANG_.cljs$lang$ctorPrSeq = (function (this__9826__auto__){
return (new cljs.core.List(null,"cljs.core.async.impl.ioc-macros-runtime/Set!",null,(1),null));
});

cljs.core.async.impl.ioc_macros_runtime.Set_BANG_.cljs$lang$ctorPrWriter = (function (this__9826__auto__,writer__9827__auto__){
return cljs.core._write.call(null,writer__9827__auto__,"cljs.core.async.impl.ioc-macros-runtime/Set!");
});

/**
 * Positional factory function for cljs.core.async.impl.ioc-macros-runtime/Set!.
 */
cljs.core.async.impl.ioc_macros_runtime.__GT_Set_BANG_ = (function cljs$core$async$impl$ioc_macros_runtime$__GT_Set_BANG_(field,object,val){
return (new cljs.core.async.impl.ioc_macros_runtime.Set_BANG_(field,object,val,null,null,null));
});

/**
 * Factory function for cljs.core.async.impl.ioc-macros-runtime/Set!, taking a map of keywords to field values.
 */
cljs.core.async.impl.ioc_macros_runtime.map__GT_Set_BANG_ = (function cljs$core$async$impl$ioc_macros_runtime$map__GT_Set_BANG_(G__409){
var extmap__9825__auto__ = (function (){var G__418 = cljs.core.dissoc.call(null,G__409,new cljs.core.Keyword(null,"field","field",(-1302436500)),new cljs.core.Keyword(null,"object","object",(1474613949)),new cljs.core.Keyword(null,"val","val",(128701612)));
if(cljs.core.record_QMARK_.call(null,G__409)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__418);
} else {
return G__418;
}
})();
return (new cljs.core.async.impl.ioc_macros_runtime.Set_BANG_(new cljs.core.Keyword(null,"field","field",(-1302436500)).cljs$core$IFn$_invoke$arity$1(G__409),new cljs.core.Keyword(null,"object","object",(1474613949)).cljs$core$IFn$_invoke$arity$1(G__409),new cljs.core.Keyword(null,"val","val",(128701612)).cljs$core$IFn$_invoke$arity$1(G__409),null,cljs.core.not_empty.call(null,extmap__9825__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.async.impl.ioc_macros_runtime.ITerminator}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.async.impl.ioc_macros_runtime.IInstruction}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.core.async.impl.ioc_macros_runtime.CondBr = (function (test,then_block,else_block,__meta,__extmap,__hash){
this.test = test;
this.then_block = then_block;
this.else_block = else_block;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = -2064251126;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.core.async.impl.ioc_macros_runtime.CondBr.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9797__auto__,k__9798__auto__){
var self__ = this;
var this__9797__auto____$1 = this;
return this__9797__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9798__auto__,null);
});

cljs.core.async.impl.ioc_macros_runtime.CondBr.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9799__auto__,k421,else__9800__auto__){
var self__ = this;
var this__9799__auto____$1 = this;
var G__425 = k421;
var G__425__$1 = (((G__425 instanceof cljs.core.Keyword))?G__425.fqn:null);
switch (G__425__$1) {
case "test":
return self__.test;

break;
case "then-block":
return self__.then_block;

break;
case "else-block":
return self__.else_block;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k421,else__9800__auto__);

}
});

cljs.core.async.impl.ioc_macros_runtime.CondBr.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__9816__auto__,f__9817__auto__,init__9818__auto__){
var self__ = this;
var this__9816__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__9816__auto____$1){
return (function (ret__9819__auto__,p__426){
var vec__427 = p__426;
var k__9820__auto__ = cljs.core.nth.call(null,vec__427,(0),null);
var v__9821__auto__ = cljs.core.nth.call(null,vec__427,(1),null);
return f__9817__auto__.call(null,ret__9819__auto__,k__9820__auto__,v__9821__auto__);
});})(this__9816__auto____$1))
,init__9818__auto__,this__9816__auto____$1);
});

cljs.core.async.impl.ioc_macros_runtime.CondBr.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9811__auto__,writer__9812__auto__,opts__9813__auto__){
var self__ = this;
var this__9811__auto____$1 = this;
var pr_pair__9814__auto__ = ((function (this__9811__auto____$1){
return (function (keyval__9815__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__9812__auto__,cljs.core.pr_writer,""," ","",opts__9813__auto__,keyval__9815__auto__);
});})(this__9811__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__9812__auto__,pr_pair__9814__auto__,"#cljs.core.async.impl.ioc-macros-runtime.CondBr{",", ","}",opts__9813__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"test","test",(577538877)),self__.test],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"then-block","then-block",(1414126772)),self__.then_block],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"else-block","else-block",(620169757)),self__.else_block],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_macros_runtime.CondBr.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__420){
var self__ = this;
var G__420__$1 = this;
return (new cljs.core.RecordIter((0),G__420__$1,(3),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"test","test",(577538877)),new cljs.core.Keyword(null,"then-block","then-block",(1414126772)),new cljs.core.Keyword(null,"else-block","else-block",(620169757))], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.core.async.impl.ioc_macros_runtime.CondBr.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9795__auto__){
var self__ = this;
var this__9795__auto____$1 = this;
return self__.__meta;
});

cljs.core.async.impl.ioc_macros_runtime.CondBr.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9792__auto__){
var self__ = this;
var this__9792__auto____$1 = this;
return (new cljs.core.async.impl.ioc_macros_runtime.CondBr(self__.test,self__.then_block,self__.else_block,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_macros_runtime.CondBr.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9801__auto__){
var self__ = this;
var this__9801__auto____$1 = this;
return ((3) + cljs.core.count.call(null,self__.__extmap));
});

cljs.core.async.impl.ioc_macros_runtime.CondBr.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9793__auto__){
var self__ = this;
var this__9793__auto____$1 = this;
var h__9592__auto__ = self__.__hash;
if((!((h__9592__auto__ == null)))){
return h__9592__auto__;
} else {
var h__9592__auto____$1 = ((function (h__9592__auto__,this__9793__auto____$1){
return (function (coll__9794__auto__){
return ((-1323457925) ^ cljs.core.hash_unordered_coll.call(null,coll__9794__auto__));
});})(h__9592__auto__,this__9793__auto____$1))
.call(null,this__9793__auto____$1);
self__.__hash = h__9592__auto____$1;

return h__9592__auto____$1;
}
});

cljs.core.async.impl.ioc_macros_runtime.CondBr.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this422,other423){
var self__ = this;
var this422__$1 = this;
return (((!((other423 == null)))) && ((this422__$1.constructor === other423.constructor)) && (cljs.core._EQ_.call(null,this422__$1.test,other423.test)) && (cljs.core._EQ_.call(null,this422__$1.then_block,other423.then_block)) && (cljs.core._EQ_.call(null,this422__$1.else_block,other423.else_block)) && (cljs.core._EQ_.call(null,this422__$1.__extmap,other423.__extmap)));
});

cljs.core.async.impl.ioc_macros_runtime.CondBr.prototype.cljs$core$async$impl$ioc_macros_runtime$ITerminator$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.ioc_macros_runtime.CondBr.prototype.cljs$core$async$impl$ioc_macros_runtime$ITerminator$terminate_block$arity$3 = (function (this$,state_sym,_){
var self__ = this;
var this$__$1 = this;
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",(1686842252),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",(1181717262),null),null,(1),null)),(new cljs.core.List(null,self__.test,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core.async.impl.ioc-macros","aset-all!","cljs.core.async.impl.ioc-macros/aset-all!",(2072147987),null),null,(1),null)),(new cljs.core.List(null,state_sym,null,(1),null)),(new cljs.core.List(null,(1),null,(1),null)),(new cljs.core.List(null,self__.then_block,null,(1),null)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core.async.impl.ioc-macros","aset-all!","cljs.core.async.impl.ioc-macros/aset-all!",(2072147987),null),null,(1),null)),(new cljs.core.List(null,state_sym,null,(1),null)),(new cljs.core.List(null,(1),null,(1),null)),(new cljs.core.List(null,self__.else_block,null,(1),null)))),null,(1),null)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"recur","recur",(-437573268)),null,(1),null))));
});

cljs.core.async.impl.ioc_macros_runtime.CondBr.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.ioc_macros_runtime.CondBr.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$reads_from$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.test], null);
});

cljs.core.async.impl.ioc_macros_runtime.CondBr.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$writes_to$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.PersistentVector.EMPTY;
});

cljs.core.async.impl.ioc_macros_runtime.CondBr.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$block_references$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.then_block,self__.else_block], null);
});

cljs.core.async.impl.ioc_macros_runtime.CondBr.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9806__auto__,k__9807__auto__){
var self__ = this;
var this__9806__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"test","test",(577538877)),null,new cljs.core.Keyword(null,"then-block","then-block",(1414126772)),null,new cljs.core.Keyword(null,"else-block","else-block",(620169757)),null], null), null),k__9807__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__9806__auto____$1),self__.__meta),k__9807__auto__);
} else {
return (new cljs.core.async.impl.ioc_macros_runtime.CondBr(self__.test,self__.then_block,self__.else_block,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__9807__auto__)),null));
}
});

cljs.core.async.impl.ioc_macros_runtime.CondBr.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9804__auto__,k__9805__auto__,G__420){
var self__ = this;
var this__9804__auto____$1 = this;
var pred__430 = cljs.core.keyword_identical_QMARK_;
var expr__431 = k__9805__auto__;
if(cljs.core.truth_(pred__430.call(null,new cljs.core.Keyword(null,"test","test",(577538877)),expr__431))){
return (new cljs.core.async.impl.ioc_macros_runtime.CondBr(G__420,self__.then_block,self__.else_block,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__430.call(null,new cljs.core.Keyword(null,"then-block","then-block",(1414126772)),expr__431))){
return (new cljs.core.async.impl.ioc_macros_runtime.CondBr(self__.test,G__420,self__.else_block,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__430.call(null,new cljs.core.Keyword(null,"else-block","else-block",(620169757)),expr__431))){
return (new cljs.core.async.impl.ioc_macros_runtime.CondBr(self__.test,self__.then_block,G__420,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.async.impl.ioc_macros_runtime.CondBr(self__.test,self__.then_block,self__.else_block,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__9805__auto__,G__420),null));
}
}
}
});

cljs.core.async.impl.ioc_macros_runtime.CondBr.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9809__auto__){
var self__ = this;
var this__9809__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"test","test",(577538877)),self__.test,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"then-block","then-block",(1414126772)),self__.then_block,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"else-block","else-block",(620169757)),self__.else_block,null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_macros_runtime.CondBr.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9796__auto__,G__420){
var self__ = this;
var this__9796__auto____$1 = this;
return (new cljs.core.async.impl.ioc_macros_runtime.CondBr(self__.test,self__.then_block,self__.else_block,G__420,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_macros_runtime.CondBr.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9802__auto__,entry__9803__auto__){
var self__ = this;
var this__9802__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__9803__auto__)){
return this__9802__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__9803__auto__,(0)),cljs.core._nth.call(null,entry__9803__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__9802__auto____$1,entry__9803__auto__);
}
});

cljs.core.async.impl.ioc_macros_runtime.CondBr.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"test","test",(-2076896892),null),new cljs.core.Symbol(null,"then-block","then-block",(-1240308997),null),new cljs.core.Symbol(null,"else-block","else-block",(-2034266012),null)], null);
});

cljs.core.async.impl.ioc_macros_runtime.CondBr.cljs$lang$type = true;

cljs.core.async.impl.ioc_macros_runtime.CondBr.cljs$lang$ctorPrSeq = (function (this__9826__auto__){
return (new cljs.core.List(null,"cljs.core.async.impl.ioc-macros-runtime/CondBr",null,(1),null));
});

cljs.core.async.impl.ioc_macros_runtime.CondBr.cljs$lang$ctorPrWriter = (function (this__9826__auto__,writer__9827__auto__){
return cljs.core._write.call(null,writer__9827__auto__,"cljs.core.async.impl.ioc-macros-runtime/CondBr");
});

/**
 * Positional factory function for cljs.core.async.impl.ioc-macros-runtime/CondBr.
 */
cljs.core.async.impl.ioc_macros_runtime.__GT_CondBr = (function cljs$core$async$impl$ioc_macros_runtime$__GT_CondBr(test,then_block,else_block){
return (new cljs.core.async.impl.ioc_macros_runtime.CondBr(test,then_block,else_block,null,null,null));
});

/**
 * Factory function for cljs.core.async.impl.ioc-macros-runtime/CondBr, taking a map of keywords to field values.
 */
cljs.core.async.impl.ioc_macros_runtime.map__GT_CondBr = (function cljs$core$async$impl$ioc_macros_runtime$map__GT_CondBr(G__424){
var extmap__9825__auto__ = (function (){var G__433 = cljs.core.dissoc.call(null,G__424,new cljs.core.Keyword(null,"test","test",(577538877)),new cljs.core.Keyword(null,"then-block","then-block",(1414126772)),new cljs.core.Keyword(null,"else-block","else-block",(620169757)));
if(cljs.core.record_QMARK_.call(null,G__424)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__433);
} else {
return G__433;
}
})();
return (new cljs.core.async.impl.ioc_macros_runtime.CondBr(new cljs.core.Keyword(null,"test","test",(577538877)).cljs$core$IFn$_invoke$arity$1(G__424),new cljs.core.Keyword(null,"then-block","then-block",(1414126772)).cljs$core$IFn$_invoke$arity$1(G__424),new cljs.core.Keyword(null,"else-block","else-block",(620169757)).cljs$core$IFn$_invoke$arity$1(G__424),null,cljs.core.not_empty.call(null,extmap__9825__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.async.impl.ioc_macros_runtime.IEmittableInstruction}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.async.impl.ioc_macros_runtime.IInstruction}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.core.async.impl.ioc_macros_runtime.PushTry = (function (catch_block,__meta,__extmap,__hash){
this.catch_block = catch_block;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = -2064251126;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.core.async.impl.ioc_macros_runtime.PushTry.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9797__auto__,k__9798__auto__){
var self__ = this;
var this__9797__auto____$1 = this;
return this__9797__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9798__auto__,null);
});

cljs.core.async.impl.ioc_macros_runtime.PushTry.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9799__auto__,k436,else__9800__auto__){
var self__ = this;
var this__9799__auto____$1 = this;
var G__440 = k436;
var G__440__$1 = (((G__440 instanceof cljs.core.Keyword))?G__440.fqn:null);
switch (G__440__$1) {
case "catch-block":
return self__.catch_block;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k436,else__9800__auto__);

}
});

cljs.core.async.impl.ioc_macros_runtime.PushTry.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__9816__auto__,f__9817__auto__,init__9818__auto__){
var self__ = this;
var this__9816__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__9816__auto____$1){
return (function (ret__9819__auto__,p__441){
var vec__442 = p__441;
var k__9820__auto__ = cljs.core.nth.call(null,vec__442,(0),null);
var v__9821__auto__ = cljs.core.nth.call(null,vec__442,(1),null);
return f__9817__auto__.call(null,ret__9819__auto__,k__9820__auto__,v__9821__auto__);
});})(this__9816__auto____$1))
,init__9818__auto__,this__9816__auto____$1);
});

cljs.core.async.impl.ioc_macros_runtime.PushTry.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9811__auto__,writer__9812__auto__,opts__9813__auto__){
var self__ = this;
var this__9811__auto____$1 = this;
var pr_pair__9814__auto__ = ((function (this__9811__auto____$1){
return (function (keyval__9815__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__9812__auto__,cljs.core.pr_writer,""," ","",opts__9813__auto__,keyval__9815__auto__);
});})(this__9811__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__9812__auto__,pr_pair__9814__auto__,"#cljs.core.async.impl.ioc-macros-runtime.PushTry{",", ","}",opts__9813__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-block","catch-block",(1175212748)),self__.catch_block],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_macros_runtime.PushTry.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__435){
var self__ = this;
var G__435__$1 = this;
return (new cljs.core.RecordIter((0),G__435__$1,(1),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"catch-block","catch-block",(1175212748))], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.core.async.impl.ioc_macros_runtime.PushTry.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9795__auto__){
var self__ = this;
var this__9795__auto____$1 = this;
return self__.__meta;
});

cljs.core.async.impl.ioc_macros_runtime.PushTry.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9792__auto__){
var self__ = this;
var this__9792__auto____$1 = this;
return (new cljs.core.async.impl.ioc_macros_runtime.PushTry(self__.catch_block,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_macros_runtime.PushTry.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9801__auto__){
var self__ = this;
var this__9801__auto____$1 = this;
return ((1) + cljs.core.count.call(null,self__.__extmap));
});

cljs.core.async.impl.ioc_macros_runtime.PushTry.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9793__auto__){
var self__ = this;
var this__9793__auto____$1 = this;
var h__9592__auto__ = self__.__hash;
if((!((h__9592__auto__ == null)))){
return h__9592__auto__;
} else {
var h__9592__auto____$1 = ((function (h__9592__auto__,this__9793__auto____$1){
return (function (coll__9794__auto__){
return ((849833523) ^ cljs.core.hash_unordered_coll.call(null,coll__9794__auto__));
});})(h__9592__auto__,this__9793__auto____$1))
.call(null,this__9793__auto____$1);
self__.__hash = h__9592__auto____$1;

return h__9592__auto____$1;
}
});

cljs.core.async.impl.ioc_macros_runtime.PushTry.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this437,other438){
var self__ = this;
var this437__$1 = this;
return (((!((other438 == null)))) && ((this437__$1.constructor === other438.constructor)) && (cljs.core._EQ_.call(null,this437__$1.catch_block,other438.catch_block)) && (cljs.core._EQ_.call(null,this437__$1.__extmap,other438.__extmap)));
});

cljs.core.async.impl.ioc_macros_runtime.PushTry.prototype.cljs$core$async$impl$ioc_macros_runtime$IEmittableInstruction$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.ioc_macros_runtime.PushTry.prototype.cljs$core$async$impl$ioc_macros_runtime$IEmittableInstruction$emit_instruction$arity$2 = (function (this$,state_sym){
var self__ = this;
var this$__$1 = this;
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"_","_",(-1201019570),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core.async.impl.ioc-macros","aset-all!","cljs.core.async.impl.ioc-macros/aset-all!",(2072147987),null),null,(1),null)),(new cljs.core.List(null,state_sym,null,(1),null)),(new cljs.core.List(null,(4),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cons","cljs.core/cons",(96507417),null),null,(1),null)),(new cljs.core.List(null,self__.catch_block,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","aget","cljs.core/aget",(6345791),null),null,(1),null)),(new cljs.core.List(null,state_sym,null,(1),null)),(new cljs.core.List(null,(4),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null)))));
});

cljs.core.async.impl.ioc_macros_runtime.PushTry.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.ioc_macros_runtime.PushTry.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$reads_from$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.PersistentVector.EMPTY;
});

cljs.core.async.impl.ioc_macros_runtime.PushTry.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$writes_to$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.PersistentVector.EMPTY;
});

cljs.core.async.impl.ioc_macros_runtime.PushTry.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$block_references$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.catch_block], null);
});

cljs.core.async.impl.ioc_macros_runtime.PushTry.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9806__auto__,k__9807__auto__){
var self__ = this;
var this__9806__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"catch-block","catch-block",(1175212748)),null], null), null),k__9807__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__9806__auto____$1),self__.__meta),k__9807__auto__);
} else {
return (new cljs.core.async.impl.ioc_macros_runtime.PushTry(self__.catch_block,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__9807__auto__)),null));
}
});

cljs.core.async.impl.ioc_macros_runtime.PushTry.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9804__auto__,k__9805__auto__,G__435){
var self__ = this;
var this__9804__auto____$1 = this;
var pred__445 = cljs.core.keyword_identical_QMARK_;
var expr__446 = k__9805__auto__;
if(cljs.core.truth_(pred__445.call(null,new cljs.core.Keyword(null,"catch-block","catch-block",(1175212748)),expr__446))){
return (new cljs.core.async.impl.ioc_macros_runtime.PushTry(G__435,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.async.impl.ioc_macros_runtime.PushTry(self__.catch_block,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__9805__auto__,G__435),null));
}
});

cljs.core.async.impl.ioc_macros_runtime.PushTry.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9809__auto__){
var self__ = this;
var this__9809__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"catch-block","catch-block",(1175212748)),self__.catch_block,null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_macros_runtime.PushTry.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9796__auto__,G__435){
var self__ = this;
var this__9796__auto____$1 = this;
return (new cljs.core.async.impl.ioc_macros_runtime.PushTry(self__.catch_block,G__435,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_macros_runtime.PushTry.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9802__auto__,entry__9803__auto__){
var self__ = this;
var this__9802__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__9803__auto__)){
return this__9802__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__9803__auto__,(0)),cljs.core._nth.call(null,entry__9803__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__9802__auto____$1,entry__9803__auto__);
}
});

cljs.core.async.impl.ioc_macros_runtime.PushTry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"catch-block","catch-block",(-1479223021),null)], null);
});

cljs.core.async.impl.ioc_macros_runtime.PushTry.cljs$lang$type = true;

cljs.core.async.impl.ioc_macros_runtime.PushTry.cljs$lang$ctorPrSeq = (function (this__9826__auto__){
return (new cljs.core.List(null,"cljs.core.async.impl.ioc-macros-runtime/PushTry",null,(1),null));
});

cljs.core.async.impl.ioc_macros_runtime.PushTry.cljs$lang$ctorPrWriter = (function (this__9826__auto__,writer__9827__auto__){
return cljs.core._write.call(null,writer__9827__auto__,"cljs.core.async.impl.ioc-macros-runtime/PushTry");
});

/**
 * Positional factory function for cljs.core.async.impl.ioc-macros-runtime/PushTry.
 */
cljs.core.async.impl.ioc_macros_runtime.__GT_PushTry = (function cljs$core$async$impl$ioc_macros_runtime$__GT_PushTry(catch_block){
return (new cljs.core.async.impl.ioc_macros_runtime.PushTry(catch_block,null,null,null));
});

/**
 * Factory function for cljs.core.async.impl.ioc-macros-runtime/PushTry, taking a map of keywords to field values.
 */
cljs.core.async.impl.ioc_macros_runtime.map__GT_PushTry = (function cljs$core$async$impl$ioc_macros_runtime$map__GT_PushTry(G__439){
var extmap__9825__auto__ = (function (){var G__448 = cljs.core.dissoc.call(null,G__439,new cljs.core.Keyword(null,"catch-block","catch-block",(1175212748)));
if(cljs.core.record_QMARK_.call(null,G__439)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__448);
} else {
return G__448;
}
})();
return (new cljs.core.async.impl.ioc_macros_runtime.PushTry(new cljs.core.Keyword(null,"catch-block","catch-block",(1175212748)).cljs$core$IFn$_invoke$arity$1(G__439),null,cljs.core.not_empty.call(null,extmap__9825__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.async.impl.ioc_macros_runtime.IEmittableInstruction}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.async.impl.ioc_macros_runtime.IInstruction}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.core.async.impl.ioc_macros_runtime.PopTry = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = -2064251126;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.core.async.impl.ioc_macros_runtime.PopTry.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9797__auto__,k__9798__auto__){
var self__ = this;
var this__9797__auto____$1 = this;
return this__9797__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9798__auto__,null);
});

cljs.core.async.impl.ioc_macros_runtime.PopTry.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9799__auto__,k451,else__9800__auto__){
var self__ = this;
var this__9799__auto____$1 = this;
var G__455 = k451;
switch (G__455) {
default:
return cljs.core.get.call(null,self__.__extmap,k451,else__9800__auto__);

}
});

cljs.core.async.impl.ioc_macros_runtime.PopTry.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__9816__auto__,f__9817__auto__,init__9818__auto__){
var self__ = this;
var this__9816__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__9816__auto____$1){
return (function (ret__9819__auto__,p__456){
var vec__457 = p__456;
var k__9820__auto__ = cljs.core.nth.call(null,vec__457,(0),null);
var v__9821__auto__ = cljs.core.nth.call(null,vec__457,(1),null);
return f__9817__auto__.call(null,ret__9819__auto__,k__9820__auto__,v__9821__auto__);
});})(this__9816__auto____$1))
,init__9818__auto__,this__9816__auto____$1);
});

cljs.core.async.impl.ioc_macros_runtime.PopTry.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9811__auto__,writer__9812__auto__,opts__9813__auto__){
var self__ = this;
var this__9811__auto____$1 = this;
var pr_pair__9814__auto__ = ((function (this__9811__auto____$1){
return (function (keyval__9815__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__9812__auto__,cljs.core.pr_writer,""," ","",opts__9813__auto__,keyval__9815__auto__);
});})(this__9811__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__9812__auto__,pr_pair__9814__auto__,"#cljs.core.async.impl.ioc-macros-runtime.PopTry{",", ","}",opts__9813__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

cljs.core.async.impl.ioc_macros_runtime.PopTry.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__450){
var self__ = this;
var G__450__$1 = this;
return (new cljs.core.RecordIter((0),G__450__$1,(0),cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.core.async.impl.ioc_macros_runtime.PopTry.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9795__auto__){
var self__ = this;
var this__9795__auto____$1 = this;
return self__.__meta;
});

cljs.core.async.impl.ioc_macros_runtime.PopTry.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9792__auto__){
var self__ = this;
var this__9792__auto____$1 = this;
return (new cljs.core.async.impl.ioc_macros_runtime.PopTry(self__.__meta,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_macros_runtime.PopTry.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9801__auto__){
var self__ = this;
var this__9801__auto____$1 = this;
return ((0) + cljs.core.count.call(null,self__.__extmap));
});

cljs.core.async.impl.ioc_macros_runtime.PopTry.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9793__auto__){
var self__ = this;
var this__9793__auto____$1 = this;
var h__9592__auto__ = self__.__hash;
if((!((h__9592__auto__ == null)))){
return h__9592__auto__;
} else {
var h__9592__auto____$1 = ((function (h__9592__auto__,this__9793__auto____$1){
return (function (coll__9794__auto__){
return ((-1828576129) ^ cljs.core.hash_unordered_coll.call(null,coll__9794__auto__));
});})(h__9592__auto__,this__9793__auto____$1))
.call(null,this__9793__auto____$1);
self__.__hash = h__9592__auto____$1;

return h__9592__auto____$1;
}
});

cljs.core.async.impl.ioc_macros_runtime.PopTry.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this452,other453){
var self__ = this;
var this452__$1 = this;
return (((!((other453 == null)))) && ((this452__$1.constructor === other453.constructor)) && (cljs.core._EQ_.call(null,this452__$1.__extmap,other453.__extmap)));
});

cljs.core.async.impl.ioc_macros_runtime.PopTry.prototype.cljs$core$async$impl$ioc_macros_runtime$IEmittableInstruction$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.ioc_macros_runtime.PopTry.prototype.cljs$core$async$impl$ioc_macros_runtime$IEmittableInstruction$emit_instruction$arity$2 = (function (this$,state_sym){
var self__ = this;
var this$__$1 = this;
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"_","_",(-1201019570),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core.async.impl.ioc-macros","aset-all!","cljs.core.async.impl.ioc-macros/aset-all!",(2072147987),null),null,(1),null)),(new cljs.core.List(null,state_sym,null,(1),null)),(new cljs.core.List(null,(4),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",(-285075455),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","aget","cljs.core/aget",(6345791),null),null,(1),null)),(new cljs.core.List(null,state_sym,null,(1),null)),(new cljs.core.List(null,(4),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null)))));
});

cljs.core.async.impl.ioc_macros_runtime.PopTry.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.ioc_macros_runtime.PopTry.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$reads_from$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.PersistentVector.EMPTY;
});

cljs.core.async.impl.ioc_macros_runtime.PopTry.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$writes_to$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.PersistentVector.EMPTY;
});

cljs.core.async.impl.ioc_macros_runtime.PopTry.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$block_references$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.PersistentVector.EMPTY;
});

cljs.core.async.impl.ioc_macros_runtime.PopTry.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9806__auto__,k__9807__auto__){
var self__ = this;
var this__9806__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__9807__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__9806__auto____$1),self__.__meta),k__9807__auto__);
} else {
return (new cljs.core.async.impl.ioc_macros_runtime.PopTry(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__9807__auto__)),null));
}
});

cljs.core.async.impl.ioc_macros_runtime.PopTry.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9804__auto__,k__9805__auto__,G__450){
var self__ = this;
var this__9804__auto____$1 = this;
var pred__460 = cljs.core.keyword_identical_QMARK_;
var expr__461 = k__9805__auto__;
return (new cljs.core.async.impl.ioc_macros_runtime.PopTry(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__9805__auto__,G__450),null));
});

cljs.core.async.impl.ioc_macros_runtime.PopTry.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9809__auto__){
var self__ = this;
var this__9809__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

cljs.core.async.impl.ioc_macros_runtime.PopTry.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9796__auto__,G__450){
var self__ = this;
var this__9796__auto____$1 = this;
return (new cljs.core.async.impl.ioc_macros_runtime.PopTry(G__450,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_macros_runtime.PopTry.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9802__auto__,entry__9803__auto__){
var self__ = this;
var this__9802__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__9803__auto__)){
return this__9802__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__9803__auto__,(0)),cljs.core._nth.call(null,entry__9803__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__9802__auto____$1,entry__9803__auto__);
}
});

cljs.core.async.impl.ioc_macros_runtime.PopTry.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cljs.core.async.impl.ioc_macros_runtime.PopTry.cljs$lang$type = true;

cljs.core.async.impl.ioc_macros_runtime.PopTry.cljs$lang$ctorPrSeq = (function (this__9826__auto__){
return (new cljs.core.List(null,"cljs.core.async.impl.ioc-macros-runtime/PopTry",null,(1),null));
});

cljs.core.async.impl.ioc_macros_runtime.PopTry.cljs$lang$ctorPrWriter = (function (this__9826__auto__,writer__9827__auto__){
return cljs.core._write.call(null,writer__9827__auto__,"cljs.core.async.impl.ioc-macros-runtime/PopTry");
});

/**
 * Positional factory function for cljs.core.async.impl.ioc-macros-runtime/PopTry.
 */
cljs.core.async.impl.ioc_macros_runtime.__GT_PopTry = (function cljs$core$async$impl$ioc_macros_runtime$__GT_PopTry(){
return (new cljs.core.async.impl.ioc_macros_runtime.PopTry(null,null,null));
});

/**
 * Factory function for cljs.core.async.impl.ioc-macros-runtime/PopTry, taking a map of keywords to field values.
 */
cljs.core.async.impl.ioc_macros_runtime.map__GT_PopTry = (function cljs$core$async$impl$ioc_macros_runtime$map__GT_PopTry(G__454){
var extmap__9825__auto__ = (function (){var G__463 = cljs.core.dissoc.call(null,G__454);
if(cljs.core.record_QMARK_.call(null,G__454)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__463);
} else {
return G__463;
}
})();
return (new cljs.core.async.impl.ioc_macros_runtime.PopTry(null,cljs.core.not_empty.call(null,extmap__9825__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.async.impl.ioc_macros_runtime.ITerminator}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.async.impl.ioc_macros_runtime.IInstruction}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.core.async.impl.ioc_macros_runtime.CatchHandler = (function (catches,__meta,__extmap,__hash){
this.catches = catches;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = -2064251126;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.core.async.impl.ioc_macros_runtime.CatchHandler.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9797__auto__,k__9798__auto__){
var self__ = this;
var this__9797__auto____$1 = this;
return this__9797__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9798__auto__,null);
});

cljs.core.async.impl.ioc_macros_runtime.CatchHandler.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9799__auto__,k466,else__9800__auto__){
var self__ = this;
var this__9799__auto____$1 = this;
var G__470 = k466;
var G__470__$1 = (((G__470 instanceof cljs.core.Keyword))?G__470.fqn:null);
switch (G__470__$1) {
case "catches":
return self__.catches;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k466,else__9800__auto__);

}
});

cljs.core.async.impl.ioc_macros_runtime.CatchHandler.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__9816__auto__,f__9817__auto__,init__9818__auto__){
var self__ = this;
var this__9816__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__9816__auto____$1){
return (function (ret__9819__auto__,p__471){
var vec__472 = p__471;
var k__9820__auto__ = cljs.core.nth.call(null,vec__472,(0),null);
var v__9821__auto__ = cljs.core.nth.call(null,vec__472,(1),null);
return f__9817__auto__.call(null,ret__9819__auto__,k__9820__auto__,v__9821__auto__);
});})(this__9816__auto____$1))
,init__9818__auto__,this__9816__auto____$1);
});

cljs.core.async.impl.ioc_macros_runtime.CatchHandler.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9811__auto__,writer__9812__auto__,opts__9813__auto__){
var self__ = this;
var this__9811__auto____$1 = this;
var pr_pair__9814__auto__ = ((function (this__9811__auto____$1){
return (function (keyval__9815__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__9812__auto__,cljs.core.pr_writer,""," ","",opts__9813__auto__,keyval__9815__auto__);
});})(this__9811__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__9812__auto__,pr_pair__9814__auto__,"#cljs.core.async.impl.ioc-macros-runtime.CatchHandler{",", ","}",opts__9813__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catches","catches",(-1478797617)),self__.catches],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_macros_runtime.CatchHandler.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__465){
var self__ = this;
var G__465__$1 = this;
return (new cljs.core.RecordIter((0),G__465__$1,(1),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"catches","catches",(-1478797617))], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.core.async.impl.ioc_macros_runtime.CatchHandler.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9795__auto__){
var self__ = this;
var this__9795__auto____$1 = this;
return self__.__meta;
});

cljs.core.async.impl.ioc_macros_runtime.CatchHandler.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9792__auto__){
var self__ = this;
var this__9792__auto____$1 = this;
return (new cljs.core.async.impl.ioc_macros_runtime.CatchHandler(self__.catches,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_macros_runtime.CatchHandler.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9801__auto__){
var self__ = this;
var this__9801__auto____$1 = this;
return ((1) + cljs.core.count.call(null,self__.__extmap));
});

cljs.core.async.impl.ioc_macros_runtime.CatchHandler.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9793__auto__){
var self__ = this;
var this__9793__auto____$1 = this;
var h__9592__auto__ = self__.__hash;
if((!((h__9592__auto__ == null)))){
return h__9592__auto__;
} else {
var h__9592__auto____$1 = ((function (h__9592__auto__,this__9793__auto____$1){
return (function (coll__9794__auto__){
return ((-2082240813) ^ cljs.core.hash_unordered_coll.call(null,coll__9794__auto__));
});})(h__9592__auto__,this__9793__auto____$1))
.call(null,this__9793__auto____$1);
self__.__hash = h__9592__auto____$1;

return h__9592__auto____$1;
}
});

cljs.core.async.impl.ioc_macros_runtime.CatchHandler.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this467,other468){
var self__ = this;
var this467__$1 = this;
return (((!((other468 == null)))) && ((this467__$1.constructor === other468.constructor)) && (cljs.core._EQ_.call(null,this467__$1.catches,other468.catches)) && (cljs.core._EQ_.call(null,this467__$1.__extmap,other468.__extmap)));
});

cljs.core.async.impl.ioc_macros_runtime.CatchHandler.prototype.cljs$core$async$impl$ioc_macros_runtime$ITerminator$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.ioc_macros_runtime.CatchHandler.prototype.cljs$core$async$impl$ioc_macros_runtime$ITerminator$terminate_block$arity$3 = (function (this$,state_sym,_){
var self__ = this;
var this$__$1 = this;
var ex = cljs.core.gensym.call(null,new cljs.core.Symbol(null,"ex","ex",(226760186),null));
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,ex,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","aget","cljs.core/aget",(6345791),null),null,(1),null)),(new cljs.core.List(null,state_sym,null,(1),null)),(new cljs.core.List(null,(2),null,(1),null)))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core.async.impl.ioc-macros","aset-all!","cljs.core.async.impl.ioc-macros/aset-all!",(2072147987),null),null,(1),null)),(new cljs.core.List(null,state_sym,null,(1),null)),(new cljs.core.List(null,(5),null,(1),null)),(new cljs.core.List(null,ex,null,(1),null)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",(2005388338),null),null,(1),null)),(function (){var iter__9992__auto__ = ((function (ex,this$__$1){
return (function cljs$core$async$impl$ioc_macros_runtime$iter__475(s__476){
return (new cljs.core.LazySeq(null,((function (ex,this$__$1){
return (function (){
var s__476__$1 = s__476;
while(true){
var temp__9015__auto__ = cljs.core.seq.call(null,s__476__$1);
if(temp__9015__auto__){
var xs__9003__auto__ = temp__9015__auto__;
var vec__481 = cljs.core.first.call(null,xs__9003__auto__);
var handler_idx = cljs.core.nth.call(null,vec__481,(0),null);
var type = cljs.core.nth.call(null,vec__481,(1),null);
var iterys__9988__auto__ = ((function (s__476__$1,vec__481,handler_idx,type,xs__9003__auto__,temp__9015__auto__,ex,this$__$1){
return (function cljs$core$async$impl$ioc_macros_runtime$iter__475_$_iter__477(s__478){
return (new cljs.core.LazySeq(null,((function (s__476__$1,vec__481,handler_idx,type,xs__9003__auto__,temp__9015__auto__,ex,this$__$1){
return (function (){
var s__478__$1 = s__478;
while(true){
var temp__9015__auto____$1 = cljs.core.seq.call(null,s__478__$1);
if(temp__9015__auto____$1){
var s__478__$2 = temp__9015__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__478__$2)){
var c__9990__auto__ = cljs.core.chunk_first.call(null,s__478__$2);
var size__9991__auto__ = cljs.core.count.call(null,c__9990__auto__);
var b__480 = cljs.core.chunk_buffer.call(null,size__9991__auto__);
if((function (){var i__479 = (0);
while(true){
if((i__479 < size__9991__auto__)){
var i = cljs.core._nth.call(null,c__9990__auto__,i__479);
cljs.core.chunk_append.call(null,b__480,i);

var G__489 = (i__479 + (1));
i__479 = G__489;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__480),cljs$core$async$impl$ioc_macros_runtime$iter__475_$_iter__477.call(null,cljs.core.chunk_rest.call(null,s__478__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__480),null);
}
} else {
var i = cljs.core.first.call(null,s__478__$2);
return cljs.core.cons.call(null,i,cljs$core$async$impl$ioc_macros_runtime$iter__475_$_iter__477.call(null,cljs.core.rest.call(null,s__478__$2)));
}
} else {
return null;
}
break;
}
});})(s__476__$1,vec__481,handler_idx,type,xs__9003__auto__,temp__9015__auto__,ex,this$__$1))
,null,null));
});})(s__476__$1,vec__481,handler_idx,type,xs__9003__auto__,temp__9015__auto__,ex,this$__$1))
;
var fs__9989__auto__ = cljs.core.seq.call(null,iterys__9988__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"default","default",(-1987822328))))?true:cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","instance?","cljs.core/instance?",(2044751870),null),null,(1),null)),(new cljs.core.List(null,type,null,(1),null)),(new cljs.core.List(null,ex,null,(1),null))))),cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core.async.impl.ioc-macros","aset-all!","cljs.core.async.impl.ioc-macros/aset-all!",(2072147987),null),null,(1),null)),(new cljs.core.List(null,state_sym,null,(1),null)),(new cljs.core.List(null,(1),null,(1),null)),(new cljs.core.List(null,handler_idx,null,(1),null)),(new cljs.core.List(null,(5),null,(1),null)),(new cljs.core.List(null,null,null,(1),null))))], null)));
if(fs__9989__auto__){
return cljs.core.concat.call(null,fs__9989__auto__,cljs$core$async$impl$ioc_macros_runtime$iter__475.call(null,cljs.core.rest.call(null,s__476__$1)));
} else {
var G__490 = cljs.core.rest.call(null,s__476__$1);
s__476__$1 = G__490;
continue;
}
} else {
return null;
}
break;
}
});})(ex,this$__$1))
,null,null));
});})(ex,this$__$1))
;
return iter__9992__auto__.call(null,self__.catches);
})(),(new cljs.core.List(null,new cljs.core.Keyword(null,"else","else",(-1508377146)),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",(595905694),null),null,(1),null)),(new cljs.core.List(null,ex,null,(1),null)))),null,(1),null)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"recur","recur",(-437573268)),null,(1),null))));
});

cljs.core.async.impl.ioc_macros_runtime.CatchHandler.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.ioc_macros_runtime.CatchHandler.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$reads_from$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.PersistentVector.EMPTY;
});

cljs.core.async.impl.ioc_macros_runtime.CatchHandler.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$writes_to$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.PersistentVector.EMPTY;
});

cljs.core.async.impl.ioc_macros_runtime.CatchHandler.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$block_references$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.map.call(null,cljs.core.first,self__.catches);
});

cljs.core.async.impl.ioc_macros_runtime.CatchHandler.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9806__auto__,k__9807__auto__){
var self__ = this;
var this__9806__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"catches","catches",(-1478797617)),null], null), null),k__9807__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__9806__auto____$1),self__.__meta),k__9807__auto__);
} else {
return (new cljs.core.async.impl.ioc_macros_runtime.CatchHandler(self__.catches,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__9807__auto__)),null));
}
});

cljs.core.async.impl.ioc_macros_runtime.CatchHandler.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9804__auto__,k__9805__auto__,G__465){
var self__ = this;
var this__9804__auto____$1 = this;
var pred__484 = cljs.core.keyword_identical_QMARK_;
var expr__485 = k__9805__auto__;
if(cljs.core.truth_(pred__484.call(null,new cljs.core.Keyword(null,"catches","catches",(-1478797617)),expr__485))){
return (new cljs.core.async.impl.ioc_macros_runtime.CatchHandler(G__465,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.async.impl.ioc_macros_runtime.CatchHandler(self__.catches,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__9805__auto__,G__465),null));
}
});

cljs.core.async.impl.ioc_macros_runtime.CatchHandler.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9809__auto__){
var self__ = this;
var this__9809__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"catches","catches",(-1478797617)),self__.catches,null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_macros_runtime.CatchHandler.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9796__auto__,G__465){
var self__ = this;
var this__9796__auto____$1 = this;
return (new cljs.core.async.impl.ioc_macros_runtime.CatchHandler(self__.catches,G__465,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_macros_runtime.CatchHandler.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9802__auto__,entry__9803__auto__){
var self__ = this;
var this__9802__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__9803__auto__)){
return this__9802__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__9803__auto__,(0)),cljs.core._nth.call(null,entry__9803__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__9802__auto____$1,entry__9803__auto__);
}
});

cljs.core.async.impl.ioc_macros_runtime.CatchHandler.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"catches","catches",(161733910),null)], null);
});

cljs.core.async.impl.ioc_macros_runtime.CatchHandler.cljs$lang$type = true;

cljs.core.async.impl.ioc_macros_runtime.CatchHandler.cljs$lang$ctorPrSeq = (function (this__9826__auto__){
return (new cljs.core.List(null,"cljs.core.async.impl.ioc-macros-runtime/CatchHandler",null,(1),null));
});

cljs.core.async.impl.ioc_macros_runtime.CatchHandler.cljs$lang$ctorPrWriter = (function (this__9826__auto__,writer__9827__auto__){
return cljs.core._write.call(null,writer__9827__auto__,"cljs.core.async.impl.ioc-macros-runtime/CatchHandler");
});

/**
 * Positional factory function for cljs.core.async.impl.ioc-macros-runtime/CatchHandler.
 */
cljs.core.async.impl.ioc_macros_runtime.__GT_CatchHandler = (function cljs$core$async$impl$ioc_macros_runtime$__GT_CatchHandler(catches){
return (new cljs.core.async.impl.ioc_macros_runtime.CatchHandler(catches,null,null,null));
});

/**
 * Factory function for cljs.core.async.impl.ioc-macros-runtime/CatchHandler, taking a map of keywords to field values.
 */
cljs.core.async.impl.ioc_macros_runtime.map__GT_CatchHandler = (function cljs$core$async$impl$ioc_macros_runtime$map__GT_CatchHandler(G__469){
var extmap__9825__auto__ = (function (){var G__487 = cljs.core.dissoc.call(null,G__469,new cljs.core.Keyword(null,"catches","catches",(-1478797617)));
if(cljs.core.record_QMARK_.call(null,G__469)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__487);
} else {
return G__487;
}
})();
return (new cljs.core.async.impl.ioc_macros_runtime.CatchHandler(new cljs.core.Keyword(null,"catches","catches",(-1478797617)).cljs$core$IFn$_invoke$arity$1(G__469),null,cljs.core.not_empty.call(null,extmap__9825__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.async.impl.ioc_macros_runtime.IEmittableInstruction}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.async.impl.ioc_macros_runtime.IInstruction}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.core.async.impl.ioc_macros_runtime.EndFinally = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = -2064251126;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.core.async.impl.ioc_macros_runtime.EndFinally.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9797__auto__,k__9798__auto__){
var self__ = this;
var this__9797__auto____$1 = this;
return this__9797__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9798__auto__,null);
});

cljs.core.async.impl.ioc_macros_runtime.EndFinally.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9799__auto__,k492,else__9800__auto__){
var self__ = this;
var this__9799__auto____$1 = this;
var G__496 = k492;
switch (G__496) {
default:
return cljs.core.get.call(null,self__.__extmap,k492,else__9800__auto__);

}
});

cljs.core.async.impl.ioc_macros_runtime.EndFinally.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__9816__auto__,f__9817__auto__,init__9818__auto__){
var self__ = this;
var this__9816__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__9816__auto____$1){
return (function (ret__9819__auto__,p__497){
var vec__498 = p__497;
var k__9820__auto__ = cljs.core.nth.call(null,vec__498,(0),null);
var v__9821__auto__ = cljs.core.nth.call(null,vec__498,(1),null);
return f__9817__auto__.call(null,ret__9819__auto__,k__9820__auto__,v__9821__auto__);
});})(this__9816__auto____$1))
,init__9818__auto__,this__9816__auto____$1);
});

cljs.core.async.impl.ioc_macros_runtime.EndFinally.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9811__auto__,writer__9812__auto__,opts__9813__auto__){
var self__ = this;
var this__9811__auto____$1 = this;
var pr_pair__9814__auto__ = ((function (this__9811__auto____$1){
return (function (keyval__9815__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__9812__auto__,cljs.core.pr_writer,""," ","",opts__9813__auto__,keyval__9815__auto__);
});})(this__9811__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__9812__auto__,pr_pair__9814__auto__,"#cljs.core.async.impl.ioc-macros-runtime.EndFinally{",", ","}",opts__9813__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

cljs.core.async.impl.ioc_macros_runtime.EndFinally.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__491){
var self__ = this;
var G__491__$1 = this;
return (new cljs.core.RecordIter((0),G__491__$1,(0),cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.core.async.impl.ioc_macros_runtime.EndFinally.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9795__auto__){
var self__ = this;
var this__9795__auto____$1 = this;
return self__.__meta;
});

cljs.core.async.impl.ioc_macros_runtime.EndFinally.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9792__auto__){
var self__ = this;
var this__9792__auto____$1 = this;
return (new cljs.core.async.impl.ioc_macros_runtime.EndFinally(self__.__meta,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_macros_runtime.EndFinally.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9801__auto__){
var self__ = this;
var this__9801__auto____$1 = this;
return ((0) + cljs.core.count.call(null,self__.__extmap));
});

cljs.core.async.impl.ioc_macros_runtime.EndFinally.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9793__auto__){
var self__ = this;
var this__9793__auto____$1 = this;
var h__9592__auto__ = self__.__hash;
if((!((h__9592__auto__ == null)))){
return h__9592__auto__;
} else {
var h__9592__auto____$1 = ((function (h__9592__auto__,this__9793__auto____$1){
return (function (coll__9794__auto__){
return ((1038742623) ^ cljs.core.hash_unordered_coll.call(null,coll__9794__auto__));
});})(h__9592__auto__,this__9793__auto____$1))
.call(null,this__9793__auto____$1);
self__.__hash = h__9592__auto____$1;

return h__9592__auto____$1;
}
});

cljs.core.async.impl.ioc_macros_runtime.EndFinally.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this493,other494){
var self__ = this;
var this493__$1 = this;
return (((!((other494 == null)))) && ((this493__$1.constructor === other494.constructor)) && (cljs.core._EQ_.call(null,this493__$1.__extmap,other494.__extmap)));
});

cljs.core.async.impl.ioc_macros_runtime.EndFinally.prototype.cljs$core$async$impl$ioc_macros_runtime$IEmittableInstruction$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.ioc_macros_runtime.EndFinally.prototype.cljs$core$async$impl$ioc_macros_runtime$IEmittableInstruction$emit_instruction$arity$2 = (function (this$,state_sym){
var self__ = this;
var this$__$1 = this;
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"_","_",(-1201019570),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-let","cljs.core/when-let",(-2049838349),null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"e__12__auto__","e__12__auto__",(1227980878),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","aget","cljs.core/aget",(6345791),null),null,(1),null)),(new cljs.core.List(null,state_sym,null,(1),null)),(new cljs.core.List(null,(5),null,(1),null)))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",(595905694),null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"e__12__auto__","e__12__auto__",(1227980878),null),null,(1),null)))),null,(1),null)))),null,(1),null)))));
});

cljs.core.async.impl.ioc_macros_runtime.EndFinally.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.ioc_macros_runtime.EndFinally.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$reads_from$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.PersistentVector.EMPTY;
});

cljs.core.async.impl.ioc_macros_runtime.EndFinally.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$writes_to$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.PersistentVector.EMPTY;
});

cljs.core.async.impl.ioc_macros_runtime.EndFinally.prototype.cljs$core$async$impl$ioc_macros_runtime$IInstruction$block_references$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.PersistentVector.EMPTY;
});

cljs.core.async.impl.ioc_macros_runtime.EndFinally.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9806__auto__,k__9807__auto__){
var self__ = this;
var this__9806__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__9807__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__9806__auto____$1),self__.__meta),k__9807__auto__);
} else {
return (new cljs.core.async.impl.ioc_macros_runtime.EndFinally(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__9807__auto__)),null));
}
});

cljs.core.async.impl.ioc_macros_runtime.EndFinally.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9804__auto__,k__9805__auto__,G__491){
var self__ = this;
var this__9804__auto____$1 = this;
var pred__501 = cljs.core.keyword_identical_QMARK_;
var expr__502 = k__9805__auto__;
return (new cljs.core.async.impl.ioc_macros_runtime.EndFinally(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__9805__auto__,G__491),null));
});

cljs.core.async.impl.ioc_macros_runtime.EndFinally.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9809__auto__){
var self__ = this;
var this__9809__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

cljs.core.async.impl.ioc_macros_runtime.EndFinally.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9796__auto__,G__491){
var self__ = this;
var this__9796__auto____$1 = this;
return (new cljs.core.async.impl.ioc_macros_runtime.EndFinally(G__491,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_macros_runtime.EndFinally.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9802__auto__,entry__9803__auto__){
var self__ = this;
var this__9802__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__9803__auto__)){
return this__9802__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__9803__auto__,(0)),cljs.core._nth.call(null,entry__9803__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__9802__auto____$1,entry__9803__auto__);
}
});

cljs.core.async.impl.ioc_macros_runtime.EndFinally.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cljs.core.async.impl.ioc_macros_runtime.EndFinally.cljs$lang$type = true;

cljs.core.async.impl.ioc_macros_runtime.EndFinally.cljs$lang$ctorPrSeq = (function (this__9826__auto__){
return (new cljs.core.List(null,"cljs.core.async.impl.ioc-macros-runtime/EndFinally",null,(1),null));
});

cljs.core.async.impl.ioc_macros_runtime.EndFinally.cljs$lang$ctorPrWriter = (function (this__9826__auto__,writer__9827__auto__){
return cljs.core._write.call(null,writer__9827__auto__,"cljs.core.async.impl.ioc-macros-runtime/EndFinally");
});

/**
 * Positional factory function for cljs.core.async.impl.ioc-macros-runtime/EndFinally.
 */
cljs.core.async.impl.ioc_macros_runtime.__GT_EndFinally = (function cljs$core$async$impl$ioc_macros_runtime$__GT_EndFinally(){
return (new cljs.core.async.impl.ioc_macros_runtime.EndFinally(null,null,null));
});

/**
 * Factory function for cljs.core.async.impl.ioc-macros-runtime/EndFinally, taking a map of keywords to field values.
 */
cljs.core.async.impl.ioc_macros_runtime.map__GT_EndFinally = (function cljs$core$async$impl$ioc_macros_runtime$map__GT_EndFinally(G__495){
var extmap__9825__auto__ = (function (){var G__504 = cljs.core.dissoc.call(null,G__495);
if(cljs.core.record_QMARK_.call(null,G__495)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__504);
} else {
return G__504;
}
})();
return (new cljs.core.async.impl.ioc_macros_runtime.EndFinally(null,cljs.core.not_empty.call(null,extmap__9825__auto__),null));
});

if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.impl !== 'undefined') && (typeof cljs.core.async.impl.ioc_macros_runtime !== 'undefined') && (typeof cljs.core.async.impl.ioc_macros_runtime._item_to_ssa !== 'undefined')){
} else {
cljs.core.async.impl.ioc_macros_runtime._item_to_ssa = (function (){var method_table__10166__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__10167__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__10168__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__10169__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__10170__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",(-1053470341)),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.core.async.impl.ioc-macros-runtime","-item-to-ssa"),((function (method_table__10166__auto__,prefer_table__10167__auto__,method_cache__10168__auto__,cached_hierarchy__10169__auto__,hierarchy__10170__auto__){
return (function (x){
if((x instanceof cljs.core.Symbol)){
return new cljs.core.Keyword(null,"symbol","symbol",(-1038572696));
} else {
if(cljs.core.seq_QMARK_.call(null,x)){
return new cljs.core.Keyword(null,"list","list",(765357683));
} else {
if(cljs.core.map_QMARK_.call(null,x)){
return new cljs.core.Keyword(null,"map","map",(1371690461));
} else {
if(cljs.core.set_QMARK_.call(null,x)){
return new cljs.core.Keyword(null,"set","set",(304602554));
} else {
if(cljs.core.vector_QMARK_.call(null,x)){
return new cljs.core.Keyword(null,"vector","vector",(1902966158));
} else {
return new cljs.core.Keyword(null,"default","default",(-1987822328));

}
}
}
}
}
});})(method_table__10166__auto__,prefer_table__10167__auto__,method_cache__10168__auto__,cached_hierarchy__10169__auto__,hierarchy__10170__auto__))
,new cljs.core.Keyword(null,"default","default",(-1987822328)),hierarchy__10170__auto__,method_table__10166__auto__,prefer_table__10167__auto__,method_cache__10168__auto__,cached_hierarchy__10169__auto__));
})();
}
cljs.core.async.impl.ioc_macros_runtime.item_to_ssa = (function cljs$core$async$impl$ioc_macros_runtime$item_to_ssa(x){
return cljs.core.async.impl.ioc_macros_runtime._item_to_ssa.call(null,x);
});
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.impl !== 'undefined') && (typeof cljs.core.async.impl.ioc_macros_runtime !== 'undefined') && (typeof cljs.core.async.impl.ioc_macros_runtime.sexpr_to_ssa !== 'undefined')){
} else {
cljs.core.async.impl.ioc_macros_runtime.sexpr_to_ssa = (function (){var method_table__10166__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__10167__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__10168__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__10169__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__10170__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",(-1053470341)),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.core.async.impl.ioc-macros-runtime","sexpr-to-ssa"),((function (method_table__10166__auto__,prefer_table__10167__auto__,method_cache__10168__auto__,cached_hierarchy__10169__auto__,hierarchy__10170__auto__){
return (function (p__506){
var vec__507 = p__506;
var seq__508 = cljs.core.seq.call(null,vec__507);
var first__509 = cljs.core.first.call(null,seq__508);
var seq__508__$1 = cljs.core.next.call(null,seq__508);
var x = first__509;
var _ = seq__508__$1;
return x;
});})(method_table__10166__auto__,prefer_table__10167__auto__,method_cache__10168__auto__,cached_hierarchy__10169__auto__,hierarchy__10170__auto__))
,new cljs.core.Keyword(null,"default","default",(-1987822328)),hierarchy__10170__auto__,method_table__10166__auto__,prefer_table__10167__auto__,method_cache__10168__auto__,cached_hierarchy__10169__auto__));
})();
}
cljs.core.async.impl.ioc_macros_runtime.is_special_QMARK_ = (function cljs$core$async$impl$ioc_macros_runtime$is_special_QMARK_(x){
var mfn = cljs.core.async.impl.ioc_macros_runtime.sexpr_to_ssa;
return cljs.core.get_method.call(null,mfn,x);
});
cljs.core.async.impl.ioc_macros_runtime.default_sexpr = (function cljs$core$async$impl$ioc_macros_runtime$default_sexpr(args){
return (function (plan_510){
var vec__511 = cljs.core.async.impl.ioc_macros_runtime.all.call(null,cljs.core.map.call(null,cljs.core.async.impl.ioc_macros_runtime.item_to_ssa,args)).call(null,plan_510);
var args_ids = cljs.core.nth.call(null,vec__511,(0),null);
var plan_510__$1 = cljs.core.nth.call(null,vec__511,(1),null);
var vec__514 = cljs.core.async.impl.ioc_macros_runtime.add_instruction.call(null,cljs.core.async.impl.ioc_macros_runtime.__GT_Call.call(null,args_ids)).call(null,plan_510__$1);
var inst_id = cljs.core.nth.call(null,vec__514,(0),null);
var plan_510__$2 = cljs.core.nth.call(null,vec__514,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [inst_id,plan_510__$2], null);
});
});
cljs.core.async.impl.ioc_macros_runtime.local_init_to_ssa = (function cljs$core$async$impl$ioc_macros_runtime$local_init_to_ssa(init){
return (function (plan_517){
var vec__518 = cljs.core.async.impl.ioc_macros_runtime.item_to_ssa.call(null,init).call(null,plan_517);
var bind_id = cljs.core.nth.call(null,vec__518,(0),null);
var plan_517__$1 = cljs.core.nth.call(null,vec__518,(1),null);
var vec__521 = (cljs.core.truth_(new cljs.core.Keyword("cljs.core.async.impl.ioc-macros-runtime","global","cljs.core.async.impl.ioc-macros-runtime/global",(-1863350572)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,bind_id)))?cljs.core.async.impl.ioc_macros_runtime.add_instruction.call(null,cljs.core.async.impl.ioc_macros_runtime.__GT_Const.call(null,bind_id)):((function (vec__518,bind_id,plan_517__$1){
return (function (p){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bind_id,p], null);
});})(vec__518,bind_id,plan_517__$1))
).call(null,plan_517__$1);
var bind_id__$1 = cljs.core.nth.call(null,vec__521,(0),null);
var plan_517__$2 = cljs.core.nth.call(null,vec__521,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bind_id__$1,plan_517__$2], null);
});
});
cljs.core.async.impl.ioc_macros_runtime.let_binding_to_ssa = (function cljs$core$async$impl$ioc_macros_runtime$let_binding_to_ssa(p__524){
var vec__525 = p__524;
var sym = cljs.core.nth.call(null,vec__525,(0),null);
var bind = cljs.core.nth.call(null,vec__525,(1),null);
return ((function (vec__525,sym,bind){
return (function (plan_528){
var vec__529 = cljs.core.async.impl.ioc_macros_runtime.local_init_to_ssa.call(null,bind).call(null,plan_528);
var bind_id = cljs.core.nth.call(null,vec__529,(0),null);
var plan_528__$1 = cljs.core.nth.call(null,vec__529,(1),null);
var vec__532 = cljs.core.async.impl.ioc_macros_runtime.push_alter_binding.call(null,new cljs.core.Keyword(null,"locals","locals",(535295783)),cljs.core.assoc,sym,bind_id).call(null,plan_528__$1);
var _ = cljs.core.nth.call(null,vec__532,(0),null);
var plan_528__$2 = cljs.core.nth.call(null,vec__532,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bind_id,plan_528__$2], null);
});
;})(vec__525,sym,bind))
});
cljs.core._add_method.call(null,cljs.core.async.impl.ioc_macros_runtime.sexpr_to_ssa,new cljs.core.Symbol(null,"let*","let*",(1920721458),null),(function (p__535){
var vec__536 = p__535;
var seq__537 = cljs.core.seq.call(null,vec__536);
var first__538 = cljs.core.first.call(null,seq__537);
var seq__537__$1 = cljs.core.next.call(null,seq__537);
var _ = first__538;
var first__538__$1 = cljs.core.first.call(null,seq__537__$1);
var seq__537__$2 = cljs.core.next.call(null,seq__537__$1);
var binds = first__538__$1;
var body = seq__537__$2;
var parted = cljs.core.partition.call(null,(2),binds);
return ((function (parted,vec__536,seq__537,first__538,seq__537__$1,_,first__538__$1,seq__537__$2,binds,body){
return (function (plan_539){
var vec__540 = cljs.core.async.impl.ioc_macros_runtime.all.call(null,cljs.core.map.call(null,cljs.core.async.impl.ioc_macros_runtime.let_binding_to_ssa,parted)).call(null,plan_539);
var let_ids = cljs.core.nth.call(null,vec__540,(0),null);
var plan_539__$1 = cljs.core.nth.call(null,vec__540,(1),null);
var vec__543 = cljs.core.async.impl.ioc_macros_runtime.all.call(null,cljs.core.map.call(null,cljs.core.async.impl.ioc_macros_runtime.item_to_ssa,body)).call(null,plan_539__$1);
var body_ids = cljs.core.nth.call(null,vec__543,(0),null);
var plan_539__$2 = cljs.core.nth.call(null,vec__543,(1),null);
var vec__546 = cljs.core.async.impl.ioc_macros_runtime.all.call(null,cljs.core.map.call(null,((function (vec__540,let_ids,plan_539__$1,vec__543,body_ids,plan_539__$2,parted,vec__536,seq__537,first__538,seq__537__$1,_,first__538__$1,seq__537__$2,binds,body){
return (function (x){
return cljs.core.async.impl.ioc_macros_runtime.pop_binding.call(null,new cljs.core.Keyword(null,"locals","locals",(535295783)));
});})(vec__540,let_ids,plan_539__$1,vec__543,body_ids,plan_539__$2,parted,vec__536,seq__537,first__538,seq__537__$1,_,first__538__$1,seq__537__$2,binds,body))
,cljs.core.range.call(null,cljs.core.count.call(null,parted)))).call(null,plan_539__$2);
var ___$1 = cljs.core.nth.call(null,vec__546,(0),null);
var plan_539__$3 = cljs.core.nth.call(null,vec__546,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.last.call(null,body_ids),plan_539__$3], null);
});
;})(parted,vec__536,seq__537,first__538,seq__537__$1,_,first__538__$1,seq__537__$2,binds,body))
}));
cljs.core._add_method.call(null,cljs.core.async.impl.ioc_macros_runtime.sexpr_to_ssa,new cljs.core.Symbol(null,"loop*","loop*",(615029416),null),(function (p__549){
var vec__550 = p__549;
var seq__551 = cljs.core.seq.call(null,vec__550);
var first__552 = cljs.core.first.call(null,seq__551);
var seq__551__$1 = cljs.core.next.call(null,seq__551);
var _ = first__552;
var first__552__$1 = cljs.core.first.call(null,seq__551__$1);
var seq__551__$2 = cljs.core.next.call(null,seq__551__$1);
var locals = first__552__$1;
var body = seq__551__$2;
var parted = cljs.core.partition.call(null,(2),locals);
var syms = cljs.core.map.call(null,cljs.core.first,parted);
var inits = cljs.core.map.call(null,cljs.core.second,parted);
return ((function (parted,syms,inits,vec__550,seq__551,first__552,seq__551__$1,_,first__552__$1,seq__551__$2,locals,body){
return (function (plan_553){
var vec__554 = cljs.core.async.impl.ioc_macros_runtime.all.call(null,cljs.core.map.call(null,((function (parted,syms,inits,vec__550,seq__551,first__552,seq__551__$1,_,first__552__$1,seq__551__$2,locals,body){
return (function (sym,init){
return ((function (parted,syms,inits,vec__550,seq__551,first__552,seq__551__$1,_,first__552__$1,seq__551__$2,locals,body){
return (function (plan_605){
var vec__606 = cljs.core.async.impl.ioc_macros_runtime.item_to_ssa.call(null,init).call(null,plan_605);
var itm_id = cljs.core.nth.call(null,vec__606,(0),null);
var plan_605__$1 = cljs.core.nth.call(null,vec__606,(1),null);
var vec__609 = cljs.core.async.impl.ioc_macros_runtime.push_alter_binding.call(null,new cljs.core.Keyword(null,"locals","locals",(535295783)),cljs.core.assoc,sym,itm_id).call(null,plan_605__$1);
var ___$1 = cljs.core.nth.call(null,vec__609,(0),null);
var plan_605__$2 = cljs.core.nth.call(null,vec__609,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [itm_id,plan_605__$2], null);
});
;})(parted,syms,inits,vec__550,seq__551,first__552,seq__551__$1,_,first__552__$1,seq__551__$2,locals,body))
});})(parted,syms,inits,vec__550,seq__551,first__552,seq__551__$1,_,first__552__$1,seq__551__$2,locals,body))
,syms,inits)).call(null,plan_553);
var local_val_ids = cljs.core.nth.call(null,vec__554,(0),null);
var plan_553__$1 = cljs.core.nth.call(null,vec__554,(1),null);
var vec__557 = cljs.core.async.impl.ioc_macros_runtime.all.call(null,(function (){var iter__9992__auto__ = ((function (vec__554,local_val_ids,plan_553__$1,parted,syms,inits,vec__550,seq__551,first__552,seq__551__$1,_,first__552__$1,seq__551__$2,locals,body){
return (function cljs$core$async$impl$ioc_macros_runtime$iter__612(s__613){
return (new cljs.core.LazySeq(null,((function (vec__554,local_val_ids,plan_553__$1,parted,syms,inits,vec__550,seq__551,first__552,seq__551__$1,_,first__552__$1,seq__551__$2,locals,body){
return (function (){
var s__613__$1 = s__613;
while(true){
var temp__9015__auto__ = cljs.core.seq.call(null,s__613__$1);
if(temp__9015__auto__){
var s__613__$2 = temp__9015__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__613__$2)){
var c__9990__auto__ = cljs.core.chunk_first.call(null,s__613__$2);
var size__9991__auto__ = cljs.core.count.call(null,c__9990__auto__);
var b__615 = cljs.core.chunk_buffer.call(null,size__9991__auto__);
if((function (){var i__614 = (0);
while(true){
if((i__614 < size__9991__auto__)){
var x = cljs.core._nth.call(null,c__9990__auto__,i__614);
cljs.core.chunk_append.call(null,b__615,cljs.core.async.impl.ioc_macros_runtime.pop_binding.call(null,new cljs.core.Keyword(null,"locals","locals",(535295783))));

var G__616 = (i__614 + (1));
i__614 = G__616;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__615),cljs$core$async$impl$ioc_macros_runtime$iter__612.call(null,cljs.core.chunk_rest.call(null,s__613__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__615),null);
}
} else {
var x = cljs.core.first.call(null,s__613__$2);
return cljs.core.cons.call(null,cljs.core.async.impl.ioc_macros_runtime.pop_binding.call(null,new cljs.core.Keyword(null,"locals","locals",(535295783))),cljs$core$async$impl$ioc_macros_runtime$iter__612.call(null,cljs.core.rest.call(null,s__613__$2)));
}
} else {
return null;
}
break;
}
});})(vec__554,local_val_ids,plan_553__$1,parted,syms,inits,vec__550,seq__551,first__552,seq__551__$1,_,first__552__$1,seq__551__$2,locals,body))
,null,null));
});})(vec__554,local_val_ids,plan_553__$1,parted,syms,inits,vec__550,seq__551,first__552,seq__551__$1,_,first__552__$1,seq__551__$2,locals,body))
;
return iter__9992__auto__.call(null,syms);
})()).call(null,plan_553__$1);
var ___$1 = cljs.core.nth.call(null,vec__557,(0),null);
var plan_553__$2 = cljs.core.nth.call(null,vec__557,(1),null);
var vec__560 = cljs.core.async.impl.ioc_macros_runtime.all.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.async.impl.ioc_macros_runtime.add_instruction,cljs.core.async.impl.ioc_macros_runtime.__GT_Const),local_val_ids)).call(null,plan_553__$2);
var local_ids = cljs.core.nth.call(null,vec__560,(0),null);
var plan_553__$3 = cljs.core.nth.call(null,vec__560,(1),null);
var vec__563 = cljs.core.async.impl.ioc_macros_runtime.add_block.call(null).call(null,plan_553__$3);
var body_blk = cljs.core.nth.call(null,vec__563,(0),null);
var plan_553__$4 = cljs.core.nth.call(null,vec__563,(1),null);
var vec__566 = cljs.core.async.impl.ioc_macros_runtime.add_block.call(null).call(null,plan_553__$4);
var final_blk = cljs.core.nth.call(null,vec__566,(0),null);
var plan_553__$5 = cljs.core.nth.call(null,vec__566,(1),null);
var vec__569 = cljs.core.async.impl.ioc_macros_runtime.add_instruction.call(null,cljs.core.async.impl.ioc_macros_runtime.__GT_Jmp.call(null,null,body_blk)).call(null,plan_553__$5);
var ___$2 = cljs.core.nth.call(null,vec__569,(0),null);
var plan_553__$6 = cljs.core.nth.call(null,vec__569,(1),null);
var vec__572 = cljs.core.async.impl.ioc_macros_runtime.set_block.call(null,body_blk).call(null,plan_553__$6);
var ___$3 = cljs.core.nth.call(null,vec__572,(0),null);
var plan_553__$7 = cljs.core.nth.call(null,vec__572,(1),null);
var vec__575 = cljs.core.async.impl.ioc_macros_runtime.push_alter_binding.call(null,new cljs.core.Keyword(null,"locals","locals",(535295783)),cljs.core.merge,cljs.core.zipmap.call(null,syms,local_ids)).call(null,plan_553__$7);
var ___$4 = cljs.core.nth.call(null,vec__575,(0),null);
var plan_553__$8 = cljs.core.nth.call(null,vec__575,(1),null);
var vec__578 = cljs.core.async.impl.ioc_macros_runtime.push_binding.call(null,new cljs.core.Keyword(null,"recur-point","recur-point",(-355035890)),body_blk).call(null,plan_553__$8);
var ___$5 = cljs.core.nth.call(null,vec__578,(0),null);
var plan_553__$9 = cljs.core.nth.call(null,vec__578,(1),null);
var vec__581 = cljs.core.async.impl.ioc_macros_runtime.push_binding.call(null,new cljs.core.Keyword(null,"recur-nodes","recur-nodes",(2077600963)),local_ids).call(null,plan_553__$9);
var ___$6 = cljs.core.nth.call(null,vec__581,(0),null);
var plan_553__$10 = cljs.core.nth.call(null,vec__581,(1),null);
var vec__584 = cljs.core.async.impl.ioc_macros_runtime.all.call(null,cljs.core.map.call(null,cljs.core.async.impl.ioc_macros_runtime.item_to_ssa,body)).call(null,plan_553__$10);
var body_ids = cljs.core.nth.call(null,vec__584,(0),null);
var plan_553__$11 = cljs.core.nth.call(null,vec__584,(1),null);
var vec__587 = cljs.core.async.impl.ioc_macros_runtime.pop_binding.call(null,new cljs.core.Keyword(null,"recur-nodes","recur-nodes",(2077600963))).call(null,plan_553__$11);
var ___$7 = cljs.core.nth.call(null,vec__587,(0),null);
var plan_553__$12 = cljs.core.nth.call(null,vec__587,(1),null);
var vec__590 = cljs.core.async.impl.ioc_macros_runtime.pop_binding.call(null,new cljs.core.Keyword(null,"recur-point","recur-point",(-355035890))).call(null,plan_553__$12);
var ___$8 = cljs.core.nth.call(null,vec__590,(0),null);
var plan_553__$13 = cljs.core.nth.call(null,vec__590,(1),null);
var vec__593 = cljs.core.async.impl.ioc_macros_runtime.pop_binding.call(null,new cljs.core.Keyword(null,"locals","locals",(535295783))).call(null,plan_553__$13);
var ___$9 = cljs.core.nth.call(null,vec__593,(0),null);
var plan_553__$14 = cljs.core.nth.call(null,vec__593,(1),null);
var vec__596 = ((cljs.core.not_EQ_.call(null,cljs.core.last.call(null,body_ids),new cljs.core.Keyword("cljs.core.async.impl.ioc-macros-runtime","terminated","cljs.core.async.impl.ioc-macros-runtime/terminated",(-177180433))))?cljs.core.async.impl.ioc_macros_runtime.add_instruction.call(null,cljs.core.async.impl.ioc_macros_runtime.__GT_Jmp.call(null,cljs.core.last.call(null,body_ids),final_blk)):cljs.core.async.impl.ioc_macros_runtime.no_op.call(null)).call(null,plan_553__$14);
var ___$10 = cljs.core.nth.call(null,vec__596,(0),null);
var plan_553__$15 = cljs.core.nth.call(null,vec__596,(1),null);
var vec__599 = cljs.core.async.impl.ioc_macros_runtime.set_block.call(null,final_blk).call(null,plan_553__$15);
var ___$11 = cljs.core.nth.call(null,vec__599,(0),null);
var plan_553__$16 = cljs.core.nth.call(null,vec__599,(1),null);
var vec__602 = cljs.core.async.impl.ioc_macros_runtime.add_instruction.call(null,cljs.core.async.impl.ioc_macros_runtime.__GT_Const.call(null,new cljs.core.Keyword("cljs.core.async.impl.ioc-macros-runtime","value","cljs.core.async.impl.ioc-macros-runtime/value",(1763202694)))).call(null,plan_553__$16);
var ret_id = cljs.core.nth.call(null,vec__602,(0),null);
var plan_553__$17 = cljs.core.nth.call(null,vec__602,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret_id,plan_553__$17], null);
});
;})(parted,syms,inits,vec__550,seq__551,first__552,seq__551__$1,_,first__552__$1,seq__551__$2,locals,body))
}));
cljs.core._add_method.call(null,cljs.core.async.impl.ioc_macros_runtime.sexpr_to_ssa,new cljs.core.Symbol(null,"set!","set!",(250714521),null),(function (p__617){
var vec__618 = p__617;
var _ = cljs.core.nth.call(null,vec__618,(0),null);
var assignee = cljs.core.nth.call(null,vec__618,(1),null);
var val = cljs.core.nth.call(null,vec__618,(2),null);
var target = (((assignee instanceof cljs.core.Symbol))?assignee:((((cljs.core.list_QMARK_.call(null,assignee)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,assignee),(2)))))?cljs.core.second.call(null,assignee):null));
var field = ((cljs.core.list_QMARK_.call(null,assignee))?cljs.core.first.call(null,assignee):null);
return ((function (target,field,vec__618,_,assignee,val){
return (function (plan_621){
var vec__622 = cljs.core.async.impl.ioc_macros_runtime.get_binding.call(null,new cljs.core.Keyword(null,"locals","locals",(535295783))).call(null,plan_621);
var locals = cljs.core.nth.call(null,vec__622,(0),null);
var plan_621__$1 = cljs.core.nth.call(null,vec__622,(1),null);
var vec__625 = ((cljs.core.contains_QMARK_.call(null,locals,target))?((function (vec__622,locals,plan_621__$1,target,field,vec__618,_,assignee,val){
return (function (p){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.call(null,locals,target),p], null);
});})(vec__622,locals,plan_621__$1,target,field,vec__618,_,assignee,val))
:cljs.core.async.impl.ioc_macros_runtime.item_to_ssa.call(null,target)).call(null,plan_621__$1);
var target_id = cljs.core.nth.call(null,vec__625,(0),null);
var plan_621__$2 = cljs.core.nth.call(null,vec__625,(1),null);
var vec__628 = cljs.core.async.impl.ioc_macros_runtime.item_to_ssa.call(null,val).call(null,plan_621__$2);
var val_id = cljs.core.nth.call(null,vec__628,(0),null);
var plan_621__$3 = cljs.core.nth.call(null,vec__628,(1),null);
var vec__631 = cljs.core.async.impl.ioc_macros_runtime.add_instruction.call(null,cljs.core.async.impl.ioc_macros_runtime.__GT_Set_BANG_.call(null,field,target_id,val_id)).call(null,plan_621__$3);
var ret_id = cljs.core.nth.call(null,vec__631,(0),null);
var plan_621__$4 = cljs.core.nth.call(null,vec__631,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret_id,plan_621__$4], null);
});
;})(target,field,vec__618,_,assignee,val))
}));
cljs.core._add_method.call(null,cljs.core.async.impl.ioc_macros_runtime.sexpr_to_ssa,new cljs.core.Symbol(null,"do","do",(1686842252),null),(function (p__634){
var vec__635 = p__634;
var seq__636 = cljs.core.seq.call(null,vec__635);
var first__637 = cljs.core.first.call(null,seq__636);
var seq__636__$1 = cljs.core.next.call(null,seq__636);
var _ = first__637;
var body = seq__636__$1;
return ((function (vec__635,seq__636,first__637,seq__636__$1,_,body){
return (function (plan_638){
var vec__639 = cljs.core.async.impl.ioc_macros_runtime.all.call(null,cljs.core.map.call(null,cljs.core.async.impl.ioc_macros_runtime.item_to_ssa,body)).call(null,plan_638);
var ids = cljs.core.nth.call(null,vec__639,(0),null);
var plan_638__$1 = cljs.core.nth.call(null,vec__639,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.last.call(null,ids),plan_638__$1], null);
});
;})(vec__635,seq__636,first__637,seq__636__$1,_,body))
}));
cljs.core._add_method.call(null,cljs.core.async.impl.ioc_macros_runtime.sexpr_to_ssa,new cljs.core.Symbol(null,"case","case",(-1510733573),null),(function (p__642){
var vec__643 = p__642;
var seq__644 = cljs.core.seq.call(null,vec__643);
var first__645 = cljs.core.first.call(null,seq__644);
var seq__644__$1 = cljs.core.next.call(null,seq__644);
var _ = first__645;
var first__645__$1 = cljs.core.first.call(null,seq__644__$1);
var seq__644__$2 = cljs.core.next.call(null,seq__644__$1);
var val = first__645__$1;
var body = seq__644__$2;
var clauses = cljs.core.partition.call(null,(2),body);
var default$ = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,body)))?cljs.core.last.call(null,body):null);
return ((function (clauses,default$,vec__643,seq__644,first__645,seq__644__$1,_,first__645__$1,seq__644__$2,val,body){
return (function (plan_646){
var vec__647 = cljs.core.async.impl.ioc_macros_runtime.add_block.call(null).call(null,plan_646);
var end_blk = cljs.core.nth.call(null,vec__647,(0),null);
var plan_646__$1 = cljs.core.nth.call(null,vec__647,(1),null);
var vec__650 = cljs.core.async.impl.ioc_macros_runtime.get_block.call(null).call(null,plan_646__$1);
var start_blk = cljs.core.nth.call(null,vec__650,(0),null);
var plan_646__$2 = cljs.core.nth.call(null,vec__650,(1),null);
var vec__653 = cljs.core.async.impl.ioc_macros_runtime.all.call(null,cljs.core.map.call(null,((function (vec__647,end_blk,plan_646__$1,vec__650,start_blk,plan_646__$2,clauses,default$,vec__643,seq__644,first__645,seq__644__$1,_,first__645__$1,seq__644__$2,val,body){
return (function (expr){
return ((function (vec__647,end_blk,plan_646__$1,vec__650,start_blk,plan_646__$2,clauses,default$,vec__643,seq__644,first__645,seq__644__$1,_,first__645__$1,seq__644__$2,val,body){
return (function (plan_674){
var vec__675 = cljs.core.async.impl.ioc_macros_runtime.add_block.call(null).call(null,plan_674);
var blk_id = cljs.core.nth.call(null,vec__675,(0),null);
var plan_674__$1 = cljs.core.nth.call(null,vec__675,(1),null);
var vec__678 = cljs.core.async.impl.ioc_macros_runtime.set_block.call(null,blk_id).call(null,plan_674__$1);
var ___$1 = cljs.core.nth.call(null,vec__678,(0),null);
var plan_674__$2 = cljs.core.nth.call(null,vec__678,(1),null);
var vec__681 = cljs.core.async.impl.ioc_macros_runtime.item_to_ssa.call(null,expr).call(null,plan_674__$2);
var expr_id = cljs.core.nth.call(null,vec__681,(0),null);
var plan_674__$3 = cljs.core.nth.call(null,vec__681,(1),null);
var vec__684 = ((cljs.core.not_EQ_.call(null,expr_id,new cljs.core.Keyword("cljs.core.async.impl.ioc-macros-runtime","terminated","cljs.core.async.impl.ioc-macros-runtime/terminated",(-177180433))))?cljs.core.async.impl.ioc_macros_runtime.add_instruction.call(null,cljs.core.async.impl.ioc_macros_runtime.__GT_Jmp.call(null,expr_id,end_blk)):cljs.core.async.impl.ioc_macros_runtime.no_op.call(null)).call(null,plan_674__$3);
var ___$2 = cljs.core.nth.call(null,vec__684,(0),null);
var plan_674__$4 = cljs.core.nth.call(null,vec__684,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blk_id,plan_674__$4], null);
});
;})(vec__647,end_blk,plan_646__$1,vec__650,start_blk,plan_646__$2,clauses,default$,vec__643,seq__644,first__645,seq__644__$1,_,first__645__$1,seq__644__$2,val,body))
});})(vec__647,end_blk,plan_646__$1,vec__650,start_blk,plan_646__$2,clauses,default$,vec__643,seq__644,first__645,seq__644__$1,_,first__645__$1,seq__644__$2,val,body))
,cljs.core.map.call(null,cljs.core.second,clauses))).call(null,plan_646__$2);
var clause_blocks = cljs.core.nth.call(null,vec__653,(0),null);
var plan_646__$3 = cljs.core.nth.call(null,vec__653,(1),null);
var vec__656 = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,body)))?((function (vec__647,end_blk,plan_646__$1,vec__650,start_blk,plan_646__$2,vec__653,clause_blocks,plan_646__$3,clauses,default$,vec__643,seq__644,first__645,seq__644__$1,_,first__645__$1,seq__644__$2,val,body){
return (function (plan_687){
var vec__688 = cljs.core.async.impl.ioc_macros_runtime.add_block.call(null).call(null,plan_687);
var blk_id = cljs.core.nth.call(null,vec__688,(0),null);
var plan_687__$1 = cljs.core.nth.call(null,vec__688,(1),null);
var vec__691 = cljs.core.async.impl.ioc_macros_runtime.set_block.call(null,blk_id).call(null,plan_687__$1);
var ___$1 = cljs.core.nth.call(null,vec__691,(0),null);
var plan_687__$2 = cljs.core.nth.call(null,vec__691,(1),null);
var vec__694 = cljs.core.async.impl.ioc_macros_runtime.item_to_ssa.call(null,default$).call(null,plan_687__$2);
var expr_id = cljs.core.nth.call(null,vec__694,(0),null);
var plan_687__$3 = cljs.core.nth.call(null,vec__694,(1),null);
var vec__697 = ((cljs.core.not_EQ_.call(null,expr_id,new cljs.core.Keyword("cljs.core.async.impl.ioc-macros-runtime","terminated","cljs.core.async.impl.ioc-macros-runtime/terminated",(-177180433))))?cljs.core.async.impl.ioc_macros_runtime.add_instruction.call(null,cljs.core.async.impl.ioc_macros_runtime.__GT_Jmp.call(null,expr_id,end_blk)):cljs.core.async.impl.ioc_macros_runtime.no_op.call(null)).call(null,plan_687__$3);
var ___$2 = cljs.core.nth.call(null,vec__697,(0),null);
var plan_687__$4 = cljs.core.nth.call(null,vec__697,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blk_id,plan_687__$4], null);
});})(vec__647,end_blk,plan_646__$1,vec__650,start_blk,plan_646__$2,vec__653,clause_blocks,plan_646__$3,clauses,default$,vec__643,seq__644,first__645,seq__644__$1,_,first__645__$1,seq__644__$2,val,body))
:cljs.core.async.impl.ioc_macros_runtime.no_op.call(null)).call(null,plan_646__$3);
var default_block = cljs.core.nth.call(null,vec__656,(0),null);
var plan_646__$4 = cljs.core.nth.call(null,vec__656,(1),null);
var vec__659 = cljs.core.async.impl.ioc_macros_runtime.set_block.call(null,start_blk).call(null,plan_646__$4);
var ___$1 = cljs.core.nth.call(null,vec__659,(0),null);
var plan_646__$5 = cljs.core.nth.call(null,vec__659,(1),null);
var vec__662 = cljs.core.async.impl.ioc_macros_runtime.item_to_ssa.call(null,val).call(null,plan_646__$5);
var val_id = cljs.core.nth.call(null,vec__662,(0),null);
var plan_646__$6 = cljs.core.nth.call(null,vec__662,(1),null);
var vec__665 = cljs.core.async.impl.ioc_macros_runtime.add_instruction.call(null,cljs.core.async.impl.ioc_macros_runtime.__GT_Case.call(null,val_id,cljs.core.map.call(null,cljs.core.first,clauses),clause_blocks,default_block)).call(null,plan_646__$6);
var case_id = cljs.core.nth.call(null,vec__665,(0),null);
var plan_646__$7 = cljs.core.nth.call(null,vec__665,(1),null);
var vec__668 = cljs.core.async.impl.ioc_macros_runtime.set_block.call(null,end_blk).call(null,plan_646__$7);
var ___$2 = cljs.core.nth.call(null,vec__668,(0),null);
var plan_646__$8 = cljs.core.nth.call(null,vec__668,(1),null);
var vec__671 = cljs.core.async.impl.ioc_macros_runtime.add_instruction.call(null,cljs.core.async.impl.ioc_macros_runtime.__GT_Const.call(null,new cljs.core.Keyword("cljs.core.async.impl.ioc-macros-runtime","value","cljs.core.async.impl.ioc-macros-runtime/value",(1763202694)))).call(null,plan_646__$8);
var ret_id = cljs.core.nth.call(null,vec__671,(0),null);
var plan_646__$9 = cljs.core.nth.call(null,vec__671,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret_id,plan_646__$9], null);
});
;})(clauses,default$,vec__643,seq__644,first__645,seq__644__$1,_,first__645__$1,seq__644__$2,val,body))
}));
cljs.core._add_method.call(null,cljs.core.async.impl.ioc_macros_runtime.sexpr_to_ssa,new cljs.core.Symbol(null,"quote","quote",(1377916282),null),(function (expr){
return (function (plan_700){
var vec__701 = cljs.core.async.impl.ioc_macros_runtime.add_instruction.call(null,cljs.core.async.impl.ioc_macros_runtime.__GT_Const.call(null,expr)).call(null,plan_700);
var ret_id = cljs.core.nth.call(null,vec__701,(0),null);
var plan_700__$1 = cljs.core.nth.call(null,vec__701,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret_id,plan_700__$1], null);
});
}));
cljs.core._add_method.call(null,cljs.core.async.impl.ioc_macros_runtime.sexpr_to_ssa,new cljs.core.Symbol(null,".",".",(1975675962),null),(function (p__704){
var vec__705 = p__704;
var seq__706 = cljs.core.seq.call(null,vec__705);
var first__707 = cljs.core.first.call(null,seq__706);
var seq__706__$1 = cljs.core.next.call(null,seq__706);
var _ = first__707;
var first__707__$1 = cljs.core.first.call(null,seq__706__$1);
var seq__706__$2 = cljs.core.next.call(null,seq__706__$1);
var target = first__707__$1;
var first__707__$2 = cljs.core.first.call(null,seq__706__$2);
var seq__706__$3 = cljs.core.next.call(null,seq__706__$2);
var method = first__707__$2;
var args = seq__706__$3;
var args__$1 = ((cljs.core.seq_QMARK_.call(null,method))?cljs.core.next.call(null,method):args);
var method__$1 = ((cljs.core.seq_QMARK_.call(null,method))?cljs.core.first.call(null,method):method);
return ((function (args__$1,method__$1,vec__705,seq__706,first__707,seq__706__$1,_,first__707__$1,seq__706__$2,target,first__707__$2,seq__706__$3,method,args){
return (function (plan_708){
var vec__709 = cljs.core.async.impl.ioc_macros_runtime.item_to_ssa.call(null,target).call(null,plan_708);
var target_id = cljs.core.nth.call(null,vec__709,(0),null);
var plan_708__$1 = cljs.core.nth.call(null,vec__709,(1),null);
var vec__712 = cljs.core.async.impl.ioc_macros_runtime.all.call(null,cljs.core.map.call(null,cljs.core.async.impl.ioc_macros_runtime.item_to_ssa,args__$1)).call(null,plan_708__$1);
var args_ids = cljs.core.nth.call(null,vec__712,(0),null);
var plan_708__$2 = cljs.core.nth.call(null,vec__712,(1),null);
var vec__715 = cljs.core.async.impl.ioc_macros_runtime.add_instruction.call(null,cljs.core.async.impl.ioc_macros_runtime.__GT_Dot.call(null,target_id,method__$1,args_ids)).call(null,plan_708__$2);
var ret_id = cljs.core.nth.call(null,vec__715,(0),null);
var plan_708__$3 = cljs.core.nth.call(null,vec__715,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret_id,plan_708__$3], null);
});
;})(args__$1,method__$1,vec__705,seq__706,first__707,seq__706__$1,_,first__707__$1,seq__706__$2,target,first__707__$2,seq__706__$3,method,args))
}));
cljs.core.async.impl.ioc_macros_runtime.destructure_try = (function cljs$core$async$impl$ioc_macros_runtime$destructure_try(body){
return cljs.core.reduce.call(null,(function (accum,form){
var G__718 = new cljs.core.Keyword(null,"state","state",(-1988618099)).cljs$core$IFn$_invoke$arity$1(accum);
var G__718__$1 = (((G__718 instanceof cljs.core.Keyword))?G__718.fqn:null);
switch (G__718__$1) {
case "body":
if(((cljs.core.seq_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,form),new cljs.core.Symbol(null,"catch","catch",(-1616370245),null))))){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,accum,new cljs.core.Keyword(null,"state","state",(-1988618099)),new cljs.core.Keyword(null,"catch","catch",(1038065524))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"catches","catches",(-1478797617))], null),cljs.core.conj,form);
} else {
if(((cljs.core.seq_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,form),new cljs.core.Symbol(null,"finally","finally",(-1065347064),null))))){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,accum,new cljs.core.Keyword(null,"state","state",(-1988618099)),new cljs.core.Keyword(null,"finally","finally",(1589088705))),new cljs.core.Keyword(null,"finally","finally",(1589088705)),form);
} else {
return cljs.core.update_in.call(null,accum,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",(-2049205669))], null),cljs.core.conj,form);

}
}

break;
case "catch":
if(((cljs.core.seq_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,form),new cljs.core.Symbol(null,"catch","catch",(-1616370245),null))))){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,accum,new cljs.core.Keyword(null,"state","state",(-1988618099)),new cljs.core.Keyword(null,"catch","catch",(1038065524))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"catches","catches",(-1478797617))], null),cljs.core.conj,form);
} else {
if(((cljs.core.seq_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,form),new cljs.core.Symbol(null,"finally","finally",(-1065347064),null))))){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,accum,new cljs.core.Keyword(null,"state","state",(-1988618099)),new cljs.core.Keyword(null,"finally","finally",(1589088705))),new cljs.core.Keyword(null,"finally","finally",(1589088705)),form);
} else {
throw (new Error("Only catch or finally clause can follow catch in try expression"));

}
}

break;
case "finally":
throw (new Error("finally clause must be last in try expression"));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__718__$1)].join('')));

}
}),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",(-1988618099)),new cljs.core.Keyword(null,"body","body",(-2049205669)),new cljs.core.Keyword(null,"body","body",(-2049205669)),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"catches","catches",(-1478797617)),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"finally","finally",(1589088705)),null], null),body);
});
cljs.core._add_method.call(null,cljs.core.async.impl.ioc_macros_runtime.sexpr_to_ssa,new cljs.core.Symbol(null,"try","try",(-1273693247),null),(function (p__720){
var vec__721 = p__720;
var seq__722 = cljs.core.seq.call(null,vec__721);
var first__723 = cljs.core.first.call(null,seq__722);
var seq__722__$1 = cljs.core.next.call(null,seq__722);
var _ = first__723;
var body = seq__722__$1;
var map__724 = cljs.core.async.impl.ioc_macros_runtime.destructure_try.call(null,body);
var map__724__$1 = (((((!((map__724 == null))))?(((((map__724.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__724.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__724):map__724);
var m = map__724__$1;
var body__$1 = cljs.core.get.call(null,map__724__$1,new cljs.core.Keyword(null,"body","body",(-2049205669)));
var catches = cljs.core.get.call(null,map__724__$1,new cljs.core.Keyword(null,"catches","catches",(-1478797617)));
var finally$ = cljs.core.get.call(null,map__724__$1,new cljs.core.Keyword(null,"finally","finally",(1589088705)));
return ((function (map__724,map__724__$1,m,body__$1,catches,finally$,vec__721,seq__722,first__723,seq__722__$1,_,body){
return (function (plan_726){
var vec__727 = cljs.core.async.impl.ioc_macros_runtime.add_block.call(null).call(null,plan_726);
var body_block = cljs.core.nth.call(null,vec__727,(0),null);
var plan_726__$1 = cljs.core.nth.call(null,vec__727,(1),null);
var vec__730 = cljs.core.async.impl.ioc_macros_runtime.add_block.call(null).call(null,plan_726__$1);
var exit_block = cljs.core.nth.call(null,vec__730,(0),null);
var plan_726__$2 = cljs.core.nth.call(null,vec__730,(1),null);
var vec__733 = (cljs.core.truth_(finally$)?((function (vec__727,body_block,plan_726__$1,vec__730,exit_block,plan_726__$2,map__724,map__724__$1,m,body__$1,catches,finally$,vec__721,seq__722,first__723,seq__722__$1,_,body){
return (function (plan_784){
var vec__785 = cljs.core.async.impl.ioc_macros_runtime.get_block.call(null).call(null,plan_784);
var cur_blk = cljs.core.nth.call(null,vec__785,(0),null);
var plan_784__$1 = cljs.core.nth.call(null,vec__785,(1),null);
var vec__788 = cljs.core.async.impl.ioc_macros_runtime.add_block.call(null).call(null,plan_784__$1);
var finally_blk = cljs.core.nth.call(null,vec__788,(0),null);
var plan_784__$2 = cljs.core.nth.call(null,vec__788,(1),null);
var vec__791 = cljs.core.async.impl.ioc_macros_runtime.set_block.call(null,finally_blk).call(null,plan_784__$2);
var ___$1 = cljs.core.nth.call(null,vec__791,(0),null);
var plan_784__$3 = cljs.core.nth.call(null,vec__791,(1),null);
var vec__794 = cljs.core.async.impl.ioc_macros_runtime.add_instruction.call(null,cljs.core.async.impl.ioc_macros_runtime.__GT_PopTry.call(null)).call(null,plan_784__$3);
var ___$2 = cljs.core.nth.call(null,vec__794,(0),null);
var plan_784__$4 = cljs.core.nth.call(null,vec__794,(1),null);
var vec__797 = cljs.core.async.impl.ioc_macros_runtime.add_instruction.call(null,cljs.core.async.impl.ioc_macros_runtime.__GT_Const.call(null,new cljs.core.Keyword("cljs.core.async.impl.ioc-macros-runtime","value","cljs.core.async.impl.ioc-macros-runtime/value",(1763202694)))).call(null,plan_784__$4);
var result_id = cljs.core.nth.call(null,vec__797,(0),null);
var plan_784__$5 = cljs.core.nth.call(null,vec__797,(1),null);
var vec__800 = cljs.core.async.impl.ioc_macros_runtime.item_to_ssa.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"do","do",(1686842252),null),cljs.core.rest.call(null,finally$))).call(null,plan_784__$5);
var ___$3 = cljs.core.nth.call(null,vec__800,(0),null);
var plan_784__$6 = cljs.core.nth.call(null,vec__800,(1),null);
var vec__803 = cljs.core.async.impl.ioc_macros_runtime.add_instruction.call(null,cljs.core.async.impl.ioc_macros_runtime.__GT_EndFinally.call(null)).call(null,plan_784__$6);
var ___$4 = cljs.core.nth.call(null,vec__803,(0),null);
var plan_784__$7 = cljs.core.nth.call(null,vec__803,(1),null);
var vec__806 = cljs.core.async.impl.ioc_macros_runtime.add_instruction.call(null,cljs.core.async.impl.ioc_macros_runtime.__GT_Jmp.call(null,result_id,exit_block)).call(null,plan_784__$7);
var ___$5 = cljs.core.nth.call(null,vec__806,(0),null);
var plan_784__$8 = cljs.core.nth.call(null,vec__806,(1),null);
var vec__809 = cljs.core.async.impl.ioc_macros_runtime.set_block.call(null,cur_blk).call(null,plan_784__$8);
var ___$6 = cljs.core.nth.call(null,vec__809,(0),null);
var plan_784__$9 = cljs.core.nth.call(null,vec__809,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [finally_blk,plan_784__$9], null);
});})(vec__727,body_block,plan_726__$1,vec__730,exit_block,plan_726__$2,map__724,map__724__$1,m,body__$1,catches,finally$,vec__721,seq__722,first__723,seq__722__$1,_,body))
:((function (vec__727,body_block,plan_726__$1,vec__730,exit_block,plan_726__$2,map__724,map__724__$1,m,body__$1,catches,finally$,vec__721,seq__722,first__723,seq__722__$1,_,body){
return (function (plan_812){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit_block,plan_812], null);
});})(vec__727,body_block,plan_726__$1,vec__730,exit_block,plan_726__$2,map__724,map__724__$1,m,body__$1,catches,finally$,vec__721,seq__722,first__723,seq__722__$1,_,body))
).call(null,plan_726__$2);
var finally_blk = cljs.core.nth.call(null,vec__733,(0),null);
var plan_726__$3 = cljs.core.nth.call(null,vec__733,(1),null);
var vec__736 = cljs.core.async.impl.ioc_macros_runtime.all.call(null,(function (){var iter__9992__auto__ = ((function (vec__727,body_block,plan_726__$1,vec__730,exit_block,plan_726__$2,vec__733,finally_blk,plan_726__$3,map__724,map__724__$1,m,body__$1,catches,finally$,vec__721,seq__722,first__723,seq__722__$1,_,body){
return (function cljs$core$async$impl$ioc_macros_runtime$iter__813(s__814){
return (new cljs.core.LazySeq(null,((function (vec__727,body_block,plan_726__$1,vec__730,exit_block,plan_726__$2,vec__733,finally_blk,plan_726__$3,map__724,map__724__$1,m,body__$1,catches,finally$,vec__721,seq__722,first__723,seq__722__$1,_,body){
return (function (){
var s__814__$1 = s__814;
while(true){
var temp__9015__auto__ = cljs.core.seq.call(null,s__814__$1);
if(temp__9015__auto__){
var s__814__$2 = temp__9015__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__814__$2)){
var c__9990__auto__ = cljs.core.chunk_first.call(null,s__814__$2);
var size__9991__auto__ = cljs.core.count.call(null,c__9990__auto__);
var b__816 = cljs.core.chunk_buffer.call(null,size__9991__auto__);
if((function (){var i__815 = (0);
while(true){
if((i__815 < size__9991__auto__)){
var vec__817 = cljs.core._nth.call(null,c__9990__auto__,i__815);
var seq__818 = cljs.core.seq.call(null,vec__817);
var first__819 = cljs.core.first.call(null,seq__818);
var seq__818__$1 = cljs.core.next.call(null,seq__818);
var ___$1 = first__819;
var first__819__$1 = cljs.core.first.call(null,seq__818__$1);
var seq__818__$2 = cljs.core.next.call(null,seq__818__$1);
var ex = first__819__$1;
var first__819__$2 = cljs.core.first.call(null,seq__818__$2);
var seq__818__$3 = cljs.core.next.call(null,seq__818__$2);
var ex_bind = first__819__$2;
var catch_body = seq__818__$3;
cljs.core.chunk_append.call(null,b__816,((function (i__815,vec__817,seq__818,first__819,seq__818__$1,___$1,first__819__$1,seq__818__$2,ex,first__819__$2,seq__818__$3,ex_bind,catch_body,c__9990__auto__,size__9991__auto__,b__816,s__814__$2,temp__9015__auto__,vec__727,body_block,plan_726__$1,vec__730,exit_block,plan_726__$2,vec__733,finally_blk,plan_726__$3,map__724,map__724__$1,m,body__$1,catches,finally$,vec__721,seq__722,first__723,seq__722__$1,_,body){
return (function (plan_820){
var vec__821 = cljs.core.async.impl.ioc_macros_runtime.get_block.call(null).call(null,plan_820);
var cur_blk = cljs.core.nth.call(null,vec__821,(0),null);
var plan_820__$1 = cljs.core.nth.call(null,vec__821,(1),null);
var vec__824 = cljs.core.async.impl.ioc_macros_runtime.add_block.call(null).call(null,plan_820__$1);
var catch_blk = cljs.core.nth.call(null,vec__824,(0),null);
var plan_820__$2 = cljs.core.nth.call(null,vec__824,(1),null);
var vec__827 = cljs.core.async.impl.ioc_macros_runtime.set_block.call(null,catch_blk).call(null,plan_820__$2);
var ___$2 = cljs.core.nth.call(null,vec__827,(0),null);
var plan_820__$3 = cljs.core.nth.call(null,vec__827,(1),null);
var vec__830 = cljs.core.async.impl.ioc_macros_runtime.add_instruction.call(null,cljs.core.async.impl.ioc_macros_runtime.__GT_Const.call(null,new cljs.core.Keyword("cljs.core.async.impl.ioc-macros-runtime","value","cljs.core.async.impl.ioc-macros-runtime/value",(1763202694)))).call(null,plan_820__$3);
var ex_id = cljs.core.nth.call(null,vec__830,(0),null);
var plan_820__$4 = cljs.core.nth.call(null,vec__830,(1),null);
var vec__833 = cljs.core.async.impl.ioc_macros_runtime.push_alter_binding.call(null,new cljs.core.Keyword(null,"locals","locals",(535295783)),cljs.core.assoc,ex_bind,ex_id).call(null,plan_820__$4);
var ___$3 = cljs.core.nth.call(null,vec__833,(0),null);
var plan_820__$5 = cljs.core.nth.call(null,vec__833,(1),null);
var vec__836 = cljs.core.async.impl.ioc_macros_runtime.item_to_ssa.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"do","do",(1686842252),null),catch_body)).call(null,plan_820__$5);
var result_id = cljs.core.nth.call(null,vec__836,(0),null);
var plan_820__$6 = cljs.core.nth.call(null,vec__836,(1),null);
var vec__839 = cljs.core.async.impl.ioc_macros_runtime.add_instruction.call(null,cljs.core.async.impl.ioc_macros_runtime.__GT_Jmp.call(null,result_id,finally_blk)).call(null,plan_820__$6);
var ___$4 = cljs.core.nth.call(null,vec__839,(0),null);
var plan_820__$7 = cljs.core.nth.call(null,vec__839,(1),null);
var vec__842 = cljs.core.async.impl.ioc_macros_runtime.pop_binding.call(null,new cljs.core.Keyword(null,"locals","locals",(535295783))).call(null,plan_820__$7);
var ___$5 = cljs.core.nth.call(null,vec__842,(0),null);
var plan_820__$8 = cljs.core.nth.call(null,vec__842,(1),null);
var vec__845 = cljs.core.async.impl.ioc_macros_runtime.set_block.call(null,cur_blk).call(null,plan_820__$8);
var ___$6 = cljs.core.nth.call(null,vec__845,(0),null);
var plan_820__$9 = cljs.core.nth.call(null,vec__845,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [catch_blk,ex], null),plan_820__$9], null);
});})(i__815,vec__817,seq__818,first__819,seq__818__$1,___$1,first__819__$1,seq__818__$2,ex,first__819__$2,seq__818__$3,ex_bind,catch_body,c__9990__auto__,size__9991__auto__,b__816,s__814__$2,temp__9015__auto__,vec__727,body_block,plan_726__$1,vec__730,exit_block,plan_726__$2,vec__733,finally_blk,plan_726__$3,map__724,map__724__$1,m,body__$1,catches,finally$,vec__721,seq__722,first__723,seq__722__$1,_,body))
);

var G__879 = (i__815 + (1));
i__815 = G__879;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__816),cljs$core$async$impl$ioc_macros_runtime$iter__813.call(null,cljs.core.chunk_rest.call(null,s__814__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__816),null);
}
} else {
var vec__848 = cljs.core.first.call(null,s__814__$2);
var seq__849 = cljs.core.seq.call(null,vec__848);
var first__850 = cljs.core.first.call(null,seq__849);
var seq__849__$1 = cljs.core.next.call(null,seq__849);
var ___$1 = first__850;
var first__850__$1 = cljs.core.first.call(null,seq__849__$1);
var seq__849__$2 = cljs.core.next.call(null,seq__849__$1);
var ex = first__850__$1;
var first__850__$2 = cljs.core.first.call(null,seq__849__$2);
var seq__849__$3 = cljs.core.next.call(null,seq__849__$2);
var ex_bind = first__850__$2;
var catch_body = seq__849__$3;
return cljs.core.cons.call(null,((function (vec__848,seq__849,first__850,seq__849__$1,___$1,first__850__$1,seq__849__$2,ex,first__850__$2,seq__849__$3,ex_bind,catch_body,s__814__$2,temp__9015__auto__,vec__727,body_block,plan_726__$1,vec__730,exit_block,plan_726__$2,vec__733,finally_blk,plan_726__$3,map__724,map__724__$1,m,body__$1,catches,finally$,vec__721,seq__722,first__723,seq__722__$1,_,body){
return (function (plan_851){
var vec__852 = cljs.core.async.impl.ioc_macros_runtime.get_block.call(null).call(null,plan_851);
var cur_blk = cljs.core.nth.call(null,vec__852,(0),null);
var plan_851__$1 = cljs.core.nth.call(null,vec__852,(1),null);
var vec__855 = cljs.core.async.impl.ioc_macros_runtime.add_block.call(null).call(null,plan_851__$1);
var catch_blk = cljs.core.nth.call(null,vec__855,(0),null);
var plan_851__$2 = cljs.core.nth.call(null,vec__855,(1),null);
var vec__858 = cljs.core.async.impl.ioc_macros_runtime.set_block.call(null,catch_blk).call(null,plan_851__$2);
var ___$2 = cljs.core.nth.call(null,vec__858,(0),null);
var plan_851__$3 = cljs.core.nth.call(null,vec__858,(1),null);
var vec__861 = cljs.core.async.impl.ioc_macros_runtime.add_instruction.call(null,cljs.core.async.impl.ioc_macros_runtime.__GT_Const.call(null,new cljs.core.Keyword("cljs.core.async.impl.ioc-macros-runtime","value","cljs.core.async.impl.ioc-macros-runtime/value",(1763202694)))).call(null,plan_851__$3);
var ex_id = cljs.core.nth.call(null,vec__861,(0),null);
var plan_851__$4 = cljs.core.nth.call(null,vec__861,(1),null);
var vec__864 = cljs.core.async.impl.ioc_macros_runtime.push_alter_binding.call(null,new cljs.core.Keyword(null,"locals","locals",(535295783)),cljs.core.assoc,ex_bind,ex_id).call(null,plan_851__$4);
var ___$3 = cljs.core.nth.call(null,vec__864,(0),null);
var plan_851__$5 = cljs.core.nth.call(null,vec__864,(1),null);
var vec__867 = cljs.core.async.impl.ioc_macros_runtime.item_to_ssa.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"do","do",(1686842252),null),catch_body)).call(null,plan_851__$5);
var result_id = cljs.core.nth.call(null,vec__867,(0),null);
var plan_851__$6 = cljs.core.nth.call(null,vec__867,(1),null);
var vec__870 = cljs.core.async.impl.ioc_macros_runtime.add_instruction.call(null,cljs.core.async.impl.ioc_macros_runtime.__GT_Jmp.call(null,result_id,finally_blk)).call(null,plan_851__$6);
var ___$4 = cljs.core.nth.call(null,vec__870,(0),null);
var plan_851__$7 = cljs.core.nth.call(null,vec__870,(1),null);
var vec__873 = cljs.core.async.impl.ioc_macros_runtime.pop_binding.call(null,new cljs.core.Keyword(null,"locals","locals",(535295783))).call(null,plan_851__$7);
var ___$5 = cljs.core.nth.call(null,vec__873,(0),null);
var plan_851__$8 = cljs.core.nth.call(null,vec__873,(1),null);
var vec__876 = cljs.core.async.impl.ioc_macros_runtime.set_block.call(null,cur_blk).call(null,plan_851__$8);
var ___$6 = cljs.core.nth.call(null,vec__876,(0),null);
var plan_851__$9 = cljs.core.nth.call(null,vec__876,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [catch_blk,ex], null),plan_851__$9], null);
});})(vec__848,seq__849,first__850,seq__849__$1,___$1,first__850__$1,seq__849__$2,ex,first__850__$2,seq__849__$3,ex_bind,catch_body,s__814__$2,temp__9015__auto__,vec__727,body_block,plan_726__$1,vec__730,exit_block,plan_726__$2,vec__733,finally_blk,plan_726__$3,map__724,map__724__$1,m,body__$1,catches,finally$,vec__721,seq__722,first__723,seq__722__$1,_,body))
,cljs$core$async$impl$ioc_macros_runtime$iter__813.call(null,cljs.core.rest.call(null,s__814__$2)));
}
} else {
return null;
}
break;
}
});})(vec__727,body_block,plan_726__$1,vec__730,exit_block,plan_726__$2,vec__733,finally_blk,plan_726__$3,map__724,map__724__$1,m,body__$1,catches,finally$,vec__721,seq__722,first__723,seq__722__$1,_,body))
,null,null));
});})(vec__727,body_block,plan_726__$1,vec__730,exit_block,plan_726__$2,vec__733,finally_blk,plan_726__$3,map__724,map__724__$1,m,body__$1,catches,finally$,vec__721,seq__722,first__723,seq__722__$1,_,body))
;
return iter__9992__auto__.call(null,catches);
})()).call(null,plan_726__$3);
var catch_blocks = cljs.core.nth.call(null,vec__736,(0),null);
var plan_726__$4 = cljs.core.nth.call(null,vec__736,(1),null);
var vec__739 = cljs.core.async.impl.ioc_macros_runtime.add_block.call(null).call(null,plan_726__$4);
var catch_handler_block = cljs.core.nth.call(null,vec__739,(0),null);
var plan_726__$5 = cljs.core.nth.call(null,vec__739,(1),null);
var vec__742 = cljs.core.async.impl.ioc_macros_runtime.get_block.call(null).call(null,plan_726__$5);
var cur_blk = cljs.core.nth.call(null,vec__742,(0),null);
var plan_726__$6 = cljs.core.nth.call(null,vec__742,(1),null);
var vec__745 = cljs.core.async.impl.ioc_macros_runtime.set_block.call(null,catch_handler_block).call(null,plan_726__$6);
var ___$1 = cljs.core.nth.call(null,vec__745,(0),null);
var plan_726__$7 = cljs.core.nth.call(null,vec__745,(1),null);
var vec__748 = cljs.core.async.impl.ioc_macros_runtime.add_instruction.call(null,cljs.core.async.impl.ioc_macros_runtime.__GT_PopTry.call(null)).call(null,plan_726__$7);
var ___$2 = cljs.core.nth.call(null,vec__748,(0),null);
var plan_726__$8 = cljs.core.nth.call(null,vec__748,(1),null);
var vec__751 = cljs.core.async.impl.ioc_macros_runtime.add_instruction.call(null,cljs.core.async.impl.ioc_macros_runtime.__GT_CatchHandler.call(null,catch_blocks)).call(null,plan_726__$8);
var ___$3 = cljs.core.nth.call(null,vec__751,(0),null);
var plan_726__$9 = cljs.core.nth.call(null,vec__751,(1),null);
var vec__754 = cljs.core.async.impl.ioc_macros_runtime.set_block.call(null,cur_blk).call(null,plan_726__$9);
var ___$4 = cljs.core.nth.call(null,vec__754,(0),null);
var plan_726__$10 = cljs.core.nth.call(null,vec__754,(1),null);
var vec__757 = cljs.core.async.impl.ioc_macros_runtime.add_instruction.call(null,cljs.core.async.impl.ioc_macros_runtime.__GT_Jmp.call(null,null,body_block)).call(null,plan_726__$10);
var ___$5 = cljs.core.nth.call(null,vec__757,(0),null);
var plan_726__$11 = cljs.core.nth.call(null,vec__757,(1),null);
var vec__760 = cljs.core.async.impl.ioc_macros_runtime.set_block.call(null,body_block).call(null,plan_726__$11);
var ___$6 = cljs.core.nth.call(null,vec__760,(0),null);
var plan_726__$12 = cljs.core.nth.call(null,vec__760,(1),null);
var vec__763 = (cljs.core.truth_(finally$)?cljs.core.async.impl.ioc_macros_runtime.add_instruction.call(null,cljs.core.async.impl.ioc_macros_runtime.__GT_PushTry.call(null,finally_blk)):cljs.core.async.impl.ioc_macros_runtime.no_op.call(null)).call(null,plan_726__$12);
var ___$7 = cljs.core.nth.call(null,vec__763,(0),null);
var plan_726__$13 = cljs.core.nth.call(null,vec__763,(1),null);
var vec__766 = cljs.core.async.impl.ioc_macros_runtime.add_instruction.call(null,cljs.core.async.impl.ioc_macros_runtime.__GT_PushTry.call(null,catch_handler_block)).call(null,plan_726__$13);
var ___$8 = cljs.core.nth.call(null,vec__766,(0),null);
var plan_726__$14 = cljs.core.nth.call(null,vec__766,(1),null);
var vec__769 = cljs.core.async.impl.ioc_macros_runtime.item_to_ssa.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"do","do",(1686842252),null),body__$1)).call(null,plan_726__$14);
var body__$2 = cljs.core.nth.call(null,vec__769,(0),null);
var plan_726__$15 = cljs.core.nth.call(null,vec__769,(1),null);
var vec__772 = cljs.core.async.impl.ioc_macros_runtime.add_instruction.call(null,cljs.core.async.impl.ioc_macros_runtime.__GT_PopTry.call(null)).call(null,plan_726__$15);
var ___$9 = cljs.core.nth.call(null,vec__772,(0),null);
var plan_726__$16 = cljs.core.nth.call(null,vec__772,(1),null);
var vec__775 = cljs.core.async.impl.ioc_macros_runtime.add_instruction.call(null,cljs.core.async.impl.ioc_macros_runtime.__GT_Jmp.call(null,body__$2,finally_blk)).call(null,plan_726__$16);
var ___$10 = cljs.core.nth.call(null,vec__775,(0),null);
var plan_726__$17 = cljs.core.nth.call(null,vec__775,(1),null);
var vec__778 = cljs.core.async.impl.ioc_macros_runtime.set_block.call(null,exit_block).call(null,plan_726__$17);
var ___$11 = cljs.core.nth.call(null,vec__778,(0),null);
var plan_726__$18 = cljs.core.nth.call(null,vec__778,(1),null);
var vec__781 = cljs.core.async.impl.ioc_macros_runtime.add_instruction.call(null,cljs.core.async.impl.ioc_macros_runtime.__GT_Const.call(null,new cljs.core.Keyword("cljs.core.async.impl.ioc-macros-runtime","value","cljs.core.async.impl.ioc-macros-runtime/value",(1763202694)))).call(null,plan_726__$18);
var ret = cljs.core.nth.call(null,vec__781,(0),null);
var plan_726__$19 = cljs.core.nth.call(null,vec__781,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret,plan_726__$19], null);
});
;})(map__724,map__724__$1,m,body__$1,catches,finally$,vec__721,seq__722,first__723,seq__722__$1,_,body))
}));
cljs.core._add_method.call(null,cljs.core.async.impl.ioc_macros_runtime.sexpr_to_ssa,new cljs.core.Symbol(null,"recur","recur",(1202958259),null),(function (p__880){
var vec__881 = p__880;
var seq__882 = cljs.core.seq.call(null,vec__881);
var first__883 = cljs.core.first.call(null,seq__882);
var seq__882__$1 = cljs.core.next.call(null,seq__882);
var _ = first__883;
var vals = seq__882__$1;
return ((function (vec__881,seq__882,first__883,seq__882__$1,_,vals){
return (function (plan_884){
var vec__885 = cljs.core.async.impl.ioc_macros_runtime.all.call(null,cljs.core.map.call(null,cljs.core.async.impl.ioc_macros_runtime.item_to_ssa,vals)).call(null,plan_884);
var val_ids = cljs.core.nth.call(null,vec__885,(0),null);
var plan_884__$1 = cljs.core.nth.call(null,vec__885,(1),null);
var vec__888 = cljs.core.async.impl.ioc_macros_runtime.get_binding.call(null,new cljs.core.Keyword(null,"recur-nodes","recur-nodes",(2077600963))).call(null,plan_884__$1);
var recurs = cljs.core.nth.call(null,vec__888,(0),null);
var plan_884__$2 = cljs.core.nth.call(null,vec__888,(1),null);
var vec__891 = (function (){
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,val_ids),cljs.core.count.call(null,recurs))){
} else {
throw (new Error(["Assert failed: ","Wrong number of arguments to recur","\n","(= (count val-ids) (count recurs))"].join('')));
}

return cljs.core.async.impl.ioc_macros_runtime.no_op.call(null);
})()
.call(null,plan_884__$2);
var ___$1 = cljs.core.nth.call(null,vec__891,(0),null);
var plan_884__$3 = cljs.core.nth.call(null,vec__891,(1),null);
var vec__894 = cljs.core.async.impl.ioc_macros_runtime.add_instruction.call(null,cljs.core.async.impl.ioc_macros_runtime.__GT_Recur.call(null,recurs,val_ids)).call(null,plan_884__$3);
var ___$2 = cljs.core.nth.call(null,vec__894,(0),null);
var plan_884__$4 = cljs.core.nth.call(null,vec__894,(1),null);
var vec__897 = cljs.core.async.impl.ioc_macros_runtime.get_binding.call(null,new cljs.core.Keyword(null,"recur-point","recur-point",(-355035890))).call(null,plan_884__$4);
var recur_point = cljs.core.nth.call(null,vec__897,(0),null);
var plan_884__$5 = cljs.core.nth.call(null,vec__897,(1),null);
var vec__900 = cljs.core.async.impl.ioc_macros_runtime.add_instruction.call(null,cljs.core.async.impl.ioc_macros_runtime.__GT_Jmp.call(null,null,recur_point)).call(null,plan_884__$5);
var ___$3 = cljs.core.nth.call(null,vec__900,(0),null);
var plan_884__$6 = cljs.core.nth.call(null,vec__900,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.core.async.impl.ioc-macros-runtime","terminated","cljs.core.async.impl.ioc-macros-runtime/terminated",(-177180433)),plan_884__$6], null);
});
;})(vec__881,seq__882,first__883,seq__882__$1,_,vals))
}));
cljs.core._add_method.call(null,cljs.core.async.impl.ioc_macros_runtime.sexpr_to_ssa,new cljs.core.Symbol(null,"if","if",(1181717262),null),(function (p__903){
var vec__904 = p__903;
var _ = cljs.core.nth.call(null,vec__904,(0),null);
var test = cljs.core.nth.call(null,vec__904,(1),null);
var then = cljs.core.nth.call(null,vec__904,(2),null);
var else$ = cljs.core.nth.call(null,vec__904,(3),null);
return ((function (vec__904,_,test,then,else$){
return (function (plan_907){
var vec__908 = cljs.core.async.impl.ioc_macros_runtime.item_to_ssa.call(null,test).call(null,plan_907);
var test_id = cljs.core.nth.call(null,vec__908,(0),null);
var plan_907__$1 = cljs.core.nth.call(null,vec__908,(1),null);
var vec__911 = cljs.core.async.impl.ioc_macros_runtime.add_block.call(null).call(null,plan_907__$1);
var then_blk = cljs.core.nth.call(null,vec__911,(0),null);
var plan_907__$2 = cljs.core.nth.call(null,vec__911,(1),null);
var vec__914 = cljs.core.async.impl.ioc_macros_runtime.add_block.call(null).call(null,plan_907__$2);
var else_blk = cljs.core.nth.call(null,vec__914,(0),null);
var plan_907__$3 = cljs.core.nth.call(null,vec__914,(1),null);
var vec__917 = cljs.core.async.impl.ioc_macros_runtime.add_block.call(null).call(null,plan_907__$3);
var final_blk = cljs.core.nth.call(null,vec__917,(0),null);
var plan_907__$4 = cljs.core.nth.call(null,vec__917,(1),null);
var vec__920 = cljs.core.async.impl.ioc_macros_runtime.add_instruction.call(null,cljs.core.async.impl.ioc_macros_runtime.__GT_CondBr.call(null,test_id,then_blk,else_blk)).call(null,plan_907__$4);
var ___$1 = cljs.core.nth.call(null,vec__920,(0),null);
var plan_907__$5 = cljs.core.nth.call(null,vec__920,(1),null);
var vec__923 = cljs.core.async.impl.ioc_macros_runtime.set_block.call(null,then_blk).call(null,plan_907__$5);
var ___$2 = cljs.core.nth.call(null,vec__923,(0),null);
var plan_907__$6 = cljs.core.nth.call(null,vec__923,(1),null);
var vec__926 = cljs.core.async.impl.ioc_macros_runtime.item_to_ssa.call(null,then).call(null,plan_907__$6);
var then_id = cljs.core.nth.call(null,vec__926,(0),null);
var plan_907__$7 = cljs.core.nth.call(null,vec__926,(1),null);
var vec__929 = ((cljs.core.not_EQ_.call(null,then_id,new cljs.core.Keyword("cljs.core.async.impl.ioc-macros-runtime","terminated","cljs.core.async.impl.ioc-macros-runtime/terminated",(-177180433))))?((function (vec__908,test_id,plan_907__$1,vec__911,then_blk,plan_907__$2,vec__914,else_blk,plan_907__$3,vec__917,final_blk,plan_907__$4,vec__920,___$1,plan_907__$5,vec__923,___$2,plan_907__$6,vec__926,then_id,plan_907__$7,vec__904,_,test,then,else$){
return (function (plan_947){
var vec__948 = cljs.core.async.impl.ioc_macros_runtime.add_instruction.call(null,cljs.core.async.impl.ioc_macros_runtime.__GT_Jmp.call(null,then_id,final_blk)).call(null,plan_947);
var ___$3 = cljs.core.nth.call(null,vec__948,(0),null);
var plan_947__$1 = cljs.core.nth.call(null,vec__948,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [then_id,plan_947__$1], null);
});})(vec__908,test_id,plan_907__$1,vec__911,then_blk,plan_907__$2,vec__914,else_blk,plan_907__$3,vec__917,final_blk,plan_907__$4,vec__920,___$1,plan_907__$5,vec__923,___$2,plan_907__$6,vec__926,then_id,plan_907__$7,vec__904,_,test,then,else$))
:cljs.core.async.impl.ioc_macros_runtime.no_op.call(null)).call(null,plan_907__$7);
var ___$3 = cljs.core.nth.call(null,vec__929,(0),null);
var plan_907__$8 = cljs.core.nth.call(null,vec__929,(1),null);
var vec__932 = cljs.core.async.impl.ioc_macros_runtime.set_block.call(null,else_blk).call(null,plan_907__$8);
var ___$4 = cljs.core.nth.call(null,vec__932,(0),null);
var plan_907__$9 = cljs.core.nth.call(null,vec__932,(1),null);
var vec__935 = cljs.core.async.impl.ioc_macros_runtime.item_to_ssa.call(null,else$).call(null,plan_907__$9);
var else_id = cljs.core.nth.call(null,vec__935,(0),null);
var plan_907__$10 = cljs.core.nth.call(null,vec__935,(1),null);
var vec__938 = ((cljs.core.not_EQ_.call(null,else_id,new cljs.core.Keyword("cljs.core.async.impl.ioc-macros-runtime","terminated","cljs.core.async.impl.ioc-macros-runtime/terminated",(-177180433))))?((function (vec__908,test_id,plan_907__$1,vec__911,then_blk,plan_907__$2,vec__914,else_blk,plan_907__$3,vec__917,final_blk,plan_907__$4,vec__920,___$1,plan_907__$5,vec__923,___$2,plan_907__$6,vec__926,then_id,plan_907__$7,vec__929,___$3,plan_907__$8,vec__932,___$4,plan_907__$9,vec__935,else_id,plan_907__$10,vec__904,_,test,then,else$){
return (function (plan_951){
var vec__952 = cljs.core.async.impl.ioc_macros_runtime.add_instruction.call(null,cljs.core.async.impl.ioc_macros_runtime.__GT_Jmp.call(null,else_id,final_blk)).call(null,plan_951);
var ___$5 = cljs.core.nth.call(null,vec__952,(0),null);
var plan_951__$1 = cljs.core.nth.call(null,vec__952,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [then_id,plan_951__$1], null);
});})(vec__908,test_id,plan_907__$1,vec__911,then_blk,plan_907__$2,vec__914,else_blk,plan_907__$3,vec__917,final_blk,plan_907__$4,vec__920,___$1,plan_907__$5,vec__923,___$2,plan_907__$6,vec__926,then_id,plan_907__$7,vec__929,___$3,plan_907__$8,vec__932,___$4,plan_907__$9,vec__935,else_id,plan_907__$10,vec__904,_,test,then,else$))
:cljs.core.async.impl.ioc_macros_runtime.no_op.call(null)).call(null,plan_907__$10);
var ___$5 = cljs.core.nth.call(null,vec__938,(0),null);
var plan_907__$11 = cljs.core.nth.call(null,vec__938,(1),null);
var vec__941 = cljs.core.async.impl.ioc_macros_runtime.set_block.call(null,final_blk).call(null,plan_907__$11);
var ___$6 = cljs.core.nth.call(null,vec__941,(0),null);
var plan_907__$12 = cljs.core.nth.call(null,vec__941,(1),null);
var vec__944 = cljs.core.async.impl.ioc_macros_runtime.add_instruction.call(null,cljs.core.async.impl.ioc_macros_runtime.__GT_Const.call(null,new cljs.core.Keyword("cljs.core.async.impl.ioc-macros-runtime","value","cljs.core.async.impl.ioc-macros-runtime/value",(1763202694)))).call(null,plan_907__$12);
var val_id = cljs.core.nth.call(null,vec__944,(0),null);
var plan_907__$13 = cljs.core.nth.call(null,vec__944,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [val_id,plan_907__$13], null);
});
;})(vec__904,_,test,then,else$))
}));
cljs.core._add_method.call(null,cljs.core.async.impl.ioc_macros_runtime.sexpr_to_ssa,new cljs.core.Symbol(null,"fn*","fn*",(-752876845),null),(function() { 
var G__962__delegate = function (fn_expr){
return (function (plan_955){
var vec__956 = cljs.core.async.impl.ioc_macros_runtime.get_binding.call(null,new cljs.core.Keyword(null,"locals","locals",(535295783))).call(null,plan_955);
var locals = cljs.core.nth.call(null,vec__956,(0),null);
var plan_955__$1 = cljs.core.nth.call(null,vec__956,(1),null);
var vec__959 = cljs.core.async.impl.ioc_macros_runtime.add_instruction.call(null,cljs.core.async.impl.ioc_macros_runtime.__GT_XFn.call(null,fn_expr,cljs.core.keys.call(null,locals),cljs.core.vals.call(null,locals))).call(null,plan_955__$1);
var fn_id = cljs.core.nth.call(null,vec__959,(0),null);
var plan_955__$2 = cljs.core.nth.call(null,vec__959,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fn_id,plan_955__$2], null);
});
};
var G__962 = function (var_args){
var fn_expr = null;
if (arguments.length > 0) {
var G__963__i = 0, G__963__a = new Array(arguments.length -  0);
while (G__963__i < G__963__a.length) {G__963__a[G__963__i] = arguments[G__963__i + 0]; ++G__963__i;}
  fn_expr = new cljs.core.IndexedSeq(G__963__a,0,null);
} 
return G__962__delegate.call(this,fn_expr);};
G__962.cljs$lang$maxFixedArity = 0;
G__962.cljs$lang$applyTo = (function (arglist__964){
var fn_expr = cljs.core.seq(arglist__964);
return G__962__delegate(fn_expr);
});
G__962.cljs$core$IFn$_invoke$arity$variadic = G__962__delegate;
return G__962;
})()
);
cljs.core.async.impl.ioc_macros_runtime.special_override_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol(null,"case","case",(-1510733573),null),"null",new cljs.core.Symbol("clojure.core","case","clojure.core/case",(-1775709118),null),"null",new cljs.core.Symbol(null,"try","try",(-1273693247),null),"null",new cljs.core.Symbol("clojure.core","try","clojure.core/try",(-433037384),null),"null"], null), null);
cljs.core.async.impl.ioc_macros_runtime.expand = (function cljs$core$async$impl$ioc_macros_runtime$expand(locals,env,form){
var form__$1 = form;
while(true){
if((!(cljs.core.seq_QMARK_.call(null,form__$1)))){
return form__$1;
} else {
var vec__965 = form__$1;
var seq__966 = cljs.core.seq.call(null,vec__965);
var first__967 = cljs.core.first.call(null,seq__966);
var seq__966__$1 = cljs.core.next.call(null,seq__966);
var s = first__967;
var r = seq__966__$1;
if((s instanceof cljs.core.Symbol)){
if(cljs.core.truth_((function (){var or__9218__auto__ = cljs.core.get.call(null,locals,s);
if(cljs.core.truth_(or__9218__auto__)){
return or__9218__auto__;
} else {
return cljs.core.async.impl.ioc_macros_runtime.special_override_QMARK_.call(null,s);
}
})())){
return form__$1;
} else {
var new_env = cljs.core.update_in.call(null,env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"locals","locals",(535295783))], null),cljs.core.merge,locals);
var expanded = cljs.analyzer.macroexpand_1.call(null,new_env,form__$1);
if(cljs.core._EQ_.call(null,expanded,form__$1)){
return form__$1;
} else {
var G__968 = expanded;
form__$1 = G__968;
continue;
}
}
} else {
return form__$1;
}
}
break;
}
});
cljs.core.async.impl.ioc_macros_runtime.terminate_custom = (function cljs$core$async$impl$ioc_macros_runtime$terminate_custom(vals,term){
return (function (plan_969){
var vec__970 = cljs.core.async.impl.ioc_macros_runtime.add_block.call(null).call(null,plan_969);
var blk = cljs.core.nth.call(null,vec__970,(0),null);
var plan_969__$1 = cljs.core.nth.call(null,vec__970,(1),null);
var vec__973 = cljs.core.async.impl.ioc_macros_runtime.all.call(null,cljs.core.map.call(null,cljs.core.async.impl.ioc_macros_runtime.item_to_ssa,vals)).call(null,plan_969__$1);
var vals__$1 = cljs.core.nth.call(null,vec__973,(0),null);
var plan_969__$2 = cljs.core.nth.call(null,vec__973,(1),null);
var vec__976 = cljs.core.async.impl.ioc_macros_runtime.add_instruction.call(null,cljs.core.async.impl.ioc_macros_runtime.__GT_CustomTerminator.call(null,term,blk,vals__$1)).call(null,plan_969__$2);
var val = cljs.core.nth.call(null,vec__976,(0),null);
var plan_969__$3 = cljs.core.nth.call(null,vec__976,(1),null);
var vec__979 = cljs.core.async.impl.ioc_macros_runtime.set_block.call(null,blk).call(null,plan_969__$3);
var _ = cljs.core.nth.call(null,vec__979,(0),null);
var plan_969__$4 = cljs.core.nth.call(null,vec__979,(1),null);
var vec__982 = cljs.core.async.impl.ioc_macros_runtime.add_instruction.call(null,cljs.core.async.impl.ioc_macros_runtime.__GT_Const.call(null,new cljs.core.Keyword("cljs.core.async.impl.ioc-macros-runtime","value","cljs.core.async.impl.ioc-macros-runtime/value",(1763202694)))).call(null,plan_969__$4);
var res = cljs.core.nth.call(null,vec__982,(0),null);
var plan_969__$5 = cljs.core.nth.call(null,vec__982,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [res,plan_969__$5], null);
});
});
cljs.core.async.impl.ioc_macros_runtime.fixup_aliases = (function cljs$core$async$impl$ioc_macros_runtime$fixup_aliases(sym,env){
var aliases = cljs.core.PersistentVector.EMPTY;
if(cljs.core.not.call(null,cljs.core.namespace.call(null,sym))){
return sym;
} else {
var temp__8960__auto__ = (function (){var or__9218__auto__ = cljs.core.get_in.call(null,env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"requires-macros","requires-macros",(-1690805109)),cljs.core.symbol.call(null,cljs.core.namespace.call(null,sym))], null));
if(cljs.core.truth_(or__9218__auto__)){
return or__9218__auto__;
} else {
return cljs.core.get_in.call(null,env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"requires","requires",(-1201390927)),cljs.core.symbol.call(null,cljs.core.namespace.call(null,sym))], null));
}
})();
if(cljs.core.truth_(temp__8960__auto__)){
var ns = temp__8960__auto__;
return cljs.core.symbol.call(null,cljs.core.name.call(null,ns),cljs.core.name.call(null,sym));
} else {
return sym;
}
}
});
cljs.core._add_method.call(null,cljs.core.async.impl.ioc_macros_runtime._item_to_ssa,new cljs.core.Keyword(null,"list","list",(765357683)),(function (lst){
return (function (plan_985){
var vec__986 = cljs.core.async.impl.ioc_macros_runtime.get_binding.call(null,new cljs.core.Keyword(null,"env","env",(-1815813235))).call(null,plan_985);
var env = cljs.core.nth.call(null,vec__986,(0),null);
var plan_985__$1 = cljs.core.nth.call(null,vec__986,(1),null);
var vec__989 = cljs.core.async.impl.ioc_macros_runtime.get_binding.call(null,new cljs.core.Keyword(null,"locals","locals",(535295783))).call(null,plan_985__$1);
var locals = cljs.core.nth.call(null,vec__989,(0),null);
var plan_985__$2 = cljs.core.nth.call(null,vec__989,(1),null);
var vec__992 = cljs.core.async.impl.ioc_macros_runtime.get_binding.call(null,new cljs.core.Keyword(null,"terminators","terminators",(-1448255712))).call(null,plan_985__$2);
var terminators = cljs.core.nth.call(null,vec__992,(0),null);
var plan_985__$3 = cljs.core.nth.call(null,vec__992,(1),null);
var vec__995 = (function (){var exp = cljs.core.async.impl.ioc_macros_runtime.expand.call(null,locals,env,lst);
if(cljs.core.seq_QMARK_.call(null,exp)){
if((cljs.core.first.call(null,exp) instanceof cljs.core.Symbol)){
var f = cljs.core.async.impl.ioc_macros_runtime.fixup_aliases.call(null,cljs.core.first.call(null,exp),env);
if(cljs.core.truth_(cljs.core.async.impl.ioc_macros_runtime.is_special_QMARK_.call(null,f))){
return cljs.core.async.impl.ioc_macros_runtime.sexpr_to_ssa.call(null,exp);
} else {
if(cljs.core.truth_(cljs.core.get.call(null,locals,f))){
return cljs.core.async.impl.ioc_macros_runtime.default_sexpr.call(null,exp);
} else {
if(cljs.core.truth_(cljs.core.get.call(null,terminators,f))){
return cljs.core.async.impl.ioc_macros_runtime.terminate_custom.call(null,cljs.core.next.call(null,exp),cljs.core.get.call(null,terminators,f));
} else {
return cljs.core.async.impl.ioc_macros_runtime.default_sexpr.call(null,exp);

}
}
}
} else {
return cljs.core.async.impl.ioc_macros_runtime.default_sexpr.call(null,exp);
}
} else {
return cljs.core.async.impl.ioc_macros_runtime.item_to_ssa.call(null,exp);
}
})().call(null,plan_985__$3);
var val = cljs.core.nth.call(null,vec__995,(0),null);
var plan_985__$4 = cljs.core.nth.call(null,vec__995,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [val,plan_985__$4], null);
});
}));
cljs.core._add_method.call(null,cljs.core.async.impl.ioc_macros_runtime._item_to_ssa,new cljs.core.Keyword(null,"default","default",(-1987822328)),(function (x){
return (function (plan){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,plan], null);
});
}));
cljs.core._add_method.call(null,cljs.core.async.impl.ioc_macros_runtime._item_to_ssa,new cljs.core.Keyword(null,"symbol","symbol",(-1038572696)),(function (x){
return (function (plan_998){
var vec__999 = cljs.core.async.impl.ioc_macros_runtime.get_binding.call(null,new cljs.core.Keyword(null,"locals","locals",(535295783))).call(null,plan_998);
var locals = cljs.core.nth.call(null,vec__999,(0),null);
var plan_998__$1 = cljs.core.nth.call(null,vec__999,(1),null);
var vec__1002 = ((cljs.core.contains_QMARK_.call(null,locals,x))?((function (vec__999,locals,plan_998__$1){
return (function (p){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [locals.call(null,x),p], null);
});})(vec__999,locals,plan_998__$1))
:((function (vec__999,locals,plan_998__$1){
return (function (p){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vary_meta.call(null,x,cljs.core.assoc,new cljs.core.Keyword("cljs.core.async.impl.ioc-macros-runtime","global","cljs.core.async.impl.ioc-macros-runtime/global",(-1863350572)),true),p], null);
});})(vec__999,locals,plan_998__$1))
).call(null,plan_998__$1);
var inst_id = cljs.core.nth.call(null,vec__1002,(0),null);
var plan_998__$2 = cljs.core.nth.call(null,vec__1002,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [inst_id,plan_998__$2], null);
});
}));
cljs.core._add_method.call(null,cljs.core.async.impl.ioc_macros_runtime._item_to_ssa,new cljs.core.Keyword(null,"map","map",(1371690461)),(function (x){
return cljs.core.async.impl.ioc_macros_runtime._item_to_ssa.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","hash-map","cljs.core/hash-map",(303385767),null),null,(1),null)),cljs.core.mapcat.call(null,cljs.core.identity,x))));
}));
cljs.core._add_method.call(null,cljs.core.async.impl.ioc_macros_runtime._item_to_ssa,new cljs.core.Keyword(null,"vector","vector",(1902966158)),(function (x){
return cljs.core.async.impl.ioc_macros_runtime._item_to_ssa.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","vector","cljs.core/vector",(720641726),null),null,(1),null)),x)));
}));
cljs.core._add_method.call(null,cljs.core.async.impl.ioc_macros_runtime._item_to_ssa,new cljs.core.Keyword(null,"set","set",(304602554)),(function (x){
return cljs.core.async.impl.ioc_macros_runtime._item_to_ssa.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","hash-set","cljs.core/hash-set",(1130426749),null),null,(1),null)),x)));
}));
/**
 * Takes an sexpr and returns a hashmap that describes the execution flow of the sexpr as
 * a series of SSA style blocks.
 */
cljs.core.async.impl.ioc_macros_runtime.parse_to_state_machine = (function cljs$core$async$impl$ioc_macros_runtime$parse_to_state_machine(body,env,terminators){
return cljs.core.async.impl.ioc_macros_runtime.get_plan.call(null,(function (plan_1005){
var vec__1006 = cljs.core.async.impl.ioc_macros_runtime.push_binding.call(null,new cljs.core.Keyword(null,"env","env",(-1815813235)),env).call(null,plan_1005);
var _ = cljs.core.nth.call(null,vec__1006,(0),null);
var plan_1005__$1 = cljs.core.nth.call(null,vec__1006,(1),null);
var vec__1009 = cljs.core.async.impl.ioc_macros_runtime.push_binding.call(null,new cljs.core.Keyword(null,"locals","locals",(535295783)),cljs.core.zipmap.call(null,new cljs.core.Keyword(null,"locals","locals",(535295783)).cljs$core$IFn$_invoke$arity$1(cljs.core.keys.call(null,env)),new cljs.core.Keyword(null,"locals","locals",(535295783)).cljs$core$IFn$_invoke$arity$1(cljs.core.keys.call(null,env)))).call(null,plan_1005__$1);
var ___$1 = cljs.core.nth.call(null,vec__1009,(0),null);
var plan_1005__$2 = cljs.core.nth.call(null,vec__1009,(1),null);
var vec__1012 = cljs.core.async.impl.ioc_macros_runtime.push_binding.call(null,new cljs.core.Keyword(null,"terminators","terminators",(-1448255712)),terminators).call(null,plan_1005__$2);
var ___$2 = cljs.core.nth.call(null,vec__1012,(0),null);
var plan_1005__$3 = cljs.core.nth.call(null,vec__1012,(1),null);
var vec__1015 = cljs.core.async.impl.ioc_macros_runtime.add_block.call(null).call(null,plan_1005__$3);
var blk = cljs.core.nth.call(null,vec__1015,(0),null);
var plan_1005__$4 = cljs.core.nth.call(null,vec__1015,(1),null);
var vec__1018 = cljs.core.async.impl.ioc_macros_runtime.set_block.call(null,blk).call(null,plan_1005__$4);
var ___$3 = cljs.core.nth.call(null,vec__1018,(0),null);
var plan_1005__$5 = cljs.core.nth.call(null,vec__1018,(1),null);
var vec__1021 = cljs.core.async.impl.ioc_macros_runtime.all.call(null,cljs.core.map.call(null,cljs.core.async.impl.ioc_macros_runtime.item_to_ssa,body)).call(null,plan_1005__$5);
var ids = cljs.core.nth.call(null,vec__1021,(0),null);
var plan_1005__$6 = cljs.core.nth.call(null,vec__1021,(1),null);
var vec__1024 = cljs.core.async.impl.ioc_macros_runtime.add_instruction.call(null,cljs.core.async.impl.ioc_macros_runtime.__GT_Return.call(null,cljs.core.last.call(null,ids))).call(null,plan_1005__$6);
var term_id = cljs.core.nth.call(null,vec__1024,(0),null);
var plan_1005__$7 = cljs.core.nth.call(null,vec__1024,(1),null);
var vec__1027 = cljs.core.async.impl.ioc_macros_runtime.pop_binding.call(null,new cljs.core.Keyword(null,"terminators","terminators",(-1448255712))).call(null,plan_1005__$7);
var ___$4 = cljs.core.nth.call(null,vec__1027,(0),null);
var plan_1005__$8 = cljs.core.nth.call(null,vec__1027,(1),null);
var vec__1030 = cljs.core.async.impl.ioc_macros_runtime.pop_binding.call(null,new cljs.core.Keyword(null,"locals","locals",(535295783))).call(null,plan_1005__$8);
var ___$5 = cljs.core.nth.call(null,vec__1030,(0),null);
var plan_1005__$9 = cljs.core.nth.call(null,vec__1030,(1),null);
var vec__1033 = cljs.core.async.impl.ioc_macros_runtime.pop_binding.call(null,new cljs.core.Keyword(null,"env","env",(-1815813235))).call(null,plan_1005__$9);
var ___$6 = cljs.core.nth.call(null,vec__1033,(0),null);
var plan_1005__$10 = cljs.core.nth.call(null,vec__1033,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [term_id,plan_1005__$10], null);
}));
});
cljs.core.async.impl.ioc_macros_runtime.index_instruction = (function cljs$core$async$impl$ioc_macros_runtime$index_instruction(blk_id,idx,inst){
var idx__$1 = cljs.core.reduce.call(null,(function (acc,id){
return cljs.core.update_in.call(null,acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"read-in","read-in",(790964176))], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),blk_id);
}),idx,cljs.core.filter.call(null,cljs.core.async.impl.ioc_macros_runtime.instruction_QMARK_,cljs.core.async.impl.ioc_macros_runtime.reads_from.call(null,inst)));
var idx__$2 = cljs.core.reduce.call(null,((function (idx__$1){
return (function (acc,id){
return cljs.core.update_in.call(null,acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"written-in","written-in",(1332732034))], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),blk_id);
});})(idx__$1))
,idx__$1,cljs.core.filter.call(null,cljs.core.async.impl.ioc_macros_runtime.instruction_QMARK_,cljs.core.async.impl.ioc_macros_runtime.writes_to.call(null,inst)));
return idx__$2;
});
cljs.core.async.impl.ioc_macros_runtime.index_block = (function cljs$core$async$impl$ioc_macros_runtime$index_block(idx,p__1036){
var vec__1037 = p__1036;
var blk_id = cljs.core.nth.call(null,vec__1037,(0),null);
var blk = cljs.core.nth.call(null,vec__1037,(1),null);
return cljs.core.reduce.call(null,cljs.core.partial.call(null,cljs.core.async.impl.ioc_macros_runtime.index_instruction,blk_id),idx,blk);
});
cljs.core.async.impl.ioc_macros_runtime.index_state_machine = (function cljs$core$async$impl$ioc_macros_runtime$index_state_machine(machine){
return cljs.core.reduce.call(null,cljs.core.async.impl.ioc_macros_runtime.index_block,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"blocks","blocks",(-610462153)).cljs$core$IFn$_invoke$arity$1(machine));
});
cljs.core.async.impl.ioc_macros_runtime.id_for_inst = (function cljs$core$async$impl$ioc_macros_runtime$id_for_inst(m,sym){
var temp__8960__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,m),sym);
if(cljs.core.truth_(temp__8960__auto__)){
var i = temp__8960__auto__;
return i;
} else {
var next_idx = cljs.core.get.call(null,cljs.core.deref.call(null,m),new cljs.core.Keyword("cljs.core.async.impl.ioc-macros-runtime","next-idx","cljs.core.async.impl.ioc-macros-runtime/next-idx",(1413817431)));
cljs.core.swap_BANG_.call(null,m,cljs.core.assoc,sym,next_idx);

cljs.core.swap_BANG_.call(null,m,cljs.core.assoc,new cljs.core.Keyword("cljs.core.async.impl.ioc-macros-runtime","next-idx","cljs.core.async.impl.ioc-macros-runtime/next-idx",(1413817431)),(next_idx + (1)));

return next_idx;
}
});
/**
 * Returns true if this value should be saved in the state hash map
 */
cljs.core.async.impl.ioc_macros_runtime.persistent_value_QMARK_ = (function cljs$core$async$impl$ioc_macros_runtime$persistent_value_QMARK_(index,value){
return ((cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"read-in","read-in",(790964176)).cljs$core$IFn$_invoke$arity$1(value.call(null,index)),new cljs.core.Keyword(null,"written-in","written-in",(1332732034)).cljs$core$IFn$_invoke$arity$1(value.call(null,index)))) || ((cljs.core.count.call(null,new cljs.core.Keyword(null,"read-in","read-in",(790964176)).cljs$core$IFn$_invoke$arity$1(value.call(null,index))) > (1))));
});
cljs.core.async.impl.ioc_macros_runtime.count_persistent_values = (function cljs$core$async$impl$ioc_macros_runtime$count_persistent_values(index){
return cljs.core.count.call(null,cljs.core.filter.call(null,cljs.core.partial.call(null,cljs.core.async.impl.ioc_macros_runtime.persistent_value_QMARK_,index),cljs.core.filter.call(null,cljs.core.async.impl.ioc_macros_runtime.instruction_QMARK_,cljs.core.keys.call(null,index))));
});
cljs.core.async.impl.ioc_macros_runtime.build_block_preamble = (function cljs$core$async$impl$ioc_macros_runtime$build_block_preamble(local_map,idx,state_sym,blk){
var args = cljs.core.vec.call(null,cljs.core.set.call(null,cljs.core.filter.call(null,cljs.core.partial.call(null,cljs.core.async.impl.ioc_macros_runtime.persistent_value_QMARK_,idx),cljs.core.filter.call(null,cljs.core.async.impl.ioc_macros_runtime.instruction_QMARK_,cljs.core.mapcat.call(null,cljs.core.async.impl.ioc_macros_runtime.reads_from,blk)))));
if(cljs.core.empty_QMARK_.call(null,args)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.mapcat.call(null,((function (args){
return (function (sym){
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,sym,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","aget","cljs.core/aget",(6345791),null),null,(1),null)),(new cljs.core.List(null,state_sym,null,(1),null)),(new cljs.core.List(null,cljs.core.async.impl.ioc_macros_runtime.id_for_inst.call(null,local_map,sym),null,(1),null)))),null,(1),null)))));
});})(args))
,args);
}
});
cljs.core.async.impl.ioc_macros_runtime.build_block_body = (function cljs$core$async$impl$ioc_macros_runtime$build_block_body(state_sym,blk){
return cljs.core.mapcat.call(null,(function (p1__13_SHARP_){
return cljs.core.async.impl.ioc_macros_runtime.emit_instruction.call(null,p1__13_SHARP_,state_sym);
}),cljs.core.butlast.call(null,blk));
});
cljs.core.async.impl.ioc_macros_runtime.build_new_state = (function cljs$core$async$impl$ioc_macros_runtime$build_new_state(local_map,idx,state_sym,blk){
var results = cljs.core.vec.call(null,cljs.core.set.call(null,cljs.core.filter.call(null,cljs.core.partial.call(null,cljs.core.async.impl.ioc_macros_runtime.persistent_value_QMARK_,idx),cljs.core.filter.call(null,cljs.core.async.impl.ioc_macros_runtime.instruction_QMARK_,cljs.core.mapcat.call(null,cljs.core.async.impl.ioc_macros_runtime.writes_to,blk)))));
var results__$1 = cljs.core.interleave.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.async.impl.ioc_macros_runtime.id_for_inst,local_map),results),results);
if((!(cljs.core.empty_QMARK_.call(null,results__$1)))){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core.async.impl.ioc-macros","aset-all!","cljs.core.async.impl.ioc-macros/aset-all!",(2072147987),null),null,(1),null)),(new cljs.core.List(null,state_sym,null,(1),null)),results__$1));
} else {
return state_sym;
}
});
cljs.core.async.impl.ioc_macros_runtime.emit_state_machine = (function cljs$core$async$impl$ioc_macros_runtime$emit_state_machine(machine,num_user_params,custom_terminators){
var index = cljs.core.async.impl.ioc_macros_runtime.index_state_machine.call(null,machine);
var state_sym = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"state_"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"objects","objects",(-554722035),null)], null));
var local_start_idx = (num_user_params + (6));
var state_arr_size = (local_start_idx + cljs.core.async.impl.ioc_macros_runtime.count_persistent_values.call(null,index));
var local_map = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.core.async.impl.ioc-macros-runtime","next-idx","cljs.core.async.impl.ioc-macros-runtime/next-idx",(1413817431)),local_start_idx], null));
var block_catches = new cljs.core.Keyword(null,"block-catches","block-catches",(-193801771)).cljs$core$IFn$_invoke$arity$1(machine);
var state_val_sym = cljs.core.gensym.call(null,"state_val_");
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"switch__14__auto__","switch__14__auto__",(2103412609),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",(-1065745098),null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,state_sym,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,state_val_sym,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","aget","cljs.core/aget",(6345791),null),null,(1),null)),(new cljs.core.List(null,state_sym,null,(1),null)),(new cljs.core.List(null,(1),null,(1),null)))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",(2005388338),null),null,(1),null)),cljs.core.mapcat.call(null,((function (index,state_sym,local_start_idx,state_arr_size,local_map,block_catches,state_val_sym){
return (function (p__1040){
var vec__1041 = p__1040;
var id = cljs.core.nth.call(null,vec__1041,(0),null);
var blk = cljs.core.nth.call(null,vec__1041,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","==","cljs.core/==",(-632471488),null),null,(1),null)),(new cljs.core.List(null,state_val_sym,null,(1),null)),(new cljs.core.List(null,id,null,(1),null)))),cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core.concat.call(null,cljs.core.async.impl.ioc_macros_runtime.build_block_preamble.call(null,local_map,index,state_sym,blk),cljs.core.async.impl.ioc_macros_runtime.build_block_body.call(null,state_sym,blk)),(new cljs.core.List(null,state_sym,null,(1),null)),(new cljs.core.List(null,cljs.core.async.impl.ioc_macros_runtime.build_new_state.call(null,local_map,index,state_sym,blk),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.async.impl.ioc_macros_runtime.terminate_block.call(null,cljs.core.last.call(null,blk),state_sym,custom_terminators),null,(1),null))))], null);
});})(index,state_sym,local_start_idx,state_arr_size,local_map,block_catches,state_val_sym))
,new cljs.core.Keyword(null,"blocks","blocks",(-610462153)).cljs$core$IFn$_invoke$arity$1(machine)))),null,(1),null)))),null,(1),null)))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",(-1065745098),null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"state-machine__15__auto__","state-machine__15__auto__",(1807482626),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core.async.impl.ioc-macros","aset-all!","cljs.core.async.impl.ioc-macros/aset-all!",(2072147987),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","make-array","cljs.core/make-array",(-1802166799),null),null,(1),null)),(new cljs.core.List(null,state_arr_size,null,(1),null)))),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"state-machine__15__auto__","state-machine__15__auto__",(1807482626),null),null,(1),null)),(new cljs.core.List(null,(1),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"start-block","start-block",(885980136)).cljs$core$IFn$_invoke$arity$1(machine),null,(1),null)))),null,(1),null)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,state_sym,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"ret-value__16__auto__","ret-value__16__auto__",(-1618246806),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"try","try",(-1273693247),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","loop","cljs.core/loop",(-1829423021),null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"result__17__auto__","result__17__auto__",(-1100988237),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"switch__14__auto__","switch__14__auto__",(2103412609),null),null,(1),null)),(new cljs.core.List(null,state_sym,null,(1),null)))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",(1181717262),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","keyword-identical?","cljs.core/keyword-identical?",(1598491177),null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"result__17__auto__","result__17__auto__",(-1100988237),null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"recur","recur",(-437573268)),null,(1),null)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"recur","recur",(1202958259),null),null,(1),null)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"result__17__auto__","result__17__auto__",(-1100988237),null),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"catch","catch",(-1616370245),null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"default","default",(-1987822328)),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"ex__18__auto__","ex__18__auto__",(1957837114),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core.async.impl.ioc-macros","aset-all!","cljs.core.async.impl.ioc-macros/aset-all!",(2072147987),null),null,(1),null)),(new cljs.core.List(null,state_sym,null,(1),null)),(new cljs.core.List(null,(2),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"ex__18__auto__","ex__18__auto__",(1957837114),null),null,(1),null)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",(1181717262),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",(-1649497689),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","aget","cljs.core/aget",(6345791),null),null,(1),null)),(new cljs.core.List(null,state_sym,null,(1),null)),(new cljs.core.List(null,(4),null,(1),null)))),null,(1),null)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core.async.impl.ioc-macros","aset-all!","cljs.core.async.impl.ioc-macros/aset-all!",(2072147987),null),null,(1),null)),(new cljs.core.List(null,state_sym,null,(1),null)),(new cljs.core.List(null,(1),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","first","cljs.core/first",(-752535972),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","aget","cljs.core/aget",(6345791),null),null,(1),null)),(new cljs.core.List(null,state_sym,null,(1),null)),(new cljs.core.List(null,(4),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",(595905694),null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"ex__18__auto__","ex__18__auto__",(1957837114),null),null,(1),null)))),null,(1),null)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"recur","recur",(-437573268)),null,(1),null)))),null,(1),null)))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",(1181717262),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","keyword-identical?","cljs.core/keyword-identical?",(1598491177),null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"ret-value__16__auto__","ret-value__16__auto__",(-1618246806),null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"recur","recur",(-437573268)),null,(1),null)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"recur","recur",(1202958259),null),null,(1),null)),(new cljs.core.List(null,state_sym,null,(1),null)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"ret-value__16__auto__","ret-value__16__auto__",(-1618246806),null),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null))));
});
cljs.core.async.impl.ioc_macros_runtime.async_custom_terminators = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Symbol(null,"<!","<!",(-1961915773),null),new cljs.core.Symbol("cljs.core.async.impl.ioc-helpers","take!","cljs.core.async.impl.ioc-helpers/take!",(-1259008437),null),new cljs.core.Symbol("cljs.core.async","<!","cljs.core.async/<!",(1278951036),null),new cljs.core.Symbol("cljs.core.async.impl.ioc-helpers","take!","cljs.core.async.impl.ioc-helpers/take!",(-1259008437),null),new cljs.core.Symbol(null,">!",">!",(-1080922249),null),new cljs.core.Symbol("cljs.core.async.impl.ioc-helpers","put!","cljs.core.async.impl.ioc-helpers/put!",(1392345450),null),new cljs.core.Symbol("cljs.core.async",">!","cljs.core.async/>!",(-950205298),null),new cljs.core.Symbol("cljs.core.async.impl.ioc-helpers","put!","cljs.core.async.impl.ioc-helpers/put!",(1392345450),null),new cljs.core.Symbol(null,"alts!","alts!",(104119866),null),new cljs.core.Symbol("cljs.core.async","ioc-alts!","cljs.core.async/ioc-alts!",(-1272027642),null),new cljs.core.Symbol("cljs.core.async","alts!","cljs.core.async/alts!",(1340091011),null),new cljs.core.Symbol("cljs.core.async","ioc-alts!","cljs.core.async/ioc-alts!",(-1272027642),null),new cljs.core.Keyword(null,"Return","Return",(-1300089037)),new cljs.core.Symbol("cljs.core.async.impl.ioc-helpers","return-chan","cljs.core.async.impl.ioc-helpers/return-chan",(-67158632),null)], null);
cljs.core.async.impl.ioc_macros_runtime.state_machine = (function cljs$core$async$impl$ioc_macros_runtime$state_machine(body,num_user_params,env,user_transitions){
return cljs.core.async.impl.ioc_macros_runtime.emit_state_machine.call(null,cljs.core.second.call(null,cljs.core.async.impl.ioc_macros_runtime.parse_to_state_machine.call(null,body,env,user_transitions)),num_user_params,user_transitions);
});
