import './polyfills.server.mjs';
import{a as S,c as lt,d as pt,e as dt,f as xe,g as ut,i as ze,j as ye,l as _e,m as ht,n as bt,p as ft,q as gt,s as vt}from"./chunk-XG4EUL2U.mjs";import{A as le,B as _,G as A,j as nt,u as ot,v as at,w as rt,y as st,z as ct}from"./chunk-L77QYMS6.mjs";import{C as et,F as tt,G as it,f as te,h as Ye,i as ve,j as ce,k as w}from"./chunk-J5NACB3V.mjs";import{c as mt,d as Be,f as Ve,g as Ee,h as je}from"./chunk-AZMOPIKT.mjs";import{$ as Ke,$a as C,Ab as J,Ba as Ue,Bb as Y,Cb as R,Db as Ze,Ea as ue,Eb as q,Fa as me,Ga as re,Gb as Fe,I as M,Ib as Je,J as E,Ja as f,Jb as fe,K as H,Ka as X,Ma as k,Na as h,P as y,V as Xe,Va as u,W as g,Wa as l,X as v,Y as Ge,Ya as O,Z as x,Za as we,Zb as B,_a as z,_b as ge,ab as Se,cb as Ie,cc as I,da as N,db as $e,dc as Qe,eb as s,fb as a,ga as ee,gb as m,hb as Te,ia as j,ib as Me,j as We,jb as De,kb as $,lb as D,mb as p,nb as G,ob as K,pb as P,qb as he,rb as F,sb as Q,tb as U,u as He,ub as be,vb as d,wa as r,wb as se,xb as V,zb as Z}from"./chunk-MN5RBMQF.mjs";import{a as W,b as ae}from"./chunk-X2SEQXRR.mjs";var xt=(()=>{class e extends pt{static \u0275fac=(()=>{let t;return function(i){return(t||(t=x(e)))(i||e)}})();static \u0275cmp=f({type:e,selectors:[["MinusIcon"]],features:[k],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z","fill","currentColor"]],template:function(n,i){n&1&&(Ge(),s(0,"svg",0),m(1,"path",1),a()),n&2&&(z(i.getClassNames()),u("aria-label",i.ariaLabel)("aria-hidden",i.ariaHidden)("role",i.role))},encapsulation:2})}return e})();var Ft=e=>({natijaID:e}),ke=class e{natijaID=ee.required();copy(){navigator.clipboard.writeText(this.natijaID()).then(()=>{console.log("Text copied to clipboard successfully!")})}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=f({type:e,selectors:[["app-submitted"]],inputs:{natijaID:[1,"natijaID"]},decls:17,vars:7,consts:[[1,"min-h-screen","py-8"],[1,"max-w-3xl","mx-auto","px-4"],[1,"bg-white","rounded-2xl","shadow-sm","border","border-gray-100","p-8"],[1,"text-center","mb-12"],[1,"text-3xl","font-bold","text-gray-900","mb-4"],[1,"text-5xl","font-bold","text-primary","my-8","tracking-wider"],[1,"text-gray-600","mb-8"],[1,"flex","items-center","justify-center","gap-4"],["pButton","","id","copyButton",1,"!px-8","!py-4","!rounded-button","font-medium","!transition-all","transform","hover:-translate-y-1",3,"click","outlined","disabled"],[1,"ri-file-copy-line","mr-2"],["pButton","","id","viewResultButton","routerLink","/result",1,"!px-8","!py-4","!rounded-button","font-medium","!transition-all","transform","hover:-translate-y-1",3,"queryParams","disabled"],[1,"ri-eye-line","mr-2"]],template:function(t,n){t&1&&(s(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h1",4),d(5," Tabriklaymiz! "),a(),s(6,"div",5),d(7),a(),s(8,"p",6),d(9," Iltimos, natija ID raqamini saqlab qo'ying. Keyinchalik natijangizni ko'rish uchun kerak bo'ladi. "),a(),s(10,"div",7)(11,"button",8),D("click",function(){return n.copy()}),m(12,"i",9),d(13," ID ni nusxalash "),a(),s(14,"button",10),m(15,"i",11),d(16," Natijani ko'rish "),a()()()()()()),t&2&&(r(7),V(" ",n.natijaID()," "),r(4),l("outlined",!0)("disabled",!n.natijaID()),r(3),l("queryParams",q(5,Ft,n.natijaID()))("disabled",!n.natijaID()))},dependencies:[it,xe],styles:["[_nghost-%COMP%]{display:block}"],changeDetection:0})};var ne=["*"],kt=["content"],Ct=(e,o,t)=>({activateCallback:e,value:o,active:t});function Qt(e,o){e&1&&m(0,"p-stepper-separator")}function Bt(e,o){if(e&1){let t=$();s(0,"button",0),D("click",function(){g(t);let i=p();return v(i.onStepClick())}),s(1,"span",1),d(2),a(),s(3,"span",2),K(4),a()(),h(5,Qt,1,0,"p-stepper-separator")}if(e&2){let t=p();l("tabindex",t.isStepDisabled()?-1:void 0)("disabled",t.isStepDisabled()),u("id",t.id())("role","tab")("aria-controls",t.ariaControls()),r(2),se(t.value()),r(3),C(t.isSeparatorVisible()?5:-1)}}function Vt(e,o){e&1&&De(0)}function Et(e,o){e&1&&m(0,"p-stepper-separator")}function jt(e,o){if(e&1&&h(0,Vt,1,0,"ng-container",3)(1,Et,1,0,"p-stepper-separator"),e&2){let t=p();l("ngTemplateOutlet",t.content||t._contentTemplate)("ngTemplateOutletContext",Fe(3,Ct,t.onStepClick.bind(t),t.value(),t.active())),r(),C(t.isSeparatorVisible()?1:-1)}}var yt=e=>({transitionParams:e}),zt=e=>({value:"visible",params:e}),qt=e=>({value:"hidden",params:e});function Lt(e,o){e&1&&m(0,"p-stepper-separator")}function Nt(e,o){e&1&&De(0)}function Ot(e,o){if(e&1&&h(0,Nt,1,0,"ng-container",1),e&2){let t=p();l("ngTemplateOutlet",t.contentTemplate||t._contentTemplate)("ngTemplateOutletContext",Fe(2,Ct,t.updateValue.bind(t),t.value(),t.active()))}}var Pt=({dt:e})=>`
.p-steplist {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    padding: 0;
    list-style-type: none;
    overflow-x: auto;
}

.p-step {
    position: relative;
    display: flex;
    flex: 1 1 auto;
    align-items: center;
    gap: ${e("stepper.step.gap")};
    padding: ${e("stepper.step.padding")};
}

.p-step:last-of-type {
    flex: initial;
}

.p-step-header {
    border: 0 none;
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    transition: background ${e("stepper.transition.duration")}, color ${e("stepper.transition.duration")}, border-color ${e("stepper.transition.duration")}, outline-color ${e("stepper.transition.duration")}, box-shadow ${e("stepper.transition.duration")};
    border-radius: ${e("stepper.step.header.border.radius")};
    outline-color: transparent;
    background: transparent;
    padding: ${e("stepper.step.header.padding")};
    gap: ${e("stepper.step.header.gap")};
}

.p-step-header:focus-visible {
    box-shadow: ${e("stepper.step.header.focus.ring.shadow")};
    outline: ${e("stepper.step.header.focus.ring.width")} ${e("stepper.step.header.focus.ring.style")} ${e("stepper.step.header.focus.ring.color")};
    outline-offset: ${e("stepper.step.header.focus.ring.offset")};
}

.p-stepper.p-stepper-readonly .p-step {
    cursor: auto;
}

.p-step-title {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
    color: ${e("stepper.step.title.color")};
    font-weight: ${e("stepper.step.title.font.weight")};
    transition: background ${e("stepper.transition.duration")}, color ${e("stepper.transition.duration")}, border-color ${e("stepper.transition.duration")}, box-shadow ${e("stepper.transition.duration")}, outline-color ${e("stepper.transition.duration")};
}

.p-step-number {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${e("stepper.step.number.color")};
    border: 2px solid ${e("stepper.step.number.border.color")};
    background: ${e("stepper.step.number.background")};
    min-width: ${e("stepper.step.number.size")};
    height: ${e("stepper.step.number.size")};
    line-height: ${e("stepper.step.number.size")};
    font-size: ${e("stepper.step.number.font.size")};
    z-index: 1;
    border-radius: ${e("stepper.step.number.border.radius")};
    position: relative;
    font-weight: ${e("stepper.step.number.font.weight")};
}

.p-step-number::after {
    content: " ";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: ${e("stepper.step.number.border.radius")};
    box-shadow: ${e("stepper.step.number.shadow")};
}

.p-step-active .p-step-header {
    cursor: default;
}

.p-step-active .p-step-number {
    background: ${e("stepper.step.number.active.background")};
    border-color: ${e("stepper.step.number.active.border.color")};
    color: ${e("stepper.step.number.active.color")};
}

.p-step-active .p-step-title {
    color: ${e("stepper.step.title.active.color")};
}

.p-step:not(.p-disabled):focus-visible {
    outline: ${e("focus.ring.width")} ${e("focus.ring.style")} ${e("focus.ring.color")};
    outline-offset: ${e("focus.ring.offset")};
}

.p-step:has(~ .p-step-active) .p-stepper-separator {
    background: ${e("stepper.separator.active.background")};
}

.p-stepper-separator {
    flex: 1 1 0;
    background: ${e("stepper.separator.background")};
    width: 100%;
    height: ${e("stepper.separator.size")};
    transition: background ${e("stepper.transition.duration")}, color ${e("stepper.transition.duration")}, border-color ${e("stepper.transition.duration")}, box-shadow ${e("stepper.transition.duration")}, outline-color ${e("stepper.transition.duration")};
}

.p-steppanels {
    padding: ${e("stepper.steppanels.padding")};
}

.p-steppanel {
    background: ${e("stepper.steppanel.background")};
    color: ${e("stepper.steppanel.color")};
}

.p-stepper:has(.p-stepitem) {
    display: flex;
    flex-direction: column;
}

.p-stepitem {
    display: flex;
    flex-direction: column;
    flex: initial;
}

.p-stepitem.p-stepitem-active {
    flex: 1 1 auto;
}

.p-stepitem .p-step {
    flex: initial;
}

.p-stepitem .p-steppanel-content {
    width: 100%;
    padding: ${e("stepper.steppanel.padding")};
    margin-inline-start: 1rem;
}

.p-stepitem .p-steppanel {
    display: flex;
    flex: 1 1 auto;
}

.p-stepitem .p-stepper-separator {
    flex: 0 0 auto;
    width: ${e("stepper.separator.size")};
    height: auto;
    margin: ${e("stepper.separator.margin")};
    position: relative;
    left: calc(-1 * ${e("stepper.separator.size")});
}

.p-stepitem .p-stepper-separator:dir(rtl) {
    left: calc(-9 * ${e("stepper.separator.size")});
}

.p-stepitem:has(~ .p-stepitem-active) .p-stepper-separator {
    background: ${e("stepper.separator.active.background")};
}

.p-stepitem:last-of-type .p-steppanel {
    padding-inline-start: ${e("stepper.step.number.size")};
}
/* For PrimeNG */
.p-steppanel {
    overflow: hidden;
}

.p-stepppanel:not(.ng-animating) {
    overflow: inherit;
}
`,Rt={root:({props:e})=>["p-stepper p-component",{"p-readonly":e.linear}],separator:"p-stepper-separator"},_t=(()=>{class e extends A{name="stepper";theme=Pt;classes=Rt;static \u0275fac=(()=>{let t;return function(i){return(t||(t=x(e)))(i||e)}})();static \u0275prov=E({token:e,factory:e.\u0275fac})}return e})();var pe=(()=>{class e extends S{steps=me(M(()=>L));static \u0275fac=(()=>{let t;return function(i){return(t||(t=x(e)))(i||e)}})();static \u0275cmp=f({type:e,selectors:[["p-step-list"]],contentQueries:function(n,i,c){n&1&&U(c,i.steps,L,4),n&2&&be()},hostVars:4,hostBindings:function(n,i){n&2&&O("p-steplist",!0)("p-component",!0)},features:[k],ngContentSelectors:ne,decls:1,vars:0,template:function(n,i){n&1&&(G(),K(0))},dependencies:[w],encapsulation:2,changeDetection:0})}return e})(),Ne=(()=>{class e extends S{static \u0275fac=(()=>{let t;return function(i){return(t||(t=x(e)))(i||e)}})();static \u0275cmp=f({type:e,selectors:[["p-stepper-separator"]],hostVars:4,hostBindings:function(n,i){n&2&&O("p-stepper-separator",!0)("p-component",!0)},features:[k],ngContentSelectors:ne,decls:1,vars:0,template:function(n,i){n&1&&(G(),K(0))},dependencies:[w],encapsulation:2,changeDetection:0})}return e})(),qe=(()=>{class e extends S{pcStepper=y(M(()=>oe));value=re();isActive=I(()=>this.pcStepper.value()===this.value());step=ue(M(()=>L));stepPanel=ue(M(()=>de));constructor(){super(),Qe(()=>{this.step().value.set(this.value())}),Qe(()=>{this.stepPanel().value.set(this.value())})}static \u0275fac=function(n){return new(n||e)};static \u0275cmp=f({type:e,selectors:[["p-step-item"]],contentQueries:function(n,i,c){n&1&&(U(c,i.step,L,5),U(c,i.stepPanel,de,5)),n&2&&be(2)},hostVars:5,hostBindings:function(n,i){n&2&&(u("data-p-active",i.isActive()),O("p-stepitem",!0)("p-component",!0))},inputs:{value:[1,"value"]},outputs:{value:"valueChange"},features:[k],ngContentSelectors:ne,decls:1,vars:0,template:function(n,i){n&1&&(G(),K(0))},dependencies:[w],encapsulation:2,changeDetection:0})}return e})(),L=(()=>{class e extends S{pcStepper=y(M(()=>oe));value=re();disabled=ee(!1,{transform:t=>ze(t)});active=I(()=>this.pcStepper.isStepActive(this.value()));isStepDisabled=I(()=>!this.active()&&(this.pcStepper.linear()||this.disabled()));id=I(()=>`${this.pcStepper.id()}_step_${this.value()}`);ariaControls=I(()=>`${this.pcStepper.id()}_steppanel_${this.value()}`);isSeparatorVisible=I(()=>{if(this.pcStepper.stepList()){let t=this.pcStepper.stepList().steps(),n=t.indexOf(this),i=t.length;return n!==i-1}else return!1});content;templates;_contentTemplate;ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"content":this._contentTemplate=t.template;break}})}onStepClick(){this.pcStepper.updateValue(this.value())}static \u0275fac=(()=>{let t;return function(i){return(t||(t=x(e)))(i||e)}})();static \u0275cmp=f({type:e,selectors:[["p-step"]],contentQueries:function(n,i,c){if(n&1&&(P(c,kt,4),P(c,le,4)),n&2){let b;F(b=Q())&&(i.content=b.first),F(b=Q())&&(i.templates=b)}},hostVars:13,hostBindings:function(n,i){n&2&&(u("aria-current",i.active()?"step":void 0)("role","presentation")("data-p-active",i.active())("data-p-disabled",i.isStepDisabled())("data-pc-name","step"),O("p-step",!0)("p-step-active",i.active())("p-disabled",i.isStepDisabled())("p-component",!0))},inputs:{value:[1,"value"],disabled:[1,"disabled"]},outputs:{value:"valueChange"},features:[k],ngContentSelectors:ne,decls:2,vars:1,consts:[["type","button",1,"p-step-header",3,"click","tabindex","disabled"],[1,"p-step-number"],[1,"p-step-title"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(n,i){n&1&&(G(),h(0,Bt,6,7)(1,jt,2,7)),n&2&&C(!i.content&&!i._contentTemplate?0:1)},dependencies:[w,ce,Ne,_],encapsulation:2,changeDetection:0})}return e})(),de=(()=>{class e extends S{pcStepper=y(M(()=>oe));transitionOptions=I(()=>this.pcStepper.transitionOptions());value=re(void 0);active=I(()=>this.pcStepper.value()===this.value());ariaControls=I(()=>`${this.pcStepper.id()}_step_${this.value()}`);id=I(()=>`${this.pcStepper.id()}_steppanel_${this.value()}`);isVertical=I(()=>this.pcStepper.stepItems().length>0);isSeparatorVisible=I(()=>{if(this.pcStepper.stepItems()){let t=this.pcStepper.stepItems().length,n=nt(this.pcStepper.el.nativeElement,'[data-pc-name="steppanel"]');return rt(this.el.nativeElement,n)!==t-1}});contentTemplate;templates;_contentTemplate;ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"content":this._contentTemplate=t.template;break}})}updateValue(t){this.pcStepper.updateValue(t)}static \u0275fac=(()=>{let t;return function(i){return(t||(t=x(e)))(i||e)}})();static \u0275cmp=f({type:e,selectors:[["p-step-panel"]],contentQueries:function(n,i,c){if(n&1&&(P(c,kt,5),P(c,le,4)),n&2){let b;F(b=Q())&&(i.contentTemplate=b.first),F(b=Q())&&(i.templates=b)}},hostVars:11,hostBindings:function(n,i){n&2&&(u("role","tabpanel")("aria-controls",i.ariaControls())("id",i.id())("data-p-active",i.active())("data-pc-name","steppanel"),O("p-steppanel",!0)("p-component",!0)("p-steppanel-active",i.active()))},inputs:{value:[1,"value"]},outputs:{value:"valueChange"},features:[k],decls:3,vars:11,consts:[[1,"p-steppanel-content"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(n,i){n&1&&(h(0,Lt,1,0,"p-stepper-separator"),s(1,"div",0),h(2,Ot,1,6,"ng-container"),a()),n&2&&(C(i.isSeparatorVisible()?0:-1),r(),l("@content",i.isVertical()?i.active()?q(5,zt,q(3,yt,i.transitionOptions())):q(9,qt,q(7,yt,i.transitionOptions())):void 0),r(),C(i.active()?2:-1))},dependencies:[w,ce,Ne,_],encapsulation:2,data:{animation:[mt("content",[Ee("hidden",Ve({height:"0",visibility:"hidden"})),Ee("visible",Ve({height:"*",visibility:"visible"})),je("visible <=> hidden",[Be("250ms cubic-bezier(0.86, 0, 0.07, 1)")]),je("void => *",Be(0))])]},changeDetection:0})}return e})(),Oe=(()=>{class e extends S{static \u0275fac=(()=>{let t;return function(i){return(t||(t=x(e)))(i||e)}})();static \u0275cmp=f({type:e,selectors:[["p-step-panels"]],hostVars:4,hostBindings:function(n,i){n&2&&O("p-steppanels",!0)("p-component",!0)},features:[k],ngContentSelectors:ne,decls:1,vars:0,template:function(n,i){n&1&&(G(),K(0))},dependencies:[w,_],encapsulation:2,changeDetection:0})}return e})(),oe=(()=>{class e extends S{value=re(void 0);linear=ee(!1,{transform:t=>ze(t)});transitionOptions=ee("400ms cubic-bezier(0.86, 0, 0.07, 1)");_componentStyle=y(_t);id=j(st("pn_id_"));stepItems=me(qe);steps=me(L);stepList=ue(pe);updateValue(t){this.value.set(t)}isStepActive(t){return this.value()===t}static \u0275fac=(()=>{let t;return function(i){return(t||(t=x(e)))(i||e)}})();static \u0275cmp=f({type:e,selectors:[["p-stepper"]],contentQueries:function(n,i,c){n&1&&(U(c,i.stepItems,qe,4),U(c,i.steps,L,4),U(c,i.stepList,pe,5)),n&2&&be(3)},hostVars:6,hostBindings:function(n,i){n&2&&(u("role","tablist")("id",i.id()),O("p-stepper",!0)("p-component",!0))},inputs:{value:[1,"value"],linear:[1,"linear"],transitionOptions:[1,"transitionOptions"]},outputs:{value:"valueChange"},features:[R([_t]),k],ngContentSelectors:ne,decls:1,vars:0,template:function(n,i){n&1&&(G(),K(0))},dependencies:[w,_],encapsulation:2,changeDetection:0})}return e})(),wt=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=X({type:e});static \u0275inj=H({imports:[oe,pe,Oe,de,qe,L,Ne,_,_]})}return e})();var Wt=["input"],Ht=(e,o,t,n,i)=>({"p-radiobutton p-component":!0,"p-radiobutton-checked":e,"p-disabled":o,"p-variant-filled":t,"p-radiobutton-sm p-inputfield-sm":n,"p-radiobutton-lg p-inputfield-lg":i}),Xt=({dt:e})=>`
.p-radiobutton {
    position: relative;
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    width: ${e("radiobutton.width")};
    height: ${e("radiobutton.height")};
}

.p-radiobutton-input {
    cursor: pointer;
    appearance: none;
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: 1;
    outline: 0 none;
    border: 1px solid transparent;
    border-radius: 50%;
}

.p-radiobutton-box {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 1px solid ${e("radiobutton.border.color")};
    background: ${e("radiobutton.background")};
    width: ${e("radiobutton.width")};
    height: ${e("radiobutton.height")};
    transition: background ${e("radiobutton.transition.duration")}, color ${e("radiobutton.transition.duration")}, border-color ${e("radiobutton.transition.duration")}, box-shadow ${e("radiobutton.transition.duration")}, outline-color ${e("radiobutton.transition.duration")};
    outline-color: transparent;
    box-shadow: ${e("radiobutton.shadow")};
}

.p-radiobutton-icon {
    transition-duration: ${e("radiobutton.transition.duration")};
    background: transparent;
    font-size: ${e("radiobutton.icon.size")};
    width: ${e("radiobutton.icon.size")};
    height: ${e("radiobutton.icon.size")};
    border-radius: 50%;
    backface-visibility: hidden;
    transform: translateZ(0) scale(0.1);
}

.p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:hover) .p-radiobutton-box {
    border-color: ${e("radiobutton.hover.border.color")};
}

.p-radiobutton-checked .p-radiobutton-box {
    border-color: ${e("radiobutton.checked.border.color")};
    background: ${e("radiobutton.checked.background")};
}

.p-radiobutton-checked .p-radiobutton-box .p-radiobutton-icon {
    background: ${e("radiobutton.icon.checked.color")};
    transform: translateZ(0) scale(1, 1);
    visibility: visible;
}

.p-radiobutton-checked:not(.p-disabled):has(.p-radiobutton-input:hover) .p-radiobutton-box {
    border-color: ${e("radiobutton.checked.hover.border.color")};
    background: ${e("radiobutton.checked.hover.background")};
}

.p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:hover).p-radiobutton-checked .p-radiobutton-box .p-radiobutton-icon {
    background: ${e("radiobutton.icon.checked.hover.color")};
}

.p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:focus-visible) .p-radiobutton-box {
    border-color: ${e("radiobutton.focus.border.color")};
    box-shadow: ${e("radiobutton.focus.ring.shadow")};
    outline: ${e("radiobutton.focus.ring.width")} ${e("radiobutton.focus.ring.style")} ${e("radiobutton.focus.ring.color")};
    outline-offset: ${e("radiobutton.focus.ring.offset")};
}

.p-radiobutton-checked:not(.p-disabled):has(.p-radiobutton-input:focus-visible) .p-radiobutton-box {
    border-color: ${e("radiobutton.checked.focus.border.color")};
}

p-radioButton.ng-invalid.ng-dirty .p-radiobutton-box,
p-radio-button.ng-invalid.ng-dirty .p-radiobutton-box,
p-radiobutton.ng-invalid.ng-dirty .p-radiobutton-box {
    border-color: ${e("radiobutton.invalid.border.color")};
}

.p-radiobutton.p-variant-filled .p-radiobutton-box {
    background: ${e("radiobutton.filled.background")};
}

.p-radiobutton.p-variant-filled.p-radiobutton-checked .p-radiobutton-box {
    background: ${e("radiobutton.checked.background")};
}

.p-radiobutton.p-variant-filled:not(.p-disabled):has(.p-radiobutton-input:hover).p-radiobutton-checked .p-radiobutton-box {
    background: ${e("radiobutton.checked.hover.background")};
}

.p-radiobutton.p-disabled {
    opacity: 1;
}

.p-radiobutton.p-disabled .p-radiobutton-box {
    background: ${e("radiobutton.disabled.background")};
    border-color: ${e("radiobutton.checked.disabled.border.color")};
}

.p-radiobutton-checked.p-disabled .p-radiobutton-box .p-radiobutton-icon {
    background: ${e("radiobutton.icon.disabled.color")};
}

.p-radiobutton-sm,
.p-radiobutton-sm .p-radiobutton-box {
    width: ${e("radiobutton.sm.width")};
    height: ${e("radiobutton.sm.height")};
}

.p-radiobutton-sm .p-radiobutton-icon {
    font-size: ${e("radiobutton.icon.sm.size")};
    width: ${e("radiobutton.icon.sm.size")};
    height: ${e("radiobutton.icon.sm.size")};
}

.p-radiobutton-lg,
.p-radiobutton-lg .p-radiobutton-box {
    width: ${e("radiobutton.lg.width")};
    height: ${e("radiobutton.lg.height")};
}

.p-radiobutton-lg .p-radiobutton-icon {
    font-size: ${e("radiobutton.icon.lg.size")};
    width: ${e("radiobutton.icon.lg.size")};
    height: ${e("radiobutton.icon.lg.size")};
}
`,Gt={root:({instance:e,props:o})=>["p-radiobutton p-component",{"p-radiobutton-checked":e.checked,"p-disabled":o.disabled,"p-invalid":o.invalid,"p-variant-filled":o.variant?o.variant==="filled":e.config.inputStyle==="filled"||e.config.inputVariant==="filled"}],box:"p-radiobutton-box",input:"p-radiobutton-input",icon:"p-radiobutton-icon"},St=(()=>{class e extends A{name="radiobutton";theme=Xt;classes=Gt;static \u0275fac=(()=>{let t;return function(i){return(t||(t=x(e)))(i||e)}})();static \u0275prov=E({token:e,factory:e.\u0275fac})}return e})();var Kt={provide:ye,useExisting:M(()=>Pe),multi:!0},Ut=(()=>{class e{accessors=[];add(t,n){this.accessors.push([t,n])}remove(t){this.accessors=this.accessors.filter(n=>n[1]!==t)}select(t){this.accessors.forEach(n=>{this.isSameGroup(n,t)&&n[1]!==t&&n[1].writeValue(t.value)})}isSameGroup(t,n){return t[0].control?t[0].control.root===n.control.control.root&&t[1].name===n.name:!1}static \u0275fac=function(n){return new(n||e)};static \u0275prov=E({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Pe=(()=>{class e extends S{value;formControlName;name;disabled;variant;size;tabindex;inputId;ariaLabelledBy;ariaLabel;style;styleClass;autofocus;binary;onClick=new N;onFocus=new N;onBlur=new N;inputViewChild;onModelChange=()=>{};onModelTouched=()=>{};checked;focused;control;_componentStyle=y(St);injector=y(Ke);registry=y(Ut);ngOnInit(){super.ngOnInit(),this.control=this.injector.get(_e),this.checkName(),this.registry.add(this.control,this)}onChange(t){this.disabled||this.select(t)}select(t){this.disabled||(this.checked=!0,this.onModelChange(this.value),this.registry.select(this),this.onClick.emit({originalEvent:t,value:this.value}))}writeValue(t){this.binary?this.checked=!!t:this.checked=t==this.value,this.inputViewChild&&this.inputViewChild.nativeElement&&(this.inputViewChild.nativeElement.checked=this.checked),this.cd.markForCheck()}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}setDisabledState(t){this.disabled=t,this.cd.markForCheck()}onInputFocus(t){this.focused=!0,this.onFocus.emit(t)}onInputBlur(t){this.focused=!1,this.onModelTouched(),this.onBlur.emit(t)}focus(){this.inputViewChild.nativeElement.focus()}ngOnDestroy(){this.registry.remove(this),super.ngOnDestroy()}checkName(){this.name&&this.formControlName&&this.name!==this.formControlName&&this.throwNameError(),!this.name&&this.formControlName&&(this.name=this.formControlName)}throwNameError(){throw new Error(`
          If you define both a name and a formControlName attribute on your radio button, their values
          must match. Ex: <p-radioButton formControlName="food" name="food"></p-radioButton>
        `)}static \u0275fac=(()=>{let t;return function(i){return(t||(t=x(e)))(i||e)}})();static \u0275cmp=f({type:e,selectors:[["p-radioButton"],["p-radiobutton"],["p-radio-button"]],viewQuery:function(n,i){if(n&1&&he(Wt,5),n&2){let c;F(c=Q())&&(i.inputViewChild=c.first)}},inputs:{value:"value",formControlName:"formControlName",name:"name",disabled:[2,"disabled","disabled",B],variant:"variant",size:"size",tabindex:[2,"tabindex","tabindex",ge],inputId:"inputId",ariaLabelledBy:"ariaLabelledBy",ariaLabel:"ariaLabel",style:"style",styleClass:"styleClass",autofocus:[2,"autofocus","autofocus",B],binary:[2,"binary","binary",B]},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[R([Kt,St]),k],decls:5,vars:24,consts:[["input",""],[3,"ngStyle","ngClass"],["type","radio",1,"p-radiobutton-input",3,"focus","blur","change","checked","disabled","value","pAutoFocus"],[1,"p-radiobutton-box"],[1,"p-radiobutton-icon"]],template:function(n,i){if(n&1){let c=$();s(0,"div",1)(1,"input",2,0),D("focus",function(T){return g(c),v(i.onInputFocus(T))})("blur",function(T){return g(c),v(i.onInputBlur(T))})("change",function(T){return g(c),v(i.onChange(T))}),a(),s(3,"div",3),m(4,"div",4),a()()}n&2&&(z(i.styleClass),l("ngStyle",i.style)("ngClass",Je(18,Ht,i.checked,i.disabled,i.variant==="filled"||i.config.inputStyle()==="filled"||i.config.inputVariant()==="filled",i.size==="small",i.size==="large")),u("data-pc-name","radiobutton")("data-pc-section","root"),r(),l("checked",i.checked)("disabled",i.disabled)("value",i.value)("pAutoFocus",i.autofocus),u("id",i.inputId)("name",i.name)("aria-labelledby",i.ariaLabelledBy)("aria-label",i.ariaLabel)("tabindex",i.tabindex)("aria-checked",i.checked),r(2),u("data-pc-section","input"),r(),u("data-pc-section","icon"))},dependencies:[w,te,ve,lt,_],encapsulation:2,changeDetection:0})}return e})();var Zt=["checkboxicon"],Jt=["input"],Yt=()=>({"p-checkbox-input":!0}),ei=e=>({checked:e,class:"p-checkbox-icon"});function ti(e,o){if(e&1&&m(0,"span",8),e&2){let t=p(3);l("ngClass",t.checkboxIcon),u("data-pc-section","icon")}}function ii(e,o){e&1&&m(0,"CheckIcon",9),e&2&&(l("styleClass","p-checkbox-icon"),u("data-pc-section","icon"))}function ni(e,o){if(e&1&&(Te(0),h(1,ti,1,2,"span",7)(2,ii,1,2,"CheckIcon",6),Me()),e&2){let t=p(2);r(),l("ngIf",t.checkboxIcon),r(),l("ngIf",!t.checkboxIcon)}}function oi(e,o){e&1&&m(0,"MinusIcon",9),e&2&&(l("styleClass","p-checkbox-icon"),u("data-pc-section","icon"))}function ai(e,o){if(e&1&&(Te(0),h(1,ni,3,2,"ng-container",4)(2,oi,1,2,"MinusIcon",6),Me()),e&2){let t=p();r(),l("ngIf",t.checked),r(),l("ngIf",t._indeterminate())}}function ri(e,o){}function si(e,o){e&1&&h(0,ri,0,0,"ng-template")}var ci=({dt:e})=>`
.p-checkbox {
    position: relative;
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    width: ${e("checkbox.width")};
    height: ${e("checkbox.height")};
}

.p-checkbox-input {
    cursor: pointer;
    appearance: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: 1;
    outline: 0 none;
    border: 1px solid transparent;
    border-radius: ${e("checkbox.border.radius")};
}

.p-checkbox-box {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${e("checkbox.border.radius")};
    border: 1px solid ${e("checkbox.border.color")};
    background: ${e("checkbox.background")};
    width: ${e("checkbox.width")};
    height: ${e("checkbox.height")};
    transition: background ${e("checkbox.transition.duration")}, color ${e("checkbox.transition.duration")}, border-color ${e("checkbox.transition.duration")}, box-shadow ${e("checkbox.transition.duration")}, outline-color ${e("checkbox.transition.duration")};
    outline-color: transparent;
    box-shadow: ${e("checkbox.shadow")};
}

.p-checkbox-icon {
    transition-duration: ${e("checkbox.transition.duration")};
    color: ${e("checkbox.icon.color")};
    font-size: ${e("checkbox.icon.size")};
    width: ${e("checkbox.icon.size")};
    height: ${e("checkbox.icon.size")};
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    border-color: ${e("checkbox.hover.border.color")};
}

.p-checkbox-checked .p-checkbox-box {
    border-color: ${e("checkbox.checked.border.color")};
    background: ${e("checkbox.checked.background")};
}

.p-checkbox-checked .p-checkbox-icon {
    color: ${e("checkbox.icon.checked.color")};
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    background: ${e("checkbox.checked.hover.background")};
    border-color: ${e("checkbox.checked.hover.border.color")};
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-icon {
    color: ${e("checkbox.icon.checked.hover.color")};
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
    border-color: ${e("checkbox.focus.border.color")};
    box-shadow: ${e("checkbox.focus.ring.shadow")};
    outline: ${e("checkbox.focus.ring.width")} ${e("checkbox.focus.ring.style")} ${e("checkbox.focus.ring.color")};
    outline-offset: ${e("checkbox.focus.ring.offset")};
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
    border-color: ${e("checkbox.checked.focus.border.color")};
}

p-checkBox.ng-invalid.ng-dirty .p-checkbox-box,
p-check-box.ng-invalid.ng-dirty .p-checkbox-box,
p-checkbox.ng-invalid.ng-dirty .p-checkbox-box {
    border-color: ${e("checkbox.invalid.border.color")};
}

.p-checkbox.p-variant-filled .p-checkbox-box {
    background: ${e("checkbox.filled.background")};
}

.p-checkbox-checked.p-variant-filled .p-checkbox-box {
    background: ${e("checkbox.checked.background")};
}

.p-checkbox-checked.p-variant-filled:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    background: ${e("checkbox.checked.hover.background")};
}

.p-checkbox.p-disabled {
    opacity: 1;
}

.p-checkbox.p-disabled .p-checkbox-box {
    background: ${e("checkbox.disabled.background")};
    border-color: ${e("checkbox.checked.disabled.border.color")};
}

.p-checkbox.p-disabled .p-checkbox-box .p-checkbox-icon {
    color: ${e("checkbox.icon.disabled.color")};
}

.p-checkbox-sm,
.p-checkbox-sm .p-checkbox-box {
    width: ${e("checkbox.sm.width")};
    height: ${e("checkbox.sm.height")};
}

.p-checkbox-sm .p-checkbox-icon {
    font-size: ${e("checkbox.icon.sm.size")};
    width: ${e("checkbox.icon.sm.size")};
    height: ${e("checkbox.icon.sm.size")};
}

.p-checkbox-lg,
.p-checkbox-lg .p-checkbox-box {
    width: ${e("checkbox.lg.width")};
    height: ${e("checkbox.lg.height")};
}

.p-checkbox-lg .p-checkbox-icon {
    font-size: ${e("checkbox.icon.lg.size")};
    width: ${e("checkbox.icon.lg.size")};
    height: ${e("checkbox.icon.lg.size")};
}
`,li={root:({instance:e,props:o})=>["p-checkbox p-component",{"p-checkbox-checked":e.checked,"p-disabled":o.disabled,"p-invalid":o.invalid,"p-variant-filled":o.variant?o.variant==="filled":e.config.inputStyle==="filled"||e.config.inputVariant==="filled"}],box:"p-checkbox-box",input:"p-checkbox-input",icon:"p-checkbox-icon"},It=(()=>{class e extends A{name="checkbox";theme=ci;classes=li;static \u0275fac=(()=>{let t;return function(i){return(t||(t=x(e)))(i||e)}})();static \u0275prov=E({token:e,factory:e.\u0275fac})}return e})();var pi={provide:ye,useExisting:M(()=>Ce),multi:!0},Ce=(()=>{class e extends S{value;name;disabled;binary;ariaLabelledBy;ariaLabel;tabindex;inputId;style;inputStyle;styleClass;inputClass;indeterminate=!1;size;formControl;checkboxIcon;readonly;required;autofocus;trueValue=!0;falseValue=!1;variant;onChange=new N;onFocus=new N;onBlur=new N;inputViewChild;get checked(){return this._indeterminate()?!1:this.binary?this.model===this.trueValue:at(this.value,this.model)}get containerClass(){return{"p-checkbox p-component":!0,"p-checkbox-checked p-highlight":this.checked,"p-disabled":this.disabled,"p-variant-filled":this.variant==="filled"||this.config.inputStyle()==="filled"||this.config.inputVariant()==="filled","p-checkbox-sm p-inputfield-sm":this.size==="small","p-checkbox-lg p-inputfield-lg":this.size==="large"}}_indeterminate=j(void 0);checkboxIconTemplate;templates;_checkboxIconTemplate;model;onModelChange=()=>{};onModelTouched=()=>{};focused=!1;_componentStyle=y(It);ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"icon":this._checkboxIconTemplate=t.template;break;case"checkboxicon":this._checkboxIconTemplate=t.template;break}})}ngOnChanges(t){super.ngOnChanges(t),t.indeterminate&&this._indeterminate.set(t.indeterminate.currentValue)}updateModel(t){let n,i=this.injector.get(_e,null,{optional:!0,self:!0}),c=i&&!this.formControl?i.value:this.model;this.binary?(n=this._indeterminate()?this.trueValue:this.checked?this.falseValue:this.trueValue,this.model=n,this.onModelChange(n)):(this.checked||this._indeterminate()?n=c.filter(b=>!ot(b,this.value)):n=c?[...c,this.value]:[this.value],this.onModelChange(n),this.model=n,this.formControl&&this.formControl.setValue(n)),this._indeterminate()&&this._indeterminate.set(!1),this.onChange.emit({checked:n,originalEvent:t})}handleChange(t){this.readonly||this.updateModel(t)}onInputFocus(t){this.focused=!0,this.onFocus.emit(t)}onInputBlur(t){this.focused=!1,this.onBlur.emit(t),this.onModelTouched()}focus(){this.inputViewChild.nativeElement.focus()}writeValue(t){this.model=t,this.cd.markForCheck()}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}setDisabledState(t){setTimeout(()=>{this.disabled=t,this.cd.markForCheck()})}static \u0275fac=(()=>{let t;return function(i){return(t||(t=x(e)))(i||e)}})();static \u0275cmp=f({type:e,selectors:[["p-checkbox"],["p-checkBox"],["p-check-box"]],contentQueries:function(n,i,c){if(n&1&&(P(c,Zt,4),P(c,le,4)),n&2){let b;F(b=Q())&&(i.checkboxIconTemplate=b.first),F(b=Q())&&(i.templates=b)}},viewQuery:function(n,i){if(n&1&&he(Jt,5),n&2){let c;F(c=Q())&&(i.inputViewChild=c.first)}},inputs:{value:"value",name:"name",disabled:[2,"disabled","disabled",B],binary:[2,"binary","binary",B],ariaLabelledBy:"ariaLabelledBy",ariaLabel:"ariaLabel",tabindex:[2,"tabindex","tabindex",ge],inputId:"inputId",style:"style",inputStyle:"inputStyle",styleClass:"styleClass",inputClass:"inputClass",indeterminate:[2,"indeterminate","indeterminate",B],size:"size",formControl:"formControl",checkboxIcon:"checkboxIcon",readonly:[2,"readonly","readonly",B],required:[2,"required","required",B],autofocus:[2,"autofocus","autofocus",B],trueValue:"trueValue",falseValue:"falseValue",variant:"variant"},outputs:{onChange:"onChange",onFocus:"onFocus",onBlur:"onBlur"},features:[R([pi,It]),k,Xe],decls:6,vars:29,consts:[["input",""],[3,"ngClass"],["type","checkbox",3,"focus","blur","change","value","checked","disabled","readonly","ngClass"],[1,"p-checkbox-box"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"styleClass",4,"ngIf"],["class","p-checkbox-icon",3,"ngClass",4,"ngIf"],[1,"p-checkbox-icon",3,"ngClass"],[3,"styleClass"]],template:function(n,i){if(n&1){let c=$();s(0,"div",1)(1,"input",2,0),D("focus",function(T){return g(c),v(i.onInputFocus(T))})("blur",function(T){return g(c),v(i.onInputBlur(T))})("change",function(T){return g(c),v(i.handleChange(T))}),a(),s(3,"div",3),h(4,ai,3,2,"ng-container",4)(5,si,1,0,null,5),a()()}n&2&&(we(i.style),z(i.styleClass),l("ngClass",i.containerClass),u("data-p-highlight",i.checked)("data-p-checked",i.checked)("data-p-disabled",i.disabled),r(),we(i.inputStyle),z(i.inputClass),l("value",i.value)("checked",i.checked)("disabled",i.disabled)("readonly",i.readonly)("ngClass",Ze(26,Yt)),u("id",i.inputId)("name",i.name)("tabindex",i.tabindex)("required",i.required?!0:null)("aria-labelledby",i.ariaLabelledBy)("aria-label",i.ariaLabel),r(3),l("ngIf",!i.checkboxIconTemplate&&!i._checkboxIconTemplate),r(),l("ngTemplateOutlet",i.checkboxIconTemplate||i._checkboxIconTemplate)("ngTemplateOutletContext",q(27,ei,i.checked)))},dependencies:[w,te,Ye,ce,dt,xt,_],encapsulation:2,changeDetection:0})}return e})(),$t=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=X({type:e});static \u0275inj=H({imports:[Ce,_,_]})}return e})();var ui=({dt:e})=>`
.p-skeleton {
    overflow: hidden;
    background: ${e("skeleton.background")};
    border-radius: ${e("skeleton.border.radius")};
}

.p-skeleton::after {
    content: "";
    animation: p-skeleton-animation 1.2s infinite;
    height: 100%;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transform: translateX(-100%);
    z-index: 1;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0), ${e("skeleton.animation.background")}, rgba(255, 255, 255, 0));
}

[dir='rtl'] .p-skeleton::after {
    animation-name: p-skeleton-animation-rtl;
}

.p-skeleton-circle {
    border-radius: 50%;
}

.p-skeleton-animation-none::after {
    animation: none;
}

@keyframes p-skeleton-animation {
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(100%);
    }
}

@keyframes p-skeleton-animation-rtl {
    from {
        transform: translateX(100%);
    }
    to {
        transform: translateX(-100%);
    }
}
`,mi={root:{position:"relative"}},hi={root:({props:e})=>["p-skeleton p-component",{"p-skeleton-circle":e.shape==="circle","p-skeleton-animation-none":e.animation==="none"}]},Tt=(()=>{class e extends A{name="skeleton";theme=ui;classes=hi;inlineStyles=mi;static \u0275fac=(()=>{let t;return function(i){return(t||(t=x(e)))(i||e)}})();static \u0275prov=E({token:e,factory:e.\u0275fac})}return e})();var Re=(()=>{class e extends S{styleClass;style;shape="rectangle";animation="wave";borderRadius;size;width="100%";height="1rem";_componentStyle=y(Tt);containerClass(){return{"p-skeleton p-component":!0,"p-skeleton-circle":this.shape==="circle","p-skeleton-animation-none":this.animation==="none"}}get containerStyle(){let t=this._componentStyle?.inlineStyles.root,n;return this.size?n=ae(W(W({},this.style),t),{width:this.size,height:this.size,borderRadius:this.borderRadius}):n=W(ae(W({},t),{width:this.width,height:this.height,borderRadius:this.borderRadius}),this.style),n}static \u0275fac=(()=>{let t;return function(i){return(t||(t=x(e)))(i||e)}})();static \u0275cmp=f({type:e,selectors:[["p-skeleton"]],inputs:{styleClass:"styleClass",style:"style",shape:"shape",animation:"animation",borderRadius:"borderRadius",size:"size",width:"width",height:"height"},features:[R([Tt]),k],decls:1,vars:7,consts:[[3,"ngClass","ngStyle"]],template:function(n,i){n&1&&m(0,"div",0),n&2&&(z(i.styleClass),l("ngClass",i.containerClass())("ngStyle",i.containerStyle),u("data-pc-name","skeleton")("aria-hidden",!0)("data-pc-section","root"))},dependencies:[w,te,ve,_],encapsulation:2,changeDetection:0})}return e})(),Mt=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=X({type:e});static \u0275inj=H({imports:[Re,_,_]})}return e})();function fi(e,o){e&1&&m(0,"app-submitted",2),e&2&&l("natijaID",o)}function gi(e,o){if(e&1){let t=$();s(0,"div")(1,"h2",15),d(2),a(),s(3,"p",16),d(4," #Bittasini tanlang "),a(),s(5,"label",17)(6,"p-radiobutton",18),Y("ngModelChange",function(i){g(t);let c=p(3);return J(c.activeQuestion.answer,i)||(c.activeQuestion.answer=i),v(i)}),a(),s(7,"span",19),d(8,"\u2764\uFE0F Juda yoqadi"),a()(),s(9,"label",20)(10,"p-radiobutton",21),Y("ngModelChange",function(i){g(t);let c=p(3);return J(c.activeQuestion.answer,i)||(c.activeQuestion.answer=i),v(i)}),a(),s(11,"span",19),d(12,"\u{1F44D} Yoqadi"),a()(),s(13,"label",22)(14,"p-radiobutton",23),Y("ngModelChange",function(i){g(t);let c=p(3);return J(c.activeQuestion.answer,i)||(c.activeQuestion.answer=i),v(i)}),a(),s(15,"span",19),d(16,"\u{1F937}\u200D\u2642\uFE0F Bilmadim"),a()(),s(17,"label",24)(18,"p-radiobutton",25),Y("ngModelChange",function(i){g(t);let c=p(3);return J(c.activeQuestion.answer,i)||(c.activeQuestion.answer=i),v(i)}),a(),s(19,"span",19),d(20,"\u{1F44E} Yoqmaydi"),a()()()}if(e&2){let t=p(3);r(2),V(" ",t.activeQuestion.uz," "),r(4),Z("ngModel",t.activeQuestion.answer),r(4),Z("ngModel",t.activeQuestion.answer),r(4),Z("ngModel",t.activeQuestion.answer),r(4),Z("ngModel",t.activeQuestion.answer)}}function vi(e,o){if(e&1&&(s(0,"div",14),h(1,gi,21,5,"div"),a()),e&2){let t=p(2);r(),C(t.activeQuestion?1:-1)}}function xi(e,o){if(e&1){let t=$();s(0,"label",26)(1,"p-radiobutton",27),Y("ngModelChange",function(i){g(t);let c=p(4);return J(c.activeQuestion.answer,i)||(c.activeQuestion.answer=i),v(i)}),a(),s(2,"span",19),d(3),a()()}if(e&2){let t=o.$implicit,n=p(4);u("inputId",t.type),r(),l("value",t.type)("inputId",t.type),Z("ngModel",n.activeQuestion.answer),r(2),se(t.uz)}}function yi(e,o){if(e&1&&(s(0,"div")(1,"h2",15),d(2),a(),s(3,"p",16),d(4," #Bittasini tanlang "),a(),Ie(5,xi,4,5,"label",26,Se),a()),e&2){let t=p(3);r(2),V(" ",t.activeQuestion.question," "),r(3),$e(t.activeQuestion.answers)}}function _i(e,o){if(e&1&&(s(0,"div",14),h(1,yi,7,1,"div"),a()),e&2){let t=p(2);r(),C(t.activeQuestion?1:-1)}}function ki(e,o){if(e&1){let t=$();s(0,"label",26)(1,"p-checkbox",27),Y("ngModelChange",function(i){g(t);let c=p(4);return J(c.activeQuestion.answer,i)||(c.activeQuestion.answer=i),v(i)}),a(),s(2,"span",19),d(3),a()()}if(e&2){let t=o.$implicit,n=o.$index,i=p(4);u("inputId","answer_"+n),r(),l("value",n)("inputId","answer_"+n),Z("ngModel",i.activeQuestion.answer),r(2),se(t)}}function Ci(e,o){if(e&1&&(s(0,"div")(1,"h2",15),d(2),a(),s(3,"p",16),d(4," #Bir nechta javobni tanlay olasiz yoki umuman tanlamasligingiz ham mumkin "),a(),Ie(5,ki,4,5,"label",26,Se),a()),e&2){let t=p(3);r(2),V(" ",t.activeQuestion.question," "),r(3),$e(t.activeQuestion.answers)}}function wi(e,o){if(e&1&&(s(0,"div",14),h(1,Ci,7,1,"div"),a()),e&2){let t=p(2);r(),C(t.activeQuestion?1:-1)}}function Si(e,o){e&1&&(s(0,"div",28),m(1,"p-skeleton",29)(2,"p-skeleton",30)(3,"p-skeleton")(4,"p-skeleton")(5,"p-skeleton",31),a(),m(6,"p-skeleton",32)(7,"p-skeleton",32)(8,"p-skeleton",32)(9,"p-skeleton",32))}function Ii(e,o){if(e&1){let t=$();s(0,"button",37),D("click",function(){g(t);let i=p(3);return v(i.prevQuestion())}),m(1,"i",38),d(2," Oldingi savol "),a()}}function $i(e,o){if(e&1){let t=$();s(0,"div",13)(1,"div",33),h(2,Ii,3,0,"button",34),s(3,"button",35),D("click",function(){g(t);let i=p(2);return v(i.nextQuestion())}),d(4),m(5,"i",36),a()()()}if(e&2){let t=p(2);r(2),C(t.activeQuestionIndex>0?2:-1),r(),l("disabled",!(t.activeQuestion.answer!=null&&t.activeQuestion.answer!=null||t.activeQuestionType===3)||t.submitLoading())("loading",t.submitLoading()),r(),V(" ",t.activeQuestionIndex===65?"Tugatish":"Keyingi savol"," ")}}function Ti(e,o){if(e&1&&(s(0,"div",3)(1,"div",4)(2,"div",5)(3,"div",6)(4,"h1",7),d(5," Kasb tanlash testi "),a(),s(6,"p",8),d(7," Barcha savollarga to'g'ri javob bering. Bu sizning kelajagingiz uchun muhim qadam. "),a(),s(8,"div",9)(9,"p-stepper",10)(10,"p-step-list")(11,"p-step",11),d(12),a(),s(13,"p-step",11),d(14),a(),s(15,"p-step",11),d(16),a()(),s(17,"p-step-panels")(18,"p-step-panel",12),h(19,vi,2,1,"ng-template",null,0,fe),a(),s(21,"p-step-panel",12),h(22,_i,2,1,"ng-template",null,0,fe),a(),s(24,"p-step-panel",12),h(25,wi,2,1,"ng-template",null,0,fe),a()(),h(27,Si,10,0),a()()(),h(28,$i,6,4,"div",13),a()()()),e&2){let t=p();r(9),l("value",t.activeQuestionType),r(2),l("value",1)("disabled",!0),r(),V("Qiziqish ",t.activeQuestionIndex<30?t.activeQuestionIndex:30,"/30"),r(),l("value",2)("disabled",!0),r(),V("Xarakter ",t.activeQuestionIndex<30?0:t.activeQuestionIndex>58?28:t.activeQuestionIndex-30,"/28"),r(),l("value",3)("disabled",!0),r(),V("Qobiliyat ",t.activeQuestionIndex<58?0:t.activeQuestionIndex>66?8:t.activeQuestionIndex-58,"/8"),r(2),l("value",1),r(3),l("value",2),r(3),l("value",3),r(3),C(t.isLoading()?27:-1),r(),C(t.activeQuestion?28:-1)}}var Ae=class e{constructor(o){this.$base=o;this.isLoading.set(!0),o.getAll().subscribe(t=>{this.isLoading.set(!1),this.questions.set([...t.riasec.questions,...t.mbti.questions,...t.mi.questions])})}$route=y(et);router=y(tt);$message=y(ct);natijaID=j(this.$route.snapshot.queryParams.natijaID);questions=j([]);activeQuestionIndex=0;activeQuestionType=1;isLoading=j(!1);submitLoading=j(!1);get activeQuestion(){return this.questions()[this.activeQuestionIndex]}prevQuestion(){this.activeQuestionIndex--,this.treatQuestionType()}nextQuestion(){if(this.activeQuestionIndex===65){this.submitLoading.set(!0),this.$base.submit({riasec:this.questions().slice(0,30),mbti:this.questions().slice(30,58),mi:this.questions().slice(58).map(o=>ae(W({},o),{answer:[]}))}).pipe(He(()=>(this.$message.add({severity:"error",summary:"Afsusdamiz :(",detail:"Kutilmagan xatolik yuz berdi. Iltimos, qayta urinib ko'ring!"}),We(null)))).subscribe(o=>{o&&(this.submitLoading.set(!1),this.natijaID.set(o.resultCode),this.router.navigate([],{queryParams:{natijaID:this.natijaID()}}))});return}this.activeQuestionIndex++,this.treatQuestionType()}treatQuestionType(){if(this.activeQuestionIndex<30){this.activeQuestionType=1;return}if(this.activeQuestionIndex<58){this.activeQuestionType=2;return}this.activeQuestionType=3}static \u0275fac=function(t){return new(t||e)(Ue(vt))};static \u0275cmp=f({type:e,selectors:[["app-test"]],decls:4,vars:1,consts:[["content",""],[1,"bg-gray-50"],[3,"natijaID"],[1,"min-h-screen","py-8"],[1,"max-w-3xl","mx-auto","px-4"],[1,"bg-white","rounded-2xl","shadow-sm","border","border-gray-100","p-8"],[1,"text-center","mb-12"],[1,"text-3xl","font-bold","text-gray-900","mb-4"],[1,"text-gray-600","mb-8"],[1,"card","flex","justify-center"],[1,"basis-[50rem]",3,"value"],[3,"value","disabled"],[3,"value"],["id","questionContainer",1,"mt-12"],[1,"flex","flex-col"],[1,"text-2xl","font-semibold","text-gray-900","text-center"],[1,"text-gray-500","mb-8"],["inputId","judayoqadi",1,"mb-4","flex","items-start","gap-2","p-6","border-2","border-gray-200","rounded-xl","cursor-pointer","hover:border-primary","hover:bg-blue-50/30","transition-all","transform","hover:-translate-y-1"],["name","answer","value","3","inputId","judayoqadi",3,"ngModelChange","ngModel"],[1,"text-gray-700","mt-[2px]"],["inputId","yoqadi",1,"mb-4","flex","items-start","gap-2","p-6","border-2","border-gray-200","rounded-xl","cursor-pointer","hover:border-primary","hover:bg-blue-50/30","transition-all","transform","hover:-translate-y-1"],["name","answer","value","2","inputId","yoqadi",3,"ngModelChange","ngModel"],["inputId","bilmadim",1,"mb-4","flex","items-start","gap-2","p-6","border-2","border-gray-200","rounded-xl","cursor-pointer","hover:border-primary","hover:bg-blue-50/30","transition-all","transform","hover:-translate-y-1"],["name","answer","value","1","inputId","bilmadim",3,"ngModelChange","ngModel"],["inputId","yoqmaydi",1,"mb-4","flex","items-start","gap-2","p-6","border-2","border-gray-200","rounded-xl","cursor-pointer","hover:border-primary","hover:bg-blue-50/30","transition-all","transform","hover:-translate-y-1"],["name","answer","value","0","inputId","yoqmaydi",3,"ngModelChange","ngModel"],[1,"mb-4","flex","items-start","gap-2","p-6","border-2","border-gray-200","rounded-xl","cursor-pointer","hover:border-primary","hover:bg-blue-50/30","transition-all","transform","hover:-translate-y-1"],["name","answer",3,"ngModelChange","value","inputId","ngModel"],[1,"flex","flex-col","gap-2"],["height","2rem"],["height","2rem","width","70%"],["width","10rem"],["height","4rem",1,"mt-4","block"],[1,"flex","justify-between","mt-12"],[1,"cursor-pointer","px-8","py-4","!rounded-button","text-gray-700","bg-gray-100","hover:bg-gray-200","transition-all","transform","hover:-translate-y-1","font-medium"],["pButton","",1,"cursor-pointer","!px-8","!py-4","!rounded-button","text-white","!transition-all","transform","hover:-translate-y-1","font-medium","ml-auto",3,"click","disabled","loading"],[1,"ri-arrow-right-line","ml-2"],[1,"cursor-pointer","px-8","py-4","!rounded-button","text-gray-700","bg-gray-100","hover:bg-gray-200","transition-all","transform","hover:-translate-y-1","font-medium",3,"click"],[1,"ri-arrow-left-line","mr-2"]],template:function(t,n){if(t&1&&(s(0,"main",1),h(1,fi,1,1,"app-submitted",2)(2,Ti,29,15,"div",3),a(),m(3,"p-toast")),t&2){let i;r(),C((i=n.natijaID())?1:2,i)}},dependencies:[ke,ut,xe,wt,oe,pe,Oe,de,L,Pe,ft,ht,bt,$t,Ce,Mt,Re,gt],styles:["[_nghost-%COMP%]{display:block}"],changeDetection:0})};export{Ae as default};
