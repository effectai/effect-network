goog.provide("e2e.proposals");
e2e.proposals.owner_acc = e2e.token.owner_acc;
e2e.proposals.token_acc = eos_cljs.core.random_account.call(null,"tkn");
e2e.proposals.prop_acc = eos_cljs.core.random_account.call(null,"prop");
e2e.proposals.stake_acc = eos_cljs.core.random_account.call(null,"stk");
e2e.proposals.dao_acc = e2e.dao.dao_acc;
cljs.core.println.call(null,"prop acc = ",e2e.proposals.prop_acc);
cljs.core.println.call(null,"token acc = ",e2e.proposals.token_acc);
cljs.core.println.call(null,"stake acc = ",e2e.proposals.stake_acc);
e2e.proposals.first_cycle_start_time = (1608292800);
e2e.proposals.proposal_cost = "1.0000 EFX";
e2e.proposals.cljs_test_once_fixtures = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"before","before",(-1633692388)),(function (){
if((typeof e2e !== 'undefined') && (typeof e2e.proposals !== 'undefined') && (typeof e2e.proposals.t_e2e$proposals11637 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IFn}
*/
e2e.proposals.t_e2e$proposals11637 = (function (meta11638){
this.meta11638 = meta11638;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
e2e.proposals.t_e2e$proposals11637.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11639,meta11638__$1){
var self__ = this;
var _11639__$1 = this;
return (new e2e.proposals.t_e2e$proposals11637(meta11638__$1));
});

e2e.proposals.t_e2e$proposals11637.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11639){
var self__ = this;
var _11639__$1 = this;
return self__.meta11638;
});

e2e.proposals.t_e2e$proposals11637.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL;

e2e.proposals.t_e2e$proposals11637.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___192__auto__ = self____$1;
var c__19__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19__auto__,___192__auto__,self____$1){
return (function (){
var f__20__auto__ = (function (){var switch__14__auto__ = ((function (c__19__auto__,___192__auto__,self____$1){
return (function (state_11695){
var state_val_11696 = (state_11695[(1)]);
if((state_val_11696 === (1))){
var inst_11641 = eos_cljs.core.create_account.call(null,e2e.proposals.owner_acc,e2e.proposals.prop_acc);
var inst_11642 = cljs.core.async.interop.p__GT_c.call(null,inst_11641);
var state_11695__$1 = state_11695;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11695__$1,(2),inst_11642);
} else {
if((state_val_11696 === (2))){
var inst_11644 = (state_11695[(7)]);
var inst_11644__$1 = (state_11695[(2)]);
var inst_11645 = (inst_11644__$1 instanceof cljs.core.ExceptionInfo);
var inst_11646 = cljs.core.ex_data.call(null,inst_11644__$1);
var inst_11647 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_11646);
var inst_11648 = cljs.core._EQ_.call(null,inst_11647,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_11649 = ((inst_11645) && (inst_11648));
var state_11695__$1 = (function (){var statearr_11697 = state_11695;
(statearr_11697[(7)] = inst_11644__$1);

return statearr_11697;
})();
if(cljs.core.truth_(inst_11649)){
var statearr_11698_11793 = state_11695__$1;
(statearr_11698_11793[(1)] = (3));

} else {
var statearr_11699_11794 = state_11695__$1;
(statearr_11699_11794[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_11696 === (3))){
var inst_11644 = (state_11695[(7)]);
var inst_11651 = (function(){throw inst_11644})();
var state_11695__$1 = state_11695;
var statearr_11700_11795 = state_11695__$1;
(statearr_11700_11795[(2)] = inst_11651);

(statearr_11700_11795[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_11696 === (4))){
var inst_11644 = (state_11695[(7)]);
var state_11695__$1 = state_11695;
var statearr_11701_11796 = state_11695__$1;
(statearr_11701_11796[(2)] = inst_11644);

(statearr_11701_11796[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_11696 === (5))){
var inst_11654 = (state_11695[(2)]);
var inst_11655 = eos_cljs.core.deploy.call(null,e2e.proposals.prop_acc,"contracts/effect-proposals/effect-proposals");
var inst_11656 = cljs.core.async.interop.p__GT_c.call(null,inst_11655);
var state_11695__$1 = (function (){var statearr_11702 = state_11695;
(statearr_11702[(8)] = inst_11654);

return statearr_11702;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11695__$1,(6),inst_11656);
} else {
if((state_val_11696 === (6))){
var inst_11658 = (state_11695[(9)]);
var inst_11658__$1 = (state_11695[(2)]);
var inst_11659 = (inst_11658__$1 instanceof cljs.core.ExceptionInfo);
var inst_11660 = cljs.core.ex_data.call(null,inst_11658__$1);
var inst_11661 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_11660);
var inst_11662 = cljs.core._EQ_.call(null,inst_11661,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_11663 = ((inst_11659) && (inst_11662));
var state_11695__$1 = (function (){var statearr_11703 = state_11695;
(statearr_11703[(9)] = inst_11658__$1);

return statearr_11703;
})();
if(cljs.core.truth_(inst_11663)){
var statearr_11704_11797 = state_11695__$1;
(statearr_11704_11797[(1)] = (7));

} else {
var statearr_11705_11798 = state_11695__$1;
(statearr_11705_11798[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_11696 === (7))){
var inst_11658 = (state_11695[(9)]);
var inst_11665 = (function(){throw inst_11658})();
var state_11695__$1 = state_11695;
var statearr_11706_11799 = state_11695__$1;
(statearr_11706_11799[(2)] = inst_11665);

(statearr_11706_11799[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_11696 === (8))){
var inst_11658 = (state_11695[(9)]);
var state_11695__$1 = state_11695;
var statearr_11707_11800 = state_11695__$1;
(statearr_11707_11800[(2)] = inst_11658);

(statearr_11707_11800[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_11696 === (9))){
var inst_11668 = (state_11695[(2)]);
var inst_11669 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11670 = [e2e.proposals.owner_acc,e2e.proposals.token_acc];
var inst_11671 = (new cljs.core.PersistentVector(null,(2),(5),inst_11669,inst_11670,null));
var inst_11672 = e2e.token.deploy_token.call(null,e2e.proposals.token_acc,inst_11671);
var state_11695__$1 = (function (){var statearr_11708 = state_11695;
(statearr_11708[(10)] = inst_11668);

return statearr_11708;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11695__$1,(10),inst_11672);
} else {
if((state_val_11696 === (10))){
var inst_11674 = (state_11695[(2)]);
var inst_11675 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11676 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11677 = [e2e.proposals.owner_acc,"1056569.0000 EFX","37276.0000 NFX"];
var inst_11678 = (new cljs.core.PersistentVector(null,(3),(5),inst_11676,inst_11677,null));
var inst_11679 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11680 = [e2e.proposals.token_acc,"606645.0000 EFX","24042.0000 NFX"];
var inst_11681 = (new cljs.core.PersistentVector(null,(3),(5),inst_11679,inst_11680,null));
var inst_11682 = [inst_11678,inst_11681];
var inst_11683 = (new cljs.core.PersistentVector(null,(2),(5),inst_11675,inst_11682,null));
var inst_11684 = e2e.stake.deploy_stake.call(null,e2e.proposals.stake_acc,e2e.proposals.token_acc,"4,EFX","4,NFX",inst_11683);
var state_11695__$1 = (function (){var statearr_11709 = state_11695;
(statearr_11709[(11)] = inst_11674);

return statearr_11709;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11695__$1,(11),inst_11684);
} else {
if((state_val_11696 === (11))){
var inst_11686 = (state_11695[(2)]);
var inst_11687 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11688 = [e2e.proposals.owner_acc,e2e.proposals.token_acc];
var inst_11689 = (new cljs.core.PersistentVector(null,(2),(5),inst_11687,inst_11688,null));
var inst_11690 = e2e.dao.deploy_dao.call(null,e2e.proposals.dao_acc,e2e.proposals.stake_acc,e2e.proposals.prop_acc,e2e.proposals.token_acc,"4,EFX","4,NFX",inst_11689);
var state_11695__$1 = (function (){var statearr_11710 = state_11695;
(statearr_11710[(12)] = inst_11686);

return statearr_11710;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11695__$1,(12),inst_11690);
} else {
if((state_val_11696 === (12))){
var inst_11692 = (state_11695[(2)]);
var inst_11693 = done.call(null);
var state_11695__$1 = (function (){var statearr_11711 = state_11695;
(statearr_11711[(13)] = inst_11692);

return statearr_11711;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11695__$1,inst_11693);
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
});})(c__19__auto__,___192__auto__,self____$1))
;
return ((function (switch__14__auto__,c__19__auto__,___192__auto__,self____$1){
return (function() {
var e2e$proposals$state_machine__15__auto__ = null;
var e2e$proposals$state_machine__15__auto____0 = (function (){
var statearr_11712 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11712[(0)] = e2e$proposals$state_machine__15__auto__);

(statearr_11712[(1)] = (1));

return statearr_11712;
});
var e2e$proposals$state_machine__15__auto____1 = (function (state_11695){
while(true){
var ret_value__16__auto__ = (function (){try{while(true){
var result__17__auto__ = switch__14__auto__.call(null,state_11695);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__17__auto__;
}
break;
}
}catch (e11713){var ex__18__auto__ = e11713;
var statearr_11714_11801 = state_11695;
(statearr_11714_11801[(2)] = ex__18__auto__);


if(cljs.core.seq.call(null,(state_11695[(4)]))){
var statearr_11715_11802 = state_11695;
(statearr_11715_11802[(1)] = cljs.core.first.call(null,(state_11695[(4)])));

} else {
throw ex__18__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__11803 = state_11695;
state_11695 = G__11803;
continue;
} else {
return ret_value__16__auto__;
}
break;
}
});
e2e$proposals$state_machine__15__auto__ = function(state_11695){
switch(arguments.length){
case 0:
return e2e$proposals$state_machine__15__auto____0.call(this);
case 1:
return e2e$proposals$state_machine__15__auto____1.call(this,state_11695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
e2e$proposals$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$0 = e2e$proposals$state_machine__15__auto____0;
e2e$proposals$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$1 = e2e$proposals$state_machine__15__auto____1;
return e2e$proposals$state_machine__15__auto__;
})()
;})(switch__14__auto__,c__19__auto__,___192__auto__,self____$1))
})();
var state__21__auto__ = (function (){var statearr_11716 = f__20__auto__.call(null);
(statearr_11716[(6)] = c__19__auto__);

return statearr_11716;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21__auto__);
});})(c__19__auto__,___192__auto__,self____$1))
);

return c__19__auto__;
});

e2e.proposals.t_e2e$proposals11637.prototype.apply = (function (self__,args11640){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args11640)));
});

e2e.proposals.t_e2e$proposals11637.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___192__auto__ = this;
var c__19__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19__auto__,___192__auto__){
return (function (){
var f__20__auto__ = (function (){var switch__14__auto__ = ((function (c__19__auto__,___192__auto__){
return (function (state_11771){
var state_val_11772 = (state_11771[(1)]);
if((state_val_11772 === (1))){
var inst_11717 = eos_cljs.core.create_account.call(null,e2e.proposals.owner_acc,e2e.proposals.prop_acc);
var inst_11718 = cljs.core.async.interop.p__GT_c.call(null,inst_11717);
var state_11771__$1 = state_11771;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11771__$1,(2),inst_11718);
} else {
if((state_val_11772 === (2))){
var inst_11720 = (state_11771[(7)]);
var inst_11720__$1 = (state_11771[(2)]);
var inst_11721 = (inst_11720__$1 instanceof cljs.core.ExceptionInfo);
var inst_11722 = cljs.core.ex_data.call(null,inst_11720__$1);
var inst_11723 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_11722);
var inst_11724 = cljs.core._EQ_.call(null,inst_11723,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_11725 = ((inst_11721) && (inst_11724));
var state_11771__$1 = (function (){var statearr_11773 = state_11771;
(statearr_11773[(7)] = inst_11720__$1);

return statearr_11773;
})();
if(cljs.core.truth_(inst_11725)){
var statearr_11774_11804 = state_11771__$1;
(statearr_11774_11804[(1)] = (3));

} else {
var statearr_11775_11805 = state_11771__$1;
(statearr_11775_11805[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_11772 === (3))){
var inst_11720 = (state_11771[(7)]);
var inst_11727 = (function(){throw inst_11720})();
var state_11771__$1 = state_11771;
var statearr_11776_11806 = state_11771__$1;
(statearr_11776_11806[(2)] = inst_11727);

(statearr_11776_11806[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_11772 === (4))){
var inst_11720 = (state_11771[(7)]);
var state_11771__$1 = state_11771;
var statearr_11777_11807 = state_11771__$1;
(statearr_11777_11807[(2)] = inst_11720);

(statearr_11777_11807[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_11772 === (5))){
var inst_11730 = (state_11771[(2)]);
var inst_11731 = eos_cljs.core.deploy.call(null,e2e.proposals.prop_acc,"contracts/effect-proposals/effect-proposals");
var inst_11732 = cljs.core.async.interop.p__GT_c.call(null,inst_11731);
var state_11771__$1 = (function (){var statearr_11778 = state_11771;
(statearr_11778[(8)] = inst_11730);

return statearr_11778;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11771__$1,(6),inst_11732);
} else {
if((state_val_11772 === (6))){
var inst_11734 = (state_11771[(9)]);
var inst_11734__$1 = (state_11771[(2)]);
var inst_11735 = (inst_11734__$1 instanceof cljs.core.ExceptionInfo);
var inst_11736 = cljs.core.ex_data.call(null,inst_11734__$1);
var inst_11737 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_11736);
var inst_11738 = cljs.core._EQ_.call(null,inst_11737,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_11739 = ((inst_11735) && (inst_11738));
var state_11771__$1 = (function (){var statearr_11779 = state_11771;
(statearr_11779[(9)] = inst_11734__$1);

return statearr_11779;
})();
if(cljs.core.truth_(inst_11739)){
var statearr_11780_11808 = state_11771__$1;
(statearr_11780_11808[(1)] = (7));

} else {
var statearr_11781_11809 = state_11771__$1;
(statearr_11781_11809[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_11772 === (7))){
var inst_11734 = (state_11771[(9)]);
var inst_11741 = (function(){throw inst_11734})();
var state_11771__$1 = state_11771;
var statearr_11782_11810 = state_11771__$1;
(statearr_11782_11810[(2)] = inst_11741);

(statearr_11782_11810[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_11772 === (8))){
var inst_11734 = (state_11771[(9)]);
var state_11771__$1 = state_11771;
var statearr_11783_11811 = state_11771__$1;
(statearr_11783_11811[(2)] = inst_11734);

(statearr_11783_11811[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_11772 === (9))){
var inst_11744 = (state_11771[(2)]);
var inst_11745 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11746 = [e2e.proposals.owner_acc,e2e.proposals.token_acc];
var inst_11747 = (new cljs.core.PersistentVector(null,(2),(5),inst_11745,inst_11746,null));
var inst_11748 = e2e.token.deploy_token.call(null,e2e.proposals.token_acc,inst_11747);
var state_11771__$1 = (function (){var statearr_11784 = state_11771;
(statearr_11784[(10)] = inst_11744);

return statearr_11784;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11771__$1,(10),inst_11748);
} else {
if((state_val_11772 === (10))){
var inst_11750 = (state_11771[(2)]);
var inst_11751 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11752 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11753 = [e2e.proposals.owner_acc,"1056569.0000 EFX","37276.0000 NFX"];
var inst_11754 = (new cljs.core.PersistentVector(null,(3),(5),inst_11752,inst_11753,null));
var inst_11755 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11756 = [e2e.proposals.token_acc,"606645.0000 EFX","24042.0000 NFX"];
var inst_11757 = (new cljs.core.PersistentVector(null,(3),(5),inst_11755,inst_11756,null));
var inst_11758 = [inst_11754,inst_11757];
var inst_11759 = (new cljs.core.PersistentVector(null,(2),(5),inst_11751,inst_11758,null));
var inst_11760 = e2e.stake.deploy_stake.call(null,e2e.proposals.stake_acc,e2e.proposals.token_acc,"4,EFX","4,NFX",inst_11759);
var state_11771__$1 = (function (){var statearr_11785 = state_11771;
(statearr_11785[(11)] = inst_11750);

return statearr_11785;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11771__$1,(11),inst_11760);
} else {
if((state_val_11772 === (11))){
var inst_11762 = (state_11771[(2)]);
var inst_11763 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11764 = [e2e.proposals.owner_acc,e2e.proposals.token_acc];
var inst_11765 = (new cljs.core.PersistentVector(null,(2),(5),inst_11763,inst_11764,null));
var inst_11766 = e2e.dao.deploy_dao.call(null,e2e.proposals.dao_acc,e2e.proposals.stake_acc,e2e.proposals.prop_acc,e2e.proposals.token_acc,"4,EFX","4,NFX",inst_11765);
var state_11771__$1 = (function (){var statearr_11786 = state_11771;
(statearr_11786[(12)] = inst_11762);

return statearr_11786;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11771__$1,(12),inst_11766);
} else {
if((state_val_11772 === (12))){
var inst_11768 = (state_11771[(2)]);
var inst_11769 = done.call(null);
var state_11771__$1 = (function (){var statearr_11787 = state_11771;
(statearr_11787[(13)] = inst_11768);

return statearr_11787;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11771__$1,inst_11769);
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
});})(c__19__auto__,___192__auto__))
;
return ((function (switch__14__auto__,c__19__auto__,___192__auto__){
return (function() {
var e2e$proposals$state_machine__15__auto__ = null;
var e2e$proposals$state_machine__15__auto____0 = (function (){
var statearr_11788 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11788[(0)] = e2e$proposals$state_machine__15__auto__);

(statearr_11788[(1)] = (1));

return statearr_11788;
});
var e2e$proposals$state_machine__15__auto____1 = (function (state_11771){
while(true){
var ret_value__16__auto__ = (function (){try{while(true){
var result__17__auto__ = switch__14__auto__.call(null,state_11771);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__17__auto__;
}
break;
}
}catch (e11789){var ex__18__auto__ = e11789;
var statearr_11790_11812 = state_11771;
(statearr_11790_11812[(2)] = ex__18__auto__);


if(cljs.core.seq.call(null,(state_11771[(4)]))){
var statearr_11791_11813 = state_11771;
(statearr_11791_11813[(1)] = cljs.core.first.call(null,(state_11771[(4)])));

} else {
throw ex__18__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__11814 = state_11771;
state_11771 = G__11814;
continue;
} else {
return ret_value__16__auto__;
}
break;
}
});
e2e$proposals$state_machine__15__auto__ = function(state_11771){
switch(arguments.length){
case 0:
return e2e$proposals$state_machine__15__auto____0.call(this);
case 1:
return e2e$proposals$state_machine__15__auto____1.call(this,state_11771);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
e2e$proposals$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$0 = e2e$proposals$state_machine__15__auto____0;
e2e$proposals$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$1 = e2e$proposals$state_machine__15__auto____1;
return e2e$proposals$state_machine__15__auto__;
})()
;})(switch__14__auto__,c__19__auto__,___192__auto__))
})();
var state__21__auto__ = (function (){var statearr_11792 = f__20__auto__.call(null);
(statearr_11792[(6)] = c__19__auto__);

return statearr_11792;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21__auto__);
});})(c__19__auto__,___192__auto__))
);

return c__19__auto__;
});

e2e.proposals.t_e2e$proposals11637.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta11638","meta11638",(-698427770),null)], null);
});

e2e.proposals.t_e2e$proposals11637.cljs$lang$type = true;

e2e.proposals.t_e2e$proposals11637.cljs$lang$ctorStr = "e2e.proposals/t_e2e$proposals11637";

e2e.proposals.t_e2e$proposals11637.cljs$lang$ctorPrWriter = (function (this__9776__auto__,writer__9777__auto__,opt__9778__auto__){
return cljs.core._write.call(null,writer__9777__auto__,"e2e.proposals/t_e2e$proposals11637");
});

/**
 * Positional factory function for e2e.proposals/t_e2e$proposals11637.
 */
e2e.proposals.__GT_t_e2e$proposals11637 = (function e2e$proposals$__GT_t_e2e$proposals11637(meta11638){
return (new e2e.proposals.t_e2e$proposals11637(meta11638));
});

}

return (new e2e.proposals.t_e2e$proposals11637(null));
}),new cljs.core.Keyword(null,"after","after",(594996914)),(function (){
return null;
})], null)], null);
e2e.proposals.prop_config = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"cycle_duration_sec","cycle_duration_sec",(2139129571)),(1209600),new cljs.core.Keyword(null,"quorum","quorum",(-1933541141)),(12),new cljs.core.Keyword(null,"cycle_voting_duration_sec","cycle_voting_duration_sec",(-1056353816)),(0),new cljs.core.Keyword(null,"proposal_cost","proposal_cost",(1707335169)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"quantity","quantity",(-1929050694)),e2e.proposals.proposal_cost,new cljs.core.Keyword(null,"contract","contract",(798152745)),e2e.proposals.token_acc], null),new cljs.core.Keyword(null,"dao_contract","dao_contract",(-366781739)),e2e.proposals.dao_acc,new cljs.core.Keyword(null,"first_cycle_start_time","first_cycle_start_time",(-611660854)),"2020-11-18 12:00:00"], null);
e2e.proposals.init = (function e2e$proposals$init(){
return cljs.test.test_var.call(null,e2e.proposals.init.cljs$lang$var);
});
e2e.proposals.init.cljs$lang$test = (function (){
if((typeof e2e !== 'undefined') && (typeof e2e.proposals !== 'undefined') && (typeof e2e.proposals.t_e2e$proposals11815 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IFn}
*/
e2e.proposals.t_e2e$proposals11815 = (function (meta11816){
this.meta11816 = meta11816;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
e2e.proposals.t_e2e$proposals11815.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11817,meta11816__$1){
var self__ = this;
var _11817__$1 = this;
return (new e2e.proposals.t_e2e$proposals11815(meta11816__$1));
});

e2e.proposals.t_e2e$proposals11815.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11817){
var self__ = this;
var _11817__$1 = this;
return self__.meta11816;
});

e2e.proposals.t_e2e$proposals11815.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL;

e2e.proposals.t_e2e$proposals11815.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___192__auto__ = self____$1;
var c__19__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19__auto__,___192__auto__,self____$1){
return (function (){
var f__20__auto__ = (function (){var switch__14__auto__ = ((function (c__19__auto__,___192__auto__,self____$1){
return (function (state_12106){
var state_val_12107 = (state_12106[(1)]);
if((state_val_12107 === (32))){
var inst_11924 = (state_12106[(2)]);
var state_12106__$1 = state_12106;
var statearr_12108_12719 = state_12106__$1;
(statearr_12108_12719[(2)] = inst_11924);

(statearr_12108_12719[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12107 === (64))){
var inst_12036 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_12037 = true;
var inst_12038 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can update after init",inst_12037,true];
var inst_12039 = cljs.core.PersistentHashMap.fromArrays(inst_12036,inst_12038);
var inst_12040 = cljs.test.do_report.call(null,inst_12039);
var state_12106__$1 = state_12106;
var statearr_12109_12720 = state_12106__$1;
(statearr_12109_12720[(2)] = inst_12040);

(statearr_12109_12720[(1)] = (65));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12107 === (1))){
var state_12106__$1 = state_12106;
var statearr_12110_12721 = state_12106__$1;
(statearr_12110_12721[(2)] = null);

(statearr_12110_12721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12107 === (33))){
var inst_11907 = (state_12106[(2)]);
var inst_11908 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_11909 = null;
var inst_11910 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can init",inst_11909,inst_11907];
var inst_11911 = cljs.core.PersistentHashMap.fromArrays(inst_11908,inst_11910);
var inst_11912 = cljs.test.do_report.call(null,inst_11911);
var state_12106__$1 = state_12106;
var statearr_12111_12722 = state_12106__$1;
(statearr_12111_12722[(2)] = inst_11912);

(statearr_12111_12722[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12107 === (65))){
var inst_12042 = (state_12106[(2)]);
var _ = (function (){var statearr_12113 = state_12106;
(statearr_12113[(4)] = cljs.core.rest.call(null,(state_12106[(4)])));

return statearr_12113;
})();
var state_12106__$1 = (function (){var statearr_12114 = state_12106;
(statearr_12114[(7)] = inst_12042);

return statearr_12114;
})();
var statearr_12115_12723 = state_12106__$1;
(statearr_12115_12723[(2)] = true);

(statearr_12115_12723[(1)] = (60));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12107 === (2))){
var _ = (function (){var statearr_12116 = state_12106;
(statearr_12116[(4)] = cljs.core.cons.call(null,(5),(state_12106[(4)])));

return statearr_12116;
})();
var state_12106__$1 = state_12106;
var statearr_12117_12724 = state_12106__$1;
(statearr_12117_12724[(2)] = null);

(statearr_12117_12724[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12107 === (34))){
var _ = (function (){var statearr_12118 = state_12106;
(statearr_12118[(4)] = cljs.core.rest.call(null,(state_12106[(4)])));

return statearr_12118;
})();
var state_12106__$1 = state_12106;
var ex12112 = (state_12106__$1[(2)]);
var statearr_12119_12725 = state_12106__$1;
(statearr_12119_12725[(5)] = ex12112);


var statearr_12120_12726 = state_12106__$1;
(statearr_12120_12726[(1)] = (33));

(statearr_12120_12726[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12107 === (66))){
var inst_12052 = (state_12106[(8)]);
var inst_12052__$1 = (state_12106[(2)]);
var inst_12053 = (inst_12052__$1 instanceof cljs.core.ExceptionInfo);
var inst_12054 = cljs.core.ex_data.call(null,inst_12052__$1);
var inst_12055 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_12054);
var inst_12056 = cljs.core._EQ_.call(null,inst_12055,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_12057 = ((inst_12053) && (inst_12056));
var state_12106__$1 = (function (){var statearr_12122 = state_12106;
(statearr_12122[(8)] = inst_12052__$1);

return statearr_12122;
})();
if(cljs.core.truth_(inst_12057)){
var statearr_12123_12727 = state_12106__$1;
(statearr_12123_12727[(1)] = (67));

} else {
var statearr_12124_12728 = state_12106__$1;
(statearr_12124_12728[(1)] = (68));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12107 === (3))){
var inst_12103 = (state_12106[(2)]);
var inst_12104 = done.call(null);
var state_12106__$1 = (function (){var statearr_12125 = state_12106;
(statearr_12125[(9)] = inst_12103);

return statearr_12125;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12106__$1,inst_12104);
} else {
if((state_val_12107 === (35))){
var _ = (function (){var statearr_12126 = state_12106;
(statearr_12126[(4)] = cljs.core.rest.call(null,(state_12106[(4)])));

return statearr_12126;
})();
var state_12106__$1 = state_12106;
var ex12121 = (state_12106__$1[(2)]);
var statearr_12127_12729 = state_12106__$1;
(statearr_12127_12729[(5)] = ex12121);


if((ex12121 instanceof Error)){
var statearr_12128_12730 = state_12106__$1;
(statearr_12128_12730[(1)] = (30));

(statearr_12128_12730[(5)] = null);

} else {
throw ex12121;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12107 === (67))){
var inst_12052 = (state_12106[(8)]);
var inst_12059 = (function(){throw inst_12052})();
var state_12106__$1 = state_12106;
var statearr_12129_12731 = state_12106__$1;
(statearr_12129_12731[(2)] = inst_12059);

(statearr_12129_12731[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12107 === (4))){
var inst_11819 = (state_12106[(2)]);
var inst_11820 = cljs.core.prn.call(null,"======== ",inst_11819);
var state_12106__$1 = state_12106;
var statearr_12130_12732 = state_12106__$1;
(statearr_12130_12732[(2)] = inst_11820);

(statearr_12130_12732[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12107 === (36))){
var inst_11933 = (state_12106[(10)]);
var inst_11933__$1 = (state_12106[(2)]);
var inst_11934 = (inst_11933__$1 instanceof cljs.core.ExceptionInfo);
var inst_11935 = cljs.core.ex_data.call(null,inst_11933__$1);
var inst_11936 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_11935);
var inst_11937 = cljs.core._EQ_.call(null,inst_11936,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_11938 = ((inst_11934) && (inst_11937));
var state_12106__$1 = (function (){var statearr_12132 = state_12106;
(statearr_12132[(10)] = inst_11933__$1);

return statearr_12132;
})();
if(cljs.core.truth_(inst_11938)){
var statearr_12133_12733 = state_12106__$1;
(statearr_12133_12733[(1)] = (37));

} else {
var statearr_12134_12734 = state_12106__$1;
(statearr_12134_12734[(1)] = (38));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12107 === (68))){
var inst_12052 = (state_12106[(8)]);
var state_12106__$1 = state_12106;
var statearr_12135_12735 = state_12106__$1;
(statearr_12135_12735[(2)] = inst_12052);

(statearr_12135_12735[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12107 === (5))){
var _ = (function (){var statearr_12136 = state_12106;
(statearr_12136[(4)] = cljs.core.rest.call(null,(state_12106[(4)])));

return statearr_12136;
})();
var state_12106__$1 = state_12106;
var ex12131 = (state_12106__$1[(2)]);
var statearr_12137_12736 = state_12106__$1;
(statearr_12137_12736[(5)] = ex12131);


if((ex12131 instanceof Error)){
var statearr_12138_12737 = state_12106__$1;
(statearr_12138_12737[(1)] = (4));

(statearr_12138_12737[(5)] = null);

} else {
throw ex12131;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12107 === (37))){
var inst_11933 = (state_12106[(10)]);
var inst_11940 = (function(){throw inst_11933})();
var state_12106__$1 = state_12106;
var statearr_12139_12738 = state_12106__$1;
(statearr_12139_12738[(2)] = inst_11940);

(statearr_12139_12738[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12107 === (69))){
var inst_12062 = (state_12106[(2)]);
var state_12106__$1 = (function (){var statearr_12140 = state_12106;
(statearr_12140[(11)] = inst_12062);

return statearr_12140;
})();
var statearr_12141_12739 = state_12106__$1;
(statearr_12141_12739[(2)] = null);

(statearr_12141_12739[(1)] = (70));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12107 === (6))){
var _ = (function (){var statearr_12142 = state_12106;
(statearr_12142[(4)] = cljs.core.cons.call(null,(19),(state_12106[(4)])));

return statearr_12142;
})();
var inst_11870 = eos_cljs.core.transact.call(null,e2e.proposals.prop_acc,"update",e2e.proposals.prop_config);
var inst_11871 = cljs.core.async.interop.p__GT_c.call(null,inst_11870);
var state_12106__$1 = state_12106;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12106__$1,(20),inst_11871);
} else {
if((state_val_12107 === (38))){
var inst_11933 = (state_12106[(10)]);
var state_12106__$1 = state_12106;
var statearr_12143_12740 = state_12106__$1;
(statearr_12143_12740[(2)] = inst_11933);

(statearr_12143_12740[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12107 === (70))){
var inst_12062 = (state_12106[(11)]);
var inst_12076 = (state_12106[(12)]);
var inst_12077 = (state_12106[(13)]);
var _ = (function (){var statearr_12144 = state_12106;
(statearr_12144[(4)] = cljs.core.cons.call(null,(73),(state_12106[(4)])));

return statearr_12144;
})();
var inst_12074 = cljs.core.count.call(null,inst_12062);
var inst_12075 = (new cljs.core.List(null,(1),null,(1),null));
var inst_12076__$1 = (new cljs.core.List(null,inst_12074,inst_12075,(2),null));
var inst_12077__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_12076__$1);
var state_12106__$1 = (function (){var statearr_12145 = state_12106;
(statearr_12145[(12)] = inst_12076__$1);

(statearr_12145[(13)] = inst_12077__$1);

return statearr_12145;
})();
if(cljs.core.truth_(inst_12077__$1)){
var statearr_12146_12741 = state_12106__$1;
(statearr_12146_12741[(1)] = (74));

} else {
var statearr_12147_12742 = state_12106__$1;
(statearr_12147_12742[(1)] = (75));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12107 === (7))){
var inst_11904 = (state_12106[(2)]);
var state_12106__$1 = (function (){var statearr_12148 = state_12106;
(statearr_12148[(14)] = inst_11904);

return statearr_12148;
})();
var statearr_12149_12743 = state_12106__$1;
(statearr_12149_12743[(2)] = null);

(statearr_12149_12743[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12107 === (39))){
var inst_11943 = (state_12106[(2)]);
var state_12106__$1 = (function (){var statearr_12150 = state_12106;
(statearr_12150[(15)] = inst_11943);

return statearr_12150;
})();
var statearr_12151_12744 = state_12106__$1;
(statearr_12151_12744[(2)] = null);

(statearr_12151_12744[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12107 === (71))){
var inst_12100 = (state_12106[(2)]);
var _ = (function (){var statearr_12152 = state_12106;
(statearr_12152[(4)] = cljs.core.rest.call(null,(state_12106[(4)])));

return statearr_12152;
})();
var state_12106__$1 = state_12106;
var statearr_12153_12745 = state_12106__$1;
(statearr_12153_12745[(2)] = inst_12100);

(statearr_12153_12745[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12107 === (8))){
var inst_11828 = (state_12106[(16)]);
var inst_11829 = (state_12106[(17)]);
var inst_11826 = (state_12106[(2)]);
var inst_11827 = inst_11826.cause;
var inst_11828__$1 = inst_11827.message;
var inst_11829__$1 = clojure.string.ends_with_QMARK_.call(null,inst_11828__$1,"not yet initialized");
var inst_11830 = (!(inst_11829__$1));
var state_12106__$1 = (function (){var statearr_12154 = state_12106;
(statearr_12154[(16)] = inst_11828__$1);

(statearr_12154[(17)] = inst_11829__$1);

return statearr_12154;
})();
if(inst_11830){
var statearr_12155_12746 = state_12106__$1;
(statearr_12155_12746[(1)] = (9));

} else {
var statearr_12156_12747 = state_12106__$1;
(statearr_12156_12747[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12107 === (40))){
var _ = (function (){var statearr_12157 = state_12106;
(statearr_12157[(4)] = cljs.core.cons.call(null,(43),(state_12106[(4)])));

return statearr_12157;
})();
var state_12106__$1 = state_12106;
var statearr_12158_12748 = state_12106__$1;
(statearr_12158_12748[(1)] = (44));



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12107 === (72))){
var inst_12063 = (state_12106[(2)]);
var inst_12064 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_12065 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"count","count",(-514511684),null),new cljs.core.Symbol(null,"rows","rows",(-1804386089),null)),(1));
var inst_12066 = [new cljs.core.Keyword(null,"error","error",(-978969032)),null,inst_12065,inst_12063];
var inst_12067 = cljs.core.PersistentHashMap.fromArrays(inst_12064,inst_12066);
var inst_12068 = cljs.test.do_report.call(null,inst_12067);
var state_12106__$1 = state_12106;
var statearr_12160_12749 = state_12106__$1;
(statearr_12160_12749[(2)] = inst_12068);

(statearr_12160_12749[(1)] = (71));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12107 === (9))){
var inst_11828 = (state_12106[(16)]);
var inst_11832 = ["expected =","not yet initialized"," actual = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_11828)].join('');
var inst_11833 = cljs.core.prn.call(null,inst_11832);
var state_12106__$1 = state_12106;
var statearr_12162_12750 = state_12106__$1;
(statearr_12162_12750[(2)] = inst_11833);

(statearr_12162_12750[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12107 === (41))){
var inst_11971 = (state_12106[(2)]);
var _ = (function (){var statearr_12163 = state_12106;
(statearr_12163[(4)] = cljs.core.rest.call(null,(state_12106[(4)])));

return statearr_12163;
})();
var state_12106__$1 = state_12106;
var statearr_12164_12751 = state_12106__$1;
(statearr_12164_12751[(2)] = inst_11971);

(statearr_12164_12751[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12107 === (73))){
var _ = (function (){var statearr_12165 = state_12106;
(statearr_12165[(4)] = cljs.core.rest.call(null,(state_12106[(4)])));

return statearr_12165;
})();
var state_12106__$1 = state_12106;
var ex12161 = (state_12106__$1[(2)]);
var statearr_12166_12752 = state_12106__$1;
(statearr_12166_12752[(5)] = ex12161);


var statearr_12167_12753 = state_12106__$1;
(statearr_12167_12753[(1)] = (72));

(statearr_12167_12753[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12107 === (10))){
var state_12106__$1 = state_12106;
var statearr_12168_12754 = state_12106__$1;
(statearr_12168_12754[(2)] = null);

(statearr_12168_12754[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12107 === (42))){
var inst_11944 = (state_12106[(2)]);
var inst_11945 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_11946 = true;
var inst_11947 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can init",inst_11946,inst_11944];
var inst_11948 = cljs.core.PersistentHashMap.fromArrays(inst_11945,inst_11947);
var inst_11949 = cljs.test.do_report.call(null,inst_11948);
var state_12106__$1 = state_12106;
var statearr_12169_12755 = state_12106__$1;
(statearr_12169_12755[(2)] = inst_11949);

(statearr_12169_12755[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12107 === (74))){
var inst_12076 = (state_12106[(12)]);
var inst_12079 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_12080 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"count","count",(-514511684),null),new cljs.core.Symbol(null,"rows","rows",(-1804386089),null)),(1));
var inst_12081 = cljs.core.cons.call(null,cljs.core._EQ_,inst_12076);
var inst_12082 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),null,inst_12080,inst_12081];
var inst_12083 = cljs.core.PersistentHashMap.fromArrays(inst_12079,inst_12082);
var inst_12084 = cljs.test.do_report.call(null,inst_12083);
var state_12106__$1 = state_12106;
var statearr_12171_12756 = state_12106__$1;
(statearr_12171_12756[(2)] = inst_12084);

(statearr_12171_12756[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12107 === (11))){
var inst_11836 = (state_12106[(2)]);
var state_12106__$1 = (function (){var statearr_12172 = state_12106;
(statearr_12172[(18)] = inst_11836);

return statearr_12172;
})();
var statearr_12173_12757 = state_12106__$1;
(statearr_12173_12757[(2)] = null);

(statearr_12173_12757[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12107 === (43))){
var _ = (function (){var statearr_12174 = state_12106;
(statearr_12174[(4)] = cljs.core.rest.call(null,(state_12106[(4)])));

return statearr_12174;
})();
var state_12106__$1 = state_12106;
var ex12170 = (state_12106__$1[(2)]);
var statearr_12175_12758 = state_12106__$1;
(statearr_12175_12758[(5)] = ex12170);


var statearr_12176_12759 = state_12106__$1;
(statearr_12176_12759[(1)] = (42));

(statearr_12176_12759[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12107 === (75))){
var inst_12076 = (state_12106[(12)]);
var inst_12086 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_12087 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"count","count",(-514511684),null),new cljs.core.Symbol(null,"rows","rows",(-1804386089),null)),(1));
var inst_12088 = new cljs.core.Symbol(null,"not","not",(1044554643),null);
var inst_12089 = new cljs.core.Symbol(null,"=","=",(-1501502141),null);
var inst_12090 = cljs.core.cons.call(null,inst_12089,inst_12076);
var inst_12091 = (new cljs.core.List(null,inst_12090,null,(1),null));
var inst_12092 = (new cljs.core.List(null,inst_12088,inst_12091,(2),null));
var inst_12093 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),null,inst_12087,inst_12092];
var inst_12094 = cljs.core.PersistentHashMap.fromArrays(inst_12086,inst_12093);
var inst_12095 = cljs.test.do_report.call(null,inst_12094);
var state_12106__$1 = state_12106;
var statearr_12177_12760 = state_12106__$1;
(statearr_12177_12760[(2)] = inst_12095);

(statearr_12177_12760[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12107 === (12))){
var inst_11829 = (state_12106[(17)]);
var _ = (function (){var statearr_12178 = state_12106;
(statearr_12178[(4)] = cljs.core.cons.call(null,(15),(state_12106[(4)])));

return statearr_12178;
})();
var state_12106__$1 = state_12106;
if(cljs.core.truth_(inst_11829)){
var statearr_12179_12761 = state_12106__$1;
(statearr_12179_12761[(1)] = (16));

} else {
var statearr_12180_12762 = state_12106__$1;
(statearr_12180_12762[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12107 === (44))){
var inst_11956 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_11957 = true;
var inst_11958 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"can init",inst_11957,true];
var inst_11959 = cljs.core.PersistentHashMap.fromArrays(inst_11956,inst_11958);
var inst_11960 = cljs.test.do_report.call(null,inst_11959);
var state_12106__$1 = state_12106;
var statearr_12181_12763 = state_12106__$1;
(statearr_12181_12763[(2)] = inst_11960);

(statearr_12181_12763[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12107 === (76))){
var inst_12077 = (state_12106[(13)]);
var inst_12097 = (state_12106[(2)]);
var _ = (function (){var statearr_12182 = state_12106;
(statearr_12182[(4)] = cljs.core.rest.call(null,(state_12106[(4)])));

return statearr_12182;
})();
var state_12106__$1 = (function (){var statearr_12183 = state_12106;
(statearr_12183[(19)] = inst_12097);

return statearr_12183;
})();
var statearr_12184_12764 = state_12106__$1;
(statearr_12184_12764[(2)] = inst_12077);

(statearr_12184_12764[(1)] = (71));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12107 === (13))){
var inst_11864 = (state_12106[(2)]);
var state_12106__$1 = state_12106;
var statearr_12185_12765 = state_12106__$1;
(statearr_12185_12765[(2)] = inst_11864);

(statearr_12185_12765[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12107 === (45))){
var inst_11962 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_11963 = true;
var inst_11964 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can init",inst_11963,true];
var inst_11965 = cljs.core.PersistentHashMap.fromArrays(inst_11962,inst_11964);
var inst_11966 = cljs.test.do_report.call(null,inst_11965);
var state_12106__$1 = state_12106;
var statearr_12186_12766 = state_12106__$1;
(statearr_12186_12766[(2)] = inst_11966);

(statearr_12186_12766[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12107 === (14))){
var inst_11837 = (state_12106[(2)]);
var inst_11838 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_11839 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_11840 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"need init to update",inst_11839,inst_11837];
var inst_11841 = cljs.core.PersistentHashMap.fromArrays(inst_11838,inst_11840);
var inst_11842 = cljs.test.do_report.call(null,inst_11841);
var state_12106__$1 = state_12106;
var statearr_12188_12767 = state_12106__$1;
(statearr_12188_12767[(2)] = inst_11842);

(statearr_12188_12767[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12107 === (46))){
var inst_11968 = (state_12106[(2)]);
var _ = (function (){var statearr_12189 = state_12106;
(statearr_12189[(4)] = cljs.core.rest.call(null,(state_12106[(4)])));

return statearr_12189;
})();
var state_12106__$1 = (function (){var statearr_12190 = state_12106;
(statearr_12190[(20)] = inst_11968);

return statearr_12190;
})();
var statearr_12191_12768 = state_12106__$1;
(statearr_12191_12768[(2)] = true);

(statearr_12191_12768[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12107 === (15))){
var _ = (function (){var statearr_12192 = state_12106;
(statearr_12192[(4)] = cljs.core.rest.call(null,(state_12106[(4)])));

return statearr_12192;
})();
var state_12106__$1 = state_12106;
var ex12187 = (state_12106__$1[(2)]);
var statearr_12193_12769 = state_12106__$1;
(statearr_12193_12769[(5)] = ex12187);


var statearr_12194_12770 = state_12106__$1;
(statearr_12194_12770[(1)] = (14));

(statearr_12194_12770[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12107 === (47))){
var _ = (function (){var statearr_12195 = state_12106;
(statearr_12195[(4)] = cljs.core.cons.call(null,(54),(state_12106[(4)])));

return statearr_12195;
})();
var inst_12000 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12001 = [new cljs.core.Keyword(null,"proposal_cost","proposal_cost",(1707335169)),new cljs.core.Keyword(null,"quantity","quantity",(-1929050694))];
var inst_12002 = (new cljs.core.PersistentVector(null,(2),(5),inst_12000,inst_12001,null));
var inst_12003 = cljs.core.assoc_in.call(null,e2e.proposals.prop_config,inst_12002,"0.0000 EFX");
var inst_12004 = eos_cljs.core.transact.call(null,e2e.proposals.prop_acc,"update",inst_12003);
var inst_12005 = cljs.core.async.interop.p__GT_c.call(null,inst_12004);
var state_12106__$1 = state_12106;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12106__$1,(55),inst_12005);
} else {
if((state_val_12107 === (16))){
var inst_11829 = (state_12106[(17)]);
var inst_11849 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_11850 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_11851 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"need init to update",inst_11850,inst_11829];
var inst_11852 = cljs.core.PersistentHashMap.fromArrays(inst_11849,inst_11851);
var inst_11853 = cljs.test.do_report.call(null,inst_11852);
var state_12106__$1 = state_12106;
var statearr_12196_12771 = state_12106__$1;
(statearr_12196_12771[(2)] = inst_11853);

(statearr_12196_12771[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12107 === (48))){
var inst_12048 = (state_12106[(2)]);
var inst_12049 = eos_cljs.core.get_table_rows.call(null,e2e.proposals.prop_acc,e2e.proposals.prop_acc,"config");
var inst_12050 = cljs.core.async.interop.p__GT_c.call(null,inst_12049);
var state_12106__$1 = (function (){var statearr_12197 = state_12106;
(statearr_12197[(21)] = inst_12048);

return statearr_12197;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12106__$1,(66),inst_12050);
} else {
if((state_val_12107 === (17))){
var inst_11829 = (state_12106[(17)]);
var inst_11855 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_11856 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_11857 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"need init to update",inst_11856,inst_11829];
var inst_11858 = cljs.core.PersistentHashMap.fromArrays(inst_11855,inst_11857);
var inst_11859 = cljs.test.do_report.call(null,inst_11858);
var state_12106__$1 = state_12106;
var statearr_12198_12772 = state_12106__$1;
(statearr_12198_12772[(2)] = inst_11859);

(statearr_12198_12772[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12107 === (49))){
var inst_11975 = (state_12106[(2)]);
var inst_11976 = cljs.core.prn.call(null,"test failed with ",inst_11975);
var state_12106__$1 = (function (){var statearr_12199 = state_12106;
(statearr_12199[(22)] = inst_11976);

return statearr_12199;
})();
var statearr_12200_12773 = state_12106__$1;
(statearr_12200_12773[(2)] = null);

(statearr_12200_12773[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12107 === (18))){
var inst_11829 = (state_12106[(17)]);
var inst_11861 = (state_12106[(2)]);
var _ = (function (){var statearr_12202 = state_12106;
(statearr_12202[(4)] = cljs.core.rest.call(null,(state_12106[(4)])));

return statearr_12202;
})();
var state_12106__$1 = (function (){var statearr_12203 = state_12106;
(statearr_12203[(23)] = inst_11861);

return statearr_12203;
})();
var statearr_12204_12774 = state_12106__$1;
(statearr_12204_12774[(2)] = inst_11829);

(statearr_12204_12774[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12107 === (50))){
var _ = (function (){var statearr_12205 = state_12106;
(statearr_12205[(4)] = cljs.core.cons.call(null,(53),(state_12106[(4)])));

return statearr_12205;
})();
var inst_11988 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_11989 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can update after init"];
var inst_11990 = cljs.core.PersistentHashMap.fromArrays(inst_11988,inst_11989);
var inst_11991 = cljs.test.do_report.call(null,inst_11990);
var ___$1 = (function (){var statearr_12206 = state_12106;
(statearr_12206[(4)] = cljs.core.rest.call(null,(state_12106[(4)])));

return statearr_12206;
})();
var state_12106__$1 = state_12106;
var statearr_12207_12775 = state_12106__$1;
(statearr_12207_12775[(2)] = inst_11991);

(statearr_12207_12775[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12107 === (19))){
var _ = (function (){var statearr_12208 = state_12106;
(statearr_12208[(4)] = cljs.core.rest.call(null,(state_12106[(4)])));

return statearr_12208;
})();
var state_12106__$1 = state_12106;
var ex12201 = (state_12106__$1[(2)]);
var statearr_12209_12776 = state_12106__$1;
(statearr_12209_12776[(5)] = ex12201);


if((ex12201 instanceof Error)){
var statearr_12210_12777 = state_12106__$1;
(statearr_12210_12777[(1)] = (8));

(statearr_12210_12777[(5)] = null);

} else {
throw ex12201;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12107 === (51))){
var inst_11994 = (state_12106[(2)]);
var state_12106__$1 = state_12106;
var statearr_12211_12778 = state_12106__$1;
(statearr_12211_12778[(2)] = inst_11994);

(statearr_12211_12778[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12107 === (20))){
var inst_11873 = (state_12106[(24)]);
var inst_11873__$1 = (state_12106[(2)]);
var inst_11874 = (inst_11873__$1 instanceof cljs.core.ExceptionInfo);
var inst_11875 = cljs.core.ex_data.call(null,inst_11873__$1);
var inst_11876 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_11875);
var inst_11877 = cljs.core._EQ_.call(null,inst_11876,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_11878 = ((inst_11874) && (inst_11877));
var state_12106__$1 = (function (){var statearr_12212 = state_12106;
(statearr_12212[(24)] = inst_11873__$1);

return statearr_12212;
})();
if(cljs.core.truth_(inst_11878)){
var statearr_12213_12779 = state_12106__$1;
(statearr_12213_12779[(1)] = (21));

} else {
var statearr_12214_12780 = state_12106__$1;
(statearr_12214_12780[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12107 === (52))){
var inst_11977 = (state_12106[(2)]);
var inst_11978 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_11979 = null;
var inst_11980 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can update after init",inst_11979,inst_11977];
var inst_11981 = cljs.core.PersistentHashMap.fromArrays(inst_11978,inst_11980);
var inst_11982 = cljs.test.do_report.call(null,inst_11981);
var state_12106__$1 = state_12106;
var statearr_12216_12781 = state_12106__$1;
(statearr_12216_12781[(2)] = inst_11982);

(statearr_12216_12781[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12107 === (21))){
var inst_11873 = (state_12106[(24)]);
var inst_11880 = (function(){throw inst_11873})();
var state_12106__$1 = state_12106;
var statearr_12217_12782 = state_12106__$1;
(statearr_12217_12782[(2)] = inst_11880);

(statearr_12217_12782[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12107 === (53))){
var _ = (function (){var statearr_12219 = state_12106;
(statearr_12219[(4)] = cljs.core.rest.call(null,(state_12106[(4)])));

return statearr_12219;
})();
var state_12106__$1 = state_12106;
var ex12215 = (state_12106__$1[(2)]);
var statearr_12220_12783 = state_12106__$1;
(statearr_12220_12783[(5)] = ex12215);


var statearr_12221_12784 = state_12106__$1;
(statearr_12221_12784[(1)] = (52));

(statearr_12221_12784[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12107 === (22))){
var inst_11873 = (state_12106[(24)]);
var state_12106__$1 = state_12106;
var statearr_12222_12785 = state_12106__$1;
(statearr_12222_12785[(2)] = inst_11873);

(statearr_12222_12785[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12107 === (54))){
var _ = (function (){var statearr_12223 = state_12106;
(statearr_12223[(4)] = cljs.core.rest.call(null,(state_12106[(4)])));

return statearr_12223;
})();
var state_12106__$1 = state_12106;
var ex12218 = (state_12106__$1[(2)]);
var statearr_12224_12786 = state_12106__$1;
(statearr_12224_12786[(5)] = ex12218);


if((ex12218 instanceof Error)){
var statearr_12225_12787 = state_12106__$1;
(statearr_12225_12787[(1)] = (49));

(statearr_12225_12787[(5)] = null);

} else {
throw ex12218;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12107 === (23))){
var inst_11883 = (state_12106[(2)]);
var state_12106__$1 = (function (){var statearr_12226 = state_12106;
(statearr_12226[(25)] = inst_11883);

return statearr_12226;
})();
var statearr_12227_12788 = state_12106__$1;
(statearr_12227_12788[(2)] = null);

(statearr_12227_12788[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12107 === (55))){
var inst_12007 = (state_12106[(26)]);
var inst_12007__$1 = (state_12106[(2)]);
var inst_12008 = (inst_12007__$1 instanceof cljs.core.ExceptionInfo);
var inst_12009 = cljs.core.ex_data.call(null,inst_12007__$1);
var inst_12010 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_12009);
var inst_12011 = cljs.core._EQ_.call(null,inst_12010,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_12012 = ((inst_12008) && (inst_12011));
var state_12106__$1 = (function (){var statearr_12228 = state_12106;
(statearr_12228[(26)] = inst_12007__$1);

return statearr_12228;
})();
if(cljs.core.truth_(inst_12012)){
var statearr_12229_12789 = state_12106__$1;
(statearr_12229_12789[(1)] = (56));

} else {
var statearr_12230_12790 = state_12106__$1;
(statearr_12230_12790[(1)] = (57));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12107 === (24))){
var _ = (function (){var statearr_12231 = state_12106;
(statearr_12231[(4)] = cljs.core.cons.call(null,(27),(state_12106[(4)])));

return statearr_12231;
})();
var inst_11895 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_11896 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"need init to update"];
var inst_11897 = cljs.core.PersistentHashMap.fromArrays(inst_11895,inst_11896);
var inst_11898 = cljs.test.do_report.call(null,inst_11897);
var ___$1 = (function (){var statearr_12232 = state_12106;
(statearr_12232[(4)] = cljs.core.rest.call(null,(state_12106[(4)])));

return statearr_12232;
})();
var state_12106__$1 = state_12106;
var statearr_12233_12791 = state_12106__$1;
(statearr_12233_12791[(2)] = inst_11898);

(statearr_12233_12791[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12107 === (56))){
var inst_12007 = (state_12106[(26)]);
var inst_12014 = (function(){throw inst_12007})();
var state_12106__$1 = state_12106;
var statearr_12234_12792 = state_12106__$1;
(statearr_12234_12792[(2)] = inst_12014);

(statearr_12234_12792[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12107 === (25))){
var inst_11901 = (state_12106[(2)]);
var _ = (function (){var statearr_12235 = state_12106;
(statearr_12235[(4)] = cljs.core.rest.call(null,(state_12106[(4)])));

return statearr_12235;
})();
var state_12106__$1 = state_12106;
var statearr_12236_12793 = state_12106__$1;
(statearr_12236_12793[(2)] = inst_11901);

(statearr_12236_12793[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12107 === (57))){
var inst_12007 = (state_12106[(26)]);
var state_12106__$1 = state_12106;
var statearr_12237_12794 = state_12106__$1;
(statearr_12237_12794[(2)] = inst_12007);

(statearr_12237_12794[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12107 === (26))){
var inst_11884 = (state_12106[(2)]);
var inst_11885 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_11886 = null;
var inst_11887 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"need init to update",inst_11886,inst_11884];
var inst_11888 = cljs.core.PersistentHashMap.fromArrays(inst_11885,inst_11887);
var inst_11889 = cljs.test.do_report.call(null,inst_11888);
var state_12106__$1 = state_12106;
var statearr_12239_12795 = state_12106__$1;
(statearr_12239_12795[(2)] = inst_11889);

(statearr_12239_12795[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12107 === (58))){
var inst_12017 = (state_12106[(2)]);
var state_12106__$1 = (function (){var statearr_12240 = state_12106;
(statearr_12240[(27)] = inst_12017);

return statearr_12240;
})();
var statearr_12241_12796 = state_12106__$1;
(statearr_12241_12796[(2)] = null);

(statearr_12241_12796[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12107 === (27))){
var _ = (function (){var statearr_12242 = state_12106;
(statearr_12242[(4)] = cljs.core.rest.call(null,(state_12106[(4)])));

return statearr_12242;
})();
var state_12106__$1 = state_12106;
var ex12238 = (state_12106__$1[(2)]);
var statearr_12243_12797 = state_12106__$1;
(statearr_12243_12797[(5)] = ex12238);


var statearr_12244_12798 = state_12106__$1;
(statearr_12244_12798[(1)] = (26));

(statearr_12244_12798[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12107 === (59))){
var _ = (function (){var statearr_12245 = state_12106;
(statearr_12245[(4)] = cljs.core.cons.call(null,(62),(state_12106[(4)])));

return statearr_12245;
})();
var state_12106__$1 = state_12106;
var statearr_12246_12799 = state_12106__$1;
(statearr_12246_12799[(1)] = (63));



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12107 === (28))){
var _ = (function (){var statearr_12248 = state_12106;
(statearr_12248[(4)] = cljs.core.cons.call(null,(35),(state_12106[(4)])));

return statearr_12248;
})();
var inst_11930 = eos_cljs.core.transact.call(null,e2e.proposals.prop_acc,"init",e2e.proposals.prop_config);
var inst_11931 = cljs.core.async.interop.p__GT_c.call(null,inst_11930);
var state_12106__$1 = state_12106;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12106__$1,(36),inst_11931);
} else {
if((state_val_12107 === (60))){
var inst_12045 = (state_12106[(2)]);
var _ = (function (){var statearr_12249 = state_12106;
(statearr_12249[(4)] = cljs.core.rest.call(null,(state_12106[(4)])));

return statearr_12249;
})();
var state_12106__$1 = state_12106;
var statearr_12250_12800 = state_12106__$1;
(statearr_12250_12800[(2)] = inst_12045);

(statearr_12250_12800[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12107 === (29))){
var inst_11974 = (state_12106[(2)]);
var state_12106__$1 = (function (){var statearr_12251 = state_12106;
(statearr_12251[(28)] = inst_11974);

return statearr_12251;
})();
var statearr_12252_12801 = state_12106__$1;
(statearr_12252_12801[(2)] = null);

(statearr_12252_12801[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12107 === (61))){
var inst_12018 = (state_12106[(2)]);
var inst_12019 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_12020 = true;
var inst_12021 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can update after init",inst_12020,inst_12018];
var inst_12022 = cljs.core.PersistentHashMap.fromArrays(inst_12019,inst_12021);
var inst_12023 = cljs.test.do_report.call(null,inst_12022);
var state_12106__$1 = state_12106;
var statearr_12254_12802 = state_12106__$1;
(statearr_12254_12802[(2)] = inst_12023);

(statearr_12254_12802[(1)] = (60));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12107 === (30))){
var inst_11905 = (state_12106[(2)]);
var inst_11906 = cljs.core.prn.call(null,"test failed with ",inst_11905);
var state_12106__$1 = (function (){var statearr_12255 = state_12106;
(statearr_12255[(29)] = inst_11906);

return statearr_12255;
})();
var statearr_12256_12803 = state_12106__$1;
(statearr_12256_12803[(2)] = null);

(statearr_12256_12803[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12107 === (62))){
var _ = (function (){var statearr_12257 = state_12106;
(statearr_12257[(4)] = cljs.core.rest.call(null,(state_12106[(4)])));

return statearr_12257;
})();
var state_12106__$1 = state_12106;
var ex12253 = (state_12106__$1[(2)]);
var statearr_12258_12804 = state_12106__$1;
(statearr_12258_12804[(5)] = ex12253);


var statearr_12259_12805 = state_12106__$1;
(statearr_12259_12805[(1)] = (61));

(statearr_12259_12805[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12107 === (31))){
var _ = (function (){var statearr_12260 = state_12106;
(statearr_12260[(4)] = cljs.core.cons.call(null,(34),(state_12106[(4)])));

return statearr_12260;
})();
var inst_11918 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_11919 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can init"];
var inst_11920 = cljs.core.PersistentHashMap.fromArrays(inst_11918,inst_11919);
var inst_11921 = cljs.test.do_report.call(null,inst_11920);
var ___$1 = (function (){var statearr_12261 = state_12106;
(statearr_12261[(4)] = cljs.core.rest.call(null,(state_12106[(4)])));

return statearr_12261;
})();
var state_12106__$1 = state_12106;
var statearr_12262_12806 = state_12106__$1;
(statearr_12262_12806[(2)] = inst_11921);

(statearr_12262_12806[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12107 === (63))){
var inst_12030 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_12031 = true;
var inst_12032 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"can update after init",inst_12031,true];
var inst_12033 = cljs.core.PersistentHashMap.fromArrays(inst_12030,inst_12032);
var inst_12034 = cljs.test.do_report.call(null,inst_12033);
var state_12106__$1 = state_12106;
var statearr_12263_12807 = state_12106__$1;
(statearr_12263_12807[(2)] = inst_12034);

(statearr_12263_12807[(1)] = (65));


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
}
}
}
});})(c__19__auto__,___192__auto__,self____$1))
;
return ((function (switch__14__auto__,c__19__auto__,___192__auto__,self____$1){
return (function() {
var e2e$proposals$state_machine__15__auto__ = null;
var e2e$proposals$state_machine__15__auto____0 = (function (){
var statearr_12264 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12264[(0)] = e2e$proposals$state_machine__15__auto__);

(statearr_12264[(1)] = (1));

return statearr_12264;
});
var e2e$proposals$state_machine__15__auto____1 = (function (state_12106){
while(true){
var ret_value__16__auto__ = (function (){try{while(true){
var result__17__auto__ = switch__14__auto__.call(null,state_12106);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__17__auto__;
}
break;
}
}catch (e12265){var ex__18__auto__ = e12265;
var statearr_12266_12808 = state_12106;
(statearr_12266_12808[(2)] = ex__18__auto__);


if(cljs.core.seq.call(null,(state_12106[(4)]))){
var statearr_12267_12809 = state_12106;
(statearr_12267_12809[(1)] = cljs.core.first.call(null,(state_12106[(4)])));

} else {
throw ex__18__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__12810 = state_12106;
state_12106 = G__12810;
continue;
} else {
return ret_value__16__auto__;
}
break;
}
});
e2e$proposals$state_machine__15__auto__ = function(state_12106){
switch(arguments.length){
case 0:
return e2e$proposals$state_machine__15__auto____0.call(this);
case 1:
return e2e$proposals$state_machine__15__auto____1.call(this,state_12106);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
e2e$proposals$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$0 = e2e$proposals$state_machine__15__auto____0;
e2e$proposals$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$1 = e2e$proposals$state_machine__15__auto____1;
return e2e$proposals$state_machine__15__auto__;
})()
;})(switch__14__auto__,c__19__auto__,___192__auto__,self____$1))
})();
var state__21__auto__ = (function (){var statearr_12268 = f__20__auto__.call(null);
(statearr_12268[(6)] = c__19__auto__);

return statearr_12268;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21__auto__);
});})(c__19__auto__,___192__auto__,self____$1))
);

return c__19__auto__;
});

e2e.proposals.t_e2e$proposals11815.prototype.apply = (function (self__,args11818){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args11818)));
});

e2e.proposals.t_e2e$proposals11815.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___192__auto__ = this;
var c__19__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19__auto__,___192__auto__){
return (function (){
var f__20__auto__ = (function (){var switch__14__auto__ = ((function (c__19__auto__,___192__auto__){
return (function (state_12556){
var state_val_12557 = (state_12556[(1)]);
if((state_val_12557 === (32))){
var inst_12374 = (state_12556[(2)]);
var state_12556__$1 = state_12556;
var statearr_12558_12811 = state_12556__$1;
(statearr_12558_12811[(2)] = inst_12374);

(statearr_12558_12811[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12557 === (64))){
var inst_12486 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_12487 = true;
var inst_12488 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can update after init",inst_12487,true];
var inst_12489 = cljs.core.PersistentHashMap.fromArrays(inst_12486,inst_12488);
var inst_12490 = cljs.test.do_report.call(null,inst_12489);
var state_12556__$1 = state_12556;
var statearr_12559_12812 = state_12556__$1;
(statearr_12559_12812[(2)] = inst_12490);

(statearr_12559_12812[(1)] = (65));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12557 === (1))){
var state_12556__$1 = state_12556;
var statearr_12560_12813 = state_12556__$1;
(statearr_12560_12813[(2)] = null);

(statearr_12560_12813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12557 === (33))){
var inst_12357 = (state_12556[(2)]);
var inst_12358 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_12359 = null;
var inst_12360 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can init",inst_12359,inst_12357];
var inst_12361 = cljs.core.PersistentHashMap.fromArrays(inst_12358,inst_12360);
var inst_12362 = cljs.test.do_report.call(null,inst_12361);
var state_12556__$1 = state_12556;
var statearr_12561_12814 = state_12556__$1;
(statearr_12561_12814[(2)] = inst_12362);

(statearr_12561_12814[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12557 === (65))){
var inst_12492 = (state_12556[(2)]);
var _ = (function (){var statearr_12563 = state_12556;
(statearr_12563[(4)] = cljs.core.rest.call(null,(state_12556[(4)])));

return statearr_12563;
})();
var state_12556__$1 = (function (){var statearr_12564 = state_12556;
(statearr_12564[(7)] = inst_12492);

return statearr_12564;
})();
var statearr_12565_12815 = state_12556__$1;
(statearr_12565_12815[(2)] = true);

(statearr_12565_12815[(1)] = (60));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12557 === (2))){
var _ = (function (){var statearr_12566 = state_12556;
(statearr_12566[(4)] = cljs.core.cons.call(null,(5),(state_12556[(4)])));

return statearr_12566;
})();
var state_12556__$1 = state_12556;
var statearr_12567_12816 = state_12556__$1;
(statearr_12567_12816[(2)] = null);

(statearr_12567_12816[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12557 === (34))){
var _ = (function (){var statearr_12568 = state_12556;
(statearr_12568[(4)] = cljs.core.rest.call(null,(state_12556[(4)])));

return statearr_12568;
})();
var state_12556__$1 = state_12556;
var ex12562 = (state_12556__$1[(2)]);
var statearr_12569_12817 = state_12556__$1;
(statearr_12569_12817[(5)] = ex12562);


var statearr_12570_12818 = state_12556__$1;
(statearr_12570_12818[(1)] = (33));

(statearr_12570_12818[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12557 === (66))){
var inst_12502 = (state_12556[(8)]);
var inst_12502__$1 = (state_12556[(2)]);
var inst_12503 = (inst_12502__$1 instanceof cljs.core.ExceptionInfo);
var inst_12504 = cljs.core.ex_data.call(null,inst_12502__$1);
var inst_12505 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_12504);
var inst_12506 = cljs.core._EQ_.call(null,inst_12505,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_12507 = ((inst_12503) && (inst_12506));
var state_12556__$1 = (function (){var statearr_12572 = state_12556;
(statearr_12572[(8)] = inst_12502__$1);

return statearr_12572;
})();
if(cljs.core.truth_(inst_12507)){
var statearr_12573_12819 = state_12556__$1;
(statearr_12573_12819[(1)] = (67));

} else {
var statearr_12574_12820 = state_12556__$1;
(statearr_12574_12820[(1)] = (68));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12557 === (3))){
var inst_12553 = (state_12556[(2)]);
var inst_12554 = done.call(null);
var state_12556__$1 = (function (){var statearr_12575 = state_12556;
(statearr_12575[(9)] = inst_12553);

return statearr_12575;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12556__$1,inst_12554);
} else {
if((state_val_12557 === (35))){
var _ = (function (){var statearr_12576 = state_12556;
(statearr_12576[(4)] = cljs.core.rest.call(null,(state_12556[(4)])));

return statearr_12576;
})();
var state_12556__$1 = state_12556;
var ex12571 = (state_12556__$1[(2)]);
var statearr_12577_12821 = state_12556__$1;
(statearr_12577_12821[(5)] = ex12571);


if((ex12571 instanceof Error)){
var statearr_12578_12822 = state_12556__$1;
(statearr_12578_12822[(1)] = (30));

(statearr_12578_12822[(5)] = null);

} else {
throw ex12571;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12557 === (67))){
var inst_12502 = (state_12556[(8)]);
var inst_12509 = (function(){throw inst_12502})();
var state_12556__$1 = state_12556;
var statearr_12579_12823 = state_12556__$1;
(statearr_12579_12823[(2)] = inst_12509);

(statearr_12579_12823[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12557 === (4))){
var inst_12269 = (state_12556[(2)]);
var inst_12270 = cljs.core.prn.call(null,"======== ",inst_12269);
var state_12556__$1 = state_12556;
var statearr_12580_12824 = state_12556__$1;
(statearr_12580_12824[(2)] = inst_12270);

(statearr_12580_12824[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12557 === (36))){
var inst_12383 = (state_12556[(10)]);
var inst_12383__$1 = (state_12556[(2)]);
var inst_12384 = (inst_12383__$1 instanceof cljs.core.ExceptionInfo);
var inst_12385 = cljs.core.ex_data.call(null,inst_12383__$1);
var inst_12386 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_12385);
var inst_12387 = cljs.core._EQ_.call(null,inst_12386,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_12388 = ((inst_12384) && (inst_12387));
var state_12556__$1 = (function (){var statearr_12582 = state_12556;
(statearr_12582[(10)] = inst_12383__$1);

return statearr_12582;
})();
if(cljs.core.truth_(inst_12388)){
var statearr_12583_12825 = state_12556__$1;
(statearr_12583_12825[(1)] = (37));

} else {
var statearr_12584_12826 = state_12556__$1;
(statearr_12584_12826[(1)] = (38));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12557 === (68))){
var inst_12502 = (state_12556[(8)]);
var state_12556__$1 = state_12556;
var statearr_12585_12827 = state_12556__$1;
(statearr_12585_12827[(2)] = inst_12502);

(statearr_12585_12827[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12557 === (5))){
var _ = (function (){var statearr_12586 = state_12556;
(statearr_12586[(4)] = cljs.core.rest.call(null,(state_12556[(4)])));

return statearr_12586;
})();
var state_12556__$1 = state_12556;
var ex12581 = (state_12556__$1[(2)]);
var statearr_12587_12828 = state_12556__$1;
(statearr_12587_12828[(5)] = ex12581);


if((ex12581 instanceof Error)){
var statearr_12588_12829 = state_12556__$1;
(statearr_12588_12829[(1)] = (4));

(statearr_12588_12829[(5)] = null);

} else {
throw ex12581;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12557 === (37))){
var inst_12383 = (state_12556[(10)]);
var inst_12390 = (function(){throw inst_12383})();
var state_12556__$1 = state_12556;
var statearr_12589_12830 = state_12556__$1;
(statearr_12589_12830[(2)] = inst_12390);

(statearr_12589_12830[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12557 === (69))){
var inst_12512 = (state_12556[(2)]);
var state_12556__$1 = (function (){var statearr_12590 = state_12556;
(statearr_12590[(11)] = inst_12512);

return statearr_12590;
})();
var statearr_12591_12831 = state_12556__$1;
(statearr_12591_12831[(2)] = null);

(statearr_12591_12831[(1)] = (70));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12557 === (6))){
var _ = (function (){var statearr_12592 = state_12556;
(statearr_12592[(4)] = cljs.core.cons.call(null,(19),(state_12556[(4)])));

return statearr_12592;
})();
var inst_12320 = eos_cljs.core.transact.call(null,e2e.proposals.prop_acc,"update",e2e.proposals.prop_config);
var inst_12321 = cljs.core.async.interop.p__GT_c.call(null,inst_12320);
var state_12556__$1 = state_12556;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12556__$1,(20),inst_12321);
} else {
if((state_val_12557 === (38))){
var inst_12383 = (state_12556[(10)]);
var state_12556__$1 = state_12556;
var statearr_12593_12832 = state_12556__$1;
(statearr_12593_12832[(2)] = inst_12383);

(statearr_12593_12832[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12557 === (70))){
var inst_12512 = (state_12556[(11)]);
var inst_12526 = (state_12556[(12)]);
var inst_12527 = (state_12556[(13)]);
var _ = (function (){var statearr_12594 = state_12556;
(statearr_12594[(4)] = cljs.core.cons.call(null,(73),(state_12556[(4)])));

return statearr_12594;
})();
var inst_12524 = cljs.core.count.call(null,inst_12512);
var inst_12525 = (new cljs.core.List(null,(1),null,(1),null));
var inst_12526__$1 = (new cljs.core.List(null,inst_12524,inst_12525,(2),null));
var inst_12527__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_12526__$1);
var state_12556__$1 = (function (){var statearr_12595 = state_12556;
(statearr_12595[(12)] = inst_12526__$1);

(statearr_12595[(13)] = inst_12527__$1);

return statearr_12595;
})();
if(cljs.core.truth_(inst_12527__$1)){
var statearr_12596_12833 = state_12556__$1;
(statearr_12596_12833[(1)] = (74));

} else {
var statearr_12597_12834 = state_12556__$1;
(statearr_12597_12834[(1)] = (75));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12557 === (7))){
var inst_12354 = (state_12556[(2)]);
var state_12556__$1 = (function (){var statearr_12598 = state_12556;
(statearr_12598[(14)] = inst_12354);

return statearr_12598;
})();
var statearr_12599_12835 = state_12556__$1;
(statearr_12599_12835[(2)] = null);

(statearr_12599_12835[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12557 === (39))){
var inst_12393 = (state_12556[(2)]);
var state_12556__$1 = (function (){var statearr_12600 = state_12556;
(statearr_12600[(15)] = inst_12393);

return statearr_12600;
})();
var statearr_12601_12836 = state_12556__$1;
(statearr_12601_12836[(2)] = null);

(statearr_12601_12836[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12557 === (71))){
var inst_12550 = (state_12556[(2)]);
var _ = (function (){var statearr_12602 = state_12556;
(statearr_12602[(4)] = cljs.core.rest.call(null,(state_12556[(4)])));

return statearr_12602;
})();
var state_12556__$1 = state_12556;
var statearr_12603_12837 = state_12556__$1;
(statearr_12603_12837[(2)] = inst_12550);

(statearr_12603_12837[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12557 === (8))){
var inst_12278 = (state_12556[(16)]);
var inst_12279 = (state_12556[(17)]);
var inst_12276 = (state_12556[(2)]);
var inst_12277 = inst_12276.cause;
var inst_12278__$1 = inst_12277.message;
var inst_12279__$1 = clojure.string.ends_with_QMARK_.call(null,inst_12278__$1,"not yet initialized");
var inst_12280 = (!(inst_12279__$1));
var state_12556__$1 = (function (){var statearr_12604 = state_12556;
(statearr_12604[(16)] = inst_12278__$1);

(statearr_12604[(17)] = inst_12279__$1);

return statearr_12604;
})();
if(inst_12280){
var statearr_12605_12838 = state_12556__$1;
(statearr_12605_12838[(1)] = (9));

} else {
var statearr_12606_12839 = state_12556__$1;
(statearr_12606_12839[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12557 === (40))){
var _ = (function (){var statearr_12607 = state_12556;
(statearr_12607[(4)] = cljs.core.cons.call(null,(43),(state_12556[(4)])));

return statearr_12607;
})();
var state_12556__$1 = state_12556;
var statearr_12608_12840 = state_12556__$1;
(statearr_12608_12840[(1)] = (44));



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12557 === (72))){
var inst_12513 = (state_12556[(2)]);
var inst_12514 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_12515 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"count","count",(-514511684),null),new cljs.core.Symbol(null,"rows","rows",(-1804386089),null)),(1));
var inst_12516 = [new cljs.core.Keyword(null,"error","error",(-978969032)),null,inst_12515,inst_12513];
var inst_12517 = cljs.core.PersistentHashMap.fromArrays(inst_12514,inst_12516);
var inst_12518 = cljs.test.do_report.call(null,inst_12517);
var state_12556__$1 = state_12556;
var statearr_12610_12841 = state_12556__$1;
(statearr_12610_12841[(2)] = inst_12518);

(statearr_12610_12841[(1)] = (71));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12557 === (9))){
var inst_12278 = (state_12556[(16)]);
var inst_12282 = ["expected =","not yet initialized"," actual = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_12278)].join('');
var inst_12283 = cljs.core.prn.call(null,inst_12282);
var state_12556__$1 = state_12556;
var statearr_12612_12842 = state_12556__$1;
(statearr_12612_12842[(2)] = inst_12283);

(statearr_12612_12842[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12557 === (41))){
var inst_12421 = (state_12556[(2)]);
var _ = (function (){var statearr_12613 = state_12556;
(statearr_12613[(4)] = cljs.core.rest.call(null,(state_12556[(4)])));

return statearr_12613;
})();
var state_12556__$1 = state_12556;
var statearr_12614_12843 = state_12556__$1;
(statearr_12614_12843[(2)] = inst_12421);

(statearr_12614_12843[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12557 === (73))){
var _ = (function (){var statearr_12615 = state_12556;
(statearr_12615[(4)] = cljs.core.rest.call(null,(state_12556[(4)])));

return statearr_12615;
})();
var state_12556__$1 = state_12556;
var ex12611 = (state_12556__$1[(2)]);
var statearr_12616_12844 = state_12556__$1;
(statearr_12616_12844[(5)] = ex12611);


var statearr_12617_12845 = state_12556__$1;
(statearr_12617_12845[(1)] = (72));

(statearr_12617_12845[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12557 === (10))){
var state_12556__$1 = state_12556;
var statearr_12618_12846 = state_12556__$1;
(statearr_12618_12846[(2)] = null);

(statearr_12618_12846[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12557 === (42))){
var inst_12394 = (state_12556[(2)]);
var inst_12395 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_12396 = true;
var inst_12397 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can init",inst_12396,inst_12394];
var inst_12398 = cljs.core.PersistentHashMap.fromArrays(inst_12395,inst_12397);
var inst_12399 = cljs.test.do_report.call(null,inst_12398);
var state_12556__$1 = state_12556;
var statearr_12619_12847 = state_12556__$1;
(statearr_12619_12847[(2)] = inst_12399);

(statearr_12619_12847[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12557 === (74))){
var inst_12526 = (state_12556[(12)]);
var inst_12529 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_12530 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"count","count",(-514511684),null),new cljs.core.Symbol(null,"rows","rows",(-1804386089),null)),(1));
var inst_12531 = cljs.core.cons.call(null,cljs.core._EQ_,inst_12526);
var inst_12532 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),null,inst_12530,inst_12531];
var inst_12533 = cljs.core.PersistentHashMap.fromArrays(inst_12529,inst_12532);
var inst_12534 = cljs.test.do_report.call(null,inst_12533);
var state_12556__$1 = state_12556;
var statearr_12621_12848 = state_12556__$1;
(statearr_12621_12848[(2)] = inst_12534);

(statearr_12621_12848[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12557 === (11))){
var inst_12286 = (state_12556[(2)]);
var state_12556__$1 = (function (){var statearr_12622 = state_12556;
(statearr_12622[(18)] = inst_12286);

return statearr_12622;
})();
var statearr_12623_12849 = state_12556__$1;
(statearr_12623_12849[(2)] = null);

(statearr_12623_12849[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12557 === (43))){
var _ = (function (){var statearr_12624 = state_12556;
(statearr_12624[(4)] = cljs.core.rest.call(null,(state_12556[(4)])));

return statearr_12624;
})();
var state_12556__$1 = state_12556;
var ex12620 = (state_12556__$1[(2)]);
var statearr_12625_12850 = state_12556__$1;
(statearr_12625_12850[(5)] = ex12620);


var statearr_12626_12851 = state_12556__$1;
(statearr_12626_12851[(1)] = (42));

(statearr_12626_12851[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12557 === (75))){
var inst_12526 = (state_12556[(12)]);
var inst_12536 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_12537 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"count","count",(-514511684),null),new cljs.core.Symbol(null,"rows","rows",(-1804386089),null)),(1));
var inst_12538 = new cljs.core.Symbol(null,"not","not",(1044554643),null);
var inst_12539 = new cljs.core.Symbol(null,"=","=",(-1501502141),null);
var inst_12540 = cljs.core.cons.call(null,inst_12539,inst_12526);
var inst_12541 = (new cljs.core.List(null,inst_12540,null,(1),null));
var inst_12542 = (new cljs.core.List(null,inst_12538,inst_12541,(2),null));
var inst_12543 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),null,inst_12537,inst_12542];
var inst_12544 = cljs.core.PersistentHashMap.fromArrays(inst_12536,inst_12543);
var inst_12545 = cljs.test.do_report.call(null,inst_12544);
var state_12556__$1 = state_12556;
var statearr_12627_12852 = state_12556__$1;
(statearr_12627_12852[(2)] = inst_12545);

(statearr_12627_12852[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12557 === (12))){
var inst_12279 = (state_12556[(17)]);
var _ = (function (){var statearr_12628 = state_12556;
(statearr_12628[(4)] = cljs.core.cons.call(null,(15),(state_12556[(4)])));

return statearr_12628;
})();
var state_12556__$1 = state_12556;
if(cljs.core.truth_(inst_12279)){
var statearr_12629_12853 = state_12556__$1;
(statearr_12629_12853[(1)] = (16));

} else {
var statearr_12630_12854 = state_12556__$1;
(statearr_12630_12854[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12557 === (44))){
var inst_12406 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_12407 = true;
var inst_12408 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"can init",inst_12407,true];
var inst_12409 = cljs.core.PersistentHashMap.fromArrays(inst_12406,inst_12408);
var inst_12410 = cljs.test.do_report.call(null,inst_12409);
var state_12556__$1 = state_12556;
var statearr_12631_12855 = state_12556__$1;
(statearr_12631_12855[(2)] = inst_12410);

(statearr_12631_12855[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12557 === (76))){
var inst_12527 = (state_12556[(13)]);
var inst_12547 = (state_12556[(2)]);
var _ = (function (){var statearr_12632 = state_12556;
(statearr_12632[(4)] = cljs.core.rest.call(null,(state_12556[(4)])));

return statearr_12632;
})();
var state_12556__$1 = (function (){var statearr_12633 = state_12556;
(statearr_12633[(19)] = inst_12547);

return statearr_12633;
})();
var statearr_12634_12856 = state_12556__$1;
(statearr_12634_12856[(2)] = inst_12527);

(statearr_12634_12856[(1)] = (71));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12557 === (13))){
var inst_12314 = (state_12556[(2)]);
var state_12556__$1 = state_12556;
var statearr_12635_12857 = state_12556__$1;
(statearr_12635_12857[(2)] = inst_12314);

(statearr_12635_12857[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12557 === (45))){
var inst_12412 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_12413 = true;
var inst_12414 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can init",inst_12413,true];
var inst_12415 = cljs.core.PersistentHashMap.fromArrays(inst_12412,inst_12414);
var inst_12416 = cljs.test.do_report.call(null,inst_12415);
var state_12556__$1 = state_12556;
var statearr_12636_12858 = state_12556__$1;
(statearr_12636_12858[(2)] = inst_12416);

(statearr_12636_12858[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12557 === (14))){
var inst_12287 = (state_12556[(2)]);
var inst_12288 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_12289 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_12290 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"need init to update",inst_12289,inst_12287];
var inst_12291 = cljs.core.PersistentHashMap.fromArrays(inst_12288,inst_12290);
var inst_12292 = cljs.test.do_report.call(null,inst_12291);
var state_12556__$1 = state_12556;
var statearr_12638_12859 = state_12556__$1;
(statearr_12638_12859[(2)] = inst_12292);

(statearr_12638_12859[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12557 === (46))){
var inst_12418 = (state_12556[(2)]);
var _ = (function (){var statearr_12639 = state_12556;
(statearr_12639[(4)] = cljs.core.rest.call(null,(state_12556[(4)])));

return statearr_12639;
})();
var state_12556__$1 = (function (){var statearr_12640 = state_12556;
(statearr_12640[(20)] = inst_12418);

return statearr_12640;
})();
var statearr_12641_12860 = state_12556__$1;
(statearr_12641_12860[(2)] = true);

(statearr_12641_12860[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12557 === (15))){
var _ = (function (){var statearr_12642 = state_12556;
(statearr_12642[(4)] = cljs.core.rest.call(null,(state_12556[(4)])));

return statearr_12642;
})();
var state_12556__$1 = state_12556;
var ex12637 = (state_12556__$1[(2)]);
var statearr_12643_12861 = state_12556__$1;
(statearr_12643_12861[(5)] = ex12637);


var statearr_12644_12862 = state_12556__$1;
(statearr_12644_12862[(1)] = (14));

(statearr_12644_12862[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12557 === (47))){
var _ = (function (){var statearr_12645 = state_12556;
(statearr_12645[(4)] = cljs.core.cons.call(null,(54),(state_12556[(4)])));

return statearr_12645;
})();
var inst_12450 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12451 = [new cljs.core.Keyword(null,"proposal_cost","proposal_cost",(1707335169)),new cljs.core.Keyword(null,"quantity","quantity",(-1929050694))];
var inst_12452 = (new cljs.core.PersistentVector(null,(2),(5),inst_12450,inst_12451,null));
var inst_12453 = cljs.core.assoc_in.call(null,e2e.proposals.prop_config,inst_12452,"0.0000 EFX");
var inst_12454 = eos_cljs.core.transact.call(null,e2e.proposals.prop_acc,"update",inst_12453);
var inst_12455 = cljs.core.async.interop.p__GT_c.call(null,inst_12454);
var state_12556__$1 = state_12556;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12556__$1,(55),inst_12455);
} else {
if((state_val_12557 === (16))){
var inst_12279 = (state_12556[(17)]);
var inst_12299 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_12300 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_12301 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"need init to update",inst_12300,inst_12279];
var inst_12302 = cljs.core.PersistentHashMap.fromArrays(inst_12299,inst_12301);
var inst_12303 = cljs.test.do_report.call(null,inst_12302);
var state_12556__$1 = state_12556;
var statearr_12646_12863 = state_12556__$1;
(statearr_12646_12863[(2)] = inst_12303);

(statearr_12646_12863[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12557 === (48))){
var inst_12498 = (state_12556[(2)]);
var inst_12499 = eos_cljs.core.get_table_rows.call(null,e2e.proposals.prop_acc,e2e.proposals.prop_acc,"config");
var inst_12500 = cljs.core.async.interop.p__GT_c.call(null,inst_12499);
var state_12556__$1 = (function (){var statearr_12647 = state_12556;
(statearr_12647[(21)] = inst_12498);

return statearr_12647;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12556__$1,(66),inst_12500);
} else {
if((state_val_12557 === (17))){
var inst_12279 = (state_12556[(17)]);
var inst_12305 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_12306 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_12307 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"need init to update",inst_12306,inst_12279];
var inst_12308 = cljs.core.PersistentHashMap.fromArrays(inst_12305,inst_12307);
var inst_12309 = cljs.test.do_report.call(null,inst_12308);
var state_12556__$1 = state_12556;
var statearr_12648_12864 = state_12556__$1;
(statearr_12648_12864[(2)] = inst_12309);

(statearr_12648_12864[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12557 === (49))){
var inst_12425 = (state_12556[(2)]);
var inst_12426 = cljs.core.prn.call(null,"test failed with ",inst_12425);
var state_12556__$1 = (function (){var statearr_12649 = state_12556;
(statearr_12649[(22)] = inst_12426);

return statearr_12649;
})();
var statearr_12650_12865 = state_12556__$1;
(statearr_12650_12865[(2)] = null);

(statearr_12650_12865[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12557 === (18))){
var inst_12279 = (state_12556[(17)]);
var inst_12311 = (state_12556[(2)]);
var _ = (function (){var statearr_12652 = state_12556;
(statearr_12652[(4)] = cljs.core.rest.call(null,(state_12556[(4)])));

return statearr_12652;
})();
var state_12556__$1 = (function (){var statearr_12653 = state_12556;
(statearr_12653[(23)] = inst_12311);

return statearr_12653;
})();
var statearr_12654_12866 = state_12556__$1;
(statearr_12654_12866[(2)] = inst_12279);

(statearr_12654_12866[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12557 === (50))){
var _ = (function (){var statearr_12655 = state_12556;
(statearr_12655[(4)] = cljs.core.cons.call(null,(53),(state_12556[(4)])));

return statearr_12655;
})();
var inst_12438 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_12439 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can update after init"];
var inst_12440 = cljs.core.PersistentHashMap.fromArrays(inst_12438,inst_12439);
var inst_12441 = cljs.test.do_report.call(null,inst_12440);
var ___$1 = (function (){var statearr_12656 = state_12556;
(statearr_12656[(4)] = cljs.core.rest.call(null,(state_12556[(4)])));

return statearr_12656;
})();
var state_12556__$1 = state_12556;
var statearr_12657_12867 = state_12556__$1;
(statearr_12657_12867[(2)] = inst_12441);

(statearr_12657_12867[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12557 === (19))){
var _ = (function (){var statearr_12658 = state_12556;
(statearr_12658[(4)] = cljs.core.rest.call(null,(state_12556[(4)])));

return statearr_12658;
})();
var state_12556__$1 = state_12556;
var ex12651 = (state_12556__$1[(2)]);
var statearr_12659_12868 = state_12556__$1;
(statearr_12659_12868[(5)] = ex12651);


if((ex12651 instanceof Error)){
var statearr_12660_12869 = state_12556__$1;
(statearr_12660_12869[(1)] = (8));

(statearr_12660_12869[(5)] = null);

} else {
throw ex12651;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12557 === (51))){
var inst_12444 = (state_12556[(2)]);
var state_12556__$1 = state_12556;
var statearr_12661_12870 = state_12556__$1;
(statearr_12661_12870[(2)] = inst_12444);

(statearr_12661_12870[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12557 === (20))){
var inst_12323 = (state_12556[(24)]);
var inst_12323__$1 = (state_12556[(2)]);
var inst_12324 = (inst_12323__$1 instanceof cljs.core.ExceptionInfo);
var inst_12325 = cljs.core.ex_data.call(null,inst_12323__$1);
var inst_12326 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_12325);
var inst_12327 = cljs.core._EQ_.call(null,inst_12326,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_12328 = ((inst_12324) && (inst_12327));
var state_12556__$1 = (function (){var statearr_12662 = state_12556;
(statearr_12662[(24)] = inst_12323__$1);

return statearr_12662;
})();
if(cljs.core.truth_(inst_12328)){
var statearr_12663_12871 = state_12556__$1;
(statearr_12663_12871[(1)] = (21));

} else {
var statearr_12664_12872 = state_12556__$1;
(statearr_12664_12872[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12557 === (52))){
var inst_12427 = (state_12556[(2)]);
var inst_12428 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_12429 = null;
var inst_12430 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can update after init",inst_12429,inst_12427];
var inst_12431 = cljs.core.PersistentHashMap.fromArrays(inst_12428,inst_12430);
var inst_12432 = cljs.test.do_report.call(null,inst_12431);
var state_12556__$1 = state_12556;
var statearr_12666_12873 = state_12556__$1;
(statearr_12666_12873[(2)] = inst_12432);

(statearr_12666_12873[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12557 === (21))){
var inst_12323 = (state_12556[(24)]);
var inst_12330 = (function(){throw inst_12323})();
var state_12556__$1 = state_12556;
var statearr_12667_12874 = state_12556__$1;
(statearr_12667_12874[(2)] = inst_12330);

(statearr_12667_12874[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12557 === (53))){
var _ = (function (){var statearr_12669 = state_12556;
(statearr_12669[(4)] = cljs.core.rest.call(null,(state_12556[(4)])));

return statearr_12669;
})();
var state_12556__$1 = state_12556;
var ex12665 = (state_12556__$1[(2)]);
var statearr_12670_12875 = state_12556__$1;
(statearr_12670_12875[(5)] = ex12665);


var statearr_12671_12876 = state_12556__$1;
(statearr_12671_12876[(1)] = (52));

(statearr_12671_12876[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12557 === (22))){
var inst_12323 = (state_12556[(24)]);
var state_12556__$1 = state_12556;
var statearr_12672_12877 = state_12556__$1;
(statearr_12672_12877[(2)] = inst_12323);

(statearr_12672_12877[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12557 === (54))){
var _ = (function (){var statearr_12673 = state_12556;
(statearr_12673[(4)] = cljs.core.rest.call(null,(state_12556[(4)])));

return statearr_12673;
})();
var state_12556__$1 = state_12556;
var ex12668 = (state_12556__$1[(2)]);
var statearr_12674_12878 = state_12556__$1;
(statearr_12674_12878[(5)] = ex12668);


if((ex12668 instanceof Error)){
var statearr_12675_12879 = state_12556__$1;
(statearr_12675_12879[(1)] = (49));

(statearr_12675_12879[(5)] = null);

} else {
throw ex12668;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12557 === (23))){
var inst_12333 = (state_12556[(2)]);
var state_12556__$1 = (function (){var statearr_12676 = state_12556;
(statearr_12676[(25)] = inst_12333);

return statearr_12676;
})();
var statearr_12677_12880 = state_12556__$1;
(statearr_12677_12880[(2)] = null);

(statearr_12677_12880[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12557 === (55))){
var inst_12457 = (state_12556[(26)]);
var inst_12457__$1 = (state_12556[(2)]);
var inst_12458 = (inst_12457__$1 instanceof cljs.core.ExceptionInfo);
var inst_12459 = cljs.core.ex_data.call(null,inst_12457__$1);
var inst_12460 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_12459);
var inst_12461 = cljs.core._EQ_.call(null,inst_12460,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_12462 = ((inst_12458) && (inst_12461));
var state_12556__$1 = (function (){var statearr_12678 = state_12556;
(statearr_12678[(26)] = inst_12457__$1);

return statearr_12678;
})();
if(cljs.core.truth_(inst_12462)){
var statearr_12679_12881 = state_12556__$1;
(statearr_12679_12881[(1)] = (56));

} else {
var statearr_12680_12882 = state_12556__$1;
(statearr_12680_12882[(1)] = (57));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12557 === (24))){
var _ = (function (){var statearr_12681 = state_12556;
(statearr_12681[(4)] = cljs.core.cons.call(null,(27),(state_12556[(4)])));

return statearr_12681;
})();
var inst_12345 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_12346 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"need init to update"];
var inst_12347 = cljs.core.PersistentHashMap.fromArrays(inst_12345,inst_12346);
var inst_12348 = cljs.test.do_report.call(null,inst_12347);
var ___$1 = (function (){var statearr_12682 = state_12556;
(statearr_12682[(4)] = cljs.core.rest.call(null,(state_12556[(4)])));

return statearr_12682;
})();
var state_12556__$1 = state_12556;
var statearr_12683_12883 = state_12556__$1;
(statearr_12683_12883[(2)] = inst_12348);

(statearr_12683_12883[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12557 === (56))){
var inst_12457 = (state_12556[(26)]);
var inst_12464 = (function(){throw inst_12457})();
var state_12556__$1 = state_12556;
var statearr_12684_12884 = state_12556__$1;
(statearr_12684_12884[(2)] = inst_12464);

(statearr_12684_12884[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12557 === (25))){
var inst_12351 = (state_12556[(2)]);
var _ = (function (){var statearr_12685 = state_12556;
(statearr_12685[(4)] = cljs.core.rest.call(null,(state_12556[(4)])));

return statearr_12685;
})();
var state_12556__$1 = state_12556;
var statearr_12686_12885 = state_12556__$1;
(statearr_12686_12885[(2)] = inst_12351);

(statearr_12686_12885[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12557 === (57))){
var inst_12457 = (state_12556[(26)]);
var state_12556__$1 = state_12556;
var statearr_12687_12886 = state_12556__$1;
(statearr_12687_12886[(2)] = inst_12457);

(statearr_12687_12886[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12557 === (26))){
var inst_12334 = (state_12556[(2)]);
var inst_12335 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_12336 = null;
var inst_12337 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"need init to update",inst_12336,inst_12334];
var inst_12338 = cljs.core.PersistentHashMap.fromArrays(inst_12335,inst_12337);
var inst_12339 = cljs.test.do_report.call(null,inst_12338);
var state_12556__$1 = state_12556;
var statearr_12689_12887 = state_12556__$1;
(statearr_12689_12887[(2)] = inst_12339);

(statearr_12689_12887[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12557 === (58))){
var inst_12467 = (state_12556[(2)]);
var state_12556__$1 = (function (){var statearr_12690 = state_12556;
(statearr_12690[(27)] = inst_12467);

return statearr_12690;
})();
var statearr_12691_12888 = state_12556__$1;
(statearr_12691_12888[(2)] = null);

(statearr_12691_12888[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12557 === (27))){
var _ = (function (){var statearr_12692 = state_12556;
(statearr_12692[(4)] = cljs.core.rest.call(null,(state_12556[(4)])));

return statearr_12692;
})();
var state_12556__$1 = state_12556;
var ex12688 = (state_12556__$1[(2)]);
var statearr_12693_12889 = state_12556__$1;
(statearr_12693_12889[(5)] = ex12688);


var statearr_12694_12890 = state_12556__$1;
(statearr_12694_12890[(1)] = (26));

(statearr_12694_12890[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12557 === (59))){
var _ = (function (){var statearr_12695 = state_12556;
(statearr_12695[(4)] = cljs.core.cons.call(null,(62),(state_12556[(4)])));

return statearr_12695;
})();
var state_12556__$1 = state_12556;
var statearr_12696_12891 = state_12556__$1;
(statearr_12696_12891[(1)] = (63));



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12557 === (28))){
var _ = (function (){var statearr_12698 = state_12556;
(statearr_12698[(4)] = cljs.core.cons.call(null,(35),(state_12556[(4)])));

return statearr_12698;
})();
var inst_12380 = eos_cljs.core.transact.call(null,e2e.proposals.prop_acc,"init",e2e.proposals.prop_config);
var inst_12381 = cljs.core.async.interop.p__GT_c.call(null,inst_12380);
var state_12556__$1 = state_12556;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12556__$1,(36),inst_12381);
} else {
if((state_val_12557 === (60))){
var inst_12495 = (state_12556[(2)]);
var _ = (function (){var statearr_12699 = state_12556;
(statearr_12699[(4)] = cljs.core.rest.call(null,(state_12556[(4)])));

return statearr_12699;
})();
var state_12556__$1 = state_12556;
var statearr_12700_12892 = state_12556__$1;
(statearr_12700_12892[(2)] = inst_12495);

(statearr_12700_12892[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12557 === (29))){
var inst_12424 = (state_12556[(2)]);
var state_12556__$1 = (function (){var statearr_12701 = state_12556;
(statearr_12701[(28)] = inst_12424);

return statearr_12701;
})();
var statearr_12702_12893 = state_12556__$1;
(statearr_12702_12893[(2)] = null);

(statearr_12702_12893[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12557 === (61))){
var inst_12468 = (state_12556[(2)]);
var inst_12469 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_12470 = true;
var inst_12471 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can update after init",inst_12470,inst_12468];
var inst_12472 = cljs.core.PersistentHashMap.fromArrays(inst_12469,inst_12471);
var inst_12473 = cljs.test.do_report.call(null,inst_12472);
var state_12556__$1 = state_12556;
var statearr_12704_12894 = state_12556__$1;
(statearr_12704_12894[(2)] = inst_12473);

(statearr_12704_12894[(1)] = (60));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12557 === (30))){
var inst_12355 = (state_12556[(2)]);
var inst_12356 = cljs.core.prn.call(null,"test failed with ",inst_12355);
var state_12556__$1 = (function (){var statearr_12705 = state_12556;
(statearr_12705[(29)] = inst_12356);

return statearr_12705;
})();
var statearr_12706_12895 = state_12556__$1;
(statearr_12706_12895[(2)] = null);

(statearr_12706_12895[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12557 === (62))){
var _ = (function (){var statearr_12707 = state_12556;
(statearr_12707[(4)] = cljs.core.rest.call(null,(state_12556[(4)])));

return statearr_12707;
})();
var state_12556__$1 = state_12556;
var ex12703 = (state_12556__$1[(2)]);
var statearr_12708_12896 = state_12556__$1;
(statearr_12708_12896[(5)] = ex12703);


var statearr_12709_12897 = state_12556__$1;
(statearr_12709_12897[(1)] = (61));

(statearr_12709_12897[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12557 === (31))){
var _ = (function (){var statearr_12710 = state_12556;
(statearr_12710[(4)] = cljs.core.cons.call(null,(34),(state_12556[(4)])));

return statearr_12710;
})();
var inst_12368 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_12369 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can init"];
var inst_12370 = cljs.core.PersistentHashMap.fromArrays(inst_12368,inst_12369);
var inst_12371 = cljs.test.do_report.call(null,inst_12370);
var ___$1 = (function (){var statearr_12711 = state_12556;
(statearr_12711[(4)] = cljs.core.rest.call(null,(state_12556[(4)])));

return statearr_12711;
})();
var state_12556__$1 = state_12556;
var statearr_12712_12898 = state_12556__$1;
(statearr_12712_12898[(2)] = inst_12371);

(statearr_12712_12898[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_12557 === (63))){
var inst_12480 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_12481 = true;
var inst_12482 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"can update after init",inst_12481,true];
var inst_12483 = cljs.core.PersistentHashMap.fromArrays(inst_12480,inst_12482);
var inst_12484 = cljs.test.do_report.call(null,inst_12483);
var state_12556__$1 = state_12556;
var statearr_12713_12899 = state_12556__$1;
(statearr_12713_12899[(2)] = inst_12484);

(statearr_12713_12899[(1)] = (65));


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
}
}
}
});})(c__19__auto__,___192__auto__))
;
return ((function (switch__14__auto__,c__19__auto__,___192__auto__){
return (function() {
var e2e$proposals$state_machine__15__auto__ = null;
var e2e$proposals$state_machine__15__auto____0 = (function (){
var statearr_12714 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12714[(0)] = e2e$proposals$state_machine__15__auto__);

(statearr_12714[(1)] = (1));

return statearr_12714;
});
var e2e$proposals$state_machine__15__auto____1 = (function (state_12556){
while(true){
var ret_value__16__auto__ = (function (){try{while(true){
var result__17__auto__ = switch__14__auto__.call(null,state_12556);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__17__auto__;
}
break;
}
}catch (e12715){var ex__18__auto__ = e12715;
var statearr_12716_12900 = state_12556;
(statearr_12716_12900[(2)] = ex__18__auto__);


if(cljs.core.seq.call(null,(state_12556[(4)]))){
var statearr_12717_12901 = state_12556;
(statearr_12717_12901[(1)] = cljs.core.first.call(null,(state_12556[(4)])));

} else {
throw ex__18__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__12902 = state_12556;
state_12556 = G__12902;
continue;
} else {
return ret_value__16__auto__;
}
break;
}
});
e2e$proposals$state_machine__15__auto__ = function(state_12556){
switch(arguments.length){
case 0:
return e2e$proposals$state_machine__15__auto____0.call(this);
case 1:
return e2e$proposals$state_machine__15__auto____1.call(this,state_12556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
e2e$proposals$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$0 = e2e$proposals$state_machine__15__auto____0;
e2e$proposals$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$1 = e2e$proposals$state_machine__15__auto____1;
return e2e$proposals$state_machine__15__auto__;
})()
;})(switch__14__auto__,c__19__auto__,___192__auto__))
})();
var state__21__auto__ = (function (){var statearr_12718 = f__20__auto__.call(null);
(statearr_12718[(6)] = c__19__auto__);

return statearr_12718;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21__auto__);
});})(c__19__auto__,___192__auto__))
);

return c__19__auto__;
});

e2e.proposals.t_e2e$proposals11815.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta11816","meta11816",(-626536333),null)], null);
});

e2e.proposals.t_e2e$proposals11815.cljs$lang$type = true;

e2e.proposals.t_e2e$proposals11815.cljs$lang$ctorStr = "e2e.proposals/t_e2e$proposals11815";

e2e.proposals.t_e2e$proposals11815.cljs$lang$ctorPrWriter = (function (this__9776__auto__,writer__9777__auto__,opt__9778__auto__){
return cljs.core._write.call(null,writer__9777__auto__,"e2e.proposals/t_e2e$proposals11815");
});

/**
 * Positional factory function for e2e.proposals/t_e2e$proposals11815.
 */
e2e.proposals.__GT_t_e2e$proposals11815 = (function e2e$proposals$__GT_t_e2e$proposals11815(meta11816){
return (new e2e.proposals.t_e2e$proposals11815(meta11816));
});

}

return (new e2e.proposals.t_e2e$proposals11815(null));
});

e2e.proposals.init.cljs$lang$var = new cljs.core.Var(function(){return e2e.proposals.init;},new cljs.core.Symbol("e2e.proposals","init","e2e.proposals/init",(-458618888),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"e2e.proposals","e2e.proposals",(1479174227),null),new cljs.core.Symbol(null,"init","init",(-234949907),null),"e2e/proposals.cljs",(14),(1),(46),(46),cljs.core.List.EMPTY,null,(cljs.core.truth_(e2e.proposals.init)?e2e.proposals.init.cljs$lang$test:null)]));
e2e.proposals.base_prop = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"author","author",(2111686192)),e2e.proposals.owner_acc,new cljs.core.Keyword(null,"pay","pay",(-1672734919)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field_0","field_0",(-108942754)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"quantity","quantity",(-1929050694)),"400.0000 EFX",new cljs.core.Keyword(null,"contract","contract",(798152745)),e2e.proposals.token_acc], null),new cljs.core.Keyword(null,"field_1","field_1",(1792775021)),"2010-01-12"], null)], null),new cljs.core.Keyword(null,"content_hash","content_hash",(121497903)),"aa",new cljs.core.Keyword(null,"category","category",(-593092832)),(0),new cljs.core.Keyword(null,"cycle","cycle",(710365284)),(0),new cljs.core.Keyword(null,"transaction_hash","transaction_hash",(-1321280573)),null], null);
e2e.proposals.proposal_payment = (function e2e$proposals$proposal_payment(){
return cljs.test.test_var.call(null,e2e.proposals.proposal_payment.cljs$lang$var);
});
e2e.proposals.proposal_payment.cljs$lang$test = (function (){
if((typeof e2e !== 'undefined') && (typeof e2e.proposals !== 'undefined') && (typeof e2e.proposals.t_e2e$proposals12903 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IFn}
*/
e2e.proposals.t_e2e$proposals12903 = (function (meta12904){
this.meta12904 = meta12904;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
e2e.proposals.t_e2e$proposals12903.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12905,meta12904__$1){
var self__ = this;
var _12905__$1 = this;
return (new e2e.proposals.t_e2e$proposals12903(meta12904__$1));
});

e2e.proposals.t_e2e$proposals12903.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12905){
var self__ = this;
var _12905__$1 = this;
return self__.meta12904;
});

e2e.proposals.t_e2e$proposals12903.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL;

e2e.proposals.t_e2e$proposals12903.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___192__auto__ = self____$1;
var c__19__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19__auto__,___192__auto__,self____$1){
return (function (){
var f__20__auto__ = (function (){var switch__14__auto__ = ((function (c__19__auto__,___192__auto__,self____$1){
return (function (state_13186){
var state_val_13187 = (state_13186[(1)]);
if((state_val_13187 === (32))){
var _ = (function (){var statearr_13188 = state_13186;
(statearr_13188[(4)] = cljs.core.cons.call(null,(45),(state_13186[(4)])));

return statearr_13188;
})();
var inst_13058 = [new cljs.core.Keyword(null,"from","from",(1815293044)),new cljs.core.Keyword(null,"to","to",(192099007)),new cljs.core.Keyword(null,"quantity","quantity",(-1929050694)),new cljs.core.Keyword(null,"memo","memo",(-1928616099))];
var inst_13059 = [e2e.proposals.owner_acc,e2e.proposals.prop_acc,"1.5000 EFX","proposal"];
var inst_13060 = cljs.core.PersistentHashMap.fromArrays(inst_13058,inst_13059);
var inst_13061 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13062 = [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),new cljs.core.Keyword(null,"permission","permission",(-511292572))];
var inst_13063 = [e2e.proposals.owner_acc,"active"];
var inst_13064 = cljs.core.PersistentHashMap.fromArrays(inst_13062,inst_13063);
var inst_13065 = [inst_13064];
var inst_13066 = (new cljs.core.PersistentVector(null,(1),(5),inst_13061,inst_13065,null));
var inst_13067 = eos_cljs.core.transact.call(null,e2e.proposals.token_acc,"transfer",inst_13060,inst_13066);
var inst_13068 = cljs.core.async.interop.p__GT_c.call(null,inst_13067);
var state_13186__$1 = state_13186;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13186__$1,(46),inst_13068);
} else {
if((state_val_13187 === (64))){
var inst_13139 = (state_13186[(7)]);
var state_13186__$1 = state_13186;
var statearr_13189_13769 = state_13186__$1;
(statearr_13189_13769[(2)] = inst_13139);

(statearr_13189_13769[(1)] = (65));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13187 === (1))){
var state_13186__$1 = state_13186;
var statearr_13190_13770 = state_13186__$1;
(statearr_13190_13770[(2)] = null);

(statearr_13190_13770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13187 === (33))){
var inst_13101 = (state_13186[(2)]);
var state_13186__$1 = (function (){var statearr_13191 = state_13186;
(statearr_13191[(8)] = inst_13101);

return statearr_13191;
})();
var statearr_13192_13771 = state_13186__$1;
(statearr_13192_13771[(2)] = null);

(statearr_13192_13771[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13187 === (65))){
var inst_13149 = (state_13186[(2)]);
var state_13186__$1 = (function (){var statearr_13193 = state_13186;
(statearr_13193[(9)] = inst_13149);

return statearr_13193;
})();
var statearr_13194_13772 = state_13186__$1;
(statearr_13194_13772[(2)] = null);

(statearr_13194_13772[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13187 === (2))){
var _ = (function (){var statearr_13195 = state_13186;
(statearr_13195[(4)] = cljs.core.cons.call(null,(5),(state_13186[(4)])));

return statearr_13195;
})();
var inst_12914 = eos_cljs.core.transact.call(null,e2e.proposals.prop_acc,"update",e2e.proposals.prop_config);
var inst_12915 = cljs.core.async.interop.p__GT_c.call(null,inst_12914);
var state_13186__$1 = state_13186;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13186__$1,(6),inst_12915);
} else {
if((state_val_13187 === (34))){
var inst_13016 = (state_13186[(10)]);
var inst_13017 = (state_13186[(11)]);
var inst_13014 = (state_13186[(2)]);
var inst_13015 = inst_13014.cause;
var inst_13016__$1 = inst_13015.message;
var inst_13017__$1 = clojure.string.ends_with_QMARK_.call(null,inst_13016__$1,"wrong amount");
var inst_13018 = (!(inst_13017__$1));
var state_13186__$1 = (function (){var statearr_13196 = state_13186;
(statearr_13196[(10)] = inst_13016__$1);

(statearr_13196[(11)] = inst_13017__$1);

return statearr_13196;
})();
if(inst_13018){
var statearr_13197_13773 = state_13186__$1;
(statearr_13197_13773[(1)] = (35));

} else {
var statearr_13198_13774 = state_13186__$1;
(statearr_13198_13774[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13187 === (66))){
var _ = (function (){var statearr_13199 = state_13186;
(statearr_13199[(4)] = cljs.core.cons.call(null,(69),(state_13186[(4)])));

return statearr_13199;
})();
var state_13186__$1 = state_13186;
var statearr_13200_13775 = state_13186__$1;
(statearr_13200_13775[(1)] = (70));



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13187 === (3))){
var inst_13183 = (state_13186[(2)]);
var inst_13184 = done.call(null);
var state_13186__$1 = (function (){var statearr_13202 = state_13186;
(statearr_13202[(12)] = inst_13183);

return statearr_13202;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13186__$1,inst_13184);
} else {
if((state_val_13187 === (35))){
var inst_13016 = (state_13186[(10)]);
var inst_13020 = ["expected =","wrong amount"," actual = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_13016)].join('');
var inst_13021 = cljs.core.prn.call(null,inst_13020);
var state_13186__$1 = state_13186;
var statearr_13203_13776 = state_13186__$1;
(statearr_13203_13776[(2)] = inst_13021);

(statearr_13203_13776[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13187 === (67))){
var inst_13177 = (state_13186[(2)]);
var _ = (function (){var statearr_13204 = state_13186;
(statearr_13204[(4)] = cljs.core.rest.call(null,(state_13186[(4)])));

return statearr_13204;
})();
var state_13186__$1 = state_13186;
var statearr_13205_13777 = state_13186__$1;
(statearr_13205_13777[(2)] = inst_13177);

(statearr_13205_13777[(1)] = (55));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13187 === (4))){
var inst_12907 = (state_13186[(2)]);
var inst_12908 = cljs.core.prn.call(null,inst_12907);
var state_13186__$1 = state_13186;
var statearr_13206_13778 = state_13186__$1;
(statearr_13206_13778[(2)] = inst_12908);

(statearr_13206_13778[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13187 === (36))){
var state_13186__$1 = state_13186;
var statearr_13208_13779 = state_13186__$1;
(statearr_13208_13779[(2)] = null);

(statearr_13208_13779[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13187 === (68))){
var inst_13150 = (state_13186[(2)]);
var inst_13151 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_13152 = true;
var inst_13153 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can send correct amount",inst_13152,inst_13150];
var inst_13154 = cljs.core.PersistentHashMap.fromArrays(inst_13151,inst_13153);
var inst_13155 = cljs.test.do_report.call(null,inst_13154);
var state_13186__$1 = state_13186;
var statearr_13209_13780 = state_13186__$1;
(statearr_13209_13780[(2)] = inst_13155);

(statearr_13209_13780[(1)] = (67));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13187 === (5))){
var _ = (function (){var statearr_13211 = state_13186;
(statearr_13211[(4)] = cljs.core.rest.call(null,(state_13186[(4)])));

return statearr_13211;
})();
var state_13186__$1 = state_13186;
var ex13207 = (state_13186__$1[(2)]);
var statearr_13212_13781 = state_13186__$1;
(statearr_13212_13781[(5)] = ex13207);


if((ex13207 instanceof Error)){
var statearr_13213_13782 = state_13186__$1;
(statearr_13213_13782[(1)] = (4));

(statearr_13213_13782[(5)] = null);

} else {
throw ex13207;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13187 === (37))){
var inst_13024 = (state_13186[(2)]);
var state_13186__$1 = (function (){var statearr_13214 = state_13186;
(statearr_13214[(13)] = inst_13024);

return statearr_13214;
})();
var statearr_13215_13783 = state_13186__$1;
(statearr_13215_13783[(2)] = null);

(statearr_13215_13783[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13187 === (69))){
var _ = (function (){var statearr_13216 = state_13186;
(statearr_13216[(4)] = cljs.core.rest.call(null,(state_13186[(4)])));

return statearr_13216;
})();
var state_13186__$1 = state_13186;
var ex13210 = (state_13186__$1[(2)]);
var statearr_13217_13784 = state_13186__$1;
(statearr_13217_13784[(5)] = ex13210);


var statearr_13218_13785 = state_13186__$1;
(statearr_13218_13785[(1)] = (68));

(statearr_13218_13785[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13187 === (6))){
var inst_12917 = (state_13186[(14)]);
var inst_12917__$1 = (state_13186[(2)]);
var inst_12918 = (inst_12917__$1 instanceof cljs.core.ExceptionInfo);
var inst_12919 = cljs.core.ex_data.call(null,inst_12917__$1);
var inst_12920 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_12919);
var inst_12921 = cljs.core._EQ_.call(null,inst_12920,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_12922 = ((inst_12918) && (inst_12921));
var state_13186__$1 = (function (){var statearr_13219 = state_13186;
(statearr_13219[(14)] = inst_12917__$1);

return statearr_13219;
})();
if(cljs.core.truth_(inst_12922)){
var statearr_13220_13786 = state_13186__$1;
(statearr_13220_13786[(1)] = (7));

} else {
var statearr_13221_13787 = state_13186__$1;
(statearr_13221_13787[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13187 === (38))){
var inst_13017 = (state_13186[(11)]);
var _ = (function (){var statearr_13222 = state_13186;
(statearr_13222[(4)] = cljs.core.cons.call(null,(41),(state_13186[(4)])));

return statearr_13222;
})();
var state_13186__$1 = state_13186;
if(cljs.core.truth_(inst_13017)){
var statearr_13223_13788 = state_13186__$1;
(statearr_13223_13788[(1)] = (42));

} else {
var statearr_13224_13789 = state_13186__$1;
(statearr_13224_13789[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13187 === (70))){
var inst_13162 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_13163 = true;
var inst_13164 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"can send correct amount",inst_13163,true];
var inst_13165 = cljs.core.PersistentHashMap.fromArrays(inst_13162,inst_13164);
var inst_13166 = cljs.test.do_report.call(null,inst_13165);
var state_13186__$1 = state_13186;
var statearr_13225_13790 = state_13186__$1;
(statearr_13225_13790[(2)] = inst_13166);

(statearr_13225_13790[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13187 === (7))){
var inst_12917 = (state_13186[(14)]);
var inst_12924 = (function(){throw inst_12917})();
var state_13186__$1 = state_13186;
var statearr_13226_13791 = state_13186__$1;
(statearr_13226_13791[(2)] = inst_12924);

(statearr_13226_13791[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13187 === (39))){
var inst_13052 = (state_13186[(2)]);
var state_13186__$1 = state_13186;
var statearr_13227_13792 = state_13186__$1;
(statearr_13227_13792[(2)] = inst_13052);

(statearr_13227_13792[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13187 === (71))){
var inst_13168 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_13169 = true;
var inst_13170 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can send correct amount",inst_13169,true];
var inst_13171 = cljs.core.PersistentHashMap.fromArrays(inst_13168,inst_13170);
var inst_13172 = cljs.test.do_report.call(null,inst_13171);
var state_13186__$1 = state_13186;
var statearr_13228_13793 = state_13186__$1;
(statearr_13228_13793[(2)] = inst_13172);

(statearr_13228_13793[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13187 === (8))){
var inst_12917 = (state_13186[(14)]);
var state_13186__$1 = state_13186;
var statearr_13229_13794 = state_13186__$1;
(statearr_13229_13794[(2)] = inst_12917);

(statearr_13229_13794[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13187 === (40))){
var inst_13025 = (state_13186[(2)]);
var inst_13026 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_13027 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_13028 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"needs correct amount",inst_13027,inst_13025];
var inst_13029 = cljs.core.PersistentHashMap.fromArrays(inst_13026,inst_13028);
var inst_13030 = cljs.test.do_report.call(null,inst_13029);
var state_13186__$1 = state_13186;
var statearr_13230_13795 = state_13186__$1;
(statearr_13230_13795[(2)] = inst_13030);

(statearr_13230_13795[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13187 === (72))){
var inst_13174 = (state_13186[(2)]);
var _ = (function (){var statearr_13232 = state_13186;
(statearr_13232[(4)] = cljs.core.rest.call(null,(state_13186[(4)])));

return statearr_13232;
})();
var state_13186__$1 = (function (){var statearr_13233 = state_13186;
(statearr_13233[(15)] = inst_13174);

return statearr_13233;
})();
var statearr_13234_13796 = state_13186__$1;
(statearr_13234_13796[(2)] = true);

(statearr_13234_13796[(1)] = (67));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13187 === (9))){
var inst_12927 = (state_13186[(2)]);
var state_13186__$1 = (function (){var statearr_13235 = state_13186;
(statearr_13235[(16)] = inst_12927);

return statearr_13235;
})();
var statearr_13236_13797 = state_13186__$1;
(statearr_13236_13797[(2)] = null);

(statearr_13236_13797[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13187 === (41))){
var _ = (function (){var statearr_13237 = state_13186;
(statearr_13237[(4)] = cljs.core.rest.call(null,(state_13186[(4)])));

return statearr_13237;
})();
var state_13186__$1 = state_13186;
var ex13231 = (state_13186__$1[(2)]);
var statearr_13238_13798 = state_13186__$1;
(statearr_13238_13798[(5)] = ex13231);


var statearr_13239_13799 = state_13186__$1;
(statearr_13239_13799[(1)] = (40));

(statearr_13239_13799[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13187 === (10))){
var _ = (function (){var statearr_13240 = state_13186;
(statearr_13240[(4)] = cljs.core.cons.call(null,(23),(state_13186[(4)])));

return statearr_13240;
})();
var inst_12972 = cljs.core.assoc.call(null,e2e.proposals.base_prop,new cljs.core.Keyword(null,"content_hash","content_hash",(121497903)),"ee");
var inst_12973 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12974 = [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),new cljs.core.Keyword(null,"permission","permission",(-511292572))];
var inst_12975 = [e2e.proposals.owner_acc,"active"];
var inst_12976 = cljs.core.PersistentHashMap.fromArrays(inst_12974,inst_12975);
var inst_12977 = [inst_12976];
var inst_12978 = (new cljs.core.PersistentVector(null,(1),(5),inst_12973,inst_12977,null));
var inst_12979 = eos_cljs.core.transact.call(null,e2e.proposals.prop_acc,"createprop",inst_12972,inst_12978);
var inst_12980 = cljs.core.async.interop.p__GT_c.call(null,inst_12979);
var state_13186__$1 = state_13186;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13186__$1,(24),inst_12980);
} else {
if((state_val_13187 === (42))){
var inst_13017 = (state_13186[(11)]);
var inst_13037 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_13038 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_13039 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"needs correct amount",inst_13038,inst_13017];
var inst_13040 = cljs.core.PersistentHashMap.fromArrays(inst_13037,inst_13039);
var inst_13041 = cljs.test.do_report.call(null,inst_13040);
var state_13186__$1 = state_13186;
var statearr_13241_13800 = state_13186__$1;
(statearr_13241_13800[(2)] = inst_13041);

(statearr_13241_13800[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13187 === (11))){
var inst_13013 = (state_13186[(2)]);
var state_13186__$1 = (function (){var statearr_13242 = state_13186;
(statearr_13242[(17)] = inst_13013);

return statearr_13242;
})();
var statearr_13243_13801 = state_13186__$1;
(statearr_13243_13801[(2)] = null);

(statearr_13243_13801[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13187 === (43))){
var inst_13017 = (state_13186[(11)]);
var inst_13043 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_13044 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_13045 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"needs correct amount",inst_13044,inst_13017];
var inst_13046 = cljs.core.PersistentHashMap.fromArrays(inst_13043,inst_13045);
var inst_13047 = cljs.test.do_report.call(null,inst_13046);
var state_13186__$1 = state_13186;
var statearr_13244_13802 = state_13186__$1;
(statearr_13244_13802[(2)] = inst_13047);

(statearr_13244_13802[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13187 === (12))){
var inst_12930 = (state_13186[(18)]);
var inst_12931 = (state_13186[(19)]);
var inst_12928 = (state_13186[(2)]);
var inst_12929 = inst_12928.cause;
var inst_12930__$1 = inst_12929.message;
var inst_12931__$1 = clojure.string.ends_with_QMARK_.call(null,inst_12930__$1,"no proposal reserved");
var inst_12932 = (!(inst_12931__$1));
var state_13186__$1 = (function (){var statearr_13245 = state_13186;
(statearr_13245[(18)] = inst_12930__$1);

(statearr_13245[(19)] = inst_12931__$1);

return statearr_13245;
})();
if(inst_12932){
var statearr_13246_13803 = state_13186__$1;
(statearr_13246_13803[(1)] = (13));

} else {
var statearr_13247_13804 = state_13186__$1;
(statearr_13247_13804[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13187 === (44))){
var inst_13017 = (state_13186[(11)]);
var inst_13049 = (state_13186[(2)]);
var _ = (function (){var statearr_13249 = state_13186;
(statearr_13249[(4)] = cljs.core.rest.call(null,(state_13186[(4)])));

return statearr_13249;
})();
var state_13186__$1 = (function (){var statearr_13250 = state_13186;
(statearr_13250[(20)] = inst_13049);

return statearr_13250;
})();
var statearr_13251_13805 = state_13186__$1;
(statearr_13251_13805[(2)] = inst_13017);

(statearr_13251_13805[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13187 === (13))){
var inst_12930 = (state_13186[(18)]);
var inst_12934 = ["expected =","no proposal reserved"," actual = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_12930)].join('');
var inst_12935 = cljs.core.prn.call(null,inst_12934);
var state_13186__$1 = state_13186;
var statearr_13252_13806 = state_13186__$1;
(statearr_13252_13806[(2)] = inst_12935);

(statearr_13252_13806[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13187 === (45))){
var _ = (function (){var statearr_13253 = state_13186;
(statearr_13253[(4)] = cljs.core.rest.call(null,(state_13186[(4)])));

return statearr_13253;
})();
var state_13186__$1 = state_13186;
var ex13248 = (state_13186__$1[(2)]);
var statearr_13254_13807 = state_13186__$1;
(statearr_13254_13807[(5)] = ex13248);


if((ex13248 instanceof Error)){
var statearr_13255_13808 = state_13186__$1;
(statearr_13255_13808[(1)] = (34));

(statearr_13255_13808[(5)] = null);

} else {
throw ex13248;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13187 === (14))){
var state_13186__$1 = state_13186;
var statearr_13256_13809 = state_13186__$1;
(statearr_13256_13809[(2)] = null);

(statearr_13256_13809[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13187 === (46))){
var inst_13070 = (state_13186[(21)]);
var inst_13070__$1 = (state_13186[(2)]);
var inst_13071 = (inst_13070__$1 instanceof cljs.core.ExceptionInfo);
var inst_13072 = cljs.core.ex_data.call(null,inst_13070__$1);
var inst_13073 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_13072);
var inst_13074 = cljs.core._EQ_.call(null,inst_13073,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_13075 = ((inst_13071) && (inst_13074));
var state_13186__$1 = (function (){var statearr_13257 = state_13186;
(statearr_13257[(21)] = inst_13070__$1);

return statearr_13257;
})();
if(cljs.core.truth_(inst_13075)){
var statearr_13258_13810 = state_13186__$1;
(statearr_13258_13810[(1)] = (47));

} else {
var statearr_13259_13811 = state_13186__$1;
(statearr_13259_13811[(1)] = (48));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13187 === (15))){
var inst_12938 = (state_13186[(2)]);
var state_13186__$1 = (function (){var statearr_13260 = state_13186;
(statearr_13260[(22)] = inst_12938);

return statearr_13260;
})();
var statearr_13261_13812 = state_13186__$1;
(statearr_13261_13812[(2)] = null);

(statearr_13261_13812[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13187 === (47))){
var inst_13070 = (state_13186[(21)]);
var inst_13077 = (function(){throw inst_13070})();
var state_13186__$1 = state_13186;
var statearr_13262_13813 = state_13186__$1;
(statearr_13262_13813[(2)] = inst_13077);

(statearr_13262_13813[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13187 === (16))){
var inst_12931 = (state_13186[(19)]);
var _ = (function (){var statearr_13263 = state_13186;
(statearr_13263[(4)] = cljs.core.cons.call(null,(19),(state_13186[(4)])));

return statearr_13263;
})();
var state_13186__$1 = state_13186;
if(cljs.core.truth_(inst_12931)){
var statearr_13264_13814 = state_13186__$1;
(statearr_13264_13814[(1)] = (20));

} else {
var statearr_13265_13815 = state_13186__$1;
(statearr_13265_13815[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13187 === (48))){
var inst_13070 = (state_13186[(21)]);
var state_13186__$1 = state_13186;
var statearr_13266_13816 = state_13186__$1;
(statearr_13266_13816[(2)] = inst_13070);

(statearr_13266_13816[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13187 === (17))){
var inst_12966 = (state_13186[(2)]);
var state_13186__$1 = state_13186;
var statearr_13267_13817 = state_13186__$1;
(statearr_13267_13817[(2)] = inst_12966);

(statearr_13267_13817[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13187 === (49))){
var inst_13080 = (state_13186[(2)]);
var state_13186__$1 = (function (){var statearr_13268 = state_13186;
(statearr_13268[(23)] = inst_13080);

return statearr_13268;
})();
var statearr_13269_13818 = state_13186__$1;
(statearr_13269_13818[(2)] = null);

(statearr_13269_13818[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13187 === (18))){
var inst_12939 = (state_13186[(2)]);
var inst_12940 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_12941 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_12942 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"need a reservation",inst_12941,inst_12939];
var inst_12943 = cljs.core.PersistentHashMap.fromArrays(inst_12940,inst_12942);
var inst_12944 = cljs.test.do_report.call(null,inst_12943);
var state_13186__$1 = state_13186;
var statearr_13271_13819 = state_13186__$1;
(statearr_13271_13819[(2)] = inst_12944);

(statearr_13271_13819[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13187 === (50))){
var _ = (function (){var statearr_13272 = state_13186;
(statearr_13272[(4)] = cljs.core.cons.call(null,(53),(state_13186[(4)])));

return statearr_13272;
})();
var inst_13092 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_13093 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"needs correct amount"];
var inst_13094 = cljs.core.PersistentHashMap.fromArrays(inst_13092,inst_13093);
var inst_13095 = cljs.test.do_report.call(null,inst_13094);
var ___$1 = (function (){var statearr_13273 = state_13186;
(statearr_13273[(4)] = cljs.core.rest.call(null,(state_13186[(4)])));

return statearr_13273;
})();
var state_13186__$1 = state_13186;
var statearr_13274_13820 = state_13186__$1;
(statearr_13274_13820[(2)] = inst_13095);

(statearr_13274_13820[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13187 === (19))){
var _ = (function (){var statearr_13275 = state_13186;
(statearr_13275[(4)] = cljs.core.rest.call(null,(state_13186[(4)])));

return statearr_13275;
})();
var state_13186__$1 = state_13186;
var ex13270 = (state_13186__$1[(2)]);
var statearr_13276_13821 = state_13186__$1;
(statearr_13276_13821[(5)] = ex13270);


var statearr_13277_13822 = state_13186__$1;
(statearr_13277_13822[(1)] = (18));

(statearr_13277_13822[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13187 === (51))){
var inst_13098 = (state_13186[(2)]);
var _ = (function (){var statearr_13278 = state_13186;
(statearr_13278[(4)] = cljs.core.rest.call(null,(state_13186[(4)])));

return statearr_13278;
})();
var state_13186__$1 = state_13186;
var statearr_13279_13823 = state_13186__$1;
(statearr_13279_13823[(2)] = inst_13098);

(statearr_13279_13823[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13187 === (20))){
var inst_12931 = (state_13186[(19)]);
var inst_12951 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_12952 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_12953 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"need a reservation",inst_12952,inst_12931];
var inst_12954 = cljs.core.PersistentHashMap.fromArrays(inst_12951,inst_12953);
var inst_12955 = cljs.test.do_report.call(null,inst_12954);
var state_13186__$1 = state_13186;
var statearr_13280_13824 = state_13186__$1;
(statearr_13280_13824[(2)] = inst_12955);

(statearr_13280_13824[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13187 === (52))){
var inst_13081 = (state_13186[(2)]);
var inst_13082 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_13083 = null;
var inst_13084 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"needs correct amount",inst_13083,inst_13081];
var inst_13085 = cljs.core.PersistentHashMap.fromArrays(inst_13082,inst_13084);
var inst_13086 = cljs.test.do_report.call(null,inst_13085);
var state_13186__$1 = state_13186;
var statearr_13282_13825 = state_13186__$1;
(statearr_13282_13825[(2)] = inst_13086);

(statearr_13282_13825[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13187 === (21))){
var inst_12931 = (state_13186[(19)]);
var inst_12957 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_12958 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_12959 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"need a reservation",inst_12958,inst_12931];
var inst_12960 = cljs.core.PersistentHashMap.fromArrays(inst_12957,inst_12959);
var inst_12961 = cljs.test.do_report.call(null,inst_12960);
var state_13186__$1 = state_13186;
var statearr_13283_13826 = state_13186__$1;
(statearr_13283_13826[(2)] = inst_12961);

(statearr_13283_13826[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13187 === (53))){
var _ = (function (){var statearr_13284 = state_13186;
(statearr_13284[(4)] = cljs.core.rest.call(null,(state_13186[(4)])));

return statearr_13284;
})();
var state_13186__$1 = state_13186;
var ex13281 = (state_13186__$1[(2)]);
var statearr_13285_13827 = state_13186__$1;
(statearr_13285_13827[(5)] = ex13281);


var statearr_13286_13828 = state_13186__$1;
(statearr_13286_13828[(1)] = (52));

(statearr_13286_13828[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13187 === (22))){
var inst_12931 = (state_13186[(19)]);
var inst_12963 = (state_13186[(2)]);
var _ = (function (){var statearr_13288 = state_13186;
(statearr_13288[(4)] = cljs.core.rest.call(null,(state_13186[(4)])));

return statearr_13288;
})();
var state_13186__$1 = (function (){var statearr_13289 = state_13186;
(statearr_13289[(24)] = inst_12963);

return statearr_13289;
})();
var statearr_13290_13829 = state_13186__$1;
(statearr_13290_13829[(2)] = inst_12931);

(statearr_13290_13829[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13187 === (54))){
var _ = (function (){var statearr_13291 = state_13186;
(statearr_13291[(4)] = cljs.core.cons.call(null,(61),(state_13186[(4)])));

return statearr_13291;
})();
var inst_13127 = [new cljs.core.Keyword(null,"from","from",(1815293044)),new cljs.core.Keyword(null,"to","to",(192099007)),new cljs.core.Keyword(null,"quantity","quantity",(-1929050694)),new cljs.core.Keyword(null,"memo","memo",(-1928616099))];
var inst_13128 = [e2e.proposals.owner_acc,e2e.proposals.prop_acc,e2e.proposals.proposal_cost,"proposal"];
var inst_13129 = cljs.core.PersistentHashMap.fromArrays(inst_13127,inst_13128);
var inst_13130 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13131 = [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),new cljs.core.Keyword(null,"permission","permission",(-511292572))];
var inst_13132 = [e2e.proposals.owner_acc,"active"];
var inst_13133 = cljs.core.PersistentHashMap.fromArrays(inst_13131,inst_13132);
var inst_13134 = [inst_13133];
var inst_13135 = (new cljs.core.PersistentVector(null,(1),(5),inst_13130,inst_13134,null));
var inst_13136 = eos_cljs.core.transact.call(null,e2e.proposals.token_acc,"transfer",inst_13129,inst_13135);
var inst_13137 = cljs.core.async.interop.p__GT_c.call(null,inst_13136);
var state_13186__$1 = state_13186;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13186__$1,(62),inst_13137);
} else {
if((state_val_13187 === (23))){
var _ = (function (){var statearr_13292 = state_13186;
(statearr_13292[(4)] = cljs.core.rest.call(null,(state_13186[(4)])));

return statearr_13292;
})();
var state_13186__$1 = state_13186;
var ex13287 = (state_13186__$1[(2)]);
var statearr_13293_13830 = state_13186__$1;
(statearr_13293_13830[(5)] = ex13287);


if((ex13287 instanceof Error)){
var statearr_13294_13831 = state_13186__$1;
(statearr_13294_13831[(1)] = (12));

(statearr_13294_13831[(5)] = null);

} else {
throw ex13287;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13187 === (55))){
var inst_13180 = (state_13186[(2)]);
var _ = (function (){var statearr_13295 = state_13186;
(statearr_13295[(4)] = cljs.core.rest.call(null,(state_13186[(4)])));

return statearr_13295;
})();
var state_13186__$1 = state_13186;
var statearr_13296_13832 = state_13186__$1;
(statearr_13296_13832[(2)] = inst_13180);

(statearr_13296_13832[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13187 === (24))){
var inst_12982 = (state_13186[(25)]);
var inst_12982__$1 = (state_13186[(2)]);
var inst_12983 = (inst_12982__$1 instanceof cljs.core.ExceptionInfo);
var inst_12984 = cljs.core.ex_data.call(null,inst_12982__$1);
var inst_12985 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_12984);
var inst_12986 = cljs.core._EQ_.call(null,inst_12985,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_12987 = ((inst_12983) && (inst_12986));
var state_13186__$1 = (function (){var statearr_13297 = state_13186;
(statearr_13297[(25)] = inst_12982__$1);

return statearr_13297;
})();
if(cljs.core.truth_(inst_12987)){
var statearr_13298_13833 = state_13186__$1;
(statearr_13298_13833[(1)] = (25));

} else {
var statearr_13299_13834 = state_13186__$1;
(statearr_13299_13834[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13187 === (56))){
var inst_13102 = (state_13186[(2)]);
var inst_13103 = cljs.core.prn.call(null,"test failed with ",inst_13102);
var state_13186__$1 = (function (){var statearr_13300 = state_13186;
(statearr_13300[(26)] = inst_13103);

return statearr_13300;
})();
var statearr_13301_13835 = state_13186__$1;
(statearr_13301_13835[(2)] = null);

(statearr_13301_13835[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13187 === (25))){
var inst_12982 = (state_13186[(25)]);
var inst_12989 = (function(){throw inst_12982})();
var state_13186__$1 = state_13186;
var statearr_13302_13836 = state_13186__$1;
(statearr_13302_13836[(2)] = inst_12989);

(statearr_13302_13836[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13187 === (57))){
var _ = (function (){var statearr_13303 = state_13186;
(statearr_13303[(4)] = cljs.core.cons.call(null,(60),(state_13186[(4)])));

return statearr_13303;
})();
var inst_13115 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_13116 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can send correct amount"];
var inst_13117 = cljs.core.PersistentHashMap.fromArrays(inst_13115,inst_13116);
var inst_13118 = cljs.test.do_report.call(null,inst_13117);
var ___$1 = (function (){var statearr_13304 = state_13186;
(statearr_13304[(4)] = cljs.core.rest.call(null,(state_13186[(4)])));

return statearr_13304;
})();
var state_13186__$1 = state_13186;
var statearr_13305_13837 = state_13186__$1;
(statearr_13305_13837[(2)] = inst_13118);

(statearr_13305_13837[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13187 === (26))){
var inst_12982 = (state_13186[(25)]);
var state_13186__$1 = state_13186;
var statearr_13306_13838 = state_13186__$1;
(statearr_13306_13838[(2)] = inst_12982);

(statearr_13306_13838[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13187 === (58))){
var inst_13121 = (state_13186[(2)]);
var state_13186__$1 = state_13186;
var statearr_13307_13839 = state_13186__$1;
(statearr_13307_13839[(2)] = inst_13121);

(statearr_13307_13839[(1)] = (55));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13187 === (27))){
var inst_12992 = (state_13186[(2)]);
var state_13186__$1 = (function (){var statearr_13308 = state_13186;
(statearr_13308[(27)] = inst_12992);

return statearr_13308;
})();
var statearr_13309_13840 = state_13186__$1;
(statearr_13309_13840[(2)] = null);

(statearr_13309_13840[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13187 === (59))){
var inst_13104 = (state_13186[(2)]);
var inst_13105 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_13106 = null;
var inst_13107 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can send correct amount",inst_13106,inst_13104];
var inst_13108 = cljs.core.PersistentHashMap.fromArrays(inst_13105,inst_13107);
var inst_13109 = cljs.test.do_report.call(null,inst_13108);
var state_13186__$1 = state_13186;
var statearr_13311_13841 = state_13186__$1;
(statearr_13311_13841[(2)] = inst_13109);

(statearr_13311_13841[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13187 === (28))){
var _ = (function (){var statearr_13312 = state_13186;
(statearr_13312[(4)] = cljs.core.cons.call(null,(31),(state_13186[(4)])));

return statearr_13312;
})();
var inst_13004 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_13005 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"need a reservation"];
var inst_13006 = cljs.core.PersistentHashMap.fromArrays(inst_13004,inst_13005);
var inst_13007 = cljs.test.do_report.call(null,inst_13006);
var ___$1 = (function (){var statearr_13313 = state_13186;
(statearr_13313[(4)] = cljs.core.rest.call(null,(state_13186[(4)])));

return statearr_13313;
})();
var state_13186__$1 = state_13186;
var statearr_13314_13842 = state_13186__$1;
(statearr_13314_13842[(2)] = inst_13007);

(statearr_13314_13842[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13187 === (60))){
var _ = (function (){var statearr_13316 = state_13186;
(statearr_13316[(4)] = cljs.core.rest.call(null,(state_13186[(4)])));

return statearr_13316;
})();
var state_13186__$1 = state_13186;
var ex13310 = (state_13186__$1[(2)]);
var statearr_13317_13843 = state_13186__$1;
(statearr_13317_13843[(5)] = ex13310);


var statearr_13318_13844 = state_13186__$1;
(statearr_13318_13844[(1)] = (59));

(statearr_13318_13844[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13187 === (29))){
var inst_13010 = (state_13186[(2)]);
var _ = (function (){var statearr_13319 = state_13186;
(statearr_13319[(4)] = cljs.core.rest.call(null,(state_13186[(4)])));

return statearr_13319;
})();
var state_13186__$1 = state_13186;
var statearr_13320_13845 = state_13186__$1;
(statearr_13320_13845[(2)] = inst_13010);

(statearr_13320_13845[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13187 === (61))){
var _ = (function (){var statearr_13321 = state_13186;
(statearr_13321[(4)] = cljs.core.rest.call(null,(state_13186[(4)])));

return statearr_13321;
})();
var state_13186__$1 = state_13186;
var ex13315 = (state_13186__$1[(2)]);
var statearr_13322_13846 = state_13186__$1;
(statearr_13322_13846[(5)] = ex13315);


if((ex13315 instanceof Error)){
var statearr_13323_13847 = state_13186__$1;
(statearr_13323_13847[(1)] = (56));

(statearr_13323_13847[(5)] = null);

} else {
throw ex13315;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13187 === (30))){
var inst_12993 = (state_13186[(2)]);
var inst_12994 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_12995 = null;
var inst_12996 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"need a reservation",inst_12995,inst_12993];
var inst_12997 = cljs.core.PersistentHashMap.fromArrays(inst_12994,inst_12996);
var inst_12998 = cljs.test.do_report.call(null,inst_12997);
var state_13186__$1 = state_13186;
var statearr_13325_13848 = state_13186__$1;
(statearr_13325_13848[(2)] = inst_12998);

(statearr_13325_13848[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13187 === (62))){
var inst_13139 = (state_13186[(7)]);
var inst_13139__$1 = (state_13186[(2)]);
var inst_13140 = (inst_13139__$1 instanceof cljs.core.ExceptionInfo);
var inst_13141 = cljs.core.ex_data.call(null,inst_13139__$1);
var inst_13142 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_13141);
var inst_13143 = cljs.core._EQ_.call(null,inst_13142,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_13144 = ((inst_13140) && (inst_13143));
var state_13186__$1 = (function (){var statearr_13326 = state_13186;
(statearr_13326[(7)] = inst_13139__$1);

return statearr_13326;
})();
if(cljs.core.truth_(inst_13144)){
var statearr_13327_13849 = state_13186__$1;
(statearr_13327_13849[(1)] = (63));

} else {
var statearr_13328_13850 = state_13186__$1;
(statearr_13328_13850[(1)] = (64));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13187 === (31))){
var _ = (function (){var statearr_13329 = state_13186;
(statearr_13329[(4)] = cljs.core.rest.call(null,(state_13186[(4)])));

return statearr_13329;
})();
var state_13186__$1 = state_13186;
var ex13324 = (state_13186__$1[(2)]);
var statearr_13330_13851 = state_13186__$1;
(statearr_13330_13851[(5)] = ex13324);


var statearr_13331_13852 = state_13186__$1;
(statearr_13331_13852[(1)] = (30));

(statearr_13331_13852[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13187 === (63))){
var inst_13139 = (state_13186[(7)]);
var inst_13146 = (function(){throw inst_13139})();
var state_13186__$1 = state_13186;
var statearr_13332_13853 = state_13186__$1;
(statearr_13332_13853[(2)] = inst_13146);

(statearr_13332_13853[(1)] = (65));


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
});})(c__19__auto__,___192__auto__,self____$1))
;
return ((function (switch__14__auto__,c__19__auto__,___192__auto__,self____$1){
return (function() {
var e2e$proposals$state_machine__15__auto__ = null;
var e2e$proposals$state_machine__15__auto____0 = (function (){
var statearr_13333 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13333[(0)] = e2e$proposals$state_machine__15__auto__);

(statearr_13333[(1)] = (1));

return statearr_13333;
});
var e2e$proposals$state_machine__15__auto____1 = (function (state_13186){
while(true){
var ret_value__16__auto__ = (function (){try{while(true){
var result__17__auto__ = switch__14__auto__.call(null,state_13186);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__17__auto__;
}
break;
}
}catch (e13334){var ex__18__auto__ = e13334;
var statearr_13335_13854 = state_13186;
(statearr_13335_13854[(2)] = ex__18__auto__);


if(cljs.core.seq.call(null,(state_13186[(4)]))){
var statearr_13336_13855 = state_13186;
(statearr_13336_13855[(1)] = cljs.core.first.call(null,(state_13186[(4)])));

} else {
throw ex__18__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__13856 = state_13186;
state_13186 = G__13856;
continue;
} else {
return ret_value__16__auto__;
}
break;
}
});
e2e$proposals$state_machine__15__auto__ = function(state_13186){
switch(arguments.length){
case 0:
return e2e$proposals$state_machine__15__auto____0.call(this);
case 1:
return e2e$proposals$state_machine__15__auto____1.call(this,state_13186);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
e2e$proposals$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$0 = e2e$proposals$state_machine__15__auto____0;
e2e$proposals$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$1 = e2e$proposals$state_machine__15__auto____1;
return e2e$proposals$state_machine__15__auto__;
})()
;})(switch__14__auto__,c__19__auto__,___192__auto__,self____$1))
})();
var state__21__auto__ = (function (){var statearr_13337 = f__20__auto__.call(null);
(statearr_13337[(6)] = c__19__auto__);

return statearr_13337;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21__auto__);
});})(c__19__auto__,___192__auto__,self____$1))
);

return c__19__auto__;
});

e2e.proposals.t_e2e$proposals12903.prototype.apply = (function (self__,args12906){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args12906)));
});

e2e.proposals.t_e2e$proposals12903.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___192__auto__ = this;
var c__19__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19__auto__,___192__auto__){
return (function (){
var f__20__auto__ = (function (){var switch__14__auto__ = ((function (c__19__auto__,___192__auto__){
return (function (state_13617){
var state_val_13618 = (state_13617[(1)]);
if((state_val_13618 === (32))){
var _ = (function (){var statearr_13619 = state_13617;
(statearr_13619[(4)] = cljs.core.cons.call(null,(45),(state_13617[(4)])));

return statearr_13619;
})();
var inst_13489 = [new cljs.core.Keyword(null,"from","from",(1815293044)),new cljs.core.Keyword(null,"to","to",(192099007)),new cljs.core.Keyword(null,"quantity","quantity",(-1929050694)),new cljs.core.Keyword(null,"memo","memo",(-1928616099))];
var inst_13490 = [e2e.proposals.owner_acc,e2e.proposals.prop_acc,"1.5000 EFX","proposal"];
var inst_13491 = cljs.core.PersistentHashMap.fromArrays(inst_13489,inst_13490);
var inst_13492 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13493 = [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),new cljs.core.Keyword(null,"permission","permission",(-511292572))];
var inst_13494 = [e2e.proposals.owner_acc,"active"];
var inst_13495 = cljs.core.PersistentHashMap.fromArrays(inst_13493,inst_13494);
var inst_13496 = [inst_13495];
var inst_13497 = (new cljs.core.PersistentVector(null,(1),(5),inst_13492,inst_13496,null));
var inst_13498 = eos_cljs.core.transact.call(null,e2e.proposals.token_acc,"transfer",inst_13491,inst_13497);
var inst_13499 = cljs.core.async.interop.p__GT_c.call(null,inst_13498);
var state_13617__$1 = state_13617;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13617__$1,(46),inst_13499);
} else {
if((state_val_13618 === (64))){
var inst_13570 = (state_13617[(7)]);
var state_13617__$1 = state_13617;
var statearr_13620_13857 = state_13617__$1;
(statearr_13620_13857[(2)] = inst_13570);

(statearr_13620_13857[(1)] = (65));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13618 === (1))){
var state_13617__$1 = state_13617;
var statearr_13621_13858 = state_13617__$1;
(statearr_13621_13858[(2)] = null);

(statearr_13621_13858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13618 === (33))){
var inst_13532 = (state_13617[(2)]);
var state_13617__$1 = (function (){var statearr_13622 = state_13617;
(statearr_13622[(8)] = inst_13532);

return statearr_13622;
})();
var statearr_13623_13859 = state_13617__$1;
(statearr_13623_13859[(2)] = null);

(statearr_13623_13859[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13618 === (65))){
var inst_13580 = (state_13617[(2)]);
var state_13617__$1 = (function (){var statearr_13624 = state_13617;
(statearr_13624[(9)] = inst_13580);

return statearr_13624;
})();
var statearr_13625_13860 = state_13617__$1;
(statearr_13625_13860[(2)] = null);

(statearr_13625_13860[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13618 === (2))){
var _ = (function (){var statearr_13626 = state_13617;
(statearr_13626[(4)] = cljs.core.cons.call(null,(5),(state_13617[(4)])));

return statearr_13626;
})();
var inst_13345 = eos_cljs.core.transact.call(null,e2e.proposals.prop_acc,"update",e2e.proposals.prop_config);
var inst_13346 = cljs.core.async.interop.p__GT_c.call(null,inst_13345);
var state_13617__$1 = state_13617;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13617__$1,(6),inst_13346);
} else {
if((state_val_13618 === (34))){
var inst_13447 = (state_13617[(10)]);
var inst_13448 = (state_13617[(11)]);
var inst_13445 = (state_13617[(2)]);
var inst_13446 = inst_13445.cause;
var inst_13447__$1 = inst_13446.message;
var inst_13448__$1 = clojure.string.ends_with_QMARK_.call(null,inst_13447__$1,"wrong amount");
var inst_13449 = (!(inst_13448__$1));
var state_13617__$1 = (function (){var statearr_13627 = state_13617;
(statearr_13627[(10)] = inst_13447__$1);

(statearr_13627[(11)] = inst_13448__$1);

return statearr_13627;
})();
if(inst_13449){
var statearr_13628_13861 = state_13617__$1;
(statearr_13628_13861[(1)] = (35));

} else {
var statearr_13629_13862 = state_13617__$1;
(statearr_13629_13862[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13618 === (66))){
var _ = (function (){var statearr_13630 = state_13617;
(statearr_13630[(4)] = cljs.core.cons.call(null,(69),(state_13617[(4)])));

return statearr_13630;
})();
var state_13617__$1 = state_13617;
var statearr_13631_13863 = state_13617__$1;
(statearr_13631_13863[(1)] = (70));



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13618 === (3))){
var inst_13614 = (state_13617[(2)]);
var inst_13615 = done.call(null);
var state_13617__$1 = (function (){var statearr_13633 = state_13617;
(statearr_13633[(12)] = inst_13614);

return statearr_13633;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13617__$1,inst_13615);
} else {
if((state_val_13618 === (35))){
var inst_13447 = (state_13617[(10)]);
var inst_13451 = ["expected =","wrong amount"," actual = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_13447)].join('');
var inst_13452 = cljs.core.prn.call(null,inst_13451);
var state_13617__$1 = state_13617;
var statearr_13634_13864 = state_13617__$1;
(statearr_13634_13864[(2)] = inst_13452);

(statearr_13634_13864[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13618 === (67))){
var inst_13608 = (state_13617[(2)]);
var _ = (function (){var statearr_13635 = state_13617;
(statearr_13635[(4)] = cljs.core.rest.call(null,(state_13617[(4)])));

return statearr_13635;
})();
var state_13617__$1 = state_13617;
var statearr_13636_13865 = state_13617__$1;
(statearr_13636_13865[(2)] = inst_13608);

(statearr_13636_13865[(1)] = (55));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13618 === (4))){
var inst_13338 = (state_13617[(2)]);
var inst_13339 = cljs.core.prn.call(null,inst_13338);
var state_13617__$1 = state_13617;
var statearr_13637_13866 = state_13617__$1;
(statearr_13637_13866[(2)] = inst_13339);

(statearr_13637_13866[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13618 === (36))){
var state_13617__$1 = state_13617;
var statearr_13639_13867 = state_13617__$1;
(statearr_13639_13867[(2)] = null);

(statearr_13639_13867[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13618 === (68))){
var inst_13581 = (state_13617[(2)]);
var inst_13582 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_13583 = true;
var inst_13584 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can send correct amount",inst_13583,inst_13581];
var inst_13585 = cljs.core.PersistentHashMap.fromArrays(inst_13582,inst_13584);
var inst_13586 = cljs.test.do_report.call(null,inst_13585);
var state_13617__$1 = state_13617;
var statearr_13640_13868 = state_13617__$1;
(statearr_13640_13868[(2)] = inst_13586);

(statearr_13640_13868[(1)] = (67));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13618 === (5))){
var _ = (function (){var statearr_13642 = state_13617;
(statearr_13642[(4)] = cljs.core.rest.call(null,(state_13617[(4)])));

return statearr_13642;
})();
var state_13617__$1 = state_13617;
var ex13638 = (state_13617__$1[(2)]);
var statearr_13643_13869 = state_13617__$1;
(statearr_13643_13869[(5)] = ex13638);


if((ex13638 instanceof Error)){
var statearr_13644_13870 = state_13617__$1;
(statearr_13644_13870[(1)] = (4));

(statearr_13644_13870[(5)] = null);

} else {
throw ex13638;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13618 === (37))){
var inst_13455 = (state_13617[(2)]);
var state_13617__$1 = (function (){var statearr_13645 = state_13617;
(statearr_13645[(13)] = inst_13455);

return statearr_13645;
})();
var statearr_13646_13871 = state_13617__$1;
(statearr_13646_13871[(2)] = null);

(statearr_13646_13871[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13618 === (69))){
var _ = (function (){var statearr_13647 = state_13617;
(statearr_13647[(4)] = cljs.core.rest.call(null,(state_13617[(4)])));

return statearr_13647;
})();
var state_13617__$1 = state_13617;
var ex13641 = (state_13617__$1[(2)]);
var statearr_13648_13872 = state_13617__$1;
(statearr_13648_13872[(5)] = ex13641);


var statearr_13649_13873 = state_13617__$1;
(statearr_13649_13873[(1)] = (68));

(statearr_13649_13873[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13618 === (6))){
var inst_13348 = (state_13617[(14)]);
var inst_13348__$1 = (state_13617[(2)]);
var inst_13349 = (inst_13348__$1 instanceof cljs.core.ExceptionInfo);
var inst_13350 = cljs.core.ex_data.call(null,inst_13348__$1);
var inst_13351 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_13350);
var inst_13352 = cljs.core._EQ_.call(null,inst_13351,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_13353 = ((inst_13349) && (inst_13352));
var state_13617__$1 = (function (){var statearr_13650 = state_13617;
(statearr_13650[(14)] = inst_13348__$1);

return statearr_13650;
})();
if(cljs.core.truth_(inst_13353)){
var statearr_13651_13874 = state_13617__$1;
(statearr_13651_13874[(1)] = (7));

} else {
var statearr_13652_13875 = state_13617__$1;
(statearr_13652_13875[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13618 === (38))){
var inst_13448 = (state_13617[(11)]);
var _ = (function (){var statearr_13653 = state_13617;
(statearr_13653[(4)] = cljs.core.cons.call(null,(41),(state_13617[(4)])));

return statearr_13653;
})();
var state_13617__$1 = state_13617;
if(cljs.core.truth_(inst_13448)){
var statearr_13654_13876 = state_13617__$1;
(statearr_13654_13876[(1)] = (42));

} else {
var statearr_13655_13877 = state_13617__$1;
(statearr_13655_13877[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13618 === (70))){
var inst_13593 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_13594 = true;
var inst_13595 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"can send correct amount",inst_13594,true];
var inst_13596 = cljs.core.PersistentHashMap.fromArrays(inst_13593,inst_13595);
var inst_13597 = cljs.test.do_report.call(null,inst_13596);
var state_13617__$1 = state_13617;
var statearr_13656_13878 = state_13617__$1;
(statearr_13656_13878[(2)] = inst_13597);

(statearr_13656_13878[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13618 === (7))){
var inst_13348 = (state_13617[(14)]);
var inst_13355 = (function(){throw inst_13348})();
var state_13617__$1 = state_13617;
var statearr_13657_13879 = state_13617__$1;
(statearr_13657_13879[(2)] = inst_13355);

(statearr_13657_13879[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13618 === (39))){
var inst_13483 = (state_13617[(2)]);
var state_13617__$1 = state_13617;
var statearr_13658_13880 = state_13617__$1;
(statearr_13658_13880[(2)] = inst_13483);

(statearr_13658_13880[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13618 === (71))){
var inst_13599 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_13600 = true;
var inst_13601 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can send correct amount",inst_13600,true];
var inst_13602 = cljs.core.PersistentHashMap.fromArrays(inst_13599,inst_13601);
var inst_13603 = cljs.test.do_report.call(null,inst_13602);
var state_13617__$1 = state_13617;
var statearr_13659_13881 = state_13617__$1;
(statearr_13659_13881[(2)] = inst_13603);

(statearr_13659_13881[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13618 === (8))){
var inst_13348 = (state_13617[(14)]);
var state_13617__$1 = state_13617;
var statearr_13660_13882 = state_13617__$1;
(statearr_13660_13882[(2)] = inst_13348);

(statearr_13660_13882[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13618 === (40))){
var inst_13456 = (state_13617[(2)]);
var inst_13457 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_13458 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_13459 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"needs correct amount",inst_13458,inst_13456];
var inst_13460 = cljs.core.PersistentHashMap.fromArrays(inst_13457,inst_13459);
var inst_13461 = cljs.test.do_report.call(null,inst_13460);
var state_13617__$1 = state_13617;
var statearr_13661_13883 = state_13617__$1;
(statearr_13661_13883[(2)] = inst_13461);

(statearr_13661_13883[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13618 === (72))){
var inst_13605 = (state_13617[(2)]);
var _ = (function (){var statearr_13663 = state_13617;
(statearr_13663[(4)] = cljs.core.rest.call(null,(state_13617[(4)])));

return statearr_13663;
})();
var state_13617__$1 = (function (){var statearr_13664 = state_13617;
(statearr_13664[(15)] = inst_13605);

return statearr_13664;
})();
var statearr_13665_13884 = state_13617__$1;
(statearr_13665_13884[(2)] = true);

(statearr_13665_13884[(1)] = (67));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13618 === (9))){
var inst_13358 = (state_13617[(2)]);
var state_13617__$1 = (function (){var statearr_13666 = state_13617;
(statearr_13666[(16)] = inst_13358);

return statearr_13666;
})();
var statearr_13667_13885 = state_13617__$1;
(statearr_13667_13885[(2)] = null);

(statearr_13667_13885[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13618 === (41))){
var _ = (function (){var statearr_13668 = state_13617;
(statearr_13668[(4)] = cljs.core.rest.call(null,(state_13617[(4)])));

return statearr_13668;
})();
var state_13617__$1 = state_13617;
var ex13662 = (state_13617__$1[(2)]);
var statearr_13669_13886 = state_13617__$1;
(statearr_13669_13886[(5)] = ex13662);


var statearr_13670_13887 = state_13617__$1;
(statearr_13670_13887[(1)] = (40));

(statearr_13670_13887[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13618 === (10))){
var _ = (function (){var statearr_13671 = state_13617;
(statearr_13671[(4)] = cljs.core.cons.call(null,(23),(state_13617[(4)])));

return statearr_13671;
})();
var inst_13403 = cljs.core.assoc.call(null,e2e.proposals.base_prop,new cljs.core.Keyword(null,"content_hash","content_hash",(121497903)),"ee");
var inst_13404 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13405 = [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),new cljs.core.Keyword(null,"permission","permission",(-511292572))];
var inst_13406 = [e2e.proposals.owner_acc,"active"];
var inst_13407 = cljs.core.PersistentHashMap.fromArrays(inst_13405,inst_13406);
var inst_13408 = [inst_13407];
var inst_13409 = (new cljs.core.PersistentVector(null,(1),(5),inst_13404,inst_13408,null));
var inst_13410 = eos_cljs.core.transact.call(null,e2e.proposals.prop_acc,"createprop",inst_13403,inst_13409);
var inst_13411 = cljs.core.async.interop.p__GT_c.call(null,inst_13410);
var state_13617__$1 = state_13617;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13617__$1,(24),inst_13411);
} else {
if((state_val_13618 === (42))){
var inst_13448 = (state_13617[(11)]);
var inst_13468 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_13469 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_13470 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"needs correct amount",inst_13469,inst_13448];
var inst_13471 = cljs.core.PersistentHashMap.fromArrays(inst_13468,inst_13470);
var inst_13472 = cljs.test.do_report.call(null,inst_13471);
var state_13617__$1 = state_13617;
var statearr_13672_13888 = state_13617__$1;
(statearr_13672_13888[(2)] = inst_13472);

(statearr_13672_13888[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13618 === (11))){
var inst_13444 = (state_13617[(2)]);
var state_13617__$1 = (function (){var statearr_13673 = state_13617;
(statearr_13673[(17)] = inst_13444);

return statearr_13673;
})();
var statearr_13674_13889 = state_13617__$1;
(statearr_13674_13889[(2)] = null);

(statearr_13674_13889[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13618 === (43))){
var inst_13448 = (state_13617[(11)]);
var inst_13474 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_13475 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_13476 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"needs correct amount",inst_13475,inst_13448];
var inst_13477 = cljs.core.PersistentHashMap.fromArrays(inst_13474,inst_13476);
var inst_13478 = cljs.test.do_report.call(null,inst_13477);
var state_13617__$1 = state_13617;
var statearr_13675_13890 = state_13617__$1;
(statearr_13675_13890[(2)] = inst_13478);

(statearr_13675_13890[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13618 === (12))){
var inst_13361 = (state_13617[(18)]);
var inst_13362 = (state_13617[(19)]);
var inst_13359 = (state_13617[(2)]);
var inst_13360 = inst_13359.cause;
var inst_13361__$1 = inst_13360.message;
var inst_13362__$1 = clojure.string.ends_with_QMARK_.call(null,inst_13361__$1,"no proposal reserved");
var inst_13363 = (!(inst_13362__$1));
var state_13617__$1 = (function (){var statearr_13676 = state_13617;
(statearr_13676[(18)] = inst_13361__$1);

(statearr_13676[(19)] = inst_13362__$1);

return statearr_13676;
})();
if(inst_13363){
var statearr_13677_13891 = state_13617__$1;
(statearr_13677_13891[(1)] = (13));

} else {
var statearr_13678_13892 = state_13617__$1;
(statearr_13678_13892[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13618 === (44))){
var inst_13448 = (state_13617[(11)]);
var inst_13480 = (state_13617[(2)]);
var _ = (function (){var statearr_13680 = state_13617;
(statearr_13680[(4)] = cljs.core.rest.call(null,(state_13617[(4)])));

return statearr_13680;
})();
var state_13617__$1 = (function (){var statearr_13681 = state_13617;
(statearr_13681[(20)] = inst_13480);

return statearr_13681;
})();
var statearr_13682_13893 = state_13617__$1;
(statearr_13682_13893[(2)] = inst_13448);

(statearr_13682_13893[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13618 === (13))){
var inst_13361 = (state_13617[(18)]);
var inst_13365 = ["expected =","no proposal reserved"," actual = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_13361)].join('');
var inst_13366 = cljs.core.prn.call(null,inst_13365);
var state_13617__$1 = state_13617;
var statearr_13683_13894 = state_13617__$1;
(statearr_13683_13894[(2)] = inst_13366);

(statearr_13683_13894[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13618 === (45))){
var _ = (function (){var statearr_13684 = state_13617;
(statearr_13684[(4)] = cljs.core.rest.call(null,(state_13617[(4)])));

return statearr_13684;
})();
var state_13617__$1 = state_13617;
var ex13679 = (state_13617__$1[(2)]);
var statearr_13685_13895 = state_13617__$1;
(statearr_13685_13895[(5)] = ex13679);


if((ex13679 instanceof Error)){
var statearr_13686_13896 = state_13617__$1;
(statearr_13686_13896[(1)] = (34));

(statearr_13686_13896[(5)] = null);

} else {
throw ex13679;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13618 === (14))){
var state_13617__$1 = state_13617;
var statearr_13687_13897 = state_13617__$1;
(statearr_13687_13897[(2)] = null);

(statearr_13687_13897[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13618 === (46))){
var inst_13501 = (state_13617[(21)]);
var inst_13501__$1 = (state_13617[(2)]);
var inst_13502 = (inst_13501__$1 instanceof cljs.core.ExceptionInfo);
var inst_13503 = cljs.core.ex_data.call(null,inst_13501__$1);
var inst_13504 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_13503);
var inst_13505 = cljs.core._EQ_.call(null,inst_13504,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_13506 = ((inst_13502) && (inst_13505));
var state_13617__$1 = (function (){var statearr_13688 = state_13617;
(statearr_13688[(21)] = inst_13501__$1);

return statearr_13688;
})();
if(cljs.core.truth_(inst_13506)){
var statearr_13689_13898 = state_13617__$1;
(statearr_13689_13898[(1)] = (47));

} else {
var statearr_13690_13899 = state_13617__$1;
(statearr_13690_13899[(1)] = (48));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13618 === (15))){
var inst_13369 = (state_13617[(2)]);
var state_13617__$1 = (function (){var statearr_13691 = state_13617;
(statearr_13691[(22)] = inst_13369);

return statearr_13691;
})();
var statearr_13692_13900 = state_13617__$1;
(statearr_13692_13900[(2)] = null);

(statearr_13692_13900[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13618 === (47))){
var inst_13501 = (state_13617[(21)]);
var inst_13508 = (function(){throw inst_13501})();
var state_13617__$1 = state_13617;
var statearr_13693_13901 = state_13617__$1;
(statearr_13693_13901[(2)] = inst_13508);

(statearr_13693_13901[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13618 === (16))){
var inst_13362 = (state_13617[(19)]);
var _ = (function (){var statearr_13694 = state_13617;
(statearr_13694[(4)] = cljs.core.cons.call(null,(19),(state_13617[(4)])));

return statearr_13694;
})();
var state_13617__$1 = state_13617;
if(cljs.core.truth_(inst_13362)){
var statearr_13695_13902 = state_13617__$1;
(statearr_13695_13902[(1)] = (20));

} else {
var statearr_13696_13903 = state_13617__$1;
(statearr_13696_13903[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13618 === (48))){
var inst_13501 = (state_13617[(21)]);
var state_13617__$1 = state_13617;
var statearr_13697_13904 = state_13617__$1;
(statearr_13697_13904[(2)] = inst_13501);

(statearr_13697_13904[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13618 === (17))){
var inst_13397 = (state_13617[(2)]);
var state_13617__$1 = state_13617;
var statearr_13698_13905 = state_13617__$1;
(statearr_13698_13905[(2)] = inst_13397);

(statearr_13698_13905[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13618 === (49))){
var inst_13511 = (state_13617[(2)]);
var state_13617__$1 = (function (){var statearr_13699 = state_13617;
(statearr_13699[(23)] = inst_13511);

return statearr_13699;
})();
var statearr_13700_13906 = state_13617__$1;
(statearr_13700_13906[(2)] = null);

(statearr_13700_13906[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13618 === (18))){
var inst_13370 = (state_13617[(2)]);
var inst_13371 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_13372 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_13373 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"need a reservation",inst_13372,inst_13370];
var inst_13374 = cljs.core.PersistentHashMap.fromArrays(inst_13371,inst_13373);
var inst_13375 = cljs.test.do_report.call(null,inst_13374);
var state_13617__$1 = state_13617;
var statearr_13702_13907 = state_13617__$1;
(statearr_13702_13907[(2)] = inst_13375);

(statearr_13702_13907[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13618 === (50))){
var _ = (function (){var statearr_13703 = state_13617;
(statearr_13703[(4)] = cljs.core.cons.call(null,(53),(state_13617[(4)])));

return statearr_13703;
})();
var inst_13523 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_13524 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"needs correct amount"];
var inst_13525 = cljs.core.PersistentHashMap.fromArrays(inst_13523,inst_13524);
var inst_13526 = cljs.test.do_report.call(null,inst_13525);
var ___$1 = (function (){var statearr_13704 = state_13617;
(statearr_13704[(4)] = cljs.core.rest.call(null,(state_13617[(4)])));

return statearr_13704;
})();
var state_13617__$1 = state_13617;
var statearr_13705_13908 = state_13617__$1;
(statearr_13705_13908[(2)] = inst_13526);

(statearr_13705_13908[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13618 === (19))){
var _ = (function (){var statearr_13706 = state_13617;
(statearr_13706[(4)] = cljs.core.rest.call(null,(state_13617[(4)])));

return statearr_13706;
})();
var state_13617__$1 = state_13617;
var ex13701 = (state_13617__$1[(2)]);
var statearr_13707_13909 = state_13617__$1;
(statearr_13707_13909[(5)] = ex13701);


var statearr_13708_13910 = state_13617__$1;
(statearr_13708_13910[(1)] = (18));

(statearr_13708_13910[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13618 === (51))){
var inst_13529 = (state_13617[(2)]);
var _ = (function (){var statearr_13709 = state_13617;
(statearr_13709[(4)] = cljs.core.rest.call(null,(state_13617[(4)])));

return statearr_13709;
})();
var state_13617__$1 = state_13617;
var statearr_13710_13911 = state_13617__$1;
(statearr_13710_13911[(2)] = inst_13529);

(statearr_13710_13911[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13618 === (20))){
var inst_13362 = (state_13617[(19)]);
var inst_13382 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_13383 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_13384 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"need a reservation",inst_13383,inst_13362];
var inst_13385 = cljs.core.PersistentHashMap.fromArrays(inst_13382,inst_13384);
var inst_13386 = cljs.test.do_report.call(null,inst_13385);
var state_13617__$1 = state_13617;
var statearr_13711_13912 = state_13617__$1;
(statearr_13711_13912[(2)] = inst_13386);

(statearr_13711_13912[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13618 === (52))){
var inst_13512 = (state_13617[(2)]);
var inst_13513 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_13514 = null;
var inst_13515 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"needs correct amount",inst_13514,inst_13512];
var inst_13516 = cljs.core.PersistentHashMap.fromArrays(inst_13513,inst_13515);
var inst_13517 = cljs.test.do_report.call(null,inst_13516);
var state_13617__$1 = state_13617;
var statearr_13713_13913 = state_13617__$1;
(statearr_13713_13913[(2)] = inst_13517);

(statearr_13713_13913[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13618 === (21))){
var inst_13362 = (state_13617[(19)]);
var inst_13388 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_13389 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_13390 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"need a reservation",inst_13389,inst_13362];
var inst_13391 = cljs.core.PersistentHashMap.fromArrays(inst_13388,inst_13390);
var inst_13392 = cljs.test.do_report.call(null,inst_13391);
var state_13617__$1 = state_13617;
var statearr_13714_13914 = state_13617__$1;
(statearr_13714_13914[(2)] = inst_13392);

(statearr_13714_13914[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13618 === (53))){
var _ = (function (){var statearr_13715 = state_13617;
(statearr_13715[(4)] = cljs.core.rest.call(null,(state_13617[(4)])));

return statearr_13715;
})();
var state_13617__$1 = state_13617;
var ex13712 = (state_13617__$1[(2)]);
var statearr_13716_13915 = state_13617__$1;
(statearr_13716_13915[(5)] = ex13712);


var statearr_13717_13916 = state_13617__$1;
(statearr_13717_13916[(1)] = (52));

(statearr_13717_13916[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13618 === (22))){
var inst_13362 = (state_13617[(19)]);
var inst_13394 = (state_13617[(2)]);
var _ = (function (){var statearr_13719 = state_13617;
(statearr_13719[(4)] = cljs.core.rest.call(null,(state_13617[(4)])));

return statearr_13719;
})();
var state_13617__$1 = (function (){var statearr_13720 = state_13617;
(statearr_13720[(24)] = inst_13394);

return statearr_13720;
})();
var statearr_13721_13917 = state_13617__$1;
(statearr_13721_13917[(2)] = inst_13362);

(statearr_13721_13917[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13618 === (54))){
var _ = (function (){var statearr_13722 = state_13617;
(statearr_13722[(4)] = cljs.core.cons.call(null,(61),(state_13617[(4)])));

return statearr_13722;
})();
var inst_13558 = [new cljs.core.Keyword(null,"from","from",(1815293044)),new cljs.core.Keyword(null,"to","to",(192099007)),new cljs.core.Keyword(null,"quantity","quantity",(-1929050694)),new cljs.core.Keyword(null,"memo","memo",(-1928616099))];
var inst_13559 = [e2e.proposals.owner_acc,e2e.proposals.prop_acc,e2e.proposals.proposal_cost,"proposal"];
var inst_13560 = cljs.core.PersistentHashMap.fromArrays(inst_13558,inst_13559);
var inst_13561 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13562 = [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),new cljs.core.Keyword(null,"permission","permission",(-511292572))];
var inst_13563 = [e2e.proposals.owner_acc,"active"];
var inst_13564 = cljs.core.PersistentHashMap.fromArrays(inst_13562,inst_13563);
var inst_13565 = [inst_13564];
var inst_13566 = (new cljs.core.PersistentVector(null,(1),(5),inst_13561,inst_13565,null));
var inst_13567 = eos_cljs.core.transact.call(null,e2e.proposals.token_acc,"transfer",inst_13560,inst_13566);
var inst_13568 = cljs.core.async.interop.p__GT_c.call(null,inst_13567);
var state_13617__$1 = state_13617;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13617__$1,(62),inst_13568);
} else {
if((state_val_13618 === (23))){
var _ = (function (){var statearr_13723 = state_13617;
(statearr_13723[(4)] = cljs.core.rest.call(null,(state_13617[(4)])));

return statearr_13723;
})();
var state_13617__$1 = state_13617;
var ex13718 = (state_13617__$1[(2)]);
var statearr_13724_13918 = state_13617__$1;
(statearr_13724_13918[(5)] = ex13718);


if((ex13718 instanceof Error)){
var statearr_13725_13919 = state_13617__$1;
(statearr_13725_13919[(1)] = (12));

(statearr_13725_13919[(5)] = null);

} else {
throw ex13718;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13618 === (55))){
var inst_13611 = (state_13617[(2)]);
var _ = (function (){var statearr_13726 = state_13617;
(statearr_13726[(4)] = cljs.core.rest.call(null,(state_13617[(4)])));

return statearr_13726;
})();
var state_13617__$1 = state_13617;
var statearr_13727_13920 = state_13617__$1;
(statearr_13727_13920[(2)] = inst_13611);

(statearr_13727_13920[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13618 === (24))){
var inst_13413 = (state_13617[(25)]);
var inst_13413__$1 = (state_13617[(2)]);
var inst_13414 = (inst_13413__$1 instanceof cljs.core.ExceptionInfo);
var inst_13415 = cljs.core.ex_data.call(null,inst_13413__$1);
var inst_13416 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_13415);
var inst_13417 = cljs.core._EQ_.call(null,inst_13416,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_13418 = ((inst_13414) && (inst_13417));
var state_13617__$1 = (function (){var statearr_13728 = state_13617;
(statearr_13728[(25)] = inst_13413__$1);

return statearr_13728;
})();
if(cljs.core.truth_(inst_13418)){
var statearr_13729_13921 = state_13617__$1;
(statearr_13729_13921[(1)] = (25));

} else {
var statearr_13730_13922 = state_13617__$1;
(statearr_13730_13922[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13618 === (56))){
var inst_13533 = (state_13617[(2)]);
var inst_13534 = cljs.core.prn.call(null,"test failed with ",inst_13533);
var state_13617__$1 = (function (){var statearr_13731 = state_13617;
(statearr_13731[(26)] = inst_13534);

return statearr_13731;
})();
var statearr_13732_13923 = state_13617__$1;
(statearr_13732_13923[(2)] = null);

(statearr_13732_13923[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13618 === (25))){
var inst_13413 = (state_13617[(25)]);
var inst_13420 = (function(){throw inst_13413})();
var state_13617__$1 = state_13617;
var statearr_13733_13924 = state_13617__$1;
(statearr_13733_13924[(2)] = inst_13420);

(statearr_13733_13924[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13618 === (57))){
var _ = (function (){var statearr_13734 = state_13617;
(statearr_13734[(4)] = cljs.core.cons.call(null,(60),(state_13617[(4)])));

return statearr_13734;
})();
var inst_13546 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_13547 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can send correct amount"];
var inst_13548 = cljs.core.PersistentHashMap.fromArrays(inst_13546,inst_13547);
var inst_13549 = cljs.test.do_report.call(null,inst_13548);
var ___$1 = (function (){var statearr_13735 = state_13617;
(statearr_13735[(4)] = cljs.core.rest.call(null,(state_13617[(4)])));

return statearr_13735;
})();
var state_13617__$1 = state_13617;
var statearr_13736_13925 = state_13617__$1;
(statearr_13736_13925[(2)] = inst_13549);

(statearr_13736_13925[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13618 === (26))){
var inst_13413 = (state_13617[(25)]);
var state_13617__$1 = state_13617;
var statearr_13737_13926 = state_13617__$1;
(statearr_13737_13926[(2)] = inst_13413);

(statearr_13737_13926[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13618 === (58))){
var inst_13552 = (state_13617[(2)]);
var state_13617__$1 = state_13617;
var statearr_13738_13927 = state_13617__$1;
(statearr_13738_13927[(2)] = inst_13552);

(statearr_13738_13927[(1)] = (55));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13618 === (27))){
var inst_13423 = (state_13617[(2)]);
var state_13617__$1 = (function (){var statearr_13739 = state_13617;
(statearr_13739[(27)] = inst_13423);

return statearr_13739;
})();
var statearr_13740_13928 = state_13617__$1;
(statearr_13740_13928[(2)] = null);

(statearr_13740_13928[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13618 === (59))){
var inst_13535 = (state_13617[(2)]);
var inst_13536 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_13537 = null;
var inst_13538 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can send correct amount",inst_13537,inst_13535];
var inst_13539 = cljs.core.PersistentHashMap.fromArrays(inst_13536,inst_13538);
var inst_13540 = cljs.test.do_report.call(null,inst_13539);
var state_13617__$1 = state_13617;
var statearr_13742_13929 = state_13617__$1;
(statearr_13742_13929[(2)] = inst_13540);

(statearr_13742_13929[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13618 === (28))){
var _ = (function (){var statearr_13743 = state_13617;
(statearr_13743[(4)] = cljs.core.cons.call(null,(31),(state_13617[(4)])));

return statearr_13743;
})();
var inst_13435 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_13436 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"need a reservation"];
var inst_13437 = cljs.core.PersistentHashMap.fromArrays(inst_13435,inst_13436);
var inst_13438 = cljs.test.do_report.call(null,inst_13437);
var ___$1 = (function (){var statearr_13744 = state_13617;
(statearr_13744[(4)] = cljs.core.rest.call(null,(state_13617[(4)])));

return statearr_13744;
})();
var state_13617__$1 = state_13617;
var statearr_13745_13930 = state_13617__$1;
(statearr_13745_13930[(2)] = inst_13438);

(statearr_13745_13930[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13618 === (60))){
var _ = (function (){var statearr_13747 = state_13617;
(statearr_13747[(4)] = cljs.core.rest.call(null,(state_13617[(4)])));

return statearr_13747;
})();
var state_13617__$1 = state_13617;
var ex13741 = (state_13617__$1[(2)]);
var statearr_13748_13931 = state_13617__$1;
(statearr_13748_13931[(5)] = ex13741);


var statearr_13749_13932 = state_13617__$1;
(statearr_13749_13932[(1)] = (59));

(statearr_13749_13932[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13618 === (29))){
var inst_13441 = (state_13617[(2)]);
var _ = (function (){var statearr_13750 = state_13617;
(statearr_13750[(4)] = cljs.core.rest.call(null,(state_13617[(4)])));

return statearr_13750;
})();
var state_13617__$1 = state_13617;
var statearr_13751_13933 = state_13617__$1;
(statearr_13751_13933[(2)] = inst_13441);

(statearr_13751_13933[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13618 === (61))){
var _ = (function (){var statearr_13752 = state_13617;
(statearr_13752[(4)] = cljs.core.rest.call(null,(state_13617[(4)])));

return statearr_13752;
})();
var state_13617__$1 = state_13617;
var ex13746 = (state_13617__$1[(2)]);
var statearr_13753_13934 = state_13617__$1;
(statearr_13753_13934[(5)] = ex13746);


if((ex13746 instanceof Error)){
var statearr_13754_13935 = state_13617__$1;
(statearr_13754_13935[(1)] = (56));

(statearr_13754_13935[(5)] = null);

} else {
throw ex13746;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13618 === (30))){
var inst_13424 = (state_13617[(2)]);
var inst_13425 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_13426 = null;
var inst_13427 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"need a reservation",inst_13426,inst_13424];
var inst_13428 = cljs.core.PersistentHashMap.fromArrays(inst_13425,inst_13427);
var inst_13429 = cljs.test.do_report.call(null,inst_13428);
var state_13617__$1 = state_13617;
var statearr_13756_13936 = state_13617__$1;
(statearr_13756_13936[(2)] = inst_13429);

(statearr_13756_13936[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13618 === (62))){
var inst_13570 = (state_13617[(7)]);
var inst_13570__$1 = (state_13617[(2)]);
var inst_13571 = (inst_13570__$1 instanceof cljs.core.ExceptionInfo);
var inst_13572 = cljs.core.ex_data.call(null,inst_13570__$1);
var inst_13573 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_13572);
var inst_13574 = cljs.core._EQ_.call(null,inst_13573,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_13575 = ((inst_13571) && (inst_13574));
var state_13617__$1 = (function (){var statearr_13757 = state_13617;
(statearr_13757[(7)] = inst_13570__$1);

return statearr_13757;
})();
if(cljs.core.truth_(inst_13575)){
var statearr_13758_13937 = state_13617__$1;
(statearr_13758_13937[(1)] = (63));

} else {
var statearr_13759_13938 = state_13617__$1;
(statearr_13759_13938[(1)] = (64));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13618 === (31))){
var _ = (function (){var statearr_13760 = state_13617;
(statearr_13760[(4)] = cljs.core.rest.call(null,(state_13617[(4)])));

return statearr_13760;
})();
var state_13617__$1 = state_13617;
var ex13755 = (state_13617__$1[(2)]);
var statearr_13761_13939 = state_13617__$1;
(statearr_13761_13939[(5)] = ex13755);


var statearr_13762_13940 = state_13617__$1;
(statearr_13762_13940[(1)] = (30));

(statearr_13762_13940[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_13618 === (63))){
var inst_13570 = (state_13617[(7)]);
var inst_13577 = (function(){throw inst_13570})();
var state_13617__$1 = state_13617;
var statearr_13763_13941 = state_13617__$1;
(statearr_13763_13941[(2)] = inst_13577);

(statearr_13763_13941[(1)] = (65));


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
});})(c__19__auto__,___192__auto__))
;
return ((function (switch__14__auto__,c__19__auto__,___192__auto__){
return (function() {
var e2e$proposals$state_machine__15__auto__ = null;
var e2e$proposals$state_machine__15__auto____0 = (function (){
var statearr_13764 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13764[(0)] = e2e$proposals$state_machine__15__auto__);

(statearr_13764[(1)] = (1));

return statearr_13764;
});
var e2e$proposals$state_machine__15__auto____1 = (function (state_13617){
while(true){
var ret_value__16__auto__ = (function (){try{while(true){
var result__17__auto__ = switch__14__auto__.call(null,state_13617);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__17__auto__;
}
break;
}
}catch (e13765){var ex__18__auto__ = e13765;
var statearr_13766_13942 = state_13617;
(statearr_13766_13942[(2)] = ex__18__auto__);


if(cljs.core.seq.call(null,(state_13617[(4)]))){
var statearr_13767_13943 = state_13617;
(statearr_13767_13943[(1)] = cljs.core.first.call(null,(state_13617[(4)])));

} else {
throw ex__18__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__13944 = state_13617;
state_13617 = G__13944;
continue;
} else {
return ret_value__16__auto__;
}
break;
}
});
e2e$proposals$state_machine__15__auto__ = function(state_13617){
switch(arguments.length){
case 0:
return e2e$proposals$state_machine__15__auto____0.call(this);
case 1:
return e2e$proposals$state_machine__15__auto____1.call(this,state_13617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
e2e$proposals$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$0 = e2e$proposals$state_machine__15__auto____0;
e2e$proposals$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$1 = e2e$proposals$state_machine__15__auto____1;
return e2e$proposals$state_machine__15__auto__;
})()
;})(switch__14__auto__,c__19__auto__,___192__auto__))
})();
var state__21__auto__ = (function (){var statearr_13768 = f__20__auto__.call(null);
(statearr_13768[(6)] = c__19__auto__);

return statearr_13768;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21__auto__);
});})(c__19__auto__,___192__auto__))
);

return c__19__auto__;
});

e2e.proposals.t_e2e$proposals12903.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta12904","meta12904",(-886041067),null)], null);
});

e2e.proposals.t_e2e$proposals12903.cljs$lang$type = true;

e2e.proposals.t_e2e$proposals12903.cljs$lang$ctorStr = "e2e.proposals/t_e2e$proposals12903";

e2e.proposals.t_e2e$proposals12903.cljs$lang$ctorPrWriter = (function (this__9776__auto__,writer__9777__auto__,opt__9778__auto__){
return cljs.core._write.call(null,writer__9777__auto__,"e2e.proposals/t_e2e$proposals12903");
});

/**
 * Positional factory function for e2e.proposals/t_e2e$proposals12903.
 */
e2e.proposals.__GT_t_e2e$proposals12903 = (function e2e$proposals$__GT_t_e2e$proposals12903(meta12904){
return (new e2e.proposals.t_e2e$proposals12903(meta12904));
});

}

return (new e2e.proposals.t_e2e$proposals12903(null));
});

e2e.proposals.proposal_payment.cljs$lang$var = new cljs.core.Var(function(){return e2e.proposals.proposal_payment;},new cljs.core.Symbol("e2e.proposals","proposal-payment","e2e.proposals/proposal-payment",(-924459697),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"e2e.proposals","e2e.proposals",(1479174227),null),new cljs.core.Symbol(null,"proposal-payment","proposal-payment",(-65968046),null),"e2e/proposals.cljs",(26),(1),(73),(73),cljs.core.List.EMPTY,null,(cljs.core.truth_(e2e.proposals.proposal_payment)?e2e.proposals.proposal_payment.cljs$lang$test:null)]));
e2e.proposals.new_proposal = (function e2e$proposals$new_proposal(){
return cljs.test.test_var.call(null,e2e.proposals.new_proposal.cljs$lang$var);
});
e2e.proposals.new_proposal.cljs$lang$test = (function (){
if((typeof e2e !== 'undefined') && (typeof e2e.proposals !== 'undefined') && (typeof e2e.proposals.t_e2e$proposals13945 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IFn}
*/
e2e.proposals.t_e2e$proposals13945 = (function (meta13946){
this.meta13946 = meta13946;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
e2e.proposals.t_e2e$proposals13945.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13947,meta13946__$1){
var self__ = this;
var _13947__$1 = this;
return (new e2e.proposals.t_e2e$proposals13945(meta13946__$1));
});

e2e.proposals.t_e2e$proposals13945.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13947){
var self__ = this;
var _13947__$1 = this;
return self__.meta13946;
});

e2e.proposals.t_e2e$proposals13945.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL;

e2e.proposals.t_e2e$proposals13945.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___192__auto__ = self____$1;
var c__19__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19__auto__,___192__auto__,self____$1){
return (function (){
var f__20__auto__ = (function (){var switch__14__auto__ = ((function (c__19__auto__,___192__auto__,self____$1){
return (function (state_14311){
var state_val_14312 = (state_14311[(1)]);
if((state_val_14312 === (32))){
var inst_14063 = (state_14311[(7)]);
var inst_14063__$1 = (state_14311[(2)]);
var inst_14064 = (inst_14063__$1 instanceof cljs.core.ExceptionInfo);
var inst_14065 = cljs.core.ex_data.call(null,inst_14063__$1);
var inst_14066 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_14065);
var inst_14067 = cljs.core._EQ_.call(null,inst_14066,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_14068 = ((inst_14064) && (inst_14067));
var state_14311__$1 = (function (){var statearr_14314 = state_14311;
(statearr_14314[(7)] = inst_14063__$1);

return statearr_14314;
})();
if(cljs.core.truth_(inst_14068)){
var statearr_14315_15037 = state_14311__$1;
(statearr_14315_15037[(1)] = (33));

} else {
var statearr_14316_15038 = state_14311__$1;
(statearr_14316_15038[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14312 === (64))){
var _ = (function (){var statearr_14317 = state_14311;
(statearr_14317[(4)] = cljs.core.rest.call(null,(state_14311[(4)])));

return statearr_14317;
})();
var state_14311__$1 = state_14311;
var ex14313 = (state_14311__$1[(2)]);
var statearr_14318_15039 = state_14311__$1;
(statearr_14318_15039[(5)] = ex14313);


var statearr_14319_15040 = state_14311__$1;
(statearr_14319_15040[(1)] = (63));

(statearr_14319_15040[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14312 === (1))){
var state_14311__$1 = state_14311;
var statearr_14321_15041 = state_14311__$1;
(statearr_14321_15041[(2)] = null);

(statearr_14321_15041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14312 === (33))){
var inst_14063 = (state_14311[(7)]);
var inst_14070 = (function(){throw inst_14063})();
var state_14311__$1 = state_14311;
var statearr_14322_15042 = state_14311__$1;
(statearr_14322_15042[(2)] = inst_14070);

(statearr_14322_15042[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14312 === (65))){
var _ = (function (){var statearr_14323 = state_14311;
(statearr_14323[(4)] = cljs.core.rest.call(null,(state_14311[(4)])));

return statearr_14323;
})();
var state_14311__$1 = state_14311;
var ex14320 = (state_14311__$1[(2)]);
var statearr_14324_15043 = state_14311__$1;
(statearr_14324_15043[(5)] = ex14320);


if((ex14320 instanceof Error)){
var statearr_14325_15044 = state_14311__$1;
(statearr_14325_15044[(1)] = (60));

(statearr_14325_15044[(5)] = null);

} else {
throw ex14320;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14312 === (2))){
var _ = (function (){var statearr_14326 = state_14311;
(statearr_14326[(4)] = cljs.core.cons.call(null,(15),(state_14311[(4)])));

return statearr_14326;
})();
var inst_13993 = cljs.core.assoc.call(null,e2e.proposals.base_prop,new cljs.core.Keyword(null,"author","author",(2111686192)),e2e.proposals.prop_acc);
var inst_13994 = eos_cljs.core.transact.call(null,e2e.proposals.prop_acc,"createprop",inst_13993);
var inst_13995 = cljs.core.async.interop.p__GT_c.call(null,inst_13994);
var state_14311__$1 = state_14311;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14311__$1,(16),inst_13995);
} else {
if((state_val_14312 === (34))){
var inst_14063 = (state_14311[(7)]);
var state_14311__$1 = state_14311;
var statearr_14327_15045 = state_14311__$1;
(statearr_14327_15045[(2)] = inst_14063);

(statearr_14327_15045[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14312 === (66))){
var inst_14215 = (state_14311[(8)]);
var inst_14215__$1 = (state_14311[(2)]);
var inst_14216 = (inst_14215__$1 instanceof cljs.core.ExceptionInfo);
var inst_14217 = cljs.core.ex_data.call(null,inst_14215__$1);
var inst_14218 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_14217);
var inst_14219 = cljs.core._EQ_.call(null,inst_14218,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_14220 = ((inst_14216) && (inst_14219));
var state_14311__$1 = (function (){var statearr_14328 = state_14311;
(statearr_14328[(8)] = inst_14215__$1);

return statearr_14328;
})();
if(cljs.core.truth_(inst_14220)){
var statearr_14329_15046 = state_14311__$1;
(statearr_14329_15046[(1)] = (67));

} else {
var statearr_14330_15047 = state_14311__$1;
(statearr_14330_15047[(1)] = (68));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14312 === (3))){
var inst_14028 = (state_14311[(2)]);
var state_14311__$1 = (function (){var statearr_14331 = state_14311;
(statearr_14331[(9)] = inst_14028);

return statearr_14331;
})();
var statearr_14332_15048 = state_14311__$1;
(statearr_14332_15048[(2)] = null);

(statearr_14332_15048[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14312 === (35))){
var inst_14073 = (state_14311[(2)]);
var state_14311__$1 = (function (){var statearr_14333 = state_14311;
(statearr_14333[(10)] = inst_14073);

return statearr_14333;
})();
var statearr_14334_15049 = state_14311__$1;
(statearr_14334_15049[(2)] = null);

(statearr_14334_15049[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14312 === (67))){
var inst_14215 = (state_14311[(8)]);
var inst_14222 = (function(){throw inst_14215})();
var state_14311__$1 = state_14311;
var statearr_14335_15050 = state_14311__$1;
(statearr_14335_15050[(2)] = inst_14222);

(statearr_14335_15050[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14312 === (4))){
var inst_13951 = (state_14311[(11)]);
var inst_13952 = (state_14311[(12)]);
var inst_13949 = (state_14311[(2)]);
var inst_13950 = inst_13949.cause;
var inst_13951__$1 = inst_13950.message;
var inst_13952__$1 = clojure.string.ends_with_QMARK_.call(null,inst_13951__$1,"not a dao member");
var inst_13953 = (!(inst_13952__$1));
var state_14311__$1 = (function (){var statearr_14336 = state_14311;
(statearr_14336[(11)] = inst_13951__$1);

(statearr_14336[(12)] = inst_13952__$1);

return statearr_14336;
})();
if(inst_13953){
var statearr_14337_15051 = state_14311__$1;
(statearr_14337_15051[(1)] = (5));

} else {
var statearr_14338_15052 = state_14311__$1;
(statearr_14338_15052[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14312 === (36))){
var _ = (function (){var statearr_14339 = state_14311;
(statearr_14339[(4)] = cljs.core.cons.call(null,(39),(state_14311[(4)])));

return statearr_14339;
})();
var state_14311__$1 = state_14311;
var statearr_14340_15053 = state_14311__$1;
(statearr_14340_15053[(1)] = (40));



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14312 === (68))){
var inst_14215 = (state_14311[(8)]);
var state_14311__$1 = state_14311;
var statearr_14342_15054 = state_14311__$1;
(statearr_14342_15054[(2)] = inst_14215);

(statearr_14342_15054[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14312 === (5))){
var inst_13951 = (state_14311[(11)]);
var inst_13955 = ["expected =","not a dao member"," actual = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_13951)].join('');
var inst_13956 = cljs.core.prn.call(null,inst_13955);
var state_14311__$1 = state_14311;
var statearr_14343_15055 = state_14311__$1;
(statearr_14343_15055[(2)] = inst_13956);

(statearr_14343_15055[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14312 === (37))){
var inst_14101 = (state_14311[(2)]);
var _ = (function (){var statearr_14344 = state_14311;
(statearr_14344[(4)] = cljs.core.rest.call(null,(state_14311[(4)])));

return statearr_14344;
})();
var state_14311__$1 = state_14311;
var statearr_14345_15056 = state_14311__$1;
(statearr_14345_15056[(2)] = inst_14101);

(statearr_14345_15056[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14312 === (69))){
var inst_14225 = (state_14311[(2)]);
var state_14311__$1 = (function (){var statearr_14346 = state_14311;
(statearr_14346[(13)] = inst_14225);

return statearr_14346;
})();
var statearr_14347_15057 = state_14311__$1;
(statearr_14347_15057[(2)] = null);

(statearr_14347_15057[(1)] = (70));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14312 === (6))){
var state_14311__$1 = state_14311;
var statearr_14348_15058 = state_14311__$1;
(statearr_14348_15058[(2)] = null);

(statearr_14348_15058[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14312 === (38))){
var inst_14074 = (state_14311[(2)]);
var inst_14075 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_14076 = true;
var inst_14077 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can make a proposal",inst_14076,inst_14074];
var inst_14078 = cljs.core.PersistentHashMap.fromArrays(inst_14075,inst_14077);
var inst_14079 = cljs.test.do_report.call(null,inst_14078);
var state_14311__$1 = state_14311;
var statearr_14349_15059 = state_14311__$1;
(statearr_14349_15059[(2)] = inst_14079);

(statearr_14349_15059[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14312 === (70))){
var _ = (function (){var statearr_14351 = state_14311;
(statearr_14351[(4)] = cljs.core.cons.call(null,(73),(state_14311[(4)])));

return statearr_14351;
})();
var state_14311__$1 = state_14311;
var statearr_14352_15060 = state_14311__$1;
(statearr_14352_15060[(1)] = (74));



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14312 === (7))){
var inst_13959 = (state_14311[(2)]);
var state_14311__$1 = (function (){var statearr_14354 = state_14311;
(statearr_14354[(14)] = inst_13959);

return statearr_14354;
})();
var statearr_14355_15061 = state_14311__$1;
(statearr_14355_15061[(2)] = null);

(statearr_14355_15061[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14312 === (39))){
var _ = (function (){var statearr_14356 = state_14311;
(statearr_14356[(4)] = cljs.core.rest.call(null,(state_14311[(4)])));

return statearr_14356;
})();
var state_14311__$1 = state_14311;
var ex14350 = (state_14311__$1[(2)]);
var statearr_14357_15062 = state_14311__$1;
(statearr_14357_15062[(5)] = ex14350);


var statearr_14358_15063 = state_14311__$1;
(statearr_14358_15063[(1)] = (38));

(statearr_14358_15063[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14312 === (71))){
var inst_14253 = (state_14311[(2)]);
var _ = (function (){var statearr_14359 = state_14311;
(statearr_14359[(4)] = cljs.core.rest.call(null,(state_14311[(4)])));

return statearr_14359;
})();
var state_14311__$1 = state_14311;
var statearr_14360_15064 = state_14311__$1;
(statearr_14360_15064[(2)] = inst_14253);

(statearr_14360_15064[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14312 === (8))){
var inst_13952 = (state_14311[(12)]);
var _ = (function (){var statearr_14361 = state_14311;
(statearr_14361[(4)] = cljs.core.cons.call(null,(11),(state_14311[(4)])));

return statearr_14361;
})();
var state_14311__$1 = state_14311;
if(cljs.core.truth_(inst_13952)){
var statearr_14362_15065 = state_14311__$1;
(statearr_14362_15065[(1)] = (12));

} else {
var statearr_14363_15066 = state_14311__$1;
(statearr_14363_15066[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14312 === (40))){
var inst_14086 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_14087 = true;
var inst_14088 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"can make a proposal",inst_14087,true];
var inst_14089 = cljs.core.PersistentHashMap.fromArrays(inst_14086,inst_14088);
var inst_14090 = cljs.test.do_report.call(null,inst_14089);
var state_14311__$1 = state_14311;
var statearr_14364_15067 = state_14311__$1;
(statearr_14364_15067[(2)] = inst_14090);

(statearr_14364_15067[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14312 === (72))){
var inst_14226 = (state_14311[(2)]);
var inst_14227 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_14228 = true;
var inst_14229 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can make a second proposal",inst_14228,inst_14226];
var inst_14230 = cljs.core.PersistentHashMap.fromArrays(inst_14227,inst_14229);
var inst_14231 = cljs.test.do_report.call(null,inst_14230);
var state_14311__$1 = state_14311;
var statearr_14365_15068 = state_14311__$1;
(statearr_14365_15068[(2)] = inst_14231);

(statearr_14365_15068[(1)] = (71));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14312 === (9))){
var inst_13987 = (state_14311[(2)]);
var state_14311__$1 = state_14311;
var statearr_14367_15069 = state_14311__$1;
(statearr_14367_15069[(2)] = inst_13987);

(statearr_14367_15069[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14312 === (41))){
var inst_14092 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_14093 = true;
var inst_14094 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can make a proposal",inst_14093,true];
var inst_14095 = cljs.core.PersistentHashMap.fromArrays(inst_14092,inst_14094);
var inst_14096 = cljs.test.do_report.call(null,inst_14095);
var state_14311__$1 = state_14311;
var statearr_14368_15070 = state_14311__$1;
(statearr_14368_15070[(2)] = inst_14096);

(statearr_14368_15070[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14312 === (73))){
var _ = (function (){var statearr_14369 = state_14311;
(statearr_14369[(4)] = cljs.core.rest.call(null,(state_14311[(4)])));

return statearr_14369;
})();
var state_14311__$1 = state_14311;
var ex14366 = (state_14311__$1[(2)]);
var statearr_14370_15071 = state_14311__$1;
(statearr_14370_15071[(5)] = ex14366);


var statearr_14371_15072 = state_14311__$1;
(statearr_14371_15072[(1)] = (72));

(statearr_14371_15072[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14312 === (10))){
var inst_13960 = (state_14311[(2)]);
var inst_13961 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_13962 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_13963 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"need to be a dao member",inst_13962,inst_13960];
var inst_13964 = cljs.core.PersistentHashMap.fromArrays(inst_13961,inst_13963);
var inst_13965 = cljs.test.do_report.call(null,inst_13964);
var state_14311__$1 = state_14311;
var statearr_14372_15073 = state_14311__$1;
(statearr_14372_15073[(2)] = inst_13965);

(statearr_14372_15073[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14312 === (42))){
var inst_14098 = (state_14311[(2)]);
var _ = (function (){var statearr_14374 = state_14311;
(statearr_14374[(4)] = cljs.core.rest.call(null,(state_14311[(4)])));

return statearr_14374;
})();
var state_14311__$1 = (function (){var statearr_14375 = state_14311;
(statearr_14375[(15)] = inst_14098);

return statearr_14375;
})();
var statearr_14376_15074 = state_14311__$1;
(statearr_14376_15074[(2)] = true);

(statearr_14376_15074[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14312 === (74))){
var inst_14238 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_14239 = true;
var inst_14240 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"can make a second proposal",inst_14239,true];
var inst_14241 = cljs.core.PersistentHashMap.fromArrays(inst_14238,inst_14240);
var inst_14242 = cljs.test.do_report.call(null,inst_14241);
var state_14311__$1 = state_14311;
var statearr_14377_15075 = state_14311__$1;
(statearr_14377_15075[(2)] = inst_14242);

(statearr_14377_15075[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14312 === (11))){
var _ = (function (){var statearr_14378 = state_14311;
(statearr_14378[(4)] = cljs.core.rest.call(null,(state_14311[(4)])));

return statearr_14378;
})();
var state_14311__$1 = state_14311;
var ex14373 = (state_14311__$1[(2)]);
var statearr_14379_15076 = state_14311__$1;
(statearr_14379_15076[(5)] = ex14373);


var statearr_14380_15077 = state_14311__$1;
(statearr_14380_15077[(1)] = (10));

(statearr_14380_15077[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14312 === (43))){
var inst_14108 = (state_14311[(16)]);
var inst_14108__$1 = (state_14311[(2)]);
var inst_14109 = (inst_14108__$1 instanceof cljs.core.ExceptionInfo);
var inst_14110 = cljs.core.ex_data.call(null,inst_14108__$1);
var inst_14111 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_14110);
var inst_14112 = cljs.core._EQ_.call(null,inst_14111,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_14113 = ((inst_14109) && (inst_14112));
var state_14311__$1 = (function (){var statearr_14381 = state_14311;
(statearr_14381[(16)] = inst_14108__$1);

return statearr_14381;
})();
if(cljs.core.truth_(inst_14113)){
var statearr_14382_15078 = state_14311__$1;
(statearr_14382_15078[(1)] = (44));

} else {
var statearr_14383_15079 = state_14311__$1;
(statearr_14383_15079[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14312 === (75))){
var inst_14244 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_14245 = true;
var inst_14246 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can make a second proposal",inst_14245,true];
var inst_14247 = cljs.core.PersistentHashMap.fromArrays(inst_14244,inst_14246);
var inst_14248 = cljs.test.do_report.call(null,inst_14247);
var state_14311__$1 = state_14311;
var statearr_14384_15080 = state_14311__$1;
(statearr_14384_15080[(2)] = inst_14248);

(statearr_14384_15080[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14312 === (12))){
var inst_13952 = (state_14311[(12)]);
var inst_13972 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_13973 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_13974 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"need to be a dao member",inst_13973,inst_13952];
var inst_13975 = cljs.core.PersistentHashMap.fromArrays(inst_13972,inst_13974);
var inst_13976 = cljs.test.do_report.call(null,inst_13975);
var state_14311__$1 = state_14311;
var statearr_14385_15081 = state_14311__$1;
(statearr_14385_15081[(2)] = inst_13976);

(statearr_14385_15081[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14312 === (44))){
var inst_14108 = (state_14311[(16)]);
var inst_14115 = (function(){throw inst_14108})();
var state_14311__$1 = state_14311;
var statearr_14386_15082 = state_14311__$1;
(statearr_14386_15082[(2)] = inst_14115);

(statearr_14386_15082[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14312 === (76))){
var inst_14250 = (state_14311[(2)]);
var _ = (function (){var statearr_14387 = state_14311;
(statearr_14387[(4)] = cljs.core.rest.call(null,(state_14311[(4)])));

return statearr_14387;
})();
var state_14311__$1 = (function (){var statearr_14388 = state_14311;
(statearr_14388[(17)] = inst_14250);

return statearr_14388;
})();
var statearr_14389_15083 = state_14311__$1;
(statearr_14389_15083[(2)] = true);

(statearr_14389_15083[(1)] = (71));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14312 === (13))){
var inst_13952 = (state_14311[(12)]);
var inst_13978 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_13979 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_13980 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"need to be a dao member",inst_13979,inst_13952];
var inst_13981 = cljs.core.PersistentHashMap.fromArrays(inst_13978,inst_13980);
var inst_13982 = cljs.test.do_report.call(null,inst_13981);
var state_14311__$1 = state_14311;
var statearr_14390_15084 = state_14311__$1;
(statearr_14390_15084[(2)] = inst_13982);

(statearr_14390_15084[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14312 === (45))){
var inst_14108 = (state_14311[(16)]);
var state_14311__$1 = state_14311;
var statearr_14391_15085 = state_14311__$1;
(statearr_14391_15085[(2)] = inst_14108);

(statearr_14391_15085[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14312 === (77))){
var inst_14260 = (state_14311[(18)]);
var inst_14260__$1 = (state_14311[(2)]);
var inst_14261 = (inst_14260__$1 instanceof cljs.core.ExceptionInfo);
var inst_14262 = cljs.core.ex_data.call(null,inst_14260__$1);
var inst_14263 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_14262);
var inst_14264 = cljs.core._EQ_.call(null,inst_14263,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_14265 = ((inst_14261) && (inst_14264));
var state_14311__$1 = (function (){var statearr_14392 = state_14311;
(statearr_14392[(18)] = inst_14260__$1);

return statearr_14392;
})();
if(cljs.core.truth_(inst_14265)){
var statearr_14393_15086 = state_14311__$1;
(statearr_14393_15086[(1)] = (78));

} else {
var statearr_14394_15087 = state_14311__$1;
(statearr_14394_15087[(1)] = (79));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14312 === (14))){
var inst_13952 = (state_14311[(12)]);
var inst_13984 = (state_14311[(2)]);
var _ = (function (){var statearr_14395 = state_14311;
(statearr_14395[(4)] = cljs.core.rest.call(null,(state_14311[(4)])));

return statearr_14395;
})();
var state_14311__$1 = (function (){var statearr_14396 = state_14311;
(statearr_14396[(19)] = inst_13984);

return statearr_14396;
})();
var statearr_14397_15088 = state_14311__$1;
(statearr_14397_15088[(2)] = inst_13952);

(statearr_14397_15088[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14312 === (46))){
var inst_14118 = (state_14311[(2)]);
var state_14311__$1 = (function (){var statearr_14399 = state_14311;
(statearr_14399[(20)] = inst_14118);

return statearr_14399;
})();
var statearr_14400_15089 = state_14311__$1;
(statearr_14400_15089[(2)] = null);

(statearr_14400_15089[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14312 === (78))){
var inst_14260 = (state_14311[(18)]);
var inst_14267 = (function(){throw inst_14260})();
var state_14311__$1 = state_14311;
var statearr_14401_15090 = state_14311__$1;
(statearr_14401_15090[(2)] = inst_14267);

(statearr_14401_15090[(1)] = (80));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14312 === (15))){
var _ = (function (){var statearr_14402 = state_14311;
(statearr_14402[(4)] = cljs.core.rest.call(null,(state_14311[(4)])));

return statearr_14402;
})();
var state_14311__$1 = state_14311;
var ex14398 = (state_14311__$1[(2)]);
var statearr_14403_15091 = state_14311__$1;
(statearr_14403_15091[(5)] = ex14398);


if((ex14398 instanceof Error)){
var statearr_14404_15092 = state_14311__$1;
(statearr_14404_15092[(1)] = (4));

(statearr_14404_15092[(5)] = null);

} else {
throw ex14398;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14312 === (47))){
var inst_14118 = (state_14311[(20)]);
var inst_14132 = (state_14311[(21)]);
var inst_14133 = (state_14311[(22)]);
var _ = (function (){var statearr_14405 = state_14311;
(statearr_14405[(4)] = cljs.core.cons.call(null,(50),(state_14311[(4)])));

return statearr_14405;
})();
var inst_14130 = cljs.core.count.call(null,inst_14118);
var inst_14131 = (new cljs.core.List(null,(1),null,(1),null));
var inst_14132__$1 = (new cljs.core.List(null,inst_14130,inst_14131,(2),null));
var inst_14133__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_14132__$1);
var state_14311__$1 = (function (){var statearr_14406 = state_14311;
(statearr_14406[(21)] = inst_14132__$1);

(statearr_14406[(22)] = inst_14133__$1);

return statearr_14406;
})();
if(cljs.core.truth_(inst_14133__$1)){
var statearr_14407_15093 = state_14311__$1;
(statearr_14407_15093[(1)] = (51));

} else {
var statearr_14408_15094 = state_14311__$1;
(statearr_14408_15094[(1)] = (52));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14312 === (79))){
var inst_14260 = (state_14311[(18)]);
var state_14311__$1 = state_14311;
var statearr_14409_15095 = state_14311__$1;
(statearr_14409_15095[(2)] = inst_14260);

(statearr_14409_15095[(1)] = (80));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14312 === (16))){
var inst_13997 = (state_14311[(23)]);
var inst_13997__$1 = (state_14311[(2)]);
var inst_13998 = (inst_13997__$1 instanceof cljs.core.ExceptionInfo);
var inst_13999 = cljs.core.ex_data.call(null,inst_13997__$1);
var inst_14000 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_13999);
var inst_14001 = cljs.core._EQ_.call(null,inst_14000,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_14002 = ((inst_13998) && (inst_14001));
var state_14311__$1 = (function (){var statearr_14410 = state_14311;
(statearr_14410[(23)] = inst_13997__$1);

return statearr_14410;
})();
if(cljs.core.truth_(inst_14002)){
var statearr_14411_15096 = state_14311__$1;
(statearr_14411_15096[(1)] = (17));

} else {
var statearr_14412_15097 = state_14311__$1;
(statearr_14412_15097[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14312 === (48))){
var inst_14156 = (state_14311[(2)]);
var inst_14157 = [new cljs.core.Keyword(null,"from","from",(1815293044)),new cljs.core.Keyword(null,"to","to",(192099007)),new cljs.core.Keyword(null,"quantity","quantity",(-1929050694)),new cljs.core.Keyword(null,"memo","memo",(-1928616099))];
var inst_14158 = [e2e.proposals.owner_acc,e2e.proposals.prop_acc,e2e.proposals.proposal_cost,"proposal"];
var inst_14159 = cljs.core.PersistentHashMap.fromArrays(inst_14157,inst_14158);
var inst_14160 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14161 = [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),new cljs.core.Keyword(null,"permission","permission",(-511292572))];
var inst_14162 = [e2e.proposals.owner_acc,"active"];
var inst_14163 = cljs.core.PersistentHashMap.fromArrays(inst_14161,inst_14162);
var inst_14164 = [inst_14163];
var inst_14165 = (new cljs.core.PersistentVector(null,(1),(5),inst_14160,inst_14164,null));
var inst_14166 = eos_cljs.core.transact.call(null,e2e.proposals.token_acc,"transfer",inst_14159,inst_14165);
var inst_14167 = cljs.core.async.interop.p__GT_c.call(null,inst_14166);
var state_14311__$1 = (function (){var statearr_14413 = state_14311;
(statearr_14413[(24)] = inst_14156);

return statearr_14413;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14311__$1,(54),inst_14167);
} else {
if((state_val_14312 === (80))){
var inst_14270 = (state_14311[(2)]);
var state_14311__$1 = (function (){var statearr_14414 = state_14311;
(statearr_14414[(25)] = inst_14270);

return statearr_14414;
})();
var statearr_14415_15098 = state_14311__$1;
(statearr_14415_15098[(2)] = null);

(statearr_14415_15098[(1)] = (81));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14312 === (17))){
var inst_13997 = (state_14311[(23)]);
var inst_14004 = (function(){throw inst_13997})();
var state_14311__$1 = state_14311;
var statearr_14416_15099 = state_14311__$1;
(statearr_14416_15099[(2)] = inst_14004);

(statearr_14416_15099[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14312 === (49))){
var inst_14119 = (state_14311[(2)]);
var inst_14120 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_14121 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"count","count",(-514511684),null),new cljs.core.Symbol(null,"rows","rows",(-1804386089),null)),(1));
var inst_14122 = [new cljs.core.Keyword(null,"error","error",(-978969032)),null,inst_14121,inst_14119];
var inst_14123 = cljs.core.PersistentHashMap.fromArrays(inst_14120,inst_14122);
var inst_14124 = cljs.test.do_report.call(null,inst_14123);
var state_14311__$1 = state_14311;
var statearr_14417_15100 = state_14311__$1;
(statearr_14417_15100[(2)] = inst_14124);

(statearr_14417_15100[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14312 === (81))){
var inst_14270 = (state_14311[(25)]);
var inst_14284 = (state_14311[(26)]);
var inst_14285 = (state_14311[(27)]);
var _ = (function (){var statearr_14419 = state_14311;
(statearr_14419[(4)] = cljs.core.cons.call(null,(84),(state_14311[(4)])));

return statearr_14419;
})();
var inst_14282 = cljs.core.count.call(null,inst_14270);
var inst_14283 = (new cljs.core.List(null,(2),null,(1),null));
var inst_14284__$1 = (new cljs.core.List(null,inst_14282,inst_14283,(2),null));
var inst_14285__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_14284__$1);
var state_14311__$1 = (function (){var statearr_14420 = state_14311;
(statearr_14420[(26)] = inst_14284__$1);

(statearr_14420[(27)] = inst_14285__$1);

return statearr_14420;
})();
if(cljs.core.truth_(inst_14285__$1)){
var statearr_14421_15101 = state_14311__$1;
(statearr_14421_15101[(1)] = (85));

} else {
var statearr_14422_15102 = state_14311__$1;
(statearr_14422_15102[(1)] = (86));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14312 === (18))){
var inst_13997 = (state_14311[(23)]);
var state_14311__$1 = state_14311;
var statearr_14423_15103 = state_14311__$1;
(statearr_14423_15103[(2)] = inst_13997);

(statearr_14423_15103[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14312 === (50))){
var _ = (function (){var statearr_14424 = state_14311;
(statearr_14424[(4)] = cljs.core.rest.call(null,(state_14311[(4)])));

return statearr_14424;
})();
var state_14311__$1 = state_14311;
var ex14418 = (state_14311__$1[(2)]);
var statearr_14425_15104 = state_14311__$1;
(statearr_14425_15104[(5)] = ex14418);


var statearr_14426_15105 = state_14311__$1;
(statearr_14426_15105[(1)] = (49));

(statearr_14426_15105[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14312 === (82))){
var inst_14308 = (state_14311[(2)]);
var inst_14309 = done.call(null);
var state_14311__$1 = (function (){var statearr_14427 = state_14311;
(statearr_14427[(28)] = inst_14308);

return statearr_14427;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14311__$1,inst_14309);
} else {
if((state_val_14312 === (19))){
var inst_14007 = (state_14311[(2)]);
var state_14311__$1 = (function (){var statearr_14428 = state_14311;
(statearr_14428[(29)] = inst_14007);

return statearr_14428;
})();
var statearr_14429_15106 = state_14311__$1;
(statearr_14429_15106[(2)] = null);

(statearr_14429_15106[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14312 === (51))){
var inst_14132 = (state_14311[(21)]);
var inst_14135 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_14136 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"count","count",(-514511684),null),new cljs.core.Symbol(null,"rows","rows",(-1804386089),null)),(1));
var inst_14137 = cljs.core.cons.call(null,cljs.core._EQ_,inst_14132);
var inst_14138 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),null,inst_14136,inst_14137];
var inst_14139 = cljs.core.PersistentHashMap.fromArrays(inst_14135,inst_14138);
var inst_14140 = cljs.test.do_report.call(null,inst_14139);
var state_14311__$1 = state_14311;
var statearr_14430_15107 = state_14311__$1;
(statearr_14430_15107[(2)] = inst_14140);

(statearr_14430_15107[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14312 === (83))){
var inst_14271 = (state_14311[(2)]);
var inst_14272 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_14273 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"count","count",(-514511684),null),new cljs.core.Symbol(null,"rows","rows",(-1804386089),null)),(2));
var inst_14274 = [new cljs.core.Keyword(null,"error","error",(-978969032)),null,inst_14273,inst_14271];
var inst_14275 = cljs.core.PersistentHashMap.fromArrays(inst_14272,inst_14274);
var inst_14276 = cljs.test.do_report.call(null,inst_14275);
var state_14311__$1 = state_14311;
var statearr_14431_15108 = state_14311__$1;
(statearr_14431_15108[(2)] = inst_14276);

(statearr_14431_15108[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14312 === (20))){
var _ = (function (){var statearr_14433 = state_14311;
(statearr_14433[(4)] = cljs.core.cons.call(null,(23),(state_14311[(4)])));

return statearr_14433;
})();
var inst_14019 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_14020 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"need to be a dao member"];
var inst_14021 = cljs.core.PersistentHashMap.fromArrays(inst_14019,inst_14020);
var inst_14022 = cljs.test.do_report.call(null,inst_14021);
var ___$1 = (function (){var statearr_14434 = state_14311;
(statearr_14434[(4)] = cljs.core.rest.call(null,(state_14311[(4)])));

return statearr_14434;
})();
var state_14311__$1 = state_14311;
var statearr_14435_15109 = state_14311__$1;
(statearr_14435_15109[(2)] = inst_14022);

(statearr_14435_15109[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14312 === (52))){
var inst_14132 = (state_14311[(21)]);
var inst_14142 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_14143 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"count","count",(-514511684),null),new cljs.core.Symbol(null,"rows","rows",(-1804386089),null)),(1));
var inst_14144 = new cljs.core.Symbol(null,"not","not",(1044554643),null);
var inst_14145 = new cljs.core.Symbol(null,"=","=",(-1501502141),null);
var inst_14146 = cljs.core.cons.call(null,inst_14145,inst_14132);
var inst_14147 = (new cljs.core.List(null,inst_14146,null,(1),null));
var inst_14148 = (new cljs.core.List(null,inst_14144,inst_14147,(2),null));
var inst_14149 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),null,inst_14143,inst_14148];
var inst_14150 = cljs.core.PersistentHashMap.fromArrays(inst_14142,inst_14149);
var inst_14151 = cljs.test.do_report.call(null,inst_14150);
var state_14311__$1 = state_14311;
var statearr_14436_15110 = state_14311__$1;
(statearr_14436_15110[(2)] = inst_14151);

(statearr_14436_15110[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14312 === (84))){
var _ = (function (){var statearr_14437 = state_14311;
(statearr_14437[(4)] = cljs.core.rest.call(null,(state_14311[(4)])));

return statearr_14437;
})();
var state_14311__$1 = state_14311;
var ex14432 = (state_14311__$1[(2)]);
var statearr_14438_15111 = state_14311__$1;
(statearr_14438_15111[(5)] = ex14432);


var statearr_14439_15112 = state_14311__$1;
(statearr_14439_15112[(1)] = (83));

(statearr_14439_15112[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14312 === (21))){
var inst_14025 = (state_14311[(2)]);
var _ = (function (){var statearr_14440 = state_14311;
(statearr_14440[(4)] = cljs.core.rest.call(null,(state_14311[(4)])));

return statearr_14440;
})();
var state_14311__$1 = state_14311;
var statearr_14441_15113 = state_14311__$1;
(statearr_14441_15113[(2)] = inst_14025);

(statearr_14441_15113[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14312 === (53))){
var inst_14133 = (state_14311[(22)]);
var inst_14153 = (state_14311[(2)]);
var _ = (function (){var statearr_14442 = state_14311;
(statearr_14442[(4)] = cljs.core.rest.call(null,(state_14311[(4)])));

return statearr_14442;
})();
var state_14311__$1 = (function (){var statearr_14443 = state_14311;
(statearr_14443[(30)] = inst_14153);

return statearr_14443;
})();
var statearr_14444_15114 = state_14311__$1;
(statearr_14444_15114[(2)] = inst_14133);

(statearr_14444_15114[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14312 === (85))){
var inst_14284 = (state_14311[(26)]);
var inst_14287 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_14288 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"count","count",(-514511684),null),new cljs.core.Symbol(null,"rows","rows",(-1804386089),null)),(2));
var inst_14289 = cljs.core.cons.call(null,cljs.core._EQ_,inst_14284);
var inst_14290 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),null,inst_14288,inst_14289];
var inst_14291 = cljs.core.PersistentHashMap.fromArrays(inst_14287,inst_14290);
var inst_14292 = cljs.test.do_report.call(null,inst_14291);
var state_14311__$1 = state_14311;
var statearr_14445_15115 = state_14311__$1;
(statearr_14445_15115[(2)] = inst_14292);

(statearr_14445_15115[(1)] = (87));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14312 === (22))){
var inst_14008 = (state_14311[(2)]);
var inst_14009 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_14010 = null;
var inst_14011 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"need to be a dao member",inst_14010,inst_14008];
var inst_14012 = cljs.core.PersistentHashMap.fromArrays(inst_14009,inst_14011);
var inst_14013 = cljs.test.do_report.call(null,inst_14012);
var state_14311__$1 = state_14311;
var statearr_14446_15116 = state_14311__$1;
(statearr_14446_15116[(2)] = inst_14013);

(statearr_14446_15116[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14312 === (54))){
var inst_14169 = (state_14311[(31)]);
var inst_14169__$1 = (state_14311[(2)]);
var inst_14170 = (inst_14169__$1 instanceof cljs.core.ExceptionInfo);
var inst_14171 = cljs.core.ex_data.call(null,inst_14169__$1);
var inst_14172 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_14171);
var inst_14173 = cljs.core._EQ_.call(null,inst_14172,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_14174 = ((inst_14170) && (inst_14173));
var state_14311__$1 = (function (){var statearr_14448 = state_14311;
(statearr_14448[(31)] = inst_14169__$1);

return statearr_14448;
})();
if(cljs.core.truth_(inst_14174)){
var statearr_14449_15117 = state_14311__$1;
(statearr_14449_15117[(1)] = (55));

} else {
var statearr_14450_15118 = state_14311__$1;
(statearr_14450_15118[(1)] = (56));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14312 === (86))){
var inst_14284 = (state_14311[(26)]);
var inst_14294 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_14295 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"count","count",(-514511684),null),new cljs.core.Symbol(null,"rows","rows",(-1804386089),null)),(2));
var inst_14296 = new cljs.core.Symbol(null,"not","not",(1044554643),null);
var inst_14297 = new cljs.core.Symbol(null,"=","=",(-1501502141),null);
var inst_14298 = cljs.core.cons.call(null,inst_14297,inst_14284);
var inst_14299 = (new cljs.core.List(null,inst_14298,null,(1),null));
var inst_14300 = (new cljs.core.List(null,inst_14296,inst_14299,(2),null));
var inst_14301 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),null,inst_14295,inst_14300];
var inst_14302 = cljs.core.PersistentHashMap.fromArrays(inst_14294,inst_14301);
var inst_14303 = cljs.test.do_report.call(null,inst_14302);
var state_14311__$1 = state_14311;
var statearr_14451_15119 = state_14311__$1;
(statearr_14451_15119[(2)] = inst_14303);

(statearr_14451_15119[(1)] = (87));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14312 === (23))){
var _ = (function (){var statearr_14452 = state_14311;
(statearr_14452[(4)] = cljs.core.rest.call(null,(state_14311[(4)])));

return statearr_14452;
})();
var state_14311__$1 = state_14311;
var ex14447 = (state_14311__$1[(2)]);
var statearr_14453_15120 = state_14311__$1;
(statearr_14453_15120[(5)] = ex14447);


var statearr_14454_15121 = state_14311__$1;
(statearr_14454_15121[(1)] = (22));

(statearr_14454_15121[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14312 === (55))){
var inst_14169 = (state_14311[(31)]);
var inst_14176 = (function(){throw inst_14169})();
var state_14311__$1 = state_14311;
var statearr_14455_15122 = state_14311__$1;
(statearr_14455_15122[(2)] = inst_14176);

(statearr_14455_15122[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14312 === (87))){
var inst_14285 = (state_14311[(27)]);
var inst_14305 = (state_14311[(2)]);
var _ = (function (){var statearr_14456 = state_14311;
(statearr_14456[(4)] = cljs.core.rest.call(null,(state_14311[(4)])));

return statearr_14456;
})();
var state_14311__$1 = (function (){var statearr_14457 = state_14311;
(statearr_14457[(32)] = inst_14305);

return statearr_14457;
})();
var statearr_14458_15123 = state_14311__$1;
(statearr_14458_15123[(2)] = inst_14285);

(statearr_14458_15123[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14312 === (24))){
var _ = (function (){var statearr_14459 = state_14311;
(statearr_14459[(4)] = cljs.core.cons.call(null,(31),(state_14311[(4)])));

return statearr_14459;
})();
var inst_14054 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14055 = [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),new cljs.core.Keyword(null,"permission","permission",(-511292572))];
var inst_14056 = [e2e.proposals.owner_acc,"active"];
var inst_14057 = cljs.core.PersistentHashMap.fromArrays(inst_14055,inst_14056);
var inst_14058 = [inst_14057];
var inst_14059 = (new cljs.core.PersistentVector(null,(1),(5),inst_14054,inst_14058,null));
var inst_14060 = eos_cljs.core.transact.call(null,e2e.proposals.prop_acc,"createprop",e2e.proposals.base_prop,inst_14059);
var inst_14061 = cljs.core.async.interop.p__GT_c.call(null,inst_14060);
var state_14311__$1 = state_14311;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14311__$1,(32),inst_14061);
} else {
if((state_val_14312 === (56))){
var inst_14169 = (state_14311[(31)]);
var state_14311__$1 = state_14311;
var statearr_14460_15124 = state_14311__$1;
(statearr_14460_15124[(2)] = inst_14169);

(statearr_14460_15124[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14312 === (25))){
var inst_14104 = (state_14311[(2)]);
var inst_14105 = eos_cljs.core.get_table_rows.call(null,e2e.proposals.prop_acc,e2e.proposals.prop_acc,"proposal");
var inst_14106 = cljs.core.async.interop.p__GT_c.call(null,inst_14105);
var state_14311__$1 = (function (){var statearr_14461 = state_14311;
(statearr_14461[(33)] = inst_14104);

return statearr_14461;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14311__$1,(43),inst_14106);
} else {
if((state_val_14312 === (57))){
var inst_14179 = (state_14311[(2)]);
var state_14311__$1 = (function (){var statearr_14462 = state_14311;
(statearr_14462[(34)] = inst_14179);

return statearr_14462;
})();
var statearr_14463_15125 = state_14311__$1;
(statearr_14463_15125[(2)] = null);

(statearr_14463_15125[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14312 === (26))){
var inst_14029 = (state_14311[(2)]);
var inst_14030 = cljs.core.prn.call(null,"test failed with ",inst_14029);
var state_14311__$1 = (function (){var statearr_14464 = state_14311;
(statearr_14464[(35)] = inst_14030);

return statearr_14464;
})();
var statearr_14465_15126 = state_14311__$1;
(statearr_14465_15126[(2)] = null);

(statearr_14465_15126[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14312 === (58))){
var _ = (function (){var statearr_14466 = state_14311;
(statearr_14466[(4)] = cljs.core.cons.call(null,(65),(state_14311[(4)])));

return statearr_14466;
})();
var inst_14205 = cljs.core.assoc.call(null,e2e.proposals.base_prop,new cljs.core.Keyword(null,"content_hash","content_hash",(121497903)),"bb");
var inst_14206 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14207 = [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),new cljs.core.Keyword(null,"permission","permission",(-511292572))];
var inst_14208 = [e2e.proposals.owner_acc,"active"];
var inst_14209 = cljs.core.PersistentHashMap.fromArrays(inst_14207,inst_14208);
var inst_14210 = [inst_14209];
var inst_14211 = (new cljs.core.PersistentVector(null,(1),(5),inst_14206,inst_14210,null));
var inst_14212 = eos_cljs.core.transact.call(null,e2e.proposals.prop_acc,"createprop",inst_14205,inst_14211);
var inst_14213 = cljs.core.async.interop.p__GT_c.call(null,inst_14212);
var state_14311__$1 = state_14311;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14311__$1,(66),inst_14213);
} else {
if((state_val_14312 === (27))){
var _ = (function (){var statearr_14467 = state_14311;
(statearr_14467[(4)] = cljs.core.cons.call(null,(30),(state_14311[(4)])));

return statearr_14467;
})();
var inst_14042 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_14043 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can make a proposal"];
var inst_14044 = cljs.core.PersistentHashMap.fromArrays(inst_14042,inst_14043);
var inst_14045 = cljs.test.do_report.call(null,inst_14044);
var ___$1 = (function (){var statearr_14468 = state_14311;
(statearr_14468[(4)] = cljs.core.rest.call(null,(state_14311[(4)])));

return statearr_14468;
})();
var state_14311__$1 = state_14311;
var statearr_14469_15127 = state_14311__$1;
(statearr_14469_15127[(2)] = inst_14045);

(statearr_14469_15127[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14312 === (59))){
var inst_14256 = (state_14311[(2)]);
var inst_14257 = eos_cljs.core.get_table_rows.call(null,e2e.proposals.prop_acc,e2e.proposals.prop_acc,"proposal");
var inst_14258 = cljs.core.async.interop.p__GT_c.call(null,inst_14257);
var state_14311__$1 = (function (){var statearr_14470 = state_14311;
(statearr_14470[(36)] = inst_14256);

return statearr_14470;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14311__$1,(77),inst_14258);
} else {
if((state_val_14312 === (28))){
var inst_14048 = (state_14311[(2)]);
var state_14311__$1 = state_14311;
var statearr_14471_15128 = state_14311__$1;
(statearr_14471_15128[(2)] = inst_14048);

(statearr_14471_15128[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14312 === (60))){
var inst_14180 = (state_14311[(2)]);
var inst_14181 = cljs.core.prn.call(null,"test failed with ",inst_14180);
var state_14311__$1 = (function (){var statearr_14472 = state_14311;
(statearr_14472[(37)] = inst_14181);

return statearr_14472;
})();
var statearr_14473_15129 = state_14311__$1;
(statearr_14473_15129[(2)] = null);

(statearr_14473_15129[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14312 === (29))){
var inst_14031 = (state_14311[(2)]);
var inst_14032 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_14033 = null;
var inst_14034 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can make a proposal",inst_14033,inst_14031];
var inst_14035 = cljs.core.PersistentHashMap.fromArrays(inst_14032,inst_14034);
var inst_14036 = cljs.test.do_report.call(null,inst_14035);
var state_14311__$1 = state_14311;
var statearr_14475_15130 = state_14311__$1;
(statearr_14475_15130[(2)] = inst_14036);

(statearr_14475_15130[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14312 === (61))){
var _ = (function (){var statearr_14476 = state_14311;
(statearr_14476[(4)] = cljs.core.cons.call(null,(64),(state_14311[(4)])));

return statearr_14476;
})();
var inst_14193 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_14194 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can make a second proposal"];
var inst_14195 = cljs.core.PersistentHashMap.fromArrays(inst_14193,inst_14194);
var inst_14196 = cljs.test.do_report.call(null,inst_14195);
var ___$1 = (function (){var statearr_14477 = state_14311;
(statearr_14477[(4)] = cljs.core.rest.call(null,(state_14311[(4)])));

return statearr_14477;
})();
var state_14311__$1 = state_14311;
var statearr_14478_15131 = state_14311__$1;
(statearr_14478_15131[(2)] = inst_14196);

(statearr_14478_15131[(1)] = (62));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14312 === (30))){
var _ = (function (){var statearr_14480 = state_14311;
(statearr_14480[(4)] = cljs.core.rest.call(null,(state_14311[(4)])));

return statearr_14480;
})();
var state_14311__$1 = state_14311;
var ex14474 = (state_14311__$1[(2)]);
var statearr_14481_15132 = state_14311__$1;
(statearr_14481_15132[(5)] = ex14474);


var statearr_14482_15133 = state_14311__$1;
(statearr_14482_15133[(1)] = (29));

(statearr_14482_15133[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14312 === (62))){
var inst_14199 = (state_14311[(2)]);
var state_14311__$1 = state_14311;
var statearr_14483_15134 = state_14311__$1;
(statearr_14483_15134[(2)] = inst_14199);

(statearr_14483_15134[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14312 === (31))){
var _ = (function (){var statearr_14484 = state_14311;
(statearr_14484[(4)] = cljs.core.rest.call(null,(state_14311[(4)])));

return statearr_14484;
})();
var state_14311__$1 = state_14311;
var ex14479 = (state_14311__$1[(2)]);
var statearr_14485_15135 = state_14311__$1;
(statearr_14485_15135[(5)] = ex14479);


if((ex14479 instanceof Error)){
var statearr_14486_15136 = state_14311__$1;
(statearr_14486_15136[(1)] = (26));

(statearr_14486_15136[(5)] = null);

} else {
throw ex14479;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14312 === (63))){
var inst_14182 = (state_14311[(2)]);
var inst_14183 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_14184 = null;
var inst_14185 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can make a second proposal",inst_14184,inst_14182];
var inst_14186 = cljs.core.PersistentHashMap.fromArrays(inst_14183,inst_14185);
var inst_14187 = cljs.test.do_report.call(null,inst_14186);
var state_14311__$1 = state_14311;
var statearr_14487_15137 = state_14311__$1;
(statearr_14487_15137[(2)] = inst_14187);

(statearr_14487_15137[(1)] = (62));


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
}
}
}
}
}
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
var e2e$proposals$state_machine__15__auto__ = null;
var e2e$proposals$state_machine__15__auto____0 = (function (){
var statearr_14488 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14488[(0)] = e2e$proposals$state_machine__15__auto__);

(statearr_14488[(1)] = (1));

return statearr_14488;
});
var e2e$proposals$state_machine__15__auto____1 = (function (state_14311){
while(true){
var ret_value__16__auto__ = (function (){try{while(true){
var result__17__auto__ = switch__14__auto__.call(null,state_14311);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__17__auto__;
}
break;
}
}catch (e14489){var ex__18__auto__ = e14489;
var statearr_14490_15138 = state_14311;
(statearr_14490_15138[(2)] = ex__18__auto__);


if(cljs.core.seq.call(null,(state_14311[(4)]))){
var statearr_14491_15139 = state_14311;
(statearr_14491_15139[(1)] = cljs.core.first.call(null,(state_14311[(4)])));

} else {
throw ex__18__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__15140 = state_14311;
state_14311 = G__15140;
continue;
} else {
return ret_value__16__auto__;
}
break;
}
});
e2e$proposals$state_machine__15__auto__ = function(state_14311){
switch(arguments.length){
case 0:
return e2e$proposals$state_machine__15__auto____0.call(this);
case 1:
return e2e$proposals$state_machine__15__auto____1.call(this,state_14311);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
e2e$proposals$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$0 = e2e$proposals$state_machine__15__auto____0;
e2e$proposals$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$1 = e2e$proposals$state_machine__15__auto____1;
return e2e$proposals$state_machine__15__auto__;
})()
;})(switch__14__auto__,c__19__auto__,___192__auto__,self____$1))
})();
var state__21__auto__ = (function (){var statearr_14492 = f__20__auto__.call(null);
(statearr_14492[(6)] = c__19__auto__);

return statearr_14492;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21__auto__);
});})(c__19__auto__,___192__auto__,self____$1))
);

return c__19__auto__;
});

e2e.proposals.t_e2e$proposals13945.prototype.apply = (function (self__,args13948){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args13948)));
});

e2e.proposals.t_e2e$proposals13945.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___192__auto__ = this;
var c__19__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19__auto__,___192__auto__){
return (function (){
var f__20__auto__ = (function (){var switch__14__auto__ = ((function (c__19__auto__,___192__auto__){
return (function (state_14855){
var state_val_14856 = (state_14855[(1)]);
if((state_val_14856 === (32))){
var inst_14607 = (state_14855[(7)]);
var inst_14607__$1 = (state_14855[(2)]);
var inst_14608 = (inst_14607__$1 instanceof cljs.core.ExceptionInfo);
var inst_14609 = cljs.core.ex_data.call(null,inst_14607__$1);
var inst_14610 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_14609);
var inst_14611 = cljs.core._EQ_.call(null,inst_14610,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_14612 = ((inst_14608) && (inst_14611));
var state_14855__$1 = (function (){var statearr_14858 = state_14855;
(statearr_14858[(7)] = inst_14607__$1);

return statearr_14858;
})();
if(cljs.core.truth_(inst_14612)){
var statearr_14859_15141 = state_14855__$1;
(statearr_14859_15141[(1)] = (33));

} else {
var statearr_14860_15142 = state_14855__$1;
(statearr_14860_15142[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14856 === (64))){
var _ = (function (){var statearr_14861 = state_14855;
(statearr_14861[(4)] = cljs.core.rest.call(null,(state_14855[(4)])));

return statearr_14861;
})();
var state_14855__$1 = state_14855;
var ex14857 = (state_14855__$1[(2)]);
var statearr_14862_15143 = state_14855__$1;
(statearr_14862_15143[(5)] = ex14857);


var statearr_14863_15144 = state_14855__$1;
(statearr_14863_15144[(1)] = (63));

(statearr_14863_15144[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14856 === (1))){
var state_14855__$1 = state_14855;
var statearr_14865_15145 = state_14855__$1;
(statearr_14865_15145[(2)] = null);

(statearr_14865_15145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14856 === (33))){
var inst_14607 = (state_14855[(7)]);
var inst_14614 = (function(){throw inst_14607})();
var state_14855__$1 = state_14855;
var statearr_14866_15146 = state_14855__$1;
(statearr_14866_15146[(2)] = inst_14614);

(statearr_14866_15146[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14856 === (65))){
var _ = (function (){var statearr_14867 = state_14855;
(statearr_14867[(4)] = cljs.core.rest.call(null,(state_14855[(4)])));

return statearr_14867;
})();
var state_14855__$1 = state_14855;
var ex14864 = (state_14855__$1[(2)]);
var statearr_14868_15147 = state_14855__$1;
(statearr_14868_15147[(5)] = ex14864);


if((ex14864 instanceof Error)){
var statearr_14869_15148 = state_14855__$1;
(statearr_14869_15148[(1)] = (60));

(statearr_14869_15148[(5)] = null);

} else {
throw ex14864;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14856 === (2))){
var _ = (function (){var statearr_14870 = state_14855;
(statearr_14870[(4)] = cljs.core.cons.call(null,(15),(state_14855[(4)])));

return statearr_14870;
})();
var inst_14537 = cljs.core.assoc.call(null,e2e.proposals.base_prop,new cljs.core.Keyword(null,"author","author",(2111686192)),e2e.proposals.prop_acc);
var inst_14538 = eos_cljs.core.transact.call(null,e2e.proposals.prop_acc,"createprop",inst_14537);
var inst_14539 = cljs.core.async.interop.p__GT_c.call(null,inst_14538);
var state_14855__$1 = state_14855;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14855__$1,(16),inst_14539);
} else {
if((state_val_14856 === (34))){
var inst_14607 = (state_14855[(7)]);
var state_14855__$1 = state_14855;
var statearr_14871_15149 = state_14855__$1;
(statearr_14871_15149[(2)] = inst_14607);

(statearr_14871_15149[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14856 === (66))){
var inst_14759 = (state_14855[(8)]);
var inst_14759__$1 = (state_14855[(2)]);
var inst_14760 = (inst_14759__$1 instanceof cljs.core.ExceptionInfo);
var inst_14761 = cljs.core.ex_data.call(null,inst_14759__$1);
var inst_14762 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_14761);
var inst_14763 = cljs.core._EQ_.call(null,inst_14762,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_14764 = ((inst_14760) && (inst_14763));
var state_14855__$1 = (function (){var statearr_14872 = state_14855;
(statearr_14872[(8)] = inst_14759__$1);

return statearr_14872;
})();
if(cljs.core.truth_(inst_14764)){
var statearr_14873_15150 = state_14855__$1;
(statearr_14873_15150[(1)] = (67));

} else {
var statearr_14874_15151 = state_14855__$1;
(statearr_14874_15151[(1)] = (68));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14856 === (3))){
var inst_14572 = (state_14855[(2)]);
var state_14855__$1 = (function (){var statearr_14875 = state_14855;
(statearr_14875[(9)] = inst_14572);

return statearr_14875;
})();
var statearr_14876_15152 = state_14855__$1;
(statearr_14876_15152[(2)] = null);

(statearr_14876_15152[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14856 === (35))){
var inst_14617 = (state_14855[(2)]);
var state_14855__$1 = (function (){var statearr_14877 = state_14855;
(statearr_14877[(10)] = inst_14617);

return statearr_14877;
})();
var statearr_14878_15153 = state_14855__$1;
(statearr_14878_15153[(2)] = null);

(statearr_14878_15153[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14856 === (67))){
var inst_14759 = (state_14855[(8)]);
var inst_14766 = (function(){throw inst_14759})();
var state_14855__$1 = state_14855;
var statearr_14879_15154 = state_14855__$1;
(statearr_14879_15154[(2)] = inst_14766);

(statearr_14879_15154[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14856 === (4))){
var inst_14495 = (state_14855[(11)]);
var inst_14496 = (state_14855[(12)]);
var inst_14493 = (state_14855[(2)]);
var inst_14494 = inst_14493.cause;
var inst_14495__$1 = inst_14494.message;
var inst_14496__$1 = clojure.string.ends_with_QMARK_.call(null,inst_14495__$1,"not a dao member");
var inst_14497 = (!(inst_14496__$1));
var state_14855__$1 = (function (){var statearr_14880 = state_14855;
(statearr_14880[(11)] = inst_14495__$1);

(statearr_14880[(12)] = inst_14496__$1);

return statearr_14880;
})();
if(inst_14497){
var statearr_14881_15155 = state_14855__$1;
(statearr_14881_15155[(1)] = (5));

} else {
var statearr_14882_15156 = state_14855__$1;
(statearr_14882_15156[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14856 === (36))){
var _ = (function (){var statearr_14883 = state_14855;
(statearr_14883[(4)] = cljs.core.cons.call(null,(39),(state_14855[(4)])));

return statearr_14883;
})();
var state_14855__$1 = state_14855;
var statearr_14884_15157 = state_14855__$1;
(statearr_14884_15157[(1)] = (40));



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14856 === (68))){
var inst_14759 = (state_14855[(8)]);
var state_14855__$1 = state_14855;
var statearr_14886_15158 = state_14855__$1;
(statearr_14886_15158[(2)] = inst_14759);

(statearr_14886_15158[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14856 === (5))){
var inst_14495 = (state_14855[(11)]);
var inst_14499 = ["expected =","not a dao member"," actual = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_14495)].join('');
var inst_14500 = cljs.core.prn.call(null,inst_14499);
var state_14855__$1 = state_14855;
var statearr_14887_15159 = state_14855__$1;
(statearr_14887_15159[(2)] = inst_14500);

(statearr_14887_15159[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14856 === (37))){
var inst_14645 = (state_14855[(2)]);
var _ = (function (){var statearr_14888 = state_14855;
(statearr_14888[(4)] = cljs.core.rest.call(null,(state_14855[(4)])));

return statearr_14888;
})();
var state_14855__$1 = state_14855;
var statearr_14889_15160 = state_14855__$1;
(statearr_14889_15160[(2)] = inst_14645);

(statearr_14889_15160[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14856 === (69))){
var inst_14769 = (state_14855[(2)]);
var state_14855__$1 = (function (){var statearr_14890 = state_14855;
(statearr_14890[(13)] = inst_14769);

return statearr_14890;
})();
var statearr_14891_15161 = state_14855__$1;
(statearr_14891_15161[(2)] = null);

(statearr_14891_15161[(1)] = (70));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14856 === (6))){
var state_14855__$1 = state_14855;
var statearr_14892_15162 = state_14855__$1;
(statearr_14892_15162[(2)] = null);

(statearr_14892_15162[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14856 === (38))){
var inst_14618 = (state_14855[(2)]);
var inst_14619 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_14620 = true;
var inst_14621 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can make a proposal",inst_14620,inst_14618];
var inst_14622 = cljs.core.PersistentHashMap.fromArrays(inst_14619,inst_14621);
var inst_14623 = cljs.test.do_report.call(null,inst_14622);
var state_14855__$1 = state_14855;
var statearr_14893_15163 = state_14855__$1;
(statearr_14893_15163[(2)] = inst_14623);

(statearr_14893_15163[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14856 === (70))){
var _ = (function (){var statearr_14895 = state_14855;
(statearr_14895[(4)] = cljs.core.cons.call(null,(73),(state_14855[(4)])));

return statearr_14895;
})();
var state_14855__$1 = state_14855;
var statearr_14896_15164 = state_14855__$1;
(statearr_14896_15164[(1)] = (74));



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14856 === (7))){
var inst_14503 = (state_14855[(2)]);
var state_14855__$1 = (function (){var statearr_14898 = state_14855;
(statearr_14898[(14)] = inst_14503);

return statearr_14898;
})();
var statearr_14899_15165 = state_14855__$1;
(statearr_14899_15165[(2)] = null);

(statearr_14899_15165[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14856 === (39))){
var _ = (function (){var statearr_14900 = state_14855;
(statearr_14900[(4)] = cljs.core.rest.call(null,(state_14855[(4)])));

return statearr_14900;
})();
var state_14855__$1 = state_14855;
var ex14894 = (state_14855__$1[(2)]);
var statearr_14901_15166 = state_14855__$1;
(statearr_14901_15166[(5)] = ex14894);


var statearr_14902_15167 = state_14855__$1;
(statearr_14902_15167[(1)] = (38));

(statearr_14902_15167[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14856 === (71))){
var inst_14797 = (state_14855[(2)]);
var _ = (function (){var statearr_14903 = state_14855;
(statearr_14903[(4)] = cljs.core.rest.call(null,(state_14855[(4)])));

return statearr_14903;
})();
var state_14855__$1 = state_14855;
var statearr_14904_15168 = state_14855__$1;
(statearr_14904_15168[(2)] = inst_14797);

(statearr_14904_15168[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14856 === (8))){
var inst_14496 = (state_14855[(12)]);
var _ = (function (){var statearr_14905 = state_14855;
(statearr_14905[(4)] = cljs.core.cons.call(null,(11),(state_14855[(4)])));

return statearr_14905;
})();
var state_14855__$1 = state_14855;
if(cljs.core.truth_(inst_14496)){
var statearr_14906_15169 = state_14855__$1;
(statearr_14906_15169[(1)] = (12));

} else {
var statearr_14907_15170 = state_14855__$1;
(statearr_14907_15170[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14856 === (40))){
var inst_14630 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_14631 = true;
var inst_14632 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"can make a proposal",inst_14631,true];
var inst_14633 = cljs.core.PersistentHashMap.fromArrays(inst_14630,inst_14632);
var inst_14634 = cljs.test.do_report.call(null,inst_14633);
var state_14855__$1 = state_14855;
var statearr_14908_15171 = state_14855__$1;
(statearr_14908_15171[(2)] = inst_14634);

(statearr_14908_15171[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14856 === (72))){
var inst_14770 = (state_14855[(2)]);
var inst_14771 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_14772 = true;
var inst_14773 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can make a second proposal",inst_14772,inst_14770];
var inst_14774 = cljs.core.PersistentHashMap.fromArrays(inst_14771,inst_14773);
var inst_14775 = cljs.test.do_report.call(null,inst_14774);
var state_14855__$1 = state_14855;
var statearr_14909_15172 = state_14855__$1;
(statearr_14909_15172[(2)] = inst_14775);

(statearr_14909_15172[(1)] = (71));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14856 === (9))){
var inst_14531 = (state_14855[(2)]);
var state_14855__$1 = state_14855;
var statearr_14911_15173 = state_14855__$1;
(statearr_14911_15173[(2)] = inst_14531);

(statearr_14911_15173[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14856 === (41))){
var inst_14636 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_14637 = true;
var inst_14638 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can make a proposal",inst_14637,true];
var inst_14639 = cljs.core.PersistentHashMap.fromArrays(inst_14636,inst_14638);
var inst_14640 = cljs.test.do_report.call(null,inst_14639);
var state_14855__$1 = state_14855;
var statearr_14912_15174 = state_14855__$1;
(statearr_14912_15174[(2)] = inst_14640);

(statearr_14912_15174[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14856 === (73))){
var _ = (function (){var statearr_14913 = state_14855;
(statearr_14913[(4)] = cljs.core.rest.call(null,(state_14855[(4)])));

return statearr_14913;
})();
var state_14855__$1 = state_14855;
var ex14910 = (state_14855__$1[(2)]);
var statearr_14914_15175 = state_14855__$1;
(statearr_14914_15175[(5)] = ex14910);


var statearr_14915_15176 = state_14855__$1;
(statearr_14915_15176[(1)] = (72));

(statearr_14915_15176[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14856 === (10))){
var inst_14504 = (state_14855[(2)]);
var inst_14505 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_14506 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_14507 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"need to be a dao member",inst_14506,inst_14504];
var inst_14508 = cljs.core.PersistentHashMap.fromArrays(inst_14505,inst_14507);
var inst_14509 = cljs.test.do_report.call(null,inst_14508);
var state_14855__$1 = state_14855;
var statearr_14916_15177 = state_14855__$1;
(statearr_14916_15177[(2)] = inst_14509);

(statearr_14916_15177[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14856 === (42))){
var inst_14642 = (state_14855[(2)]);
var _ = (function (){var statearr_14918 = state_14855;
(statearr_14918[(4)] = cljs.core.rest.call(null,(state_14855[(4)])));

return statearr_14918;
})();
var state_14855__$1 = (function (){var statearr_14919 = state_14855;
(statearr_14919[(15)] = inst_14642);

return statearr_14919;
})();
var statearr_14920_15178 = state_14855__$1;
(statearr_14920_15178[(2)] = true);

(statearr_14920_15178[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14856 === (74))){
var inst_14782 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_14783 = true;
var inst_14784 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"can make a second proposal",inst_14783,true];
var inst_14785 = cljs.core.PersistentHashMap.fromArrays(inst_14782,inst_14784);
var inst_14786 = cljs.test.do_report.call(null,inst_14785);
var state_14855__$1 = state_14855;
var statearr_14921_15179 = state_14855__$1;
(statearr_14921_15179[(2)] = inst_14786);

(statearr_14921_15179[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14856 === (11))){
var _ = (function (){var statearr_14922 = state_14855;
(statearr_14922[(4)] = cljs.core.rest.call(null,(state_14855[(4)])));

return statearr_14922;
})();
var state_14855__$1 = state_14855;
var ex14917 = (state_14855__$1[(2)]);
var statearr_14923_15180 = state_14855__$1;
(statearr_14923_15180[(5)] = ex14917);


var statearr_14924_15181 = state_14855__$1;
(statearr_14924_15181[(1)] = (10));

(statearr_14924_15181[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14856 === (43))){
var inst_14652 = (state_14855[(16)]);
var inst_14652__$1 = (state_14855[(2)]);
var inst_14653 = (inst_14652__$1 instanceof cljs.core.ExceptionInfo);
var inst_14654 = cljs.core.ex_data.call(null,inst_14652__$1);
var inst_14655 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_14654);
var inst_14656 = cljs.core._EQ_.call(null,inst_14655,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_14657 = ((inst_14653) && (inst_14656));
var state_14855__$1 = (function (){var statearr_14925 = state_14855;
(statearr_14925[(16)] = inst_14652__$1);

return statearr_14925;
})();
if(cljs.core.truth_(inst_14657)){
var statearr_14926_15182 = state_14855__$1;
(statearr_14926_15182[(1)] = (44));

} else {
var statearr_14927_15183 = state_14855__$1;
(statearr_14927_15183[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14856 === (75))){
var inst_14788 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_14789 = true;
var inst_14790 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can make a second proposal",inst_14789,true];
var inst_14791 = cljs.core.PersistentHashMap.fromArrays(inst_14788,inst_14790);
var inst_14792 = cljs.test.do_report.call(null,inst_14791);
var state_14855__$1 = state_14855;
var statearr_14928_15184 = state_14855__$1;
(statearr_14928_15184[(2)] = inst_14792);

(statearr_14928_15184[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14856 === (12))){
var inst_14496 = (state_14855[(12)]);
var inst_14516 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_14517 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_14518 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"need to be a dao member",inst_14517,inst_14496];
var inst_14519 = cljs.core.PersistentHashMap.fromArrays(inst_14516,inst_14518);
var inst_14520 = cljs.test.do_report.call(null,inst_14519);
var state_14855__$1 = state_14855;
var statearr_14929_15185 = state_14855__$1;
(statearr_14929_15185[(2)] = inst_14520);

(statearr_14929_15185[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14856 === (44))){
var inst_14652 = (state_14855[(16)]);
var inst_14659 = (function(){throw inst_14652})();
var state_14855__$1 = state_14855;
var statearr_14930_15186 = state_14855__$1;
(statearr_14930_15186[(2)] = inst_14659);

(statearr_14930_15186[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14856 === (76))){
var inst_14794 = (state_14855[(2)]);
var _ = (function (){var statearr_14931 = state_14855;
(statearr_14931[(4)] = cljs.core.rest.call(null,(state_14855[(4)])));

return statearr_14931;
})();
var state_14855__$1 = (function (){var statearr_14932 = state_14855;
(statearr_14932[(17)] = inst_14794);

return statearr_14932;
})();
var statearr_14933_15187 = state_14855__$1;
(statearr_14933_15187[(2)] = true);

(statearr_14933_15187[(1)] = (71));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14856 === (13))){
var inst_14496 = (state_14855[(12)]);
var inst_14522 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_14523 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_14524 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"need to be a dao member",inst_14523,inst_14496];
var inst_14525 = cljs.core.PersistentHashMap.fromArrays(inst_14522,inst_14524);
var inst_14526 = cljs.test.do_report.call(null,inst_14525);
var state_14855__$1 = state_14855;
var statearr_14934_15188 = state_14855__$1;
(statearr_14934_15188[(2)] = inst_14526);

(statearr_14934_15188[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14856 === (45))){
var inst_14652 = (state_14855[(16)]);
var state_14855__$1 = state_14855;
var statearr_14935_15189 = state_14855__$1;
(statearr_14935_15189[(2)] = inst_14652);

(statearr_14935_15189[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14856 === (77))){
var inst_14804 = (state_14855[(18)]);
var inst_14804__$1 = (state_14855[(2)]);
var inst_14805 = (inst_14804__$1 instanceof cljs.core.ExceptionInfo);
var inst_14806 = cljs.core.ex_data.call(null,inst_14804__$1);
var inst_14807 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_14806);
var inst_14808 = cljs.core._EQ_.call(null,inst_14807,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_14809 = ((inst_14805) && (inst_14808));
var state_14855__$1 = (function (){var statearr_14936 = state_14855;
(statearr_14936[(18)] = inst_14804__$1);

return statearr_14936;
})();
if(cljs.core.truth_(inst_14809)){
var statearr_14937_15190 = state_14855__$1;
(statearr_14937_15190[(1)] = (78));

} else {
var statearr_14938_15191 = state_14855__$1;
(statearr_14938_15191[(1)] = (79));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14856 === (14))){
var inst_14496 = (state_14855[(12)]);
var inst_14528 = (state_14855[(2)]);
var _ = (function (){var statearr_14939 = state_14855;
(statearr_14939[(4)] = cljs.core.rest.call(null,(state_14855[(4)])));

return statearr_14939;
})();
var state_14855__$1 = (function (){var statearr_14940 = state_14855;
(statearr_14940[(19)] = inst_14528);

return statearr_14940;
})();
var statearr_14941_15192 = state_14855__$1;
(statearr_14941_15192[(2)] = inst_14496);

(statearr_14941_15192[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14856 === (46))){
var inst_14662 = (state_14855[(2)]);
var state_14855__$1 = (function (){var statearr_14943 = state_14855;
(statearr_14943[(20)] = inst_14662);

return statearr_14943;
})();
var statearr_14944_15193 = state_14855__$1;
(statearr_14944_15193[(2)] = null);

(statearr_14944_15193[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14856 === (78))){
var inst_14804 = (state_14855[(18)]);
var inst_14811 = (function(){throw inst_14804})();
var state_14855__$1 = state_14855;
var statearr_14945_15194 = state_14855__$1;
(statearr_14945_15194[(2)] = inst_14811);

(statearr_14945_15194[(1)] = (80));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14856 === (15))){
var _ = (function (){var statearr_14946 = state_14855;
(statearr_14946[(4)] = cljs.core.rest.call(null,(state_14855[(4)])));

return statearr_14946;
})();
var state_14855__$1 = state_14855;
var ex14942 = (state_14855__$1[(2)]);
var statearr_14947_15195 = state_14855__$1;
(statearr_14947_15195[(5)] = ex14942);


if((ex14942 instanceof Error)){
var statearr_14948_15196 = state_14855__$1;
(statearr_14948_15196[(1)] = (4));

(statearr_14948_15196[(5)] = null);

} else {
throw ex14942;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14856 === (47))){
var inst_14662 = (state_14855[(20)]);
var inst_14676 = (state_14855[(21)]);
var inst_14677 = (state_14855[(22)]);
var _ = (function (){var statearr_14949 = state_14855;
(statearr_14949[(4)] = cljs.core.cons.call(null,(50),(state_14855[(4)])));

return statearr_14949;
})();
var inst_14674 = cljs.core.count.call(null,inst_14662);
var inst_14675 = (new cljs.core.List(null,(1),null,(1),null));
var inst_14676__$1 = (new cljs.core.List(null,inst_14674,inst_14675,(2),null));
var inst_14677__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_14676__$1);
var state_14855__$1 = (function (){var statearr_14950 = state_14855;
(statearr_14950[(21)] = inst_14676__$1);

(statearr_14950[(22)] = inst_14677__$1);

return statearr_14950;
})();
if(cljs.core.truth_(inst_14677__$1)){
var statearr_14951_15197 = state_14855__$1;
(statearr_14951_15197[(1)] = (51));

} else {
var statearr_14952_15198 = state_14855__$1;
(statearr_14952_15198[(1)] = (52));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14856 === (79))){
var inst_14804 = (state_14855[(18)]);
var state_14855__$1 = state_14855;
var statearr_14953_15199 = state_14855__$1;
(statearr_14953_15199[(2)] = inst_14804);

(statearr_14953_15199[(1)] = (80));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14856 === (16))){
var inst_14541 = (state_14855[(23)]);
var inst_14541__$1 = (state_14855[(2)]);
var inst_14542 = (inst_14541__$1 instanceof cljs.core.ExceptionInfo);
var inst_14543 = cljs.core.ex_data.call(null,inst_14541__$1);
var inst_14544 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_14543);
var inst_14545 = cljs.core._EQ_.call(null,inst_14544,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_14546 = ((inst_14542) && (inst_14545));
var state_14855__$1 = (function (){var statearr_14954 = state_14855;
(statearr_14954[(23)] = inst_14541__$1);

return statearr_14954;
})();
if(cljs.core.truth_(inst_14546)){
var statearr_14955_15200 = state_14855__$1;
(statearr_14955_15200[(1)] = (17));

} else {
var statearr_14956_15201 = state_14855__$1;
(statearr_14956_15201[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14856 === (48))){
var inst_14700 = (state_14855[(2)]);
var inst_14701 = [new cljs.core.Keyword(null,"from","from",(1815293044)),new cljs.core.Keyword(null,"to","to",(192099007)),new cljs.core.Keyword(null,"quantity","quantity",(-1929050694)),new cljs.core.Keyword(null,"memo","memo",(-1928616099))];
var inst_14702 = [e2e.proposals.owner_acc,e2e.proposals.prop_acc,e2e.proposals.proposal_cost,"proposal"];
var inst_14703 = cljs.core.PersistentHashMap.fromArrays(inst_14701,inst_14702);
var inst_14704 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14705 = [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),new cljs.core.Keyword(null,"permission","permission",(-511292572))];
var inst_14706 = [e2e.proposals.owner_acc,"active"];
var inst_14707 = cljs.core.PersistentHashMap.fromArrays(inst_14705,inst_14706);
var inst_14708 = [inst_14707];
var inst_14709 = (new cljs.core.PersistentVector(null,(1),(5),inst_14704,inst_14708,null));
var inst_14710 = eos_cljs.core.transact.call(null,e2e.proposals.token_acc,"transfer",inst_14703,inst_14709);
var inst_14711 = cljs.core.async.interop.p__GT_c.call(null,inst_14710);
var state_14855__$1 = (function (){var statearr_14957 = state_14855;
(statearr_14957[(24)] = inst_14700);

return statearr_14957;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14855__$1,(54),inst_14711);
} else {
if((state_val_14856 === (80))){
var inst_14814 = (state_14855[(2)]);
var state_14855__$1 = (function (){var statearr_14958 = state_14855;
(statearr_14958[(25)] = inst_14814);

return statearr_14958;
})();
var statearr_14959_15202 = state_14855__$1;
(statearr_14959_15202[(2)] = null);

(statearr_14959_15202[(1)] = (81));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14856 === (17))){
var inst_14541 = (state_14855[(23)]);
var inst_14548 = (function(){throw inst_14541})();
var state_14855__$1 = state_14855;
var statearr_14960_15203 = state_14855__$1;
(statearr_14960_15203[(2)] = inst_14548);

(statearr_14960_15203[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14856 === (49))){
var inst_14663 = (state_14855[(2)]);
var inst_14664 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_14665 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"count","count",(-514511684),null),new cljs.core.Symbol(null,"rows","rows",(-1804386089),null)),(1));
var inst_14666 = [new cljs.core.Keyword(null,"error","error",(-978969032)),null,inst_14665,inst_14663];
var inst_14667 = cljs.core.PersistentHashMap.fromArrays(inst_14664,inst_14666);
var inst_14668 = cljs.test.do_report.call(null,inst_14667);
var state_14855__$1 = state_14855;
var statearr_14961_15204 = state_14855__$1;
(statearr_14961_15204[(2)] = inst_14668);

(statearr_14961_15204[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14856 === (81))){
var inst_14814 = (state_14855[(25)]);
var inst_14828 = (state_14855[(26)]);
var inst_14829 = (state_14855[(27)]);
var _ = (function (){var statearr_14963 = state_14855;
(statearr_14963[(4)] = cljs.core.cons.call(null,(84),(state_14855[(4)])));

return statearr_14963;
})();
var inst_14826 = cljs.core.count.call(null,inst_14814);
var inst_14827 = (new cljs.core.List(null,(2),null,(1),null));
var inst_14828__$1 = (new cljs.core.List(null,inst_14826,inst_14827,(2),null));
var inst_14829__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_14828__$1);
var state_14855__$1 = (function (){var statearr_14964 = state_14855;
(statearr_14964[(26)] = inst_14828__$1);

(statearr_14964[(27)] = inst_14829__$1);

return statearr_14964;
})();
if(cljs.core.truth_(inst_14829__$1)){
var statearr_14965_15205 = state_14855__$1;
(statearr_14965_15205[(1)] = (85));

} else {
var statearr_14966_15206 = state_14855__$1;
(statearr_14966_15206[(1)] = (86));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14856 === (18))){
var inst_14541 = (state_14855[(23)]);
var state_14855__$1 = state_14855;
var statearr_14967_15207 = state_14855__$1;
(statearr_14967_15207[(2)] = inst_14541);

(statearr_14967_15207[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14856 === (50))){
var _ = (function (){var statearr_14968 = state_14855;
(statearr_14968[(4)] = cljs.core.rest.call(null,(state_14855[(4)])));

return statearr_14968;
})();
var state_14855__$1 = state_14855;
var ex14962 = (state_14855__$1[(2)]);
var statearr_14969_15208 = state_14855__$1;
(statearr_14969_15208[(5)] = ex14962);


var statearr_14970_15209 = state_14855__$1;
(statearr_14970_15209[(1)] = (49));

(statearr_14970_15209[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14856 === (82))){
var inst_14852 = (state_14855[(2)]);
var inst_14853 = done.call(null);
var state_14855__$1 = (function (){var statearr_14971 = state_14855;
(statearr_14971[(28)] = inst_14852);

return statearr_14971;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14855__$1,inst_14853);
} else {
if((state_val_14856 === (19))){
var inst_14551 = (state_14855[(2)]);
var state_14855__$1 = (function (){var statearr_14972 = state_14855;
(statearr_14972[(29)] = inst_14551);

return statearr_14972;
})();
var statearr_14973_15210 = state_14855__$1;
(statearr_14973_15210[(2)] = null);

(statearr_14973_15210[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14856 === (51))){
var inst_14676 = (state_14855[(21)]);
var inst_14679 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_14680 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"count","count",(-514511684),null),new cljs.core.Symbol(null,"rows","rows",(-1804386089),null)),(1));
var inst_14681 = cljs.core.cons.call(null,cljs.core._EQ_,inst_14676);
var inst_14682 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),null,inst_14680,inst_14681];
var inst_14683 = cljs.core.PersistentHashMap.fromArrays(inst_14679,inst_14682);
var inst_14684 = cljs.test.do_report.call(null,inst_14683);
var state_14855__$1 = state_14855;
var statearr_14974_15211 = state_14855__$1;
(statearr_14974_15211[(2)] = inst_14684);

(statearr_14974_15211[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14856 === (83))){
var inst_14815 = (state_14855[(2)]);
var inst_14816 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_14817 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"count","count",(-514511684),null),new cljs.core.Symbol(null,"rows","rows",(-1804386089),null)),(2));
var inst_14818 = [new cljs.core.Keyword(null,"error","error",(-978969032)),null,inst_14817,inst_14815];
var inst_14819 = cljs.core.PersistentHashMap.fromArrays(inst_14816,inst_14818);
var inst_14820 = cljs.test.do_report.call(null,inst_14819);
var state_14855__$1 = state_14855;
var statearr_14975_15212 = state_14855__$1;
(statearr_14975_15212[(2)] = inst_14820);

(statearr_14975_15212[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14856 === (20))){
var _ = (function (){var statearr_14977 = state_14855;
(statearr_14977[(4)] = cljs.core.cons.call(null,(23),(state_14855[(4)])));

return statearr_14977;
})();
var inst_14563 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_14564 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"need to be a dao member"];
var inst_14565 = cljs.core.PersistentHashMap.fromArrays(inst_14563,inst_14564);
var inst_14566 = cljs.test.do_report.call(null,inst_14565);
var ___$1 = (function (){var statearr_14978 = state_14855;
(statearr_14978[(4)] = cljs.core.rest.call(null,(state_14855[(4)])));

return statearr_14978;
})();
var state_14855__$1 = state_14855;
var statearr_14979_15213 = state_14855__$1;
(statearr_14979_15213[(2)] = inst_14566);

(statearr_14979_15213[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14856 === (52))){
var inst_14676 = (state_14855[(21)]);
var inst_14686 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_14687 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"count","count",(-514511684),null),new cljs.core.Symbol(null,"rows","rows",(-1804386089),null)),(1));
var inst_14688 = new cljs.core.Symbol(null,"not","not",(1044554643),null);
var inst_14689 = new cljs.core.Symbol(null,"=","=",(-1501502141),null);
var inst_14690 = cljs.core.cons.call(null,inst_14689,inst_14676);
var inst_14691 = (new cljs.core.List(null,inst_14690,null,(1),null));
var inst_14692 = (new cljs.core.List(null,inst_14688,inst_14691,(2),null));
var inst_14693 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),null,inst_14687,inst_14692];
var inst_14694 = cljs.core.PersistentHashMap.fromArrays(inst_14686,inst_14693);
var inst_14695 = cljs.test.do_report.call(null,inst_14694);
var state_14855__$1 = state_14855;
var statearr_14980_15214 = state_14855__$1;
(statearr_14980_15214[(2)] = inst_14695);

(statearr_14980_15214[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14856 === (84))){
var _ = (function (){var statearr_14981 = state_14855;
(statearr_14981[(4)] = cljs.core.rest.call(null,(state_14855[(4)])));

return statearr_14981;
})();
var state_14855__$1 = state_14855;
var ex14976 = (state_14855__$1[(2)]);
var statearr_14982_15215 = state_14855__$1;
(statearr_14982_15215[(5)] = ex14976);


var statearr_14983_15216 = state_14855__$1;
(statearr_14983_15216[(1)] = (83));

(statearr_14983_15216[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14856 === (21))){
var inst_14569 = (state_14855[(2)]);
var _ = (function (){var statearr_14984 = state_14855;
(statearr_14984[(4)] = cljs.core.rest.call(null,(state_14855[(4)])));

return statearr_14984;
})();
var state_14855__$1 = state_14855;
var statearr_14985_15217 = state_14855__$1;
(statearr_14985_15217[(2)] = inst_14569);

(statearr_14985_15217[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14856 === (53))){
var inst_14677 = (state_14855[(22)]);
var inst_14697 = (state_14855[(2)]);
var _ = (function (){var statearr_14986 = state_14855;
(statearr_14986[(4)] = cljs.core.rest.call(null,(state_14855[(4)])));

return statearr_14986;
})();
var state_14855__$1 = (function (){var statearr_14987 = state_14855;
(statearr_14987[(30)] = inst_14697);

return statearr_14987;
})();
var statearr_14988_15218 = state_14855__$1;
(statearr_14988_15218[(2)] = inst_14677);

(statearr_14988_15218[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14856 === (85))){
var inst_14828 = (state_14855[(26)]);
var inst_14831 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_14832 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"count","count",(-514511684),null),new cljs.core.Symbol(null,"rows","rows",(-1804386089),null)),(2));
var inst_14833 = cljs.core.cons.call(null,cljs.core._EQ_,inst_14828);
var inst_14834 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),null,inst_14832,inst_14833];
var inst_14835 = cljs.core.PersistentHashMap.fromArrays(inst_14831,inst_14834);
var inst_14836 = cljs.test.do_report.call(null,inst_14835);
var state_14855__$1 = state_14855;
var statearr_14989_15219 = state_14855__$1;
(statearr_14989_15219[(2)] = inst_14836);

(statearr_14989_15219[(1)] = (87));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14856 === (22))){
var inst_14552 = (state_14855[(2)]);
var inst_14553 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_14554 = null;
var inst_14555 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"need to be a dao member",inst_14554,inst_14552];
var inst_14556 = cljs.core.PersistentHashMap.fromArrays(inst_14553,inst_14555);
var inst_14557 = cljs.test.do_report.call(null,inst_14556);
var state_14855__$1 = state_14855;
var statearr_14990_15220 = state_14855__$1;
(statearr_14990_15220[(2)] = inst_14557);

(statearr_14990_15220[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14856 === (54))){
var inst_14713 = (state_14855[(31)]);
var inst_14713__$1 = (state_14855[(2)]);
var inst_14714 = (inst_14713__$1 instanceof cljs.core.ExceptionInfo);
var inst_14715 = cljs.core.ex_data.call(null,inst_14713__$1);
var inst_14716 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_14715);
var inst_14717 = cljs.core._EQ_.call(null,inst_14716,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_14718 = ((inst_14714) && (inst_14717));
var state_14855__$1 = (function (){var statearr_14992 = state_14855;
(statearr_14992[(31)] = inst_14713__$1);

return statearr_14992;
})();
if(cljs.core.truth_(inst_14718)){
var statearr_14993_15221 = state_14855__$1;
(statearr_14993_15221[(1)] = (55));

} else {
var statearr_14994_15222 = state_14855__$1;
(statearr_14994_15222[(1)] = (56));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14856 === (86))){
var inst_14828 = (state_14855[(26)]);
var inst_14838 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_14839 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"count","count",(-514511684),null),new cljs.core.Symbol(null,"rows","rows",(-1804386089),null)),(2));
var inst_14840 = new cljs.core.Symbol(null,"not","not",(1044554643),null);
var inst_14841 = new cljs.core.Symbol(null,"=","=",(-1501502141),null);
var inst_14842 = cljs.core.cons.call(null,inst_14841,inst_14828);
var inst_14843 = (new cljs.core.List(null,inst_14842,null,(1),null));
var inst_14844 = (new cljs.core.List(null,inst_14840,inst_14843,(2),null));
var inst_14845 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),null,inst_14839,inst_14844];
var inst_14846 = cljs.core.PersistentHashMap.fromArrays(inst_14838,inst_14845);
var inst_14847 = cljs.test.do_report.call(null,inst_14846);
var state_14855__$1 = state_14855;
var statearr_14995_15223 = state_14855__$1;
(statearr_14995_15223[(2)] = inst_14847);

(statearr_14995_15223[(1)] = (87));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14856 === (23))){
var _ = (function (){var statearr_14996 = state_14855;
(statearr_14996[(4)] = cljs.core.rest.call(null,(state_14855[(4)])));

return statearr_14996;
})();
var state_14855__$1 = state_14855;
var ex14991 = (state_14855__$1[(2)]);
var statearr_14997_15224 = state_14855__$1;
(statearr_14997_15224[(5)] = ex14991);


var statearr_14998_15225 = state_14855__$1;
(statearr_14998_15225[(1)] = (22));

(statearr_14998_15225[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14856 === (55))){
var inst_14713 = (state_14855[(31)]);
var inst_14720 = (function(){throw inst_14713})();
var state_14855__$1 = state_14855;
var statearr_14999_15226 = state_14855__$1;
(statearr_14999_15226[(2)] = inst_14720);

(statearr_14999_15226[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14856 === (87))){
var inst_14829 = (state_14855[(27)]);
var inst_14849 = (state_14855[(2)]);
var _ = (function (){var statearr_15000 = state_14855;
(statearr_15000[(4)] = cljs.core.rest.call(null,(state_14855[(4)])));

return statearr_15000;
})();
var state_14855__$1 = (function (){var statearr_15001 = state_14855;
(statearr_15001[(32)] = inst_14849);

return statearr_15001;
})();
var statearr_15002_15227 = state_14855__$1;
(statearr_15002_15227[(2)] = inst_14829);

(statearr_15002_15227[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14856 === (24))){
var _ = (function (){var statearr_15003 = state_14855;
(statearr_15003[(4)] = cljs.core.cons.call(null,(31),(state_14855[(4)])));

return statearr_15003;
})();
var inst_14598 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14599 = [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),new cljs.core.Keyword(null,"permission","permission",(-511292572))];
var inst_14600 = [e2e.proposals.owner_acc,"active"];
var inst_14601 = cljs.core.PersistentHashMap.fromArrays(inst_14599,inst_14600);
var inst_14602 = [inst_14601];
var inst_14603 = (new cljs.core.PersistentVector(null,(1),(5),inst_14598,inst_14602,null));
var inst_14604 = eos_cljs.core.transact.call(null,e2e.proposals.prop_acc,"createprop",e2e.proposals.base_prop,inst_14603);
var inst_14605 = cljs.core.async.interop.p__GT_c.call(null,inst_14604);
var state_14855__$1 = state_14855;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14855__$1,(32),inst_14605);
} else {
if((state_val_14856 === (56))){
var inst_14713 = (state_14855[(31)]);
var state_14855__$1 = state_14855;
var statearr_15004_15228 = state_14855__$1;
(statearr_15004_15228[(2)] = inst_14713);

(statearr_15004_15228[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14856 === (25))){
var inst_14648 = (state_14855[(2)]);
var inst_14649 = eos_cljs.core.get_table_rows.call(null,e2e.proposals.prop_acc,e2e.proposals.prop_acc,"proposal");
var inst_14650 = cljs.core.async.interop.p__GT_c.call(null,inst_14649);
var state_14855__$1 = (function (){var statearr_15005 = state_14855;
(statearr_15005[(33)] = inst_14648);

return statearr_15005;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14855__$1,(43),inst_14650);
} else {
if((state_val_14856 === (57))){
var inst_14723 = (state_14855[(2)]);
var state_14855__$1 = (function (){var statearr_15006 = state_14855;
(statearr_15006[(34)] = inst_14723);

return statearr_15006;
})();
var statearr_15007_15229 = state_14855__$1;
(statearr_15007_15229[(2)] = null);

(statearr_15007_15229[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14856 === (26))){
var inst_14573 = (state_14855[(2)]);
var inst_14574 = cljs.core.prn.call(null,"test failed with ",inst_14573);
var state_14855__$1 = (function (){var statearr_15008 = state_14855;
(statearr_15008[(35)] = inst_14574);

return statearr_15008;
})();
var statearr_15009_15230 = state_14855__$1;
(statearr_15009_15230[(2)] = null);

(statearr_15009_15230[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14856 === (58))){
var _ = (function (){var statearr_15010 = state_14855;
(statearr_15010[(4)] = cljs.core.cons.call(null,(65),(state_14855[(4)])));

return statearr_15010;
})();
var inst_14749 = cljs.core.assoc.call(null,e2e.proposals.base_prop,new cljs.core.Keyword(null,"content_hash","content_hash",(121497903)),"bb");
var inst_14750 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14751 = [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),new cljs.core.Keyword(null,"permission","permission",(-511292572))];
var inst_14752 = [e2e.proposals.owner_acc,"active"];
var inst_14753 = cljs.core.PersistentHashMap.fromArrays(inst_14751,inst_14752);
var inst_14754 = [inst_14753];
var inst_14755 = (new cljs.core.PersistentVector(null,(1),(5),inst_14750,inst_14754,null));
var inst_14756 = eos_cljs.core.transact.call(null,e2e.proposals.prop_acc,"createprop",inst_14749,inst_14755);
var inst_14757 = cljs.core.async.interop.p__GT_c.call(null,inst_14756);
var state_14855__$1 = state_14855;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14855__$1,(66),inst_14757);
} else {
if((state_val_14856 === (27))){
var _ = (function (){var statearr_15011 = state_14855;
(statearr_15011[(4)] = cljs.core.cons.call(null,(30),(state_14855[(4)])));

return statearr_15011;
})();
var inst_14586 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_14587 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can make a proposal"];
var inst_14588 = cljs.core.PersistentHashMap.fromArrays(inst_14586,inst_14587);
var inst_14589 = cljs.test.do_report.call(null,inst_14588);
var ___$1 = (function (){var statearr_15012 = state_14855;
(statearr_15012[(4)] = cljs.core.rest.call(null,(state_14855[(4)])));

return statearr_15012;
})();
var state_14855__$1 = state_14855;
var statearr_15013_15231 = state_14855__$1;
(statearr_15013_15231[(2)] = inst_14589);

(statearr_15013_15231[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14856 === (59))){
var inst_14800 = (state_14855[(2)]);
var inst_14801 = eos_cljs.core.get_table_rows.call(null,e2e.proposals.prop_acc,e2e.proposals.prop_acc,"proposal");
var inst_14802 = cljs.core.async.interop.p__GT_c.call(null,inst_14801);
var state_14855__$1 = (function (){var statearr_15014 = state_14855;
(statearr_15014[(36)] = inst_14800);

return statearr_15014;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14855__$1,(77),inst_14802);
} else {
if((state_val_14856 === (28))){
var inst_14592 = (state_14855[(2)]);
var state_14855__$1 = state_14855;
var statearr_15015_15232 = state_14855__$1;
(statearr_15015_15232[(2)] = inst_14592);

(statearr_15015_15232[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14856 === (60))){
var inst_14724 = (state_14855[(2)]);
var inst_14725 = cljs.core.prn.call(null,"test failed with ",inst_14724);
var state_14855__$1 = (function (){var statearr_15016 = state_14855;
(statearr_15016[(37)] = inst_14725);

return statearr_15016;
})();
var statearr_15017_15233 = state_14855__$1;
(statearr_15017_15233[(2)] = null);

(statearr_15017_15233[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14856 === (29))){
var inst_14575 = (state_14855[(2)]);
var inst_14576 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_14577 = null;
var inst_14578 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can make a proposal",inst_14577,inst_14575];
var inst_14579 = cljs.core.PersistentHashMap.fromArrays(inst_14576,inst_14578);
var inst_14580 = cljs.test.do_report.call(null,inst_14579);
var state_14855__$1 = state_14855;
var statearr_15019_15234 = state_14855__$1;
(statearr_15019_15234[(2)] = inst_14580);

(statearr_15019_15234[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14856 === (61))){
var _ = (function (){var statearr_15020 = state_14855;
(statearr_15020[(4)] = cljs.core.cons.call(null,(64),(state_14855[(4)])));

return statearr_15020;
})();
var inst_14737 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_14738 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can make a second proposal"];
var inst_14739 = cljs.core.PersistentHashMap.fromArrays(inst_14737,inst_14738);
var inst_14740 = cljs.test.do_report.call(null,inst_14739);
var ___$1 = (function (){var statearr_15021 = state_14855;
(statearr_15021[(4)] = cljs.core.rest.call(null,(state_14855[(4)])));

return statearr_15021;
})();
var state_14855__$1 = state_14855;
var statearr_15022_15235 = state_14855__$1;
(statearr_15022_15235[(2)] = inst_14740);

(statearr_15022_15235[(1)] = (62));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14856 === (30))){
var _ = (function (){var statearr_15024 = state_14855;
(statearr_15024[(4)] = cljs.core.rest.call(null,(state_14855[(4)])));

return statearr_15024;
})();
var state_14855__$1 = state_14855;
var ex15018 = (state_14855__$1[(2)]);
var statearr_15025_15236 = state_14855__$1;
(statearr_15025_15236[(5)] = ex15018);


var statearr_15026_15237 = state_14855__$1;
(statearr_15026_15237[(1)] = (29));

(statearr_15026_15237[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14856 === (62))){
var inst_14743 = (state_14855[(2)]);
var state_14855__$1 = state_14855;
var statearr_15027_15238 = state_14855__$1;
(statearr_15027_15238[(2)] = inst_14743);

(statearr_15027_15238[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14856 === (31))){
var _ = (function (){var statearr_15028 = state_14855;
(statearr_15028[(4)] = cljs.core.rest.call(null,(state_14855[(4)])));

return statearr_15028;
})();
var state_14855__$1 = state_14855;
var ex15023 = (state_14855__$1[(2)]);
var statearr_15029_15239 = state_14855__$1;
(statearr_15029_15239[(5)] = ex15023);


if((ex15023 instanceof Error)){
var statearr_15030_15240 = state_14855__$1;
(statearr_15030_15240[(1)] = (26));

(statearr_15030_15240[(5)] = null);

} else {
throw ex15023;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_14856 === (63))){
var inst_14726 = (state_14855[(2)]);
var inst_14727 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_14728 = null;
var inst_14729 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can make a second proposal",inst_14728,inst_14726];
var inst_14730 = cljs.core.PersistentHashMap.fromArrays(inst_14727,inst_14729);
var inst_14731 = cljs.test.do_report.call(null,inst_14730);
var state_14855__$1 = state_14855;
var statearr_15031_15241 = state_14855__$1;
(statearr_15031_15241[(2)] = inst_14731);

(statearr_15031_15241[(1)] = (62));


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
}
}
}
}
}
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
var e2e$proposals$state_machine__15__auto__ = null;
var e2e$proposals$state_machine__15__auto____0 = (function (){
var statearr_15032 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15032[(0)] = e2e$proposals$state_machine__15__auto__);

(statearr_15032[(1)] = (1));

return statearr_15032;
});
var e2e$proposals$state_machine__15__auto____1 = (function (state_14855){
while(true){
var ret_value__16__auto__ = (function (){try{while(true){
var result__17__auto__ = switch__14__auto__.call(null,state_14855);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__17__auto__;
}
break;
}
}catch (e15033){var ex__18__auto__ = e15033;
var statearr_15034_15242 = state_14855;
(statearr_15034_15242[(2)] = ex__18__auto__);


if(cljs.core.seq.call(null,(state_14855[(4)]))){
var statearr_15035_15243 = state_14855;
(statearr_15035_15243[(1)] = cljs.core.first.call(null,(state_14855[(4)])));

} else {
throw ex__18__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__15244 = state_14855;
state_14855 = G__15244;
continue;
} else {
return ret_value__16__auto__;
}
break;
}
});
e2e$proposals$state_machine__15__auto__ = function(state_14855){
switch(arguments.length){
case 0:
return e2e$proposals$state_machine__15__auto____0.call(this);
case 1:
return e2e$proposals$state_machine__15__auto____1.call(this,state_14855);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
e2e$proposals$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$0 = e2e$proposals$state_machine__15__auto____0;
e2e$proposals$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$1 = e2e$proposals$state_machine__15__auto____1;
return e2e$proposals$state_machine__15__auto__;
})()
;})(switch__14__auto__,c__19__auto__,___192__auto__))
})();
var state__21__auto__ = (function (){var statearr_15036 = f__20__auto__.call(null);
(statearr_15036[(6)] = c__19__auto__);

return statearr_15036;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21__auto__);
});})(c__19__auto__,___192__auto__))
);

return c__19__auto__;
});

e2e.proposals.t_e2e$proposals13945.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta13946","meta13946",(-1633591287),null)], null);
});

e2e.proposals.t_e2e$proposals13945.cljs$lang$type = true;

e2e.proposals.t_e2e$proposals13945.cljs$lang$ctorStr = "e2e.proposals/t_e2e$proposals13945";

e2e.proposals.t_e2e$proposals13945.cljs$lang$ctorPrWriter = (function (this__9776__auto__,writer__9777__auto__,opt__9778__auto__){
return cljs.core._write.call(null,writer__9777__auto__,"e2e.proposals/t_e2e$proposals13945");
});

/**
 * Positional factory function for e2e.proposals/t_e2e$proposals13945.
 */
e2e.proposals.__GT_t_e2e$proposals13945 = (function e2e$proposals$__GT_t_e2e$proposals13945(meta13946){
return (new e2e.proposals.t_e2e$proposals13945(meta13946));
});

}

return (new e2e.proposals.t_e2e$proposals13945(null));
});

e2e.proposals.new_proposal.cljs$lang$var = new cljs.core.Var(function(){return e2e.proposals.new_proposal;},new cljs.core.Symbol("e2e.proposals","new-proposal","e2e.proposals/new-proposal",(-713004459),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"e2e.proposals","e2e.proposals",(1479174227),null),new cljs.core.Symbol(null,"new-proposal","new-proposal",(-1057710210),null),"e2e/proposals.cljs",(22),(1),(99),(99),cljs.core.List.EMPTY,null,(cljs.core.truth_(e2e.proposals.new_proposal)?e2e.proposals.new_proposal.cljs$lang$test:null)]));
e2e.proposals.update_proposal = (function e2e$proposals$update_proposal(){
return cljs.test.test_var.call(null,e2e.proposals.update_proposal.cljs$lang$var);
});
e2e.proposals.update_proposal.cljs$lang$test = (function (){
if((typeof e2e !== 'undefined') && (typeof e2e.proposals !== 'undefined') && (typeof e2e.proposals.t_e2e$proposals15245 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IFn}
*/
e2e.proposals.t_e2e$proposals15245 = (function (meta15246){
this.meta15246 = meta15246;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
e2e.proposals.t_e2e$proposals15245.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15247,meta15246__$1){
var self__ = this;
var _15247__$1 = this;
return (new e2e.proposals.t_e2e$proposals15245(meta15246__$1));
});

e2e.proposals.t_e2e$proposals15245.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15247){
var self__ = this;
var _15247__$1 = this;
return self__.meta15246;
});

e2e.proposals.t_e2e$proposals15245.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL;

e2e.proposals.t_e2e$proposals15245.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___192__auto__ = self____$1;
var c__19__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19__auto__,___192__auto__,self____$1){
return (function (){
var f__20__auto__ = (function (){var switch__14__auto__ = ((function (c__19__auto__,___192__auto__,self____$1){
return (function (state_15405){
var state_val_15406 = (state_15405[(1)]);
if((state_val_15406 === (32))){
var inst_15371 = (state_15405[(2)]);
var state_15405__$1 = (function (){var statearr_15407 = state_15405;
(statearr_15407[(7)] = inst_15371);

return statearr_15407;
})();
var statearr_15408_15735 = state_15405__$1;
(statearr_15408_15735[(2)] = null);

(statearr_15408_15735[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_15406 === (1))){
var state_15405__$1 = state_15405;
var statearr_15409_15736 = state_15405__$1;
(statearr_15409_15736[(2)] = null);

(statearr_15409_15736[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_15406 === (33))){
var _ = (function (){var statearr_15410 = state_15405;
(statearr_15410[(4)] = cljs.core.cons.call(null,(36),(state_15405[(4)])));

return statearr_15410;
})();
var state_15405__$1 = state_15405;
var statearr_15411_15737 = state_15405__$1;
(statearr_15411_15737[(1)] = (37));



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_15406 === (2))){
var _ = (function (){var statearr_15413 = state_15405;
(statearr_15413[(4)] = cljs.core.cons.call(null,(9),(state_15405[(4)])));

return statearr_15413;
})();
var inst_15274 = cljs.core.assoc.call(null,e2e.proposals.base_prop,new cljs.core.Keyword(null,"id","id",(-1388402092)),(0),new cljs.core.Keyword(null,"cycle","cycle",(710365284)),(2));
var inst_15275 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15276 = [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),new cljs.core.Keyword(null,"permission","permission",(-511292572))];
var inst_15277 = [e2e.proposals.owner_acc,"active"];
var inst_15278 = cljs.core.PersistentHashMap.fromArrays(inst_15276,inst_15277);
var inst_15279 = [inst_15278];
var inst_15280 = (new cljs.core.PersistentVector(null,(1),(5),inst_15275,inst_15279,null));
var inst_15281 = eos_cljs.core.transact.call(null,e2e.proposals.prop_acc,"updateprop",inst_15274,inst_15280);
var inst_15282 = cljs.core.async.interop.p__GT_c.call(null,inst_15281);
var state_15405__$1 = state_15405;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15405__$1,(10),inst_15282);
} else {
if((state_val_15406 === (34))){
var inst_15399 = (state_15405[(2)]);
var _ = (function (){var statearr_15414 = state_15405;
(statearr_15414[(4)] = cljs.core.rest.call(null,(state_15405[(4)])));

return statearr_15414;
})();
var state_15405__$1 = state_15405;
var statearr_15415_15738 = state_15405__$1;
(statearr_15415_15738[(2)] = inst_15399);

(statearr_15415_15738[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_15406 === (3))){
var inst_15325 = (state_15405[(2)]);
var state_15405__$1 = (function (){var statearr_15416 = state_15405;
(statearr_15416[(8)] = inst_15325);

return statearr_15416;
})();
var statearr_15417_15739 = state_15405__$1;
(statearr_15417_15739[(2)] = null);

(statearr_15417_15739[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_15406 === (35))){
var inst_15372 = (state_15405[(2)]);
var inst_15373 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_15374 = true;
var inst_15375 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can update proposal",inst_15374,inst_15372];
var inst_15376 = cljs.core.PersistentHashMap.fromArrays(inst_15373,inst_15375);
var inst_15377 = cljs.test.do_report.call(null,inst_15376);
var state_15405__$1 = state_15405;
var statearr_15419_15740 = state_15405__$1;
(statearr_15419_15740[(2)] = inst_15377);

(statearr_15419_15740[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_15406 === (4))){
var inst_15249 = (state_15405[(2)]);
var inst_15250 = cljs.core.prn.call(null,"test failed with ",inst_15249);
var state_15405__$1 = (function (){var statearr_15420 = state_15405;
(statearr_15420[(9)] = inst_15250);

return statearr_15420;
})();
var statearr_15421_15741 = state_15405__$1;
(statearr_15421_15741[(2)] = null);

(statearr_15421_15741[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_15406 === (36))){
var _ = (function (){var statearr_15422 = state_15405;
(statearr_15422[(4)] = cljs.core.rest.call(null,(state_15405[(4)])));

return statearr_15422;
})();
var state_15405__$1 = state_15405;
var ex15418 = (state_15405__$1[(2)]);
var statearr_15423_15742 = state_15405__$1;
(statearr_15423_15742[(5)] = ex15418);


var statearr_15424_15743 = state_15405__$1;
(statearr_15424_15743[(1)] = (35));

(statearr_15424_15743[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_15406 === (5))){
var _ = (function (){var statearr_15425 = state_15405;
(statearr_15425[(4)] = cljs.core.cons.call(null,(8),(state_15405[(4)])));

return statearr_15425;
})();
var inst_15262 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_15263 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can update proposal"];
var inst_15264 = cljs.core.PersistentHashMap.fromArrays(inst_15262,inst_15263);
var inst_15265 = cljs.test.do_report.call(null,inst_15264);
var ___$1 = (function (){var statearr_15426 = state_15405;
(statearr_15426[(4)] = cljs.core.rest.call(null,(state_15405[(4)])));

return statearr_15426;
})();
var state_15405__$1 = state_15405;
var statearr_15427_15744 = state_15405__$1;
(statearr_15427_15744[(2)] = inst_15265);

(statearr_15427_15744[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_15406 === (37))){
var inst_15384 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_15385 = true;
var inst_15386 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"can update proposal",inst_15385,true];
var inst_15387 = cljs.core.PersistentHashMap.fromArrays(inst_15384,inst_15386);
var inst_15388 = cljs.test.do_report.call(null,inst_15387);
var state_15405__$1 = state_15405;
var statearr_15428_15745 = state_15405__$1;
(statearr_15428_15745[(2)] = inst_15388);

(statearr_15428_15745[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_15406 === (6))){
var inst_15268 = (state_15405[(2)]);
var state_15405__$1 = state_15405;
var statearr_15429_15746 = state_15405__$1;
(statearr_15429_15746[(2)] = inst_15268);

(statearr_15429_15746[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_15406 === (38))){
var inst_15390 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_15391 = true;
var inst_15392 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can update proposal",inst_15391,true];
var inst_15393 = cljs.core.PersistentHashMap.fromArrays(inst_15390,inst_15392);
var inst_15394 = cljs.test.do_report.call(null,inst_15393);
var state_15405__$1 = state_15405;
var statearr_15430_15747 = state_15405__$1;
(statearr_15430_15747[(2)] = inst_15394);

(statearr_15430_15747[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_15406 === (7))){
var inst_15251 = (state_15405[(2)]);
var inst_15252 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_15253 = null;
var inst_15254 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can update proposal",inst_15253,inst_15251];
var inst_15255 = cljs.core.PersistentHashMap.fromArrays(inst_15252,inst_15254);
var inst_15256 = cljs.test.do_report.call(null,inst_15255);
var state_15405__$1 = state_15405;
var statearr_15432_15748 = state_15405__$1;
(statearr_15432_15748[(2)] = inst_15256);

(statearr_15432_15748[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_15406 === (39))){
var inst_15396 = (state_15405[(2)]);
var _ = (function (){var statearr_15434 = state_15405;
(statearr_15434[(4)] = cljs.core.rest.call(null,(state_15405[(4)])));

return statearr_15434;
})();
var state_15405__$1 = (function (){var statearr_15435 = state_15405;
(statearr_15435[(10)] = inst_15396);

return statearr_15435;
})();
var statearr_15436_15749 = state_15405__$1;
(statearr_15436_15749[(2)] = true);

(statearr_15436_15749[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_15406 === (8))){
var _ = (function (){var statearr_15437 = state_15405;
(statearr_15437[(4)] = cljs.core.rest.call(null,(state_15405[(4)])));

return statearr_15437;
})();
var state_15405__$1 = state_15405;
var ex15431 = (state_15405__$1[(2)]);
var statearr_15438_15750 = state_15405__$1;
(statearr_15438_15750[(5)] = ex15431);


var statearr_15439_15751 = state_15405__$1;
(statearr_15439_15751[(1)] = (7));

(statearr_15439_15751[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_15406 === (9))){
var _ = (function (){var statearr_15440 = state_15405;
(statearr_15440[(4)] = cljs.core.rest.call(null,(state_15405[(4)])));

return statearr_15440;
})();
var state_15405__$1 = state_15405;
var ex15433 = (state_15405__$1[(2)]);
var statearr_15441_15752 = state_15405__$1;
(statearr_15441_15752[(5)] = ex15433);


if((ex15433 instanceof Error)){
var statearr_15442_15753 = state_15405__$1;
(statearr_15442_15753[(1)] = (4));

(statearr_15442_15753[(5)] = null);

} else {
throw ex15433;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_15406 === (10))){
var inst_15284 = (state_15405[(11)]);
var inst_15284__$1 = (state_15405[(2)]);
var inst_15285 = (inst_15284__$1 instanceof cljs.core.ExceptionInfo);
var inst_15286 = cljs.core.ex_data.call(null,inst_15284__$1);
var inst_15287 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_15286);
var inst_15288 = cljs.core._EQ_.call(null,inst_15287,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_15289 = ((inst_15285) && (inst_15288));
var state_15405__$1 = (function (){var statearr_15443 = state_15405;
(statearr_15443[(11)] = inst_15284__$1);

return statearr_15443;
})();
if(cljs.core.truth_(inst_15289)){
var statearr_15444_15754 = state_15405__$1;
(statearr_15444_15754[(1)] = (11));

} else {
var statearr_15445_15755 = state_15405__$1;
(statearr_15445_15755[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_15406 === (11))){
var inst_15284 = (state_15405[(11)]);
var inst_15291 = (function(){throw inst_15284})();
var state_15405__$1 = state_15405;
var statearr_15446_15756 = state_15405__$1;
(statearr_15446_15756[(2)] = inst_15291);

(statearr_15446_15756[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_15406 === (12))){
var inst_15284 = (state_15405[(11)]);
var state_15405__$1 = state_15405;
var statearr_15447_15757 = state_15405__$1;
(statearr_15447_15757[(2)] = inst_15284);

(statearr_15447_15757[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_15406 === (13))){
var inst_15294 = (state_15405[(2)]);
var state_15405__$1 = (function (){var statearr_15448 = state_15405;
(statearr_15448[(12)] = inst_15294);

return statearr_15448;
})();
var statearr_15449_15758 = state_15405__$1;
(statearr_15449_15758[(2)] = null);

(statearr_15449_15758[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_15406 === (14))){
var _ = (function (){var statearr_15450 = state_15405;
(statearr_15450[(4)] = cljs.core.cons.call(null,(17),(state_15405[(4)])));

return statearr_15450;
})();
var state_15405__$1 = state_15405;
var statearr_15451_15759 = state_15405__$1;
(statearr_15451_15759[(1)] = (18));



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_15406 === (15))){
var inst_15322 = (state_15405[(2)]);
var _ = (function (){var statearr_15454 = state_15405;
(statearr_15454[(4)] = cljs.core.rest.call(null,(state_15405[(4)])));

return statearr_15454;
})();
var state_15405__$1 = state_15405;
var statearr_15455_15760 = state_15405__$1;
(statearr_15455_15760[(2)] = inst_15322);

(statearr_15455_15760[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_15406 === (16))){
var inst_15295 = (state_15405[(2)]);
var inst_15296 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_15297 = true;
var inst_15298 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can update proposal",inst_15297,inst_15295];
var inst_15299 = cljs.core.PersistentHashMap.fromArrays(inst_15296,inst_15298);
var inst_15300 = cljs.test.do_report.call(null,inst_15299);
var state_15405__$1 = state_15405;
var statearr_15456_15761 = state_15405__$1;
(statearr_15456_15761[(2)] = inst_15300);

(statearr_15456_15761[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_15406 === (17))){
var _ = (function (){var statearr_15457 = state_15405;
(statearr_15457[(4)] = cljs.core.rest.call(null,(state_15405[(4)])));

return statearr_15457;
})();
var state_15405__$1 = state_15405;
var ex15453 = (state_15405__$1[(2)]);
var statearr_15458_15762 = state_15405__$1;
(statearr_15458_15762[(5)] = ex15453);


var statearr_15459_15763 = state_15405__$1;
(statearr_15459_15763[(1)] = (16));

(statearr_15459_15763[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_15406 === (18))){
var inst_15307 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_15308 = true;
var inst_15309 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"can update proposal",inst_15308,true];
var inst_15310 = cljs.core.PersistentHashMap.fromArrays(inst_15307,inst_15309);
var inst_15311 = cljs.test.do_report.call(null,inst_15310);
var state_15405__$1 = state_15405;
var statearr_15460_15764 = state_15405__$1;
(statearr_15460_15764[(2)] = inst_15311);

(statearr_15460_15764[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_15406 === (19))){
var inst_15313 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_15314 = true;
var inst_15315 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can update proposal",inst_15314,true];
var inst_15316 = cljs.core.PersistentHashMap.fromArrays(inst_15313,inst_15315);
var inst_15317 = cljs.test.do_report.call(null,inst_15316);
var state_15405__$1 = state_15405;
var statearr_15461_15765 = state_15405__$1;
(statearr_15461_15765[(2)] = inst_15317);

(statearr_15461_15765[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_15406 === (20))){
var inst_15319 = (state_15405[(2)]);
var _ = (function (){var statearr_15462 = state_15405;
(statearr_15462[(4)] = cljs.core.rest.call(null,(state_15405[(4)])));

return statearr_15462;
})();
var state_15405__$1 = (function (){var statearr_15463 = state_15405;
(statearr_15463[(13)] = inst_15319);

return statearr_15463;
})();
var statearr_15464_15766 = state_15405__$1;
(statearr_15464_15766[(2)] = true);

(statearr_15464_15766[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_15406 === (21))){
var _ = (function (){var statearr_15465 = state_15405;
(statearr_15465[(4)] = cljs.core.cons.call(null,(28),(state_15405[(4)])));

return statearr_15465;
})();
var inst_15351 = cljs.core.assoc.call(null,e2e.proposals.base_prop,new cljs.core.Keyword(null,"id","id",(-1388402092)),(1),new cljs.core.Keyword(null,"cycle","cycle",(710365284)),(2));
var inst_15352 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15353 = [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),new cljs.core.Keyword(null,"permission","permission",(-511292572))];
var inst_15354 = [e2e.proposals.owner_acc,"active"];
var inst_15355 = cljs.core.PersistentHashMap.fromArrays(inst_15353,inst_15354);
var inst_15356 = [inst_15355];
var inst_15357 = (new cljs.core.PersistentVector(null,(1),(5),inst_15352,inst_15356,null));
var inst_15358 = eos_cljs.core.transact.call(null,e2e.proposals.prop_acc,"updateprop",inst_15351,inst_15357);
var inst_15359 = cljs.core.async.interop.p__GT_c.call(null,inst_15358);
var state_15405__$1 = state_15405;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15405__$1,(29),inst_15359);
} else {
if((state_val_15406 === (22))){
var inst_15402 = (state_15405[(2)]);
var inst_15403 = done.call(null);
var state_15405__$1 = (function (){var statearr_15466 = state_15405;
(statearr_15466[(14)] = inst_15402);

return statearr_15466;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15405__$1,inst_15403);
} else {
if((state_val_15406 === (23))){
var inst_15326 = (state_15405[(2)]);
var inst_15327 = cljs.core.prn.call(null,"test failed with ",inst_15326);
var state_15405__$1 = (function (){var statearr_15467 = state_15405;
(statearr_15467[(15)] = inst_15327);

return statearr_15467;
})();
var statearr_15468_15767 = state_15405__$1;
(statearr_15468_15767[(2)] = null);

(statearr_15468_15767[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_15406 === (24))){
var _ = (function (){var statearr_15469 = state_15405;
(statearr_15469[(4)] = cljs.core.cons.call(null,(27),(state_15405[(4)])));

return statearr_15469;
})();
var inst_15339 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_15340 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can update proposal"];
var inst_15341 = cljs.core.PersistentHashMap.fromArrays(inst_15339,inst_15340);
var inst_15342 = cljs.test.do_report.call(null,inst_15341);
var ___$1 = (function (){var statearr_15470 = state_15405;
(statearr_15470[(4)] = cljs.core.rest.call(null,(state_15405[(4)])));

return statearr_15470;
})();
var state_15405__$1 = state_15405;
var statearr_15471_15768 = state_15405__$1;
(statearr_15471_15768[(2)] = inst_15342);

(statearr_15471_15768[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_15406 === (25))){
var inst_15345 = (state_15405[(2)]);
var state_15405__$1 = state_15405;
var statearr_15473_15769 = state_15405__$1;
(statearr_15473_15769[(2)] = inst_15345);

(statearr_15473_15769[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_15406 === (26))){
var inst_15328 = (state_15405[(2)]);
var inst_15329 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_15330 = null;
var inst_15331 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can update proposal",inst_15330,inst_15328];
var inst_15332 = cljs.core.PersistentHashMap.fromArrays(inst_15329,inst_15331);
var inst_15333 = cljs.test.do_report.call(null,inst_15332);
var state_15405__$1 = state_15405;
var statearr_15475_15770 = state_15405__$1;
(statearr_15475_15770[(2)] = inst_15333);

(statearr_15475_15770[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_15406 === (27))){
var _ = (function (){var statearr_15476 = state_15405;
(statearr_15476[(4)] = cljs.core.rest.call(null,(state_15405[(4)])));

return statearr_15476;
})();
var state_15405__$1 = state_15405;
var ex15472 = (state_15405__$1[(2)]);
var statearr_15477_15771 = state_15405__$1;
(statearr_15477_15771[(5)] = ex15472);


var statearr_15478_15772 = state_15405__$1;
(statearr_15478_15772[(1)] = (26));

(statearr_15478_15772[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_15406 === (28))){
var _ = (function (){var statearr_15479 = state_15405;
(statearr_15479[(4)] = cljs.core.rest.call(null,(state_15405[(4)])));

return statearr_15479;
})();
var state_15405__$1 = state_15405;
var ex15474 = (state_15405__$1[(2)]);
var statearr_15480_15773 = state_15405__$1;
(statearr_15480_15773[(5)] = ex15474);


if((ex15474 instanceof Error)){
var statearr_15481_15774 = state_15405__$1;
(statearr_15481_15774[(1)] = (23));

(statearr_15481_15774[(5)] = null);

} else {
throw ex15474;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_15406 === (29))){
var inst_15361 = (state_15405[(16)]);
var inst_15361__$1 = (state_15405[(2)]);
var inst_15362 = (inst_15361__$1 instanceof cljs.core.ExceptionInfo);
var inst_15363 = cljs.core.ex_data.call(null,inst_15361__$1);
var inst_15364 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_15363);
var inst_15365 = cljs.core._EQ_.call(null,inst_15364,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_15366 = ((inst_15362) && (inst_15365));
var state_15405__$1 = (function (){var statearr_15482 = state_15405;
(statearr_15482[(16)] = inst_15361__$1);

return statearr_15482;
})();
if(cljs.core.truth_(inst_15366)){
var statearr_15483_15775 = state_15405__$1;
(statearr_15483_15775[(1)] = (30));

} else {
var statearr_15484_15776 = state_15405__$1;
(statearr_15484_15776[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_15406 === (30))){
var inst_15361 = (state_15405[(16)]);
var inst_15368 = (function(){throw inst_15361})();
var state_15405__$1 = state_15405;
var statearr_15485_15777 = state_15405__$1;
(statearr_15485_15777[(2)] = inst_15368);

(statearr_15485_15777[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_15406 === (31))){
var inst_15361 = (state_15405[(16)]);
var state_15405__$1 = state_15405;
var statearr_15486_15778 = state_15405__$1;
(statearr_15486_15778[(2)] = inst_15361);

(statearr_15486_15778[(1)] = (32));


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
});})(c__19__auto__,___192__auto__,self____$1))
;
return ((function (switch__14__auto__,c__19__auto__,___192__auto__,self____$1){
return (function() {
var e2e$proposals$state_machine__15__auto__ = null;
var e2e$proposals$state_machine__15__auto____0 = (function (){
var statearr_15487 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15487[(0)] = e2e$proposals$state_machine__15__auto__);

(statearr_15487[(1)] = (1));

return statearr_15487;
});
var e2e$proposals$state_machine__15__auto____1 = (function (state_15405){
while(true){
var ret_value__16__auto__ = (function (){try{while(true){
var result__17__auto__ = switch__14__auto__.call(null,state_15405);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__17__auto__;
}
break;
}
}catch (e15488){var ex__18__auto__ = e15488;
var statearr_15489_15779 = state_15405;
(statearr_15489_15779[(2)] = ex__18__auto__);


if(cljs.core.seq.call(null,(state_15405[(4)]))){
var statearr_15490_15780 = state_15405;
(statearr_15490_15780[(1)] = cljs.core.first.call(null,(state_15405[(4)])));

} else {
throw ex__18__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__15781 = state_15405;
state_15405 = G__15781;
continue;
} else {
return ret_value__16__auto__;
}
break;
}
});
e2e$proposals$state_machine__15__auto__ = function(state_15405){
switch(arguments.length){
case 0:
return e2e$proposals$state_machine__15__auto____0.call(this);
case 1:
return e2e$proposals$state_machine__15__auto____1.call(this,state_15405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
e2e$proposals$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$0 = e2e$proposals$state_machine__15__auto____0;
e2e$proposals$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$1 = e2e$proposals$state_machine__15__auto____1;
return e2e$proposals$state_machine__15__auto__;
})()
;})(switch__14__auto__,c__19__auto__,___192__auto__,self____$1))
})();
var state__21__auto__ = (function (){var statearr_15491 = f__20__auto__.call(null);
(statearr_15491[(6)] = c__19__auto__);

return statearr_15491;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21__auto__);
});})(c__19__auto__,___192__auto__,self____$1))
);

return c__19__auto__;
});

e2e.proposals.t_e2e$proposals15245.prototype.apply = (function (self__,args15248){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args15248)));
});

e2e.proposals.t_e2e$proposals15245.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___192__auto__ = this;
var c__19__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19__auto__,___192__auto__){
return (function (){
var f__20__auto__ = (function (){var switch__14__auto__ = ((function (c__19__auto__,___192__auto__){
return (function (state_15648){
var state_val_15649 = (state_15648[(1)]);
if((state_val_15649 === (32))){
var inst_15614 = (state_15648[(2)]);
var state_15648__$1 = (function (){var statearr_15650 = state_15648;
(statearr_15650[(7)] = inst_15614);

return statearr_15650;
})();
var statearr_15651_15782 = state_15648__$1;
(statearr_15651_15782[(2)] = null);

(statearr_15651_15782[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_15649 === (1))){
var state_15648__$1 = state_15648;
var statearr_15652_15783 = state_15648__$1;
(statearr_15652_15783[(2)] = null);

(statearr_15652_15783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_15649 === (33))){
var _ = (function (){var statearr_15653 = state_15648;
(statearr_15653[(4)] = cljs.core.cons.call(null,(36),(state_15648[(4)])));

return statearr_15653;
})();
var state_15648__$1 = state_15648;
var statearr_15654_15784 = state_15648__$1;
(statearr_15654_15784[(1)] = (37));



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_15649 === (2))){
var _ = (function (){var statearr_15656 = state_15648;
(statearr_15656[(4)] = cljs.core.cons.call(null,(9),(state_15648[(4)])));

return statearr_15656;
})();
var inst_15517 = cljs.core.assoc.call(null,e2e.proposals.base_prop,new cljs.core.Keyword(null,"id","id",(-1388402092)),(0),new cljs.core.Keyword(null,"cycle","cycle",(710365284)),(2));
var inst_15518 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15519 = [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),new cljs.core.Keyword(null,"permission","permission",(-511292572))];
var inst_15520 = [e2e.proposals.owner_acc,"active"];
var inst_15521 = cljs.core.PersistentHashMap.fromArrays(inst_15519,inst_15520);
var inst_15522 = [inst_15521];
var inst_15523 = (new cljs.core.PersistentVector(null,(1),(5),inst_15518,inst_15522,null));
var inst_15524 = eos_cljs.core.transact.call(null,e2e.proposals.prop_acc,"updateprop",inst_15517,inst_15523);
var inst_15525 = cljs.core.async.interop.p__GT_c.call(null,inst_15524);
var state_15648__$1 = state_15648;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15648__$1,(10),inst_15525);
} else {
if((state_val_15649 === (34))){
var inst_15642 = (state_15648[(2)]);
var _ = (function (){var statearr_15657 = state_15648;
(statearr_15657[(4)] = cljs.core.rest.call(null,(state_15648[(4)])));

return statearr_15657;
})();
var state_15648__$1 = state_15648;
var statearr_15658_15785 = state_15648__$1;
(statearr_15658_15785[(2)] = inst_15642);

(statearr_15658_15785[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_15649 === (3))){
var inst_15568 = (state_15648[(2)]);
var state_15648__$1 = (function (){var statearr_15659 = state_15648;
(statearr_15659[(8)] = inst_15568);

return statearr_15659;
})();
var statearr_15660_15786 = state_15648__$1;
(statearr_15660_15786[(2)] = null);

(statearr_15660_15786[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_15649 === (35))){
var inst_15615 = (state_15648[(2)]);
var inst_15616 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_15617 = true;
var inst_15618 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can update proposal",inst_15617,inst_15615];
var inst_15619 = cljs.core.PersistentHashMap.fromArrays(inst_15616,inst_15618);
var inst_15620 = cljs.test.do_report.call(null,inst_15619);
var state_15648__$1 = state_15648;
var statearr_15662_15787 = state_15648__$1;
(statearr_15662_15787[(2)] = inst_15620);

(statearr_15662_15787[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_15649 === (4))){
var inst_15492 = (state_15648[(2)]);
var inst_15493 = cljs.core.prn.call(null,"test failed with ",inst_15492);
var state_15648__$1 = (function (){var statearr_15663 = state_15648;
(statearr_15663[(9)] = inst_15493);

return statearr_15663;
})();
var statearr_15664_15788 = state_15648__$1;
(statearr_15664_15788[(2)] = null);

(statearr_15664_15788[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_15649 === (36))){
var _ = (function (){var statearr_15665 = state_15648;
(statearr_15665[(4)] = cljs.core.rest.call(null,(state_15648[(4)])));

return statearr_15665;
})();
var state_15648__$1 = state_15648;
var ex15661 = (state_15648__$1[(2)]);
var statearr_15666_15789 = state_15648__$1;
(statearr_15666_15789[(5)] = ex15661);


var statearr_15667_15790 = state_15648__$1;
(statearr_15667_15790[(1)] = (35));

(statearr_15667_15790[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_15649 === (5))){
var _ = (function (){var statearr_15668 = state_15648;
(statearr_15668[(4)] = cljs.core.cons.call(null,(8),(state_15648[(4)])));

return statearr_15668;
})();
var inst_15505 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_15506 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can update proposal"];
var inst_15507 = cljs.core.PersistentHashMap.fromArrays(inst_15505,inst_15506);
var inst_15508 = cljs.test.do_report.call(null,inst_15507);
var ___$1 = (function (){var statearr_15669 = state_15648;
(statearr_15669[(4)] = cljs.core.rest.call(null,(state_15648[(4)])));

return statearr_15669;
})();
var state_15648__$1 = state_15648;
var statearr_15670_15791 = state_15648__$1;
(statearr_15670_15791[(2)] = inst_15508);

(statearr_15670_15791[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_15649 === (37))){
var inst_15627 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_15628 = true;
var inst_15629 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"can update proposal",inst_15628,true];
var inst_15630 = cljs.core.PersistentHashMap.fromArrays(inst_15627,inst_15629);
var inst_15631 = cljs.test.do_report.call(null,inst_15630);
var state_15648__$1 = state_15648;
var statearr_15671_15792 = state_15648__$1;
(statearr_15671_15792[(2)] = inst_15631);

(statearr_15671_15792[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_15649 === (6))){
var inst_15511 = (state_15648[(2)]);
var state_15648__$1 = state_15648;
var statearr_15672_15793 = state_15648__$1;
(statearr_15672_15793[(2)] = inst_15511);

(statearr_15672_15793[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_15649 === (38))){
var inst_15633 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_15634 = true;
var inst_15635 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can update proposal",inst_15634,true];
var inst_15636 = cljs.core.PersistentHashMap.fromArrays(inst_15633,inst_15635);
var inst_15637 = cljs.test.do_report.call(null,inst_15636);
var state_15648__$1 = state_15648;
var statearr_15673_15794 = state_15648__$1;
(statearr_15673_15794[(2)] = inst_15637);

(statearr_15673_15794[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_15649 === (7))){
var inst_15494 = (state_15648[(2)]);
var inst_15495 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_15496 = null;
var inst_15497 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can update proposal",inst_15496,inst_15494];
var inst_15498 = cljs.core.PersistentHashMap.fromArrays(inst_15495,inst_15497);
var inst_15499 = cljs.test.do_report.call(null,inst_15498);
var state_15648__$1 = state_15648;
var statearr_15675_15795 = state_15648__$1;
(statearr_15675_15795[(2)] = inst_15499);

(statearr_15675_15795[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_15649 === (39))){
var inst_15639 = (state_15648[(2)]);
var _ = (function (){var statearr_15677 = state_15648;
(statearr_15677[(4)] = cljs.core.rest.call(null,(state_15648[(4)])));

return statearr_15677;
})();
var state_15648__$1 = (function (){var statearr_15678 = state_15648;
(statearr_15678[(10)] = inst_15639);

return statearr_15678;
})();
var statearr_15679_15796 = state_15648__$1;
(statearr_15679_15796[(2)] = true);

(statearr_15679_15796[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_15649 === (8))){
var _ = (function (){var statearr_15680 = state_15648;
(statearr_15680[(4)] = cljs.core.rest.call(null,(state_15648[(4)])));

return statearr_15680;
})();
var state_15648__$1 = state_15648;
var ex15674 = (state_15648__$1[(2)]);
var statearr_15681_15797 = state_15648__$1;
(statearr_15681_15797[(5)] = ex15674);


var statearr_15682_15798 = state_15648__$1;
(statearr_15682_15798[(1)] = (7));

(statearr_15682_15798[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_15649 === (9))){
var _ = (function (){var statearr_15683 = state_15648;
(statearr_15683[(4)] = cljs.core.rest.call(null,(state_15648[(4)])));

return statearr_15683;
})();
var state_15648__$1 = state_15648;
var ex15676 = (state_15648__$1[(2)]);
var statearr_15684_15799 = state_15648__$1;
(statearr_15684_15799[(5)] = ex15676);


if((ex15676 instanceof Error)){
var statearr_15685_15800 = state_15648__$1;
(statearr_15685_15800[(1)] = (4));

(statearr_15685_15800[(5)] = null);

} else {
throw ex15676;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_15649 === (10))){
var inst_15527 = (state_15648[(11)]);
var inst_15527__$1 = (state_15648[(2)]);
var inst_15528 = (inst_15527__$1 instanceof cljs.core.ExceptionInfo);
var inst_15529 = cljs.core.ex_data.call(null,inst_15527__$1);
var inst_15530 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_15529);
var inst_15531 = cljs.core._EQ_.call(null,inst_15530,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_15532 = ((inst_15528) && (inst_15531));
var state_15648__$1 = (function (){var statearr_15686 = state_15648;
(statearr_15686[(11)] = inst_15527__$1);

return statearr_15686;
})();
if(cljs.core.truth_(inst_15532)){
var statearr_15687_15801 = state_15648__$1;
(statearr_15687_15801[(1)] = (11));

} else {
var statearr_15688_15802 = state_15648__$1;
(statearr_15688_15802[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_15649 === (11))){
var inst_15527 = (state_15648[(11)]);
var inst_15534 = (function(){throw inst_15527})();
var state_15648__$1 = state_15648;
var statearr_15689_15803 = state_15648__$1;
(statearr_15689_15803[(2)] = inst_15534);

(statearr_15689_15803[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_15649 === (12))){
var inst_15527 = (state_15648[(11)]);
var state_15648__$1 = state_15648;
var statearr_15690_15804 = state_15648__$1;
(statearr_15690_15804[(2)] = inst_15527);

(statearr_15690_15804[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_15649 === (13))){
var inst_15537 = (state_15648[(2)]);
var state_15648__$1 = (function (){var statearr_15691 = state_15648;
(statearr_15691[(12)] = inst_15537);

return statearr_15691;
})();
var statearr_15692_15805 = state_15648__$1;
(statearr_15692_15805[(2)] = null);

(statearr_15692_15805[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_15649 === (14))){
var _ = (function (){var statearr_15693 = state_15648;
(statearr_15693[(4)] = cljs.core.cons.call(null,(17),(state_15648[(4)])));

return statearr_15693;
})();
var state_15648__$1 = state_15648;
var statearr_15694_15806 = state_15648__$1;
(statearr_15694_15806[(1)] = (18));



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_15649 === (15))){
var inst_15565 = (state_15648[(2)]);
var _ = (function (){var statearr_15697 = state_15648;
(statearr_15697[(4)] = cljs.core.rest.call(null,(state_15648[(4)])));

return statearr_15697;
})();
var state_15648__$1 = state_15648;
var statearr_15698_15807 = state_15648__$1;
(statearr_15698_15807[(2)] = inst_15565);

(statearr_15698_15807[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_15649 === (16))){
var inst_15538 = (state_15648[(2)]);
var inst_15539 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_15540 = true;
var inst_15541 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can update proposal",inst_15540,inst_15538];
var inst_15542 = cljs.core.PersistentHashMap.fromArrays(inst_15539,inst_15541);
var inst_15543 = cljs.test.do_report.call(null,inst_15542);
var state_15648__$1 = state_15648;
var statearr_15699_15808 = state_15648__$1;
(statearr_15699_15808[(2)] = inst_15543);

(statearr_15699_15808[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_15649 === (17))){
var _ = (function (){var statearr_15700 = state_15648;
(statearr_15700[(4)] = cljs.core.rest.call(null,(state_15648[(4)])));

return statearr_15700;
})();
var state_15648__$1 = state_15648;
var ex15696 = (state_15648__$1[(2)]);
var statearr_15701_15809 = state_15648__$1;
(statearr_15701_15809[(5)] = ex15696);


var statearr_15702_15810 = state_15648__$1;
(statearr_15702_15810[(1)] = (16));

(statearr_15702_15810[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_15649 === (18))){
var inst_15550 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_15551 = true;
var inst_15552 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"can update proposal",inst_15551,true];
var inst_15553 = cljs.core.PersistentHashMap.fromArrays(inst_15550,inst_15552);
var inst_15554 = cljs.test.do_report.call(null,inst_15553);
var state_15648__$1 = state_15648;
var statearr_15703_15811 = state_15648__$1;
(statearr_15703_15811[(2)] = inst_15554);

(statearr_15703_15811[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_15649 === (19))){
var inst_15556 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_15557 = true;
var inst_15558 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can update proposal",inst_15557,true];
var inst_15559 = cljs.core.PersistentHashMap.fromArrays(inst_15556,inst_15558);
var inst_15560 = cljs.test.do_report.call(null,inst_15559);
var state_15648__$1 = state_15648;
var statearr_15704_15812 = state_15648__$1;
(statearr_15704_15812[(2)] = inst_15560);

(statearr_15704_15812[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_15649 === (20))){
var inst_15562 = (state_15648[(2)]);
var _ = (function (){var statearr_15705 = state_15648;
(statearr_15705[(4)] = cljs.core.rest.call(null,(state_15648[(4)])));

return statearr_15705;
})();
var state_15648__$1 = (function (){var statearr_15706 = state_15648;
(statearr_15706[(13)] = inst_15562);

return statearr_15706;
})();
var statearr_15707_15813 = state_15648__$1;
(statearr_15707_15813[(2)] = true);

(statearr_15707_15813[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_15649 === (21))){
var _ = (function (){var statearr_15708 = state_15648;
(statearr_15708[(4)] = cljs.core.cons.call(null,(28),(state_15648[(4)])));

return statearr_15708;
})();
var inst_15594 = cljs.core.assoc.call(null,e2e.proposals.base_prop,new cljs.core.Keyword(null,"id","id",(-1388402092)),(1),new cljs.core.Keyword(null,"cycle","cycle",(710365284)),(2));
var inst_15595 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15596 = [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),new cljs.core.Keyword(null,"permission","permission",(-511292572))];
var inst_15597 = [e2e.proposals.owner_acc,"active"];
var inst_15598 = cljs.core.PersistentHashMap.fromArrays(inst_15596,inst_15597);
var inst_15599 = [inst_15598];
var inst_15600 = (new cljs.core.PersistentVector(null,(1),(5),inst_15595,inst_15599,null));
var inst_15601 = eos_cljs.core.transact.call(null,e2e.proposals.prop_acc,"updateprop",inst_15594,inst_15600);
var inst_15602 = cljs.core.async.interop.p__GT_c.call(null,inst_15601);
var state_15648__$1 = state_15648;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15648__$1,(29),inst_15602);
} else {
if((state_val_15649 === (22))){
var inst_15645 = (state_15648[(2)]);
var inst_15646 = done.call(null);
var state_15648__$1 = (function (){var statearr_15709 = state_15648;
(statearr_15709[(14)] = inst_15645);

return statearr_15709;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15648__$1,inst_15646);
} else {
if((state_val_15649 === (23))){
var inst_15569 = (state_15648[(2)]);
var inst_15570 = cljs.core.prn.call(null,"test failed with ",inst_15569);
var state_15648__$1 = (function (){var statearr_15710 = state_15648;
(statearr_15710[(15)] = inst_15570);

return statearr_15710;
})();
var statearr_15711_15814 = state_15648__$1;
(statearr_15711_15814[(2)] = null);

(statearr_15711_15814[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_15649 === (24))){
var _ = (function (){var statearr_15712 = state_15648;
(statearr_15712[(4)] = cljs.core.cons.call(null,(27),(state_15648[(4)])));

return statearr_15712;
})();
var inst_15582 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_15583 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can update proposal"];
var inst_15584 = cljs.core.PersistentHashMap.fromArrays(inst_15582,inst_15583);
var inst_15585 = cljs.test.do_report.call(null,inst_15584);
var ___$1 = (function (){var statearr_15713 = state_15648;
(statearr_15713[(4)] = cljs.core.rest.call(null,(state_15648[(4)])));

return statearr_15713;
})();
var state_15648__$1 = state_15648;
var statearr_15714_15815 = state_15648__$1;
(statearr_15714_15815[(2)] = inst_15585);

(statearr_15714_15815[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_15649 === (25))){
var inst_15588 = (state_15648[(2)]);
var state_15648__$1 = state_15648;
var statearr_15716_15816 = state_15648__$1;
(statearr_15716_15816[(2)] = inst_15588);

(statearr_15716_15816[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_15649 === (26))){
var inst_15571 = (state_15648[(2)]);
var inst_15572 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_15573 = null;
var inst_15574 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can update proposal",inst_15573,inst_15571];
var inst_15575 = cljs.core.PersistentHashMap.fromArrays(inst_15572,inst_15574);
var inst_15576 = cljs.test.do_report.call(null,inst_15575);
var state_15648__$1 = state_15648;
var statearr_15718_15817 = state_15648__$1;
(statearr_15718_15817[(2)] = inst_15576);

(statearr_15718_15817[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_15649 === (27))){
var _ = (function (){var statearr_15719 = state_15648;
(statearr_15719[(4)] = cljs.core.rest.call(null,(state_15648[(4)])));

return statearr_15719;
})();
var state_15648__$1 = state_15648;
var ex15715 = (state_15648__$1[(2)]);
var statearr_15720_15818 = state_15648__$1;
(statearr_15720_15818[(5)] = ex15715);


var statearr_15721_15819 = state_15648__$1;
(statearr_15721_15819[(1)] = (26));

(statearr_15721_15819[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_15649 === (28))){
var _ = (function (){var statearr_15722 = state_15648;
(statearr_15722[(4)] = cljs.core.rest.call(null,(state_15648[(4)])));

return statearr_15722;
})();
var state_15648__$1 = state_15648;
var ex15717 = (state_15648__$1[(2)]);
var statearr_15723_15820 = state_15648__$1;
(statearr_15723_15820[(5)] = ex15717);


if((ex15717 instanceof Error)){
var statearr_15724_15821 = state_15648__$1;
(statearr_15724_15821[(1)] = (23));

(statearr_15724_15821[(5)] = null);

} else {
throw ex15717;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_15649 === (29))){
var inst_15604 = (state_15648[(16)]);
var inst_15604__$1 = (state_15648[(2)]);
var inst_15605 = (inst_15604__$1 instanceof cljs.core.ExceptionInfo);
var inst_15606 = cljs.core.ex_data.call(null,inst_15604__$1);
var inst_15607 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_15606);
var inst_15608 = cljs.core._EQ_.call(null,inst_15607,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_15609 = ((inst_15605) && (inst_15608));
var state_15648__$1 = (function (){var statearr_15725 = state_15648;
(statearr_15725[(16)] = inst_15604__$1);

return statearr_15725;
})();
if(cljs.core.truth_(inst_15609)){
var statearr_15726_15822 = state_15648__$1;
(statearr_15726_15822[(1)] = (30));

} else {
var statearr_15727_15823 = state_15648__$1;
(statearr_15727_15823[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_15649 === (30))){
var inst_15604 = (state_15648[(16)]);
var inst_15611 = (function(){throw inst_15604})();
var state_15648__$1 = state_15648;
var statearr_15728_15824 = state_15648__$1;
(statearr_15728_15824[(2)] = inst_15611);

(statearr_15728_15824[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_15649 === (31))){
var inst_15604 = (state_15648[(16)]);
var state_15648__$1 = state_15648;
var statearr_15729_15825 = state_15648__$1;
(statearr_15729_15825[(2)] = inst_15604);

(statearr_15729_15825[(1)] = (32));


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
});})(c__19__auto__,___192__auto__))
;
return ((function (switch__14__auto__,c__19__auto__,___192__auto__){
return (function() {
var e2e$proposals$state_machine__15__auto__ = null;
var e2e$proposals$state_machine__15__auto____0 = (function (){
var statearr_15730 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15730[(0)] = e2e$proposals$state_machine__15__auto__);

(statearr_15730[(1)] = (1));

return statearr_15730;
});
var e2e$proposals$state_machine__15__auto____1 = (function (state_15648){
while(true){
var ret_value__16__auto__ = (function (){try{while(true){
var result__17__auto__ = switch__14__auto__.call(null,state_15648);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__17__auto__;
}
break;
}
}catch (e15731){var ex__18__auto__ = e15731;
var statearr_15732_15826 = state_15648;
(statearr_15732_15826[(2)] = ex__18__auto__);


if(cljs.core.seq.call(null,(state_15648[(4)]))){
var statearr_15733_15827 = state_15648;
(statearr_15733_15827[(1)] = cljs.core.first.call(null,(state_15648[(4)])));

} else {
throw ex__18__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__15828 = state_15648;
state_15648 = G__15828;
continue;
} else {
return ret_value__16__auto__;
}
break;
}
});
e2e$proposals$state_machine__15__auto__ = function(state_15648){
switch(arguments.length){
case 0:
return e2e$proposals$state_machine__15__auto____0.call(this);
case 1:
return e2e$proposals$state_machine__15__auto____1.call(this,state_15648);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
e2e$proposals$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$0 = e2e$proposals$state_machine__15__auto____0;
e2e$proposals$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$1 = e2e$proposals$state_machine__15__auto____1;
return e2e$proposals$state_machine__15__auto__;
})()
;})(switch__14__auto__,c__19__auto__,___192__auto__))
})();
var state__21__auto__ = (function (){var statearr_15734 = f__20__auto__.call(null);
(statearr_15734[(6)] = c__19__auto__);

return statearr_15734;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21__auto__);
});})(c__19__auto__,___192__auto__))
);

return c__19__auto__;
});

e2e.proposals.t_e2e$proposals15245.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta15246","meta15246",(-1261446372),null)], null);
});

e2e.proposals.t_e2e$proposals15245.cljs$lang$type = true;

e2e.proposals.t_e2e$proposals15245.cljs$lang$ctorStr = "e2e.proposals/t_e2e$proposals15245";

e2e.proposals.t_e2e$proposals15245.cljs$lang$ctorPrWriter = (function (this__9776__auto__,writer__9777__auto__,opt__9778__auto__){
return cljs.core._write.call(null,writer__9777__auto__,"e2e.proposals/t_e2e$proposals15245");
});

/**
 * Positional factory function for e2e.proposals/t_e2e$proposals15245.
 */
e2e.proposals.__GT_t_e2e$proposals15245 = (function e2e$proposals$__GT_t_e2e$proposals15245(meta15246){
return (new e2e.proposals.t_e2e$proposals15245(meta15246));
});

}

return (new e2e.proposals.t_e2e$proposals15245(null));
});

e2e.proposals.update_proposal.cljs$lang$var = new cljs.core.Var(function(){return e2e.proposals.update_proposal;},new cljs.core.Symbol("e2e.proposals","update-proposal","e2e.proposals/update-proposal",(-1251182518),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"e2e.proposals","e2e.proposals",(1479174227),null),new cljs.core.Symbol(null,"update-proposal","update-proposal",(-1609555119),null),"e2e/proposals.cljs",(25),(1),(128),(128),cljs.core.List.EMPTY,null,(cljs.core.truth_(e2e.proposals.update_proposal)?e2e.proposals.update_proposal.cljs$lang$test:null)]));
e2e.proposals.cycle_add = (function e2e$proposals$cycle_add(){
return cljs.test.test_var.call(null,e2e.proposals.cycle_add.cljs$lang$var);
});
e2e.proposals.cycle_add.cljs$lang$test = (function (){
if((typeof e2e !== 'undefined') && (typeof e2e.proposals !== 'undefined') && (typeof e2e.proposals.t_e2e$proposals15829 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IFn}
*/
e2e.proposals.t_e2e$proposals15829 = (function (meta15830){
this.meta15830 = meta15830;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
e2e.proposals.t_e2e$proposals15829.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15831,meta15830__$1){
var self__ = this;
var _15831__$1 = this;
return (new e2e.proposals.t_e2e$proposals15829(meta15830__$1));
});

e2e.proposals.t_e2e$proposals15829.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15831){
var self__ = this;
var _15831__$1 = this;
return self__.meta15830;
});

e2e.proposals.t_e2e$proposals15829.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL;

e2e.proposals.t_e2e$proposals15829.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___192__auto__ = self____$1;
var c__19__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19__auto__,___192__auto__,self____$1){
return (function (){
var f__20__auto__ = (function (){var switch__14__auto__ = ((function (c__19__auto__,___192__auto__,self____$1){
return (function (state_16463){
var state_val_16464 = (state_16463[(1)]);
if((state_val_16464 === (32))){
var inst_15959 = (state_16463[(2)]);
var state_16463__$1 = (function (){var statearr_16466 = state_16463;
(statearr_16466[(7)] = inst_15959);

return statearr_16466;
})();
var statearr_16467_17729 = state_16463__$1;
(statearr_16467_17729[(2)] = null);

(statearr_16467_17729[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (64))){
var state_16463__$1 = state_16463;
var statearr_16468_17730 = state_16463__$1;
(statearr_16468_17730[(2)] = false);

(statearr_16468_17730[(1)] = (65));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (96))){
var inst_16206 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_16207 = true;
var inst_16208 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can progress cycle",inst_16207,true];
var inst_16209 = cljs.core.PersistentHashMap.fromArrays(inst_16206,inst_16208);
var inst_16210 = cljs.test.do_report.call(null,inst_16209);
var state_16463__$1 = state_16463;
var statearr_16469_17731 = state_16463__$1;
(statearr_16469_17731[(2)] = inst_16210);

(statearr_16469_17731[(1)] = (97));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (128))){
var _ = (function (){var statearr_16470 = state_16463;
(statearr_16470[(4)] = cljs.core.rest.call(null,(state_16463[(4)])));

return statearr_16470;
})();
var state_16463__$1 = state_16463;
var ex16465 = (state_16463__$1[(2)]);
var statearr_16471_17732 = state_16463__$1;
(statearr_16471_17732[(5)] = ex16465);


var statearr_16472_17733 = state_16463__$1;
(statearr_16472_17733[(1)] = (127));

(statearr_16472_17733[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (160))){
var inst_16437 = (state_16463[(8)]);
var inst_16457 = (state_16463[(2)]);
var _ = (function (){var statearr_16473 = state_16463;
(statearr_16473[(4)] = cljs.core.rest.call(null,(state_16463[(4)])));

return statearr_16473;
})();
var state_16463__$1 = (function (){var statearr_16474 = state_16463;
(statearr_16474[(9)] = inst_16457);

return statearr_16474;
})();
var statearr_16475_17734 = state_16463__$1;
(statearr_16475_17734[(2)] = inst_16437);

(statearr_16475_17734[(1)] = (155));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (1))){
var state_16463__$1 = state_16463;
var statearr_16476_17735 = state_16463__$1;
(statearr_16476_17735[(2)] = null);

(statearr_16476_17735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (33))){
var _ = (function (){var statearr_16477 = state_16463;
(statearr_16477[(4)] = cljs.core.cons.call(null,(36),(state_16463[(4)])));

return statearr_16477;
})();
var state_16463__$1 = state_16463;
var statearr_16478_17736 = state_16463__$1;
(statearr_16478_17736[(1)] = (37));



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (65))){
var inst_16104 = (state_16463[(2)]);
var state_16463__$1 = state_16463;
if(cljs.core.truth_(inst_16104)){
var statearr_16481_17737 = state_16463__$1;
(statearr_16481_17737[(1)] = (69));

} else {
var statearr_16482_17738 = state_16463__$1;
(statearr_16482_17738[(1)] = (70));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (97))){
var inst_16212 = (state_16463[(2)]);
var _ = (function (){var statearr_16483 = state_16463;
(statearr_16483[(4)] = cljs.core.rest.call(null,(state_16463[(4)])));

return statearr_16483;
})();
var state_16463__$1 = (function (){var statearr_16484 = state_16463;
(statearr_16484[(10)] = inst_16212);

return statearr_16484;
})();
var statearr_16485_17739 = state_16463__$1;
(statearr_16485_17739[(2)] = true);

(statearr_16485_17739[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (129))){
var _ = (function (){var statearr_16486 = state_16463;
(statearr_16486[(4)] = cljs.core.rest.call(null,(state_16463[(4)])));

return statearr_16486;
})();
var state_16463__$1 = state_16463;
var ex16480 = (state_16463__$1[(2)]);
var statearr_16487_17740 = state_16463__$1;
(statearr_16487_17740[(5)] = ex16480);


if((ex16480 instanceof Error)){
var statearr_16488_17741 = state_16463__$1;
(statearr_16488_17741[(1)] = (124));

(statearr_16488_17741[(5)] = null);

} else {
throw ex16480;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (2))){
var _ = (function (){var statearr_16489 = state_16463;
(statearr_16489[(4)] = cljs.core.cons.call(null,(9),(state_16463[(4)])));

return statearr_16489;
})();
var inst_15858 = [new cljs.core.Keyword(null,"start_time","start_time",(889556682)),new cljs.core.Keyword(null,"budget","budget",(-405386281))];
var inst_15859 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15860 = [new cljs.core.Keyword(null,"quantity","quantity",(-1929050694)),new cljs.core.Keyword(null,"contract","contract",(798152745))];
var inst_15861 = ["326000.0000 EFX",e2e.proposals.token_acc];
var inst_15862 = cljs.core.PersistentHashMap.fromArrays(inst_15860,inst_15861);
var inst_15863 = [inst_15862];
var inst_15864 = (new cljs.core.PersistentVector(null,(1),(5),inst_15859,inst_15863,null));
var inst_15865 = ["2021-01-01 12:00:00",inst_15864];
var inst_15866 = cljs.core.PersistentHashMap.fromArrays(inst_15858,inst_15865);
var inst_15867 = eos_cljs.core.transact.call(null,e2e.proposals.prop_acc,"addcycle",inst_15866);
var inst_15868 = cljs.core.async.interop.p__GT_c.call(null,inst_15867);
var state_16463__$1 = state_16463;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16463__$1,(10),inst_15868);
} else {
if((state_val_16464 === (34))){
var inst_15987 = (state_16463[(2)]);
var _ = (function (){var statearr_16490 = state_16463;
(statearr_16490[(4)] = cljs.core.rest.call(null,(state_16463[(4)])));

return statearr_16490;
})();
var state_16463__$1 = state_16463;
var statearr_16491_17742 = state_16463__$1;
(statearr_16491_17742[(2)] = inst_15987);

(statearr_16491_17742[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (66))){
var state_16463__$1 = state_16463;
var statearr_16492_17743 = state_16463__$1;
(statearr_16492_17743[(2)] = true);

(statearr_16492_17743[(1)] = (68));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (98))){
var inst_16226 = (state_16463[(11)]);
var inst_16226__$1 = (state_16463[(2)]);
var inst_16227 = (inst_16226__$1 instanceof cljs.core.ExceptionInfo);
var inst_16228 = cljs.core.ex_data.call(null,inst_16226__$1);
var inst_16229 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_16228);
var inst_16230 = cljs.core._EQ_.call(null,inst_16229,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_16231 = ((inst_16227) && (inst_16230));
var state_16463__$1 = (function (){var statearr_16493 = state_16463;
(statearr_16493[(11)] = inst_16226__$1);

return statearr_16493;
})();
if(cljs.core.truth_(inst_16231)){
var statearr_16494_17744 = state_16463__$1;
(statearr_16494_17744[(1)] = (99));

} else {
var statearr_16495_17745 = state_16463__$1;
(statearr_16495_17745[(1)] = (100));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (130))){
var inst_16341 = (state_16463[(12)]);
var inst_16341__$1 = (state_16463[(2)]);
var inst_16342 = (inst_16341__$1 instanceof cljs.core.ExceptionInfo);
var inst_16343 = cljs.core.ex_data.call(null,inst_16341__$1);
var inst_16344 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_16343);
var inst_16345 = cljs.core._EQ_.call(null,inst_16344,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_16346 = ((inst_16342) && (inst_16345));
var state_16463__$1 = (function (){var statearr_16496 = state_16463;
(statearr_16496[(12)] = inst_16341__$1);

return statearr_16496;
})();
if(cljs.core.truth_(inst_16346)){
var statearr_16497_17746 = state_16463__$1;
(statearr_16497_17746[(1)] = (131));

} else {
var statearr_16498_17747 = state_16463__$1;
(statearr_16498_17747[(1)] = (132));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (3))){
var inst_15911 = (state_16463[(2)]);
var state_16463__$1 = (function (){var statearr_16499 = state_16463;
(statearr_16499[(13)] = inst_15911);

return statearr_16499;
})();
var statearr_16500_17748 = state_16463__$1;
(statearr_16500_17748[(2)] = null);

(statearr_16500_17748[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (35))){
var inst_15960 = (state_16463[(2)]);
var inst_15961 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_15962 = true;
var inst_15963 = [new cljs.core.Keyword(null,"error","error",(-978969032)),null,inst_15962,inst_15960];
var inst_15964 = cljs.core.PersistentHashMap.fromArrays(inst_15961,inst_15963);
var inst_15965 = cljs.test.do_report.call(null,inst_15964);
var state_16463__$1 = state_16463;
var statearr_16501_17749 = state_16463__$1;
(statearr_16501_17749[(2)] = inst_15965);

(statearr_16501_17749[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (67))){
var state_16463__$1 = state_16463;
var statearr_16502_17750 = state_16463__$1;
(statearr_16502_17750[(2)] = false);

(statearr_16502_17750[(1)] = (68));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (99))){
var inst_16226 = (state_16463[(11)]);
var inst_16233 = (function(){throw inst_16226})();
var state_16463__$1 = state_16463;
var statearr_16503_17751 = state_16463__$1;
(statearr_16503_17751[(2)] = inst_16233);

(statearr_16503_17751[(1)] = (101));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (131))){
var inst_16341 = (state_16463[(12)]);
var inst_16348 = (function(){throw inst_16341})();
var state_16463__$1 = state_16463;
var statearr_16505_17752 = state_16463__$1;
(statearr_16505_17752[(2)] = inst_16348);

(statearr_16505_17752[(1)] = (133));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (4))){
var inst_15833 = (state_16463[(2)]);
var inst_15834 = cljs.core.prn.call(null,"test failed with ",inst_15833);
var state_16463__$1 = (function (){var statearr_16506 = state_16463;
(statearr_16506[(14)] = inst_15834);

return statearr_16506;
})();
var statearr_16507_17753 = state_16463__$1;
(statearr_16507_17753[(2)] = null);

(statearr_16507_17753[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (36))){
var _ = (function (){var statearr_16508 = state_16463;
(statearr_16508[(4)] = cljs.core.rest.call(null,(state_16463[(4)])));

return statearr_16508;
})();
var state_16463__$1 = state_16463;
var ex16504 = (state_16463__$1[(2)]);
var statearr_16509_17754 = state_16463__$1;
(statearr_16509_17754[(5)] = ex16504);


var statearr_16510_17755 = state_16463__$1;
(statearr_16510_17755[(1)] = (35));

(statearr_16510_17755[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (68))){
var inst_16101 = (state_16463[(2)]);
var state_16463__$1 = state_16463;
var statearr_16511_17756 = state_16463__$1;
(statearr_16511_17756[(2)] = inst_16101);

(statearr_16511_17756[(1)] = (65));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (100))){
var inst_16226 = (state_16463[(11)]);
var state_16463__$1 = state_16463;
var statearr_16512_17757 = state_16463__$1;
(statearr_16512_17757[(2)] = inst_16226);

(statearr_16512_17757[(1)] = (101));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (132))){
var inst_16341 = (state_16463[(12)]);
var state_16463__$1 = state_16463;
var statearr_16513_17758 = state_16463__$1;
(statearr_16513_17758[(2)] = inst_16341);

(statearr_16513_17758[(1)] = (133));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (5))){
var _ = (function (){var statearr_16514 = state_16463;
(statearr_16514[(4)] = cljs.core.cons.call(null,(8),(state_16463[(4)])));

return statearr_16514;
})();
var inst_15846 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_15847 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),null];
var inst_15848 = cljs.core.PersistentHashMap.fromArrays(inst_15846,inst_15847);
var inst_15849 = cljs.test.do_report.call(null,inst_15848);
var ___$1 = (function (){var statearr_16515 = state_16463;
(statearr_16515[(4)] = cljs.core.rest.call(null,(state_16463[(4)])));

return statearr_16515;
})();
var state_16463__$1 = state_16463;
var statearr_16516_17759 = state_16463__$1;
(statearr_16516_17759[(2)] = inst_15849);

(statearr_16516_17759[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (37))){
var inst_15972 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_15973 = true;
var inst_15974 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),null,inst_15973,true];
var inst_15975 = cljs.core.PersistentHashMap.fromArrays(inst_15972,inst_15974);
var inst_15976 = cljs.test.do_report.call(null,inst_15975);
var state_16463__$1 = state_16463;
var statearr_16517_17760 = state_16463__$1;
(statearr_16517_17760[(2)] = inst_15976);

(statearr_16517_17760[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (69))){
var inst_16088 = (state_16463[(15)]);
var inst_16106 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16088);
var state_16463__$1 = state_16463;
var statearr_16518_17761 = state_16463__$1;
(statearr_16518_17761[(2)] = inst_16106);

(statearr_16518_17761[(1)] = (71));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (101))){
var inst_16237 = (state_16463[(16)]);
var inst_16236 = (state_16463[(2)]);
var inst_16237__$1 = cljs.core.nth.call(null,inst_16236,(0),null);
var inst_16239 = (inst_16237__$1 == null);
var inst_16240 = cljs.core.not.call(null,inst_16239);
var state_16463__$1 = (function (){var statearr_16519 = state_16463;
(statearr_16519[(16)] = inst_16237__$1);

return statearr_16519;
})();
if(inst_16240){
var statearr_16520_17762 = state_16463__$1;
(statearr_16520_17762[(1)] = (102));

} else {
var statearr_16521_17763 = state_16463__$1;
(statearr_16521_17763[(1)] = (103));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (133))){
var inst_16351 = (state_16463[(2)]);
var state_16463__$1 = (function (){var statearr_16522 = state_16463;
(statearr_16522[(17)] = inst_16351);

return statearr_16522;
})();
var statearr_16523_17764 = state_16463__$1;
(statearr_16523_17764[(2)] = null);

(statearr_16523_17764[(1)] = (134));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (6))){
var inst_15852 = (state_16463[(2)]);
var state_16463__$1 = state_16463;
var statearr_16524_17765 = state_16463__$1;
(statearr_16524_17765[(2)] = inst_15852);

(statearr_16524_17765[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (38))){
var inst_15978 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_15979 = true;
var inst_15980 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),null,inst_15979,true];
var inst_15981 = cljs.core.PersistentHashMap.fromArrays(inst_15978,inst_15980);
var inst_15982 = cljs.test.do_report.call(null,inst_15981);
var state_16463__$1 = state_16463;
var statearr_16525_17766 = state_16463__$1;
(statearr_16525_17766[(2)] = inst_15982);

(statearr_16525_17766[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (70))){
var inst_16088 = (state_16463[(15)]);
var state_16463__$1 = state_16463;
var statearr_16526_17767 = state_16463__$1;
(statearr_16526_17767[(2)] = inst_16088);

(statearr_16526_17767[(1)] = (71));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (102))){
var inst_16237 = (state_16463[(16)]);
var inst_16242 = inst_16237.cljs$lang$protocol_mask$partition0$;
var inst_16243 = (inst_16242 & (64));
var inst_16244 = inst_16237.cljs$core$ISeq$;
var inst_16245 = (cljs.core.PROTOCOL_SENTINEL === inst_16244);
var inst_16246 = ((inst_16243) || (inst_16245));
var state_16463__$1 = state_16463;
if(cljs.core.truth_(inst_16246)){
var statearr_16527_17768 = state_16463__$1;
(statearr_16527_17768[(1)] = (105));

} else {
var statearr_16528_17769 = state_16463__$1;
(statearr_16528_17769[(1)] = (106));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (134))){
var _ = (function (){var statearr_16529 = state_16463;
(statearr_16529[(4)] = cljs.core.cons.call(null,(137),(state_16463[(4)])));

return statearr_16529;
})();
var state_16463__$1 = state_16463;
var statearr_16530_17770 = state_16463__$1;
(statearr_16530_17770[(1)] = (138));



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (7))){
var inst_15835 = (state_16463[(2)]);
var inst_15836 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_15837 = null;
var inst_15838 = [new cljs.core.Keyword(null,"error","error",(-978969032)),null,inst_15837,inst_15835];
var inst_15839 = cljs.core.PersistentHashMap.fromArrays(inst_15836,inst_15838);
var inst_15840 = cljs.test.do_report.call(null,inst_15839);
var state_16463__$1 = state_16463;
var statearr_16532_17771 = state_16463__$1;
(statearr_16532_17771[(2)] = inst_15840);

(statearr_16532_17771[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (39))){
var inst_15984 = (state_16463[(2)]);
var _ = (function (){var statearr_16533 = state_16463;
(statearr_16533[(4)] = cljs.core.rest.call(null,(state_16463[(4)])));

return statearr_16533;
})();
var state_16463__$1 = (function (){var statearr_16534 = state_16463;
(statearr_16534[(18)] = inst_15984);

return statearr_16534;
})();
var statearr_16535_17772 = state_16463__$1;
(statearr_16535_17772[(2)] = true);

(statearr_16535_17772[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (71))){
var inst_16109 = (state_16463[(2)]);
var inst_16110 = cljs.core.get.call(null,inst_16109,"current_cycle");
var state_16463__$1 = (function (){var statearr_16536 = state_16463;
(statearr_16536[(19)] = inst_16110);

return statearr_16536;
})();
var statearr_16537_17773 = state_16463__$1;
(statearr_16537_17773[(2)] = null);

(statearr_16537_17773[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (103))){
var state_16463__$1 = state_16463;
var statearr_16539_17774 = state_16463__$1;
(statearr_16539_17774[(2)] = false);

(statearr_16539_17774[(1)] = (104));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (135))){
var inst_16379 = (state_16463[(2)]);
var _ = (function (){var statearr_16540 = state_16463;
(statearr_16540[(4)] = cljs.core.rest.call(null,(state_16463[(4)])));

return statearr_16540;
})();
var state_16463__$1 = state_16463;
var statearr_16541_17775 = state_16463__$1;
(statearr_16541_17775[(2)] = inst_16379);

(statearr_16541_17775[(1)] = (123));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (8))){
var _ = (function (){var statearr_16542 = state_16463;
(statearr_16542[(4)] = cljs.core.rest.call(null,(state_16463[(4)])));

return statearr_16542;
})();
var state_16463__$1 = state_16463;
var ex16538 = (state_16463__$1[(2)]);
var statearr_16543_17776 = state_16463__$1;
(statearr_16543_17776[(5)] = ex16538);


var statearr_16544_17777 = state_16463__$1;
(statearr_16544_17777[(1)] = (7));

(statearr_16544_17777[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (40))){
var _ = (function (){var statearr_16545 = state_16463;
(statearr_16545[(4)] = cljs.core.cons.call(null,(47),(state_16463[(4)])));

return statearr_16545;
})();
var inst_16016 = [new cljs.core.Keyword(null,"start_time","start_time",(889556682)),new cljs.core.Keyword(null,"budget","budget",(-405386281))];
var inst_16017 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16018 = [new cljs.core.Keyword(null,"quantity","quantity",(-1929050694)),new cljs.core.Keyword(null,"contract","contract",(798152745))];
var inst_16019 = ["326000.2000 EFX",e2e.proposals.token_acc];
var inst_16020 = cljs.core.PersistentHashMap.fromArrays(inst_16018,inst_16019);
var inst_16021 = [inst_16020];
var inst_16022 = (new cljs.core.PersistentVector(null,(1),(5),inst_16017,inst_16021,null));
var inst_16023 = ["2021-01-01 12:00:00",inst_16022];
var inst_16024 = cljs.core.PersistentHashMap.fromArrays(inst_16016,inst_16023);
var inst_16025 = eos_cljs.core.transact.call(null,e2e.proposals.prop_acc,"addcycle",inst_16024);
var inst_16026 = cljs.core.async.interop.p__GT_c.call(null,inst_16025);
var state_16463__$1 = state_16463;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16463__$1,(48),inst_16026);
} else {
if((state_val_16464 === (72))){
var inst_16110 = (state_16463[(19)]);
var inst_16123 = (state_16463[(20)]);
var inst_16124 = (state_16463[(21)]);
var _ = (function (){var statearr_16546 = state_16463;
(statearr_16546[(4)] = cljs.core.cons.call(null,(75),(state_16463[(4)])));

return statearr_16546;
})();
var inst_16122 = (new cljs.core.List(null,(0),null,(1),null));
var inst_16123__$1 = (new cljs.core.List(null,inst_16110,inst_16122,(2),null));
var inst_16124__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_16123__$1);
var state_16463__$1 = (function (){var statearr_16547 = state_16463;
(statearr_16547[(20)] = inst_16123__$1);

(statearr_16547[(21)] = inst_16124__$1);

return statearr_16547;
})();
if(cljs.core.truth_(inst_16124__$1)){
var statearr_16548_17778 = state_16463__$1;
(statearr_16548_17778[(1)] = (76));

} else {
var statearr_16549_17779 = state_16463__$1;
(statearr_16549_17779[(1)] = (77));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (104))){
var inst_16253 = (state_16463[(2)]);
var state_16463__$1 = state_16463;
if(cljs.core.truth_(inst_16253)){
var statearr_16551_17780 = state_16463__$1;
(statearr_16551_17780[(1)] = (108));

} else {
var statearr_16552_17781 = state_16463__$1;
(statearr_16552_17781[(1)] = (109));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (136))){
var inst_16352 = (state_16463[(2)]);
var inst_16353 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_16354 = true;
var inst_16355 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can progress cycle",inst_16354,inst_16352];
var inst_16356 = cljs.core.PersistentHashMap.fromArrays(inst_16353,inst_16355);
var inst_16357 = cljs.test.do_report.call(null,inst_16356);
var state_16463__$1 = state_16463;
var statearr_16553_17782 = state_16463__$1;
(statearr_16553_17782[(2)] = inst_16357);

(statearr_16553_17782[(1)] = (135));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (9))){
var _ = (function (){var statearr_16554 = state_16463;
(statearr_16554[(4)] = cljs.core.rest.call(null,(state_16463[(4)])));

return statearr_16554;
})();
var state_16463__$1 = state_16463;
var ex16550 = (state_16463__$1[(2)]);
var statearr_16555_17783 = state_16463__$1;
(statearr_16555_17783[(5)] = ex16550);


if((ex16550 instanceof Error)){
var statearr_16556_17784 = state_16463__$1;
(statearr_16556_17784[(1)] = (4));

(statearr_16556_17784[(5)] = null);

} else {
throw ex16550;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (41))){
var inst_16069 = (state_16463[(2)]);
var inst_16074 = eos_cljs.core.get_table_rows.call(null,e2e.proposals.prop_acc,e2e.proposals.prop_acc,"config");
var inst_16075 = cljs.core.async.interop.p__GT_c.call(null,inst_16074);
var state_16463__$1 = (function (){var statearr_16557 = state_16463;
(statearr_16557[(22)] = inst_16069);

return statearr_16557;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16463__$1,(59),inst_16075);
} else {
if((state_val_16464 === (73))){
var inst_16147 = (state_16463[(2)]);
var state_16463__$1 = (function (){var statearr_16559 = state_16463;
(statearr_16559[(23)] = inst_16147);

return statearr_16559;
})();
var statearr_16560_17785 = state_16463__$1;
(statearr_16560_17785[(2)] = null);

(statearr_16560_17785[(1)] = (79));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (105))){
var state_16463__$1 = state_16463;
var statearr_16561_17786 = state_16463__$1;
(statearr_16561_17786[(2)] = true);

(statearr_16561_17786[(1)] = (107));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (137))){
var _ = (function (){var statearr_16562 = state_16463;
(statearr_16562[(4)] = cljs.core.rest.call(null,(state_16463[(4)])));

return statearr_16562;
})();
var state_16463__$1 = state_16463;
var ex16558 = (state_16463__$1[(2)]);
var statearr_16563_17787 = state_16463__$1;
(statearr_16563_17787[(5)] = ex16558);


var statearr_16564_17788 = state_16463__$1;
(statearr_16564_17788[(1)] = (136));

(statearr_16564_17788[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (10))){
var inst_15870 = (state_16463[(24)]);
var inst_15870__$1 = (state_16463[(2)]);
var inst_15871 = (inst_15870__$1 instanceof cljs.core.ExceptionInfo);
var inst_15872 = cljs.core.ex_data.call(null,inst_15870__$1);
var inst_15873 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_15872);
var inst_15874 = cljs.core._EQ_.call(null,inst_15873,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_15875 = ((inst_15871) && (inst_15874));
var state_16463__$1 = (function (){var statearr_16565 = state_16463;
(statearr_16565[(24)] = inst_15870__$1);

return statearr_16565;
})();
if(cljs.core.truth_(inst_15875)){
var statearr_16566_17789 = state_16463__$1;
(statearr_16566_17789[(1)] = (11));

} else {
var statearr_16567_17790 = state_16463__$1;
(statearr_16567_17790[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (42))){
var inst_15991 = (state_16463[(2)]);
var inst_15992 = cljs.core.prn.call(null,"test failed with ",inst_15991);
var state_16463__$1 = (function (){var statearr_16568 = state_16463;
(statearr_16568[(25)] = inst_15992);

return statearr_16568;
})();
var statearr_16569_17791 = state_16463__$1;
(statearr_16569_17791[(2)] = null);

(statearr_16569_17791[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (74))){
var inst_16111 = (state_16463[(2)]);
var inst_16112 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_16113 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),new cljs.core.Symbol(null,"cycle","cycle",(-1944070485),null),(0));
var inst_16114 = [new cljs.core.Keyword(null,"error","error",(-978969032)),null,inst_16113,inst_16111];
var inst_16115 = cljs.core.PersistentHashMap.fromArrays(inst_16112,inst_16114);
var inst_16116 = cljs.test.do_report.call(null,inst_16115);
var state_16463__$1 = state_16463;
var statearr_16570_17792 = state_16463__$1;
(statearr_16570_17792[(2)] = inst_16116);

(statearr_16570_17792[(1)] = (73));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (106))){
var state_16463__$1 = state_16463;
var statearr_16571_17793 = state_16463__$1;
(statearr_16571_17793[(2)] = false);

(statearr_16571_17793[(1)] = (107));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (138))){
var inst_16364 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_16365 = true;
var inst_16366 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"can progress cycle",inst_16365,true];
var inst_16367 = cljs.core.PersistentHashMap.fromArrays(inst_16364,inst_16366);
var inst_16368 = cljs.test.do_report.call(null,inst_16367);
var state_16463__$1 = state_16463;
var statearr_16572_17794 = state_16463__$1;
(statearr_16572_17794[(2)] = inst_16368);

(statearr_16572_17794[(1)] = (140));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (11))){
var inst_15870 = (state_16463[(24)]);
var inst_15877 = (function(){throw inst_15870})();
var state_16463__$1 = state_16463;
var statearr_16574_17795 = state_16463__$1;
(statearr_16574_17795[(2)] = inst_15877);

(statearr_16574_17795[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (43))){
var _ = (function (){var statearr_16575 = state_16463;
(statearr_16575[(4)] = cljs.core.cons.call(null,(46),(state_16463[(4)])));

return statearr_16575;
})();
var inst_16004 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_16005 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),null];
var inst_16006 = cljs.core.PersistentHashMap.fromArrays(inst_16004,inst_16005);
var inst_16007 = cljs.test.do_report.call(null,inst_16006);
var ___$1 = (function (){var statearr_16576 = state_16463;
(statearr_16576[(4)] = cljs.core.rest.call(null,(state_16463[(4)])));

return statearr_16576;
})();
var state_16463__$1 = state_16463;
var statearr_16577_17796 = state_16463__$1;
(statearr_16577_17796[(2)] = inst_16007);

(statearr_16577_17796[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (75))){
var _ = (function (){var statearr_16578 = state_16463;
(statearr_16578[(4)] = cljs.core.rest.call(null,(state_16463[(4)])));

return statearr_16578;
})();
var state_16463__$1 = state_16463;
var ex16573 = (state_16463__$1[(2)]);
var statearr_16579_17797 = state_16463__$1;
(statearr_16579_17797[(5)] = ex16573);


var statearr_16580_17798 = state_16463__$1;
(statearr_16580_17798[(1)] = (74));

(statearr_16580_17798[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (107))){
var inst_16250 = (state_16463[(2)]);
var state_16463__$1 = state_16463;
var statearr_16581_17799 = state_16463__$1;
(statearr_16581_17799[(2)] = inst_16250);

(statearr_16581_17799[(1)] = (104));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (139))){
var inst_16370 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_16371 = true;
var inst_16372 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can progress cycle",inst_16371,true];
var inst_16373 = cljs.core.PersistentHashMap.fromArrays(inst_16370,inst_16372);
var inst_16374 = cljs.test.do_report.call(null,inst_16373);
var state_16463__$1 = state_16463;
var statearr_16582_17800 = state_16463__$1;
(statearr_16582_17800[(2)] = inst_16374);

(statearr_16582_17800[(1)] = (140));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (12))){
var inst_15870 = (state_16463[(24)]);
var state_16463__$1 = state_16463;
var statearr_16583_17801 = state_16463__$1;
(statearr_16583_17801[(2)] = inst_15870);

(statearr_16583_17801[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (44))){
var inst_16010 = (state_16463[(2)]);
var state_16463__$1 = state_16463;
var statearr_16584_17802 = state_16463__$1;
(statearr_16584_17802[(2)] = inst_16010);

(statearr_16584_17802[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (76))){
var inst_16123 = (state_16463[(20)]);
var inst_16126 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_16127 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),new cljs.core.Symbol(null,"cycle","cycle",(-1944070485),null),(0));
var inst_16128 = cljs.core.cons.call(null,cljs.core._EQ_,inst_16123);
var inst_16129 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),null,inst_16127,inst_16128];
var inst_16130 = cljs.core.PersistentHashMap.fromArrays(inst_16126,inst_16129);
var inst_16131 = cljs.test.do_report.call(null,inst_16130);
var state_16463__$1 = state_16463;
var statearr_16585_17803 = state_16463__$1;
(statearr_16585_17803[(2)] = inst_16131);

(statearr_16585_17803[(1)] = (78));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (108))){
var inst_16237 = (state_16463[(16)]);
var inst_16255 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16237);
var state_16463__$1 = state_16463;
var statearr_16586_17804 = state_16463__$1;
(statearr_16586_17804[(2)] = inst_16255);

(statearr_16586_17804[(1)] = (110));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (140))){
var inst_16376 = (state_16463[(2)]);
var _ = (function (){var statearr_16587 = state_16463;
(statearr_16587[(4)] = cljs.core.rest.call(null,(state_16463[(4)])));

return statearr_16587;
})();
var state_16463__$1 = (function (){var statearr_16588 = state_16463;
(statearr_16588[(26)] = inst_16376);

return statearr_16588;
})();
var statearr_16589_17805 = state_16463__$1;
(statearr_16589_17805[(2)] = true);

(statearr_16589_17805[(1)] = (135));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (13))){
var inst_15880 = (state_16463[(2)]);
var state_16463__$1 = (function (){var statearr_16590 = state_16463;
(statearr_16590[(27)] = inst_15880);

return statearr_16590;
})();
var statearr_16591_17806 = state_16463__$1;
(statearr_16591_17806[(2)] = null);

(statearr_16591_17806[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (45))){
var inst_15993 = (state_16463[(2)]);
var inst_15994 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_15995 = null;
var inst_15996 = [new cljs.core.Keyword(null,"error","error",(-978969032)),null,inst_15995,inst_15993];
var inst_15997 = cljs.core.PersistentHashMap.fromArrays(inst_15994,inst_15996);
var inst_15998 = cljs.test.do_report.call(null,inst_15997);
var state_16463__$1 = state_16463;
var statearr_16592_17807 = state_16463__$1;
(statearr_16592_17807[(2)] = inst_15998);

(statearr_16592_17807[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (77))){
var inst_16123 = (state_16463[(20)]);
var inst_16133 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_16134 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),new cljs.core.Symbol(null,"cycle","cycle",(-1944070485),null),(0));
var inst_16135 = new cljs.core.Symbol(null,"not","not",(1044554643),null);
var inst_16136 = new cljs.core.Symbol(null,"=","=",(-1501502141),null);
var inst_16137 = cljs.core.cons.call(null,inst_16136,inst_16123);
var inst_16138 = (new cljs.core.List(null,inst_16137,null,(1),null));
var inst_16139 = (new cljs.core.List(null,inst_16135,inst_16138,(2),null));
var inst_16140 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),null,inst_16134,inst_16139];
var inst_16141 = cljs.core.PersistentHashMap.fromArrays(inst_16133,inst_16140);
var inst_16142 = cljs.test.do_report.call(null,inst_16141);
var state_16463__$1 = state_16463;
var statearr_16593_17808 = state_16463__$1;
(statearr_16593_17808[(2)] = inst_16142);

(statearr_16593_17808[(1)] = (78));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (109))){
var inst_16237 = (state_16463[(16)]);
var state_16463__$1 = state_16463;
var statearr_16594_17809 = state_16463__$1;
(statearr_16594_17809[(2)] = inst_16237);

(statearr_16594_17809[(1)] = (110));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (141))){
var inst_16390 = (state_16463[(28)]);
var inst_16390__$1 = (state_16463[(2)]);
var inst_16391 = (inst_16390__$1 instanceof cljs.core.ExceptionInfo);
var inst_16392 = cljs.core.ex_data.call(null,inst_16390__$1);
var inst_16393 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_16392);
var inst_16394 = cljs.core._EQ_.call(null,inst_16393,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_16395 = ((inst_16391) && (inst_16394));
var state_16463__$1 = (function (){var statearr_16596 = state_16463;
(statearr_16596[(28)] = inst_16390__$1);

return statearr_16596;
})();
if(cljs.core.truth_(inst_16395)){
var statearr_16597_17810 = state_16463__$1;
(statearr_16597_17810[(1)] = (142));

} else {
var statearr_16598_17811 = state_16463__$1;
(statearr_16598_17811[(1)] = (143));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (14))){
var _ = (function (){var statearr_16599 = state_16463;
(statearr_16599[(4)] = cljs.core.cons.call(null,(17),(state_16463[(4)])));

return statearr_16599;
})();
var state_16463__$1 = state_16463;
var statearr_16600_17812 = state_16463__$1;
(statearr_16600_17812[(1)] = (18));



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (46))){
var _ = (function (){var statearr_16602 = state_16463;
(statearr_16602[(4)] = cljs.core.rest.call(null,(state_16463[(4)])));

return statearr_16602;
})();
var state_16463__$1 = state_16463;
var ex16595 = (state_16463__$1[(2)]);
var statearr_16603_17813 = state_16463__$1;
(statearr_16603_17813[(5)] = ex16595);


var statearr_16604_17814 = state_16463__$1;
(statearr_16604_17814[(1)] = (45));

(statearr_16604_17814[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (78))){
var inst_16124 = (state_16463[(21)]);
var inst_16144 = (state_16463[(2)]);
var _ = (function (){var statearr_16605 = state_16463;
(statearr_16605[(4)] = cljs.core.rest.call(null,(state_16463[(4)])));

return statearr_16605;
})();
var state_16463__$1 = (function (){var statearr_16606 = state_16463;
(statearr_16606[(29)] = inst_16144);

return statearr_16606;
})();
var statearr_16607_17815 = state_16463__$1;
(statearr_16607_17815[(2)] = inst_16124);

(statearr_16607_17815[(1)] = (73));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (110))){
var inst_16258 = (state_16463[(2)]);
var inst_16259 = cljs.core.get.call(null,inst_16258,"current_cycle");
var state_16463__$1 = (function (){var statearr_16608 = state_16463;
(statearr_16608[(30)] = inst_16259);

return statearr_16608;
})();
var statearr_16609_17816 = state_16463__$1;
(statearr_16609_17816[(2)] = null);

(statearr_16609_17816[(1)] = (111));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (142))){
var inst_16390 = (state_16463[(28)]);
var inst_16397 = (function(){throw inst_16390})();
var state_16463__$1 = state_16463;
var statearr_16611_17817 = state_16463__$1;
(statearr_16611_17817[(2)] = inst_16397);

(statearr_16611_17817[(1)] = (144));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (15))){
var inst_15908 = (state_16463[(2)]);
var _ = (function (){var statearr_16612 = state_16463;
(statearr_16612[(4)] = cljs.core.rest.call(null,(state_16463[(4)])));

return statearr_16612;
})();
var state_16463__$1 = state_16463;
var statearr_16613_17818 = state_16463__$1;
(statearr_16613_17818[(2)] = inst_15908);

(statearr_16613_17818[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (47))){
var _ = (function (){var statearr_16614 = state_16463;
(statearr_16614[(4)] = cljs.core.rest.call(null,(state_16463[(4)])));

return statearr_16614;
})();
var state_16463__$1 = state_16463;
var ex16610 = (state_16463__$1[(2)]);
var statearr_16615_17819 = state_16463__$1;
(statearr_16615_17819[(5)] = ex16610);


if((ex16610 instanceof Error)){
var statearr_16616_17820 = state_16463__$1;
(statearr_16616_17820[(1)] = (42));

(statearr_16616_17820[(5)] = null);

} else {
throw ex16610;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (79))){
var _ = (function (){var statearr_16617 = state_16463;
(statearr_16617[(4)] = cljs.core.cons.call(null,(86),(state_16463[(4)])));

return statearr_16617;
})();
var inst_16173 = cljs.core.PersistentHashMap.EMPTY;
var inst_16174 = eos_cljs.core.transact.call(null,e2e.proposals.prop_acc,"cycleupdate",inst_16173);
var inst_16175 = cljs.core.async.interop.p__GT_c.call(null,inst_16174);
var state_16463__$1 = state_16463;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16463__$1,(87),inst_16175);
} else {
if((state_val_16464 === (111))){
var inst_16259 = (state_16463[(30)]);
var inst_16272 = (state_16463[(31)]);
var inst_16273 = (state_16463[(32)]);
var _ = (function (){var statearr_16618 = state_16463;
(statearr_16618[(4)] = cljs.core.cons.call(null,(114),(state_16463[(4)])));

return statearr_16618;
})();
var inst_16271 = (new cljs.core.List(null,(1),null,(1),null));
var inst_16272__$1 = (new cljs.core.List(null,inst_16259,inst_16271,(2),null));
var inst_16273__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_16272__$1);
var state_16463__$1 = (function (){var statearr_16619 = state_16463;
(statearr_16619[(31)] = inst_16272__$1);

(statearr_16619[(32)] = inst_16273__$1);

return statearr_16619;
})();
if(cljs.core.truth_(inst_16273__$1)){
var statearr_16620_17821 = state_16463__$1;
(statearr_16620_17821[(1)] = (115));

} else {
var statearr_16621_17822 = state_16463__$1;
(statearr_16621_17822[(1)] = (116));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (143))){
var inst_16390 = (state_16463[(28)]);
var state_16463__$1 = state_16463;
var statearr_16622_17823 = state_16463__$1;
(statearr_16622_17823[(2)] = inst_16390);

(statearr_16622_17823[(1)] = (144));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (16))){
var inst_15881 = (state_16463[(2)]);
var inst_15882 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_15883 = true;
var inst_15884 = [new cljs.core.Keyword(null,"error","error",(-978969032)),null,inst_15883,inst_15881];
var inst_15885 = cljs.core.PersistentHashMap.fromArrays(inst_15882,inst_15884);
var inst_15886 = cljs.test.do_report.call(null,inst_15885);
var state_16463__$1 = state_16463;
var statearr_16623_17824 = state_16463__$1;
(statearr_16623_17824[(2)] = inst_15886);

(statearr_16623_17824[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (48))){
var inst_16028 = (state_16463[(33)]);
var inst_16028__$1 = (state_16463[(2)]);
var inst_16029 = (inst_16028__$1 instanceof cljs.core.ExceptionInfo);
var inst_16030 = cljs.core.ex_data.call(null,inst_16028__$1);
var inst_16031 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_16030);
var inst_16032 = cljs.core._EQ_.call(null,inst_16031,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_16033 = ((inst_16029) && (inst_16032));
var state_16463__$1 = (function (){var statearr_16624 = state_16463;
(statearr_16624[(33)] = inst_16028__$1);

return statearr_16624;
})();
if(cljs.core.truth_(inst_16033)){
var statearr_16625_17825 = state_16463__$1;
(statearr_16625_17825[(1)] = (49));

} else {
var statearr_16626_17826 = state_16463__$1;
(statearr_16626_17826[(1)] = (50));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (80))){
var inst_16218 = (state_16463[(2)]);
var inst_16223 = eos_cljs.core.get_table_rows.call(null,e2e.proposals.prop_acc,e2e.proposals.prop_acc,"config");
var inst_16224 = cljs.core.async.interop.p__GT_c.call(null,inst_16223);
var state_16463__$1 = (function (){var statearr_16627 = state_16463;
(statearr_16627[(34)] = inst_16218);

return statearr_16627;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16463__$1,(98),inst_16224);
} else {
if((state_val_16464 === (112))){
var inst_16296 = (state_16463[(2)]);
var inst_16297 = Promise.resolve((1));
var inst_16298 = eos_cljs.core.wait_block.call(null,inst_16297);
var inst_16299 = cljs.core.async.interop.p__GT_c.call(null,inst_16298);
var state_16463__$1 = (function (){var statearr_16629 = state_16463;
(statearr_16629[(35)] = inst_16296);

return statearr_16629;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16463__$1,(118),inst_16299);
} else {
if((state_val_16464 === (144))){
var inst_16401 = (state_16463[(36)]);
var inst_16400 = (state_16463[(2)]);
var inst_16401__$1 = cljs.core.nth.call(null,inst_16400,(0),null);
var inst_16403 = (inst_16401__$1 == null);
var inst_16404 = cljs.core.not.call(null,inst_16403);
var state_16463__$1 = (function (){var statearr_16630 = state_16463;
(statearr_16630[(36)] = inst_16401__$1);

return statearr_16630;
})();
if(inst_16404){
var statearr_16631_17827 = state_16463__$1;
(statearr_16631_17827[(1)] = (145));

} else {
var statearr_16632_17828 = state_16463__$1;
(statearr_16632_17828[(1)] = (146));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (17))){
var _ = (function (){var statearr_16633 = state_16463;
(statearr_16633[(4)] = cljs.core.rest.call(null,(state_16463[(4)])));

return statearr_16633;
})();
var state_16463__$1 = state_16463;
var ex16628 = (state_16463__$1[(2)]);
var statearr_16634_17829 = state_16463__$1;
(statearr_16634_17829[(5)] = ex16628);


var statearr_16635_17830 = state_16463__$1;
(statearr_16635_17830[(1)] = (16));

(statearr_16635_17830[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (49))){
var inst_16028 = (state_16463[(33)]);
var inst_16035 = (function(){throw inst_16028})();
var state_16463__$1 = state_16463;
var statearr_16636_17831 = state_16463__$1;
(statearr_16636_17831[(2)] = inst_16035);

(statearr_16636_17831[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (81))){
var inst_16148 = (state_16463[(2)]);
var inst_16149 = cljs.core.prn.call(null,"test failed with ",inst_16148);
var state_16463__$1 = (function (){var statearr_16637 = state_16463;
(statearr_16637[(37)] = inst_16149);

return statearr_16637;
})();
var statearr_16638_17832 = state_16463__$1;
(statearr_16638_17832[(2)] = null);

(statearr_16638_17832[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (113))){
var inst_16260 = (state_16463[(2)]);
var inst_16261 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_16262 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),new cljs.core.Symbol(null,"cycle","cycle",(-1944070485),null),(1));
var inst_16263 = [new cljs.core.Keyword(null,"error","error",(-978969032)),null,inst_16262,inst_16260];
var inst_16264 = cljs.core.PersistentHashMap.fromArrays(inst_16261,inst_16263);
var inst_16265 = cljs.test.do_report.call(null,inst_16264);
var state_16463__$1 = state_16463;
var statearr_16639_17833 = state_16463__$1;
(statearr_16639_17833[(2)] = inst_16265);

(statearr_16639_17833[(1)] = (112));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (145))){
var inst_16401 = (state_16463[(36)]);
var inst_16406 = inst_16401.cljs$lang$protocol_mask$partition0$;
var inst_16407 = (inst_16406 & (64));
var inst_16408 = inst_16401.cljs$core$ISeq$;
var inst_16409 = (cljs.core.PROTOCOL_SENTINEL === inst_16408);
var inst_16410 = ((inst_16407) || (inst_16409));
var state_16463__$1 = state_16463;
if(cljs.core.truth_(inst_16410)){
var statearr_16640_17834 = state_16463__$1;
(statearr_16640_17834[(1)] = (148));

} else {
var statearr_16641_17835 = state_16463__$1;
(statearr_16641_17835[(1)] = (149));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (18))){
var inst_15893 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_15894 = true;
var inst_15895 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),null,inst_15894,true];
var inst_15896 = cljs.core.PersistentHashMap.fromArrays(inst_15893,inst_15895);
var inst_15897 = cljs.test.do_report.call(null,inst_15896);
var state_16463__$1 = state_16463;
var statearr_16642_17836 = state_16463__$1;
(statearr_16642_17836[(2)] = inst_15897);

(statearr_16642_17836[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (50))){
var inst_16028 = (state_16463[(33)]);
var state_16463__$1 = state_16463;
var statearr_16644_17837 = state_16463__$1;
(statearr_16644_17837[(2)] = inst_16028);

(statearr_16644_17837[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (82))){
var _ = (function (){var statearr_16645 = state_16463;
(statearr_16645[(4)] = cljs.core.cons.call(null,(85),(state_16463[(4)])));

return statearr_16645;
})();
var inst_16161 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_16162 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can progress cycle"];
var inst_16163 = cljs.core.PersistentHashMap.fromArrays(inst_16161,inst_16162);
var inst_16164 = cljs.test.do_report.call(null,inst_16163);
var ___$1 = (function (){var statearr_16646 = state_16463;
(statearr_16646[(4)] = cljs.core.rest.call(null,(state_16463[(4)])));

return statearr_16646;
})();
var state_16463__$1 = state_16463;
var statearr_16647_17838 = state_16463__$1;
(statearr_16647_17838[(2)] = inst_16164);

(statearr_16647_17838[(1)] = (83));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (114))){
var _ = (function (){var statearr_16648 = state_16463;
(statearr_16648[(4)] = cljs.core.rest.call(null,(state_16463[(4)])));

return statearr_16648;
})();
var state_16463__$1 = state_16463;
var ex16643 = (state_16463__$1[(2)]);
var statearr_16649_17839 = state_16463__$1;
(statearr_16649_17839[(5)] = ex16643);


var statearr_16650_17840 = state_16463__$1;
(statearr_16650_17840[(1)] = (113));

(statearr_16650_17840[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (146))){
var state_16463__$1 = state_16463;
var statearr_16651_17841 = state_16463__$1;
(statearr_16651_17841[(2)] = false);

(statearr_16651_17841[(1)] = (147));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (19))){
var inst_15899 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_15900 = true;
var inst_15901 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),null,inst_15900,true];
var inst_15902 = cljs.core.PersistentHashMap.fromArrays(inst_15899,inst_15901);
var inst_15903 = cljs.test.do_report.call(null,inst_15902);
var state_16463__$1 = state_16463;
var statearr_16652_17842 = state_16463__$1;
(statearr_16652_17842[(2)] = inst_15903);

(statearr_16652_17842[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (51))){
var inst_16038 = (state_16463[(2)]);
var state_16463__$1 = (function (){var statearr_16653 = state_16463;
(statearr_16653[(38)] = inst_16038);

return statearr_16653;
})();
var statearr_16654_17843 = state_16463__$1;
(statearr_16654_17843[(2)] = null);

(statearr_16654_17843[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (83))){
var inst_16167 = (state_16463[(2)]);
var state_16463__$1 = state_16463;
var statearr_16655_17844 = state_16463__$1;
(statearr_16655_17844[(2)] = inst_16167);

(statearr_16655_17844[(1)] = (80));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (115))){
var inst_16272 = (state_16463[(31)]);
var inst_16275 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_16276 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),new cljs.core.Symbol(null,"cycle","cycle",(-1944070485),null),(1));
var inst_16277 = cljs.core.cons.call(null,cljs.core._EQ_,inst_16272);
var inst_16278 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),null,inst_16276,inst_16277];
var inst_16279 = cljs.core.PersistentHashMap.fromArrays(inst_16275,inst_16278);
var inst_16280 = cljs.test.do_report.call(null,inst_16279);
var state_16463__$1 = state_16463;
var statearr_16656_17845 = state_16463__$1;
(statearr_16656_17845[(2)] = inst_16280);

(statearr_16656_17845[(1)] = (117));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (147))){
var inst_16417 = (state_16463[(2)]);
var state_16463__$1 = state_16463;
if(cljs.core.truth_(inst_16417)){
var statearr_16657_17846 = state_16463__$1;
(statearr_16657_17846[(1)] = (151));

} else {
var statearr_16658_17847 = state_16463__$1;
(statearr_16658_17847[(1)] = (152));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (20))){
var inst_15905 = (state_16463[(2)]);
var _ = (function (){var statearr_16659 = state_16463;
(statearr_16659[(4)] = cljs.core.rest.call(null,(state_16463[(4)])));

return statearr_16659;
})();
var state_16463__$1 = (function (){var statearr_16660 = state_16463;
(statearr_16660[(39)] = inst_15905);

return statearr_16660;
})();
var statearr_16661_17848 = state_16463__$1;
(statearr_16661_17848[(2)] = true);

(statearr_16661_17848[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (52))){
var _ = (function (){var statearr_16662 = state_16463;
(statearr_16662[(4)] = cljs.core.cons.call(null,(55),(state_16463[(4)])));

return statearr_16662;
})();
var state_16463__$1 = state_16463;
var statearr_16663_17849 = state_16463__$1;
(statearr_16663_17849[(1)] = (56));



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (84))){
var inst_16150 = (state_16463[(2)]);
var inst_16151 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_16152 = null;
var inst_16153 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can progress cycle",inst_16152,inst_16150];
var inst_16154 = cljs.core.PersistentHashMap.fromArrays(inst_16151,inst_16153);
var inst_16155 = cljs.test.do_report.call(null,inst_16154);
var state_16463__$1 = state_16463;
var statearr_16665_17850 = state_16463__$1;
(statearr_16665_17850[(2)] = inst_16155);

(statearr_16665_17850[(1)] = (83));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (116))){
var inst_16272 = (state_16463[(31)]);
var inst_16282 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_16283 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),new cljs.core.Symbol(null,"cycle","cycle",(-1944070485),null),(1));
var inst_16284 = new cljs.core.Symbol(null,"not","not",(1044554643),null);
var inst_16285 = new cljs.core.Symbol(null,"=","=",(-1501502141),null);
var inst_16286 = cljs.core.cons.call(null,inst_16285,inst_16272);
var inst_16287 = (new cljs.core.List(null,inst_16286,null,(1),null));
var inst_16288 = (new cljs.core.List(null,inst_16284,inst_16287,(2),null));
var inst_16289 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),null,inst_16283,inst_16288];
var inst_16290 = cljs.core.PersistentHashMap.fromArrays(inst_16282,inst_16289);
var inst_16291 = cljs.test.do_report.call(null,inst_16290);
var state_16463__$1 = state_16463;
var statearr_16666_17851 = state_16463__$1;
(statearr_16666_17851[(2)] = inst_16291);

(statearr_16666_17851[(1)] = (117));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (148))){
var state_16463__$1 = state_16463;
var statearr_16667_17852 = state_16463__$1;
(statearr_16667_17852[(2)] = true);

(statearr_16667_17852[(1)] = (150));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (21))){
var _ = (function (){var statearr_16669 = state_16463;
(statearr_16669[(4)] = cljs.core.cons.call(null,(28),(state_16463[(4)])));

return statearr_16669;
})();
var inst_15937 = [new cljs.core.Keyword(null,"start_time","start_time",(889556682)),new cljs.core.Keyword(null,"budget","budget",(-405386281))];
var inst_15938 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15939 = [new cljs.core.Keyword(null,"quantity","quantity",(-1929050694)),new cljs.core.Keyword(null,"contract","contract",(798152745))];
var inst_15940 = ["500.1000 EFX",e2e.proposals.token_acc];
var inst_15941 = cljs.core.PersistentHashMap.fromArrays(inst_15939,inst_15940);
var inst_15942 = [inst_15941];
var inst_15943 = (new cljs.core.PersistentVector(null,(1),(5),inst_15938,inst_15942,null));
var inst_15944 = ["2021-01-01 12:00:00",inst_15943];
var inst_15945 = cljs.core.PersistentHashMap.fromArrays(inst_15937,inst_15944);
var inst_15946 = eos_cljs.core.transact.call(null,e2e.proposals.prop_acc,"addcycle",inst_15945);
var inst_15947 = cljs.core.async.interop.p__GT_c.call(null,inst_15946);
var state_16463__$1 = state_16463;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16463__$1,(29),inst_15947);
} else {
if((state_val_16464 === (53))){
var inst_16066 = (state_16463[(2)]);
var _ = (function (){var statearr_16670 = state_16463;
(statearr_16670[(4)] = cljs.core.rest.call(null,(state_16463[(4)])));

return statearr_16670;
})();
var state_16463__$1 = state_16463;
var statearr_16671_17853 = state_16463__$1;
(statearr_16671_17853[(2)] = inst_16066);

(statearr_16671_17853[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (85))){
var _ = (function (){var statearr_16672 = state_16463;
(statearr_16672[(4)] = cljs.core.rest.call(null,(state_16463[(4)])));

return statearr_16672;
})();
var state_16463__$1 = state_16463;
var ex16668 = (state_16463__$1[(2)]);
var statearr_16673_17854 = state_16463__$1;
(statearr_16673_17854[(5)] = ex16668);


var statearr_16674_17855 = state_16463__$1;
(statearr_16674_17855[(1)] = (84));

(statearr_16674_17855[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (117))){
var inst_16273 = (state_16463[(32)]);
var inst_16293 = (state_16463[(2)]);
var _ = (function (){var statearr_16675 = state_16463;
(statearr_16675[(4)] = cljs.core.rest.call(null,(state_16463[(4)])));

return statearr_16675;
})();
var state_16463__$1 = (function (){var statearr_16676 = state_16463;
(statearr_16676[(40)] = inst_16293);

return statearr_16676;
})();
var statearr_16677_17856 = state_16463__$1;
(statearr_16677_17856[(2)] = inst_16273);

(statearr_16677_17856[(1)] = (112));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (149))){
var state_16463__$1 = state_16463;
var statearr_16678_17857 = state_16463__$1;
(statearr_16678_17857[(2)] = false);

(statearr_16678_17857[(1)] = (150));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (22))){
var inst_15990 = (state_16463[(2)]);
var state_16463__$1 = (function (){var statearr_16680 = state_16463;
(statearr_16680[(41)] = inst_15990);

return statearr_16680;
})();
var statearr_16681_17858 = state_16463__$1;
(statearr_16681_17858[(2)] = null);

(statearr_16681_17858[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (54))){
var inst_16039 = (state_16463[(2)]);
var inst_16040 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_16041 = true;
var inst_16042 = [new cljs.core.Keyword(null,"error","error",(-978969032)),null,inst_16041,inst_16039];
var inst_16043 = cljs.core.PersistentHashMap.fromArrays(inst_16040,inst_16042);
var inst_16044 = cljs.test.do_report.call(null,inst_16043);
var state_16463__$1 = state_16463;
var statearr_16682_17859 = state_16463__$1;
(statearr_16682_17859[(2)] = inst_16044);

(statearr_16682_17859[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (86))){
var _ = (function (){var statearr_16683 = state_16463;
(statearr_16683[(4)] = cljs.core.rest.call(null,(state_16463[(4)])));

return statearr_16683;
})();
var state_16463__$1 = state_16463;
var ex16679 = (state_16463__$1[(2)]);
var statearr_16684_17860 = state_16463__$1;
(statearr_16684_17860[(5)] = ex16679);


if((ex16679 instanceof Error)){
var statearr_16685_17861 = state_16463__$1;
(statearr_16685_17861[(1)] = (81));

(statearr_16685_17861[(5)] = null);

} else {
throw ex16679;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (118))){
var inst_16301 = (state_16463[(42)]);
var inst_16301__$1 = (state_16463[(2)]);
var inst_16302 = (inst_16301__$1 instanceof cljs.core.ExceptionInfo);
var inst_16303 = cljs.core.ex_data.call(null,inst_16301__$1);
var inst_16304 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_16303);
var inst_16305 = cljs.core._EQ_.call(null,inst_16304,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_16306 = ((inst_16302) && (inst_16305));
var state_16463__$1 = (function (){var statearr_16686 = state_16463;
(statearr_16686[(42)] = inst_16301__$1);

return statearr_16686;
})();
if(cljs.core.truth_(inst_16306)){
var statearr_16687_17862 = state_16463__$1;
(statearr_16687_17862[(1)] = (119));

} else {
var statearr_16688_17863 = state_16463__$1;
(statearr_16688_17863[(1)] = (120));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (150))){
var inst_16414 = (state_16463[(2)]);
var state_16463__$1 = state_16463;
var statearr_16690_17864 = state_16463__$1;
(statearr_16690_17864[(2)] = inst_16414);

(statearr_16690_17864[(1)] = (147));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (23))){
var inst_15912 = (state_16463[(2)]);
var inst_15913 = cljs.core.prn.call(null,"test failed with ",inst_15912);
var state_16463__$1 = (function (){var statearr_16691 = state_16463;
(statearr_16691[(43)] = inst_15913);

return statearr_16691;
})();
var statearr_16692_17865 = state_16463__$1;
(statearr_16692_17865[(2)] = null);

(statearr_16692_17865[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (55))){
var _ = (function (){var statearr_16693 = state_16463;
(statearr_16693[(4)] = cljs.core.rest.call(null,(state_16463[(4)])));

return statearr_16693;
})();
var state_16463__$1 = state_16463;
var ex16689 = (state_16463__$1[(2)]);
var statearr_16694_17866 = state_16463__$1;
(statearr_16694_17866[(5)] = ex16689);


var statearr_16695_17867 = state_16463__$1;
(statearr_16695_17867[(1)] = (54));

(statearr_16695_17867[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (87))){
var inst_16177 = (state_16463[(44)]);
var inst_16177__$1 = (state_16463[(2)]);
var inst_16178 = (inst_16177__$1 instanceof cljs.core.ExceptionInfo);
var inst_16179 = cljs.core.ex_data.call(null,inst_16177__$1);
var inst_16180 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_16179);
var inst_16181 = cljs.core._EQ_.call(null,inst_16180,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_16182 = ((inst_16178) && (inst_16181));
var state_16463__$1 = (function (){var statearr_16696 = state_16463;
(statearr_16696[(44)] = inst_16177__$1);

return statearr_16696;
})();
if(cljs.core.truth_(inst_16182)){
var statearr_16697_17868 = state_16463__$1;
(statearr_16697_17868[(1)] = (88));

} else {
var statearr_16698_17869 = state_16463__$1;
(statearr_16698_17869[(1)] = (89));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (119))){
var inst_16301 = (state_16463[(42)]);
var inst_16308 = (function(){throw inst_16301})();
var state_16463__$1 = state_16463;
var statearr_16699_17870 = state_16463__$1;
(statearr_16699_17870[(2)] = inst_16308);

(statearr_16699_17870[(1)] = (121));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (151))){
var inst_16401 = (state_16463[(36)]);
var inst_16419 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16401);
var state_16463__$1 = state_16463;
var statearr_16700_17871 = state_16463__$1;
(statearr_16700_17871[(2)] = inst_16419);

(statearr_16700_17871[(1)] = (153));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (24))){
var _ = (function (){var statearr_16701 = state_16463;
(statearr_16701[(4)] = cljs.core.cons.call(null,(27),(state_16463[(4)])));

return statearr_16701;
})();
var inst_15925 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_15926 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),null];
var inst_15927 = cljs.core.PersistentHashMap.fromArrays(inst_15925,inst_15926);
var inst_15928 = cljs.test.do_report.call(null,inst_15927);
var ___$1 = (function (){var statearr_16702 = state_16463;
(statearr_16702[(4)] = cljs.core.rest.call(null,(state_16463[(4)])));

return statearr_16702;
})();
var state_16463__$1 = state_16463;
var statearr_16703_17872 = state_16463__$1;
(statearr_16703_17872[(2)] = inst_15928);

(statearr_16703_17872[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (56))){
var inst_16051 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_16052 = true;
var inst_16053 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),null,inst_16052,true];
var inst_16054 = cljs.core.PersistentHashMap.fromArrays(inst_16051,inst_16053);
var inst_16055 = cljs.test.do_report.call(null,inst_16054);
var state_16463__$1 = state_16463;
var statearr_16704_17873 = state_16463__$1;
(statearr_16704_17873[(2)] = inst_16055);

(statearr_16704_17873[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (88))){
var inst_16177 = (state_16463[(44)]);
var inst_16184 = (function(){throw inst_16177})();
var state_16463__$1 = state_16463;
var statearr_16705_17874 = state_16463__$1;
(statearr_16705_17874[(2)] = inst_16184);

(statearr_16705_17874[(1)] = (90));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (120))){
var inst_16301 = (state_16463[(42)]);
var state_16463__$1 = state_16463;
var statearr_16706_17875 = state_16463__$1;
(statearr_16706_17875[(2)] = inst_16301);

(statearr_16706_17875[(1)] = (121));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (152))){
var inst_16401 = (state_16463[(36)]);
var state_16463__$1 = state_16463;
var statearr_16707_17876 = state_16463__$1;
(statearr_16707_17876[(2)] = inst_16401);

(statearr_16707_17876[(1)] = (153));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (25))){
var inst_15931 = (state_16463[(2)]);
var state_16463__$1 = state_16463;
var statearr_16708_17877 = state_16463__$1;
(statearr_16708_17877[(2)] = inst_15931);

(statearr_16708_17877[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (57))){
var inst_16057 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_16058 = true;
var inst_16059 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),null,inst_16058,true];
var inst_16060 = cljs.core.PersistentHashMap.fromArrays(inst_16057,inst_16059);
var inst_16061 = cljs.test.do_report.call(null,inst_16060);
var state_16463__$1 = state_16463;
var statearr_16709_17878 = state_16463__$1;
(statearr_16709_17878[(2)] = inst_16061);

(statearr_16709_17878[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (89))){
var inst_16177 = (state_16463[(44)]);
var state_16463__$1 = state_16463;
var statearr_16710_17879 = state_16463__$1;
(statearr_16710_17879[(2)] = inst_16177);

(statearr_16710_17879[(1)] = (90));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (121))){
var inst_16311 = (state_16463[(2)]);
var state_16463__$1 = (function (){var statearr_16711 = state_16463;
(statearr_16711[(45)] = inst_16311);

return statearr_16711;
})();
var statearr_16712_17880 = state_16463__$1;
(statearr_16712_17880[(2)] = null);

(statearr_16712_17880[(1)] = (122));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (153))){
var inst_16422 = (state_16463[(2)]);
var inst_16423 = cljs.core.get.call(null,inst_16422,"current_cycle");
var state_16463__$1 = (function (){var statearr_16713 = state_16463;
(statearr_16713[(46)] = inst_16423);

return statearr_16713;
})();
var statearr_16714_17881 = state_16463__$1;
(statearr_16714_17881[(2)] = null);

(statearr_16714_17881[(1)] = (154));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (26))){
var inst_15914 = (state_16463[(2)]);
var inst_15915 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_15916 = null;
var inst_15917 = [new cljs.core.Keyword(null,"error","error",(-978969032)),null,inst_15916,inst_15914];
var inst_15918 = cljs.core.PersistentHashMap.fromArrays(inst_15915,inst_15917);
var inst_15919 = cljs.test.do_report.call(null,inst_15918);
var state_16463__$1 = state_16463;
var statearr_16715_17882 = state_16463__$1;
(statearr_16715_17882[(2)] = inst_15919);

(statearr_16715_17882[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (58))){
var inst_16063 = (state_16463[(2)]);
var _ = (function (){var statearr_16716 = state_16463;
(statearr_16716[(4)] = cljs.core.rest.call(null,(state_16463[(4)])));

return statearr_16716;
})();
var state_16463__$1 = (function (){var statearr_16717 = state_16463;
(statearr_16717[(47)] = inst_16063);

return statearr_16717;
})();
var statearr_16718_17883 = state_16463__$1;
(statearr_16718_17883[(2)] = true);

(statearr_16718_17883[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (90))){
var inst_16187 = (state_16463[(2)]);
var state_16463__$1 = (function (){var statearr_16719 = state_16463;
(statearr_16719[(48)] = inst_16187);

return statearr_16719;
})();
var statearr_16720_17884 = state_16463__$1;
(statearr_16720_17884[(2)] = null);

(statearr_16720_17884[(1)] = (91));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (122))){
var _ = (function (){var statearr_16722 = state_16463;
(statearr_16722[(4)] = cljs.core.cons.call(null,(129),(state_16463[(4)])));

return statearr_16722;
})();
var inst_16337 = cljs.core.PersistentHashMap.EMPTY;
var inst_16338 = eos_cljs.core.transact.call(null,e2e.proposals.prop_acc,"cycleupdate",inst_16337);
var inst_16339 = cljs.core.async.interop.p__GT_c.call(null,inst_16338);
var state_16463__$1 = state_16463;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16463__$1,(130),inst_16339);
} else {
if((state_val_16464 === (154))){
var inst_16423 = (state_16463[(46)]);
var inst_16436 = (state_16463[(49)]);
var inst_16437 = (state_16463[(8)]);
var _ = (function (){var statearr_16723 = state_16463;
(statearr_16723[(4)] = cljs.core.cons.call(null,(157),(state_16463[(4)])));

return statearr_16723;
})();
var inst_16435 = (new cljs.core.List(null,(2),null,(1),null));
var inst_16436__$1 = (new cljs.core.List(null,inst_16423,inst_16435,(2),null));
var inst_16437__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_16436__$1);
var state_16463__$1 = (function (){var statearr_16724 = state_16463;
(statearr_16724[(49)] = inst_16436__$1);

(statearr_16724[(8)] = inst_16437__$1);

return statearr_16724;
})();
if(cljs.core.truth_(inst_16437__$1)){
var statearr_16725_17885 = state_16463__$1;
(statearr_16725_17885[(1)] = (158));

} else {
var statearr_16726_17886 = state_16463__$1;
(statearr_16726_17886[(1)] = (159));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (27))){
var _ = (function (){var statearr_16727 = state_16463;
(statearr_16727[(4)] = cljs.core.rest.call(null,(state_16463[(4)])));

return statearr_16727;
})();
var state_16463__$1 = state_16463;
var ex16721 = (state_16463__$1[(2)]);
var statearr_16728_17887 = state_16463__$1;
(statearr_16728_17887[(5)] = ex16721);


var statearr_16729_17888 = state_16463__$1;
(statearr_16729_17888[(1)] = (26));

(statearr_16729_17888[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (59))){
var inst_16077 = (state_16463[(50)]);
var inst_16077__$1 = (state_16463[(2)]);
var inst_16078 = (inst_16077__$1 instanceof cljs.core.ExceptionInfo);
var inst_16079 = cljs.core.ex_data.call(null,inst_16077__$1);
var inst_16080 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_16079);
var inst_16081 = cljs.core._EQ_.call(null,inst_16080,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_16082 = ((inst_16078) && (inst_16081));
var state_16463__$1 = (function (){var statearr_16730 = state_16463;
(statearr_16730[(50)] = inst_16077__$1);

return statearr_16730;
})();
if(cljs.core.truth_(inst_16082)){
var statearr_16731_17889 = state_16463__$1;
(statearr_16731_17889[(1)] = (60));

} else {
var statearr_16732_17890 = state_16463__$1;
(statearr_16732_17890[(1)] = (61));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (91))){
var _ = (function (){var statearr_16733 = state_16463;
(statearr_16733[(4)] = cljs.core.cons.call(null,(94),(state_16463[(4)])));

return statearr_16733;
})();
var state_16463__$1 = state_16463;
var statearr_16734_17891 = state_16463__$1;
(statearr_16734_17891[(1)] = (95));



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (123))){
var inst_16382 = (state_16463[(2)]);
var inst_16387 = eos_cljs.core.get_table_rows.call(null,e2e.proposals.prop_acc,e2e.proposals.prop_acc,"config");
var inst_16388 = cljs.core.async.interop.p__GT_c.call(null,inst_16387);
var state_16463__$1 = (function (){var statearr_16737 = state_16463;
(statearr_16737[(51)] = inst_16382);

return statearr_16737;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16463__$1,(141),inst_16388);
} else {
if((state_val_16464 === (155))){
var inst_16460 = (state_16463[(2)]);
var inst_16461 = done.call(null);
var state_16463__$1 = (function (){var statearr_16738 = state_16463;
(statearr_16738[(52)] = inst_16460);

return statearr_16738;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16463__$1,inst_16461);
} else {
if((state_val_16464 === (28))){
var _ = (function (){var statearr_16739 = state_16463;
(statearr_16739[(4)] = cljs.core.rest.call(null,(state_16463[(4)])));

return statearr_16739;
})();
var state_16463__$1 = state_16463;
var ex16736 = (state_16463__$1[(2)]);
var statearr_16740_17892 = state_16463__$1;
(statearr_16740_17892[(5)] = ex16736);


if((ex16736 instanceof Error)){
var statearr_16741_17893 = state_16463__$1;
(statearr_16741_17893[(1)] = (23));

(statearr_16741_17893[(5)] = null);

} else {
throw ex16736;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (60))){
var inst_16077 = (state_16463[(50)]);
var inst_16084 = (function(){throw inst_16077})();
var state_16463__$1 = state_16463;
var statearr_16742_17894 = state_16463__$1;
(statearr_16742_17894[(2)] = inst_16084);

(statearr_16742_17894[(1)] = (62));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (92))){
var inst_16215 = (state_16463[(2)]);
var _ = (function (){var statearr_16743 = state_16463;
(statearr_16743[(4)] = cljs.core.rest.call(null,(state_16463[(4)])));

return statearr_16743;
})();
var state_16463__$1 = state_16463;
var statearr_16744_17895 = state_16463__$1;
(statearr_16744_17895[(2)] = inst_16215);

(statearr_16744_17895[(1)] = (80));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (124))){
var inst_16312 = (state_16463[(2)]);
var inst_16313 = cljs.core.prn.call(null,"test failed with ",inst_16312);
var state_16463__$1 = (function (){var statearr_16745 = state_16463;
(statearr_16745[(53)] = inst_16313);

return statearr_16745;
})();
var statearr_16746_17896 = state_16463__$1;
(statearr_16746_17896[(2)] = null);

(statearr_16746_17896[(1)] = (125));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (156))){
var inst_16424 = (state_16463[(2)]);
var inst_16425 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_16426 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),new cljs.core.Symbol(null,"cycle","cycle",(-1944070485),null),(2));
var inst_16427 = [new cljs.core.Keyword(null,"error","error",(-978969032)),null,inst_16426,inst_16424];
var inst_16428 = cljs.core.PersistentHashMap.fromArrays(inst_16425,inst_16427);
var inst_16429 = cljs.test.do_report.call(null,inst_16428);
var state_16463__$1 = state_16463;
var statearr_16747_17897 = state_16463__$1;
(statearr_16747_17897[(2)] = inst_16429);

(statearr_16747_17897[(1)] = (155));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (29))){
var inst_15949 = (state_16463[(54)]);
var inst_15949__$1 = (state_16463[(2)]);
var inst_15950 = (inst_15949__$1 instanceof cljs.core.ExceptionInfo);
var inst_15951 = cljs.core.ex_data.call(null,inst_15949__$1);
var inst_15952 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_15951);
var inst_15953 = cljs.core._EQ_.call(null,inst_15952,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_15954 = ((inst_15950) && (inst_15953));
var state_16463__$1 = (function (){var statearr_16748 = state_16463;
(statearr_16748[(54)] = inst_15949__$1);

return statearr_16748;
})();
if(cljs.core.truth_(inst_15954)){
var statearr_16749_17898 = state_16463__$1;
(statearr_16749_17898[(1)] = (30));

} else {
var statearr_16750_17899 = state_16463__$1;
(statearr_16750_17899[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (61))){
var inst_16077 = (state_16463[(50)]);
var state_16463__$1 = state_16463;
var statearr_16751_17900 = state_16463__$1;
(statearr_16751_17900[(2)] = inst_16077);

(statearr_16751_17900[(1)] = (62));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (93))){
var inst_16188 = (state_16463[(2)]);
var inst_16189 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_16190 = true;
var inst_16191 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can progress cycle",inst_16190,inst_16188];
var inst_16192 = cljs.core.PersistentHashMap.fromArrays(inst_16189,inst_16191);
var inst_16193 = cljs.test.do_report.call(null,inst_16192);
var state_16463__$1 = state_16463;
var statearr_16753_17901 = state_16463__$1;
(statearr_16753_17901[(2)] = inst_16193);

(statearr_16753_17901[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (125))){
var _ = (function (){var statearr_16754 = state_16463;
(statearr_16754[(4)] = cljs.core.cons.call(null,(128),(state_16463[(4)])));

return statearr_16754;
})();
var inst_16325 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_16326 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can progress cycle"];
var inst_16327 = cljs.core.PersistentHashMap.fromArrays(inst_16325,inst_16326);
var inst_16328 = cljs.test.do_report.call(null,inst_16327);
var ___$1 = (function (){var statearr_16755 = state_16463;
(statearr_16755[(4)] = cljs.core.rest.call(null,(state_16463[(4)])));

return statearr_16755;
})();
var state_16463__$1 = state_16463;
var statearr_16756_17902 = state_16463__$1;
(statearr_16756_17902[(2)] = inst_16328);

(statearr_16756_17902[(1)] = (126));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (157))){
var _ = (function (){var statearr_16757 = state_16463;
(statearr_16757[(4)] = cljs.core.rest.call(null,(state_16463[(4)])));

return statearr_16757;
})();
var state_16463__$1 = state_16463;
var ex16752 = (state_16463__$1[(2)]);
var statearr_16758_17903 = state_16463__$1;
(statearr_16758_17903[(5)] = ex16752);


var statearr_16759_17904 = state_16463__$1;
(statearr_16759_17904[(1)] = (156));

(statearr_16759_17904[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (30))){
var inst_15949 = (state_16463[(54)]);
var inst_15956 = (function(){throw inst_15949})();
var state_16463__$1 = state_16463;
var statearr_16761_17905 = state_16463__$1;
(statearr_16761_17905[(2)] = inst_15956);

(statearr_16761_17905[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (62))){
var inst_16088 = (state_16463[(15)]);
var inst_16087 = (state_16463[(2)]);
var inst_16088__$1 = cljs.core.nth.call(null,inst_16087,(0),null);
var inst_16090 = (inst_16088__$1 == null);
var inst_16091 = cljs.core.not.call(null,inst_16090);
var state_16463__$1 = (function (){var statearr_16762 = state_16463;
(statearr_16762[(15)] = inst_16088__$1);

return statearr_16762;
})();
if(inst_16091){
var statearr_16763_17906 = state_16463__$1;
(statearr_16763_17906[(1)] = (63));

} else {
var statearr_16764_17907 = state_16463__$1;
(statearr_16764_17907[(1)] = (64));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (94))){
var _ = (function (){var statearr_16765 = state_16463;
(statearr_16765[(4)] = cljs.core.rest.call(null,(state_16463[(4)])));

return statearr_16765;
})();
var state_16463__$1 = state_16463;
var ex16760 = (state_16463__$1[(2)]);
var statearr_16766_17908 = state_16463__$1;
(statearr_16766_17908[(5)] = ex16760);


var statearr_16767_17909 = state_16463__$1;
(statearr_16767_17909[(1)] = (93));

(statearr_16767_17909[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (126))){
var inst_16331 = (state_16463[(2)]);
var state_16463__$1 = state_16463;
var statearr_16768_17910 = state_16463__$1;
(statearr_16768_17910[(2)] = inst_16331);

(statearr_16768_17910[(1)] = (123));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (158))){
var inst_16436 = (state_16463[(49)]);
var inst_16439 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_16440 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),new cljs.core.Symbol(null,"cycle","cycle",(-1944070485),null),(2));
var inst_16441 = cljs.core.cons.call(null,cljs.core._EQ_,inst_16436);
var inst_16442 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),null,inst_16440,inst_16441];
var inst_16443 = cljs.core.PersistentHashMap.fromArrays(inst_16439,inst_16442);
var inst_16444 = cljs.test.do_report.call(null,inst_16443);
var state_16463__$1 = state_16463;
var statearr_16769_17911 = state_16463__$1;
(statearr_16769_17911[(2)] = inst_16444);

(statearr_16769_17911[(1)] = (160));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (31))){
var inst_15949 = (state_16463[(54)]);
var state_16463__$1 = state_16463;
var statearr_16770_17912 = state_16463__$1;
(statearr_16770_17912[(2)] = inst_15949);

(statearr_16770_17912[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (63))){
var inst_16088 = (state_16463[(15)]);
var inst_16093 = inst_16088.cljs$lang$protocol_mask$partition0$;
var inst_16094 = (inst_16093 & (64));
var inst_16095 = inst_16088.cljs$core$ISeq$;
var inst_16096 = (cljs.core.PROTOCOL_SENTINEL === inst_16095);
var inst_16097 = ((inst_16094) || (inst_16096));
var state_16463__$1 = state_16463;
if(cljs.core.truth_(inst_16097)){
var statearr_16771_17913 = state_16463__$1;
(statearr_16771_17913[(1)] = (66));

} else {
var statearr_16772_17914 = state_16463__$1;
(statearr_16772_17914[(1)] = (67));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (95))){
var inst_16200 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_16201 = true;
var inst_16202 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"can progress cycle",inst_16201,true];
var inst_16203 = cljs.core.PersistentHashMap.fromArrays(inst_16200,inst_16202);
var inst_16204 = cljs.test.do_report.call(null,inst_16203);
var state_16463__$1 = state_16463;
var statearr_16773_17915 = state_16463__$1;
(statearr_16773_17915[(2)] = inst_16204);

(statearr_16773_17915[(1)] = (97));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (127))){
var inst_16314 = (state_16463[(2)]);
var inst_16315 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_16316 = null;
var inst_16317 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can progress cycle",inst_16316,inst_16314];
var inst_16318 = cljs.core.PersistentHashMap.fromArrays(inst_16315,inst_16317);
var inst_16319 = cljs.test.do_report.call(null,inst_16318);
var state_16463__$1 = state_16463;
var statearr_16774_17916 = state_16463__$1;
(statearr_16774_17916[(2)] = inst_16319);

(statearr_16774_17916[(1)] = (126));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_16464 === (159))){
var inst_16436 = (state_16463[(49)]);
var inst_16446 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_16447 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),new cljs.core.Symbol(null,"cycle","cycle",(-1944070485),null),(2));
var inst_16448 = new cljs.core.Symbol(null,"not","not",(1044554643),null);
var inst_16449 = new cljs.core.Symbol(null,"=","=",(-1501502141),null);
var inst_16450 = cljs.core.cons.call(null,inst_16449,inst_16436);
var inst_16451 = (new cljs.core.List(null,inst_16450,null,(1),null));
var inst_16452 = (new cljs.core.List(null,inst_16448,inst_16451,(2),null));
var inst_16453 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),null,inst_16447,inst_16452];
var inst_16454 = cljs.core.PersistentHashMap.fromArrays(inst_16446,inst_16453);
var inst_16455 = cljs.test.do_report.call(null,inst_16454);
var state_16463__$1 = state_16463;
var statearr_16775_17917 = state_16463__$1;
(statearr_16775_17917[(2)] = inst_16455);

(statearr_16775_17917[(1)] = (160));


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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
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
var e2e$proposals$state_machine__15__auto__ = null;
var e2e$proposals$state_machine__15__auto____0 = (function (){
var statearr_16776 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16776[(0)] = e2e$proposals$state_machine__15__auto__);

(statearr_16776[(1)] = (1));

return statearr_16776;
});
var e2e$proposals$state_machine__15__auto____1 = (function (state_16463){
while(true){
var ret_value__16__auto__ = (function (){try{while(true){
var result__17__auto__ = switch__14__auto__.call(null,state_16463);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__17__auto__;
}
break;
}
}catch (e16777){var ex__18__auto__ = e16777;
var statearr_16778_17918 = state_16463;
(statearr_16778_17918[(2)] = ex__18__auto__);


if(cljs.core.seq.call(null,(state_16463[(4)]))){
var statearr_16779_17919 = state_16463;
(statearr_16779_17919[(1)] = cljs.core.first.call(null,(state_16463[(4)])));

} else {
throw ex__18__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__17920 = state_16463;
state_16463 = G__17920;
continue;
} else {
return ret_value__16__auto__;
}
break;
}
});
e2e$proposals$state_machine__15__auto__ = function(state_16463){
switch(arguments.length){
case 0:
return e2e$proposals$state_machine__15__auto____0.call(this);
case 1:
return e2e$proposals$state_machine__15__auto____1.call(this,state_16463);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
e2e$proposals$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$0 = e2e$proposals$state_machine__15__auto____0;
e2e$proposals$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$1 = e2e$proposals$state_machine__15__auto____1;
return e2e$proposals$state_machine__15__auto__;
})()
;})(switch__14__auto__,c__19__auto__,___192__auto__,self____$1))
})();
var state__21__auto__ = (function (){var statearr_16780 = f__20__auto__.call(null);
(statearr_16780[(6)] = c__19__auto__);

return statearr_16780;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21__auto__);
});})(c__19__auto__,___192__auto__,self____$1))
);

return c__19__auto__;
});

e2e.proposals.t_e2e$proposals15829.prototype.apply = (function (self__,args15832){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args15832)));
});

e2e.proposals.t_e2e$proposals15829.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___192__auto__ = this;
var c__19__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19__auto__,___192__auto__){
return (function (){
var f__20__auto__ = (function (){var switch__14__auto__ = ((function (c__19__auto__,___192__auto__){
return (function (state_17411){
var state_val_17412 = (state_17411[(1)]);
if((state_val_17412 === (32))){
var inst_16907 = (state_17411[(2)]);
var state_17411__$1 = (function (){var statearr_17414 = state_17411;
(statearr_17414[(7)] = inst_16907);

return statearr_17414;
})();
var statearr_17415_17921 = state_17411__$1;
(statearr_17415_17921[(2)] = null);

(statearr_17415_17921[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (64))){
var state_17411__$1 = state_17411;
var statearr_17416_17922 = state_17411__$1;
(statearr_17416_17922[(2)] = false);

(statearr_17416_17922[(1)] = (65));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (96))){
var inst_17154 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_17155 = true;
var inst_17156 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can progress cycle",inst_17155,true];
var inst_17157 = cljs.core.PersistentHashMap.fromArrays(inst_17154,inst_17156);
var inst_17158 = cljs.test.do_report.call(null,inst_17157);
var state_17411__$1 = state_17411;
var statearr_17417_17923 = state_17411__$1;
(statearr_17417_17923[(2)] = inst_17158);

(statearr_17417_17923[(1)] = (97));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (128))){
var _ = (function (){var statearr_17418 = state_17411;
(statearr_17418[(4)] = cljs.core.rest.call(null,(state_17411[(4)])));

return statearr_17418;
})();
var state_17411__$1 = state_17411;
var ex17413 = (state_17411__$1[(2)]);
var statearr_17419_17924 = state_17411__$1;
(statearr_17419_17924[(5)] = ex17413);


var statearr_17420_17925 = state_17411__$1;
(statearr_17420_17925[(1)] = (127));

(statearr_17420_17925[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (160))){
var inst_17385 = (state_17411[(8)]);
var inst_17405 = (state_17411[(2)]);
var _ = (function (){var statearr_17421 = state_17411;
(statearr_17421[(4)] = cljs.core.rest.call(null,(state_17411[(4)])));

return statearr_17421;
})();
var state_17411__$1 = (function (){var statearr_17422 = state_17411;
(statearr_17422[(9)] = inst_17405);

return statearr_17422;
})();
var statearr_17423_17926 = state_17411__$1;
(statearr_17423_17926[(2)] = inst_17385);

(statearr_17423_17926[(1)] = (155));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (1))){
var state_17411__$1 = state_17411;
var statearr_17424_17927 = state_17411__$1;
(statearr_17424_17927[(2)] = null);

(statearr_17424_17927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (33))){
var _ = (function (){var statearr_17425 = state_17411;
(statearr_17425[(4)] = cljs.core.cons.call(null,(36),(state_17411[(4)])));

return statearr_17425;
})();
var state_17411__$1 = state_17411;
var statearr_17426_17928 = state_17411__$1;
(statearr_17426_17928[(1)] = (37));



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (65))){
var inst_17052 = (state_17411[(2)]);
var state_17411__$1 = state_17411;
if(cljs.core.truth_(inst_17052)){
var statearr_17429_17929 = state_17411__$1;
(statearr_17429_17929[(1)] = (69));

} else {
var statearr_17430_17930 = state_17411__$1;
(statearr_17430_17930[(1)] = (70));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (97))){
var inst_17160 = (state_17411[(2)]);
var _ = (function (){var statearr_17431 = state_17411;
(statearr_17431[(4)] = cljs.core.rest.call(null,(state_17411[(4)])));

return statearr_17431;
})();
var state_17411__$1 = (function (){var statearr_17432 = state_17411;
(statearr_17432[(10)] = inst_17160);

return statearr_17432;
})();
var statearr_17433_17931 = state_17411__$1;
(statearr_17433_17931[(2)] = true);

(statearr_17433_17931[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (129))){
var _ = (function (){var statearr_17434 = state_17411;
(statearr_17434[(4)] = cljs.core.rest.call(null,(state_17411[(4)])));

return statearr_17434;
})();
var state_17411__$1 = state_17411;
var ex17428 = (state_17411__$1[(2)]);
var statearr_17435_17932 = state_17411__$1;
(statearr_17435_17932[(5)] = ex17428);


if((ex17428 instanceof Error)){
var statearr_17436_17933 = state_17411__$1;
(statearr_17436_17933[(1)] = (124));

(statearr_17436_17933[(5)] = null);

} else {
throw ex17428;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (2))){
var _ = (function (){var statearr_17437 = state_17411;
(statearr_17437[(4)] = cljs.core.cons.call(null,(9),(state_17411[(4)])));

return statearr_17437;
})();
var inst_16806 = [new cljs.core.Keyword(null,"start_time","start_time",(889556682)),new cljs.core.Keyword(null,"budget","budget",(-405386281))];
var inst_16807 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16808 = [new cljs.core.Keyword(null,"quantity","quantity",(-1929050694)),new cljs.core.Keyword(null,"contract","contract",(798152745))];
var inst_16809 = ["326000.0000 EFX",e2e.proposals.token_acc];
var inst_16810 = cljs.core.PersistentHashMap.fromArrays(inst_16808,inst_16809);
var inst_16811 = [inst_16810];
var inst_16812 = (new cljs.core.PersistentVector(null,(1),(5),inst_16807,inst_16811,null));
var inst_16813 = ["2021-01-01 12:00:00",inst_16812];
var inst_16814 = cljs.core.PersistentHashMap.fromArrays(inst_16806,inst_16813);
var inst_16815 = eos_cljs.core.transact.call(null,e2e.proposals.prop_acc,"addcycle",inst_16814);
var inst_16816 = cljs.core.async.interop.p__GT_c.call(null,inst_16815);
var state_17411__$1 = state_17411;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17411__$1,(10),inst_16816);
} else {
if((state_val_17412 === (34))){
var inst_16935 = (state_17411[(2)]);
var _ = (function (){var statearr_17438 = state_17411;
(statearr_17438[(4)] = cljs.core.rest.call(null,(state_17411[(4)])));

return statearr_17438;
})();
var state_17411__$1 = state_17411;
var statearr_17439_17934 = state_17411__$1;
(statearr_17439_17934[(2)] = inst_16935);

(statearr_17439_17934[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (66))){
var state_17411__$1 = state_17411;
var statearr_17440_17935 = state_17411__$1;
(statearr_17440_17935[(2)] = true);

(statearr_17440_17935[(1)] = (68));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (98))){
var inst_17174 = (state_17411[(11)]);
var inst_17174__$1 = (state_17411[(2)]);
var inst_17175 = (inst_17174__$1 instanceof cljs.core.ExceptionInfo);
var inst_17176 = cljs.core.ex_data.call(null,inst_17174__$1);
var inst_17177 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_17176);
var inst_17178 = cljs.core._EQ_.call(null,inst_17177,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_17179 = ((inst_17175) && (inst_17178));
var state_17411__$1 = (function (){var statearr_17441 = state_17411;
(statearr_17441[(11)] = inst_17174__$1);

return statearr_17441;
})();
if(cljs.core.truth_(inst_17179)){
var statearr_17442_17936 = state_17411__$1;
(statearr_17442_17936[(1)] = (99));

} else {
var statearr_17443_17937 = state_17411__$1;
(statearr_17443_17937[(1)] = (100));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (130))){
var inst_17289 = (state_17411[(12)]);
var inst_17289__$1 = (state_17411[(2)]);
var inst_17290 = (inst_17289__$1 instanceof cljs.core.ExceptionInfo);
var inst_17291 = cljs.core.ex_data.call(null,inst_17289__$1);
var inst_17292 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_17291);
var inst_17293 = cljs.core._EQ_.call(null,inst_17292,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_17294 = ((inst_17290) && (inst_17293));
var state_17411__$1 = (function (){var statearr_17444 = state_17411;
(statearr_17444[(12)] = inst_17289__$1);

return statearr_17444;
})();
if(cljs.core.truth_(inst_17294)){
var statearr_17445_17938 = state_17411__$1;
(statearr_17445_17938[(1)] = (131));

} else {
var statearr_17446_17939 = state_17411__$1;
(statearr_17446_17939[(1)] = (132));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (3))){
var inst_16859 = (state_17411[(2)]);
var state_17411__$1 = (function (){var statearr_17447 = state_17411;
(statearr_17447[(13)] = inst_16859);

return statearr_17447;
})();
var statearr_17448_17940 = state_17411__$1;
(statearr_17448_17940[(2)] = null);

(statearr_17448_17940[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (35))){
var inst_16908 = (state_17411[(2)]);
var inst_16909 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_16910 = true;
var inst_16911 = [new cljs.core.Keyword(null,"error","error",(-978969032)),null,inst_16910,inst_16908];
var inst_16912 = cljs.core.PersistentHashMap.fromArrays(inst_16909,inst_16911);
var inst_16913 = cljs.test.do_report.call(null,inst_16912);
var state_17411__$1 = state_17411;
var statearr_17449_17941 = state_17411__$1;
(statearr_17449_17941[(2)] = inst_16913);

(statearr_17449_17941[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (67))){
var state_17411__$1 = state_17411;
var statearr_17450_17942 = state_17411__$1;
(statearr_17450_17942[(2)] = false);

(statearr_17450_17942[(1)] = (68));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (99))){
var inst_17174 = (state_17411[(11)]);
var inst_17181 = (function(){throw inst_17174})();
var state_17411__$1 = state_17411;
var statearr_17451_17943 = state_17411__$1;
(statearr_17451_17943[(2)] = inst_17181);

(statearr_17451_17943[(1)] = (101));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (131))){
var inst_17289 = (state_17411[(12)]);
var inst_17296 = (function(){throw inst_17289})();
var state_17411__$1 = state_17411;
var statearr_17453_17944 = state_17411__$1;
(statearr_17453_17944[(2)] = inst_17296);

(statearr_17453_17944[(1)] = (133));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (4))){
var inst_16781 = (state_17411[(2)]);
var inst_16782 = cljs.core.prn.call(null,"test failed with ",inst_16781);
var state_17411__$1 = (function (){var statearr_17454 = state_17411;
(statearr_17454[(14)] = inst_16782);

return statearr_17454;
})();
var statearr_17455_17945 = state_17411__$1;
(statearr_17455_17945[(2)] = null);

(statearr_17455_17945[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (36))){
var _ = (function (){var statearr_17456 = state_17411;
(statearr_17456[(4)] = cljs.core.rest.call(null,(state_17411[(4)])));

return statearr_17456;
})();
var state_17411__$1 = state_17411;
var ex17452 = (state_17411__$1[(2)]);
var statearr_17457_17946 = state_17411__$1;
(statearr_17457_17946[(5)] = ex17452);


var statearr_17458_17947 = state_17411__$1;
(statearr_17458_17947[(1)] = (35));

(statearr_17458_17947[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (68))){
var inst_17049 = (state_17411[(2)]);
var state_17411__$1 = state_17411;
var statearr_17459_17948 = state_17411__$1;
(statearr_17459_17948[(2)] = inst_17049);

(statearr_17459_17948[(1)] = (65));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (100))){
var inst_17174 = (state_17411[(11)]);
var state_17411__$1 = state_17411;
var statearr_17460_17949 = state_17411__$1;
(statearr_17460_17949[(2)] = inst_17174);

(statearr_17460_17949[(1)] = (101));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (132))){
var inst_17289 = (state_17411[(12)]);
var state_17411__$1 = state_17411;
var statearr_17461_17950 = state_17411__$1;
(statearr_17461_17950[(2)] = inst_17289);

(statearr_17461_17950[(1)] = (133));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (5))){
var _ = (function (){var statearr_17462 = state_17411;
(statearr_17462[(4)] = cljs.core.cons.call(null,(8),(state_17411[(4)])));

return statearr_17462;
})();
var inst_16794 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_16795 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),null];
var inst_16796 = cljs.core.PersistentHashMap.fromArrays(inst_16794,inst_16795);
var inst_16797 = cljs.test.do_report.call(null,inst_16796);
var ___$1 = (function (){var statearr_17463 = state_17411;
(statearr_17463[(4)] = cljs.core.rest.call(null,(state_17411[(4)])));

return statearr_17463;
})();
var state_17411__$1 = state_17411;
var statearr_17464_17951 = state_17411__$1;
(statearr_17464_17951[(2)] = inst_16797);

(statearr_17464_17951[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (37))){
var inst_16920 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_16921 = true;
var inst_16922 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),null,inst_16921,true];
var inst_16923 = cljs.core.PersistentHashMap.fromArrays(inst_16920,inst_16922);
var inst_16924 = cljs.test.do_report.call(null,inst_16923);
var state_17411__$1 = state_17411;
var statearr_17465_17952 = state_17411__$1;
(statearr_17465_17952[(2)] = inst_16924);

(statearr_17465_17952[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (69))){
var inst_17036 = (state_17411[(15)]);
var inst_17054 = cljs.core.apply.call(null,cljs.core.hash_map,inst_17036);
var state_17411__$1 = state_17411;
var statearr_17466_17953 = state_17411__$1;
(statearr_17466_17953[(2)] = inst_17054);

(statearr_17466_17953[(1)] = (71));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (101))){
var inst_17185 = (state_17411[(16)]);
var inst_17184 = (state_17411[(2)]);
var inst_17185__$1 = cljs.core.nth.call(null,inst_17184,(0),null);
var inst_17187 = (inst_17185__$1 == null);
var inst_17188 = cljs.core.not.call(null,inst_17187);
var state_17411__$1 = (function (){var statearr_17467 = state_17411;
(statearr_17467[(16)] = inst_17185__$1);

return statearr_17467;
})();
if(inst_17188){
var statearr_17468_17954 = state_17411__$1;
(statearr_17468_17954[(1)] = (102));

} else {
var statearr_17469_17955 = state_17411__$1;
(statearr_17469_17955[(1)] = (103));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (133))){
var inst_17299 = (state_17411[(2)]);
var state_17411__$1 = (function (){var statearr_17470 = state_17411;
(statearr_17470[(17)] = inst_17299);

return statearr_17470;
})();
var statearr_17471_17956 = state_17411__$1;
(statearr_17471_17956[(2)] = null);

(statearr_17471_17956[(1)] = (134));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (6))){
var inst_16800 = (state_17411[(2)]);
var state_17411__$1 = state_17411;
var statearr_17472_17957 = state_17411__$1;
(statearr_17472_17957[(2)] = inst_16800);

(statearr_17472_17957[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (38))){
var inst_16926 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_16927 = true;
var inst_16928 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),null,inst_16927,true];
var inst_16929 = cljs.core.PersistentHashMap.fromArrays(inst_16926,inst_16928);
var inst_16930 = cljs.test.do_report.call(null,inst_16929);
var state_17411__$1 = state_17411;
var statearr_17473_17958 = state_17411__$1;
(statearr_17473_17958[(2)] = inst_16930);

(statearr_17473_17958[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (70))){
var inst_17036 = (state_17411[(15)]);
var state_17411__$1 = state_17411;
var statearr_17474_17959 = state_17411__$1;
(statearr_17474_17959[(2)] = inst_17036);

(statearr_17474_17959[(1)] = (71));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (102))){
var inst_17185 = (state_17411[(16)]);
var inst_17190 = inst_17185.cljs$lang$protocol_mask$partition0$;
var inst_17191 = (inst_17190 & (64));
var inst_17192 = inst_17185.cljs$core$ISeq$;
var inst_17193 = (cljs.core.PROTOCOL_SENTINEL === inst_17192);
var inst_17194 = ((inst_17191) || (inst_17193));
var state_17411__$1 = state_17411;
if(cljs.core.truth_(inst_17194)){
var statearr_17475_17960 = state_17411__$1;
(statearr_17475_17960[(1)] = (105));

} else {
var statearr_17476_17961 = state_17411__$1;
(statearr_17476_17961[(1)] = (106));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (134))){
var _ = (function (){var statearr_17477 = state_17411;
(statearr_17477[(4)] = cljs.core.cons.call(null,(137),(state_17411[(4)])));

return statearr_17477;
})();
var state_17411__$1 = state_17411;
var statearr_17478_17962 = state_17411__$1;
(statearr_17478_17962[(1)] = (138));



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (7))){
var inst_16783 = (state_17411[(2)]);
var inst_16784 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_16785 = null;
var inst_16786 = [new cljs.core.Keyword(null,"error","error",(-978969032)),null,inst_16785,inst_16783];
var inst_16787 = cljs.core.PersistentHashMap.fromArrays(inst_16784,inst_16786);
var inst_16788 = cljs.test.do_report.call(null,inst_16787);
var state_17411__$1 = state_17411;
var statearr_17480_17963 = state_17411__$1;
(statearr_17480_17963[(2)] = inst_16788);

(statearr_17480_17963[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (39))){
var inst_16932 = (state_17411[(2)]);
var _ = (function (){var statearr_17481 = state_17411;
(statearr_17481[(4)] = cljs.core.rest.call(null,(state_17411[(4)])));

return statearr_17481;
})();
var state_17411__$1 = (function (){var statearr_17482 = state_17411;
(statearr_17482[(18)] = inst_16932);

return statearr_17482;
})();
var statearr_17483_17964 = state_17411__$1;
(statearr_17483_17964[(2)] = true);

(statearr_17483_17964[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (71))){
var inst_17057 = (state_17411[(2)]);
var inst_17058 = cljs.core.get.call(null,inst_17057,"current_cycle");
var state_17411__$1 = (function (){var statearr_17484 = state_17411;
(statearr_17484[(19)] = inst_17058);

return statearr_17484;
})();
var statearr_17485_17965 = state_17411__$1;
(statearr_17485_17965[(2)] = null);

(statearr_17485_17965[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (103))){
var state_17411__$1 = state_17411;
var statearr_17487_17966 = state_17411__$1;
(statearr_17487_17966[(2)] = false);

(statearr_17487_17966[(1)] = (104));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (135))){
var inst_17327 = (state_17411[(2)]);
var _ = (function (){var statearr_17488 = state_17411;
(statearr_17488[(4)] = cljs.core.rest.call(null,(state_17411[(4)])));

return statearr_17488;
})();
var state_17411__$1 = state_17411;
var statearr_17489_17967 = state_17411__$1;
(statearr_17489_17967[(2)] = inst_17327);

(statearr_17489_17967[(1)] = (123));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (8))){
var _ = (function (){var statearr_17490 = state_17411;
(statearr_17490[(4)] = cljs.core.rest.call(null,(state_17411[(4)])));

return statearr_17490;
})();
var state_17411__$1 = state_17411;
var ex17486 = (state_17411__$1[(2)]);
var statearr_17491_17968 = state_17411__$1;
(statearr_17491_17968[(5)] = ex17486);


var statearr_17492_17969 = state_17411__$1;
(statearr_17492_17969[(1)] = (7));

(statearr_17492_17969[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (40))){
var _ = (function (){var statearr_17493 = state_17411;
(statearr_17493[(4)] = cljs.core.cons.call(null,(47),(state_17411[(4)])));

return statearr_17493;
})();
var inst_16964 = [new cljs.core.Keyword(null,"start_time","start_time",(889556682)),new cljs.core.Keyword(null,"budget","budget",(-405386281))];
var inst_16965 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16966 = [new cljs.core.Keyword(null,"quantity","quantity",(-1929050694)),new cljs.core.Keyword(null,"contract","contract",(798152745))];
var inst_16967 = ["326000.2000 EFX",e2e.proposals.token_acc];
var inst_16968 = cljs.core.PersistentHashMap.fromArrays(inst_16966,inst_16967);
var inst_16969 = [inst_16968];
var inst_16970 = (new cljs.core.PersistentVector(null,(1),(5),inst_16965,inst_16969,null));
var inst_16971 = ["2021-01-01 12:00:00",inst_16970];
var inst_16972 = cljs.core.PersistentHashMap.fromArrays(inst_16964,inst_16971);
var inst_16973 = eos_cljs.core.transact.call(null,e2e.proposals.prop_acc,"addcycle",inst_16972);
var inst_16974 = cljs.core.async.interop.p__GT_c.call(null,inst_16973);
var state_17411__$1 = state_17411;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17411__$1,(48),inst_16974);
} else {
if((state_val_17412 === (72))){
var inst_17058 = (state_17411[(19)]);
var inst_17071 = (state_17411[(20)]);
var inst_17072 = (state_17411[(21)]);
var _ = (function (){var statearr_17494 = state_17411;
(statearr_17494[(4)] = cljs.core.cons.call(null,(75),(state_17411[(4)])));

return statearr_17494;
})();
var inst_17070 = (new cljs.core.List(null,(0),null,(1),null));
var inst_17071__$1 = (new cljs.core.List(null,inst_17058,inst_17070,(2),null));
var inst_17072__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_17071__$1);
var state_17411__$1 = (function (){var statearr_17495 = state_17411;
(statearr_17495[(20)] = inst_17071__$1);

(statearr_17495[(21)] = inst_17072__$1);

return statearr_17495;
})();
if(cljs.core.truth_(inst_17072__$1)){
var statearr_17496_17970 = state_17411__$1;
(statearr_17496_17970[(1)] = (76));

} else {
var statearr_17497_17971 = state_17411__$1;
(statearr_17497_17971[(1)] = (77));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (104))){
var inst_17201 = (state_17411[(2)]);
var state_17411__$1 = state_17411;
if(cljs.core.truth_(inst_17201)){
var statearr_17499_17972 = state_17411__$1;
(statearr_17499_17972[(1)] = (108));

} else {
var statearr_17500_17973 = state_17411__$1;
(statearr_17500_17973[(1)] = (109));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (136))){
var inst_17300 = (state_17411[(2)]);
var inst_17301 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_17302 = true;
var inst_17303 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can progress cycle",inst_17302,inst_17300];
var inst_17304 = cljs.core.PersistentHashMap.fromArrays(inst_17301,inst_17303);
var inst_17305 = cljs.test.do_report.call(null,inst_17304);
var state_17411__$1 = state_17411;
var statearr_17501_17974 = state_17411__$1;
(statearr_17501_17974[(2)] = inst_17305);

(statearr_17501_17974[(1)] = (135));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (9))){
var _ = (function (){var statearr_17502 = state_17411;
(statearr_17502[(4)] = cljs.core.rest.call(null,(state_17411[(4)])));

return statearr_17502;
})();
var state_17411__$1 = state_17411;
var ex17498 = (state_17411__$1[(2)]);
var statearr_17503_17975 = state_17411__$1;
(statearr_17503_17975[(5)] = ex17498);


if((ex17498 instanceof Error)){
var statearr_17504_17976 = state_17411__$1;
(statearr_17504_17976[(1)] = (4));

(statearr_17504_17976[(5)] = null);

} else {
throw ex17498;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (41))){
var inst_17017 = (state_17411[(2)]);
var inst_17022 = eos_cljs.core.get_table_rows.call(null,e2e.proposals.prop_acc,e2e.proposals.prop_acc,"config");
var inst_17023 = cljs.core.async.interop.p__GT_c.call(null,inst_17022);
var state_17411__$1 = (function (){var statearr_17505 = state_17411;
(statearr_17505[(22)] = inst_17017);

return statearr_17505;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17411__$1,(59),inst_17023);
} else {
if((state_val_17412 === (73))){
var inst_17095 = (state_17411[(2)]);
var state_17411__$1 = (function (){var statearr_17507 = state_17411;
(statearr_17507[(23)] = inst_17095);

return statearr_17507;
})();
var statearr_17508_17977 = state_17411__$1;
(statearr_17508_17977[(2)] = null);

(statearr_17508_17977[(1)] = (79));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (105))){
var state_17411__$1 = state_17411;
var statearr_17509_17978 = state_17411__$1;
(statearr_17509_17978[(2)] = true);

(statearr_17509_17978[(1)] = (107));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (137))){
var _ = (function (){var statearr_17510 = state_17411;
(statearr_17510[(4)] = cljs.core.rest.call(null,(state_17411[(4)])));

return statearr_17510;
})();
var state_17411__$1 = state_17411;
var ex17506 = (state_17411__$1[(2)]);
var statearr_17511_17979 = state_17411__$1;
(statearr_17511_17979[(5)] = ex17506);


var statearr_17512_17980 = state_17411__$1;
(statearr_17512_17980[(1)] = (136));

(statearr_17512_17980[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (10))){
var inst_16818 = (state_17411[(24)]);
var inst_16818__$1 = (state_17411[(2)]);
var inst_16819 = (inst_16818__$1 instanceof cljs.core.ExceptionInfo);
var inst_16820 = cljs.core.ex_data.call(null,inst_16818__$1);
var inst_16821 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_16820);
var inst_16822 = cljs.core._EQ_.call(null,inst_16821,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_16823 = ((inst_16819) && (inst_16822));
var state_17411__$1 = (function (){var statearr_17513 = state_17411;
(statearr_17513[(24)] = inst_16818__$1);

return statearr_17513;
})();
if(cljs.core.truth_(inst_16823)){
var statearr_17514_17981 = state_17411__$1;
(statearr_17514_17981[(1)] = (11));

} else {
var statearr_17515_17982 = state_17411__$1;
(statearr_17515_17982[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (42))){
var inst_16939 = (state_17411[(2)]);
var inst_16940 = cljs.core.prn.call(null,"test failed with ",inst_16939);
var state_17411__$1 = (function (){var statearr_17516 = state_17411;
(statearr_17516[(25)] = inst_16940);

return statearr_17516;
})();
var statearr_17517_17983 = state_17411__$1;
(statearr_17517_17983[(2)] = null);

(statearr_17517_17983[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (74))){
var inst_17059 = (state_17411[(2)]);
var inst_17060 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_17061 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),new cljs.core.Symbol(null,"cycle","cycle",(-1944070485),null),(0));
var inst_17062 = [new cljs.core.Keyword(null,"error","error",(-978969032)),null,inst_17061,inst_17059];
var inst_17063 = cljs.core.PersistentHashMap.fromArrays(inst_17060,inst_17062);
var inst_17064 = cljs.test.do_report.call(null,inst_17063);
var state_17411__$1 = state_17411;
var statearr_17518_17984 = state_17411__$1;
(statearr_17518_17984[(2)] = inst_17064);

(statearr_17518_17984[(1)] = (73));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (106))){
var state_17411__$1 = state_17411;
var statearr_17519_17985 = state_17411__$1;
(statearr_17519_17985[(2)] = false);

(statearr_17519_17985[(1)] = (107));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (138))){
var inst_17312 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_17313 = true;
var inst_17314 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"can progress cycle",inst_17313,true];
var inst_17315 = cljs.core.PersistentHashMap.fromArrays(inst_17312,inst_17314);
var inst_17316 = cljs.test.do_report.call(null,inst_17315);
var state_17411__$1 = state_17411;
var statearr_17520_17986 = state_17411__$1;
(statearr_17520_17986[(2)] = inst_17316);

(statearr_17520_17986[(1)] = (140));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (11))){
var inst_16818 = (state_17411[(24)]);
var inst_16825 = (function(){throw inst_16818})();
var state_17411__$1 = state_17411;
var statearr_17522_17987 = state_17411__$1;
(statearr_17522_17987[(2)] = inst_16825);

(statearr_17522_17987[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (43))){
var _ = (function (){var statearr_17523 = state_17411;
(statearr_17523[(4)] = cljs.core.cons.call(null,(46),(state_17411[(4)])));

return statearr_17523;
})();
var inst_16952 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_16953 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),null];
var inst_16954 = cljs.core.PersistentHashMap.fromArrays(inst_16952,inst_16953);
var inst_16955 = cljs.test.do_report.call(null,inst_16954);
var ___$1 = (function (){var statearr_17524 = state_17411;
(statearr_17524[(4)] = cljs.core.rest.call(null,(state_17411[(4)])));

return statearr_17524;
})();
var state_17411__$1 = state_17411;
var statearr_17525_17988 = state_17411__$1;
(statearr_17525_17988[(2)] = inst_16955);

(statearr_17525_17988[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (75))){
var _ = (function (){var statearr_17526 = state_17411;
(statearr_17526[(4)] = cljs.core.rest.call(null,(state_17411[(4)])));

return statearr_17526;
})();
var state_17411__$1 = state_17411;
var ex17521 = (state_17411__$1[(2)]);
var statearr_17527_17989 = state_17411__$1;
(statearr_17527_17989[(5)] = ex17521);


var statearr_17528_17990 = state_17411__$1;
(statearr_17528_17990[(1)] = (74));

(statearr_17528_17990[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (107))){
var inst_17198 = (state_17411[(2)]);
var state_17411__$1 = state_17411;
var statearr_17529_17991 = state_17411__$1;
(statearr_17529_17991[(2)] = inst_17198);

(statearr_17529_17991[(1)] = (104));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (139))){
var inst_17318 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_17319 = true;
var inst_17320 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can progress cycle",inst_17319,true];
var inst_17321 = cljs.core.PersistentHashMap.fromArrays(inst_17318,inst_17320);
var inst_17322 = cljs.test.do_report.call(null,inst_17321);
var state_17411__$1 = state_17411;
var statearr_17530_17992 = state_17411__$1;
(statearr_17530_17992[(2)] = inst_17322);

(statearr_17530_17992[(1)] = (140));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (12))){
var inst_16818 = (state_17411[(24)]);
var state_17411__$1 = state_17411;
var statearr_17531_17993 = state_17411__$1;
(statearr_17531_17993[(2)] = inst_16818);

(statearr_17531_17993[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (44))){
var inst_16958 = (state_17411[(2)]);
var state_17411__$1 = state_17411;
var statearr_17532_17994 = state_17411__$1;
(statearr_17532_17994[(2)] = inst_16958);

(statearr_17532_17994[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (76))){
var inst_17071 = (state_17411[(20)]);
var inst_17074 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_17075 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),new cljs.core.Symbol(null,"cycle","cycle",(-1944070485),null),(0));
var inst_17076 = cljs.core.cons.call(null,cljs.core._EQ_,inst_17071);
var inst_17077 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),null,inst_17075,inst_17076];
var inst_17078 = cljs.core.PersistentHashMap.fromArrays(inst_17074,inst_17077);
var inst_17079 = cljs.test.do_report.call(null,inst_17078);
var state_17411__$1 = state_17411;
var statearr_17533_17995 = state_17411__$1;
(statearr_17533_17995[(2)] = inst_17079);

(statearr_17533_17995[(1)] = (78));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (108))){
var inst_17185 = (state_17411[(16)]);
var inst_17203 = cljs.core.apply.call(null,cljs.core.hash_map,inst_17185);
var state_17411__$1 = state_17411;
var statearr_17534_17996 = state_17411__$1;
(statearr_17534_17996[(2)] = inst_17203);

(statearr_17534_17996[(1)] = (110));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (140))){
var inst_17324 = (state_17411[(2)]);
var _ = (function (){var statearr_17535 = state_17411;
(statearr_17535[(4)] = cljs.core.rest.call(null,(state_17411[(4)])));

return statearr_17535;
})();
var state_17411__$1 = (function (){var statearr_17536 = state_17411;
(statearr_17536[(26)] = inst_17324);

return statearr_17536;
})();
var statearr_17537_17997 = state_17411__$1;
(statearr_17537_17997[(2)] = true);

(statearr_17537_17997[(1)] = (135));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (13))){
var inst_16828 = (state_17411[(2)]);
var state_17411__$1 = (function (){var statearr_17538 = state_17411;
(statearr_17538[(27)] = inst_16828);

return statearr_17538;
})();
var statearr_17539_17998 = state_17411__$1;
(statearr_17539_17998[(2)] = null);

(statearr_17539_17998[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (45))){
var inst_16941 = (state_17411[(2)]);
var inst_16942 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_16943 = null;
var inst_16944 = [new cljs.core.Keyword(null,"error","error",(-978969032)),null,inst_16943,inst_16941];
var inst_16945 = cljs.core.PersistentHashMap.fromArrays(inst_16942,inst_16944);
var inst_16946 = cljs.test.do_report.call(null,inst_16945);
var state_17411__$1 = state_17411;
var statearr_17540_17999 = state_17411__$1;
(statearr_17540_17999[(2)] = inst_16946);

(statearr_17540_17999[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (77))){
var inst_17071 = (state_17411[(20)]);
var inst_17081 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_17082 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),new cljs.core.Symbol(null,"cycle","cycle",(-1944070485),null),(0));
var inst_17083 = new cljs.core.Symbol(null,"not","not",(1044554643),null);
var inst_17084 = new cljs.core.Symbol(null,"=","=",(-1501502141),null);
var inst_17085 = cljs.core.cons.call(null,inst_17084,inst_17071);
var inst_17086 = (new cljs.core.List(null,inst_17085,null,(1),null));
var inst_17087 = (new cljs.core.List(null,inst_17083,inst_17086,(2),null));
var inst_17088 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),null,inst_17082,inst_17087];
var inst_17089 = cljs.core.PersistentHashMap.fromArrays(inst_17081,inst_17088);
var inst_17090 = cljs.test.do_report.call(null,inst_17089);
var state_17411__$1 = state_17411;
var statearr_17541_18000 = state_17411__$1;
(statearr_17541_18000[(2)] = inst_17090);

(statearr_17541_18000[(1)] = (78));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (109))){
var inst_17185 = (state_17411[(16)]);
var state_17411__$1 = state_17411;
var statearr_17542_18001 = state_17411__$1;
(statearr_17542_18001[(2)] = inst_17185);

(statearr_17542_18001[(1)] = (110));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (141))){
var inst_17338 = (state_17411[(28)]);
var inst_17338__$1 = (state_17411[(2)]);
var inst_17339 = (inst_17338__$1 instanceof cljs.core.ExceptionInfo);
var inst_17340 = cljs.core.ex_data.call(null,inst_17338__$1);
var inst_17341 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_17340);
var inst_17342 = cljs.core._EQ_.call(null,inst_17341,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_17343 = ((inst_17339) && (inst_17342));
var state_17411__$1 = (function (){var statearr_17544 = state_17411;
(statearr_17544[(28)] = inst_17338__$1);

return statearr_17544;
})();
if(cljs.core.truth_(inst_17343)){
var statearr_17545_18002 = state_17411__$1;
(statearr_17545_18002[(1)] = (142));

} else {
var statearr_17546_18003 = state_17411__$1;
(statearr_17546_18003[(1)] = (143));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (14))){
var _ = (function (){var statearr_17547 = state_17411;
(statearr_17547[(4)] = cljs.core.cons.call(null,(17),(state_17411[(4)])));

return statearr_17547;
})();
var state_17411__$1 = state_17411;
var statearr_17548_18004 = state_17411__$1;
(statearr_17548_18004[(1)] = (18));



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (46))){
var _ = (function (){var statearr_17550 = state_17411;
(statearr_17550[(4)] = cljs.core.rest.call(null,(state_17411[(4)])));

return statearr_17550;
})();
var state_17411__$1 = state_17411;
var ex17543 = (state_17411__$1[(2)]);
var statearr_17551_18005 = state_17411__$1;
(statearr_17551_18005[(5)] = ex17543);


var statearr_17552_18006 = state_17411__$1;
(statearr_17552_18006[(1)] = (45));

(statearr_17552_18006[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (78))){
var inst_17072 = (state_17411[(21)]);
var inst_17092 = (state_17411[(2)]);
var _ = (function (){var statearr_17553 = state_17411;
(statearr_17553[(4)] = cljs.core.rest.call(null,(state_17411[(4)])));

return statearr_17553;
})();
var state_17411__$1 = (function (){var statearr_17554 = state_17411;
(statearr_17554[(29)] = inst_17092);

return statearr_17554;
})();
var statearr_17555_18007 = state_17411__$1;
(statearr_17555_18007[(2)] = inst_17072);

(statearr_17555_18007[(1)] = (73));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (110))){
var inst_17206 = (state_17411[(2)]);
var inst_17207 = cljs.core.get.call(null,inst_17206,"current_cycle");
var state_17411__$1 = (function (){var statearr_17556 = state_17411;
(statearr_17556[(30)] = inst_17207);

return statearr_17556;
})();
var statearr_17557_18008 = state_17411__$1;
(statearr_17557_18008[(2)] = null);

(statearr_17557_18008[(1)] = (111));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (142))){
var inst_17338 = (state_17411[(28)]);
var inst_17345 = (function(){throw inst_17338})();
var state_17411__$1 = state_17411;
var statearr_17559_18009 = state_17411__$1;
(statearr_17559_18009[(2)] = inst_17345);

(statearr_17559_18009[(1)] = (144));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (15))){
var inst_16856 = (state_17411[(2)]);
var _ = (function (){var statearr_17560 = state_17411;
(statearr_17560[(4)] = cljs.core.rest.call(null,(state_17411[(4)])));

return statearr_17560;
})();
var state_17411__$1 = state_17411;
var statearr_17561_18010 = state_17411__$1;
(statearr_17561_18010[(2)] = inst_16856);

(statearr_17561_18010[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (47))){
var _ = (function (){var statearr_17562 = state_17411;
(statearr_17562[(4)] = cljs.core.rest.call(null,(state_17411[(4)])));

return statearr_17562;
})();
var state_17411__$1 = state_17411;
var ex17558 = (state_17411__$1[(2)]);
var statearr_17563_18011 = state_17411__$1;
(statearr_17563_18011[(5)] = ex17558);


if((ex17558 instanceof Error)){
var statearr_17564_18012 = state_17411__$1;
(statearr_17564_18012[(1)] = (42));

(statearr_17564_18012[(5)] = null);

} else {
throw ex17558;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (79))){
var _ = (function (){var statearr_17565 = state_17411;
(statearr_17565[(4)] = cljs.core.cons.call(null,(86),(state_17411[(4)])));

return statearr_17565;
})();
var inst_17121 = cljs.core.PersistentHashMap.EMPTY;
var inst_17122 = eos_cljs.core.transact.call(null,e2e.proposals.prop_acc,"cycleupdate",inst_17121);
var inst_17123 = cljs.core.async.interop.p__GT_c.call(null,inst_17122);
var state_17411__$1 = state_17411;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17411__$1,(87),inst_17123);
} else {
if((state_val_17412 === (111))){
var inst_17207 = (state_17411[(30)]);
var inst_17220 = (state_17411[(31)]);
var inst_17221 = (state_17411[(32)]);
var _ = (function (){var statearr_17566 = state_17411;
(statearr_17566[(4)] = cljs.core.cons.call(null,(114),(state_17411[(4)])));

return statearr_17566;
})();
var inst_17219 = (new cljs.core.List(null,(1),null,(1),null));
var inst_17220__$1 = (new cljs.core.List(null,inst_17207,inst_17219,(2),null));
var inst_17221__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_17220__$1);
var state_17411__$1 = (function (){var statearr_17567 = state_17411;
(statearr_17567[(31)] = inst_17220__$1);

(statearr_17567[(32)] = inst_17221__$1);

return statearr_17567;
})();
if(cljs.core.truth_(inst_17221__$1)){
var statearr_17568_18013 = state_17411__$1;
(statearr_17568_18013[(1)] = (115));

} else {
var statearr_17569_18014 = state_17411__$1;
(statearr_17569_18014[(1)] = (116));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (143))){
var inst_17338 = (state_17411[(28)]);
var state_17411__$1 = state_17411;
var statearr_17570_18015 = state_17411__$1;
(statearr_17570_18015[(2)] = inst_17338);

(statearr_17570_18015[(1)] = (144));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (16))){
var inst_16829 = (state_17411[(2)]);
var inst_16830 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_16831 = true;
var inst_16832 = [new cljs.core.Keyword(null,"error","error",(-978969032)),null,inst_16831,inst_16829];
var inst_16833 = cljs.core.PersistentHashMap.fromArrays(inst_16830,inst_16832);
var inst_16834 = cljs.test.do_report.call(null,inst_16833);
var state_17411__$1 = state_17411;
var statearr_17571_18016 = state_17411__$1;
(statearr_17571_18016[(2)] = inst_16834);

(statearr_17571_18016[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (48))){
var inst_16976 = (state_17411[(33)]);
var inst_16976__$1 = (state_17411[(2)]);
var inst_16977 = (inst_16976__$1 instanceof cljs.core.ExceptionInfo);
var inst_16978 = cljs.core.ex_data.call(null,inst_16976__$1);
var inst_16979 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_16978);
var inst_16980 = cljs.core._EQ_.call(null,inst_16979,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_16981 = ((inst_16977) && (inst_16980));
var state_17411__$1 = (function (){var statearr_17572 = state_17411;
(statearr_17572[(33)] = inst_16976__$1);

return statearr_17572;
})();
if(cljs.core.truth_(inst_16981)){
var statearr_17573_18017 = state_17411__$1;
(statearr_17573_18017[(1)] = (49));

} else {
var statearr_17574_18018 = state_17411__$1;
(statearr_17574_18018[(1)] = (50));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (80))){
var inst_17166 = (state_17411[(2)]);
var inst_17171 = eos_cljs.core.get_table_rows.call(null,e2e.proposals.prop_acc,e2e.proposals.prop_acc,"config");
var inst_17172 = cljs.core.async.interop.p__GT_c.call(null,inst_17171);
var state_17411__$1 = (function (){var statearr_17575 = state_17411;
(statearr_17575[(34)] = inst_17166);

return statearr_17575;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17411__$1,(98),inst_17172);
} else {
if((state_val_17412 === (112))){
var inst_17244 = (state_17411[(2)]);
var inst_17245 = Promise.resolve((1));
var inst_17246 = eos_cljs.core.wait_block.call(null,inst_17245);
var inst_17247 = cljs.core.async.interop.p__GT_c.call(null,inst_17246);
var state_17411__$1 = (function (){var statearr_17577 = state_17411;
(statearr_17577[(35)] = inst_17244);

return statearr_17577;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17411__$1,(118),inst_17247);
} else {
if((state_val_17412 === (144))){
var inst_17349 = (state_17411[(36)]);
var inst_17348 = (state_17411[(2)]);
var inst_17349__$1 = cljs.core.nth.call(null,inst_17348,(0),null);
var inst_17351 = (inst_17349__$1 == null);
var inst_17352 = cljs.core.not.call(null,inst_17351);
var state_17411__$1 = (function (){var statearr_17578 = state_17411;
(statearr_17578[(36)] = inst_17349__$1);

return statearr_17578;
})();
if(inst_17352){
var statearr_17579_18019 = state_17411__$1;
(statearr_17579_18019[(1)] = (145));

} else {
var statearr_17580_18020 = state_17411__$1;
(statearr_17580_18020[(1)] = (146));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (17))){
var _ = (function (){var statearr_17581 = state_17411;
(statearr_17581[(4)] = cljs.core.rest.call(null,(state_17411[(4)])));

return statearr_17581;
})();
var state_17411__$1 = state_17411;
var ex17576 = (state_17411__$1[(2)]);
var statearr_17582_18021 = state_17411__$1;
(statearr_17582_18021[(5)] = ex17576);


var statearr_17583_18022 = state_17411__$1;
(statearr_17583_18022[(1)] = (16));

(statearr_17583_18022[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (49))){
var inst_16976 = (state_17411[(33)]);
var inst_16983 = (function(){throw inst_16976})();
var state_17411__$1 = state_17411;
var statearr_17584_18023 = state_17411__$1;
(statearr_17584_18023[(2)] = inst_16983);

(statearr_17584_18023[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (81))){
var inst_17096 = (state_17411[(2)]);
var inst_17097 = cljs.core.prn.call(null,"test failed with ",inst_17096);
var state_17411__$1 = (function (){var statearr_17585 = state_17411;
(statearr_17585[(37)] = inst_17097);

return statearr_17585;
})();
var statearr_17586_18024 = state_17411__$1;
(statearr_17586_18024[(2)] = null);

(statearr_17586_18024[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (113))){
var inst_17208 = (state_17411[(2)]);
var inst_17209 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_17210 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),new cljs.core.Symbol(null,"cycle","cycle",(-1944070485),null),(1));
var inst_17211 = [new cljs.core.Keyword(null,"error","error",(-978969032)),null,inst_17210,inst_17208];
var inst_17212 = cljs.core.PersistentHashMap.fromArrays(inst_17209,inst_17211);
var inst_17213 = cljs.test.do_report.call(null,inst_17212);
var state_17411__$1 = state_17411;
var statearr_17587_18025 = state_17411__$1;
(statearr_17587_18025[(2)] = inst_17213);

(statearr_17587_18025[(1)] = (112));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (145))){
var inst_17349 = (state_17411[(36)]);
var inst_17354 = inst_17349.cljs$lang$protocol_mask$partition0$;
var inst_17355 = (inst_17354 & (64));
var inst_17356 = inst_17349.cljs$core$ISeq$;
var inst_17357 = (cljs.core.PROTOCOL_SENTINEL === inst_17356);
var inst_17358 = ((inst_17355) || (inst_17357));
var state_17411__$1 = state_17411;
if(cljs.core.truth_(inst_17358)){
var statearr_17588_18026 = state_17411__$1;
(statearr_17588_18026[(1)] = (148));

} else {
var statearr_17589_18027 = state_17411__$1;
(statearr_17589_18027[(1)] = (149));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (18))){
var inst_16841 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_16842 = true;
var inst_16843 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),null,inst_16842,true];
var inst_16844 = cljs.core.PersistentHashMap.fromArrays(inst_16841,inst_16843);
var inst_16845 = cljs.test.do_report.call(null,inst_16844);
var state_17411__$1 = state_17411;
var statearr_17590_18028 = state_17411__$1;
(statearr_17590_18028[(2)] = inst_16845);

(statearr_17590_18028[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (50))){
var inst_16976 = (state_17411[(33)]);
var state_17411__$1 = state_17411;
var statearr_17592_18029 = state_17411__$1;
(statearr_17592_18029[(2)] = inst_16976);

(statearr_17592_18029[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (82))){
var _ = (function (){var statearr_17593 = state_17411;
(statearr_17593[(4)] = cljs.core.cons.call(null,(85),(state_17411[(4)])));

return statearr_17593;
})();
var inst_17109 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_17110 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can progress cycle"];
var inst_17111 = cljs.core.PersistentHashMap.fromArrays(inst_17109,inst_17110);
var inst_17112 = cljs.test.do_report.call(null,inst_17111);
var ___$1 = (function (){var statearr_17594 = state_17411;
(statearr_17594[(4)] = cljs.core.rest.call(null,(state_17411[(4)])));

return statearr_17594;
})();
var state_17411__$1 = state_17411;
var statearr_17595_18030 = state_17411__$1;
(statearr_17595_18030[(2)] = inst_17112);

(statearr_17595_18030[(1)] = (83));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (114))){
var _ = (function (){var statearr_17596 = state_17411;
(statearr_17596[(4)] = cljs.core.rest.call(null,(state_17411[(4)])));

return statearr_17596;
})();
var state_17411__$1 = state_17411;
var ex17591 = (state_17411__$1[(2)]);
var statearr_17597_18031 = state_17411__$1;
(statearr_17597_18031[(5)] = ex17591);


var statearr_17598_18032 = state_17411__$1;
(statearr_17598_18032[(1)] = (113));

(statearr_17598_18032[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (146))){
var state_17411__$1 = state_17411;
var statearr_17599_18033 = state_17411__$1;
(statearr_17599_18033[(2)] = false);

(statearr_17599_18033[(1)] = (147));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (19))){
var inst_16847 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_16848 = true;
var inst_16849 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),null,inst_16848,true];
var inst_16850 = cljs.core.PersistentHashMap.fromArrays(inst_16847,inst_16849);
var inst_16851 = cljs.test.do_report.call(null,inst_16850);
var state_17411__$1 = state_17411;
var statearr_17600_18034 = state_17411__$1;
(statearr_17600_18034[(2)] = inst_16851);

(statearr_17600_18034[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (51))){
var inst_16986 = (state_17411[(2)]);
var state_17411__$1 = (function (){var statearr_17601 = state_17411;
(statearr_17601[(38)] = inst_16986);

return statearr_17601;
})();
var statearr_17602_18035 = state_17411__$1;
(statearr_17602_18035[(2)] = null);

(statearr_17602_18035[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (83))){
var inst_17115 = (state_17411[(2)]);
var state_17411__$1 = state_17411;
var statearr_17603_18036 = state_17411__$1;
(statearr_17603_18036[(2)] = inst_17115);

(statearr_17603_18036[(1)] = (80));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (115))){
var inst_17220 = (state_17411[(31)]);
var inst_17223 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_17224 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),new cljs.core.Symbol(null,"cycle","cycle",(-1944070485),null),(1));
var inst_17225 = cljs.core.cons.call(null,cljs.core._EQ_,inst_17220);
var inst_17226 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),null,inst_17224,inst_17225];
var inst_17227 = cljs.core.PersistentHashMap.fromArrays(inst_17223,inst_17226);
var inst_17228 = cljs.test.do_report.call(null,inst_17227);
var state_17411__$1 = state_17411;
var statearr_17604_18037 = state_17411__$1;
(statearr_17604_18037[(2)] = inst_17228);

(statearr_17604_18037[(1)] = (117));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (147))){
var inst_17365 = (state_17411[(2)]);
var state_17411__$1 = state_17411;
if(cljs.core.truth_(inst_17365)){
var statearr_17605_18038 = state_17411__$1;
(statearr_17605_18038[(1)] = (151));

} else {
var statearr_17606_18039 = state_17411__$1;
(statearr_17606_18039[(1)] = (152));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (20))){
var inst_16853 = (state_17411[(2)]);
var _ = (function (){var statearr_17607 = state_17411;
(statearr_17607[(4)] = cljs.core.rest.call(null,(state_17411[(4)])));

return statearr_17607;
})();
var state_17411__$1 = (function (){var statearr_17608 = state_17411;
(statearr_17608[(39)] = inst_16853);

return statearr_17608;
})();
var statearr_17609_18040 = state_17411__$1;
(statearr_17609_18040[(2)] = true);

(statearr_17609_18040[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (52))){
var _ = (function (){var statearr_17610 = state_17411;
(statearr_17610[(4)] = cljs.core.cons.call(null,(55),(state_17411[(4)])));

return statearr_17610;
})();
var state_17411__$1 = state_17411;
var statearr_17611_18041 = state_17411__$1;
(statearr_17611_18041[(1)] = (56));



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (84))){
var inst_17098 = (state_17411[(2)]);
var inst_17099 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_17100 = null;
var inst_17101 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can progress cycle",inst_17100,inst_17098];
var inst_17102 = cljs.core.PersistentHashMap.fromArrays(inst_17099,inst_17101);
var inst_17103 = cljs.test.do_report.call(null,inst_17102);
var state_17411__$1 = state_17411;
var statearr_17613_18042 = state_17411__$1;
(statearr_17613_18042[(2)] = inst_17103);

(statearr_17613_18042[(1)] = (83));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (116))){
var inst_17220 = (state_17411[(31)]);
var inst_17230 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_17231 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),new cljs.core.Symbol(null,"cycle","cycle",(-1944070485),null),(1));
var inst_17232 = new cljs.core.Symbol(null,"not","not",(1044554643),null);
var inst_17233 = new cljs.core.Symbol(null,"=","=",(-1501502141),null);
var inst_17234 = cljs.core.cons.call(null,inst_17233,inst_17220);
var inst_17235 = (new cljs.core.List(null,inst_17234,null,(1),null));
var inst_17236 = (new cljs.core.List(null,inst_17232,inst_17235,(2),null));
var inst_17237 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),null,inst_17231,inst_17236];
var inst_17238 = cljs.core.PersistentHashMap.fromArrays(inst_17230,inst_17237);
var inst_17239 = cljs.test.do_report.call(null,inst_17238);
var state_17411__$1 = state_17411;
var statearr_17614_18043 = state_17411__$1;
(statearr_17614_18043[(2)] = inst_17239);

(statearr_17614_18043[(1)] = (117));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (148))){
var state_17411__$1 = state_17411;
var statearr_17615_18044 = state_17411__$1;
(statearr_17615_18044[(2)] = true);

(statearr_17615_18044[(1)] = (150));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (21))){
var _ = (function (){var statearr_17617 = state_17411;
(statearr_17617[(4)] = cljs.core.cons.call(null,(28),(state_17411[(4)])));

return statearr_17617;
})();
var inst_16885 = [new cljs.core.Keyword(null,"start_time","start_time",(889556682)),new cljs.core.Keyword(null,"budget","budget",(-405386281))];
var inst_16886 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16887 = [new cljs.core.Keyword(null,"quantity","quantity",(-1929050694)),new cljs.core.Keyword(null,"contract","contract",(798152745))];
var inst_16888 = ["500.1000 EFX",e2e.proposals.token_acc];
var inst_16889 = cljs.core.PersistentHashMap.fromArrays(inst_16887,inst_16888);
var inst_16890 = [inst_16889];
var inst_16891 = (new cljs.core.PersistentVector(null,(1),(5),inst_16886,inst_16890,null));
var inst_16892 = ["2021-01-01 12:00:00",inst_16891];
var inst_16893 = cljs.core.PersistentHashMap.fromArrays(inst_16885,inst_16892);
var inst_16894 = eos_cljs.core.transact.call(null,e2e.proposals.prop_acc,"addcycle",inst_16893);
var inst_16895 = cljs.core.async.interop.p__GT_c.call(null,inst_16894);
var state_17411__$1 = state_17411;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17411__$1,(29),inst_16895);
} else {
if((state_val_17412 === (53))){
var inst_17014 = (state_17411[(2)]);
var _ = (function (){var statearr_17618 = state_17411;
(statearr_17618[(4)] = cljs.core.rest.call(null,(state_17411[(4)])));

return statearr_17618;
})();
var state_17411__$1 = state_17411;
var statearr_17619_18045 = state_17411__$1;
(statearr_17619_18045[(2)] = inst_17014);

(statearr_17619_18045[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (85))){
var _ = (function (){var statearr_17620 = state_17411;
(statearr_17620[(4)] = cljs.core.rest.call(null,(state_17411[(4)])));

return statearr_17620;
})();
var state_17411__$1 = state_17411;
var ex17616 = (state_17411__$1[(2)]);
var statearr_17621_18046 = state_17411__$1;
(statearr_17621_18046[(5)] = ex17616);


var statearr_17622_18047 = state_17411__$1;
(statearr_17622_18047[(1)] = (84));

(statearr_17622_18047[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (117))){
var inst_17221 = (state_17411[(32)]);
var inst_17241 = (state_17411[(2)]);
var _ = (function (){var statearr_17623 = state_17411;
(statearr_17623[(4)] = cljs.core.rest.call(null,(state_17411[(4)])));

return statearr_17623;
})();
var state_17411__$1 = (function (){var statearr_17624 = state_17411;
(statearr_17624[(40)] = inst_17241);

return statearr_17624;
})();
var statearr_17625_18048 = state_17411__$1;
(statearr_17625_18048[(2)] = inst_17221);

(statearr_17625_18048[(1)] = (112));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (149))){
var state_17411__$1 = state_17411;
var statearr_17626_18049 = state_17411__$1;
(statearr_17626_18049[(2)] = false);

(statearr_17626_18049[(1)] = (150));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (22))){
var inst_16938 = (state_17411[(2)]);
var state_17411__$1 = (function (){var statearr_17628 = state_17411;
(statearr_17628[(41)] = inst_16938);

return statearr_17628;
})();
var statearr_17629_18050 = state_17411__$1;
(statearr_17629_18050[(2)] = null);

(statearr_17629_18050[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (54))){
var inst_16987 = (state_17411[(2)]);
var inst_16988 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_16989 = true;
var inst_16990 = [new cljs.core.Keyword(null,"error","error",(-978969032)),null,inst_16989,inst_16987];
var inst_16991 = cljs.core.PersistentHashMap.fromArrays(inst_16988,inst_16990);
var inst_16992 = cljs.test.do_report.call(null,inst_16991);
var state_17411__$1 = state_17411;
var statearr_17630_18051 = state_17411__$1;
(statearr_17630_18051[(2)] = inst_16992);

(statearr_17630_18051[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (86))){
var _ = (function (){var statearr_17631 = state_17411;
(statearr_17631[(4)] = cljs.core.rest.call(null,(state_17411[(4)])));

return statearr_17631;
})();
var state_17411__$1 = state_17411;
var ex17627 = (state_17411__$1[(2)]);
var statearr_17632_18052 = state_17411__$1;
(statearr_17632_18052[(5)] = ex17627);


if((ex17627 instanceof Error)){
var statearr_17633_18053 = state_17411__$1;
(statearr_17633_18053[(1)] = (81));

(statearr_17633_18053[(5)] = null);

} else {
throw ex17627;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (118))){
var inst_17249 = (state_17411[(42)]);
var inst_17249__$1 = (state_17411[(2)]);
var inst_17250 = (inst_17249__$1 instanceof cljs.core.ExceptionInfo);
var inst_17251 = cljs.core.ex_data.call(null,inst_17249__$1);
var inst_17252 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_17251);
var inst_17253 = cljs.core._EQ_.call(null,inst_17252,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_17254 = ((inst_17250) && (inst_17253));
var state_17411__$1 = (function (){var statearr_17634 = state_17411;
(statearr_17634[(42)] = inst_17249__$1);

return statearr_17634;
})();
if(cljs.core.truth_(inst_17254)){
var statearr_17635_18054 = state_17411__$1;
(statearr_17635_18054[(1)] = (119));

} else {
var statearr_17636_18055 = state_17411__$1;
(statearr_17636_18055[(1)] = (120));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (150))){
var inst_17362 = (state_17411[(2)]);
var state_17411__$1 = state_17411;
var statearr_17638_18056 = state_17411__$1;
(statearr_17638_18056[(2)] = inst_17362);

(statearr_17638_18056[(1)] = (147));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (23))){
var inst_16860 = (state_17411[(2)]);
var inst_16861 = cljs.core.prn.call(null,"test failed with ",inst_16860);
var state_17411__$1 = (function (){var statearr_17639 = state_17411;
(statearr_17639[(43)] = inst_16861);

return statearr_17639;
})();
var statearr_17640_18057 = state_17411__$1;
(statearr_17640_18057[(2)] = null);

(statearr_17640_18057[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (55))){
var _ = (function (){var statearr_17641 = state_17411;
(statearr_17641[(4)] = cljs.core.rest.call(null,(state_17411[(4)])));

return statearr_17641;
})();
var state_17411__$1 = state_17411;
var ex17637 = (state_17411__$1[(2)]);
var statearr_17642_18058 = state_17411__$1;
(statearr_17642_18058[(5)] = ex17637);


var statearr_17643_18059 = state_17411__$1;
(statearr_17643_18059[(1)] = (54));

(statearr_17643_18059[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (87))){
var inst_17125 = (state_17411[(44)]);
var inst_17125__$1 = (state_17411[(2)]);
var inst_17126 = (inst_17125__$1 instanceof cljs.core.ExceptionInfo);
var inst_17127 = cljs.core.ex_data.call(null,inst_17125__$1);
var inst_17128 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_17127);
var inst_17129 = cljs.core._EQ_.call(null,inst_17128,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_17130 = ((inst_17126) && (inst_17129));
var state_17411__$1 = (function (){var statearr_17644 = state_17411;
(statearr_17644[(44)] = inst_17125__$1);

return statearr_17644;
})();
if(cljs.core.truth_(inst_17130)){
var statearr_17645_18060 = state_17411__$1;
(statearr_17645_18060[(1)] = (88));

} else {
var statearr_17646_18061 = state_17411__$1;
(statearr_17646_18061[(1)] = (89));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (119))){
var inst_17249 = (state_17411[(42)]);
var inst_17256 = (function(){throw inst_17249})();
var state_17411__$1 = state_17411;
var statearr_17647_18062 = state_17411__$1;
(statearr_17647_18062[(2)] = inst_17256);

(statearr_17647_18062[(1)] = (121));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (151))){
var inst_17349 = (state_17411[(36)]);
var inst_17367 = cljs.core.apply.call(null,cljs.core.hash_map,inst_17349);
var state_17411__$1 = state_17411;
var statearr_17648_18063 = state_17411__$1;
(statearr_17648_18063[(2)] = inst_17367);

(statearr_17648_18063[(1)] = (153));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (24))){
var _ = (function (){var statearr_17649 = state_17411;
(statearr_17649[(4)] = cljs.core.cons.call(null,(27),(state_17411[(4)])));

return statearr_17649;
})();
var inst_16873 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_16874 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),null];
var inst_16875 = cljs.core.PersistentHashMap.fromArrays(inst_16873,inst_16874);
var inst_16876 = cljs.test.do_report.call(null,inst_16875);
var ___$1 = (function (){var statearr_17650 = state_17411;
(statearr_17650[(4)] = cljs.core.rest.call(null,(state_17411[(4)])));

return statearr_17650;
})();
var state_17411__$1 = state_17411;
var statearr_17651_18064 = state_17411__$1;
(statearr_17651_18064[(2)] = inst_16876);

(statearr_17651_18064[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (56))){
var inst_16999 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_17000 = true;
var inst_17001 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),null,inst_17000,true];
var inst_17002 = cljs.core.PersistentHashMap.fromArrays(inst_16999,inst_17001);
var inst_17003 = cljs.test.do_report.call(null,inst_17002);
var state_17411__$1 = state_17411;
var statearr_17652_18065 = state_17411__$1;
(statearr_17652_18065[(2)] = inst_17003);

(statearr_17652_18065[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (88))){
var inst_17125 = (state_17411[(44)]);
var inst_17132 = (function(){throw inst_17125})();
var state_17411__$1 = state_17411;
var statearr_17653_18066 = state_17411__$1;
(statearr_17653_18066[(2)] = inst_17132);

(statearr_17653_18066[(1)] = (90));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (120))){
var inst_17249 = (state_17411[(42)]);
var state_17411__$1 = state_17411;
var statearr_17654_18067 = state_17411__$1;
(statearr_17654_18067[(2)] = inst_17249);

(statearr_17654_18067[(1)] = (121));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (152))){
var inst_17349 = (state_17411[(36)]);
var state_17411__$1 = state_17411;
var statearr_17655_18068 = state_17411__$1;
(statearr_17655_18068[(2)] = inst_17349);

(statearr_17655_18068[(1)] = (153));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (25))){
var inst_16879 = (state_17411[(2)]);
var state_17411__$1 = state_17411;
var statearr_17656_18069 = state_17411__$1;
(statearr_17656_18069[(2)] = inst_16879);

(statearr_17656_18069[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (57))){
var inst_17005 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_17006 = true;
var inst_17007 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),null,inst_17006,true];
var inst_17008 = cljs.core.PersistentHashMap.fromArrays(inst_17005,inst_17007);
var inst_17009 = cljs.test.do_report.call(null,inst_17008);
var state_17411__$1 = state_17411;
var statearr_17657_18070 = state_17411__$1;
(statearr_17657_18070[(2)] = inst_17009);

(statearr_17657_18070[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (89))){
var inst_17125 = (state_17411[(44)]);
var state_17411__$1 = state_17411;
var statearr_17658_18071 = state_17411__$1;
(statearr_17658_18071[(2)] = inst_17125);

(statearr_17658_18071[(1)] = (90));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (121))){
var inst_17259 = (state_17411[(2)]);
var state_17411__$1 = (function (){var statearr_17659 = state_17411;
(statearr_17659[(45)] = inst_17259);

return statearr_17659;
})();
var statearr_17660_18072 = state_17411__$1;
(statearr_17660_18072[(2)] = null);

(statearr_17660_18072[(1)] = (122));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (153))){
var inst_17370 = (state_17411[(2)]);
var inst_17371 = cljs.core.get.call(null,inst_17370,"current_cycle");
var state_17411__$1 = (function (){var statearr_17661 = state_17411;
(statearr_17661[(46)] = inst_17371);

return statearr_17661;
})();
var statearr_17662_18073 = state_17411__$1;
(statearr_17662_18073[(2)] = null);

(statearr_17662_18073[(1)] = (154));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (26))){
var inst_16862 = (state_17411[(2)]);
var inst_16863 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_16864 = null;
var inst_16865 = [new cljs.core.Keyword(null,"error","error",(-978969032)),null,inst_16864,inst_16862];
var inst_16866 = cljs.core.PersistentHashMap.fromArrays(inst_16863,inst_16865);
var inst_16867 = cljs.test.do_report.call(null,inst_16866);
var state_17411__$1 = state_17411;
var statearr_17663_18074 = state_17411__$1;
(statearr_17663_18074[(2)] = inst_16867);

(statearr_17663_18074[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (58))){
var inst_17011 = (state_17411[(2)]);
var _ = (function (){var statearr_17664 = state_17411;
(statearr_17664[(4)] = cljs.core.rest.call(null,(state_17411[(4)])));

return statearr_17664;
})();
var state_17411__$1 = (function (){var statearr_17665 = state_17411;
(statearr_17665[(47)] = inst_17011);

return statearr_17665;
})();
var statearr_17666_18075 = state_17411__$1;
(statearr_17666_18075[(2)] = true);

(statearr_17666_18075[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (90))){
var inst_17135 = (state_17411[(2)]);
var state_17411__$1 = (function (){var statearr_17667 = state_17411;
(statearr_17667[(48)] = inst_17135);

return statearr_17667;
})();
var statearr_17668_18076 = state_17411__$1;
(statearr_17668_18076[(2)] = null);

(statearr_17668_18076[(1)] = (91));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (122))){
var _ = (function (){var statearr_17670 = state_17411;
(statearr_17670[(4)] = cljs.core.cons.call(null,(129),(state_17411[(4)])));

return statearr_17670;
})();
var inst_17285 = cljs.core.PersistentHashMap.EMPTY;
var inst_17286 = eos_cljs.core.transact.call(null,e2e.proposals.prop_acc,"cycleupdate",inst_17285);
var inst_17287 = cljs.core.async.interop.p__GT_c.call(null,inst_17286);
var state_17411__$1 = state_17411;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17411__$1,(130),inst_17287);
} else {
if((state_val_17412 === (154))){
var inst_17371 = (state_17411[(46)]);
var inst_17384 = (state_17411[(49)]);
var inst_17385 = (state_17411[(8)]);
var _ = (function (){var statearr_17671 = state_17411;
(statearr_17671[(4)] = cljs.core.cons.call(null,(157),(state_17411[(4)])));

return statearr_17671;
})();
var inst_17383 = (new cljs.core.List(null,(2),null,(1),null));
var inst_17384__$1 = (new cljs.core.List(null,inst_17371,inst_17383,(2),null));
var inst_17385__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_17384__$1);
var state_17411__$1 = (function (){var statearr_17672 = state_17411;
(statearr_17672[(49)] = inst_17384__$1);

(statearr_17672[(8)] = inst_17385__$1);

return statearr_17672;
})();
if(cljs.core.truth_(inst_17385__$1)){
var statearr_17673_18077 = state_17411__$1;
(statearr_17673_18077[(1)] = (158));

} else {
var statearr_17674_18078 = state_17411__$1;
(statearr_17674_18078[(1)] = (159));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (27))){
var _ = (function (){var statearr_17675 = state_17411;
(statearr_17675[(4)] = cljs.core.rest.call(null,(state_17411[(4)])));

return statearr_17675;
})();
var state_17411__$1 = state_17411;
var ex17669 = (state_17411__$1[(2)]);
var statearr_17676_18079 = state_17411__$1;
(statearr_17676_18079[(5)] = ex17669);


var statearr_17677_18080 = state_17411__$1;
(statearr_17677_18080[(1)] = (26));

(statearr_17677_18080[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (59))){
var inst_17025 = (state_17411[(50)]);
var inst_17025__$1 = (state_17411[(2)]);
var inst_17026 = (inst_17025__$1 instanceof cljs.core.ExceptionInfo);
var inst_17027 = cljs.core.ex_data.call(null,inst_17025__$1);
var inst_17028 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_17027);
var inst_17029 = cljs.core._EQ_.call(null,inst_17028,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_17030 = ((inst_17026) && (inst_17029));
var state_17411__$1 = (function (){var statearr_17678 = state_17411;
(statearr_17678[(50)] = inst_17025__$1);

return statearr_17678;
})();
if(cljs.core.truth_(inst_17030)){
var statearr_17679_18081 = state_17411__$1;
(statearr_17679_18081[(1)] = (60));

} else {
var statearr_17680_18082 = state_17411__$1;
(statearr_17680_18082[(1)] = (61));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (91))){
var _ = (function (){var statearr_17681 = state_17411;
(statearr_17681[(4)] = cljs.core.cons.call(null,(94),(state_17411[(4)])));

return statearr_17681;
})();
var state_17411__$1 = state_17411;
var statearr_17682_18083 = state_17411__$1;
(statearr_17682_18083[(1)] = (95));



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (123))){
var inst_17330 = (state_17411[(2)]);
var inst_17335 = eos_cljs.core.get_table_rows.call(null,e2e.proposals.prop_acc,e2e.proposals.prop_acc,"config");
var inst_17336 = cljs.core.async.interop.p__GT_c.call(null,inst_17335);
var state_17411__$1 = (function (){var statearr_17685 = state_17411;
(statearr_17685[(51)] = inst_17330);

return statearr_17685;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17411__$1,(141),inst_17336);
} else {
if((state_val_17412 === (155))){
var inst_17408 = (state_17411[(2)]);
var inst_17409 = done.call(null);
var state_17411__$1 = (function (){var statearr_17686 = state_17411;
(statearr_17686[(52)] = inst_17408);

return statearr_17686;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17411__$1,inst_17409);
} else {
if((state_val_17412 === (28))){
var _ = (function (){var statearr_17687 = state_17411;
(statearr_17687[(4)] = cljs.core.rest.call(null,(state_17411[(4)])));

return statearr_17687;
})();
var state_17411__$1 = state_17411;
var ex17684 = (state_17411__$1[(2)]);
var statearr_17688_18084 = state_17411__$1;
(statearr_17688_18084[(5)] = ex17684);


if((ex17684 instanceof Error)){
var statearr_17689_18085 = state_17411__$1;
(statearr_17689_18085[(1)] = (23));

(statearr_17689_18085[(5)] = null);

} else {
throw ex17684;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (60))){
var inst_17025 = (state_17411[(50)]);
var inst_17032 = (function(){throw inst_17025})();
var state_17411__$1 = state_17411;
var statearr_17690_18086 = state_17411__$1;
(statearr_17690_18086[(2)] = inst_17032);

(statearr_17690_18086[(1)] = (62));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (92))){
var inst_17163 = (state_17411[(2)]);
var _ = (function (){var statearr_17691 = state_17411;
(statearr_17691[(4)] = cljs.core.rest.call(null,(state_17411[(4)])));

return statearr_17691;
})();
var state_17411__$1 = state_17411;
var statearr_17692_18087 = state_17411__$1;
(statearr_17692_18087[(2)] = inst_17163);

(statearr_17692_18087[(1)] = (80));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (124))){
var inst_17260 = (state_17411[(2)]);
var inst_17261 = cljs.core.prn.call(null,"test failed with ",inst_17260);
var state_17411__$1 = (function (){var statearr_17693 = state_17411;
(statearr_17693[(53)] = inst_17261);

return statearr_17693;
})();
var statearr_17694_18088 = state_17411__$1;
(statearr_17694_18088[(2)] = null);

(statearr_17694_18088[(1)] = (125));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (156))){
var inst_17372 = (state_17411[(2)]);
var inst_17373 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_17374 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),new cljs.core.Symbol(null,"cycle","cycle",(-1944070485),null),(2));
var inst_17375 = [new cljs.core.Keyword(null,"error","error",(-978969032)),null,inst_17374,inst_17372];
var inst_17376 = cljs.core.PersistentHashMap.fromArrays(inst_17373,inst_17375);
var inst_17377 = cljs.test.do_report.call(null,inst_17376);
var state_17411__$1 = state_17411;
var statearr_17695_18089 = state_17411__$1;
(statearr_17695_18089[(2)] = inst_17377);

(statearr_17695_18089[(1)] = (155));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (29))){
var inst_16897 = (state_17411[(54)]);
var inst_16897__$1 = (state_17411[(2)]);
var inst_16898 = (inst_16897__$1 instanceof cljs.core.ExceptionInfo);
var inst_16899 = cljs.core.ex_data.call(null,inst_16897__$1);
var inst_16900 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_16899);
var inst_16901 = cljs.core._EQ_.call(null,inst_16900,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_16902 = ((inst_16898) && (inst_16901));
var state_17411__$1 = (function (){var statearr_17696 = state_17411;
(statearr_17696[(54)] = inst_16897__$1);

return statearr_17696;
})();
if(cljs.core.truth_(inst_16902)){
var statearr_17697_18090 = state_17411__$1;
(statearr_17697_18090[(1)] = (30));

} else {
var statearr_17698_18091 = state_17411__$1;
(statearr_17698_18091[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (61))){
var inst_17025 = (state_17411[(50)]);
var state_17411__$1 = state_17411;
var statearr_17699_18092 = state_17411__$1;
(statearr_17699_18092[(2)] = inst_17025);

(statearr_17699_18092[(1)] = (62));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (93))){
var inst_17136 = (state_17411[(2)]);
var inst_17137 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_17138 = true;
var inst_17139 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can progress cycle",inst_17138,inst_17136];
var inst_17140 = cljs.core.PersistentHashMap.fromArrays(inst_17137,inst_17139);
var inst_17141 = cljs.test.do_report.call(null,inst_17140);
var state_17411__$1 = state_17411;
var statearr_17701_18093 = state_17411__$1;
(statearr_17701_18093[(2)] = inst_17141);

(statearr_17701_18093[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (125))){
var _ = (function (){var statearr_17702 = state_17411;
(statearr_17702[(4)] = cljs.core.cons.call(null,(128),(state_17411[(4)])));

return statearr_17702;
})();
var inst_17273 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_17274 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can progress cycle"];
var inst_17275 = cljs.core.PersistentHashMap.fromArrays(inst_17273,inst_17274);
var inst_17276 = cljs.test.do_report.call(null,inst_17275);
var ___$1 = (function (){var statearr_17703 = state_17411;
(statearr_17703[(4)] = cljs.core.rest.call(null,(state_17411[(4)])));

return statearr_17703;
})();
var state_17411__$1 = state_17411;
var statearr_17704_18094 = state_17411__$1;
(statearr_17704_18094[(2)] = inst_17276);

(statearr_17704_18094[(1)] = (126));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (157))){
var _ = (function (){var statearr_17705 = state_17411;
(statearr_17705[(4)] = cljs.core.rest.call(null,(state_17411[(4)])));

return statearr_17705;
})();
var state_17411__$1 = state_17411;
var ex17700 = (state_17411__$1[(2)]);
var statearr_17706_18095 = state_17411__$1;
(statearr_17706_18095[(5)] = ex17700);


var statearr_17707_18096 = state_17411__$1;
(statearr_17707_18096[(1)] = (156));

(statearr_17707_18096[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (30))){
var inst_16897 = (state_17411[(54)]);
var inst_16904 = (function(){throw inst_16897})();
var state_17411__$1 = state_17411;
var statearr_17709_18097 = state_17411__$1;
(statearr_17709_18097[(2)] = inst_16904);

(statearr_17709_18097[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (62))){
var inst_17036 = (state_17411[(15)]);
var inst_17035 = (state_17411[(2)]);
var inst_17036__$1 = cljs.core.nth.call(null,inst_17035,(0),null);
var inst_17038 = (inst_17036__$1 == null);
var inst_17039 = cljs.core.not.call(null,inst_17038);
var state_17411__$1 = (function (){var statearr_17710 = state_17411;
(statearr_17710[(15)] = inst_17036__$1);

return statearr_17710;
})();
if(inst_17039){
var statearr_17711_18098 = state_17411__$1;
(statearr_17711_18098[(1)] = (63));

} else {
var statearr_17712_18099 = state_17411__$1;
(statearr_17712_18099[(1)] = (64));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (94))){
var _ = (function (){var statearr_17713 = state_17411;
(statearr_17713[(4)] = cljs.core.rest.call(null,(state_17411[(4)])));

return statearr_17713;
})();
var state_17411__$1 = state_17411;
var ex17708 = (state_17411__$1[(2)]);
var statearr_17714_18100 = state_17411__$1;
(statearr_17714_18100[(5)] = ex17708);


var statearr_17715_18101 = state_17411__$1;
(statearr_17715_18101[(1)] = (93));

(statearr_17715_18101[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (126))){
var inst_17279 = (state_17411[(2)]);
var state_17411__$1 = state_17411;
var statearr_17716_18102 = state_17411__$1;
(statearr_17716_18102[(2)] = inst_17279);

(statearr_17716_18102[(1)] = (123));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (158))){
var inst_17384 = (state_17411[(49)]);
var inst_17387 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_17388 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),new cljs.core.Symbol(null,"cycle","cycle",(-1944070485),null),(2));
var inst_17389 = cljs.core.cons.call(null,cljs.core._EQ_,inst_17384);
var inst_17390 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),null,inst_17388,inst_17389];
var inst_17391 = cljs.core.PersistentHashMap.fromArrays(inst_17387,inst_17390);
var inst_17392 = cljs.test.do_report.call(null,inst_17391);
var state_17411__$1 = state_17411;
var statearr_17717_18103 = state_17411__$1;
(statearr_17717_18103[(2)] = inst_17392);

(statearr_17717_18103[(1)] = (160));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (31))){
var inst_16897 = (state_17411[(54)]);
var state_17411__$1 = state_17411;
var statearr_17718_18104 = state_17411__$1;
(statearr_17718_18104[(2)] = inst_16897);

(statearr_17718_18104[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (63))){
var inst_17036 = (state_17411[(15)]);
var inst_17041 = inst_17036.cljs$lang$protocol_mask$partition0$;
var inst_17042 = (inst_17041 & (64));
var inst_17043 = inst_17036.cljs$core$ISeq$;
var inst_17044 = (cljs.core.PROTOCOL_SENTINEL === inst_17043);
var inst_17045 = ((inst_17042) || (inst_17044));
var state_17411__$1 = state_17411;
if(cljs.core.truth_(inst_17045)){
var statearr_17719_18105 = state_17411__$1;
(statearr_17719_18105[(1)] = (66));

} else {
var statearr_17720_18106 = state_17411__$1;
(statearr_17720_18106[(1)] = (67));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (95))){
var inst_17148 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_17149 = true;
var inst_17150 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"can progress cycle",inst_17149,true];
var inst_17151 = cljs.core.PersistentHashMap.fromArrays(inst_17148,inst_17150);
var inst_17152 = cljs.test.do_report.call(null,inst_17151);
var state_17411__$1 = state_17411;
var statearr_17721_18107 = state_17411__$1;
(statearr_17721_18107[(2)] = inst_17152);

(statearr_17721_18107[(1)] = (97));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (127))){
var inst_17262 = (state_17411[(2)]);
var inst_17263 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_17264 = null;
var inst_17265 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can progress cycle",inst_17264,inst_17262];
var inst_17266 = cljs.core.PersistentHashMap.fromArrays(inst_17263,inst_17265);
var inst_17267 = cljs.test.do_report.call(null,inst_17266);
var state_17411__$1 = state_17411;
var statearr_17722_18108 = state_17411__$1;
(statearr_17722_18108[(2)] = inst_17267);

(statearr_17722_18108[(1)] = (126));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_17412 === (159))){
var inst_17384 = (state_17411[(49)]);
var inst_17394 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_17395 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),new cljs.core.Symbol(null,"cycle","cycle",(-1944070485),null),(2));
var inst_17396 = new cljs.core.Symbol(null,"not","not",(1044554643),null);
var inst_17397 = new cljs.core.Symbol(null,"=","=",(-1501502141),null);
var inst_17398 = cljs.core.cons.call(null,inst_17397,inst_17384);
var inst_17399 = (new cljs.core.List(null,inst_17398,null,(1),null));
var inst_17400 = (new cljs.core.List(null,inst_17396,inst_17399,(2),null));
var inst_17401 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),null,inst_17395,inst_17400];
var inst_17402 = cljs.core.PersistentHashMap.fromArrays(inst_17394,inst_17401);
var inst_17403 = cljs.test.do_report.call(null,inst_17402);
var state_17411__$1 = state_17411;
var statearr_17723_18109 = state_17411__$1;
(statearr_17723_18109[(2)] = inst_17403);

(statearr_17723_18109[(1)] = (160));


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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
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
var e2e$proposals$state_machine__15__auto__ = null;
var e2e$proposals$state_machine__15__auto____0 = (function (){
var statearr_17724 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17724[(0)] = e2e$proposals$state_machine__15__auto__);

(statearr_17724[(1)] = (1));

return statearr_17724;
});
var e2e$proposals$state_machine__15__auto____1 = (function (state_17411){
while(true){
var ret_value__16__auto__ = (function (){try{while(true){
var result__17__auto__ = switch__14__auto__.call(null,state_17411);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__17__auto__;
}
break;
}
}catch (e17725){var ex__18__auto__ = e17725;
var statearr_17726_18110 = state_17411;
(statearr_17726_18110[(2)] = ex__18__auto__);


if(cljs.core.seq.call(null,(state_17411[(4)]))){
var statearr_17727_18111 = state_17411;
(statearr_17727_18111[(1)] = cljs.core.first.call(null,(state_17411[(4)])));

} else {
throw ex__18__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__18112 = state_17411;
state_17411 = G__18112;
continue;
} else {
return ret_value__16__auto__;
}
break;
}
});
e2e$proposals$state_machine__15__auto__ = function(state_17411){
switch(arguments.length){
case 0:
return e2e$proposals$state_machine__15__auto____0.call(this);
case 1:
return e2e$proposals$state_machine__15__auto____1.call(this,state_17411);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
e2e$proposals$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$0 = e2e$proposals$state_machine__15__auto____0;
e2e$proposals$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$1 = e2e$proposals$state_machine__15__auto____1;
return e2e$proposals$state_machine__15__auto__;
})()
;})(switch__14__auto__,c__19__auto__,___192__auto__))
})();
var state__21__auto__ = (function (){var statearr_17728 = f__20__auto__.call(null);
(statearr_17728[(6)] = c__19__auto__);

return statearr_17728;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21__auto__);
});})(c__19__auto__,___192__auto__))
);

return c__19__auto__;
});

e2e.proposals.t_e2e$proposals15829.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta15830","meta15830",(-483094600),null)], null);
});

e2e.proposals.t_e2e$proposals15829.cljs$lang$type = true;

e2e.proposals.t_e2e$proposals15829.cljs$lang$ctorStr = "e2e.proposals/t_e2e$proposals15829";

e2e.proposals.t_e2e$proposals15829.cljs$lang$ctorPrWriter = (function (this__9776__auto__,writer__9777__auto__,opt__9778__auto__){
return cljs.core._write.call(null,writer__9777__auto__,"e2e.proposals/t_e2e$proposals15829");
});

/**
 * Positional factory function for e2e.proposals/t_e2e$proposals15829.
 */
e2e.proposals.__GT_t_e2e$proposals15829 = (function e2e$proposals$__GT_t_e2e$proposals15829(meta15830){
return (new e2e.proposals.t_e2e$proposals15829(meta15830));
});

}

return (new e2e.proposals.t_e2e$proposals15829(null));
});

e2e.proposals.cycle_add.cljs$lang$var = new cljs.core.Var(function(){return e2e.proposals.cycle_add;},new cljs.core.Symbol("e2e.proposals","cycle-add","e2e.proposals/cycle-add",(1399694237),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"e2e.proposals","e2e.proposals",(1479174227),null),new cljs.core.Symbol(null,"cycle-add","cycle-add",(1071188336),null),"e2e/proposals.cljs",(19),(1),(142),(142),cljs.core.List.EMPTY,null,(cljs.core.truth_(e2e.proposals.cycle_add)?e2e.proposals.cycle_add.cljs$lang$test:null)]));
e2e.proposals.eos_tx_owner = (function e2e$proposals$eos_tx_owner(contr,action,args){
return eos_cljs.core.transact.call(null,contr,action,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),e2e.proposals.owner_acc,new cljs.core.Keyword(null,"permission","permission",(-511292572)),"active"], null)], null));
});
e2e.proposals.cycle_update = (function e2e$proposals$cycle_update(){
return cljs.test.test_var.call(null,e2e.proposals.cycle_update.cljs$lang$var);
});
e2e.proposals.cycle_update.cljs$lang$test = (function (){
if((typeof e2e !== 'undefined') && (typeof e2e.proposals !== 'undefined') && (typeof e2e.proposals.t_e2e$proposals18113 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IFn}
*/
e2e.proposals.t_e2e$proposals18113 = (function (meta18114){
this.meta18114 = meta18114;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
e2e.proposals.t_e2e$proposals18113.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18115,meta18114__$1){
var self__ = this;
var _18115__$1 = this;
return (new e2e.proposals.t_e2e$proposals18113(meta18114__$1));
});

e2e.proposals.t_e2e$proposals18113.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18115){
var self__ = this;
var _18115__$1 = this;
return self__.meta18114;
});

e2e.proposals.t_e2e$proposals18113.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL;

e2e.proposals.t_e2e$proposals18113.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___192__auto__ = self____$1;
var c__19__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19__auto__,___192__auto__,self____$1){
return (function (){
var f__20__auto__ = (function (){var switch__14__auto__ = ((function (c__19__auto__,___192__auto__,self____$1){
return (function (state_18376){
var state_val_18377 = (state_18376[(1)]);
if((state_val_18377 === (32))){
var inst_18242 = (state_18376[(7)]);
var inst_18242__$1 = (state_18376[(2)]);
var inst_18243 = (inst_18242__$1 instanceof cljs.core.ExceptionInfo);
var inst_18244 = cljs.core.ex_data.call(null,inst_18242__$1);
var inst_18245 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_18244);
var inst_18246 = cljs.core._EQ_.call(null,inst_18245,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_18247 = ((inst_18243) && (inst_18246));
var state_18376__$1 = (function (){var statearr_18379 = state_18376;
(statearr_18379[(7)] = inst_18242__$1);

return statearr_18379;
})();
if(cljs.core.truth_(inst_18247)){
var statearr_18380_18909 = state_18376__$1;
(statearr_18380_18909[(1)] = (33));

} else {
var statearr_18381_18910 = state_18376__$1;
(statearr_18381_18910[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18377 === (64))){
var _ = (function (){var statearr_18382 = state_18376;
(statearr_18382[(4)] = cljs.core.rest.call(null,(state_18376[(4)])));

return statearr_18382;
})();
var state_18376__$1 = state_18376;
var ex18378 = (state_18376__$1[(2)]);
var statearr_18383_18911 = state_18376__$1;
(statearr_18383_18911[(5)] = ex18378);


var statearr_18384_18912 = state_18376__$1;
(statearr_18384_18912[(1)] = (63));

(statearr_18384_18912[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18377 === (1))){
var state_18376__$1 = state_18376;
var statearr_18385_18913 = state_18376__$1;
(statearr_18385_18913[(2)] = null);

(statearr_18385_18913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18377 === (33))){
var inst_18242 = (state_18376[(7)]);
var inst_18249 = (function(){throw inst_18242})();
var state_18376__$1 = state_18376;
var statearr_18386_18914 = state_18376__$1;
(statearr_18386_18914[(2)] = inst_18249);

(statearr_18386_18914[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18377 === (2))){
var _ = (function (){var statearr_18387 = state_18376;
(statearr_18387[(4)] = cljs.core.cons.call(null,(15),(state_18376[(4)])));

return statearr_18387;
})();
var inst_18161 = [new cljs.core.Keyword(null,"id","id",(-1388402092)),new cljs.core.Keyword(null,"start_time","start_time",(889556682)),new cljs.core.Keyword(null,"budget","budget",(-405386281))];
var inst_18162 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18163 = [new cljs.core.Keyword(null,"quantity","quantity",(-1929050694)),new cljs.core.Keyword(null,"contract","contract",(798152745))];
var inst_18164 = ["326000.0000 EFX",e2e.proposals.token_acc];
var inst_18165 = cljs.core.PersistentHashMap.fromArrays(inst_18163,inst_18164);
var inst_18166 = [inst_18165];
var inst_18167 = (new cljs.core.PersistentVector(null,(1),(5),inst_18162,inst_18166,null));
var inst_18168 = [(2),"2021-01-01 12:00:00",inst_18167];
var inst_18169 = cljs.core.PersistentHashMap.fromArrays(inst_18161,inst_18168);
var inst_18170 = eos_cljs.core.transact.call(null,e2e.proposals.prop_acc,"updatecycle",inst_18169);
var inst_18171 = cljs.core.async.interop.p__GT_c.call(null,inst_18170);
var state_18376__$1 = state_18376;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18376__$1,(16),inst_18171);
} else {
if((state_val_18377 === (34))){
var inst_18242 = (state_18376[(7)]);
var state_18376__$1 = state_18376;
var statearr_18388_18915 = state_18376__$1;
(statearr_18388_18915[(2)] = inst_18242);

(statearr_18388_18915[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18377 === (3))){
var inst_18204 = (state_18376[(2)]);
var state_18376__$1 = (function (){var statearr_18389 = state_18376;
(statearr_18389[(8)] = inst_18204);

return statearr_18389;
})();
var statearr_18390_18916 = state_18376__$1;
(statearr_18390_18916[(2)] = null);

(statearr_18390_18916[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18377 === (35))){
var inst_18252 = (state_18376[(2)]);
var state_18376__$1 = (function (){var statearr_18391 = state_18376;
(statearr_18391[(9)] = inst_18252);

return statearr_18391;
})();
var statearr_18392_18917 = state_18376__$1;
(statearr_18392_18917[(2)] = null);

(statearr_18392_18917[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18377 === (4))){
var inst_18119 = (state_18376[(10)]);
var inst_18120 = (state_18376[(11)]);
var inst_18117 = (state_18376[(2)]);
var inst_18118 = inst_18117.cause;
var inst_18119__$1 = inst_18118.message;
var inst_18120__$1 = clojure.string.ends_with_QMARK_.call(null,inst_18119__$1,"cycle is not in the future");
var inst_18121 = (!(inst_18120__$1));
var state_18376__$1 = (function (){var statearr_18393 = state_18376;
(statearr_18393[(10)] = inst_18119__$1);

(statearr_18393[(11)] = inst_18120__$1);

return statearr_18393;
})();
if(inst_18121){
var statearr_18394_18918 = state_18376__$1;
(statearr_18394_18918[(1)] = (5));

} else {
var statearr_18395_18919 = state_18376__$1;
(statearr_18395_18919[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18377 === (36))){
var _ = (function (){var statearr_18396 = state_18376;
(statearr_18396[(4)] = cljs.core.cons.call(null,(39),(state_18376[(4)])));

return statearr_18396;
})();
var state_18376__$1 = state_18376;
var statearr_18397_18920 = state_18376__$1;
(statearr_18397_18920[(1)] = (40));



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18377 === (5))){
var inst_18119 = (state_18376[(10)]);
var inst_18123 = ["expected =","cycle is not in the future"," actual = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_18119)].join('');
var inst_18124 = cljs.core.prn.call(null,inst_18123);
var state_18376__$1 = state_18376;
var statearr_18399_18921 = state_18376__$1;
(statearr_18399_18921[(2)] = inst_18124);

(statearr_18399_18921[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18377 === (37))){
var inst_18280 = (state_18376[(2)]);
var _ = (function (){var statearr_18400 = state_18376;
(statearr_18400[(4)] = cljs.core.rest.call(null,(state_18376[(4)])));

return statearr_18400;
})();
var state_18376__$1 = state_18376;
var statearr_18401_18922 = state_18376__$1;
(statearr_18401_18922[(2)] = inst_18280);

(statearr_18401_18922[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18377 === (6))){
var state_18376__$1 = state_18376;
var statearr_18402_18923 = state_18376__$1;
(statearr_18402_18923[(2)] = null);

(statearr_18402_18923[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18377 === (38))){
var inst_18253 = (state_18376[(2)]);
var inst_18254 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_18255 = true;
var inst_18256 = [new cljs.core.Keyword(null,"error","error",(-978969032)),null,inst_18255,inst_18253];
var inst_18257 = cljs.core.PersistentHashMap.fromArrays(inst_18254,inst_18256);
var inst_18258 = cljs.test.do_report.call(null,inst_18257);
var state_18376__$1 = state_18376;
var statearr_18404_18924 = state_18376__$1;
(statearr_18404_18924[(2)] = inst_18258);

(statearr_18404_18924[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18377 === (7))){
var inst_18127 = (state_18376[(2)]);
var state_18376__$1 = (function (){var statearr_18405 = state_18376;
(statearr_18405[(12)] = inst_18127);

return statearr_18405;
})();
var statearr_18406_18925 = state_18376__$1;
(statearr_18406_18925[(2)] = null);

(statearr_18406_18925[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18377 === (39))){
var _ = (function (){var statearr_18407 = state_18376;
(statearr_18407[(4)] = cljs.core.rest.call(null,(state_18376[(4)])));

return statearr_18407;
})();
var state_18376__$1 = state_18376;
var ex18403 = (state_18376__$1[(2)]);
var statearr_18408_18926 = state_18376__$1;
(statearr_18408_18926[(5)] = ex18403);


var statearr_18409_18927 = state_18376__$1;
(statearr_18409_18927[(1)] = (38));

(statearr_18409_18927[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18377 === (8))){
var inst_18120 = (state_18376[(11)]);
var _ = (function (){var statearr_18410 = state_18376;
(statearr_18410[(4)] = cljs.core.cons.call(null,(11),(state_18376[(4)])));

return statearr_18410;
})();
var state_18376__$1 = state_18376;
if(cljs.core.truth_(inst_18120)){
var statearr_18411_18928 = state_18376__$1;
(statearr_18411_18928[(1)] = (12));

} else {
var statearr_18412_18929 = state_18376__$1;
(statearr_18412_18929[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18377 === (40))){
var inst_18265 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_18266 = true;
var inst_18267 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),null,inst_18266,true];
var inst_18268 = cljs.core.PersistentHashMap.fromArrays(inst_18265,inst_18267);
var inst_18269 = cljs.test.do_report.call(null,inst_18268);
var state_18376__$1 = state_18376;
var statearr_18413_18930 = state_18376__$1;
(statearr_18413_18930[(2)] = inst_18269);

(statearr_18413_18930[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18377 === (9))){
var inst_18155 = (state_18376[(2)]);
var state_18376__$1 = state_18376;
var statearr_18414_18931 = state_18376__$1;
(statearr_18414_18931[(2)] = inst_18155);

(statearr_18414_18931[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18377 === (41))){
var inst_18271 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_18272 = true;
var inst_18273 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),null,inst_18272,true];
var inst_18274 = cljs.core.PersistentHashMap.fromArrays(inst_18271,inst_18273);
var inst_18275 = cljs.test.do_report.call(null,inst_18274);
var state_18376__$1 = state_18376;
var statearr_18415_18932 = state_18376__$1;
(statearr_18415_18932[(2)] = inst_18275);

(statearr_18415_18932[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18377 === (10))){
var inst_18128 = (state_18376[(2)]);
var inst_18129 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_18130 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_18131 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"cycle must be in the future",inst_18130,inst_18128];
var inst_18132 = cljs.core.PersistentHashMap.fromArrays(inst_18129,inst_18131);
var inst_18133 = cljs.test.do_report.call(null,inst_18132);
var state_18376__$1 = state_18376;
var statearr_18417_18933 = state_18376__$1;
(statearr_18417_18933[(2)] = inst_18133);

(statearr_18417_18933[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18377 === (42))){
var inst_18277 = (state_18376[(2)]);
var _ = (function (){var statearr_18418 = state_18376;
(statearr_18418[(4)] = cljs.core.rest.call(null,(state_18376[(4)])));

return statearr_18418;
})();
var state_18376__$1 = (function (){var statearr_18419 = state_18376;
(statearr_18419[(13)] = inst_18277);

return statearr_18419;
})();
var statearr_18420_18934 = state_18376__$1;
(statearr_18420_18934[(2)] = true);

(statearr_18420_18934[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18377 === (11))){
var _ = (function (){var statearr_18421 = state_18376;
(statearr_18421[(4)] = cljs.core.rest.call(null,(state_18376[(4)])));

return statearr_18421;
})();
var state_18376__$1 = state_18376;
var ex18416 = (state_18376__$1[(2)]);
var statearr_18422_18935 = state_18376__$1;
(statearr_18422_18935[(5)] = ex18416);


var statearr_18423_18936 = state_18376__$1;
(statearr_18423_18936[(1)] = (10));

(statearr_18423_18936[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18377 === (43))){
var _ = (function (){var statearr_18424 = state_18376;
(statearr_18424[(4)] = cljs.core.cons.call(null,(56),(state_18376[(4)])));

return statearr_18424;
})();
var inst_18330 = [new cljs.core.Keyword(null,"id","id",(-1388402092)),new cljs.core.Keyword(null,"start_time","start_time",(889556682)),new cljs.core.Keyword(null,"budget","budget",(-405386281))];
var inst_18331 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18332 = [new cljs.core.Keyword(null,"quantity","quantity",(-1929050694)),new cljs.core.Keyword(null,"contract","contract",(798152745))];
var inst_18333 = ["326000.0000 EFX",e2e.proposals.token_acc];
var inst_18334 = cljs.core.PersistentHashMap.fromArrays(inst_18332,inst_18333);
var inst_18335 = [inst_18334];
var inst_18336 = (new cljs.core.PersistentVector(null,(1),(5),inst_18331,inst_18335,null));
var inst_18337 = [(3),"2021-01-01 12:00:00",inst_18336];
var inst_18338 = cljs.core.PersistentHashMap.fromArrays(inst_18330,inst_18337);
var inst_18339 = e2e.proposals.eos_tx_owner.call(null,e2e.proposals.prop_acc,"updatecycle",inst_18338);
var inst_18340 = cljs.core.async.interop.p__GT_c.call(null,inst_18339);
var state_18376__$1 = state_18376;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18376__$1,(57),inst_18340);
} else {
if((state_val_18377 === (12))){
var inst_18120 = (state_18376[(11)]);
var inst_18140 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_18141 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_18142 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"cycle must be in the future",inst_18141,inst_18120];
var inst_18143 = cljs.core.PersistentHashMap.fromArrays(inst_18140,inst_18142);
var inst_18144 = cljs.test.do_report.call(null,inst_18143);
var state_18376__$1 = state_18376;
var statearr_18425_18937 = state_18376__$1;
(statearr_18425_18937[(2)] = inst_18144);

(statearr_18425_18937[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18377 === (44))){
var inst_18373 = (state_18376[(2)]);
var inst_18374 = done.call(null);
var state_18376__$1 = (function (){var statearr_18426 = state_18376;
(statearr_18426[(14)] = inst_18373);

return statearr_18426;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18376__$1,inst_18374);
} else {
if((state_val_18377 === (13))){
var inst_18120 = (state_18376[(11)]);
var inst_18146 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_18147 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_18148 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"cycle must be in the future",inst_18147,inst_18120];
var inst_18149 = cljs.core.PersistentHashMap.fromArrays(inst_18146,inst_18148);
var inst_18150 = cljs.test.do_report.call(null,inst_18149);
var state_18376__$1 = state_18376;
var statearr_18427_18938 = state_18376__$1;
(statearr_18427_18938[(2)] = inst_18150);

(statearr_18427_18938[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18377 === (45))){
var inst_18286 = (state_18376[(15)]);
var inst_18288 = (state_18376[(16)]);
var inst_18284 = (state_18376[(2)]);
var inst_18285 = inst_18284.cause;
var inst_18286__$1 = inst_18285.message;
var inst_18287 = ["missing authority of ",e2e.proposals.prop_acc].join('');
var inst_18288__$1 = clojure.string.ends_with_QMARK_.call(null,inst_18286__$1,inst_18287);
var inst_18289 = (!(inst_18288__$1));
var state_18376__$1 = (function (){var statearr_18428 = state_18376;
(statearr_18428[(15)] = inst_18286__$1);

(statearr_18428[(16)] = inst_18288__$1);

return statearr_18428;
})();
if(inst_18289){
var statearr_18429_18939 = state_18376__$1;
(statearr_18429_18939[(1)] = (46));

} else {
var statearr_18430_18940 = state_18376__$1;
(statearr_18430_18940[(1)] = (47));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18377 === (14))){
var inst_18120 = (state_18376[(11)]);
var inst_18152 = (state_18376[(2)]);
var _ = (function (){var statearr_18432 = state_18376;
(statearr_18432[(4)] = cljs.core.rest.call(null,(state_18376[(4)])));

return statearr_18432;
})();
var state_18376__$1 = (function (){var statearr_18433 = state_18376;
(statearr_18433[(17)] = inst_18152);

return statearr_18433;
})();
var statearr_18434_18941 = state_18376__$1;
(statearr_18434_18941[(2)] = inst_18120);

(statearr_18434_18941[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18377 === (46))){
var inst_18286 = (state_18376[(15)]);
var inst_18291 = ["missing authority of ",e2e.proposals.prop_acc].join('');
var inst_18292 = ["expected =",inst_18291," actual = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_18286)].join('');
var inst_18293 = cljs.core.prn.call(null,inst_18292);
var state_18376__$1 = state_18376;
var statearr_18435_18942 = state_18376__$1;
(statearr_18435_18942[(2)] = inst_18293);

(statearr_18435_18942[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18377 === (15))){
var _ = (function (){var statearr_18436 = state_18376;
(statearr_18436[(4)] = cljs.core.rest.call(null,(state_18376[(4)])));

return statearr_18436;
})();
var state_18376__$1 = state_18376;
var ex18431 = (state_18376__$1[(2)]);
var statearr_18437_18943 = state_18376__$1;
(statearr_18437_18943[(5)] = ex18431);


if((ex18431 instanceof Error)){
var statearr_18438_18944 = state_18376__$1;
(statearr_18438_18944[(1)] = (4));

(statearr_18438_18944[(5)] = null);

} else {
throw ex18431;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18377 === (47))){
var state_18376__$1 = state_18376;
var statearr_18439_18945 = state_18376__$1;
(statearr_18439_18945[(2)] = null);

(statearr_18439_18945[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18377 === (16))){
var inst_18173 = (state_18376[(18)]);
var inst_18173__$1 = (state_18376[(2)]);
var inst_18174 = (inst_18173__$1 instanceof cljs.core.ExceptionInfo);
var inst_18175 = cljs.core.ex_data.call(null,inst_18173__$1);
var inst_18176 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_18175);
var inst_18177 = cljs.core._EQ_.call(null,inst_18176,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_18178 = ((inst_18174) && (inst_18177));
var state_18376__$1 = (function (){var statearr_18440 = state_18376;
(statearr_18440[(18)] = inst_18173__$1);

return statearr_18440;
})();
if(cljs.core.truth_(inst_18178)){
var statearr_18441_18946 = state_18376__$1;
(statearr_18441_18946[(1)] = (17));

} else {
var statearr_18442_18947 = state_18376__$1;
(statearr_18442_18947[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18377 === (48))){
var inst_18296 = (state_18376[(2)]);
var state_18376__$1 = (function (){var statearr_18443 = state_18376;
(statearr_18443[(19)] = inst_18296);

return statearr_18443;
})();
var statearr_18444_18948 = state_18376__$1;
(statearr_18444_18948[(2)] = null);

(statearr_18444_18948[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18377 === (17))){
var inst_18173 = (state_18376[(18)]);
var inst_18180 = (function(){throw inst_18173})();
var state_18376__$1 = state_18376;
var statearr_18445_18949 = state_18376__$1;
(statearr_18445_18949[(2)] = inst_18180);

(statearr_18445_18949[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18377 === (49))){
var inst_18288 = (state_18376[(16)]);
var _ = (function (){var statearr_18446 = state_18376;
(statearr_18446[(4)] = cljs.core.cons.call(null,(52),(state_18376[(4)])));

return statearr_18446;
})();
var state_18376__$1 = state_18376;
if(cljs.core.truth_(inst_18288)){
var statearr_18447_18950 = state_18376__$1;
(statearr_18447_18950[(1)] = (53));

} else {
var statearr_18448_18951 = state_18376__$1;
(statearr_18448_18951[(1)] = (54));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18377 === (18))){
var inst_18173 = (state_18376[(18)]);
var state_18376__$1 = state_18376;
var statearr_18449_18952 = state_18376__$1;
(statearr_18449_18952[(2)] = inst_18173);

(statearr_18449_18952[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18377 === (50))){
var inst_18324 = (state_18376[(2)]);
var state_18376__$1 = state_18376;
var statearr_18450_18953 = state_18376__$1;
(statearr_18450_18953[(2)] = inst_18324);

(statearr_18450_18953[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18377 === (19))){
var inst_18183 = (state_18376[(2)]);
var state_18376__$1 = (function (){var statearr_18451 = state_18376;
(statearr_18451[(20)] = inst_18183);

return statearr_18451;
})();
var statearr_18452_18954 = state_18376__$1;
(statearr_18452_18954[(2)] = null);

(statearr_18452_18954[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18377 === (51))){
var inst_18297 = (state_18376[(2)]);
var inst_18298 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_18299 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_18300 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"must be contract owner",inst_18299,inst_18297];
var inst_18301 = cljs.core.PersistentHashMap.fromArrays(inst_18298,inst_18300);
var inst_18302 = cljs.test.do_report.call(null,inst_18301);
var state_18376__$1 = state_18376;
var statearr_18454_18955 = state_18376__$1;
(statearr_18454_18955[(2)] = inst_18302);

(statearr_18454_18955[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18377 === (20))){
var _ = (function (){var statearr_18455 = state_18376;
(statearr_18455[(4)] = cljs.core.cons.call(null,(23),(state_18376[(4)])));

return statearr_18455;
})();
var inst_18195 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_18196 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"cycle must be in the future"];
var inst_18197 = cljs.core.PersistentHashMap.fromArrays(inst_18195,inst_18196);
var inst_18198 = cljs.test.do_report.call(null,inst_18197);
var ___$1 = (function (){var statearr_18456 = state_18376;
(statearr_18456[(4)] = cljs.core.rest.call(null,(state_18376[(4)])));

return statearr_18456;
})();
var state_18376__$1 = state_18376;
var statearr_18457_18956 = state_18376__$1;
(statearr_18457_18956[(2)] = inst_18198);

(statearr_18457_18956[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18377 === (52))){
var _ = (function (){var statearr_18458 = state_18376;
(statearr_18458[(4)] = cljs.core.rest.call(null,(state_18376[(4)])));

return statearr_18458;
})();
var state_18376__$1 = state_18376;
var ex18453 = (state_18376__$1[(2)]);
var statearr_18459_18957 = state_18376__$1;
(statearr_18459_18957[(5)] = ex18453);


var statearr_18460_18958 = state_18376__$1;
(statearr_18460_18958[(1)] = (51));

(statearr_18460_18958[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18377 === (21))){
var inst_18201 = (state_18376[(2)]);
var _ = (function (){var statearr_18461 = state_18376;
(statearr_18461[(4)] = cljs.core.rest.call(null,(state_18376[(4)])));

return statearr_18461;
})();
var state_18376__$1 = state_18376;
var statearr_18462_18959 = state_18376__$1;
(statearr_18462_18959[(2)] = inst_18201);

(statearr_18462_18959[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18377 === (53))){
var inst_18288 = (state_18376[(16)]);
var inst_18309 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_18310 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_18311 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"must be contract owner",inst_18310,inst_18288];
var inst_18312 = cljs.core.PersistentHashMap.fromArrays(inst_18309,inst_18311);
var inst_18313 = cljs.test.do_report.call(null,inst_18312);
var state_18376__$1 = state_18376;
var statearr_18463_18960 = state_18376__$1;
(statearr_18463_18960[(2)] = inst_18313);

(statearr_18463_18960[(1)] = (55));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18377 === (22))){
var inst_18184 = (state_18376[(2)]);
var inst_18185 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_18186 = null;
var inst_18187 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"cycle must be in the future",inst_18186,inst_18184];
var inst_18188 = cljs.core.PersistentHashMap.fromArrays(inst_18185,inst_18187);
var inst_18189 = cljs.test.do_report.call(null,inst_18188);
var state_18376__$1 = state_18376;
var statearr_18465_18961 = state_18376__$1;
(statearr_18465_18961[(2)] = inst_18189);

(statearr_18465_18961[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18377 === (54))){
var inst_18288 = (state_18376[(16)]);
var inst_18315 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_18316 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_18317 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"must be contract owner",inst_18316,inst_18288];
var inst_18318 = cljs.core.PersistentHashMap.fromArrays(inst_18315,inst_18317);
var inst_18319 = cljs.test.do_report.call(null,inst_18318);
var state_18376__$1 = state_18376;
var statearr_18466_18962 = state_18376__$1;
(statearr_18466_18962[(2)] = inst_18319);

(statearr_18466_18962[(1)] = (55));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18377 === (23))){
var _ = (function (){var statearr_18467 = state_18376;
(statearr_18467[(4)] = cljs.core.rest.call(null,(state_18376[(4)])));

return statearr_18467;
})();
var state_18376__$1 = state_18376;
var ex18464 = (state_18376__$1[(2)]);
var statearr_18468_18963 = state_18376__$1;
(statearr_18468_18963[(5)] = ex18464);


var statearr_18469_18964 = state_18376__$1;
(statearr_18469_18964[(1)] = (22));

(statearr_18469_18964[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18377 === (55))){
var inst_18288 = (state_18376[(16)]);
var inst_18321 = (state_18376[(2)]);
var _ = (function (){var statearr_18471 = state_18376;
(statearr_18471[(4)] = cljs.core.rest.call(null,(state_18376[(4)])));

return statearr_18471;
})();
var state_18376__$1 = (function (){var statearr_18472 = state_18376;
(statearr_18472[(21)] = inst_18321);

return statearr_18472;
})();
var statearr_18473_18965 = state_18376__$1;
(statearr_18473_18965[(2)] = inst_18288);

(statearr_18473_18965[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18377 === (24))){
var _ = (function (){var statearr_18474 = state_18376;
(statearr_18474[(4)] = cljs.core.cons.call(null,(31),(state_18376[(4)])));

return statearr_18474;
})();
var inst_18230 = [new cljs.core.Keyword(null,"id","id",(-1388402092)),new cljs.core.Keyword(null,"start_time","start_time",(889556682)),new cljs.core.Keyword(null,"budget","budget",(-405386281))];
var inst_18231 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18232 = [new cljs.core.Keyword(null,"quantity","quantity",(-1929050694)),new cljs.core.Keyword(null,"contract","contract",(798152745))];
var inst_18233 = ["326000.0000 EFX",e2e.proposals.token_acc];
var inst_18234 = cljs.core.PersistentHashMap.fromArrays(inst_18232,inst_18233);
var inst_18235 = [inst_18234];
var inst_18236 = (new cljs.core.PersistentVector(null,(1),(5),inst_18231,inst_18235,null));
var inst_18237 = [(3),"2021-01-01 12:00:00",inst_18236];
var inst_18238 = cljs.core.PersistentHashMap.fromArrays(inst_18230,inst_18237);
var inst_18239 = eos_cljs.core.transact.call(null,e2e.proposals.prop_acc,"updatecycle",inst_18238);
var inst_18240 = cljs.core.async.interop.p__GT_c.call(null,inst_18239);
var state_18376__$1 = state_18376;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18376__$1,(32),inst_18240);
} else {
if((state_val_18377 === (56))){
var _ = (function (){var statearr_18475 = state_18376;
(statearr_18475[(4)] = cljs.core.rest.call(null,(state_18376[(4)])));

return statearr_18475;
})();
var state_18376__$1 = state_18376;
var ex18470 = (state_18376__$1[(2)]);
var statearr_18476_18966 = state_18376__$1;
(statearr_18476_18966[(5)] = ex18470);


if((ex18470 instanceof Error)){
var statearr_18477_18967 = state_18376__$1;
(statearr_18477_18967[(1)] = (45));

(statearr_18477_18967[(5)] = null);

} else {
throw ex18470;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18377 === (25))){
var inst_18283 = (state_18376[(2)]);
var state_18376__$1 = (function (){var statearr_18478 = state_18376;
(statearr_18478[(22)] = inst_18283);

return statearr_18478;
})();
var statearr_18479_18968 = state_18376__$1;
(statearr_18479_18968[(2)] = null);

(statearr_18479_18968[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18377 === (57))){
var inst_18342 = (state_18376[(23)]);
var inst_18342__$1 = (state_18376[(2)]);
var inst_18343 = (inst_18342__$1 instanceof cljs.core.ExceptionInfo);
var inst_18344 = cljs.core.ex_data.call(null,inst_18342__$1);
var inst_18345 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_18344);
var inst_18346 = cljs.core._EQ_.call(null,inst_18345,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_18347 = ((inst_18343) && (inst_18346));
var state_18376__$1 = (function (){var statearr_18480 = state_18376;
(statearr_18480[(23)] = inst_18342__$1);

return statearr_18480;
})();
if(cljs.core.truth_(inst_18347)){
var statearr_18481_18969 = state_18376__$1;
(statearr_18481_18969[(1)] = (58));

} else {
var statearr_18482_18970 = state_18376__$1;
(statearr_18482_18970[(1)] = (59));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18377 === (26))){
var inst_18205 = (state_18376[(2)]);
var inst_18206 = cljs.core.prn.call(null,"test failed with ",inst_18205);
var state_18376__$1 = (function (){var statearr_18483 = state_18376;
(statearr_18483[(24)] = inst_18206);

return statearr_18483;
})();
var statearr_18484_18971 = state_18376__$1;
(statearr_18484_18971[(2)] = null);

(statearr_18484_18971[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18377 === (58))){
var inst_18342 = (state_18376[(23)]);
var inst_18349 = (function(){throw inst_18342})();
var state_18376__$1 = state_18376;
var statearr_18485_18972 = state_18376__$1;
(statearr_18485_18972[(2)] = inst_18349);

(statearr_18485_18972[(1)] = (60));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18377 === (27))){
var _ = (function (){var statearr_18486 = state_18376;
(statearr_18486[(4)] = cljs.core.cons.call(null,(30),(state_18376[(4)])));

return statearr_18486;
})();
var inst_18218 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_18219 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),null];
var inst_18220 = cljs.core.PersistentHashMap.fromArrays(inst_18218,inst_18219);
var inst_18221 = cljs.test.do_report.call(null,inst_18220);
var ___$1 = (function (){var statearr_18487 = state_18376;
(statearr_18487[(4)] = cljs.core.rest.call(null,(state_18376[(4)])));

return statearr_18487;
})();
var state_18376__$1 = state_18376;
var statearr_18488_18973 = state_18376__$1;
(statearr_18488_18973[(2)] = inst_18221);

(statearr_18488_18973[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18377 === (59))){
var inst_18342 = (state_18376[(23)]);
var state_18376__$1 = state_18376;
var statearr_18489_18974 = state_18376__$1;
(statearr_18489_18974[(2)] = inst_18342);

(statearr_18489_18974[(1)] = (60));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18377 === (28))){
var inst_18224 = (state_18376[(2)]);
var state_18376__$1 = state_18376;
var statearr_18490_18975 = state_18376__$1;
(statearr_18490_18975[(2)] = inst_18224);

(statearr_18490_18975[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18377 === (60))){
var inst_18352 = (state_18376[(2)]);
var state_18376__$1 = (function (){var statearr_18491 = state_18376;
(statearr_18491[(25)] = inst_18352);

return statearr_18491;
})();
var statearr_18492_18976 = state_18376__$1;
(statearr_18492_18976[(2)] = null);

(statearr_18492_18976[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18377 === (29))){
var inst_18207 = (state_18376[(2)]);
var inst_18208 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_18209 = null;
var inst_18210 = [new cljs.core.Keyword(null,"error","error",(-978969032)),null,inst_18209,inst_18207];
var inst_18211 = cljs.core.PersistentHashMap.fromArrays(inst_18208,inst_18210);
var inst_18212 = cljs.test.do_report.call(null,inst_18211);
var state_18376__$1 = state_18376;
var statearr_18494_18977 = state_18376__$1;
(statearr_18494_18977[(2)] = inst_18212);

(statearr_18494_18977[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18377 === (61))){
var _ = (function (){var statearr_18495 = state_18376;
(statearr_18495[(4)] = cljs.core.cons.call(null,(64),(state_18376[(4)])));

return statearr_18495;
})();
var inst_18364 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_18365 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"must be contract owner"];
var inst_18366 = cljs.core.PersistentHashMap.fromArrays(inst_18364,inst_18365);
var inst_18367 = cljs.test.do_report.call(null,inst_18366);
var ___$1 = (function (){var statearr_18496 = state_18376;
(statearr_18496[(4)] = cljs.core.rest.call(null,(state_18376[(4)])));

return statearr_18496;
})();
var state_18376__$1 = state_18376;
var statearr_18497_18978 = state_18376__$1;
(statearr_18497_18978[(2)] = inst_18367);

(statearr_18497_18978[(1)] = (62));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18377 === (30))){
var _ = (function (){var statearr_18499 = state_18376;
(statearr_18499[(4)] = cljs.core.rest.call(null,(state_18376[(4)])));

return statearr_18499;
})();
var state_18376__$1 = state_18376;
var ex18493 = (state_18376__$1[(2)]);
var statearr_18500_18979 = state_18376__$1;
(statearr_18500_18979[(5)] = ex18493);


var statearr_18501_18980 = state_18376__$1;
(statearr_18501_18980[(1)] = (29));

(statearr_18501_18980[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18377 === (62))){
var inst_18370 = (state_18376[(2)]);
var _ = (function (){var statearr_18502 = state_18376;
(statearr_18502[(4)] = cljs.core.rest.call(null,(state_18376[(4)])));

return statearr_18502;
})();
var state_18376__$1 = state_18376;
var statearr_18503_18981 = state_18376__$1;
(statearr_18503_18981[(2)] = inst_18370);

(statearr_18503_18981[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18377 === (31))){
var _ = (function (){var statearr_18504 = state_18376;
(statearr_18504[(4)] = cljs.core.rest.call(null,(state_18376[(4)])));

return statearr_18504;
})();
var state_18376__$1 = state_18376;
var ex18498 = (state_18376__$1[(2)]);
var statearr_18505_18982 = state_18376__$1;
(statearr_18505_18982[(5)] = ex18498);


if((ex18498 instanceof Error)){
var statearr_18506_18983 = state_18376__$1;
(statearr_18506_18983[(1)] = (26));

(statearr_18506_18983[(5)] = null);

} else {
throw ex18498;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18377 === (63))){
var inst_18353 = (state_18376[(2)]);
var inst_18354 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_18355 = null;
var inst_18356 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"must be contract owner",inst_18355,inst_18353];
var inst_18357 = cljs.core.PersistentHashMap.fromArrays(inst_18354,inst_18356);
var inst_18358 = cljs.test.do_report.call(null,inst_18357);
var state_18376__$1 = state_18376;
var statearr_18507_18984 = state_18376__$1;
(statearr_18507_18984[(2)] = inst_18358);

(statearr_18507_18984[(1)] = (62));


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
});})(c__19__auto__,___192__auto__,self____$1))
;
return ((function (switch__14__auto__,c__19__auto__,___192__auto__,self____$1){
return (function() {
var e2e$proposals$state_machine__15__auto__ = null;
var e2e$proposals$state_machine__15__auto____0 = (function (){
var statearr_18508 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18508[(0)] = e2e$proposals$state_machine__15__auto__);

(statearr_18508[(1)] = (1));

return statearr_18508;
});
var e2e$proposals$state_machine__15__auto____1 = (function (state_18376){
while(true){
var ret_value__16__auto__ = (function (){try{while(true){
var result__17__auto__ = switch__14__auto__.call(null,state_18376);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__17__auto__;
}
break;
}
}catch (e18509){var ex__18__auto__ = e18509;
var statearr_18510_18985 = state_18376;
(statearr_18510_18985[(2)] = ex__18__auto__);


if(cljs.core.seq.call(null,(state_18376[(4)]))){
var statearr_18511_18986 = state_18376;
(statearr_18511_18986[(1)] = cljs.core.first.call(null,(state_18376[(4)])));

} else {
throw ex__18__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__18987 = state_18376;
state_18376 = G__18987;
continue;
} else {
return ret_value__16__auto__;
}
break;
}
});
e2e$proposals$state_machine__15__auto__ = function(state_18376){
switch(arguments.length){
case 0:
return e2e$proposals$state_machine__15__auto____0.call(this);
case 1:
return e2e$proposals$state_machine__15__auto____1.call(this,state_18376);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
e2e$proposals$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$0 = e2e$proposals$state_machine__15__auto____0;
e2e$proposals$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$1 = e2e$proposals$state_machine__15__auto____1;
return e2e$proposals$state_machine__15__auto__;
})()
;})(switch__14__auto__,c__19__auto__,___192__auto__,self____$1))
})();
var state__21__auto__ = (function (){var statearr_18512 = f__20__auto__.call(null);
(statearr_18512[(6)] = c__19__auto__);

return statearr_18512;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21__auto__);
});})(c__19__auto__,___192__auto__,self____$1))
);

return c__19__auto__;
});

e2e.proposals.t_e2e$proposals18113.prototype.apply = (function (self__,args18116){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args18116)));
});

e2e.proposals.t_e2e$proposals18113.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___192__auto__ = this;
var c__19__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19__auto__,___192__auto__){
return (function (){
var f__20__auto__ = (function (){var switch__14__auto__ = ((function (c__19__auto__,___192__auto__){
return (function (state_18772){
var state_val_18773 = (state_18772[(1)]);
if((state_val_18773 === (32))){
var inst_18638 = (state_18772[(7)]);
var inst_18638__$1 = (state_18772[(2)]);
var inst_18639 = (inst_18638__$1 instanceof cljs.core.ExceptionInfo);
var inst_18640 = cljs.core.ex_data.call(null,inst_18638__$1);
var inst_18641 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_18640);
var inst_18642 = cljs.core._EQ_.call(null,inst_18641,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_18643 = ((inst_18639) && (inst_18642));
var state_18772__$1 = (function (){var statearr_18775 = state_18772;
(statearr_18775[(7)] = inst_18638__$1);

return statearr_18775;
})();
if(cljs.core.truth_(inst_18643)){
var statearr_18776_18988 = state_18772__$1;
(statearr_18776_18988[(1)] = (33));

} else {
var statearr_18777_18989 = state_18772__$1;
(statearr_18777_18989[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18773 === (64))){
var _ = (function (){var statearr_18778 = state_18772;
(statearr_18778[(4)] = cljs.core.rest.call(null,(state_18772[(4)])));

return statearr_18778;
})();
var state_18772__$1 = state_18772;
var ex18774 = (state_18772__$1[(2)]);
var statearr_18779_18990 = state_18772__$1;
(statearr_18779_18990[(5)] = ex18774);


var statearr_18780_18991 = state_18772__$1;
(statearr_18780_18991[(1)] = (63));

(statearr_18780_18991[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18773 === (1))){
var state_18772__$1 = state_18772;
var statearr_18781_18992 = state_18772__$1;
(statearr_18781_18992[(2)] = null);

(statearr_18781_18992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18773 === (33))){
var inst_18638 = (state_18772[(7)]);
var inst_18645 = (function(){throw inst_18638})();
var state_18772__$1 = state_18772;
var statearr_18782_18993 = state_18772__$1;
(statearr_18782_18993[(2)] = inst_18645);

(statearr_18782_18993[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18773 === (2))){
var _ = (function (){var statearr_18783 = state_18772;
(statearr_18783[(4)] = cljs.core.cons.call(null,(15),(state_18772[(4)])));

return statearr_18783;
})();
var inst_18557 = [new cljs.core.Keyword(null,"id","id",(-1388402092)),new cljs.core.Keyword(null,"start_time","start_time",(889556682)),new cljs.core.Keyword(null,"budget","budget",(-405386281))];
var inst_18558 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18559 = [new cljs.core.Keyword(null,"quantity","quantity",(-1929050694)),new cljs.core.Keyword(null,"contract","contract",(798152745))];
var inst_18560 = ["326000.0000 EFX",e2e.proposals.token_acc];
var inst_18561 = cljs.core.PersistentHashMap.fromArrays(inst_18559,inst_18560);
var inst_18562 = [inst_18561];
var inst_18563 = (new cljs.core.PersistentVector(null,(1),(5),inst_18558,inst_18562,null));
var inst_18564 = [(2),"2021-01-01 12:00:00",inst_18563];
var inst_18565 = cljs.core.PersistentHashMap.fromArrays(inst_18557,inst_18564);
var inst_18566 = eos_cljs.core.transact.call(null,e2e.proposals.prop_acc,"updatecycle",inst_18565);
var inst_18567 = cljs.core.async.interop.p__GT_c.call(null,inst_18566);
var state_18772__$1 = state_18772;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18772__$1,(16),inst_18567);
} else {
if((state_val_18773 === (34))){
var inst_18638 = (state_18772[(7)]);
var state_18772__$1 = state_18772;
var statearr_18784_18994 = state_18772__$1;
(statearr_18784_18994[(2)] = inst_18638);

(statearr_18784_18994[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18773 === (3))){
var inst_18600 = (state_18772[(2)]);
var state_18772__$1 = (function (){var statearr_18785 = state_18772;
(statearr_18785[(8)] = inst_18600);

return statearr_18785;
})();
var statearr_18786_18995 = state_18772__$1;
(statearr_18786_18995[(2)] = null);

(statearr_18786_18995[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18773 === (35))){
var inst_18648 = (state_18772[(2)]);
var state_18772__$1 = (function (){var statearr_18787 = state_18772;
(statearr_18787[(9)] = inst_18648);

return statearr_18787;
})();
var statearr_18788_18996 = state_18772__$1;
(statearr_18788_18996[(2)] = null);

(statearr_18788_18996[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18773 === (4))){
var inst_18515 = (state_18772[(10)]);
var inst_18516 = (state_18772[(11)]);
var inst_18513 = (state_18772[(2)]);
var inst_18514 = inst_18513.cause;
var inst_18515__$1 = inst_18514.message;
var inst_18516__$1 = clojure.string.ends_with_QMARK_.call(null,inst_18515__$1,"cycle is not in the future");
var inst_18517 = (!(inst_18516__$1));
var state_18772__$1 = (function (){var statearr_18789 = state_18772;
(statearr_18789[(10)] = inst_18515__$1);

(statearr_18789[(11)] = inst_18516__$1);

return statearr_18789;
})();
if(inst_18517){
var statearr_18790_18997 = state_18772__$1;
(statearr_18790_18997[(1)] = (5));

} else {
var statearr_18791_18998 = state_18772__$1;
(statearr_18791_18998[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18773 === (36))){
var _ = (function (){var statearr_18792 = state_18772;
(statearr_18792[(4)] = cljs.core.cons.call(null,(39),(state_18772[(4)])));

return statearr_18792;
})();
var state_18772__$1 = state_18772;
var statearr_18793_18999 = state_18772__$1;
(statearr_18793_18999[(1)] = (40));



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18773 === (5))){
var inst_18515 = (state_18772[(10)]);
var inst_18519 = ["expected =","cycle is not in the future"," actual = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_18515)].join('');
var inst_18520 = cljs.core.prn.call(null,inst_18519);
var state_18772__$1 = state_18772;
var statearr_18795_19000 = state_18772__$1;
(statearr_18795_19000[(2)] = inst_18520);

(statearr_18795_19000[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18773 === (37))){
var inst_18676 = (state_18772[(2)]);
var _ = (function (){var statearr_18796 = state_18772;
(statearr_18796[(4)] = cljs.core.rest.call(null,(state_18772[(4)])));

return statearr_18796;
})();
var state_18772__$1 = state_18772;
var statearr_18797_19001 = state_18772__$1;
(statearr_18797_19001[(2)] = inst_18676);

(statearr_18797_19001[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18773 === (6))){
var state_18772__$1 = state_18772;
var statearr_18798_19002 = state_18772__$1;
(statearr_18798_19002[(2)] = null);

(statearr_18798_19002[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18773 === (38))){
var inst_18649 = (state_18772[(2)]);
var inst_18650 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_18651 = true;
var inst_18652 = [new cljs.core.Keyword(null,"error","error",(-978969032)),null,inst_18651,inst_18649];
var inst_18653 = cljs.core.PersistentHashMap.fromArrays(inst_18650,inst_18652);
var inst_18654 = cljs.test.do_report.call(null,inst_18653);
var state_18772__$1 = state_18772;
var statearr_18800_19003 = state_18772__$1;
(statearr_18800_19003[(2)] = inst_18654);

(statearr_18800_19003[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18773 === (7))){
var inst_18523 = (state_18772[(2)]);
var state_18772__$1 = (function (){var statearr_18801 = state_18772;
(statearr_18801[(12)] = inst_18523);

return statearr_18801;
})();
var statearr_18802_19004 = state_18772__$1;
(statearr_18802_19004[(2)] = null);

(statearr_18802_19004[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18773 === (39))){
var _ = (function (){var statearr_18803 = state_18772;
(statearr_18803[(4)] = cljs.core.rest.call(null,(state_18772[(4)])));

return statearr_18803;
})();
var state_18772__$1 = state_18772;
var ex18799 = (state_18772__$1[(2)]);
var statearr_18804_19005 = state_18772__$1;
(statearr_18804_19005[(5)] = ex18799);


var statearr_18805_19006 = state_18772__$1;
(statearr_18805_19006[(1)] = (38));

(statearr_18805_19006[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18773 === (8))){
var inst_18516 = (state_18772[(11)]);
var _ = (function (){var statearr_18806 = state_18772;
(statearr_18806[(4)] = cljs.core.cons.call(null,(11),(state_18772[(4)])));

return statearr_18806;
})();
var state_18772__$1 = state_18772;
if(cljs.core.truth_(inst_18516)){
var statearr_18807_19007 = state_18772__$1;
(statearr_18807_19007[(1)] = (12));

} else {
var statearr_18808_19008 = state_18772__$1;
(statearr_18808_19008[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18773 === (40))){
var inst_18661 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_18662 = true;
var inst_18663 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),null,inst_18662,true];
var inst_18664 = cljs.core.PersistentHashMap.fromArrays(inst_18661,inst_18663);
var inst_18665 = cljs.test.do_report.call(null,inst_18664);
var state_18772__$1 = state_18772;
var statearr_18809_19009 = state_18772__$1;
(statearr_18809_19009[(2)] = inst_18665);

(statearr_18809_19009[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18773 === (9))){
var inst_18551 = (state_18772[(2)]);
var state_18772__$1 = state_18772;
var statearr_18810_19010 = state_18772__$1;
(statearr_18810_19010[(2)] = inst_18551);

(statearr_18810_19010[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18773 === (41))){
var inst_18667 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_18668 = true;
var inst_18669 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),null,inst_18668,true];
var inst_18670 = cljs.core.PersistentHashMap.fromArrays(inst_18667,inst_18669);
var inst_18671 = cljs.test.do_report.call(null,inst_18670);
var state_18772__$1 = state_18772;
var statearr_18811_19011 = state_18772__$1;
(statearr_18811_19011[(2)] = inst_18671);

(statearr_18811_19011[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18773 === (10))){
var inst_18524 = (state_18772[(2)]);
var inst_18525 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_18526 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_18527 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"cycle must be in the future",inst_18526,inst_18524];
var inst_18528 = cljs.core.PersistentHashMap.fromArrays(inst_18525,inst_18527);
var inst_18529 = cljs.test.do_report.call(null,inst_18528);
var state_18772__$1 = state_18772;
var statearr_18813_19012 = state_18772__$1;
(statearr_18813_19012[(2)] = inst_18529);

(statearr_18813_19012[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18773 === (42))){
var inst_18673 = (state_18772[(2)]);
var _ = (function (){var statearr_18814 = state_18772;
(statearr_18814[(4)] = cljs.core.rest.call(null,(state_18772[(4)])));

return statearr_18814;
})();
var state_18772__$1 = (function (){var statearr_18815 = state_18772;
(statearr_18815[(13)] = inst_18673);

return statearr_18815;
})();
var statearr_18816_19013 = state_18772__$1;
(statearr_18816_19013[(2)] = true);

(statearr_18816_19013[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18773 === (11))){
var _ = (function (){var statearr_18817 = state_18772;
(statearr_18817[(4)] = cljs.core.rest.call(null,(state_18772[(4)])));

return statearr_18817;
})();
var state_18772__$1 = state_18772;
var ex18812 = (state_18772__$1[(2)]);
var statearr_18818_19014 = state_18772__$1;
(statearr_18818_19014[(5)] = ex18812);


var statearr_18819_19015 = state_18772__$1;
(statearr_18819_19015[(1)] = (10));

(statearr_18819_19015[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18773 === (43))){
var _ = (function (){var statearr_18820 = state_18772;
(statearr_18820[(4)] = cljs.core.cons.call(null,(56),(state_18772[(4)])));

return statearr_18820;
})();
var inst_18726 = [new cljs.core.Keyword(null,"id","id",(-1388402092)),new cljs.core.Keyword(null,"start_time","start_time",(889556682)),new cljs.core.Keyword(null,"budget","budget",(-405386281))];
var inst_18727 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18728 = [new cljs.core.Keyword(null,"quantity","quantity",(-1929050694)),new cljs.core.Keyword(null,"contract","contract",(798152745))];
var inst_18729 = ["326000.0000 EFX",e2e.proposals.token_acc];
var inst_18730 = cljs.core.PersistentHashMap.fromArrays(inst_18728,inst_18729);
var inst_18731 = [inst_18730];
var inst_18732 = (new cljs.core.PersistentVector(null,(1),(5),inst_18727,inst_18731,null));
var inst_18733 = [(3),"2021-01-01 12:00:00",inst_18732];
var inst_18734 = cljs.core.PersistentHashMap.fromArrays(inst_18726,inst_18733);
var inst_18735 = e2e.proposals.eos_tx_owner.call(null,e2e.proposals.prop_acc,"updatecycle",inst_18734);
var inst_18736 = cljs.core.async.interop.p__GT_c.call(null,inst_18735);
var state_18772__$1 = state_18772;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18772__$1,(57),inst_18736);
} else {
if((state_val_18773 === (12))){
var inst_18516 = (state_18772[(11)]);
var inst_18536 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_18537 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_18538 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"cycle must be in the future",inst_18537,inst_18516];
var inst_18539 = cljs.core.PersistentHashMap.fromArrays(inst_18536,inst_18538);
var inst_18540 = cljs.test.do_report.call(null,inst_18539);
var state_18772__$1 = state_18772;
var statearr_18821_19016 = state_18772__$1;
(statearr_18821_19016[(2)] = inst_18540);

(statearr_18821_19016[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18773 === (44))){
var inst_18769 = (state_18772[(2)]);
var inst_18770 = done.call(null);
var state_18772__$1 = (function (){var statearr_18822 = state_18772;
(statearr_18822[(14)] = inst_18769);

return statearr_18822;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18772__$1,inst_18770);
} else {
if((state_val_18773 === (13))){
var inst_18516 = (state_18772[(11)]);
var inst_18542 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_18543 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_18544 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"cycle must be in the future",inst_18543,inst_18516];
var inst_18545 = cljs.core.PersistentHashMap.fromArrays(inst_18542,inst_18544);
var inst_18546 = cljs.test.do_report.call(null,inst_18545);
var state_18772__$1 = state_18772;
var statearr_18823_19017 = state_18772__$1;
(statearr_18823_19017[(2)] = inst_18546);

(statearr_18823_19017[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18773 === (45))){
var inst_18682 = (state_18772[(15)]);
var inst_18684 = (state_18772[(16)]);
var inst_18680 = (state_18772[(2)]);
var inst_18681 = inst_18680.cause;
var inst_18682__$1 = inst_18681.message;
var inst_18683 = ["missing authority of ",e2e.proposals.prop_acc].join('');
var inst_18684__$1 = clojure.string.ends_with_QMARK_.call(null,inst_18682__$1,inst_18683);
var inst_18685 = (!(inst_18684__$1));
var state_18772__$1 = (function (){var statearr_18824 = state_18772;
(statearr_18824[(15)] = inst_18682__$1);

(statearr_18824[(16)] = inst_18684__$1);

return statearr_18824;
})();
if(inst_18685){
var statearr_18825_19018 = state_18772__$1;
(statearr_18825_19018[(1)] = (46));

} else {
var statearr_18826_19019 = state_18772__$1;
(statearr_18826_19019[(1)] = (47));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18773 === (14))){
var inst_18516 = (state_18772[(11)]);
var inst_18548 = (state_18772[(2)]);
var _ = (function (){var statearr_18828 = state_18772;
(statearr_18828[(4)] = cljs.core.rest.call(null,(state_18772[(4)])));

return statearr_18828;
})();
var state_18772__$1 = (function (){var statearr_18829 = state_18772;
(statearr_18829[(17)] = inst_18548);

return statearr_18829;
})();
var statearr_18830_19020 = state_18772__$1;
(statearr_18830_19020[(2)] = inst_18516);

(statearr_18830_19020[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18773 === (46))){
var inst_18682 = (state_18772[(15)]);
var inst_18687 = ["missing authority of ",e2e.proposals.prop_acc].join('');
var inst_18688 = ["expected =",inst_18687," actual = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_18682)].join('');
var inst_18689 = cljs.core.prn.call(null,inst_18688);
var state_18772__$1 = state_18772;
var statearr_18831_19021 = state_18772__$1;
(statearr_18831_19021[(2)] = inst_18689);

(statearr_18831_19021[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18773 === (15))){
var _ = (function (){var statearr_18832 = state_18772;
(statearr_18832[(4)] = cljs.core.rest.call(null,(state_18772[(4)])));

return statearr_18832;
})();
var state_18772__$1 = state_18772;
var ex18827 = (state_18772__$1[(2)]);
var statearr_18833_19022 = state_18772__$1;
(statearr_18833_19022[(5)] = ex18827);


if((ex18827 instanceof Error)){
var statearr_18834_19023 = state_18772__$1;
(statearr_18834_19023[(1)] = (4));

(statearr_18834_19023[(5)] = null);

} else {
throw ex18827;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18773 === (47))){
var state_18772__$1 = state_18772;
var statearr_18835_19024 = state_18772__$1;
(statearr_18835_19024[(2)] = null);

(statearr_18835_19024[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18773 === (16))){
var inst_18569 = (state_18772[(18)]);
var inst_18569__$1 = (state_18772[(2)]);
var inst_18570 = (inst_18569__$1 instanceof cljs.core.ExceptionInfo);
var inst_18571 = cljs.core.ex_data.call(null,inst_18569__$1);
var inst_18572 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_18571);
var inst_18573 = cljs.core._EQ_.call(null,inst_18572,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_18574 = ((inst_18570) && (inst_18573));
var state_18772__$1 = (function (){var statearr_18836 = state_18772;
(statearr_18836[(18)] = inst_18569__$1);

return statearr_18836;
})();
if(cljs.core.truth_(inst_18574)){
var statearr_18837_19025 = state_18772__$1;
(statearr_18837_19025[(1)] = (17));

} else {
var statearr_18838_19026 = state_18772__$1;
(statearr_18838_19026[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18773 === (48))){
var inst_18692 = (state_18772[(2)]);
var state_18772__$1 = (function (){var statearr_18839 = state_18772;
(statearr_18839[(19)] = inst_18692);

return statearr_18839;
})();
var statearr_18840_19027 = state_18772__$1;
(statearr_18840_19027[(2)] = null);

(statearr_18840_19027[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18773 === (17))){
var inst_18569 = (state_18772[(18)]);
var inst_18576 = (function(){throw inst_18569})();
var state_18772__$1 = state_18772;
var statearr_18841_19028 = state_18772__$1;
(statearr_18841_19028[(2)] = inst_18576);

(statearr_18841_19028[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18773 === (49))){
var inst_18684 = (state_18772[(16)]);
var _ = (function (){var statearr_18842 = state_18772;
(statearr_18842[(4)] = cljs.core.cons.call(null,(52),(state_18772[(4)])));

return statearr_18842;
})();
var state_18772__$1 = state_18772;
if(cljs.core.truth_(inst_18684)){
var statearr_18843_19029 = state_18772__$1;
(statearr_18843_19029[(1)] = (53));

} else {
var statearr_18844_19030 = state_18772__$1;
(statearr_18844_19030[(1)] = (54));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18773 === (18))){
var inst_18569 = (state_18772[(18)]);
var state_18772__$1 = state_18772;
var statearr_18845_19031 = state_18772__$1;
(statearr_18845_19031[(2)] = inst_18569);

(statearr_18845_19031[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18773 === (50))){
var inst_18720 = (state_18772[(2)]);
var state_18772__$1 = state_18772;
var statearr_18846_19032 = state_18772__$1;
(statearr_18846_19032[(2)] = inst_18720);

(statearr_18846_19032[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18773 === (19))){
var inst_18579 = (state_18772[(2)]);
var state_18772__$1 = (function (){var statearr_18847 = state_18772;
(statearr_18847[(20)] = inst_18579);

return statearr_18847;
})();
var statearr_18848_19033 = state_18772__$1;
(statearr_18848_19033[(2)] = null);

(statearr_18848_19033[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18773 === (51))){
var inst_18693 = (state_18772[(2)]);
var inst_18694 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_18695 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_18696 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"must be contract owner",inst_18695,inst_18693];
var inst_18697 = cljs.core.PersistentHashMap.fromArrays(inst_18694,inst_18696);
var inst_18698 = cljs.test.do_report.call(null,inst_18697);
var state_18772__$1 = state_18772;
var statearr_18850_19034 = state_18772__$1;
(statearr_18850_19034[(2)] = inst_18698);

(statearr_18850_19034[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18773 === (20))){
var _ = (function (){var statearr_18851 = state_18772;
(statearr_18851[(4)] = cljs.core.cons.call(null,(23),(state_18772[(4)])));

return statearr_18851;
})();
var inst_18591 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_18592 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"cycle must be in the future"];
var inst_18593 = cljs.core.PersistentHashMap.fromArrays(inst_18591,inst_18592);
var inst_18594 = cljs.test.do_report.call(null,inst_18593);
var ___$1 = (function (){var statearr_18852 = state_18772;
(statearr_18852[(4)] = cljs.core.rest.call(null,(state_18772[(4)])));

return statearr_18852;
})();
var state_18772__$1 = state_18772;
var statearr_18853_19035 = state_18772__$1;
(statearr_18853_19035[(2)] = inst_18594);

(statearr_18853_19035[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18773 === (52))){
var _ = (function (){var statearr_18854 = state_18772;
(statearr_18854[(4)] = cljs.core.rest.call(null,(state_18772[(4)])));

return statearr_18854;
})();
var state_18772__$1 = state_18772;
var ex18849 = (state_18772__$1[(2)]);
var statearr_18855_19036 = state_18772__$1;
(statearr_18855_19036[(5)] = ex18849);


var statearr_18856_19037 = state_18772__$1;
(statearr_18856_19037[(1)] = (51));

(statearr_18856_19037[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18773 === (21))){
var inst_18597 = (state_18772[(2)]);
var _ = (function (){var statearr_18857 = state_18772;
(statearr_18857[(4)] = cljs.core.rest.call(null,(state_18772[(4)])));

return statearr_18857;
})();
var state_18772__$1 = state_18772;
var statearr_18858_19038 = state_18772__$1;
(statearr_18858_19038[(2)] = inst_18597);

(statearr_18858_19038[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18773 === (53))){
var inst_18684 = (state_18772[(16)]);
var inst_18705 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_18706 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_18707 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"must be contract owner",inst_18706,inst_18684];
var inst_18708 = cljs.core.PersistentHashMap.fromArrays(inst_18705,inst_18707);
var inst_18709 = cljs.test.do_report.call(null,inst_18708);
var state_18772__$1 = state_18772;
var statearr_18859_19039 = state_18772__$1;
(statearr_18859_19039[(2)] = inst_18709);

(statearr_18859_19039[(1)] = (55));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18773 === (22))){
var inst_18580 = (state_18772[(2)]);
var inst_18581 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_18582 = null;
var inst_18583 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"cycle must be in the future",inst_18582,inst_18580];
var inst_18584 = cljs.core.PersistentHashMap.fromArrays(inst_18581,inst_18583);
var inst_18585 = cljs.test.do_report.call(null,inst_18584);
var state_18772__$1 = state_18772;
var statearr_18861_19040 = state_18772__$1;
(statearr_18861_19040[(2)] = inst_18585);

(statearr_18861_19040[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18773 === (54))){
var inst_18684 = (state_18772[(16)]);
var inst_18711 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_18712 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_18713 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"must be contract owner",inst_18712,inst_18684];
var inst_18714 = cljs.core.PersistentHashMap.fromArrays(inst_18711,inst_18713);
var inst_18715 = cljs.test.do_report.call(null,inst_18714);
var state_18772__$1 = state_18772;
var statearr_18862_19041 = state_18772__$1;
(statearr_18862_19041[(2)] = inst_18715);

(statearr_18862_19041[(1)] = (55));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18773 === (23))){
var _ = (function (){var statearr_18863 = state_18772;
(statearr_18863[(4)] = cljs.core.rest.call(null,(state_18772[(4)])));

return statearr_18863;
})();
var state_18772__$1 = state_18772;
var ex18860 = (state_18772__$1[(2)]);
var statearr_18864_19042 = state_18772__$1;
(statearr_18864_19042[(5)] = ex18860);


var statearr_18865_19043 = state_18772__$1;
(statearr_18865_19043[(1)] = (22));

(statearr_18865_19043[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18773 === (55))){
var inst_18684 = (state_18772[(16)]);
var inst_18717 = (state_18772[(2)]);
var _ = (function (){var statearr_18867 = state_18772;
(statearr_18867[(4)] = cljs.core.rest.call(null,(state_18772[(4)])));

return statearr_18867;
})();
var state_18772__$1 = (function (){var statearr_18868 = state_18772;
(statearr_18868[(21)] = inst_18717);

return statearr_18868;
})();
var statearr_18869_19044 = state_18772__$1;
(statearr_18869_19044[(2)] = inst_18684);

(statearr_18869_19044[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18773 === (24))){
var _ = (function (){var statearr_18870 = state_18772;
(statearr_18870[(4)] = cljs.core.cons.call(null,(31),(state_18772[(4)])));

return statearr_18870;
})();
var inst_18626 = [new cljs.core.Keyword(null,"id","id",(-1388402092)),new cljs.core.Keyword(null,"start_time","start_time",(889556682)),new cljs.core.Keyword(null,"budget","budget",(-405386281))];
var inst_18627 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18628 = [new cljs.core.Keyword(null,"quantity","quantity",(-1929050694)),new cljs.core.Keyword(null,"contract","contract",(798152745))];
var inst_18629 = ["326000.0000 EFX",e2e.proposals.token_acc];
var inst_18630 = cljs.core.PersistentHashMap.fromArrays(inst_18628,inst_18629);
var inst_18631 = [inst_18630];
var inst_18632 = (new cljs.core.PersistentVector(null,(1),(5),inst_18627,inst_18631,null));
var inst_18633 = [(3),"2021-01-01 12:00:00",inst_18632];
var inst_18634 = cljs.core.PersistentHashMap.fromArrays(inst_18626,inst_18633);
var inst_18635 = eos_cljs.core.transact.call(null,e2e.proposals.prop_acc,"updatecycle",inst_18634);
var inst_18636 = cljs.core.async.interop.p__GT_c.call(null,inst_18635);
var state_18772__$1 = state_18772;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18772__$1,(32),inst_18636);
} else {
if((state_val_18773 === (56))){
var _ = (function (){var statearr_18871 = state_18772;
(statearr_18871[(4)] = cljs.core.rest.call(null,(state_18772[(4)])));

return statearr_18871;
})();
var state_18772__$1 = state_18772;
var ex18866 = (state_18772__$1[(2)]);
var statearr_18872_19045 = state_18772__$1;
(statearr_18872_19045[(5)] = ex18866);


if((ex18866 instanceof Error)){
var statearr_18873_19046 = state_18772__$1;
(statearr_18873_19046[(1)] = (45));

(statearr_18873_19046[(5)] = null);

} else {
throw ex18866;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18773 === (25))){
var inst_18679 = (state_18772[(2)]);
var state_18772__$1 = (function (){var statearr_18874 = state_18772;
(statearr_18874[(22)] = inst_18679);

return statearr_18874;
})();
var statearr_18875_19047 = state_18772__$1;
(statearr_18875_19047[(2)] = null);

(statearr_18875_19047[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18773 === (57))){
var inst_18738 = (state_18772[(23)]);
var inst_18738__$1 = (state_18772[(2)]);
var inst_18739 = (inst_18738__$1 instanceof cljs.core.ExceptionInfo);
var inst_18740 = cljs.core.ex_data.call(null,inst_18738__$1);
var inst_18741 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_18740);
var inst_18742 = cljs.core._EQ_.call(null,inst_18741,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_18743 = ((inst_18739) && (inst_18742));
var state_18772__$1 = (function (){var statearr_18876 = state_18772;
(statearr_18876[(23)] = inst_18738__$1);

return statearr_18876;
})();
if(cljs.core.truth_(inst_18743)){
var statearr_18877_19048 = state_18772__$1;
(statearr_18877_19048[(1)] = (58));

} else {
var statearr_18878_19049 = state_18772__$1;
(statearr_18878_19049[(1)] = (59));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18773 === (26))){
var inst_18601 = (state_18772[(2)]);
var inst_18602 = cljs.core.prn.call(null,"test failed with ",inst_18601);
var state_18772__$1 = (function (){var statearr_18879 = state_18772;
(statearr_18879[(24)] = inst_18602);

return statearr_18879;
})();
var statearr_18880_19050 = state_18772__$1;
(statearr_18880_19050[(2)] = null);

(statearr_18880_19050[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18773 === (58))){
var inst_18738 = (state_18772[(23)]);
var inst_18745 = (function(){throw inst_18738})();
var state_18772__$1 = state_18772;
var statearr_18881_19051 = state_18772__$1;
(statearr_18881_19051[(2)] = inst_18745);

(statearr_18881_19051[(1)] = (60));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18773 === (27))){
var _ = (function (){var statearr_18882 = state_18772;
(statearr_18882[(4)] = cljs.core.cons.call(null,(30),(state_18772[(4)])));

return statearr_18882;
})();
var inst_18614 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_18615 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),null];
var inst_18616 = cljs.core.PersistentHashMap.fromArrays(inst_18614,inst_18615);
var inst_18617 = cljs.test.do_report.call(null,inst_18616);
var ___$1 = (function (){var statearr_18883 = state_18772;
(statearr_18883[(4)] = cljs.core.rest.call(null,(state_18772[(4)])));

return statearr_18883;
})();
var state_18772__$1 = state_18772;
var statearr_18884_19052 = state_18772__$1;
(statearr_18884_19052[(2)] = inst_18617);

(statearr_18884_19052[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18773 === (59))){
var inst_18738 = (state_18772[(23)]);
var state_18772__$1 = state_18772;
var statearr_18885_19053 = state_18772__$1;
(statearr_18885_19053[(2)] = inst_18738);

(statearr_18885_19053[(1)] = (60));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18773 === (28))){
var inst_18620 = (state_18772[(2)]);
var state_18772__$1 = state_18772;
var statearr_18886_19054 = state_18772__$1;
(statearr_18886_19054[(2)] = inst_18620);

(statearr_18886_19054[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18773 === (60))){
var inst_18748 = (state_18772[(2)]);
var state_18772__$1 = (function (){var statearr_18887 = state_18772;
(statearr_18887[(25)] = inst_18748);

return statearr_18887;
})();
var statearr_18888_19055 = state_18772__$1;
(statearr_18888_19055[(2)] = null);

(statearr_18888_19055[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18773 === (29))){
var inst_18603 = (state_18772[(2)]);
var inst_18604 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_18605 = null;
var inst_18606 = [new cljs.core.Keyword(null,"error","error",(-978969032)),null,inst_18605,inst_18603];
var inst_18607 = cljs.core.PersistentHashMap.fromArrays(inst_18604,inst_18606);
var inst_18608 = cljs.test.do_report.call(null,inst_18607);
var state_18772__$1 = state_18772;
var statearr_18890_19056 = state_18772__$1;
(statearr_18890_19056[(2)] = inst_18608);

(statearr_18890_19056[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18773 === (61))){
var _ = (function (){var statearr_18891 = state_18772;
(statearr_18891[(4)] = cljs.core.cons.call(null,(64),(state_18772[(4)])));

return statearr_18891;
})();
var inst_18760 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_18761 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"must be contract owner"];
var inst_18762 = cljs.core.PersistentHashMap.fromArrays(inst_18760,inst_18761);
var inst_18763 = cljs.test.do_report.call(null,inst_18762);
var ___$1 = (function (){var statearr_18892 = state_18772;
(statearr_18892[(4)] = cljs.core.rest.call(null,(state_18772[(4)])));

return statearr_18892;
})();
var state_18772__$1 = state_18772;
var statearr_18893_19057 = state_18772__$1;
(statearr_18893_19057[(2)] = inst_18763);

(statearr_18893_19057[(1)] = (62));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18773 === (30))){
var _ = (function (){var statearr_18895 = state_18772;
(statearr_18895[(4)] = cljs.core.rest.call(null,(state_18772[(4)])));

return statearr_18895;
})();
var state_18772__$1 = state_18772;
var ex18889 = (state_18772__$1[(2)]);
var statearr_18896_19058 = state_18772__$1;
(statearr_18896_19058[(5)] = ex18889);


var statearr_18897_19059 = state_18772__$1;
(statearr_18897_19059[(1)] = (29));

(statearr_18897_19059[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18773 === (62))){
var inst_18766 = (state_18772[(2)]);
var _ = (function (){var statearr_18898 = state_18772;
(statearr_18898[(4)] = cljs.core.rest.call(null,(state_18772[(4)])));

return statearr_18898;
})();
var state_18772__$1 = state_18772;
var statearr_18899_19060 = state_18772__$1;
(statearr_18899_19060[(2)] = inst_18766);

(statearr_18899_19060[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18773 === (31))){
var _ = (function (){var statearr_18900 = state_18772;
(statearr_18900[(4)] = cljs.core.rest.call(null,(state_18772[(4)])));

return statearr_18900;
})();
var state_18772__$1 = state_18772;
var ex18894 = (state_18772__$1[(2)]);
var statearr_18901_19061 = state_18772__$1;
(statearr_18901_19061[(5)] = ex18894);


if((ex18894 instanceof Error)){
var statearr_18902_19062 = state_18772__$1;
(statearr_18902_19062[(1)] = (26));

(statearr_18902_19062[(5)] = null);

} else {
throw ex18894;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_18773 === (63))){
var inst_18749 = (state_18772[(2)]);
var inst_18750 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_18751 = null;
var inst_18752 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"must be contract owner",inst_18751,inst_18749];
var inst_18753 = cljs.core.PersistentHashMap.fromArrays(inst_18750,inst_18752);
var inst_18754 = cljs.test.do_report.call(null,inst_18753);
var state_18772__$1 = state_18772;
var statearr_18903_19063 = state_18772__$1;
(statearr_18903_19063[(2)] = inst_18754);

(statearr_18903_19063[(1)] = (62));


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
});})(c__19__auto__,___192__auto__))
;
return ((function (switch__14__auto__,c__19__auto__,___192__auto__){
return (function() {
var e2e$proposals$state_machine__15__auto__ = null;
var e2e$proposals$state_machine__15__auto____0 = (function (){
var statearr_18904 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18904[(0)] = e2e$proposals$state_machine__15__auto__);

(statearr_18904[(1)] = (1));

return statearr_18904;
});
var e2e$proposals$state_machine__15__auto____1 = (function (state_18772){
while(true){
var ret_value__16__auto__ = (function (){try{while(true){
var result__17__auto__ = switch__14__auto__.call(null,state_18772);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__17__auto__;
}
break;
}
}catch (e18905){var ex__18__auto__ = e18905;
var statearr_18906_19064 = state_18772;
(statearr_18906_19064[(2)] = ex__18__auto__);


if(cljs.core.seq.call(null,(state_18772[(4)]))){
var statearr_18907_19065 = state_18772;
(statearr_18907_19065[(1)] = cljs.core.first.call(null,(state_18772[(4)])));

} else {
throw ex__18__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__19066 = state_18772;
state_18772 = G__19066;
continue;
} else {
return ret_value__16__auto__;
}
break;
}
});
e2e$proposals$state_machine__15__auto__ = function(state_18772){
switch(arguments.length){
case 0:
return e2e$proposals$state_machine__15__auto____0.call(this);
case 1:
return e2e$proposals$state_machine__15__auto____1.call(this,state_18772);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
e2e$proposals$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$0 = e2e$proposals$state_machine__15__auto____0;
e2e$proposals$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$1 = e2e$proposals$state_machine__15__auto____1;
return e2e$proposals$state_machine__15__auto__;
})()
;})(switch__14__auto__,c__19__auto__,___192__auto__))
})();
var state__21__auto__ = (function (){var statearr_18908 = f__20__auto__.call(null);
(statearr_18908[(6)] = c__19__auto__);

return statearr_18908;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21__auto__);
});})(c__19__auto__,___192__auto__))
);

return c__19__auto__;
});

e2e.proposals.t_e2e$proposals18113.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta18114","meta18114",(-1047146035),null)], null);
});

e2e.proposals.t_e2e$proposals18113.cljs$lang$type = true;

e2e.proposals.t_e2e$proposals18113.cljs$lang$ctorStr = "e2e.proposals/t_e2e$proposals18113";

e2e.proposals.t_e2e$proposals18113.cljs$lang$ctorPrWriter = (function (this__9776__auto__,writer__9777__auto__,opt__9778__auto__){
return cljs.core._write.call(null,writer__9777__auto__,"e2e.proposals/t_e2e$proposals18113");
});

/**
 * Positional factory function for e2e.proposals/t_e2e$proposals18113.
 */
e2e.proposals.__GT_t_e2e$proposals18113 = (function e2e$proposals$__GT_t_e2e$proposals18113(meta18114){
return (new e2e.proposals.t_e2e$proposals18113(meta18114));
});

}

return (new e2e.proposals.t_e2e$proposals18113(null));
});

e2e.proposals.cycle_update.cljs$lang$var = new cljs.core.Var(function(){return e2e.proposals.cycle_update;},new cljs.core.Symbol("e2e.proposals","cycle-update","e2e.proposals/cycle-update",(1535968581),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"e2e.proposals","e2e.proposals",(1479174227),null),new cljs.core.Symbol(null,"cycle-update","cycle-update",(-1460045646),null),"e2e/proposals.cljs",(22),(1),(174),(174),cljs.core.List.EMPTY,null,(cljs.core.truth_(e2e.proposals.cycle_update)?e2e.proposals.cycle_update.cljs$lang$test:null)]));
e2e.proposals.vote = (function e2e$proposals$vote(){
return cljs.test.test_var.call(null,e2e.proposals.vote.cljs$lang$var);
});
e2e.proposals.vote.cljs$lang$test = (function (){
if((typeof e2e !== 'undefined') && (typeof e2e.proposals !== 'undefined') && (typeof e2e.proposals.t_e2e$proposals19067 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IFn}
*/
e2e.proposals.t_e2e$proposals19067 = (function (meta19068){
this.meta19068 = meta19068;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
e2e.proposals.t_e2e$proposals19067.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19069,meta19068__$1){
var self__ = this;
var _19069__$1 = this;
return (new e2e.proposals.t_e2e$proposals19067(meta19068__$1));
});

e2e.proposals.t_e2e$proposals19067.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19069){
var self__ = this;
var _19069__$1 = this;
return self__.meta19068;
});

e2e.proposals.t_e2e$proposals19067.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL;

e2e.proposals.t_e2e$proposals19067.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___192__auto__ = self____$1;
var c__19__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19__auto__,___192__auto__,self____$1){
return (function (){
var f__20__auto__ = (function (){var switch__14__auto__ = ((function (c__19__auto__,___192__auto__,self____$1){
return (function (state_19720){
var state_val_19721 = (state_19720[(1)]);
if((state_val_19721 === (32))){
var _ = (function (){var statearr_19722 = state_19720;
(statearr_19722[(4)] = cljs.core.cons.call(null,(39),(state_19720[(4)])));

return statearr_19722;
})();
var inst_19201 = [new cljs.core.Keyword(null,"voter","voter",(1012094707)),new cljs.core.Keyword(null,"prop_id","prop_id",(-694455661)),new cljs.core.Keyword(null,"vote_type","vote_type",(-293333277))];
var inst_19202 = [e2e.proposals.owner_acc,(0),(0)];
var inst_19203 = cljs.core.PersistentHashMap.fromArrays(inst_19201,inst_19202);
var inst_19204 = e2e.proposals.eos_tx_owner.call(null,e2e.proposals.prop_acc,"addvote",inst_19203);
var inst_19205 = cljs.core.async.interop.p__GT_c.call(null,inst_19204);
var state_19720__$1 = state_19720;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19720__$1,(40),inst_19205);
} else {
if((state_val_19721 === (64))){
var inst_19318 = (state_19720[(2)]);
var _ = (function (){var statearr_19723 = state_19720;
(statearr_19723[(4)] = cljs.core.rest.call(null,(state_19720[(4)])));

return statearr_19723;
})();
var state_19720__$1 = state_19720;
var statearr_19724_21019 = state_19720__$1;
(statearr_19724_21019[(2)] = inst_19318);

(statearr_19724_21019[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (96))){
var inst_19432 = (state_19720[(2)]);
var inst_19433 = eos_cljs.core.get_table_rows.call(null,e2e.proposals.prop_acc,e2e.proposals.prop_acc,"proposal");
var inst_19434 = cljs.core.async.interop.p__GT_c.call(null,inst_19433);
var state_19720__$1 = (function (){var statearr_19725 = state_19720;
(statearr_19725[(7)] = inst_19432);

return statearr_19725;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19720__$1,(97),inst_19434);
} else {
if((state_val_19721 === (128))){
var inst_19595 = (state_19720[(8)]);
var state_19720__$1 = state_19720;
var statearr_19726_21020 = state_19720__$1;
(statearr_19726_21020[(2)] = inst_19595);

(statearr_19726_21020[(1)] = (129));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (1))){
var state_19720__$1 = state_19720;
var statearr_19727_21021 = state_19720__$1;
(statearr_19727_21021[(2)] = null);

(statearr_19727_21021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (33))){
var inst_19248 = (state_19720[(2)]);
var state_19720__$1 = (function (){var statearr_19728 = state_19720;
(statearr_19728[(9)] = inst_19248);

return statearr_19728;
})();
var statearr_19729_21022 = state_19720__$1;
(statearr_19729_21022[(2)] = null);

(statearr_19729_21022[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (65))){
var inst_19291 = (state_19720[(2)]);
var inst_19292 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_19293 = true;
var inst_19294 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can update vote",inst_19293,inst_19291];
var inst_19295 = cljs.core.PersistentHashMap.fromArrays(inst_19292,inst_19294);
var inst_19296 = cljs.test.do_report.call(null,inst_19295);
var state_19720__$1 = state_19720;
var statearr_19730_21023 = state_19720__$1;
(statearr_19730_21023[(2)] = inst_19296);

(statearr_19730_21023[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (97))){
var inst_19436 = (state_19720[(10)]);
var inst_19436__$1 = (state_19720[(2)]);
var inst_19437 = (inst_19436__$1 instanceof cljs.core.ExceptionInfo);
var inst_19438 = cljs.core.ex_data.call(null,inst_19436__$1);
var inst_19439 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_19438);
var inst_19440 = cljs.core._EQ_.call(null,inst_19439,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_19441 = ((inst_19437) && (inst_19440));
var state_19720__$1 = (function (){var statearr_19731 = state_19720;
(statearr_19731[(10)] = inst_19436__$1);

return statearr_19731;
})();
if(cljs.core.truth_(inst_19441)){
var statearr_19732_21024 = state_19720__$1;
(statearr_19732_21024[(1)] = (98));

} else {
var statearr_19733_21025 = state_19720__$1;
(statearr_19733_21025[(1)] = (99));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (129))){
var inst_19605 = (state_19720[(2)]);
var state_19720__$1 = (function (){var statearr_19734 = state_19720;
(statearr_19734[(11)] = inst_19605);

return statearr_19734;
})();
var statearr_19735_21026 = state_19720__$1;
(statearr_19735_21026[(2)] = null);

(statearr_19735_21026[(1)] = (130));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (2))){
var _ = (function (){var statearr_19737 = state_19720;
(statearr_19737[(4)] = cljs.core.cons.call(null,(5),(state_19720[(4)])));

return statearr_19737;
})();
var state_19720__$1 = state_19720;
var statearr_19738_21027 = state_19720__$1;
(statearr_19738_21027[(2)] = null);

(statearr_19738_21027[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (34))){
var inst_19176 = (state_19720[(2)]);
var inst_19177 = cljs.core.prn.call(null,"test failed with ",inst_19176);
var state_19720__$1 = (function (){var statearr_19739 = state_19720;
(statearr_19739[(12)] = inst_19177);

return statearr_19739;
})();
var statearr_19740_21028 = state_19720__$1;
(statearr_19740_21028[(2)] = null);

(statearr_19740_21028[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (66))){
var _ = (function (){var statearr_19741 = state_19720;
(statearr_19741[(4)] = cljs.core.rest.call(null,(state_19720[(4)])));

return statearr_19741;
})();
var state_19720__$1 = state_19720;
var ex19736 = (state_19720__$1[(2)]);
var statearr_19742_21029 = state_19720__$1;
(statearr_19742_21029[(5)] = ex19736);


var statearr_19743_21030 = state_19720__$1;
(statearr_19743_21030[(1)] = (65));

(statearr_19743_21030[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (98))){
var inst_19436 = (state_19720[(10)]);
var inst_19443 = (function(){throw inst_19436})();
var state_19720__$1 = state_19720;
var statearr_19744_21031 = state_19720__$1;
(statearr_19744_21031[(2)] = inst_19443);

(statearr_19744_21031[(1)] = (100));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (130))){
var _ = (function (){var statearr_19745 = state_19720;
(statearr_19745[(4)] = cljs.core.cons.call(null,(133),(state_19720[(4)])));

return statearr_19745;
})();
var inst_19613 = [new cljs.core.Keyword(null,"hash","hash",(-13781596))];
var inst_19614 = ["ab58606332f813bcf6ea26f732014f49a2197d2d281cc2939e59813721ee5246"];
var inst_19615 = cljs.core.PersistentHashMap.fromArrays(inst_19613,inst_19614);
var inst_19616 = eos_cljs.core.transact.call(null,e2e.proposals.dao_acc,"newmemterms",inst_19615);
var inst_19617 = cljs.core.async.interop.p__GT_c.call(null,inst_19616);
var state_19720__$1 = state_19720;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19720__$1,(134),inst_19617);
} else {
if((state_val_19721 === (3))){
var inst_19717 = (state_19720[(2)]);
var inst_19718 = done.call(null);
var state_19720__$1 = (function (){var statearr_19746 = state_19720;
(statearr_19746[(13)] = inst_19717);

return statearr_19746;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19720__$1,inst_19718);
} else {
if((state_val_19721 === (35))){
var _ = (function (){var statearr_19747 = state_19720;
(statearr_19747[(4)] = cljs.core.cons.call(null,(38),(state_19720[(4)])));

return statearr_19747;
})();
var inst_19189 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_19190 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can vote on own proposal"];
var inst_19191 = cljs.core.PersistentHashMap.fromArrays(inst_19189,inst_19190);
var inst_19192 = cljs.test.do_report.call(null,inst_19191);
var ___$1 = (function (){var statearr_19748 = state_19720;
(statearr_19748[(4)] = cljs.core.rest.call(null,(state_19720[(4)])));

return statearr_19748;
})();
var state_19720__$1 = state_19720;
var statearr_19749_21032 = state_19720__$1;
(statearr_19749_21032[(2)] = inst_19192);

(statearr_19749_21032[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (67))){
var inst_19303 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_19304 = true;
var inst_19305 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"can update vote",inst_19304,true];
var inst_19306 = cljs.core.PersistentHashMap.fromArrays(inst_19303,inst_19305);
var inst_19307 = cljs.test.do_report.call(null,inst_19306);
var state_19720__$1 = state_19720;
var statearr_19750_21033 = state_19720__$1;
(statearr_19750_21033[(2)] = inst_19307);

(statearr_19750_21033[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (99))){
var inst_19436 = (state_19720[(10)]);
var state_19720__$1 = state_19720;
var statearr_19751_21034 = state_19720__$1;
(statearr_19751_21034[(2)] = inst_19436);

(statearr_19751_21034[(1)] = (100));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (131))){
var inst_19714 = (state_19720[(2)]);
var _ = (function (){var statearr_19752 = state_19720;
(statearr_19752[(4)] = cljs.core.rest.call(null,(state_19720[(4)])));

return statearr_19752;
})();
var state_19720__$1 = state_19720;
var statearr_19753_21035 = state_19720__$1;
(statearr_19753_21035[(2)] = inst_19714);

(statearr_19753_21035[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (4))){
var inst_19071 = (state_19720[(2)]);
var inst_19072 = cljs.core.prn.call(null,inst_19071);
var state_19720__$1 = state_19720;
var statearr_19754_21036 = state_19720__$1;
(statearr_19754_21036[(2)] = inst_19072);

(statearr_19754_21036[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (36))){
var inst_19195 = (state_19720[(2)]);
var state_19720__$1 = state_19720;
var statearr_19755_21037 = state_19720__$1;
(statearr_19755_21037[(2)] = inst_19195);

(statearr_19755_21037[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (68))){
var inst_19309 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_19310 = true;
var inst_19311 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can update vote",inst_19310,true];
var inst_19312 = cljs.core.PersistentHashMap.fromArrays(inst_19309,inst_19311);
var inst_19313 = cljs.test.do_report.call(null,inst_19312);
var state_19720__$1 = state_19720;
var statearr_19756_21038 = state_19720__$1;
(statearr_19756_21038[(2)] = inst_19313);

(statearr_19756_21038[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (100))){
var inst_19449 = (state_19720[(14)]);
var inst_19446 = (state_19720[(2)]);
var inst_19447 = (function (){var rows = inst_19446;
return ((function (rows,inst_19449,inst_19446,state_val_19721,c__19__auto__,___192__auto__,self____$1){
return (function (p1__53_SHARP_){
return cljs.core._EQ_.call(null,p1__53_SHARP_.call(null,"id"),(0));
});
;})(rows,inst_19449,inst_19446,state_val_19721,c__19__auto__,___192__auto__,self____$1))
})();
var inst_19448 = cljs.core.filter.call(null,inst_19447,inst_19446);
var inst_19449__$1 = cljs.core.first.call(null,inst_19448);
var inst_19450 = cljs.core.prn.call(null,inst_19449__$1);
var state_19720__$1 = (function (){var statearr_19758 = state_19720;
(statearr_19758[(14)] = inst_19449__$1);

(statearr_19758[(15)] = inst_19450);

return statearr_19758;
})();
var statearr_19759_21039 = state_19720__$1;
(statearr_19759_21039[(2)] = null);

(statearr_19759_21039[(1)] = (101));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (132))){
var inst_19606 = (state_19720[(2)]);
var inst_19607 = cljs.core.prn.call(null,inst_19606);
var state_19720__$1 = state_19720;
var statearr_19760_21040 = state_19720__$1;
(statearr_19760_21040[(2)] = inst_19607);

(statearr_19760_21040[(1)] = (131));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (5))){
var _ = (function (){var statearr_19761 = state_19720;
(statearr_19761[(4)] = cljs.core.rest.call(null,(state_19720[(4)])));

return statearr_19761;
})();
var state_19720__$1 = state_19720;
var ex19757 = (state_19720__$1[(2)]);
var statearr_19762_21041 = state_19720__$1;
(statearr_19762_21041[(5)] = ex19757);


if((ex19757 instanceof Error)){
var statearr_19763_21042 = state_19720__$1;
(statearr_19763_21042[(1)] = (4));

(statearr_19763_21042[(5)] = null);

} else {
throw ex19757;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (37))){
var inst_19178 = (state_19720[(2)]);
var inst_19179 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_19180 = null;
var inst_19181 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can vote on own proposal",inst_19180,inst_19178];
var inst_19182 = cljs.core.PersistentHashMap.fromArrays(inst_19179,inst_19181);
var inst_19183 = cljs.test.do_report.call(null,inst_19182);
var state_19720__$1 = state_19720;
var statearr_19764_21043 = state_19720__$1;
(statearr_19764_21043[(2)] = inst_19183);

(statearr_19764_21043[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (69))){
var inst_19315 = (state_19720[(2)]);
var _ = (function (){var statearr_19766 = state_19720;
(statearr_19766[(4)] = cljs.core.rest.call(null,(state_19720[(4)])));

return statearr_19766;
})();
var state_19720__$1 = (function (){var statearr_19767 = state_19720;
(statearr_19767[(16)] = inst_19315);

return statearr_19767;
})();
var statearr_19768_21044 = state_19720__$1;
(statearr_19768_21044[(2)] = true);

(statearr_19768_21044[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (101))){
var inst_19449 = (state_19720[(14)]);
var inst_19467 = (state_19720[(17)]);
var inst_19468 = (state_19720[(18)]);
var _ = (function (){var statearr_19769 = state_19720;
(statearr_19769[(4)] = cljs.core.cons.call(null,(104),(state_19720[(4)])));

return statearr_19769;
})();
var inst_19462 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19463 = ["vote_counts",(0),"value"];
var inst_19464 = (new cljs.core.PersistentVector(null,(3),(5),inst_19462,inst_19463,null));
var inst_19465 = cljs.core.get_in.call(null,inst_19449,inst_19464);
var inst_19466 = (new cljs.core.List(null,(0),null,(1),null));
var inst_19467__$1 = (new cljs.core.List(null,inst_19465,inst_19466,(2),null));
var inst_19468__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_19467__$1);
var state_19720__$1 = (function (){var statearr_19770 = state_19720;
(statearr_19770[(17)] = inst_19467__$1);

(statearr_19770[(18)] = inst_19468__$1);

return statearr_19770;
})();
if(cljs.core.truth_(inst_19468__$1)){
var statearr_19771_21045 = state_19720__$1;
(statearr_19771_21045[(1)] = (105));

} else {
var statearr_19772_21046 = state_19720__$1;
(statearr_19772_21046[(1)] = (106));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (133))){
var _ = (function (){var statearr_19774 = state_19720;
(statearr_19774[(4)] = cljs.core.rest.call(null,(state_19720[(4)])));

return statearr_19774;
})();
var state_19720__$1 = state_19720;
var ex19765 = (state_19720__$1[(2)]);
var statearr_19775_21047 = state_19720__$1;
(statearr_19775_21047[(5)] = ex19765);


if((ex19765 instanceof Error)){
var statearr_19776_21048 = state_19720__$1;
(statearr_19776_21048[(1)] = (132));

(statearr_19776_21048[(5)] = null);

} else {
throw ex19765;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (6))){
var _ = (function (){var statearr_19777 = state_19720;
(statearr_19777[(4)] = cljs.core.cons.call(null,(19),(state_19720[(4)])));

return statearr_19777;
})();
var inst_19122 = [new cljs.core.Keyword(null,"voter","voter",(1012094707)),new cljs.core.Keyword(null,"prop_id","prop_id",(-694455661)),new cljs.core.Keyword(null,"vote_type","vote_type",(-293333277))];
var inst_19123 = [e2e.proposals.owner_acc,(0),(0)];
var inst_19124 = cljs.core.PersistentHashMap.fromArrays(inst_19122,inst_19123);
var inst_19125 = e2e.proposals.eos_tx_owner.call(null,e2e.proposals.prop_acc,"addvote",inst_19124);
var inst_19126 = cljs.core.async.interop.p__GT_c.call(null,inst_19125);
var state_19720__$1 = state_19720;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19720__$1,(20),inst_19126);
} else {
if((state_val_19721 === (38))){
var _ = (function (){var statearr_19778 = state_19720;
(statearr_19778[(4)] = cljs.core.rest.call(null,(state_19720[(4)])));

return statearr_19778;
})();
var state_19720__$1 = state_19720;
var ex19773 = (state_19720__$1[(2)]);
var statearr_19779_21049 = state_19720__$1;
(statearr_19779_21049[(5)] = ex19773);


var statearr_19780_21050 = state_19720__$1;
(statearr_19780_21050[(1)] = (37));

(statearr_19780_21050[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (70))){
var _ = (function (){var statearr_19781 = state_19720;
(statearr_19781[(4)] = cljs.core.cons.call(null,(77),(state_19720[(4)])));

return statearr_19781;
})();
var inst_19347 = [new cljs.core.Keyword(null,"voter","voter",(1012094707)),new cljs.core.Keyword(null,"prop_id","prop_id",(-694455661)),new cljs.core.Keyword(null,"vote_type","vote_type",(-293333277))];
var inst_19348 = [e2e.proposals.owner_acc,(0),(2)];
var inst_19349 = cljs.core.PersistentHashMap.fromArrays(inst_19347,inst_19348);
var inst_19350 = e2e.proposals.eos_tx_owner.call(null,e2e.proposals.prop_acc,"addvote",inst_19349);
var inst_19351 = cljs.core.async.interop.p__GT_c.call(null,inst_19350);
var state_19720__$1 = state_19720;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19720__$1,(78),inst_19351);
} else {
if((state_val_19721 === (102))){
var inst_19491 = (state_19720[(2)]);
var state_19720__$1 = (function (){var statearr_19782 = state_19720;
(statearr_19782[(19)] = inst_19491);

return statearr_19782;
})();
var statearr_19783_21051 = state_19720__$1;
(statearr_19783_21051[(2)] = null);

(statearr_19783_21051[(1)] = (108));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (134))){
var inst_19619 = (state_19720[(20)]);
var inst_19619__$1 = (state_19720[(2)]);
var inst_19620 = (inst_19619__$1 instanceof cljs.core.ExceptionInfo);
var inst_19621 = cljs.core.ex_data.call(null,inst_19619__$1);
var inst_19622 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_19621);
var inst_19623 = cljs.core._EQ_.call(null,inst_19622,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_19624 = ((inst_19620) && (inst_19623));
var state_19720__$1 = (function (){var statearr_19785 = state_19720;
(statearr_19785[(20)] = inst_19619__$1);

return statearr_19785;
})();
if(cljs.core.truth_(inst_19624)){
var statearr_19786_21052 = state_19720__$1;
(statearr_19786_21052[(1)] = (135));

} else {
var statearr_19787_21053 = state_19720__$1;
(statearr_19787_21053[(1)] = (136));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (7))){
var inst_19159 = (state_19720[(2)]);
var inst_19160 = ((9000000) + (1));
var inst_19161 = cljs.core.assoc.call(null,e2e.proposals.prop_config,new cljs.core.Keyword(null,"cycle_duration_sec","cycle_duration_sec",(2139129571)),inst_19160,new cljs.core.Keyword(null,"cycle_voting_duration_sec","cycle_voting_duration_sec",(-1056353816)),(9000000));
var inst_19162 = eos_cljs.core.transact.call(null,e2e.proposals.prop_acc,"update",inst_19161);
var inst_19163 = cljs.core.async.interop.p__GT_c.call(null,inst_19162);
var state_19720__$1 = (function (){var statearr_19788 = state_19720;
(statearr_19788[(21)] = inst_19159);

return statearr_19788;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19720__$1,(28),inst_19163);
} else {
if((state_val_19721 === (39))){
var _ = (function (){var statearr_19789 = state_19720;
(statearr_19789[(4)] = cljs.core.rest.call(null,(state_19720[(4)])));

return statearr_19789;
})();
var state_19720__$1 = state_19720;
var ex19784 = (state_19720__$1[(2)]);
var statearr_19790_21054 = state_19720__$1;
(statearr_19790_21054[(5)] = ex19784);


if((ex19784 instanceof Error)){
var statearr_19791_21055 = state_19720__$1;
(statearr_19791_21055[(1)] = (34));

(statearr_19791_21055[(5)] = null);

} else {
throw ex19784;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (71))){
var inst_19394 = (state_19720[(2)]);
var inst_19395 = Promise.resolve((42));
var inst_19396 = eos_cljs.core.wait_block.call(null,inst_19395,(2));
var inst_19397 = cljs.core.async.interop.p__GT_c.call(null,inst_19396);
var state_19720__$1 = (function (){var statearr_19792 = state_19720;
(statearr_19792[(22)] = inst_19394);

return statearr_19792;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19720__$1,(89),inst_19397);
} else {
if((state_val_19721 === (103))){
var inst_19451 = (state_19720[(2)]);
var inst_19452 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_19453 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",(-1965644065),null),new cljs.core.Symbol(null,"r","r",(1169147337),null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["vote_counts",(0),"value"], null)),(0));
var inst_19454 = [new cljs.core.Keyword(null,"error","error",(-978969032)),null,inst_19453,inst_19451];
var inst_19455 = cljs.core.PersistentHashMap.fromArrays(inst_19452,inst_19454);
var inst_19456 = cljs.test.do_report.call(null,inst_19455);
var state_19720__$1 = state_19720;
var statearr_19793_21056 = state_19720__$1;
(statearr_19793_21056[(2)] = inst_19456);

(statearr_19793_21056[(1)] = (102));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (135))){
var inst_19619 = (state_19720[(20)]);
var inst_19626 = (function(){throw inst_19619})();
var state_19720__$1 = state_19720;
var statearr_19794_21057 = state_19720__$1;
(statearr_19794_21057[(2)] = inst_19626);

(statearr_19794_21057[(1)] = (137));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (8))){
var inst_19080 = (state_19720[(23)]);
var inst_19081 = (state_19720[(24)]);
var inst_19078 = (state_19720[(2)]);
var inst_19079 = inst_19078.cause;
var inst_19080__$1 = inst_19079.message;
var inst_19081__$1 = clojure.string.ends_with_QMARK_.call(null,inst_19080__$1,"not in voting period");
var inst_19082 = (!(inst_19081__$1));
var state_19720__$1 = (function (){var statearr_19795 = state_19720;
(statearr_19795[(23)] = inst_19080__$1);

(statearr_19795[(24)] = inst_19081__$1);

return statearr_19795;
})();
if(inst_19082){
var statearr_19796_21058 = state_19720__$1;
(statearr_19796_21058[(1)] = (9));

} else {
var statearr_19797_21059 = state_19720__$1;
(statearr_19797_21059[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (40))){
var inst_19207 = (state_19720[(25)]);
var inst_19207__$1 = (state_19720[(2)]);
var inst_19208 = (inst_19207__$1 instanceof cljs.core.ExceptionInfo);
var inst_19209 = cljs.core.ex_data.call(null,inst_19207__$1);
var inst_19210 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_19209);
var inst_19211 = cljs.core._EQ_.call(null,inst_19210,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_19212 = ((inst_19208) && (inst_19211));
var state_19720__$1 = (function (){var statearr_19799 = state_19720;
(statearr_19799[(25)] = inst_19207__$1);

return statearr_19799;
})();
if(cljs.core.truth_(inst_19212)){
var statearr_19800_21060 = state_19720__$1;
(statearr_19800_21060[(1)] = (41));

} else {
var statearr_19801_21061 = state_19720__$1;
(statearr_19801_21061[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (72))){
var inst_19322 = (state_19720[(2)]);
var inst_19323 = cljs.core.prn.call(null,"test failed with ",inst_19322);
var state_19720__$1 = (function (){var statearr_19802 = state_19720;
(statearr_19802[(26)] = inst_19323);

return statearr_19802;
})();
var statearr_19803_21062 = state_19720__$1;
(statearr_19803_21062[(2)] = null);

(statearr_19803_21062[(1)] = (73));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (104))){
var _ = (function (){var statearr_19804 = state_19720;
(statearr_19804[(4)] = cljs.core.rest.call(null,(state_19720[(4)])));

return statearr_19804;
})();
var state_19720__$1 = state_19720;
var ex19798 = (state_19720__$1[(2)]);
var statearr_19805_21063 = state_19720__$1;
(statearr_19805_21063[(5)] = ex19798);


var statearr_19806_21064 = state_19720__$1;
(statearr_19806_21064[(1)] = (103));

(statearr_19806_21064[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (136))){
var inst_19619 = (state_19720[(20)]);
var state_19720__$1 = state_19720;
var statearr_19807_21065 = state_19720__$1;
(statearr_19807_21065[(2)] = inst_19619);

(statearr_19807_21065[(1)] = (137));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (9))){
var inst_19080 = (state_19720[(23)]);
var inst_19084 = ["expected =","not in voting period"," actual = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_19080)].join('');
var inst_19085 = cljs.core.prn.call(null,inst_19084);
var state_19720__$1 = state_19720;
var statearr_19808_21066 = state_19720__$1;
(statearr_19808_21066[(2)] = inst_19085);

(statearr_19808_21066[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (41))){
var inst_19207 = (state_19720[(25)]);
var inst_19214 = (function(){throw inst_19207})();
var state_19720__$1 = state_19720;
var statearr_19809_21067 = state_19720__$1;
(statearr_19809_21067[(2)] = inst_19214);

(statearr_19809_21067[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (73))){
var _ = (function (){var statearr_19810 = state_19720;
(statearr_19810[(4)] = cljs.core.cons.call(null,(76),(state_19720[(4)])));

return statearr_19810;
})();
var inst_19335 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_19336 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can update vote twice"];
var inst_19337 = cljs.core.PersistentHashMap.fromArrays(inst_19335,inst_19336);
var inst_19338 = cljs.test.do_report.call(null,inst_19337);
var ___$1 = (function (){var statearr_19811 = state_19720;
(statearr_19811[(4)] = cljs.core.rest.call(null,(state_19720[(4)])));

return statearr_19811;
})();
var state_19720__$1 = state_19720;
var statearr_19812_21068 = state_19720__$1;
(statearr_19812_21068[(2)] = inst_19338);

(statearr_19812_21068[(1)] = (74));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (105))){
var inst_19467 = (state_19720[(17)]);
var inst_19470 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_19471 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",(-1965644065),null),new cljs.core.Symbol(null,"r","r",(1169147337),null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["vote_counts",(0),"value"], null)),(0));
var inst_19472 = cljs.core.cons.call(null,cljs.core._EQ_,inst_19467);
var inst_19473 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),null,inst_19471,inst_19472];
var inst_19474 = cljs.core.PersistentHashMap.fromArrays(inst_19470,inst_19473);
var inst_19475 = cljs.test.do_report.call(null,inst_19474);
var state_19720__$1 = state_19720;
var statearr_19813_21069 = state_19720__$1;
(statearr_19813_21069[(2)] = inst_19475);

(statearr_19813_21069[(1)] = (107));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (137))){
var inst_19629 = (state_19720[(2)]);
var state_19720__$1 = (function (){var statearr_19814 = state_19720;
(statearr_19814[(27)] = inst_19629);

return statearr_19814;
})();
var statearr_19815_21070 = state_19720__$1;
(statearr_19815_21070[(2)] = null);

(statearr_19815_21070[(1)] = (138));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (10))){
var state_19720__$1 = state_19720;
var statearr_19816_21071 = state_19720__$1;
(statearr_19816_21071[(2)] = null);

(statearr_19816_21071[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (42))){
var inst_19207 = (state_19720[(25)]);
var state_19720__$1 = state_19720;
var statearr_19817_21072 = state_19720__$1;
(statearr_19817_21072[(2)] = inst_19207);

(statearr_19817_21072[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (74))){
var inst_19341 = (state_19720[(2)]);
var state_19720__$1 = state_19720;
var statearr_19818_21073 = state_19720__$1;
(statearr_19818_21073[(2)] = inst_19341);

(statearr_19818_21073[(1)] = (71));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (106))){
var inst_19467 = (state_19720[(17)]);
var inst_19477 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_19478 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",(-1965644065),null),new cljs.core.Symbol(null,"r","r",(1169147337),null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["vote_counts",(0),"value"], null)),(0));
var inst_19479 = new cljs.core.Symbol(null,"not","not",(1044554643),null);
var inst_19480 = new cljs.core.Symbol(null,"=","=",(-1501502141),null);
var inst_19481 = cljs.core.cons.call(null,inst_19480,inst_19467);
var inst_19482 = (new cljs.core.List(null,inst_19481,null,(1),null));
var inst_19483 = (new cljs.core.List(null,inst_19479,inst_19482,(2),null));
var inst_19484 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),null,inst_19478,inst_19483];
var inst_19485 = cljs.core.PersistentHashMap.fromArrays(inst_19477,inst_19484);
var inst_19486 = cljs.test.do_report.call(null,inst_19485);
var state_19720__$1 = state_19720;
var statearr_19819_21074 = state_19720__$1;
(statearr_19819_21074[(2)] = inst_19486);

(statearr_19819_21074[(1)] = (107));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (138))){
var _ = (function (){var statearr_19820 = state_19720;
(statearr_19820[(4)] = cljs.core.cons.call(null,(151),(state_19720[(4)])));

return statearr_19820;
})();
var inst_19674 = [new cljs.core.Keyword(null,"voter","voter",(1012094707)),new cljs.core.Keyword(null,"prop_id","prop_id",(-694455661)),new cljs.core.Keyword(null,"vote_type","vote_type",(-293333277))];
var inst_19675 = [e2e.proposals.owner_acc,(1),(3)];
var inst_19676 = cljs.core.PersistentHashMap.fromArrays(inst_19674,inst_19675);
var inst_19677 = e2e.proposals.eos_tx_owner.call(null,e2e.proposals.prop_acc,"addvote",inst_19676);
var inst_19678 = cljs.core.async.interop.p__GT_c.call(null,inst_19677);
var state_19720__$1 = state_19720;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19720__$1,(152),inst_19678);
} else {
if((state_val_19721 === (11))){
var inst_19088 = (state_19720[(2)]);
var state_19720__$1 = (function (){var statearr_19821 = state_19720;
(statearr_19821[(28)] = inst_19088);

return statearr_19821;
})();
var statearr_19822_21075 = state_19720__$1;
(statearr_19822_21075[(2)] = null);

(statearr_19822_21075[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (43))){
var inst_19217 = (state_19720[(2)]);
var state_19720__$1 = (function (){var statearr_19823 = state_19720;
(statearr_19823[(29)] = inst_19217);

return statearr_19823;
})();
var statearr_19824_21076 = state_19720__$1;
(statearr_19824_21076[(2)] = null);

(statearr_19824_21076[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (75))){
var inst_19324 = (state_19720[(2)]);
var inst_19325 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_19326 = null;
var inst_19327 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can update vote twice",inst_19326,inst_19324];
var inst_19328 = cljs.core.PersistentHashMap.fromArrays(inst_19325,inst_19327);
var inst_19329 = cljs.test.do_report.call(null,inst_19328);
var state_19720__$1 = state_19720;
var statearr_19825_21077 = state_19720__$1;
(statearr_19825_21077[(2)] = inst_19329);

(statearr_19825_21077[(1)] = (74));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (107))){
var inst_19468 = (state_19720[(18)]);
var inst_19488 = (state_19720[(2)]);
var _ = (function (){var statearr_19826 = state_19720;
(statearr_19826[(4)] = cljs.core.rest.call(null,(state_19720[(4)])));

return statearr_19826;
})();
var state_19720__$1 = (function (){var statearr_19827 = state_19720;
(statearr_19827[(30)] = inst_19488);

return statearr_19827;
})();
var statearr_19828_21078 = state_19720__$1;
(statearr_19828_21078[(2)] = inst_19468);

(statearr_19828_21078[(1)] = (102));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (139))){
var inst_19711 = (state_19720[(2)]);
var _ = (function (){var statearr_19829 = state_19720;
(statearr_19829[(4)] = cljs.core.rest.call(null,(state_19720[(4)])));

return statearr_19829;
})();
var state_19720__$1 = state_19720;
var statearr_19830_21079 = state_19720__$1;
(statearr_19830_21079[(2)] = inst_19711);

(statearr_19830_21079[(1)] = (131));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (12))){
var inst_19081 = (state_19720[(24)]);
var _ = (function (){var statearr_19832 = state_19720;
(statearr_19832[(4)] = cljs.core.cons.call(null,(15),(state_19720[(4)])));

return statearr_19832;
})();
var state_19720__$1 = state_19720;
if(cljs.core.truth_(inst_19081)){
var statearr_19833_21080 = state_19720__$1;
(statearr_19833_21080[(1)] = (16));

} else {
var statearr_19834_21081 = state_19720__$1;
(statearr_19834_21081[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (44))){
var _ = (function (){var statearr_19835 = state_19720;
(statearr_19835[(4)] = cljs.core.cons.call(null,(47),(state_19720[(4)])));

return statearr_19835;
})();
var state_19720__$1 = state_19720;
var statearr_19836_21082 = state_19720__$1;
(statearr_19836_21082[(1)] = (48));



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (76))){
var _ = (function (){var statearr_19838 = state_19720;
(statearr_19838[(4)] = cljs.core.rest.call(null,(state_19720[(4)])));

return statearr_19838;
})();
var state_19720__$1 = state_19720;
var ex19831 = (state_19720__$1[(2)]);
var statearr_19839_21083 = state_19720__$1;
(statearr_19839_21083[(5)] = ex19831);


var statearr_19840_21084 = state_19720__$1;
(statearr_19840_21084[(1)] = (75));

(statearr_19840_21084[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (108))){
var inst_19449 = (state_19720[(14)]);
var inst_19508 = (state_19720[(31)]);
var inst_19509 = (state_19720[(32)]);
var _ = (function (){var statearr_19841 = state_19720;
(statearr_19841[(4)] = cljs.core.cons.call(null,(111),(state_19720[(4)])));

return statearr_19841;
})();
var inst_19503 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19504 = ["vote_counts",(1),"value"];
var inst_19505 = (new cljs.core.PersistentVector(null,(3),(5),inst_19503,inst_19504,null));
var inst_19506 = cljs.core.get_in.call(null,inst_19449,inst_19505);
var inst_19507 = (new cljs.core.List(null,(2),null,(1),null));
var inst_19508__$1 = (new cljs.core.List(null,inst_19506,inst_19507,(2),null));
var inst_19509__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_19508__$1);
var state_19720__$1 = (function (){var statearr_19842 = state_19720;
(statearr_19842[(31)] = inst_19508__$1);

(statearr_19842[(32)] = inst_19509__$1);

return statearr_19842;
})();
if(cljs.core.truth_(inst_19509__$1)){
var statearr_19843_21085 = state_19720__$1;
(statearr_19843_21085[(1)] = (112));

} else {
var statearr_19844_21086 = state_19720__$1;
(statearr_19844_21086[(1)] = (113));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (140))){
var inst_19632 = (state_19720[(33)]);
var inst_19633 = (state_19720[(34)]);
var inst_19630 = (state_19720[(2)]);
var inst_19631 = inst_19630.cause;
var inst_19632__$1 = inst_19631.message;
var inst_19633__$1 = clojure.string.ends_with_QMARK_.call(null,inst_19632__$1,"agreed terms are not the latest");
var inst_19634 = (!(inst_19633__$1));
var state_19720__$1 = (function (){var statearr_19845 = state_19720;
(statearr_19845[(33)] = inst_19632__$1);

(statearr_19845[(34)] = inst_19633__$1);

return statearr_19845;
})();
if(inst_19634){
var statearr_19846_21087 = state_19720__$1;
(statearr_19846_21087[(1)] = (141));

} else {
var statearr_19847_21088 = state_19720__$1;
(statearr_19847_21088[(1)] = (142));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (13))){
var inst_19116 = (state_19720[(2)]);
var state_19720__$1 = state_19720;
var statearr_19849_21089 = state_19720__$1;
(statearr_19849_21089[(2)] = inst_19116);

(statearr_19849_21089[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (45))){
var inst_19245 = (state_19720[(2)]);
var _ = (function (){var statearr_19850 = state_19720;
(statearr_19850[(4)] = cljs.core.rest.call(null,(state_19720[(4)])));

return statearr_19850;
})();
var state_19720__$1 = state_19720;
var statearr_19851_21090 = state_19720__$1;
(statearr_19851_21090[(2)] = inst_19245);

(statearr_19851_21090[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (77))){
var _ = (function (){var statearr_19852 = state_19720;
(statearr_19852[(4)] = cljs.core.rest.call(null,(state_19720[(4)])));

return statearr_19852;
})();
var state_19720__$1 = state_19720;
var ex19848 = (state_19720__$1[(2)]);
var statearr_19853_21091 = state_19720__$1;
(statearr_19853_21091[(5)] = ex19848);


if((ex19848 instanceof Error)){
var statearr_19854_21092 = state_19720__$1;
(statearr_19854_21092[(1)] = (72));

(statearr_19854_21092[(5)] = null);

} else {
throw ex19848;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (109))){
var inst_19532 = (state_19720[(2)]);
var state_19720__$1 = (function (){var statearr_19855 = state_19720;
(statearr_19855[(35)] = inst_19532);

return statearr_19855;
})();
var statearr_19856_21093 = state_19720__$1;
(statearr_19856_21093[(2)] = null);

(statearr_19856_21093[(1)] = (115));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (141))){
var inst_19632 = (state_19720[(33)]);
var inst_19636 = ["expected =","agreed terms are not the latest"," actual = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_19632)].join('');
var inst_19637 = cljs.core.prn.call(null,inst_19636);
var state_19720__$1 = state_19720;
var statearr_19857_21094 = state_19720__$1;
(statearr_19857_21094[(2)] = inst_19637);

(statearr_19857_21094[(1)] = (143));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (14))){
var inst_19089 = (state_19720[(2)]);
var inst_19090 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_19091 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_19092 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can vote on own proposal",inst_19091,inst_19089];
var inst_19093 = cljs.core.PersistentHashMap.fromArrays(inst_19090,inst_19092);
var inst_19094 = cljs.test.do_report.call(null,inst_19093);
var state_19720__$1 = state_19720;
var statearr_19858_21095 = state_19720__$1;
(statearr_19858_21095[(2)] = inst_19094);

(statearr_19858_21095[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (46))){
var inst_19218 = (state_19720[(2)]);
var inst_19219 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_19220 = true;
var inst_19221 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can vote on own proposal",inst_19220,inst_19218];
var inst_19222 = cljs.core.PersistentHashMap.fromArrays(inst_19219,inst_19221);
var inst_19223 = cljs.test.do_report.call(null,inst_19222);
var state_19720__$1 = state_19720;
var statearr_19859_21096 = state_19720__$1;
(statearr_19859_21096[(2)] = inst_19223);

(statearr_19859_21096[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (78))){
var inst_19353 = (state_19720[(36)]);
var inst_19353__$1 = (state_19720[(2)]);
var inst_19354 = (inst_19353__$1 instanceof cljs.core.ExceptionInfo);
var inst_19355 = cljs.core.ex_data.call(null,inst_19353__$1);
var inst_19356 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_19355);
var inst_19357 = cljs.core._EQ_.call(null,inst_19356,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_19358 = ((inst_19354) && (inst_19357));
var state_19720__$1 = (function (){var statearr_19860 = state_19720;
(statearr_19860[(36)] = inst_19353__$1);

return statearr_19860;
})();
if(cljs.core.truth_(inst_19358)){
var statearr_19861_21097 = state_19720__$1;
(statearr_19861_21097[(1)] = (79));

} else {
var statearr_19862_21098 = state_19720__$1;
(statearr_19862_21098[(1)] = (80));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (110))){
var inst_19492 = (state_19720[(2)]);
var inst_19493 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_19494 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",(-1965644065),null),new cljs.core.Symbol(null,"r","r",(1169147337),null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["vote_counts",(1),"value"], null)),(2));
var inst_19495 = [new cljs.core.Keyword(null,"error","error",(-978969032)),null,inst_19494,inst_19492];
var inst_19496 = cljs.core.PersistentHashMap.fromArrays(inst_19493,inst_19495);
var inst_19497 = cljs.test.do_report.call(null,inst_19496);
var state_19720__$1 = state_19720;
var statearr_19864_21099 = state_19720__$1;
(statearr_19864_21099[(2)] = inst_19497);

(statearr_19864_21099[(1)] = (109));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (142))){
var state_19720__$1 = state_19720;
var statearr_19866_21100 = state_19720__$1;
(statearr_19866_21100[(2)] = null);

(statearr_19866_21100[(1)] = (143));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (15))){
var _ = (function (){var statearr_19867 = state_19720;
(statearr_19867[(4)] = cljs.core.rest.call(null,(state_19720[(4)])));

return statearr_19867;
})();
var state_19720__$1 = state_19720;
var ex19863 = (state_19720__$1[(2)]);
var statearr_19868_21101 = state_19720__$1;
(statearr_19868_21101[(5)] = ex19863);


var statearr_19869_21102 = state_19720__$1;
(statearr_19869_21102[(1)] = (14));

(statearr_19869_21102[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (47))){
var _ = (function (){var statearr_19871 = state_19720;
(statearr_19871[(4)] = cljs.core.rest.call(null,(state_19720[(4)])));

return statearr_19871;
})();
var state_19720__$1 = state_19720;
var ex19865 = (state_19720__$1[(2)]);
var statearr_19872_21103 = state_19720__$1;
(statearr_19872_21103[(5)] = ex19865);


var statearr_19873_21104 = state_19720__$1;
(statearr_19873_21104[(1)] = (46));

(statearr_19873_21104[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (79))){
var inst_19353 = (state_19720[(36)]);
var inst_19360 = (function(){throw inst_19353})();
var state_19720__$1 = state_19720;
var statearr_19874_21105 = state_19720__$1;
(statearr_19874_21105[(2)] = inst_19360);

(statearr_19874_21105[(1)] = (81));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (111))){
var _ = (function (){var statearr_19875 = state_19720;
(statearr_19875[(4)] = cljs.core.rest.call(null,(state_19720[(4)])));

return statearr_19875;
})();
var state_19720__$1 = state_19720;
var ex19870 = (state_19720__$1[(2)]);
var statearr_19876_21106 = state_19720__$1;
(statearr_19876_21106[(5)] = ex19870);


var statearr_19877_21107 = state_19720__$1;
(statearr_19877_21107[(1)] = (110));

(statearr_19877_21107[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (143))){
var inst_19640 = (state_19720[(2)]);
var state_19720__$1 = (function (){var statearr_19878 = state_19720;
(statearr_19878[(37)] = inst_19640);

return statearr_19878;
})();
var statearr_19879_21108 = state_19720__$1;
(statearr_19879_21108[(2)] = null);

(statearr_19879_21108[(1)] = (144));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (16))){
var inst_19081 = (state_19720[(24)]);
var inst_19101 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_19102 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_19103 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"can vote on own proposal",inst_19102,inst_19081];
var inst_19104 = cljs.core.PersistentHashMap.fromArrays(inst_19101,inst_19103);
var inst_19105 = cljs.test.do_report.call(null,inst_19104);
var state_19720__$1 = state_19720;
var statearr_19880_21109 = state_19720__$1;
(statearr_19880_21109[(2)] = inst_19105);

(statearr_19880_21109[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (48))){
var inst_19230 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_19231 = true;
var inst_19232 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"can vote on own proposal",inst_19231,true];
var inst_19233 = cljs.core.PersistentHashMap.fromArrays(inst_19230,inst_19232);
var inst_19234 = cljs.test.do_report.call(null,inst_19233);
var state_19720__$1 = state_19720;
var statearr_19881_21110 = state_19720__$1;
(statearr_19881_21110[(2)] = inst_19234);

(statearr_19881_21110[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (80))){
var inst_19353 = (state_19720[(36)]);
var state_19720__$1 = state_19720;
var statearr_19882_21111 = state_19720__$1;
(statearr_19882_21111[(2)] = inst_19353);

(statearr_19882_21111[(1)] = (81));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (112))){
var inst_19508 = (state_19720[(31)]);
var inst_19511 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_19512 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",(-1965644065),null),new cljs.core.Symbol(null,"r","r",(1169147337),null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["vote_counts",(1),"value"], null)),(2));
var inst_19513 = cljs.core.cons.call(null,cljs.core._EQ_,inst_19508);
var inst_19514 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),null,inst_19512,inst_19513];
var inst_19515 = cljs.core.PersistentHashMap.fromArrays(inst_19511,inst_19514);
var inst_19516 = cljs.test.do_report.call(null,inst_19515);
var state_19720__$1 = state_19720;
var statearr_19883_21112 = state_19720__$1;
(statearr_19883_21112[(2)] = inst_19516);

(statearr_19883_21112[(1)] = (114));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (144))){
var inst_19633 = (state_19720[(34)]);
var _ = (function (){var statearr_19884 = state_19720;
(statearr_19884[(4)] = cljs.core.cons.call(null,(147),(state_19720[(4)])));

return statearr_19884;
})();
var state_19720__$1 = state_19720;
if(cljs.core.truth_(inst_19633)){
var statearr_19885_21113 = state_19720__$1;
(statearr_19885_21113[(1)] = (148));

} else {
var statearr_19886_21114 = state_19720__$1;
(statearr_19886_21114[(1)] = (149));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (17))){
var inst_19081 = (state_19720[(24)]);
var inst_19107 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_19108 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_19109 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can vote on own proposal",inst_19108,inst_19081];
var inst_19110 = cljs.core.PersistentHashMap.fromArrays(inst_19107,inst_19109);
var inst_19111 = cljs.test.do_report.call(null,inst_19110);
var state_19720__$1 = state_19720;
var statearr_19887_21115 = state_19720__$1;
(statearr_19887_21115[(2)] = inst_19111);

(statearr_19887_21115[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (49))){
var inst_19236 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_19237 = true;
var inst_19238 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can vote on own proposal",inst_19237,true];
var inst_19239 = cljs.core.PersistentHashMap.fromArrays(inst_19236,inst_19238);
var inst_19240 = cljs.test.do_report.call(null,inst_19239);
var state_19720__$1 = state_19720;
var statearr_19888_21116 = state_19720__$1;
(statearr_19888_21116[(2)] = inst_19240);

(statearr_19888_21116[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (81))){
var inst_19363 = (state_19720[(2)]);
var state_19720__$1 = (function (){var statearr_19889 = state_19720;
(statearr_19889[(38)] = inst_19363);

return statearr_19889;
})();
var statearr_19890_21117 = state_19720__$1;
(statearr_19890_21117[(2)] = null);

(statearr_19890_21117[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (113))){
var inst_19508 = (state_19720[(31)]);
var inst_19518 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_19519 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",(-1965644065),null),new cljs.core.Symbol(null,"r","r",(1169147337),null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["vote_counts",(1),"value"], null)),(2));
var inst_19520 = new cljs.core.Symbol(null,"not","not",(1044554643),null);
var inst_19521 = new cljs.core.Symbol(null,"=","=",(-1501502141),null);
var inst_19522 = cljs.core.cons.call(null,inst_19521,inst_19508);
var inst_19523 = (new cljs.core.List(null,inst_19522,null,(1),null));
var inst_19524 = (new cljs.core.List(null,inst_19520,inst_19523,(2),null));
var inst_19525 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),null,inst_19519,inst_19524];
var inst_19526 = cljs.core.PersistentHashMap.fromArrays(inst_19518,inst_19525);
var inst_19527 = cljs.test.do_report.call(null,inst_19526);
var state_19720__$1 = state_19720;
var statearr_19891_21118 = state_19720__$1;
(statearr_19891_21118[(2)] = inst_19527);

(statearr_19891_21118[(1)] = (114));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (145))){
var inst_19668 = (state_19720[(2)]);
var state_19720__$1 = state_19720;
var statearr_19892_21119 = state_19720__$1;
(statearr_19892_21119[(2)] = inst_19668);

(statearr_19892_21119[(1)] = (139));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (18))){
var inst_19081 = (state_19720[(24)]);
var inst_19113 = (state_19720[(2)]);
var _ = (function (){var statearr_19893 = state_19720;
(statearr_19893[(4)] = cljs.core.rest.call(null,(state_19720[(4)])));

return statearr_19893;
})();
var state_19720__$1 = (function (){var statearr_19894 = state_19720;
(statearr_19894[(39)] = inst_19113);

return statearr_19894;
})();
var statearr_19895_21120 = state_19720__$1;
(statearr_19895_21120[(2)] = inst_19081);

(statearr_19895_21120[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (50))){
var inst_19242 = (state_19720[(2)]);
var _ = (function (){var statearr_19896 = state_19720;
(statearr_19896[(4)] = cljs.core.rest.call(null,(state_19720[(4)])));

return statearr_19896;
})();
var state_19720__$1 = (function (){var statearr_19897 = state_19720;
(statearr_19897[(40)] = inst_19242);

return statearr_19897;
})();
var statearr_19898_21121 = state_19720__$1;
(statearr_19898_21121[(2)] = true);

(statearr_19898_21121[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (82))){
var _ = (function (){var statearr_19899 = state_19720;
(statearr_19899[(4)] = cljs.core.cons.call(null,(85),(state_19720[(4)])));

return statearr_19899;
})();
var state_19720__$1 = state_19720;
var statearr_19900_21122 = state_19720__$1;
(statearr_19900_21122[(1)] = (86));



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (114))){
var inst_19509 = (state_19720[(32)]);
var inst_19529 = (state_19720[(2)]);
var _ = (function (){var statearr_19903 = state_19720;
(statearr_19903[(4)] = cljs.core.rest.call(null,(state_19720[(4)])));

return statearr_19903;
})();
var state_19720__$1 = (function (){var statearr_19904 = state_19720;
(statearr_19904[(41)] = inst_19529);

return statearr_19904;
})();
var statearr_19905_21123 = state_19720__$1;
(statearr_19905_21123[(2)] = inst_19509);

(statearr_19905_21123[(1)] = (109));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (146))){
var inst_19641 = (state_19720[(2)]);
var inst_19642 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_19643 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_19644 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"needs latest terms accepted",inst_19643,inst_19641];
var inst_19645 = cljs.core.PersistentHashMap.fromArrays(inst_19642,inst_19644);
var inst_19646 = cljs.test.do_report.call(null,inst_19645);
var state_19720__$1 = state_19720;
var statearr_19906_21124 = state_19720__$1;
(statearr_19906_21124[(2)] = inst_19646);

(statearr_19906_21124[(1)] = (145));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (19))){
var _ = (function (){var statearr_19907 = state_19720;
(statearr_19907[(4)] = cljs.core.rest.call(null,(state_19720[(4)])));

return statearr_19907;
})();
var state_19720__$1 = state_19720;
var ex19902 = (state_19720__$1[(2)]);
var statearr_19908_21125 = state_19720__$1;
(statearr_19908_21125[(5)] = ex19902);


if((ex19902 instanceof Error)){
var statearr_19909_21126 = state_19720__$1;
(statearr_19909_21126[(1)] = (8));

(statearr_19909_21126[(5)] = null);

} else {
throw ex19902;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (51))){
var _ = (function (){var statearr_19910 = state_19720;
(statearr_19910[(4)] = cljs.core.cons.call(null,(58),(state_19720[(4)])));

return statearr_19910;
})();
var inst_19274 = [new cljs.core.Keyword(null,"voter","voter",(1012094707)),new cljs.core.Keyword(null,"prop_id","prop_id",(-694455661)),new cljs.core.Keyword(null,"vote_type","vote_type",(-293333277))];
var inst_19275 = [e2e.proposals.owner_acc,(0),(1)];
var inst_19276 = cljs.core.PersistentHashMap.fromArrays(inst_19274,inst_19275);
var inst_19277 = e2e.proposals.eos_tx_owner.call(null,e2e.proposals.prop_acc,"addvote",inst_19276);
var inst_19278 = cljs.core.async.interop.p__GT_c.call(null,inst_19277);
var state_19720__$1 = state_19720;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19720__$1,(59),inst_19278);
} else {
if((state_val_19721 === (83))){
var inst_19391 = (state_19720[(2)]);
var _ = (function (){var statearr_19912 = state_19720;
(statearr_19912[(4)] = cljs.core.rest.call(null,(state_19720[(4)])));

return statearr_19912;
})();
var state_19720__$1 = state_19720;
var statearr_19913_21127 = state_19720__$1;
(statearr_19913_21127[(2)] = inst_19391);

(statearr_19913_21127[(1)] = (71));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (115))){
var inst_19449 = (state_19720[(14)]);
var inst_19549 = (state_19720[(42)]);
var inst_19550 = (state_19720[(43)]);
var _ = (function (){var statearr_19914 = state_19720;
(statearr_19914[(4)] = cljs.core.cons.call(null,(118),(state_19720[(4)])));

return statearr_19914;
})();
var inst_19544 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19545 = ["vote_counts",(2),"value"];
var inst_19546 = (new cljs.core.PersistentVector(null,(3),(5),inst_19544,inst_19545,null));
var inst_19547 = cljs.core.get_in.call(null,inst_19449,inst_19546);
var inst_19548 = (new cljs.core.List(null,(5),null,(1),null));
var inst_19549__$1 = (new cljs.core.List(null,inst_19547,inst_19548,(2),null));
var inst_19550__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_19549__$1);
var state_19720__$1 = (function (){var statearr_19915 = state_19720;
(statearr_19915[(42)] = inst_19549__$1);

(statearr_19915[(43)] = inst_19550__$1);

return statearr_19915;
})();
if(cljs.core.truth_(inst_19550__$1)){
var statearr_19916_21128 = state_19720__$1;
(statearr_19916_21128[(1)] = (119));

} else {
var statearr_19917_21129 = state_19720__$1;
(statearr_19917_21129[(1)] = (120));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (147))){
var _ = (function (){var statearr_19918 = state_19720;
(statearr_19918[(4)] = cljs.core.rest.call(null,(state_19720[(4)])));

return statearr_19918;
})();
var state_19720__$1 = state_19720;
var ex19911 = (state_19720__$1[(2)]);
var statearr_19919_21130 = state_19720__$1;
(statearr_19919_21130[(5)] = ex19911);


var statearr_19920_21131 = state_19720__$1;
(statearr_19920_21131[(1)] = (146));

(statearr_19920_21131[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (20))){
var inst_19128 = (state_19720[(44)]);
var inst_19128__$1 = (state_19720[(2)]);
var inst_19129 = (inst_19128__$1 instanceof cljs.core.ExceptionInfo);
var inst_19130 = cljs.core.ex_data.call(null,inst_19128__$1);
var inst_19131 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_19130);
var inst_19132 = cljs.core._EQ_.call(null,inst_19131,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_19133 = ((inst_19129) && (inst_19132));
var state_19720__$1 = (function (){var statearr_19921 = state_19720;
(statearr_19921[(44)] = inst_19128__$1);

return statearr_19921;
})();
if(cljs.core.truth_(inst_19133)){
var statearr_19922_21132 = state_19720__$1;
(statearr_19922_21132[(1)] = (21));

} else {
var statearr_19923_21133 = state_19720__$1;
(statearr_19923_21133[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (52))){
var inst_19321 = (state_19720[(2)]);
var state_19720__$1 = (function (){var statearr_19924 = state_19720;
(statearr_19924[(45)] = inst_19321);

return statearr_19924;
})();
var statearr_19925_21134 = state_19720__$1;
(statearr_19925_21134[(2)] = null);

(statearr_19925_21134[(1)] = (70));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (84))){
var inst_19364 = (state_19720[(2)]);
var inst_19365 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_19366 = true;
var inst_19367 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can update vote twice",inst_19366,inst_19364];
var inst_19368 = cljs.core.PersistentHashMap.fromArrays(inst_19365,inst_19367);
var inst_19369 = cljs.test.do_report.call(null,inst_19368);
var state_19720__$1 = state_19720;
var statearr_19926_21135 = state_19720__$1;
(statearr_19926_21135[(2)] = inst_19369);

(statearr_19926_21135[(1)] = (83));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (116))){
var inst_19573 = (state_19720[(2)]);
var inst_19574 = Promise.resolve((42));
var inst_19575 = eos_cljs.core.wait_block.call(null,inst_19574,(2));
var inst_19576 = cljs.core.async.interop.p__GT_c.call(null,inst_19575);
var state_19720__$1 = (function (){var statearr_19927 = state_19720;
(statearr_19927[(46)] = inst_19573);

return statearr_19927;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19720__$1,(122),inst_19576);
} else {
if((state_val_19721 === (148))){
var inst_19633 = (state_19720[(34)]);
var inst_19653 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_19654 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_19655 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"needs latest terms accepted",inst_19654,inst_19633];
var inst_19656 = cljs.core.PersistentHashMap.fromArrays(inst_19653,inst_19655);
var inst_19657 = cljs.test.do_report.call(null,inst_19656);
var state_19720__$1 = state_19720;
var statearr_19928_21136 = state_19720__$1;
(statearr_19928_21136[(2)] = inst_19657);

(statearr_19928_21136[(1)] = (150));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (21))){
var inst_19128 = (state_19720[(44)]);
var inst_19135 = (function(){throw inst_19128})();
var state_19720__$1 = state_19720;
var statearr_19930_21137 = state_19720__$1;
(statearr_19930_21137[(2)] = inst_19135);

(statearr_19930_21137[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (53))){
var inst_19249 = (state_19720[(2)]);
var inst_19250 = cljs.core.prn.call(null,"test failed with ",inst_19249);
var state_19720__$1 = (function (){var statearr_19931 = state_19720;
(statearr_19931[(47)] = inst_19250);

return statearr_19931;
})();
var statearr_19932_21138 = state_19720__$1;
(statearr_19932_21138[(2)] = null);

(statearr_19932_21138[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (85))){
var _ = (function (){var statearr_19933 = state_19720;
(statearr_19933[(4)] = cljs.core.rest.call(null,(state_19720[(4)])));

return statearr_19933;
})();
var state_19720__$1 = state_19720;
var ex19929 = (state_19720__$1[(2)]);
var statearr_19934_21139 = state_19720__$1;
(statearr_19934_21139[(5)] = ex19929);


var statearr_19935_21140 = state_19720__$1;
(statearr_19935_21140[(1)] = (84));

(statearr_19935_21140[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (117))){
var inst_19533 = (state_19720[(2)]);
var inst_19534 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_19535 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",(-1965644065),null),new cljs.core.Symbol(null,"r","r",(1169147337),null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["vote_counts",(2),"value"], null)),(5));
var inst_19536 = [new cljs.core.Keyword(null,"error","error",(-978969032)),null,inst_19535,inst_19533];
var inst_19537 = cljs.core.PersistentHashMap.fromArrays(inst_19534,inst_19536);
var inst_19538 = cljs.test.do_report.call(null,inst_19537);
var state_19720__$1 = state_19720;
var statearr_19936_21141 = state_19720__$1;
(statearr_19936_21141[(2)] = inst_19538);

(statearr_19936_21141[(1)] = (116));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (149))){
var inst_19633 = (state_19720[(34)]);
var inst_19659 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_19660 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_19661 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"needs latest terms accepted",inst_19660,inst_19633];
var inst_19662 = cljs.core.PersistentHashMap.fromArrays(inst_19659,inst_19661);
var inst_19663 = cljs.test.do_report.call(null,inst_19662);
var state_19720__$1 = state_19720;
var statearr_19937_21142 = state_19720__$1;
(statearr_19937_21142[(2)] = inst_19663);

(statearr_19937_21142[(1)] = (150));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (22))){
var inst_19128 = (state_19720[(44)]);
var state_19720__$1 = state_19720;
var statearr_19938_21143 = state_19720__$1;
(statearr_19938_21143[(2)] = inst_19128);

(statearr_19938_21143[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (54))){
var _ = (function (){var statearr_19940 = state_19720;
(statearr_19940[(4)] = cljs.core.cons.call(null,(57),(state_19720[(4)])));

return statearr_19940;
})();
var inst_19262 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_19263 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can update vote"];
var inst_19264 = cljs.core.PersistentHashMap.fromArrays(inst_19262,inst_19263);
var inst_19265 = cljs.test.do_report.call(null,inst_19264);
var ___$1 = (function (){var statearr_19941 = state_19720;
(statearr_19941[(4)] = cljs.core.rest.call(null,(state_19720[(4)])));

return statearr_19941;
})();
var state_19720__$1 = state_19720;
var statearr_19942_21144 = state_19720__$1;
(statearr_19942_21144[(2)] = inst_19265);

(statearr_19942_21144[(1)] = (55));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (86))){
var inst_19376 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_19377 = true;
var inst_19378 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"can update vote twice",inst_19377,true];
var inst_19379 = cljs.core.PersistentHashMap.fromArrays(inst_19376,inst_19378);
var inst_19380 = cljs.test.do_report.call(null,inst_19379);
var state_19720__$1 = state_19720;
var statearr_19943_21145 = state_19720__$1;
(statearr_19943_21145[(2)] = inst_19380);

(statearr_19943_21145[(1)] = (88));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (118))){
var _ = (function (){var statearr_19944 = state_19720;
(statearr_19944[(4)] = cljs.core.rest.call(null,(state_19720[(4)])));

return statearr_19944;
})();
var state_19720__$1 = state_19720;
var ex19939 = (state_19720__$1[(2)]);
var statearr_19945_21146 = state_19720__$1;
(statearr_19945_21146[(5)] = ex19939);


var statearr_19946_21147 = state_19720__$1;
(statearr_19946_21147[(1)] = (117));

(statearr_19946_21147[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (150))){
var inst_19633 = (state_19720[(34)]);
var inst_19665 = (state_19720[(2)]);
var _ = (function (){var statearr_19947 = state_19720;
(statearr_19947[(4)] = cljs.core.rest.call(null,(state_19720[(4)])));

return statearr_19947;
})();
var state_19720__$1 = (function (){var statearr_19948 = state_19720;
(statearr_19948[(48)] = inst_19665);

return statearr_19948;
})();
var statearr_19949_21148 = state_19720__$1;
(statearr_19949_21148[(2)] = inst_19633);

(statearr_19949_21148[(1)] = (145));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (23))){
var inst_19138 = (state_19720[(2)]);
var state_19720__$1 = (function (){var statearr_19950 = state_19720;
(statearr_19950[(49)] = inst_19138);

return statearr_19950;
})();
var statearr_19951_21149 = state_19720__$1;
(statearr_19951_21149[(2)] = null);

(statearr_19951_21149[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (55))){
var inst_19268 = (state_19720[(2)]);
var state_19720__$1 = state_19720;
var statearr_19952_21150 = state_19720__$1;
(statearr_19952_21150[(2)] = inst_19268);

(statearr_19952_21150[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (87))){
var inst_19382 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_19383 = true;
var inst_19384 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can update vote twice",inst_19383,true];
var inst_19385 = cljs.core.PersistentHashMap.fromArrays(inst_19382,inst_19384);
var inst_19386 = cljs.test.do_report.call(null,inst_19385);
var state_19720__$1 = state_19720;
var statearr_19954_21151 = state_19720__$1;
(statearr_19954_21151[(2)] = inst_19386);

(statearr_19954_21151[(1)] = (88));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (119))){
var inst_19549 = (state_19720[(42)]);
var inst_19552 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_19553 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",(-1965644065),null),new cljs.core.Symbol(null,"r","r",(1169147337),null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["vote_counts",(2),"value"], null)),(5));
var inst_19554 = cljs.core.cons.call(null,cljs.core._EQ_,inst_19549);
var inst_19555 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),null,inst_19553,inst_19554];
var inst_19556 = cljs.core.PersistentHashMap.fromArrays(inst_19552,inst_19555);
var inst_19557 = cljs.test.do_report.call(null,inst_19556);
var state_19720__$1 = state_19720;
var statearr_19955_21152 = state_19720__$1;
(statearr_19955_21152[(2)] = inst_19557);

(statearr_19955_21152[(1)] = (121));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (151))){
var _ = (function (){var statearr_19956 = state_19720;
(statearr_19956[(4)] = cljs.core.rest.call(null,(state_19720[(4)])));

return statearr_19956;
})();
var state_19720__$1 = state_19720;
var ex19953 = (state_19720__$1[(2)]);
var statearr_19957_21153 = state_19720__$1;
(statearr_19957_21153[(5)] = ex19953);


if((ex19953 instanceof Error)){
var statearr_19958_21154 = state_19720__$1;
(statearr_19958_21154[(1)] = (140));

(statearr_19958_21154[(5)] = null);

} else {
throw ex19953;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (24))){
var _ = (function (){var statearr_19959 = state_19720;
(statearr_19959[(4)] = cljs.core.cons.call(null,(27),(state_19720[(4)])));

return statearr_19959;
})();
var inst_19150 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_19151 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can vote on own proposal"];
var inst_19152 = cljs.core.PersistentHashMap.fromArrays(inst_19150,inst_19151);
var inst_19153 = cljs.test.do_report.call(null,inst_19152);
var ___$1 = (function (){var statearr_19960 = state_19720;
(statearr_19960[(4)] = cljs.core.rest.call(null,(state_19720[(4)])));

return statearr_19960;
})();
var state_19720__$1 = state_19720;
var statearr_19961_21155 = state_19720__$1;
(statearr_19961_21155[(2)] = inst_19153);

(statearr_19961_21155[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (56))){
var inst_19251 = (state_19720[(2)]);
var inst_19252 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_19253 = null;
var inst_19254 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can update vote",inst_19253,inst_19251];
var inst_19255 = cljs.core.PersistentHashMap.fromArrays(inst_19252,inst_19254);
var inst_19256 = cljs.test.do_report.call(null,inst_19255);
var state_19720__$1 = state_19720;
var statearr_19962_21156 = state_19720__$1;
(statearr_19962_21156[(2)] = inst_19256);

(statearr_19962_21156[(1)] = (55));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (88))){
var inst_19388 = (state_19720[(2)]);
var _ = (function (){var statearr_19963 = state_19720;
(statearr_19963[(4)] = cljs.core.rest.call(null,(state_19720[(4)])));

return statearr_19963;
})();
var state_19720__$1 = (function (){var statearr_19964 = state_19720;
(statearr_19964[(50)] = inst_19388);

return statearr_19964;
})();
var statearr_19965_21157 = state_19720__$1;
(statearr_19965_21157[(2)] = true);

(statearr_19965_21157[(1)] = (83));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (120))){
var inst_19549 = (state_19720[(42)]);
var inst_19559 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_19560 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",(-1965644065),null),new cljs.core.Symbol(null,"r","r",(1169147337),null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["vote_counts",(2),"value"], null)),(5));
var inst_19561 = new cljs.core.Symbol(null,"not","not",(1044554643),null);
var inst_19562 = new cljs.core.Symbol(null,"=","=",(-1501502141),null);
var inst_19563 = cljs.core.cons.call(null,inst_19562,inst_19549);
var inst_19564 = (new cljs.core.List(null,inst_19563,null,(1),null));
var inst_19565 = (new cljs.core.List(null,inst_19561,inst_19564,(2),null));
var inst_19566 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),null,inst_19560,inst_19565];
var inst_19567 = cljs.core.PersistentHashMap.fromArrays(inst_19559,inst_19566);
var inst_19568 = cljs.test.do_report.call(null,inst_19567);
var state_19720__$1 = state_19720;
var statearr_19966_21158 = state_19720__$1;
(statearr_19966_21158[(2)] = inst_19568);

(statearr_19966_21158[(1)] = (121));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (152))){
var inst_19680 = (state_19720[(51)]);
var inst_19680__$1 = (state_19720[(2)]);
var inst_19681 = (inst_19680__$1 instanceof cljs.core.ExceptionInfo);
var inst_19682 = cljs.core.ex_data.call(null,inst_19680__$1);
var inst_19683 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_19682);
var inst_19684 = cljs.core._EQ_.call(null,inst_19683,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_19685 = ((inst_19681) && (inst_19684));
var state_19720__$1 = (function (){var statearr_19968 = state_19720;
(statearr_19968[(51)] = inst_19680__$1);

return statearr_19968;
})();
if(cljs.core.truth_(inst_19685)){
var statearr_19969_21159 = state_19720__$1;
(statearr_19969_21159[(1)] = (153));

} else {
var statearr_19970_21160 = state_19720__$1;
(statearr_19970_21160[(1)] = (154));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (25))){
var inst_19156 = (state_19720[(2)]);
var _ = (function (){var statearr_19971 = state_19720;
(statearr_19971[(4)] = cljs.core.rest.call(null,(state_19720[(4)])));

return statearr_19971;
})();
var state_19720__$1 = state_19720;
var statearr_19972_21161 = state_19720__$1;
(statearr_19972_21161[(2)] = inst_19156);

(statearr_19972_21161[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (57))){
var _ = (function (){var statearr_19973 = state_19720;
(statearr_19973[(4)] = cljs.core.rest.call(null,(state_19720[(4)])));

return statearr_19973;
})();
var state_19720__$1 = state_19720;
var ex19967 = (state_19720__$1[(2)]);
var statearr_19974_21162 = state_19720__$1;
(statearr_19974_21162[(5)] = ex19967);


var statearr_19975_21163 = state_19720__$1;
(statearr_19975_21163[(1)] = (56));

(statearr_19975_21163[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (89))){
var inst_19399 = (state_19720[(52)]);
var inst_19399__$1 = (state_19720[(2)]);
var inst_19400 = (inst_19399__$1 instanceof cljs.core.ExceptionInfo);
var inst_19401 = cljs.core.ex_data.call(null,inst_19399__$1);
var inst_19402 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_19401);
var inst_19403 = cljs.core._EQ_.call(null,inst_19402,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_19404 = ((inst_19400) && (inst_19403));
var state_19720__$1 = (function (){var statearr_19976 = state_19720;
(statearr_19976[(52)] = inst_19399__$1);

return statearr_19976;
})();
if(cljs.core.truth_(inst_19404)){
var statearr_19977_21164 = state_19720__$1;
(statearr_19977_21164[(1)] = (90));

} else {
var statearr_19978_21165 = state_19720__$1;
(statearr_19978_21165[(1)] = (91));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (121))){
var inst_19550 = (state_19720[(43)]);
var inst_19570 = (state_19720[(2)]);
var _ = (function (){var statearr_19979 = state_19720;
(statearr_19979[(4)] = cljs.core.rest.call(null,(state_19720[(4)])));

return statearr_19979;
})();
var state_19720__$1 = (function (){var statearr_19980 = state_19720;
(statearr_19980[(53)] = inst_19570);

return statearr_19980;
})();
var statearr_19981_21166 = state_19720__$1;
(statearr_19981_21166[(2)] = inst_19550);

(statearr_19981_21166[(1)] = (116));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (153))){
var inst_19680 = (state_19720[(51)]);
var inst_19687 = (function(){throw inst_19680})();
var state_19720__$1 = state_19720;
var statearr_19983_21167 = state_19720__$1;
(statearr_19983_21167[(2)] = inst_19687);

(statearr_19983_21167[(1)] = (155));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (26))){
var inst_19139 = (state_19720[(2)]);
var inst_19140 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_19141 = null;
var inst_19142 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can vote on own proposal",inst_19141,inst_19139];
var inst_19143 = cljs.core.PersistentHashMap.fromArrays(inst_19140,inst_19142);
var inst_19144 = cljs.test.do_report.call(null,inst_19143);
var state_19720__$1 = state_19720;
var statearr_19984_21168 = state_19720__$1;
(statearr_19984_21168[(2)] = inst_19144);

(statearr_19984_21168[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (58))){
var _ = (function (){var statearr_19985 = state_19720;
(statearr_19985[(4)] = cljs.core.rest.call(null,(state_19720[(4)])));

return statearr_19985;
})();
var state_19720__$1 = state_19720;
var ex19982 = (state_19720__$1[(2)]);
var statearr_19986_21169 = state_19720__$1;
(statearr_19986_21169[(5)] = ex19982);


if((ex19982 instanceof Error)){
var statearr_19987_21170 = state_19720__$1;
(statearr_19987_21170[(1)] = (53));

(statearr_19987_21170[(5)] = null);

} else {
throw ex19982;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (90))){
var inst_19399 = (state_19720[(52)]);
var inst_19406 = (function(){throw inst_19399})();
var state_19720__$1 = state_19720;
var statearr_19988_21171 = state_19720__$1;
(statearr_19988_21171[(2)] = inst_19406);

(statearr_19988_21171[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (122))){
var inst_19578 = (state_19720[(54)]);
var inst_19578__$1 = (state_19720[(2)]);
var inst_19579 = (inst_19578__$1 instanceof cljs.core.ExceptionInfo);
var inst_19580 = cljs.core.ex_data.call(null,inst_19578__$1);
var inst_19581 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_19580);
var inst_19582 = cljs.core._EQ_.call(null,inst_19581,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_19583 = ((inst_19579) && (inst_19582));
var state_19720__$1 = (function (){var statearr_19990 = state_19720;
(statearr_19990[(54)] = inst_19578__$1);

return statearr_19990;
})();
if(cljs.core.truth_(inst_19583)){
var statearr_19991_21172 = state_19720__$1;
(statearr_19991_21172[(1)] = (123));

} else {
var statearr_19992_21173 = state_19720__$1;
(statearr_19992_21173[(1)] = (124));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (154))){
var inst_19680 = (state_19720[(51)]);
var state_19720__$1 = state_19720;
var statearr_19993_21174 = state_19720__$1;
(statearr_19993_21174[(2)] = inst_19680);

(statearr_19993_21174[(1)] = (155));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (27))){
var _ = (function (){var statearr_19994 = state_19720;
(statearr_19994[(4)] = cljs.core.rest.call(null,(state_19720[(4)])));

return statearr_19994;
})();
var state_19720__$1 = state_19720;
var ex19989 = (state_19720__$1[(2)]);
var statearr_19995_21175 = state_19720__$1;
(statearr_19995_21175[(5)] = ex19989);


var statearr_19996_21176 = state_19720__$1;
(statearr_19996_21176[(1)] = (26));

(statearr_19996_21176[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (59))){
var inst_19280 = (state_19720[(55)]);
var inst_19280__$1 = (state_19720[(2)]);
var inst_19281 = (inst_19280__$1 instanceof cljs.core.ExceptionInfo);
var inst_19282 = cljs.core.ex_data.call(null,inst_19280__$1);
var inst_19283 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_19282);
var inst_19284 = cljs.core._EQ_.call(null,inst_19283,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_19285 = ((inst_19281) && (inst_19284));
var state_19720__$1 = (function (){var statearr_19997 = state_19720;
(statearr_19997[(55)] = inst_19280__$1);

return statearr_19997;
})();
if(cljs.core.truth_(inst_19285)){
var statearr_19998_21177 = state_19720__$1;
(statearr_19998_21177[(1)] = (60));

} else {
var statearr_19999_21178 = state_19720__$1;
(statearr_19999_21178[(1)] = (61));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (91))){
var inst_19399 = (state_19720[(52)]);
var state_19720__$1 = state_19720;
var statearr_20000_21179 = state_19720__$1;
(statearr_20000_21179[(2)] = inst_19399);

(statearr_20000_21179[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (123))){
var inst_19578 = (state_19720[(54)]);
var inst_19585 = (function(){throw inst_19578})();
var state_19720__$1 = state_19720;
var statearr_20001_21180 = state_19720__$1;
(statearr_20001_21180[(2)] = inst_19585);

(statearr_20001_21180[(1)] = (125));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (155))){
var inst_19690 = (state_19720[(2)]);
var state_19720__$1 = (function (){var statearr_20002 = state_19720;
(statearr_20002[(56)] = inst_19690);

return statearr_20002;
})();
var statearr_20003_21181 = state_19720__$1;
(statearr_20003_21181[(2)] = null);

(statearr_20003_21181[(1)] = (156));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (28))){
var inst_19165 = (state_19720[(57)]);
var inst_19165__$1 = (state_19720[(2)]);
var inst_19166 = (inst_19165__$1 instanceof cljs.core.ExceptionInfo);
var inst_19167 = cljs.core.ex_data.call(null,inst_19165__$1);
var inst_19168 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_19167);
var inst_19169 = cljs.core._EQ_.call(null,inst_19168,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_19170 = ((inst_19166) && (inst_19169));
var state_19720__$1 = (function (){var statearr_20004 = state_19720;
(statearr_20004[(57)] = inst_19165__$1);

return statearr_20004;
})();
if(cljs.core.truth_(inst_19170)){
var statearr_20005_21182 = state_19720__$1;
(statearr_20005_21182[(1)] = (29));

} else {
var statearr_20006_21183 = state_19720__$1;
(statearr_20006_21183[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (60))){
var inst_19280 = (state_19720[(55)]);
var inst_19287 = (function(){throw inst_19280})();
var state_19720__$1 = state_19720;
var statearr_20007_21184 = state_19720__$1;
(statearr_20007_21184[(2)] = inst_19287);

(statearr_20007_21184[(1)] = (62));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (92))){
var inst_19409 = (state_19720[(2)]);
var inst_19410 = [new cljs.core.Keyword(null,"voter","voter",(1012094707)),new cljs.core.Keyword(null,"prop_id","prop_id",(-694455661)),new cljs.core.Keyword(null,"vote_type","vote_type",(-293333277))];
var inst_19411 = [e2e.proposals.token_acc,(0),(1)];
var inst_19412 = cljs.core.PersistentHashMap.fromArrays(inst_19410,inst_19411);
var inst_19413 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19414 = [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),new cljs.core.Keyword(null,"permission","permission",(-511292572))];
var inst_19415 = [e2e.proposals.token_acc,"active"];
var inst_19416 = cljs.core.PersistentHashMap.fromArrays(inst_19414,inst_19415);
var inst_19417 = [inst_19416];
var inst_19418 = (new cljs.core.PersistentVector(null,(1),(5),inst_19413,inst_19417,null));
var inst_19419 = eos_cljs.core.transact.call(null,e2e.proposals.prop_acc,"addvote",inst_19412,inst_19418);
var inst_19420 = cljs.core.async.interop.p__GT_c.call(null,inst_19419);
var state_19720__$1 = (function (){var statearr_20008 = state_19720;
(statearr_20008[(58)] = inst_19409);

return statearr_20008;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19720__$1,(93),inst_19420);
} else {
if((state_val_19721 === (124))){
var inst_19578 = (state_19720[(54)]);
var state_19720__$1 = state_19720;
var statearr_20009_21185 = state_19720__$1;
(statearr_20009_21185[(2)] = inst_19578);

(statearr_20009_21185[(1)] = (125));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (156))){
var _ = (function (){var statearr_20010 = state_19720;
(statearr_20010[(4)] = cljs.core.cons.call(null,(159),(state_19720[(4)])));

return statearr_20010;
})();
var inst_19702 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_19703 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"needs latest terms accepted"];
var inst_19704 = cljs.core.PersistentHashMap.fromArrays(inst_19702,inst_19703);
var inst_19705 = cljs.test.do_report.call(null,inst_19704);
var ___$1 = (function (){var statearr_20011 = state_19720;
(statearr_20011[(4)] = cljs.core.rest.call(null,(state_19720[(4)])));

return statearr_20011;
})();
var state_19720__$1 = state_19720;
var statearr_20012_21186 = state_19720__$1;
(statearr_20012_21186[(2)] = inst_19705);

(statearr_20012_21186[(1)] = (157));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (29))){
var inst_19165 = (state_19720[(57)]);
var inst_19172 = (function(){throw inst_19165})();
var state_19720__$1 = state_19720;
var statearr_20013_21187 = state_19720__$1;
(statearr_20013_21187[(2)] = inst_19172);

(statearr_20013_21187[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (61))){
var inst_19280 = (state_19720[(55)]);
var state_19720__$1 = state_19720;
var statearr_20014_21188 = state_19720__$1;
(statearr_20014_21188[(2)] = inst_19280);

(statearr_20014_21188[(1)] = (62));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (93))){
var inst_19422 = (state_19720[(59)]);
var inst_19422__$1 = (state_19720[(2)]);
var inst_19423 = (inst_19422__$1 instanceof cljs.core.ExceptionInfo);
var inst_19424 = cljs.core.ex_data.call(null,inst_19422__$1);
var inst_19425 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_19424);
var inst_19426 = cljs.core._EQ_.call(null,inst_19425,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_19427 = ((inst_19423) && (inst_19426));
var state_19720__$1 = (function (){var statearr_20015 = state_19720;
(statearr_20015[(59)] = inst_19422__$1);

return statearr_20015;
})();
if(cljs.core.truth_(inst_19427)){
var statearr_20016_21189 = state_19720__$1;
(statearr_20016_21189[(1)] = (94));

} else {
var statearr_20017_21190 = state_19720__$1;
(statearr_20017_21190[(1)] = (95));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (125))){
var inst_19588 = (state_19720[(2)]);
var inst_19589 = [new cljs.core.Keyword(null,"voter","voter",(1012094707)),new cljs.core.Keyword(null,"prop_id","prop_id",(-694455661)),new cljs.core.Keyword(null,"vote_type","vote_type",(-293333277))];
var inst_19590 = [e2e.proposals.owner_acc,(1),(1)];
var inst_19591 = cljs.core.PersistentHashMap.fromArrays(inst_19589,inst_19590);
var inst_19592 = e2e.proposals.eos_tx_owner.call(null,e2e.proposals.prop_acc,"addvote",inst_19591);
var inst_19593 = cljs.core.async.interop.p__GT_c.call(null,inst_19592);
var state_19720__$1 = (function (){var statearr_20018 = state_19720;
(statearr_20018[(60)] = inst_19588);

return statearr_20018;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19720__$1,(126),inst_19593);
} else {
if((state_val_19721 === (157))){
var inst_19708 = (state_19720[(2)]);
var _ = (function (){var statearr_20019 = state_19720;
(statearr_20019[(4)] = cljs.core.rest.call(null,(state_19720[(4)])));

return statearr_20019;
})();
var state_19720__$1 = state_19720;
var statearr_20020_21191 = state_19720__$1;
(statearr_20020_21191[(2)] = inst_19708);

(statearr_20020_21191[(1)] = (139));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (30))){
var inst_19165 = (state_19720[(57)]);
var state_19720__$1 = state_19720;
var statearr_20021_21192 = state_19720__$1;
(statearr_20021_21192[(2)] = inst_19165);

(statearr_20021_21192[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (62))){
var inst_19290 = (state_19720[(2)]);
var state_19720__$1 = (function (){var statearr_20022 = state_19720;
(statearr_20022[(61)] = inst_19290);

return statearr_20022;
})();
var statearr_20023_21193 = state_19720__$1;
(statearr_20023_21193[(2)] = null);

(statearr_20023_21193[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (94))){
var inst_19422 = (state_19720[(59)]);
var inst_19429 = (function(){throw inst_19422})();
var state_19720__$1 = state_19720;
var statearr_20024_21194 = state_19720__$1;
(statearr_20024_21194[(2)] = inst_19429);

(statearr_20024_21194[(1)] = (96));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (126))){
var inst_19595 = (state_19720[(8)]);
var inst_19595__$1 = (state_19720[(2)]);
var inst_19596 = (inst_19595__$1 instanceof cljs.core.ExceptionInfo);
var inst_19597 = cljs.core.ex_data.call(null,inst_19595__$1);
var inst_19598 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_19597);
var inst_19599 = cljs.core._EQ_.call(null,inst_19598,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_19600 = ((inst_19596) && (inst_19599));
var state_19720__$1 = (function (){var statearr_20025 = state_19720;
(statearr_20025[(8)] = inst_19595__$1);

return statearr_20025;
})();
if(cljs.core.truth_(inst_19600)){
var statearr_20026_21195 = state_19720__$1;
(statearr_20026_21195[(1)] = (127));

} else {
var statearr_20027_21196 = state_19720__$1;
(statearr_20027_21196[(1)] = (128));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (158))){
var inst_19691 = (state_19720[(2)]);
var inst_19692 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_19693 = null;
var inst_19694 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"needs latest terms accepted",inst_19693,inst_19691];
var inst_19695 = cljs.core.PersistentHashMap.fromArrays(inst_19692,inst_19694);
var inst_19696 = cljs.test.do_report.call(null,inst_19695);
var state_19720__$1 = state_19720;
var statearr_20028_21197 = state_19720__$1;
(statearr_20028_21197[(2)] = inst_19696);

(statearr_20028_21197[(1)] = (157));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (31))){
var inst_19175 = (state_19720[(2)]);
var state_19720__$1 = (function (){var statearr_20029 = state_19720;
(statearr_20029[(62)] = inst_19175);

return statearr_20029;
})();
var statearr_20030_21198 = state_19720__$1;
(statearr_20030_21198[(2)] = null);

(statearr_20030_21198[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (63))){
var _ = (function (){var statearr_20031 = state_19720;
(statearr_20031[(4)] = cljs.core.cons.call(null,(66),(state_19720[(4)])));

return statearr_20031;
})();
var state_19720__$1 = state_19720;
var statearr_20032_21199 = state_19720__$1;
(statearr_20032_21199[(1)] = (67));



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (95))){
var inst_19422 = (state_19720[(59)]);
var state_19720__$1 = state_19720;
var statearr_20035_21200 = state_19720__$1;
(statearr_20035_21200[(2)] = inst_19422);

(statearr_20035_21200[(1)] = (96));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (127))){
var inst_19595 = (state_19720[(8)]);
var inst_19602 = (function(){throw inst_19595})();
var state_19720__$1 = state_19720;
var statearr_20036_21201 = state_19720__$1;
(statearr_20036_21201[(2)] = inst_19602);

(statearr_20036_21201[(1)] = (129));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_19721 === (159))){
var _ = (function (){var statearr_20037 = state_19720;
(statearr_20037[(4)] = cljs.core.rest.call(null,(state_19720[(4)])));

return statearr_20037;
})();
var state_19720__$1 = state_19720;
var ex20034 = (state_19720__$1[(2)]);
var statearr_20038_21202 = state_19720__$1;
(statearr_20038_21202[(5)] = ex20034);


var statearr_20039_21203 = state_19720__$1;
(statearr_20039_21203[(1)] = (158));

(statearr_20039_21203[(5)] = null);



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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
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
var e2e$proposals$state_machine__15__auto__ = null;
var e2e$proposals$state_machine__15__auto____0 = (function (){
var statearr_20040 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20040[(0)] = e2e$proposals$state_machine__15__auto__);

(statearr_20040[(1)] = (1));

return statearr_20040;
});
var e2e$proposals$state_machine__15__auto____1 = (function (state_19720){
while(true){
var ret_value__16__auto__ = (function (){try{while(true){
var result__17__auto__ = switch__14__auto__.call(null,state_19720);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__17__auto__;
}
break;
}
}catch (e20041){var ex__18__auto__ = e20041;
var statearr_20042_21204 = state_19720;
(statearr_20042_21204[(2)] = ex__18__auto__);


if(cljs.core.seq.call(null,(state_19720[(4)]))){
var statearr_20043_21205 = state_19720;
(statearr_20043_21205[(1)] = cljs.core.first.call(null,(state_19720[(4)])));

} else {
throw ex__18__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__21206 = state_19720;
state_19720 = G__21206;
continue;
} else {
return ret_value__16__auto__;
}
break;
}
});
e2e$proposals$state_machine__15__auto__ = function(state_19720){
switch(arguments.length){
case 0:
return e2e$proposals$state_machine__15__auto____0.call(this);
case 1:
return e2e$proposals$state_machine__15__auto____1.call(this,state_19720);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
e2e$proposals$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$0 = e2e$proposals$state_machine__15__auto____0;
e2e$proposals$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$1 = e2e$proposals$state_machine__15__auto____1;
return e2e$proposals$state_machine__15__auto__;
})()
;})(switch__14__auto__,c__19__auto__,___192__auto__,self____$1))
})();
var state__21__auto__ = (function (){var statearr_20044 = f__20__auto__.call(null);
(statearr_20044[(6)] = c__19__auto__);

return statearr_20044;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21__auto__);
});})(c__19__auto__,___192__auto__,self____$1))
);

return c__19__auto__;
});

e2e.proposals.t_e2e$proposals19067.prototype.apply = (function (self__,args19070){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args19070)));
});

e2e.proposals.t_e2e$proposals19067.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___192__auto__ = this;
var c__19__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19__auto__,___192__auto__){
return (function (){
var f__20__auto__ = (function (){var switch__14__auto__ = ((function (c__19__auto__,___192__auto__){
return (function (state_20694){
var state_val_20695 = (state_20694[(1)]);
if((state_val_20695 === (32))){
var _ = (function (){var statearr_20696 = state_20694;
(statearr_20696[(4)] = cljs.core.cons.call(null,(39),(state_20694[(4)])));

return statearr_20696;
})();
var inst_20175 = [new cljs.core.Keyword(null,"voter","voter",(1012094707)),new cljs.core.Keyword(null,"prop_id","prop_id",(-694455661)),new cljs.core.Keyword(null,"vote_type","vote_type",(-293333277))];
var inst_20176 = [e2e.proposals.owner_acc,(0),(0)];
var inst_20177 = cljs.core.PersistentHashMap.fromArrays(inst_20175,inst_20176);
var inst_20178 = e2e.proposals.eos_tx_owner.call(null,e2e.proposals.prop_acc,"addvote",inst_20177);
var inst_20179 = cljs.core.async.interop.p__GT_c.call(null,inst_20178);
var state_20694__$1 = state_20694;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20694__$1,(40),inst_20179);
} else {
if((state_val_20695 === (64))){
var inst_20292 = (state_20694[(2)]);
var _ = (function (){var statearr_20697 = state_20694;
(statearr_20697[(4)] = cljs.core.rest.call(null,(state_20694[(4)])));

return statearr_20697;
})();
var state_20694__$1 = state_20694;
var statearr_20698_21207 = state_20694__$1;
(statearr_20698_21207[(2)] = inst_20292);

(statearr_20698_21207[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (96))){
var inst_20406 = (state_20694[(2)]);
var inst_20407 = eos_cljs.core.get_table_rows.call(null,e2e.proposals.prop_acc,e2e.proposals.prop_acc,"proposal");
var inst_20408 = cljs.core.async.interop.p__GT_c.call(null,inst_20407);
var state_20694__$1 = (function (){var statearr_20699 = state_20694;
(statearr_20699[(7)] = inst_20406);

return statearr_20699;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20694__$1,(97),inst_20408);
} else {
if((state_val_20695 === (128))){
var inst_20569 = (state_20694[(8)]);
var state_20694__$1 = state_20694;
var statearr_20700_21208 = state_20694__$1;
(statearr_20700_21208[(2)] = inst_20569);

(statearr_20700_21208[(1)] = (129));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (1))){
var state_20694__$1 = state_20694;
var statearr_20701_21209 = state_20694__$1;
(statearr_20701_21209[(2)] = null);

(statearr_20701_21209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (33))){
var inst_20222 = (state_20694[(2)]);
var state_20694__$1 = (function (){var statearr_20702 = state_20694;
(statearr_20702[(9)] = inst_20222);

return statearr_20702;
})();
var statearr_20703_21210 = state_20694__$1;
(statearr_20703_21210[(2)] = null);

(statearr_20703_21210[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (65))){
var inst_20265 = (state_20694[(2)]);
var inst_20266 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_20267 = true;
var inst_20268 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can update vote",inst_20267,inst_20265];
var inst_20269 = cljs.core.PersistentHashMap.fromArrays(inst_20266,inst_20268);
var inst_20270 = cljs.test.do_report.call(null,inst_20269);
var state_20694__$1 = state_20694;
var statearr_20704_21211 = state_20694__$1;
(statearr_20704_21211[(2)] = inst_20270);

(statearr_20704_21211[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (97))){
var inst_20410 = (state_20694[(10)]);
var inst_20410__$1 = (state_20694[(2)]);
var inst_20411 = (inst_20410__$1 instanceof cljs.core.ExceptionInfo);
var inst_20412 = cljs.core.ex_data.call(null,inst_20410__$1);
var inst_20413 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_20412);
var inst_20414 = cljs.core._EQ_.call(null,inst_20413,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_20415 = ((inst_20411) && (inst_20414));
var state_20694__$1 = (function (){var statearr_20705 = state_20694;
(statearr_20705[(10)] = inst_20410__$1);

return statearr_20705;
})();
if(cljs.core.truth_(inst_20415)){
var statearr_20706_21212 = state_20694__$1;
(statearr_20706_21212[(1)] = (98));

} else {
var statearr_20707_21213 = state_20694__$1;
(statearr_20707_21213[(1)] = (99));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (129))){
var inst_20579 = (state_20694[(2)]);
var state_20694__$1 = (function (){var statearr_20708 = state_20694;
(statearr_20708[(11)] = inst_20579);

return statearr_20708;
})();
var statearr_20709_21214 = state_20694__$1;
(statearr_20709_21214[(2)] = null);

(statearr_20709_21214[(1)] = (130));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (2))){
var _ = (function (){var statearr_20711 = state_20694;
(statearr_20711[(4)] = cljs.core.cons.call(null,(5),(state_20694[(4)])));

return statearr_20711;
})();
var state_20694__$1 = state_20694;
var statearr_20712_21215 = state_20694__$1;
(statearr_20712_21215[(2)] = null);

(statearr_20712_21215[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (34))){
var inst_20150 = (state_20694[(2)]);
var inst_20151 = cljs.core.prn.call(null,"test failed with ",inst_20150);
var state_20694__$1 = (function (){var statearr_20713 = state_20694;
(statearr_20713[(12)] = inst_20151);

return statearr_20713;
})();
var statearr_20714_21216 = state_20694__$1;
(statearr_20714_21216[(2)] = null);

(statearr_20714_21216[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (66))){
var _ = (function (){var statearr_20715 = state_20694;
(statearr_20715[(4)] = cljs.core.rest.call(null,(state_20694[(4)])));

return statearr_20715;
})();
var state_20694__$1 = state_20694;
var ex20710 = (state_20694__$1[(2)]);
var statearr_20716_21217 = state_20694__$1;
(statearr_20716_21217[(5)] = ex20710);


var statearr_20717_21218 = state_20694__$1;
(statearr_20717_21218[(1)] = (65));

(statearr_20717_21218[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (98))){
var inst_20410 = (state_20694[(10)]);
var inst_20417 = (function(){throw inst_20410})();
var state_20694__$1 = state_20694;
var statearr_20718_21219 = state_20694__$1;
(statearr_20718_21219[(2)] = inst_20417);

(statearr_20718_21219[(1)] = (100));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (130))){
var _ = (function (){var statearr_20719 = state_20694;
(statearr_20719[(4)] = cljs.core.cons.call(null,(133),(state_20694[(4)])));

return statearr_20719;
})();
var inst_20587 = [new cljs.core.Keyword(null,"hash","hash",(-13781596))];
var inst_20588 = ["ab58606332f813bcf6ea26f732014f49a2197d2d281cc2939e59813721ee5246"];
var inst_20589 = cljs.core.PersistentHashMap.fromArrays(inst_20587,inst_20588);
var inst_20590 = eos_cljs.core.transact.call(null,e2e.proposals.dao_acc,"newmemterms",inst_20589);
var inst_20591 = cljs.core.async.interop.p__GT_c.call(null,inst_20590);
var state_20694__$1 = state_20694;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20694__$1,(134),inst_20591);
} else {
if((state_val_20695 === (3))){
var inst_20691 = (state_20694[(2)]);
var inst_20692 = done.call(null);
var state_20694__$1 = (function (){var statearr_20720 = state_20694;
(statearr_20720[(13)] = inst_20691);

return statearr_20720;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20694__$1,inst_20692);
} else {
if((state_val_20695 === (35))){
var _ = (function (){var statearr_20721 = state_20694;
(statearr_20721[(4)] = cljs.core.cons.call(null,(38),(state_20694[(4)])));

return statearr_20721;
})();
var inst_20163 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_20164 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can vote on own proposal"];
var inst_20165 = cljs.core.PersistentHashMap.fromArrays(inst_20163,inst_20164);
var inst_20166 = cljs.test.do_report.call(null,inst_20165);
var ___$1 = (function (){var statearr_20722 = state_20694;
(statearr_20722[(4)] = cljs.core.rest.call(null,(state_20694[(4)])));

return statearr_20722;
})();
var state_20694__$1 = state_20694;
var statearr_20723_21220 = state_20694__$1;
(statearr_20723_21220[(2)] = inst_20166);

(statearr_20723_21220[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (67))){
var inst_20277 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_20278 = true;
var inst_20279 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"can update vote",inst_20278,true];
var inst_20280 = cljs.core.PersistentHashMap.fromArrays(inst_20277,inst_20279);
var inst_20281 = cljs.test.do_report.call(null,inst_20280);
var state_20694__$1 = state_20694;
var statearr_20724_21221 = state_20694__$1;
(statearr_20724_21221[(2)] = inst_20281);

(statearr_20724_21221[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (99))){
var inst_20410 = (state_20694[(10)]);
var state_20694__$1 = state_20694;
var statearr_20725_21222 = state_20694__$1;
(statearr_20725_21222[(2)] = inst_20410);

(statearr_20725_21222[(1)] = (100));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (131))){
var inst_20688 = (state_20694[(2)]);
var _ = (function (){var statearr_20726 = state_20694;
(statearr_20726[(4)] = cljs.core.rest.call(null,(state_20694[(4)])));

return statearr_20726;
})();
var state_20694__$1 = state_20694;
var statearr_20727_21223 = state_20694__$1;
(statearr_20727_21223[(2)] = inst_20688);

(statearr_20727_21223[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (4))){
var inst_20045 = (state_20694[(2)]);
var inst_20046 = cljs.core.prn.call(null,inst_20045);
var state_20694__$1 = state_20694;
var statearr_20728_21224 = state_20694__$1;
(statearr_20728_21224[(2)] = inst_20046);

(statearr_20728_21224[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (36))){
var inst_20169 = (state_20694[(2)]);
var state_20694__$1 = state_20694;
var statearr_20729_21225 = state_20694__$1;
(statearr_20729_21225[(2)] = inst_20169);

(statearr_20729_21225[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (68))){
var inst_20283 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_20284 = true;
var inst_20285 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can update vote",inst_20284,true];
var inst_20286 = cljs.core.PersistentHashMap.fromArrays(inst_20283,inst_20285);
var inst_20287 = cljs.test.do_report.call(null,inst_20286);
var state_20694__$1 = state_20694;
var statearr_20730_21226 = state_20694__$1;
(statearr_20730_21226[(2)] = inst_20287);

(statearr_20730_21226[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (100))){
var inst_20423 = (state_20694[(14)]);
var inst_20420 = (state_20694[(2)]);
var inst_20421 = (function (){var rows = inst_20420;
return ((function (rows,inst_20423,inst_20420,state_val_20695,c__19__auto__,___192__auto__){
return (function (p1__53_SHARP_){
return cljs.core._EQ_.call(null,p1__53_SHARP_.call(null,"id"),(0));
});
;})(rows,inst_20423,inst_20420,state_val_20695,c__19__auto__,___192__auto__))
})();
var inst_20422 = cljs.core.filter.call(null,inst_20421,inst_20420);
var inst_20423__$1 = cljs.core.first.call(null,inst_20422);
var inst_20424 = cljs.core.prn.call(null,inst_20423__$1);
var state_20694__$1 = (function (){var statearr_20732 = state_20694;
(statearr_20732[(14)] = inst_20423__$1);

(statearr_20732[(15)] = inst_20424);

return statearr_20732;
})();
var statearr_20733_21227 = state_20694__$1;
(statearr_20733_21227[(2)] = null);

(statearr_20733_21227[(1)] = (101));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (132))){
var inst_20580 = (state_20694[(2)]);
var inst_20581 = cljs.core.prn.call(null,inst_20580);
var state_20694__$1 = state_20694;
var statearr_20734_21228 = state_20694__$1;
(statearr_20734_21228[(2)] = inst_20581);

(statearr_20734_21228[(1)] = (131));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (5))){
var _ = (function (){var statearr_20735 = state_20694;
(statearr_20735[(4)] = cljs.core.rest.call(null,(state_20694[(4)])));

return statearr_20735;
})();
var state_20694__$1 = state_20694;
var ex20731 = (state_20694__$1[(2)]);
var statearr_20736_21229 = state_20694__$1;
(statearr_20736_21229[(5)] = ex20731);


if((ex20731 instanceof Error)){
var statearr_20737_21230 = state_20694__$1;
(statearr_20737_21230[(1)] = (4));

(statearr_20737_21230[(5)] = null);

} else {
throw ex20731;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (37))){
var inst_20152 = (state_20694[(2)]);
var inst_20153 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_20154 = null;
var inst_20155 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can vote on own proposal",inst_20154,inst_20152];
var inst_20156 = cljs.core.PersistentHashMap.fromArrays(inst_20153,inst_20155);
var inst_20157 = cljs.test.do_report.call(null,inst_20156);
var state_20694__$1 = state_20694;
var statearr_20738_21231 = state_20694__$1;
(statearr_20738_21231[(2)] = inst_20157);

(statearr_20738_21231[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (69))){
var inst_20289 = (state_20694[(2)]);
var _ = (function (){var statearr_20740 = state_20694;
(statearr_20740[(4)] = cljs.core.rest.call(null,(state_20694[(4)])));

return statearr_20740;
})();
var state_20694__$1 = (function (){var statearr_20741 = state_20694;
(statearr_20741[(16)] = inst_20289);

return statearr_20741;
})();
var statearr_20742_21232 = state_20694__$1;
(statearr_20742_21232[(2)] = true);

(statearr_20742_21232[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (101))){
var inst_20423 = (state_20694[(14)]);
var inst_20441 = (state_20694[(17)]);
var inst_20442 = (state_20694[(18)]);
var _ = (function (){var statearr_20743 = state_20694;
(statearr_20743[(4)] = cljs.core.cons.call(null,(104),(state_20694[(4)])));

return statearr_20743;
})();
var inst_20436 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20437 = ["vote_counts",(0),"value"];
var inst_20438 = (new cljs.core.PersistentVector(null,(3),(5),inst_20436,inst_20437,null));
var inst_20439 = cljs.core.get_in.call(null,inst_20423,inst_20438);
var inst_20440 = (new cljs.core.List(null,(0),null,(1),null));
var inst_20441__$1 = (new cljs.core.List(null,inst_20439,inst_20440,(2),null));
var inst_20442__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_20441__$1);
var state_20694__$1 = (function (){var statearr_20744 = state_20694;
(statearr_20744[(17)] = inst_20441__$1);

(statearr_20744[(18)] = inst_20442__$1);

return statearr_20744;
})();
if(cljs.core.truth_(inst_20442__$1)){
var statearr_20745_21233 = state_20694__$1;
(statearr_20745_21233[(1)] = (105));

} else {
var statearr_20746_21234 = state_20694__$1;
(statearr_20746_21234[(1)] = (106));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (133))){
var _ = (function (){var statearr_20748 = state_20694;
(statearr_20748[(4)] = cljs.core.rest.call(null,(state_20694[(4)])));

return statearr_20748;
})();
var state_20694__$1 = state_20694;
var ex20739 = (state_20694__$1[(2)]);
var statearr_20749_21235 = state_20694__$1;
(statearr_20749_21235[(5)] = ex20739);


if((ex20739 instanceof Error)){
var statearr_20750_21236 = state_20694__$1;
(statearr_20750_21236[(1)] = (132));

(statearr_20750_21236[(5)] = null);

} else {
throw ex20739;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (6))){
var _ = (function (){var statearr_20751 = state_20694;
(statearr_20751[(4)] = cljs.core.cons.call(null,(19),(state_20694[(4)])));

return statearr_20751;
})();
var inst_20096 = [new cljs.core.Keyword(null,"voter","voter",(1012094707)),new cljs.core.Keyword(null,"prop_id","prop_id",(-694455661)),new cljs.core.Keyword(null,"vote_type","vote_type",(-293333277))];
var inst_20097 = [e2e.proposals.owner_acc,(0),(0)];
var inst_20098 = cljs.core.PersistentHashMap.fromArrays(inst_20096,inst_20097);
var inst_20099 = e2e.proposals.eos_tx_owner.call(null,e2e.proposals.prop_acc,"addvote",inst_20098);
var inst_20100 = cljs.core.async.interop.p__GT_c.call(null,inst_20099);
var state_20694__$1 = state_20694;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20694__$1,(20),inst_20100);
} else {
if((state_val_20695 === (38))){
var _ = (function (){var statearr_20752 = state_20694;
(statearr_20752[(4)] = cljs.core.rest.call(null,(state_20694[(4)])));

return statearr_20752;
})();
var state_20694__$1 = state_20694;
var ex20747 = (state_20694__$1[(2)]);
var statearr_20753_21237 = state_20694__$1;
(statearr_20753_21237[(5)] = ex20747);


var statearr_20754_21238 = state_20694__$1;
(statearr_20754_21238[(1)] = (37));

(statearr_20754_21238[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (70))){
var _ = (function (){var statearr_20755 = state_20694;
(statearr_20755[(4)] = cljs.core.cons.call(null,(77),(state_20694[(4)])));

return statearr_20755;
})();
var inst_20321 = [new cljs.core.Keyword(null,"voter","voter",(1012094707)),new cljs.core.Keyword(null,"prop_id","prop_id",(-694455661)),new cljs.core.Keyword(null,"vote_type","vote_type",(-293333277))];
var inst_20322 = [e2e.proposals.owner_acc,(0),(2)];
var inst_20323 = cljs.core.PersistentHashMap.fromArrays(inst_20321,inst_20322);
var inst_20324 = e2e.proposals.eos_tx_owner.call(null,e2e.proposals.prop_acc,"addvote",inst_20323);
var inst_20325 = cljs.core.async.interop.p__GT_c.call(null,inst_20324);
var state_20694__$1 = state_20694;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20694__$1,(78),inst_20325);
} else {
if((state_val_20695 === (102))){
var inst_20465 = (state_20694[(2)]);
var state_20694__$1 = (function (){var statearr_20756 = state_20694;
(statearr_20756[(19)] = inst_20465);

return statearr_20756;
})();
var statearr_20757_21239 = state_20694__$1;
(statearr_20757_21239[(2)] = null);

(statearr_20757_21239[(1)] = (108));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (134))){
var inst_20593 = (state_20694[(20)]);
var inst_20593__$1 = (state_20694[(2)]);
var inst_20594 = (inst_20593__$1 instanceof cljs.core.ExceptionInfo);
var inst_20595 = cljs.core.ex_data.call(null,inst_20593__$1);
var inst_20596 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_20595);
var inst_20597 = cljs.core._EQ_.call(null,inst_20596,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_20598 = ((inst_20594) && (inst_20597));
var state_20694__$1 = (function (){var statearr_20759 = state_20694;
(statearr_20759[(20)] = inst_20593__$1);

return statearr_20759;
})();
if(cljs.core.truth_(inst_20598)){
var statearr_20760_21240 = state_20694__$1;
(statearr_20760_21240[(1)] = (135));

} else {
var statearr_20761_21241 = state_20694__$1;
(statearr_20761_21241[(1)] = (136));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (7))){
var inst_20133 = (state_20694[(2)]);
var inst_20134 = ((9000000) + (1));
var inst_20135 = cljs.core.assoc.call(null,e2e.proposals.prop_config,new cljs.core.Keyword(null,"cycle_duration_sec","cycle_duration_sec",(2139129571)),inst_20134,new cljs.core.Keyword(null,"cycle_voting_duration_sec","cycle_voting_duration_sec",(-1056353816)),(9000000));
var inst_20136 = eos_cljs.core.transact.call(null,e2e.proposals.prop_acc,"update",inst_20135);
var inst_20137 = cljs.core.async.interop.p__GT_c.call(null,inst_20136);
var state_20694__$1 = (function (){var statearr_20762 = state_20694;
(statearr_20762[(21)] = inst_20133);

return statearr_20762;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20694__$1,(28),inst_20137);
} else {
if((state_val_20695 === (39))){
var _ = (function (){var statearr_20763 = state_20694;
(statearr_20763[(4)] = cljs.core.rest.call(null,(state_20694[(4)])));

return statearr_20763;
})();
var state_20694__$1 = state_20694;
var ex20758 = (state_20694__$1[(2)]);
var statearr_20764_21242 = state_20694__$1;
(statearr_20764_21242[(5)] = ex20758);


if((ex20758 instanceof Error)){
var statearr_20765_21243 = state_20694__$1;
(statearr_20765_21243[(1)] = (34));

(statearr_20765_21243[(5)] = null);

} else {
throw ex20758;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (71))){
var inst_20368 = (state_20694[(2)]);
var inst_20369 = Promise.resolve((42));
var inst_20370 = eos_cljs.core.wait_block.call(null,inst_20369,(2));
var inst_20371 = cljs.core.async.interop.p__GT_c.call(null,inst_20370);
var state_20694__$1 = (function (){var statearr_20766 = state_20694;
(statearr_20766[(22)] = inst_20368);

return statearr_20766;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20694__$1,(89),inst_20371);
} else {
if((state_val_20695 === (103))){
var inst_20425 = (state_20694[(2)]);
var inst_20426 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_20427 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",(-1965644065),null),new cljs.core.Symbol(null,"r","r",(1169147337),null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["vote_counts",(0),"value"], null)),(0));
var inst_20428 = [new cljs.core.Keyword(null,"error","error",(-978969032)),null,inst_20427,inst_20425];
var inst_20429 = cljs.core.PersistentHashMap.fromArrays(inst_20426,inst_20428);
var inst_20430 = cljs.test.do_report.call(null,inst_20429);
var state_20694__$1 = state_20694;
var statearr_20767_21244 = state_20694__$1;
(statearr_20767_21244[(2)] = inst_20430);

(statearr_20767_21244[(1)] = (102));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (135))){
var inst_20593 = (state_20694[(20)]);
var inst_20600 = (function(){throw inst_20593})();
var state_20694__$1 = state_20694;
var statearr_20768_21245 = state_20694__$1;
(statearr_20768_21245[(2)] = inst_20600);

(statearr_20768_21245[(1)] = (137));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (8))){
var inst_20054 = (state_20694[(23)]);
var inst_20055 = (state_20694[(24)]);
var inst_20052 = (state_20694[(2)]);
var inst_20053 = inst_20052.cause;
var inst_20054__$1 = inst_20053.message;
var inst_20055__$1 = clojure.string.ends_with_QMARK_.call(null,inst_20054__$1,"not in voting period");
var inst_20056 = (!(inst_20055__$1));
var state_20694__$1 = (function (){var statearr_20769 = state_20694;
(statearr_20769[(23)] = inst_20054__$1);

(statearr_20769[(24)] = inst_20055__$1);

return statearr_20769;
})();
if(inst_20056){
var statearr_20770_21246 = state_20694__$1;
(statearr_20770_21246[(1)] = (9));

} else {
var statearr_20771_21247 = state_20694__$1;
(statearr_20771_21247[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (40))){
var inst_20181 = (state_20694[(25)]);
var inst_20181__$1 = (state_20694[(2)]);
var inst_20182 = (inst_20181__$1 instanceof cljs.core.ExceptionInfo);
var inst_20183 = cljs.core.ex_data.call(null,inst_20181__$1);
var inst_20184 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_20183);
var inst_20185 = cljs.core._EQ_.call(null,inst_20184,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_20186 = ((inst_20182) && (inst_20185));
var state_20694__$1 = (function (){var statearr_20773 = state_20694;
(statearr_20773[(25)] = inst_20181__$1);

return statearr_20773;
})();
if(cljs.core.truth_(inst_20186)){
var statearr_20774_21248 = state_20694__$1;
(statearr_20774_21248[(1)] = (41));

} else {
var statearr_20775_21249 = state_20694__$1;
(statearr_20775_21249[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (72))){
var inst_20296 = (state_20694[(2)]);
var inst_20297 = cljs.core.prn.call(null,"test failed with ",inst_20296);
var state_20694__$1 = (function (){var statearr_20776 = state_20694;
(statearr_20776[(26)] = inst_20297);

return statearr_20776;
})();
var statearr_20777_21250 = state_20694__$1;
(statearr_20777_21250[(2)] = null);

(statearr_20777_21250[(1)] = (73));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (104))){
var _ = (function (){var statearr_20778 = state_20694;
(statearr_20778[(4)] = cljs.core.rest.call(null,(state_20694[(4)])));

return statearr_20778;
})();
var state_20694__$1 = state_20694;
var ex20772 = (state_20694__$1[(2)]);
var statearr_20779_21251 = state_20694__$1;
(statearr_20779_21251[(5)] = ex20772);


var statearr_20780_21252 = state_20694__$1;
(statearr_20780_21252[(1)] = (103));

(statearr_20780_21252[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (136))){
var inst_20593 = (state_20694[(20)]);
var state_20694__$1 = state_20694;
var statearr_20781_21253 = state_20694__$1;
(statearr_20781_21253[(2)] = inst_20593);

(statearr_20781_21253[(1)] = (137));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (9))){
var inst_20054 = (state_20694[(23)]);
var inst_20058 = ["expected =","not in voting period"," actual = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_20054)].join('');
var inst_20059 = cljs.core.prn.call(null,inst_20058);
var state_20694__$1 = state_20694;
var statearr_20782_21254 = state_20694__$1;
(statearr_20782_21254[(2)] = inst_20059);

(statearr_20782_21254[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (41))){
var inst_20181 = (state_20694[(25)]);
var inst_20188 = (function(){throw inst_20181})();
var state_20694__$1 = state_20694;
var statearr_20783_21255 = state_20694__$1;
(statearr_20783_21255[(2)] = inst_20188);

(statearr_20783_21255[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (73))){
var _ = (function (){var statearr_20784 = state_20694;
(statearr_20784[(4)] = cljs.core.cons.call(null,(76),(state_20694[(4)])));

return statearr_20784;
})();
var inst_20309 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_20310 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can update vote twice"];
var inst_20311 = cljs.core.PersistentHashMap.fromArrays(inst_20309,inst_20310);
var inst_20312 = cljs.test.do_report.call(null,inst_20311);
var ___$1 = (function (){var statearr_20785 = state_20694;
(statearr_20785[(4)] = cljs.core.rest.call(null,(state_20694[(4)])));

return statearr_20785;
})();
var state_20694__$1 = state_20694;
var statearr_20786_21256 = state_20694__$1;
(statearr_20786_21256[(2)] = inst_20312);

(statearr_20786_21256[(1)] = (74));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (105))){
var inst_20441 = (state_20694[(17)]);
var inst_20444 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_20445 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",(-1965644065),null),new cljs.core.Symbol(null,"r","r",(1169147337),null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["vote_counts",(0),"value"], null)),(0));
var inst_20446 = cljs.core.cons.call(null,cljs.core._EQ_,inst_20441);
var inst_20447 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),null,inst_20445,inst_20446];
var inst_20448 = cljs.core.PersistentHashMap.fromArrays(inst_20444,inst_20447);
var inst_20449 = cljs.test.do_report.call(null,inst_20448);
var state_20694__$1 = state_20694;
var statearr_20787_21257 = state_20694__$1;
(statearr_20787_21257[(2)] = inst_20449);

(statearr_20787_21257[(1)] = (107));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (137))){
var inst_20603 = (state_20694[(2)]);
var state_20694__$1 = (function (){var statearr_20788 = state_20694;
(statearr_20788[(27)] = inst_20603);

return statearr_20788;
})();
var statearr_20789_21258 = state_20694__$1;
(statearr_20789_21258[(2)] = null);

(statearr_20789_21258[(1)] = (138));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (10))){
var state_20694__$1 = state_20694;
var statearr_20790_21259 = state_20694__$1;
(statearr_20790_21259[(2)] = null);

(statearr_20790_21259[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (42))){
var inst_20181 = (state_20694[(25)]);
var state_20694__$1 = state_20694;
var statearr_20791_21260 = state_20694__$1;
(statearr_20791_21260[(2)] = inst_20181);

(statearr_20791_21260[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (74))){
var inst_20315 = (state_20694[(2)]);
var state_20694__$1 = state_20694;
var statearr_20792_21261 = state_20694__$1;
(statearr_20792_21261[(2)] = inst_20315);

(statearr_20792_21261[(1)] = (71));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (106))){
var inst_20441 = (state_20694[(17)]);
var inst_20451 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_20452 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",(-1965644065),null),new cljs.core.Symbol(null,"r","r",(1169147337),null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["vote_counts",(0),"value"], null)),(0));
var inst_20453 = new cljs.core.Symbol(null,"not","not",(1044554643),null);
var inst_20454 = new cljs.core.Symbol(null,"=","=",(-1501502141),null);
var inst_20455 = cljs.core.cons.call(null,inst_20454,inst_20441);
var inst_20456 = (new cljs.core.List(null,inst_20455,null,(1),null));
var inst_20457 = (new cljs.core.List(null,inst_20453,inst_20456,(2),null));
var inst_20458 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),null,inst_20452,inst_20457];
var inst_20459 = cljs.core.PersistentHashMap.fromArrays(inst_20451,inst_20458);
var inst_20460 = cljs.test.do_report.call(null,inst_20459);
var state_20694__$1 = state_20694;
var statearr_20793_21262 = state_20694__$1;
(statearr_20793_21262[(2)] = inst_20460);

(statearr_20793_21262[(1)] = (107));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (138))){
var _ = (function (){var statearr_20794 = state_20694;
(statearr_20794[(4)] = cljs.core.cons.call(null,(151),(state_20694[(4)])));

return statearr_20794;
})();
var inst_20648 = [new cljs.core.Keyword(null,"voter","voter",(1012094707)),new cljs.core.Keyword(null,"prop_id","prop_id",(-694455661)),new cljs.core.Keyword(null,"vote_type","vote_type",(-293333277))];
var inst_20649 = [e2e.proposals.owner_acc,(1),(3)];
var inst_20650 = cljs.core.PersistentHashMap.fromArrays(inst_20648,inst_20649);
var inst_20651 = e2e.proposals.eos_tx_owner.call(null,e2e.proposals.prop_acc,"addvote",inst_20650);
var inst_20652 = cljs.core.async.interop.p__GT_c.call(null,inst_20651);
var state_20694__$1 = state_20694;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20694__$1,(152),inst_20652);
} else {
if((state_val_20695 === (11))){
var inst_20062 = (state_20694[(2)]);
var state_20694__$1 = (function (){var statearr_20795 = state_20694;
(statearr_20795[(28)] = inst_20062);

return statearr_20795;
})();
var statearr_20796_21263 = state_20694__$1;
(statearr_20796_21263[(2)] = null);

(statearr_20796_21263[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (43))){
var inst_20191 = (state_20694[(2)]);
var state_20694__$1 = (function (){var statearr_20797 = state_20694;
(statearr_20797[(29)] = inst_20191);

return statearr_20797;
})();
var statearr_20798_21264 = state_20694__$1;
(statearr_20798_21264[(2)] = null);

(statearr_20798_21264[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (75))){
var inst_20298 = (state_20694[(2)]);
var inst_20299 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_20300 = null;
var inst_20301 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can update vote twice",inst_20300,inst_20298];
var inst_20302 = cljs.core.PersistentHashMap.fromArrays(inst_20299,inst_20301);
var inst_20303 = cljs.test.do_report.call(null,inst_20302);
var state_20694__$1 = state_20694;
var statearr_20799_21265 = state_20694__$1;
(statearr_20799_21265[(2)] = inst_20303);

(statearr_20799_21265[(1)] = (74));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (107))){
var inst_20442 = (state_20694[(18)]);
var inst_20462 = (state_20694[(2)]);
var _ = (function (){var statearr_20800 = state_20694;
(statearr_20800[(4)] = cljs.core.rest.call(null,(state_20694[(4)])));

return statearr_20800;
})();
var state_20694__$1 = (function (){var statearr_20801 = state_20694;
(statearr_20801[(30)] = inst_20462);

return statearr_20801;
})();
var statearr_20802_21266 = state_20694__$1;
(statearr_20802_21266[(2)] = inst_20442);

(statearr_20802_21266[(1)] = (102));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (139))){
var inst_20685 = (state_20694[(2)]);
var _ = (function (){var statearr_20803 = state_20694;
(statearr_20803[(4)] = cljs.core.rest.call(null,(state_20694[(4)])));

return statearr_20803;
})();
var state_20694__$1 = state_20694;
var statearr_20804_21267 = state_20694__$1;
(statearr_20804_21267[(2)] = inst_20685);

(statearr_20804_21267[(1)] = (131));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (12))){
var inst_20055 = (state_20694[(24)]);
var _ = (function (){var statearr_20806 = state_20694;
(statearr_20806[(4)] = cljs.core.cons.call(null,(15),(state_20694[(4)])));

return statearr_20806;
})();
var state_20694__$1 = state_20694;
if(cljs.core.truth_(inst_20055)){
var statearr_20807_21268 = state_20694__$1;
(statearr_20807_21268[(1)] = (16));

} else {
var statearr_20808_21269 = state_20694__$1;
(statearr_20808_21269[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (44))){
var _ = (function (){var statearr_20809 = state_20694;
(statearr_20809[(4)] = cljs.core.cons.call(null,(47),(state_20694[(4)])));

return statearr_20809;
})();
var state_20694__$1 = state_20694;
var statearr_20810_21270 = state_20694__$1;
(statearr_20810_21270[(1)] = (48));



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (76))){
var _ = (function (){var statearr_20812 = state_20694;
(statearr_20812[(4)] = cljs.core.rest.call(null,(state_20694[(4)])));

return statearr_20812;
})();
var state_20694__$1 = state_20694;
var ex20805 = (state_20694__$1[(2)]);
var statearr_20813_21271 = state_20694__$1;
(statearr_20813_21271[(5)] = ex20805);


var statearr_20814_21272 = state_20694__$1;
(statearr_20814_21272[(1)] = (75));

(statearr_20814_21272[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (108))){
var inst_20423 = (state_20694[(14)]);
var inst_20482 = (state_20694[(31)]);
var inst_20483 = (state_20694[(32)]);
var _ = (function (){var statearr_20815 = state_20694;
(statearr_20815[(4)] = cljs.core.cons.call(null,(111),(state_20694[(4)])));

return statearr_20815;
})();
var inst_20477 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20478 = ["vote_counts",(1),"value"];
var inst_20479 = (new cljs.core.PersistentVector(null,(3),(5),inst_20477,inst_20478,null));
var inst_20480 = cljs.core.get_in.call(null,inst_20423,inst_20479);
var inst_20481 = (new cljs.core.List(null,(2),null,(1),null));
var inst_20482__$1 = (new cljs.core.List(null,inst_20480,inst_20481,(2),null));
var inst_20483__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_20482__$1);
var state_20694__$1 = (function (){var statearr_20816 = state_20694;
(statearr_20816[(31)] = inst_20482__$1);

(statearr_20816[(32)] = inst_20483__$1);

return statearr_20816;
})();
if(cljs.core.truth_(inst_20483__$1)){
var statearr_20817_21273 = state_20694__$1;
(statearr_20817_21273[(1)] = (112));

} else {
var statearr_20818_21274 = state_20694__$1;
(statearr_20818_21274[(1)] = (113));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (140))){
var inst_20606 = (state_20694[(33)]);
var inst_20607 = (state_20694[(34)]);
var inst_20604 = (state_20694[(2)]);
var inst_20605 = inst_20604.cause;
var inst_20606__$1 = inst_20605.message;
var inst_20607__$1 = clojure.string.ends_with_QMARK_.call(null,inst_20606__$1,"agreed terms are not the latest");
var inst_20608 = (!(inst_20607__$1));
var state_20694__$1 = (function (){var statearr_20819 = state_20694;
(statearr_20819[(33)] = inst_20606__$1);

(statearr_20819[(34)] = inst_20607__$1);

return statearr_20819;
})();
if(inst_20608){
var statearr_20820_21275 = state_20694__$1;
(statearr_20820_21275[(1)] = (141));

} else {
var statearr_20821_21276 = state_20694__$1;
(statearr_20821_21276[(1)] = (142));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (13))){
var inst_20090 = (state_20694[(2)]);
var state_20694__$1 = state_20694;
var statearr_20823_21277 = state_20694__$1;
(statearr_20823_21277[(2)] = inst_20090);

(statearr_20823_21277[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (45))){
var inst_20219 = (state_20694[(2)]);
var _ = (function (){var statearr_20824 = state_20694;
(statearr_20824[(4)] = cljs.core.rest.call(null,(state_20694[(4)])));

return statearr_20824;
})();
var state_20694__$1 = state_20694;
var statearr_20825_21278 = state_20694__$1;
(statearr_20825_21278[(2)] = inst_20219);

(statearr_20825_21278[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (77))){
var _ = (function (){var statearr_20826 = state_20694;
(statearr_20826[(4)] = cljs.core.rest.call(null,(state_20694[(4)])));

return statearr_20826;
})();
var state_20694__$1 = state_20694;
var ex20822 = (state_20694__$1[(2)]);
var statearr_20827_21279 = state_20694__$1;
(statearr_20827_21279[(5)] = ex20822);


if((ex20822 instanceof Error)){
var statearr_20828_21280 = state_20694__$1;
(statearr_20828_21280[(1)] = (72));

(statearr_20828_21280[(5)] = null);

} else {
throw ex20822;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (109))){
var inst_20506 = (state_20694[(2)]);
var state_20694__$1 = (function (){var statearr_20829 = state_20694;
(statearr_20829[(35)] = inst_20506);

return statearr_20829;
})();
var statearr_20830_21281 = state_20694__$1;
(statearr_20830_21281[(2)] = null);

(statearr_20830_21281[(1)] = (115));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (141))){
var inst_20606 = (state_20694[(33)]);
var inst_20610 = ["expected =","agreed terms are not the latest"," actual = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_20606)].join('');
var inst_20611 = cljs.core.prn.call(null,inst_20610);
var state_20694__$1 = state_20694;
var statearr_20831_21282 = state_20694__$1;
(statearr_20831_21282[(2)] = inst_20611);

(statearr_20831_21282[(1)] = (143));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (14))){
var inst_20063 = (state_20694[(2)]);
var inst_20064 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_20065 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_20066 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can vote on own proposal",inst_20065,inst_20063];
var inst_20067 = cljs.core.PersistentHashMap.fromArrays(inst_20064,inst_20066);
var inst_20068 = cljs.test.do_report.call(null,inst_20067);
var state_20694__$1 = state_20694;
var statearr_20832_21283 = state_20694__$1;
(statearr_20832_21283[(2)] = inst_20068);

(statearr_20832_21283[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (46))){
var inst_20192 = (state_20694[(2)]);
var inst_20193 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_20194 = true;
var inst_20195 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can vote on own proposal",inst_20194,inst_20192];
var inst_20196 = cljs.core.PersistentHashMap.fromArrays(inst_20193,inst_20195);
var inst_20197 = cljs.test.do_report.call(null,inst_20196);
var state_20694__$1 = state_20694;
var statearr_20833_21284 = state_20694__$1;
(statearr_20833_21284[(2)] = inst_20197);

(statearr_20833_21284[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (78))){
var inst_20327 = (state_20694[(36)]);
var inst_20327__$1 = (state_20694[(2)]);
var inst_20328 = (inst_20327__$1 instanceof cljs.core.ExceptionInfo);
var inst_20329 = cljs.core.ex_data.call(null,inst_20327__$1);
var inst_20330 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_20329);
var inst_20331 = cljs.core._EQ_.call(null,inst_20330,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_20332 = ((inst_20328) && (inst_20331));
var state_20694__$1 = (function (){var statearr_20834 = state_20694;
(statearr_20834[(36)] = inst_20327__$1);

return statearr_20834;
})();
if(cljs.core.truth_(inst_20332)){
var statearr_20835_21285 = state_20694__$1;
(statearr_20835_21285[(1)] = (79));

} else {
var statearr_20836_21286 = state_20694__$1;
(statearr_20836_21286[(1)] = (80));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (110))){
var inst_20466 = (state_20694[(2)]);
var inst_20467 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_20468 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",(-1965644065),null),new cljs.core.Symbol(null,"r","r",(1169147337),null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["vote_counts",(1),"value"], null)),(2));
var inst_20469 = [new cljs.core.Keyword(null,"error","error",(-978969032)),null,inst_20468,inst_20466];
var inst_20470 = cljs.core.PersistentHashMap.fromArrays(inst_20467,inst_20469);
var inst_20471 = cljs.test.do_report.call(null,inst_20470);
var state_20694__$1 = state_20694;
var statearr_20838_21287 = state_20694__$1;
(statearr_20838_21287[(2)] = inst_20471);

(statearr_20838_21287[(1)] = (109));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (142))){
var state_20694__$1 = state_20694;
var statearr_20840_21288 = state_20694__$1;
(statearr_20840_21288[(2)] = null);

(statearr_20840_21288[(1)] = (143));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (15))){
var _ = (function (){var statearr_20841 = state_20694;
(statearr_20841[(4)] = cljs.core.rest.call(null,(state_20694[(4)])));

return statearr_20841;
})();
var state_20694__$1 = state_20694;
var ex20837 = (state_20694__$1[(2)]);
var statearr_20842_21289 = state_20694__$1;
(statearr_20842_21289[(5)] = ex20837);


var statearr_20843_21290 = state_20694__$1;
(statearr_20843_21290[(1)] = (14));

(statearr_20843_21290[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (47))){
var _ = (function (){var statearr_20845 = state_20694;
(statearr_20845[(4)] = cljs.core.rest.call(null,(state_20694[(4)])));

return statearr_20845;
})();
var state_20694__$1 = state_20694;
var ex20839 = (state_20694__$1[(2)]);
var statearr_20846_21291 = state_20694__$1;
(statearr_20846_21291[(5)] = ex20839);


var statearr_20847_21292 = state_20694__$1;
(statearr_20847_21292[(1)] = (46));

(statearr_20847_21292[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (79))){
var inst_20327 = (state_20694[(36)]);
var inst_20334 = (function(){throw inst_20327})();
var state_20694__$1 = state_20694;
var statearr_20848_21293 = state_20694__$1;
(statearr_20848_21293[(2)] = inst_20334);

(statearr_20848_21293[(1)] = (81));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (111))){
var _ = (function (){var statearr_20849 = state_20694;
(statearr_20849[(4)] = cljs.core.rest.call(null,(state_20694[(4)])));

return statearr_20849;
})();
var state_20694__$1 = state_20694;
var ex20844 = (state_20694__$1[(2)]);
var statearr_20850_21294 = state_20694__$1;
(statearr_20850_21294[(5)] = ex20844);


var statearr_20851_21295 = state_20694__$1;
(statearr_20851_21295[(1)] = (110));

(statearr_20851_21295[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (143))){
var inst_20614 = (state_20694[(2)]);
var state_20694__$1 = (function (){var statearr_20852 = state_20694;
(statearr_20852[(37)] = inst_20614);

return statearr_20852;
})();
var statearr_20853_21296 = state_20694__$1;
(statearr_20853_21296[(2)] = null);

(statearr_20853_21296[(1)] = (144));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (16))){
var inst_20055 = (state_20694[(24)]);
var inst_20075 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_20076 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_20077 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"can vote on own proposal",inst_20076,inst_20055];
var inst_20078 = cljs.core.PersistentHashMap.fromArrays(inst_20075,inst_20077);
var inst_20079 = cljs.test.do_report.call(null,inst_20078);
var state_20694__$1 = state_20694;
var statearr_20854_21297 = state_20694__$1;
(statearr_20854_21297[(2)] = inst_20079);

(statearr_20854_21297[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (48))){
var inst_20204 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_20205 = true;
var inst_20206 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"can vote on own proposal",inst_20205,true];
var inst_20207 = cljs.core.PersistentHashMap.fromArrays(inst_20204,inst_20206);
var inst_20208 = cljs.test.do_report.call(null,inst_20207);
var state_20694__$1 = state_20694;
var statearr_20855_21298 = state_20694__$1;
(statearr_20855_21298[(2)] = inst_20208);

(statearr_20855_21298[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (80))){
var inst_20327 = (state_20694[(36)]);
var state_20694__$1 = state_20694;
var statearr_20856_21299 = state_20694__$1;
(statearr_20856_21299[(2)] = inst_20327);

(statearr_20856_21299[(1)] = (81));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (112))){
var inst_20482 = (state_20694[(31)]);
var inst_20485 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_20486 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",(-1965644065),null),new cljs.core.Symbol(null,"r","r",(1169147337),null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["vote_counts",(1),"value"], null)),(2));
var inst_20487 = cljs.core.cons.call(null,cljs.core._EQ_,inst_20482);
var inst_20488 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),null,inst_20486,inst_20487];
var inst_20489 = cljs.core.PersistentHashMap.fromArrays(inst_20485,inst_20488);
var inst_20490 = cljs.test.do_report.call(null,inst_20489);
var state_20694__$1 = state_20694;
var statearr_20857_21300 = state_20694__$1;
(statearr_20857_21300[(2)] = inst_20490);

(statearr_20857_21300[(1)] = (114));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (144))){
var inst_20607 = (state_20694[(34)]);
var _ = (function (){var statearr_20858 = state_20694;
(statearr_20858[(4)] = cljs.core.cons.call(null,(147),(state_20694[(4)])));

return statearr_20858;
})();
var state_20694__$1 = state_20694;
if(cljs.core.truth_(inst_20607)){
var statearr_20859_21301 = state_20694__$1;
(statearr_20859_21301[(1)] = (148));

} else {
var statearr_20860_21302 = state_20694__$1;
(statearr_20860_21302[(1)] = (149));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (17))){
var inst_20055 = (state_20694[(24)]);
var inst_20081 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_20082 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_20083 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can vote on own proposal",inst_20082,inst_20055];
var inst_20084 = cljs.core.PersistentHashMap.fromArrays(inst_20081,inst_20083);
var inst_20085 = cljs.test.do_report.call(null,inst_20084);
var state_20694__$1 = state_20694;
var statearr_20861_21303 = state_20694__$1;
(statearr_20861_21303[(2)] = inst_20085);

(statearr_20861_21303[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (49))){
var inst_20210 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_20211 = true;
var inst_20212 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can vote on own proposal",inst_20211,true];
var inst_20213 = cljs.core.PersistentHashMap.fromArrays(inst_20210,inst_20212);
var inst_20214 = cljs.test.do_report.call(null,inst_20213);
var state_20694__$1 = state_20694;
var statearr_20862_21304 = state_20694__$1;
(statearr_20862_21304[(2)] = inst_20214);

(statearr_20862_21304[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (81))){
var inst_20337 = (state_20694[(2)]);
var state_20694__$1 = (function (){var statearr_20863 = state_20694;
(statearr_20863[(38)] = inst_20337);

return statearr_20863;
})();
var statearr_20864_21305 = state_20694__$1;
(statearr_20864_21305[(2)] = null);

(statearr_20864_21305[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (113))){
var inst_20482 = (state_20694[(31)]);
var inst_20492 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_20493 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",(-1965644065),null),new cljs.core.Symbol(null,"r","r",(1169147337),null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["vote_counts",(1),"value"], null)),(2));
var inst_20494 = new cljs.core.Symbol(null,"not","not",(1044554643),null);
var inst_20495 = new cljs.core.Symbol(null,"=","=",(-1501502141),null);
var inst_20496 = cljs.core.cons.call(null,inst_20495,inst_20482);
var inst_20497 = (new cljs.core.List(null,inst_20496,null,(1),null));
var inst_20498 = (new cljs.core.List(null,inst_20494,inst_20497,(2),null));
var inst_20499 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),null,inst_20493,inst_20498];
var inst_20500 = cljs.core.PersistentHashMap.fromArrays(inst_20492,inst_20499);
var inst_20501 = cljs.test.do_report.call(null,inst_20500);
var state_20694__$1 = state_20694;
var statearr_20865_21306 = state_20694__$1;
(statearr_20865_21306[(2)] = inst_20501);

(statearr_20865_21306[(1)] = (114));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (145))){
var inst_20642 = (state_20694[(2)]);
var state_20694__$1 = state_20694;
var statearr_20866_21307 = state_20694__$1;
(statearr_20866_21307[(2)] = inst_20642);

(statearr_20866_21307[(1)] = (139));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (18))){
var inst_20055 = (state_20694[(24)]);
var inst_20087 = (state_20694[(2)]);
var _ = (function (){var statearr_20867 = state_20694;
(statearr_20867[(4)] = cljs.core.rest.call(null,(state_20694[(4)])));

return statearr_20867;
})();
var state_20694__$1 = (function (){var statearr_20868 = state_20694;
(statearr_20868[(39)] = inst_20087);

return statearr_20868;
})();
var statearr_20869_21308 = state_20694__$1;
(statearr_20869_21308[(2)] = inst_20055);

(statearr_20869_21308[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (50))){
var inst_20216 = (state_20694[(2)]);
var _ = (function (){var statearr_20870 = state_20694;
(statearr_20870[(4)] = cljs.core.rest.call(null,(state_20694[(4)])));

return statearr_20870;
})();
var state_20694__$1 = (function (){var statearr_20871 = state_20694;
(statearr_20871[(40)] = inst_20216);

return statearr_20871;
})();
var statearr_20872_21309 = state_20694__$1;
(statearr_20872_21309[(2)] = true);

(statearr_20872_21309[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (82))){
var _ = (function (){var statearr_20873 = state_20694;
(statearr_20873[(4)] = cljs.core.cons.call(null,(85),(state_20694[(4)])));

return statearr_20873;
})();
var state_20694__$1 = state_20694;
var statearr_20874_21310 = state_20694__$1;
(statearr_20874_21310[(1)] = (86));



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (114))){
var inst_20483 = (state_20694[(32)]);
var inst_20503 = (state_20694[(2)]);
var _ = (function (){var statearr_20877 = state_20694;
(statearr_20877[(4)] = cljs.core.rest.call(null,(state_20694[(4)])));

return statearr_20877;
})();
var state_20694__$1 = (function (){var statearr_20878 = state_20694;
(statearr_20878[(41)] = inst_20503);

return statearr_20878;
})();
var statearr_20879_21311 = state_20694__$1;
(statearr_20879_21311[(2)] = inst_20483);

(statearr_20879_21311[(1)] = (109));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (146))){
var inst_20615 = (state_20694[(2)]);
var inst_20616 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_20617 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_20618 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"needs latest terms accepted",inst_20617,inst_20615];
var inst_20619 = cljs.core.PersistentHashMap.fromArrays(inst_20616,inst_20618);
var inst_20620 = cljs.test.do_report.call(null,inst_20619);
var state_20694__$1 = state_20694;
var statearr_20880_21312 = state_20694__$1;
(statearr_20880_21312[(2)] = inst_20620);

(statearr_20880_21312[(1)] = (145));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (19))){
var _ = (function (){var statearr_20881 = state_20694;
(statearr_20881[(4)] = cljs.core.rest.call(null,(state_20694[(4)])));

return statearr_20881;
})();
var state_20694__$1 = state_20694;
var ex20876 = (state_20694__$1[(2)]);
var statearr_20882_21313 = state_20694__$1;
(statearr_20882_21313[(5)] = ex20876);


if((ex20876 instanceof Error)){
var statearr_20883_21314 = state_20694__$1;
(statearr_20883_21314[(1)] = (8));

(statearr_20883_21314[(5)] = null);

} else {
throw ex20876;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (51))){
var _ = (function (){var statearr_20884 = state_20694;
(statearr_20884[(4)] = cljs.core.cons.call(null,(58),(state_20694[(4)])));

return statearr_20884;
})();
var inst_20248 = [new cljs.core.Keyword(null,"voter","voter",(1012094707)),new cljs.core.Keyword(null,"prop_id","prop_id",(-694455661)),new cljs.core.Keyword(null,"vote_type","vote_type",(-293333277))];
var inst_20249 = [e2e.proposals.owner_acc,(0),(1)];
var inst_20250 = cljs.core.PersistentHashMap.fromArrays(inst_20248,inst_20249);
var inst_20251 = e2e.proposals.eos_tx_owner.call(null,e2e.proposals.prop_acc,"addvote",inst_20250);
var inst_20252 = cljs.core.async.interop.p__GT_c.call(null,inst_20251);
var state_20694__$1 = state_20694;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20694__$1,(59),inst_20252);
} else {
if((state_val_20695 === (83))){
var inst_20365 = (state_20694[(2)]);
var _ = (function (){var statearr_20886 = state_20694;
(statearr_20886[(4)] = cljs.core.rest.call(null,(state_20694[(4)])));

return statearr_20886;
})();
var state_20694__$1 = state_20694;
var statearr_20887_21315 = state_20694__$1;
(statearr_20887_21315[(2)] = inst_20365);

(statearr_20887_21315[(1)] = (71));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (115))){
var inst_20423 = (state_20694[(14)]);
var inst_20523 = (state_20694[(42)]);
var inst_20524 = (state_20694[(43)]);
var _ = (function (){var statearr_20888 = state_20694;
(statearr_20888[(4)] = cljs.core.cons.call(null,(118),(state_20694[(4)])));

return statearr_20888;
})();
var inst_20518 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20519 = ["vote_counts",(2),"value"];
var inst_20520 = (new cljs.core.PersistentVector(null,(3),(5),inst_20518,inst_20519,null));
var inst_20521 = cljs.core.get_in.call(null,inst_20423,inst_20520);
var inst_20522 = (new cljs.core.List(null,(5),null,(1),null));
var inst_20523__$1 = (new cljs.core.List(null,inst_20521,inst_20522,(2),null));
var inst_20524__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_20523__$1);
var state_20694__$1 = (function (){var statearr_20889 = state_20694;
(statearr_20889[(42)] = inst_20523__$1);

(statearr_20889[(43)] = inst_20524__$1);

return statearr_20889;
})();
if(cljs.core.truth_(inst_20524__$1)){
var statearr_20890_21316 = state_20694__$1;
(statearr_20890_21316[(1)] = (119));

} else {
var statearr_20891_21317 = state_20694__$1;
(statearr_20891_21317[(1)] = (120));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (147))){
var _ = (function (){var statearr_20892 = state_20694;
(statearr_20892[(4)] = cljs.core.rest.call(null,(state_20694[(4)])));

return statearr_20892;
})();
var state_20694__$1 = state_20694;
var ex20885 = (state_20694__$1[(2)]);
var statearr_20893_21318 = state_20694__$1;
(statearr_20893_21318[(5)] = ex20885);


var statearr_20894_21319 = state_20694__$1;
(statearr_20894_21319[(1)] = (146));

(statearr_20894_21319[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (20))){
var inst_20102 = (state_20694[(44)]);
var inst_20102__$1 = (state_20694[(2)]);
var inst_20103 = (inst_20102__$1 instanceof cljs.core.ExceptionInfo);
var inst_20104 = cljs.core.ex_data.call(null,inst_20102__$1);
var inst_20105 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_20104);
var inst_20106 = cljs.core._EQ_.call(null,inst_20105,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_20107 = ((inst_20103) && (inst_20106));
var state_20694__$1 = (function (){var statearr_20895 = state_20694;
(statearr_20895[(44)] = inst_20102__$1);

return statearr_20895;
})();
if(cljs.core.truth_(inst_20107)){
var statearr_20896_21320 = state_20694__$1;
(statearr_20896_21320[(1)] = (21));

} else {
var statearr_20897_21321 = state_20694__$1;
(statearr_20897_21321[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (52))){
var inst_20295 = (state_20694[(2)]);
var state_20694__$1 = (function (){var statearr_20898 = state_20694;
(statearr_20898[(45)] = inst_20295);

return statearr_20898;
})();
var statearr_20899_21322 = state_20694__$1;
(statearr_20899_21322[(2)] = null);

(statearr_20899_21322[(1)] = (70));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (84))){
var inst_20338 = (state_20694[(2)]);
var inst_20339 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_20340 = true;
var inst_20341 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can update vote twice",inst_20340,inst_20338];
var inst_20342 = cljs.core.PersistentHashMap.fromArrays(inst_20339,inst_20341);
var inst_20343 = cljs.test.do_report.call(null,inst_20342);
var state_20694__$1 = state_20694;
var statearr_20900_21323 = state_20694__$1;
(statearr_20900_21323[(2)] = inst_20343);

(statearr_20900_21323[(1)] = (83));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (116))){
var inst_20547 = (state_20694[(2)]);
var inst_20548 = Promise.resolve((42));
var inst_20549 = eos_cljs.core.wait_block.call(null,inst_20548,(2));
var inst_20550 = cljs.core.async.interop.p__GT_c.call(null,inst_20549);
var state_20694__$1 = (function (){var statearr_20901 = state_20694;
(statearr_20901[(46)] = inst_20547);

return statearr_20901;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20694__$1,(122),inst_20550);
} else {
if((state_val_20695 === (148))){
var inst_20607 = (state_20694[(34)]);
var inst_20627 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_20628 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_20629 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"needs latest terms accepted",inst_20628,inst_20607];
var inst_20630 = cljs.core.PersistentHashMap.fromArrays(inst_20627,inst_20629);
var inst_20631 = cljs.test.do_report.call(null,inst_20630);
var state_20694__$1 = state_20694;
var statearr_20902_21324 = state_20694__$1;
(statearr_20902_21324[(2)] = inst_20631);

(statearr_20902_21324[(1)] = (150));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (21))){
var inst_20102 = (state_20694[(44)]);
var inst_20109 = (function(){throw inst_20102})();
var state_20694__$1 = state_20694;
var statearr_20904_21325 = state_20694__$1;
(statearr_20904_21325[(2)] = inst_20109);

(statearr_20904_21325[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (53))){
var inst_20223 = (state_20694[(2)]);
var inst_20224 = cljs.core.prn.call(null,"test failed with ",inst_20223);
var state_20694__$1 = (function (){var statearr_20905 = state_20694;
(statearr_20905[(47)] = inst_20224);

return statearr_20905;
})();
var statearr_20906_21326 = state_20694__$1;
(statearr_20906_21326[(2)] = null);

(statearr_20906_21326[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (85))){
var _ = (function (){var statearr_20907 = state_20694;
(statearr_20907[(4)] = cljs.core.rest.call(null,(state_20694[(4)])));

return statearr_20907;
})();
var state_20694__$1 = state_20694;
var ex20903 = (state_20694__$1[(2)]);
var statearr_20908_21327 = state_20694__$1;
(statearr_20908_21327[(5)] = ex20903);


var statearr_20909_21328 = state_20694__$1;
(statearr_20909_21328[(1)] = (84));

(statearr_20909_21328[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (117))){
var inst_20507 = (state_20694[(2)]);
var inst_20508 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_20509 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",(-1965644065),null),new cljs.core.Symbol(null,"r","r",(1169147337),null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["vote_counts",(2),"value"], null)),(5));
var inst_20510 = [new cljs.core.Keyword(null,"error","error",(-978969032)),null,inst_20509,inst_20507];
var inst_20511 = cljs.core.PersistentHashMap.fromArrays(inst_20508,inst_20510);
var inst_20512 = cljs.test.do_report.call(null,inst_20511);
var state_20694__$1 = state_20694;
var statearr_20910_21329 = state_20694__$1;
(statearr_20910_21329[(2)] = inst_20512);

(statearr_20910_21329[(1)] = (116));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (149))){
var inst_20607 = (state_20694[(34)]);
var inst_20633 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_20634 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_20635 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"needs latest terms accepted",inst_20634,inst_20607];
var inst_20636 = cljs.core.PersistentHashMap.fromArrays(inst_20633,inst_20635);
var inst_20637 = cljs.test.do_report.call(null,inst_20636);
var state_20694__$1 = state_20694;
var statearr_20911_21330 = state_20694__$1;
(statearr_20911_21330[(2)] = inst_20637);

(statearr_20911_21330[(1)] = (150));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (22))){
var inst_20102 = (state_20694[(44)]);
var state_20694__$1 = state_20694;
var statearr_20912_21331 = state_20694__$1;
(statearr_20912_21331[(2)] = inst_20102);

(statearr_20912_21331[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (54))){
var _ = (function (){var statearr_20914 = state_20694;
(statearr_20914[(4)] = cljs.core.cons.call(null,(57),(state_20694[(4)])));

return statearr_20914;
})();
var inst_20236 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_20237 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can update vote"];
var inst_20238 = cljs.core.PersistentHashMap.fromArrays(inst_20236,inst_20237);
var inst_20239 = cljs.test.do_report.call(null,inst_20238);
var ___$1 = (function (){var statearr_20915 = state_20694;
(statearr_20915[(4)] = cljs.core.rest.call(null,(state_20694[(4)])));

return statearr_20915;
})();
var state_20694__$1 = state_20694;
var statearr_20916_21332 = state_20694__$1;
(statearr_20916_21332[(2)] = inst_20239);

(statearr_20916_21332[(1)] = (55));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (86))){
var inst_20350 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_20351 = true;
var inst_20352 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"can update vote twice",inst_20351,true];
var inst_20353 = cljs.core.PersistentHashMap.fromArrays(inst_20350,inst_20352);
var inst_20354 = cljs.test.do_report.call(null,inst_20353);
var state_20694__$1 = state_20694;
var statearr_20917_21333 = state_20694__$1;
(statearr_20917_21333[(2)] = inst_20354);

(statearr_20917_21333[(1)] = (88));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (118))){
var _ = (function (){var statearr_20918 = state_20694;
(statearr_20918[(4)] = cljs.core.rest.call(null,(state_20694[(4)])));

return statearr_20918;
})();
var state_20694__$1 = state_20694;
var ex20913 = (state_20694__$1[(2)]);
var statearr_20919_21334 = state_20694__$1;
(statearr_20919_21334[(5)] = ex20913);


var statearr_20920_21335 = state_20694__$1;
(statearr_20920_21335[(1)] = (117));

(statearr_20920_21335[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (150))){
var inst_20607 = (state_20694[(34)]);
var inst_20639 = (state_20694[(2)]);
var _ = (function (){var statearr_20921 = state_20694;
(statearr_20921[(4)] = cljs.core.rest.call(null,(state_20694[(4)])));

return statearr_20921;
})();
var state_20694__$1 = (function (){var statearr_20922 = state_20694;
(statearr_20922[(48)] = inst_20639);

return statearr_20922;
})();
var statearr_20923_21336 = state_20694__$1;
(statearr_20923_21336[(2)] = inst_20607);

(statearr_20923_21336[(1)] = (145));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (23))){
var inst_20112 = (state_20694[(2)]);
var state_20694__$1 = (function (){var statearr_20924 = state_20694;
(statearr_20924[(49)] = inst_20112);

return statearr_20924;
})();
var statearr_20925_21337 = state_20694__$1;
(statearr_20925_21337[(2)] = null);

(statearr_20925_21337[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (55))){
var inst_20242 = (state_20694[(2)]);
var state_20694__$1 = state_20694;
var statearr_20926_21338 = state_20694__$1;
(statearr_20926_21338[(2)] = inst_20242);

(statearr_20926_21338[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (87))){
var inst_20356 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_20357 = true;
var inst_20358 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can update vote twice",inst_20357,true];
var inst_20359 = cljs.core.PersistentHashMap.fromArrays(inst_20356,inst_20358);
var inst_20360 = cljs.test.do_report.call(null,inst_20359);
var state_20694__$1 = state_20694;
var statearr_20928_21339 = state_20694__$1;
(statearr_20928_21339[(2)] = inst_20360);

(statearr_20928_21339[(1)] = (88));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (119))){
var inst_20523 = (state_20694[(42)]);
var inst_20526 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_20527 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",(-1965644065),null),new cljs.core.Symbol(null,"r","r",(1169147337),null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["vote_counts",(2),"value"], null)),(5));
var inst_20528 = cljs.core.cons.call(null,cljs.core._EQ_,inst_20523);
var inst_20529 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),null,inst_20527,inst_20528];
var inst_20530 = cljs.core.PersistentHashMap.fromArrays(inst_20526,inst_20529);
var inst_20531 = cljs.test.do_report.call(null,inst_20530);
var state_20694__$1 = state_20694;
var statearr_20929_21340 = state_20694__$1;
(statearr_20929_21340[(2)] = inst_20531);

(statearr_20929_21340[(1)] = (121));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (151))){
var _ = (function (){var statearr_20930 = state_20694;
(statearr_20930[(4)] = cljs.core.rest.call(null,(state_20694[(4)])));

return statearr_20930;
})();
var state_20694__$1 = state_20694;
var ex20927 = (state_20694__$1[(2)]);
var statearr_20931_21341 = state_20694__$1;
(statearr_20931_21341[(5)] = ex20927);


if((ex20927 instanceof Error)){
var statearr_20932_21342 = state_20694__$1;
(statearr_20932_21342[(1)] = (140));

(statearr_20932_21342[(5)] = null);

} else {
throw ex20927;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (24))){
var _ = (function (){var statearr_20933 = state_20694;
(statearr_20933[(4)] = cljs.core.cons.call(null,(27),(state_20694[(4)])));

return statearr_20933;
})();
var inst_20124 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_20125 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can vote on own proposal"];
var inst_20126 = cljs.core.PersistentHashMap.fromArrays(inst_20124,inst_20125);
var inst_20127 = cljs.test.do_report.call(null,inst_20126);
var ___$1 = (function (){var statearr_20934 = state_20694;
(statearr_20934[(4)] = cljs.core.rest.call(null,(state_20694[(4)])));

return statearr_20934;
})();
var state_20694__$1 = state_20694;
var statearr_20935_21343 = state_20694__$1;
(statearr_20935_21343[(2)] = inst_20127);

(statearr_20935_21343[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (56))){
var inst_20225 = (state_20694[(2)]);
var inst_20226 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_20227 = null;
var inst_20228 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can update vote",inst_20227,inst_20225];
var inst_20229 = cljs.core.PersistentHashMap.fromArrays(inst_20226,inst_20228);
var inst_20230 = cljs.test.do_report.call(null,inst_20229);
var state_20694__$1 = state_20694;
var statearr_20936_21344 = state_20694__$1;
(statearr_20936_21344[(2)] = inst_20230);

(statearr_20936_21344[(1)] = (55));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (88))){
var inst_20362 = (state_20694[(2)]);
var _ = (function (){var statearr_20937 = state_20694;
(statearr_20937[(4)] = cljs.core.rest.call(null,(state_20694[(4)])));

return statearr_20937;
})();
var state_20694__$1 = (function (){var statearr_20938 = state_20694;
(statearr_20938[(50)] = inst_20362);

return statearr_20938;
})();
var statearr_20939_21345 = state_20694__$1;
(statearr_20939_21345[(2)] = true);

(statearr_20939_21345[(1)] = (83));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (120))){
var inst_20523 = (state_20694[(42)]);
var inst_20533 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_20534 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",(-1965644065),null),new cljs.core.Symbol(null,"r","r",(1169147337),null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["vote_counts",(2),"value"], null)),(5));
var inst_20535 = new cljs.core.Symbol(null,"not","not",(1044554643),null);
var inst_20536 = new cljs.core.Symbol(null,"=","=",(-1501502141),null);
var inst_20537 = cljs.core.cons.call(null,inst_20536,inst_20523);
var inst_20538 = (new cljs.core.List(null,inst_20537,null,(1),null));
var inst_20539 = (new cljs.core.List(null,inst_20535,inst_20538,(2),null));
var inst_20540 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),null,inst_20534,inst_20539];
var inst_20541 = cljs.core.PersistentHashMap.fromArrays(inst_20533,inst_20540);
var inst_20542 = cljs.test.do_report.call(null,inst_20541);
var state_20694__$1 = state_20694;
var statearr_20940_21346 = state_20694__$1;
(statearr_20940_21346[(2)] = inst_20542);

(statearr_20940_21346[(1)] = (121));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (152))){
var inst_20654 = (state_20694[(51)]);
var inst_20654__$1 = (state_20694[(2)]);
var inst_20655 = (inst_20654__$1 instanceof cljs.core.ExceptionInfo);
var inst_20656 = cljs.core.ex_data.call(null,inst_20654__$1);
var inst_20657 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_20656);
var inst_20658 = cljs.core._EQ_.call(null,inst_20657,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_20659 = ((inst_20655) && (inst_20658));
var state_20694__$1 = (function (){var statearr_20942 = state_20694;
(statearr_20942[(51)] = inst_20654__$1);

return statearr_20942;
})();
if(cljs.core.truth_(inst_20659)){
var statearr_20943_21347 = state_20694__$1;
(statearr_20943_21347[(1)] = (153));

} else {
var statearr_20944_21348 = state_20694__$1;
(statearr_20944_21348[(1)] = (154));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (25))){
var inst_20130 = (state_20694[(2)]);
var _ = (function (){var statearr_20945 = state_20694;
(statearr_20945[(4)] = cljs.core.rest.call(null,(state_20694[(4)])));

return statearr_20945;
})();
var state_20694__$1 = state_20694;
var statearr_20946_21349 = state_20694__$1;
(statearr_20946_21349[(2)] = inst_20130);

(statearr_20946_21349[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (57))){
var _ = (function (){var statearr_20947 = state_20694;
(statearr_20947[(4)] = cljs.core.rest.call(null,(state_20694[(4)])));

return statearr_20947;
})();
var state_20694__$1 = state_20694;
var ex20941 = (state_20694__$1[(2)]);
var statearr_20948_21350 = state_20694__$1;
(statearr_20948_21350[(5)] = ex20941);


var statearr_20949_21351 = state_20694__$1;
(statearr_20949_21351[(1)] = (56));

(statearr_20949_21351[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (89))){
var inst_20373 = (state_20694[(52)]);
var inst_20373__$1 = (state_20694[(2)]);
var inst_20374 = (inst_20373__$1 instanceof cljs.core.ExceptionInfo);
var inst_20375 = cljs.core.ex_data.call(null,inst_20373__$1);
var inst_20376 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_20375);
var inst_20377 = cljs.core._EQ_.call(null,inst_20376,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_20378 = ((inst_20374) && (inst_20377));
var state_20694__$1 = (function (){var statearr_20950 = state_20694;
(statearr_20950[(52)] = inst_20373__$1);

return statearr_20950;
})();
if(cljs.core.truth_(inst_20378)){
var statearr_20951_21352 = state_20694__$1;
(statearr_20951_21352[(1)] = (90));

} else {
var statearr_20952_21353 = state_20694__$1;
(statearr_20952_21353[(1)] = (91));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (121))){
var inst_20524 = (state_20694[(43)]);
var inst_20544 = (state_20694[(2)]);
var _ = (function (){var statearr_20953 = state_20694;
(statearr_20953[(4)] = cljs.core.rest.call(null,(state_20694[(4)])));

return statearr_20953;
})();
var state_20694__$1 = (function (){var statearr_20954 = state_20694;
(statearr_20954[(53)] = inst_20544);

return statearr_20954;
})();
var statearr_20955_21354 = state_20694__$1;
(statearr_20955_21354[(2)] = inst_20524);

(statearr_20955_21354[(1)] = (116));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (153))){
var inst_20654 = (state_20694[(51)]);
var inst_20661 = (function(){throw inst_20654})();
var state_20694__$1 = state_20694;
var statearr_20957_21355 = state_20694__$1;
(statearr_20957_21355[(2)] = inst_20661);

(statearr_20957_21355[(1)] = (155));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (26))){
var inst_20113 = (state_20694[(2)]);
var inst_20114 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_20115 = null;
var inst_20116 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can vote on own proposal",inst_20115,inst_20113];
var inst_20117 = cljs.core.PersistentHashMap.fromArrays(inst_20114,inst_20116);
var inst_20118 = cljs.test.do_report.call(null,inst_20117);
var state_20694__$1 = state_20694;
var statearr_20958_21356 = state_20694__$1;
(statearr_20958_21356[(2)] = inst_20118);

(statearr_20958_21356[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (58))){
var _ = (function (){var statearr_20959 = state_20694;
(statearr_20959[(4)] = cljs.core.rest.call(null,(state_20694[(4)])));

return statearr_20959;
})();
var state_20694__$1 = state_20694;
var ex20956 = (state_20694__$1[(2)]);
var statearr_20960_21357 = state_20694__$1;
(statearr_20960_21357[(5)] = ex20956);


if((ex20956 instanceof Error)){
var statearr_20961_21358 = state_20694__$1;
(statearr_20961_21358[(1)] = (53));

(statearr_20961_21358[(5)] = null);

} else {
throw ex20956;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (90))){
var inst_20373 = (state_20694[(52)]);
var inst_20380 = (function(){throw inst_20373})();
var state_20694__$1 = state_20694;
var statearr_20962_21359 = state_20694__$1;
(statearr_20962_21359[(2)] = inst_20380);

(statearr_20962_21359[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (122))){
var inst_20552 = (state_20694[(54)]);
var inst_20552__$1 = (state_20694[(2)]);
var inst_20553 = (inst_20552__$1 instanceof cljs.core.ExceptionInfo);
var inst_20554 = cljs.core.ex_data.call(null,inst_20552__$1);
var inst_20555 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_20554);
var inst_20556 = cljs.core._EQ_.call(null,inst_20555,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_20557 = ((inst_20553) && (inst_20556));
var state_20694__$1 = (function (){var statearr_20964 = state_20694;
(statearr_20964[(54)] = inst_20552__$1);

return statearr_20964;
})();
if(cljs.core.truth_(inst_20557)){
var statearr_20965_21360 = state_20694__$1;
(statearr_20965_21360[(1)] = (123));

} else {
var statearr_20966_21361 = state_20694__$1;
(statearr_20966_21361[(1)] = (124));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (154))){
var inst_20654 = (state_20694[(51)]);
var state_20694__$1 = state_20694;
var statearr_20967_21362 = state_20694__$1;
(statearr_20967_21362[(2)] = inst_20654);

(statearr_20967_21362[(1)] = (155));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (27))){
var _ = (function (){var statearr_20968 = state_20694;
(statearr_20968[(4)] = cljs.core.rest.call(null,(state_20694[(4)])));

return statearr_20968;
})();
var state_20694__$1 = state_20694;
var ex20963 = (state_20694__$1[(2)]);
var statearr_20969_21363 = state_20694__$1;
(statearr_20969_21363[(5)] = ex20963);


var statearr_20970_21364 = state_20694__$1;
(statearr_20970_21364[(1)] = (26));

(statearr_20970_21364[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (59))){
var inst_20254 = (state_20694[(55)]);
var inst_20254__$1 = (state_20694[(2)]);
var inst_20255 = (inst_20254__$1 instanceof cljs.core.ExceptionInfo);
var inst_20256 = cljs.core.ex_data.call(null,inst_20254__$1);
var inst_20257 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_20256);
var inst_20258 = cljs.core._EQ_.call(null,inst_20257,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_20259 = ((inst_20255) && (inst_20258));
var state_20694__$1 = (function (){var statearr_20971 = state_20694;
(statearr_20971[(55)] = inst_20254__$1);

return statearr_20971;
})();
if(cljs.core.truth_(inst_20259)){
var statearr_20972_21365 = state_20694__$1;
(statearr_20972_21365[(1)] = (60));

} else {
var statearr_20973_21366 = state_20694__$1;
(statearr_20973_21366[(1)] = (61));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (91))){
var inst_20373 = (state_20694[(52)]);
var state_20694__$1 = state_20694;
var statearr_20974_21367 = state_20694__$1;
(statearr_20974_21367[(2)] = inst_20373);

(statearr_20974_21367[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (123))){
var inst_20552 = (state_20694[(54)]);
var inst_20559 = (function(){throw inst_20552})();
var state_20694__$1 = state_20694;
var statearr_20975_21368 = state_20694__$1;
(statearr_20975_21368[(2)] = inst_20559);

(statearr_20975_21368[(1)] = (125));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (155))){
var inst_20664 = (state_20694[(2)]);
var state_20694__$1 = (function (){var statearr_20976 = state_20694;
(statearr_20976[(56)] = inst_20664);

return statearr_20976;
})();
var statearr_20977_21369 = state_20694__$1;
(statearr_20977_21369[(2)] = null);

(statearr_20977_21369[(1)] = (156));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (28))){
var inst_20139 = (state_20694[(57)]);
var inst_20139__$1 = (state_20694[(2)]);
var inst_20140 = (inst_20139__$1 instanceof cljs.core.ExceptionInfo);
var inst_20141 = cljs.core.ex_data.call(null,inst_20139__$1);
var inst_20142 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_20141);
var inst_20143 = cljs.core._EQ_.call(null,inst_20142,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_20144 = ((inst_20140) && (inst_20143));
var state_20694__$1 = (function (){var statearr_20978 = state_20694;
(statearr_20978[(57)] = inst_20139__$1);

return statearr_20978;
})();
if(cljs.core.truth_(inst_20144)){
var statearr_20979_21370 = state_20694__$1;
(statearr_20979_21370[(1)] = (29));

} else {
var statearr_20980_21371 = state_20694__$1;
(statearr_20980_21371[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (60))){
var inst_20254 = (state_20694[(55)]);
var inst_20261 = (function(){throw inst_20254})();
var state_20694__$1 = state_20694;
var statearr_20981_21372 = state_20694__$1;
(statearr_20981_21372[(2)] = inst_20261);

(statearr_20981_21372[(1)] = (62));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (92))){
var inst_20383 = (state_20694[(2)]);
var inst_20384 = [new cljs.core.Keyword(null,"voter","voter",(1012094707)),new cljs.core.Keyword(null,"prop_id","prop_id",(-694455661)),new cljs.core.Keyword(null,"vote_type","vote_type",(-293333277))];
var inst_20385 = [e2e.proposals.token_acc,(0),(1)];
var inst_20386 = cljs.core.PersistentHashMap.fromArrays(inst_20384,inst_20385);
var inst_20387 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20388 = [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),new cljs.core.Keyword(null,"permission","permission",(-511292572))];
var inst_20389 = [e2e.proposals.token_acc,"active"];
var inst_20390 = cljs.core.PersistentHashMap.fromArrays(inst_20388,inst_20389);
var inst_20391 = [inst_20390];
var inst_20392 = (new cljs.core.PersistentVector(null,(1),(5),inst_20387,inst_20391,null));
var inst_20393 = eos_cljs.core.transact.call(null,e2e.proposals.prop_acc,"addvote",inst_20386,inst_20392);
var inst_20394 = cljs.core.async.interop.p__GT_c.call(null,inst_20393);
var state_20694__$1 = (function (){var statearr_20982 = state_20694;
(statearr_20982[(58)] = inst_20383);

return statearr_20982;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20694__$1,(93),inst_20394);
} else {
if((state_val_20695 === (124))){
var inst_20552 = (state_20694[(54)]);
var state_20694__$1 = state_20694;
var statearr_20983_21373 = state_20694__$1;
(statearr_20983_21373[(2)] = inst_20552);

(statearr_20983_21373[(1)] = (125));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (156))){
var _ = (function (){var statearr_20984 = state_20694;
(statearr_20984[(4)] = cljs.core.cons.call(null,(159),(state_20694[(4)])));

return statearr_20984;
})();
var inst_20676 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_20677 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"needs latest terms accepted"];
var inst_20678 = cljs.core.PersistentHashMap.fromArrays(inst_20676,inst_20677);
var inst_20679 = cljs.test.do_report.call(null,inst_20678);
var ___$1 = (function (){var statearr_20985 = state_20694;
(statearr_20985[(4)] = cljs.core.rest.call(null,(state_20694[(4)])));

return statearr_20985;
})();
var state_20694__$1 = state_20694;
var statearr_20986_21374 = state_20694__$1;
(statearr_20986_21374[(2)] = inst_20679);

(statearr_20986_21374[(1)] = (157));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (29))){
var inst_20139 = (state_20694[(57)]);
var inst_20146 = (function(){throw inst_20139})();
var state_20694__$1 = state_20694;
var statearr_20987_21375 = state_20694__$1;
(statearr_20987_21375[(2)] = inst_20146);

(statearr_20987_21375[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (61))){
var inst_20254 = (state_20694[(55)]);
var state_20694__$1 = state_20694;
var statearr_20988_21376 = state_20694__$1;
(statearr_20988_21376[(2)] = inst_20254);

(statearr_20988_21376[(1)] = (62));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (93))){
var inst_20396 = (state_20694[(59)]);
var inst_20396__$1 = (state_20694[(2)]);
var inst_20397 = (inst_20396__$1 instanceof cljs.core.ExceptionInfo);
var inst_20398 = cljs.core.ex_data.call(null,inst_20396__$1);
var inst_20399 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_20398);
var inst_20400 = cljs.core._EQ_.call(null,inst_20399,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_20401 = ((inst_20397) && (inst_20400));
var state_20694__$1 = (function (){var statearr_20989 = state_20694;
(statearr_20989[(59)] = inst_20396__$1);

return statearr_20989;
})();
if(cljs.core.truth_(inst_20401)){
var statearr_20990_21377 = state_20694__$1;
(statearr_20990_21377[(1)] = (94));

} else {
var statearr_20991_21378 = state_20694__$1;
(statearr_20991_21378[(1)] = (95));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (125))){
var inst_20562 = (state_20694[(2)]);
var inst_20563 = [new cljs.core.Keyword(null,"voter","voter",(1012094707)),new cljs.core.Keyword(null,"prop_id","prop_id",(-694455661)),new cljs.core.Keyword(null,"vote_type","vote_type",(-293333277))];
var inst_20564 = [e2e.proposals.owner_acc,(1),(1)];
var inst_20565 = cljs.core.PersistentHashMap.fromArrays(inst_20563,inst_20564);
var inst_20566 = e2e.proposals.eos_tx_owner.call(null,e2e.proposals.prop_acc,"addvote",inst_20565);
var inst_20567 = cljs.core.async.interop.p__GT_c.call(null,inst_20566);
var state_20694__$1 = (function (){var statearr_20992 = state_20694;
(statearr_20992[(60)] = inst_20562);

return statearr_20992;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20694__$1,(126),inst_20567);
} else {
if((state_val_20695 === (157))){
var inst_20682 = (state_20694[(2)]);
var _ = (function (){var statearr_20993 = state_20694;
(statearr_20993[(4)] = cljs.core.rest.call(null,(state_20694[(4)])));

return statearr_20993;
})();
var state_20694__$1 = state_20694;
var statearr_20994_21379 = state_20694__$1;
(statearr_20994_21379[(2)] = inst_20682);

(statearr_20994_21379[(1)] = (139));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (30))){
var inst_20139 = (state_20694[(57)]);
var state_20694__$1 = state_20694;
var statearr_20995_21380 = state_20694__$1;
(statearr_20995_21380[(2)] = inst_20139);

(statearr_20995_21380[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (62))){
var inst_20264 = (state_20694[(2)]);
var state_20694__$1 = (function (){var statearr_20996 = state_20694;
(statearr_20996[(61)] = inst_20264);

return statearr_20996;
})();
var statearr_20997_21381 = state_20694__$1;
(statearr_20997_21381[(2)] = null);

(statearr_20997_21381[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (94))){
var inst_20396 = (state_20694[(59)]);
var inst_20403 = (function(){throw inst_20396})();
var state_20694__$1 = state_20694;
var statearr_20998_21382 = state_20694__$1;
(statearr_20998_21382[(2)] = inst_20403);

(statearr_20998_21382[(1)] = (96));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (126))){
var inst_20569 = (state_20694[(8)]);
var inst_20569__$1 = (state_20694[(2)]);
var inst_20570 = (inst_20569__$1 instanceof cljs.core.ExceptionInfo);
var inst_20571 = cljs.core.ex_data.call(null,inst_20569__$1);
var inst_20572 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_20571);
var inst_20573 = cljs.core._EQ_.call(null,inst_20572,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_20574 = ((inst_20570) && (inst_20573));
var state_20694__$1 = (function (){var statearr_20999 = state_20694;
(statearr_20999[(8)] = inst_20569__$1);

return statearr_20999;
})();
if(cljs.core.truth_(inst_20574)){
var statearr_21000_21383 = state_20694__$1;
(statearr_21000_21383[(1)] = (127));

} else {
var statearr_21001_21384 = state_20694__$1;
(statearr_21001_21384[(1)] = (128));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (158))){
var inst_20665 = (state_20694[(2)]);
var inst_20666 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_20667 = null;
var inst_20668 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"needs latest terms accepted",inst_20667,inst_20665];
var inst_20669 = cljs.core.PersistentHashMap.fromArrays(inst_20666,inst_20668);
var inst_20670 = cljs.test.do_report.call(null,inst_20669);
var state_20694__$1 = state_20694;
var statearr_21002_21385 = state_20694__$1;
(statearr_21002_21385[(2)] = inst_20670);

(statearr_21002_21385[(1)] = (157));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (31))){
var inst_20149 = (state_20694[(2)]);
var state_20694__$1 = (function (){var statearr_21003 = state_20694;
(statearr_21003[(62)] = inst_20149);

return statearr_21003;
})();
var statearr_21004_21386 = state_20694__$1;
(statearr_21004_21386[(2)] = null);

(statearr_21004_21386[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (63))){
var _ = (function (){var statearr_21005 = state_20694;
(statearr_21005[(4)] = cljs.core.cons.call(null,(66),(state_20694[(4)])));

return statearr_21005;
})();
var state_20694__$1 = state_20694;
var statearr_21006_21387 = state_20694__$1;
(statearr_21006_21387[(1)] = (67));



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (95))){
var inst_20396 = (state_20694[(59)]);
var state_20694__$1 = state_20694;
var statearr_21009_21388 = state_20694__$1;
(statearr_21009_21388[(2)] = inst_20396);

(statearr_21009_21388[(1)] = (96));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (127))){
var inst_20569 = (state_20694[(8)]);
var inst_20576 = (function(){throw inst_20569})();
var state_20694__$1 = state_20694;
var statearr_21010_21389 = state_20694__$1;
(statearr_21010_21389[(2)] = inst_20576);

(statearr_21010_21389[(1)] = (129));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_20695 === (159))){
var _ = (function (){var statearr_21011 = state_20694;
(statearr_21011[(4)] = cljs.core.rest.call(null,(state_20694[(4)])));

return statearr_21011;
})();
var state_20694__$1 = state_20694;
var ex21008 = (state_20694__$1[(2)]);
var statearr_21012_21390 = state_20694__$1;
(statearr_21012_21390[(5)] = ex21008);


var statearr_21013_21391 = state_20694__$1;
(statearr_21013_21391[(1)] = (158));

(statearr_21013_21391[(5)] = null);



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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
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
var e2e$proposals$state_machine__15__auto__ = null;
var e2e$proposals$state_machine__15__auto____0 = (function (){
var statearr_21014 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21014[(0)] = e2e$proposals$state_machine__15__auto__);

(statearr_21014[(1)] = (1));

return statearr_21014;
});
var e2e$proposals$state_machine__15__auto____1 = (function (state_20694){
while(true){
var ret_value__16__auto__ = (function (){try{while(true){
var result__17__auto__ = switch__14__auto__.call(null,state_20694);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__17__auto__;
}
break;
}
}catch (e21015){var ex__18__auto__ = e21015;
var statearr_21016_21392 = state_20694;
(statearr_21016_21392[(2)] = ex__18__auto__);


if(cljs.core.seq.call(null,(state_20694[(4)]))){
var statearr_21017_21393 = state_20694;
(statearr_21017_21393[(1)] = cljs.core.first.call(null,(state_20694[(4)])));

} else {
throw ex__18__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__21394 = state_20694;
state_20694 = G__21394;
continue;
} else {
return ret_value__16__auto__;
}
break;
}
});
e2e$proposals$state_machine__15__auto__ = function(state_20694){
switch(arguments.length){
case 0:
return e2e$proposals$state_machine__15__auto____0.call(this);
case 1:
return e2e$proposals$state_machine__15__auto____1.call(this,state_20694);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
e2e$proposals$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$0 = e2e$proposals$state_machine__15__auto____0;
e2e$proposals$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$1 = e2e$proposals$state_machine__15__auto____1;
return e2e$proposals$state_machine__15__auto__;
})()
;})(switch__14__auto__,c__19__auto__,___192__auto__))
})();
var state__21__auto__ = (function (){var statearr_21018 = f__20__auto__.call(null);
(statearr_21018[(6)] = c__19__auto__);

return statearr_21018;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21__auto__);
});})(c__19__auto__,___192__auto__))
);

return c__19__auto__;
});

e2e.proposals.t_e2e$proposals19067.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta19068","meta19068",(1576368232),null)], null);
});

e2e.proposals.t_e2e$proposals19067.cljs$lang$type = true;

e2e.proposals.t_e2e$proposals19067.cljs$lang$ctorStr = "e2e.proposals/t_e2e$proposals19067";

e2e.proposals.t_e2e$proposals19067.cljs$lang$ctorPrWriter = (function (this__9776__auto__,writer__9777__auto__,opt__9778__auto__){
return cljs.core._write.call(null,writer__9777__auto__,"e2e.proposals/t_e2e$proposals19067");
});

/**
 * Positional factory function for e2e.proposals/t_e2e$proposals19067.
 */
e2e.proposals.__GT_t_e2e$proposals19067 = (function e2e$proposals$__GT_t_e2e$proposals19067(meta19068){
return (new e2e.proposals.t_e2e$proposals19067(meta19068));
});

}

return (new e2e.proposals.t_e2e$proposals19067(null));
});

e2e.proposals.vote.cljs$lang$var = new cljs.core.Var(function(){return e2e.proposals.vote;},new cljs.core.Symbol("e2e.proposals","vote","e2e.proposals/vote",(-517647785),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"e2e.proposals","e2e.proposals",(1479174227),null),new cljs.core.Symbol(null,"vote","vote",(-839798934),null),"e2e/proposals.cljs",(14),(1),(200),(200),cljs.core.List.EMPTY,null,(cljs.core.truth_(e2e.proposals.vote)?e2e.proposals.vote.cljs$lang$test:null)]));
e2e.proposals.process_cycle = (function e2e$proposals$process_cycle(){
return cljs.test.test_var.call(null,e2e.proposals.process_cycle.cljs$lang$var);
});
e2e.proposals.process_cycle.cljs$lang$test = (function (){
if((typeof e2e !== 'undefined') && (typeof e2e.proposals !== 'undefined') && (typeof e2e.proposals.t_e2e$proposals21395 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IFn}
*/
e2e.proposals.t_e2e$proposals21395 = (function (meta21396){
this.meta21396 = meta21396;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
e2e.proposals.t_e2e$proposals21395.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21397,meta21396__$1){
var self__ = this;
var _21397__$1 = this;
return (new e2e.proposals.t_e2e$proposals21395(meta21396__$1));
});

e2e.proposals.t_e2e$proposals21395.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21397){
var self__ = this;
var _21397__$1 = this;
return self__.meta21396;
});

e2e.proposals.t_e2e$proposals21395.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL;

e2e.proposals.t_e2e$proposals21395.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___192__auto__ = self____$1;
var c__19__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19__auto__,___192__auto__,self____$1){
return (function (){
var f__20__auto__ = (function (){var switch__14__auto__ = ((function (c__19__auto__,___192__auto__,self____$1){
return (function (state_21596){
var state_val_21597 = (state_21596[(1)]);
if((state_val_21597 === (32))){
var inst_21507 = (state_21596[(7)]);
var inst_21507__$1 = (state_21596[(2)]);
var inst_21508 = (inst_21507__$1 instanceof cljs.core.ExceptionInfo);
var inst_21509 = cljs.core.ex_data.call(null,inst_21507__$1);
var inst_21510 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_21509);
var inst_21511 = cljs.core._EQ_.call(null,inst_21510,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_21512 = ((inst_21508) && (inst_21511));
var state_21596__$1 = (function (){var statearr_21598 = state_21596;
(statearr_21598[(7)] = inst_21507__$1);

return statearr_21598;
})();
if(cljs.core.truth_(inst_21512)){
var statearr_21599_22019 = state_21596__$1;
(statearr_21599_22019[(1)] = (33));

} else {
var statearr_21600_22020 = state_21596__$1;
(statearr_21600_22020[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_21597 === (1))){
var state_21596__$1 = state_21596;
var statearr_21601_22021 = state_21596__$1;
(statearr_21601_22021[(2)] = null);

(statearr_21601_22021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_21597 === (33))){
var inst_21507 = (state_21596[(7)]);
var inst_21514 = (function(){throw inst_21507})();
var state_21596__$1 = state_21596;
var statearr_21602_22022 = state_21596__$1;
(statearr_21602_22022[(2)] = inst_21514);

(statearr_21602_22022[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_21597 === (2))){
var _ = (function (){var statearr_21603 = state_21596;
(statearr_21603[(4)] = cljs.core.cons.call(null,(5),(state_21596[(4)])));

return statearr_21603;
})();
var state_21596__$1 = state_21596;
var statearr_21604_22023 = state_21596__$1;
(statearr_21604_22023[(2)] = null);

(statearr_21604_22023[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_21597 === (34))){
var inst_21507 = (state_21596[(7)]);
var state_21596__$1 = state_21596;
var statearr_21605_22024 = state_21596__$1;
(statearr_21605_22024[(2)] = inst_21507);

(statearr_21605_22024[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_21597 === (3))){
var inst_21593 = (state_21596[(2)]);
var inst_21594 = done.call(null);
var state_21596__$1 = (function (){var statearr_21606 = state_21596;
(statearr_21606[(8)] = inst_21593);

return statearr_21606;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21596__$1,inst_21594);
} else {
if((state_val_21597 === (35))){
var inst_21517 = (state_21596[(2)]);
var state_21596__$1 = (function (){var statearr_21607 = state_21596;
(statearr_21607[(9)] = inst_21517);

return statearr_21607;
})();
var statearr_21608_22025 = state_21596__$1;
(statearr_21608_22025[(2)] = null);

(statearr_21608_22025[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_21597 === (4))){
var inst_21399 = (state_21596[(2)]);
var inst_21400 = cljs.core.prn.call(null,inst_21399);
var state_21596__$1 = state_21596;
var statearr_21610_22026 = state_21596__$1;
(statearr_21610_22026[(2)] = inst_21400);

(statearr_21610_22026[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_21597 === (36))){
var _ = (function (){var statearr_21611 = state_21596;
(statearr_21611[(4)] = cljs.core.cons.call(null,(43),(state_21596[(4)])));

return statearr_21611;
})();
var inst_21543 = [new cljs.core.Keyword(null,"account","account",(718006320)),new cljs.core.Keyword(null,"id","id",(-1388402092))];
var inst_21544 = [e2e.proposals.owner_acc,(2)];
var inst_21545 = cljs.core.PersistentHashMap.fromArrays(inst_21543,inst_21544);
var inst_21546 = e2e.proposals.eos_tx_owner.call(null,e2e.proposals.prop_acc,"processcycle",inst_21545);
var inst_21547 = cljs.core.async.interop.p__GT_c.call(null,inst_21546);
var state_21596__$1 = state_21596;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21596__$1,(44),inst_21547);
} else {
if((state_val_21597 === (5))){
var _ = (function (){var statearr_21612 = state_21596;
(statearr_21612[(4)] = cljs.core.rest.call(null,(state_21596[(4)])));

return statearr_21612;
})();
var state_21596__$1 = state_21596;
var ex21609 = (state_21596__$1[(2)]);
var statearr_21613_22027 = state_21596__$1;
(statearr_21613_22027[(5)] = ex21609);


if((ex21609 instanceof Error)){
var statearr_21614_22028 = state_21596__$1;
(statearr_21614_22028[(1)] = (4));

(statearr_21614_22028[(5)] = null);

} else {
throw ex21609;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_21597 === (37))){
var inst_21590 = (state_21596[(2)]);
var _ = (function (){var statearr_21615 = state_21596;
(statearr_21615[(4)] = cljs.core.rest.call(null,(state_21596[(4)])));

return statearr_21615;
})();
var state_21596__$1 = state_21596;
var statearr_21616_22029 = state_21596__$1;
(statearr_21616_22029[(2)] = inst_21590);

(statearr_21616_22029[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_21597 === (6))){
var _ = (function (){var statearr_21617 = state_21596;
(statearr_21617[(4)] = cljs.core.cons.call(null,(19),(state_21596[(4)])));

return statearr_21617;
})();
var inst_21450 = [new cljs.core.Keyword(null,"account","account",(718006320)),new cljs.core.Keyword(null,"id","id",(-1388402092))];
var inst_21451 = [e2e.proposals.owner_acc,(2)];
var inst_21452 = cljs.core.PersistentHashMap.fromArrays(inst_21450,inst_21451);
var inst_21453 = e2e.proposals.eos_tx_owner.call(null,e2e.proposals.prop_acc,"processcycle",inst_21452);
var inst_21454 = cljs.core.async.interop.p__GT_c.call(null,inst_21453);
var state_21596__$1 = state_21596;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21596__$1,(20),inst_21454);
} else {
if((state_val_21597 === (38))){
var inst_21518 = (state_21596[(2)]);
var inst_21519 = cljs.core.prn.call(null,"test failed with ",inst_21518);
var state_21596__$1 = (function (){var statearr_21618 = state_21596;
(statearr_21618[(10)] = inst_21519);

return statearr_21618;
})();
var statearr_21619_22030 = state_21596__$1;
(statearr_21619_22030[(2)] = null);

(statearr_21619_22030[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_21597 === (7))){
var inst_21487 = (state_21596[(2)]);
var inst_21488 = cljs.core.assoc.call(null,e2e.proposals.prop_config,new cljs.core.Keyword(null,"cycle_duration_sec","cycle_duration_sec",(2139129571)),(1));
var inst_21489 = eos_cljs.core.transact.call(null,e2e.proposals.prop_acc,"update",inst_21488);
var inst_21490 = cljs.core.async.interop.p__GT_c.call(null,inst_21489);
var state_21596__$1 = (function (){var statearr_21620 = state_21596;
(statearr_21620[(11)] = inst_21487);

return statearr_21620;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21596__$1,(28),inst_21490);
} else {
if((state_val_21597 === (39))){
var _ = (function (){var statearr_21621 = state_21596;
(statearr_21621[(4)] = cljs.core.cons.call(null,(42),(state_21596[(4)])));

return statearr_21621;
})();
var inst_21531 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_21532 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can finalize cycle"];
var inst_21533 = cljs.core.PersistentHashMap.fromArrays(inst_21531,inst_21532);
var inst_21534 = cljs.test.do_report.call(null,inst_21533);
var ___$1 = (function (){var statearr_21622 = state_21596;
(statearr_21622[(4)] = cljs.core.rest.call(null,(state_21596[(4)])));

return statearr_21622;
})();
var state_21596__$1 = state_21596;
var statearr_21623_22031 = state_21596__$1;
(statearr_21623_22031[(2)] = inst_21534);

(statearr_21623_22031[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_21597 === (8))){
var inst_21408 = (state_21596[(12)]);
var inst_21409 = (state_21596[(13)]);
var inst_21406 = (state_21596[(2)]);
var inst_21407 = inst_21406.cause;
var inst_21408__$1 = inst_21407.message;
var inst_21409__$1 = clojure.string.ends_with_QMARK_.call(null,inst_21408__$1,"cycle is not in the past");
var inst_21410 = (!(inst_21409__$1));
var state_21596__$1 = (function (){var statearr_21624 = state_21596;
(statearr_21624[(12)] = inst_21408__$1);

(statearr_21624[(13)] = inst_21409__$1);

return statearr_21624;
})();
if(inst_21410){
var statearr_21625_22032 = state_21596__$1;
(statearr_21625_22032[(1)] = (9));

} else {
var statearr_21626_22033 = state_21596__$1;
(statearr_21626_22033[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_21597 === (40))){
var inst_21537 = (state_21596[(2)]);
var state_21596__$1 = state_21596;
var statearr_21627_22034 = state_21596__$1;
(statearr_21627_22034[(2)] = inst_21537);

(statearr_21627_22034[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_21597 === (9))){
var inst_21408 = (state_21596[(12)]);
var inst_21412 = ["expected =","cycle is not in the past"," actual = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_21408)].join('');
var inst_21413 = cljs.core.prn.call(null,inst_21412);
var state_21596__$1 = state_21596;
var statearr_21628_22035 = state_21596__$1;
(statearr_21628_22035[(2)] = inst_21413);

(statearr_21628_22035[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_21597 === (41))){
var inst_21520 = (state_21596[(2)]);
var inst_21521 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_21522 = null;
var inst_21523 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can finalize cycle",inst_21522,inst_21520];
var inst_21524 = cljs.core.PersistentHashMap.fromArrays(inst_21521,inst_21523);
var inst_21525 = cljs.test.do_report.call(null,inst_21524);
var state_21596__$1 = state_21596;
var statearr_21630_22036 = state_21596__$1;
(statearr_21630_22036[(2)] = inst_21525);

(statearr_21630_22036[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_21597 === (10))){
var state_21596__$1 = state_21596;
var statearr_21631_22037 = state_21596__$1;
(statearr_21631_22037[(2)] = null);

(statearr_21631_22037[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_21597 === (42))){
var _ = (function (){var statearr_21633 = state_21596;
(statearr_21633[(4)] = cljs.core.rest.call(null,(state_21596[(4)])));

return statearr_21633;
})();
var state_21596__$1 = state_21596;
var ex21629 = (state_21596__$1[(2)]);
var statearr_21634_22038 = state_21596__$1;
(statearr_21634_22038[(5)] = ex21629);


var statearr_21635_22039 = state_21596__$1;
(statearr_21635_22039[(1)] = (41));

(statearr_21635_22039[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_21597 === (11))){
var inst_21416 = (state_21596[(2)]);
var state_21596__$1 = (function (){var statearr_21636 = state_21596;
(statearr_21636[(14)] = inst_21416);

return statearr_21636;
})();
var statearr_21637_22040 = state_21596__$1;
(statearr_21637_22040[(2)] = null);

(statearr_21637_22040[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_21597 === (43))){
var _ = (function (){var statearr_21638 = state_21596;
(statearr_21638[(4)] = cljs.core.rest.call(null,(state_21596[(4)])));

return statearr_21638;
})();
var state_21596__$1 = state_21596;
var ex21632 = (state_21596__$1[(2)]);
var statearr_21639_22041 = state_21596__$1;
(statearr_21639_22041[(5)] = ex21632);


if((ex21632 instanceof Error)){
var statearr_21640_22042 = state_21596__$1;
(statearr_21640_22042[(1)] = (38));

(statearr_21640_22042[(5)] = null);

} else {
throw ex21632;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_21597 === (12))){
var inst_21409 = (state_21596[(13)]);
var _ = (function (){var statearr_21641 = state_21596;
(statearr_21641[(4)] = cljs.core.cons.call(null,(15),(state_21596[(4)])));

return statearr_21641;
})();
var state_21596__$1 = state_21596;
if(cljs.core.truth_(inst_21409)){
var statearr_21642_22043 = state_21596__$1;
(statearr_21642_22043[(1)] = (16));

} else {
var statearr_21643_22044 = state_21596__$1;
(statearr_21643_22044[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_21597 === (44))){
var inst_21549 = (state_21596[(15)]);
var inst_21549__$1 = (state_21596[(2)]);
var inst_21550 = (inst_21549__$1 instanceof cljs.core.ExceptionInfo);
var inst_21551 = cljs.core.ex_data.call(null,inst_21549__$1);
var inst_21552 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_21551);
var inst_21553 = cljs.core._EQ_.call(null,inst_21552,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_21554 = ((inst_21550) && (inst_21553));
var state_21596__$1 = (function (){var statearr_21644 = state_21596;
(statearr_21644[(15)] = inst_21549__$1);

return statearr_21644;
})();
if(cljs.core.truth_(inst_21554)){
var statearr_21645_22045 = state_21596__$1;
(statearr_21645_22045[(1)] = (45));

} else {
var statearr_21646_22046 = state_21596__$1;
(statearr_21646_22046[(1)] = (46));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_21597 === (13))){
var inst_21444 = (state_21596[(2)]);
var state_21596__$1 = state_21596;
var statearr_21647_22047 = state_21596__$1;
(statearr_21647_22047[(2)] = inst_21444);

(statearr_21647_22047[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_21597 === (45))){
var inst_21549 = (state_21596[(15)]);
var inst_21556 = (function(){throw inst_21549})();
var state_21596__$1 = state_21596;
var statearr_21648_22048 = state_21596__$1;
(statearr_21648_22048[(2)] = inst_21556);

(statearr_21648_22048[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_21597 === (14))){
var inst_21417 = (state_21596[(2)]);
var inst_21418 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_21419 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_21420 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"cycle needs to be in the past",inst_21419,inst_21417];
var inst_21421 = cljs.core.PersistentHashMap.fromArrays(inst_21418,inst_21420);
var inst_21422 = cljs.test.do_report.call(null,inst_21421);
var state_21596__$1 = state_21596;
var statearr_21650_22049 = state_21596__$1;
(statearr_21650_22049[(2)] = inst_21422);

(statearr_21650_22049[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_21597 === (46))){
var inst_21549 = (state_21596[(15)]);
var state_21596__$1 = state_21596;
var statearr_21651_22050 = state_21596__$1;
(statearr_21651_22050[(2)] = inst_21549);

(statearr_21651_22050[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_21597 === (15))){
var _ = (function (){var statearr_21652 = state_21596;
(statearr_21652[(4)] = cljs.core.rest.call(null,(state_21596[(4)])));

return statearr_21652;
})();
var state_21596__$1 = state_21596;
var ex21649 = (state_21596__$1[(2)]);
var statearr_21653_22051 = state_21596__$1;
(statearr_21653_22051[(5)] = ex21649);


var statearr_21654_22052 = state_21596__$1;
(statearr_21654_22052[(1)] = (14));

(statearr_21654_22052[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_21597 === (47))){
var inst_21559 = (state_21596[(2)]);
var state_21596__$1 = (function (){var statearr_21655 = state_21596;
(statearr_21655[(16)] = inst_21559);

return statearr_21655;
})();
var statearr_21656_22053 = state_21596__$1;
(statearr_21656_22053[(2)] = null);

(statearr_21656_22053[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_21597 === (16))){
var inst_21409 = (state_21596[(13)]);
var inst_21429 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_21430 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_21431 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"cycle needs to be in the past",inst_21430,inst_21409];
var inst_21432 = cljs.core.PersistentHashMap.fromArrays(inst_21429,inst_21431);
var inst_21433 = cljs.test.do_report.call(null,inst_21432);
var state_21596__$1 = state_21596;
var statearr_21657_22054 = state_21596__$1;
(statearr_21657_22054[(2)] = inst_21433);

(statearr_21657_22054[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_21597 === (48))){
var _ = (function (){var statearr_21658 = state_21596;
(statearr_21658[(4)] = cljs.core.cons.call(null,(51),(state_21596[(4)])));

return statearr_21658;
})();
var state_21596__$1 = state_21596;
var statearr_21659_22055 = state_21596__$1;
(statearr_21659_22055[(1)] = (52));



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_21597 === (17))){
var inst_21409 = (state_21596[(13)]);
var inst_21435 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_21436 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_21437 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"cycle needs to be in the past",inst_21436,inst_21409];
var inst_21438 = cljs.core.PersistentHashMap.fromArrays(inst_21435,inst_21437);
var inst_21439 = cljs.test.do_report.call(null,inst_21438);
var state_21596__$1 = state_21596;
var statearr_21661_22056 = state_21596__$1;
(statearr_21661_22056[(2)] = inst_21439);

(statearr_21661_22056[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_21597 === (49))){
var inst_21587 = (state_21596[(2)]);
var _ = (function (){var statearr_21662 = state_21596;
(statearr_21662[(4)] = cljs.core.rest.call(null,(state_21596[(4)])));

return statearr_21662;
})();
var state_21596__$1 = state_21596;
var statearr_21663_22057 = state_21596__$1;
(statearr_21663_22057[(2)] = inst_21587);

(statearr_21663_22057[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_21597 === (18))){
var inst_21409 = (state_21596[(13)]);
var inst_21441 = (state_21596[(2)]);
var _ = (function (){var statearr_21665 = state_21596;
(statearr_21665[(4)] = cljs.core.rest.call(null,(state_21596[(4)])));

return statearr_21665;
})();
var state_21596__$1 = (function (){var statearr_21666 = state_21596;
(statearr_21666[(17)] = inst_21441);

return statearr_21666;
})();
var statearr_21667_22058 = state_21596__$1;
(statearr_21667_22058[(2)] = inst_21409);

(statearr_21667_22058[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_21597 === (50))){
var inst_21560 = (state_21596[(2)]);
var inst_21561 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_21562 = true;
var inst_21563 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can finalize cycle",inst_21562,inst_21560];
var inst_21564 = cljs.core.PersistentHashMap.fromArrays(inst_21561,inst_21563);
var inst_21565 = cljs.test.do_report.call(null,inst_21564);
var state_21596__$1 = state_21596;
var statearr_21669_22059 = state_21596__$1;
(statearr_21669_22059[(2)] = inst_21565);

(statearr_21669_22059[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_21597 === (19))){
var _ = (function (){var statearr_21670 = state_21596;
(statearr_21670[(4)] = cljs.core.rest.call(null,(state_21596[(4)])));

return statearr_21670;
})();
var state_21596__$1 = state_21596;
var ex21664 = (state_21596__$1[(2)]);
var statearr_21671_22060 = state_21596__$1;
(statearr_21671_22060[(5)] = ex21664);


if((ex21664 instanceof Error)){
var statearr_21672_22061 = state_21596__$1;
(statearr_21672_22061[(1)] = (8));

(statearr_21672_22061[(5)] = null);

} else {
throw ex21664;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_21597 === (51))){
var _ = (function (){var statearr_21673 = state_21596;
(statearr_21673[(4)] = cljs.core.rest.call(null,(state_21596[(4)])));

return statearr_21673;
})();
var state_21596__$1 = state_21596;
var ex21668 = (state_21596__$1[(2)]);
var statearr_21674_22062 = state_21596__$1;
(statearr_21674_22062[(5)] = ex21668);


var statearr_21675_22063 = state_21596__$1;
(statearr_21675_22063[(1)] = (50));

(statearr_21675_22063[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_21597 === (20))){
var inst_21456 = (state_21596[(18)]);
var inst_21456__$1 = (state_21596[(2)]);
var inst_21457 = (inst_21456__$1 instanceof cljs.core.ExceptionInfo);
var inst_21458 = cljs.core.ex_data.call(null,inst_21456__$1);
var inst_21459 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_21458);
var inst_21460 = cljs.core._EQ_.call(null,inst_21459,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_21461 = ((inst_21457) && (inst_21460));
var state_21596__$1 = (function (){var statearr_21676 = state_21596;
(statearr_21676[(18)] = inst_21456__$1);

return statearr_21676;
})();
if(cljs.core.truth_(inst_21461)){
var statearr_21677_22064 = state_21596__$1;
(statearr_21677_22064[(1)] = (21));

} else {
var statearr_21678_22065 = state_21596__$1;
(statearr_21678_22065[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_21597 === (52))){
var inst_21572 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_21573 = true;
var inst_21574 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"can finalize cycle",inst_21573,true];
var inst_21575 = cljs.core.PersistentHashMap.fromArrays(inst_21572,inst_21574);
var inst_21576 = cljs.test.do_report.call(null,inst_21575);
var state_21596__$1 = state_21596;
var statearr_21679_22066 = state_21596__$1;
(statearr_21679_22066[(2)] = inst_21576);

(statearr_21679_22066[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_21597 === (21))){
var inst_21456 = (state_21596[(18)]);
var inst_21463 = (function(){throw inst_21456})();
var state_21596__$1 = state_21596;
var statearr_21680_22067 = state_21596__$1;
(statearr_21680_22067[(2)] = inst_21463);

(statearr_21680_22067[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_21597 === (53))){
var inst_21578 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_21579 = true;
var inst_21580 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can finalize cycle",inst_21579,true];
var inst_21581 = cljs.core.PersistentHashMap.fromArrays(inst_21578,inst_21580);
var inst_21582 = cljs.test.do_report.call(null,inst_21581);
var state_21596__$1 = state_21596;
var statearr_21681_22068 = state_21596__$1;
(statearr_21681_22068[(2)] = inst_21582);

(statearr_21681_22068[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_21597 === (22))){
var inst_21456 = (state_21596[(18)]);
var state_21596__$1 = state_21596;
var statearr_21682_22069 = state_21596__$1;
(statearr_21682_22069[(2)] = inst_21456);

(statearr_21682_22069[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_21597 === (54))){
var inst_21584 = (state_21596[(2)]);
var _ = (function (){var statearr_21683 = state_21596;
(statearr_21683[(4)] = cljs.core.rest.call(null,(state_21596[(4)])));

return statearr_21683;
})();
var state_21596__$1 = (function (){var statearr_21684 = state_21596;
(statearr_21684[(19)] = inst_21584);

return statearr_21684;
})();
var statearr_21685_22070 = state_21596__$1;
(statearr_21685_22070[(2)] = true);

(statearr_21685_22070[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_21597 === (23))){
var inst_21466 = (state_21596[(2)]);
var state_21596__$1 = (function (){var statearr_21686 = state_21596;
(statearr_21686[(20)] = inst_21466);

return statearr_21686;
})();
var statearr_21687_22071 = state_21596__$1;
(statearr_21687_22071[(2)] = null);

(statearr_21687_22071[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_21597 === (24))){
var _ = (function (){var statearr_21688 = state_21596;
(statearr_21688[(4)] = cljs.core.cons.call(null,(27),(state_21596[(4)])));

return statearr_21688;
})();
var inst_21478 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_21479 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"cycle needs to be in the past"];
var inst_21480 = cljs.core.PersistentHashMap.fromArrays(inst_21478,inst_21479);
var inst_21481 = cljs.test.do_report.call(null,inst_21480);
var ___$1 = (function (){var statearr_21689 = state_21596;
(statearr_21689[(4)] = cljs.core.rest.call(null,(state_21596[(4)])));

return statearr_21689;
})();
var state_21596__$1 = state_21596;
var statearr_21690_22072 = state_21596__$1;
(statearr_21690_22072[(2)] = inst_21481);

(statearr_21690_22072[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_21597 === (25))){
var inst_21484 = (state_21596[(2)]);
var _ = (function (){var statearr_21692 = state_21596;
(statearr_21692[(4)] = cljs.core.rest.call(null,(state_21596[(4)])));

return statearr_21692;
})();
var state_21596__$1 = state_21596;
var statearr_21693_22073 = state_21596__$1;
(statearr_21693_22073[(2)] = inst_21484);

(statearr_21693_22073[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_21597 === (26))){
var inst_21467 = (state_21596[(2)]);
var inst_21468 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_21469 = null;
var inst_21470 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"cycle needs to be in the past",inst_21469,inst_21467];
var inst_21471 = cljs.core.PersistentHashMap.fromArrays(inst_21468,inst_21470);
var inst_21472 = cljs.test.do_report.call(null,inst_21471);
var state_21596__$1 = state_21596;
var statearr_21694_22074 = state_21596__$1;
(statearr_21694_22074[(2)] = inst_21472);

(statearr_21694_22074[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_21597 === (27))){
var _ = (function (){var statearr_21695 = state_21596;
(statearr_21695[(4)] = cljs.core.rest.call(null,(state_21596[(4)])));

return statearr_21695;
})();
var state_21596__$1 = state_21596;
var ex21691 = (state_21596__$1[(2)]);
var statearr_21696_22075 = state_21596__$1;
(statearr_21696_22075[(5)] = ex21691);


var statearr_21697_22076 = state_21596__$1;
(statearr_21697_22076[(1)] = (26));

(statearr_21697_22076[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_21597 === (28))){
var inst_21492 = (state_21596[(21)]);
var inst_21492__$1 = (state_21596[(2)]);
var inst_21493 = (inst_21492__$1 instanceof cljs.core.ExceptionInfo);
var inst_21494 = cljs.core.ex_data.call(null,inst_21492__$1);
var inst_21495 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_21494);
var inst_21496 = cljs.core._EQ_.call(null,inst_21495,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_21497 = ((inst_21493) && (inst_21496));
var state_21596__$1 = (function (){var statearr_21698 = state_21596;
(statearr_21698[(21)] = inst_21492__$1);

return statearr_21698;
})();
if(cljs.core.truth_(inst_21497)){
var statearr_21699_22077 = state_21596__$1;
(statearr_21699_22077[(1)] = (29));

} else {
var statearr_21700_22078 = state_21596__$1;
(statearr_21700_22078[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_21597 === (29))){
var inst_21492 = (state_21596[(21)]);
var inst_21499 = (function(){throw inst_21492})();
var state_21596__$1 = state_21596;
var statearr_21701_22079 = state_21596__$1;
(statearr_21701_22079[(2)] = inst_21499);

(statearr_21701_22079[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_21597 === (30))){
var inst_21492 = (state_21596[(21)]);
var state_21596__$1 = state_21596;
var statearr_21702_22080 = state_21596__$1;
(statearr_21702_22080[(2)] = inst_21492);

(statearr_21702_22080[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_21597 === (31))){
var inst_21502 = (state_21596[(2)]);
var inst_21503 = cljs.core.PersistentHashMap.EMPTY;
var inst_21504 = eos_cljs.core.transact.call(null,e2e.proposals.prop_acc,"cycleupdate",inst_21503);
var inst_21505 = cljs.core.async.interop.p__GT_c.call(null,inst_21504);
var state_21596__$1 = (function (){var statearr_21703 = state_21596;
(statearr_21703[(22)] = inst_21502);

return statearr_21703;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21596__$1,(32),inst_21505);
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
});})(c__19__auto__,___192__auto__,self____$1))
;
return ((function (switch__14__auto__,c__19__auto__,___192__auto__,self____$1){
return (function() {
var e2e$proposals$state_machine__15__auto__ = null;
var e2e$proposals$state_machine__15__auto____0 = (function (){
var statearr_21704 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21704[(0)] = e2e$proposals$state_machine__15__auto__);

(statearr_21704[(1)] = (1));

return statearr_21704;
});
var e2e$proposals$state_machine__15__auto____1 = (function (state_21596){
while(true){
var ret_value__16__auto__ = (function (){try{while(true){
var result__17__auto__ = switch__14__auto__.call(null,state_21596);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__17__auto__;
}
break;
}
}catch (e21705){var ex__18__auto__ = e21705;
var statearr_21706_22081 = state_21596;
(statearr_21706_22081[(2)] = ex__18__auto__);


if(cljs.core.seq.call(null,(state_21596[(4)]))){
var statearr_21707_22082 = state_21596;
(statearr_21707_22082[(1)] = cljs.core.first.call(null,(state_21596[(4)])));

} else {
throw ex__18__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__22083 = state_21596;
state_21596 = G__22083;
continue;
} else {
return ret_value__16__auto__;
}
break;
}
});
e2e$proposals$state_machine__15__auto__ = function(state_21596){
switch(arguments.length){
case 0:
return e2e$proposals$state_machine__15__auto____0.call(this);
case 1:
return e2e$proposals$state_machine__15__auto____1.call(this,state_21596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
e2e$proposals$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$0 = e2e$proposals$state_machine__15__auto____0;
e2e$proposals$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$1 = e2e$proposals$state_machine__15__auto____1;
return e2e$proposals$state_machine__15__auto__;
})()
;})(switch__14__auto__,c__19__auto__,___192__auto__,self____$1))
})();
var state__21__auto__ = (function (){var statearr_21708 = f__20__auto__.call(null);
(statearr_21708[(6)] = c__19__auto__);

return statearr_21708;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21__auto__);
});})(c__19__auto__,___192__auto__,self____$1))
);

return c__19__auto__;
});

e2e.proposals.t_e2e$proposals21395.prototype.apply = (function (self__,args21398){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args21398)));
});

e2e.proposals.t_e2e$proposals21395.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___192__auto__ = this;
var c__19__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19__auto__,___192__auto__){
return (function (){
var f__20__auto__ = (function (){var switch__14__auto__ = ((function (c__19__auto__,___192__auto__){
return (function (state_21906){
var state_val_21907 = (state_21906[(1)]);
if((state_val_21907 === (32))){
var inst_21817 = (state_21906[(7)]);
var inst_21817__$1 = (state_21906[(2)]);
var inst_21818 = (inst_21817__$1 instanceof cljs.core.ExceptionInfo);
var inst_21819 = cljs.core.ex_data.call(null,inst_21817__$1);
var inst_21820 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_21819);
var inst_21821 = cljs.core._EQ_.call(null,inst_21820,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_21822 = ((inst_21818) && (inst_21821));
var state_21906__$1 = (function (){var statearr_21908 = state_21906;
(statearr_21908[(7)] = inst_21817__$1);

return statearr_21908;
})();
if(cljs.core.truth_(inst_21822)){
var statearr_21909_22084 = state_21906__$1;
(statearr_21909_22084[(1)] = (33));

} else {
var statearr_21910_22085 = state_21906__$1;
(statearr_21910_22085[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_21907 === (1))){
var state_21906__$1 = state_21906;
var statearr_21911_22086 = state_21906__$1;
(statearr_21911_22086[(2)] = null);

(statearr_21911_22086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_21907 === (33))){
var inst_21817 = (state_21906[(7)]);
var inst_21824 = (function(){throw inst_21817})();
var state_21906__$1 = state_21906;
var statearr_21912_22087 = state_21906__$1;
(statearr_21912_22087[(2)] = inst_21824);

(statearr_21912_22087[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_21907 === (2))){
var _ = (function (){var statearr_21913 = state_21906;
(statearr_21913[(4)] = cljs.core.cons.call(null,(5),(state_21906[(4)])));

return statearr_21913;
})();
var state_21906__$1 = state_21906;
var statearr_21914_22088 = state_21906__$1;
(statearr_21914_22088[(2)] = null);

(statearr_21914_22088[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_21907 === (34))){
var inst_21817 = (state_21906[(7)]);
var state_21906__$1 = state_21906;
var statearr_21915_22089 = state_21906__$1;
(statearr_21915_22089[(2)] = inst_21817);

(statearr_21915_22089[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_21907 === (3))){
var inst_21903 = (state_21906[(2)]);
var inst_21904 = done.call(null);
var state_21906__$1 = (function (){var statearr_21916 = state_21906;
(statearr_21916[(8)] = inst_21903);

return statearr_21916;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21906__$1,inst_21904);
} else {
if((state_val_21907 === (35))){
var inst_21827 = (state_21906[(2)]);
var state_21906__$1 = (function (){var statearr_21917 = state_21906;
(statearr_21917[(9)] = inst_21827);

return statearr_21917;
})();
var statearr_21918_22090 = state_21906__$1;
(statearr_21918_22090[(2)] = null);

(statearr_21918_22090[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_21907 === (4))){
var inst_21709 = (state_21906[(2)]);
var inst_21710 = cljs.core.prn.call(null,inst_21709);
var state_21906__$1 = state_21906;
var statearr_21920_22091 = state_21906__$1;
(statearr_21920_22091[(2)] = inst_21710);

(statearr_21920_22091[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_21907 === (36))){
var _ = (function (){var statearr_21921 = state_21906;
(statearr_21921[(4)] = cljs.core.cons.call(null,(43),(state_21906[(4)])));

return statearr_21921;
})();
var inst_21853 = [new cljs.core.Keyword(null,"account","account",(718006320)),new cljs.core.Keyword(null,"id","id",(-1388402092))];
var inst_21854 = [e2e.proposals.owner_acc,(2)];
var inst_21855 = cljs.core.PersistentHashMap.fromArrays(inst_21853,inst_21854);
var inst_21856 = e2e.proposals.eos_tx_owner.call(null,e2e.proposals.prop_acc,"processcycle",inst_21855);
var inst_21857 = cljs.core.async.interop.p__GT_c.call(null,inst_21856);
var state_21906__$1 = state_21906;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21906__$1,(44),inst_21857);
} else {
if((state_val_21907 === (5))){
var _ = (function (){var statearr_21922 = state_21906;
(statearr_21922[(4)] = cljs.core.rest.call(null,(state_21906[(4)])));

return statearr_21922;
})();
var state_21906__$1 = state_21906;
var ex21919 = (state_21906__$1[(2)]);
var statearr_21923_22092 = state_21906__$1;
(statearr_21923_22092[(5)] = ex21919);


if((ex21919 instanceof Error)){
var statearr_21924_22093 = state_21906__$1;
(statearr_21924_22093[(1)] = (4));

(statearr_21924_22093[(5)] = null);

} else {
throw ex21919;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_21907 === (37))){
var inst_21900 = (state_21906[(2)]);
var _ = (function (){var statearr_21925 = state_21906;
(statearr_21925[(4)] = cljs.core.rest.call(null,(state_21906[(4)])));

return statearr_21925;
})();
var state_21906__$1 = state_21906;
var statearr_21926_22094 = state_21906__$1;
(statearr_21926_22094[(2)] = inst_21900);

(statearr_21926_22094[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_21907 === (6))){
var _ = (function (){var statearr_21927 = state_21906;
(statearr_21927[(4)] = cljs.core.cons.call(null,(19),(state_21906[(4)])));

return statearr_21927;
})();
var inst_21760 = [new cljs.core.Keyword(null,"account","account",(718006320)),new cljs.core.Keyword(null,"id","id",(-1388402092))];
var inst_21761 = [e2e.proposals.owner_acc,(2)];
var inst_21762 = cljs.core.PersistentHashMap.fromArrays(inst_21760,inst_21761);
var inst_21763 = e2e.proposals.eos_tx_owner.call(null,e2e.proposals.prop_acc,"processcycle",inst_21762);
var inst_21764 = cljs.core.async.interop.p__GT_c.call(null,inst_21763);
var state_21906__$1 = state_21906;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21906__$1,(20),inst_21764);
} else {
if((state_val_21907 === (38))){
var inst_21828 = (state_21906[(2)]);
var inst_21829 = cljs.core.prn.call(null,"test failed with ",inst_21828);
var state_21906__$1 = (function (){var statearr_21928 = state_21906;
(statearr_21928[(10)] = inst_21829);

return statearr_21928;
})();
var statearr_21929_22095 = state_21906__$1;
(statearr_21929_22095[(2)] = null);

(statearr_21929_22095[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_21907 === (7))){
var inst_21797 = (state_21906[(2)]);
var inst_21798 = cljs.core.assoc.call(null,e2e.proposals.prop_config,new cljs.core.Keyword(null,"cycle_duration_sec","cycle_duration_sec",(2139129571)),(1));
var inst_21799 = eos_cljs.core.transact.call(null,e2e.proposals.prop_acc,"update",inst_21798);
var inst_21800 = cljs.core.async.interop.p__GT_c.call(null,inst_21799);
var state_21906__$1 = (function (){var statearr_21930 = state_21906;
(statearr_21930[(11)] = inst_21797);

return statearr_21930;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21906__$1,(28),inst_21800);
} else {
if((state_val_21907 === (39))){
var _ = (function (){var statearr_21931 = state_21906;
(statearr_21931[(4)] = cljs.core.cons.call(null,(42),(state_21906[(4)])));

return statearr_21931;
})();
var inst_21841 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_21842 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can finalize cycle"];
var inst_21843 = cljs.core.PersistentHashMap.fromArrays(inst_21841,inst_21842);
var inst_21844 = cljs.test.do_report.call(null,inst_21843);
var ___$1 = (function (){var statearr_21932 = state_21906;
(statearr_21932[(4)] = cljs.core.rest.call(null,(state_21906[(4)])));

return statearr_21932;
})();
var state_21906__$1 = state_21906;
var statearr_21933_22096 = state_21906__$1;
(statearr_21933_22096[(2)] = inst_21844);

(statearr_21933_22096[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_21907 === (8))){
var inst_21718 = (state_21906[(12)]);
var inst_21719 = (state_21906[(13)]);
var inst_21716 = (state_21906[(2)]);
var inst_21717 = inst_21716.cause;
var inst_21718__$1 = inst_21717.message;
var inst_21719__$1 = clojure.string.ends_with_QMARK_.call(null,inst_21718__$1,"cycle is not in the past");
var inst_21720 = (!(inst_21719__$1));
var state_21906__$1 = (function (){var statearr_21934 = state_21906;
(statearr_21934[(12)] = inst_21718__$1);

(statearr_21934[(13)] = inst_21719__$1);

return statearr_21934;
})();
if(inst_21720){
var statearr_21935_22097 = state_21906__$1;
(statearr_21935_22097[(1)] = (9));

} else {
var statearr_21936_22098 = state_21906__$1;
(statearr_21936_22098[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_21907 === (40))){
var inst_21847 = (state_21906[(2)]);
var state_21906__$1 = state_21906;
var statearr_21937_22099 = state_21906__$1;
(statearr_21937_22099[(2)] = inst_21847);

(statearr_21937_22099[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_21907 === (9))){
var inst_21718 = (state_21906[(12)]);
var inst_21722 = ["expected =","cycle is not in the past"," actual = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_21718)].join('');
var inst_21723 = cljs.core.prn.call(null,inst_21722);
var state_21906__$1 = state_21906;
var statearr_21938_22100 = state_21906__$1;
(statearr_21938_22100[(2)] = inst_21723);

(statearr_21938_22100[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_21907 === (41))){
var inst_21830 = (state_21906[(2)]);
var inst_21831 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_21832 = null;
var inst_21833 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can finalize cycle",inst_21832,inst_21830];
var inst_21834 = cljs.core.PersistentHashMap.fromArrays(inst_21831,inst_21833);
var inst_21835 = cljs.test.do_report.call(null,inst_21834);
var state_21906__$1 = state_21906;
var statearr_21940_22101 = state_21906__$1;
(statearr_21940_22101[(2)] = inst_21835);

(statearr_21940_22101[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_21907 === (10))){
var state_21906__$1 = state_21906;
var statearr_21941_22102 = state_21906__$1;
(statearr_21941_22102[(2)] = null);

(statearr_21941_22102[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_21907 === (42))){
var _ = (function (){var statearr_21943 = state_21906;
(statearr_21943[(4)] = cljs.core.rest.call(null,(state_21906[(4)])));

return statearr_21943;
})();
var state_21906__$1 = state_21906;
var ex21939 = (state_21906__$1[(2)]);
var statearr_21944_22103 = state_21906__$1;
(statearr_21944_22103[(5)] = ex21939);


var statearr_21945_22104 = state_21906__$1;
(statearr_21945_22104[(1)] = (41));

(statearr_21945_22104[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_21907 === (11))){
var inst_21726 = (state_21906[(2)]);
var state_21906__$1 = (function (){var statearr_21946 = state_21906;
(statearr_21946[(14)] = inst_21726);

return statearr_21946;
})();
var statearr_21947_22105 = state_21906__$1;
(statearr_21947_22105[(2)] = null);

(statearr_21947_22105[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_21907 === (43))){
var _ = (function (){var statearr_21948 = state_21906;
(statearr_21948[(4)] = cljs.core.rest.call(null,(state_21906[(4)])));

return statearr_21948;
})();
var state_21906__$1 = state_21906;
var ex21942 = (state_21906__$1[(2)]);
var statearr_21949_22106 = state_21906__$1;
(statearr_21949_22106[(5)] = ex21942);


if((ex21942 instanceof Error)){
var statearr_21950_22107 = state_21906__$1;
(statearr_21950_22107[(1)] = (38));

(statearr_21950_22107[(5)] = null);

} else {
throw ex21942;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_21907 === (12))){
var inst_21719 = (state_21906[(13)]);
var _ = (function (){var statearr_21951 = state_21906;
(statearr_21951[(4)] = cljs.core.cons.call(null,(15),(state_21906[(4)])));

return statearr_21951;
})();
var state_21906__$1 = state_21906;
if(cljs.core.truth_(inst_21719)){
var statearr_21952_22108 = state_21906__$1;
(statearr_21952_22108[(1)] = (16));

} else {
var statearr_21953_22109 = state_21906__$1;
(statearr_21953_22109[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_21907 === (44))){
var inst_21859 = (state_21906[(15)]);
var inst_21859__$1 = (state_21906[(2)]);
var inst_21860 = (inst_21859__$1 instanceof cljs.core.ExceptionInfo);
var inst_21861 = cljs.core.ex_data.call(null,inst_21859__$1);
var inst_21862 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_21861);
var inst_21863 = cljs.core._EQ_.call(null,inst_21862,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_21864 = ((inst_21860) && (inst_21863));
var state_21906__$1 = (function (){var statearr_21954 = state_21906;
(statearr_21954[(15)] = inst_21859__$1);

return statearr_21954;
})();
if(cljs.core.truth_(inst_21864)){
var statearr_21955_22110 = state_21906__$1;
(statearr_21955_22110[(1)] = (45));

} else {
var statearr_21956_22111 = state_21906__$1;
(statearr_21956_22111[(1)] = (46));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_21907 === (13))){
var inst_21754 = (state_21906[(2)]);
var state_21906__$1 = state_21906;
var statearr_21957_22112 = state_21906__$1;
(statearr_21957_22112[(2)] = inst_21754);

(statearr_21957_22112[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_21907 === (45))){
var inst_21859 = (state_21906[(15)]);
var inst_21866 = (function(){throw inst_21859})();
var state_21906__$1 = state_21906;
var statearr_21958_22113 = state_21906__$1;
(statearr_21958_22113[(2)] = inst_21866);

(statearr_21958_22113[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_21907 === (14))){
var inst_21727 = (state_21906[(2)]);
var inst_21728 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_21729 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_21730 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"cycle needs to be in the past",inst_21729,inst_21727];
var inst_21731 = cljs.core.PersistentHashMap.fromArrays(inst_21728,inst_21730);
var inst_21732 = cljs.test.do_report.call(null,inst_21731);
var state_21906__$1 = state_21906;
var statearr_21960_22114 = state_21906__$1;
(statearr_21960_22114[(2)] = inst_21732);

(statearr_21960_22114[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_21907 === (46))){
var inst_21859 = (state_21906[(15)]);
var state_21906__$1 = state_21906;
var statearr_21961_22115 = state_21906__$1;
(statearr_21961_22115[(2)] = inst_21859);

(statearr_21961_22115[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_21907 === (15))){
var _ = (function (){var statearr_21962 = state_21906;
(statearr_21962[(4)] = cljs.core.rest.call(null,(state_21906[(4)])));

return statearr_21962;
})();
var state_21906__$1 = state_21906;
var ex21959 = (state_21906__$1[(2)]);
var statearr_21963_22116 = state_21906__$1;
(statearr_21963_22116[(5)] = ex21959);


var statearr_21964_22117 = state_21906__$1;
(statearr_21964_22117[(1)] = (14));

(statearr_21964_22117[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_21907 === (47))){
var inst_21869 = (state_21906[(2)]);
var state_21906__$1 = (function (){var statearr_21965 = state_21906;
(statearr_21965[(16)] = inst_21869);

return statearr_21965;
})();
var statearr_21966_22118 = state_21906__$1;
(statearr_21966_22118[(2)] = null);

(statearr_21966_22118[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_21907 === (16))){
var inst_21719 = (state_21906[(13)]);
var inst_21739 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_21740 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_21741 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"cycle needs to be in the past",inst_21740,inst_21719];
var inst_21742 = cljs.core.PersistentHashMap.fromArrays(inst_21739,inst_21741);
var inst_21743 = cljs.test.do_report.call(null,inst_21742);
var state_21906__$1 = state_21906;
var statearr_21967_22119 = state_21906__$1;
(statearr_21967_22119[(2)] = inst_21743);

(statearr_21967_22119[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_21907 === (48))){
var _ = (function (){var statearr_21968 = state_21906;
(statearr_21968[(4)] = cljs.core.cons.call(null,(51),(state_21906[(4)])));

return statearr_21968;
})();
var state_21906__$1 = state_21906;
var statearr_21969_22120 = state_21906__$1;
(statearr_21969_22120[(1)] = (52));



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_21907 === (17))){
var inst_21719 = (state_21906[(13)]);
var inst_21745 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_21746 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_21747 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"cycle needs to be in the past",inst_21746,inst_21719];
var inst_21748 = cljs.core.PersistentHashMap.fromArrays(inst_21745,inst_21747);
var inst_21749 = cljs.test.do_report.call(null,inst_21748);
var state_21906__$1 = state_21906;
var statearr_21971_22121 = state_21906__$1;
(statearr_21971_22121[(2)] = inst_21749);

(statearr_21971_22121[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_21907 === (49))){
var inst_21897 = (state_21906[(2)]);
var _ = (function (){var statearr_21972 = state_21906;
(statearr_21972[(4)] = cljs.core.rest.call(null,(state_21906[(4)])));

return statearr_21972;
})();
var state_21906__$1 = state_21906;
var statearr_21973_22122 = state_21906__$1;
(statearr_21973_22122[(2)] = inst_21897);

(statearr_21973_22122[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_21907 === (18))){
var inst_21719 = (state_21906[(13)]);
var inst_21751 = (state_21906[(2)]);
var _ = (function (){var statearr_21975 = state_21906;
(statearr_21975[(4)] = cljs.core.rest.call(null,(state_21906[(4)])));

return statearr_21975;
})();
var state_21906__$1 = (function (){var statearr_21976 = state_21906;
(statearr_21976[(17)] = inst_21751);

return statearr_21976;
})();
var statearr_21977_22123 = state_21906__$1;
(statearr_21977_22123[(2)] = inst_21719);

(statearr_21977_22123[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_21907 === (50))){
var inst_21870 = (state_21906[(2)]);
var inst_21871 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_21872 = true;
var inst_21873 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can finalize cycle",inst_21872,inst_21870];
var inst_21874 = cljs.core.PersistentHashMap.fromArrays(inst_21871,inst_21873);
var inst_21875 = cljs.test.do_report.call(null,inst_21874);
var state_21906__$1 = state_21906;
var statearr_21979_22124 = state_21906__$1;
(statearr_21979_22124[(2)] = inst_21875);

(statearr_21979_22124[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_21907 === (19))){
var _ = (function (){var statearr_21980 = state_21906;
(statearr_21980[(4)] = cljs.core.rest.call(null,(state_21906[(4)])));

return statearr_21980;
})();
var state_21906__$1 = state_21906;
var ex21974 = (state_21906__$1[(2)]);
var statearr_21981_22125 = state_21906__$1;
(statearr_21981_22125[(5)] = ex21974);


if((ex21974 instanceof Error)){
var statearr_21982_22126 = state_21906__$1;
(statearr_21982_22126[(1)] = (8));

(statearr_21982_22126[(5)] = null);

} else {
throw ex21974;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_21907 === (51))){
var _ = (function (){var statearr_21983 = state_21906;
(statearr_21983[(4)] = cljs.core.rest.call(null,(state_21906[(4)])));

return statearr_21983;
})();
var state_21906__$1 = state_21906;
var ex21978 = (state_21906__$1[(2)]);
var statearr_21984_22127 = state_21906__$1;
(statearr_21984_22127[(5)] = ex21978);


var statearr_21985_22128 = state_21906__$1;
(statearr_21985_22128[(1)] = (50));

(statearr_21985_22128[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_21907 === (20))){
var inst_21766 = (state_21906[(18)]);
var inst_21766__$1 = (state_21906[(2)]);
var inst_21767 = (inst_21766__$1 instanceof cljs.core.ExceptionInfo);
var inst_21768 = cljs.core.ex_data.call(null,inst_21766__$1);
var inst_21769 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_21768);
var inst_21770 = cljs.core._EQ_.call(null,inst_21769,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_21771 = ((inst_21767) && (inst_21770));
var state_21906__$1 = (function (){var statearr_21986 = state_21906;
(statearr_21986[(18)] = inst_21766__$1);

return statearr_21986;
})();
if(cljs.core.truth_(inst_21771)){
var statearr_21987_22129 = state_21906__$1;
(statearr_21987_22129[(1)] = (21));

} else {
var statearr_21988_22130 = state_21906__$1;
(statearr_21988_22130[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_21907 === (52))){
var inst_21882 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_21883 = true;
var inst_21884 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"can finalize cycle",inst_21883,true];
var inst_21885 = cljs.core.PersistentHashMap.fromArrays(inst_21882,inst_21884);
var inst_21886 = cljs.test.do_report.call(null,inst_21885);
var state_21906__$1 = state_21906;
var statearr_21989_22131 = state_21906__$1;
(statearr_21989_22131[(2)] = inst_21886);

(statearr_21989_22131[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_21907 === (21))){
var inst_21766 = (state_21906[(18)]);
var inst_21773 = (function(){throw inst_21766})();
var state_21906__$1 = state_21906;
var statearr_21990_22132 = state_21906__$1;
(statearr_21990_22132[(2)] = inst_21773);

(statearr_21990_22132[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_21907 === (53))){
var inst_21888 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_21889 = true;
var inst_21890 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can finalize cycle",inst_21889,true];
var inst_21891 = cljs.core.PersistentHashMap.fromArrays(inst_21888,inst_21890);
var inst_21892 = cljs.test.do_report.call(null,inst_21891);
var state_21906__$1 = state_21906;
var statearr_21991_22133 = state_21906__$1;
(statearr_21991_22133[(2)] = inst_21892);

(statearr_21991_22133[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_21907 === (22))){
var inst_21766 = (state_21906[(18)]);
var state_21906__$1 = state_21906;
var statearr_21992_22134 = state_21906__$1;
(statearr_21992_22134[(2)] = inst_21766);

(statearr_21992_22134[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_21907 === (54))){
var inst_21894 = (state_21906[(2)]);
var _ = (function (){var statearr_21993 = state_21906;
(statearr_21993[(4)] = cljs.core.rest.call(null,(state_21906[(4)])));

return statearr_21993;
})();
var state_21906__$1 = (function (){var statearr_21994 = state_21906;
(statearr_21994[(19)] = inst_21894);

return statearr_21994;
})();
var statearr_21995_22135 = state_21906__$1;
(statearr_21995_22135[(2)] = true);

(statearr_21995_22135[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_21907 === (23))){
var inst_21776 = (state_21906[(2)]);
var state_21906__$1 = (function (){var statearr_21996 = state_21906;
(statearr_21996[(20)] = inst_21776);

return statearr_21996;
})();
var statearr_21997_22136 = state_21906__$1;
(statearr_21997_22136[(2)] = null);

(statearr_21997_22136[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_21907 === (24))){
var _ = (function (){var statearr_21998 = state_21906;
(statearr_21998[(4)] = cljs.core.cons.call(null,(27),(state_21906[(4)])));

return statearr_21998;
})();
var inst_21788 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_21789 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"cycle needs to be in the past"];
var inst_21790 = cljs.core.PersistentHashMap.fromArrays(inst_21788,inst_21789);
var inst_21791 = cljs.test.do_report.call(null,inst_21790);
var ___$1 = (function (){var statearr_21999 = state_21906;
(statearr_21999[(4)] = cljs.core.rest.call(null,(state_21906[(4)])));

return statearr_21999;
})();
var state_21906__$1 = state_21906;
var statearr_22000_22137 = state_21906__$1;
(statearr_22000_22137[(2)] = inst_21791);

(statearr_22000_22137[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_21907 === (25))){
var inst_21794 = (state_21906[(2)]);
var _ = (function (){var statearr_22002 = state_21906;
(statearr_22002[(4)] = cljs.core.rest.call(null,(state_21906[(4)])));

return statearr_22002;
})();
var state_21906__$1 = state_21906;
var statearr_22003_22138 = state_21906__$1;
(statearr_22003_22138[(2)] = inst_21794);

(statearr_22003_22138[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_21907 === (26))){
var inst_21777 = (state_21906[(2)]);
var inst_21778 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_21779 = null;
var inst_21780 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"cycle needs to be in the past",inst_21779,inst_21777];
var inst_21781 = cljs.core.PersistentHashMap.fromArrays(inst_21778,inst_21780);
var inst_21782 = cljs.test.do_report.call(null,inst_21781);
var state_21906__$1 = state_21906;
var statearr_22004_22139 = state_21906__$1;
(statearr_22004_22139[(2)] = inst_21782);

(statearr_22004_22139[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_21907 === (27))){
var _ = (function (){var statearr_22005 = state_21906;
(statearr_22005[(4)] = cljs.core.rest.call(null,(state_21906[(4)])));

return statearr_22005;
})();
var state_21906__$1 = state_21906;
var ex22001 = (state_21906__$1[(2)]);
var statearr_22006_22140 = state_21906__$1;
(statearr_22006_22140[(5)] = ex22001);


var statearr_22007_22141 = state_21906__$1;
(statearr_22007_22141[(1)] = (26));

(statearr_22007_22141[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_21907 === (28))){
var inst_21802 = (state_21906[(21)]);
var inst_21802__$1 = (state_21906[(2)]);
var inst_21803 = (inst_21802__$1 instanceof cljs.core.ExceptionInfo);
var inst_21804 = cljs.core.ex_data.call(null,inst_21802__$1);
var inst_21805 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_21804);
var inst_21806 = cljs.core._EQ_.call(null,inst_21805,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_21807 = ((inst_21803) && (inst_21806));
var state_21906__$1 = (function (){var statearr_22008 = state_21906;
(statearr_22008[(21)] = inst_21802__$1);

return statearr_22008;
})();
if(cljs.core.truth_(inst_21807)){
var statearr_22009_22142 = state_21906__$1;
(statearr_22009_22142[(1)] = (29));

} else {
var statearr_22010_22143 = state_21906__$1;
(statearr_22010_22143[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_21907 === (29))){
var inst_21802 = (state_21906[(21)]);
var inst_21809 = (function(){throw inst_21802})();
var state_21906__$1 = state_21906;
var statearr_22011_22144 = state_21906__$1;
(statearr_22011_22144[(2)] = inst_21809);

(statearr_22011_22144[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_21907 === (30))){
var inst_21802 = (state_21906[(21)]);
var state_21906__$1 = state_21906;
var statearr_22012_22145 = state_21906__$1;
(statearr_22012_22145[(2)] = inst_21802);

(statearr_22012_22145[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_21907 === (31))){
var inst_21812 = (state_21906[(2)]);
var inst_21813 = cljs.core.PersistentHashMap.EMPTY;
var inst_21814 = eos_cljs.core.transact.call(null,e2e.proposals.prop_acc,"cycleupdate",inst_21813);
var inst_21815 = cljs.core.async.interop.p__GT_c.call(null,inst_21814);
var state_21906__$1 = (function (){var statearr_22013 = state_21906;
(statearr_22013[(22)] = inst_21812);

return statearr_22013;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21906__$1,(32),inst_21815);
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
});})(c__19__auto__,___192__auto__))
;
return ((function (switch__14__auto__,c__19__auto__,___192__auto__){
return (function() {
var e2e$proposals$state_machine__15__auto__ = null;
var e2e$proposals$state_machine__15__auto____0 = (function (){
var statearr_22014 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22014[(0)] = e2e$proposals$state_machine__15__auto__);

(statearr_22014[(1)] = (1));

return statearr_22014;
});
var e2e$proposals$state_machine__15__auto____1 = (function (state_21906){
while(true){
var ret_value__16__auto__ = (function (){try{while(true){
var result__17__auto__ = switch__14__auto__.call(null,state_21906);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__17__auto__;
}
break;
}
}catch (e22015){var ex__18__auto__ = e22015;
var statearr_22016_22146 = state_21906;
(statearr_22016_22146[(2)] = ex__18__auto__);


if(cljs.core.seq.call(null,(state_21906[(4)]))){
var statearr_22017_22147 = state_21906;
(statearr_22017_22147[(1)] = cljs.core.first.call(null,(state_21906[(4)])));

} else {
throw ex__18__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__22148 = state_21906;
state_21906 = G__22148;
continue;
} else {
return ret_value__16__auto__;
}
break;
}
});
e2e$proposals$state_machine__15__auto__ = function(state_21906){
switch(arguments.length){
case 0:
return e2e$proposals$state_machine__15__auto____0.call(this);
case 1:
return e2e$proposals$state_machine__15__auto____1.call(this,state_21906);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
e2e$proposals$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$0 = e2e$proposals$state_machine__15__auto____0;
e2e$proposals$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$1 = e2e$proposals$state_machine__15__auto____1;
return e2e$proposals$state_machine__15__auto__;
})()
;})(switch__14__auto__,c__19__auto__,___192__auto__))
})();
var state__21__auto__ = (function (){var statearr_22018 = f__20__auto__.call(null);
(statearr_22018[(6)] = c__19__auto__);

return statearr_22018;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21__auto__);
});})(c__19__auto__,___192__auto__))
);

return c__19__auto__;
});

e2e.proposals.t_e2e$proposals21395.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta21396","meta21396",(423376033),null)], null);
});

e2e.proposals.t_e2e$proposals21395.cljs$lang$type = true;

e2e.proposals.t_e2e$proposals21395.cljs$lang$ctorStr = "e2e.proposals/t_e2e$proposals21395";

e2e.proposals.t_e2e$proposals21395.cljs$lang$ctorPrWriter = (function (this__9776__auto__,writer__9777__auto__,opt__9778__auto__){
return cljs.core._write.call(null,writer__9777__auto__,"e2e.proposals/t_e2e$proposals21395");
});

/**
 * Positional factory function for e2e.proposals/t_e2e$proposals21395.
 */
e2e.proposals.__GT_t_e2e$proposals21395 = (function e2e$proposals$__GT_t_e2e$proposals21395(meta21396){
return (new e2e.proposals.t_e2e$proposals21395(meta21396));
});

}

return (new e2e.proposals.t_e2e$proposals21395(null));
});

e2e.proposals.process_cycle.cljs$lang$var = new cljs.core.Var(function(){return e2e.proposals.process_cycle;},new cljs.core.Symbol("e2e.proposals","process-cycle","e2e.proposals/process-cycle",(-929717381),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"e2e.proposals","e2e.proposals",(1479174227),null),new cljs.core.Symbol(null,"process-cycle","process-cycle",(-1514138028),null),"e2e/proposals.cljs",(23),(1),(246),(246),cljs.core.List.EMPTY,null,(cljs.core.truth_(e2e.proposals.process_cycle)?e2e.proposals.process_cycle.cljs$lang$test:null)]));
e2e.proposals._main = (function e2e$proposals$_main(var_args){
var args__10338__auto__ = [];
var len__10335__auto___22152 = arguments.length;
var i__10336__auto___22153 = (0);
while(true){
if((i__10336__auto___22153 < len__10335__auto___22152)){
args__10338__auto__.push((arguments[i__10336__auto___22153]));

var G__22154 = (i__10336__auto___22153 + (1));
i__10336__auto___22153 = G__22154;
continue;
} else {
}
break;
}

var argseq__10339__auto__ = ((((0) < args__10338__auto__.length))?(new cljs.core.IndexedSeq(args__10338__auto__.slice((0)),(0),null)):null);
return e2e.proposals._main.cljs$core$IFn$_invoke$arity$variadic(argseq__10339__auto__);
});

e2e.proposals._main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.test.run_block.call(null,(function (){var env22150 = cljs.test.empty_env.call(null);
var summary22151 = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"test","test",(577538877)),(0),new cljs.core.Keyword(null,"pass","pass",(1574159993)),(0),new cljs.core.Keyword(null,"fail","fail",(1706214930)),(0),new cljs.core.Keyword(null,"error","error",(-978969032)),(0),new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"summary","summary",(380847952))], null));
return cljs.core.concat.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env22150,summary22151){
return (function (){
cljs.test.set_env_BANG_.call(null,env22150);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",(-1701237033)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"e2e.proposals","e2e.proposals",(1479174227),null)], null));

return cljs.test.block.call(null,(function (){var env__194__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__194__auto__,env22150,summary22151){
return (function (){
if((env__194__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}

cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",(1253947167))], null),cljs.core.assoc,new cljs.core.Symbol(null,"e2e.proposals","e2e.proposals",(1479174227),null),e2e.proposals.cljs_test_once_fixtures);

return null;
});})(env__194__auto__,env22150,summary22151))
], null),cljs.test.test_vars_block.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return e2e.proposals.init;},new cljs.core.Symbol("e2e.proposals","init","e2e.proposals/init",(-458618888),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"e2e.proposals","e2e.proposals",(1479174227),null),new cljs.core.Symbol(null,"init","init",(-234949907),null),"e2e/proposals.cljs",(14),(1),(46),(46),cljs.core.List.EMPTY,null,(cljs.core.truth_(e2e.proposals.init)?e2e.proposals.init.cljs$lang$test:null)])),new cljs.core.Var(function(){return e2e.proposals.proposal_payment;},new cljs.core.Symbol("e2e.proposals","proposal-payment","e2e.proposals/proposal-payment",(-924459697),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"e2e.proposals","e2e.proposals",(1479174227),null),new cljs.core.Symbol(null,"proposal-payment","proposal-payment",(-65968046),null),"e2e/proposals.cljs",(26),(1),(73),(73),cljs.core.List.EMPTY,null,(cljs.core.truth_(e2e.proposals.proposal_payment)?e2e.proposals.proposal_payment.cljs$lang$test:null)])),new cljs.core.Var(function(){return e2e.proposals.new_proposal;},new cljs.core.Symbol("e2e.proposals","new-proposal","e2e.proposals/new-proposal",(-713004459),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"e2e.proposals","e2e.proposals",(1479174227),null),new cljs.core.Symbol(null,"new-proposal","new-proposal",(-1057710210),null),"e2e/proposals.cljs",(22),(1),(99),(99),cljs.core.List.EMPTY,null,(cljs.core.truth_(e2e.proposals.new_proposal)?e2e.proposals.new_proposal.cljs$lang$test:null)])),new cljs.core.Var(function(){return e2e.proposals.update_proposal;},new cljs.core.Symbol("e2e.proposals","update-proposal","e2e.proposals/update-proposal",(-1251182518),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"e2e.proposals","e2e.proposals",(1479174227),null),new cljs.core.Symbol(null,"update-proposal","update-proposal",(-1609555119),null),"e2e/proposals.cljs",(25),(1),(128),(128),cljs.core.List.EMPTY,null,(cljs.core.truth_(e2e.proposals.update_proposal)?e2e.proposals.update_proposal.cljs$lang$test:null)])),new cljs.core.Var(function(){return e2e.proposals.cycle_add;},new cljs.core.Symbol("e2e.proposals","cycle-add","e2e.proposals/cycle-add",(1399694237),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"e2e.proposals","e2e.proposals",(1479174227),null),new cljs.core.Symbol(null,"cycle-add","cycle-add",(1071188336),null),"e2e/proposals.cljs",(19),(1),(142),(142),cljs.core.List.EMPTY,null,(cljs.core.truth_(e2e.proposals.cycle_add)?e2e.proposals.cycle_add.cljs$lang$test:null)])),new cljs.core.Var(function(){return e2e.proposals.cycle_update;},new cljs.core.Symbol("e2e.proposals","cycle-update","e2e.proposals/cycle-update",(1535968581),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"e2e.proposals","e2e.proposals",(1479174227),null),new cljs.core.Symbol(null,"cycle-update","cycle-update",(-1460045646),null),"e2e/proposals.cljs",(22),(1),(174),(174),cljs.core.List.EMPTY,null,(cljs.core.truth_(e2e.proposals.cycle_update)?e2e.proposals.cycle_update.cljs$lang$test:null)])),new cljs.core.Var(function(){return e2e.proposals.vote;},new cljs.core.Symbol("e2e.proposals","vote","e2e.proposals/vote",(-517647785),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"e2e.proposals","e2e.proposals",(1479174227),null),new cljs.core.Symbol(null,"vote","vote",(-839798934),null),"e2e/proposals.cljs",(14),(1),(200),(200),cljs.core.List.EMPTY,null,(cljs.core.truth_(e2e.proposals.vote)?e2e.proposals.vote.cljs$lang$test:null)])),new cljs.core.Var(function(){return e2e.proposals.process_cycle;},new cljs.core.Symbol("e2e.proposals","process-cycle","e2e.proposals/process-cycle",(-929717381),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"e2e.proposals","e2e.proposals",(1479174227),null),new cljs.core.Symbol(null,"process-cycle","process-cycle",(-1514138028),null),"e2e/proposals.cljs",(23),(1),(246),(246),cljs.core.List.EMPTY,null,(cljs.core.truth_(e2e.proposals.process_cycle)?e2e.proposals.process_cycle.cljs$lang$test:null)]))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__194__auto__,env22150,summary22151){
return (function (){
if((env__194__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__194__auto__,env22150,summary22151))
], null));
})());
});})(env22150,summary22151))
,((function (env22150,summary22151){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",(1620675645)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"e2e.proposals","e2e.proposals",(1479174227),null)], null));
});})(env22150,summary22151))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env22150,summary22151){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary22151,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary22151),new cljs.core.Keyword(null,"report-counters","report-counters",(-1702609242)).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env22150,summary22151))
], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env22150,summary22151){
return (function (){
cljs.test.set_env_BANG_.call(null,env22150);

cljs.test.do_report.call(null,cljs.core.deref.call(null,summary22151));

cljs.test.report.call(null,cljs.core.assoc.call(null,cljs.core.deref.call(null,summary22151),new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",(267300563))));

return cljs.test.clear_env_BANG_.call(null);
});})(env22150,summary22151))
], null));
})());
});

e2e.proposals._main.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
e2e.proposals._main.cljs$lang$applyTo = (function (seq22149){
var self__10327__auto__ = this;
return self__10327__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22149));
});

