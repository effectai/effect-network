goog.provide("e2e.feepool");
e2e.feepool.owner_acc = e2e.token.owner_acc;
e2e.feepool.token_acc = eos_cljs.core.random_account.call(null,"token");
e2e.feepool.fee_acc = eos_cljs.core.random_account.call(null,"fee");
e2e.feepool.prop_acc = eos_cljs.core.random_account.call(null,"prop");
cljs.core.prn.call(null,e2e.feepool.fee_acc);
e2e.feepool.eos_tx_owner = (function e2e$feepool$eos_tx_owner(contr,action,args){
return eos_cljs.core.transact.call(null,contr,action,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),e2e.feepool.owner_acc,new cljs.core.Keyword(null,"permission","permission",(-511292572)),"active"], null)], null));
});
e2e.feepool.cljs_test_once_fixtures = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"before","before",(-1633692388)),(function (){
if((typeof e2e !== 'undefined') && (typeof e2e.feepool !== 'undefined') && (typeof e2e.feepool.t_e2e$feepool22 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IFn}
*/
e2e.feepool.t_e2e$feepool22 = (function (meta23){
this.meta23 = meta23;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
e2e.feepool.t_e2e$feepool22.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24,meta23__$1){
var self__ = this;
var _24__$1 = this;
return (new e2e.feepool.t_e2e$feepool22(meta23__$1));
});

e2e.feepool.t_e2e$feepool22.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24){
var self__ = this;
var _24__$1 = this;
return self__.meta23;
});

e2e.feepool.t_e2e$feepool22.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL;

e2e.feepool.t_e2e$feepool22.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___192__auto__ = self____$1;
var c__19__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19__auto__,___192__auto__,self____$1){
return (function (){
var f__20__auto__ = (function (){var switch__14__auto__ = ((function (c__19__auto__,___192__auto__,self____$1){
return (function (state_75){
var state_val_76 = (state_75[(1)]);
if((state_val_76 === (1))){
var state_75__$1 = state_75;
var statearr_77_184 = state_75__$1;
(statearr_77_184[(2)] = null);

(statearr_77_184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_76 === (2))){
var _ = (function (){var statearr_78 = state_75;
(statearr_78[(4)] = cljs.core.cons.call(null,(5),(state_75[(4)])));

return statearr_78;
})();
var inst_33 = eos_cljs.core.create_account.call(null,e2e.feepool.owner_acc,e2e.feepool.fee_acc);
var inst_34 = cljs.core.async.interop.p__GT_c.call(null,inst_33);
var state_75__$1 = state_75;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_75__$1,(6),inst_34);
} else {
if((state_val_76 === (3))){
var inst_73 = (state_75[(2)]);
var state_75__$1 = state_75;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_75__$1,inst_73);
} else {
if((state_val_76 === (4))){
var inst_26 = (state_75[(2)]);
var inst_27 = cljs.core.prn.call(null,"Error ",inst_26);
var state_75__$1 = state_75;
var statearr_80_185 = state_75__$1;
(statearr_80_185[(2)] = inst_27);

(statearr_80_185[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_76 === (5))){
var _ = (function (){var statearr_81 = state_75;
(statearr_81[(4)] = cljs.core.rest.call(null,(state_75[(4)])));

return statearr_81;
})();
var state_75__$1 = state_75;
var ex79 = (state_75__$1[(2)]);
var statearr_82_186 = state_75__$1;
(statearr_82_186[(5)] = ex79);


if((ex79 instanceof Error)){
var statearr_83_187 = state_75__$1;
(statearr_83_187[(1)] = (4));

(statearr_83_187[(5)] = null);

} else {
throw ex79;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_76 === (6))){
var inst_36 = (state_75[(7)]);
var inst_36__$1 = (state_75[(2)]);
var inst_37 = (inst_36__$1 instanceof cljs.core.ExceptionInfo);
var inst_38 = cljs.core.ex_data.call(null,inst_36__$1);
var inst_39 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_38);
var inst_40 = cljs.core._EQ_.call(null,inst_39,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_41 = ((inst_37) && (inst_40));
var state_75__$1 = (function (){var statearr_84 = state_75;
(statearr_84[(7)] = inst_36__$1);

return statearr_84;
})();
if(cljs.core.truth_(inst_41)){
var statearr_85_188 = state_75__$1;
(statearr_85_188[(1)] = (7));

} else {
var statearr_86_189 = state_75__$1;
(statearr_86_189[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_76 === (7))){
var inst_36 = (state_75[(7)]);
var inst_43 = (function(){throw inst_36})();
var state_75__$1 = state_75;
var statearr_87_190 = state_75__$1;
(statearr_87_190[(2)] = inst_43);

(statearr_87_190[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_76 === (8))){
var inst_36 = (state_75[(7)]);
var state_75__$1 = state_75;
var statearr_88_191 = state_75__$1;
(statearr_88_191[(2)] = inst_36);

(statearr_88_191[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_76 === (9))){
var inst_46 = (state_75[(2)]);
var inst_47 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_48 = [e2e.feepool.owner_acc];
var inst_49 = (new cljs.core.PersistentVector(null,(1),(5),inst_47,inst_48,null));
var inst_50 = e2e.token.deploy_token.call(null,e2e.feepool.token_acc,inst_49);
var state_75__$1 = (function (){var statearr_89 = state_75;
(statearr_89[(8)] = inst_46);

return statearr_89;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_75__$1,(10),inst_50);
} else {
if((state_val_76 === (10))){
var inst_52 = (state_75[(2)]);
var inst_53 = e2e.proposals.deploy_proposals.call(null,e2e.feepool.prop_acc);
var state_75__$1 = (function (){var statearr_90 = state_75;
(statearr_90[(9)] = inst_52);

return statearr_90;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_75__$1,(11),inst_53);
} else {
if((state_val_76 === (11))){
var inst_55 = (state_75[(2)]);
var inst_56 = eos_cljs.core.deploy.call(null,e2e.feepool.fee_acc,"contracts/feepool/feepool");
var inst_57 = cljs.core.async.interop.p__GT_c.call(null,inst_56);
var state_75__$1 = (function (){var statearr_91 = state_75;
(statearr_91[(10)] = inst_55);

return statearr_91;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_75__$1,(12),inst_57);
} else {
if((state_val_76 === (12))){
var inst_59 = (state_75[(11)]);
var inst_59__$1 = (state_75[(2)]);
var inst_60 = (inst_59__$1 instanceof cljs.core.ExceptionInfo);
var inst_61 = cljs.core.ex_data.call(null,inst_59__$1);
var inst_62 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_61);
var inst_63 = cljs.core._EQ_.call(null,inst_62,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_64 = ((inst_60) && (inst_63));
var state_75__$1 = (function (){var statearr_92 = state_75;
(statearr_92[(11)] = inst_59__$1);

return statearr_92;
})();
if(cljs.core.truth_(inst_64)){
var statearr_93_192 = state_75__$1;
(statearr_93_192[(1)] = (13));

} else {
var statearr_94_193 = state_75__$1;
(statearr_94_193[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_76 === (13))){
var inst_59 = (state_75[(11)]);
var inst_66 = (function(){throw inst_59})();
var state_75__$1 = state_75;
var statearr_95_194 = state_75__$1;
(statearr_95_194[(2)] = inst_66);

(statearr_95_194[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_76 === (14))){
var inst_59 = (state_75[(11)]);
var state_75__$1 = state_75;
var statearr_96_195 = state_75__$1;
(statearr_96_195[(2)] = inst_59);

(statearr_96_195[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_76 === (15))){
var inst_69 = (state_75[(2)]);
var inst_70 = done.call(null);
var _ = (function (){var statearr_97 = state_75;
(statearr_97[(4)] = cljs.core.rest.call(null,(state_75[(4)])));

return statearr_97;
})();
var state_75__$1 = (function (){var statearr_98 = state_75;
(statearr_98[(12)] = inst_69);

return statearr_98;
})();
var statearr_99_196 = state_75__$1;
(statearr_99_196[(2)] = inst_70);

(statearr_99_196[(1)] = (3));


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
});})(c__19__auto__,___192__auto__,self____$1))
;
return ((function (switch__14__auto__,c__19__auto__,___192__auto__,self____$1){
return (function() {
var e2e$feepool$state_machine__15__auto__ = null;
var e2e$feepool$state_machine__15__auto____0 = (function (){
var statearr_100 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_100[(0)] = e2e$feepool$state_machine__15__auto__);

(statearr_100[(1)] = (1));

return statearr_100;
});
var e2e$feepool$state_machine__15__auto____1 = (function (state_75){
while(true){
var ret_value__16__auto__ = (function (){try{while(true){
var result__17__auto__ = switch__14__auto__.call(null,state_75);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__17__auto__;
}
break;
}
}catch (e101){var ex__18__auto__ = e101;
var statearr_102_197 = state_75;
(statearr_102_197[(2)] = ex__18__auto__);


if(cljs.core.seq.call(null,(state_75[(4)]))){
var statearr_103_198 = state_75;
(statearr_103_198[(1)] = cljs.core.first.call(null,(state_75[(4)])));

} else {
throw ex__18__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__199 = state_75;
state_75 = G__199;
continue;
} else {
return ret_value__16__auto__;
}
break;
}
});
e2e$feepool$state_machine__15__auto__ = function(state_75){
switch(arguments.length){
case 0:
return e2e$feepool$state_machine__15__auto____0.call(this);
case 1:
return e2e$feepool$state_machine__15__auto____1.call(this,state_75);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
e2e$feepool$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$0 = e2e$feepool$state_machine__15__auto____0;
e2e$feepool$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$1 = e2e$feepool$state_machine__15__auto____1;
return e2e$feepool$state_machine__15__auto__;
})()
;})(switch__14__auto__,c__19__auto__,___192__auto__,self____$1))
})();
var state__21__auto__ = (function (){var statearr_104 = f__20__auto__.call(null);
(statearr_104[(6)] = c__19__auto__);

return statearr_104;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21__auto__);
});})(c__19__auto__,___192__auto__,self____$1))
);

return c__19__auto__;
});

e2e.feepool.t_e2e$feepool22.prototype.apply = (function (self__,args25){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args25)));
});

e2e.feepool.t_e2e$feepool22.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___192__auto__ = this;
var c__19__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19__auto__,___192__auto__){
return (function (){
var f__20__auto__ = (function (){var switch__14__auto__ = ((function (c__19__auto__,___192__auto__){
return (function (state_154){
var state_val_155 = (state_154[(1)]);
if((state_val_155 === (1))){
var state_154__$1 = state_154;
var statearr_156_200 = state_154__$1;
(statearr_156_200[(2)] = null);

(statearr_156_200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_155 === (2))){
var _ = (function (){var statearr_157 = state_154;
(statearr_157[(4)] = cljs.core.cons.call(null,(5),(state_154[(4)])));

return statearr_157;
})();
var inst_112 = eos_cljs.core.create_account.call(null,e2e.feepool.owner_acc,e2e.feepool.fee_acc);
var inst_113 = cljs.core.async.interop.p__GT_c.call(null,inst_112);
var state_154__$1 = state_154;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_154__$1,(6),inst_113);
} else {
if((state_val_155 === (3))){
var inst_152 = (state_154[(2)]);
var state_154__$1 = state_154;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_154__$1,inst_152);
} else {
if((state_val_155 === (4))){
var inst_105 = (state_154[(2)]);
var inst_106 = cljs.core.prn.call(null,"Error ",inst_105);
var state_154__$1 = state_154;
var statearr_159_201 = state_154__$1;
(statearr_159_201[(2)] = inst_106);

(statearr_159_201[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_155 === (5))){
var _ = (function (){var statearr_160 = state_154;
(statearr_160[(4)] = cljs.core.rest.call(null,(state_154[(4)])));

return statearr_160;
})();
var state_154__$1 = state_154;
var ex158 = (state_154__$1[(2)]);
var statearr_161_202 = state_154__$1;
(statearr_161_202[(5)] = ex158);


if((ex158 instanceof Error)){
var statearr_162_203 = state_154__$1;
(statearr_162_203[(1)] = (4));

(statearr_162_203[(5)] = null);

} else {
throw ex158;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_155 === (6))){
var inst_115 = (state_154[(7)]);
var inst_115__$1 = (state_154[(2)]);
var inst_116 = (inst_115__$1 instanceof cljs.core.ExceptionInfo);
var inst_117 = cljs.core.ex_data.call(null,inst_115__$1);
var inst_118 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_117);
var inst_119 = cljs.core._EQ_.call(null,inst_118,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_120 = ((inst_116) && (inst_119));
var state_154__$1 = (function (){var statearr_163 = state_154;
(statearr_163[(7)] = inst_115__$1);

return statearr_163;
})();
if(cljs.core.truth_(inst_120)){
var statearr_164_204 = state_154__$1;
(statearr_164_204[(1)] = (7));

} else {
var statearr_165_205 = state_154__$1;
(statearr_165_205[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_155 === (7))){
var inst_115 = (state_154[(7)]);
var inst_122 = (function(){throw inst_115})();
var state_154__$1 = state_154;
var statearr_166_206 = state_154__$1;
(statearr_166_206[(2)] = inst_122);

(statearr_166_206[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_155 === (8))){
var inst_115 = (state_154[(7)]);
var state_154__$1 = state_154;
var statearr_167_207 = state_154__$1;
(statearr_167_207[(2)] = inst_115);

(statearr_167_207[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_155 === (9))){
var inst_125 = (state_154[(2)]);
var inst_126 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_127 = [e2e.feepool.owner_acc];
var inst_128 = (new cljs.core.PersistentVector(null,(1),(5),inst_126,inst_127,null));
var inst_129 = e2e.token.deploy_token.call(null,e2e.feepool.token_acc,inst_128);
var state_154__$1 = (function (){var statearr_168 = state_154;
(statearr_168[(8)] = inst_125);

return statearr_168;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_154__$1,(10),inst_129);
} else {
if((state_val_155 === (10))){
var inst_131 = (state_154[(2)]);
var inst_132 = e2e.proposals.deploy_proposals.call(null,e2e.feepool.prop_acc);
var state_154__$1 = (function (){var statearr_169 = state_154;
(statearr_169[(9)] = inst_131);

return statearr_169;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_154__$1,(11),inst_132);
} else {
if((state_val_155 === (11))){
var inst_134 = (state_154[(2)]);
var inst_135 = eos_cljs.core.deploy.call(null,e2e.feepool.fee_acc,"contracts/feepool/feepool");
var inst_136 = cljs.core.async.interop.p__GT_c.call(null,inst_135);
var state_154__$1 = (function (){var statearr_170 = state_154;
(statearr_170[(10)] = inst_134);

return statearr_170;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_154__$1,(12),inst_136);
} else {
if((state_val_155 === (12))){
var inst_138 = (state_154[(11)]);
var inst_138__$1 = (state_154[(2)]);
var inst_139 = (inst_138__$1 instanceof cljs.core.ExceptionInfo);
var inst_140 = cljs.core.ex_data.call(null,inst_138__$1);
var inst_141 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_140);
var inst_142 = cljs.core._EQ_.call(null,inst_141,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_143 = ((inst_139) && (inst_142));
var state_154__$1 = (function (){var statearr_171 = state_154;
(statearr_171[(11)] = inst_138__$1);

return statearr_171;
})();
if(cljs.core.truth_(inst_143)){
var statearr_172_208 = state_154__$1;
(statearr_172_208[(1)] = (13));

} else {
var statearr_173_209 = state_154__$1;
(statearr_173_209[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_155 === (13))){
var inst_138 = (state_154[(11)]);
var inst_145 = (function(){throw inst_138})();
var state_154__$1 = state_154;
var statearr_174_210 = state_154__$1;
(statearr_174_210[(2)] = inst_145);

(statearr_174_210[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_155 === (14))){
var inst_138 = (state_154[(11)]);
var state_154__$1 = state_154;
var statearr_175_211 = state_154__$1;
(statearr_175_211[(2)] = inst_138);

(statearr_175_211[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_155 === (15))){
var inst_148 = (state_154[(2)]);
var inst_149 = done.call(null);
var _ = (function (){var statearr_176 = state_154;
(statearr_176[(4)] = cljs.core.rest.call(null,(state_154[(4)])));

return statearr_176;
})();
var state_154__$1 = (function (){var statearr_177 = state_154;
(statearr_177[(12)] = inst_148);

return statearr_177;
})();
var statearr_178_212 = state_154__$1;
(statearr_178_212[(2)] = inst_149);

(statearr_178_212[(1)] = (3));


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
});})(c__19__auto__,___192__auto__))
;
return ((function (switch__14__auto__,c__19__auto__,___192__auto__){
return (function() {
var e2e$feepool$state_machine__15__auto__ = null;
var e2e$feepool$state_machine__15__auto____0 = (function (){
var statearr_179 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_179[(0)] = e2e$feepool$state_machine__15__auto__);

(statearr_179[(1)] = (1));

return statearr_179;
});
var e2e$feepool$state_machine__15__auto____1 = (function (state_154){
while(true){
var ret_value__16__auto__ = (function (){try{while(true){
var result__17__auto__ = switch__14__auto__.call(null,state_154);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__17__auto__;
}
break;
}
}catch (e180){var ex__18__auto__ = e180;
var statearr_181_213 = state_154;
(statearr_181_213[(2)] = ex__18__auto__);


if(cljs.core.seq.call(null,(state_154[(4)]))){
var statearr_182_214 = state_154;
(statearr_182_214[(1)] = cljs.core.first.call(null,(state_154[(4)])));

} else {
throw ex__18__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__215 = state_154;
state_154 = G__215;
continue;
} else {
return ret_value__16__auto__;
}
break;
}
});
e2e$feepool$state_machine__15__auto__ = function(state_154){
switch(arguments.length){
case 0:
return e2e$feepool$state_machine__15__auto____0.call(this);
case 1:
return e2e$feepool$state_machine__15__auto____1.call(this,state_154);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
e2e$feepool$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$0 = e2e$feepool$state_machine__15__auto____0;
e2e$feepool$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$1 = e2e$feepool$state_machine__15__auto____1;
return e2e$feepool$state_machine__15__auto__;
})()
;})(switch__14__auto__,c__19__auto__,___192__auto__))
})();
var state__21__auto__ = (function (){var statearr_183 = f__20__auto__.call(null);
(statearr_183[(6)] = c__19__auto__);

return statearr_183;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21__auto__);
});})(c__19__auto__,___192__auto__))
);

return c__19__auto__;
});

e2e.feepool.t_e2e$feepool22.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta23","meta23",(1325520591),null)], null);
});

e2e.feepool.t_e2e$feepool22.cljs$lang$type = true;

e2e.feepool.t_e2e$feepool22.cljs$lang$ctorStr = "e2e.feepool/t_e2e$feepool22";

e2e.feepool.t_e2e$feepool22.cljs$lang$ctorPrWriter = (function (this__9776__auto__,writer__9777__auto__,opt__9778__auto__){
return cljs.core._write.call(null,writer__9777__auto__,"e2e.feepool/t_e2e$feepool22");
});

/**
 * Positional factory function for e2e.feepool/t_e2e$feepool22.
 */
e2e.feepool.__GT_t_e2e$feepool22 = (function e2e$feepool$__GT_t_e2e$feepool22(meta23){
return (new e2e.feepool.t_e2e$feepool22(meta23));
});

}

return (new e2e.feepool.t_e2e$feepool22(null));
}),new cljs.core.Keyword(null,"after","after",(594996914)),(function (){
return null;
})], null)], null);
e2e.feepool.init = (function e2e$feepool$init(){
return cljs.test.test_var.call(null,e2e.feepool.init.cljs$lang$var);
});
e2e.feepool.init.cljs$lang$test = (function (){
if((typeof e2e !== 'undefined') && (typeof e2e.feepool !== 'undefined') && (typeof e2e.feepool.t_e2e$feepool216 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IFn}
*/
e2e.feepool.t_e2e$feepool216 = (function (meta217){
this.meta217 = meta217;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
e2e.feepool.t_e2e$feepool216.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_218,meta217__$1){
var self__ = this;
var _218__$1 = this;
return (new e2e.feepool.t_e2e$feepool216(meta217__$1));
});

e2e.feepool.t_e2e$feepool216.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_218){
var self__ = this;
var _218__$1 = this;
return self__.meta217;
});

e2e.feepool.t_e2e$feepool216.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL;

e2e.feepool.t_e2e$feepool216.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___192__auto__ = self____$1;
var c__19__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19__auto__,___192__auto__,self____$1){
return (function (){
var f__20__auto__ = (function (){var switch__14__auto__ = ((function (c__19__auto__,___192__auto__,self____$1){
return (function (state_447){
var state_val_448 = (state_447[(1)]);
if((state_val_448 === (32))){
var inst_336 = (state_447[(2)]);
var state_447__$1 = state_447;
var statearr_449_920 = state_447__$1;
(statearr_449_920[(2)] = inst_336);

(statearr_449_920[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_448 === (1))){
var state_447__$1 = state_447;
var statearr_450_921 = state_447__$1;
(statearr_450_921[(2)] = null);

(statearr_450_921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_448 === (33))){
var inst_319 = (state_447[(2)]);
var inst_320 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_321 = null;
var inst_322 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can init",inst_321,inst_319];
var inst_323 = cljs.core.PersistentHashMap.fromArrays(inst_320,inst_322);
var inst_324 = cljs.test.do_report.call(null,inst_323);
var state_447__$1 = state_447;
var statearr_452_922 = state_447__$1;
(statearr_452_922[(2)] = inst_324);

(statearr_452_922[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_448 === (2))){
var _ = (function (){var statearr_453 = state_447;
(statearr_453[(4)] = cljs.core.cons.call(null,(5),(state_447[(4)])));

return statearr_453;
})();
var state_447__$1 = state_447;
var statearr_454_923 = state_447__$1;
(statearr_454_923[(2)] = null);

(statearr_454_923[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_448 === (34))){
var _ = (function (){var statearr_456 = state_447;
(statearr_456[(4)] = cljs.core.rest.call(null,(state_447[(4)])));

return statearr_456;
})();
var state_447__$1 = state_447;
var ex451 = (state_447__$1[(2)]);
var statearr_457_924 = state_447__$1;
(statearr_457_924[(5)] = ex451);


var statearr_458_925 = state_447__$1;
(statearr_458_925[(1)] = (33));

(statearr_458_925[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_448 === (3))){
var inst_445 = (state_447[(2)]);
var state_447__$1 = state_447;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_447__$1,inst_445);
} else {
if((state_val_448 === (35))){
var _ = (function (){var statearr_459 = state_447;
(statearr_459[(4)] = cljs.core.rest.call(null,(state_447[(4)])));

return statearr_459;
})();
var state_447__$1 = state_447;
var ex455 = (state_447__$1[(2)]);
var statearr_460_926 = state_447__$1;
(statearr_460_926[(5)] = ex455);


if((ex455 instanceof Error)){
var statearr_461_927 = state_447__$1;
(statearr_461_927[(1)] = (30));

(statearr_461_927[(5)] = null);

} else {
throw ex455;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_448 === (4))){
var inst_220 = (state_447[(2)]);
var inst_221 = cljs.core.prn.call(null,"Error",inst_220);
var state_447__$1 = state_447;
var statearr_463_928 = state_447__$1;
(statearr_463_928[(2)] = inst_221);

(statearr_463_928[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_448 === (36))){
var inst_348 = (state_447[(7)]);
var inst_348__$1 = (state_447[(2)]);
var inst_349 = (inst_348__$1 instanceof cljs.core.ExceptionInfo);
var inst_350 = cljs.core.ex_data.call(null,inst_348__$1);
var inst_351 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_350);
var inst_352 = cljs.core._EQ_.call(null,inst_351,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_353 = ((inst_349) && (inst_352));
var state_447__$1 = (function (){var statearr_464 = state_447;
(statearr_464[(7)] = inst_348__$1);

return statearr_464;
})();
if(cljs.core.truth_(inst_353)){
var statearr_465_929 = state_447__$1;
(statearr_465_929[(1)] = (37));

} else {
var statearr_466_930 = state_447__$1;
(statearr_466_930[(1)] = (38));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_448 === (5))){
var _ = (function (){var statearr_467 = state_447;
(statearr_467[(4)] = cljs.core.rest.call(null,(state_447[(4)])));

return statearr_467;
})();
var state_447__$1 = state_447;
var ex462 = (state_447__$1[(2)]);
var statearr_468_931 = state_447__$1;
(statearr_468_931[(5)] = ex462);


if((ex462 instanceof Error)){
var statearr_469_932 = state_447__$1;
(statearr_469_932[(1)] = (4));

(statearr_469_932[(5)] = null);

} else {
throw ex462;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_448 === (37))){
var inst_348 = (state_447[(7)]);
var inst_355 = (function(){throw inst_348})();
var state_447__$1 = state_447;
var statearr_470_933 = state_447__$1;
(statearr_470_933[(2)] = inst_355);

(statearr_470_933[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_448 === (6))){
var _ = (function (){var statearr_471 = state_447;
(statearr_471[(4)] = cljs.core.cons.call(null,(19),(state_447[(4)])));

return statearr_471;
})();
var inst_273 = [new cljs.core.Keyword(null,"proposal_contract","proposal_contract",(-1026612893))];
var inst_274 = [e2e.feepool.prop_acc];
var inst_275 = cljs.core.PersistentHashMap.fromArrays(inst_273,inst_274);
var inst_276 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_277 = [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),new cljs.core.Keyword(null,"permission","permission",(-511292572))];
var inst_278 = [e2e.feepool.owner_acc,"active"];
var inst_279 = cljs.core.PersistentHashMap.fromArrays(inst_277,inst_278);
var inst_280 = [inst_279];
var inst_281 = (new cljs.core.PersistentVector(null,(1),(5),inst_276,inst_280,null));
var inst_282 = eos_cljs.core.transact.call(null,e2e.feepool.fee_acc,"init",inst_275,inst_281);
var inst_283 = cljs.core.async.interop.p__GT_c.call(null,inst_282);
var state_447__$1 = state_447;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_447__$1,(20),inst_283);
} else {
if((state_val_448 === (38))){
var inst_348 = (state_447[(7)]);
var state_447__$1 = state_447;
var statearr_472_934 = state_447__$1;
(statearr_472_934[(2)] = inst_348);

(statearr_472_934[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_448 === (7))){
var inst_316 = (state_447[(2)]);
var state_447__$1 = (function (){var statearr_473 = state_447;
(statearr_473[(8)] = inst_316);

return statearr_473;
})();
var statearr_474_935 = state_447__$1;
(statearr_474_935[(2)] = null);

(statearr_474_935[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_448 === (39))){
var inst_358 = (state_447[(2)]);
var state_447__$1 = (function (){var statearr_475 = state_447;
(statearr_475[(9)] = inst_358);

return statearr_475;
})();
var statearr_476_936 = state_447__$1;
(statearr_476_936[(2)] = null);

(statearr_476_936[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_448 === (8))){
var inst_229 = (state_447[(10)]);
var inst_231 = (state_447[(11)]);
var inst_227 = (state_447[(2)]);
var inst_228 = inst_227.cause;
var inst_229__$1 = inst_228.message;
var inst_230 = ["missing authority of ",e2e.feepool.fee_acc].join('');
var inst_231__$1 = clojure.string.ends_with_QMARK_.call(null,inst_229__$1,inst_230);
var inst_232 = (!(inst_231__$1));
var state_447__$1 = (function (){var statearr_477 = state_447;
(statearr_477[(10)] = inst_229__$1);

(statearr_477[(11)] = inst_231__$1);

return statearr_477;
})();
if(inst_232){
var statearr_478_937 = state_447__$1;
(statearr_478_937[(1)] = (9));

} else {
var statearr_479_938 = state_447__$1;
(statearr_479_938[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_448 === (40))){
var _ = (function (){var statearr_480 = state_447;
(statearr_480[(4)] = cljs.core.cons.call(null,(43),(state_447[(4)])));

return statearr_480;
})();
var state_447__$1 = state_447;
var statearr_481_939 = state_447__$1;
(statearr_481_939[(1)] = (44));



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_448 === (9))){
var inst_229 = (state_447[(10)]);
var inst_234 = ["missing authority of ",e2e.feepool.fee_acc].join('');
var inst_235 = ["expected =",inst_234," actual = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_229)].join('');
var inst_236 = cljs.core.prn.call(null,inst_235);
var state_447__$1 = state_447;
var statearr_483_940 = state_447__$1;
(statearr_483_940[(2)] = inst_236);

(statearr_483_940[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_448 === (41))){
var inst_386 = (state_447[(2)]);
var _ = (function (){var statearr_484 = state_447;
(statearr_484[(4)] = cljs.core.rest.call(null,(state_447[(4)])));

return statearr_484;
})();
var state_447__$1 = state_447;
var statearr_485_941 = state_447__$1;
(statearr_485_941[(2)] = inst_386);

(statearr_485_941[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_448 === (10))){
var state_447__$1 = state_447;
var statearr_486_942 = state_447__$1;
(statearr_486_942[(2)] = null);

(statearr_486_942[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_448 === (42))){
var inst_359 = (state_447[(2)]);
var inst_360 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_361 = true;
var inst_362 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can init",inst_361,inst_359];
var inst_363 = cljs.core.PersistentHashMap.fromArrays(inst_360,inst_362);
var inst_364 = cljs.test.do_report.call(null,inst_363);
var state_447__$1 = state_447;
var statearr_488_943 = state_447__$1;
(statearr_488_943[(2)] = inst_364);

(statearr_488_943[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_448 === (11))){
var inst_239 = (state_447[(2)]);
var state_447__$1 = (function (){var statearr_489 = state_447;
(statearr_489[(12)] = inst_239);

return statearr_489;
})();
var statearr_490_944 = state_447__$1;
(statearr_490_944[(2)] = null);

(statearr_490_944[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_448 === (43))){
var _ = (function (){var statearr_491 = state_447;
(statearr_491[(4)] = cljs.core.rest.call(null,(state_447[(4)])));

return statearr_491;
})();
var state_447__$1 = state_447;
var ex487 = (state_447__$1[(2)]);
var statearr_492_945 = state_447__$1;
(statearr_492_945[(5)] = ex487);


var statearr_493_946 = state_447__$1;
(statearr_493_946[(1)] = (42));

(statearr_493_946[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_448 === (12))){
var inst_231 = (state_447[(11)]);
var _ = (function (){var statearr_494 = state_447;
(statearr_494[(4)] = cljs.core.cons.call(null,(15),(state_447[(4)])));

return statearr_494;
})();
var state_447__$1 = state_447;
if(cljs.core.truth_(inst_231)){
var statearr_495_947 = state_447__$1;
(statearr_495_947[(1)] = (16));

} else {
var statearr_496_948 = state_447__$1;
(statearr_496_948[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_448 === (44))){
var inst_371 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_372 = true;
var inst_373 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"can init",inst_372,true];
var inst_374 = cljs.core.PersistentHashMap.fromArrays(inst_371,inst_373);
var inst_375 = cljs.test.do_report.call(null,inst_374);
var state_447__$1 = state_447;
var statearr_497_949 = state_447__$1;
(statearr_497_949[(2)] = inst_375);

(statearr_497_949[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_448 === (13))){
var inst_267 = (state_447[(2)]);
var state_447__$1 = state_447;
var statearr_498_950 = state_447__$1;
(statearr_498_950[(2)] = inst_267);

(statearr_498_950[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_448 === (45))){
var inst_377 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_378 = true;
var inst_379 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can init",inst_378,true];
var inst_380 = cljs.core.PersistentHashMap.fromArrays(inst_377,inst_379);
var inst_381 = cljs.test.do_report.call(null,inst_380);
var state_447__$1 = state_447;
var statearr_499_951 = state_447__$1;
(statearr_499_951[(2)] = inst_381);

(statearr_499_951[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_448 === (14))){
var inst_240 = (state_447[(2)]);
var inst_241 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_242 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_243 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"only fee-acc can init",inst_242,inst_240];
var inst_244 = cljs.core.PersistentHashMap.fromArrays(inst_241,inst_243);
var inst_245 = cljs.test.do_report.call(null,inst_244);
var state_447__$1 = state_447;
var statearr_501_952 = state_447__$1;
(statearr_501_952[(2)] = inst_245);

(statearr_501_952[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_448 === (46))){
var inst_383 = (state_447[(2)]);
var _ = (function (){var statearr_502 = state_447;
(statearr_502[(4)] = cljs.core.rest.call(null,(state_447[(4)])));

return statearr_502;
})();
var state_447__$1 = (function (){var statearr_503 = state_447;
(statearr_503[(13)] = inst_383);

return statearr_503;
})();
var statearr_504_953 = state_447__$1;
(statearr_504_953[(2)] = true);

(statearr_504_953[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_448 === (15))){
var _ = (function (){var statearr_505 = state_447;
(statearr_505[(4)] = cljs.core.rest.call(null,(state_447[(4)])));

return statearr_505;
})();
var state_447__$1 = state_447;
var ex500 = (state_447__$1[(2)]);
var statearr_506_954 = state_447__$1;
(statearr_506_954[(5)] = ex500);


var statearr_507_955 = state_447__$1;
(statearr_507_955[(1)] = (14));

(statearr_507_955[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_448 === (47))){
var inst_393 = (state_447[(14)]);
var inst_393__$1 = (state_447[(2)]);
var inst_394 = (inst_393__$1 instanceof cljs.core.ExceptionInfo);
var inst_395 = cljs.core.ex_data.call(null,inst_393__$1);
var inst_396 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_395);
var inst_397 = cljs.core._EQ_.call(null,inst_396,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_398 = ((inst_394) && (inst_397));
var state_447__$1 = (function (){var statearr_508 = state_447;
(statearr_508[(14)] = inst_393__$1);

return statearr_508;
})();
if(cljs.core.truth_(inst_398)){
var statearr_509_956 = state_447__$1;
(statearr_509_956[(1)] = (48));

} else {
var statearr_510_957 = state_447__$1;
(statearr_510_957[(1)] = (49));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_448 === (16))){
var inst_231 = (state_447[(11)]);
var inst_252 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_253 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_254 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"only fee-acc can init",inst_253,inst_231];
var inst_255 = cljs.core.PersistentHashMap.fromArrays(inst_252,inst_254);
var inst_256 = cljs.test.do_report.call(null,inst_255);
var state_447__$1 = state_447;
var statearr_511_958 = state_447__$1;
(statearr_511_958[(2)] = inst_256);

(statearr_511_958[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_448 === (48))){
var inst_393 = (state_447[(14)]);
var inst_400 = (function(){throw inst_393})();
var state_447__$1 = state_447;
var statearr_512_959 = state_447__$1;
(statearr_512_959[(2)] = inst_400);

(statearr_512_959[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_448 === (17))){
var inst_231 = (state_447[(11)]);
var inst_258 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_259 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_260 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"only fee-acc can init",inst_259,inst_231];
var inst_261 = cljs.core.PersistentHashMap.fromArrays(inst_258,inst_260);
var inst_262 = cljs.test.do_report.call(null,inst_261);
var state_447__$1 = state_447;
var statearr_513_960 = state_447__$1;
(statearr_513_960[(2)] = inst_262);

(statearr_513_960[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_448 === (49))){
var inst_393 = (state_447[(14)]);
var state_447__$1 = state_447;
var statearr_514_961 = state_447__$1;
(statearr_514_961[(2)] = inst_393);

(statearr_514_961[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_448 === (18))){
var inst_231 = (state_447[(11)]);
var inst_264 = (state_447[(2)]);
var _ = (function (){var statearr_516 = state_447;
(statearr_516[(4)] = cljs.core.rest.call(null,(state_447[(4)])));

return statearr_516;
})();
var state_447__$1 = (function (){var statearr_517 = state_447;
(statearr_517[(15)] = inst_264);

return statearr_517;
})();
var statearr_518_962 = state_447__$1;
(statearr_518_962[(2)] = inst_231);

(statearr_518_962[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_448 === (50))){
var inst_403 = (state_447[(2)]);
var state_447__$1 = (function (){var statearr_519 = state_447;
(statearr_519[(16)] = inst_403);

return statearr_519;
})();
var statearr_520_963 = state_447__$1;
(statearr_520_963[(2)] = null);

(statearr_520_963[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_448 === (19))){
var _ = (function (){var statearr_521 = state_447;
(statearr_521[(4)] = cljs.core.rest.call(null,(state_447[(4)])));

return statearr_521;
})();
var state_447__$1 = state_447;
var ex515 = (state_447__$1[(2)]);
var statearr_522_964 = state_447__$1;
(statearr_522_964[(5)] = ex515);


if((ex515 instanceof Error)){
var statearr_523_965 = state_447__$1;
(statearr_523_965[(1)] = (8));

(statearr_523_965[(5)] = null);

} else {
throw ex515;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_448 === (51))){
var inst_403 = (state_447[(16)]);
var inst_417 = (state_447[(17)]);
var inst_418 = (state_447[(18)]);
var _ = (function (){var statearr_524 = state_447;
(statearr_524[(4)] = cljs.core.cons.call(null,(54),(state_447[(4)])));

return statearr_524;
})();
var inst_415 = cljs.core.count.call(null,inst_403);
var inst_416 = (new cljs.core.List(null,(1),null,(1),null));
var inst_417__$1 = (new cljs.core.List(null,inst_415,inst_416,(2),null));
var inst_418__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_417__$1);
var state_447__$1 = (function (){var statearr_525 = state_447;
(statearr_525[(17)] = inst_417__$1);

(statearr_525[(18)] = inst_418__$1);

return statearr_525;
})();
if(cljs.core.truth_(inst_418__$1)){
var statearr_526_966 = state_447__$1;
(statearr_526_966[(1)] = (55));

} else {
var statearr_527_967 = state_447__$1;
(statearr_527_967[(1)] = (56));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_448 === (20))){
var inst_285 = (state_447[(19)]);
var inst_285__$1 = (state_447[(2)]);
var inst_286 = (inst_285__$1 instanceof cljs.core.ExceptionInfo);
var inst_287 = cljs.core.ex_data.call(null,inst_285__$1);
var inst_288 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_287);
var inst_289 = cljs.core._EQ_.call(null,inst_288,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_290 = ((inst_286) && (inst_289));
var state_447__$1 = (function (){var statearr_528 = state_447;
(statearr_528[(19)] = inst_285__$1);

return statearr_528;
})();
if(cljs.core.truth_(inst_290)){
var statearr_529_968 = state_447__$1;
(statearr_529_968[(1)] = (21));

} else {
var statearr_530_969 = state_447__$1;
(statearr_530_969[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_448 === (52))){
var inst_441 = (state_447[(2)]);
var inst_442 = done.call(null);
var _ = (function (){var statearr_531 = state_447;
(statearr_531[(4)] = cljs.core.rest.call(null,(state_447[(4)])));

return statearr_531;
})();
var state_447__$1 = (function (){var statearr_532 = state_447;
(statearr_532[(20)] = inst_441);

return statearr_532;
})();
var statearr_533_970 = state_447__$1;
(statearr_533_970[(2)] = inst_442);

(statearr_533_970[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_448 === (21))){
var inst_285 = (state_447[(19)]);
var inst_292 = (function(){throw inst_285})();
var state_447__$1 = state_447;
var statearr_534_971 = state_447__$1;
(statearr_534_971[(2)] = inst_292);

(statearr_534_971[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_448 === (53))){
var inst_404 = (state_447[(2)]);
var inst_405 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_406 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"count","count",(-514511684),null),new cljs.core.Symbol(null,"rows","rows",(-1804386089),null)),(1));
var inst_407 = [new cljs.core.Keyword(null,"error","error",(-978969032)),null,inst_406,inst_404];
var inst_408 = cljs.core.PersistentHashMap.fromArrays(inst_405,inst_407);
var inst_409 = cljs.test.do_report.call(null,inst_408);
var state_447__$1 = state_447;
var statearr_536_972 = state_447__$1;
(statearr_536_972[(2)] = inst_409);

(statearr_536_972[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_448 === (22))){
var inst_285 = (state_447[(19)]);
var state_447__$1 = state_447;
var statearr_537_973 = state_447__$1;
(statearr_537_973[(2)] = inst_285);

(statearr_537_973[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_448 === (54))){
var _ = (function (){var statearr_538 = state_447;
(statearr_538[(4)] = cljs.core.rest.call(null,(state_447[(4)])));

return statearr_538;
})();
var state_447__$1 = state_447;
var ex535 = (state_447__$1[(2)]);
var statearr_539_974 = state_447__$1;
(statearr_539_974[(5)] = ex535);


var statearr_540_975 = state_447__$1;
(statearr_540_975[(1)] = (53));

(statearr_540_975[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_448 === (23))){
var inst_295 = (state_447[(2)]);
var state_447__$1 = (function (){var statearr_541 = state_447;
(statearr_541[(21)] = inst_295);

return statearr_541;
})();
var statearr_542_976 = state_447__$1;
(statearr_542_976[(2)] = null);

(statearr_542_976[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_448 === (55))){
var inst_417 = (state_447[(17)]);
var inst_420 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_421 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"count","count",(-514511684),null),new cljs.core.Symbol(null,"rows","rows",(-1804386089),null)),(1));
var inst_422 = cljs.core.cons.call(null,cljs.core._EQ_,inst_417);
var inst_423 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),null,inst_421,inst_422];
var inst_424 = cljs.core.PersistentHashMap.fromArrays(inst_420,inst_423);
var inst_425 = cljs.test.do_report.call(null,inst_424);
var state_447__$1 = state_447;
var statearr_543_977 = state_447__$1;
(statearr_543_977[(2)] = inst_425);

(statearr_543_977[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_448 === (24))){
var _ = (function (){var statearr_544 = state_447;
(statearr_544[(4)] = cljs.core.cons.call(null,(27),(state_447[(4)])));

return statearr_544;
})();
var inst_307 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_308 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"only fee-acc can init"];
var inst_309 = cljs.core.PersistentHashMap.fromArrays(inst_307,inst_308);
var inst_310 = cljs.test.do_report.call(null,inst_309);
var ___$1 = (function (){var statearr_545 = state_447;
(statearr_545[(4)] = cljs.core.rest.call(null,(state_447[(4)])));

return statearr_545;
})();
var state_447__$1 = state_447;
var statearr_546_978 = state_447__$1;
(statearr_546_978[(2)] = inst_310);

(statearr_546_978[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_448 === (56))){
var inst_417 = (state_447[(17)]);
var inst_427 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_428 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"count","count",(-514511684),null),new cljs.core.Symbol(null,"rows","rows",(-1804386089),null)),(1));
var inst_429 = new cljs.core.Symbol(null,"not","not",(1044554643),null);
var inst_430 = new cljs.core.Symbol(null,"=","=",(-1501502141),null);
var inst_431 = cljs.core.cons.call(null,inst_430,inst_417);
var inst_432 = (new cljs.core.List(null,inst_431,null,(1),null));
var inst_433 = (new cljs.core.List(null,inst_429,inst_432,(2),null));
var inst_434 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),null,inst_428,inst_433];
var inst_435 = cljs.core.PersistentHashMap.fromArrays(inst_427,inst_434);
var inst_436 = cljs.test.do_report.call(null,inst_435);
var state_447__$1 = state_447;
var statearr_547_979 = state_447__$1;
(statearr_547_979[(2)] = inst_436);

(statearr_547_979[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_448 === (25))){
var inst_313 = (state_447[(2)]);
var _ = (function (){var statearr_548 = state_447;
(statearr_548[(4)] = cljs.core.rest.call(null,(state_447[(4)])));

return statearr_548;
})();
var state_447__$1 = state_447;
var statearr_549_980 = state_447__$1;
(statearr_549_980[(2)] = inst_313);

(statearr_549_980[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_448 === (57))){
var inst_418 = (state_447[(18)]);
var inst_438 = (state_447[(2)]);
var _ = (function (){var statearr_551 = state_447;
(statearr_551[(4)] = cljs.core.rest.call(null,(state_447[(4)])));

return statearr_551;
})();
var state_447__$1 = (function (){var statearr_552 = state_447;
(statearr_552[(22)] = inst_438);

return statearr_552;
})();
var statearr_553_981 = state_447__$1;
(statearr_553_981[(2)] = inst_418);

(statearr_553_981[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_448 === (26))){
var inst_296 = (state_447[(2)]);
var inst_297 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_298 = null;
var inst_299 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"only fee-acc can init",inst_298,inst_296];
var inst_300 = cljs.core.PersistentHashMap.fromArrays(inst_297,inst_299);
var inst_301 = cljs.test.do_report.call(null,inst_300);
var state_447__$1 = state_447;
var statearr_554_982 = state_447__$1;
(statearr_554_982[(2)] = inst_301);

(statearr_554_982[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_448 === (27))){
var _ = (function (){var statearr_555 = state_447;
(statearr_555[(4)] = cljs.core.rest.call(null,(state_447[(4)])));

return statearr_555;
})();
var state_447__$1 = state_447;
var ex550 = (state_447__$1[(2)]);
var statearr_556_983 = state_447__$1;
(statearr_556_983[(5)] = ex550);


var statearr_557_984 = state_447__$1;
(statearr_557_984[(1)] = (26));

(statearr_557_984[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_448 === (28))){
var _ = (function (){var statearr_558 = state_447;
(statearr_558[(4)] = cljs.core.cons.call(null,(35),(state_447[(4)])));

return statearr_558;
})();
var inst_342 = [new cljs.core.Keyword(null,"proposal_contract","proposal_contract",(-1026612893))];
var inst_343 = [e2e.feepool.prop_acc];
var inst_344 = cljs.core.PersistentHashMap.fromArrays(inst_342,inst_343);
var inst_345 = eos_cljs.core.transact.call(null,e2e.feepool.fee_acc,"init",inst_344);
var inst_346 = cljs.core.async.interop.p__GT_c.call(null,inst_345);
var state_447__$1 = state_447;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_447__$1,(36),inst_346);
} else {
if((state_val_448 === (29))){
var inst_389 = (state_447[(2)]);
var inst_390 = eos_cljs.core.get_table_rows.call(null,e2e.feepool.fee_acc,e2e.feepool.fee_acc,"config");
var inst_391 = cljs.core.async.interop.p__GT_c.call(null,inst_390);
var state_447__$1 = (function (){var statearr_559 = state_447;
(statearr_559[(23)] = inst_389);

return statearr_559;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_447__$1,(47),inst_391);
} else {
if((state_val_448 === (30))){
var inst_317 = (state_447[(2)]);
var inst_318 = cljs.core.prn.call(null,"test failed with ",inst_317);
var state_447__$1 = (function (){var statearr_560 = state_447;
(statearr_560[(24)] = inst_318);

return statearr_560;
})();
var statearr_561_985 = state_447__$1;
(statearr_561_985[(2)] = null);

(statearr_561_985[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_448 === (31))){
var _ = (function (){var statearr_562 = state_447;
(statearr_562[(4)] = cljs.core.cons.call(null,(34),(state_447[(4)])));

return statearr_562;
})();
var inst_330 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_331 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can init"];
var inst_332 = cljs.core.PersistentHashMap.fromArrays(inst_330,inst_331);
var inst_333 = cljs.test.do_report.call(null,inst_332);
var ___$1 = (function (){var statearr_563 = state_447;
(statearr_563[(4)] = cljs.core.rest.call(null,(state_447[(4)])));

return statearr_563;
})();
var state_447__$1 = state_447;
var statearr_564_986 = state_447__$1;
(statearr_564_986[(2)] = inst_333);

(statearr_564_986[(1)] = (32));


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
});})(c__19__auto__,___192__auto__,self____$1))
;
return ((function (switch__14__auto__,c__19__auto__,___192__auto__,self____$1){
return (function() {
var e2e$feepool$state_machine__15__auto__ = null;
var e2e$feepool$state_machine__15__auto____0 = (function (){
var statearr_565 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_565[(0)] = e2e$feepool$state_machine__15__auto__);

(statearr_565[(1)] = (1));

return statearr_565;
});
var e2e$feepool$state_machine__15__auto____1 = (function (state_447){
while(true){
var ret_value__16__auto__ = (function (){try{while(true){
var result__17__auto__ = switch__14__auto__.call(null,state_447);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__17__auto__;
}
break;
}
}catch (e566){var ex__18__auto__ = e566;
var statearr_567_987 = state_447;
(statearr_567_987[(2)] = ex__18__auto__);


if(cljs.core.seq.call(null,(state_447[(4)]))){
var statearr_568_988 = state_447;
(statearr_568_988[(1)] = cljs.core.first.call(null,(state_447[(4)])));

} else {
throw ex__18__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__989 = state_447;
state_447 = G__989;
continue;
} else {
return ret_value__16__auto__;
}
break;
}
});
e2e$feepool$state_machine__15__auto__ = function(state_447){
switch(arguments.length){
case 0:
return e2e$feepool$state_machine__15__auto____0.call(this);
case 1:
return e2e$feepool$state_machine__15__auto____1.call(this,state_447);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
e2e$feepool$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$0 = e2e$feepool$state_machine__15__auto____0;
e2e$feepool$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$1 = e2e$feepool$state_machine__15__auto____1;
return e2e$feepool$state_machine__15__auto__;
})()
;})(switch__14__auto__,c__19__auto__,___192__auto__,self____$1))
})();
var state__21__auto__ = (function (){var statearr_569 = f__20__auto__.call(null);
(statearr_569[(6)] = c__19__auto__);

return statearr_569;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21__auto__);
});})(c__19__auto__,___192__auto__,self____$1))
);

return c__19__auto__;
});

e2e.feepool.t_e2e$feepool216.prototype.apply = (function (self__,args219){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args219)));
});

e2e.feepool.t_e2e$feepool216.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___192__auto__ = this;
var c__19__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19__auto__,___192__auto__){
return (function (){
var f__20__auto__ = (function (){var switch__14__auto__ = ((function (c__19__auto__,___192__auto__){
return (function (state_797){
var state_val_798 = (state_797[(1)]);
if((state_val_798 === (32))){
var inst_686 = (state_797[(2)]);
var state_797__$1 = state_797;
var statearr_799_990 = state_797__$1;
(statearr_799_990[(2)] = inst_686);

(statearr_799_990[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_798 === (1))){
var state_797__$1 = state_797;
var statearr_800_991 = state_797__$1;
(statearr_800_991[(2)] = null);

(statearr_800_991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_798 === (33))){
var inst_669 = (state_797[(2)]);
var inst_670 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_671 = null;
var inst_672 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can init",inst_671,inst_669];
var inst_673 = cljs.core.PersistentHashMap.fromArrays(inst_670,inst_672);
var inst_674 = cljs.test.do_report.call(null,inst_673);
var state_797__$1 = state_797;
var statearr_802_992 = state_797__$1;
(statearr_802_992[(2)] = inst_674);

(statearr_802_992[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_798 === (2))){
var _ = (function (){var statearr_803 = state_797;
(statearr_803[(4)] = cljs.core.cons.call(null,(5),(state_797[(4)])));

return statearr_803;
})();
var state_797__$1 = state_797;
var statearr_804_993 = state_797__$1;
(statearr_804_993[(2)] = null);

(statearr_804_993[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_798 === (34))){
var _ = (function (){var statearr_806 = state_797;
(statearr_806[(4)] = cljs.core.rest.call(null,(state_797[(4)])));

return statearr_806;
})();
var state_797__$1 = state_797;
var ex801 = (state_797__$1[(2)]);
var statearr_807_994 = state_797__$1;
(statearr_807_994[(5)] = ex801);


var statearr_808_995 = state_797__$1;
(statearr_808_995[(1)] = (33));

(statearr_808_995[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_798 === (3))){
var inst_795 = (state_797[(2)]);
var state_797__$1 = state_797;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_797__$1,inst_795);
} else {
if((state_val_798 === (35))){
var _ = (function (){var statearr_809 = state_797;
(statearr_809[(4)] = cljs.core.rest.call(null,(state_797[(4)])));

return statearr_809;
})();
var state_797__$1 = state_797;
var ex805 = (state_797__$1[(2)]);
var statearr_810_996 = state_797__$1;
(statearr_810_996[(5)] = ex805);


if((ex805 instanceof Error)){
var statearr_811_997 = state_797__$1;
(statearr_811_997[(1)] = (30));

(statearr_811_997[(5)] = null);

} else {
throw ex805;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_798 === (4))){
var inst_570 = (state_797[(2)]);
var inst_571 = cljs.core.prn.call(null,"Error",inst_570);
var state_797__$1 = state_797;
var statearr_813_998 = state_797__$1;
(statearr_813_998[(2)] = inst_571);

(statearr_813_998[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_798 === (36))){
var inst_698 = (state_797[(7)]);
var inst_698__$1 = (state_797[(2)]);
var inst_699 = (inst_698__$1 instanceof cljs.core.ExceptionInfo);
var inst_700 = cljs.core.ex_data.call(null,inst_698__$1);
var inst_701 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_700);
var inst_702 = cljs.core._EQ_.call(null,inst_701,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_703 = ((inst_699) && (inst_702));
var state_797__$1 = (function (){var statearr_814 = state_797;
(statearr_814[(7)] = inst_698__$1);

return statearr_814;
})();
if(cljs.core.truth_(inst_703)){
var statearr_815_999 = state_797__$1;
(statearr_815_999[(1)] = (37));

} else {
var statearr_816_1000 = state_797__$1;
(statearr_816_1000[(1)] = (38));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_798 === (5))){
var _ = (function (){var statearr_817 = state_797;
(statearr_817[(4)] = cljs.core.rest.call(null,(state_797[(4)])));

return statearr_817;
})();
var state_797__$1 = state_797;
var ex812 = (state_797__$1[(2)]);
var statearr_818_1001 = state_797__$1;
(statearr_818_1001[(5)] = ex812);


if((ex812 instanceof Error)){
var statearr_819_1002 = state_797__$1;
(statearr_819_1002[(1)] = (4));

(statearr_819_1002[(5)] = null);

} else {
throw ex812;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_798 === (37))){
var inst_698 = (state_797[(7)]);
var inst_705 = (function(){throw inst_698})();
var state_797__$1 = state_797;
var statearr_820_1003 = state_797__$1;
(statearr_820_1003[(2)] = inst_705);

(statearr_820_1003[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_798 === (6))){
var _ = (function (){var statearr_821 = state_797;
(statearr_821[(4)] = cljs.core.cons.call(null,(19),(state_797[(4)])));

return statearr_821;
})();
var inst_623 = [new cljs.core.Keyword(null,"proposal_contract","proposal_contract",(-1026612893))];
var inst_624 = [e2e.feepool.prop_acc];
var inst_625 = cljs.core.PersistentHashMap.fromArrays(inst_623,inst_624);
var inst_626 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_627 = [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),new cljs.core.Keyword(null,"permission","permission",(-511292572))];
var inst_628 = [e2e.feepool.owner_acc,"active"];
var inst_629 = cljs.core.PersistentHashMap.fromArrays(inst_627,inst_628);
var inst_630 = [inst_629];
var inst_631 = (new cljs.core.PersistentVector(null,(1),(5),inst_626,inst_630,null));
var inst_632 = eos_cljs.core.transact.call(null,e2e.feepool.fee_acc,"init",inst_625,inst_631);
var inst_633 = cljs.core.async.interop.p__GT_c.call(null,inst_632);
var state_797__$1 = state_797;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_797__$1,(20),inst_633);
} else {
if((state_val_798 === (38))){
var inst_698 = (state_797[(7)]);
var state_797__$1 = state_797;
var statearr_822_1004 = state_797__$1;
(statearr_822_1004[(2)] = inst_698);

(statearr_822_1004[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_798 === (7))){
var inst_666 = (state_797[(2)]);
var state_797__$1 = (function (){var statearr_823 = state_797;
(statearr_823[(8)] = inst_666);

return statearr_823;
})();
var statearr_824_1005 = state_797__$1;
(statearr_824_1005[(2)] = null);

(statearr_824_1005[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_798 === (39))){
var inst_708 = (state_797[(2)]);
var state_797__$1 = (function (){var statearr_825 = state_797;
(statearr_825[(9)] = inst_708);

return statearr_825;
})();
var statearr_826_1006 = state_797__$1;
(statearr_826_1006[(2)] = null);

(statearr_826_1006[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_798 === (8))){
var inst_579 = (state_797[(10)]);
var inst_581 = (state_797[(11)]);
var inst_577 = (state_797[(2)]);
var inst_578 = inst_577.cause;
var inst_579__$1 = inst_578.message;
var inst_580 = ["missing authority of ",e2e.feepool.fee_acc].join('');
var inst_581__$1 = clojure.string.ends_with_QMARK_.call(null,inst_579__$1,inst_580);
var inst_582 = (!(inst_581__$1));
var state_797__$1 = (function (){var statearr_827 = state_797;
(statearr_827[(10)] = inst_579__$1);

(statearr_827[(11)] = inst_581__$1);

return statearr_827;
})();
if(inst_582){
var statearr_828_1007 = state_797__$1;
(statearr_828_1007[(1)] = (9));

} else {
var statearr_829_1008 = state_797__$1;
(statearr_829_1008[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_798 === (40))){
var _ = (function (){var statearr_830 = state_797;
(statearr_830[(4)] = cljs.core.cons.call(null,(43),(state_797[(4)])));

return statearr_830;
})();
var state_797__$1 = state_797;
var statearr_831_1009 = state_797__$1;
(statearr_831_1009[(1)] = (44));



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_798 === (9))){
var inst_579 = (state_797[(10)]);
var inst_584 = ["missing authority of ",e2e.feepool.fee_acc].join('');
var inst_585 = ["expected =",inst_584," actual = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_579)].join('');
var inst_586 = cljs.core.prn.call(null,inst_585);
var state_797__$1 = state_797;
var statearr_833_1010 = state_797__$1;
(statearr_833_1010[(2)] = inst_586);

(statearr_833_1010[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_798 === (41))){
var inst_736 = (state_797[(2)]);
var _ = (function (){var statearr_834 = state_797;
(statearr_834[(4)] = cljs.core.rest.call(null,(state_797[(4)])));

return statearr_834;
})();
var state_797__$1 = state_797;
var statearr_835_1011 = state_797__$1;
(statearr_835_1011[(2)] = inst_736);

(statearr_835_1011[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_798 === (10))){
var state_797__$1 = state_797;
var statearr_836_1012 = state_797__$1;
(statearr_836_1012[(2)] = null);

(statearr_836_1012[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_798 === (42))){
var inst_709 = (state_797[(2)]);
var inst_710 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_711 = true;
var inst_712 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can init",inst_711,inst_709];
var inst_713 = cljs.core.PersistentHashMap.fromArrays(inst_710,inst_712);
var inst_714 = cljs.test.do_report.call(null,inst_713);
var state_797__$1 = state_797;
var statearr_838_1013 = state_797__$1;
(statearr_838_1013[(2)] = inst_714);

(statearr_838_1013[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_798 === (11))){
var inst_589 = (state_797[(2)]);
var state_797__$1 = (function (){var statearr_839 = state_797;
(statearr_839[(12)] = inst_589);

return statearr_839;
})();
var statearr_840_1014 = state_797__$1;
(statearr_840_1014[(2)] = null);

(statearr_840_1014[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_798 === (43))){
var _ = (function (){var statearr_841 = state_797;
(statearr_841[(4)] = cljs.core.rest.call(null,(state_797[(4)])));

return statearr_841;
})();
var state_797__$1 = state_797;
var ex837 = (state_797__$1[(2)]);
var statearr_842_1015 = state_797__$1;
(statearr_842_1015[(5)] = ex837);


var statearr_843_1016 = state_797__$1;
(statearr_843_1016[(1)] = (42));

(statearr_843_1016[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_798 === (12))){
var inst_581 = (state_797[(11)]);
var _ = (function (){var statearr_844 = state_797;
(statearr_844[(4)] = cljs.core.cons.call(null,(15),(state_797[(4)])));

return statearr_844;
})();
var state_797__$1 = state_797;
if(cljs.core.truth_(inst_581)){
var statearr_845_1017 = state_797__$1;
(statearr_845_1017[(1)] = (16));

} else {
var statearr_846_1018 = state_797__$1;
(statearr_846_1018[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_798 === (44))){
var inst_721 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_722 = true;
var inst_723 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"can init",inst_722,true];
var inst_724 = cljs.core.PersistentHashMap.fromArrays(inst_721,inst_723);
var inst_725 = cljs.test.do_report.call(null,inst_724);
var state_797__$1 = state_797;
var statearr_847_1019 = state_797__$1;
(statearr_847_1019[(2)] = inst_725);

(statearr_847_1019[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_798 === (13))){
var inst_617 = (state_797[(2)]);
var state_797__$1 = state_797;
var statearr_848_1020 = state_797__$1;
(statearr_848_1020[(2)] = inst_617);

(statearr_848_1020[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_798 === (45))){
var inst_727 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_728 = true;
var inst_729 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can init",inst_728,true];
var inst_730 = cljs.core.PersistentHashMap.fromArrays(inst_727,inst_729);
var inst_731 = cljs.test.do_report.call(null,inst_730);
var state_797__$1 = state_797;
var statearr_849_1021 = state_797__$1;
(statearr_849_1021[(2)] = inst_731);

(statearr_849_1021[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_798 === (14))){
var inst_590 = (state_797[(2)]);
var inst_591 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_592 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_593 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"only fee-acc can init",inst_592,inst_590];
var inst_594 = cljs.core.PersistentHashMap.fromArrays(inst_591,inst_593);
var inst_595 = cljs.test.do_report.call(null,inst_594);
var state_797__$1 = state_797;
var statearr_851_1022 = state_797__$1;
(statearr_851_1022[(2)] = inst_595);

(statearr_851_1022[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_798 === (46))){
var inst_733 = (state_797[(2)]);
var _ = (function (){var statearr_852 = state_797;
(statearr_852[(4)] = cljs.core.rest.call(null,(state_797[(4)])));

return statearr_852;
})();
var state_797__$1 = (function (){var statearr_853 = state_797;
(statearr_853[(13)] = inst_733);

return statearr_853;
})();
var statearr_854_1023 = state_797__$1;
(statearr_854_1023[(2)] = true);

(statearr_854_1023[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_798 === (15))){
var _ = (function (){var statearr_855 = state_797;
(statearr_855[(4)] = cljs.core.rest.call(null,(state_797[(4)])));

return statearr_855;
})();
var state_797__$1 = state_797;
var ex850 = (state_797__$1[(2)]);
var statearr_856_1024 = state_797__$1;
(statearr_856_1024[(5)] = ex850);


var statearr_857_1025 = state_797__$1;
(statearr_857_1025[(1)] = (14));

(statearr_857_1025[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_798 === (47))){
var inst_743 = (state_797[(14)]);
var inst_743__$1 = (state_797[(2)]);
var inst_744 = (inst_743__$1 instanceof cljs.core.ExceptionInfo);
var inst_745 = cljs.core.ex_data.call(null,inst_743__$1);
var inst_746 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_745);
var inst_747 = cljs.core._EQ_.call(null,inst_746,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_748 = ((inst_744) && (inst_747));
var state_797__$1 = (function (){var statearr_858 = state_797;
(statearr_858[(14)] = inst_743__$1);

return statearr_858;
})();
if(cljs.core.truth_(inst_748)){
var statearr_859_1026 = state_797__$1;
(statearr_859_1026[(1)] = (48));

} else {
var statearr_860_1027 = state_797__$1;
(statearr_860_1027[(1)] = (49));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_798 === (16))){
var inst_581 = (state_797[(11)]);
var inst_602 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_603 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_604 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"only fee-acc can init",inst_603,inst_581];
var inst_605 = cljs.core.PersistentHashMap.fromArrays(inst_602,inst_604);
var inst_606 = cljs.test.do_report.call(null,inst_605);
var state_797__$1 = state_797;
var statearr_861_1028 = state_797__$1;
(statearr_861_1028[(2)] = inst_606);

(statearr_861_1028[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_798 === (48))){
var inst_743 = (state_797[(14)]);
var inst_750 = (function(){throw inst_743})();
var state_797__$1 = state_797;
var statearr_862_1029 = state_797__$1;
(statearr_862_1029[(2)] = inst_750);

(statearr_862_1029[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_798 === (17))){
var inst_581 = (state_797[(11)]);
var inst_608 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_609 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_610 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"only fee-acc can init",inst_609,inst_581];
var inst_611 = cljs.core.PersistentHashMap.fromArrays(inst_608,inst_610);
var inst_612 = cljs.test.do_report.call(null,inst_611);
var state_797__$1 = state_797;
var statearr_863_1030 = state_797__$1;
(statearr_863_1030[(2)] = inst_612);

(statearr_863_1030[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_798 === (49))){
var inst_743 = (state_797[(14)]);
var state_797__$1 = state_797;
var statearr_864_1031 = state_797__$1;
(statearr_864_1031[(2)] = inst_743);

(statearr_864_1031[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_798 === (18))){
var inst_581 = (state_797[(11)]);
var inst_614 = (state_797[(2)]);
var _ = (function (){var statearr_866 = state_797;
(statearr_866[(4)] = cljs.core.rest.call(null,(state_797[(4)])));

return statearr_866;
})();
var state_797__$1 = (function (){var statearr_867 = state_797;
(statearr_867[(15)] = inst_614);

return statearr_867;
})();
var statearr_868_1032 = state_797__$1;
(statearr_868_1032[(2)] = inst_581);

(statearr_868_1032[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_798 === (50))){
var inst_753 = (state_797[(2)]);
var state_797__$1 = (function (){var statearr_869 = state_797;
(statearr_869[(16)] = inst_753);

return statearr_869;
})();
var statearr_870_1033 = state_797__$1;
(statearr_870_1033[(2)] = null);

(statearr_870_1033[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_798 === (19))){
var _ = (function (){var statearr_871 = state_797;
(statearr_871[(4)] = cljs.core.rest.call(null,(state_797[(4)])));

return statearr_871;
})();
var state_797__$1 = state_797;
var ex865 = (state_797__$1[(2)]);
var statearr_872_1034 = state_797__$1;
(statearr_872_1034[(5)] = ex865);


if((ex865 instanceof Error)){
var statearr_873_1035 = state_797__$1;
(statearr_873_1035[(1)] = (8));

(statearr_873_1035[(5)] = null);

} else {
throw ex865;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_798 === (51))){
var inst_753 = (state_797[(16)]);
var inst_767 = (state_797[(17)]);
var inst_768 = (state_797[(18)]);
var _ = (function (){var statearr_874 = state_797;
(statearr_874[(4)] = cljs.core.cons.call(null,(54),(state_797[(4)])));

return statearr_874;
})();
var inst_765 = cljs.core.count.call(null,inst_753);
var inst_766 = (new cljs.core.List(null,(1),null,(1),null));
var inst_767__$1 = (new cljs.core.List(null,inst_765,inst_766,(2),null));
var inst_768__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_767__$1);
var state_797__$1 = (function (){var statearr_875 = state_797;
(statearr_875[(17)] = inst_767__$1);

(statearr_875[(18)] = inst_768__$1);

return statearr_875;
})();
if(cljs.core.truth_(inst_768__$1)){
var statearr_876_1036 = state_797__$1;
(statearr_876_1036[(1)] = (55));

} else {
var statearr_877_1037 = state_797__$1;
(statearr_877_1037[(1)] = (56));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_798 === (20))){
var inst_635 = (state_797[(19)]);
var inst_635__$1 = (state_797[(2)]);
var inst_636 = (inst_635__$1 instanceof cljs.core.ExceptionInfo);
var inst_637 = cljs.core.ex_data.call(null,inst_635__$1);
var inst_638 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_637);
var inst_639 = cljs.core._EQ_.call(null,inst_638,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_640 = ((inst_636) && (inst_639));
var state_797__$1 = (function (){var statearr_878 = state_797;
(statearr_878[(19)] = inst_635__$1);

return statearr_878;
})();
if(cljs.core.truth_(inst_640)){
var statearr_879_1038 = state_797__$1;
(statearr_879_1038[(1)] = (21));

} else {
var statearr_880_1039 = state_797__$1;
(statearr_880_1039[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_798 === (52))){
var inst_791 = (state_797[(2)]);
var inst_792 = done.call(null);
var _ = (function (){var statearr_881 = state_797;
(statearr_881[(4)] = cljs.core.rest.call(null,(state_797[(4)])));

return statearr_881;
})();
var state_797__$1 = (function (){var statearr_882 = state_797;
(statearr_882[(20)] = inst_791);

return statearr_882;
})();
var statearr_883_1040 = state_797__$1;
(statearr_883_1040[(2)] = inst_792);

(statearr_883_1040[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_798 === (21))){
var inst_635 = (state_797[(19)]);
var inst_642 = (function(){throw inst_635})();
var state_797__$1 = state_797;
var statearr_884_1041 = state_797__$1;
(statearr_884_1041[(2)] = inst_642);

(statearr_884_1041[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_798 === (53))){
var inst_754 = (state_797[(2)]);
var inst_755 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_756 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"count","count",(-514511684),null),new cljs.core.Symbol(null,"rows","rows",(-1804386089),null)),(1));
var inst_757 = [new cljs.core.Keyword(null,"error","error",(-978969032)),null,inst_756,inst_754];
var inst_758 = cljs.core.PersistentHashMap.fromArrays(inst_755,inst_757);
var inst_759 = cljs.test.do_report.call(null,inst_758);
var state_797__$1 = state_797;
var statearr_886_1042 = state_797__$1;
(statearr_886_1042[(2)] = inst_759);

(statearr_886_1042[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_798 === (22))){
var inst_635 = (state_797[(19)]);
var state_797__$1 = state_797;
var statearr_887_1043 = state_797__$1;
(statearr_887_1043[(2)] = inst_635);

(statearr_887_1043[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_798 === (54))){
var _ = (function (){var statearr_888 = state_797;
(statearr_888[(4)] = cljs.core.rest.call(null,(state_797[(4)])));

return statearr_888;
})();
var state_797__$1 = state_797;
var ex885 = (state_797__$1[(2)]);
var statearr_889_1044 = state_797__$1;
(statearr_889_1044[(5)] = ex885);


var statearr_890_1045 = state_797__$1;
(statearr_890_1045[(1)] = (53));

(statearr_890_1045[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_798 === (23))){
var inst_645 = (state_797[(2)]);
var state_797__$1 = (function (){var statearr_891 = state_797;
(statearr_891[(21)] = inst_645);

return statearr_891;
})();
var statearr_892_1046 = state_797__$1;
(statearr_892_1046[(2)] = null);

(statearr_892_1046[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_798 === (55))){
var inst_767 = (state_797[(17)]);
var inst_770 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_771 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"count","count",(-514511684),null),new cljs.core.Symbol(null,"rows","rows",(-1804386089),null)),(1));
var inst_772 = cljs.core.cons.call(null,cljs.core._EQ_,inst_767);
var inst_773 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),null,inst_771,inst_772];
var inst_774 = cljs.core.PersistentHashMap.fromArrays(inst_770,inst_773);
var inst_775 = cljs.test.do_report.call(null,inst_774);
var state_797__$1 = state_797;
var statearr_893_1047 = state_797__$1;
(statearr_893_1047[(2)] = inst_775);

(statearr_893_1047[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_798 === (24))){
var _ = (function (){var statearr_894 = state_797;
(statearr_894[(4)] = cljs.core.cons.call(null,(27),(state_797[(4)])));

return statearr_894;
})();
var inst_657 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_658 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"only fee-acc can init"];
var inst_659 = cljs.core.PersistentHashMap.fromArrays(inst_657,inst_658);
var inst_660 = cljs.test.do_report.call(null,inst_659);
var ___$1 = (function (){var statearr_895 = state_797;
(statearr_895[(4)] = cljs.core.rest.call(null,(state_797[(4)])));

return statearr_895;
})();
var state_797__$1 = state_797;
var statearr_896_1048 = state_797__$1;
(statearr_896_1048[(2)] = inst_660);

(statearr_896_1048[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_798 === (56))){
var inst_767 = (state_797[(17)]);
var inst_777 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_778 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"count","count",(-514511684),null),new cljs.core.Symbol(null,"rows","rows",(-1804386089),null)),(1));
var inst_779 = new cljs.core.Symbol(null,"not","not",(1044554643),null);
var inst_780 = new cljs.core.Symbol(null,"=","=",(-1501502141),null);
var inst_781 = cljs.core.cons.call(null,inst_780,inst_767);
var inst_782 = (new cljs.core.List(null,inst_781,null,(1),null));
var inst_783 = (new cljs.core.List(null,inst_779,inst_782,(2),null));
var inst_784 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),null,inst_778,inst_783];
var inst_785 = cljs.core.PersistentHashMap.fromArrays(inst_777,inst_784);
var inst_786 = cljs.test.do_report.call(null,inst_785);
var state_797__$1 = state_797;
var statearr_897_1049 = state_797__$1;
(statearr_897_1049[(2)] = inst_786);

(statearr_897_1049[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_798 === (25))){
var inst_663 = (state_797[(2)]);
var _ = (function (){var statearr_898 = state_797;
(statearr_898[(4)] = cljs.core.rest.call(null,(state_797[(4)])));

return statearr_898;
})();
var state_797__$1 = state_797;
var statearr_899_1050 = state_797__$1;
(statearr_899_1050[(2)] = inst_663);

(statearr_899_1050[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_798 === (57))){
var inst_768 = (state_797[(18)]);
var inst_788 = (state_797[(2)]);
var _ = (function (){var statearr_901 = state_797;
(statearr_901[(4)] = cljs.core.rest.call(null,(state_797[(4)])));

return statearr_901;
})();
var state_797__$1 = (function (){var statearr_902 = state_797;
(statearr_902[(22)] = inst_788);

return statearr_902;
})();
var statearr_903_1051 = state_797__$1;
(statearr_903_1051[(2)] = inst_768);

(statearr_903_1051[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_798 === (26))){
var inst_646 = (state_797[(2)]);
var inst_647 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_648 = null;
var inst_649 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"only fee-acc can init",inst_648,inst_646];
var inst_650 = cljs.core.PersistentHashMap.fromArrays(inst_647,inst_649);
var inst_651 = cljs.test.do_report.call(null,inst_650);
var state_797__$1 = state_797;
var statearr_904_1052 = state_797__$1;
(statearr_904_1052[(2)] = inst_651);

(statearr_904_1052[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_798 === (27))){
var _ = (function (){var statearr_905 = state_797;
(statearr_905[(4)] = cljs.core.rest.call(null,(state_797[(4)])));

return statearr_905;
})();
var state_797__$1 = state_797;
var ex900 = (state_797__$1[(2)]);
var statearr_906_1053 = state_797__$1;
(statearr_906_1053[(5)] = ex900);


var statearr_907_1054 = state_797__$1;
(statearr_907_1054[(1)] = (26));

(statearr_907_1054[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_798 === (28))){
var _ = (function (){var statearr_908 = state_797;
(statearr_908[(4)] = cljs.core.cons.call(null,(35),(state_797[(4)])));

return statearr_908;
})();
var inst_692 = [new cljs.core.Keyword(null,"proposal_contract","proposal_contract",(-1026612893))];
var inst_693 = [e2e.feepool.prop_acc];
var inst_694 = cljs.core.PersistentHashMap.fromArrays(inst_692,inst_693);
var inst_695 = eos_cljs.core.transact.call(null,e2e.feepool.fee_acc,"init",inst_694);
var inst_696 = cljs.core.async.interop.p__GT_c.call(null,inst_695);
var state_797__$1 = state_797;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_797__$1,(36),inst_696);
} else {
if((state_val_798 === (29))){
var inst_739 = (state_797[(2)]);
var inst_740 = eos_cljs.core.get_table_rows.call(null,e2e.feepool.fee_acc,e2e.feepool.fee_acc,"config");
var inst_741 = cljs.core.async.interop.p__GT_c.call(null,inst_740);
var state_797__$1 = (function (){var statearr_909 = state_797;
(statearr_909[(23)] = inst_739);

return statearr_909;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_797__$1,(47),inst_741);
} else {
if((state_val_798 === (30))){
var inst_667 = (state_797[(2)]);
var inst_668 = cljs.core.prn.call(null,"test failed with ",inst_667);
var state_797__$1 = (function (){var statearr_910 = state_797;
(statearr_910[(24)] = inst_668);

return statearr_910;
})();
var statearr_911_1055 = state_797__$1;
(statearr_911_1055[(2)] = null);

(statearr_911_1055[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_798 === (31))){
var _ = (function (){var statearr_912 = state_797;
(statearr_912[(4)] = cljs.core.cons.call(null,(34),(state_797[(4)])));

return statearr_912;
})();
var inst_680 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_681 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can init"];
var inst_682 = cljs.core.PersistentHashMap.fromArrays(inst_680,inst_681);
var inst_683 = cljs.test.do_report.call(null,inst_682);
var ___$1 = (function (){var statearr_913 = state_797;
(statearr_913[(4)] = cljs.core.rest.call(null,(state_797[(4)])));

return statearr_913;
})();
var state_797__$1 = state_797;
var statearr_914_1056 = state_797__$1;
(statearr_914_1056[(2)] = inst_683);

(statearr_914_1056[(1)] = (32));


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
});})(c__19__auto__,___192__auto__))
;
return ((function (switch__14__auto__,c__19__auto__,___192__auto__){
return (function() {
var e2e$feepool$state_machine__15__auto__ = null;
var e2e$feepool$state_machine__15__auto____0 = (function (){
var statearr_915 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_915[(0)] = e2e$feepool$state_machine__15__auto__);

(statearr_915[(1)] = (1));

return statearr_915;
});
var e2e$feepool$state_machine__15__auto____1 = (function (state_797){
while(true){
var ret_value__16__auto__ = (function (){try{while(true){
var result__17__auto__ = switch__14__auto__.call(null,state_797);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__17__auto__;
}
break;
}
}catch (e916){var ex__18__auto__ = e916;
var statearr_917_1057 = state_797;
(statearr_917_1057[(2)] = ex__18__auto__);


if(cljs.core.seq.call(null,(state_797[(4)]))){
var statearr_918_1058 = state_797;
(statearr_918_1058[(1)] = cljs.core.first.call(null,(state_797[(4)])));

} else {
throw ex__18__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__1059 = state_797;
state_797 = G__1059;
continue;
} else {
return ret_value__16__auto__;
}
break;
}
});
e2e$feepool$state_machine__15__auto__ = function(state_797){
switch(arguments.length){
case 0:
return e2e$feepool$state_machine__15__auto____0.call(this);
case 1:
return e2e$feepool$state_machine__15__auto____1.call(this,state_797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
e2e$feepool$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$0 = e2e$feepool$state_machine__15__auto____0;
e2e$feepool$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$1 = e2e$feepool$state_machine__15__auto____1;
return e2e$feepool$state_machine__15__auto__;
})()
;})(switch__14__auto__,c__19__auto__,___192__auto__))
})();
var state__21__auto__ = (function (){var statearr_919 = f__20__auto__.call(null);
(statearr_919[(6)] = c__19__auto__);

return statearr_919;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21__auto__);
});})(c__19__auto__,___192__auto__))
);

return c__19__auto__;
});

e2e.feepool.t_e2e$feepool216.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta217","meta217",(-1890650149),null)], null);
});

e2e.feepool.t_e2e$feepool216.cljs$lang$type = true;

e2e.feepool.t_e2e$feepool216.cljs$lang$ctorStr = "e2e.feepool/t_e2e$feepool216";

e2e.feepool.t_e2e$feepool216.cljs$lang$ctorPrWriter = (function (this__9776__auto__,writer__9777__auto__,opt__9778__auto__){
return cljs.core._write.call(null,writer__9777__auto__,"e2e.feepool/t_e2e$feepool216");
});

/**
 * Positional factory function for e2e.feepool/t_e2e$feepool216.
 */
e2e.feepool.__GT_t_e2e$feepool216 = (function e2e$feepool$__GT_t_e2e$feepool216(meta217){
return (new e2e.feepool.t_e2e$feepool216(meta217));
});

}

return (new e2e.feepool.t_e2e$feepool216(null));
});

e2e.feepool.init.cljs$lang$var = new cljs.core.Var(function(){return e2e.feepool.init;},new cljs.core.Symbol("e2e.feepool","init","e2e.feepool/init",(1440498841),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"e2e.feepool","e2e.feepool",(1697291824),null),new cljs.core.Symbol(null,"init","init",(-234949907),null),"e2e/feepool.cljs",(14),(1),(40),(40),cljs.core.List.EMPTY,null,(cljs.core.truth_(e2e.feepool.init)?e2e.feepool.init.cljs$lang$test:null)]));
e2e.feepool.addfees = (function e2e$feepool$addfees(){
return cljs.test.test_var.call(null,e2e.feepool.addfees.cljs$lang$var);
});
e2e.feepool.addfees.cljs$lang$test = (function (){
if((typeof e2e !== 'undefined') && (typeof e2e.feepool !== 'undefined') && (typeof e2e.feepool.t_e2e$feepool1060 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IFn}
*/
e2e.feepool.t_e2e$feepool1060 = (function (meta1061){
this.meta1061 = meta1061;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
e2e.feepool.t_e2e$feepool1060.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1062,meta1061__$1){
var self__ = this;
var _1062__$1 = this;
return (new e2e.feepool.t_e2e$feepool1060(meta1061__$1));
});

e2e.feepool.t_e2e$feepool1060.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1062){
var self__ = this;
var _1062__$1 = this;
return self__.meta1061;
});

e2e.feepool.t_e2e$feepool1060.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL;

e2e.feepool.t_e2e$feepool1060.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___192__auto__ = self____$1;
var c__19__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19__auto__,___192__auto__,self____$1){
return (function (){
var f__20__auto__ = (function (){var switch__14__auto__ = ((function (c__19__auto__,___192__auto__,self____$1){
return (function (state_1351){
var state_val_1352 = (state_1351[(1)]);
if((state_val_1352 === (32))){
var _ = (function (){var statearr_1354 = state_1351;
(statearr_1354[(4)] = cljs.core.rest.call(null,(state_1351[(4)])));

return statearr_1354;
})();
var state_1351__$1 = state_1351;
var ex1353 = (state_1351__$1[(2)]);
var statearr_1355_1954 = state_1351__$1;
(statearr_1355_1954[(5)] = ex1353);


var statearr_1356_1955 = state_1351__$1;
(statearr_1356_1955[(1)] = (31));

(statearr_1356_1955[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1352 === (64))){
var inst_1304 = (state_1351[(7)]);
var inst_1311 = (function(){throw inst_1304})();
var state_1351__$1 = state_1351;
var statearr_1357_1956 = state_1351__$1;
(statearr_1357_1956[(2)] = inst_1311);

(statearr_1357_1956[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1352 === (1))){
var state_1351__$1 = state_1351;
var statearr_1358_1957 = state_1351__$1;
(statearr_1358_1957[(2)] = null);

(statearr_1358_1957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1352 === (33))){
var inst_1169 = (state_1351[(8)]);
var inst_1172 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_1173 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",(76408555),null),new cljs.core.Symbol(null,"rows","rows",(-1804386089),null));
var inst_1174 = cljs.core.cons.call(null,cljs.core.empty_QMARK_,inst_1169);
var inst_1175 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),null,inst_1173,inst_1174];
var inst_1176 = cljs.core.PersistentHashMap.fromArrays(inst_1172,inst_1175);
var inst_1177 = cljs.test.do_report.call(null,inst_1176);
var state_1351__$1 = state_1351;
var statearr_1359_1958 = state_1351__$1;
(statearr_1359_1958[(2)] = inst_1177);

(statearr_1359_1958[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1352 === (65))){
var inst_1304 = (state_1351[(7)]);
var state_1351__$1 = state_1351;
var statearr_1360_1959 = state_1351__$1;
(statearr_1360_1959[(2)] = inst_1304);

(statearr_1360_1959[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1352 === (2))){
var _ = (function (){var statearr_1361 = state_1351;
(statearr_1361[(4)] = cljs.core.cons.call(null,(5),(state_1351[(4)])));

return statearr_1361;
})();
var state_1351__$1 = state_1351;
var statearr_1362_1960 = state_1351__$1;
(statearr_1362_1960[(2)] = null);

(statearr_1362_1960[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1352 === (34))){
var inst_1169 = (state_1351[(8)]);
var inst_1179 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_1180 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",(76408555),null),new cljs.core.Symbol(null,"rows","rows",(-1804386089),null));
var inst_1181 = new cljs.core.Symbol(null,"not","not",(1044554643),null);
var inst_1182 = new cljs.core.Symbol(null,"empty?","empty?",(76408555),null);
var inst_1183 = cljs.core.cons.call(null,inst_1182,inst_1169);
var inst_1184 = (new cljs.core.List(null,inst_1183,null,(1),null));
var inst_1185 = (new cljs.core.List(null,inst_1181,inst_1184,(2),null));
var inst_1186 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),null,inst_1180,inst_1185];
var inst_1187 = cljs.core.PersistentHashMap.fromArrays(inst_1179,inst_1186);
var inst_1188 = cljs.test.do_report.call(null,inst_1187);
var state_1351__$1 = state_1351;
var statearr_1363_1961 = state_1351__$1;
(statearr_1363_1961[(2)] = inst_1188);

(statearr_1363_1961[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1352 === (66))){
var inst_1314 = (state_1351[(2)]);
var state_1351__$1 = (function (){var statearr_1364 = state_1351;
(statearr_1364[(9)] = inst_1314);

return statearr_1364;
})();
var statearr_1365_1962 = state_1351__$1;
(statearr_1365_1962[(2)] = null);

(statearr_1365_1962[(1)] = (67));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1352 === (3))){
var inst_1349 = (state_1351[(2)]);
var state_1351__$1 = state_1351;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1351__$1,inst_1349);
} else {
if((state_val_1352 === (35))){
var inst_1170 = (state_1351[(10)]);
var inst_1190 = (state_1351[(2)]);
var _ = (function (){var statearr_1366 = state_1351;
(statearr_1366[(4)] = cljs.core.rest.call(null,(state_1351[(4)])));

return statearr_1366;
})();
var state_1351__$1 = (function (){var statearr_1367 = state_1351;
(statearr_1367[(11)] = inst_1190);

return statearr_1367;
})();
var statearr_1368_1963 = state_1351__$1;
(statearr_1368_1963[(2)] = inst_1170);

(statearr_1368_1963[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1352 === (67))){
var _ = (function (){var statearr_1369 = state_1351;
(statearr_1369[(4)] = cljs.core.cons.call(null,(70),(state_1351[(4)])));

return statearr_1369;
})();
var state_1351__$1 = state_1351;
var statearr_1370_1964 = state_1351__$1;
(statearr_1370_1964[(1)] = (71));



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1352 === (4))){
var inst_1064 = (state_1351[(2)]);
var inst_1065 = cljs.core.prn.call(null,"Error",inst_1064);
var state_1351__$1 = state_1351;
var statearr_1372_1965 = state_1351__$1;
(statearr_1372_1965[(2)] = inst_1065);

(statearr_1372_1965[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1352 === (36))){
var _ = (function (){var statearr_1374 = state_1351;
(statearr_1374[(4)] = cljs.core.cons.call(null,(43),(state_1351[(4)])));

return statearr_1374;
})();
var inst_1219 = [new cljs.core.Keyword(null,"proposal_contract","proposal_contract",(-1026612893)),new cljs.core.Keyword(null,"allowed_symbols","allowed_symbols",(1224189051))];
var inst_1220 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_1221 = [new cljs.core.Keyword(null,"contract","contract",(798152745)),new cljs.core.Keyword(null,"sym","sym",(-1444860305))];
var inst_1222 = [e2e.feepool.token_acc,"4,EFX"];
var inst_1223 = cljs.core.PersistentHashMap.fromArrays(inst_1221,inst_1222);
var inst_1224 = [inst_1223];
var inst_1225 = (new cljs.core.PersistentVector(null,(1),(5),inst_1220,inst_1224,null));
var inst_1226 = [e2e.feepool.prop_acc,inst_1225];
var inst_1227 = cljs.core.PersistentHashMap.fromArrays(inst_1219,inst_1226);
var inst_1228 = eos_cljs.core.transact.call(null,e2e.feepool.fee_acc,"update",inst_1227);
var inst_1229 = cljs.core.async.interop.p__GT_c.call(null,inst_1228);
var state_1351__$1 = state_1351;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1351__$1,(44),inst_1229);
} else {
if((state_val_1352 === (68))){
var inst_1342 = (state_1351[(2)]);
var _ = (function (){var statearr_1375 = state_1351;
(statearr_1375[(4)] = cljs.core.rest.call(null,(state_1351[(4)])));

return statearr_1375;
})();
var state_1351__$1 = state_1351;
var statearr_1376_1966 = state_1351__$1;
(statearr_1376_1966[(2)] = inst_1342);

(statearr_1376_1966[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1352 === (5))){
var _ = (function (){var statearr_1377 = state_1351;
(statearr_1377[(4)] = cljs.core.rest.call(null,(state_1351[(4)])));

return statearr_1377;
})();
var state_1351__$1 = state_1351;
var ex1373 = (state_1351__$1[(2)]);
var statearr_1378_1967 = state_1351__$1;
(statearr_1378_1967[(5)] = ex1373);


if((ex1373 instanceof Error)){
var statearr_1379_1968 = state_1351__$1;
(statearr_1379_1968[(1)] = (4));

(statearr_1379_1968[(5)] = null);

} else {
throw ex1373;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1352 === (37))){
var inst_1272 = (state_1351[(2)]);
var state_1351__$1 = (function (){var statearr_1380 = state_1351;
(statearr_1380[(12)] = inst_1272);

return statearr_1380;
})();
var statearr_1381_1969 = state_1351__$1;
(statearr_1381_1969[(2)] = null);

(statearr_1381_1969[(1)] = (55));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1352 === (69))){
var inst_1315 = (state_1351[(2)]);
var inst_1316 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_1317 = true;
var inst_1318 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can transfer",inst_1317,inst_1315];
var inst_1319 = cljs.core.PersistentHashMap.fromArrays(inst_1316,inst_1318);
var inst_1320 = cljs.test.do_report.call(null,inst_1319);
var state_1351__$1 = state_1351;
var statearr_1382_1970 = state_1351__$1;
(statearr_1382_1970[(2)] = inst_1320);

(statearr_1382_1970[(1)] = (68));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1352 === (6))){
var _ = (function (){var statearr_1384 = state_1351;
(statearr_1384[(4)] = cljs.core.cons.call(null,(13),(state_1351[(4)])));

return statearr_1384;
})();
var inst_1096 = [new cljs.core.Keyword(null,"from","from",(1815293044)),new cljs.core.Keyword(null,"to","to",(192099007)),new cljs.core.Keyword(null,"memo","memo",(-1928616099)),new cljs.core.Keyword(null,"quantity","quantity",(-1929050694))];
var inst_1097 = [e2e.feepool.owner_acc,e2e.feepool.fee_acc,"token not allowed","1000.0000 EFX"];
var inst_1098 = cljs.core.PersistentHashMap.fromArrays(inst_1096,inst_1097);
var inst_1099 = e2e.feepool.eos_tx_owner.call(null,e2e.feepool.token_acc,"transfer",inst_1098);
var inst_1100 = cljs.core.async.interop.p__GT_c.call(null,inst_1099);
var state_1351__$1 = state_1351;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1351__$1,(14),inst_1100);
} else {
if((state_val_1352 === (38))){
var inst_1194 = (state_1351[(2)]);
var inst_1195 = cljs.core.prn.call(null,"test failed with ",inst_1194);
var state_1351__$1 = (function (){var statearr_1385 = state_1351;
(statearr_1385[(13)] = inst_1195);

return statearr_1385;
})();
var statearr_1386_1971 = state_1351__$1;
(statearr_1386_1971[(2)] = null);

(statearr_1386_1971[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1352 === (70))){
var _ = (function (){var statearr_1387 = state_1351;
(statearr_1387[(4)] = cljs.core.rest.call(null,(state_1351[(4)])));

return statearr_1387;
})();
var state_1351__$1 = state_1351;
var ex1383 = (state_1351__$1[(2)]);
var statearr_1388_1972 = state_1351__$1;
(statearr_1388_1972[(5)] = ex1383);


var statearr_1389_1973 = state_1351__$1;
(statearr_1389_1973[(1)] = (69));

(statearr_1389_1973[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1352 === (7))){
var inst_1143 = (state_1351[(2)]);
var inst_1144 = eos_cljs.core.get_table_rows.call(null,e2e.feepool.fee_acc,e2e.feepool.fee_acc,"balance");
var inst_1145 = cljs.core.async.interop.p__GT_c.call(null,inst_1144);
var state_1351__$1 = (function (){var statearr_1390 = state_1351;
(statearr_1390[(14)] = inst_1143);

return statearr_1390;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1351__$1,(25),inst_1145);
} else {
if((state_val_1352 === (39))){
var _ = (function (){var statearr_1391 = state_1351;
(statearr_1391[(4)] = cljs.core.cons.call(null,(42),(state_1351[(4)])));

return statearr_1391;
})();
var inst_1207 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_1208 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can update"];
var inst_1209 = cljs.core.PersistentHashMap.fromArrays(inst_1207,inst_1208);
var inst_1210 = cljs.test.do_report.call(null,inst_1209);
var ___$1 = (function (){var statearr_1392 = state_1351;
(statearr_1392[(4)] = cljs.core.rest.call(null,(state_1351[(4)])));

return statearr_1392;
})();
var state_1351__$1 = state_1351;
var statearr_1393_1974 = state_1351__$1;
(statearr_1393_1974[(2)] = inst_1210);

(statearr_1393_1974[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1352 === (71))){
var inst_1327 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_1328 = true;
var inst_1329 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"can transfer",inst_1328,true];
var inst_1330 = cljs.core.PersistentHashMap.fromArrays(inst_1327,inst_1329);
var inst_1331 = cljs.test.do_report.call(null,inst_1330);
var state_1351__$1 = state_1351;
var statearr_1394_1975 = state_1351__$1;
(statearr_1394_1975[(2)] = inst_1331);

(statearr_1394_1975[(1)] = (73));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1352 === (8))){
var inst_1071 = (state_1351[(2)]);
var inst_1072 = cljs.core.prn.call(null,"test failed with ",inst_1071);
var state_1351__$1 = (function (){var statearr_1395 = state_1351;
(statearr_1395[(15)] = inst_1072);

return statearr_1395;
})();
var statearr_1396_1976 = state_1351__$1;
(statearr_1396_1976[(2)] = null);

(statearr_1396_1976[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1352 === (40))){
var inst_1213 = (state_1351[(2)]);
var state_1351__$1 = state_1351;
var statearr_1397_1977 = state_1351__$1;
(statearr_1397_1977[(2)] = inst_1213);

(statearr_1397_1977[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1352 === (72))){
var inst_1333 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_1334 = true;
var inst_1335 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can transfer",inst_1334,true];
var inst_1336 = cljs.core.PersistentHashMap.fromArrays(inst_1333,inst_1335);
var inst_1337 = cljs.test.do_report.call(null,inst_1336);
var state_1351__$1 = state_1351;
var statearr_1398_1978 = state_1351__$1;
(statearr_1398_1978[(2)] = inst_1337);

(statearr_1398_1978[(1)] = (73));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1352 === (9))){
var _ = (function (){var statearr_1399 = state_1351;
(statearr_1399[(4)] = cljs.core.cons.call(null,(12),(state_1351[(4)])));

return statearr_1399;
})();
var inst_1084 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_1085 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can transfer"];
var inst_1086 = cljs.core.PersistentHashMap.fromArrays(inst_1084,inst_1085);
var inst_1087 = cljs.test.do_report.call(null,inst_1086);
var ___$1 = (function (){var statearr_1400 = state_1351;
(statearr_1400[(4)] = cljs.core.rest.call(null,(state_1351[(4)])));

return statearr_1400;
})();
var state_1351__$1 = state_1351;
var statearr_1401_1979 = state_1351__$1;
(statearr_1401_1979[(2)] = inst_1087);

(statearr_1401_1979[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1352 === (41))){
var inst_1196 = (state_1351[(2)]);
var inst_1197 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_1198 = null;
var inst_1199 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can update",inst_1198,inst_1196];
var inst_1200 = cljs.core.PersistentHashMap.fromArrays(inst_1197,inst_1199);
var inst_1201 = cljs.test.do_report.call(null,inst_1200);
var state_1351__$1 = state_1351;
var statearr_1402_1980 = state_1351__$1;
(statearr_1402_1980[(2)] = inst_1201);

(statearr_1402_1980[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1352 === (73))){
var inst_1339 = (state_1351[(2)]);
var _ = (function (){var statearr_1404 = state_1351;
(statearr_1404[(4)] = cljs.core.rest.call(null,(state_1351[(4)])));

return statearr_1404;
})();
var state_1351__$1 = (function (){var statearr_1405 = state_1351;
(statearr_1405[(16)] = inst_1339);

return statearr_1405;
})();
var statearr_1406_1981 = state_1351__$1;
(statearr_1406_1981[(2)] = true);

(statearr_1406_1981[(1)] = (68));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1352 === (10))){
var inst_1090 = (state_1351[(2)]);
var state_1351__$1 = state_1351;
var statearr_1407_1982 = state_1351__$1;
(statearr_1407_1982[(2)] = inst_1090);

(statearr_1407_1982[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1352 === (42))){
var _ = (function (){var statearr_1409 = state_1351;
(statearr_1409[(4)] = cljs.core.rest.call(null,(state_1351[(4)])));

return statearr_1409;
})();
var state_1351__$1 = state_1351;
var ex1403 = (state_1351__$1[(2)]);
var statearr_1410_1983 = state_1351__$1;
(statearr_1410_1983[(5)] = ex1403);


var statearr_1411_1984 = state_1351__$1;
(statearr_1411_1984[(1)] = (41));

(statearr_1411_1984[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1352 === (11))){
var inst_1073 = (state_1351[(2)]);
var inst_1074 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_1075 = null;
var inst_1076 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can transfer",inst_1075,inst_1073];
var inst_1077 = cljs.core.PersistentHashMap.fromArrays(inst_1074,inst_1076);
var inst_1078 = cljs.test.do_report.call(null,inst_1077);
var state_1351__$1 = state_1351;
var statearr_1413_1985 = state_1351__$1;
(statearr_1413_1985[(2)] = inst_1078);

(statearr_1413_1985[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1352 === (43))){
var _ = (function (){var statearr_1414 = state_1351;
(statearr_1414[(4)] = cljs.core.rest.call(null,(state_1351[(4)])));

return statearr_1414;
})();
var state_1351__$1 = state_1351;
var ex1408 = (state_1351__$1[(2)]);
var statearr_1415_1986 = state_1351__$1;
(statearr_1415_1986[(5)] = ex1408);


if((ex1408 instanceof Error)){
var statearr_1416_1987 = state_1351__$1;
(statearr_1416_1987[(1)] = (38));

(statearr_1416_1987[(5)] = null);

} else {
throw ex1408;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1352 === (12))){
var _ = (function (){var statearr_1418 = state_1351;
(statearr_1418[(4)] = cljs.core.rest.call(null,(state_1351[(4)])));

return statearr_1418;
})();
var state_1351__$1 = state_1351;
var ex1412 = (state_1351__$1[(2)]);
var statearr_1419_1988 = state_1351__$1;
(statearr_1419_1988[(5)] = ex1412);


var statearr_1420_1989 = state_1351__$1;
(statearr_1420_1989[(1)] = (11));

(statearr_1420_1989[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1352 === (44))){
var inst_1231 = (state_1351[(17)]);
var inst_1231__$1 = (state_1351[(2)]);
var inst_1232 = (inst_1231__$1 instanceof cljs.core.ExceptionInfo);
var inst_1233 = cljs.core.ex_data.call(null,inst_1231__$1);
var inst_1234 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_1233);
var inst_1235 = cljs.core._EQ_.call(null,inst_1234,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_1236 = ((inst_1232) && (inst_1235));
var state_1351__$1 = (function (){var statearr_1421 = state_1351;
(statearr_1421[(17)] = inst_1231__$1);

return statearr_1421;
})();
if(cljs.core.truth_(inst_1236)){
var statearr_1422_1990 = state_1351__$1;
(statearr_1422_1990[(1)] = (45));

} else {
var statearr_1423_1991 = state_1351__$1;
(statearr_1423_1991[(1)] = (46));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1352 === (13))){
var _ = (function (){var statearr_1424 = state_1351;
(statearr_1424[(4)] = cljs.core.rest.call(null,(state_1351[(4)])));

return statearr_1424;
})();
var state_1351__$1 = state_1351;
var ex1417 = (state_1351__$1[(2)]);
var statearr_1425_1992 = state_1351__$1;
(statearr_1425_1992[(5)] = ex1417);


if((ex1417 instanceof Error)){
var statearr_1426_1993 = state_1351__$1;
(statearr_1426_1993[(1)] = (8));

(statearr_1426_1993[(5)] = null);

} else {
throw ex1417;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1352 === (45))){
var inst_1231 = (state_1351[(17)]);
var inst_1238 = (function(){throw inst_1231})();
var state_1351__$1 = state_1351;
var statearr_1427_1994 = state_1351__$1;
(statearr_1427_1994[(2)] = inst_1238);

(statearr_1427_1994[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1352 === (14))){
var inst_1102 = (state_1351[(18)]);
var inst_1102__$1 = (state_1351[(2)]);
var inst_1103 = (inst_1102__$1 instanceof cljs.core.ExceptionInfo);
var inst_1104 = cljs.core.ex_data.call(null,inst_1102__$1);
var inst_1105 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_1104);
var inst_1106 = cljs.core._EQ_.call(null,inst_1105,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_1107 = ((inst_1103) && (inst_1106));
var state_1351__$1 = (function (){var statearr_1428 = state_1351;
(statearr_1428[(18)] = inst_1102__$1);

return statearr_1428;
})();
if(cljs.core.truth_(inst_1107)){
var statearr_1429_1995 = state_1351__$1;
(statearr_1429_1995[(1)] = (15));

} else {
var statearr_1430_1996 = state_1351__$1;
(statearr_1430_1996[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1352 === (46))){
var inst_1231 = (state_1351[(17)]);
var state_1351__$1 = state_1351;
var statearr_1431_1997 = state_1351__$1;
(statearr_1431_1997[(2)] = inst_1231);

(statearr_1431_1997[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1352 === (15))){
var inst_1102 = (state_1351[(18)]);
var inst_1109 = (function(){throw inst_1102})();
var state_1351__$1 = state_1351;
var statearr_1432_1998 = state_1351__$1;
(statearr_1432_1998[(2)] = inst_1109);

(statearr_1432_1998[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1352 === (47))){
var inst_1241 = (state_1351[(2)]);
var state_1351__$1 = (function (){var statearr_1433 = state_1351;
(statearr_1433[(19)] = inst_1241);

return statearr_1433;
})();
var statearr_1434_1999 = state_1351__$1;
(statearr_1434_1999[(2)] = null);

(statearr_1434_1999[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1352 === (16))){
var inst_1102 = (state_1351[(18)]);
var state_1351__$1 = state_1351;
var statearr_1435_2000 = state_1351__$1;
(statearr_1435_2000[(2)] = inst_1102);

(statearr_1435_2000[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1352 === (48))){
var _ = (function (){var statearr_1436 = state_1351;
(statearr_1436[(4)] = cljs.core.cons.call(null,(51),(state_1351[(4)])));

return statearr_1436;
})();
var state_1351__$1 = state_1351;
var statearr_1437_2001 = state_1351__$1;
(statearr_1437_2001[(1)] = (52));



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1352 === (17))){
var inst_1112 = (state_1351[(2)]);
var state_1351__$1 = (function (){var statearr_1439 = state_1351;
(statearr_1439[(20)] = inst_1112);

return statearr_1439;
})();
var statearr_1440_2002 = state_1351__$1;
(statearr_1440_2002[(2)] = null);

(statearr_1440_2002[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1352 === (49))){
var inst_1269 = (state_1351[(2)]);
var _ = (function (){var statearr_1441 = state_1351;
(statearr_1441[(4)] = cljs.core.rest.call(null,(state_1351[(4)])));

return statearr_1441;
})();
var state_1351__$1 = state_1351;
var statearr_1442_2003 = state_1351__$1;
(statearr_1442_2003[(2)] = inst_1269);

(statearr_1442_2003[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1352 === (18))){
var _ = (function (){var statearr_1443 = state_1351;
(statearr_1443[(4)] = cljs.core.cons.call(null,(21),(state_1351[(4)])));

return statearr_1443;
})();
var state_1351__$1 = state_1351;
var statearr_1444_2004 = state_1351__$1;
(statearr_1444_2004[(1)] = (22));



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1352 === (50))){
var inst_1242 = (state_1351[(2)]);
var inst_1243 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_1244 = true;
var inst_1245 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can update",inst_1244,inst_1242];
var inst_1246 = cljs.core.PersistentHashMap.fromArrays(inst_1243,inst_1245);
var inst_1247 = cljs.test.do_report.call(null,inst_1246);
var state_1351__$1 = state_1351;
var statearr_1447_2005 = state_1351__$1;
(statearr_1447_2005[(2)] = inst_1247);

(statearr_1447_2005[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1352 === (19))){
var inst_1140 = (state_1351[(2)]);
var _ = (function (){var statearr_1448 = state_1351;
(statearr_1448[(4)] = cljs.core.rest.call(null,(state_1351[(4)])));

return statearr_1448;
})();
var state_1351__$1 = state_1351;
var statearr_1449_2006 = state_1351__$1;
(statearr_1449_2006[(2)] = inst_1140);

(statearr_1449_2006[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1352 === (51))){
var _ = (function (){var statearr_1450 = state_1351;
(statearr_1450[(4)] = cljs.core.rest.call(null,(state_1351[(4)])));

return statearr_1450;
})();
var state_1351__$1 = state_1351;
var ex1446 = (state_1351__$1[(2)]);
var statearr_1451_2007 = state_1351__$1;
(statearr_1451_2007[(5)] = ex1446);


var statearr_1452_2008 = state_1351__$1;
(statearr_1452_2008[(1)] = (50));

(statearr_1452_2008[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1352 === (20))){
var inst_1113 = (state_1351[(2)]);
var inst_1114 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_1115 = true;
var inst_1116 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can transfer",inst_1115,inst_1113];
var inst_1117 = cljs.core.PersistentHashMap.fromArrays(inst_1114,inst_1116);
var inst_1118 = cljs.test.do_report.call(null,inst_1117);
var state_1351__$1 = state_1351;
var statearr_1454_2009 = state_1351__$1;
(statearr_1454_2009[(2)] = inst_1118);

(statearr_1454_2009[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1352 === (52))){
var inst_1254 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_1255 = true;
var inst_1256 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"can update",inst_1255,true];
var inst_1257 = cljs.core.PersistentHashMap.fromArrays(inst_1254,inst_1256);
var inst_1258 = cljs.test.do_report.call(null,inst_1257);
var state_1351__$1 = state_1351;
var statearr_1455_2010 = state_1351__$1;
(statearr_1455_2010[(2)] = inst_1258);

(statearr_1455_2010[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1352 === (21))){
var _ = (function (){var statearr_1456 = state_1351;
(statearr_1456[(4)] = cljs.core.rest.call(null,(state_1351[(4)])));

return statearr_1456;
})();
var state_1351__$1 = state_1351;
var ex1453 = (state_1351__$1[(2)]);
var statearr_1457_2011 = state_1351__$1;
(statearr_1457_2011[(5)] = ex1453);


var statearr_1458_2012 = state_1351__$1;
(statearr_1458_2012[(1)] = (20));

(statearr_1458_2012[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1352 === (53))){
var inst_1260 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_1261 = true;
var inst_1262 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can update",inst_1261,true];
var inst_1263 = cljs.core.PersistentHashMap.fromArrays(inst_1260,inst_1262);
var inst_1264 = cljs.test.do_report.call(null,inst_1263);
var state_1351__$1 = state_1351;
var statearr_1459_2013 = state_1351__$1;
(statearr_1459_2013[(2)] = inst_1264);

(statearr_1459_2013[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1352 === (22))){
var inst_1125 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_1126 = true;
var inst_1127 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"can transfer",inst_1126,true];
var inst_1128 = cljs.core.PersistentHashMap.fromArrays(inst_1125,inst_1127);
var inst_1129 = cljs.test.do_report.call(null,inst_1128);
var state_1351__$1 = state_1351;
var statearr_1460_2014 = state_1351__$1;
(statearr_1460_2014[(2)] = inst_1129);

(statearr_1460_2014[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1352 === (54))){
var inst_1266 = (state_1351[(2)]);
var _ = (function (){var statearr_1461 = state_1351;
(statearr_1461[(4)] = cljs.core.rest.call(null,(state_1351[(4)])));

return statearr_1461;
})();
var state_1351__$1 = (function (){var statearr_1462 = state_1351;
(statearr_1462[(21)] = inst_1266);

return statearr_1462;
})();
var statearr_1463_2015 = state_1351__$1;
(statearr_1463_2015[(2)] = true);

(statearr_1463_2015[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1352 === (23))){
var inst_1131 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_1132 = true;
var inst_1133 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can transfer",inst_1132,true];
var inst_1134 = cljs.core.PersistentHashMap.fromArrays(inst_1131,inst_1133);
var inst_1135 = cljs.test.do_report.call(null,inst_1134);
var state_1351__$1 = state_1351;
var statearr_1464_2016 = state_1351__$1;
(statearr_1464_2016[(2)] = inst_1135);

(statearr_1464_2016[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1352 === (55))){
var _ = (function (){var statearr_1465 = state_1351;
(statearr_1465[(4)] = cljs.core.cons.call(null,(62),(state_1351[(4)])));

return statearr_1465;
})();
var inst_1298 = [new cljs.core.Keyword(null,"from","from",(1815293044)),new cljs.core.Keyword(null,"to","to",(192099007)),new cljs.core.Keyword(null,"memo","memo",(-1928616099)),new cljs.core.Keyword(null,"quantity","quantity",(-1929050694))];
var inst_1299 = [e2e.feepool.owner_acc,e2e.feepool.fee_acc,"token allowed","1000.0000 EFX"];
var inst_1300 = cljs.core.PersistentHashMap.fromArrays(inst_1298,inst_1299);
var inst_1301 = e2e.feepool.eos_tx_owner.call(null,e2e.feepool.token_acc,"transfer",inst_1300);
var inst_1302 = cljs.core.async.interop.p__GT_c.call(null,inst_1301);
var state_1351__$1 = state_1351;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1351__$1,(63),inst_1302);
} else {
if((state_val_1352 === (24))){
var inst_1137 = (state_1351[(2)]);
var _ = (function (){var statearr_1466 = state_1351;
(statearr_1466[(4)] = cljs.core.rest.call(null,(state_1351[(4)])));

return statearr_1466;
})();
var state_1351__$1 = (function (){var statearr_1467 = state_1351;
(statearr_1467[(22)] = inst_1137);

return statearr_1467;
})();
var statearr_1468_2017 = state_1351__$1;
(statearr_1468_2017[(2)] = true);

(statearr_1468_2017[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1352 === (56))){
var inst_1345 = (state_1351[(2)]);
var inst_1346 = done.call(null);
var _ = (function (){var statearr_1469 = state_1351;
(statearr_1469[(4)] = cljs.core.rest.call(null,(state_1351[(4)])));

return statearr_1469;
})();
var state_1351__$1 = (function (){var statearr_1470 = state_1351;
(statearr_1470[(23)] = inst_1345);

return statearr_1470;
})();
var statearr_1471_2018 = state_1351__$1;
(statearr_1471_2018[(2)] = inst_1346);

(statearr_1471_2018[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1352 === (25))){
var inst_1147 = (state_1351[(24)]);
var inst_1147__$1 = (state_1351[(2)]);
var inst_1148 = (inst_1147__$1 instanceof cljs.core.ExceptionInfo);
var inst_1149 = cljs.core.ex_data.call(null,inst_1147__$1);
var inst_1150 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_1149);
var inst_1151 = cljs.core._EQ_.call(null,inst_1150,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_1152 = ((inst_1148) && (inst_1151));
var state_1351__$1 = (function (){var statearr_1472 = state_1351;
(statearr_1472[(24)] = inst_1147__$1);

return statearr_1472;
})();
if(cljs.core.truth_(inst_1152)){
var statearr_1473_2019 = state_1351__$1;
(statearr_1473_2019[(1)] = (26));

} else {
var statearr_1474_2020 = state_1351__$1;
(statearr_1474_2020[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1352 === (57))){
var inst_1273 = (state_1351[(2)]);
var inst_1274 = cljs.core.prn.call(null,"test failed with ",inst_1273);
var state_1351__$1 = (function (){var statearr_1475 = state_1351;
(statearr_1475[(25)] = inst_1274);

return statearr_1475;
})();
var statearr_1476_2021 = state_1351__$1;
(statearr_1476_2021[(2)] = null);

(statearr_1476_2021[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1352 === (26))){
var inst_1147 = (state_1351[(24)]);
var inst_1154 = (function(){throw inst_1147})();
var state_1351__$1 = state_1351;
var statearr_1477_2022 = state_1351__$1;
(statearr_1477_2022[(2)] = inst_1154);

(statearr_1477_2022[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1352 === (58))){
var _ = (function (){var statearr_1478 = state_1351;
(statearr_1478[(4)] = cljs.core.cons.call(null,(61),(state_1351[(4)])));

return statearr_1478;
})();
var inst_1286 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_1287 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can transfer"];
var inst_1288 = cljs.core.PersistentHashMap.fromArrays(inst_1286,inst_1287);
var inst_1289 = cljs.test.do_report.call(null,inst_1288);
var ___$1 = (function (){var statearr_1479 = state_1351;
(statearr_1479[(4)] = cljs.core.rest.call(null,(state_1351[(4)])));

return statearr_1479;
})();
var state_1351__$1 = state_1351;
var statearr_1480_2023 = state_1351__$1;
(statearr_1480_2023[(2)] = inst_1289);

(statearr_1480_2023[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1352 === (27))){
var inst_1147 = (state_1351[(24)]);
var state_1351__$1 = state_1351;
var statearr_1481_2024 = state_1351__$1;
(statearr_1481_2024[(2)] = inst_1147);

(statearr_1481_2024[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1352 === (59))){
var inst_1292 = (state_1351[(2)]);
var state_1351__$1 = state_1351;
var statearr_1482_2025 = state_1351__$1;
(statearr_1482_2025[(2)] = inst_1292);

(statearr_1482_2025[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1352 === (28))){
var inst_1157 = (state_1351[(2)]);
var state_1351__$1 = (function (){var statearr_1483 = state_1351;
(statearr_1483[(26)] = inst_1157);

return statearr_1483;
})();
var statearr_1484_2026 = state_1351__$1;
(statearr_1484_2026[(2)] = null);

(statearr_1484_2026[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1352 === (60))){
var inst_1275 = (state_1351[(2)]);
var inst_1276 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_1277 = null;
var inst_1278 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can transfer",inst_1277,inst_1275];
var inst_1279 = cljs.core.PersistentHashMap.fromArrays(inst_1276,inst_1278);
var inst_1280 = cljs.test.do_report.call(null,inst_1279);
var state_1351__$1 = state_1351;
var statearr_1486_2027 = state_1351__$1;
(statearr_1486_2027[(2)] = inst_1280);

(statearr_1486_2027[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1352 === (29))){
var inst_1157 = (state_1351[(26)]);
var inst_1169 = (state_1351[(8)]);
var inst_1170 = (state_1351[(10)]);
var _ = (function (){var statearr_1487 = state_1351;
(statearr_1487[(4)] = cljs.core.cons.call(null,(32),(state_1351[(4)])));

return statearr_1487;
})();
var inst_1169__$1 = (new cljs.core.List(null,inst_1157,null,(1),null));
var inst_1170__$1 = cljs.core.apply.call(null,cljs.core.empty_QMARK_,inst_1169__$1);
var state_1351__$1 = (function (){var statearr_1488 = state_1351;
(statearr_1488[(8)] = inst_1169__$1);

(statearr_1488[(10)] = inst_1170__$1);

return statearr_1488;
})();
if(cljs.core.truth_(inst_1170__$1)){
var statearr_1489_2028 = state_1351__$1;
(statearr_1489_2028[(1)] = (33));

} else {
var statearr_1490_2029 = state_1351__$1;
(statearr_1490_2029[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1352 === (61))){
var _ = (function (){var statearr_1492 = state_1351;
(statearr_1492[(4)] = cljs.core.rest.call(null,(state_1351[(4)])));

return statearr_1492;
})();
var state_1351__$1 = state_1351;
var ex1485 = (state_1351__$1[(2)]);
var statearr_1493_2030 = state_1351__$1;
(statearr_1493_2030[(5)] = ex1485);


var statearr_1494_2031 = state_1351__$1;
(statearr_1494_2031[(1)] = (60));

(statearr_1494_2031[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1352 === (30))){
var inst_1193 = (state_1351[(2)]);
var state_1351__$1 = (function (){var statearr_1495 = state_1351;
(statearr_1495[(27)] = inst_1193);

return statearr_1495;
})();
var statearr_1496_2032 = state_1351__$1;
(statearr_1496_2032[(2)] = null);

(statearr_1496_2032[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1352 === (62))){
var _ = (function (){var statearr_1497 = state_1351;
(statearr_1497[(4)] = cljs.core.rest.call(null,(state_1351[(4)])));

return statearr_1497;
})();
var state_1351__$1 = state_1351;
var ex1491 = (state_1351__$1[(2)]);
var statearr_1498_2033 = state_1351__$1;
(statearr_1498_2033[(5)] = ex1491);


if((ex1491 instanceof Error)){
var statearr_1499_2034 = state_1351__$1;
(statearr_1499_2034[(1)] = (57));

(statearr_1499_2034[(5)] = null);

} else {
throw ex1491;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1352 === (31))){
var inst_1158 = (state_1351[(2)]);
var inst_1159 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_1160 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",(76408555),null),new cljs.core.Symbol(null,"rows","rows",(-1804386089),null));
var inst_1161 = [new cljs.core.Keyword(null,"error","error",(-978969032)),null,inst_1160,inst_1158];
var inst_1162 = cljs.core.PersistentHashMap.fromArrays(inst_1159,inst_1161);
var inst_1163 = cljs.test.do_report.call(null,inst_1162);
var state_1351__$1 = state_1351;
var statearr_1500_2035 = state_1351__$1;
(statearr_1500_2035[(2)] = inst_1163);

(statearr_1500_2035[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1352 === (63))){
var inst_1304 = (state_1351[(7)]);
var inst_1304__$1 = (state_1351[(2)]);
var inst_1305 = (inst_1304__$1 instanceof cljs.core.ExceptionInfo);
var inst_1306 = cljs.core.ex_data.call(null,inst_1304__$1);
var inst_1307 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_1306);
var inst_1308 = cljs.core._EQ_.call(null,inst_1307,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_1309 = ((inst_1305) && (inst_1308));
var state_1351__$1 = (function (){var statearr_1501 = state_1351;
(statearr_1501[(7)] = inst_1304__$1);

return statearr_1501;
})();
if(cljs.core.truth_(inst_1309)){
var statearr_1502_2036 = state_1351__$1;
(statearr_1502_2036[(1)] = (64));

} else {
var statearr_1503_2037 = state_1351__$1;
(statearr_1503_2037[(1)] = (65));

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
});})(c__19__auto__,___192__auto__,self____$1))
;
return ((function (switch__14__auto__,c__19__auto__,___192__auto__,self____$1){
return (function() {
var e2e$feepool$state_machine__15__auto__ = null;
var e2e$feepool$state_machine__15__auto____0 = (function (){
var statearr_1504 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_1504[(0)] = e2e$feepool$state_machine__15__auto__);

(statearr_1504[(1)] = (1));

return statearr_1504;
});
var e2e$feepool$state_machine__15__auto____1 = (function (state_1351){
while(true){
var ret_value__16__auto__ = (function (){try{while(true){
var result__17__auto__ = switch__14__auto__.call(null,state_1351);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__17__auto__;
}
break;
}
}catch (e1505){var ex__18__auto__ = e1505;
var statearr_1506_2038 = state_1351;
(statearr_1506_2038[(2)] = ex__18__auto__);


if(cljs.core.seq.call(null,(state_1351[(4)]))){
var statearr_1507_2039 = state_1351;
(statearr_1507_2039[(1)] = cljs.core.first.call(null,(state_1351[(4)])));

} else {
throw ex__18__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__2040 = state_1351;
state_1351 = G__2040;
continue;
} else {
return ret_value__16__auto__;
}
break;
}
});
e2e$feepool$state_machine__15__auto__ = function(state_1351){
switch(arguments.length){
case 0:
return e2e$feepool$state_machine__15__auto____0.call(this);
case 1:
return e2e$feepool$state_machine__15__auto____1.call(this,state_1351);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
e2e$feepool$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$0 = e2e$feepool$state_machine__15__auto____0;
e2e$feepool$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$1 = e2e$feepool$state_machine__15__auto____1;
return e2e$feepool$state_machine__15__auto__;
})()
;})(switch__14__auto__,c__19__auto__,___192__auto__,self____$1))
})();
var state__21__auto__ = (function (){var statearr_1508 = f__20__auto__.call(null);
(statearr_1508[(6)] = c__19__auto__);

return statearr_1508;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21__auto__);
});})(c__19__auto__,___192__auto__,self____$1))
);

return c__19__auto__;
});

e2e.feepool.t_e2e$feepool1060.prototype.apply = (function (self__,args1063){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args1063)));
});

e2e.feepool.t_e2e$feepool1060.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___192__auto__ = this;
var c__19__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19__auto__,___192__auto__){
return (function (){
var f__20__auto__ = (function (){var switch__14__auto__ = ((function (c__19__auto__,___192__auto__){
return (function (state_1796){
var state_val_1797 = (state_1796[(1)]);
if((state_val_1797 === (32))){
var _ = (function (){var statearr_1799 = state_1796;
(statearr_1799[(4)] = cljs.core.rest.call(null,(state_1796[(4)])));

return statearr_1799;
})();
var state_1796__$1 = state_1796;
var ex1798 = (state_1796__$1[(2)]);
var statearr_1800_2041 = state_1796__$1;
(statearr_1800_2041[(5)] = ex1798);


var statearr_1801_2042 = state_1796__$1;
(statearr_1801_2042[(1)] = (31));

(statearr_1801_2042[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1797 === (64))){
var inst_1749 = (state_1796[(7)]);
var inst_1756 = (function(){throw inst_1749})();
var state_1796__$1 = state_1796;
var statearr_1802_2043 = state_1796__$1;
(statearr_1802_2043[(2)] = inst_1756);

(statearr_1802_2043[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1797 === (1))){
var state_1796__$1 = state_1796;
var statearr_1803_2044 = state_1796__$1;
(statearr_1803_2044[(2)] = null);

(statearr_1803_2044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1797 === (33))){
var inst_1614 = (state_1796[(8)]);
var inst_1617 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_1618 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",(76408555),null),new cljs.core.Symbol(null,"rows","rows",(-1804386089),null));
var inst_1619 = cljs.core.cons.call(null,cljs.core.empty_QMARK_,inst_1614);
var inst_1620 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),null,inst_1618,inst_1619];
var inst_1621 = cljs.core.PersistentHashMap.fromArrays(inst_1617,inst_1620);
var inst_1622 = cljs.test.do_report.call(null,inst_1621);
var state_1796__$1 = state_1796;
var statearr_1804_2045 = state_1796__$1;
(statearr_1804_2045[(2)] = inst_1622);

(statearr_1804_2045[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1797 === (65))){
var inst_1749 = (state_1796[(7)]);
var state_1796__$1 = state_1796;
var statearr_1805_2046 = state_1796__$1;
(statearr_1805_2046[(2)] = inst_1749);

(statearr_1805_2046[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1797 === (2))){
var _ = (function (){var statearr_1806 = state_1796;
(statearr_1806[(4)] = cljs.core.cons.call(null,(5),(state_1796[(4)])));

return statearr_1806;
})();
var state_1796__$1 = state_1796;
var statearr_1807_2047 = state_1796__$1;
(statearr_1807_2047[(2)] = null);

(statearr_1807_2047[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1797 === (34))){
var inst_1614 = (state_1796[(8)]);
var inst_1624 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_1625 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",(76408555),null),new cljs.core.Symbol(null,"rows","rows",(-1804386089),null));
var inst_1626 = new cljs.core.Symbol(null,"not","not",(1044554643),null);
var inst_1627 = new cljs.core.Symbol(null,"empty?","empty?",(76408555),null);
var inst_1628 = cljs.core.cons.call(null,inst_1627,inst_1614);
var inst_1629 = (new cljs.core.List(null,inst_1628,null,(1),null));
var inst_1630 = (new cljs.core.List(null,inst_1626,inst_1629,(2),null));
var inst_1631 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),null,inst_1625,inst_1630];
var inst_1632 = cljs.core.PersistentHashMap.fromArrays(inst_1624,inst_1631);
var inst_1633 = cljs.test.do_report.call(null,inst_1632);
var state_1796__$1 = state_1796;
var statearr_1808_2048 = state_1796__$1;
(statearr_1808_2048[(2)] = inst_1633);

(statearr_1808_2048[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1797 === (66))){
var inst_1759 = (state_1796[(2)]);
var state_1796__$1 = (function (){var statearr_1809 = state_1796;
(statearr_1809[(9)] = inst_1759);

return statearr_1809;
})();
var statearr_1810_2049 = state_1796__$1;
(statearr_1810_2049[(2)] = null);

(statearr_1810_2049[(1)] = (67));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1797 === (3))){
var inst_1794 = (state_1796[(2)]);
var state_1796__$1 = state_1796;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1796__$1,inst_1794);
} else {
if((state_val_1797 === (35))){
var inst_1615 = (state_1796[(10)]);
var inst_1635 = (state_1796[(2)]);
var _ = (function (){var statearr_1811 = state_1796;
(statearr_1811[(4)] = cljs.core.rest.call(null,(state_1796[(4)])));

return statearr_1811;
})();
var state_1796__$1 = (function (){var statearr_1812 = state_1796;
(statearr_1812[(11)] = inst_1635);

return statearr_1812;
})();
var statearr_1813_2050 = state_1796__$1;
(statearr_1813_2050[(2)] = inst_1615);

(statearr_1813_2050[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1797 === (67))){
var _ = (function (){var statearr_1814 = state_1796;
(statearr_1814[(4)] = cljs.core.cons.call(null,(70),(state_1796[(4)])));

return statearr_1814;
})();
var state_1796__$1 = state_1796;
var statearr_1815_2051 = state_1796__$1;
(statearr_1815_2051[(1)] = (71));



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1797 === (4))){
var inst_1509 = (state_1796[(2)]);
var inst_1510 = cljs.core.prn.call(null,"Error",inst_1509);
var state_1796__$1 = state_1796;
var statearr_1817_2052 = state_1796__$1;
(statearr_1817_2052[(2)] = inst_1510);

(statearr_1817_2052[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1797 === (36))){
var _ = (function (){var statearr_1819 = state_1796;
(statearr_1819[(4)] = cljs.core.cons.call(null,(43),(state_1796[(4)])));

return statearr_1819;
})();
var inst_1664 = [new cljs.core.Keyword(null,"proposal_contract","proposal_contract",(-1026612893)),new cljs.core.Keyword(null,"allowed_symbols","allowed_symbols",(1224189051))];
var inst_1665 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_1666 = [new cljs.core.Keyword(null,"contract","contract",(798152745)),new cljs.core.Keyword(null,"sym","sym",(-1444860305))];
var inst_1667 = [e2e.feepool.token_acc,"4,EFX"];
var inst_1668 = cljs.core.PersistentHashMap.fromArrays(inst_1666,inst_1667);
var inst_1669 = [inst_1668];
var inst_1670 = (new cljs.core.PersistentVector(null,(1),(5),inst_1665,inst_1669,null));
var inst_1671 = [e2e.feepool.prop_acc,inst_1670];
var inst_1672 = cljs.core.PersistentHashMap.fromArrays(inst_1664,inst_1671);
var inst_1673 = eos_cljs.core.transact.call(null,e2e.feepool.fee_acc,"update",inst_1672);
var inst_1674 = cljs.core.async.interop.p__GT_c.call(null,inst_1673);
var state_1796__$1 = state_1796;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1796__$1,(44),inst_1674);
} else {
if((state_val_1797 === (68))){
var inst_1787 = (state_1796[(2)]);
var _ = (function (){var statearr_1820 = state_1796;
(statearr_1820[(4)] = cljs.core.rest.call(null,(state_1796[(4)])));

return statearr_1820;
})();
var state_1796__$1 = state_1796;
var statearr_1821_2053 = state_1796__$1;
(statearr_1821_2053[(2)] = inst_1787);

(statearr_1821_2053[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1797 === (5))){
var _ = (function (){var statearr_1822 = state_1796;
(statearr_1822[(4)] = cljs.core.rest.call(null,(state_1796[(4)])));

return statearr_1822;
})();
var state_1796__$1 = state_1796;
var ex1818 = (state_1796__$1[(2)]);
var statearr_1823_2054 = state_1796__$1;
(statearr_1823_2054[(5)] = ex1818);


if((ex1818 instanceof Error)){
var statearr_1824_2055 = state_1796__$1;
(statearr_1824_2055[(1)] = (4));

(statearr_1824_2055[(5)] = null);

} else {
throw ex1818;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1797 === (37))){
var inst_1717 = (state_1796[(2)]);
var state_1796__$1 = (function (){var statearr_1825 = state_1796;
(statearr_1825[(12)] = inst_1717);

return statearr_1825;
})();
var statearr_1826_2056 = state_1796__$1;
(statearr_1826_2056[(2)] = null);

(statearr_1826_2056[(1)] = (55));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1797 === (69))){
var inst_1760 = (state_1796[(2)]);
var inst_1761 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_1762 = true;
var inst_1763 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can transfer",inst_1762,inst_1760];
var inst_1764 = cljs.core.PersistentHashMap.fromArrays(inst_1761,inst_1763);
var inst_1765 = cljs.test.do_report.call(null,inst_1764);
var state_1796__$1 = state_1796;
var statearr_1827_2057 = state_1796__$1;
(statearr_1827_2057[(2)] = inst_1765);

(statearr_1827_2057[(1)] = (68));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1797 === (6))){
var _ = (function (){var statearr_1829 = state_1796;
(statearr_1829[(4)] = cljs.core.cons.call(null,(13),(state_1796[(4)])));

return statearr_1829;
})();
var inst_1541 = [new cljs.core.Keyword(null,"from","from",(1815293044)),new cljs.core.Keyword(null,"to","to",(192099007)),new cljs.core.Keyword(null,"memo","memo",(-1928616099)),new cljs.core.Keyword(null,"quantity","quantity",(-1929050694))];
var inst_1542 = [e2e.feepool.owner_acc,e2e.feepool.fee_acc,"token not allowed","1000.0000 EFX"];
var inst_1543 = cljs.core.PersistentHashMap.fromArrays(inst_1541,inst_1542);
var inst_1544 = e2e.feepool.eos_tx_owner.call(null,e2e.feepool.token_acc,"transfer",inst_1543);
var inst_1545 = cljs.core.async.interop.p__GT_c.call(null,inst_1544);
var state_1796__$1 = state_1796;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1796__$1,(14),inst_1545);
} else {
if((state_val_1797 === (38))){
var inst_1639 = (state_1796[(2)]);
var inst_1640 = cljs.core.prn.call(null,"test failed with ",inst_1639);
var state_1796__$1 = (function (){var statearr_1830 = state_1796;
(statearr_1830[(13)] = inst_1640);

return statearr_1830;
})();
var statearr_1831_2058 = state_1796__$1;
(statearr_1831_2058[(2)] = null);

(statearr_1831_2058[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1797 === (70))){
var _ = (function (){var statearr_1832 = state_1796;
(statearr_1832[(4)] = cljs.core.rest.call(null,(state_1796[(4)])));

return statearr_1832;
})();
var state_1796__$1 = state_1796;
var ex1828 = (state_1796__$1[(2)]);
var statearr_1833_2059 = state_1796__$1;
(statearr_1833_2059[(5)] = ex1828);


var statearr_1834_2060 = state_1796__$1;
(statearr_1834_2060[(1)] = (69));

(statearr_1834_2060[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1797 === (7))){
var inst_1588 = (state_1796[(2)]);
var inst_1589 = eos_cljs.core.get_table_rows.call(null,e2e.feepool.fee_acc,e2e.feepool.fee_acc,"balance");
var inst_1590 = cljs.core.async.interop.p__GT_c.call(null,inst_1589);
var state_1796__$1 = (function (){var statearr_1835 = state_1796;
(statearr_1835[(14)] = inst_1588);

return statearr_1835;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1796__$1,(25),inst_1590);
} else {
if((state_val_1797 === (39))){
var _ = (function (){var statearr_1836 = state_1796;
(statearr_1836[(4)] = cljs.core.cons.call(null,(42),(state_1796[(4)])));

return statearr_1836;
})();
var inst_1652 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_1653 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can update"];
var inst_1654 = cljs.core.PersistentHashMap.fromArrays(inst_1652,inst_1653);
var inst_1655 = cljs.test.do_report.call(null,inst_1654);
var ___$1 = (function (){var statearr_1837 = state_1796;
(statearr_1837[(4)] = cljs.core.rest.call(null,(state_1796[(4)])));

return statearr_1837;
})();
var state_1796__$1 = state_1796;
var statearr_1838_2061 = state_1796__$1;
(statearr_1838_2061[(2)] = inst_1655);

(statearr_1838_2061[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1797 === (71))){
var inst_1772 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_1773 = true;
var inst_1774 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"can transfer",inst_1773,true];
var inst_1775 = cljs.core.PersistentHashMap.fromArrays(inst_1772,inst_1774);
var inst_1776 = cljs.test.do_report.call(null,inst_1775);
var state_1796__$1 = state_1796;
var statearr_1839_2062 = state_1796__$1;
(statearr_1839_2062[(2)] = inst_1776);

(statearr_1839_2062[(1)] = (73));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1797 === (8))){
var inst_1516 = (state_1796[(2)]);
var inst_1517 = cljs.core.prn.call(null,"test failed with ",inst_1516);
var state_1796__$1 = (function (){var statearr_1840 = state_1796;
(statearr_1840[(15)] = inst_1517);

return statearr_1840;
})();
var statearr_1841_2063 = state_1796__$1;
(statearr_1841_2063[(2)] = null);

(statearr_1841_2063[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1797 === (40))){
var inst_1658 = (state_1796[(2)]);
var state_1796__$1 = state_1796;
var statearr_1842_2064 = state_1796__$1;
(statearr_1842_2064[(2)] = inst_1658);

(statearr_1842_2064[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1797 === (72))){
var inst_1778 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_1779 = true;
var inst_1780 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can transfer",inst_1779,true];
var inst_1781 = cljs.core.PersistentHashMap.fromArrays(inst_1778,inst_1780);
var inst_1782 = cljs.test.do_report.call(null,inst_1781);
var state_1796__$1 = state_1796;
var statearr_1843_2065 = state_1796__$1;
(statearr_1843_2065[(2)] = inst_1782);

(statearr_1843_2065[(1)] = (73));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1797 === (9))){
var _ = (function (){var statearr_1844 = state_1796;
(statearr_1844[(4)] = cljs.core.cons.call(null,(12),(state_1796[(4)])));

return statearr_1844;
})();
var inst_1529 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_1530 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can transfer"];
var inst_1531 = cljs.core.PersistentHashMap.fromArrays(inst_1529,inst_1530);
var inst_1532 = cljs.test.do_report.call(null,inst_1531);
var ___$1 = (function (){var statearr_1845 = state_1796;
(statearr_1845[(4)] = cljs.core.rest.call(null,(state_1796[(4)])));

return statearr_1845;
})();
var state_1796__$1 = state_1796;
var statearr_1846_2066 = state_1796__$1;
(statearr_1846_2066[(2)] = inst_1532);

(statearr_1846_2066[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1797 === (41))){
var inst_1641 = (state_1796[(2)]);
var inst_1642 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_1643 = null;
var inst_1644 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can update",inst_1643,inst_1641];
var inst_1645 = cljs.core.PersistentHashMap.fromArrays(inst_1642,inst_1644);
var inst_1646 = cljs.test.do_report.call(null,inst_1645);
var state_1796__$1 = state_1796;
var statearr_1847_2067 = state_1796__$1;
(statearr_1847_2067[(2)] = inst_1646);

(statearr_1847_2067[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1797 === (73))){
var inst_1784 = (state_1796[(2)]);
var _ = (function (){var statearr_1849 = state_1796;
(statearr_1849[(4)] = cljs.core.rest.call(null,(state_1796[(4)])));

return statearr_1849;
})();
var state_1796__$1 = (function (){var statearr_1850 = state_1796;
(statearr_1850[(16)] = inst_1784);

return statearr_1850;
})();
var statearr_1851_2068 = state_1796__$1;
(statearr_1851_2068[(2)] = true);

(statearr_1851_2068[(1)] = (68));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1797 === (10))){
var inst_1535 = (state_1796[(2)]);
var state_1796__$1 = state_1796;
var statearr_1852_2069 = state_1796__$1;
(statearr_1852_2069[(2)] = inst_1535);

(statearr_1852_2069[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1797 === (42))){
var _ = (function (){var statearr_1854 = state_1796;
(statearr_1854[(4)] = cljs.core.rest.call(null,(state_1796[(4)])));

return statearr_1854;
})();
var state_1796__$1 = state_1796;
var ex1848 = (state_1796__$1[(2)]);
var statearr_1855_2070 = state_1796__$1;
(statearr_1855_2070[(5)] = ex1848);


var statearr_1856_2071 = state_1796__$1;
(statearr_1856_2071[(1)] = (41));

(statearr_1856_2071[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1797 === (11))){
var inst_1518 = (state_1796[(2)]);
var inst_1519 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_1520 = null;
var inst_1521 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can transfer",inst_1520,inst_1518];
var inst_1522 = cljs.core.PersistentHashMap.fromArrays(inst_1519,inst_1521);
var inst_1523 = cljs.test.do_report.call(null,inst_1522);
var state_1796__$1 = state_1796;
var statearr_1858_2072 = state_1796__$1;
(statearr_1858_2072[(2)] = inst_1523);

(statearr_1858_2072[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1797 === (43))){
var _ = (function (){var statearr_1859 = state_1796;
(statearr_1859[(4)] = cljs.core.rest.call(null,(state_1796[(4)])));

return statearr_1859;
})();
var state_1796__$1 = state_1796;
var ex1853 = (state_1796__$1[(2)]);
var statearr_1860_2073 = state_1796__$1;
(statearr_1860_2073[(5)] = ex1853);


if((ex1853 instanceof Error)){
var statearr_1861_2074 = state_1796__$1;
(statearr_1861_2074[(1)] = (38));

(statearr_1861_2074[(5)] = null);

} else {
throw ex1853;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1797 === (12))){
var _ = (function (){var statearr_1863 = state_1796;
(statearr_1863[(4)] = cljs.core.rest.call(null,(state_1796[(4)])));

return statearr_1863;
})();
var state_1796__$1 = state_1796;
var ex1857 = (state_1796__$1[(2)]);
var statearr_1864_2075 = state_1796__$1;
(statearr_1864_2075[(5)] = ex1857);


var statearr_1865_2076 = state_1796__$1;
(statearr_1865_2076[(1)] = (11));

(statearr_1865_2076[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1797 === (44))){
var inst_1676 = (state_1796[(17)]);
var inst_1676__$1 = (state_1796[(2)]);
var inst_1677 = (inst_1676__$1 instanceof cljs.core.ExceptionInfo);
var inst_1678 = cljs.core.ex_data.call(null,inst_1676__$1);
var inst_1679 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_1678);
var inst_1680 = cljs.core._EQ_.call(null,inst_1679,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_1681 = ((inst_1677) && (inst_1680));
var state_1796__$1 = (function (){var statearr_1866 = state_1796;
(statearr_1866[(17)] = inst_1676__$1);

return statearr_1866;
})();
if(cljs.core.truth_(inst_1681)){
var statearr_1867_2077 = state_1796__$1;
(statearr_1867_2077[(1)] = (45));

} else {
var statearr_1868_2078 = state_1796__$1;
(statearr_1868_2078[(1)] = (46));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1797 === (13))){
var _ = (function (){var statearr_1869 = state_1796;
(statearr_1869[(4)] = cljs.core.rest.call(null,(state_1796[(4)])));

return statearr_1869;
})();
var state_1796__$1 = state_1796;
var ex1862 = (state_1796__$1[(2)]);
var statearr_1870_2079 = state_1796__$1;
(statearr_1870_2079[(5)] = ex1862);


if((ex1862 instanceof Error)){
var statearr_1871_2080 = state_1796__$1;
(statearr_1871_2080[(1)] = (8));

(statearr_1871_2080[(5)] = null);

} else {
throw ex1862;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1797 === (45))){
var inst_1676 = (state_1796[(17)]);
var inst_1683 = (function(){throw inst_1676})();
var state_1796__$1 = state_1796;
var statearr_1872_2081 = state_1796__$1;
(statearr_1872_2081[(2)] = inst_1683);

(statearr_1872_2081[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1797 === (14))){
var inst_1547 = (state_1796[(18)]);
var inst_1547__$1 = (state_1796[(2)]);
var inst_1548 = (inst_1547__$1 instanceof cljs.core.ExceptionInfo);
var inst_1549 = cljs.core.ex_data.call(null,inst_1547__$1);
var inst_1550 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_1549);
var inst_1551 = cljs.core._EQ_.call(null,inst_1550,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_1552 = ((inst_1548) && (inst_1551));
var state_1796__$1 = (function (){var statearr_1873 = state_1796;
(statearr_1873[(18)] = inst_1547__$1);

return statearr_1873;
})();
if(cljs.core.truth_(inst_1552)){
var statearr_1874_2082 = state_1796__$1;
(statearr_1874_2082[(1)] = (15));

} else {
var statearr_1875_2083 = state_1796__$1;
(statearr_1875_2083[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1797 === (46))){
var inst_1676 = (state_1796[(17)]);
var state_1796__$1 = state_1796;
var statearr_1876_2084 = state_1796__$1;
(statearr_1876_2084[(2)] = inst_1676);

(statearr_1876_2084[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1797 === (15))){
var inst_1547 = (state_1796[(18)]);
var inst_1554 = (function(){throw inst_1547})();
var state_1796__$1 = state_1796;
var statearr_1877_2085 = state_1796__$1;
(statearr_1877_2085[(2)] = inst_1554);

(statearr_1877_2085[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1797 === (47))){
var inst_1686 = (state_1796[(2)]);
var state_1796__$1 = (function (){var statearr_1878 = state_1796;
(statearr_1878[(19)] = inst_1686);

return statearr_1878;
})();
var statearr_1879_2086 = state_1796__$1;
(statearr_1879_2086[(2)] = null);

(statearr_1879_2086[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1797 === (16))){
var inst_1547 = (state_1796[(18)]);
var state_1796__$1 = state_1796;
var statearr_1880_2087 = state_1796__$1;
(statearr_1880_2087[(2)] = inst_1547);

(statearr_1880_2087[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1797 === (48))){
var _ = (function (){var statearr_1881 = state_1796;
(statearr_1881[(4)] = cljs.core.cons.call(null,(51),(state_1796[(4)])));

return statearr_1881;
})();
var state_1796__$1 = state_1796;
var statearr_1882_2088 = state_1796__$1;
(statearr_1882_2088[(1)] = (52));



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1797 === (17))){
var inst_1557 = (state_1796[(2)]);
var state_1796__$1 = (function (){var statearr_1884 = state_1796;
(statearr_1884[(20)] = inst_1557);

return statearr_1884;
})();
var statearr_1885_2089 = state_1796__$1;
(statearr_1885_2089[(2)] = null);

(statearr_1885_2089[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1797 === (49))){
var inst_1714 = (state_1796[(2)]);
var _ = (function (){var statearr_1886 = state_1796;
(statearr_1886[(4)] = cljs.core.rest.call(null,(state_1796[(4)])));

return statearr_1886;
})();
var state_1796__$1 = state_1796;
var statearr_1887_2090 = state_1796__$1;
(statearr_1887_2090[(2)] = inst_1714);

(statearr_1887_2090[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1797 === (18))){
var _ = (function (){var statearr_1888 = state_1796;
(statearr_1888[(4)] = cljs.core.cons.call(null,(21),(state_1796[(4)])));

return statearr_1888;
})();
var state_1796__$1 = state_1796;
var statearr_1889_2091 = state_1796__$1;
(statearr_1889_2091[(1)] = (22));



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1797 === (50))){
var inst_1687 = (state_1796[(2)]);
var inst_1688 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_1689 = true;
var inst_1690 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can update",inst_1689,inst_1687];
var inst_1691 = cljs.core.PersistentHashMap.fromArrays(inst_1688,inst_1690);
var inst_1692 = cljs.test.do_report.call(null,inst_1691);
var state_1796__$1 = state_1796;
var statearr_1892_2092 = state_1796__$1;
(statearr_1892_2092[(2)] = inst_1692);

(statearr_1892_2092[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1797 === (19))){
var inst_1585 = (state_1796[(2)]);
var _ = (function (){var statearr_1893 = state_1796;
(statearr_1893[(4)] = cljs.core.rest.call(null,(state_1796[(4)])));

return statearr_1893;
})();
var state_1796__$1 = state_1796;
var statearr_1894_2093 = state_1796__$1;
(statearr_1894_2093[(2)] = inst_1585);

(statearr_1894_2093[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1797 === (51))){
var _ = (function (){var statearr_1895 = state_1796;
(statearr_1895[(4)] = cljs.core.rest.call(null,(state_1796[(4)])));

return statearr_1895;
})();
var state_1796__$1 = state_1796;
var ex1891 = (state_1796__$1[(2)]);
var statearr_1896_2094 = state_1796__$1;
(statearr_1896_2094[(5)] = ex1891);


var statearr_1897_2095 = state_1796__$1;
(statearr_1897_2095[(1)] = (50));

(statearr_1897_2095[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1797 === (20))){
var inst_1558 = (state_1796[(2)]);
var inst_1559 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_1560 = true;
var inst_1561 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can transfer",inst_1560,inst_1558];
var inst_1562 = cljs.core.PersistentHashMap.fromArrays(inst_1559,inst_1561);
var inst_1563 = cljs.test.do_report.call(null,inst_1562);
var state_1796__$1 = state_1796;
var statearr_1899_2096 = state_1796__$1;
(statearr_1899_2096[(2)] = inst_1563);

(statearr_1899_2096[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1797 === (52))){
var inst_1699 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_1700 = true;
var inst_1701 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"can update",inst_1700,true];
var inst_1702 = cljs.core.PersistentHashMap.fromArrays(inst_1699,inst_1701);
var inst_1703 = cljs.test.do_report.call(null,inst_1702);
var state_1796__$1 = state_1796;
var statearr_1900_2097 = state_1796__$1;
(statearr_1900_2097[(2)] = inst_1703);

(statearr_1900_2097[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1797 === (21))){
var _ = (function (){var statearr_1901 = state_1796;
(statearr_1901[(4)] = cljs.core.rest.call(null,(state_1796[(4)])));

return statearr_1901;
})();
var state_1796__$1 = state_1796;
var ex1898 = (state_1796__$1[(2)]);
var statearr_1902_2098 = state_1796__$1;
(statearr_1902_2098[(5)] = ex1898);


var statearr_1903_2099 = state_1796__$1;
(statearr_1903_2099[(1)] = (20));

(statearr_1903_2099[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1797 === (53))){
var inst_1705 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_1706 = true;
var inst_1707 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can update",inst_1706,true];
var inst_1708 = cljs.core.PersistentHashMap.fromArrays(inst_1705,inst_1707);
var inst_1709 = cljs.test.do_report.call(null,inst_1708);
var state_1796__$1 = state_1796;
var statearr_1904_2100 = state_1796__$1;
(statearr_1904_2100[(2)] = inst_1709);

(statearr_1904_2100[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1797 === (22))){
var inst_1570 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_1571 = true;
var inst_1572 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"can transfer",inst_1571,true];
var inst_1573 = cljs.core.PersistentHashMap.fromArrays(inst_1570,inst_1572);
var inst_1574 = cljs.test.do_report.call(null,inst_1573);
var state_1796__$1 = state_1796;
var statearr_1905_2101 = state_1796__$1;
(statearr_1905_2101[(2)] = inst_1574);

(statearr_1905_2101[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1797 === (54))){
var inst_1711 = (state_1796[(2)]);
var _ = (function (){var statearr_1906 = state_1796;
(statearr_1906[(4)] = cljs.core.rest.call(null,(state_1796[(4)])));

return statearr_1906;
})();
var state_1796__$1 = (function (){var statearr_1907 = state_1796;
(statearr_1907[(21)] = inst_1711);

return statearr_1907;
})();
var statearr_1908_2102 = state_1796__$1;
(statearr_1908_2102[(2)] = true);

(statearr_1908_2102[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1797 === (23))){
var inst_1576 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_1577 = true;
var inst_1578 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can transfer",inst_1577,true];
var inst_1579 = cljs.core.PersistentHashMap.fromArrays(inst_1576,inst_1578);
var inst_1580 = cljs.test.do_report.call(null,inst_1579);
var state_1796__$1 = state_1796;
var statearr_1909_2103 = state_1796__$1;
(statearr_1909_2103[(2)] = inst_1580);

(statearr_1909_2103[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1797 === (55))){
var _ = (function (){var statearr_1910 = state_1796;
(statearr_1910[(4)] = cljs.core.cons.call(null,(62),(state_1796[(4)])));

return statearr_1910;
})();
var inst_1743 = [new cljs.core.Keyword(null,"from","from",(1815293044)),new cljs.core.Keyword(null,"to","to",(192099007)),new cljs.core.Keyword(null,"memo","memo",(-1928616099)),new cljs.core.Keyword(null,"quantity","quantity",(-1929050694))];
var inst_1744 = [e2e.feepool.owner_acc,e2e.feepool.fee_acc,"token allowed","1000.0000 EFX"];
var inst_1745 = cljs.core.PersistentHashMap.fromArrays(inst_1743,inst_1744);
var inst_1746 = e2e.feepool.eos_tx_owner.call(null,e2e.feepool.token_acc,"transfer",inst_1745);
var inst_1747 = cljs.core.async.interop.p__GT_c.call(null,inst_1746);
var state_1796__$1 = state_1796;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1796__$1,(63),inst_1747);
} else {
if((state_val_1797 === (24))){
var inst_1582 = (state_1796[(2)]);
var _ = (function (){var statearr_1911 = state_1796;
(statearr_1911[(4)] = cljs.core.rest.call(null,(state_1796[(4)])));

return statearr_1911;
})();
var state_1796__$1 = (function (){var statearr_1912 = state_1796;
(statearr_1912[(22)] = inst_1582);

return statearr_1912;
})();
var statearr_1913_2104 = state_1796__$1;
(statearr_1913_2104[(2)] = true);

(statearr_1913_2104[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1797 === (56))){
var inst_1790 = (state_1796[(2)]);
var inst_1791 = done.call(null);
var _ = (function (){var statearr_1914 = state_1796;
(statearr_1914[(4)] = cljs.core.rest.call(null,(state_1796[(4)])));

return statearr_1914;
})();
var state_1796__$1 = (function (){var statearr_1915 = state_1796;
(statearr_1915[(23)] = inst_1790);

return statearr_1915;
})();
var statearr_1916_2105 = state_1796__$1;
(statearr_1916_2105[(2)] = inst_1791);

(statearr_1916_2105[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1797 === (25))){
var inst_1592 = (state_1796[(24)]);
var inst_1592__$1 = (state_1796[(2)]);
var inst_1593 = (inst_1592__$1 instanceof cljs.core.ExceptionInfo);
var inst_1594 = cljs.core.ex_data.call(null,inst_1592__$1);
var inst_1595 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_1594);
var inst_1596 = cljs.core._EQ_.call(null,inst_1595,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_1597 = ((inst_1593) && (inst_1596));
var state_1796__$1 = (function (){var statearr_1917 = state_1796;
(statearr_1917[(24)] = inst_1592__$1);

return statearr_1917;
})();
if(cljs.core.truth_(inst_1597)){
var statearr_1918_2106 = state_1796__$1;
(statearr_1918_2106[(1)] = (26));

} else {
var statearr_1919_2107 = state_1796__$1;
(statearr_1919_2107[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1797 === (57))){
var inst_1718 = (state_1796[(2)]);
var inst_1719 = cljs.core.prn.call(null,"test failed with ",inst_1718);
var state_1796__$1 = (function (){var statearr_1920 = state_1796;
(statearr_1920[(25)] = inst_1719);

return statearr_1920;
})();
var statearr_1921_2108 = state_1796__$1;
(statearr_1921_2108[(2)] = null);

(statearr_1921_2108[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1797 === (26))){
var inst_1592 = (state_1796[(24)]);
var inst_1599 = (function(){throw inst_1592})();
var state_1796__$1 = state_1796;
var statearr_1922_2109 = state_1796__$1;
(statearr_1922_2109[(2)] = inst_1599);

(statearr_1922_2109[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1797 === (58))){
var _ = (function (){var statearr_1923 = state_1796;
(statearr_1923[(4)] = cljs.core.cons.call(null,(61),(state_1796[(4)])));

return statearr_1923;
})();
var inst_1731 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_1732 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can transfer"];
var inst_1733 = cljs.core.PersistentHashMap.fromArrays(inst_1731,inst_1732);
var inst_1734 = cljs.test.do_report.call(null,inst_1733);
var ___$1 = (function (){var statearr_1924 = state_1796;
(statearr_1924[(4)] = cljs.core.rest.call(null,(state_1796[(4)])));

return statearr_1924;
})();
var state_1796__$1 = state_1796;
var statearr_1925_2110 = state_1796__$1;
(statearr_1925_2110[(2)] = inst_1734);

(statearr_1925_2110[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1797 === (27))){
var inst_1592 = (state_1796[(24)]);
var state_1796__$1 = state_1796;
var statearr_1926_2111 = state_1796__$1;
(statearr_1926_2111[(2)] = inst_1592);

(statearr_1926_2111[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1797 === (59))){
var inst_1737 = (state_1796[(2)]);
var state_1796__$1 = state_1796;
var statearr_1927_2112 = state_1796__$1;
(statearr_1927_2112[(2)] = inst_1737);

(statearr_1927_2112[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1797 === (28))){
var inst_1602 = (state_1796[(2)]);
var state_1796__$1 = (function (){var statearr_1928 = state_1796;
(statearr_1928[(26)] = inst_1602);

return statearr_1928;
})();
var statearr_1929_2113 = state_1796__$1;
(statearr_1929_2113[(2)] = null);

(statearr_1929_2113[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1797 === (60))){
var inst_1720 = (state_1796[(2)]);
var inst_1721 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_1722 = null;
var inst_1723 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can transfer",inst_1722,inst_1720];
var inst_1724 = cljs.core.PersistentHashMap.fromArrays(inst_1721,inst_1723);
var inst_1725 = cljs.test.do_report.call(null,inst_1724);
var state_1796__$1 = state_1796;
var statearr_1931_2114 = state_1796__$1;
(statearr_1931_2114[(2)] = inst_1725);

(statearr_1931_2114[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1797 === (29))){
var inst_1602 = (state_1796[(26)]);
var inst_1614 = (state_1796[(8)]);
var inst_1615 = (state_1796[(10)]);
var _ = (function (){var statearr_1932 = state_1796;
(statearr_1932[(4)] = cljs.core.cons.call(null,(32),(state_1796[(4)])));

return statearr_1932;
})();
var inst_1614__$1 = (new cljs.core.List(null,inst_1602,null,(1),null));
var inst_1615__$1 = cljs.core.apply.call(null,cljs.core.empty_QMARK_,inst_1614__$1);
var state_1796__$1 = (function (){var statearr_1933 = state_1796;
(statearr_1933[(8)] = inst_1614__$1);

(statearr_1933[(10)] = inst_1615__$1);

return statearr_1933;
})();
if(cljs.core.truth_(inst_1615__$1)){
var statearr_1934_2115 = state_1796__$1;
(statearr_1934_2115[(1)] = (33));

} else {
var statearr_1935_2116 = state_1796__$1;
(statearr_1935_2116[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1797 === (61))){
var _ = (function (){var statearr_1937 = state_1796;
(statearr_1937[(4)] = cljs.core.rest.call(null,(state_1796[(4)])));

return statearr_1937;
})();
var state_1796__$1 = state_1796;
var ex1930 = (state_1796__$1[(2)]);
var statearr_1938_2117 = state_1796__$1;
(statearr_1938_2117[(5)] = ex1930);


var statearr_1939_2118 = state_1796__$1;
(statearr_1939_2118[(1)] = (60));

(statearr_1939_2118[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1797 === (30))){
var inst_1638 = (state_1796[(2)]);
var state_1796__$1 = (function (){var statearr_1940 = state_1796;
(statearr_1940[(27)] = inst_1638);

return statearr_1940;
})();
var statearr_1941_2119 = state_1796__$1;
(statearr_1941_2119[(2)] = null);

(statearr_1941_2119[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1797 === (62))){
var _ = (function (){var statearr_1942 = state_1796;
(statearr_1942[(4)] = cljs.core.rest.call(null,(state_1796[(4)])));

return statearr_1942;
})();
var state_1796__$1 = state_1796;
var ex1936 = (state_1796__$1[(2)]);
var statearr_1943_2120 = state_1796__$1;
(statearr_1943_2120[(5)] = ex1936);


if((ex1936 instanceof Error)){
var statearr_1944_2121 = state_1796__$1;
(statearr_1944_2121[(1)] = (57));

(statearr_1944_2121[(5)] = null);

} else {
throw ex1936;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1797 === (31))){
var inst_1603 = (state_1796[(2)]);
var inst_1604 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_1605 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",(76408555),null),new cljs.core.Symbol(null,"rows","rows",(-1804386089),null));
var inst_1606 = [new cljs.core.Keyword(null,"error","error",(-978969032)),null,inst_1605,inst_1603];
var inst_1607 = cljs.core.PersistentHashMap.fromArrays(inst_1604,inst_1606);
var inst_1608 = cljs.test.do_report.call(null,inst_1607);
var state_1796__$1 = state_1796;
var statearr_1945_2122 = state_1796__$1;
(statearr_1945_2122[(2)] = inst_1608);

(statearr_1945_2122[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1797 === (63))){
var inst_1749 = (state_1796[(7)]);
var inst_1749__$1 = (state_1796[(2)]);
var inst_1750 = (inst_1749__$1 instanceof cljs.core.ExceptionInfo);
var inst_1751 = cljs.core.ex_data.call(null,inst_1749__$1);
var inst_1752 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_1751);
var inst_1753 = cljs.core._EQ_.call(null,inst_1752,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_1754 = ((inst_1750) && (inst_1753));
var state_1796__$1 = (function (){var statearr_1946 = state_1796;
(statearr_1946[(7)] = inst_1749__$1);

return statearr_1946;
})();
if(cljs.core.truth_(inst_1754)){
var statearr_1947_2123 = state_1796__$1;
(statearr_1947_2123[(1)] = (64));

} else {
var statearr_1948_2124 = state_1796__$1;
(statearr_1948_2124[(1)] = (65));

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
});})(c__19__auto__,___192__auto__))
;
return ((function (switch__14__auto__,c__19__auto__,___192__auto__){
return (function() {
var e2e$feepool$state_machine__15__auto__ = null;
var e2e$feepool$state_machine__15__auto____0 = (function (){
var statearr_1949 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_1949[(0)] = e2e$feepool$state_machine__15__auto__);

(statearr_1949[(1)] = (1));

return statearr_1949;
});
var e2e$feepool$state_machine__15__auto____1 = (function (state_1796){
while(true){
var ret_value__16__auto__ = (function (){try{while(true){
var result__17__auto__ = switch__14__auto__.call(null,state_1796);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__17__auto__;
}
break;
}
}catch (e1950){var ex__18__auto__ = e1950;
var statearr_1951_2125 = state_1796;
(statearr_1951_2125[(2)] = ex__18__auto__);


if(cljs.core.seq.call(null,(state_1796[(4)]))){
var statearr_1952_2126 = state_1796;
(statearr_1952_2126[(1)] = cljs.core.first.call(null,(state_1796[(4)])));

} else {
throw ex__18__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__2127 = state_1796;
state_1796 = G__2127;
continue;
} else {
return ret_value__16__auto__;
}
break;
}
});
e2e$feepool$state_machine__15__auto__ = function(state_1796){
switch(arguments.length){
case 0:
return e2e$feepool$state_machine__15__auto____0.call(this);
case 1:
return e2e$feepool$state_machine__15__auto____1.call(this,state_1796);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
e2e$feepool$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$0 = e2e$feepool$state_machine__15__auto____0;
e2e$feepool$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$1 = e2e$feepool$state_machine__15__auto____1;
return e2e$feepool$state_machine__15__auto__;
})()
;})(switch__14__auto__,c__19__auto__,___192__auto__))
})();
var state__21__auto__ = (function (){var statearr_1953 = f__20__auto__.call(null);
(statearr_1953[(6)] = c__19__auto__);

return statearr_1953;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21__auto__);
});})(c__19__auto__,___192__auto__))
);

return c__19__auto__;
});

e2e.feepool.t_e2e$feepool1060.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta1061","meta1061",(515518257),null)], null);
});

e2e.feepool.t_e2e$feepool1060.cljs$lang$type = true;

e2e.feepool.t_e2e$feepool1060.cljs$lang$ctorStr = "e2e.feepool/t_e2e$feepool1060";

e2e.feepool.t_e2e$feepool1060.cljs$lang$ctorPrWriter = (function (this__9776__auto__,writer__9777__auto__,opt__9778__auto__){
return cljs.core._write.call(null,writer__9777__auto__,"e2e.feepool/t_e2e$feepool1060");
});

/**
 * Positional factory function for e2e.feepool/t_e2e$feepool1060.
 */
e2e.feepool.__GT_t_e2e$feepool1060 = (function e2e$feepool$__GT_t_e2e$feepool1060(meta1061){
return (new e2e.feepool.t_e2e$feepool1060(meta1061));
});

}

return (new e2e.feepool.t_e2e$feepool1060(null));
});

e2e.feepool.addfees.cljs$lang$var = new cljs.core.Var(function(){return e2e.feepool.addfees;},new cljs.core.Symbol("e2e.feepool","addfees","e2e.feepool/addfees",(1272785798),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"e2e.feepool","e2e.feepool",(1697291824),null),new cljs.core.Symbol(null,"addfees","addfees",(-1342994870),null),"e2e/feepool.cljs",(17),(1),(57),(57),cljs.core.List.EMPTY,null,(cljs.core.truth_(e2e.feepool.addfees)?e2e.feepool.addfees.cljs$lang$test:null)]));
e2e.feepool._main = (function e2e$feepool$_main(var_args){
var args__10338__auto__ = [];
var len__10335__auto___2132 = arguments.length;
var i__10336__auto___2133 = (0);
while(true){
if((i__10336__auto___2133 < len__10335__auto___2132)){
args__10338__auto__.push((arguments[i__10336__auto___2133]));

var G__2134 = (i__10336__auto___2133 + (1));
i__10336__auto___2133 = G__2134;
continue;
} else {
}
break;
}

var argseq__10339__auto__ = ((((0) < args__10338__auto__.length))?(new cljs.core.IndexedSeq(args__10338__auto__.slice((0)),(0),null)):null);
return e2e.feepool._main.cljs$core$IFn$_invoke$arity$variadic(argseq__10339__auto__);
});

e2e.feepool._main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
try{return cljs.test.run_block.call(null,(function (){var env2130 = cljs.test.empty_env.call(null);
var summary2131 = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"test","test",(577538877)),(0),new cljs.core.Keyword(null,"pass","pass",(1574159993)),(0),new cljs.core.Keyword(null,"fail","fail",(1706214930)),(0),new cljs.core.Keyword(null,"error","error",(-978969032)),(0),new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"summary","summary",(380847952))], null));
return cljs.core.concat.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env2130,summary2131){
return (function (){
cljs.test.set_env_BANG_.call(null,env2130);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",(-1701237033)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"e2e.feepool","e2e.feepool",(1697291824),null)], null));

return cljs.test.block.call(null,(function (){var env__194__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__194__auto__,env2130,summary2131){
return (function (){
if((env__194__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}

cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",(1253947167))], null),cljs.core.assoc,new cljs.core.Symbol(null,"e2e.feepool","e2e.feepool",(1697291824),null),e2e.feepool.cljs_test_once_fixtures);

return null;
});})(env__194__auto__,env2130,summary2131))
], null),cljs.test.test_vars_block.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return e2e.feepool.init;},new cljs.core.Symbol("e2e.feepool","init","e2e.feepool/init",(1440498841),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"e2e.feepool","e2e.feepool",(1697291824),null),new cljs.core.Symbol(null,"init","init",(-234949907),null),"e2e/feepool.cljs",(14),(1),(40),(40),cljs.core.List.EMPTY,null,(cljs.core.truth_(e2e.feepool.init)?e2e.feepool.init.cljs$lang$test:null)])),new cljs.core.Var(function(){return e2e.feepool.addfees;},new cljs.core.Symbol("e2e.feepool","addfees","e2e.feepool/addfees",(1272785798),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"e2e.feepool","e2e.feepool",(1697291824),null),new cljs.core.Symbol(null,"addfees","addfees",(-1342994870),null),"e2e/feepool.cljs",(17),(1),(57),(57),cljs.core.List.EMPTY,null,(cljs.core.truth_(e2e.feepool.addfees)?e2e.feepool.addfees.cljs$lang$test:null)]))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__194__auto__,env2130,summary2131){
return (function (){
if((env__194__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__194__auto__,env2130,summary2131))
], null));
})());
});})(env2130,summary2131))
,((function (env2130,summary2131){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",(1620675645)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"e2e.feepool","e2e.feepool",(1697291824),null)], null));
});})(env2130,summary2131))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env2130,summary2131){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary2131,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary2131),new cljs.core.Keyword(null,"report-counters","report-counters",(-1702609242)).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env2130,summary2131))
], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env2130,summary2131){
return (function (){
cljs.test.set_env_BANG_.call(null,env2130);

cljs.test.do_report.call(null,cljs.core.deref.call(null,summary2131));

cljs.test.report.call(null,cljs.core.assoc.call(null,cljs.core.deref.call(null,summary2131),new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",(267300563))));

return cljs.test.clear_env_BANG_.call(null);
});})(env2130,summary2131))
], null));
})());
}catch (e2129){if((e2129 instanceof Error)){
var e = e2129;
return cljs.core.prn.call(null,"Error ",e);
} else {
throw e2129;

}
}});

e2e.feepool._main.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
e2e.feepool._main.cljs$lang$applyTo = (function (seq2128){
var self__10327__auto__ = this;
return self__10327__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2128));
});

