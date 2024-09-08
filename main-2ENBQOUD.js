import{B as St,Ba as Nt,C as It,Ca as jt,D as xt,E as Z,Ea as Pt,F as j,Fa as Lt,H as At,Ia as $t,J as P,Ka as zt,L as k,M as x,Ma as _t,N as Et,Q as Ot,Ra as K,Sa as L,T as Tt,Ta as Ft,Wa as Bt,Xa as Ut,Y as vt,Ya as X,Z as bt,Za as Gt,_a as Ht,a as M,b as R,d as G,da as Ct,eb as Vt,g as ut,h as pt,i as dt,j as lt,ja as wt,ka as Mt,l as H,la as Rt,m as ft,n as v,q as V,r as C,s as ht,t as mt,u as gt,v as yt,xa as kt,za as Dt}from"./chunk-4JE6TP2Z.js";var Zt=[{path:"diary",loadChildren:()=>import("./chunk-NYAVX26E.js").then(e=>e.DiaryViewModule),providers:[]},{path:"**",redirectTo:"diary/view"}];var N="PERFORM_ACTION",Ie="REFRESH",Yt="RESET",Qt="ROLLBACK",te="COMMIT",ee="SWEEP",ne="TOGGLE_ACTION",xe="SET_ACTIONS_ACTIVE",ie="JUMP_TO_STATE",se="JUMP_TO_ACTION",ct="IMPORT_STATE",oe="LOCK_CHANGES",re="PAUSE_RECORDING",w=class{constructor(t,r){if(this.action=t,this.timestamp=r,this.type=N,typeof t.type>"u")throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?')}},W=class{constructor(){this.type=Ie}},q=class{constructor(t){this.timestamp=t,this.type=Yt}},J=class{constructor(t){this.timestamp=t,this.type=Qt}},Y=class{constructor(t){this.timestamp=t,this.type=te}},Q=class{constructor(){this.type=ee}},tt=class{constructor(t){this.id=t,this.type=ne}};var et=class{constructor(t){this.index=t,this.type=ie}},nt=class{constructor(t){this.actionId=t,this.type=se}},it=class{constructor(t){this.nextLiftedState=t,this.type=ct}},st=class{constructor(t){this.status=t,this.type=oe}},ot=class{constructor(t){this.status=t,this.type=re}};var F=new k("@ngrx/store-devtools Options"),Kt=new k("@ngrx/store-devtools Initial Config");function ce(){return null}var Ae="NgRx Store DevTools";function Ee(e){let t={maxAge:!1,monitor:ce,actionSanitizer:void 0,stateSanitizer:void 0,name:Ae,serialize:!1,logOnly:!1,autoPause:!1,trace:!1,traceLimit:75,features:{pause:!0,lock:!0,persist:!0,export:!0,import:"custom",jump:!0,skip:!0,reorder:!0,dispatch:!0,test:!0},connectInZone:!1},r=typeof e=="function"?e():e,n=r.logOnly?{pause:!0,export:!0,test:!0}:!1,i=r.features||n||t.features;i.import===!0&&(i.import="custom");let o=Object.assign({},t,{features:i},r);if(o.maxAge&&o.maxAge<2)throw new Error(`Devtools 'maxAge' cannot be less than 2, got ${o.maxAge}`);return o}function Xt(e,t){return e.filter(r=>t.indexOf(r)<0)}function ae(e){let{computedStates:t,currentStateIndex:r}=e;if(r>=t.length){let{state:i}=t[t.length-1];return i}let{state:n}=t[r];return n}function D(e){return new w(e,+Date.now())}function Oe(e,t){return Object.keys(t).reduce((r,n)=>{let i=Number(n);return r[i]=ue(e,t[i],i),r},{})}function ue(e,t,r){return R(M({},t),{action:e(t.action,r)})}function Te(e,t){return t.map((r,n)=>({state:pe(e,r.state,n),error:r.error}))}function pe(e,t,r){return e(t,r)}function de(e){return e.predicate||e.actionsSafelist||e.actionsBlocklist}function ve(e,t,r,n){let i=[],o={},m=[];return e.stagedActionIds.forEach((u,y)=>{let p=e.actionsById[u];p&&(y&&at(e.computedStates[y],p,t,r,n)||(o[u]=p,i.push(u),m.push(e.computedStates[y])))}),R(M({},e),{stagedActionIds:i,actionsById:o,computedStates:m})}function at(e,t,r,n,i){let o=r&&!r(e,t.action),m=n&&!t.action.type.match(n.map(y=>Wt(y)).join("|")),u=i&&t.action.type.match(i.map(y=>Wt(y)).join("|"));return o||m||u}function Wt(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function le(e){return{ngZone:e?Et(Ct):null,connectInZone:e}}var B=(()=>{let t=class t extends L{};t.\u0275fac=(()=>{let n;return function(o){return(n||(n=vt(t)))(o||t)}})(),t.\u0275prov=P({token:t,factory:t.\u0275fac});let e=t;return e})(),$={START:"START",DISPATCH:"DISPATCH",STOP:"STOP",ACTION:"ACTION"},rt=new k("@ngrx/store-devtools Redux Devtools Extension"),fe=(()=>{let t=class t{constructor(n,i,o){this.config=i,this.dispatcher=o,this.zoneConfig=le(this.config.connectInZone),this.devtoolsExtension=n,this.createActionStreams()}notify(n,i){if(this.devtoolsExtension)if(n.type===N){if(i.isLocked||i.isPaused)return;let o=ae(i);if(de(this.config)&&at(o,n,this.config.predicate,this.config.actionsSafelist,this.config.actionsBlocklist))return;let m=this.config.stateSanitizer?pe(this.config.stateSanitizer,o,i.currentStateIndex):o,u=this.config.actionSanitizer?ue(this.config.actionSanitizer,n,i.nextActionId):n;this.sendToReduxDevtools(()=>this.extensionConnection.send(u,m))}else{let o=R(M({},i),{stagedActionIds:i.stagedActionIds,actionsById:this.config.actionSanitizer?Oe(this.config.actionSanitizer,i.actionsById):i.actionsById,computedStates:this.config.stateSanitizer?Te(this.config.stateSanitizer,i.computedStates):i.computedStates});this.sendToReduxDevtools(()=>this.devtoolsExtension.send(null,o,this.getExtensionConfig(this.config)))}}createChangesObservable(){return this.devtoolsExtension?new G(n=>{let i=this.zoneConfig.connectInZone?this.zoneConfig.ngZone.runOutsideAngular(()=>this.devtoolsExtension.connect(this.getExtensionConfig(this.config))):this.devtoolsExtension.connect(this.getExtensionConfig(this.config));return this.extensionConnection=i,i.init(),i.subscribe(o=>n.next(o)),i.unsubscribe}):dt}createActionStreams(){let n=this.createChangesObservable().pipe(It()),i=n.pipe(C(c=>c.type===$.START)),o=n.pipe(C(c=>c.type===$.STOP)),m=n.pipe(C(c=>c.type===$.DISPATCH),v(c=>this.unwrapAction(c.payload)),mt(c=>c.type===ct?this.dispatcher.pipe(C(s=>s.type===X),ft(1e3),gt(1e3),v(()=>c),ht(()=>H(c)),yt(1)):H(c))),y=n.pipe(C(c=>c.type===$.ACTION),v(c=>this.unwrapAction(c.payload))).pipe(j(o)),p=m.pipe(j(o));this.start$=i.pipe(j(o)),this.actions$=this.start$.pipe(Z(()=>y)),this.liftedActions$=this.start$.pipe(Z(()=>p))}unwrapAction(n){return typeof n=="string"?(0,eval)(`(${n})`):n}getExtensionConfig(n){let i={name:n.name,features:n.features,serialize:n.serialize,autoPause:n.autoPause??!1,trace:n.trace??!1,traceLimit:n.traceLimit??75};return n.maxAge!==!1&&(i.maxAge=n.maxAge),i}sendToReduxDevtools(n){try{n()}catch(i){console.warn("@ngrx/store-devtools: something went wrong inside the redux devtools",i)}}};t.\u0275fac=function(i){return new(i||t)(x(rt),x(F),x(B))},t.\u0275prov=P({token:t,factory:t.\u0275fac});let e=t;return e})(),_={type:K},be="@ngrx/store-devtools/recompute",Ce={type:be};function he(e,t,r,n,i){if(n)return{state:r,error:"Interrupted by an error up the chain"};let o=r,m;try{o=e(r,t)}catch(u){m=u.toString(),i.handleError(u)}return{state:o,error:m}}function z(e,t,r,n,i,o,m,u,y){if(t>=e.length&&e.length===o.length)return e;let p=e.slice(0,t),c=o.length-(y?1:0);for(let s=t;s<c;s++){let f=o[s],I=i[f].action,d=p[s-1],a=d?d.state:n,E=d?d.error:void 0,O=m.indexOf(f)>-1?d:he(r,I,a,E,u);p.push(O)}return y&&p.push(e[e.length-1]),p}function we(e,t){return{monitorState:t(void 0,{}),nextActionId:1,actionsById:{0:D(_)},stagedActionIds:[0],skippedActionIds:[],committedState:e,currentStateIndex:0,computedStates:[],isLocked:!1,isPaused:!1}}function Me(e,t,r,n,i={}){return o=>(m,u)=>{let{monitorState:y,actionsById:p,nextActionId:c,stagedActionIds:s,skippedActionIds:f,committedState:I,currentStateIndex:d,computedStates:a,isLocked:E,isPaused:S}=m||t;m||(p=Object.create(p));function O(g){let h=g,T=s.slice(1,h+1);for(let A=0;A<T.length;A++)if(a[A+1].error){h=A,T=s.slice(1,h+1);break}else delete p[T[A]];f=f.filter(A=>T.indexOf(A)===-1),s=[0,...s.slice(h+1)],I=a[h].state,a=a.slice(h),d=d>h?d-h:0}function b(){p={0:D(_)},c=1,s=[0],f=[],I=a[d].state,d=0,a=[]}let l=0;switch(u.type){case oe:{E=u.status,l=1/0;break}case re:{S=u.status,S?(s=[...s,c],p[c]=new w({type:"@ngrx/devtools/pause"},+Date.now()),c++,l=s.length-1,a=a.concat(a[a.length-1]),d===s.length-2&&d++,l=1/0):b();break}case Yt:{p={0:D(_)},c=1,s=[0],f=[],I=e,d=0,a=[];break}case te:{b();break}case Qt:{p={0:D(_)},c=1,s=[0],f=[],d=0,a=[];break}case ne:{let{id:g}=u;f.indexOf(g)===-1?f=[g,...f]:f=f.filter(T=>T!==g),l=s.indexOf(g);break}case xe:{let{start:g,end:h,active:T}=u,A=[];for(let U=g;U<h;U++)A.push(U);T?f=Xt(f,A):f=[...f,...A],l=s.indexOf(g);break}case ie:{d=u.index,l=1/0;break}case se:{let g=s.indexOf(u.actionId);g!==-1&&(d=g),l=1/0;break}case ee:{s=Xt(s,f),f=[],d=Math.min(d,s.length-1);break}case N:{if(E)return m||t;if(S||m&&at(m.computedStates[d],u,i.predicate,i.actionsSafelist,i.actionsBlocklist)){let h=a[a.length-1];a=[...a.slice(0,-1),he(o,u.action,h.state,h.error,r)],l=1/0;break}i.maxAge&&s.length===i.maxAge&&O(1),d===s.length-1&&d++;let g=c++;p[g]=u,s=[...s,g],l=s.length-1;break}case ct:{({monitorState:y,actionsById:p,nextActionId:c,stagedActionIds:s,skippedActionIds:f,committedState:I,currentStateIndex:d,computedStates:a,isLocked:E,isPaused:S}=u.nextLiftedState);break}case K:{l=0,i.maxAge&&s.length>i.maxAge&&(a=z(a,l,o,I,p,s,f,r,S),O(s.length-i.maxAge),l=1/0);break}case X:{if(a.filter(h=>h.error).length>0)l=0,i.maxAge&&s.length>i.maxAge&&(a=z(a,l,o,I,p,s,f,r,S),O(s.length-i.maxAge),l=1/0);else{if(!S&&!E){d===s.length-1&&d++;let h=c++;p[h]=new w(u,+Date.now()),s=[...s,h],l=s.length-1,a=z(a,l,o,I,p,s,f,r,S)}a=a.map(h=>R(M({},h),{state:o(h.state,Ce)})),d=s.length-1,i.maxAge&&s.length>i.maxAge&&O(s.length-i.maxAge),l=1/0}break}default:{l=1/0;break}}return a=z(a,l,o,I,p,s,f,r,S),y=n(y,u),{monitorState:y,actionsById:p,nextActionId:c,stagedActionIds:s,skippedActionIds:f,committedState:I,currentStateIndex:d,computedStates:a,isLocked:E,isPaused:S}}}var qt=(()=>{let t=class t{constructor(n,i,o,m,u,y,p,c){let s=we(p,c.monitor),f=Me(p,s,y,c.monitor,c),I=V(V(i.asObservable().pipe(xt(1)),m.actions$).pipe(v(D)),n,m.liftedActions$).pipe(lt(pt)),d=o.pipe(v(f)),a=le(c.connectInZone),E=new ut(1);this.liftedStateSubscription=I.pipe(At(d),Jt(a),St(({state:b},[l,g])=>{let h=g(b,l);return l.type!==N&&de(c)&&(h=ve(h,c.predicate,c.actionsSafelist,c.actionsBlocklist)),m.notify(l,h),{state:h,action:l}},{state:s,action:null})).subscribe(({state:b,action:l})=>{if(E.next(b),l.type===N){let g=l.action;u.next(g)}}),this.extensionStartSubscription=m.start$.pipe(Jt(a)).subscribe(()=>{this.refresh()});let S=E.asObservable(),O=S.pipe(v(ae));Object.defineProperty(O,"state",{value:_t(O,{manualCleanup:!0,requireSync:!0})}),this.dispatcher=n,this.liftedState=S,this.state=O}ngOnDestroy(){this.liftedStateSubscription.unsubscribe(),this.extensionStartSubscription.unsubscribe()}dispatch(n){this.dispatcher.next(n)}next(n){this.dispatcher.next(n)}error(n){}complete(){}performAction(n){this.dispatch(new w(n,+Date.now()))}refresh(){this.dispatch(new W)}reset(){this.dispatch(new q(+Date.now()))}rollback(){this.dispatch(new J(+Date.now()))}commit(){this.dispatch(new Y(+Date.now()))}sweep(){this.dispatch(new Q)}toggleAction(n){this.dispatch(new tt(n))}jumpToAction(n){this.dispatch(new nt(n))}jumpToState(n){this.dispatch(new et(n))}importState(n){this.dispatch(new it(n))}lockChanges(n){this.dispatch(new st(n))}pauseRecording(n){this.dispatch(new ot(n))}};t.\u0275fac=function(i){return new(i||t)(x(B),x(L),x(Bt),x(fe),x(Gt),x(bt),x(Ft),x(F))},t.\u0275prov=P({token:t,factory:t.\u0275fac});let e=t;return e})();function Jt({ngZone:e,connectInZone:t}){return r=>t?new G(n=>r.subscribe({next:i=>e.run(()=>n.next(i)),error:i=>e.run(()=>n.error(i)),complete:()=>e.run(()=>n.complete())})):r}var Re=new k("@ngrx/store-devtools Is Devtools Extension or Monitor Present");function ke(e,t){return!!e||t.monitor!==ce}function De(){let e="__REDUX_DEVTOOLS_EXTENSION__";return typeof window=="object"&&typeof window[e]<"u"?window[e]:null}function me(e={}){return Tt([fe,B,qt,{provide:Kt,useValue:e},{provide:Re,deps:[rt,F],useFactory:ke},{provide:rt,useFactory:De},{provide:F,deps:[Kt],useFactory:Ee},{provide:Ht,deps:[qt],useFactory:Ne},{provide:Ut,useExisting:B}])}function Ne(e){return e.state}var ge={providers:[Vt(),me({maxAge:25,logOnly:!Dt()}),zt(Zt),{provide:Nt,useClass:jt}]};var ye=(()=>{let t=class t{constructor(){this.title="Atmah - Where the soul speaks"}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=Ot({type:t,selectors:[["app-root"]],standalone:!0,features:[kt],decls:2,vars:0,consts:[[1,"light-theme"]],template:function(i,o){i&1&&(wt(0,"div",0),Rt(1,"router-outlet"),Mt())},dependencies:[Pt,$t]});let e=t;return e})();Lt(ye,ge).catch(e=>console.error(e));